import { Entry } from "./Entry";

export class ParameterEntry extends Entry {
    id: string;
    type: string;
    dim: number;

    constructor(name: string, id: string ,type: string, dim: number){
        super(name);
        this.type = type;
        this.dim = dim;
        this.id = id;
    }

    toString(){
        return `parameter | id: ${this.id} | type: ${this.type}${"[]".repeat(this.dim)}`;
    }

}