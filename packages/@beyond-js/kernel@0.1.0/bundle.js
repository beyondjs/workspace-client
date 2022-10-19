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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBMUI7VUFDQSxLQUFLLFFBQUwsR0FBZ0IsSUFBSVEsZ0JBQUosQ0FBWSxLQUFLLFFBQWpCLENBQWhCOztVQUVBL0YsbUJBQVVZLFFBQVZaLENBQW1CLElBQW5CQTtRQUNIOztRQUVELGVBQWUsS0FBZjs7UUFDZSxJQUFYRyxXQUFXO1VBQ1gsT0FBTyxLQUFLLFlBQVo7UUFDSDs7UUFFRHRDLFVBQVUsQ0FBQ0MsR0FBRCxFQUFpQjtVQUN2QixJQUFJLEtBQUssWUFBVCxFQUF1QixNQUFNLElBQUliLEtBQUosQ0FBVSw2QkFBVixDQUFOO1VBQ3ZCLEtBQUssWUFBTCxHQUFvQixJQUFwQjtVQUNBYSxHQUFHLElBQUksS0FBSyxJQUFMLENBQVU4QyxRQUFWLENBQW1COUMsR0FBbkIsQ0FBUEE7VUFDQSxLQUFLRixPQUFMLENBQWE2RixNQUFiO1VBQ0EsS0FBSyxJQUFMLENBQVU1RixVQUFWO1FBQ0g7O1FBRUQ0RixNQUFNLENBQUMzRixHQUFELEVBQWdCO1VBQ2xCLEtBQUssSUFBTCxDQUFVMkYsTUFBVixDQUFpQjNGLEdBQWpCO1VBQ0EsS0FBS0YsT0FBTCxDQUFhNkYsTUFBYjtVQUNBLEtBQUssSUFBTCxDQUFVNUYsVUFBVjtVQUNBLEtBQUssSUFBTCxDQUFVdUUsT0FBVixDQUFrQixRQUFsQjtRQUNIOztNQTdFUTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQklQRSxJQUFJLGNBQWMxRSxHQUFkLENBQWlCO1FBQ2hDa0QsUUFBUSxDQUFDaEIsR0FBRCxFQUFhO1VBQ2pCLEtBQUtwQixHQUFMLENBQVNvQixHQUFHLENBQUNNLFVBQWIsRUFBeUJOLEdBQXpCO1FBQ0g7O01BSCtCLENBQXJCIiwibmFtZXMiOlsicmVzb2x2ZSIsInNvdXJjZSIsImlkIiwic3RhcnRzV2l0aCIsIkVycm9yIiwic3BsaXQiLCJwb3AiLCJ0YXJnZXQiLCJzbGljZSIsImxlbmd0aCIsInNoaWZ0Iiwiam9pbiIsIkJleW9uZFBhY2thZ2UiLCJNYXAiLCJjb25zdHJ1Y3RvciIsImV4cG9ydHMiLCJpbml0aWFsaXNlIiwiaW1zIiwicHJvY2VzcyIsInJlcXVpcmUiLCJtb2R1bGUiLCJoYXMiLCJlbmRzV2l0aCIsImdldCIsImZuIiwiY3JlYXRvciIsInJlcXVpcmVkIiwic2V0IiwiYmltcG9ydCIsInJlc291cmNlIiwidmVyc2lvbiIsImFtZF9yZXF1aXJlIiwiUHJvbWlzZSIsInJlamVjdCIsImVycm9yIiwicmV0dXJuZWQiLCJleGMiLCJjb25zb2xlIiwibG9nIiwic3RhY2siLCJtb2RlIiwiU3lzdGVtIiwiZ2xvYmFsVGhpcyIsImltcG9ydCIsInNwZWNpZmllciIsImRlcGVuZGVuY2llcyIsInRlc3QiLCJwa2ciLCJzdWJwYXRoIiwiYnJlcXVpcmUiLCJmb3VuZCIsImluc3RhbmNlcyIsImZpbmQiLCJ2c3BlY2lmaWVyIiwiaW5pdGlhbGlzZWQiLCJ2YWx1ZXMiLCJCdW5kbGUiLCJ0eXBlIiwibmFtZSIsInVyaSIsInNwZWNzIiwiTW9kdWxlIiwibXVsdGlidW5kbGUiLCJyZWdpc3RlciIsInBhY2thZ2UiLCJsYW5ndWFnZSIsIlBhY2thZ2UiLCJFdmVudHMiLCJkZXN0cm95ZWQiLCJzdXBwb3J0ZWQiLCJBcnJheSIsImJpbmQiLCJldmVudCIsImxpc3RlbmVyIiwicHJpb3JpdHkiLCJvbiIsInVuYmluZCIsIm9mZiIsImluY2x1ZGVzIiwibCIsInB1c2giLCJmb3JjZSIsImRlbGV0ZSIsImUiLCJmaWx0ZXJlZCIsImZpbHRlciIsIml0ZW0iLCJ0cmlnZ2VyIiwicmVzdCIsImFyZ3MiLCJhcmd1bWVudHMiLCJzb3J0IiwiYSIsImIiLCJhc3luYyIsInByb21pc2VzIiwiYWxsIiwiY2FsbCIsImNhdGNoIiwiZGVzdHJveSIsImNsZWFyIiwiYnVuZGxlIiwic2NvcGUiLCJleGVjdXRlIiwiYWN0aW9uIiwicGFyYW1zIiwiYmV5b25kIiwiYmFja2VuZHMiLCJ1cGRhdGUiLCJkZXBzIiwiZm9yRWFjaCIsImRlcGVuZGVuY3kiLCJfX2JleW9uZF90cmFuc3ZlcnNhbCIsInRyYW5zdmVyc2FsIiwiYnVuZGxlcyIsImRlc2NyaXB0b3IiLCJobXIiLCJfX2JleW9uZF9wa2ciLCJrZXkiLCJ2YWx1ZSIsInRyYWNlIiwiVHJhY2UiLCJzb2x2ZSIsInJlc2VydmVkIiwiT2JqZWN0Iiwia2V5cyIsInAiLCJpbSIsImZyb20iLCJJTUV4cG9ydHMiLCJiZXhwb3J0cyIsIlByb3h5Iiwic2VsZiIsInByb3AiLCJJbnRlcm5hbE1vZHVsZSIsImhhc2giLCJjcmVhdGVkIiwiSW50ZXJuYWxNb2R1bGVzIiwiX3JlcXVpcmUiLCJSZXF1aXJlIiwiSlNPTiIsInN0cmluZ2lmeSIsInJ0IiwidHJhY2VkIiwicyIsIkRlcGVuZGVuY2llcyIsIkV4cG9ydHMiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImluZGV4LnRzIiwiYmltcG9ydC50cyIsImJyZXF1aXJlLnRzIiwiYnVuZGxlLnRzIiwiaW5zdGFuY2VzLnRzIiwiZGVwZW5kZW5jaWVzLnRzIiwiZXhwb3J0cy50cyIsImltLnRzIiwidHJhY2UudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19