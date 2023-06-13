import {Item, ItemSpecs} from "@beyond-js/plm/core";

export /*bundle*/
class PackagerCompiler extends Item {
    get id(): string {
        return this.fields.get('id').value;
    }

    get diagnostics() {
        const diagnostics = this.fields.get('diagnostics').value;

        return {
            general: diagnostics?.general ?? [],
            files: new Map(diagnostics?.files),
            overwrites: new Map(diagnostics?.overwrites),
            dependencies: new Map(diagnostics?.dependencies)
        };
    }

    constructor(specs: ItemSpecs) {
        super('packagers-compilers', specs);
    }
}