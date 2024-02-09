import {tables, TableSpecs} from "@beyond-js/plm/core";
import {module} from "beyond_context";
import {ProcessorSources} from "./sources/collection";
import {ProcessorOverwrites} from "./overwrites/collection";
import {ProcessorDependencies} from "./dependencies/collection";

const specs = <TableSpecs>{};

specs.module = module;
specs.cache = false;

specs.fields = [
    'id', 'name', 'path', 'updated', 'destroyed', 'multilanguage', 'errors', 'warnings'
];

specs.properties = {
    sources: {
        Collection: ProcessorSources,
        table: 'processors-sources',
        filter: [{field: 'processor', source: 'id'}]
    },
    overwrites: {
        Collection: ProcessorOverwrites,
        table: 'processors-overwrites',
        filter: [{field: 'processor', source: 'id'}]
    },
    dependencies: {
        Collection: ProcessorDependencies,
        table: 'processors-dependencies',
        filter: [{field: 'processor', source: 'id'}]
    }
};

specs.batch = {
    actions: {
        data: 'processors/data',
    }
};

specs.indices = {
    id: {
        fields: ['id'],
        primary: true
    }
};

tables.register('processors', specs);
