define(["exports", "module", "@beyond-js/kernel@0.1.0/bundle", "@beyond-js/kernel@0.1.0/core", "@beyond-js/backend@0.1.0/client", "@beyond-js/plm@0.0.1/core"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.__beyond_pkg = _exports.TransversalDependency = _exports.TransversalDependencies = _exports.TemplateProcessorsSources = _exports.TemplateProcessorsSource = _exports.TemplateProcessor = _exports.TemplateOverwrites = _exports.TemplateOverwrite = _exports.TemplateGlobals = _exports.TemplateGlobalSources = _exports.TemplateGlobalSource = _exports.TemplateGlobal = _exports.TemplateApplicationsSources = _exports.TemplateApplicationsSource = _exports.TemplateApplication = _exports.Template = _exports.RunTimeManager = _exports.RunTimeError = _exports.ReactiveModel = _exports.ProcessorSources = _exports.ProcessorSource = _exports.ProcessorOverwrites = _exports.ProcessorOverwrite = _exports.ProcessorDependency = _exports.ProcessorDependencies = _exports.Processor = _exports.Packagers = _exports.PackagerCompilers = _exports.PackagerCompiler = _exports.Packager = _exports.Modules = _exports.ModuleTexts = _exports.ModuleStatics = _exports.ModuleStatic = _exports.ModuleDeclarations = _exports.Module = _exports.GlobalBundles = _exports.GlobalBundle = _exports.DistributionLauncher = _exports.Declarations = _exports.Declaration = _exports.Dashboard = _exports.Consumers = _exports.Consumer = _exports.BundleDependency = _exports.BundleDependencies = _exports.Bundle = _exports.Applications = _exports.ApplicationStatics = _exports.ApplicationStatic = _exports.ApplicationModules = _exports.ApplicationModule = _exports.ApplicationDistributions = _exports.ApplicationDistribution = _exports.ApplicationDeployments = _exports.ApplicationDeployment = _exports.ApplicationDeclarations = _exports.Application = void 0;
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
  __pkg.dependencies.update([['@beyond-js/kernel/core', dependency_1], ['@beyond-js/backend/client', dependency_2], ['@beyond-js/plm/core', dependency_3]]);
  const {
    module
  } = __pkg.bundle;
  const ims = new Map();

  /**********************************************
  INTERNAL MODULE: ./applications/builder/builder
  **********************************************/

  ims.set('./applications/builder/builder', {
    hash: 2151925395,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ApplicationBuilder = void 0;
      var _core = require("@beyond-js/kernel/core");
      var _beyond_context = require("beyond_context");
      var _builds = require("./builds");
      var _client = require("@beyond-js/backend/client");
      class ApplicationBuilder extends _core.Events {
        #application;
        #builds;
        get builds() {
          return this.#builds;
        }
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
          this.#builds = new _builds.ApplicationBuilds(application);
        }
        onMessage = message => {
          if (message.type !== 'build/application/message') return;
          if (message.processed) {
            this.#processed = true;
            this.#processing = false;
            this.trigger('change');
            return;
          }
          this.#messages.push(message);
          message.error && this.#errors.push(message);
          this.trigger('change');
        };
        #prepared = false;
        async prepare() {
          if (this.#prepared) return;
          this.#prepared = true;
          try {
            const backend = await _client.backends.get('@beyond-js/inspect');
            const socket = await backend.socket;
            socket.on(`builder:${this.#application.id}`, this.onMessage);
          } catch (exc) {
            console.error(exc.stack);
          }
        }
        async build(distribution) {
          if (typeof distribution !== 'object') throw new Error('Invalid distribution parameter');
          this.#processing = true;
          this.trigger('change');
          try {
            await this.prepare();
            await _beyond_context.module.execute('/build', {
              application: this.#application.path,
              distribution: distribution.name
            });
          } catch (exc) {
            this.#processed = this.#processing = false;
            this.trigger('change');
          }
        }
        clean() {
          this.#messages = [];
          this.#processed = this.#processing = false;
          this.trigger('change');
        }
      }
      exports.ApplicationBuilder = ApplicationBuilder;
    }
  });

  /*********************************************
  INTERNAL MODULE: ./applications/builder/builds
  *********************************************/

  ims.set('./applications/builder/builds', {
    hash: 158024195,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ApplicationBuilds = void 0;
      class ApplicationBuilds {
        #application;
        get value() {
          const builds = this.#application.fields.get('builds');
          return !builds.assigned ? {} : {
            ...builds.value
          };
        }
        constructor(application) {
          this.#application = application;
        }
      }
      exports.ApplicationBuilds = ApplicationBuilds;
    }
  });

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

  /*******************************************
  INTERNAL MODULE: ./applications/declarations
  *******************************************/

  ims.set('./applications/declarations', {
    hash: 1972939584,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ApplicationDeclarations = void 0;
      var _beyond_context = require("beyond_context");
      var _client = require("@beyond-js/backend/client");
      var _reactiveModel = require("../reactive-model");
      /*bundle*/
      class ApplicationDeclarations extends _reactiveModel.ReactiveModel {
        #application;
        #error;
        get error() {
          return this.#error;
        }
        #total = 0;
        get total() {
          return this.#total;
        }
        #itemsProcessed = 0;
        get itemsProcessed() {
          return this.#itemsProcessed;
        }
        #onProcess;
        get onProcess() {
          return this.#onProcess;
        }
        #success = new Set();
        get success() {
          return this.#success;
        }
        #errors = new Set();
        get errors() {
          return this.#errors;
        }
        clean() {
          this.#total = 0;
          this.#error = '';
          this.#onProcess = '';
          this.#itemsProcessed = 0;
          this.#errors.clear();
          this.#success.clear();
          this.processed = false;
          this.processing = false;
          this.triggerEvent();
        }
        onDeclarationSave(message) {
          void this;
          const {
            item,
            total
          } = message;
          this.#total = total;
          if (!item) {
            this.triggerEvent();
            return;
          }
          this.#onProcess = item.id;
          item.valid ? this.#success.add(item.id) : this.#errors.add(item.id);
          this.#itemsProcessed = this.#success.size + this.#errors.size;
          this.processed = this.#itemsProcessed === this.#total;
          this.processing = this.#itemsProcessed !== this.#total;
          //when the process finished the declaration in process is cleaned
          this.processed && (this.#onProcess = '');
          this.triggerEvent();
        }
        async initialise() {
          const backend = await _client.backends.get('@beyond-js/inspect');
          const socket = await backend.socket;
          socket.on(`declaration-save:${this.#application.id}`, this.onDeclarationSave);
        }
        constructor(application) {
          super();
          this.#application = application;
          this.initialise().catch(exc => console.error(exc.stack));
          this.clean = this.clean.bind(this);
          this.onDeclarationSave = this.onDeclarationSave.bind(this);
        }
        async update(id = false) {
          try {
            if (!this.#application.id) {
              console.warn('the application id is not defined');
              return;
            }
            this.clean();
            this.processing = true;
            const action = id ? '/applications/declarations/update' : '/applications/declarations/updateAll';
            const specs = {
              id: id,
              applicationId: this.#application.id
            };
            const response = await _beyond_context.module.execute(action, specs);
            if (response?.error) {
              this.#error = response.error;
              console.error(response.error);
            }
          } catch (exc) {
            console.error(12, 'error', exc);
            this.#error = exc;
          } finally {
            this.triggerEvent();
          }
        }
      }
      exports.ApplicationDeclarations = ApplicationDeclarations;
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
    hash: 341652122,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Application = void 0;
      var _beyond_context = require("beyond_context");
      var _file = require("../file/file");
      var _declarations = require("./declarations");
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
        #declarations;
        get declarations() {
          return this.#declarations;
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
          this.#declarations = new _declarations.ApplicationDeclarations(this);
          this.#declarations.bind('change', this.triggerEvent);
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
    hash: 4259590756,
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
            this.trigger('change');
            return;
          }
          this.#messages.push(message);
          message.error && this.#errors.push(message);
          this.trigger('change');
        };
        #prepared = false;
        async prepare() {
          if (this.#prepared) return;
          this.#prepared = true;
          try {
            const backend = await _client.backends.get('@beyond-js/inspect');
            const socket = await backend.socket;
            socket.on(`project-process:${this.#application.id}`, this.onMessage);
          } catch (exc) {
            console.error(exc.stack);
          }
        }
        async run(id, actions) {
          if (this.#processing) return;
          if (!id) throw new Error('Parameter id is required');
          if (!actions.build && !actions.declarations) throw new Error('No actions to process');
          this.clean();
          this.#processing = true;
          this.trigger('change');
          const specs = Object.assign({
            application: this.#application.id,
            distribution: id
          }, actions);
          try {
            await this.prepare();
            await _beyond_context.module.execute('applications/process', specs);
          } catch (exc) {
            console.error(exc.message);
            this.#processed = this.#processing = false;
            this.trigger('change');
          }
        }
        clean() {
          this.#errors = [];
          this.#messages = [];
          this.#processed = false;
          this.#processing = false;
          this.trigger('change');
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
    hash: 3347314544,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Dashboard = void 0;
      var _beyond_context = require("beyond_context");
      var _reactiveModel = require("../reactive-model");
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

  /********************************
  INTERNAL MODULE: ./reactive-model
  ********************************/

  ims.set('./reactive-model', {
    hash: 155937534,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ReactiveModel = void 0;
      var _core = require("@beyond-js/kernel/core");
      /*bundle*/
      class ReactiveModel extends _core.Events {
        _ready;
        get ready() {
          return this._ready;
        }
        _fetching;
        get fetching() {
          return this._fetching;
        }
        set fetching(value) {
          if (value === this._fetching) return;
          this._fetching = value;
          this.triggerEvent();
        }
        _fetched;
        get fetched() {
          return this._fetched;
        }
        _processing;
        get processing() {
          return this._processing;
        }
        set processing(value) {
          if (value === this._processing) return;
          this._processing = value;
          return;
        }
        _processed;
        get processed() {
          return this._processed;
        }
        set processed(value) {
          if (value === this._processed) return;
          this._processed = value;
          return;
        }
        _loaded;
        get loaded() {
          return this._loaded;
        }
        triggerEvent = (event = 'change') => this.trigger(event);
        /**
         * set value in a private property
         * @param property
         * @param value
         */
        _set(property, value) {
          let props = {};
          if (property && value !== 'undefined') props[property] = value;else props = property;
          let updated = false;
          for (const prop in props) {
            const key = `_${prop}`;
            if (!this.hasOwnProperty(key)) continue; //same value on store
            if (this[key] === props[prop]) continue;
            this[key] = props[prop];
            updated = true;
          }
          if (updated) this.triggerEvent();
        }
        getProperties() {
          const props = {};
          Object.keys(this).forEach(property => props[property.replace('_', '')] = this[property]);
          return props;
        }
      }
      exports.ReactiveModel = ReactiveModel;
    }
  });

  /***********************************
  INTERNAL MODULE: ./realtime/realtime
  ***********************************/

  ims.set('./realtime/realtime', {
    hash: 3734508985,
    creator: function (require, exports) {
      "use strict";

      var _core = require("@beyond-js/plm/core");
      var _client = require("@beyond-js/backend/client");
      const {
        reports
      } = _core.realtime;
      (async () => {
        const backend = await _client.backends.get('@beyond-js/inspect');
        const socket = await backend.socket;
        socket.on('client:plm/list/update', message => reports.list.update(message.table, message.filter));
        socket.on('server:plm/list/update', message => reports.list.update(message.table, message.filter));
        socket.on('client:plm/record/insert', message => reports.record.insert(message.table, message.id));
        socket.on('server:plm/record/insert', message => reports.record.insert(message.table, message.id));
        socket.on('client:plm/record/delete', message => reports.record.delete(message.table, message.id));
        socket.on('server:plm/record/delete', message => reports.record.delete(message.table, message.id));
        socket.on('client:plm/record/update', message => reports.record.update(message.table, message.id));
        socket.on('server:plm/record/update', message => reports.record.update(message.table, message.id));
        socket.on('client:plm/record/field/update', message => reports.record.update(message.table, message.id, message.field, message.value));
        socket.on('server:plm/record/field/update', message => reports.record.update(message.table, message.id, message.field, message.value));
      })().catch(exc => console.error(exc.stack));
    }
  });

  /*******************************
  INTERNAL MODULE: ./run-time/item
  *******************************/

  ims.set('./run-time/item', {
    hash: 251167295,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.RunTimeError = void 0;
      var _reactiveModel = require("../reactive-model");
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
    hash: 2366243968,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.RunTimeManager = void 0;
      var _beyond_context = require("beyond_context");
      var _reactiveModel = require("../reactive-model");
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

  /*****************************************************
  INTERNAL MODULE: ./transversal/dependencies/collection
  *****************************************************/

  ims.set('./transversal/dependencies/collection', {
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

  /***********************************************
  INTERNAL MODULE: ./transversal/dependencies/item
  ***********************************************/

  ims.set('./transversal/dependencies/item', {
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

  /***************************************************
  INTERNAL MODULE: ./transversal/dependencies/register
  ***************************************************/

  ims.set('./transversal/dependencies/register', {
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
  __pkg.exports.descriptor = [{
    "im": "./applications/collection",
    "from": "Applications",
    "name": "Applications"
  }, {
    "im": "./applications/declarations",
    "from": "ApplicationDeclarations",
    "name": "ApplicationDeclarations"
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
    "im": "./reactive-model",
    "from": "ReactiveModel",
    "name": "ReactiveModel"
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
  }, {
    "im": "./transversal/dependencies/collection",
    "from": "TransversalDependencies",
    "name": "TransversalDependencies"
  }, {
    "im": "./transversal/dependencies/item",
    "from": "TransversalDependency",
    "name": "TransversalDependency"
  }];
  let Applications, ApplicationDeclarations, ApplicationDeployments, ApplicationDeployment, Application, ApplicationModules, ApplicationModule, ApplicationStatics, ApplicationStatic, Consumers, Consumer, BundleDependencies, BundleDependency, Bundle, Packagers, PackagerCompilers, PackagerCompiler, Packager, Dashboard, Declarations, Declaration, ApplicationDistributions, ApplicationDistribution, DistributionLauncher, GlobalBundles, GlobalBundle, Modules, ModuleDeclarations, Module, ModuleStatics, ModuleStatic, ModuleTexts, ProcessorDependencies, ProcessorDependency, Processor, ProcessorOverwrites, ProcessorOverwrite, ProcessorSources, ProcessorSource, ReactiveModel, RunTimeError, RunTimeManager, TemplateApplication, TemplateApplicationsSources, TemplateApplicationsSource, TemplateGlobals, TemplateGlobal, TemplateGlobalSources, TemplateGlobalSource, Template, TemplateOverwrites, TemplateOverwrite, TemplateProcessor, TemplateProcessorsSources, TemplateProcessorsSource, TransversalDependencies, TransversalDependency;

  // Module exports
  _exports.TransversalDependency = TransversalDependency;
  _exports.TransversalDependencies = TransversalDependencies;
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
  _exports.ReactiveModel = ReactiveModel;
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
  _exports.ApplicationDeclarations = ApplicationDeclarations;
  _exports.Applications = Applications;
  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'Applications') && (_exports.Applications = Applications = require ? require('./applications/collection').Applications : value);
    (require || prop === 'ApplicationDeclarations') && (_exports.ApplicationDeclarations = ApplicationDeclarations = require ? require('./applications/declarations').ApplicationDeclarations : value);
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
    (require || prop === 'ReactiveModel') && (_exports.ReactiveModel = ReactiveModel = require ? require('./reactive-model').ReactiveModel : value);
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
    (require || prop === 'TransversalDependencies') && (_exports.TransversalDependencies = TransversalDependencies = require ? require('./transversal/dependencies/collection').TransversalDependencies : value);
    (require || prop === 'TransversalDependency') && (_exports.TransversalDependency = TransversalDependency = require ? require('./transversal/dependencies/item').TransversalDependency : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxFQUFFLENBQUMsSUFBSSxDQUFDO1VBQ2RnRCxPQUFPLEVBQUU7O09BRWhCO01BRURDLFlBQU0sQ0FBQ0MsUUFBUSxDQUFDLDBCQUEwQixFQUFFOUMsS0FBSyxDQUFDIiwibmFtZXMiOlsiQXBwbGljYXRpb25CdWlsZGVyIiwiRXZlbnRzIiwiYnVpbGRzIiwibWVzc2FnZXMiLCJlcnJvcnMiLCJwcm9jZXNzaW5nIiwicHJvY2Vzc2VkIiwiY29uc3RydWN0b3IiLCJhcHBsaWNhdGlvbiIsIkFwcGxpY2F0aW9uQnVpbGRzIiwib25NZXNzYWdlIiwibWVzc2FnZSIsInR5cGUiLCJ0cmlnZ2VyIiwicHVzaCIsImVycm9yIiwicHJlcGFyZSIsImJhY2tlbmQiLCJiYWNrZW5kcyIsImdldCIsInNvY2tldCIsIm9uIiwiaWQiLCJleGMiLCJjb25zb2xlIiwic3RhY2siLCJidWlsZCIsImRpc3RyaWJ1dGlvbiIsIkVycm9yIiwibW9kdWxlIiwiZXhlY3V0ZSIsInBhdGgiLCJuYW1lIiwiY2xlYW4iLCJleHBvcnRzIiwidmFsdWUiLCJmaWVsZHMiLCJhc3NpZ25lZCIsIkFwcGxpY2F0aW9ucyIsIkNvbGxlY3Rpb24iLCJzcGVjcyIsIkFwcGxpY2F0aW9uIiwiQXBwbGljYXRpb25EZWNsYXJhdGlvbnMiLCJSZWFjdGl2ZU1vZGVsIiwidG90YWwiLCJpdGVtc1Byb2Nlc3NlZCIsIm9uUHJvY2VzcyIsIlNldCIsInN1Y2Nlc3MiLCJjbGVhciIsInRyaWdnZXJFdmVudCIsIm9uRGVjbGFyYXRpb25TYXZlIiwiaXRlbSIsInZhbGlkIiwiYWRkIiwic2l6ZSIsImluaXRpYWxpc2UiLCJjYXRjaCIsImJpbmQiLCJ1cGRhdGUiLCJ3YXJuIiwiYWN0aW9uIiwiYXBwbGljYXRpb25JZCIsInJlc3BvbnNlIiwiQXBwbGljYXRpb25EZXBsb3ltZW50cyIsIkFwcGxpY2F0aW9uRGVwbG95bWVudCIsIkl0ZW0iLCJkaXN0cmlidXRpb25zIiwicHJvcGVydGllcyIsImFkZERpc3RyaWJ1dGlvbiIsInBhcmFtcyIsImUiLCJjYWNoZSIsIkl0ZW1zIiwiQXBwbGljYXRpb25EaXN0cmlidXRpb24iLCJ0YWJsZSIsImlkZW50aWZpZXIiLCJmaWVsZCIsInNvdXJjZSIsImJhdGNoIiwiYWN0aW9ucyIsImxpc3QiLCJkYXRhIiwiaW5kaWNlcyIsInByaW1hcnkiLCJ0YWJsZXMiLCJyZWdpc3RlciIsIkZpbGUiLCJzY29wZSIsInNwZWNpZmllciIsInZzcGVjaWZpZXIiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZGV2ZWxvcGVyIiwidmVyc2lvbiIsImNvbm5lY3QiLCJob3N0cyIsInBvcnQiLCJtb2R1bGVzUGF0aCIsIndhcm5pbmdzIiwiYW0iLCJ0ZW1wbGF0ZSIsImRlcGxveW1lbnQiLCJzdGF0aWMiLCJzdGF0aWNzIiwiZGVjbGFyYXRpb25zIiwicHJvY2VzcyIsInVybCIsInVuZGVmaW5lZCIsImV2ZW50Iiwibm9kZSIsIkFwcGxpY2F0aW9uUHJvY2VzcyIsImNoZWNrU3RhdGljIiwiY3JlYXRlQmFja2VuZCIsImVkaXQiLCJyb3V0ZXMiLCJpdGVtcyIsImZvckVhY2giLCJidW5kbGVzIiwiYnVuZGxlIiwicm91dGUiLCJBcHBsaWNhdGlvbk1vZHVsZUJ1bmRsZSIsIm1vZHVsZUlkIiwiaGFzVHh0IiwiaGFzIiwiQXBwbGljYXRpb25Nb2R1bGVzIiwiQXBwbGljYXRpb25Nb2R1bGUiLCJjb3VudGVycyIsImVsZW1lbnRzIiwidHJlZSIsImxhbmRlZCIsIm91dHB1dCIsImdldEl0ZW1zIiwiY29udGFpbmVyIiwidGV4dCIsImZpbHRlciIsImlzQXBwIiwiaW5jbHVkZXMiLCJpc0xpYnJhcnkiLCJ0ZXh0U2VhcmNoIiwid2lkZ2V0IiwiZ2V0QnVuZGxlIiwidmFsdWVzIiwibWFwIiwiX19DTEFTU19fIiwidG9Mb3dlckNhc2UiLCJwcm9jZXNzb3JzTmFtZXMiLCJwcm9jZXNzb3JzIiwicHJvY2Vzc29yIiwiaGF2ZVByb2Nlc3NvciIsImZpbmQiLCJoYXNQcm9jZXNzb3IiLCJzYXZlRmllbGQiLCJkaXJuYW1lIiwiaG1yIiwidHMiLCJ0cmFuc3BpbGUiLCJjbG9uZSIsImRlbGV0ZSIsInRhcmdldCIsImNyZWF0ZUZpbGUiLCJzcGxpdCIsImZpbGVuYW1lIiwiYWRkQnVuZGxlIiwiTW9kdWxlIiwiQnVuZGxlIiwiY291bnQiLCJhcHBsaWNhdGlvbnMiLCJiYXRjaGVzIiwicnVuIiwiT2JqZWN0IiwiYXNzaWduIiwiVGVtcGxhdGUiLCJpbW11dGFibGUiLCJBcHBsaWNhdGlvblN0YXRpY3MiLCJ1bmlxdWUiLCJBcHBsaWNhdGlvblN0YXRpYyIsIlNvdXJjZSIsImZpbGUiLCJiYXNlbmFtZSIsInJlbGF0aXZlIiwiZXh0bmFtZSIsInBhdGhuYW1lIiwiQ29uc3VtZXJzIiwiQ29uc3VtZXIiLCJidW5kbGVJZCIsInR1IiwiQnVuZGxlRGVwZW5kZW5jaWVzIiwiQnVuZGxlRGVwZW5kZW5jeSIsInN1YnBhdGgiLCJyZXNvdXJjZSIsInBsYXRmb3JtcyIsImxheW91dCIsInVwZGF0ZWQiLCJkZXN0cm95ZWQiLCJlbGVtZW50IiwiTWFwIiwic2V0IiwicGFja2FnZXJzIiwiY29uc3VtZXJzIiwiY29tcGlsZXJQcm9jZXNzb3JBY3RpdmF0ZSIsInByb2Nlc3Nvck5hbWUiLCJQYWNrYWdlcnMiLCJQYWNrYWdlciIsIlBhY2thZ2VyQ29tcGlsZXJzIiwiUGFja2FnZXJDb21waWxlciIsImRpYWdub3N0aWNzIiwiZ2VuZXJhbCIsImZpbGVzIiwib3ZlcndyaXRlcyIsImRlcGVuZGVuY2llcyIsImRpc3RyaWJ1dGlvbklkIiwiY29tcGlsZXJzIiwiUHJvY2Vzc29yIiwic2VsZWN0b3IiLCJhbUlkIiwic2xpY2UiLCJsZW5ndGgiLCJqb2luIiwiRGFzaGJvYXJkIiwicmVhZHkiLCJ3ZCIsInZhbGlkUG9ydCIsImdldFdEIiwiY2xlYW5DYWNoZSIsInZhbGlkYXRlIiwiaGFzaCIsImNoZWNrUG9ydCIsImF2YWlsYWJsZVBvcnQiLCJpbnRlbnRzIiwiY29udCIsImF2YWlsYWJsZSIsIkRlY2xhcmF0aW9ucyIsIkRlY2xhcmF0aW9uIiwiY29kZSIsIkFwcGxpY2F0aW9uRGlzdHJpYnV0aW9ucyIsImxvY2FsIiwic3NyIiwicG9ydHMiLCJhbWQiLCJwbGF0Zm9ybSIsImNvbXByZXNzIiwiZW52aXJvbm1lbnQiLCJkZWZhdWx0IiwibnBtIiwibWluaWZ5IiwibGF1bmNoZXIiLCJodHRwIiwiaXNOYU4iLCJwYXJzZUludCIsImluc3BlY3QiLCJodG1sIiwiY3NzIiwianMiLCJtb2RlIiwic2V0VmFsdWVzIiwibmV3VmFsdWVzIiwiRGlzdHJpYnV0aW9uTGF1bmNoZXIiLCJzdGF0dXMiLCJwaWQiLCJzdGFydCIsInN0b3AiLCJyZXN0YXJ0IiwiZGVsZXRlRm9sZGVyIiwiZm9sZGVyIiwiR2xvYmFsQnVuZGxlcyIsIkdsb2JhbEJ1bmRsZSIsIm11bHRpbGFuZ3VhZ2UiLCJNb2R1bGVzIiwiTW9kdWxlRGVjbGFyYXRpb25zIiwiZmV0Y2hpbmciLCJwYXJlbnQiLCJ0ZXh0cyIsIk1vZHVsZVRleHRzIiwiaW5zdGFsbERlcGVuZGVuY2llcyIsInNhdmUiLCJNb2R1bGVTdGF0aWNzIiwiTW9kdWxlU3RhdGljIiwib3ZlcndyaXRlIiwidXBsb2FkIiwibW9kdWxlTmFtZSIsIm9yaWdpbiIsIm1vZHVsZXMiLCJwcm9wZXJ0eSIsImxhbmd1YWdlIiwiYiIsInNvdXJjZXMiLCJKU09OIiwicGFyc2UiLCJQcm9jZXNzb3JEZXBlbmRlbmNpZXMiLCJQcm9jZXNzb3JEZXBlbmRlbmN5IiwiZXh0ZXJuYWxzV2l0aEVycm9ycyIsImkiLCJraW5kIiwiaXMiLCJkZWNsYXJhdGlvbiIsImFsZXJ0cyIsIlByb2Nlc3Nvck92ZXJ3cml0ZXMiLCJQcm9jZXNzb3JPdmVyd3JpdGUiLCJQcm9jZXNzb3JTb3VyY2VzIiwiUHJvY2Vzc29yU291cmNlIiwiX3JlYWR5IiwiX2ZldGNoaW5nIiwiX2ZldGNoZWQiLCJmZXRjaGVkIiwiX3Byb2Nlc3NpbmciLCJfcHJvY2Vzc2VkIiwiX2xvYWRlZCIsImxvYWRlZCIsIl9zZXQiLCJwcm9wcyIsInByb3AiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImdldFByb3BlcnRpZXMiLCJrZXlzIiwicmVwbGFjZSIsInJlcG9ydHMiLCJyZWFsdGltZSIsInJlY29yZCIsImluc2VydCIsIlJ1blRpbWVFcnJvciIsInRyYWNlIiwic2hpZnQiLCJtZXRob2QiLCJkZXRhaWwiLCJsaW5lIiwiY29sdW1uIiwiUnVuVGltZU1hbmFnZXIiLCJhbGwiLCJTZXJ2ZXJDb25maWciLCJfZmV0Y2giLCJmZXRjaCIsIlNlcnZlciIsImNvbmZpZyIsIkJleW9uZFNlcnZlciIsImlzRmF2b3JpdGUiLCJyZW5hbWUiLCJmb3JtYXQiLCJUZW1wbGF0ZUFwcGxpY2F0aW9uIiwiVGVtcGxhdGVBcHBsaWNhdGlvbnNTb3VyY2VzIiwiVGVtcGxhdGVBcHBsaWNhdGlvbnNTb3VyY2UiLCJUZW1wbGF0ZUdsb2JhbHMiLCJUZW1wbGF0ZUdsb2JhbCIsIlRlbXBsYXRlR2xvYmFsU291cmNlcyIsIlRlbXBsYXRlR2xvYmFsU291cmNlIiwiZ2xvYmFsIiwiVGVtcGxhdGVPdmVyd3JpdGVzIiwiVGVtcGxhdGVPdmVyd3JpdGUiLCJieUFwcGxpY2F0aW9uIiwiVGVtcGxhdGVQcm9jZXNzb3IiLCJUZW1wbGF0ZVByb2Nlc3NvcnNTb3VyY2VzIiwiVGVtcGxhdGVQcm9jZXNzb3JzU291cmNlIiwiVHJhbnN2ZXJzYWxEZXBlbmRlbmNpZXMiLCJUcmFuc3ZlcnNhbERlcGVuZGVuY3kiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvYXBwbGljYXRpb25zL2J1aWxkZXIvYnVpbGRlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvYXBwbGljYXRpb25zL2J1aWxkZXIvYnVpbGRzLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9hcHBsaWNhdGlvbnMvY29sbGVjdGlvbi50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvYXBwbGljYXRpb25zL2RlY2xhcmF0aW9ucy50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvYXBwbGljYXRpb25zL2RlcGxveW1lbnRzL2NvbGxlY3Rpb24udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2FwcGxpY2F0aW9ucy9kZXBsb3ltZW50cy9pdGVtLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9hcHBsaWNhdGlvbnMvZGVwbG95bWVudHMvcmVnaXN0ZXIudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2FwcGxpY2F0aW9ucy9pdGVtLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9hcHBsaWNhdGlvbnMvbW9kdWxlcy9idW5kbGUudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2FwcGxpY2F0aW9ucy9tb2R1bGVzL2NvbGxlY3Rpb24udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2FwcGxpY2F0aW9ucy9tb2R1bGVzL2l0ZW0udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2FwcGxpY2F0aW9ucy9tb2R1bGVzL3JlZ2lzdGVyLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9hcHBsaWNhdGlvbnMvcHJvY2Vzcy50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvYXBwbGljYXRpb25zL3JlZ2lzdGVyLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9hcHBsaWNhdGlvbnMvc3RhdGljL2NvbGxlY3Rpb24udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2FwcGxpY2F0aW9ucy9zdGF0aWMvaXRlbS50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvYXBwbGljYXRpb25zL3N0YXRpYy9yZWdpc3Rlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvYnVuZGxlcy9jb25zdW1lcnMvY29sbGVjdGlvbi50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvYnVuZGxlcy9jb25zdW1lcnMvaXRlbS50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvYnVuZGxlcy9jb25zdW1lcnMvcmVnaXN0ZXIudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2J1bmRsZXMvZGVwZW5kZW5jaWVzL2NvbGxlY3Rpb24udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2J1bmRsZXMvZGVwZW5kZW5jaWVzL2l0ZW0udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2J1bmRsZXMvZGVwZW5kZW5jaWVzL3JlZ2lzdGVyLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9idW5kbGVzL2l0ZW0udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2J1bmRsZXMvcGFja2FnZXJzL2NvbGxlY3Rpb24udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2J1bmRsZXMvcGFja2FnZXJzL2NvbXBpbGVycy9jb2xsZWN0aW9uLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9idW5kbGVzL3BhY2thZ2Vycy9jb21waWxlcnMvaXRlbS50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvYnVuZGxlcy9wYWNrYWdlcnMvY29tcGlsZXJzL3JlZ2lzdGVyLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9idW5kbGVzL3BhY2thZ2Vycy9pdGVtLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9idW5kbGVzL3BhY2thZ2Vycy9yZWdpc3Rlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvYnVuZGxlcy9yZWdpc3Rlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvZGFzaGJvYXJkL21vZGVsLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9kZWNsYXJhdGlvbnMvY29sbGVjdGlvbi50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvZGVjbGFyYXRpb25zL2l0ZW0udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2RlY2xhcmF0aW9ucy9yZWdpc3Rlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvZGlzdHJpYnV0aW9ucy9jb2xsZWN0aW9uLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9kaXN0cmlidXRpb25zL2ludGVyZmFjZXMvcG9ydHMtcmVzcG9uc2UudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2Rpc3RyaWJ1dGlvbnMvaW50ZXJmYWNlcy9wb3J0cy50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvZGlzdHJpYnV0aW9ucy9pdGVtLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9kaXN0cmlidXRpb25zL2xhdW5jaGVycy9pdGVtLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9kaXN0cmlidXRpb25zL2xhdW5jaGVycy9yZWdpc3Rlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvZGlzdHJpYnV0aW9ucy9yZWdpc3Rlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvZmlsZS9maWxlLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9nbG9iYWxzLWJ1bmRsZXMvY29sbGVjdGlvbi50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvZ2xvYmFscy1idW5kbGVzL2l0ZW0udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2dsb2JhbHMtYnVuZGxlcy9yZWdpc3Rlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvbW9kdWxlcy9jb2xsZWN0aW9uLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9tb2R1bGVzL2RlY2xhcmF0aW9ucy50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvbW9kdWxlcy9pdGVtLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9tb2R1bGVzL3JlZ2lzdGVyLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9tb2R1bGVzL3N0YXRpYy9jb2xsZWN0aW9uLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9tb2R1bGVzL3N0YXRpYy9pdGVtLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9tb2R1bGVzL3N0YXRpYy9yZWdpc3Rlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvbW9kdWxlcy90ZXh0cy50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvcHJvY2Vzc29ycy9kZXBlbmRlbmNpZXMvY29sbGVjdGlvbi50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvcHJvY2Vzc29ycy9kZXBlbmRlbmNpZXMvaXRlbS50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvcHJvY2Vzc29ycy9kZXBlbmRlbmNpZXMvcmVnaXN0ZXIudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L3Byb2Nlc3NvcnMvaXRlbS50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvcHJvY2Vzc29ycy9vdmVyd3JpdGVzL2NvbGxlY3Rpb24udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L3Byb2Nlc3NvcnMvb3ZlcndyaXRlcy9pdGVtLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9wcm9jZXNzb3JzL292ZXJ3cml0ZXMvcmVnaXN0ZXIudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L3Byb2Nlc3NvcnMvcmVnaXN0ZXIudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L3Byb2Nlc3NvcnMvc291cmNlcy9jb2xsZWN0aW9uLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9wcm9jZXNzb3JzL3NvdXJjZXMvaXRlbS50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvcHJvY2Vzc29ycy9zb3VyY2VzL3JlZ2lzdGVyLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9yZWFjdGl2ZS1tb2RlbC50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvcmVhbHRpbWUvcmVhbHRpbWUudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L3J1bi10aW1lL2l0ZW0udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L3J1bi10aW1lL21hbmFnZXIudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L3NlcnZlci9jb25maWcudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L3NlcnZlci9zZXJ2ZXIudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L3NvdXJjZXMvc291cmNlLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC90ZW1wbGF0ZXMvYXBwbGljYXRpb25zL2l0ZW0udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L3RlbXBsYXRlcy9hcHBsaWNhdGlvbnMvcmVnaXN0ZXIudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L3RlbXBsYXRlcy9hcHBsaWNhdGlvbnMvc291cmNlcy9jb2xsZWN0aW9uLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC90ZW1wbGF0ZXMvYXBwbGljYXRpb25zL3NvdXJjZXMvaXRlbS50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvdGVtcGxhdGVzL2FwcGxpY2F0aW9ucy9zb3VyY2VzL3JlZ2lzdGVyLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC90ZW1wbGF0ZXMvZ2xvYmFsL2NvbGxlY3Rpb24udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L3RlbXBsYXRlcy9nbG9iYWwvaXRlbS50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvdGVtcGxhdGVzL2dsb2JhbC9yZWdpc3Rlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvdGVtcGxhdGVzL2dsb2JhbC9zb3VyY2VzL2NvbGxlY3Rpb24udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L3RlbXBsYXRlcy9nbG9iYWwvc291cmNlcy9pdGVtLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC90ZW1wbGF0ZXMvZ2xvYmFsL3NvdXJjZXMvcmVnaXN0ZXIudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L3RlbXBsYXRlcy9pdGVtLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC90ZW1wbGF0ZXMvb3ZlcndyaXRlcy9jb2xsZWN0aW9uLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC90ZW1wbGF0ZXMvb3ZlcndyaXRlcy9pdGVtLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC90ZW1wbGF0ZXMvb3ZlcndyaXRlcy9yZWdpc3Rlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvdGVtcGxhdGVzL3Byb2Nlc3NvcnMvaXRlbS50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvdGVtcGxhdGVzL3Byb2Nlc3NvcnMvcmVnaXN0ZXIudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L3RlbXBsYXRlcy9wcm9jZXNzb3JzL3NvdXJjZXMvY29sbGVjdGlvbi50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvdGVtcGxhdGVzL3Byb2Nlc3NvcnMvc291cmNlcy9pdGVtLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC90ZW1wbGF0ZXMvcHJvY2Vzc29ycy9zb3VyY2VzL3JlZ2lzdGVyLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC90ZW1wbGF0ZXMvcmVnaXN0ZXIudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L3RyYW5zdmVyc2FsL2RlcGVuZGVuY2llcy9jb2xsZWN0aW9uLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC90cmFuc3ZlcnNhbC9kZXBlbmRlbmNpZXMvaXRlbS50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvdHJhbnN2ZXJzYWwvZGVwZW5kZW5jaWVzL3JlZ2lzdGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==