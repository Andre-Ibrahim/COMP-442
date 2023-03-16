import { Node } from "./Node";
export class NodeVARIABLE extends Node {
    constructor() {
        super();
    }

    toString(): string {
        return "VARIABLE";
    }
}
