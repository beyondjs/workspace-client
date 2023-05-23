import {Collection, CollectionSpecs} from "@beyond-js/plm/core";
import {ModuleStatic} from "./item";

export /*bundle*/
class ModuleStatics extends Collection {

    constructor(specs: CollectionSpecs) {
        super('modules-static', ModuleStatic, specs);
    }

}
