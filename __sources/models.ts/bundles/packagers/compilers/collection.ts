import {Collection, CollectionSpecs} from "@beyond-js/plm/core";
import {PackagerCompiler} from "./item";

export /*bundle*/
class PackagerCompilers extends Collection {
    constructor(specs: CollectionSpecs) {
        super('packagers-compilers', PackagerCompiler, specs);
    }
}