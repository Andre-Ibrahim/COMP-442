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
    derivations: string = "";

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
                    console.log(top);
                    // to do skip error
                    console.log("error ");
                    this.hasError = true;
                    return false;
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

                console.log(this.stack);

                console.log(a);
                
                // to do skip error
                console.log("error not a terminal and does not have entry in table");
                this.hasError = true;
                return false;
            }

        }

        //console.log( !(a.type !== TokenType.EOF || this.hasError) );

        return !(a.type !== TokenType.EOF || this.hasError);

    }

    private top(): string{
        return this.stack[this.stack.length - 1];
    }
}