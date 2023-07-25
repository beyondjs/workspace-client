define(["exports", "module", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/core", "@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/styles"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.__beyond_pkg = _exports.WidgetServerController = _exports.WidgetControllerBase = _exports.WidgetClientController = _exports.WidgetAttributes = _exports.IWidgetStore = _exports.IWidgetRendered = void 0;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/kernel", "0.1.9"], ["@beyond-js/widgets", "0.1.4"], ["@beyond-js/workspace", "1.0.5"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/widgets@0.1.4/controller"
    },
    "type": "ts"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['@beyond-js/kernel/core', dependency_1], ['@beyond-js/widgets/render', dependency_2], ['@beyond-js/kernel/styles', dependency_3]]);
  const {
    module
  } = __pkg.bundle;
  const ims = new Map();

  /****************************
  INTERNAL MODULE: ./attributes
  ****************************/

  ims.set('./attributes', {
    hash: 3176328789,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WidgetAttributes = void 0;
      var _core = require("@beyond-js/kernel/core");
      /*bundle*/
      class WidgetAttributes extends Map {
        // The reason why it is declared as HTMLElement is to avoid circular reference between controller and widget.
        #widget;
        #events = new _core.Events();
        on = (event, listener) => this.#events.on(event, listener);
        off = (event, listener) => this.#events.off(event, listener);
        constructor(widget) {
          super();
          this.#widget = widget;
          let attrs = widget.specs.attrs;
          attrs?.forEach(attr => this.set(attr, widget.getAttribute(attr)));
        }
        change(name, old, value) {
          this.set(name, value);
          this.#events.trigger('change');
          this.#events.trigger(`${name}:change`, value);
        }
      }
      exports.WidgetAttributes = WidgetAttributes;
    }
  });

  /************************
  INTERNAL MODULE: ./client
  ************************/

  ims.set('./client', {
    hash: 2102509577,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WidgetClientController = void 0;
      var _controller = require("./controller");
      var _attributes = require("./attributes");
      var _bundle = require("@beyond-js/kernel/bundle");
      var _styles = require("@beyond-js/kernel/styles");
      /*bundle*/ /**
                  * The client widget react controller
                  */
      class WidgetClientController extends _controller.WidgetControllerBase {
        /**
         * The beyond widget.
         * The reason why it is declared as HTMLElement is to avoid circular reference between controller and widget.
         *
         * @type {HTMLElement} The beyond widget
         * @private
         */
        #widget;
        get widget() {
          return this.#widget;
        }
        #store;
        get store() {
          return this.#store;
        }
        #attributes;
        get attributes() {
          return this.#attributes;
        }
        attributeChanged(name, old, value) {
          this.#attributes.change(name, old, value);
        }
        get styles() {
          const styles = this.#widget.styles;
          return styles;
        }
        constructor(widget) {
          super({
            widget
          });
          this.#widget = widget;
          this.#attributes = new _attributes.WidgetAttributes(widget);
          const styles = new _styles.DependenciesStyles(this.specs.vspecifier);
          const links = () => [...styles.elements].map(style => style.href);
          !this.styles.initialised && this.styles.initialise(links());
          styles.on('change', () => this.styles.update(links()));
        }
        render() {
          try {
            this.mount();
          } catch (exc) {
            console.log(`Error mounting widget controller "${this.#widget.localName}":`);
            console.log(exc.stack);
          }
        }
        refresh() {
          this.unmount();
          this.render();
        }
        #refresh = () => this.refresh();
        /**
         * Comes from the web component disconnectedCallback method call
         */
        disconnect() {
          this.unmount();
        }
        async initialise() {
          if (!this.Widget) {
            throw new Error(`The return value of the Widget property is undefined. "${this.#widget.localName}" widget`);
          }
          this.#store = this.createStore?.();
          // Type check in widget is disabled due to the cyclical reference between controller and widget
          const prerender = this.#widget.ssr.prerender;
          if (prerender) {
            const cached = prerender?.store;
            await this.#store?.hydrate(cached);
          }
          this.#store?.fetch?.();
          this.render();
          // Attach to hmr changes of bundle of the widget controller
          if (!_bundle.instances.has(this.specs.vspecifier)) {
            console.log(`Bundle id "${this.specs.vspecifier}" not found. Try refreshing the page.\n` + `If the problem still persist, delete the BeyondJS cache and try again.`);
            return;
          }
          const pkg = _bundle.instances.get(this.specs.vspecifier).package();
          pkg.hmr.on('change', this.#refresh);
        }
      }
      exports.WidgetClientController = WidgetClientController;
    }
  });

  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  ims.set('./controller', {
    hash: 3835813087,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WidgetControllerBase = void 0;
      var _render = require("@beyond-js/widgets/render");
      /*bundle*/
      class WidgetControllerBase {
        #specs;
        get specs() {
          return this.#specs;
        }
        get element() {
          return this.#specs.name;
        }
        get is() {
          return this.#specs.is;
        }
        get route() {
          return this.#specs.route;
        }
        get layout() {
          return this.#specs.layout;
        }
        #pkg;
        get pkg() {
          return this.#pkg;
        }
        // The widget component to be mounted should be specified by the module
        // (can be a React, Svelte, Vue, ... component)
        get Widget() {
          return;
        }
        createStore(language) {
          return void language;
        }
        /**
         * Controller base constructor
         *
         * @param {} specs
         * @param {HTMLElement} widget
         * The reason why it is declared as HTMLElement is to avoid circular reference between controller and widget.
         * @protected
         */
        constructor({
          specs,
          widget
        }) {
          if (!specs) {
            const {
              localName
            } = widget;
            if (!_render.widgets.has(localName)) throw new Error(`Widget name "${localName}" is not registered`);
            specs = _render.widgets.get(localName);
          }
          this.#pkg = (() => {
            const split = specs.vspecifier.split('/');
            const scope = split[0].startsWith('@') ? split.shift() : void 0;
            const [name] = split.shift().split('@');
            return scope ? `${scope}/${name}` : name;
          })();
          this.#specs = specs;
        }
      }
      exports.WidgetControllerBase = WidgetControllerBase;
    }
  });

  /*********************
  INTERNAL MODULE: ./ssr
  *********************/

  ims.set('./ssr', {
    hash: 1515978368,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WidgetServerController = void 0;
      var _controller = require("./controller");
      var _styles = require("@beyond-js/kernel/styles");
      /*bundle*/ /**
                  * The SSR widget react controller
                  */
      class WidgetServerController extends _controller.WidgetControllerBase {
        #styles = [];
        get styles() {
          return this.#styles;
        }
        constructor(params) {
          super(params);
          const styles = new _styles.DependenciesStyles(this.specs.vspecifier);
          styles.elements.forEach(({
            href
          }) => this.#styles.push(href));
          this.#styles.unshift(`##_!${this.pkg}!_##global.css`);
        }
      }
      exports.WidgetServerController = WidgetServerController;
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./attributes",
    "from": "WidgetAttributes",
    "name": "WidgetAttributes"
  }, {
    "im": "./client",
    "from": "WidgetClientController",
    "name": "WidgetClientController"
  }, {
    "im": "./controller",
    "from": "IWidgetStore",
    "name": "IWidgetStore"
  }, {
    "im": "./controller",
    "from": "WidgetControllerBase",
    "name": "WidgetControllerBase"
  }, {
    "im": "./ssr",
    "from": "IWidgetRendered",
    "name": "IWidgetRendered"
  }, {
    "im": "./ssr",
    "from": "WidgetServerController",
    "name": "WidgetServerController"
  }];
  let WidgetAttributes, WidgetClientController, IWidgetStore, WidgetControllerBase, IWidgetRendered, WidgetServerController;

  // Module exports
  _exports.WidgetServerController = WidgetServerController;
  _exports.IWidgetRendered = IWidgetRendered;
  _exports.WidgetControllerBase = WidgetControllerBase;
  _exports.IWidgetStore = IWidgetStore;
  _exports.WidgetClientController = WidgetClientController;
  _exports.WidgetAttributes = WidgetAttributes;
  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'WidgetAttributes') && (_exports.WidgetAttributes = WidgetAttributes = require ? require('./attributes').WidgetAttributes : value);
    (require || prop === 'WidgetClientController') && (_exports.WidgetClientController = WidgetClientController = require ? require('./client').WidgetClientController : value);
    (require || prop === 'IWidgetStore') && (_exports.IWidgetStore = IWidgetStore = require ? require('./controller').IWidgetStore : value);
    (require || prop === 'WidgetControllerBase') && (_exports.WidgetControllerBase = WidgetControllerBase = require ? require('./controller').WidgetControllerBase : value);
    (require || prop === 'IWidgetRendered') && (_exports.IWidgetRendered = IWidgetRendered = require ? require('./ssr').IWidgetRendered : value);
    (require || prop === 'WidgetServerController') && (_exports.WidgetServerController = WidgetServerController = require ? require('./ssr').WidgetServerController : value);
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
//# sourceMappingURL=controller.js.map