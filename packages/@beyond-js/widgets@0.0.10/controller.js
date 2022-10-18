define(["exports", "module", "@beyond-js/kernel@0.0.22/bundle", "@beyond-js/kernel@0.0.22/core", "@beyond-js/widgets@0.0.10/render", "@beyond-js/kernel@0.0.22/styles"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.__beyond_pkg = _exports.WidgetServerController = _exports.WidgetControllerBase = _exports.WidgetClientController = _exports.WidgetAttributes = _exports.IWidgetStore = _exports.IWidgetRendered = void 0;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/kernel", "0.0.22"], ["@beyond-js/widgets", "0.0.10"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/widgets@0.0.10/controller"
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
      /*bundle*/

      /**
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

          this.#store = this.createStore?.(); // Type check in widget is disabled due to the cyclical reference between controller and widget

          const prerender = this.#widget.ssr.prerender;

          if (prerender) {
            const cached = prerender?.store;
            await this.#store?.hydrate(cached);
          }

          this.#store?.fetch?.();
          this.render(); // Attach to hmr changes of bundle of the widget controller

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
        } // The widget component to be mounted should be specified by the module
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
    hash: 712806230,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WidgetServerController = void 0;

      var _controller = require("./controller");

      var _styles = require("@beyond-js/kernel/styles");
      /*bundle*/

      /**
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
  let WidgetAttributes, WidgetClientController, IWidgetStore, WidgetControllerBase, IWidgetRendered, WidgetServerController; // Module exports

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQWpCeEQsQ0FBdUIsR0FBdkJBLENBQWQ7WUFDQSxNQUFNeUQsS0FBSyxHQUFHRCxLQUFLLENBQUMsQ0FBRCxDQUFMQSxDQUFTRSxVQUFURixDQUFvQixHQUFwQkEsSUFBMkJBLEtBQUssQ0FBQ0csS0FBTkgsRUFBM0JBLEdBQTJDLEtBQUssQ0FBOUQ7WUFDQSxNQUFNLENBQUNsRCxJQUFELElBQVNrRCxLQUFLLENBQUNHLEtBQU5ILEdBQWNBLEtBQWRBLENBQW9CLEdBQXBCQSxDQUFmO1lBQ0EsT0FBT0MsS0FBSyxHQUFHLEdBQUdBLEtBQUssSUFBSW5ELElBQUksRUFBbkIsR0FBd0JBLElBQXBDO1VBSlEsSUFBWjs7VUFPQSxLQUFLLE1BQUwsR0FBY04sS0FBZDtRQUNIOztNQTVEOEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNabkM7O01BQ0E7TUFnQk87O01BSFA7Ozs7O01BR2lCLE1BQ0Y0RCxzQkFERSxTQUM2QmpELGdDQUQ3QixDQUNpRDtRQUNyRCxVQUFvQixFQUFwQjs7UUFDQyxJQUFOSSxNQUFNO1VBQ04sT0FBTyxLQUFLLE9BQVo7UUFDSDs7UUFFRGxCLFlBQXNCZ0UsTUFBdEJoRSxFQUE0RTtVQUN4RSxNQUFNZ0UsTUFBTjtVQUNBLE1BQU05QyxNQUFNLEdBQUcsSUFBSUMsMEJBQUosQ0FBdUIsS0FBS2hCLEtBQUwsQ0FBV2lCLFVBQWxDLENBQWY7VUFDQUYsTUFBTSxDQUFDSSxRQUFQSixDQUFnQmQsT0FBaEJjLENBQXdCLENBQUM7WUFBQ087VUFBRCxDQUFELEtBQVksS0FBSyxPQUFMLENBQWF3QyxJQUFiLENBQWtCeEMsSUFBbEIsQ0FBcENQO1VBRUEsS0FBSyxPQUFMLENBQWFnRCxPQUFiLENBQXFCLE9BQU8sS0FBS2pCLEdBQUcsZ0JBQXBDO1FBQ0g7O01BWjZEIiwibmFtZXMiOlsiV2lkZ2V0QXR0cmlidXRlcyIsIk1hcCIsIkV2ZW50cyIsIm9uIiwiZXZlbnQiLCJsaXN0ZW5lciIsIm9mZiIsImNvbnN0cnVjdG9yIiwid2lkZ2V0IiwiYXR0cnMiLCJzcGVjcyIsImZvckVhY2giLCJhdHRyIiwic2V0IiwiZ2V0QXR0cmlidXRlIiwiY2hhbmdlIiwibmFtZSIsIm9sZCIsInZhbHVlIiwidHJpZ2dlciIsIldpZGdldENsaWVudENvbnRyb2xsZXIiLCJXaWRnZXRDb250cm9sbGVyQmFzZSIsInN0b3JlIiwiYXR0cmlidXRlcyIsImF0dHJpYnV0ZUNoYW5nZWQiLCJzdHlsZXMiLCJEZXBlbmRlbmNpZXNTdHlsZXMiLCJ2c3BlY2lmaWVyIiwibGlua3MiLCJlbGVtZW50cyIsIm1hcCIsInN0eWxlIiwiaHJlZiIsImluaXRpYWxpc2VkIiwiaW5pdGlhbGlzZSIsInVwZGF0ZSIsInJlbmRlciIsIm1vdW50IiwiZXhjIiwiY29uc29sZSIsImxvZyIsImxvY2FsTmFtZSIsInN0YWNrIiwicmVmcmVzaCIsInVubW91bnQiLCJkaXNjb25uZWN0IiwiV2lkZ2V0IiwiRXJyb3IiLCJjcmVhdGVTdG9yZSIsInByZXJlbmRlciIsInNzciIsImNhY2hlZCIsImh5ZHJhdGUiLCJmZXRjaCIsImJ1bmRsZXMiLCJoYXMiLCJwa2ciLCJnZXQiLCJwYWNrYWdlIiwiaG1yIiwiZWxlbWVudCIsImlzIiwicm91dGUiLCJsYXlvdXQiLCJsYW5ndWFnZSIsIndpZGdldHMiLCJzcGxpdCIsInNjb3BlIiwic3RhcnRzV2l0aCIsInNoaWZ0IiwiV2lkZ2V0U2VydmVyQ29udHJvbGxlciIsInBhcmFtcyIsInB1c2giLCJ1bnNoaWZ0Il0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJhdHRyaWJ1dGVzLnRzIiwiY2xpZW50LnRzIiwiY29udHJvbGxlci50cyIsInNzci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdfQ==