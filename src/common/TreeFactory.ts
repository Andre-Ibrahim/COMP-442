import { Token } from "../lexical_analysis/Token";
import { Concept, TreeNode } from "./Tree";

export class TreeFactory {
    get(semantic: string, token: Token, semanticStack: TreeNode[]): TreeNode {

        if(semantic == "SEMANTICEPSILON"){
            return new TreeNode(Concept.SEMANTICEPSILON);
        }

        // atomic values
        if(semantic == "SEMANTICID" || semantic == "SEMANTICTYPE"){
            return this.createLeaf(token);
        }

        if(semantic == Concept.SEMANTICARRAYSIZE){
            const children: TreeNode[] = [];
            while(semanticStack[semanticStack.length - 1].value !== Concept.SEMANTICEPSILON){

                //null condition should never run fix type error.
                const node = semanticStack.pop() ?? new TreeNode(Concept.SEMANTICEPSILON);
                children.push(node);

                if(semanticStack.length === 0){
                    break;
                }
            }

            semanticStack.pop();
            
            return this.createSubTree(Concept.SEMANTICARRAYSIZE, children);
        }

        if(semantic == Concept.SEMANTICVARDECL){
            const children: TreeNode[] = [];
            const node1 = semanticStack.pop() ?? new TreeNode(Concept.SEMANTICEPSILON);
            const node2 = semanticStack.pop() ?? new TreeNode(Concept.SEMANTICEPSILON);
            const node3 = semanticStack.pop() ?? new TreeNode(Concept.SEMANTICEPSILON);
            children.push(...[node1, node2, node3].reverse());

            console.log("these are the children");
            console.log(children);

            return this.createSubTree(Concept.SEMANTICVARDECL, children);
        }

        // default return should never run
        console.log("bruv", semantic);

        return new TreeNode(token);
    }

    private createLeaf(token: Token): TreeNode {
        return new TreeNode(token);
    }

    private createSubTree(concept: Concept, nodes: TreeNode[]): TreeNode{
        const root = new TreeNode(concept);

        nodes.forEach((node) => {
            root.createChildNodeFromNode(node);
        });

        return root;
    }
}