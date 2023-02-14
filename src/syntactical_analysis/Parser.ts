import { terminals } from "../common/stringHelpers";
import Lexer from "../lexical_analysis/Lexer";
import TokenType from "../lexical_analysis/TokenType";
import ParsingTable from "./parsingTable";
import parsingTable from "./parsingTable";

export default class Parser {
    lexer: Lexer;
    stack: string[] = [];
    paringTable: parsingTable;
    hasError: boolean = false;

    constructor(file: string){
        this.lexer = new Lexer(file);
        this.paringTable = new ParsingTable();
    }

    parse(): boolean{
        this.stack.push(TokenType.EOF);

        this.stack.push("START");

        let a = this.lexer.nextToken();

        // skipping comments
        if(a.type === TokenType.BLOCKCMT || a.type === TokenType.INLINECMT){
            a = this.lexer.nextToken();
        }

        let productions = "";

        while(a.type != TokenType.EOF){

            let top = this.top();

            if(top === "&epsilon"){
                this.stack.pop();
                top = this.top();
            }

            let tableLookUp = this.paringTable.get(top).get(a.type) ?? [];

            if(terminals().includes(top)){
                if(top === a.type){
                    productions += this.stack.pop() + " ";
                    console.log(productions);
                    a = this.lexer.nextToken();
                    // skipping comments
                    if(a.type === TokenType.BLOCKCMT || a.type === TokenType.INLINECMT){
                        a = this.lexer.nextToken();
                    }
                } else {
                    console.log(top);
                    // to do skip error
                    console.log("error ");
                    this.hasError = true;
                    return false;
                }
            // if it is not an error 
            }else if( tableLookUp.length > 0 ){
                this.stack.pop();
                this.stack.push(...tableLookUp.reverse());
                tableLookUp.reverse();

            }else {
                console.log(top);

                console.log(a);
                
                // to do skip error
                console.log("error not a terminal and does not have entry in table");
                this.hasError = true;
                return false;
            }

        }

        return !(a.type !== TokenType.EOF || this.hasError);

    }

    private top(): string{
        return this.stack[this.stack.length - 1];
    }
}