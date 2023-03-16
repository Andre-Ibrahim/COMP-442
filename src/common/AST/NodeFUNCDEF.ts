import { Node } from "./Node";
export class NodeFUNCDEF extends Node {
    constructor() {
        super();
    }

    toString(): string {
        return "FUNCDEF";
    }
}
