import { readFileSync } from "fs";
import ParseTable from "./syntactical_analysis/parsingTable";
import Parser from "./syntactical_analysis/Parser";

const pt = new ParseTable();



const file = readFileSync(`./test_files/example-polynomial.src`, "utf-8");

const parser = new Parser(file);

parser.parse();

console.log(parser.derivations);