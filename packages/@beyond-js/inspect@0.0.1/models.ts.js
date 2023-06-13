define(["exports", "module", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/plm@0.0.1/core", "@beyond-js/kernel@0.1.9/core", "@beyond-js/backend@0.1.6/client", "@beyond-js/inspect@0.0.1/reactive-model"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.__beyond_pkg = _exports.TransversalDependency = _exports.TransversalDependencies = _exports.TemplateProcessorsSources = _exports.TemplateProcessorsSource = _exports.TemplateProcessor = _exports.TemplateOverwrites = _exports.TemplateOverwrite = _exports.TemplateGlobals = _exports.TemplateGlobalSources = _exports.TemplateGlobalSource = _exports.TemplateGlobal = _exports.TemplateApplicationsSources = _exports.TemplateApplicationsSource = _exports.TemplateApplication = _exports.Template = _exports.RunTimeManager = _exports.RunTimeError = _exports.Realtime = _exports.ProcessorSources = _exports.ProcessorSource = _exports.ProcessorOverwrites = _exports.ProcessorOverwrite = _exports.ProcessorDependency = _exports.ProcessorDependencies = _exports.Processor = _exports.Packagers = _exports.PackagerCompilers = _exports.PackagerCompiler = _exports.Packager = _exports.Modules = _exports.ModuleTexts = _exports.ModuleStatics = _exports.ModuleStatic = _exports.ModuleDeclarations = _exports.Module = _exports.GlobalBundles = _exports.GlobalBundle = _exports.DistributionLauncher = _exports.Declarations = _exports.Declaration = _exports.Dashboard = _exports.Consumers = _exports.Consumer = _exports.BundleDependency = _exports.BundleDependencies = _exports.Bundle = _exports.Applications = _exports.ApplicationStatics = _exports.ApplicationStatic = _exports.ApplicationModules = _exports.ApplicationModuleDeclarations = _exports.ApplicationModule = _exports.ApplicationDistributions = _exports.ApplicationDistribution = _exports.ApplicationDeployments = _exports.ApplicationDeployment = _exports.Application = void 0;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/plm", "0.0.1"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/backend", "0.1.6"], ["@beyond-js/inspect", "0.0.1"], ["@beyond-js/workspace", "1.0.5"]]);
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

  /***************************************************
  INTERNAL MODULE: ./applications/modules/declarations
  ***************************************************/

  ims.set('./applications/modules/declarations', {
    hash: 974647874,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ApplicationModuleDeclarations = void 0;
      var _beyond_context = require("beyond_context");
      var _core = require("@beyond-js/kernel/core");
      /*bundle*/
      class ApplicationModuleDeclarations extends _core.Events {
        #parent;
        #errors = [];
        get errors() {
          return this.#errors;
        }
        #process;
        get process() {
          return this.#process;
        }
        constructor(parent) {
          super();
          this.#parent = parent;
        }
        #has(type) {
          let find = false;
          const bundles = this.#parent.properties.get('bundles');
          bundles.forEach(bundle => [...bundle.processors.keys()].includes(type) && (find = true));
          return find;
        }
        async update() {
          if (!this.#has('ts')) {
            console.warn('the module does not use declarations');
            return;
          }
          this.#errors = [];
          this.#process = true;
          this.trigger('change');
          try {
            const action = '/modules/declarations/update';
            const id = {
              id: this.#parent.fields.get('id').value
            };
            this.#errors = await _beyond_context.module.execute(action, id);
            return this.#errors;
          } catch (exc) {
            this.#errors = exc.message;
          } finally {
            this.#process = false;
            this.trigger('change');
          }
        }
      }
      exports.ApplicationModuleDeclarations = ApplicationModuleDeclarations;
    }
  });

  /*******************************************
  INTERNAL MODULE: ./applications/modules/item
  *******************************************/

  ims.set('./applications/modules/item', {
    hash: 210353514,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ApplicationModule = void 0;
      var _core = require("@beyond-js/plm/core");
      var _beyond_context = require("beyond_context");
      var _declarations = require("./declarations");
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
        #declaration;
        get declaration() {
          return this.#declaration;
        }
        constructor(specs) {
          super('applications-modules', specs);
          this.#declaration = new _declarations.ApplicationModuleDeclarations(this);
          this.#declaration.on('change', () => this.node.trigger('change'));
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
    hash: 2159195254,
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
        #exc = new Map();
        get exc() {
          return this.#exc;
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
          // set message on messages
          this.#messages.push(message);
          if (!message.error) {
            this.trigger("change");
            return;
          }
          if (!message.main) {
            if (!this.#exc.has(message.moduleId)) {
              console.warn('error message recived and not process main first', message);
            }
            const msg = this.#exc.get(message.moduleId);
            msg.stack.push(message);
            this.#exc.set(msg.moduleId, msg);
          } else if (this.#exc.has(message.moduleId)) {
            const msg = this.#exc.get(message.moduleId);
            msg.stack.push(message);
          } else {
            !message.stack && (message.stack = []);
            this.#exc.set(message.moduleId, message);
          }
          this.#errors.push(message);
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
    hash: 4002272489,
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
        #has(type) {
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
          if (!this.#has('ts')) {
            console.warn('the module does not use declarations');
            return;
          }
          try {
            const action = '/modules/declarations/update';
            const id = {
              id: this.#parent.fields.get('id').value
            };
            console.log('execute', action, id);
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
    "im": "./applications/modules/declarations",
    "from": "ApplicationModuleDeclarations",
    "name": "ApplicationModuleDeclarations"
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
  let Applications, ApplicationDeployments, ApplicationDeployment, Application, ApplicationModules, ApplicationModuleDeclarations, ApplicationModule, ApplicationStatics, ApplicationStatic, Consumers, Consumer, BundleDependencies, BundleDependency, Bundle, Packagers, PackagerCompilers, PackagerCompiler, Packager, Dashboard, Declarations, Declaration, TransversalDependencies, TransversalDependency, ApplicationDistributions, ApplicationDistribution, DistributionLauncher, GlobalBundles, GlobalBundle, Modules, ModuleDeclarations, Module, ModuleStatics, ModuleStatic, ModuleTexts, ProcessorDependencies, ProcessorDependency, Processor, ProcessorOverwrites, ProcessorOverwrite, ProcessorSources, ProcessorSource, Realtime, RunTimeError, RunTimeManager, TemplateApplication, TemplateApplicationsSources, TemplateApplicationsSource, TemplateGlobals, TemplateGlobal, TemplateGlobalSources, TemplateGlobalSource, Template, TemplateOverwrites, TemplateOverwrite, TemplateProcessor, TemplateProcessorsSources, TemplateProcessorsSource;

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
  _exports.ApplicationModuleDeclarations = ApplicationModuleDeclarations;
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
    (require || prop === 'ApplicationModuleDeclarations') && (_exports.ApplicationModuleDeclarations = ApplicationModuleDeclarations = require ? require('./applications/modules/declarations').ApplicationModuleDeclarations : value);
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
//# sourceMappingURL=models.ts.js.map