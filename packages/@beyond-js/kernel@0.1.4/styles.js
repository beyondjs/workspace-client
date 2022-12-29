define(["exports", "module", "@beyond-js/kernel@0.1.4/bundle", "@beyond-js/kernel@0.1.4/core"], function (_exports, _amd_module, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.styles = _exports.hmr = _exports.__beyond_pkg = _exports.V1Styles = _exports.DependenciesStyles = void 0;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/backend", "0.1.2"], ["@beyond-js/local", "0.1.2"], ["@beyond-js/kernel", "0.1.4"], ["@beyond-js/dashboard", "1.0.2"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/kernel@0.1.4/styles"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQUFBO01BQ0E7TUFDQTtNQUdPO01BQVUsTUFDWEEsa0JBQW1CLFNBQVFDLFlBQU07UUFDMUIsV0FBVztRQUNYLFNBQVM7UUFDbEIsSUFBSUMsUUFBUTtVQUNSLE9BQU8sSUFBSSxDQUFDLFNBQVM7UUFDekI7UUFFQUMsWUFBWUMsVUFBa0I7VUFDMUIsS0FBSyxFQUFFO1VBQ1AsSUFBSSxDQUFDLFdBQVcsR0FBR0EsVUFBVTtVQUU3QixNQUFNQyxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUNDLE9BQU8sQ0FBQyxRQUFRLENBQUM7VUFFM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJQyxHQUFHLEVBQUU7VUFDMUIsTUFBTUMsU0FBUyxHQUFJSixVQUFrQixJQUFJO1lBQ3JDLElBQUksQ0FBQ0EsVUFBVSxFQUFFO2NBQ2JLLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLCtCQUErQixDQUFDO2NBQzlDOztZQUdKLElBQUksQ0FBQ0MsaUJBQU8sQ0FBQ0MsR0FBRyxDQUFDUixVQUFVLENBQUMsRUFBRTtjQUMxQkssT0FBTyxDQUFDSSxLQUFLLENBQUMsY0FBY1QsVUFBVSx5Q0FBeUMsR0FDM0Usd0VBQXdFLENBQUM7Y0FDN0U7O1lBRUosTUFBTVUsTUFBTSxHQUFHSCxpQkFBTyxDQUFDSSxHQUFHLENBQUNYLFVBQVUsQ0FBQztZQUN0QyxJQUFJQSxVQUFVLEtBQUssSUFBSSxDQUFDLFdBQVcsSUFBSVUsTUFBTSxDQUFDRSxJQUFJLEtBQUssUUFBUSxFQUFFO1lBRWpFO1lBQ0EsTUFBTUMsTUFBTSxHQUFhQyxnQkFBUSxDQUFDSCxHQUFHLENBQUNYLFVBQVUsQ0FBQztZQUNqRCxJQUFJYSxNQUFNLElBQUlBLE1BQU0sQ0FBQ0UsTUFBTSxLQUFLLFFBQVEsRUFBRTtjQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDQyxHQUFHLENBQUNILE1BQU0sQ0FBQztjQUMxQkEsTUFBTSxDQUFDSSxFQUFFLENBQUMsUUFBUSxFQUFFaEIsTUFBTSxDQUFDOztZQUcvQixNQUFNO2NBQUNpQjtZQUFZLENBQUMsR0FBR1IsTUFBTSxDQUFDUyxPQUFPLEVBQUU7WUFDdkNELFlBQVksQ0FBQ0UsT0FBTyxDQUFFQyxVQUFlLElBQUk7Y0FDckMsTUFBTUMsR0FBRyxHQUFZRCxVQUFVLENBQUNFLFlBQVk7Y0FDNUMsSUFBSSxDQUFDRCxHQUFHLEVBQUU7Y0FFVmxCLFNBQVMsQ0FBQ2tCLEdBQUcsQ0FBQ3RCLFVBQVUsQ0FBQztZQUM3QixDQUFDLENBQUM7VUFDTixDQUFDO1VBQ0RJLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQy9COztNQUNIb0I7Ozs7Ozs7Ozs7Ozs7Ozs7O01DbkRhO1FBQ1YsSUFBSVQsTUFBTTtVQUNOLE9BQU8sUUFBUTtRQUNuQjtRQUVTLE9BQU87UUFFUCxNQUFNO1FBQ2YsSUFBSVUsS0FBSztVQUNMLE9BQU8sSUFBSSxDQUFDLE1BQU07UUFDdEI7UUFFQTtRQUNBLFNBQVMsR0FBRyxLQUFLO1FBQ2pCLElBQUlDLFFBQVE7VUFDUixPQUFPLElBQUksQ0FBQyxTQUFTO1FBQ3pCO1FBRUEzQixZQUFZVyxNQUFjLEVBQUVlLEtBQWE7VUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBR2YsTUFBTTtVQUVyQixNQUFNaUIsTUFBTSxHQUFHLENBQUMsTUFBSztZQUNqQixNQUFNQSxNQUFNLEdBQUdqQixNQUFNLENBQUNrQixLQUFLLENBQUMsR0FBRyxDQUFDO1lBQ2hDRCxNQUFNLENBQUNFLEdBQUcsRUFBRTtZQUNaLE9BQU9GLE1BQU0sQ0FBQ0csSUFBSSxDQUFDLEdBQUcsQ0FBQztVQUMzQixDQUFDLEdBQUc7VUFFSjtVQUNBLE1BQU1DLE1BQU0sR0FBRyxvQ0FBb0M7VUFDbkQsSUFBSSxDQUFDLE1BQU0sR0FBR04sS0FBSyxDQUFDTyxPQUFPLENBQUNELE1BQU0sRUFBRSxDQUFDRSxLQUFLLEVBQUVDLElBQUksRUFBRUMsUUFBUSxLQUFJO1lBQzFELElBQUlELElBQUksS0FBSyxRQUFRLElBQUlBLElBQUksS0FBSyxTQUFTLEVBQUU7Y0FDekMsT0FBTyxHQUFHUCxNQUFNLElBQUlRLFFBQVEsRUFBRTthQUNqQyxNQUFNLElBQUlELElBQUksS0FBSyxhQUFhLEVBQUU7Y0FDL0IsT0FBT0MsUUFBUTs7WUFFbkI5QixPQUFPLENBQUMrQixJQUFJLENBQUMsNkNBQTZDMUIsTUFBTSxHQUFHLEVBQUV1QixLQUFLLENBQUM7VUFDL0UsQ0FBQyxDQUFDO1FBQ047UUFFQTs7O1FBR0FJLFdBQVcsQ0FBQ0MsRUFBVTtVQUNsQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsTUFBTUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLHFCQUFxQixJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEZGLFFBQVEsSUFBSUMsUUFBUSxDQUFDRSxXQUFXLENBQUNILFFBQVEsQ0FBQzs7VUFHOUMsTUFBTUksR0FBRyxHQUFHSCxRQUFRLENBQUNJLGFBQWEsQ0FBQyxPQUFPLENBQUM7VUFDM0NELEdBQUcsQ0FBQ0UsV0FBVyxDQUFDTCxRQUFRLENBQUNNLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7VUFFckRSLEVBQUUsSUFBSUssR0FBRyxDQUFDSSxZQUFZLENBQUMsSUFBSSxFQUFFVCxFQUFFLENBQUM7VUFDaENFLFFBQVEsQ0FBQ1Esb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNILFdBQVcsQ0FBQ0YsR0FBRyxDQUFDO1VBRXpELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSTtRQUN6Qjs7TUFDSG5COzs7Ozs7Ozs7Ozs7Ozs7OztNQ3hERDtNQUNBO01BRUEsTUFBTXlCLFFBQVE7UUFDVixTQUFTLEdBQXlDLElBQUlDLEdBQUcsRUFBRTtRQUUzREMsUUFBUSxDQUFDbkQsVUFBa0IsRUFBRXlCLEtBQWE7VUFDdEMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDakIsR0FBRyxDQUFDUixVQUFVLENBQUMsRUFBRTtVQUNwQyxNQUFNYSxNQUFNLEdBQUdZLEtBQUssR0FBRyxJQUFJMkIsZUFBWSxDQUFDcEQsVUFBVSxFQUFFeUIsS0FBSyxDQUFDLEdBQUcsSUFBSTRCLFdBQVEsQ0FBQ3JELFVBQVUsQ0FBQztVQUNyRixJQUFJLENBQUMsU0FBUyxDQUFDc0QsR0FBRyxDQUFDdEQsVUFBVSxFQUFFYSxNQUFNLENBQUM7VUFDdEMsT0FBT0EsTUFBTTtRQUNqQjtRQUVBTCxHQUFHLENBQUNSLFVBQWtCO1VBQ2xCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQ1EsR0FBRyxDQUFDUixVQUFVLENBQUM7UUFDekM7UUFFQVcsR0FBRyxDQUFDWCxVQUFrQjtVQUNsQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUNXLEdBQUcsQ0FBQ1gsVUFBVSxDQUFDO1FBQ3pDOztNQUdHO01BQVcsTUFBTWEsTUFBTSxHQUFHLElBQUlvQyxRQUFRLEVBQUU7TUFFL0M7TUFBQXpCO01BQ0MrQixVQUFrQixDQUFDQyxrQkFBa0IsR0FBRzNDLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7O01DekIvQztNQUNBO01BRU87TUFBVSxNQUNYd0MsUUFBUyxTQUFReEQsWUFBTTtRQUN6QixJQUFJa0IsTUFBTTtVQUNOLE9BQU8sSUFBSTtRQUNmO1FBRUE7Ozs7OztRQU1TLE9BQU87UUFDaEIsSUFBSUwsTUFBTTtVQUNOLE9BQU8sSUFBSSxDQUFDLE9BQU87UUFDdkI7UUFFQTs7Ozs7O1FBTUEsUUFBUSxHQUFHLENBQUM7UUFDWixJQUFJK0MsT0FBTztVQUNQLE9BQU8sSUFBSSxDQUFDLFFBQVE7UUFDeEI7UUFFQTs7Ozs7O1FBTVMsU0FBUztRQUNsQixJQUFJdEIsUUFBUTtVQUNSLE9BQU8sSUFBSSxDQUFDLFNBQVM7UUFDekI7UUFFQTs7Ozs7UUFLQSxJQUFJdUIsSUFBSTtVQUNKLE1BQU1ELE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7VUFDaEUsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUdBLE9BQU8sRUFBRTtRQUN4QztRQUVBMUQsWUFBWW9DLFFBQWdCO1VBQ3hCLEtBQUssRUFBRTtVQUNQLElBQUksQ0FBQyxPQUFPLEdBQUc1QixpQkFBTyxDQUFDSSxHQUFHLENBQUN3QixRQUFRLENBQUM7VUFFcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQUs7WUFDbkIsSUFBSSxPQUFPd0IsT0FBTyxLQUFLLFFBQVEsRUFBRTtjQUM3QixNQUFNL0IsS0FBSyxHQUFHTyxRQUFRLENBQUNQLEtBQUssQ0FBQyxHQUFHLENBQUM7Y0FDakMsTUFBTU4sR0FBRyxHQUFHTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUNnQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBR2hDLEtBQUssQ0FBQ2lDLEtBQUssRUFBRSxJQUFJakMsS0FBSyxDQUFDaUMsS0FBSyxFQUFFLEVBQUUsR0FBR2pDLEtBQUssQ0FBQ2lDLEtBQUssRUFBRTtjQUMxRixNQUFNQyxPQUFPLEdBQUdsQyxLQUFLLENBQUNFLElBQUksQ0FBQyxHQUFHLENBQUM7Y0FDL0IsT0FBTyxPQUFPUixHQUFHLE9BQU93QyxPQUFPLE1BQU07O1lBR3pDLElBQUk7Y0FBQ0M7WUFBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU87WUFDeEJBLEdBQUcsR0FBR0EsR0FBRyxDQUFDQyxLQUFLLENBQUMsQ0FBQyxFQUFFRCxHQUFHLENBQUNFLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLE9BQU8sR0FBR0YsR0FBRyxNQUFNO1VBQ3ZCLENBQUMsR0FBRztRQUNSO1FBRUE7OztRQUdBOUQsTUFBTTtVQUNGLElBQUksQ0FBQyxRQUFRLEVBQUU7VUFDZixJQUFJLENBQUNDLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDMUI7O01BQ0hzQiIsIm5hbWVzIjpbIkRlcGVuZGVuY2llc1N0eWxlcyIsIkV2ZW50cyIsImVsZW1lbnRzIiwiY29uc3RydWN0b3IiLCJ2c3BlY2lmaWVyIiwiY2hhbmdlIiwidHJpZ2dlciIsIlNldCIsInJlY3Vyc2l2ZSIsImNvbnNvbGUiLCJ0cmFjZSIsImJ1bmRsZXMiLCJoYXMiLCJlcnJvciIsImJ1bmRsZSIsImdldCIsInR5cGUiLCJzdHlsZXMiLCJyZWdpc3RyeSIsImVuZ2luZSIsImFkZCIsIm9uIiwiZGVwZW5kZW5jaWVzIiwicGFja2FnZSIsImZvckVhY2giLCJkZXBlbmRlbmN5IiwicGtnIiwiX19iZXlvbmRfcGtnIiwiZXhwb3J0cyIsInZhbHVlIiwiYXBwZW5kZWQiLCJtb2R1bGUiLCJzcGxpdCIsInBvcCIsImpvaW4iLCJyZWdleHAiLCJyZXBsYWNlIiwibWF0Y2giLCJob3N0IiwicmVzb3VyY2UiLCJ3YXJuIiwiYXBwZW5kVG9ET00iLCJpcyIsInByZXZpb3VzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVtb3ZlQ2hpbGQiLCJjc3MiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsInNldEF0dHJpYnV0ZSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiUmVnaXN0cnkiLCJNYXAiLCJyZWdpc3RlciIsIkxlZ2FjeVN0eWxlcyIsIlYxU3R5bGVzIiwic2V0IiwiZ2xvYmFsVGhpcyIsImJleW9uZExlZ2FjeVN0eWxlcyIsInZlcnNpb24iLCJocmVmIiwicHJvY2VzcyIsInN0YXJ0c1dpdGgiLCJzaGlmdCIsInN1YnBhdGgiLCJ1cmkiLCJzbGljZSIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiZGVwZW5kZW5jaWVzLXN0eWxlcy50cyIsImxlZ2FjeS50cyIsInJlZ2lzdHJ5LnRzIiwidjEudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXX0=