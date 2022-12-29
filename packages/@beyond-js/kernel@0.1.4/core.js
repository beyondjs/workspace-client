define(["exports", "module", "@beyond-js/kernel@0.1.4/bundle"], function (_exports, _amd_module, dependency_0) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.languages = _exports.hmr = _exports.beyond = _exports.__beyond_pkg = _exports.SingleCall = _exports.PendingPromise = _exports.ListenerFunction = _exports.Languages = _exports.Events = _exports.CancellationToken = void 0;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/backend", "0.1.2"], ["@beyond-js/local", "0.1.2"], ["@beyond-js/kernel", "0.1.4"], ["@beyond-js/dashboard", "1.0.2"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/kernel@0.1.4/core"
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
          }
          // Check the supported languages, if not set, default will be english
          const def = specs.default ? specs.default : 'en';
          specs.supported = specs.supported instanceof Array ? specs.supported : [def];
          !specs.supported.length && specs.supported.push(def);
          this.#supported = new Set(specs.supported);
          // If default language not set or was invalid, take the first supported language
          specs.default = specs.default ? specs.default : [...this.#supported][0];
          // If default language was configured, but not set in the supported list, warn it
          if (!this.#supported.has(specs.default)) {
            console.warn(`Default language "${specs.default}" is not supported by current application`);
            specs.default = [...this.#supported][0];
          }
          this.#specs = specs;
          const configured = this.#storage?.getItem('__beyond_language');
          // Try to configure the locally previously configured language
          if (configured && this.#configure(configured)) return;
          // Try to configure the language configured in the device
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
          let l = this.#listeners.get(event.name);
          // Sort by priority
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
      }
      // For backward compatibility
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
  let beyond, Languages, languages, Events, ListenerFunction, CancellationToken, SingleCall, PendingPromise;

  // Module exports
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Zjs7VUFHSixJQUFJckYsT0FBTyxHQUFHaUIsU0FBUztVQUN2QixJQUFJbUUsTUFBTSxHQUFHbkUsU0FBUztVQUN0QixLQUFLLENBQUMsQ0FBQ3dDLENBQUMsRUFBRUMsQ0FBQyxLQUFJO1lBQ1gxRCxPQUFPLEdBQUd5RCxDQUFDO1lBQ1gyQixNQUFNLEdBQUcxQixDQUFDO1VBQ2QsQ0FBQyxDQUFDO1VBQ0YsSUFBSSxDQUFDMUQsT0FBTyxHQUFHQSxPQUFPO1VBQ3RCLElBQUksQ0FBQ29GLE1BQU0sR0FBR0EsTUFBTTtRQUN4Qjs7TUFHSjtNQUFBOUY7TUFDQSxPQUFhRSxVQUFXLENBQUMrRixPQUFPLEtBQUssUUFBUSxLQUFXQyxNQUFPLENBQUNMLGNBQWMsR0FBR0EsY0FBYyxDQUFDIiwibmFtZXMiOlsiQmV5b25kIiwibGFuZ3VhZ2VzIiwiaW1wb3J0IiwicmVzb3VyY2UiLCJ2ZXJzaW9uIiwiYmltcG9ydCIsImV4cG9ydHMiLCJiZXlvbmQiLCJnbG9iYWxUaGlzIiwiTGFuZ3VhZ2VzIiwiRXZlbnRzIiwibG9jYWxTdG9yYWdlIiwic3VwcG9ydGVkIiwiZGVmYXVsdCIsImN1cnJlbnQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlYWR5IiwiZmV0Y2hlZCIsImNvbnN0cnVjdG9yIiwicHJvamVjdCIsInRoZW4iLCJjb25maWciLCJ2YWx1ZSIsImxlbmd0aCIsImNvbnNvbGUiLCJ3YXJuIiwiaGFzIiwibG9nIiwicHJldmlvdXMiLCJ0cmlnZ2VyIiwic2V0SXRlbSIsInNwZWNzIiwidW5kZWZpbmVkIiwiZGVmIiwiQXJyYXkiLCJwdXNoIiwiU2V0IiwiY29uZmlndXJlZCIsImdldEl0ZW0iLCJkZXZpY2UiLCJsb2NhdGlvbiIsIm5hdmlnYXRvciIsImxhbmd1YWdlIiwic3BsaXQiLCJfX2FwcF9wYWNrYWdlIiwic3BlY2lmaWVyIiwiTWFwIiwiZGVzdHJveWVkIiwiRXJyb3IiLCJiaW5kIiwiZXZlbnQiLCJsaXN0ZW5lciIsInByaW9yaXR5Iiwib24iLCJ1bmJpbmQiLCJvZmYiLCJpbmNsdWRlcyIsImwiLCJnZXQiLCJzZXQiLCJmb3JjZSIsImRlbGV0ZSIsImUiLCJmaWx0ZXJlZCIsImZpbHRlciIsIml0ZW0iLCJyZXN0IiwibmFtZSIsImFyZ3MiLCJhcmd1bWVudHMiLCJzaGlmdCIsInNvcnQiLCJhIiwiYiIsImFzeW5jIiwicHJvbWlzZXMiLCJhbGwiLCJjYWxsIiwiY2F0Y2giLCJleGMiLCJlcnJvciIsInN0YWNrIiwiZGVzdHJveSIsImNsZWFyIiwiT2JqZWN0IiwiQ2FuY2VsbGF0aW9uVG9rZW4iLCJyZXNldCIsImNoZWNrIiwiaWQiLCJTaW5nbGVDYWxsIiwidGFyZ2V0IiwicHJvcGVydHlLZXkiLCJkZXNjcmlwdG9yIiwib3JpZ2luYWxNZXRob2QiLCJXZWFrTWFwIiwicHJvbWlzZSIsImFwcGx5IiwiY2xlYW4iLCJQZW5kaW5nUHJvbWlzZSIsInJlamVjdCIsImV4ZWN1dG9yIiwiRnVuY3Rpb24iLCJwcm9jZXNzIiwid2luZG93Il0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJiZXlvbmQudHMiLCJsYW5ndWFnZXMvaW5kZXgudHMiLCJ1dGlscy9ldmVudHMvZXZlbnRzLnRzIiwidXRpbHMvZXZlbnRzL3R5cGVzLnRzIiwidXRpbHMvZXhlY3V0aW9uLWNvbnRyb2wvY2FuY2VsbGF0aW9uLXRva2VuL2NhbmNlbGxhdGlvbi10b2tlbi50cyIsInV0aWxzL2V4ZWN1dGlvbi1jb250cm9sL3NpbmdsZS1jYWxsL3NpbmdsZS1jYWxsLnRzIiwidXRpbHMvcGVuZGluZy1wcm9taXNlL3BlbmRpbmctcHJvbWlzZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==