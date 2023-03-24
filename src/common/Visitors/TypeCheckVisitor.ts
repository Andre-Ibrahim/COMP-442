import { Token } from "../../lexical_analysis/Token";
import TokenType from "../../lexical_analysis/TokenType";
import { Node } from "../AST/Node";
import { NodeAPARAMS } from "../AST/NodeAPARAMS";
import { NodeARITHEXPR } from "../AST/NodeARITHEXPR";
import { NodeARRAYSIZE } from "../AST/NodeARRAYSIZE";
import { NodeASSIGNSTAT } from "../AST/NodeASSIGNSTAT";
import { NodeCLASSDECL } from "../AST/NodeCLASSDECL";
import { NodeCLASSDECLORFUNCDEF } from "../AST/NodeCLASSDECLORFUNCDEF";
import { NodeEMPTYARRAYSIZE } from "../AST/NodeEMPTYARRAYSIZE";
import { NodeEPSILON } from "../AST/NodeEPSILON";
import { NodeEXPR } from "../AST/NodeEXPR";
import { NodeFACTOR } from "../AST/NodeFACTOR";
import { NodeFACTORCALLORVAR } from "../AST/NodeFACTORCALLORVAR";
import { NodeFPARAMS } from "../AST/NodeFPARAMS";
import { NodeFUNCARROW } from "../AST/NodeFUNCARROW";
import { NodeFUNCBODY } from "../AST/NodeFUNCBODY";
import { NodeFUNCCONSTSTRUCT } from "../AST/NodeFUNCCONSTSTRUCT";
import { NodeFUNCDEF } from "../AST/NodeFUNCDEF";
import { NodeFUNCTIONCALL } from "../AST/NodeFUNCTIONCALL";
import { NodeFUNCTIONCALLSTAT } from "../AST/NodeFUNCTIONCALLSTAT";
import { NodeIFSTAT } from "../AST/NodeIFSTAT";
import { NodeINDICELIST } from "../AST/NodeINDICELIST";
import { NodeISA } from "../AST/NodeISA";
import { NodeMEMBERFUNCARROW } from "../AST/NodeMEMBERFUNCARROW";
import { NodeMEMBERFUNCDECL } from "../AST/NodeMEMBERFUNCDECL";
import { NodeMEMBERVARDECL } from "../AST/NodeMEMBERVARDECL";
import { NodeREADSTAT } from "../AST/NodeREADSTAT";
import { NodeRELEXPR } from "../AST/NodeRELEXPR";
import { NodeRETURNSTAT } from "../AST/NodeRETURNSTAT";
import { NodeSTATBLOCK } from "../AST/NodeSTATBLOCK";
import { NodeTERM } from "../AST/NodeTERM";
import { NodeVARDECL } from "../AST/NodeVARDECL";
import { NodeVARIABLE } from "../AST/NodeVARIABLE";
import { NodeWHILESTAT } from "../AST/NodeWHILESTAT";
import { NodeWRITESTAT } from "../AST/NodeWRITESTAT";
import { CompilerError } from "../Errors/Error";
import { CompilerWarning } from "../Errors/Warning";
import { ClassEntry } from "../SymbTab/ClassEntry";
import { DataMemberEntry } from "../SymbTab/DataMemberEntry";
import { Entry } from "../SymbTab/Entry";
import { AParam, FunctionEntry } from "../SymbTab/FunctionEntry";
import { InheritEntry } from "../SymbTab/InheritEntry";
import { LocalVarEntry } from "../SymbTab/LocalVarEntry";
import { MemberFuncEntry } from "../SymbTab/MemberFunEntry";
import { ParameterEntry } from "../SymbTab/ParameterEntry";
import { SymbolTable } from "../SymbTab/SymbolTable";
import { getNodeList } from "../TreeHelpers";
import { Visitor } from "./Visitor";

export class TypeCheckVisitor extends Visitor {
    globalSymbolTable: SymbolTable | null = null;
    errors: CompilerError[] = [];
    warrnings: CompilerWarning[] = [];
    defaultToken = { lexeme: "", position: 0, type: TokenType.EOF };
    expressionTypes: string[]= [];

