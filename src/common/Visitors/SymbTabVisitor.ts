import TokenType from "../../lexical_analysis/TokenType";
import { Node } from "../AST/Node";
import { NodeAPARAMS } from "../AST/NodeAPARAMS";
import { NodeARITHEXPR } from "../AST/NodeARITHEXPR";
import { NodeARRAYSIZE } from "../AST/NodeARRAYSIZE";
import { NodeASSIGNSTAT } from "../AST/NodeASSIGNSTAT";
import { NodeCLASSDECL } from "../AST/NodeCLASSDECL";
import { NodeCLASSDECLORFUNCDEF } from "../AST/NodeCLASSDECLORFUNCDEF";
import { NodeEMPTYARRAYSIZE } from "../AST/NodeEMPTYARRAYSIZE";
import { NodeEPSILON } from "../AST/NodeEPSILON";
import { NodeEXPR } from "../AST/NodeEXPR";
import { NodeFACTOR } from "../AST/NodeFACTOR";
import { NodeFACTORCALLORVAR } from "../AST/NodeFACTORCALLORVAR";
import { NodeFPARAMS } from "../AST/NodeFPARAMS";
import { NodeFUNCARROW } from "../AST/NodeFUNCARROW";
import { NodeFUNCBODY } from "../AST/NodeFUNCBODY";
import { NodeFUNCCONSTSTRUCT } from "../AST/NodeFUNCCONSTSTRUCT";
import { NodeFUNCDEF } from "../AST/NodeFUNCDEF";
import { NodeFUNCTIONCALL } from "../AST/NodeFUNCTIONCALL";
import { NodeFUNCTIONCALLSTAT } from "../AST/NodeFUNCTIONCALLSTAT";
import { NodeIFSTAT } from "../AST/NodeIFSTAT";
import { NodeINDICELIST } from "../AST/NodeINDICELIST";
import { NodeISA } from "../AST/NodeISA";
import { NodeMEMBERFUNCARROW } from "../AST/NodeMEMBERFUNCARROW";
import { NodeMEMBERFUNCDECL } from "../AST/NodeMEMBERFUNCDECL";
import { NodeMEMBERVARDECL } from "../AST/NodeMEMBERVARDECL";
import { NodeREADSTAT } from "../AST/NodeREADSTAT";
import { NodeRELEXPR } from "../AST/NodeRELEXPR";
import { NodeRETURNSTAT } from "../AST/NodeRETURNSTAT";
import { NodeSTATBLOCK } from "../AST/NodeSTATBLOCK";
import { NodeTERM } from "../AST/NodeTERM";
import { NodeVARDECL } from "../AST/NodeVARDECL";
import { NodeVARIABLE } from "../AST/NodeVARIABLE";
import { NodeWHILESTAT } from "../AST/NodeWHILESTAT";
import { NodeWRITESTAT } from "../AST/NodeWRITESTAT";
import { CompilerError } from "../Errors/Error";
import { CompilerWarning } from "../Errors/Warning";
import { ClassEntry } from "../SymbTab/ClassEntry";
import { DataMemberEntry } from "../SymbTab/DataMemberEntry";
import { Entry } from "../SymbTab/Entry";
import { AParam, FunctionEntry } from "../SymbTab/FunctionEntry";
import { InheritEntry } from "../SymbTab/InheritEntry";
import { LocalVarEntry } from "../SymbTab/LocalVarEntry";
import { MemberFuncEntry } from "../SymbTab/MemberFunEntry";
import { ParameterEntry } from "../SymbTab/ParameterEntry";
import { SymbolTable } from "../SymbTab/SymbolTable";
import { Visitor } from "./Visitor";

export class SymbTabVisitor extends Visitor {
    globalTable: SymbolTable = new SymbolTable(0, "global", null);
    errors: CompilerError[] = [];
    warrnings: CompilerWarning[] = [];

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
    visit(node: NodeMEMBERFUNCARROW): void;
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
        const defaultToken = { lexeme: "", position: 0, type: TokenType.EOF };
        if (node instanceof NodeCLASSDECLORFUNCDEF) {
            node.setSymbolTable(this.globalTable);
            // propagate accepting the same visitor to all the children
            // this effectively achieves Depth-First AST Traversal
            node.children?.forEach((child) => {
                child.setSymbolTable(node.symbolTable);
                child.accept(this);
            });
        }

        if (node instanceof NodeWHILESTAT) {
            this.traverseTree(node, node.symbolTable);
        }

        if(node instanceof NodeARRAYSIZE){
            this.traverseTree(node, node.symbolTable);
        }

