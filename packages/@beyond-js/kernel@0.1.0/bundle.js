define(["exports", "module"], function (_exports2, _amd_module) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.instances = _exports2.brequire = _exports2.bimport = _exports2.Package = _exports2.Module = _exports2.ListenerFunction = _exports2.IMSpecs = _exports2.IMCreators = _exports2.IExportsDescriptor = _exports2.IBundleSpecs = _exports2.Events = _exports2.Bundle = void 0;
  const amd_require = require;
  let __pkg = {
    exports: {}
  };
  const ims = new Map();
  /****************************
  INTERNAL MODULE: ./base/index
  ****************************/

  ims.set('./base/index', {
    hash: 1936310117,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.BeyondPackage = void 0;
      exports.resolve = resolve;

      function resolve(source, id) {
        if (!id.startsWith('.')) throw new Error(`Module id must be a relative resource "${id}"`);
        const split = {};
        split.source = source.split('/');
        split.source.pop();
        split.target = (id.startsWith('./') ? id.slice(2) : id).split('../');

        while (split.target[0] === '' && split.target.length > 1) {
          split.target.shift();
          split.source.pop();
        }

        return split.source.join('/') + '/' + split.target.join('/');
      }
      /**
       * This class is used only by beyond/core
       */


      class BeyondPackage {
        #ims;
        #cached = new Map();
        #exports;

        constructor(exports) {
          this.#exports = exports;
        }

        initialise(ims) {
          this.#ims = ims;
          this.#exports.process((id, source) => this.require(id, source), {});
        }
        /**
         * Solve the require function
         *
         * @param source {string} The module from where the require is being triggered
         * @param id {string} The module id being requested
         * @returns {*}
         */


        require(id, source) {
          id = source ? resolve(source, id) : id;

          const module = (() => {
            if (this.#ims.has(id)) return id;
            return id.endsWith('/') ? `${id}index` : `${id}/index`;
          })();

          if (this.#cached.has(module)) return this.#cached.get(module);
          if (!this.#ims.has(module)) throw new Error(`Internal module "${id}" not found`);
          const fn = this.#ims.get(module).creator;

          const require = required => this.require(required, module); // Here the id is the source of the require


          const exports = {};
          fn(require, exports);
          this.#cached.set(module, exports);
          return exports;
        }

      }

      exports.BeyondPackage = BeyondPackage;
    }
  });
  /*********************************
  INTERNAL MODULE: ./bimport/bimport
  *********************************/

  ims.set('./bimport/bimport', {
    hash: 3487759813,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.bimport = bimport;

      require("./brequire");
      /*bundle*/

      /**
       * Import a module, solving internally the module format (amd, esm).
       *
       * When running in a BEE, brequire and bimport are implemented by it, overriding both functions.
       *
       * @param resource {string} The resource identifier of the bundle
       * @param version {number} The version required by hmr to update a bundle's processor
       * @returns {Promise<*>}
       */


      function bimport(resource, version) {
        if (typeof amd_require === 'function') {
          return new Promise((resolve, reject) => {
            if (typeof resource !== "string") throw 'Invalid module parameter';
            resource = resource.endsWith('.js') ? resource.slice(0, resource.length - 3) : resource;
            const error = new Error(`Error loading or processing module "${resource}"`);
            amd_require([resource], returned => resolve(returned), exc => {
              console.error(`Error loading resource "${resource}".`);
              console.log(exc.stack);
              reject(error);
            });
          });
        } else {
          return import(resource + (version ? `?version=${version}` : ''));
        }
      }

      bimport.mode = (() => {
        if (typeof amd_require === 'function') return 'amd';
        const {
          System
        } = globalThis;
        if (typeof System === 'object' && typeof System.import === 'function') return 'sjs';
        return 'esm';
      })();

      bimport.resolve = (specifier, dependencies) => {
        if (/^https?:\/\//.test(specifier)) return specifier;
        const split = specifier.split('/');
        const pkg = split[0].startsWith('@') ? `${split.shift()}/${split.shift()}` : split.shift();
        if (!dependencies.has(pkg)) return specifier;
        const subpath = split.join('/');
        const version = dependencies.get(pkg);
        return `${pkg}@${version}` + (subpath ? `/${subpath}` : '');
      };
    }
  });
  /**********************************
  INTERNAL MODULE: ./bimport/brequire
  **********************************/

  ims.set('./bimport/brequire', {
    hash: 596501557,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.brequire = brequire;

      var _instances = require("../package/instances");
      /*bundle*/

      /**
       * Require a previously loaded bundle synchronously:
       * (can be a project bundle or library bundle, or an external bundle).
       *
       * brequire is implemented for internal use, as the require function available in the internal modules
       * exposes this functionality.
       * In fact the require of the internal modules internally makes use of brequire.
       *
       * When running in a BEE, brequire and bimport are implemented by it, overriding both functions.
       *
       * @param {string} specifier
       * @return {*}
       */


      function brequire(specifier) {
        const split = specifier.split('/');
        const pkg = split[0].startsWith('@') ? `${split.shift()}/${split.shift()}` : split.shift();
        const subpath = split.join('/');
        const found = [..._instances.default].find(([vspecifier]) => {
          if (!vspecifier.startsWith(`${pkg}@`)) return;
          const split = vspecifier.slice(pkg.length).split('/');
          split.shift(); // Remove the version of the specifier of the instance

          return subpath === split.join('/');
        });
        if (!found) return;
        !found[1].initialised && found[1].initialise();
        return found[1].exports.values;
      }
    }
  });
  /*******************************
  INTERNAL MODULE: ./bimport/index
  *******************************/

  ims.set('./bimport/index', {
    hash: 478135557,
    creator: function (require, exports) {
      "use strict";

      var _bimport = require("./bimport");

      var _brequire = require("./brequire");
      /**
       * When running in a BEE, bimport and brequire are implemented by it
       */


      globalThis.bimport === void 0 && (globalThis.bimport = _bimport.bimport);
      globalThis.brequire === void 0 && (globalThis.brequire = _brequire.brequire);
    }
  });
  /***********************************
  INTERNAL MODULE: ./bimport/requirejs
  ***********************************/

  ims.set('./bimport/requirejs', {
    hash: 2243979856,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
    }
  });
  /************************
  INTERNAL MODULE: ./bundle
  ************************/

  ims.set('./bundle', {
    hash: 2786310194,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Bundle = void 0;

      var _package = require("./package");

      var _instances = require("./instances");

      var _module = require("./module");

      require("./bimport");
      /*bundle*/


      class Bundle extends Map {
        #type;

        get type() {
          return this.#type;
        }

        #name;

        get name() {
          return this.#name;
        }

        #vspecifier;

        get vspecifier() {
          return this.#vspecifier;
        }

        #specifier;

        get specifier() {
          return this.#specifier;
        }

        #module;

        get module() {
          return this.#module;
        }

        #uri;

        get uri() {
          return this.#uri;
        }

        constructor(specs, uri) {
          super();
          if (typeof specs !== 'object') throw new Error('Bundle creation specification is not defined');
          const name = this.#name = specs.name ? specs.name : specs.type;
          if (!name) throw new Error('Invalid bundle creation specification');
          this.#module = new _module.Module(specs.module);
          this.#uri = uri;
          this.#type = specs.type;
          const {
            multibundle,
            vspecifier,
            specifier
          } = this.#module;
          this.#vspecifier = multibundle ? `${vspecifier}.${name}` : vspecifier;
          this.#specifier = multibundle ? `${specifier}.${name}` : specifier;

          _instances.instances.register(this);
        }

        package(language) {
          if (language && language.length !== 2) throw new Error(`Language "${language}" is invalid`);
          language = !language ? '' : language;
          if (this.has(language)) return this.get(language);
          const pkg = new _package.Package(this, language);
          this.set(language, pkg);
          return pkg;
        }

      }

      exports.Bundle = Bundle;
    }
  });
  /******************************
  INTERNAL MODULE: ./events/index
  ******************************/

  ims.set('./events/index', {
    hash: 1779469688,
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
    }
  });
  /******************************
  INTERNAL MODULE: ./events/types
  ******************************/

  ims.set('./events/types', {
    hash: 1632705009,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
    }
  });
  /***************************
  INTERNAL MODULE: ./instances
  ***************************/

  ims.set('./instances', {
    hash: 1214802090,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.instances = void 0;
      /*bundle*/

      const instances = new class extends Map {
        register(bundle) {
          this.set(bundle.vspecifier, bundle);
        }

      }();
      exports.instances = instances;
    }
  });
  /******************************
  INTERNAL MODULE: ./module/index
  ******************************/

  ims.set('./module/index', {
    hash: 702878917,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Module = void 0;
      /*bundle*/

      class Module {
        #pkg;

        get pkg() {
          return this.#pkg;
        }

        #vspecifier;

        get vspecifier() {
          return this.#vspecifier;
        }

        #specifier;

        get specifier() {
          return this.#specifier;
        }

        #version;

        get version() {
          return this.#version;
        }

        #subpath;

        get subpath() {
          return this.#subpath;
        }

        #multibundle;

        get multibundle() {
          return this.#multibundle;
        }

        constructor(specs) {
          this.#vspecifier = specs.vspecifier;
          this.#multibundle = specs.multibundle;
          const split = specs.vspecifier.split('/');
          const scope = split[0].startsWith('@') ? split.shift() : void 0;
          const [name, version] = split.shift().split('@');
          this.#subpath = split.join('/');
          this.#pkg = scope ? `${scope}/${name}` : name;
          this.#version = version;
          this.#specifier = this.#pkg + (this.#subpath ? `/${this.#subpath}` : '');
        }
        /**
         * @deprecated
         *
         * @param {string} action
         * @param {Record<string, *>} params
         * @return {Promise<*>}
         */


        async execute(action, params) {
          if (typeof globalThis.beyond !== 'object') return;
          const {
            backends
          } = await beyond.import('@beyond-js/backend/client');
          return await backends.execute(this.#pkg, 'legacy', this.#subpath, action, params);
        }

      }

      exports.Module = Module;
    }
  });
  /**************************************
  INTERNAL MODULE: ./package/dependencies
  **************************************/

  ims.set('./package/dependencies', {
    hash: 3724344928,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;

      class _default extends Map {
        #pkg;

        constructor(pkg) {
          super();
          this.#pkg = pkg;
        }

        update(deps) {
          this.clear();
          deps?.forEach(([specifier, dependency]) => {
            if (!dependency) {
              throw new Error(`Dependency "${specifier}" not found on package "${this.#pkg.vspecifier}"`);
            }

            const {
              __beyond_transversal: transversal
            } = dependency;
            dependency = transversal ? transversal.bundles.get(specifier) : dependency;
            this.set(specifier, dependency);
          });
        }

      }

      exports.default = _default;
    }
  });
  /*********************************
  INTERNAL MODULE: ./package/exports
  *********************************/

  ims.set('./package/exports', {
    hash: 3682924180,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;

      var _trace = require("./ims/require/trace");

      class _default {
        #require;
        #values = {};

        get values() {
          return this.#values;
        }
        /**
         * Property is set by the bundle file, or by the transversal
         * @type {{im: string, from: string, name: string}[]}
         */


        descriptor;
        /**
         * Property is set by the bundle file to process the module exports (es6, cjs, amd)
         * @type {(require: (id: string) => any) => {void(require)}}
         */

        process;

        constructor(require) {
          this.#require = require;
          this.#values.hmr = {
            on: (event, listener) => require.pkg.hmr.on(event, listener),
            off: (event, listener) => require.pkg.hmr.off(event, listener)
          };
          this.#values.__beyond_pkg = this.#require.pkg;
        } // Used by the IM exports proxy to update the value of the bundle exported property when
        // the property is changed in the IM


        set(key, value) {
          this.#values[key] = value;
        }

        update() {
          const require = id => {
            const trace = new _trace.Trace();
            trace.register('exports.update', id);
            return this.#require.solve(id, trace);
          };

          this.process?.({
            require
          }); // Clean all previous values

          const reserved = ['__beyond_pkg', 'hmr'];
          Object.keys(this.#values).forEach(p => !reserved.includes(p) && delete this.#values[p]);
          this.descriptor?.forEach(({
            im,
            from,
            name
          }) => {
            const trace = new _trace.Trace();
            this.#values[name] = this.#require.solve(im, trace)[from];
          });
        }

      }

      exports.default = _default;
    }
  });
  /*************************************
  INTERNAL MODULE: ./package/ims/exports
  *************************************/

  ims.set('./package/ims/exports', {
    hash: 3697874831,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.IMExports = void 0;

      class IMExports {
        constructor(im, bexports) {
          return new Proxy(this, {
            set: (self, name, value) => {
              // Set the exported property
              self[name] = value; // Check if it is a bundle exported property

              const prop = bexports.descriptor?.find(({
                im: id,
                from
              }) => {
                return im.id === id && name === from;
              });
              prop && bexports.set(prop.name, value);
              prop && bexports.process?.({
                prop: prop.name,
                value
              });
              return true;
            }
          });
        }

      }

      exports.IMExports = IMExports;
    }
  });
  /********************************
  INTERNAL MODULE: ./package/ims/im
  ********************************/

  ims.set('./package/ims/im', {
    hash: 2241059934,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.InternalModule = void 0;

      var _trace = require("./require/trace");

      var _exports = require("./exports"); // Bundle internal module


      class InternalModule {
        #pkg;

        get package() {
          return this.#pkg;
        }

        #id;

        get id() {
          return this.#id;
        }

        #hash;

        get hash() {
          return this.#hash;
        }

        #require;
        #exports;
        #creator;
        #creating = false;
        #created = false;

        get created() {
          return this.#created;
        }

        #create = trace => {
          if (this.#created) throw new Error(`Internal module "${this.#id}" already created`);
          if (this.#creating) throw new Error(`Cyclical import found on internal module "${this.#id}"`);
          this.#creating = true;

          const require = id => this.#require.solve(id, trace, this);

          Object.keys(this.#exports).forEach(key => delete this.#exports[key]);
          this.#creator(require, this.#exports);
          this.#created = true;
          this.#creating = false;
        };

        require(trace, source) {
          if (!this.#created) {
            source && trace.register(source.id, this.#id);
            this.#create(trace);
            trace.pop();
          }

          return this.#exports;
        }

        initialise() {
          if (this.#created) return;
          const trace = new _trace.Trace();
          trace.register('initialisation', this.#id);
          this.#create(trace);
        }

        update(creator, hash) {
          this.#created = false;
          this.#creator = creator;
          this.#hash = hash;
        }

        constructor(pkg, id, hash, creator, require) {
          this.#pkg = pkg;
          this.#id = id;
          this.#hash = hash;
          this.#creator = creator;
          this.#require = require;
          this.#exports = new _exports.IMExports(this, pkg.exports);
        }

      }

      exports.InternalModule = InternalModule;
    }
  });
  /***********************************
  INTERNAL MODULE: ./package/ims/index
  ***********************************/

  ims.set('./package/ims/index', {
    hash: 993201032,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.InternalModules = void 0;

      var _im = require("./im");

      class InternalModules {
        #pkg;
        #ims = new Map();
        #require;

        constructor(pkg) {
          this.#pkg = pkg;
        }

        set _require(value) {
          this.#require = value;
        }

        #register = (id, hash, creator) => {
          if (this.#ims.has(id)) throw new Error(`IM "${id}" already registered`);
          const im = new _im.InternalModule(this.#pkg, id, hash, creator, this.#require);
          this.#ims.set(im.id, im);
        };

        register(ims) {
          ims.forEach(({
            creator,
            hash
          }, id) => this.#register(id, hash, creator));
        }

        require(id, trace, source) {
          const module = (() => {
            if (this.#ims.has(id)) return id;
            return id.endsWith('/') ? `${id}index` : `${id}/index`;
          })();

          if (!this.#ims.has(module)) {
            throw new Error(`Internal module "${id}" not found`);
          }

          const im = this.#ims.get(module);
          return im.require(trace, source);
        }

        initialise() {
          this.#ims.forEach(im => im.initialise());
        }

        update(ims) {
          ims.forEach(({
            creator,
            hash
          }, id) => {
            if (!this.#ims.has(id)) {
              this.#register(id, hash, creator);
              return;
            }

            const im = this.#ims.get(id);
            if (im.hash === hash) return;
            im.update(creator, hash);
            this.#pkg.hmr.trigger(`${id}:change`);
          });
        }

      }

      exports.InternalModules = InternalModules;
    }
  });
  /*******************************************
  INTERNAL MODULE: ./package/ims/require/index
  *******************************************/

  ims.set('./package/ims/require/index', {
    hash: 12273943,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Require = void 0;

      var _base = require("../../../base");

      class Require {
        #pkg;

        get pkg() {
          return this.#pkg;
        }

        constructor(pkg) {
          this.#pkg = pkg;
        }
        /**
         * Solve a cjs require function
         *
         * @param {string} specifier The id of the internal module being required
         * @param {Trace} trace {object} The internal trace to find cyclical dependencies of internal modules
         * @param {InternalModule=} im The internal module that is making the call
         * @return {*}
         */


        solve(specifier, trace, im) {
          if (specifier.startsWith('.')) {
            // Relative require (internal module)
            specifier = im ? (0, _base.resolve)(im.id, specifier) : specifier;
            return this.#pkg.ims.require(specifier, trace, im);
          }
          /**
           * It is a non-relative require
           */


          if (specifier === 'beyond_context') {
            const {
              bundle
            } = this.#pkg;
            return {
              module: bundle.module,
              bundle,
              pkg: this.#pkg
            };
          } // @beyond-js/kernel/transversals requires the Bundle object


          if (specifier === '@beyond-js/kernel/bundle') {
            const {
              Bundle
            } = require('../../../bundle');

            const {
              instances
            } = require('../../../instances');

            return {
              Bundle,
              instances
            };
          }

          const {
            dependencies
          } = this.#pkg;

          if (dependencies.has(specifier)) {
            /**
             * The package may not be initialized.
             * In principle, it is a feature required by transversals, but it could be applied to other use cases.
             */
            const {
              __beyond_pkg: pkg
            } = dependencies.get(specifier);
            typeof pkg === 'object' && !pkg.initialised && pkg.initialise();
            return dependencies.get(specifier);
          }

          const keys = JSON.stringify([...dependencies.keys()]);
          throw new Error(`Bundle "${specifier}" is not registered as a dependency: ${keys}`);
        }

      }

      exports.Require = Require;
    }
  });
  /*******************************************
  INTERNAL MODULE: ./package/ims/require/trace
  *******************************************/

  ims.set('./package/ims/require/trace', {
    hash: 1932027471,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Trace = void 0; // Used to find cyclical requires of internal modules
      // Key is the id being required and the value is the source

      class Trace extends Array {
        has = id => this.find(rt => rt.id === id);

        register(source, id) {
          // Check for cyclical module require
          if (this.has(id)) {
            let traced = '';
            this.forEach(({
              id,
              source
            }) => {
              const s = ['initialisation', 'exports.update'].includes(source) ? 'Cycle initiates with source' : `then "${source}" requires`;
              traced += `\t${s} "${id}"\n`;
            });
            traced += `\tthat finally requires "${id}" again.\n`;
            throw new Error(`Recursive module load found.\n` + `Internal module "${source}" is requiring another internal module that was previously required: "${id}"\n` + `Trace of required modules:\n${traced}`);
          }

          this.push({
            id,
            source
          });
        }

      }

      exports.Trace = Trace;
    }
  });
  /*******************************
  INTERNAL MODULE: ./package/index
  *******************************/

  ims.set('./package/index', {
    hash: 458850112,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Package = void 0;

      var _ims = require("./ims");

      var _require = require("./ims/require");

      var _exports = require("./exports");

      var _dependencies = require("./dependencies");

      var _instances = require("./instances");

      var _events = require("../events");
      /*bundle*/


      class Package {
        #bundle;

        get bundle() {
          return this.#bundle;
        }

        #language;

        get language() {
          return this.#language;
        }

        #vspecifier;

        get vspecifier() {
          return this.#vspecifier;
        }

        #specifier;

        get specifier() {
          return this.#specifier;
        }

        #require;
        #ims;

        get ims() {
          return this.#ims;
        }

        #exports;

        get exports() {
          return this.#exports;
        } // The beyond dependencies that are required by the bundle


        #dependencies = new _dependencies.default(this);

        get dependencies() {
          return this.#dependencies;
        }

        #hmr = new _events.Events();

        get hmr() {
          return this.#hmr;
        }

        constructor(bundle, language) {
          this.#bundle = bundle;
          this.#language = language ? language : '';
          this.#vspecifier = language ? `${bundle.vspecifier}.${language}` : bundle.vspecifier;
          this.#specifier = language ? `${bundle.specifier}.${language}` : bundle.specifier;
          this.#ims = new _ims.InternalModules(this);
          this.#require = new _require.Require(this);
          this.#ims._require = this.#require;
          this.#exports = new _exports.default(this.#require);

          _instances.default.register(this);
        }

        #initialised = false;

        get initialised() {
          return this.#initialised;
        }

        initialise(ims) {
          if (this.#initialised) throw new Error('Package already initialised');
          this.#initialised = true;
          ims && this.#ims.register(ims);
          this.exports.update();
          this.#ims.initialise();
        }

        update(ims) {
          this.#ims.update(ims);
          this.exports.update();
          this.#ims.initialise();
          this.#hmr.trigger('change');
        }

      }

      exports.Package = Package;
    }
  });
  /***********************************
  INTERNAL MODULE: ./package/instances
  ***********************************/

  ims.set('./package/instances', {
    hash: 2745122839,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;

      var _default = new class extends Map {
        register(pkg) {
          this.set(pkg.vspecifier, pkg);
        }

      }();

      exports.default = _default;
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./bimport/bimport",
    "from": "bimport",
    "name": "bimport"
  }, {
    "im": "./bimport/brequire",
    "from": "brequire",
    "name": "brequire"
  }, {
    "im": "./bundle",
    "from": "IBundleSpecs",
    "name": "IBundleSpecs"
  }, {
    "im": "./bundle",
    "from": "Bundle",
    "name": "Bundle"
  }, {
    "im": "./events/index",
    "from": "Events",
    "name": "Events"
  }, {
    "im": "./events/types",
    "from": "ListenerFunction",
    "name": "ListenerFunction"
  }, {
    "im": "./instances",
    "from": "instances",
    "name": "instances"
  }, {
    "im": "./module/index",
    "from": "Module",
    "name": "Module"
  }, {
    "im": "./package/exports",
    "from": "IExportsDescriptor",
    "name": "IExportsDescriptor"
  }, {
    "im": "./package/ims/im",
    "from": "IMSpecs",
    "name": "IMSpecs"
  }, {
    "im": "./package/ims/index",
    "from": "IMCreators",
    "name": "IMCreators"
  }, {
    "im": "./package/index",
    "from": "Package",
    "name": "Package"
  }];
  let bimport, brequire, IBundleSpecs, Bundle, Events, ListenerFunction, instances, Module, IExportsDescriptor, IMSpecs, IMCreators, Package; // Module exports

  _exports2.Package = Package;
  _exports2.IMCreators = IMCreators;
  _exports2.IMSpecs = IMSpecs;
  _exports2.IExportsDescriptor = IExportsDescriptor;
  _exports2.Module = Module;
  _exports2.instances = instances;
  _exports2.ListenerFunction = ListenerFunction;
  _exports2.Events = Events;
  _exports2.Bundle = Bundle;
  _exports2.IBundleSpecs = IBundleSpecs;
  _exports2.brequire = brequire;
  _exports2.bimport = bimport;

  __pkg.exports.process = function (require) {
    _exports2.bimport = bimport = require('./bimport/bimport').bimport;
    _exports2.brequire = brequire = require('./bimport/brequire').brequire;
    _exports2.IBundleSpecs = IBundleSpecs = require('./bundle').IBundleSpecs;
    _exports2.Bundle = Bundle = require('./bundle').Bundle;
    _exports2.Events = Events = require('./events/index').Events;
    _exports2.ListenerFunction = ListenerFunction = require('./events/types').ListenerFunction;
    _exports2.instances = instances = require('./instances').instances;
    _exports2.Module = Module = require('./module/index').Module;
    _exports2.IExportsDescriptor = IExportsDescriptor = require('./package/exports').IExportsDescriptor;
    _exports2.IMSpecs = IMSpecs = require('./package/ims/im').IMSpecs;
    _exports2.IMCreators = IMCreators = require('./package/ims/index').IMCreators;
    _exports2.Package = Package = require('./package/index').Package;
  };

  const __bp = {};
  ims.get('./base/index').creator(() => 0, __bp);
  __pkg = new __bp.BeyondPackage(__pkg.exports);

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGdCQUFKLENBQVksSUFBWixDQUFoQjtVQUNBLEtBQUssSUFBTCxDQUFVRCxRQUFWLEdBQXFCLEtBQUssUUFBMUI7VUFDQSxLQUFLLFFBQUwsR0FBZ0IsSUFBSVEsZ0JBQUosQ0FBWSxLQUFLLFFBQWpCLENBQWhCOztVQUVBL0YsbUJBQVVjLFFBQVZkLENBQW1CLElBQW5CQTtRQUNIOztRQUVELGVBQWUsS0FBZjs7UUFDZSxJQUFYRyxXQUFXO1VBQ1gsT0FBTyxLQUFLLFlBQVo7UUFDSDs7UUFFRHRDLFVBQVUsQ0FBQ0MsR0FBRCxFQUFpQjtVQUN2QixJQUFJLEtBQUssWUFBVCxFQUF1QixNQUFNLElBQUliLEtBQUosQ0FBVSw2QkFBVixDQUFOO1VBQ3ZCLEtBQUssWUFBTCxHQUFvQixJQUFwQjtVQUNBYSxHQUFHLElBQUksS0FBSyxJQUFMLENBQVVnRCxRQUFWLENBQW1CaEQsR0FBbkIsQ0FBUEE7VUFDQSxLQUFLRixPQUFMLENBQWErRixNQUFiO1VBQ0EsS0FBSyxJQUFMLENBQVU5RixVQUFWO1FBQ0g7O1FBRUQ4RixNQUFNLENBQUM3RixHQUFELEVBQWdCO1VBQ2xCLEtBQUssSUFBTCxDQUFVNkYsTUFBVixDQUFpQjdGLEdBQWpCO1VBQ0EsS0FBS0YsT0FBTCxDQUFhK0YsTUFBYjtVQUNBLEtBQUssSUFBTCxDQUFVOUYsVUFBVjtVQUNBLEtBQUssSUFBTCxDQUFVeUUsT0FBVixDQUFrQixRQUFsQjtRQUNIOztNQTdFUTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkNQRSxJQUFJLGNBQWM1RSxHQUFkLENBQWlCO1FBQ2hDb0QsUUFBUSxDQUFDbEIsR0FBRCxFQUFhO1VBQ2pCLEtBQUtwQixHQUFMLENBQVNvQixHQUFHLENBQUNNLFVBQWIsRUFBeUJOLEdBQXpCO1FBQ0g7O01BSCtCLENBQXJCIiwibmFtZXMiOlsicmVzb2x2ZSIsInNvdXJjZSIsImlkIiwic3RhcnRzV2l0aCIsIkVycm9yIiwic3BsaXQiLCJwb3AiLCJ0YXJnZXQiLCJzbGljZSIsImxlbmd0aCIsInNoaWZ0Iiwiam9pbiIsIkJleW9uZFBhY2thZ2UiLCJNYXAiLCJjb25zdHJ1Y3RvciIsImV4cG9ydHMiLCJpbml0aWFsaXNlIiwiaW1zIiwicHJvY2VzcyIsInJlcXVpcmUiLCJtb2R1bGUiLCJoYXMiLCJlbmRzV2l0aCIsImdldCIsImZuIiwiY3JlYXRvciIsInJlcXVpcmVkIiwic2V0IiwiYmltcG9ydCIsInJlc291cmNlIiwidmVyc2lvbiIsImFtZF9yZXF1aXJlIiwiUHJvbWlzZSIsInJlamVjdCIsImVycm9yIiwicmV0dXJuZWQiLCJleGMiLCJjb25zb2xlIiwibG9nIiwic3RhY2siLCJtb2RlIiwiU3lzdGVtIiwiZ2xvYmFsVGhpcyIsImltcG9ydCIsInNwZWNpZmllciIsImRlcGVuZGVuY2llcyIsInRlc3QiLCJwa2ciLCJzdWJwYXRoIiwiYnJlcXVpcmUiLCJmb3VuZCIsImluc3RhbmNlcyIsImZpbmQiLCJ2c3BlY2lmaWVyIiwiaW5pdGlhbGlzZWQiLCJ2YWx1ZXMiLCJPYmplY3QiLCJ2YWx1ZSIsIkJ1bmRsZSIsInR5cGUiLCJuYW1lIiwidXJpIiwic3BlY3MiLCJNb2R1bGUiLCJtdWx0aWJ1bmRsZSIsInJlZ2lzdGVyIiwicGFja2FnZSIsImxhbmd1YWdlIiwiUGFja2FnZSIsIkV2ZW50cyIsImRlc3Ryb3llZCIsInN1cHBvcnRlZCIsIkFycmF5IiwiYmluZCIsImV2ZW50IiwibGlzdGVuZXIiLCJwcmlvcml0eSIsIm9uIiwidW5iaW5kIiwib2ZmIiwiaW5jbHVkZXMiLCJsIiwicHVzaCIsImZvcmNlIiwiZGVsZXRlIiwiZSIsImZpbHRlcmVkIiwiZmlsdGVyIiwiaXRlbSIsInRyaWdnZXIiLCJyZXN0IiwiYXJncyIsImFyZ3VtZW50cyIsInNvcnQiLCJhIiwiYiIsImFzeW5jIiwicHJvbWlzZXMiLCJhbGwiLCJjYWxsIiwiY2F0Y2giLCJkZXN0cm95IiwiY2xlYXIiLCJidW5kbGUiLCJzY29wZSIsImV4ZWN1dGUiLCJhY3Rpb24iLCJwYXJhbXMiLCJiZXlvbmQiLCJiYWNrZW5kcyIsInVwZGF0ZSIsImRlcHMiLCJmb3JFYWNoIiwiZGVwZW5kZW5jeSIsIl9fYmV5b25kX3RyYW5zdmVyc2FsIiwidHJhbnN2ZXJzYWwiLCJidW5kbGVzIiwiZGVzY3JpcHRvciIsImhtciIsIl9fYmV5b25kX3BrZyIsImtleSIsInRyYWNlIiwiVHJhY2UiLCJzb2x2ZSIsInJlc2VydmVkIiwia2V5cyIsInAiLCJpbSIsImZyb20iLCJJTUV4cG9ydHMiLCJiZXhwb3J0cyIsIlByb3h5Iiwic2VsZiIsInByb3AiLCJJbnRlcm5hbE1vZHVsZSIsImhhc2giLCJjcmVhdGVkIiwiSW50ZXJuYWxNb2R1bGVzIiwiX3JlcXVpcmUiLCJSZXF1aXJlIiwiSlNPTiIsInN0cmluZ2lmeSIsInJ0IiwidHJhY2VkIiwicyIsIkRlcGVuZGVuY2llcyIsIkV4cG9ydHMiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbIkBiZXlvbmQtanMva2VybmVsL2J1bmRsZS9iYXNlL2luZGV4LnRzIiwiQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL2JpbXBvcnQvYmltcG9ydC50cyIsIkBiZXlvbmQtanMva2VybmVsL2J1bmRsZS9iaW1wb3J0L2JyZXF1aXJlLnRzIiwiQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL2JpbXBvcnQvaW5kZXgudHMiLCJAYmV5b25kLWpzL2tlcm5lbC9idW5kbGUvYmltcG9ydC9yZXF1aXJlanMudHMiLCJAYmV5b25kLWpzL2tlcm5lbC9idW5kbGUvYnVuZGxlLnRzIiwiQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL2V2ZW50cy9pbmRleC50cyIsIkBiZXlvbmQtanMva2VybmVsL2J1bmRsZS9ldmVudHMvdHlwZXMudHMiLCJAYmV5b25kLWpzL2tlcm5lbC9idW5kbGUvaW5zdGFuY2VzLnRzIiwiQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL21vZHVsZS9pbmRleC50cyIsIkBiZXlvbmQtanMva2VybmVsL2J1bmRsZS9wYWNrYWdlL2RlcGVuZGVuY2llcy50cyIsIkBiZXlvbmQtanMva2VybmVsL2J1bmRsZS9wYWNrYWdlL2V4cG9ydHMudHMiLCJAYmV5b25kLWpzL2tlcm5lbC9idW5kbGUvcGFja2FnZS9pbXMvZXhwb3J0cy50cyIsIkBiZXlvbmQtanMva2VybmVsL2J1bmRsZS9wYWNrYWdlL2ltcy9pbS50cyIsIkBiZXlvbmQtanMva2VybmVsL2J1bmRsZS9wYWNrYWdlL2ltcy9pbmRleC50cyIsIkBiZXlvbmQtanMva2VybmVsL2J1bmRsZS9wYWNrYWdlL2ltcy9yZXF1aXJlL2luZGV4LnRzIiwiQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL3BhY2thZ2UvaW1zL3JlcXVpcmUvdHJhY2UudHMiLCJAYmV5b25kLWpzL2tlcm5lbC9idW5kbGUvcGFja2FnZS9pbmRleC50cyIsIkBiZXlvbmQtanMva2VybmVsL2J1bmRsZS9wYWNrYWdlL2luc3RhbmNlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==