    visit(node: NodeVARDECL): void;
    visit(node: NodeARRAYSIZE): void;
    visit(node: NodeEPSILON): void;
    visit(node: NodeRETURNSTAT): void;
    visit(node: NodeEXPR): void;
    visit(node: NodeARITHEXPR): void;
    visit(node: NodeTERM): void;
    visit(node: NodeFACTOR): void;
    visit(node: NodeVARIABLE): void;
    visit(node: NodeFACTORCALLORVAR): void;
    visit(node: NodeFUNCTIONCALL): void;
    visit(node: NodeAPARAMS): void;
    visit(node: NodeWRITESTAT): void;
    visit(node: NodeREADSTAT): void;
    visit(node: NodeSTATBLOCK): void;
    visit(node: NodeMEMBERFUNCARROW): void;
    visit(node: NodeFUNCBODY): void;
    visit(node: NodeINDICELIST): void;
    visit(node: NodeASSIGNSTAT): void;
    visit(node: NodeFUNCTIONCALLSTAT): void;
    visit(node: NodeRELEXPR): void;
    visit(node: NodeIFSTAT): void;
    visit(node: NodeWHILESTAT): void;
    visit(node: NodeFUNCDEF): void;
    visit(node: NodeFUNCARROW): void;
    visit(node: NodeFUNCCONSTSTRUCT): void;
    visit(node: NodeFPARAMS): void;
    visit(node: NodeCLASSDECL): void;
    visit(node: NodeMEMBERFUNCDECL): void;
    visit(node: NodeMEMBERVARDECL): void;
    visit(node: NodeISA): void;
    visit(node: NodeCLASSDECLORFUNCDEF): void;
    visit(node: NodeEMPTYARRAYSIZE): void;
    visit(node: unknown): void {

        if(node instanceof NodeCLASSDECLORFUNCDEF) {
            this.globalSymbolTable = node.symbolTable;
            this.traverseTree(node);
        }

        if(node instanceof NodeFUNCDEF){
            this.traverseTree(node);
        }

        if(node instanceof NodeFUNCBODY){
            this.traverseTree(node);
        }

        if(node instanceof NodeRETURNSTAT){
            
            // just a number
            // idnest

        }

        if(node instanceof NodeASSIGNSTAT){
            // logic for error
            const idnest = [...node.children];
            let firstReturnType = "void";

            if(idnest.length > 0){
                if(this.AssignStatisFunction(node, 0)){
                    firstReturnType = this.handleFunctionCall(idnest[0], this.globalSymbolTable);
                }else if(this.AssignStatisVariable(node, 0) ) {
                    
                    let counter = 0;

                    if (idnest[1] instanceof NodeINDICELIST){
                        counter = idnest[1].children.length;
                    }
                    
                    firstReturnType = this.getVariableType(idnest[0], null, counter);

                    const id = idnest[0].value ?? this.defaultToken;
                    if (firstReturnType === "void" && id.lexeme !== "self") {
                        
                        this.errors.push(new CompilerError("11.1", id, "\".\" undelclared localvar"));
                    }
                }
            }

            if(!this.isPrimitive(firstReturnType)) {

                idnest.shift();
                let previousReturnType = firstReturnType;
                idnest?.forEach((e, i) => {

                    if(e?.value && e.value.type !== TokenType.ASSIGN){
                        const classMembers: Entry[] = [];

                        //console.log(this.AssignStatisVariable(node, i - 1), i);
                    
                    if(this.AssignStatisVariable(node, i - 1)){
                        const variableName = e?.value?.lexeme ?? "";
                        
    
                        this.getClassDataMembers(previousReturnType).forEach((entry) => {
                            if(entry instanceof DataMemberEntry && entry.id.lexeme === variableName){
                                classMembers.push(entry);
                            }

                        })
                    }

                    if(this.AssignStatisFunction(node, i - 1)){
                        this.getClassMemberFunction(previousReturnType).forEach((entry) => {
                            const functionName = this.getVariableName(e);
                            if(entry instanceof DataMemberEntry && entry.id.lexeme === functionName){
                                classMembers.push(entry);
                            }
                        })
                    }
                    
                    if(classMembers.length === 0){
                        const id = e.children[0]?.value ?? this.defaultToken;
                        if(this.isPrimitive(previousReturnType)){
                            this.errors.push(new CompilerError("15.1", e.value ?? this.defaultToken, "\".\" operator used on non-class type"));
                        }else {
                            //console.log(previousReturnType);
                            this.errors.push(new CompilerError("11.2", e.value ?? this.defaultToken, "\".\" undeclared data member"));
                        }
                        
                    }else {
                        const classEntry = this.getClassEntryByName(previousReturnType);

                        if(e instanceof NodeFUNCTIONCALL){
                            if(classEntry instanceof ClassEntry){
                                previousReturnType = this.handleFunctionCall(e, classEntry.symbolTable);
                            }
                        }else if(e instanceof NodeVARIABLE){
                            if(classEntry instanceof ClassEntry){
                                previousReturnType = this.getVariableFromClassType(e, classEntry.symbolTable);
                            }
                        }
                    }

                    }

                })
        }

            this.traverseTree(node);
        }

        if(node instanceof NodeVARDECL){
            // logic for error
            const type = node.children[1].value;
            let declared = false;

            if(type?.lexeme !== TokenType.INTEGER && type?.lexeme !== TokenType.FLOAT){
                this.globalSymbolTable?.entries.forEach((entry) => {
                    if(entry instanceof ClassEntry && entry.id.lexeme === type?.lexeme){
                        declared = true;
                    }
                })
            } else{
                declared = true;
            }

            if(!declared){
                this.errors.push(new CompilerError("11.5", type ?? this.defaultToken, "undeclared class"))
            }

            this.traverseTree(node);
        }

        if(node instanceof NodeFUNCTIONCALLSTAT){
            this.handleFunctionCall(node, this.globalSymbolTable);

        }

        if(node instanceof NodeEXPR){

            this.traverseTree(node);
        }

        if(node instanceof NodeARITHEXPR){

            this.traverseTree(node);
        }

        if(node instanceof NodeTERM){
            this.traverseTree(node);
        }

        if(node instanceof NodeFACTOR){
            if(node?.children[0]?.value){
                if(node.parentNode && node.parentNode.parentNode) {
                    if(node.parentNode.parentNode.type === ""){
                        node.parentNode.parentNode.type = this.literalToType(node.children[0].value.type);
                    }else if(node.parentNode.parentNode.type !== this.literalToType(node.children[0].value.type)){
                        this.errors.push(new CompilerError("10.1", node?.children[0]?.value, "\".\" type error in expression"));
                    }
                    
                }
            }


            this.traverseTree(node);
        }

        if(node instanceof NodeFACTORCALLORVAR){

            this.handleFactorCallOrVar(node);
        }
    }

