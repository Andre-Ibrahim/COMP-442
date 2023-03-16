import { Token } from "../../lexical_analysis/Token";
import { Entry } from "./Entry";

export class InheritEntry extends Entry {
    id: Token;

    constructor(id: Token) {
        super();
        this.id = id;
    }

    toString(): string {
        return `inherit | ${this.id.lexeme}`;
    }
}
