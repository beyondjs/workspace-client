define(["exports", "module", "@beyond-js/kernel@0.1.9/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/workspace@1.0.5/breadcrumb.code", "@beyond-js/ui@0.0.1/icon", "@beyond-js/inspect@0.0.1/models.code", "@beyond-js/inspect@0.0.1/reactive-model", "@beyond-js/ui@0.0.1/alert", "@beyond-js/ui@0.0.1/form", "@beyond-js/ui@0.0.1/modal", "@beyond-js/ui@0.0.1/spinner", "@beyond-js/workspace@1.0.5/ds-contexts", "@beyond-js/workspace@1.0.5/hooks", "@beyond-js/workspace@1.0.5/models", "@beyond-js/workspace@1.0.5/core-components", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/workspace@1.0.5/texts-binder"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.CompileBoard = CompileBoard;
  _exports.CompilerContext = void 0;
  _exports.DetailSection = DetailSection;
  _exports.Empty = Empty;
  _exports.ErrorSection = ErrorSection;
  _exports.HeaderSection = HeaderSection;
  _exports.ItemMessage = ItemMessage;
  _exports.Message = Message;
  _exports.useCompilerContext = _exports.hmr = _exports.__beyond_pkg = void 0;
  /*************
  LEGACY IMPORTS
  *************/

  const {
    DsBreadcrumb
  } = dependency_3;
  const {
    BeyondIcon
  } = dependency_4;
  const {
    Application
  } = dependency_5;
  const {
    ReactiveModel
  } = dependency_6;
  const {
    BeyondAlert
  } = dependency_7;
  const {
    BeyondButton
  } = dependency_8;
  const {
    BeyondModal
  } = dependency_9;
  const {
    BeyondSpinner
  } = dependency_10;
  const {
    useDSWorkspaceContext,
    ProjectContext,
    useProjectContext
  } = dependency_11;
  const {
    useBinder
  } = dependency_12;
  const {
    projectsFactory
  } = dependency_13;
  const {
    DSSpinner,
    DSIconButton,
    DSBoard,
    DsFetchingBlock,
    DSIcon
  } = dependency_14;
  const {
    CurrentTexts
  } = dependency_15;
  const {
    useTextsBinder
  } = dependency_16;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/inspect", "0.0.1"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/local", "0.1.4"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/widgets", "0.1.4"], ["@beyond-js/backend", "0.1.8"], ["dayjs", "1.11.7"], ["emmet-monaco-es", "5.2.0"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.7.0"], ["react-split", "2.0.14"], ["split.js", "1.6.5"], ["tippy.js", "6.3.7"], ["waves", "0.1.1"], ["socket.io-client", "4.5.4"], ["@beyond-js/packages-templates", "1.0.0"], ["@beyond-js/workspace", "1.0.5"], ["@beyond-js/workspace", "1.0.5"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/workspace@1.0.5/project-compile",
      "multibundle": true
    },
    "type": "code"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/workspace/breadcrumb.code', dependency_3], ['@beyond-js/ui/icon', dependency_4], ['@beyond-js/inspect/models.code', dependency_5], ['@beyond-js/inspect/reactive-model', dependency_6], ['@beyond-js/ui/alert', dependency_7], ['@beyond-js/ui/form', dependency_8], ['@beyond-js/ui/modal', dependency_9], ['@beyond-js/ui/spinner', dependency_10], ['@beyond-js/workspace/ds-contexts', dependency_11], ['@beyond-js/workspace/hooks', dependency_12], ['@beyond-js/workspace/models', dependency_13], ['@beyond-js/workspace/core-components', dependency_14], ['@beyond-js/kernel/texts', dependency_15], ['@beyond-js/workspace/texts-binder', dependency_16]]);
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
  /***********
  _context.jsx
  ***********/

  const CompilerContext = React.createContext();
  _exports.CompilerContext = CompilerContext;
  const useCompilerContext = () => React.useContext(CompilerContext);

  /********
  empty.jsx
  ********/
  _exports.useCompilerContext = useCompilerContext;
  function Empty({
    texts
  }) {
    const {
      toggleProcessModal
    } = useDSWorkspaceContext();
    return /*#__PURE__*/React.createElement("div", {
      className: "flex-center flex-row-container full-height"
    }, /*#__PURE__*/React.createElement("h3", null, texts.empty.title), /*#__PURE__*/React.createElement("div", {
      className: "flex-container flex-center"
    }, /*#__PURE__*/React.createElement(BeyondButton, {
      className: "btn primary",
      onClick: toggleProcessModal
    }, texts.actions.compile, /*#__PURE__*/React.createElement(DSIcon, {
      icon: "compile"
    }))));
  }

  /********
  index.jsx
  ********/

  function CompileBoard(props) {
    const [fetching, setFetching] = React.useState();
    const [status, setStatus] = React.useState(props.specs.status);
    const {
      workspace: {
        project
      }
    } = useDSWorkspaceContext();
    const [compiling, setCompiling] = React.useState(null);
    const [ready, texts] = useTextsBinder(__pkg.bundle.module.specifier);
    const {
      process
    } = project.application;
    const [messages, setMessages] = React.useState(process.messages);
    useBinder([process], () => {
      setStatus(process.processed);
      setMessages(process.messages);
    });
    if (!ready) return /*#__PURE__*/React.createElement(DsFetchingBlock, null);
    if (props.specs.projectId !== project.application.id) {
      throw Error("the project is not loaded");
    }
    const finalTexts = {
      ...props.texts,
      ...texts
    };
    const contextValue = {
      selected: props.specs.selected,
      project,
      texts: finalTexts,
      fetching,
      setFetching,
      status,
      setStatus,
      compiling,
      setCompiling,
      messages: process.messages
    };
    if (!process) {
      return null;
    }
    if (!process.processing && !process.processed && process.messages) {
      return /*#__PURE__*/React.createElement(Empty, {
        texts: texts
      });
    }
    const onClick = event => {
      event.stopPropagation();
      setCompiling(true);
      globalThis.setTimeout(() => {
        // the parameter is not used to run the same process.
        project.process();
        setCompiling(false);
      }, 1000);
    };
    const disabled = {};
    if (compiling || fetching) disabled.disabled = true;
    return /*#__PURE__*/React.createElement(CompilerContext.Provider, {
      value: contextValue
    }, /*#__PURE__*/React.createElement(DSBoard, {
      className: "board__compile"
    }, /*#__PURE__*/React.createElement(Message, null), /*#__PURE__*/React.createElement("div", {
      className: "ds-container"
    }, /*#__PURE__*/React.createElement(DetailSection, null), /*#__PURE__*/React.createElement(ErrorSection, null)), /*#__PURE__*/React.createElement("div", {
      className: "flex-container flex-center"
    }, /*#__PURE__*/React.createElement(BeyondButton, _extends({}, disabled, {
      className: "btn primary",
      onClick: onClick
    }), texts.actions.again, /*#__PURE__*/React.createElement(DSIcon, {
      icon: "compile"
    })))));
  }

  /************************
  sections\detail\error.jsx
  ************************/

  function ErrorSection() {
    const {
      texts,
      messages
    } = useCompilerContext();
    const [toggle, setToggle] = React.useState(false);
    const cls = `card__detail${toggle ? " opened" : ""}`;
    const items = messages.filter(message => message.error);
    const output = items.map((message, index) => /*#__PURE__*/React.createElement(ItemMessage, {
      message: message,
      key: message.id,
      index: index
    }));
    const errors = !!items.length;
    const containerCls = `compilation__card${!errors ? " compilation__card--disabled" : ""}`;
    const onClickHeader = () => {
      if (!errors) return;
      setToggle(!toggle);
    };
    return /*#__PURE__*/React.createElement("article", {
      className: containerCls,
      onClick: onClickHeader
    }, /*#__PURE__*/React.createElement(HeaderSection, {
      name: "error"
    }), /*#__PURE__*/React.createElement("section", {
      className: cls
    }, /*#__PURE__*/React.createElement("ul", {
      className: "compile__trace__list compile__trace__all-list"
    }, output)));
  }

  /************************
  sections\detail\index.jsx
  ************************/

  function DetailSection() {
    const {
      project: {
        application
      },
      messages
    } = useCompilerContext();
    const container = React.useRef(null);
    const [toggle, setToggle] = React.useState(false);
    const onClickHeader = () => setToggle(!toggle);
    const cls = `card__detail${toggle ? " opened" : ""}`;
    const items = messages.map((message, index) => /*#__PURE__*/React.createElement(ItemMessage, {
      message: message,
      key: message.id,
      index: index
    }));
    return /*#__PURE__*/React.createElement("article", {
      className: "compilation__card",
      ref: container
    }, /*#__PURE__*/React.createElement(HeaderSection, {
      name: "status",
      toggle: toggle,
      onClick: onClickHeader
    }), /*#__PURE__*/React.createElement("section", {
      className: cls
    }, /*#__PURE__*/React.createElement("ul", {
      className: "compile__trace__list compile__trace__all-list"
    }, items)));
  }

  /***********************
  sections\detail\item.jsx
  ***********************/

  function ItemMessage({
    message,
    index
  }) {
    // useCompiler(container, application);
    const {
      workspace
    } = useDSWorkspaceContext();
    const attrs = {};
    if (message.error) {
      attrs.className = "message__error";
      attrs.onClick = async event => {
        event.stopPropagation();
        const module = await workspace.getModuleManager(workspace.active.application.id, message.moduleId);
        workspace.openBoard("module", {
          label: module.name,
          moduleId: module.id,
          projectId: workspace.active.application.id
        });
      };
    }
    return /*#__PURE__*/React.createElement("li", _extends({
      key: `${message.id}.${index}`
    }, attrs), message.id, " - ", message.text);
  }

  /**************************
  sections\detail\message.jsx
  **************************/

  /**
  
  Renders a message component that displays the status of the compilation process, including errors and warnings.
  Uses the useCompilerContext hook to access compiler context data and determine the appropriate message to display.
  @returns {JSX.Element} A React element that displays a message.
  */

  function Message() {
    const {
      texts,
      project: {
        application
      },
      selected
    } = useCompilerContext();
    const npm = {
      id: "npm",
      name: "npm",
      description: "Compila tu paquete listo para publicar en npm"
    };
    const dist = selected === "npm" ? npm : application.deployment.distributions.get(selected);
    const {
      process
    } = application;
    const errors = application.process.messages.filter(message => message.error);
    const path = `${application.path}/.beyond/builds/${dist.name}`.replace(/\\/g, "/");
    const types = ["error", "success", "warning"];
    const type = process.processing ? types[2] : process.errors.length ? types[0] : types[1];
    const isProcessing = process.processing;
    const message = isProcessing ? texts.alerts.processing : texts.alerts[type];
    return /*#__PURE__*/React.createElement(BeyondAlert, {
      type: type
    }, /*#__PURE__*/React.createElement("h4", {
      className: "flex-container flex-center-y",
      style: {
        gap: "1rem"
      }
    }, isProcessing && /*#__PURE__*/React.createElement(BeyondSpinner, {
      active: true,
      className: "on-secondary"
    }), message.id, "-", message));
  }

  /************************
  sections\header\index.jsx
  ************************/

  function HeaderSection({
    name,
    toggle,
    onClick
  }) {
    const {
      texts: {
        sections
      }
    } = useCompilerContext();
    const texts = sections[name];
    const icon = toggle ? 'expandMore' : 'chevronRight';
    return /*#__PURE__*/React.createElement("header", {
      onClick: onClick
    }, /*#__PURE__*/React.createElement("h5", null, /*#__PURE__*/React.createElement(BeyondIcon, {
      icon: icon
    }), texts.title), /*#__PURE__*/React.createElement("div", {
      className: "header__detail"
    }));
  }

  /**********
  SCSS STYLES
  **********/
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/workspace/project-compile.code', '.ds__board.board__compile .card__detail:not(.opened) .compile__trace__list{display:none}.ds__board.board__compile .compile__trace__list{list-style:none;gap:2px;padding:0;transition:all 150ms ease-in}.ds__board.board__compile .compile__trace__list li{padding:4px;transition:all 150ms ease-in}.ds__board.board__compile .compile__trace__list li:hover{background:var(--ds-element-hover)}.ds__board.board__compile .compile__trace__list .message__error{background:var(--beyond-error-color)}.ds__board.board__compile .compile__trace__list .message__error:hover{background:var(--beyond-error-darken-color)}.ds__board.board__compile .compilation__card{max-width:800px;margin:auto}.ds__board.board__compile .compilation__card.compilation__card--disabled{opacity:.6}.ds__board.board__compile .compilation__card.compilation__card--disabled header{cursor:default}.ds__board.board__compile .compilation__card header{display:flex;gap:.5rem;padding:.5rem 0;border-bottom:1px solid var(--separator-color);cursor:pointer;align-items:center}.ds__board.board__compile .compilation__card header .beyond-icon{fill:var(--text-color)}.ds__board.board__compile .compilation__card header h5{display:flex;gap:.5rem;align-items:center;font-size:13px;margin:0}.ds__board.board__compile .compilation__card .card__detail{background:var(--secondary-accent-20);padding:1rem;color:var(--secondary-text-color);display:none}.ds__board.board__compile .compilation__card .card__detail.opened{display:grid;transition:all 150ms ease-in}');
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