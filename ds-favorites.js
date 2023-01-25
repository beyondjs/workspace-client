define(["exports", "module", "@beyond-js/kernel@0.1.7/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/inspect@0.0.1/reactive-model", "@beyond-js/ui@0.0.1/modal", "@beyond-js/ui@0.0.1/spinner", "@beyond-js/ui@0.0.1/form", "@beyond-js/dashboard@1.0.2/hooks", "@beyond-js/dashboard@1.0.2/database", "@beyond-js/dashboard@1.0.2/ds-contexts", "@beyond-js/dashboard@1.0.2/workspace-tree"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.__beyond_pkg = void 0;
  /*************
  LEGACY IMPORTS
  *************/

  const {
    ReactiveModel
  } = dependency_3;
  const {
    BeyondModal
  } = dependency_4;
  const {
    BeyondSpinner
  } = dependency_5;
  const {
    BeyondInput,
    BeyondButton
  } = dependency_6;
  const {
    useBinder
  } = dependency_7;
  const {
    DSModel
  } = dependency_8;
  const {
    useDSAsideContext,
    useDSWorkspaceContext
  } = dependency_9;
  const {
    useDSTreeContext,
    DSTree,
    TreeFactory
  } = dependency_10;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/inspect", "0.0.1"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/local", "0.1.2"], ["@beyond-js/kernel", "0.1.7"], ["@beyond-js/widgets", "0.1.3"], ["@beyond-js/backend", "0.1.2"], ["dayjs", "1.11.5"], ["emmet-monaco-es", "5.1.2"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.4.0"], ["react-split", "2.0.14"], ["socket.io-client", "4.5.4"], ["split.js", "1.6.5"], ["tippy.js", "6.2.5"], ["waves", "0.1.1"], ["@beyond-js/dashboard", "1.0.2"], ["@beyond-js/dashboard", "1.0.2"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/dashboard@1.0.2/ds-favorites"
    },
    "type": "code"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/inspect/reactive-model', dependency_3], ['@beyond-js/ui/modal', dependency_4], ['@beyond-js/ui/spinner', dependency_5], ['@beyond-js/ui/form', dependency_6], ['@beyond-js/dashboard/hooks', dependency_7], ['@beyond-js/dashboard/database', dependency_8], ['@beyond-js/dashboard/ds-contexts', dependency_9], ['@beyond-js/dashboard/workspace-tree', dependency_10]]);
  const {
    module
  } = __pkg.bundle;
  const React = dependency_1;
  const ReactDOM = dependency_2;
  const ims = new Map();

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