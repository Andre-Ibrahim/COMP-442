import { Node } from "./Node";
export class NodeTERM extends Node {
    tempvar: string = "";
    constructor() {
        super();
    }

    toString(): string {
        return "TERM";
    }
}
