import AbstractLexer from "./AbstractLexer";
import TokenType from "./TokenType";
import { isWhiteSpace, isDigit, isInAlaphabet, isLetter, isAlphanum } from "../common/stringHelpers";
import { Token } from "./Token";

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

            while(true){
                character = this.content.charAt(this.cursor);
                this.cursor++;
                if(!isWhiteSpace(character)){
                    break;
                }else if(character === "\n"){
                    this.line++;
                }
            }

            let value = character;

            // checking if character is part of the alphabet
            if(!isInAlaphabet(character)){
                return `[error ${character} is not in the alphabet]`;
            }
            
            // potential id
            if(isLetter(character) || character == "_"){
                
                // first character _ resolves into invalid character
                tokenType = TokenType.ID;

                if(character === "_"){
                    tokenType = TokenType.INVALIDID;
                }

                while(isAlphanum(this.peak())){
                    let character = this.content.charAt(this.cursor);
                    value += character;
                    this.cursor++;
                }
            }

            return `${tokenType}  ${value} ${this.line}`;
        }

        return "";
    }

    private peak(): string {
        return this.content.charAt(this.cursor);
    }
}
