define(["exports", "module", "@beyond-js/kernel@0.1.0/bundle", "@beyond-js/kernel@0.1.0/core", "@beyond-js/backend@0.0.10/client", "@beyond-js/plm@0.0.1/core"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3) {
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
    hash: 1929224326,
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
            console.warn(3);
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
    hash: 2623382340,
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
    hash: 833159132,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Application = void 0;

      var _beyond_context = require("beyond_context");

      var _file = require("../file/file");

      var _builder = require("./builder/builder");

      var _declarations = require("./declarations");
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

        #builder;

        get builder() {
          return this.#builder;
        }

        #declarations;

        get declarations() {
          return this.#declarations;
        }

        get url() {
          return this.port ? `http://localhost:${this.port}` : undefined;
        }

        triggerEvent = (event = 'change') => this.node.trigger(event);

        constructor(specs) {
          super('applications', specs);
          this.#builder = new _builder.ApplicationBuilder(this);
          this.#builder.bind('change', this.triggerEvent);
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
    hash: 184568685,
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
          const widget = bundles.get(`${this.id}//widget`);
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
          this.bundles.forEach(bundle => {
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
    hash: 849984416,
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
    hash: 2858793096,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLENBQUNYLE1BQU5XLEdBQWVYLHNCQUFmVztNQUNBQSxLQUFLLENBQUMrQixLQUFOL0IsR0FBYyxLQUFkQTtNQUVBQSxLQUFLLENBQUNKLE1BQU5JLEdBQWUsQ0FDWCxJQURXLENBQWZBO01BR0FBLEtBQUssQ0FBQ3NDLEtBQU50QyxHQUFjO1FBQ1Z1QyxPQUFPLEVBQUU7VUFDTEMsSUFBSSxFQUFFLCtCQUREO1VBRUxDLElBQUksRUFBRTtRQUZEO01BREMsQ0FBZHpDO01BTUFBLEtBQUssQ0FBQzBDLE9BQU4xQyxHQUFnQjtRQUNabEIsRUFBRSxFQUFFO1VBQ0FjLE1BQU0sRUFBRSxDQUFDLElBQUQsQ0FEUjtVQUVBK0MsT0FBTyxFQUFFO1FBRlQ7TUFEUSxDQUFoQjNDOztNQU9BNEMsYUFBT0MsUUFBUEQsQ0FBZ0IsMEJBQWhCQSxFQUE0QzVDLEtBQTVDNEMiLCJuYW1lcyI6WyJBcHBsaWNhdGlvbkJ1aWxkZXIiLCJFdmVudHMiLCJidWlsZHMiLCJtZXNzYWdlcyIsImVycm9ycyIsInByb2Nlc3NpbmciLCJwcm9jZXNzZWQiLCJjb25zdHJ1Y3RvciIsImFwcGxpY2F0aW9uIiwiQXBwbGljYXRpb25CdWlsZHMiLCJvbk1lc3NhZ2UiLCJtZXNzYWdlIiwidHlwZSIsInRyaWdnZXIiLCJwdXNoIiwiZXJyb3IiLCJwcmVwYXJlIiwiYmFja2VuZCIsImJhY2tlbmRzIiwiZ2V0Iiwic29ja2V0Iiwib24iLCJpZCIsImV4YyIsImNvbnNvbGUiLCJzdGFjayIsImJ1aWxkIiwiZGlzdHJpYnV0aW9uIiwiRXJyb3IiLCJtb2R1bGUiLCJleGVjdXRlIiwicGF0aCIsIm5hbWUiLCJ3YXJuIiwiY2xlYW4iLCJ2YWx1ZSIsImZpZWxkcyIsImFzc2lnbmVkIiwiQXBwbGljYXRpb25zIiwiQ29sbGVjdGlvbiIsInNwZWNzIiwiQXBwbGljYXRpb24iLCJBcHBsaWNhdGlvbkRlY2xhcmF0aW9ucyIsIlJlYWN0aXZlTW9kZWwiLCJ0b3RhbCIsIml0ZW1zUHJvY2Vzc2VkIiwib25Qcm9jZXNzIiwiU2V0Iiwic3VjY2VzcyIsImNsZWFyIiwidHJpZ2dlckV2ZW50Iiwib25EZWNsYXJhdGlvblNhdmUiLCJpdGVtIiwidmFsaWQiLCJhZGQiLCJzaXplIiwiaW5pdGlhbGlzZSIsImNhdGNoIiwiYmluZCIsInVwZGF0ZSIsImFjdGlvbiIsImFwcGxpY2F0aW9uSWQiLCJyZXNwb25zZSIsIkFwcGxpY2F0aW9uRGVwbG95bWVudHMiLCJBcHBsaWNhdGlvbkRlcGxveW1lbnQiLCJJdGVtIiwiZGlzdHJpYnV0aW9ucyIsInByb3BlcnRpZXMiLCJhZGREaXN0cmlidXRpb24iLCJwYXJhbXMiLCJlIiwiY2FjaGUiLCJJdGVtcyIsIkFwcGxpY2F0aW9uRGlzdHJpYnV0aW9uIiwidGFibGUiLCJpZGVudGlmaWVyIiwiZmllbGQiLCJzb3VyY2UiLCJiYXRjaCIsImFjdGlvbnMiLCJsaXN0IiwiZGF0YSIsImluZGljZXMiLCJwcmltYXJ5IiwidGFibGVzIiwicmVnaXN0ZXIiLCJGaWxlIiwic2NvcGUiLCJzcGVjaWZpZXIiLCJ2c3BlY2lmaWVyIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImRldmVsb3BlciIsInZlcnNpb24iLCJjb25uZWN0IiwiaG9zdHMiLCJwb3J0IiwibW9kdWxlc1BhdGgiLCJ3YXJuaW5ncyIsImFtIiwidGVtcGxhdGUiLCJkZXBsb3ltZW50Iiwic3RhdGljIiwic3RhdGljcyIsImJ1aWxkZXIiLCJkZWNsYXJhdGlvbnMiLCJ1cmwiLCJ1bmRlZmluZWQiLCJldmVudCIsIm5vZGUiLCJjaGVja1N0YXRpYyIsImNyZWF0ZUJhY2tlbmQiLCJlZGl0Iiwicm91dGVzIiwiaXRlbXMiLCJmb3JFYWNoIiwiYnVuZGxlcyIsImJ1bmRsZSIsInJvdXRlIiwiQXBwbGljYXRpb25Nb2R1bGVCdW5kbGUiLCJtb2R1bGVJZCIsImhhc1R4dCIsImhhcyIsIkFwcGxpY2F0aW9uTW9kdWxlcyIsIkFwcGxpY2F0aW9uTW9kdWxlIiwiY291bnRlcnMiLCJlbGVtZW50cyIsInRyZWUiLCJsYW5kZWQiLCJvdXRwdXQiLCJnZXRJdGVtcyIsImNvbnRhaW5lciIsInRleHQiLCJmaWx0ZXIiLCJpc0FwcCIsImluY2x1ZGVzIiwiaXNMaWJyYXJ5IiwidGV4dFNlYXJjaCIsIndpZGdldCIsImdldEJ1bmRsZSIsInZhbHVlcyIsIm1hcCIsIl9fQ0xBU1NfXyIsInRvTG93ZXJDYXNlIiwicHJvY2Vzc29yc05hbWVzIiwicHJvY2Vzc29ycyIsInByb2Nlc3NvciIsImhhdmVQcm9jZXNzb3IiLCJmaW5kIiwiaGFzUHJvY2Vzc29yIiwic2F2ZUZpZWxkIiwiZGlybmFtZSIsImhtciIsInRzIiwidHJhbnNwaWxlIiwiY2xvbmUiLCJkZWxldGUiLCJ0YXJnZXQiLCJjcmVhdGVGaWxlIiwic3BsaXQiLCJmaWxlbmFtZSIsImFkZEJ1bmRsZSIsIk1vZHVsZSIsIkJ1bmRsZSIsImNvdW50IiwiYXBwbGljYXRpb25zIiwiYmF0Y2hlcyIsIlRlbXBsYXRlIiwiaW1tdXRhYmxlIiwiQXBwbGljYXRpb25TdGF0aWNzIiwidW5pcXVlIiwiQXBwbGljYXRpb25TdGF0aWMiLCJTb3VyY2UiLCJmaWxlIiwiYmFzZW5hbWUiLCJyZWxhdGl2ZSIsImV4dG5hbWUiLCJwYXRobmFtZSIsIkNvbnN1bWVycyIsIkNvbnN1bWVyIiwiYnVuZGxlSWQiLCJ0dSIsIkJ1bmRsZURlcGVuZGVuY2llcyIsIkJ1bmRsZURlcGVuZGVuY3kiLCJzdWJwYXRoIiwicmVzb3VyY2UiLCJwbGF0Zm9ybXMiLCJsYXlvdXQiLCJ1cGRhdGVkIiwiZGVzdHJveWVkIiwiZWxlbWVudCIsIk1hcCIsInNldCIsInBhY2thZ2VycyIsImNvbnN1bWVycyIsImNvbXBpbGVyUHJvY2Vzc29yQWN0aXZhdGUiLCJwcm9jZXNzb3JOYW1lIiwiUGFja2FnZXJzIiwiUGFja2FnZXIiLCJQYWNrYWdlckNvbXBpbGVycyIsIlBhY2thZ2VyQ29tcGlsZXIiLCJkaWFnbm9zdGljcyIsImdlbmVyYWwiLCJmaWxlcyIsIm92ZXJ3cml0ZXMiLCJkZXBlbmRlbmNpZXMiLCJkaXN0cmlidXRpb25JZCIsImNvbXBpbGVycyIsIlByb2Nlc3NvciIsInNlbGVjdG9yIiwiYW1JZCIsInNsaWNlIiwibGVuZ3RoIiwiam9pbiIsIkRhc2hib2FyZCIsInJlYWR5Iiwid2QiLCJ2YWxpZFBvcnQiLCJnZXRXRCIsImNsZWFuQ2FjaGUiLCJ2YWxpZGF0ZSIsImhhc2giLCJjaGVja1BvcnQiLCJhdmFpbGFibGVQb3J0IiwiaW50ZW50cyIsImNvbnQiLCJhdmFpbGFibGUiLCJEZWNsYXJhdGlvbnMiLCJEZWNsYXJhdGlvbiIsImNvZGUiLCJBcHBsaWNhdGlvbkRpc3RyaWJ1dGlvbnMiLCJPYmplY3QiLCJsb2NhbCIsInNzciIsInBvcnRzIiwiYW1kIiwicGxhdGZvcm0iLCJjb21wcmVzcyIsImVudmlyb25tZW50IiwiZGVmYXVsdCIsIm5wbSIsIm1pbmlmeSIsImxhdW5jaGVyIiwiaHR0cCIsImlzTmFOIiwicGFyc2VJbnQiLCJpbnNwZWN0IiwiaHRtbCIsImNzcyIsImpzIiwibW9kZSIsInNldFZhbHVlcyIsIm5ld1ZhbHVlcyIsIkRpc3RyaWJ1dGlvbkxhdW5jaGVyIiwic3RhdHVzIiwicGlkIiwic3RhcnQiLCJzdG9wIiwicmVzdGFydCIsImRlbGV0ZUZvbGRlciIsImZvbGRlciIsIkdsb2JhbEJ1bmRsZXMiLCJHbG9iYWxCdW5kbGUiLCJtdWx0aWxhbmd1YWdlIiwiTW9kdWxlcyIsIk1vZHVsZURlY2xhcmF0aW9ucyIsImZldGNoaW5nIiwicGFyZW50IiwidGV4dHMiLCJNb2R1bGVUZXh0cyIsImluc3RhbGxEZXBlbmRlbmNpZXMiLCJzYXZlIiwiTW9kdWxlU3RhdGljcyIsIk1vZHVsZVN0YXRpYyIsIm92ZXJ3cml0ZSIsInVwbG9hZCIsIm1vZHVsZU5hbWUiLCJvcmlnaW4iLCJtb2R1bGVzIiwicHJvcGVydHkiLCJsYW5ndWFnZSIsImIiLCJzb3VyY2VzIiwiSlNPTiIsInBhcnNlIiwiUHJvY2Vzc29yRGVwZW5kZW5jaWVzIiwiUHJvY2Vzc29yRGVwZW5kZW5jeSIsImV4dGVybmFsc1dpdGhFcnJvcnMiLCJpIiwia2luZCIsImlzIiwiZGVjbGFyYXRpb24iLCJhbGVydHMiLCJQcm9jZXNzb3JPdmVyd3JpdGVzIiwiUHJvY2Vzc29yT3ZlcndyaXRlIiwiUHJvY2Vzc29yU291cmNlcyIsIlByb2Nlc3NvclNvdXJjZSIsIl9yZWFkeSIsIl9mZXRjaGluZyIsIl9mZXRjaGVkIiwiZmV0Y2hlZCIsIl9wcm9jZXNzaW5nIiwiX3Byb2Nlc3NlZCIsIl9sb2FkZWQiLCJsb2FkZWQiLCJfc2V0IiwicHJvcHMiLCJwcm9wIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJnZXRQcm9wZXJ0aWVzIiwia2V5cyIsInJlcGxhY2UiLCJyZXBvcnRzIiwicmVhbHRpbWUiLCJyZWNvcmQiLCJpbnNlcnQiLCJSdW5UaW1lRXJyb3IiLCJ0cmFjZSIsInByb2Nlc3MiLCJzaGlmdCIsIm1ldGhvZCIsImRldGFpbCIsImxpbmUiLCJjb2x1bW4iLCJSdW5UaW1lTWFuYWdlciIsImFsbCIsIlNlcnZlckNvbmZpZyIsIl9mZXRjaCIsImZldGNoIiwiU2VydmVyIiwiY29uZmlnIiwiQmV5b25kU2VydmVyIiwiaXNGYXZvcml0ZSIsInJlbmFtZSIsImZvcm1hdCIsIlRlbXBsYXRlQXBwbGljYXRpb24iLCJUZW1wbGF0ZUFwcGxpY2F0aW9uc1NvdXJjZXMiLCJUZW1wbGF0ZUFwcGxpY2F0aW9uc1NvdXJjZSIsIlRlbXBsYXRlR2xvYmFscyIsIlRlbXBsYXRlR2xvYmFsIiwiVGVtcGxhdGVHbG9iYWxTb3VyY2VzIiwiVGVtcGxhdGVHbG9iYWxTb3VyY2UiLCJnbG9iYWwiLCJUZW1wbGF0ZU92ZXJ3cml0ZXMiLCJUZW1wbGF0ZU92ZXJ3cml0ZSIsImJ5QXBwbGljYXRpb24iLCJUZW1wbGF0ZVByb2Nlc3NvciIsIlRlbXBsYXRlUHJvY2Vzc29yc1NvdXJjZXMiLCJUZW1wbGF0ZVByb2Nlc3NvcnNTb3VyY2UiLCJUcmFuc3ZlcnNhbERlcGVuZGVuY2llcyIsIlRyYW5zdmVyc2FsRGVwZW5kZW5jeSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiaW5zcGVjdC9tb2RlbHMvY2xpZW50L2FwcGxpY2F0aW9ucy9idWlsZGVyL2J1aWxkZXIudHMiLCJpbnNwZWN0L21vZGVscy9jbGllbnQvYXBwbGljYXRpb25zL2J1aWxkZXIvYnVpbGRzLnRzIiwiaW5zcGVjdC9tb2RlbHMvY2xpZW50L2FwcGxpY2F0aW9ucy9jb2xsZWN0aW9uLnRzIiwiaW5zcGVjdC9tb2RlbHMvY2xpZW50L2FwcGxpY2F0aW9ucy9kZWNsYXJhdGlvbnMudHMiLCJpbnNwZWN0L21vZGVscy9jbGllbnQvYXBwbGljYXRpb25zL2RlcGxveW1lbnRzL2NvbGxlY3Rpb24udHMiLCJpbnNwZWN0L21vZGVscy9jbGllbnQvYXBwbGljYXRpb25zL2RlcGxveW1lbnRzL2l0ZW0udHMiLCJpbnNwZWN0L21vZGVscy9jbGllbnQvYXBwbGljYXRpb25zL2RlcGxveW1lbnRzL3JlZ2lzdGVyLnRzIiwiaW5zcGVjdC9tb2RlbHMvY2xpZW50L2FwcGxpY2F0aW9ucy9pdGVtLnRzIiwiaW5zcGVjdC9tb2RlbHMvY2xpZW50L2FwcGxpY2F0aW9ucy9tb2R1bGVzL2J1bmRsZS50cyIsImluc3BlY3QvbW9kZWxzL2NsaWVudC9hcHBsaWNhdGlvbnMvbW9kdWxlcy9jb2xsZWN0aW9uLnRzIiwiaW5zcGVjdC9tb2RlbHMvY2xpZW50L2FwcGxpY2F0aW9ucy9tb2R1bGVzL2l0ZW0udHMiLCJpbnNwZWN0L21vZGVscy9jbGllbnQvYXBwbGljYXRpb25zL21vZHVsZXMvcmVnaXN0ZXIudHMiLCJpbnNwZWN0L21vZGVscy9jbGllbnQvYXBwbGljYXRpb25zL3JlZ2lzdGVyLnRzIiwiaW5zcGVjdC9tb2RlbHMvY2xpZW50L2FwcGxpY2F0aW9ucy9zdGF0aWMvY29sbGVjdGlvbi50cyIsImluc3BlY3QvbW9kZWxzL2NsaWVudC9hcHBsaWNhdGlvbnMvc3RhdGljL2l0ZW0udHMiLCJpbnNwZWN0L21vZGVscy9jbGllbnQvYXBwbGljYXRpb25zL3N0YXRpYy9yZWdpc3Rlci50cyIsImluc3BlY3QvbW9kZWxzL2NsaWVudC9idW5kbGVzL2NvbnN1bWVycy9jb2xsZWN0aW9uLnRzIiwiaW5zcGVjdC9tb2RlbHMvY2xpZW50L2J1bmRsZXMvY29uc3VtZXJzL2l0ZW0udHMiLCJpbnNwZWN0L21vZGVscy9jbGllbnQvYnVuZGxlcy9jb25zdW1lcnMvcmVnaXN0ZXIudHMiLCJpbnNwZWN0L21vZGVscy9jbGllbnQvYnVuZGxlcy9kZXBlbmRlbmNpZXMvY29sbGVjdGlvbi50cyIsImluc3BlY3QvbW9kZWxzL2NsaWVudC9idW5kbGVzL2RlcGVuZGVuY2llcy9pdGVtLnRzIiwiaW5zcGVjdC9tb2RlbHMvY2xpZW50L2J1bmRsZXMvZGVwZW5kZW5jaWVzL3JlZ2lzdGVyLnRzIiwiaW5zcGVjdC9tb2RlbHMvY2xpZW50L2J1bmRsZXMvaXRlbS50cyIsImluc3BlY3QvbW9kZWxzL2NsaWVudC9idW5kbGVzL3BhY2thZ2Vycy9jb2xsZWN0aW9uLnRzIiwiaW5zcGVjdC9tb2RlbHMvY2xpZW50L2J1bmRsZXMvcGFja2FnZXJzL2NvbXBpbGVycy9jb2xsZWN0aW9uLnRzIiwiaW5zcGVjdC9tb2RlbHMvY2xpZW50L2J1bmRsZXMvcGFja2FnZXJzL2NvbXBpbGVycy9pdGVtLnRzIiwiaW5zcGVjdC9tb2RlbHMvY2xpZW50L2J1bmRsZXMvcGFja2FnZXJzL2NvbXBpbGVycy9yZWdpc3Rlci50cyIsImluc3BlY3QvbW9kZWxzL2NsaWVudC9idW5kbGVzL3BhY2thZ2Vycy9pdGVtLnRzIiwiaW5zcGVjdC9tb2RlbHMvY2xpZW50L2J1bmRsZXMvcGFja2FnZXJzL3JlZ2lzdGVyLnRzIiwiaW5zcGVjdC9tb2RlbHMvY2xpZW50L2J1bmRsZXMvcmVnaXN0ZXIudHMiLCJpbnNwZWN0L21vZGVscy9jbGllbnQvZGFzaGJvYXJkL21vZGVsLnRzIiwiaW5zcGVjdC9tb2RlbHMvY2xpZW50L2RlY2xhcmF0aW9ucy9jb2xsZWN0aW9uLnRzIiwiaW5zcGVjdC9tb2RlbHMvY2xpZW50L2RlY2xhcmF0aW9ucy9pdGVtLnRzIiwiaW5zcGVjdC9tb2RlbHMvY2xpZW50L2RlY2xhcmF0aW9ucy9yZWdpc3Rlci50cyIsImluc3BlY3QvbW9kZWxzL2NsaWVudC9kaXN0cmlidXRpb25zL2NvbGxlY3Rpb24udHMiLCJpbnNwZWN0L21vZGVscy9jbGllbnQvZGlzdHJpYnV0aW9ucy9pbnRlcmZhY2VzL3BvcnRzLXJlc3BvbnNlLnRzIiwiaW5zcGVjdC9tb2RlbHMvY2xpZW50L2Rpc3RyaWJ1dGlvbnMvaW50ZXJmYWNlcy9wb3J0cy50cyIsImluc3BlY3QvbW9kZWxzL2NsaWVudC9kaXN0cmlidXRpb25zL2l0ZW0udHMiLCJpbnNwZWN0L21vZGVscy9jbGllbnQvZGlzdHJpYnV0aW9ucy9sYXVuY2hlcnMvaXRlbS50cyIsImluc3BlY3QvbW9kZWxzL2NsaWVudC9kaXN0cmlidXRpb25zL2xhdW5jaGVycy9yZWdpc3Rlci50cyIsImluc3BlY3QvbW9kZWxzL2NsaWVudC9kaXN0cmlidXRpb25zL3JlZ2lzdGVyLnRzIiwiaW5zcGVjdC9tb2RlbHMvY2xpZW50L2ZpbGUvZmlsZS50cyIsImluc3BlY3QvbW9kZWxzL2NsaWVudC9nbG9iYWxzLWJ1bmRsZXMvY29sbGVjdGlvbi50cyIsImluc3BlY3QvbW9kZWxzL2NsaWVudC9nbG9iYWxzLWJ1bmRsZXMvaXRlbS50cyIsImluc3BlY3QvbW9kZWxzL2NsaWVudC9nbG9iYWxzLWJ1bmRsZXMvcmVnaXN0ZXIudHMiLCJpbnNwZWN0L21vZGVscy9jbGllbnQvbW9kdWxlcy9jb2xsZWN0aW9uLnRzIiwiaW5zcGVjdC9tb2RlbHMvY2xpZW50L21vZHVsZXMvZGVjbGFyYXRpb25zLnRzIiwiaW5zcGVjdC9tb2RlbHMvY2xpZW50L21vZHVsZXMvaXRlbS50cyIsImluc3BlY3QvbW9kZWxzL2NsaWVudC9tb2R1bGVzL3JlZ2lzdGVyLnRzIiwiaW5zcGVjdC9tb2RlbHMvY2xpZW50L21vZHVsZXMvc3RhdGljL2NvbGxlY3Rpb24udHMiLCJpbnNwZWN0L21vZGVscy9jbGllbnQvbW9kdWxlcy9zdGF0aWMvaXRlbS50cyIsImluc3BlY3QvbW9kZWxzL2NsaWVudC9tb2R1bGVzL3N0YXRpYy9yZWdpc3Rlci50cyIsImluc3BlY3QvbW9kZWxzL2NsaWVudC9tb2R1bGVzL3RleHRzLnRzIiwiaW5zcGVjdC9tb2RlbHMvY2xpZW50L3Byb2Nlc3NvcnMvZGVwZW5kZW5jaWVzL2NvbGxlY3Rpb24udHMiLCJpbnNwZWN0L21vZGVscy9jbGllbnQvcHJvY2Vzc29ycy9kZXBlbmRlbmNpZXMvaXRlbS50cyIsImluc3BlY3QvbW9kZWxzL2NsaWVudC9wcm9jZXNzb3JzL2RlcGVuZGVuY2llcy9yZWdpc3Rlci50cyIsImluc3BlY3QvbW9kZWxzL2NsaWVudC9wcm9jZXNzb3JzL2l0ZW0udHMiLCJpbnNwZWN0L21vZGVscy9jbGllbnQvcHJvY2Vzc29ycy9vdmVyd3JpdGVzL2NvbGxlY3Rpb24udHMiLCJpbnNwZWN0L21vZGVscy9jbGllbnQvcHJvY2Vzc29ycy9vdmVyd3JpdGVzL2l0ZW0udHMiLCJpbnNwZWN0L21vZGVscy9jbGllbnQvcHJvY2Vzc29ycy9vdmVyd3JpdGVzL3JlZ2lzdGVyLnRzIiwiaW5zcGVjdC9tb2RlbHMvY2xpZW50L3Byb2Nlc3NvcnMvcmVnaXN0ZXIudHMiLCJpbnNwZWN0L21vZGVscy9jbGllbnQvcHJvY2Vzc29ycy9zb3VyY2VzL2NvbGxlY3Rpb24udHMiLCJpbnNwZWN0L21vZGVscy9jbGllbnQvcHJvY2Vzc29ycy9zb3VyY2VzL2l0ZW0udHMiLCJpbnNwZWN0L21vZGVscy9jbGllbnQvcHJvY2Vzc29ycy9zb3VyY2VzL3JlZ2lzdGVyLnRzIiwiaW5zcGVjdC9tb2RlbHMvY2xpZW50L3JlYWN0aXZlLW1vZGVsLnRzIiwiaW5zcGVjdC9tb2RlbHMvY2xpZW50L3JlYWx0aW1lL3JlYWx0aW1lLnRzIiwiaW5zcGVjdC9tb2RlbHMvY2xpZW50L3J1bi10aW1lL2l0ZW0udHMiLCJpbnNwZWN0L21vZGVscy9jbGllbnQvcnVuLXRpbWUvbWFuYWdlci50cyIsImluc3BlY3QvbW9kZWxzL2NsaWVudC9zZXJ2ZXIvY29uZmlnLnRzIiwiaW5zcGVjdC9tb2RlbHMvY2xpZW50L3NlcnZlci9zZXJ2ZXIudHMiLCJpbnNwZWN0L21vZGVscy9jbGllbnQvc291cmNlcy9zb3VyY2UudHMiLCJpbnNwZWN0L21vZGVscy9jbGllbnQvdGVtcGxhdGVzL2FwcGxpY2F0aW9ucy9pdGVtLnRzIiwiaW5zcGVjdC9tb2RlbHMvY2xpZW50L3RlbXBsYXRlcy9hcHBsaWNhdGlvbnMvcmVnaXN0ZXIudHMiLCJpbnNwZWN0L21vZGVscy9jbGllbnQvdGVtcGxhdGVzL2FwcGxpY2F0aW9ucy9zb3VyY2VzL2NvbGxlY3Rpb24udHMiLCJpbnNwZWN0L21vZGVscy9jbGllbnQvdGVtcGxhdGVzL2FwcGxpY2F0aW9ucy9zb3VyY2VzL2l0ZW0udHMiLCJpbnNwZWN0L21vZGVscy9jbGllbnQvdGVtcGxhdGVzL2FwcGxpY2F0aW9ucy9zb3VyY2VzL3JlZ2lzdGVyLnRzIiwiaW5zcGVjdC9tb2RlbHMvY2xpZW50L3RlbXBsYXRlcy9nbG9iYWwvY29sbGVjdGlvbi50cyIsImluc3BlY3QvbW9kZWxzL2NsaWVudC90ZW1wbGF0ZXMvZ2xvYmFsL2l0ZW0udHMiLCJpbnNwZWN0L21vZGVscy9jbGllbnQvdGVtcGxhdGVzL2dsb2JhbC9yZWdpc3Rlci50cyIsImluc3BlY3QvbW9kZWxzL2NsaWVudC90ZW1wbGF0ZXMvZ2xvYmFsL3NvdXJjZXMvY29sbGVjdGlvbi50cyIsImluc3BlY3QvbW9kZWxzL2NsaWVudC90ZW1wbGF0ZXMvZ2xvYmFsL3NvdXJjZXMvaXRlbS50cyIsImluc3BlY3QvbW9kZWxzL2NsaWVudC90ZW1wbGF0ZXMvZ2xvYmFsL3NvdXJjZXMvcmVnaXN0ZXIudHMiLCJpbnNwZWN0L21vZGVscy9jbGllbnQvdGVtcGxhdGVzL2l0ZW0udHMiLCJpbnNwZWN0L21vZGVscy9jbGllbnQvdGVtcGxhdGVzL292ZXJ3cml0ZXMvY29sbGVjdGlvbi50cyIsImluc3BlY3QvbW9kZWxzL2NsaWVudC90ZW1wbGF0ZXMvb3ZlcndyaXRlcy9pdGVtLnRzIiwiaW5zcGVjdC9tb2RlbHMvY2xpZW50L3RlbXBsYXRlcy9vdmVyd3JpdGVzL3JlZ2lzdGVyLnRzIiwiaW5zcGVjdC9tb2RlbHMvY2xpZW50L3RlbXBsYXRlcy9wcm9jZXNzb3JzL2l0ZW0udHMiLCJpbnNwZWN0L21vZGVscy9jbGllbnQvdGVtcGxhdGVzL3Byb2Nlc3NvcnMvcmVnaXN0ZXIudHMiLCJpbnNwZWN0L21vZGVscy9jbGllbnQvdGVtcGxhdGVzL3Byb2Nlc3NvcnMvc291cmNlcy9jb2xsZWN0aW9uLnRzIiwiaW5zcGVjdC9tb2RlbHMvY2xpZW50L3RlbXBsYXRlcy9wcm9jZXNzb3JzL3NvdXJjZXMvaXRlbS50cyIsImluc3BlY3QvbW9kZWxzL2NsaWVudC90ZW1wbGF0ZXMvcHJvY2Vzc29ycy9zb3VyY2VzL3JlZ2lzdGVyLnRzIiwiaW5zcGVjdC9tb2RlbHMvY2xpZW50L3RlbXBsYXRlcy9yZWdpc3Rlci50cyIsImluc3BlY3QvbW9kZWxzL2NsaWVudC90cmFuc3ZlcnNhbC9kZXBlbmRlbmNpZXMvY29sbGVjdGlvbi50cyIsImluc3BlY3QvbW9kZWxzL2NsaWVudC90cmFuc3ZlcnNhbC9kZXBlbmRlbmNpZXMvaXRlbS50cyIsImluc3BlY3QvbW9kZWxzL2NsaWVudC90cmFuc3ZlcnNhbC9kZXBlbmRlbmNpZXMvcmVnaXN0ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==