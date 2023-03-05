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

        if(semantic == Concept.SEMANTICFACTOR){
            const children: TreeNode[] = [];
            const node1 = semanticStack.pop() ?? new TreeNode(Concept.SEMANTICEPSILON);
            children.push(...[node1].reverse());

            return this.createSubTree(Concept.SEMANTICFACTOR, children);
        }

        if(semantic == Concept.SEMANTICVARIABLE){
            const children: TreeNode[] = [];

            // for indiceloop
            popUntilEpsilon(children);

            const node1 = semanticStack.pop() ?? new TreeNode(Concept.SEMANTICEPSILON);

            if(node1.value !== Concept.SEMANTICEPSILON){
                children.push(...[node1].reverse());
            }

            return this.createSubTree(Concept.SEMANTICVARIABLE, children);
        }

        if(semantic == Concept.SEMANTICFUNCTIONCALL){
            const children: TreeNode[] = [];
            // for APARAMS
            popUntilEpsilon(children);

            const node1 = semanticStack.pop() ?? new TreeNode(Concept.SEMANTICEPSILON);

            if(node1.value !== Concept.SEMANTICEPSILON){
                children.push(...[node1].reverse());
            }

            return this.createSubTree(Concept.SEMANTICFUNCTIONCALL, children);
        }

        if(semantic == Concept.SEMANTICFACTORCALLORVAR){
            const children: TreeNode[] = [];
            
            popUntilEpsilon(children); 
            
            return this.createSubTree(Concept.SEMANTICFACTORCALLORVAR, children);
        }

        if(semantic == Concept.SEMANTICAPARAMS){
            const children: TreeNode[] = [];
            
            popUntilEpsilon(children); 
            const node1 = semanticStack.pop() ?? new TreeNode(Concept.SEMANTICEPSILON);
            children.push(...[node1].reverse());
            
            return this.createSubTree(Concept.SEMANTICAPARAMS, children);
        }

        if(semantic == Concept.SEMANTICWRITESTAT){
            const children: TreeNode[] = [];
            
            const node1 = semanticStack.pop() ?? new TreeNode(Concept.SEMANTICEPSILON);
            children.push(...[node1].reverse());
            
            return this.createSubTree(Concept.SEMANTICWRITESTAT, children);
        }


        if(semantic == Concept.SEMANTICREADSTAT){
            const children: TreeNode[] = [];
            
            const node1 = semanticStack.pop() ?? new TreeNode(Concept.SEMANTICEPSILON);
            children.push(...[node1].reverse());
            
            return this.createSubTree(Concept.SEMANTICREADSTAT, children);
        }

        if(semantic == Concept.SEMANTICSTATBLOCK){
            const children: TreeNode[] = [];
            
            popUntilEpsilon(children); 
            
            return this.createSubTree(Concept.SEMANTICSTATBLOCK, children);
        }

        if(semantic == Concept.SEMANTICFUNCBODY){
            const children: TreeNode[] = [];
            
            popUntilEpsilon(children); 
            
            return this.createSubTree(Concept.SEMANTICFUNCBODY, children);
        }

        if(semantic == Concept.SEMANTICINDICELIST){
            const children: TreeNode[] = [];
            
            popUntilEpsilon(children); 
            
            return this.createSubTree(Concept.SEMANTICINDICELIST, children);
        }

        if(semantic == Concept.SEMANTICASSIGNSTAT){
            const children: TreeNode[] = [];
            
            popUntilEpsilon(children); 
            
            return this.createSubTree(Concept.SEMANTICASSIGNSTAT, children);
        }

        if(semantic == Concept.SEMANTICFUNCTIONCALLSTAT){
            const children: TreeNode[] = [];
            
            popUntilEpsilon(children); 
            
            return this.createSubTree(Concept.SEMANTICFUNCTIONCALLSTAT, children);
        }

        if(semantic == Concept.SEMANTICRELEXPR){
            const children: TreeNode[] = [];
            const node1 = semanticStack.pop() ?? new TreeNode(Concept.SEMANTICEPSILON);
            const node2 = semanticStack.pop() ?? new TreeNode(Concept.SEMANTICEPSILON);
            const node3 = semanticStack.pop() ?? new TreeNode(Concept.SEMANTICEPSILON);
            children.push(...[node1, node2, node3].reverse());

            return this.createSubTree(Concept.SEMANTICRELEXPR, children);
        }

        if(semantic == Concept.SEMANTICIFSTAT){
            const children: TreeNode[] = [];
            
            popUntilEpsilon(children); 

            return this.createSubTree(Concept.SEMANTICIFSTAT, children);
        }

        if(semantic == Concept.SEMANTICWHILESTAT){
            const children: TreeNode[] = [];
            
            popUntilEpsilon(children); 

            return this.createSubTree(Concept.SEMANTICWHILESTAT, children);
        }

        if(semantic == Concept.SEMANTICAPARAMS){
            const children: TreeNode[] = [];
            
            popUntilEpsilon(children); 

            return this.createSubTree(Concept.SEMANTICAPARAMS, children);
        }

        if(semantic == Concept.SEMANTICFUNCDEF){
            const children: TreeNode[] = [];
            
            popUntilEpsilon(children); 

            return this.createSubTree(Concept.SEMANTICFUNCDEF, children);
        }

        if(semantic == Concept.SEMANTICFUNCARROW){
            const children: TreeNode[] = [];
            
            popUntilEpsilon(children); 


            return this.createSubTree(Concept.SEMANTICFUNCARROW, children);
        }

        if(semantic == Concept.SEMANTICFUNCCONSTSTRUCT){
            const children: TreeNode[] = [];
            
            popUntilEpsilon(children); 

            return this.createSubTree(Concept.SEMANTICFUNCCONSTSTRUCT, children);
        }

        if(semantic == Concept.SEMANTICFPARAMS){
            const children: TreeNode[] = [];
            
            popUntilEpsilon(children); 

            return this.createSubTree(Concept.SEMANTICFPARAMS, children);
        }

        if(semantic == Concept.SEMANTICCLASSDECL){
            const children: TreeNode[] = [];
            
            popUntilEpsilon(children); 

            return this.createSubTree(Concept.SEMANTICCLASSDECL, children);
        }

        if(semantic == Concept.SEMANTICMEMBERFUNCDECL){
            const children: TreeNode[] = [];
            
            popUntilEpsilon(children); 

            return this.createSubTree(Concept.SEMANTICMEMBERFUNCDECL, children);
        }

        if(semantic == Concept.SEMANTICMEMBERVARDECL){
            const children: TreeNode[] = [];
            
            popUntilEpsilon(children); 

            return this.createSubTree(Concept.SEMANTICMEMBERVARDECL, children);
        }

        if(semantic == Concept.SEMANTICISA){
            const children: TreeNode[] = [];
            
            popUntilEpsilon(children); 

            return this.createSubTree(Concept.SEMANTICISA, children);
        }

        if(semantic == Concept.SEMANTICCLASSDECLORFUNCDEF){
            const children: TreeNode[] = [];
            
            popUntilEpsilon(children); 

            return this.createSubTree(Concept.SEMANTICCLASSDECLORFUNCDEF, children);
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