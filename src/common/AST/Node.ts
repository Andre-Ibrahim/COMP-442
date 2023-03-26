import { Token } from "../../lexical_analysis/Token";
import { SymbolTable } from "../SymbTab/SymbolTable";
import { Visitor } from "../Visitors/Visitor";

export class Node {
    value: Token | null = null;
    children: Node[] = [];
    parentNode: Node | null = null;
    type = "";

    symbolTable: SymbolTable | null = null;

    constructor() {}

    setValue(value: Token) {
        this.value = value;
    }

    setSymbolTable(symbolTable: SymbolTable | null) {
        this.symbolTable = symbolTable;
    }

    getParentNode() {
        this.parentNode;
    }

    createChildNode(token: Token) {
        const newNode = new Node();
        newNode.setValue(token);
        this.children.push(newNode);
        newNode.parentNode = this;

        return newNode;
    }

    createChildNodeFromNode(node: Node) {
        this.children.push(node);
        node.parentNode = this;
        return node;
    }

    getTreeString = (node: Node, spaceCount = 0) => {
        let str = "\n";

        node.children.forEach((child) => {
            const nodeString = this.getNodeString(child);

            str += `${"| ".repeat(spaceCount)}${nodeString}${this.getTreeString(child, spaceCount + 1)}`;
        });

        return str;
    };

    reverseTree = (node: Node) => {
        node.children = node.children.reverse();

        node.children.forEach((child) => {
            this.reverseTree(child);
        });
    };

    reverse() {
        this.reverseTree(this);
    }

    print() {
        console.log(`\n${JSON.stringify(this.value)}${this.getTreeString(this, 1)}`);
    }

    printTree(): string {
        const nodeString = this.getNodeString(this);
        return `\n${nodeString}${this.getTreeString(this, 1)}`;
    }

    toString(): string {
        return "DEFAULT";
    }

    accept(visitor: Visitor) {
        visitor.visit(this);
    }

    private getNodeString(node: Node) {
        if (node.value) {
            return (node.value as Token).type ? JSON.stringify(node.value) : node.toString();
        }

        return node.toString();
    }
}
