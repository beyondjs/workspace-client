define(["exports", "module", "@beyond-js/kernel@0.1.9/bundle", "react@16.14.0", "react-dom@16.14.0"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.BeyondTooltip = BeyondTooltip;
  _exports.hmr = _exports.__beyond_pkg = void 0;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/inspect", "0.0.1"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/local", "0.1.4"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/widgets", "0.1.5"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/scaffolding", "1.0.0"], ["emmet-monaco-es", "5.2.0"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.7.0"], ["react-split", "2.0.14"], ["split.js", "1.6.5"], ["tippy.js", "6.3.7"], ["waves", "0.1.1"], ["dayjs", "1.11.7"], ["socket.io-client", "4.5.4"], ["@popperjs/core", "2.11.6"], ["@types/react", "16.14.35"], ["@types/react-dom", "16.9.18"], ["@beyond-js/workspace", "1.1.1"], ["@beyond-js/workspace", "1.1.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/workspace@1.1.1/tooltip"
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

  /*****************
  beyond-tooltip.jsx
  *****************/

  function BeyondTooltip({
    specs,
    className,
    unmount,
    children
  }) {
    const container = document.createElement('span');
    const ref = React.useRef();
    const [position, setPosition] = React.useState(specs);
    const close = () => {
      document.removeEventListener('click', close);
      unmount(false);
    };
    React.useEffect(() => {
      const body = document.querySelector('body');
      document.addEventListener('click', close);
      body.appendChild(container);
      const {
        offsetWidth,
        offsetHeight
      } = ref.current;
      const tWidth = offsetWidth + specs.x;
      const tHeight = offsetHeight + specs.y;
      const newPosition = {};
      if (tWidth > window.innerWidth) ref.current.style.left = `${position.x - offsetWidth}px`;
      if (tHeight > window.innerHeight) ref.current.style.top = `${position.y - offsetHeight}px`;
      return () => {
        document.removeEventListener('click', close);
        container.remove();
      };
    }, []);
    const styles = {
      position: 'absolute',
      top: `${position.y}px`,
      left: `${position.x}px`
    };
    return ReactDOM.createPortal( /*#__PURE__*/React.createElement("div", {
      style: styles,
      ref: ref,
      className: className
    }, children), container);
  }
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