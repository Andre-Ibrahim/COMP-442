import { Entry } from "./Entry";

export class LocalVarEntry extends Entry {
    id: string;
    type: string;
    dim: number[];

    constructor(name: string, id: string ,type: string, dim: number[]){
        super(name);
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
        return `localvar | id: ${this.id} | type:${this.type}${dim}`;
    }

}