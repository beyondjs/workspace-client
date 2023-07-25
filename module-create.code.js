define(["exports", "module", "@beyond-js/kernel@0.1.9/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/ui@0.0.1/modal", "@beyond-js/ui@0.0.1/spinner", "@beyond-js/inspect@0.0.1/models.code", "@beyond-js/inspect@0.0.1/reactive-model", "@beyond-js/workspace@1.0.5/core-components", "@beyond-js/ui@0.0.1/form", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/ui@0.0.1/perfect-scrollbar", "@beyond-js/workspace@1.0.5/hooks", "@beyond-js/workspace@1.0.5/ds-contexts"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.AditionalInformation = AditionalInformation;
  _exports.CreateModule = CreateModule;
  _exports.FirstStep = FirstStep;
  _exports.FooterSecondStep = FooterSecondStep;
  _exports.ModuleFormContext = void 0;
  _exports.SubpathInput = SubpathInput;
  _exports.WebComponentInput = WebComponentInput;
  _exports.hmr = _exports.__beyond_pkg = void 0;
  _exports.useHandleChange = useHandleChange;
  _exports.useModuleFormContext = void 0;
  _exports.useSubmit = useSubmit;
  /*************
  LEGACY IMPORTS
  *************/

  const {
    BeyondModal
  } = dependency_3;
  const {
    BeyondSpinner
  } = dependency_4;
  const {
    ModuleBuilder
  } = dependency_5;
  const {
    ReactiveModel
  } = dependency_6;
  const {
    DSIcon,
    DSIconButton,
    IconInfo,
    BeyondAlert,
    DSSpinner
  } = dependency_7;
  const {
    BeyondInput,
    BeyondForm,
    BeyondButton,
    BeyondSwitch
  } = dependency_8;
  const {
    CurrentTexts
  } = dependency_9;
  const {
    BeyondScrollContainer
  } = dependency_10;
  const {
    useBinder,
    useController
  } = dependency_11;
  const {
    useDSWorkspaceContext
  } = dependency_12;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/inspect", "0.0.1"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/local", "0.1.4"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/widgets", "0.1.4"], ["@beyond-js/backend", "0.1.8"], ["dayjs", "1.11.7"], ["emmet-monaco-es", "5.2.0"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.7.0"], ["react-split", "2.0.14"], ["split.js", "1.6.5"], ["tippy.js", "6.3.7"], ["waves", "0.1.1"], ["socket.io-client", "4.5.4"], ["@beyond-js/packages-templates", "1.0.0"], ["@beyond-js/workspace", "1.0.5"], ["@beyond-js/workspace", "1.0.5"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/workspace@1.0.5/module-create",
      "multibundle": true
    },
    "type": "code"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/ui/modal', dependency_3], ['@beyond-js/ui/spinner', dependency_4], ['@beyond-js/inspect/models.code', dependency_5], ['@beyond-js/inspect/reactive-model', dependency_6], ['@beyond-js/workspace/core-components', dependency_7], ['@beyond-js/ui/form', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['@beyond-js/ui/perfect-scrollbar', dependency_10], ['@beyond-js/workspace/hooks', dependency_11], ['@beyond-js/workspace/ds-contexts', dependency_12]]);
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

  const CreateModuleContext = React.createContext();
  const useCreateModuleContext = () => React.useContext(CreateModuleContext);
  /*bundle*/const ModuleFormContext = React.createContext();
  _exports.ModuleFormContext = ModuleFormContext;
  /*bundle*/const useModuleFormContext = () => React.useContext(ModuleFormContext);

  /**************
  first\index.jsx
  **************/
  _exports.useModuleFormContext = useModuleFormContext;
  function FirstStep() {
    const {
      texts,
      model
    } = useCreateModuleContext();
    return /*#__PURE__*/React.createElement("div", {
      className: "modal__panels"
    }, /*#__PURE__*/React.createElement("section", {
      className: "left__panel"
    }, /*#__PURE__*/React.createElement("header", {
      className: "info-container"
    }, /*#__PURE__*/React.createElement("h3", null, texts.title), /*#__PURE__*/React.createElement("p", {
      className: "p2"
    }, texts.subtitle))), /*#__PURE__*/React.createElement("section", {
      className: "right__panel"
    }, /*#__PURE__*/React.createElement(Templates, null)));
  }

  /************************
  first\templates\index.jsx
  ************************/

  function Templates() {
    const {
      model,
      setPosition
    } = useCreateModuleContext();
    const onClick = event => {
      const target = event.currentTarget;
      const items = target.closest('.cards__container').querySelectorAll('.ds-card');
      Array.from(items).forEach(item => item.classList.remove('selected'));
      target.classList.add('selected');
      const {
        origin
      } = target.dataset;
      model.origin = origin;
      model.cleanType();
      setPosition('second');
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "cards__container"
    }, /*#__PURE__*/React.createElement(Template, {
      onClick: onClick,
      dataOrigin: "bundles"
    }), /*#__PURE__*/React.createElement(Template, {
      onClick: onClick,
      dataOrigin: "templates"
    }));
  }

  /***************************
  first\templates\template.jsx
  ***************************/

  function Template({
    onClick,
    dataOrigin
  }) {
    const {
      texts,
      model
    } = useCreateModuleContext();
    const isSelected = model.origin === dataOrigin;
    const selectedClass = `ds-card ${isSelected ? ' selected' : ''}`;
    return /*#__PURE__*/React.createElement("section", {
      className: selectedClass,
      onClick: onClick,
      "data-origin": dataOrigin
    }, /*#__PURE__*/React.createElement("h4", null, texts.types[dataOrigin].title), /*#__PURE__*/React.createElement("p", null, texts.types[dataOrigin].description));
  }

  /********
  index.jsx
  ********/

  function CreateModule({
    workspace,
    onClose
  }) {
    const [state, setState] = React.useState({});
    const [template, setSelectedTemplate] = React.useState(false);
    const [position, setPosition] = React.useState('first');
    const controls = {
      first: FirstStep,
      second: Types,
      third: ThirdStep
    };
    const Control = controls[position];
    React.useEffect(() => {
      const controller = new Controller(workspace);
      const onChange = () => setState({
        ...controller.state,
        controller
      });
      controller.bind('change', onChange);
      onChange();
      return () => controller.unbind('change', onChange);
    }, []);
    if (!state.ready) return null;
    const {
      controller: {
        model,
        texts,
        bundleType,
        application
      }
    } = state;
    const close = () => window.setTimeout(() => {
      setState({});
      onClose();
    }, 300);
    const value = {
      texts,
      onClose,
      close,
      setPosition,
      bundle: bundleType,
      model,
      workspace,
      template,
      application: application.application,
      project: application,
      selectTemplate: template => setSelectedTemplate(template)
    };
    return /*#__PURE__*/React.createElement(CreateModuleContext.Provider, {
      value: value
    }, /*#__PURE__*/React.createElement(BeyondModal, {
      className: "ds-modal--lg ds-modal",
      show: true,
      onClose: close
    }, /*#__PURE__*/React.createElement(Control, null)));
  }

  /****************
  second\footer.jsx
  ****************/

  function FooterSecondStep() {
    const {
      texts,
      model,
      setPosition
    } = useCreateModuleContext();
    const onClick = event => {
      const target = event.currentTarget;
      event.preventDefault();
      setPosition(target.dataset.step);
    };
    return /*#__PURE__*/React.createElement("footer", {
      className: "ds-modal__footer action-container"
    }, /*#__PURE__*/React.createElement(BeyondButton, {
      className: "secondary",
      "data-step": "first",
      onClick: onClick
    }, texts.actions.back));
  }

  /***************
  second\index.jsx
  ***************/

  /**
   *
   * @returns {JSX.Element|null}
   * @constructor
   */

  function Types() {
    const {
      model
    } = useCreateModuleContext();
    if (!model.origin) {
      console.warn('the origin of the module type must be selected');
      return null;
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "modal__panels"
    }, /*#__PURE__*/React.createElement(LeftPanelTwo, null), /*#__PURE__*/React.createElement(Options, null));
  }

  /********************
  second\left-panel.jsx
  ********************/

  function LeftPanelTwo() {
    const {
      texts,
      model: {
        origin
      }
    } = useCreateModuleContext();
    return /*#__PURE__*/React.createElement("section", {
      className: "left__panel"
    }, /*#__PURE__*/React.createElement("header", {
      className: "info-container"
    }, /*#__PURE__*/React.createElement("h3", null, texts.types[origin].title), /*#__PURE__*/React.createElement("p", {
      className: "p2"
    }, texts.types[origin].description)));
  }

  /***********************
  second\options\index.jsx
  ***********************/

  /**
   * STEP 2
   *
   * @returns {JSX.Element|null}
   * @constructor
   */
  function Options() {
    const {
      texts,
      model: {
        origin
      }
    } = useCreateModuleContext();
    const {
      options
    } = texts[origin];
    if (!options) return null;
    const output = options.map((option, index) => {
      return /*#__PURE__*/React.createElement(Option, {
        key: `${option.id}-${origin}-${index}`,
        option: option,
        index: index
      });
    });
    return /*#__PURE__*/React.createElement("section", {
      className: "right__panel right__panel--actions"
    }, /*#__PURE__*/React.createElement(BeyondScrollContainer, null, /*#__PURE__*/React.createElement("ul", {
      className: "ds__list"
    }, output)), /*#__PURE__*/React.createElement(FooterSecondStep, null));
  }

  /************************
  second\options\option.jsx
  ************************/

  function Option({
    option,
    index
  }) {
    const {
      origin,
      selectTemplate,
      template,
      model,
      setPosition
    } = useCreateModuleContext();
    const isSelected = template.template === option.id;
    const selectedClass = isSelected ? 'selected' : '';
    const onClick = event => {
      const target = event.currentTarget;
      event.stopPropagation();
      event.preventDefault();
      const {
        template
      } = target.dataset;
      if (origin === 'templates') model.setTemplate(template);else model.setType(template);
      selectTemplate({
        index: target.dataset.index,
        template: target.dataset.template
      });
      setPosition('third');
    };
    return /*#__PURE__*/React.createElement("li", {
      "data-template": option.id,
      "data-index": index,
      onClick: onClick,
      className: `list__item list__item__vertical  ${selectedClass}`
    }, /*#__PURE__*/React.createElement("header", {
      className: "ds-list__header"
    }, /*#__PURE__*/React.createElement(DSIcon, {
      icon: "settings"
    }), /*#__PURE__*/React.createElement("h5", null, option.title)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, option.description)), isSelected && /*#__PURE__*/React.createElement(DSIcon, {
      className: "ds-item__check__icon",
      icon: "check"
    }));
  }

  /***********************
  third\bundles\layout.jsx
  ***********************/

  function FormLayout({
    state,
    handleChange
  }) {
    const {
      bundle,
      model,
      texts
    } = useCreateModuleContext();
    if (bundle !== 'layout') return null;
    const inputsAttrs = {};
    if (model.fetching) inputsAttrs.disabled = true;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "item two-columns"
    }, /*#__PURE__*/React.createElement(SubpathInput, null), /*#__PURE__*/React.createElement(WebComponentInput, null), /*#__PURE__*/React.createElement(AdditionalProcessors, {
      state: state
    })), /*#__PURE__*/React.createElement(AdditionalFields, null, /*#__PURE__*/React.createElement("div", {
      className: "item two-columns"
    }, /*#__PURE__*/React.createElement(AditionalInformation, null)), /*#__PURE__*/React.createElement(BlankFields, {
      state: state
    })));
  }

  /****************************
  third\bundles\page\layout.jsx
  ****************************/

  function FormLayoutSection({
    handleChange,
    disabled
  }) {
    const {
      project,
      origin,
      texts
    } = useCreateModuleContext();
    if (origin === 'templates') return null;
    const layouts = project.modules.getItems({
      bundle: 'layout'
    });
    const items = layouts.map(layout => {
      const id = layout.module.layoutId ?? layout.module.name;
      return /*#__PURE__*/React.createElement("option", {
        key: id,
        "data-layout": id
      }, id);
    });
    if (!items.length) return null;
    return /*#__PURE__*/React.createElement("div", {
      className: "item layout-selection"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: ""
    }, texts.page.layout), /*#__PURE__*/React.createElement("select", _extends({
      name: "layout",
      required: true
    }, disabled, {
      className: "form-select",
      title: `Selecciona un layout`,
      onChange: handleChange
    }), /*#__PURE__*/React.createElement("option", null, texts.page.input.layout.placeholder), items));
  }

  /**************************
  third\bundles\page\page.jsx
  **************************/

  function FormPage({
    state,
    handleChange,
    disabled
  }) {
    const {
      model,
      bundle,
      texts
    } = useCreateModuleContext();
    if (bundle !== 'page') return null;
    const [route, setRoute] = React.useState('/');
    const handlePage = event => {
      const target = event.currentTarget;
      //TODO: check regexp
      const checked = target.value.match(/\/[\/a-zA-Z0-9-_]*/);
      if (!checked) {
        event.preventDefault();
        return;
      }
      setRoute(checked.join(''));
      handleChange(event);
    };
    const inputsAttrs = {};
    if (model.fetching) inputsAttrs.disabled = true;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "item two-columns"
    }, /*#__PURE__*/React.createElement(SubpathInput, null), /*#__PURE__*/React.createElement(WebComponentInput, null)), /*#__PURE__*/React.createElement("div", {
      className: "item two-columns"
    }, /*#__PURE__*/React.createElement("div", {
      className: "section-group"
    }, /*#__PURE__*/React.createElement(BeyondInput, _extends({}, inputsAttrs, {
      name: "route",
      required: true,
      value: route,
      onChange: handlePage,
      label: texts.form.url,
      placeholder: texts.placeholder.url
    })), /*#__PURE__*/React.createElement(IconInfo, {
      msg: texts.help.url
    })), /*#__PURE__*/React.createElement(AdditionalProcessors, {
      state: state
    })), /*#__PURE__*/React.createElement(AdditionalFields, null, /*#__PURE__*/React.createElement(FormLayoutSection, {
      disabled: disabled,
      handleChange: handleChange
    }), /*#__PURE__*/React.createElement(AditionalInformation, null), /*#__PURE__*/React.createElement(BlankFields, {
      state: state,
      setState: handleChange
    })));
  }

  /*****************************
  third\bundles\types\bridge.jsx
  *****************************/

  function FormBridge({
    state,
    handleChange
  }) {
    const {
      bundle,
      model,
      texts
    } = useCreateModuleContext();
    if (bundle !== 'bridge') return null;
    const fields = /*#__PURE__*/React.createElement(BlankFields, {
      state: state
    });
    const inputsAttrs = {};
    if (model.fetching) inputsAttrs.disabled = true;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "item"
    }, /*#__PURE__*/React.createElement(SubpathInput, null)), /*#__PURE__*/React.createElement(AdditionalFields, {
      children: fields
    }));
  }

  /***************************
  third\bundles\types\code.jsx
  ***************************/

  function FormCode({
    state,
    handleChange
  }) {
    const {
      bundle,
      model,
      texts
    } = useCreateModuleContext();
    if (bundle !== 'code') return null;
    const inputsAttrs = {};
    if (model.fetching) inputsAttrs.disabled = true;
    const fields = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "item two-columns"
    }, /*#__PURE__*/React.createElement("div", {
      className: "section-group"
    }, /*#__PURE__*/React.createElement(BeyondInput, _extends({
      name: "title"
    }, inputsAttrs, {
      label: texts.form.title,
      placeholder: texts.placeholder.title,
      value: state.title,
      onChange: handleChange
    })), /*#__PURE__*/React.createElement(IconInfo, {
      msg: texts.help.title
    })), /*#__PURE__*/React.createElement("div", {
      className: "section-group"
    }, /*#__PURE__*/React.createElement(BeyondInput, _extends({
      name: "description"
    }, inputsAttrs, {
      label: texts.form.description,
      placeholder: texts.placeholder.description,
      value: state.description,
      onChange: handleChange
    })), /*#__PURE__*/React.createElement(IconInfo, {
      msg: texts.help.description
    }))), /*#__PURE__*/React.createElement(BlankFields, {
      state: state
    }));
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "item"
    }, /*#__PURE__*/React.createElement(SubpathInput, null)), /*#__PURE__*/React.createElement(AdditionalFields, {
      children: fields
    }));
  }

  /****************************
  third\bundles\types\start.jsx
  ****************************/

  function FormStart({
    state,
    handleChange
  }) {
    const {
      bundle,
      model,
      texts
    } = useCreateModuleContext();
    if (bundle !== 'start') return null;
    const inputsAttrs = {};
    if (model.fetching) inputsAttrs.disabled = true;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "item"
    }, /*#__PURE__*/React.createElement(SubpathInput, null)), /*#__PURE__*/React.createElement(AdditionalFields, null, /*#__PURE__*/React.createElement(AditionalInformation, null), /*#__PURE__*/React.createElement(BlankFields, {
      state: state
    })));
  }

  /*********************************
  third\bundles\types\typescript.jsx
  *********************************/

  function FormTypescript({
    state,
    disabled,
    handleChange
  }) {
    const {
      bundle,
      model,
      texts
    } = useCreateModuleContext();
    if (bundle !== 'ts') return null;
    const fields = /*#__PURE__*/React.createElement(BlankFields, {
      state: state
    });
    const inputsAttrs = {};
    if (model.fetching) inputsAttrs.disabled = true;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "item"
    }, /*#__PURE__*/React.createElement(SubpathInput, null)), /*#__PURE__*/React.createElement(AdditionalFields, {
      disabled: disabled,
      children: fields
    }));
  }

  /*****************************
  third\bundles\types\widget.jsx
  *****************************/

  function FormWidget({
    state,
    handleChange
  }) {
    const {
      bundle,
      model,
      texts
    } = useCreateModuleContext();
    if (bundle !== 'widget') return null;
    const inputsAttrs = {};
    if (model.fetching) inputsAttrs.disabled = true;
    const fields = /*#__PURE__*/React.createElement(BlankFields, {
      state: state
    });
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "item two-columns"
    }, /*#__PURE__*/React.createElement(SubpathInput, null), /*#__PURE__*/React.createElement(WebComponentInput, null), /*#__PURE__*/React.createElement(AdditionalProcessors, {
      state: state
    })), /*#__PURE__*/React.createElement(AdditionalFields, {
      children: fields
    }));
  }

  /*********************************
  third\fields\additional-fields.jsx
  *********************************/

  function AdditionalFields({
    children
  }) {
    const [additional, setAdditional] = React.useState(false);
    const {
      texts
    } = useCreateModuleContext();
    const onAdditional = () => {
      setAdditional(!additional);
    };
    const cls = additional ? 'show' : '';
    return /*#__PURE__*/React.createElement("fieldset", null, children && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "form__separator__legend",
      onClick: onAdditional
    }, texts.additionalFeatures), /*#__PURE__*/React.createElement("div", {
      className: `additional-config ${cls}`
    }, children)));
  }

  /****************************
  third\fields\blank-fields.jsx
  ****************************/

  function BlankFields({
    state,
    disabled
  }) {
    const {
      bundle,
      model,
      origin,
      texts
    } = useCreateModuleContext();
    const {
      setState
    } = useModuleFormContext();
    /**
     * Use by multilanguage and server fields
     * @param event
     */
    const toggleRadio = event => {
      const target = event.currentTarget;
      const newValue = {};
      newValue[target.name] = target.checked;
      setState(newValue);
      model.bundle.set(target.name, target.checked);
    };
    if (origin === "templates") return null;
    const processorStyles = bundle !== "ts" && bundle !== "bridge";
    return /*#__PURE__*/React.createElement("div", {
      className: "item item_switch flex-container"
    }, processorStyles && /*#__PURE__*/React.createElement("div", {
      className: "ds-switch__container"
    }, /*#__PURE__*/React.createElement("label", null, texts.form.styles, /*#__PURE__*/React.createElement(BeyondSwitch, _extends({
      name: "styles"
    }, disabled, {
      checked: state.styles,
      onChange: toggleRadio
    })), /*#__PURE__*/React.createElement(IconInfo, {
      msg: texts.help.titles.styles
    }))), /*#__PURE__*/React.createElement("div", {
      className: "ds-switch__container"
    }, /*#__PURE__*/React.createElement("label", null, texts.form.multilanguage, /*#__PURE__*/React.createElement(BeyondSwitch, _extends({
      name: "multilanguage"
    }, disabled, {
      checked: state.multilanguage,
      onChange: toggleRadio
    })), /*#__PURE__*/React.createElement(IconInfo, {
      msg: texts.help.titles.text
    }))));
  }

  /********************************************
  third\fields\inputs\additional-processors.jsx
  ********************************************/

  function AdditionalProcessors() {
    const {
      model,
      bundle,
      texts
    } = useCreateModuleContext();
    if (bundle !== 'page' && bundle !== 'widget' && bundle !== 'layout') return null;
    const toggleRadio = event => {
      const target = event.currentTarget;
      const newValue = {};
      newValue[target.name] = target.checked;
      if (!target.checked) {
        model.bundle.removeProcessor(target.name);
        return;
      }
      model.bundle.clearProcessors();
      model.bundle.addProcessor(target.name);
    };
    const output = [];
    model.bundle.additionalProcessors.forEach(processor => {
      output.push( /*#__PURE__*/React.createElement("div", {
        key: processor.id,
        className: "ds-switch__container"
      }, /*#__PURE__*/React.createElement("label", null, processor.name, /*#__PURE__*/React.createElement(BeyondSwitch, {
        name: processor.id,
        onChange: toggleRadio,
        checked: model.bundle.processors.includes(processor.id)
      }))));
    });
    return /*#__PURE__*/React.createElement("div", {
      className: "item flex-container flex-center-y mt-30"
    }, /*#__PURE__*/React.createElement("h5", {
      className: "link title-separator"
    }, texts.processors), output);
  }

  /**********************************
  third\fields\inputs\information.jsx
  **********************************/

  function AditionalInformation() {
    const {
      handleChange,
      texts,
      disabled,
      state
    } = useModuleFormContext();
    return /*#__PURE__*/React.createElement("div", {
      className: "item two-columns"
    }, /*#__PURE__*/React.createElement("div", {
      className: "section-group"
    }, /*#__PURE__*/React.createElement(BeyondInput, _extends({
      name: "title"
    }, disabled, {
      label: texts.form.title,
      placeholder: texts.placeholder.title,
      value: state.title,
      onChange: handleChange
    })), /*#__PURE__*/React.createElement(IconInfo, {
      msg: texts.help.title
    })), /*#__PURE__*/React.createElement("div", {
      className: "section-group"
    }, /*#__PURE__*/React.createElement(BeyondInput, _extends({
      name: "description"
    }, disabled, {
      label: texts.form.description,
      placeholder: texts.placeholder.description,
      value: state.description,
      onChange: handleChange
    })), /*#__PURE__*/React.createElement(IconInfo, {
      msg: texts.help.description
    })));
  }

  /******************************
  third\fields\inputs\subpath.jsx
  ******************************/

  function SubpathInput() {
    const {
      state,
      handleChange,
      texts,
      disabled
    } = useModuleFormContext();
    return /*#__PURE__*/React.createElement("div", {
      className: "section-group"
    }, /*#__PURE__*/React.createElement(BeyondInput, _extends({
      required: true,
      name: "name"
    }, disabled, {
      label: texts.form.name,
      placeholder: texts.placeholder.name,
      value: state.name,
      onChange: handleChange
    })), /*#__PURE__*/React.createElement(IconInfo, {
      msg: texts.help.name
    }));
  }

  /***********************************
  third\fields\inputs\webcomponent.jsx
  ***********************************/

  function WebComponentInput() {
    const {
      state,
      handleChange,
      texts,
      disabled
    } = useModuleFormContext();
    const [valid, setValid] = React.useState();
    const onChange = event => {
      const {
        value
      } = event.currentTarget;
      const exp = /[a-z]+-[a-z]+/g;
      setValid(!!value.match(exp));
      const fieldValue = value.replace(/ /g, '-');
      handleChange(event);
    };
    const attrs = {
      ...disabled,
      value: state.element,
      name: 'element.name',
      label: texts.form.webcomponent,
      placeholder: texts.placeholder.webcomponent
    };
    if (valid !== undefined && !valid) {
      attrs.hasError = true;
      attrs.errorMessage = texts.form.errors.element;
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "section-group"
    }, /*#__PURE__*/React.createElement(BeyondInput, _extends({}, attrs, {
      onChange: onChange
    })), /*#__PURE__*/React.createElement(IconInfo, {
      msg: texts.help.webcomponent
    }));
  }

  /**************
  third\index.jsx
  **************/

  function ThirdStep() {
    const {
      application: {
        application
      },
      bundle,
      model,
      workspace,
      template,
      texts
    } = useCreateModuleContext();
    if (!template) return null;
    const spinner = React.useRef();
    const tpl = template.template;
    const {
      state,
      setState,
      handleChange
    } = useHandleChange(tpl, model);
    const disabled = {};
    let [onSubmit, error, fetching] = useSubmit(model);
    React.useEffect(() => {
      if (fetching) {
        window.setTimeout(() => spinner.current?.classList.toggle("container-hidden"), 100);
      }
    }, [fetching]);
    if (fetching) disabled.disabled = true;
    const props = {
      state,
      setState,
      handleChange,
      disabled
    };
    return /*#__PURE__*/React.createElement(ModuleFormContext.Provider, {
      value: {
        texts,
        workspace,
        ...props
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal__panels"
    }, /*#__PURE__*/React.createElement(ThirdStepLeftPanel, null), /*#__PURE__*/React.createElement("div", {
      className: "right__panel right__panel--actions"
    }, /*#__PURE__*/React.createElement(BeyondScrollContainer, null, /*#__PURE__*/React.createElement(BeyondForm, {
      onSubmit: onSubmit
    }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h4", null, texts.thirdTitle, ": ", bundle), error && /*#__PURE__*/React.createElement(BeyondAlert, {
      type: "error",
      message: error
    }), /*#__PURE__*/React.createElement(FormPage, props), /*#__PURE__*/React.createElement(FormWidget, props), /*#__PURE__*/React.createElement(FormLayout, props), /*#__PURE__*/React.createElement(FormCode, props), /*#__PURE__*/React.createElement(FormStart, props), /*#__PURE__*/React.createElement(FormBridge, props), /*#__PURE__*/React.createElement(FormTypescript, props)), /*#__PURE__*/React.createElement(FormFooter, {
      onSubmit: onSubmit
    })), fetching && /*#__PURE__*/React.createElement(DSSpinner, {
      ref: spinner,
      active: true,
      className: "absolute-container container-hidden"
    })))));
  }

  /*************************
  third\structure\footer.jsx
  *************************/

  function FormFooter({
    onSubmit
  }) {
    const {
      model,
      texts,
      setPosition
    } = useCreateModuleContext();
    const [isValid, setIsValid] = React.useState(model.bundle?.valid);
    useBinder([model], () => setIsValid(model.bundle.valid));
    const onClick = event => {
      const target = event.currentTarget;
      event.preventDefault();
      setPosition(target.dataset.step);
    };
    const attrs = {};
    if (!isValid) attrs.disabled = true;
    return /*#__PURE__*/React.createElement("footer", {
      className: "ds-modal__footer"
    }, /*#__PURE__*/React.createElement(BeyondButton, {
      className: "secondary",
      "data-step": "second",
      onClick: onClick
    }, texts.actions.back), /*#__PURE__*/React.createElement(BeyondButton, _extends({}, attrs, {
      type: "submit",
      onClick: onSubmit,
      className: "primary"
    }), texts.actions.next));
  }

  /*****************************
  third\structure\left-panel.jsx
  *****************************/

  function ThirdStepLeftPanel() {
    const {
      model: {
        origin
      },
      texts,
      template,
      setPosition
    } = useCreateModuleContext();
    if (!template) return null;
    return /*#__PURE__*/React.createElement("aside", {
      className: "left__panel"
    }, /*#__PURE__*/React.createElement("header", {
      className: "info-container"
    }, /*#__PURE__*/React.createElement("h3", null, texts.types[origin].title), /*#__PURE__*/React.createElement("p", {
      className: "p2"
    }, texts.types[origin].description)));
  }

  /**************************
  third\use-handle-change.jsx
  **************************/

  /*bundle*/function useHandleChange(tpl, model) {
    const styles = tpl === "page" || tpl === "widget" || tpl === "layout" || tpl === "code";
    const [state, setState] = React.useState({
      styles: styles,
      multilanguage: false
    });
    const [initial, setInitial] = React.useState(true);
    const handleChange = event => {
      const target = event.currentTarget;
      const value = {};
      let fieldValue = target.value;
      if (target.name === "name" || target.name === "element") {
        fieldValue = fieldValue.replace(/ /g, "-");
      }
      if (initial) {
        model.bundle.set("styles", state.styles);
        setInitial(false);
      }
      value[target.name] = fieldValue;
      const newState = {
        ...state,
        ...value
      };
      model.bundle.set(target.name, fieldValue);
      setState(newState);
    };
    return {
      state,
      setState: newValues => setState({
        ...state,
        ...newValues
      }),
      handleChange
    };
  }

  /*******************
  third\use-submit.jsx
  *******************/

  function useSubmit() {
    const {
      model,
      application,
      close,
      texts,
      workspace
    } = useCreateModuleContext();
    const [error, setError] = React.useState();
    const [fetching, setFetching] = React.useState(false);
    const onSubmit = async event => {
      event.preventDefault();
      try {
        if (model.type === "page" && application.routes().includes(model.bundle.route)) {
          setError(`${texts.form.errors.route} ${model.bundle.route}`);
          return;
        }
        setFetching(true);
        const response = await model.bundle.publish();
        if (response.error) {
          setFetching(false);
          setError(response.error);
          return;
        }
        workspace.openBoard("module", {
          label: model.bundle.name,
          moduleId: model.bundle.moduleId,
          projectId: application.id
        });
        setFetching(false);
        close();
      } catch (exc) {
        console.trace(100, exc);
        setError(exc.error);
      }
    };
    return [onSubmit, error, fetching];
  }

  /***********
  JS PROCESSOR
  ***********/

  /******************
  FILE: controller.js
  ******************/

  class Controller extends ReactiveModel {
    _application;
    get application() {
      return this._application;
    }
    #texts;
    get texts() {
      return this.#texts?.value;
    }
    get ready() {
      return this.application?.ready && this.#texts.ready;
    }
    get state() {
      return {
        ready: this.ready,
        texts: this.texts
      };
    }
    get BUNDLES() {
      return this.model?.BUNDLES;
    }
    get PROCESSORS() {
      return this.model?.PROCESSORS;
    }
    _model;
    get model() {
      return this._model;
    }
    get bundleType() {
      return this.model?.bundle?.type;
    }
    constructor(workspace) {
      super();
      this._workspace = workspace;
      this._application = workspace.application;
      const model = new ModuleBuilder(workspace.application.application.id);
      this._model = model;
      model.bind('change', this.triggerEvent);
      const module = __pkg.bundle.module.specifier;
      this.#texts = new CurrentTexts(module, true);
      this.#texts.bind('change', this.triggerEvent);
      this.triggerEvent();
    }
  }
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