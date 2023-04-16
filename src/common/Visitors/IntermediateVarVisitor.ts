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
import { LitVarEntry } from "../SymbTab/LitVarEntry";
import { TempVarEntry } from "../SymbTab/TempVarEntry";
import { Visitor } from "./Visitor";

export class IntermediateVarVisitor extends Visitor {
    tempvarCount = 0;
    litvarCount = 0;
    expressionCount = 0;
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
        if (node instanceof NodeVARDECL) {
            this.traverseTree(node);
        }
        if (node instanceof NodeARRAYSIZE) {
            this.traverseTree(node);
        }
        if (node instanceof NodeEPSILON) {
            this.traverseTree(node);
        }
        if (node instanceof NodeRETURNSTAT) {
            this.traverseTree(node);
        }
        if (node instanceof NodeEXPR) {
            this.expressionCount++;
            this.traverseTree(node);

            const literals = this.getLiterals(node);
            this.createLitVars(literals, node);

            if(node.children.length === 3){
                this.createTempVar(node);
            }
        }
        if (node instanceof NodeARITHEXPR) {
            this.traverseTree(node);
            if(node.children.length === 3){
                this.createTempVar(node);
            }
        }
        if (node instanceof NodeTERM) {
            this.traverseTree(node);

            if(node.children.length === 3){
                this.createTempVar(node);
            }
        }
        if (node instanceof NodeFACTOR) {
            this.traverseTree(node);

            const literals = this.getLiterals(node);
            this.createLitVars(literals, node);
        }
        if (node instanceof NodeVARIABLE) {
            this.traverseTree(node);
        }
        if (node instanceof NodeFACTORCALLORVAR) {
            this.traverseTree(node);
        }
        if (node instanceof NodeFUNCTIONCALL) {
            this.traverseTree(node);
        }
        if (node instanceof NodeAPARAMS) {
            this.traverseTree(node);
        }
        if (node instanceof NodeWRITESTAT) {
            this.traverseTree(node);
        }
        if (node instanceof NodeREADSTAT) {
            this.traverseTree(node);
        }
        if (node instanceof NodeSTATBLOCK) {
            this.traverseTree(node);
        }
        if (node instanceof NodeFUNCBODY) {
            this.traverseTree(node);
        }
        if (node instanceof NodeINDICELIST) {
            this.traverseTree(node);
        }
        if (node instanceof NodeASSIGNSTAT) {
            this.traverseTree(node);
        }
        if (node instanceof NodeFUNCTIONCALLSTAT) {
            this.traverseTree(node);
        }
        if (node instanceof NodeRELEXPR) {
            this.expressionCount++;
            this.traverseTree(node);

            const literals = this.getLiterals(node);
            this.createLitVars(literals, node);

            if(node.children.length === 3){
                this.createTempVar(node);
            }
        }
        if (node instanceof NodeIFSTAT) {
            this.traverseTree(node);
        }
        if (node instanceof NodeWHILESTAT) {
            this.traverseTree(node);
        }
        if (node instanceof NodeFUNCDEF) {
            this.traverseTree(node);
        }
        if (node instanceof NodeFUNCARROW) {
            this.traverseTree(node);
        }
        if (node instanceof NodeFUNCCONSTSTRUCT) {
            this.traverseTree(node);
        }
        if (node instanceof NodeFPARAMS) {
            this.traverseTree(node);
        }
        if (node instanceof NodeCLASSDECL) {
            this.traverseTree(node);
        }
        if (node instanceof NodeMEMBERFUNCDECL) {
            this.traverseTree(node);
        }
        if (node instanceof NodeMEMBERVARDECL) {
            this.traverseTree(node);
        }
        if (node instanceof NodeISA) {
            this.traverseTree(node);
        }
        if (node instanceof NodeCLASSDECLORFUNCDEF) {
            this.traverseTree(node);
        }
        if (node instanceof NodeEMPTYARRAYSIZE) {
            this.traverseTree(node);
        }
        if (node instanceof NodeMEMBERFUNCARROW) {
            this.traverseTree(node);
        }
    }

    private traverseTree(node: Node) {
        node.children?.forEach((child) => {
            child.accept(this);
        });
    }

    private TermCountMultOpp(node: NodeTERM): number {
        let count = 0;
        node.children.forEach((child) => {
            if (child.value?.type === TokenType.MULT || child.value?.type === TokenType.DIV) {
                count++;
            }
        });

        return count;
    }

    private arthExprCountAddOpp(node: NodeARITHEXPR): number {
        let count = 0;
        node.children.forEach((child) => {
            if (child.value?.type === TokenType.PLUS || child.value?.type === TokenType.MINUS) {
                count++;
            }
        });

        return count;
    }

    private createTempVar(node: NodeARITHEXPR | NodeTERM) {
            let type = node.type;

            if (type == "") {
                type = node.parentNode?.type ?? "integer";
            }

            if(type == "") {
                type = "integer";
            }

            const tempvar = new TempVarEntry(this.createTempVarToken(), type, this.expressionCount);
            this.tempvarCount++;
            node.symbolTable?.addEntry(tempvar);
            node.tempvar = tempvar.id.lexeme;
    }

    private getLiterals(node: Node): Token[] {
        const literals: Token[] = [];

        node.children.forEach((child) => {
            if (child.value?.type === TokenType.INTNUM || child.value?.type === TokenType.FLOATNUM) {
                literals.push(child.value);
            }
        });

        return literals;
    }

    private createLitVars(literals: Token[], node: NodeFACTOR) {
        literals.map((token) => {
            let type = node.type;

            if (type === "") {
                type = node.parentNode?.type ?? "";
            }
            const litvar = new LitVarEntry(token, this.getLitVarType(token.type), this.expressionCount);
            this.litvarCount++;
            node.symbolTable?.addEntry(litvar);
            node.tempvar = this.createLitVarName();
        });
    }

    private getLitVarType(litType: string): string {
        if (litType === TokenType.INTNUM) {
            return "integer";
        }

        return "float";
    }

    private createTempVarToken() {
        return { lexeme: "temp" + (this.tempvarCount + 1), position: 0, type: TokenType.ID };
    }

    private createLitVarName() {
        return "litvar" + this.litvarCount;
    }
}
