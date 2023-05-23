define(["exports", "module", "@beyond-js/kernel@0.1.9/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/ui@0.0.1/spinner", "@beyond-js/ui@0.0.1/form", "dayjs@1.11.7", "@beyond-js/workspace@1.0.5/core-components", "@beyond-js/workspace@1.0.5/hooks", "@beyond-js/workspace@1.0.5/texts-binder", "@beyond-js/workspace@1.0.5/ds-contexts", "@beyond-js/workspace@1.0.5/tabs", "@beyond-js/ui@0.0.1/preload-text"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.AlertsSection = AlertsSection;
  _exports.BadgeItem = BadgeItem;
  _exports.Badges = Badges;
  _exports.Bundle = Bundle;
  _exports.BundleHeader = BundleHeader;
  _exports.BundleProcessor = BundleProcessor;
  _exports.BundleState = BundleState;
  _exports.CSpecs = CSpecs;
  _exports.EditModulePlatforms = EditModulePlatforms;
  _exports.HeaderPreload = HeaderPreload;
  _exports.ModuleBoard = ModuleBoard;
  _exports.ModuleBundles = ModuleBundles;
  _exports.ModuleErrors = ModuleErrors;
  _exports.ModulePlatforms = ModulePlatforms;
  _exports.ModulePreload = ModulePreload;
  _exports.hmr = _exports.__beyond_pkg = void 0;
  /*************
  LEGACY IMPORTS
  *************/

  const {
    BeyondSpinner
  } = dependency_3;
  const {
    BeyondButton,
    BeyondSwitch
  } = dependency_4;
  const dayjs = dependency_5;
  const {
    DSSpinner,
    DSIconButton,
    DSIcon,
    FadeIn,
    DSCard,
    DSCards,
    SmallCard,
    ProcessIconButton,
    ProcessButton,
    BeyondAlert
  } = dependency_6;
  const {
    useBinder
  } = dependency_7;
  const {
    useTextsBinder
  } = dependency_8;
  const {
    useDSWorkspaceContext
  } = dependency_9;
  const {
    Tabs,
    TabsContainer,
    Board
  } = dependency_10;
  const {
    BeyondPreloadText
  } = dependency_11;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/inspect", "0.0.1"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/local", "0.1.4"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/widgets", "0.1.4"], ["@beyond-js/backend", "0.1.6"], ["dayjs", "1.11.7"], ["emmet-monaco-es", "5.2.0"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.7.0"], ["react-split", "2.0.14"], ["split.js", "1.6.5"], ["tippy.js", "6.3.7"], ["waves", "0.1.1"], ["socket.io-client", "4.5.4"], ["@beyond-js/packages-templates", "1.0.0"], ["@beyond-js/workspace", "1.0.5"], ["@beyond-js/workspace", "1.0.5"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/workspace@1.0.5/module-view",
      "multibundle": true
    },
    "type": "code"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/ui/spinner', dependency_3], ['@beyond-js/ui/form', dependency_4], ['dayjs', dependency_5], ['@beyond-js/workspace/core-components', dependency_6], ['@beyond-js/workspace/hooks', dependency_7], ['@beyond-js/workspace/texts-binder', dependency_8], ['@beyond-js/workspace/ds-contexts', dependency_9], ['@beyond-js/workspace/tabs', dependency_10], ['@beyond-js/ui/preload-text', dependency_11]]);
  const {
    module
  } = __pkg.bundle;
  const React = dependency_1;
  const ReactDOM = dependency_2;
  /*******************
  alerts\alert-box.jsx
  *******************/

  function AlertBox({
    title,
    type,
    elements
  }) {
    if (!elements.length) return null;
    const output = elements.map(item => /*#__PURE__*/React.createElement("li", {
      key: item.id
    }, item.message));
    return /*#__PURE__*/React.createElement(BeyondAlert, {
      type: type
    }, /*#__PURE__*/React.createElement("h4", null, title), /*#__PURE__*/React.createElement("ul", {
      className: "alert-list"
    }, output));
  }

  /*********************
  alerts\diagnostics.jsx
  *********************/

  /*
   * Returns a string with the corresponding formatted time
   * @param int $timestamp timestamp to be parsed
   * @return string
   */

  function Diagnostics() {
    const {
      model,
      model: {
        bundles: {
          compilers
        }
      },
      texts
    } = useModuleContext();
    const [fetching, setFetching] = React.useState(compilers?.fetching);
    const [ready, setReady] = React.useState(false);
    React.useEffect(() => {
      compilers.load();
    }, []);
    useBinder([compilers], () => {
      setFetching(compilers.fetching);
      setReady(performance.now());
    });
    if (!ready || compilers.fetching) {
      return /*#__PURE__*/React.createElement("div", {
        className: "flex-container flex-space"
      }, /*#__PURE__*/React.createElement("h5", {
        className: "text-info"
      }, texts.diagnostics.fetching), /*#__PURE__*/React.createElement(BeyondSpinner, {
        active: true
      }));
    }
    const output = Array.from(model.bundles.items.values()).map(bundle => {
      return /*#__PURE__*/React.createElement(BundleDiagnostics, {
        bundle: bundle,
        key: bundle.id
      });
    });
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "beyond-alert alert-info flex-container flex-space"
    }, /*#__PURE__*/React.createElement("h5", null, texts.diagnostics.ready)), output);
  }

  /************************
  alerts\general-alerts.jsx
  ************************/

  function GeneralAlerts() {
    const {
      model
    } = useModuleContext();

    // let output = [];
    const [total, setTotal] = React.useState(model.bundles.alerts.total + model.alerts.total);
    useBinder([model], () => setTotal(model.alerts.total));
    useBinder([model.bundles], () => setTotal(model.bundles.alerts.total + model.alerts.total));
    if (total < 1) return null;
    return /*#__PURE__*/React.createElement("div", {
      className: "ds-module__alerts-section"
    }, /*#__PURE__*/React.createElement(AlertBox, {
      title: "Errors",
      elements: model.errors,
      type: "error"
    }), /*#__PURE__*/React.createElement(AlertBox, {
      title: "Warnings",
      elements: model.warnings,
      type: "warning"
    }), /*#__PURE__*/React.createElement(AlertBox, {
      title: "Errors",
      elements: model.bundles.errors,
      type: "error"
    }), /*#__PURE__*/React.createElement(AlertBox, {
      title: "Warnings",
      elements: model.bundles.warnings,
      type: "warning"
    }));
  }

  /***************
  alerts\index.jsx
  ***************/

  function AlertsSection() {
    return /*#__PURE__*/React.createElement("div", {
      className: "module__alerts-section"
    }, /*#__PURE__*/React.createElement(GeneralAlerts, null), /*#__PURE__*/React.createElement(Diagnostics, null));
  }

  /*************************************
  bundles\bundle\diagnostics\general.jsx
  *************************************/

  const GeneralDiagnostics = ({
    type,
    data
  }) => {
    if (!data || !data.length) return null;
    const clss = {
      errors: 'error-text',
      warnings: 'warning-text'
    };
    if (!clss.hasOwnProperty(type)) type = 'errors';
    const cls = `ds-diagnostics ${clss[type]}`;
    const {
      texts
    } = useModuleContext();
    const output = data.map((item, i) => /*#__PURE__*/React.createElement("li", {
      key: item.id
    }, item.message));
    return /*#__PURE__*/React.createElement("ul", {
      className: cls
    }, output);
  };

  /**********************************
  bundles\bundle\diagnostics\maps.jsx
  **********************************/

  function MapsDiagnostics({
    data
  }) {
    const {
      model: bundleModel
    } = useBundleContext();
    const {
      texts,
      model
    } = useModuleContext();
    const {
      workspace
    } = useDSWorkspaceContext();
    let type = 'error';
    const clss = {
      errors: 'error-text',
      warnings: 'warning-text'
    };
    if (!clss.hasOwnProperty(type)) type = 'errors';
    const cls = `ds-diagnostics ${clss[type]}`;
    let output = [];
    if (!data.size) return null;
    const onClick = async event => {
      event.preventDefault();
      const target = event.currentTarget;
      let {
        lineNumber,
        column
      } = target.dataset;
      lineNumber = parseInt(lineNumber);
      column = parseInt(column);
      const source = await bundleModel.getFile(target.dataset.file, 'ts');
      const position = {
        lineNumber,
        column
      };
      workspace.openFile({
        source: source,
        path: source.relative.file,
        processor: 'ts',
        position: position,
        moduleId: model.id
      });
    };
    data.forEach((item, id) => {
      output = output.concat(item.map((item, k) => {
        const path = workspace.active.application.path.replace(/\\/g, '/');
        const file = item.file?.replace(`${path}/`, '');
        return /*#__PURE__*/React.createElement("li", {
          key: `${id}.${k}`,
          className: "item__data p1"
        }, /*#__PURE__*/React.createElement("div", {
          className: "p1 error__block",
          dangerouslySetInnerHTML: {
            __html: item.message
          }
        }), item.file && /*#__PURE__*/React.createElement("div", {
          style: {
            textAlign: 'right'
          }
        }, /*#__PURE__*/React.createElement("span", {
          "data-file": item.file,
          "data-column": item.character,
          "data-line-number": item.line,
          onClick: onClick
        }, file, ": ", item.line, ": ", item.character)));
      }));
    });
    return /*#__PURE__*/React.createElement("ul", {
      className: cls
    }, output);
  }

  /************************
  bundles\bundle\header.jsx
  ************************/

  /*bundle*/function BundleHeader() {
    const {
      model,
      bundle
    } = useBundleContext();
    return /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("h4", null, model.name), /*#__PURE__*/React.createElement("div", {
      className: "secondary-text p1 flex-container flex-center-y"
    }, bundle.specifier, " ", /*#__PURE__*/React.createElement(DSIcon, {
      icon: "contentCopy"
    })));
  }

  /***********************
  bundles\bundle\index.jsx
  ***********************/

  const BundleContext = React.createContext();
  const useBundleContext = () => React.useContext(BundleContext);
  /*bundle*/function Bundle({
    item
  }) {
    const {
      model
    } = useModuleContext();
    const [cspec, setCSpec] = React.useState(model.cspec);
    useBinder([model], () => setCSpec(model.cspec));
    const value = {
      model: item,
      // BundleManager
      bundle: item.bundle
    };
    return /*#__PURE__*/React.createElement(BundleContext.Provider, {
      value: value
    }, /*#__PURE__*/React.createElement("article", {
      className: "bundle__container"
    }, /*#__PURE__*/React.createElement(BundleHeader, null), cspec && /*#__PURE__*/React.createElement(BundleState, null)));
  }

  /***************************
  bundles\bundle\processor.jsx
  ***************************/

  function BundleProcessor({
    diagnostics
  }) {
    const {
      general,
      files,
      dependencies,
      overwrites
    } = diagnostics;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GeneralDiagnostics, {
      type: "error",
      data: general
    }), /*#__PURE__*/React.createElement(MapsDiagnostics, {
      type: "error",
      data: files
    }), /*#__PURE__*/React.createElement(MapsDiagnostics, {
      type: "error",
      data: dependencies
    }), /*#__PURE__*/React.createElement(MapsDiagnostics, {
      type: "error",
      data: overwrites
    }));
  }

  /***********************
  bundles\bundle\state.jsx
  ***********************/

  function BundleState() {
    const {
      model,
      bundle
    } = useBundleContext();
    const [warnings, setwarnings] = React.useState(bundle.warnings);
    const [toggle, setToggle] = React.useState(false);
    const packager = model.packagers.active;
    let totalErrors = bundle.errors.length;
    const output = [];
    packager?.compilers.forEach(compiler => {
      const {
        general,
        files,
        overwrites,
        dependencies
      } = compiler.diagnostics;
      totalErrors = totalErrors + general.length + files.size + overwrites.size + dependencies.size;
      output.push( /*#__PURE__*/React.createElement(BundleProcessor, {
        key: compiler.id,
        diagnostics: compiler.diagnostics
      }));
    });
    const [errors, setErrors] = React.useState(totalErrors);
    return /*#__PURE__*/React.createElement("div", {
      className: "bundle__detail s--pointer"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-container flex-space",
      onClick: () => setToggle(!toggle)
    }, /*#__PURE__*/React.createElement("span", null, "Modulo validado"), /*#__PURE__*/React.createElement("span", {
      className: "detail flex-container flex-center"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-danger"
    }, totalErrors, " errors"), /*#__PURE__*/React.createElement("span", {
      className: "text-warnings"
    }, bundle.warnings.length, " warnings"))), toggle && /*#__PURE__*/React.createElement("div", {
      className: "flex-container"
    }, /*#__PURE__*/React.createElement(GeneralDiagnostics, {
      type: "error",
      data: errors
    }), /*#__PURE__*/React.createElement(GeneralDiagnostics, {
      type: "warnings",
      data: warnings
    }), output));
  }

  /****************
  bundles\index.jsx
  ****************/

  /*bundle*/function ModuleBundles() {
    const {
      model,
      model: {
        bundles
      },
      texts: {
        bundles: texts
      }
    } = useModuleContext();
    const [cspec, setCSpec] = React.useState(model.cspec);
    const output = [];
    useBinder([model], () => setCSpec(model.cspec));
    window.module = model;
    bundles.items.forEach(bundle => output.push( /*#__PURE__*/React.createElement(Bundle, {
      key: bundle.id,
      item: bundle
    })));
    return /*#__PURE__*/React.createElement("div", null, !cspec && /*#__PURE__*/React.createElement(BeyondAlert, {
      type: "info"
    }, texts.selectCspec), output);
  }

  /*******************
  components\cards.jsx
  *******************/

  function Cards() {
    const {
      model,
      texts
    } = useModuleContext();
    const [total, setTotal] = React.useState({
      consumers: model?.bundles?.consumers?.length ?? 0,
      dependencies: model?.bundles?.dependencies?.length ?? 0,
      files: model.totalFiles,
      bundles: model?.am.size ?? 0
    });
    if (!model.am?.tree.landed) return null;
    useBinder([model.bundles], () => {
      setTotal({
        consumers: model.bundles.consumers.length,
        dependencies: model.bundles.dependencies.length,
        files: model.totalFiles,
        bundles: model.bundles.items.size
      });
    });
    const {
      consumers,
      dependencies,
      files,
      bundles
    } = total;
    return /*#__PURE__*/React.createElement("div", {
      className: "container-cards"
    }, /*#__PURE__*/React.createElement(SmallCard, {
      icon: "file.consumer",
      header: texts.labels.consumers,
      content: consumers
    }), /*#__PURE__*/React.createElement(SmallCard, {
      icon: "file.dependency",
      header: texts.labels.dependencies,
      content: dependencies
    }), /*#__PURE__*/React.createElement(SmallCard, {
      icon: "fileCode",
      header: texts.labels.totalFiles,
      content: files
    }), /*#__PURE__*/React.createElement(SmallCard, {
      icon: "bundle.default",
      header: texts.labels.bundles,
      content: bundles
    }));
  }

  /*************************
  components\description.jsx
  *************************/

  function Description() {
    return /*#__PURE__*/React.createElement("section", {
      className: "columns-container"
    }, /*#__PURE__*/React.createElement(EditField, {
      field: "description"
    }));
  }

  /******************
  components\edit.jsx
  ******************/

  function EditField({
    field
  }) {
    const [edit, setEdit] = React.useState(false);
    const {
      model: {
        module
      },
      texts
    } = useModuleContext();
    const [value, setValue] = React.useState(module[field] ?? '');
    const label = texts[field];
    const fieldValue = module[field] ?? texts.empty[field];
    const toggleEdit = () => setEdit(!edit);
    const onSubmit = event => {
      event.preventDefault();
      module[field] = value;
      module.saveField(field, value);
      setEdit(!edit);
    };
    const onEdit = event => {
      const target = event.currentTarget;
      setValue(target.value);
    };
    if (edit) {
      return /*#__PURE__*/React.createElement("div", {
        className: "item-information item-information--edit"
      }, /*#__PURE__*/React.createElement("div", null, label, " "), /*#__PURE__*/React.createElement("form", {
        onSubmit: onSubmit,
        className: "form-group"
      }, /*#__PURE__*/React.createElement("input", {
        autoComplete: "off",
        onChange: onEdit,
        name: field,
        defaultValue: value
      }), /*#__PURE__*/React.createElement("div", {
        className: "form__actions"
      }, /*#__PURE__*/React.createElement(DSIconButton, {
        className: "btn primary",
        type: "submit",
        icon: "save"
      }), /*#__PURE__*/React.createElement(DSIconButton, {
        className: "circle secondary btn btn-secondary",
        onClick: toggleEdit,
        type: "button",
        icon: "close"
      }))));
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "item-information"
    }, /*#__PURE__*/React.createElement("div", null, label), /*#__PURE__*/React.createElement("div", {
      className: "description-item"
    }, /*#__PURE__*/React.createElement("p", {
      className: "p1 p-0"
    }, fieldValue), /*#__PURE__*/React.createElement(DSIconButton, {
      onClick: toggleEdit,
      icon: "edit"
    })));
  }

  /********************
  components\errors.jsx
  ********************/

  function ModuleErrors() {
    const {
      model: {
        am: {
          module
        }
      }
    } = useModuleContext();
    const errors = module.errors.map(({
      id,
      message
    }) => /*#__PURE__*/React.createElement("li", {
      key: id
    }, message));
    const warnings = module.warnings.map(({
      id,
      message
    }) => /*#__PURE__*/React.createElement("li", {
      key: id
    }, message));
    return /*#__PURE__*/React.createElement(React.Fragment, null, !!errors.length && /*#__PURE__*/React.createElement(BeyondAlert, {
      type: "danger"
    }, /*#__PURE__*/React.createElement("ul", {
      className: "list-unstyled"
    }, errors)), !!warnings.length && /*#__PURE__*/React.createElement(BeyondAlert, {
      type: "warning"
    }, /*#__PURE__*/React.createElement("ul", {
      className: "list-unstyled"
    }, warnings)));
  }

  /**********************
  components\fetching.jsx
  **********************/

  function Fetching() {
    return /*#__PURE__*/React.createElement("div", {
      className: "module_fetching-block content-centering show"
    }, /*#__PURE__*/React.createElement(DSSpinner, {
      fetching: true
    }));
  }

  /************************
  components\overwrites.jsx
  ************************/

  function Overwrites() {
    const {
      model: {
        module
      }
    } = useModuleContext();
    let {
      texts
    } = useModuleContext();
    const [open, setOpen] = React.useState(true);
    const [hasBackend, setHasBackend] = React.useState(module.backend);
    const [fetching, setFetching] = React.useState(false);
    const onCreate = event => {
      setFetching(true);
      module.createBackend();
      window.setTimeout(() => {
        setHasBackend(true);
        setFetching(false);
      }, 2000);
    };
    texts = texts.overwrites;
    const cls = `processor_block-data ${!open ? ' hide-block' : ''}`;
    return /*#__PURE__*/React.createElement(DSCard, {
      header: texts.title
    }, /*#__PURE__*/React.createElement(React.Fragment, null, hasBackend ? /*#__PURE__*/React.createElement("p", {
      className: "success--message"
    }, texts.created) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, texts.empty.description), /*#__PURE__*/React.createElement("div", {
      className: "card__actions"
    }, /*#__PURE__*/React.createElement(BeyondButton, {
      className: "primary",
      onClick: onCreate
    }, fetching ? /*#__PURE__*/React.createElement(React.Fragment, null, texts.empty.fetching, /*#__PURE__*/React.createElement(BeyondSpinner, {
      className: "on-primary"
    }), " ") : texts.empty.action)))));
  }
  /*********************
  components\preload.jsx
  *********************/

  function Preload() {
    return /*#__PURE__*/React.createElement("div", {
      className: "content-centering"
    }, /*#__PURE__*/React.createElement(DSSpinner, {
      fetching: true
    }));
  }

  /********************
  components\server.jsx
  ********************/

  function Server() {
    const {
      model: {
        module
      }
    } = useModuleContext();
    let {
      texts
    } = useModuleContext();
    const [hasBackend, setHasBackend] = React.useState(module.backend);
    const [fetching, setFetching] = React.useState();
    const onCreate = event => {
      setFetching(true);
      module.createBackend();
      window.setTimeout(() => {
        setHasBackend(true);
        setFetching(false);
      }, 2000);
    };
    texts = texts.server;
    return /*#__PURE__*/React.createElement(DSCard, {
      header: texts.title
    }, /*#__PURE__*/React.createElement(React.Fragment, null, hasBackend ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
      className: "success--message"
    }, texts.created)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, texts.empty.description), /*#__PURE__*/React.createElement("div", {
      className: "card__actions"
    }, /*#__PURE__*/React.createElement(BeyondButton, {
      className: "primary",
      onClick: onCreate
    }, fetching ? /*#__PURE__*/React.createElement(React.Fragment, null, texts.empty.fetching, /*#__PURE__*/React.createElement(BeyondSpinner, {
      className: "on-primary"
    }), " ") : texts.empty.action)))));
  }
  /*******************
  components\texts.jsx
  *******************/

  function Texts() {
    const {
      module,
      model
    } = useModuleContext();
    let {
      texts
    } = useModuleContext();
    console.warn('texts', texts);
    const [open, setOpen] = React.useState(true);
    texts = texts.txt;
    const update = event => model.updateDependencies();
    const toggleContent = event => setOpen(!open);
    const cls = `processor_block-data two-columns ${!open ? ' hide-block' : ''}`;
    /**
     * The texts property represents a bundle in beyond and contains a txt processor,
     * Is necessary to access to the bundle object that is available into the value property.
     * Later we need to get the processor to loop the files.
     *
     * @type {*}
     */
    const files = texts[processors.get('txt')]?.files;
    return /*#__PURE__*/React.createElement("article", {
      className: "bundle_processor-container"
    }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("div", {
      className: "col col-left"
    }, /*#__PURE__*/React.createElement("h6", {
      className: "upper primary-color no-pd"
    }, texts.title)), /*#__PURE__*/React.createElement("div", {
      className: "col-right"
    }, /*#__PURE__*/React.createElement(DSIconButton, {
      onClick: toggleContent,
      className: "circle expand-icon",
      icon: "expandMore"
    }))), /*#__PURE__*/React.createElement("div", {
      className: cls
    }, !module.texts.has ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, texts.empty.title), /*#__PURE__*/React.createElement("p", null, texts.empty.description)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ProcessorAlerts, {
      processor: texts
    }), /*#__PURE__*/React.createElement("div", {
      className: cls
    }, /*#__PURE__*/React.createElement(List, {
      list: files,
      title: "Files"
    })))));
  }
  /******************
  consumers\index.jsx
  ******************/

  function Consumers() {
    const {
      model,
      texts
    } = useModuleContext();
    const {
      bundlesManager: bundles
    } = model;
    const [items, setItems] = React.useState(bundles?.consumers ? bundles?.consumers : []);
    const [fetching, setFetching] = React.useState(bundles.consumers.fetching);
    const [toggle, setToggle] = React.useState(false);
    const icon = toggle ? 'arrowDropDown' : 'arrowDropUp';
    const [played, setPlayed] = React.useState(false);
    const {
      consumers,
      loadConsumers
    } = bundles;
    useBinder([bundles], () => {
      setItems(items => bundles.consumers);
      setFetching(bundles.consumers.fetching);
    });
    let output = consumers.map(item => {
      return /*#__PURE__*/React.createElement(DetailConsumerItem, {
        type: "consumers",
        bundles: bundles,
        key: item.id,
        item: item
      });
    });
    const onLoad = async event => {
      setFetching(true);
      await loadConsumers();
      setPlayed(true);
      setToggle(true);
      setFetching(false);
    };
    return /*#__PURE__*/React.createElement("article", {
      className: "ds-board__list-container"
    }, /*#__PURE__*/React.createElement("header", {
      className: "flex-container flex-space-x",
      onClick: () => setToggle(!toggle)
    }, /*#__PURE__*/React.createElement("div", null, items.length, " ", texts.consumers.legend), /*#__PURE__*/React.createElement("div", {
      className: "board__header__actions flex-container flex-center-y"
    }, !!!output.length && /*#__PURE__*/React.createElement("span", null, texts.consumers.callToAction), /*#__PURE__*/React.createElement(ProcessButton, {
      className: "primary",
      icon: "refresh",
      onClick: onLoad,
      label: texts.consumers.actions.load
    }))), /*#__PURE__*/React.createElement("section", {
      className: "ds-board__list-container"
    }, output));
  }

  /**********************
  declarations\detail.jsx
  **********************/

  function DeclarationsDetail({
    trace
  }) {
    const [toggle, setToggle] = React.useState(false);
    const errors = trace.errors.map((item, i) => /*#__PURE__*/React.createElement("li", {
      key: i
    }, item));
    return /*#__PURE__*/React.createElement("div", {
      className: "bundle__detail s--pointer"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-container flex-space",
      onClick: () => setToggle(!toggle)
    }, /*#__PURE__*/React.createElement("span", null, trace.bundle)), toggle && /*#__PURE__*/React.createElement("div", {
      className: "flex-container"
    }, /*#__PURE__*/React.createElement("article", {
      className: "bundle__container"
    }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("ul", {
      className: "ds-diagnostics error-text"
    }, errors)))));
  }

  /*********************
  declarations\index.jsx
  *********************/

  function Declarations() {
    const {
      model,
      texts
    } = useModuleContext();
    const [items, setItems] = React.useState(undefined);
    useBinder([model], () => setItems(model.declarationTrace));
    let output;
    if (!items) {
      return /*#__PURE__*/React.createElement("h4", null, texts.declarations.notProcessed);
    }
    if (!items.length) {
      return /*#__PURE__*/React.createElement("h4", null, texts.declarations.success);
    }
    output = items.map(trace => /*#__PURE__*/React.createElement(DeclarationsDetail, {
      key: trace.bundle,
      trace: trace
    }));
    return /*#__PURE__*/React.createElement(React.Fragment, null, output);
  }

  /*********************
  dependencies\index.jsx
  *********************/

  function ListDependencies() {
    const {
      model,
      texts
    } = useModuleContext();
    const {
      bundles
    } = model;
    const [items, setItems] = React.useState(bundles?.dependencies ? bundles?.dependencies : []);
    const [fetching, setFetching] = React.useState(false);
    const [toggle, setToggle] = React.useState(false);
    const [played, setPlayed] = React.useState(false);
    const icon = toggle ? 'arrowDropDown' : 'arrowDropUp';
    const analyzerIcon = !played ? "play" : "refresh";
    useBinder([bundles], () => setItems(items => bundles.dependencies));
    if (!bundles.dependencies) return null;
    let output = bundles.dependencies.map(item => /*#__PURE__*/React.createElement(DetailItem, {
      bundles: bundles,
      type: "dependencies",
      key: item.id,
      item: item
    }));
    const onLoad = async event => {
      setFetching(true);
      await bundles.loadDependencies();
      setFetching(false);
      setPlayed(true);
    };
    return /*#__PURE__*/React.createElement("article", {
      className: "ds-board__list-container"
    }, /*#__PURE__*/React.createElement("header", {
      className: "flex-container flex-space-x",
      onClick: () => setToggle(!toggle)
    }, /*#__PURE__*/React.createElement("div", null, items.length, " ", texts.dependencies.legend), /*#__PURE__*/React.createElement("div", {
      className: "board__header__actions flex-container flex-center-y"
    }, !!!output.length && /*#__PURE__*/React.createElement("span", null, texts.dependencies.callToAction), /*#__PURE__*/React.createElement(ProcessButton, {
      className: "primary",
      icon: "refresh",
      onClick: onLoad,
      label: texts.dependencies.actions.load
    }))), /*#__PURE__*/React.createElement("section", {
      className: "ds-board__list-container"
    }, output));
  }

  /******************
  detail\consumer.jsx
  ******************/

  function DetailConsumerItem({
    item,
    type
  }) {
    const {
      workspace
    } = useDSWorkspaceContext();
    const {
      project,
      model
    } = useModuleContext();
    let output = [];
    const openBoard = event => {
      workspace.openBoard('module', {
        label: item.module.name,
        moduleId: item.module.id,
        projectId: project.application.id
      });
    };
    const {
      dependency,
      consumer
    } = item;
    const object = type === 'dependency' ? dependency : consumer;
    const onCheck = async event => {
      event.stopPropagation();
      try {
        const module = await workspace.active.moduleManager.load(item.module.id);
        // cons
      } catch (e) {
        console.warn(e);
      }
    };
    return /*#__PURE__*/React.createElement("article", {
      className: "ds-item_list ds-item_list--sm"
    }, /*#__PURE__*/React.createElement("section", null, object.bundle.specifier), item.module && /*#__PURE__*/React.createElement("section", {
      className: "right-col actions"
    }, /*#__PURE__*/React.createElement(DSIconButton, {
      onClick: openBoard,
      className: " secondary",
      icon: "arrowForward"
    })), output);
  }

  /**************
  detail\item.jsx
  **************/

  function DetailItem({
    item,
    type
  }) {
    const {
      workspace
    } = useDSWorkspaceContext();
    const {
      project,
      model
    } = useModuleContext();
    let output = [];
    const openBoard = event => {
      workspace.openBoard('module', {
        label: item.module.name,
        moduleId: item.module.id,
        projectId: project.application.id
      });
    };
    const {
      dependency
    } = item;
    const onCheck = async event => {
      event.stopPropagation();
      try {
        const module = await workspace.active.moduleManager.load(item.module.id);
        // cons
      } catch (e) {
        console.warn(e);
      }
    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("article", {
      className: "ds-item_list ds-item_list--sm"
    }, /*#__PURE__*/React.createElement("section", null, dependency.specifier), item.module && /*#__PURE__*/React.createElement("section", {
      className: "right-col actions"
    }, /*#__PURE__*/React.createElement(DSIconButton, {
      onClick: onCheck,
      className: "secondary",
      icon: "play"
    }), /*#__PURE__*/React.createElement(DSIconButton, {
      onClick: openBoard,
      className: " secondary",
      icon: "arrowForward"
    })), output));
  }

  /*****************
  header\bundles.jsx
  *****************/

  function BundlesTags() {
    const {
      model
    } = useModuleContext();
    const items = [...model.bundles.items.keys()].map(item => /*#__PURE__*/React.createElement("span", {
      key: `p-${item}`,
      className: "badge-item"
    }, item));
    return /*#__PURE__*/React.createElement("div", {
      className: "badge-list"
    }, items);
  }

  /************************************
  header\distributions\badges\index.jsx
  ************************************/

  const BadgesContext = React.createContext();
  const useBadgesContext = () => React.useContext(BadgesContext);
  function Badges({
    children,
    fetching,
    onSelect
  }) {
    const [selected, setSelected] = React.useState();
    const onClickSelect = value => {
      if (fetching) return;
      setSelected(value);
      if (onSelect) onSelect(value);
    };
    const value = {
      selected,
      onSelect: onClickSelect,
      fetching
    };
    const cls = `ds-badge__container${fetching ? ' is-fetching' : ''}`;
    return /*#__PURE__*/React.createElement(BadgesContext.Provider, {
      value: value
    }, /*#__PURE__*/React.createElement("div", {
      className: cls
    }, children));
  }

  /***********************************
  header\distributions\badges\item.jsx
  ***********************************/

  function BadgeItem({
    item
  }) {
    // const [selected, set]
    const {
      selected,
      onSelect
    } = useBadgesContext();
    const onClick = async event => {
      event.stopPropagation();
      onSelect(item.id);
    };
    const cls = `ds-badge ds-badge--secondary${selected === item.id ? ' ds-badge--selected' : ''}`;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      onClick: onClick,
      className: cls
    }, item.name));
  }

  /*****************************
  header\distributions\index.jsx
  *****************************/

  function CSpecs() {
    const {
      model,
      texts,
      application: {
        deployment: {
          distributions
        }
      }
    } = useModuleContext();
    const [fetching, setFetching] = React.useState(false);
    const items = [...distributions.values()].map(item => {
      return /*#__PURE__*/React.createElement(BadgeItem, {
        item: item,
        key: `${item.id}.${item.name}`
      });
    });
    const onSelect = async cspec => {
      setFetching(true);
      await model.bundles.loadPackagers(cspec);
      model.cspec = cspec;
      setFetching(false);
    };
    return /*#__PURE__*/React.createElement("section", {
      className: "module-view__header__section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "label__section"
    }, texts.labels.distributions), /*#__PURE__*/React.createElement("div", {
      className: "section__detail"
    }, /*#__PURE__*/React.createElement(Badges, {
      fetching: fetching,
      onSelect: onSelect
    }, items)));
  }

  /***************
  header\index.jsx
  ***************/

  function Header() {
    const {
      model,
      application
    } = useModuleContext();
    const {
      workspace
    } = useDSWorkspaceContext();
    const {
      am
    } = model;
    const link = am.route ? `${application.url}${am.route.toLowerCase()}` : '';
    const [showPath, setShowPath] = React.useState(false);
    const [fetching, setFetching] = React.useState(false);
    const togglePath = () => setShowPath(!showPath);
    const changeProperty = event => {
      const target = event.currentTarget;
      am.saveField(target.name, target.checked);
    };
    const open = event => {
      event.preventDefault();
      workspace.openNavigator(application.id, link);
    };
    const declarations = async event => {
      setFetching(true);
      await model.generateDeclarations();
      setFetching(false);
    };
    const path = showPath ? am.module.path : am.module.subpath;
    const cls = `module-view__header__section${fetching ? ' is-fetching' : ''}`;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
      className: "module-view__header"
    }, /*#__PURE__*/React.createElement("section", {
      className: "module-view__header__section start--column"
    }, /*#__PURE__*/React.createElement("h4", null, model.am.name), /*#__PURE__*/React.createElement("div", {
      className: "header__detail"
    }, /*#__PURE__*/React.createElement(DSIcon, {
      icon: "eye",
      onClick: togglePath
    }), /*#__PURE__*/React.createElement("span", null, path)), /*#__PURE__*/React.createElement("div", {
      className: "header__detail"
    }, /*#__PURE__*/React.createElement(DSIcon, {
      icon: "contentCopy",
      onClick: togglePath
    }), /*#__PURE__*/React.createElement("span", null, am.module.specifier))), /*#__PURE__*/React.createElement("div", {
      className: "module-view__header__rows"
    }, /*#__PURE__*/React.createElement(ModulePlatforms, null), /*#__PURE__*/React.createElement(CSpecs, null)), /*#__PURE__*/React.createElement("div", {
      className: cls
    }, /*#__PURE__*/React.createElement(DSIconButton, {
      icon: "declarations",
      onClick: declarations
    }))));
  }

  /************************
  header\platforms\edit.jsx
  ************************/

  function EditModulePlatforms({
    setEdit
  }) {
    const {
      texts: {
        platforms: texts
      },
      model,
      model: {
        am: {
          module
        }
      }
    } = useModuleContext();
    const platforms = ["ios", "deno", "web", "node", "android", "ssr"];
    const [fetching, setFetching] = React.useState(false);
    const [selected, setSelected] = React.useState(new Set(module.platforms));
    const onEdit = async event => {
      try {
        event.stopPropagation();
        event.preventDefault();
        setFetching(true);
        const response = await module.save({
          platforms: [...selected]
        });
        if (!response.status) {
          return;
        }
        setEdit(false);
      } catch (e) {}
    };
    const output = platforms.map(item => {
      const onClick = event => {
        event.stopPropagation();
        selected.has(item) ? selected.delete(item) : selected.add(item);
        setSelected(new Set([...selected]));
      };
      const cls = `platform-icon ${selected.has(item) ? ' platform--selected' : ''}`;
      return /*#__PURE__*/React.createElement(DSIcon, {
        onClick: onClick,
        title: item,
        icon: item,
        key: `${item}.edit`,
        className: cls
      });
    });
    const selectedText = selected.size === 1 ? texts.selected.unique : texts.selected.multiple;
    const cls = `module-view__header__section${fetching ? ' is-fetching' : ''}`;
    return /*#__PURE__*/React.createElement("section", {
      className: cls
    }, /*#__PURE__*/React.createElement("div", null, texts.label, ":"), /*#__PURE__*/React.createElement("div", {
      className: "icons__container--edit"
    }, output), /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement(ProcessIconButton, {
      icon: "save",
      title: texts.actions.save,
      onClick: onEdit,
      wait: false
    }), /*#__PURE__*/React.createElement("span", null, texts.label, " ", selected.size, " ", selectedText)));
  }

  /*************************
  header\platforms\index.jsx
  *************************/

  function ModulePlatforms() {
    const [edit, setEdit] = React.useState();
    const {
      texts: {
        platforms: texts
      },
      model: {
        am: {
          module
        }
      }
    } = useModuleContext();
    const onEdit = event => {
      event.stopPropagation();
      event.preventDefault();
      setEdit(true);
    };
    if (edit) return /*#__PURE__*/React.createElement(EditModulePlatforms, {
      setEdit: setEdit
    });
    let output = module.platforms.map(item => /*#__PURE__*/React.createElement(DSIcon, {
      icon: item,
      key: item,
      title: item
    }));
    return /*#__PURE__*/React.createElement("section", {
      className: "module-view__header__section "
    }, /*#__PURE__*/React.createElement("div", {
      className: "label__section"
    }, texts.label, ":"), /*#__PURE__*/React.createElement("div", {
      className: "section__detail flex-container flex-center-y"
    }, /*#__PURE__*/React.createElement("div", {
      className: "icons__container flex-container flex-center-y"
    }, output), /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement(DSIconButton, {
      icon: "edit",
      onClick: onEdit
    }))));
  }

  /*****************
  header\preload.jsx
  *****************/

  function HeaderPreload() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
      style: {
        height: '132px'
      },
      className: "module-view__header "
    }, /*#__PURE__*/React.createElement("section", {
      className: "module-view__header__section start--column"
    }, /*#__PURE__*/React.createElement("h4", null, /*#__PURE__*/React.createElement(BeyondPreloadText, {
      height: "9px",
      width: "100px"
    })), /*#__PURE__*/React.createElement("div", {
      className: "header__detail"
    }, /*#__PURE__*/React.createElement(DSIcon, {
      icon: "eye"
    }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(BeyondPreloadText, {
      height: "8px",
      width: "100px"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "header__detail"
    }, /*#__PURE__*/React.createElement(DSIcon, {
      icon: "contentCopy"
    }), /*#__PURE__*/React.createElement(BeyondPreloadText, {
      height: "8px",
      width: "100px"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "module-view__header__rows"
    }, /*#__PURE__*/React.createElement("div", {
      className: "module-view__header__section"
    }), /*#__PURE__*/React.createElement("div", {
      className: "module-view__header__section"
    }))));
  }

  /********
  index.jsx
  ********/

  const ModuleContext = React.createContext();
  const useModuleContext = () => React.useContext(ModuleContext);
  function ModuleBoard(props) {
    const {
      specs
    } = props;
    let {
      workspace,
      navigateModule,
      panel
    } = useDSWorkspaceContext();
    const [model, setModel] = React.useState();
    const [ready, setReady] = React.useState();
    const [project, setProject] = React.useState();
    const module = __pkg.bundle.module.specifier;
    const [textsReady, texts] = useTextsBinder(module);
    React.useEffect(() => {
      workspace.getProject(specs.projectId).then(project => {
        setProject(project);
        const set = module => {
          setModel(module);
        };
        workspace.getModuleManager(specs.projectId, specs.moduleId).then(set);
      });
    }, [specs.projectId, specs.moduleId]);
    useBinder([model], () => setReady(model.ready));
    //TODO: @julio remove this logic
    React.useEffect(() => {
      if ([undefined, null].includes(specs?.moduleId)) return;
      moduleManager.load(specs.moduleId).then(model => {
        panel.setTabName(specs.moduleId, model.name);
      });
    }, [specs.moduleId]);
    if (!specs.moduleId || !textsReady || !model?.ready || specs.moduleId !== model.id) {
      return /*#__PURE__*/React.createElement(ModulePreload, null);
    }
    const {
      bundles,
      consumers,
      dependencies,
      declarations,
      settings
    } = texts.labels;
    return /*#__PURE__*/React.createElement(ModuleContext.Provider, {
      value: {
        model,
        navigateModule,
        texts,
        application: project.application,
        project
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "ds-module-view__detail ds__board"
    }, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(ModuleErrors, null), /*#__PURE__*/React.createElement("div", {
      className: "ds__board__tabs-container"
    }, /*#__PURE__*/React.createElement(TabsContainer, null, /*#__PURE__*/React.createElement(Tabs, {
      tabs: [bundles, consumers, dependencies, declarations, settings]
    }), /*#__PURE__*/React.createElement(Board, null, /*#__PURE__*/React.createElement(ModuleBundles, null), /*#__PURE__*/React.createElement(Consumers, null), /*#__PURE__*/React.createElement(ListDependencies, null), /*#__PURE__*/React.createElement(Declarations, null), /*#__PURE__*/React.createElement(React.Fragment, null))))));
  }

  /****************
  preload\index.jsx
  ****************/

  function ModulePreload() {
    return /*#__PURE__*/React.createElement("div", {
      className: "ds-module-view__detail ds__board"
    }, /*#__PURE__*/React.createElement(HeaderPreload, null), /*#__PURE__*/React.createElement("div", {
      className: "ds__board__tabs-container"
    }, /*#__PURE__*/React.createElement(TabsContainer, null, /*#__PURE__*/React.createElement(Tabs, {
      preload: true,
      tabs: ["", "", "", ""]
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DSSpinner, null)))));
  }

  /***************************
  processsors\dependencies.jsx
  ***************************/

  function Dependencies({
    processor
  }) {
    const {
      module,
      model
    } = useModuleContext();
    let {
      texts
    } = useModuleContext();
    const [open, setOpen] = React.useState(true);
    if (!model.bundle?.hasProcessor('ts')) return null;
    texts = texts.dependencies;
    const update = event => model.updateDependencies();
    const toggleContent = event => setOpen(!open);
    const cls = `processor_block-data two-columns ${!open ? ' hide-block' : ''}`;
    const files = module.dependencies?.files?.map(file => /*#__PURE__*/React.createElement("li", {
      key: file
    }, file));
    return /*#__PURE__*/React.createElement("article", {
      className: "bundle_processor-container"
    }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("div", {
      className: "col col-left"
    }, /*#__PURE__*/React.createElement("h6", {
      className: "upper primary-color no-pd"
    }, texts.title)), /*#__PURE__*/React.createElement("div", {
      className: "col-right"
    }, "Files ", module.dependencies?.files?.length, /*#__PURE__*/React.createElement(DSIconButton, {
      onClick: toggleContent,
      className: "circle expand-icon",
      icon: "expandMore"
    }))), /*#__PURE__*/React.createElement("div", {
      className: cls
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
      className: "p2 primary-color bundle-processor_title"
    }, texts.subtitle, /*#__PURE__*/React.createElement("div", {
      className: "pull-right"
    }, /*#__PURE__*/React.createElement(DSIconButton, {
      onClick: update,
      icon: "refresh",
      className: "circle small-icon"
    }))), module.dependencies.files?.length ? /*#__PURE__*/React.createElement("ul", null, files, " ") : /*#__PURE__*/React.createElement("div", null, texts.empty))));
  }

  /*******************************
  processsors\processor\alerts.jsx
  *******************************/

  function ProcessorAlerts({
    warnings,
    errors
  }) {
    if (!warnings || !errors) return null;
    let alerts = [];
    const {
      texts
    } = useModuleContext();
    const print = (item, key, type, identifier = undefined) => {
      return /*#__PURE__*/React.createElement("li", {
        key: `module-${key}-${type}`
      }, /*#__PURE__*/React.createElement(DSIcon, {
        className: `icon-${type}`,
        name: type
      }), /*#__PURE__*/React.createElement("div", {
        className: "content"
      }, identifier && /*#__PURE__*/React.createElement("strong", null, identifier, " "), /*#__PURE__*/React.createElement("span", null, item)));
    };
    const showAlerts = (warnings, errors, key) => {
      const wmessages = warnings.map((warning, id) => print(warning, `${key}-${id}`, 'warning'));
      const emessages = errors.map((errors, id) => print(errors, `${key}-${id}`, 'error'));
      alerts = alerts.concat(wmessages, emessages);
    };
    showAlerts(errors.processor, warnings.processor, "processor");
    showAlerts(errors.files, warnings.files, "files");
    showAlerts(errors.overwrites, warnings.overwrites, "overwrites");
    if (!alerts.length) return null;
    return /*#__PURE__*/React.createElement("div", {
      className: "processor_block-data separator  "
    }, /*#__PURE__*/React.createElement("h4", {
      className: "p2 primary-color"
    }, texts.processors.alerts), /*#__PURE__*/React.createElement("ul", {
      className: "list-icon list-unstyled grid-center-y"
    }, alerts));
  }

  /*******************************
  processsors\processor\header.jsx
  *******************************/

  function ProcessorHeader({
    toggleContent,
    processor
  }) {
    const {
      texts,
      module
    } = useModuleContext();
    //TODO: @julio check declarations
    const declarations = event => {
      if (module.declarations) {
        module.declarations.update();
      }
    };
    return /*#__PURE__*/React.createElement("header", {
      className: "ds-info__header"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col col-left"
    }, /*#__PURE__*/React.createElement("h6", {
      className: "upper primary-color no-pd"
    }, texts.processors[processor.name])), /*#__PURE__*/React.createElement("div", {
      className: "col-right"
    }, processor.name === 'ts' && /*#__PURE__*/React.createElement("span", {
      className: "btn link",
      onClick: declarations
    }, texts.actions.declarations), "Files ", processor.files.items.length, /*#__PURE__*/React.createElement(DSIconButton, {
      onClick: toggleContent,
      className: "circle expand-icon",
      icon: "expandMore"
    })));
  }

  /*****************************
  processsors\processor\list.jsx
  *****************************/

  function List({
    list,
    title,
    processor
  }) {
    const {
      closeModal,
      application,
      model: {
        bundle,
        moduleId
      }
    } = useModuleContext();
    const output = list?.items.map((file, i) => {
      let specs = {
        applicationId: application.id,
        moduleId: moduleId,
        bundle: bundle.name,
        file: file.filename,
        processor: processor
      };
      const qs = new URLSearchParams(specs).toString();
      const navigate = event => {
        event.preventDefault();
        beyond.pushState(`/editor?${qs}`);
        //the boolean is used to avoid beyond.back fires by default
        // in the closeModal method.
        closeModal(false);
      };
      return /*#__PURE__*/React.createElement("li", {
        key: `${file.filename}-${i}`
      }, /*#__PURE__*/React.createElement("a", {
        href: "#",
        onClick: navigate
      }, file.filename));
    });
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
      className: "p2 primary-color bundle-processor_title"
    }, title), list?.items?.length ? /*#__PURE__*/React.createElement("ul", null, output) : /*#__PURE__*/React.createElement("div", null, "No hay archivos"));
  }
  /**********************************
  processsors\processor\processor.jsx
  **********************************/

  function Processor({
    processor
  }) {
    const [open, setOpen] = React.useState(true);
    const toggleContent = event => setOpen(!open);
    const cls = `processor_block-data two-columns ${!open ? ' hide-block' : ''}`;
    return /*#__PURE__*/React.createElement("article", {
      className: "bundle_processor-container",
      key: processor.id
    }, /*#__PURE__*/React.createElement(ProcessorHeader, {
      toggleContent: toggleContent,
      processor: processor
    }), /*#__PURE__*/React.createElement(ProcessorAlerts, {
      processor: processor
    }), /*#__PURE__*/React.createElement("div", {
      className: cls
    }, /*#__PURE__*/React.createElement(List, {
      list: processor.files,
      title: "Files",
      processor: processor.name
    }), /*#__PURE__*/React.createElement(List, {
      list: processor.overwrites,
      title: "overwrites",
      processor: processor.name
    })));
  }
  /*************************
  processsors\processors.jsx
  *************************/

  function Processors() {
    const {
      model
    } = useModuleContext();
    const {
      bundle: {
        processors
      }
    } = model;
    const output = [];
    processors.forEach(processor => output.push( /*#__PURE__*/React.createElement(Processor, {
      processor: processor,
      key: processor.id
    })));
    return /*#__PURE__*/React.createElement(React.Fragment, null, output);
  }
  /************************
  processsors\use-model.jsx
  ************************/

  function useModel(specs) {
    const [model, setModel] = React.useState(moduleManager.active);
    const module = __pkg.bundle.module.specifier;
    const [textsReady] = useTextsBinder(module);
    const {
      panel
    } = useDSWorkspaceContext();
    React.useEffect(() => {
      let model;
      (async () => {
        if ([undefined, null].includes(specs?.moduleId)) return;
        model = await moduleManager.load(specs.moduleId);
        setModel(model);
        window.module = model;
        model.bind('change', onChange);
        panel.setTabName(specs.moduleId, model.name);
      })();
      return () => model?.unbind('change', onChange);
    }, [specs.moduleId]);
    return [textsReady, model];
  }

  /***********
  JS PROCESSOR
  ***********/

  /**********
  SCSS STYLES
  **********/
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/workspace/module-view.code', '.bundle__detail{background:var(--secondary-accent-40);font-size:.75rem;padding:.25rem 2rem}.bundle__container header{padding:1rem .5rem}.ds-diagnostics{list-style:none;width:100%}.ds-diagnostics .item__data{display:flex;gap:.5rem;justify-content:space-between}.ds-diagnostics .item__data .error__block div,.ds-diagnostics .item__data div{display:block;width:100%}.ds-diagnostics.error-text{color:var(--primary)}.ds-diagnostics.warning-text{color:var(--warning)}.ds-diagnostics li{padding:.5rem 0}.panel__container .module-view__header{display:grid;grid-template-columns:1fr 1fr auto;gap:.25rem;grid-gap:.25rem}.panel__container .module-view__header .module-view__header__rows{display:grid;grid-gap:.25rem}.panel__container .module-view__header .module-view__header__section{background:var(--secondary-accent-40);padding:1rem 2rem;display:flex;align-items:center;gap:.5rem}.panel__container .module-view__header .module-view__header__section.start--column{padding-left:2.5rem;align-items:start;flex-direction:column}.panel__container .module-view__header .module-view__header__section.start--column .header__detail{color:var(--secondary);align-items:center;letter-spacing:.28px;font-size:.9rem;gap:.5rem;display:flex}.panel__container .module-view__header .module-view__header__section.start--column .header__detail svg{fill:var(--secondary)}.panel__container .module-view__header .module-view__header__section .beyond-icon{fill:var(--text-color)}.panel__container.panel__container--divided .module-view__header{grid-template-columns:1fr}.panel__container.panel__container--divided .module-view__header .module-view__header__rows{display:flex}.panel__container.panel__container--divided .module-view__header .module-view__header__section{display:grid;flex-grow:1;gap:.2rem}.panel__container.panel__container--divided .module-view__header .module-view__header__section .section__detail{display:flex;align-items:center}.panel__container.panel__container--divided .module-view__header .module-view__header__section .label__section{display:grid}.module-view__header__section .icons__container,.module-view__header__section .icons__container--edit{display:flex;gap:.5rem;justify-items:center}.module-view__header__section .platform-icon{opacity:.5;transition:all .2s ease-in;cursor:pointer}.module-view__header__section .platform-icon.platform--selected,.module-view__header__section .platform-icon:hover{opacity:1}@keyframes move-to-right{from{width:40px}to{width:auto}}');
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