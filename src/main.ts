import AbstractLexer from "./lexical_analysis/AbstractLexer";
import Lexer from "./lexical_analysis/Lexer";

const lexer: AbstractLexer = new Lexer("\n=> 12 = 01;");

console.log(lexer.nextToken());
console.log(lexer.nextToken());
console.log(lexer.nextToken());
console.log(lexer.nextToken());
console.log(lexer.nextToken());
console.log(lexer.nextToken());
