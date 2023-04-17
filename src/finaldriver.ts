import { createInterface } from "readline";
import { lexicalAnalysis } from "./lexdriver";
import { syntacticalAnalysis } from "./parserdriver";
import { astGeneration } from "./ASTdriver";
import { compileDriver } from "./complierdriver";
import { ErrorType } from "./common/Errors/ErrorType";
import { writeFileSync } from "fs";


async function main(): Promise<void>{

    const filename = process.env.npm_config_filename ?? "";
    
    try {

    const errors: ErrorType[] = [];

    // lexical analysis phase
    const lexicalErrors = lexicalAnalysis(filename);
    errors.push(...lexicalErrors);
    console.log("\n");

    if(lexicalErrors.length > 0){
        console.log(`lexical analysis completed for ${filename} with errors\n`);

    }else {
        console.log(`lexical analysis completed for ${filename} successfully\n`);
    }
    // Syntactical analysis

    const syntacticalErrors = syntacticalAnalysis(filename);
    errors.push(...syntacticalErrors);
    if(syntacticalErrors.length > 0){
        console.log(`syntactical analysis completed for ${filename} with errors\n`);

    }else {
        console.log(`syntactical analysis completed for ${filename} successfully\n`);
    }
    // Ast generation

    astGeneration(filename);
    console.log(`Ast generation completed for ${filename}\n`);

    // symbol table generation
    // semantic analysis
    // code generation
    const compileErrors = compileDriver(filename);
    errors.push(...compileErrors);

    if(compileErrors.length > 0){
        console.log(`code generation completed for ${filename} with errors\n`);

    }else {
        console.log(`code generation completed for ${filename} successfully\n`);
    }

    // error checking
    const sortedErrors = errors.sort((a,b) => a.position - b.position);

    let errorsString = "";
    sortedErrors.forEach((error) => {
        errorsString += error.message + "\n";
    });

    writeFileSync(`./ErrorOutput/${filename}.outputerrors`, errorsString);

    }catch(_){
        console.log("invalid file name: " + filename);
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