import { Token } from "../../lexical_analysis/Token";

export class CompilerWarning {
    id: string;
    token: Token;
    message: string;

    constructor(id: string, token: Token, message: string) {
        this.id = id;
        this.token = token;
        this.message = message;
    }

    toString() {
        return `warning: ${this.id} :${this.token.lexeme}: ${this.message} :${this.token.position}`;
    }
}
