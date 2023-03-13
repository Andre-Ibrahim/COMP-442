import { Token } from "../lexical_analysis/Token";
import { Semantic } from "./Semantics/Semantic";

export class TreeNode {
    value: Token | Semantic;
    children: TreeNode[] = [];
    parentNode: TreeNode | null = null;

    constructor(value: Token | Semantic) {
        this.value = value;
    }

    getParentNode() {
        this.parentNode;
    }

    createChildNode(token: Token | Semantic) {
        const newNode = new TreeNode(token);
        this.children.push(newNode);
        newNode.parentNode = this;

        return newNode;
    }

    createChildNodeFromNode(node: TreeNode) {
        this.children.push(node);
        node.parentNode = this;
        return node;
    }

    getTreeString = (node: TreeNode, spaceCount = 0) => {
        let str = "\n";

        node.children.forEach((child) => {
            const nodeString = (child.value as Token).type ? JSON.stringify(child.value) : child.value.toString();
            str += `${"| ".repeat(spaceCount)}${nodeString}${this.getTreeString(child, spaceCount + 1)}`;
        });

        return str;
    };

    reverseTree = (node: TreeNode) => {
        node.children = node.children.reverse();

        node.children.forEach((child) => {
            this.reverseTree(child);
        });
    };

    reverse() {
        this.reverseTree(this);
    }

    print() {
        console.log(`\n${JSON.stringify(this.value)}${this.getTreeString(this, 1)}`);
    }

    toString(): string {
        const nodeString = (this.value as Token).type ? JSON.stringify(this.value) : this.value.toString();
        return `\n${nodeString}${this.getTreeString(this, 1)}`;
    }
}

export enum Concept {
    SEMANTICVARDECL = "SEMANTICVARDECL",
    SEMANTICARRAYSIZE = "SEMANTICARRAYSIZE",
    SEMANTICEPSILON = "SEMANTICEPSILON",
    SEMANTICRETURNSTAT = "SEMANTICRETURNSTAT",
    SEMANTICEXPR = "SEMANTICEXPR",
    SEMANTICARITHEXPR = "SEMANTICARITHEXPR",
    SEMANTICTERM = "SEMANTICTERM",
    SEMANTICFACTOR = "SEMANTICFACTOR",
    SEMANTICVARIABLE = "SEMANTICVARIABLE",
    SEMANTICFACTORCALLORVAR = "SEMANTICFACTORCALLORVAR",
    SEMANTICFUNCTIONCALL = "SEMANTICFUNCTIONCALL",
    SEMANTICAPARAMS = "SEMANTICAPARAMS",
    SEMANTICWRITESTAT = "SEMANTICWRITESTAT",
    SEMANTICREADSTAT = "SEMANTICREADSTAT",
    SEMANTICSTATBLOCK = "SEMANTICSTATBLOCK",
    SEMANTICFUNCBODY = "SEMANTICFUNCBODY",
    SEMANTICINDICELIST = "SEMANTICINDICELIST",
    SEMANTICASSIGNSTAT = "SEMANTICASSIGNSTAT",
    SEMANTICFUNCTIONCALLSTAT = "SEMANTICFUNCTIONCALLSTAT",
    SEMANTICRELEXPR = "SEMANTICRELEXPR",
    SEMANTICIFSTAT = "SEMANTICIFSTAT",
    SEMANTICWHILESTAT = "SEMANTICWHILESTAT",
    SEMANTICFUNCDEF = "SEMANTICFUNCDEF",
    SEMANTICFUNCARROW = "SEMANTICFUNCARROW",
    SEMANTICFUNCCONSTSTRUCT = "SEMANTICFUNCCONSTSTRUCT",
    SEMANTICFPARAMS = "SEMANTICFPARAMS",
    SEMANTICCLASSDECL = "SEMANTICCLASSDECL",
    SEMANTICMEMBERFUNCDECL = "SEMANTICMEMBERFUNCDECL",
    SEMANTICMEMBERVARDECL = "SEMANTICMEMBERVARDECL",
    SEMANTICISA = "SEMANTICISA",
    SEMANTICCLASSDECLORFUNCDEF = "SEMANTICCLASSDECLORFUNCDEF",
    SEMANTICEMPTYARRAYSIZE = "SEMANTICEMPTYARRAYSIZE",
}