        if(node instanceof NodeWRITESTAT) {
            this.traverseTree(node, node.symbolTable);
        }

        if (node instanceof NodeRELEXPR) {
            this.traverseTree(node, node.symbolTable);
        }

        if (node instanceof NodeVARIABLE) {
            this.traverseTree(node, node.symbolTable);
        }

        if (node instanceof NodeINDICELIST) {
            this.traverseTree(node, node.symbolTable);
        }

        if (node instanceof NodeSTATBLOCK) {
            this.traverseTree(node, node.symbolTable);
        }

        if (node instanceof NodeIFSTAT) {
            this.traverseTree(node, node.symbolTable);
        }

        if (node instanceof NodeFUNCTIONCALL) {
            this.traverseTree(node, node.symbolTable);
        }

        if (node instanceof NodeCLASSDECL) {
            const id = node.children[0]?.value ?? defaultToken;
            const localTable = this.makeTable(node, `class:${id.lexeme}`);

            const classEntry = new ClassEntry(id, localTable);

            node.symbolTable?.entries.forEach((entry) => {
                if (entry instanceof ClassEntry && entry.id.lexeme === id.lexeme) {
                    this.errors.push(new CompilerError("8.1", id, "Multipy declared classes"));
                }
            });

            node.symbolTable?.addEntry(classEntry);

            const multipleDefinedClass = false;

            //node.symbolTable?.addEntry(localTable);

            this.traverseTree(node, localTable);
        }

        if (node instanceof NodeISA) {
            node.children.forEach((child) => {
                node.symbolTable?.addEntry(new InheritEntry(child.value ?? defaultToken));
            });
        }

        if (node instanceof NodeMEMBERFUNCDECL) {
            const visibility = node.children[0]?.value ?? defaultToken;
            const id = node.children[1]?.value ?? { lexeme: "build", position: 0, type: TokenType.EOF };
            const className = node.symbolTable?.name.split(":")[1] ?? "";
            const returnT = node.children[node.children.length - 1].value?.lexeme ?? className;

            const localTable = this.makeTable(node, `function:${id.lexeme}`);

            const aparams: AParam[] = this.createParams(node, defaultToken);

            let error = false;

            node.symbolTable?.entries.forEach((entry) => {
                if (
                    entry instanceof MemberFuncEntry &&
                    entry.id.lexeme === id.lexeme &&
                    this.ParamsEqual(entry.aParams, aparams) &&
                    entry.returnType === returnT
                ) {
                    if (!error) {
                        this.errors.push(new CompilerError("8.2", id, "Multipy declared member function functions"));
                    }

                    error = true;
                } else if (entry instanceof MemberFuncEntry && entry.id.lexeme === id.lexeme) {
                    if (!error) {
                        this.warrnings.push(new CompilerWarning("9.2", id, "overloaded member function"));
                    }

                    error = true;
                }
            });

            error = false;

            node.symbolTable?.entries.forEach((entry) => {
                if (entry instanceof InheritEntry) {
                    this.globalTable.entries.forEach((e) => {
                        if (e instanceof ClassEntry && e.id.lexeme === entry.id.lexeme) {
                            e.symbolTable.entries.forEach((func) => {
                                if (
                                    func instanceof MemberFuncEntry &&
                                    func.id.lexeme === id.lexeme &&
                                    this.ParamsEqual(func.aParams, aparams) &&
                                    func.returnType === returnT
                                ) {
                                    if (!error) {
                                        this.warrnings.push(
                                            new CompilerWarning("9.3", id, "Overridden inherited member function"),
                                        );
                                    }

                                    error = true;
                                }
                            });
                        }
                    });
                }
            });

            const memberFuncEntry = new MemberFuncEntry(id, aparams, returnT, visibility.lexeme, localTable);
            node.symbolTable?.addEntry(memberFuncEntry);

            //node.symbolTable?.addEntry(localTable);

            this.traverseTree(node, localTable);
        }

