define(["exports", "module", "@beyond-js/kernel@0.1.4/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/ui@0.0.1/perfect-scrollbar"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3) {
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
    const dependencies = new Map([["@beyond-js/inspect", "0.0.1"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/local", "0.1.2"], ["@beyond-js/kernel", "0.1.4"], ["@beyond-js/widgets", "0.1.1"], ["@beyond-js/backend", "0.1.2"], ["dayjs", "1.11.5"], ["emmet-monaco-es", "5.1.2"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.4.0"], ["react-split", "2.0.14"], ["socket.io-client", "4.5.4"], ["split.js", "1.6.5"], ["tippy.js", "6.2.5"], ["waves", "0.1.1"], ["@beyond-js/dashboard", "1.0.2"], ["@beyond-js/dashboard", "1.0.2"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/dashboard@1.0.2/tabs"
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

  /************
  container.jsx
  ************/

  function TabsContainer({
    children
  }) {
    const [selectedTab, setSelectedTab] = React.useState(0);
    return /*#__PURE__*/React.createElement(TabsContext.Provider, {
      value: {
        selectedTab,
        setSelectedTab
      }
    }, children);
  }

  /************
  tab\board.jsx
  ************/

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
  tab\index.jsx
  ************/

  function Tab({
    id,
    label,
    preload
  }) {
    const {
      selectedTab,
      setSelectedTab
    } = useTabsContext();
    const isSelected = selectedTab === id;
    const cls = `ds-tabs__tab ${isSelected ? ' ds-tabs__tab--active' : ''}`;
    function selectTab() {
      setSelectedTab(id);
    }
    const attrs = {
      className: cls
    };
    if (preload) attrs.style = {
      height: '35px'
    };
    return /*#__PURE__*/React.createElement("li", attrs, /*#__PURE__*/React.createElement("button", {
      onClick: selectTab
    }, /*#__PURE__*/React.createElement("span", {
      className: "tab-name"
    }, label)));
  }

  /*******************
  tab\tab-selector.jsx
  *******************/

  /*bundle*/function Tabs({
    tabs
  }) {
    tabs.length > 0 || console.warn('The tabs property of the tab component must be an array with items!');
    const items = tabs.map((item, index) => /*#__PURE__*/React.createElement(Tab, {
      id: index,
      label: item,
      key: `${item}${index}`
    }));
    return /*#__PURE__*/React.createElement("nav", {
      className: "ds-tabs__container"
    }, /*#__PURE__*/React.createElement(BeyondScrollContainer, null, /*#__PURE__*/React.createElement("ul", {
      className: "ds-tabs__list"
    }, items)));
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