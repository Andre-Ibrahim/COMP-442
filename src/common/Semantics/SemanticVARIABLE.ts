import { Semantic } from "./Semantic";
export class SemanticVARIABLE extends Semantic {
    constructor() {
        super();
    }

    toString(): string {
        return "VARIABLE";
    }
}
