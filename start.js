define(["exports", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/transversals", "@beyond-js/kernel@0.1.9/core", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/widgets@0.1.4/render", "@beyond-js/workspace@1.0.5/config"], function (_exports, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5) {
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
  __beyond_transversal.dependencies.update([['@beyond-js/kernel/transversals', dependency_1], ['@beyond-js/kernel/core', dependency_2], ['@beyond-js/kernel/routing', dependency_3], ['@beyond-js/widgets/render', dependency_4], ['@beyond-js/workspace/config', dependency_5]]);

  /***********
  BUNDLE: PAGE
  ***********/
  routing.config.pages.register([{
    "route": "/indexdb",
    "bundle": "@beyond-js/plm@0.0.1/core/cache/indexeddb/tests/page",
    "vdir": false,
    "layout": "default"
  }, {
    "route": "/indexed/plm",
    "bundle": "@beyond-js/plm@0.0.1/core/cache/indexeddb/tests/plm",
    "vdir": false,
    "layout": "default"
  }, {
    "route": "/beyond/ui/alerts",
    "bundle": "@beyond-js/ui@0.0.1/alert/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/code",
    "bundle": "@beyond-js/ui@0.0.1/code/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/template",
    "bundle": "@beyond-js/ui@0.0.1/css-template/page",
    "vdir": false,
    "layout": "default"
  }, {
    "route": "/beyond/ui/empty",
    "bundle": "@beyond-js/ui@0.0.1/empty/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/form",
    "bundle": "@beyond-js/ui@0.0.1/form/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui",
    "bundle": "@beyond-js/ui@0.0.1/home.page",
    "vdir": true,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/icons/buttons",
    "bundle": "@beyond-js/ui@0.0.1/icon/pages/buttons",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/icons",
    "bundle": "@beyond-js/ui@0.0.1/page-icons",
    "vdir": false,
    "layout": "dashboard"
  }, {
    "route": "/beyond/ui/image",
    "bundle": "@beyond-js/ui@0.0.1/image/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/import",
    "bundle": "@beyond-js/ui@0.0.1/import/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/instruction",
    "bundle": "@beyond-js/ui@0.0.1/instruction/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/list",
    "bundle": "@beyond-js/ui@0.0.1/list/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/loading",
    "bundle": "@beyond-js/ui@0.0.1/loading/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/modals",
    "bundle": "@beyond-js/ui@0.0.1/modal/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/overlay",
    "bundle": "@beyond-js/ui@0.0.1/overlay/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/scroll",
    "bundle": "@beyond-js/ui@0.0.1/perfect-scrollbar/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/picture",
    "bundle": "@beyond-js/ui@0.0.1/picture/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/popover",
    "bundle": "@beyond-js/ui@0.0.1/beyond-ui-popover.page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/preloadText",
    "bundle": "@beyond-js/ui@0.0.1/preload-text/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/preload",
    "bundle": "@beyond-js/ui@0.0.1/preload/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/publication",
    "bundle": "@beyond-js/ui@0.0.1/publication/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/ripple",
    "bundle": "@beyond-js/ui@0.0.1/ripple/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/select",
    "bundle": "@beyond-js/ui@0.0.1/select/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/spinner",
    "bundle": "@beyond-js/ui@0.0.1/spinner/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/swiper",
    "bundle": "@beyond-js/ui@0.0.1/swiper/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/tabs",
    "bundle": "@beyond-js/ui@0.0.1/tabs/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/toast",
    "bundle": "@beyond-js/ui@0.0.1/toast/page",
    "vdir": false
  }, {
    "route": "/beyond/ui/toolbar",
    "bundle": "@beyond-js/ui@0.0.1/toolbar/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/dashboard/icons",
    "bundle": "@beyond-js/workspace@1.0.5/components/core/page",
    "vdir": false
  }, {
    "route": "/empty",
    "bundle": "@beyond-js/workspace@1.0.5/components/empty",
    "vdir": false
  }, {
    "route": "/beyond/uploader",
    "bundle": "@beyond-js/workspace@1.0.5/components/uploader/page",
    "vdir": false
  }, {
    "route": "/test",
    "bundle": "@beyond-js/workspace@1.0.5/test",
    "vdir": false,
    "layout": "default"
  }, {
    "route": "/ui",
    "bundle": "@beyond-js/workspace@1.0.5/workspace-ui",
    "vdir": false,
    "layout": "dashboard"
  }, {
    "route": "/",
    "bundle": "@beyond-js/workspace@1.0.5/workspace",
    "vdir": true,
    "layout": "workspace"
  }]);

  /*************
  BUNDLE: LAYOUT
  *************/
  routing.config.layouts.register([{
    "name": "beyond-ui",
    "bundle": "@beyond-js/ui@0.0.1/layout-main"
  }, {
    "name": "workspace",
    "bundle": "@beyond-js/workspace@1.0.5/workspace-layout"
  }, {
    "name": "editor",
    "bundle": "@beyond-js/workspace@1.0.5/layout/editor"
  }]);
  const bundles = [];
  /**********************************
  MODULE: @beyond-js/workspace/boards
  **********************************/

  bundles.push([{
    "module": {
      "vspecifier": "@beyond-js/workspace@1.0.5/boards"
    },
    "type": "start"
  }, function (ims, exports) {
    const bimport = specifier => {
      const dependencies = new Map([["@beyond-js/inspect", "0.0.1"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/local", "0.1.4"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/widgets", "0.1.4"], ["@beyond-js/backend", "0.1.6"], ["dayjs", "1.11.7"], ["emmet-monaco-es", "5.2.0"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.7.0"], ["react-split", "2.0.14"], ["split.js", "1.6.5"], ["tippy.js", "6.3.7"], ["waves", "0.1.1"], ["socket.io-client", "4.5.4"], ["@beyond-js/packages-templates", "1.0.0"], ["@beyond-js/workspace", "1.0.5"], ["@beyond-js/workspace", "1.0.5"]]);
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
  MODULE: @beyond-js/workspace/monaco
  **********************************/

  bundles.push([{
    "module": {
      "vspecifier": "@beyond-js/workspace@1.0.5/monaco"
    },
    "type": "start"
  }, function (ims, exports) {
    const bimport = specifier => {
      const dependencies = new Map([["@beyond-js/inspect", "0.0.1"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/local", "0.1.4"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/widgets", "0.1.4"], ["@beyond-js/backend", "0.1.6"], ["dayjs", "1.11.7"], ["emmet-monaco-es", "5.2.0"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.7.0"], ["react-split", "2.0.14"], ["split.js", "1.6.5"], ["tippy.js", "6.3.7"], ["waves", "0.1.1"], ["socket.io-client", "4.5.4"], ["@beyond-js/packages-templates", "1.0.0"], ["@beyond-js/workspace", "1.0.5"], ["@beyond-js/workspace", "1.0.5"]]);
      return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
    };
    /***********************
    INTERNAL MODULE: ./start
    ***********************/

    ims.set('./start', {
      hash: 2255236841,
      creator: function (require, exports) {
        "use strict";

        var _config = require("@beyond-js/workspace/config");
        const {
          local
        } = _config.default;
        (function (config) {
          config({
            paths: {
              vs: `${globalThis.baseUrl}monaco/${!local ? "min" : "dev"}/vs`
            }
          });
        })(requirejs.config);
      }
    });
    return {
      dependencies: ['@beyond-js/workspace/config']
    };
  }]);
  __beyond_transversal.initialise(bundles);
  routing.setup(1);
});