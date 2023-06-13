import {Collection, CollectionSpecs} from "@beyond-js/plm/core";
import {TemplateProcessorsSource} from "./item";

export /*bundle*/
class TemplateProcessorsSources extends Collection {
    constructor(specs: CollectionSpecs) {
        super('template-processors-sources', TemplateProcessorsSource, specs);
    }
}
