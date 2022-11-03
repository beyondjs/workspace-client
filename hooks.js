define(["exports", "module", "@beyond-js/kernel@0.1.0/bundle", "react@16.14.0", "react-dom@16.14.0"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.__beyond_pkg = void 0;
  _exports.useBinder = useBinder;
  _exports.useController = useController;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/inspect", "0.0.1"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/local", "0.1.0"], ["@beyond-js/kernel", "0.1.0"], ["@beyond-js/widgets", "0.1.0"], ["@beyond-js/backend", "0.1.0"], ["dayjs", "1.11.5"], ["emmet-monaco-es", "5.1.2"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.4.0"], ["react-split", "2.0.14"], ["socket.io-client", "4.5.2"], ["split.js", "1.6.5"], ["tippy.js", "6.2.5"], ["waves", "0.1.1"], ["@beyond-js/dashboard", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/dashboard@0.0.1/hooks"
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
  /*****************
  jsx\use-binder.jsx
  *****************/

  /***
   * Executes a useEffect hook binging the event defined in all
   * objects passed
   *
   * @param {array} objects Objects to bind
   * @param {function} onBinder function to be executed when the event is fired
   * @param {string} event the event to be listened, by default is event change
   */

  function useBinder(objects, onBinder, event = 'change') {
    if (!objects) return;
    objects.forEach(object => {
      React.useEffect(() => {
        if (!object) return;
        if (object && object.on) object.on(event, onBinder);
        if (object && object.bind) object.bind(event, onBinder);
        return () => {
          if (!object) return;
          object && object.off && object.off(event, onBinder);
          object && object.unbind && object.unbind(event, onBinder);
        };
      }, [object]);
    });
  }
  /*********************
  jsx\use-controller.jsx
  *********************/

  /***
   * Executes a useEffect hook binging the event defined in all
   * objects passed
   *
   * @param {array} objects Objects to bind
   * @param {function} onBinder function to be executed when the event is fired
   * @param {string} event the event to be listened, by default is event change
   */


  function useController(controller, params = [], events = {}) {
    const [model, setModel] = React.useState(null);
    React.useEffect(() => {
      const obj = new controller(...params);
      const keys = Object.keys(events);
      console.log(keys.length);

      if (keys.length) {
        console.log(3);
        keys.forEach(event => {
          console.log(3, 4, event, events[event]);
          obj.bind(event, events[event]);
          events[event]();
        });
      }

      setModel(obj);
      return () => {
        keys.forEach(event => {
          obj.unbind(event, events[event]);
        });
      };
    }, []);
    return [model];
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