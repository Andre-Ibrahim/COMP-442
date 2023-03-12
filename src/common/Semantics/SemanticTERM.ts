import { Semantic } from "./Semantic";
export class SemanticTERM extends Semantic {
    constructor() {
        super();
    }

    toString(): string {
        return "TERM";
    }
}
