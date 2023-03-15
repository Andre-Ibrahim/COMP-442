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
import { Entry } from "../SymbTab/Entry";
import { FunctionEntry } from "../SymbTab/FunctionEntry";
import { LocalVarEntry } from "../SymbTab/LocalVarEntry";
import { ParameterEntry } from "../SymbTab/ParameterEntry";
import { SymbolTable } from "../SymbTab/SymbolTable";
import { Visitor } from "./Visitor";

export class SymbTabVisitor extends Visitor {
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
        if(node instanceof NodeCLASSDECLORFUNCDEF){
        
        node.setSymbolTable(new SymbolTable(0,"global"));
		// propagate accepting the same visitor to all the children
		// this effectively achieves Depth-First AST Traversal
        node.children?.forEach((child) => {
            child.setSymbolTable(node.symbolTable);
            child.accept(this);
        })

        }

        if(node instanceof NodeFUNCDEF){

            const id = node.children[0].value?.lexeme ?? "";
            const funcArrow = node.children[1];
            const returnT = funcArrow.children[funcArrow.children.length - 1].value?.lexeme;

            const functionEntry = new FunctionEntry(id, id, [], returnT ?? "");
            node.symbolTable?.addEntry(functionEntry);

            const localTable = new SymbolTable((node.symbolTable?.level ?? -1) + 1, "function");
            node.symbolTable?.addEntry(localTable);

            node.children?.forEach((child) => {
                child.setSymbolTable(localTable);
                child.accept(this);
            })

        }

        if(node instanceof NodeFUNCARROW){
            node.children?.forEach((child) => {
                child.setSymbolTable(node.symbolTable);
                child.accept(this);
            })

        }

        if(node instanceof NodeFPARAMS){

            let i = 0;
            const entries: Entry[] =[];
            while(i < node.children.length){

                const id =  node.children[i]?.value?.lexeme ?? "id";
                const type = node.children[i + 1]?.value?.lexeme ?? "type";
                const dim = node.children[i + 2]?.children?.length ?? 0;
                
                //entries.push(new ParameterEntry(id, id, type, dim));
                node.symbolTable?.addEntry(new ParameterEntry(id, id, type, dim));
                i += 3;
            }


            node.children?.forEach((child) => {
                child.setSymbolTable(node.symbolTable);
                child.accept(this);
            })
        }

        if(node instanceof NodeFUNCBODY){
            node.children?.forEach((child) => {
                child.setSymbolTable(node.symbolTable);
                child.accept(this);
            })
        }

        if(node instanceof NodeVARDECL){

            const id = node.children[0].value?.lexeme ?? "id";
            const type = node.children[1]?.value?.lexeme ?? "type";
            const dim = node.children[2].children.map((child) => {
                if(child.value?.lexeme){
                    return Number(child.value?.lexeme);
                }

                return -1;
            });
            node.symbolTable?.addEntry(new LocalVarEntry(id, id, type, dim))
            node.children?.forEach((child) => {
                child.setSymbolTable(node.symbolTable);
                child.accept(this);
            })
        }
    }
    
}