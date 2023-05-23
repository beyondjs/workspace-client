define(["exports", "module", "@beyond-js/kernel@0.1.9/bundle"], function (_exports, _amd_module, dependency_0) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.__beyond_pkg = void 0;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/kernel", "0.1.9"], ["@beyond-js/widgets", "0.1.4"], ["@beyond-js/workspace", "1.0.5"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/widgets@0.1.4/application"
    },
    "type": "ts"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([]);
  const {
    module
  } = __pkg.bundle;
  const ims = new Map();

  /*************************
  INTERNAL MODULE: ./startup
  *************************/

  ims.set('./startup', {
    hash: 3577862121,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function createLayout(config) {
        const {
          layout
        } = config;
        const element = document.createElement(layout ? layout : 'beyond-layout-children');
        document.body.append(element);
      }
      function startup() {
        const promises = [];
        const {
          specifier
        } = globalThis.__app_package;
        promises.push(bimport(`${specifier}/config`));
        promises.push(bimport(`${specifier}/start`));
        promises.push(bimport('@beyond-js/kernel/core'));
        promises.push(bimport('@beyond-js/kernel/routing'));
        promises.push(bimport('@beyond-js/widgets/routing'));
        promises.push(bimport('@beyond-js/widgets/layout'));
        Promise.all(promises).then(([{
          default: config
        }]) => createLayout(config)).catch(exc => console.log(exc.stack));
      }
      (() => {
        if (!globalThis.__ssr_fetch) {
          startup();
          return;
        }
        /**
         * window.__ssr_fetch is injected in the index.html when routing.ssr is on
         */
        window.__ssr_fetch.then(ssr => {
          if (!ssr.json || ssr.json.errors?.length) {
            console.error('Error getting ssr data:', ssr.json.errors);
            startup();
            return;
          }
          const promises = [];
          const {
            specifier
          } = globalThis.__app_package;
          promises.push(bimport(`${specifier}/config`));
          promises.push(bimport(`${specifier}/start`));
          promises.push(bimport('@beyond-js/widgets/render'));
          promises.push(bimport('@beyond-js/widgets/layout'));
          Promise.all(promises).then(([{
            default: config
          },, render, layout]) => {
            // Register the widgets
            const specs = new Map(ssr.json.widgets.specs);
            render.widgets.register([...specs.values()]);
            // Register the ssr widgets
            const instances = ssr.json.widgets.instances;
            const prerender = render.prerender;
            instances.forEach(instance => prerender.ssr.push(instance));
            // Register the ssr page and layout structure
            const lssr = layout.ssr;
            lssr.data(ssr.json.main, ssr.json.page);
            createLayout(config);
          }).catch(exc => console.log(exc.stack));
        });
      })();
    }
  });

  // Module exports
  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {};
  const __beyond_pkg = __pkg;
  _exports.__beyond_pkg = __beyond_pkg;
  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);
    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;
  __pkg.initialise(ims);
});
//# sourceMappingURL=application.js.map