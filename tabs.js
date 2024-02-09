define(["exports", "module", "@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "react-dom@18.2.0", "@beyond-js/ui@0.0.1/perfect-scrollbar"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Board = Board;
  _exports.Tab = Tab;
  _exports.Tabs = Tabs;
  _exports.TabsContainer = TabsContainer;
  _exports.hmr = _exports.__beyond_pkg = void 0;
  /*************
  LEGACY IMPORTS
  *************/

  const {
    BeyondScrollContainer
  } = dependency_3;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/inspect", "0.0.1"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/local", "0.1.4"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/widgets", "0.1.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/scaffolding", "1.0.0"], ["@beyond-js/events", "0.0.6"], ["dayjs", "1.11.10"], ["emmet-monaco-es", "5.3.0"], ["monaco-editor", "0.33.0"], ["pragmate-ui", "0.0.4"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["react-split", "2.0.14"], ["socket.io-client", "4.5.4"], ["socket.io-parser", "4.2.1"], ["engine.io-parser", "5.0.7"], ["split.js", "1.6.5"], ["tippy.js", "6.3.7"], ["waves", "0.1.1"], ["@popperjs/core", "2.11.8"], ["@types/react", "16.14.56"], ["@types/react-dom", "16.9.24"], ["@beyond-js/workspace", "1.1.1"], ["@beyond-js/workspace", "1.1.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/workspace@1.1.1/tabs"
    },
    "type": "code"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/ui/perfect-scrollbar', dependency_3]]);
  const {
    module
  } = __pkg.bundle;
  const React = dependency_1;
  const ReactDOM = dependency_2;
  /***********
  _context.jsx
  ***********/

  const TabsContext = React.createContext();
  const useTabsContext = () => React.useContext(TabsContext);

  /********
  board.jsx
  ********/

  /**
   * Content of the selected tab
   * @param {*} param0
   * @returns
   */
  /*bundle*/function Board({
    children
  }) {
    const {
      selectedTab
    } = useTabsContext();
    const board = children[selectedTab];
    return /*#__PURE__*/React.createElement("div", {
      className: "ds-tabs__board"
    }, board);
  }

  /************
  container.jsx
  ************/

  function TabsContainer({
    children,
    selected = 0
  }) {
    const [selectedTab, setSelectedTab] = React.useState(selected);
    return /*#__PURE__*/React.createElement(TabsContext.Provider, {
      value: {
        selectedTab,
        setSelectedTab
      }
    }, children);
  }

  /********
  index.jsx
  ********/

  /*bundle*/function Tabs({
    tabs,
    onSelect
  }) {
    tabs.length > 0 || console.warn("The tabs property of the tab component must be an array with items!");
    const items = tabs.map((item, index) => /*#__PURE__*/React.createElement(Tab, {
      id: index,
      onSelect: onSelect,
      label: item,
      key: `${item}${index}`
    }));
    return /*#__PURE__*/React.createElement("nav", {
      className: "ds-tabs__container"
    }, /*#__PURE__*/React.createElement(BeyondScrollContainer, null, /*#__PURE__*/React.createElement("ul", {
      className: "ds-tabs__list"
    }, items)));
  }

  /************
  tab\index.jsx
  ************/

  function Tab({
    id,
    label,
    preload,
    onSelect
  }) {
    const {
      selectedTab,
      setSelectedTab
    } = useTabsContext();
    const isSelected = selectedTab === id;
    const cls = `ds-tabs__tab ${isSelected ? " ds-tabs__tab--active" : ""}`;
    function selectTab() {
      if (onSelect) onSelect(id);
      setSelectedTab(id);
    }
    const attrs = {
      className: cls
    };
    if (preload) attrs.style = {
      height: "35px"
    };
    return /*#__PURE__*/React.createElement("li", attrs, /*#__PURE__*/React.createElement("button", {
      onClick: selectTab
    }, /*#__PURE__*/React.createElement("span", {
      className: "tab-name"
    }, label)));
  }
  const ims = new Map();

  // Module exports
  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {};
  const __beyond_pkg = _exports.__beyond_pkg = __pkg;
  const hmr = _exports.hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);
    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  __pkg.initialise(ims);
});