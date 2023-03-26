import { ClassEntry } from "./SymbTab/ClassEntry";
import { DataMemberEntry } from "./SymbTab/DataMemberEntry";
import { Entry } from "./SymbTab/Entry";
import { FunctionEntry } from "./SymbTab/FunctionEntry";
import { LocalVarEntry } from "./SymbTab/LocalVarEntry";
import { MemberFuncEntry } from "./SymbTab/MemberFunEntry";
import { ParameterEntry } from "./SymbTab/ParameterEntry";
import { SymbolTable } from "./SymbTab/SymbolTable";
import { TempVarEntry } from "./SymbTab/TempVarEntry";

export function setMemSize(golbalSymbolTable: SymbolTable | null): void {

    // first pass setting all primitive types
    golbalSymbolTable?.entries.forEach((entry) => {

        if(entry instanceof FunctionEntry){

            entry.memSize = handleFunctionEntry(entry);
        }

        if(entry instanceof ClassEntry) {
            entry.memSize = handleClassEntry(entry);
        }
    })

}

function handleFunctionEntry(entry: FunctionEntry): number {

    let size = 0;

    entry.symbolTable.entries.forEach((e) => {
        
        if(e instanceof ParameterEntry || e instanceof LocalVarEntry || e instanceof TempVarEntry){
            const entrySize = getEntrySize(e);
            e.memSize = entrySize;
            size += entrySize;
        }
    })

    return size;

}

function handleClassEntry(entry: ClassEntry): number {

    let size = 0;

    entry.symbolTable.entries.forEach((e) => {
        
        if(e instanceof DataMemberEntry){
            const entrySize = getEntrySize(e);
            e.memSize = entrySize;
            size += entrySize;
        }

        if(e instanceof MemberFuncEntry){
            const entrySize = handleFunctionEntry(e);
            e.memSize = entrySize;
            size += entrySize;
        }
    })

    return size;

}

function getEntrySize(entry: Entry): number {
    if(entry instanceof ParameterEntry || entry instanceof LocalVarEntry || entry instanceof TempVarEntry || entry instanceof DataMemberEntry){
        if(isPrimitive(entry.type)){
            
            let size = getPrimitiveSize(entry.type);

            entry.dim.forEach((d) => {
                size = size * d;
            })

            return size;
        }

        // toDo add class memsize
        return 0;
    }

    return 0;
}


function isPrimitive(type: string): boolean {
    return type === "integer" || type === "float";
}

function getPrimitiveSize(type: string): number {
    if(type === "integer"){
        return 4;
    }else if(type === "float"){
        return 8;
    }

    return 0;
}