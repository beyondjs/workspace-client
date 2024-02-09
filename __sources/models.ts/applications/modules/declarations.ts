import { module } from "beyond_context";
import { Events } from "@beyond-js/kernel/core";
import { ItemsProperty } from "@beyond-js/plm/core";
import type { ApplicationModule } from "./item";
import type { Bundle } from "../../bundles/item";

interface IErrors {
    bundle: string;
    errors: [string];
}

export /*bundle*/
class ApplicationModuleDeclarations extends Events {
    readonly #parent: ApplicationModule;

    #errors: [object: IErrors] | [] | string = [];
    get errors() {
        return this.#errors;
    }

    #process: boolean;
    get process() {
        return this.#process;
    }

    constructor(parent: ApplicationModule) {
        super();
        this.#parent = parent;
    }

    #has(type: string) {
        let find = false;
        const bundles = <ItemsProperty>this.#parent.properties.get("bundles");
        bundles.forEach((bundle: Bundle) => [...bundle.processors.keys()].includes(type) && (find = true));
        return find;
    }

    async update() {
        if (!this.#has("ts")) {
            console.warn("the module does not use declarations");
            return;
        }

        this.#errors = [];
        this.#process = true;
        this.trigger("change");

        try {
            const action = "/modules/declarations/update";
            const id = { id: this.#parent.fields.get("id").value };
            this.#errors = await module.execute(action, id);
            return this.#errors;
        } catch (exc) {
            this.#errors = exc.message;
        } finally {
            this.#process = false;
            this.trigger("change");
        }
    }
}
