define(["exports", "module", "@beyond-js/kernel@0.1.0/bundle"], function (_exports, _amd_module, dependency_0) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.__beyond_pkg = _exports.Transversal = void 0;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/backend", "0.0.10"], ["@beyond-js/kernel", "0.1.0"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/kernel@0.1.0/transversals"
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
            }; // Set the descriptor of the exports

            pkg.exports.descriptor = exports.descriptor; // Store the package and its dependencies to register the dependencies once all the bundles
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
                } // Check if dependency is a bundle of the transversal


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
            register && pkg.dependencies.update(register); // Register the ims, but do not initialise them until all bundles of the transversal are set
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
  let Transversal; // Module exports

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QmhCLEdBQUcsQ0FBQ0wsVUFBSkssRUFBaERIO1FBQ0g7O01BNUZZIiwibmFtZXMiOlsiTWFwIiwidXBkYXRlIiwiZGVwcyIsImNsZWFyIiwiZm9yRWFjaCIsInNwZWNpZmllciIsImRlcGVuZGVuY3kiLCJzZXQiLCJUcmFuc3ZlcnNhbCIsIm5hbWUiLCJsYW5ndWFnZSIsImJ1bmRsZXMiLCJEZXBlbmRlbmNpZXMiLCJkZXBlbmRlbmNpZXMiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxpc2UiLCJFcnJvciIsInBhY2thZ2VzIiwic3BlY3MiLCJjcmVhdG9yIiwicGtnIiwiQnVuZGxlIiwicGFja2FnZSIsImltcyIsImV4cG9ydHMiLCJyZXNwb25zZSIsImRlc2NyaXB0b3IiLCJyZWdpc3RlciIsImhhcyIsInB1c2giLCJnZXQiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImtleXMiLCJ2YWx1ZXMiLCJpbml0aWFsaXNlZCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiZGVwZW5kZW5jaWVzLnRzIiwidHJhbnN2ZXJzYWwudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdfQ==