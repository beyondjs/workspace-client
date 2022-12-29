define(["exports", "module", "@beyond-js/kernel@0.1.4/bundle", "@beyond-js/kernel@0.1.4/core"], function (_exports, _amd_module, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.__beyond_pkg = _exports.Texts = _exports.CurrentTexts = void 0;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/backend", "0.1.2"], ["@beyond-js/local", "0.1.2"], ["@beyond-js/kernel", "0.1.4"], ["@beyond-js/dashboard", "1.0.2"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/kernel@0.1.4/texts"
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
      /*bundle*/ /**
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
        }
        // The loaded bundle
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
        }
        // Used by HMR when packaged has been updated
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
  let CurrentTexts, Texts;

  // Module exports
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNSyxRQUFRLEdBQUcsTUFBTUMsT0FBTyxDQUFDTCxRQUFRLENBQUM7VUFFeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQUs7WUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBT0ksUUFBUTtZQUV2QyxNQUFNO2NBQUNFLG9CQUFvQixFQUFFWDtZQUFXLENBQUMsR0FBR1MsUUFBUTtZQUNwRCxPQUFPVCxXQUFXLENBQUNZLE9BQU8sQ0FBQy9CLEdBQUcsQ0FBQ3VCLFNBQVMsQ0FBQztVQUM3QyxDQUFDLEdBQUc7VUFFSixJQUFJLENBQUMsTUFBTSxDQUFDUyxHQUFHLENBQUN2QixFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUM7VUFFMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLO1VBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSTtVQUNuQixJQUFJLENBQUNDLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDMUI7UUFFQTs7OztRQUlBLE1BQU1HLElBQUk7VUFDTixNQUFNLElBQUksQ0FBQ3ZCLEtBQUssRUFBRTtRQUN0QjtRQUVBd0IsT0FBTztVQUNILElBQUksQ0FBQyxNQUFNLEVBQUVrQixHQUFHLENBQUNyQixHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDaEQ7UUFFQUssTUFBTTtVQUNGLE9BQU8sRUFBRTtRQUNiOztNQUNIQyIsIm5hbWVzIjpbIkN1cnJlbnRUZXh0cyIsIkV2ZW50cyIsIk1hcCIsImJ1bmRsZSIsImVuYWJsZWQiLCJ2YWx1ZSIsImZldGNoIiwiY2F0Y2giLCJleGMiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGFjayIsImN1cnJlbnQiLCJsYW5ndWFnZSIsImxhbmd1YWdlcyIsImhhcyIsImdldCIsInRleHRzIiwiVGV4dHMiLCJzZXQiLCJsb2FkaW5nIiwibG9hZGVkIiwicmVhZHkiLCJjb25zdHJ1Y3RvciIsIkVycm9yIiwib24iLCJ0cmlnZ2VyIiwib2ZmIiwibG9nIiwibG9hZCIsImRlc3Ryb3kiLCJmb3JFYWNoIiwidG9KU09OIiwiZXhwb3J0cyIsIm1vZHVsZSIsInRyYW5zdmVyc2FsIiwibXVsdGlsYW5ndWFnZSIsInR4dCIsInNwZWNzIiwic3BlY2lmaWVyIiwicmVzb3VyY2UiLCJwa2ciLCJzcGxpdCIsInN0YXJ0c1dpdGgiLCJpbXBvcnRlZCIsImJpbXBvcnQiLCJfX2JleW9uZF90cmFuc3ZlcnNhbCIsImJ1bmRsZXMiLCJobXIiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImN1cnJlbnQudHMiLCJ0ZXh0cy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF19