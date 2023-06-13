define(["exports", "module", "@beyond-js/kernel@0.1.9/bundle"], function (_exports, _amd_module, dependency_0) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.__beyond_pkg = _exports.Transversal = void 0;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/backend", "0.1.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/workspace", "1.0.5"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/kernel@0.1.9/transversals"
    },
    "type": "ts"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([]);
  const {
    module
  } = __pkg.bundle;
  const ims = new Map();

  /******************************
  INTERNAL MODULE: ./dependencies
  ******************************/

  ims.set('./dependencies', {
    hash: 916907578,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      class _default extends Map {
        update(deps) {
          this.clear();
          deps?.forEach(([specifier, dependency]) => this.set(specifier, dependency));
        }
      }
      exports.default = _default;
    }
  });

  /*****************************
  INTERNAL MODULE: ./transversal
  *****************************/

  ims.set('./transversal', {
    hash: 2292377186,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Transversal = void 0;
      var _bundle = require("@beyond-js/kernel/bundle");
      var _dependencies = require("./dependencies");
      /*bundle*/
      class Transversal {
        #name;
        get name() {
          return this.#name;
        }
        #language;
        get language() {
          return this.#language;
        }
        #bundles = new Map();
        get bundles() {
          return this.#bundles;
        }
        #dependencies = new _dependencies.default();
        get dependencies() {
          return this.#dependencies;
        }
        constructor(name, language) {
          this.#name = name;
          this.#language = language;
        }
        #initialised = false;
        initialise(bundles) {
          if (this.#initialised) throw new Error(`Transversal "${this.#name}" already initialised`);
          this.#initialised = true;
          const packages = new Map();
          /**
           * First create the bundles and then initialize them,
           * to allow dependencies among bundles of the same traversal
           */
          bundles.forEach(([specs, creator]) => {
            const pkg = new _bundle.Bundle(specs).package(this.#language);
            const ims = new Map(); // The internal modules map
            const exports = {}; // The exports.managed function
            // Execute the bundle creation function
            const response = creator(ims, exports);
            const {
              dependencies
            } = response ? response : {
              dependencies: void 0
            };
            // Set the descriptor of the exports
            pkg.exports.descriptor = exports.descriptor;
            // Store the package and its dependencies to register the dependencies once all the bundles
            // of the transversal are created
            packages.set(pkg.specifier, {
              pkg,
              dependencies,
              ims
            });
          });
          /**
           * Once all the bundles of the transversal are created,
           * then register all the dependencies of the packages
           */
          packages.forEach(({
            pkg,
            dependencies,
            ims
          }) => {
            const register = (() => {
              const register = [];
              dependencies?.forEach(specifier => {
                if (this.#dependencies.has(specifier)) {
                  register.push([specifier, this.#dependencies.get(specifier)]);
                  return;
                }
                // Check if dependency is a bundle of the transversal
                if (!packages.has(specifier)) {
                  const data = `\n\tDependencies: ${JSON.stringify([...this.#dependencies.keys()])}. ` + `\n\tBundles: ${JSON.stringify([...packages.keys()])}`;
                  throw new Error(`Dependency "${specifier}" not found on "${this.#name}" transversal. ${data}`);
                }
                const {
                  pkg
                } = packages.get(specifier);
                register.push([specifier, pkg.exports.values]);
              });
              return register;
            })();
            packages.forEach(({
              pkg
            }) => this.#bundles.set(pkg.specifier, pkg.exports.values));
            register && pkg.dependencies.update(register);
            // Register the ims, but do not initialise them until all bundles of the transversal are set
            // To allow dependencies among bundles
            pkg.ims.register(ims);
          });
          packages.forEach(({
            pkg
          }) => !pkg.initialised && pkg.initialise());
        }
      }
      exports.Transversal = Transversal;
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./transversal",
    "from": "Transversal",
    "name": "Transversal"
  }];
  let Transversal;

  // Module exports
  _exports.Transversal = Transversal;
  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'Transversal') && (_exports.Transversal = Transversal = require ? require('./transversal').Transversal : value);
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
//# sourceMappingURL=transversals.js.map