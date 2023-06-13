define(["exports", "module", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/core"], function (_exports, _amd_module, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.styles = _exports.hmr = _exports.__beyond_pkg = _exports.V1Styles = _exports.DependenciesStyles = void 0;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/backend", "0.1.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/workspace", "1.0.5"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/kernel@0.1.9/styles"
    },
    "type": "ts"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['@beyond-js/kernel/core', dependency_1]]);
  const {
    module
  } = __pkg.bundle;
  const ims = new Map();

  /*************************************
  INTERNAL MODULE: ./dependencies-styles
  *************************************/

  ims.set('./dependencies-styles', {
    hash: 282408023,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DependenciesStyles = void 0;
      var _bundle = require("@beyond-js/kernel/bundle");
      var _core = require("@beyond-js/kernel/core");
      var _registry = require("./registry");
      /*bundle*/
      class DependenciesStyles extends _core.Events {
        #vspecifier;
        #elements;
        get elements() {
          return this.#elements;
        }
        constructor(vspecifier) {
          super();
          this.#vspecifier = vspecifier;
          const change = () => this.trigger('change');
          this.#elements = new Set();
          const recursive = vspecifier => {
            if (!vspecifier) {
              console.trace('Bundle vspecifier not defined');
              return;
            }
            if (!_bundle.instances.has(vspecifier)) {
              console.error(`Bundle id "${vspecifier}" not found. Try refreshing the page.\n` + `If the problem still persist, delete the BeyondJS cache and try again.`);
              return;
            }
            const bundle = _bundle.instances.get(vspecifier);
            if (vspecifier !== this.#vspecifier && bundle.type === 'widget') return;
            // Check if the bundle has styles
            const styles = _registry.styles.get(vspecifier);
            if (styles && styles.engine !== 'legacy') {
              this.#elements.add(styles);
              styles.on('change', change);
            }
            const {
              dependencies
            } = bundle.package();
            dependencies.forEach(dependency => {
              const pkg = dependency.__beyond_pkg;
              if (!pkg) return;
              recursive(pkg.vspecifier);
            });
          };
          recursive(this.#vspecifier);
        }
      }
      exports.DependenciesStyles = DependenciesStyles;
    }
  });

  /************************
  INTERNAL MODULE: ./legacy
  ************************/

  ims.set('./legacy', {
    hash: 859564821,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      class _default {
        get engine() {
          return 'legacy';
        }
        #bundle;
        #value;
        get value() {
          return this.#value;
        }
        // Is the stylesheet appended to the DOM of the page (not a shadow dom of a widget)
        #appended = false;
        get appended() {
          return this.#appended;
        }
        constructor(bundle, value) {
          this.#bundle = bundle;
          const module = (() => {
            const module = bundle.split('/');
            module.pop();
            return module.join('/');
          })();
          // Find and replace #host...
          const regexp = /#host\.([\w\d]*)#([^.]*\.[\w\d]*)/g;
          this.#value = value.replace(regexp, (match, host, resource) => {
            if (host === 'module' || host === 'library') {
              return `${module}/${resource}`;
            } else if (host === 'application') {
              return resource;
            }
            console.warn(`Invalid css host specification on bundle "${bundle}"`, match);
          });
        }
        /**
         * @deprecated Only required by legacy applications
         */
        appendToDOM(is) {
          if (this.#appended) {
            const previous = document.querySelectorAll(`:scope > [bundle="${this.#bundle}"]`)[0];
            previous && document.removeChild(previous);
          }
          const css = document.createElement('style');
          css.appendChild(document.createTextNode(this.#value));
          is && css.setAttribute('is', is);
          document.getElementsByTagName('head')[0].appendChild(css);
          this.#appended = true;
        }
      }
      exports.default = _default;
    }
  });

  /**************************
  INTERNAL MODULE: ./registry
  **************************/

  ims.set('./registry', {
    hash: 2402124624,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.styles = void 0;
      var _legacy = require("./legacy");
      var _v = require("./v1");
      class Registry {
        #registry = new Map();
        register(vspecifier, value) {
          if (this.#registry.has(vspecifier)) return;
          const styles = value ? new _legacy.default(vspecifier, value) : new _v.V1Styles(vspecifier);
          this.#registry.set(vspecifier, styles);
          return styles;
        }
        has(vspecifier) {
          return this.#registry.has(vspecifier);
        }
        get(vspecifier) {
          return this.#registry.get(vspecifier);
        }
      }
      /*bundle*/
      const styles = new Registry();
      // Just for legacy projects
      exports.styles = styles;
      globalThis.beyondLegacyStyles = styles;
    }
  });

  /********************
  INTERNAL MODULE: ./v1
  ********************/

  ims.set('./v1', {
    hash: 1891964101,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.V1Styles = void 0;
      var _core = require("@beyond-js/kernel/core");
      var _bundle = require("@beyond-js/kernel/bundle");
      /*bundle*/
      class V1Styles extends _core.Events {
        get engine() {
          return 'v1';
        }
        /**
         * The bundle object
         *
         * @type {Bundle}
         * @private
         */
        #bundle;
        get bundle() {
          return this.#bundle;
        }
        /**
         * The autoincremental HMR version
         *
         * @type {number}
         * @private
         */
        #version = 0;
        get version() {
          return this.#version;
        }
        /**
         * The href without the version qs parameter
         *
         * @type {string}
         * @private
         */
        #resource;
        get resource() {
          return this.#resource;
        }
        /**
         * The url of the stylesheet including the HMR version qs parameter
         *
         * @return {string}
         */
        get href() {
          const version = this.#version ? `?version=${this.#version}` : '';
          return `${this.#resource}${version}`;
        }
        constructor(resource) {
          super();
          this.#bundle = _bundle.instances.get(resource);
          this.#resource = (() => {
            if (typeof process === 'object') {
              const split = resource.split('/');
              const pkg = split[0].startsWith('@') ? `${split.shift()}/${split.shift()}` : split.shift();
              const subpath = split.join('/');
              return `##_!${pkg}!_##${subpath}.css`;
            }
            let {
              uri
            } = this.#bundle;
            /**
             * validate if the uri belongs to the CDN
             */
            const regexp = new RegExp('^https?://cdn.beyondjs.com', 'i');
            if (regexp.test(uri)) {
              const {
                origin,
                pathname,
                searchParams
              } = new URL(uri);
              const version = searchParams.has('version') ? `&version=${searchParams.get('version')}` : '';
              return origin + pathname + '?css' + version;
            }
            uri = uri.slice(0, uri.length - 3); // Remove the .js extension
            return `${uri}.css`;
          })();
        }
        /**
         * Called by HMR in development environment
         */
        change() {
          this.#version++;
          this.trigger('change');
        }
      }
      exports.V1Styles = V1Styles;
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./dependencies-styles",
    "from": "DependenciesStyles",
    "name": "DependenciesStyles"
  }, {
    "im": "./registry",
    "from": "styles",
    "name": "styles"
  }, {
    "im": "./v1",
    "from": "V1Styles",
    "name": "V1Styles"
  }];
  let DependenciesStyles, styles, V1Styles;

  // Module exports
  _exports.V1Styles = V1Styles;
  _exports.styles = styles;
  _exports.DependenciesStyles = DependenciesStyles;
  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'DependenciesStyles') && (_exports.DependenciesStyles = DependenciesStyles = require ? require('./dependencies-styles').DependenciesStyles : value);
    (require || prop === 'styles') && (_exports.styles = styles = require ? require('./registry').styles : value);
    (require || prop === 'V1Styles') && (_exports.V1Styles = V1Styles = require ? require('./v1').V1Styles : value);
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
//# sourceMappingURL=styles.js.map