import {Collection, CollectionSpecs} from "@beyond-js/plm/core";
import {TemplateOverwrite} from "./item";

export /*bundle*/
class TemplateOverwrites extends Collection {

    constructor(specs: CollectionSpecs) {
        super('template-overwrites', TemplateOverwrite, specs);
    }

}
