import AbstractLexer from "./lexical_analysis/AbstractLexer";
import Lexer from "./lexical_analysis/Lexer";

const lexer: AbstractLexer = new Lexer("Hello World");

console.log(lexer.nextToken());