    private handleFactorCallOrVar(node: NodeFACTORCALLORVAR) {
        const variableOrFuncCall = [...node.children];
        let firstReturnType = "void";
        let isError = false;

        if (variableOrFuncCall.length > 0) {
            if (variableOrFuncCall[0] instanceof NodeFUNCTIONCALL) {
                firstReturnType = this.handleFunctionCall(variableOrFuncCall[0], this.globalSymbolTable);
            } else if (variableOrFuncCall[0] instanceof NodeVARIABLE) {
                firstReturnType = this.getVariableType(variableOrFuncCall[0], variableOrFuncCall[0].symbolTable?.parentTable ?? null);
                const id = variableOrFuncCall[0].children[0].value ?? this.defaultToken;
                if (firstReturnType === "void" && id.lexeme !== "self") {
                    this.errors.push(new CompilerError("11.1", id, "\".\" undelclared localvar"));
                    isError = true;
                }
            }
        }

        if (this.isPrimitive(firstReturnType) && variableOrFuncCall.length > 1) {
            const id = variableOrFuncCall[0].children[0].value ?? this.defaultToken;
            this.errors.push(new CompilerError("15.1", id, "\".\" operator used on non-class type"));
            isError = true;

        }

        let previousReturnType = firstReturnType;
        let previousId = variableOrFuncCall[0]?.children[0]?.value ?? this.defaultToken;
        if (!this.isPrimitive(firstReturnType)) {

            variableOrFuncCall.shift();

            variableOrFuncCall.forEach((e) => {

                const classMembers: Entry[] = [];

                if (e instanceof NodeVARIABLE) {
                    const variableName = this.getVariableName(e);


                    this.getClassDataMembers(previousReturnType).forEach((entry) => {
                        if (entry instanceof DataMemberEntry && entry.id.lexeme === variableName) {
                            classMembers.push(entry);
                        }

                    });
                }

                if (e instanceof NodeFUNCTIONCALL) {

                    this.getClassMemberFunction(previousReturnType).forEach((entry) => {
                        const functionName = this.getVariableName(e);
                        if (entry instanceof MemberFuncEntry && entry.id.lexeme === functionName) {
                            classMembers.push(entry);
                        }

                    });
                }

                if (classMembers.length === 0) {
                    const id = e.children[0].value ?? this.defaultToken;
                    if (this.isPrimitive(previousReturnType)) {
                        this.errors.push(new CompilerError("15.1", id, "\".\" operator used on non-class type"));
                        isError = true;
                    } else {
                        if (previousId.lexeme === "self") {
                            this.errors.push(new CompilerError("15.2", id, "\".\" incorrect use of self"));
                            isError = true;
                        } else if (e instanceof NodeVARIABLE) {
                            this.errors.push(new CompilerError("11.2", id, "\".\" undeclared data member"));
                            isError = true;
                        } else if (e instanceof NodeFUNCTIONCALL) {
                            this.errors.push(new CompilerError("11.3", id, "\".\" undeclared member function"));
                            isError = true;
                        }
                    }

                } else {
                    const classEntry = this.getClassEntryByName(previousReturnType);

                    if (e instanceof NodeFUNCTIONCALL) {
                        if (classEntry instanceof ClassEntry) {
                            previousReturnType = this.handleFunctionCall(e, classEntry.symbolTable);
                        }
                    } else if (e instanceof NodeVARIABLE) {
                        if (classEntry instanceof ClassEntry) {
                            previousReturnType = this.getVariableFromClassType(e, classEntry.symbolTable);
                        }
                    }
                }
                previousId = e.children[0].value ?? this.defaultToken;
            });
        }

        if (!isError) {
            if (node.parentNode && node.parentNode.parentNode && node.parentNode.parentNode.parentNode) {
                // setting the type of the term
                if (node.parentNode.parentNode.parentNode.type === "") {
                    node.parentNode.parentNode.parentNode.type = previousReturnType;
                } else if (node.parentNode.parentNode.parentNode.type !== previousReturnType) {
                    this.errors.push(new CompilerError("10.1", previousId, "\".\" type error in expression"));
                }

            }
        }
        this.traverseTree(node);

        return previousReturnType;
    }

