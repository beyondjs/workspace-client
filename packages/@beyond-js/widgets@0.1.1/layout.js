define(["exports", "module", "@beyond-js/kernel@0.1.4/bundle", "@beyond-js/widgets@0.1.1/render"], function (_exports, _amd_module, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.ssr = _exports.hmr = _exports.__beyond_pkg = void 0;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/kernel", "0.1.4"], ["@beyond-js/widgets", "0.1.1"], ["@beyond-js/dashboard", "1.0.2"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/widgets@0.1.1/layout"
    },
    "type": "ts"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_1]]);
  const {
    module
  } = __pkg.bundle;
  const ims = new Map();

  /**************************
  INTERNAL MODULE: ./children
  **************************/

  ims.set('./children', {
    hash: 1491145116,
    creator: function (require, exports) {
      "use strict";

      var _render = require("@beyond-js/widgets/render");
      var _ssr = require("./ssr");
      let manager;
      customElements.define('beyond-layout-children', class extends HTMLElement {
        #layout;
        #active;
        connectedCallback() {
          this.attachShadow({
            mode: 'open'
          });
          const managed = () => {
            const start = () => this.#start().catch(exc => console.error(exc.stack));
            manager.initialised ? start() : manager.ready.then(start);
          };
          // If the manager is already loaded, render without ssr
          if (manager) return managed();
          // While the manager is not loaded, try to render from ssr
          _ssr.ssr.page ? this.#onssr() : _ssr.ssr.addEventListener('received', this.#onssr);
          const promises = [];
          promises.push(bimport('@beyond-js/widgets/routing'));
          promises.push(bimport('@beyond-js/kernel/core'));
          const {
            specifier
          } = globalThis.__app_package;
          promises.push(bimport(`${specifier}/start`));
          Promise.all(promises).then(([routing]) => {
            ({
              manager
            } = routing);
            managed();
          }).catch(exc => console.log(exc.stack));
        }
        /**
         * The widget container of the current beyond-layout-children container is null if an error is detected,
         * and the DOM document when there is no project layout configured in the project.json
         *
         * @return {{container?: string, error?: string}}
         * @private
         */
        #container;
        get container() {
          if (this.#container !== void 0) return this.#container;
          const container = (() => {
            let parent = this;
            while (true) {
              const root = parent.getRootNode();
              if (root === document) return root;
              parent = root.host;
              if (_render.widgets.instances.has(parent)) return parent;
            }
          })();
          if (!container) {
            console.error(`Widget container of beyond-layout-children not found`);
            return this.#container = null;
          }
          return this.#container = container;
        }
        #onssr = () => {
          _ssr.ssr.removeEventListener('received', this.#onssr);
          const {
            container
          } = this;
          if (container === null) return;
          // The index in the hierarchy that must be appended to the shadowRoot of the beyond-layout-children
          const {
            element,
            error
          } = (() => {
            const {
              hierarchy
            } = _ssr.ssr;
            // container is undefined when there is no project layout, and the beyond-layout-children rootNode
            // is the DOM document
            if (container === document) return {
              element: hierarchy[0]
            };
            const {
              localName
            } = container;
            const index = hierarchy.indexOf(localName);
            if (index === -1) return {
              error: `Container widget of beyond-layout-children "${localName}" not found in ssr hierarchy`
            };
            if (index === hierarchy.length - 1) return {
              error: `Container widget of beyond-layout-children "${localName}" is the page, not a layout`
            };
            return {
              element: hierarchy[index + 1]
            };
          })();
          if (error) {
            console.error(error, this);
            return;
          }
          this.shadowRoot.appendChild(document.createElement(element));
        };
        #render = () => {
          this.#layout.children.forEach(child => {
            const {
              children
            } = this.shadowRoot;
            let element = [...children].find(element => element.getAttribute('data-child-id') === child.id);
            // Create the HTMLElement of the child if it was not already created
            if (!element) {
              element = document.createElement(child.element);
              element.setAttribute('data-child-id', child.id);
              this.shadowRoot.append(element);
            }
            // The show and hide methods are defined in the page controller
            const active = this.#layout.active === child;
            const controller = element.controller;
            if (active && element !== this.#active) {
              this.#active = element;
              const show = () => {
                element.removeEventListener('controller.initialised', show);
                if (element !== this.#active) return;
                const controller = element.controller;
                if (!controller) {
                  throw new Error(`Controller of element widget "${child.element}" is undefined`);
                }
                this.#active === element && controller.show?.();
              };
              controller ? controller.show?.() : element.addEventListener('controller.initialised', show);
            } else if (!element.hidden && !active) {
              controller?.hide?.();
            }
            element.hidden = !active;
          });
        };
        // Check if there are ssr elements that must be hydrated (set the child id)
        #hydrate() {
          const {
            children
          } = this.shadowRoot;
          const layout = this.#layout;
          if (!children.length) return;
          if (children.length > 1) {
            console.error('Only one child was expected on beyond-layout-children start', this);
            return;
          }
          children[0].setAttribute('data-child-id', [...layout.children.keys()][0]);
        }
        async #start() {
          _ssr.ssr.removeEventListener('received', this.#onssr);
          if (this.container === null) return;
          const done = layout => {
            this.#layout = layout;
            this.#hydrate();
            this.#layout.on('change', this.#render);
            this.#render();
          };
          // When there is no layout specified in the project.json, then the container is the DOM document
          if (this.container === document) return done(manager.main);
          // Check if the current beyond-layout-children is the main layout specified in the project.json
          const {
            localName
          } = this.container;
          if (localName === manager.main.element) return done(manager.main);
          // Look for the layout
          if (!manager.layouts.has(localName)) {
            console.error(`Layout "${localName}" not found`, [...manager.layouts], manager);
            return;
          }
          done(manager.layouts.get(localName));
        }
      });
    }
  });

  /*********************
  INTERNAL MODULE: ./ssr
  *********************/

  ims.set('./ssr', {
    hash: 2390596202,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ssr = void 0;
      /*bundle*/
      const ssr = new class extends EventTarget {
        // The main layout
        #main;
        get main() {
          return this.#main;
        }
        // The widget name of the page
        #page;
        get page() {
          return this.#page;
        }
        // The parent widgets of the page
        #layouts;
        get layouts() {
          return this.#layouts;
        }
        // The hierarchy of layouts and page considering the main layout, the parent widgets of the page
        // and the page itself
        #hierarchy = [];
        get hierarchy() {
          return this.#hierarchy;
        }
        data(main, page) {
          this.#main = main;
          this.#page = page.element;
          this.#layouts = page.parents;
          main && this.#hierarchy.push(main);
          page.parents && (this.#hierarchy = this.#hierarchy.concat(page.parents));
          this.#hierarchy.push(page.element);
          const event = new Event('received');
          this.dispatchEvent(event);
        }
      }();
      exports.ssr = ssr;
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./ssr",
    "from": "ssr",
    "name": "ssr"
  }];
  let ssr;

  // Module exports
  _exports.ssr = ssr;
  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'ssr') && (_exports.ssr = ssr = require ? require('./ssr').ssr : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxRQUFRLEdBQUd0QixJQUFJLENBQUNzRCxPQUFPO1VBRTVCTCxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQzlDLElBQUksQ0FBQzhDLElBQUksQ0FBQztVQUNsQ2pELElBQUksQ0FBQ3NELE9BQU8sS0FBSyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUNDLE1BQU0sQ0FBQ3ZELElBQUksQ0FBQ3NELE9BQU8sQ0FBQyxDQUFDO1VBQ3hFLElBQUksQ0FBQyxVQUFVLENBQUNuRCxJQUFJLENBQUNILElBQUksQ0FBQ3NCLE9BQU8sQ0FBQztVQUVsQyxNQUFNa0MsS0FBSyxHQUFHLElBQUlDLEtBQUssQ0FBQyxVQUFVLENBQUM7VUFDbkMsSUFBSSxDQUFDQyxhQUFhLENBQUNGLEtBQUssQ0FBQztRQUM3QjtPQUNIO01BQUFHIiwibmFtZXMiOlsibWFuYWdlciIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIiwiSFRNTEVsZW1lbnQiLCJjb25uZWN0ZWRDYWxsYmFjayIsImF0dGFjaFNoYWRvdyIsIm1vZGUiLCJtYW5hZ2VkIiwic3RhcnQiLCJjYXRjaCIsImV4YyIsImNvbnNvbGUiLCJlcnJvciIsInN0YWNrIiwiaW5pdGlhbGlzZWQiLCJyZWFkeSIsInRoZW4iLCJzc3IiLCJwYWdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByb21pc2VzIiwicHVzaCIsImJpbXBvcnQiLCJzcGVjaWZpZXIiLCJnbG9iYWxUaGlzIiwiX19hcHBfcGFja2FnZSIsIlByb21pc2UiLCJhbGwiLCJyb3V0aW5nIiwibG9nIiwiY29udGFpbmVyIiwicGFyZW50Iiwicm9vdCIsImdldFJvb3ROb2RlIiwiZG9jdW1lbnQiLCJob3N0Iiwid2lkZ2V0cyIsImluc3RhbmNlcyIsImhhcyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlbGVtZW50IiwiaGllcmFyY2h5IiwibG9jYWxOYW1lIiwiaW5kZXgiLCJpbmRleE9mIiwibGVuZ3RoIiwic2hhZG93Um9vdCIsImFwcGVuZENoaWxkIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkIiwiZmluZCIsImdldEF0dHJpYnV0ZSIsImlkIiwic2V0QXR0cmlidXRlIiwiYXBwZW5kIiwiYWN0aXZlIiwiY29udHJvbGxlciIsInNob3ciLCJFcnJvciIsImhpZGRlbiIsImhpZGUiLCJsYXlvdXQiLCJrZXlzIiwiZG9uZSIsIm9uIiwibWFpbiIsImxheW91dHMiLCJnZXQiLCJFdmVudFRhcmdldCIsImRhdGEiLCJwYXJlbnRzIiwiY29uY2F0IiwiZXZlbnQiLCJFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJjaGlsZHJlbi50cyIsInNzci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF19