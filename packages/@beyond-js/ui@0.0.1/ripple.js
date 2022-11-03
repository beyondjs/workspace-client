define(["exports", "module", "@beyond-js/kernel@0.1.0/bundle", "react@16.14.0", "react-dom@16.14.0"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.BeyondRipple = BeyondRipple;
  _exports.BeyondWaves = BeyondWaves;
  _exports.hmr = _exports.__beyond_pkg = void 0;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/ui", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/ui@0.0.1/ripple"
    },
    "type": "code"
  }, _amd_module.uri).package();

  ;

  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2]]);

  const {
    module
  } = __pkg.bundle;
  const React = dependency_1;
  const ReactDOM = dependency_2;
  /***********
  JS PROCESSOR
  ***********/

  /**************
  FILE: ripple.js
  **************/

  function BeyondRipple(match) {
    'use strict';

    let waves;
    Object.defineProperty(this, 'ready', {
      'get': () => !!waves
    });

    const load = () => {
      return; // return new Promise(resolve => require(['waves'], waves => resolve(waves)));
    };

    this.removeEvent = element => element && waves && waves.calm(element);

    this.add = element => {
      if (!waves) return; // waves.attach(element);
      // waves.init();
    };

    this.init = async match => {
      await load();
      this.add(match);
    };

    match && this.init(match); // load().catch(exc => console.error(exc.stack));
  }
  /*********
  ripple.jsx
  *********/


  function BeyondWaves(props) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute'
      },
      className: "beyond-ripple"
    });
  }

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