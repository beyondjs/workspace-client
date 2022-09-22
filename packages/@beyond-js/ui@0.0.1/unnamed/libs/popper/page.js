define(["exports", "module", "@beyond-js/kernel@0.0.22/bundle", "react@16.14.0", "react-dom@16.14.0"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Page = Page;
  _exports.hmr = void 0;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/ui", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/ui@0.0.1/unnamed/libs/popper/page"
    },
    "type": "page"
  }, _amd_module.uri).package();

  ;

  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2]]);

  const {
    module
  } = __pkg.bundle;
  const React = dependency_1;
  const ReactDOM = dependency_2;
  /*******
  view.jsx
  *******/

  function View({
    popper
  }) {
    const button = React.useRef(null);
    const tooltip = React.useRef(null);
    const [popperInstance, setPopperInstance] = React.useState();

    const show = () => {
      tooltip.current.setAttribute('data-show', '');
      popperInstance?.update();
    };

    const hide = () => tooltip.current.removeAttribute('data-show');

    const showEvents = ['mouseenter', 'focus'];
    const hideEvents = ['mouseleave', 'blur'];
    React.useEffect(() => {
      setPopperInstance(popper.createPopper(button.current, tooltip.current), {
        placement: 'top'
      });
      showEvents.forEach(event => button.current.addEventListener(event, show));
      hideEvents.forEach(event => button.current.addEventListener(event, hide));
    }, []);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      className: "page-header"
    }, "Popper Library"), /*#__PURE__*/React.createElement("button", {
      ref: button,
      "aria-describedby": "tooltip"
    }, "My button"), /*#__PURE__*/React.createElement("div", {
      className: "tooltip",
      ref: tooltip,
      role: "tooltip"
    }, "My tooltip"));
  }
  /**********
  SCSS STYLES
  **********/


  const legacyStyles = beyondLegacyStyles.register('@beyond-js/ui/unnamed/libs/popper/page', '.beyond-ui-page.popper__page .tooltip{background:#333;color:#fff;font-weight:700;padding:4px 8px;font-size:13px;border-radius:4px;display:none}.beyond-ui-page.popper__page .tooltip[data-show]{display:block}');
  legacyStyles.appendToDOM();
  /***********
  JS PROCESSOR
  ***********/

  /************
  FILE: page.js
  ************/

  function Page() {
    this.container.classList.add('beyond-ui-page', 'popper__page');

    const load = async () => {
      // const url = `/libraries/beyond-ui/libs/popper/static/vendor/popper.min.js`;
      // const popper = await beyond.require(url);
      require(['@popperjs/core'], popper => {
        ReactDOM.render(React.createElement(View, {
          popper: popper
        }), this.container);
      });
    };

    load();
  }

  const ims = new Map(); // Module exports

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {};

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});