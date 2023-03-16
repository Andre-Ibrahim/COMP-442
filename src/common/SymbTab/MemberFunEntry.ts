import { Token } from "../../lexical_analysis/Token";
import { Entry } from "./Entry";
import { AParam, FunctionEntry } from "./FunctionEntry";

export class MemberFuncEntry extends FunctionEntry {

    visibility: string;

    constructor(id: Token, aParams: AParam[], returnType: string, visibility: string){
        super(id, aParams, returnType);

        this.visibility = visibility;
    }

    toString(): string {
        return `${super.toString()} | ${this.visibility}`;
    }
}