import { Token } from "../../lexical_analysis/Token";
import { Entry } from "./Entry";

export class DataEntry extends Entry {
    id: Token;
    type: string;
    visibility: string;

    constructor(id: Token, type: string, visibility: string) {
        super();

        this.id = id;
        this.type = type;
        this.visibility = visibility;
    }
}
