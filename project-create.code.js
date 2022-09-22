define(["exports", "module", "@beyond-js/kernel@0.0.22/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/dashboard@0.0.1/core-components", "@beyond-js/ui@0.0.1/image", "@beyond-js/ui@0.0.1/icon", "@beyond-js/dashboard@0.0.1/notify", "@beyond-js/dashboard@0.0.1/hooks", "@beyond-js/ui@0.0.1/modal", "@beyond-js/ui@0.0.1/spinner", "@beyond-js/ui@0.0.1/form", "@beyond-js/inspect@0.0.1/models.legacy", "@beyond-js/kernel@0.0.22/texts", "@beyond-js/ui@0.0.1/perfect-scrollbar"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.ApplicationCreate = void 0;
  _exports.BlankList = BlankList;
  _exports.IconInfo = IconInfo;
  _exports.Tab = Tab;
  _exports.TabSelector = TabSelector;
  _exports.TemplateList = TemplateList;
  _exports.VersionInput = VersionInput;
  _exports.hmr = void 0;

  /*************
  LEGACY IMPORTS
  *************/
  const {
    BeyondAlert,
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
    ApplicationBuilder,
    ReactiveModel
  } = dependency_11;
  const {
    CurrentTexts
  } = dependency_12;
  const {
    BeyondScrollContainer
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
      "vspecifier": "@beyond-js/dashboard@0.0.1/project-create",
      "multibundle": true
    },
    "type": "code"
  }, _amd_module.uri).package();

  ;

  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/dashboard/core-components', dependency_3], ['@beyond-js/ui/image', dependency_4], ['@beyond-js/ui/icon', dependency_5], ['@beyond-js/dashboard/notify', dependency_6], ['@beyond-js/dashboard/hooks', dependency_7], ['@beyond-js/ui/modal', dependency_8], ['@beyond-js/ui/spinner', dependency_9], ['@beyond-js/ui/form', dependency_10], ['@beyond-js/inspect/models.legacy', dependency_11], ['@beyond-js/kernel/texts', dependency_12], ['@beyond-js/ui/perfect-scrollbar', dependency_13]]);

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


  const CreateAppContext = React.createContext();

  const useCreateAppContext = () => React.useContext(CreateAppContext);
  /**************
  form\detail.jsx
  **************/


  function DetailApp() {
    const {
      texts: {
        errors,
        form: texts,
        actions
      },
      model,
      fetching
    } = useCreateAppContext();
    const [state, setState] = React.useState({
      version: model.version
    });
    const btnAttrs = {};

    const handleName = event => {
      const {
        value
      } = event.currentTarget;
      model.scope = value;
    };

    const inputsAttrs = {};
    if (fetching) inputsAttrs.disabled = true;

    const handleChange = (event, pattern) => {
      const target = event.target;
      let {
        name,
        value
      } = target;
      if (pattern) value = value.replace(pattern, '-');
      model[name] = value;
      setState({ ...state,
        ...{
          [name]: model[name]
        }
      });
    };

    const toggleRadio = event => {
      const target = event.currentTarget;
      model[target.name] = target.checked;
      setState({ ...state,
        ...{
          useInspectPort: target.checked
        }
      });
    };

    if (!model.valid || fetching) btnAttrs.disabled = true;
    const errorMessage = model.error && errors[model.error];
    return /*#__PURE__*/React.createElement("div", {
      className: "ds-create-app__fields"
    }, errorMessage && /*#__PURE__*/React.createElement(BeyondAlert, {
      title: errors.title,
      type: "error"
    }, errorMessage), /*#__PURE__*/React.createElement("div", {
      className: "item"
    }, /*#__PURE__*/React.createElement("div", {
      className: "section-group"
    }, /*#__PURE__*/React.createElement(BeyondInput, _extends({}, inputsAttrs, {
      name: "scope",
      label: texts.scope.label,
      placeholder: texts.scope.label,
      value: state.scope,
      onChange: handleName
    })), /*#__PURE__*/React.createElement(IconInfo, {
      msg: texts.scope.info
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
      className: "switch-option"
    }, /*#__PURE__*/React.createElement(BeyondSwitch, {
      name: "npm",
      checked: model.npm,
      value: model.npm,
      onChange: toggleRadio
    }), /*#__PURE__*/React.createElement("label", null, texts.npm))), /*#__PURE__*/React.createElement("footer", {
      className: "footer ds-modal__actions"
    }, /*#__PURE__*/React.createElement("div", {
      className: "actions"
    }, /*#__PURE__*/React.createElement(BeyondButton, _extends({}, btnAttrs, {
      className: "btn-large btn primary",
      type: "submit"
    }), fetching ? /*#__PURE__*/React.createElement(BeyondSpinner, {
      className: "on-primary",
      fetching: true
    }) : actions.submit))));
  }
  /************
  form\form.jsx
  ************/


  function Form() {
    const {
      type,
      setType,
      model,
      texts: {
        form: texts
      }
    } = useCreateAppContext();

    const onSubmit = event => {
      event.preventDefault();
      model.create();
    };

    const typeIcon = type === 'empty' ? 'appTemplate' : 'newApp';
    return /*#__PURE__*/React.createElement("div", {
      className: "ds-modal_content form-content"
    }, /*#__PURE__*/React.createElement(BeyondForm, {
      onSubmit: onSubmit
    }, !type ? /*#__PURE__*/React.createElement(ProjectTypes, null) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "block-types__selected",
      onClick: () => setType(undefined)
    }, /*#__PURE__*/React.createElement(DSIcon, {
      icon: typeIcon
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, texts.types[type].title), /*#__PURE__*/React.createElement("p", null, texts.types[type].description))), /*#__PURE__*/React.createElement(DetailApp, {
      type: type
    }))));
  }
  /*****************
  form\icon-info.jsx
  *****************/


  function IconInfo({
    msg
  }) {
    return /*#__PURE__*/React.createElement(BeyondIcon, {
      tabIndex: "-1",
      className: "form__info",
      icon: "info",
      title: msg,
      "data-placement": "top"
    });
  }
  /******************
  form\port-field.jsx
  ******************/


  function PortField({
    name,
    identifier
  }) {
    const {
      texts: {
        form: texts
      },
      model
    } = useCreateAppContext();
    const [valid, setValid] = React.useState();
    const clsPortLabel = `fade-in ${valid === 'success' ? 'form__text-success' : 'form__text-error'}`;

    const handleChange = (event, pattern) => {
      const target = event.target;
      let {
        name,
        value
      } = target;
      if (pattern) value = value.replace(pattern, '-');
      model[name] = value;

      if (value.length === 4) {
        checkPort();
      }
    };

    const checkPort = async () => {
      const port = model[name];
      if (!port) return;
      const isValid = await model.checkPort(port);
      setValid(isValid ? 'success' : 'error');
    };

    return /*#__PURE__*/React.createElement(BeyondInput, {
      name: name,
      label: texts.ports[identifier].label,
      className: "icon-right form__field-port",
      type: "text",
      placeholder: texts.ports[identifier].label,
      maxLength: 4,
      value: model[name],
      onChange: handleChange
    }, /*#__PURE__*/React.createElement(DSIconButton, {
      tabIndex: "-1",
      icon: "refresh",
      className: "primary",
      title: texts.ports.tooltip
    }), valid && /*#__PURE__*/React.createElement("span", {
      className: clsPortLabel
    }, texts.ports[valid]));
  }
  /*********************
  form\version-input.jsx
  *********************/


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
    } = useCreateAppContext();

    const handleChange = event => {
      const {
        value
      } = event.target;

      if (emptyValue.test(value)) {
        model.version = value;
        setState(currentValue => ({ ...currentValue,
          version: value
        }));
        return;
      }

      if (!completeValidation.test(value)) return;
      model.version = value;
      setState(currentValue => ({ ...currentValue,
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
  /*********
  header.jsx
  *********/


  const Header = React.memo(() => {
    const {
      texts
    } = useCreateAppContext();
    return /*#__PURE__*/React.createElement("header", {
      className: "ds-modal_header"
    }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h4", null, texts.title), /*#__PURE__*/React.createElement("h5", {
      className: "primary-color"
    }, texts.subtitle)));
  });
  /*******************
  lists\blank-list.jsx
  *******************/

  function BlankList() {
    const {
      model: {
        templates
      }
    } = useCreateAppContext();
    const output = templates.map(item => /*#__PURE__*/React.createElement(Item, {
      is: "template",
      key: item.name,
      name: item.name
    }));
    return /*#__PURE__*/React.createElement(BeyondScrollContainer, null, /*#__PURE__*/React.createElement("ul", {
      className: "content-list"
    }, output));
  }
  /**********************
  lists\template-list.jsx
  **********************/


  function TemplateList() {
    const {
      model: {
        TYPES
      }
    } = useCreateAppContext();
    const output = TYPES.map(item => /*#__PURE__*/React.createElement(Item, {
      is: "type",
      key: item.name,
      name: item.name
    }));
    return /*#__PURE__*/React.createElement(BeyondScrollContainer, null, /*#__PURE__*/React.createElement("ul", {
      className: "content-list"
    }, output));
  }
  /***************
  options\item.jsx
  ***************/


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
    } = useCreateAppContext();

    const selectType = event => {
      const target = event.currentTarget;
      const name = target.dataset.name;
      model.type = name;
      model.is = is;
      setType(name);
    }; // TEMPORAL


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
  /****************
  options\types.jsx
  ****************/


  const CONTROL = {
    "template": TemplateList,
    "blank": BlankList,
    "community": BlankList
  };

  function ProjectTypes() {
    const {
      texts: {
        form: texts
      },
      selectedView
    } = useCreateAppContext();
    const Output = CONTROL[selectedView];
    return /*#__PURE__*/React.createElement("div", {
      className: "projects__types"
    }, /*#__PURE__*/React.createElement("div", {
      className: "left-section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "info-container"
    }, /*#__PURE__*/React.createElement("h4", null, texts.types.titles.empty), /*#__PURE__*/React.createElement("p", null, texts.types.titles.overview)), /*#__PURE__*/React.createElement("div", {
      className: "actions-container"
    }, /*#__PURE__*/React.createElement("button", {
      className: "create-button"
    }, texts.types.titles.create), /*#__PURE__*/React.createElement("button", {
      className: "back-button"
    }, texts.types.titles.back))), /*#__PURE__*/React.createElement("div", {
      className: "right-section"
    }, /*#__PURE__*/React.createElement(TabSelector, null), /*#__PURE__*/React.createElement(Output, null)));
  }
  /************
  tabs\item.jsx
  ************/


  function Tab({
    name,
    value
  }) {
    const {
      selectedView,
      setSelectedView
    } = useCreateAppContext();
    const isSelected = selectedView === value; // Esto lo dejo listo para que se apliquen los estilos correspondientes 🙂

    const activeClassName = isSelected ? 'active' : '';

    function selectTab() {
      setSelectedView(value);
    }

    return /*#__PURE__*/React.createElement("li", {
      className: "tab"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: `tab-button ${activeClassName}`,
      onClick: selectTab
    }, /*#__PURE__*/React.createElement("span", {
      className: "tab-name"
    }, name)));
  }
  /********************
  tabs\tab-selector.jsx
  ********************/


  function TabSelector() {
    const {
      texts: {
        tabs
      }
    } = useCreateAppContext();
    return /*#__PURE__*/React.createElement("nav", {
      className: "tab-selector"
    }, /*#__PURE__*/React.createElement("ul", {
      className: "tab-list"
    }, /*#__PURE__*/React.createElement(Tab, {
      name: tabs.blank,
      value: "blank"
    }), /*#__PURE__*/React.createElement(Tab, {
      name: tabs.template,
      value: "template"
    })));
  }
  /*******
  view.jsx
  *******/


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
      const fetching = model.fetching || model.application?.fetching;

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

      setState(() => ({ ...state,
        fetching: model.fetching,
        error: model.error
      }));
    });
    React.useEffect(() => {
      if (fetching) {
        window.setTimeout(() => spinner.current?.classList.toggle('container-hidden'), 100);
      }
    }, [fetching]);
    const output = [];

    if (createController.ready) {
      output.push( /*#__PURE__*/React.createElement(React.Fragment, {
        key: "content"
      }, /*#__PURE__*/React.createElement(Form, null)));
    }

    const texts = createController.texts;
    const cls = `${model.fetching ? ' is' : ''}`;
    const contextValue = {
      type,
      setType,
      model,
      texts,
      error,
      fetching,
      selectedView,
      setSelectedView
    };
    return /*#__PURE__*/React.createElement(CreateAppContext.Provider, {
      value: contextValue
    }, /*#__PURE__*/React.createElement(BeyondModal, {
      show: true,
      onClose: closeModal,
      className: "md ds-modal ds-app-create_modal"
    }, /*#__PURE__*/React.createElement("div", {
      className: cls
    }, /*#__PURE__*/React.createElement("div", null, output), fetching && /*#__PURE__*/React.createElement(DSSpinner, {
      ref: spinner,
      active: true,
      className: "absolute-container container-hidden"
    }))));
  };
  /***********
  JS PROCESSOR
  ***********/

  /******************
  FILE: controller.js
  ******************/


  _exports.ApplicationCreate = ApplicationCreate;
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
      model.bind('change', this.triggerEvent);
      const module = __pkg.bundle.module.specifier;
      this.#texts = new CurrentTexts(module, true);
      this.#texts.bind('change', this.triggerEvent);
    }

  }();
  /**********
  SCSS STYLES
  **********/

  const legacyStyles = beyondLegacyStyles.register('@beyond-js/dashboard/project-create.code', '.ds-modal.ds-app-create_modal .ds-create-app__fields{padding:20px 60px}.ds-app-create_modal .block-selected{display:flex;align-items:center;background:var(--beyond-primary-light-color);transition:.2s all ease-in;cursor:pointer}.ds-app-create_modal .block-selected:hover{background:var(--beyond-primary-dark-color)}.ds-app-create_modal .block-selected svg{padding:30px;height:120px;width:120px}.ds-app-create_modal .switch-option{display:flex;align-items:center;grid-gap:8px}.ds-app-create_modal .form__field-port{margin-bottom:10px}.ds-app-create_modal .form__field-port span{position:absolute;bottom:-10px}.ds-app-create_modal .form__field-port .item{margin-top:15px}.ds-app-create_modal .form__field-port .item.two-columns{display:grid;grid-template-columns:1fr 1fr}.section-group{position:relative}.section-group svg{fill:var(--beyond-gray-dark-color);cursor:pointer}.section-group .beyond-icon.form__info{position:absolute;right:0;top:15px}.ds-app-create_modal .projects__types{padding-top:2rem;height:85vh;display:flex;justify-content:space-between}.ds-app-create_modal .projects__types .left-section{width:35%;padding:0 2rem 0 0;display:flex;flex-direction:column;justify-content:space-between}.ds-app-create_modal .projects__types .left-section .info-container h4{color:var(--primary-accent);font-size:2rem;font-weight:700;padding:0;margin:0 0 .5rem 0}.ds-app-create_modal .projects__types .left-section .info-container p{color:var(--text-title-color);font-size:1.1rem;font-weight:400}.ds-app-create_modal .projects__types .left-section .actions-container{display:flex;align-items:center}.ds-app-create_modal .projects__types .left-section .actions-container button{border-radius:5px;font-weight:600;padding:.5rem 1rem}.ds-app-create_modal .projects__types .left-section .actions-container .create-button{background:var(--secondary-white);margin:0 1rem 0 0}.ds-app-create_modal .projects__types .left-section .actions-container .back-button{background:var(--primary-accent)}.ds-app-create_modal .projects__types .right-section{width:65%;height:100%;display:flex;flex-direction:column;align-items:center}.ds-app-create_modal .projects__types .right-section .tab-selector{border-bottom:2px solid var(--beyond-gray-color);width:100%;padding:0;margin:0 0 1rem 0}.ds-app-create_modal .projects__types .right-section .tab-selector .tab-list{background:var(--secondary-main-background);padding:0;display:grid;grid-template-columns:repeat(2,1fr)}.ds-app-create_modal .projects__types .right-section .tab-selector .tab-list .tab{border-bottom:none;padding:0}.ds-app-create_modal .projects__types .right-section .tab-selector .tab-list .tab .tab-button{padding:1.2rem 1rem 1rem 1rem}.ds-app-create_modal .projects__types .right-section .content-list{width:100%}.ds-app-create_modal .projects__types .beyond-perfect-scrollbar{width:100%;height:100%}.ds-app-create_modal .projects__types .content-list{background:var(--background);list-style:none;width:100%;padding:0 1.2rem}.ds-app-create_modal .projects__types .content-list li{cursor:pointer;border-bottom:1px solid var(--app-element-border-color-1);width:100%;padding:1rem 0;display:flex;align-items:center}.ds-app-create_modal .projects__types .content-list li.disabled{opacity:.3}.ds-app-create_modal .projects__types .content-list li .content{width:95%;height:100%;display:flex;flex-direction:column;justify-content:center}.ds-app-create_modal .projects__types .content-list li .content h4{color:var(--text-title-color);font-weight:600;padding:0;margin:.5rem 0}.ds-app-create_modal .projects__types .content-list li .content p{color:var(--text-color)}.ds-app-create_modal .projects__types .content-list li .beyond-element-image{padding:1rem;display:flex;justify-content:center;align-items:center}.ds-app-create_modal .projects__types .content-list li .beyond-element-image img{aspect-ratio:1/1;object-fit:cover;height:35px!important;margin:0}');
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