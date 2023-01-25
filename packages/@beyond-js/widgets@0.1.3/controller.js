define(["exports", "module", "@beyond-js/kernel@0.1.7/bundle", "@beyond-js/kernel@0.1.7/core", "@beyond-js/widgets@0.1.3/render", "@beyond-js/kernel@0.1.7/styles"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.__beyond_pkg = _exports.WidgetServerController = _exports.WidgetControllerBase = _exports.WidgetClientController = _exports.WidgetAttributes = _exports.IWidgetStore = _exports.IWidgetRendered = void 0;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/kernel", "0.1.1"], ["@beyond-js/widgets", "0.1.3"], ["@beyond-js/dashboard", "1.0.2"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/widgets@0.1.3/controller"
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
    hash: 97446879,
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
            throw new Error(`Widget "${this.#widget.localName}" does not expose a Widget property`);
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
    hash: 4127212824,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxPQUFPLENBQUN5QyxPQUFPLENBQUMsT0FBTyxJQUFJLENBQUNqQixHQUFHLGdCQUFnQixDQUFDO1FBQ3pEOztNQUdIckMiLCJuYW1lcyI6WyJXaWRnZXRBdHRyaWJ1dGVzIiwiTWFwIiwiRXZlbnRzIiwib24iLCJldmVudCIsImxpc3RlbmVyIiwib2ZmIiwiY29uc3RydWN0b3IiLCJ3aWRnZXQiLCJhdHRycyIsInNwZWNzIiwiZm9yRWFjaCIsImF0dHIiLCJzZXQiLCJnZXRBdHRyaWJ1dGUiLCJjaGFuZ2UiLCJuYW1lIiwib2xkIiwidmFsdWUiLCJ0cmlnZ2VyIiwiZXhwb3J0cyIsIldpZGdldENsaWVudENvbnRyb2xsZXIiLCJXaWRnZXRDb250cm9sbGVyQmFzZSIsInN0b3JlIiwiYXR0cmlidXRlcyIsImF0dHJpYnV0ZUNoYW5nZWQiLCJzdHlsZXMiLCJEZXBlbmRlbmNpZXNTdHlsZXMiLCJ2c3BlY2lmaWVyIiwibGlua3MiLCJlbGVtZW50cyIsIm1hcCIsInN0eWxlIiwiaHJlZiIsImluaXRpYWxpc2VkIiwiaW5pdGlhbGlzZSIsInVwZGF0ZSIsInJlbmRlciIsIm1vdW50IiwiZXhjIiwiY29uc29sZSIsImxvZyIsImxvY2FsTmFtZSIsInN0YWNrIiwicmVmcmVzaCIsInVubW91bnQiLCJkaXNjb25uZWN0IiwiV2lkZ2V0IiwiRXJyb3IiLCJjcmVhdGVTdG9yZSIsInByZXJlbmRlciIsInNzciIsImNhY2hlZCIsImh5ZHJhdGUiLCJmZXRjaCIsImJ1bmRsZXMiLCJoYXMiLCJwa2ciLCJnZXQiLCJwYWNrYWdlIiwiaG1yIiwiZWxlbWVudCIsImlzIiwicm91dGUiLCJsYXlvdXQiLCJsYW5ndWFnZSIsIndpZGdldHMiLCJzcGxpdCIsInNjb3BlIiwic3RhcnRzV2l0aCIsInNoaWZ0IiwiV2lkZ2V0U2VydmVyQ29udHJvbGxlciIsInBhcmFtcyIsInB1c2giLCJ1bnNoaWZ0Il0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJhdHRyaWJ1dGVzLnRzIiwiY2xpZW50LnRzIiwiY29udHJvbGxlci50cyIsInNzci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdfQ==