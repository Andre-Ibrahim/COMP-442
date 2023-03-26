import { Token } from "../../lexical_analysis/Token";
import { Entry } from "./Entry";

export class DataMemberEntry extends Entry {
    id: Token;
    type: string;
    visibility: string;
    dim: number[];

    constructor(id: Token, type: string, visibility: string, dim: number[]) {
        super();

        this.id = id;
        this.type = type;
        this.visibility = visibility;
        this.dim = dim;
    }

    toString(): string {
        let text = `data | id: ${this.id.lexeme} | type: ${this.type}`;

        this.dim.forEach((d) => {
            if (d === -1) {
                text += "[]";
            } else {
                text += `[${d}]`;
            }
        });

        text += ` | visibility: ${this.visibility}`;

        return text;
    }
}
