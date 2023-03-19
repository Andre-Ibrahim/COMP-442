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

        if(node instanceof NodeASSIGNSTAT){
            // logic for error
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
            const functionId = node.children[0].value;
            const numAPARAMS = node?.children[1]?.children?.length ?? 0;
            let idNotFound = true;
            let numParamError = true;

            this.globalSymbolTable?.entries.forEach((e) => {
                if(e instanceof FunctionEntry && e.id.lexeme === functionId?.lexeme){
                    idNotFound = false;
                    if(e.aParams.length === numAPARAMS){
                        numParamError = false;
                    }
                }
            })

            if(idNotFound){
                this.errors.push(new CompilerError("11.4", functionId ?? this.defaultToken, "Undeclared free function"));
            }

            if(numParamError && !idNotFound){
                this.errors.push(new CompilerError("12.1", functionId ?? this.defaultToken, "function call with wrong number of parameters"));
            }

        }

        if(node instanceof NodeEXPR){
            const leafs: Node[] = [];
            getNodeList(node, leafs);
            
            let variables: Token[] = [];
            leafs.forEach((leaf) => {
                if(leaf.value?.type === TokenType.ID){
                    variables.push(leaf.value);
                }
            });
            
            variables.forEach((variable) => {
                let undeclared = true;

                node.symbolTable?.entries.forEach((entry) => {
                    
                    if(entry instanceof LocalVarEntry || entry instanceof ParameterEntry && entry.id.lexeme === variable.lexeme){
                        undeclared = false;
                    }
                    
                })

                if(undeclared){
                    this.errors.push(new CompilerError("11.1", variable, "Undeclared local variable"));
                }
            })

            this.traverseTree(node);
        }

        if(node instanceof NodeARITHEXPR){

            this.traverseTree(node);
        }

        if(node instanceof NodeTERM){
            this.traverseTree(node);
        }

        if(node instanceof NodeFACTOR){
            this.traverseTree(node);
        }

        if(node instanceof NodeFACTORCALLORVAR){

            const variableOrFuncCall = node.children;


            variableOrFuncCall.forEach((e) =>{

            })

            this.traverseTree(node);
        }
    }

    private traverseTree(node: NodeCLASSDECLORFUNCDEF) {
        node.children?.forEach((child) => {
            child.accept(this);
        });
    }
}
