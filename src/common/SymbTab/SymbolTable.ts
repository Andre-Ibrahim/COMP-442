import { Entry } from "./Entry";

export class SymbolTable {
    name: string;
    level: number;
    entries: Entry[] = [];
    parentTable: SymbolTable | null;

    constructor(level: number, name: string, symbolTable: SymbolTable | null) {
        this.name = name;
        this.level = level;
        this.parentTable = symbolTable;
    }

    setEntries(entries: Entry[]) {
        this.entries = entries;
    }

    addEntry(entry: Entry) {
        this.entries?.push(entry);
    }

    toString() {
        const prefix = "\t".repeat(this.level);
        let namePrefix = "";
        if (this.level > 0) {
            namePrefix = "\t";
        }
        let text = `${namePrefix}${this.name} \n`;

        this.entries?.forEach((entry) => {
            text += `${prefix}${entry.toString()}\n`;
        });

        return text;
    }
}
