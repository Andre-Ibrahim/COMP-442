import { Token } from "../lexical_analysis/Token";
import { Concept, TreeNode } from "./Tree";

export class TreeFactory {
    get(semantic: string, token: Token, semanticStack: TreeNode[]): TreeNode {

        if(semantic == "SEMANTICEPSILON"){
            return new TreeNode(Concept.SEMANTICEPSILON);
        }

        // atomic values
        if(semantic == "SEMANTICID" || semantic == "SEMANTICTYPE" || semantic == "SEMANTICINTLIT" || semantic == "SEMANTICTOKEN"){

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
            
            return this.createSubTree(Concept.SEMANTICARRAYSIZE, [...children].reverse());
        }

        if(semantic == Concept.SEMANTICVARDECL){
            const children: TreeNode[] = [];
            const node1 = semanticStack.pop() ?? new TreeNode(Concept.SEMANTICEPSILON);
            const node2 = semanticStack.pop() ?? new TreeNode(Concept.SEMANTICEPSILON);
            const node3 = semanticStack.pop() ?? new TreeNode(Concept.SEMANTICEPSILON);
            children.push(...[node1, node2, node3].reverse());

            return this.createSubTree(Concept.SEMANTICVARDECL, children);
        }

        if(semantic == Concept.SEMANTICRETURNSTAT){
            const children: TreeNode[] = [];
            const node1 = semanticStack.pop() ?? new TreeNode(Concept.SEMANTICEPSILON);
            children.push(...[node1].reverse());

            return this.createSubTree(Concept.SEMANTICRETURNSTAT, children);
        }

        if(semantic == Concept.SEMANTICEXPR){
            const children: TreeNode[] = [];
            const node1 = semanticStack.pop() ?? new TreeNode(Concept.SEMANTICEPSILON);
            if(node1.value !== Concept.SEMANTICEPSILON){
                children.push(...[node1].reverse());
            }
            

            popUntilEpsilon(children);

            return this.createSubTree(Concept.SEMANTICEXPR, children);
        }

        if(semantic == Concept.SEMANTICARITHEXPR){
            const children: TreeNode[] = [];

            popUntilEpsilon(children);

             const node1 = semanticStack.pop() ?? new TreeNode(Concept.SEMANTICEPSILON);
             if(node1.value !== Concept.SEMANTICEPSILON){
                 children.push(...[node1].reverse());
             }

            return this.createSubTree(Concept.SEMANTICARITHEXPR, children);
        }

        if(semantic == Concept.SEMANTICTERM){
            const children: TreeNode[] = [];

            // for factors
            popUntilEpsilon(children);

            return this.createSubTree(Concept.SEMANTICTERM, children);
        }

        if(semantic == Concept.SEMANTICFACTORINT){
            const children: TreeNode[] = [];
            const node1 = semanticStack.pop() ?? new TreeNode(Concept.SEMANTICEPSILON);
            children.push(...[node1].reverse());

            return this.createSubTree(Concept.SEMANTICFACTORINT, children);
        }

        if(semantic == Concept.SEMANTICVARIABLE){
            const children: TreeNode[] = [];

            // for indiceloop
            popUntilEpsilon(children);

            const node1 = semanticStack.pop() ?? new TreeNode(Concept.SEMANTICEPSILON);

            console.log(node1);

            if(node1.value !== Concept.SEMANTICEPSILON){
                children.push(...[node1].reverse());
            }

            return this.createSubTree(Concept.SEMANTICVARIABLE, children);
        }

        if(semantic == Concept.SEMANTICFUNCTIONCALL){
            const children: TreeNode[] = [];
            const node1 = semanticStack.pop() ?? new TreeNode(Concept.SEMANTICEPSILON);
            //const node2 = semanticStack.pop() ?? new TreeNode(Concept.SEMANTICEPSILON);
            children.push(...[node1].reverse());

            return this.createSubTree(Concept.SEMANTICVARIABLE, children);
        }

        if(semantic == Concept.SEMANTICFACTORCALLORCAR){
            const children: TreeNode[] = [];
            
            popUntilEpsilon(children); 
            
            return this.createSubTree(Concept.SEMANTICFACTORCALLORCAR, children);
        }



        // default return should never run
        console.log("bruv", semantic);

        return new TreeNode(token);

        function popUntilEpsilon(children: TreeNode[]) {
            try{
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

            }catch(e){
                console.log("Empty Stack");
            }
        }
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