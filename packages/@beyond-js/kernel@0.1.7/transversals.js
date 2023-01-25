define(["exports", "module", "@beyond-js/kernel@0.1.7/bundle"], function (_exports, _amd_module, dependency_0) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.__beyond_pkg = _exports.Transversal = void 0;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/backend", "0.1.2"], ["@beyond-js/local", "0.1.2"], ["@beyond-js/kernel", "0.1.7"], ["@beyond-js/dashboard", "1.0.2"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/kernel@0.1.7/transversals"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsR0FBRyxDQUFDZSxXQUFXLElBQUlmLEdBQUcsQ0FBQ0wsVUFBVSxFQUFFLENBQUM7UUFDckU7O01BQ0hSIiwibmFtZXMiOlsiTWFwIiwidXBkYXRlIiwiZGVwcyIsImNsZWFyIiwiZm9yRWFjaCIsInNwZWNpZmllciIsImRlcGVuZGVuY3kiLCJzZXQiLCJleHBvcnRzIiwiVHJhbnN2ZXJzYWwiLCJuYW1lIiwibGFuZ3VhZ2UiLCJidW5kbGVzIiwiRGVwZW5kZW5jaWVzIiwiZGVwZW5kZW5jaWVzIiwiY29uc3RydWN0b3IiLCJpbml0aWFsaXNlIiwiRXJyb3IiLCJwYWNrYWdlcyIsInNwZWNzIiwiY3JlYXRvciIsInBrZyIsIkJ1bmRsZSIsInBhY2thZ2UiLCJpbXMiLCJyZXNwb25zZSIsImRlc2NyaXB0b3IiLCJyZWdpc3RlciIsImhhcyIsInB1c2giLCJnZXQiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImtleXMiLCJ2YWx1ZXMiLCJpbml0aWFsaXNlZCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiZGVwZW5kZW5jaWVzLnRzIiwidHJhbnN2ZXJzYWwudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdfQ==