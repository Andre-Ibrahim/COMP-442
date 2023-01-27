import AbstractLexer from "./AbstractLexer";
import TokenType from "./TokenType";
import {
    isWhiteSpace,
    isLetter,
    isAlphanum,
    isDigit,
    stringToKeywordTokenType,
    oneCharOperatorsToTokenType,
    isInAlaphabet,
} from "../common/stringHelpers";
import { Token } from "./Token";

export default class Lexer extends AbstractLexer {
    private content: string;
    private cursor = 0;
    private line = 1;

    constructor(content: string) {
        super();
        this.content = content;
    }

    nextToken(): Token {
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
                return { type: TokenType.INVALIDCHAR, lexeme: character, position: this.line };
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

                const reservedKeyword = stringToKeywordTokenType.get(lexeme);
                if (reservedKeyword) {
                    tokenType = reservedKeyword;
                }
                return { type: tokenType, lexeme, position: this.line };
            }

            // potential integer or fraction
            if (isDigit(character)) {
                tokenType = TokenType.INTNUM;

                let conatainsLetter = false;
                // reading all digits will validate for leading 0s later
                while (isDigit(this.peak()) || (isLetter(this.peak()) && this.peak() !== "e")) {
                    const character = this.content.charAt(this.cursor);
                    if (isLetter(character)) {
                        conatainsLetter = true;
                    }
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
                    tokenType = TokenType.FLOATNUM;
                    lexeme += this.content.charAt(this.cursor++);
                }

                const [int, float] = lexeme.split("e")[0].split(".");

                if (
                    isScientificNotation &&
                    tokenType === TokenType.FLOATNUM &&
                    (lexeme.split("e").pop()?.charAt(0) === "0" ||
                        int.charAt(0) === "0" ||
                        float.charAt(float.length - 1) === "0")
                ) {
                    tokenType = TokenType.INVALIDNUM;
                }

                if (conatainsLetter) {
                    tokenType = TokenType.INVALIDNUM;
                }

                return { type: tokenType, lexeme, position: this.line };
            }

            const oneCharOperator = oneCharOperatorsToTokenType.get(character);

            if (oneCharOperator) {
                tokenType = oneCharOperator;

                if (tokenType === TokenType.EQUAL && this.peak() === "=") {
                    tokenType = TokenType.EQ;
                    this.cursor++;
                }

                if (tokenType === TokenType.LT && this.peak() === ">") {
                    tokenType = TokenType.NOTEQ;
                    lexeme += this.peak();
                    this.cursor++;
                }

                if (tokenType === TokenType.LT && this.peak() === "=") {
                    tokenType = TokenType.LEQ;
                    lexeme += this.peak();
                    this.cursor++;
                }

                if (tokenType === TokenType.GT && this.peak() === "=") {
                    tokenType = TokenType.GEQ;
                    lexeme += this.peak();
                    this.cursor++;
                }

                if (tokenType === TokenType.EQUAL && this.peak() === ">") {
                    tokenType = TokenType.RETURNTYPE;
                    lexeme += this.peak();
                    this.cursor++;
                }

                if (tokenType === TokenType.COLON && this.peak() === ":") {
                    tokenType = TokenType.SCOPEOP;
                    lexeme += this.peak();
                    this.cursor++;
                }

                if (tokenType === TokenType.DIV && this.peak() === "/") {
                    tokenType = TokenType.INLINECMT;
                    lexeme += this.content.charAt(this.cursor++);

                    while (this.peak() !== "\n" && this.peak() !== "") {
                        lexeme += this.content.charAt(this.cursor++);
                    }

                    return { type: tokenType, lexeme, position: this.line };
                }

                if (tokenType === TokenType.DIV && this.peak() === "*") {
                    tokenType = TokenType.BLOCKCMT;
                    const lineStartOfComment = this.line;
                    lexeme += this.content.charAt(this.cursor++);
                    // increment counter when /* is read and decrement when */ is read
                    let counter = 1;

                    while (true) {
                        lexeme += this.content.charAt(this.cursor++);
                        if (lexeme.split("").pop() === "/" && this.peak() === "*") {
                            counter++;
                        }
                        if (lexeme.split("").pop() === "*" && this.peak() === "/") {
                            counter--;
                        }

                        if (counter === 0) {
                            lexeme += this.content.charAt(this.cursor++);
                            this.line += lexeme.split("\n").length - 1;
                            break;
                        }

                        if (this.peak() === "") {
                            tokenType = TokenType.INVALIDBLOCKCMT;
                            break;
                        }
                    }

                    return { type: tokenType, lexeme, position: lineStartOfComment };
                }

                return { type: tokenType, lexeme, position: this.line };
            }
        }

        return { type: TokenType.EOF, lexeme: "", position: this.line };
    }

    private peak(): string {
        return this.content.charAt(this.cursor);
    }
}
