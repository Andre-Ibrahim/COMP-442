import { Token } from "./Token";

abstract class AbstractLexer {
    abstract nextToken(): Token;
}

export default AbstractLexer;
