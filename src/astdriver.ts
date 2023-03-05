import { readFileSync, writeFileSync } from "fs";
import Parser from "./syntactical_analysis/Parser";

const testCases = Array.from({ length: 7 }, (_, i) => `example-testcase${i + 1}.src`);

testCases.push(`example-bubblesort.src`);
testCases.push(`example-polynomial.src`);
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

    writeFileSync(`./ASTOutput/${testCase}.outast`, parser.abstractSyntaxTree.toString());
});

// const root = new TreeNode(Concept.SEMANTICARRAYSIZE);
// const child = new TreeNode(Concept.SEMANTICVARDECL);
// child.createChildNode({type: TokenType.AND, lexeme: "and", position: 3});
// root.createChildNodeFromNode(child);

//root.print();
