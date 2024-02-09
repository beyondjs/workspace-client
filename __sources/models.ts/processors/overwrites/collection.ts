import {Collection, CollectionSpecs} from "@beyond-js/plm/core";
import {ProcessorOverwrite} from "./item";

export /*bundle*/
class ProcessorOverwrites extends Collection {
    constructor(specs: CollectionSpecs) {
        super('processors-overwrites', ProcessorOverwrite, specs);
    }
}
