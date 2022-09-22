define(["exports", "module", "@beyond-js/kernel@0.0.22/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/ui@0.0.1/icon", "@beyond-js/ui@0.0.1/ripple"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.TabsContent = _exports.Tabs = _exports.BeyondTabs = _exports.BeyondTab = void 0;

  /*************
  LEGACY IMPORTS
  *************/
  const {
    BeyondIcon
  } = dependency_3;
  const {
    BeyondWaves
  } = dependency_4;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/ui", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/ui@0.0.1/tabs"
    },
    "type": "code"
  }, _amd_module.uri).package();

  ;

  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/ui/icon', dependency_3], ['@beyond-js/ui/ripple', dependency_4]]);

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
  /**************
  beyond-tabs.jsx
  **************/


  class BeyondTabs extends React.Component {
    render() {
      return /*#__PURE__*/React.createElement(TabsContextProvider, this.props, this.props.children);
    }

  }
  /**********
  context.jsx
  **********/


  _exports.BeyondTabs = BeyondTabs;
  const TabsContext = React.createContext();

  function TabsContextProvider({
    children,
    orientation,
    align,
    className,
    selected
  }) {
    const [active, setSelected] = React.useState(selected);
    React.useEffect(() => {
      setSelected(selected);
    }, [selected]);

    const tabNavigate = index => setSelected(index);

    const data = {
      'children': children,
      'orientation': orientation,
      'tabNavigate': tabNavigate,
      'selected': active,
      'index': selected !== active ? selected : active
    };
    orientation = orientation ? orientation : 'horizontal';
    let cls = 'beyond-tabs beyond-tabs-container ';
    cls += `${orientation === 'horizontal' ? 'beyond-tabs-horizontal' : 'beyond-tabs-vertical'}`;
    if (className) cls += ` ${className}`;
    return /*#__PURE__*/React.createElement(TabsContext.Provider, {
      value: data
    }, /*#__PURE__*/React.createElement("div", {
      className: cls
    }, children));
  }

  const useTabsContext = () => React.useContext(TabsContext);
  /******
  tab.jsx
  ******/


  const BeyondTab = props => {
    const {
      index,
      isActive,
      selected,
      nolink
    } = props;
    let cls = isActive && index === parseInt(selected) ? "beyond-tab tab-active" : "beyond-tab";
    if (props.className) cls += ` ${props.className}`;
    const attrs = { ...props
    };
    delete attrs.children;
    delete attrs.onTab;
    delete attrs.isActive;
    delete attrs.nolink;
    delete attrs.className;
    return /*#__PURE__*/React.createElement("div", _extends({
      className: cls
    }, attrs), props.children, !nolink && /*#__PURE__*/React.createElement(BeyondWaves, null));
  };
  /***************
  tabs-content.jsx
  ***************/


  _exports.BeyondTab = BeyondTab;

  class TabsContent extends React.Component {
    render() {
      const {
        children
      } = this.props;
      const content = children.find((content, index) => index === this.context.index);
      return /*#__PURE__*/React.createElement("div", {
        className: "beyond-tabs-content"
      }, content);
    }

  }

  _exports.TabsContent = TabsContent;
  TabsContent.contextType = TabsContext;
  /*******
  tabs.jsx
  *******/

  class Tabs extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        active: true,
        valueSelected: 0
      };
      this.tabNavigate = this.tabNavigate.bind(this);
    }

    tabNavigate(event, callback) {
      const target = event.currentTarget;
      const index = target.dataset.index;
      this.setState({
        'valueSelected': index,
        'active': index !== this.state.valueSelected ? true : !this.state.active
      });
      if (callback) callback(event);
      this.context.tabNavigate(parseInt(index));
    }

    render() {
      const {
        children,
        nolink,
        onTab
      } = this.props;
      const {
        active,
        valueSelected
      } = this.state;
      const output = children.map((tab, index) => {
        const props = {
          'key': index,
          'selected': this.context.selected,
          'isActive': active,
          'index': index,
          'data-index': index
        };
        if (!nolink) props.onClick = this.tabNavigate;else props.nolink = true;
        if (tab.props.onClick) props.onClick = event => this.tabNavigate(event, tab.props.onClick);
        if (tab.type === BeyondTab) return React.cloneElement(tab, props);
        return /*#__PURE__*/React.createElement(BeyondTab, _extends({}, props, {
          key: index
        }), tab);
      });
      return /*#__PURE__*/React.createElement("div", {
        className: "beyond-tabs-items"
      }, /*#__PURE__*/React.createElement("div", {
        className: "tabs-container"
      }, output));
    }

  }

  _exports.Tabs = Tabs;
  Tabs.contextType = TabsContext;
  /**********
  SCSS STYLES
  **********/

  const legacyStyles = beyondLegacyStyles.register('@beyond-js/ui/tabs', '.beyond-tabs .beyond-tabs-content{position:relative}.beyond-tabs-container{display:flex;height:100%;width:100%;position:relative;flex-direction:column}.beyond-tabs-container.beyond-tabs-vertical .beyond-tabs-items{width:50px;height:100%;position:relative}.beyond-tabs-container.beyond-tabs-vertical .beyond-tabs-items .tabs-container{position:sticky;top:8px}.beyond-tabs-container.beyond-tabs-horizontal .beyond-tabs-items{display:flex;background:#d3d3d3;height:100%}.beyond-tabs-container.beyond-tabs-horizontal .beyond-tabs-items .tabs-container{width:100%;display:flex}.beyond-tabs-container .beyond-tabs-items{z-index:999}.beyond-tabs-container .beyond-tabs-items .beyond-tab{display:flex;align-items:center;justify-content:center;position:relative;padding:15px;flex-grow:1}.beyond-tabs-container .beyond-tabs-items .beyond-tab.tab-active svg{fill:white}.beyond-tabs-container .beyond-tabs-items .beyond-tab svg{margin:auto;cursor:pointer}');
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