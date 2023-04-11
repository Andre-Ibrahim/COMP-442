import AbstractLexer from "./lexical_analysis/AbstractLexer";
import Lexer from "./lexical_analysis/Lexer";
import { readFileSync, writeFileSync } from "fs";
import TokenType from "./lexical_analysis/TokenType";
import { invalidTokenToString, tokenToString } from "./common/stringHelpers";
import { isInvalidTokenType } from "./common/tokenHelpers";

export function lexicalAnalysis(filename: string) {
    const file = readFileSync(`./test_files/${filename}`, "utf-8");
    const lexer: AbstractLexer = new Lexer(file);

    let token = lexer.nextToken();
    let currentLine = token.position;
    let outputFile = "";
    let errorFile = "";

    while (true) {
        if (token.type !== TokenType.EOF) {
            if (token.position > currentLine) {
                outputFile += "\n";
            }
            if (isInvalidTokenType(token.type)) {
                errorFile += invalidTokenToString(token);
            }
            outputFile += tokenToString(token);
            currentLine = token.position;
        } else {
            if (errorFile.length > 0) {
                errorFile += "\n";
            }
            if (outputFile.length > 0) {
                outputFile += "\n\n";
            }
            break;
        }

        token = lexer.nextToken();
    }
    writeFileSync(`./output/${filename}.outlexerrors`, errorFile);
    writeFileSync(`./output/${filename}.outlextokens`, outputFile);
}

// const files = ["example-polynomial", "example-bubblesort", "lexnegativegrading", "lexpositivegrading"];

// files.forEach((filename) => {
//     const file = readFileSync(`./test_files/${filename}.src`, "utf-8");
//     const lexer: AbstractLexer = new Lexer(file);

//     let token = lexer.nextToken();
//     let currentLine = token.position;
//     let outputFile = "";
//     let errorFile = "";

//     while (true) {
//         if (token.type !== TokenType.EOF) {
//             if (token.position > currentLine) {
//                 outputFile += "\n";
//             }
//             if (isInvalidTokenType(token.type)) {
//                 errorFile += invalidTokenToString(token);
//             }
//             outputFile += tokenToString(token);
//             currentLine = token.position;
//         } else {
//             if (errorFile.length > 0) {
//                 errorFile += "\n";
//             }
//             if (outputFile.length > 0) {
//                 outputFile += "\n\n";
//             }
//             break;
//         }

//         token = lexer.nextToken();
//     }
//     writeFileSync(`./output/${filename}.outlexerrors`, errorFile);
//     writeFileSync(`./output/${filename}.outlextokens`, outputFile);
// });
