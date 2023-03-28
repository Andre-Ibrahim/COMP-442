import { Visitor } from "./Visitor";

import { NodeVARDECL } from "../AST/NodeVARDECL";
import { NodeARRAYSIZE } from "../AST/NodeARRAYSIZE";
import { NodeEPSILON } from "../AST/NodeEPSILON";
import { NodeRETURNSTAT } from "../AST/NodeRETURNSTAT";
import { NodeEXPR } from "../AST/NodeEXPR";
import { NodeARITHEXPR } from "../AST/NodeARITHEXPR";
import { NodeTERM } from "../AST/NodeTERM";
import { NodeFACTOR } from "../AST/NodeFACTOR";
import { NodeVARIABLE } from "../AST/NodeVARIABLE";
import { NodeFACTORCALLORVAR } from "../AST/NodeFACTORCALLORVAR";
import { NodeFUNCTIONCALL } from "../AST/NodeFUNCTIONCALL";
import { NodeAPARAMS } from "../AST/NodeAPARAMS";
import { NodeWRITESTAT } from "../AST/NodeWRITESTAT";
import { NodeREADSTAT } from "../AST/NodeREADSTAT";
import { NodeSTATBLOCK } from "../AST/NodeSTATBLOCK";
import { NodeFUNCBODY } from "../AST/NodeFUNCBODY";
import { NodeINDICELIST } from "../AST/NodeINDICELIST";
import { NodeASSIGNSTAT } from "../AST/NodeASSIGNSTAT";
import { NodeFUNCTIONCALLSTAT } from "../AST/NodeFUNCTIONCALLSTAT";
import { NodeRELEXPR } from "../AST/NodeRELEXPR";
import { NodeIFSTAT } from "../AST/NodeIFSTAT";
import { NodeWHILESTAT } from "../AST/NodeWHILESTAT";
import { NodeFUNCDEF } from "../AST/NodeFUNCDEF";
import { NodeFUNCARROW } from "../AST/NodeFUNCARROW";
import { NodeFUNCCONSTSTRUCT } from "../AST/NodeFUNCCONSTSTRUCT";
import { NodeFPARAMS } from "../AST/NodeFPARAMS";
import { NodeCLASSDECL } from "../AST/NodeCLASSDECL";
import { NodeMEMBERFUNCDECL } from "../AST/NodeMEMBERFUNCDECL";
import { NodeMEMBERVARDECL } from "../AST/NodeMEMBERVARDECL";
import { NodeISA } from "../AST/NodeISA";
import { NodeCLASSDECLORFUNCDEF } from "../AST/NodeCLASSDECLORFUNCDEF";
import { NodeEMPTYARRAYSIZE } from "../AST/NodeEMPTYARRAYSIZE";
import { NodeMEMBERFUNCARROW } from "../AST/NodeMEMBERFUNCARROW";
import { Node } from "../AST/Node";
import { LocalVarEntry } from "../SymbTab/LocalVarEntry";
import TokenType from "../../lexical_analysis/TokenType";
import { CountQueuingStrategy } from "stream/web";

export class CodeGenVisitor extends Visitor {

    code: string = "";
    data: string = "";
    litCount: number = 1;
    tempCount: number = 1;
    expressionVar: string = "";
    indent: string = "".slice(0, 15).padEnd(15);
    registerPool = [...Array(12).keys()].map((_, i) => `r${i+1}`).reverse();

