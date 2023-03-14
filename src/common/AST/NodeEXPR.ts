import { Node } from "./Node";
    export class NodeEXPR extends Node {
        constructor() {
            super();
        }
    
        toString(): string {
            return "EXPR";
        }
    }
    