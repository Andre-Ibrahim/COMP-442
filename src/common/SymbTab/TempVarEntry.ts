import { Token } from "../../lexical_analysis/Token";
import { LocalVarEntry } from "./LocalVarEntry";

export class TempVarEntry extends LocalVarEntry {
    expressionId: number;

    constructor(id: Token, type: string, expressionId: number) {
        super(id, type, []);
        this.expressionId = expressionId;
    }

    toString() {
        const dim = this.dim
            .map((n) => {
                if (n == -1) {
                    return "[]";
                }

                return `[${n}]`;
            })
            .join("");
        return `tempvar | id: ${this.id.lexeme} | type: ${this.type}${dim} | expressionId: ${this.expressionId}`;
    }
}
