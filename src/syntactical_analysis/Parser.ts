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
        this.stack.push("$");

        this.stack.push("START");

        let a = this.lexer.nextToken();

        while(this.top() != "$"){
            console.log(this.stack);

            let x = this.top();

            const tableLookUp = this.paringTable.get(x).get(a.type) ?? [];

            if(terminals().includes(x)){
                if(x === a.type){
                    this.stack.pop();
                    a = this.lexer.nextToken();
                } else {
                    // to do skip error
                    this.hasError = true;
                }
            // if it is not an error 
            }else if( tableLookUp.length > 0){
                this.stack.pop();
                this.stack.push(...tableLookUp.reverse())

            }else {
                // to do skip error
                this.hasError = true;
            }

        }

        return !(a.type !== TokenType.EOF || this.hasError);

    }

    private top(): string{
        return this.stack[this.stack.length - 1];
    }
}