define(["exports", "module", "@beyond-js/kernel@0.1.9/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/ui@0.0.1/icon", "@beyond-js/ui@0.0.1/import"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4) {
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
    BeyondIcon,
    BEYOND_ICONS
  } = dependency_3;
  const {
    BeyondImport
  } = dependency_4;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/ui", "0.0.1"], ["@beyond-js/workspace", "1.1.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/ui@0.0.1/page-icons"
    },
    "type": "page"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/ui/icon', dependency_3], ['@beyond-js/ui/import', dependency_4]]);
  const {
    module
  } = __pkg.bundle;
  const React = dependency_1;
  const ReactDOM = dependency_2;
  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  /********
  index.jsx
  ********/

  class Control extends React.Component {
    render() {
      const iconsList = BEYOND_ICONS;
      const iconsName = Object.keys(iconsList);
      return /*#__PURE__*/React.createElement("div", {
        className: "icon-container"
      }, /*#__PURE__*/React.createElement("h2", null, "Icons"), /*#__PURE__*/React.createElement(BeyondImport, {
        name: "BeyondIcon",
        route: "/libraries/beyond-ui/icon.js"
      }), /*#__PURE__*/React.createElement("span", {
        className: "text-muted"
      }, "Example: "), /*#__PURE__*/React.createElement("pre", null, '<BeyondIcon className="cls" icon="Nombre del ícono"/>'), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("h2", null, "Icon Packs"), /*#__PURE__*/React.createElement("span", {
        className: "text-muted"
      }, "Use Name: "), /*#__PURE__*/React.createElement("div", {
        className: "icon-list"
      }, iconsName.map((iconName, index) => {
        const title = iconName === 'av:stop' ? {
          title: 'icon title'
        } : null;
        return /*#__PURE__*/React.createElement("div", {
          className: "icon-element",
          key: index
        }, iconName, /*#__PURE__*/React.createElement(BeyondIcon, _extends({
          className: "",
          icon: iconName
        }, title)));
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
    ReactDOM.render(React.createElement(Control, specs), this.container);
    this.container.id = 'beyond-element-icons-page';
  }

  /**********
  SCSS STYLES
  **********/
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/ui/page-icons', '#beyond-element-icons-page .icon-container{text-align:left}#beyond-element-icons-page .icon-container .icon-list{margin-top:20px;display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr;background:#121f36}#beyond-element-icons-page .icon-container .icon-list path{fill:white}#beyond-element-icons-page .icon-container .icon-list .icon-element{text-align:center;padding:20px;font-size:16px;display:grid;grid-gap:10px;transition:.8s background-color;cursor:pointer;fill:white}#beyond-element-icons-page .icon-container .icon-list .icon-element:hover{background:#e36152;color:#fff;fill:#FFFFFF}#beyond-element-icons-page .icon-container .icon-list .icon-element .beyond-icon{margin:auto}');
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