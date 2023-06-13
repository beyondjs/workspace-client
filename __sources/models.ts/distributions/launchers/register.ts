import {tables, TableSpecs} from '@beyond-js/plm/core';
import {module} from 'beyond_context';

const specs = <TableSpecs>{};

specs.module = module;
specs.cache = false;

specs.fields = [
    'id', 'status', 'pid', 'path', 'port', 'ports', 'errors',
];

specs.batch = {
    actions: {
        data: 'launchers/data',
    },
};

specs.indices = {
    id: {
        fields: ['id'],
        primary: true,
    }
};

tables.register('distributions-launcher', specs);