    visit(node: NodeVARDECL): void;
    visit(node: NodeARRAYSIZE): void;
    visit(node: NodeEPSILON): void;
    visit(node: NodeRETURNSTAT): void;
    visit(node: NodeEXPR): void;
    visit(node: NodeARITHEXPR): void;
    visit(node: NodeTERM): void;
    visit(node: NodeFACTOR): void;
    visit(node: NodeVARIABLE): void;
    visit(node: NodeFACTORCALLORVAR): void;
    visit(node: NodeFUNCTIONCALL): void;
    visit(node: NodeAPARAMS): void;
    visit(node: NodeWRITESTAT): void;
    visit(node: NodeREADSTAT): void;
    visit(node: NodeSTATBLOCK): void;
    visit(node: NodeFUNCBODY): void;
    visit(node: NodeINDICELIST): void;
    visit(node: NodeASSIGNSTAT): void;
    visit(node: NodeFUNCTIONCALLSTAT): void;
    visit(node: NodeRELEXPR): void;
    visit(node: NodeIFSTAT): void;
    visit(node: NodeWHILESTAT): void;
    visit(node: NodeFUNCDEF): void;
    visit(node: NodeFUNCARROW): void;
    visit(node: NodeFUNCCONSTSTRUCT): void;
    visit(node: NodeFPARAMS): void;
    visit(node: NodeCLASSDECL): void;
    visit(node: NodeMEMBERFUNCDECL): void;
    visit(node: NodeMEMBERVARDECL): void;
    visit(node: NodeISA): void;
    visit(node: NodeCLASSDECLORFUNCDEF): void;
    visit(node: NodeEMPTYARRAYSIZE): void;
    visit(node: unknown): void {
        if (node instanceof NodeVARDECL) {
            this.traverseTree(node);

            // look up localvar declaration in table for mem size
            node.symbolTable?.entries.forEach((entry) => {
                if(entry instanceof LocalVarEntry && entry.id.lexeme === node?.children[0].value?.lexeme){
                    this.data += this.reserveBytes(entry.id.lexeme, entry.memSize);
                }
            })

        }
        if (node instanceof NodeARRAYSIZE) {
            this.traverseTree(node);
        }
        if (node instanceof NodeEPSILON) {
            this.traverseTree(node);
        }
        if (node instanceof NodeRETURNSTAT) {
            this.traverseTree(node);
        }
        if (node instanceof NodeEXPR) {
            this.traverseTree(node);
        }
        if (node instanceof NodeARITHEXPR) {
            this.traverseTree(node);
            node.tempvar = this.generateTempVar();
            // handle add
            if(node.children.length === 1){
                // migrate tempvar to node if its only factor
                const term = node.children[0];
                if(term instanceof NodeTERM){
                    node.tempvar = term.tempvar;
                }
             }else if(node.children.length === 3){
                // handle add opperation
                const term = node.children[0];
                let termTempVar = "";
                const innerArithExpr = node.children[2];
                let innerArithExprTempVar = "";

                if(term instanceof NodeTERM){
                    termTempVar = term.tempvar;
                }

                if(innerArithExpr instanceof NodeARITHEXPR){
                    innerArithExprTempVar = innerArithExpr.tempvar;
                }

                const addOp = node.children[1].value;
                const ArithExpressionTempVar = node.tempvar;
                this.data += this.reserveBytes(ArithExpressionTempVar, this.getLitSize(node.type));
                this.expressionVar = ArithExpressionTempVar;
                this.code += this.addition(termTempVar, innerArithExprTempVar, ArithExpressionTempVar, addOp?.type ?? TokenType.MULT);
            }
        }
        if (node instanceof NodeTERM) {
            this.traverseTree(node);

            // handle multiplication
            if(node.children.length === 1){
                // migrate tempvar to node if its only factor
                const factor = node.children[0];
                if(factor instanceof NodeFACTOR){
                    node.tempvar = factor.tempvar;
                }
            }else if(node.children.length === 3){

                // setting the temp var
                node.tempvar = this.generateTempVar();
                // handle mult opperation
                const factor = node.children[0];
                let factorTempVar = "";
                const innerTerm = node.children[2];
                let innerTermTempVar = "";

                if(factor instanceof NodeFACTOR){
                    factorTempVar = factor.tempvar;
                    console.log("factorTemp", factorTempVar);
                }

                if(innerTerm instanceof NodeTERM){
                    innerTermTempVar = innerTerm.tempvar;


                    console.log("innerTerm", innerTermTempVar);

                    // to be removed
                    if(innerTermTempVar === ""){
                        if(innerTerm.children[0] instanceof NodeFACTOR){
                            innerTermTempVar = innerTerm.children[0].tempvar;
                        }
                    }
                }

                const multOp = node.children[1].value;
                const termTempVar = node.tempvar;
                this.data += this.reserveBytes(termTempVar, this.getLitSize(node.type));
                this.expressionVar = termTempVar;
                this.code += this.multiplication(factorTempVar, innerTermTempVar, termTempVar, multOp?.type ?? TokenType.MULT);
            }

        }
        if (node instanceof NodeFACTOR) {
            this.traverseTree(node);

            // create lit values
            if(node.children[0].value?.type === TokenType.INTNUM || node.children[0].value?.type === TokenType.FLOATNUM){
                node.tempvar = this.generateLitVar();

                this.expressionVar = node.tempvar;

                if(node.parentNode instanceof NodeTERM){
                    //node.parentNode.tempvar = exprVar;
                    node.parentNode.type = node.children[0].value?.type;
                }

                this.data += this.reserveBytes(this.expressionVar, this.getLitSize(node.children[0].value?.type ));

                this.code += this.storeVar(this.expressionVar, node.children[0].value.lexeme);

            }else if(node.children[0] instanceof NodeARITHEXPR || node.children[0] instanceof NodeEXPR){
                node.tempvar = node.children[0].tempvar;
            }else if(node.children[0] instanceof NodeFACTORCALLORVAR) {
                const variableName = node.children[0].children[0].children[0].value?.lexeme ?? "";
                node.tempvar = variableName;
            }

        }
        if (node instanceof NodeVARIABLE) {
            this.traverseTree(node);
        }
        if (node instanceof NodeFACTORCALLORVAR) {
            this.traverseTree(node);

            if(node.children[0] instanceof NodeVARIABLE){
                this.expressionVar = node.children[0].children[0].value?.lexeme?? "";


            }
        }
        if (node instanceof NodeFUNCTIONCALL) {
            this.traverseTree(node);
        }
        if (node instanceof NodeAPARAMS) {
            this.traverseTree(node);
        }
        if (node instanceof NodeWRITESTAT) {

            this.traverseTree(node);


            this.code += `${this.indent}% processing: write(${this.expressionVar})
${this.indent}lw r1, ${this.expressionVar}(r0)
${this.indent}% put value on stack
${this.indent}sw -8(r14), r1
${this.indent}% Link buffer to stack
${this.indent}addi r1,r0, buf
${this.indent}sw -12(r14), r1
${this.indent}% convert int to string for output
${this.indent}jl r15, intstr
${this.indent}sw -8 (r14), r13
${this.indent}% output to console
${this.indent}jl r15, putstr
`;

            const writeBufferSpace = this.reserveBytes("buf", 20);
            if(!this.data.includes(writeBufferSpace)){
                this.data += writeBufferSpace + "\n";
            }
        }
        if (node instanceof NodeREADSTAT) {
            this.traverseTree(node);
        }
        if (node instanceof NodeSTATBLOCK) {
            this.traverseTree(node);
        }
        if (node instanceof NodeFUNCBODY) {
            this.traverseTree(node);
        }
        if (node instanceof NodeINDICELIST) {
            this.traverseTree(node);
        }
        if (node instanceof NodeASSIGNSTAT) {
            this.traverseTree(node);

            const variable = node.children[0].children[0];
            if(variable?.value){
                this.code += this.assignVar(variable.value.lexeme, this.expressionVar);
            }
        }
        if (node instanceof NodeFUNCTIONCALLSTAT) {
            this.traverseTree(node);
        }
        if (node instanceof NodeRELEXPR) {
            this.traverseTree(node);
        }
        if (node instanceof NodeIFSTAT) {
            this.traverseTree(node);
        }
        if (node instanceof NodeWHILESTAT) {
            this.traverseTree(node);
        }
        if (node instanceof NodeFUNCDEF) {
            const isMain = node.children[0].value?.lexeme === "main";

            if(isMain){
                this.code += `${this.indent}entry\n`;
                this.code += `${this.indent}addi r14, r0, topaddr\n`;
            }

            this.traverseTree(node);

            if(isMain){
                this.code += `${this.indent}hlt\n`;
            }
        }
        if (node instanceof NodeFUNCARROW) {
            this.traverseTree(node);
        }
        if (node instanceof NodeFUNCCONSTSTRUCT) {
            this.traverseTree(node);
        }
        if (node instanceof NodeFPARAMS) {
            this.traverseTree(node);
        }
        if (node instanceof NodeCLASSDECL) {
            this.traverseTree(node);
        }
        if (node instanceof NodeMEMBERFUNCDECL) {
            this.traverseTree(node);
        }
        if (node instanceof NodeMEMBERVARDECL) {
            this.traverseTree(node);
        }
        if (node instanceof NodeISA) {
            this.traverseTree(node);
        }
        if (node instanceof NodeCLASSDECLORFUNCDEF) {
            this.traverseTree(node);
        }
        if (node instanceof NodeEMPTYARRAYSIZE) {
            this.traverseTree(node);
        }
        if (node instanceof NodeMEMBERFUNCARROW) {
            this.traverseTree(node);
        }
    }

