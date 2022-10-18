define(["exports", "module", "@beyond-js/kernel@0.0.22/bundle"], function (_exports, _amd_module, dependency_0) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.__beyond_pkg = void 0;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/kernel", "0.0.22"], ["@beyond-js/widgets", "0.0.10"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/widgets@0.0.10/application"
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
            render.widgets.register([...specs.values()]); // Register the ssr widgets

            const instances = ssr.json.widgets.instances;
            const prerender = render.prerender;
            instances.forEach(instance => prerender.ssr.push(instance)); // Register the ssr page and layout structure

            const lssr = layout.ssr;
            lssr.data(ssr.json.main, ssr.json.page);
            createLayout(config);
          }).catch(exc => console.log(exc.stack));
        });
      })();
    }
  }); // Module exports

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BS0EsU0FBU0EsWUFBVCxDQUFzQkMsTUFBdEIsRUFBaUM7UUFDN0IsTUFBTTtVQUFDQztRQUFELElBQVdELE1BQWpCO1FBQ0EsTUFBTUUsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQVRELENBQXVCRixNQUFNLEdBQUdBLE1BQUgsR0FBWSx3QkFBekNFLENBQWhCO1FBQ0FBLFFBQVEsQ0FBQ0UsSUFBVEYsQ0FBY0csTUFBZEgsQ0FBcUJELE9BQXJCQztNQUNIOztNQUVELFNBQVNJLE9BQVQsR0FBZ0I7UUFDWixNQUFNQyxRQUFRLEdBQW1CLEVBQWpDO1FBRUEsTUFBTTtVQUFDQztRQUFELElBQW9CQyxVQUFXLENBQUNDLGFBQXRDO1FBQ0FILFFBQVEsQ0FBQ0ksSUFBVEosQ0FBY0ssT0FBTyxDQUFDLEdBQUdKLFNBQVMsU0FBYixDQUFyQkQ7UUFDQUEsUUFBUSxDQUFDSSxJQUFUSixDQUFjSyxPQUFPLENBQUMsR0FBR0osU0FBUyxRQUFiLENBQXJCRDtRQUVBQSxRQUFRLENBQUNJLElBQVRKLENBQWNLLE9BQU8sQ0FBQyx3QkFBRCxDQUFyQkw7UUFDQUEsUUFBUSxDQUFDSSxJQUFUSixDQUFjSyxPQUFPLENBQUMsMkJBQUQsQ0FBckJMO1FBQ0FBLFFBQVEsQ0FBQ0ksSUFBVEosQ0FBY0ssT0FBTyxDQUFDLDRCQUFELENBQXJCTDtRQUNBQSxRQUFRLENBQUNJLElBQVRKLENBQWNLLE9BQU8sQ0FBQywyQkFBRCxDQUFyQkw7UUFFQU0sT0FBTyxDQUFDQyxHQUFSRCxDQUFZTixRQUFaTSxFQUNLRSxJQURMRixDQUNVLENBQUMsQ0FBQztVQUFDRyxPQUFPLEVBQUVqQjtRQUFWLENBQUQsQ0FBRCxLQUF5QkQsWUFBWSxDQUFDQyxNQUFELENBRC9DYyxFQUVLSSxLQUZMSixDQUVXSyxHQUFHLElBQUlDLE9BQU8sQ0FBQ0MsR0FBUkQsQ0FBWUQsR0FBRyxDQUFDRyxLQUFoQkYsQ0FGbEJOO01BR0g7O01BRUQsQ0FBQyxNQUFLO1FBQ0YsSUFBSSxDQUFPSixVQUFXLENBQUNhLFdBQXZCLEVBQW9DO1VBQ2hDaEIsT0FBTztVQUNQO1FBQ0g7UUFFRDs7Ozs7UUFHTWlCLE1BQU8sQ0FBQ0QsV0FBUkMsQ0FBb0JSLElBQXBCUSxDQUEwQkMsR0FBRCxJQUFhO1VBQ3hDLElBQUksQ0FBQ0EsR0FBRyxDQUFDQyxJQUFMLElBQWFELEdBQUcsQ0FBQ0MsSUFBSkQsQ0FBU0UsTUFBVEYsRUFBaUJHLE1BQWxDLEVBQTBDO1lBQ3RDUixPQUFPLENBQUNTLEtBQVJULENBQWMseUJBQWRBLEVBQXlDSyxHQUFHLENBQUNDLElBQUpELENBQVNFLE1BQWxEUDtZQUNBYixPQUFPO1lBQ1A7VUFDSDs7VUFFRCxNQUFNQyxRQUFRLEdBQW1CLEVBQWpDO1VBRUEsTUFBTTtZQUFDQztVQUFELElBQW9CQyxVQUFXLENBQUNDLGFBQXRDO1VBQ0FILFFBQVEsQ0FBQ0ksSUFBVEosQ0FBY0ssT0FBTyxDQUFDLEdBQUdKLFNBQVMsU0FBYixDQUFyQkQ7VUFDQUEsUUFBUSxDQUFDSSxJQUFUSixDQUFjSyxPQUFPLENBQUMsR0FBR0osU0FBUyxRQUFiLENBQXJCRDtVQUVBQSxRQUFRLENBQUNJLElBQVRKLENBQWNLLE9BQU8sQ0FBQywyQkFBRCxDQUFyQkw7VUFDQUEsUUFBUSxDQUFDSSxJQUFUSixDQUFjSyxPQUFPLENBQUMsMkJBQUQsQ0FBckJMO1VBRUFNLE9BQU8sQ0FBQ0MsR0FBUkQsQ0FBWU4sUUFBWk0sRUFBc0JFLElBQXRCRixDQUEyQixDQUFDLENBQUM7WUFBQ0csT0FBTyxFQUFFakI7VUFBVixDQUFELEdBQXNCOEIsTUFBdEIsRUFBOEI3QixNQUE5QixDQUFELEtBQTBDO1lBQ2pFO1lBQ0EsTUFBTThCLEtBQUssR0FBRyxJQUFJQyxHQUFKLENBQVFQLEdBQUcsQ0FBQ0MsSUFBSkQsQ0FBU1EsT0FBVFIsQ0FBaUJNLEtBQXpCLENBQWQ7WUFDQUQsTUFBTSxDQUFDRyxPQUFQSCxDQUFlSSxRQUFmSixDQUF3QixDQUFDLEdBQUdDLEtBQUssQ0FBQ0ksTUFBTkosRUFBSixDQUF4QkQsRUFIaUUsQ0FLakU7O1lBQ0EsTUFBTU0sU0FBUyxHQUFHWCxHQUFHLENBQUNDLElBQUpELENBQVNRLE9BQVRSLENBQWlCVyxTQUFuQztZQUNBLE1BQU1DLFNBQVMsR0FBYVAsTUFBTSxDQUFDTyxTQUFuQztZQUNBRCxTQUFTLENBQUNFLE9BQVZGLENBQW1CRyxRQUFELElBQW1CRixTQUFTLENBQUNaLEdBQVZZLENBQWN6QixJQUFkeUIsQ0FBbUJFLFFBQW5CRixDQUFyQ0QsRUFSaUUsQ0FVakU7O1lBQ0EsTUFBTUksSUFBSSxHQUFhdkMsTUFBTSxDQUFDd0IsR0FBOUI7WUFDQWUsSUFBSSxDQUFDQyxJQUFMRCxDQUFVZixHQUFHLENBQUNDLElBQUpELENBQVNpQixJQUFuQkYsRUFBeUJmLEdBQUcsQ0FBQ0MsSUFBSkQsQ0FBU2tCLElBQWxDSDtZQUNBekMsWUFBWSxDQUFDQyxNQUFELENBQVpEO1VBYkosR0FjR21CLEtBZEhKLENBY1NLLEdBQUcsSUFBSUMsT0FBTyxDQUFDQyxHQUFSRCxDQUFZRCxHQUFHLENBQUNHLEtBQWhCRixDQWRoQk47UUFoQkU7TUFUViIsIm5hbWVzIjpbImNyZWF0ZUxheW91dCIsImNvbmZpZyIsImxheW91dCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwiYXBwZW5kIiwic3RhcnR1cCIsInByb21pc2VzIiwic3BlY2lmaWVyIiwiZ2xvYmFsVGhpcyIsIl9fYXBwX3BhY2thZ2UiLCJwdXNoIiwiYmltcG9ydCIsIlByb21pc2UiLCJhbGwiLCJ0aGVuIiwiZGVmYXVsdCIsImNhdGNoIiwiZXhjIiwiY29uc29sZSIsImxvZyIsInN0YWNrIiwiX19zc3JfZmV0Y2giLCJ3aW5kb3ciLCJzc3IiLCJqc29uIiwiZXJyb3JzIiwibGVuZ3RoIiwiZXJyb3IiLCJyZW5kZXIiLCJzcGVjcyIsIk1hcCIsIndpZGdldHMiLCJyZWdpc3RlciIsInZhbHVlcyIsImluc3RhbmNlcyIsInByZXJlbmRlciIsImZvckVhY2giLCJpbnN0YW5jZSIsImxzc3IiLCJkYXRhIiwibWFpbiIsInBhZ2UiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInN0YXJ0dXAudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=