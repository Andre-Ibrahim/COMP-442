import { Token } from "../../lexical_analysis/Token";
import { Entry } from "./Entry";
import { SymbolTable } from "./SymbolTable";

export class FunctionEntry extends Entry {
    id: Token;
    aParams: AParam[];
    returnType: string;
    funcScope: SymbolTable | null = null;

    constructor(id: Token, aParams: AParam[], returnType: string){
        super();
        this.id = id;
        this.aParams = aParams;
        this.returnType = returnType;
    }

    setFuncScope(funcScope: SymbolTable){
        this.funcScope = funcScope; 
    }

    toString(){
        let text = `function | ${this.id.lexeme} | aparams: `

        this.aParams.forEach((param) => {
            text += ` ${param.id}:${param.type}${"[]".repeat(param.dim)} `;
        });

        text += `| type: ${this.returnType}`;

        text += this.funcScope?.toString() ?? "";


        return text;
    }

}

export type AParam  = {
    id: string;
    type: string;
    dim: number;
}