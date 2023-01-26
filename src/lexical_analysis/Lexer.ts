import AbstractLexer from "./AbstractLexer";
import TokenType from "./TokenType";
import { isWhiteSpace, isInAlaphabet, isLetter, isAlphanum, isDigit } from "../common/stringHelpers";

export default class Lexer extends AbstractLexer {
    private content: string;
    private cursor = 0;
    private line = 1;

    constructor(content: string) {
        super();
        this.content = content;
    }

    nextToken(): string {
        // checking for EOF
        if (this.content.charAt(this.cursor).length > 0) {
            let tokenType = TokenType.VOID;
            let character: string;

            // skipping white spaces and handling new line
            while (true) {
                character = this.content.charAt(this.cursor);
                this.cursor++;
                if (!isWhiteSpace(character)) {
                    break;
                } else if (character === "\n") {
                    this.line++;
                }
            }

            let lexeme = character;

            // checking if character is part of the alphabet
            if (!isInAlaphabet(character)) {
                return `[error ${character} is not in the alphabet]`;
            }

            // potential id
            if (isLetter(character) || character == "_") {
                tokenType = TokenType.ID;

                // first character _ resolves into invalid character
                if (character === "_") {
                    tokenType = TokenType.INVALIDID;
                }

                while (isAlphanum(this.peak())) {
                    const character = this.content.charAt(this.cursor);
                    lexeme += character;
                    this.cursor++;
                }
            }

            // potential integer or fraction
            if (isDigit(character)) {
                tokenType = TokenType.INTNUM;

                // reading all digits will validate for leading 0s later
                while (isDigit(this.peak())) {
                    const character = this.content.charAt(this.cursor);
                    lexeme += character;
                    this.cursor++;
                }

                // checking if there is a . for a fraction
                if (this.peak() === ".") {
                    tokenType = TokenType.FLOATNUM;
                    const character = this.content.charAt(this.cursor);
                    lexeme += character;
                    this.cursor++;
                }

                // reading more digits if we detected a dot
                while (tokenType === TokenType.FLOATNUM && isDigit(this.peak())) {
                    const character = this.content.charAt(this.cursor);
                    lexeme += character;
                    this.cursor++;
                }

                // getting the integer and fraction to validate
                const [integer, fraction] = lexeme.split(".");

                // if number before the . is larger than 1 character and has a leading 0 then we have an invalid num
                if (integer.length > 1 && integer.charAt(0) === "0") {
                    tokenType = TokenType.INVALIDNUM;
                }
                // if dot is detected but there is no number after than we have an invalidnum
                if (tokenType === TokenType.FLOATNUM && !fraction) {
                    tokenType = TokenType.INVALIDNUM;
                }

                // if fraction has an invalid 0 then we have an invalid num
                if (fraction && fraction.length > 1 && fraction.charAt(fraction.length - 1) === "0") {
                    tokenType = TokenType.INVALIDNUM;
                }

                let isScientificNotation = false;

                // reading for scientific notation setting tokenType to invalid num until we detect a integer
                if (this.peak() === "e") {
                    tokenType = TokenType.INVALIDNUM;
                    isScientificNotation = true;
                    const character = this.content.charAt(this.cursor);
                    lexeme += character;
                    this.cursor++;
                }

                // checking if there is a + or a minus this symbols don't affect the state since they are optional
                if (isScientificNotation && (this.peak() === "+" || this.peak() === "-")) {
                    lexeme += this.content.charAt(this.cursor++);
                }

                while (isScientificNotation && isDigit(this.peak())) {
                    tokenType = TokenType.FLOAT;
                    lexeme += this.content.charAt(this.cursor++);
                }

                if (
                    isScientificNotation &&
                    tokenType === TokenType.FLOAT &&
                    lexeme.split("e").pop()?.charAt(0) === "0"
                ) {
                    tokenType = TokenType.INVALIDNUM;
                }
            }

            return `${tokenType} ${lexeme} ${this.line}`;
        }

        return "";
    }

    private peak(): string {
        return this.content.charAt(this.cursor);
    }
}
