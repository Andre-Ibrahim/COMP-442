import { Semantic } from "./Semantic";
export class SemanticFUNCDEF extends Semantic {
	constructor(){
        super();
        }

	toString(): string {
		return "FUNCDEF";
	}
}