import { Token } from "../../lexical_analysis/Token";
import { Entry } from "./Entry";
import { SymbolTable } from "./SymbolTable";

export class FunctionEntry extends Entry {
    id: Token;
    aParams: AParam[];
    returnType: string;
    symbolTable: SymbolTable;

    constructor(id: Token, aParams: AParam[], returnType: string, symbolTable: SymbolTable) {
        super();
        this.id = id;
        this.aParams = aParams;
        this.returnType = returnType;
        this.symbolTable = symbolTable;
    }

    toString() {
        let text = `function | ${this.id.lexeme} | aparams: `;

        text += "(";

        this.aParams.forEach((param, i) => {
            if(i !== 0){
                text += " ";
            }

            text += `${param.id}:${param.type}${"[]".repeat(param.dim)}`;
        });

        text += ")";

        text += `| type: ${this.returnType}\n`;

        text += this.symbolTable?.toString() ?? "";

        return text;
    }
}

export type AParam = {
    id: string;
    type: string;
    dim: number;
};
