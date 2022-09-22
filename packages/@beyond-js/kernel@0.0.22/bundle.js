define(["exports", "module"], function (_exports2, _amd_module) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.instances = _exports2.brequire = _exports2.breload = _exports2.bimport = _exports2.Package = _exports2.Module = _exports2.ListenerFunction = _exports2.IMSpecs = _exports2.IMCreators = _exports2.IExportsDescriptor = _exports2.IBundleSpecs = _exports2.Events = _exports2.Bundle = void 0;
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
    hash: 3582552414,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.bimport = bimport;
      exports.breload = breload;

      require("./brequire");
      /*bundle*/

      /**
       * Used only in local environment to support HMR
       * Note: in AMD mode, the querystring is not allowed, so it is require to undef the bundle and import it again.
       *
       * @param {string} resource
       * @param {number} version
       * @return {Promise<*>}
       */


      async function breload(resource, version) {
        typeof amd_require === 'function' && amd_require.undef(resource);
        return await bimport(resource, version);
      }
      /**
       * Import a module, solving internally the module format (amd, esm).
       *
       * When running in a BEE, brequire and bimport are implemented by it, overriding both functions.
       *
       * @param resource {string} The resource identifier of the bundle
       * @param version {number} The version required by hmr to update a bundle's processor
       * @returns {Promise<*>}
       */

      /*bundle*/


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
    hash: 1650910402,
    creator: function (require, exports) {
      "use strict";

      var _bimport = require("./bimport");

      var _brequire = require("./brequire");
      /**
       * When running in a BEE, bimport, brequire and breload are implemented by it
       */


      globalThis.breload === void 0 && (globalThis.breload = _bimport.breload);
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
    hash: 2515978202,
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
    "from": "breload",
    "name": "breload"
  }, {
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
  let breload, bimport, brequire, IBundleSpecs, Bundle, Events, ListenerFunction, instances, Module, IExportsDescriptor, IMSpecs, IMCreators, Package; // Module exports

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
  _exports2.breload = breload;

  __pkg.exports.process = function (require) {
    _exports2.breload = breload = require('./bimport/bimport').breload;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksY0FBYzlFLEdBQWQsQ0FBaUI7UUFDaENzRCxRQUFRLENBQUNsQixHQUFELEVBQWE7VUFDakIsS0FBS3RCLEdBQUwsQ0FBU3NCLEdBQUcsQ0FBQ00sVUFBYixFQUF5Qk4sR0FBekI7UUFDSDs7TUFIK0IsQ0FBckIiLCJuYW1lcyI6WyJyZXNvbHZlIiwic291cmNlIiwiaWQiLCJzdGFydHNXaXRoIiwiRXJyb3IiLCJzcGxpdCIsInBvcCIsInRhcmdldCIsInNsaWNlIiwibGVuZ3RoIiwic2hpZnQiLCJqb2luIiwiQmV5b25kUGFja2FnZSIsIk1hcCIsImNvbnN0cnVjdG9yIiwiZXhwb3J0cyIsImluaXRpYWxpc2UiLCJpbXMiLCJwcm9jZXNzIiwicmVxdWlyZSIsIm1vZHVsZSIsImhhcyIsImVuZHNXaXRoIiwiZ2V0IiwiZm4iLCJjcmVhdG9yIiwicmVxdWlyZWQiLCJzZXQiLCJicmVsb2FkIiwicmVzb3VyY2UiLCJ2ZXJzaW9uIiwiYW1kX3JlcXVpcmUiLCJ1bmRlZiIsImJpbXBvcnQiLCJQcm9taXNlIiwicmVqZWN0IiwiZXJyb3IiLCJyZXR1cm5lZCIsImV4YyIsImNvbnNvbGUiLCJsb2ciLCJzdGFjayIsIm1vZGUiLCJTeXN0ZW0iLCJnbG9iYWxUaGlzIiwiaW1wb3J0Iiwic3BlY2lmaWVyIiwiZGVwZW5kZW5jaWVzIiwidGVzdCIsInBrZyIsInN1YnBhdGgiLCJicmVxdWlyZSIsImZvdW5kIiwiaW5zdGFuY2VzIiwiZmluZCIsInZzcGVjaWZpZXIiLCJpbml0aWFsaXNlZCIsInZhbHVlcyIsIk9iamVjdCIsInZhbHVlIiwiQnVuZGxlIiwidHlwZSIsIm5hbWUiLCJ1cmkiLCJzcGVjcyIsIk1vZHVsZSIsIm11bHRpYnVuZGxlIiwicmVnaXN0ZXIiLCJwYWNrYWdlIiwibGFuZ3VhZ2UiLCJQYWNrYWdlIiwiRXZlbnRzIiwiZGVzdHJveWVkIiwic3VwcG9ydGVkIiwiQXJyYXkiLCJiaW5kIiwiZXZlbnQiLCJsaXN0ZW5lciIsInByaW9yaXR5Iiwib24iLCJ1bmJpbmQiLCJvZmYiLCJpbmNsdWRlcyIsImwiLCJwdXNoIiwiZm9yY2UiLCJkZWxldGUiLCJlIiwiZmlsdGVyZWQiLCJmaWx0ZXIiLCJpdGVtIiwidHJpZ2dlciIsInJlc3QiLCJhcmdzIiwiYXJndW1lbnRzIiwic29ydCIsImEiLCJiIiwiYXN5bmMiLCJwcm9taXNlcyIsImFsbCIsImNhbGwiLCJjYXRjaCIsImRlc3Ryb3kiLCJjbGVhciIsImJ1bmRsZSIsInNjb3BlIiwiZXhlY3V0ZSIsImFjdGlvbiIsInBhcmFtcyIsImJleW9uZCIsImJhY2tlbmRzIiwidXBkYXRlIiwiZGVwcyIsImZvckVhY2giLCJkZXBlbmRlbmN5IiwiX19iZXlvbmRfdHJhbnN2ZXJzYWwiLCJ0cmFuc3ZlcnNhbCIsImJ1bmRsZXMiLCJkZXNjcmlwdG9yIiwiaG1yIiwiX19iZXlvbmRfcGtnIiwia2V5IiwidHJhY2UiLCJUcmFjZSIsInNvbHZlIiwicmVzZXJ2ZWQiLCJrZXlzIiwicCIsImltIiwiZnJvbSIsIklNRXhwb3J0cyIsImJleHBvcnRzIiwiUHJveHkiLCJzZWxmIiwicHJvcCIsIkludGVybmFsTW9kdWxlIiwiaGFzaCIsImNyZWF0ZWQiLCJJbnRlcm5hbE1vZHVsZXMiLCJfcmVxdWlyZSIsIlJlcXVpcmUiLCJKU09OIiwic3RyaW5naWZ5IiwicnQiLCJ0cmFjZWQiLCJzIiwiRGVwZW5kZW5jaWVzIiwiRXhwb3J0cyJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL2Jhc2UvaW5kZXgudHMiLCJAYmV5b25kLWpzL2tlcm5lbC9idW5kbGUvYmltcG9ydC9iaW1wb3J0LnRzIiwiQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL2JpbXBvcnQvYnJlcXVpcmUudHMiLCJAYmV5b25kLWpzL2tlcm5lbC9idW5kbGUvYmltcG9ydC9pbmRleC50cyIsIkBiZXlvbmQtanMva2VybmVsL2J1bmRsZS9iaW1wb3J0L3JlcXVpcmVqcy50cyIsIkBiZXlvbmQtanMva2VybmVsL2J1bmRsZS9idW5kbGUudHMiLCJAYmV5b25kLWpzL2tlcm5lbC9idW5kbGUvZXZlbnRzL2luZGV4LnRzIiwiQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL2V2ZW50cy90eXBlcy50cyIsIkBiZXlvbmQtanMva2VybmVsL2J1bmRsZS9pbnN0YW5jZXMudHMiLCJAYmV5b25kLWpzL2tlcm5lbC9idW5kbGUvbW9kdWxlL2luZGV4LnRzIiwiQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL3BhY2thZ2UvZGVwZW5kZW5jaWVzLnRzIiwiQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL3BhY2thZ2UvZXhwb3J0cy50cyIsIkBiZXlvbmQtanMva2VybmVsL2J1bmRsZS9wYWNrYWdlL2ltcy9leHBvcnRzLnRzIiwiQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL3BhY2thZ2UvaW1zL2ltLnRzIiwiQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL3BhY2thZ2UvaW1zL2luZGV4LnRzIiwiQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL3BhY2thZ2UvaW1zL3JlcXVpcmUvaW5kZXgudHMiLCJAYmV5b25kLWpzL2tlcm5lbC9idW5kbGUvcGFja2FnZS9pbXMvcmVxdWlyZS90cmFjZS50cyIsIkBiZXlvbmQtanMva2VybmVsL2J1bmRsZS9wYWNrYWdlL2luZGV4LnRzIiwiQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL3BhY2thZ2UvaW5zdGFuY2VzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19