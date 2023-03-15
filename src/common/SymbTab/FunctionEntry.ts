import { Entry } from "./Entry";
import { SymbolTable } from "./SymbolTable";

export class FunctionEntry extends Entry {
    id: string;
    aParams: AParam[];
    returnType: string;
    funcScope: SymbolTable | null = null;

    constructor(name: string, id: string, aParams: AParam[], returnType: string){
        super(name);
        this.id = id;
        this.aParams = aParams;
        this.returnType = returnType;
    }

    setFuncScope(funcScope: SymbolTable){
        this.funcScope = funcScope; 
    }

    toString(){
        let text = `function | ${this.id} | aparams: `

        this.aParams.forEach((param) => {
            text += ` ${param.id}:${param.type}${"[]".repeat(param.dim)} `;
        });

        text += `| type: ${this.returnType}`;

        text += this.funcScope?.toString() ?? "";


        return text;
    }

}

type AParam  = {
    id: string;
    type: string;
    dim: number;
}