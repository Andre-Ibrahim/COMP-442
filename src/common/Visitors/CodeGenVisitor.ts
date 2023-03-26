import { Visitor } from "./Visitor";

import { NodeVARDECL } from "../AST/NodeVARDECL";
import { NodeARRAYSIZE } from "../AST/NodeARRAYSIZE";
import { NodeEPSILON } from "../AST/NodeEPSILON";
import { NodeRETURNSTAT } from "../AST/NodeRETURNSTAT";
import { NodeEXPR } from "../AST/NodeEXPR";
import { NodeARITHEXPR } from "../AST/NodeARITHEXPR";
import { NodeTERM } from "../AST/NodeTERM";
import { NodeFACTOR } from "../AST/NodeFACTOR";
import { NodeVARIABLE } from "../AST/NodeVARIABLE";
import { NodeFACTORCALLORVAR } from "../AST/NodeFACTORCALLORVAR";
import { NodeFUNCTIONCALL } from "../AST/NodeFUNCTIONCALL";
import { NodeAPARAMS } from "../AST/NodeAPARAMS";
import { NodeWRITESTAT } from "../AST/NodeWRITESTAT";
import { NodeREADSTAT } from "../AST/NodeREADSTAT";
import { NodeSTATBLOCK } from "../AST/NodeSTATBLOCK";
import { NodeFUNCBODY } from "../AST/NodeFUNCBODY";
import { NodeINDICELIST } from "../AST/NodeINDICELIST";
import { NodeASSIGNSTAT } from "../AST/NodeASSIGNSTAT";
import { NodeFUNCTIONCALLSTAT } from "../AST/NodeFUNCTIONCALLSTAT";
import { NodeRELEXPR } from "../AST/NodeRELEXPR";
import { NodeIFSTAT } from "../AST/NodeIFSTAT";
import { NodeWHILESTAT } from "../AST/NodeWHILESTAT";
import { NodeFUNCDEF } from "../AST/NodeFUNCDEF";
import { NodeFUNCARROW } from "../AST/NodeFUNCARROW";
import { NodeFUNCCONSTSTRUCT } from "../AST/NodeFUNCCONSTSTRUCT";
import { NodeFPARAMS } from "../AST/NodeFPARAMS";
import { NodeCLASSDECL } from "../AST/NodeCLASSDECL";
import { NodeMEMBERFUNCDECL } from "../AST/NodeMEMBERFUNCDECL";
import { NodeMEMBERVARDECL } from "../AST/NodeMEMBERVARDECL";
import { NodeISA } from "../AST/NodeISA";
import { NodeCLASSDECLORFUNCDEF } from "../AST/NodeCLASSDECLORFUNCDEF";
import { NodeEMPTYARRAYSIZE } from "../AST/NodeEMPTYARRAYSIZE";
import { NodeMEMBERFUNCARROW } from "../AST/NodeMEMBERFUNCARROW";
import { Node } from "../AST/Node";

class CodeGenVisitor extends Visitor {
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
            this.traverseTree(node);
        }
        if (node instanceof NodeARITHEXPR) {
            this.traverseTree(node);
        }
        if (node instanceof NodeTERM) {
            this.traverseTree(node);
        }
        if (node instanceof NodeFACTOR) {
            this.traverseTree(node);
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
            this.traverseTree(node);
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

    private traverseTree(node: Node) {}
}
