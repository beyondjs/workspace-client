import {Collection, CollectionSpecs} from "@beyond-js/plm/core";
import {Module} from "./item";

export /*bundle*/
class Modules extends Collection {

    constructor(specs: CollectionSpecs) {
        super('modules', Module, specs);
    }

}
