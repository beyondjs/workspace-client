define(["exports", "module", "@beyond-js/kernel@0.1.0/bundle", "@beyond-js/kernel@0.1.0/core"], function (_exports, _amd_module, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.styles = _exports.hmr = _exports.__beyond_pkg = _exports.V1Styles = _exports.DependenciesStyles = void 0;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/backend", "0.0.10"], ["@beyond-js/kernel", "0.1.0"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/kernel@0.1.0/styles"
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

            if (vspecifier !== this.#vspecifier && bundle.type === 'widget') return; // Check if the bundle has styles

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
        } // Is the stylesheet appended to the DOM of the page (not a shadow dom of a widget)


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
          })(); // Find and replace #host...


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


      const styles = new Registry(); // Just for legacy projects

      exports.styles = styles;
      globalThis.beyondLegacyStyles = styles;
    }
  });
  /********************
  INTERNAL MODULE: ./v1
  ********************/

  ims.set('./v1', {
    hash: 3449853183,
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
  let DependenciesStyles, styles, V1Styles; // Module exports

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQSxLQUFLLE9BQUwsR0FBZVEsa0JBQVFJLEdBQVJKLENBQVkyQixRQUFaM0IsQ0FBZjs7VUFFQSxLQUFLLFNBQUwsR0FBaUIsQ0FBQyxNQUFLO1lBQ25CLElBQUksT0FBT21ELE9BQVAsS0FBbUIsUUFBdkIsRUFBaUM7Y0FDN0IsTUFBTS9CLEtBQUssR0FBR08sUUFBUSxDQUFDUCxLQUFUTyxDQUFlLEdBQWZBLENBQWQ7Y0FDQSxNQUFNWixHQUFHLEdBQUdLLEtBQUssQ0FBQyxDQUFELENBQUxBLENBQVNnQyxVQUFUaEMsQ0FBb0IsR0FBcEJBLElBQTJCLEdBQUdBLEtBQUssQ0FBQ2lDLEtBQU5qQyxFQUFhLElBQUlBLEtBQUssQ0FBQ2lDLEtBQU5qQyxFQUFhLEVBQTVEQSxHQUFpRUEsS0FBSyxDQUFDaUMsS0FBTmpDLEVBQTdFO2NBQ0EsTUFBTWtDLE9BQU8sR0FBR2xDLEtBQUssQ0FBQ0UsSUFBTkYsQ0FBVyxHQUFYQSxDQUFoQjtjQUNBLE9BQU8sT0FBT0wsR0FBRyxPQUFPdUMsT0FBTyxNQUEvQjtZQUNIOztZQUVELElBQUk7Y0FBQ0M7WUFBRCxJQUFRLEtBQUssT0FBakI7WUFDQUEsR0FBRyxHQUFHQSxHQUFHLENBQUNDLEtBQUpELENBQVUsQ0FBVkEsRUFBYUEsR0FBRyxDQUFDRSxNQUFKRixHQUFhLENBQTFCQSxDQUFOQSxDQVRtQixDQVNpQjs7WUFDcEMsT0FBTyxHQUFHQSxHQUFHLE1BQWI7VUFWYSxJQUFqQjtRQVlIO1FBRUQ7Ozs7O1FBR0E3RCxNQUFNO1VBQ0YsS0FBSyxRQUFMO1VBQ0EsS0FBS0MsT0FBTCxDQUFhLFFBQWI7UUFDSDs7TUF4RXdCIiwibmFtZXMiOlsiRGVwZW5kZW5jaWVzU3R5bGVzIiwiRXZlbnRzIiwiZWxlbWVudHMiLCJjb25zdHJ1Y3RvciIsInZzcGVjaWZpZXIiLCJjaGFuZ2UiLCJ0cmlnZ2VyIiwiU2V0IiwicmVjdXJzaXZlIiwiY29uc29sZSIsInRyYWNlIiwiYnVuZGxlcyIsImhhcyIsImVycm9yIiwiYnVuZGxlIiwiZ2V0IiwidHlwZSIsInN0eWxlcyIsInJlZ2lzdHJ5IiwiZW5naW5lIiwiYWRkIiwib24iLCJkZXBlbmRlbmNpZXMiLCJwYWNrYWdlIiwiZm9yRWFjaCIsImRlcGVuZGVuY3kiLCJwa2ciLCJfX2JleW9uZF9wa2ciLCJ2YWx1ZSIsImFwcGVuZGVkIiwibW9kdWxlIiwic3BsaXQiLCJwb3AiLCJqb2luIiwicmVnZXhwIiwicmVwbGFjZSIsIm1hdGNoIiwiaG9zdCIsInJlc291cmNlIiwid2FybiIsImFwcGVuZFRvRE9NIiwiaXMiLCJwcmV2aW91cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInJlbW92ZUNoaWxkIiwiY3NzIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJzZXRBdHRyaWJ1dGUiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIlJlZ2lzdHJ5IiwiTWFwIiwicmVnaXN0ZXIiLCJMZWdhY3lTdHlsZXMiLCJWMVN0eWxlcyIsInNldCIsImdsb2JhbFRoaXMiLCJiZXlvbmRMZWdhY3lTdHlsZXMiLCJ2ZXJzaW9uIiwiaHJlZiIsInByb2Nlc3MiLCJzdGFydHNXaXRoIiwic2hpZnQiLCJzdWJwYXRoIiwidXJpIiwic2xpY2UiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImRlcGVuZGVuY2llcy1zdHlsZXMudHMiLCJsZWdhY3kudHMiLCJyZWdpc3RyeS50cyIsInYxLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF19