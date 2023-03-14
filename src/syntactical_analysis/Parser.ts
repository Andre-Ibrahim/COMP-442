import { Node } from "../common/AST/Node";
import { Concept } from "../common/AST/Concept";
import { TreeFactory } from "../common/TreeFactory";
import { terminals } from "../common/stringHelpers";
import Lexer from "../lexical_analysis/Lexer";
import { Token } from "../lexical_analysis/Token";
import TokenType from "../lexical_analysis/TokenType";
import ParsingTable from "./parsingTable";
import parsingTable from "./parsingTable";
import { NodeEPSILON } from "../common/AST/NodeEPSILON";

export default class Parser {
    lexer: Lexer;
    stack: string[] = [];
    semanticStack: Node[] = [];
    paringTable: parsingTable;
    hasError = false;
    derivations = "";
    currentDerivation = "";
    errors = "";
    abstractSyntaxTree: Node = new NodeEPSILON();

    constructor(file: string) {
        this.lexer = new Lexer(file);
        this.paringTable = new ParsingTable();
    }

    parse(): boolean {
        this.stack.push("$");

        this.stack.push("START");

        let a = this.lexer.nextToken();
        let previousToken = a;

        // skipping comments
        while (a.type === TokenType.BLOCKCMT || a.type === TokenType.INLINECMT) {
            a = this.lexer.nextToken();
        }

        this.currentDerivation = "START";
        while ("$" != this.top()) {
            let top = this.top();

            if (top === "&epsilon") {
                this.stack.pop();
                top = this.top();
            }

            while (top.includes("SEMANTIC")) {
                //console.log("before factory",top);
                const treeFactory = new TreeFactory();
                this.semanticStack.push(treeFactory.get(this.stack.pop() ?? "", previousToken, this.semanticStack));
                top = this.top();
            }

            if (top === "$") {
                break;
            }

            const tableLookUp = this.paringTable.get(top).get(a.type) ?? [];

            if (terminals().includes(top)) {
                if (top === a.type) {
                    this.stack.pop();
                    previousToken = a;
                    a = this.lexer.nextToken();
                    // skipping comments
                    if (a.type === TokenType.BLOCKCMT || a.type === TokenType.INLINECMT) {
                        a = this.lexer.nextToken();
                    }
                } else {
                    // error
                    a = this.skipError(a);
                    this.hasError = true;
                }
                // if it is not an error
            } else if (tableLookUp.length > 0) {
                const nonTerminal = this.stack.pop();
                this.stack.push(...tableLookUp.reverse());
                tableLookUp.reverse();

                const tempTableLookUp = tableLookUp.filter((e) => !e.includes("SEMANTIC"));

                //console.log(tempTableLookUp);

                this.currentDerivation = this.currentDerivation
                    .replace(nonTerminal ?? "x", `${[...tempTableLookUp].join(" ")}`)
                    .replace(" &epsilon ", " ")
                    .replace("&epsilon", "");

                this.derivations += `START => ${this.currentDerivation}\n`;
            } else {
                a = this.skipError(a);
                this.hasError = true;
            }
        }

        const ast = this.semanticStack[0] ?? new NodeEPSILON();
        ast.reverse();
        this.abstractSyntaxTree = ast;

        return !(a.type !== TokenType.EOF || this.hasError);
    }

    private top(): string {
        return this.stack[this.stack.length - 1];
    }

    private skipError(lookahead: Token) {
        if (lookahead.type !== TokenType.EOF) {
            this.errors += `syntax error at ${lookahead.position}: for TokenType: ${lookahead.type} and lexeme: ${lookahead.lexeme}\n`;
        }
        const top = this.top();
        let token = lookahead;
        let first = true;

        if (token.type === TokenType.EOF || this.paringTable.getFollow(top).includes(token.type)) {
            const nonTerminal = this.stack.pop();
            this.currentDerivation = this.currentDerivation.replace(nonTerminal ?? "x", ``);
        } else {
            while (
                !this.paringTable.getFirst(top).includes(token.type) &&
                !(
                    this.paringTable.getFirst(top).includes("&epsilon") &&
                    this.paringTable.getFollow(top).includes(token.type)
                ) &&
                token.type !== TokenType.EOF
            ) {
                if (!first) {
                    this.errors += `syntax error at ${token.position}: for TokenType: ${token.type} and lexeme: ${token.lexeme}\n`;
                }
                first = false;
                token = this.lexer.nextToken();
                while (token.type === TokenType.BLOCKCMT || token.type === TokenType.INLINECMT) {
                    token = this.lexer.nextToken();
                }
            }
        }

        return token;
    }
}
