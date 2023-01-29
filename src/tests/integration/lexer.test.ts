import { readFileSync } from "fs";

describe("Lexer", () => {

    it("generated lexnegativegrading.outlexerrors output should be equal to the given lexnegativegrading.outlexerrors", () => {
        const generatedOutput = readFileSync("./src/output/lexnegativegrading.outlexerrors", "utf-8");
        const givenOutput = readFileSync("./src/given_output/lexnegativegrading.outlexerrors", "utf-8");

            expect(JSON.stringify(generatedOutput.replace(/\r\n|\n|\r/gm, ""))).toBe(JSON.stringify(givenOutput.replace(/\r\n|\n|\r/gm, "")));
    })

    it("generated lexnegativegrading.outlextokens output should be equal to the given lexnegativegrading.outlextokens", () => {
        const generatedOutput = readFileSync("./src/output/lexnegativegrading.outlextokens", "utf-8");
        const givenOutput = readFileSync("./src/given_output/lexnegativegrading.outlextokens", "utf-8");

            expect(JSON.stringify(generatedOutput.replace(" ", "").replace(/\r\n|\n|\r/gm, ""))).toBe(JSON.stringify(givenOutput.replace(" ", "").replace(/\r\n|\n|\r|\t/gm, "")));
    })


});