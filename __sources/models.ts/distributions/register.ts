import {tables, TableSpecs} from "@beyond-js/plm/core";
import {module} from "beyond_context";
import {DistributionLauncher} from './launchers/item';

const specs = <TableSpecs>{};

specs.module = module;
specs.cache = false;

specs.fields = [
    'id', 'name', 'local', 'launcher_id', 'ssr', 'port', 'ports', 'ts', 'amd',
    'platform', 'environment', 'compress', 'default', 'npm'
];
specs.properties = {
    launcher: {
        Item: DistributionLauncher,
        table: 'distributions-launcher',
        identifier: [{field: 'id', source: 'launcher_id'}]
    }
};
specs.batch = {
    actions: {
        list: 'distributions/list',
        data: 'distributions/data'
    }
};

specs.indices = {
    id: {
        fields: ['id'],
        primary: true
    }
};

tables.register('applications-distributions', specs);