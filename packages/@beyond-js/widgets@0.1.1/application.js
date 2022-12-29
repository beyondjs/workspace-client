define(["exports", "module", "@beyond-js/kernel@0.1.4/bundle"], function (_exports, _amd_module, dependency_0) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.__beyond_pkg = void 0;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/kernel", "0.1.4"], ["@beyond-js/widgets", "0.1.1"], ["@beyond-js/dashboard", "1.0.2"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/widgets@0.1.1/application"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVEsQ0FBQyxDQUFDLEdBQUdILEtBQUssQ0FBQ0ksTUFBTSxFQUFFLENBQUMsQ0FBQztZQUU1QztZQUNBLE1BQU1DLFNBQVMsR0FBR1gsR0FBRyxDQUFDQyxJQUFJLENBQUNPLE9BQU8sQ0FBQ0csU0FBUztZQUM1QyxNQUFNQyxTQUFTLEdBQWFQLE1BQU0sQ0FBQ08sU0FBUztZQUM1Q0QsU0FBUyxDQUFDRSxPQUFPLENBQUVDLFFBQWEsSUFBS0YsU0FBUyxDQUFDWixHQUFHLENBQUNiLElBQUksQ0FBQzJCLFFBQVEsQ0FBQyxDQUFDO1lBRWxFO1lBQ0EsTUFBTUMsSUFBSSxHQUFhdkMsTUFBTSxDQUFDd0IsR0FBRztZQUNqQ2UsSUFBSSxDQUFDQyxJQUFJLENBQUNoQixHQUFHLENBQUNDLElBQUksQ0FBQ2dCLElBQUksRUFBRWpCLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDaUIsSUFBSSxDQUFDO1lBQ3ZDNUMsWUFBWSxDQUFDQyxNQUFNLENBQUM7VUFDeEIsQ0FBQyxDQUFDLENBQUNrQixLQUFLLENBQUNDLEdBQUcsSUFBSUMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUcsQ0FBQ0csS0FBSyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDO01BQ04sQ0FBQyxHQUFHIiwibmFtZXMiOlsiY3JlYXRlTGF5b3V0IiwiY29uZmlnIiwibGF5b3V0IiwiZWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJvZHkiLCJhcHBlbmQiLCJzdGFydHVwIiwicHJvbWlzZXMiLCJzcGVjaWZpZXIiLCJnbG9iYWxUaGlzIiwiX19hcHBfcGFja2FnZSIsInB1c2giLCJiaW1wb3J0IiwiUHJvbWlzZSIsImFsbCIsInRoZW4iLCJkZWZhdWx0IiwiY2F0Y2giLCJleGMiLCJjb25zb2xlIiwibG9nIiwic3RhY2siLCJfX3Nzcl9mZXRjaCIsIndpbmRvdyIsInNzciIsImpzb24iLCJlcnJvcnMiLCJsZW5ndGgiLCJlcnJvciIsInJlbmRlciIsInNwZWNzIiwiTWFwIiwid2lkZ2V0cyIsInJlZ2lzdGVyIiwidmFsdWVzIiwiaW5zdGFuY2VzIiwicHJlcmVuZGVyIiwiZm9yRWFjaCIsImluc3RhbmNlIiwibHNzciIsImRhdGEiLCJtYWluIiwicGFnZSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsic3RhcnR1cC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==