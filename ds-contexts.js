define(["exports", "module", "@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@beyond-js/kernel@0.1.9/core"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.useWorkspacePanelsContext = _exports.useProjectContext = _exports.useDSWorkspaceContext = _exports.useDSAsideContext = _exports.useConfigContext = _exports.hmr = _exports.__beyond_pkg = _exports.WorkspacePanelsContext = _exports.ProjectContext = _exports.DSWorkspaceContext = _exports.DSPreAside = _exports.DSBoards = _exports.DSAsideContext = _exports.ConfigContext = void 0;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/inspect", "0.0.1"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/local", "0.1.4"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/widgets", "0.1.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/scaffolding", "1.0.0"], ["@beyond-js/events", "0.0.6"], ["dayjs", "1.11.10"], ["emmet-monaco-es", "5.3.0"], ["monaco-editor", "0.33.0"], ["pragmate-ui", "0.0.4"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["react-split", "2.0.14"], ["socket.io-client", "4.5.4"], ["socket.io-parser", "4.2.1"], ["engine.io-parser", "5.0.7"], ["split.js", "1.6.5"], ["tippy.js", "6.3.7"], ["waves", "0.1.1"], ["@popperjs/core", "2.11.8"], ["@types/react", "16.14.56"], ["@types/react-dom", "16.9.24"], ["@beyond-js/workspace", "1.1.1"], ["@beyond-js/workspace", "1.1.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/workspace@1.1.1/ds-contexts"
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
      const DSBoards = exports.DSBoards = new class extends _core.Events {
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
      /*bundle */
      const DSWorkspaceContext = exports.DSWorkspaceContext = React.createContext();
      /*bundle */
      const useDSWorkspaceContext = () => React.useContext(DSWorkspaceContext);
      /**
       * ASide
       */
      exports.useDSWorkspaceContext = useDSWorkspaceContext;
      /*bundle */
      const DSAsideContext = exports.DSAsideContext = React.createContext();
      /*bundle */
      const useDSAsideContext = () => React.useContext(DSAsideContext);
      /**
       * Panels
       */
      exports.useDSAsideContext = useDSAsideContext;
      /*bundle */
      const WorkspacePanelsContext = exports.WorkspacePanelsContext = React.createContext();
      /*bundle */
      const useWorkspacePanelsContext = () => React.useContext(WorkspacePanelsContext);
      /**
       * Application
       */
      exports.useWorkspacePanelsContext = useWorkspacePanelsContext;
      /*bundle */
      const ProjectContext = exports.ProjectContext = React.createContext();
      /*bundle */
      const useProjectContext = () => React.useContext(ProjectContext);
      exports.useProjectContext = useProjectContext;
      /*bundle */
      const ConfigContext = exports.ConfigContext = React.createContext();
      /*bundle */
      const useConfigContext = () => React.useContext(ConfigContext);
      /**
       * MODULES
       */
      exports.useConfigContext = useConfigContext;
      const AppModulesContext = exports.AppModulesContext = React.createContext();
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
      const DSPreAside = exports.DSPreAside = new class extends Events {
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
  let DSBoards = _exports.DSBoards = void 0,
    DSWorkspaceContext = _exports.DSWorkspaceContext = void 0,
    useDSWorkspaceContext = _exports.useDSWorkspaceContext = void 0,
    DSAsideContext = _exports.DSAsideContext = void 0,
    useDSAsideContext = _exports.useDSAsideContext = void 0,
    WorkspacePanelsContext = _exports.WorkspacePanelsContext = void 0,
    useWorkspacePanelsContext = _exports.useWorkspacePanelsContext = void 0,
    ProjectContext = _exports.ProjectContext = void 0,
    useProjectContext = _exports.useProjectContext = void 0,
    ConfigContext = _exports.ConfigContext = void 0,
    useConfigContext = _exports.useConfigContext = void 0,
    DSPreAside = _exports.DSPreAside = void 0;

  // Module exports
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
  const __beyond_pkg = _exports.__beyond_pkg = __pkg;
  const hmr = _exports.hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);
    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  __pkg.initialise(ims);
});
//# sourceMappingURL=ds-contexts.js.map