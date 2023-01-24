import TokenType from "./TokenType";

export type Token = {
    type: TokenType;
    lexeme: string;
    position: number;
};