        if (node instanceof NodeFUNCDEF) {
            const funcHead = node.children[1];

            if (funcHead instanceof NodeFUNCARROW) {
                const id = node.children[0].value ?? defaultToken;
                const returnT = funcHead.children[funcHead.children.length - 1].value?.lexeme;
                const localTable = this.makeTable(node, `function:${id.lexeme}`);

                const aparams: AParam[] = this.createParams(funcHead, defaultToken);

                let error = false;

                node.symbolTable?.entries.forEach((entry) => {
                    if (
                        entry instanceof FunctionEntry &&
                        entry.id.lexeme === id.lexeme &&
                        this.ParamsEqual(entry.aParams, aparams) &&
                        entry.returnType === returnT
                    ) {
                        if (!error) {
                            this.errors.push(new CompilerError("8.2", id, "Multipy declared functions"));
                        }

                        error = true;
                    } else if (entry instanceof FunctionEntry && entry.id.lexeme === id.lexeme) {
                        if (!error) {
                            this.warrnings.push(new CompilerWarning("9.1", id, "overloaded free function"));
                        }

                        error = true;
                    }
                });

                const functionEntry = new FunctionEntry(id, aparams, returnT ?? "", localTable);
                node.symbolTable?.addEntry(functionEntry);

                //node.symbolTable?.addEntry(localTable);

                this.traverseTree(node, localTable);
            } else if (funcHead instanceof NodeMEMBERFUNCARROW || funcHead instanceof NodeFUNCCONSTSTRUCT) {
                const className = node.children[0].value ?? defaultToken;
                const returnT = funcHead.children[funcHead.children.length - 1].value?.lexeme ?? className.lexeme;
                const funcName = funcHead.children[0].value ?? {
                    lexeme: "build",
                    position: className.position,
                    type: TokenType.EOF,
                };
                const aparams: AParam[] = this.createParams(funcHead, defaultToken);

                const classes = this.globalTable.entries.filter(
                    (entry) => entry instanceof ClassEntry && entry.id.lexeme === className.lexeme,
                );

                if (classes.length === 0) {
                    this.errors.push(
                        new CompilerError("6.1", className, "undeclared class and member function definition"),
                    );
                } else {
                    // checks if there is a function decleration that coresponds to the header
                    const functions = (classes[0] as ClassEntry).symbolTable.entries.filter(
                        (entry) =>
                            entry instanceof MemberFuncEntry &&
                            entry.id.lexeme === funcName.lexeme &&
                            entry.returnType === returnT &&
                            this.ParamsEqual(entry.aParams, aparams),
                    );
                    if (functions.length === 0) {
                        // ToDo: check inherit classes
                        this.errors.push(new CompilerError("6.1", funcName, "undeclared member function definition"));
                    } else {
                        const func = functions[0] as MemberFuncEntry;
                        if (!func.defined) {
                            func.defined = true;
                            this.traverseTree(node, func.symbolTable);
                        } else {
                            this.errors.push(
                                new CompilerError("x.x", className, "mutiply definied member function definition"),
                            );
                        }
                    }
                }
            }
        }

        if (node instanceof NodeFUNCARROW) {
            node.children?.forEach((child) => {
                child.setSymbolTable(node.symbolTable);
                child.accept(this);
            });
        }

        if (node instanceof NodeMEMBERFUNCARROW) {
            node.children?.forEach((child) => {
                child.setSymbolTable(node.symbolTable);
                child.accept(this);
            });
        }

        if (node instanceof NodeFPARAMS) {
            let i = 0;
            const currentParameters =
                node.symbolTable?.entries.filter((entry) => entry instanceof ParameterEntry) ?? [];
            if (currentParameters?.length > 0) {
                return;
            }
            while (i < node.children.length) {
                const id = node.children[i]?.value ?? defaultToken;
                const type = node.children[i + 1]?.value?.lexeme ?? "type";
                const dim = node.children[i + 2]?.children?.length ?? 0;

                //entries.push(new ParameterEntry(id, id, type, dim));
                node.symbolTable?.addEntry(new ParameterEntry(id, type, new Array<number>(dim)));
                i += 3;
            }

            node.children?.forEach((child) => {
                child.setSymbolTable(node.symbolTable);
                child.accept(this);
            });
        }

        if (node instanceof NodeFUNCBODY) {
            node.children?.forEach((child) => {
                child.setSymbolTable(node.symbolTable);
                child.accept(this);
            });
        }

        if (node instanceof NodeFUNCCONSTSTRUCT) {
            node.children?.forEach((child) => {
                child.setSymbolTable(node.symbolTable);
                child.accept(this);
            });
        }

        if (node instanceof NodeRETURNSTAT) {
            node.children?.forEach((child) => {
                child.setSymbolTable(node.symbolTable);
                child.accept(this);
            });
        }

