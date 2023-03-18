import { Token } from "../../lexical_analysis/Token";
import { AParam, FunctionEntry } from "./FunctionEntry";
import { SymbolTable } from "./SymbolTable";

export class MemberFuncEntry extends FunctionEntry {
    visibility: string;
    defined: boolean = false;
    inherited: boolean = false;

    constructor(id: Token, aParams: AParam[], returnType: string, visibility: string, symbolTable: SymbolTable) {
        super(id, aParams, returnType, symbolTable);

        this.visibility = visibility;
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

        text += `| type: ${this.returnType}`;
        text += `| visiblity: ${this.visibility}\n`;

        text += this.symbolTable?.toString() ?? "";

        return text;
    }
}
