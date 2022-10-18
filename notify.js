define(["exports", "module", "@beyond-js/kernel@0.0.22/bundle"], function (_exports, _amd_module, dependency_0) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.__beyond_pkg = _exports.NotifyManager = void 0;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/kernel", "0.0.22"], ["@beyond-js/widgets", "0.0.10"], ["@beyond-js/backend", "0.0.10"], ["@beyond-js/plm", null], ["@beyond-js/ui", null], ["@beyond-js/inspect", null], ["@beyond-js/local", "0.0.1"], ["dayjs", "1.11.5"], ["emmet-monaco-es", "5.1.2"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.4.0"], ["react-split", "2.0.14"], ["socket.io-client", "4.5.2"], ["split.js", "1.6.5"], ["tippy.js", "6.3.7"], ["waves", "0.1.1"], ["@beyond-js/dashboard", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/dashboard@0.0.1/notify"
    },
    "type": "js"
  }, _amd_module.uri).package();

  ;

  __pkg.dependencies.update([]);

  const {
    module
  } = __pkg.bundle;
  /***********
  JS PROCESSOR
  ***********/

  /**************
  FILE: notify.js
  **************/

  function Notify() {
    this.events = new Events({
      bind: this
    });
    let value;
    Object.defineProperty(this, 'value', {
      get: () => value
    });

    const set = (msj, type) => {
      value = {
        message: msj,
        type: type
      };
      this.events.trigger('change');
    };

    this.info = message => set(message, 'info');

    this.error = message => set(message, 'error');

    this.success = message => set(message, 'success');

    this.warning = message => set(message, 'warning');
  }

  const NotifyManager = new Notify();
  _exports.NotifyManager = NotifyManager;
  const ims = new Map(); // Module exports

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