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
    hasError: boolean = false;
    derivations: string = "";
    errors: string = "";

    constructor(file: string){
        this.lexer = new Lexer(file);
        this.paringTable = new ParsingTable();
    }

    parse(): boolean {
        this.stack.push("$");

        this.stack.push("START");
        

        let a = this.lexer.nextToken();

        // skipping comments
        if(a.type === TokenType.BLOCKCMT || a.type === TokenType.INLINECMT){
            a = this.lexer.nextToken();
        }

        let productions = "";


        let derivation = "START";
        while("$" != this.top()){

            let top = this.top();


            if(top === "&epsilon"){
                this.stack.pop();
                top = this.top();
            }

            if(top === "$"){
                break;
            }

            let tableLookUp = this.paringTable.get(top).get(a.type) ?? [];

            if(terminals().includes(top)){
                if(top === a.type){

                    this.stack.pop();
                    a = this.lexer.nextToken();
                    // skipping comments
                    if(a.type === TokenType.BLOCKCMT || a.type === TokenType.INLINECMT){
                        a = this.lexer.nextToken();
                    }
                } else {
                    // error
                    a = this.skipError(a);
                    this.hasError = true;
                }
            // if it is not an error 
            }else if( tableLookUp.length > 0 ){
                const nonTerminal = this.stack.pop();
                this.stack.push(...tableLookUp.reverse());
                tableLookUp.reverse();

                //this.derivations += `replace ${nonTerminal}\nwith: ${[...tableLookUp].join(" ")} \nin: ${derivation}\n`;

                derivation = derivation.replace(nonTerminal ?? "x", `${[...tableLookUp].join(" ")}`).replace("&epsilon", "");

                this.derivations += `START => ${derivation}\n`;

            }else {
                a = this.skipError(a);
                this.hasError = true;
            }

        }

        //console.log( !(a.type !== TokenType.EOF || this.hasError) );

        return !(a.type !== TokenType.EOF || this.hasError);

    }

    private top(): string{
        return this.stack[this.stack.length - 1];
    }

    private skipError(lookahead: Token){
        this.errors += `syntax error at ${lookahead.position}\n`;
        const top = this.top();
        let token = lookahead;

        if(token.type === TokenType.EOF || this.paringTable.getFollow(top).includes(token.type)){
            this.stack.pop();
        }else {
            while(
                !this.paringTable.getFirst(top).includes(token.type) 
                && !(this.paringTable.getFirst(top).includes("&epsilon")
                && this.paringTable.getFollow(top).includes(token.type))
                && token.type !== TokenType.EOF
            ){
                token = this.lexer.nextToken();
            }
        }

        return token;
    }
}