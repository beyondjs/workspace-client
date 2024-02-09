import {Collection, CollectionSpecs} from "@beyond-js/plm/core";
import {Packager} from "./item";

export /*bundle*/
class Packagers extends Collection {
    constructor(specs: CollectionSpecs) {
        super('bundles-packagers', Packager, specs);
    }
}