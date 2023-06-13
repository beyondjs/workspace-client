import {tables, TableSpecs} from "@beyond-js/plm/core";
import {module} from "beyond_context";
import {Bundle} from "../item";

const specs = <TableSpecs>{};

specs.module = module;
specs.cache = false;

specs.fields = [
    'id', 'bundle', 'tu', 'module_id'
];
specs.properties = {
    bundle: {
        Item: Bundle,
        table: 'bundles',
        identifier: [{field: 'id', source: 'bundle'}]
    },
};
specs.batch = {
    actions: {
        list: 'bundles/consumers/list',
        data: 'bundles/consumers/data'
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

tables.register('bundles-consumers', specs);