    private traverseTree(node: Node) {
        node.children?.forEach((child) => {
            child.accept(this);
        });
    }

    private reserveBytes(id: string, size: number){
        const space = 15;

        let text = `${"".slice(0, space).padEnd(space)}% space for variable ${id}\n`
        text += `${id.slice(0, space).padEnd(space)}res ${size}\n`;

        return text;
    }

    private storeVar(id: string, value: string) {
        const register = this.registerPool.pop();


        let text = `%storing ${value} into ${id}
${this.indent}addi ${register}, r0, ${value}\n`
        text += `${this.indent}sw ${id}(r0), ${register}\n`
        text += `${this.indent} addi ${register}, r0, 0\n`

        this.registerPool.push(register ?? "");

        return text;
    }

    private assignVar(left: string, right: string) {
        const register = this.registerPool.pop();

        const text = `% assigning ${right} to ${left}
${this.indent}lw ${register}, ${right}(r0)
${this.indent}sw ${left}(r0), ${register}
${this.indent}addi ${register}, r0, 0\n`

        this.registerPool.push(register ?? "");

        return text;
    }

    private multiplication(left: string, right: string, tempvar: string, operator: TokenType): string {
        const register1 = this.registerPool.pop();
        const register2 = this.registerPool.pop();
        const register3 = this.registerPool.pop();

        let operation = "mul";
        if(operator === TokenType.DIV){
            operation = "div";
        }else {
            operation = "mul";
        }

        let text = `%multiplying ${left} with ${right}
${this.indent}lw ${register1}, ${left}(r0)\n`
        text += `${this.indent}lw ${register2}, ${right}(r0)\n`
        text += `${this.indent}${operation} ${register3}, ${register1}, ${register2}\n`
        text += `${this.indent}sw ${tempvar}(r0), r3\n`

        this.registerPool.push(register3 ?? "");
        this.registerPool.push(register2 ?? "");
        this.registerPool.push(register1 ?? "");

        return text;

    }

