define(["exports", "module", "@beyond-js/kernel@0.1.4/bundle", "react@16.14.0", "@beyond-js/kernel@0.1.4/core"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.useWorkspacePanelsContext = _exports.useProjectContext = _exports.useDSWorkspaceContext = _exports.useDSAsideContext = _exports.useConfigContext = _exports.hmr = _exports.__beyond_pkg = _exports.WorkspacePanelsContext = _exports.ProjectContext = _exports.DSWorkspaceContext = _exports.DSPreAside = _exports.DSBoards = _exports.DSAsideContext = _exports.ConfigContext = void 0;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/inspect", "0.0.1"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/local", "0.1.2"], ["@beyond-js/kernel", "0.1.4"], ["@beyond-js/widgets", "0.1.1"], ["@beyond-js/backend", "0.1.2"], ["dayjs", "1.11.5"], ["emmet-monaco-es", "5.1.2"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.4.0"], ["react-split", "2.0.14"], ["socket.io-client", "4.5.4"], ["split.js", "1.6.5"], ["tippy.js", "6.2.5"], ["waves", "0.1.1"], ["@beyond-js/dashboard", "1.0.2"], ["@beyond-js/dashboard", "1.0.2"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/dashboard@1.0.2/ds-contexts"
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
  let DSBoards, DSWorkspaceContext, useDSWorkspaceContext, DSAsideContext, useDSAsideContext, WorkspacePanelsContext, useWorkspacePanelsContext, ProjectContext, useProjectContext, ConfigContext, useConfigContext, DSPreAside;

  // Module exports
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLENBQUNoQyxLQUFLLENBQUMsQ0FBQ2lDLE9BQU8sQ0FBQ0MsSUFBSSxJQUFHO1lBQzlCLE1BQU1DLElBQUksR0FBR25DLEtBQUssQ0FBQ2tDLElBQUksQ0FBQztZQUN4QixJQUFJLENBQUNKLFlBQVksQ0FBQyxDQUFDSSxJQUFJLEVBQUVDLElBQUksQ0FBQztVQUNsQyxDQUFDLENBQUM7VUFDRixJQUFJLENBQUM5QixPQUFPLENBQUMsWUFBWSxDQUFDO1FBQzlCO1FBQ0ErQixNQUFNLEdBQUdwQyxLQUFLLElBQUc7VUFFYkEsS0FBSyxDQUFDaUMsT0FBTyxDQUFDSSxJQUFJLElBQUc7WUFDakIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDQyxHQUFHLENBQUNELElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUNFLE1BQU0sQ0FBQ0YsSUFBSSxDQUFDO1lBQ3JELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDRCxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDRSxNQUFNLENBQUNGLElBQUksQ0FBQztVQUNuRCxDQUFDLENBQUM7UUFDTixDQUFDO09BQ0osRUFBQztNQUFDL0I7Ozs7Ozs7Ozs7O01DNUNIO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQUEiLCJuYW1lcyI6WyJEU0JvYXJkcyIsIkV2ZW50cyIsIk1hcCIsIml0ZW1zIiwiYWRkIiwiaWRlbnRpZmllciIsInNwZWNzIiwic2V0IiwidHJpZ2dlciIsImV4cG9ydHMiLCJEU1dvcmtzcGFjZUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VEU1dvcmtzcGFjZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiRFNBc2lkZUNvbnRleHQiLCJ1c2VEU0FzaWRlQ29udGV4dCIsIldvcmtzcGFjZVBhbmVsc0NvbnRleHQiLCJ1c2VXb3Jrc3BhY2VQYW5lbHNDb250ZXh0IiwiUHJvamVjdENvbnRleHQiLCJ1c2VQcm9qZWN0Q29udGV4dCIsIkNvbmZpZ0NvbnRleHQiLCJ1c2VDb25maWdDb250ZXh0IiwiQXBwTW9kdWxlc0NvbnRleHQiLCJ1c2VBcHBNb2R1bGVzQ29udGV4dCIsIkRTUHJlQXNpZGUiLCJib3R0b20iLCJ0b3AiLCJhZGRUb1RvcCIsImFkZEl0ZW1zVG9Ub3AiLCJhZGRUb0JvdHRvbSIsImFkZEl0ZW1zIiwicG9zaXRpb24iLCJuYW1lRnVuY3Rpb24iLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsIm5hbWUiLCJkYXRhIiwicmVtb3ZlIiwiaXRlbSIsImhhcyIsImRlbGV0ZSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udGV4dC50cyIsInRzL3ByZWFzaWRlLnRzIiwidHMvdXNlLWNvbnRyb2xsZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdfQ==