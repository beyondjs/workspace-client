define(["exports", "module", "@beyond-js/kernel@0.1.9/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/inspect@0.0.1/reactive-model", "@beyond-js/ui@0.0.1/image", "@beyond-js/ui@0.0.1/modal", "@beyond-js/ui@0.0.1/form"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.DsDocs = void 0;
  _exports.Layout = Layout;
  _exports.hmr = _exports.__beyond_pkg = void 0;
  /*************
  LEGACY IMPORTS
  *************/

  const {
    ReactiveModel
  } = dependency_3;
  const {
    BeyondImage
  } = dependency_4;
  const {
    BeyondModal
  } = dependency_5;
  const {
    BeyondButton
  } = dependency_6;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/inspect", "0.0.1"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/local", "0.1.4"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/widgets", "0.1.5"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/scaffolding", "1.0.0"], ["emmet-monaco-es", "5.2.0"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.7.0"], ["react-split", "2.0.14"], ["split.js", "1.6.5"], ["tippy.js", "6.3.7"], ["waves", "0.1.1"], ["dayjs", "1.11.7"], ["socket.io-client", "4.5.4"], ["@popperjs/core", "2.11.6"], ["@types/react", "16.14.35"], ["@types/react-dom", "16.9.18"], ["@beyond-js/workspace", "1.1.1"], ["@beyond-js/workspace", "1.1.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/workspace@1.1.1/layout/editor"
    },
    "type": "layout"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/inspect/reactive-model', dependency_3], ['@beyond-js/ui/image', dependency_4], ['@beyond-js/ui/modal', dependency_5], ['@beyond-js/ui/form', dependency_6]]);
  const {
    module
  } = __pkg.bundle;
  const React = dependency_1;
  const ReactDOM = dependency_2;
  /***********
  docs\app.jsx
  ***********/

  function AppDoc({
    closeModal
  }) {
    const go = event => {
      closeModal();
      beyond.navigate('/create_app');
    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
      className: "ds-modal_header"
    }, /*#__PURE__*/React.createElement("h4", null, "Aplicaciones en Beyond")), /*#__PURE__*/React.createElement("div", {
      className: "ds-modal_content pd"
    }, /*#__PURE__*/React.createElement("div", {
      className: "img-list"
    }, /*#__PURE__*/React.createElement(BeyondImage, {
      src: "/images/logos/js.png"
    }), /*#__PURE__*/React.createElement(BeyondImage, {
      src: "/images/logos/react.png"
    }), /*#__PURE__*/React.createElement(BeyondImage, {
      src: "/images/logos/socket-1.png"
    }), /*#__PURE__*/React.createElement(BeyondImage, {
      src: "/images/logos/typescript.png"
    })), /*#__PURE__*/React.createElement("p", {
      className: "p1"
    }, "Al crear una nueva aplicaci\xF3n, este dashboard va a crear autom\xE1ticamente los archivos de configuraci\xF3n necesarios para que puedas comenzar a trabajar em tu nueva app."), /*#__PURE__*/React.createElement("p", {
      className: "p1"
    }, "Para conocer todas las opciones disponibles de configuraci\xF3n y los detalles de estos archivos puedes revisar la documentaci\xF3n completa"), /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement(BeyondButton, {
      className: "primary",
      onClick: go
    }, "Crear mi primera aplicaci\xF3n"))));
  }
  /****************
  documentation.jsx
  ****************/

  function Documentation({
    onClose,
    doc
  }) {
    const DOCS = {
      app: AppDoc
    };
    if (!DOCS.hasOwnProperty(doc)) return null;
    const Control = DOCS[doc];
    return /*#__PURE__*/React.createElement(BeyondModal, {
      className: "ds-modal ds-modal-doc md pd",
      show: true,
      onClose: onClose
    }, /*#__PURE__*/React.createElement(Control, null));
  }
  /*********
  layout.jsx
  *********/

  class Control extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.docs = props.docs;
      this.container = React.createRef();
      this.scroll = React.createRef();
      this.props.parent.bind('change', () => this.setState({}));
      this.update = () => this.setState({});
      this.openDoc = this.openDoc.bind(this);
      this.onScroll = this.onScroll.bind(this);
    }
    onScroll(e, target, ps) {
      if (!ps?.reach?.y) {
        e.currentTarget.classList.add('sticky');
        return;
      }
      if (ps?.reach?.y === 'start') {
        e.currentTarget.classList.remove('sticky');
      }
    }
    componentDidMount() {
      this.props.parent.rendered();
      this.docs.bind('change', this.update);
    }
    openDoc(doc) {
      this.setState({
        openDoc: true,
        doc: doc
      });
    }
    componentWillUnmount() {
      this.docs.unbind('change', this.update);
      this.scroll.current.removeEventListener('ps-scroll-y', this.onScroll);
    }
    render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: "dashboard-layout",
        ref: this.container
      }), this.docs.showing && /*#__PURE__*/React.createElement(Documentation, {
        doc: this.docs.current,
        onClose: this.docs.clean
      }));
    }
  }

  /***********
  JS PROCESSOR
  ***********/

  /************
  FILE: docs.js
  ************/

  class DashboardDocs extends ReactiveModel {
    _showing;
    _current;
    constructor() {
      super();
      this.clean = this.clean.bind(this);
      this.open = this.open.bind(this);
    }
    get showing() {
      return this._showing;
    }
    get current() {
      return this._current;
    }
    open(doc) {
      this._showing = true;
      this._current = doc;
      this.triggerEvent();
    }
    clean() {
      this._showing = false;
      this._current = undefined;
      this.triggerEvent();
    }
  }
  const DsDocs = new DashboardDocs();
  /**************
  FILE: layout.js
  **************/
  _exports.DsDocs = DsDocs;
  function Layout() {
    this.control = ReactDOM.render(React.createElement(Control, {
      parent: this,
      docs: DsDocs
    }), this.container);
    this.container.classList.add('ds-layout-editor');
  }

  /**********
  SCSS STYLES
  **********/
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/workspace/layout/editor', '.ds-modal.ds-modal-doc .modal-content .img-list{display:flex;gap:15px;justify-content:center}.ds-modal.ds-modal-doc .modal-content .img-list .beyond-element-image img{object-fit:cover;height:50px;width:50px}.ds-layout-editor{min-height:99vh;width:100%;display:grid;grid-template-rows:1fr;transition:all .3s ease-in}.ds-layout-editor.sticky{transition:all .3s ease-in}');
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