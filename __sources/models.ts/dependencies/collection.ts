import {Collection, CollectionSpecs} from "@beyond-js/plm/core";
import {TransversalDependency} from "./item";

export /*bundle*/
class TransversalDependencies extends Collection {
    constructor(specs: CollectionSpecs) {
        super('transversal-dependencies', TransversalDependency, specs);
    }
}
