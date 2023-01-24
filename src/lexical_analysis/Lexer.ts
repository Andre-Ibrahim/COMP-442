import AbstractLexer from "./AbstractLexer";
import TokenType from "./TokenType";
import { isWhiteSpace, isDigit } from "../common/stringHelpers";

export default class Lexer extends AbstractLexer {
    private content: string;
    private cursor = 0;
    private line = 0;

    constructor(content: string) {
        super();
        this.content = content;
    }

    nextToken(): string {
        // checking for EOF
        if (this.content.charAt(this.cursor).length > 0) {
            let tokenType: TokenType;

            let character = this.content.charAt(this.cursor);
            this.cursor++;

            const value = character;
            if (character === "0") {
                tokenType = TokenType.INTNUM;

                while (true) {
                    character = this.content.charAt(this.cursor);
                    this.cursor++;

                    if (isWhiteSpace(character)) {
                        if (character == "\n") {
                            this.line++;
                        }
                        break;
                    }
                }
            }
            if (isDigit(character)) {
            } else if (isWhiteSpace(character)) {
                if (character == "\n") {
                    this.line++;
                }
                //break;
            }
        }
        return this.content;
    }

    private peak(): string {
        return this.content.charAt(this.cursor + 1);
    }
}
