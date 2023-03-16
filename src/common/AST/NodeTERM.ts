import { Node } from "./Node";
export class NodeTERM extends Node {
    constructor() {
        super();
    }

    toString(): string {
        return "TERM";
    }
}
