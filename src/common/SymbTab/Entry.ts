export abstract class Entry {
    name: string;

    constructor(name: string){
        this.name = name;
    }

    toString(){
        return this.name;
    }
    
}