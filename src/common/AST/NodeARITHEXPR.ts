import { Node } from "./Node";
export class NodeARITHEXPR extends Node {
    tempvar: string = "";
    constructor() {
        super();
    }

    toString(): string {
        return "ARITHEXPR";
    }
}
