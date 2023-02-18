import { readFileSync, writeFileSync } from "fs";
import ParseTable from "./syntactical_analysis/parsingTable";
import Parser from "./syntactical_analysis/Parser";

const pt = new ParseTable();



const file = readFileSync(`./test_files/example-polynomial.src`, "utf-8");

const parser = new Parser(file);

if(!parser.parse()){
    console.log("The file contains errors see filename.outparseerror for more information")
}

writeFileSync(`./output/$example-polynomial.outderivations`, parser.derivations);
writeFileSync(`./output/$example-polynomial.outparsererrors`, parser.errors);