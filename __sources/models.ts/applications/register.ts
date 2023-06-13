import {tables, TableSpecs} from "@beyond-js/plm/core";
import {module} from "beyond_context";
import {Template} from "../templates/item";
import {ApplicationStatics} from "./static/collection";
import {ApplicationModules} from "./modules/collection";
import {ApplicationDeployment} from "./deployments/item";

const specs = <TableSpecs>{};

specs.cache = false;
specs.module = module;

specs.fields = [
    'id', 'path', 'scope', 'name', 'specifier', 'vspecifier',
    'title', 'description', 'developer', 'version',
    'connect', 'hosts', 'port', 'static', 'modulesPath',
    'errors', 'warnings'
];

specs.properties = {
    template: {
        Item: Template,
        table: 'templates',
        immutable: true,
        identifier: [{field: 'id', source: 'id'}]
    },
    am: {
        Collection: ApplicationModules,
        table: 'applications-modules',
        filter: [{field: 'application', source: 'id'}]
    },
    static: {
        Collection: ApplicationStatics,
        table: 'applications-static',
        filter: [{field: 'application', source: 'id'}]
    },
    deployment: {
        Item: ApplicationDeployment,
        table: 'applications-deployments',
        immutable: true,
        identifier: [{field: 'id', source: 'id'}]
    }
};

specs.batch = {
    actions: {
        list: 'applications/list',
        data: 'applications/data',
    }
};

specs.indices = {
    id: {
        fields: ['id'],
        primary: true
    },
    name: {
        fields: ['name'],
        unique: true
    }
};

tables.register('applications', specs);