    private addition(left: string, right: string, tempvar: string, operator: TokenType): string {
        const register1 = this.registerPool.pop();
        const register2 = this.registerPool.pop();
        const register3 = this.registerPool.pop();

        let operation = "add";
        if(operator === TokenType.MINUS){
            operation = "sub";
        }else {
            operation = "add";
        }

        let text = `%adding ${left} with ${right}
${this.indent}lw ${register1}, ${left}(r0)\n`
        text += `${this.indent}lw ${register2}, ${right}(r0)\n`
        text += `${this.indent}${operation} ${register3}, ${register1}, ${register2}\n`
        text += `${this.indent}sw ${tempvar}(r0), r3\n`

        this.registerPool.push(register3 ?? "");
        this.registerPool.push(register2 ?? "");
        this.registerPool.push(register1 ?? "");

        return text;

    }

    private getLitSize(type: string): number {
        if (type === TokenType.INTNUM) {
            return 4;
        } else if (type === TokenType.FLOATNUM) {
            return 8;
        }else if (type === TokenType.INTEGER){
            return 4;
        }else if (type === TokenType.FLOAT){
            return 8;
        }

        return 0;
    }

    private generateTempVar(): string {
        return "temp" + this.tempCount++;
    }

    private generateLitVar(): string {
        return "lit" + this.litCount++;
    }

    public getOutput(): string {
        return this.code + "\n" + this.data;
    }
}