        if (node instanceof NodeVARDECL) {
            const id = node.children[0].value ?? defaultToken;
            const type = node.children[1]?.value?.lexeme ?? "type";
            const dim = node.children[2].children.map((child) => {
                if (child.value?.lexeme) {
                    return Number(child.value?.lexeme);
                }

                return -1;
            });
            let errorFound = false;
            node.symbolTable?.entries.forEach((entry) => {
                if (entry instanceof LocalVarEntry && entry.id.lexeme === id.lexeme && !errorFound) {
                    this.errors.push(new CompilerError("8.4", id, "Multipy declared identifier in function"));
                    errorFound = true;
                }
            });
            node.symbolTable?.addEntry(new LocalVarEntry(id, type, dim));
            node.children?.forEach((child) => {
                child.setSymbolTable(node.symbolTable);
                child.accept(this);
            });
        }

        if (node instanceof NodeMEMBERVARDECL) {
            const visibility = node.children[0].value ?? defaultToken;
            const id = node.children[1].value ?? defaultToken;
            const type = node.children[2].value ?? defaultToken;

            const dim: number[] = node.children[3].children.map((child) => {
                if (child instanceof NodeEMPTYARRAYSIZE) {
                    return -1;
                } else {
                    return Number(child.value?.lexeme);
                }
            });

            node.symbolTable?.entries.forEach((entry) => {
                if (entry instanceof DataMemberEntry && entry.id.lexeme === id.lexeme) {
                    this.errors.push(new CompilerError("8.3", id, "Multipy declared data member in class"));
                }
            });

            const inherited = this.getInhertiedMembers(node);

            inherited.forEach((entry) => {
                if (entry instanceof DataMemberEntry && entry.id.lexeme === id.lexeme) {
                    this.warrnings.push(new CompilerWarning("8.6", id, "Shadowed inherited data member"));
                }
            });

            node.symbolTable?.addEntry(new DataMemberEntry(id, type.lexeme, visibility.lexeme, dim));
        }

        if (node instanceof NodeASSIGNSTAT) {
            this.traverseTree(node, node.symbolTable);
        }

        if (node instanceof NodeFUNCTIONCALLSTAT) {
            this.traverseTree(node, node.symbolTable);
        }

        if (node instanceof NodeAPARAMS) {
            this.traverseTree(node, node.symbolTable);
        }

        if (node instanceof NodeEXPR) {
            this.traverseTree(node, node.symbolTable);
        }

        if (node instanceof NodeARITHEXPR) {
            this.traverseTree(node, node.symbolTable);
        }

        if (node instanceof NodeTERM) {
            this.traverseTree(node, node.symbolTable);
        }

        if (node instanceof NodeFACTOR) {
            this.traverseTree(node, node.symbolTable);
        }

        if (node instanceof NodeFACTORCALLORVAR) {
            this.traverseTree(node, node.symbolTable);
        }
    }

    private getInhertiedMembers(node: Node): Entry[] {
        const dataMembers: Entry[] = [];

        node.symbolTable?.entries.forEach((entry) => {
            if (entry instanceof InheritEntry) {
                this.globalTable.entries.forEach((e) => {
                    if (e instanceof ClassEntry && e.id.lexeme === entry.id.lexeme) {
                        e.symbolTable.entries.forEach((l) => {
                            if (l instanceof DataMemberEntry) {
                                dataMembers.push(l);
                            }
                        });
                    }
                });
            }
        });

        return dataMembers;
    }

    private createParams(
        node: NodeMEMBERFUNCDECL,
        defaultToken: { lexeme: string; position: number; type: TokenType },
    ) {
        const params = node.children.filter((child) => child instanceof NodeFPARAMS);
        const aparams: AParam[] = [];
        if (params.length > 0) {
            const paramsNode = params[0];
            let i = 0;
            while (i < paramsNode.children.length) {
                const id = paramsNode.children[i]?.value ?? defaultToken;
                const type = paramsNode.children[i + 1]?.value?.lexeme ?? "type";
                const dim = paramsNode.children[i + 2]?.children?.length ?? 0;

                //entries.push(new ParameterEntry(id, id, type, dim));
                aparams.push({ id: id.lexeme, type, dim });
                i += 3;
            }
        }
        return aparams;
    }

    private ParamsEqual(x: AParam[], y: AParam[]) {
        if (x.length !== y.length) {
            return false;
        }
        let areEqual = true;
        x.forEach((param, i) => {
            if (param.type !== y[i].type) {
                areEqual = false;
            }

            if (param.dim !== y[i].dim) {
                areEqual = false;
            }
        });
        return areEqual;
    }

    private traverseTree(node: Node, localTable: SymbolTable | null) {
        node.children?.forEach((child) => {
            child.setSymbolTable(localTable);
            child.accept(this);
        });
    }

    private makeTable(node: Node, name: string) {
        return new SymbolTable((node.symbolTable?.level ?? -1) + 1, name, node.symbolTable);
    }
}
