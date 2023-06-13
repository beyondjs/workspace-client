import {module} from "beyond_context";
import {tables, TableSpecs} from "@beyond-js/plm/core";
import {PackagerCompiler} from "./compilers/item";

const specs = <TableSpecs>{};

specs.module = module;
specs.cache = false;

specs.fields = [
    'id', 'distribution', 'processors', 'pkg_processor_ids'
];
specs.properties = {
    compilers: {
        Items: PackagerCompiler,
        table: 'packagers-compilers',
        identifier: {field: 'id', source: 'pkg_processor_ids'}
    }
};
specs.batch = {
    actions: {
        list: 'bundles/packagers/list',
        data: 'bundles/packagers/data'
    }
};

specs.indices = {
    id: {
        fields: ['id'],
        primary: true
    },
    bundles: {
        fields: ['bundle'],
        batches: {bundle: ['list']}
    }
};

tables.register('bundles-packagers', specs);
