import {Item, ItemSpecs} from "@beyond-js/plm/core";
import {module} from "beyond_context";
import {PortsSpecs} from "../interfaces/ports";

export /*bundle*/
class DistributionLauncher extends Item {
    get id(): string {
        return this.fields.get('id').value;
    }

    get status(): string {
        return this.fields.get('status').value;
    }

    get pid() {
        return this.fields.get('pid').value;
    }

    get path(): string {
        return this.fields.get('path').value;
    }

    get port() {
        return this.fields.get('port').value;
    }

    get ports(): PortsSpecs {
        return this.fields.get('ports').value;
    }

    get errors(): string[] {
        return this.fields.get('errors').value ?? [];
    }

    constructor(specs: ItemSpecs) {
        super('distributions-launcher', specs);
    }

    start() {
        return module.execute('launchers/start', {id: this.id});
    }

    stop() {
        return module.execute('launchers/stop', {id: this.id});
    }

    restart() {
        return module.execute('launchers/restart', {id: this.id});
    }
}