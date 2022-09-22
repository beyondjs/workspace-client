define(["exports", "module", "@beyond-js/kernel@0.0.22/bundle", "@beyond-js/kernel@0.0.22/core", "@beyond-js/backend@0.0.10/client", "@beyond-js/plm@0.0.1/core"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.TransversalDependency = _exports.TransversalDependencies = _exports.TemplateProcessorsSources = _exports.TemplateProcessorsSource = _exports.TemplateProcessor = _exports.TemplateOverwrites = _exports.TemplateOverwrite = _exports.TemplateGlobals = _exports.TemplateGlobalSources = _exports.TemplateGlobalSource = _exports.TemplateGlobal = _exports.TemplateApplicationsSources = _exports.TemplateApplicationsSource = _exports.TemplateApplication = _exports.Template = _exports.RunTimeManager = _exports.RunTimeError = _exports.ReactiveModel = _exports.ProcessorSources = _exports.ProcessorSource = _exports.ProcessorOverwrites = _exports.ProcessorOverwrite = _exports.ProcessorDependency = _exports.ProcessorDependencies = _exports.ProcessorCompilers = _exports.ProcessorCompiler = _exports.Processor = _exports.Packagers = _exports.PackagerCompilers = _exports.PackagerCompiler = _exports.Packager = _exports.Modules = _exports.ModuleTexts = _exports.ModuleStatics = _exports.ModuleStatic = _exports.ModuleDeclarations = _exports.Module = _exports.LibraryModules = _exports.LibraryModule = _exports.Library = _exports.LibrariesStatics = _exports.LibrariesStatic = _exports.Libraries = _exports.GlobalBundles = _exports.GlobalBundle = _exports.DistributionLauncher = _exports.Declarations = _exports.Declaration = _exports.Dashboard = _exports.Consumers = _exports.Consumer = _exports.BundleDependency = _exports.BundleDependencies = _exports.Bundle = _exports.Bees = _exports.Bee = _exports.Applications = _exports.ApplicationStatics = _exports.ApplicationStatic = _exports.ApplicationModules = _exports.ApplicationModule = _exports.ApplicationLibrary = _exports.ApplicationLibraries = _exports.ApplicationDistributions = _exports.ApplicationDistribution = _exports.ApplicationDeployments = _exports.ApplicationDeployment = _exports.ApplicationDeclarations = _exports.Application = void 0;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/inspect", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
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
    hash: 3182527608,
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

        #processing;

        get processing() {
          return this.#processing;
        }

        #fetching;

        get fetching() {
          return this.#fetching;
        }

        #completed;

        get completed() {
          return this.#completed;
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
          this.#processing = false;
          this.#messages.push(message);
          console.log(message);
          this.trigger('change');
          return;
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
          console.log(123, distribution);
          if (typeof distribution !== 'object') throw new Error('Invalid distribution parameter');
          let environment = distribution.environment ?? 'development';

          if (!['development', 'production'].includes(distribution.environment)) {
            this.onMessage({
              type: `build/application/message`,
              text: `The distribution has no environment, compiling with default distribution: ${environment}`
            });
          }

          await this.prepare();
          await _beyond_context.module.execute('/build', {
            application: this.#application.path,
            distribution: distribution.name
          });
          this.#completed = true;
          this.#processing = false;
        }

        clean() {
          this.#completed = false;
          this.#messages = [];
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
    hash: 404701823,
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
  /*******************************************************************
  INTERNAL MODULE: ./applications/deployments/distributions/collection
  *******************************************************************/

  ims.set('./applications/deployments/distributions/collection', {
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
  /**********************************************************************************
  INTERNAL MODULE: ./applications/deployments/distributions/interfaces/ports-response
  **********************************************************************************/

  ims.set('./applications/deployments/distributions/interfaces/ports-response', {
    hash: 2222151219,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
    }
  });
  /*************************************************************************
  INTERNAL MODULE: ./applications/deployments/distributions/interfaces/ports
  *************************************************************************/

  ims.set('./applications/deployments/distributions/interfaces/ports', {
    hash: 2758067874,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
    }
  });
  /*************************************************************
  INTERNAL MODULE: ./applications/deployments/distributions/item
  *************************************************************/

  ims.set('./applications/deployments/distributions/item', {
    hash: 4104865720,
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
          console.log(12, values);
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
          console.log(13, newValues);
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
  /***********************************************************************
  INTERNAL MODULE: ./applications/deployments/distributions/launchers/item
  ***********************************************************************/

  ims.set('./applications/deployments/distributions/launchers/item', {
    hash: 4276222954,
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
          return _beyond_context.module.execute('applications/deployments/distributions/launchers/start', {
            id: this.id
          });
        }

        stop() {
          return _beyond_context.module.execute('applications/deployments/distributions/launchers/stop', {
            id: this.id
          });
        }

        restart() {
          return _beyond_context.module.execute('applications/deployments/distributions/launchers/restart', {
            id: this.id
          });
        }

      }

      exports.DistributionLauncher = DistributionLauncher;
    }
  });
  /***************************************************************************
  INTERNAL MODULE: ./applications/deployments/distributions/launchers/register
  ***************************************************************************/

  ims.set('./applications/deployments/distributions/launchers/register', {
    hash: 94926659,
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
          data: 'applications/deployments/distributions/launchers/data'
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
  /*****************************************************************
  INTERNAL MODULE: ./applications/deployments/distributions/register
  *****************************************************************/

  ims.set('./applications/deployments/distributions/register', {
    hash: 1880468587,
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
          list: 'applications/deployments/distributions/list',
          data: 'applications/deployments/distributions/data'
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
  /***********************************************
  INTERNAL MODULE: ./applications/deployments/item
  ***********************************************/

  ims.set('./applications/deployments/item', {
    hash: 3998600714,
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
    hash: 323245927,
    creator: function (require, exports) {
      "use strict";

      var _beyond_context = require("beyond_context");

      var _core = require("@beyond-js/plm/core");

      var _item = require("./distributions/item");

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
    hash: 452893377,
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

        get libraries() {
          const libraries = this.properties.get('libraries');
          return libraries && libraries.value;
        }

        get bees() {
          const bees = this.properties.get('bees');
          return bees && bees.value;
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

        get servers() {
          const servers = this.fields.get('servers');
          return !servers.assigned ? [] : [...servers.value];
        }

        get defaultServer() {
          return this.servers.find(server => !!server.default);
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
  /***************************************************
  INTERNAL MODULE: ./applications/libraries/collection
  ***************************************************/

  ims.set('./applications/libraries/collection', {
    hash: 161297706,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ApplicationLibraries = void 0;

      var _core = require("@beyond-js/plm/core");

      var _item = require("./item");
      /*bundle*/


      class ApplicationLibraries extends _core.Collection {
        constructor(specs) {
          super('applications-libraries', _item.ApplicationLibrary, specs);
          this.counters.register('all');
        }

      }

      exports.ApplicationLibraries = ApplicationLibraries;
    }
  });
  /*********************************************
  INTERNAL MODULE: ./applications/libraries/item
  *********************************************/

  ims.set('./applications/libraries/item', {
    hash: 3838062989,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ApplicationLibrary = void 0;

      var _core = require("@beyond-js/plm/core");

      var _builder = require("../../libraries/builder");
      /*bundle*/


      class ApplicationLibrary extends _core.Item {
        get id() {
          return this.fields.get('id').value;
        }

        get application() {
          const application = this.properties.get('application');
          return application && application.value;
        }

        get library() {
          const library = this.properties.get('library');
          return library && library.value;
        }

        #builder;

        get builder() {
          return this.#builder;
        }

        constructor(specs) {
          super('applications-libraries', specs);
          this.onChange = this.onChange.bind(this);
          this.on('change', this.onChange);
        }

        onChange() {
          if (!this.landed || !this.library) return;
          const library = this.library;
          this.#builder = new _builder.LibraryBuilder(library.name);
          this.off('change', this.onChange);
        }

      }

      exports.ApplicationLibrary = ApplicationLibrary;
    }
  });
  /*************************************************
  INTERNAL MODULE: ./applications/libraries/register
  *************************************************/

  ims.set('./applications/libraries/register', {
    hash: 3277353207,
    creator: function (require, exports) {
      "use strict";

      var _beyond_context = require("beyond_context");

      var _core = require("@beyond-js/plm/core");

      var _item = require("../item");

      var _item2 = require("../../libraries/item");

      const specs = {};
      specs.module = _beyond_context.module;
      specs.cache = false;
      specs.fields = ['id', 'application', 'library'];
      specs.properties = {
        application: {
          Item: _item.Application,
          table: 'applications',
          identifier: [{
            field: 'id',
            source: 'application'
          }]
        },
        library: {
          Item: _item2.Library,
          table: 'libraries',
          identifier: [{
            field: 'id',
            source: 'library'
          }]
        }
      };
      specs.batch = {
        actions: {
          list: 'applications/libraries/list',
          data: 'applications/libraries/data',
          count: 'applications/libraries/count'
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

      _core.tables.register('applications-libraries', specs);
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
    hash: 4018504428,
    creator: function (require, exports) {
      "use strict";

      var _core = require("@beyond-js/plm/core");

      var _beyond_context = require("beyond_context");

      var _collection = require("../bees/collection");

      var _item = require("../templates/item");

      var _collection2 = require("./static/collection");

      var _collection3 = require("./modules/collection");

      var _item2 = require("./deployments/item");

      var _collection4 = require("./libraries/collection");

      const specs = {};
      specs.cache = false;
      specs.module = _beyond_context.module; //TODO check fields @box 'servers', 'builds','declarations'

      specs.fields = ['id', 'path', 'scope', 'name', 'specifier', 'vspecifier', 'title', 'description', 'developer', 'version', 'connect', 'hosts', 'port', 'static', 'modulesPath', 'bee', 'errors', 'warnings', 'servers', 'builds', 'declarations'];
      specs.properties = {
        am: {
          Collection: _collection3.ApplicationModules,
          table: 'applications-modules',
          filter: [{
            field: 'application',
            source: 'id'
          }]
        },
        libraries: {
          Collection: _collection4.ApplicationLibraries,
          table: 'applications-libraries',
          filter: [{
            field: 'application',
            source: 'id'
          }]
        },
        bees: {
          Collection: _collection.Bees,
          table: 'bees',
          filter: [{
            field: 'application',
            source: 'id'
          }]
        },
        template: {
          Item: _item.Template,
          table: 'templates',
          immutable: true,
          identifier: [{
            field: 'id',
            source: 'id'
          }]
        },
        static: {
          Collection: _collection2.ApplicationStatics,
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
  /**************************************
  INTERNAL MODULE: ./bees/builder/builder
  **************************************/

  ims.set('./bees/builder/builder', {
    hash: 18448378,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ServiceBuilder = void 0;

      var _core = require("@beyond-js/kernel/core");

      var _beyond_context = require("beyond_context");

      var _builds = require("./builds");

      var _client = require("@beyond-js/backend/client");

      class ServiceBuilder extends _core.Events {
        #bee;
        #builds;

        get builds() {
          return this.#builds;
        }

        #messages = [];

        get messages() {
          return this.#messages;
        }

        constructor(bee) {
          super();
          this.#bee = bee;
          this.#builds = new _builds.ServiceBuilds(bee);
        }

        onMessage(message) {
          this.#messages.push(message);
          this.trigger('change');
        }

        id() {
          return this.#bee.fields.get('id').value;
        }

        async prepare() {
          try {
            const backend = await _client.backends.get('@beyond-js/inspect');
            const socket = await backend.socket;
            const event = `server:build-service-${this.id()}`;
            socket.on(event, this.onMessage);
          } catch (exc) {
            console.error(exc.stack);
          }
        }

        async build(distribution) {
          if (typeof distribution !== 'object') {
            throw new Error('Invalid distribution parameter');
          }

          if (!['development', 'production'].includes(distribution.environment)) {
            throw new Error('Parameter "environment" is invalid');
          }

          try {
            await this.prepare();
          } catch (exc) {
            console.error(exc.stack);
          }

          const specs = {
            name: distribution.environment,
            service: this.id(),
            environment: distribution.environment
          };
          return await _beyond_context.module.execute('/build/service', specs);
        }

      }

      exports.ServiceBuilder = ServiceBuilder;
    }
  });
  /*************************************
  INTERNAL MODULE: ./bees/builder/builds
  *************************************/

  ims.set('./bees/builder/builds', {
    hash: 491302476,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ServiceBuilds = void 0;

      class ServiceBuilds {
        #bee;

        get value() {
          const builds = this.#bee.fields.get('builds');
          return !builds.assigned ? {} : { ...builds.value
          };
        }

        constructor(bee) {
          this.#bee = bee;
        }

      }

      exports.ServiceBuilds = ServiceBuilds;
    }
  });
  /*********************************
  INTERNAL MODULE: ./bees/collection
  *********************************/

  ims.set('./bees/collection', {
    hash: 477804173,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Bees = void 0;

      var _core = require("@beyond-js/plm/core");

      var _item = require("./item");
      /*bundle*/


      class Bees extends _core.Collection {
        constructor(specs) {
          super('bees', _item.Bee, specs);
        }

      }

      exports.Bees = Bees;
    }
  });
  /***************************
  INTERNAL MODULE: ./bees/item
  ***************************/

  ims.set('./bees/item', {
    hash: 1440239592,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Bee = void 0;

      var _core = require("@beyond-js/plm/core");

      var _beyond_context = require("beyond_context");

      var _builder = require("./builder/builder");
      /*bundle*/


      class Bee extends _core.Item {
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

        #builder;

        get builder() {
          return this.#builder;
        }

        constructor(specs) {
          super('bees', specs);
          this.#builder = new _builder.ServiceBuilder(this);
        }

        start() {
          return _beyond_context.module.execute('bees/start', {
            id: this.id
          });
        }

        stop() {
          return _beyond_context.module.execute('bees/stop', {
            id: this.id
          });
        }

        restart() {
          return _beyond_context.module.execute('bees/restart', {
            id: this.id
          });
        }

      }

      exports.Bee = Bee;
    }
  });
  /*******************************
  INTERNAL MODULE: ./bees/register
  *******************************/

  ims.set('./bees/register', {
    hash: 1781407149,
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
          list: 'bees/list',
          data: 'bees/data'
        }
      };
      specs.indices = {
        id: {
          fields: ['id'],
          primary: true
        },
        application: {
          fields: ['application'],
          batches: {
            application: ['list', 'count']
          }
        }
      };

      _core.tables.register('bees', specs);
    }
  });
  /**********************************************
  INTERNAL MODULE: ./bundles/consumers/collection
  **********************************************/

  ims.set('./bundles/consumers/collection', {
    hash: 2398965025,
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
    hash: 1964678658,
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
    hash: 2566797640,
    creator: function (require, exports) {
      "use strict";

      var _core = require("@beyond-js/plm/core");

      var _beyond_context = require("beyond_context");

      var _item = require("../item");

      const specs = {};
      specs.module = _beyond_context.module;
      specs.cache = false;
      specs.fields = ['id', 'bundle', 'module_id'];
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
          list: 'applications/modules/bundles/consumers/list',
          data: 'applications/modules/bundles/consumers/data'
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
  /********************************************
  INTERNAL MODULE: ./bundles/globals/collection
  ********************************************/

  ims.set('./bundles/globals/collection', {
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
  INTERNAL MODULE: ./bundles/globals/item
  **************************************/

  ims.set('./bundles/globals/item', {
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
  INTERNAL MODULE: ./bundles/globals/register
  ******************************************/

  ims.set('./bundles/globals/register', {
    hash: 3530889703,
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
          list: 'bundles/list',
          data: 'bundles/data'
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
  /******************************
  INTERNAL MODULE: ./bundles/item
  ******************************/

  ims.set('./bundles/item', {
    hash: 342541979,
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

        get extname() {
          return this.fields.get('extname').value;
        }

        get pathname() {
          return this.fields.get('pathname').value;
        }

        get resource() {
          return this.fields.get('resource').value;
        } // The name of the bundle specified in the module.json


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
    hash: 3586664580,
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
          list: '',
          data: 'applications/modules/bundles/packagers/compilers/data'
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
    hash: 2945413720,
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

        get processorsName() {
          return this.fields.get('processors').value;
        }

        get compiler() {
          const compiler = this.properties.get('compiler');
          return compiler && compiler.value;
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
    hash: 1201750986,
    creator: function (require, exports) {
      "use strict";

      var _beyond_context = require("beyond_context");

      var _core = require("@beyond-js/plm/core");

      var _item = require("../../processors/compilers/item");

      const specs = {};
      specs.module = _beyond_context.module;
      specs.cache = false;
      specs.fields = ['id', 'distribution', 'processors'];
      specs.properties = {
        compilers: {
          Items: _item.ProcessorCompiler,
          table: 'processors-compilers',
          identifier: {
            field: 'id',
            source: 'processors'
          }
        }
      };
      specs.batch = {
        actions: {
          list: 'applications/modules/bundles/packagers/list',
          data: 'applications/modules/bundles/packagers/data'
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
    hash: 232080856,
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
      specs.fields = ['id', 'name', 'type', 'processors', 'platforms', 'subpath', 'specifier', 'vspecifier', 'updated', 'destroyed', 'extname', 'pathname', 'route', 'layout', 'element', 'compiler_processor_activate', 'errors', 'warnings'];
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
          list: '',
          data: 'applications/modules/bundles/data'
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
    hash: 494242649,
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
          this.getWD();
        }

        validate(hash) {
          return _beyond_context.module.execute('/dashboard/validate', {
            hash: hash
          });
        }

        cleanCache = () => _beyond_context.module.execute('/dashboard/cleanCache');

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
  /***********************************
  INTERNAL MODULE: ./libraries/builder
  ***********************************/

  ims.set('./libraries/builder', {
    hash: 1635514657,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LibraryBuilder = void 0;

      var _beyond_context = require("beyond_context");

      var _core = require("@beyond-js/kernel/core");

      var _client = require("@beyond-js/backend/client");

      class LibraryBuilder extends _core.Events {
        #library;
        #messages = [];

        get messages() {
          return this.#messages;
        }
        /**
         * @param library {string} The library name
         * @constructor
         */


        constructor(library) {
          super();
          this.#library = library;
        }

        onMessage(message) {
          this.#messages.push(message);
          this.trigger('change');
        }

        prepare = async () => {
          try {
            const backend = await _client.backends.get('@beyond-js/inspect');
            const socket = await backend.socket;
            const event = `server:build-library-${this.#library}-server`;
            socket.on(event, this.onMessage);
          } catch (exc) {
            console.error(exc.stack);
          }
        };

        async build(specs) {
          specs = specs ? specs : {};

          if (typeof specs !== 'object') {
            throw new Error('Invalid parameters');
          }

          await this.prepare();
          return await _beyond_context.module.execute('/build/library', {
            name: this.#library
          });
        }

      }

      exports.LibraryBuilder = LibraryBuilder;
    }
  });
  /**************************************
  INTERNAL MODULE: ./libraries/collection
  **************************************/

  ims.set('./libraries/collection', {
    hash: 2510557909,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Libraries = void 0;

      var _core = require("@beyond-js/plm/core");

      var _item = require("./item");
      /*bundle*/


      class Libraries extends _core.Collection {
        constructor(specs) {
          super('libraries', _item.Library, specs);
        }

      }

      exports.Libraries = Libraries;
    }
  });
  /********************************
  INTERNAL MODULE: ./libraries/item
  ********************************/

  ims.set('./libraries/item', {
    hash: 3034318089,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Library = void 0;

      var _core = require("@beyond-js/plm/core");

      var _builder = require("./builder");
      /*bundle*/


      class Library extends _core.Item {
        get id() {
          return this.fields.get('id').value;
        }

        get path() {
          return this.fields.get('path').value;
        }

        get name() {
          return this.fields.get('name').value;
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

        get static() {
          return this.fields.get('static').value;
        }

        get errors() {
          return this.fields.get('errors').value ?? [];
        }

        get warnings() {
          return this.fields.get('warnings').value ?? [];
        }

        get bee() {
          const bee = this.properties.get('bee');
          return bee && bee.value;
        }

        get modules() {
          const modules = this.properties.get('modules');
          return modules && modules.value;
        }

        get statics() {
          return this.properties.get('static');
        }

        #builder;

        get builder() {
          return this.#builder;
        }

        constructor(specs) {
          super('libraries', specs);
          this.onReady = this.onReady.bind(this);
          this.bind('change', this.onReady);
        }

        onChange = () => this.node.trigger('change');

        onReady() {
          if (!this.landed || !!this.#builder) return;
          this.#builder = new _builder.LibraryBuilder(this.name);
          this.#builder.on('change', this.onChange);
          this.off('change', this.onReady);
        }

      }

      exports.Library = Library;
    }
  });
  /**********************************************
  INTERNAL MODULE: ./libraries/modules/collection
  **********************************************/

  ims.set('./libraries/modules/collection', {
    hash: 3940756886,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LibraryModules = void 0;

      var _core = require("@beyond-js/plm/core");

      var _item = require("./item");
      /*bundle*/


      class LibraryModules extends _core.Collection {
        constructor(specs) {
          super('libraries-modules', _item.LibraryModule, specs);
          this.counters.register('all');
        }

      }

      exports.LibraryModules = LibraryModules;
    }
  });
  /****************************************
  INTERNAL MODULE: ./libraries/modules/item
  ****************************************/

  ims.set('./libraries/modules/item', {
    hash: 2442932795,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LibraryModule = void 0;

      var _core = require("@beyond-js/plm/core");
      /*bundle*/


      class LibraryModule extends _core.Item {
        get id() {
          return this.fields.get('id').value;
        }

        get library() {
          const library = this.properties.get('library');
          return library && library.value;
        }

        get module() {
          const module = this.properties.get('module');
          return module && module.value;
        }

        constructor(specs) {
          super('libraries-modules', specs);
        }

      }

      exports.LibraryModule = LibraryModule;
    }
  });
  /********************************************
  INTERNAL MODULE: ./libraries/modules/register
  ********************************************/

  ims.set('./libraries/modules/register', {
    hash: 1593519542,
    creator: function (require, exports) {
      "use strict";

      var _beyond_context = require("beyond_context");

      var _core = require("@beyond-js/plm/core");

      var _item = require("../item");

      var _item2 = require("../../modules/item");

      const specs = {};
      specs.module = _beyond_context.module;
      specs.cache = false;
      specs.fields = ['id', 'library'];
      specs.properties = {
        library: {
          Item: _item.Library,
          table: 'libraries',
          identifier: [{
            field: 'id',
            source: 'library'
          }]
        },
        module: {
          Item: _item2.Module,
          table: 'modules',
          identifier: [{
            field: 'id',
            source: 'module'
          }]
        }
      };
      specs.batch = {
        actions: {
          list: 'libraries/modules/list',
          data: 'libraries/modules/data',
          count: 'libraries/modules/count'
        }
      };
      specs.indices = {
        id: {
          fields: ['id'],
          primary: true
        },
        library: {
          fields: ['library'],
          batches: {
            library: ['list', 'count']
          }
        }
      };

      _core.tables.register('libraries-modules', specs);
    }
  });
  /************************************
  INTERNAL MODULE: ./libraries/register
  ************************************/

  ims.set('./libraries/register', {
    hash: 1912194595,
    creator: function (require, exports) {
      "use strict";

      var _core = require("@beyond-js/plm/core");

      var _beyond_context = require("beyond_context");

      var _item = require("../bees/item");

      var _item2 = require("./static/item");

      var _collection = require("./modules/collection");

      const specs = {};
      specs.module = _beyond_context.module;
      specs.cache = false;
      specs.fields = ['id', 'path', 'name', 'title', 'description', 'developer', 'version', 'connect', 'hosts', 'port', 'static', 'bee', 'errors', 'warnings'];
      specs.properties = {
        modules: {
          Collection: _collection.LibraryModules,
          table: 'libraries-modules',
          filter: [{
            field: 'library',
            source: 'id'
          }]
        },
        bee: {
          Item: _item.Bee,
          table: 'bees',
          immutable: true,
          identifier: [{
            field: 'id',
            source: 'bee'
          }]
        },
        static: {
          Items: _item2.LibrariesStatic,
          table: 'libraries-static',
          identifier: {
            field: 'id',
            source: 'id'
          }
        }
      };
      specs.batch = {
        actions: {
          list: 'libraries/list',
          data: 'libraries/data'
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

      _core.tables.register('libraries', specs);
    }
  });
  /*********************************************
  INTERNAL MODULE: ./libraries/static/collection
  *********************************************/

  ims.set('./libraries/static/collection', {
    hash: 2496742897,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LibrariesStatics = void 0;

      var _core = require("@beyond-js/plm/core");

      var _item = require("./item");
      /*bundle*/


      class LibrariesStatics extends _core.Collection {
        constructor(specs) {
          super('libraries-static', _item.LibrariesStatic, specs);
        }

      }

      exports.LibrariesStatics = LibrariesStatics;
    }
  });
  /***************************************
  INTERNAL MODULE: ./libraries/static/item
  ***************************************/

  ims.set('./libraries/static/item', {
    hash: 1951084164,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LibrariesStatic = void 0;

      var _core = require("@beyond-js/plm/core");
      /*bundle*/


      class LibrariesStatic extends _core.Item {
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
          super('libraries-static', specs);
        }

      }

      exports.LibrariesStatic = LibrariesStatic;
    }
  });
  /*******************************************
  INTERNAL MODULE: ./libraries/static/register
  *******************************************/

  ims.set('./libraries/static/register', {
    hash: 3978778267,
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
          list: 'libraries/static/list',
          data: 'libraries/static/data'
        }
      };
      specs.indices = {
        id: {
          fields: ['id'],
          primary: true
        }
      };

      _core.tables.register('libraries-static', specs);
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
    hash: 4147832107,
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
        } // The name of the bundle specified in the module.json


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

      }

      exports.Module = Module;
    }
  });
  /**********************************
  INTERNAL MODULE: ./modules/register
  **********************************/

  ims.set('./modules/register', {
    hash: 1770589490,
    creator: function (require, exports) {
      "use strict";

      var _core = require("@beyond-js/plm/core");

      var _beyond_context = require("beyond_context");

      var _item = require("../bundles/item");

      var _item2 = require("../libraries/item");

      var _item3 = require("../applications/item");

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
          tables: ['applications', 'libraries'],
          selector: item => {
            const container = item.fields.get('container');
            if (!container.assigned) return;

            if (typeof container !== 'object') {
              console.warn('Invalid container value', container);
              return;
            }

            const {
              is,
              name
            } = container.value;

            if (!['application', 'library'].includes(is)) {
              console.warn(`Invalid container type "${is}"`);
              return;
            }

            return {
              Item: is === 'application' ? _item3.Application : _item2.Library,
              table: is === 'application' ? 'application' : 'library',
              identifier: {
                name: name
              }
            };
          }
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
  /*************************************************
  INTERNAL MODULE: ./processors/compilers/collection
  *************************************************/

  ims.set('./processors/compilers/collection', {
    hash: 3814629009,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ProcessorCompilers = void 0;

      var _core = require("@beyond-js/plm/core");

      var _item = require("./item");
      /*bundle*/


      class ProcessorCompilers extends _core.Collection {
        constructor(specs) {
          super('processors-compilers', _item.ProcessorCompiler, specs);
        }

      }

      exports.ProcessorCompilers = ProcessorCompilers;
    }
  });
  /*******************************************
  INTERNAL MODULE: ./processors/compilers/item
  *******************************************/

  ims.set('./processors/compilers/item', {
    hash: 66018822,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ProcessorCompiler = void 0;

      var _core = require("@beyond-js/plm/core");
      /*bundle*/


      class ProcessorCompiler extends _core.Item {
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
          super('processors-compilers', specs);
        }

      }

      exports.ProcessorCompiler = ProcessorCompiler;
    }
  });
  /***********************************************
  INTERNAL MODULE: ./processors/compilers/register
  ***********************************************/

  ims.set('./processors/compilers/register', {
    hash: 768784205,
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
          list: '',
          data: 'applications/modules/bundles/processors/compilers/data'
        }
      };
      specs.indices = {
        id: {
          fields: ['id'],
          primary: true
        }
      };

      _core.tables.register('processors-compilers', specs);
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
    hash: 340703856,
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

        get resource() {
          return this.fields.get('resource').value;
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
    hash: 1469842841,
    creator: function (require, exports) {
      "use strict";

      var _core = require("@beyond-js/plm/core");

      var _beyond_context = require("beyond_context");

      var _item = require("../../bundles/item");

      var _item2 = require("../../declarations/item");

      const specs = {};
      specs.module = _beyond_context.module;
      specs.cache = false; //TODO revisar campo is, si tiene el nombre de los archivos donde se usa deberia tener otro nombre

      specs.fields = ['id', 'is', 'version', 'kind', 'valid', 'resource', 'errors', 'warnings', 'declaration', 'sources', 'module_id', 'bundle_id'];
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
          list: 'applications/modules/bundles/processors/dependencies/list',
          data: 'applications/modules/bundles/processors/dependencies/data'
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
    hash: 4179475128,
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

        get compiler() {
          const compiler = this.properties.get('compiler');
          return compiler && compiler.value;
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
    hash: 3243877547,
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
          list: 'applications/modules/bundles/processors/overwrites/list',
          data: 'applications/modules/bundles/processors/overwrites/data'
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
    hash: 965161431,
    creator: function (require, exports) {
      "use strict";

      var _core = require("@beyond-js/plm/core");

      var _beyond_context = require("beyond_context");

      var _item = require("./compilers/item");

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
        },
        compiler: {
          Item: _item.ProcessorCompiler,
          table: 'processors-compilers',
          identifier: [{
            field: 'id',
            source: 'id'
          }]
        }
      };
      specs.batch = {
        actions: {
          list: '',
          data: 'applications/modules/bundles/processors/data'
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
    hash: 1929312326,
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
          list: 'applications/modules/bundles/processors/sources/list',
          data: 'applications/modules/bundles/processors/sources/data'
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
    hash: 109422194,
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
      specs.fields = ['id', 'application', 'global', 'processors', 'path', 'errors', 'warnings'];
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
    "im": "./applications/deployments/distributions/collection",
    "from": "ApplicationDistributions",
    "name": "ApplicationDistributions"
  }, {
    "im": "./applications/deployments/distributions/item",
    "from": "ApplicationDistribution",
    "name": "ApplicationDistribution"
  }, {
    "im": "./applications/deployments/distributions/launchers/item",
    "from": "DistributionLauncher",
    "name": "DistributionLauncher"
  }, {
    "im": "./applications/deployments/item",
    "from": "ApplicationDeployment",
    "name": "ApplicationDeployment"
  }, {
    "im": "./applications/item",
    "from": "Application",
    "name": "Application"
  }, {
    "im": "./applications/libraries/collection",
    "from": "ApplicationLibraries",
    "name": "ApplicationLibraries"
  }, {
    "im": "./applications/libraries/item",
    "from": "ApplicationLibrary",
    "name": "ApplicationLibrary"
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
    "im": "./bees/collection",
    "from": "Bees",
    "name": "Bees"
  }, {
    "im": "./bees/item",
    "from": "Bee",
    "name": "Bee"
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
    "im": "./bundles/globals/collection",
    "from": "GlobalBundles",
    "name": "GlobalBundles"
  }, {
    "im": "./bundles/globals/item",
    "from": "GlobalBundle",
    "name": "GlobalBundle"
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
    "im": "./libraries/collection",
    "from": "Libraries",
    "name": "Libraries"
  }, {
    "im": "./libraries/item",
    "from": "Library",
    "name": "Library"
  }, {
    "im": "./libraries/modules/collection",
    "from": "LibraryModules",
    "name": "LibraryModules"
  }, {
    "im": "./libraries/modules/item",
    "from": "LibraryModule",
    "name": "LibraryModule"
  }, {
    "im": "./libraries/static/collection",
    "from": "LibrariesStatics",
    "name": "LibrariesStatics"
  }, {
    "im": "./libraries/static/item",
    "from": "LibrariesStatic",
    "name": "LibrariesStatic"
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
    "im": "./processors/compilers/collection",
    "from": "ProcessorCompilers",
    "name": "ProcessorCompilers"
  }, {
    "im": "./processors/compilers/item",
    "from": "ProcessorCompiler",
    "name": "ProcessorCompiler"
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
  let Applications, ApplicationDeclarations, ApplicationDeployments, ApplicationDistributions, ApplicationDistribution, DistributionLauncher, ApplicationDeployment, Application, ApplicationLibraries, ApplicationLibrary, ApplicationModules, ApplicationModule, ApplicationStatics, ApplicationStatic, Bees, Bee, Consumers, Consumer, BundleDependencies, BundleDependency, GlobalBundles, GlobalBundle, Bundle, Packagers, PackagerCompilers, PackagerCompiler, Packager, Dashboard, Declarations, Declaration, Libraries, Library, LibraryModules, LibraryModule, LibrariesStatics, LibrariesStatic, Modules, ModuleDeclarations, Module, ModuleStatics, ModuleStatic, ModuleTexts, ProcessorCompilers, ProcessorCompiler, ProcessorDependencies, ProcessorDependency, Processor, ProcessorOverwrites, ProcessorOverwrite, ProcessorSources, ProcessorSource, ReactiveModel, RunTimeError, RunTimeManager, TemplateApplication, TemplateApplicationsSources, TemplateApplicationsSource, TemplateGlobals, TemplateGlobal, TemplateGlobalSources, TemplateGlobalSource, Template, TemplateOverwrites, TemplateOverwrite, TemplateProcessor, TemplateProcessorsSources, TemplateProcessorsSource, TransversalDependencies, TransversalDependency; // Module exports

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
  _exports.ProcessorCompiler = ProcessorCompiler;
  _exports.ProcessorCompilers = ProcessorCompilers;
  _exports.ModuleTexts = ModuleTexts;
  _exports.ModuleStatic = ModuleStatic;
  _exports.ModuleStatics = ModuleStatics;
  _exports.Module = Module;
  _exports.ModuleDeclarations = ModuleDeclarations;
  _exports.Modules = Modules;
  _exports.LibrariesStatic = LibrariesStatic;
  _exports.LibrariesStatics = LibrariesStatics;
  _exports.LibraryModule = LibraryModule;
  _exports.LibraryModules = LibraryModules;
  _exports.Library = Library;
  _exports.Libraries = Libraries;
  _exports.Declaration = Declaration;
  _exports.Declarations = Declarations;
  _exports.Dashboard = Dashboard;
  _exports.Packager = Packager;
  _exports.PackagerCompiler = PackagerCompiler;
  _exports.PackagerCompilers = PackagerCompilers;
  _exports.Packagers = Packagers;
  _exports.Bundle = Bundle;
  _exports.GlobalBundle = GlobalBundle;
  _exports.GlobalBundles = GlobalBundles;
  _exports.BundleDependency = BundleDependency;
  _exports.BundleDependencies = BundleDependencies;
  _exports.Consumer = Consumer;
  _exports.Consumers = Consumers;
  _exports.Bee = Bee;
  _exports.Bees = Bees;
  _exports.ApplicationStatic = ApplicationStatic;
  _exports.ApplicationStatics = ApplicationStatics;
  _exports.ApplicationModule = ApplicationModule;
  _exports.ApplicationModules = ApplicationModules;
  _exports.ApplicationLibrary = ApplicationLibrary;
  _exports.ApplicationLibraries = ApplicationLibraries;
  _exports.Application = Application;
  _exports.ApplicationDeployment = ApplicationDeployment;
  _exports.DistributionLauncher = DistributionLauncher;
  _exports.ApplicationDistribution = ApplicationDistribution;
  _exports.ApplicationDistributions = ApplicationDistributions;
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
    (require || prop === 'ApplicationDistributions') && (_exports.ApplicationDistributions = ApplicationDistributions = require ? require('./applications/deployments/distributions/collection').ApplicationDistributions : value);
    (require || prop === 'ApplicationDistribution') && (_exports.ApplicationDistribution = ApplicationDistribution = require ? require('./applications/deployments/distributions/item').ApplicationDistribution : value);
    (require || prop === 'DistributionLauncher') && (_exports.DistributionLauncher = DistributionLauncher = require ? require('./applications/deployments/distributions/launchers/item').DistributionLauncher : value);
    (require || prop === 'ApplicationDeployment') && (_exports.ApplicationDeployment = ApplicationDeployment = require ? require('./applications/deployments/item').ApplicationDeployment : value);
    (require || prop === 'Application') && (_exports.Application = Application = require ? require('./applications/item').Application : value);
    (require || prop === 'ApplicationLibraries') && (_exports.ApplicationLibraries = ApplicationLibraries = require ? require('./applications/libraries/collection').ApplicationLibraries : value);
    (require || prop === 'ApplicationLibrary') && (_exports.ApplicationLibrary = ApplicationLibrary = require ? require('./applications/libraries/item').ApplicationLibrary : value);
    (require || prop === 'ApplicationModules') && (_exports.ApplicationModules = ApplicationModules = require ? require('./applications/modules/collection').ApplicationModules : value);
    (require || prop === 'ApplicationModule') && (_exports.ApplicationModule = ApplicationModule = require ? require('./applications/modules/item').ApplicationModule : value);
    (require || prop === 'ApplicationStatics') && (_exports.ApplicationStatics = ApplicationStatics = require ? require('./applications/static/collection').ApplicationStatics : value);
    (require || prop === 'ApplicationStatic') && (_exports.ApplicationStatic = ApplicationStatic = require ? require('./applications/static/item').ApplicationStatic : value);
    (require || prop === 'Bees') && (_exports.Bees = Bees = require ? require('./bees/collection').Bees : value);
    (require || prop === 'Bee') && (_exports.Bee = Bee = require ? require('./bees/item').Bee : value);
    (require || prop === 'Consumers') && (_exports.Consumers = Consumers = require ? require('./bundles/consumers/collection').Consumers : value);
    (require || prop === 'Consumer') && (_exports.Consumer = Consumer = require ? require('./bundles/consumers/item').Consumer : value);
    (require || prop === 'BundleDependencies') && (_exports.BundleDependencies = BundleDependencies = require ? require('./bundles/dependencies/collection').BundleDependencies : value);
    (require || prop === 'BundleDependency') && (_exports.BundleDependency = BundleDependency = require ? require('./bundles/dependencies/item').BundleDependency : value);
    (require || prop === 'GlobalBundles') && (_exports.GlobalBundles = GlobalBundles = require ? require('./bundles/globals/collection').GlobalBundles : value);
    (require || prop === 'GlobalBundle') && (_exports.GlobalBundle = GlobalBundle = require ? require('./bundles/globals/item').GlobalBundle : value);
    (require || prop === 'Bundle') && (_exports.Bundle = Bundle = require ? require('./bundles/item').Bundle : value);
    (require || prop === 'Packagers') && (_exports.Packagers = Packagers = require ? require('./bundles/packagers/collection').Packagers : value);
    (require || prop === 'PackagerCompilers') && (_exports.PackagerCompilers = PackagerCompilers = require ? require('./bundles/packagers/compilers/collection').PackagerCompilers : value);
    (require || prop === 'PackagerCompiler') && (_exports.PackagerCompiler = PackagerCompiler = require ? require('./bundles/packagers/compilers/item').PackagerCompiler : value);
    (require || prop === 'Packager') && (_exports.Packager = Packager = require ? require('./bundles/packagers/item').Packager : value);
    (require || prop === 'Dashboard') && (_exports.Dashboard = Dashboard = require ? require('./dashboard/model').Dashboard : value);
    (require || prop === 'Declarations') && (_exports.Declarations = Declarations = require ? require('./declarations/collection').Declarations : value);
    (require || prop === 'Declaration') && (_exports.Declaration = Declaration = require ? require('./declarations/item').Declaration : value);
    (require || prop === 'Libraries') && (_exports.Libraries = Libraries = require ? require('./libraries/collection').Libraries : value);
    (require || prop === 'Library') && (_exports.Library = Library = require ? require('./libraries/item').Library : value);
    (require || prop === 'LibraryModules') && (_exports.LibraryModules = LibraryModules = require ? require('./libraries/modules/collection').LibraryModules : value);
    (require || prop === 'LibraryModule') && (_exports.LibraryModule = LibraryModule = require ? require('./libraries/modules/item').LibraryModule : value);
    (require || prop === 'LibrariesStatics') && (_exports.LibrariesStatics = LibrariesStatics = require ? require('./libraries/static/collection').LibrariesStatics : value);
    (require || prop === 'LibrariesStatic') && (_exports.LibrariesStatic = LibrariesStatic = require ? require('./libraries/static/item').LibrariesStatic : value);
    (require || prop === 'Modules') && (_exports.Modules = Modules = require ? require('./modules/collection').Modules : value);
    (require || prop === 'ModuleDeclarations') && (_exports.ModuleDeclarations = ModuleDeclarations = require ? require('./modules/declarations').ModuleDeclarations : value);
    (require || prop === 'Module') && (_exports.Module = Module = require ? require('./modules/item').Module : value);
    (require || prop === 'ModuleStatics') && (_exports.ModuleStatics = ModuleStatics = require ? require('./modules/static/collection').ModuleStatics : value);
    (require || prop === 'ModuleStatic') && (_exports.ModuleStatic = ModuleStatic = require ? require('./modules/static/item').ModuleStatic : value);
    (require || prop === 'ModuleTexts') && (_exports.ModuleTexts = ModuleTexts = require ? require('./modules/texts').ModuleTexts : value);
    (require || prop === 'ProcessorCompilers') && (_exports.ProcessorCompilers = ProcessorCompilers = require ? require('./processors/compilers/collection').ProcessorCompilers : value);
    (require || prop === 'ProcessorCompiler') && (_exports.ProcessorCompiler = ProcessorCompiler = require ? require('./processors/compilers/item').ProcessorCompiler : value);
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

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUgyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ0poRDtNQUVPOzs7TUFBVSxNQUNYa1YscUJBRFcsU0FDbUJuVCxVQURuQixDQUN1QjtRQUM5QixJQUFGbkQsRUFBRTtVQUNGLE9BQU8sS0FBS2dCLE1BQUwsQ0FBWW5CLEdBQVosQ0FBZ0IsSUFBaEIsRUFBc0JrQixLQUE3QjtRQUNIOztRQUVEL0IsWUFBWW9DLEtBQVpwQyxFQUE0QjtVQUN4QixNQUFNLDBCQUFOLEVBQWtDb0MsS0FBbEM7UUFDSDs7TUFQbUM7Ozs7Ozs7Ozs7Ozs7O01DSHhDOztNQUNBOztNQUVBLE1BQU1BLEtBQUssR0FBZSxFQUExQjtNQUVBQSxLQUFLLENBQUNWLE1BQU5VLEdBQWVWLHNCQUFmVTtNQUNBQSxLQUFLLENBQUNrRSxLQUFObEUsR0FBYyxLQUFkQTtNQUVBQSxLQUFLLENBQUNKLE1BQU5JLEdBQWUsQ0FDWCxJQURXLENBQWZBO01BR0FBLEtBQUssQ0FBQ21FLEtBQU5uRSxHQUFjO1FBQ1ZvRSxPQUFPLEVBQUU7VUFDTFUsSUFBSSxFQUFFLCtCQUREO1VBRUxULElBQUksRUFBRTtRQUZEO01BREMsQ0FBZHJFO01BTUFBLEtBQUssQ0FBQ3NFLE9BQU50RSxHQUFnQjtRQUNacEIsRUFBRSxFQUFFO1VBQ0FnQixNQUFNLEVBQUUsQ0FBQyxJQUFELENBRFI7VUFFQTJFLE9BQU8sRUFBRTtRQUZUO01BRFEsQ0FBaEJ2RTs7TUFPQXdFLGFBQU9DLFFBQVBELENBQWdCLDBCQUFoQkEsRUFBNEN4RSxLQUE1Q3dFIiwibmFtZXMiOlsiQXBwbGljYXRpb25CdWlsZGVyIiwiRXZlbnRzIiwiYnVpbGRzIiwibWVzc2FnZXMiLCJwcm9jZXNzaW5nIiwiZmV0Y2hpbmciLCJjb21wbGV0ZWQiLCJjb25zdHJ1Y3RvciIsImFwcGxpY2F0aW9uIiwiQXBwbGljYXRpb25CdWlsZHMiLCJvbk1lc3NhZ2UiLCJtZXNzYWdlIiwidHlwZSIsInB1c2giLCJjb25zb2xlIiwibG9nIiwidHJpZ2dlciIsInByZXBhcmUiLCJiYWNrZW5kIiwiYmFja2VuZHMiLCJnZXQiLCJzb2NrZXQiLCJvbiIsImlkIiwiZXhjIiwiZXJyb3IiLCJzdGFjayIsImJ1aWxkIiwiZGlzdHJpYnV0aW9uIiwiRXJyb3IiLCJlbnZpcm9ubWVudCIsImluY2x1ZGVzIiwidGV4dCIsIm1vZHVsZSIsImV4ZWN1dGUiLCJwYXRoIiwibmFtZSIsImNsZWFuIiwidmFsdWUiLCJmaWVsZHMiLCJhc3NpZ25lZCIsIkFwcGxpY2F0aW9ucyIsIkNvbGxlY3Rpb24iLCJzcGVjcyIsIkFwcGxpY2F0aW9uIiwiQXBwbGljYXRpb25EZWNsYXJhdGlvbnMiLCJSZWFjdGl2ZU1vZGVsIiwidG90YWwiLCJpdGVtc1Byb2Nlc3NlZCIsIm9uUHJvY2VzcyIsIlNldCIsInN1Y2Nlc3MiLCJlcnJvcnMiLCJjbGVhciIsInByb2Nlc3NlZCIsInRyaWdnZXJFdmVudCIsIm9uRGVjbGFyYXRpb25TYXZlIiwiaXRlbSIsInZhbGlkIiwiYWRkIiwic2l6ZSIsImluaXRpYWxpc2UiLCJjYXRjaCIsImJpbmQiLCJ1cGRhdGUiLCJ3YXJuIiwiYWN0aW9uIiwiYXBwbGljYXRpb25JZCIsInJlc3BvbnNlIiwiQXBwbGljYXRpb25EZXBsb3ltZW50cyIsIkFwcGxpY2F0aW9uRGVwbG95bWVudCIsIkFwcGxpY2F0aW9uRGlzdHJpYnV0aW9ucyIsIkFwcGxpY2F0aW9uRGlzdHJpYnV0aW9uIiwiT2JqZWN0IiwiSXRlbSIsImxvY2FsIiwic3NyIiwicG9ydCIsInBvcnRzIiwiYW1kIiwidHMiLCJwbGF0Zm9ybSIsImNvbXByZXNzIiwiZGVmYXVsdCIsIm5wbSIsIm1pbmlmeSIsImJ1bmRsZXMiLCJsYXVuY2hlciIsInByb3BlcnRpZXMiLCJ2YWx1ZXMiLCJjaGVja1BvcnQiLCJ2YWxpZGF0ZSIsImh0dHAiLCJpc05hTiIsInBhcnNlSW50IiwidW5kZWZpbmVkIiwiaW5zcGVjdCIsImh0bWwiLCJjc3MiLCJqcyIsIm1vZGUiLCJzZXRWYWx1ZXMiLCJuZXdWYWx1ZXMiLCJEaXN0cmlidXRpb25MYXVuY2hlciIsInN0YXR1cyIsInBpZCIsInN0YXJ0Iiwic3RvcCIsInJlc3RhcnQiLCJjYWNoZSIsImJhdGNoIiwiYWN0aW9ucyIsImRhdGEiLCJpbmRpY2VzIiwicHJpbWFyeSIsInRhYmxlcyIsInJlZ2lzdGVyIiwidGFibGUiLCJpZGVudGlmaWVyIiwiZmllbGQiLCJzb3VyY2UiLCJsaXN0IiwiZGlzdHJpYnV0aW9ucyIsImFkZERpc3RyaWJ1dGlvbiIsInBhcmFtcyIsImUiLCJJdGVtcyIsIkZpbGUiLCJzY29wZSIsInNwZWNpZmllciIsInZzcGVjaWZpZXIiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZGV2ZWxvcGVyIiwidmVyc2lvbiIsImNvbm5lY3QiLCJob3N0cyIsIm1vZHVsZXNQYXRoIiwid2FybmluZ3MiLCJhbSIsImxpYnJhcmllcyIsImJlZXMiLCJ0ZW1wbGF0ZSIsImRlcGxveW1lbnQiLCJzdGF0aWMiLCJzdGF0aWNzIiwiYnVpbGRlciIsInNlcnZlcnMiLCJkZWZhdWx0U2VydmVyIiwiZmluZCIsInNlcnZlciIsImRlY2xhcmF0aW9ucyIsInVybCIsImV2ZW50Iiwibm9kZSIsImNoZWNrU3RhdGljIiwiY3JlYXRlQmFja2VuZCIsImVkaXQiLCJyb3V0ZXMiLCJpdGVtcyIsImZvckVhY2giLCJidW5kbGUiLCJyb3V0ZSIsIkFwcGxpY2F0aW9uTGlicmFyaWVzIiwiQXBwbGljYXRpb25MaWJyYXJ5IiwiY291bnRlcnMiLCJsaWJyYXJ5Iiwib25DaGFuZ2UiLCJsYW5kZWQiLCJMaWJyYXJ5QnVpbGRlciIsIm9mZiIsIkxpYnJhcnkiLCJjb3VudCIsImFwcGxpY2F0aW9ucyIsImJhdGNoZXMiLCJBcHBsaWNhdGlvbk1vZHVsZUJ1bmRsZSIsIm1vZHVsZUlkIiwiaGFzVHh0IiwiaGFzIiwiQXBwbGljYXRpb25Nb2R1bGVzIiwiQXBwbGljYXRpb25Nb2R1bGUiLCJlbGVtZW50cyIsInRyZWUiLCJvdXRwdXQiLCJnZXRJdGVtcyIsImNvbnRhaW5lciIsImZpbHRlciIsImlzQXBwIiwiaXNMaWJyYXJ5IiwidGV4dFNlYXJjaCIsIndpZGdldCIsImdldEJ1bmRsZSIsIm1hcCIsIl9fQ0xBU1NfXyIsInRvTG93ZXJDYXNlIiwicHJvY2Vzc29yc05hbWVzIiwicHJvY2Vzc29ycyIsInByb2Nlc3NvciIsImhhdmVQcm9jZXNzb3IiLCJoYXNQcm9jZXNzb3IiLCJzYXZlRmllbGQiLCJkaXJuYW1lIiwiaG1yIiwidHJhbnNwaWxlIiwiY2xvbmUiLCJkZWxldGUiLCJ0YXJnZXQiLCJjcmVhdGVGaWxlIiwic3BsaXQiLCJmaWxlbmFtZSIsImFkZEJ1bmRsZSIsIk1vZHVsZSIsIkJ1bmRsZSIsIkJlZXMiLCJUZW1wbGF0ZSIsImltbXV0YWJsZSIsIkFwcGxpY2F0aW9uU3RhdGljcyIsInVuaXF1ZSIsIkFwcGxpY2F0aW9uU3RhdGljIiwiU291cmNlIiwiZmlsZSIsImJhc2VuYW1lIiwicmVsYXRpdmUiLCJleHRuYW1lIiwicGF0aG5hbWUiLCJTZXJ2aWNlQnVpbGRlciIsImJlZSIsIlNlcnZpY2VCdWlsZHMiLCJzZXJ2aWNlIiwiQmVlIiwiQ29uc3VtZXJzIiwiQ29uc3VtZXIiLCJidW5kbGVJZCIsIkJ1bmRsZURlcGVuZGVuY2llcyIsIkJ1bmRsZURlcGVuZGVuY3kiLCJHbG9iYWxCdW5kbGVzIiwiR2xvYmFsQnVuZGxlIiwibXVsdGlsYW5ndWFnZSIsInN1YnBhdGgiLCJyZXNvdXJjZSIsInBsYXRmb3JtcyIsImxheW91dCIsInVwZGF0ZWQiLCJkZXN0cm95ZWQiLCJlbGVtZW50IiwiTWFwIiwic2V0IiwicGFja2FnZXJzIiwiY29uc3VtZXJzIiwiY29tcGlsZXJQcm9jZXNzb3JBY3RpdmF0ZSIsInByb2Nlc3Nvck5hbWUiLCJQYWNrYWdlcnMiLCJQYWNrYWdlciIsIlBhY2thZ2VyQ29tcGlsZXJzIiwiUGFja2FnZXJDb21waWxlciIsImRpYWdub3N0aWNzIiwiZ2VuZXJhbCIsImZpbGVzIiwib3ZlcndyaXRlcyIsImRlcGVuZGVuY2llcyIsImRpc3RyaWJ1dGlvbklkIiwicHJvY2Vzc29yc05hbWUiLCJjb21waWxlciIsImNvbXBpbGVycyIsIlByb2Nlc3NvckNvbXBpbGVyIiwiUHJvY2Vzc29yIiwic2VsZWN0b3IiLCJhbUlkIiwic2xpY2UiLCJsZW5ndGgiLCJqb2luIiwiRGFzaGJvYXJkIiwicmVhZHkiLCJ3ZCIsInZhbGlkUG9ydCIsImdldFdEIiwiaGFzaCIsImNsZWFuQ2FjaGUiLCJhdmFpbGFibGVQb3J0IiwiaW50ZW50cyIsImNvbnQiLCJhdmFpbGFibGUiLCJEZWNsYXJhdGlvbnMiLCJEZWNsYXJhdGlvbiIsImNvZGUiLCJkZWxldGVGb2xkZXIiLCJmb2xkZXIiLCJMaWJyYXJpZXMiLCJtb2R1bGVzIiwib25SZWFkeSIsIkxpYnJhcnlNb2R1bGVzIiwiTGlicmFyeU1vZHVsZSIsIkxpYnJhcmllc1N0YXRpYyIsIkxpYnJhcmllc1N0YXRpY3MiLCJNb2R1bGVzIiwiTW9kdWxlRGVjbGFyYXRpb25zIiwicGFyZW50IiwidHUiLCJ0ZXh0cyIsIk1vZHVsZVRleHRzIiwiaW5zdGFsbERlcGVuZGVuY2llcyIsIk1vZHVsZVN0YXRpY3MiLCJpcyIsIk1vZHVsZVN0YXRpYyIsIm92ZXJ3cml0ZSIsInVwbG9hZCIsIm1vZHVsZU5hbWUiLCJvcmlnaW4iLCJwcm9wZXJ0eSIsImxhbmd1YWdlIiwiYiIsInNvdXJjZXMiLCJKU09OIiwicGFyc2UiLCJQcm9jZXNzb3JDb21waWxlcnMiLCJQcm9jZXNzb3JEZXBlbmRlbmNpZXMiLCJQcm9jZXNzb3JEZXBlbmRlbmN5IiwiZXh0ZXJuYWxzV2l0aEVycm9ycyIsImkiLCJraW5kIiwiZGVjbGFyYXRpb24iLCJhbGVydHMiLCJQcm9jZXNzb3JPdmVyd3JpdGVzIiwiUHJvY2Vzc29yT3ZlcndyaXRlIiwiUHJvY2Vzc29yU291cmNlcyIsIlByb2Nlc3NvclNvdXJjZSIsIl9yZWFkeSIsIl9mZXRjaGluZyIsIl9mZXRjaGVkIiwiZmV0Y2hlZCIsIl9wcm9jZXNzaW5nIiwiX3Byb2Nlc3NlZCIsIl9sb2FkZWQiLCJsb2FkZWQiLCJfc2V0IiwicHJvcHMiLCJwcm9wIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJnZXRQcm9wZXJ0aWVzIiwia2V5cyIsInJlcGxhY2UiLCJyZXBvcnRzIiwicmVhbHRpbWUiLCJyZWNvcmQiLCJpbnNlcnQiLCJSdW5UaW1lRXJyb3IiLCJ0cmFjZSIsInByb2Nlc3MiLCJzaGlmdCIsIm1ldGhvZCIsImRldGFpbCIsImxpbmUiLCJjb2x1bW4iLCJSdW5UaW1lTWFuYWdlciIsImFsbCIsIlNlcnZlckNvbmZpZyIsIl9mZXRjaCIsImZldGNoIiwiU2VydmVyIiwiY29uZmlnIiwiQmV5b25kU2VydmVyIiwiaXNGYXZvcml0ZSIsInNhdmUiLCJyZW5hbWUiLCJmb3JtYXQiLCJUZW1wbGF0ZUFwcGxpY2F0aW9uIiwiVGVtcGxhdGVBcHBsaWNhdGlvbnNTb3VyY2VzIiwiVGVtcGxhdGVBcHBsaWNhdGlvbnNTb3VyY2UiLCJUZW1wbGF0ZUdsb2JhbHMiLCJUZW1wbGF0ZUdsb2JhbCIsIlRlbXBsYXRlR2xvYmFsU291cmNlcyIsIlRlbXBsYXRlR2xvYmFsU291cmNlIiwiZ2xvYmFsIiwiVGVtcGxhdGVPdmVyd3JpdGVzIiwiVGVtcGxhdGVPdmVyd3JpdGUiLCJieUFwcGxpY2F0aW9uIiwiVGVtcGxhdGVQcm9jZXNzb3IiLCJUZW1wbGF0ZVByb2Nlc3NvcnNTb3VyY2VzIiwiVGVtcGxhdGVQcm9jZXNzb3JzU291cmNlIiwiVHJhbnN2ZXJzYWxEZXBlbmRlbmNpZXMiLCJUcmFuc3ZlcnNhbERlcGVuZGVuY3kiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvYXBwbGljYXRpb25zL2J1aWxkZXIvYnVpbGRlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvYXBwbGljYXRpb25zL2J1aWxkZXIvYnVpbGRzLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9hcHBsaWNhdGlvbnMvY29sbGVjdGlvbi50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvYXBwbGljYXRpb25zL2RlY2xhcmF0aW9ucy50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvYXBwbGljYXRpb25zL2RlcGxveW1lbnRzL2NvbGxlY3Rpb24udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2FwcGxpY2F0aW9ucy9kZXBsb3ltZW50cy9kaXN0cmlidXRpb25zL2NvbGxlY3Rpb24udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2FwcGxpY2F0aW9ucy9kZXBsb3ltZW50cy9kaXN0cmlidXRpb25zL2ludGVyZmFjZXMvcG9ydHMtcmVzcG9uc2UudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2FwcGxpY2F0aW9ucy9kZXBsb3ltZW50cy9kaXN0cmlidXRpb25zL2ludGVyZmFjZXMvcG9ydHMudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2FwcGxpY2F0aW9ucy9kZXBsb3ltZW50cy9kaXN0cmlidXRpb25zL2l0ZW0udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2FwcGxpY2F0aW9ucy9kZXBsb3ltZW50cy9kaXN0cmlidXRpb25zL2xhdW5jaGVycy9pdGVtLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9hcHBsaWNhdGlvbnMvZGVwbG95bWVudHMvZGlzdHJpYnV0aW9ucy9sYXVuY2hlcnMvcmVnaXN0ZXIudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2FwcGxpY2F0aW9ucy9kZXBsb3ltZW50cy9kaXN0cmlidXRpb25zL3JlZ2lzdGVyLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9hcHBsaWNhdGlvbnMvZGVwbG95bWVudHMvaXRlbS50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvYXBwbGljYXRpb25zL2RlcGxveW1lbnRzL3JlZ2lzdGVyLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9hcHBsaWNhdGlvbnMvaXRlbS50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvYXBwbGljYXRpb25zL2xpYnJhcmllcy9jb2xsZWN0aW9uLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9hcHBsaWNhdGlvbnMvbGlicmFyaWVzL2l0ZW0udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2FwcGxpY2F0aW9ucy9saWJyYXJpZXMvcmVnaXN0ZXIudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2FwcGxpY2F0aW9ucy9tb2R1bGVzL2J1bmRsZS50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvYXBwbGljYXRpb25zL21vZHVsZXMvY29sbGVjdGlvbi50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvYXBwbGljYXRpb25zL21vZHVsZXMvaXRlbS50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvYXBwbGljYXRpb25zL21vZHVsZXMvcmVnaXN0ZXIudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2FwcGxpY2F0aW9ucy9yZWdpc3Rlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvYXBwbGljYXRpb25zL3N0YXRpYy9jb2xsZWN0aW9uLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9hcHBsaWNhdGlvbnMvc3RhdGljL2l0ZW0udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2FwcGxpY2F0aW9ucy9zdGF0aWMvcmVnaXN0ZXIudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2JlZXMvYnVpbGRlci9idWlsZGVyLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9iZWVzL2J1aWxkZXIvYnVpbGRzLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9iZWVzL2NvbGxlY3Rpb24udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2JlZXMvaXRlbS50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvYmVlcy9yZWdpc3Rlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvYnVuZGxlcy9jb25zdW1lcnMvY29sbGVjdGlvbi50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvYnVuZGxlcy9jb25zdW1lcnMvaXRlbS50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvYnVuZGxlcy9jb25zdW1lcnMvcmVnaXN0ZXIudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2J1bmRsZXMvZGVwZW5kZW5jaWVzL2NvbGxlY3Rpb24udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2J1bmRsZXMvZGVwZW5kZW5jaWVzL2l0ZW0udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2J1bmRsZXMvZGVwZW5kZW5jaWVzL3JlZ2lzdGVyLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9idW5kbGVzL2dsb2JhbHMvY29sbGVjdGlvbi50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvYnVuZGxlcy9nbG9iYWxzL2l0ZW0udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2J1bmRsZXMvZ2xvYmFscy9yZWdpc3Rlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvYnVuZGxlcy9pdGVtLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9idW5kbGVzL3BhY2thZ2Vycy9jb2xsZWN0aW9uLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9idW5kbGVzL3BhY2thZ2Vycy9jb21waWxlcnMvY29sbGVjdGlvbi50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvYnVuZGxlcy9wYWNrYWdlcnMvY29tcGlsZXJzL2l0ZW0udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2J1bmRsZXMvcGFja2FnZXJzL2NvbXBpbGVycy9yZWdpc3Rlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvYnVuZGxlcy9wYWNrYWdlcnMvaXRlbS50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvYnVuZGxlcy9wYWNrYWdlcnMvcmVnaXN0ZXIudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2J1bmRsZXMvcmVnaXN0ZXIudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2Rhc2hib2FyZC9tb2RlbC50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvZGVjbGFyYXRpb25zL2NvbGxlY3Rpb24udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2RlY2xhcmF0aW9ucy9pdGVtLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9kZWNsYXJhdGlvbnMvcmVnaXN0ZXIudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2ZpbGUvZmlsZS50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvbGlicmFyaWVzL2J1aWxkZXIudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2xpYnJhcmllcy9jb2xsZWN0aW9uLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9saWJyYXJpZXMvaXRlbS50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvbGlicmFyaWVzL21vZHVsZXMvY29sbGVjdGlvbi50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvbGlicmFyaWVzL21vZHVsZXMvaXRlbS50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvbGlicmFyaWVzL21vZHVsZXMvcmVnaXN0ZXIudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2xpYnJhcmllcy9yZWdpc3Rlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvbGlicmFyaWVzL3N0YXRpYy9jb2xsZWN0aW9uLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9saWJyYXJpZXMvc3RhdGljL2l0ZW0udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L2xpYnJhcmllcy9zdGF0aWMvcmVnaXN0ZXIudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L21vZHVsZXMvY29sbGVjdGlvbi50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvbW9kdWxlcy9kZWNsYXJhdGlvbnMudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L21vZHVsZXMvaXRlbS50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvbW9kdWxlcy9yZWdpc3Rlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvbW9kdWxlcy9zdGF0aWMvY29sbGVjdGlvbi50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvbW9kdWxlcy9zdGF0aWMvaXRlbS50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvbW9kdWxlcy9zdGF0aWMvcmVnaXN0ZXIudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L21vZHVsZXMvdGV4dHMudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L3Byb2Nlc3NvcnMvY29tcGlsZXJzL2NvbGxlY3Rpb24udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L3Byb2Nlc3NvcnMvY29tcGlsZXJzL2l0ZW0udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L3Byb2Nlc3NvcnMvY29tcGlsZXJzL3JlZ2lzdGVyLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9wcm9jZXNzb3JzL2RlcGVuZGVuY2llcy9jb2xsZWN0aW9uLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9wcm9jZXNzb3JzL2RlcGVuZGVuY2llcy9pdGVtLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9wcm9jZXNzb3JzL2RlcGVuZGVuY2llcy9yZWdpc3Rlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvcHJvY2Vzc29ycy9pdGVtLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9wcm9jZXNzb3JzL292ZXJ3cml0ZXMvY29sbGVjdGlvbi50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvcHJvY2Vzc29ycy9vdmVyd3JpdGVzL2l0ZW0udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L3Byb2Nlc3NvcnMvb3ZlcndyaXRlcy9yZWdpc3Rlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvcHJvY2Vzc29ycy9yZWdpc3Rlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvcHJvY2Vzc29ycy9zb3VyY2VzL2NvbGxlY3Rpb24udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L3Byb2Nlc3NvcnMvc291cmNlcy9pdGVtLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9wcm9jZXNzb3JzL3NvdXJjZXMvcmVnaXN0ZXIudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L3JlYWN0aXZlLW1vZGVsLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9yZWFsdGltZS9yZWFsdGltZS50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvcnVuLXRpbWUvaXRlbS50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvcnVuLXRpbWUvbWFuYWdlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvc2VydmVyL2NvbmZpZy50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvc2VydmVyL3NlcnZlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvc291cmNlcy9zb3VyY2UudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L3RlbXBsYXRlcy9hcHBsaWNhdGlvbnMvaXRlbS50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvdGVtcGxhdGVzL2FwcGxpY2F0aW9ucy9yZWdpc3Rlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvdGVtcGxhdGVzL2FwcGxpY2F0aW9ucy9zb3VyY2VzL2NvbGxlY3Rpb24udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L3RlbXBsYXRlcy9hcHBsaWNhdGlvbnMvc291cmNlcy9pdGVtLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC90ZW1wbGF0ZXMvYXBwbGljYXRpb25zL3NvdXJjZXMvcmVnaXN0ZXIudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L3RlbXBsYXRlcy9nbG9iYWwvY29sbGVjdGlvbi50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvdGVtcGxhdGVzL2dsb2JhbC9pdGVtLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC90ZW1wbGF0ZXMvZ2xvYmFsL3JlZ2lzdGVyLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC90ZW1wbGF0ZXMvZ2xvYmFsL3NvdXJjZXMvY29sbGVjdGlvbi50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvdGVtcGxhdGVzL2dsb2JhbC9zb3VyY2VzL2l0ZW0udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L3RlbXBsYXRlcy9nbG9iYWwvc291cmNlcy9yZWdpc3Rlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvdGVtcGxhdGVzL2l0ZW0udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L3RlbXBsYXRlcy9vdmVyd3JpdGVzL2NvbGxlY3Rpb24udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L3RlbXBsYXRlcy9vdmVyd3JpdGVzL2l0ZW0udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L3RlbXBsYXRlcy9vdmVyd3JpdGVzL3JlZ2lzdGVyLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC90ZW1wbGF0ZXMvcHJvY2Vzc29ycy9pdGVtLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC90ZW1wbGF0ZXMvcHJvY2Vzc29ycy9yZWdpc3Rlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvdGVtcGxhdGVzL3Byb2Nlc3NvcnMvc291cmNlcy9jb2xsZWN0aW9uLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC90ZW1wbGF0ZXMvcHJvY2Vzc29ycy9zb3VyY2VzL2l0ZW0udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L3RlbXBsYXRlcy9wcm9jZXNzb3JzL3NvdXJjZXMvcmVnaXN0ZXIudHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L3RlbXBsYXRlcy9yZWdpc3Rlci50cyIsIndvcmtzcGFjZS9pbnNwZWN0L21vZGVscy9jbGllbnQvdHJhbnN2ZXJzYWwvZGVwZW5kZW5jaWVzL2NvbGxlY3Rpb24udHMiLCJ3b3Jrc3BhY2UvaW5zcGVjdC9tb2RlbHMvY2xpZW50L3RyYW5zdmVyc2FsL2RlcGVuZGVuY2llcy9pdGVtLnRzIiwid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC90cmFuc3ZlcnNhbC9kZXBlbmRlbmNpZXMvcmVnaXN0ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==