import AbstractLexer from "./lexical_analysis/AbstractLexer";
import Lexer from "./lexical_analysis/Lexer";

const lexer: AbstractLexer = new Lexer("_andre.._ \n test_");

console.log(lexer.nextToken());
console.log(lexer.nextToken());
console.log(lexer.nextToken());
console.log(lexer.nextToken());
console.log(lexer.nextToken());
