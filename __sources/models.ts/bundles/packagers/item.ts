import {Item, ItemSpecs, ItemsProperty} from "@beyond-js/plm/core";
import {PackagerCompiler} from "./compilers/item";

export /*bundle*/
class Packager extends Item {
    get id(): string {
        return this.fields.get('id').value;
    }

    get distributionId(): string {
        return this.fields.get('distribution').value;
    }

    get processors(): string {
        return this.fields.get('processors').value;
    }

    get compilers(): Map<string, PackagerCompiler> {
        return <ItemsProperty>this.properties.get('compilers');
    }

    constructor(specs: ItemSpecs) {
        super('bundles-packagers', specs);
    }
}