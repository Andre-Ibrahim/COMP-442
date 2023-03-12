import { Semantic } from "./Semantic";
export class SemanticARITHEXPR extends Semantic {
    constructor() {
        super();
    }

    toString(): string {
        return "ARITHEXPR";
    }
}
