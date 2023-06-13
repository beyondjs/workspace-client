define(["exports", "module", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/core"], function (_exports, _amd_module, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.__beyond_pkg = _exports.Texts = _exports.CurrentTexts = void 0;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/backend", "0.1.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/workspace", "1.0.5"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/kernel@0.1.9/texts"
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
//# sourceMappingURL=texts.js.map