import {tables, TableSpecs} from "@beyond-js/plm/core";
import {module} from "beyond_context";

const specs = <TableSpecs>{};

specs.module = module;
specs.cache = false;

specs.fields = ['id', 'diagnostics'];

specs.batch = {
    actions: {
        data: 'bundles/packagers/compilers/data'
    }
};

specs.indices = {
    id: {
        fields: ['id'],
        primary: true
    }
};

tables.register('packagers-compilers', specs);