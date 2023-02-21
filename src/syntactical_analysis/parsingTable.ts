import { readFileSync } from "fs";
import { grammarToToken } from "../common/stringHelpers";

export default class ParsingTable {
    table: Map<string, Map<string, string[]>>;
    firstSet: Map<string, string[]>;
    followSet: Map<string, string[]>;

    constructor() {
        const results: any = [];

        this.table = new Map<string, Map<string, string[]>>();
        const tableCsvFile = readFileSync("./src/syntactical_analysis/parsingTable.csv").toString("utf8");
        this.functionBuildTable(tableCsvFile);

        this.firstSet = new Map<string, string[]>();
        this.followSet = new Map<string, string[]>();

        const firstAndFollowCsvFile = readFileSync("./src/syntactical_analysis/firstAndFollowSets.csv").toString(
            "utf8",
        );
        this.functionBuildFirstAndFollow(firstAndFollowCsvFile);
    }

    public get(key: string): Map<string, string[]> {
        return this.table.get(key) ?? new Map<string, string[]>();
    }

    public getFirst(key: string): string[] {
        return this.firstSet.get(key) ?? [];
    }

    public getFollow(key: string): string[] {
        return this.followSet.get(key) ?? [];
    }

    private functionBuildFirstAndFollow(csv: string): void {
        const results = csv.split("\n").splice(1);
        results.forEach((result) => {
            const list = result.split(",");

            const nonTerminal = list[0];

            const firstList = list[1]
                .split(" ")
                .map((s) => grammarToToken(s))
                .filter((e) => e !== "∅");

            if (list[3] === "yes") {
                firstList.push("&epsilon");
            }

            this.firstSet.set(nonTerminal, firstList);
            this.followSet.set(
                nonTerminal,
                list[2]
                    .split(" ")
                    .map((s) => grammarToToken(s))
                    .filter((e) => e !== "∅"),
            );
        });
    }

    private functionBuildTable(csv: string): void {
        const rows = csv.split("\n");

        const headers = rows[0]
            .split(",")
            .slice(1)
            .map((s) => grammarToToken(s));

        const results = rows.slice(1);

        results.forEach((result) => {
            const columns = result.split(",");
            const key = columns[0];

            const t = new Map<string, string[]>();
            columns.splice(1).forEach((c, i) => {
                let rhs = c;
                if (rhs.length > 0) {
                    rhs = rhs.split("→")[1]?.trim();
                }

                let rhsArr = rhs.split(" ");
                if (rhsArr.length === 1 && rhsArr[0] === "") {
                    rhsArr = [];
                }

                t.set(
                    headers[i],
                    rhsArr.map((s) => grammarToToken(s)),
                );
            });

            this.table.set(columns[0], t);
        });
    }
}
