import { Token } from "../lexical_analysis/Token";
import { Node } from "./AST/Node";
import { Concept } from "./AST/Concept";
import { getNodeByConcept } from "./TreeHelpers";
import { NodeEPSILON } from "./AST/NodeEPSILON";

export class TreeFactory {
    get(semantic: string, token: Token, semanticStack: Node[]): Node {
        if (semantic == "SEMANTICEPSILON") {
            return new NodeEPSILON();
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
            const children: Node[] = [];
            while (!(semanticStack[semanticStack.length - 1] instanceof NodeEPSILON)) {
                //null condition should never run fix type error.
                const node = semanticStack.pop() ?? new NodeEPSILON();
                children.push(node);

                if (semanticStack.length === 0) {
                    break;
                }
            }

            semanticStack.pop();

            return this.createSubTree(Concept.SEMANTICARRAYSIZE, [...children].reverse());
        }

        if (semantic == Concept.SEMANTICVARDECL) {
            const children: Node[] = [];
            const node1 = semanticStack.pop() ?? new NodeEPSILON();
            const node2 = semanticStack.pop() ?? new NodeEPSILON();
            const node3 = semanticStack.pop() ?? new NodeEPSILON();
            children.push(...[node1, node2, node3].reverse());

            return this.createSubTree(Concept.SEMANTICVARDECL, children);
        }

        if (semantic == Concept.SEMANTICRETURNSTAT) {
            const children: Node[] = [];
            const node1 = semanticStack.pop() ?? new NodeEPSILON();
            children.push(...[node1].reverse());

            return this.createSubTree(Concept.SEMANTICRETURNSTAT, children);
        }

        if (semantic == Concept.SEMANTICEMPTYARRAYSIZE) {
            return this.createSubTree(Concept.SEMANTICEMPTYARRAYSIZE, []);
        }

        if (semantic == Concept.SEMANTICEXPR) {
            const children: Node[] = [];

            popUntilEpsilon(children);

            return this.createSubTree(Concept.SEMANTICEXPR, children);
        }

        if (semantic == Concept.SEMANTICARITHEXPR) {
            const children: Node[] = [];

            popUntilEpsilon(children);

            const node1 = semanticStack.pop() ?? new NodeEPSILON();
            if (!(node1 instanceof NodeEPSILON)) {
                children.push(...[node1].reverse());
            }

            return this.createSubTree(Concept.SEMANTICARITHEXPR, children);
        }

        if (semantic == Concept.SEMANTICTERM) {
            const children: Node[] = [];

            // for factors
            popUntilEpsilon(children);

            return this.createSubTree(Concept.SEMANTICTERM, children);
        }

        if (semantic == Concept.SEMANTICFACTOR) {
            const children: Node[] = [];
            const node1 = semanticStack.pop() ?? new NodeEPSILON();
            children.push(...[node1].reverse());

            return this.createSubTree(Concept.SEMANTICFACTOR, children);
        }

        if (semantic == Concept.SEMANTICVARIABLE) {
            const children: Node[] = [];

            // for indiceloop
            popUntilEpsilon(children);

            const node1 = semanticStack.pop() ?? new NodeEPSILON();

            if (!(node1 instanceof NodeEPSILON)) {
                children.push(...[node1].reverse());
            }

            return this.createSubTree(Concept.SEMANTICVARIABLE, children);
        }

        if (semantic == Concept.SEMANTICFUNCTIONCALL) {
            const children: Node[] = [];
            // for APARAMS
            popUntilEpsilon(children);

            const node1 = semanticStack.pop() ?? new NodeEPSILON();

            if (!(node1 instanceof NodeEPSILON)) {
                children.push(...[node1].reverse());
            }

            return this.createSubTree(Concept.SEMANTICFUNCTIONCALL, children);
        }

        if (semantic == Concept.SEMANTICFACTORCALLORVAR) {
            const children: Node[] = [];

            popUntilEpsilon(children);

            return this.createSubTree(Concept.SEMANTICFACTORCALLORVAR, children);
        }

        if (semantic == Concept.SEMANTICAPARAMS) {
            const children: Node[] = [];

            popUntilEpsilon(children);
            const node1 = semanticStack.pop() ?? new NodeEPSILON();
            children.push(...[node1].reverse());

            return this.createSubTree(Concept.SEMANTICAPARAMS, children);
        }

        if (semantic == Concept.SEMANTICWRITESTAT) {
            const children: Node[] = [];

            const node1 = semanticStack.pop() ?? new NodeEPSILON();
            children.push(...[node1].reverse());

            return this.createSubTree(Concept.SEMANTICWRITESTAT, children);
        }

        if (semantic == Concept.SEMANTICREADSTAT) {
            const children: Node[] = [];

            const node1 = semanticStack.pop() ?? new NodeEPSILON();
            children.push(...[node1].reverse());

            return this.createSubTree(Concept.SEMANTICREADSTAT, children);
        }

        if (semantic == Concept.SEMANTICSTATBLOCK) {
            const children: Node[] = [];

            popUntilEpsilon(children);

            return this.createSubTree(Concept.SEMANTICSTATBLOCK, children);
        }

        if (semantic == Concept.SEMANTICFUNCBODY) {
            const children: Node[] = [];

            popUntilEpsilon(children);

            return this.createSubTree(Concept.SEMANTICFUNCBODY, children);
        }

        if (semantic == Concept.SEMANTICINDICELIST) {
            const children: Node[] = [];

            popUntilEpsilon(children);

            return this.createSubTree(Concept.SEMANTICINDICELIST, children);
        }

        if (semantic == Concept.SEMANTICASSIGNSTAT) {
            const children: Node[] = [];

            popUntilEpsilon(children);

            return this.createSubTree(Concept.SEMANTICASSIGNSTAT, children);
        }

        if (semantic == Concept.SEMANTICFUNCTIONCALLSTAT) {
            const children: Node[] = [];

            popUntilEpsilon(children);

            return this.createSubTree(Concept.SEMANTICFUNCTIONCALLSTAT, children);
        }

        if (semantic == Concept.SEMANTICRELEXPR) {
            const children: Node[] = [];
            const node1 = semanticStack.pop() ?? new NodeEPSILON();
            const node2 = semanticStack.pop() ?? new NodeEPSILON();
            const node3 = semanticStack.pop() ?? new NodeEPSILON();
            children.push(...[node1, node2, node3].reverse());

            return this.createSubTree(Concept.SEMANTICRELEXPR, children);
        }

        if (semantic == Concept.SEMANTICIFSTAT) {
            const children: Node[] = [];

            popUntilEpsilon(children);

            return this.createSubTree(Concept.SEMANTICIFSTAT, children);
        }

        if (semantic == Concept.SEMANTICWHILESTAT) {
            const children: Node[] = [];

            popUntilEpsilon(children);

            return this.createSubTree(Concept.SEMANTICWHILESTAT, children);
        }

        if (semantic == Concept.SEMANTICAPARAMS) {
            const children: Node[] = [];

            popUntilEpsilon(children);

            return this.createSubTree(Concept.SEMANTICAPARAMS, children);
        }

        if (semantic == Concept.SEMANTICFUNCDEF) {
            const children: Node[] = [];

            popUntilEpsilon(children);

            return this.createSubTree(Concept.SEMANTICFUNCDEF, children);
        }

        if (semantic == Concept.SEMANTICFUNCARROW) {
            const children: Node[] = [];

            popUntilEpsilon(children);

            return this.createSubTree(Concept.SEMANTICFUNCARROW, children);
        }

        if (semantic == Concept.SEMANTICFUNCCONSTSTRUCT) {
            const children: Node[] = [];

            popUntilEpsilon(children);

            return this.createSubTree(Concept.SEMANTICFUNCCONSTSTRUCT, children);
        }

        if (semantic == Concept.SEMANTICFPARAMS) {
            const children: Node[] = [];

            popUntilEpsilon(children);

            return this.createSubTree(Concept.SEMANTICFPARAMS, children);
        }

        if (semantic == Concept.SEMANTICCLASSDECL) {
            const children: Node[] = [];

            popUntilEpsilon(children);

            return this.createSubTree(Concept.SEMANTICCLASSDECL, children);
        }

        if (semantic == Concept.SEMANTICMEMBERFUNCDECL) {
            const children: Node[] = [];

            popUntilEpsilon(children);

            return this.createSubTree(Concept.SEMANTICMEMBERFUNCDECL, children);
        }

        if (semantic == Concept.SEMANTICMEMBERVARDECL) {
            const children: Node[] = [];

            popUntilEpsilon(children);

            return this.createSubTree(Concept.SEMANTICMEMBERVARDECL, children);
        }

        if (semantic == Concept.SEMANTICISA) {
            const children: Node[] = [];

            popUntilEpsilon(children);

            return this.createSubTree(Concept.SEMANTICISA, children);
        }

        if (semantic == Concept.SEMANTICCLASSDECLORFUNCDEF) {
            const children: Node[] = [];

            popUntilEpsilon(children);

            return this.createSubTree(Concept.SEMANTICCLASSDECLORFUNCDEF, children);
        }

        // default return should never run
        console.log("bruv", semantic);
        const node = new Node();
        node.setValue(token);
        return node;

        function popUntilEpsilon(children: Node[]) {
            try {
                //console.log(semanticStack[semanticStack.length - 1].value);
                while (!(semanticStack[semanticStack.length - 1] instanceof NodeEPSILON)) {
                    //null condition should never run fix type error.
                    const node = semanticStack.pop() ?? new NodeEPSILON();
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

    private createLeaf(token: Token): Node {
        const leaf = new Node();
        leaf.setValue(token);
        return leaf;
    }

    private createSubTree(concept: Concept, nodes: Node[]): Node {
        const root = getNodeByConcept(concept);


        nodes.forEach((node) => {
            root.createChildNodeFromNode(node);
        });

        return root;
    }
}
