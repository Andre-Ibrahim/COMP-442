import AbstractLexer from "./AbstractLexer";
import TokenType from "./TokenType";
import {
    isWhiteSpace,
    isLetter,
    isAlphanum,
    isDigit,
    stringToKeywordTokenType,
    specialCharToTokenType,
    isInAlaphabet,
    isNonZeroDigit,
} from "../common/stringHelpers";
import { Token } from "./Token";

export default class Lexer extends AbstractLexer {
    private content: string;
    private cursor = 0;
    private line = 1;
    private character = "";
    private tokenType = TokenType.VOID;
    private lexeme = "";

    constructor(content: string) {
        super();
        this.content = content;
    }

    nextToken(): Token {
        // checking for EOF
        if (this.content.charAt(this.cursor).length > 0) {
            // skipping white spaces and handling new line
            this.skipWhiteSpace();

            this.lexeme = this.character;

            // checking if character is part of the alphabet
            if (!isInAlaphabet(this.character)) {
                return { type: TokenType.INVALIDCHAR, lexeme: this.character, position: this.line };
            }
            // potential id
            if (isLetter(this.character) || this.character == "_") {
                return this.identifierState();
            }
            // potential integer or fraction
            if (isDigit(this.character)) {
                return this.integerOrFractionState();
            }

            // operator or comment
            if (specialCharToTokenType.get(this.character)) {
                return this.specialCharState();
            }
        }

        return { type: TokenType.EOF, lexeme: "", position: this.line };
    }

    private peak(): string {
        return this.content.charAt(this.cursor);
    }

    private lookAhead(): string {
        return this.content.charAt(this.cursor + 1);
    }

    private nextChar(): void {
        const character = this.content.charAt(this.cursor);
        this.lexeme += character;
        this.cursor++;
    }

    private skipWhiteSpace(): void {
        while (true) {
            this.character = this.content.charAt(this.cursor);
            this.cursor++;
            if (!isWhiteSpace(this.character)) {
                break;
            } else if (this.character === "\n") {
                this.line++;
            }
        }
    }

    private identifierState(): Token {
        this.tokenType = TokenType.ID;
        // first character _ resolves into invalid character
        if (this.character === "_") {
            return { type: TokenType.INVALIDCHAR, lexeme: this.lexeme, position: this.line };
        }

        while (isAlphanum(this.peak())) {
            const character = this.content.charAt(this.cursor);
            this.lexeme += character;
            this.cursor++;
        }

        const reservedKeyword = stringToKeywordTokenType.get(this.lexeme);
        if (reservedKeyword) {
            this.tokenType = reservedKeyword;
        }

        return { type: this.tokenType, lexeme: this.lexeme, position: this.line };
    }

    private integerOrFractionState(): Token {
        this.tokenType = TokenType.INTNUM;

        if(!(this.peak() === "0")){
            while (isDigit(this.peak())) {
                this.nextChar();
            }
        }else{
            this.nextChar();
        }

        // checking if there is a . for a fraction
        if (this.peak() === ".") {
            if(isDigit(this.lookAhead())){
                // consuming the . only if lookahead is number
                this.tokenType = TokenType.FLOATNUM;
                this.nextChar();
                // reading more digits if we detected a dot
                while (isDigit(this.peak())) {
                    this.nextChar();
                }
            }

        }

        // getting the integer and fraction to validate
        const [integer, fraction] = this.lexeme.split(".");

        // if number before the . is larger than 1 character and has a leading 0 then we have an invalid num
        if (integer.length > 1 && integer.charAt(0) === "0") {
            this.tokenType = TokenType.INVALIDNUM;
        }
        // if dot is detected but there is no number after than we have an invalidnum
        if (this.tokenType === TokenType.FLOATNUM && !fraction) {
            this.tokenType = TokenType.INVALIDNUM;
        }

        // if fraction has an invalid 0 then we have an invalid num
        if (fraction && fraction.length > 1 && fraction.charAt(fraction.length - 1) === "0") {
            this.tokenType = TokenType.INVALIDNUM;
        }

        // reading for scientific notation setting tokenType to invalid num until we detect a integer
        if (this.peak() === "e") {
            this.tokenType = TokenType.INVALIDNUM;
            const character = this.content.charAt(this.cursor);
            this.lexeme += character;
            this.cursor++;

            // checking if there is a + or a minus this symbols don't affect the state since they are optional
            if ((this.peak() === "+" || this.peak() === "-")) {
                this.lexeme += this.content.charAt(this.cursor++);
            }

            while (isDigit(this.peak())) {
                this.tokenType = TokenType.FLOATNUM;
                this.lexeme += this.content.charAt(this.cursor++);
            }

            const [int, float] = this.lexeme.split("e")[0].split(".");
            const exponent = this.lexeme.split("e").pop() || "";

            if (
                this.tokenType === TokenType.FLOATNUM &&
                ((exponent.charAt(0) === "0" && exponent.length > 1) ||
                    (int.charAt(0) === "0" && int.length > 1) ||
                    (float.charAt(float.length - 1) === "0" && float.length > 1))
            ) {
                this.tokenType = TokenType.INVALIDNUM;
            }
        }

        return { type: this.tokenType, lexeme: this.lexeme, position: this.line };
    }

