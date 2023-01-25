define(["exports", "module", "@beyond-js/kernel@0.1.7/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/ui@0.0.1/overlay", "@beyond-js/ui@0.0.1/toolbar", "@beyond-js/ui@0.0.1/import", "@beyond-js/ui@0.0.1/form"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6) {
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
    BeyondOverlay
  } = dependency_3;
  const {
    BeyondToolbar
  } = dependency_4;
  const {
    BeyondImport
  } = dependency_5;
  const {
    BeyondButton
  } = dependency_6;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/ui", "0.0.1"], ["@beyond-js/dashboard", "1.0.2"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/ui@0.0.1/unnamed/overlay/page"
    },
    "type": "page"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/ui/overlay', dependency_3], ['@beyond-js/ui/toolbar', dependency_4], ['@beyond-js/ui/import', dependency_5], ['@beyond-js/ui/form', dependency_6]]);
  const {
    module
  } = __pkg.bundle;
  const React = dependency_1;
  const ReactDOM = dependency_2;
  /**************
  jsx\control.jsx
  **************/

  class Control extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        'overlay': false
      };
      this.showOverlay = this.showOverlay.bind(this);
      this.closeOverlay = this.closeOverlay.bind(this);
    }
    closeOverlay() {
      this.setState({
        'overlay': false
      });
    }
    showOverlay(event) {
      event.stopPropagation();
      this.setState({
        'overlay': true
      });
    }
    render() {
      return /*#__PURE__*/React.createElement("main", {
        ref: "main"
      }, /*#__PURE__*/React.createElement("h2", null, "Overlay"), /*#__PURE__*/React.createElement(BeyondImport, {
        name: "BeyondOverlay",
        route: "/libraries/beyond-ui/overlay.js"
      }), /*#__PURE__*/React.createElement("span", {
        className: "text-muted"
      }, "Example: "), /*#__PURE__*/React.createElement("pre", null, '<BeyondOverlay config={this.props.config} state={this.state} handler={this.closeOverlay}/>'), /*#__PURE__*/React.createElement(BeyondButton, {
        onClick: this.showOverlay
      }, "SHOW"), this.state.overlay && /*#__PURE__*/React.createElement(BeyondOverlay, {
        config: this.props.config,
        state: this.state,
        handler: this.closeOverlay
      }));
    }
  }

  /***********
  JS PROCESSOR
  ***********/

  /***************
  FILE: js\page.js
  ***************/

  function Page() {
    function navigate(event) {
      event.stopPropagation();
      beyond.navigate('/beyond/ui/overlay');
    }
    const config = {
      'title': '¿Qué deseas realizar?',
      'options': {
        'edit': {
          'text': 'Editar',
          'icon': 'edit',
          'action': navigate,
          'data': {
            'url': 'www.marca.com'
          }
        },
        'delete': {
          'text': 'Eliminar',
          'icon': 'delete',
          'action': navigate,
          'data': {
            'id': 123456
          }
        },
        'unFollow': {
          'text': 'Dejar de seguir',
          'icon': 'share',
          'action': navigate
        }
      }
    };
    this.render = function () {
      const wrapper = document.createElement('span');
      const specs = {
        'config': config
      };
      ReactDOM.render(React.createElement(Control, specs), wrapper);
      this.container.id = 'elements-overlay-page';
      this.container.appendChild(wrapper);
    };
  }

  /**********
  SCSS STYLES
  **********/
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/ui/unnamed/overlay/page', '#elements-overlay-page .overlay-content{position:absolute;bottom:0;right:0;left:0;height:227px;display:grid;background:gray}#elements-overlay-page .overlay-content .overlay-header{padding:15px 15px 0}#elements-overlay-page .overlay-content .overlay-header .title{font-size:16px;font-weight:500;letter-spacing:.15px;color:var(--beyond-element-secondary-text-color)}#elements-overlay-page .overlay-content .overlay-actions-link,#elements-overlay-page .overlay-content .overlay-main{display:grid;padding:30px 15px;grid-auto-flow:column}#elements-overlay-page .overlay-content .overlay-actions-link .item,#elements-overlay-page .overlay-content .overlay-main .item{display:grid;justify-items:center;background:0 0;box-shadow:none}#elements-overlay-page .overlay-content .overlay-add-link{display:grid;padding:0 15px;grid-row-gap:15px}#elements-overlay-page .overlay-content .overlay-add-link input{padding:7px 0}');
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