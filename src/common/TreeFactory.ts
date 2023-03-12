import { Token } from "../lexical_analysis/Token";
import { Semantic } from "./Semantics/Semantic";
import { SemanticAPARAMS } from "./Semantics/SemanticAPARAMS";
import { SemanticARITHEXPR } from "./Semantics/SemanticARITHEXPR";
import { SemanticARRAYSIZE } from "./Semantics/SemanticARRAYSIZE";
import { SemanticASSIGNSTAT } from "./Semantics/SemanticASSIGNSTAT";
import { SemanticCLASSDECL } from "./Semantics/SemanticCLASSDECL";
import { SemanticCLASSDECLORFUNCDEF } from "./Semantics/SemanticCLASSDECLORFUNCDEF";
import { SemanticEMPTYARRAYSIZE } from "./Semantics/SemanticEMPTYARRAYSIZE";
import { SemanticEXPR } from "./Semantics/SemanticEXPR";
import { SemanticFACTOR } from "./Semantics/SemanticFACTOR";
import { SemanticFACTORCALLORVAR } from "./Semantics/SemanticFACTORCALLORVAR";
import { SemanticFPARAMS } from "./Semantics/SemanticFPARAMS";
import { SemanticFUNCARROW } from "./Semantics/SemanticFUNCARROW";
import { SemanticFUNCBODY } from "./Semantics/SemanticFUNCBODY";
import { SemanticFUNCCONSTSTRUCT } from "./Semantics/SemanticFUNCCONSTSTRUCT";
import { SemanticFUNCDEF } from "./Semantics/SemanticFUNCDEF";
import { SemanticFUNCTIONCALL } from "./Semantics/SemanticFUNCTIONCALL";
import { SemanticFUNCTIONCALLSTAT } from "./Semantics/SemanticFUNCTIONCALLSTAT";
import { SemanticIFSTAT } from "./Semantics/SemanticIFSTAT";
import { SemanticINDICELIST } from "./Semantics/SemanticINDICELIST";
import { SemanticISA } from "./Semantics/SemanticISA";
import { SemanticMEMBERFUNCDECL } from "./Semantics/SemanticMEMBERFUNCDECL";
import { SemanticMEMBERVARDECL } from "./Semantics/SemanticMEMBERVARDECL";
import { SemanticREADSTAT } from "./Semantics/SemanticREADSTAT";
import { SemanticRELEXPR } from "./Semantics/SemanticRELEXPR";
import { SemanticRETURNSTAT } from "./Semantics/SemanticRETURNSTAT";
import { SemanticSTATBLOCK } from "./Semantics/SemanticSTATBLOCK";
import { SemanticTERM } from "./Semantics/SemanticTERM";
import { SemanticVARDECL } from "./Semantics/SemanticVARDECL";
import { SemanticVARIABLE } from "./Semantics/SemanticVARIABLE";
import { SemanticWHILESTAT } from "./Semantics/SemanticWHILESTAT";
import { SemanticWRITESTAT } from "./Semantics/SemanticWRITESTAT";
import { Concept, TreeNode } from "./Tree";

