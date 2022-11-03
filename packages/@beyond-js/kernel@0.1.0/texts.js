define(["exports", "module", "@beyond-js/kernel@0.1.0/bundle", "@beyond-js/kernel@0.1.0/core"], function (_exports, _amd_module, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.__beyond_pkg = _exports.Texts = _exports.CurrentTexts = void 0;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/backend", "0.1.0"], ["@beyond-js/local", "0.1.0"], ["@beyond-js/kernel", "0.1.0"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/kernel@0.1.0/texts"
    },
    "type": "ts"
  }, _amd_module.uri).package();

  ;

  __pkg.dependencies.update([['@beyond-js/kernel/core', dependency_1]]);

  const {
    module
  } = __pkg.bundle;
  const ims = new Map();
  /*************************
  INTERNAL MODULE: ./current
  *************************/

  ims.set('./current', {
    hash: 1735458173,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CurrentTexts = void 0;

      var _core = require("@beyond-js/kernel/core");

      var _texts = require("./texts");
      /*bundle*/

      /**
       * The texts loaded by the current language (not available in SSR environment)
       */


      class CurrentTexts extends _core.Events {
        #texts = new Map();
        #bundle;

        get bundle() {
          return this.#bundle;
        }

        #enabled = false;

        get enabled() {
          return this.#enabled;
        }

        set enabled(value) {
          this.#enabled = !!value;
          value && this.fetch().catch(exc => console.error(exc.stack));
        }

        #last;

        get #current() {
          const {
            current: language
          } = _core.languages;
          if (this.#texts.has(language)) return this.#texts.get(language);
          const texts = new _texts.Texts(this.#bundle, {
            language
          });
          this.#texts.set(language, texts);
          return texts;
        }

        get loading() {
          return this.#current.loading;
        }

        get loaded() {
          return this.#current.loaded;
        }
        /*
        @deprecated
        old versions
         */


        get ready() {
          !this.loaded && !this.loading && this.fetch().catch(exc => console.error(exc.stack));
          return this.loaded;
        }

        get value() {
          return this.#current.value;
        }
        /**
         * Current texts constructor
         *
         * @param {string} bundle
         */


        constructor(bundle) {
          super();
          this.#bundle = bundle;
          if (!bundle) throw new Error(`Bundle parameter must be specified`);

          _core.languages.on('change', this.#change);

          this.#current.on('change', this.#triggerChange);
          this.#last = this.#current;
        }

        #triggerChange = () => {
          this.trigger('change');
        };
        #change = () => {
          this.#last.off('change', this.#triggerChange);
          this.#enabled && this.fetch().catch(exc => console.log(exc.stack));
          this.#current.on('change', this.#triggerChange);
          this.#last = this.#current;
          this.#triggerChange();
        };

        async fetch() {
          await _core.languages.ready;
          await this.#current.fetch();
        }
        /**
         * @deprecated Deprecated method. Use .fetch instead
         * @return {Promise<void>}
         */


        async load() {
          await this.#current.fetch();
        }

        destroy() {
          this.#texts.forEach(texts => texts.destroy());

          _core.languages.off('change', this.#change);
        }

        toJSON() {
          return {};
        }

      }

      exports.CurrentTexts = CurrentTexts;
    }
  });
  /***********************
  INTERNAL MODULE: ./texts
  ***********************/

  ims.set('./texts', {
    hash: 678111696,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Texts = void 0;

      var _core = require("@beyond-js/kernel/core");
      /*bundle*/


      class Texts extends _core.Events {
        /**
         * The module resource
         * @type {string}
         * @private
         */
        #module;

        get module() {
          return this.#module;
        }
        /**
         * The bundle name. Ex: 'txt'
         * @type {string}
         * @private
         */


        #bundle;

        get bundle() {
          return this.#bundle;
        }
        /**
         * The transversal bundle name. Ex: 'txt-menu'
         * @type {string}
         * @private
         */


        #transversal;

        get transversal() {
          return this.#transversal;
        }

        #multilanguage;

        get multilanguage() {
          return this.#multilanguage;
        }

        #language;

        get language() {
          return this.#language;
        } // The loaded bundle


        #texts;
        #loaded = false;

        get loaded() {
          return this.#loaded;
        }

        #loading;

        get loading() {
          return this.#loading;
        }

        get value() {
          return this.#texts?.txt;
        }

        get ready() {
          if (this.#loading) return false;
          this.fetch().catch(exc => console.log(exc.stack));
          return !this.#loading && this.#loaded;
        }
        /**
         * Module texts constructor
         *
         * @param {string} module The module resource
         * @param {{transversal: string, language: string}} specs
         */


        constructor(module, specs) {
          if (!module) throw new Error('Invalid parameters');
          super();
          this.#module = module;
          specs = specs ? specs : {};
          this.#language = specs.language;
          this.#multilanguage = !!specs.language;
          this.#bundle = !specs.transversal ? specs.bundle ? specs.bundle : 'txt' : void 0;
          this.#transversal = specs.transversal;
        } // Used by HMR when packaged has been updated


        #update = () => this.trigger('change');

        async fetch() {
          if (this.#loading || this.#loaded) return;
          this.#loading = true;
          this.trigger('change');
          const language = this.#language ? `.${this.#language}` : '';

          const {
            specifier,
            resource
          } = (() => {
            if (this.#transversal) {
              const specifier = `${this.#module}.${this.#transversal}${language}`;

              const pkg = (() => {
                const split = this.#module.split('/');
                return split[0].startsWith('@') ? `${split[0]}/${split[1]}` : split[0];
              })();

              const resource = `${pkg}/${this.#transversal}${language}`;
              return {
                specifier,
                resource
              };
            } else {
              const specifier = `${this.#module}.${this.#bundle}${language}`;
              return {
                specifier,
                resource: specifier
              };
            }
          })();

          const imported = await bimport(resource);

          this.#texts = (() => {
            if (!this.#transversal) return imported;
            const {
              __beyond_transversal: transversal
            } = imported;
            return transversal.bundles.get(specifier);
          })();

          this.#texts.hmr.on('change', this.#update);
          this.#loading = false;
          this.#loaded = true;
          this.trigger('change');
        }
        /**
         * @deprecated Deprecated method. Use .fetch instead
         * @return {Promise<void>}
         */


        async load() {
          await this.fetch();
        }

        destroy() {
          this.#texts?.hmr.off('change', this.#update);
        }

        toJSON() {
          return {};
        }

      }

      exports.Texts = Texts;
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./current",
    "from": "CurrentTexts",
    "name": "CurrentTexts"
  }, {
    "im": "./texts",
    "from": "Texts",
    "name": "Texts"
  }];
  let CurrentTexts, Texts; // Module exports

  _exports.Texts = Texts;
  _exports.CurrentTexts = CurrentTexts;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'CurrentTexts') && (_exports.CurrentTexts = CurrentTexts = require ? require('./current').CurrentTexts : value);
    (require || prop === 'Texts') && (_exports.Texts = Texts = require ? require('./texts').Texts : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUwsQ0FBYSxRQUFiO1FBQ0g7UUFFRDs7Ozs7O1FBSVUsTUFBSkcsSUFBSTtVQUNOLE1BQU0sS0FBS3ZCLEtBQUwsRUFBTjtRQUNIOztRQUVEd0IsT0FBTztVQUNILEtBQUssTUFBTCxFQUFhaUIsR0FBYixDQUFpQnBCLEdBQWpCLENBQXFCLFFBQXJCLEVBQStCLEtBQUssT0FBcEM7UUFDSDs7UUFFREssTUFBTTtVQUNGLE9BQU8sRUFBUDtRQUNIOztNQTNJdUMiLCJuYW1lcyI6WyJDdXJyZW50VGV4dHMiLCJFdmVudHMiLCJNYXAiLCJidW5kbGUiLCJlbmFibGVkIiwidmFsdWUiLCJmZXRjaCIsImNhdGNoIiwiZXhjIiwiY29uc29sZSIsImVycm9yIiwic3RhY2siLCJjdXJyZW50IiwibGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJoYXMiLCJnZXQiLCJ0ZXh0cyIsIlRleHRzIiwic2V0IiwibG9hZGluZyIsImxvYWRlZCIsInJlYWR5IiwiY29uc3RydWN0b3IiLCJFcnJvciIsIm9uIiwidHJpZ2dlciIsIm9mZiIsImxvZyIsImxvYWQiLCJkZXN0cm95IiwiZm9yRWFjaCIsInRvSlNPTiIsIm1vZHVsZSIsInRyYW5zdmVyc2FsIiwibXVsdGlsYW5ndWFnZSIsInR4dCIsInNwZWNzIiwic3BlY2lmaWVyIiwicmVzb3VyY2UiLCJwa2ciLCJzcGxpdCIsInN0YXJ0c1dpdGgiLCJpbXBvcnRlZCIsImJpbXBvcnQiLCJfX2JleW9uZF90cmFuc3ZlcnNhbCIsImJ1bmRsZXMiLCJobXIiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbIkBiZXlvbmQtanMva2VybmVsL3RleHRzL2N1cnJlbnQudHMiLCJAYmV5b25kLWpzL2tlcm5lbC90ZXh0cy90ZXh0cy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF19