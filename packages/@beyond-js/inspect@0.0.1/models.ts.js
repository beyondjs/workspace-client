define(["exports", "module", "@beyond-js/kernel@0.1.0/bundle", "@beyond-js/kernel@0.1.0/core", "@beyond-js/backend@0.1.0/client", "@beyond-js/plm@0.0.1/core"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.__beyond_pkg = _exports.TransversalDependency = _exports.TransversalDependencies = _exports.TemplateProcessorsSources = _exports.TemplateProcessorsSource = _exports.TemplateProcessor = _exports.TemplateOverwrites = _exports.TemplateOverwrite = _exports.TemplateGlobals = _exports.TemplateGlobalSources = _exports.TemplateGlobalSource = _exports.TemplateGlobal = _exports.TemplateApplicationsSources = _exports.TemplateApplicationsSource = _exports.TemplateApplication = _exports.Template = _exports.RunTimeManager = _exports.RunTimeError = _exports.ReactiveModel = _exports.ProcessorSources = _exports.ProcessorSource = _exports.ProcessorOverwrites = _exports.ProcessorOverwrite = _exports.ProcessorDependency = _exports.ProcessorDependencies = _exports.Processor = _exports.Packagers = _exports.PackagerCompilers = _exports.PackagerCompiler = _exports.Packager = _exports.Modules = _exports.ModuleTexts = _exports.ModuleStatics = _exports.ModuleStatic = _exports.ModuleDeclarations = _exports.Module = _exports.GlobalBundles = _exports.GlobalBundle = _exports.DistributionLauncher = _exports.Declarations = _exports.Declaration = _exports.Dashboard = _exports.Consumers = _exports.Consumer = _exports.BundleDependency = _exports.BundleDependencies = _exports.Bundle = _exports.Applications = _exports.ApplicationStatics = _exports.ApplicationStatic = _exports.ApplicationModules = _exports.ApplicationModule = _exports.ApplicationDistributions = _exports.ApplicationDistribution = _exports.ApplicationDeployments = _exports.ApplicationDeployment = _exports.ApplicationDeclarations = _exports.Application = void 0;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/plm", null], ["@beyond-js/inspect", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
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
          return !builds.assigned ? {} : { ...builds.value
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
          this.processing = this.#itemsProcessed !== this.#total; //when the process finished the declaration in process is cleaned

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
  let Applications, ApplicationDeclarations, ApplicationDeployments, ApplicationDeployment, Application, ApplicationModules, ApplicationModule, ApplicationStatics, ApplicationStatic, Consumers, Consumer, BundleDependencies, BundleDependency, Bundle, Packagers, PackagerCompilers, PackagerCompiler, Packager, Dashboard, Declarations, Declaration, ApplicationDistributions, ApplicationDistribution, DistributionLauncher, GlobalBundles, GlobalBundle, Modules, ModuleDeclarations, Module, ModuleStatics, ModuleStatic, ModuleTexts, ProcessorDependencies, ProcessorDependency, Processor, ProcessorOverwrites, ProcessorOverwrite, ProcessorSources, ProcessorSource, ReactiveModel, RunTimeError, RunTimeManager, TemplateApplication, TemplateApplicationsSources, TemplateApplicationsSource, TemplateGlobals, TemplateGlobal, TemplateGlobalSources, TemplateGlobalSource, Template, TemplateOverwrites, TemplateOverwrite, TemplateProcessor, TemplateProcessorsSources, TemplateProcessorsSource, TransversalDependencies, TransversalDependency; // Module exports

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFBQTs7TUFDQTs7TUFFQTs7TUFDQTs7TUFlTSxNQUFPQSxrQkFBUCxTQUFrQ0MsWUFBbEMsQ0FBd0M7UUFDakM7UUFDQTs7UUFDQyxJQUFOQyxNQUFNO1VBQ04sT0FBTyxLQUFLLE9BQVo7UUFDSDs7UUFFRCxZQUFpQyxFQUFqQzs7UUFDWSxJQUFSQyxRQUFRO1VBQ1IsT0FBTyxLQUFLLFNBQVo7UUFDSDs7UUFFRCxVQUErQixFQUEvQjs7UUFDVSxJQUFOQyxNQUFNO1VBQ04sT0FBTyxLQUFLLE9BQVo7UUFDSDs7UUFHRDs7UUFDYyxJQUFWQyxVQUFVO1VBQ1YsT0FBTyxLQUFLLFdBQVo7UUFDSDs7UUFFRDs7UUFDYSxJQUFUQyxTQUFTO1VBQ1QsT0FBTyxLQUFLLFVBQVo7UUFDSDtRQUVEOzs7OztRQUdBQyxZQUFZQyxXQUFaRCxFQUFvQztVQUNoQztVQUNBLEtBQUssWUFBTCxHQUFvQkMsV0FBcEI7VUFDQSxLQUFLLE9BQUwsR0FBZSxJQUFJQyx5QkFBSixDQUFzQkQsV0FBdEIsQ0FBZjtRQUNIOztRQUVPRSxTQUFTLEdBQUlDLE9BQUQsSUFBMEI7VUFDMUMsSUFBSUEsT0FBTyxDQUFDQyxJQUFSRCxLQUFpQiwyQkFBckIsRUFBa0Q7O1VBRWxELElBQUlBLE9BQU8sQ0FBQ0wsU0FBWixFQUF1QjtZQUNuQixLQUFLLFVBQUwsR0FBa0IsSUFBbEI7WUFDQSxLQUFLLFdBQUwsR0FBbUIsS0FBbkI7WUFDQSxLQUFLTyxPQUFMLENBQWEsUUFBYjtZQUNBO1VBQ0g7O1VBRUQsS0FBSyxTQUFMLENBQWVDLElBQWYsQ0FBb0JILE9BQXBCO1VBQ0FBLE9BQU8sQ0FBQ0ksS0FBUkosSUFBaUIsS0FBSyxPQUFMLENBQWFHLElBQWIsQ0FBa0JILE9BQWxCLENBQWpCQTtVQUNBLEtBQUtFLE9BQUwsQ0FBYSxRQUFiO1FBWmE7UUFlakIsWUFBWSxLQUFaOztRQUVxQixNQUFQRyxPQUFPO1VBQ2pCLElBQUksS0FBSyxTQUFULEVBQW9CO1VBQ3BCLEtBQUssU0FBTCxHQUFpQixJQUFqQjs7VUFFQSxJQUFJO1lBQ0EsTUFBTUMsT0FBTyxHQUFHLE1BQU1DLGlCQUFTQyxHQUFURCxDQUFhLG9CQUFiQSxDQUF0QjtZQUNBLE1BQU1FLE1BQU0sR0FBRyxNQUFNSCxPQUFPLENBQUNHLE1BQTdCO1lBQ0FBLE1BQU0sQ0FBQ0MsRUFBUEQsQ0FBVSxXQUFXLEtBQUssWUFBTCxDQUFrQkUsRUFBRSxFQUF6Q0YsRUFBNkMsS0FBS1YsU0FBbERVO1VBSEosRUFJRSxPQUFPRyxHQUFQLEVBQVk7WUFDVkMsT0FBTyxDQUFDVCxLQUFSUyxDQUFjRCxHQUFHLENBQUNFLEtBQWxCRDtVQUNIO1FBQ0o7O1FBRVUsTUFBTEUsS0FBSyxDQUFDQyxZQUFELEVBQWdDO1VBQ3ZDLElBQUksT0FBT0EsWUFBUCxLQUF3QixRQUE1QixFQUFzQyxNQUFNLElBQUlDLEtBQUosQ0FBVSxnQ0FBVixDQUFOO1VBQ3RDLEtBQUssV0FBTCxHQUFtQixJQUFuQjtVQUNBLEtBQUtmLE9BQUwsQ0FBYSxRQUFiOztVQUNBLElBQUk7WUFDQSxNQUFNLEtBQUtHLE9BQUwsRUFBTjtZQUNBLE1BQU1hLHVCQUFPQyxPQUFQRCxDQUFlLFFBQWZBLEVBQXlCO2NBQzNCckIsV0FBVyxFQUFFLEtBQUssWUFBTCxDQUFrQnVCLElBREo7Y0FDVUosWUFBWSxFQUFFQSxZQUFZLENBQUNLO1lBRHJDLENBQXpCSCxDQUFOO1VBRkosRUFLRSxPQUFPTixHQUFQLEVBQVk7WUFDVixLQUFLLFVBQUwsR0FBa0IsS0FBSyxXQUFMLEdBQW1CLEtBQXJDO1lBQ0EsS0FBS1YsT0FBTCxDQUFhLFFBQWI7VUFDSDtRQUNKOztRQUVEb0IsS0FBSztVQUNELEtBQUssU0FBTCxHQUFpQixFQUFqQjtVQUNBLEtBQUssVUFBTCxHQUFrQixLQUFLLFdBQUwsR0FBbUIsS0FBckM7VUFDQSxLQUFLcEIsT0FBTCxDQUFhLFFBQWI7UUFDSDs7TUF0RnlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O01DakJ4QyxNQUFPSixpQkFBUCxDQUF3QjtRQUVqQjs7UUFFQSxJQUFMeUIsS0FBSztVQUNMLE1BQU1oQyxNQUFNLEdBQUcsS0FBSyxZQUFMLENBQWtCaUMsTUFBbEIsQ0FBeUJoQixHQUF6QixDQUE2QixRQUE3QixDQUFmO1VBQ0EsT0FBTyxDQUFDakIsTUFBTSxDQUFDa0MsUUFBUixHQUFtQixFQUFuQixHQUF3QixFQUFDLEdBQUdsQyxNQUFNLENBQUNnQztVQUFYLENBQS9CO1FBQ0g7O1FBRUQzQixZQUFZQyxXQUFaRCxFQUFvQztVQUNoQyxLQUFLLFlBQUwsR0FBb0JDLFdBQXBCO1FBQ0g7O01BWHlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O01DRjlCOztNQUNBO01BRU87OztNQUFVLE1BQ1g2QixZQURXLFNBQ1VDLGdCQURWLENBQ29CO1FBQ2pDL0IsWUFBWWdDLEtBQVpoQyxFQUFrQztVQUM5QixNQUFNLGNBQU4sRUFBc0JpQyxpQkFBdEIsRUFBbUNELEtBQW5DO1FBQ0g7O01BSGdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O01DSnJDOztNQUNBOztNQUVBO01BT087OztNQUFVLE1BQ1hFLHVCQURXLFNBQ3FCQyw0QkFEckIsQ0FDa0M7UUFDdEM7UUFFVDs7UUFDUyxJQUFMM0IsS0FBSztVQUNMLE9BQU8sS0FBSyxNQUFaO1FBQ0g7O1FBRUQsU0FBUyxDQUFUOztRQUNTLElBQUw0QixLQUFLO1VBQ0wsT0FBTyxLQUFLLE1BQVo7UUFDSDs7UUFFRCxrQkFBa0IsQ0FBbEI7O1FBQ2tCLElBQWRDLGNBQWM7VUFDZCxPQUFPLEtBQUssZUFBWjtRQUNIOztRQUVEOztRQUNhLElBQVRDLFNBQVM7VUFDVCxPQUFPLEtBQUssVUFBWjtRQUNIOztRQUVELFdBQVcsSUFBSUMsR0FBSixFQUFYOztRQUNXLElBQVBDLE9BQU87VUFDUCxPQUFPLEtBQUssUUFBWjtRQUNIOztRQUVELFVBQVUsSUFBSUQsR0FBSixFQUFWOztRQUNVLElBQU4xQyxNQUFNO1VBQ04sT0FBTyxLQUFLLE9BQVo7UUFDSDs7UUFFRDZCLEtBQUs7VUFDRCxLQUFLLE1BQUwsR0FBYyxDQUFkO1VBQ0EsS0FBSyxNQUFMLEdBQWMsRUFBZDtVQUNBLEtBQUssVUFBTCxHQUFrQixFQUFsQjtVQUNBLEtBQUssZUFBTCxHQUF1QixDQUF2QjtVQUNBLEtBQUssT0FBTCxDQUFhZSxLQUFiO1VBQ0EsS0FBSyxRQUFMLENBQWNBLEtBQWQ7VUFDQSxLQUFLMUMsU0FBTCxHQUFpQixLQUFqQjtVQUNBLEtBQUtELFVBQUwsR0FBa0IsS0FBbEI7VUFFQSxLQUFLNEMsWUFBTDtRQUNIOztRQUVEQyxpQkFBaUIsQ0FBQ3ZDLE9BQUQsRUFBNEI7VUFDekMsS0FBSyxJQUFMO1VBRUEsTUFBTTtZQUFDd0MsSUFBRDtZQUFPUjtVQUFQLElBQWdCaEMsT0FBdEI7VUFDQSxLQUFLLE1BQUwsR0FBY2dDLEtBQWQ7O1VBRUEsSUFBSSxDQUFDUSxJQUFMLEVBQVc7WUFDUCxLQUFLRixZQUFMO1lBQ0E7VUFDSDs7VUFFRCxLQUFLLFVBQUwsR0FBa0JFLElBQUksQ0FBQzdCLEVBQXZCO1VBQ0E2QixJQUFJLENBQUNDLEtBQUxELEdBQWEsS0FBSyxRQUFMLENBQWNFLEdBQWQsQ0FBa0JGLElBQUksQ0FBQzdCLEVBQXZCLENBQWI2QixHQUEwQyxLQUFLLE9BQUwsQ0FBYUUsR0FBYixDQUFpQkYsSUFBSSxDQUFDN0IsRUFBdEIsQ0FBMUM2QjtVQUVBLEtBQUssZUFBTCxHQUF1QixLQUFLLFFBQUwsQ0FBY0csSUFBZCxHQUFxQixLQUFLLE9BQUwsQ0FBYUEsSUFBekQ7VUFDQSxLQUFLaEQsU0FBTCxHQUFpQixLQUFLLGVBQUwsS0FBeUIsS0FBSyxNQUEvQztVQUNBLEtBQUtELFVBQUwsR0FBa0IsS0FBSyxlQUFMLEtBQXlCLEtBQUssTUFBaEQsQ0FoQnlDLENBa0J6Qzs7VUFDQSxLQUFLQyxTQUFMLEtBQW1CLEtBQUssVUFBTCxHQUFrQixFQUFyQztVQUNBLEtBQUsyQyxZQUFMO1FBQ0g7O1FBRWUsTUFBVk0sVUFBVTtVQUNaLE1BQU10QyxPQUFPLEdBQUcsTUFBTUMsaUJBQVNDLEdBQVRELENBQWEsb0JBQWJBLENBQXRCO1VBQ0EsTUFBTUUsTUFBTSxHQUFHLE1BQU1ILE9BQU8sQ0FBQ0csTUFBN0I7VUFDQUEsTUFBTSxDQUFDQyxFQUFQRCxDQUFVLG9CQUFvQixLQUFLLFlBQUwsQ0FBa0JFLEVBQUUsRUFBbERGLEVBQXNELEtBQUs4QixpQkFBM0Q5QjtRQUNIOztRQUVEYixZQUFZQyxXQUFaRCxFQUFvQztVQUNoQztVQUNBLEtBQUssWUFBTCxHQUFvQkMsV0FBcEI7VUFDQSxLQUFLK0MsVUFBTCxHQUFrQkMsS0FBbEIsQ0FBd0JqQyxHQUFHLElBQUlDLE9BQU8sQ0FBQ1QsS0FBUlMsQ0FBY0QsR0FBRyxDQUFDRSxLQUFsQkQsQ0FBL0I7VUFDQSxLQUFLUyxLQUFMLEdBQWEsS0FBS0EsS0FBTCxDQUFXd0IsSUFBWCxDQUFnQixJQUFoQixDQUFiO1VBQ0EsS0FBS1AsaUJBQUwsR0FBeUIsS0FBS0EsaUJBQUwsQ0FBdUJPLElBQXZCLENBQTRCLElBQTVCLENBQXpCO1FBQ0g7O1FBRVcsTUFBTkMsTUFBTSxDQUFDcEMsS0FBdUIsS0FBeEIsRUFBNkI7VUFDckMsSUFBSTtZQUNBLElBQUksQ0FBQyxLQUFLLFlBQUwsQ0FBa0JBLEVBQXZCLEVBQTJCO2NBQ3ZCRSxPQUFPLENBQUNtQyxJQUFSbkMsQ0FBYSxtQ0FBYkE7Y0FDQTtZQUNIOztZQUVELEtBQUtTLEtBQUw7WUFDQSxLQUFLNUIsVUFBTCxHQUFrQixJQUFsQjtZQUNBLE1BQU11RCxNQUFNLEdBQUd0QyxFQUFFLEdBQUcsbUNBQUgsR0FBeUMsc0NBQTFEO1lBQ0EsTUFBTWlCLEtBQUssR0FBRztjQUFDakIsRUFBRSxFQUFFQSxFQUFMO2NBQVN1QyxhQUFhLEVBQUUsS0FBSyxZQUFMLENBQWtCdkM7WUFBMUMsQ0FBZDtZQUNBLE1BQU13QyxRQUFRLEdBQVEsTUFBTWpDLHVCQUFPQyxPQUFQRCxDQUFlK0IsTUFBZi9CLEVBQXVCVSxLQUF2QlYsQ0FBNUI7O1lBRUEsSUFBSWlDLFFBQVEsRUFBRS9DLEtBQWQsRUFBcUI7Y0FDakIsS0FBSyxNQUFMLEdBQWMrQyxRQUFRLENBQUMvQyxLQUF2QjtjQUNBUyxPQUFPLENBQUNULEtBQVJTLENBQWNzQyxRQUFRLENBQUMvQyxLQUF2QlM7WUFDSDtVQWZMLEVBaUJFLE9BQU9ELEdBQVAsRUFBWTtZQUNWQyxPQUFPLENBQUNULEtBQVJTLENBQWMsRUFBZEEsRUFBa0IsT0FBbEJBLEVBQTJCRCxHQUEzQkM7WUFDQSxLQUFLLE1BQUwsR0FBY0QsR0FBZDtVQW5CSixVQW9CVTtZQUNOLEtBQUswQixZQUFMO1VBQ0g7UUFDSjs7TUEzRzhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O01DWG5EOztNQUNBO01BRU87OztNQUFVLE1BQ1hjLHNCQURXLFNBQ29CekIsZ0JBRHBCLENBQzhCO1FBRTNDL0IsWUFBWWdDLEtBQVpoQyxFQUFrQztVQUM5QixNQUFNLDBCQUFOLEVBQWtDeUQsMkJBQWxDLEVBQXlEekIsS0FBekQ7UUFDSDs7TUFKMEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNKL0M7O01BQ0E7TUFjTzs7O01BQVUsTUFDWHlCLHFCQURXLFNBQ21CQyxVQURuQixDQUN1QjtRQUM5QixJQUFGM0MsRUFBRTtVQUNGLE9BQU8sS0FBS2EsTUFBTCxDQUFZaEIsR0FBWixDQUFnQixJQUFoQixFQUFzQmUsS0FBN0I7UUFDSDs7UUFFUSxJQUFMa0IsS0FBSztVQUNMLE9BQU8sS0FBS2pCLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsT0FBaEIsRUFBeUJlLEtBQWhDO1FBQ0g7O1FBRVMsSUFBTjlCLE1BQU07VUFDTixPQUFPLEtBQUsrQixNQUFMLENBQVloQixHQUFaLENBQWdCLFFBQWhCLEVBQTBCZSxLQUExQixJQUFtQyxFQUExQztRQUNIOztRQUVnQixJQUFiZ0MsYUFBYTtVQUNiLE9BQXNCLEtBQUtDLFVBQUwsQ0FBZ0JoRCxHQUFoQixDQUFvQixlQUFwQixDQUF0QjtRQUNIOztRQUVEWixZQUFZZ0MsS0FBWmhDLEVBQTRCO1VBQ3hCLE1BQU0sMEJBQU4sRUFBa0NnQyxLQUFsQztRQUNIOztRQUVvQixNQUFmNkIsZUFBZSxDQUFDQyxNQUFELEVBQTBCO1VBQzNDLE1BQU05QixLQUFLLEdBQUc7WUFDVnNCLGFBQWEsRUFBRSxLQUFLdkMsRUFEVjtZQUVWSyxZQUFZLEVBQUUsRUFBQyxHQUFHMEM7WUFBSjtVQUZKLENBQWQ7O1VBS0EsSUFBSTtZQUNBLE9BQU94Qyx1QkFBT0MsT0FBUEQsQ0FBZSxpQ0FBZkEsRUFBa0RVLEtBQWxEVixDQUFQO1VBREosRUFFRSxPQUFPeUMsQ0FBUCxFQUFVO1lBQ1I5QyxPQUFPLENBQUNULEtBQVJTLENBQWM4QyxDQUFkOUM7VUFDSDtRQUVKOztNQWpDbUM7Ozs7Ozs7Ozs7Ozs7O01DaEJ4Qzs7TUFDQTs7TUFDQTs7TUFFQSxNQUFNZSxLQUFLLEdBQWUsRUFBMUI7TUFFQUEsS0FBSyxDQUFDVixNQUFOVSxHQUFlVixzQkFBZlU7TUFDQUEsS0FBSyxDQUFDZ0MsS0FBTmhDLEdBQWMsS0FBZEE7TUFFQUEsS0FBSyxDQUFDSixNQUFOSSxHQUFlLENBQ1gsSUFEVyxFQUNMLE9BREssRUFDSSxRQURKLEVBQ2MsZUFEZCxDQUFmQTtNQUlBQSxLQUFLLENBQUM0QixVQUFONUIsR0FBbUI7UUFDZjJCLGFBQWEsRUFBRTtVQUNYTSxLQUFLLEVBQUVDLDZCQURJO1VBRVhDLEtBQUssRUFBRSw0QkFGSTtVQUdYQyxVQUFVLEVBQUU7WUFBQ0MsS0FBSyxFQUFFLElBQVI7WUFBY0MsTUFBTSxFQUFFO1VBQXRCO1FBSEQ7TUFEQSxDQUFuQnRDO01BT0FBLEtBQUssQ0FBQ3VDLEtBQU52QyxHQUFjO1FBQ1Z3QyxPQUFPLEVBQUU7VUFDTEMsSUFBSSxFQUFFLCtCQUREO1VBRUxDLElBQUksRUFBRTtRQUZEO01BREMsQ0FBZDFDO01BT0FBLEtBQUssQ0FBQzJDLE9BQU4zQyxHQUFnQjtRQUNaakIsRUFBRSxFQUFFO1VBQ0FhLE1BQU0sRUFBRSxDQUFDLElBQUQsQ0FEUjtVQUVBZ0QsT0FBTyxFQUFFO1FBRlQ7TUFEUSxDQUFoQjVDOztNQU9BNkMsYUFBT0MsUUFBUEQsQ0FBZ0IsMEJBQWhCQSxFQUE0QzdDLEtBQTVDNkM7Ozs7Ozs7Ozs7Ozs7Ozs7O01DakNBOztNQUNBOztNQUNBOztNQU9BO01BRU87OztNQUFVLE1BQ1g1QyxXQURXLFNBQ1M4QyxVQURULENBQ2E7UUFDcEIsSUFBRmhFLEVBQUU7VUFDRixPQUFPLEtBQUthLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsSUFBaEIsRUFBc0JlLEtBQTdCO1FBQ0g7O1FBRU8sSUFBSkgsSUFBSTtVQUNKLE9BQU8sS0FBS0ksTUFBTCxDQUFZaEIsR0FBWixDQUFnQixNQUFoQixFQUF3QmUsS0FBL0I7UUFDSDs7UUFFUSxJQUFMcUQsS0FBSztVQUNMLE9BQU8sS0FBS3BELE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsT0FBaEIsRUFBeUJlLEtBQWhDO1FBQ0g7O1FBRU8sSUFBSkYsSUFBSTtVQUNKLE9BQU8sS0FBS0csTUFBTCxDQUFZaEIsR0FBWixDQUFnQixNQUFoQixFQUF3QmUsS0FBL0I7UUFDSDs7UUFFWSxJQUFUc0QsU0FBUztVQUNULE9BQU8sS0FBS3JELE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsV0FBaEIsRUFBNkJlLEtBQXBDO1FBQ0g7O1FBRWEsSUFBVnVELFVBQVU7VUFDVixPQUFPLEtBQUt0RCxNQUFMLENBQVloQixHQUFaLENBQWdCLFlBQWhCLEVBQThCZSxLQUFyQztRQUNIOztRQUVRLElBQUx3RCxLQUFLO1VBQ0wsT0FBTyxLQUFLdkQsTUFBTCxDQUFZaEIsR0FBWixDQUFnQixPQUFoQixFQUF5QmUsS0FBaEM7UUFDSDs7UUFFYyxJQUFYeUQsV0FBVztVQUNYLE9BQU8sS0FBS3hELE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsYUFBaEIsRUFBK0JlLEtBQXRDO1FBQ0g7O1FBRVksSUFBVDBELFNBQVM7VUFDVCxPQUFPLEtBQUt6RCxNQUFMLENBQVloQixHQUFaLENBQWdCLFdBQWhCLEVBQTZCZSxLQUFwQztRQUNIOztRQUVVLElBQVAyRCxPQUFPO1VBQ1AsT0FBTyxLQUFLMUQsTUFBTCxDQUFZaEIsR0FBWixDQUFnQixTQUFoQixFQUEyQmUsS0FBbEM7UUFDSDs7UUFFVSxJQUFQNEQsT0FBTztVQUNQLE9BQU8sS0FBSzNELE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsU0FBaEIsRUFBMkJlLEtBQWxDO1FBQ0g7O1FBRVEsSUFBTDZELEtBQUs7VUFDTCxPQUFPLEtBQUs1RCxNQUFMLENBQVloQixHQUFaLENBQWdCLE9BQWhCLEVBQXlCZSxLQUFoQztRQUNIOztRQUVPLElBQUo4RCxJQUFJO1VBQ0osT0FBTyxLQUFLN0QsTUFBTCxDQUFZaEIsR0FBWixDQUFnQixNQUFoQixFQUF3QmUsS0FBL0I7UUFDSDs7UUFFYyxJQUFYK0QsV0FBVztVQUNYLE9BQU8sS0FBSzlELE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsYUFBaEIsRUFBK0JlLEtBQXRDO1FBQ0g7O1FBRVMsSUFBTjlCLE1BQU07VUFDTixPQUFPLEtBQUsrQixNQUFMLENBQVloQixHQUFaLENBQWdCLFFBQWhCLEVBQTBCZSxLQUExQixJQUFtQyxFQUExQztRQUNIOztRQUVXLElBQVJnRSxRQUFRO1VBQ1IsT0FBTyxLQUFLL0QsTUFBTCxDQUFZaEIsR0FBWixDQUFnQixVQUFoQixFQUE0QmUsS0FBNUIsSUFBcUMsRUFBNUM7UUFDSDs7UUFFSyxJQUFGaUUsRUFBRTtVQUNGLE1BQU1BLEVBQUUsR0FBdUIsS0FBS2hDLFVBQUwsQ0FBZ0JoRCxHQUFoQixDQUFvQixJQUFwQixDQUEvQjtVQUNBLE9BQU9nRixFQUFFLElBQXdCQSxFQUFFLENBQUNqRSxLQUFwQztRQUNIOztRQUVXLElBQVJrRSxRQUFRO1VBQ1IsTUFBTUEsUUFBUSxHQUFpQixLQUFLakMsVUFBTCxDQUFnQmhELEdBQWhCLENBQW9CLFVBQXBCLENBQS9CO1VBQ0EsT0FBT2lGLFFBQVEsSUFBY0EsUUFBUSxDQUFDbEUsS0FBdEM7UUFDSDs7UUFFYSxJQUFWbUUsVUFBVTtVQUNWLE1BQU1BLFVBQVUsR0FBaUIsS0FBS2xDLFVBQUwsQ0FBZ0JoRCxHQUFoQixDQUFvQixZQUFwQixDQUFqQztVQUNBLE9BQU9rRixVQUFVLElBQTJCQSxVQUFVLENBQUNuRSxLQUF2RDtRQUNIOztRQUVTLElBQU5vRSxNQUFNO1VBQ04sTUFBTUMsT0FBTyxHQUF1QixLQUFLcEMsVUFBTCxDQUFnQmhELEdBQWhCLENBQW9CLFFBQXBCLENBQXBDO1VBQ0EsT0FBT29GLE9BQU8sSUFBSUEsT0FBTyxDQUFDckUsS0FBMUI7UUFDSDs7UUFFUTs7UUFDTyxJQUFac0UsWUFBWTtVQUNaLE9BQU8sS0FBSyxhQUFaO1FBQ0g7O1FBRVE7O1FBQ0UsSUFBUEMsT0FBTztVQUNQLE9BQU8sS0FBSyxRQUFaO1FBQ0g7O1FBRU0sSUFBSEMsR0FBRztVQUNILE9BQU8sS0FBS1YsSUFBTCxHQUFZLG9CQUFvQixLQUFLQSxJQUFJLEVBQXpDLEdBQThDVyxTQUFyRDtRQUNIOztRQUVEMUQsWUFBWSxHQUFHLENBQUMyRCxRQUFnQixRQUFqQixLQUE4QixLQUFLQyxJQUFMLENBQVVoRyxPQUFWLENBQWtCK0YsS0FBbEIsQ0FBakM7O1FBRVpyRyxZQUFZZ0MsS0FBWmhDLEVBQTRCO1VBQ3hCLE1BQU0sY0FBTixFQUFzQmdDLEtBQXRCO1VBRUEsS0FBSyxRQUFMLEdBQWdCLElBQUl1RSwyQkFBSixDQUF1QixJQUF2QixDQUFoQjtVQUNBLEtBQUssUUFBTCxDQUFjckQsSUFBZCxDQUFtQixRQUFuQixFQUE2QixLQUFLUixZQUFsQztVQUVBLEtBQUssYUFBTCxHQUFxQixJQUFJUixxQ0FBSixDQUE0QixJQUE1QixDQUFyQjtVQUNBLEtBQUssYUFBTCxDQUFtQmdCLElBQW5CLENBQXdCLFFBQXhCLEVBQWtDLEtBQUtSLFlBQXZDO1FBQ0g7O1FBRWdCLE1BQVg4RCxXQUFXO1VBQ2IsSUFBSTtZQUNBLE1BQU14RSxLQUFLLEdBQUc7Y0FBQ3NCLGFBQWEsRUFBRSxLQUFLdkMsRUFBckI7Y0FBeUJnRixNQUFNLEVBQUU7Z0JBQUMsUUFBUTtjQUFUO1lBQWpDLENBQWQ7WUFDQSxNQUFNekUsdUJBQU9DLE9BQVBELENBQWUsOEJBQWZBLEVBQStDVSxLQUEvQ1YsQ0FBTjtZQUNBLEtBQUtvQixZQUFMO1VBSEosRUFJRSxPQUFPcUIsQ0FBUCxFQUFVO1lBQ1I5QyxPQUFPLENBQUNULEtBQVJTLENBQWMsUUFBZEEsRUFBd0I4QyxDQUF4QjlDO1VBQ0g7UUFDSjs7UUFFRHdGLGFBQWE7VUFDVCxPQUFPbkYsdUJBQU9DLE9BQVBELENBQWUsMEJBQWZBLEVBQTJDO1lBQUNnQyxhQUFhLEVBQUUsS0FBS3ZDO1VBQXJCLENBQTNDTyxDQUFQO1FBQ0g7O1FBRVMsTUFBSm9GLElBQUksQ0FBQzFFLEtBQUQsRUFBYztVQUNwQixJQUFJO1lBQ0FBLEtBQUssR0FBRyxFQUFDLEdBQUdBLEtBQUo7Y0FBV3NCLGFBQWEsRUFBRSxLQUFLdkM7WUFBL0IsQ0FBUmlCO1lBQ0EsTUFBTVYsdUJBQU9DLE9BQVBELENBQWUsdUJBQWZBLEVBQXdDVSxLQUF4Q1YsQ0FBTjtZQUNBLEtBQUtvQixZQUFMO1VBSEosRUFJRSxPQUFPcUIsQ0FBUCxFQUFVO1lBQ1I5QyxPQUFPLENBQUNULEtBQVJTLENBQWMsUUFBZEEsRUFBd0I4QyxDQUF4QjlDO1VBQ0g7UUFDSjs7UUFFRDBGLE1BQU07VUFDRixNQUFNQSxNQUFNLEdBQWEsRUFBekI7VUFDQSxLQUFLZixFQUFMLElBQVcsS0FBS0EsRUFBTCxDQUFRZ0IsS0FBUixDQUFjQyxPQUFkLENBQXVCakIsRUFBRCxJQUM3QkEsRUFBRSxDQUFDa0IsT0FBSGxCLENBQVdpQixPQUFYakIsQ0FBb0JtQixNQUFELElBQW9CQSxNQUFNLENBQUMxRyxJQUFQMEcsS0FBZ0IsTUFBaEJBLElBQTBCSixNQUFNLENBQUNwRyxJQUFQb0csQ0FBWUksTUFBTSxDQUFDQyxLQUFuQkwsQ0FBakVmLENBRE8sQ0FBWDtVQUlBLE9BQU9lLE1BQVA7UUFDSDs7TUE5SXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O01DVnhCLE1BQU9NLHVCQUFQLENBQThCO1FBQ3ZCO1FBQ0E7UUFFVDs7OztRQUdNLElBQUZsRyxFQUFFO1VBQ0YsT0FBTyxHQUFHLEtBQUssT0FBTCxDQUFhQSxFQUFFLEVBQXpCO1FBQ0g7O1FBRU8sSUFBSlYsSUFBSTtVQUNKLE9BQU8sS0FBSyxPQUFMLENBQWFvQixJQUFwQjtRQUNIOztRQUVXLElBQVJ5RixRQUFRO1VBQ1IsT0FBTyxLQUFLLE9BQUwsQ0FBYW5HLEVBQXBCO1FBQ0g7O1FBRVMsSUFBTk8sTUFBTTtVQUNOLE9BQU8sS0FBSyxPQUFaO1FBQ0g7O1FBRVMsSUFBTjZGLE1BQU07VUFDTixPQUFPLEtBQUssT0FBTCxDQUFhTCxPQUFiLENBQXFCTSxHQUFyQixDQUF5QixHQUFHLEtBQUssT0FBTCxDQUFhckcsRUFBRSxPQUEzQyxDQUFQO1FBQ0g7O1FBRU8sSUFBSlUsSUFBSTtVQUNKLE9BQU8sS0FBSyxPQUFMLENBQWFBLElBQXBCO1FBQ0g7O1FBRWMsSUFBWDJELFdBQVc7VUFDWCxPQUFPLEtBQUssT0FBTCxDQUFhQSxXQUFwQjtRQUNIOztRQUVEcEYsWUFBWXNCLE1BQVp0QixFQUE0QitHLE1BQTVCL0csRUFBMEM7VUFDdEMsS0FBSyxPQUFMLEdBQWVzQixNQUFmO1VBQ0EsS0FBSyxPQUFMLEdBQWV5RixNQUFmO1FBQ0g7O01BdEMrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ0hwQzs7TUFDQTtNQVFPOzs7TUFBVSxNQUNYTSxrQkFEVyxTQUNnQnRGLGdCQURoQixDQUMwQjtRQUN2Qy9CLFlBQVlnQyxLQUFaaEMsRUFBa0M7VUFDOUIsTUFBTSxzQkFBTixFQUE4QnNILHVCQUE5QixFQUFpRHRGLEtBQWpEO1VBQ0EsS0FBS3VGLFFBQUwsQ0FBY3pDLFFBQWQsQ0FBdUIsS0FBdkI7UUFDSDs7UUFFVyxJQUFSMEMsUUFBUTtVQUNSLElBQUksQ0FBQyxLQUFLQyxJQUFMLENBQVVDLE1BQWYsRUFBdUIsT0FBTyxFQUFQO1VBRXZCLE1BQU1DLE1BQU0sR0FBNkIsRUFBekM7VUFDQSxLQUFLZixLQUFMLENBQVdDLE9BQVgsQ0FBb0JqRSxJQUFELElBQTRCO1lBQzNDK0UsTUFBTSxDQUFDcEgsSUFBUG9ILENBQVkvRSxJQUFaK0U7VUFESjtVQUlBLE9BQU9BLE1BQVA7UUFDSDtRQUVEOzs7Ozs7Ozs7O1FBU0FDLFFBQVEsQ0FBQztVQUFDQyxTQUFTLEdBQUcsYUFBYjtVQUE0QmQsTUFBTSxHQUFHWCxTQUFyQztVQUFnRDBCLElBQUksR0FBRztRQUF2RCxDQUFELEVBQXFFO1VBQ3pFO1VBQ0E7VUFFQSxJQUFJRCxTQUFTLEtBQUssS0FBZEEsSUFBdUIsQ0FBQ0MsSUFBNUIsRUFBa0MsT0FBTyxLQUFLTixRQUFaLENBSnVDLENBTXpFOztVQUNBLE9BQU8sS0FBS0EsUUFBTCxDQUFjTyxNQUFkLENBQXNCbkYsSUFBRCxJQUE0QjtZQUNwRDtZQUNBLElBQUksQ0FBQ0EsSUFBSSxDQUFDOEUsTUFBVixFQUFrQjtZQUVsQixJQUFJLENBQUM5RSxJQUFJLENBQUM3QixFQUFWLEVBQWNFLE9BQU8sQ0FBQ21DLElBQVJuQyxDQUFhLGVBQWJBLEVBQThCMkIsSUFBOUIzQjtZQUVkLE1BQU0rRyxLQUFLLEdBQUcsQ0FBQyxhQUFELEVBQWdCLEtBQWhCLEVBQXVCQyxRQUF2QixDQUFnQ0osU0FBaEMsS0FBOEMsQ0FBQ2pGLElBQUksQ0FBQzdCLEVBQUw2QixFQUFTcUYsUUFBVHJGLENBQWtCLFNBQWxCQSxDQUE3RDtZQUNBLE1BQU1zRixTQUFTLEdBQUcsQ0FBQyxTQUFELEVBQVksS0FBWixFQUFtQkQsUUFBbkIsQ0FBNEJKLFNBQTVCLENBQWxCO1lBQ0EsTUFBTU0sVUFBVSxHQUFHdkYsSUFBSSxDQUFDN0IsRUFBTDZCLEVBQVNxRixRQUFUckYsQ0FBa0JrRixJQUFsQmxGLEtBQTJCQSxJQUFJLEVBQUV0QixNQUFOc0IsRUFBY25CLElBQWRtQixFQUFvQnFGLFFBQXBCckYsQ0FBNkJrRixJQUE3QmxGLENBQTlDOztZQUNBLElBQUksQ0FBQyxDQUFDd0QsU0FBRCxFQUFZLEtBQVosRUFBbUI2QixRQUFuQixDQUE0QmxCLE1BQTVCLENBQUQsS0FBeUNpQixLQUFLLElBQUlFLFNBQWxELENBQUosRUFBa0U7Y0FDOUQsSUFBSXRGLElBQUksRUFBRXZDLElBQU51QyxDQUFXcUYsUUFBWHJGLENBQW9CLFFBQXBCQSxDQUFKLEVBQW1DO2dCQUMvQixNQUFNd0YsTUFBTSxHQUFHeEYsSUFBSSxDQUFDeUYsU0FBTHpGLENBQWUsUUFBZkEsQ0FBZjtnQkFDQSxPQUFPd0YsTUFBTSxDQUFDL0gsSUFBUCtILEtBQWdCckIsTUFBaEJxQixJQUEwQkQsVUFBakM7Y0FDSDs7Y0FDRCxPQUFPdkYsSUFBSSxDQUFDdkMsSUFBTHVDLEVBQVdxRixRQUFYckYsQ0FBb0JtRSxNQUFwQm5FLEtBQStCdUYsVUFBdEM7WUFDSDs7WUFDRCxPQUFPQSxVQUFVLEtBQUtILEtBQUssSUFBSUUsU0FBZCxDQUFqQjtVQWhCRyxFQUFQO1FBa0JIOztNQW5Ec0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNWM0M7O01BQ0E7TUE4Q087O01BUFA7Ozs7Ozs7OztNQU9pQixNQUNYWixpQkFEVyxTQUNlNUQsVUFEZixDQUNtQjtRQUMxQixJQUFGM0MsRUFBRTtVQUNGLE9BQU8sS0FBS2EsTUFBTCxDQUFZaEIsR0FBWixDQUFnQixJQUFoQixFQUFzQmUsS0FBN0I7UUFDSDs7UUFFYyxJQUFYMUIsV0FBVztVQUNYLE1BQU1BLFdBQVcsR0FBaUIsS0FBSzJELFVBQUwsQ0FBZ0JoRCxHQUFoQixDQUFvQixhQUFwQixDQUFsQztVQUNBLE9BQU9YLFdBQVcsSUFBaUJBLFdBQVcsQ0FBQzBCLEtBQS9DO1FBQ0g7O1FBRVMsSUFBTkwsTUFBTTtVQUNOLE1BQU1BLE1BQU0sR0FBaUIsS0FBS3NDLFVBQUwsQ0FBZ0JoRCxHQUFoQixDQUFvQixRQUFwQixDQUE3QjtVQUNBLE9BQU9VLE1BQU0sSUFBWUEsTUFBTSxDQUFDSyxLQUFoQztRQUNIOztRQUVVLElBQVBtRixPQUFPO1VBQ1AsT0FBc0IsS0FBS2xELFVBQUwsQ0FBZ0JoRCxHQUFoQixDQUFvQixTQUFwQixDQUF0QjtRQUNIO1FBRUQ7Ozs7O1FBR1EsSUFBSmEsSUFBSTtVQUNKLE1BQU07WUFBQ0g7VUFBRCxJQUFXLElBQWpCO1VBQ0EsT0FBT0EsTUFBTSxFQUFFRyxJQUFmO1FBQ0g7O1FBRU8sSUFBSkEsSUFBSSxDQUFDRSxLQUFELEVBQWM7VUFDbEIsS0FBS0wsTUFBTCxLQUFnQixLQUFLQSxNQUFMLENBQVlHLElBQVosR0FBbUJFLEtBQW5DO1FBQ0g7O1FBRWMsSUFBWHlELFdBQVc7VUFDWCxNQUFNO1lBQUM5RDtVQUFELElBQVcsSUFBakI7VUFDQSxPQUFPQSxNQUFNLEVBQUU4RCxXQUFmO1FBQ0g7O1FBRWMsSUFBWEEsV0FBVyxDQUFDekQsS0FBRCxFQUFjO1VBQ3pCLEtBQUtMLE1BQUwsS0FBZ0IsS0FBS0EsTUFBTCxDQUFZOEQsV0FBWixHQUEwQnpELEtBQTFDO1FBQ0g7O1FBRVEsSUFBTHFGLEtBQUs7VUFDTCxNQUFNRixPQUFPLEdBQWtCLEtBQUtsRCxVQUFMLENBQWdCaEQsR0FBaEIsQ0FBb0IsU0FBcEIsQ0FBL0I7VUFDQSxNQUFNd0gsTUFBTSxHQUFHdEIsT0FBTyxFQUFFbEcsR0FBVGtHLENBQWEsR0FBRyxLQUFLL0YsRUFBRSxVQUF2QitGLENBQWY7VUFDQSxPQUFPc0IsTUFBTSxFQUFFcEIsS0FBZjtRQUNIO1FBRUQ7Ozs7O1FBR1EsSUFBSjNHLElBQUk7VUFDSixPQUFPLEtBQUt5RyxPQUFMLEdBQWUsQ0FBQyxHQUFHLEtBQUtBLE9BQUwsQ0FBYXdCLE1BQWIsRUFBSixFQUEyQkMsR0FBM0IsQ0FBK0J4QixNQUFNLElBQUlBLE1BQU0sQ0FBQ3RGLElBQWhELENBQWYsR0FBdUUyRSxTQUE5RTtRQUNIOztRQUVZLElBQVRvQyxTQUFTO1VBQ1QsT0FBTyx1QkFBdUJDLFdBQXZCLEVBQVA7UUFDSDs7UUFFa0IsSUFBZkMsZUFBZTtVQUNmLE1BQU1DLFVBQVUsR0FBYSxFQUE3QjtVQUVBLEtBQUs3QixPQUFMLEVBQWNELE9BQWQsQ0FBc0JFLE1BQU0sSUFBRztZQUMzQkEsTUFBTSxDQUFDNEIsVUFBUDVCLENBQWtCRixPQUFsQkUsQ0FBMEI2QixTQUFTLElBQUc7Y0FDbEMsSUFBSSxDQUFDRCxVQUFVLENBQUNWLFFBQVhVLENBQW9CQyxTQUFTLENBQUNuSCxJQUE5QmtILENBQUwsRUFDSUEsVUFBVSxDQUFDcEksSUFBWG9JLENBQWdCQyxTQUFTLENBQUNuSCxJQUExQmtIO1lBRlI7VUFESjtVQU1BLE9BQU8sQ0FBQyxHQUFHQSxVQUFKLENBQVA7UUFDSDs7UUFFRDNJLFlBQVlnQyxLQUFaaEMsRUFBNEI7VUFDeEIsTUFBTSxzQkFBTixFQUE4QmdDLEtBQTlCO1FBQ0g7UUFFRDs7Ozs7OztRQUtBNkcsYUFBYSxDQUFDRCxZQUFvQixJQUFyQixFQUF5QjtVQUNsQyxJQUFJRSxJQUFJLEdBQUcsS0FBWDtVQUNBLEtBQUtoQyxPQUFMLENBQWFELE9BQWIsQ0FBcUJFLE1BQU0sSUFBSUEsTUFBTSxDQUFDZ0MsWUFBUGhDLENBQW9CNkIsU0FBcEI3QixJQUFpQytCLElBQUksR0FBRyxJQUF4Qy9CLEdBQStDLElBQTlFO1VBQ0EsT0FBTytCLElBQVA7UUFDSDs7UUFFRFQsU0FBUyxDQUFDNUcsSUFBRCxFQUFhO1VBQ2xCLElBQUlzRixNQUFNLEdBQXVCWCxTQUFqQztVQUNBLEtBQUtVLE9BQUwsQ0FBYUQsT0FBYixDQUFxQmpFLElBQUksSUFBRztZQUN4QixJQUFJQSxJQUFJLENBQUNuQixJQUFMbUIsS0FBY25CLElBQWxCLEVBQXdCc0YsTUFBTSxHQUFXbkUsSUFBakJtRTtVQUQ1QjtVQUdBLE9BQU9BLE1BQVA7UUFDSDs7UUFFRGlDLFNBQVMsQ0FBQzNFLEtBQUQsRUFBb0IxQyxLQUFwQixFQUEyQztVQUNoRCxNQUFNSyxLQUFLLEdBQWM7WUFBQ2tGLFFBQVEsRUFBRSxLQUFLbkcsRUFBaEI7WUFBb0JrSSxPQUFPLEVBQUUsS0FBSzNILE1BQUwsQ0FBWUU7VUFBekMsQ0FBekI7VUFFQSxJQUFJNkMsS0FBSyxLQUFLLEtBQWQsRUFBcUJyQyxLQUFLLENBQUM4RSxPQUFOOUUsR0FBZ0I7WUFBQ2tILEdBQUcsRUFBV3ZIO1VBQWYsQ0FBaEJLLENBQXJCLEtBQ0ssSUFBSXFDLEtBQUssS0FBSyxXQUFkLEVBQTJCO1lBQzVCLElBQUksQ0FBQyxLQUFLd0UsYUFBTCxFQUFMLEVBQTJCO1lBQzNCN0csS0FBSyxDQUFDOEUsT0FBTjlFLEdBQWdCO2NBQUNtSCxFQUFFLEVBQUU7Z0JBQUNDLFNBQVMsRUFBV3pIO2NBQXJCO1lBQUwsQ0FBaEJLO1VBRkMsT0FHRXFDLEtBQUssS0FBSyxPQUFWQSxHQUFvQnJDLEtBQUssQ0FBQ21ELEtBQU5uRCxHQUFzQkwsS0FBMUMwQyxHQUFrRHJDLEtBQUssQ0FBQ29ELFdBQU5wRCxHQUE0QkwsS0FBOUUwQztVQUVQLE9BQU8vQyx1QkFBT0MsT0FBUEQsQ0FBZSxzQkFBZkEsRUFBdUNVLEtBQXZDVixDQUFQO1FBQ0g7O1FBRUQrSCxLQUFLLENBQUM1SCxJQUFELEVBQWE7VUFDZCxPQUFPSCx1QkFBT0MsT0FBUEQsQ0FBZSx1QkFBZkEsRUFBd0M7WUFDM0NHLElBQUksRUFBRUEsSUFEcUM7WUFFM0N5RixRQUFRLEVBQUUsS0FBS25HO1VBRjRCLENBQXhDTyxDQUFQO1FBSUg7O1FBRURnSSxNQUFNO1VBQ0YsSUFBSSxDQUFDLEtBQUtoSSxNQUFMLENBQVlFLElBQWpCLEVBQXVCO1lBQ25CUCxPQUFPLENBQUNULEtBQVJTLENBQWMsMENBQWRBO1lBQ0E7VUFDSDs7VUFDRCxPQUFPSyx1QkFBT0MsT0FBUEQsQ0FBZSx3QkFBZkEsRUFBeUM7WUFBQ2lJLE1BQU0sRUFBRSxLQUFLakksTUFBTCxDQUFZRTtVQUFyQixDQUF6Q0YsQ0FBUDtRQUNIOztRQUVEa0ksVUFBVSxDQUFDeEgsS0FBRCxFQUFtQjtVQUN6QixJQUFJakIsRUFBRSxHQUFHaUIsS0FBSyxDQUFDM0IsSUFBTjJCLEtBQWUsU0FBZkEsR0FBMkIsR0FBRyxLQUFLakIsRUFBRSxFQUFyQ2lCLEdBQTBDLEdBQUcsS0FBS2pCLEVBQUUsS0FBS2lCLEtBQUssQ0FBQytFLE1BQU0sS0FBSy9FLEtBQUssQ0FBQzRHLFNBQVMsRUFBbEc7O1VBQ0EsSUFBSTVHLEtBQUssQ0FBQzNCLElBQU4yQixJQUFjQSxLQUFLLENBQUMzQixJQUFOMkIsS0FBZSxXQUFqQyxFQUE4QztZQUMxQyxNQUFNeUgsS0FBSyxHQUFHLEtBQUsxSSxFQUFMLENBQVEwSSxLQUFSLENBQWMsSUFBZCxDQUFkO1lBQ0ExSSxFQUFFLEdBQUcsR0FBRzBJLEtBQUssQ0FBQyxDQUFELENBQUcsS0FBS0EsS0FBSyxDQUFDLENBQUQsQ0FBRyxLQUFLekgsS0FBSyxDQUFDK0UsTUFBTSxFQUE5Q2hHO1VBQ0g7O1VBRUQsT0FBT08sdUJBQU9DLE9BQVBELENBQWUsaUJBQWZBLEVBQWtDO1lBQ3JDUCxFQUFFLEVBQUVBLEVBRGlDO1lBRXJDVixJQUFJLEVBQUUyQixLQUFLLENBQUMzQixJQUFOMkIsSUFBYyxXQUZpQjtZQUdyQzBILFFBQVEsRUFBRTFILEtBQUssQ0FBQzBIO1VBSHFCLENBQWxDcEksQ0FBUDtRQUtIOztRQUVEcUksU0FBUyxDQUFDN0YsTUFBRCxFQUFvQjtVQUN6QixNQUFNOUIsS0FBSyxHQUFHO1lBQUNrRixRQUFRLEVBQUUsS0FBS25HLEVBQWhCO1lBQW9CLEdBQUcrQztVQUF2QixDQUFkO1VBQ0EsT0FBT3hDLHVCQUFPQyxPQUFQRCxDQUFlLDJCQUFmQSxFQUE0Q1UsS0FBNUNWLENBQVA7UUFDSDs7TUF4SStCOzs7Ozs7Ozs7Ozs7OztNQ2hEcEM7O01BQ0E7O01BQ0E7O01BQ0E7O01BQ0E7O01BRUEsTUFBTVUsS0FBSyxHQUFlLEVBQTFCO01BRUFBLEtBQUssQ0FBQ1YsTUFBTlUsR0FBZVYsc0JBQWZVO01BQ0FBLEtBQUssQ0FBQ2dDLEtBQU5oQyxHQUFjLEtBQWRBO01BRUFBLEtBQUssQ0FBQ0osTUFBTkksR0FBZSxDQUFDLElBQUQsRUFBTyxhQUFQLEVBQXNCLFFBQXRCLEVBQWdDLFNBQWhDLENBQWZBO01BRUFBLEtBQUssQ0FBQzRCLFVBQU41QixHQUFtQjtRQUNmL0IsV0FBVyxFQUFFO1VBQ1R5RCxJQUFJLEVBQUV6QixpQkFERztVQUVUa0MsS0FBSyxFQUFFLGFBRkU7VUFHVEMsVUFBVSxFQUFFLENBQUM7WUFBQ0MsS0FBSyxFQUFFLElBQVI7WUFBY0MsTUFBTSxFQUFFO1VBQXRCLENBQUQ7UUFISCxDQURFO1FBTWZoRCxNQUFNLEVBQUU7VUFDSm9DLElBQUksRUFBRWtHLGFBREY7VUFFSnpGLEtBQUssRUFBRSxTQUZIO1VBR0pDLFVBQVUsRUFBRSxDQUFDO1lBQUNDLEtBQUssRUFBRSxJQUFSO1lBQWNDLE1BQU0sRUFBRTtVQUF0QixDQUFEO1FBSFIsQ0FOTztRQVdmd0MsT0FBTyxFQUFFO1VBQ0w3QyxLQUFLLEVBQUU0RixhQURGO1VBRUwxRixLQUFLLEVBQUUsU0FGRjtVQUdMQyxVQUFVLEVBQUU7WUFBQ0MsS0FBSyxFQUFFLElBQVI7WUFBY0MsTUFBTSxFQUFFO1VBQXRCO1FBSFA7TUFYTSxDQUFuQnRDO01Ba0JBQSxLQUFLLENBQUN1QyxLQUFOdkMsR0FBYztRQUNWd0MsT0FBTyxFQUFFO1VBQ0xDLElBQUksRUFBRSwyQkFERDtVQUVMQyxJQUFJLEVBQUUsMkJBRkQ7VUFHTG9GLEtBQUssRUFBRTtRQUhGO01BREMsQ0FBZDlIO01BUUFBLEtBQUssQ0FBQzJDLE9BQU4zQyxHQUFnQjtRQUNaakIsRUFBRSxFQUFFO1VBQ0FhLE1BQU0sRUFBRSxDQUFDLElBQUQsQ0FEUjtVQUVBZ0QsT0FBTyxFQUFFO1FBRlQsQ0FEUTtRQUtabUYsWUFBWSxFQUFFO1VBQ1ZuSSxNQUFNLEVBQUUsQ0FBQyxhQUFELENBREU7VUFFVm9JLE9BQU8sRUFBRTtZQUFDL0osV0FBVyxFQUFFLENBQUMsTUFBRCxFQUFTLE9BQVQ7VUFBZDtRQUZDO01BTEYsQ0FBaEIrQjs7TUFXQTZDLGFBQU9DLFFBQVBELENBQWdCLHNCQUFoQkEsRUFBd0M3QyxLQUF4QzZDOzs7Ozs7Ozs7Ozs7Ozs7OztNQ2xEQTs7TUFDQTs7TUFFQTs7TUFXTSxNQUFPMEIsa0JBQVAsU0FBa0M3RyxZQUFsQyxDQUF3QztRQUNqQztRQUVULFlBQWlDLEVBQWpDOztRQUNZLElBQVJFLFFBQVE7VUFDUixPQUFPLEtBQUssU0FBWjtRQUNIOztRQUVELFVBQStCLEVBQS9COztRQUNVLElBQU5DLE1BQU07VUFDTixPQUFPLEtBQUssT0FBWjtRQUNIOztRQUVEOztRQUNjLElBQVZDLFVBQVU7VUFDVixPQUFPLEtBQUssV0FBWjtRQUNIOztRQUVEOztRQUNhLElBQVRDLFNBQVM7VUFDVCxPQUFPLEtBQUssVUFBWjtRQUNIO1FBRUQ7Ozs7O1FBR0FDLFlBQVlDLFdBQVpELEVBQW9DO1VBQ2hDO1VBQ0EsS0FBSyxZQUFMLEdBQW9CQyxXQUFwQjtRQUNIOztRQUVPRSxTQUFTLEdBQUlDLE9BQUQsSUFBMEI7VUFDMUMsSUFBSSxDQUFDLENBQUMsU0FBRCxFQUFZNkgsUUFBWixDQUFxQjdILE9BQU8sQ0FBQ0MsSUFBN0IsQ0FBTCxFQUF5Qzs7VUFFekMsSUFBSUQsT0FBTyxDQUFDTCxTQUFaLEVBQXVCO1lBQ25CLEtBQUssVUFBTCxHQUFrQixJQUFsQjtZQUNBLEtBQUssV0FBTCxHQUFtQixLQUFuQjtZQUNBLEtBQUtPLE9BQUwsQ0FBYSxRQUFiO1lBQ0E7VUFDSDs7VUFFRCxLQUFLLFNBQUwsQ0FBZUMsSUFBZixDQUFvQkgsT0FBcEI7VUFDQUEsT0FBTyxDQUFDSSxLQUFSSixJQUFpQixLQUFLLE9BQUwsQ0FBYUcsSUFBYixDQUFrQkgsT0FBbEIsQ0FBakJBO1VBQ0EsS0FBS0UsT0FBTCxDQUFhLFFBQWI7UUFaYTtRQWVqQixZQUFZLEtBQVo7O1FBRXFCLE1BQVBHLE9BQU87VUFDakIsSUFBSSxLQUFLLFNBQVQsRUFBb0I7VUFDcEIsS0FBSyxTQUFMLEdBQWlCLElBQWpCOztVQUVBLElBQUk7WUFDQSxNQUFNQyxPQUFPLEdBQUcsTUFBTUMsaUJBQVNDLEdBQVRELENBQWEsb0JBQWJBLENBQXRCO1lBQ0EsTUFBTUUsTUFBTSxHQUFHLE1BQU1ILE9BQU8sQ0FBQ0csTUFBN0I7WUFDQUEsTUFBTSxDQUFDQyxFQUFQRCxDQUFVLG1CQUFtQixLQUFLLFlBQUwsQ0FBa0JFLEVBQUUsRUFBakRGLEVBQXFELEtBQUtWLFNBQTFEVTtVQUhKLEVBSUUsT0FBT0csR0FBUCxFQUFZO1lBQ1ZDLE9BQU8sQ0FBQ1QsS0FBUlMsQ0FBY0QsR0FBRyxDQUFDRSxLQUFsQkQ7VUFDSDtRQUNKOztRQUVRLE1BQUhnSixHQUFHLENBQUNsSixFQUFELEVBQWF5RCxPQUFiLEVBQStEO1VBQ3BFLElBQUksS0FBSyxXQUFULEVBQXNCO1VBQ3RCLElBQUksQ0FBQ3pELEVBQUwsRUFBUyxNQUFNLElBQUlNLEtBQUosQ0FBVSwwQkFBVixDQUFOO1VBQ1QsSUFBSSxDQUFDbUQsT0FBTyxDQUFDckQsS0FBVCxJQUFrQixDQUFDcUQsT0FBTyxDQUFDeUIsWUFBL0IsRUFBNkMsTUFBTSxJQUFJNUUsS0FBSixDQUFVLHVCQUFWLENBQU47VUFFN0MsS0FBS0ssS0FBTDtVQUNBLEtBQUssV0FBTCxHQUFtQixJQUFuQjtVQUNBLEtBQUtwQixPQUFMLENBQWEsUUFBYjtVQUVBLE1BQU0wQixLQUFLLEdBQUdrSSxNQUFNLENBQUNDLE1BQVBELENBQWM7WUFBQ2pLLFdBQVcsRUFBRSxLQUFLLFlBQUwsQ0FBa0JjLEVBQWhDO1lBQW9DSyxZQUFZLEVBQUVMO1VBQWxELENBQWRtSixFQUFxRTFGLE9BQXJFMEYsQ0FBZDs7VUFDQSxJQUFJO1lBQ0EsTUFBTSxLQUFLekosT0FBTCxFQUFOO1lBQ0EsTUFBTWEsdUJBQU9DLE9BQVBELENBQWUsc0JBQWZBLEVBQXVDVSxLQUF2Q1YsQ0FBTjtVQUZKLEVBR0UsT0FBT04sR0FBUCxFQUFZO1lBQ1ZDLE9BQU8sQ0FBQ1QsS0FBUlMsQ0FBY0QsR0FBRyxDQUFDWixPQUFsQmE7WUFDQSxLQUFLLFVBQUwsR0FBa0IsS0FBSyxXQUFMLEdBQW1CLEtBQXJDO1lBQ0EsS0FBS1gsT0FBTCxDQUFhLFFBQWI7VUFDSDtRQUNKOztRQUVEb0IsS0FBSztVQUNELEtBQUssT0FBTCxHQUFlLEVBQWY7VUFDQSxLQUFLLFNBQUwsR0FBaUIsRUFBakI7VUFDQSxLQUFLLFVBQUwsR0FBa0IsS0FBbEI7VUFDQSxLQUFLLFdBQUwsR0FBbUIsS0FBbkI7VUFDQSxLQUFLcEIsT0FBTCxDQUFhLFFBQWI7UUFDSDs7TUF2RnlDOzs7Ozs7Ozs7Ozs7OztNQ2Q5Qzs7TUFDQTs7TUFDQTs7TUFDQTs7TUFDQTs7TUFDQTs7TUFFQSxNQUFNMEIsS0FBSyxHQUFlLEVBQTFCO01BRUFBLEtBQUssQ0FBQ2dDLEtBQU5oQyxHQUFjLEtBQWRBO01BQ0FBLEtBQUssQ0FBQ1YsTUFBTlUsR0FBZVYsc0JBQWZVO01BRUFBLEtBQUssQ0FBQ0osTUFBTkksR0FBZSxDQUNYLElBRFcsRUFDTCxNQURLLEVBQ0csT0FESCxFQUNZLE1BRFosRUFDb0IsV0FEcEIsRUFDaUMsWUFEakMsRUFFWCxPQUZXLEVBRUYsYUFGRSxFQUVhLFdBRmIsRUFFMEIsU0FGMUIsRUFHWCxTQUhXLEVBR0EsT0FIQSxFQUdTLE1BSFQsRUFHaUIsUUFIakIsRUFHMkIsYUFIM0IsRUFJWCxRQUpXLEVBSUQsVUFKQyxDQUFmQTtNQU9BQSxLQUFLLENBQUM0QixVQUFONUIsR0FBbUI7UUFDZjZELFFBQVEsRUFBRTtVQUNObkMsSUFBSSxFQUFFMEcsY0FEQTtVQUVOakcsS0FBSyxFQUFFLFdBRkQ7VUFHTmtHLFNBQVMsRUFBRSxJQUhMO1VBSU5qRyxVQUFVLEVBQUUsQ0FBQztZQUFDQyxLQUFLLEVBQUUsSUFBUjtZQUFjQyxNQUFNLEVBQUU7VUFBdEIsQ0FBRDtRQUpOLENBREs7UUFPZnNCLEVBQUUsRUFBRTtVQUNBN0QsVUFBVSxFQUFFc0YsK0JBRFo7VUFFQWxELEtBQUssRUFBRSxzQkFGUDtVQUdBNEQsTUFBTSxFQUFFLENBQUM7WUFBQzFELEtBQUssRUFBRSxhQUFSO1lBQXVCQyxNQUFNLEVBQUU7VUFBL0IsQ0FBRDtRQUhSLENBUFc7UUFZZnlCLE1BQU0sRUFBRTtVQUNKaEUsVUFBVSxFQUFFdUksOEJBRFI7VUFFSm5HLEtBQUssRUFBRSxxQkFGSDtVQUdKNEQsTUFBTSxFQUFFLENBQUM7WUFBQzFELEtBQUssRUFBRSxhQUFSO1lBQXVCQyxNQUFNLEVBQUU7VUFBL0IsQ0FBRDtRQUhKLENBWk87UUFpQmZ3QixVQUFVLEVBQUU7VUFDUnBDLElBQUksRUFBRUQsNEJBREU7VUFFUlUsS0FBSyxFQUFFLDBCQUZDO1VBR1JrRyxTQUFTLEVBQUUsSUFISDtVQUlSakcsVUFBVSxFQUFFLENBQUM7WUFBQ0MsS0FBSyxFQUFFLElBQVI7WUFBY0MsTUFBTSxFQUFFO1VBQXRCLENBQUQ7UUFKSjtNQWpCRyxDQUFuQnRDO01BeUJBQSxLQUFLLENBQUN1QyxLQUFOdkMsR0FBYztRQUNWd0MsT0FBTyxFQUFFO1VBQ0xDLElBQUksRUFBRSxtQkFERDtVQUVMQyxJQUFJLEVBQUU7UUFGRDtNQURDLENBQWQxQztNQU9BQSxLQUFLLENBQUMyQyxPQUFOM0MsR0FBZ0I7UUFDWmpCLEVBQUUsRUFBRTtVQUNBYSxNQUFNLEVBQUUsQ0FBQyxJQUFELENBRFI7VUFFQWdELE9BQU8sRUFBRTtRQUZULENBRFE7UUFLWm5ELElBQUksRUFBRTtVQUNGRyxNQUFNLEVBQUUsQ0FBQyxNQUFELENBRE47VUFFRjJJLE1BQU0sRUFBRTtRQUZOO01BTE0sQ0FBaEJ2STs7TUFXQTZDLGFBQU9DLFFBQVBELENBQWdCLGNBQWhCQSxFQUFnQzdDLEtBQWhDNkM7Ozs7Ozs7Ozs7Ozs7Ozs7O01DOURBOztNQUNBO01BRU87OztNQUFVLE1BQ1h5RixrQkFEVyxTQUNnQnZJLGdCQURoQixDQUMwQjtRQUV2Qy9CLFlBQVlnQyxLQUFaaEMsRUFBa0M7VUFDOUIsTUFBTSxxQkFBTixFQUE2QndLLHVCQUE3QixFQUFnRHhJLEtBQWhEO1FBQ0g7O01BSnNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O01DSDNDO01BT087OztNQUFVLE1BQ1h3SSxpQkFEVyxTQUNlQyxjQURmLENBQ3FCO1FBQzVCLElBQUYxSixFQUFFO1VBQ0YsT0FBTyxLQUFLYSxNQUFMLENBQVloQixHQUFaLENBQWdCLElBQWhCLEVBQXNCZSxLQUE3QjtRQUNIOztRQUVPLElBQUorSSxJQUFJO1VBQ0osT0FBTyxLQUFLOUksTUFBTCxDQUFZaEIsR0FBWixDQUFnQixNQUFoQixFQUF3QmUsS0FBL0I7UUFDSDs7UUFFVyxJQUFSK0gsUUFBUTtVQUNSLE9BQU8sS0FBSzlILE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsVUFBaEIsRUFBNEJlLEtBQW5DO1FBQ0g7O1FBRVUsSUFBUHNILE9BQU87VUFDUCxPQUFPLEtBQUtySCxNQUFMLENBQVloQixHQUFaLENBQWdCLFNBQWhCLEVBQTJCZSxLQUFsQztRQUNIOztRQUVXLElBQVJnSixRQUFRO1VBQ1IsT0FBTyxLQUFLL0ksTUFBTCxDQUFZaEIsR0FBWixDQUFnQixVQUFoQixFQUE0QmUsS0FBbkM7UUFDSDs7UUFFVyxJQUFSaUosUUFBUTtVQUNSLE9BQU8sS0FBS2hKLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsVUFBaEIsRUFBNEJlLEtBQW5DO1FBQ0g7O1FBRVUsSUFBUGtKLE9BQU87VUFDUCxPQUFPLEtBQUtqSixNQUFMLENBQVloQixHQUFaLENBQWdCLFNBQWhCLEVBQTJCZSxLQUFsQztRQUNIOztRQUVXLElBQVJtSixRQUFRO1VBQ1IsT0FBTyxLQUFLbEosTUFBTCxDQUFZaEIsR0FBWixDQUFnQixVQUFoQixFQUE0QmUsS0FBbkM7UUFDSDs7UUFFRDNCLFlBQVlnQyxLQUFaaEMsRUFBNEI7VUFDeEIsTUFBTSxxQkFBTixFQUE2QmdDLEtBQTdCO1FBQ0g7O01BbkNpQzs7Ozs7Ozs7Ozs7Ozs7TUNUdEM7O01BQ0E7O01BRUEsTUFBTUEsS0FBSyxHQUFlLEVBQTFCO01BRUFBLEtBQUssQ0FBQ1YsTUFBTlUsR0FBZVYsc0JBQWZVO01BQ0FBLEtBQUssQ0FBQ2dDLEtBQU5oQyxHQUFjLEtBQWRBO01BRUFBLEtBQUssQ0FBQ0osTUFBTkksR0FBZSxDQUNYLElBRFcsRUFDTCxNQURLLEVBQ0csVUFESCxFQUNlLFNBRGYsRUFDMEIsVUFEMUIsRUFDc0MsU0FEdEMsRUFDaUQsVUFEakQsRUFDNkQsVUFEN0QsQ0FBZkE7TUFJQUEsS0FBSyxDQUFDdUMsS0FBTnZDLEdBQWM7UUFDVndDLE9BQU8sRUFBRTtVQUNMQyxJQUFJLEVBQUUsMEJBREQ7VUFFTEMsSUFBSSxFQUFFO1FBRkQ7TUFEQyxDQUFkMUM7TUFPQUEsS0FBSyxDQUFDMkMsT0FBTjNDLEdBQWdCO1FBQ1pqQixFQUFFLEVBQUU7VUFDQWEsTUFBTSxFQUFFLENBQUMsSUFBRCxDQURSO1VBRUFnRCxPQUFPLEVBQUU7UUFGVCxDQURRO1FBS1ptRixZQUFZLEVBQUU7VUFDVm5JLE1BQU0sRUFBRSxDQUFDLGFBQUQ7UUFERTtNQUxGLENBQWhCSTs7TUFVQTZDLGFBQU9DLFFBQVBELENBQWdCLHFCQUFoQkEsRUFBdUM3QyxLQUF2QzZDOzs7Ozs7Ozs7Ozs7Ozs7OztNQzdCQTs7TUFDQTtNQUVPOzs7TUFBVSxNQUNYa0csU0FEVyxTQUNPaEosZ0JBRFAsQ0FDaUI7UUFDOUIvQixZQUFZZ0MsS0FBWmhDLEVBQWtDO1VBQzlCLE1BQU0sbUJBQU4sRUFBMkJnTCxjQUEzQixFQUFxQ2hKLEtBQXJDO1FBQ0g7O01BSDZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O01DSmxDO01BR087OztNQUFVLE1BQ1hnSixRQURXLFNBQ010SCxVQUROLENBQ1U7UUFDakIsSUFBRjNDLEVBQUU7VUFDRixPQUFPLEtBQUthLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsSUFBaEIsRUFBc0JlLEtBQTdCO1FBQ0g7O1FBRVMsSUFBTm9GLE1BQU07VUFDTixNQUFNQSxNQUFNLEdBQWlCLEtBQUtuRCxVQUFMLENBQWdCaEQsR0FBaEIsQ0FBb0IsUUFBcEIsQ0FBN0I7VUFDQSxPQUFPbUcsTUFBTSxJQUFZQSxNQUFNLENBQUNwRixLQUFoQztRQUNIOztRQUVXLElBQVJ1RixRQUFRO1VBQ1IsT0FBTyxLQUFLdEYsTUFBTCxDQUFZaEIsR0FBWixDQUFnQixXQUFoQixFQUE2QmUsS0FBcEM7UUFDSDs7UUFFVyxJQUFSc0osUUFBUTtVQUNSLE9BQU8sS0FBS3JKLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsUUFBaEIsRUFBMEJlLEtBQWpDO1FBQ0g7O1FBRUssSUFBRnVKLEVBQUU7VUFDRixPQUFPLEtBQUt0SixNQUFMLENBQVloQixHQUFaLENBQWdCLElBQWhCLEVBQXNCZSxLQUE3QjtRQUNIOztRQUVEM0IsWUFBWWdDLEtBQVpoQyxFQUE0QjtVQUN4QixNQUFNLG1CQUFOLEVBQTJCZ0MsS0FBM0I7UUFDSDs7TUF4QnNCOzs7Ozs7Ozs7Ozs7OztNQ0ozQjs7TUFDQTs7TUFDQTs7TUFFQSxNQUFNQSxLQUFLLEdBQWUsRUFBMUI7TUFFQUEsS0FBSyxDQUFDVixNQUFOVSxHQUFlVixzQkFBZlU7TUFDQUEsS0FBSyxDQUFDZ0MsS0FBTmhDLEdBQWMsS0FBZEE7TUFFQUEsS0FBSyxDQUFDSixNQUFOSSxHQUFlLENBQ1gsSUFEVyxFQUNMLFFBREssRUFDSyxJQURMLEVBQ1csV0FEWCxDQUFmQTtNQUdBQSxLQUFLLENBQUM0QixVQUFONUIsR0FBbUI7UUFDZitFLE1BQU0sRUFBRTtVQUNKckQsSUFBSSxFQUFFbUcsWUFERjtVQUVKMUYsS0FBSyxFQUFFLFNBRkg7VUFHSkMsVUFBVSxFQUFFLENBQUM7WUFBQ0MsS0FBSyxFQUFFLElBQVI7WUFBY0MsTUFBTSxFQUFFO1VBQXRCLENBQUQ7UUFIUjtNQURPLENBQW5CdEM7TUFPQUEsS0FBSyxDQUFDdUMsS0FBTnZDLEdBQWM7UUFDVndDLE9BQU8sRUFBRTtVQUNMQyxJQUFJLEVBQUUsd0JBREQ7VUFFTEMsSUFBSSxFQUFFO1FBRkQ7TUFEQyxDQUFkMUM7TUFPQUEsS0FBSyxDQUFDMkMsT0FBTjNDLEdBQWdCO1FBQ1pqQixFQUFFLEVBQUU7VUFDQWEsTUFBTSxFQUFFLENBQUMsSUFBRCxDQURSO1VBRUFnRCxPQUFPLEVBQUU7UUFGVCxDQURRO1FBS1prQyxPQUFPLEVBQUU7VUFDTGxGLE1BQU0sRUFBRSxDQUFDLFFBQUQsQ0FESDtVQUVMb0ksT0FBTyxFQUFFO1lBQUNqRCxNQUFNLEVBQUUsQ0FBQyxNQUFEO1VBQVQ7UUFGSjtNQUxHLENBQWhCL0U7O01BV0E2QyxhQUFPQyxRQUFQRCxDQUFnQixtQkFBaEJBLEVBQXFDN0MsS0FBckM2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNyQ0E7O01BQ0E7TUFFTzs7O01BQVUsTUFDWHNHLGtCQURXLFNBQ2dCcEosZ0JBRGhCLENBQzBCO1FBQ3ZDL0IsWUFBWWdDLEtBQVpoQyxFQUFrQztVQUM5QixNQUFNLHFCQUFOLEVBQTZCb0wsc0JBQTdCLEVBQStDcEosS0FBL0M7UUFDSDs7TUFIc0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNKM0M7TUFFTzs7O01BQVUsTUFDWG9KLGdCQURXLFNBQ2MxSCxVQURkLENBQ2tCO1FBQ3pCLElBQUYzQyxFQUFFO1VBQ0YsT0FBTyxLQUFLYSxNQUFMLENBQVloQixHQUFaLENBQWdCLElBQWhCLEVBQXNCZSxLQUE3QjtRQUNIOztRQUVEM0IsWUFBWWdDLEtBQVpoQyxFQUE0QjtVQUN4QixNQUFNLHFCQUFOLEVBQTZCZ0MsS0FBN0I7UUFDSDs7TUFQOEI7Ozs7Ozs7Ozs7Ozs7O01DSG5DOztNQUNBOztNQUVBLE1BQU1BLEtBQUssR0FBZSxFQUExQjtNQUVBQSxLQUFLLENBQUNWLE1BQU5VLEdBQWVWLHNCQUFmVTtNQUNBQSxLQUFLLENBQUNnQyxLQUFOaEMsR0FBYyxLQUFkQTtNQUVBQSxLQUFLLENBQUNKLE1BQU5JLEdBQWUsQ0FDWCxJQURXLENBQWZBO01BR0FBLEtBQUssQ0FBQ3VDLEtBQU52QyxHQUFjO1FBQ1Z3QyxPQUFPLEVBQUU7VUFDTEMsSUFBSSxFQUFFLDJCQUREO1VBRUxDLElBQUksRUFBRTtRQUZEO01BREMsQ0FBZDFDO01BTUFBLEtBQUssQ0FBQzJDLE9BQU4zQyxHQUFnQjtRQUNaakIsRUFBRSxFQUFFO1VBQ0FhLE1BQU0sRUFBRSxDQUFDLElBQUQsQ0FEUjtVQUVBZ0QsT0FBTyxFQUFFO1FBRlQ7TUFEUSxDQUFoQjVDOztNQU9BNkMsYUFBT0MsUUFBUEQsQ0FBZ0IscUJBQWhCQSxFQUF1QzdDLEtBQXZDNkM7Ozs7Ozs7Ozs7Ozs7Ozs7O01DeEJBOztNQUNBO01BcUJPOzs7TUFBVSxNQUNYZ0YsTUFEVyxTQUNJbkcsVUFESixDQUNRO1FBQ2YsSUFBRjNDLEVBQUU7VUFDRixPQUFPLEtBQUthLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsSUFBaEIsRUFBc0JlLEtBQTdCO1FBQ0g7O1FBRU8sSUFBSkYsSUFBSTtVQUNKLE9BQU8sS0FBS0csTUFBTCxDQUFZaEIsR0FBWixDQUFnQixNQUFoQixFQUF3QmUsS0FBL0I7UUFOaUIsRUFTckI7OztRQUNRLElBQUp0QixJQUFJO1VBQ0osT0FBTyxLQUFLdUIsTUFBTCxDQUFZaEIsR0FBWixDQUFnQixNQUFoQixFQUF3QmUsS0FBL0I7UUFDSDs7UUFFVSxJQUFQMEosT0FBTztVQUNQLE9BQU8sS0FBS3pKLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsU0FBaEIsRUFBMkJlLEtBQWxDO1FBQ0g7O1FBRVksSUFBVHNELFNBQVM7VUFDVCxPQUFPLEtBQUtyRCxNQUFMLENBQVloQixHQUFaLENBQWdCLFdBQWhCLEVBQTZCZSxLQUFwQztRQUNIOztRQUVhLElBQVZ1RCxVQUFVO1VBQ1YsT0FBTyxLQUFLdEQsTUFBTCxDQUFZaEIsR0FBWixDQUFnQixZQUFoQixFQUE4QmUsS0FBckM7UUFDSDs7UUFFSyxJQUFGdUosRUFBRTtVQUNGLE9BQU8sS0FBS3RKLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsSUFBaEIsRUFBc0JlLEtBQTdCO1FBQ0g7O1FBRVUsSUFBUGtKLE9BQU87VUFDUCxPQUFPLEtBQUtqSixNQUFMLENBQVloQixHQUFaLENBQWdCLFNBQWhCLEVBQTJCZSxLQUFsQztRQUNIOztRQUVXLElBQVJtSixRQUFRO1VBQ1IsT0FBTyxLQUFLbEosTUFBTCxDQUFZaEIsR0FBWixDQUFnQixVQUFoQixFQUE0QmUsS0FBbkM7UUFDSDs7UUFFVyxJQUFSMkosUUFBUTtVQUNSLE9BQU8sS0FBSzFKLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsVUFBaEIsRUFBNEJlLEtBQW5DO1FBQ0g7O1FBRVksSUFBVDRKLFNBQVM7VUFDVCxPQUFPLEtBQUszSixNQUFMLENBQVloQixHQUFaLENBQWdCLFdBQWhCLEVBQTZCZSxLQUFwQztRQUNIOztRQUVRLElBQUxxRixLQUFLO1VBQ0wsT0FBTyxLQUFLcEYsTUFBTCxDQUFZaEIsR0FBWixDQUFnQixPQUFoQixFQUF5QmUsS0FBaEM7UUFDSDs7UUFFUyxJQUFONkosTUFBTTtVQUNOLE9BQU8sS0FBSzVKLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsUUFBaEIsRUFBMEJlLEtBQWpDO1FBQ0g7O1FBRVUsSUFBUDhKLE9BQU87VUFDUCxPQUFPLEtBQUs3SixNQUFMLENBQVloQixHQUFaLENBQWdCLFNBQWhCLEVBQTJCZSxLQUFsQztRQUNIOztRQUVZLElBQVQrSixTQUFTO1VBQ1QsT0FBTyxLQUFLOUosTUFBTCxDQUFZaEIsR0FBWixDQUFnQixXQUFoQixFQUE2QmUsS0FBcEM7UUFDSDs7UUFFUyxJQUFOOUIsTUFBTTtVQUNOLE9BQU8sS0FBSytCLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsUUFBaEIsRUFBMEJlLEtBQTFCLElBQW1DLEVBQTFDO1FBQ0g7O1FBRVcsSUFBUmdFLFFBQVE7VUFDUixPQUFPLEtBQUsvRCxNQUFMLENBQVloQixHQUFaLENBQWdCLFVBQWhCLEVBQTRCZSxLQUE1QixJQUFxQyxFQUE1QztRQUNIOztRQUVVLElBQVBnSyxPQUFPO1VBQ1AsT0FBTyxLQUFLL0osTUFBTCxDQUFZaEIsR0FBWixDQUFnQixTQUFoQixFQUEyQmUsS0FBbEM7UUFDSDs7UUFFYSxJQUFWZ0gsVUFBVTtVQUNWLE1BQU1oQixNQUFNLEdBQTJCLElBQUlpRSxHQUFKLEVBQXZDO1VBQ0EsTUFBTWpELFVBQVUsR0FBa0IsS0FBSy9FLFVBQUwsQ0FBZ0JoRCxHQUFoQixDQUFvQixZQUFwQixDQUFsQztVQUVBK0gsVUFBVSxJQUFJQSxVQUFVLENBQUM5QixPQUFYOEIsQ0FBb0JDLFNBQUQsSUFBeUI7WUFDdEQsSUFBSSxDQUFDQSxTQUFTLENBQUNsQixNQUFmLEVBQXVCO1lBQ3ZCLE1BQU1qRyxJQUFJLEdBQVdtSCxTQUFTLENBQUNoSCxNQUFWZ0gsQ0FBaUJoSSxHQUFqQmdJLENBQXFCLE1BQXJCQSxFQUE2QmpILEtBQWxEO1lBQ0FnRyxNQUFNLENBQUNrRSxHQUFQbEUsQ0FBV2xHLElBQVhrRyxFQUFpQmlCLFNBQWpCakI7VUFIVSxFQUFkZ0I7VUFNQSxPQUFPaEIsTUFBUDtRQUNIOztRQUVZLElBQVRtRSxTQUFTO1VBQ1QsT0FBc0IsS0FBS2xJLFVBQUwsQ0FBZ0JoRCxHQUFoQixDQUFvQixXQUFwQixDQUF0QjtRQUNIOztRQUVZLElBQVRtTCxTQUFTO1VBQ1QsTUFBTUEsU0FBUyxHQUF1QixLQUFLbkksVUFBTCxDQUFnQmhELEdBQWhCLENBQW9CLFdBQXBCLENBQXRDO1VBQ0EsT0FBT21MLFNBQVMsSUFBSUEsU0FBUyxDQUFDcEssS0FBOUI7UUFDSDs7UUFFWSxJQUFUa0csU0FBUztVQUNULE1BQU1BLFNBQVMsR0FBaUIsS0FBS2pFLFVBQUwsQ0FBZ0JoRCxHQUFoQixDQUFvQixXQUFwQixDQUFoQztVQUNBLE9BQU9pSCxTQUFTLElBQVlBLFNBQVMsQ0FBQ2xHLEtBQXRDO1FBQ0g7O1FBRTRCLElBQXpCcUsseUJBQXlCO1VBQ3pCLE9BQU8sS0FBS3BLLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsMkJBQWhCLEVBQTZDZSxLQUFwRDtRQUNIOztRQUVEM0IsWUFBWWdDLEtBQVpoQyxFQUE0QjtVQUN4QixNQUFNLFNBQU4sRUFBaUJnQyxLQUFqQjtRQUNIOztRQUVEK0csWUFBWSxDQUFDdEgsSUFBRCxFQUFhO1VBQ3JCLElBQUlxSCxJQUFJLEdBQUcsS0FBWDtVQUNBLE1BQU1ILFVBQVUsR0FBa0IsS0FBSy9FLFVBQUwsQ0FBZ0JoRCxHQUFoQixDQUFvQixZQUFwQixDQUFsQztVQUVBK0gsVUFBVSxDQUFDOUIsT0FBWDhCLENBQW9CQyxTQUFELElBQXlCO1lBQ3hDLElBQUksQ0FBQ0EsU0FBUyxDQUFDbEIsTUFBZixFQUF1QjtZQUN2QixNQUFNdUUsYUFBYSxHQUFXckQsU0FBUyxDQUFDaEgsTUFBVmdILENBQWlCaEksR0FBakJnSSxDQUFxQixNQUFyQkEsRUFBNkJqSCxLQUEzRDtZQUNBLElBQUlGLElBQUksS0FBS3dLLGFBQWIsRUFBNEJuRCxJQUFJLEdBQUcsSUFBUEE7VUFIaEM7VUFNQSxPQUFPQSxJQUFQO1FBQ0g7O1FBRWUsTUFBVlUsVUFBVSxDQUFDeEgsS0FBRCxFQUFtQjtVQUMvQixPQUFPVix1QkFBT0MsT0FBUEQsQ0FBZSxpQkFBZkEsRUFBa0NVLEtBQWxDVixDQUFQO1FBQ0g7O1FBRVcsTUFBTmdJLE1BQU0sQ0FBQ3RILEtBQUQsRUFBbUI7VUFDM0IsT0FBT1YsdUJBQU9DLE9BQVBELENBQWUsaUJBQWZBLEVBQWtDVSxLQUFsQ1YsQ0FBUDtRQUNIOztNQWhJb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUN2QnpCOztNQUNBO01BRU87OztNQUFVLE1BQ1g0SyxTQURXLFNBQ09uSyxnQkFEUCxDQUNpQjtRQUM5Qi9CLFlBQVlnQyxLQUFaaEMsRUFBa0M7VUFDOUIsTUFBTSxtQkFBTixFQUEyQm1NLGNBQTNCLEVBQXFDbkssS0FBckM7UUFDSDs7TUFINkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNKbEM7O01BQ0E7TUFFTzs7O01BQVUsTUFDWG9LLGlCQURXLFNBQ2VySyxnQkFEZixDQUN5QjtRQUN0Qy9CLFlBQVlnQyxLQUFaaEMsRUFBa0M7VUFDOUIsTUFBTSxxQkFBTixFQUE2QnFNLHNCQUE3QixFQUErQ3JLLEtBQS9DO1FBQ0g7O01BSHFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O01DSjFDO01BRU87OztNQUFVLE1BQ1hxSyxnQkFEVyxTQUNjM0ksVUFEZCxDQUNrQjtRQUN6QixJQUFGM0MsRUFBRTtVQUNGLE9BQU8sS0FBS2EsTUFBTCxDQUFZaEIsR0FBWixDQUFnQixJQUFoQixFQUFzQmUsS0FBN0I7UUFDSDs7UUFFYyxJQUFYMkssV0FBVztVQUNYLE1BQU1BLFdBQVcsR0FBRyxLQUFLMUssTUFBTCxDQUFZaEIsR0FBWixDQUFnQixhQUFoQixFQUErQmUsS0FBbkQ7VUFFQSxPQUFPO1lBQ0g0SyxPQUFPLEVBQUVELFdBQVcsRUFBRUMsT0FBYkQsSUFBd0IsRUFEOUI7WUFFSEUsS0FBSyxFQUFFLElBQUlaLEdBQUosQ0FBUVUsV0FBVyxFQUFFRSxLQUFyQixDQUZKO1lBR0hDLFVBQVUsRUFBRSxJQUFJYixHQUFKLENBQVFVLFdBQVcsRUFBRUcsVUFBckIsQ0FIVDtZQUlIQyxZQUFZLEVBQUUsSUFBSWQsR0FBSixDQUFRVSxXQUFXLEVBQUVJLFlBQXJCO1VBSlgsQ0FBUDtRQU1IOztRQUVEMU0sWUFBWWdDLEtBQVpoQyxFQUE0QjtVQUN4QixNQUFNLHFCQUFOLEVBQTZCZ0MsS0FBN0I7UUFDSDs7TUFsQjhCOzs7Ozs7Ozs7Ozs7OztNQ0huQzs7TUFDQTs7TUFFQSxNQUFNQSxLQUFLLEdBQWUsRUFBMUI7TUFFQUEsS0FBSyxDQUFDVixNQUFOVSxHQUFlVixzQkFBZlU7TUFDQUEsS0FBSyxDQUFDZ0MsS0FBTmhDLEdBQWMsS0FBZEE7TUFFQUEsS0FBSyxDQUFDSixNQUFOSSxHQUFlLENBQUMsSUFBRCxFQUFPLGFBQVAsQ0FBZkE7TUFFQUEsS0FBSyxDQUFDdUMsS0FBTnZDLEdBQWM7UUFDVndDLE9BQU8sRUFBRTtVQUNMRSxJQUFJLEVBQUU7UUFERDtNQURDLENBQWQxQztNQU1BQSxLQUFLLENBQUMyQyxPQUFOM0MsR0FBZ0I7UUFDWmpCLEVBQUUsRUFBRTtVQUNBYSxNQUFNLEVBQUUsQ0FBQyxJQUFELENBRFI7VUFFQWdELE9BQU8sRUFBRTtRQUZUO01BRFEsQ0FBaEI1Qzs7TUFPQTZDLGFBQU9DLFFBQVBELENBQWdCLHFCQUFoQkEsRUFBdUM3QyxLQUF2QzZDOzs7Ozs7Ozs7Ozs7Ozs7OztNQ3ZCQTtNQUdPOzs7TUFBVSxNQUNYc0gsUUFEVyxTQUNNekksVUFETixDQUNVO1FBQ2pCLElBQUYzQyxFQUFFO1VBQ0YsT0FBTyxLQUFLYSxNQUFMLENBQVloQixHQUFaLENBQWdCLElBQWhCLEVBQXNCZSxLQUE3QjtRQUNIOztRQUVpQixJQUFkZ0wsY0FBYztVQUNkLE9BQU8sS0FBSy9LLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsY0FBaEIsRUFBZ0NlLEtBQXZDO1FBQ0g7O1FBRWEsSUFBVmdILFVBQVU7VUFDVixPQUFPLEtBQUsvRyxNQUFMLENBQVloQixHQUFaLENBQWdCLFlBQWhCLEVBQThCZSxLQUFyQztRQUNIOztRQUVZLElBQVRpTCxTQUFTO1VBQ1QsT0FBc0IsS0FBS2hKLFVBQUwsQ0FBZ0JoRCxHQUFoQixDQUFvQixXQUFwQixDQUF0QjtRQUNIOztRQUVEWixZQUFZZ0MsS0FBWmhDLEVBQTRCO1VBQ3hCLE1BQU0sbUJBQU4sRUFBMkJnQyxLQUEzQjtRQUNIOztNQW5Cc0I7Ozs7Ozs7Ozs7Ozs7O01DSjNCOztNQUNBOztNQUNBOztNQUVBLE1BQU1BLEtBQUssR0FBZSxFQUExQjtNQUVBQSxLQUFLLENBQUNWLE1BQU5VLEdBQWVWLHNCQUFmVTtNQUNBQSxLQUFLLENBQUNnQyxLQUFOaEMsR0FBYyxLQUFkQTtNQUVBQSxLQUFLLENBQUNKLE1BQU5JLEdBQWUsQ0FDWCxJQURXLEVBQ0wsY0FESyxFQUNXLFlBRFgsRUFDeUIsbUJBRHpCLENBQWZBO01BR0FBLEtBQUssQ0FBQzRCLFVBQU41QixHQUFtQjtRQUNmNEssU0FBUyxFQUFFO1VBQ1AzSSxLQUFLLEVBQUVvSSxzQkFEQTtVQUVQbEksS0FBSyxFQUFFLHFCQUZBO1VBR1BDLFVBQVUsRUFBRTtZQUFDQyxLQUFLLEVBQUUsSUFBUjtZQUFjQyxNQUFNLEVBQUU7VUFBdEI7UUFITDtNQURJLENBQW5CdEM7TUFPQUEsS0FBSyxDQUFDdUMsS0FBTnZDLEdBQWM7UUFDVndDLE9BQU8sRUFBRTtVQUNMQyxJQUFJLEVBQUUsd0JBREQ7VUFFTEMsSUFBSSxFQUFFO1FBRkQ7TUFEQyxDQUFkMUM7TUFPQUEsS0FBSyxDQUFDMkMsT0FBTjNDLEdBQWdCO1FBQ1pqQixFQUFFLEVBQUU7VUFDQWEsTUFBTSxFQUFFLENBQUMsSUFBRCxDQURSO1VBRUFnRCxPQUFPLEVBQUU7UUFGVCxDQURRO1FBS1prQyxPQUFPLEVBQUU7VUFDTGxGLE1BQU0sRUFBRSxDQUFDLFFBQUQsQ0FESDtVQUVMb0ksT0FBTyxFQUFFO1lBQUNqRCxNQUFNLEVBQUUsQ0FBQyxNQUFEO1VBQVQ7UUFGSjtNQUxHLENBQWhCL0U7O01BV0E2QyxhQUFPQyxRQUFQRCxDQUFnQixtQkFBaEJBLEVBQXFDN0MsS0FBckM2Qzs7Ozs7Ozs7Ozs7O01DckNBOztNQUNBOztNQUNBOztNQUNBOztNQUNBOztNQUNBOztNQUVBLE1BQU03QyxLQUFLLEdBQWUsRUFBMUI7TUFFQUEsS0FBSyxDQUFDVixNQUFOVSxHQUFlVixzQkFBZlU7TUFDQUEsS0FBSyxDQUFDZ0MsS0FBTmhDLEdBQWMsS0FBZEE7TUFFQUEsS0FBSyxDQUFDSixNQUFOSSxHQUFlLENBQ1gsSUFEVyxFQUNMLE1BREssRUFDRyxNQURILEVBQ1csWUFEWCxFQUN5QixJQUR6QixFQUVYLFdBRlcsRUFFRSxTQUZGLEVBRWEsV0FGYixFQUUwQixZQUYxQixFQUdYLFNBSFcsRUFHQSxXQUhBLEVBR2EsU0FIYixFQUd3QixVQUh4QixFQUdvQyxPQUhwQyxFQUlYLFFBSlcsRUFJRCxTQUpDLEVBSVUsNkJBSlYsRUFLWCxRQUxXLEVBS0QsVUFMQyxDQUFmQTtNQVFBQSxLQUFLLENBQUM0QixVQUFONUIsR0FBbUI7UUFDZjJHLFVBQVUsRUFBRTtVQUNSMUUsS0FBSyxFQUFFNEksZ0JBREM7VUFFUjFJLEtBQUssRUFBRSxZQUZDO1VBR1JDLFVBQVUsRUFBRTtZQUFDQyxLQUFLLEVBQUUsSUFBUjtZQUFjQyxNQUFNLEVBQUU7VUFBdEI7UUFISixDQURHO1FBTWZ3SCxTQUFTLEVBQUU7VUFDUDdILEtBQUssRUFBRWtJLGNBREE7VUFFUGhJLEtBQUssRUFBRSxtQkFGQTtVQUdQQyxVQUFVLEVBQUU7WUFBQ0MsS0FBSyxFQUFFLElBQVI7WUFBY0MsTUFBTSxFQUFFO1VBQXRCO1FBSEwsQ0FOSTtRQVdmeUgsU0FBUyxFQUFFO1VBQ1BoSyxVQUFVLEVBQUVnSixxQkFETDtVQUVQNUcsS0FBSyxFQUFFLG1CQUZBO1VBR1A0RCxNQUFNLEVBQUUsQ0FBQztZQUFDMUQsS0FBSyxFQUFFLFFBQVI7WUFBa0JDLE1BQU0sRUFBRTtVQUExQixDQUFEO1FBSEQsQ0FYSTtRQWdCZnVELFNBQVMsRUFBRTtVQUNQaEQsTUFBTSxFQUFFLENBQUMsc0JBQUQsQ0FERDtVQUVQaUksUUFBUSxFQUFHbEssSUFBRCxJQUFlO1lBQ3JCLE1BQU03QixFQUFFLEdBQUc2QixJQUFJLENBQUNoQixNQUFMZ0IsQ0FBWWhDLEdBQVpnQyxDQUFnQixJQUFoQkEsQ0FBWDs7WUFDQSxJQUFJLE9BQU83QixFQUFQLEtBQWMsUUFBbEIsRUFBNEI7Y0FDeEJFLE9BQU8sQ0FBQ21DLElBQVJuQyxDQUFhLGtCQUFiQSxFQUFpQ0YsRUFBakNFO2NBQ0E7WUFDSDs7WUFFRCxJQUFJLENBQUNGLEVBQUUsQ0FBQ2MsUUFBUixFQUFrQjtZQUVsQixJQUFJa0wsSUFBSSxHQUFHaE0sRUFBRSxDQUFDWSxLQUFIWixDQUFTMEksS0FBVDFJLENBQWUsSUFBZkEsQ0FBWDtZQUNBZ00sSUFBSSxHQUFHQSxJQUFJLENBQUNDLEtBQUxELENBQVcsQ0FBWEEsRUFBY0EsSUFBSSxDQUFDRSxNQUFMRixHQUFjLENBQTVCQSxFQUErQkcsSUFBL0JILENBQW9DLElBQXBDQSxDQUFQQTtZQUVBLE9BQU87Y0FDSHJKLElBQUksRUFBRTRELHdCQURIO2NBRUhuRCxLQUFLLEVBQUUsc0JBRko7Y0FHSEMsVUFBVSxFQUFFO2dCQUFDckQsRUFBRSxFQUFFZ007Y0FBTDtZQUhULENBQVA7VUFLSDtRQW5CTTtNQWhCSSxDQUFuQi9LO01BdUNBQSxLQUFLLENBQUN1QyxLQUFOdkMsR0FBYztRQUNWd0MsT0FBTyxFQUFFO1VBQ0xFLElBQUksRUFBRTtRQUREO01BREMsQ0FBZDFDO01BTUFBLEtBQUssQ0FBQzJDLE9BQU4zQyxHQUFnQjtRQUNaakIsRUFBRSxFQUFFO1VBQ0FhLE1BQU0sRUFBRSxDQUFDLElBQUQsQ0FEUjtVQUVBZ0QsT0FBTyxFQUFFO1FBRlQ7TUFEUSxDQUFoQjVDOztNQU9BNkMsYUFBT0MsUUFBUEQsQ0FBZ0IsU0FBaEJBLEVBQTJCN0MsS0FBM0I2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7TUN4RUE7O01BQ0E7TUFZTzs7O01BQ1AsTUFBTXNJLFNBQVMsR0FBRyxJQUFLLGNBQWNoTCw0QkFBZCxDQUEyQjtRQUNyQyxJQUFMaUwsS0FBSztVQUNMLE9BQU8sQ0FBQyxDQUFDLEtBQUssR0FBZDtRQUNIOztRQUVEOztRQUNNLElBQUZDLEVBQUU7VUFDRixPQUFPLEtBQUssR0FBWjtRQUNIOztRQUVEOztRQUNhLElBQVRDLFNBQVM7VUFDVCxPQUFPLEtBQUssVUFBWjtRQUNIOztRQUVEdE47VUFDSTtVQUNBLEtBQUt1TixLQUFMLEdBQWF0SyxLQUFiLENBQW1CakMsR0FBRyxJQUFJQyxPQUFPLENBQUNULEtBQVJTLENBQWNELEdBQUcsQ0FBQ0UsS0FBbEJELENBQTFCO1FBQ0g7O1FBRUR1TSxVQUFVLEdBQUcsTUFBTWxNLHVCQUFPQyxPQUFQRCxDQUFlLHVCQUFmQSxDQUFUOztRQUVWbU0sUUFBUSxDQUFDQyxJQUFELEVBQWE7VUFDakIsT0FBT3BNLHVCQUFPQyxPQUFQRCxDQUFlLHFCQUFmQSxFQUFzQztZQUFDb00sSUFBSSxFQUFFQTtVQUFQLENBQXRDcE0sQ0FBUDtRQUNIOztRQUVjLE1BQVRxTSxTQUFTLENBQUNsSSxJQUFELEVBQWE7VUFDeEIsSUFBSSxDQUFDQSxJQUFMLEVBQVcsTUFBTSxJQUFJcEUsS0FBSixDQUFVLDJCQUFWLENBQU47VUFDWCxLQUFLdkIsVUFBTCxHQUFrQixJQUFsQjs7VUFDQSxJQUFJO1lBQ0EsTUFBTTBCLElBQUksR0FBRywyQkFBYjtZQUNBLE1BQU0rQixRQUFRLEdBQW1CLE1BQU1qQyx1QkFBT0MsT0FBUEQsQ0FBZUUsSUFBZkYsRUFBcUI7Y0FBQ21FLElBQUksRUFBRUE7WUFBUCxDQUFyQm5FLENBQXZDO1lBQ0EsS0FBS3hCLFVBQUwsR0FBa0IsS0FBbEI7WUFDQSxPQUFPeUQsUUFBUSxDQUFDVixLQUFoQjtVQUpKLEVBTUUsT0FBT3JDLEtBQVAsRUFBYztZQUNaLEtBQUtWLFVBQUwsR0FBa0IsS0FBbEI7WUFDQSxLQUFLLFVBQUwsR0FBa0IsS0FBbEI7WUFDQSxLQUFLQyxTQUFMLEdBQWlCLElBQWpCO1VBRUg7UUFDSjs7UUFFa0IsTUFBYjZOLGFBQWEsQ0FBQ0MsT0FBTyxHQUFHLENBQVgsRUFBWTtVQUMzQixJQUFJQyxJQUFJLEdBQUcsQ0FBWDtVQUNBLElBQUlySSxJQUFJLEdBQUcsSUFBWDs7VUFDQSxPQUFPcUksSUFBSSxHQUFHRCxPQUFkLEVBQXVCO1lBQ25CLE1BQU1FLFNBQVMsR0FBRyxNQUFNLEtBQUtKLFNBQUwsQ0FBZWxJLElBQWYsQ0FBeEI7WUFDQSxJQUFJc0ksU0FBSixFQUFlO1lBQ2Z0SSxJQUFJLEdBQUdBLElBQUksR0FBRyxHQUFkQTtVQUNIOztVQUNELE9BQU9BLElBQVA7UUFDSDs7UUFFVSxNQUFMOEgsS0FBSztVQUNQLEtBQUt6TixVQUFMLEdBQWtCLElBQWxCOztVQUNBLElBQUk7WUFDQSxNQUFNeUQsUUFBUSxHQUFpQixNQUFNakMsdUJBQU9DLE9BQVBELENBQWUsa0JBQWZBLENBQXJDO1lBQ0EsS0FBS3hCLFVBQUwsR0FBa0IsS0FBbEI7WUFDQSxLQUFLLEdBQUwsR0FBV3lELFFBQVEsQ0FBQ21CLElBQVRuQixDQUFjOEosRUFBekI7WUFDQSxPQUFPLEtBQUssR0FBWjtVQUpKLEVBTUUsT0FBTzdNLEtBQVAsRUFBYztZQUNaLEtBQUtWLFVBQUwsR0FBa0IsS0FBbEI7WUFDQSxLQUFLLFVBQUwsR0FBa0IsS0FBbEI7WUFDQSxLQUFLQyxTQUFMLEdBQWlCLElBQWpCO1VBQ0g7UUFDSjs7TUFuRTZDLENBQWhDLEVBQWxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNkQTs7TUFDQTtNQUVPOzs7TUFBVSxNQUNYaU8sWUFEVyxTQUNVak0sZ0JBRFYsQ0FDb0I7UUFDakMvQixZQUFZZ0MsS0FBWmhDLEVBQWtDO1VBQzlCLE1BQU0sY0FBTixFQUFzQmlPLGlCQUF0QixFQUFtQ2pNLEtBQW5DO1FBQ0g7O01BSGdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O01DSnJDO01BRU87OztNQUFVLE1BQ1hpTSxXQURXLFNBQ1N2SyxVQURULENBQ2E7UUFDcEIsSUFBRjNDLEVBQUU7VUFDRixPQUFPLEtBQUthLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsSUFBaEIsRUFBc0JlLEtBQTdCO1FBQ0g7O1FBRU8sSUFBSnVNLElBQUk7VUFDSixPQUFPLEtBQUt0TSxNQUFMLENBQVloQixHQUFaLENBQWdCLE1BQWhCLEVBQXdCZSxLQUEvQjtRQUNIOztRQUVZLElBQVQ1QixTQUFTO1VBQ1QsT0FBTyxLQUFLNkIsTUFBTCxDQUFZaEIsR0FBWixDQUFnQixXQUFoQixFQUE2QmUsS0FBcEM7UUFDSDs7UUFFUyxJQUFOOUIsTUFBTTtVQUNOLE9BQU8sS0FBSytCLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsUUFBaEIsRUFBMEJlLEtBQTFCLElBQW1DLEVBQTFDO1FBQ0g7O1FBRVcsSUFBUmdFLFFBQVE7VUFDUixPQUFPLEtBQUsvRCxNQUFMLENBQVloQixHQUFaLENBQWdCLFVBQWhCLEVBQTRCZSxLQUE1QixJQUFxQyxFQUE1QztRQUNIOztRQUVEM0IsWUFBWWdDLEtBQVpoQyxFQUE0QjtVQUN4QixNQUFNLGNBQU4sRUFBc0JnQyxLQUF0QjtRQUNIOztNQXZCeUI7Ozs7Ozs7Ozs7Ozs7O01DSDlCOztNQUNBOztNQUVBLE1BQU1BLEtBQUssR0FBZSxFQUExQjtNQUVBQSxLQUFLLENBQUNWLE1BQU5VLEdBQWVWLHNCQUFmVTtNQUNBQSxLQUFLLENBQUNnQyxLQUFOaEMsR0FBYyxLQUFkQTtNQUVBQSxLQUFLLENBQUNKLE1BQU5JLEdBQWUsQ0FDWCxJQURXLEVBQ0wsTUFESyxFQUNHLFdBREgsRUFDZ0IsUUFEaEIsRUFDMEIsVUFEMUIsQ0FBZkE7TUFHQUEsS0FBSyxDQUFDdUMsS0FBTnZDLEdBQWM7UUFDVndDLE9BQU8sRUFBRTtVQUNMQyxJQUFJLEVBQUUsRUFERDtVQUVMQyxJQUFJLEVBQUU7UUFGRDtNQURDLENBQWQxQztNQU1BQSxLQUFLLENBQUMyQyxPQUFOM0MsR0FBZ0I7UUFDWmpCLEVBQUUsRUFBRTtVQUNBYSxNQUFNLEVBQUUsQ0FBQyxJQUFELENBRFI7VUFFQWdELE9BQU8sRUFBRTtRQUZUO01BRFEsQ0FBaEI1Qzs7TUFPQTZDLGFBQU9DLFFBQVBELENBQWdCLGNBQWhCQSxFQUFnQzdDLEtBQWhDNkM7Ozs7Ozs7Ozs7Ozs7Ozs7O01DeEJBOztNQUNBO01BRU87OztNQUFVLE1BQ1hzSix3QkFEVyxTQUNzQnBNLGdCQUR0QixDQUNnQztRQUU3Qy9CLFlBQVlnQyxLQUFaaEMsRUFBa0M7VUFDOUIsTUFBTSw0QkFBTixFQUFvQ2tFLDZCQUFwQyxFQUE2RGxDLEtBQTdEO1FBQ0g7O01BSjRDOzs7Ozs7Ozs7Ozs7TUNKakQ7O01BRUFrSTtRQUNBdkk7TUFEQTs7Ozs7Ozs7OztNQ0ZBOztNQUVBdUk7UUFDQXZJO01BREE7Ozs7Ozs7Ozs7Ozs7Ozs7O01DRkE7O01BR0E7TUFlTzs7O01BQVUsTUFDWHVDLHVCQURXLFNBQ3FCUixVQURyQixDQUN5QjtRQUN0Qzs7UUFDTSxJQUFGM0MsRUFBRTtVQUNGLE9BQU8sS0FBSyxHQUFMLElBQVksS0FBS2EsTUFBTCxDQUFZaEIsR0FBWixDQUFnQixJQUFoQixFQUFzQmUsS0FBekM7UUFDSDs7UUFFRDs7UUFDUSxJQUFKRixJQUFJO1VBQ0osT0FBTyxLQUFLLEtBQUwsSUFBYyxLQUFLRyxNQUFMLENBQVloQixHQUFaLENBQWdCLE1BQWhCLEVBQXdCZSxLQUE3QztRQUNIOztRQUVEOztRQUNTLElBQUx5TSxLQUFLO1VBQ0wsT0FBTyxLQUFLLE1BQUwsSUFBZSxLQUFLeE0sTUFBTCxDQUFZaEIsR0FBWixDQUFnQixPQUFoQixFQUF5QmUsS0FBL0M7UUFDSDs7UUFFRDs7UUFDTyxJQUFIME0sR0FBRztVQUNILE9BQU8sS0FBSyxJQUFMLElBQWEsS0FBS3pNLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsS0FBaEIsRUFBdUJlLEtBQTNDO1FBQ0g7O1FBRUQ7O1FBQ1EsSUFBSjhELElBQUk7VUFDSixPQUFPLEtBQUssS0FBTCxJQUFjLEtBQUs3RCxNQUFMLENBQVloQixHQUFaLENBQWdCLE1BQWhCLEVBQXdCZSxLQUE3QztRQUNIOztRQUVEOztRQUNTLElBQUwyTSxLQUFLO1VBQ0wsT0FBTyxLQUFLLE1BQUwsSUFBZSxLQUFLMU0sTUFBTCxDQUFZaEIsR0FBWixDQUFnQixPQUFoQixFQUF5QmUsS0FBL0M7UUFDSDs7UUFFRDs7UUFDTyxJQUFINE0sR0FBRztVQUNILE9BQU8sS0FBSyxJQUFMLElBQWEsS0FBSzNNLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsS0FBaEIsRUFBdUJlLEtBQTNDO1FBQ0g7O1FBRUQ7O1FBQ00sSUFBRndILEVBQUU7VUFDRixPQUFPLEtBQUssR0FBTCxJQUFZLEtBQUt2SCxNQUFMLENBQVloQixHQUFaLENBQWdCLElBQWhCLEVBQXNCZSxLQUF6QztRQUNIOztRQUVEOztRQUNZLElBQVI2TSxRQUFRO1VBQ1IsT0FBTyxLQUFLLFNBQUwsSUFBa0IsS0FBSzVNLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsVUFBaEIsRUFBNEJlLEtBQXJEO1FBQ0g7O1FBRUQ7O1FBQ1ksSUFBUjhNLFFBQVE7VUFDUixPQUFPLEtBQUssU0FBTCxJQUFrQixLQUFLN00sTUFBTCxDQUFZaEIsR0FBWixDQUFnQixVQUFoQixFQUE0QmUsS0FBckQ7UUFDSDs7UUFFRDs7UUFDZSxJQUFYK00sV0FBVztVQUNYLE9BQU8sS0FBSyxZQUFMLElBQXFCLEtBQUs5TSxNQUFMLENBQVloQixHQUFaLENBQWdCLGFBQWhCLEVBQStCZSxLQUEzRDtRQUNIOztRQUVEOztRQUNXLElBQVBnTixPQUFPO1VBQ1AsT0FBTyxLQUFLLFFBQUwsSUFBaUIsS0FBSy9NLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsU0FBaEIsRUFBMkJlLEtBQW5EO1FBQ0g7O1FBRUQ7O1FBQ08sSUFBSGlOLEdBQUc7VUFDSCxPQUFPLEtBQUssSUFBTCxJQUFhLEtBQUtoTixNQUFMLENBQVloQixHQUFaLENBQWdCLEtBQWhCLEVBQXVCZSxLQUEzQztRQUNIOztRQUVEOztRQUNVLElBQU5rTixNQUFNO1VBQ04sT0FBTyxLQUFLLE9BQUwsSUFBZ0IsS0FBS2pOLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsUUFBaEIsRUFBMEJlLEtBQWpEO1FBQ0g7O1FBRUQ7O1FBQ1csSUFBUG1GLE9BQU87VUFDUCxPQUFPLEtBQUssUUFBTCxJQUFpQixLQUFLbEYsTUFBTCxDQUFZaEIsR0FBWixDQUFnQixTQUFoQixFQUEyQmUsS0FBbkQ7UUFDSDs7UUFFVyxJQUFSbU4sUUFBUTtVQUNSLE1BQU1BLFFBQVEsR0FBaUIsS0FBS2xMLFVBQUwsQ0FBZ0JoRCxHQUFoQixDQUFvQixVQUFwQixDQUEvQjtVQUNBLE9BQU9rTyxRQUFRLElBQTBCQSxRQUFRLENBQUNuTixLQUFsRDtRQUNIOztRQUVEO1FBQ0E7O1FBQ2MsSUFBVjdCLFVBQVU7VUFDVixPQUFPLEtBQUssV0FBWjtRQUNIOztRQUVTLElBQU53SSxNQUFNO1VBQ04sT0FBTztZQUNIdkgsRUFBRSxFQUFFLEtBQUtBLEVBRE47WUFFSFUsSUFBSSxFQUFFLEtBQUtBLElBRlI7WUFHSDJNLEtBQUssRUFBRSxLQUFLQSxLQUhUO1lBSUhDLEdBQUcsRUFBRSxLQUFLQSxHQUpQO1lBS0g1SSxJQUFJLEVBQUUsS0FBS0EsSUFMUjtZQU1INkksS0FBSyxFQUFFLEtBQUtBLEtBQUwsSUFBYyxFQU5sQjtZQU9IbkYsRUFBRSxFQUFFLEtBQUtBLEVBUE47WUFRSG9GLEdBQUcsRUFBRSxLQUFLQSxHQVJQO1lBU0hNLE1BQU0sRUFBRSxFQVRMO1lBVUhMLFFBQVEsRUFBRSxLQUFLQSxRQVZaO1lBV0hFLFdBQVcsRUFBRSxLQUFLQSxXQVhmO1lBWUhELFFBQVEsRUFBRSxLQUFLQSxRQVpaO1lBYUhFLE9BQU8sRUFBRSxLQUFLQTtVQWJYLENBQVA7UUFlSDs7UUFFRDNPLFlBQVlnQyxLQUFaaEMsRUFBNEI7VUFDeEIsTUFBTSw0QkFBTixFQUFvQ2dDLEtBQXBDO1FBQ0g7O1FBRWMsTUFBVDJMLFNBQVMsQ0FBQ2xJLElBQUQsRUFBYTtVQUN4QixJQUFJLENBQUNBLElBQUwsRUFBVyxNQUFNLElBQUlwRSxLQUFKLENBQVUsMkJBQVYsQ0FBTjtVQUNYLEtBQUssV0FBTCxHQUFtQixJQUFuQjs7VUFDQSxJQUFJO1lBQ0EsTUFBTUcsSUFBSSxHQUFHLDJCQUFiO1lBQ0EsTUFBTStCLFFBQVEsR0FBbUIsTUFBTWpDLHVCQUFPQyxPQUFQRCxDQUFlRSxJQUFmRixFQUFxQjtjQUFDbUUsSUFBSSxFQUFFQTtZQUFQLENBQXJCbkUsQ0FBdkM7WUFDQSxLQUFLLFdBQUwsR0FBbUIsS0FBbkI7WUFDQSxPQUFPaUMsUUFBUSxDQUFDVixLQUFoQjtVQUpKLEVBTUUsT0FBT3JDLEtBQVAsRUFBYztZQUNaLEtBQUssV0FBTCxHQUFtQixLQUFuQjtZQUNBLEtBQUssVUFBTCxHQUFrQixJQUFsQjtVQUVIO1FBQ0o7O1FBRURpTixRQUFRLENBQUNuRixNQUFELEVBQVk7VUFDaEJBLE1BQU0sQ0FBQ2dHLEtBQVBoRyxHQUFlO1lBQ1h5RyxJQUFJLEVBQUVDLEtBQUssQ0FBQ0MsUUFBUSxDQUFDM0csTUFBTSxDQUFDeUcsSUFBUixDQUFULENBQUxDLEdBQStCNUksU0FBL0I0SSxHQUEyQ0MsUUFBUSxDQUFDM0csTUFBTSxDQUFDeUcsSUFBUixDQUQ5QztZQUVYRyxPQUFPLEVBQUVGLEtBQUssQ0FBQ0MsUUFBUSxDQUFDM0csTUFBTSxDQUFDNEcsT0FBUixDQUFULENBQUxGLEdBQWtDNUksU0FBbEM0SSxHQUE4Q0MsUUFBUSxDQUFDM0csTUFBTSxDQUFDNEcsT0FBUixDQUZwRDtZQUdYcEksT0FBTyxFQUFFa0ksS0FBSyxDQUFDQyxRQUFRLENBQUMzRyxNQUFNLENBQUN4QixPQUFSLENBQVQsQ0FBTGtJLEdBQWtDNUksU0FBbEM0SSxHQUE4Q0MsUUFBUSxDQUFDM0csTUFBTSxDQUFDeEIsT0FBUjtVQUhwRCxDQUFmd0I7VUFNQUEsTUFBTSxDQUFDdUcsTUFBUHZHLEdBQWdCO1lBQUM2RyxJQUFJLEVBQUU3RyxNQUFNLENBQUM2RyxJQUFkO1lBQW9CQyxHQUFHLEVBQUU5RyxNQUFNLENBQUM4RyxHQUFoQztZQUFxQ0MsRUFBRSxFQUFFL0csTUFBTSxDQUFDK0c7VUFBaEQsQ0FBaEIvRztVQUNBQSxNQUFNLENBQUN4QixPQUFQd0IsR0FBaUI7WUFBQ2dILElBQUksRUFBRWhILE1BQU0sQ0FBQ2dIO1VBQWQsQ0FBakJoSDtVQUVBLE9BQU9BLE1BQVA7UUFDSDs7UUFFRGlILFNBQVMsQ0FBQ2pILE1BQUQsRUFBWTtVQUNqQixNQUFNa0gsU0FBUyxHQUFHLEtBQUsvQixRQUFMLENBQWNuRixNQUFkLENBQWxCO1VBRUEsS0FBSyxHQUFMLEdBQVdrSCxTQUFTLENBQUN6TyxFQUFyQjtVQUNBLEtBQUssU0FBTCxHQUFpQnlPLFNBQVMsQ0FBQ2hCLFFBQTNCO1VBQ0EsS0FBSyxLQUFMLEdBQWFnQixTQUFTLENBQUMvTixJQUF2QjtVQUNBLEtBQUssTUFBTCxHQUFjK04sU0FBUyxDQUFDcEIsS0FBeEI7VUFDQSxLQUFLLElBQUwsR0FBWW9CLFNBQVMsQ0FBQ25CLEdBQXRCO1VBQ0EsS0FBSyxLQUFMLEdBQWFtQixTQUFTLENBQUMvSixJQUF2QjtVQUNBLEtBQUssTUFBTCxHQUFjK0osU0FBUyxDQUFDbEIsS0FBeEI7VUFDQSxLQUFLLElBQUwsR0FBWWtCLFNBQVMsQ0FBQ2pCLEdBQXRCO1VBQ0EsS0FBSyxHQUFMLEdBQVdpQixTQUFTLENBQUNyRyxFQUFyQjtVQUNBLEtBQUssU0FBTCxHQUFpQnFHLFNBQVMsQ0FBQ2YsUUFBM0I7VUFDQSxLQUFLLFlBQUwsR0FBb0JlLFNBQVMsQ0FBQ2QsV0FBOUI7VUFDQSxLQUFLLFFBQUwsR0FBZ0JjLFNBQVMsQ0FBQ2IsT0FBMUI7VUFDQSxLQUFLLE9BQUwsR0FBZWEsU0FBUyxDQUFDWCxNQUF6QjtVQUNBLEtBQUssUUFBTCxHQUFnQlcsU0FBUyxDQUFDMUksT0FBMUI7UUFDSDs7TUEzSnFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O01DbkIxQzs7TUFDQTtNQUdPOzs7TUFBVSxNQUNYMkksb0JBRFcsU0FDa0IvTCxVQURsQixDQUNzQjtRQUM3QixJQUFGM0MsRUFBRTtVQUNGLE9BQU8sS0FBS2EsTUFBTCxDQUFZaEIsR0FBWixDQUFnQixJQUFoQixFQUFzQmUsS0FBN0I7UUFDSDs7UUFFUyxJQUFOK04sTUFBTTtVQUNOLE9BQU8sS0FBSzlOLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsUUFBaEIsRUFBMEJlLEtBQWpDO1FBQ0g7O1FBRU0sSUFBSGdPLEdBQUc7VUFDSCxPQUFPLEtBQUsvTixNQUFMLENBQVloQixHQUFaLENBQWdCLEtBQWhCLEVBQXVCZSxLQUE5QjtRQUNIOztRQUVPLElBQUpILElBQUk7VUFDSixPQUFPLEtBQUtJLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsTUFBaEIsRUFBd0JlLEtBQS9CO1FBQ0g7O1FBRU8sSUFBSjhELElBQUk7VUFDSixPQUFPLEtBQUs3RCxNQUFMLENBQVloQixHQUFaLENBQWdCLE1BQWhCLEVBQXdCZSxLQUEvQjtRQUNIOztRQUVRLElBQUwyTSxLQUFLO1VBQ0wsT0FBTyxLQUFLMU0sTUFBTCxDQUFZaEIsR0FBWixDQUFnQixPQUFoQixFQUF5QmUsS0FBaEM7UUFDSDs7UUFFUyxJQUFOOUIsTUFBTTtVQUNOLE9BQU8sS0FBSytCLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsUUFBaEIsRUFBMEJlLEtBQTFCLElBQW1DLEVBQTFDO1FBQ0g7O1FBRUQzQixZQUFZZ0MsS0FBWmhDLEVBQTRCO1VBQ3hCLE1BQU0sd0JBQU4sRUFBZ0NnQyxLQUFoQztRQUNIOztRQUVENE4sS0FBSztVQUNELE9BQU90Tyx1QkFBT0MsT0FBUEQsQ0FBZSxpQkFBZkEsRUFBa0M7WUFBQ1AsRUFBRSxFQUFFLEtBQUtBO1VBQVYsQ0FBbENPLENBQVA7UUFDSDs7UUFFRHVPLElBQUk7VUFDQSxPQUFPdk8sdUJBQU9DLE9BQVBELENBQWUsZ0JBQWZBLEVBQWlDO1lBQUNQLEVBQUUsRUFBRSxLQUFLQTtVQUFWLENBQWpDTyxDQUFQO1FBQ0g7O1FBRUR3TyxPQUFPO1VBQ0gsT0FBT3hPLHVCQUFPQyxPQUFQRCxDQUFlLG1CQUFmQSxFQUFvQztZQUFDUCxFQUFFLEVBQUUsS0FBS0E7VUFBVixDQUFwQ08sQ0FBUDtRQUNIOztNQTNDa0M7Ozs7Ozs7Ozs7Ozs7O01DTHZDOztNQUNBOztNQUVBLE1BQU1VLEtBQUssR0FBZSxFQUExQjtNQUVBQSxLQUFLLENBQUNWLE1BQU5VLEdBQWVWLHNCQUFmVTtNQUNBQSxLQUFLLENBQUNnQyxLQUFOaEMsR0FBYyxLQUFkQTtNQUVBQSxLQUFLLENBQUNKLE1BQU5JLEdBQWUsQ0FDWCxJQURXLEVBQ0wsUUFESyxFQUNLLEtBREwsRUFDWSxNQURaLEVBQ29CLE1BRHBCLEVBQzRCLE9BRDVCLEVBQ3FDLFFBRHJDLENBQWZBO01BSUFBLEtBQUssQ0FBQ3VDLEtBQU52QyxHQUFjO1FBQ1Z3QyxPQUFPLEVBQUU7VUFDTEUsSUFBSSxFQUFFO1FBREQ7TUFEQyxDQUFkMUM7TUFNQUEsS0FBSyxDQUFDMkMsT0FBTjNDLEdBQWdCO1FBQ1pqQixFQUFFLEVBQUU7VUFDQWEsTUFBTSxFQUFFLENBQUMsSUFBRCxDQURSO1VBRUFnRCxPQUFPLEVBQUU7UUFGVDtNQURRLENBQWhCNUM7O01BT0E2QyxhQUFPQyxRQUFQRCxDQUFnQix3QkFBaEJBLEVBQTBDN0MsS0FBMUM2Qzs7Ozs7Ozs7Ozs7O01DekJBOztNQUNBOztNQUNBOztNQUVBLE1BQU03QyxLQUFLLEdBQWUsRUFBMUI7TUFFQUEsS0FBSyxDQUFDVixNQUFOVSxHQUFlVixzQkFBZlU7TUFDQUEsS0FBSyxDQUFDZ0MsS0FBTmhDLEdBQWMsS0FBZEE7TUFFQUEsS0FBSyxDQUFDSixNQUFOSSxHQUFlLENBQ1gsSUFEVyxFQUNMLE1BREssRUFDRyxPQURILEVBQ1ksYUFEWixFQUMyQixLQUQzQixFQUNrQyxNQURsQyxFQUMwQyxPQUQxQyxFQUNtRCxJQURuRCxFQUN5RCxLQUR6RCxFQUVYLFVBRlcsRUFFQyxhQUZELEVBRWdCLFVBRmhCLEVBRTRCLFNBRjVCLEVBRXVDLEtBRnZDLENBQWZBO01BSUFBLEtBQUssQ0FBQzRCLFVBQU41QixHQUFtQjtRQUNmOE0sUUFBUSxFQUFFO1VBQ05wTCxJQUFJLEVBQUUrTCwwQkFEQTtVQUVOdEwsS0FBSyxFQUFFLHdCQUZEO1VBR05DLFVBQVUsRUFBRSxDQUFDO1lBQUNDLEtBQUssRUFBRSxJQUFSO1lBQWNDLE1BQU0sRUFBRTtVQUF0QixDQUFEO1FBSE47TUFESyxDQUFuQnRDO01BT0FBLEtBQUssQ0FBQ3VDLEtBQU52QyxHQUFjO1FBQ1Z3QyxPQUFPLEVBQUU7VUFDTEMsSUFBSSxFQUFFLG9CQUREO1VBRUxDLElBQUksRUFBRTtRQUZEO01BREMsQ0FBZDFDO01BT0FBLEtBQUssQ0FBQzJDLE9BQU4zQyxHQUFnQjtRQUNaakIsRUFBRSxFQUFFO1VBQ0FhLE1BQU0sRUFBRSxDQUFDLElBQUQsQ0FEUjtVQUVBZ0QsT0FBTyxFQUFFO1FBRlQ7TUFEUSxDQUFoQjVDOztNQU9BNkMsYUFBT0MsUUFBUEQsQ0FBZ0IsNEJBQWhCQSxFQUE4QzdDLEtBQTlDNkM7Ozs7Ozs7Ozs7Ozs7Ozs7O01DbENBOztNQUNBOztNQUVNLE1BQWdCRSxJQUFoQixTQUE2QnJCLFVBQTdCLENBQWlDO1FBQ25DMUQsWUFBc0JtRSxLQUF0Qm5FLEVBQXFDZ0MsS0FBckNoQyxFQUFxRDtVQUNqRCxNQUFNbUUsS0FBTixFQUFhbkMsS0FBYjtRQUNIOztRQUlEK04sWUFBWSxDQUFDQyxNQUFELEVBQWU7VUFDdkIsSUFBSSxDQUFDLEtBQUt4TyxJQUFWLEVBQWdCO1lBQ1pQLE9BQU8sQ0FBQ1QsS0FBUlMsQ0FBYywwQ0FBZEE7WUFDQTtVQUNIOztVQUNELE9BQU9LLHVCQUFPQyxPQUFQRCxDQUFlLGlCQUFmQSxFQUFrQztZQUFDaUksTUFBTSxFQUFFLEdBQUcsS0FBSy9ILElBQUksS0FBS3dPLE1BQU07VUFBaEMsQ0FBbEMxTyxDQUFQO1FBQ0g7O01BYmtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O01DSHZDOztNQUNBO01BRU87OztNQUFVLE1BQ1gyTyxhQURXLFNBQ1dsTyxnQkFEWCxDQUNxQjtRQUVsQy9CLFlBQVlnQyxLQUFaaEMsRUFBa0M7VUFDOUIsTUFBTSxnQkFBTixFQUF3QmtRLGtCQUF4QixFQUFzQ2xPLEtBQXRDO1FBQ0g7O01BSmlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O01DSnRDO01BRU87OztNQUFVLE1BQ1hrTyxZQURXLFNBQ1V4TSxVQURWLENBQ2M7UUFDckIsSUFBRjNDLEVBQUU7VUFDRixPQUFPLEtBQUthLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsSUFBaEIsRUFBc0JlLEtBQTdCO1FBQ0g7O1FBRU8sSUFBSkYsSUFBSTtVQUNKLE9BQU8sS0FBS0csTUFBTCxDQUFZaEIsR0FBWixDQUFnQixNQUFoQixFQUF3QmUsS0FBL0I7UUFDSDs7UUFFYSxJQUFWZ0gsVUFBVTtVQUNWLE9BQU8sS0FBSy9HLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsWUFBaEIsRUFBOEJlLEtBQXJDO1FBQ0g7O1FBRWdCLElBQWJ3TyxhQUFhO1VBQ2IsT0FBTyxDQUFDLENBQUMsS0FBS3ZPLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsZUFBaEIsRUFBaUNlLEtBQTFDO1FBQ0g7O1FBRUQzQixZQUFZZ0MsS0FBWmhDLEVBQTRCO1VBQ3hCLE1BQU0sZ0JBQU4sRUFBd0JnQyxLQUF4QjtRQUNIOztNQW5CMEI7Ozs7Ozs7Ozs7Ozs7O01DSC9COztNQUNBOztNQUVBLE1BQU1BLEtBQUssR0FBZSxFQUExQjtNQUVBQSxLQUFLLENBQUNWLE1BQU5VLEdBQWVWLHNCQUFmVTtNQUNBQSxLQUFLLENBQUNnQyxLQUFOaEMsR0FBYyxLQUFkQTtNQUVBQSxLQUFLLENBQUNKLE1BQU5JLEdBQWUsQ0FDWCxJQURXLEVBQ0wsTUFESyxFQUNHLFlBREgsRUFDaUIsZUFEakIsQ0FBZkE7TUFJQUEsS0FBSyxDQUFDdUMsS0FBTnZDLEdBQWM7UUFDVndDLE9BQU8sRUFBRTtVQUNMQyxJQUFJLEVBQUUscUJBREQ7VUFFTEMsSUFBSSxFQUFFO1FBRkQ7TUFEQyxDQUFkMUM7TUFPQUEsS0FBSyxDQUFDMkMsT0FBTjNDLEdBQWdCO1FBQ1pqQixFQUFFLEVBQUU7VUFDQWEsTUFBTSxFQUFFLENBQUMsSUFBRCxDQURSO1VBRUFnRCxPQUFPLEVBQUU7UUFGVDtNQURRLENBQWhCNUM7O01BT0E2QyxhQUFPQyxRQUFQRCxDQUFnQixnQkFBaEJBLEVBQWtDN0MsS0FBbEM2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7TUMxQkE7O01BQ0E7TUFFTzs7O01BQVUsTUFDWHVMLE9BRFcsU0FDS3JPLGdCQURMLENBQ2U7UUFFNUIvQixZQUFZZ0MsS0FBWmhDLEVBQWtDO1VBQzlCLE1BQU0sU0FBTixFQUFpQjRKLFlBQWpCLEVBQXlCNUgsS0FBekI7UUFDSDs7TUFKMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNKaEM7O01BQ0E7TUFLTzs7O01BQVUsTUFDWHFPLGtCQURXLFNBQ2dCM1EsWUFEaEIsQ0FDc0I7UUFDMUI7UUFFVDs7UUFDVSxJQUFORyxNQUFNO1VBQ04sT0FBTyxLQUFLLE9BQVo7UUFDSDs7UUFFRDs7UUFDWSxJQUFSeVEsUUFBUTtVQUNSLE9BQU8sS0FBSyxTQUFaO1FBQ0g7O1FBRUR0USxZQUFZdVEsTUFBWnZRLEVBQTBCO1VBQ3RCO1VBQ0EsS0FBSyxPQUFMLEdBQWV1USxNQUFmO1FBQ0g7O1FBRURuSixHQUFHLENBQUMvRyxJQUFELEVBQWE7VUFDWixJQUFJeUksSUFBSSxHQUFHLEtBQVg7VUFDQSxNQUFNaEMsT0FBTyxHQUFrQixLQUFLLE9BQUwsQ0FBYWxELFVBQWIsQ0FBd0JoRCxHQUF4QixDQUE0QixTQUE1QixDQUEvQjtVQUNBa0csT0FBTyxDQUFDRCxPQUFSQyxDQUFpQkMsTUFBRCxJQUFtQjtZQUMvQixJQUFJMUcsSUFBSSxLQUFLMEcsTUFBTSxDQUFDbkYsTUFBUG1GLENBQWNuRyxHQUFkbUcsQ0FBa0IsTUFBbEJBLEVBQTBCcEYsS0FBdkMsRUFBOEM7Y0FDMUNtSCxJQUFJLEdBQUcsSUFBUEE7WUFDSDtVQUhMO1VBTUEsT0FBT0EsSUFBUDtRQUNIOztRQUVXLE1BQU4zRixNQUFNO1VBRVIsSUFBSSxDQUFDLEtBQUtpRSxHQUFMLENBQVMsSUFBVCxDQUFMLEVBQXFCO1lBQ2pCbkcsT0FBTyxDQUFDbUMsSUFBUm5DLENBQWEsc0NBQWJBO1lBQ0E7VUFDSDs7VUFFRCxJQUFJO1lBQ0EsTUFBTW9DLE1BQU0sR0FBRyw4QkFBZjtZQUNBLE1BQU10QyxFQUFFLEdBQUc7Y0FBQ0EsRUFBRSxFQUFFLEtBQUssT0FBTCxDQUFhYSxNQUFiLENBQW9CaEIsR0FBcEIsQ0FBd0IsSUFBeEIsRUFBOEJlO1lBQW5DLENBQVg7WUFFQSxNQUFNNEIsUUFBUSxHQUFRLE1BQU1qQyx1QkFBT0MsT0FBUEQsQ0FBZStCLE1BQWYvQixFQUF1QlAsRUFBdkJPLENBQTVCOztZQUVBLElBQUlpQyxRQUFRLEVBQUUvQyxLQUFkLEVBQXFCO2NBQ2pCLEtBQUssT0FBTCxHQUFlK0MsUUFBUSxDQUFDL0MsS0FBeEI7Y0FDQVMsT0FBTyxDQUFDVCxLQUFSUyxDQUFjLHlCQUFkQSxFQUF5Q3NDLFFBQVEsQ0FBQy9DLEtBQWxEUztjQUNBO1lBQ0g7VUFWTCxFQVdFLE9BQU9ULEtBQVAsRUFBYztZQUNaLEtBQUssT0FBTCxHQUFlQSxLQUFmO1VBWkosVUFhVTtZQUNOLEtBQUssU0FBTCxHQUFpQixLQUFqQjtZQUNBLEtBQUtGLE9BQUwsQ0FBYSxRQUFiO1VBQ0g7UUFFSjs7TUF2RGtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O01DUHZDOztNQUNBOztNQUNBOztNQUNBO01Bd0NPOzs7TUFBVSxNQUNYc0osTUFEVyxTQUNJbEcsVUFESixDQUNRO1FBQ2YsSUFBRjNDLEVBQUU7VUFDRixPQUFPLEtBQUthLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsSUFBaEIsRUFBc0JlLEtBQTdCO1FBQ0g7O1FBRUQ7O1FBQ1EsSUFBSkYsSUFBSTtVQUNKLE9BQU8sS0FBSyxLQUFMLElBQWMsS0FBS0csTUFBTCxDQUFZaEIsR0FBWixDQUFnQixNQUFoQixFQUF3QmUsS0FBN0M7UUFDSDs7UUFFTyxJQUFKRixJQUFJLENBQUNFLEtBQUQsRUFBYztVQUNsQixJQUFJLEtBQUssS0FBTCxLQUFlQSxLQUFuQixFQUEwQjtVQUMxQixLQUFLLEtBQUwsR0FBYUEsS0FBYjtRQUNIOztRQUVPLElBQUp0QixJQUFJO1VBQ0osT0FBTyxLQUFLdUIsTUFBTCxDQUFZaEIsR0FBWixDQUFnQixNQUFoQixFQUF3QmUsS0FBL0I7UUFDSDs7UUFFVSxJQUFQMEosT0FBTztVQUNQLE9BQU8sS0FBS3pKLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsU0FBaEIsRUFBMkJlLEtBQWxDO1FBQ0g7O1FBRVksSUFBVHNELFNBQVM7VUFDVCxPQUFPLEtBQUtyRCxNQUFMLENBQVloQixHQUFaLENBQWdCLFdBQWhCLEVBQTZCZSxLQUFwQztRQUNIOztRQUVhLElBQVZ1RCxVQUFVO1VBQ1YsT0FBTyxLQUFLdEQsTUFBTCxDQUFZaEIsR0FBWixDQUFnQixZQUFoQixFQUE4QmUsS0FBckM7UUFDSDs7UUFFSyxJQUFGdUosRUFBRTtVQUNGLE9BQU8sS0FBS3RKLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsSUFBaEIsRUFBc0JlLEtBQTdCO1FBQ0g7O1FBRU8sSUFBSkgsSUFBSTtVQUNKLE9BQU8sS0FBS0ksTUFBTCxDQUFZaEIsR0FBWixDQUFnQixNQUFoQixFQUF3QmUsS0FBL0I7UUFDSDs7UUFFVyxJQUFSbUosUUFBUTtVQUNSLE9BQU8sS0FBS2xKLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsVUFBaEIsRUFBNEJlLEtBQW5DO1FBQ0g7O1FBRVcsSUFBUjJKLFFBQVE7VUFDUixPQUFPLEtBQUsxSixNQUFMLENBQVloQixHQUFaLENBQWdCLFVBQWhCLEVBQTRCZSxLQUFuQztRQUNIOztRQUVZLElBQVQ0SixTQUFTO1VBQ1QsT0FBTyxLQUFLM0osTUFBTCxDQUFZaEIsR0FBWixDQUFnQixXQUFoQixFQUE2QmUsS0FBcEM7UUFDSDs7UUFFRDs7UUFDUyxJQUFMd0QsS0FBSztVQUNMLE9BQU8sS0FBSyxNQUFMLElBQWUsS0FBS3ZELE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsT0FBaEIsRUFBeUJlLEtBQS9DO1FBQ0g7O1FBRVEsSUFBTHdELEtBQUssQ0FBQ3hELEtBQUQsRUFBYztVQUNuQixLQUFLLE1BQUwsR0FBY0EsS0FBZDtRQUNIOztRQUVEOztRQUNlLElBQVh5RCxXQUFXO1VBQ1gsT0FBTyxLQUFLLFlBQUwsSUFBcUIsS0FBS3hELE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsYUFBaEIsRUFBK0JlLEtBQTNEO1FBQ0g7O1FBRWMsSUFBWHlELFdBQVcsQ0FBQ3pELEtBQUQsRUFBYztVQUN6QixJQUFJLEtBQUssWUFBTCxLQUFzQkEsS0FBMUIsRUFBaUM7VUFDakMsS0FBSyxZQUFMLEdBQW9CQSxLQUFwQjtRQUNIOztRQUVNLElBQUh1SCxHQUFHO1VBQ0gsT0FBTyxLQUFLdEgsTUFBTCxDQUFZaEIsR0FBWixDQUFnQixLQUFoQixFQUF1QmUsS0FBOUI7UUFDSDs7UUFFUyxJQUFOOUIsTUFBTTtVQUNOLE9BQU8sS0FBSytCLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsUUFBaEIsRUFBMEJlLEtBQTFCLElBQW1DLEVBQTFDO1FBQ0g7O1FBRVcsSUFBUmdFLFFBQVE7VUFDUixPQUFPLEtBQUsvRCxNQUFMLENBQVloQixHQUFaLENBQWdCLFVBQWhCLEVBQTRCZSxLQUE1QixJQUFxQyxFQUE1QztRQUNIOztRQUVVLElBQVBtRixPQUFPO1VBQ1AsT0FBc0IsS0FBS2xELFVBQUwsQ0FBZ0JoRCxHQUFoQixDQUFvQixTQUFwQixDQUF0QjtRQUNIOztRQUVTLElBQU5tRixNQUFNO1VBQ04sTUFBTUMsT0FBTyxHQUF1QixLQUFLcEMsVUFBTCxDQUFnQmhELEdBQWhCLENBQW9CLFFBQXBCLENBQXBDO1VBQ0EsT0FBT29GLE9BQU8sSUFBSUEsT0FBTyxDQUFDckUsS0FBMUI7UUFDSDs7UUFFWSxJQUFUa0csU0FBUztVQUNULE1BQU1BLFNBQVMsR0FBeUIsS0FBS2pFLFVBQUwsQ0FBZ0JoRCxHQUFoQixDQUFvQixXQUFwQixDQUF4QztVQUNBLE9BQU9pSCxTQUFTLElBQTJCQSxTQUFTLENBQUNsRyxLQUFyRDtRQUNIOztRQUVROztRQUNBLElBQUw2TyxLQUFLO1VBQ0wsT0FBTyxLQUFLLE1BQVo7UUFDSDs7UUFFUTs7UUFDTyxJQUFadkssWUFBWTtVQUNaLE9BQU8sS0FBSyxhQUFaO1FBQ0g7O1FBRURqRyxZQUFZZ0MsS0FBWmhDLEVBQTRCO1VBQ3hCLE1BQU0sU0FBTixFQUFpQmdDLEtBQWpCO1VBRUEsS0FBSyxNQUFMLEdBQWMsSUFBSXlPLGtCQUFKLENBQWdCLElBQWhCLENBQWQ7VUFDQSxLQUFLLGFBQUwsR0FBcUIsSUFBSUosZ0NBQUosQ0FBdUIsSUFBdkIsQ0FBckI7VUFDQSxLQUFLLGFBQUwsQ0FBbUJ2UCxFQUFuQixDQUFzQixRQUF0QixFQUFnQyxNQUFNLEtBQUt3RixJQUFMLENBQVVoRyxPQUFWLENBQWtCLFFBQWxCLENBQXRDO1FBQ0g7UUFFRDs7Ozs7UUFHQWtHLFdBQVc7VUFDUCxNQUFNeEUsS0FBSyxHQUFHO1lBQUNrRixRQUFRLEVBQUUsS0FBS25HLEVBQWhCO1lBQW9CZ0YsTUFBTSxFQUFFO2NBQUMsUUFBUTtZQUFUO1VBQTVCLENBQWQ7VUFDQSxPQUFPekUsdUJBQU9DLE9BQVBELENBQWUsc0JBQWZBLEVBQXVDVSxLQUF2Q1YsQ0FBUDtRQUNIOztRQUVEb1AsbUJBQW1CLENBQUNoRSxZQUFELEVBQXVCO1VBQ3RDLE9BQU9wTCx1QkFBT0MsT0FBUEQsQ0FBZSx5QkFBZkEsRUFBMENvTCxZQUExQ3BMLENBQVA7UUFDSDs7UUFFRDBILFNBQVMsQ0FBQzNFLEtBQUQsRUFBb0IxQyxLQUFwQixFQUEyQztVQUNoRCxNQUFNSyxLQUFLLEdBQWM7WUFBQ2tGLFFBQVEsRUFBRSxLQUFLbkcsRUFBaEI7WUFBb0JrSSxPQUFPLEVBQUUsS0FBSzNILE1BQUwsQ0FBWUU7VUFBekMsQ0FBekI7VUFFQSxJQUFJNkMsS0FBSyxLQUFLLEtBQWQsRUFBcUJyQyxLQUFLLENBQUM4RSxPQUFOOUUsR0FBZ0I7WUFBQ2tILEdBQUcsRUFBV3ZIO1VBQWYsQ0FBaEJLLENBQXJCLEtBQ0ssSUFBSXFDLEtBQUssS0FBSyxXQUFkLEVBQTJCO1lBQzVCLElBQUksQ0FBQyxLQUFLd0UsYUFBTCxFQUFMLEVBQTJCO1lBQzNCN0csS0FBSyxDQUFDOEUsT0FBTjlFLEdBQWdCO2NBQUNtSCxFQUFFLEVBQUU7Z0JBQUNDLFNBQVMsRUFBV3pIO2NBQXJCO1lBQUwsQ0FBaEJLO1VBRkMsT0FHRXFDLEtBQUssS0FBSyxPQUFWQSxHQUFvQnJDLEtBQUssQ0FBQ21ELEtBQU5uRCxHQUFzQkwsS0FBMUMwQyxHQUFrRHJDLEtBQUssQ0FBQ29ELFdBQU5wRCxHQUE0QkwsS0FBOUUwQztVQUVQLE9BQU8vQyx1QkFBT0MsT0FBUEQsQ0FBZSxzQkFBZkEsRUFBdUNVLEtBQXZDVixDQUFQO1FBQ0g7O1FBRURxUCxJQUFJLENBQUMzTyxLQUFELEVBQVc7VUFDWCxJQUFJLENBQUNBLEtBQUssQ0FBQ2pCLEVBQVgsRUFBZWlCLEtBQUssQ0FBQ2pCLEVBQU5pQixHQUFXLEtBQUtqQixFQUFoQmlCO1VBQ2YsT0FBT1YsdUJBQU9DLE9BQVBELENBQWUsc0JBQWZBLEVBQXVDVSxLQUF2Q1YsQ0FBUDtRQUNIOztRQUVEK0gsS0FBSyxDQUFDNUgsSUFBRCxFQUFhO1VBQ2QsT0FBT0gsdUJBQU9DLE9BQVBELENBQWUsdUJBQWZBLEVBQXdDO1lBQzNDRyxJQUFJLEVBQUVBLElBRHFDO1lBRTNDeUYsUUFBUSxFQUFFLEtBQUtuRztVQUY0QixDQUF4Q08sQ0FBUDtRQUlIOztRQUVEZ0ksTUFBTTtVQUNGLElBQUksQ0FBQyxLQUFLaEksTUFBTCxDQUFZRSxJQUFqQixFQUF1QjtZQUNuQlAsT0FBTyxDQUFDVCxLQUFSUyxDQUFjLDBDQUFkQTtZQUNBO1VBQ0g7O1VBQ0QsT0FBT0ssdUJBQU9DLE9BQVBELENBQWUsd0JBQWZBLEVBQXlDO1lBQUNpSSxNQUFNLEVBQUUsS0FBSy9IO1VBQWQsQ0FBekNGLENBQVA7UUFDSDs7UUFFRGtJLFVBQVUsQ0FBQ3hILEtBQUQsRUFBbUI7VUFDekIsSUFBSWpCLEVBQUUsR0FBR2lCLEtBQUssQ0FBQzNCLElBQU4yQixLQUFlLFNBQWZBLEdBQTJCLEdBQUcsS0FBS2pCLEVBQUUsRUFBckNpQixHQUEwQyxHQUFHLEtBQUtqQixFQUFFLEtBQUtpQixLQUFLLENBQUMrRSxNQUFNLEtBQUsvRSxLQUFLLENBQUM0RyxTQUFTLEVBQWxHOztVQUNBLElBQUk1RyxLQUFLLENBQUMzQixJQUFOMkIsSUFBY0EsS0FBSyxDQUFDM0IsSUFBTjJCLEtBQWUsV0FBakMsRUFBOEM7WUFDMUMsTUFBTXlILEtBQUssR0FBRyxLQUFLMUksRUFBTCxDQUFRMEksS0FBUixDQUFjLElBQWQsQ0FBZDtZQUNBMUksRUFBRSxHQUFHLEdBQUcwSSxLQUFLLENBQUMsQ0FBRCxDQUFHLEtBQUtBLEtBQUssQ0FBQyxDQUFELENBQUcsS0FBS3pILEtBQUssQ0FBQytFLE1BQU0sRUFBOUNoRztVQUNIOztVQUVELE9BQU9PLHVCQUFPQyxPQUFQRCxDQUFlLGlCQUFmQSxFQUFrQztZQUNyQ1AsRUFBRSxFQUFFQSxFQURpQztZQUVyQ1YsSUFBSSxFQUFFMkIsS0FBSyxDQUFDM0IsSUFBTjJCLElBQWMsV0FGaUI7WUFHckMwSCxRQUFRLEVBQUUxSCxLQUFLLENBQUMwSDtVQUhxQixDQUFsQ3BJLENBQVA7UUFLSDs7UUFFRHFJLFNBQVMsQ0FBQzdGLE1BQUQsRUFBb0I7VUFDekIsTUFBTTlCLEtBQUssR0FBRztZQUFDa0YsUUFBUSxFQUFFLEtBQUtuRyxFQUFoQjtZQUFvQixHQUFHK0M7VUFBdkIsQ0FBZDtVQUNBLE9BQU94Qyx1QkFBT0MsT0FBUEQsQ0FBZSwyQkFBZkEsRUFBNENVLEtBQTVDVixDQUFQO1FBQ0g7O01BL0tvQjs7Ozs7Ozs7Ozs7Ozs7TUM1Q3pCOztNQUNBOztNQUNBOztNQUNBOztNQUNBOztNQUVBLE1BQU1VLEtBQUssR0FBZSxFQUExQjtNQUVBQSxLQUFLLENBQUNWLE1BQU5VLEdBQWVWLHNCQUFmVTtNQUNBQSxLQUFLLENBQUNnQyxLQUFOaEMsR0FBYyxLQUFkQTtNQUVBQSxLQUFLLENBQUNKLE1BQU5JLEdBQWUsQ0FDWCxJQURXLEVBQ0wsTUFESyxFQUNHLE1BREgsRUFDVyxJQURYLEVBQ2lCLE1BRGpCLEVBQ3lCLE9BRHpCLEVBQ2tDLGFBRGxDLEVBRVgsV0FGVyxFQUVFLFNBRkYsRUFFYSxXQUZiLEVBRTBCLFlBRjFCLEVBR1gsVUFIVyxFQUdDLFVBSEQsRUFJWCxLQUpXLEVBSUosU0FKSSxFQUlPLFdBSlAsRUFJb0IsUUFKcEIsRUFJOEIsVUFKOUIsQ0FBZkE7TUFPQUEsS0FBSyxDQUFDNEIsVUFBTjVCLEdBQW1CO1FBQ2Y4RSxPQUFPLEVBQUU7VUFDTDdDLEtBQUssRUFBRTRGLFlBREY7VUFFTDFGLEtBQUssRUFBRSxTQUZGO1VBR0xDLFVBQVUsRUFBRTtZQUFDQyxLQUFLLEVBQUUsSUFBUjtZQUFjQyxNQUFNLEVBQUU7VUFBdEI7UUFIUCxDQURNO1FBTWZ5QixNQUFNLEVBQUU7VUFDSmhFLFVBQVUsRUFBRTZPLHlCQURSO1VBRUp6TSxLQUFLLEVBQUUsZ0JBRkg7VUFHSjRELE1BQU0sRUFBRSxDQUFDO1lBQUMxRCxLQUFLLEVBQUUsUUFBUjtZQUFrQkMsTUFBTSxFQUFFO1VBQTFCLENBQUQ7UUFISixDQU5PO1FBV2Z1RCxTQUFTLEVBQUU7VUFDUG5FLElBQUksRUFBRXpCLGtCQURDO1VBRVBrQyxLQUFLLEVBQUUsY0FGQTtVQUdQQyxVQUFVLEVBQUUsQ0FBQztZQUFDQyxLQUFLLEVBQUUsSUFBUjtZQUFjQyxNQUFNLEVBQUU7VUFBdEIsQ0FBRDtRQUhMO01BWEksQ0FBbkJ0QztNQWtCQUEsS0FBSyxDQUFDdUMsS0FBTnZDLEdBQWM7UUFDVndDLE9BQU8sRUFBRTtVQUNMQyxJQUFJLEVBQUUsY0FERDtVQUVMQyxJQUFJLEVBQUU7UUFGRDtNQURDLENBQWQxQztNQU9BQSxLQUFLLENBQUMyQyxPQUFOM0MsR0FBZ0I7UUFDWmpCLEVBQUUsRUFBRTtVQUNBYSxNQUFNLEVBQUUsQ0FBQyxJQUFELENBRFI7VUFFQWdELE9BQU8sRUFBRTtRQUZUO01BRFEsQ0FBaEI1Qzs7TUFPQTZDLGFBQU9DLFFBQVBELENBQWdCLFNBQWhCQSxFQUEyQjdDLEtBQTNCNkM7Ozs7Ozs7Ozs7Ozs7Ozs7O01DbERBOztNQUNBO01BRU87OztNQUFVLE1BQ1grTCxhQURXLFNBQ1c3TyxnQkFEWCxDQUNxQjtRQUVsQy9CLFlBQVlnQyxLQUFaaEMsRUFBa0M7VUFDOUIsTUFBTSxnQkFBTixFQUF3QjZRLGtCQUF4QixFQUFzQzdPLEtBQXRDO1FBQ0g7O01BSmlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O01DSnRDOztNQUNBO01BNEJPOzs7TUFBVSxNQUNYNk8sWUFEVyxTQUNVbk4sVUFEVixDQUNjO1FBQ3JCLElBQUYzQyxFQUFFO1VBQ0YsT0FBTyxLQUFLYSxNQUFMLENBQVloQixHQUFaLENBQWdCLElBQWhCLEVBQXNCZSxLQUE3QjtRQUNIOztRQUVPLElBQUorSSxJQUFJO1VBQ0osT0FBTyxLQUFLOUksTUFBTCxDQUFZaEIsR0FBWixDQUFnQixNQUFoQixFQUF3QmUsS0FBL0I7UUFDSDs7UUFFVyxJQUFSK0gsUUFBUTtVQUNSLE9BQU8sS0FBSzlILE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsVUFBaEIsRUFBNEJlLEtBQW5DO1FBQ0g7O1FBRVUsSUFBUHNILE9BQU87VUFDUCxPQUFPLEtBQUtySCxNQUFMLENBQVloQixHQUFaLENBQWdCLFNBQWhCLEVBQTJCZSxLQUFsQztRQUNIOztRQUVXLElBQVJnSixRQUFRO1VBQ1IsT0FBTyxLQUFLL0ksTUFBTCxDQUFZaEIsR0FBWixDQUFnQixVQUFoQixFQUE0QmUsS0FBbkM7UUFDSDs7UUFFVSxJQUFQa0osT0FBTztVQUNQLE9BQU8sS0FBS2pKLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsU0FBaEIsRUFBMkJlLEtBQWxDO1FBQ0g7O1FBRVcsSUFBUmlKLFFBQVE7VUFDUixPQUFPLEtBQUtoSixNQUFMLENBQVloQixHQUFaLENBQWdCLFVBQWhCLEVBQTRCZSxLQUFuQztRQUNIOztRQUVXLElBQVJtSixRQUFRO1VBQ1IsT0FBTyxLQUFLbEosTUFBTCxDQUFZaEIsR0FBWixDQUFnQixVQUFoQixFQUE0QmUsS0FBbkM7UUFDSDs7UUFFWSxJQUFUbVAsU0FBUztVQUNULE9BQU8sS0FBS2xQLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsV0FBaEIsRUFBNkJlLEtBQXBDO1FBQ0g7O1FBRUQzQixZQUFZZ0MsS0FBWmhDLEVBQTRCO1VBQ3hCLE1BQU0sZ0JBQU4sRUFBd0JnQyxLQUF4QjtRQUNIOztRQUVEK08sTUFBTSxDQUFDL08sS0FBRCxFQUFtQjtVQUNyQixNQUFNLEdBQUdzQixhQUFILEVBQWtCME4sVUFBbEIsSUFBaUMsS0FBS2pRLEVBQUwsQ0FBUTBJLEtBQVIsQ0FBYyxJQUFkLENBQXZDO1VBRUEsTUFBTWdELFVBQVUsR0FBcUIsRUFBckM7VUFDQSxNQUFNcUUsU0FBUyxHQUFtQjtZQUM5QnhQLE1BQU0sRUFBRTBQLFVBRHNCO1lBRTlCakssTUFBTSxFQUFFLFFBRnNCO1lBRzlCaEIsTUFBTSxFQUFFO1VBSHNCLENBQWxDO1VBS0ErSyxTQUFTLENBQUMvSyxNQUFWK0ssQ0FBaUI5TyxLQUFLLENBQUNpUCxNQUF2QkgsSUFBaUM5TyxLQUFLLENBQUM4TyxTQUF2Q0E7VUFDQXJFLFVBQVUsQ0FBQ2xNLElBQVhrTSxDQUFnQnFFLFNBQWhCckU7VUFDQSxPQUFPbkwsdUJBQU9DLE9BQVBELENBQWUseUJBQWZBLEVBQTBDO1lBQzdDZ0MsYUFBYSxFQUFFMkwsUUFBUSxDQUFDM0wsYUFBRCxDQURzQjtZQUU3Q21KLFVBQVUsRUFBRUE7VUFGaUMsQ0FBMUNuTCxDQUFQO1FBSUg7O1FBRVcsTUFBTmdJLE1BQU0sQ0FBQ3dILFNBQUQsRUFBbUI7VUFDM0IsSUFBSSxDQUFDQSxTQUFMLEVBQWdCO1lBQ1osTUFBTXhQLHVCQUFPQyxPQUFQRCxDQUFlLGdCQUFmQSxFQUFpQztjQUFDaUksTUFBTSxFQUFFLEtBQUttQjtZQUFkLENBQWpDcEosQ0FBTjtVQUNIOztVQUVELElBQUksQ0FBQyxLQUFLd1AsU0FBVixFQUFxQjtVQUVyQixNQUFNLEdBQUd4TixhQUFILEVBQWtCME4sVUFBbEIsSUFBaUMsS0FBS2pRLEVBQUwsQ0FBUTBJLEtBQVIsQ0FBYyxJQUFkLENBQXZDO1VBQ0EsTUFBTTNGLE1BQU0sR0FBRztZQUNYUixhQUFhLEVBQUUyTCxRQUFRLENBQUMzTCxhQUFELENBRFo7WUFFWG1KLFVBQVUsRUFBRSxDQUFDO2NBQUNuTCxNQUFNLEVBQUUwUCxVQUFUO2NBQXFCakssTUFBTSxFQUFFO1lBQTdCLENBQUQ7VUFGRCxDQUFmO1VBSUEsTUFBTXpGLHVCQUFPQyxPQUFQRCxDQUFlLHlCQUFmQSxFQUEwQ3dDLE1BQTFDeEMsQ0FBTjtVQUNBLE1BQU1BLHVCQUFPQyxPQUFQRCxDQUFlLGdCQUFmQSxFQUFpQztZQUFDaUksTUFBTSxFQUFFLEtBQUt1SCxTQUFMLENBQWVwRztVQUF4QixDQUFqQ3BKLENBQU47UUFDSDs7TUF4RTBCOzs7Ozs7Ozs7Ozs7OztNQzlCL0I7O01BQ0E7O01BRUEsTUFBTVUsS0FBSyxHQUFlLEVBQTFCO01BRUFBLEtBQUssQ0FBQ1YsTUFBTlUsR0FBZVYsc0JBQWZVO01BQ0FBLEtBQUssQ0FBQ2dDLEtBQU5oQyxHQUFjLEtBQWRBO01BQ0FBLEtBQUssQ0FBQ0osTUFBTkksR0FBZSxDQUNYLElBRFcsRUFDTCxNQURLLEVBQ0csVUFESCxFQUNlLFNBRGYsRUFDMEIsVUFEMUIsRUFDc0MsU0FEdEMsRUFDaUQsVUFEakQsRUFFWCxVQUZXLEVBRUMsV0FGRCxDQUFmQTtNQUtBQSxLQUFLLENBQUN1QyxLQUFOdkMsR0FBYztRQUNWd0MsT0FBTyxFQUFFO1VBQ0xDLElBQUksRUFBRSxxQkFERDtVQUVMQyxJQUFJLEVBQUU7UUFGRDtNQURDLENBQWQxQztNQU9BQSxLQUFLLENBQUMyQyxPQUFOM0MsR0FBZ0I7UUFDWmpCLEVBQUUsRUFBRTtVQUNBYSxNQUFNLEVBQUUsQ0FBQyxJQUFELENBRFI7VUFFQWdELE9BQU8sRUFBRTtRQUZULENBRFE7UUFLWnNNLE9BQU8sRUFBRTtVQUNMdFAsTUFBTSxFQUFFLENBQUMsUUFBRDtRQURIO01BTEcsQ0FBaEJJOztNQVVBNkMsYUFBT0MsUUFBUEQsQ0FBZ0IsZ0JBQWhCQSxFQUFrQzdDLEtBQWxDNkM7Ozs7Ozs7Ozs7Ozs7Ozs7TUN6Qk87O01BQVUsTUFDWDRMLFdBRFcsQ0FDQTtRQUVKOztRQUVGLElBQUhySixHQUFHO1VBQ0gsT0FBTyxDQUFDLENBQUMsS0FBSyxPQUFMLENBQWFpQixTQUFiLENBQXVCLEtBQXZCLENBQVQ7UUFDSDs7UUFFUSxJQUFMMUcsS0FBSztVQUNMLE9BQU8sS0FBSyxPQUFMLENBQWEwRyxTQUFiLENBQXVCLEtBQXZCLENBQVA7UUFDSDs7UUFFRHJJLFlBQVl1USxNQUFadlEsRUFBMEI7VUFDdEIsS0FBSyxPQUFMLEdBQWV1USxNQUFmO1FBQ0g7O1FBRUQzUCxHQUFHLENBQUN1USxRQUFELEVBQW1CQyxXQUErQixLQUFsRCxFQUF1RDtVQUN0RCxJQUFJWixLQUFKO1VBQ0EsSUFBSXpKLE1BQUo7VUFDQSxLQUFLLE9BQUwsQ0FBYUQsT0FBYixDQUFxQkQsT0FBckIsQ0FBNkJ3SyxDQUFDLElBQUlBLENBQUMsQ0FBQzVQLElBQUY0UCxLQUFXLEtBQVhBLEdBQW1CdEssTUFBTSxHQUFHc0ssQ0FBNUJBLEdBQWdDLElBQWxFO1VBRUEsSUFBSSxDQUFDdEssTUFBTCxFQUFhO1VBRWIsTUFBTTZCLFNBQVMsR0FBRzdCLE1BQU0sQ0FBQzRCLFVBQVA1QixDQUFrQm5HLEdBQWxCbUcsQ0FBc0IsS0FBdEJBLENBQWxCO1VBQ0E2QixTQUFTLENBQUMwSSxPQUFWMUksQ0FBa0JoQyxLQUFsQmdDLENBQXdCL0IsT0FBeEIrQixDQUFpQ3RFLE1BQUQsSUFBNEI7WUFDeERrTSxLQUFLLEdBQUdsTSxNQUFNLElBQUlpTixJQUFJLENBQUNDLEtBQUxELENBQVdqTixNQUFNLENBQUM0SixJQUFsQnFELENBQWxCZjtVQURKO1VBSUEsT0FBT0EsS0FBSyxJQUFJQSxLQUFLLENBQUNZLFFBQUQsQ0FBTFosQ0FBZ0JXLFFBQWhCWCxDQUFoQjtRQUNIOztNQTdCWTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ0xqQjs7TUFDQTtNQUVPOzs7TUFBVSxNQUNYaUIscUJBRFcsU0FDbUIxUCxnQkFEbkIsQ0FDNkI7UUFDMUMvQixZQUFZZ0MsS0FBWmhDLEVBQWtDO1VBQzlCLE1BQU0seUJBQU4sRUFBaUMwUix5QkFBakMsRUFBc0QxUCxLQUF0RDtRQUNIOztRQUVEMlAsbUJBQW1CO1VBQ2YsTUFBTWhLLE1BQU0sR0FBYSxFQUF6QjtVQUNBLEtBQUtmLEtBQUwsQ0FBV0MsT0FBWCxDQUFvQitLLENBQUQsSUFBMkI7WUFDMUMsQ0FBQ0EsQ0FBQyxDQUFDQyxJQUFGRCxLQUFXLFVBQVhBLElBQXlCQSxDQUFDLENBQUNDLElBQUZELEtBQVd4TCxTQUFyQyxLQUFtRCxDQUFDd0wsQ0FBQyxDQUFDL08sS0FBdEQsSUFBK0Q4RSxNQUFNLENBQUNwSCxJQUFQb0gsQ0FBWWlLLENBQUMsQ0FBQ3RHLFFBQWQzRCxDQUEvRDtVQURKO1VBR0EsT0FBT0EsTUFBUDtRQUVIOztNQVp5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ0o5QztNQUlPOzs7TUFBVSxNQUNYK0osbUJBRFcsU0FDaUJoTyxVQURqQixDQUNxQjtRQUM1QixJQUFGM0MsRUFBRTtVQUNGLE9BQU8sS0FBS2EsTUFBTCxDQUFZaEIsR0FBWixDQUFnQixJQUFoQixFQUFzQmUsS0FBN0I7UUFDSDs7UUFFSyxJQUFGdUosRUFBRTtVQUNGLE9BQU8sS0FBS3RKLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsSUFBaEIsRUFBc0JlLEtBQTdCO1FBQ0g7O1FBRUssSUFBRm1RLEVBQUU7VUFDRixPQUFPLEtBQUtsUSxNQUFMLENBQVloQixHQUFaLENBQWdCLElBQWhCLEVBQXNCZSxLQUE3QjtRQUNIOztRQUVVLElBQVAyRCxPQUFPO1VBQ1AsT0FBTyxLQUFLMUQsTUFBTCxDQUFZaEIsR0FBWixDQUFnQixTQUFoQixFQUEyQmUsS0FBbEM7UUFDSDs7UUFFTyxJQUFKa1EsSUFBSTtVQUNKLE9BQU8sS0FBS2pRLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsTUFBaEIsRUFBd0JlLEtBQS9CO1FBQ0g7O1FBRVEsSUFBTGtCLEtBQUs7VUFDTCxPQUFPLEtBQUtqQixNQUFMLENBQVloQixHQUFaLENBQWdCLE9BQWhCLEVBQXlCZSxLQUFoQztRQUNIOztRQUVZLElBQVRzRCxTQUFTO1VBQ1QsT0FBTyxLQUFLckQsTUFBTCxDQUFZaEIsR0FBWixDQUFnQixXQUFoQixFQUE2QmUsS0FBcEM7UUFDSDs7UUFFUyxJQUFOOUIsTUFBTTtVQUNOLE9BQU8sS0FBSytCLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsUUFBaEIsRUFBMEJlLEtBQTFCLElBQW1DLEVBQTFDO1FBQ0g7O1FBRVcsSUFBUmdFLFFBQVE7VUFDUixPQUFPLEtBQUsvRCxNQUFMLENBQVloQixHQUFaLENBQWdCLFVBQWhCLEVBQTRCZSxLQUE1QixJQUFxQyxFQUE1QztRQUNIOztRQUVTLElBQU5vRixNQUFNO1VBQ04sTUFBTUEsTUFBTSxHQUFpQixLQUFLbkQsVUFBTCxDQUFnQmhELEdBQWhCLENBQW9CLFFBQXBCLENBQTdCO1VBQ0EsT0FBT21HLE1BQU0sSUFBWUEsTUFBTSxDQUFDcEYsS0FBaEM7UUFDSDs7UUFFYyxJQUFYb1EsV0FBVztVQUNYLE1BQU1BLFdBQVcsR0FBaUIsS0FBS25PLFVBQUwsQ0FBZ0JoRCxHQUFoQixDQUFvQixhQUFwQixDQUFsQztVQUNBLE9BQU9tUixXQUFXLElBQWlCQSxXQUFXLENBQUNwUSxLQUEvQztRQUNIOztRQUVXLElBQVJ1RixRQUFRO1VBQ1IsT0FBTyxLQUFLdEYsTUFBTCxDQUFZaEIsR0FBWixDQUFnQixXQUFoQixFQUE2QmUsS0FBcEM7UUFDSDs7UUFFVyxJQUFSc0osUUFBUTtVQUNSLE9BQU8sS0FBS3JKLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsV0FBaEIsRUFBNkJlLEtBQXBDO1FBQ0g7O1FBRUQzQixZQUFZZ0MsS0FBWmhDLEVBQTRCO1VBQ3hCLE1BQU0seUJBQU4sRUFBaUNnQyxLQUFqQztRQUNIOztNQXpEaUM7Ozs7Ozs7Ozs7Ozs7O01DTHRDOztNQUNBOztNQUNBOztNQUNBOztNQUVBLE1BQU1BLEtBQUssR0FBZSxFQUExQjtNQUVBQSxLQUFLLENBQUNWLE1BQU5VLEdBQWVWLHNCQUFmVTtNQUNBQSxLQUFLLENBQUNnQyxLQUFOaEMsR0FBYyxLQUFkQSxFQUVBOztNQUNBQSxLQUFLLENBQUNKLE1BQU5JLEdBQWUsQ0FDWCxJQURXLEVBQ0wsSUFESyxFQUNDLElBREQsRUFDTyxTQURQLEVBQ2tCLE1BRGxCLEVBQzBCLE9BRDFCLEVBQ21DLFdBRG5DLEVBQ2dELGFBRGhELEVBRVgsUUFGVyxFQUVELFVBRkMsRUFFVyxXQUZYLEVBRXdCLFdBRnhCLENBQWZBO01BSUFBLEtBQUssQ0FBQzRCLFVBQU41QixHQUFtQjtRQUNmK0UsTUFBTSxFQUFFO1VBQ0pyRCxJQUFJLEVBQUVtRyxZQURGO1VBRUoxRixLQUFLLEVBQUUsU0FGSDtVQUdKQyxVQUFVLEVBQUUsQ0FBQztZQUFDQyxLQUFLLEVBQUUsSUFBUjtZQUFjQyxNQUFNLEVBQUU7VUFBdEIsQ0FBRDtRQUhSLENBRE87UUFNZnlOLFdBQVcsRUFBRTtVQUNUck8sSUFBSSxFQUFFdUssa0JBREc7VUFFVDlKLEtBQUssRUFBRSxjQUZFO1VBR1RDLFVBQVUsRUFBRSxDQUFDO1lBQUNDLEtBQUssRUFBRSxJQUFSO1lBQWNDLE1BQU0sRUFBRTtVQUF0QixDQUFEO1FBSEgsQ0FORSxDQVdmOztNQVhlLENBQW5CdEMsRUFlQTs7TUFFQUEsS0FBSyxDQUFDdUMsS0FBTnZDLEdBQWM7UUFDVndDLE9BQU8sRUFBRTtVQUNMQyxJQUFJLEVBQUUsOEJBREQ7VUFFTEMsSUFBSSxFQUFFO1FBRkQ7TUFEQyxDQUFkMUM7TUFNQUEsS0FBSyxDQUFDMkMsT0FBTjNDLEdBQWdCO1FBQ1pqQixFQUFFLEVBQUU7VUFDQWEsTUFBTSxFQUFFLENBQUMsSUFBRCxDQURSO1VBRUFnRCxPQUFPLEVBQUU7UUFGVCxDQURRO1FBS1o4SCxZQUFZLEVBQUU7VUFDVjlLLE1BQU0sRUFBRSxDQUFDLFdBQUQ7UUFERTtNQUxGLENBQWhCSTs7TUFVQTZDLGFBQU9DLFFBQVBELENBQWdCLHlCQUFoQkEsRUFBMkM3QyxLQUEzQzZDOzs7Ozs7Ozs7Ozs7Ozs7OztNQy9DQTs7TUFDQTtNQVlPOzs7TUFBVSxNQUNYZ0ksU0FEVyxTQUNPOUgsVUFEUCxDQUNXO1FBQ2xCLElBQUZoRSxFQUFFO1VBQ0YsT0FBTyxLQUFLYSxNQUFMLENBQVloQixHQUFaLENBQWdCLElBQWhCLEVBQXNCZSxLQUE3QjtRQUNIOztRQUVPLElBQUpGLElBQUk7VUFDSixPQUFPLEtBQUtHLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsTUFBaEIsRUFBd0JlLEtBQS9CO1FBQ0g7O1FBRU8sSUFBSkgsSUFBSTtVQUNKLE9BQU8sS0FBS0ksTUFBTCxDQUFZaEIsR0FBWixDQUFnQixNQUFoQixFQUF3QmUsS0FBL0I7UUFDSDs7UUFFVSxJQUFQOEosT0FBTztVQUNQLE9BQU8sS0FBSzdKLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsU0FBaEIsRUFBMkJlLEtBQWxDO1FBQ0g7O1FBRVksSUFBVCtKLFNBQVM7VUFDVCxPQUFPLEtBQUs5SixNQUFMLENBQVloQixHQUFaLENBQWdCLFdBQWhCLEVBQTZCZSxLQUFwQztRQUNIOztRQUVnQixJQUFid08sYUFBYTtVQUNiLE9BQU8sS0FBS3ZPLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsZUFBaEIsRUFBaUNlLEtBQXhDO1FBQ0g7O1FBRVMsSUFBTjlCLE1BQU07VUFDTixPQUFPLEtBQUsrQixNQUFMLENBQVloQixHQUFaLENBQWdCLFFBQWhCLEVBQTBCZSxLQUExQixJQUFtQyxFQUExQztRQUNIOztRQUVXLElBQVJnRSxRQUFRO1VBQ1IsT0FBTyxLQUFLL0QsTUFBTCxDQUFZaEIsR0FBWixDQUFnQixVQUFoQixFQUE0QmUsS0FBNUIsSUFBcUMsRUFBNUM7UUFDSDs7UUFFVSxJQUFQMlAsT0FBTztVQUNQLE1BQU1BLE9BQU8sR0FBdUIsS0FBSzFOLFVBQUwsQ0FBZ0JoRCxHQUFoQixDQUFvQixTQUFwQixDQUFwQztVQUNBLE9BQU8wUSxPQUFPLElBQUlBLE9BQU8sQ0FBQzNQLEtBQTFCO1FBQ0g7O1FBRWEsSUFBVjhLLFVBQVU7VUFDVixNQUFNQSxVQUFVLEdBQXVCLEtBQUs3SSxVQUFMLENBQWdCaEQsR0FBaEIsQ0FBb0IsWUFBcEIsQ0FBdkM7VUFDQSxPQUFPNkwsVUFBVSxJQUFJQSxVQUFVLENBQUM5SyxLQUFoQztRQUNIOztRQUVlLElBQVorSyxZQUFZO1VBQ1osTUFBTUEsWUFBWSxHQUF1QixLQUFLOUksVUFBTCxDQUFnQmhELEdBQWhCLENBQW9CLGNBQXBCLENBQXpDO1VBQ0EsT0FBTzhMLFlBQVksSUFBSUEsWUFBWSxDQUFDL0ssS0FBcEM7UUFDSDs7UUFFRCxVQUE0QixJQUFJaUssR0FBSixFQUE1Qjs7UUFDVSxJQUFOb0csTUFBTTtVQUNOLE9BQU8sS0FBSyxPQUFaO1FBQ0g7O1FBRURoUyxZQUFZZ0MsS0FBWmhDLEVBQTRCO1VBQ3hCLE1BQU0sWUFBTixFQUFvQmdDLEtBQXBCO1FBQ0g7O1FBRWUsTUFBVndILFVBQVUsQ0FBQ3hILEtBQUQsRUFBbUI7VUFDL0I7VUFDQSxNQUFNOEIsTUFBTSxHQUFHO1lBQ1gvQyxFQUFFLEVBQUUsS0FBS0EsRUFERTtZQUVYVixJQUFJLEVBQUUsV0FGSztZQUdYcUosUUFBUSxFQUFFMUgsS0FBSyxDQUFDMEg7VUFITCxDQUFmO1VBTUEsT0FBT3BJLHVCQUFPQyxPQUFQRCxDQUFlLGlCQUFmQSxFQUFrQ3dDLE1BQWxDeEMsQ0FBUDtRQUNIOztNQWxFdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNmNUI7O01BQ0E7TUFFTzs7O01BQVUsTUFDWDJRLG1CQURXLFNBQ2lCbFEsZ0JBRGpCLENBQzJCO1FBQ3hDL0IsWUFBWWdDLEtBQVpoQyxFQUFrQztVQUM5QixNQUFNLHVCQUFOLEVBQStCa1Msd0JBQS9CLEVBQW1EbFEsS0FBbkQ7UUFDSDs7TUFIdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNINUM7TUFPTzs7O01BQVUsTUFDWGtRLGtCQURXLFNBQ2dCekgsY0FEaEIsQ0FDc0I7UUFDN0IsSUFBRjFKLEVBQUU7VUFDRixPQUFPLEtBQUthLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsSUFBaEIsRUFBc0JlLEtBQTdCO1FBQ0g7O1FBRVUsSUFBUDJELE9BQU87VUFDUCxPQUFPLEtBQUsxRCxNQUFMLENBQVloQixHQUFaLENBQWdCLFNBQWhCLEVBQTJCZSxLQUFsQztRQUNIOztRQUVPLElBQUp1TSxJQUFJO1VBQ0osT0FBTyxLQUFLdE0sTUFBTCxDQUFZaEIsR0FBWixDQUFnQixNQUFoQixFQUF3QmUsS0FBL0I7UUFDSDs7UUFFTyxJQUFKK0ksSUFBSTtVQUNKLE9BQU8sS0FBSzlJLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsTUFBaEIsRUFBd0JlLEtBQS9CO1FBQ0g7O1FBRVcsSUFBUitILFFBQVE7VUFDUixPQUFPLEtBQUs5SCxNQUFMLENBQVloQixHQUFaLENBQWdCLFVBQWhCLEVBQTRCZSxLQUFuQztRQUNIOztRQUVVLElBQVBzSCxPQUFPO1VBQ1AsT0FBTyxLQUFLckgsTUFBTCxDQUFZaEIsR0FBWixDQUFnQixTQUFoQixFQUEyQmUsS0FBbEM7UUFDSDs7UUFFVyxJQUFSZ0osUUFBUTtVQUNSLE9BQU8sS0FBSy9JLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsVUFBaEIsRUFBNEJlLEtBQW5DO1FBQ0g7O1FBRVUsSUFBUGtKLE9BQU87VUFDUCxPQUFPLEtBQUtqSixNQUFMLENBQVloQixHQUFaLENBQWdCLFNBQWhCLEVBQTJCZSxLQUFsQztRQUNIOztRQUVXLElBQVJpSixRQUFRO1VBQ1IsT0FBTyxLQUFLaEosTUFBTCxDQUFZaEIsR0FBWixDQUFnQixVQUFoQixFQUE0QmUsS0FBbkM7UUFDSDs7UUFFRDNCLFlBQVlnQyxLQUFaaEMsRUFBNEI7VUFDeEIsTUFBTSx1QkFBTixFQUErQmdDLEtBQS9CO1FBQ0g7O01BdkNrQzs7Ozs7Ozs7Ozs7Ozs7TUNUdkM7O01BQ0E7O01BRUEsTUFBTUEsS0FBSyxHQUFlLEVBQTFCO01BRUFBLEtBQUssQ0FBQ1YsTUFBTlUsR0FBZVYsc0JBQWZVO01BQ0FBLEtBQUssQ0FBQ2dDLEtBQU5oQyxHQUFjLEtBQWRBO01BRUFBLEtBQUssQ0FBQ0osTUFBTkksR0FBZSxDQUNYLElBRFcsRUFDTCxTQURLLEVBQ00sTUFETixFQUNjLE1BRGQsRUFDc0IsVUFEdEIsRUFDa0MsU0FEbEMsRUFDNkMsVUFEN0MsRUFDeUQsU0FEekQsRUFDb0UsVUFEcEUsQ0FBZkE7TUFJQUEsS0FBSyxDQUFDdUMsS0FBTnZDLEdBQWM7UUFDVndDLE9BQU8sRUFBRTtVQUNMQyxJQUFJLEVBQUUsNEJBREQ7VUFFTEMsSUFBSSxFQUFFO1FBRkQ7TUFEQyxDQUFkMUM7TUFNQUEsS0FBSyxDQUFDMkMsT0FBTjNDLEdBQWdCO1FBQ1pqQixFQUFFLEVBQUU7VUFDQWEsTUFBTSxFQUFFLENBQUMsSUFBRCxDQURSO1VBRUFnRCxPQUFPLEVBQUU7UUFGVCxDQURRO1FBS1o2SCxVQUFVLEVBQUU7VUFDUjdLLE1BQU0sRUFBRSxDQUFDLFdBQUQ7UUFEQTtNQUxBLENBQWhCSTs7TUFVQTZDLGFBQU9DLFFBQVBELENBQWdCLHVCQUFoQkEsRUFBeUM3QyxLQUF6QzZDOzs7Ozs7Ozs7Ozs7TUM1QkE7O01BQ0E7O01BQ0E7O01BQ0E7O01BQ0E7O01BRUEsTUFBTTdDLEtBQUssR0FBZSxFQUExQjtNQUVBQSxLQUFLLENBQUNWLE1BQU5VLEdBQWVWLHNCQUFmVTtNQUNBQSxLQUFLLENBQUNnQyxLQUFOaEMsR0FBYyxLQUFkQTtNQUVBQSxLQUFLLENBQUNKLE1BQU5JLEdBQWUsQ0FDWCxJQURXLEVBQ0wsTUFESyxFQUNHLE1BREgsRUFDVyxTQURYLEVBQ3NCLFdBRHRCLEVBQ21DLGVBRG5DLEVBQ29ELFFBRHBELEVBQzhELFVBRDlELENBQWZBO01BSUFBLEtBQUssQ0FBQzRCLFVBQU41QixHQUFtQjtRQUNmc1AsT0FBTyxFQUFFO1VBQ0x2UCxVQUFVLEVBQUVvUSw0QkFEUDtVQUVMaE8sS0FBSyxFQUFFLG9CQUZGO1VBR0w0RCxNQUFNLEVBQUUsQ0FBQztZQUFDMUQsS0FBSyxFQUFFLFdBQVI7WUFBcUJDLE1BQU0sRUFBRTtVQUE3QixDQUFEO1FBSEgsQ0FETTtRQU1mbUksVUFBVSxFQUFFO1VBQ1IxSyxVQUFVLEVBQUVrUSxnQ0FESjtVQUVSOU4sS0FBSyxFQUFFLHVCQUZDO1VBR1I0RCxNQUFNLEVBQUUsQ0FBQztZQUFDMUQsS0FBSyxFQUFFLFdBQVI7WUFBcUJDLE1BQU0sRUFBRTtVQUE3QixDQUFEO1FBSEEsQ0FORztRQVdmb0ksWUFBWSxFQUFFO1VBQ1YzSyxVQUFVLEVBQUUwUCxrQ0FERjtVQUVWdE4sS0FBSyxFQUFFLHlCQUZHO1VBR1Y0RCxNQUFNLEVBQUUsQ0FBQztZQUFDMUQsS0FBSyxFQUFFLFdBQVI7WUFBcUJDLE1BQU0sRUFBRTtVQUE3QixDQUFEO1FBSEU7TUFYQyxDQUFuQnRDO01Ba0JBQSxLQUFLLENBQUN1QyxLQUFOdkMsR0FBYztRQUNWd0MsT0FBTyxFQUFFO1VBQ0xFLElBQUksRUFBRTtRQUREO01BREMsQ0FBZDFDO01BTUFBLEtBQUssQ0FBQzJDLE9BQU4zQyxHQUFnQjtRQUNaakIsRUFBRSxFQUFFO1VBQ0FhLE1BQU0sRUFBRSxDQUFDLElBQUQsQ0FEUjtVQUVBZ0QsT0FBTyxFQUFFO1FBRlQ7TUFEUSxDQUFoQjVDOztNQU9BNkMsYUFBT0MsUUFBUEQsQ0FBZ0IsWUFBaEJBLEVBQThCN0MsS0FBOUI2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7TUM5Q0E7O01BQ0E7TUFFTzs7O01BQVUsTUFDWHNOLGdCQURXLFNBQ2NwUSxnQkFEZCxDQUN3QjtRQUNyQy9CLFlBQVlnQyxLQUFaaEMsRUFBa0M7VUFDOUIsTUFBTSxvQkFBTixFQUE0Qm9TLHFCQUE1QixFQUE2Q3BRLEtBQTdDO1FBQ0g7O01BSG9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O01DSHpDO01BT087OztNQUFVLE1BQ1hvUSxlQURXLFNBQ2EzSCxjQURiLENBQ21CO1FBQzFCLElBQUYxSixFQUFFO1VBQ0YsT0FBTyxLQUFLYSxNQUFMLENBQVloQixHQUFaLENBQWdCLElBQWhCLEVBQXNCZSxLQUE3QjtRQUNIOztRQUVVLElBQVAyRCxPQUFPO1VBQ1AsT0FBTyxLQUFLMUQsTUFBTCxDQUFZaEIsR0FBWixDQUFnQixTQUFoQixFQUEyQmUsS0FBbEM7UUFDSDs7UUFFTyxJQUFKdU0sSUFBSTtVQUNKLE9BQU8sS0FBS3RNLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsTUFBaEIsRUFBd0JlLEtBQS9CO1FBQ0g7O1FBRU8sSUFBSitMLElBQUk7VUFDSixPQUFPLEtBQUs5TCxNQUFMLENBQVloQixHQUFaLENBQWdCLE1BQWhCLEVBQXdCZSxLQUEvQjtRQUNIOztRQUVPLElBQUorSSxJQUFJO1VBQ0osT0FBTyxLQUFLOUksTUFBTCxDQUFZaEIsR0FBWixDQUFnQixNQUFoQixFQUF3QmUsS0FBL0I7UUFDSDs7UUFFVyxJQUFSK0gsUUFBUTtVQUNSLE9BQU8sS0FBSzlILE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsVUFBaEIsRUFBNEJlLEtBQW5DO1FBQ0g7O1FBRVUsSUFBUHNILE9BQU87VUFDUCxPQUFPLEtBQUtySCxNQUFMLENBQVloQixHQUFaLENBQWdCLFNBQWhCLEVBQTJCZSxLQUFsQztRQUNIOztRQUVXLElBQVJnSixRQUFRO1VBQ1IsT0FBTyxLQUFLL0ksTUFBTCxDQUFZaEIsR0FBWixDQUFnQixVQUFoQixFQUE0QmUsS0FBbkM7UUFDSDs7UUFFVSxJQUFQa0osT0FBTztVQUNQLE9BQU8sS0FBS2pKLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsU0FBaEIsRUFBMkJlLEtBQWxDO1FBQ0g7O1FBRVcsSUFBUmlKLFFBQVE7VUFDUixPQUFPLEtBQUtoSixNQUFMLENBQVloQixHQUFaLENBQWdCLFVBQWhCLEVBQTRCZSxLQUFuQztRQUNIOztRQUVEM0IsWUFBWWdDLEtBQVpoQyxFQUE0QjtVQUN4QixNQUFNLG9CQUFOLEVBQTRCZ0MsS0FBNUI7UUFDSDs7TUEzQytCOzs7Ozs7Ozs7Ozs7OztNQ1RwQzs7TUFDQTs7TUFFQSxNQUFNQSxLQUFLLEdBQWUsRUFBMUI7TUFFQUEsS0FBSyxDQUFDVixNQUFOVSxHQUFlVixzQkFBZlU7TUFDQUEsS0FBSyxDQUFDZ0MsS0FBTmhDLEdBQWMsS0FBZEE7TUFFQUEsS0FBSyxDQUFDSixNQUFOSSxHQUFlLENBQ1gsSUFEVyxFQUNMLFNBREssRUFDTSxNQUROLEVBQ2MsTUFEZCxFQUNzQixNQUR0QixFQUM4QixVQUQ5QixFQUMwQyxTQUQxQyxFQUNxRCxVQURyRCxFQUNpRSxTQURqRSxFQUM0RSxVQUQ1RSxDQUFmQTtNQUlBQSxLQUFLLENBQUN1QyxLQUFOdkMsR0FBYztRQUNWd0MsT0FBTyxFQUFFO1VBQ0xDLElBQUksRUFBRSx5QkFERDtVQUVMQyxJQUFJLEVBQUU7UUFGRDtNQURDLENBQWQxQztNQU1BQSxLQUFLLENBQUMyQyxPQUFOM0MsR0FBZ0I7UUFDWmpCLEVBQUUsRUFBRTtVQUNBYSxNQUFNLEVBQUUsQ0FBQyxJQUFELENBRFI7VUFFQWdELE9BQU8sRUFBRTtRQUZULENBRFE7UUFLWjBNLE9BQU8sRUFBRTtVQUNMMVAsTUFBTSxFQUFFLENBQUMsV0FBRDtRQURIO01BTEcsQ0FBaEJJOztNQVVBNkMsYUFBT0MsUUFBUEQsQ0FBZ0Isb0JBQWhCQSxFQUFzQzdDLEtBQXRDNkM7Ozs7Ozs7Ozs7Ozs7Ozs7O01DNUJBO01BRU87OztNQUFVLE1BQ1gxQyxhQURXLFNBQ1d6QyxZQURYLENBQ2lCO1FBRTlCMlMsTUFBTTs7UUFDRyxJQUFMakYsS0FBSztVQUNMLE9BQU8sS0FBS2lGLE1BQVo7UUFDSDs7UUFFREMsU0FBUzs7UUFDRyxJQUFSaEMsUUFBUTtVQUNSLE9BQU8sS0FBS2dDLFNBQVo7UUFDSDs7UUFFVyxJQUFSaEMsUUFBUSxDQUFDM08sS0FBRCxFQUFlO1VBQ3ZCLElBQUlBLEtBQUssS0FBSyxLQUFLMlEsU0FBbkIsRUFBOEI7VUFDOUIsS0FBS0EsU0FBTCxHQUFpQjNRLEtBQWpCO1VBQ0EsS0FBS2UsWUFBTDtRQUNIOztRQUVENlAsUUFBUTs7UUFDRyxJQUFQQyxPQUFPO1VBQ1AsT0FBTyxLQUFLRCxRQUFaO1FBQ0g7O1FBRURFLFdBQVc7O1FBQ0csSUFBVjNTLFVBQVU7VUFDVixPQUFPLEtBQUsyUyxXQUFaO1FBQ0g7O1FBRWEsSUFBVjNTLFVBQVUsQ0FBQzZCLEtBQUQsRUFBZTtVQUN6QixJQUFJQSxLQUFLLEtBQUssS0FBSzhRLFdBQW5CLEVBQWdDO1VBQ2hDLEtBQUtBLFdBQUwsR0FBbUI5USxLQUFuQjtVQUNBO1FBQ0g7O1FBRUQrUSxVQUFVOztRQUNHLElBQVQzUyxTQUFTO1VBQ1QsT0FBTyxLQUFLMlMsVUFBWjtRQUNIOztRQUVZLElBQVQzUyxTQUFTLENBQUM0QixLQUFELEVBQWU7VUFDeEIsSUFBSUEsS0FBSyxLQUFLLEtBQUsrUSxVQUFuQixFQUErQjtVQUMvQixLQUFLQSxVQUFMLEdBQWtCL1EsS0FBbEI7VUFDQTtRQUNIOztRQUVEZ1IsT0FBTzs7UUFDRyxJQUFOQyxNQUFNO1VBQ04sT0FBTyxLQUFLRCxPQUFaO1FBQ0g7O1FBRURqUSxZQUFZLEdBQUcsQ0FBQzJELFFBQWdCLFFBQWpCLEtBQW9DLEtBQUsvRixPQUFMLENBQWErRixLQUFiLENBQXZDO1FBRVo7Ozs7OztRQUtBd00sSUFBSSxDQUFDMUIsUUFBRCxFQUFXeFAsS0FBWCxFQUFnQjtVQUNoQixJQUFJbVIsS0FBSyxHQUFHLEVBQVo7VUFDQSxJQUFJM0IsUUFBUSxJQUFJeFAsS0FBSyxLQUFLLFdBQTFCLEVBQXVDbVIsS0FBSyxDQUFDM0IsUUFBRCxDQUFMMkIsR0FBa0JuUixLQUFsQm1SLENBQXZDLEtBQXFFQSxLQUFLLEdBQUczQixRQUFSMkI7VUFDckUsSUFBSXJILE9BQU8sR0FBWSxLQUF2Qjs7VUFFQSxLQUFLLE1BQU1zSCxJQUFYLElBQW1CRCxLQUFuQixFQUEwQjtZQUN0QixNQUFNRSxHQUFHLEdBQVcsSUFBSUQsSUFBSSxFQUE1QjtZQUNBLElBQUksQ0FBQyxLQUFLRSxjQUFMLENBQW9CRCxHQUFwQixDQUFMLEVBQStCLFNBRlQsQ0FFbUI7O1lBRXpDLElBQUksS0FBS0EsR0FBTCxNQUFjRixLQUFLLENBQUNDLElBQUQsQ0FBdkIsRUFBK0I7WUFDL0IsS0FBS0MsR0FBTCxJQUFZRixLQUFLLENBQUNDLElBQUQsQ0FBakI7WUFDQXRILE9BQU8sR0FBRyxJQUFWQTtVQUNIOztVQUVELElBQUlBLE9BQUosRUFBYSxLQUFLL0ksWUFBTDtRQUNoQjs7UUFFRHdRLGFBQWE7VUFDVCxNQUFNSixLQUFLLEdBQUcsRUFBZDtVQUNBNUksTUFBTSxDQUFDaUosSUFBUGpKLENBQVksSUFBWkEsRUFBa0JyRCxPQUFsQnFELENBQTBCaUgsUUFBUSxJQUFJMkIsS0FBSyxDQUFDM0IsUUFBUSxDQUFDaUMsT0FBVGpDLENBQWlCLEdBQWpCQSxFQUFzQixFQUF0QkEsQ0FBRCxDQUFMMkIsR0FBbUMsS0FBSzNCLFFBQUwsQ0FBekVqSDtVQUNBLE9BQU80SSxLQUFQO1FBQ0g7O01BOUU2Qjs7Ozs7Ozs7Ozs7Ozs7TUNIbEM7O01BQ0E7O01BRUEsTUFBTTtRQUFDTztNQUFELElBQVlDLGNBQWxCO01BY0EsQ0FBQyxZQUFXO1FBQ1IsTUFBTTVTLE9BQU8sR0FBRyxNQUFNQyxpQkFBU0MsR0FBVEQsQ0FBYSxvQkFBYkEsQ0FBdEI7UUFDQSxNQUFNRSxNQUFNLEdBQUcsTUFBTUgsT0FBTyxDQUFDRyxNQUE3QjtRQUVBQSxNQUFNLENBQUNDLEVBQVBELENBQVUsd0JBQVZBLEVBQXFDVCxPQUFELElBQXlCaVQsT0FBTyxDQUFDNU8sSUFBUjRPLENBQWFsUSxNQUFia1EsQ0FBb0JqVCxPQUFPLENBQUMrRCxLQUE1QmtQLEVBQW1DalQsT0FBTyxDQUFDMkgsTUFBM0NzTCxDQUE3RHhTO1FBQ0FBLE1BQU0sQ0FBQ0MsRUFBUEQsQ0FBVSx3QkFBVkEsRUFBcUNULE9BQUQsSUFBeUJpVCxPQUFPLENBQUM1TyxJQUFSNE8sQ0FBYWxRLE1BQWJrUSxDQUFvQmpULE9BQU8sQ0FBQytELEtBQTVCa1AsRUFBbUNqVCxPQUFPLENBQUMySCxNQUEzQ3NMLENBQTdEeFM7UUFFQUEsTUFBTSxDQUFDQyxFQUFQRCxDQUFVLDBCQUFWQSxFQUF1Q1QsT0FBRCxJQUEyQmlULE9BQU8sQ0FBQ0UsTUFBUkYsQ0FBZUcsTUFBZkgsQ0FBc0JqVCxPQUFPLENBQUMrRCxLQUE5QmtQLEVBQXFDalQsT0FBTyxDQUFDVyxFQUE3Q3NTLENBQWpFeFM7UUFDQUEsTUFBTSxDQUFDQyxFQUFQRCxDQUFVLDBCQUFWQSxFQUF1Q1QsT0FBRCxJQUEyQmlULE9BQU8sQ0FBQ0UsTUFBUkYsQ0FBZUcsTUFBZkgsQ0FBc0JqVCxPQUFPLENBQUMrRCxLQUE5QmtQLEVBQXFDalQsT0FBTyxDQUFDVyxFQUE3Q3NTLENBQWpFeFM7UUFFQUEsTUFBTSxDQUFDQyxFQUFQRCxDQUFVLDBCQUFWQSxFQUF1Q1QsT0FBRCxJQUEyQmlULE9BQU8sQ0FBQ0UsTUFBUkYsQ0FBZS9KLE1BQWYrSixDQUFzQmpULE9BQU8sQ0FBQytELEtBQTlCa1AsRUFBcUNqVCxPQUFPLENBQUNXLEVBQTdDc1MsQ0FBakV4UztRQUNBQSxNQUFNLENBQUNDLEVBQVBELENBQVUsMEJBQVZBLEVBQXVDVCxPQUFELElBQTJCaVQsT0FBTyxDQUFDRSxNQUFSRixDQUFlL0osTUFBZitKLENBQXNCalQsT0FBTyxDQUFDK0QsS0FBOUJrUCxFQUFxQ2pULE9BQU8sQ0FBQ1csRUFBN0NzUyxDQUFqRXhTO1FBRUFBLE1BQU0sQ0FBQ0MsRUFBUEQsQ0FBVSwwQkFBVkEsRUFBdUNULE9BQUQsSUFBMkJpVCxPQUFPLENBQUNFLE1BQVJGLENBQWVsUSxNQUFma1EsQ0FBc0JqVCxPQUFPLENBQUMrRCxLQUE5QmtQLEVBQXFDalQsT0FBTyxDQUFDVyxFQUE3Q3NTLENBQWpFeFM7UUFDQUEsTUFBTSxDQUFDQyxFQUFQRCxDQUFVLDBCQUFWQSxFQUF1Q1QsT0FBRCxJQUEyQmlULE9BQU8sQ0FBQ0UsTUFBUkYsQ0FBZWxRLE1BQWZrUSxDQUFzQmpULE9BQU8sQ0FBQytELEtBQTlCa1AsRUFBcUNqVCxPQUFPLENBQUNXLEVBQTdDc1MsQ0FBakV4UztRQUVBQSxNQUFNLENBQUNDLEVBQVBELENBQVUsZ0NBQVZBLEVBQTZDVCxPQUFELElBQ3hDaVQsT0FBTyxDQUFDRSxNQUFSRixDQUFlbFEsTUFBZmtRLENBQXNCalQsT0FBTyxDQUFDK0QsS0FBOUJrUCxFQUFxQ2pULE9BQU8sQ0FBQ1csRUFBN0NzUyxFQUFpRGpULE9BQU8sQ0FBQ2lFLEtBQXpEZ1AsRUFBZ0VqVCxPQUFPLENBQUN1QixLQUF4RTBSLENBREp4UztRQUVBQSxNQUFNLENBQUNDLEVBQVBELENBQVUsZ0NBQVZBLEVBQTZDVCxPQUFELElBQ3hDaVQsT0FBTyxDQUFDRSxNQUFSRixDQUFlbFEsTUFBZmtRLENBQXNCalQsT0FBTyxDQUFDK0QsS0FBOUJrUCxFQUFxQ2pULE9BQU8sQ0FBQ1csRUFBN0NzUyxFQUFpRGpULE9BQU8sQ0FBQ2lFLEtBQXpEZ1AsRUFBZ0VqVCxPQUFPLENBQUN1QixLQUF4RTBSLENBREp4UztNQWxCSixLQW9CS29DLEtBcEJMLENBb0JXakMsR0FBRyxJQUFJQyxPQUFPLENBQUNULEtBQVJTLENBQWNELEdBQUcsQ0FBQ0UsS0FBbEJELENBcEJsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNoQkE7TUFlTzs7O01BQVUsTUFDWHdTLFlBRFcsU0FDVXRSLDRCQURWLENBQ3VCO1FBQ3BDOztRQUNlLElBQVhsQyxXQUFXO1VBQ1gsT0FBTyxLQUFLLFlBQVo7UUFDSDs7UUFFRDs7UUFDUSxJQUFKSSxJQUFJO1VBQ0osT0FBTyxLQUFLLEtBQVo7UUFDSDs7UUFFRDs7UUFDUyxJQUFMRyxLQUFLO1VBQ0wsT0FBTyxLQUFLLE1BQVo7UUFDSDs7UUFFRCxTQUFrQixFQUFsQjs7UUFDUyxJQUFMa1QsS0FBSztVQUNMLE9BQU8sS0FBSyxNQUFaO1FBQ0g7O1FBRUR4TixPQUFPLENBQUM5RixPQUFELEVBQWtCO1VBQ3JCLEtBQUssWUFBTCxHQUFvQkEsT0FBTyxDQUFDSCxXQUE1QjtVQUNBLEtBQUssS0FBTCxHQUFhRyxPQUFPLENBQUNBLE9BQVJBLENBQWdCQyxJQUE3QjtVQUVBLElBQUksQ0FBQ0QsT0FBTyxDQUFDQSxPQUFSQSxDQUFnQlksR0FBckIsRUFBMEI7VUFDMUIsTUFBTTBTLEtBQUssR0FBR3RULE9BQU8sQ0FBQ0EsT0FBUkEsQ0FBZ0JZLEdBQWhCWixDQUFvQnFKLEtBQXBCckosQ0FBMEIsSUFBMUJBLENBQWQ7VUFFQSxLQUFLLE1BQUwsR0FBY3NULEtBQUssQ0FBQ0MsS0FBTkQsRUFBZDs7VUFDQSxNQUFNeE4sT0FBTyxHQUFJdEQsSUFBRCxJQUFpQjtZQUM3QixJQUFJOFEsS0FBSjtZQUNBQSxLQUFLLEdBQUc5USxJQUFJLENBQUN3USxPQUFMeFEsQ0FBYSxRQUFiQSxFQUF1QixFQUF2QkEsQ0FBUjhRO1lBQ0FBLEtBQUssR0FBR0EsS0FBSyxDQUFDakssS0FBTmlLLENBQVksTUFBWkEsQ0FBUkE7WUFFQSxJQUFJRSxNQUFKO1lBQ0EsSUFBSUMsTUFBTSxHQUFHSCxLQUFLLENBQUMsQ0FBRCxDQUFsQjs7WUFDQSxJQUFJQSxLQUFLLENBQUN6RyxNQUFOeUcsS0FBaUIsQ0FBckIsRUFBd0I7Y0FDcEJFLE1BQU0sR0FBR0YsS0FBSyxDQUFDLENBQUQsQ0FBZEU7Y0FDQUMsTUFBTSxHQUFHSCxLQUFLLENBQUMsQ0FBRCxDQUFkRztZQUNIOztZQUVELE1BQU14VCxJQUFJLEdBQUdxVCxLQUFLLENBQUMsQ0FBRCxDQUFMQSxDQUFTTixPQUFUTSxDQUFpQixPQUFqQkEsRUFBMEIsRUFBMUJBLENBQWI7WUFDQUcsTUFBTSxHQUFHQSxNQUFNLENBQUNULE9BQVBTLENBQWUsUUFBZkEsRUFBeUIsRUFBekJBLENBQVRBO1lBQ0EsTUFBTXBLLEtBQUssR0FBR29LLE1BQU0sQ0FBQ3BLLEtBQVBvSyxDQUFhLEdBQWJBLENBQWQ7WUFDQSxJQUFJLENBQUM5TSxNQUFELEVBQVMrTSxJQUFULEVBQWVDLE1BQWYsSUFBeUJ0SyxLQUE3QjtZQUVBLEtBQUssTUFBTCxDQUFZbEosSUFBWixDQUFpQjtjQUFDRixJQUFJLEVBQUVBLElBQVA7Y0FBYXVULE1BQU0sRUFBRUEsTUFBckI7Y0FBNkI3TSxNQUFNLEVBQUVBLE1BQXJDO2NBQTZDK00sSUFBSSxFQUFFQSxJQUFuRDtjQUF5REMsTUFBTSxFQUFFQTtZQUFqRSxDQUFqQjtVQWpCSjs7VUFtQkFMLEtBQUssQ0FBQzdNLE9BQU42TSxDQUFjeE4sT0FBZHdOO1FBQ0g7O1FBRUQxVCxZQUFZSSxPQUFaSixFQUE2QjtVQUN6QjtVQUVBLEtBQUtrRyxPQUFMLEdBQWUsS0FBS0EsT0FBTCxDQUFhaEQsSUFBYixDQUFrQixJQUFsQixDQUFmO1VBQ0EsS0FBS2dELE9BQUwsQ0FBYTlGLE9BQWI7UUFDSDs7TUF4RG1DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O01DakJ4Qzs7TUFDQTs7TUFDQTtNQU9POzs7TUFBVSxNQUNYNFQsY0FEVyxTQUNZN1IsNEJBRFosQ0FDeUI7UUFDdEMsU0FBUyxFQUFUO1FBQ0EsU0FBeUIsRUFBekI7O1FBQ1MsSUFBTHlFLEtBQUs7VUFDTCxPQUFPLEtBQUssTUFBWjtRQUNIOztRQUVEbEYsS0FBSyxDQUFDdVMsR0FBRyxHQUFHLEtBQVAsRUFBWTtVQUNiLElBQUlBLEdBQUosRUFBUztZQUNMLEtBQUssTUFBTCxDQUFZaEgsTUFBWixHQUFxQixDQUFyQjtZQUNBO1VBQ0g7O1VBQ0QsS0FBSyxNQUFMLENBQVkwRyxLQUFaO1FBQ0g7O1FBRUR6TixPQUFPLENBQUM5RixPQUFELEVBQWtCO1VBQ3JCLElBQUksS0FBSyxNQUFMLENBQVk2TSxNQUFaLEtBQXVCLEtBQUssTUFBaEMsRUFBd0MsS0FBSyxNQUFMLENBQVkwRyxLQUFaO1VBQ3hDLEtBQUssTUFBTCxDQUFZcFQsSUFBWixDQUFpQixJQUFJa1Qsa0JBQUosQ0FBaUJyVCxPQUFqQixDQUFqQjtRQUNIOztRQUVlLE1BQVY0QyxVQUFVO1VBQ1osTUFBTW5DLE1BQU0sR0FBRyxNQUFNa0csdUJBQU9jLFNBQVBkLENBQWlCbEcsTUFBdEM7VUFDQUEsTUFBTSxDQUFDQyxFQUFQRCxDQUFVLFVBQVZBLEVBQXNCLEtBQUtxRixPQUEzQnJGO1FBQ0g7O1FBRURiO1VBQ0k7VUFFQSxLQUFLa0csT0FBTCxHQUFlLEtBQUtBLE9BQUwsQ0FBYWhELElBQWIsQ0FBa0IsSUFBbEIsQ0FBZjtVQUNBLEtBQUtGLFVBQUwsR0FBa0JDLEtBQWxCLENBQXdCakMsR0FBRyxJQUFJQyxPQUFPLENBQUNULEtBQVJTLENBQWNELEdBQUcsQ0FBQ0UsS0FBbEJELENBQS9CO1FBQ0g7O01BOUJxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ1YxQzs7TUFDQTs7TUFFTSxNQUFPaVQsWUFBUCxDQUFtQjtRQUVaLFVBQVUsSUFBSXhVLFlBQUosRUFBVjtRQUVUOztRQUNTLElBQUxpQyxLQUFLO1VBQ0wsT0FBTyxLQUFLLE1BQVo7UUFDSDs7UUFFbUIsTUFBTndTLE1BQU07VUFDaEIsS0FBSyxNQUFMLEdBQWM3Uyx1QkFBT0MsT0FBUEQsQ0FBZSxlQUFmQSxDQUFkO1VBQ0EsS0FBSyxPQUFMLENBQWFoQixPQUFiLENBQXFCLFFBQXJCO1VBQ0EsT0FBTyxLQUFLcUIsS0FBWjtRQUNIOztRQUVEOztRQUNXLE1BQUx5UyxLQUFLO1VBQ1AsSUFBSSxLQUFLLFFBQVQsRUFBbUIsT0FBTyxLQUFLLFFBQVo7VUFDbkIsS0FBSyxRQUFMLEdBQWdCLE1BQU0sS0FBS0QsTUFBTCxFQUF0QjtRQUNIOztNQW5Cb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNIekI7O01BRUEsTUFBTUUsTUFBTixDQUFZO1FBRVIsVUFBVSxJQUFJSCxvQkFBSixFQUFWOztRQUNVLElBQU5JLE1BQU07VUFDTixPQUFPLEtBQUssT0FBWjtRQUNIOztNQUxPOztNQVNMLE1BQU1DLFlBQVksR0FBRyxJQUFJRixNQUFKLEVBQXJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNYUDs7TUFDQTs7TUFlTSxNQUFnQjVKLE1BQWhCLFNBQStCL0csVUFBL0IsQ0FBbUM7UUFHckM7O1FBQ2MsSUFBVjhRLFVBQVU7VUFDVixPQUFPLEtBQUssV0FBWjtRQUNIOztRQUVhLElBQVZBLFVBQVUsQ0FBQzdTLEtBQUQsRUFBZTtVQUN6QixJQUFJQSxLQUFLLEtBQUssS0FBSyxXQUFuQixFQUFnQztVQUNoQyxLQUFLLFdBQUwsR0FBbUJBLEtBQW5CO1VBQ0EsS0FBSzJFLElBQUwsQ0FBVWhHLE9BQVYsQ0FBa0Isa0JBQWxCO1FBQ0g7O1FBRUROLFlBQXNCbUUsS0FBdEJuRSxFQUFxQ2dDLEtBQXJDaEMsRUFBcUQ7VUFDakQsTUFBTW1FLEtBQU4sRUFBYW5DLEtBQWI7UUFDSDs7UUFFUyxNQUFKMk8sSUFBSSxDQUFDM08sS0FBRCxFQUFtQjtVQUN6QixPQUFPVix1QkFBT0MsT0FBUEQsQ0FBZSxlQUFmQSxFQUFnQ1UsS0FBaENWLENBQVA7UUFDSDs7UUFFVyxNQUFObVQsTUFBTSxDQUFDelMsS0FBRCxFQUFtQjtVQUMzQixPQUFPVix1QkFBT0MsT0FBUEQsQ0FBZSxpQkFBZkEsRUFBa0NVLEtBQWxDVixDQUFQO1FBQ0g7O1FBRVcsTUFBTmdJLE1BQU07VUFDUixPQUFPaEksdUJBQU9DLE9BQVBELENBQWUsaUJBQWZBLEVBQWtDO1lBQUNpSSxNQUFNLEVBQUUsS0FBS21CO1VBQWQsQ0FBbENwSixDQUFQO1FBQ0g7O1FBRVcsTUFBTm9ULE1BQU0sQ0FBQzVRLE1BQUQsRUFBWTtVQUNwQixPQUFPeEMsdUJBQU9DLE9BQVBELENBQWUsaUJBQWZBLEVBQWtDd0MsTUFBbEN4QyxDQUFQO1FBQ0g7O01BaENvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ2Z6Qzs7TUFDQTtNQU9POzs7TUFBVSxNQUNYcVQsbUJBRFcsU0FDaUI1UCxVQURqQixDQUNxQjtRQUM1QixJQUFGaEUsRUFBRTtVQUNGLE9BQU8sS0FBS2EsTUFBTCxDQUFZaEIsR0FBWixDQUFnQixJQUFoQixFQUFzQmUsS0FBN0I7UUFDSDs7UUFFTyxJQUFKSCxJQUFJO1VBQ0osT0FBTyxLQUFLSSxNQUFMLENBQVloQixHQUFaLENBQWdCLE1BQWhCLEVBQXdCZSxLQUEvQjtRQUNIOztRQUVZLElBQVRpSCxTQUFTO1VBQ1QsT0FBTyxLQUFLaEgsTUFBTCxDQUFZaEIsR0FBWixDQUFnQixXQUFoQixFQUE2QmUsS0FBcEM7UUFDSDs7UUFFUSxJQUFMNkssS0FBSztVQUNMLE9BQU8sS0FBSzVLLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsT0FBaEIsRUFBeUJlLEtBQXpCLElBQWtDLEVBQXpDO1FBQ0g7O1FBRVMsSUFBTjlCLE1BQU07VUFDTixPQUFPLEtBQUsrQixNQUFMLENBQVloQixHQUFaLENBQWdCLFFBQWhCLEVBQTBCZSxLQUExQixJQUFtQyxFQUExQztRQUNIOztRQUVXLElBQVJnRSxRQUFRO1VBQ1IsT0FBTyxLQUFLL0QsTUFBTCxDQUFZaEIsR0FBWixDQUFnQixVQUFoQixFQUE0QmUsS0FBNUIsSUFBcUMsRUFBNUM7UUFDSDs7UUFFVSxJQUFQMlAsT0FBTztVQUNQLE1BQU1BLE9BQU8sR0FBdUIsS0FBSzFOLFVBQUwsQ0FBZ0JoRCxHQUFoQixDQUFvQixTQUFwQixDQUFwQztVQUNBLE9BQU8wUSxPQUFPLElBQUlBLE9BQU8sQ0FBQzNQLEtBQTFCO1FBQ0g7O1FBRUQzQixZQUFZZ0MsS0FBWmhDLEVBQTRCO1VBQ3hCLE1BQU0sc0JBQU4sRUFBOEJnQyxLQUE5QjtRQUNIOztRQUVlLE1BQVZ3SCxVQUFVLENBQUN4SCxLQUFELEVBQW1CO1VBQy9CLE1BQU04QixNQUFNLEdBQUc7WUFDWC9DLEVBQUUsRUFBRSxLQUFLQSxFQURFO1lBRVhWLElBQUksRUFBRSxzQkFGSztZQUdYcUosUUFBUSxFQUFFMUgsS0FBSyxDQUFDMEg7VUFITCxDQUFmO1VBTUEsT0FBT3BJLHVCQUFPQyxPQUFQRCxDQUFlLGlCQUFmQSxFQUFrQ3dDLE1BQWxDeEMsQ0FBUDtRQUNIOztNQTFDaUM7Ozs7Ozs7Ozs7Ozs7O01DVnRDOztNQUNBOztNQUNBOztNQUVBLE1BQU1VLEtBQUssR0FBZSxFQUExQjtNQUVBQSxLQUFLLENBQUNWLE1BQU5VLEdBQWVWLHNCQUFmVTtNQUNBQSxLQUFLLENBQUNnQyxLQUFOaEMsR0FBYyxLQUFkQTtNQUVBQSxLQUFLLENBQUNKLE1BQU5JLEdBQWUsQ0FDWCxJQURXLEVBQ0wsV0FESyxFQUNRLE1BRFIsRUFDZ0IsT0FEaEIsRUFDeUIsUUFEekIsRUFDbUMsVUFEbkMsQ0FBZkE7TUFJQUEsS0FBSyxDQUFDNEIsVUFBTjVCLEdBQW1CO1FBQ2ZzUCxPQUFPLEVBQUU7VUFDTHZQLFVBQVUsRUFBRTZTLHVDQURQO1VBRUx6USxLQUFLLEVBQUUsOEJBRkY7VUFHTDRELE1BQU0sRUFBRSxDQUFDO1lBQUMxRCxLQUFLLEVBQUUsYUFBUjtZQUF1QkMsTUFBTSxFQUFFO1VBQS9CLENBQUQ7UUFISDtNQURNLENBQW5CdEM7TUFRQUEsS0FBSyxDQUFDdUMsS0FBTnZDLEdBQWM7UUFDVndDLE9BQU8sRUFBRTtVQUNMQyxJQUFJLEVBQUUsRUFERDtVQUVMQyxJQUFJLEVBQUU7UUFGRDtNQURDLENBQWQxQztNQU9BQSxLQUFLLENBQUMyQyxPQUFOM0MsR0FBZ0I7UUFDWmpCLEVBQUUsRUFBRTtVQUNBYSxNQUFNLEVBQUUsQ0FBQyxJQUFELENBRFI7VUFFQWdELE9BQU8sRUFBRTtRQUZUO01BRFEsQ0FBaEI1Qzs7TUFPQTZDLGFBQU9DLFFBQVBELENBQWdCLHNCQUFoQkEsRUFBd0M3QyxLQUF4QzZDOzs7Ozs7Ozs7Ozs7Ozs7OztNQ25DQTs7TUFDQTtNQUVPOzs7TUFBVSxNQUNYK1AsMkJBRFcsU0FDeUI3UyxnQkFEekIsQ0FDbUM7UUFDaEQvQixZQUFZZ0MsS0FBWmhDLEVBQWtDO1VBQzlCLE1BQU0sOEJBQU4sRUFBc0M2VSxnQ0FBdEMsRUFBa0U3UyxLQUFsRTtRQUNIOztNQUgrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ0hwRDtNQU9POzs7TUFBVSxNQUNYNlMsMEJBRFcsU0FDd0JwSyxjQUR4QixDQUM4QjtRQUNyQyxJQUFGMUosRUFBRTtVQUNGLE9BQU8sS0FBS2EsTUFBTCxDQUFZaEIsR0FBWixDQUFnQixJQUFoQixFQUFzQmUsS0FBN0I7UUFDSDs7UUFFVSxJQUFQMkQsT0FBTztVQUNQLE9BQU8sS0FBSzFELE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsU0FBaEIsRUFBMkJlLEtBQWxDO1FBQ0g7O1FBRVksSUFBVGlILFNBQVM7VUFDVCxPQUFPLEtBQUtoSCxNQUFMLENBQVloQixHQUFaLENBQWdCLFdBQWhCLEVBQTZCZSxLQUFwQztRQUNIOztRQUVPLElBQUp1TSxJQUFJO1VBQ0osT0FBTyxLQUFLdE0sTUFBTCxDQUFZaEIsR0FBWixDQUFnQixNQUFoQixFQUF3QmUsS0FBL0I7UUFDSDs7UUFFTyxJQUFKK0ksSUFBSTtVQUNKLE9BQU8sS0FBSzlJLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsTUFBaEIsRUFBd0JlLEtBQS9CO1FBQ0g7O1FBRVcsSUFBUitILFFBQVE7VUFDUixPQUFPLEtBQUs5SCxNQUFMLENBQVloQixHQUFaLENBQWdCLFVBQWhCLEVBQTRCZSxLQUFuQztRQUNIOztRQUVVLElBQVBzSCxPQUFPO1VBQ1AsT0FBTyxLQUFLckgsTUFBTCxDQUFZaEIsR0FBWixDQUFnQixTQUFoQixFQUEyQmUsS0FBbEM7UUFDSDs7UUFFVyxJQUFSZ0osUUFBUTtVQUNSLE9BQU8sS0FBSy9JLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsVUFBaEIsRUFBNEJlLEtBQW5DO1FBQ0g7O1FBRVUsSUFBUGtKLE9BQU87VUFDUCxPQUFPLEtBQUtqSixNQUFMLENBQVloQixHQUFaLENBQWdCLFNBQWhCLEVBQTJCZSxLQUFsQztRQUNIOztRQUVXLElBQVJpSixRQUFRO1VBQ1IsT0FBTyxLQUFLaEosTUFBTCxDQUFZaEIsR0FBWixDQUFnQixVQUFoQixFQUE0QmUsS0FBbkM7UUFDSDs7UUFFTyxJQUFKdEIsSUFBSTtVQUNKLE9BQU8sVUFBUDtRQUNIOztRQUVETCxZQUFZZ0MsS0FBWmhDLEVBQTRCO1VBQ3hCLE1BQU0sOEJBQU4sRUFBc0NnQyxLQUF0QztRQUNIOztNQS9DMEM7Ozs7Ozs7Ozs7Ozs7O01DVC9DOztNQUNBOztNQUVBLE1BQU1BLEtBQUssR0FBZSxFQUExQjtNQUVBQSxLQUFLLENBQUNWLE1BQU5VLEdBQWVWLHNCQUFmVTtNQUNBQSxLQUFLLENBQUNnQyxLQUFOaEMsR0FBYyxLQUFkQTtNQUVBQSxLQUFLLENBQUNKLE1BQU5JLEdBQWUsQ0FDWCxJQURXLEVBQ0wsU0FESyxFQUNNLFdBRE4sRUFDbUIsTUFEbkIsRUFFWCxNQUZXLEVBRUgsVUFGRyxFQUVTLFNBRlQsRUFFb0IsVUFGcEIsRUFFZ0MsU0FGaEMsRUFFMkMsVUFGM0MsQ0FBZkE7TUFLQUEsS0FBSyxDQUFDdUMsS0FBTnZDLEdBQWM7UUFDVndDLE9BQU8sRUFBRTtVQUNMQyxJQUFJLEVBQUUscUNBREQ7VUFFTEMsSUFBSSxFQUFFO1FBRkQ7TUFEQyxDQUFkMUM7TUFPQUEsS0FBSyxDQUFDMkMsT0FBTjNDLEdBQWdCO1FBQ1pqQixFQUFFLEVBQUU7VUFDQWEsTUFBTSxFQUFFLENBQUMsSUFBRCxDQURSO1VBRUFnRCxPQUFPLEVBQUU7UUFGVCxDQURRO1FBS1owTSxPQUFPLEVBQUU7VUFDTDFQLE1BQU0sRUFBRSxDQUFDLGFBQUQ7UUFESDtNQUxHLENBQWhCSTs7TUFVQTZDLGFBQU9DLFFBQVBELENBQWdCLDhCQUFoQkEsRUFBZ0Q3QyxLQUFoRDZDOzs7Ozs7Ozs7Ozs7Ozs7OztNQzlCQTs7TUFDQTtNQUVPOzs7TUFBVSxNQUNYaVEsZUFEVyxTQUNhL1MsZ0JBRGIsQ0FDdUI7UUFDcEMvQixZQUFZZ0MsS0FBWmhDLEVBQWtDO1VBQzlCLE1BQU0saUJBQU4sRUFBeUIrVSxvQkFBekIsRUFBeUMvUyxLQUF6QztRQUNIOztNQUhtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ0p4Qzs7TUFFQTtNQU1POzs7TUFBVSxNQUNYK1MsY0FEVyxTQUNZclIsVUFEWixDQUNnQjtRQUN2QixJQUFGM0MsRUFBRTtVQUNGLE9BQU8sS0FBS2EsTUFBTCxDQUFZaEIsR0FBWixDQUFnQixJQUFoQixFQUFzQmUsS0FBN0I7UUFDSDs7UUFFTyxJQUFKSCxJQUFJO1VBQ0osT0FBTyxLQUFLSSxNQUFMLENBQVloQixHQUFaLENBQWdCLE1BQWhCLEVBQXdCZSxLQUEvQjtRQUNIOztRQUVZLElBQVRpSCxTQUFTO1VBQ1QsT0FBTyxLQUFLaEgsTUFBTCxDQUFZaEIsR0FBWixDQUFnQixXQUFoQixFQUE2QmUsS0FBcEM7UUFDSDs7UUFFUSxJQUFMNkssS0FBSztVQUNMLE9BQU8sS0FBSzVLLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsT0FBaEIsRUFBeUJlLEtBQXpCLElBQWtDLEVBQXpDO1FBQ0g7O1FBRVMsSUFBTjlCLE1BQU07VUFDTixPQUFPLEtBQUsrQixNQUFMLENBQVloQixHQUFaLENBQWdCLFFBQWhCLEVBQTBCZSxLQUExQixJQUFtQyxFQUExQztRQUNIOztRQUVXLElBQVJnRSxRQUFRO1VBQ1IsT0FBTyxLQUFLL0QsTUFBTCxDQUFZaEIsR0FBWixDQUFnQixVQUFoQixFQUE0QmUsS0FBNUIsSUFBcUMsRUFBNUM7UUFDSDs7UUFFVSxJQUFQMlAsT0FBTztVQUNQLE1BQU1BLE9BQU8sR0FBdUIsS0FBSzFOLFVBQUwsQ0FBZ0JoRCxHQUFoQixDQUFvQixTQUFwQixDQUFwQztVQUNBLE9BQU8wUSxPQUFPLElBQUlBLE9BQU8sQ0FBQzNQLEtBQTFCO1FBQ0g7O1FBRUQzQixZQUFZZ0MsS0FBWmhDLEVBQTRCO1VBQ3hCLE1BQU0saUJBQU4sRUFBeUJnQyxLQUF6QjtRQUNIOztRQUVlLE1BQVZ3SCxVQUFVLENBQUN4SCxLQUFELEVBQW1CO1VBQy9CLE1BQU04QixNQUFNLEdBQUc7WUFDWC9DLEVBQUUsRUFBRSxLQUFLQSxFQURFO1lBRVhWLElBQUksRUFBRSxpQkFGSztZQUdYcUosUUFBUSxFQUFFMUgsS0FBSyxDQUFDMEg7VUFITCxDQUFmO1VBTUEsT0FBT3BJLHVCQUFPQyxPQUFQRCxDQUFlLGlCQUFmQSxFQUFrQ3dDLE1BQWxDeEMsQ0FBUDtRQUNIOztNQTFDNEI7Ozs7Ozs7Ozs7Ozs7O01DVGpDOztNQUNBOztNQUNBOztNQUVBLE1BQU1VLEtBQUssR0FBZSxFQUExQjtNQUVBQSxLQUFLLENBQUNWLE1BQU5VLEdBQWVWLHNCQUFmVTtNQUNBQSxLQUFLLENBQUNnQyxLQUFOaEMsR0FBYyxLQUFkQTtNQUVBQSxLQUFLLENBQUNKLE1BQU5JLEdBQWUsQ0FDWCxJQURXLEVBQ0wsV0FESyxFQUNRLE1BRFIsRUFDZ0IsT0FEaEIsRUFDeUIsUUFEekIsRUFDbUMsVUFEbkMsQ0FBZkE7TUFJQUEsS0FBSyxDQUFDNEIsVUFBTjVCLEdBQW1CO1FBQ2ZzUCxPQUFPLEVBQUU7VUFDTHZQLFVBQVUsRUFBRWlULGlDQURQO1VBRUw3USxLQUFLLEVBQUUseUJBRkY7VUFHTDRELE1BQU0sRUFBRSxDQUFDO1lBQUMxRCxLQUFLLEVBQUUsYUFBUjtZQUF1QkMsTUFBTSxFQUFFO1VBQS9CLENBQUQ7UUFISDtNQURNLENBQW5CdEM7TUFRQUEsS0FBSyxDQUFDdUMsS0FBTnZDLEdBQWM7UUFDVndDLE9BQU8sRUFBRTtVQUNMQyxJQUFJLEVBQUUsRUFERDtVQUVMQyxJQUFJLEVBQUU7UUFGRDtNQURDLENBQWQxQztNQU9BQSxLQUFLLENBQUMyQyxPQUFOM0MsR0FBZ0I7UUFDWmpCLEVBQUUsRUFBRTtVQUNBYSxNQUFNLEVBQUUsQ0FBQyxJQUFELENBRFI7VUFFQWdELE9BQU8sRUFBRTtRQUZUO01BRFEsQ0FBaEI1Qzs7TUFPQTZDLGFBQU9DLFFBQVBELENBQWdCLGlCQUFoQkEsRUFBbUM3QyxLQUFuQzZDOzs7Ozs7Ozs7Ozs7Ozs7OztNQ25DQTs7TUFDQTtNQUVPOzs7TUFBVSxNQUNYbVEscUJBRFcsU0FDbUJqVCxnQkFEbkIsQ0FDNkI7UUFDMUMvQixZQUFZZ0MsS0FBWmhDLEVBQWtDO1VBQzlCLE1BQU0seUJBQU4sRUFBaUNpViwwQkFBakMsRUFBdURqVCxLQUF2RDtRQUNIOztNQUh5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ0g5QztNQU9POzs7TUFBVSxNQUNYaVQsb0JBRFcsU0FDa0J4SyxjQURsQixDQUN3QjtRQUMvQixJQUFGMUosRUFBRTtVQUNGLE9BQU8sS0FBS2EsTUFBTCxDQUFZaEIsR0FBWixDQUFnQixJQUFoQixFQUFzQmUsS0FBN0I7UUFDSDs7UUFFVSxJQUFQMkQsT0FBTztVQUNQLE9BQU8sS0FBSzFELE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsU0FBaEIsRUFBMkJlLEtBQWxDO1FBQ0g7O1FBRVksSUFBVGlILFNBQVM7VUFDVCxPQUFPLEtBQUtoSCxNQUFMLENBQVloQixHQUFaLENBQWdCLFdBQWhCLEVBQTZCZSxLQUFwQztRQUNIOztRQUVPLElBQUp1TSxJQUFJO1VBQ0osT0FBTyxLQUFLdE0sTUFBTCxDQUFZaEIsR0FBWixDQUFnQixNQUFoQixFQUF3QmUsS0FBL0I7UUFDSDs7UUFFTyxJQUFKK0ksSUFBSTtVQUNKLE9BQU8sS0FBSzlJLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsTUFBaEIsRUFBd0JlLEtBQS9CO1FBQ0g7O1FBRVcsSUFBUitILFFBQVE7VUFDUixPQUFPLEtBQUs5SCxNQUFMLENBQVloQixHQUFaLENBQWdCLFVBQWhCLEVBQTRCZSxLQUFuQztRQUNIOztRQUVVLElBQVBzSCxPQUFPO1VBQ1AsT0FBTyxLQUFLckgsTUFBTCxDQUFZaEIsR0FBWixDQUFnQixTQUFoQixFQUEyQmUsS0FBbEM7UUFDSDs7UUFFVyxJQUFSZ0osUUFBUTtVQUNSLE9BQU8sS0FBSy9JLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsVUFBaEIsRUFBNEJlLEtBQW5DO1FBQ0g7O1FBRVUsSUFBUGtKLE9BQU87VUFDUCxPQUFPLEtBQUtqSixNQUFMLENBQVloQixHQUFaLENBQWdCLFNBQWhCLEVBQTJCZSxLQUFsQztRQUNIOztRQUVXLElBQVJpSixRQUFRO1VBQ1IsT0FBTyxLQUFLaEosTUFBTCxDQUFZaEIsR0FBWixDQUFnQixVQUFoQixFQUE0QmUsS0FBbkM7UUFDSDs7UUFFTyxJQUFKdEIsSUFBSTtVQUNKLE9BQU8sVUFBUDtRQUNIOztRQUVETCxZQUFZZ0MsS0FBWmhDLEVBQTRCO1VBQ3hCLE1BQU0seUJBQU4sRUFBaUNnQyxLQUFqQztRQUNIOztNQS9Db0M7Ozs7Ozs7Ozs7Ozs7O01DVHpDOztNQUNBOztNQUVBLE1BQU1BLEtBQUssR0FBZSxFQUExQjtNQUVBQSxLQUFLLENBQUNWLE1BQU5VLEdBQWVWLHNCQUFmVTtNQUNBQSxLQUFLLENBQUNnQyxLQUFOaEMsR0FBYyxLQUFkQTtNQUVBQSxLQUFLLENBQUNKLE1BQU5JLEdBQWUsQ0FDWCxJQURXLEVBQ0wsU0FESyxFQUNNLFdBRE4sRUFDbUIsTUFEbkIsRUFFWCxNQUZXLEVBRUgsVUFGRyxFQUVTLFNBRlQsRUFFb0IsVUFGcEIsRUFFZ0MsU0FGaEMsRUFFMkMsVUFGM0MsQ0FBZkE7TUFLQUEsS0FBSyxDQUFDdUMsS0FBTnZDLEdBQWM7UUFDVndDLE9BQU8sRUFBRTtVQUNMQyxJQUFJLEVBQUUsK0JBREQ7VUFFTEMsSUFBSSxFQUFFO1FBRkQ7TUFEQyxDQUFkMUM7TUFPQUEsS0FBSyxDQUFDMkMsT0FBTjNDLEdBQWdCO1FBQ1pqQixFQUFFLEVBQUU7VUFDQWEsTUFBTSxFQUFFLENBQUMsSUFBRCxDQURSO1VBRUFnRCxPQUFPLEVBQUU7UUFGVCxDQURRO1FBS1owTSxPQUFPLEVBQUU7VUFDTDFQLE1BQU0sRUFBRSxDQUFDLGFBQUQ7UUFESDtNQUxHLENBQWhCSTs7TUFVQTZDLGFBQU9DLFFBQVBELENBQWdCLHlCQUFoQkEsRUFBMkM3QyxLQUEzQzZDOzs7Ozs7Ozs7Ozs7Ozs7OztNQzlCQTtNQU1POzs7TUFBVSxNQUNYdUYsUUFEVyxTQUNNMUcsVUFETixDQUNVO1FBQ2pCLElBQUYzQyxFQUFFO1VBQ0YsT0FBTyxLQUFLYSxNQUFMLENBQVloQixHQUFaLENBQWdCLElBQWhCLEVBQXNCZSxLQUE3QjtRQUNIOztRQUVPLElBQUpILElBQUk7VUFDSixPQUFPLEtBQUtJLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsTUFBaEIsRUFBd0JlLEtBQS9CO1FBQ0g7O1FBRVMsSUFBTjlCLE1BQU07VUFDTixPQUFPLEtBQUsrQixNQUFMLENBQVloQixHQUFaLENBQWdCLFFBQWhCLEVBQTBCZSxLQUExQixJQUFtQyxFQUExQztRQUNIOztRQUVXLElBQVJnRSxRQUFRO1VBQ1IsT0FBTyxLQUFLL0QsTUFBTCxDQUFZaEIsR0FBWixDQUFnQixVQUFoQixFQUE0QmUsS0FBNUIsSUFBcUMsRUFBNUM7UUFDSDs7UUFFYyxJQUFYMUIsV0FBVztVQUNYLE1BQU1BLFdBQVcsR0FBaUIsS0FBSzJELFVBQUwsQ0FBZ0JoRCxHQUFoQixDQUFvQixhQUFwQixDQUFsQztVQUNBLE9BQU9YLFdBQVcsSUFBeUJBLFdBQVcsQ0FBQzBCLEtBQXZEO1FBQ0g7O1FBRVMsSUFBTnVULE1BQU07VUFDTixNQUFNQSxNQUFNLEdBQWlCLEtBQUt0UixVQUFMLENBQWdCaEQsR0FBaEIsQ0FBb0IsUUFBcEIsQ0FBN0I7VUFDQSxPQUFPc1UsTUFBTSxJQUFvQkEsTUFBTSxDQUFDdlQsS0FBeEM7UUFDSDs7UUFFYSxJQUFWZ0gsVUFBVTtVQUNWLE9BQXNCLEtBQUsvRSxVQUFMLENBQWdCaEQsR0FBaEIsQ0FBb0IsWUFBcEIsQ0FBdEI7UUFDSDs7UUFFYSxJQUFWNkwsVUFBVTtVQUNWLE1BQU1BLFVBQVUsR0FBdUIsS0FBSzdJLFVBQUwsQ0FBZ0JoRCxHQUFoQixDQUFvQixZQUFwQixDQUF2QztVQUNBLE9BQU82TCxVQUFVLElBQUlBLFVBQVUsQ0FBQzlLLEtBQWhDO1FBQ0g7O1FBRUQzQixZQUFZZ0MsS0FBWmhDLEVBQTRCO1VBQ3hCLE1BQU0sV0FBTixFQUFtQmdDLEtBQW5CO1FBQ0g7O01BdENzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ1AzQjs7TUFDQTtNQUVPOzs7TUFBVSxNQUNYbVQsa0JBRFcsU0FDZ0JwVCxnQkFEaEIsQ0FDMEI7UUFFdkMvQixZQUFZZ0MsS0FBWmhDLEVBQWtDO1VBQzlCLE1BQU0scUJBQU4sRUFBNkJvVix1QkFBN0IsRUFBZ0RwVCxLQUFoRDtRQUNIOztNQUpzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ0ozQztNQUVPOzs7TUFBVSxNQUNYb1QsaUJBRFcsU0FDZTFSLFVBRGYsQ0FDbUI7UUFDMUIsSUFBRjNDLEVBQUU7VUFDRixPQUFPLEtBQUthLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsSUFBaEIsRUFBc0JlLEtBQTdCO1FBQ0g7O1FBRU8sSUFBSkgsSUFBSTtVQUNKLE9BQU8sS0FBS0ksTUFBTCxDQUFZaEIsR0FBWixDQUFnQixNQUFoQixFQUF3QmUsS0FBL0I7UUFDSDs7UUFFUyxJQUFOTCxNQUFNO1VBQ04sT0FBTyxLQUFLTSxNQUFMLENBQVloQixHQUFaLENBQWdCLFFBQWhCLEVBQTBCZSxLQUFqQztRQUNIOztRQUVTLElBQU5vRixNQUFNO1VBQ04sT0FBTyxLQUFLbkYsTUFBTCxDQUFZaEIsR0FBWixDQUFnQixRQUFoQixFQUEwQmUsS0FBakM7UUFDSDs7UUFFWSxJQUFUaUgsU0FBUztVQUNULE9BQU8sS0FBS2hILE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsV0FBaEIsRUFBNkJlLEtBQXBDO1FBQ0g7O1FBRVMsSUFBTjlCLE1BQU07VUFDTixPQUFPLEtBQUsrQixNQUFMLENBQVloQixHQUFaLENBQWdCLFFBQWhCLEVBQTBCZSxLQUExQixJQUFtQyxFQUExQztRQUNIOztRQUVXLElBQVJnRSxRQUFRO1VBQ1IsT0FBTyxLQUFLL0QsTUFBTCxDQUFZaEIsR0FBWixDQUFnQixVQUFoQixFQUE0QmUsS0FBNUIsSUFBcUMsRUFBNUM7UUFDSDs7UUFFRDNCLFlBQVlnQyxLQUFaaEMsRUFBNEI7VUFDeEIsTUFBTSxxQkFBTixFQUE2QmdDLEtBQTdCO1FBQ0g7O01BL0IrQjs7Ozs7Ozs7Ozs7Ozs7TUNIcEM7O01BQ0E7O01BRUEsTUFBTUEsS0FBSyxHQUFlLEVBQTFCO01BRUFBLEtBQUssQ0FBQ1YsTUFBTlUsR0FBZVYsc0JBQWZVO01BQ0FBLEtBQUssQ0FBQ2dDLEtBQU5oQyxHQUFjLEtBQWRBO01BRUFBLEtBQUssQ0FBQ0osTUFBTkksR0FBZSxDQUNYLElBRFcsRUFDTCxNQURLLEVBQ0csYUFESCxFQUNrQixRQURsQixFQUM0QixRQUQ1QixFQUNzQyxXQUR0QyxFQUNtRCxRQURuRCxFQUM2RCxVQUQ3RCxDQUFmQTtNQUlBQSxLQUFLLENBQUN1QyxLQUFOdkMsR0FBYztRQUNWd0MsT0FBTyxFQUFFO1VBQ0xDLElBQUksRUFBRSwyQkFERDtVQUVMQyxJQUFJLEVBQUU7UUFGRDtNQURDLENBQWQxQztNQU9BQSxLQUFLLENBQUMyQyxPQUFOM0MsR0FBZ0I7UUFDWmpCLEVBQUUsRUFBRTtVQUNBYSxNQUFNLEVBQUUsQ0FBQyxJQUFELENBRFI7VUFFQWdELE9BQU8sRUFBRTtRQUZULENBRFE7UUFLWnlRLGFBQWEsRUFBRTtVQUNYelQsTUFBTSxFQUFFLENBQUMsYUFBRDtRQURHO01BTEgsQ0FBaEJJOztNQVVBNkMsYUFBT0MsUUFBUEQsQ0FBZ0IscUJBQWhCQSxFQUF1QzdDLEtBQXZDNkM7Ozs7Ozs7Ozs7Ozs7Ozs7O01DNUJBOztNQUNBO01BT087OztNQUFVLE1BQ1h5USxpQkFEVyxTQUNldlEsVUFEZixDQUNtQjtRQUMxQixJQUFGaEUsRUFBRTtVQUNGLE9BQU8sS0FBS2EsTUFBTCxDQUFZaEIsR0FBWixDQUFnQixJQUFoQixFQUFzQmUsS0FBN0I7UUFDSDs7UUFFWSxJQUFUaUgsU0FBUztVQUNULE9BQU8sS0FBS2hILE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsV0FBaEIsRUFBNkJlLEtBQXBDO1FBQ0g7O1FBRU8sSUFBSkgsSUFBSTtVQUNKLE9BQU8sS0FBS0ksTUFBTCxDQUFZaEIsR0FBWixDQUFnQixNQUFoQixFQUF3QmUsS0FBL0I7UUFDSDs7UUFFUyxJQUFOOUIsTUFBTTtVQUNOLE9BQU8sS0FBSytCLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsUUFBaEIsRUFBMEJlLEtBQTFCLElBQW1DLEVBQTFDO1FBQ0g7O1FBRVcsSUFBUmdFLFFBQVE7VUFDUixPQUFPLEtBQUsvRCxNQUFMLENBQVloQixHQUFaLENBQWdCLFVBQWhCLEVBQTRCZSxLQUE1QixJQUFxQyxFQUE1QztRQUNIOztRQUVVLElBQVAyUCxPQUFPO1VBQ1AsTUFBTUEsT0FBTyxHQUF1QixLQUFLMU4sVUFBTCxDQUFnQmhELEdBQWhCLENBQW9CLFNBQXBCLENBQXBDO1VBQ0EsT0FBTzBRLE9BQU8sSUFBSUEsT0FBTyxDQUFDM1AsS0FBMUI7UUFDSDs7UUFFRDNCLFlBQVlnQyxLQUFaaEMsRUFBNEI7VUFDeEIsTUFBTSxxQkFBTixFQUE2QmdDLEtBQTdCO1FBQ0g7O1FBRWUsTUFBVndILFVBQVUsQ0FBQ3hILEtBQUQsRUFBbUI7VUFDL0IsTUFBTThCLE1BQU0sR0FBRztZQUNYL0MsRUFBRSxFQUFFLEtBQUtBLEVBREU7WUFFWFYsSUFBSSxFQUFFLHFCQUZLO1lBR1hxSixRQUFRLEVBQUUxSCxLQUFLLENBQUMwSDtVQUhMLENBQWY7VUFNQSxPQUFPcEksdUJBQU9DLE9BQVBELENBQWUsaUJBQWZBLEVBQWtDd0MsTUFBbEN4QyxDQUFQO1FBQ0g7O01BdEMrQjs7Ozs7Ozs7Ozs7Ozs7TUNWcEM7O01BQ0E7O01BQ0E7O01BRUEsTUFBTVUsS0FBSyxHQUFlLEVBQTFCO01BRUFBLEtBQUssQ0FBQ1YsTUFBTlUsR0FBZVYsc0JBQWZVO01BQ0FBLEtBQUssQ0FBQ2dDLEtBQU5oQyxHQUFjLEtBQWRBO01BRUFBLEtBQUssQ0FBQ0osTUFBTkksR0FBZSxDQUNYLElBRFcsRUFDTCxXQURLLEVBQ1EsTUFEUixFQUNnQixRQURoQixFQUMwQixVQUQxQixDQUFmQTtNQUlBQSxLQUFLLENBQUM0QixVQUFONUIsR0FBbUI7UUFDZnNQLE9BQU8sRUFBRTtVQUNMdlAsVUFBVSxFQUFFd1QscUNBRFA7VUFFTHBSLEtBQUssRUFBRSw2QkFGRjtVQUdMNEQsTUFBTSxFQUFFLENBQUM7WUFBQzFELEtBQUssRUFBRSxJQUFSO1lBQWNDLE1BQU0sRUFBRTtVQUF0QixDQUFEO1FBSEg7TUFETSxDQUFuQnRDO01BUUFBLEtBQUssQ0FBQ3VDLEtBQU52QyxHQUFjO1FBQ1Z3QyxPQUFPLEVBQUU7VUFDTEMsSUFBSSxFQUFFLEVBREQ7VUFFTEMsSUFBSSxFQUFFO1FBRkQ7TUFEQyxDQUFkMUM7TUFPQUEsS0FBSyxDQUFDMkMsT0FBTjNDLEdBQWdCO1FBQ1pqQixFQUFFLEVBQUU7VUFDQWEsTUFBTSxFQUFFLENBQUMsSUFBRCxDQURSO1VBRUFnRCxPQUFPLEVBQUU7UUFGVDtNQURRLENBQWhCNUM7O01BT0E2QyxhQUFPQyxRQUFQRCxDQUFnQixxQkFBaEJBLEVBQXVDN0MsS0FBdkM2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNuQ0E7O01BQ0E7TUFFTzs7O01BQVUsTUFDWDBRLHlCQURXLFNBQ3VCeFQsZ0JBRHZCLENBQ2lDO1FBQzlDL0IsWUFBWWdDLEtBQVpoQyxFQUFrQztVQUM5QixNQUFNLDZCQUFOLEVBQXFDd1YsOEJBQXJDLEVBQStEeFQsS0FBL0Q7UUFDSDs7TUFINkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNIbEQ7TUFPTzs7O01BQVUsTUFDWHdULHdCQURXLFNBQ3NCL0ssY0FEdEIsQ0FDNEI7UUFDbkMsSUFBRjFKLEVBQUU7VUFDRixPQUFPLEtBQUthLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsSUFBaEIsRUFBc0JlLEtBQTdCO1FBQ0g7O1FBRVUsSUFBUDJELE9BQU87VUFDUCxPQUFPLEtBQUsxRCxNQUFMLENBQVloQixHQUFaLENBQWdCLFNBQWhCLEVBQTJCZSxLQUFsQztRQUNIOztRQUVZLElBQVRpSCxTQUFTO1VBQ1QsT0FBTyxLQUFLaEgsTUFBTCxDQUFZaEIsR0FBWixDQUFnQixXQUFoQixFQUE2QmUsS0FBcEM7UUFDSDs7UUFFTyxJQUFKdU0sSUFBSTtVQUNKLE9BQU8sS0FBS3RNLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsTUFBaEIsRUFBd0JlLEtBQS9CO1FBQ0g7O1FBRU8sSUFBSitJLElBQUk7VUFDSixPQUFPLEtBQUs5SSxNQUFMLENBQVloQixHQUFaLENBQWdCLE1BQWhCLEVBQXdCZSxLQUEvQjtRQUNIOztRQUVXLElBQVIrSCxRQUFRO1VBQ1IsT0FBTyxLQUFLOUgsTUFBTCxDQUFZaEIsR0FBWixDQUFnQixVQUFoQixFQUE0QmUsS0FBbkM7UUFDSDs7UUFFVSxJQUFQc0gsT0FBTztVQUNQLE9BQU8sS0FBS3JILE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsU0FBaEIsRUFBMkJlLEtBQWxDO1FBQ0g7O1FBRVcsSUFBUmdKLFFBQVE7VUFDUixPQUFPLEtBQUsvSSxNQUFMLENBQVloQixHQUFaLENBQWdCLFVBQWhCLEVBQTRCZSxLQUFuQztRQUNIOztRQUVVLElBQVBrSixPQUFPO1VBQ1AsT0FBTyxLQUFLakosTUFBTCxDQUFZaEIsR0FBWixDQUFnQixTQUFoQixFQUEyQmUsS0FBbEM7UUFDSDs7UUFFVyxJQUFSaUosUUFBUTtVQUNSLE9BQU8sS0FBS2hKLE1BQUwsQ0FBWWhCLEdBQVosQ0FBZ0IsVUFBaEIsRUFBNEJlLEtBQW5DO1FBQ0g7O1FBRVMsSUFBTjlCLE1BQU07VUFDTixPQUFPLEtBQUsrQixNQUFMLENBQVloQixHQUFaLENBQWdCLFFBQWhCLEVBQTBCZSxLQUExQixJQUFtQyxFQUExQztRQUNIOztRQUVXLElBQVJnRSxRQUFRO1VBQ1IsT0FBTyxLQUFLL0QsTUFBTCxDQUFZaEIsR0FBWixDQUFnQixVQUFoQixFQUE0QmUsS0FBNUIsSUFBcUMsRUFBNUM7UUFDSDs7UUFFTyxJQUFKdEIsSUFBSTtVQUNKLE9BQU8sV0FBUDtRQUNIOztRQUVETCxZQUFZZ0MsS0FBWmhDLEVBQTRCO1VBQ3hCLE1BQU0sNkJBQU4sRUFBcUNnQyxLQUFyQztRQUNIOztNQXZEd0M7Ozs7Ozs7Ozs7Ozs7O01DVDdDOztNQUNBOztNQUVBLE1BQU1BLEtBQUssR0FBZSxFQUExQjtNQUVBQSxLQUFLLENBQUNWLE1BQU5VLEdBQWVWLHNCQUFmVTtNQUNBQSxLQUFLLENBQUNnQyxLQUFOaEMsR0FBYyxLQUFkQTtNQUVBQSxLQUFLLENBQUNKLE1BQU5JLEdBQWUsQ0FDWCxJQURXLEVBQ0wsU0FESyxFQUNNLFdBRE4sRUFDbUIsTUFEbkIsRUFFWCxNQUZXLEVBRUgsVUFGRyxFQUVTLFNBRlQsRUFFb0IsVUFGcEIsRUFFZ0MsU0FGaEMsRUFFMkMsVUFGM0MsRUFHWCxRQUhXLEVBR0QsVUFIQyxDQUFmQTtNQU1BQSxLQUFLLENBQUN1QyxLQUFOdkMsR0FBYztRQUNWd0MsT0FBTyxFQUFFO1VBQ0xDLElBQUksRUFBRSxtQ0FERDtVQUVMQyxJQUFJLEVBQUU7UUFGRDtNQURDLENBQWQxQztNQU9BQSxLQUFLLENBQUMyQyxPQUFOM0MsR0FBZ0I7UUFDWmpCLEVBQUUsRUFBRTtVQUNBYSxNQUFNLEVBQUUsQ0FBQyxJQUFELENBRFI7VUFFQWdELE9BQU8sRUFBRTtRQUZULENBRFE7UUFLWjBNLE9BQU8sRUFBRTtVQUNMMVAsTUFBTSxFQUFFLENBQUMsSUFBRDtRQURIO01BTEcsQ0FBaEJJOztNQVVBNkMsYUFBT0MsUUFBUEQsQ0FBZ0IsNkJBQWhCQSxFQUErQzdDLEtBQS9DNkM7Ozs7Ozs7Ozs7OztNQy9CQTs7TUFDQTs7TUFDQTs7TUFDQTs7TUFDQTs7TUFDQTs7TUFFQSxNQUFNN0MsS0FBSyxHQUFlLEVBQTFCO01BRUFBLEtBQUssQ0FBQ1YsTUFBTlUsR0FBZVYsc0JBQWZVO01BQ0FBLEtBQUssQ0FBQ2dDLEtBQU5oQyxHQUFjLEtBQWRBO01BRUFBLEtBQUssQ0FBQ0osTUFBTkksR0FBZSxDQUNYLElBRFcsRUFDTCxhQURLLEVBQ1UsWUFEVixFQUN3QixNQUR4QixFQUNnQyxRQURoQyxFQUMwQyxVQUQxQyxDQUFmQTtNQUlBQSxLQUFLLENBQUM0QixVQUFONUIsR0FBbUI7UUFDZi9CLFdBQVcsRUFBRTtVQUNUeUQsSUFBSSxFQUFFaVIsMEJBREc7VUFFVHhRLEtBQUssRUFBRSxzQkFGRTtVQUdUQyxVQUFVLEVBQUUsQ0FBQztZQUFDQyxLQUFLLEVBQUUsSUFBUjtZQUFjQyxNQUFNLEVBQUU7VUFBdEIsQ0FBRDtRQUhILENBREU7UUFNZjRRLE1BQU0sRUFBRTtVQUNKeFIsSUFBSSxFQUFFcVIsb0JBREY7VUFFSjVRLEtBQUssRUFBRSxpQkFGSDtVQUdKQyxVQUFVLEVBQUUsQ0FBQztZQUFDQyxLQUFLLEVBQUUsSUFBUjtZQUFjQyxNQUFNLEVBQUU7VUFBdEIsQ0FBRDtRQUhSLENBTk87UUFXZnFFLFVBQVUsRUFBRTtVQUNSMUUsS0FBSyxFQUFFcVIsd0JBREM7VUFFUm5SLEtBQUssRUFBRSxxQkFGQztVQUdSQyxVQUFVLEVBQUU7WUFBQ0MsS0FBSyxFQUFFLElBQVI7WUFBY0MsTUFBTSxFQUFFO1VBQXRCO1FBSEosQ0FYRztRQWdCZm1JLFVBQVUsRUFBRTtVQUNSMUssVUFBVSxFQUFFb1QsOEJBREo7VUFFUmhSLEtBQUssRUFBRSxxQkFGQztVQUdSNEQsTUFBTSxFQUFFLENBQUM7WUFBQzFELEtBQUssRUFBRSxhQUFSO1lBQXVCQyxNQUFNLEVBQUU7VUFBL0IsQ0FBRDtRQUhBO01BaEJHLENBQW5CdEM7TUF1QkFBLEtBQUssQ0FBQ3VDLEtBQU52QyxHQUFjO1FBQ1Z3QyxPQUFPLEVBQUU7VUFDTEMsSUFBSSxFQUFFLEVBREQ7VUFFTEMsSUFBSSxFQUFFO1FBRkQ7TUFEQyxDQUFkMUM7TUFPQUEsS0FBSyxDQUFDMkMsT0FBTjNDLEdBQWdCO1FBQ1pqQixFQUFFLEVBQUU7VUFDQWEsTUFBTSxFQUFFLENBQUMsSUFBRCxDQURSO1VBRUFnRCxPQUFPLEVBQUU7UUFGVDtNQURRLENBQWhCNUM7O01BT0E2QyxhQUFPQyxRQUFQRCxDQUFnQixXQUFoQkEsRUFBNkI3QyxLQUE3QjZDOzs7Ozs7Ozs7Ozs7Ozs7OztNQ3JEQTs7TUFDQTtNQUVPOzs7TUFBVSxNQUNYNFEsdUJBRFcsU0FDcUIxVCxnQkFEckIsQ0FDK0I7UUFDNUMvQixZQUFZZ0MsS0FBWmhDLEVBQWtDO1VBQzlCLE1BQU0sMEJBQU4sRUFBa0MwViwyQkFBbEMsRUFBeUQxVCxLQUF6RDtRQUNIOztNQUgyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ0poRDtNQUVPOzs7TUFBVSxNQUNYMFQscUJBRFcsU0FDbUJoUyxVQURuQixDQUN1QjtRQUM5QixJQUFGM0MsRUFBRTtVQUNGLE9BQU8sS0FBS2EsTUFBTCxDQUFZaEIsR0FBWixDQUFnQixJQUFoQixFQUFzQmUsS0FBN0I7UUFDSDs7UUFFRDNCLFlBQVlnQyxLQUFaaEMsRUFBNEI7VUFDeEIsTUFBTSwwQkFBTixFQUFrQ2dDLEtBQWxDO1FBQ0g7O01BUG1DOzs7Ozs7Ozs7Ozs7OztNQ0h4Qzs7TUFDQTs7TUFFQSxNQUFNQSxLQUFLLEdBQWUsRUFBMUI7TUFFQUEsS0FBSyxDQUFDVixNQUFOVSxHQUFlVixzQkFBZlU7TUFDQUEsS0FBSyxDQUFDZ0MsS0FBTmhDLEdBQWMsS0FBZEE7TUFFQUEsS0FBSyxDQUFDSixNQUFOSSxHQUFlLENBQ1gsSUFEVyxDQUFmQTtNQUdBQSxLQUFLLENBQUN1QyxLQUFOdkMsR0FBYztRQUNWd0MsT0FBTyxFQUFFO1VBQ0xDLElBQUksRUFBRSwrQkFERDtVQUVMQyxJQUFJLEVBQUU7UUFGRDtNQURDLENBQWQxQztNQU1BQSxLQUFLLENBQUMyQyxPQUFOM0MsR0FBZ0I7UUFDWmpCLEVBQUUsRUFBRTtVQUNBYSxNQUFNLEVBQUUsQ0FBQyxJQUFELENBRFI7VUFFQWdELE9BQU8sRUFBRTtRQUZUO01BRFEsQ0FBaEI1Qzs7TUFPQTZDLGFBQU9DLFFBQVBELENBQWdCLDBCQUFoQkEsRUFBNEM3QyxLQUE1QzZDIiwibmFtZXMiOlsiQXBwbGljYXRpb25CdWlsZGVyIiwiRXZlbnRzIiwiYnVpbGRzIiwibWVzc2FnZXMiLCJlcnJvcnMiLCJwcm9jZXNzaW5nIiwicHJvY2Vzc2VkIiwiY29uc3RydWN0b3IiLCJhcHBsaWNhdGlvbiIsIkFwcGxpY2F0aW9uQnVpbGRzIiwib25NZXNzYWdlIiwibWVzc2FnZSIsInR5cGUiLCJ0cmlnZ2VyIiwicHVzaCIsImVycm9yIiwicHJlcGFyZSIsImJhY2tlbmQiLCJiYWNrZW5kcyIsImdldCIsInNvY2tldCIsIm9uIiwiaWQiLCJleGMiLCJjb25zb2xlIiwic3RhY2siLCJidWlsZCIsImRpc3RyaWJ1dGlvbiIsIkVycm9yIiwibW9kdWxlIiwiZXhlY3V0ZSIsInBhdGgiLCJuYW1lIiwiY2xlYW4iLCJ2YWx1ZSIsImZpZWxkcyIsImFzc2lnbmVkIiwiQXBwbGljYXRpb25zIiwiQ29sbGVjdGlvbiIsInNwZWNzIiwiQXBwbGljYXRpb24iLCJBcHBsaWNhdGlvbkRlY2xhcmF0aW9ucyIsIlJlYWN0aXZlTW9kZWwiLCJ0b3RhbCIsIml0ZW1zUHJvY2Vzc2VkIiwib25Qcm9jZXNzIiwiU2V0Iiwic3VjY2VzcyIsImNsZWFyIiwidHJpZ2dlckV2ZW50Iiwib25EZWNsYXJhdGlvblNhdmUiLCJpdGVtIiwidmFsaWQiLCJhZGQiLCJzaXplIiwiaW5pdGlhbGlzZSIsImNhdGNoIiwiYmluZCIsInVwZGF0ZSIsIndhcm4iLCJhY3Rpb24iLCJhcHBsaWNhdGlvbklkIiwicmVzcG9uc2UiLCJBcHBsaWNhdGlvbkRlcGxveW1lbnRzIiwiQXBwbGljYXRpb25EZXBsb3ltZW50IiwiSXRlbSIsImRpc3RyaWJ1dGlvbnMiLCJwcm9wZXJ0aWVzIiwiYWRkRGlzdHJpYnV0aW9uIiwicGFyYW1zIiwiZSIsImNhY2hlIiwiSXRlbXMiLCJBcHBsaWNhdGlvbkRpc3RyaWJ1dGlvbiIsInRhYmxlIiwiaWRlbnRpZmllciIsImZpZWxkIiwic291cmNlIiwiYmF0Y2giLCJhY3Rpb25zIiwibGlzdCIsImRhdGEiLCJpbmRpY2VzIiwicHJpbWFyeSIsInRhYmxlcyIsInJlZ2lzdGVyIiwiRmlsZSIsInNjb3BlIiwic3BlY2lmaWVyIiwidnNwZWNpZmllciIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkZXZlbG9wZXIiLCJ2ZXJzaW9uIiwiY29ubmVjdCIsImhvc3RzIiwicG9ydCIsIm1vZHVsZXNQYXRoIiwid2FybmluZ3MiLCJhbSIsInRlbXBsYXRlIiwiZGVwbG95bWVudCIsInN0YXRpYyIsInN0YXRpY3MiLCJkZWNsYXJhdGlvbnMiLCJwcm9jZXNzIiwidXJsIiwidW5kZWZpbmVkIiwiZXZlbnQiLCJub2RlIiwiQXBwbGljYXRpb25Qcm9jZXNzIiwiY2hlY2tTdGF0aWMiLCJjcmVhdGVCYWNrZW5kIiwiZWRpdCIsInJvdXRlcyIsIml0ZW1zIiwiZm9yRWFjaCIsImJ1bmRsZXMiLCJidW5kbGUiLCJyb3V0ZSIsIkFwcGxpY2F0aW9uTW9kdWxlQnVuZGxlIiwibW9kdWxlSWQiLCJoYXNUeHQiLCJoYXMiLCJBcHBsaWNhdGlvbk1vZHVsZXMiLCJBcHBsaWNhdGlvbk1vZHVsZSIsImNvdW50ZXJzIiwiZWxlbWVudHMiLCJ0cmVlIiwibGFuZGVkIiwib3V0cHV0IiwiZ2V0SXRlbXMiLCJjb250YWluZXIiLCJ0ZXh0IiwiZmlsdGVyIiwiaXNBcHAiLCJpbmNsdWRlcyIsImlzTGlicmFyeSIsInRleHRTZWFyY2giLCJ3aWRnZXQiLCJnZXRCdW5kbGUiLCJ2YWx1ZXMiLCJtYXAiLCJfX0NMQVNTX18iLCJ0b0xvd2VyQ2FzZSIsInByb2Nlc3NvcnNOYW1lcyIsInByb2Nlc3NvcnMiLCJwcm9jZXNzb3IiLCJoYXZlUHJvY2Vzc29yIiwiZmluZCIsImhhc1Byb2Nlc3NvciIsInNhdmVGaWVsZCIsImRpcm5hbWUiLCJobXIiLCJ0cyIsInRyYW5zcGlsZSIsImNsb25lIiwiZGVsZXRlIiwidGFyZ2V0IiwiY3JlYXRlRmlsZSIsInNwbGl0IiwiZmlsZW5hbWUiLCJhZGRCdW5kbGUiLCJNb2R1bGUiLCJCdW5kbGUiLCJjb3VudCIsImFwcGxpY2F0aW9ucyIsImJhdGNoZXMiLCJydW4iLCJPYmplY3QiLCJhc3NpZ24iLCJUZW1wbGF0ZSIsImltbXV0YWJsZSIsIkFwcGxpY2F0aW9uU3RhdGljcyIsInVuaXF1ZSIsIkFwcGxpY2F0aW9uU3RhdGljIiwiU291cmNlIiwiZmlsZSIsImJhc2VuYW1lIiwicmVsYXRpdmUiLCJleHRuYW1lIiwicGF0aG5hbWUiLCJDb25zdW1lcnMiLCJDb25zdW1lciIsImJ1bmRsZUlkIiwidHUiLCJCdW5kbGVEZXBlbmRlbmNpZXMiLCJCdW5kbGVEZXBlbmRlbmN5Iiwic3VicGF0aCIsInJlc291cmNlIiwicGxhdGZvcm1zIiwibGF5b3V0IiwidXBkYXRlZCIsImRlc3Ryb3llZCIsImVsZW1lbnQiLCJNYXAiLCJzZXQiLCJwYWNrYWdlcnMiLCJjb25zdW1lcnMiLCJjb21waWxlclByb2Nlc3NvckFjdGl2YXRlIiwicHJvY2Vzc29yTmFtZSIsIlBhY2thZ2VycyIsIlBhY2thZ2VyIiwiUGFja2FnZXJDb21waWxlcnMiLCJQYWNrYWdlckNvbXBpbGVyIiwiZGlhZ25vc3RpY3MiLCJnZW5lcmFsIiwiZmlsZXMiLCJvdmVyd3JpdGVzIiwiZGVwZW5kZW5jaWVzIiwiZGlzdHJpYnV0aW9uSWQiLCJjb21waWxlcnMiLCJQcm9jZXNzb3IiLCJzZWxlY3RvciIsImFtSWQiLCJzbGljZSIsImxlbmd0aCIsImpvaW4iLCJEYXNoYm9hcmQiLCJyZWFkeSIsIndkIiwidmFsaWRQb3J0IiwiZ2V0V0QiLCJjbGVhbkNhY2hlIiwidmFsaWRhdGUiLCJoYXNoIiwiY2hlY2tQb3J0IiwiYXZhaWxhYmxlUG9ydCIsImludGVudHMiLCJjb250IiwiYXZhaWxhYmxlIiwiRGVjbGFyYXRpb25zIiwiRGVjbGFyYXRpb24iLCJjb2RlIiwiQXBwbGljYXRpb25EaXN0cmlidXRpb25zIiwibG9jYWwiLCJzc3IiLCJwb3J0cyIsImFtZCIsInBsYXRmb3JtIiwiY29tcHJlc3MiLCJlbnZpcm9ubWVudCIsImRlZmF1bHQiLCJucG0iLCJtaW5pZnkiLCJsYXVuY2hlciIsImh0dHAiLCJpc05hTiIsInBhcnNlSW50IiwiaW5zcGVjdCIsImh0bWwiLCJjc3MiLCJqcyIsIm1vZGUiLCJzZXRWYWx1ZXMiLCJuZXdWYWx1ZXMiLCJEaXN0cmlidXRpb25MYXVuY2hlciIsInN0YXR1cyIsInBpZCIsInN0YXJ0Iiwic3RvcCIsInJlc3RhcnQiLCJkZWxldGVGb2xkZXIiLCJmb2xkZXIiLCJHbG9iYWxCdW5kbGVzIiwiR2xvYmFsQnVuZGxlIiwibXVsdGlsYW5ndWFnZSIsIk1vZHVsZXMiLCJNb2R1bGVEZWNsYXJhdGlvbnMiLCJmZXRjaGluZyIsInBhcmVudCIsInRleHRzIiwiTW9kdWxlVGV4dHMiLCJpbnN0YWxsRGVwZW5kZW5jaWVzIiwic2F2ZSIsIk1vZHVsZVN0YXRpY3MiLCJNb2R1bGVTdGF0aWMiLCJvdmVyd3JpdGUiLCJ1cGxvYWQiLCJtb2R1bGVOYW1lIiwib3JpZ2luIiwibW9kdWxlcyIsInByb3BlcnR5IiwibGFuZ3VhZ2UiLCJiIiwic291cmNlcyIsIkpTT04iLCJwYXJzZSIsIlByb2Nlc3NvckRlcGVuZGVuY2llcyIsIlByb2Nlc3NvckRlcGVuZGVuY3kiLCJleHRlcm5hbHNXaXRoRXJyb3JzIiwiaSIsImtpbmQiLCJpcyIsImRlY2xhcmF0aW9uIiwiYWxlcnRzIiwiUHJvY2Vzc29yT3ZlcndyaXRlcyIsIlByb2Nlc3Nvck92ZXJ3cml0ZSIsIlByb2Nlc3NvclNvdXJjZXMiLCJQcm9jZXNzb3JTb3VyY2UiLCJfcmVhZHkiLCJfZmV0Y2hpbmciLCJfZmV0Y2hlZCIsImZldGNoZWQiLCJfcHJvY2Vzc2luZyIsIl9wcm9jZXNzZWQiLCJfbG9hZGVkIiwibG9hZGVkIiwiX3NldCIsInByb3BzIiwicHJvcCIsImtleSIsImhhc093blByb3BlcnR5IiwiZ2V0UHJvcGVydGllcyIsImtleXMiLCJyZXBsYWNlIiwicmVwb3J0cyIsInJlYWx0aW1lIiwicmVjb3JkIiwiaW5zZXJ0IiwiUnVuVGltZUVycm9yIiwidHJhY2UiLCJzaGlmdCIsIm1ldGhvZCIsImRldGFpbCIsImxpbmUiLCJjb2x1bW4iLCJSdW5UaW1lTWFuYWdlciIsImFsbCIsIlNlcnZlckNvbmZpZyIsIl9mZXRjaCIsImZldGNoIiwiU2VydmVyIiwiY29uZmlnIiwiQmV5b25kU2VydmVyIiwiaXNGYXZvcml0ZSIsInJlbmFtZSIsImZvcm1hdCIsIlRlbXBsYXRlQXBwbGljYXRpb24iLCJUZW1wbGF0ZUFwcGxpY2F0aW9uc1NvdXJjZXMiLCJUZW1wbGF0ZUFwcGxpY2F0aW9uc1NvdXJjZSIsIlRlbXBsYXRlR2xvYmFscyIsIlRlbXBsYXRlR2xvYmFsIiwiVGVtcGxhdGVHbG9iYWxTb3VyY2VzIiwiVGVtcGxhdGVHbG9iYWxTb3VyY2UiLCJnbG9iYWwiLCJUZW1wbGF0ZU92ZXJ3cml0ZXMiLCJUZW1wbGF0ZU92ZXJ3cml0ZSIsImJ5QXBwbGljYXRpb24iLCJUZW1wbGF0ZVByb2Nlc3NvciIsIlRlbXBsYXRlUHJvY2Vzc29yc1NvdXJjZXMiLCJUZW1wbGF0ZVByb2Nlc3NvcnNTb3VyY2UiLCJUcmFuc3ZlcnNhbERlcGVuZGVuY2llcyIsIlRyYW5zdmVyc2FsRGVwZW5kZW5jeSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9hcHBsaWNhdGlvbnMvYnVpbGRlci9idWlsZGVyLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9hcHBsaWNhdGlvbnMvYnVpbGRlci9idWlsZHMudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2FwcGxpY2F0aW9ucy9jb2xsZWN0aW9uLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9hcHBsaWNhdGlvbnMvZGVjbGFyYXRpb25zLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9hcHBsaWNhdGlvbnMvZGVwbG95bWVudHMvY29sbGVjdGlvbi50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvYXBwbGljYXRpb25zL2RlcGxveW1lbnRzL2l0ZW0udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2FwcGxpY2F0aW9ucy9kZXBsb3ltZW50cy9yZWdpc3Rlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvYXBwbGljYXRpb25zL2l0ZW0udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2FwcGxpY2F0aW9ucy9tb2R1bGVzL2J1bmRsZS50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvYXBwbGljYXRpb25zL21vZHVsZXMvY29sbGVjdGlvbi50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvYXBwbGljYXRpb25zL21vZHVsZXMvaXRlbS50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvYXBwbGljYXRpb25zL21vZHVsZXMvcmVnaXN0ZXIudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2FwcGxpY2F0aW9ucy9wcm9jZXNzLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9hcHBsaWNhdGlvbnMvcmVnaXN0ZXIudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2FwcGxpY2F0aW9ucy9zdGF0aWMvY29sbGVjdGlvbi50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvYXBwbGljYXRpb25zL3N0YXRpYy9pdGVtLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9hcHBsaWNhdGlvbnMvc3RhdGljL3JlZ2lzdGVyLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9idW5kbGVzL2NvbnN1bWVycy9jb2xsZWN0aW9uLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9idW5kbGVzL2NvbnN1bWVycy9pdGVtLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9idW5kbGVzL2NvbnN1bWVycy9yZWdpc3Rlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvYnVuZGxlcy9kZXBlbmRlbmNpZXMvY29sbGVjdGlvbi50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvYnVuZGxlcy9kZXBlbmRlbmNpZXMvaXRlbS50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvYnVuZGxlcy9kZXBlbmRlbmNpZXMvcmVnaXN0ZXIudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2J1bmRsZXMvaXRlbS50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvYnVuZGxlcy9wYWNrYWdlcnMvY29sbGVjdGlvbi50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvYnVuZGxlcy9wYWNrYWdlcnMvY29tcGlsZXJzL2NvbGxlY3Rpb24udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2J1bmRsZXMvcGFja2FnZXJzL2NvbXBpbGVycy9pdGVtLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9idW5kbGVzL3BhY2thZ2Vycy9jb21waWxlcnMvcmVnaXN0ZXIudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2J1bmRsZXMvcGFja2FnZXJzL2l0ZW0udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2J1bmRsZXMvcGFja2FnZXJzL3JlZ2lzdGVyLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9idW5kbGVzL3JlZ2lzdGVyLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9kYXNoYm9hcmQvbW9kZWwudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2RlY2xhcmF0aW9ucy9jb2xsZWN0aW9uLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9kZWNsYXJhdGlvbnMvaXRlbS50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvZGVjbGFyYXRpb25zL3JlZ2lzdGVyLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9kaXN0cmlidXRpb25zL2NvbGxlY3Rpb24udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2Rpc3RyaWJ1dGlvbnMvaW50ZXJmYWNlcy9wb3J0cy1yZXNwb25zZS50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvZGlzdHJpYnV0aW9ucy9pbnRlcmZhY2VzL3BvcnRzLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9kaXN0cmlidXRpb25zL2l0ZW0udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2Rpc3RyaWJ1dGlvbnMvbGF1bmNoZXJzL2l0ZW0udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2Rpc3RyaWJ1dGlvbnMvbGF1bmNoZXJzL3JlZ2lzdGVyLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9kaXN0cmlidXRpb25zL3JlZ2lzdGVyLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9maWxlL2ZpbGUudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2dsb2JhbHMtYnVuZGxlcy9jb2xsZWN0aW9uLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9nbG9iYWxzLWJ1bmRsZXMvaXRlbS50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvZ2xvYmFscy1idW5kbGVzL3JlZ2lzdGVyLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9tb2R1bGVzL2NvbGxlY3Rpb24udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L21vZHVsZXMvZGVjbGFyYXRpb25zLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9tb2R1bGVzL2l0ZW0udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L21vZHVsZXMvcmVnaXN0ZXIudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L21vZHVsZXMvc3RhdGljL2NvbGxlY3Rpb24udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L21vZHVsZXMvc3RhdGljL2l0ZW0udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L21vZHVsZXMvc3RhdGljL3JlZ2lzdGVyLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9tb2R1bGVzL3RleHRzLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9wcm9jZXNzb3JzL2RlcGVuZGVuY2llcy9jb2xsZWN0aW9uLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9wcm9jZXNzb3JzL2RlcGVuZGVuY2llcy9pdGVtLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9wcm9jZXNzb3JzL2RlcGVuZGVuY2llcy9yZWdpc3Rlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvcHJvY2Vzc29ycy9pdGVtLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9wcm9jZXNzb3JzL292ZXJ3cml0ZXMvY29sbGVjdGlvbi50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvcHJvY2Vzc29ycy9vdmVyd3JpdGVzL2l0ZW0udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L3Byb2Nlc3NvcnMvb3ZlcndyaXRlcy9yZWdpc3Rlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvcHJvY2Vzc29ycy9yZWdpc3Rlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvcHJvY2Vzc29ycy9zb3VyY2VzL2NvbGxlY3Rpb24udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L3Byb2Nlc3NvcnMvc291cmNlcy9pdGVtLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9wcm9jZXNzb3JzL3NvdXJjZXMvcmVnaXN0ZXIudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L3JlYWN0aXZlLW1vZGVsLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9yZWFsdGltZS9yZWFsdGltZS50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvcnVuLXRpbWUvaXRlbS50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvcnVuLXRpbWUvbWFuYWdlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvc2VydmVyL2NvbmZpZy50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvc2VydmVyL3NlcnZlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvc291cmNlcy9zb3VyY2UudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L3RlbXBsYXRlcy9hcHBsaWNhdGlvbnMvaXRlbS50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvdGVtcGxhdGVzL2FwcGxpY2F0aW9ucy9yZWdpc3Rlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvdGVtcGxhdGVzL2FwcGxpY2F0aW9ucy9zb3VyY2VzL2NvbGxlY3Rpb24udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L3RlbXBsYXRlcy9hcHBsaWNhdGlvbnMvc291cmNlcy9pdGVtLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC90ZW1wbGF0ZXMvYXBwbGljYXRpb25zL3NvdXJjZXMvcmVnaXN0ZXIudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L3RlbXBsYXRlcy9nbG9iYWwvY29sbGVjdGlvbi50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvdGVtcGxhdGVzL2dsb2JhbC9pdGVtLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC90ZW1wbGF0ZXMvZ2xvYmFsL3JlZ2lzdGVyLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC90ZW1wbGF0ZXMvZ2xvYmFsL3NvdXJjZXMvY29sbGVjdGlvbi50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvdGVtcGxhdGVzL2dsb2JhbC9zb3VyY2VzL2l0ZW0udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L3RlbXBsYXRlcy9nbG9iYWwvc291cmNlcy9yZWdpc3Rlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvdGVtcGxhdGVzL2l0ZW0udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L3RlbXBsYXRlcy9vdmVyd3JpdGVzL2NvbGxlY3Rpb24udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L3RlbXBsYXRlcy9vdmVyd3JpdGVzL2l0ZW0udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L3RlbXBsYXRlcy9vdmVyd3JpdGVzL3JlZ2lzdGVyLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC90ZW1wbGF0ZXMvcHJvY2Vzc29ycy9pdGVtLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC90ZW1wbGF0ZXMvcHJvY2Vzc29ycy9yZWdpc3Rlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvdGVtcGxhdGVzL3Byb2Nlc3NvcnMvc291cmNlcy9jb2xsZWN0aW9uLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC90ZW1wbGF0ZXMvcHJvY2Vzc29ycy9zb3VyY2VzL2l0ZW0udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L3RlbXBsYXRlcy9wcm9jZXNzb3JzL3NvdXJjZXMvcmVnaXN0ZXIudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L3RlbXBsYXRlcy9yZWdpc3Rlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvdHJhbnN2ZXJzYWwvZGVwZW5kZW5jaWVzL2NvbGxlY3Rpb24udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L3RyYW5zdmVyc2FsL2RlcGVuZGVuY2llcy9pdGVtLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC90cmFuc3ZlcnNhbC9kZXBlbmRlbmNpZXMvcmVnaXN0ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19