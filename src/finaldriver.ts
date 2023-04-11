import { createInterface } from "readline";
import { lexicalAnalysis } from "./lexdriver";
import { syntacticalAnalysis } from "./parserdriver";


async function main(): Promise<void>{

    while(true){

    const filename = await question("please enter the filename to compile: ");
    
    try {
    console.log("\n");
    // lexical analysis phase

    lexicalAnalysis(filename);
    console.log(`lexical analysis completed for ${filename}`);
    // Syntactical analysis

    syntacticalAnalysis(filename);
    // Ast generation


    // symbol table generation


    // semantic analysis


    // code generation


    // error checking

    console.log("\n");
    }catch(_){
        console.log("invalid file name: " + filename);
    }

        
    }



}

main();


async function question(questionText: string) {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise<string>(resolve => rl.question(questionText, resolve))
    .finally(() => rl.close());
}