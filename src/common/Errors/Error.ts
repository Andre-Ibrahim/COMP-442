import { Token } from "../../lexical_analysis/Token";

export class CompilerError {
    id: string;
    token: Token;
    message: string;

    constructor(id: string, token: Token, message: string) {
        this.id = id;
        this.token = token;
        this.message = message;
    }

    toString() {
        return `error: ${this.id} :${this.token.lexeme}: ${this.message} :${this.token.position}`;
    }
}
