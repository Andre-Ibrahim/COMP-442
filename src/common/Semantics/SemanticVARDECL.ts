import { Semantic } from "./Semantic";
export class SemanticVARDECL extends Semantic {
    constructor() {
        super();
    }

    toString(): string {
        return "VARDECL";
    }
}
