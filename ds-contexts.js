define(["exports", "module", "@beyond-js/kernel@0.1.0/bundle", "react@16.14.0", "@beyond-js/kernel@0.1.0/core"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.useWorkspacePanelsContext = _exports.useProjectContext = _exports.useDSWorkspaceContext = _exports.useDSAsideContext = _exports.useConfigContext = _exports.hmr = _exports.__beyond_pkg = _exports.WorkspacePanelsContext = _exports.ProjectContext = _exports.DSWorkspaceContext = _exports.DSPreAside = _exports.DSBoards = _exports.DSAsideContext = _exports.ConfigContext = void 0;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/kernel", "0.1.0"], ["@beyond-js/widgets", "0.0.10"], ["@beyond-js/backend", "0.0.10"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/inspect", "0.0.1"], ["@beyond-js/local", "0.0.1"], ["dayjs", "1.11.5"], ["emmet-monaco-es", "5.1.2"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.4.0"], ["react-split", "2.0.14"], ["socket.io-client", "4.5.2"], ["split.js", "1.6.5"], ["tippy.js", "6.3.7"], ["waves", "0.1.1"], ["@beyond-js/dashboard", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
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
    hash: 1252031974,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.useWorkspacePanelsContext = exports.useProjectContext = exports.useDSWorkspaceContext = exports.useDSAsideContext = exports.useConfigContext = exports.useAppModulesContext = exports.WorkspacePanelsContext = exports.ProjectContext = exports.DSWorkspaceContext = exports.DSBoards = exports.DSAsideContext = exports.ConfigContext = exports.AppModulesContext = void 0;

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

      const ProjectContext = React.createContext();
      exports.ProjectContext = ProjectContext;
      /*bundle */

      const useProjectContext = () => React.useContext(ProjectContext);

      exports.useProjectContext = useProjectContext;
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
    "from": "ProjectContext",
    "name": "ProjectContext"
  }, {
    "im": "./context",
    "from": "useProjectContext",
    "name": "useProjectContext"
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
  let DSBoards, DSWorkspaceContext, useDSWorkspaceContext, DSAsideContext, useDSAsideContext, WorkspacePanelsContext, useWorkspacePanelsContext, ProjectContext, useProjectContext, ConfigContext, useConfigContext, DSPreAside; // Module exports

  _exports.DSPreAside = DSPreAside;
  _exports.useConfigContext = useConfigContext;
  _exports.ConfigContext = ConfigContext;
  _exports.useProjectContext = useProjectContext;
  _exports.ProjectContext = ProjectContext;
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
    (require || prop === 'ProjectContext') && (_exports.ProjectContext = ProjectContext = require ? require('./context').ProjectContext : value);
    (require || prop === 'useProjectContext') && (_exports.useProjectContext = useProjectContext = require ? require('./context').useProjectContext : value);
    (require || prop === 'ConfigContext') && (_exports.ConfigContext = ConfigContext = require ? require('./context').ConfigContext : value);
    (require || prop === 'useConfigContext') && (_exports.useConfigContext = useConfigContext = require ? require('./context').useConfigContext : value);
    (require || prop === 'DSPreAside') && (_exports.DSPreAside = DSPreAside = require ? require('./preaside').DSPreAside : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFuQkYsQ0FBMkJHLElBQUksSUFBRztZQUM5QixNQUFNQyxJQUFJLEdBQUdsQyxLQUFLLENBQUNpQyxJQUFELENBQWxCO1lBQ0EsS0FBS0osWUFBTCxFQUFtQkksSUFBbkIsRUFBeUJDLElBQXpCO1VBRko7VUFJQSxLQUFLN0IsT0FBTCxDQUFhLFlBQWI7UUFDSDs7UUFDRDhCLE1BQU0sR0FBR25DLEtBQUssSUFBRztVQUViQSxLQUFLLENBQUNnQyxPQUFOaEMsQ0FBY29DLElBQUksSUFBRztZQUNqQixJQUFJLEtBQUssT0FBTCxDQUFhQyxHQUFiLENBQWlCRCxJQUFqQixDQUFKLEVBQTRCLEtBQUssT0FBTCxDQUFhRSxNQUFiLENBQW9CRixJQUFwQjtZQUM1QixJQUFJLEtBQUssSUFBTCxDQUFVQyxHQUFWLENBQWNELElBQWQsQ0FBSixFQUF5QixLQUFLLElBQUwsQ0FBVUUsTUFBVixDQUFpQkYsSUFBakI7VUFGN0I7UUFGRTtNQXBDa0MsQ0FBekIsRUFBbkI7Ozs7Ozs7Ozs7O01DREE7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0EiLCJuYW1lcyI6WyJEU0JvYXJkcyIsIkV2ZW50cyIsIk1hcCIsIml0ZW1zIiwiYWRkIiwiaWRlbnRpZmllciIsInNwZWNzIiwic2V0IiwidHJpZ2dlciIsIkRTV29ya3NwYWNlQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZURTV29ya3NwYWNlQ29udGV4dCIsInVzZUNvbnRleHQiLCJEU0FzaWRlQ29udGV4dCIsInVzZURTQXNpZGVDb250ZXh0IiwiV29ya3NwYWNlUGFuZWxzQ29udGV4dCIsInVzZVdvcmtzcGFjZVBhbmVsc0NvbnRleHQiLCJQcm9qZWN0Q29udGV4dCIsInVzZVByb2plY3RDb250ZXh0IiwiQ29uZmlnQ29udGV4dCIsInVzZUNvbmZpZ0NvbnRleHQiLCJBcHBNb2R1bGVzQ29udGV4dCIsInVzZUFwcE1vZHVsZXNDb250ZXh0IiwiRFNQcmVBc2lkZSIsImJvdHRvbSIsInRvcCIsImFkZFRvVG9wIiwiYWRkSXRlbXNUb1RvcCIsImFkZFRvQm90dG9tIiwiYWRkSXRlbXMiLCJwb3NpdGlvbiIsIm5hbWVGdW5jdGlvbiIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwibmFtZSIsImRhdGEiLCJyZW1vdmUiLCJpdGVtIiwiaGFzIiwiZGVsZXRlIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ3b3Jrc3BhY2UvcHJvamVjdC9tb2R1bGVzL3dvcmtzcGFjZS9jb250ZXh0L3RzL2NvbnRleHQudHMiLCJ3b3Jrc3BhY2UvcHJvamVjdC9tb2R1bGVzL3dvcmtzcGFjZS9jb250ZXh0L3RzL3ByZWFzaWRlLnRzIiwid29ya3NwYWNlL3Byb2plY3QvbW9kdWxlcy93b3Jrc3BhY2UvY29udGV4dC90cy91c2UtY29udHJvbGxlci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF19