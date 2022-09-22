define(["exports", "module", "@beyond-js/kernel@0.0.22/bundle", "react@16.14.0", "@beyond-js/kernel@0.0.22/core"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.useWorkspacePanelsContext = _exports.useDSWorkspaceContext = _exports.useDSAsideContext = _exports.useConfigContext = _exports.useAppContext = _exports.hmr = _exports.WorkspacePanelsContext = _exports.DSWorkspaceContext = _exports.DSPreAside = _exports.DSBoards = _exports.DSAsideContext = _exports.ConfigContext = _exports.AppContext = void 0;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/kernel", "0.0.22"], ["@beyond-js/widgets", "0.0.10"], ["@beyond-js/backend", "0.0.10"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/inspect", "0.0.1"], ["@beyond-js/local", null], ["dayjs", "1.11.5"], ["emmet-monaco-es", "5.1.2"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["socket.io-client", "4.5.2"], ["split.js", "1.6.5"], ["tippy.js", "6.3.7"], ["waves", "0.1.1"], ["@beyond-js/dashboard", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/dashboard@0.0.1/ds-contexts"
    },
    "type": "code"
  }, _amd_module.uri).package();

  ;

  __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/kernel/core', dependency_2]]);

  const {
    module
  } = __pkg.bundle;
  const ims = new Map();
  /*************************
  INTERNAL MODULE: ./context
  *************************/

  ims.set('./context', {
    hash: 2191741303,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.useWorkspacePanelsContext = exports.useDSWorkspaceContext = exports.useDSAsideContext = exports.useConfigContext = exports.useAppModulesContext = exports.useAppContext = exports.WorkspacePanelsContext = exports.DSWorkspaceContext = exports.DSBoards = exports.DSAsideContext = exports.ConfigContext = exports.AppModulesContext = exports.AppContext = void 0;

      var React = require("react");

      var _core = require("@beyond-js/kernel/core");
      /*bundle */


      const DSBoards = new class extends _core.Events {
        #items = new Map();

        get items() {
          return this.#items;
        }

        add(identifier, specs) {
          this.items.set(identifier, specs);
          this.trigger('board.added');
        }

      }();
      /**
       * Workspace
       */

      exports.DSBoards = DSBoards;
      /*bundle */

      const DSWorkspaceContext = React.createContext();
      exports.DSWorkspaceContext = DSWorkspaceContext;
      /*bundle */

      const useDSWorkspaceContext = () => React.useContext(DSWorkspaceContext);
      /**
       * ASide
       */


      exports.useDSWorkspaceContext = useDSWorkspaceContext;
      /*bundle */

      const DSAsideContext = React.createContext();
      exports.DSAsideContext = DSAsideContext;
      /*bundle */

      const useDSAsideContext = () => React.useContext(DSAsideContext);
      /**
       * Panels
       */


      exports.useDSAsideContext = useDSAsideContext;
      /*bundle */

      const WorkspacePanelsContext = React.createContext();
      exports.WorkspacePanelsContext = WorkspacePanelsContext;
      /*bundle */

      const useWorkspacePanelsContext = () => React.useContext(WorkspacePanelsContext);
      /**
       * Application
       */


      exports.useWorkspacePanelsContext = useWorkspacePanelsContext;
      /*bundle */

      const AppContext = React.createContext();
      exports.AppContext = AppContext;
      /*bundle */

      const useAppContext = () => React.useContext(AppContext);

      exports.useAppContext = useAppContext;
      /*bundle */

      const ConfigContext = React.createContext();
      exports.ConfigContext = ConfigContext;
      /*bundle */

      const useConfigContext = () => React.useContext(ConfigContext);
      /**
       * MODULES
       */


      exports.useConfigContext = useConfigContext;
      const AppModulesContext = React.createContext();
      exports.AppModulesContext = AppModulesContext;

      const useAppModulesContext = () => React.useContext(AppModulesContext);

      exports.useAppModulesContext = useAppModulesContext;
    }
  });
  /**************************
  INTERNAL MODULE: ./preaside
  **************************/

  ims.set('./preaside', {
    hash: 2495865331,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DSPreAside = void 0;
      /*bundle*/

      const DSPreAside = new class extends Events {
        #bottom = new Map();

        get bottom() {
          return this.#bottom;
        }

        #top = new Map();

        get top() {
          return this.#top;
        }

        addToTop(identifier, specs) {
          this.#top.set(identifier, specs);
          this.trigger('item.added');
        }

        addItemsToTop(items) {}

        addToBottom(identifier, specs) {
          this.#bottom.set(identifier, specs);
          this.trigger('item.added');
        }

        addItems(position, items) {
          const nameFunction = position === 'bottom' ? 'addToBottom' : 'addToTop';
          Object.keys(items).forEach(name => {
            const data = items[name];
            this[nameFunction](name, data);
          });
          this.trigger('item.added');
        }

        remove = items => {
          items.forEach(item => {
            if (this.#bottom.has(item)) this.#bottom.delete(item);
            if (this.#top.has(item)) this.#top.delete(item);
          });
        };
      }();
      exports.DSPreAside = DSPreAside;
    }
  });
  /********************************
  INTERNAL MODULE: ./use-controller
  ********************************/

  ims.set('./use-controller', {
    hash: 1319212642,
    creator: function (require, exports) {
      // import React from "react";
      //
      // function useController(Controller) {
      //
      //     const [controller, setController] = React.useState();
      //     React.useEffect(() => {
      //
      //     }, []);
      //
      // }
      "use strict";
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./context",
    "from": "DSBoards",
    "name": "DSBoards"
  }, {
    "im": "./context",
    "from": "DSWorkspaceContext",
    "name": "DSWorkspaceContext"
  }, {
    "im": "./context",
    "from": "useDSWorkspaceContext",
    "name": "useDSWorkspaceContext"
  }, {
    "im": "./context",
    "from": "DSAsideContext",
    "name": "DSAsideContext"
  }, {
    "im": "./context",
    "from": "useDSAsideContext",
    "name": "useDSAsideContext"
  }, {
    "im": "./context",
    "from": "WorkspacePanelsContext",
    "name": "WorkspacePanelsContext"
  }, {
    "im": "./context",
    "from": "useWorkspacePanelsContext",
    "name": "useWorkspacePanelsContext"
  }, {
    "im": "./context",
    "from": "AppContext",
    "name": "AppContext"
  }, {
    "im": "./context",
    "from": "useAppContext",
    "name": "useAppContext"
  }, {
    "im": "./context",
    "from": "ConfigContext",
    "name": "ConfigContext"
  }, {
    "im": "./context",
    "from": "useConfigContext",
    "name": "useConfigContext"
  }, {
    "im": "./preaside",
    "from": "DSPreAside",
    "name": "DSPreAside"
  }];
  let DSBoards, DSWorkspaceContext, useDSWorkspaceContext, DSAsideContext, useDSAsideContext, WorkspacePanelsContext, useWorkspacePanelsContext, AppContext, useAppContext, ConfigContext, useConfigContext, DSPreAside; // Module exports

  _exports.DSPreAside = DSPreAside;
  _exports.useConfigContext = useConfigContext;
  _exports.ConfigContext = ConfigContext;
  _exports.useAppContext = useAppContext;
  _exports.AppContext = AppContext;
  _exports.useWorkspacePanelsContext = useWorkspacePanelsContext;
  _exports.WorkspacePanelsContext = WorkspacePanelsContext;
  _exports.useDSAsideContext = useDSAsideContext;
  _exports.DSAsideContext = DSAsideContext;
  _exports.useDSWorkspaceContext = useDSWorkspaceContext;
  _exports.DSWorkspaceContext = DSWorkspaceContext;
  _exports.DSBoards = DSBoards;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'DSBoards') && (_exports.DSBoards = DSBoards = require ? require('./context').DSBoards : value);
    (require || prop === 'DSWorkspaceContext') && (_exports.DSWorkspaceContext = DSWorkspaceContext = require ? require('./context').DSWorkspaceContext : value);
    (require || prop === 'useDSWorkspaceContext') && (_exports.useDSWorkspaceContext = useDSWorkspaceContext = require ? require('./context').useDSWorkspaceContext : value);
    (require || prop === 'DSAsideContext') && (_exports.DSAsideContext = DSAsideContext = require ? require('./context').DSAsideContext : value);
    (require || prop === 'useDSAsideContext') && (_exports.useDSAsideContext = useDSAsideContext = require ? require('./context').useDSAsideContext : value);
    (require || prop === 'WorkspacePanelsContext') && (_exports.WorkspacePanelsContext = WorkspacePanelsContext = require ? require('./context').WorkspacePanelsContext : value);
    (require || prop === 'useWorkspacePanelsContext') && (_exports.useWorkspacePanelsContext = useWorkspacePanelsContext = require ? require('./context').useWorkspacePanelsContext : value);
    (require || prop === 'AppContext') && (_exports.AppContext = AppContext = require ? require('./context').AppContext : value);
    (require || prop === 'useAppContext') && (_exports.useAppContext = useAppContext = require ? require('./context').useAppContext : value);
    (require || prop === 'ConfigContext') && (_exports.ConfigContext = ConfigContext = require ? require('./context').ConfigContext : value);
    (require || prop === 'useConfigContext') && (_exports.useConfigContext = useConfigContext = require ? require('./context').useConfigContext : value);
    (require || prop === 'DSPreAside') && (_exports.DSPreAside = DSPreAside = require ? require('./preaside').DSPreAside : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bkJGLENBQTJCRyxJQUFJLElBQUc7WUFDOUIsTUFBTUMsSUFBSSxHQUFHbEMsS0FBSyxDQUFDaUMsSUFBRCxDQUFsQjtZQUNBLEtBQUtKLFlBQUwsRUFBbUJJLElBQW5CLEVBQXlCQyxJQUF6QjtVQUZKO1VBSUEsS0FBSzdCLE9BQUwsQ0FBYSxZQUFiO1FBQ0g7O1FBQ0Q4QixNQUFNLEdBQUduQyxLQUFLLElBQUc7VUFFYkEsS0FBSyxDQUFDZ0MsT0FBTmhDLENBQWNvQyxJQUFJLElBQUc7WUFDakIsSUFBSSxLQUFLLE9BQUwsQ0FBYUMsR0FBYixDQUFpQkQsSUFBakIsQ0FBSixFQUE0QixLQUFLLE9BQUwsQ0FBYUUsTUFBYixDQUFvQkYsSUFBcEI7WUFDNUIsSUFBSSxLQUFLLElBQUwsQ0FBVUMsR0FBVixDQUFjRCxJQUFkLENBQUosRUFBeUIsS0FBSyxJQUFMLENBQVVFLE1BQVYsQ0FBaUJGLElBQWpCO1VBRjdCO1FBRkU7TUFwQ2tDLENBQXpCLEVBQW5COzs7Ozs7Ozs7OztNQ0RBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBIiwibmFtZXMiOlsiRFNCb2FyZHMiLCJFdmVudHMiLCJNYXAiLCJpdGVtcyIsImFkZCIsImlkZW50aWZpZXIiLCJzcGVjcyIsInNldCIsInRyaWdnZXIiLCJEU1dvcmtzcGFjZUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VEU1dvcmtzcGFjZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiRFNBc2lkZUNvbnRleHQiLCJ1c2VEU0FzaWRlQ29udGV4dCIsIldvcmtzcGFjZVBhbmVsc0NvbnRleHQiLCJ1c2VXb3Jrc3BhY2VQYW5lbHNDb250ZXh0IiwiQXBwQ29udGV4dCIsInVzZUFwcENvbnRleHQiLCJDb25maWdDb250ZXh0IiwidXNlQ29uZmlnQ29udGV4dCIsIkFwcE1vZHVsZXNDb250ZXh0IiwidXNlQXBwTW9kdWxlc0NvbnRleHQiLCJEU1ByZUFzaWRlIiwiYm90dG9tIiwidG9wIiwiYWRkVG9Ub3AiLCJhZGRJdGVtc1RvVG9wIiwiYWRkVG9Cb3R0b20iLCJhZGRJdGVtcyIsInBvc2l0aW9uIiwibmFtZUZ1bmN0aW9uIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJuYW1lIiwiZGF0YSIsInJlbW92ZSIsIml0ZW0iLCJoYXMiLCJkZWxldGUiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbIndvcmtzcGFjZS9wcm9qZWN0L21vZHVsZXMvd29ya3NwYWNlL2NvbnRleHQvdHMvY29udGV4dC50cyIsIndvcmtzcGFjZS9wcm9qZWN0L21vZHVsZXMvd29ya3NwYWNlL2NvbnRleHQvdHMvcHJlYXNpZGUudHMiLCJ3b3Jrc3BhY2UvcHJvamVjdC9tb2R1bGVzL3dvcmtzcGFjZS9jb250ZXh0L3RzL3VzZS1jb250cm9sbGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXX0=