import AbstractLexer from "../../lexical_analysis/AbstractLexer";
import Lexer from "../../lexical_analysis/Lexer";
import TokenType from "../../lexical_analysis/TokenType";

describe("Lexer nextToken", () => {
    let lexer: AbstractLexer;

    it("should return a INLINECMT token type for a inline comment", () => {
        //arrange
        const text = "// this is an in line comment";
        lexer = new Lexer(text);

        //act
        const token = lexer.nextToken();

        // assert
        expect(token.type).toBe(TokenType.INLINECMT);
        expect(token.lexeme).toBe(text);
    });

    it("should return a BLOCKCMT token type for a block comment", () => {
        //arrange
        const text = "/* this is an in line comment */";
        lexer = new Lexer(text);

        //act
        const token = lexer.nextToken();

        // assert
        expect(token.type).toBe(TokenType.BLOCKCMT);
        expect(token.lexeme).toBe(text);
    });

    it("should return a BLOCKCMT token type for nested block comments", () => {
        //arrange
        const text = "/* this is /* this is a nested block comment */ a block comment */";
        lexer = new Lexer(text);

        //act
        const token = lexer.nextToken();

        // assert
        expect(token.type).toBe(TokenType.BLOCKCMT);
        expect(token.lexeme).toBe(text);
    });

    it("should return an INVALIDBLOCKCMT token type for an unclosed block comment", () => {
        //arrange
        const text = "/* this is an in line comment ";
        lexer = new Lexer(text);

        //act
        const token = lexer.nextToken();

        // assert
        expect(token.type).toBe(TokenType.INVALIDBLOCKCMT);
        expect(token.lexeme).toBe(text);
    });

    it("should return a INTNUM token type for integer", () => {
        //arrange
        const text = "12";
        lexer = new Lexer(text);

        //act
        const token = lexer.nextToken();

        // assert
        expect(token.type).toBe(TokenType.INTNUM);
        expect(token.lexeme).toBe(text);
    });

    it("should return a INVALIDNUM token type because of leading 0", () => {
        //arrange
        const text = "012";
        lexer = new Lexer(text);

        //act
        const token = lexer.nextToken();

        // assert
        expect(token.type).toBe(TokenType.INVALIDNUM);
        expect(token.lexeme).toBe(text);
    });

    it("should return a FLOATNUM token type for float decimal point value", () => {
        //arrange
        const text = "12.11";
        lexer = new Lexer(text);

        //act
        const token = lexer.nextToken();

        // assert
        expect(token.type).toBe(TokenType.FLOATNUM);
        expect(token.lexeme).toBe(text);
    });

    it("should return a FLOATNUM token type for float decimal point value", () => {
        //arrange
        const text = "0.0e0";
        lexer = new Lexer(text);

        //act
        const token = lexer.nextToken();

        // assert
        expect(token.type).toBe(TokenType.FLOATNUM);
        expect(token.lexeme).toBe(text);
    });

    it("should return a INVALIDNUM token type  for leading 0", () => {
        //arrange
        const text = "012.11";
        lexer = new Lexer(text);

        //act
        const token = lexer.nextToken();

        // assert
        expect(token.type).toBe(TokenType.INVALIDNUM);
        expect(token.lexeme).toBe(text);
    });

    it("should return a INVALIDNUM token type for trailing 0", () => {
        //arrange
        const text = "12.110";
        lexer = new Lexer(text);

        //act
        const token = lexer.nextToken();

        // assert
        expect(token.type).toBe(TokenType.INVALIDNUM);
        expect(token.lexeme).toBe(text);
    });

    it("should return a INVALIDNUM token type for leading 0 in exponent", () => {
        //arrange
        const text = "12.11e012";
        lexer = new Lexer(text);

        //act
        const token = lexer.nextToken();

        // assert
        expect(token.type).toBe(TokenType.INVALIDNUM);
        expect(token.lexeme).toBe(text);
    });

    it("should return a ID with underscore after first letter", () => {
        //arrange
        const text = "a_";
        lexer = new Lexer(text);

        //act
        const token = lexer.nextToken();

        // assert
        expect(token.type).toBe(TokenType.ID);
        expect(token.lexeme).toBe(text);
    });

    it("should return a ID with number after first letter", () => {
        //arrange
        const text = "a1";
        lexer = new Lexer(text);

        //act
        const token = lexer.nextToken();

        // assert
        expect(token.type).toBe(TokenType.ID);
        expect(token.lexeme).toBe(text);
    });

    it("should return a INVALIDCHAR for characters outside of the alphabet", () => {
        //arrange
        const text = "!@#$%^&";
        lexer = new Lexer(text);
        let token = lexer.nextToken();

        // act
        while (true) {
            if (token.type !== TokenType.EOF) {
                break;
            }
            // assert
            expect(token.type).toBe(TokenType.INVALIDCHAR);

            token = lexer.nextToken();
        }
    });

    it("should return ID EQ and FLOAT for since space isn't neccessary between tokens", () => {
        //arrange
        const text = "myvar=12.1";
        lexer = new Lexer(text);

        //act
        const identifierToken = lexer.nextToken();
        const equalToken = lexer.nextToken();
        const floatToken = lexer.nextToken();

        // assert
        expect(identifierToken.type).toBe(TokenType.ID);
        expect(identifierToken.lexeme).toBe("myvar");

        expect(equalToken.type).toBe(TokenType.EQUAL);
        expect(equalToken.lexeme).toBe("=");

        expect(floatToken.type).toBe(TokenType.FLOATNUM);
        expect(floatToken.lexeme).toBe("12.1");
    });
});
