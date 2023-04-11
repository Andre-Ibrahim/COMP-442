import { readFileSync, writeFileSync } from "fs";
import Parser from "./syntactical_analysis/Parser";

const testCases = Array.from({ length: 7 }, (_, i) => `example-testcase${i + 1}.src`);

testCases.push(`example-bubblesort.src`);
testCases.push(`example-polynomial.src`);
testCases.push("example-error.src");


export function syntacticalAnalysis(testCase: string) {
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

}

// testCases.forEach((testCase) => {
//     const file = readFileSync(`./test_files/${testCase}`, "utf-8");

//     const parser = new Parser(file);

//     if (!parser.parse()) {
//         console.log(
//             `The ./test_files/${testCase} contains errors see ./output/${testCase}.outsyntaxerror for more information`,
//         );
//     } else {
//         console.log(`The file ./test_files/${testCase} was parsed succefully`);
//     }

//     writeFileSync(
//         `./output/${testCase}.outderivation`,
//         parser.derivations
//             .replace(/=>/g, "=>\n")
//             .replace(/opencubr/g, "opencubr\n")
//             .replace(/semi/g, "semi\n")
//             .replace(/closecubr/g, "closecubr\n"),
//     );
//     writeFileSync(`./output/${testCase}.outsyntaxerror`, parser.errors);
// });