export class TreeFactory {
    get(semantic: string, token: Token, semanticStack: TreeNode[]): TreeNode {
        if (semantic == "SEMANTICEPSILON") {
            return new TreeNode(Concept.SEMANTICEPSILON);
        }

        // atomic values
        if (
            semantic == "SEMANTICID" ||
            semantic == "SEMANTICTYPE" ||
            semantic == "SEMANTICINTLIT" ||
            semantic == "SEMANTICTOKEN"
        ) {
            return this.createLeaf(token);
        }

        if (semantic == Concept.SEMANTICARRAYSIZE) {
            const children: TreeNode[] = [];
            while (semanticStack[semanticStack.length - 1].value !== Concept.SEMANTICEPSILON) {
                //null condition should never run fix type error.
                const node = semanticStack.pop() ?? new TreeNode(Concept.SEMANTICEPSILON);
                children.push(node);

                if (semanticStack.length === 0) {
                    break;
                }
            }

            semanticStack.pop();

            return this.createSubTree(new SemanticARRAYSIZE(), [...children].reverse());
        }

        if (semantic == Concept.SEMANTICVARDECL) {
            const children: TreeNode[] = [];
            const node1 = semanticStack.pop() ?? new TreeNode(Concept.SEMANTICEPSILON);
            const node2 = semanticStack.pop() ?? new TreeNode(Concept.SEMANTICEPSILON);
            const node3 = semanticStack.pop() ?? new TreeNode(Concept.SEMANTICEPSILON);
            children.push(...[node1, node2, node3].reverse());

            return this.createSubTree(new SemanticVARDECL(), children);
        }

        if (semantic == Concept.SEMANTICRETURNSTAT) {
            const children: TreeNode[] = [];
            const node1 = semanticStack.pop() ?? new TreeNode(Concept.SEMANTICEPSILON);
            children.push(...[node1].reverse());

            return this.createSubTree(new SemanticRETURNSTAT(), children);
        }

        if (semantic == Concept.SEMANTICEMPTYARRAYSIZE) {
            return this.createSubTree(new SemanticEMPTYARRAYSIZE(), []);
        }

        if (semantic == Concept.SEMANTICEXPR) {
            const children: TreeNode[] = [];

            popUntilEpsilon(children);

            return this.createSubTree(new SemanticEXPR(), children);
        }

        if (semantic == Concept.SEMANTICARITHEXPR) {
            const children: TreeNode[] = [];

            popUntilEpsilon(children);

            const node1 = semanticStack.pop() ?? new TreeNode(Concept.SEMANTICEPSILON);
            if (node1.value !== Concept.SEMANTICEPSILON) {
                children.push(...[node1].reverse());
            }

            return this.createSubTree(new SemanticARITHEXPR(), children);
        }

        if (semantic == Concept.SEMANTICTERM) {
            const children: TreeNode[] = [];

            // for factors
            popUntilEpsilon(children);

            return this.createSubTree(new SemanticTERM(), children);
        }

        if (semantic == Concept.SEMANTICFACTOR) {
            const children: TreeNode[] = [];
            const node1 = semanticStack.pop() ?? new TreeNode(Concept.SEMANTICEPSILON);
            children.push(...[node1].reverse());

            return this.createSubTree(new SemanticFACTOR(), children);
        }

        if (semantic == Concept.SEMANTICVARIABLE) {
            const children: TreeNode[] = [];

            // for indiceloop
            popUntilEpsilon(children);

            const node1 = semanticStack.pop() ?? new TreeNode(Concept.SEMANTICEPSILON);

            if (node1.value !== Concept.SEMANTICEPSILON) {
                children.push(...[node1].reverse());
            }

            return this.createSubTree(new SemanticVARIABLE(), children);
        }

        if (semantic == Concept.SEMANTICFUNCTIONCALL) {
            const children: TreeNode[] = [];
            // for APARAMS
            popUntilEpsilon(children);

            const node1 = semanticStack.pop() ?? new TreeNode(Concept.SEMANTICEPSILON);

            if (node1.value !== Concept.SEMANTICEPSILON) {
                children.push(...[node1].reverse());
            }

            return this.createSubTree(new SemanticFUNCTIONCALL(), children);
        }

        if (semantic == Concept.SEMANTICFACTORCALLORVAR) {
            const children: TreeNode[] = [];

            popUntilEpsilon(children);

            return this.createSubTree(new SemanticFACTORCALLORVAR(), children);
        }

        if (semantic == Concept.SEMANTICAPARAMS) {
            const children: TreeNode[] = [];

            popUntilEpsilon(children);
            const node1 = semanticStack.pop() ?? new TreeNode(Concept.SEMANTICEPSILON);
            children.push(...[node1].reverse());

            return this.createSubTree(new SemanticAPARAMS(), children);
        }

        if (semantic == Concept.SEMANTICWRITESTAT) {
            const children: TreeNode[] = [];

            const node1 = semanticStack.pop() ?? new TreeNode(Concept.SEMANTICEPSILON);
            children.push(...[node1].reverse());

            return this.createSubTree(new SemanticWRITESTAT(), children);
        }

        if (semantic == Concept.SEMANTICREADSTAT) {
            const children: TreeNode[] = [];

            const node1 = semanticStack.pop() ?? new TreeNode(Concept.SEMANTICEPSILON);
            children.push(...[node1].reverse());

            return this.createSubTree(new SemanticREADSTAT(), children);
        }

        if (semantic == Concept.SEMANTICSTATBLOCK) {
            const children: TreeNode[] = [];

            popUntilEpsilon(children);

            return this.createSubTree(new SemanticSTATBLOCK(), children);
        }

        if (semantic == Concept.SEMANTICFUNCBODY) {
            const children: TreeNode[] = [];

            popUntilEpsilon(children);

            return this.createSubTree(new SemanticFUNCBODY(), children);
        }

        if (semantic == Concept.SEMANTICINDICELIST) {
            const children: TreeNode[] = [];

            popUntilEpsilon(children);

            return this.createSubTree(new SemanticINDICELIST(), children);
        }

        if (semantic == Concept.SEMANTICASSIGNSTAT) {
            const children: TreeNode[] = [];

            popUntilEpsilon(children);

            return this.createSubTree(new SemanticASSIGNSTAT(), children);
        }

        if (semantic == Concept.SEMANTICFUNCTIONCALLSTAT) {
            const children: TreeNode[] = [];

            popUntilEpsilon(children);

            return this.createSubTree(new SemanticFUNCTIONCALLSTAT(), children);
        }

        if (semantic == Concept.SEMANTICRELEXPR) {
            const children: TreeNode[] = [];
            const node1 = semanticStack.pop() ?? new TreeNode(Concept.SEMANTICEPSILON);
            const node2 = semanticStack.pop() ?? new TreeNode(Concept.SEMANTICEPSILON);
            const node3 = semanticStack.pop() ?? new TreeNode(Concept.SEMANTICEPSILON);
            children.push(...[node1, node2, node3].reverse());

            return this.createSubTree(new SemanticRELEXPR(), children);
        }

        if (semantic == Concept.SEMANTICIFSTAT) {
            const children: TreeNode[] = [];

            popUntilEpsilon(children);

            return this.createSubTree(new SemanticIFSTAT(), children);
        }

        if (semantic == Concept.SEMANTICWHILESTAT) {
            const children: TreeNode[] = [];

            popUntilEpsilon(children);

            return this.createSubTree(new SemanticWHILESTAT(), children);
        }

        if (semantic == Concept.SEMANTICAPARAMS) {
            const children: TreeNode[] = [];

            popUntilEpsilon(children);

            return this.createSubTree(new SemanticAPARAMS(), children);
        }

        if (semantic == Concept.SEMANTICFUNCDEF) {
            const children: TreeNode[] = [];

            popUntilEpsilon(children);

            return this.createSubTree(new SemanticFUNCDEF(), children);
        }

        if (semantic == Concept.SEMANTICFUNCARROW) {
            const children: TreeNode[] = [];

            popUntilEpsilon(children);

            return this.createSubTree(new SemanticFUNCARROW(), children);
        }

        if (semantic == Concept.SEMANTICFUNCCONSTSTRUCT) {
            const children: TreeNode[] = [];

            popUntilEpsilon(children);

            return this.createSubTree(new SemanticFUNCCONSTSTRUCT(), children);
        }

        if (semantic == Concept.SEMANTICFPARAMS) {
            const children: TreeNode[] = [];

            popUntilEpsilon(children);

            return this.createSubTree(new SemanticFPARAMS(), children);
        }

        if (semantic == Concept.SEMANTICCLASSDECL) {
            const children: TreeNode[] = [];

            popUntilEpsilon(children);

            return this.createSubTree(new SemanticCLASSDECL(), children);
        }

        if (semantic == Concept.SEMANTICMEMBERFUNCDECL) {
            const children: TreeNode[] = [];

            popUntilEpsilon(children);

            return this.createSubTree(new SemanticMEMBERFUNCDECL(), children);
        }

        if (semantic == Concept.SEMANTICMEMBERVARDECL) {
            const children: TreeNode[] = [];

            popUntilEpsilon(children);

            return this.createSubTree(new SemanticMEMBERVARDECL(), children);
        }

        if (semantic == Concept.SEMANTICISA) {
            const children: TreeNode[] = [];

            popUntilEpsilon(children);

            return this.createSubTree(new SemanticISA(), children);
        }

        if (semantic == Concept.SEMANTICCLASSDECLORFUNCDEF) {
            const children: TreeNode[] = [];

            popUntilEpsilon(children);

            return this.createSubTree(new SemanticCLASSDECLORFUNCDEF(), children);
        }

        // default return should never run
        console.log("bruv", semantic);

        return new TreeNode(token);

        function popUntilEpsilon(children: TreeNode[]) {
            try {
                //console.log(semanticStack[semanticStack.length - 1].value);
                while (semanticStack[semanticStack.length - 1].value !== Concept.SEMANTICEPSILON) {
                    //null condition should never run fix type error.
                    const node = semanticStack.pop() ?? new TreeNode(Concept.SEMANTICEPSILON);
                    children.push(node);

                    if (semanticStack.length === 0) {
                        break;
                    }
                }

                semanticStack.pop();
            } catch (e) {
                console.log("Empty Stack");
            }
        }
    }

    private createLeaf(token: Token): TreeNode {
        return new TreeNode(token);
    }

    private createSubTree(concept: Semantic, nodes: TreeNode[]): TreeNode {
        const root = new TreeNode(concept);

        nodes.forEach((node) => {
            root.createChildNodeFromNode(node);
        });

        return root;
    }
}
