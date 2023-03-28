import { Node } from "./Node";
export class NodeFACTOR extends Node {
    tempvar: string = "";
    constructor() {
        super();
    }

    toString(): string {
        return "FACTOR";
    }
}
