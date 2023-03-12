import { Semantic } from "./Semantic";
export class SemanticASSIGNSTAT extends Semantic {
    constructor() {
        super();
    }

    toString(): string {
        return "ASSIGNSTAT";
    }
}
