import {tables, TableSpecs} from "@beyond-js/plm/core";
import {module} from "beyond_context";
import {Bundle} from "../../bundles/item";
import {Declaration} from "../../declarations/item";

const specs = <TableSpecs>{};

specs.module = module;
specs.cache = false;

//TODO revisar campo is, si tiene el nombre de los archivos donde se usa deberia tener otro nombre
specs.fields = [
    'id', 'tu', 'is', 'version', 'kind', 'valid', 'specifier', 'declaration',
    'errors', 'warnings', 'module_id', 'bundle_id'
];
specs.properties = {
    bundle: {
        Item: Bundle,
        table: 'bundles',
        identifier: [{field: 'id', source: 'bundle_id'}]
    },
    declaration: {
        Item: Declaration,
        table: 'declarations',
        identifier: [{field: 'id', source: 'declaration'}]
    },
    //TODO agregar propiedad con acceso al file sources:{}
};


//TODO @ftovar crear propiedad de tipo Items a la tabla processor-sources con el campo is como relacion

specs.batch = {
    actions: {
        list: 'processors/dependencies/list',
        data: 'processors/dependencies/data',
    }
};
specs.indices = {
    id: {
        fields: ['id'],
        primary: true
    },
    dependencies: {
        fields: ['processor']
    }
};

tables.register('processors-dependencies', specs);