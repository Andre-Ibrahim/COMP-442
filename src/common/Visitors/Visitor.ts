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

export abstract class Visitor {
    abstract visit(node: NodeVARDECL): void;
    abstract visit(node: NodeARRAYSIZE): void;
    abstract visit(node: NodeEPSILON): void;
    abstract visit(node: NodeRETURNSTAT): void;
    abstract visit(node: NodeEXPR): void;
    abstract visit(node: NodeARITHEXPR): void;
    abstract visit(node: NodeTERM): void;
    abstract visit(node: NodeFACTOR): void;
    abstract visit(node: NodeVARIABLE): void;
    abstract visit(node: NodeFACTORCALLORVAR): void;
    abstract visit(node: NodeFUNCTIONCALL): void;
    abstract visit(node: NodeAPARAMS): void;
    abstract visit(node: NodeWRITESTAT): void;
    abstract visit(node: NodeREADSTAT): void;
    abstract visit(node: NodeSTATBLOCK): void;
    abstract visit(node: NodeFUNCBODY): void;
    abstract visit(node: NodeINDICELIST): void;
    abstract visit(node: NodeASSIGNSTAT): void;
    abstract visit(node: NodeFUNCTIONCALLSTAT): void;
    abstract visit(node: NodeRELEXPR): void;
    abstract visit(node: NodeIFSTAT): void;
    abstract visit(node: NodeWHILESTAT): void;
    abstract visit(node: NodeFUNCDEF): void;
    abstract visit(node: NodeFUNCARROW): void;
    abstract visit(node: NodeFUNCCONSTSTRUCT): void;
    abstract visit(node: NodeFPARAMS): void;
    abstract visit(node: NodeCLASSDECL): void;
    abstract visit(node: NodeMEMBERFUNCDECL): void;
    abstract visit(node: NodeMEMBERVARDECL): void;
    abstract visit(node: NodeISA): void;
    abstract visit(node: NodeCLASSDECLORFUNCDEF): void;
    abstract visit(node: NodeEMPTYARRAYSIZE): void;
}
