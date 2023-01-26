import { Token } from "../lexical_analysis/Token";
import TokenType from "../lexical_analysis/TokenType";

function isDigit(charcter: string): boolean {
    return new RegExp("^[0-9]").test(charcter);
}

function isNonZeroDigit(charcter: string): boolean {
    return new RegExp("^[1-9]").test(charcter);
}

function isLetter(character: string) {
    return new RegExp("^[a-z]|[A-Z]").test(character);
}

function isAlphanum(character: string): boolean {
    return new RegExp("^[0-9]|[a-z]|[A-Z]|_").test(character);
}

function isWhiteSpace(character: string): boolean {
    return new RegExp("\\s").test(character);
}

function isInAlaphabet(character: string): boolean {
    return new RegExp("^[0-9]|[a-z]|[A-Z]|[+()<>=/*{}[];,:]||[.]|[_]").test(character);
}

const stringToKeywordTokenType = new Map([
    ["or", TokenType.OR],
    ["not", TokenType.NOT],
    ["and", TokenType.AND],
    ["float", TokenType.FLOAT],
    ["integer", TokenType.INTEGER],
    ["void", TokenType.VOID],
    ["class", TokenType.CLASS],
    ["self", TokenType.SELF],
    ["isa", TokenType.ISA],
    ["while", TokenType.WHILE],
    ["if", TokenType.IF],
    ["then", TokenType.THEN],
    ["else", TokenType.ELSE],
    ["read", TokenType.READ],
    ["write", TokenType.WRITE],
    ["return", TokenType.RETURN],
    ["localvar", TokenType.LOCALVAR],
    ["constructor", TokenType.CONSTRUCTOR],
    ["attribute", TokenType.ATTRIBUTE],
    ["function", TokenType.FUNCTION],
    ["public", TokenType.PUBLIC],
    ["private", TokenType.PRIVATE],
]);

const oneCharOperatorsToTokenType = new Map([
    ["+", TokenType.PLUS],
    ["-", TokenType.MINUS],
    ["*", TokenType.MULT],
    ["/", TokenType.DIV],
    ["=", TokenType.EQUAL],
    ["<", TokenType.LT],
    [">", TokenType.GT],
    ["(", TokenType.OPENPAR],
    [")", TokenType.CLOSEPAR],
    ["[", TokenType.OPENSQBR],
    ["]", TokenType.CLOSESQBR],
    ["{", TokenType.OPENCUBR],
    ["}", TokenType.CLOSECUBR],
    [";", TokenType.SEMI],
    [",", TokenType.COMMA],
    [".", TokenType.DOT],
    [":", TokenType.COLON],
])

function tokenToString(token: Token): string {
    const lexeme = token.lexeme.replace(new RegExp("\\n", "g"), "\\n").replace(new RegExp("\\r", "g"), "\\r");
    return `[${token.type}, ${lexeme}, ${token.position}]`;
}

export { isDigit, isNonZeroDigit, isLetter, isAlphanum, isWhiteSpace, isInAlaphabet, stringToKeywordTokenType, oneCharOperatorsToTokenType, tokenToString };
