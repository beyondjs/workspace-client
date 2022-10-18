define(["exports", "@beyond-js/kernel@0.0.22/bundle", "@beyond-js/kernel@0.0.22/transversals", "@beyond-js/kernel@0.0.22/core", "@beyond-js/kernel@0.0.22/routing", "@beyond-js/widgets@0.0.10/render", "@beyond-js/backend@0.0.10/client", "@beyond-js/dashboard@0.0.1/config"], function (_exports, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.__beyond_transversal = void 0;
  const {
    Transversal
  } = brequire('@beyond-js/kernel/transversals');

  const __beyond_transversal = new Transversal('start', '');

  _exports.__beyond_transversal = __beyond_transversal;

  __beyond_transversal.dependencies.update([['@beyond-js/kernel/transversals', dependency_1], ['@beyond-js/kernel/core', dependency_2], ['@beyond-js/kernel/routing', dependency_3], ['@beyond-js/widgets/render', dependency_4], ['@beyond-js/backend/client', dependency_5], ['@beyond-js/dashboard/config', dependency_6]]);
  /***********
  BUNDLE: PAGE
  ***********/


  routing.config.pages.register([{
    "route": "/beyond/dashboard/icons",
    "bundle": "@beyond-js/dashboard@0.0.1/unnamed/components/core/page",
    "vdir": false
  }, {
    "route": "/empty",
    "bundle": "@beyond-js/dashboard@0.0.1/unnamed/components/empty",
    "vdir": false
  }, {
    "route": "/beyond/uploader",
    "bundle": "@beyond-js/dashboard@0.0.1/unnamed/components/uploader/page",
    "vdir": false,
    "layout": "dashboard"
  }, {
    "route": "/indexdb",
    "bundle": "@beyond-js/dashboard@0.0.1/unnamed/models/indexeddb/tests/page",
    "vdir": false,
    "layout": "default"
  }, {
    "route": "/indexed/plm",
    "bundle": "@beyond-js/dashboard@0.0.1/unnamed/models/indexeddb/tests/plm",
    "vdir": false,
    "layout": "default"
  }, {
    "route": "/application/create",
    "bundle": "@beyond-js/dashboard@0.0.1/unnamed/project/create/page",
    "vdir": false,
    "layout": "dashboard"
  }, {
    "route": "/test",
    "bundle": "@beyond-js/dashboard@0.0.1/test",
    "vdir": false,
    "layout": "default"
  }, {
    "route": "/ui",
    "bundle": "@beyond-js/dashboard@0.0.1/workspace-ui",
    "vdir": false,
    "layout": "dashboard"
  }, {
    "route": "/",
    "bundle": "@beyond-js/dashboard@0.0.1/workspace.page",
    "vdir": true,
    "layout": "dashboard"
  }]);
  /*************
  BUNDLE: LAYOUT
  *************/

  routing.config.layouts.register([{
    "name": "dashboard",
    "bundle": "@beyond-js/dashboard@0.0.1/unnamed/layout/dashboard"
  }, {
    "name": "editor",
    "bundle": "@beyond-js/dashboard@0.0.1/unnamed/layout/editor"
  }]);
  const bundles = [];
  /**********************************
  MODULE: @beyond-js/dashboard/boards
  **********************************/

  bundles.push([{
    "module": {
      "vspecifier": "@beyond-js/dashboard@0.0.1/boards"
    },
    "type": "start"
  }, function (ims, exports) {
    const bimport = specifier => {
      const dependencies = new Map([["@beyond-js/kernel", "0.0.22"], ["@beyond-js/widgets", "0.0.10"], ["@beyond-js/backend", "0.0.10"], ["@beyond-js/plm", null], ["@beyond-js/ui", null], ["@beyond-js/inspect", null], ["@beyond-js/local", "0.0.1"], ["dayjs", "1.11.5"], ["emmet-monaco-es", "5.1.2"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.4.0"], ["react-split", "2.0.14"], ["socket.io-client", "4.5.2"], ["split.js", "1.6.5"], ["tippy.js", "6.3.7"], ["waves", "0.1.1"], ["@beyond-js/dashboard", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
      return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
    };
    /***********************
    INTERNAL MODULE: ./start
    ***********************/


    ims.set('./start', {
      hash: 3864758461,
      creator: function (require, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.DSBoards = void 0;

        var _core = require("@beyond-js/kernel/core");
        /*bundle*/


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
        exports.DSBoards = DSBoards;
      }
    });
    exports.descriptor = [{
      "im": "./start",
      "from": "DSBoards",
      "name": "DSBoards"
    }];
    return {
      dependencies: ['@beyond-js/kernel/core']
    };
  }]);
  /**********************************
  MODULE: @beyond-js/dashboard/monaco
  **********************************/

  bundles.push([{
    "module": {
      "vspecifier": "@beyond-js/dashboard@0.0.1/monaco"
    },
    "type": "start"
  }, function (ims, exports) {
    const bimport = specifier => {
      const dependencies = new Map([["@beyond-js/kernel", "0.0.22"], ["@beyond-js/widgets", "0.0.10"], ["@beyond-js/backend", "0.0.10"], ["@beyond-js/plm", null], ["@beyond-js/ui", null], ["@beyond-js/inspect", null], ["@beyond-js/local", "0.0.1"], ["dayjs", "1.11.5"], ["emmet-monaco-es", "5.1.2"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.4.0"], ["react-split", "2.0.14"], ["socket.io-client", "4.5.2"], ["split.js", "1.6.5"], ["tippy.js", "6.3.7"], ["waves", "0.1.1"], ["@beyond-js/dashboard", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
      return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
    };
    /***********************
    INTERNAL MODULE: ./start
    ***********************/


    ims.set('./start', {
      hash: 2670471276,
      creator: function (require, exports) {
        "use strict";

        var _client = require("@beyond-js/backend/client");

        var _config = require("@beyond-js/dashboard/config");

        _client.backends.register('@beyond-js/inspect', 'http://localhost:4000');

        const {
          local
        } = _config.default;

        (function (config) {
          config({
            paths: {
              vs: `${globalThis.baseUrl}monaco/${!local ? 'min' : 'dev'}/vs`
            }
          });
        })(requirejs.config);
      }
    });
    return {
      dependencies: ['@beyond-js/backend/client', '@beyond-js/dashboard/config']
    };
  }]);

  __beyond_transversal.initialise(bundles);

  routing.setup(1);
});