    private AssignStatisVariable(node: Node, index: number): boolean {

        return node.children[index + 1] instanceof NodeINDICELIST;
    }

    private AssignStatisFunction(node: Node, index: number): boolean {

        return !(node.children[index + 1] instanceof NodeINDICELIST) && node?.children[index]?.value !== null;
    }

    private handleFunctionCall(node: Node, symbolTable: SymbolTable | null): string {
        const functionId = node.children[0]?.value;
        const numAPARAMS = node?.children[1]?.children?.length ?? 0;
        let idNotFound = true;
        let numParamError = true;
        let returnType = "void";

        symbolTable?.entries.forEach((e) => {
            if (e instanceof FunctionEntry && e.id.lexeme === functionId?.lexeme) {
                idNotFound = false;
                if (e.aParams.length === numAPARAMS) {
                    numParamError = false;
                    returnType = e.returnType;
                }
            }
        });

        if (idNotFound) {
            this.errors.push(new CompilerError("11.4", functionId ?? this.defaultToken, "Undeclared free function"));
        }

        if (numParamError && !idNotFound) {
            this.errors.push(new CompilerError("12.1", functionId ?? this.defaultToken, "function call with wrong number of parameters"));
        }

        return returnType;
    }

    private traverseTree(node: NodeCLASSDECLORFUNCDEF) {
        node.children?.forEach((child) => {
            child.accept(this);
        });
    }

