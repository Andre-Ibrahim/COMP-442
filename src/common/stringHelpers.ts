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
    return (
        new RegExp("^[0-9]|[a-z]|[A-Z]|[-]|[+]|[(]|[)]|[<]|[>]|[=]|[/]|[*]|[{]|[}]|[;]|[,]|[:]|[.]|[_]").test(
            character,
        ) ||
        character === "[" ||
        character === "]" ||
        character === ""
    );
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

const specialCharToTokenType = new Map([
    ["+", TokenType.PLUS],
    ["-", TokenType.MINUS],
    ["*", TokenType.MULT],
    ["/", TokenType.DIV],
    ["=", TokenType.ASSIGN],
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
]);

function tokenToString(token: Token): string {
    const lexeme = token.lexeme.replace(new RegExp("\\n", "g"), "\\n").replace(new RegExp("\\r", "g"), "\\r");
    return `[${token.type}, ${lexeme}, ${token.position}]`;
}

const invalidTokenTypeToString = new Map([
    [TokenType.INVALIDCHAR, "Invalid character"],
    [TokenType.INVALIDFLOAT, "Invalid float"],
    [TokenType.INVALIDNUM, "Invalid number"],
    [TokenType.INVALIDID, "Invalid identifier"],
    [TokenType.INVALIDBLOCKCMT, "Invalid block comment"],
]);

function invalidTokenToString(token: Token): string {
    const invalidString = invalidTokenTypeToString.get(token.type);

    if (invalidString) {
        return `Lexical error: ${invalidString}: "${token.lexeme}": line ${token.position}.`;
    }

    return "";
}

function terminals(): string[] {
    return Object.values(TokenType)
        .filter((t) => t !== TokenType.INVALIDCHAR)
        .filter((t) => t !== TokenType.INVALIDFLOAT)
        .filter((t) => t !== TokenType.INVALIDID)
        .filter((t) => t !== TokenType.INVALIDBLOCKCMT)
        .filter((t) => t !== TokenType.INLINECMT)
        .filter((t) => t !== TokenType.BLOCKCMT);
}

function grammarToToken(terminal: string): string {
    switch (terminal) {
        case "intlit":
            return TokenType.INTNUM;
        case "floatlit":
            return TokenType.FLOATNUM;
        case "rpar":
            return TokenType.CLOSEPAR;
        case "lpar":
            return TokenType.OPENPAR;
        case "rcurbr":
            return TokenType.CLOSECUBR;
        case "lcurbr":
            return TokenType.OPENCUBR;
        case "neq":
            return TokenType.NOTEQ;
        case "rsqbr":
            return TokenType.CLOSESQBR;
        case "lsqbr":
            return TokenType.OPENSQBR;
        case "arrow":
            return TokenType.RETURNTYPE;
        case "equal":
            return TokenType.ASSIGN;
        case "sr":
            return TokenType.SCOPEOP;
    }

    return terminal;
}

export {
    isDigit,
    isNonZeroDigit,
    isLetter,
    isAlphanum,
    terminals,
    grammarToToken,
    isWhiteSpace,
    isInAlaphabet,
    stringToKeywordTokenType,
    specialCharToTokenType,
    tokenToString,
    invalidTokenToString,
};
