import { readFileSync } from "fs";
import { grammarToToken } from "../common/stringHelpers";

export default class ParsingTable {
    table: Map<string, Map<string, string[]>>;

    constructor() {
        const results: any = [];

        this.table = new Map<string, Map<string, string[]>>();
        const csvFile = readFileSync("./src/syntactical_analysis/parsingTable.csv").toString("utf8");

        this.functionBuildTable(csvFile);

    }

    public get(key: string): Map<string, string[]> {

        return this.table.get(key) ?? new Map<string, string[]>;
    }


    private functionBuildTable(csv: string): void {
       const rows = csv.split("\n");

       const headers = rows[0].split(",").slice(1).map((s) => grammarToToken(s));

       const results = rows.slice(1);

       results.forEach((result) => {
            const columns = result.split(",");
            const key = columns[0];

            let t = new Map<string, string[]>();
            columns.splice(1).forEach((c, i) => {
                let rhs = c;
                if(rhs.length > 0){
                    rhs = rhs.split("→")[1]?.trim();
                }

                let rhsArr = rhs.split(" ");
                if(rhsArr.length === 1 && rhsArr[0] === ""){
                    rhsArr = [];
                }
                
                t.set(headers[i], rhsArr.map((s) => grammarToToken(s)));
            })

            this.table.set(columns[0], t);
            
       })
    }
}
