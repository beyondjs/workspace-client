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
    hash: 1563705995,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.bimport = bimport;
      require("./brequire");
      /*bundle*/ /**
                  * Import a module, solving internally the module format (amd, esm).
                  *
                  * When running in a BEE, brequire and bimport are implemented by it, overriding both functions.
                  *
                  * @param resource {string} The resource identifier of the bundle
                  * @param version {number} The version required by hmr to update a bundle's processor
                  * @returns {Promise<*>}
                  */
      function bimport(resource, version) {
        if (bimport.mode === 'amd') {
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
        } else if (bimport.mode === 'sjs') {
          return globalThis.System.import(resource + (version ? `?version=${version}` : ''));
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
      const appDependencies = (() => {
        const dependencies = globalThis.__app_package?.dependencies;
        return new Map(dependencies);
      })();
      bimport.resolve = (specifier, dependencies) => {
        if (/^https?:\/\//.test(specifier)) return specifier;
        const split = specifier.split('/');
        const pkg = split[0].startsWith('@') ? `${split.shift()}/${split.shift()}` : split.shift();
        const version = (() => {
          if (dependencies.has(pkg)) return dependencies.get(pkg);
          if (appDependencies.has(pkg)) return appDependencies.get(pkg);
        })();
        if (!version) return specifier;
        const subpath = split.join('/');
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
      /*bundle*/ /**
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
        }
        // Used by the IM exports proxy to update the value of the bundle exported property when
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
          });
          // Clean all previous values
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
              self[name] = value;
              // Check if it is a bundle exported property
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
      var _exports = require("./exports");
      // Bundle internal module
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
          }
          // @beyond-js/kernel/transversals requires the Bundle object
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
      exports.Trace = void 0;
      // Used to find cyclical requires of internal modules
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
        }
        // The beyond dependencies that are required by the bundle
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
  let bimport, brequire, IBundleSpecs, Bundle, Events, ListenerFunction, instances, Module, IExportsDescriptor, IMSpecs, IMCreators, Package;

  // Module exports
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BU00sU0FBVUEsT0FBTyxDQUFDQyxNQUFjLEVBQUVDLEVBQVU7UUFDOUMsSUFBSSxDQUFDQSxFQUFFLENBQUNDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLElBQUlDLEtBQUssQ0FBQywwQ0FBMENGLEVBQUUsR0FBRyxDQUFDO1FBT3pGLE1BQU1HLEtBQUssR0FBVSxFQUFFO1FBQ3ZCQSxLQUFLLENBQUNKLE1BQU0sR0FBR0EsTUFBTSxDQUFDSSxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ2hDQSxLQUFLLENBQUNKLE1BQU0sQ0FBQ0ssR0FBRyxFQUFFO1FBQ2xCRCxLQUFLLENBQUNFLE1BQU0sR0FBRyxDQUFDTCxFQUFFLENBQUNDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBR0QsRUFBRSxDQUFDTSxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUdOLEVBQUUsRUFBRUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNwRSxPQUFPQSxLQUFLLENBQUNFLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUlGLEtBQUssQ0FBQ0UsTUFBTSxDQUFDRSxNQUFNLEdBQUcsQ0FBQyxFQUFFO1VBQ3RESixLQUFLLENBQUNFLE1BQU0sQ0FBQ0csS0FBSyxFQUFFO1VBQ3BCTCxLQUFLLENBQUNKLE1BQU0sQ0FBQ0ssR0FBRyxFQUFFOztRQUd0QixPQUFPRCxLQUFLLENBQUNKLE1BQU0sQ0FBQ1UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBR04sS0FBSyxDQUFDRSxNQUFNLENBQUNJLElBQUksQ0FBQyxHQUFHLENBQUM7TUFDaEU7TUFFQTs7O01BR00sTUFBT0MsYUFBYTtRQUN0QixJQUFJO1FBQ0ssT0FBTyxHQUFxQyxJQUFJQyxHQUFHLEVBQUU7UUFFOUQsUUFBUTtRQUVSQyxZQUFZQyxPQUFZO1VBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUdBLE9BQU87UUFDM0I7UUFFQUMsVUFBVSxDQUFDQyxHQUEwQjtVQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHQSxHQUFHO1VBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLENBQUNoQixFQUFVLEVBQUVELE1BQWUsS0FBVSxJQUFJLENBQUNrQixPQUFPLENBQUNqQixFQUFFLEVBQUVELE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUM3RjtRQUVBOzs7Ozs7O1FBT0FrQixPQUFPLENBQUNqQixFQUFVLEVBQUVELE1BQWU7VUFDL0JDLEVBQUUsR0FBR0QsTUFBTSxHQUFHRCxPQUFPLENBQUNDLE1BQU0sRUFBRUMsRUFBRSxDQUFDLEdBQUdBLEVBQUU7VUFFdEMsTUFBTWtCLE1BQU0sR0FBRyxDQUFDLE1BQUs7WUFDakIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNuQixFQUFFLENBQUMsRUFBRSxPQUFPQSxFQUFFO1lBQ2hDLE9BQU9BLEVBQUUsQ0FBQ29CLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHcEIsRUFBRSxPQUFPLEdBQUcsR0FBR0EsRUFBRSxRQUFRO1VBQzFELENBQUMsR0FBRztVQUVKLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQ21CLEdBQUcsQ0FBQ0QsTUFBTSxDQUFDLEVBQUUsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDRyxHQUFHLENBQUNILE1BQU0sQ0FBQztVQUM3RCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDRCxNQUFNLENBQUMsRUFBRSxNQUFNLElBQUloQixLQUFLLENBQUMsb0JBQW9CRixFQUFFLGFBQWEsQ0FBQztVQUVoRixNQUFNc0IsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUNELEdBQUcsQ0FBQ0gsTUFBTSxDQUFDLENBQUNLLE9BQU87VUFDeEMsTUFBTU4sT0FBTyxHQUFJTyxRQUFnQixJQUFLLElBQUksQ0FBQ1AsT0FBTyxDQUFDTyxRQUFRLEVBQUVOLE1BQU0sQ0FBQyxDQUFDLENBQUM7VUFDdEUsTUFBTUwsT0FBTyxHQUFHLEVBQUU7VUFDbEJTLEVBQUUsQ0FBQ0wsT0FBTyxFQUFFSixPQUFPLENBQUM7VUFFcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQ1ksR0FBRyxDQUFDUCxNQUFNLEVBQUVMLE9BQU8sQ0FBQztVQUNqQyxPQUFPQSxPQUFPO1FBQ2xCOztNQUNIQTs7Ozs7Ozs7Ozs7Ozs7Ozs7TUN6RURJO01BY08sV0FUUDs7Ozs7Ozs7O01BU2lCLFNBQVVTLE9BQU8sQ0FBQ0MsUUFBZ0IsRUFBRUMsT0FBZ0I7UUFDakUsSUFBSUYsT0FBTyxDQUFDRyxJQUFJLEtBQUssS0FBSyxFQUFFO1VBQ3hCLE9BQU8sSUFBSUMsT0FBTyxDQUFNLENBQUNoQyxPQUFPLEVBQUVpQyxNQUFNLEtBQUk7WUFDeEMsSUFBSSxPQUFPSixRQUFRLEtBQUssUUFBUSxFQUFFLE1BQU0sMEJBQTBCO1lBQ2xFQSxRQUFRLEdBQUdBLFFBQVEsQ0FBQ1AsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHTyxRQUFRLENBQUNyQixLQUFLLENBQUMsQ0FBQyxFQUFFcUIsUUFBUSxDQUFDcEIsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHb0IsUUFBUTtZQUV2RixNQUFNSyxLQUFLLEdBQUcsSUFBSTlCLEtBQUssQ0FBQyx1Q0FBdUN5QixRQUFRLEdBQUcsQ0FBQztZQUMzRU0sV0FBVyxDQUFDLENBQUNOLFFBQVEsQ0FBQyxFQUNqQk8sUUFBYSxJQUFLcEMsT0FBTyxDQUFDb0MsUUFBUSxDQUFDLEVBQ25DQyxHQUFVLElBQUk7Y0FDWEMsT0FBTyxDQUFDSixLQUFLLENBQUMsMkJBQTJCTCxRQUFRLElBQUksQ0FBQztjQUN0RFMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUcsQ0FBQ0csS0FBSyxDQUFDO2NBQ3RCUCxNQUFNLENBQUNDLEtBQUssQ0FBQztZQUNqQixDQUFDLENBQ0o7VUFDTCxDQUFDLENBQUM7U0FDTCxNQUFNLElBQUlOLE9BQU8sQ0FBQ0csSUFBSSxLQUFLLEtBQUssRUFBRTtVQUMvQixPQUFhVSxVQUFXLENBQUNDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDZCxRQUFRLElBQUlDLE9BQU8sR0FBRyxZQUFZQSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztTQUM1RixNQUFNO1VBQ0gsT0FBTyxNQUFNLENBQUNELFFBQVEsSUFBSUMsT0FBTyxHQUFHLFlBQVlBLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDOztNQUV4RTtNQUVBRixPQUFPLENBQUNHLElBQUksR0FBRyxDQUFDLE1BQUs7UUFDakIsSUFBSSxPQUFPSSxXQUFXLEtBQUssVUFBVSxFQUFFLE9BQU8sS0FBSztRQUNuRCxNQUFNO1VBQUNPO1FBQU0sQ0FBQyxHQUFTRCxVQUFXO1FBQ2xDLElBQUksT0FBT0MsTUFBTSxLQUFLLFFBQVEsSUFBSSxPQUFPQSxNQUFNLENBQUNDLE1BQU0sS0FBSyxVQUFVLEVBQUUsT0FBTyxLQUFLO1FBQ25GLE9BQU8sS0FBSztNQUNoQixDQUFDLEdBQUc7TUFFSixNQUFNQyxlQUFlLEdBQUcsQ0FBQyxNQUFLO1FBQzFCLE1BQU1DLFlBQVksR0FBU0osVUFBVyxDQUFDSyxhQUFhLEVBQUVELFlBQVk7UUFDbEUsT0FBTyxJQUFJaEMsR0FBRyxDQUFDZ0MsWUFBWSxDQUFDO01BQ2hDLENBQUMsR0FBRztNQUVKakIsT0FBTyxDQUFDNUIsT0FBTyxHQUFJLENBQUMrQyxTQUFpQixFQUFFRixZQUFpQixLQUFZO1FBQ2hFLElBQUksY0FBYyxDQUFDRyxJQUFJLENBQUNELFNBQVMsQ0FBQyxFQUFFLE9BQU9BLFNBQVM7UUFFcEQsTUFBTTFDLEtBQUssR0FBRzBDLFNBQVMsQ0FBQzFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDbEMsTUFBTTRDLEdBQUcsR0FBRzVDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ0YsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUdFLEtBQUssQ0FBQ0ssS0FBSyxFQUFFLElBQUlMLEtBQUssQ0FBQ0ssS0FBSyxFQUFFLEVBQUUsR0FBR0wsS0FBSyxDQUFDSyxLQUFLLEVBQUU7UUFFMUYsTUFBTW9CLE9BQU8sR0FBRyxDQUFDLE1BQUs7VUFDbEIsSUFBSWUsWUFBWSxDQUFDeEIsR0FBRyxDQUFDNEIsR0FBRyxDQUFDLEVBQUUsT0FBT0osWUFBWSxDQUFDdEIsR0FBRyxDQUFDMEIsR0FBRyxDQUFDO1VBQ3ZELElBQUlMLGVBQWUsQ0FBQ3ZCLEdBQUcsQ0FBQzRCLEdBQUcsQ0FBQyxFQUFFLE9BQU9MLGVBQWUsQ0FBQ3JCLEdBQUcsQ0FBQzBCLEdBQUcsQ0FBQztRQUNqRSxDQUFDLEdBQUc7UUFDSixJQUFJLENBQUNuQixPQUFPLEVBQUUsT0FBT2lCLFNBQVM7UUFFOUIsTUFBTUcsT0FBTyxHQUFHN0MsS0FBSyxDQUFDTSxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQy9CLE9BQU8sR0FBR3NDLEdBQUcsSUFBSW5CLE9BQU8sRUFBRSxJQUFJb0IsT0FBTyxHQUFHLElBQUlBLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQztNQUMvRCxDQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztNQy9ERjtNQWVPLFdBYlA7Ozs7Ozs7Ozs7Ozs7TUFhaUIsU0FBVUMsUUFBUSxDQUFDSixTQUFpQjtRQUNqRCxNQUFNMUMsS0FBSyxHQUFHMEMsU0FBUyxDQUFDMUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUNsQyxNQUFNNEMsR0FBRyxHQUFHNUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDRixVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBR0UsS0FBSyxDQUFDSyxLQUFLLEVBQUUsSUFBSUwsS0FBSyxDQUFDSyxLQUFLLEVBQUUsRUFBRSxHQUFHTCxLQUFLLENBQUNLLEtBQUssRUFBRTtRQUMxRixNQUFNd0MsT0FBTyxHQUFHN0MsS0FBSyxDQUFDTSxJQUFJLENBQUMsR0FBRyxDQUFDO1FBRS9CLE1BQU15QyxLQUFLLEdBQUcsQ0FBQyxHQUFHQyxrQkFBUyxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDLENBQUNDLFVBQVUsQ0FBQyxLQUFJO1VBQy9DLElBQUksQ0FBQ0EsVUFBVSxDQUFDcEQsVUFBVSxDQUFDLEdBQUc4QyxHQUFHLEdBQUcsQ0FBQyxFQUFFO1VBQ3ZDLE1BQU01QyxLQUFLLEdBQUdrRCxVQUFVLENBQUMvQyxLQUFLLENBQUN5QyxHQUFHLENBQUN4QyxNQUFNLENBQUMsQ0FBQ0osS0FBSyxDQUFDLEdBQUcsQ0FBQztVQUNyREEsS0FBSyxDQUFDSyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1VBQ2YsT0FBT3dDLE9BQU8sS0FBSzdDLEtBQUssQ0FBQ00sSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUN0QyxDQUFDLENBQUM7UUFDRixJQUFJLENBQUN5QyxLQUFLLEVBQUU7UUFFWixDQUFDQSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUNJLFdBQVcsSUFBSUosS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDcEMsVUFBVSxFQUFFO1FBQzlDLE9BQU9vQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUNyQyxPQUFPLENBQUMwQyxNQUFNO01BQ2xDOzs7Ozs7Ozs7Ozs7O01DOUJBO01BQ0E7TUFFQTs7O01BR01oQixVQUFXLENBQUNiLE9BQU8sS0FBSyxLQUFLLENBQUMsS0FBV2EsVUFBVyxDQUFDYixPQUFPLEdBQUdBLGdCQUFPLENBQUM7TUFDdkVhLFVBQVcsQ0FBQ1UsUUFBUSxLQUFLLEtBQUssQ0FBQyxLQUFXVixVQUFXLENBQUNVLFFBQVEsR0FBR0Esa0JBQVEsQ0FBQzs7Ozs7Ozs7Ozs7TUNQaEY7O01BRUFPO1FBQ0FDO01BQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O01DSkE7TUFDQTtNQUNBO01BQ0F4QztNQVNPO01BQVUsTUFDWHlDLE1BQU8sU0FBUS9DLEdBQW9CO1FBQzVCLEtBQUs7UUFDZCxJQUFJZ0QsSUFBSTtVQUNKLE9BQU8sSUFBSSxDQUFDLEtBQUs7UUFDckI7UUFFUyxLQUFLO1FBQ2QsSUFBSUMsSUFBSTtVQUNKLE9BQU8sSUFBSSxDQUFDLEtBQUs7UUFDckI7UUFFUyxXQUFXO1FBQ3BCLElBQUlQLFVBQVU7VUFDVixPQUFPLElBQUksQ0FBQyxXQUFXO1FBQzNCO1FBRVMsVUFBVTtRQUNuQixJQUFJUixTQUFTO1VBQ1QsT0FBTyxJQUFJLENBQUMsVUFBVTtRQUMxQjtRQUVTLE9BQU87UUFDaEIsSUFBSTNCLE1BQU07VUFDTixPQUFPLElBQUksQ0FBQyxPQUFPO1FBQ3ZCO1FBRVMsSUFBSTtRQUNiLElBQUkyQyxHQUFHO1VBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSTtRQUNwQjtRQUVBakQsWUFBWWtELEtBQW1CLEVBQUVELEdBQVk7VUFDekMsS0FBSyxFQUFFO1VBRVAsSUFBSSxPQUFPQyxLQUFLLEtBQUssUUFBUSxFQUFFLE1BQU0sSUFBSTVELEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQztVQUU5RixNQUFNMEQsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUdFLEtBQUssQ0FBQ0YsSUFBSSxHQUFHRSxLQUFLLENBQUNGLElBQUksR0FBR0UsS0FBSyxDQUFDSCxJQUFJO1VBQzlELElBQUksQ0FBQ0MsSUFBSSxFQUFFLE1BQU0sSUFBSTFELEtBQUssQ0FBQyx1Q0FBdUMsQ0FBQztVQUVuRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUk2RCxjQUFNLENBQUNELEtBQUssQ0FBQzVDLE1BQU0sQ0FBQztVQUN2QyxJQUFJLENBQUMsSUFBSSxHQUFHMkMsR0FBRztVQUNmLElBQUksQ0FBQyxLQUFLLEdBQUdDLEtBQUssQ0FBQ0gsSUFBSTtVQUV2QixNQUFNO1lBQUNLLFdBQVc7WUFBRVgsVUFBVTtZQUFFUjtVQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTztVQUN6RCxJQUFJLENBQUMsV0FBVyxHQUFHbUIsV0FBVyxHQUFHLEdBQUdYLFVBQVUsSUFBSU8sSUFBSSxFQUFFLEdBQUdQLFVBQVU7VUFDckUsSUFBSSxDQUFDLFVBQVUsR0FBR1csV0FBVyxHQUFHLEdBQUduQixTQUFTLElBQUllLElBQUksRUFBRSxHQUFHZixTQUFTO1VBRWxFTSxvQkFBUyxDQUFDYyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQzVCO1FBRUFDLE9BQU8sQ0FBQ0MsUUFBaUI7VUFDckIsSUFBSUEsUUFBUSxJQUFJQSxRQUFRLENBQUM1RCxNQUFNLEtBQUssQ0FBQyxFQUFFLE1BQU0sSUFBSUwsS0FBSyxDQUFDLGFBQWFpRSxRQUFRLGNBQWMsQ0FBQztVQUMzRkEsUUFBUSxHQUFHLENBQUNBLFFBQVEsR0FBRyxFQUFFLEdBQUdBLFFBQVE7VUFFcEMsSUFBSSxJQUFJLENBQUNoRCxHQUFHLENBQUNnRCxRQUFRLENBQUMsRUFBRSxPQUFPLElBQUksQ0FBQzlDLEdBQUcsQ0FBQzhDLFFBQVEsQ0FBQztVQUVqRCxNQUFNcEIsR0FBRyxHQUFHLElBQUlxQixnQkFBTyxDQUFDLElBQUksRUFBRUQsUUFBUSxDQUFDO1VBQ3ZDLElBQUksQ0FBQzFDLEdBQUcsQ0FBQzBDLFFBQVEsRUFBRXBCLEdBQUcsQ0FBQztVQUN2QixPQUFPQSxHQUFHO1FBQ2Q7O01BQ0hsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7TUN2RU07TUFBVSxNQUNYd0QsTUFBTTtRQUNSLE1BQU07UUFDTixVQUFVLEdBQWlDLElBQUkxRCxHQUFHO1FBQ2xELFVBQVUsR0FBRyxLQUFLO1FBQ2xCLElBQUkyRCxTQUFTO1VBQ1QsT0FBTyxJQUFJLENBQUMsVUFBVTtRQUMxQjtRQUVBMUQsWUFBWWtELEtBQW1CO1VBQzNCQSxLQUFLLEdBQUdBLEtBQUssR0FBR0EsS0FBSyxHQUFHLEVBQUU7VUFFMUIsSUFBSUEsS0FBSyxDQUFDUyxTQUFTLElBQUksRUFBRVQsS0FBSyxDQUFDUyxTQUFTLFlBQVlDLEtBQUssQ0FBQyxFQUFFLE1BQU0sSUFBSXRFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQztVQUNqRyxJQUFJLENBQUMsTUFBTSxHQUFHNEQsS0FBSztVQUVuQixJQUFJQSxLQUFLLENBQUNXLElBQUksRUFBRTtZQUNaWCxLQUFLLENBQUNXLElBQUksQ0FBQ0EsSUFBSSxHQUFHLENBQUNDLEtBQWEsRUFBRUMsUUFBMEIsRUFBRUMsUUFBZ0IsS0FDbEUsSUFBSSxDQUFDQyxFQUFFLENBQUNILEtBQUssRUFBRUMsUUFBUSxFQUFFQyxRQUFRLENBQUM7WUFDOUNkLEtBQUssQ0FBQ1csSUFBSSxDQUFDSyxNQUFNLEdBQUcsQ0FBQ0osS0FBSyxFQUFFQyxRQUFRLEtBQUssSUFBSSxDQUFDSSxHQUFHLENBQUNMLEtBQUssRUFBRUMsUUFBUSxDQUFDOztRQUUxRTtRQUVBOzs7Ozs7OztRQVFBRSxFQUFFLENBQUNILEtBQWEsRUFBRUMsUUFBMEIsRUFBRUMsUUFBaUI7VUFDM0QsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLE1BQU0sSUFBSTFFLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQzs7VUFFakQsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDcUUsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQ0EsU0FBUyxDQUFDUyxRQUFRLENBQUNOLEtBQUssQ0FBQyxFQUFFO1lBQ2pFLE1BQU0sSUFBSXhFLEtBQUssQ0FBQyxVQUFVd0UsS0FBSyxrQkFBa0IsQ0FBQzs7VUFFdEQsSUFBSSxPQUFPQyxRQUFRLEtBQUssVUFBVSxFQUFFO1lBQ2hDLE1BQU0sSUFBSXpFLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQzs7VUFHakQsSUFBSSxDQUFDNkUsR0FBRyxDQUFDTCxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxDQUFDLENBQUM7VUFFM0IsTUFBTU0sQ0FBQyxHQUFvQixJQUFJLENBQUMsVUFBVSxDQUFDOUQsR0FBRyxDQUFDdUQsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQ3JELEdBQUcsQ0FBQ3FELEtBQUssQ0FBQyxHQUFHLEVBQUU7VUFDdkYsSUFBSSxDQUFDLFVBQVUsQ0FBQ2pELEdBQUcsQ0FBQ2lELEtBQUssRUFBRU8sQ0FBQyxDQUFDO1VBQzdCQSxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFDUCxRQUFRLEVBQUVBLFFBQVE7WUFBRUMsUUFBUSxFQUFFQSxRQUFRLEdBQUdBLFFBQVEsR0FBRztVQUFDLENBQUMsQ0FBQztVQUUvRCxPQUFPLElBQUk7UUFDZjtRQUVBSCxJQUFJLEdBQUcsQ0FBQ0MsS0FBYSxFQUFFQyxRQUEwQixFQUFFQyxRQUFpQixLQUNoRSxJQUFJLENBQUNDLEVBQUUsQ0FBQ0gsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsQ0FBQztRQUV0Qzs7Ozs7Ozs7UUFRQUcsR0FBRyxDQUFDTCxLQUFhLEVBQUVDLFFBQTBCLEVBQUVRLEtBQWM7VUFDekQsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLE1BQU0sSUFBSWpGLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQzs7VUFFakQsSUFBSSxDQUFDd0UsS0FBSyxFQUFFO1lBQ1IsTUFBTSxJQUFJeEUsS0FBSyxDQUFDLDBCQUEwQixDQUFDOztVQUUvQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUNxRSxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDQSxTQUFTLENBQUNTLFFBQVEsQ0FBQ04sS0FBSyxDQUFDLEVBQUU7WUFDakUsTUFBTSxJQUFJeEUsS0FBSyxDQUFDLFVBQVV3RSxLQUFLLGtCQUFrQixDQUFDOztVQUd0RCxJQUFJLENBQUNDLFFBQVEsRUFBRTtZQUNYLElBQUksQ0FBQ1EsS0FBSyxFQUFFLE1BQU0sSUFBSWpGLEtBQUssQ0FBQywyQkFBMkIsQ0FBQztZQUN4RCxJQUFJLENBQUMsVUFBVSxDQUFDa0YsTUFBTSxDQUFDVixLQUFLLENBQUM7WUFDN0IsT0FBTyxJQUFJOztVQUdmLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDdkQsR0FBRyxDQUFDdUQsS0FBSyxDQUFDLEVBQUU7WUFDN0IsT0FBTyxJQUFJOztVQUdmLE1BQU1XLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDaEUsR0FBRyxDQUFDcUQsS0FBSyxDQUFDO1VBQ3BDLE1BQU1ZLFFBQVEsR0FBb0JELENBQUMsQ0FBQ0UsTUFBTSxDQUFDQyxJQUFJLElBQUlBLElBQUksQ0FBQ2IsUUFBUSxLQUFLQSxRQUFRLENBQUM7VUFDOUUsSUFBSSxDQUFDLFVBQVUsQ0FBQ2xELEdBQUcsQ0FBQ2lELEtBQUssRUFBRVksUUFBUSxDQUFDO1VBRXBDLE9BQU8sSUFBSTtRQUNmO1FBRUFSLE1BQU0sR0FBRyxDQUFDSixLQUFhLEVBQUVDLFFBQTBCLEVBQUVRLEtBQWMsS0FDL0QsSUFBSSxDQUFDSixHQUFHLENBQUNMLEtBQUssRUFBRUMsUUFBUSxFQUFFUSxLQUFLLENBQUM7UUFFcEM7Ozs7Ozs7UUFPQU0sT0FBTyxDQUFDZixLQUFjLEVBQUUsR0FBR2dCLElBQVM7VUFDaEMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLE1BQU0sSUFBSXhGLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQzs7VUFHakR3RSxLQUFLLEdBQUcsT0FBT0EsS0FBSyxLQUFLLFFBQVEsR0FBRztZQUFDLE1BQU0sRUFBRUE7VUFBSyxDQUFDLEdBQUdBLEtBQUs7VUFDM0QsSUFBSSxPQUFPQSxLQUFLLEtBQUssUUFBUSxFQUFFLE1BQU0sSUFBSXhFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQztVQUNwRSxJQUFJLE9BQU93RSxLQUFLLENBQUNkLElBQUksS0FBSyxRQUFRLEVBQUUsTUFBTSxJQUFJMUQsS0FBSyxDQUFDLG9CQUFvQixDQUFDO1VBRXpFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQ3FFLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUNBLFNBQVMsQ0FBQ1MsUUFBUSxDQUFDTixLQUFLLENBQUNkLElBQUksQ0FBQyxFQUFFO1lBQ3RFLE1BQU0sSUFBSTFELEtBQUssQ0FBQyxVQUFVd0UsS0FBSyxDQUFDZCxJQUFJLGtCQUFrQixDQUFDOztVQUczRCxJQUFJK0IsSUFBSSxHQUFHLENBQUMsR0FBR0MsU0FBUyxDQUFDO1VBQ3pCRCxJQUFJLENBQUNuRixLQUFLLEVBQUUsQ0FBQyxDQUFDO1VBRWQsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUNXLEdBQUcsQ0FBQ3VELEtBQUssQ0FBQ2QsSUFBSSxDQUFDLEVBQUU7VUFFdEMsSUFBSXFCLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDNUQsR0FBRyxDQUFDcUQsS0FBSyxDQUFDZCxJQUFJLENBQUM7VUFFdkM7VUFDQXFCLENBQUMsQ0FBQ1ksSUFBSSxDQUFDLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxLQUFLQSxDQUFDLENBQUNuQixRQUFRLEdBQUdrQixDQUFDLENBQUNsQixRQUFRLENBQUM7VUFFekMsSUFBSUYsS0FBSyxDQUFDc0IsS0FBSyxFQUFFO1lBRWIsTUFBTVAsT0FBTyxHQUFHLGtCQUFLO2NBRWpCLE1BQU1RLFFBQVEsR0FBRyxFQUFFO2NBQ25CLEtBQUssSUFBSXRCLFFBQVEsSUFBSU0sQ0FBQyxFQUFFO2dCQUNwQmdCLFFBQVEsQ0FBQ2YsSUFBSSxDQUFDUCxRQUFRLENBQUNBLFFBQVEsQ0FBQyxHQUFHZ0IsSUFBSSxDQUFDLENBQUM7O2NBRzdDLE1BQU03RCxPQUFPLENBQUNvRSxHQUFHLENBQUNELFFBQVEsQ0FBQztZQUUvQixDQUFDO1lBRUQsT0FBT1IsT0FBTyxDQUFDVSxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUdSLElBQUksQ0FBQyxDQUFDUyxLQUFLLENBQUVqRSxHQUFVLElBQUtDLE9BQU8sQ0FBQ0osS0FBSyxDQUFDRyxHQUFHLENBQUNHLEtBQUssQ0FBQyxDQUFDO1dBRXJGLE1BQU07WUFDSCxLQUFLLElBQUlxQyxRQUFRLElBQUlNLENBQUMsRUFBRTtjQUNwQk4sUUFBUSxDQUFDQSxRQUFRLENBQUMsR0FBR2dCLElBQUksQ0FBQzs7O1FBR3RDO1FBRUFVLE9BQU87VUFDSCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUk7VUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQ0MsS0FBSyxFQUFFO1FBQzNCOztNQUNIekY7Ozs7Ozs7Ozs7O01DdEpEOztNQUVBMkM7UUFDQUM7TUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNGTztNQUFXLE1BQU1OLFNBQVMsR0FBRyxJQUFJLGNBQWN4QyxHQUFHO1FBQ3JEc0QsUUFBUSxDQUFDc0MsTUFBYztVQUNuQixJQUFJLENBQUM5RSxHQUFHLENBQUM4RSxNQUFNLENBQUNsRCxVQUFVLEVBQUVrRCxNQUFNLENBQUM7UUFDdkM7T0FDSDtNQUFBMUY7Ozs7Ozs7Ozs7Ozs7Ozs7O01DQ007TUFBVSxNQUNYa0QsTUFBTTtRQUNDLElBQUk7UUFDYixJQUFJaEIsR0FBRztVQUNILE9BQU8sSUFBSSxDQUFDLElBQUk7UUFDcEI7UUFFUyxXQUFXO1FBQ3BCLElBQUlNLFVBQVU7VUFDVixPQUFPLElBQUksQ0FBQyxXQUFXO1FBQzNCO1FBRVMsVUFBVTtRQUNuQixJQUFJUixTQUFTO1VBQ1QsT0FBTyxJQUFJLENBQUMsVUFBVTtRQUMxQjtRQUVTLFFBQVE7UUFDakIsSUFBSWpCLE9BQU87VUFDUCxPQUFPLElBQUksQ0FBQyxRQUFRO1FBQ3hCO1FBRVMsUUFBUTtRQUNqQixJQUFJb0IsT0FBTztVQUNQLE9BQU8sSUFBSSxDQUFDLFFBQVE7UUFDeEI7UUFFUyxZQUFZO1FBQ3JCLElBQUlnQixXQUFXO1VBQ1gsT0FBTyxJQUFJLENBQUMsWUFBWTtRQUM1QjtRQUVBcEQsWUFBWWtELEtBQW1CO1VBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUdBLEtBQUssQ0FBQ1QsVUFBVTtVQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFHUyxLQUFLLENBQUNFLFdBQVc7VUFFckMsTUFBTTdELEtBQUssR0FBRzJELEtBQUssQ0FBQ1QsVUFBVSxDQUFDbEQsS0FBSyxDQUFDLEdBQUcsQ0FBQztVQUN6QyxNQUFNcUcsS0FBSyxHQUFHckcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDRixVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUdFLEtBQUssQ0FBQ0ssS0FBSyxFQUFFLEdBQUcsS0FBSyxDQUFDO1VBQy9ELE1BQU0sQ0FBQ29ELElBQUksRUFBRWhDLE9BQU8sQ0FBQyxHQUFHekIsS0FBSyxDQUFDSyxLQUFLLEVBQUUsQ0FBQ0wsS0FBSyxDQUFDLEdBQUcsQ0FBQztVQUVoRCxJQUFJLENBQUMsUUFBUSxHQUFHQSxLQUFLLENBQUNNLElBQUksQ0FBQyxHQUFHLENBQUM7VUFDL0IsSUFBSSxDQUFDLElBQUksR0FBRytGLEtBQUssR0FBRyxHQUFHQSxLQUFLLElBQUk1QyxJQUFJLEVBQUUsR0FBR0EsSUFBSTtVQUM3QyxJQUFJLENBQUMsUUFBUSxHQUFHaEMsT0FBTztVQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDNUU7UUFFQTs7Ozs7OztRQU9BLE1BQU02RSxPQUFPLENBQUNDLE1BQWMsRUFBRUMsTUFBMkI7VUFDckQsSUFBSSxPQUFhcEUsVUFBVyxDQUFDcUUsTUFBTSxLQUFLLFFBQVEsRUFBRTtVQUVsRCxNQUFNO1lBQUNDO1VBQVEsQ0FBQyxHQUFHLE1BQU1ELE1BQU0sQ0FBQ25FLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQztVQUNuRSxPQUFPLE1BQU1vRSxRQUFRLENBQUNKLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLE1BQU0sQ0FBQztRQUNyRjs7TUFDSDlGOzs7Ozs7Ozs7Ozs7Ozs7OztNQ2hFYSx1QkFBZUYsR0FBZ0I7UUFDekMsSUFBSTtRQUVKQyxZQUFZbUMsR0FBWTtVQUNwQixLQUFLLEVBQUU7VUFDUCxJQUFJLENBQUMsSUFBSSxHQUFHQSxHQUFHO1FBQ25CO1FBRUErRCxNQUFNLENBQUNDLElBQXNCO1VBQ3pCLElBQUksQ0FBQ1QsS0FBSyxFQUFFO1VBRVpTLElBQUksRUFBRUMsT0FBTyxDQUFDLENBQUMsQ0FBQ25FLFNBQVMsRUFBRW9FLFVBQVUsQ0FBQyxLQUFJO1lBQ3RDLElBQUksQ0FBQ0EsVUFBVSxFQUFFO2NBQ2IsTUFBTSxJQUFJL0csS0FBSyxDQUFDLGVBQWUyQyxTQUFTLDJCQUEyQixJQUFJLENBQUMsSUFBSSxDQUFDUSxVQUFVLEdBQUcsQ0FBQzs7WUFHL0YsTUFBTTtjQUFDNkQsb0JBQW9CLEVBQUVDO1lBQVcsQ0FBQyxHQUFHRixVQUFVO1lBQ3REQSxVQUFVLEdBQUdFLFdBQVcsR0FBR0EsV0FBVyxDQUFDQyxPQUFPLENBQUMvRixHQUFHLENBQUN3QixTQUFTLENBQUMsR0FBR29FLFVBQVU7WUFDMUUsSUFBSSxDQUFDeEYsR0FBRyxDQUFDb0IsU0FBUyxFQUFFb0UsVUFBVSxDQUFDO1VBQ25DLENBQUMsQ0FBQztRQUNOOztNQUNIcEc7Ozs7Ozs7Ozs7Ozs7Ozs7O01DdEJEO01BWWM7UUFDVixRQUFRO1FBQ1IsT0FBTyxHQUF3QixFQUFFO1FBQ2pDLElBQUkwQyxNQUFNO1VBQ04sT0FBTyxJQUFJLENBQUMsT0FBTztRQUN2QjtRQUVBOzs7O1FBSUE4RCxVQUFVO1FBRVY7Ozs7UUFJQXJHLE9BQU87UUFFUEosWUFBWUssT0FBZ0I7VUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBR0EsT0FBTztVQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDcUcsR0FBRyxHQUFHO1lBQ2Z6QyxFQUFFLEVBQUUsQ0FBQ0gsS0FBYSxFQUFFQyxRQUFhLEtBQUsxRCxPQUFPLENBQUM4QixHQUFHLENBQUN1RSxHQUFHLENBQUN6QyxFQUFFLENBQUNILEtBQUssRUFBRUMsUUFBUSxDQUFDO1lBQ3pFSSxHQUFHLEVBQUUsQ0FBQ0wsS0FBYSxFQUFFQyxRQUFhLEtBQUsxRCxPQUFPLENBQUM4QixHQUFHLENBQUN1RSxHQUFHLENBQUN2QyxHQUFHLENBQUNMLEtBQUssRUFBRUMsUUFBUTtXQUM3RTtVQUVELElBQUksQ0FBQyxPQUFPLENBQUM0QyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQ3hFLEdBQUc7UUFDakQ7UUFFQTtRQUNBO1FBQ0F0QixHQUFHLENBQUMrRixHQUFXLEVBQUUvRCxLQUFhO1VBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMrRCxHQUFHLENBQUMsR0FBRy9ELEtBQUs7UUFDN0I7UUFFQXFELE1BQU07VUFDRixNQUFNN0YsT0FBTyxHQUFJakIsRUFBVSxJQUFJO1lBQzNCLE1BQU15SCxLQUFLLEdBQUcsSUFBSUMsWUFBSyxFQUFFO1lBQ3pCRCxLQUFLLENBQUN4RCxRQUFRLENBQUMsZ0JBQWdCLEVBQUVqRSxFQUFFLENBQUM7WUFDcEMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDMkgsS0FBSyxDQUFDM0gsRUFBRSxFQUFFeUgsS0FBSyxDQUFDO1VBQ3pDLENBQUM7VUFFRCxJQUFJLENBQUN6RyxPQUFPLEdBQUc7WUFBQ0M7VUFBTyxDQUFDLENBQUM7VUFFekI7VUFDQSxNQUFNMkcsUUFBUSxHQUFHLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQztVQUN4Q3BFLE1BQU0sQ0FBQ3FFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUNiLE9BQU8sQ0FBQ2MsQ0FBQyxJQUFJLENBQUNGLFFBQVEsQ0FBQzVDLFFBQVEsQ0FBQzhDLENBQUMsQ0FBQyxJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQ0EsQ0FBQyxDQUFDLENBQUM7VUFFdkYsSUFBSSxDQUFDVCxVQUFVLEVBQUVMLE9BQU8sQ0FBQyxDQUFDO1lBQUNlLEVBQUU7WUFBRUMsSUFBSTtZQUFFcEU7VUFBSSxDQUFDLEtBQUk7WUFDMUMsTUFBTTZELEtBQUssR0FBRyxJQUFJQyxZQUFLLEVBQUU7WUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQzlELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMrRCxLQUFLLENBQUNJLEVBQUUsRUFBRU4sS0FBSyxDQUFDLENBQUNPLElBQUksQ0FBQztVQUM3RCxDQUFDLENBQUM7UUFDTjs7TUFDSG5IOzs7Ozs7Ozs7Ozs7Ozs7OztNQy9ESyxNQUFPb0gsU0FBUztRQUNsQnJILFlBQVltSCxFQUFrQixFQUFFRyxRQUF3QjtVQUNwRCxPQUFPLElBQUlDLEtBQUssQ0FBQyxJQUFJLEVBQUU7WUFDbkIxRyxHQUFHLEVBQUUsQ0FBQzJHLElBQVUsRUFBRXhFLElBQVksRUFBRUgsS0FBVSxLQUFJO2NBQzFDO2NBQ00yRSxJQUFLLENBQUN4RSxJQUFJLENBQUMsR0FBR0gsS0FBSztjQUV6QjtjQUNBLE1BQU00RSxJQUFJLEdBQUdILFFBQVEsQ0FBQ2IsVUFBVSxFQUFFakUsSUFBSSxDQUFDLENBQUM7Z0JBQUMyRSxFQUFFLEVBQUUvSCxFQUFFO2dCQUFFZ0k7Y0FBSSxDQUFDLEtBQUk7Z0JBQ3RELE9BQU9ELEVBQUUsQ0FBQy9ILEVBQUUsS0FBS0EsRUFBRSxJQUFJNEQsSUFBSSxLQUFLb0UsSUFBSTtjQUN4QyxDQUFDLENBQUM7Y0FDRkssSUFBSSxJQUFJSCxRQUFRLENBQUN6RyxHQUFHLENBQUM0RyxJQUFJLENBQUN6RSxJQUFJLEVBQUVILEtBQUssQ0FBQztjQUN0QzRFLElBQUksSUFBSUgsUUFBUSxDQUFDbEgsT0FBTyxHQUFHO2dCQUFDcUgsSUFBSSxFQUFFQSxJQUFJLENBQUN6RSxJQUFJO2dCQUFFSDtjQUFLLENBQUMsQ0FBQztjQUVwRCxPQUFPLElBQUk7WUFDZjtXQUNILENBQUM7UUFDTjs7TUFDSDVDOzs7Ozs7Ozs7Ozs7Ozs7OztNQ25CRDtNQUNBO01BUUE7TUFDTSxNQUFPeUgsY0FBYztRQUNkLElBQUk7UUFFYixJQUFJcEUsT0FBTztVQUNQLE9BQU8sSUFBSSxDQUFDLElBQUk7UUFDcEI7UUFFUyxHQUFHO1FBQ1osSUFBSWxFLEVBQUU7VUFDRixPQUFPLElBQUksQ0FBQyxHQUFHO1FBQ25CO1FBRUEsS0FBSztRQUNMLElBQUl1SSxJQUFJO1VBQ0osT0FBTyxJQUFJLENBQUMsS0FBSztRQUNyQjtRQUVTLFFBQVE7UUFFUixRQUFRO1FBRWpCLFFBQVE7UUFDUixTQUFTLEdBQUcsS0FBSztRQUNqQixRQUFRLEdBQUcsS0FBSztRQUNoQixJQUFJQyxPQUFPO1VBQ1AsT0FBTyxJQUFJLENBQUMsUUFBUTtRQUN4QjtRQUVBLE9BQU8sR0FBSWYsS0FBWSxJQUFJO1VBQ3ZCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLElBQUl2SCxLQUFLLENBQUMsb0JBQW9CLElBQUksQ0FBQyxHQUFHLG1CQUFtQixDQUFDO1VBQ25GLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxNQUFNLElBQUlBLEtBQUssQ0FBQyw2Q0FBNkMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO1VBQzdGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSTtVQUVyQixNQUFNZSxPQUFPLEdBQUlqQixFQUFVLElBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQzJILEtBQUssQ0FBQzNILEVBQUUsRUFBRXlILEtBQUssRUFBRSxJQUFJLENBQUM7VUFFcEVqRSxNQUFNLENBQUNxRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDYixPQUFPLENBQUNRLEdBQUcsSUFBSSxPQUFhLElBQUksQ0FBQyxRQUFTLENBQUNBLEdBQUcsQ0FBQyxDQUFDO1VBQzNFLElBQUksQ0FBQyxRQUFRLENBQUN2RyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQztVQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUk7VUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLO1FBQzFCLENBQUM7UUFFREEsT0FBTyxDQUFDd0csS0FBWSxFQUFFMUgsTUFBc0I7VUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDaEJBLE1BQU0sSUFBSTBILEtBQUssQ0FBQ3hELFFBQVEsQ0FBQ2xFLE1BQU0sQ0FBQ0MsRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQ3lILEtBQUssQ0FBQztZQUNuQkEsS0FBSyxDQUFDckgsR0FBRyxFQUFFOztVQUVmLE9BQU8sSUFBSSxDQUFDLFFBQVE7UUFDeEI7UUFFQVUsVUFBVTtVQUNOLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtVQUVuQixNQUFNMkcsS0FBSyxHQUFHLElBQUlDLFlBQUssRUFBRTtVQUN6QkQsS0FBSyxDQUFDeEQsUUFBUSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxHQUFHLENBQUM7VUFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQ3dELEtBQUssQ0FBQztRQUN2QjtRQUVBWCxNQUFNLENBQUN2RixPQUEwQixFQUFFZ0gsSUFBWTtVQUMzQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUs7VUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBR2hILE9BQU87VUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBR2dILElBQUk7UUFDckI7UUFFQTNILFlBQVltQyxHQUFZLEVBQUUvQyxFQUFVLEVBQUV1SSxJQUFZLEVBQUVoSCxPQUEwQixFQUFFTixPQUFnQjtVQUM1RixJQUFJLENBQUMsSUFBSSxHQUFHOEIsR0FBRztVQUNmLElBQUksQ0FBQyxHQUFHLEdBQUcvQyxFQUFFO1VBQ2IsSUFBSSxDQUFDLEtBQUssR0FBR3VJLElBQUk7VUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBR2hILE9BQU87VUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBR04sT0FBTztVQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUlnSCxrQkFBUyxDQUFDLElBQUksRUFBRWxGLEdBQUcsQ0FBQ2xDLE9BQU8sQ0FBQztRQUNwRDs7TUFDSEE7Ozs7Ozs7Ozs7Ozs7Ozs7O01DaEZEO01BS00sTUFBTzRILGVBQWU7UUFDZixJQUFJO1FBQ0osSUFBSSxHQUFnQyxJQUFJOUgsR0FBRyxFQUFFO1FBQ3RELFFBQVE7UUFFUkMsWUFBWW1DLEdBQVk7VUFDcEIsSUFBSSxDQUFDLElBQUksR0FBR0EsR0FBRztRQUNuQjtRQUVBLElBQUkyRixRQUFRLENBQUNqRixLQUFjO1VBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUdBLEtBQUs7UUFDekI7UUFFQSxTQUFTLEdBQUcsQ0FBQ3pELEVBQVUsRUFBRXVJLElBQVksRUFBRWhILE9BQTBCLEtBQUk7VUFDakUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDSixHQUFHLENBQUNuQixFQUFFLENBQUMsRUFBRSxNQUFNLElBQUlFLEtBQUssQ0FBQyxPQUFPRixFQUFFLHNCQUFzQixDQUFDO1VBRXZFLE1BQU0rSCxFQUFFLEdBQUcsSUFBSU8sa0JBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFdEksRUFBRSxFQUFFdUksSUFBSSxFQUFFaEgsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUM7VUFDMUUsSUFBSSxDQUFDLElBQUksQ0FBQ0UsR0FBRyxDQUFDc0csRUFBRSxDQUFDL0gsRUFBRSxFQUFFK0gsRUFBRSxDQUFDO1FBQzVCLENBQUM7UUFFRDlELFFBQVEsQ0FBQ2xELEdBQWU7VUFDcEJBLEdBQUcsQ0FBQ2lHLE9BQU8sQ0FBQyxDQUFDO1lBQUN6RixPQUFPO1lBQUVnSDtVQUFJLENBQUMsRUFBRXZJLEVBQUUsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDQSxFQUFFLEVBQUV1SSxJQUFJLEVBQUVoSCxPQUFPLENBQUMsQ0FBQztRQUMzRTtRQUVBTixPQUFPLENBQUNqQixFQUFVLEVBQUV5SCxLQUFZLEVBQUUxSCxNQUFzQjtVQUNwRCxNQUFNbUIsTUFBTSxHQUFHLENBQUMsTUFBSztZQUNqQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ25CLEVBQUUsQ0FBQyxFQUFFLE9BQU9BLEVBQUU7WUFDaEMsT0FBT0EsRUFBRSxDQUFDb0IsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUdwQixFQUFFLE9BQU8sR0FBRyxHQUFHQSxFQUFFLFFBQVE7VUFDMUQsQ0FBQyxHQUFHO1VBRUosSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUNtQixHQUFHLENBQUNELE1BQU0sQ0FBQyxFQUFFO1lBQ3hCLE1BQU0sSUFBSWhCLEtBQUssQ0FBQyxvQkFBb0JGLEVBQUUsYUFBYSxDQUFDOztVQUd4RCxNQUFNK0gsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMxRyxHQUFHLENBQUNILE1BQU0sQ0FBQztVQUNoQyxPQUFPNkcsRUFBRSxDQUFDOUcsT0FBTyxDQUFDd0csS0FBSyxFQUFFMUgsTUFBTSxDQUFDO1FBQ3BDO1FBRUFlLFVBQVU7VUFDTixJQUFJLENBQUMsSUFBSSxDQUFDa0csT0FBTyxDQUFDZSxFQUFFLElBQUlBLEVBQUUsQ0FBQ2pILFVBQVUsRUFBRSxDQUFDO1FBQzVDO1FBRUFnRyxNQUFNLENBQUMvRixHQUFlO1VBQ2xCQSxHQUFHLENBQUNpRyxPQUFPLENBQUMsQ0FBQztZQUFDekYsT0FBTztZQUFFZ0g7VUFBSSxDQUFDLEVBQUV2SSxFQUFFLEtBQUk7WUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUNtQixHQUFHLENBQUNuQixFQUFFLENBQUMsRUFBRTtjQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDQSxFQUFFLEVBQUV1SSxJQUFJLEVBQUVoSCxPQUFPLENBQUM7Y0FDakM7O1lBR0osTUFBTXdHLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDMUcsR0FBRyxDQUFDckIsRUFBRSxDQUFDO1lBQzVCLElBQUkrSCxFQUFFLENBQUNRLElBQUksS0FBS0EsSUFBSSxFQUFFO1lBQ3RCUixFQUFFLENBQUNqQixNQUFNLENBQUN2RixPQUFPLEVBQUVnSCxJQUFJLENBQUM7WUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQ2pCLEdBQUcsQ0FBQzdCLE9BQU8sQ0FBQyxHQUFHekYsRUFBRSxTQUFTLENBQUM7VUFDekMsQ0FBQyxDQUFDO1FBQ047O01BQ0hhOzs7Ozs7Ozs7Ozs7Ozs7OztNQzdERDtNQUVNLE1BQU84SCxPQUFPO1FBQ1AsSUFBSTtRQUNiLElBQUk1RixHQUFHO1VBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSTtRQUNwQjtRQUVBbkMsWUFBWW1DLEdBQVk7VUFDcEIsSUFBSSxDQUFDLElBQUksR0FBR0EsR0FBRztRQUNuQjtRQUVBOzs7Ozs7OztRQVFBNEUsS0FBSyxDQUFDOUUsU0FBaUIsRUFBRTRFLEtBQVksRUFBRU0sRUFBbUI7VUFDdEQsSUFBSWxGLFNBQVMsQ0FBQzVDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUMzQjtZQUNBNEMsU0FBUyxHQUFHa0YsRUFBRSxHQUFHLGlCQUFPLEVBQUNBLEVBQUUsQ0FBQy9ILEVBQUUsRUFBRTZDLFNBQVMsQ0FBQyxHQUFHQSxTQUFTO1lBQ3RELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQzlCLEdBQUcsQ0FBQ0UsT0FBTyxDQUFDNEIsU0FBUyxFQUFFNEUsS0FBSyxFQUFFTSxFQUFFLENBQUM7O1VBR3REOzs7VUFJQSxJQUFJbEYsU0FBUyxLQUFLLGdCQUFnQixFQUFFO1lBQ2hDLE1BQU07Y0FBQzBEO1lBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJO1lBQzFCLE9BQU87Y0FBQ3JGLE1BQU0sRUFBRXFGLE1BQU0sQ0FBQ3JGLE1BQU07Y0FBRXFGLE1BQU07Y0FBRXhELEdBQUcsRUFBRSxJQUFJLENBQUM7WUFBSSxDQUFDOztVQUcxRDtVQUNBLElBQUlGLFNBQVMsS0FBSywwQkFBMEIsRUFBRTtZQUMxQyxNQUFNO2NBQUNhO1lBQU0sQ0FBQyxHQUFHekMsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1lBQzNDLE1BQU07Y0FBQ2tDO1lBQVMsQ0FBQyxHQUFHbEMsT0FBTyxDQUFDLG9CQUFvQixDQUFDO1lBQ2pELE9BQU87Y0FBQ3lDLE1BQU07Y0FBRVA7WUFBUyxDQUFDOztVQUc5QixNQUFNO1lBQUNSO1VBQVksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJO1VBQ2hDLElBQUlBLFlBQVksQ0FBQ3hCLEdBQUcsQ0FBQzBCLFNBQVMsQ0FBQyxFQUFFO1lBQzdCOzs7O1lBSUEsTUFBTTtjQUFDMEUsWUFBWSxFQUFFeEU7WUFBRyxDQUFDLEdBQUdKLFlBQVksQ0FBQ3RCLEdBQUcsQ0FBQ3dCLFNBQVMsQ0FBQztZQUN2RCxPQUFPRSxHQUFHLEtBQUssUUFBUSxJQUFJLENBQUNBLEdBQUcsQ0FBQ08sV0FBVyxJQUFJUCxHQUFHLENBQUNqQyxVQUFVLEVBQUU7WUFDL0QsT0FBTzZCLFlBQVksQ0FBQ3RCLEdBQUcsQ0FBQ3dCLFNBQVMsQ0FBQzs7VUFHdEMsTUFBTWdGLElBQUksR0FBR2UsSUFBSSxDQUFDQyxTQUFTLENBQUMsQ0FBQyxHQUFHbEcsWUFBWSxDQUFDa0YsSUFBSSxFQUFFLENBQUMsQ0FBQztVQUNyRCxNQUFNLElBQUkzSCxLQUFLLENBQUMsV0FBVzJDLFNBQVMsd0NBQXdDZ0YsSUFBSSxFQUFFLENBQUM7UUFDdkY7O01BQ0hoSDs7Ozs7Ozs7Ozs7Ozs7Ozs7TUN2REQ7TUFDQTtNQUNNLE1BQU82RyxLQUFNLFNBQVFsRCxLQUFtQjtRQUMxQ3JELEdBQUcsR0FBSW5CLEVBQVUsSUFBSyxJQUFJLENBQUNvRCxJQUFJLENBQUMwRixFQUFFLElBQUlBLEVBQUUsQ0FBQzlJLEVBQUUsS0FBS0EsRUFBRSxDQUFDO1FBRW5EaUUsUUFBUSxDQUFDbEUsTUFBYyxFQUFFQyxFQUFVO1VBQy9CO1VBQ0EsSUFBSSxJQUFJLENBQUNtQixHQUFHLENBQUNuQixFQUFFLENBQUMsRUFBRTtZQUNkLElBQUkrSSxNQUFNLEdBQUcsRUFBRTtZQUNmLElBQUksQ0FBQy9CLE9BQU8sQ0FBQyxDQUFDO2NBQUNoSCxFQUFFO2NBQUVEO1lBQU0sQ0FBQyxLQUFJO2NBQzFCLE1BQU1pSixDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDaEUsUUFBUSxDQUFDakYsTUFBTSxDQUFDLEdBQzNELDZCQUE2QixHQUMzQixTQUFTQSxNQUFNLFlBQVk7Y0FDakNnSixNQUFNLElBQUksS0FBS0MsQ0FBQyxLQUFLaEosRUFBRSxLQUFLO1lBQ2hDLENBQUMsQ0FBQztZQUNGK0ksTUFBTSxJQUFJLDRCQUE0Qi9JLEVBQUUsWUFBWTtZQUVwRCxNQUFNLElBQUlFLEtBQUssQ0FBQyxnQ0FBZ0MsR0FDNUMsb0JBQW9CSCxNQUFNLHlFQUF5RUMsRUFBRSxLQUFLLEdBQzFHLCtCQUErQitJLE1BQU0sRUFBRSxDQUFDOztVQUdoRCxJQUFJLENBQUM3RCxJQUFJLENBQUM7WUFBQ2xGLEVBQUU7WUFBRUQ7VUFBTSxDQUFDLENBQUM7UUFDM0I7O01BQ0hjOzs7Ozs7Ozs7Ozs7Ozs7OztNQzVCRDtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFFTztNQUFVLE1BQ1h1RCxPQUFPO1FBQ0EsT0FBTztRQUNoQixJQUFJbUMsTUFBTTtVQUNOLE9BQU8sSUFBSSxDQUFDLE9BQU87UUFDdkI7UUFFUyxTQUFTO1FBQ2xCLElBQUlwQyxRQUFRO1VBQ1IsT0FBTyxJQUFJLENBQUMsU0FBUztRQUN6QjtRQUVTLFdBQVc7UUFDcEIsSUFBSWQsVUFBVTtVQUNWLE9BQU8sSUFBSSxDQUFDLFdBQVc7UUFDM0I7UUFFUyxVQUFVO1FBQ25CLElBQUlSLFNBQVM7VUFDVCxPQUFPLElBQUksQ0FBQyxVQUFVO1FBQzFCO1FBRVMsUUFBUTtRQUVSLElBQUk7UUFDYixJQUFJOUIsR0FBRztVQUNILE9BQU8sSUFBSSxDQUFDLElBQUk7UUFDcEI7UUFFUyxRQUFRO1FBQ2pCLElBQUlGLE9BQU87VUFDUCxPQUFPLElBQUksQ0FBQyxRQUFRO1FBQ3hCO1FBRUE7UUFDUyxhQUFhLEdBQUcsSUFBSW9JLHFCQUFZLENBQUMsSUFBSSxDQUFDO1FBQy9DLElBQUl0RyxZQUFZO1VBQ1osT0FBTyxJQUFJLENBQUMsYUFBYTtRQUM3QjtRQUVTLElBQUksR0FBRyxJQUFJMEIsY0FBTSxFQUFFO1FBQzVCLElBQUlpRCxHQUFHO1VBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSTtRQUNwQjtRQUVBMUcsWUFBWTJGLE1BQWMsRUFBRXBDLFFBQWdCO1VBQ3hDLElBQUksQ0FBQyxPQUFPLEdBQUdvQyxNQUFNO1VBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUdwQyxRQUFRLEdBQUdBLFFBQVEsR0FBRyxFQUFFO1VBRXpDLElBQUksQ0FBQyxXQUFXLEdBQUdBLFFBQVEsR0FBRyxHQUFHb0MsTUFBTSxDQUFDbEQsVUFBVSxJQUFJYyxRQUFRLEVBQUUsR0FBR29DLE1BQU0sQ0FBQ2xELFVBQVU7VUFDcEYsSUFBSSxDQUFDLFVBQVUsR0FBR2MsUUFBUSxHQUFHLEdBQUdvQyxNQUFNLENBQUMxRCxTQUFTLElBQUlzQixRQUFRLEVBQUUsR0FBR29DLE1BQU0sQ0FBQzFELFNBQVM7VUFFakYsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJNEYsb0JBQWUsQ0FBQyxJQUFJLENBQUM7VUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJRSxnQkFBTyxDQUFDLElBQUksQ0FBQztVQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDRCxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVE7VUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJUSxnQkFBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7VUFFMUMvRixrQkFBUyxDQUFDYyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQzVCO1FBRUEsWUFBWSxHQUFHLEtBQUs7UUFDcEIsSUFBSVgsV0FBVztVQUNYLE9BQU8sSUFBSSxDQUFDLFlBQVk7UUFDNUI7UUFFQXhDLFVBQVUsQ0FBQ0MsR0FBZ0I7VUFDdkIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLE1BQU0sSUFBSWIsS0FBSyxDQUFDLDZCQUE2QixDQUFDO1VBQ3JFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSTtVQUN4QmEsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUNrRCxRQUFRLENBQUNsRCxHQUFHLENBQUM7VUFDOUIsSUFBSSxDQUFDRixPQUFPLENBQUNpRyxNQUFNLEVBQUU7VUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQ2hHLFVBQVUsRUFBRTtRQUMxQjtRQUVBZ0csTUFBTSxDQUFDL0YsR0FBZTtVQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDK0YsTUFBTSxDQUFDL0YsR0FBRyxDQUFDO1VBQ3JCLElBQUksQ0FBQ0YsT0FBTyxDQUFDaUcsTUFBTSxFQUFFO1VBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUNoRyxVQUFVLEVBQUU7VUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQzJFLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDL0I7O01BQ0g1RTs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDckZjLElBQUksY0FBY0YsR0FBRztRQUNoQ3NELFFBQVEsQ0FBQ2xCLEdBQVk7VUFDakIsSUFBSSxDQUFDdEIsR0FBRyxDQUFDc0IsR0FBRyxDQUFDTSxVQUFVLEVBQUVOLEdBQUcsQ0FBQztRQUNqQztPQUNIO01BQUFsQyIsIm5hbWVzIjpbInJlc29sdmUiLCJzb3VyY2UiLCJpZCIsInN0YXJ0c1dpdGgiLCJFcnJvciIsInNwbGl0IiwicG9wIiwidGFyZ2V0Iiwic2xpY2UiLCJsZW5ndGgiLCJzaGlmdCIsImpvaW4iLCJCZXlvbmRQYWNrYWdlIiwiTWFwIiwiY29uc3RydWN0b3IiLCJleHBvcnRzIiwiaW5pdGlhbGlzZSIsImltcyIsInByb2Nlc3MiLCJyZXF1aXJlIiwibW9kdWxlIiwiaGFzIiwiZW5kc1dpdGgiLCJnZXQiLCJmbiIsImNyZWF0b3IiLCJyZXF1aXJlZCIsInNldCIsImJpbXBvcnQiLCJyZXNvdXJjZSIsInZlcnNpb24iLCJtb2RlIiwiUHJvbWlzZSIsInJlamVjdCIsImVycm9yIiwiYW1kX3JlcXVpcmUiLCJyZXR1cm5lZCIsImV4YyIsImNvbnNvbGUiLCJsb2ciLCJzdGFjayIsImdsb2JhbFRoaXMiLCJTeXN0ZW0iLCJpbXBvcnQiLCJhcHBEZXBlbmRlbmNpZXMiLCJkZXBlbmRlbmNpZXMiLCJfX2FwcF9wYWNrYWdlIiwic3BlY2lmaWVyIiwidGVzdCIsInBrZyIsInN1YnBhdGgiLCJicmVxdWlyZSIsImZvdW5kIiwiaW5zdGFuY2VzIiwiZmluZCIsInZzcGVjaWZpZXIiLCJpbml0aWFsaXNlZCIsInZhbHVlcyIsIk9iamVjdCIsInZhbHVlIiwiQnVuZGxlIiwidHlwZSIsIm5hbWUiLCJ1cmkiLCJzcGVjcyIsIk1vZHVsZSIsIm11bHRpYnVuZGxlIiwicmVnaXN0ZXIiLCJwYWNrYWdlIiwibGFuZ3VhZ2UiLCJQYWNrYWdlIiwiRXZlbnRzIiwiZGVzdHJveWVkIiwic3VwcG9ydGVkIiwiQXJyYXkiLCJiaW5kIiwiZXZlbnQiLCJsaXN0ZW5lciIsInByaW9yaXR5Iiwib24iLCJ1bmJpbmQiLCJvZmYiLCJpbmNsdWRlcyIsImwiLCJwdXNoIiwiZm9yY2UiLCJkZWxldGUiLCJlIiwiZmlsdGVyZWQiLCJmaWx0ZXIiLCJpdGVtIiwidHJpZ2dlciIsInJlc3QiLCJhcmdzIiwiYXJndW1lbnRzIiwic29ydCIsImEiLCJiIiwiYXN5bmMiLCJwcm9taXNlcyIsImFsbCIsImNhbGwiLCJjYXRjaCIsImRlc3Ryb3kiLCJjbGVhciIsImJ1bmRsZSIsInNjb3BlIiwiZXhlY3V0ZSIsImFjdGlvbiIsInBhcmFtcyIsImJleW9uZCIsImJhY2tlbmRzIiwidXBkYXRlIiwiZGVwcyIsImZvckVhY2giLCJkZXBlbmRlbmN5IiwiX19iZXlvbmRfdHJhbnN2ZXJzYWwiLCJ0cmFuc3ZlcnNhbCIsImJ1bmRsZXMiLCJkZXNjcmlwdG9yIiwiaG1yIiwiX19iZXlvbmRfcGtnIiwia2V5IiwidHJhY2UiLCJUcmFjZSIsInNvbHZlIiwicmVzZXJ2ZWQiLCJrZXlzIiwicCIsImltIiwiZnJvbSIsIklNRXhwb3J0cyIsImJleHBvcnRzIiwiUHJveHkiLCJzZWxmIiwicHJvcCIsIkludGVybmFsTW9kdWxlIiwiaGFzaCIsImNyZWF0ZWQiLCJJbnRlcm5hbE1vZHVsZXMiLCJfcmVxdWlyZSIsIlJlcXVpcmUiLCJKU09OIiwic3RyaW5naWZ5IiwicnQiLCJ0cmFjZWQiLCJzIiwiRGVwZW5kZW5jaWVzIiwiRXhwb3J0cyJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiYmFzZS9pbmRleC50cyIsImJpbXBvcnQvYmltcG9ydC50cyIsImJpbXBvcnQvYnJlcXVpcmUudHMiLCJiaW1wb3J0L2luZGV4LnRzIiwiYmltcG9ydC9yZXF1aXJlanMudHMiLCJidW5kbGUudHMiLCJldmVudHMvaW5kZXgudHMiLCJldmVudHMvdHlwZXMudHMiLCJpbnN0YW5jZXMudHMiLCJtb2R1bGUvaW5kZXgudHMiLCJwYWNrYWdlL2RlcGVuZGVuY2llcy50cyIsInBhY2thZ2UvZXhwb3J0cy50cyIsInBhY2thZ2UvaW1zL2V4cG9ydHMudHMiLCJwYWNrYWdlL2ltcy9pbS50cyIsInBhY2thZ2UvaW1zL2luZGV4LnRzIiwicGFja2FnZS9pbXMvcmVxdWlyZS9pbmRleC50cyIsInBhY2thZ2UvaW1zL3JlcXVpcmUvdHJhY2UudHMiLCJwYWNrYWdlL2luZGV4LnRzIiwicGFja2FnZS9pbnN0YW5jZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=