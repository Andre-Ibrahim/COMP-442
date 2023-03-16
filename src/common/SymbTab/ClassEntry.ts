import { Token } from "../../lexical_analysis/Token";
import { Entry } from "./Entry";

export class ClassEntry extends Entry {
    id: Token;

    constructor(id: Token){
        super();
        this.id = id;
    }

    toString(){
        return `class | id: ${this.id.lexeme} | `;
    }

}