import AbstractLexer from "./lexical_analysis/AbstractLexer";
import Lexer from "./lexical_analysis/Lexer";
import { readFileSync } from 'fs';
import { Token } from "./lexical_analysis/Token";
import TokenType from "./lexical_analysis/TokenType";
import { tokenToString } from "./common/stringHelpers";

const file = readFileSync('./src/examples/lexpositivegrading.src', 'utf-8');

const lexer: AbstractLexer = new Lexer(file);

let token = lexer.nextToken();
let currentLine = token.position;
let outputFile = "";

while(true){
    
    if(token.type !== TokenType.EOF){
        if(token.position > currentLine){
            outputFile+= "\n";
        }
        outputFile += tokenToString(token);
        currentLine = token.position;
    }else{
        break;
    }

    token = lexer.nextToken();
}

console.log(outputFile);


