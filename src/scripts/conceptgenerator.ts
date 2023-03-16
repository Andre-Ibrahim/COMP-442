import { Concept } from "../common/AST/Concept";

const concepts = Object.keys(Concept);

console.log(concepts);

let text = "";

concepts.forEach((x) => {
    text += `
    if(concept === Concept.${x}){
        return new ${x.replace("SEMANTIC", "Node")}();
    }\n
    `;
});

text = "";

concepts.forEach((x) => {
    text += `import { Node${x.replace("SEMANTIC", "")} } from "../AST/${x.replace("SEMANTIC", "Node")}";\n`;
});

console.log(text);

text = "";

concepts.forEach((x) => {
    text = `import { Node } from "./Node";
    export class Node${x.replace("SEMANTIC", "")} extends Node {
        constructor() {
            super();
        }
    
        toString(): string {
            return "${x.replace("SEMANTIC", "")}";
        }
    }
    `;

    //writeFileSync(`./src/common/AST/${x.replace("SEMANTIC", "Node")}.ts`, text);
});

text = "";

concepts.forEach((x) => {
    text += `\tabstract visit(node: ${x.replace("SEMANTIC", "Node")}): void;\n`;
});

console.log(text);
