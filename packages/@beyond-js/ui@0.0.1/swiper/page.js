define(["exports", "module", "@beyond-js/kernel@0.1.9/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/ui@0.0.1/swiper-slider", "@beyond-js/ui@0.0.1/image", "@beyond-js/ui@0.0.1/import"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Page = Page;
  _exports.hmr = _exports.__beyond_pkg = void 0;
  /*************
  LEGACY IMPORTS
  *************/

  const {
    BeyondSwiperSlider
  } = dependency_3;
  const {
    BeyondImage
  } = dependency_4;
  const {
    BeyondImport
  } = dependency_5;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/ui", "0.0.1"], ["@beyond-js/workspace", "1.1.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/ui@0.0.1/swiper/page"
    },
    "type": "page"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/ui/swiper-slider', dependency_3], ['@beyond-js/ui/image', dependency_4], ['@beyond-js/ui/import', dependency_5]]);
  const {
    module
  } = __pkg.bundle;
  const React = dependency_1;
  const ReactDOM = dependency_2;
  /*******
  view.jsx
  *******/

  class View extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Swiper"), /*#__PURE__*/React.createElement(BeyondImport, {
        name: "BeyondSwiperSlider",
        route: "/libraries/beyond-ui/swiper  .js"
      }), /*#__PURE__*/React.createElement("span", {
        className: "text-muted"
      }, "Example: "), /*#__PURE__*/React.createElement("pre", null, '<BeyondSwiperSlider/>'), /*#__PURE__*/React.createElement(BeyondSwiperSlider, {
        className: "swiper-container"
      }, /*#__PURE__*/React.createElement("p", null, "Hola mundo"), /*#__PURE__*/React.createElement("p", null, "Buen Dia"), /*#__PURE__*/React.createElement("p", null, "Hola mundo")), /*#__PURE__*/React.createElement("h2", null, "Images"), /*#__PURE__*/React.createElement(BeyondSwiperSlider, {
        className: "swiper-images"
      }, /*#__PURE__*/React.createElement(BeyondImage, {
        src: `${module.pathname}/static/images/cr7.jpg`
      }), /*#__PURE__*/React.createElement(BeyondImage, {
        src: `${module.pathname}/static/images/zidane.jpg`
      }), /*#__PURE__*/React.createElement(BeyondImage, {
        src: `${module.pathname}/static/images/henry.jpg`
      })));
    }
  }

  /***********
  JS PROCESSOR
  ***********/

  /************
  FILE: page.js
  ************/

  function Page() {
    ReactDOM.render(React.createElement(View, {}), this.container);
    this.container.id = 'beyond-ui-swiper-page';
  }

  /**********
  SCSS STYLES
  **********/
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/ui/swiper/page', '#beyond-ui-swiper-page .swiper-container,#beyond-ui-swiper-page .swiper-images{position:relative;min-height:200px}#beyond-ui-swiper-page p{color:#000}');
  legacyStyles.appendToDOM();
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