import { ClassEntry } from "../SymbTab/ClassEntry";
import { DataMemberEntry } from "../SymbTab/DataMemberEntry";
import { Entry } from "../SymbTab/Entry";
import { FunctionEntry } from "../SymbTab/FunctionEntry";
import { LocalVarEntry } from "../SymbTab/LocalVarEntry";
import { MemberFuncEntry } from "../SymbTab/MemberFunEntry";
import { ParameterEntry } from "../SymbTab/ParameterEntry";
import { SymbolTable } from "../SymbTab/SymbolTable";
import { TempVarEntry } from "../SymbTab/TempVarEntry";

export class MemSizeSetter {
    globalSymbolTable: SymbolTable | null;

    constructor(globalSymbolTable: SymbolTable | null) {
        this.globalSymbolTable = globalSymbolTable;
    }

    setMemSize(): void {
        // first pass setting all primitive types
        this.globalSymbolTable?.entries.forEach((entry) => {
            if (entry instanceof FunctionEntry) {
                entry.memSize = this.handleFunctionEntry(entry);
            }

            if (entry instanceof ClassEntry) {
                entry.memSize = this.handleClassEntry(entry);
            }
        });
    }

    private handleFunctionEntry(entry: FunctionEntry): number {
        let size = 0;

        entry.symbolTable.entries.forEach((e) => {
            if (e instanceof LocalVarEntry || e instanceof TempVarEntry || e instanceof ParameterEntry) {
                const entrySize = this.getEntrySize(e);
                e.memSize = entrySize;
                size += entrySize;
            }
        });

        return size;
    }

    private handleClassEntry(entry: ClassEntry): number {
        let size = 0;

        entry.symbolTable.entries.forEach((e) => {
            if (e instanceof DataMemberEntry) {
                const entrySize = this.getEntrySize(e);
                e.memSize = entrySize;
                size += entrySize;
            }

            if (e instanceof MemberFuncEntry) {
                const entrySize = this.handleFunctionEntry(e);
                e.memSize = entrySize;
                size += entrySize;
            }
        });

        return size;
    }

    private getEntrySize(entry: Entry): number {
        if (
            entry instanceof ParameterEntry ||
            entry instanceof LocalVarEntry ||
            entry instanceof TempVarEntry ||
            entry instanceof DataMemberEntry
        ) {
            let size = 0;
            if (this.isPrimitive(entry.type)) {
                size = this.getPrimitiveSize(entry.type);

                entry.dim.forEach((d) => {
                    size = size * d;
                });

                return size;
            } else {
                this.globalSymbolTable?.entries.forEach((e) => {
                    if (e instanceof ClassEntry && e.id.lexeme === entry.type) {
                        size = e.memSize;
                    }
                });

                entry.dim.forEach((d) => {
                    if(d > 0){
                        size = size * d;
                    }
                });

                return size;
            }

            // toDo add class memsize
            return 0;
        }

        return 0;
    }

    private isPrimitive(type: string): boolean {
        return type === "integer" || type === "float";
    }

    private getPrimitiveSize(type: string): number {
        if (type === "integer") {
            return 4;
        } else if (type === "float") {
            return 8;
        }

        return 0;
    }
}
