import AbstractLexer from "./lexical_analysis/AbstractLexer";
import Lexer from "./lexical_analysis/Lexer";
import { readFileSync, writeFileSync } from "fs";
import TokenType from "./lexical_analysis/TokenType";
import { tokenToString } from "./common/stringHelpers";


const files = ["example-polynomial", "example-bubblesort", "lexnegativegrading", "lexpositivegrading"];


files.forEach((filename) => {

    const file = readFileSync(`./src/examples/${filename}.src`, "utf-8");
    const lexer: AbstractLexer = new Lexer(file);

    let token = lexer.nextToken();
    let currentLine = token.position;
    let outputFile = "";

    while (true) {
        if (token.type !== TokenType.EOF) {
            if (token.position > currentLine) {
                outputFile += "\n";
            }
            outputFile += tokenToString(token);
            currentLine = token.position;
        } else {
            outputFile += "\n";
            break;
        }

        token = lexer.nextToken();
    }

    writeFileSync(`./src/examples/${filename}.outlextokens`, outputFile);

})
