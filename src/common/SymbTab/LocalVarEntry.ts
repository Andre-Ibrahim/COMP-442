import { Token } from "../../lexical_analysis/Token";
import { Entry } from "./Entry";

export class LocalVarEntry extends Entry {
    id: Token;
    type: string;
    dim: number[];

    constructor(id: Token ,type: string, dim: number[]){
        super();
        this.type = type;
        this.dim = dim;
        this.id = id;
    }

    toString(){
        const dim = this.dim.map((n) => {
            if(n == -1){
                return "[]";
            }

            return `[${n}]`;
        }).join("");
        return `localvar | id: ${this.id.lexeme} | type:${this.type}${dim}`;
    }

}