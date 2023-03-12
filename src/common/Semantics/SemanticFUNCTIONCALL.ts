import { Semantic } from "./Semantic";
export class SemanticFUNCTIONCALL extends Semantic {
    constructor() {
        super();
    }

    toString(): string {
        return "FUNCTIONCALL";
    }
}
