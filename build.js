import {join} from "path";
import {writeFile} from "fs/promises";
import * as pages from "./src/pages.js";

const dest = "./docs"
for(let name in pages){
    writeFile(
        join(dest,name+".html"),
        pages[name]
    ).catch(console.error)
}