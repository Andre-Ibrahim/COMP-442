import { readFileSync } from "fs";
import * as csv from "csv-parser";

export default class ParsingTable {
    table: Map<string, Map<string, string>>;

    constructor() {
        const results: any = [];

        this.table = new Map<string, Map<string, string>>();
        const csvFile = readFileSync("./src/syntactical_analysis/parsingTable.csv").toString("utf8");

        this.functionBuildTable(csvFile);

    }

    public async get(key: string): Promise<Map<string, string>> {

        return this.table.get(key) ?? new Map<string, string>;
    }


    private functionBuildTable(csv: string): void {
       const rows = csv.split("\n");

       const headers = rows[0].split(",").slice(1);

       const results = rows.slice(1);

       results.forEach((result) => {
            const columns = result.split(",");
            const key = columns[0];

            let t = new Map<string, string>();
            columns.splice(1).forEach((c, i) => {
                t.set(headers[i], c);
            })

            this.table.set(columns[0], t);
            
       })
    }
}
