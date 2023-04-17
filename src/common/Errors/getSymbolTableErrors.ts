import { Token } from "../../lexical_analysis/Token";
import TokenType from "../../lexical_analysis/TokenType";
import { ClassEntry } from "../SymbTab/ClassEntry";
import { FunctionEntry } from "../SymbTab/FunctionEntry";
import { MemberFuncEntry } from "../SymbTab/MemberFunEntry";
import { SymbolTable } from "../SymbTab/SymbolTable";
import { CompilerError } from "./Error";

export function getSymbolTableErrors(golbalTable: SymbolTable | null): CompilerError[] {
    const errors: CompilerError[] = [];
    const emptyToken: Token = {lexeme: "", type: TokenType.EOF, position: 0}

    golbalTable?.entries.forEach((entry) => {
        if (entry instanceof ClassEntry) {
            entry.symbolTable.entries.forEach((e) => {
                if (e instanceof MemberFuncEntry && !e.defined) {
                    errors.push(new CompilerError("6.2", e.id, "undefined member function decleration"));
                }
            });
        }
    });

    let countMain = 0;

    let main: Token | null = null;

    golbalTable?.entries.forEach((entry) => {
        if (entry instanceof FunctionEntry && entry.id.lexeme === "main") {
            countMain++;
            main = entry.id;
        }
    });


    if(countMain === 0){
        errors.push(new CompilerError("15.2", emptyToken, "non existing main function"))
    }else if(countMain > 1){
        errors.push(new CompilerError("15.3", main ?? emptyToken, "duplicate main function"))
    }

    return errors;
}
