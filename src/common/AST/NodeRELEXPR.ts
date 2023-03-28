import { Node } from "./Node";
export class NodeRELEXPR extends Node {
    tempvar: string = "";
    constructor() {
        super();
    }

    toString(): string {
        return "RELEXPR";
    }
}
