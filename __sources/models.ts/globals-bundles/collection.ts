import {Collection, CollectionSpecs} from "@beyond-js/plm/core";
import {GlobalBundle} from "./item";

export /*bundle*/
class GlobalBundles extends Collection {

    constructor(specs: CollectionSpecs) {
        super('global-bundles', GlobalBundle, specs);
    }

}
