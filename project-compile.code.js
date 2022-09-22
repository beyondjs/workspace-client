define(["exports", "module", "@beyond-js/kernel@0.0.22/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/dashboard@0.0.1/breadcrumb.code", "@beyond-js/inspect@0.0.1/models.legacy", "@beyond-js/ui@0.0.1/alert", "@beyond-js/ui@0.0.1/form", "@beyond-js/ui@0.0.1/modal", "@beyond-js/ui@0.0.1/spinner", "@beyond-js/dashboard@0.0.1/ds-contexts", "@beyond-js/dashboard@0.0.1/hooks", "@beyond-js/dashboard@0.0.1/models", "@beyond-js/dashboard@0.0.1/core-components", "@beyond-js/kernel@0.0.22/texts"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Compilation = Compilation;
  _exports.CompileBoard = CompileBoard;
  _exports.CompileModal = CompileModal;
  _exports.CompilerContext = void 0;
  _exports.Finished = Finished;
  _exports.Footer = Footer;
  _exports.useCompilerContext = _exports.hmr = void 0;

  /*************
  LEGACY IMPORTS
  *************/
  const {
    DsBreadcrumb
  } = dependency_3;
  const {
    Application,
    ReactiveModel
  } = dependency_4;
  const {
    BeyondAlert
  } = dependency_5;
  const {
    BeyondButton
  } = dependency_6;
  const {
    BeyondModal
  } = dependency_7;
  const {
    BeyondSpinner
  } = dependency_8;
  const {
    useDSWorkspaceContext,
    AppContext,
    useAppContext
  } = dependency_9;
  const {
    useBinder
  } = dependency_10;
  const {
    projectsFactory
  } = dependency_11;
  const {
    DSIconButton,
    DSBoard,
    DsFetchingBlock,
    DSIcon
  } = dependency_12;
  const {
    CurrentTexts
  } = dependency_13;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/kernel", "0.0.22"], ["@beyond-js/widgets", "0.0.10"], ["@beyond-js/backend", "0.0.10"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/inspect", "0.0.1"], ["@beyond-js/local", null], ["dayjs", "1.11.5"], ["emmet-monaco-es", "5.1.2"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["socket.io-client", "4.5.2"], ["split.js", "1.6.5"], ["tippy.js", "6.3.7"], ["waves", "0.1.1"], ["@beyond-js/dashboard", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/dashboard@0.0.1/project-compile",
      "multibundle": true
    },
    "type": "code"
  }, _amd_module.uri).package();

  ;

  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/dashboard/breadcrumb.code', dependency_3], ['@beyond-js/inspect/models.legacy', dependency_4], ['@beyond-js/ui/alert', dependency_5], ['@beyond-js/ui/form', dependency_6], ['@beyond-js/ui/modal', dependency_7], ['@beyond-js/ui/spinner', dependency_8], ['@beyond-js/dashboard/ds-contexts', dependency_9], ['@beyond-js/dashboard/hooks', dependency_10], ['@beyond-js/dashboard/models', dependency_11], ['@beyond-js/dashboard/core-components', dependency_12], ['@beyond-js/kernel/texts', dependency_13]]);

  const {
    module
  } = __pkg.bundle;
  const React = dependency_1;
  const ReactDOM = dependency_2;
  /***********
  _context.jsx
  ***********/

  const CompilerContext = React.createContext();
  _exports.CompilerContext = CompilerContext;

  const useCompilerContext = () => React.useContext(CompilerContext);
  /**********************
  details\compilation.jsx
  **********************/


  _exports.useCompilerContext = useCompilerContext;

  function Compilation() {
    const {
      selected,
      status,
      setFetching,
      setStatus,
      application,
      texts
    } = useCompilerContext();
    const container = React.useRef(null);
    useBinder([application.builder], () => {
      const list = container.current.querySelector('.compile__trace__all-list');
      const errorList = container.current.querySelector('.compile__trace__error-list');

      const setMessage = (entries, error) => {
        const size = entries.length;
        if (!size) return;
        const item = document.createElement('li');
        const message = entries[size - 1];
        message.error && (item.className = 'message__error');
        item.innerHTML = message.text;

        if (message.error) {
          const errorItem = item.cloneNode(true);
          errorList.closest('.card').classList.remove('hidden');
          errorList.appendChild(errorItem);
        }

        list.appendChild(item);
      };

      const {
        messages,
        error
      } = application.builder;
      messages && setMessage(messages);
      error && setMessage(error, true);
    });
    React.useEffect(() => {
      const dist = application.deployment.distributions.get(selected);
      const {
        name,
        platform,
        npm,
        environment
      } = dist;
      application.builder.build({
        name,
        platform,
        npm,
        environment
      }).then(() => {
        setFetching(false);
        setStatus('finished');
      }).catch(e => {
        console.error('error', e);
      });
    }, []);
    return /*#__PURE__*/React.createElement("div", {
      ref: container
    }, status === 'finished' && /*#__PURE__*/React.createElement(Finished, null), /*#__PURE__*/React.createElement("div", {
      className: "ds-container two-columns no-m"
    }, /*#__PURE__*/React.createElement("article", {
      className: "card card--log"
    }, /*#__PURE__*/React.createElement("h3", null, texts.log.title), /*#__PURE__*/React.createElement("ul", {
      className: "compile__trace__list compile__trace__all-list"
    })), /*#__PURE__*/React.createElement("article", {
      className: "card card--error-log hidden"
    }, /*#__PURE__*/React.createElement("h3", null, texts.log.errorLog), /*#__PURE__*/React.createElement("ul", {
      className: "compile__trace__list compile__trace__error-list"
    }))));
  }
  /*******************
  details\finished.jsx
  *******************/


  function Finished() {
    const {
      setStatus,
      texts,
      application,
      selected
    } = useCompilerContext();
    const dist = application.deployment.distributions.get(selected);
    const errors = application.builder.messages.filter(message => message.error);
    const type = errors.length ? 'error' : 'success';
    const path = `${application.path}/.beyond/builds/${dist.name}`.replace(/\\/g, '/');
    return /*#__PURE__*/React.createElement("div", {
      className: "pd-base"
    }, /*#__PURE__*/React.createElement(BeyondAlert, {
      type: type
    }, /*#__PURE__*/React.createElement("h3", null, errors.length ? texts.finished.error : texts.finished.success), /*#__PURE__*/React.createElement("strong", null, texts.finished.directory), /*#__PURE__*/React.createElement("span", {
      className: "pathname"
    }, path)), /*#__PURE__*/React.createElement("div", {
      className: "flex-container flex-end pd-v-1"
    }, /*#__PURE__*/React.createElement(BeyondButton, {
      className: "btn primary",
      onClick: () => setStatus('start')
    }, texts.actions.new)));
  }
  /*****************
  details\footer.jsx
  *****************/


  function Footer() {
    const {
      finished,
      application,
      setFinished,
      selected,
      setFetching
    } = useCompilerContext();
    return /*#__PURE__*/React.createElement(React.Fragment, null);
  }
  /****************
  details\index.jsx
  ****************/


  function CompileBoard(props) {
    const [ready, setReady] = React.useState(controller.ready);
    const [selected, setSelected] = React.useState();
    const [fetching, setFetching] = React.useState();
    const [status, setStatus] = React.useState('start');
    const [compiling, setCompiling] = React.useState(null);
    useBinder([controller], () => setReady(controller.ready));
    React.useEffect(() => {
      if (props.specs.id) controller.getApp([props.specs.id]);
      setReady(controller.ready);
    }, [props.specs]);
    if (!ready || props.specs.projectId !== controller.application?.id) return /*#__PURE__*/React.createElement(DsFetchingBlock, null);
    const {
      texts,
      application,
      error
    } = controller;
    const Control = status !== 'start' ? Compilation : Start;
    return /*#__PURE__*/React.createElement(DSBoard, {
      className: "board__compile"
    }, /*#__PURE__*/React.createElement("header", {
      className: "board__header"
    }, /*#__PURE__*/React.createElement("h4", null, texts.title, " ", /*#__PURE__*/React.createElement("small", null, application.name))), /*#__PURE__*/React.createElement(Control, null));
  }
  /****************
  details\start.jsx
  ****************/


  function Start() {
    const {
      selected,
      finished,
      application,
      setStatus,
      texts
    } = useCompilerContext();
    const distributions = [];
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "ds-container two-columns no-m"
    })));
  }
  /**************
  modal\index.jsx
  **************/


  function CompileModal() {
    const [ready, setReady] = React.useState(controller.ready);
    const [selected, setSelected] = React.useState();
    const [fetching, setFetching] = React.useState();
    const [status, setStatus] = React.useState('start');
    const {
      setShowCompileModal,
      showModalCompile,
      application
    } = useAppContext();
    const {
      workspace
    } = useDSWorkspaceContext();
    if (!showModalCompile) return null;
    const {
      texts
    } = controller; // console.log(99, controller)
    // React.useEffect(() => {
    //     if (props.specs.id) controller.getApp([props.specs.id]);
    //     setReady(controller.ready);
    // }, [props.specs]);

    function closeModal() {
      setShowCompileModal(false);
    }

    function compile() {
      workspace.openBoard('compile', {
        id: `${application.application.id}.compile`,
        projectId: application.application.id,
        label: `<DSIcon icon="compile"/>${application.application.name}`
      });
    }

    return /*#__PURE__*/React.createElement(CompilerContext.Provider, {
      value: {
        setFetching,
        fetching,
        status,
        selected,
        setSelected,
        setStatus,
        texts,
        application
      }
    }, /*#__PURE__*/React.createElement(BeyondModal, {
      show: true,
      onClose: closeModal,
      className: "md ds-modal ds-app-create_modal"
    }, /*#__PURE__*/React.createElement(Select, null), /*#__PURE__*/React.createElement("button", {
      onClick: compile
    }, "CHECKA CHAVA")));
  }
  /*************
  modal\item.jsx
  *************/


  const DistributionItem = ({
    data
  }) => {
    const {
      fetching,
      texts,
      selected,
      setSelected
    } = useCompilerContext();
    let cls = `item-distribution${selected === data.id ? ' selected' : ''}`;
    if (fetching) cls += " is-fetching";

    const onSelect = event => {
      const isSelected = selected ? undefined : data.id;
      setSelected(isSelected);
    };

    const attrs = {
      className: cls
    };
    if (!fetching) attrs.onClick = onSelect;
    return /*#__PURE__*/React.createElement("li", attrs, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, data.name), /*#__PURE__*/React.createElement("div", {
      className: "item__description"
    }, texts.platform.label, ": ", /*#__PURE__*/React.createElement("span", null, data.platform)), /*#__PURE__*/React.createElement("div", {
      className: "item__description"
    }, texts.platform.environment, ": ", /*#__PURE__*/React.createElement("span", null, data.environment)), /*#__PURE__*/React.createElement("div", {
      className: "item__description"
    }, texts.platform.port.label, ": ", /*#__PURE__*/React.createElement("span", null, data.port)), data.ts && /*#__PURE__*/React.createElement("div", {
      className: "item__description"
    }, texts.ts, ": ", /*#__PURE__*/React.createElement("span", null, data.ts.compiler))), /*#__PURE__*/React.createElement("div", {
      className: "col__right"
    }, /*#__PURE__*/React.createElement("div", null, data.ssr && /*#__PURE__*/React.createElement("span", {
      className: "badge"
    }, texts.ssr)), /*#__PURE__*/React.createElement(DSIcon, {
      icon: "check"
    })));
  };
  /***************
  modal\select.jsx
  ***************/


  function Select() {
    const {
      selected,
      finished,
      application,
      setStatus,
      texts
    } = useCompilerContext();
    const distributions = [];
    application.deployment.distributions.forEach(dist => distributions.push( /*#__PURE__*/React.createElement(DistributionItem, {
      key: dist.id,
      data: dist
    })));

    const compile = async event => {
      event.stopPropagation();
      setStatus('compilation');
    }; // console.log(100, texts)


    return /*#__PURE__*/React.createElement("div", {
      className: "ds-container two-columns no-m"
    }, /*#__PURE__*/React.createElement("section", {
      className: "card"
    }, /*#__PURE__*/React.createElement("h3", null, texts.start.title), /*#__PURE__*/React.createElement("ul", {
      className: `distributions__list${selected ? ' is-selected' : ''}`
    }, distributions), !finished && /*#__PURE__*/React.createElement("div", {
      className: "compile__action"
    }, /*#__PURE__*/React.createElement(BeyondButton, {
      disabled: !selected,
      className: "btn primary",
      onClick: compile
    }, texts.actions.compile))));
  }
  /***********
  JS PROCESSOR
  ***********/

  /******************
  FILE: controller.js
  ******************/


  const controller = new class extends ReactiveModel {
    #texts;

    get texts() {
      return this.#texts?.value;
    }

    get ready() {
      return this.#texts.ready && (this.#application || this.#error);
    }

    #application;

    get application() {
      return this.#application?.application;
    }

    #error;

    get error() {
      return this.#error;
    }

    constructor() {
      super();
      const module = __pkg.bundle.module.specifier;
      this.#texts = new CurrentTexts(module, true);
      this.#texts.bind('change', this.triggerEvent);
    }

    async getApp(id) {
      const application = await projectsFactory.get(id);

      if (!application) {
        this.#error = 'APP_NOT_FOUND';
      }

      this.#application = application;
      window._app = this.application;
      this.triggerEvent();
    }

  }();
  /**********
  SCSS STYLES
  **********/

  const legacyStyles = beyondLegacyStyles.register('@beyond-js/dashboard/project-compile.code', '.board__compile .distributions__list{list-style:none;padding:0;display:grid;gap:1rem}.board__compile .distributions__list .item-distribution{padding:1rem 2rem;cursor:pointer;display:grid;flex-grow:2;grid-template-columns:1fr 60px;border:1px solid var(--ds-border-element-color);align-items:center}.board__compile .distributions__list .item-distribution.item--selected{background:var(--ds-bg-selected)}.board__compile .distributions__list .item-distribution h3{font-size:1.6rem;text-transform:uppercase;padding:0}.board__compile .distributions__list .item-distribution.selected,.board__compile .distributions__list .item-distribution:hover{background:rgba(18,31,54,.3)}.board__compile .distributions__list .item-distribution.selected .col__right .beyond-icon,.board__compile .distributions__list .item-distribution:hover .col__right .beyond-icon{display:flex}.board__compile .distributions__list .item-distribution .col__right{display:flex;gap:15px}.board__compile .distributions__list .item-distribution .col__right .beyond-icon{display:none;background:var(--beyond-primary-color);border-radius:50%;padding:5px;height:20px;width:20px}.board__compile .compile__action{padding:2rem;display:flex;justify-content:flex-end}.board__compile .action__end{display:flex;align-self:flex-end;justify-content:flex-end;margin:1rem 0;color:var(--beyond-primary-accent-color);text-decoration:none}.compile__trace__list{list-style:none;display:grid;gap:2px;padding:0}.compile__trace__list li{padding:4px;cursor:pointer;transition:all 150ms ease-in}.compile__trace__list li:hover{background:var(--ds-element-hover)}.compile__trace__list .message__error{background:var(--beyond-error-color)}.compile__trace__list .message__error:hover{background:var(--beyond-error-darken-color)}.app-application-compile-page header{padding:15px;margin-bottom:30px}.app-application-compile-page header h4,.app-application-compile-page header h5{padding:0;margin:0}.app-application-compile-page header h5{margin-top:8px;color:var(--beyond-primary-color)}.app-application-compile-page .panels{display:grid}.app-application-compile-page .panels .form-container{display:grid;grid-auto-flow:column}.app-application-compile-page .panels .form-section{display:grid;grid-template-rows:50px auto}.app-application-compile-page .panels .form-section:nth-child(2) .block-options figure.active{background:#ff7142}.app-application-compile-page .panels .form-section:nth-child(2) .block-options figure.active:hover{background:#ff612d}.app-application-compile-page .panels .form-section:nth-child(3) .block-options figure.active{background:#ff5a23}.app-application-compile-page .panels .form-section:nth-child(3) .block-options figure.active:hover{background:var(--beyond-primary-color)}.app-application-compile-page .block-options{display:flex;display:flex}.app-application-compile-page .block-options p{font-size:12px}.app-application-compile-page .block-options figure{flex:1 1 0;display:grid;flex-direction:column;text-align:center;align-items:center;padding:40px;cursor:pointer;gap:8px;margin:0;justify-content:center;transition:all 150ms ease-in}.app-application-compile-page .block-options figure h4{padding:0 0 8px}.app-application-compile-page .block-options figure svg{height:4rem;width:4rem;margin:auto;fill:var(--beyond-primary-color)}.app-application-compile-page .block-options figure.active,.app-application-compile-page .block-options figure:hover{transition:all 150ms ease-in;background:var(--beyond-primary-color);color:var(--beyond-text-modal-color)}.app-application-compile-page .block-options figure.active svg,.app-application-compile-page .block-options figure:hover svg{fill:var(--beyond-text-on-primary)}.app-application-compile-page .block-options figure.active:hover,.app-application-compile-page .block-options figure:hover:hover{background:rgba(0,0,0,.5)}.app-application-compile-page .block-options figure.active:hover svg,.app-application-compile-page .block-options figure:hover:hover svg{fill:var(--beyond-primary-color)}.app-application-compile-page .block-options figure.active.active:hover,.app-application-compile-page .block-options figure:hover.active:hover{background:#ff6d3d}.app-application-compile-page .block-options figure.active.active:hover svg,.app-application-compile-page .block-options figure:hover.active:hover svg{fill:var(--beyond-text-on-primary)}.app-application-compile-page .block-options figure{flex:1}.app-application-compile-page .block-options figure:hover h4{color:var(--beyond-primary-color)}.app-application-compile-page .block-options figure.active:hover h4{color:#fff}.app-application-compile-page .checkbox-section,.app-application-compile-page .flex-column{display:flex;gap:15px}.app-application-compile-page .flex-column{padding:8px 15px}.app-application-compile-page .flex-column+.app-application-compile-page .flex-column{padding-left:30px}.app-application-compile-page .column__right-content{display:flex;justify-content:flex-end}');
  legacyStyles.appendToDOM();
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