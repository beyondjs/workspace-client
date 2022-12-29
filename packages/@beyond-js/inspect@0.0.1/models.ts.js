define(["exports", "module", "@beyond-js/kernel@0.1.4/bundle", "@beyond-js/plm@0.0.1/core", "@beyond-js/kernel@0.1.4/core", "@beyond-js/backend@0.1.2/client", "@beyond-js/inspect@0.0.1/reactive-model"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.__beyond_pkg = _exports.TransversalDependency = _exports.TransversalDependencies = _exports.TemplateProcessorsSources = _exports.TemplateProcessorsSource = _exports.TemplateProcessor = _exports.TemplateOverwrites = _exports.TemplateOverwrite = _exports.TemplateGlobals = _exports.TemplateGlobalSources = _exports.TemplateGlobalSource = _exports.TemplateGlobal = _exports.TemplateApplicationsSources = _exports.TemplateApplicationsSource = _exports.TemplateApplication = _exports.Template = _exports.RunTimeManager = _exports.RunTimeError = _exports.Realtime = _exports.ProcessorSources = _exports.ProcessorSource = _exports.ProcessorOverwrites = _exports.ProcessorOverwrite = _exports.ProcessorDependency = _exports.ProcessorDependencies = _exports.Processor = _exports.Packagers = _exports.PackagerCompilers = _exports.PackagerCompiler = _exports.Packager = _exports.Modules = _exports.ModuleTexts = _exports.ModuleStatics = _exports.ModuleStatic = _exports.ModuleDeclarations = _exports.Module = _exports.GlobalBundles = _exports.GlobalBundle = _exports.DistributionLauncher = _exports.Declarations = _exports.Declaration = _exports.Dashboard = _exports.Consumers = _exports.Consumer = _exports.BundleDependency = _exports.BundleDependencies = _exports.Bundle = _exports.Applications = _exports.ApplicationStatics = _exports.ApplicationStatic = _exports.ApplicationModules = _exports.ApplicationModule = _exports.ApplicationDistributions = _exports.ApplicationDistribution = _exports.ApplicationDeployments = _exports.ApplicationDeployment = _exports.Application = void 0;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/plm", "0.0.1"], ["@beyond-js/inspect", "0.0.1"], ["@beyond-js/dashboard", "1.0.2"]]);
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
            distribution: {
              ...params
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
            specs = {
              ...specs,
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
          if (container === 'all' && !text) return this.elements;
          // first we check if is required all containers
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
      /*bundle*/ /**
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
        }
        // The name of the bundle type (ex: 'ts', 'sass', etc.)
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
      specs.cache = false;
      //TODO revisar campo is, si tiene el nombre de los archivos donde se usa deberia tener otro nombre
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
        }
        //TODO agregar propiedad con acceso al file sources:{}
      };
      //TODO @ftovar crear propiedad de tipo Items a la tabla processor-sources con el campo is como relacion
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
  let Applications, ApplicationDeployments, ApplicationDeployment, Application, ApplicationModules, ApplicationModule, ApplicationStatics, ApplicationStatic, Consumers, Consumer, BundleDependencies, BundleDependency, Bundle, Packagers, PackagerCompilers, PackagerCompiler, Packager, Dashboard, Declarations, Declaration, TransversalDependencies, TransversalDependency, ApplicationDistributions, ApplicationDistribution, DistributionLauncher, GlobalBundles, GlobalBundle, Modules, ModuleDeclarations, Module, ModuleStatics, ModuleStatic, ModuleTexts, ProcessorDependencies, ProcessorDependency, Processor, ProcessorOverwrites, ProcessorOverwrite, ProcessorSources, ProcessorSource, Realtime, RunTimeError, RunTimeManager, TemplateApplication, TemplateApplicationsSources, TemplateApplicationsSource, TemplateGlobals, TemplateGlobal, TemplateGlobalSources, TemplateGlobalSource, Template, TemplateOverwrites, TemplateOverwrite, TemplateProcessor, TemplateProcessorsSources, TemplateProcessorsSource;

  // Module exports
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUU7O09BRWhCO01BRURDLFlBQU0sQ0FBQ0MsUUFBUSxDQUFDLFdBQVcsRUFBRXJDLEtBQUssQ0FBQyIsIm5hbWVzIjpbIkFwcGxpY2F0aW9ucyIsIkNvbGxlY3Rpb24iLCJjb25zdHJ1Y3RvciIsInNwZWNzIiwiQXBwbGljYXRpb24iLCJleHBvcnRzIiwiQXBwbGljYXRpb25EZXBsb3ltZW50cyIsIkFwcGxpY2F0aW9uRGVwbG95bWVudCIsIkl0ZW0iLCJpZCIsImZpZWxkcyIsImdldCIsInZhbHVlIiwidmFsaWQiLCJlcnJvcnMiLCJkaXN0cmlidXRpb25zIiwicHJvcGVydGllcyIsImFkZERpc3RyaWJ1dGlvbiIsInBhcmFtcyIsImFwcGxpY2F0aW9uSWQiLCJkaXN0cmlidXRpb24iLCJtb2R1bGUiLCJleGVjdXRlIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImNhY2hlIiwiSXRlbXMiLCJBcHBsaWNhdGlvbkRpc3RyaWJ1dGlvbiIsInRhYmxlIiwiaWRlbnRpZmllciIsImZpZWxkIiwic291cmNlIiwiYmF0Y2giLCJhY3Rpb25zIiwibGlzdCIsImRhdGEiLCJpbmRpY2VzIiwicHJpbWFyeSIsInRhYmxlcyIsInJlZ2lzdGVyIiwiRmlsZSIsInBhdGgiLCJzY29wZSIsIm5hbWUiLCJzcGVjaWZpZXIiLCJ2c3BlY2lmaWVyIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImRldmVsb3BlciIsInZlcnNpb24iLCJjb25uZWN0IiwiaG9zdHMiLCJwb3J0IiwibW9kdWxlc1BhdGgiLCJ3YXJuaW5ncyIsImFtIiwidGVtcGxhdGUiLCJkZXBsb3ltZW50Iiwic3RhdGljIiwic3RhdGljcyIsInByb2Nlc3MiLCJ1cmwiLCJ1bmRlZmluZWQiLCJ0cmlnZ2VyRXZlbnQiLCJldmVudCIsIm5vZGUiLCJ0cmlnZ2VyIiwiQXBwbGljYXRpb25Qcm9jZXNzIiwiYmluZCIsImNoZWNrU3RhdGljIiwiY3JlYXRlQmFja2VuZCIsImVkaXQiLCJyb3V0ZXMiLCJpdGVtcyIsImZvckVhY2giLCJidW5kbGVzIiwiYnVuZGxlIiwidHlwZSIsInB1c2giLCJyb3V0ZSIsIkFwcGxpY2F0aW9uTW9kdWxlQnVuZGxlIiwibW9kdWxlSWQiLCJoYXNUeHQiLCJoYXMiLCJBcHBsaWNhdGlvbk1vZHVsZXMiLCJBcHBsaWNhdGlvbk1vZHVsZSIsImNvdW50ZXJzIiwiZWxlbWVudHMiLCJ0cmVlIiwibGFuZGVkIiwib3V0cHV0IiwiaXRlbSIsImdldEl0ZW1zIiwiY29udGFpbmVyIiwidGV4dCIsImZpbHRlciIsIndhcm4iLCJpc0FwcCIsImluY2x1ZGVzIiwiaXNMaWJyYXJ5IiwidGV4dFNlYXJjaCIsIndpZGdldCIsImdldEJ1bmRsZSIsImFwcGxpY2F0aW9uIiwidmFsdWVzIiwibWFwIiwiX19DTEFTU19fIiwidG9Mb3dlckNhc2UiLCJwcm9jZXNzb3JzTmFtZXMiLCJwcm9jZXNzb3JzIiwicHJvY2Vzc29yIiwiaGF2ZVByb2Nlc3NvciIsImZpbmQiLCJoYXNQcm9jZXNzb3IiLCJzYXZlRmllbGQiLCJkaXJuYW1lIiwiaG1yIiwidHMiLCJ0cmFuc3BpbGUiLCJjbG9uZSIsImRlbGV0ZSIsInRhcmdldCIsImNyZWF0ZUZpbGUiLCJzcGxpdCIsImZpbGVuYW1lIiwiYWRkQnVuZGxlIiwiTW9kdWxlIiwiQnVuZGxlIiwiY291bnQiLCJhcHBsaWNhdGlvbnMiLCJiYXRjaGVzIiwiRXZlbnRzIiwibWVzc2FnZXMiLCJwcm9jZXNzaW5nIiwicHJvY2Vzc2VkIiwib25NZXNzYWdlIiwibWVzc2FnZSIsInByZXBhcmUiLCJiYWNrZW5kIiwiYmFja2VuZHMiLCJzb2NrZXQiLCJvbiIsImV4YyIsInN0YWNrIiwicnVuIiwiYnVpbGQiLCJkZWNsYXJhdGlvbnMiLCJjbGVhbiIsIk9iamVjdCIsImFzc2lnbiIsIlRlbXBsYXRlIiwiaW1tdXRhYmxlIiwiQXBwbGljYXRpb25TdGF0aWNzIiwidW5pcXVlIiwiQXBwbGljYXRpb25TdGF0aWMiLCJTb3VyY2UiLCJmaWxlIiwiYmFzZW5hbWUiLCJyZWxhdGl2ZSIsImV4dG5hbWUiLCJwYXRobmFtZSIsIkNvbnN1bWVycyIsIkNvbnN1bWVyIiwiYnVuZGxlSWQiLCJ0dSIsIkJ1bmRsZURlcGVuZGVuY2llcyIsIkJ1bmRsZURlcGVuZGVuY3kiLCJzdWJwYXRoIiwicmVzb3VyY2UiLCJwbGF0Zm9ybXMiLCJsYXlvdXQiLCJ1cGRhdGVkIiwiZGVzdHJveWVkIiwiZWxlbWVudCIsIk1hcCIsInNldCIsInBhY2thZ2VycyIsImNvbnN1bWVycyIsImNvbXBpbGVyUHJvY2Vzc29yQWN0aXZhdGUiLCJwcm9jZXNzb3JOYW1lIiwiUGFja2FnZXJzIiwiUGFja2FnZXIiLCJQYWNrYWdlckNvbXBpbGVycyIsIlBhY2thZ2VyQ29tcGlsZXIiLCJkaWFnbm9zdGljcyIsImdlbmVyYWwiLCJmaWxlcyIsIm92ZXJ3cml0ZXMiLCJkZXBlbmRlbmNpZXMiLCJkaXN0cmlidXRpb25JZCIsImNvbXBpbGVycyIsIlByb2Nlc3NvciIsInNlbGVjdG9yIiwiYXNzaWduZWQiLCJhbUlkIiwic2xpY2UiLCJsZW5ndGgiLCJqb2luIiwiRGFzaGJvYXJkIiwiUmVhY3RpdmVNb2RlbCIsInJlYWR5Iiwid2QiLCJ2YWxpZFBvcnQiLCJnZXRXRCIsImNhdGNoIiwiY2xlYW5DYWNoZSIsInZhbGlkYXRlIiwiaGFzaCIsImNoZWNrUG9ydCIsIkVycm9yIiwicmVzcG9uc2UiLCJhdmFpbGFibGVQb3J0IiwiaW50ZW50cyIsImNvbnQiLCJhdmFpbGFibGUiLCJEZWNsYXJhdGlvbnMiLCJEZWNsYXJhdGlvbiIsImNvZGUiLCJUcmFuc3ZlcnNhbERlcGVuZGVuY2llcyIsIlRyYW5zdmVyc2FsRGVwZW5kZW5jeSIsIkFwcGxpY2F0aW9uRGlzdHJpYnV0aW9ucyIsImxvY2FsIiwic3NyIiwicG9ydHMiLCJhbWQiLCJwbGF0Zm9ybSIsImNvbXByZXNzIiwiZW52aXJvbm1lbnQiLCJkZWZhdWx0IiwibnBtIiwibWluaWZ5IiwibGF1bmNoZXIiLCJodHRwIiwiaXNOYU4iLCJwYXJzZUludCIsImluc3BlY3QiLCJodG1sIiwiY3NzIiwianMiLCJtb2RlIiwic2V0VmFsdWVzIiwibmV3VmFsdWVzIiwiRGlzdHJpYnV0aW9uTGF1bmNoZXIiLCJzdGF0dXMiLCJwaWQiLCJzdGFydCIsInN0b3AiLCJyZXN0YXJ0IiwiZGVsZXRlRm9sZGVyIiwiZm9sZGVyIiwiR2xvYmFsQnVuZGxlcyIsIkdsb2JhbEJ1bmRsZSIsIm11bHRpbGFuZ3VhZ2UiLCJNb2R1bGVzIiwiTW9kdWxlRGVjbGFyYXRpb25zIiwiZmV0Y2hpbmciLCJwYXJlbnQiLCJ1cGRhdGUiLCJhY3Rpb24iLCJ0ZXh0cyIsIk1vZHVsZVRleHRzIiwiaW5zdGFsbERlcGVuZGVuY2llcyIsInNhdmUiLCJNb2R1bGVTdGF0aWNzIiwiTW9kdWxlU3RhdGljIiwib3ZlcndyaXRlIiwidXBsb2FkIiwibW9kdWxlTmFtZSIsIm9yaWdpbiIsIm1vZHVsZXMiLCJwcm9wZXJ0eSIsImxhbmd1YWdlIiwiYiIsInNvdXJjZXMiLCJKU09OIiwicGFyc2UiLCJQcm9jZXNzb3JEZXBlbmRlbmNpZXMiLCJQcm9jZXNzb3JEZXBlbmRlbmN5IiwiZXh0ZXJuYWxzV2l0aEVycm9ycyIsImkiLCJraW5kIiwiaXMiLCJkZWNsYXJhdGlvbiIsImFsZXJ0cyIsIlByb2Nlc3Nvck92ZXJ3cml0ZXMiLCJQcm9jZXNzb3JPdmVyd3JpdGUiLCJQcm9jZXNzb3JTb3VyY2VzIiwiUHJvY2Vzc29yU291cmNlIiwicmVwb3J0cyIsInJlYWx0aW1lIiwiUmVhbHRpbWUiLCJpbml0aWFsaXNlIiwicmVjb3JkIiwiaW5zZXJ0IiwiUnVuVGltZUVycm9yIiwidHJhY2UiLCJzaGlmdCIsInJlcGxhY2UiLCJtZXRob2QiLCJkZXRhaWwiLCJsaW5lIiwiY29sdW1uIiwiUnVuVGltZU1hbmFnZXIiLCJhbGwiLCJTZXJ2ZXJDb25maWciLCJfZmV0Y2giLCJmZXRjaCIsIlNlcnZlciIsImNvbmZpZyIsIkJleW9uZFNlcnZlciIsImlzRmF2b3JpdGUiLCJyZW5hbWUiLCJmb3JtYXQiLCJUZW1wbGF0ZUFwcGxpY2F0aW9uIiwiVGVtcGxhdGVBcHBsaWNhdGlvbnNTb3VyY2VzIiwiVGVtcGxhdGVBcHBsaWNhdGlvbnNTb3VyY2UiLCJUZW1wbGF0ZUdsb2JhbHMiLCJUZW1wbGF0ZUdsb2JhbCIsIlRlbXBsYXRlR2xvYmFsU291cmNlcyIsIlRlbXBsYXRlR2xvYmFsU291cmNlIiwiZ2xvYmFsIiwiVGVtcGxhdGVPdmVyd3JpdGVzIiwiVGVtcGxhdGVPdmVyd3JpdGUiLCJieUFwcGxpY2F0aW9uIiwiVGVtcGxhdGVQcm9jZXNzb3IiLCJUZW1wbGF0ZVByb2Nlc3NvcnNTb3VyY2VzIiwiVGVtcGxhdGVQcm9jZXNzb3JzU291cmNlIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJhcHBsaWNhdGlvbnMvY29sbGVjdGlvbi50cyIsImFwcGxpY2F0aW9ucy9kZXBsb3ltZW50cy9jb2xsZWN0aW9uLnRzIiwiYXBwbGljYXRpb25zL2RlcGxveW1lbnRzL2l0ZW0udHMiLCJhcHBsaWNhdGlvbnMvZGVwbG95bWVudHMvcmVnaXN0ZXIudHMiLCJhcHBsaWNhdGlvbnMvaXRlbS50cyIsImFwcGxpY2F0aW9ucy9tb2R1bGVzL2J1bmRsZS50cyIsImFwcGxpY2F0aW9ucy9tb2R1bGVzL2NvbGxlY3Rpb24udHMiLCJhcHBsaWNhdGlvbnMvbW9kdWxlcy9pdGVtLnRzIiwiYXBwbGljYXRpb25zL21vZHVsZXMvcmVnaXN0ZXIudHMiLCJhcHBsaWNhdGlvbnMvcHJvY2Vzcy50cyIsImFwcGxpY2F0aW9ucy9yZWdpc3Rlci50cyIsImFwcGxpY2F0aW9ucy9zdGF0aWMvY29sbGVjdGlvbi50cyIsImFwcGxpY2F0aW9ucy9zdGF0aWMvaXRlbS50cyIsImFwcGxpY2F0aW9ucy9zdGF0aWMvcmVnaXN0ZXIudHMiLCJidW5kbGVzL2NvbnN1bWVycy9jb2xsZWN0aW9uLnRzIiwiYnVuZGxlcy9jb25zdW1lcnMvaXRlbS50cyIsImJ1bmRsZXMvY29uc3VtZXJzL3JlZ2lzdGVyLnRzIiwiYnVuZGxlcy9kZXBlbmRlbmNpZXMvY29sbGVjdGlvbi50cyIsImJ1bmRsZXMvZGVwZW5kZW5jaWVzL2l0ZW0udHMiLCJidW5kbGVzL2RlcGVuZGVuY2llcy9yZWdpc3Rlci50cyIsImJ1bmRsZXMvaXRlbS50cyIsImJ1bmRsZXMvcGFja2FnZXJzL2NvbGxlY3Rpb24udHMiLCJidW5kbGVzL3BhY2thZ2Vycy9jb21waWxlcnMvY29sbGVjdGlvbi50cyIsImJ1bmRsZXMvcGFja2FnZXJzL2NvbXBpbGVycy9pdGVtLnRzIiwiYnVuZGxlcy9wYWNrYWdlcnMvY29tcGlsZXJzL3JlZ2lzdGVyLnRzIiwiYnVuZGxlcy9wYWNrYWdlcnMvaXRlbS50cyIsImJ1bmRsZXMvcGFja2FnZXJzL3JlZ2lzdGVyLnRzIiwiYnVuZGxlcy9yZWdpc3Rlci50cyIsImRhc2hib2FyZC9tb2RlbC50cyIsImRlY2xhcmF0aW9ucy9jb2xsZWN0aW9uLnRzIiwiZGVjbGFyYXRpb25zL2l0ZW0udHMiLCJkZWNsYXJhdGlvbnMvcmVnaXN0ZXIudHMiLCJkZXBlbmRlbmNpZXMvY29sbGVjdGlvbi50cyIsImRlcGVuZGVuY2llcy9pdGVtLnRzIiwiZGVwZW5kZW5jaWVzL3JlZ2lzdGVyLnRzIiwiZGlzdHJpYnV0aW9ucy9jb2xsZWN0aW9uLnRzIiwiZGlzdHJpYnV0aW9ucy9pbnRlcmZhY2VzL3BvcnRzLXJlc3BvbnNlLnRzIiwiZGlzdHJpYnV0aW9ucy9pbnRlcmZhY2VzL3BvcnRzLnRzIiwiZGlzdHJpYnV0aW9ucy9pdGVtLnRzIiwiZGlzdHJpYnV0aW9ucy9sYXVuY2hlcnMvaXRlbS50cyIsImRpc3RyaWJ1dGlvbnMvbGF1bmNoZXJzL3JlZ2lzdGVyLnRzIiwiZGlzdHJpYnV0aW9ucy9yZWdpc3Rlci50cyIsImZpbGUvZmlsZS50cyIsImdsb2JhbHMtYnVuZGxlcy9jb2xsZWN0aW9uLnRzIiwiZ2xvYmFscy1idW5kbGVzL2l0ZW0udHMiLCJnbG9iYWxzLWJ1bmRsZXMvcmVnaXN0ZXIudHMiLCJtb2R1bGVzL2NvbGxlY3Rpb24udHMiLCJtb2R1bGVzL2RlY2xhcmF0aW9ucy50cyIsIm1vZHVsZXMvaXRlbS50cyIsIm1vZHVsZXMvcmVnaXN0ZXIudHMiLCJtb2R1bGVzL3N0YXRpYy9jb2xsZWN0aW9uLnRzIiwibW9kdWxlcy9zdGF0aWMvaXRlbS50cyIsIm1vZHVsZXMvc3RhdGljL3JlZ2lzdGVyLnRzIiwibW9kdWxlcy90ZXh0cy50cyIsInByb2Nlc3NvcnMvZGVwZW5kZW5jaWVzL2NvbGxlY3Rpb24udHMiLCJwcm9jZXNzb3JzL2RlcGVuZGVuY2llcy9pdGVtLnRzIiwicHJvY2Vzc29ycy9kZXBlbmRlbmNpZXMvcmVnaXN0ZXIudHMiLCJwcm9jZXNzb3JzL2l0ZW0udHMiLCJwcm9jZXNzb3JzL292ZXJ3cml0ZXMvY29sbGVjdGlvbi50cyIsInByb2Nlc3NvcnMvb3ZlcndyaXRlcy9pdGVtLnRzIiwicHJvY2Vzc29ycy9vdmVyd3JpdGVzL3JlZ2lzdGVyLnRzIiwicHJvY2Vzc29ycy9yZWdpc3Rlci50cyIsInByb2Nlc3NvcnMvc291cmNlcy9jb2xsZWN0aW9uLnRzIiwicHJvY2Vzc29ycy9zb3VyY2VzL2l0ZW0udHMiLCJwcm9jZXNzb3JzL3NvdXJjZXMvcmVnaXN0ZXIudHMiLCJyZWFsdGltZS9yZWFsdGltZS50cyIsInJ1bi10aW1lL2l0ZW0udHMiLCJydW4tdGltZS9tYW5hZ2VyLnRzIiwic2VydmVyL2NvbmZpZy50cyIsInNlcnZlci9zZXJ2ZXIudHMiLCJzb3VyY2VzL3NvdXJjZS50cyIsInRlbXBsYXRlcy9hcHBsaWNhdGlvbnMvaXRlbS50cyIsInRlbXBsYXRlcy9hcHBsaWNhdGlvbnMvcmVnaXN0ZXIudHMiLCJ0ZW1wbGF0ZXMvYXBwbGljYXRpb25zL3NvdXJjZXMvY29sbGVjdGlvbi50cyIsInRlbXBsYXRlcy9hcHBsaWNhdGlvbnMvc291cmNlcy9pdGVtLnRzIiwidGVtcGxhdGVzL2FwcGxpY2F0aW9ucy9zb3VyY2VzL3JlZ2lzdGVyLnRzIiwidGVtcGxhdGVzL2dsb2JhbC9jb2xsZWN0aW9uLnRzIiwidGVtcGxhdGVzL2dsb2JhbC9pdGVtLnRzIiwidGVtcGxhdGVzL2dsb2JhbC9yZWdpc3Rlci50cyIsInRlbXBsYXRlcy9nbG9iYWwvc291cmNlcy9jb2xsZWN0aW9uLnRzIiwidGVtcGxhdGVzL2dsb2JhbC9zb3VyY2VzL2l0ZW0udHMiLCJ0ZW1wbGF0ZXMvZ2xvYmFsL3NvdXJjZXMvcmVnaXN0ZXIudHMiLCJ0ZW1wbGF0ZXMvaXRlbS50cyIsInRlbXBsYXRlcy9vdmVyd3JpdGVzL2NvbGxlY3Rpb24udHMiLCJ0ZW1wbGF0ZXMvb3ZlcndyaXRlcy9pdGVtLnRzIiwidGVtcGxhdGVzL292ZXJ3cml0ZXMvcmVnaXN0ZXIudHMiLCJ0ZW1wbGF0ZXMvcHJvY2Vzc29ycy9pdGVtLnRzIiwidGVtcGxhdGVzL3Byb2Nlc3NvcnMvcmVnaXN0ZXIudHMiLCJ0ZW1wbGF0ZXMvcHJvY2Vzc29ycy9zb3VyY2VzL2NvbGxlY3Rpb24udHMiLCJ0ZW1wbGF0ZXMvcHJvY2Vzc29ycy9zb3VyY2VzL2l0ZW0udHMiLCJ0ZW1wbGF0ZXMvcHJvY2Vzc29ycy9zb3VyY2VzL3JlZ2lzdGVyLnRzIiwidGVtcGxhdGVzL3JlZ2lzdGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=