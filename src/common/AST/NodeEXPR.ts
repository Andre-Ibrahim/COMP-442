import { Node } from "./Node";
export class NodeEXPR extends Node {
    tempvar: string = "";
    constructor() {
        super();
    }

    toString(): string {
        return "EXPR";
    }
}
