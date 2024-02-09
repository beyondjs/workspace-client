import {tables, TableSpecs} from "@beyond-js/plm/core";
import {module} from "beyond_context";
import {Bundle} from "../bundles/item";
import {Application} from "../applications/item";
import {ModuleStatics} from "./static/collection";

const specs = <TableSpecs>{};

specs.module = module;
specs.cache = false;

specs.fields = [
    'id', 'name', 'type', 'tu', 'path', 'title', 'description',
    'platforms', 'subpath', 'specifier', 'vspecifier',
    'pathname', 'resource',
    'hmr', 'bundles', 'container', 'errors', 'warnings'
];

specs.properties = {
    bundles: {
        Items: Bundle,
        table: 'bundles',
        identifier: {field: 'id', source: 'bundles'}
    },
    static: {
        Collection: ModuleStatics,
        table: 'modules-static',
        filter: [{field: 'module', source: 'id'}]
    },
    container: {
        Item: Application,
        table: 'applications',
        identifier: [{field: 'id', source: 'container'}]
    }
};

specs.batch = {
    actions: {
        list: 'modules/list',
        data: 'modules/data',
    }
};

specs.indices = {
    id: {
        fields: ['id'],
        primary: true
    }
};

tables.register('modules', specs);