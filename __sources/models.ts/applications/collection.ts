import {Collection, CollectionSpecs} from "@beyond-js/plm/core";
import {Application} from "./item";

export /*bundle*/
class Applications extends Collection {
    constructor(specs: CollectionSpecs) {
        super('applications', Application, specs);
    }
}