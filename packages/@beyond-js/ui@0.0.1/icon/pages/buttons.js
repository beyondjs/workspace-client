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
    BEYOND_ICONS,
    BeyondIconButton
  } = dependency_3;
  const {
    BeyondImport
  } = dependency_4;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/ui", "0.0.1"], ["@beyond-js/workspace", "1.0.5"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/ui@0.0.1/icon/pages/buttons"
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
  /**********
  control.jsx
  **********/

  class Control extends React.Component {
    render() {
      const iconsList = BEYOND_ICONS;
      const iconsName = Object.keys(iconsList);
      return /*#__PURE__*/React.createElement("div", {
        className: "icon-buttons-container"
      }, /*#__PURE__*/React.createElement("h2", null, "Icon buttons"), /*#__PURE__*/React.createElement(BeyondImport, {
        name: "BeyondIconButton",
        route: "/libraries/beyond-ui/icon.js"
      }), /*#__PURE__*/React.createElement("span", {
        className: "text-muted"
      }, "Example: "), /*#__PURE__*/React.createElement("pre", null, '<BeyondIconButton className="cls" icon="Nombre del ícono"/>'), /*#__PURE__*/React.createElement("div", {
        className: "container-icon-list"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-muted"
      }, "Example: "), /*#__PURE__*/React.createElement("div", {
        className: "class-container"
      }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(BeyondIconButton, {
        icon: "user",
        title: "icon button title"
      }), /*#__PURE__*/React.createElement(BeyondIconButton, {
        icon: "user"
      }), /*#__PURE__*/React.createElement(BeyondIconButton, {
        icon: "user"
      })), /*#__PURE__*/React.createElement("pre", null, `<BeyondIconButton icon="user"/>`)), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("div", {
        className: "class-container"
      }, /*#__PURE__*/React.createElement("h2", null, "useful classes"), /*#__PURE__*/React.createElement("span", {
        className: "text-muted"
      }, "Examples: "), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(BeyondIconButton, {
        className: "primary circle",
        icon: "user"
      }), /*#__PURE__*/React.createElement(BeyondIconButton, {
        className: "circle",
        icon: "user"
      })), /*#__PURE__*/React.createElement("pre", null, ".circle")), /*#__PURE__*/React.createElement("div", {
        className: "class-container"
      }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(BeyondIconButton, {
        className: "primary",
        icon: "user"
      }), /*#__PURE__*/React.createElement(BeyondIconButton, {
        className: "primary",
        icon: "user"
      }), /*#__PURE__*/React.createElement(BeyondIconButton, {
        className: "primary",
        icon: "user"
      })), /*#__PURE__*/React.createElement("pre", null, ".primary")), /*#__PURE__*/React.createElement("div", {
        className: "class-container"
      }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(BeyondIconButton, {
        className: "circle primary",
        icon: "user"
      }), /*#__PURE__*/React.createElement(BeyondIconButton, {
        className: "circle primary",
        icon: "user"
      }), /*#__PURE__*/React.createElement(BeyondIconButton, {
        className: "circle primary",
        icon: "user"
      })), /*#__PURE__*/React.createElement("pre", null, ".primary.circle")), /*#__PURE__*/React.createElement("div", {
        className: "class-container"
      }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(BeyondIconButton, {
        className: "secondary",
        icon: "user"
      }), /*#__PURE__*/React.createElement(BeyondIconButton, {
        className: "secondary",
        icon: "user"
      }), /*#__PURE__*/React.createElement(BeyondIconButton, {
        className: "secondary",
        icon: "user"
      })), /*#__PURE__*/React.createElement("pre", null, ".secondary")), /*#__PURE__*/React.createElement("div", {
        className: "class-container"
      }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(BeyondIconButton, {
        className: "circle secondary",
        icon: "user"
      }), /*#__PURE__*/React.createElement(BeyondIconButton, {
        className: "circle secondary",
        icon: "user"
      }), /*#__PURE__*/React.createElement(BeyondIconButton, {
        className: "circle secondary",
        icon: "user"
      })), /*#__PURE__*/React.createElement("pre", null, ".secondary.circle"))));
    }
  }

  /***********
  JS PROCESSOR
  ***********/

  /************
  FILE: page.js
  ************/

  function Page() {
    this.render = function () {
      const wrapper = document.createElement('span');
      const specs = {};
      ReactDOM.render(React.createElement(Control, specs), wrapper);
      this.container.id = 'beyond-element-icons-buttons-page';
      this.container.appendChild(wrapper);
    };
  }

  /**********
  SCSS STYLES
  **********/
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/ui/icon/pages/buttons', '#beyond-element-icons-buttons-page .class-container{display:grid;grid-template-columns:20% 1fr;grid-gap:15px;margin-bottom:30px;align-items:center}#beyond-element-icons-buttons-page .container-icon-list{text-align:left}#beyond-element-icons-buttons-page button{margin-right:5px}');
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