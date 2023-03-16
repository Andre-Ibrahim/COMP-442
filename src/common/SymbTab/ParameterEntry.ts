import { Token } from "../../lexical_analysis/Token";
import { Entry } from "./Entry";

export class ParameterEntry extends Entry {
    id: Token;
    type: string;
    dim: number;

    constructor(id: Token ,type: string, dim: number){
        super();
        this.type = type;
        this.dim = dim;
        this.id = id;
    }

    toString(){
        return `parameter | id: ${this.id.lexeme} | type: ${this.type}${"[]".repeat(this.dim)}`;
    }

}