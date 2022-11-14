define(["exports", "module", "@beyond-js/kernel@0.1.1/bundle"], function (_exports, _amd_module, dependency_0) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.languages = _exports.hmr = _exports.beyond = _exports.__beyond_pkg = _exports.SingleCall = _exports.PendingPromise = _exports.ListenerFunction = _exports.Languages = _exports.Events = _exports.CancellationToken = void 0;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/backend", "0.1.0"], ["@beyond-js/local", "0.1.0"], ["@beyond-js/kernel", "0.1.1"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/kernel@0.1.1/core"
    },
    "type": "ts"
  }, _amd_module.uri).package();

  ;

  __pkg.dependencies.update([]);

  const {
    module
  } = __pkg.bundle;
  const ims = new Map();
  /************************
  INTERNAL MODULE: ./beyond
  ************************/

  ims.set('./beyond', {
    hash: 959081709,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.beyond = exports.Beyond = void 0;

      var _languages = require("./languages");

      class Beyond {
        /**
         * @deprecated
         * Use import {languages} from '@beyond-js/kernel/core';
         */
        get languages() {
          return _languages.languages;
        }
        /**
         * @deprecated
         * Use bimport instead of beyond.import
         *
         * @param {string} resource
         * @param {number} version
         * @return {Promise<*>}
         */


        async import(resource, version) {
          return await bimport(resource, version);
        }

      }

      exports.Beyond = Beyond;
      /*bundle*/

      const beyond = new Beyond();
      exports.beyond = beyond;
      globalThis.beyond = beyond;
    }
  });
  /*********************************
  INTERNAL MODULE: ./languages/index
  *********************************/

  ims.set('./languages/index', {
    hash: 2966511149,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.languages = exports.Languages = void 0;

      var _events = require("../utils/events/events");
      /*bundle*/


      class Languages extends _events.Events {
        #project;
        #specs;
        #storage = typeof localStorage === 'object' ? localStorage : void 0;
        #supported;

        get supported() {
          return this.#supported;
        }

        get default() {
          return this.#specs?.default;
        }

        #current;

        get current() {
          return this.#current;
        }

        #resolve;
        #ready = new Promise(resolve => this.#resolve = resolve);

        get ready() {
          return this.#ready;
        }

        #fetched = false;

        get fetched() {
          return this.#fetched;
        }

        constructor(project) {
          super();
          this.#project = project;
          bimport(`${project}/config`).then(({
            default: config
          }) => {
            this.#setup(config.languages);
            this.#fetched = true;
            this.#resolve();
          });
        }

        #configure(value) {
          if (this.#current === value) return true;

          if (typeof value !== 'string' || value.length !== 2) {
            console.warn(`Configured language "${value}" is invalid`);
            return false;
          }

          if (value && !this.#supported.has(value)) {
            console.log(`Language "${value}" is not supported`);
            return false;
          }

          const previous = this.#current;
          this.#current = value;
          previous && this.trigger('change');
          return true;
        }

        set current(value) {
          if (!this.#configure(value)) return;
          this.#storage?.setItem('__beyond_language', value);
        }

        #setup(specs) {
          // Check if the default language is valid
          if (specs.default && typeof specs.default !== 'string' || specs.default.length !== 2) {
            console.log(`Default language "${specs.default}" is invalid`);
            specs.default = undefined;
          } // Check the supported languages, if not set, default will be english


          const def = specs.default ? specs.default : 'en';
          specs.supported = specs.supported instanceof Array ? specs.supported : [def];
          !specs.supported.length && specs.supported.push(def);
          this.#supported = new Set(specs.supported); // If default language not set or was invalid, take the first supported language

          specs.default = specs.default ? specs.default : [...this.#supported][0]; // If default language was configured, but not set in the supported list, warn it

          if (!this.#supported.has(specs.default)) {
            console.warn(`Default language "${specs.default}" is not supported by current application`);
            specs.default = [...this.#supported][0];
          }

          this.#specs = specs;
          const configured = this.#storage?.getItem('__beyond_language'); // Try to configure the locally previously configured language

          if (configured && this.#configure(configured)) return; // Try to configure the language configured in the device

          const device = typeof location === 'object' ? navigator.language.split('-')[0] : void 0;
          if (device && this.#configure(device)) return;
          this.#configure(specs.default);
        }

      }

      exports.Languages = Languages;
      /*bundle*/

      const languages = new Languages(globalThis.__app_package.specifier);
      exports.languages = languages;
    }
  });
  /*************************************
  INTERNAL MODULE: ./utils/events/events
  *************************************/

  ims.set('./utils/events/events', {
    hash: 3993267980,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Events = void 0;
      /*bundle*/

      class Events {
        #specs;
        #listeners = new Map();
        #destroyed = false;

        get destroyed() {
          return this.#destroyed;
        }

        constructor(specs) {
          specs = specs ? specs : {};
          if (specs.supported && !(specs.supported instanceof Array)) throw new Error('Invalid parameters');
          this.#specs = specs;

          if (specs.bind) {
            specs.bind.bind = (event, listener, priority) => this.on(event, listener, priority);

            specs.bind.unbind = (event, listener) => this.off(event, listener);
          }
        }
        /**
         * Binds an event handler to an event name
         *
         * @param {string} event
         * @param {ListenerFunction} listener
         * @param {number} priority
         * @returns {this}
         */


        on(event, listener, priority) {
          if (this.#destroyed) {
            throw new Error('Events object is destroyed');
          }

          if (this.#specs.supported && !this.#specs.supported.includes(event)) {
            throw new Error(`Event "${event}" is not defined`);
          }

          if (typeof listener !== 'function') {
            throw new Error('Listener is not a function');
          }

          this.off(event, listener); // Just in case the listener is already registered

          const l = this.#listeners.has(event) ? this.#listeners.get(event) : [];
          this.#listeners.set(event, l);
          l.push({
            listener: listener,
            priority: priority ? priority : 0
          });
          return this;
        }

        bind = (event, listener, priority) => this.on(event, listener, priority);
        /**
         * Unbind an event listener
         *
         * @param {string} event
         * @param {ListenerFunction} listener
         * @param {number} force
         * @returns {this}
         */

        off(event, listener, force) {
          if (this.#destroyed) {
            throw new Error('Events object is destroyed');
          }

          if (!event) {
            throw new Error(`Event name not specified`);
          }

          if (this.#specs.supported && !this.#specs.supported.includes(event)) {
            throw new Error(`Event "${event}" is not defined`);
          }

          if (!listener) {
            if (!force) throw new Error('Listener function not set');
            this.#listeners.delete(event);
            return this;
          }

          if (!this.#listeners.has(event)) {
            return this;
          }

          const e = this.#listeners.get(event);
          const filtered = e.filter(item => item.listener !== listener);
          this.#listeners.set(event, filtered);
          return this;
        }

        unbind = (event, listener, force) => this.off(event, listener, force);
        /**
         * Triggers an event
         *
         * @param {Trigger} event
         * @param {*} rest
         * @returns {Promise<*>}
         */

        trigger(event, ...rest) {
          if (this.#destroyed) {
            throw new Error('Events object is destroyed');
          }

          event = typeof event === 'string' ? {
            'name': event
          } : event;
          if (typeof event !== 'object') throw new Error('Invalid parameters');
          if (typeof event.name !== 'string') throw new Error('Invalid event name');

          if (this.#specs.supported && !this.#specs.supported.includes(event.name)) {
            throw new Error(`Event "${event.name}" is not defined`);
          }

          let args = [...arguments];
          args.shift(); // Remove the event name from the list of arguments

          if (!this.#listeners.has(event.name)) return;
          let l = this.#listeners.get(event.name); // Sort by priority

          l.sort((a, b) => b.priority - a.priority);

          if (event.async) {
            const trigger = async function () {
              const promises = [];

              for (let listener of l) {
                promises.push(listener.listener(...args));
              }

              await Promise.all(promises);
            };

            return trigger.call(this, ...args).catch(exc => console.error(exc.stack));
          } else {
            for (let listener of l) {
              listener.listener(...args);
            }
          }
        }

        destroy() {
          this.#destroyed = true;
          this.#listeners.clear();
        }

      }

      exports.Events = Events;
      globalThis.Events = Events;
    }
  });
  /************************************
  INTERNAL MODULE: ./utils/events/types
  ************************************/

  ims.set('./utils/events/types', {
    hash: 1632705009,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
    }
  });
  /*******************************************************************************
  INTERNAL MODULE: ./utils/execution-control/cancellation-token/cancellation-token
  *******************************************************************************/

  ims.set('./utils/execution-control/cancellation-token/cancellation-token', {
    hash: 4200323006,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CancellationToken = void 0;
      /*bundle*/

      class CancellationToken {
        #id = 0;

        get current() {
          return this.#id;
        }

        reset = () => ++this.#id;
        check = id => id === this.#id;
      }

      exports.CancellationToken = CancellationToken;
    }
  });
  /*****************************************************************
  INTERNAL MODULE: ./utils/execution-control/single-call/single-call
  *****************************************************************/

  ims.set('./utils/execution-control/single-call/single-call', {
    hash: 783668127,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SingleCall = SingleCall;
      /*bundle*/

      function SingleCall(target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        let promises = new WeakMap();

        descriptor.value = function (...args) {
          if (promises.has(this)) return promises.get(this);
          const promise = originalMethod.apply(this, args);
          promises.set(this, promise);

          const clean = () => promises.delete(this);

          promise.then(clean).catch(clean);
          return promise;
        };

        return descriptor;
      }
    }
  });
  /*******************************************************
  INTERNAL MODULE: ./utils/pending-promise/pending-promise
  *******************************************************/

  ims.set('./utils/pending-promise/pending-promise', {
    hash: 3255928960,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PendingPromise = void 0;
      /*bundle*/

      class PendingPromise extends Promise {
        resolve;
        reject;

        constructor(executor) {
          // needed for PendingPromise.race/all ecc
          if (executor instanceof Function) {
            super(executor);
            return;
          }

          let resolve = undefined;
          let reject = undefined;
          super((a, b) => {
            resolve = a;
            reject = b;
          });
          this.resolve = resolve;
          this.reject = reject;
        }

      } // For backward compatibility


      exports.PendingPromise = PendingPromise;
      typeof globalThis.process !== 'object' && (window.PendingPromise = PendingPromise);
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./beyond",
    "from": "beyond",
    "name": "beyond"
  }, {
    "im": "./languages/index",
    "from": "Languages",
    "name": "Languages"
  }, {
    "im": "./languages/index",
    "from": "languages",
    "name": "languages"
  }, {
    "im": "./utils/events/events",
    "from": "Events",
    "name": "Events"
  }, {
    "im": "./utils/events/types",
    "from": "ListenerFunction",
    "name": "ListenerFunction"
  }, {
    "im": "./utils/execution-control/cancellation-token/cancellation-token",
    "from": "CancellationToken",
    "name": "CancellationToken"
  }, {
    "im": "./utils/execution-control/single-call/single-call",
    "from": "SingleCall",
    "name": "SingleCall"
  }, {
    "im": "./utils/pending-promise/pending-promise",
    "from": "PendingPromise",
    "name": "PendingPromise"
  }];
  let beyond, Languages, languages, Events, ListenerFunction, CancellationToken, SingleCall, PendingPromise; // Module exports

  _exports.PendingPromise = PendingPromise;
  _exports.SingleCall = SingleCall;
  _exports.CancellationToken = CancellationToken;
  _exports.ListenerFunction = ListenerFunction;
  _exports.Events = Events;
  _exports.languages = languages;
  _exports.Languages = Languages;
  _exports.beyond = beyond;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'beyond') && (_exports.beyond = beyond = require ? require('./beyond').beyond : value);
    (require || prop === 'Languages') && (_exports.Languages = Languages = require ? require('./languages/index').Languages : value);
    (require || prop === 'languages') && (_exports.languages = languages = require ? require('./languages/index').languages : value);
    (require || prop === 'Events') && (_exports.Events = Events = require ? require('./utils/events/events').Events : value);
    (require || prop === 'ListenerFunction') && (_exports.ListenerFunction = ListenerFunction = require ? require('./utils/events/types').ListenerFunction : value);
    (require || prop === 'CancellationToken') && (_exports.CancellationToken = CancellationToken = require ? require('./utils/execution-control/cancellation-token/cancellation-token').CancellationToken : value);
    (require || prop === 'SingleCall') && (_exports.SingleCall = SingleCall = require ? require('./utils/execution-control/single-call/single-call').SingleCall : value);
    (require || prop === 'PendingPromise') && (_exports.PendingPromise = PendingPromise = require ? require('./utils/pending-promise/pending-promise').PendingPromise : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3RDQyxPQUFPO1FBQ1BvRixNQUFNOztRQUVOakYsWUFBWWtGLFFBQVpsRixFQUE4RztVQUMxRztVQUNBLElBQUlrRixRQUFRLFlBQVlDLFFBQXhCLEVBQWtDO1lBQzlCLE1BQU1ELFFBQU47WUFDQTtVQUNIOztVQUVELElBQUlyRixPQUFPLEdBQUdpQixTQUFkO1VBQ0EsSUFBSW1FLE1BQU0sR0FBR25FLFNBQWI7VUFDQSxNQUFNLENBQUN3QyxDQUFELEVBQUlDLENBQUosS0FBUztZQUNYMUQsT0FBTyxHQUFHeUQsQ0FBVnpEO1lBQ0FvRixNQUFNLEdBQUcxQixDQUFUMEI7VUFGSjtVQUlBLEtBQUtwRixPQUFMLEdBQWVBLE9BQWY7VUFDQSxLQUFLb0YsTUFBTCxHQUFjQSxNQUFkO1FBQ0g7O01BbkJxQyxFQXNCMUM7Ozs7TUFDQSxPQUFhNUYsVUFBVyxDQUFDK0YsT0FBekIsS0FBcUMsUUFBckMsS0FBd0RDLE1BQU8sQ0FBQ0wsY0FBUkssR0FBeUJMLGNBQWpGIiwibmFtZXMiOlsiQmV5b25kIiwibGFuZ3VhZ2VzIiwiaW1wb3J0IiwicmVzb3VyY2UiLCJ2ZXJzaW9uIiwiYmltcG9ydCIsImJleW9uZCIsImdsb2JhbFRoaXMiLCJMYW5ndWFnZXMiLCJFdmVudHMiLCJsb2NhbFN0b3JhZ2UiLCJzdXBwb3J0ZWQiLCJkZWZhdWx0IiwiY3VycmVudCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVhZHkiLCJmZXRjaGVkIiwiY29uc3RydWN0b3IiLCJwcm9qZWN0IiwidGhlbiIsImNvbmZpZyIsInZhbHVlIiwibGVuZ3RoIiwiY29uc29sZSIsIndhcm4iLCJoYXMiLCJsb2ciLCJwcmV2aW91cyIsInRyaWdnZXIiLCJzZXRJdGVtIiwic3BlY3MiLCJ1bmRlZmluZWQiLCJkZWYiLCJBcnJheSIsInB1c2giLCJTZXQiLCJjb25maWd1cmVkIiwiZ2V0SXRlbSIsImRldmljZSIsImxvY2F0aW9uIiwibmF2aWdhdG9yIiwibGFuZ3VhZ2UiLCJzcGxpdCIsIl9fYXBwX3BhY2thZ2UiLCJzcGVjaWZpZXIiLCJNYXAiLCJkZXN0cm95ZWQiLCJFcnJvciIsImJpbmQiLCJldmVudCIsImxpc3RlbmVyIiwicHJpb3JpdHkiLCJvbiIsInVuYmluZCIsIm9mZiIsImluY2x1ZGVzIiwibCIsImdldCIsInNldCIsImZvcmNlIiwiZGVsZXRlIiwiZSIsImZpbHRlcmVkIiwiZmlsdGVyIiwiaXRlbSIsInJlc3QiLCJuYW1lIiwiYXJncyIsImFyZ3VtZW50cyIsInNoaWZ0Iiwic29ydCIsImEiLCJiIiwiYXN5bmMiLCJwcm9taXNlcyIsImFsbCIsImNhbGwiLCJjYXRjaCIsImV4YyIsImVycm9yIiwic3RhY2siLCJkZXN0cm95IiwiY2xlYXIiLCJPYmplY3QiLCJDYW5jZWxsYXRpb25Ub2tlbiIsInJlc2V0IiwiY2hlY2siLCJpZCIsIlNpbmdsZUNhbGwiLCJ0YXJnZXQiLCJwcm9wZXJ0eUtleSIsImRlc2NyaXB0b3IiLCJvcmlnaW5hbE1ldGhvZCIsIldlYWtNYXAiLCJwcm9taXNlIiwiYXBwbHkiLCJjbGVhbiIsIlBlbmRpbmdQcm9taXNlIiwicmVqZWN0IiwiZXhlY3V0b3IiLCJGdW5jdGlvbiIsInByb2Nlc3MiLCJ3aW5kb3ciXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbIkBiZXlvbmQtanMva2VybmVsL2NvcmUvYmV5b25kLnRzIiwiQGJleW9uZC1qcy9rZXJuZWwvY29yZS9sYW5ndWFnZXMvaW5kZXgudHMiLCJAYmV5b25kLWpzL2tlcm5lbC9jb3JlL3V0aWxzL2V2ZW50cy9ldmVudHMudHMiLCJAYmV5b25kLWpzL2tlcm5lbC9jb3JlL3V0aWxzL2V2ZW50cy90eXBlcy50cyIsIkBiZXlvbmQtanMva2VybmVsL2NvcmUvdXRpbHMvZXhlY3V0aW9uLWNvbnRyb2wvY2FuY2VsbGF0aW9uLXRva2VuL2NhbmNlbGxhdGlvbi10b2tlbi50cyIsIkBiZXlvbmQtanMva2VybmVsL2NvcmUvdXRpbHMvZXhlY3V0aW9uLWNvbnRyb2wvc2luZ2xlLWNhbGwvc2luZ2xlLWNhbGwudHMiLCJAYmV5b25kLWpzL2tlcm5lbC9jb3JlL3V0aWxzL3BlbmRpbmctcHJvbWlzZS9wZW5kaW5nLXByb21pc2UudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=