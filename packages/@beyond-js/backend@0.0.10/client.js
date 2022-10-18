define(["exports", "module", "@beyond-js/kernel@0.1.0/bundle", "@beyond-js/kernel@0.1.0/core"], function (_exports, _amd_module, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.backends = _exports.__beyond_pkg = _exports.Backend = _exports.ActionsBridge = void 0;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/kernel", "0.1.0"], ["@beyond-js/local", "0.0.1"], ["socket.io", "4.5.2"], ["socket.io-client", "4.5.2"], ["@beyond-js/backend", "0.0.10"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/backend@0.0.10/client"
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
            } = config; // Due to the get method is asynchronous, check if host is already set

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
          } = backend; // Check if the service is running. Start it if it is not

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
    hash: 1658962999,
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
  let ActionsBridge, Backend, backends; // Module exports

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFoQjtVQUVBLElBQUksQ0FBQyxLQUFLLFFBQUwsQ0FBY21CLEtBQWYsSUFBd0IsS0FBSyxNQUFqQyxFQUF5QztVQUN6QyxLQUFLLE1BQUwsR0FBMkIsQ0FBQyxNQUFNUyxPQUFPLENBQUMsdUJBQUQsQ0FBZCxFQUF5Q1QsS0FBcEU7VUFDQSxLQUFLLFFBQUwsQ0FBY0osT0FBZDtRQVRKOztRQVlXLE1BQUxvQixLQUFLO1VBQ1AsTUFBTSxLQUFLLFdBQUwsRUFBTjtVQUNBLElBQUksQ0FBQyxLQUFLLE1BQVYsRUFBa0I7VUFFbEIsTUFBTTtZQUFDdkQsR0FBRDtZQUFNdUM7VUFBTixJQUFlLEtBQUssUUFBMUI7VUFDQSxNQUFNM0IsRUFBRSxHQUFHLEdBQUdaLEdBQUcsSUFBSXVDLEtBQUssRUFBMUI7VUFDQSxNQUFNcUIsUUFBUSxHQUFHLEtBQUssTUFBTCxDQUFZQyxTQUFaLENBQXNCbEMsR0FBdEIsQ0FBMEJmLEVBQTFCLENBQWpCO1VBQ0EsTUFBTWtELE1BQU0sR0FBRyxNQUFNRixRQUFRLENBQUNFLE1BQTlCO1VBQ0EsSUFBSUEsTUFBTSxLQUFLLFNBQWYsRUFBMEI7VUFFMUIsTUFBTUYsUUFBUSxDQUFDRyxLQUFUSCxFQUFOO1VBQ0EsTUFBTSxJQUFJSSxPQUFKLENBQVk3QixPQUFPLElBQUk4QixVQUFVLENBQUM5QixPQUFELEVBQVUsSUFBVixDQUFqQyxDQUFOO1FBQ0g7O01BakNTIiwibmFtZXMiOlsiQWN0aW9uc0JyaWRnZSIsImNvbnN0cnVjdG9yIiwiZGlzdHJpYnV0aW9uIiwiYnVuZGxlIiwic3BlY2lmaWVyIiwibW9kdWxlIiwicGtnIiwiZXhlY3V0ZSIsImFjdGlvbiIsInBhcmFtcyIsImEiLCJBY3Rpb24iLCJFeGVjdXRpb25FcnJvciIsIm1lc3NhZ2UiLCJzdGFjayIsImF1dG9pbmNyZW1lbnQiLCJFdmVudHMiLCJiYWNrZW5kIiwiaWQiLCJzcGxpdCIsInBvcCIsImpvaW4iLCJjaGFubmVsIiwiZXhlY3V0ZWQiLCJleGVjdXRpbmciLCJlcnJvciIsIlBlbmRpbmdQcm9taXNlIiwic29ja2V0IiwidHJpZ2dlciIsImVtaXQiLCJleGMiLCJyZWplY3QiLCJiYWNrZW5kcyIsImdldCIsIkVycm9yIiwib25yZXNwb25zZSIsInJlc3BvbnNlIiwiY2xlYXJUaW1lb3V0Iiwib2ZmIiwic291cmNlIiwicHJvY2Vzc2luZ1RpbWUiLCJyZXNvbHZlIiwib24iLCJCYWNrZW5kIiwiaG9zdCIsImxvY2FsIiwiU2VydmljZUlPQ29uZmlndXJhdGlvbiIsImlvIiwiU29ja2V0IiwiTWFwIiwicmVnaXN0ZXIiLCJoYXMiLCJzZXQiLCJjb25maWciLCJiaW1wb3J0IiwiZGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJyZXF1aXJlIiwicXVlcnlzdHJpbmciLCJJbml0aWF0b3IiLCJjaGVjayIsInF1ZXJ5IiwidHJhbnNwb3J0cyIsIl9fZGVjb3JhdGUiLCJTaW5nbGVDYWxsIiwibGF1bmNoZXIiLCJsYXVuY2hlcnMiLCJzdGF0dXMiLCJzdGFydCIsIlByb21pc2UiLCJzZXRUaW1lb3V0Il0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJAYmV5b25kLWpzL2JhY2tlbmQvbW9kdWxlcy9jbGllbnQvYWN0aW9uL2JyaWRnZS50cyIsIkBiZXlvbmQtanMvYmFja2VuZC9tb2R1bGVzL2NsaWVudC9hY3Rpb24vZXhlY3V0aW9uLWVycm9yLnRzIiwiQGJleW9uZC1qcy9iYWNrZW5kL21vZHVsZXMvY2xpZW50L2FjdGlvbi9pbmRleC50cyIsIkBiZXlvbmQtanMvYmFja2VuZC9tb2R1bGVzL2NsaWVudC9iYWNrZW5kLnRzIiwiQGJleW9uZC1qcy9iYWNrZW5kL21vZHVsZXMvY2xpZW50L2JhY2tlbmRzLnRzIiwiQGJleW9uZC1qcy9iYWNrZW5kL21vZHVsZXMvY2xpZW50L2lvLnRzIiwiQGJleW9uZC1qcy9iYWNrZW5kL21vZHVsZXMvY2xpZW50L3NvY2tldC9pbmRleC50cyIsIkBiZXlvbmQtanMvYmFja2VuZC9tb2R1bGVzL2NsaWVudC9zb2NrZXQvaW5pdGlhdG9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=