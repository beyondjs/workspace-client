define(["exports", "module", "@beyond-js/kernel@0.1.0/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/ui@0.0.1/modal", "@beyond-js/ui@0.0.1/spinner", "@beyond-js/inspect@0.0.1/models.legacy", "@beyond-js/dashboard@0.0.1/core-components", "@beyond-js/ui@0.0.1/form", "@beyond-js/kernel@0.1.0/texts", "@beyond-js/ui@0.0.1/perfect-scrollbar", "@beyond-js/dashboard@0.0.1/hooks"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.CreateModule = CreateModule;
  _exports.FirstStep = FirstStep;
  _exports.hmr = _exports.__beyond_pkg = void 0;
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
    ReactiveModel,
    ModuleBundleBuilder
  } = dependency_5;
  const {
    DSIcon,
    DSIconButton,
    IconInfo,
    BeyondAlert,
    DSSpinner
  } = dependency_6;
  const {
    BeyondInput,
    BeyondForm,
    BeyondButton,
    BeyondSwitch
  } = dependency_7;
  const {
    CurrentTexts
  } = dependency_8;
  const {
    BeyondScrollContainer
  } = dependency_9;
  const {
    useBinder
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
      "vspecifier": "@beyond-js/dashboard@0.0.1/module-create",
      "multibundle": true
    },
    "type": "code"
  }, _amd_module.uri).package();

  ;

  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/ui/modal', dependency_3], ['@beyond-js/ui/spinner', dependency_4], ['@beyond-js/inspect/models.legacy', dependency_5], ['@beyond-js/dashboard/core-components', dependency_6], ['@beyond-js/ui/form', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['@beyond-js/ui/perfect-scrollbar', dependency_9], ['@beyond-js/dashboard/hooks', dependency_10]]);

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
  /**************
  first\index.jsx
  **************/


  function FirstStep() {
    return /*#__PURE__*/React.createElement("div", {
      className: "modal__panels"
    }, /*#__PURE__*/React.createElement(LeftPanel, null), /*#__PURE__*/React.createElement(RightPanel, null));
  }
  /*******************
  first\left-panel.jsx
  *******************/


  function LeftPanel() {
    const {
      model,
      texts,
      setPosition
    } = useCreateModuleContext();

    const onClick = () => setPosition('second');

    return /*#__PURE__*/React.createElement("section", {
      className: "left__panel"
    }, /*#__PURE__*/React.createElement("header", {
      className: "info-container"
    }, /*#__PURE__*/React.createElement("h3", null, texts.title), /*#__PURE__*/React.createElement("p", {
      className: "p2"
    }, texts.subtitle)), /*#__PURE__*/React.createElement("footer", {
      className: "action-container"
    }, /*#__PURE__*/React.createElement(BeyondButton, {
      onClick: onClick,
      disabled: !model.origin,
      className: "btn-large btn primary beyond-button"
    }, texts.actions.next)));
  }
  /********************
  first\right-panel.jsx
  ********************/


  function RightPanel() {
    const {
      showFormModal
    } = useCreateModuleContext();
    return /*#__PURE__*/React.createElement("section", {
      className: "right__panel"
    }, /*#__PURE__*/React.createElement(Templates, null));
  }
  /************************
  first\templates\index.jsx
  ************************/


  function Templates() {
    const {
      model
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
    React.useEffect(() => {
      const controller = new Controller(workspace);

      const onChange = () => setState({ ...controller.state,
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
    const Control = controls[position];
    return /*#__PURE__*/React.createElement(CreateModuleContext.Provider, {
      value: value
    }, /*#__PURE__*/React.createElement(BeyondModal, {
      className: "md modal-md ds-modal",
      show: true,
      onClose: close
    }, /*#__PURE__*/React.createElement(Control, null)));
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
    }, /*#__PURE__*/React.createElement(Actions, null), /*#__PURE__*/React.createElement(Options, null));
  }
  /********************
  second\left-panel.jsx
  ********************/


  function Actions() {
    const {
      texts,
      model: {
        origin
      },
      model,
      setPosition
    } = useCreateModuleContext();

    const onClick = event => {
      const target = event.currentTarget;
      event.preventDefault();
      setPosition(target.dataset.step);
    };

    return /*#__PURE__*/React.createElement("section", {
      className: "left__panel"
    }, /*#__PURE__*/React.createElement("header", {
      className: "info-container"
    }, /*#__PURE__*/React.createElement("h3", null, texts.types[origin].title), /*#__PURE__*/React.createElement("p", {
      className: "p2"
    }, texts.types[origin].description)), /*#__PURE__*/React.createElement("footer", {
      className: "action-container"
    }, /*#__PURE__*/React.createElement(BeyondButton, {
      className: "secondary",
      "data-step": "first",
      onClick: onClick
    }, texts.actions.back), /*#__PURE__*/React.createElement(BeyondButton, {
      disabled: !model.type,
      "data-step": "third",
      onClick: onClick,
      className: "primary"
    }, texts.actions.next)));
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
      className: "right__panel"
    }, /*#__PURE__*/React.createElement(BeyondScrollContainer, null, /*#__PURE__*/React.createElement("ul", {
      className: "ds__list"
    }, output)));
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
      model
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
  /**************************************
  third\bundles\additional-processors.jsx
  **************************************/


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
        className: "switch-option"
      }, /*#__PURE__*/React.createElement(BeyondSwitch, {
        name: processor.id,
        onChange: toggleRadio,
        checked: model.bundle.processors.includes(processor.id)
      }), /*#__PURE__*/React.createElement("label", null, processor.name)));
    });
    return /*#__PURE__*/React.createElement("div", {
      className: "item item_switch flex-container"
    }, /*#__PURE__*/React.createElement("h5", {
      className: "link title-separator"
    }, texts.processors), output);
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
    const fields = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "item two-columns"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BeyondInput, _extends({
      name: "title"
    }, inputsAttrs, {
      label: texts.form.title,
      placeholder: texts.placeholder.title,
      value: state.title,
      onChange: handleChange
    })), /*#__PURE__*/React.createElement("span", {
      className: "help-block"
    }, texts.help.title)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BeyondInput, _extends({
      name: "description"
    }, inputsAttrs, {
      label: texts.form.description,
      placeholder: texts.placeholder.description,
      value: state.description,
      onChange: handleChange
    })), /*#__PURE__*/React.createElement("span", {
      className: "help-block"
    }, texts.help.description))), /*#__PURE__*/React.createElement(BlankFields, {
      state: state
    }));
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "item two-columns"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BeyondInput, _extends({
      required: true,
      name: "name"
    }, inputsAttrs, {
      label: texts.form.name,
      placeholder: texts.placeholder.name,
      value: state.name,
      onChange: handleChange
    })), /*#__PURE__*/React.createElement("span", {
      className: "help-block"
    }, texts.help.name)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BeyondInput, _extends({
      name: "element"
    }, inputsAttrs, {
      label: texts.form.webcomponent,
      placeholder: texts.placeholder.webcomponent,
      value: state.element,
      onChange: handleChange
    })), /*#__PURE__*/React.createElement("span", {
      className: "help-block"
    }, texts.help.webcomponent)), /*#__PURE__*/React.createElement(AdditionalProcessors, {
      state: state
    })), /*#__PURE__*/React.createElement(AdditionalFields, {
      children: fields
    }), /*#__PURE__*/React.createElement(FormFooter, null));
  }
  /****************************
  third\bundles\page\layout.jsx
  ****************************/


  function FormLayoutSection({
    handleChange,
    disabled
  }) {
    const {
      application,
      origin,
      texts
    } = useCreateModuleContext();
    if (origin === 'templates') return null;
    const layouts = application.modules.getItems({
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
      const target = event.currentTarget; //TODO: check regexp

      const checked = target.value.match(/\/[\/a-zA-Z0-9-_]*/);

      if (!checked) {
        event.preventDefault();
        return;
      }

      setRoute(checked.join(''));
      handleChange(event);
    };

    const fields = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FormLayoutSection, {
      disabled: disabled,
      handleChange: handleChange
    }), /*#__PURE__*/React.createElement("div", {
      className: "item two-columns"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BeyondInput, _extends({
      name: "title"
    }, disabled, {
      label: texts.form.title,
      placeholder: texts.placeholder.title,
      value: state.title,
      onChange: handleChange
    })), /*#__PURE__*/React.createElement("span", {
      className: "help-block"
    }, texts.help.title)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BeyondInput, _extends({
      name: "description"
    }, disabled, {
      label: texts.form.description,
      placeholder: texts.placeholder.description,
      value: state.description,
      onChange: handleChange
    })), /*#__PURE__*/React.createElement("span", {
      className: "help-block"
    }, texts.help.description))), /*#__PURE__*/React.createElement(BlankFields, {
      state: state,
      setState: handleChange
    }));
    const inputsAttrs = {};
    if (model.fetching) inputsAttrs.disabled = true;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "item two-columns"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BeyondInput, _extends({
      required: true,
      name: "name"
    }, inputsAttrs, disabled, {
      label: texts.form.name,
      placeholder: texts.placeholder.name,
      value: state.name,
      onChange: handleChange
    })), /*#__PURE__*/React.createElement("span", {
      className: "help-block"
    }, texts.help.name)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BeyondInput, _extends({}, inputsAttrs, {
      name: "element",
      label: texts.form.webcomponent,
      placeholder: texts.placeholder.webcomponent,
      value: state.element,
      onChange: handleChange
    })), /*#__PURE__*/React.createElement("span", {
      className: "help-block"
    }, texts.help.webcomponent))), /*#__PURE__*/React.createElement("div", {
      className: "item two-columns"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BeyondInput, _extends({}, inputsAttrs, {
      name: "route",
      required: true,
      value: route,
      onChange: handlePage,
      label: texts.form.url,
      placeholder: texts.placeholder.url
    })), /*#__PURE__*/React.createElement("span", {
      className: "help-block"
    }, texts.help.url)), /*#__PURE__*/React.createElement("div", {
      className: "item-vdir"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "vdir"
    }, "N\xFAmero de parametros de url?"), /*#__PURE__*/React.createElement("input", _extends({
      type: "number",
      defaultValue: model.bundle.vdir,
      name: "vdir",
      required: true,
      value: state.vdir
    }, inputsAttrs, {
      onChange: handleChange
    }))), /*#__PURE__*/React.createElement(AdditionalProcessors, {
      state: state
    })), /*#__PURE__*/React.createElement(AdditionalFields, {
      children: fields
    }), /*#__PURE__*/React.createElement(FormFooter, null));
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
    }, /*#__PURE__*/React.createElement(BeyondInput, _extends({
      required: true,
      name: "name"
    }, inputsAttrs, {
      label: texts.form.name,
      placeholder: texts.placeholder.name,
      value: state.name,
      onChange: handleChange
    })), /*#__PURE__*/React.createElement("span", {
      className: "help-block"
    }, texts.help.name)), /*#__PURE__*/React.createElement(AdditionalFields, {
      children: fields
    }), /*#__PURE__*/React.createElement(FormFooter, null));
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
    })), /*#__PURE__*/React.createElement("span", {
      className: "help-block"
    }, texts.help.title)), /*#__PURE__*/React.createElement("div", {
      className: "section-group"
    }, /*#__PURE__*/React.createElement(BeyondInput, _extends({
      name: "description"
    }, inputsAttrs, {
      label: texts.form.description,
      placeholder: texts.placeholder.description,
      value: state.description,
      onChange: handleChange
    })), /*#__PURE__*/React.createElement("span", {
      className: "help-block"
    }, texts.help.description))), /*#__PURE__*/React.createElement(BlankFields, {
      state: state
    }));
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "item"
    }, /*#__PURE__*/React.createElement(BeyondInput, _extends({
      required: true,
      name: "name"
    }, inputsAttrs, {
      label: texts.form.name,
      placeholder: texts.placeholder.name,
      value: state.name,
      onChange: handleChange
    })), /*#__PURE__*/React.createElement("span", {
      className: "help-block"
    }, texts.help.name)), /*#__PURE__*/React.createElement(AdditionalFields, {
      children: fields
    }), /*#__PURE__*/React.createElement(FormFooter, null));
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
    const fields = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "item two-columns"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BeyondInput, _extends({
      name: "title"
    }, inputsAttrs, {
      label: texts.form.title,
      placeholder: texts.placeholder.title,
      value: state.title,
      onChange: handleChange
    })), /*#__PURE__*/React.createElement("span", {
      className: "help-block"
    }, texts.help.title)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BeyondInput, _extends({
      name: "description"
    }, inputsAttrs, {
      label: texts.form.description,
      placeholder: texts.placeholder.description,
      value: state.description,
      onChange: handleChange
    })), /*#__PURE__*/React.createElement("span", {
      className: "help-block"
    }, texts.help.description))), /*#__PURE__*/React.createElement(BlankFields, {
      state: state
    }));
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "item"
    }, /*#__PURE__*/React.createElement(BeyondInput, _extends({
      required: true,
      name: "name"
    }, inputsAttrs, {
      label: texts.form.name,
      placeholder: texts.placeholder.name,
      value: state.name,
      onChange: handleChange
    })), /*#__PURE__*/React.createElement("span", {
      className: "help-block"
    }, texts.help.name)), /*#__PURE__*/React.createElement(AdditionalFields, {
      children: fields
    }), /*#__PURE__*/React.createElement(FormFooter, null));
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
    }, /*#__PURE__*/React.createElement(BeyondInput, _extends({
      required: true,
      name: "name"
    }, inputsAttrs, disabled, {
      label: texts.form.name,
      placeholder: texts.placeholder.name,
      value: state.name,
      onChange: handleChange
    })), /*#__PURE__*/React.createElement("span", {
      className: "help-block"
    }, texts.help.name)), /*#__PURE__*/React.createElement(AdditionalFields, {
      disabled: disabled,
      children: fields
    }), /*#__PURE__*/React.createElement(FormFooter, {
      disabled: disabled
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
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BeyondInput, _extends({
      required: true,
      name: "name"
    }, inputsAttrs, {
      label: texts.form.name,
      placeholder: texts.placeholder.name,
      value: state.name,
      onChange: handleChange
    })), /*#__PURE__*/React.createElement("span", {
      className: "help-block"
    }, texts.help.name)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BeyondInput, _extends({
      name: "element"
    }, inputsAttrs, {
      label: texts.form.webcomponent,
      placeholder: texts.placeholder.webcomponent,
      value: state.element,
      onChange: handleChange
    })), /*#__PURE__*/React.createElement("span", {
      className: "help-block"
    }, texts.help.webcomponent)), /*#__PURE__*/React.createElement(AdditionalProcessors, {
      state: state
    })), /*#__PURE__*/React.createElement(AdditionalFields, {
      children: fields
    }), /*#__PURE__*/React.createElement(FormFooter, null));
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
    return /*#__PURE__*/React.createElement(React.Fragment, null, children && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
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
    /**
     * Use by multilanguage and server fields
     * @param event
     */

    const toggleRadio = event => {
      const target = event.currentTarget;
      const newValue = {};
      newValue[target.name] = target.checked;
      model.bundle.set(target.name, target.checked);
    };

    if (origin === 'templates') return null;
    const processorStyles = bundle !== 'ts' && bundle !== 'bridge';
    return /*#__PURE__*/React.createElement("div", {
      className: "item item_switch flex-container"
    }, processorStyles && /*#__PURE__*/React.createElement("div", {
      className: "ds-switch__container"
    }, /*#__PURE__*/React.createElement("label", null, texts.form.styles, /*#__PURE__*/React.createElement(BeyondSwitch, _extends({
      name: "styles"
    }, disabled, {
      checked: state.styles,
      value: state.styles,
      onChange: toggleRadio
    })), /*#__PURE__*/React.createElement(IconInfo, {
      msg: texts.help.titles.styles
    }))), /*#__PURE__*/React.createElement("div", {
      className: "ds-switch__container"
    }, /*#__PURE__*/React.createElement("label", null, texts.form.multilanguage, /*#__PURE__*/React.createElement(BeyondSwitch, _extends({
      name: "multilanguage"
    }, disabled, {
      value: state.multilanguage,
      onChange: toggleRadio
    })), /*#__PURE__*/React.createElement(IconInfo, {
      msg: texts.help.titles.text
    }))));
  }
  /**************
  third\index.jsx
  **************/


  function ThirdStep() {
    const {
      application: {
        application
      },
      close,
      model,
      workspace,
      template,
      texts
    } = useCreateModuleContext();
    if (!template) return null;
    const spinner = React.useRef();
    const [initial, setInitial] = React.useState(true);
    const tpl = template.template;
    const styles = tpl === 'page' || tpl === 'widget' || tpl === 'layout' || tpl === 'code';
    const [state, setState] = React.useState({
      styles: styles
    });
    const disabled = {};
    const [onSubmit, error, fetching] = useSubmit(model);
    React.useEffect(() => {
      if (fetching) {
        window.setTimeout(() => spinner.current?.classList.toggle('container-hidden'), 100);
      }
    }, [fetching]);

    const handleChange = event => {
      const target = event.currentTarget;
      const value = {};
      let fieldValue = target.value;

      if (target.name === 'name' || target.name === 'element') {
        fieldValue = fieldValue.replace(/ /g, '-');
      } //Seteamos el valor por defecto del estado


      if (initial) {
        model.bundle.set('styles', state.styles);
        setInitial(false);
      }

      value[target.name] = fieldValue;
      const newState = { ...state,
        ...value
      };
      model.bundle.set(target.name, fieldValue);
      setState(newState);
    };

    if (fetching) disabled.disabled = true;
    const props = {
      state,
      setState,
      handleChange,
      disabled
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "modal__panels"
    }, /*#__PURE__*/React.createElement(ThirdStepLeftPanel, {
      onSubmit: onSubmit
    }), /*#__PURE__*/React.createElement("div", {
      className: "right__panel"
    }, error && /*#__PURE__*/React.createElement(BeyondAlert, {
      type: "error",
      message: error
    }), /*#__PURE__*/React.createElement(BeyondForm, {
      onSubmit: onSubmit
    }, /*#__PURE__*/React.createElement(FormPage, props), /*#__PURE__*/React.createElement(FormWidget, props), /*#__PURE__*/React.createElement(FormLayout, props), /*#__PURE__*/React.createElement(FormCode, props), /*#__PURE__*/React.createElement(FormStart, props), /*#__PURE__*/React.createElement(FormBridge, props), /*#__PURE__*/React.createElement(FormTypescript, props)), fetching && /*#__PURE__*/React.createElement(DSSpinner, {
      ref: spinner,
      active: true,
      className: "absolute-container container-hidden"
    })));
  }
  /*************************
  third\structure\footer.jsx
  *************************/


  function FormFooter({
    disabled
  }) {
    return null; // const {model, texts} = useCreateModuleContext();
    // const [isValid, setIsValid] = React.useState(model.bundle?.valid);
    // React.useEffect(() => {
    //     const onChange = () => setIsValid(model.bundle.valid);
    //     model.bundle?.bind('change', onChange);
    //     return () => model.bundle && model.bundle?.unbind('change', onChange);
    // });
    //
    // const attrs = {};
    // if (!isValid) attrs.disabled = true;
    //
    // return (
    //     <footer className="align-right ds-modal__actions">
    //         {model.fetching ?
    //          <BeyondSpinner fetching/> :
    //          <BeyondButton {...attrs} className="btn primary" type="submit">
    //              {texts.form.button}
    //          </BeyondButton>
    //         }
    //     </footer>
    // )
  }
  /*****************************
  third\structure\left-panel.jsx
  *****************************/


  function ThirdStepLeftPanel({
    onSubmit
  }) {
    const {
      model,
      model: {
        origin
      },
      texts,
      template,
      setPosition
    } = useCreateModuleContext();
    const [isValid, setIsValid] = React.useState(model.bundle?.valid);
    useBinder([model], () => setIsValid(model.bundle.valid));
    if (!template) return null;

    const onClick = event => {
      const target = event.currentTarget;
      event.preventDefault();
      setPosition(target.dataset.step);
    };

    const attrs = {};
    if (!isValid) attrs.disabled = true;
    return /*#__PURE__*/React.createElement("aside", {
      className: "left__panel"
    }, /*#__PURE__*/React.createElement("header", {
      className: "info-container"
    }, /*#__PURE__*/React.createElement("h3", null, texts.types[origin].title), /*#__PURE__*/React.createElement("p", {
      className: "p2"
    }, texts.types[origin].description)), /*#__PURE__*/React.createElement("footer", {
      className: "action-container"
    }, /*#__PURE__*/React.createElement(BeyondButton, {
      className: "secondary",
      "data-step": "second",
      onClick: onClick
    }, texts.actions.back), /*#__PURE__*/React.createElement(BeyondButton, _extends({}, attrs, {
      onClick: onSubmit,
      className: "primary"
    }), texts.actions.next)));
  }
  /*******************
  third\use-submit.jsx
  *******************/


  function useSubmit() {
    const {
      model,
      application,
      close
    } = useCreateModuleContext();
    const [error, setError] = React.useState();
    const [fetching, setFetching] = React.useState(false);

    const onSubmit = async event => {
      event.preventDefault();

      try {
        if (model.type === 'page' && application.routes().includes(model.bundle.route)) {
          setError(`${texts.form.errors.route} ${model.bundle.route}`);
          return;
        }

        const exp = /[a-z]+-[a-z]+/g;
        const widgets = ['widget', 'page', 'layout'];

        if (widgets.includes(model.type) && !model.bundle.element.match(exp)) {
          setError(`${texts.form.errors.element}`);
          return;
        }

        setFetching(true);
        const response = await model.bundle.publish();

        if (response.error) {
          setFetching(false);
          setError(response.error);
          return;
        }

        workspace.openBoard('module', {
          label: model.bundle.name,
          moduleId: model.bundle.moduleId,
          projectId: application.id
        });
        setFetching(false);
        close();
      } catch (exc) {
        console.error("Aaj", exc);
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
      const model = new ModuleBundleBuilder(workspace.application.application.id);
      this._model = model;
      model.bind('change', this.triggerEvent);
      const module = __pkg.bundle.module.specifier;
      this.#texts = new CurrentTexts(module, true);
      this.#texts.bind('change', this.triggerEvent);
      this.triggerEvent();
    }

  }
  /**********
  SCSS STYLES
  **********/


  const legacyStyles = beyondLegacyStyles.register('@beyond-js/dashboard/module-create.code', '.ds-create-module .ds-create-module__breadcrumb-form{display:flex;gap:15px;padding:15px;align-items:center;background:var(--beyond-primary-light-color)}.ds-create-module .ds-create-module__breadcrumb-form .beyond-icon{width:44px;height:44px}.ds-create-module .ds-create-module__breadcrumb-form .breadcrumb{display:flex;align-items:center;transition:.2s all ease-in}.ds-create-module .ds-create-module__breadcrumb-form .breadcrumb a{display:inline-grid;padding:5px;cursor:pointer;transition:all .2s linear}.ds-create-module .ds-create-module__breadcrumb-form .breadcrumb a:hover{text-decoration:underline}.ds-create-module .ds-create-module__template-form{padding:20px 40px}.ds-create-module .ds-create-module__template-form .additional-config{display:none}.ds-create-module .ds-create-module__template-form .additional-config.show{display:block}.ds-create-module .two-columns{display:grid;grid-gap:5px;grid-template-columns:1fr 1fr}.ds-create-module .three-columns{display:grid;grid-gap:5px;grid-template-columns:1fr 1fr 1fr}.ds-create-module .text-right{justify-content:end;text-align:right}.ds-create-module .steps{display:grid;grid-template-columns:1fr 1fr;justify-content:center;cursor:pointer}.ds-create-module .steps div{padding:15px;background:#f0f0f0}.ds-create-module .steps div.active{background:var(--beyond-primary-accent-color);color:#fff}.ds-create-module form{display:grid;grid-template-columns:auto}.ds-create-module form .item{margin-top:15px}.ds-create-module form .item.two-columns{display:grid;grid-template-columns:1fr 1fr}.ds-create-module form .switch-option{display:flex;align-items:center;grid-gap:8px}.ds-create-module form .radio-group{display:grid}.ds-create-module form .item-vdir{display:flex;align-items:center;gap:8px;justify-content:center}.ds-create-module form .item-vdir input[type=number]{background:#f0f0f0;border:0;outline:0;padding:8px;width:90px}.ds-create-module form .title-separator{border-bottom:1px solid #f0f0f0}.ds-create-module footer{display:block;text-align:right}.ds-create-module .layout-selection{display:flex;width:100%;justify-content:center;flex-direction:column}.ds-create-module .layout-selection select{outline:0;padding:8px;width:100%;border:1px #82837f}.ds-create-module .ds-create-module_template-list{display:flex;max-width:100%;grid-gap:8px;flex-wrap:wrap;justify-content:center;align-self:start;transition:all .2s ease-in-out}.ds-create-module .ds-create-module_template-list .template-list__item{padding:40px;min-width:200px;flex:1 1 0;cursor:pointer}.ds-create-module .ds-create-module_template-list .template-list__item.active,.ds-create-module .ds-create-module_template-list .template-list__item:hover{background:#e4e5dc;transition:all .2s ease-in}');
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