import AbstractLexer from "./lexical_analysis/AbstractLexer";
import Lexer from "./lexical_analysis/Lexer";

const lexer: AbstractLexer = new Lexer("\n 1.23e02");

console.log(lexer.nextToken());
