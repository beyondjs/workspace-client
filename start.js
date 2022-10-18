define(["exports", "@beyond-js/kernel@0.1.0/bundle", "@beyond-js/kernel@0.1.0/transversals", "@beyond-js/kernel@0.1.0/core", "@beyond-js/kernel@0.1.0/routing", "@beyond-js/widgets@0.0.10/render", "@beyond-js/backend@0.0.10/client", "@beyond-js/dashboard@0.0.1/config"], function (_exports, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6) {
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
    "route": "/indexdb",
    "bundle": "@beyond-js/plm@0.0.1/unnamed/core/cache/indexeddb/tests/page",
    "vdir": false,
    "layout": "default"
  }, {
    "route": "/indexed/plm",
    "bundle": "@beyond-js/plm@0.0.1/unnamed/core/cache/indexeddb/tests/plm",
    "vdir": false,
    "layout": "default"
  }, {
    "route": "/beyond/ui/alerts",
    "bundle": "@beyond-js/ui@0.0.1/unnamed/alert/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/code",
    "bundle": "@beyond-js/ui@0.0.1/unnamed/code/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/template",
    "bundle": "@beyond-js/ui@0.0.1/unnamed/css-template/page",
    "vdir": false,
    "layout": "default"
  }, {
    "route": "/beyond/ui/empty",
    "bundle": "@beyond-js/ui@0.0.1/unnamed/empty/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/form",
    "bundle": "@beyond-js/ui@0.0.1/unnamed/form/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui",
    "bundle": "@beyond-js/ui@0.0.1/unnamed/home.page",
    "vdir": true,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/icons/buttons",
    "bundle": "@beyond-js/ui@0.0.1/unnamed/icon/pages/buttons",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/icons",
    "bundle": "@beyond-js/ui@0.0.1/page-icons",
    "vdir": false,
    "layout": "dashboard"
  }, {
    "route": "/beyond/ui/image",
    "bundle": "@beyond-js/ui@0.0.1/unnamed/image/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/import",
    "bundle": "@beyond-js/ui@0.0.1/unnamed/import/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/instruction",
    "bundle": "@beyond-js/ui@0.0.1/unnamed/instruction/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/popper",
    "bundle": "@beyond-js/ui@0.0.1/unnamed/libs/popper/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/tippy",
    "bundle": "@beyond-js/ui@0.0.1/unnamed/libs/tippy/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/list",
    "bundle": "@beyond-js/ui@0.0.1/unnamed/list/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/loading",
    "bundle": "@beyond-js/ui@0.0.1/unnamed/loading/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/modals",
    "bundle": "@beyond-js/ui@0.0.1/unnamed/modal/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/overlay",
    "bundle": "@beyond-js/ui@0.0.1/unnamed/overlay/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/scroll",
    "bundle": "@beyond-js/ui@0.0.1/unnamed/perfect-scrollbar/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/picture",
    "bundle": "@beyond-js/ui@0.0.1/unnamed/picture/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/popover",
    "bundle": "@beyond-js/ui@0.0.1/beyond-ui-popover.page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/preloadText",
    "bundle": "@beyond-js/ui@0.0.1/unnamed/preload-text/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/preload",
    "bundle": "@beyond-js/ui@0.0.1/unnamed/preload/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/publication",
    "bundle": "@beyond-js/ui@0.0.1/unnamed/publication/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/ripple",
    "bundle": "@beyond-js/ui@0.0.1/unnamed/ripple/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/select",
    "bundle": "@beyond-js/ui@0.0.1/unnamed/select/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/spinner",
    "bundle": "@beyond-js/ui@0.0.1/unnamed/spinner/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/swiper",
    "bundle": "@beyond-js/ui@0.0.1/unnamed/swiper/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/tabs",
    "bundle": "@beyond-js/ui@0.0.1/unnamed/tabs/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/toast",
    "bundle": "@beyond-js/ui@0.0.1/unnamed/toast/page",
    "vdir": false
  }, {
    "route": "/beyond/ui/toolbar",
    "bundle": "@beyond-js/ui@0.0.1/unnamed/toolbar/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
    "route": "/beyond/ui/waves",
    "bundle": "@beyond-js/ui@0.0.1/unnamed/waves/page",
    "vdir": false,
    "layout": "beyond-ui"
  }, {
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
    "name": "beyond-ui",
    "bundle": "@beyond-js/ui@0.0.1/layout-main"
  }, {
    "name": "dashboard",
    "bundle": "@beyond-js/dashboard@0.0.1/unnamed/layout/dashboard"
  }, {
    "name": "editor",
    "bundle": "@beyond-js/dashboard@0.0.1/unnamed/layout/editor"
  }]);
  const bundles = [];
  /***************************
  MODULE: @beyond-js/ui/popper
  ***************************/

  bundles.push([{
    "module": {
      "vspecifier": "@beyond-js/ui@0.0.1/popper"
    },
    "type": "start"
  }, function (ims, exports) {
    const bimport = specifier => {
      const dependencies = new Map([["@beyond-js/ui", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
      return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
    };
    /***********************
    INTERNAL MODULE: ./start
    ***********************/


    ims.set('./start', {
      hash: 4081685260,
      creator: function (require, exports) {
        "use strict";

        ((config, vendorPath) => {
          const paths = {
            '@popperjs/core': `${globalThis.baseUrl}${vendorPath}/popper.min`
          };
          config({
            paths
          });
        })(requirejs.config, `packages/@beyond-js/ui/popper/vendor`);
      }
    });
  }]);
  /**************************
  MODULE: @beyond-js/ui/tippy
  **************************/

  bundles.push([{
    "module": {
      "vspecifier": "@beyond-js/ui@0.0.1/tippy",
      "multibundle": true
    },
    "type": "start"
  }, function (ims, exports) {
    const bimport = specifier => {
      const dependencies = new Map([["@beyond-js/ui", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
      return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
    };
    /***********************
    INTERNAL MODULE: ./start
    ***********************/


    ims.set('./start', {
      hash: 566926840,
      creator: function (require, exports) {
        "use strict";

        ((config, vendorPath) => {
          const paths = {
            'tippy': `${globalThis.baseUrl}${vendorPath}/tippy.umd`
          };
          config({
            paths
          });
        })(requirejs.config, `packages/@beyond-js/ui/tippy/vendor`);
      }
    });
  }]);
  /**************************
  MODULE: @beyond-js/ui/waves
  **************************/

  bundles.push([{
    "module": {
      "vspecifier": "@beyond-js/ui@0.0.1/waves"
    },
    "type": "start"
  }, function (ims, exports) {
    const bimport = specifier => {
      const dependencies = new Map([["@beyond-js/ui", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
      return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
    };
    /***********************
    INTERNAL MODULE: ./start
    ***********************/


    ims.set('./start', {
      hash: 1633388636,
      creator: function (require, exports) {
        "use strict";

        ((config, vendorPath) => {
          const paths = {
            waves: `${globalThis.baseUrl}${vendorPath}/waves.min`
          };
          config({
            paths
          });
        })(requirejs.config, `packages/@beyond-js/ui/waves/vendor`);
      }
    });
  }]);
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
      const dependencies = new Map([["@beyond-js/kernel", "0.1.0"], ["@beyond-js/widgets", "0.0.10"], ["@beyond-js/backend", "0.0.10"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/inspect", "0.0.1"], ["@beyond-js/local", "0.0.1"], ["dayjs", "1.11.5"], ["emmet-monaco-es", "5.1.2"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.4.0"], ["react-split", "2.0.14"], ["socket.io-client", "4.5.2"], ["split.js", "1.6.5"], ["tippy.js", "6.3.7"], ["waves", "0.1.1"], ["@beyond-js/dashboard", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
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
      const dependencies = new Map([["@beyond-js/kernel", "0.1.0"], ["@beyond-js/widgets", "0.0.10"], ["@beyond-js/backend", "0.0.10"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/inspect", "0.0.1"], ["@beyond-js/local", "0.0.1"], ["dayjs", "1.11.5"], ["emmet-monaco-es", "5.1.2"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.4.0"], ["react-split", "2.0.14"], ["socket.io-client", "4.5.2"], ["split.js", "1.6.5"], ["tippy.js", "6.3.7"], ["waves", "0.1.1"], ["@beyond-js/dashboard", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
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