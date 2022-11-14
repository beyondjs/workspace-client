define(["exports", "module", "@beyond-js/kernel@0.1.1/bundle", "@beyond-js/plm@0.0.1/core", "@beyond-js/kernel@0.1.1/core", "@beyond-js/backend@0.1.0/client", "@beyond-js/inspect@0.0.1/reactive-model"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.__beyond_pkg = _exports.TransversalDependency = _exports.TransversalDependencies = _exports.TemplateProcessorsSources = _exports.TemplateProcessorsSource = _exports.TemplateProcessor = _exports.TemplateOverwrites = _exports.TemplateOverwrite = _exports.TemplateGlobals = _exports.TemplateGlobalSources = _exports.TemplateGlobalSource = _exports.TemplateGlobal = _exports.TemplateApplicationsSources = _exports.TemplateApplicationsSource = _exports.TemplateApplication = _exports.Template = _exports.RunTimeManager = _exports.RunTimeError = _exports.Realtime = _exports.ProcessorSources = _exports.ProcessorSource = _exports.ProcessorOverwrites = _exports.ProcessorOverwrite = _exports.ProcessorDependency = _exports.ProcessorDependencies = _exports.Processor = _exports.Packagers = _exports.PackagerCompilers = _exports.PackagerCompiler = _exports.Packager = _exports.Modules = _exports.ModuleTexts = _exports.ModuleStatics = _exports.ModuleStatic = _exports.ModuleDeclarations = _exports.Module = _exports.GlobalBundles = _exports.GlobalBundle = _exports.DistributionLauncher = _exports.Declarations = _exports.Declaration = _exports.Dashboard = _exports.Consumers = _exports.Consumer = _exports.BundleDependency = _exports.BundleDependencies = _exports.Bundle = _exports.Applications = _exports.ApplicationStatics = _exports.ApplicationStatic = _exports.ApplicationModules = _exports.ApplicationModule = _exports.ApplicationDistributions = _exports.ApplicationDistribution = _exports.ApplicationDeployments = _exports.ApplicationDeployment = _exports.Application = void 0;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/plm", "0.0.1"], ["@beyond-js/inspect", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/inspect@0.0.1/models",
      "multibundle": true
    },
    "type": "ts"
  }, _amd_module.uri).package();

  ;

  __pkg.dependencies.update([['@beyond-js/plm/core', dependency_1], ['@beyond-js/kernel/core', dependency_2], ['@beyond-js/backend/client', dependency_3], ['@beyond-js/inspect/reactive-model', dependency_4]]);

  const {
    module
  } = __pkg.bundle;
  const ims = new Map();
  /*****************************************
  INTERNAL MODULE: ./applications/collection
  *****************************************/

  ims.set('./applications/collection', {
    hash: 3058693667,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Applications = void 0;

      var _core = require("@beyond-js/plm/core");

      var _item = require("./item");
      /*bundle*/


      class Applications extends _core.Collection {
        constructor(specs) {
          super('applications', _item.Application, specs);
        }

      }

      exports.Applications = Applications;
    }
  });
  /*****************************************************
  INTERNAL MODULE: ./applications/deployments/collection
  *****************************************************/

  ims.set('./applications/deployments/collection', {
    hash: 2342795826,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ApplicationDeployments = void 0;

      var _core = require("@beyond-js/plm/core");

      var _item = require("./item");
      /*bundle*/


      class ApplicationDeployments extends _core.Collection {
        constructor(specs) {
          super('applications-deployments', _item.ApplicationDeployment, specs);
        }

      }

      exports.ApplicationDeployments = ApplicationDeployments;
    }
  });
  /***********************************************
  INTERNAL MODULE: ./applications/deployments/item
  ***********************************************/

  ims.set('./applications/deployments/item', {
    hash: 154172276,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ApplicationDeployment = void 0;

      var _core = require("@beyond-js/plm/core");

      var _beyond_context = require("beyond_context");
      /*bundle*/


      class ApplicationDeployment extends _core.Item {
        get id() {
          return this.fields.get('id').value;
        }

        get valid() {
          return this.fields.get('valid').value;
        }

        get errors() {
          return this.fields.get('errors').value ?? [];
        }

        get distributions() {
          return this.properties.get('distributions');
        }

        constructor(specs) {
          super('applications-deployments', specs);
        }

        async addDistribution(params) {
          const specs = {
            applicationId: this.id,
            distribution: { ...params
            }
          };

          try {
            return _beyond_context.module.execute('builder/project/setDistribution', specs);
          } catch (e) {
            console.error(e);
          }
        }

      }

      exports.ApplicationDeployment = ApplicationDeployment;
    }
  });
  /***************************************************
  INTERNAL MODULE: ./applications/deployments/register
  ***************************************************/

  ims.set('./applications/deployments/register', {
    hash: 3268802420,
    creator: function (require, exports) {
      "use strict";

      var _beyond_context = require("beyond_context");

      var _core = require("@beyond-js/plm/core");

      var _item = require("../../distributions/item");

      const specs = {};
      specs.module = _beyond_context.module;
      specs.cache = false;
      specs.fields = ['id', 'valid', 'errors', 'distributions'];
      specs.properties = {
        distributions: {
          Items: _item.ApplicationDistribution,
          table: 'applications-distributions',
          identifier: {
            field: 'id',
            source: 'distributions'
          }
        }
      };
      specs.batch = {
        actions: {
          list: 'applications/deployments/list',
          data: 'applications/deployments/data'
        }
      };
      specs.indices = {
        id: {
          fields: ['id'],
          primary: true
        }
      };

      _core.tables.register('applications-deployments', specs);
    }
  });
  /***********************************
  INTERNAL MODULE: ./applications/item
  ***********************************/

  ims.set('./applications/item', {
    hash: 1988807931,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Application = void 0;

      var _beyond_context = require("beyond_context");

      var _file = require("../file/file");

      var _process = require("./process");
      /*bundle*/


      class Application extends _file.File {
        get id() {
          return this.fields.get('id').value;
        }

        get path() {
          return this.fields.get('path').value;
        }

        get scope() {
          return this.fields.get('scope').value;
        }

        get name() {
          return this.fields.get('name').value;
        }

        get specifier() {
          return this.fields.get('specifier').value;
        }

        get vspecifier() {
          return this.fields.get('vspecifier').value;
        }

        get title() {
          return this.fields.get('title').value;
        }

        get description() {
          return this.fields.get('description').value;
        }

        get developer() {
          return this.fields.get('developer').value;
        }

        get version() {
          return this.fields.get('version').value;
        }

        get connect() {
          return this.fields.get('connect').value;
        }

        get hosts() {
          return this.fields.get('hosts').value;
        }

        get port() {
          return this.fields.get('port').value;
        }

        get modulesPath() {
          return this.fields.get('modulesPath').value;
        }

        get errors() {
          return this.fields.get('errors').value ?? [];
        }

        get warnings() {
          return this.fields.get('warnings').value ?? [];
        }

        get am() {
          const am = this.properties.get('am');
          return am && am.value;
        }

        get template() {
          const template = this.properties.get('template');
          return template && template.value;
        }

        get deployment() {
          const deployment = this.properties.get('deployment');
          return deployment && deployment.value;
        }

        get static() {
          const statics = this.properties.get('static');
          return statics && statics.value;
        }

        #process;

        get process() {
          return this.#process;
        }

        get url() {
          return this.port ? `http://localhost:${this.port}` : undefined;
        }

        triggerEvent = (event = 'change') => this.node.trigger(event);

        constructor(specs) {
          super('applications', specs);
          this.#process = new _process.ApplicationProcess(this);
          this.#process.bind('change', this.triggerEvent);
        }

        async checkStatic() {
          try {
            const specs = {
              applicationId: this.id,
              static: {
                "path": "./static"
              }
            };
            await _beyond_context.module.execute('/builder/project/checkStatic', specs);
            this.triggerEvent();
          } catch (e) {
            console.error('Error:', e);
          }
        }

        createBackend() {
          return _beyond_context.module.execute('/builder/project/backend', {
            applicationId: this.id
          });
        }

        async edit(specs) {
          try {
            specs = { ...specs,
              applicationId: this.id
            };
            await _beyond_context.module.execute('/builder/project/edit', specs);
            this.triggerEvent();
          } catch (e) {
            console.error('Error:', e);
          }
        }

        routes() {
          const routes = [];
          this.am && this.am.items.forEach(am => am.bundles.forEach(bundle => bundle.type === 'page' && routes.push(bundle.route)));
          return routes;
        }

      }

      exports.Application = Application;
    }
  });
  /*********************************************
  INTERNAL MODULE: ./applications/modules/bundle
  *********************************************/

  ims.set('./applications/modules/bundle', {
    hash: 1126817507,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ApplicationModuleBundle = void 0;

      class ApplicationModuleBundle {
        #module;
        #bundle;
        /**
         * TODO: @julio check, the bundles are not being treat as a modules now.
         */

        get id() {
          return `${this.#module.id}`;
        }

        get type() {
          return this.#bundle.name;
        }

        get moduleId() {
          return this.#module.id;
        }

        get module() {
          return this.#module;
        }

        get hasTxt() {
          return this.#module.bundles.has(`${this.#module.id}//txt`);
        }

        get name() {
          return this.#module.name;
        }

        get description() {
          return this.#module.description;
        }

        constructor(module, bundle) {
          this.#module = module;
          this.#bundle = bundle;
        }

      }

      exports.ApplicationModuleBundle = ApplicationModuleBundle;
    }
  });
  /*************************************************
  INTERNAL MODULE: ./applications/modules/collection
  *************************************************/

  ims.set('./applications/modules/collection', {
    hash: 727053451,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ApplicationModules = void 0;

      var _core = require("@beyond-js/plm/core");

      var _item = require("./item");
      /*bundle*/


      class ApplicationModules extends _core.Collection {
        constructor(specs) {
          super('applications-modules', _item.ApplicationModule, specs);
          this.counters.register('all');
        }

        get elements() {
          if (!this.tree.landed) return [];
          const output = [];
          this.items.forEach(item => {
            output.push(item);
          });
          return output;
        }
        /*
         * Filter the elements by container and bundle defined.
         *
         * @param filter
         * @param bundle
         * @param text
         * @returns {[]|void}
         */


        getItems({
          container = 'application',
          bundle = undefined,
          text = ''
        }) {
          //(container: string = 'application', bundle: undefined | string = undefined, text: string = '') {
          // this function is used if a bundle container is active
          if (container === 'all' && !text) return this.elements; // first we check if is required all containers

          return this.elements.filter(item => {
            //TODO validar cuando no se carga el modulo recien creado
            if (!item.landed) return;
            if (!item.id) console.warn('item sin id: ', item);
            const isApp = ['application', 'all'].includes(container) && !item.id?.includes('library');
            const isLibrary = ['library', 'all'].includes(container);
            const textSearch = item.id?.includes(text) || item?.module?.name?.includes(text);

            if (![undefined, 'all'].includes(bundle) && (isApp || isLibrary)) {
              if (item?.type.includes('widget')) {
                const widget = item.getBundle('widget');
                return widget.type === bundle && textSearch;
              }

              return item.type?.includes(bundle) && textSearch;
            }

            return textSearch && (isApp || isLibrary);
          });
        }

      }

      exports.ApplicationModules = ApplicationModules;
    }
  });
  /*******************************************
  INTERNAL MODULE: ./applications/modules/item
  *******************************************/

  ims.set('./applications/modules/item', {
    hash: 3345235781,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ApplicationModule = void 0;

      var _core = require("@beyond-js/plm/core");

      var _beyond_context = require("beyond_context");
      /*bundle*/

      /**
       * TODO: The application property is actually undefined.
       * - Load the application property
       * - Set the name of the module checking if the module has one
       *  and if it does not have, return the module.id without the
       *  application id section
       */


      class ApplicationModule extends _core.Item {
        get id() {
          return this.fields.get('id').value;
        }

        get application() {
          const application = this.properties.get('application');
          return application && application.value;
        }

        get module() {
          const module = this.properties.get('module');
          return module && module.value;
        }

        get bundles() {
          return this.properties.get('bundles');
        }
        /*
         * Module shortcuts
         */


        get name() {
          const {
            module
          } = this;
          return module?.name;
        }

        set name(value) {
          this.module && (this.module.name = value);
        }

        get description() {
          const {
            module
          } = this;
          return module?.description;
        }

        set description(value) {
          this.module && (this.module.description = value);
        }

        get route() {
          const bundles = this.properties.get('bundles');
          const widget = bundles?.get(`${this.id}//widget`);
          return widget?.route;
        }
        /**
         * Metodos migrados desde modulo
         */


        get type() {
          return this.bundles ? [...this.bundles.values()].map(bundle => bundle.name) : undefined;
        }

        get __CLASS__() {
          return 'applications-modules'.toLowerCase();
        }

        get processorsNames() {
          const processors = [];
          this.bundles?.forEach(bundle => {
            bundle.processors.forEach(processor => {
              if (!processors.includes(processor.name)) processors.push(processor.name);
            });
          });
          return [...processors];
        }

        constructor(specs) {
          super('applications-modules', specs);
        }
        /**
         * Validate that the bundles have the requested processor
         * @param processor
         * @deprecated
         */


        haveProcessor(processor = 'ts') {
          let find = false;
          this.bundles.forEach(bundle => bundle.hasProcessor(processor) ? find = true : null);
          return find;
        }

        getBundle(name) {
          let bundle = undefined;
          this.bundles.forEach(item => {
            if (item.name === name) bundle = item;
          });
          return bundle;
        }

        saveField(field, value) {
          const specs = {
            moduleId: this.id,
            dirname: this.module.path
          };
          if (field === 'hmr') specs.bundles = {
            hmr: value
          };else if (field === 'transpile') {
            if (!this.haveProcessor()) return;
            specs.bundles = {
              ts: {
                transpile: value
              }
            };
          } else field === 'title' ? specs.title = value : specs.description = value;
          return _beyond_context.module.execute('/builder/module/edit', specs);
        }

        clone(name) {
          return _beyond_context.module.execute('/builder/module/clone', {
            name: name,
            moduleId: this.id
          });
        }

        delete() {
          if (!this.module.path) {
            console.error('The module not have dirname associate it');
            return;
          }

          return _beyond_context.module.execute('/builder/module/delete', {
            target: this.module.path
          });
        }

        createFile(specs) {
          let id = specs.type === 'backend' ? `${this.id}` : `${this.id}//${specs.bundle}//${specs.processor}`;

          if (specs.type && specs.type === 'overwrite') {
            const split = this.id.split('//');
            id = `${split[1]}//${split[2]}//${specs.bundle}`;
          }

          return _beyond_context.module.execute('/sources/create', {
            id: id,
            type: specs.type ?? 'processor',
            filename: specs.filename
          });
        }

        addBundle(params) {
          const specs = {
            moduleId: this.id,
            ...params
          };
          return _beyond_context.module.execute('/builder/module/addBundle', specs);
        }

      }

      exports.ApplicationModule = ApplicationModule;
    }
  });
  /***********************************************
  INTERNAL MODULE: ./applications/modules/register
  ***********************************************/

  ims.set('./applications/modules/register', {
    hash: 2896637904,
    creator: function (require, exports) {
      "use strict";

      var _core = require("@beyond-js/plm/core");

      var _beyond_context = require("beyond_context");

      var _item = require("../item");

      var _item2 = require("../../modules/item");

      var _item3 = require("../../bundles/item");

      const specs = {};
      specs.module = _beyond_context.module;
      specs.cache = false;
      specs.fields = ['id', 'application', 'module', 'bundles'];
      specs.properties = {
        application: {
          Item: _item.Application,
          table: 'application',
          identifier: [{
            field: 'id',
            source: 'application'
          }]
        },
        module: {
          Item: _item2.Module,
          table: 'modules',
          identifier: [{
            field: 'id',
            source: 'module'
          }]
        },
        bundles: {
          Items: _item3.Bundle,
          table: 'bundles',
          identifier: {
            field: 'id',
            source: 'bundles'
          }
        }
      };
      specs.batch = {
        actions: {
          list: 'applications/modules/list',
          data: 'applications/modules/data',
          count: 'applications/modules/count'
        }
      };
      specs.indices = {
        id: {
          fields: ['id'],
          primary: true
        },
        applications: {
          fields: ['application'],
          batches: {
            application: ['list', 'count']
          }
        }
      };

      _core.tables.register('applications-modules', specs);
    }
  });
  /**************************************
  INTERNAL MODULE: ./applications/process
  **************************************/

  ims.set('./applications/process', {
    hash: 953834266,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ApplicationProcess = void 0;

      var _core = require("@beyond-js/kernel/core");

      var _beyond_context = require("beyond_context");

      var _client = require("@beyond-js/backend/client");

      class ApplicationProcess extends _core.Events {
        #application;
        #messages = [];

        get messages() {
          return this.#messages;
        }

        #errors = [];

        get errors() {
          return this.#errors;
        }

        #processing;

        get processing() {
          return this.#processing;
        }

        #processed;

        get processed() {
          return this.#processed;
        }
        /**
         * @param application {object} The application
         */


        constructor(application) {
          super();
          this.#application = application;
        }

        onMessage = message => {
          if (!['process'].includes(message.type)) return;

          if (message.processed) {
            this.#processed = true;
            this.#processing = false;
            this.trigger("change");
            return;
          }

          this.#messages.push(message);
          message.error && this.#errors.push(message);
          this.trigger("change");
        };
        #prepared = false;

        async prepare() {
          if (this.#prepared) return;
          this.#prepared = true;

          try {
            const backend = await _client.backends.get("@beyond-js/inspect");
            const socket = await backend.socket;
            socket.on(`project-process:${this.#application.id}`, this.onMessage);
          } catch (exc) {
            console.error(exc.stack);
          }
        }

        async run(id, actions) {
          if (this.#processing) return;

          if (!id) {
            console.warn('Parameter id is required');
            return;
          }

          if (!actions.build && !actions.declarations) {
            console.warn('No actions to process');
            return;
          }

          this.clean();
          this.#processing = true;
          this.trigger("change");
          const specs = Object.assign({
            application: this.#application.id,
            distribution: id
          }, actions);

          try {
            await this.prepare();
            await _beyond_context.module.execute("applications/process", specs);
          } catch (exc) {
            console.error(exc.message);
            this.#processed = this.#processing = false;
            this.trigger("change");
          }
        }

        clean() {
          this.#errors = [];
          this.#messages = [];
          this.#processed = false;
          this.#processing = false;
          this.trigger("change");
        }

      }

      exports.ApplicationProcess = ApplicationProcess;
    }
  });
  /***************************************
  INTERNAL MODULE: ./applications/register
  ***************************************/

  ims.set('./applications/register', {
    hash: 3799092286,
    creator: function (require, exports) {
      "use strict";

      var _core = require("@beyond-js/plm/core");

      var _beyond_context = require("beyond_context");

      var _item = require("../templates/item");

      var _collection = require("./static/collection");

      var _collection2 = require("./modules/collection");

      var _item2 = require("./deployments/item");

      const specs = {};
      specs.cache = false;
      specs.module = _beyond_context.module;
      specs.fields = ['id', 'path', 'scope', 'name', 'specifier', 'vspecifier', 'title', 'description', 'developer', 'version', 'connect', 'hosts', 'port', 'static', 'modulesPath', 'errors', 'warnings'];
      specs.properties = {
        template: {
          Item: _item.Template,
          table: 'templates',
          immutable: true,
          identifier: [{
            field: 'id',
            source: 'id'
          }]
        },
        am: {
          Collection: _collection2.ApplicationModules,
          table: 'applications-modules',
          filter: [{
            field: 'application',
            source: 'id'
          }]
        },
        static: {
          Collection: _collection.ApplicationStatics,
          table: 'applications-static',
          filter: [{
            field: 'application',
            source: 'id'
          }]
        },
        deployment: {
          Item: _item2.ApplicationDeployment,
          table: 'applications-deployments',
          immutable: true,
          identifier: [{
            field: 'id',
            source: 'id'
          }]
        }
      };
      specs.batch = {
        actions: {
          list: 'applications/list',
          data: 'applications/data'
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

      _core.tables.register('applications', specs);
    }
  });
  /************************************************
  INTERNAL MODULE: ./applications/static/collection
  ************************************************/

  ims.set('./applications/static/collection', {
    hash: 734281797,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ApplicationStatics = void 0;

      var _core = require("@beyond-js/plm/core");

      var _item = require("./item");
      /*bundle*/


      class ApplicationStatics extends _core.Collection {
        constructor(specs) {
          super('applications-static', _item.ApplicationStatic, specs);
        }

      }

      exports.ApplicationStatics = ApplicationStatics;
    }
  });
  /******************************************
  INTERNAL MODULE: ./applications/static/item
  ******************************************/

  ims.set('./applications/static/item', {
    hash: 1491783078,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ApplicationStatic = void 0;

      var _source = require("../../sources/source");
      /*bundle*/


      class ApplicationStatic extends _source.Source {
        get id() {
          return this.fields.get('id').value;
        }

        get file() {
          return this.fields.get('file').value;
        }

        get filename() {
          return this.fields.get('filename').value;
        }

        get dirname() {
          return this.fields.get('dirname').value;
        }

        get basename() {
          return this.fields.get('basename').value;
        }

        get relative() {
          return this.fields.get('relative').value;
        }

        get extname() {
          return this.fields.get('extname').value;
        }

        get pathname() {
          return this.fields.get('pathname').value;
        }

        constructor(specs) {
          super('applications-static', specs);
        }

      }

      exports.ApplicationStatic = ApplicationStatic;
    }
  });
  /**********************************************
  INTERNAL MODULE: ./applications/static/register
  **********************************************/

  ims.set('./applications/static/register', {
    hash: 3592566835,
    creator: function (require, exports) {
      "use strict";

      var _core = require("@beyond-js/plm/core");

      var _beyond_context = require("beyond_context");

      const specs = {};
      specs.module = _beyond_context.module;
      specs.cache = false;
      specs.fields = ['id', 'file', 'filename', 'dirname', 'basename', 'extname', 'relative', 'pathname'];
      specs.batch = {
        actions: {
          list: 'applications/static/list',
          data: 'applications/static/data'
        }
      };
      specs.indices = {
        id: {
          fields: ['id'],
          primary: true
        },
        applications: {
          fields: ['application']
        }
      };

      _core.tables.register('applications-static', specs);
    }
  });
  /**********************************************
  INTERNAL MODULE: ./bundles/consumers/collection
  **********************************************/

  ims.set('./bundles/consumers/collection', {
    hash: 3417578129,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Consumers = void 0;

      var _core = require("@beyond-js/plm/core");

      var _item = require("./item");
      /*bundle*/


      class Consumers extends _core.Collection {
        constructor(specs) {
          super('bundles-consumers', _item.Consumer, specs);
        }

      }

      exports.Consumers = Consumers;
    }
  });
  /****************************************
  INTERNAL MODULE: ./bundles/consumers/item
  ****************************************/

  ims.set('./bundles/consumers/item', {
    hash: 2002988497,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Consumer = void 0;

      var _core = require("@beyond-js/plm/core");
      /*bundle*/


      class Consumer extends _core.Item {
        get id() {
          return this.fields.get('id').value;
        }

        get bundle() {
          const bundle = this.properties.get('bundle');
          return bundle && bundle.value;
        }

        get moduleId() {
          return this.fields.get('module_id').value;
        }

        get bundleId() {
          return this.fields.get('bundle').value;
        }

        get tu() {
          return this.fields.get('tu').value;
        }

        constructor(specs) {
          super('bundles-consumers', specs);
        }

      }

      exports.Consumer = Consumer;
    }
  });
  /********************************************
  INTERNAL MODULE: ./bundles/consumers/register
  ********************************************/

  ims.set('./bundles/consumers/register', {
    hash: 1281685461,
    creator: function (require, exports) {
      "use strict";

      var _core = require("@beyond-js/plm/core");

      var _beyond_context = require("beyond_context");

      var _item = require("../item");

      const specs = {};
      specs.module = _beyond_context.module;
      specs.cache = false;
      specs.fields = ['id', 'bundle', 'tu', 'module_id'];
      specs.properties = {
        bundle: {
          Item: _item.Bundle,
          table: 'bundles',
          identifier: [{
            field: 'id',
            source: 'bundle'
          }]
        }
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
          batches: {
            bundle: ['list']
          }
        }
      };

      _core.tables.register('bundles-consumers', specs);
    }
  });
  /*************************************************
  INTERNAL MODULE: ./bundles/dependencies/collection
  *************************************************/

  ims.set('./bundles/dependencies/collection', {
    hash: 2799172930,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.BundleDependencies = void 0;

      var _core = require("@beyond-js/plm/core");

      var _item = require("./item");
      /*bundle*/


      class BundleDependencies extends _core.Collection {
        constructor(specs) {
          super('bundle-dependencies', _item.BundleDependency, specs);
        }

      }

      exports.BundleDependencies = BundleDependencies;
    }
  });
  /*******************************************
  INTERNAL MODULE: ./bundles/dependencies/item
  *******************************************/

  ims.set('./bundles/dependencies/item', {
    hash: 1481271786,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.BundleDependency = void 0;

      var _core = require("@beyond-js/plm/core");
      /*bundle*/


      class BundleDependency extends _core.Item {
        get id() {
          return this.fields.get('id').value;
        }

        constructor(specs) {
          super('bundle-dependencies', specs);
        }

      }

      exports.BundleDependency = BundleDependency;
    }
  });
  /***********************************************
  INTERNAL MODULE: ./bundles/dependencies/register
  ***********************************************/

  ims.set('./bundles/dependencies/register', {
    hash: 720646381,
    creator: function (require, exports) {
      "use strict";

      var _core = require("@beyond-js/plm/core");

      var _beyond_context = require("beyond_context");

      const specs = {};
      specs.module = _beyond_context.module;
      specs.cache = false;
      specs.fields = ['id'];
      specs.batch = {
        actions: {
          list: 'bundles/dependencies/list',
          data: 'bundles/dependencies/data'
        }
      };
      specs.indices = {
        id: {
          fields: ['id'],
          primary: true
        }
      };

      _core.tables.register('bundle-dependencies', specs);
    }
  });
  /******************************
  INTERNAL MODULE: ./bundles/item
  ******************************/

  ims.set('./bundles/item', {
    hash: 3736331847,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Bundle = void 0;

      var _core = require("@beyond-js/plm/core");

      var _beyond_context = require("beyond_context");
      /*bundle*/


      class Bundle extends _core.Item {
        get id() {
          return this.fields.get('id').value;
        }

        get name() {
          return this.fields.get('name').value;
        } // The name of the bundle type (ex: 'ts', 'sass', etc.)


        get type() {
          return this.fields.get('type').value;
        }

        get subpath() {
          return this.fields.get('subpath').value;
        }

        get specifier() {
          return this.fields.get('specifier').value;
        }

        get vspecifier() {
          return this.fields.get('vspecifier').value;
        }

        get tu() {
          return this.fields.get('tu').value;
        }

        get extname() {
          return this.fields.get('extname').value;
        }

        get pathname() {
          return this.fields.get('pathname').value;
        }

        get resource() {
          return this.fields.get('resource').value;
        }

        get platforms() {
          return this.fields.get('platforms').value;
        }

        get route() {
          return this.fields.get('route').value;
        }

        get layout() {
          return this.fields.get('layout').value;
        }

        get updated() {
          return this.fields.get('updated').value;
        }

        get destroyed() {
          return this.fields.get('destroyed').value;
        }

        get errors() {
          return this.fields.get('errors').value ?? [];
        }

        get warnings() {
          return this.fields.get('warnings').value ?? [];
        }

        get element() {
          return this.fields.get('element').value;
        }

        get processors() {
          const output = new Map();
          const processors = this.properties.get('processors');
          processors && processors.forEach(processor => {
            if (!processor.landed) return;
            const name = processor.fields.get('name').value;
            output.set(name, processor);
          });
          return output;
        }

        get packagers() {
          return this.properties.get('packagers');
        }

        get consumers() {
          const consumers = this.properties.get('consumers');
          return consumers && consumers.value;
        }

        get container() {
          const container = this.properties.get('container');
          return container && container.value;
        }

        get compilerProcessorActivate() {
          return this.fields.get('compilerProcessorActivate').value;
        }

        constructor(specs) {
          super('bundles', specs);
        }

        hasProcessor(name) {
          let find = false;
          const processors = this.properties.get('processors');
          processors.forEach(processor => {
            if (!processor.landed) return;
            const processorName = processor.fields.get('name').value;
            if (name === processorName) find = true;
          });
          return find;
        }

        async createFile(specs) {
          return _beyond_context.module.execute('/sources/create', specs);
        }

        async delete(specs) {
          return _beyond_context.module.execute('/sources/delete', specs);
        }

      }

      exports.Bundle = Bundle;
    }
  });
  /**********************************************
  INTERNAL MODULE: ./bundles/packagers/collection
  **********************************************/

  ims.set('./bundles/packagers/collection', {
    hash: 1473248085,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Packagers = void 0;

      var _core = require("@beyond-js/plm/core");

      var _item = require("./item");
      /*bundle*/


      class Packagers extends _core.Collection {
        constructor(specs) {
          super('bundles-packagers', _item.Packager, specs);
        }

      }

      exports.Packagers = Packagers;
    }
  });
  /********************************************************
  INTERNAL MODULE: ./bundles/packagers/compilers/collection
  ********************************************************/

  ims.set('./bundles/packagers/compilers/collection', {
    hash: 1946994994,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PackagerCompilers = void 0;

      var _core = require("@beyond-js/plm/core");

      var _item = require("./item");
      /*bundle*/


      class PackagerCompilers extends _core.Collection {
        constructor(specs) {
          super('packagers-compilers', _item.PackagerCompiler, specs);
        }

      }

      exports.PackagerCompilers = PackagerCompilers;
    }
  });
  /**************************************************
  INTERNAL MODULE: ./bundles/packagers/compilers/item
  **************************************************/

  ims.set('./bundles/packagers/compilers/item', {
    hash: 1697710403,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PackagerCompiler = void 0;

      var _core = require("@beyond-js/plm/core");
      /*bundle*/


      class PackagerCompiler extends _core.Item {
        get id() {
          return this.fields.get('id').value;
        }

        get diagnostics() {
          const diagnostics = this.fields.get('diagnostics').value;
          return {
            general: diagnostics?.general ?? [],
            files: new Map(diagnostics?.files),
            overwrites: new Map(diagnostics?.overwrites),
            dependencies: new Map(diagnostics?.dependencies)
          };
        }

        constructor(specs) {
          super('packagers-compilers', specs);
        }

      }

      exports.PackagerCompiler = PackagerCompiler;
    }
  });
  /******************************************************
  INTERNAL MODULE: ./bundles/packagers/compilers/register
  ******************************************************/

  ims.set('./bundles/packagers/compilers/register', {
    hash: 2955141242,
    creator: function (require, exports) {
      "use strict";

      var _core = require("@beyond-js/plm/core");

      var _beyond_context = require("beyond_context");

      const specs = {};
      specs.module = _beyond_context.module;
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

      _core.tables.register('packagers-compilers', specs);
    }
  });
  /****************************************
  INTERNAL MODULE: ./bundles/packagers/item
  ****************************************/

  ims.set('./bundles/packagers/item', {
    hash: 1684147317,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Packager = void 0;

      var _core = require("@beyond-js/plm/core");
      /*bundle*/


      class Packager extends _core.Item {
        get id() {
          return this.fields.get('id').value;
        }

        get distributionId() {
          return this.fields.get('distribution').value;
        }

        get processors() {
          return this.fields.get('processors').value;
        }

        get compilers() {
          return this.properties.get('compilers');
        }

        constructor(specs) {
          super('bundles-packagers', specs);
        }

      }

      exports.Packager = Packager;
    }
  });
  /********************************************
  INTERNAL MODULE: ./bundles/packagers/register
  ********************************************/

  ims.set('./bundles/packagers/register', {
    hash: 61262760,
    creator: function (require, exports) {
      "use strict";

      var _beyond_context = require("beyond_context");

      var _core = require("@beyond-js/plm/core");

      var _item = require("./compilers/item");

      const specs = {};
      specs.module = _beyond_context.module;
      specs.cache = false;
      specs.fields = ['id', 'distribution', 'processors', 'pkg_processor_ids'];
      specs.properties = {
        compilers: {
          Items: _item.PackagerCompiler,
          table: 'packagers-compilers',
          identifier: {
            field: 'id',
            source: 'pkg_processor_ids'
          }
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
          batches: {
            bundle: ['list']
          }
        }
      };

      _core.tables.register('bundles-packagers', specs);
    }
  });
  /**********************************
  INTERNAL MODULE: ./bundles/register
  **********************************/

  ims.set('./bundles/register', {
    hash: 3830792554,
    creator: function (require, exports) {
      "use strict";

      var _core = require("@beyond-js/plm/core");

      var _beyond_context = require("beyond_context");

      var _item = require("./packagers/item");

      var _item2 = require("../processors/item");

      var _collection = require("./consumers/collection");

      var _item3 = require("../applications/modules/item");

      const specs = {};
      specs.module = _beyond_context.module;
      specs.cache = false;
      specs.fields = ['id', 'name', 'type', 'processors', 'tu', 'platforms', 'subpath', 'specifier', 'vspecifier', 'updated', 'destroyed', 'extname', 'pathname', 'route', 'layout', 'element', 'compiler_processor_activate', 'errors', 'warnings'];
      specs.properties = {
        processors: {
          Items: _item2.Processor,
          table: 'processors',
          identifier: {
            field: 'id',
            source: 'processors'
          }
        },
        packagers: {
          Items: _item.Packager,
          table: 'bundles-packagers',
          identifier: {
            field: 'id',
            source: 'processors'
          }
        },
        consumers: {
          Collection: _collection.Consumers,
          table: 'bundles-consumers',
          filter: [{
            field: 'bundle',
            source: 'id'
          }]
        },
        container: {
          tables: ['applications-modules'],
          selector: item => {
            const id = item.fields.get('id');

            if (typeof id !== 'object') {
              console.warn('Invalid id value', id);
              return;
            }

            if (!id.assigned) return;
            let amId = id.value.split('//');
            amId = amId.slice(0, amId.length - 1).join('//');
            return {
              Item: _item3.ApplicationModule,
              table: 'applications-modules',
              identifier: {
                id: amId
              }
            };
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

      _core.tables.register('bundles', specs);
    }
  });
  /*********************************
  INTERNAL MODULE: ./dashboard/model
  *********************************/

  ims.set('./dashboard/model', {
    hash: 2161999347,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Dashboard = void 0;

      var _beyond_context = require("beyond_context");

      var _reactiveModel = require("@beyond-js/inspect/reactive-model");
      /*bundle*/


      const Dashboard = new class extends _reactiveModel.ReactiveModel {
        get ready() {
          return !!this.#wd;
        }

        #wd;

        get wd() {
          return this.#wd;
        }

        #validPort;

        get validPort() {
          return this.#validPort;
        }

        constructor() {
          super();
        }

        prepare() {
          this.getWD().catch(exc => console.error(exc.stack));
        }

        cleanCache = () => _beyond_context.module.execute('/dashboard/cleanCache');

        validate(hash) {
          return _beyond_context.module.execute('/dashboard/validate', {
            hash: hash
          });
        }

        async checkPort(port) {
          if (!port) throw new Error('port to check is required');
          this.processing = true;

          try {
            const path = 'builder/project/checkPort';
            const response = await _beyond_context.module.execute(path, {
              port: port
            });
            this.processing = false;
            return response.valid;
          } catch (error) {
            this.processing = false;
            this.#validPort = false;
            this.processed = true;
          }
        }

        async availablePort(intents = 5) {
          let cont = 0;
          let port = 8080;

          while (cont < intents) {
            const available = await this.checkPort(port);
            if (available) break;
            port = port - 100;
          }

          return port;
        }

        async getWD() {
          this.processing = true;

          try {
            const response = await _beyond_context.module.execute('/dashboard/getWD');
            this.processing = false;
            this.#wd = response.data.wd;
            return this.#wd;
          } catch (error) {
            this.processing = false;
            this.#validPort = false;
            this.processed = true;
          }
        }

      }();
      exports.Dashboard = Dashboard;
    }
  });
  /*****************************************
  INTERNAL MODULE: ./declarations/collection
  *****************************************/

  ims.set('./declarations/collection', {
    hash: 720769332,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Declarations = void 0;

      var _core = require("@beyond-js/plm/core");

      var _item = require("./item");
      /*bundle*/


      class Declarations extends _core.Collection {
        constructor(specs) {
          super('declarations', _item.Declaration, specs);
        }

      }

      exports.Declarations = Declarations;
    }
  });
  /***********************************
  INTERNAL MODULE: ./declarations/item
  ***********************************/

  ims.set('./declarations/item', {
    hash: 2205156917,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Declaration = void 0;

      var _core = require("@beyond-js/plm/core");
      /*bundle*/


      class Declaration extends _core.Item {
        get id() {
          return this.fields.get('id').value;
        }

        get code() {
          return this.fields.get('code').value;
        }

        get processed() {
          return this.fields.get('processed').value;
        }

        get errors() {
          return this.fields.get('errors').value ?? [];
        }

        get warnings() {
          return this.fields.get('warnings').value ?? [];
        }

        constructor(specs) {
          super('declarations', specs);
        }

      }

      exports.Declaration = Declaration;
    }
  });
  /***************************************
  INTERNAL MODULE: ./declarations/register
  ***************************************/

  ims.set('./declarations/register', {
    hash: 2971962182,
    creator: function (require, exports) {
      "use strict";

      var _core = require("@beyond-js/plm/core");

      var _beyond_context = require("beyond_context");

      const specs = {};
      specs.module = _beyond_context.module;
      specs.cache = false;
      specs.fields = ['id', 'code', 'processed', 'errors', 'warnings'];
      specs.batch = {
        actions: {
          list: '',
          data: 'declarations/data'
        }
      };
      specs.indices = {
        id: {
          fields: ['id'],
          primary: true
        }
      };

      _core.tables.register('declarations', specs);
    }
  });
  /*****************************************
  INTERNAL MODULE: ./dependencies/collection
  *****************************************/

  ims.set('./dependencies/collection', {
    hash: 1211292860,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TransversalDependencies = void 0;

      var _core = require("@beyond-js/plm/core");

      var _item = require("./item");
      /*bundle*/


      class TransversalDependencies extends _core.Collection {
        constructor(specs) {
          super('transversal-dependencies', _item.TransversalDependency, specs);
        }

      }

      exports.TransversalDependencies = TransversalDependencies;
    }
  });
  /***********************************
  INTERNAL MODULE: ./dependencies/item
  ***********************************/

  ims.set('./dependencies/item', {
    hash: 3941645764,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TransversalDependency = void 0;

      var _core = require("@beyond-js/plm/core");
      /*bundle*/


      class TransversalDependency extends _core.Item {
        get id() {
          return this.fields.get('id').value;
        }

        constructor(specs) {
          super('transversal-dependencies', specs);
        }

      }

      exports.TransversalDependency = TransversalDependency;
    }
  });
  /***************************************
  INTERNAL MODULE: ./dependencies/register
  ***************************************/

  ims.set('./dependencies/register', {
    hash: 2290016809,
    creator: function (require, exports) {
      "use strict";

      var _core = require("@beyond-js/plm/core");

      var _beyond_context = require("beyond_context");

      const specs = {};
      specs.module = _beyond_context.module;
      specs.cache = false;
      specs.fields = ['id'];
      specs.batch = {
        actions: {
          list: 'transversal/dependencies/list',
          data: 'transversal/dependencies/data'
        }
      };
      specs.indices = {
        id: {
          fields: ['id'],
          primary: true
        }
      };

      _core.tables.register('transversal-dependencies', specs);
    }
  });
  /******************************************
  INTERNAL MODULE: ./distributions/collection
  ******************************************/

  ims.set('./distributions/collection', {
    hash: 2042719280,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ApplicationDistributions = void 0;

      var _core = require("@beyond-js/plm/core");

      var _item = require("./item");
      /*bundle*/


      class ApplicationDistributions extends _core.Collection {
        constructor(specs) {
          super('applications-distributions', _item.ApplicationDistribution, specs);
        }

      }

      exports.ApplicationDistributions = ApplicationDistributions;
    }
  });
  /*********************************************************
  INTERNAL MODULE: ./distributions/interfaces/ports-response
  *********************************************************/

  ims.set('./distributions/interfaces/ports-response', {
    hash: 2222151219,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
    }
  });
  /************************************************
  INTERNAL MODULE: ./distributions/interfaces/ports
  ************************************************/

  ims.set('./distributions/interfaces/ports', {
    hash: 2758067874,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
    }
  });
  /************************************
  INTERNAL MODULE: ./distributions/item
  ************************************/

  ims.set('./distributions/item', {
    hash: 133502596,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ApplicationDistribution = void 0;

      var _core = require("@beyond-js/plm/core");

      var _beyond_context = require("beyond_context");
      /*bundle*/


      class ApplicationDistribution extends _core.Item {
        #id;

        get id() {
          return this.#id ?? this.fields.get('id').value;
        }

        #name;

        get name() {
          return this.#name ?? this.fields.get('name').value;
        }

        #local;

        get local() {
          return this.#local ?? this.fields.get('local').value;
        }

        #ssr;

        get ssr() {
          return this.#ssr ?? this.fields.get('ssr').value;
        }

        #port;

        get port() {
          return this.#port ?? this.fields.get('port').value;
        }

        #ports;

        get ports() {
          return this.#ports ?? this.fields.get('ports').value;
        }

        #amd;

        get amd() {
          return this.#amd ?? this.fields.get('amd').value;
        }

        #ts;

        get ts() {
          return this.#ts ?? this.fields.get('ts').value;
        }

        #platform;

        get platform() {
          return this.#platform ?? this.fields.get('platform').value;
        }

        #compress;

        get compress() {
          return this.#compress ?? this.fields.get('compress').value;
        }

        #environment;

        get environment() {
          return this.#environment ?? this.fields.get('environment').value;
        }

        #default;

        get default() {
          return this.#default ?? this.fields.get('default').value;
        }

        #npm;

        get npm() {
          return this.#npm ?? this.fields.get('npm').value;
        }

        #minify;

        get minify() {
          return this.#minify ?? this.fields.get('minify').value;
        }

        #bundles;

        get bundles() {
          return this.#bundles ?? this.fields.get('bundles').value;
        }

        get launcher() {
          const launcher = this.properties.get('launcher');
          return launcher && launcher.value;
        }

        #processed;
        #processing;

        get processing() {
          return this.#processing;
        }

        get values() {
          return {
            id: this.id,
            name: this.name,
            local: this.local,
            ssr: this.ssr,
            port: this.port,
            ports: this.ports ?? {},
            ts: this.ts,
            amd: this.amd,
            minify: {},
            platform: this.platform,
            environment: this.environment,
            compress: this.compress,
            default: this.default
          };
        }

        constructor(specs) {
          super('applications-distributions', specs);
        }

        async checkPort(port) {
          if (!port) throw new Error('port to check is required');
          this.#processing = true;

          try {
            const path = 'builder/project/checkPort';
            const response = await _beyond_context.module.execute(path, {
              port: port
            });
            this.#processing = false;
            return response.valid;
          } catch (error) {
            this.#processing = false;
            this.#processed = true;
          }
        }

        validate(values) {
          values.ports = {
            http: isNaN(parseInt(values.http)) ? undefined : parseInt(values.http),
            inspect: isNaN(parseInt(values.inspect)) ? undefined : parseInt(values.inspect),
            bundles: isNaN(parseInt(values.bundles)) ? undefined : parseInt(values.bundles)
          };
          values.minify = {
            html: values.html,
            css: values.css,
            js: values.js
          };
          values.bundles = {
            mode: values.mode
          };
          return values;
        }

        setValues(values) {
          const newValues = this.validate(values);
          this.#id = newValues.id;
          this.#platform = newValues.platform;
          this.#name = newValues.name;
          this.#local = newValues.local;
          this.#ssr = newValues.ssr;
          this.#port = newValues.port;
          this.#ports = newValues.ports;
          this.#amd = newValues.amd;
          this.#ts = newValues.ts;
          this.#compress = newValues.compress;
          this.#environment = newValues.environment;
          this.#default = newValues.default;
          this.#minify = newValues.minify;
          this.#bundles = newValues.bundles;
        }

      }

      exports.ApplicationDistribution = ApplicationDistribution;
    }
  });
  /**********************************************
  INTERNAL MODULE: ./distributions/launchers/item
  **********************************************/

  ims.set('./distributions/launchers/item', {
    hash: 3187650555,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DistributionLauncher = void 0;

      var _core = require("@beyond-js/plm/core");

      var _beyond_context = require("beyond_context");
      /*bundle*/


      class DistributionLauncher extends _core.Item {
        get id() {
          return this.fields.get('id').value;
        }

        get status() {
          return this.fields.get('status').value;
        }

        get pid() {
          return this.fields.get('pid').value;
        }

        get path() {
          return this.fields.get('path').value;
        }

        get port() {
          return this.fields.get('port').value;
        }

        get ports() {
          return this.fields.get('ports').value;
        }

        get errors() {
          return this.fields.get('errors').value ?? [];
        }

        constructor(specs) {
          super('distributions-launcher', specs);
        }

        start() {
          return _beyond_context.module.execute('launchers/start', {
            id: this.id
          });
        }

        stop() {
          return _beyond_context.module.execute('launchers/stop', {
            id: this.id
          });
        }

        restart() {
          return _beyond_context.module.execute('launchers/restart', {
            id: this.id
          });
        }

      }

      exports.DistributionLauncher = DistributionLauncher;
    }
  });
  /**************************************************
  INTERNAL MODULE: ./distributions/launchers/register
  **************************************************/

  ims.set('./distributions/launchers/register', {
    hash: 1407329690,
    creator: function (require, exports) {
      "use strict";

      var _core = require("@beyond-js/plm/core");

      var _beyond_context = require("beyond_context");

      const specs = {};
      specs.module = _beyond_context.module;
      specs.cache = false;
      specs.fields = ['id', 'status', 'pid', 'path', 'port', 'ports', 'errors'];
      specs.batch = {
        actions: {
          data: 'launchers/data'
        }
      };
      specs.indices = {
        id: {
          fields: ['id'],
          primary: true
        }
      };

      _core.tables.register('distributions-launcher', specs);
    }
  });
  /****************************************
  INTERNAL MODULE: ./distributions/register
  ****************************************/

  ims.set('./distributions/register', {
    hash: 3957717716,
    creator: function (require, exports) {
      "use strict";

      var _core = require("@beyond-js/plm/core");

      var _beyond_context = require("beyond_context");

      var _item = require("./launchers/item");

      const specs = {};
      specs.module = _beyond_context.module;
      specs.cache = false;
      specs.fields = ['id', 'name', 'local', 'launcher_id', 'ssr', 'port', 'ports', 'ts', 'amd', 'platform', 'environment', 'compress', 'default', 'npm'];
      specs.properties = {
        launcher: {
          Item: _item.DistributionLauncher,
          table: 'distributions-launcher',
          identifier: [{
            field: 'id',
            source: 'launcher_id'
          }]
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

      _core.tables.register('applications-distributions', specs);
    }
  });
  /***************************
  INTERNAL MODULE: ./file/file
  ***************************/

  ims.set('./file/file', {
    hash: 2738316366,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.File = void 0;

      var _core = require("@beyond-js/plm/core");

      var _beyond_context = require("beyond_context");

      class File extends _core.Item {
        constructor(table, specs) {
          super(table, specs);
        }

        deleteFolder(folder) {
          if (!this.path) {
            console.error('The module not have dirname associate it');
            return;
          }

          return _beyond_context.module.execute('/sources/delete', {
            target: `${this.path}\\${folder}`
          });
        }

      }

      exports.File = File;
    }
  });
  /********************************************
  INTERNAL MODULE: ./globals-bundles/collection
  ********************************************/

  ims.set('./globals-bundles/collection', {
    hash: 2202888714,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.GlobalBundles = void 0;

      var _core = require("@beyond-js/plm/core");

      var _item = require("./item");
      /*bundle*/


      class GlobalBundles extends _core.Collection {
        constructor(specs) {
          super('global-bundles', _item.GlobalBundle, specs);
        }

      }

      exports.GlobalBundles = GlobalBundles;
    }
  });
  /**************************************
  INTERNAL MODULE: ./globals-bundles/item
  **************************************/

  ims.set('./globals-bundles/item', {
    hash: 3855370576,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.GlobalBundle = void 0;

      var _core = require("@beyond-js/plm/core");
      /*bundle*/


      class GlobalBundle extends _core.Item {
        get id() {
          return this.fields.get('id').value;
        }

        get name() {
          return this.fields.get('name').value;
        }

        get processors() {
          return this.fields.get('processors').value;
        }

        get multilanguage() {
          return !!this.fields.get('multilanguage').value;
        }

        constructor(specs) {
          super('global-bundles', specs);
        }

      }

      exports.GlobalBundle = GlobalBundle;
    }
  });
  /******************************************
  INTERNAL MODULE: ./globals-bundles/register
  ******************************************/

  ims.set('./globals-bundles/register', {
    hash: 3418061433,
    creator: function (require, exports) {
      "use strict";

      var _core = require("@beyond-js/plm/core");

      var _beyond_context = require("beyond_context");

      const specs = {};
      specs.module = _beyond_context.module;
      specs.cache = false;
      specs.fields = ['id', 'name', 'processors', 'multilanguage'];
      specs.batch = {
        actions: {
          list: 'global-bundles/list',
          data: 'global-bundles/data'
        }
      };
      specs.indices = {
        id: {
          fields: ['id'],
          primary: true
        }
      };

      _core.tables.register('global-bundles', specs);
    }
  });
  /************************************
  INTERNAL MODULE: ./modules/collection
  ************************************/

  ims.set('./modules/collection', {
    hash: 438033577,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Modules = void 0;

      var _core = require("@beyond-js/plm/core");

      var _item = require("./item");
      /*bundle*/


      class Modules extends _core.Collection {
        constructor(specs) {
          super('modules', _item.Module, specs);
        }

      }

      exports.Modules = Modules;
    }
  });
  /**************************************
  INTERNAL MODULE: ./modules/declarations
  **************************************/

  ims.set('./modules/declarations', {
    hash: 4284755363,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ModuleDeclarations = void 0;

      var _beyond_context = require("beyond_context");

      var _core = require("@beyond-js/kernel/core");
      /*bundle*/


      class ModuleDeclarations extends _core.Events {
        #parent;
        #errors;

        get errors() {
          return this.#errors;
        }

        #fetching;

        get fetching() {
          return this.#fetching;
        }

        constructor(parent) {
          super();
          this.#parent = parent;
        }

        has(type) {
          let find = false;
          const bundles = this.#parent.properties.get('bundles');
          bundles.forEach(bundle => {
            if (type === bundle.fields.get('name').value) {
              find = true;
            }
          });
          return find;
        }

        async update() {
          if (!this.has('ts')) {
            console.warn('the module does not use declarations');
            return;
          }

          try {
            const action = '/modules/declarations/update';
            const id = {
              id: this.#parent.fields.get('id').value
            };
            const response = await _beyond_context.module.execute(action, id);

            if (response?.error) {
              this.#errors = response.error;
              console.error('Error Creating module: ', response.error);
              return;
            }
          } catch (error) {
            this.#errors = error;
          } finally {
            this.#fetching = false;
            this.trigger('change');
          }
        }

      }

      exports.ModuleDeclarations = ModuleDeclarations;
    }
  });
  /******************************
  INTERNAL MODULE: ./modules/item
  ******************************/

  ims.set('./modules/item', {
    hash: 3131518751,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Module = void 0;

      var _core = require("@beyond-js/plm/core");

      var _beyond_context = require("beyond_context");

      var _texts = require("./texts");

      var _declarations = require("./declarations");
      /*bundle*/


      class Module extends _core.Item {
        get id() {
          return this.fields.get('id').value;
        }

        #name;

        get name() {
          return this.#name ?? this.fields.get('name').value;
        }

        set name(value) {
          if (this.#name === value) return;
          this.#name = value;
        }

        get type() {
          return this.fields.get('type').value;
        }

        get subpath() {
          return this.fields.get('subpath').value;
        }

        get specifier() {
          return this.fields.get('specifier').value;
        }

        get vspecifier() {
          return this.fields.get('vspecifier').value;
        }

        get tu() {
          return this.fields.get('tu').value;
        }

        get path() {
          return this.fields.get('path').value;
        }

        get pathname() {
          return this.fields.get('pathname').value;
        }

        get resource() {
          return this.fields.get('resource').value;
        }

        get platforms() {
          return this.fields.get('platforms').value;
        }

        #title;

        get title() {
          return this.#title ?? this.fields.get('title').value;
        }

        set title(value) {
          this.#title = value;
        }

        #description;

        get description() {
          return this.#description ?? this.fields.get('description').value;
        }

        set description(value) {
          if (this.#description === value) return;
          this.#description = value;
        }

        get hmr() {
          return this.fields.get('hmr').value;
        }

        get errors() {
          return this.fields.get('errors').value ?? [];
        }

        get warnings() {
          return this.fields.get('warnings').value ?? [];
        }

        get bundles() {
          return this.properties.get('bundles');
        }

        get static() {
          const statics = this.properties.get('static');
          return statics && statics.value;
        }

        get container() {
          const container = this.properties.get('container');
          return container && container.value;
        }

        #texts;

        get texts() {
          return this.#texts;
        }

        #declarations;

        get declarations() {
          return this.#declarations;
        }

        constructor(specs) {
          super('modules', specs);
          this.#texts = new _texts.ModuleTexts(this);
          this.#declarations = new _declarations.ModuleDeclarations(this);
          this.#declarations.on('change', () => this.node.trigger('change'));
        }
        /**
         *  Checks if the folder where files going to be located exist.
         */


        checkStatic() {
          const specs = {
            moduleId: this.id,
            static: {
              "path": "./static"
            }
          };
          return _beyond_context.module.execute('/builder/module/edit', specs);
        }

        installDependencies(dependencies) {
          return _beyond_context.module.execute('/builder/module/install', dependencies);
        }

        saveField(field, value) {
          const specs = {
            moduleId: this.id,
            dirname: this.module.path
          };
          if (field === 'hmr') specs.bundles = {
            hmr: value
          };else if (field === 'transpile') {
            if (!this.haveProcessor()) return;
            specs.bundles = {
              ts: {
                transpile: value
              }
            };
          } else field === 'title' ? specs.title = value : specs.description = value;
          return _beyond_context.module.execute('/builder/module/edit', specs);
        }

        save(specs) {
          if (!specs.id) specs.id = this.id;
          return _beyond_context.module.execute('/builder/module/edit', specs);
        }

        clone(name) {
          return _beyond_context.module.execute('/builder/module/clone', {
            name: name,
            moduleId: this.id
          });
        }

        delete() {
          if (!this.module.path) {
            console.error('The module not have dirname associate it');
            return;
          }

          return _beyond_context.module.execute('/builder/module/delete', {
            target: this.path
          });
        }

        createFile(specs) {
          let id = specs.type === 'backend' ? `${this.id}` : `${this.id}//${specs.bundle}//${specs.processor}`;

          if (specs.type && specs.type === 'overwrite') {
            const split = this.id.split('//');
            id = `${split[1]}//${split[2]}//${specs.bundle}`;
          }

          return _beyond_context.module.execute('/sources/create', {
            id: id,
            type: specs.type ?? 'processor',
            filename: specs.filename
          });
        }

        addBundle(params) {
          const specs = {
            moduleId: this.id,
            ...params
          };
          return _beyond_context.module.execute('/builder/module/addBundle', specs);
        }

      }

      exports.Module = Module;
    }
  });
  /**********************************
  INTERNAL MODULE: ./modules/register
  **********************************/

  ims.set('./modules/register', {
    hash: 329061517,
    creator: function (require, exports) {
      "use strict";

      var _core = require("@beyond-js/plm/core");

      var _beyond_context = require("beyond_context");

      var _item = require("../bundles/item");

      var _item2 = require("../applications/item");

      var _collection = require("./static/collection");

      const specs = {};
      specs.module = _beyond_context.module;
      specs.cache = false;
      specs.fields = ['id', 'name', 'type', 'tu', 'path', 'title', 'description', 'platforms', 'subpath', 'specifier', 'vspecifier', 'pathname', 'resource', 'hmr', 'bundles', 'container', 'errors', 'warnings'];
      specs.properties = {
        bundles: {
          Items: _item.Bundle,
          table: 'bundles',
          identifier: {
            field: 'id',
            source: 'bundles'
          }
        },
        static: {
          Collection: _collection.ModuleStatics,
          table: 'modules-static',
          filter: [{
            field: 'module',
            source: 'id'
          }]
        },
        container: {
          Item: _item2.Application,
          table: 'applications',
          identifier: [{
            field: 'id',
            source: 'container'
          }]
        }
      };
      specs.batch = {
        actions: {
          list: 'modules/list',
          data: 'modules/data'
        }
      };
      specs.indices = {
        id: {
          fields: ['id'],
          primary: true
        }
      };

      _core.tables.register('modules', specs);
    }
  });
  /*******************************************
  INTERNAL MODULE: ./modules/static/collection
  *******************************************/

  ims.set('./modules/static/collection', {
    hash: 3212911112,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ModuleStatics = void 0;

      var _core = require("@beyond-js/plm/core");

      var _item = require("./item");
      /*bundle*/


      class ModuleStatics extends _core.Collection {
        constructor(specs) {
          super('modules-static', _item.ModuleStatic, specs);
        }

      }

      exports.ModuleStatics = ModuleStatics;
    }
  });
  /*************************************
  INTERNAL MODULE: ./modules/static/item
  *************************************/

  ims.set('./modules/static/item', {
    hash: 2787082641,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ModuleStatic = void 0;

      var _core = require("@beyond-js/plm/core");

      var _beyond_context = require("beyond_context");
      /*bundle*/


      class ModuleStatic extends _core.Item {
        get id() {
          return this.fields.get('id').value;
        }

        get file() {
          return this.fields.get('file').value;
        }

        get filename() {
          return this.fields.get('filename').value;
        }

        get dirname() {
          return this.fields.get('dirname').value;
        }

        get basename() {
          return this.fields.get('basename').value;
        }

        get extname() {
          return this.fields.get('extname').value;
        }

        get relative() {
          return this.fields.get('relative').value;
        }

        get pathname() {
          return this.fields.get('pathname').value;
        }

        get overwrite() {
          return this.fields.get('overwrite').value;
        }

        constructor(specs) {
          super('modules-static', specs);
        }

        upload(specs) {
          const [, applicationId, moduleName] = this.id.split('//');
          const overwrites = [];
          const overwrite = {
            module: moduleName,
            bundle: 'static',
            static: {}
          };
          overwrite.static[specs.origin] = specs.overwrite;
          overwrites.push(overwrite);
          return _beyond_context.module.execute('builder/template/update', {
            applicationId: parseInt(applicationId),
            overwrites: overwrites
          });
        }

        async delete(overwrite) {
          if (!overwrite) {
            await _beyond_context.module.execute('sources/delete', {
              target: this.file
            });
          }

          if (!this.overwrite) return;
          const [, applicationId, moduleName] = this.id.split('//');
          const params = {
            applicationId: parseInt(applicationId),
            overwrites: [{
              module: moduleName,
              bundle: 'static'
            }]
          };
          await _beyond_context.module.execute('builder/template/delete', params);
          await _beyond_context.module.execute('sources/delete', {
            target: this.overwrite.file
          });
        }

      }

      exports.ModuleStatic = ModuleStatic;
    }
  });
  /*****************************************
  INTERNAL MODULE: ./modules/static/register
  *****************************************/

  ims.set('./modules/static/register', {
    hash: 1737015816,
    creator: function (require, exports) {
      "use strict";

      var _core = require("@beyond-js/plm/core");

      var _beyond_context = require("beyond_context");

      const specs = {};
      specs.module = _beyond_context.module;
      specs.cache = false;
      specs.fields = ['id', 'file', 'filename', 'dirname', 'basename', 'extname', 'relative', 'pathname', 'overwrite'];
      specs.batch = {
        actions: {
          list: 'modules/static/list',
          data: 'modules/static/data'
        }
      };
      specs.indices = {
        id: {
          fields: ['id'],
          primary: true
        },
        modules: {
          fields: ['module']
        }
      };

      _core.tables.register('modules-static', specs);
    }
  });
  /*******************************
  INTERNAL MODULE: ./modules/texts
  *******************************/

  ims.set('./modules/texts', {
    hash: 2654663686,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ModuleTexts = void 0;
      /*bundle*/

      class ModuleTexts {
        #parent;

        get has() {
          return !!this.#parent.getBundle('txt');
        }

        get value() {
          return this.#parent.getBundle('txt');
        }

        constructor(parent) {
          this.#parent = parent;
        }

        get(property, language = 'spa') {
          let texts;
          let bundle;
          this.#parent.bundles.forEach(b => b.name === 'txt' ? bundle = b : null);
          if (!bundle) return;
          const processor = bundle.processors.get('txt');
          processor.sources.items.forEach(source => {
            texts = source && JSON.parse(source.code);
          });
          return texts && texts[language][property];
        }

      }

      exports.ModuleTexts = ModuleTexts;
    }
  });
  /****************************************************
  INTERNAL MODULE: ./processors/dependencies/collection
  ****************************************************/

  ims.set('./processors/dependencies/collection', {
    hash: 2064706147,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ProcessorDependencies = void 0;

      var _core = require("@beyond-js/plm/core");

      var _item = require("./item");
      /*bundle*/


      class ProcessorDependencies extends _core.Collection {
        constructor(specs) {
          super('processors-dependencies', _item.ProcessorDependency, specs);
        }

        externalsWithErrors() {
          const output = [];
          this.items.forEach(i => {
            (i.kind === 'external' || i.kind === undefined) && !i.valid && output.push(i.resource);
          });
          return output;
        }

      }

      exports.ProcessorDependencies = ProcessorDependencies;
    }
  });
  /**********************************************
  INTERNAL MODULE: ./processors/dependencies/item
  **********************************************/

  ims.set('./processors/dependencies/item', {
    hash: 4170357862,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ProcessorDependency = void 0;

      var _core = require("@beyond-js/plm/core");
      /*bundle*/


      class ProcessorDependency extends _core.Item {
        get id() {
          return this.fields.get('id').value;
        }

        get tu() {
          return this.fields.get('tu').value;
        }

        get is() {
          return this.fields.get('is').value;
        }

        get version() {
          return this.fields.get('version').value;
        }

        get kind() {
          return this.fields.get('kind').value;
        }

        get valid() {
          return this.fields.get('valid').value;
        }

        get specifier() {
          return this.fields.get('specifier').value;
        }

        get errors() {
          return this.fields.get('errors').value ?? [];
        }

        get warnings() {
          return this.fields.get('warnings').value ?? [];
        }

        get bundle() {
          const bundle = this.properties.get('bundle');
          return bundle && bundle.value;
        }

        get declaration() {
          const declaration = this.properties.get('declaration');
          return declaration && declaration.value;
        }

        get moduleId() {
          return this.fields.get('module_id').value;
        }

        get bundleId() {
          return this.fields.get('bundle_id').value;
        }

        constructor(specs) {
          super('processors-dependencies', specs);
        }

      }

      exports.ProcessorDependency = ProcessorDependency;
    }
  });
  /**************************************************
  INTERNAL MODULE: ./processors/dependencies/register
  **************************************************/

  ims.set('./processors/dependencies/register', {
    hash: 882761044,
    creator: function (require, exports) {
      "use strict";

      var _core = require("@beyond-js/plm/core");

      var _beyond_context = require("beyond_context");

      var _item = require("../../bundles/item");

      var _item2 = require("../../declarations/item");

      const specs = {};
      specs.module = _beyond_context.module;
      specs.cache = false; //TODO revisar campo is, si tiene el nombre de los archivos donde se usa deberia tener otro nombre

      specs.fields = ['id', 'tu', 'is', 'version', 'kind', 'valid', 'specifier', 'declaration', 'errors', 'warnings', 'module_id', 'bundle_id'];
      specs.properties = {
        bundle: {
          Item: _item.Bundle,
          table: 'bundles',
          identifier: [{
            field: 'id',
            source: 'bundle_id'
          }]
        },
        declaration: {
          Item: _item2.Declaration,
          table: 'declarations',
          identifier: [{
            field: 'id',
            source: 'declaration'
          }]
        } //TODO agregar propiedad con acceso al file sources:{}

      }; //TODO @ftovar crear propiedad de tipo Items a la tabla processor-sources con el campo is como relacion

      specs.batch = {
        actions: {
          list: 'processors/dependencies/list',
          data: 'processors/dependencies/data'
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

      _core.tables.register('processors-dependencies', specs);
    }
  });
  /*********************************
  INTERNAL MODULE: ./processors/item
  *********************************/

  ims.set('./processors/item', {
    hash: 3877142306,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Processor = void 0;

      var _beyond_context = require("beyond_context");

      var _file = require("../file/file");
      /*bundle*/


      class Processor extends _file.File {
        get id() {
          return this.fields.get('id').value;
        }

        get name() {
          return this.fields.get('name').value;
        }

        get path() {
          return this.fields.get('path').value;
        }

        get updated() {
          return this.fields.get('updated').value;
        }

        get destroyed() {
          return this.fields.get('destroyed').value;
        }

        get multilanguage() {
          return this.fields.get('multilanguage').value;
        }

        get errors() {
          return this.fields.get('errors').value ?? [];
        }

        get warnings() {
          return this.fields.get('warnings').value ?? [];
        }

        get sources() {
          const sources = this.properties.get('sources');
          return sources && sources.value;
        }

        get overwrites() {
          const overwrites = this.properties.get('overwrites');
          return overwrites && overwrites.value;
        }

        get dependencies() {
          const dependencies = this.properties.get('dependencies');
          return dependencies && dependencies.value;
        }

        #alerts = new Map();

        get alerts() {
          return this.#alerts;
        }

        constructor(specs) {
          super('processors', specs);
        }

        async createFile(specs) {
          //TODO: @julio @felix, check overwrites logic
          const params = {
            id: this.id,
            type: 'processor',
            filename: specs.filename
          };
          return _beyond_context.module.execute('/sources/create', params);
        }

      }

      exports.Processor = Processor;
    }
  });
  /**************************************************
  INTERNAL MODULE: ./processors/overwrites/collection
  **************************************************/

  ims.set('./processors/overwrites/collection', {
    hash: 3845239090,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ProcessorOverwrites = void 0;

      var _core = require("@beyond-js/plm/core");

      var _item = require("./item");
      /*bundle*/


      class ProcessorOverwrites extends _core.Collection {
        constructor(specs) {
          super('processors-overwrites', _item.ProcessorOverwrite, specs);
        }

      }

      exports.ProcessorOverwrites = ProcessorOverwrites;
    }
  });
  /********************************************
  INTERNAL MODULE: ./processors/overwrites/item
  ********************************************/

  ims.set('./processors/overwrites/item', {
    hash: 1075116163,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ProcessorOverwrite = void 0;

      var _source = require("../../sources/source");
      /*bundle*/


      class ProcessorOverwrite extends _source.Source {
        get id() {
          return this.fields.get('id').value;
        }

        get version() {
          return this.fields.get('version').value;
        }

        get code() {
          return this.fields.get('code').value;
        }

        get file() {
          return this.fields.get('file').value;
        }

        get filename() {
          return this.fields.get('filename').value;
        }

        get dirname() {
          return this.fields.get('dirname').value;
        }

        get basename() {
          return this.fields.get('basename').value;
        }

        get extname() {
          return this.fields.get('extname').value;
        }

        get relative() {
          return this.fields.get('relative').value;
        }

        constructor(specs) {
          super('processors-overwrites', specs);
        }

      }

      exports.ProcessorOverwrite = ProcessorOverwrite;
    }
  });
  /************************************************
  INTERNAL MODULE: ./processors/overwrites/register
  ************************************************/

  ims.set('./processors/overwrites/register', {
    hash: 3976410170,
    creator: function (require, exports) {
      "use strict";

      var _core = require("@beyond-js/plm/core");

      var _beyond_context = require("beyond_context");

      const specs = {};
      specs.module = _beyond_context.module;
      specs.cache = false;
      specs.fields = ['id', 'version', 'code', 'file', 'filename', 'dirname', 'basename', 'extname', 'relative'];
      specs.batch = {
        actions: {
          list: 'processors/overwrites/list',
          data: 'processors/overwrites/data'
        }
      };
      specs.indices = {
        id: {
          fields: ['id'],
          primary: true
        },
        overwrites: {
          fields: ['processor']
        }
      };

      _core.tables.register('processors-overwrites', specs);
    }
  });
  /*************************************
  INTERNAL MODULE: ./processors/register
  *************************************/

  ims.set('./processors/register', {
    hash: 2529350609,
    creator: function (require, exports) {
      "use strict";

      var _core = require("@beyond-js/plm/core");

      var _beyond_context = require("beyond_context");

      var _collection = require("./sources/collection");

      var _collection2 = require("./overwrites/collection");

      var _collection3 = require("./dependencies/collection");

      const specs = {};
      specs.module = _beyond_context.module;
      specs.cache = false;
      specs.fields = ['id', 'name', 'path', 'updated', 'destroyed', 'multilanguage', 'errors', 'warnings'];
      specs.properties = {
        sources: {
          Collection: _collection.ProcessorSources,
          table: 'processors-sources',
          filter: [{
            field: 'processor',
            source: 'id'
          }]
        },
        overwrites: {
          Collection: _collection2.ProcessorOverwrites,
          table: 'processors-overwrites',
          filter: [{
            field: 'processor',
            source: 'id'
          }]
        },
        dependencies: {
          Collection: _collection3.ProcessorDependencies,
          table: 'processors-dependencies',
          filter: [{
            field: 'processor',
            source: 'id'
          }]
        }
      };
      specs.batch = {
        actions: {
          data: 'processors/data'
        }
      };
      specs.indices = {
        id: {
          fields: ['id'],
          primary: true
        }
      };

      _core.tables.register('processors', specs);
    }
  });
  /***********************************************
  INTERNAL MODULE: ./processors/sources/collection
  ***********************************************/

  ims.set('./processors/sources/collection', {
    hash: 1322663490,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ProcessorSources = void 0;

      var _core = require("@beyond-js/plm/core");

      var _item = require("./item");
      /*bundle*/


      class ProcessorSources extends _core.Collection {
        constructor(specs) {
          super('processors-sources', _item.ProcessorSource, specs);
        }

      }

      exports.ProcessorSources = ProcessorSources;
    }
  });
  /*****************************************
  INTERNAL MODULE: ./processors/sources/item
  *****************************************/

  ims.set('./processors/sources/item', {
    hash: 3409470213,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ProcessorSource = void 0;

      var _source = require("../../sources/source");
      /*bundle*/


      class ProcessorSource extends _source.Source {
        get id() {
          return this.fields.get('id').value;
        }

        get version() {
          return this.fields.get('version').value;
        }

        get code() {
          return this.fields.get('code').value;
        }

        get hash() {
          return this.fields.get('hash').value;
        }

        get file() {
          return this.fields.get('file').value;
        }

        get filename() {
          return this.fields.get('filename').value;
        }

        get dirname() {
          return this.fields.get('dirname').value;
        }

        get basename() {
          return this.fields.get('basename').value;
        }

        get extname() {
          return this.fields.get('extname').value;
        }

        get relative() {
          return this.fields.get('relative').value;
        }

        constructor(specs) {
          super('processors-sources', specs);
        }

      }

      exports.ProcessorSource = ProcessorSource;
    }
  });
  /*********************************************
  INTERNAL MODULE: ./processors/sources/register
  *********************************************/

  ims.set('./processors/sources/register', {
    hash: 49712273,
    creator: function (require, exports) {
      "use strict";

      var _core = require("@beyond-js/plm/core");

      var _beyond_context = require("beyond_context");

      const specs = {};
      specs.module = _beyond_context.module;
      specs.cache = false;
      specs.fields = ['id', 'version', 'code', 'hash', 'file', 'filename', 'dirname', 'basename', 'extname', 'relative'];
      specs.batch = {
        actions: {
          list: 'processors/sources/list',
          data: 'processors/sources/data'
        }
      };
      specs.indices = {
        id: {
          fields: ['id'],
          primary: true
        },
        sources: {
          fields: ['processor']
        }
      };

      _core.tables.register('processors-sources', specs);
    }
  });
  /***********************************
  INTERNAL MODULE: ./realtime/realtime
  ***********************************/

  ims.set('./realtime/realtime', {
    hash: 2245449153,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Realtime = void 0;

      var _core = require("@beyond-js/plm/core");

      var _client = require("@beyond-js/backend/client");

      var _reactiveModel = require("@beyond-js/inspect/reactive-model");

      const {
        reports
      } = _core.realtime;
      /*bundle*/

      const Realtime = new class extends _reactiveModel.ReactiveModel {
        async initialise() {
          const backend = await _client.backends.get("@beyond-js/inspect");
          const socket = await backend.socket;
          socket.on("client:plm/list/update", message => reports.list.update(message.table, message.filter));
          socket.on("server:plm/list/update", message => reports.list.update(message.table, message.filter));
          socket.on("client:plm/record/insert", message => reports.record.insert(message.table, message.id));
          socket.on("server:plm/record/insert", message => reports.record.insert(message.table, message.id));
          socket.on("client:plm/record/delete", message => reports.record.delete(message.table, message.id));
          socket.on("server:plm/record/delete", message => reports.record.delete(message.table, message.id));
          socket.on("client:plm/record/update", message => reports.record.update(message.table, message.id));
          socket.on("server:plm/record/update", message => reports.record.update(message.table, message.id));
          socket.on("client:plm/record/field/update", message => reports.record.update(message.table, message.id, message.field, message.value));
          socket.on("server:plm/record/field/update", message => reports.record.update(message.table, message.id, message.field, message.value));
        }

      }();
      exports.Realtime = Realtime;
    }
  });
  /*******************************
  INTERNAL MODULE: ./run-time/item
  *******************************/

  ims.set('./run-time/item', {
    hash: 822198534,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.RunTimeError = void 0;

      var _reactiveModel = require("@beyond-js/inspect/reactive-model");
      /*bundle*/


      class RunTimeError extends _reactiveModel.ReactiveModel {
        #application;

        get application() {
          return this.#application;
        }

        #type;

        get type() {
          return this.#type;
        }

        #error;

        get error() {
          return this.#error;
        }

        #trace = [];

        get trace() {
          return this.#trace;
        }

        process(message) {
          this.#application = message.application;
          this.#type = message.message.type;
          if (!message.message.exc) return;
          const trace = message.message.exc.split(`\n`);
          this.#error = trace.shift();

          const process = item => {
            let trace;
            trace = item.replace(/\s*at /, '');
            trace = trace.split(/[\s]/);
            let method;
            let detail = trace[1];

            if (trace.length === 3) {
              method = trace[1];
              detail = trace[2];
            }

            const type = trace[0].replace(/\[|]/g, '');
            detail = detail.replace(/\(|\)/g, '');
            const split = detail.split(':');
            let [bundle, line, column] = split;
            this.#trace.push({
              type: type,
              method: method,
              bundle: bundle,
              line: line,
              column: column
            });
          };

          trace.forEach(process);
        }

        constructor(message) {
          super();
          this.process = this.process.bind(this);
          this.process(message);
        }

      }

      exports.RunTimeError = RunTimeError;
    }
  });
  /**********************************
  INTERNAL MODULE: ./run-time/manager
  **********************************/

  ims.set('./run-time/manager', {
    hash: 2791850620,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.RunTimeManager = void 0;

      var _beyond_context = require("beyond_context");

      var _reactiveModel = require("@beyond-js/inspect/reactive-model");

      var _item = require("./item");
      /*bundle*/


      class RunTimeManager extends _reactiveModel.ReactiveModel {
        #LIMIT = 20;
        #items = [];

        get items() {
          return this.#items;
        }

        clean(all = false) {
          if (all) {
            this.#items.length = 0;
            return;
          }

          this.#items.shift();
        }

        process(message) {
          if (this.#items.length === this.#LIMIT) this.#items.shift();
          this.#items.push(new _item.RunTimeError(message));
        }

        async initialise() {
          const socket = await _beyond_context.bundle.container.socket;
          socket.on('bees.log', this.process);
        }

        constructor() {
          super();
          this.process = this.process.bind(this);
          this.initialise().catch(exc => console.error(exc.stack));
        }

      }

      exports.RunTimeManager = RunTimeManager;
    }
  });
  /*******************************
  INTERNAL MODULE: ./server/config
  *******************************/

  ims.set('./server/config', {
    hash: 450104069,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ServerConfig = void 0;

      var _beyond_context = require("beyond_context");

      var _core = require("@beyond-js/kernel/core");

      class ServerConfig {
        #events = new _core.Events();
        #value;

        get value() {
          return this.#value;
        }

        async _fetch() {
          this.#value = _beyond_context.module.execute('server/config');
          this.#events.trigger('change');
          return this.value;
        }

        #promise;

        async fetch() {
          if (this.#promise) return this.#promise;
          this.#promise = await this._fetch();
        }

      }

      exports.ServerConfig = ServerConfig;
    }
  });
  /*******************************
  INTERNAL MODULE: ./server/server
  *******************************/

  ims.set('./server/server', {
    hash: 2530801849,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.BeyondServer = void 0;

      var _config = require("./config");

      class Server {
        #config = new _config.ServerConfig();

        get config() {
          return this.#config;
        }

      }

      const BeyondServer = new Server();
      exports.BeyondServer = BeyondServer;
    }
  });
  /********************************
  INTERNAL MODULE: ./sources/source
  ********************************/

  ims.set('./sources/source', {
    hash: 2709423454,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Source = void 0;

      var _beyond_context = require("beyond_context");

      var _core = require("@beyond-js/plm/core");

      class Source extends _core.Item {
        #isFavorite;

        get isFavorite() {
          return this.#isFavorite;
        }

        set isFavorite(value) {
          if (value === this.#isFavorite) return;
          this.#isFavorite = value;
          this.node.trigger('favorite.changed');
        }

        constructor(table, specs) {
          super(table, specs);
        }

        async save(specs) {
          return _beyond_context.module.execute('/sources/save', specs);
        }

        async rename(specs) {
          return _beyond_context.module.execute('/sources/rename', specs);
        }

        async delete() {
          return _beyond_context.module.execute('/sources/delete', {
            target: this.file
          });
        }

        async format(params) {
          return _beyond_context.module.execute('/sources/format', params);
        }

      }

      exports.Source = Source;
    }
  });
  /*********************************************
  INTERNAL MODULE: ./templates/applications/item
  *********************************************/

  ims.set('./templates/applications/item', {
    hash: 508145257,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TemplateApplication = void 0;

      var _beyond_context = require("beyond_context");

      var _file = require("../../file/file");
      /*bundle*/


      class TemplateApplication extends _file.File {
        get id() {
          return this.fields.get('id').value;
        }

        get path() {
          return this.fields.get('path').value;
        }

        get processor() {
          return this.fields.get('processor').value;
        }

        get files() {
          return this.fields.get('files').value ?? [];
        }

        get errors() {
          return this.fields.get('errors').value ?? [];
        }

        get warnings() {
          return this.fields.get('warnings').value ?? [];
        }

        get sources() {
          const sources = this.properties.get('sources');
          return sources && sources.value;
        }

        constructor(specs) {
          super('template-application', specs);
        }

        async createFile(specs) {
          const params = {
            id: this.id,
            type: 'template-application',
            filename: specs.filename
          };
          return _beyond_context.module.execute('/sources/create', params);
        }

      }

      exports.TemplateApplication = TemplateApplication;
    }
  });
  /*************************************************
  INTERNAL MODULE: ./templates/applications/register
  *************************************************/

  ims.set('./templates/applications/register', {
    hash: 4126915167,
    creator: function (require, exports) {
      "use strict";

      var _core = require("@beyond-js/plm/core");

      var _beyond_context = require("beyond_context");

      var _collection = require("./sources/collection");

      const specs = {};
      specs.module = _beyond_context.module;
      specs.cache = false;
      specs.fields = ['id', 'processor', 'path', 'files', 'errors', 'warnings'];
      specs.properties = {
        sources: {
          Collection: _collection.TemplateApplicationsSources,
          table: 'template-application-sources',
          filter: [{
            field: 'application',
            source: 'id'
          }]
        }
      };
      specs.batch = {
        actions: {
          list: '',
          data: 'templates/applications/data'
        }
      };
      specs.indices = {
        id: {
          fields: ['id'],
          primary: true
        }
      };

      _core.tables.register('template-application', specs);
    }
  });
  /***********************************************************
  INTERNAL MODULE: ./templates/applications/sources/collection
  ***********************************************************/

  ims.set('./templates/applications/sources/collection', {
    hash: 533821071,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TemplateApplicationsSources = void 0;

      var _core = require("@beyond-js/plm/core");

      var _item = require("./item");
      /*bundle*/


      class TemplateApplicationsSources extends _core.Collection {
        constructor(specs) {
          super('template-application-sources', _item.TemplateApplicationsSource, specs);
        }

      }

      exports.TemplateApplicationsSources = TemplateApplicationsSources;
    }
  });
  /*****************************************************
  INTERNAL MODULE: ./templates/applications/sources/item
  *****************************************************/

  ims.set('./templates/applications/sources/item', {
    hash: 1534680482,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TemplateApplicationsSource = void 0;

      var _source = require("../../../sources/source");
      /*bundle*/


      class TemplateApplicationsSource extends _source.Source {
        get id() {
          return this.fields.get('id').value;
        }

        get version() {
          return this.fields.get('version').value;
        }

        get processor() {
          return this.fields.get('processor').value;
        }

        get code() {
          return this.fields.get('code').value;
        }

        get file() {
          return this.fields.get('file').value;
        }

        get filename() {
          return this.fields.get('filename').value;
        }

        get dirname() {
          return this.fields.get('dirname').value;
        }

        get basename() {
          return this.fields.get('basename').value;
        }

        get extname() {
          return this.fields.get('extname').value;
        }

        get relative() {
          return this.fields.get('relative').value;
        }

        get type() {
          return 'template';
        }

        constructor(specs) {
          super('template-application-sources', specs);
        }

      }

      exports.TemplateApplicationsSource = TemplateApplicationsSource;
    }
  });
  /*********************************************************
  INTERNAL MODULE: ./templates/applications/sources/register
  *********************************************************/

  ims.set('./templates/applications/sources/register', {
    hash: 930964777,
    creator: function (require, exports) {
      "use strict";

      var _core = require("@beyond-js/plm/core");

      var _beyond_context = require("beyond_context");

      const specs = {};
      specs.module = _beyond_context.module;
      specs.cache = false;
      specs.fields = ['id', 'version', 'processor', 'code', 'file', 'filename', 'dirname', 'basename', 'extname', 'relative'];
      specs.batch = {
        actions: {
          list: 'templates/applications/sources/list',
          data: 'templates/applications/sources/data'
        }
      };
      specs.indices = {
        id: {
          fields: ['id'],
          primary: true
        },
        sources: {
          fields: ['application']
        }
      };

      _core.tables.register('template-application-sources', specs);
    }
  });
  /*********************************************
  INTERNAL MODULE: ./templates/global/collection
  *********************************************/

  ims.set('./templates/global/collection', {
    hash: 3773540169,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TemplateGlobals = void 0;

      var _core = require("@beyond-js/plm/core");

      var _item = require("./item");
      /*bundle*/


      class TemplateGlobals extends _core.Collection {
        constructor(specs) {
          super('template-global', _item.TemplateGlobal, specs);
        }

      }

      exports.TemplateGlobals = TemplateGlobals;
    }
  });
  /***************************************
  INTERNAL MODULE: ./templates/global/item
  ***************************************/

  ims.set('./templates/global/item', {
    hash: 1710173658,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TemplateGlobal = void 0;

      var _core = require("@beyond-js/plm/core");

      var _beyond_context = require("beyond_context");
      /*bundle*/


      class TemplateGlobal extends _core.Item {
        get id() {
          return this.fields.get('id').value;
        }

        get path() {
          return this.fields.get('path').value;
        }

        get processor() {
          return this.fields.get('processor').value;
        }

        get files() {
          return this.fields.get('files').value ?? [];
        }

        get errors() {
          return this.fields.get('errors').value ?? [];
        }

        get warnings() {
          return this.fields.get('warnings').value ?? [];
        }

        get sources() {
          const sources = this.properties.get('sources');
          return sources && sources.value;
        }

        constructor(specs) {
          super('template-global', specs);
        }

        async createFile(specs) {
          const params = {
            id: this.id,
            type: 'template-global',
            filename: specs.filename
          };
          return _beyond_context.module.execute('/sources/create', params);
        }

      }

      exports.TemplateGlobal = TemplateGlobal;
    }
  });
  /*******************************************
  INTERNAL MODULE: ./templates/global/register
  *******************************************/

  ims.set('./templates/global/register', {
    hash: 2731723347,
    creator: function (require, exports) {
      "use strict";

      var _core = require("@beyond-js/plm/core");

      var _beyond_context = require("beyond_context");

      var _collection = require("./sources/collection");

      const specs = {};
      specs.module = _beyond_context.module;
      specs.cache = false;
      specs.fields = ['id', 'processor', 'path', 'files', 'errors', 'warnings'];
      specs.properties = {
        sources: {
          Collection: _collection.TemplateGlobalSources,
          table: 'template-global-sources',
          filter: [{
            field: 'application',
            source: 'id'
          }]
        }
      };
      specs.batch = {
        actions: {
          list: '',
          data: 'templates/global/data'
        }
      };
      specs.indices = {
        id: {
          fields: ['id'],
          primary: true
        }
      };

      _core.tables.register('template-global', specs);
    }
  });
  /*****************************************************
  INTERNAL MODULE: ./templates/global/sources/collection
  *****************************************************/

  ims.set('./templates/global/sources/collection', {
    hash: 235496253,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TemplateGlobalSources = void 0;

      var _core = require("@beyond-js/plm/core");

      var _item = require("./item");
      /*bundle*/


      class TemplateGlobalSources extends _core.Collection {
        constructor(specs) {
          super('template-global-sources', _item.TemplateGlobalSource, specs);
        }

      }

      exports.TemplateGlobalSources = TemplateGlobalSources;
    }
  });
  /***********************************************
  INTERNAL MODULE: ./templates/global/sources/item
  ***********************************************/

  ims.set('./templates/global/sources/item', {
    hash: 2299205100,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TemplateGlobalSource = void 0;

      var _source = require("../../../sources/source");
      /*bundle*/


      class TemplateGlobalSource extends _source.Source {
        get id() {
          return this.fields.get('id').value;
        }

        get version() {
          return this.fields.get('version').value;
        }

        get processor() {
          return this.fields.get('processor').value;
        }

        get code() {
          return this.fields.get('code').value;
        }

        get file() {
          return this.fields.get('file').value;
        }

        get filename() {
          return this.fields.get('filename').value;
        }

        get dirname() {
          return this.fields.get('dirname').value;
        }

        get basename() {
          return this.fields.get('basename').value;
        }

        get extname() {
          return this.fields.get('extname').value;
        }

        get relative() {
          return this.fields.get('relative').value;
        }

        get type() {
          return 'template';
        }

        constructor(specs) {
          super('template-global-sources', specs);
        }

      }

      exports.TemplateGlobalSource = TemplateGlobalSource;
    }
  });
  /***************************************************
  INTERNAL MODULE: ./templates/global/sources/register
  ***************************************************/

  ims.set('./templates/global/sources/register', {
    hash: 1097668843,
    creator: function (require, exports) {
      "use strict";

      var _core = require("@beyond-js/plm/core");

      var _beyond_context = require("beyond_context");

      const specs = {};
      specs.module = _beyond_context.module;
      specs.cache = false;
      specs.fields = ['id', 'version', 'processor', 'code', 'file', 'filename', 'dirname', 'basename', 'extname', 'relative'];
      specs.batch = {
        actions: {
          list: 'templates/global/sources/list',
          data: 'templates/global/sources/data'
        }
      };
      specs.indices = {
        id: {
          fields: ['id'],
          primary: true
        },
        sources: {
          fields: ['application']
        }
      };

      _core.tables.register('template-global-sources', specs);
    }
  });
  /********************************
  INTERNAL MODULE: ./templates/item
  ********************************/

  ims.set('./templates/item', {
    hash: 3331500643,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Template = void 0;

      var _core = require("@beyond-js/plm/core");
      /*bundle*/


      class Template extends _core.Item {
        get id() {
          return this.fields.get('id').value;
        }

        get path() {
          return this.fields.get('path').value;
        }

        get errors() {
          return this.fields.get('errors').value ?? [];
        }

        get warnings() {
          return this.fields.get('warnings').value ?? [];
        }

        get application() {
          const application = this.properties.get('application');
          return application && application.value;
        }

        get global() {
          const global = this.properties.get('global');
          return global && global.value;
        }

        get processors() {
          return this.properties.get('processors');
        }

        get overwrites() {
          const overwrites = this.properties.get('overwrites');
          return overwrites && overwrites.value;
        }

        constructor(specs) {
          super('templates', specs);
        }

      }

      exports.Template = Template;
    }
  });
  /*************************************************
  INTERNAL MODULE: ./templates/overwrites/collection
  *************************************************/

  ims.set('./templates/overwrites/collection', {
    hash: 3794646379,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TemplateOverwrites = void 0;

      var _core = require("@beyond-js/plm/core");

      var _item = require("./item");
      /*bundle*/


      class TemplateOverwrites extends _core.Collection {
        constructor(specs) {
          super('template-overwrites', _item.TemplateOverwrite, specs);
        }

      }

      exports.TemplateOverwrites = TemplateOverwrites;
    }
  });
  /*******************************************
  INTERNAL MODULE: ./templates/overwrites/item
  *******************************************/

  ims.set('./templates/overwrites/item', {
    hash: 52096291,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TemplateOverwrite = void 0;

      var _core = require("@beyond-js/plm/core");
      /*bundle*/


      class TemplateOverwrite extends _core.Item {
        get id() {
          return this.fields.get('id').value;
        }

        get path() {
          return this.fields.get('path').value;
        }

        get module() {
          return this.fields.get('module').value;
        }

        get bundle() {
          return this.fields.get('bundle').value;
        }

        get processor() {
          return this.fields.get('processor').value;
        }

        get errors() {
          return this.fields.get('errors').value ?? [];
        }

        get warnings() {
          return this.fields.get('warnings').value ?? [];
        }

        constructor(specs) {
          super('template-overwrites', specs);
        }

      }

      exports.TemplateOverwrite = TemplateOverwrite;
    }
  });
  /***********************************************
  INTERNAL MODULE: ./templates/overwrites/register
  ***********************************************/

  ims.set('./templates/overwrites/register', {
    hash: 1341698527,
    creator: function (require, exports) {
      "use strict";

      var _core = require("@beyond-js/plm/core");

      var _beyond_context = require("beyond_context");

      const specs = {};
      specs.module = _beyond_context.module;
      specs.cache = false;
      specs.fields = ['id', 'path', 'application', 'module', 'bundle', 'processor', 'errors', 'warnings'];
      specs.batch = {
        actions: {
          list: 'templates/overwrites/list',
          data: 'templates/overwrites/data'
        }
      };
      specs.indices = {
        id: {
          fields: ['id'],
          primary: true
        },
        byApplication: {
          fields: ['application']
        }
      };

      _core.tables.register('template-overwrites', specs);
    }
  });
  /*******************************************
  INTERNAL MODULE: ./templates/processors/item
  *******************************************/

  ims.set('./templates/processors/item', {
    hash: 597338308,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TemplateProcessor = void 0;

      var _beyond_context = require("beyond_context");

      var _file = require("../../file/file");
      /*bundle*/


      class TemplateProcessor extends _file.File {
        get id() {
          return this.fields.get('id').value;
        }

        get processor() {
          return this.fields.get('processor').value;
        }

        get path() {
          return this.fields.get('path').value;
        }

        get errors() {
          return this.fields.get('errors').value ?? [];
        }

        get warnings() {
          return this.fields.get('warnings').value ?? [];
        }

        get sources() {
          const sources = this.properties.get('sources');
          return sources && sources.value;
        }

        constructor(specs) {
          super('template-processors', specs);
        }

        async createFile(specs) {
          const params = {
            id: this.id,
            type: 'template-processors',
            filename: specs.filename
          };
          return _beyond_context.module.execute('/sources/create', params);
        }

      }

      exports.TemplateProcessor = TemplateProcessor;
    }
  });
  /***********************************************
  INTERNAL MODULE: ./templates/processors/register
  ***********************************************/

  ims.set('./templates/processors/register', {
    hash: 663822454,
    creator: function (require, exports) {
      "use strict";

      var _core = require("@beyond-js/plm/core");

      var _beyond_context = require("beyond_context");

      var _collection = require("./sources/collection");

      const specs = {};
      specs.module = _beyond_context.module;
      specs.cache = false;
      specs.fields = ['id', 'processor', 'path', 'errors', 'warnings'];
      specs.properties = {
        sources: {
          Collection: _collection.TemplateProcessorsSources,
          table: 'template-processors-sources',
          filter: [{
            field: 'id',
            source: 'id'
          }]
        }
      };
      specs.batch = {
        actions: {
          list: '',
          data: 'templates/processors/data'
        }
      };
      specs.indices = {
        id: {
          fields: ['id'],
          primary: true
        }
      };

      _core.tables.register('template-processors', specs);
    }
  });
  /*********************************************************
  INTERNAL MODULE: ./templates/processors/sources/collection
  *********************************************************/

  ims.set('./templates/processors/sources/collection', {
    hash: 1523196423,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TemplateProcessorsSources = void 0;

      var _core = require("@beyond-js/plm/core");

      var _item = require("./item");
      /*bundle*/


      class TemplateProcessorsSources extends _core.Collection {
        constructor(specs) {
          super('template-processors-sources', _item.TemplateProcessorsSource, specs);
        }

      }

      exports.TemplateProcessorsSources = TemplateProcessorsSources;
    }
  });
  /***************************************************
  INTERNAL MODULE: ./templates/processors/sources/item
  ***************************************************/

  ims.set('./templates/processors/sources/item', {
    hash: 4158603140,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TemplateProcessorsSource = void 0;

      var _source = require("../../../sources/source");
      /*bundle*/


      class TemplateProcessorsSource extends _source.Source {
        get id() {
          return this.fields.get('id').value;
        }

        get version() {
          return this.fields.get('version').value;
        }

        get processor() {
          return this.fields.get('processor').value;
        }

        get code() {
          return this.fields.get('code').value;
        }

        get file() {
          return this.fields.get('file').value;
        }

        get filename() {
          return this.fields.get('filename').value;
        }

        get dirname() {
          return this.fields.get('dirname').value;
        }

        get basename() {
          return this.fields.get('basename').value;
        }

        get extname() {
          return this.fields.get('extname').value;
        }

        get relative() {
          return this.fields.get('relative').value;
        }

        get errors() {
          return this.fields.get('errors').value ?? [];
        }

        get warnings() {
          return this.fields.get('warnings').value ?? [];
        }

        get type() {
          return 'processor';
        }

        constructor(specs) {
          super('template-processors-sources', specs);
        }

      }

      exports.TemplateProcessorsSource = TemplateProcessorsSource;
    }
  });
  /*******************************************************
  INTERNAL MODULE: ./templates/processors/sources/register
  *******************************************************/

  ims.set('./templates/processors/sources/register', {
    hash: 861523246,
    creator: function (require, exports) {
      "use strict";

      var _core = require("@beyond-js/plm/core");

      var _beyond_context = require("beyond_context");

      const specs = {};
      specs.module = _beyond_context.module;
      specs.cache = false;
      specs.fields = ['id', 'version', 'processor', 'code', 'file', 'filename', 'dirname', 'basename', 'extname', 'relative', 'errors', 'warnings'];
      specs.batch = {
        actions: {
          list: 'templates/processors/sources/list',
          data: 'templates/processors/sources/data'
        }
      };
      specs.indices = {
        id: {
          fields: ['id'],
          primary: true
        },
        sources: {
          fields: ['id']
        }
      };

      _core.tables.register('template-processors-sources', specs);
    }
  });
  /************************************
  INTERNAL MODULE: ./templates/register
  ************************************/

  ims.set('./templates/register', {
    hash: 1639482751,
    creator: function (require, exports) {
      "use strict";

      var _core = require("@beyond-js/plm/core");

      var _beyond_context = require("beyond_context");

      var _item = require("./global/item");

      var _item2 = require("./processors/item");

      var _item3 = require("./applications/item");

      var _collection = require("./overwrites/collection");

      const specs = {};
      specs.module = _beyond_context.module;
      specs.cache = false;
      specs.fields = ['id', 'application', 'processors', 'path', 'errors', 'warnings'];
      specs.properties = {
        application: {
          Item: _item3.TemplateApplication,
          table: 'template-application',
          identifier: [{
            field: 'id',
            source: 'id'
          }]
        },
        global: {
          Item: _item.TemplateGlobal,
          table: 'template-global',
          identifier: [{
            field: 'id',
            source: 'id'
          }]
        },
        processors: {
          Items: _item2.TemplateProcessor,
          table: 'template-processors',
          identifier: {
            field: 'id',
            source: 'processors'
          }
        },
        overwrites: {
          Collection: _collection.TemplateOverwrites,
          table: 'template-overwrites',
          filter: [{
            field: 'application',
            source: 'id'
          }]
        }
      };
      specs.batch = {
        actions: {
          list: '',
          data: 'templates/data'
        }
      };
      specs.indices = {
        id: {
          fields: ['id'],
          primary: true
        }
      };

      _core.tables.register('templates', specs);
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./applications/collection",
    "from": "Applications",
    "name": "Applications"
  }, {
    "im": "./applications/deployments/collection",
    "from": "ApplicationDeployments",
    "name": "ApplicationDeployments"
  }, {
    "im": "./applications/deployments/item",
    "from": "ApplicationDeployment",
    "name": "ApplicationDeployment"
  }, {
    "im": "./applications/item",
    "from": "Application",
    "name": "Application"
  }, {
    "im": "./applications/modules/collection",
    "from": "ApplicationModules",
    "name": "ApplicationModules"
  }, {
    "im": "./applications/modules/item",
    "from": "ApplicationModule",
    "name": "ApplicationModule"
  }, {
    "im": "./applications/static/collection",
    "from": "ApplicationStatics",
    "name": "ApplicationStatics"
  }, {
    "im": "./applications/static/item",
    "from": "ApplicationStatic",
    "name": "ApplicationStatic"
  }, {
    "im": "./bundles/consumers/collection",
    "from": "Consumers",
    "name": "Consumers"
  }, {
    "im": "./bundles/consumers/item",
    "from": "Consumer",
    "name": "Consumer"
  }, {
    "im": "./bundles/dependencies/collection",
    "from": "BundleDependencies",
    "name": "BundleDependencies"
  }, {
    "im": "./bundles/dependencies/item",
    "from": "BundleDependency",
    "name": "BundleDependency"
  }, {
    "im": "./bundles/item",
    "from": "Bundle",
    "name": "Bundle"
  }, {
    "im": "./bundles/packagers/collection",
    "from": "Packagers",
    "name": "Packagers"
  }, {
    "im": "./bundles/packagers/compilers/collection",
    "from": "PackagerCompilers",
    "name": "PackagerCompilers"
  }, {
    "im": "./bundles/packagers/compilers/item",
    "from": "PackagerCompiler",
    "name": "PackagerCompiler"
  }, {
    "im": "./bundles/packagers/item",
    "from": "Packager",
    "name": "Packager"
  }, {
    "im": "./dashboard/model",
    "from": "Dashboard",
    "name": "Dashboard"
  }, {
    "im": "./declarations/collection",
    "from": "Declarations",
    "name": "Declarations"
  }, {
    "im": "./declarations/item",
    "from": "Declaration",
    "name": "Declaration"
  }, {
    "im": "./dependencies/collection",
    "from": "TransversalDependencies",
    "name": "TransversalDependencies"
  }, {
    "im": "./dependencies/item",
    "from": "TransversalDependency",
    "name": "TransversalDependency"
  }, {
    "im": "./distributions/collection",
    "from": "ApplicationDistributions",
    "name": "ApplicationDistributions"
  }, {
    "im": "./distributions/item",
    "from": "ApplicationDistribution",
    "name": "ApplicationDistribution"
  }, {
    "im": "./distributions/launchers/item",
    "from": "DistributionLauncher",
    "name": "DistributionLauncher"
  }, {
    "im": "./globals-bundles/collection",
    "from": "GlobalBundles",
    "name": "GlobalBundles"
  }, {
    "im": "./globals-bundles/item",
    "from": "GlobalBundle",
    "name": "GlobalBundle"
  }, {
    "im": "./modules/collection",
    "from": "Modules",
    "name": "Modules"
  }, {
    "im": "./modules/declarations",
    "from": "ModuleDeclarations",
    "name": "ModuleDeclarations"
  }, {
    "im": "./modules/item",
    "from": "Module",
    "name": "Module"
  }, {
    "im": "./modules/static/collection",
    "from": "ModuleStatics",
    "name": "ModuleStatics"
  }, {
    "im": "./modules/static/item",
    "from": "ModuleStatic",
    "name": "ModuleStatic"
  }, {
    "im": "./modules/texts",
    "from": "ModuleTexts",
    "name": "ModuleTexts"
  }, {
    "im": "./processors/dependencies/collection",
    "from": "ProcessorDependencies",
    "name": "ProcessorDependencies"
  }, {
    "im": "./processors/dependencies/item",
    "from": "ProcessorDependency",
    "name": "ProcessorDependency"
  }, {
    "im": "./processors/item",
    "from": "Processor",
    "name": "Processor"
  }, {
    "im": "./processors/overwrites/collection",
    "from": "ProcessorOverwrites",
    "name": "ProcessorOverwrites"
  }, {
    "im": "./processors/overwrites/item",
    "from": "ProcessorOverwrite",
    "name": "ProcessorOverwrite"
  }, {
    "im": "./processors/sources/collection",
    "from": "ProcessorSources",
    "name": "ProcessorSources"
  }, {
    "im": "./processors/sources/item",
    "from": "ProcessorSource",
    "name": "ProcessorSource"
  }, {
    "im": "./realtime/realtime",
    "from": "Realtime",
    "name": "Realtime"
  }, {
    "im": "./run-time/item",
    "from": "RunTimeError",
    "name": "RunTimeError"
  }, {
    "im": "./run-time/manager",
    "from": "RunTimeManager",
    "name": "RunTimeManager"
  }, {
    "im": "./templates/applications/item",
    "from": "TemplateApplication",
    "name": "TemplateApplication"
  }, {
    "im": "./templates/applications/sources/collection",
    "from": "TemplateApplicationsSources",
    "name": "TemplateApplicationsSources"
  }, {
    "im": "./templates/applications/sources/item",
    "from": "TemplateApplicationsSource",
    "name": "TemplateApplicationsSource"
  }, {
    "im": "./templates/global/collection",
    "from": "TemplateGlobals",
    "name": "TemplateGlobals"
  }, {
    "im": "./templates/global/item",
    "from": "TemplateGlobal",
    "name": "TemplateGlobal"
  }, {
    "im": "./templates/global/sources/collection",
    "from": "TemplateGlobalSources",
    "name": "TemplateGlobalSources"
  }, {
    "im": "./templates/global/sources/item",
    "from": "TemplateGlobalSource",
    "name": "TemplateGlobalSource"
  }, {
    "im": "./templates/item",
    "from": "Template",
    "name": "Template"
  }, {
    "im": "./templates/overwrites/collection",
    "from": "TemplateOverwrites",
    "name": "TemplateOverwrites"
  }, {
    "im": "./templates/overwrites/item",
    "from": "TemplateOverwrite",
    "name": "TemplateOverwrite"
  }, {
    "im": "./templates/processors/item",
    "from": "TemplateProcessor",
    "name": "TemplateProcessor"
  }, {
    "im": "./templates/processors/sources/collection",
    "from": "TemplateProcessorsSources",
    "name": "TemplateProcessorsSources"
  }, {
    "im": "./templates/processors/sources/item",
    "from": "TemplateProcessorsSource",
    "name": "TemplateProcessorsSource"
  }];
  let Applications, ApplicationDeployments, ApplicationDeployment, Application, ApplicationModules, ApplicationModule, ApplicationStatics, ApplicationStatic, Consumers, Consumer, BundleDependencies, BundleDependency, Bundle, Packagers, PackagerCompilers, PackagerCompiler, Packager, Dashboard, Declarations, Declaration, TransversalDependencies, TransversalDependency, ApplicationDistributions, ApplicationDistribution, DistributionLauncher, GlobalBundles, GlobalBundle, Modules, ModuleDeclarations, Module, ModuleStatics, ModuleStatic, ModuleTexts, ProcessorDependencies, ProcessorDependency, Processor, ProcessorOverwrites, ProcessorOverwrite, ProcessorSources, ProcessorSource, Realtime, RunTimeError, RunTimeManager, TemplateApplication, TemplateApplicationsSources, TemplateApplicationsSource, TemplateGlobals, TemplateGlobal, TemplateGlobalSources, TemplateGlobalSource, Template, TemplateOverwrites, TemplateOverwrite, TemplateProcessor, TemplateProcessorsSources, TemplateProcessorsSource; // Module exports

  _exports.TemplateProcessorsSource = TemplateProcessorsSource;
  _exports.TemplateProcessorsSources = TemplateProcessorsSources;
  _exports.TemplateProcessor = TemplateProcessor;
  _exports.TemplateOverwrite = TemplateOverwrite;
  _exports.TemplateOverwrites = TemplateOverwrites;
  _exports.Template = Template;
  _exports.TemplateGlobalSource = TemplateGlobalSource;
  _exports.TemplateGlobalSources = TemplateGlobalSources;
  _exports.TemplateGlobal = TemplateGlobal;
  _exports.TemplateGlobals = TemplateGlobals;
  _exports.TemplateApplicationsSource = TemplateApplicationsSource;
  _exports.TemplateApplicationsSources = TemplateApplicationsSources;
  _exports.TemplateApplication = TemplateApplication;
  _exports.RunTimeManager = RunTimeManager;
  _exports.RunTimeError = RunTimeError;
  _exports.Realtime = Realtime;
  _exports.ProcessorSource = ProcessorSource;
  _exports.ProcessorSources = ProcessorSources;
  _exports.ProcessorOverwrite = ProcessorOverwrite;
  _exports.ProcessorOverwrites = ProcessorOverwrites;
  _exports.Processor = Processor;
  _exports.ProcessorDependency = ProcessorDependency;
  _exports.ProcessorDependencies = ProcessorDependencies;
  _exports.ModuleTexts = ModuleTexts;
  _exports.ModuleStatic = ModuleStatic;
  _exports.ModuleStatics = ModuleStatics;
  _exports.Module = Module;
  _exports.ModuleDeclarations = ModuleDeclarations;
  _exports.Modules = Modules;
  _exports.GlobalBundle = GlobalBundle;
  _exports.GlobalBundles = GlobalBundles;
  _exports.DistributionLauncher = DistributionLauncher;
  _exports.ApplicationDistribution = ApplicationDistribution;
  _exports.ApplicationDistributions = ApplicationDistributions;
  _exports.TransversalDependency = TransversalDependency;
  _exports.TransversalDependencies = TransversalDependencies;
  _exports.Declaration = Declaration;
  _exports.Declarations = Declarations;
  _exports.Dashboard = Dashboard;
  _exports.Packager = Packager;
  _exports.PackagerCompiler = PackagerCompiler;
  _exports.PackagerCompilers = PackagerCompilers;
  _exports.Packagers = Packagers;
  _exports.Bundle = Bundle;
  _exports.BundleDependency = BundleDependency;
  _exports.BundleDependencies = BundleDependencies;
  _exports.Consumer = Consumer;
  _exports.Consumers = Consumers;
  _exports.ApplicationStatic = ApplicationStatic;
  _exports.ApplicationStatics = ApplicationStatics;
  _exports.ApplicationModule = ApplicationModule;
  _exports.ApplicationModules = ApplicationModules;
  _exports.Application = Application;
  _exports.ApplicationDeployment = ApplicationDeployment;
  _exports.ApplicationDeployments = ApplicationDeployments;
  _exports.Applications = Applications;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'Applications') && (_exports.Applications = Applications = require ? require('./applications/collection').Applications : value);
    (require || prop === 'ApplicationDeployments') && (_exports.ApplicationDeployments = ApplicationDeployments = require ? require('./applications/deployments/collection').ApplicationDeployments : value);
    (require || prop === 'ApplicationDeployment') && (_exports.ApplicationDeployment = ApplicationDeployment = require ? require('./applications/deployments/item').ApplicationDeployment : value);
    (require || prop === 'Application') && (_exports.Application = Application = require ? require('./applications/item').Application : value);
    (require || prop === 'ApplicationModules') && (_exports.ApplicationModules = ApplicationModules = require ? require('./applications/modules/collection').ApplicationModules : value);
    (require || prop === 'ApplicationModule') && (_exports.ApplicationModule = ApplicationModule = require ? require('./applications/modules/item').ApplicationModule : value);
    (require || prop === 'ApplicationStatics') && (_exports.ApplicationStatics = ApplicationStatics = require ? require('./applications/static/collection').ApplicationStatics : value);
    (require || prop === 'ApplicationStatic') && (_exports.ApplicationStatic = ApplicationStatic = require ? require('./applications/static/item').ApplicationStatic : value);
    (require || prop === 'Consumers') && (_exports.Consumers = Consumers = require ? require('./bundles/consumers/collection').Consumers : value);
    (require || prop === 'Consumer') && (_exports.Consumer = Consumer = require ? require('./bundles/consumers/item').Consumer : value);
    (require || prop === 'BundleDependencies') && (_exports.BundleDependencies = BundleDependencies = require ? require('./bundles/dependencies/collection').BundleDependencies : value);
    (require || prop === 'BundleDependency') && (_exports.BundleDependency = BundleDependency = require ? require('./bundles/dependencies/item').BundleDependency : value);
    (require || prop === 'Bundle') && (_exports.Bundle = Bundle = require ? require('./bundles/item').Bundle : value);
    (require || prop === 'Packagers') && (_exports.Packagers = Packagers = require ? require('./bundles/packagers/collection').Packagers : value);
    (require || prop === 'PackagerCompilers') && (_exports.PackagerCompilers = PackagerCompilers = require ? require('./bundles/packagers/compilers/collection').PackagerCompilers : value);
    (require || prop === 'PackagerCompiler') && (_exports.PackagerCompiler = PackagerCompiler = require ? require('./bundles/packagers/compilers/item').PackagerCompiler : value);
    (require || prop === 'Packager') && (_exports.Packager = Packager = require ? require('./bundles/packagers/item').Packager : value);
    (require || prop === 'Dashboard') && (_exports.Dashboard = Dashboard = require ? require('./dashboard/model').Dashboard : value);
    (require || prop === 'Declarations') && (_exports.Declarations = Declarations = require ? require('./declarations/collection').Declarations : value);
    (require || prop === 'Declaration') && (_exports.Declaration = Declaration = require ? require('./declarations/item').Declaration : value);
    (require || prop === 'TransversalDependencies') && (_exports.TransversalDependencies = TransversalDependencies = require ? require('./dependencies/collection').TransversalDependencies : value);
    (require || prop === 'TransversalDependency') && (_exports.TransversalDependency = TransversalDependency = require ? require('./dependencies/item').TransversalDependency : value);
    (require || prop === 'ApplicationDistributions') && (_exports.ApplicationDistributions = ApplicationDistributions = require ? require('./distributions/collection').ApplicationDistributions : value);
    (require || prop === 'ApplicationDistribution') && (_exports.ApplicationDistribution = ApplicationDistribution = require ? require('./distributions/item').ApplicationDistribution : value);
    (require || prop === 'DistributionLauncher') && (_exports.DistributionLauncher = DistributionLauncher = require ? require('./distributions/launchers/item').DistributionLauncher : value);
    (require || prop === 'GlobalBundles') && (_exports.GlobalBundles = GlobalBundles = require ? require('./globals-bundles/collection').GlobalBundles : value);
    (require || prop === 'GlobalBundle') && (_exports.GlobalBundle = GlobalBundle = require ? require('./globals-bundles/item').GlobalBundle : value);
    (require || prop === 'Modules') && (_exports.Modules = Modules = require ? require('./modules/collection').Modules : value);
    (require || prop === 'ModuleDeclarations') && (_exports.ModuleDeclarations = ModuleDeclarations = require ? require('./modules/declarations').ModuleDeclarations : value);
    (require || prop === 'Module') && (_exports.Module = Module = require ? require('./modules/item').Module : value);
    (require || prop === 'ModuleStatics') && (_exports.ModuleStatics = ModuleStatics = require ? require('./modules/static/collection').ModuleStatics : value);
    (require || prop === 'ModuleStatic') && (_exports.ModuleStatic = ModuleStatic = require ? require('./modules/static/item').ModuleStatic : value);
    (require || prop === 'ModuleTexts') && (_exports.ModuleTexts = ModuleTexts = require ? require('./modules/texts').ModuleTexts : value);
    (require || prop === 'ProcessorDependencies') && (_exports.ProcessorDependencies = ProcessorDependencies = require ? require('./processors/dependencies/collection').ProcessorDependencies : value);
    (require || prop === 'ProcessorDependency') && (_exports.ProcessorDependency = ProcessorDependency = require ? require('./processors/dependencies/item').ProcessorDependency : value);
    (require || prop === 'Processor') && (_exports.Processor = Processor = require ? require('./processors/item').Processor : value);
    (require || prop === 'ProcessorOverwrites') && (_exports.ProcessorOverwrites = ProcessorOverwrites = require ? require('./processors/overwrites/collection').ProcessorOverwrites : value);
    (require || prop === 'ProcessorOverwrite') && (_exports.ProcessorOverwrite = ProcessorOverwrite = require ? require('./processors/overwrites/item').ProcessorOverwrite : value);
    (require || prop === 'ProcessorSources') && (_exports.ProcessorSources = ProcessorSources = require ? require('./processors/sources/collection').ProcessorSources : value);
    (require || prop === 'ProcessorSource') && (_exports.ProcessorSource = ProcessorSource = require ? require('./processors/sources/item').ProcessorSource : value);
    (require || prop === 'Realtime') && (_exports.Realtime = Realtime = require ? require('./realtime/realtime').Realtime : value);
    (require || prop === 'RunTimeError') && (_exports.RunTimeError = RunTimeError = require ? require('./run-time/item').RunTimeError : value);
    (require || prop === 'RunTimeManager') && (_exports.RunTimeManager = RunTimeManager = require ? require('./run-time/manager').RunTimeManager : value);
    (require || prop === 'TemplateApplication') && (_exports.TemplateApplication = TemplateApplication = require ? require('./templates/applications/item').TemplateApplication : value);
    (require || prop === 'TemplateApplicationsSources') && (_exports.TemplateApplicationsSources = TemplateApplicationsSources = require ? require('./templates/applications/sources/collection').TemplateApplicationsSources : value);
    (require || prop === 'TemplateApplicationsSource') && (_exports.TemplateApplicationsSource = TemplateApplicationsSource = require ? require('./templates/applications/sources/item').TemplateApplicationsSource : value);
    (require || prop === 'TemplateGlobals') && (_exports.TemplateGlobals = TemplateGlobals = require ? require('./templates/global/collection').TemplateGlobals : value);
    (require || prop === 'TemplateGlobal') && (_exports.TemplateGlobal = TemplateGlobal = require ? require('./templates/global/item').TemplateGlobal : value);
    (require || prop === 'TemplateGlobalSources') && (_exports.TemplateGlobalSources = TemplateGlobalSources = require ? require('./templates/global/sources/collection').TemplateGlobalSources : value);
    (require || prop === 'TemplateGlobalSource') && (_exports.TemplateGlobalSource = TemplateGlobalSource = require ? require('./templates/global/sources/item').TemplateGlobalSource : value);
    (require || prop === 'Template') && (_exports.Template = Template = require ? require('./templates/item').Template : value);
    (require || prop === 'TemplateOverwrites') && (_exports.TemplateOverwrites = TemplateOverwrites = require ? require('./templates/overwrites/collection').TemplateOverwrites : value);
    (require || prop === 'TemplateOverwrite') && (_exports.TemplateOverwrite = TemplateOverwrite = require ? require('./templates/overwrites/item').TemplateOverwrite : value);
    (require || prop === 'TemplateProcessor') && (_exports.TemplateProcessor = TemplateProcessor = require ? require('./templates/processors/item').TemplateProcessor : value);
    (require || prop === 'TemplateProcessorsSources') && (_exports.TemplateProcessorsSources = TemplateProcessorsSources = require ? require('./templates/processors/sources/collection').TemplateProcessorsSources : value);
    (require || prop === 'TemplateProcessorsSource') && (_exports.TemplateProcessorsSource = TemplateProcessorsSource = require ? require('./templates/processors/sources/item').TemplateProcessorsSource : value);
  };

  const __beyond_pkg = __pkg;
  _exports.__beyond_pkg = __beyond_pkg;
  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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N0JtQyIsIm5hbWVzIjpbIkFwcGxpY2F0aW9ucyIsIkNvbGxlY3Rpb24iLCJjb25zdHJ1Y3RvciIsInNwZWNzIiwiQXBwbGljYXRpb24iLCJBcHBsaWNhdGlvbkRlcGxveW1lbnRzIiwiQXBwbGljYXRpb25EZXBsb3ltZW50IiwiSXRlbSIsImlkIiwiZmllbGRzIiwiZ2V0IiwidmFsdWUiLCJ2YWxpZCIsImVycm9ycyIsImRpc3RyaWJ1dGlvbnMiLCJwcm9wZXJ0aWVzIiwiYWRkRGlzdHJpYnV0aW9uIiwicGFyYW1zIiwiYXBwbGljYXRpb25JZCIsImRpc3RyaWJ1dGlvbiIsIm1vZHVsZSIsImV4ZWN1dGUiLCJlIiwiY29uc29sZSIsImVycm9yIiwiY2FjaGUiLCJJdGVtcyIsIkFwcGxpY2F0aW9uRGlzdHJpYnV0aW9uIiwidGFibGUiLCJpZGVudGlmaWVyIiwiZmllbGQiLCJzb3VyY2UiLCJiYXRjaCIsImFjdGlvbnMiLCJsaXN0IiwiZGF0YSIsImluZGljZXMiLCJwcmltYXJ5IiwidGFibGVzIiwicmVnaXN0ZXIiLCJGaWxlIiwicGF0aCIsInNjb3BlIiwibmFtZSIsInNwZWNpZmllciIsInZzcGVjaWZpZXIiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZGV2ZWxvcGVyIiwidmVyc2lvbiIsImNvbm5lY3QiLCJob3N0cyIsInBvcnQiLCJtb2R1bGVzUGF0aCIsIndhcm5pbmdzIiwiYW0iLCJ0ZW1wbGF0ZSIsImRlcGxveW1lbnQiLCJzdGF0aWMiLCJzdGF0aWNzIiwicHJvY2VzcyIsInVybCIsInVuZGVmaW5lZCIsInRyaWdnZXJFdmVudCIsImV2ZW50Iiwibm9kZSIsInRyaWdnZXIiLCJBcHBsaWNhdGlvblByb2Nlc3MiLCJiaW5kIiwiY2hlY2tTdGF0aWMiLCJjcmVhdGVCYWNrZW5kIiwiZWRpdCIsInJvdXRlcyIsIml0ZW1zIiwiZm9yRWFjaCIsImJ1bmRsZXMiLCJidW5kbGUiLCJ0eXBlIiwicHVzaCIsInJvdXRlIiwiQXBwbGljYXRpb25Nb2R1bGVCdW5kbGUiLCJtb2R1bGVJZCIsImhhc1R4dCIsImhhcyIsIkFwcGxpY2F0aW9uTW9kdWxlcyIsIkFwcGxpY2F0aW9uTW9kdWxlIiwiY291bnRlcnMiLCJlbGVtZW50cyIsInRyZWUiLCJsYW5kZWQiLCJvdXRwdXQiLCJpdGVtIiwiZ2V0SXRlbXMiLCJjb250YWluZXIiLCJ0ZXh0IiwiZmlsdGVyIiwid2FybiIsImlzQXBwIiwiaW5jbHVkZXMiLCJpc0xpYnJhcnkiLCJ0ZXh0U2VhcmNoIiwid2lkZ2V0IiwiZ2V0QnVuZGxlIiwiYXBwbGljYXRpb24iLCJ2YWx1ZXMiLCJtYXAiLCJfX0NMQVNTX18iLCJ0b0xvd2VyQ2FzZSIsInByb2Nlc3NvcnNOYW1lcyIsInByb2Nlc3NvcnMiLCJwcm9jZXNzb3IiLCJoYXZlUHJvY2Vzc29yIiwiZmluZCIsImhhc1Byb2Nlc3NvciIsInNhdmVGaWVsZCIsImRpcm5hbWUiLCJobXIiLCJ0cyIsInRyYW5zcGlsZSIsImNsb25lIiwiZGVsZXRlIiwidGFyZ2V0IiwiY3JlYXRlRmlsZSIsInNwbGl0IiwiZmlsZW5hbWUiLCJhZGRCdW5kbGUiLCJNb2R1bGUiLCJCdW5kbGUiLCJjb3VudCIsImFwcGxpY2F0aW9ucyIsImJhdGNoZXMiLCJFdmVudHMiLCJtZXNzYWdlcyIsInByb2Nlc3NpbmciLCJwcm9jZXNzZWQiLCJvbk1lc3NhZ2UiLCJtZXNzYWdlIiwicHJlcGFyZSIsImJhY2tlbmQiLCJiYWNrZW5kcyIsInNvY2tldCIsIm9uIiwiZXhjIiwic3RhY2siLCJydW4iLCJidWlsZCIsImRlY2xhcmF0aW9ucyIsImNsZWFuIiwiT2JqZWN0IiwiYXNzaWduIiwiVGVtcGxhdGUiLCJpbW11dGFibGUiLCJBcHBsaWNhdGlvblN0YXRpY3MiLCJ1bmlxdWUiLCJBcHBsaWNhdGlvblN0YXRpYyIsIlNvdXJjZSIsImZpbGUiLCJiYXNlbmFtZSIsInJlbGF0aXZlIiwiZXh0bmFtZSIsInBhdGhuYW1lIiwiQ29uc3VtZXJzIiwiQ29uc3VtZXIiLCJidW5kbGVJZCIsInR1IiwiQnVuZGxlRGVwZW5kZW5jaWVzIiwiQnVuZGxlRGVwZW5kZW5jeSIsInN1YnBhdGgiLCJyZXNvdXJjZSIsInBsYXRmb3JtcyIsImxheW91dCIsInVwZGF0ZWQiLCJkZXN0cm95ZWQiLCJlbGVtZW50IiwiTWFwIiwic2V0IiwicGFja2FnZXJzIiwiY29uc3VtZXJzIiwiY29tcGlsZXJQcm9jZXNzb3JBY3RpdmF0ZSIsInByb2Nlc3Nvck5hbWUiLCJQYWNrYWdlcnMiLCJQYWNrYWdlciIsIlBhY2thZ2VyQ29tcGlsZXJzIiwiUGFja2FnZXJDb21waWxlciIsImRpYWdub3N0aWNzIiwiZ2VuZXJhbCIsImZpbGVzIiwib3ZlcndyaXRlcyIsImRlcGVuZGVuY2llcyIsImRpc3RyaWJ1dGlvbklkIiwiY29tcGlsZXJzIiwiUHJvY2Vzc29yIiwic2VsZWN0b3IiLCJhc3NpZ25lZCIsImFtSWQiLCJzbGljZSIsImxlbmd0aCIsImpvaW4iLCJEYXNoYm9hcmQiLCJSZWFjdGl2ZU1vZGVsIiwicmVhZHkiLCJ3ZCIsInZhbGlkUG9ydCIsImdldFdEIiwiY2F0Y2giLCJjbGVhbkNhY2hlIiwidmFsaWRhdGUiLCJoYXNoIiwiY2hlY2tQb3J0IiwiRXJyb3IiLCJyZXNwb25zZSIsImF2YWlsYWJsZVBvcnQiLCJpbnRlbnRzIiwiY29udCIsImF2YWlsYWJsZSIsIkRlY2xhcmF0aW9ucyIsIkRlY2xhcmF0aW9uIiwiY29kZSIsIlRyYW5zdmVyc2FsRGVwZW5kZW5jaWVzIiwiVHJhbnN2ZXJzYWxEZXBlbmRlbmN5IiwiQXBwbGljYXRpb25EaXN0cmlidXRpb25zIiwibG9jYWwiLCJzc3IiLCJwb3J0cyIsImFtZCIsInBsYXRmb3JtIiwiY29tcHJlc3MiLCJlbnZpcm9ubWVudCIsImRlZmF1bHQiLCJucG0iLCJtaW5pZnkiLCJsYXVuY2hlciIsImh0dHAiLCJpc05hTiIsInBhcnNlSW50IiwiaW5zcGVjdCIsImh0bWwiLCJjc3MiLCJqcyIsIm1vZGUiLCJzZXRWYWx1ZXMiLCJuZXdWYWx1ZXMiLCJEaXN0cmlidXRpb25MYXVuY2hlciIsInN0YXR1cyIsInBpZCIsInN0YXJ0Iiwic3RvcCIsInJlc3RhcnQiLCJkZWxldGVGb2xkZXIiLCJmb2xkZXIiLCJHbG9iYWxCdW5kbGVzIiwiR2xvYmFsQnVuZGxlIiwibXVsdGlsYW5ndWFnZSIsIk1vZHVsZXMiLCJNb2R1bGVEZWNsYXJhdGlvbnMiLCJmZXRjaGluZyIsInBhcmVudCIsInVwZGF0ZSIsImFjdGlvbiIsInRleHRzIiwiTW9kdWxlVGV4dHMiLCJpbnN0YWxsRGVwZW5kZW5jaWVzIiwic2F2ZSIsIk1vZHVsZVN0YXRpY3MiLCJNb2R1bGVTdGF0aWMiLCJvdmVyd3JpdGUiLCJ1cGxvYWQiLCJtb2R1bGVOYW1lIiwib3JpZ2luIiwibW9kdWxlcyIsInByb3BlcnR5IiwibGFuZ3VhZ2UiLCJiIiwic291cmNlcyIsIkpTT04iLCJwYXJzZSIsIlByb2Nlc3NvckRlcGVuZGVuY2llcyIsIlByb2Nlc3NvckRlcGVuZGVuY3kiLCJleHRlcm5hbHNXaXRoRXJyb3JzIiwiaSIsImtpbmQiLCJpcyIsImRlY2xhcmF0aW9uIiwiYWxlcnRzIiwiUHJvY2Vzc29yT3ZlcndyaXRlcyIsIlByb2Nlc3Nvck92ZXJ3cml0ZSIsIlByb2Nlc3NvclNvdXJjZXMiLCJQcm9jZXNzb3JTb3VyY2UiLCJyZXBvcnRzIiwicmVhbHRpbWUiLCJSZWFsdGltZSIsImluaXRpYWxpc2UiLCJyZWNvcmQiLCJpbnNlcnQiLCJSdW5UaW1lRXJyb3IiLCJ0cmFjZSIsInNoaWZ0IiwicmVwbGFjZSIsIm1ldGhvZCIsImRldGFpbCIsImxpbmUiLCJjb2x1bW4iLCJSdW5UaW1lTWFuYWdlciIsImFsbCIsIlNlcnZlckNvbmZpZyIsIl9mZXRjaCIsImZldGNoIiwiU2VydmVyIiwiY29uZmlnIiwiQmV5b25kU2VydmVyIiwiaXNGYXZvcml0ZSIsInJlbmFtZSIsImZvcm1hdCIsIlRlbXBsYXRlQXBwbGljYXRpb24iLCJUZW1wbGF0ZUFwcGxpY2F0aW9uc1NvdXJjZXMiLCJUZW1wbGF0ZUFwcGxpY2F0aW9uc1NvdXJjZSIsIlRlbXBsYXRlR2xvYmFscyIsIlRlbXBsYXRlR2xvYmFsIiwiVGVtcGxhdGVHbG9iYWxTb3VyY2VzIiwiVGVtcGxhdGVHbG9iYWxTb3VyY2UiLCJnbG9iYWwiLCJUZW1wbGF0ZU92ZXJ3cml0ZXMiLCJUZW1wbGF0ZU92ZXJ3cml0ZSIsImJ5QXBwbGljYXRpb24iLCJUZW1wbGF0ZVByb2Nlc3NvciIsIlRlbXBsYXRlUHJvY2Vzc29yc1NvdXJjZXMiLCJUZW1wbGF0ZVByb2Nlc3NvcnNTb3VyY2UiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvbW9kZWxzL3RzL2FwcGxpY2F0aW9ucy9jb2xsZWN0aW9uLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9tb2RlbHMvdHMvYXBwbGljYXRpb25zL2RlcGxveW1lbnRzL2NvbGxlY3Rpb24udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L21vZGVscy90cy9hcHBsaWNhdGlvbnMvZGVwbG95bWVudHMvaXRlbS50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvbW9kZWxzL3RzL2FwcGxpY2F0aW9ucy9kZXBsb3ltZW50cy9yZWdpc3Rlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvbW9kZWxzL3RzL2FwcGxpY2F0aW9ucy9pdGVtLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9tb2RlbHMvdHMvYXBwbGljYXRpb25zL21vZHVsZXMvYnVuZGxlLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9tb2RlbHMvdHMvYXBwbGljYXRpb25zL21vZHVsZXMvY29sbGVjdGlvbi50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvbW9kZWxzL3RzL2FwcGxpY2F0aW9ucy9tb2R1bGVzL2l0ZW0udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L21vZGVscy90cy9hcHBsaWNhdGlvbnMvbW9kdWxlcy9yZWdpc3Rlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvbW9kZWxzL3RzL2FwcGxpY2F0aW9ucy9wcm9jZXNzLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9tb2RlbHMvdHMvYXBwbGljYXRpb25zL3JlZ2lzdGVyLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9tb2RlbHMvdHMvYXBwbGljYXRpb25zL3N0YXRpYy9jb2xsZWN0aW9uLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9tb2RlbHMvdHMvYXBwbGljYXRpb25zL3N0YXRpYy9pdGVtLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9tb2RlbHMvdHMvYXBwbGljYXRpb25zL3N0YXRpYy9yZWdpc3Rlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvbW9kZWxzL3RzL2J1bmRsZXMvY29uc3VtZXJzL2NvbGxlY3Rpb24udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L21vZGVscy90cy9idW5kbGVzL2NvbnN1bWVycy9pdGVtLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9tb2RlbHMvdHMvYnVuZGxlcy9jb25zdW1lcnMvcmVnaXN0ZXIudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L21vZGVscy90cy9idW5kbGVzL2RlcGVuZGVuY2llcy9jb2xsZWN0aW9uLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9tb2RlbHMvdHMvYnVuZGxlcy9kZXBlbmRlbmNpZXMvaXRlbS50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvbW9kZWxzL3RzL2J1bmRsZXMvZGVwZW5kZW5jaWVzL3JlZ2lzdGVyLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9tb2RlbHMvdHMvYnVuZGxlcy9pdGVtLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9tb2RlbHMvdHMvYnVuZGxlcy9wYWNrYWdlcnMvY29sbGVjdGlvbi50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvbW9kZWxzL3RzL2J1bmRsZXMvcGFja2FnZXJzL2NvbXBpbGVycy9jb2xsZWN0aW9uLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9tb2RlbHMvdHMvYnVuZGxlcy9wYWNrYWdlcnMvY29tcGlsZXJzL2l0ZW0udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L21vZGVscy90cy9idW5kbGVzL3BhY2thZ2Vycy9jb21waWxlcnMvcmVnaXN0ZXIudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L21vZGVscy90cy9idW5kbGVzL3BhY2thZ2Vycy9pdGVtLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9tb2RlbHMvdHMvYnVuZGxlcy9wYWNrYWdlcnMvcmVnaXN0ZXIudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L21vZGVscy90cy9idW5kbGVzL3JlZ2lzdGVyLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9tb2RlbHMvdHMvZGFzaGJvYXJkL21vZGVsLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9tb2RlbHMvdHMvZGVjbGFyYXRpb25zL2NvbGxlY3Rpb24udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L21vZGVscy90cy9kZWNsYXJhdGlvbnMvaXRlbS50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvbW9kZWxzL3RzL2RlY2xhcmF0aW9ucy9yZWdpc3Rlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvbW9kZWxzL3RzL2RlcGVuZGVuY2llcy9jb2xsZWN0aW9uLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9tb2RlbHMvdHMvZGVwZW5kZW5jaWVzL2l0ZW0udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L21vZGVscy90cy9kZXBlbmRlbmNpZXMvcmVnaXN0ZXIudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L21vZGVscy90cy9kaXN0cmlidXRpb25zL2NvbGxlY3Rpb24udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L21vZGVscy90cy9kaXN0cmlidXRpb25zL2ludGVyZmFjZXMvcG9ydHMtcmVzcG9uc2UudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L21vZGVscy90cy9kaXN0cmlidXRpb25zL2ludGVyZmFjZXMvcG9ydHMudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L21vZGVscy90cy9kaXN0cmlidXRpb25zL2l0ZW0udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L21vZGVscy90cy9kaXN0cmlidXRpb25zL2xhdW5jaGVycy9pdGVtLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9tb2RlbHMvdHMvZGlzdHJpYnV0aW9ucy9sYXVuY2hlcnMvcmVnaXN0ZXIudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L21vZGVscy90cy9kaXN0cmlidXRpb25zL3JlZ2lzdGVyLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9tb2RlbHMvdHMvZmlsZS9maWxlLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9tb2RlbHMvdHMvZ2xvYmFscy1idW5kbGVzL2NvbGxlY3Rpb24udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L21vZGVscy90cy9nbG9iYWxzLWJ1bmRsZXMvaXRlbS50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvbW9kZWxzL3RzL2dsb2JhbHMtYnVuZGxlcy9yZWdpc3Rlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvbW9kZWxzL3RzL21vZHVsZXMvY29sbGVjdGlvbi50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvbW9kZWxzL3RzL21vZHVsZXMvZGVjbGFyYXRpb25zLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9tb2RlbHMvdHMvbW9kdWxlcy9pdGVtLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9tb2RlbHMvdHMvbW9kdWxlcy9yZWdpc3Rlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvbW9kZWxzL3RzL21vZHVsZXMvc3RhdGljL2NvbGxlY3Rpb24udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L21vZGVscy90cy9tb2R1bGVzL3N0YXRpYy9pdGVtLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9tb2RlbHMvdHMvbW9kdWxlcy9zdGF0aWMvcmVnaXN0ZXIudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L21vZGVscy90cy9tb2R1bGVzL3RleHRzLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9tb2RlbHMvdHMvcHJvY2Vzc29ycy9kZXBlbmRlbmNpZXMvY29sbGVjdGlvbi50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvbW9kZWxzL3RzL3Byb2Nlc3NvcnMvZGVwZW5kZW5jaWVzL2l0ZW0udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L21vZGVscy90cy9wcm9jZXNzb3JzL2RlcGVuZGVuY2llcy9yZWdpc3Rlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvbW9kZWxzL3RzL3Byb2Nlc3NvcnMvaXRlbS50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvbW9kZWxzL3RzL3Byb2Nlc3NvcnMvb3ZlcndyaXRlcy9jb2xsZWN0aW9uLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9tb2RlbHMvdHMvcHJvY2Vzc29ycy9vdmVyd3JpdGVzL2l0ZW0udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L21vZGVscy90cy9wcm9jZXNzb3JzL292ZXJ3cml0ZXMvcmVnaXN0ZXIudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L21vZGVscy90cy9wcm9jZXNzb3JzL3JlZ2lzdGVyLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9tb2RlbHMvdHMvcHJvY2Vzc29ycy9zb3VyY2VzL2NvbGxlY3Rpb24udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L21vZGVscy90cy9wcm9jZXNzb3JzL3NvdXJjZXMvaXRlbS50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvbW9kZWxzL3RzL3Byb2Nlc3NvcnMvc291cmNlcy9yZWdpc3Rlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvbW9kZWxzL3RzL3JlYWx0aW1lL3JlYWx0aW1lLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9tb2RlbHMvdHMvcnVuLXRpbWUvaXRlbS50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvbW9kZWxzL3RzL3J1bi10aW1lL21hbmFnZXIudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L21vZGVscy90cy9zZXJ2ZXIvY29uZmlnLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9tb2RlbHMvdHMvc2VydmVyL3NlcnZlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvbW9kZWxzL3RzL3NvdXJjZXMvc291cmNlLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9tb2RlbHMvdHMvdGVtcGxhdGVzL2FwcGxpY2F0aW9ucy9pdGVtLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9tb2RlbHMvdHMvdGVtcGxhdGVzL2FwcGxpY2F0aW9ucy9yZWdpc3Rlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvbW9kZWxzL3RzL3RlbXBsYXRlcy9hcHBsaWNhdGlvbnMvc291cmNlcy9jb2xsZWN0aW9uLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9tb2RlbHMvdHMvdGVtcGxhdGVzL2FwcGxpY2F0aW9ucy9zb3VyY2VzL2l0ZW0udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L21vZGVscy90cy90ZW1wbGF0ZXMvYXBwbGljYXRpb25zL3NvdXJjZXMvcmVnaXN0ZXIudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L21vZGVscy90cy90ZW1wbGF0ZXMvZ2xvYmFsL2NvbGxlY3Rpb24udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L21vZGVscy90cy90ZW1wbGF0ZXMvZ2xvYmFsL2l0ZW0udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L21vZGVscy90cy90ZW1wbGF0ZXMvZ2xvYmFsL3JlZ2lzdGVyLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9tb2RlbHMvdHMvdGVtcGxhdGVzL2dsb2JhbC9zb3VyY2VzL2NvbGxlY3Rpb24udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L21vZGVscy90cy90ZW1wbGF0ZXMvZ2xvYmFsL3NvdXJjZXMvaXRlbS50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvbW9kZWxzL3RzL3RlbXBsYXRlcy9nbG9iYWwvc291cmNlcy9yZWdpc3Rlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvbW9kZWxzL3RzL3RlbXBsYXRlcy9pdGVtLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9tb2RlbHMvdHMvdGVtcGxhdGVzL292ZXJ3cml0ZXMvY29sbGVjdGlvbi50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvbW9kZWxzL3RzL3RlbXBsYXRlcy9vdmVyd3JpdGVzL2l0ZW0udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L21vZGVscy90cy90ZW1wbGF0ZXMvb3ZlcndyaXRlcy9yZWdpc3Rlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvbW9kZWxzL3RzL3RlbXBsYXRlcy9wcm9jZXNzb3JzL2l0ZW0udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L21vZGVscy90cy90ZW1wbGF0ZXMvcHJvY2Vzc29ycy9yZWdpc3Rlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvbW9kZWxzL3RzL3RlbXBsYXRlcy9wcm9jZXNzb3JzL3NvdXJjZXMvY29sbGVjdGlvbi50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvbW9kZWxzL3RzL3RlbXBsYXRlcy9wcm9jZXNzb3JzL3NvdXJjZXMvaXRlbS50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvbW9kZWxzL3RzL3RlbXBsYXRlcy9wcm9jZXNzb3JzL3NvdXJjZXMvcmVnaXN0ZXIudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L21vZGVscy90cy90ZW1wbGF0ZXMvcmVnaXN0ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==