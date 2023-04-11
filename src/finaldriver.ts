import { createInterface } from "readline";
import { lexicalAnalysis } from "./lexdriver";
import { syntacticalAnalysis } from "./parserdriver";
import { astGeneration } from "./ASTdriver";
import { compileDriver } from "./complierdriver";
import { ErrorType } from "./common/Errors/ErrorType";
import { writeFileSync } from "fs";


async function main(): Promise<void>{

    while(true){

    console.log("\n");

    const filename = await question("please enter the filename to compile: ");
    
    try {

    const errors: ErrorType[] = [];

    // lexical analysis phase

    errors.push(...lexicalAnalysis(filename));
    console.log(`lexical analysis completed for ${filename}`);
    // Syntactical analysis

    errors.push(...syntacticalAnalysis(filename));
    // Ast generation

    astGeneration(filename);
    console.log(`Ast generation completed for ${filename}`);

    // symbol table generation
    // semantic analysis
    // code generation
    errors.push(...compileDriver(filename));

    // error checking
    const sortedErrors = errors.sort((a,b) => a.position - b.position);

    console.log(sortedErrors);

    let errorsString = "";
    sortedErrors.forEach((error) => {
        errorsString += error.message + "\n";
    });

    writeFileSync(`./ErrorOutput/${filename}.outputerrors`, errorsString);

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