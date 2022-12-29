define(["exports", "module", "@beyond-js/kernel@0.1.4/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/ui@0.0.1/image", "@beyond-js/ui@0.0.1/icon"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Footer = void 0;
  _exports.Page = Page;
  _exports.hmr = _exports.__beyond_pkg = void 0;
  /*************
  LEGACY IMPORTS
  *************/

  const {
    BeyondImage
  } = dependency_3;
  const {
    BeyondIcon
  } = dependency_4;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/ui", "0.0.1"], ["@beyond-js/dashboard", "1.0.2"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/ui@0.0.1/layout-footer"
    },
    "type": "code"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/ui/image', dependency_3], ['@beyond-js/ui/icon', dependency_4]]);
  const {
    module
  } = __pkg.bundle;
  const React = dependency_1;
  const ReactDOM = dependency_2;
  /*********
  footer.jsx
  *********/

  const Footer = () => {
    return /*#__PURE__*/React.createElement("footer", {
      className: "footer-beyond-ui"
    }, /*#__PURE__*/React.createElement(BeyondImage, {
      className: "logo",
      src: "/images/beyondjs.branding.blanco@2x.png",
      alt: ""
    }), /*#__PURE__*/React.createElement("span", null, "Accassuso, Buenos Aires, Argentina . support@beyondjs.com .  +54 9 11 4444.4434"), /*#__PURE__*/React.createElement("div", {
      className: "container-icons"
    }, /*#__PURE__*/React.createElement(BeyondIcon, {
      className: "icon-social",
      icon: "facebook"
    }), /*#__PURE__*/React.createElement(BeyondIcon, {
      className: "icon-social",
      icon: "facebook"
    }), /*#__PURE__*/React.createElement(BeyondIcon, {
      className: "icon-social",
      icon: "facebook"
    })));
  };

  /***********
  JS PROCESSOR
  ***********/

  /************
  FILE: page.js
  ************/
  _exports.Footer = Footer;
  function Page() {
    ReactDOM.render(React.createElement(AppHome, {
      'texts': module.texts,
      'currency': this.vdir
    }), this.container);
    this.container.id = 'app-footer-page';
    this.container.classList.add('page');
    bimport('https://apps.elfsight.com/p/platform.js');
  }

  /**********
  SCSS STYLES
  **********/
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/ui/layout-footer', '.footer-beyond-ui{display:grid;grid-template-columns:auto auto auto;padding:25px 45px;color:#82837f;align-items:center;background:#1e2d42}.footer-beyond-ui .logo{width:150px}.footer-beyond-ui .logo img{object-fit:contain}.footer-beyond-ui .container-icons{text-align:right}.footer-beyond-ui .container-icons .icon-social{background:0 0;border-radius:20px;margin-left:5px;cursor:pointer;padding:4px;border:solid 1px}.footer-beyond-ui path{fill:#E4E5DC}');
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