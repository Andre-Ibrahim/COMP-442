import { Concept, TreeNode } from "./common/Tree";
import { readFileSync, writeFileSync } from "fs";
import Parser from "./syntactical_analysis/Parser";
import TokenType from "./lexical_analysis/TokenType";

const testCases = [];

testCases.push(`example-AST.src`);

testCases.forEach((testCase) => {
    const file = readFileSync(`./test_files/${testCase}`, "utf-8");

    const parser = new Parser(file);

    if (!parser.parse()) {
        console.log(
            `The ./test_files/${testCase} contains errors see ./output/${testCase}.outsyntaxerror for more information`,
        );
    } else {
        console.log(`The file ./test_files/${testCase} was parsed succefully`);
    }

    writeFileSync(
        `./output/${testCase}.outderivation`,
        parser.derivations
            .replace(/=>/g, "=>\n")
            .replace(/opencubr/g, "opencubr\n")
            .replace(/semi/g, "semi\n")
			.replace(/closecubr/g, "closecubr\n"),
    );
    writeFileSync(`./output/${testCase}.outsyntaxerror`, parser.errors);
});

// const root = new TreeNode(Concept.SEMANTICARRAYSIZE);
// const child = new TreeNode(Concept.SEMANTICVARDECL);
// child.createChildNode({type: TokenType.AND, lexeme: "and", position: 3});
// root.createChildNodeFromNode(child);

//root.print();
