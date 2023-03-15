import { Entry } from "./Entry";

export class SymbolTable {
    name: string;
    level: number;
    entries: (Entry | SymbolTable)[] = [];

    constructor(level: number,name: string){
        this.name = name
        this.level = level;
        
    }

    setEntries(entries: (Entry | SymbolTable)[]){
        this.entries = entries;
    }

    addEntry(entry: Entry | SymbolTable){
        this.entries?.push(entry);
    }

    toString(){
        let prefix = "\t".repeat(this.level);
        let text = `${prefix}${this.name} \n`;

        this.entries?.forEach((entry) => {
            text += `${prefix}${entry.toString()}\n`
        })

        return text;
    }

}