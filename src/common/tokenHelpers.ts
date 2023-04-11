import TokenType from "../lexical_analysis/TokenType";

function isInvalidTokenType(tokenType: TokenType) {
    return (
        tokenType === TokenType.INVALIDCHAR ||
        tokenType === TokenType.INVALIDBLOCKCMT ||
        tokenType === TokenType.INVALIDFLOAT ||
        tokenType === TokenType.INVALIDID ||
        tokenType === TokenType.INVALIDNUM
    );
}

export { isInvalidTokenType };
