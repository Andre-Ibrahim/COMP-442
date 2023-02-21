import { terminals } from "../common/stringHelpers";
import Lexer from "../lexical_analysis/Lexer";
import { Token } from "../lexical_analysis/Token";
import TokenType from "../lexical_analysis/TokenType";
import ParsingTable from "./parsingTable";
import parsingTable from "./parsingTable";

export default class Parser {
    lexer: Lexer;
    stack: string[] = [];
    paringTable: parsingTable;
    hasError = false;
    derivations = "";
    currentDerivation = "";
    errors = "";

    constructor(file: string) {
        this.lexer = new Lexer(file);
        this.paringTable = new ParsingTable();
    }

    parse(): boolean {
        this.stack.push("$");

        this.stack.push("START");

        let a = this.lexer.nextToken();

        // skipping comments
        while (a.type === TokenType.BLOCKCMT || a.type === TokenType.INLINECMT) {
            a = this.lexer.nextToken();
        }

        const productions = "";
        this.currentDerivation = "START";
        while ("$" != this.top()) {
            let top = this.top();

            if (top === "&epsilon") {
                this.stack.pop();
                top = this.top();
            }

            if (top === "$") {
                break;
            }

            const tableLookUp = this.paringTable.get(top).get(a.type) ?? [];

            if (terminals().includes(top)) {
                if (top === a.type) {
                    this.stack.pop();
                    a = this.lexer.nextToken();
                    // skipping comments
                    if (a.type === TokenType.BLOCKCMT || a.type === TokenType.INLINECMT) {
                        a = this.lexer.nextToken();
                    }
                } else {
                    // error
                    a = this.skipError(a);
                    this.hasError = true;
                }
                // if it is not an error
            } else if (tableLookUp.length > 0) {
                const nonTerminal = this.stack.pop();
                this.stack.push(...tableLookUp.reverse());
                tableLookUp.reverse();

                //this.derivations += `replace ${nonTerminal}\nwith: ${[...tableLookUp].join(" ")} \nin: ${derivation}\n`;

                this.currentDerivation = this.currentDerivation
                    .replace(nonTerminal ?? "x", `${[...tableLookUp].join(" ")}`)
                    .replace(" &epsilon ", " ")
                    .replace("&epsilon", "");

                this.derivations += `START => ${this.currentDerivation}\n`;
            } else {
                a = this.skipError(a);
                this.hasError = true;
            }
        }

        return !(a.type !== TokenType.EOF || this.hasError);
    }

    private top(): string {
        return this.stack[this.stack.length - 1];
    }

    private skipError(lookahead: Token) {
        if (lookahead.type !== TokenType.EOF) {
            this.errors += `syntax error at ${lookahead.position}: for TokenType: ${lookahead.type} and lexeme: ${lookahead.lexeme}\n`;
        }
        const top = this.top();
        let token = lookahead;

        if (token.type === TokenType.EOF || this.paringTable.getFollow(top).includes(token.type)) {
            const nonTerminal = this.stack.pop();
            this.currentDerivation = this.currentDerivation.replace(nonTerminal ?? "x", ``);

        } else {
            while (
                !this.paringTable.getFirst(top).includes(token.type) &&
                !(
                    this.paringTable.getFirst(top).includes("&epsilon") &&
                    this.paringTable.getFollow(top).includes(token.type)
                ) &&
                token.type !== TokenType.EOF
            ) {
                token = this.lexer.nextToken();
                while (token.type === TokenType.BLOCKCMT || token.type === TokenType.INLINECMT) {
                    token = this.lexer.nextToken();
                }
                this.errors += `syntax error at ${token.position}: for TokenType: ${token.type} and lexeme: ${token.lexeme}\n`;
            }
        }

        return token;
    }
}
