import {Item, ItemSpecs} from "@beyond-js/plm/core";
import {DistributionLauncher} from "./launchers/item";
import {PortsSpecs} from "./interfaces/ports";
import {module} from "beyond_context";
import {IPortResponse} from "./interfaces/ports-response";

interface NpmSpecs {
    platforms?: {
        web: boolean
        android: boolean
        ios: boolean
        backend: boolean
        node: boolean
        ssr: boolean
        'web.ssr': boolean
    }
}

export /*bundle*/
class ApplicationDistribution extends Item {
    #id;
    get id(): string {
        return this.#id ?? this.fields.get('id').value;
    }

    #name;
    get name(): string {
        return this.#name ?? this.fields.get('name').value;
    }

    #local;
    get local() {
        return this.#local ?? this.fields.get('local').value;
    }

    #ssr;
    get ssr() {
        return this.#ssr ?? this.fields.get('ssr').value;
    }

    #port;
    get port() {
        return this.#port ?? this.fields.get('port').value;
    }

    #ports;
    get ports(): PortsSpecs {
        return this.#ports ?? this.fields.get('ports').value;
    }

    #amd;
    get amd() {
        return this.#amd ?? this.fields.get('amd').value;
    }

    #ts;
    get ts() {
        return this.#ts ?? this.fields.get('ts').value;
    }

    #platform;
    get platform() {
        return this.#platform ?? this.fields.get('platform').value;
    }

    #compress;
    get compress() {
        return this.#compress ?? this.fields.get('compress').value;
    }

    #environment;
    get environment() {
        return this.#environment ?? this.fields.get('environment').value;
    }

    #default;
    get default() {
        return this.#default ?? this.fields.get('default').value;
    }

    #npm;
    get npm(): NpmSpecs {
        return this.#npm ?? this.fields.get('npm').value;
    }

    #minify;
    get minify() {
        return this.#minify ?? this.fields.get('minify').value;
    }

    #bundles;
    get bundles() {
        return this.#bundles ?? this.fields.get('bundles').value;
    }

    get launcher(): DistributionLauncher {
        const launcher = <ItemProperty>this.properties.get('launcher');
        return launcher && <DistributionLauncher>launcher.value;
    }

    #processed: boolean;
    #processing: boolean;
    get processing() {
        return this.#processing;
    }

    get values() {
        return {
            id: this.id,
            name: this.name,
            local: this.local,
            ssr: this.ssr,
            port: this.port,
            ports: this.ports ?? {},
            ts: this.ts,
            amd: this.amd,
            minify: {}, //todo: obtener
            platform: this.platform,
            environment: this.environment,
            compress: this.compress,
            default: this.default,
        }
    }

    constructor(specs: ItemSpecs) {
        super('applications-distributions', specs);
    }

    async checkPort(port: number) {
        if (!port) throw new Error('port to check is required');
        this.#processing = true;
        try {
            const path = 'builder/project/checkPort';
            const response = <IPortResponse>(await module.execute(path, {port: port}));
            this.#processing = false;
            return response.valid;

        } catch (error) {
            this.#processing = false;
            this.#processed = true;

        }
    }

    validate(values: any) {
        values.ports = {
            http: isNaN(parseInt(values.http)) ? undefined : parseInt(values.http),
            inspect: isNaN(parseInt(values.inspect)) ? undefined : parseInt(values.inspect),
            bundles: isNaN(parseInt(values.bundles)) ? undefined : parseInt(values.bundles)
        };

        values.minify = {html: values.html, css: values.css, js: values.js};
        values.bundles = {mode: values.mode};

        return values;
    }

    setValues(values: any) {
        const newValues = this.validate(values);

        this.#id = newValues.id;
        this.#platform = newValues.platform;
        this.#name = newValues.name;
        this.#local = newValues.local;
        this.#ssr = newValues.ssr;
        this.#port = newValues.port;
        this.#ports = newValues.ports;
        this.#amd = newValues.amd;
        this.#ts = newValues.ts;
        this.#compress = newValues.compress;
        this.#environment = newValues.environment;
        this.#default = newValues.default;
        this.#minify = newValues.minify;
        this.#bundles = newValues.bundles;
    }
}