    private getClassEntryByName(className: string): Entry {

        let classEntry: Entry[] = [];
        this.globalSymbolTable?.entries.forEach((entry) => {
            if(entry instanceof ClassEntry && className === entry.id.lexeme){
                classEntry.push(entry);
            }
        })

        if(classEntry.length){
            return classEntry[0];
        }

        return [];
    }

    private getVariableName(variable: Node): string {
        return variable.children[0].value?.lexeme ?? "";
    }

    // ToDo if we pass indice we can check if array is used properly
    private getVariableType(variable: Node, classTable: SymbolTable | null, indice?: number): string {
        let variableName = variable.children[0]?.value?.lexeme ?? "";
        //console.log(variableName);

        variableName = variableName === "" ? variable?.value?.lexeme ?? "" : variableName;
        const entries: Entry[] = [];

        variable.symbolTable?.entries.forEach((entry) => {
            if((entry instanceof ParameterEntry || entry instanceof LocalVarEntry)){

                if(entry.id.lexeme ===  variableName){
                    entries.push(entry);
                }
            }

        }) ?? [];

        // get enherited variables
        classTable?.entries.forEach((entry) => {
            //console.log("classtable", entry)
            if((entry instanceof DataMemberEntry)){
                if(entry.id.lexeme ===  variableName){
                    entries.push(entry);
                }
            }

        }) ?? [];

        if(entries && entries.length > 0){
            const entry = entries[0];
            if(entry instanceof ParameterEntry || entry instanceof LocalVarEntry || entry instanceof DataMemberEntry){

                if(indice){
                    if((entry.dim.length !== indice)){
                        this.errors.push(new CompilerError("13.2", entry.id, "Array parameters using wrong number of dimentions"));
                    }
                }

                return entry.type;
            }
        }

        return "void";
    }

    private getVariableFromClassType(variable: Node, classTable?: SymbolTable): string {
        const variableName = variable.children[0].value?.lexeme ?? "";
        const entries: Entry[] = [];

        // get enherited variables
        classTable?.entries.forEach((entry) => {
            //console.log("classtable", entry)
            if((entry instanceof DataMemberEntry)){
                if(entry.id.lexeme ===  variableName){
                    entries.push(entry);
                }
            }

        }) ?? [];

        if(entries && entries.length > 0){
            const entry = entries[0];
            if(entry instanceof ParameterEntry || entry instanceof LocalVarEntry || entry instanceof DataMemberEntry){
                return entry.type;
            }
        }

        return "void";
    }

    private getClassDataMembers(className: string): Entry[]{
        const classesFound: Entry[] = [];
        
        this.globalSymbolTable?.entries.forEach((entry) => {
            if(entry instanceof ClassEntry && entry.id.lexeme === className){
                classesFound.push(entry);
            }
        }) ?? [];


        // toDo implement inheritance
        if((classesFound?.length ?? 0 > 0)){
            const classFound = classesFound[0];
            if(classFound instanceof ClassEntry){
                const f: Entry[] = [];

                classFound.symbolTable.entries.forEach((entry) => {
                    if(entry instanceof DataMemberEntry){
                        f.push(entry);
                    }
                });

                return f;
            }
        }

        return [];
    }

    private getClassMemberFunction(className: string): Entry[]{
        const classesFound: Entry[] = [];
        
        this.globalSymbolTable?.entries.forEach((entry) => {
            if(entry instanceof ClassEntry && entry.id.lexeme === className){
                classesFound.push(entry);
            }
        }) ?? [];


        // toDo implement inheritance
        if((classesFound?.length ?? 0 > 0)){
            const classFound = classesFound[0];
            if(classFound instanceof ClassEntry){
                const f: Entry[] = [];

                classFound.symbolTable.entries.forEach((entry) => {
                    if(entry instanceof MemberFuncEntry){
                        f.push(entry);
                    }
                });

                return f;
            }
        }

        return [];
    }


    private isPrimitive(type: string){
        return type === "integer" || type === "float";
    }

    private literalToType(literal: string){
        if(literal === "intnum"){
            return "integer";
        }

        return "float";
    }
}
