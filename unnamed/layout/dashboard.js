define(["exports", "module", "@beyond-js/kernel@0.1.0/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/inspect@0.0.1/models.legacy", "@beyond-js/dashboard@0.0.1/notify", "@beyond-js/dashboard@0.0.1/layout-toolbar", "@beyond-js/ui@0.0.1/modal", "@beyond-js/ui@0.0.1/form", "@beyond-js/ui@0.0.1/image", "@beyond-js/ui@0.0.1/perfect-scrollbar", "@beyond-js/ui@0.0.1/toast"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10) {
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
    NotifyManager
  } = dependency_4;
  const {
    DashboardToolbar
  } = dependency_5;
  const {
    BeyondModal
  } = dependency_6;
  const {
    BeyondButton
  } = dependency_7;
  const {
    BeyondImage
  } = dependency_8;
  const {
    BeyondScrollContainer
  } = dependency_9;
  const {
    ToastContextProvider,
    ToastContext,
    useToastContext
  } = dependency_10;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/inspect", "0.0.1"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/local", "0.0.1"], ["@beyond-js/kernel", "0.1.0"], ["@beyond-js/widgets", "0.0.10"], ["@beyond-js/backend", "0.0.10"], ["dayjs", "1.11.5"], ["emmet-monaco-es", "5.1.2"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.4.0"], ["react-split", "2.0.14"], ["socket.io-client", "4.5.2"], ["split.js", "1.6.5"], ["tippy.js", "6.3.7"], ["waves", "0.1.1"], ["@beyond-js/dashboard", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/dashboard@0.0.1/unnamed/layout/dashboard"
    },
    "type": "layout"
  }, _amd_module.uri).package();

  ;

  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/inspect/models.legacy', dependency_3], ['@beyond-js/dashboard/notify', dependency_4], ['@beyond-js/dashboard/layout-toolbar', dependency_5], ['@beyond-js/ui/modal', dependency_6], ['@beyond-js/ui/form', dependency_7], ['@beyond-js/ui/image', dependency_8], ['@beyond-js/ui/perfect-scrollbar', dependency_9], ['@beyond-js/ui/toast', dependency_10]]);

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
  /*********
  notify.jsx
  *********/


  class Notify extends React.Component {
    constructor(props) {
      super(props);
      this.notify = NotifyManager;

      this.update = () => this.context.add(this.notify.value);
    }

    componentDidMount() {
      this.notify.bind('change', this.update);
    }

    componentWillUnmount() {
      this.notify.bind('change', this.update);
    }

    render() {
      return null;
    }

  }

  Notify.contextType = ToastContext;
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
    this.container.classList.add('beyond-dashboard-layout');
  }
  /**********
  SCSS STYLES
  **********/


  const legacyStyles = beyondLegacyStyles.register('@beyond-js/dashboard/unnamed/layout/dashboard', '.ds-modal.ds-modal-doc .modal-content .img-list{display:flex;gap:15px;justify-content:center}.ds-modal.ds-modal-doc .modal-content .img-list .beyond-element-image img{object-fit:cover;height:50px;width:50px}.beyond-dashboard-layout{min-width:800px;overflow-x:hidden}.beyond-dashboard-layout .dashboard-scroll-container{height:100vh;display:grid;grid-template-rows:auto 1fr auto;transition:all .3s ease-in}');
  legacyStyles.appendToDOM();
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