define(["exports", "module", "@beyond-js/kernel@0.1.4/bundle", "@beyond-js/kernel@0.1.4/core"], function (_exports, _amd_module, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.backends = _exports.__beyond_pkg = _exports.Backend = _exports.ActionsBridge = void 0;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/kernel", "0.1.4"], ["@beyond-js/local", "0.1.2"], ["socket.io", "4.5.4"], ["socket.io-client", "4.5.4"], ["@beyond-js/backend", "0.1.2"], ["@beyond-js/dashboard", "1.0.2"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/backend@0.1.2/client"
    },
    "type": "ts"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['@beyond-js/kernel/core', dependency_1]]);
  const {
    module
  } = __pkg.bundle;
  const ims = new Map();

  /*******************************
  INTERNAL MODULE: ./action/bridge
  *******************************/

  ims.set('./action/bridge', {
    hash: 2081575659,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ActionsBridge = void 0;
      var _ = require("./");
      /*bundle*/
      class ActionsBridge {
        #distribution;
        #bundle;
        #backend;
        constructor(distribution, bundle) {
          this.#distribution = distribution;
          this.#bundle = bundle.specifier;
          this.#backend = `${bundle.module.pkg}/${this.#distribution}`;
        }
        async execute(action, ...params) {
          const a = new _.default(this.#backend, this.#bundle, action, ...params);
          return await a.execute();
        }
      }
      exports.ActionsBridge = ActionsBridge;
    }
  });

  /****************************************
  INTERNAL MODULE: ./action/execution-error
  ****************************************/

  ims.set('./action/execution-error', {
    hash: 3368390780,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ExecutionError = void 0;
      const ExecutionError = class {
        #message;
        get message() {
          return this.#message;
        }
        #stack;
        get stack() {
          return this.#stack;
        }
        constructor(message, stack) {
          this.#message = message;
          this.#stack = stack;
        }
      };
      exports.ExecutionError = ExecutionError;
    }
  });

  /******************************
  INTERNAL MODULE: ./action/index
  ******************************/

  ims.set('./action/index', {
    hash: 2047620412,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _core = require("@beyond-js/kernel/core");
      var _backends = require("../backends");
      var _executionError = require("./execution-error");
      let autoincrement = 0;
      class _default extends _core.Events {
        #pkg;
        #request;
        #module;
        get module() {
          return this.#module;
        }
        #action;
        get action() {
          return this.#action;
        }
        #params;
        get params() {
          return this.#params;
        }
        constructor(backend, module, action, ...params) {
          super();
          const id = this.#id;
          const pkg = this.#pkg = (() => {
            const split = backend.split('/');
            split.pop(); // Remove the distribution name
            return split.join('/');
          })();
          this.#module = module;
          this.#action = action;
          this.#params = params;
          this.#request = {
            id,
            pkg,
            module,
            action,
            params
          };
        }
        #id = ++autoincrement;
        get id() {
          return this.#id;
        }
        #channel = `response-v2-${this.#id}`;
        get channel() {
          return this.#channel;
        }
        #executed = false;
        get executed() {
          return this.#executed;
        }
        #executing = false;
        get executing() {
          return this.#executing;
        }
        #error = false;
        get error() {
          return this.#error;
        }
        #timer;
        #attempts = 0;
        #promise = new _core.PendingPromise();
        #send = socket => {
          this.#attempts && this.trigger('retrying', this.#attempts);
          this.#attempts++;
          try {
            socket.emit('rpc-v2', this.#request);
          } catch (exc) {
            this.#executing = false;
            this.#executed = true;
            this.#error = true;
            this.#promise.reject(exc);
          }
        };
        async execute() {
          if (this.#executing || this.#executed) return this.#promise;
          this.#executing = true;
          const backend = await _backends.backends.get(this.#pkg);
          if (!backend) throw new Error(`Project "${this.#pkg}" does not have a backend configured`);
          try {
            const socket = await backend.socket;
            if (!socket) {
              const message = `Error getting socket on "${backend.pkg}" backend. `;
              this.#promise.reject(new Error(message));
              return;
            }
            const onresponse = response => {
              this.#executed = true;
              this.#executing = false;
              clearTimeout(this.#timer);
              socket.off(this.#channel, onresponse);
              const {
                error,
                message,
                source,
                processingTime
              } = response;
              void source; // source can be 'server' or 'cache'
              void processingTime;
              error ? this.#promise.reject(new _executionError.ExecutionError(error.message, error.stack)) : this.#promise.resolve(message);
            };
            socket.on(this.#channel, onresponse);
            this.#send(socket);
          } catch (exc) {
            this.#promise.reject(exc);
            return;
          }
          return this.#promise;
        }
      }
      exports.default = _default;
    }
  });

  /*************************
  INTERNAL MODULE: ./backend
  *************************/

  ims.set('./backend', {
    hash: 486330626,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Backend = void 0;
      var _io = require("./io");
      var _socket = require("./socket");
      /*bundle*/
      class Backend {
        #pkg;
        get pkg() {
          return this.#pkg;
        }
        #host;
        get host() {
          return this.#host;
        }
        #local;
        get local() {
          return this.#local;
        }
        #socket;
        #io = new _io.ServiceIOConfiguration();
        get io() {
          return this.#io;
        }
        constructor(pkg, host, local) {
          this.#pkg = pkg;
          this.#host = host;
          this.#local = local;
          this.#socket = new _socket.default(this);
        }
        get socket() {
          return this.#socket.get();
        }
      }
      exports.Backend = Backend;
    }
  });

  /**************************
  INTERNAL MODULE: ./backends
  **************************/

  ims.set('./backends', {
    hash: 1705909413,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.backends = void 0;
      var _backend = require("./backend");
      /*bundle*/
      const backends = new class {
        #hosts = new Map();
        register(pkg, host) {
          !this.#hosts.has(pkg) && this.#hosts.set(pkg, new _backend.Backend(pkg, host));
        }
        async get(pkg) {
          if (this.#hosts.has(pkg)) return this.#hosts.get(pkg);
          try {
            const {
              backend: config
            } = (await bimport(`${pkg}/config`)).default;
            if (!config) {
              console.log(`Backend configuration not set on package "${pkg}"`);
              this.#hosts.set(pkg, void 0);
              return;
            }
            const {
              host,
              local
            } = config;
            // Due to the get method is asynchronous, check if host is already set
            if (this.#hosts.has(pkg)) return this.#hosts.get(pkg);
            const backend = new _backend.Backend(pkg, host, local);
            this.#hosts.set(pkg, backend);
            return this.#hosts.get(pkg);
          } catch (exc) {
            console.log(`Error importing package "${pkg}" configuration: ${exc.message}`);
            this.#hosts.set(pkg, void 0);
          }
        }
        /**
         * @deprecated Actually used by the legacy module.execute(...)
         *
         * @param {string} pkg
         * @param {string} distribution
         * @param {string} module
         * @param {string} action
         * @param params
         * @return {Promise<*>}
         */
        async execute(pkg, distribution, module, action, ...params) {
          const a = new (require('./action').default)(`${pkg}/${distribution}`, module, action, ...params);
          return await a.execute();
        }
      }();
      exports.backends = backends;
    }
  });

  /********************
  INTERNAL MODULE: ./io
  ********************/

  ims.set('./io', {
    hash: 2941830475,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ServiceIOConfiguration = void 0;
      class ServiceIOConfiguration {
        querystring;
      }
      exports.ServiceIOConfiguration = ServiceIOConfiguration;
    }
  });

  /******************************
  INTERNAL MODULE: ./socket/index
  ******************************/

  ims.set('./socket/index', {
    hash: 1119353765,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _core = require("@beyond-js/kernel/core");
      var _initiator = require("./initiator");
      var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      class default_1 {
        #backend;
        #initiator;
        #socket;
        constructor(backend) {
          this.#backend = backend;
          this.#initiator = new _initiator.default(backend);
        }
        async get() {
          if (this.#socket) return this.#socket;
          const backend = this.#backend;
          const {
            pkg
          } = backend;
          // Check if the service is running. Start it if it is not
          pkg !== '@beyond-js/local' && (await this.#initiator.check());
          const {
            io
          } = await bimport('socket.io-client');
          let query = backend.io.querystring && (await backend.io.querystring());
          const {
            host
          } = this.#backend;
          return this.#socket = io(host, {
            transports: ['websocket'],
            'query': query
          });
        }
      }
      exports.default = default_1;
      __decorate([_core.SingleCall], default_1.prototype, "get", null);
    }
  });

  /**********************************
  INTERNAL MODULE: ./socket/initiator
  **********************************/

  ims.set('./socket/initiator', {
    hash: 4260137755,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _core = require("@beyond-js/kernel/core");
      /**
       * Service launcher required only in local development environment
       */
      class _default {
        #backend;
        #local;
        constructor(backend) {
          this.#backend = backend;
        }
        #promise;
        #initialise = async () => {
          if (this.#promise) {
            await this.#promise;
            return;
          }
          this.#promise = new _core.PendingPromise();
          if (!this.#backend.local || this.#local) return;
          this.#local = (await bimport('@beyond-js/local/main')).local;
          this.#promise.resolve();
        };
        async check() {
          await this.#initialise();
          if (!this.#local) return;
          const {
            pkg,
            local
          } = this.#backend;
          const id = `${pkg}/${local}`;
          const launcher = this.#local.launchers.get(id);
          const status = await launcher.status;
          if (status === 'running') return;
          await launcher.start();
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
      }
      exports.default = _default;
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./action/bridge",
    "from": "ActionsBridge",
    "name": "ActionsBridge"
  }, {
    "im": "./backend",
    "from": "Backend",
    "name": "Backend"
  }, {
    "im": "./backends",
    "from": "backends",
    "name": "backends"
  }];
  let ActionsBridge, Backend, backends;

  // Module exports
  _exports.backends = backends;
  _exports.Backend = Backend;
  _exports.ActionsBridge = ActionsBridge;
  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'ActionsBridge') && (_exports.ActionsBridge = ActionsBridge = require ? require('./action/bridge').ActionsBridge : value);
    (require || prop === 'Backend') && (_exports.Backend = Backend = require ? require('./backend').Backend : value);
    (require || prop === 'backends') && (_exports.backends = backends = require ? require('./backends').backends : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTUYsUUFBUSxDQUFDRyxLQUFLLEVBQUU7VUFDdEIsTUFBTSxJQUFJQyxPQUFPLENBQUM3QixPQUFPLElBQUk4QixVQUFVLENBQUM5QixPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0Q7O01BQ0g5QiIsIm5hbWVzIjpbIkFjdGlvbnNCcmlkZ2UiLCJjb25zdHJ1Y3RvciIsImRpc3RyaWJ1dGlvbiIsImJ1bmRsZSIsInNwZWNpZmllciIsIm1vZHVsZSIsInBrZyIsImV4ZWN1dGUiLCJhY3Rpb24iLCJwYXJhbXMiLCJhIiwiQWN0aW9uIiwiZXhwb3J0cyIsIkV4ZWN1dGlvbkVycm9yIiwibWVzc2FnZSIsInN0YWNrIiwiYXV0b2luY3JlbWVudCIsIkV2ZW50cyIsImJhY2tlbmQiLCJpZCIsInNwbGl0IiwicG9wIiwiam9pbiIsImNoYW5uZWwiLCJleGVjdXRlZCIsImV4ZWN1dGluZyIsImVycm9yIiwiUGVuZGluZ1Byb21pc2UiLCJzb2NrZXQiLCJ0cmlnZ2VyIiwiZW1pdCIsImV4YyIsInJlamVjdCIsImJhY2tlbmRzIiwiZ2V0IiwiRXJyb3IiLCJvbnJlc3BvbnNlIiwicmVzcG9uc2UiLCJjbGVhclRpbWVvdXQiLCJvZmYiLCJzb3VyY2UiLCJwcm9jZXNzaW5nVGltZSIsInJlc29sdmUiLCJvbiIsIkJhY2tlbmQiLCJob3N0IiwibG9jYWwiLCJTZXJ2aWNlSU9Db25maWd1cmF0aW9uIiwiaW8iLCJTb2NrZXQiLCJNYXAiLCJyZWdpc3RlciIsImhhcyIsInNldCIsImNvbmZpZyIsImJpbXBvcnQiLCJkZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInJlcXVpcmUiLCJxdWVyeXN0cmluZyIsIkluaXRpYXRvciIsImNoZWNrIiwicXVlcnkiLCJ0cmFuc3BvcnRzIiwiX19kZWNvcmF0ZSIsIlNpbmdsZUNhbGwiLCJsYXVuY2hlciIsImxhdW5jaGVycyIsInN0YXR1cyIsInN0YXJ0IiwiUHJvbWlzZSIsInNldFRpbWVvdXQiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImFjdGlvbi9icmlkZ2UudHMiLCJhY3Rpb24vZXhlY3V0aW9uLWVycm9yLnRzIiwiYWN0aW9uL2luZGV4LnRzIiwiYmFja2VuZC50cyIsImJhY2tlbmRzLnRzIiwiaW8udHMiLCJzb2NrZXQvaW5kZXgudHMiLCJzb2NrZXQvaW5pdGlhdG9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=