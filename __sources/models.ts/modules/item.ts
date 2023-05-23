import {Item, ItemsProperty, ItemSelectorProperty, ItemSpecs, CollectionProperty} from "@beyond-js/plm/core";
import {module} from "beyond_context";
import {ModuleTexts} from "./texts";
import {ModuleDeclarations} from "./declarations";
import type {Bundle} from "../bundles/item";
import type {Library} from "../libraries/item";
import type {Application} from "../applications/item";
import type {ModuleStatics} from "./static/collection";

interface CreateSpecs {
    filename: string,
    bundle?: string,
    processor?: string,
    type?: 'processor' | 'overwrite' | 'backend'
}

interface BundleSpecs {
    bundles: string,
    name: string,
    route?: string,
    styles?: string,
    layout?: string,
    layoutId?: string
}

interface FieldSpecs {
    title?: string,
    name?: string,
    description?: string,
    hmr?: string,
    transpile?: string
}

interface EditSpecs {
    dirname: string,
    moduleId: string,
    title?: string,
    name?: string,
    description?: string,
    bundle?: string,
    bundles?: { hmr: boolean } | { ts: { transpile: boolean } },
}

export /*bundle*/
class Module extends Item {
    get id(): string {
        return this.fields.get('id').value;
    }

    #name: string;
    get name(): string {
        return this.#name ?? this.fields.get('name').value;
    }

    set name(value: string) {
        if (this.#name === value) return;
        this.#name = value;
    }

    get type(): string {
        return this.fields.get('type').value;
    }

    get subpath(): string {
        return this.fields.get('subpath').value;
    }

    get specifier(): string {
        return this.fields.get('specifier').value;
    }

    get vspecifier(): string {
        return this.fields.get('vspecifier').value;
    }

    get tu(): string {
        return this.fields.get('tu').value;
    }

    get path(): string {
        return this.fields.get('path').value;
    }

    get pathname(): string {
        return this.fields.get('pathname').value;
    }

    get resource(): string {
        return this.fields.get('resource').value;
    }

    get platforms(): [string] {
        return this.fields.get('platforms').value;
    }

    #title: string;
    get title(): string {
        return this.#title ?? this.fields.get('title').value;
    }

    set title(value: string) {
        this.#title = value;
    }

    #description: string;
    get description(): string {
        return this.#description ?? this.fields.get('description').value;
    }

    set description(value: string) {
        if (this.#description === value) return;
        this.#description = value;
    }

    get hmr(): boolean {
        return this.fields.get('hmr').value;
    }

    get errors(): string[] {
        return this.fields.get('errors').value ?? [];
    }

    get warnings(): string[] {
        return this.fields.get('warnings').value ?? [];
    }

    get bundles(): Map<string, Bundle> {
        return <ItemsProperty>this.properties.get('bundles');
    }

    get static(): ModuleStatics {
        const statics = <CollectionProperty>this.properties.get('static');
        return statics && statics.value;
    }

    get container(): Application | Library {
        const container = <ItemSelectorProperty>this.properties.get('container');
        return container && <Application | Library>container.value;
    }

    readonly #texts;
    get texts(): ModuleTexts {
        return this.#texts;
    }

    readonly #declarations;
    get declarations(): ModuleDeclarations {
        return this.#declarations;
    }

    constructor(specs: ItemSpecs) {
        super('modules', specs);

        this.#texts = new ModuleTexts(this);
        this.#declarations = new ModuleDeclarations(this);
        this.#declarations.on('change', () => this.node.trigger('change'));
    }

    /**
     *  Checks if the folder where files going to be located exist.
     */
    checkStatic() {
        const specs = {moduleId: this.id, static: {"path": "./static"}};
        return module.execute('/builder/module/edit', specs);
    }

    installDependencies(dependencies: string[]) {
        return module.execute('/builder/module/install', dependencies);
    }

    saveField(field: FieldSpecs, value: string | boolean) {
        const specs: EditSpecs = {moduleId: this.id, dirname: this.module.path};

        if (field === 'hmr') specs.bundles = {hmr: <boolean>value};
        else if (field === 'transpile') {
            if (!this.haveProcessor()) return;
            specs.bundles = {ts: {transpile: <boolean>value}};
        } else field === 'title' ? specs.title = <string>value : specs.description = <string>value;

        return module.execute('/builder/module/edit', specs);
    }

    save(specs: any) {
        if (!specs.id) specs.id = this.id;
        return module.execute('/builder/module/edit', specs);
    }

    clone(name: string) {
        return module.execute('/builder/module/clone', {
            name: name,
            moduleId: this.id
        });
    }

    delete() {
        if (!this.module.path) {
            console.error('The module not have dirname associate it')
            return;
        }
        return module.execute('/builder/module/delete', {target: this.path});
    }

    createFile(specs: CreateSpecs) {
        let id = specs.type === 'backend' ? `${this.id}` : `${this.id}//${specs.bundle}//${specs.processor}`;
        if (specs.type && specs.type === 'overwrite') {
            const split = this.id.split('//');
            id = `${split[1]}//${split[2]}//${specs.bundle}`;
        }

        return module.execute('/sources/create', {
            id: id,
            type: specs.type ?? 'processor',
            filename: specs.filename,
        });
    }

    addBundle(params: BundleSpecs) {
        const specs = {moduleId: this.id, ...params};
        return module.execute('/builder/module/addBundle', specs);
    }
}
