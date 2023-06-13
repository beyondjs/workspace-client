define(["exports", "module", "@beyond-js/kernel@0.1.9/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/workspace@1.0.5/core-components", "@beyond-js/ui@0.0.1/image", "@beyond-js/ui@0.0.1/icon", "@beyond-js/workspace@1.0.5/notify", "@beyond-js/workspace@1.0.5/hooks", "@beyond-js/ui@0.0.1/modal", "@beyond-js/ui@0.0.1/spinner", "@beyond-js/ui@0.0.1/form", "@beyond-js/inspect@0.0.1/models.code", "@beyond-js/inspect@0.0.1/reactive-model", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/ui@0.0.1/perfect-scrollbar", "@beyond-js/workspace@1.0.5/tabs"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.ApplicationCreate = void 0;
  _exports.BlankList = BlankList;
  _exports.TemplateList = TemplateList;
  _exports.VersionInput = VersionInput;
  _exports.hmr = _exports.__beyond_pkg = void 0;
  /*************
  LEGACY IMPORTS
  *************/

  const {
    BeyondAlert,
    IconInfo,
    DS_ICONS,
    DSIconButton,
    DSIcon,
    DSSpinner
  } = dependency_3;
  const {
    BeyondImage
  } = dependency_4;
  const {
    BeyondIcon,
    BeyondIconButton
  } = dependency_5;
  const {
    NotifyManager
  } = dependency_6;
  const {
    useBinder
  } = dependency_7;
  const {
    BeyondModal
  } = dependency_8;
  const {
    BeyondSpinner
  } = dependency_9;
  const {
    BeyondInput,
    BeyondForm,
    BeyondButton,
    BeyondSwitch
  } = dependency_10;
  const {
    ApplicationBuilder
  } = dependency_11;
  const {
    ReactiveModel
  } = dependency_12;
  const {
    CurrentTexts
  } = dependency_13;
  const {
    BeyondScrollContainer
  } = dependency_14;
  const {
    TabsContainer,
    Tabs,
    Board
  } = dependency_15;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/inspect", "0.0.1"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/local", "0.1.4"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/widgets", "0.1.4"], ["@beyond-js/backend", "0.1.6"], ["dayjs", "1.11.7"], ["emmet-monaco-es", "5.2.0"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.7.0"], ["react-split", "2.0.14"], ["split.js", "1.6.5"], ["tippy.js", "6.3.7"], ["waves", "0.1.1"], ["socket.io-client", "4.5.4"], ["@beyond-js/packages-templates", "1.0.0"], ["@beyond-js/workspace", "1.0.5"], ["@beyond-js/workspace", "1.0.5"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/workspace@1.0.5/project-create",
      "multibundle": true
    },
    "type": "code"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/workspace/core-components', dependency_3], ['@beyond-js/ui/image', dependency_4], ['@beyond-js/ui/icon', dependency_5], ['@beyond-js/workspace/notify', dependency_6], ['@beyond-js/workspace/hooks', dependency_7], ['@beyond-js/ui/modal', dependency_8], ['@beyond-js/ui/spinner', dependency_9], ['@beyond-js/ui/form', dependency_10], ['@beyond-js/inspect/models.code', dependency_11], ['@beyond-js/inspect/reactive-model', dependency_12], ['@beyond-js/kernel/texts', dependency_13], ['@beyond-js/ui/perfect-scrollbar', dependency_14], ['@beyond-js/workspace/tabs', dependency_15]]);
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
  /**********
  context.jsx
  **********/

  const CreateProjectContext = React.createContext();
  const useCreateProjectContext = () => React.useContext(CreateProjectContext);

  /********
  index.jsx
  ********/

  const ApplicationCreate = function ({
    closeModal,
    workspace
  }) {
    const [state, setState] = React.useState({});
    const [type, setType] = React.useState(undefined);
    const [selectedView, setSelectedView] = React.useState('blank');
    const notify = NotifyManager;
    const model = createController.model;
    const spinner = React.useRef();
    const {
      fetching,
      error
    } = state;
    useBinder([createController], () => {
      if (model.created) {
        closeModal();
        notify.success(texts?.created);
        window.setTimeout(() => {
          workspace.openApp(model.id, {
            tab: 'distributions'
          });
          model.clean();
        }, 300);
        return;
      }
      setState(() => ({
        ...state,
        fetching: model.fetching,
        error: model.error
      }));
    });
    React.useEffect(() => {
      if (fetching) {
        window.setTimeout(() => spinner.current?.classList.toggle('container-hidden'), 100);
      }
    }, [fetching]);
    const Control = type ? SecondStep : FirstStep;
    const texts = createController.texts;
    let cls = `ds-modal ds-modal--lg ${model.fetching ? ' is' : ''}`;
    if (type) cls = `${cls} ds-modal--actions`;
    const contextValue = {
      createController,
      type,
      setType,
      model,
      texts,
      error,
      fetching,
      selectedView,
      setSelectedView
    };
    if (!createController.ready) return null;
    return /*#__PURE__*/React.createElement(CreateProjectContext.Provider, {
      value: contextValue
    }, /*#__PURE__*/React.createElement(BeyondModal, {
      show: true,
      onClose: closeModal,
      className: cls
    }, /*#__PURE__*/React.createElement(Control, null), fetching && /*#__PURE__*/React.createElement(DSSpinner, {
      ref: spinner,
      active: true,
      className: "absolute-container container-hidden"
    })));
  };

  /********************
  steps\first\index.jsx
  ********************/
  _exports.ApplicationCreate = ApplicationCreate;
  function FirstStep() {
    const {
      texts: {
        tabs,
        form: texts
      },
      selectedView
    } = useCreateProjectContext();
    return /*#__PURE__*/React.createElement("div", {
      className: "modal__panels modal__panels--full"
    }, /*#__PURE__*/React.createElement("section", {
      className: "left__panel"
    }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("h3", null, texts.types.titles.empty), /*#__PURE__*/React.createElement("p", {
      className: "p2"
    }, texts.types.titles.overview))), /*#__PURE__*/React.createElement("section", {
      className: "right__panel projects__types"
    }, /*#__PURE__*/React.createElement(TabsContainer, null, /*#__PURE__*/React.createElement(Tabs, {
      tabs: [tabs.template, tabs.blank]
    }), /*#__PURE__*/React.createElement(Board, null, /*#__PURE__*/React.createElement(BlankList, null), /*#__PURE__*/React.createElement(TemplateList, null)))));
  }

  /*******************************
  steps\first\lists\blank-list.jsx
  *******************************/

  function BlankList() {
    const {
      model: {
        templates
      }
    } = useCreateProjectContext();
    const output = templates.map(item => /*#__PURE__*/React.createElement(Item, {
      is: "template",
      key: item.name,
      name: item.name
    }));
    return /*#__PURE__*/React.createElement(BeyondScrollContainer, null, /*#__PURE__*/React.createElement("ul", {
      className: "ds__list"
    }, output));
  }

  /*************************
  steps\first\lists\item.jsx
  *************************/

  function Item({
    name,
    is
  }) {
    const {
      setType,
      model,
      texts: {
        form: texts
      }
    } = useCreateProjectContext();
    const selectType = event => {
      const target = event.currentTarget;
      const name = target.dataset.name;
      model.type = name;
      model.is = is;
      setType(name);
    };
    // TEMPORAL
    const src = is === 'type' ? `/images/logos/typescript.png` : `/images/logos/${name}.png`;
    return /*#__PURE__*/React.createElement("li", {
      onClick: selectType,
      "data-name": name,
      className: "list__item"
    }, /*#__PURE__*/React.createElement(BeyondImage, {
      src: src
    }), /*#__PURE__*/React.createElement("div", {
      className: "content"
    }, /*#__PURE__*/React.createElement("h4", null, texts.types[name].title), /*#__PURE__*/React.createElement("p", null, texts.types[name].description)));
  }

  /**********************************
  steps\first\lists\template-list.jsx
  **********************************/

  function TemplateList() {
    const {
      model: {
        TYPES
      }
    } = useCreateProjectContext();
    const output = TYPES.map(item => /*#__PURE__*/React.createElement(Item, {
      is: "type",
      key: item.name,
      name: item.name
    }));
    return /*#__PURE__*/React.createElement(BeyondScrollContainer, null, /*#__PURE__*/React.createElement("ul", {
      className: "ds__list"
    }, output));
  }

  /**********************
  steps\second\detail.jsx
  **********************/

  function DetailApp() {
    const {
      texts: {
        errors,
        form: texts,
        actions
      },
      model,
      fetching
    } = useCreateProjectContext();
    const [state, setState] = React.useState({
      version: model.version
    });
    const handleName = event => {
      let {
        value
      } = event.currentTarget;
      if (!/^(@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(value)) {
        model.name = undefined;
        return;
      }
      model.name = value;
    };
    const inputsAttrs = {};
    if (fetching) inputsAttrs.disabled = true;
    const handleChange = (event, pattern) => {
      const target = event.target;
      let {
        name,
        value
      } = target;
      if (pattern) value = value.replace(pattern, "-");
      model[name] = value;
      setState({
        ...state,
        ...{
          [name]: model[name]
        }
      });
    };
    const toggleRadio = event => {
      const target = event.currentTarget;
      model[target.name] = target.checked;
      setState({
        ...state,
        ...{
          useInspectPort: target.checked
        }
      });
    };
    const errorMessage = model.error && errors[model.error];
    return /*#__PURE__*/React.createElement("div", {
      className: "right__panel"
    }, errorMessage && /*#__PURE__*/React.createElement(BeyondAlert, {
      title: errors.title,
      type: "error"
    }, errorMessage), /*#__PURE__*/React.createElement("div", {
      className: "item"
    }, /*#__PURE__*/React.createElement("div", {
      className: "section-group"
    }, /*#__PURE__*/React.createElement(BeyondInput, _extends({}, inputsAttrs, {
      name: "name",
      label: texts.name.label,
      placeholder: texts.name.label,
      value: state.name,
      onChange: handleName
    })), /*#__PURE__*/React.createElement(IconInfo, {
      msg: texts.name.info
    })), /*#__PURE__*/React.createElement(VersionInput, {
      state: state,
      setState: setState
    }), /*#__PURE__*/React.createElement("div", {
      className: "section-group"
    }, /*#__PURE__*/React.createElement(BeyondInput, _extends({}, inputsAttrs, {
      name: "title",
      label: texts.title.label,
      placeholder: texts.title.label,
      value: state.title,
      onChange: handleChange
    })), /*#__PURE__*/React.createElement(IconInfo, {
      msg: texts.title.info
    })), /*#__PURE__*/React.createElement("div", {
      className: "section-group"
    }, /*#__PURE__*/React.createElement(BeyondInput, _extends({}, inputsAttrs, {
      value: state.description,
      placeholder: texts.description.label,
      name: "description",
      label: texts.description.label,
      onChange: handleChange
    })), /*#__PURE__*/React.createElement(IconInfo, {
      msg: texts.description.info
    })), /*#__PURE__*/React.createElement("div", {
      className: "ds-switch__container"
    }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement(BeyondSwitch, {
      name: "npm",
      checked: model.npm,
      value: model.npm,
      onChange: toggleRadio
    }), texts.npm))));
  }

  /*********************
  steps\second\index.jsx
  *********************/

  function SecondStep() {
    const {
      type,
      setType,
      model,
      texts: {
        form: texts,
        actions
      },
      fetching
    } = useCreateProjectContext();
    const onSubmit = event => {
      event.preventDefault();
      model.create();
    };
    const btnAttrs = {};
    if (!model.valid || fetching) btnAttrs.disabled = true;
    return /*#__PURE__*/React.createElement(BeyondForm, {
      onSubmit: onSubmit
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal__panels"
    }, /*#__PURE__*/React.createElement("section", {
      className: "left__panel"
    }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("h3", null, texts.types.titles.empty), /*#__PURE__*/React.createElement("h4", null, texts.types[type].title), /*#__PURE__*/React.createElement("p", null, texts.types[type].description))), /*#__PURE__*/React.createElement(DetailApp, {
      type: type
    })), /*#__PURE__*/React.createElement("footer", {
      className: "ds-modal__footer"
    }, /*#__PURE__*/React.createElement(BeyondButton, _extends({}, btnAttrs, {
      className: "btn-large btn primary",
      type: "submit"
    }), fetching ? /*#__PURE__*/React.createElement(BeyondSpinner, {
      className: "on-primary",
      fetching: true
    }) : actions.submit), /*#__PURE__*/React.createElement(BeyondButton, {
      onClick: () => setType(undefined)
    }, " ", actions.back, " ")));
  }

  /*****************************
  steps\second\version-input.jsx
  *****************************/

  const completeValidation = /((\d{0,4})(\.{0,1})){0,2}(\d{1,4}){0,1}$/;
  const emptyValue = /(^\d{0,4}).{0,1}$/;
  function VersionInput({
    state,
    attrs,
    setState
  }) {
    const {
      texts: {
        form: texts
      },
      model,
      fetching
    } = useCreateProjectContext();
    const handleChange = event => {
      const {
        value
      } = event.target;
      if (emptyValue.test(value)) {
        model.version = value;
        setState(currentValue => ({
          ...currentValue,
          version: value
        }));
        return;
      }
      if (!completeValidation.test(value)) return;
      model.version = value;
      setState(currentValue => ({
        ...currentValue,
        version: value
      }));
    };
    const inputsAttrs = {};
    if (fetching) inputsAttrs.disabled = true;
    return /*#__PURE__*/React.createElement("div", {
      className: "section-group"
    }, /*#__PURE__*/React.createElement(BeyondInput, _extends({}, attrs, {
      name: "version",
      label: texts.version.label,
      placeholder: texts.version.label,
      value: state.version,
      onChange: handleChange
    })), /*#__PURE__*/React.createElement(IconInfo, {
      msg: texts.version.info
    }));
  }

  /***********
  JS PROCESSOR
  ***********/

  /******************
  FILE: controller.js
  ******************/

  const createController = new class Controller extends ReactiveModel {
    #model;
    get model() {
      return this.#model;
    }
    #texts;
    get texts() {
      return this.#texts?.value;
    }
    get ready() {
      return this.#texts.ready && this.#model.ready;
    }
    constructor(props) {
      super(props);
      const model = new ApplicationBuilder();
      this.#model = model;
      model.bind("change", this.triggerEvent);
      const module = __pkg.bundle.module.specifier;
      this.#texts = new CurrentTexts(module, true);
      this.#texts.bind("change", this.triggerEvent);
    }
  }();

  /**********
  SCSS STYLES
  **********/
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/workspace/project-create.code', '.xx{color:red}');
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