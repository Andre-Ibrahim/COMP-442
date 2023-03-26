import { readFileSync, writeFileSync } from "fs";
import Parser from "./syntactical_analysis/Parser";
import { SymbTabVisitor } from "./common/Visitors/SymbTabVisitor";
import { getUndefinedMemberFunction } from "./common/Errors/undefinedMemberFunction";
import { CompilerError } from "./common/Errors/Error";
import { TypeCheckVisitor } from "./common/Visitors/TypeCheckVisitor";
import { IntermediateVarVisitor } from "./common/Visitors/IntermediateVarVisitor";
import { MemSizeSetter } from "./common/SymbolTableParsing/MemSizeSetter";
import { CodeGenVisitor } from "./common/Visitors/CodeGenVisitor";

const testCases = Array.from({ length: 7 }, (_, i) => `example-testcase${i + 1}.src`);

testCases.push(`example-bubblesort.src`);
testCases.push(`example-polynomial.src`);
testCases.push(`example-AST.src`);
//testCases.push(`example-error.src`);

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
    const typeCheckVisitor = new TypeCheckVisitor();
    const tempVarVisitor = new IntermediateVarVisitor();
    const codeGenVisitor = new CodeGenVisitor();

    parser.abstractSyntaxTree.accept(symTabVisitor);
    parser.abstractSyntaxTree.accept(typeCheckVisitor);
    parser.abstractSyntaxTree.accept(tempVarVisitor);
    const memSizeSetter = new MemSizeSetter(parser.abstractSyntaxTree.symbolTable);
    memSizeSetter.setMemSize();
    parser.abstractSyntaxTree.accept(codeGenVisitor);

    writeFileSync(
        `./SymbolTableOutput/${testCase}.outsymboltables`,
        parser.abstractSyntaxTree.symbolTable?.toString() ?? "",
    );

    writeFileSync(`./CodeOutput/${testCase}.m`, codeGenVisitor.code);

    const errors: CompilerError[] = [];

    errors.push(...symTabVisitor.errors);
    errors.push(...getUndefinedMemberFunction(parser.abstractSyntaxTree.symbolTable));
    errors.push(...typeCheckVisitor.errors);

    let errorsString = "";
    errors.forEach((error) => {
        errorsString += error.toString() + "\n";
    });

    let warningsString = "";
    symTabVisitor.warrnings.forEach((warning) => {
        warningsString += warning.toString() + "\n";
    });

    writeFileSync(`./SemanticErrors/${testCase}.outputerrors`, errorsString);
    writeFileSync(`./SemanticWarnings/${testCase}.outputwarnings`, warningsString);

    writeFileSync(
        `./output/${testCase}.outderivation`,
        parser.derivations
            .replace(/=>/g, "=>\n")
            .replace(/opencubr/g, "opencubr\n")
            .replace(/semi/g, "semi\n")
            .replace(/closecubr/g, "closecubr\n"),
    );
    writeFileSync(`./output/${testCase}.outsyntaxerror`, parser.errors);

    writeFileSync(`./ASTOutput/${testCase}.outast`, parser.abstractSyntaxTree.printTree());
});

// const root = new TreeNode(Concept.SEMANTICARRAYSIZE);
// const child = new TreeNode(Concept.SEMANTICVARDECL);
// child.createChildNode({type: TokenType.AND, lexeme: "and", position: 3});
// root.createChildNodeFromNode(child);

//root.print();
