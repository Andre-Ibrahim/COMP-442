import { Concept } from "./AST/Concept";
import { NodeVARDECL } from "./AST/NodeVARDECL";
import { NodeARRAYSIZE } from "./AST/NodeARRAYSIZE";
import { NodeEPSILON } from "./AST/NodeEPSILON";
import { NodeRETURNSTAT } from "./AST/NodeRETURNSTAT";
import { NodeEXPR } from "./AST/NodeEXPR";
import { NodeARITHEXPR } from "./AST/NodeARITHEXPR";
import { NodeTERM } from "./AST/NodeTERM";
import { NodeFACTOR } from "./AST/NodeFACTOR";
import { NodeVARIABLE } from "./AST/NodeVARIABLE";
import { NodeFACTORCALLORVAR } from "./AST/NodeFACTORCALLORVAR";
import { NodeFUNCTIONCALL } from "./AST/NodeFUNCTIONCALL";
import { NodeAPARAMS } from "./AST/NodeAPARAMS";
import { NodeWRITESTAT } from "./AST/NodeWRITESTAT";
import { NodeREADSTAT } from "./AST/NodeREADSTAT";
import { NodeSTATBLOCK } from "./AST/NodeSTATBLOCK";
import { NodeFUNCBODY } from "./AST/NodeFUNCBODY";
import { NodeINDICELIST } from "./AST/NodeINDICELIST";
import { NodeASSIGNSTAT } from "./AST/NodeASSIGNSTAT";
import { NodeFUNCTIONCALLSTAT } from "./AST/NodeFUNCTIONCALLSTAT";
import { NodeRELEXPR } from "./AST/NodeRELEXPR";
import { NodeIFSTAT } from "./AST/NodeIFSTAT";
import { NodeWHILESTAT } from "./AST/NodeWHILESTAT";
import { NodeFUNCDEF } from "./AST/NodeFUNCDEF";
import { NodeFUNCARROW } from "./AST/NodeFUNCARROW";
import { NodeFUNCCONSTSTRUCT } from "./AST/NodeFUNCCONSTSTRUCT";
import { NodeFPARAMS } from "./AST/NodeFPARAMS";
import { NodeCLASSDECL } from "./AST/NodeCLASSDECL";
import { NodeMEMBERFUNCDECL } from "./AST/NodeMEMBERFUNCDECL";
import { NodeMEMBERVARDECL } from "./AST/NodeMEMBERVARDECL";
import { NodeISA } from "./AST/NodeISA";
import { NodeCLASSDECLORFUNCDEF } from "./AST/NodeCLASSDECLORFUNCDEF";
import { NodeEMPTYARRAYSIZE } from "./AST/NodeEMPTYARRAYSIZE";

export function getNodeByConcept(concept: Concept){
    if(concept === Concept.SEMANTICVARDECL){
        return new NodeVARDECL();
    }

    
    if(concept === Concept.SEMANTICARRAYSIZE){
        return new NodeARRAYSIZE();
    }

    
    if(concept === Concept.SEMANTICEPSILON){
        return new NodeEPSILON();
    }

    
    if(concept === Concept.SEMANTICRETURNSTAT){
        return new NodeRETURNSTAT();
    }

    
    if(concept === Concept.SEMANTICEXPR){
        return new NodeEXPR();
    }

    
    if(concept === Concept.SEMANTICARITHEXPR){
        return new NodeARITHEXPR();
    }

    
    if(concept === Concept.SEMANTICTERM){
        return new NodeTERM();
    }

    
    if(concept === Concept.SEMANTICFACTOR){
        return new NodeFACTOR();
    }

    
    if(concept === Concept.SEMANTICVARIABLE){
        return new NodeVARIABLE();
    }

    
    if(concept === Concept.SEMANTICFACTORCALLORVAR){
        return new NodeFACTORCALLORVAR();
    }

    
    if(concept === Concept.SEMANTICFUNCTIONCALL){
        return new NodeFUNCTIONCALL();
    }

    
    if(concept === Concept.SEMANTICAPARAMS){
        return new NodeAPARAMS();
    }

    
    if(concept === Concept.SEMANTICWRITESTAT){
        return new NodeWRITESTAT();
    }

    
    if(concept === Concept.SEMANTICREADSTAT){
        return new NodeREADSTAT();
    }

    
    if(concept === Concept.SEMANTICSTATBLOCK){
        return new NodeSTATBLOCK();
    }

    
    if(concept === Concept.SEMANTICFUNCBODY){
        return new NodeFUNCBODY();
    }

    
    if(concept === Concept.SEMANTICINDICELIST){
        return new NodeINDICELIST();
    }

    
    if(concept === Concept.SEMANTICASSIGNSTAT){
        return new NodeASSIGNSTAT();
    }

    
    if(concept === Concept.SEMANTICFUNCTIONCALLSTAT){
        return new NodeFUNCTIONCALLSTAT();
    }

    
    if(concept === Concept.SEMANTICRELEXPR){
        return new NodeRELEXPR();
    }

    
    if(concept === Concept.SEMANTICIFSTAT){
        return new NodeIFSTAT();
    }

    
    if(concept === Concept.SEMANTICWHILESTAT){
        return new NodeWHILESTAT();
    }

    
    if(concept === Concept.SEMANTICFUNCDEF){
        return new NodeFUNCDEF();
    }

    
    if(concept === Concept.SEMANTICFUNCARROW){
        return new NodeFUNCARROW();
    }

    
    if(concept === Concept.SEMANTICFUNCCONSTSTRUCT){
        return new NodeFUNCCONSTSTRUCT();
    }

    
    if(concept === Concept.SEMANTICFPARAMS){
        return new NodeFPARAMS();
    }

    
    if(concept === Concept.SEMANTICCLASSDECL){
        return new NodeCLASSDECL();
    }

    
    if(concept === Concept.SEMANTICMEMBERFUNCDECL){
        return new NodeMEMBERFUNCDECL();
    }

    
    if(concept === Concept.SEMANTICMEMBERVARDECL){
        return new NodeMEMBERVARDECL();
    }

    
    if(concept === Concept.SEMANTICISA){
        return new NodeISA();
    }

    
    if(concept === Concept.SEMANTICCLASSDECLORFUNCDEF){
        return new NodeCLASSDECLORFUNCDEF();
    }

    
    if(concept === Concept.SEMANTICEMPTYARRAYSIZE){
        return new NodeEMPTYARRAYSIZE();
    }

    return new NodeEPSILON();

}