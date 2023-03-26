import { readFileSync, writeFileSync } from "fs";
import Parser from "./syntactical_analysis/Parser";
import { SymbTabVisitor } from "./common/Visitors/SymbTabVisitor";

const testCases = Array.from({ length: 7 }, (_, i) => `example-testcase${i + 1}.src`);

testCases.push(`example-bubblesort.src`);
testCases.push(`example-polynomial.src`);
testCases.push(`example-AST.src`);
testCases.push(`example-error.src`);

testCases.forEach((testCase) => {
    const file = readFileSync(`./test_files/${testCase}`, "utf-8");

    const parser = new Parser(file);

    if (!parser.parse()) {
        console.log(
            `The ./test_files/${testCase} contains errors see ./output/${testCase}.outsyntaxerror for more information`,
        );
    } else {
        console.log("Semantic stack size: ", parser.semanticStack.length);
        console.log(`The file ./test_files/${testCase} was parsed succefully`);
    }

    const symTabVisitor = new SymbTabVisitor();

    parser.abstractSyntaxTree.accept(symTabVisitor);

    console.log(parser.abstractSyntaxTree.symbolTable?.toString());

    console.log(symTabVisitor.errors);

    writeFileSync(`./output/${testCase}.outsyntaxerror`, parser.errors);

    writeFileSync(`./ASTOutput/${testCase}.outast`, parser.abstractSyntaxTree.printTree());
});

// const root = new TreeNode(Concept.SEMANTICARRAYSIZE);
// const child = new TreeNode(Concept.SEMANTICVARDECL);
// child.createChildNode({type: TokenType.AND, lexeme: "and", position: 3});
// root.createChildNodeFromNode(child);

//root.print();
