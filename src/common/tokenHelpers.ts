import TokenType from "../lexical_analysis/TokenType";

function isInvalidTokenType(tokenType: TokenType) {
    return (
        tokenType === TokenType.INVALIDCHAR ||
        TokenType.INVALIDBLOCKCMT ||
        TokenType.INVALIDFLOAT ||
        TokenType.INVALIDID ||
        TokenType.INVALIDNUM
    );
}


export { isInvalidTokenType }