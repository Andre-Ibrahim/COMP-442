import { Semantic } from "./Semantic";
export class SemanticEXPR extends Semantic {
	constructor(){
        super();
        }

	toString(): string {
		return "EXPR";
	}
}