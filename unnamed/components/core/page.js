define(["exports", "module", "@beyond-js/kernel@0.1.0/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/dashboard@0.0.1/core-components", "@beyond-js/ui@0.0.1/icon"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4) {
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
    DS_ICONS,
    DSIcon
  } = dependency_3;
  const {
    BEYOND_ICONS
  } = dependency_4;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/kernel", "0.1.0"], ["@beyond-js/widgets", "0.0.10"], ["@beyond-js/backend", "0.0.10"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/inspect", "0.0.1"], ["@beyond-js/local", "0.0.1"], ["dayjs", "1.11.5"], ["emmet-monaco-es", "5.1.2"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.4.0"], ["react-split", "2.0.14"], ["socket.io-client", "4.5.2"], ["split.js", "1.6.5"], ["tippy.js", "6.3.7"], ["waves", "0.1.1"], ["@beyond-js/dashboard", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/dashboard@0.0.1/unnamed/components/core/page"
    },
    "type": "page"
  }, _amd_module.uri).package();

  ;

  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/dashboard/core-components', dependency_3], ['@beyond-js/ui/icon', dependency_4]]);

  const {
    module
  } = __pkg.bundle;
  const React = dependency_1;
  const ReactDOM = dependency_2;
  /************
  dashboard.jsx
  ************/

  function IconsList({
    icons
  }) {
    const [filterText, setFilterText] = React.useState("");
    const [labelIcon, setLabelIcon] = React.useState('Nombre del ícono');
    const codeCopy = React.useRef();

    const filter = event => setFilterText(event.currentTarget.value);

    icons = icons.filter(item => item.includes(filterText));

    const setName = ({
      currentTarget: target
    }) => setLabelIcon(target.dataset.name);

    const copy = event => {
      /* Select the text field */
      const copyText = codeCopy.current;
      /* Copy the text inside the text field */

      navigator.clipboard.writeText(copyText.innerText);
    };

    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
      className: "input__search",
      type: "text",
      onChange: filter
    }), /*#__PURE__*/React.createElement("pre", {
      ref: codeCopy,
      onClick: copy
    }, `<DSIcon  icon="${labelIcon}"/>`), /*#__PURE__*/React.createElement("div", {
      className: "icon-list"
    }, icons.map((iconName, index) => {
      return /*#__PURE__*/React.createElement("div", {
        key: iconName,
        className: "icon-element",
        "data-name": iconName,
        onClick: setName
      }, iconName, /*#__PURE__*/React.createElement(DSIcon, {
        className: "",
        icon: iconName
      }));
    })));
  }
  /*******
  view.jsx
  *******/


  function View() {
    const ICONS = {
      dashboard: {
        title: 'Dashboard Icons',
        icons: DS_ICONS
      },
      beyondui: {
        title: 'Beyond Icons',
        icons: BEYOND_ICONS
      }
    };
    const [selected, setSelected] = React.useState(ICONS.dashboard);
    const iconsList = Object.keys(selected.icons).sort((a, b) => a.localeCompare(b));

    const changeIcons = event => {
      event.preventDefault();
      const target = event.currentTarget;
      setSelected(ICONS[target.dataset.icons]);
      target.closest('aside').querySelectorAll('div').forEach(item => item.classList.remove('active'));
      target.classList.add('active');
    };

    return /*#__PURE__*/React.createElement("div", {
      className: "page__icons-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "page__content"
    }, /*#__PURE__*/React.createElement("aside", null, /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("div", {
      "data-icons": "dashboard",
      onClick: changeIcons
    }, "Dashboard"), /*#__PURE__*/React.createElement("div", {
      "data-icons": "beyondui",
      onClick: changeIcons
    }, "Beyond"))), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("h1", null, selected.title)), /*#__PURE__*/React.createElement(IconsList, {
      icons: iconsList
    }))));
  }
  /***********
  JS PROCESSOR
  ***********/

  /************
  FILE: page.js
  ************/


  function Page() {
    ReactDOM.render(React.createElement(View, {}), this.container);
    this.container.id = 'beyond-element-icons-page';
  }
  /**********
  SCSS STYLES
  **********/


  const legacyStyles = beyondLegacyStyles.register('@beyond-js/dashboard/unnamed/components/core/page', '.page__icons-container .page__content nav{display:flex;flex-direction:column;grid-gap:8px;position:sticky;top:30px}.page__icons-container .page__content nav div{padding:15px 20px;cursor:pointer;background:var(--beyond-secondary-dark-color);transition:.3s all ease-in}.page__icons-container .page__content nav div.active,.page__icons-container .page__content nav div:hover{background:var(--beyond-primary-accent-color)}.page__icons-container{text-align:center;padding:30px}.page__icons-container header{display:flex;align-content:flex-start}.page__icons-container .page__content{display:grid;grid-template-columns:auto 1fr;gap:15px}.page__icons-container .input__search{width:100%;background:0 0;border:1px solid #fff;margin:0 0 15px 0;padding:8px;color:#fff}.page__icons-container svg{fill:white}.page__icons-container pre{display:block;padding:9.5px 20px;margin:0 0 10px;font-size:13px;text-align:left;line-height:1.42857143;color:#333;word-break:break-all;word-wrap:break-word;background-color:#f5f5f5;border:1px solid #ccc;border-radius:4px;cursor:pointer;transition:.3s all ease-in}.page__icons-container pre:hover{background:#e4e5dc}.page__icons-container .icon-list{margin-top:20px;display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr}.page__icons-container .icon-list .icon-element{text-align:center;padding:20px;font-size:16px;display:grid;grid-gap:10px;transition:250ms background-color;cursor:pointer;border:1px solid var(--beyond-secondary-dark-color)}.page__icons-container .icon-list .icon-element:hover{background:#263145;color:var(--beyond-text-on-secondary);fill:var(--beyond-text-on-secondary)}.page__icons-container .icon-list .icon-element .beyond-icon{margin:auto}');
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