    private specialCharState(): Token {
        this.tokenType = specialCharToTokenType.get(this.character) || TokenType.COMMA;

        if (this.tokenType === TokenType.EQUAL && this.peak() === "=") {
            this.tokenType = TokenType.EQ;
            this.cursor++;
        }

        if (this.tokenType === TokenType.LT && this.peak() === ">") {
            this.tokenType = TokenType.NOTEQ;
            this.lexeme += this.peak();
            this.cursor++;
        }

        if (this.tokenType === TokenType.LT && this.peak() === "=") {
            this.tokenType = TokenType.LEQ;
            this.lexeme += this.peak();
            this.cursor++;
        }

        if (this.tokenType === TokenType.GT && this.peak() === "=") {
            this.tokenType = TokenType.GEQ;
            this.lexeme += this.peak();
            this.cursor++;
        }

        if (this.tokenType === TokenType.EQUAL && this.peak() === ">") {
            this.tokenType = TokenType.RETURNTYPE;
            this.lexeme += this.peak();
            this.cursor++;
        }

        if (this.tokenType === TokenType.COLON && this.peak() === ":") {
            this.tokenType = TokenType.SCOPEOP;
            this.lexeme += this.peak();
            this.cursor++;
        }

        // inline comment detected
        if (this.tokenType === TokenType.DIV && this.peak() === "/") {
            return this.inlineCommentState();
        }

        // block comment detected
        if (this.tokenType === TokenType.DIV && this.peak() === "*") {
            return this.blockCommentState();
        }

        // retuning the single char operator of no double char operator was already handled
        return { type: this.tokenType, lexeme: this.lexeme, position: this.line };
    }

    private inlineCommentState(): Token {
        this.tokenType = TokenType.INLINECMT;
        this.lexeme += this.content.charAt(this.cursor++);

        while (this.peak() !== "\n" && this.peak() !== "") {
            this.lexeme += this.content.charAt(this.cursor++);
        }

        return { type: this.tokenType, lexeme: this.lexeme, position: this.line };
    }

    private blockCommentState(): Token {
        this.tokenType = TokenType.BLOCKCMT;
        const lineStartOfComment = this.line;
        this.lexeme += this.content.charAt(this.cursor++);
        // increment counter when /* is read and decrement when */ is read
        let counter = 1;

        while (true) {
            this.lexeme += this.content.charAt(this.cursor++);
            if (this.lexeme.split("").pop() === "/" && this.peak() === "*") {
                counter++;
            }
            if (this.lexeme.split("").pop() === "*" && this.peak() === "/") {
                counter--;
            }

            if (counter === 0) {
                this.lexeme += this.content.charAt(this.cursor++);
                this.line += this.lexeme.split("\n").length - 1;
                break;
            }

            if (this.peak() === "") {
                this.tokenType = TokenType.INVALIDBLOCKCMT;
                break;
            }
        }

        return { type: this.tokenType, lexeme: this.lexeme, position: lineStartOfComment };
    }
}
