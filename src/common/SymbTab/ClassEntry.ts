import { Token } from "../../lexical_analysis/Token";
import { Entry } from "./Entry";
import { SymbolTable } from "./SymbolTable";

export class ClassEntry extends Entry {
    id: Token;
    symbolTable: SymbolTable;

    constructor(id: Token, symbolTable: SymbolTable) {
        super();
        this.id = id;
        this.symbolTable = symbolTable;
    }

    toString() {
        let text = `class | id: ${this.id.lexeme} | `;
        text += "\n" + this.symbolTable?.toString() ?? "";
        return text;
    }
}
