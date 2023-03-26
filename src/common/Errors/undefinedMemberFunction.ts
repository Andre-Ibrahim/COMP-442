import { ClassEntry } from "../SymbTab/ClassEntry";
import { MemberFuncEntry } from "../SymbTab/MemberFunEntry";
import { SymbolTable } from "../SymbTab/SymbolTable";
import { CompilerError } from "./Error";

export function getUndefinedMemberFunction(golbalTable: SymbolTable | null): CompilerError[] {
    const errors: CompilerError[] = [];

    golbalTable?.entries.forEach((entry) => {
        if (entry instanceof ClassEntry) {
            entry.symbolTable.entries.forEach((e) => {
                if (e instanceof MemberFuncEntry && !e.defined) {
                    errors.push(new CompilerError("6.2", e.id, "undefined member function decleration"));
                }
            });
        }
    });

    return errors;
}
