import TokenType from "./TokenType";

type Token = {
    type: TokenType;
    lexeme: string;
    position: number;
};
