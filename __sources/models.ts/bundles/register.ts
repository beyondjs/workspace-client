import {Item, tables, TableSpecs} from "@beyond-js/plm/core";
import {module} from "beyond_context";
import {Packager} from "./packagers/item";
import {Processor} from "../processors/item";
import {Consumers} from "./consumers/collection";
import {ApplicationModule} from "../applications/modules/item";

const specs = <TableSpecs>{};

specs.module = module;
specs.cache = false;

specs.fields = [
    'id', 'name', 'type', 'processors', 'tu',
    'platforms', 'subpath', 'specifier', 'vspecifier',
    'updated', 'destroyed', 'extname', 'pathname', 'route',
    'layout', 'element', 'compiler_processor_activate',
    'errors', 'warnings'
];

specs.properties = {
    processors: {
        Items: Processor,
        table: 'processors',
        identifier: {field: 'id', source: 'processors'}
    },
    packagers: {
        Items: Packager,
        table: 'bundles-packagers',
        identifier: {field: 'id', source: 'processors'}
    },
    consumers: {
        Collection: Consumers,
        table: 'bundles-consumers',
        filter: [{field: 'bundle', source: 'id'}]
    },
    container: {
        tables: ['applications-modules'],
        selector: (item: Item) => {
            const id = item.fields.get('id');
            if (typeof id !== 'object') {
                console.warn('Invalid id value', id);
                return;
            }

            if (!id.assigned) return;

            let amId = id.value.split('//');
            amId = amId.slice(0, amId.length - 1).join('//');

            return {
                Item: ApplicationModule,
                table: 'applications-modules',
                identifier: {id: amId}
            }
        }
    }
};

specs.batch = {
    actions: {
        data: 'bundles/data'
    }
};

specs.indices = {
    id: {
        fields: ['id'],
        primary: true
    }
};

tables.register('bundles', specs);
