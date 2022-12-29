define([], () => {

const bimport = specifier => {
	const dependencies = new Map([["emmet-monaco-es","5.1.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};

const require = () => void 0;
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = target => __defProp(target, "__esModule", {
  value: true
});
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2)) if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default")) __defProp(target, key, {
      get: () => module2[key],
      enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable
    });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */(cache => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0);

// .beyond/uimport/temp/emmet-monaco-es.5.1.2.js
var emmet_monaco_es_5_1_2_exports = {};
__export(emmet_monaco_es_5_1_2_exports, {
  emmetCSS: () => emmetCSS,
  emmetHTML: () => emmetHTML,
  emmetJSX: () => emmetJSX,
  expandAbbreviation: () => expandAbbreviation
});

// node_modules/emmet-monaco-es/dist/emmet-monaco.esm.js
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function isNumber$1(code2) {
  return code2 > 47 && code2 < 58;
}
function isAlpha$1(code2, from, to) {
  from = from || 65;
  to = to || 90;
  code2 &= ~32;
  return code2 >= from && code2 <= to;
}
function isAlphaNumericWord(code2) {
  return isNumber$1(code2) || isAlphaWord(code2);
}
function isAlphaWord(code2) {
  return code2 === 95 || isAlpha$1(code2);
}
function isWhiteSpace$3(code2) {
  return code2 === 32 || code2 === 9 || code2 === 160;
}
function isSpace(code2) {
  return isWhiteSpace$3(code2) || code2 === 10 || code2 === 13;
}
function isQuote$2(code2) {
  return code2 === 39 || code2 === 34;
}
var Scanner = class {
  constructor(str, start, end) {
    if (end == null && typeof str === "string") {
      end = str.length;
    }
    this.string = str;
    this.pos = this.start = start || 0;
    this.end = end || 0;
  }
  eof() {
    return this.pos >= this.end;
  }
  limit(start, end) {
    return new Scanner(this.string, start, end);
  }
  peek() {
    return this.string.charCodeAt(this.pos);
  }
  next() {
    if (this.pos < this.string.length) {
      return this.string.charCodeAt(this.pos++);
    }
  }
  eat(match) {
    const ch = this.peek();
    const ok = typeof match === "function" ? match(ch) : ch === match;
    if (ok) {
      this.next();
    }
    return ok;
  }
  eatWhile(match) {
    const start = this.pos;
    while (!this.eof() && this.eat(match)) {}
    return this.pos !== start;
  }
  backUp(n) {
    this.pos -= n || 1;
  }
  current() {
    return this.substring(this.start, this.pos);
  }
  substring(start, end) {
    return this.string.slice(start, end);
  }
  error(message, pos = this.pos) {
    return new ScannerError(`${message} at ${pos + 1}`, pos, this.string);
  }
};
var ScannerError = class extends Error {
  constructor(message, pos, str) {
    super(message);
    this.pos = pos;
    this.string = str;
  }
};
function tokenScanner$1(tokens) {
  return {
    tokens,
    start: 0,
    pos: 0,
    size: tokens.length
  };
}
function peek$3(scanner) {
  return scanner.tokens[scanner.pos];
}
function next(scanner) {
  return scanner.tokens[scanner.pos++];
}
function slice(scanner, from = scanner.start, to = scanner.pos) {
  return scanner.tokens.slice(from, to);
}
function readable$1(scanner) {
  return scanner.pos < scanner.size;
}
function consume$2(scanner, test) {
  const token = peek$3(scanner);
  if (token && test(token)) {
    scanner.pos++;
    return true;
  }
  return false;
}
function error$1(scanner, message, token = peek$3(scanner)) {
  if (token && token.start != null) {
    message += ` at ${token.start}`;
  }
  const err = new Error(message);
  err["pos"] = token && token.start;
  return err;
}
function abbreviation(abbr, options = {}) {
  const scanner = tokenScanner$1(abbr);
  const result = statements(scanner, options);
  if (readable$1(scanner)) {
    throw error$1(scanner, "Unexpected character");
  }
  return result;
}
function statements(scanner, options) {
  const result = {
    type: "TokenGroup",
    elements: []
  };
  let ctx = result;
  let node;
  const stack = [];
  while (readable$1(scanner)) {
    if (node = element$2(scanner, options) || group(scanner, options)) {
      ctx.elements.push(node);
      if (consume$2(scanner, isChildOperator)) {
        stack.push(ctx);
        ctx = node;
      } else if (consume$2(scanner, isSiblingOperator$1)) {
        continue;
      } else if (consume$2(scanner, isClimbOperator)) {
        do {
          if (stack.length) {
            ctx = stack.pop();
          }
        } while (consume$2(scanner, isClimbOperator));
      }
    } else {
      break;
    }
  }
  return result;
}
function group(scanner, options) {
  if (consume$2(scanner, isGroupStart)) {
    const result = statements(scanner, options);
    const token = next(scanner);
    if (isBracket$2(token, "group", false)) {
      result.repeat = repeater(scanner);
    }
    return result;
  }
}
function element$2(scanner, options) {
  let attr;
  const elem = {
    type: "TokenElement",
    name: void 0,
    attributes: void 0,
    value: void 0,
    repeat: void 0,
    selfClose: false,
    elements: []
  };
  if (elementName(scanner, options)) {
    elem.name = slice(scanner);
  }
  while (readable$1(scanner)) {
    scanner.start = scanner.pos;
    if (!elem.repeat && !isEmpty(elem) && consume$2(scanner, isRepeater)) {
      elem.repeat = scanner.tokens[scanner.pos - 1];
    } else if (!elem.value && text(scanner)) {
      elem.value = getText(scanner);
    } else if (attr = shortAttribute(scanner, "id", options) || shortAttribute(scanner, "class", options) || attributeSet(scanner)) {
      if (!elem.attributes) {
        elem.attributes = Array.isArray(attr) ? attr.slice() : [attr];
      } else {
        elem.attributes = elem.attributes.concat(attr);
      }
    } else {
      if (!isEmpty(elem) && consume$2(scanner, isCloseOperator)) {
        elem.selfClose = true;
        if (!elem.repeat && consume$2(scanner, isRepeater)) {
          elem.repeat = scanner.tokens[scanner.pos - 1];
        }
      }
      break;
    }
  }
  return !isEmpty(elem) ? elem : void 0;
}
function attributeSet(scanner) {
  if (consume$2(scanner, isAttributeSetStart)) {
    const attributes = [];
    let attr;
    while (readable$1(scanner)) {
      if (attr = attribute(scanner)) {
        attributes.push(attr);
      } else if (consume$2(scanner, isAttributeSetEnd)) {
        break;
      } else if (!consume$2(scanner, isWhiteSpace$2)) {
        throw error$1(scanner, `Unexpected "${peek$3(scanner).type}" token`);
      }
    }
    return attributes;
  }
}
function shortAttribute(scanner, type, options) {
  if (isOperator$1(peek$3(scanner), type)) {
    scanner.pos++;
    const attr = {
      name: [createLiteral$1(type)]
    };
    if (options.jsx && text(scanner)) {
      attr.value = getText(scanner);
      attr.expression = true;
    } else {
      attr.value = literal$2(scanner) ? slice(scanner) : void 0;
    }
    return attr;
  }
}
function attribute(scanner) {
  if (quoted(scanner)) {
    return {
      value: slice(scanner)
    };
  }
  if (literal$2(scanner, true)) {
    return {
      name: slice(scanner),
      value: consume$2(scanner, isEquals) && (quoted(scanner) || literal$2(scanner, true)) ? slice(scanner) : void 0
    };
  }
}
function repeater(scanner) {
  return isRepeater(peek$3(scanner)) ? scanner.tokens[scanner.pos++] : void 0;
}
function quoted(scanner) {
  const start = scanner.pos;
  const quote2 = peek$3(scanner);
  if (isQuote$1(quote2)) {
    scanner.pos++;
    while (readable$1(scanner)) {
      if (isQuote$1(next(scanner), quote2.single)) {
        scanner.start = start;
        return true;
      }
    }
    throw error$1(scanner, "Unclosed quote", quote2);
  }
  return false;
}
function literal$2(scanner, allowBrackets) {
  const start = scanner.pos;
  const brackets = {
    attribute: 0,
    expression: 0,
    group: 0
  };
  while (readable$1(scanner)) {
    const token = peek$3(scanner);
    if (brackets.expression) {
      if (isBracket$2(token, "expression")) {
        brackets[token.context] += token.open ? 1 : -1;
      }
    } else if (isQuote$1(token) || isOperator$1(token) || isWhiteSpace$2(token) || isRepeater(token)) {
      break;
    } else if (isBracket$2(token)) {
      if (!allowBrackets) {
        break;
      }
      if (token.open) {
        brackets[token.context]++;
      } else if (!brackets[token.context]) {
        break;
      } else {
        brackets[token.context]--;
      }
    }
    scanner.pos++;
  }
  if (start !== scanner.pos) {
    scanner.start = start;
    return true;
  }
  return false;
}
function elementName(scanner, options) {
  const start = scanner.pos;
  if (options.jsx && consume$2(scanner, isCapitalizedLiteral)) {
    while (readable$1(scanner)) {
      const {
        pos
      } = scanner;
      if (!consume$2(scanner, isClassNameOperator) || !consume$2(scanner, isCapitalizedLiteral)) {
        scanner.pos = pos;
        break;
      }
    }
  }
  while (readable$1(scanner) && consume$2(scanner, isElementName)) {}
  if (scanner.pos !== start) {
    scanner.start = start;
    return true;
  }
  return false;
}
function text(scanner) {
  const start = scanner.pos;
  if (consume$2(scanner, isTextStart)) {
    let brackets = 0;
    while (readable$1(scanner)) {
      const token = next(scanner);
      if (isBracket$2(token, "expression")) {
        if (token.open) {
          brackets++;
        } else if (!brackets) {
          break;
        } else {
          brackets--;
        }
      }
    }
    scanner.start = start;
    return true;
  }
  return false;
}
function getText(scanner) {
  let from = scanner.start;
  let to = scanner.pos;
  if (isBracket$2(scanner.tokens[from], "expression", true)) {
    from++;
  }
  if (isBracket$2(scanner.tokens[to - 1], "expression", false)) {
    to--;
  }
  return slice(scanner, from, to);
}
function isBracket$2(token, context, isOpen) {
  return Boolean(token && token.type === "Bracket" && (!context || token.context === context) && (isOpen == null || token.open === isOpen));
}
function isOperator$1(token, type) {
  return Boolean(token && token.type === "Operator" && (!type || token.operator === type));
}
function isQuote$1(token, isSingle) {
  return Boolean(token && token.type === "Quote" && (isSingle == null || token.single === isSingle));
}
function isWhiteSpace$2(token) {
  return Boolean(token && token.type === "WhiteSpace");
}
function isEquals(token) {
  return isOperator$1(token, "equal");
}
function isRepeater(token) {
  return Boolean(token && token.type === "Repeater");
}
function isLiteral$2(token) {
  return token.type === "Literal";
}
function isCapitalizedLiteral(token) {
  if (isLiteral$2(token)) {
    const ch = token.value.charCodeAt(0);
    return ch >= 65 && ch <= 90;
  }
  return false;
}
function isElementName(token) {
  return token.type === "Literal" || token.type === "RepeaterNumber" || token.type === "RepeaterPlaceholder";
}
function isClassNameOperator(token) {
  return isOperator$1(token, "class");
}
function isAttributeSetStart(token) {
  return isBracket$2(token, "attribute", true);
}
function isAttributeSetEnd(token) {
  return isBracket$2(token, "attribute", false);
}
function isTextStart(token) {
  return isBracket$2(token, "expression", true);
}
function isGroupStart(token) {
  return isBracket$2(token, "group", true);
}
function createLiteral$1(value) {
  return {
    type: "Literal",
    value
  };
}
function isEmpty(elem) {
  return !elem.name && !elem.value && !elem.attributes;
}
function isChildOperator(token) {
  return isOperator$1(token, "child");
}
function isSiblingOperator$1(token) {
  return isOperator$1(token, "sibling");
}
function isClimbOperator(token) {
  return isOperator$1(token, "climb");
}
function isCloseOperator(token) {
  return isOperator$1(token, "close");
}
function escaped(scanner) {
  if (scanner.eat(92)) {
    scanner.start = scanner.pos;
    if (!scanner.eof()) {
      scanner.pos++;
    }
    return true;
  }
  return false;
}
function tokenize$1(source) {
  const scanner = new Scanner(source);
  const result = [];
  const ctx = {
    group: 0,
    attribute: 0,
    expression: 0,
    quote: 0
  };
  let ch = 0;
  let token;
  while (!scanner.eof()) {
    ch = scanner.peek();
    token = getToken$1(scanner, ctx);
    if (token) {
      result.push(token);
      if (token.type === "Quote") {
        ctx.quote = ch === ctx.quote ? 0 : ch;
      } else if (token.type === "Bracket") {
        ctx[token.context] += token.open ? 1 : -1;
      }
    } else {
      throw scanner.error("Unexpected character");
    }
  }
  return result;
}
function getToken$1(scanner, ctx) {
  return field$2(scanner, ctx) || repeaterPlaceholder(scanner) || repeaterNumber(scanner) || repeater$1(scanner) || whiteSpace$1(scanner) || literal$1$1(scanner, ctx) || operator$1(scanner) || quote(scanner) || bracket$1(scanner);
}
function literal$1$1(scanner, ctx) {
  const start = scanner.pos;
  let value = "";
  while (!scanner.eof()) {
    if (escaped(scanner)) {
      value += scanner.current();
      continue;
    }
    const ch = scanner.peek();
    if (ch === ctx.quote || ch === 36 || isAllowedOperator(ch, ctx)) {
      break;
    }
    if (ctx.expression && ch === 125) {
      break;
    }
    if (!ctx.quote && !ctx.expression) {
      if (!ctx.attribute && !isElementName$1(ch)) {
        break;
      }
      if (isAllowedSpace(ch, ctx) || isAllowedRepeater(ch, ctx) || isQuote$2(ch) || bracketType(ch)) {
        break;
      }
    }
    value += scanner.string[scanner.pos++];
  }
  if (start !== scanner.pos) {
    scanner.start = start;
    return {
      type: "Literal",
      value,
      start,
      end: scanner.pos
    };
  }
}
function whiteSpace$1(scanner) {
  const start = scanner.pos;
  if (scanner.eatWhile(isSpace)) {
    return {
      type: "WhiteSpace",
      start,
      end: scanner.pos,
      value: scanner.substring(start, scanner.pos)
    };
  }
}
function quote(scanner) {
  const ch = scanner.peek();
  if (isQuote$2(ch)) {
    return {
      type: "Quote",
      single: ch === 39,
      start: scanner.pos++,
      end: scanner.pos
    };
  }
}
function bracket$1(scanner) {
  const ch = scanner.peek();
  const context = bracketType(ch);
  if (context) {
    return {
      type: "Bracket",
      open: isOpenBracket$2(ch),
      context,
      start: scanner.pos++,
      end: scanner.pos
    };
  }
}
function operator$1(scanner) {
  const op = operatorType$1(scanner.peek());
  if (op) {
    return {
      type: "Operator",
      operator: op,
      start: scanner.pos++,
      end: scanner.pos
    };
  }
}
function repeater$1(scanner) {
  const start = scanner.pos;
  if (scanner.eat(42)) {
    scanner.start = scanner.pos;
    let count = 1;
    let implicit = false;
    if (scanner.eatWhile(isNumber$1)) {
      count = Number(scanner.current());
    } else {
      implicit = true;
    }
    return {
      type: "Repeater",
      count,
      value: 0,
      implicit,
      start,
      end: scanner.pos
    };
  }
}
function repeaterPlaceholder(scanner) {
  const start = scanner.pos;
  if (scanner.eat(36) && scanner.eat(35)) {
    return {
      type: "RepeaterPlaceholder",
      value: void 0,
      start,
      end: scanner.pos
    };
  }
  scanner.pos = start;
}
function repeaterNumber(scanner) {
  const start = scanner.pos;
  if (scanner.eatWhile(36)) {
    const size = scanner.pos - start;
    let reverse = false;
    let base = 1;
    let parent = 0;
    if (scanner.eat(64)) {
      while (scanner.eat(94)) {
        parent++;
      }
      reverse = scanner.eat(45);
      scanner.start = scanner.pos;
      if (scanner.eatWhile(isNumber$1)) {
        base = Number(scanner.current());
      }
    }
    scanner.start = start;
    return {
      type: "RepeaterNumber",
      size,
      reverse,
      base,
      parent,
      start,
      end: scanner.pos
    };
  }
}
function field$2(scanner, ctx) {
  const start = scanner.pos;
  if ((ctx.expression || ctx.attribute) && scanner.eat(36) && scanner.eat(123)) {
    scanner.start = scanner.pos;
    let index;
    let name = "";
    if (scanner.eatWhile(isNumber$1)) {
      index = Number(scanner.current());
      name = scanner.eat(58) ? consumePlaceholder$2(scanner) : "";
    } else if (isAlpha$1(scanner.peek())) {
      name = consumePlaceholder$2(scanner);
    }
    if (scanner.eat(125)) {
      return {
        type: "Field",
        index,
        name,
        start,
        end: scanner.pos
      };
    }
    throw scanner.error("Expecting }");
  }
  scanner.pos = start;
}
function consumePlaceholder$2(stream) {
  const stack = [];
  stream.start = stream.pos;
  while (!stream.eof()) {
    if (stream.eat(123)) {
      stack.push(stream.pos);
    } else if (stream.eat(125)) {
      if (!stack.length) {
        stream.pos--;
        break;
      }
      stack.pop();
    } else {
      stream.pos++;
    }
  }
  if (stack.length) {
    stream.pos = stack.pop();
    throw stream.error(`Expecting }`);
  }
  return stream.current();
}
function isAllowedOperator(ch, ctx) {
  const op = operatorType$1(ch);
  if (!op || ctx.quote || ctx.expression) {
    return false;
  }
  return !ctx.attribute || op === "equal";
}
function isAllowedSpace(ch, ctx) {
  return isSpace(ch) && !ctx.expression;
}
function isAllowedRepeater(ch, ctx) {
  return ch === 42 && !ctx.attribute && !ctx.expression;
}
function bracketType(ch) {
  if (ch === 40 || ch === 41) {
    return "group";
  }
  if (ch === 91 || ch === 93) {
    return "attribute";
  }
  if (ch === 123 || ch === 125) {
    return "expression";
  }
}
function operatorType$1(ch) {
  return ch === 62 && "child" || ch === 43 && "sibling" || ch === 94 && "climb" || ch === 46 && "class" || ch === 35 && "id" || ch === 47 && "close" || ch === 61 && "equal" || void 0;
}
function isOpenBracket$2(ch) {
  return ch === 123 || ch === 91 || ch === 40;
}
function isElementName$1(ch) {
  return isAlphaNumericWord(ch) || ch === 45 || ch === 58 || ch === 33;
}
var operators = {
  child: ">",
  class: ".",
  climb: "^",
  id: "#",
  equal: "=",
  close: "/",
  sibling: "+"
};
var tokenVisitor = {
  Literal(token) {
    return token.value;
  },
  Quote(token) {
    return token.single ? "'" : '"';
  },
  Bracket(token) {
    if (token.context === "attribute") {
      return token.open ? "[" : "]";
    } else if (token.context === "expression") {
      return token.open ? "{" : "}";
    } else {
      return token.open ? "(" : "}";
    }
  },
  Operator(token) {
    return operators[token.operator];
  },
  Field(token, state) {
    if (token.index != null) {
      return token.name ? `\${${token.index}:${token.name}}` : `\${${token.index}`;
    } else if (token.name) {
      return state.getVariable(token.name);
    }
    return "";
  },
  RepeaterPlaceholder(token, state) {
    let repeater2;
    for (let i = state.repeaters.length - 1; i >= 0; i--) {
      if (state.repeaters[i].implicit) {
        repeater2 = state.repeaters[i];
        break;
      }
    }
    state.inserted = true;
    return state.getText(repeater2 && repeater2.value);
  },
  RepeaterNumber(token, state) {
    let value = 1;
    const lastIx = state.repeaters.length - 1;
    const repeater2 = state.repeaters[lastIx];
    if (repeater2) {
      value = token.reverse ? token.base + repeater2.count - repeater2.value - 1 : token.base + repeater2.value;
      if (token.parent) {
        const parentIx = Math.max(0, lastIx - token.parent);
        if (parentIx !== lastIx) {
          const parentRepeater = state.repeaters[parentIx];
          value += repeater2.count * parentRepeater.value;
        }
      }
    }
    let result = String(value);
    while (result.length < token.size) {
      result = "0" + result;
    }
    return result;
  },
  WhiteSpace(token) {
    return token.value;
  }
};
function stringify$1(token, state) {
  if (!tokenVisitor[token.type]) {
    throw new Error(`Unknown token ${token.type}`);
  }
  return tokenVisitor[token.type](token, state);
}
var urlRegex = /^((https?:|ftp:|file:)?\/\/|(www|ftp)\.)[^ ]*$/;
var emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,5}$/;
function convert(abbr, options = {}) {
  let textInserted = false;
  let cleanText;
  if (options.text) {
    if (Array.isArray(options.text)) {
      cleanText = options.text.filter(s => s.trim());
    } else {
      cleanText = options.text;
    }
  }
  const result = {
    type: "Abbreviation",
    children: convertGroup(abbr, {
      inserted: false,
      repeaters: [],
      text: options.text,
      cleanText,
      repeatGuard: options.maxRepeat || Number.POSITIVE_INFINITY,
      getText(pos) {
        var _a;
        textInserted = true;
        let value;
        if (Array.isArray(options.text)) {
          if (pos !== void 0 && pos >= 0 && pos < cleanText.length) {
            return cleanText[pos];
          }
          value = pos !== void 0 ? options.text[pos] : options.text.join("\n");
        } else {
          value = (_a = options.text) !== null && _a !== void 0 ? _a : "";
        }
        return value;
      },
      getVariable(name) {
        const varValue = options.variables && options.variables[name];
        return varValue != null ? varValue : name;
      }
    })
  };
  if (options.text != null && !textInserted) {
    const deepest = deepestNode(last$1(result.children));
    if (deepest) {
      const text2 = Array.isArray(options.text) ? options.text.join("\n") : options.text;
      insertText(deepest, text2);
      if (deepest.name === "a" && options.href) {
        insertHref(deepest, text2);
      }
    }
  }
  return result;
}
function convertStatement(node, state) {
  let result = [];
  if (node.repeat) {
    const original = node.repeat;
    const repeat = Object.assign({}, original);
    repeat.count = repeat.implicit && Array.isArray(state.text) ? state.cleanText.length : repeat.count || 1;
    let items;
    state.repeaters.push(repeat);
    for (let i = 0; i < repeat.count; i++) {
      repeat.value = i;
      node.repeat = repeat;
      items = isGroup(node) ? convertGroup(node, state) : convertElement(node, state);
      if (repeat.implicit && !state.inserted) {
        const target = last$1(items);
        const deepest = target && deepestNode(target);
        if (deepest) {
          insertText(deepest, state.getText(repeat.value));
        }
      }
      result = result.concat(items);
      if (--state.repeatGuard <= 0) {
        break;
      }
    }
    state.repeaters.pop();
    node.repeat = original;
    if (repeat.implicit) {
      state.inserted = true;
    }
  } else {
    result = result.concat(isGroup(node) ? convertGroup(node, state) : convertElement(node, state));
  }
  return result;
}
function convertElement(node, state) {
  let children = [];
  const elem = {
    type: "AbbreviationNode",
    name: node.name && stringifyName(node.name, state),
    value: node.value && stringifyValue$1(node.value, state),
    attributes: void 0,
    children,
    repeat: node.repeat && Object.assign({}, node.repeat),
    selfClosing: node.selfClose
  };
  let result = [elem];
  for (const child of node.elements) {
    children = children.concat(convertStatement(child, state));
  }
  if (node.attributes) {
    elem.attributes = [];
    for (const attr of node.attributes) {
      elem.attributes.push(convertAttribute(attr, state));
    }
  }
  if (!elem.name && !elem.attributes && elem.value && !elem.value.some(isField$1)) {
    result = result.concat(children);
  } else {
    elem.children = children;
  }
  return result;
}
function convertGroup(node, state) {
  let result = [];
  for (const child of node.elements) {
    result = result.concat(convertStatement(child, state));
  }
  if (node.repeat) {
    result = attachRepeater(result, node.repeat);
  }
  return result;
}
function convertAttribute(node, state) {
  let implied = false;
  let isBoolean = false;
  let valueType = node.expression ? "expression" : "raw";
  let value;
  const name = node.name && stringifyName(node.name, state);
  if (name && name[0] === "!") {
    implied = true;
  }
  if (name && name[name.length - 1] === ".") {
    isBoolean = true;
  }
  if (node.value) {
    const tokens = node.value.slice();
    if (isQuote$1(tokens[0])) {
      const quote2 = tokens.shift();
      if (tokens.length && last$1(tokens).type === quote2.type) {
        tokens.pop();
      }
      valueType = quote2.single ? "singleQuote" : "doubleQuote";
    } else if (isBracket$2(tokens[0], "expression", true)) {
      valueType = "expression";
      tokens.shift();
      if (isBracket$2(last$1(tokens), "expression", false)) {
        tokens.pop();
      }
    }
    value = stringifyValue$1(tokens, state);
  }
  return {
    name: isBoolean || implied ? name.slice(implied ? 1 : 0, isBoolean ? -1 : void 0) : name,
    value,
    boolean: isBoolean,
    implied,
    valueType
  };
}
function stringifyName(tokens, state) {
  let str = "";
  for (let i = 0; i < tokens.length; i++) {
    str += stringify$1(tokens[i], state);
  }
  return str;
}
function stringifyValue$1(tokens, state) {
  const result = [];
  let str = "";
  for (let i = 0, token; i < tokens.length; i++) {
    token = tokens[i];
    if (isField$1(token)) {
      if (str) {
        result.push(str);
        str = "";
      }
      result.push(token);
    } else {
      str += stringify$1(token, state);
    }
  }
  if (str) {
    result.push(str);
  }
  return result;
}
function isGroup(node) {
  return node.type === "TokenGroup";
}
function isField$1(token) {
  return typeof token === "object" && token.type === "Field" && token.index != null;
}
function last$1(arr) {
  return arr[arr.length - 1];
}
function deepestNode(node) {
  return node.children.length ? deepestNode(last$1(node.children)) : node;
}
function insertText(node, text2) {
  if (node.value) {
    const lastToken = last$1(node.value);
    if (typeof lastToken === "string") {
      node.value[node.value.length - 1] += text2;
    } else {
      node.value.push(text2);
    }
  } else {
    node.value = [text2];
  }
}
function insertHref(node, text2) {
  var _a;
  let href = "";
  if (urlRegex.test(text2)) {
    href = text2;
    if (!/\w+:/.test(href) && !href.startsWith("//")) {
      href = `http://${href}`;
    }
  } else if (emailRegex.test(text2)) {
    href = `mailto:${text2}`;
  }
  const hrefAttribute = (_a = node.attributes) === null || _a === void 0 ? void 0 : _a.find(attr => attr.name === "href");
  if (!hrefAttribute) {
    if (!node.attributes) {
      node.attributes = [];
    }
    node.attributes.push({
      name: "href",
      value: [href],
      valueType: "doubleQuote"
    });
  } else if (!hrefAttribute.value) {
    hrefAttribute.value = [href];
  }
}
function attachRepeater(items, repeater2) {
  for (const item of items) {
    if (!item.repeat) {
      item.repeat = Object.assign({}, repeater2);
    }
  }
  return items;
}
function parseAbbreviation(abbr, options) {
  try {
    const tokens = typeof abbr === "string" ? tokenize$1(abbr) : abbr;
    return convert(abbreviation(tokens, options), options);
  } catch (err) {
    if (err instanceof ScannerError && typeof abbr === "string") {
      err.message += `
${abbr}
${"-".repeat(err.pos)}^`;
    }
    throw err;
  }
}
function tokenize(abbr, isValue2) {
  let brackets = 0;
  let token;
  const scanner = new Scanner(abbr);
  const tokens = [];
  while (!scanner.eof()) {
    token = getToken(scanner, brackets === 0 && !isValue2);
    if (!token) {
      throw scanner.error("Unexpected character");
    }
    if (token.type === "Bracket") {
      if (!brackets && token.open) {
        mergeTokens(scanner, tokens);
      }
      brackets += token.open ? 1 : -1;
      if (brackets < 0) {
        throw scanner.error("Unexpected bracket", token.start);
      }
    }
    tokens.push(token);
    if (shouldConsumeDashAfter(token) && (token = operator(scanner))) {
      tokens.push(token);
    }
  }
  return tokens;
}
function getToken(scanner, short) {
  return field$1(scanner) || numberValue(scanner) || colorValue(scanner) || stringValue(scanner) || bracket(scanner) || operator(scanner) || whiteSpace(scanner) || literal$1(scanner, short);
}
function field$1(scanner) {
  const start = scanner.pos;
  if (scanner.eat(36) && scanner.eat(123)) {
    scanner.start = scanner.pos;
    let index;
    let name = "";
    if (scanner.eatWhile(isNumber$1)) {
      index = Number(scanner.current());
      name = scanner.eat(58) ? consumePlaceholder$1(scanner) : "";
    } else if (isAlpha$1(scanner.peek())) {
      name = consumePlaceholder$1(scanner);
    }
    if (scanner.eat(125)) {
      return {
        type: "Field",
        index,
        name,
        start,
        end: scanner.pos
      };
    }
    throw scanner.error("Expecting }");
  }
  scanner.pos = start;
}
function consumePlaceholder$1(stream) {
  const stack = [];
  stream.start = stream.pos;
  while (!stream.eof()) {
    if (stream.eat(123)) {
      stack.push(stream.pos);
    } else if (stream.eat(125)) {
      if (!stack.length) {
        stream.pos--;
        break;
      }
      stack.pop();
    } else {
      stream.pos++;
    }
  }
  if (stack.length) {
    stream.pos = stack.pop();
    throw stream.error(`Expecting }`);
  }
  return stream.current();
}
function literal$1(scanner, short) {
  const start = scanner.pos;
  if (scanner.eat(isIdentPrefix)) {
    scanner.eatWhile(start ? isKeyword : isLiteral);
  } else if (scanner.eat(isAlphaWord)) {
    scanner.eatWhile(short ? isLiteral : isKeyword);
  } else {
    scanner.eat(46);
    scanner.eatWhile(isLiteral);
  }
  if (start !== scanner.pos) {
    scanner.start = start;
    return createLiteral(scanner, scanner.start = start);
  }
}
function createLiteral(scanner, start = scanner.start, end = scanner.pos) {
  return {
    type: "Literal",
    value: scanner.substring(start, end),
    start,
    end
  };
}
function numberValue(scanner) {
  const start = scanner.pos;
  if (consumeNumber(scanner)) {
    scanner.start = start;
    const rawValue = scanner.current();
    scanner.start = scanner.pos;
    scanner.eat(37) || scanner.eatWhile(isAlphaWord);
    return {
      type: "NumberValue",
      value: Number(rawValue),
      rawValue,
      unit: scanner.current(),
      start,
      end: scanner.pos
    };
  }
}
function stringValue(scanner) {
  const ch = scanner.peek();
  const start = scanner.pos;
  let finished = false;
  if (isQuote$2(ch)) {
    scanner.pos++;
    while (!scanner.eof()) {
      if (scanner.eat(ch)) {
        finished = true;
        break;
      } else {
        scanner.pos++;
      }
    }
    scanner.start = start;
    return {
      type: "StringValue",
      value: scanner.substring(start + 1, scanner.pos - (finished ? 1 : 0)),
      quote: ch === 39 ? "single" : "double",
      start,
      end: scanner.pos
    };
  }
}
function colorValue(scanner) {
  const start = scanner.pos;
  if (scanner.eat(35)) {
    const valueStart = scanner.pos;
    let color2 = "";
    let alpha = "";
    if (scanner.eatWhile(isHex)) {
      color2 = scanner.substring(valueStart, scanner.pos);
      alpha = colorAlpha(scanner);
    } else if (scanner.eat(116)) {
      color2 = "0";
      alpha = colorAlpha(scanner) || "0";
    } else {
      alpha = colorAlpha(scanner);
    }
    if (color2 || alpha || scanner.eof()) {
      const {
        r,
        g,
        b,
        a
      } = parseColor(color2, alpha);
      return {
        type: "ColorValue",
        r,
        g,
        b,
        a,
        raw: scanner.substring(start + 1, scanner.pos),
        start,
        end: scanner.pos
      };
    } else {
      return createLiteral(scanner, start);
    }
  }
  scanner.pos = start;
}
function colorAlpha(scanner) {
  const start = scanner.pos;
  if (scanner.eat(46)) {
    scanner.start = start;
    if (scanner.eatWhile(isNumber$1)) {
      return scanner.current();
    }
    return "1";
  }
  return "";
}
function whiteSpace(scanner) {
  const start = scanner.pos;
  if (scanner.eatWhile(isSpace)) {
    return {
      type: "WhiteSpace",
      start,
      end: scanner.pos
    };
  }
}
function bracket(scanner) {
  const ch = scanner.peek();
  if (isBracket(ch)) {
    return {
      type: "Bracket",
      open: ch === 40,
      start: scanner.pos++,
      end: scanner.pos
    };
  }
}
function operator(scanner) {
  const op = operatorType(scanner.peek());
  if (op) {
    return {
      type: "Operator",
      operator: op,
      start: scanner.pos++,
      end: scanner.pos
    };
  }
}
function consumeNumber(stream) {
  const start = stream.pos;
  stream.eat(45);
  const afterNegative = stream.pos;
  const hasDecimal = stream.eatWhile(isNumber$1);
  const prevPos = stream.pos;
  if (stream.eat(46)) {
    const hasFloat = stream.eatWhile(isNumber$1);
    if (!hasDecimal && !hasFloat) {
      stream.pos = prevPos;
    }
  }
  if (stream.pos === afterNegative) {
    stream.pos = start;
  }
  return stream.pos !== start;
}
function isIdentPrefix(code2) {
  return code2 === 64 || code2 === 36;
}
function operatorType(ch) {
  return ch === 43 && "+" || ch === 33 && "!" || ch === 44 && "," || ch === 58 && ":" || ch === 45 && "-" || void 0;
}
function isHex(code2) {
  return isNumber$1(code2) || isAlpha$1(code2, 65, 70);
}
function isKeyword(code2) {
  return isAlphaNumericWord(code2) || code2 === 45;
}
function isBracket(code2) {
  return code2 === 40 || code2 === 41;
}
function isLiteral(code2) {
  return isAlphaWord(code2) || code2 === 37 || code2 === 47;
}
function parseColor(value, alpha) {
  let r = "0";
  let g = "0";
  let b = "0";
  let a = Number(alpha != null && alpha !== "" ? alpha : 1);
  if (value === "t") {
    a = 0;
  } else {
    switch (value.length) {
      case 0:
        break;
      case 1:
        r = g = b = value + value;
        break;
      case 2:
        r = g = b = value;
        break;
      case 3:
        r = value[0] + value[0];
        g = value[1] + value[1];
        b = value[2] + value[2];
        break;
      default:
        value += value;
        r = value.slice(0, 2);
        g = value.slice(2, 4);
        b = value.slice(4, 6);
    }
  }
  return {
    r: parseInt(r, 16),
    g: parseInt(g, 16),
    b: parseInt(b, 16),
    a
  };
}
function shouldConsumeDashAfter(token) {
  return token.type === "ColorValue" || token.type === "NumberValue" && !token.unit;
}
function mergeTokens(scanner, tokens) {
  let start = 0;
  let end = 0;
  while (tokens.length) {
    const token = last(tokens);
    if (token.type === "Literal" || token.type === "NumberValue") {
      start = token.start;
      if (!end) {
        end = token.end;
      }
      tokens.pop();
    } else {
      break;
    }
  }
  if (start !== end) {
    tokens.push(createLiteral(scanner, start, end));
  }
}
function last(arr) {
  return arr[arr.length - 1];
}
function tokenScanner(tokens) {
  return {
    tokens,
    start: 0,
    pos: 0,
    size: tokens.length
  };
}
function peek$2(scanner) {
  return scanner.tokens[scanner.pos];
}
function readable(scanner) {
  return scanner.pos < scanner.size;
}
function consume$1(scanner, test) {
  if (test(peek$2(scanner))) {
    scanner.pos++;
    return true;
  }
  return false;
}
function error(scanner, message, token = peek$2(scanner)) {
  if (token && token.start != null) {
    message += ` at ${token.start}`;
  }
  const err = new Error(message);
  err["pos"] = token && token.start;
  return err;
}
function parser(tokens, options = {}) {
  const scanner = tokenScanner(tokens);
  const result = [];
  let property2;
  while (readable(scanner)) {
    if (property2 = consumeProperty(scanner, options)) {
      result.push(property2);
    } else if (!consume$1(scanner, isSiblingOperator)) {
      throw error(scanner, "Unexpected token");
    }
  }
  return result;
}
function consumeProperty(scanner, options) {
  let name;
  let important = false;
  let valueFragment;
  const value = [];
  const token = peek$2(scanner);
  const valueMode = !!options.value;
  if (!valueMode && isLiteral$1(token) && !isFunctionStart(scanner)) {
    scanner.pos++;
    name = token.value;
    consume$1(scanner, isValueDelimiter);
  }
  if (valueMode) {
    consume$1(scanner, isWhiteSpace$1);
  }
  while (readable(scanner)) {
    if (consume$1(scanner, isImportant)) {
      important = true;
    } else if (valueFragment = consumeValue(scanner, valueMode)) {
      value.push(valueFragment);
    } else if (!consume$1(scanner, isFragmentDelimiter)) {
      break;
    }
  }
  if (name || value.length || important) {
    return {
      name,
      value,
      important
    };
  }
}
function consumeValue(scanner, inArgument) {
  const result = [];
  let token;
  let args;
  while (readable(scanner)) {
    token = peek$2(scanner);
    if (isValue(token)) {
      scanner.pos++;
      if (isLiteral$1(token) && (args = consumeArguments(scanner))) {
        result.push({
          type: "FunctionCall",
          name: token.value,
          arguments: args
        });
      } else {
        result.push(token);
      }
    } else if (isValueDelimiter(token) || inArgument && isWhiteSpace$1(token)) {
      scanner.pos++;
    } else {
      break;
    }
  }
  return result.length ? {
    type: "CSSValue",
    value: result
  } : void 0;
}
function consumeArguments(scanner) {
  const start = scanner.pos;
  if (consume$1(scanner, isOpenBracket$1)) {
    const args = [];
    let value;
    while (readable(scanner) && !consume$1(scanner, isCloseBracket$1)) {
      if (value = consumeValue(scanner, true)) {
        args.push(value);
      } else if (!consume$1(scanner, isWhiteSpace$1) && !consume$1(scanner, isArgumentDelimiter)) {
        throw error(scanner, "Unexpected token");
      }
    }
    scanner.start = start;
    return args;
  }
}
function isLiteral$1(token) {
  return token && token.type === "Literal";
}
function isBracket$1(token, open) {
  return token && token.type === "Bracket" && (open == null || token.open === open);
}
function isOpenBracket$1(token) {
  return isBracket$1(token, true);
}
function isCloseBracket$1(token) {
  return isBracket$1(token, false);
}
function isWhiteSpace$1(token) {
  return token && token.type === "WhiteSpace";
}
function isOperator(token, operator2) {
  return token && token.type === "Operator" && (!operator2 || token.operator === operator2);
}
function isSiblingOperator(token) {
  return isOperator(token, "+");
}
function isArgumentDelimiter(token) {
  return isOperator(token, ",");
}
function isFragmentDelimiter(token) {
  return isArgumentDelimiter(token);
}
function isImportant(token) {
  return isOperator(token, "!");
}
function isValue(token) {
  return token.type === "StringValue" || token.type === "ColorValue" || token.type === "NumberValue" || token.type === "Literal" || token.type === "Field";
}
function isValueDelimiter(token) {
  return isOperator(token, ":") || isOperator(token, "-");
}
function isFunctionStart(scanner) {
  const t1 = scanner.tokens[scanner.pos];
  const t2 = scanner.tokens[scanner.pos + 1];
  return t1 && t2 && isLiteral$1(t1) && t2.type === "Bracket";
}
function parse$2(abbr, options) {
  try {
    const tokens = typeof abbr === "string" ? tokenize(abbr, options && options.value) : abbr;
    return parser(tokens, options);
  } catch (err) {
    if (err instanceof ScannerError && typeof abbr === "string") {
      err.message += `
${abbr}
${"-".repeat(err.pos)}^`;
    }
    throw err;
  }
}
function mergeAttributes(node, config) {
  if (!node.attributes) {
    return;
  }
  const attributes = [];
  const lookup = {};
  for (const attr of node.attributes) {
    if (attr.name) {
      const attrName2 = attr.name;
      if (attrName2 in lookup) {
        const prev = lookup[attrName2];
        if (attrName2 === "class") {
          prev.value = mergeValue(prev.value, attr.value, " ");
        } else {
          mergeDeclarations(prev, attr, config);
        }
      } else {
        attributes.push(lookup[attrName2] = Object.assign({}, attr));
      }
    } else {
      attributes.push(attr);
    }
  }
  node.attributes = attributes;
}
function mergeValue(prev, next2, glue) {
  if (prev && next2) {
    if (prev.length && glue) {
      append(prev, glue);
    }
    for (const t of next2) {
      append(prev, t);
    }
    return prev;
  }
  const result = prev || next2;
  return result && result.slice();
}
function mergeDeclarations(dest, src, config) {
  dest.name = src.name;
  if (!config.options["output.reverseAttributes"]) {
    dest.value = src.value;
  }
  if (!dest.implied) {
    dest.implied = src.implied;
  }
  if (!dest.boolean) {
    dest.boolean = src.boolean;
  }
  if (dest.valueType !== "expression") {
    dest.valueType = src.valueType;
  }
  return dest;
}
function append(tokens, value) {
  const lastIx = tokens.length - 1;
  if (typeof tokens[lastIx] === "string" && typeof value === "string") {
    tokens[lastIx] += value;
  } else {
    tokens.push(value);
  }
}
function walk(node, fn, state) {
  const ancestors = [node];
  const callback = ctx => {
    fn(ctx, ancestors, state);
    ancestors.push(ctx);
    ctx.children.forEach(callback);
    ancestors.pop();
  };
  node.children.forEach(callback);
}
function findDeepest(node) {
  let parent;
  while (node.children.length) {
    parent = node;
    node = node.children[node.children.length - 1];
  }
  return {
    parent,
    node
  };
}
function isNode(node) {
  return node.type === "AbbreviationNode";
}
function resolveSnippets(abbr, config) {
  const stack = [];
  const reversed = config.options["output.reverseAttributes"];
  const resolve = child => {
    const snippet = child.name && config.snippets[child.name];
    if (!snippet || stack.includes(snippet)) {
      return null;
    }
    const snippetAbbr = parseAbbreviation(snippet, config);
    stack.push(snippet);
    walkResolve(snippetAbbr, resolve);
    stack.pop();
    for (const topNode of snippetAbbr.children) {
      if (child.attributes) {
        const from = topNode.attributes || [];
        const to = child.attributes || [];
        topNode.attributes = reversed ? to.concat(from) : from.concat(to);
      }
      mergeNodes(child, topNode);
    }
    return snippetAbbr;
  };
  walkResolve(abbr, resolve);
  return abbr;
}
function walkResolve(node, resolve, config) {
  let children = [];
  for (const child of node.children) {
    const resolved = resolve(child);
    if (resolved) {
      children = children.concat(resolved.children);
      const deepest = findDeepest(resolved);
      if (isNode(deepest.node)) {
        deepest.node.children = deepest.node.children.concat(walkResolve(child, resolve));
      }
    } else {
      children.push(child);
      child.children = walkResolve(child, resolve);
    }
  }
  return node.children = children;
}
function mergeNodes(from, to) {
  if (from.selfClosing) {
    to.selfClosing = true;
  }
  if (from.value != null) {
    to.value = from.value;
  }
  if (from.repeat) {
    to.repeat = from.repeat;
  }
}
function createOutputStream(options, level = 0) {
  return {
    options,
    value: "",
    level,
    offset: 0,
    line: 0,
    column: 0
  };
}
function push(stream, text2) {
  const processText = stream.options["output.text"];
  _push(stream, processText(text2, stream.offset, stream.line, stream.column));
}
function pushString(stream, value) {
  const lines = splitByLines(value);
  for (let i = 0, il = lines.length - 1; i <= il; i++) {
    push(stream, lines[i]);
    if (i !== il) {
      pushNewline(stream, true);
    }
  }
}
function pushNewline(stream, indent) {
  const baseIndent = stream.options["output.baseIndent"];
  const newline = stream.options["output.newline"];
  push(stream, newline + baseIndent);
  stream.line++;
  stream.column = baseIndent.length;
  if (indent) {
    pushIndent(stream, indent === true ? stream.level : indent);
  }
}
function pushIndent(stream, size = stream.level) {
  const indent = stream.options["output.indent"];
  push(stream, indent.repeat(Math.max(size, 0)));
}
function pushField(stream, index, placeholder) {
  const field2 = stream.options["output.field"];
  _push(stream, field2(index, placeholder, stream.offset, stream.line, stream.column));
}
function tagName(name, config) {
  return strCase(name, config.options["output.tagCase"]);
}
function attrName(name, config) {
  return strCase(name, config.options["output.attributeCase"]);
}
function attrQuote(attr, config, isOpen) {
  if (attr.valueType === "expression") {
    return isOpen ? "{" : "}";
  }
  return config.options["output.attributeQuotes"] === "single" ? "'" : '"';
}
function isBooleanAttribute(attr, config) {
  return attr.boolean || config.options["output.booleanAttributes"].includes((attr.name || "").toLowerCase());
}
function selfClose(config) {
  switch (config.options["output.selfClosingStyle"]) {
    case "xhtml":
      return " /";
    case "xml":
      return "/";
    default:
      return "";
  }
}
function isInline(node, config) {
  if (typeof node === "string") {
    return config.options.inlineElements.includes(node.toLowerCase());
  }
  return node.name ? isInline(node.name, config) : Boolean(node.value && !node.attributes);
}
function splitByLines(text2) {
  return text2.split(/\r\n|\r|\n/g);
}
function _push(stream, text2) {
  stream.value += text2;
  stream.offset += text2.length;
  stream.column += text2.length;
}
function strCase(str, type) {
  if (type) {
    return type === "upper" ? str.toUpperCase() : str.toLowerCase();
  }
  return str;
}
var elementMap = {
  p: "span",
  ul: "li",
  ol: "li",
  table: "tr",
  tr: "td",
  tbody: "tr",
  thead: "tr",
  tfoot: "tr",
  colgroup: "col",
  select: "option",
  optgroup: "option",
  audio: "source",
  video: "source",
  object: "param",
  map: "area"
};
function implicitTag(node, ancestors, config) {
  if (!node.name && node.attributes) {
    resolveImplicitTag(node, ancestors, config);
  }
}
function resolveImplicitTag(node, ancestors, config) {
  const parent = getParentElement(ancestors);
  const contextName = config.context ? config.context.name : "";
  const parentName = lowercase(parent ? parent.name : contextName);
  node.name = elementMap[parentName] || (isInline(parentName, config) ? "span" : "div");
}
function lowercase(str) {
  return (str || "").toLowerCase();
}
function getParentElement(ancestors) {
  for (let i = ancestors.length - 1; i >= 0; i--) {
    const elem = ancestors[i];
    if (isNode(elem)) {
      return elem;
    }
  }
}
var latin = {
  "common": ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit"],
  "words": ["exercitationem", "perferendis", "perspiciatis", "laborum", "eveniet", "sunt", "iure", "nam", "nobis", "eum", "cum", "officiis", "excepturi", "odio", "consectetur", "quasi", "aut", "quisquam", "vel", "eligendi", "itaque", "non", "odit", "tempore", "quaerat", "dignissimos", "facilis", "neque", "nihil", "expedita", "vitae", "vero", "ipsum", "nisi", "animi", "cumque", "pariatur", "velit", "modi", "natus", "iusto", "eaque", "sequi", "illo", "sed", "ex", "et", "voluptatibus", "tempora", "veritatis", "ratione", "assumenda", "incidunt", "nostrum", "placeat", "aliquid", "fuga", "provident", "praesentium", "rem", "necessitatibus", "suscipit", "adipisci", "quidem", "possimus", "voluptas", "debitis", "sint", "accusantium", "unde", "sapiente", "voluptate", "qui", "aspernatur", "laudantium", "soluta", "amet", "quo", "aliquam", "saepe", "culpa", "libero", "ipsa", "dicta", "reiciendis", "nesciunt", "doloribus", "autem", "impedit", "minima", "maiores", "repudiandae", "ipsam", "obcaecati", "ullam", "enim", "totam", "delectus", "ducimus", "quis", "voluptates", "dolores", "molestiae", "harum", "dolorem", "quia", "voluptatem", "molestias", "magni", "distinctio", "omnis", "illum", "dolorum", "voluptatum", "ea", "quas", "quam", "corporis", "quae", "blanditiis", "atque", "deserunt", "laboriosam", "earum", "consequuntur", "hic", "cupiditate", "quibusdam", "accusamus", "ut", "rerum", "error", "minus", "eius", "ab", "ad", "nemo", "fugit", "officia", "at", "in", "id", "quos", "reprehenderit", "numquam", "iste", "fugiat", "sit", "inventore", "beatae", "repellendus", "magnam", "recusandae", "quod", "explicabo", "doloremque", "aperiam", "consequatur", "asperiores", "commodi", "optio", "dolor", "labore", "temporibus", "repellat", "veniam", "architecto", "est", "esse", "mollitia", "nulla", "a", "similique", "eos", "alias", "dolore", "tenetur", "deleniti", "porro", "facere", "maxime", "corrupti"]
};
var ru = {
  "common": ["\u0434\u0430\u043B\u0435\u043A\u043E-\u0434\u0430\u043B\u0435\u043A\u043E", "\u0437\u0430", "\u0441\u043B\u043E\u0432\u0435\u0441\u043D\u044B\u043C\u0438", "\u0433\u043E\u0440\u0430\u043C\u0438", "\u0432 \u0441\u0442\u0440\u0430\u043D\u0435", "\u0433\u043B\u0430\u0441\u043D\u044B\u0445", "\u0438 \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u044B\u0445", "\u0436\u0438\u0432\u0443\u0442", "\u0440\u044B\u0431\u043D\u044B\u0435", "\u0442\u0435\u043A\u0441\u0442\u044B"],
  "words": ["\u0432\u0434\u0430\u043B\u0438", "\u043E\u0442 \u0432\u0441\u0435\u0445", "\u043E\u043D\u0438", "\u0431\u0443\u043A\u0432\u0435\u043D\u043D\u044B\u0445", "\u0434\u043E\u043C\u0430\u0445", "\u043D\u0430 \u0431\u0435\u0440\u0435\u0433\u0443", "\u0441\u0435\u043C\u0430\u043D\u0442\u0438\u043A\u0430", "\u0431\u043E\u043B\u044C\u0448\u043E\u0433\u043E", "\u044F\u0437\u044B\u043A\u043E\u0432\u043E\u0433\u043E", "\u043E\u043A\u0435\u0430\u043D\u0430", "\u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439", "\u0440\u0443\u0447\u0435\u0435\u043A", "\u0434\u0430\u043B\u044C", "\u0436\u0443\u0440\u0447\u0438\u0442", "\u043F\u043E \u0432\u0441\u0435\u0439", "\u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442", "\u0435\u0435", "\u0432\u0441\u0435\u043C\u0438", "\u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u043C\u0438", "\u043F\u0440\u0430\u0432\u0438\u043B\u0430\u043C\u0438", "\u044D\u0442\u0430", "\u043F\u0430\u0440\u0430\u0434\u0438\u0433\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F", "\u0441\u0442\u0440\u0430\u043D\u0430", "\u043A\u043E\u0442\u043E\u0440\u043E\u0439", "\u0436\u0430\u0440\u0435\u043D\u043D\u044B\u0435", "\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F", "\u0437\u0430\u043B\u0435\u0442\u0430\u044E\u0442", "\u043F\u0440\u044F\u043C\u043E", "\u0440\u043E\u0442", "\u0434\u0430\u0436\u0435", "\u0432\u0441\u0435\u043C\u043E\u0433\u0443\u0449\u0430\u044F", "\u043F\u0443\u043D\u043A\u0442\u0443\u0430\u0446\u0438\u044F", "\u043D\u0435", "\u0438\u043C\u0435\u0435\u0442", "\u0432\u043B\u0430\u0441\u0442\u0438", "\u043D\u0430\u0434", "\u0440\u044B\u0431\u043D\u044B\u043C\u0438", "\u0442\u0435\u043A\u0441\u0442\u0430\u043C\u0438", "\u0432\u0435\u0434\u0443\u0449\u0438\u043C\u0438", "\u0431\u0435\u0437\u043E\u0440\u0444\u043E\u0433\u0440\u0430\u0444\u0438\u0447\u043D\u044B\u0439", "\u043E\u0431\u0440\u0430\u0437", "\u0436\u0438\u0437\u043D\u0438", "\u043E\u0434\u043D\u0430\u0436\u0434\u044B", "\u043E\u0434\u043D\u0430", "\u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0430\u044F", "\u0441\u0442\u0440\u043E\u0447\u043A\u0430", "\u0440\u044B\u0431\u043D\u043E\u0433\u043E", "\u0442\u0435\u043A\u0441\u0442\u0430", "\u0438\u043C\u0435\u043D\u0438", "lorem", "ipsum", "\u0440\u0435\u0448\u0438\u043B\u0430", "\u0432\u044B\u0439\u0442\u0438", "\u0431\u043E\u043B\u044C\u0448\u043E\u0439", "\u043C\u0438\u0440", "\u0433\u0440\u0430\u043C\u043C\u0430\u0442\u0438\u043A\u0438", "\u0432\u0435\u043B\u0438\u043A\u0438\u0439", "\u043E\u043A\u0441\u043C\u043E\u043A\u0441", "\u043F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0430\u043B", "\u043E", "\u0437\u043B\u044B\u0445", "\u0437\u0430\u043F\u044F\u0442\u044B\u0445", "\u0434\u0438\u043A\u0438\u0445", "\u0437\u043D\u0430\u043A\u0430\u0445", "\u0432\u043E\u043F\u0440\u043E\u0441\u0430", "\u043A\u043E\u0432\u0430\u0440\u043D\u044B\u0445", "\u0442\u043E\u0447\u043A\u0430\u0445", "\u0437\u0430\u043F\u044F\u0442\u043E\u0439", "\u043D\u043E", "\u0442\u0435\u043A\u0441\u0442", "\u0434\u0430\u043B", "\u0441\u0431\u0438\u0442\u044C", "\u0441\u0435\u0431\u044F", "\u0442\u043E\u043B\u043A\u0443", "\u043E\u043D", "\u0441\u043E\u0431\u0440\u0430\u043B", "\u0441\u0435\u043C\u044C", "\u0441\u0432\u043E\u0438\u0445", "\u0437\u0430\u0433\u043B\u0430\u0432\u043D\u044B\u0445", "\u0431\u0443\u043A\u0432", "\u043F\u043E\u0434\u043F\u043E\u044F\u0441\u0430\u043B", "\u0438\u043D\u0438\u0446\u0438\u0430\u043B", "\u0437\u0430", "\u043F\u043E\u044F\u0441", "\u043F\u0443\u0441\u0442\u0438\u043B\u0441\u044F", "\u0434\u043E\u0440\u043E\u0433\u0443", "\u0432\u0437\u043E\u0431\u0440\u0430\u0432\u0448\u0438\u0441\u044C", "\u043F\u0435\u0440\u0432\u0443\u044E", "\u0432\u0435\u0440\u0448\u0438\u043D\u0443", "\u043A\u0443\u0440\u0441\u0438\u0432\u043D\u044B\u0445", "\u0433\u043E\u0440", "\u0431\u0440\u043E\u0441\u0438\u043B", "\u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439", "\u0432\u0437\u0433\u043B\u044F\u0434", "\u043D\u0430\u0437\u0430\u0434", "\u0441\u0438\u043B\u0443\u044D\u0442", "\u0441\u0432\u043E\u0435\u0433\u043E", "\u0440\u043E\u0434\u043D\u043E\u0433\u043E", "\u0433\u043E\u0440\u043E\u0434\u0430", "\u0431\u0443\u043A\u0432\u043E\u0433\u0440\u0430\u0434", "\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A", "\u0434\u0435\u0440\u0435\u0432\u043D\u0438", "\u0430\u043B\u0444\u0430\u0432\u0438\u0442", "\u043F\u043E\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A", "\u0441\u0432\u043E\u0435\u0433\u043E", "\u043F\u0435\u0440\u0435\u0443\u043B\u043A\u0430", "\u0433\u0440\u0443\u0441\u0442\u043D\u044B\u0439", "\u0440\u0435\u0442\u043E\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0439", "\u0432\u043E\u043F\u0440\u043E\u0441", "\u0441\u043A\u0430\u0442\u0438\u043B\u0441\u044F", "\u0435\u0433\u043E", "\u0449\u0435\u043A\u0435", "\u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u043B", "\u0441\u0432\u043E\u0439", "\u043F\u0443\u0442\u044C", "\u0434\u043E\u0440\u043E\u0433\u0435", "\u0432\u0441\u0442\u0440\u0435\u0442\u0438\u043B", "\u0440\u0443\u043A\u043E\u043F\u0438\u0441\u044C", "\u043E\u043D\u0430", "\u043F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0434\u0438\u043B\u0430", "\u043C\u043E\u0435\u0439", "\u0432\u0441\u0435", "\u043F\u0435\u0440\u0435\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u0442\u0441\u044F", "\u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E", "\u0440\u0430\u0437", "\u0435\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435", "\u0447\u0442\u043E", "\u043C\u0435\u043D\u044F", "\u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C", "\u044D\u0442\u043E", "\u043F\u0440\u0438\u0441\u0442\u0430\u0432\u043A\u0430", "\u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0439\u0441\u044F", "\u0442\u044B", "\u043B\u0443\u0447\u0448\u0435", "\u0441\u0432\u043E\u044E", "\u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u0443\u044E", "\u0441\u0442\u0440\u0430\u043D\u0443", "\u043F\u043E\u0441\u043B\u0443\u0448\u0430\u0432\u0448\u0438\u0441\u044C", "\u0440\u0443\u043A\u043E\u043F\u0438\u0441\u0438", "\u043D\u0430\u0448", "\u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u043B", "\u0441\u0432\u043E\u0439", "\u043F\u0443\u0442\u044C", "\u0432\u0441\u043A\u043E\u0440\u0435", "\u0435\u043C\u0443", "\u043F\u043E\u0432\u0441\u0442\u0440\u0435\u0447\u0430\u043B\u0441\u044F", "\u043A\u043E\u0432\u0430\u0440\u043D\u044B\u0439", "\u0441\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044C", "\u0440\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0445", "\u0442\u0435\u043A\u0441\u0442\u043E\u0432", "\u043D\u0430\u043F\u043E\u0438\u0432\u0448\u0438\u0439", "\u044F\u0437\u044B\u043A\u043E\u043C", "\u0440\u0435\u0447\u044C\u044E", "\u0437\u0430\u043C\u0430\u043D\u0438\u0432\u0448\u0438\u0439", "\u0441\u0432\u043E\u0435", "\u0430\u0433\u0435\u043D\u0442\u0441\u0442\u0432\u043E", "\u043A\u043E\u0442\u043E\u0440\u043E\u0435", "\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043B\u043E", "\u0441\u043D\u043E\u0432\u0430", "\u0441\u043D\u043E\u0432\u0430", "\u0441\u0432\u043E\u0438\u0445", "\u043F\u0440\u043E\u0435\u043A\u0442\u0430\u0445", "\u0435\u0441\u043B\u0438", "\u043F\u0435\u0440\u0435\u043F\u0438\u0441\u0430\u043B\u0438", "\u0442\u043E", "\u0436\u0438\u0432\u0435\u0442", "\u0442\u0430\u043C", "\u0434\u043E", "\u0441\u0438\u0445", "\u043F\u043E\u0440"]
};
var sp = {
  "common": ["mujer", "uno", "dolor", "m\xE1s", "de", "poder", "mismo", "si"],
  "words": ["ejercicio", "preferencia", "perspicacia", "laboral", "pa\xF1o", "suntuoso", "molde", "namibia", "planeador", "mirar", "dem\xE1s", "oficinista", "excepci\xF3n", "odio", "consecuencia", "casi", "auto", "chicharra", "velo", "elixir", "ataque", "no", "odio", "temporal", "cu\xF3rum", "dign\xEDsimo", "facilismo", "letra", "nihilista", "expedici\xF3n", "alma", "alveolar", "aparte", "le\xF3n", "animal", "como", "paria", "belleza", "modo", "natividad", "justo", "ataque", "s\xE9quito", "pillo", "sed", "ex", "y", "voluminoso", "temporalidad", "verdades", "racional", "asunci\xF3n", "incidente", "marejada", "placenta", "amanecer", "fuga", "previsor", "presentaci\xF3n", "lejos", "necesariamente", "sospechoso", "adiposidad", "quind\xEDo", "p\xF3cima", "voluble", "d\xE9bito", "sinti\xF3", "accesorio", "falda", "sapiencia", "volutas", "queso", "permacultura", "laudo", "soluciones", "entero", "pan", "litro", "tonelada", "culpa", "libertario", "mosca", "dictado", "reincidente", "nascimiento", "dolor", "escolar", "impedimento", "m\xEDnima", "mayores", "repugnante", "dulce", "obcecado", "monta\xF1a", "enigma", "total", "delet\xE9reo", "d\xE9cima", "c\xE1bala", "fotograf\xEDa", "dolores", "molesto", "olvido", "paciencia", "resiliencia", "voluntad", "molestias", "magn\xEDfico", "distinci\xF3n", "ovni", "marejada", "cerro", "torre", "y", "abogada", "manantial", "corporal", "agua", "crep\xFAsculo", "ataque", "desierto", "laboriosamente", "angustia", "afortunado", "alma", "encefalograma", "materialidad", "cosas", "o", "renuncia", "error", "menos", "conejo", "abad\xEDa", "analfabeto", "remo", "fugacidad", "oficio", "en", "alm\xE1cigo", "vos", "pan", "represi\xF3n", "n\xFAmeros", "triste", "refugiado", "trote", "inventor", "corchea", "repelente", "magma", "recusado", "patr\xF3n", "expl\xEDcito", "paloma", "s\xEDndrome", "inmune", "autoinmune", "comodidad", "ley", "vietnamita", "demonio", "tasmania", "repeler", "ap\xE9ndice", "arquitecto", "columna", "yugo", "computador", "mula", "a", "prop\xF3sito", "fantas\xEDa", "alias", "rayo", "tenedor", "deleznable", "ventana", "cara", "anemia", "corrupto"]
};
var vocabularies = {
  ru,
  sp,
  latin
};
var reLorem = /^lorem([a-z]*)(\d*)(-\d*)?$/i;
function lorem(node, ancestors, config) {
  let m;
  if (node.name && (m = node.name.match(reLorem))) {
    const db = vocabularies[m[1]] || vocabularies.latin;
    const minWordCount = m[2] ? Math.max(1, Number(m[2])) : 30;
    const maxWordCount = m[3] ? Math.max(minWordCount, Number(m[3].slice(1))) : minWordCount;
    const wordCount = rand(minWordCount, maxWordCount);
    const repeat = node.repeat || findRepeater(ancestors);
    node.name = node.attributes = void 0;
    node.value = [paragraph(db, wordCount, !repeat || repeat.value === 0)];
    if (node.repeat && ancestors.length > 1) {
      resolveImplicitTag(node, ancestors, config);
    }
  }
}
function rand(from, to) {
  return Math.floor(Math.random() * (to - from) + from);
}
function sample(arr, count) {
  const len = arr.length;
  const iterations = Math.min(len, count);
  const result = [];
  while (result.length < iterations) {
    const str = arr[rand(0, len)];
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}
function choice(val) {
  return val[rand(0, val.length - 1)];
}
function sentence(words, end) {
  if (words.length) {
    words = [capitalize(words[0])].concat(words.slice(1));
  }
  return words.join(" ") + (end || choice("?!..."));
}
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}
function insertCommas(words) {
  if (words.length < 2) {
    return words;
  }
  words = words.slice();
  const len = words.length;
  const hasComma = /,$/;
  let totalCommas = 0;
  if (len > 3 && len <= 6) {
    totalCommas = rand(0, 1);
  } else if (len > 6 && len <= 12) {
    totalCommas = rand(0, 2);
  } else {
    totalCommas = rand(1, 4);
  }
  for (let i = 0, pos; i < totalCommas; i++) {
    pos = rand(0, len - 2);
    if (!hasComma.test(words[pos])) {
      words[pos] += ",";
    }
  }
  return words;
}
function paragraph(dict, wordCount, startWithCommon) {
  const result = [];
  let totalWords = 0;
  let words;
  if (startWithCommon && dict.common) {
    words = dict.common.slice(0, wordCount);
    totalWords += words.length;
    result.push(sentence(insertCommas(words), "."));
  }
  while (totalWords < wordCount) {
    words = sample(dict.words, Math.min(rand(2, 30), wordCount - totalWords));
    totalWords += words.length;
    result.push(sentence(insertCommas(words)));
  }
  return result.join(" ");
}
function findRepeater(ancestors) {
  for (let i = ancestors.length - 1; i >= 0; i--) {
    const element2 = ancestors[i];
    if (element2.type === "AbbreviationNode" && element2.repeat) {
      return element2.repeat;
    }
  }
}
function jsx(node) {
  if (node.attributes) {
    node.attributes.forEach(rename);
  }
}
function rename(attr) {
  if (attr.name === "class") {
    attr.name = "className";
  } else if (attr.name === "for") {
    attr.name = "htmlFor";
  }
}
function xsl(node) {
  if (matchesName(node.name) && node.attributes && (node.children.length || node.value)) {
    node.attributes = node.attributes.filter(isAllowed);
  }
}
function isAllowed(attr) {
  return attr.name !== "select";
}
function matchesName(name) {
  return name === "xsl:variable" || name === "xsl:with-param";
}
var reElement = /^(-+)([a-z0-9]+[a-z0-9-]*)/i;
var reModifier = /^(_+)([a-z0-9]+[a-z0-9-_]*)/i;
var blockCandidates1 = className => /^[a-z]\-/i.test(className);
var blockCandidates2 = className => /^[a-z]/i.test(className);
function bem(node, ancestors, config) {
  expandClassNames(node);
  expandShortNotation(node, ancestors, config);
}
function expandClassNames(node) {
  const data = getBEMData(node);
  const classNames = [];
  for (const cl of data.classNames) {
    const ix = cl.indexOf("_");
    if (ix > 0 && !cl.startsWith("-")) {
      classNames.push(cl.slice(0, ix));
      classNames.push(cl.slice(ix));
    } else {
      classNames.push(cl);
    }
  }
  if (classNames.length) {
    data.classNames = classNames.filter(uniqueClass);
    data.block = findBlockName(data.classNames);
    updateClass(node, data.classNames.join(" "));
  }
}
function expandShortNotation(node, ancestors, config) {
  const data = getBEMData(node);
  const classNames = [];
  const {
    options
  } = config;
  const path = ancestors.slice(1).concat(node);
  for (let cl of data.classNames) {
    let prefix = "";
    let m;
    const originalClass = cl;
    if (m = cl.match(reElement)) {
      prefix = getBlockName(path, m[1].length, config.context) + options["bem.element"] + m[2];
      classNames.push(prefix);
      cl = cl.slice(m[0].length);
    }
    if (m = cl.match(reModifier)) {
      if (!prefix) {
        prefix = getBlockName(path, m[1].length);
        classNames.push(prefix);
      }
      classNames.push(`${prefix}${options["bem.modifier"]}${m[2]}`);
      cl = cl.slice(m[0].length);
    }
    if (cl === originalClass) {
      classNames.push(originalClass);
    }
  }
  const arrClassNames = classNames.filter(uniqueClass);
  if (arrClassNames.length) {
    updateClass(node, arrClassNames.join(" "));
  }
}
function getBEMData(node) {
  if (!node._bem) {
    let classValue = "";
    if (node.attributes) {
      for (const attr of node.attributes) {
        if (attr.name === "class" && attr.value) {
          classValue = stringifyValue(attr.value);
          break;
        }
      }
    }
    node._bem = parseBEM(classValue);
  }
  return node._bem;
}
function getBEMDataFromContext(context) {
  if (!context._bem) {
    context._bem = parseBEM(context.attributes && context.attributes.class || "");
  }
  return context._bem;
}
function parseBEM(classValue) {
  const classNames = classValue ? classValue.split(/\s+/) : [];
  return {
    classNames,
    block: findBlockName(classNames)
  };
}
function getBlockName(ancestors, depth = 0, context) {
  const maxParentIx = 0;
  let parentIx = Math.max(ancestors.length - depth, maxParentIx);
  do {
    const parent = ancestors[parentIx];
    if (parent) {
      const data = getBEMData(parent);
      if (data.block) {
        return data.block;
      }
    }
  } while (maxParentIx < parentIx--);
  if (context) {
    const data = getBEMDataFromContext(context);
    if (data.block) {
      return data.block;
    }
  }
  return "";
}
function findBlockName(classNames) {
  return find(classNames, blockCandidates1) || find(classNames, blockCandidates2) || void 0;
}
function find(classNames, filter) {
  for (const cl of classNames) {
    if (reElement.test(cl) || reModifier.test(cl)) {
      break;
    }
    if (filter(cl)) {
      return cl;
    }
  }
}
function updateClass(node, value) {
  for (const attr of node.attributes) {
    if (attr.name === "class") {
      attr.value = [value];
      break;
    }
  }
}
function stringifyValue(value) {
  let result = "";
  for (const t of value) {
    result += typeof t === "string" ? t : t.name;
  }
  return result;
}
function uniqueClass(item, ix, arr) {
  return !!item && arr.indexOf(item) === ix;
}
function walk$1(abbr, visitor, state) {
  const callback = (ctx, index, items) => {
    const {
      parent,
      current
    } = state;
    state.parent = current;
    state.current = ctx;
    visitor(ctx, index, items, state, next2);
    state.current = current;
    state.parent = parent;
  };
  const next2 = (node, index, items) => {
    state.ancestors.push(state.current);
    callback(node, index, items);
    state.ancestors.pop();
  };
  abbr.children.forEach(callback);
}
function createWalkState(config) {
  return {
    current: null,
    parent: void 0,
    ancestors: [],
    config,
    field: 1,
    out: createOutputStream(config.options)
  };
}
var caret = [{
  type: "Field",
  index: 0,
  name: ""
}];
function isSnippet(node) {
  return node ? !node.name && !node.attributes : false;
}
function isInlineElement(node, config) {
  return node ? isInline(node, config) : false;
}
function isField(token) {
  return typeof token === "object" && token.type === "Field";
}
function pushTokens(tokens, state) {
  const {
    out
  } = state;
  let largestIndex = -1;
  for (const t of tokens) {
    if (typeof t === "string") {
      pushString(out, t);
    } else {
      pushField(out, state.field + t.index, t.name);
      if (t.index > largestIndex) {
        largestIndex = t.index;
      }
    }
  }
  if (largestIndex !== -1) {
    state.field += largestIndex + 1;
  }
}
function splitByLines$1(tokens) {
  const result = [];
  let line = [];
  for (const t of tokens) {
    if (typeof t === "string") {
      const lines = t.split(/\r\n?|\n/g);
      line.push(lines.shift() || "");
      while (lines.length) {
        result.push(line);
        line = [lines.shift() || ""];
      }
    } else {
      line.push(t);
    }
  }
  line.length && result.push(line);
  return result;
}
function shouldOutputAttribute(attr) {
  return !attr.implied || attr.valueType !== "raw" || !!attr.value && attr.value.length > 0;
}
function template(text2) {
  const tokens = [];
  const scanner = {
    pos: 0,
    text: text2
  };
  let placeholder;
  let offset = scanner.pos;
  let pos = scanner.pos;
  while (scanner.pos < scanner.text.length) {
    pos = scanner.pos;
    if (placeholder = consumePlaceholder(scanner)) {
      if (offset !== scanner.pos) {
        tokens.push(text2.slice(offset, pos));
      }
      tokens.push(placeholder);
      offset = scanner.pos;
    } else {
      scanner.pos++;
    }
  }
  if (offset !== scanner.pos) {
    tokens.push(text2.slice(offset));
  }
  return tokens;
}
function consumePlaceholder(scanner) {
  if (peek(scanner) === 91) {
    const start = ++scanner.pos;
    let namePos = start;
    let afterPos = start;
    let stack = 1;
    while (scanner.pos < scanner.text.length) {
      const code2 = peek(scanner);
      if (isTokenStart(code2)) {
        namePos = scanner.pos;
        while (isToken(peek(scanner))) {
          scanner.pos++;
        }
        afterPos = scanner.pos;
      } else {
        if (code2 === 91) {
          stack++;
        } else if (code2 === 93) {
          if (--stack === 0) {
            return {
              before: scanner.text.slice(start, namePos),
              after: scanner.text.slice(afterPos, scanner.pos++),
              name: scanner.text.slice(namePos, afterPos)
            };
          }
        }
        scanner.pos++;
      }
    }
  }
}
function peek(scanner, pos = scanner.pos) {
  return scanner.text.charCodeAt(pos);
}
function isTokenStart(code2) {
  return code2 >= 65 && code2 <= 90;
}
function isToken(code2) {
  return isTokenStart(code2) || code2 > 47 && code2 < 58 || code2 === 95 || code2 === 45;
}
function createCommentState(config) {
  const {
    options
  } = config;
  return {
    enabled: options["comment.enabled"],
    trigger: options["comment.trigger"],
    before: options["comment.before"] ? template(options["comment.before"]) : void 0,
    after: options["comment.after"] ? template(options["comment.after"]) : void 0
  };
}
function commentNodeBefore(node, state) {
  if (shouldComment(node, state) && state.comment.before) {
    output(node, state.comment.before, state);
  }
}
function commentNodeAfter(node, state) {
  if (shouldComment(node, state) && state.comment.after) {
    output(node, state.comment.after, state);
  }
}
function shouldComment(node, state) {
  const {
    comment
  } = state;
  if (!comment.enabled || !comment.trigger || !node.name || !node.attributes) {
    return false;
  }
  for (const attr of node.attributes) {
    if (attr.name && comment.trigger.includes(attr.name)) {
      return true;
    }
  }
  return false;
}
function output(node, tokens, state) {
  const attrs = {};
  const {
    out
  } = state;
  for (const attr of node.attributes) {
    if (attr.name && attr.value) {
      attrs[attr.name.toUpperCase()] = attr.value;
    }
  }
  for (const token of tokens) {
    if (typeof token === "string") {
      pushString(out, token);
    } else if (attrs[token.name]) {
      pushString(out, token.before);
      pushTokens(attrs[token.name], state);
      pushString(out, token.after);
    }
  }
}
var htmlTagRegex = /^<([\w\-:]+)[\s>]/;
function html(abbr, config) {
  const state = createWalkState(config);
  state.comment = createCommentState(config);
  walk$1(abbr, element, state);
  return state.out.value;
}
function element(node, index, items, state, next2) {
  const {
    out,
    config
  } = state;
  const format = shouldFormat(node, index, items, state);
  const level = getIndent(state);
  out.level += level;
  format && pushNewline(out, true);
  if (node.name) {
    const name = tagName(node.name, config);
    commentNodeBefore(node, state);
    pushString(out, `<${name}`);
    if (node.attributes) {
      for (const attr of node.attributes) {
        if (shouldOutputAttribute(attr)) {
          pushAttribute(attr, state);
        }
      }
    }
    if (node.selfClosing && !node.children.length && !node.value) {
      pushString(out, `${selfClose(config)}>`);
    } else {
      pushString(out, ">");
      if (!pushSnippet(node, state, next2)) {
        if (node.value) {
          const innerFormat = node.value.some(hasNewline) || startsWithBlockTag(node.value, config);
          innerFormat && pushNewline(state.out, ++out.level);
          pushTokens(node.value, state);
          innerFormat && pushNewline(state.out, --out.level);
        }
        node.children.forEach(next2);
        if (!node.value && !node.children.length) {
          const innerFormat = config.options["output.formatLeafNode"] || config.options["output.formatForce"].includes(node.name);
          innerFormat && pushNewline(state.out, ++out.level);
          pushTokens(caret, state);
          innerFormat && pushNewline(state.out, --out.level);
        }
      }
      pushString(out, `</${name}>`);
      commentNodeAfter(node, state);
    }
  } else if (!pushSnippet(node, state, next2) && node.value) {
    pushTokens(node.value, state);
    node.children.forEach(next2);
  }
  if (format && index === items.length - 1 && state.parent) {
    const offset = isSnippet(state.parent) ? 0 : 1;
    pushNewline(out, out.level - offset);
  }
  out.level -= level;
}
function pushAttribute(attr, state) {
  const {
    out,
    config
  } = state;
  if (attr.name) {
    const name = attrName(attr.name, config);
    const lQuote = attrQuote(attr, config, true);
    const rQuote = attrQuote(attr, config);
    let value = attr.value;
    if (isBooleanAttribute(attr, config) && !value) {
      if (!config.options["output.compactBoolean"]) {
        value = [name];
      }
    } else if (!value) {
      value = caret;
    }
    pushString(out, " " + name);
    if (value) {
      pushString(out, "=" + lQuote);
      pushTokens(value, state);
      pushString(out, rQuote);
    } else if (config.options["output.selfClosingStyle"] !== "html") {
      pushString(out, "=" + lQuote + rQuote);
    }
  }
}
function pushSnippet(node, state, next2) {
  if (node.value && node.children.length) {
    const fieldIx = node.value.findIndex(isField);
    if (fieldIx !== -1) {
      pushTokens(node.value.slice(0, fieldIx), state);
      const line = state.out.line;
      let pos = fieldIx + 1;
      node.children.forEach(next2);
      if (state.out.line !== line && typeof node.value[pos] === "string") {
        pushString(state.out, node.value[pos++].trimLeft());
      }
      pushTokens(node.value.slice(pos), state);
      return true;
    }
  }
  return false;
}
function shouldFormat(node, index, items, state) {
  const {
    config,
    parent
  } = state;
  if (!config.options["output.format"]) {
    return false;
  }
  if (index === 0 && !parent) {
    return false;
  }
  if (parent && isSnippet(parent) && items.length === 1) {
    return false;
  }
  if (isSnippet(node)) {
    const format = isSnippet(items[index - 1]) || isSnippet(items[index + 1]) || node.value.some(hasNewline) || node.value.some(isField) && node.children.length;
    if (format) {
      return true;
    }
  }
  if (isInline(node, config)) {
    if (index === 0) {
      for (let i = 0; i < items.length; i++) {
        if (!isInline(items[i], config)) {
          return true;
        }
      }
    } else if (!isInline(items[index - 1], config)) {
      return true;
    }
    if (config.options["output.inlineBreak"]) {
      let adjacentInline = 1;
      let before = index;
      let after = index;
      while (isInlineElement(items[--before], config)) {
        adjacentInline++;
      }
      while (isInlineElement(items[++after], config)) {
        adjacentInline++;
      }
      if (adjacentInline >= config.options["output.inlineBreak"]) {
        return true;
      }
    }
    for (let i = 0, il = node.children.length; i < il; i++) {
      if (shouldFormat(node.children[i], i, node.children, state)) {
        return true;
      }
    }
    return false;
  }
  return true;
}
function getIndent(state) {
  const {
    config,
    parent
  } = state;
  if (!parent || isSnippet(parent) || parent.name && config.options["output.formatSkip"].includes(parent.name)) {
    return 0;
  }
  return 1;
}
function hasNewline(value) {
  return typeof value === "string" && /\r|\n/.test(value);
}
function startsWithBlockTag(value, config) {
  if (value.length && typeof value[0] === "string") {
    const matches = htmlTagRegex.exec(value[0]);
    if ((matches === null || matches === void 0 ? void 0 : matches.length) && !config.options["inlineElements"].includes(matches[1].toLowerCase())) {
      return true;
    }
  }
  return false;
}
function indentFormat(abbr, config, options) {
  const state = createWalkState(config);
  state.options = options || {};
  walk$1(abbr, element$1, state);
  return state.out.value;
}
function element$1(node, index, items, state, next2) {
  const {
    out,
    options
  } = state;
  const {
    primary,
    secondary
  } = collectAttributes(node);
  const level = state.parent ? 1 : 0;
  out.level += level;
  if (shouldFormat$1(node, index, items, state)) {
    pushNewline(out, true);
  }
  if (node.name && (node.name !== "div" || !primary.length)) {
    pushString(out, (options.beforeName || "") + node.name + (options.afterName || ""));
  }
  pushPrimaryAttributes(primary, state);
  pushSecondaryAttributes(secondary.filter(shouldOutputAttribute), state);
  if (node.selfClosing && !node.value && !node.children.length) {
    if (state.options.selfClose) {
      pushString(out, state.options.selfClose);
    }
  } else {
    pushValue(node, state);
    node.children.forEach(next2);
  }
  out.level -= level;
}
function collectAttributes(node) {
  const primary = [];
  const secondary = [];
  if (node.attributes) {
    for (const attr of node.attributes) {
      if (isPrimaryAttribute(attr)) {
        primary.push(attr);
      } else {
        secondary.push(attr);
      }
    }
  }
  return {
    primary,
    secondary
  };
}
function pushPrimaryAttributes(attrs, state) {
  for (const attr of attrs) {
    if (attr.value) {
      if (attr.name === "class") {
        pushString(state.out, ".");
        const tokens = attr.value.map(t => typeof t === "string" ? t.replace(/\s+/g, ".") : t);
        pushTokens(tokens, state);
      } else {
        pushString(state.out, "#");
        pushTokens(attr.value, state);
      }
    }
  }
}
function pushSecondaryAttributes(attrs, state) {
  if (attrs.length) {
    const {
      out,
      config,
      options
    } = state;
    options.beforeAttribute && pushString(out, options.beforeAttribute);
    for (let i = 0; i < attrs.length; i++) {
      const attr = attrs[i];
      pushString(out, attrName(attr.name || "", config));
      if (isBooleanAttribute(attr, config) && !attr.value) {
        if (!config.options["output.compactBoolean"] && options.booleanValue) {
          pushString(out, "=" + options.booleanValue);
        }
      } else {
        pushString(out, "=" + attrQuote(attr, config, true));
        pushTokens(attr.value || caret, state);
        pushString(out, attrQuote(attr, config));
      }
      if (i !== attrs.length - 1 && options.glueAttribute) {
        pushString(out, options.glueAttribute);
      }
    }
    options.afterAttribute && pushString(out, options.afterAttribute);
  }
}
function pushValue(node, state) {
  if (!node.value && node.children.length) {
    return;
  }
  const value = node.value || caret;
  const lines = splitByLines$1(value);
  const {
    out,
    options
  } = state;
  if (lines.length === 1) {
    if (node.name || node.attributes) {
      push(out, " ");
    }
    pushTokens(value, state);
  } else {
    const lineLengths = [];
    let maxLength = 0;
    for (const line of lines) {
      const len = valueLength(line);
      lineLengths.push(len);
      if (len > maxLength) {
        maxLength = len;
      }
    }
    out.level++;
    for (let i = 0; i < lines.length; i++) {
      pushNewline(out, true);
      options.beforeTextLine && push(out, options.beforeTextLine);
      pushTokens(lines[i], state);
      if (options.afterTextLine) {
        push(out, " ".repeat(maxLength - lineLengths[i]));
        push(out, options.afterTextLine);
      }
    }
    out.level--;
  }
}
function isPrimaryAttribute(attr) {
  return attr.name === "class" || attr.name === "id";
}
function valueLength(tokens) {
  let len = 0;
  for (const token of tokens) {
    len += typeof token === "string" ? token.length : token.name.length;
  }
  return len;
}
function shouldFormat$1(node, index, items, state) {
  if (!state.parent && index === 0) {
    return false;
  }
  return !isSnippet(node);
}
function haml(abbr, config) {
  return indentFormat(abbr, config, {
    beforeName: "%",
    beforeAttribute: "(",
    afterAttribute: ")",
    glueAttribute: " ",
    afterTextLine: " |",
    booleanValue: "true",
    selfClose: "/"
  });
}
function slim(abbr, config) {
  return indentFormat(abbr, config, {
    beforeAttribute: " ",
    glueAttribute: " ",
    beforeTextLine: "| ",
    selfClose: "/"
  });
}
function pug(abbr, config) {
  return indentFormat(abbr, config, {
    beforeAttribute: "(",
    afterAttribute: ")",
    glueAttribute: ", ",
    beforeTextLine: "| ",
    selfClose: config.options["output.selfClosingStyle"] === "xml" ? "/" : ""
  });
}
var formatters = {
  html,
  haml,
  slim,
  pug
};
function parse(abbr, config) {
  let oldTextValue;
  if (typeof abbr === "string") {
    let parseOpt = config;
    if (config.options["jsx.enabled"]) {
      parseOpt = Object.assign(Object.assign({}, parseOpt), {
        jsx: true
      });
    }
    if (config.options["markup.href"]) {
      parseOpt = Object.assign(Object.assign({}, parseOpt), {
        href: true
      });
    }
    abbr = parseAbbreviation(abbr, parseOpt);
    oldTextValue = config.text;
    config.text = void 0;
  }
  abbr = resolveSnippets(abbr, config);
  walk(abbr, transform, config);
  config.text = oldTextValue !== null && oldTextValue !== void 0 ? oldTextValue : config.text;
  return abbr;
}
function stringify(abbr, config) {
  const formatter = formatters[config.syntax] || html;
  return formatter(abbr, config);
}
function transform(node, ancestors, config) {
  implicitTag(node, ancestors, config);
  mergeAttributes(node, config);
  lorem(node, ancestors, config);
  if (config.syntax === "xsl") {
    xsl(node);
  }
  if (config.options["jsx.enabled"]) {
    jsx(node);
  }
  if (config.options["bem.enabled"]) {
    bem(node, ancestors, config);
  }
}
var reProperty = /^([a-z-]+)(?:\s*:\s*([^\n\r;]+?);*)?$/;
var opt = {
  value: true
};
function createSnippet(key, value) {
  const m = value.match(reProperty);
  if (m) {
    const keywords = {};
    const parsed = m[2] ? m[2].split("|").map(parseValue) : [];
    for (const item of parsed) {
      for (const cssVal of item) {
        collectKeywords(cssVal, keywords);
      }
    }
    return {
      type: "Property",
      key,
      property: m[1],
      value: parsed,
      keywords,
      dependencies: []
    };
  }
  return {
    type: "Raw",
    key,
    value
  };
}
function nest(snippets) {
  snippets = snippets.slice().sort(snippetsSort);
  const stack = [];
  let prev;
  for (const cur of snippets.filter(isProperty)) {
    while (stack.length) {
      prev = stack[stack.length - 1];
      if (cur.property.startsWith(prev.property) && cur.property.charCodeAt(prev.property.length) === 45) {
        prev.dependencies.push(cur);
        stack.push(cur);
        break;
      }
      stack.pop();
    }
    if (!stack.length) {
      stack.push(cur);
    }
  }
  return snippets;
}
function snippetsSort(a, b) {
  if (a.key === b.key) {
    return 0;
  }
  return a.key < b.key ? -1 : 1;
}
function parseValue(value) {
  return parse$2(value.trim(), opt)[0].value;
}
function isProperty(snippet) {
  return snippet.type === "Property";
}
function collectKeywords(cssVal, dest) {
  for (const v of cssVal.value) {
    if (v.type === "Literal") {
      dest[v.value] = v;
    } else if (v.type === "FunctionCall") {
      dest[v.name] = v;
    } else if (v.type === "Field") {
      const value = v.name.trim();
      if (value) {
        dest[value] = {
          type: "Literal",
          value
        };
      }
    }
  }
}
function scoreMatch(str1, str2, partialMatch = false) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if (str1 === str2) {
    return 1;
  }
  if (!str1 || !str2 || str1.charCodeAt(0) !== str2.charCodeAt(0)) {
    return 0;
  }
  const str1Len = str1.length;
  const str2Len = str2.length;
  if (!partialMatch && str1Len > str2Len) {
    return 0;
  }
  const minLength = Math.min(str1Len, str2Len);
  const maxLength = Math.max(str1Len, str2Len);
  let i = 1;
  let j = 1;
  let score = maxLength;
  let ch1 = 0;
  let ch2 = 0;
  let found = false;
  let acronym = false;
  while (i < str1Len) {
    ch1 = str1.charCodeAt(i);
    found = false;
    acronym = false;
    while (j < str2Len) {
      ch2 = str2.charCodeAt(j);
      if (ch1 === ch2) {
        found = true;
        score += maxLength - (acronym ? i : j);
        break;
      }
      acronym = ch2 === 45;
      j++;
    }
    if (!found) {
      if (!partialMatch) {
        return 0;
      }
      break;
    }
    i++;
  }
  const matchRatio = i / maxLength;
  const delta = maxLength - minLength;
  const maxScore = sum(maxLength) - sum(delta);
  return score * matchRatio / maxScore;
}
function sum(n) {
  return n * (n + 1) / 2;
}
function color(token, shortHex) {
  if (!token.r && !token.g && !token.b && !token.a) {
    return "transparent";
  } else if (token.a === 1) {
    return asHex(token, shortHex);
  }
  return asRGB(token);
}
function asHex(token, short) {
  const fn = short && isShortHex(token.r) && isShortHex(token.g) && isShortHex(token.b) ? toShortHex : toHex;
  return "#" + fn(token.r) + fn(token.g) + fn(token.b);
}
function asRGB(token) {
  const values = [token.r, token.g, token.b];
  if (token.a !== 1) {
    values.push(frac(token.a, 8));
  }
  return `${values.length === 3 ? "rgb" : "rgba"}(${values.join(", ")})`;
}
function frac(num, digits = 4) {
  return num.toFixed(digits).replace(/\.?0+$/, "");
}
function isShortHex(hex) {
  return !(hex % 17);
}
function toShortHex(num) {
  return (num >> 4).toString(16);
}
function toHex(num) {
  return pad(num.toString(16), 2);
}
function pad(value, len) {
  while (value.length < len) {
    value = "0" + value;
  }
  return value;
}
function css(abbr, config) {
  var _a;
  const out = createOutputStream(config.options);
  const format = config.options["output.format"];
  if (((_a = config.context) === null || _a === void 0 ? void 0 : _a.name) === "@@section") {
    abbr = abbr.filter(node => node.snippet);
  }
  for (let i = 0; i < abbr.length; i++) {
    if (format && i !== 0) {
      pushNewline(out, true);
    }
    property(abbr[i], out, config);
  }
  return out.value;
}
function property(node, out, config) {
  const isJSON = config.options["stylesheet.json"];
  if (node.name) {
    const name = isJSON ? toCamelCase(node.name) : node.name;
    pushString(out, name + config.options["stylesheet.between"]);
    if (node.value.length) {
      propertyValue(node, out, config);
    } else {
      pushField(out, 0, "");
    }
    if (isJSON) {
      push(out, ",");
    } else {
      outputImportant(node, out, true);
      push(out, config.options["stylesheet.after"]);
    }
  } else {
    for (const cssVal of node.value) {
      for (const v of cssVal.value) {
        outputToken(v, out, config);
      }
    }
    outputImportant(node, out, node.value.length > 0);
  }
}
function propertyValue(node, out, config) {
  const isJSON = config.options["stylesheet.json"];
  const num = isJSON ? getSingleNumeric(node) : null;
  if (num && (!num.unit || num.unit === "px")) {
    push(out, String(num.value));
  } else {
    const quote2 = getQuote(config);
    isJSON && push(out, quote2);
    for (let i = 0; i < node.value.length; i++) {
      if (i !== 0) {
        push(out, ", ");
      }
      outputValue(node.value[i], out, config);
    }
    isJSON && push(out, quote2);
  }
}
function outputImportant(node, out, separator) {
  if (node.important) {
    if (separator) {
      push(out, " ");
    }
    push(out, "!important");
  }
}
function outputValue(value, out, config) {
  for (let i = 0, prevEnd = -1; i < value.value.length; i++) {
    const token = value.value[i];
    if (i !== 0 && (token.type !== "Field" || token.start !== prevEnd)) {
      push(out, " ");
    }
    outputToken(token, out, config);
    prevEnd = token["end"];
  }
}
function outputToken(token, out, config) {
  if (token.type === "ColorValue") {
    push(out, color(token, config.options["stylesheet.shortHex"]));
  } else if (token.type === "Literal") {
    pushString(out, token.value);
  } else if (token.type === "NumberValue") {
    pushString(out, frac(token.value, 4) + token.unit);
  } else if (token.type === "StringValue") {
    const quote2 = token.quote === "double" ? '"' : "'";
    pushString(out, quote2 + token.value + quote2);
  } else if (token.type === "Field") {
    pushField(out, token.index, token.name);
  } else if (token.type === "FunctionCall") {
    push(out, token.name + "(");
    for (let i = 0; i < token.arguments.length; i++) {
      if (i) {
        push(out, ", ");
      }
      outputValue(token.arguments[i], out, config);
    }
    push(out, ")");
  }
}
function getSingleNumeric(node) {
  if (node.value.length === 1) {
    const cssVal = node.value[0];
    if (cssVal.value.length === 1 && cssVal.value[0].type === "NumberValue") {
      return cssVal.value[0];
    }
  }
}
function toCamelCase(str) {
  return str.replace(/\-(\w)/g, (_, letter) => letter.toUpperCase());
}
function getQuote(config) {
  return config.options["stylesheet.jsonDoubleQuotes"] ? '"' : "'";
}
var gradientName = "lg";
function parse$1(abbr, config) {
  var _a;
  const snippets = ((_a = config.cache) === null || _a === void 0 ? void 0 : _a.stylesheetSnippets) || convertSnippets(config.snippets);
  if (config.cache) {
    config.cache.stylesheetSnippets = snippets;
  }
  if (typeof abbr === "string") {
    abbr = parse$2(abbr, {
      value: isValueScope(config)
    });
  }
  const filteredSnippets = getSnippetsForScope(snippets, config);
  for (const node of abbr) {
    resolveNode(node, filteredSnippets, config);
  }
  return abbr;
}
function convertSnippets(snippets) {
  const result = [];
  for (const key of Object.keys(snippets)) {
    result.push(createSnippet(key, snippets[key]));
  }
  return nest(result);
}
function resolveNode(node, snippets, config) {
  if (!resolveGradient(node, config)) {
    const score = config.options["stylesheet.fuzzySearchMinScore"];
    if (isValueScope(config)) {
      const propName = config.context.name;
      const snippet = snippets.find(s => s.type === "Property" && s.property === propName);
      resolveValueKeywords(node, config, snippet, score);
      node.snippet = snippet;
    } else if (node.name) {
      const snippet = findBestMatch(node.name, snippets, score, true);
      node.snippet = snippet;
      if (snippet) {
        if (snippet.type === "Property") {
          resolveAsProperty(node, snippet, config);
        } else {
          resolveAsSnippet(node, snippet);
        }
      }
    }
  }
  if (node.name || config.context) {
    resolveNumericValue(node, config);
  }
  return node;
}
function resolveGradient(node, config) {
  let gradientFn = null;
  const cssVal = node.value.length === 1 ? node.value[0] : null;
  if (cssVal && cssVal.value.length === 1) {
    const v = cssVal.value[0];
    if (v.type === "FunctionCall" && v.name === gradientName) {
      gradientFn = v;
    }
  }
  if (gradientFn || node.name === gradientName) {
    if (!gradientFn) {
      gradientFn = {
        type: "FunctionCall",
        name: "linear-gradient",
        arguments: [cssValue(field(0, ""))]
      };
    } else {
      gradientFn = Object.assign(Object.assign({}, gradientFn), {
        name: "linear-gradient"
      });
    }
    if (!config.context) {
      node.name = "background-image";
    }
    node.value = [cssValue(gradientFn)];
    return true;
  }
  return false;
}
function resolveAsProperty(node, snippet, config) {
  const abbr = node.name;
  const inlineValue = getUnmatchedPart(abbr, snippet.key);
  if (inlineValue) {
    if (node.value.length) {
      return node;
    }
    const kw = resolveKeyword(inlineValue, config, snippet);
    if (!kw) {
      return node;
    }
    node.value.push(cssValue(kw));
  }
  node.name = snippet.property;
  if (node.value.length) {
    resolveValueKeywords(node, config, snippet);
  } else if (snippet.value.length) {
    const defaultValue = snippet.value[0];
    node.value = snippet.value.length === 1 || defaultValue.some(hasField) ? defaultValue : defaultValue.map(n => wrapWithField(n, config));
  }
  return node;
}
function resolveValueKeywords(node, config, snippet, minScore) {
  for (const cssVal of node.value) {
    const value = [];
    for (const token of cssVal.value) {
      if (token.type === "Literal") {
        value.push(resolveKeyword(token.value, config, snippet, minScore) || token);
      } else if (token.type === "FunctionCall") {
        const match = resolveKeyword(token.name, config, snippet, minScore);
        if (match && match.type === "FunctionCall") {
          value.push(Object.assign(Object.assign({}, match), {
            arguments: token.arguments.concat(match.arguments.slice(token.arguments.length))
          }));
        } else {
          value.push(token);
        }
      } else {
        value.push(token);
      }
    }
    cssVal.value = value;
  }
}
function resolveAsSnippet(node, snippet) {
  let offset = 0;
  let m;
  const reField = /\$\{(\d+)(:[^}]+)?\}/g;
  const inputValue = node.value[0];
  const outputValue2 = [];
  while (m = reField.exec(snippet.value)) {
    if (offset !== m.index) {
      outputValue2.push(literal(snippet.value.slice(offset, m.index)));
    }
    offset = m.index + m[0].length;
    if (inputValue && inputValue.value.length) {
      outputValue2.push(inputValue.value.shift());
    } else {
      outputValue2.push(field(Number(m[1]), m[2] ? m[2].slice(1) : ""));
    }
  }
  const tail = snippet.value.slice(offset);
  if (tail) {
    outputValue2.push(literal(tail));
  }
  node.name = void 0;
  node.value = [cssValue(...outputValue2)];
  return node;
}
function findBestMatch(abbr, items, minScore = 0, partialMatch = false) {
  let matchedItem = null;
  let maxScore = 0;
  for (const item of items) {
    const score = scoreMatch(abbr, getScoringPart(item), partialMatch);
    if (score === 1) {
      return item;
    }
    if (score && score >= maxScore) {
      maxScore = score;
      matchedItem = item;
    }
  }
  return maxScore >= minScore ? matchedItem : null;
}
function getScoringPart(item) {
  return typeof item === "string" ? item : item.key;
}
function getUnmatchedPart(abbr, str) {
  for (let i = 0, lastPos = 0; i < abbr.length; i++) {
    lastPos = str.indexOf(abbr[i], lastPos);
    if (lastPos === -1) {
      return abbr.slice(i);
    }
    lastPos++;
  }
  return "";
}
function resolveKeyword(kw, config, snippet, minScore) {
  let ref;
  if (snippet) {
    if (ref = findBestMatch(kw, Object.keys(snippet.keywords), minScore)) {
      return snippet.keywords[ref];
    }
    for (const dep of snippet.dependencies) {
      if (ref = findBestMatch(kw, Object.keys(dep.keywords), minScore)) {
        return dep.keywords[ref];
      }
    }
  }
  if (ref = findBestMatch(kw, config.options["stylesheet.keywords"], minScore)) {
    return literal(ref);
  }
  return null;
}
function resolveNumericValue(node, config) {
  const aliases = config.options["stylesheet.unitAliases"];
  const unitless = config.options["stylesheet.unitless"];
  for (const v of node.value) {
    for (const t of v.value) {
      if (t.type === "NumberValue") {
        if (t.unit) {
          t.unit = aliases[t.unit] || t.unit;
        } else if (t.value !== 0 && !unitless.includes(node.name)) {
          t.unit = t.rawValue.includes(".") ? config.options["stylesheet.floatUnit"] : config.options["stylesheet.intUnit"];
        }
      }
    }
  }
}
function cssValue(...args) {
  return {
    type: "CSSValue",
    value: args
  };
}
function literal(value) {
  return {
    type: "Literal",
    value
  };
}
function field(index, name) {
  return {
    type: "Field",
    index,
    name
  };
}
function hasField(value) {
  for (const v of value.value) {
    if (v.type === "Field" || v.type === "FunctionCall" && v.arguments.some(hasField)) {
      return true;
    }
  }
  return false;
}
function wrapWithField(node, config, state = {
  index: 1
}) {
  let value = [];
  for (const v of node.value) {
    switch (v.type) {
      case "ColorValue":
        value.push(field(state.index++, color(v, config.options["stylesheet.shortHex"])));
        break;
      case "Literal":
        value.push(field(state.index++, v.value));
        break;
      case "NumberValue":
        value.push(field(state.index++, `${v.value}${v.unit}`));
        break;
      case "StringValue":
        const q = v.quote === "single" ? "'" : '"';
        value.push(field(state.index++, q + v.value + q));
        break;
      case "FunctionCall":
        value.push(field(state.index++, v.name), literal("("));
        for (let i = 0, il = v.arguments.length; i < il; i++) {
          value = value.concat(wrapWithField(v.arguments[i], config, state).value);
          if (i !== il - 1) {
            value.push(literal(", "));
          }
        }
        value.push(literal(")"));
        break;
      default:
        value.push(v);
    }
  }
  return Object.assign(Object.assign({}, node), {
    value
  });
}
function isValueScope(config) {
  if (config.context) {
    return config.context.name === "@@value" || !config.context.name.startsWith("@@");
  }
  return false;
}
function getSnippetsForScope(snippets, config) {
  if (config.context) {
    if (config.context.name === "@@section") {
      return snippets.filter(s => s.type === "Raw");
    }
    if (config.context.name === "@@property") {
      return snippets.filter(s => s.type === "Property");
    }
  }
  return snippets;
}
var markupSnippets = {
  "a": "a[href]",
  "a:blank": "a[href='http://${0}' target='_blank' rel='noopener noreferrer']",
  "a:link": "a[href='http://${0}']",
  "a:mail": "a[href='mailto:${0}']",
  "a:tel": "a[href='tel:+${0}']",
  "abbr": "abbr[title]",
  "acr|acronym": "acronym[title]",
  "base": "base[href]/",
  "basefont": "basefont/",
  "br": "br/",
  "frame": "frame/",
  "hr": "hr/",
  "bdo": "bdo[dir]",
  "bdo:r": "bdo[dir=rtl]",
  "bdo:l": "bdo[dir=ltr]",
  "col": "col/",
  "link": "link[rel=stylesheet href]/",
  "link:css": "link[href='${1:style}.css']",
  "link:print": "link[href='${1:print}.css' media=print]",
  "link:favicon": "link[rel='shortcut icon' type=image/x-icon href='${1:favicon.ico}']",
  "link:mf|link:manifest": "link[rel='manifest' href='${1:manifest.json}']",
  "link:touch": "link[rel=apple-touch-icon href='${1:favicon.png}']",
  "link:rss": "link[rel=alternate type=application/rss+xml title=RSS href='${1:rss.xml}']",
  "link:atom": "link[rel=alternate type=application/atom+xml title=Atom href='${1:atom.xml}']",
  "link:im|link:import": "link[rel=import href='${1:component}.html']",
  "meta": "meta/",
  "meta:utf": "meta[http-equiv=Content-Type content='text/html;charset=UTF-8']",
  "meta:vp": "meta[name=viewport content='width=${1:device-width}, initial-scale=${2:1.0}']",
  "meta:compat": "meta[http-equiv=X-UA-Compatible content='${1:IE=7}']",
  "meta:edge": "meta:compat[content='${1:ie=edge}']",
  "meta:redirect": "meta[http-equiv=refresh content='0; url=${1:http://example.com}']",
  "meta:kw": "meta[name=keywords content]",
  "meta:desc": "meta[name=description content]",
  "style": "style",
  "script": "script",
  "script:src": "script[src]",
  "img": "img[src alt]/",
  "img:s|img:srcset": "img[srcset src alt]",
  "img:z|img:sizes": "img[sizes srcset src alt]",
  "picture": "picture",
  "src|source": "source/",
  "src:sc|source:src": "source[src type]",
  "src:s|source:srcset": "source[srcset]",
  "src:t|source:type": "source[srcset type='${1:image/}']",
  "src:z|source:sizes": "source[sizes srcset]",
  "src:m|source:media": "source[media='(${1:min-width: })' srcset]",
  "src:mt|source:media:type": "source:media[type='${2:image/}']",
  "src:mz|source:media:sizes": "source:media[sizes srcset]",
  "src:zt|source:sizes:type": "source[sizes srcset type='${1:image/}']",
  "iframe": "iframe[src frameborder=0]",
  "embed": "embed[src type]/",
  "object": "object[data type]",
  "param": "param[name value]/",
  "map": "map[name]",
  "area": "area[shape coords href alt]/",
  "area:d": "area[shape=default]",
  "area:c": "area[shape=circle]",
  "area:r": "area[shape=rect]",
  "area:p": "area[shape=poly]",
  "form": "form[action]",
  "form:get": "form[method=get]",
  "form:post": "form[method=post]",
  "label": "label[for]",
  "input": "input[type=${1:text}]/",
  "inp": "input[name=${1} id=${1}]",
  "input:h|input:hidden": "input[type=hidden name]",
  "input:t|input:text": "inp[type=text]",
  "input:search": "inp[type=search]",
  "input:email": "inp[type=email]",
  "input:url": "inp[type=url]",
  "input:p|input:password": "inp[type=password]",
  "input:datetime": "inp[type=datetime]",
  "input:date": "inp[type=date]",
  "input:datetime-local": "inp[type=datetime-local]",
  "input:month": "inp[type=month]",
  "input:week": "inp[type=week]",
  "input:time": "inp[type=time]",
  "input:tel": "inp[type=tel]",
  "input:number": "inp[type=number]",
  "input:color": "inp[type=color]",
  "input:c|input:checkbox": "inp[type=checkbox]",
  "input:r|input:radio": "inp[type=radio]",
  "input:range": "inp[type=range]",
  "input:f|input:file": "inp[type=file]",
  "input:s|input:submit": "input[type=submit value]",
  "input:i|input:image": "input[type=image src alt]",
  "input:b|input:btn|input:button": "input[type=button value]",
  "input:reset": "input:button[type=reset]",
  "isindex": "isindex/",
  "select": "select[name=${1} id=${1}]",
  "select:d|select:disabled": "select[disabled.]",
  "opt|option": "option[value]",
  "textarea": "textarea[name=${1} id=${1} cols=${2:30} rows=${3:10}]",
  "marquee": "marquee[behavior direction]",
  "menu:c|menu:context": "menu[type=context]",
  "menu:t|menu:toolbar": "menu[type=toolbar]",
  "video": "video[src]",
  "audio": "audio[src]",
  "html:xml": "html[xmlns=http://www.w3.org/1999/xhtml]",
  "keygen": "keygen/",
  "command": "command/",
  "btn:s|button:s|button:submit": "button[type=submit]",
  "btn:r|button:r|button:reset": "button[type=reset]",
  "btn:d|button:d|button:disabled": "button[disabled.]",
  "fst:d|fset:d|fieldset:d|fieldset:disabled": "fieldset[disabled.]",
  "bq": "blockquote",
  "fig": "figure",
  "figc": "figcaption",
  "pic": "picture",
  "ifr": "iframe",
  "emb": "embed",
  "obj": "object",
  "cap": "caption",
  "colg": "colgroup",
  "fst": "fieldset",
  "btn": "button",
  "optg": "optgroup",
  "tarea": "textarea",
  "leg": "legend",
  "sect": "section",
  "art": "article",
  "hdr": "header",
  "ftr": "footer",
  "adr": "address",
  "dlg": "dialog",
  "str": "strong",
  "prog": "progress",
  "mn": "main",
  "tem": "template",
  "fset": "fieldset",
  "datag": "datagrid",
  "datal": "datalist",
  "kg": "keygen",
  "out": "output",
  "det": "details",
  "sum": "summary",
  "cmd": "command",
  "ri:d|ri:dpr": "img:s",
  "ri:v|ri:viewport": "img:z",
  "ri:a|ri:art": "pic>src:m+img",
  "ri:t|ri:type": "pic>src:t+img",
  "!!!": "{<!DOCTYPE html>}",
  "doc": "html[lang=${lang}]>(head>meta[charset=${charset}]+meta[http-equiv='X-UA-Compatible'][content='IE=edge']+meta:vp+title{${1:Document}})+body",
  "!|html:5": "!!!+doc",
  "c": "{<!-- ${0} -->}",
  "cc:ie": "{<!--[if IE]>${0}<![endif]-->}",
  "cc:noie": "{<!--[if !IE]><!-->${0}<!--<![endif]-->}"
};
var stylesheetSnippets = {
  "@f": "@font-face {\n	font-family: ${1};\n	src: url(${2});\n}",
  "@ff": "@font-face {\n	font-family: '${1:FontName}';\n	src: url('${2:FileName}.eot');\n	src: url('${2:FileName}.eot?#iefix') format('embedded-opentype'),\n		 url('${2:FileName}.woff') format('woff'),\n		 url('${2:FileName}.ttf') format('truetype'),\n		 url('${2:FileName}.svg#${1:FontName}') format('svg');\n	font-style: ${3:normal};\n	font-weight: ${4:normal};\n}",
  "@i|@import": "@import url(${0});",
  "@kf": "@keyframes ${1:identifier} {\n	${2}\n}",
  "@m|@media": "@media ${1:screen} {\n	${0}\n}",
  "ac": "align-content:start|end|flex-start|flex-end|center|space-between|space-around|stretch|space-evenly",
  "ai": "align-items:start|end|flex-start|flex-end|center|baseline|stretch",
  "anim": "animation:${1:name} ${2:duration} ${3:timing-function} ${4:delay} ${5:iteration-count} ${6:direction} ${7:fill-mode}",
  "animdel": "animation-delay:time",
  "animdir": "animation-direction:normal|reverse|alternate|alternate-reverse",
  "animdur": "animation-duration:${1:0}s",
  "animfm": "animation-fill-mode:both|forwards|backwards",
  "animic": "animation-iteration-count:1|infinite",
  "animn": "animation-name",
  "animps": "animation-play-state:running|paused",
  "animtf": "animation-timing-function:linear|ease|ease-in|ease-out|ease-in-out|cubic-bezier(${1:0.1}, ${2:0.7}, ${3:1.0}, ${3:0.1})",
  "ap": "appearance:none",
  "as": "align-self:start|end|auto|flex-start|flex-end|center|baseline|stretch",
  "b": "bottom",
  "bd": "border:${1:1px} ${2:solid} ${3:#000}",
  "bdb": "border-bottom:${1:1px} ${2:solid} ${3:#000}",
  "bdbc": "border-bottom-color:${1:#000}",
  "bdbi": "border-bottom-image:url(${0})",
  "bdbk": "border-break:close",
  "bdbli": "border-bottom-left-image:url(${0})|continue",
  "bdblrs": "border-bottom-left-radius",
  "bdbri": "border-bottom-right-image:url(${0})|continue",
  "bdbrrs": "border-bottom-right-radius",
  "bdbs": "border-bottom-style",
  "bdbw": "border-bottom-width",
  "bdc": "border-color:${1:#000}",
  "bdci": "border-corner-image:url(${0})|continue",
  "bdcl": "border-collapse:collapse|separate",
  "bdf": "border-fit:repeat|clip|scale|stretch|overwrite|overflow|space",
  "bdi": "border-image:url(${0})",
  "bdl": "border-left:${1:1px} ${2:solid} ${3:#000}",
  "bdlc": "border-left-color:${1:#000}",
  "bdlen": "border-length",
  "bdli": "border-left-image:url(${0})",
  "bdls": "border-left-style",
  "bdlw": "border-left-width",
  "bdr": "border-right:${1:1px} ${2:solid} ${3:#000}",
  "bdrc": "border-right-color:${1:#000}",
  "bdri": "border-right-image:url(${0})",
  "bdrs": "border-radius",
  "bdrst": "border-right-style",
  "bdrw": "border-right-width",
  "bds": "border-style:none|hidden|dotted|dashed|solid|double|dot-dash|dot-dot-dash|wave|groove|ridge|inset|outset",
  "bdsp": "border-spacing",
  "bdt": "border-top:${1:1px} ${2:solid} ${3:#000}",
  "bdtc": "border-top-color:${1:#000}",
  "bdti": "border-top-image:url(${0})",
  "bdtli": "border-top-left-image:url(${0})|continue",
  "bdtlrs": "border-top-left-radius",
  "bdtri": "border-top-right-image:url(${0})|continue",
  "bdtrrs": "border-top-right-radius",
  "bdts": "border-top-style",
  "bdtw": "border-top-width",
  "bdw": "border-width",
  "bfv": "backface-visibility:hidden|visible",
  "bg": "background:${1:#000}",
  "bga": "background-attachment:fixed|scroll",
  "bgbk": "background-break:bounding-box|each-box|continuous",
  "bgc": "background-color:#${1:fff}",
  "bgcp": "background-clip:padding-box|border-box|content-box|no-clip",
  "bgi": "background-image:url(${0})",
  "bgo": "background-origin:padding-box|border-box|content-box",
  "bgp": "background-position:${1:0} ${2:0}",
  "bgpx": "background-position-x",
  "bgpy": "background-position-y",
  "bgr": "background-repeat:no-repeat|repeat-x|repeat-y|space|round",
  "bgsz": "background-size:contain|cover",
  "bxsh": "box-shadow:${1:inset }${2:hoff} ${3:voff} ${4:blur} ${5:#000}|none",
  "bxsz": "box-sizing:border-box|content-box|border-box",
  "c": "color:${1:#000}",
  "cr": "color:rgb(${1:0}, ${2:0}, ${3:0})",
  "cra": "color:rgba(${1:0}, ${2:0}, ${3:0}, ${4:.5})",
  "cl": "clear:both|left|right|none",
  "cm": "/* ${0} */",
  "cnt": "content:'${0}'|normal|open-quote|no-open-quote|close-quote|no-close-quote|attr(${0})|counter(${0})|counters(${0})",
  "coi": "counter-increment",
  "colm": "columns",
  "colmc": "column-count",
  "colmf": "column-fill",
  "colmg": "column-gap",
  "colmr": "column-rule",
  "colmrc": "column-rule-color",
  "colmrs": "column-rule-style",
  "colmrw": "column-rule-width",
  "colms": "column-span",
  "colmw": "column-width",
  "cor": "counter-reset",
  "cp": "clip:auto|rect(${1:top} ${2:right} ${3:bottom} ${4:left})",
  "cps": "caption-side:top|bottom",
  "cur": "cursor:pointer|auto|default|crosshair|hand|help|move|pointer|text",
  "d": "display:block|none|flex|inline-flex|inline|inline-block|grid|inline-grid|subgrid|list-item|run-in|compact|table|inline-table|table-caption|table-column|table-column-group|table-header-group|table-footer-group|table-row|table-row-group|table-cell|ruby|ruby-base|ruby-base-group|ruby-text|ruby-text-group",
  "ec": "empty-cells:show|hide",
  "f": "font:${1:1em} ${2:sans-serif}",
  "fd": "font-display:auto|block|swap|fallback|optional",
  "fef": "font-effect:none|engrave|emboss|outline",
  "fem": "font-emphasize",
  "femp": "font-emphasize-position:before|after",
  "fems": "font-emphasize-style:none|accent|dot|circle|disc",
  "ff": "font-family:serif|sans-serif|cursive|fantasy|monospace",
  "fft": 'font-family:"Times New Roman", Times, Baskerville, Georgia, serif',
  "ffa": 'font-family:Arial, "Helvetica Neue", Helvetica, sans-serif',
  "ffv": "font-family:Verdana, Geneva, sans-serif",
  "fl": "float:left|right|none",
  "fs": "font-style:italic|normal|oblique",
  "fsm": "font-smoothing:antialiased|subpixel-antialiased|none",
  "fst": "font-stretch:normal|ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded",
  "fv": "font-variant:normal|small-caps",
  "fvs": "font-variation-settings:normal|inherit|initial|unset",
  "fw": "font-weight:normal|bold|bolder|lighter",
  "fx": "flex",
  "fxb": "flex-basis:fill|max-content|min-content|fit-content|content",
  "fxd": "flex-direction:row|row-reverse|column|column-reverse",
  "fxf": "flex-flow",
  "fxg": "flex-grow",
  "fxsh": "flex-shrink",
  "fxw": "flex-wrap:nowrap|wrap|wrap-reverse",
  "fsz": "font-size",
  "fsza": "font-size-adjust",
  "gtc": "grid-template-columns:repeat(${0})|minmax()",
  "gtr": "grid-template-rows:repeat(${0})|minmax()",
  "gta": "grid-template-areas",
  "gt": "grid-template",
  "gg": "grid-gap",
  "gcg": "grid-column-gap",
  "grg": "grid-row-gap",
  "gac": "grid-auto-columns:auto|minmax()",
  "gar": "grid-auto-rows:auto|minmax()",
  "gaf": "grid-auto-flow:row|column|dense|inherit|initial|unset",
  "gd": "grid",
  "gc": "grid-column",
  "gcs": "grid-column-start",
  "gce": "grid-column-end",
  "gr": "grid-row",
  "grs": "grid-row-start",
  "gre": "grid-row-end",
  "ga": "grid-area",
  "h": "height",
  "jc": "justify-content:start|end|stretch|flex-start|flex-end|center|space-between|space-around|space-evenly",
  "ji": "justify-items:start|end|center|stretch",
  "js": "justify-self:start|end|center|stretch",
  "l": "left",
  "lg": "background-image:linear-gradient(${1})",
  "lh": "line-height",
  "lis": "list-style",
  "lisi": "list-style-image",
  "lisp": "list-style-position:inside|outside",
  "list": "list-style-type:disc|circle|square|decimal|decimal-leading-zero|lower-roman|upper-roman",
  "lts": "letter-spacing:normal",
  "m": "margin",
  "mah": "max-height",
  "mar": "max-resolution",
  "maw": "max-width",
  "mb": "margin-bottom",
  "mih": "min-height",
  "mir": "min-resolution",
  "miw": "min-width",
  "ml": "margin-left",
  "mr": "margin-right",
  "mt": "margin-top",
  "ol": "outline",
  "olc": "outline-color:${1:#000}|invert",
  "olo": "outline-offset",
  "ols": "outline-style:none|dotted|dashed|solid|double|groove|ridge|inset|outset",
  "olw": "outline-width|thin|medium|thick",
  "op|opa": "opacity",
  "ord": "order",
  "ori": "orientation:landscape|portrait",
  "orp": "orphans",
  "ov": "overflow:hidden|visible|hidden|scroll|auto",
  "ovs": "overflow-style:scrollbar|auto|scrollbar|panner|move|marquee",
  "ovx": "overflow-x:hidden|visible|hidden|scroll|auto",
  "ovy": "overflow-y:hidden|visible|hidden|scroll|auto",
  "p": "padding",
  "pb": "padding-bottom",
  "pgba": "page-break-after:auto|always|left|right",
  "pgbb": "page-break-before:auto|always|left|right",
  "pgbi": "page-break-inside:auto|avoid",
  "pl": "padding-left",
  "pos": "position:relative|absolute|relative|fixed|static",
  "pr": "padding-right",
  "pt": "padding-top",
  "q": "quotes",
  "qen": "quotes:'\\201C' '\\201D' '\\2018' '\\2019'",
  "qru": "quotes:'\\00AB' '\\00BB' '\\201E' '\\201C'",
  "r": "right",
  "rsz": "resize:none|both|horizontal|vertical",
  "t": "top",
  "ta": "text-align:left|center|right|justify",
  "tal": "text-align-last:left|center|right",
  "tbl": "table-layout:fixed",
  "td": "text-decoration:none|underline|overline|line-through",
  "te": "text-emphasis:none|accent|dot|circle|disc|before|after",
  "th": "text-height:auto|font-size|text-size|max-size",
  "ti": "text-indent",
  "tj": "text-justify:auto|inter-word|inter-ideograph|inter-cluster|distribute|kashida|tibetan",
  "to": "text-outline:${1:0} ${2:0} ${3:#000}",
  "tov": "text-overflow:ellipsis|clip",
  "tr": "text-replace",
  "trf": "transform:${1}|skewX(${1:angle})|skewY(${1:angle})|scale(${1:x}, ${2:y})|scaleX(${1:x})|scaleY(${1:y})|scaleZ(${1:z})|scale3d(${1:x}, ${2:y}, ${3:z})|rotate(${1:angle})|rotateX(${1:angle})|rotateY(${1:angle})|rotateZ(${1:angle})|translate(${1:x}, ${2:y})|translateX(${1:x})|translateY(${1:y})|translateZ(${1:z})|translate3d(${1:tx}, ${2:ty}, ${3:tz})",
  "trfo": "transform-origin",
  "trfs": "transform-style:preserve-3d",
  "trs": "transition:${1:prop} ${2:time}",
  "trsde": "transition-delay:${1:time}",
  "trsdu": "transition-duration:${1:time}",
  "trsp": "transition-property:${1:prop}",
  "trstf": "transition-timing-function:${1:fn}",
  "tsh": "text-shadow:${1:hoff} ${2:voff} ${3:blur} ${4:#000}",
  "tt": "text-transform:uppercase|lowercase|capitalize|none",
  "tw": "text-wrap:none|normal|unrestricted|suppress",
  "us": "user-select:none",
  "v": "visibility:hidden|visible|collapse",
  "va": "vertical-align:top|super|text-top|middle|baseline|bottom|text-bottom|sub",
  "w": "width",
  "whs": "white-space:nowrap|pre|pre-wrap|pre-line|normal",
  "whsc": "white-space-collapse:normal|keep-all|loose|break-strict|break-all",
  "wid": "widows",
  "wm": "writing-mode:lr-tb|lr-tb|lr-bt|rl-tb|rl-bt|tb-rl|tb-lr|bt-lr|bt-rl",
  "wob": "word-break:normal|keep-all|break-all",
  "wos": "word-spacing",
  "wow": "word-wrap:none|unrestricted|suppress|break-word|normal",
  "z": "z-index",
  "zom": "zoom:1"
};
var xslSnippets = {
  "tm|tmatch": "xsl:template[match mode]",
  "tn|tname": "xsl:template[name]",
  "call": "xsl:call-template[name]",
  "ap": "xsl:apply-templates[select mode]",
  "api": "xsl:apply-imports",
  "imp": "xsl:import[href]",
  "inc": "xsl:include[href]",
  "ch": "xsl:choose",
  "wh|xsl:when": "xsl:when[test]",
  "ot": "xsl:otherwise",
  "if": "xsl:if[test]",
  "par": "xsl:param[name]",
  "pare": "xsl:param[name select]",
  "var": "xsl:variable[name]",
  "vare": "xsl:variable[name select]",
  "wp": "xsl:with-param[name select]",
  "key": "xsl:key[name match use]",
  "elem": "xsl:element[name]",
  "attr": "xsl:attribute[name]",
  "attrs": "xsl:attribute-set[name]",
  "cp": "xsl:copy[select]",
  "co": "xsl:copy-of[select]",
  "val": "xsl:value-of[select]",
  "for|each": "xsl:for-each[select]",
  "tex": "xsl:text",
  "com": "xsl:comment",
  "msg": "xsl:message[terminate=no]",
  "fall": "xsl:fallback",
  "num": "xsl:number[value]",
  "nam": "namespace-alias[stylesheet-prefix result-prefix]",
  "pres": "xsl:preserve-space[elements]",
  "strip": "xsl:strip-space[elements]",
  "proc": "xsl:processing-instruction[name]",
  "sort": "xsl:sort[select order]",
  "choose": "xsl:choose>xsl:when+xsl:otherwise",
  "xsl": "!!!+xsl:stylesheet[version=1.0 xmlns:xsl=http://www.w3.org/1999/XSL/Transform]>{\n|}",
  "!!!": '{<?xml version="1.0" encoding="UTF-8"?>}'
};
var pugSnippets = {
  "!!!": "{doctype html}"
};
var variables = {
  "lang": "en",
  "locale": "en-US",
  "charset": "UTF-8",
  "indentation": "	",
  "newline": "\n"
};
var defaultSyntaxes = {
  markup: "html",
  stylesheet: "css"
};
var defaultOptions = {
  "inlineElements": ["a", "abbr", "acronym", "applet", "b", "basefont", "bdo", "big", "br", "button", "cite", "code", "del", "dfn", "em", "font", "i", "iframe", "img", "input", "ins", "kbd", "label", "map", "object", "q", "s", "samp", "select", "small", "span", "strike", "strong", "sub", "sup", "textarea", "tt", "u", "var"],
  "output.indent": "	",
  "output.baseIndent": "",
  "output.newline": "\n",
  "output.tagCase": "",
  "output.attributeCase": "",
  "output.attributeQuotes": "double",
  "output.format": true,
  "output.formatLeafNode": false,
  "output.formatSkip": ["html"],
  "output.formatForce": ["body"],
  "output.inlineBreak": 3,
  "output.compactBoolean": false,
  "output.booleanAttributes": ["contenteditable", "seamless", "async", "autofocus", "autoplay", "checked", "controls", "defer", "disabled", "formnovalidate", "hidden", "ismap", "loop", "multiple", "muted", "novalidate", "readonly", "required", "reversed", "selected", "typemustmatch"],
  "output.reverseAttributes": false,
  "output.selfClosingStyle": "html",
  "output.field": (index, placeholder) => placeholder,
  "output.text": text2 => text2,
  "markup.href": true,
  "comment.enabled": false,
  "comment.trigger": ["id", "class"],
  "comment.before": "",
  "comment.after": "\n<!-- /[#ID][.CLASS] -->",
  "bem.enabled": false,
  "bem.element": "__",
  "bem.modifier": "_",
  "jsx.enabled": false,
  "stylesheet.keywords": ["auto", "inherit", "unset", "none"],
  "stylesheet.unitless": ["z-index", "line-height", "opacity", "font-weight", "zoom", "flex", "flex-grow", "flex-shrink"],
  "stylesheet.shortHex": true,
  "stylesheet.between": ": ",
  "stylesheet.after": ";",
  "stylesheet.intUnit": "px",
  "stylesheet.floatUnit": "em",
  "stylesheet.unitAliases": {
    e: "em",
    p: "%",
    x: "ex",
    r: "rem"
  },
  "stylesheet.json": false,
  "stylesheet.jsonDoubleQuotes": false,
  "stylesheet.fuzzySearchMinScore": 0
};
var defaultConfig = {
  type: "markup",
  syntax: "html",
  variables,
  snippets: {},
  options: defaultOptions
};
var syntaxConfig = {
  markup: {
    snippets: parseSnippets(markupSnippets)
  },
  xhtml: {
    options: {
      "output.selfClosingStyle": "xhtml"
    }
  },
  xml: {
    options: {
      "output.selfClosingStyle": "xml"
    }
  },
  xsl: {
    snippets: parseSnippets(xslSnippets),
    options: {
      "output.selfClosingStyle": "xml"
    }
  },
  jsx: {
    options: {
      "jsx.enabled": true
    }
  },
  pug: {
    snippets: parseSnippets(pugSnippets)
  },
  stylesheet: {
    snippets: parseSnippets(stylesheetSnippets)
  },
  sass: {
    options: {
      "stylesheet.after": ""
    }
  },
  stylus: {
    options: {
      "stylesheet.between": " ",
      "stylesheet.after": ""
    }
  }
};
function parseSnippets(snippets) {
  const result = {};
  Object.keys(snippets).forEach(k => {
    for (const name of k.split("|")) {
      result[name] = snippets[k];
    }
  });
  return result;
}
function resolveConfig(config = {}, globals = {}) {
  const type = config.type || "markup";
  const syntax = config.syntax || defaultSyntaxes[type];
  return Object.assign(Object.assign(Object.assign({}, defaultConfig), config), {
    type,
    syntax,
    variables: mergedData(type, syntax, "variables", config, globals),
    snippets: mergedData(type, syntax, "snippets", config, globals),
    options: mergedData(type, syntax, "options", config, globals)
  });
}
function mergedData(type, syntax, key, config, globals = {}) {
  const typeDefaults = syntaxConfig[type];
  const typeOverride = globals[type];
  const syntaxDefaults = syntaxConfig[syntax];
  const syntaxOverride = globals[syntax];
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, defaultConfig[key]), typeDefaults && typeDefaults[key]), syntaxDefaults && syntaxDefaults[key]), typeOverride && typeOverride[key]), syntaxOverride && syntaxOverride[key]), config[key]);
}
function backwardScanner(text2, start = 0) {
  return {
    text: text2,
    start,
    pos: text2.length
  };
}
function sol(scanner) {
  return scanner.pos === scanner.start;
}
function peek$1(scanner, offset = 0) {
  return scanner.text.charCodeAt(scanner.pos - 1 + offset);
}
function previous(scanner) {
  if (!sol(scanner)) {
    return scanner.text.charCodeAt(--scanner.pos);
  }
}
function consume(scanner, match) {
  if (sol(scanner)) {
    return false;
  }
  const ok = typeof match === "function" ? match(peek$1(scanner)) : match === peek$1(scanner);
  if (ok) {
    scanner.pos--;
  }
  return !!ok;
}
function consumeWhile(scanner, match) {
  const start = scanner.pos;
  while (consume(scanner, match)) {}
  return scanner.pos < start;
}
function isQuote(c) {
  return c === 39 || c === 34;
}
function consumeQuoted(scanner) {
  const start = scanner.pos;
  const quote2 = previous(scanner);
  if (isQuote(quote2)) {
    while (!sol(scanner)) {
      if (previous(scanner) === quote2 && peek$1(scanner) !== 92) {
        return true;
      }
    }
  }
  scanner.pos = start;
  return false;
}
var bracePairs = {
  [91]: 93,
  [40]: 41,
  [123]: 125
};
function isHtml(scanner) {
  const start = scanner.pos;
  if (!consume(scanner, 62)) {
    return false;
  }
  let ok = false;
  consume(scanner, 47);
  while (!sol(scanner)) {
    consumeWhile(scanner, isWhiteSpace);
    if (consumeIdent(scanner)) {
      if (consume(scanner, 47)) {
        ok = consume(scanner, 60);
        break;
      } else if (consume(scanner, 60)) {
        ok = true;
        break;
      } else if (consume(scanner, isWhiteSpace)) {
        continue;
      } else if (consume(scanner, 61)) {
        if (consumeIdent(scanner)) {
          continue;
        }
        break;
      } else if (consumeAttributeWithUnquotedValue(scanner)) {
        ok = true;
        break;
      }
      break;
    }
    if (consumeAttribute(scanner)) {
      continue;
    }
    break;
  }
  scanner.pos = start;
  return ok;
}
function consumeAttribute(scanner) {
  return consumeAttributeWithQuotedValue(scanner) || consumeAttributeWithUnquotedValue(scanner);
}
function consumeAttributeWithQuotedValue(scanner) {
  const start = scanner.pos;
  if (consumeQuoted(scanner) && consume(scanner, 61) && consumeIdent(scanner)) {
    return true;
  }
  scanner.pos = start;
  return false;
}
function consumeAttributeWithUnquotedValue(scanner) {
  const start = scanner.pos;
  const stack = [];
  while (!sol(scanner)) {
    const ch = peek$1(scanner);
    if (isCloseBracket(ch)) {
      stack.push(ch);
    } else if (isOpenBracket(ch)) {
      if (stack.pop() !== bracePairs[ch]) {
        break;
      }
    } else if (!isUnquotedValue(ch)) {
      break;
    }
    scanner.pos--;
  }
  if (start !== scanner.pos && consume(scanner, 61) && consumeIdent(scanner)) {
    return true;
  }
  scanner.pos = start;
  return false;
}
function consumeIdent(scanner) {
  return consumeWhile(scanner, isIdent);
}
function isIdent(ch) {
  return ch === 58 || ch === 45 || isAlpha(ch) || isNumber(ch);
}
function isAlpha(ch) {
  ch &= ~32;
  return ch >= 65 && ch <= 90;
}
function isNumber(ch) {
  return ch > 47 && ch < 58;
}
function isWhiteSpace(ch) {
  return ch === 32 || ch === 9;
}
function isUnquotedValue(ch) {
  return !isNaN(ch) && ch !== 61 && !isWhiteSpace(ch) && !isQuote(ch);
}
function isOpenBracket(ch) {
  return ch === 123 || ch === 40 || ch === 91;
}
function isCloseBracket(ch) {
  return ch === 125 || ch === 41 || ch === 93;
}
var code = ch => ch.charCodeAt(0);
var specialChars = "#.*:$-_!@%^+>/".split("").map(code);
var defaultOptions$1 = {
  type: "markup",
  lookAhead: true,
  prefix: ""
};
function extractAbbreviation$1(line, pos = line.length, options = {}) {
  const opt2 = Object.assign(Object.assign({}, defaultOptions$1), options);
  pos = Math.min(line.length, Math.max(0, pos == null ? line.length : pos));
  if (opt2.lookAhead) {
    pos = offsetPastAutoClosed(line, pos, opt2);
  }
  let ch;
  const start = getStartOffset(line, pos, opt2.prefix || "");
  if (start === -1) {
    return void 0;
  }
  const scanner = backwardScanner(line, start);
  scanner.pos = pos;
  const stack = [];
  while (!sol(scanner)) {
    ch = peek$1(scanner);
    if (stack.includes(125)) {
      if (ch === 125) {
        stack.push(ch);
        scanner.pos--;
        continue;
      }
      if (ch !== 123) {
        scanner.pos--;
        continue;
      }
    }
    if (isCloseBrace(ch, opt2.type)) {
      stack.push(ch);
    } else if (isOpenBrace(ch, opt2.type)) {
      if (stack.pop() !== bracePairs[ch]) {
        break;
      }
    } else if (stack.includes(93) || stack.includes(125)) {
      scanner.pos--;
      continue;
    } else if (isHtml(scanner) || !isAbbreviation(ch)) {
      break;
    }
    scanner.pos--;
  }
  if (!stack.length && scanner.pos !== pos) {
    const abbreviation2 = line.slice(scanner.pos, pos).replace(/^[*+>^]+/, "");
    return {
      abbreviation: abbreviation2,
      location: pos - abbreviation2.length,
      start: options.prefix ? start - options.prefix.length : pos - abbreviation2.length,
      end: pos
    };
  }
}
function offsetPastAutoClosed(line, pos, options) {
  if (isQuote(line.charCodeAt(pos))) {
    pos++;
  }
  while (isCloseBrace(line.charCodeAt(pos), options.type)) {
    pos++;
  }
  return pos;
}
function getStartOffset(line, pos, prefix) {
  if (!prefix) {
    return 0;
  }
  const scanner = backwardScanner(line);
  const compiledPrefix = prefix.split("").map(code);
  scanner.pos = pos;
  let result;
  while (!sol(scanner)) {
    if (consumePair(scanner, 93, 91) || consumePair(scanner, 125, 123)) {
      continue;
    }
    result = scanner.pos;
    if (consumeArray(scanner, compiledPrefix)) {
      return result;
    }
    scanner.pos--;
  }
  return -1;
}
function consumePair(scanner, close, open) {
  const start = scanner.pos;
  if (consume(scanner, close)) {
    while (!sol(scanner)) {
      if (consume(scanner, open)) {
        return true;
      }
      scanner.pos--;
    }
  }
  scanner.pos = start;
  return false;
}
function consumeArray(scanner, arr) {
  const start = scanner.pos;
  let consumed = false;
  for (let i = arr.length - 1; i >= 0 && !sol(scanner); i--) {
    if (!consume(scanner, arr[i])) {
      break;
    }
    consumed = i === 0;
  }
  if (!consumed) {
    scanner.pos = start;
  }
  return consumed;
}
function isAbbreviation(ch) {
  return ch > 64 && ch < 91 || ch > 96 && ch < 123 || ch > 47 && ch < 58 || specialChars.includes(ch);
}
function isOpenBrace(ch, syntax) {
  return ch === 40 || syntax === "markup" && (ch === 91 || ch === 123);
}
function isCloseBrace(ch, syntax) {
  return ch === 41 || syntax === "markup" && (ch === 93 || ch === 125);
}
function expandAbbreviation$1(abbr, config) {
  const resolvedConfig = resolveConfig(config);
  return resolvedConfig.type === "stylesheet" ? stylesheet(abbr, resolvedConfig) : markup(abbr, resolvedConfig);
}
function markup(abbr, config) {
  return stringify(parse(abbr, config), config);
}
function stylesheet(abbr, config) {
  return css(parse$1(abbr, config), config);
}
var cssData = {
  "properties": ["additive-symbols", "align-content", "align-items", "justify-items", "justify-self", "justify-items", "align-self", "all", "alt", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "backface-visibility", "background", "background-attachment", "background-blend-mode", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-position-x", "background-position-y", "background-repeat", "background-size", "behavior", "block-size", "border", "border-block-end", "border-block-start", "border-block-end-color", "border-block-start-color", "border-block-end-style", "border-block-start-style", "border-block-end-width", "border-block-start-width", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-inline-end", "border-inline-start", "border-inline-end-color", "border-inline-start-color", "border-inline-end-style", "border-inline-start-style", "border-inline-end-width", "border-inline-start-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "caret-color", "clear", "clip", "clip-path", "clip-rule", "color", "color-interpolation-filters", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "columns", "column-span", "column-width", "contain", "content", "counter-increment", "counter-reset", "cursor", "direction", "display", "empty-cells", "enable-background", "fallback", "fill", "fill-opacity", "fill-rule", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "flood-color", "flood-opacity", "font", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-alternates", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-gap", "grid-column-start", "grid-gap", "grid-row", "grid-row-end", "grid-row-gap", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "height", "hyphens", "image-orientation", "image-rendering", "ime-mode", "inline-size", "isolation", "justify-content", "kerning", "left", "letter-spacing", "lighting-color", "line-break", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-block-end", "margin-block-start", "margin-bottom", "margin-inline-end", "margin-inline-start", "margin-left", "margin-right", "margin-top", "marker", "marker-end", "marker-mid", "marker-start", "mask-type", "max-block-size", "max-height", "max-inline-size", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "mix-blend-mode", "motion", "motion-offset", "motion-path", "motion-rotation", "-moz-animation", "-moz-animation-delay", "-moz-animation-direction", "-moz-animation-duration", "-moz-animation-iteration-count", "-moz-animation-name", "-moz-animation-play-state", "-moz-animation-timing-function", "-moz-appearance", "-moz-backface-visibility", "-moz-background-clip", "-moz-background-inline-policy", "-moz-background-origin", "-moz-border-bottom-colors", "-moz-border-image", "-moz-border-left-colors", "-moz-border-right-colors", "-moz-border-top-colors", "-moz-box-align", "-moz-box-direction", "-moz-box-flex", "-moz-box-flexgroup", "-moz-box-ordinal-group", "-moz-box-orient", "-moz-box-pack", "-moz-box-sizing", "-moz-column-count", "-moz-column-gap", "-moz-column-rule", "-moz-column-rule-color", "-moz-column-rule-style", "-moz-column-rule-width", "-moz-columns", "-moz-column-width", "-moz-font-feature-settings", "-moz-hyphens", "-moz-perspective", "-moz-perspective-origin", "-moz-text-align-last", "-moz-text-decoration-color", "-moz-text-decoration-line", "-moz-text-decoration-style", "-moz-text-size-adjust", "-moz-transform", "-moz-transform-origin", "-moz-transition", "-moz-transition-delay", "-moz-transition-duration", "-moz-transition-property", "-moz-transition-timing-function", "-moz-user-focus", "-moz-user-select", "-ms-accelerator", "-ms-behavior", "-ms-block-progression", "-ms-content-zoom-chaining", "-ms-content-zooming", "-ms-content-zoom-limit", "-ms-content-zoom-limit-max", "-ms-content-zoom-limit-min", "-ms-content-zoom-snap", "-ms-content-zoom-snap-points", "-ms-content-zoom-snap-type", "-ms-filter", "-ms-flex", "-ms-flex-align", "-ms-flex-direction", "-ms-flex-flow", "-ms-flex-item-align", "-ms-flex-line-pack", "-ms-flex-order", "-ms-flex-pack", "-ms-flex-wrap", "-ms-flow-from", "-ms-flow-into", "-ms-grid-column", "-ms-grid-column-align", "-ms-grid-columns", "-ms-grid-column-span", "-ms-grid-layer", "-ms-grid-row", "-ms-grid-row-align", "-ms-grid-rows", "-ms-grid-row-span", "-ms-high-contrast-adjust", "-ms-hyphenate-limit-chars", "-ms-hyphenate-limit-lines", "-ms-hyphenate-limit-zone", "-ms-hyphens", "-ms-ime-mode", "-ms-interpolation-mode", "-ms-layout-grid", "-ms-layout-grid-char", "-ms-layout-grid-line", "-ms-layout-grid-mode", "-ms-layout-grid-type", "-ms-line-break", "-ms-overflow-style", "-ms-perspective", "-ms-perspective-origin", "-ms-perspective-origin-x", "-ms-perspective-origin-y", "-ms-progress-appearance", "-ms-scrollbar-3dlight-color", "-ms-scrollbar-arrow-color", "-ms-scrollbar-base-color", "-ms-scrollbar-darkshadow-color", "-ms-scrollbar-face-color", "-ms-scrollbar-highlight-color", "-ms-scrollbar-shadow-color", "-ms-scrollbar-track-color", "-ms-scroll-chaining", "-ms-scroll-limit", "-ms-scroll-limit-x-max", "-ms-scroll-limit-x-min", "-ms-scroll-limit-y-max", "-ms-scroll-limit-y-min", "-ms-scroll-rails", "-ms-scroll-snap-points-x", "-ms-scroll-snap-points-y", "-ms-scroll-snap-type", "-ms-scroll-snap-x", "-ms-scroll-snap-y", "-ms-scroll-translation", "-ms-text-align-last", "-ms-text-autospace", "-ms-text-combine-horizontal", "-ms-text-justify", "-ms-text-kashida-space", "-ms-text-overflow", "-ms-text-size-adjust", "-ms-text-underline-position", "-ms-touch-action", "-ms-touch-select", "-ms-transform", "-ms-transform-origin", "-ms-transform-origin-x", "-ms-transform-origin-y", "-ms-transform-origin-z", "-ms-user-select", "-ms-word-break", "-ms-word-wrap", "-ms-wrap-flow", "-ms-wrap-margin", "-ms-wrap-through", "-ms-writing-mode", "-ms-zoom", "-ms-zoom-animation", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "negative", "-o-animation", "-o-animation-delay", "-o-animation-direction", "-o-animation-duration", "-o-animation-fill-mode", "-o-animation-iteration-count", "-o-animation-name", "-o-animation-play-state", "-o-animation-timing-function", "object-fit", "object-position", "-o-border-image", "-o-object-fit", "-o-object-position", "opacity", "order", "orphans", "-o-table-baseline", "-o-tab-size", "-o-text-overflow", "-o-transform", "-o-transform-origin", "-o-transition", "-o-transition-delay", "-o-transition-duration", "-o-transition-property", "-o-transition-timing-function", "offset-block-end", "offset-block-start", "offset-inline-end", "offset-inline-start", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-wrap", "overflow-x", "overflow-y", "pad", "padding", "padding-bottom", "padding-block-end", "padding-block-start", "padding-inline-end", "padding-inline-start", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "paint-order", "perspective", "perspective-origin", "pointer-events", "position", "prefix", "quotes", "range", "resize", "right", "ruby-align", "ruby-overhang", "ruby-position", "ruby-span", "scrollbar-3dlight-color", "scrollbar-arrow-color", "scrollbar-base-color", "scrollbar-darkshadow-color", "scrollbar-face-color", "scrollbar-highlight-color", "scrollbar-shadow-color", "scrollbar-track-color", "scroll-behavior", "scroll-snap-coordinate", "scroll-snap-destination", "scroll-snap-points-x", "scroll-snap-points-y", "scroll-snap-type", "shape-image-threshold", "shape-margin", "shape-outside", "shape-rendering", "size", "src", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "suffix", "system", "symbols", "table-layout", "tab-size", "text-align", "text-align-last", "text-anchor", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-indent", "text-justify", "text-orientation", "text-overflow", "text-rendering", "text-shadow", "text-transform", "text-underline-position", "top", "touch-action", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "unicode-range", "user-select", "vertical-align", "visibility", "-webkit-animation", "-webkit-animation-delay", "-webkit-animation-direction", "-webkit-animation-duration", "-webkit-animation-fill-mode", "-webkit-animation-iteration-count", "-webkit-animation-name", "-webkit-animation-play-state", "-webkit-animation-timing-function", "-webkit-appearance", "-webkit-backdrop-filter", "-webkit-backface-visibility", "-webkit-background-clip", "-webkit-background-composite", "-webkit-background-origin", "-webkit-border-image", "-webkit-box-align", "-webkit-box-direction", "-webkit-box-flex", "-webkit-box-flex-group", "-webkit-box-ordinal-group", "-webkit-box-orient", "-webkit-box-pack", "-webkit-box-reflect", "-webkit-box-sizing", "-webkit-break-after", "-webkit-break-before", "-webkit-break-inside", "-webkit-column-break-after", "-webkit-column-break-before", "-webkit-column-break-inside", "-webkit-column-count", "-webkit-column-gap", "-webkit-column-rule", "-webkit-column-rule-color", "-webkit-column-rule-style", "-webkit-column-rule-width", "-webkit-columns", "-webkit-column-span", "-webkit-column-width", "-webkit-filter", "-webkit-flow-from", "-webkit-flow-into", "-webkit-font-feature-settings", "-webkit-hyphens", "-webkit-line-break", "-webkit-margin-bottom-collapse", "-webkit-margin-collapse", "-webkit-margin-start", "-webkit-margin-top-collapse", "-webkit-mask-clip", "-webkit-mask-image", "-webkit-mask-origin", "-webkit-mask-repeat", "-webkit-mask-size", "-webkit-nbsp-mode", "-webkit-overflow-scrolling", "-webkit-padding-start", "-webkit-perspective", "-webkit-perspective-origin", "-webkit-region-fragment", "-webkit-tap-highlight-color", "-webkit-text-fill-color", "-webkit-text-size-adjust", "-webkit-text-stroke", "-webkit-text-stroke-color", "-webkit-text-stroke-width", "-webkit-touch-callout", "-webkit-transform", "-webkit-transform-origin", "-webkit-transform-origin-x", "-webkit-transform-origin-y", "-webkit-transform-origin-z", "-webkit-transform-style", "-webkit-transition", "-webkit-transition-delay", "-webkit-transition-duration", "-webkit-transition-property", "-webkit-transition-timing-function", "-webkit-user-drag", "-webkit-user-modify", "-webkit-user-select", "white-space", "widows", "width", "will-change", "word-break", "word-spacing", "word-wrap", "writing-mode", "z-index", "zoom"]
};
var htmlData = {
  "tags": ["body", "head", "html", "address", "blockquote", "dd", "div", "section", "article", "aside", "header", "footer", "nav", "menu", "dl", "dt", "fieldset", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "iframe", "noframes", "object", "ol", "p", "ul", "applet", "center", "dir", "hr", "pre", "a", "abbr", "acronym", "area", "b", "base", "basefont", "bdo", "big", "br", "button", "caption", "cite", "code", "col", "colgroup", "del", "dfn", "em", "font", "i", "img", "input", "ins", "isindex", "kbd", "label", "legend", "li", "link", "map", "meta", "noscript", "optgroup", "option", "param", "q", "s", "samp", "script", "select", "small", "span", "strike", "strong", "style", "sub", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "title", "tr", "tt", "u", "var", "canvas", "main", "figure", "plaintext", "figcaption", "hgroup", "details", "summary"]
};
var snippetKeyCache = /* @__PURE__ */new Map();
var markupSnippetKeys;
var stylesheetCustomSnippetsKeyCache = /* @__PURE__ */new Map();
var htmlAbbreviationStartRegex = /^[a-z,A-Z,!,(,[,#,\.\{]/;
var jsxAbbreviationStartRegex = /^[a-z,A-Z,!,(,[,#,\.]/;
var cssAbbreviationRegex = /^-?[a-z,A-Z,!,@,#]/;
var htmlAbbreviationRegex = /[a-z,A-Z\.]/;
var commonlyUsedTags = __spreadArray(__spreadArray([], htmlData.tags, true), ["lorem"], false);
var bemFilterSuffix = "bem";
var filterDelimitor = "|";
var trimFilterSuffix = "t";
var commentFilterSuffix = "c";
var maxFilters = 3;
function doComplete(monaco, model, position, syntax, emmetConfig) {
  var _a;
  var isStyleSheetRes = isStyleSheet(syntax);
  if (!isStyleSheetRes) {
    if (!snippetKeyCache.has(syntax)) {
      var registry = getDefaultSnippets(syntax);
      snippetKeyCache.set(syntax, Object.keys(registry));
    }
    markupSnippetKeys = (_a = snippetKeyCache.get(syntax)) !== null && _a !== void 0 ? _a : [];
  }
  var extractOptions = {
    lookAhead: !isStyleSheetRes,
    type: getSyntaxType(syntax)
  };
  var extractedValue = extractAbbreviation(monaco, model, position, extractOptions);
  if (!extractedValue) return;
  var abbreviationRange = extractedValue.abbreviationRange,
    abbreviation2 = extractedValue.abbreviation,
    currentLineTillPosition = extractedValue.currentLineTillPosition,
    filter = extractedValue.filter;
  var currentWord = getCurrentWord(currentLineTillPosition);
  if (currentWord === abbreviation2 && currentLineTillPosition.endsWith("<".concat(abbreviation2)) && !isStyleSheetRes) {
    return;
  }
  var expandOptions = getExpandOptions(syntax, filter);
  var expandedText = "";
  var expandedAbbr;
  var completionItems = [];
  var createExpandedAbbr = function (syntax2, abbr) {
    if (!isAbbreviationValid(syntax2, abbreviation2)) return;
    try {
      expandedText = expandAbbreviation$1(abbr, expandOptions);
      if (isStyleSheetRes && "!important".startsWith(abbr)) {
        expandedText = "!important";
      }
    } catch (e) {}
    if (!expandedText || isExpandedTextNoise(syntax2, abbr, expandedText, expandOptions.options)) {
      return;
    }
    expandedAbbr = {
      kind: monaco.languages.CompletionItemKind.Property,
      label: abbreviation2 + (filter ? "|" + filter.replace(",", "|") : ""),
      documentation: replaceTabStopsWithCursors(expandedText),
      detail: "Emmet abbreviation",
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      range: abbreviationRange,
      insertText: escapeNonTabStopDollar(addFinalTabStop(expandedText))
    };
    completionItems = [expandedAbbr];
  };
  createExpandedAbbr(syntax, abbreviation2);
  if (isStyleSheetRes) {
    if (abbreviation2.length > 4 && cssData.properties.some(function (x) {
      return x.startsWith(abbreviation2);
    })) {
      return {
        suggestions: [],
        incomplete: true
      };
    }
    if (expandedAbbr && expandedText.length) {
      expandedAbbr.range = abbreviationRange;
      expandedAbbr.insertText = escapeNonTabStopDollar(addFinalTabStop(expandedText));
      expandedAbbr.documentation = replaceTabStopsWithCursors(expandedText);
      expandedAbbr.label = removeTabStops(expandedText);
      expandedAbbr.filterText = abbreviation2;
      var stylesheetCustomSnippetsKeys = stylesheetCustomSnippetsKeyCache.has(syntax) ? stylesheetCustomSnippetsKeyCache.get(syntax) : stylesheetCustomSnippetsKeyCache.get("css");
      completionItems = makeSnippetSuggestion(monaco, stylesheetCustomSnippetsKeys !== null && stylesheetCustomSnippetsKeys !== void 0 ? stylesheetCustomSnippetsKeys : [], abbreviation2, abbreviation2, abbreviationRange, expandOptions, "Emmet Custom Snippet", false);
      if (!completionItems.find(function (x) {
        return x.insertText === (expandedAbbr === null || expandedAbbr === void 0 ? void 0 : expandedAbbr.insertText);
      })) {
        var abbrRegex = new RegExp(".*" + abbreviation2.split("").map(function (x) {
          return x === "$" || x === "+" ? "\\" + x : x;
        }).join(".*") + ".*", "i");
        if (/\d/.test(abbreviation2) || abbrRegex.test(expandedAbbr.label)) {
          completionItems.push(expandedAbbr);
        }
      }
    }
  } else {
    var tagToFindMoreSuggestionsFor = abbreviation2;
    var newTagMatches = abbreviation2.match(/(>|\+)([\w:-]+)$/);
    if (newTagMatches && newTagMatches.length === 3) {
      tagToFindMoreSuggestionsFor = newTagMatches[2];
    }
    if (syntax !== "xml") {
      var commonlyUsedTagSuggestions = makeSnippetSuggestion(monaco, commonlyUsedTags, tagToFindMoreSuggestionsFor, abbreviation2, abbreviationRange, expandOptions, "Emmet Abbreviation");
      completionItems = completionItems.concat(commonlyUsedTagSuggestions);
    }
    if (emmetConfig.showAbbreviationSuggestions === true) {
      var abbreviationSuggestions = makeSnippetSuggestion(monaco, markupSnippetKeys.filter(function (x) {
        return !commonlyUsedTags.includes(x);
      }), tagToFindMoreSuggestionsFor, abbreviation2, abbreviationRange, expandOptions, "Emmet Abbreviation");
      if (expandedAbbr && abbreviationSuggestions.length > 0 && tagToFindMoreSuggestionsFor !== abbreviation2) {
        expandedAbbr.sortText = "0" + expandedAbbr.label;
        abbreviationSuggestions.forEach(function (item) {
          item.filterText = abbreviation2;
          item.sortText = "9" + abbreviation2;
        });
      }
      completionItems = completionItems.concat(abbreviationSuggestions);
    }
    if (syntax === "html" && completionItems.length >= 2 && abbreviation2.includes(":") && (expandedAbbr === null || expandedAbbr === void 0 ? void 0 : expandedAbbr.insertText) === "<".concat(abbreviation2, ">${0}</").concat(abbreviation2, ">")) {
      completionItems = completionItems.filter(function (item) {
        return item.label !== abbreviation2;
      });
    }
  }
  if (emmetConfig.showSuggestionsAsSnippets === true) {
    completionItems.forEach(function (x) {
      return x.kind = monaco.languages.CompletionItemKind.Snippet;
    });
  }
  return completionItems.length ? {
    suggestions: completionItems,
    incomplete: true
  } : void 0;
}
function makeSnippetSuggestion(monaco, snippetKeys, prefix, abbreviation2, abbreviationRange, expandOptions, snippetDetail, skipFullMatch) {
  if (skipFullMatch === void 0) {
    skipFullMatch = true;
  }
  if (!prefix || !snippetKeys) {
    return [];
  }
  var snippetCompletions = [];
  snippetKeys.forEach(function (snippetKey) {
    if (!snippetKey.startsWith(prefix.toLowerCase()) || skipFullMatch && snippetKey === prefix.toLowerCase()) {
      return;
    }
    var currentAbbr = abbreviation2 + snippetKey.substr(prefix.length);
    var expandedAbbr;
    try {
      expandedAbbr = expandAbbreviation$1(currentAbbr, expandOptions);
    } catch (e) {}
    if (!expandedAbbr) {
      return;
    }
    var item = {
      kind: monaco.languages.CompletionItemKind.Property,
      label: prefix + snippetKey.substr(prefix.length),
      documentation: replaceTabStopsWithCursors(expandedAbbr),
      detail: snippetDetail,
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      range: abbreviationRange,
      insertText: escapeNonTabStopDollar(addFinalTabStop(expandedAbbr))
    };
    snippetCompletions.push(item);
  });
  return snippetCompletions;
}
function getCurrentWord(currentLineTillPosition) {
  if (currentLineTillPosition) {
    var matches = currentLineTillPosition.match(/[\w,:,-,\.]*$/);
    if (matches) {
      return matches[0];
    }
  }
}
function replaceTabStopsWithCursors(expandedWord) {
  return expandedWord.replace(/([^\\])\$\{\d+\}/g, "$1|").replace(/\$\{\d+:([^\}]+)\}/g, "$1");
}
function removeTabStops(expandedWord) {
  return expandedWord.replace(/([^\\])\$\{\d+\}/g, "$1").replace(/\$\{\d+:([^\}]+)\}/g, "$1");
}
function escapeNonTabStopDollar(text2) {
  return text2 ? text2.replace(/([^\\])(\$)([^\{])/g, "$1\\$2$3") : text2;
}
function addFinalTabStop(text2) {
  if (!text2 || !text2.trim()) {
    return text2;
  }
  var maxTabStop = -1;
  var maxTabStopRanges = [];
  var foundLastStop = false;
  var replaceWithLastStop = false;
  var i = 0;
  var n = text2.length;
  try {
    while (i < n && !foundLastStop) {
      if (text2[i++] != "$" || text2[i++] != "{") {
        continue;
      }
      var numberStart = -1;
      var numberEnd = -1;
      while (i < n && /\d/.test(text2[i])) {
        numberStart = numberStart < 0 ? i : numberStart;
        numberEnd = i + 1;
        i++;
      }
      if (numberStart === -1 || numberEnd === -1 || i >= n || text2[i] != "}" && text2[i] != ":") {
        continue;
      }
      var currentTabStop = text2.substring(numberStart, numberEnd);
      foundLastStop = currentTabStop === "0";
      if (foundLastStop) {
        break;
      }
      var foundPlaceholder = false;
      if (text2[i++] == ":") {
        while (i < n) {
          if (text2[i] == "}") {
            foundPlaceholder = true;
            break;
          }
          i++;
        }
      }
      if (Number(currentTabStop) > Number(maxTabStop)) {
        maxTabStop = Number(currentTabStop);
        maxTabStopRanges = [{
          numberStart,
          numberEnd
        }];
        replaceWithLastStop = !foundPlaceholder;
      } else if (Number(currentTabStop) === maxTabStop) {
        maxTabStopRanges.push({
          numberStart,
          numberEnd
        });
      }
    }
  } catch (e) {}
  if (replaceWithLastStop && !foundLastStop) {
    for (var i_1 = 0; i_1 < maxTabStopRanges.length; i_1++) {
      var rangeStart = maxTabStopRanges[i_1].numberStart;
      var rangeEnd = maxTabStopRanges[i_1].numberEnd;
      text2 = text2.substr(0, rangeStart) + "0" + text2.substr(rangeEnd);
    }
  }
  return text2;
}
var emmetSnippetField = function (index, placeholder) {
  return "${".concat(index).concat(placeholder ? ":" + placeholder : "", "}");
};
function isStyleSheet(syntax) {
  return syntax === "css";
}
function getSyntaxType(syntax) {
  return isStyleSheet(syntax) ? "stylesheet" : "markup";
}
function getDefaultSnippets(syntax) {
  var syntaxType = getSyntaxType(syntax);
  var emptyUserConfig = {
    type: syntaxType,
    syntax
  };
  var resolvedConfig = resolveConfig(emptyUserConfig);
  return syntax === "xml" ? {} : resolvedConfig.snippets;
}
function getFilters(text2, pos) {
  var filter;
  for (var i = 0; i < maxFilters; i++) {
    if (text2.endsWith("".concat(filterDelimitor).concat(bemFilterSuffix), pos)) {
      pos -= bemFilterSuffix.length + 1;
      filter = filter ? bemFilterSuffix + "," + filter : bemFilterSuffix;
    } else if (text2.endsWith("".concat(filterDelimitor).concat(commentFilterSuffix), pos)) {
      pos -= commentFilterSuffix.length + 1;
      filter = filter ? commentFilterSuffix + "," + filter : commentFilterSuffix;
    } else if (text2.endsWith("".concat(filterDelimitor).concat(trimFilterSuffix), pos)) {
      pos -= trimFilterSuffix.length + 1;
      filter = filter ? trimFilterSuffix + "," + filter : trimFilterSuffix;
    } else {
      break;
    }
  }
  return {
    pos,
    filter
  };
}
function extractAbbreviation(monaco, model, position, options) {
  var currentLine = model.getLineContent(position.lineNumber);
  var currentLineTillPosition = currentLine.substr(0, position.column - 1);
  var _a = getFilters(currentLineTillPosition, position.column - 1),
    pos = _a.pos,
    filter = _a.filter;
  var lengthOccupiedByFilter = filter ? filter.length + 1 : 0;
  var result = extractAbbreviation$1(currentLine, pos, options);
  if (!result) return;
  var rangeToReplace = new monaco.Range(position.lineNumber, result.location + 1, position.lineNumber, result.location + result.abbreviation.length + lengthOccupiedByFilter + 1);
  return {
    abbreviationRange: rangeToReplace,
    abbreviation: result.abbreviation,
    currentLineTillPosition,
    filter
  };
}
function isAbbreviationValid(syntax, abbreviation2) {
  if (!abbreviation2) {
    return false;
  }
  if (isStyleSheet(syntax)) {
    if (abbreviation2.includes("#")) {
      if (abbreviation2.startsWith("#")) {
        var hexColorRegex = /^#[\d,a-f,A-F]{1,6}$/;
        return hexColorRegex.test(abbreviation2);
      } else if (commonlyUsedTags.includes(abbreviation2.substring(0, abbreviation2.indexOf("#")))) {
        return false;
      }
    }
    return cssAbbreviationRegex.test(abbreviation2);
  }
  if (abbreviation2.startsWith("!")) {
    return !/[^!]/.test(abbreviation2);
  }
  if ((/\(/.test(abbreviation2) || /\)/.test(abbreviation2)) && !/\{[^\}\{]*[\(\)]+[^\}\{]*\}(?:[>\+\*\^]|$)/.test(abbreviation2) && !/\(.*\)[>\+\*\^]/.test(abbreviation2) && !/\[[^\[\]\(\)]+=".*"\]/.test(abbreviation2) && !/[>\+\*\^]\(.*\)/.test(abbreviation2)) {
    return false;
  }
  if (syntax === "jsx") {
    return jsxAbbreviationStartRegex.test(abbreviation2) && htmlAbbreviationRegex.test(abbreviation2);
  }
  return htmlAbbreviationStartRegex.test(abbreviation2) && htmlAbbreviationRegex.test(abbreviation2);
}
function isExpandedTextNoise(syntax, abbreviation2, expandedText, options) {
  var _a, _b;
  if (isStyleSheet(syntax) && options) {
    var between = (_a = options["stylesheet.between"]) !== null && _a !== void 0 ? _a : ": ";
    var after = (_b = options["stylesheet.after"]) !== null && _b !== void 0 ? _b : ";";
    var endPrefixIndex = abbreviation2.indexOf(between[0], Math.max(abbreviation2.length - between.length, 0));
    endPrefixIndex = endPrefixIndex >= 0 ? endPrefixIndex : abbreviation2.length;
    var abbr = abbreviation2.substring(0, endPrefixIndex);
    return expandedText === "".concat(abbr).concat(between, "${0}").concat(after) || expandedText.replace(/\s/g, "") === abbreviation2.replace(/\s/g, "") + after;
  }
  if (syntax === "xml" && commonlyUsedTags.some(function (tag) {
    return tag.startsWith(abbreviation2.toLowerCase());
  })) {
    return true;
  }
  if (commonlyUsedTags.includes(abbreviation2.toLowerCase()) || markupSnippetKeys.includes(abbreviation2)) {
    return false;
  }
  if (/[-,:]/.test(abbreviation2) && !/--|::/.test(abbreviation2) && !abbreviation2.endsWith(":")) {
    return false;
  }
  if (abbreviation2 === ".") {
    return false;
  }
  var dotMatches = abbreviation2.match(/^([a-z,A-Z,\d]*)\.$/);
  if (dotMatches) {
    if (dotMatches[1] && htmlData.tags.includes(dotMatches[1])) {
      return false;
    }
    return true;
  }
  if (syntax === "jsx" && /^([A-Z][A-Za-z0-9]*)+$/.test(abbreviation2)) {
    return false;
  }
  return expandedText.toLowerCase() === "<".concat(abbreviation2.toLowerCase(), ">${1}</").concat(abbreviation2.toLowerCase(), ">");
}
function getExpandOptions(syntax, filter) {
  var type = getSyntaxType(syntax);
  var filters = filter ? filter.split(",").map(function (x) {
    return x.trim();
  }) : [];
  var bemEnabled = filters.includes("bem");
  var commentEnabled = filters.includes("c");
  var combinedOptions = {
    "output.formatSkip": ["html"],
    "output.formatForce": ["body"],
    "output.field": emmetSnippetField,
    "output.inlineBreak": 0,
    "output.compactBoolean": false,
    "output.reverseAttributes": false,
    "markup.href": true,
    "comment.enabled": commentEnabled,
    "comment.trigger": ["id", "class"],
    "comment.before": "",
    "comment.after": "\n<!-- /[#ID][.CLASS] -->",
    "bem.enabled": bemEnabled,
    "bem.element": "__",
    "bem.modifier": "_",
    "jsx.enabled": syntax === "jsx",
    "stylesheet.shortHex": true,
    "stylesheet.between": syntax === "stylus" ? " " : ": ",
    "stylesheet.after": syntax === "sass" || syntax === "stylus" ? "" : ";",
    "stylesheet.intUnit": "px",
    "stylesheet.floatUnit": "em",
    "stylesheet.unitAliases": {
      e: "em",
      p: "%",
      x: "ex",
      r: "rem"
    },
    "stylesheet.fuzzySearchMinScore": 0.3,
    "output.format": true,
    "output.selfClosingStyle": "html"
  };
  return {
    type,
    options: combinedOptions,
    variables: {},
    snippets: {},
    syntax,
    text: void 0,
    maxRepeat: 1e3
  };
}
function expandAbbreviation(abbreviation2, config) {
  var expandedText;
  var resolvedConfig = resolveConfig(config);
  if (config.type === "stylesheet") {
    if (typeof abbreviation2 === "string") {
      expandedText = expandAbbreviation$1(abbreviation2, resolvedConfig);
    } else {
      expandedText = css(abbreviation2, resolvedConfig);
    }
  } else {
    if (typeof abbreviation2 === "string") {
      expandedText = expandAbbreviation$1(abbreviation2, resolvedConfig);
    } else {
      expandedText = stringify(abbreviation2, resolvedConfig);
    }
  }
  return escapeNonTabStopDollar(addFinalTabStop(expandedText));
}
function isValidEmmetToken(tokens, index, syntax, language) {
  var currentTokenType = tokens[index].type;
  if (syntax === "html") {
    return currentTokenType === "" && (index === 0 || tokens[index - 1].type === "delimiter.html") || tokens[0].type === "text.html.basic";
  }
  if (syntax === "css") {
    if (currentTokenType === "") return true;
    return currentTokenType === "tag." + language;
  }
  if (syntax === "jsx") {
    return !!index && ["identifier.js", "type.identifier.js", "identifier.ts", "type.identifier.ts"].includes(currentTokenType);
  }
  return false;
}
function isValidLocationForEmmetAbbreviation(model, position, syntax, language) {
  var column = position.column,
    lineNumber = position.lineNumber;
  var _tokenization = model._tokenization || model.tokenization._tokenization;
  var _tokenizationStateStore = _tokenization._tokenizationStateStore;
  var _tokenizationSupport = _tokenizationStateStore.tokenizationSupport || _tokenization._tokenizationSupport;
  var state = _tokenizationStateStore.getBeginState(lineNumber - 1).clone();
  var tokenizationResult = _tokenizationSupport.tokenize(model.getLineContent(lineNumber), true, state, 0);
  var tokens = tokenizationResult.tokens;
  var valid = false;
  for (var i = tokens.length - 1; i >= 0; i--) {
    if (column - 1 > tokens[i].offset) {
      valid = isValidEmmetToken(tokens, i, syntax, language);
      break;
    }
  }
  return valid;
}
var LANGUAGE_MODES = {
  html: ["!", ".", "}", ":", "*", "$", "]", "/", ">", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  jade: ["!", ".", "}", ":", "*", "$", "]", "/", ">", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  slim: ["!", ".", "}", ":", "*", "$", "]", "/", ">", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  haml: ["!", ".", "}", ":", "*", "$", "]", "/", ">", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  xml: [".", "}", "*", "$", "]", "/", ">", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  xsl: ["!", ".", "}", "*", "$", "/", "]", ">", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  css: [":", "!", "-", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  scss: [":", "!", "-", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  sass: [":", "!", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  less: [":", "!", "-", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  stylus: [":", "!", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  javascript: ["!", ".", "}", "*", "$", "]", "/", ">", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  typescript: ["!", ".", "}", "*", "$", "]", "/", ">", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
};
var MAPPED_MODES = {
  handlebars: "html",
  php: "html",
  twig: "html"
};
var DEFAULT_CONFIG = {
  showExpandedAbbreviation: "always",
  showAbbreviationSuggestions: true,
  showSuggestionsAsSnippets: false
};
function registerProvider(monaco, languages, syntax) {
  if (!monaco) {
    console.error("emmet-monaco-es: 'monaco' should be either declared on window or passed as first parameter");
    return;
  }
  var providers = languages.map(function (language) {
    return monaco.languages.registerCompletionItemProvider(language, {
      triggerCharacters: LANGUAGE_MODES[MAPPED_MODES[language] || language],
      provideCompletionItems: function (model, position) {
        return isValidLocationForEmmetAbbreviation(model, position, syntax, language) ? doComplete(monaco, model, position, syntax, DEFAULT_CONFIG) : void 0;
      }
    });
  });
  return function () {
    providers.forEach(function (provider) {
      return provider.dispose();
    });
  };
}
function emmetHTML(monaco, languages) {
  if (monaco === void 0) {
    monaco = window.monaco;
  }
  if (languages === void 0) {
    languages = ["html"];
  }
  return registerProvider(monaco, languages, "html");
}
function emmetCSS(monaco, languages) {
  if (monaco === void 0) {
    monaco = window.monaco;
  }
  if (languages === void 0) {
    languages = ["css"];
  }
  return registerProvider(monaco, languages, "css");
}
function emmetJSX(monaco, languages) {
  if (monaco === void 0) {
    monaco = window.monaco;
  }
  if (languages === void 0) {
    languages = ["javascript"];
  }
  return registerProvider(monaco, languages, "jsx");
}
module.exports = __toCommonJS(emmet_monaco_es_5_1_2_exports);
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL2VtbWV0LW1vbmFjby1lcy41LjEuMi5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbW1ldC1tb25hY28tZXMvZGlzdC9lbW1ldC1tb25hY28uZXNtLmpzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiZW1tZXRDU1MiLCJlbW1ldEhUTUwiLCJlbW1ldEpTWCIsImV4cGFuZEFiYnJldmlhdGlvbiIsInRvIiwiZnJvbSIsInBhY2siLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJpIiwibCIsImFyIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJjb25jYXQiLCJjb2RlMiIsImlzTnVtYmVyJDEiLCJpc0FscGhhV29yZCIsImlzQWxwaGEkMSIsImlzV2hpdGVTcGFjZSQzIiwiY29uc3RydWN0b3IiLCJzdHIiLCJzdGFydCIsImVuZCIsInN0cmluZyIsInBvcyIsImVvZiIsImxpbWl0IiwiU2Nhbm5lciIsInBlZWsiLCJjaGFyQ29kZUF0IiwibmV4dCIsImVhdCIsIm1hdGNoIiwiY2giLCJvayIsImVhdFdoaWxlIiwiYmFja1VwIiwibiIsImN1cnJlbnQiLCJzdWJzdHJpbmciLCJlcnJvciIsIm1lc3NhZ2UiLCJTY2FubmVyRXJyb3IiLCJFcnJvciIsInRva2VucyIsInNpemUiLCJzY2FubmVyIiwidGVzdCIsInRva2VuIiwicGVlayQzIiwiZXJyIiwiYWJiciIsIm9wdGlvbnMiLCJ0b2tlblNjYW5uZXIkMSIsInJlc3VsdCIsInN0YXRlbWVudHMiLCJyZWFkYWJsZSQxIiwiZXJyb3IkMSIsInR5cGUiLCJlbGVtZW50cyIsImN0eCIsIm5vZGUiLCJzdGFjayIsImVsZW1lbnQkMiIsImdyb3VwIiwicHVzaCIsImNvbnN1bWUkMiIsImlzQ2hpbGRPcGVyYXRvciIsImlzU2libGluZ09wZXJhdG9yJDEiLCJpc0NsaW1iT3BlcmF0b3IiLCJwb3AiLCJpc0dyb3VwU3RhcnQiLCJpc0JyYWNrZXQkMiIsInJlcGVhdCIsInJlcGVhdGVyIiwiYXR0ciIsImVsZW0iLCJuYW1lIiwiYXR0cmlidXRlcyIsInZhbHVlIiwic2VsZkNsb3NlIiwiZWxlbWVudE5hbWUiLCJpc0VtcHR5IiwiaXNSZXBlYXRlciIsInRleHQiLCJnZXRUZXh0Iiwic2hvcnRBdHRyaWJ1dGUiLCJhdHRyaWJ1dGVTZXQiLCJpc0FycmF5IiwiaXNDbG9zZU9wZXJhdG9yIiwiaXNBdHRyaWJ1dGVTZXRTdGFydCIsImF0dHJpYnV0ZSIsImlzQXR0cmlidXRlU2V0RW5kIiwiaXNXaGl0ZVNwYWNlJDIiLCJpc09wZXJhdG9yJDEiLCJjcmVhdGVMaXRlcmFsJDEiLCJqc3giLCJleHByZXNzaW9uIiwibGl0ZXJhbCQyIiwicXVvdGVkIiwiaXNFcXVhbHMiLCJxdW90ZTIiLCJpc1F1b3RlJDEiLCJzaW5nbGUiLCJhbGxvd0JyYWNrZXRzIiwiYnJhY2tldHMiLCJjb250ZXh0Iiwib3BlbiIsImlzQ2FwaXRhbGl6ZWRMaXRlcmFsIiwiaXNDbGFzc05hbWVPcGVyYXRvciIsImlzRWxlbWVudE5hbWUiLCJpc1RleHRTdGFydCIsImlzT3BlbiIsIkJvb2xlYW4iLCJvcGVyYXRvciIsImlzU2luZ2xlIiwiaXNMaXRlcmFsJDIiLCJzb3VyY2UiLCJxdW90ZSIsImdldFRva2VuJDEiLCJmaWVsZCQyIiwicmVwZWF0ZXJQbGFjZWhvbGRlciIsInJlcGVhdGVyTnVtYmVyIiwicmVwZWF0ZXIkMSIsIndoaXRlU3BhY2UkMSIsImxpdGVyYWwkMSQxIiwib3BlcmF0b3IkMSIsImJyYWNrZXQkMSIsImVzY2FwZWQiLCJpc0FsbG93ZWRPcGVyYXRvciIsImlzRWxlbWVudE5hbWUkMSIsImlzQWxsb3dlZFNwYWNlIiwiaXNBbGxvd2VkUmVwZWF0ZXIiLCJpc1F1b3RlJDIiLCJicmFja2V0VHlwZSIsImlzU3BhY2UiLCJpc09wZW5CcmFja2V0JDIiLCJvcCIsIm9wZXJhdG9yVHlwZSQxIiwiY291bnQiLCJpbXBsaWNpdCIsIk51bWJlciIsInJldmVyc2UiLCJiYXNlIiwicGFyZW50IiwiaW5kZXgiLCJjb25zdW1lUGxhY2Vob2xkZXIkMiIsInN0cmVhbSIsImlzQWxwaGFOdW1lcmljV29yZCIsIm9wZXJhdG9ycyIsImNoaWxkIiwiY2xhc3MiLCJjbGltYiIsImlkIiwiZXF1YWwiLCJjbG9zZSIsInNpYmxpbmciLCJ0b2tlblZpc2l0b3IiLCJMaXRlcmFsIiwiUXVvdGUiLCJCcmFja2V0IiwiT3BlcmF0b3IiLCJGaWVsZCIsInN0YXRlIiwiZ2V0VmFyaWFibGUiLCJSZXBlYXRlclBsYWNlaG9sZGVyIiwicmVwZWF0ZXIyIiwicmVwZWF0ZXJzIiwiaW5zZXJ0ZWQiLCJSZXBlYXRlck51bWJlciIsImxhc3RJeCIsInBhcmVudEl4IiwiTWF0aCIsIm1heCIsInBhcmVudFJlcGVhdGVyIiwiU3RyaW5nIiwiV2hpdGVTcGFjZSIsInVybFJlZ2V4IiwiZW1haWxSZWdleCIsInRleHRJbnNlcnRlZCIsImNsZWFuVGV4dCIsImZpbHRlciIsInMiLCJ0cmltIiwiY2hpbGRyZW4iLCJjb252ZXJ0R3JvdXAiLCJyZXBlYXRHdWFyZCIsIm1heFJlcGVhdCIsIlBPU0lUSVZFX0lORklOSVRZIiwiX2EiLCJqb2luIiwidmFyVmFsdWUiLCJ2YXJpYWJsZXMiLCJkZWVwZXN0IiwiZGVlcGVzdE5vZGUiLCJsYXN0JDEiLCJ0ZXh0MiIsImluc2VydFRleHQiLCJocmVmIiwiaW5zZXJ0SHJlZiIsIm9yaWdpbmFsIiwiT2JqZWN0IiwiYXNzaWduIiwiaXRlbXMiLCJpc0dyb3VwIiwiY29udmVydEVsZW1lbnQiLCJ0YXJnZXQiLCJzdHJpbmdpZnlOYW1lIiwic3RyaW5naWZ5VmFsdWUkMSIsInNlbGZDbG9zaW5nIiwiY29udmVydFN0YXRlbWVudCIsImNvbnZlcnRBdHRyaWJ1dGUiLCJzb21lIiwiaXNGaWVsZCQxIiwiYXR0YWNoUmVwZWF0ZXIiLCJpbXBsaWVkIiwiaXNCb29sZWFuIiwidmFsdWVUeXBlIiwic2hpZnQiLCJib29sZWFuIiwic3RyaW5naWZ5JDEiLCJhcnIiLCJsYXN0VG9rZW4iLCJzdGFydHNXaXRoIiwiaHJlZkF0dHJpYnV0ZSIsImZpbmQiLCJpdGVtIiwidG9rZW5pemUkMSIsImNvbnZlcnQiLCJhYmJyZXZpYXRpb24iLCJpc1ZhbHVlMiIsImdldFRva2VuIiwibWVyZ2VUb2tlbnMiLCJzaG91bGRDb25zdW1lRGFzaEFmdGVyIiwic2hvcnQiLCJmaWVsZCQxIiwibnVtYmVyVmFsdWUiLCJjb2xvclZhbHVlIiwic3RyaW5nVmFsdWUiLCJicmFja2V0Iiwid2hpdGVTcGFjZSIsImxpdGVyYWwkMSIsImNvbnN1bWVQbGFjZWhvbGRlciQxIiwiaXNJZGVudFByZWZpeCIsImlzS2V5d29yZCIsImlzTGl0ZXJhbCIsImNyZWF0ZUxpdGVyYWwiLCJjb25zdW1lTnVtYmVyIiwicmF3VmFsdWUiLCJ1bml0IiwiZmluaXNoZWQiLCJ2YWx1ZVN0YXJ0IiwiY29sb3IyIiwiYWxwaGEiLCJpc0hleCIsImNvbG9yQWxwaGEiLCJyIiwiZyIsImIiLCJhIiwicGFyc2VDb2xvciIsInJhdyIsImlzQnJhY2tldCIsIm9wZXJhdG9yVHlwZSIsImFmdGVyTmVnYXRpdmUiLCJoYXNEZWNpbWFsIiwicHJldlBvcyIsImhhc0Zsb2F0IiwicGFyc2VJbnQiLCJsYXN0IiwicGVlayQyIiwidG9rZW5TY2FubmVyIiwicHJvcGVydHkyIiwicmVhZGFibGUiLCJjb25zdW1lUHJvcGVydHkiLCJjb25zdW1lJDEiLCJpc1NpYmxpbmdPcGVyYXRvciIsImltcG9ydGFudCIsInZhbHVlRnJhZ21lbnQiLCJ2YWx1ZU1vZGUiLCJpc0xpdGVyYWwkMSIsImlzRnVuY3Rpb25TdGFydCIsImlzVmFsdWVEZWxpbWl0ZXIiLCJpc1doaXRlU3BhY2UkMSIsImlzSW1wb3J0YW50IiwiY29uc3VtZVZhbHVlIiwiaXNGcmFnbWVudERlbGltaXRlciIsImluQXJndW1lbnQiLCJhcmdzIiwiaXNWYWx1ZSIsImNvbnN1bWVBcmd1bWVudHMiLCJpc09wZW5CcmFja2V0JDEiLCJpc0Nsb3NlQnJhY2tldCQxIiwiaXNBcmd1bWVudERlbGltaXRlciIsImlzQnJhY2tldCQxIiwib3BlcmF0b3IyIiwiaXNPcGVyYXRvciIsInQxIiwidDIiLCJ0b2tlbml6ZSIsInBhcnNlciIsImNvbmZpZyIsImxvb2t1cCIsImF0dHJOYW1lMiIsInByZXYiLCJtZXJnZVZhbHVlIiwibWVyZ2VEZWNsYXJhdGlvbnMiLCJuZXh0MiIsImdsdWUiLCJhcHBlbmQiLCJ0IiwiZGVzdCIsInNyYyIsImZuIiwiYW5jZXN0b3JzIiwiY2FsbGJhY2siLCJmb3JFYWNoIiwicmV2ZXJzZWQiLCJyZXNvbHZlIiwic25pcHBldCIsInNuaXBwZXRzIiwiaW5jbHVkZXMiLCJzbmlwcGV0QWJiciIsInBhcnNlQWJicmV2aWF0aW9uIiwid2Fsa1Jlc29sdmUiLCJ0b3BOb2RlIiwibWVyZ2VOb2RlcyIsInJlc29sdmVkIiwiZmluZERlZXBlc3QiLCJpc05vZGUiLCJsZXZlbCIsIm9mZnNldCIsImxpbmUiLCJjb2x1bW4iLCJwcm9jZXNzVGV4dCIsIl9wdXNoIiwibGluZXMiLCJzcGxpdEJ5TGluZXMiLCJpbCIsInB1c2hOZXdsaW5lIiwiaW5kZW50IiwiYmFzZUluZGVudCIsIm5ld2xpbmUiLCJwdXNoSW5kZW50IiwicGxhY2Vob2xkZXIiLCJmaWVsZDIiLCJzdHJDYXNlIiwidG9Mb3dlckNhc2UiLCJpbmxpbmVFbGVtZW50cyIsImlzSW5saW5lIiwic3BsaXQiLCJ0b1VwcGVyQ2FzZSIsImVsZW1lbnRNYXAiLCJwIiwidWwiLCJvbCIsInRhYmxlIiwidHIiLCJ0Ym9keSIsInRoZWFkIiwidGZvb3QiLCJjb2xncm91cCIsInNlbGVjdCIsIm9wdGdyb3VwIiwiYXVkaW8iLCJ2aWRlbyIsIm9iamVjdCIsIm1hcCIsInJlc29sdmVJbXBsaWNpdFRhZyIsImdldFBhcmVudEVsZW1lbnQiLCJjb250ZXh0TmFtZSIsInBhcmVudE5hbWUiLCJsb3dlcmNhc2UiLCJsYXRpbiIsInJ1Iiwic3AiLCJ2b2NhYnVsYXJpZXMiLCJyZUxvcmVtIiwibSIsImRiIiwibWluV29yZENvdW50IiwibWF4V29yZENvdW50Iiwid29yZENvdW50IiwicmFuZCIsImZpbmRSZXBlYXRlciIsInBhcmFncmFwaCIsImZsb29yIiwicmFuZG9tIiwibGVuIiwiaXRlcmF0aW9ucyIsIm1pbiIsInZhbCIsIndvcmRzIiwiY2FwaXRhbGl6ZSIsImNob2ljZSIsIndvcmQiLCJoYXNDb21tYSIsInRvdGFsQ29tbWFzIiwiZGljdCIsInN0YXJ0V2l0aENvbW1vbiIsInRvdGFsV29yZHMiLCJjb21tb24iLCJzZW50ZW5jZSIsImluc2VydENvbW1hcyIsInNhbXBsZSIsImVsZW1lbnQyIiwicmVuYW1lIiwibWF0Y2hlc05hbWUiLCJpc0FsbG93ZWQiLCJyZUVsZW1lbnQiLCJyZU1vZGlmaWVyIiwiYmxvY2tDYW5kaWRhdGVzMSIsImNsYXNzTmFtZSIsImJsb2NrQ2FuZGlkYXRlczIiLCJleHBhbmRDbGFzc05hbWVzIiwiZXhwYW5kU2hvcnROb3RhdGlvbiIsImRhdGEiLCJnZXRCRU1EYXRhIiwiY2xhc3NOYW1lcyIsImNsIiwiaXgiLCJpbmRleE9mIiwidW5pcXVlQ2xhc3MiLCJibG9jayIsImZpbmRCbG9ja05hbWUiLCJ1cGRhdGVDbGFzcyIsInBhdGgiLCJwcmVmaXgiLCJvcmlnaW5hbENsYXNzIiwiZ2V0QmxvY2tOYW1lIiwiYXJyQ2xhc3NOYW1lcyIsIl9iZW0iLCJjbGFzc1ZhbHVlIiwic3RyaW5naWZ5VmFsdWUiLCJwYXJzZUJFTSIsImRlcHRoIiwibWF4UGFyZW50SXgiLCJnZXRCRU1EYXRhRnJvbUNvbnRleHQiLCJ2aXNpdG9yIiwiZmllbGQiLCJvdXQiLCJjcmVhdGVPdXRwdXRTdHJlYW0iLCJjYXJldCIsImxhcmdlc3RJbmRleCIsInB1c2hTdHJpbmciLCJwdXNoRmllbGQiLCJjb25zdW1lUGxhY2Vob2xkZXIiLCJuYW1lUG9zIiwiYWZ0ZXJQb3MiLCJpc1Rva2VuU3RhcnQiLCJpc1Rva2VuIiwiYmVmb3JlIiwiYWZ0ZXIiLCJlbmFibGVkIiwidHJpZ2dlciIsInRlbXBsYXRlIiwic2hvdWxkQ29tbWVudCIsImNvbW1lbnQiLCJvdXRwdXQiLCJhdHRycyIsInB1c2hUb2tlbnMiLCJodG1sVGFnUmVnZXgiLCJjcmVhdGVXYWxrU3RhdGUiLCJjcmVhdGVDb21tZW50U3RhdGUiLCJ3YWxrJDEiLCJlbGVtZW50IiwiZm9ybWF0Iiwic2hvdWxkRm9ybWF0IiwiZ2V0SW5kZW50IiwidGFnTmFtZSIsImNvbW1lbnROb2RlQmVmb3JlIiwic2hvdWxkT3V0cHV0QXR0cmlidXRlIiwicHVzaEF0dHJpYnV0ZSIsInB1c2hTbmlwcGV0IiwiaW5uZXJGb3JtYXQiLCJoYXNOZXdsaW5lIiwic3RhcnRzV2l0aEJsb2NrVGFnIiwiY29tbWVudE5vZGVBZnRlciIsImlzU25pcHBldCIsImF0dHJOYW1lIiwibFF1b3RlIiwiYXR0clF1b3RlIiwiclF1b3RlIiwiaXNCb29sZWFuQXR0cmlidXRlIiwiZmllbGRJeCIsImZpbmRJbmRleCIsImlzRmllbGQiLCJ0cmltTGVmdCIsImFkamFjZW50SW5saW5lIiwiaXNJbmxpbmVFbGVtZW50IiwibWF0Y2hlcyIsImV4ZWMiLCJlbGVtZW50JDEiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwiY29sbGVjdEF0dHJpYnV0ZXMiLCJzaG91bGRGb3JtYXQkMSIsImJlZm9yZU5hbWUiLCJhZnRlck5hbWUiLCJwdXNoUHJpbWFyeUF0dHJpYnV0ZXMiLCJwdXNoU2Vjb25kYXJ5QXR0cmlidXRlcyIsInB1c2hWYWx1ZSIsImlzUHJpbWFyeUF0dHJpYnV0ZSIsInJlcGxhY2UiLCJiZWZvcmVBdHRyaWJ1dGUiLCJib29sZWFuVmFsdWUiLCJnbHVlQXR0cmlidXRlIiwiYWZ0ZXJBdHRyaWJ1dGUiLCJzcGxpdEJ5TGluZXMkMSIsImxpbmVMZW5ndGhzIiwibWF4TGVuZ3RoIiwidmFsdWVMZW5ndGgiLCJiZWZvcmVUZXh0TGluZSIsImFmdGVyVGV4dExpbmUiLCJpbmRlbnRGb3JtYXQiLCJmb3JtYXR0ZXJzIiwiaHRtbCIsImhhbWwiLCJzbGltIiwicHVnIiwib2xkVGV4dFZhbHVlIiwicGFyc2VPcHQiLCJyZXNvbHZlU25pcHBldHMiLCJ3YWxrIiwidHJhbnNmb3JtIiwiZm9ybWF0dGVyIiwic3ludGF4IiwiaW1wbGljaXRUYWciLCJtZXJnZUF0dHJpYnV0ZXMiLCJsb3JlbSIsInhzbCIsImJlbSIsInJlUHJvcGVydHkiLCJvcHQiLCJrZXkiLCJrZXl3b3JkcyIsInBhcnNlZCIsInBhcnNlVmFsdWUiLCJjc3NWYWwiLCJjb2xsZWN0S2V5d29yZHMiLCJwcm9wZXJ0eSIsImRlcGVuZGVuY2llcyIsInNvcnQiLCJzbmlwcGV0c1NvcnQiLCJjdXIiLCJpc1Byb3BlcnR5IiwicGFyc2UkMiIsInYiLCJzdHIxIiwic3RyMiIsInBhcnRpYWxNYXRjaCIsInN0cjFMZW4iLCJzdHIyTGVuIiwibWluTGVuZ3RoIiwiaiIsInNjb3JlIiwiY2gxIiwiY2gyIiwiZm91bmQiLCJhY3JvbnltIiwibWF0Y2hSYXRpbyIsImRlbHRhIiwibWF4U2NvcmUiLCJzdW0iLCJzaG9ydEhleCIsImFzSGV4IiwiYXNSR0IiLCJpc1Nob3J0SGV4IiwidG9TaG9ydEhleCIsInRvSGV4IiwidmFsdWVzIiwiZnJhYyIsIm51bSIsImRpZ2l0cyIsInRvRml4ZWQiLCJoZXgiLCJ0b1N0cmluZyIsInBhZCIsImlzSlNPTiIsInRvQ2FtZWxDYXNlIiwicHJvcGVydHlWYWx1ZSIsIm91dHB1dEltcG9ydGFudCIsIm91dHB1dFRva2VuIiwiZ2V0U2luZ2xlTnVtZXJpYyIsImdldFF1b3RlIiwib3V0cHV0VmFsdWUiLCJzZXBhcmF0b3IiLCJwcmV2RW5kIiwiY29sb3IiLCJfIiwibGV0dGVyIiwiZ3JhZGllbnROYW1lIiwiY2FjaGUiLCJzdHlsZXNoZWV0U25pcHBldHMiLCJjb252ZXJ0U25pcHBldHMiLCJpc1ZhbHVlU2NvcGUiLCJmaWx0ZXJlZFNuaXBwZXRzIiwiZ2V0U25pcHBldHNGb3JTY29wZSIsInJlc29sdmVOb2RlIiwia2V5cyIsImNyZWF0ZVNuaXBwZXQiLCJuZXN0IiwicmVzb2x2ZUdyYWRpZW50IiwicHJvcE5hbWUiLCJyZXNvbHZlVmFsdWVLZXl3b3JkcyIsImZpbmRCZXN0TWF0Y2giLCJyZXNvbHZlQXNQcm9wZXJ0eSIsInJlc29sdmVBc1NuaXBwZXQiLCJyZXNvbHZlTnVtZXJpY1ZhbHVlIiwiZ3JhZGllbnRGbiIsImNzc1ZhbHVlIiwiaW5saW5lVmFsdWUiLCJnZXRVbm1hdGNoZWRQYXJ0Iiwia3ciLCJyZXNvbHZlS2V5d29yZCIsImRlZmF1bHRWYWx1ZSIsImhhc0ZpZWxkIiwid3JhcFdpdGhGaWVsZCIsIm1pblNjb3JlIiwicmVGaWVsZCIsImlucHV0VmFsdWUiLCJvdXRwdXRWYWx1ZTIiLCJsaXRlcmFsIiwidGFpbCIsIm1hdGNoZWRJdGVtIiwic2NvcmVNYXRjaCIsImdldFNjb3JpbmdQYXJ0IiwibGFzdFBvcyIsInJlZiIsImRlcCIsImFsaWFzZXMiLCJ1bml0bGVzcyIsInEiLCJtYXJrdXBTbmlwcGV0cyIsInhzbFNuaXBwZXRzIiwicHVnU25pcHBldHMiLCJkZWZhdWx0U3ludGF4ZXMiLCJtYXJrdXAiLCJzdHlsZXNoZWV0IiwiZGVmYXVsdE9wdGlvbnMiLCJlIiwieCIsImRlZmF1bHRDb25maWciLCJzeW50YXhDb25maWciLCJwYXJzZVNuaXBwZXRzIiwieGh0bWwiLCJ4bWwiLCJzYXNzIiwic3R5bHVzIiwiayIsImdsb2JhbHMiLCJtZXJnZWREYXRhIiwidHlwZURlZmF1bHRzIiwidHlwZU92ZXJyaWRlIiwic3ludGF4RGVmYXVsdHMiLCJzeW50YXhPdmVycmlkZSIsInNvbCIsInBlZWskMSIsImNvbnN1bWUiLCJjIiwicHJldmlvdXMiLCJpc1F1b3RlIiwiYnJhY2VQYWlycyIsImNvbnN1bWVXaGlsZSIsImlzV2hpdGVTcGFjZSIsImNvbnN1bWVJZGVudCIsImNvbnN1bWVBdHRyaWJ1dGVXaXRoVW5xdW90ZWRWYWx1ZSIsImNvbnN1bWVBdHRyaWJ1dGUiLCJjb25zdW1lQXR0cmlidXRlV2l0aFF1b3RlZFZhbHVlIiwiY29uc3VtZVF1b3RlZCIsImlzQ2xvc2VCcmFja2V0IiwiaXNPcGVuQnJhY2tldCIsImlzVW5xdW90ZWRWYWx1ZSIsImlzSWRlbnQiLCJpc0FscGhhIiwiaXNOdW1iZXIiLCJpc05hTiIsImNvZGUiLCJzcGVjaWFsQ2hhcnMiLCJkZWZhdWx0T3B0aW9ucyQxIiwibG9va0FoZWFkIiwib3B0MiIsIm9mZnNldFBhc3RBdXRvQ2xvc2VkIiwiZ2V0U3RhcnRPZmZzZXQiLCJiYWNrd2FyZFNjYW5uZXIiLCJpc0Nsb3NlQnJhY2UiLCJpc09wZW5CcmFjZSIsImlzSHRtbCIsImlzQWJicmV2aWF0aW9uIiwiYWJicmV2aWF0aW9uMiIsImxvY2F0aW9uIiwiY29tcGlsZWRQcmVmaXgiLCJjb25zdW1lUGFpciIsImNvbnN1bWVBcnJheSIsImNvbnN1bWVkIiwicmVzb2x2ZWRDb25maWciLCJyZXNvbHZlQ29uZmlnIiwic3RyaW5naWZ5IiwicGFyc2UiLCJjc3MiLCJwYXJzZSQxIiwiY3NzRGF0YSIsImh0bWxEYXRhIiwic25pcHBldEtleUNhY2hlIiwiTWFwIiwibWFya3VwU25pcHBldEtleXMiLCJzdHlsZXNoZWV0Q3VzdG9tU25pcHBldHNLZXlDYWNoZSIsImh0bWxBYmJyZXZpYXRpb25TdGFydFJlZ2V4IiwianN4QWJicmV2aWF0aW9uU3RhcnRSZWdleCIsImNzc0FiYnJldmlhdGlvblJlZ2V4IiwiaHRtbEFiYnJldmlhdGlvblJlZ2V4IiwiY29tbW9ubHlVc2VkVGFncyIsIl9fc3ByZWFkQXJyYXkiLCJ0YWdzIiwiYmVtRmlsdGVyU3VmZml4IiwiZmlsdGVyRGVsaW1pdG9yIiwidHJpbUZpbHRlclN1ZmZpeCIsImNvbW1lbnRGaWx0ZXJTdWZmaXgiLCJtYXhGaWx0ZXJzIiwibW9uYWNvIiwibW9kZWwiLCJwb3NpdGlvbiIsImVtbWV0Q29uZmlnIiwiaXNTdHlsZVNoZWV0UmVzIiwiaXNTdHlsZVNoZWV0IiwiaGFzIiwicmVnaXN0cnkiLCJnZXREZWZhdWx0U25pcHBldHMiLCJzZXQiLCJnZXQiLCJleHRyYWN0T3B0aW9ucyIsImdldFN5bnRheFR5cGUiLCJleHRyYWN0ZWRWYWx1ZSIsImV4dHJhY3RBYmJyZXZpYXRpb24iLCJhYmJyZXZpYXRpb25SYW5nZSIsImN1cnJlbnRMaW5lVGlsbFBvc2l0aW9uIiwiY3VycmVudFdvcmQiLCJnZXRDdXJyZW50V29yZCIsImVuZHNXaXRoIiwiZXhwYW5kT3B0aW9ucyIsImdldEV4cGFuZE9wdGlvbnMiLCJleHBhbmRlZFRleHQiLCJleHBhbmRlZEFiYnIiLCJjb21wbGV0aW9uSXRlbXMiLCJjcmVhdGVFeHBhbmRlZEFiYnIiLCJzeW50YXgyIiwiaXNBYmJyZXZpYXRpb25WYWxpZCIsImV4cGFuZEFiYnJldmlhdGlvbiQxIiwiaXNFeHBhbmRlZFRleHROb2lzZSIsImtpbmQiLCJsYW5ndWFnZXMiLCJDb21wbGV0aW9uSXRlbUtpbmQiLCJQcm9wZXJ0eSIsImxhYmVsIiwiZG9jdW1lbnRhdGlvbiIsInJlcGxhY2VUYWJTdG9wc1dpdGhDdXJzb3JzIiwiZGV0YWlsIiwiaW5zZXJ0VGV4dFJ1bGVzIiwiQ29tcGxldGlvbkl0ZW1JbnNlcnRUZXh0UnVsZSIsIkluc2VydEFzU25pcHBldCIsInJhbmdlIiwiZXNjYXBlTm9uVGFiU3RvcERvbGxhciIsImFkZEZpbmFsVGFiU3RvcCIsInByb3BlcnRpZXMiLCJzdWdnZXN0aW9ucyIsImluY29tcGxldGUiLCJyZW1vdmVUYWJTdG9wcyIsImZpbHRlclRleHQiLCJzdHlsZXNoZWV0Q3VzdG9tU25pcHBldHNLZXlzIiwibWFrZVNuaXBwZXRTdWdnZXN0aW9uIiwiYWJiclJlZ2V4IiwiUmVnRXhwIiwidGFnVG9GaW5kTW9yZVN1Z2dlc3Rpb25zRm9yIiwibmV3VGFnTWF0Y2hlcyIsImNvbW1vbmx5VXNlZFRhZ1N1Z2dlc3Rpb25zIiwic2hvd0FiYnJldmlhdGlvblN1Z2dlc3Rpb25zIiwiYWJicmV2aWF0aW9uU3VnZ2VzdGlvbnMiLCJzb3J0VGV4dCIsInNob3dTdWdnZXN0aW9uc0FzU25pcHBldHMiLCJTbmlwcGV0Iiwic25pcHBldEtleXMiLCJzbmlwcGV0RGV0YWlsIiwic2tpcEZ1bGxNYXRjaCIsInNuaXBwZXRDb21wbGV0aW9ucyIsInNuaXBwZXRLZXkiLCJjdXJyZW50QWJiciIsInN1YnN0ciIsImV4cGFuZGVkV29yZCIsIm1heFRhYlN0b3AiLCJtYXhUYWJTdG9wUmFuZ2VzIiwiZm91bmRMYXN0U3RvcCIsInJlcGxhY2VXaXRoTGFzdFN0b3AiLCJudW1iZXJTdGFydCIsIm51bWJlckVuZCIsImN1cnJlbnRUYWJTdG9wIiwiZm91bmRQbGFjZWhvbGRlciIsImlfMSIsInJhbmdlU3RhcnQiLCJyYW5nZUVuZCIsImVtbWV0U25pcHBldEZpZWxkIiwic3ludGF4VHlwZSIsImVtcHR5VXNlckNvbmZpZyIsImN1cnJlbnRMaW5lIiwiZ2V0TGluZUNvbnRlbnQiLCJsaW5lTnVtYmVyIiwiZ2V0RmlsdGVycyIsImxlbmd0aE9jY3VwaWVkQnlGaWx0ZXIiLCJleHRyYWN0QWJicmV2aWF0aW9uJDEiLCJyYW5nZVRvUmVwbGFjZSIsIlJhbmdlIiwiaGV4Q29sb3JSZWdleCIsIl9iIiwiYmV0d2VlbiIsImVuZFByZWZpeEluZGV4IiwidGFnIiwiZG90TWF0Y2hlcyIsImZpbHRlcnMiLCJiZW1FbmFibGVkIiwiY29tbWVudEVuYWJsZWQiLCJjb21iaW5lZE9wdGlvbnMiLCJsYW5ndWFnZSIsImN1cnJlbnRUb2tlblR5cGUiLCJfdG9rZW5pemF0aW9uIiwidG9rZW5pemF0aW9uIiwiX3Rva2VuaXphdGlvblN0YXRlU3RvcmUiLCJfdG9rZW5pemF0aW9uU3VwcG9ydCIsInRva2VuaXphdGlvblN1cHBvcnQiLCJnZXRCZWdpblN0YXRlIiwiY2xvbmUiLCJ0b2tlbml6YXRpb25SZXN1bHQiLCJ2YWxpZCIsImlzVmFsaWRFbW1ldFRva2VuIiwiTEFOR1VBR0VfTU9ERVMiLCJqYWRlIiwic2NzcyIsImxlc3MiLCJqYXZhc2NyaXB0IiwidHlwZXNjcmlwdCIsIk1BUFBFRF9NT0RFUyIsImhhbmRsZWJhcnMiLCJwaHAiLCJ0d2lnIiwiREVGQVVMVF9DT05GSUciLCJzaG93RXhwYW5kZWRBYmJyZXZpYXRpb24iLCJjb25zb2xlIiwicHJvdmlkZXJzIiwicmVnaXN0ZXJDb21wbGV0aW9uSXRlbVByb3ZpZGVyIiwidHJpZ2dlckNoYXJhY3RlcnMiLCJwcm92aWRlQ29tcGxldGlvbkl0ZW1zIiwiaXNWYWxpZExvY2F0aW9uRm9yRW1tZXRBYmJyZXZpYXRpb24iLCJkb0NvbXBsZXRlIiwicHJvdmlkZXIiLCJkaXNwb3NlIiwid2luZG93IiwicmVnaXN0ZXJQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7QUFBQTs7O0FDZUEsdUJBQXVCQyxJQUFJQyxNQUFNQyxNQUFNO0VBQ25DLElBQUlBLFFBQVFDLFVBQVVDLFdBQVcsR0FBRyxTQUFTQyxJQUFJLEdBQUdDLElBQUlMLEtBQUtHLFFBQVFHLElBQUlGLElBQUlDLEdBQUdELEtBQUs7SUFDakYsSUFBSUUsTUFBTSxFQUFFRixLQUFLSixPQUFPO01BQ3BCLElBQUksQ0FBQ00sSUFBSUEsS0FBS0MsTUFBTUMsVUFBVUMsTUFBTUMsS0FBS1YsTUFBTSxHQUFHSSxDQUFDO01BQ25ERSxHQUFHRixLQUFLSixLQUFLSTtJQUNqQjtFQUNKO0VBQ0EsT0FBT0wsR0FBR1ksT0FBT0wsTUFBTUMsTUFBTUMsVUFBVUMsTUFBTUMsS0FBS1YsSUFBSSxDQUFDO0FBQzNEO0FBS0Esb0JBQW9CWSxPQUFNO0VBQ3RCLE9BQU9BLFFBQU8sTUFBTUEsUUFBTztBQUMvQjtBQUlBLG1CQUFtQkEsT0FBTVosTUFBTUQsSUFBSTtFQUMvQkMsT0FBT0EsUUFBUTtFQUNmRCxLQUFLQSxNQUFNO0VBQ1hhLFNBQVEsQ0FBQztFQUNULE9BQU9BLFNBQVFaLFFBQVFZLFNBQVFiO0FBQ25DO0FBQ0EsNEJBQTRCYSxPQUFNO0VBQzlCLE9BQU9DLFdBQVdELEtBQUksS0FBS0UsWUFBWUYsS0FBSTtBQUMvQztBQUNBLHFCQUFxQkEsT0FBTTtFQUN2QixPQUFPQSxVQUFTLE1BQWNHLFVBQVVILEtBQUk7QUFDaEQ7QUFLQSx3QkFBd0JBLE9BQU07RUFDMUIsT0FBT0EsVUFB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O0VBQ1AsTUFBTTtFQUNOLE1BQU07RUFDTixPQUFPO0VBQ1AsT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsU0FBUztFQUNULFNBQVM7RUFDVCxTQUFTO0VBQ1QsVUFBVTtFQUNWLFVBQVU7RUFDVixVQUFVO0VBQ1YsU0FBUztFQUNULFNBQVM7RUFDVCxPQUFPO0VBQ1AsTUFBTTtFQUNOLE9BQU87RUFDUCxPQUFPO0VBQ1AsS0FBSztFQUNMLE1BQU07RUFDTixLQUFLO0VBQ0wsTUFBTTtFQUNOLE9BQU87RUFDUCxPQUFPO0VBQ1AsUUFBUTtFQUNSLFFBQVE7RUFDUixNQUFNO0VBQ04sT0FBTztFQUNQLE9BQU87RUFDUCxPQUFPO0VBQ1AsTUFBTTtFQUNOLE1BQU07RUFDTixPQUFPO0VBQ1AsT0FBTztFQUNQLE1BQU07RUFDTixPQUFPO0VBQ1AsTUFBTTtFQUNOLE1BQU07RUFDTixPQUFPO0VBQ1AsT0FBTztFQUNQLE9BQU87RUFDUCxPQUFPO0VBQ1AsUUFBUTtFQUNSLE9BQU87RUFDUCxPQUFPO0VBQ1AsUUFBUTtFQUNSLE9BQU87RUFDUCxPQUFPO0VBQ1AsT0FBTztFQUNQLE1BQU07RUFDTixNQUFNO0VBQ04sT0FBTztFQUNQLE9BQU87RUFDUCxPQUFPO0VBQ1AsT0FBTztFQUNQLE9BQU87RUFDUCxNQUFNO0VBQ04sTUFBTTtFQUNOLE9BQU87RUFDUCxPQUFPO0VBQ1AsTUFBTTtFQUNOLE9BQU87RUFDUCxPQUFPO0VBQ1AsTUFBTTtFQUNOLEtBQUs7RUFDTCxNQUFNO0VBQ04sTUFBTTtFQUNOLE1BQU07RUFDTixLQUFLO0VBQ0wsTUFBTTtFQUNOLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFFBQVE7RUFDUixRQUFRO0VBQ1IsT0FBTztFQUNQLEtBQUs7RUFDTCxPQUFPO0VBQ1AsT0FBTztFQUNQLE9BQU87RUFDUCxNQUFNO0VBQ04sT0FBTztFQUNQLE9BQU87RUFDUCxPQUFPO0VBQ1AsTUFBTTtFQUNOLE1BQU07RUFDTixNQUFNO0VBQ04sTUFBTTtFQUNOLE9BQU87RUFDUCxPQUFP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QUFLLEtBQUssS0FBSyxLQUFLLEdBQUc7RUFDcEczVCxNQUFNLENBQUMsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssR0FBRztFQUNwR0QsTUFBTSxDQUFDLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEdBQUc7RUFDcEdpSSxLQUFLLENBQUMsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxHQUFHO0VBQ3pGcEgsS0FBSyxDQUFDLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxHQUFHO0VBQzlGeUssS0FBSyxDQUFDLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEdBQUc7RUFDckV1SSxNQUFNLENBQUMsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssR0FBRztFQUN0RTNMLE1BQU0sQ0FBQyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssR0FBRztFQUNqRTRMLE1BQU0sQ0FBQyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxHQUFHO0VBQ3RFM0wsUUFBUSxDQUFDLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxHQUFHO0VBQ25FNEwsWUFBWSxDQUFDLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxHQUFHO0VBQ3JHQyxZQUFZLENBQUMsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEdBQUc7QUFDekc7QUFFQSxJQUFJQyxlQUFlO0VBQ2ZDLFlBQVk7RUFDWkMsS0FBSztFQUNMQyxNQUFNO0FBQ1Y7QUFDQSxJQUFJQyxpQkFBaUI7RUFDakJDLDBCQUEwQjtFQUMxQnBFLDZCQUE2QjtFQUM3QkcsMkJBQTJCO0FBQy9CO0FBU0EsMEJBQTBCM0QsUUFBUStCLFdBQVdoTyxRQUFRO0VBQ2pELElBQUksQ0FBQ2lNLFFBQVE7SUFDVDZILFFBQVFweUIsTUFBTSw0RkFBNEY7SUFDMUc7RUFDSjtFQUNBLElBQUlxeUIsWUFBWS9GLFVBQVUvWCxJQUFJLFVBQVVxYyxVQUFVO0lBQzlDLE9BQU9yRyxPQUFPK0IsVUFBVWdHLCtCQUErQjFCLFVBQVU7TUFDN0QyQixtQkFBbUJmLGVBQWVNLGFBQWFsQixhQUFhQTtNQUM1RDRCLHdCQUF3QixVQUFVaEksT0FBT0MsVUFBVTtRQUMvQyxPQUFPZ0ksb0NBQW9DakksT0FBT0MsVUFBVW5NLFFBQVFzUyxRQUFRLElBQ3RFOEIsV0FBV25JLFFBQVFDLE9BQU9DLFVBQVVuTSxRQUFRNFQsY0FBYyxJQUMxRDtNQUNWO0lBQ0osQ0FBQztFQUNMLENBQUM7RUFDRCxPQUFPLFlBQVk7SUFDZkcsVUFBVWpoQixRQUFRLFVBQVV1aEIsVUFBVTtNQUFFLE9BQU9BLFNBQVNDLFNBQVE7SUFBRyxDQUFDO0VBQ3hFO0FBQ0o7QUFDQSxtQkFBbUJySSxRQUFRK0IsV0FBVztFQUNsQyxJQUFJL0IsV0FBVyxRQUFRO0lBQUVBLFNBQVNzSSxPQUFPdEk7RUFBUTtFQUNqRCxJQUFJK0IsY0FBYyxRQUFRO0lBQUVBLFlBQVksQ0FBQyxNQUFNO0VBQUc7RUFDbEQsT0FBT3dHLGlCQUFpQnZJLFFBQVErQixXQUFXLE1BQU07QUFDckQ7QUFDQSxrQkFBa0IvQixRQUFRK0IsV0FBVztFQUNqQyxJQUFJL0IsV0FBVyxRQUFRO0lBQUVBLFNBQVNzSSxPQUFPdEk7RUFBUTtFQUNqRCxJQUFJK0IsY0FBYyxRQUFRO0lBQUVBLFlBQVksQ0FBQyxLQUFLO0VBQUc7RUFDakQsT0FBT3dHLGlCQUFpQnZJLFFBQVErQixXQUFXLEtBQUs7QUFDcEQ7QUFDQSxrQkFBa0IvQixRQUFRK0IsV0FBVztFQUNqQyxJQUFJL0IsV0FBVyxRQUFRO0lBQUVBLFNBQVNzSSxPQUFPdEk7RUFBUTtFQUNqRCxJQUFJK0IsY0FBYyxRQUFRO0lBQUVBLFlBQVksQ0FBQyxZQUFZO0VBQUc7RUFDeEQsT0FBT3dHLGlCQUFpQnZJLFFBQVErQixXQUFXLEtBQUs7QUFDcEQiLCJmaWxlIjoiIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnZW1tZXQtbW9uYWNvLWVzJzsiLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbmZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20sIHBhY2spIHtcclxuICAgIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xyXG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xyXG4gICAgICAgICAgICBhcltpXSA9IGZyb21baV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XHJcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBnaXZlbiBjb2RlIGlzIGEgbnVtYmVyXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyJDEoY29kZSkge1xuICAgIHJldHVybiBjb2RlID4gNDcgJiYgY29kZSA8IDU4O1xufVxuLyoqXG4gKiBDaGVjayBpZiBnaXZlbiBjaGFyYWN0ZXIgY29kZSBpcyBhbHBoYSBjb2RlIChsZXR0ZXIgdGhyb3VnaCBBIHRvIFopXG4gKi9cbmZ1bmN0aW9uIGlzQWxwaGEkMShjb2RlLCBmcm9tLCB0bykge1xuICAgIGZyb20gPSBmcm9tIHx8IDY1OyAvLyBBXG4gICAgdG8gPSB0byB8fCA5MDsgLy8gWlxuICAgIGNvZGUgJj0gfjMyOyAvLyBxdWljayBoYWNrIHRvIGNvbnZlcnQgYW55IGNoYXIgY29kZSB0byB1cHBlcmNhc2UgY2hhciBjb2RlXG4gICAgcmV0dXJuIGNvZGUgPj0gZnJvbSAmJiBjb2RlIDw9IHRvO1xufVxuZnVuY3Rpb24gaXNBbHBoYU51bWVyaWNXb3JkKGNvZGUpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIkMShjb2RlKSB8fCBpc0FscGhhV29yZChjb2RlKTtcbn1cbmZ1bmN0aW9uIGlzQWxwaGFXb3JkKGNvZGUpIHtcbiAgICByZXR1cm4gY29kZSA9PT0gOTUgLyogXyAqLyB8fCBpc0FscGhhJDEoY29kZSk7XG59XG4vKipcbiAqIENoZWNrIGlmIGdpdmVuIGNoYXJhY3RlciBjb2RlIGlzIGEgd2hpdGUtc3BhY2UgY2hhcmFjdGVyOiBhIHNwYWNlIGNoYXJhY3RlclxuICogb3IgbGluZSBicmVha3NcbiAqL1xuZnVuY3Rpb24gaXNXaGl0ZVNwYWNlJDMoY29kZSkge1xuICAgIHJldHVybiBjb2RlID09PSAzMiAvKiBzcGFjZSAqL1xuICAgICAgICB8fCBjb2RlID09PSA5IC8qIHRhYiAqL1xuICAgICAgICB8fCBjb2RlID09PSAxNjA7IC8qIG5vbi1icmVha2luZyBzcGFjZSAqL1xufVxuLyoqXG4gKiBDaGVjayBpZiBnaXZlbiBjaGFyYWN0ZXIgY29kZSBpcyBhIHNwYWNlIGNoYXJhY3RlclxuICovXG5mdW5jdGlvbiBpc1NwYWNlKGNvZGUpIHtcbiAgICByZXR1cm4gaXNXaGl0ZVNwYWNlJDMoY29kZSlcbiAgICAgICAgfHwgY29kZSA9PT0gMTAgLyogTEYgKi9cbiAgICAgICAgfHwgY29kZSA9PT0gMTM7IC8qIENSICovXG59XG4vKipcbiAqIENoZWNrIGlmIGdpdmVuIGNoYXJhY3RlciBjb2RlIGlzIGEgcXVvdGUgY2hhcmFjdGVyXG4gKi9cbmZ1bmN0aW9uIGlzUXVvdGUkMihjb2RlKSB7XG4gICAgcmV0dXJuIGNvZGUgPT09IDM5IC8qICcgKi8gfHwgY29kZSA9PT0gMzQgLyogXCIgKi87XG59XG5cbi8qKlxuICogQSBzdHJlYW1pbmcsIGNoYXJhY3RlciBjb2RlLWJhc2VkIHN0cmluZyByZWFkZXJcbiAqL1xuY2xhc3MgU2Nhbm5lciB7XG4gICAgY29uc3RydWN0b3Ioc3RyLCBzdGFydCwgZW5kKSB7XG4gICAgICAgIGlmIChlbmQgPT0gbnVsbCAmJiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgZW5kID0gc3RyLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0cmluZyA9IHN0cjtcbiAgICAgICAgdGhpcy5wb3MgPSB0aGlzLnN0YXJ0ID0gc3RhcnQgfHwgMDtcbiAgICAgICAgdGhpcy5lbmQgPSBlbmQgfHwgMDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIG9ubHkgaWYgdGhlIHN0cmVhbSBpcyBhdCB0aGUgZW5kIG9mIHRoZSBmaWxlLlxuICAgICAqL1xuICAgIGVvZigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zID49IHRoaXMuZW5kO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHN0cmVhbSBpbnN0YW5jZSB3aGljaCBpcyBsaW1pdGVkIHRvIGdpdmVuIGBzdGFydGAgYW5kIGBlbmRgXG4gICAgICogcmFuZ2UuIEUuZy4gaXRzIGBlb2YoKWAgbWV0aG9kIHdpbGwgbG9vayBhdCBgZW5kYCBwcm9wZXJ0eSwgbm90IGFjdHVhbFxuICAgICAqIHN0cmVhbSBlbmRcbiAgICAgKi9cbiAgICBsaW1pdChzdGFydCwgZW5kKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2Nhbm5lcih0aGlzLnN0cmluZywgc3RhcnQsIGVuZCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG5leHQgY2hhcmFjdGVyIGNvZGUgaW4gdGhlIHN0cmVhbSB3aXRob3V0IGFkdmFuY2luZyBpdC5cbiAgICAgKiBXaWxsIHJldHVybiBOYU4gYXQgdGhlIGVuZCBvZiB0aGUgZmlsZS5cbiAgICAgKi9cbiAgICBwZWVrKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdHJpbmcuY2hhckNvZGVBdCh0aGlzLnBvcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG5leHQgY2hhcmFjdGVyIGluIHRoZSBzdHJlYW0gYW5kIGFkdmFuY2VzIGl0LlxuICAgICAqIEFsc28gcmV0dXJucyA8Y29kZT51bmRlZmluZWQ8L2NvZGU+IHdoZW4gbm8gbW9yZSBjaGFyYWN0ZXJzIGFyZSBhdmFpbGFibGUuXG4gICAgICovXG4gICAgbmV4dCgpIHtcbiAgICAgICAgaWYgKHRoaXMucG9zIDwgdGhpcy5zdHJpbmcubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdHJpbmcuY2hhckNvZGVBdCh0aGlzLnBvcysrKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBgbWF0Y2hgIGNhbiBiZSBhIGNoYXJhY3RlciBjb2RlIG9yIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIGNoYXJhY3RlciBjb2RlXG4gICAgICogYW5kIHJldHVybnMgYSBib29sZWFuLiBJZiB0aGUgbmV4dCBjaGFyYWN0ZXIgaW4gdGhlIHN0cmVhbSAnbWF0Y2hlcydcbiAgICAgKiB0aGUgZ2l2ZW4gYXJndW1lbnQsIGl0IGlzIGNvbnN1bWVkIGFuZCByZXR1cm5lZC5cbiAgICAgKiBPdGhlcndpc2UsIGBmYWxzZWAgaXMgcmV0dXJuZWQuXG4gICAgICovXG4gICAgZWF0KG1hdGNoKSB7XG4gICAgICAgIGNvbnN0IGNoID0gdGhpcy5wZWVrKCk7XG4gICAgICAgIGNvbnN0IG9rID0gdHlwZW9mIG1hdGNoID09PSAnZnVuY3Rpb24nID8gbWF0Y2goY2gpIDogY2ggPT09IG1hdGNoO1xuICAgICAgICBpZiAob2spIHtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvaztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVwZWF0ZWRseSBjYWxscyA8Y29kZT5lYXQ8L2NvZGU+IHdpdGggdGhlIGdpdmVuIGFyZ3VtZW50LCB1bnRpbCBpdFxuICAgICAqIGZhaWxzLiBSZXR1cm5zIDxjb2RlPnRydWU8L2NvZGU+IGlmIGFueSBjaGFyYWN0ZXJzIHdlcmUgZWF0ZW4uXG4gICAgICovXG4gICAgZWF0V2hpbGUobWF0Y2gpIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLnBvcztcbiAgICAgICAgd2hpbGUgKCF0aGlzLmVvZigpICYmIHRoaXMuZWF0KG1hdGNoKSkgeyAvKiAqLyB9XG4gICAgICAgIHJldHVybiB0aGlzLnBvcyAhPT0gc3RhcnQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEJhY2tzIHVwIHRoZSBzdHJlYW0gbiBjaGFyYWN0ZXJzLiBCYWNraW5nIGl0IHVwIGZ1cnRoZXIgdGhhbiB0aGVcbiAgICAgKiBzdGFydCBvZiB0aGUgY3VycmVudCB0b2tlbiB3aWxsIGNhdXNlIHRoaW5ncyB0byBicmVhaywgc28gYmUgY2FyZWZ1bC5cbiAgICAgKi9cbiAgICBiYWNrVXAobikge1xuICAgICAgICB0aGlzLnBvcyAtPSAobiB8fCAxKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBzdHJpbmcgYmV0d2VlbiB0aGUgc3RhcnQgb2YgdGhlIGN1cnJlbnQgdG9rZW4gYW5kIHRoZVxuICAgICAqIGN1cnJlbnQgc3RyZWFtIHBvc2l0aW9uLlxuICAgICAqL1xuICAgIGN1cnJlbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1YnN0cmluZyh0aGlzLnN0YXJ0LCB0aGlzLnBvcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgc3Vic3RyaW5nIGZvciBnaXZlbiByYW5nZVxuICAgICAqL1xuICAgIHN1YnN0cmluZyhzdGFydCwgZW5kKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0cmluZy5zbGljZShzdGFydCwgZW5kKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBlcnJvciBvYmplY3Qgd2l0aCBjdXJyZW50IHN0cmVhbSBzdGF0ZVxuICAgICAqL1xuICAgIGVycm9yKG1lc3NhZ2UsIHBvcyA9IHRoaXMucG9zKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2Nhbm5lckVycm9yKGAke21lc3NhZ2V9IGF0ICR7cG9zICsgMX1gLCBwb3MsIHRoaXMuc3RyaW5nKTtcbiAgICB9XG59XG5jbGFzcyBTY2FubmVyRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IobWVzc2FnZSwgcG9zLCBzdHIpIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICAgIHRoaXMucG9zID0gcG9zO1xuICAgICAgICB0aGlzLnN0cmluZyA9IHN0cjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRva2VuU2Nhbm5lciQxKHRva2Vucykge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRva2VucyxcbiAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgIHBvczogMCxcbiAgICAgICAgc2l6ZTogdG9rZW5zLmxlbmd0aFxuICAgIH07XG59XG5mdW5jdGlvbiBwZWVrJDMoc2Nhbm5lcikge1xuICAgIHJldHVybiBzY2FubmVyLnRva2Vuc1tzY2FubmVyLnBvc107XG59XG5mdW5jdGlvbiBuZXh0KHNjYW5uZXIpIHtcbiAgICByZXR1cm4gc2Nhbm5lci50b2tlbnNbc2Nhbm5lci5wb3MrK107XG59XG5mdW5jdGlvbiBzbGljZShzY2FubmVyLCBmcm9tID0gc2Nhbm5lci5zdGFydCwgdG8gPSBzY2FubmVyLnBvcykge1xuICAgIHJldHVybiBzY2FubmVyLnRva2Vucy5zbGljZShmcm9tLCB0byk7XG59XG5mdW5jdGlvbiByZWFkYWJsZSQxKHNjYW5uZXIpIHtcbiAgICByZXR1cm4gc2Nhbm5lci5wb3MgPCBzY2FubmVyLnNpemU7XG59XG5mdW5jdGlvbiBjb25zdW1lJDIoc2Nhbm5lciwgdGVzdCkge1xuICAgIGNvbnN0IHRva2VuID0gcGVlayQzKHNjYW5uZXIpO1xuICAgIGlmICh0b2tlbiAmJiB0ZXN0KHRva2VuKSkge1xuICAgICAgICBzY2FubmVyLnBvcysrO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gZXJyb3IkMShzY2FubmVyLCBtZXNzYWdlLCB0b2tlbiA9IHBlZWskMyhzY2FubmVyKSkge1xuICAgIGlmICh0b2tlbiAmJiB0b2tlbi5zdGFydCAhPSBudWxsKSB7XG4gICAgICAgIG1lc3NhZ2UgKz0gYCBhdCAke3Rva2VuLnN0YXJ0fWA7XG4gICAgfVxuICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICBlcnJbJ3BvcyddID0gdG9rZW4gJiYgdG9rZW4uc3RhcnQ7XG4gICAgcmV0dXJuIGVycjtcbn1cblxuZnVuY3Rpb24gYWJicmV2aWF0aW9uKGFiYnIsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHNjYW5uZXIgPSB0b2tlblNjYW5uZXIkMShhYmJyKTtcbiAgICBjb25zdCByZXN1bHQgPSBzdGF0ZW1lbnRzKHNjYW5uZXIsIG9wdGlvbnMpO1xuICAgIGlmIChyZWFkYWJsZSQxKHNjYW5uZXIpKSB7XG4gICAgICAgIHRocm93IGVycm9yJDEoc2Nhbm5lciwgJ1VuZXhwZWN0ZWQgY2hhcmFjdGVyJyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBzdGF0ZW1lbnRzKHNjYW5uZXIsIG9wdGlvbnMpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgIHR5cGU6ICdUb2tlbkdyb3VwJyxcbiAgICAgICAgZWxlbWVudHM6IFtdXG4gICAgfTtcbiAgICBsZXQgY3R4ID0gcmVzdWx0O1xuICAgIGxldCBub2RlO1xuICAgIGNvbnN0IHN0YWNrID0gW107XG4gICAgd2hpbGUgKHJlYWRhYmxlJDEoc2Nhbm5lcikpIHtcbiAgICAgICAgaWYgKG5vZGUgPSBlbGVtZW50JDIoc2Nhbm5lciwgb3B0aW9ucykgfHwgZ3JvdXAoc2Nhbm5lciwgb3B0aW9ucykpIHtcbiAgICAgICAgICAgIGN0eC5lbGVtZW50cy5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgaWYgKGNvbnN1bWUkMihzY2FubmVyLCBpc0NoaWxkT3BlcmF0b3IpKSB7XG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaChjdHgpO1xuICAgICAgICAgICAgICAgIGN0eCA9IG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjb25zdW1lJDIoc2Nhbm5lciwgaXNTaWJsaW5nT3BlcmF0b3IkMSkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNvbnN1bWUkMihzY2FubmVyLCBpc0NsaW1iT3BlcmF0b3IpKSB7XG4gICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhY2subGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHggPSBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gd2hpbGUgKGNvbnN1bWUkMihzY2FubmVyLCBpc0NsaW1iT3BlcmF0b3IpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIENvbnN1bWVzIGdyb3VwIGZyb20gZ2l2ZW4gc2Nhbm5lclxuICovXG5mdW5jdGlvbiBncm91cChzY2FubmVyLCBvcHRpb25zKSB7XG4gICAgaWYgKGNvbnN1bWUkMihzY2FubmVyLCBpc0dyb3VwU3RhcnQpKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN0YXRlbWVudHMoc2Nhbm5lciwgb3B0aW9ucyk7XG4gICAgICAgIGNvbnN0IHRva2VuID0gbmV4dChzY2FubmVyKTtcbiAgICAgICAgaWYgKGlzQnJhY2tldCQyKHRva2VuLCAnZ3JvdXAnLCBmYWxzZSkpIHtcbiAgICAgICAgICAgIHJlc3VsdC5yZXBlYXQgPSByZXBlYXRlcihzY2FubmVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbi8qKlxuICogQ29uc3VtZXMgc2luZ2xlIGVsZW1lbnQgZnJvbSBnaXZlbiBzY2FubmVyXG4gKi9cbmZ1bmN0aW9uIGVsZW1lbnQkMihzY2FubmVyLCBvcHRpb25zKSB7XG4gICAgbGV0IGF0dHI7XG4gICAgY29uc3QgZWxlbSA9IHtcbiAgICAgICAgdHlwZTogJ1Rva2VuRWxlbWVudCcsXG4gICAgICAgIG5hbWU6IHZvaWQgMCxcbiAgICAgICAgYXR0cmlidXRlczogdm9pZCAwLFxuICAgICAgICB2YWx1ZTogdm9pZCAwLFxuICAgICAgICByZXBlYXQ6IHZvaWQgMCxcbiAgICAgICAgc2VsZkNsb3NlOiBmYWxzZSxcbiAgICAgICAgZWxlbWVudHM6IFtdXG4gICAgfTtcbiAgICBpZiAoZWxlbWVudE5hbWUoc2Nhbm5lciwgb3B0aW9ucykpIHtcbiAgICAgICAgZWxlbS5uYW1lID0gc2xpY2Uoc2Nhbm5lcik7XG4gICAgfVxuICAgIHdoaWxlIChyZWFkYWJsZSQxKHNjYW5uZXIpKSB7XG4gICAgICAgIHNjYW5uZXIuc3RhcnQgPSBzY2FubmVyLnBvcztcbiAgICAgICAgaWYgKCFlbGVtLnJlcGVhdCAmJiAhaXNFbXB0eShlbGVtKSAmJiBjb25zdW1lJDIoc2Nhbm5lciwgaXNSZXBlYXRlcikpIHtcbiAgICAgICAgICAgIGVsZW0ucmVwZWF0ID0gc2Nhbm5lci50b2tlbnNbc2Nhbm5lci5wb3MgLSAxXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghZWxlbS52YWx1ZSAmJiB0ZXh0KHNjYW5uZXIpKSB7XG4gICAgICAgICAgICBlbGVtLnZhbHVlID0gZ2V0VGV4dChzY2FubmVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhdHRyID0gc2hvcnRBdHRyaWJ1dGUoc2Nhbm5lciwgJ2lkJywgb3B0aW9ucykgfHwgc2hvcnRBdHRyaWJ1dGUoc2Nhbm5lciwgJ2NsYXNzJywgb3B0aW9ucykgfHwgYXR0cmlidXRlU2V0KHNjYW5uZXIpKSB7XG4gICAgICAgICAgICBpZiAoIWVsZW0uYXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgIGVsZW0uYXR0cmlidXRlcyA9IEFycmF5LmlzQXJyYXkoYXR0cikgPyBhdHRyLnNsaWNlKCkgOiBbYXR0cl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtLmF0dHJpYnV0ZXMgPSBlbGVtLmF0dHJpYnV0ZXMuY29uY2F0KGF0dHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFpc0VtcHR5KGVsZW0pICYmIGNvbnN1bWUkMihzY2FubmVyLCBpc0Nsb3NlT3BlcmF0b3IpKSB7XG4gICAgICAgICAgICAgICAgZWxlbS5zZWxmQ2xvc2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmICghZWxlbS5yZXBlYXQgJiYgY29uc3VtZSQyKHNjYW5uZXIsIGlzUmVwZWF0ZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0ucmVwZWF0ID0gc2Nhbm5lci50b2tlbnNbc2Nhbm5lci5wb3MgLSAxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gIWlzRW1wdHkoZWxlbSkgPyBlbGVtIDogdm9pZCAwO1xufVxuLyoqXG4gKiBDb25zdW1lcyBhdHRyaWJ1dGUgc2V0IGZyb20gZ2l2ZW4gc2Nhbm5lclxuICovXG5mdW5jdGlvbiBhdHRyaWJ1dGVTZXQoc2Nhbm5lcikge1xuICAgIGlmIChjb25zdW1lJDIoc2Nhbm5lciwgaXNBdHRyaWJ1dGVTZXRTdGFydCkpIHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IFtdO1xuICAgICAgICBsZXQgYXR0cjtcbiAgICAgICAgd2hpbGUgKHJlYWRhYmxlJDEoc2Nhbm5lcikpIHtcbiAgICAgICAgICAgIGlmIChhdHRyID0gYXR0cmlidXRlKHNjYW5uZXIpKSB7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5wdXNoKGF0dHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY29uc3VtZSQyKHNjYW5uZXIsIGlzQXR0cmlidXRlU2V0RW5kKSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIWNvbnN1bWUkMihzY2FubmVyLCBpc1doaXRlU3BhY2UkMikpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvciQxKHNjYW5uZXIsIGBVbmV4cGVjdGVkIFwiJHtwZWVrJDMoc2Nhbm5lcikudHlwZX1cIiB0b2tlbmApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhdHRyaWJ1dGVzO1xuICAgIH1cbn1cbi8qKlxuICogQ29uc3VtZXMgYXR0cmlidXRlIHNob3J0aGFuZCAoY2xhc3Mgb3IgaWQpIGZyb20gZ2l2ZW4gc2Nhbm5lclxuICovXG5mdW5jdGlvbiBzaG9ydEF0dHJpYnV0ZShzY2FubmVyLCB0eXBlLCBvcHRpb25zKSB7XG4gICAgaWYgKGlzT3BlcmF0b3IkMShwZWVrJDMoc2Nhbm5lciksIHR5cGUpKSB7XG4gICAgICAgIHNjYW5uZXIucG9zKys7XG4gICAgICAgIGNvbnN0IGF0dHIgPSB7XG4gICAgICAgICAgICBuYW1lOiBbY3JlYXRlTGl0ZXJhbCQxKHR5cGUpXVxuICAgICAgICB9O1xuICAgICAgICAvLyBDb25zdW1lIGV4cHJlc3Npb24gYWZ0ZXIgc2hvcnRoYW5kIHN0YXJ0IGZvciBSZWFjdC1saWtlIGNvbXBvbmVudHNcbiAgICAgICAgaWYgKG9wdGlvbnMuanN4ICYmIHRleHQoc2Nhbm5lcikpIHtcbiAgICAgICAgICAgIGF0dHIudmFsdWUgPSBnZXRUZXh0KHNjYW5uZXIpO1xuICAgICAgICAgICAgYXR0ci5leHByZXNzaW9uID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGF0dHIudmFsdWUgPSBsaXRlcmFsJDIoc2Nhbm5lcikgPyBzbGljZShzY2FubmVyKSA6IHZvaWQgMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXR0cjtcbiAgICB9XG59XG4vKipcbiAqIENvbnN1bWVzIHNpbmdsZSBhdHRyaWJ1dGUgZnJvbSBnaXZlbiBzY2FubmVyXG4gKi9cbmZ1bmN0aW9uIGF0dHJpYnV0ZShzY2FubmVyKSB7XG4gICAgaWYgKHF1b3RlZChzY2FubmVyKSkge1xuICAgICAgICAvLyBDb25zdW1lZCBxdW90ZWQgdmFsdWU6IGl04oCZcyBhIHZhbHVlIGZvciBkZWZhdWx0IGF0dHJpYnV0ZVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHNsaWNlKHNjYW5uZXIpXG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmIChsaXRlcmFsJDIoc2Nhbm5lciwgdHJ1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IHNsaWNlKHNjYW5uZXIpLFxuICAgICAgICAgICAgdmFsdWU6IGNvbnN1bWUkMihzY2FubmVyLCBpc0VxdWFscykgJiYgKHF1b3RlZChzY2FubmVyKSB8fCBsaXRlcmFsJDIoc2Nhbm5lciwgdHJ1ZSkpXG4gICAgICAgICAgICAgICAgPyBzbGljZShzY2FubmVyKVxuICAgICAgICAgICAgICAgIDogdm9pZCAwXG4gICAgICAgIH07XG4gICAgfVxufVxuZnVuY3Rpb24gcmVwZWF0ZXIoc2Nhbm5lcikge1xuICAgIHJldHVybiBpc1JlcGVhdGVyKHBlZWskMyhzY2FubmVyKSlcbiAgICAgICAgPyBzY2FubmVyLnRva2Vuc1tzY2FubmVyLnBvcysrXVxuICAgICAgICA6IHZvaWQgMDtcbn1cbi8qKlxuICogQ29uc3VtZXMgcXVvdGVkIHZhbHVlIGZyb20gZ2l2ZW4gc2Nhbm5lciwgaWYgcG9zc2libGVcbiAqL1xuZnVuY3Rpb24gcXVvdGVkKHNjYW5uZXIpIHtcbiAgICBjb25zdCBzdGFydCA9IHNjYW5uZXIucG9zO1xuICAgIGNvbnN0IHF1b3RlID0gcGVlayQzKHNjYW5uZXIpO1xuICAgIGlmIChpc1F1b3RlJDEocXVvdGUpKSB7XG4gICAgICAgIHNjYW5uZXIucG9zKys7XG4gICAgICAgIHdoaWxlIChyZWFkYWJsZSQxKHNjYW5uZXIpKSB7XG4gICAgICAgICAgICBpZiAoaXNRdW90ZSQxKG5leHQoc2Nhbm5lciksIHF1b3RlLnNpbmdsZSkpIHtcbiAgICAgICAgICAgICAgICBzY2FubmVyLnN0YXJ0ID0gc3RhcnQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyb3IkMShzY2FubmVyLCAnVW5jbG9zZWQgcXVvdGUnLCBxdW90ZSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbi8qKlxuICogQ29uc3VtZXMgbGl0ZXJhbCAodW5xdW90ZWQgdmFsdWUpIGZyb20gZ2l2ZW4gc2Nhbm5lclxuICovXG5mdW5jdGlvbiBsaXRlcmFsJDIoc2Nhbm5lciwgYWxsb3dCcmFja2V0cykge1xuICAgIGNvbnN0IHN0YXJ0ID0gc2Nhbm5lci5wb3M7XG4gICAgY29uc3QgYnJhY2tldHMgPSB7XG4gICAgICAgIGF0dHJpYnV0ZTogMCxcbiAgICAgICAgZXhwcmVzc2lvbjogMCxcbiAgICAgICAgZ3JvdXA6IDBcbiAgICB9O1xuICAgIHdoaWxlIChyZWFkYWJsZSQxKHNjYW5uZXIpKSB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gcGVlayQzKHNjYW5uZXIpO1xuICAgICAgICBpZiAoYnJhY2tldHMuZXhwcmVzc2lvbikge1xuICAgICAgICAgICAgLy8gSWYgd2XigJlyZSBpbnNpZGUgZXhwcmVzc2lvbiwgd2Ugc2hvdWxkIGNvbnN1bWUgYWxsIGNvbnRlbnQgaW4gaXRcbiAgICAgICAgICAgIGlmIChpc0JyYWNrZXQkMih0b2tlbiwgJ2V4cHJlc3Npb24nKSkge1xuICAgICAgICAgICAgICAgIGJyYWNrZXRzW3Rva2VuLmNvbnRleHRdICs9IHRva2VuLm9wZW4gPyAxIDogLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNRdW90ZSQxKHRva2VuKSB8fCBpc09wZXJhdG9yJDEodG9rZW4pIHx8IGlzV2hpdGVTcGFjZSQyKHRva2VuKSB8fCBpc1JlcGVhdGVyKHRva2VuKSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNCcmFja2V0JDIodG9rZW4pKSB7XG4gICAgICAgICAgICBpZiAoIWFsbG93QnJhY2tldHMpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0b2tlbi5vcGVuKSB7XG4gICAgICAgICAgICAgICAgYnJhY2tldHNbdG9rZW4uY29udGV4dF0rKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCFicmFja2V0c1t0b2tlbi5jb250ZXh0XSkge1xuICAgICAgICAgICAgICAgIC8vIFN0b3AgaWYgZm91bmQgdW5tYXRjaGVkIGNsb3NpbmcgYnJhY2U6IGl0IG11c3QgYmUgaGFuZGxlZFxuICAgICAgICAgICAgICAgIC8vIGJ5IHBhcmVudCBjb25zdW1lclxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYnJhY2tldHNbdG9rZW4uY29udGV4dF0tLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzY2FubmVyLnBvcysrO1xuICAgIH1cbiAgICBpZiAoc3RhcnQgIT09IHNjYW5uZXIucG9zKSB7XG4gICAgICAgIHNjYW5uZXIuc3RhcnQgPSBzdGFydDtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbi8qKlxuICogQ29uc3VtZXMgZWxlbWVudCBuYW1lIGZyb20gZ2l2ZW4gc2Nhbm5lclxuICovXG5mdW5jdGlvbiBlbGVtZW50TmFtZShzY2FubmVyLCBvcHRpb25zKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBzY2FubmVyLnBvcztcbiAgICBpZiAob3B0aW9ucy5qc3ggJiYgY29uc3VtZSQyKHNjYW5uZXIsIGlzQ2FwaXRhbGl6ZWRMaXRlcmFsKSkge1xuICAgICAgICAvLyBDaGVjayBmb3IgZWRnZSBjYXNlOiBjb25zdW1lIGltbWVkaWF0ZSBjYXBpdGFsaXplZCBjbGFzcyBuYW1lc1xuICAgICAgICAvLyBmb3IgUmVhY3QtbGlrZSBjb21wb25lbnRzLCBlLmcuIGBGb28uQmFyLkJhemBcbiAgICAgICAgd2hpbGUgKHJlYWRhYmxlJDEoc2Nhbm5lcikpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgcG9zIH0gPSBzY2FubmVyO1xuICAgICAgICAgICAgaWYgKCFjb25zdW1lJDIoc2Nhbm5lciwgaXNDbGFzc05hbWVPcGVyYXRvcikgfHwgIWNvbnN1bWUkMihzY2FubmVyLCBpc0NhcGl0YWxpemVkTGl0ZXJhbCkpIHtcbiAgICAgICAgICAgICAgICBzY2FubmVyLnBvcyA9IHBvcztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB3aGlsZSAocmVhZGFibGUkMShzY2FubmVyKSAmJiBjb25zdW1lJDIoc2Nhbm5lciwgaXNFbGVtZW50TmFtZSkpIHtcbiAgICAgICAgLy8gZW1wdHlcbiAgICB9XG4gICAgaWYgKHNjYW5uZXIucG9zICE9PSBzdGFydCkge1xuICAgICAgICBzY2FubmVyLnN0YXJ0ID0gc3RhcnQ7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG4vKipcbiAqIENvbnN1bWVzIHRleHQgdmFsdWUgZnJvbSBnaXZlbiBzY2FubmVyXG4gKi9cbmZ1bmN0aW9uIHRleHQoc2Nhbm5lcikge1xuICAgIGNvbnN0IHN0YXJ0ID0gc2Nhbm5lci5wb3M7XG4gICAgaWYgKGNvbnN1bWUkMihzY2FubmVyLCBpc1RleHRTdGFydCkpIHtcbiAgICAgICAgbGV0IGJyYWNrZXRzID0gMDtcbiAgICAgICAgd2hpbGUgKHJlYWRhYmxlJDEoc2Nhbm5lcikpIHtcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gbmV4dChzY2FubmVyKTtcbiAgICAgICAgICAgIGlmIChpc0JyYWNrZXQkMih0b2tlbiwgJ2V4cHJlc3Npb24nKSkge1xuICAgICAgICAgICAgICAgIGlmICh0b2tlbi5vcGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyYWNrZXRzKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFicmFja2V0cykge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJyYWNrZXRzLS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNjYW5uZXIuc3RhcnQgPSBzdGFydDtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGdldFRleHQoc2Nhbm5lcikge1xuICAgIGxldCBmcm9tID0gc2Nhbm5lci5zdGFydDtcbiAgICBsZXQgdG8gPSBzY2FubmVyLnBvcztcbiAgICBpZiAoaXNCcmFja2V0JDIoc2Nhbm5lci50b2tlbnNbZnJvbV0sICdleHByZXNzaW9uJywgdHJ1ZSkpIHtcbiAgICAgICAgZnJvbSsrO1xuICAgIH1cbiAgICBpZiAoaXNCcmFja2V0JDIoc2Nhbm5lci50b2tlbnNbdG8gLSAxXSwgJ2V4cHJlc3Npb24nLCBmYWxzZSkpIHtcbiAgICAgICAgdG8tLTtcbiAgICB9XG4gICAgcmV0dXJuIHNsaWNlKHNjYW5uZXIsIGZyb20sIHRvKTtcbn1cbmZ1bmN0aW9uIGlzQnJhY2tldCQyKHRva2VuLCBjb250ZXh0LCBpc09wZW4pIHtcbiAgICByZXR1cm4gQm9vbGVhbih0b2tlbiAmJiB0b2tlbi50eXBlID09PSAnQnJhY2tldCdcbiAgICAgICAgJiYgKCFjb250ZXh0IHx8IHRva2VuLmNvbnRleHQgPT09IGNvbnRleHQpXG4gICAgICAgICYmIChpc09wZW4gPT0gbnVsbCB8fCB0b2tlbi5vcGVuID09PSBpc09wZW4pKTtcbn1cbmZ1bmN0aW9uIGlzT3BlcmF0b3IkMSh0b2tlbiwgdHlwZSkge1xuICAgIHJldHVybiBCb29sZWFuKHRva2VuICYmIHRva2VuLnR5cGUgPT09ICdPcGVyYXRvcicgJiYgKCF0eXBlIHx8IHRva2VuLm9wZXJhdG9yID09PSB0eXBlKSk7XG59XG5mdW5jdGlvbiBpc1F1b3RlJDEodG9rZW4sIGlzU2luZ2xlKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odG9rZW4gJiYgdG9rZW4udHlwZSA9PT0gJ1F1b3RlJyAmJiAoaXNTaW5nbGUgPT0gbnVsbCB8fCB0b2tlbi5zaW5nbGUgPT09IGlzU2luZ2xlKSk7XG59XG5mdW5jdGlvbiBpc1doaXRlU3BhY2UkMih0b2tlbikge1xuICAgIHJldHVybiBCb29sZWFuKHRva2VuICYmIHRva2VuLnR5cGUgPT09ICdXaGl0ZVNwYWNlJyk7XG59XG5mdW5jdGlvbiBpc0VxdWFscyh0b2tlbikge1xuICAgIHJldHVybiBpc09wZXJhdG9yJDEodG9rZW4sICdlcXVhbCcpO1xufVxuZnVuY3Rpb24gaXNSZXBlYXRlcih0b2tlbikge1xuICAgIHJldHVybiBCb29sZWFuKHRva2VuICYmIHRva2VuLnR5cGUgPT09ICdSZXBlYXRlcicpO1xufVxuZnVuY3Rpb24gaXNMaXRlcmFsJDIodG9rZW4pIHtcbiAgICByZXR1cm4gdG9rZW4udHlwZSA9PT0gJ0xpdGVyYWwnO1xufVxuZnVuY3Rpb24gaXNDYXBpdGFsaXplZExpdGVyYWwodG9rZW4pIHtcbiAgICBpZiAoaXNMaXRlcmFsJDIodG9rZW4pKSB7XG4gICAgICAgIGNvbnN0IGNoID0gdG9rZW4udmFsdWUuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgcmV0dXJuIGNoID49IDY1ICYmIGNoIDw9IDkwO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnROYW1lKHRva2VuKSB7XG4gICAgcmV0dXJuIHRva2VuLnR5cGUgPT09ICdMaXRlcmFsJyB8fCB0b2tlbi50eXBlID09PSAnUmVwZWF0ZXJOdW1iZXInIHx8IHRva2VuLnR5cGUgPT09ICdSZXBlYXRlclBsYWNlaG9sZGVyJztcbn1cbmZ1bmN0aW9uIGlzQ2xhc3NOYW1lT3BlcmF0b3IodG9rZW4pIHtcbiAgICByZXR1cm4gaXNPcGVyYXRvciQxKHRva2VuLCAnY2xhc3MnKTtcbn1cbmZ1bmN0aW9uIGlzQXR0cmlidXRlU2V0U3RhcnQodG9rZW4pIHtcbiAgICByZXR1cm4gaXNCcmFja2V0JDIodG9rZW4sICdhdHRyaWJ1dGUnLCB0cnVlKTtcbn1cbmZ1bmN0aW9uIGlzQXR0cmlidXRlU2V0RW5kKHRva2VuKSB7XG4gICAgcmV0dXJuIGlzQnJhY2tldCQyKHRva2VuLCAnYXR0cmlidXRlJywgZmFsc2UpO1xufVxuZnVuY3Rpb24gaXNUZXh0U3RhcnQodG9rZW4pIHtcbiAgICByZXR1cm4gaXNCcmFja2V0JDIodG9rZW4sICdleHByZXNzaW9uJywgdHJ1ZSk7XG59XG5mdW5jdGlvbiBpc0dyb3VwU3RhcnQodG9rZW4pIHtcbiAgICByZXR1cm4gaXNCcmFja2V0JDIodG9rZW4sICdncm91cCcsIHRydWUpO1xufVxuZnVuY3Rpb24gY3JlYXRlTGl0ZXJhbCQxKHZhbHVlKSB7XG4gICAgcmV0dXJuIHsgdHlwZTogJ0xpdGVyYWwnLCB2YWx1ZSB9O1xufVxuZnVuY3Rpb24gaXNFbXB0eShlbGVtKSB7XG4gICAgcmV0dXJuICFlbGVtLm5hbWUgJiYgIWVsZW0udmFsdWUgJiYgIWVsZW0uYXR0cmlidXRlcztcbn1cbmZ1bmN0aW9uIGlzQ2hpbGRPcGVyYXRvcih0b2tlbikge1xuICAgIHJldHVybiBpc09wZXJhdG9yJDEodG9rZW4sICdjaGlsZCcpO1xufVxuZnVuY3Rpb24gaXNTaWJsaW5nT3BlcmF0b3IkMSh0b2tlbikge1xuICAgIHJldHVybiBpc09wZXJhdG9yJDEodG9rZW4sICdzaWJsaW5nJyk7XG59XG5mdW5jdGlvbiBpc0NsaW1iT3BlcmF0b3IodG9rZW4pIHtcbiAgICByZXR1cm4gaXNPcGVyYXRvciQxKHRva2VuLCAnY2xpbWInKTtcbn1cbmZ1bmN0aW9uIGlzQ2xvc2VPcGVyYXRvcih0b2tlbikge1xuICAgIHJldHVybiBpc09wZXJhdG9yJDEodG9rZW4sICdjbG9zZScpO1xufVxuXG4vKipcbiAqIElmIGNvbnN1bWVzIGVzY2FwZSBjaGFyYWN0ZXIsIHNldHMgY3VycmVudCBzdHJlYW0gcmFuZ2UgdG8gZXNjYXBlZCB2YWx1ZVxuICovXG5mdW5jdGlvbiBlc2NhcGVkKHNjYW5uZXIpIHtcbiAgICBpZiAoc2Nhbm5lci5lYXQoOTIgLyogRXNjYXBlICovKSkge1xuICAgICAgICBzY2FubmVyLnN0YXJ0ID0gc2Nhbm5lci5wb3M7XG4gICAgICAgIGlmICghc2Nhbm5lci5lb2YoKSkge1xuICAgICAgICAgICAgc2Nhbm5lci5wb3MrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiB0b2tlbml6ZSQxKHNvdXJjZSkge1xuICAgIGNvbnN0IHNjYW5uZXIgPSBuZXcgU2Nhbm5lcihzb3VyY2UpO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGNvbnN0IGN0eCA9IHtcbiAgICAgICAgZ3JvdXA6IDAsXG4gICAgICAgIGF0dHJpYnV0ZTogMCxcbiAgICAgICAgZXhwcmVzc2lvbjogMCxcbiAgICAgICAgcXVvdGU6IDBcbiAgICB9O1xuICAgIGxldCBjaCA9IDA7XG4gICAgbGV0IHRva2VuO1xuICAgIHdoaWxlICghc2Nhbm5lci5lb2YoKSkge1xuICAgICAgICBjaCA9IHNjYW5uZXIucGVlaygpO1xuICAgICAgICB0b2tlbiA9IGdldFRva2VuJDEoc2Nhbm5lciwgY3R4KTtcbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh0b2tlbik7XG4gICAgICAgICAgICBpZiAodG9rZW4udHlwZSA9PT0gJ1F1b3RlJykge1xuICAgICAgICAgICAgICAgIGN0eC5xdW90ZSA9IGNoID09PSBjdHgucXVvdGUgPyAwIDogY2g7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbi50eXBlID09PSAnQnJhY2tldCcpIHtcbiAgICAgICAgICAgICAgICBjdHhbdG9rZW4uY29udGV4dF0gKz0gdG9rZW4ub3BlbiA/IDEgOiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IHNjYW5uZXIuZXJyb3IoJ1VuZXhwZWN0ZWQgY2hhcmFjdGVyJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogUmV0dXJucyBuZXh0IHRva2VuIGZyb20gZ2l2ZW4gc2Nhbm5lciwgaWYgcG9zc2libGVcbiAqL1xuZnVuY3Rpb24gZ2V0VG9rZW4kMShzY2FubmVyLCBjdHgpIHtcbiAgICByZXR1cm4gZmllbGQkMihzY2FubmVyLCBjdHgpXG4gICAgICAgIHx8IHJlcGVhdGVyUGxhY2Vob2xkZXIoc2Nhbm5lcilcbiAgICAgICAgfHwgcmVwZWF0ZXJOdW1iZXIoc2Nhbm5lcilcbiAgICAgICAgfHwgcmVwZWF0ZXIkMShzY2FubmVyKVxuICAgICAgICB8fCB3aGl0ZVNwYWNlJDEoc2Nhbm5lcilcbiAgICAgICAgfHwgbGl0ZXJhbCQxJDEoc2Nhbm5lciwgY3R4KVxuICAgICAgICB8fCBvcGVyYXRvciQxKHNjYW5uZXIpXG4gICAgICAgIHx8IHF1b3RlKHNjYW5uZXIpXG4gICAgICAgIHx8IGJyYWNrZXQkMShzY2FubmVyKTtcbn1cbi8qKlxuICogQ29uc3VtZXMgbGl0ZXJhbCBmcm9tIGdpdmVuIHNjYW5uZXJcbiAqL1xuZnVuY3Rpb24gbGl0ZXJhbCQxJDEoc2Nhbm5lciwgY3R4KSB7XG4gICAgY29uc3Qgc3RhcnQgPSBzY2FubmVyLnBvcztcbiAgICBsZXQgdmFsdWUgPSAnJztcbiAgICB3aGlsZSAoIXNjYW5uZXIuZW9mKCkpIHtcbiAgICAgICAgLy8gQ29uc3VtZSBlc2NhcGVkIHNlcXVlbmNlIG5vIG1hdHRlciBvZiBjb250ZXh0XG4gICAgICAgIGlmIChlc2NhcGVkKHNjYW5uZXIpKSB7XG4gICAgICAgICAgICB2YWx1ZSArPSBzY2FubmVyLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNoID0gc2Nhbm5lci5wZWVrKCk7XG4gICAgICAgIGlmIChjaCA9PT0gY3R4LnF1b3RlIHx8IGNoID09PSAzNiAvKiBEb2xsYXIgKi8gfHwgaXNBbGxvd2VkT3BlcmF0b3IoY2gsIGN0eCkpIHtcbiAgICAgICAgICAgIC8vIDEuIEZvdW5kIG1hdGNoaW5nIHF1b3RlXG4gICAgICAgICAgICAvLyAyLiBUaGUgYCRgIGNoYXJhY3RlciBoYXMgc3BlY2lhbCBtZWFuaW5nIGluIGV2ZXJ5IGNvbnRleHRcbiAgICAgICAgICAgIC8vIDMuIERlcGVuZGluZyBvbiBjb250ZXh0LCBzb21lIGNoYXJhY3RlcnMgc2hvdWxkIGJlIHRyZWF0ZWQgYXMgb3BlcmF0b3JzXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3R4LmV4cHJlc3Npb24gJiYgY2ggPT09IDEyNSAvKiBDdXJseUJyYWNrZXRDbG9zZSAqLykge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjdHgucXVvdGUgJiYgIWN0eC5leHByZXNzaW9uKSB7XG4gICAgICAgICAgICAvLyBDb25zdW1pbmcgZWxlbWVudCBuYW1lXG4gICAgICAgICAgICBpZiAoIWN0eC5hdHRyaWJ1dGUgJiYgIWlzRWxlbWVudE5hbWUkMShjaCkpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0FsbG93ZWRTcGFjZShjaCwgY3R4KSB8fCBpc0FsbG93ZWRSZXBlYXRlcihjaCwgY3R4KSB8fCBpc1F1b3RlJDIoY2gpIHx8IGJyYWNrZXRUeXBlKGNoKSkge1xuICAgICAgICAgICAgICAgIC8vIFN0b3AgZm9yIGNoYXJhY3RlcnMgbm90IGFsbG93ZWQgaW4gdW5xdW90ZWQgbGl0ZXJhbFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhbHVlICs9IHNjYW5uZXIuc3RyaW5nW3NjYW5uZXIucG9zKytdO1xuICAgIH1cbiAgICBpZiAoc3RhcnQgIT09IHNjYW5uZXIucG9zKSB7XG4gICAgICAgIHNjYW5uZXIuc3RhcnQgPSBzdGFydDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6ICdMaXRlcmFsJyxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IHNjYW5uZXIucG9zXG4gICAgICAgIH07XG4gICAgfVxufVxuLyoqXG4gKiBDb25zdW1lcyB3aGl0ZSBzcGFjZSBjaGFyYWN0ZXJzIGFzIHN0cmluZyBsaXRlcmFsIGZyb20gZ2l2ZW4gc2Nhbm5lclxuICovXG5mdW5jdGlvbiB3aGl0ZVNwYWNlJDEoc2Nhbm5lcikge1xuICAgIGNvbnN0IHN0YXJ0ID0gc2Nhbm5lci5wb3M7XG4gICAgaWYgKHNjYW5uZXIuZWF0V2hpbGUoaXNTcGFjZSkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6ICdXaGl0ZVNwYWNlJyxcbiAgICAgICAgICAgIHN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBzY2FubmVyLnBvcyxcbiAgICAgICAgICAgIHZhbHVlOiBzY2FubmVyLnN1YnN0cmluZyhzdGFydCwgc2Nhbm5lci5wb3MpXG4gICAgICAgIH07XG4gICAgfVxufVxuLyoqXG4gKiBDb25zdW1lcyBxdW90ZSBmcm9tIGdpdmVuIHNjYW5uZXJcbiAqL1xuZnVuY3Rpb24gcXVvdGUoc2Nhbm5lcikge1xuICAgIGNvbnN0IGNoID0gc2Nhbm5lci5wZWVrKCk7XG4gICAgaWYgKGlzUXVvdGUkMihjaCkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6ICdRdW90ZScsXG4gICAgICAgICAgICBzaW5nbGU6IGNoID09PSAzOSAvKiBTaW5nbGVRdW90ZSAqLyxcbiAgICAgICAgICAgIHN0YXJ0OiBzY2FubmVyLnBvcysrLFxuICAgICAgICAgICAgZW5kOiBzY2FubmVyLnBvc1xuICAgICAgICB9O1xuICAgIH1cbn1cbi8qKlxuICogQ29uc3VtZXMgYnJhY2tldCBmcm9tIGdpdmVuIHNjYW5uZXJcbiAqL1xuZnVuY3Rpb24gYnJhY2tldCQxKHNjYW5uZXIpIHtcbiAgICBjb25zdCBjaCA9IHNjYW5uZXIucGVlaygpO1xuICAgIGNvbnN0IGNvbnRleHQgPSBicmFja2V0VHlwZShjaCk7XG4gICAgaWYgKGNvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6ICdCcmFja2V0JyxcbiAgICAgICAgICAgIG9wZW46IGlzT3BlbkJyYWNrZXQkMihjaCksXG4gICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgc3RhcnQ6IHNjYW5uZXIucG9zKyssXG4gICAgICAgICAgICBlbmQ6IHNjYW5uZXIucG9zXG4gICAgICAgIH07XG4gICAgfVxufVxuLyoqXG4gKiBDb25zdW1lcyBvcGVyYXRvciBmcm9tIGdpdmVuIHNjYW5uZXJcbiAqL1xuZnVuY3Rpb24gb3BlcmF0b3IkMShzY2FubmVyKSB7XG4gICAgY29uc3Qgb3AgPSBvcGVyYXRvclR5cGUkMShzY2FubmVyLnBlZWsoKSk7XG4gICAgaWYgKG9wKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiAnT3BlcmF0b3InLFxuICAgICAgICAgICAgb3BlcmF0b3I6IG9wLFxuICAgICAgICAgICAgc3RhcnQ6IHNjYW5uZXIucG9zKyssXG4gICAgICAgICAgICBlbmQ6IHNjYW5uZXIucG9zXG4gICAgICAgIH07XG4gICAgfVxufVxuLyoqXG4gKiBDb25zdW1lcyBub2RlIHJlcGVhdCB0b2tlbiBmcm9tIGN1cnJlbnQgc3RyZWFtIHBvc2l0aW9uIGFuZCByZXR1cm5zIGl0c1xuICogcGFyc2VkIHZhbHVlXG4gKi9cbmZ1bmN0aW9uIHJlcGVhdGVyJDEoc2Nhbm5lcikge1xuICAgIGNvbnN0IHN0YXJ0ID0gc2Nhbm5lci5wb3M7XG4gICAgaWYgKHNjYW5uZXIuZWF0KDQyIC8qIEFzdGVyaXNrICovKSkge1xuICAgICAgICBzY2FubmVyLnN0YXJ0ID0gc2Nhbm5lci5wb3M7XG4gICAgICAgIGxldCBjb3VudCA9IDE7XG4gICAgICAgIGxldCBpbXBsaWNpdCA9IGZhbHNlO1xuICAgICAgICBpZiAoc2Nhbm5lci5lYXRXaGlsZShpc051bWJlciQxKSkge1xuICAgICAgICAgICAgY291bnQgPSBOdW1iZXIoc2Nhbm5lci5jdXJyZW50KCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaW1wbGljaXQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiAnUmVwZWF0ZXInLFxuICAgICAgICAgICAgY291bnQsXG4gICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICAgIGltcGxpY2l0LFxuICAgICAgICAgICAgc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IHNjYW5uZXIucG9zXG4gICAgICAgIH07XG4gICAgfVxufVxuLyoqXG4gKiBDb25zdW1lcyByZXBlYXRlciBwbGFjZWhvbGRlciBgJCNgIGZyb20gZ2l2ZW4gc2Nhbm5lclxuICovXG5mdW5jdGlvbiByZXBlYXRlclBsYWNlaG9sZGVyKHNjYW5uZXIpIHtcbiAgICBjb25zdCBzdGFydCA9IHNjYW5uZXIucG9zO1xuICAgIGlmIChzY2FubmVyLmVhdCgzNiAvKiBEb2xsYXIgKi8pICYmIHNjYW5uZXIuZWF0KDM1IC8qIEhhc2ggKi8pKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiAnUmVwZWF0ZXJQbGFjZWhvbGRlcicsXG4gICAgICAgICAgICB2YWx1ZTogdm9pZCAwLFxuICAgICAgICAgICAgc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IHNjYW5uZXIucG9zXG4gICAgICAgIH07XG4gICAgfVxuICAgIHNjYW5uZXIucG9zID0gc3RhcnQ7XG59XG4vKipcbiAqIENvbnN1bWVzIG51bWJlcmluZyB0b2tlbiBsaWtlIGAkYCBmcm9tIGdpdmVuIHNjYW5uZXIgc3RhdGVcbiAqL1xuZnVuY3Rpb24gcmVwZWF0ZXJOdW1iZXIoc2Nhbm5lcikge1xuICAgIGNvbnN0IHN0YXJ0ID0gc2Nhbm5lci5wb3M7XG4gICAgaWYgKHNjYW5uZXIuZWF0V2hpbGUoMzYgLyogRG9sbGFyICovKSkge1xuICAgICAgICBjb25zdCBzaXplID0gc2Nhbm5lci5wb3MgLSBzdGFydDtcbiAgICAgICAgbGV0IHJldmVyc2UgPSBmYWxzZTtcbiAgICAgICAgbGV0IGJhc2UgPSAxO1xuICAgICAgICBsZXQgcGFyZW50ID0gMDtcbiAgICAgICAgaWYgKHNjYW5uZXIuZWF0KDY0IC8qIEF0ICovKSkge1xuICAgICAgICAgICAgLy8gQ29uc3VtZSBudW1iZXJpbmcgbW9kaWZpZXJzXG4gICAgICAgICAgICB3aGlsZSAoc2Nhbm5lci5lYXQoOTQgLyogQ2xpbWIgKi8pKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXZlcnNlID0gc2Nhbm5lci5lYXQoNDUgLyogRGFzaCAqLyk7XG4gICAgICAgICAgICBzY2FubmVyLnN0YXJ0ID0gc2Nhbm5lci5wb3M7XG4gICAgICAgICAgICBpZiAoc2Nhbm5lci5lYXRXaGlsZShpc051bWJlciQxKSkge1xuICAgICAgICAgICAgICAgIGJhc2UgPSBOdW1iZXIoc2Nhbm5lci5jdXJyZW50KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNjYW5uZXIuc3RhcnQgPSBzdGFydDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6ICdSZXBlYXRlck51bWJlcicsXG4gICAgICAgICAgICBzaXplLFxuICAgICAgICAgICAgcmV2ZXJzZSxcbiAgICAgICAgICAgIGJhc2UsXG4gICAgICAgICAgICBwYXJlbnQsXG4gICAgICAgICAgICBzdGFydCxcbiAgICAgICAgICAgIGVuZDogc2Nhbm5lci5wb3NcbiAgICAgICAgfTtcbiAgICB9XG59XG5mdW5jdGlvbiBmaWVsZCQyKHNjYW5uZXIsIGN0eCkge1xuICAgIGNvbnN0IHN0YXJ0ID0gc2Nhbm5lci5wb3M7XG4gICAgLy8gRmllbGRzIGFyZSBhbGxvd2VkIGluc2lkZSBleHByZXNzaW9ucyBhbmQgYXR0cmlidXRlc1xuICAgIGlmICgoY3R4LmV4cHJlc3Npb24gfHwgY3R4LmF0dHJpYnV0ZSkgJiYgc2Nhbm5lci5lYXQoMzYgLyogRG9sbGFyICovKSAmJiBzY2FubmVyLmVhdCgxMjMgLyogQ3VybHlCcmFja2V0T3BlbiAqLykpIHtcbiAgICAgICAgc2Nhbm5lci5zdGFydCA9IHNjYW5uZXIucG9zO1xuICAgICAgICBsZXQgaW5kZXg7XG4gICAgICAgIGxldCBuYW1lID0gJyc7XG4gICAgICAgIGlmIChzY2FubmVyLmVhdFdoaWxlKGlzTnVtYmVyJDEpKSB7XG4gICAgICAgICAgICAvLyBJdOKAmXMgYSBmaWVsZFxuICAgICAgICAgICAgaW5kZXggPSBOdW1iZXIoc2Nhbm5lci5jdXJyZW50KCkpO1xuICAgICAgICAgICAgbmFtZSA9IHNjYW5uZXIuZWF0KDU4IC8qIENvbG9uICovKSA/IGNvbnN1bWVQbGFjZWhvbGRlciQyKHNjYW5uZXIpIDogJyc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNBbHBoYSQxKHNjYW5uZXIucGVlaygpKSkge1xuICAgICAgICAgICAgLy8gSXTigJlzIGEgdmFyaWFibGVcbiAgICAgICAgICAgIG5hbWUgPSBjb25zdW1lUGxhY2Vob2xkZXIkMihzY2FubmVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2Nhbm5lci5lYXQoMTI1IC8qIEN1cmx5QnJhY2tldENsb3NlICovKSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnRmllbGQnLFxuICAgICAgICAgICAgICAgIGluZGV4LCBuYW1lLFxuICAgICAgICAgICAgICAgIHN0YXJ0LFxuICAgICAgICAgICAgICAgIGVuZDogc2Nhbm5lci5wb3NcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgc2Nhbm5lci5lcnJvcignRXhwZWN0aW5nIH0nKTtcbiAgICB9XG4gICAgLy8gSWYgd2UgcmVhY2hlZCBoZXJlIHRoZW4gdGhlcmXigJlzIG5vIHZhbGlkIGZpZWxkIGhlcmUsIHJldmVydFxuICAgIC8vIGJhY2sgdG8gc3RhcnRpbmcgcG9zaXRpb25cbiAgICBzY2FubmVyLnBvcyA9IHN0YXJ0O1xufVxuLyoqXG4gKiBDb25zdW1lcyBhIHBsYWNlaG9sZGVyOiB2YWx1ZSByaWdodCBhZnRlciBgOmAgaW4gZmllbGQuIENvdWxkIGJlIGVtcHR5XG4gKi9cbmZ1bmN0aW9uIGNvbnN1bWVQbGFjZWhvbGRlciQyKHN0cmVhbSkge1xuICAgIGNvbnN0IHN0YWNrID0gW107XG4gICAgc3RyZWFtLnN0YXJ0ID0gc3RyZWFtLnBvcztcbiAgICB3aGlsZSAoIXN0cmVhbS5lb2YoKSkge1xuICAgICAgICBpZiAoc3RyZWFtLmVhdCgxMjMgLyogQ3VybHlCcmFja2V0T3BlbiAqLykpIHtcbiAgICAgICAgICAgIHN0YWNrLnB1c2goc3RyZWFtLnBvcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RyZWFtLmVhdCgxMjUgLyogQ3VybHlCcmFja2V0Q2xvc2UgKi8pKSB7XG4gICAgICAgICAgICBpZiAoIXN0YWNrLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHN0cmVhbS5wb3MtLTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YWNrLnBvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3RyZWFtLnBvcysrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChzdGFjay5sZW5ndGgpIHtcbiAgICAgICAgc3RyZWFtLnBvcyA9IHN0YWNrLnBvcCgpO1xuICAgICAgICB0aHJvdyBzdHJlYW0uZXJyb3IoYEV4cGVjdGluZyB9YCk7XG4gICAgfVxuICAgIHJldHVybiBzdHJlYW0uY3VycmVudCgpO1xufVxuLyoqXG4gKiBDaGVjayBpZiBnaXZlbiBjaGFyYWN0ZXIgY29kZSBpcyBhbiBvcGVyYXRvciBhbmQgaXTigJlzIGFsbG93ZWQgaW4gY3VycmVudCBjb250ZXh0XG4gKi9cbmZ1bmN0aW9uIGlzQWxsb3dlZE9wZXJhdG9yKGNoLCBjdHgpIHtcbiAgICBjb25zdCBvcCA9IG9wZXJhdG9yVHlwZSQxKGNoKTtcbiAgICBpZiAoIW9wIHx8IGN0eC5xdW90ZSB8fCBjdHguZXhwcmVzc2lvbikge1xuICAgICAgICAvLyBObyBvcGVyYXRvcnMgaW5zaWRlIHF1b3RlZCB2YWx1ZXMgb3IgZXhwcmVzc2lvbnNcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBJbnNpZGUgYXR0cmlidXRlcywgb25seSBgZXF1YWxzYCBpcyBhbGxvd2VkXG4gICAgcmV0dXJuICFjdHguYXR0cmlidXRlIHx8IG9wID09PSAnZXF1YWwnO1xufVxuLyoqXG4gKiBDaGVjayBpZiBnaXZlbiBjaGFyYWN0ZXIgaXMgYSBzcGFjZSBjaGFyYWN0ZXIgYW5kIGlzIGFsbG93ZWQgdG8gYmUgY29uc3VtZWRcbiAqIGFzIGEgc3BhY2UgdG9rZW4gaW4gY3VycmVudCBjb250ZXh0XG4gKi9cbmZ1bmN0aW9uIGlzQWxsb3dlZFNwYWNlKGNoLCBjdHgpIHtcbiAgICByZXR1cm4gaXNTcGFjZShjaCkgJiYgIWN0eC5leHByZXNzaW9uO1xufVxuLyoqXG4gKiBDaGVjayBpZiBnaXZlbiBjaGFyYWN0ZXIgY2FuIGJlIGNvbnN1bWVkIGFzIHJlcGVhdGVyIGluIGN1cnJlbnQgY29udGV4dFxuICovXG5mdW5jdGlvbiBpc0FsbG93ZWRSZXBlYXRlcihjaCwgY3R4KSB7XG4gICAgcmV0dXJuIGNoID09PSA0MiAvKiBBc3RlcmlzayAqLyAmJiAhY3R4LmF0dHJpYnV0ZSAmJiAhY3R4LmV4cHJlc3Npb247XG59XG4vKipcbiAqIElmIGdpdmVuIGNoYXJhY3RlciBpcyBhIGJyYWNrZXQsIHJldHVybnMgaXTigJlzIHR5cGVcbiAqL1xuZnVuY3Rpb24gYnJhY2tldFR5cGUoY2gpIHtcbiAgICBpZiAoY2ggPT09IDQwIC8qIFJvdW5kQnJhY2tldE9wZW4gKi8gfHwgY2ggPT09IDQxIC8qIFJvdW5kQnJhY2tldENsb3NlICovKSB7XG4gICAgICAgIHJldHVybiAnZ3JvdXAnO1xuICAgIH1cbiAgICBpZiAoY2ggPT09IDkxIC8qIFNxdWFyZUJyYWNrZXRPcGVuICovIHx8IGNoID09PSA5MyAvKiBTcXVhcmVCcmFja2V0Q2xvc2UgKi8pIHtcbiAgICAgICAgcmV0dXJuICdhdHRyaWJ1dGUnO1xuICAgIH1cbiAgICBpZiAoY2ggPT09IDEyMyAvKiBDdXJseUJyYWNrZXRPcGVuICovIHx8IGNoID09PSAxMjUgLyogQ3VybHlCcmFja2V0Q2xvc2UgKi8pIHtcbiAgICAgICAgcmV0dXJuICdleHByZXNzaW9uJztcbiAgICB9XG59XG4vKipcbiAqIElmIGdpdmVuIGNoYXJhY3RlciBpcyBhbiBvcGVyYXRvciwgcmV0dXJucyBpdOKAmXMgdHlwZVxuICovXG5mdW5jdGlvbiBvcGVyYXRvclR5cGUkMShjaCkge1xuICAgIHJldHVybiAoY2ggPT09IDYyIC8qIENoaWxkICovICYmICdjaGlsZCcpXG4gICAgICAgIHx8IChjaCA9PT0gNDMgLyogU2libGluZyAqLyAmJiAnc2libGluZycpXG4gICAgICAgIHx8IChjaCA9PT0gOTQgLyogQ2xpbWIgKi8gJiYgJ2NsaW1iJylcbiAgICAgICAgfHwgKGNoID09PSA0NiAvKiBEb3QgKi8gJiYgJ2NsYXNzJylcbiAgICAgICAgfHwgKGNoID09PSAzNSAvKiBIYXNoICovICYmICdpZCcpXG4gICAgICAgIHx8IChjaCA9PT0gNDcgLyogU2xhc2ggKi8gJiYgJ2Nsb3NlJylcbiAgICAgICAgfHwgKGNoID09PSA2MSAvKiBFcXVhbHMgKi8gJiYgJ2VxdWFsJylcbiAgICAgICAgfHwgdm9pZCAwO1xufVxuLyoqXG4gKiBDaGVjayBpZiBnaXZlbiBjaGFyYWN0ZXIgaXMgYW4gb3BlbiBicmFja2V0XG4gKi9cbmZ1bmN0aW9uIGlzT3BlbkJyYWNrZXQkMihjaCkge1xuICAgIHJldHVybiBjaCA9PT0gMTIzIC8qIEN1cmx5QnJhY2tldE9wZW4gKi9cbiAgICAgICAgfHwgY2ggPT09IDkxIC8qIFNxdWFyZUJyYWNrZXRPcGVuICovXG4gICAgICAgIHx8IGNoID09PSA0MCAvKiBSb3VuZEJyYWNrZXRPcGVuICovO1xufVxuLyoqXG4gKiBDaGVjayBpZiBnaXZlbiBjaGFyYWN0ZXIgaXMgYWxsb3dlZCBpbiBlbGVtZW50IG5hbWVcbiAqL1xuZnVuY3Rpb24gaXNFbGVtZW50TmFtZSQxKGNoKSB7XG4gICAgcmV0dXJuIGlzQWxwaGFOdW1lcmljV29yZChjaClcbiAgICAgICAgfHwgY2ggPT09IDQ1IC8qIERhc2ggKi9cbiAgICAgICAgfHwgY2ggPT09IDU4IC8qIENvbG9uICovXG4gICAgICAgIHx8IGNoID09PSAzMyAvKiBFeGNsICovO1xufVxuXG5jb25zdCBvcGVyYXRvcnMgPSB7XG4gICAgY2hpbGQ6ICc+JyxcbiAgICBjbGFzczogJy4nLFxuICAgIGNsaW1iOiAnXicsXG4gICAgaWQ6ICcjJyxcbiAgICBlcXVhbDogJz0nLFxuICAgIGNsb3NlOiAnLycsXG4gICAgc2libGluZzogJysnXG59O1xuY29uc3QgdG9rZW5WaXNpdG9yID0ge1xuICAgIExpdGVyYWwodG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIHRva2VuLnZhbHVlO1xuICAgIH0sXG4gICAgUXVvdGUodG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIHRva2VuLnNpbmdsZSA/ICdcXCcnIDogJ1wiJztcbiAgICB9LFxuICAgIEJyYWNrZXQodG9rZW4pIHtcbiAgICAgICAgaWYgKHRva2VuLmNvbnRleHQgPT09ICdhdHRyaWJ1dGUnKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9rZW4ub3BlbiA/ICdbJyA6ICddJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0b2tlbi5jb250ZXh0ID09PSAnZXhwcmVzc2lvbicpIHtcbiAgICAgICAgICAgIHJldHVybiB0b2tlbi5vcGVuID8gJ3snIDogJ30nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRva2VuLm9wZW4gPyAnKCcgOiAnfSc7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIE9wZXJhdG9yKHRva2VuKSB7XG4gICAgICAgIHJldHVybiBvcGVyYXRvcnNbdG9rZW4ub3BlcmF0b3JdO1xuICAgIH0sXG4gICAgRmllbGQodG9rZW4sIHN0YXRlKSB7XG4gICAgICAgIGlmICh0b2tlbi5pbmRleCAhPSBudWxsKSB7XG4gICAgICAgICAgICAvLyBJdOKAmXMgYSBmaWVsZDogYnkgZGVmYXVsdCwgcmV0dXJuIFRleHRNYXRlLWNvbXBhdGlibGUgZmllbGRcbiAgICAgICAgICAgIHJldHVybiB0b2tlbi5uYW1lXG4gICAgICAgICAgICAgICAgPyBgXFwkeyR7dG9rZW4uaW5kZXh9OiR7dG9rZW4ubmFtZX19YFxuICAgICAgICAgICAgICAgIDogYFxcJHske3Rva2VuLmluZGV4fWA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodG9rZW4ubmFtZSkge1xuICAgICAgICAgICAgLy8gSXTigJlzIGEgdmFyaWFibGVcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5nZXRWYXJpYWJsZSh0b2tlbi5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfSxcbiAgICBSZXBlYXRlclBsYWNlaG9sZGVyKHRva2VuLCBzdGF0ZSkge1xuICAgICAgICAvLyBGaW5kIGNsb3Nlc3QgaW1wbGljaXQgcmVwZWF0ZXJcbiAgICAgICAgbGV0IHJlcGVhdGVyO1xuICAgICAgICBmb3IgKGxldCBpID0gc3RhdGUucmVwZWF0ZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUucmVwZWF0ZXJzW2ldLmltcGxpY2l0KSB7XG4gICAgICAgICAgICAgICAgcmVwZWF0ZXIgPSBzdGF0ZS5yZXBlYXRlcnNbaV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGUuaW5zZXJ0ZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gc3RhdGUuZ2V0VGV4dChyZXBlYXRlciAmJiByZXBlYXRlci52YWx1ZSk7XG4gICAgfSxcbiAgICBSZXBlYXRlck51bWJlcih0b2tlbiwgc3RhdGUpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gMTtcbiAgICAgICAgY29uc3QgbGFzdEl4ID0gc3RhdGUucmVwZWF0ZXJzLmxlbmd0aCAtIDE7XG4gICAgICAgIC8vIGNvbnN0IHJlcGVhdGVySXggPSBNYXRoLm1heCgwLCBzdGF0ZS5yZXBlYXRlcnMubGVuZ3RoIC0gMSAtIHRva2VuLnBhcmVudCk7XG4gICAgICAgIGNvbnN0IHJlcGVhdGVyID0gc3RhdGUucmVwZWF0ZXJzW2xhc3RJeF07XG4gICAgICAgIGlmIChyZXBlYXRlcikge1xuICAgICAgICAgICAgdmFsdWUgPSB0b2tlbi5yZXZlcnNlXG4gICAgICAgICAgICAgICAgPyB0b2tlbi5iYXNlICsgcmVwZWF0ZXIuY291bnQgLSByZXBlYXRlci52YWx1ZSAtIDFcbiAgICAgICAgICAgICAgICA6IHRva2VuLmJhc2UgKyByZXBlYXRlci52YWx1ZTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRJeCA9IE1hdGgubWF4KDAsIGxhc3RJeCAtIHRva2VuLnBhcmVudCk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudEl4ICE9PSBsYXN0SXgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50UmVwZWF0ZXIgPSBzdGF0ZS5yZXBlYXRlcnNbcGFyZW50SXhdO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSArPSByZXBlYXRlci5jb3VudCAqIHBhcmVudFJlcGVhdGVyLnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzdWx0ID0gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgd2hpbGUgKHJlc3VsdC5sZW5ndGggPCB0b2tlbi5zaXplKSB7XG4gICAgICAgICAgICByZXN1bHQgPSAnMCcgKyByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuICAgIFdoaXRlU3BhY2UodG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIHRva2VuLnZhbHVlO1xuICAgIH1cbn07XG4vKipcbiAqIENvbnZlcnRzIGdpdmVuIHZhbHVlIHRva2VuIHRvIHN0cmluZ1xuICovXG5mdW5jdGlvbiBzdHJpbmdpZnkkMSh0b2tlbiwgc3RhdGUpIHtcbiAgICBpZiAoIXRva2VuVmlzaXRvclt0b2tlbi50eXBlXSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gdG9rZW4gJHt0b2tlbi50eXBlfWApO1xuICAgIH1cbiAgICByZXR1cm4gdG9rZW5WaXNpdG9yW3Rva2VuLnR5cGVdKHRva2VuLCBzdGF0ZSk7XG59XG5cbmNvbnN0IHVybFJlZ2V4ID0gL14oKGh0dHBzPzp8ZnRwOnxmaWxlOik/XFwvXFwvfCh3d3d8ZnRwKVxcLilbXiBdKiQvO1xuY29uc3QgZW1haWxSZWdleCA9IC9eW2EtejAtOS5fJSstXStAW2EtejAtOS4tXStcXC5bYS16XXsyLDV9JC87XG4vKipcbiAqIENvbnZlcnRzIGdpdmVuIHRva2VuLWJhc2VkIGFiYnJldmlhdGlvbiBpbnRvIHNpbXBsaWZpZWQgYW5kIHVucm9sbGVkIG5vZGUtYmFzZWRcbiAqIGFiYnJldmlhdGlvblxuICovXG5mdW5jdGlvbiBjb252ZXJ0KGFiYnIsIG9wdGlvbnMgPSB7fSkge1xuICAgIGxldCB0ZXh0SW5zZXJ0ZWQgPSBmYWxzZTtcbiAgICBsZXQgY2xlYW5UZXh0O1xuICAgIGlmIChvcHRpb25zLnRleHQpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucy50ZXh0KSkge1xuICAgICAgICAgICAgY2xlYW5UZXh0ID0gb3B0aW9ucy50ZXh0LmZpbHRlcihzID0+IHMudHJpbSgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNsZWFuVGV4dCA9IG9wdGlvbnMudGV4dDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgIHR5cGU6ICdBYmJyZXZpYXRpb24nLFxuICAgICAgICBjaGlsZHJlbjogY29udmVydEdyb3VwKGFiYnIsIHtcbiAgICAgICAgICAgIGluc2VydGVkOiBmYWxzZSxcbiAgICAgICAgICAgIHJlcGVhdGVyczogW10sXG4gICAgICAgICAgICB0ZXh0OiBvcHRpb25zLnRleHQsXG4gICAgICAgICAgICBjbGVhblRleHQsXG4gICAgICAgICAgICByZXBlYXRHdWFyZDogb3B0aW9ucy5tYXhSZXBlYXQgfHwgTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLFxuICAgICAgICAgICAgZ2V0VGV4dChwb3MpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgdGV4dEluc2VydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucy50ZXh0KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocG9zICE9PSB1bmRlZmluZWQgJiYgcG9zID49IDAgJiYgcG9zIDwgY2xlYW5UZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNsZWFuVGV4dFtwb3NdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcG9zICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLnRleHRbcG9zXSA6IG9wdGlvbnMudGV4dC5qb2luKCdcXG4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gKF9hID0gb3B0aW9ucy50ZXh0KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldFZhcmlhYmxlKG5hbWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YXJWYWx1ZSA9IG9wdGlvbnMudmFyaWFibGVzICYmIG9wdGlvbnMudmFyaWFibGVzW25hbWVdO1xuICAgICAgICAgICAgICAgIHJldHVybiB2YXJWYWx1ZSAhPSBudWxsID8gdmFyVmFsdWUgOiBuYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH07XG4gICAgaWYgKG9wdGlvbnMudGV4dCAhPSBudWxsICYmICF0ZXh0SW5zZXJ0ZWQpIHtcbiAgICAgICAgLy8gVGV4dCBnaXZlbiBidXQgbm8gaW1wbGljaXRseSByZXBlYXRlZCBlbGVtZW50czogaW5zZXJ0IGl0IGludG9cbiAgICAgICAgLy8gZGVlcGVzdCBjaGlsZFxuICAgICAgICBjb25zdCBkZWVwZXN0ID0gZGVlcGVzdE5vZGUobGFzdCQxKHJlc3VsdC5jaGlsZHJlbikpO1xuICAgICAgICBpZiAoZGVlcGVzdCkge1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9IEFycmF5LmlzQXJyYXkob3B0aW9ucy50ZXh0KSA/IG9wdGlvbnMudGV4dC5qb2luKCdcXG4nKSA6IG9wdGlvbnMudGV4dDtcbiAgICAgICAgICAgIGluc2VydFRleHQoZGVlcGVzdCwgdGV4dCk7XG4gICAgICAgICAgICBpZiAoZGVlcGVzdC5uYW1lID09PSAnYScgJiYgb3B0aW9ucy5ocmVmKSB7XG4gICAgICAgICAgICAgICAgLy8gQXV0b21hdGljYWxseSB1cGRhdGUgdmFsdWUgb2YgYDxhPmAgZWxlbWVudCBpZiBpbnNlcnRpbmcgVVJMIG9yIGVtYWlsXG4gICAgICAgICAgICAgICAgaW5zZXJ0SHJlZihkZWVwZXN0LCB0ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBDb252ZXJ0cyBnaXZlbiBzdGF0ZW1lbnQgdG8gYWJicmV2aWF0aW9uIG5vZGVzXG4gKi9cbmZ1bmN0aW9uIGNvbnZlcnRTdGF0ZW1lbnQobm9kZSwgc3RhdGUpIHtcbiAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgaWYgKG5vZGUucmVwZWF0KSB7XG4gICAgICAgIC8vIE5vZGUgaXMgcmVwZWF0ZWQ6IHdlIHNob3VsZCBjcmVhdGUgY29waWVzIG9mIGdpdmVuIG5vZGVcbiAgICAgICAgLy8gYW5kIHN1cHBseSBjb250ZXh0IHRva2VuIHdpdGggYWN0dWFsIHJlcGVhdGVyIHN0YXRlXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsID0gbm9kZS5yZXBlYXQ7XG4gICAgICAgIGNvbnN0IHJlcGVhdCA9IE9iamVjdC5hc3NpZ24oe30sIG9yaWdpbmFsKTtcbiAgICAgICAgcmVwZWF0LmNvdW50ID0gcmVwZWF0LmltcGxpY2l0ICYmIEFycmF5LmlzQXJyYXkoc3RhdGUudGV4dClcbiAgICAgICAgICAgID8gc3RhdGUuY2xlYW5UZXh0Lmxlbmd0aFxuICAgICAgICAgICAgOiAocmVwZWF0LmNvdW50IHx8IDEpO1xuICAgICAgICBsZXQgaXRlbXM7XG4gICAgICAgIHN0YXRlLnJlcGVhdGVycy5wdXNoKHJlcGVhdCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVwZWF0LmNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIHJlcGVhdC52YWx1ZSA9IGk7XG4gICAgICAgICAgICBub2RlLnJlcGVhdCA9IHJlcGVhdDtcbiAgICAgICAgICAgIGl0ZW1zID0gaXNHcm91cChub2RlKVxuICAgICAgICAgICAgICAgID8gY29udmVydEdyb3VwKG5vZGUsIHN0YXRlKVxuICAgICAgICAgICAgICAgIDogY29udmVydEVsZW1lbnQobm9kZSwgc3RhdGUpO1xuICAgICAgICAgICAgaWYgKHJlcGVhdC5pbXBsaWNpdCAmJiAhc3RhdGUuaW5zZXJ0ZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBJdOKAmXMgYW4gaW1wbGljaXQgcmVwZWF0ZXIgYnV0IG5vIHJlcGVhdGVyIHBsYWNlaG9sZGVycyBmb3VuZCBpbnNpZGUsXG4gICAgICAgICAgICAgICAgLy8gd2Ugc2hvdWxkIGluc2VydCB0ZXh0IGludG8gZGVlcGVzdCBub2RlXG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gbGFzdCQxKGl0ZW1zKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWVwZXN0ID0gdGFyZ2V0ICYmIGRlZXBlc3ROb2RlKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgaWYgKGRlZXBlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0VGV4dChkZWVwZXN0LCBzdGF0ZS5nZXRUZXh0KHJlcGVhdC52YWx1ZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoaXRlbXMpO1xuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIG91dHB1dCBhdCBsZWFzdCBvbmUgcmVwZWF0ZWQgaXRlbSBldmVuIGlmIGl04oCZcyByZWFjaGVkXG4gICAgICAgICAgICAvLyByZXBlYXQgbGltaXRcbiAgICAgICAgICAgIGlmICgtLXN0YXRlLnJlcGVhdEd1YXJkIDw9IDApIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5yZXBlYXRlcnMucG9wKCk7XG4gICAgICAgIG5vZGUucmVwZWF0ID0gb3JpZ2luYWw7XG4gICAgICAgIGlmIChyZXBlYXQuaW1wbGljaXQpIHtcbiAgICAgICAgICAgIHN0YXRlLmluc2VydGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChpc0dyb3VwKG5vZGUpID8gY29udmVydEdyb3VwKG5vZGUsIHN0YXRlKSA6IGNvbnZlcnRFbGVtZW50KG5vZGUsIHN0YXRlKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBjb252ZXJ0RWxlbWVudChub2RlLCBzdGF0ZSkge1xuICAgIGxldCBjaGlsZHJlbiA9IFtdO1xuICAgIGNvbnN0IGVsZW0gPSB7XG4gICAgICAgIHR5cGU6ICdBYmJyZXZpYXRpb25Ob2RlJyxcbiAgICAgICAgbmFtZTogbm9kZS5uYW1lICYmIHN0cmluZ2lmeU5hbWUobm9kZS5uYW1lLCBzdGF0ZSksXG4gICAgICAgIHZhbHVlOiBub2RlLnZhbHVlICYmIHN0cmluZ2lmeVZhbHVlJDEobm9kZS52YWx1ZSwgc3RhdGUpLFxuICAgICAgICBhdHRyaWJ1dGVzOiB2b2lkIDAsXG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgICByZXBlYXQ6IG5vZGUucmVwZWF0ICYmIE9iamVjdC5hc3NpZ24oe30sIG5vZGUucmVwZWF0KSxcbiAgICAgICAgc2VsZkNsb3Npbmc6IG5vZGUuc2VsZkNsb3NlLFxuICAgIH07XG4gICAgbGV0IHJlc3VsdCA9IFtlbGVtXTtcbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuZWxlbWVudHMpIHtcbiAgICAgICAgY2hpbGRyZW4gPSBjaGlsZHJlbi5jb25jYXQoY29udmVydFN0YXRlbWVudChjaGlsZCwgc3RhdGUpKTtcbiAgICB9XG4gICAgaWYgKG5vZGUuYXR0cmlidXRlcykge1xuICAgICAgICBlbGVtLmF0dHJpYnV0ZXMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBhdHRyIG9mIG5vZGUuYXR0cmlidXRlcykge1xuICAgICAgICAgICAgZWxlbS5hdHRyaWJ1dGVzLnB1c2goY29udmVydEF0dHJpYnV0ZShhdHRyLCBzdGF0ZSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEluIGNhc2UgaWYgY3VycmVudCBub2RlIGlzIGEgdGV4dC1vbmx5IHNuaXBwZXQgd2l0aG91dCBmaWVsZHMsIHdlIHNob3VsZFxuICAgIC8vIHB1dCBhbGwgY2hpbGRyZW4gYXMgc2libGluZ3NcbiAgICBpZiAoIWVsZW0ubmFtZSAmJiAhZWxlbS5hdHRyaWJ1dGVzICYmIGVsZW0udmFsdWUgJiYgIWVsZW0udmFsdWUuc29tZShpc0ZpZWxkJDEpKSB7XG4gICAgICAgIC8vIFhYWCBpdOKAmXMgdW5jbGVhciB0aGF0IGBjaGlsZHJlbmAgaXMgbm90IGJvdW5kIHRvIGBlbGVtYFxuICAgICAgICAvLyBkdWUgdG8gY29uY2F0IG9wZXJhdGlvblxuICAgICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KGNoaWxkcmVuKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGVsZW0uY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGNvbnZlcnRHcm91cChub2RlLCBzdGF0ZSkge1xuICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuZWxlbWVudHMpIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChjb252ZXJ0U3RhdGVtZW50KGNoaWxkLCBzdGF0ZSkpO1xuICAgIH1cbiAgICBpZiAobm9kZS5yZXBlYXQpIHtcbiAgICAgICAgcmVzdWx0ID0gYXR0YWNoUmVwZWF0ZXIocmVzdWx0LCBub2RlLnJlcGVhdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBjb252ZXJ0QXR0cmlidXRlKG5vZGUsIHN0YXRlKSB7XG4gICAgbGV0IGltcGxpZWQgPSBmYWxzZTtcbiAgICBsZXQgaXNCb29sZWFuID0gZmFsc2U7XG4gICAgbGV0IHZhbHVlVHlwZSA9IG5vZGUuZXhwcmVzc2lvbiA/ICdleHByZXNzaW9uJyA6ICdyYXcnO1xuICAgIGxldCB2YWx1ZTtcbiAgICBjb25zdCBuYW1lID0gbm9kZS5uYW1lICYmIHN0cmluZ2lmeU5hbWUobm9kZS5uYW1lLCBzdGF0ZSk7XG4gICAgaWYgKG5hbWUgJiYgbmFtZVswXSA9PT0gJyEnKSB7XG4gICAgICAgIGltcGxpZWQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAobmFtZSAmJiBuYW1lW25hbWUubGVuZ3RoIC0gMV0gPT09ICcuJykge1xuICAgICAgICBpc0Jvb2xlYW4gPSB0cnVlO1xuICAgIH1cbiAgICBpZiAobm9kZS52YWx1ZSkge1xuICAgICAgICBjb25zdCB0b2tlbnMgPSBub2RlLnZhbHVlLnNsaWNlKCk7XG4gICAgICAgIGlmIChpc1F1b3RlJDEodG9rZW5zWzBdKSkge1xuICAgICAgICAgICAgLy8gSXTigJlzIGEgcXVvdGVkIHZhbHVlOiByZW1vdmUgcXVvdGVzIGZyb20gb3V0cHV0IGJ1dCBtYXJrIGF0dHJpYnV0ZVxuICAgICAgICAgICAgLy8gdmFsdWUgYXMgcXVvdGVkXG4gICAgICAgICAgICBjb25zdCBxdW90ZSA9IHRva2Vucy5zaGlmdCgpO1xuICAgICAgICAgICAgaWYgKHRva2Vucy5sZW5ndGggJiYgbGFzdCQxKHRva2VucykudHlwZSA9PT0gcXVvdGUudHlwZSkge1xuICAgICAgICAgICAgICAgIHRva2Vucy5wb3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlVHlwZSA9IHF1b3RlLnNpbmdsZSA/ICdzaW5nbGVRdW90ZScgOiAnZG91YmxlUXVvdGUnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzQnJhY2tldCQyKHRva2Vuc1swXSwgJ2V4cHJlc3Npb24nLCB0cnVlKSkge1xuICAgICAgICAgICAgLy8gVmFsdWUgaXMgZXhwcmVzc2lvbjogcmVtb3ZlIGJyYWNrZXRzIGJ1dCBtYXJrIHZhbHVlIHR5cGVcbiAgICAgICAgICAgIHZhbHVlVHlwZSA9ICdleHByZXNzaW9uJztcbiAgICAgICAgICAgIHRva2Vucy5zaGlmdCgpO1xuICAgICAgICAgICAgaWYgKGlzQnJhY2tldCQyKGxhc3QkMSh0b2tlbnMpLCAnZXhwcmVzc2lvbicsIGZhbHNlKSkge1xuICAgICAgICAgICAgICAgIHRva2Vucy5wb3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YWx1ZSA9IHN0cmluZ2lmeVZhbHVlJDEodG9rZW5zLCBzdGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IGlzQm9vbGVhbiB8fCBpbXBsaWVkXG4gICAgICAgICAgICA/IG5hbWUuc2xpY2UoaW1wbGllZCA/IDEgOiAwLCBpc0Jvb2xlYW4gPyAtMSA6IHZvaWQgMClcbiAgICAgICAgICAgIDogbmFtZSxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIGJvb2xlYW46IGlzQm9vbGVhbixcbiAgICAgICAgaW1wbGllZCxcbiAgICAgICAgdmFsdWVUeXBlXG4gICAgfTtcbn1cbi8qKlxuICogQ29udmVydHMgZ2l2ZW4gdG9rZW4gbGlzdCB0byBzdHJpbmdcbiAqL1xuZnVuY3Rpb24gc3RyaW5naWZ5TmFtZSh0b2tlbnMsIHN0YXRlKSB7XG4gICAgbGV0IHN0ciA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHN0ciArPSBzdHJpbmdpZnkkMSh0b2tlbnNbaV0sIHN0YXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbn1cbi8qKlxuICogQ29udmVydHMgZ2l2ZW4gdG9rZW4gbGlzdCB0byB2YWx1ZSBsaXN0XG4gKi9cbmZ1bmN0aW9uIHN0cmluZ2lmeVZhbHVlJDEodG9rZW5zLCBzdGF0ZSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGxldCBzdHIgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMCwgdG9rZW47IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgIGlmIChpc0ZpZWxkJDEodG9rZW4pKSB7XG4gICAgICAgICAgICAvLyBXZSBzaG91bGQga2VlcCBvcmlnaW5hbCBmaWVsZHMgaW4gb3V0cHV0IHNpbmNlIHNvbWUgZWRpdG9ycyBoYXMgdGhlaXJcbiAgICAgICAgICAgIC8vIG93biBzeW50YXggZm9yIGZpZWxkIG9yIGRvZXNu4oCZdCBzdXBwb3J0IGZpZWxkcyBhdCBhbGwgc28gd2Ugc2hvdWxkXG4gICAgICAgICAgICAvLyBjYXB0dXJlIGFjdHVhbCBmaWVsZCBsb2NhdGlvbiBpbiBvdXRwdXQgc3RyZWFtXG4gICAgICAgICAgICBpZiAoc3RyKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goc3RyKTtcbiAgICAgICAgICAgICAgICBzdHIgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRva2VuKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN0ciArPSBzdHJpbmdpZnkkMSh0b2tlbiwgc3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChzdHIpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goc3RyKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGlzR3JvdXAobm9kZSkge1xuICAgIHJldHVybiBub2RlLnR5cGUgPT09ICdUb2tlbkdyb3VwJztcbn1cbmZ1bmN0aW9uIGlzRmllbGQkMSh0b2tlbikge1xuICAgIHJldHVybiB0eXBlb2YgdG9rZW4gPT09ICdvYmplY3QnICYmIHRva2VuLnR5cGUgPT09ICdGaWVsZCcgJiYgdG9rZW4uaW5kZXggIT0gbnVsbDtcbn1cbmZ1bmN0aW9uIGxhc3QkMShhcnIpIHtcbiAgICByZXR1cm4gYXJyW2Fyci5sZW5ndGggLSAxXTtcbn1cbmZ1bmN0aW9uIGRlZXBlc3ROb2RlKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS5jaGlsZHJlbi5sZW5ndGggPyBkZWVwZXN0Tm9kZShsYXN0JDEobm9kZS5jaGlsZHJlbikpIDogbm9kZTtcbn1cbmZ1bmN0aW9uIGluc2VydFRleHQobm9kZSwgdGV4dCkge1xuICAgIGlmIChub2RlLnZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGxhc3RUb2tlbiA9IGxhc3QkMShub2RlLnZhbHVlKTtcbiAgICAgICAgaWYgKHR5cGVvZiBsYXN0VG9rZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBub2RlLnZhbHVlW25vZGUudmFsdWUubGVuZ3RoIC0gMV0gKz0gdGV4dDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUudmFsdWUucHVzaCh0ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbm9kZS52YWx1ZSA9IFt0ZXh0XTtcbiAgICB9XG59XG5mdW5jdGlvbiBpbnNlcnRIcmVmKG5vZGUsIHRleHQpIHtcbiAgICB2YXIgX2E7XG4gICAgbGV0IGhyZWYgPSAnJztcbiAgICBpZiAodXJsUmVnZXgudGVzdCh0ZXh0KSkge1xuICAgICAgICBocmVmID0gdGV4dDtcbiAgICAgICAgaWYgKCEvXFx3KzovLnRlc3QoaHJlZikgJiYgIWhyZWYuc3RhcnRzV2l0aCgnLy8nKSkge1xuICAgICAgICAgICAgaHJlZiA9IGBodHRwOi8vJHtocmVmfWA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZW1haWxSZWdleC50ZXN0KHRleHQpKSB7XG4gICAgICAgIGhyZWYgPSBgbWFpbHRvOiR7dGV4dH1gO1xuICAgIH1cbiAgICBjb25zdCBocmVmQXR0cmlidXRlID0gKF9hID0gbm9kZS5hdHRyaWJ1dGVzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZmluZChhdHRyID0+IGF0dHIubmFtZSA9PT0gJ2hyZWYnKTtcbiAgICBpZiAoIWhyZWZBdHRyaWJ1dGUpIHtcbiAgICAgICAgaWYgKCFub2RlLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIG5vZGUuYXR0cmlidXRlcyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUuYXR0cmlidXRlcy5wdXNoKHsgbmFtZTogJ2hyZWYnLCB2YWx1ZTogW2hyZWZdLCB2YWx1ZVR5cGU6ICdkb3VibGVRdW90ZScgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKCFocmVmQXR0cmlidXRlLnZhbHVlKSB7XG4gICAgICAgIGhyZWZBdHRyaWJ1dGUudmFsdWUgPSBbaHJlZl07XG4gICAgfVxufVxuZnVuY3Rpb24gYXR0YWNoUmVwZWF0ZXIoaXRlbXMsIHJlcGVhdGVyKSB7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgIGlmICghaXRlbS5yZXBlYXQpIHtcbiAgICAgICAgICAgIGl0ZW0ucmVwZWF0ID0gT2JqZWN0LmFzc2lnbih7fSwgcmVwZWF0ZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpdGVtcztcbn1cblxuLyoqXG4gKiBQYXJzZXMgZ2l2ZW4gYWJicmV2aWF0aW9uIGludG8gbm9kZSB0cmVlXG4gKi9cbmZ1bmN0aW9uIHBhcnNlQWJicmV2aWF0aW9uKGFiYnIsIG9wdGlvbnMpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB0b2tlbnMgPSB0eXBlb2YgYWJiciA9PT0gJ3N0cmluZycgPyB0b2tlbml6ZSQxKGFiYnIpIDogYWJicjtcbiAgICAgICAgcmV0dXJuIGNvbnZlcnQoYWJicmV2aWF0aW9uKHRva2Vucywgb3B0aW9ucyksIG9wdGlvbnMpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBTY2FubmVyRXJyb3IgJiYgdHlwZW9mIGFiYnIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBlcnIubWVzc2FnZSArPSBgXFxuJHthYmJyfVxcbiR7Jy0nLnJlcGVhdChlcnIucG9zKX1eYDtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0b2tlbml6ZShhYmJyLCBpc1ZhbHVlKSB7XG4gICAgbGV0IGJyYWNrZXRzID0gMDtcbiAgICBsZXQgdG9rZW47XG4gICAgY29uc3Qgc2Nhbm5lciA9IG5ldyBTY2FubmVyKGFiYnIpO1xuICAgIGNvbnN0IHRva2VucyA9IFtdO1xuICAgIHdoaWxlICghc2Nhbm5lci5lb2YoKSkge1xuICAgICAgICB0b2tlbiA9IGdldFRva2VuKHNjYW5uZXIsIGJyYWNrZXRzID09PSAwICYmICFpc1ZhbHVlKTtcbiAgICAgICAgaWYgKCF0b2tlbikge1xuICAgICAgICAgICAgdGhyb3cgc2Nhbm5lci5lcnJvcignVW5leHBlY3RlZCBjaGFyYWN0ZXInKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodG9rZW4udHlwZSA9PT0gJ0JyYWNrZXQnKSB7XG4gICAgICAgICAgICBpZiAoIWJyYWNrZXRzICYmIHRva2VuLm9wZW4pIHtcbiAgICAgICAgICAgICAgICBtZXJnZVRva2VucyhzY2FubmVyLCB0b2tlbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJhY2tldHMgKz0gdG9rZW4ub3BlbiA/IDEgOiAtMTtcbiAgICAgICAgICAgIGlmIChicmFja2V0cyA8IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBzY2FubmVyLmVycm9yKCdVbmV4cGVjdGVkIGJyYWNrZXQnLCB0b2tlbi5zdGFydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICAvLyBGb3JjaWJseSBjb25zdW1lIG5leHQgb3BlcmF0b3IgYWZ0ZXIgdW5pdC1sZXNzIG51bWVyaWMgdmFsdWUgb3IgY29sb3I6XG4gICAgICAgIC8vIG5leHQgZGFzaCBgLWAgbXVzdCBiZSB1c2VkIGFzIHZhbHVlIGRlbGltaXRlclxuICAgICAgICBpZiAoc2hvdWxkQ29uc3VtZURhc2hBZnRlcih0b2tlbikgJiYgKHRva2VuID0gb3BlcmF0b3Ioc2Nhbm5lcikpKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUmV0dXJucyBuZXh0IHRva2VuIGZyb20gZ2l2ZW4gc2Nhbm5lciwgaWYgcG9zc2libGVcbiAqL1xuZnVuY3Rpb24gZ2V0VG9rZW4oc2Nhbm5lciwgc2hvcnQpIHtcbiAgICByZXR1cm4gZmllbGQkMShzY2FubmVyKVxuICAgICAgICB8fCBudW1iZXJWYWx1ZShzY2FubmVyKVxuICAgICAgICB8fCBjb2xvclZhbHVlKHNjYW5uZXIpXG4gICAgICAgIHx8IHN0cmluZ1ZhbHVlKHNjYW5uZXIpXG4gICAgICAgIHx8IGJyYWNrZXQoc2Nhbm5lcilcbiAgICAgICAgfHwgb3BlcmF0b3Ioc2Nhbm5lcilcbiAgICAgICAgfHwgd2hpdGVTcGFjZShzY2FubmVyKVxuICAgICAgICB8fCBsaXRlcmFsJDEoc2Nhbm5lciwgc2hvcnQpO1xufVxuZnVuY3Rpb24gZmllbGQkMShzY2FubmVyKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBzY2FubmVyLnBvcztcbiAgICBpZiAoc2Nhbm5lci5lYXQoMzYgLyogRG9sbGFyICovKSAmJiBzY2FubmVyLmVhdCgxMjMgLyogQ3VybHlCcmFja2V0T3BlbiAqLykpIHtcbiAgICAgICAgc2Nhbm5lci5zdGFydCA9IHNjYW5uZXIucG9zO1xuICAgICAgICBsZXQgaW5kZXg7XG4gICAgICAgIGxldCBuYW1lID0gJyc7XG4gICAgICAgIGlmIChzY2FubmVyLmVhdFdoaWxlKGlzTnVtYmVyJDEpKSB7XG4gICAgICAgICAgICAvLyBJdOKAmXMgYSBmaWVsZFxuICAgICAgICAgICAgaW5kZXggPSBOdW1iZXIoc2Nhbm5lci5jdXJyZW50KCkpO1xuICAgICAgICAgICAgbmFtZSA9IHNjYW5uZXIuZWF0KDU4IC8qIENvbG9uICovKSA/IGNvbnN1bWVQbGFjZWhvbGRlciQxKHNjYW5uZXIpIDogJyc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNBbHBoYSQxKHNjYW5uZXIucGVlaygpKSkge1xuICAgICAgICAgICAgLy8gSXTigJlzIGEgdmFyaWFibGVcbiAgICAgICAgICAgIG5hbWUgPSBjb25zdW1lUGxhY2Vob2xkZXIkMShzY2FubmVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2Nhbm5lci5lYXQoMTI1IC8qIEN1cmx5QnJhY2tldENsb3NlICovKSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnRmllbGQnLFxuICAgICAgICAgICAgICAgIGluZGV4LCBuYW1lLFxuICAgICAgICAgICAgICAgIHN0YXJ0LFxuICAgICAgICAgICAgICAgIGVuZDogc2Nhbm5lci5wb3NcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgc2Nhbm5lci5lcnJvcignRXhwZWN0aW5nIH0nKTtcbiAgICB9XG4gICAgLy8gSWYgd2UgcmVhY2hlZCBoZXJlIHRoZW4gdGhlcmXigJlzIG5vIHZhbGlkIGZpZWxkIGhlcmUsIHJldmVydFxuICAgIC8vIGJhY2sgdG8gc3RhcnRpbmcgcG9zaXRpb25cbiAgICBzY2FubmVyLnBvcyA9IHN0YXJ0O1xufVxuLyoqXG4gKiBDb25zdW1lcyBhIHBsYWNlaG9sZGVyOiB2YWx1ZSByaWdodCBhZnRlciBgOmAgaW4gZmllbGQuIENvdWxkIGJlIGVtcHR5XG4gKi9cbmZ1bmN0aW9uIGNvbnN1bWVQbGFjZWhvbGRlciQxKHN0cmVhbSkge1xuICAgIGNvbnN0IHN0YWNrID0gW107XG4gICAgc3RyZWFtLnN0YXJ0ID0gc3RyZWFtLnBvcztcbiAgICB3aGlsZSAoIXN0cmVhbS5lb2YoKSkge1xuICAgICAgICBpZiAoc3RyZWFtLmVhdCgxMjMgLyogQ3VybHlCcmFja2V0T3BlbiAqLykpIHtcbiAgICAgICAgICAgIHN0YWNrLnB1c2goc3RyZWFtLnBvcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RyZWFtLmVhdCgxMjUgLyogQ3VybHlCcmFja2V0Q2xvc2UgKi8pKSB7XG4gICAgICAgICAgICBpZiAoIXN0YWNrLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHN0cmVhbS5wb3MtLTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YWNrLnBvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3RyZWFtLnBvcysrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChzdGFjay5sZW5ndGgpIHtcbiAgICAgICAgc3RyZWFtLnBvcyA9IHN0YWNrLnBvcCgpO1xuICAgICAgICB0aHJvdyBzdHJlYW0uZXJyb3IoYEV4cGVjdGluZyB9YCk7XG4gICAgfVxuICAgIHJldHVybiBzdHJlYW0uY3VycmVudCgpO1xufVxuLyoqXG4gKiBDb25zdW1lcyBsaXRlcmFsIGZyb20gZ2l2ZW4gc2Nhbm5lclxuICogQHBhcmFtIHNob3J0IFVzZSBzaG9ydCBub3RhdGlvbiBmb3IgY29uc3VtaW5nIHZhbHVlLlxuICogVGhlIGRpZmZlcmVuY2UgYmV0d2VlbiDigJxzaG9ydOKAnSBhbmQg4oCcZnVsbOKAnSBub3RhdGlvbiBpcyB0aGF0IGZpcnN0IG9uZSB1c2VzXG4gKiBhbHBoYSBjaGFyYWN0ZXJzIG9ubHkgYW5kIHVzZWQgZm9yIGV4dHJhY3Rpbmcga2V5d29yZHMgZnJvbSBhYmJyZXZpYXRpb24sXG4gKiB3aGlsZSDigJxmdWxs4oCdIG5vdGF0aW9uIGFsc28gc3VwcG9ydHMgbnVtYmVycyBhbmQgZGFzaGVzXG4gKi9cbmZ1bmN0aW9uIGxpdGVyYWwkMShzY2FubmVyLCBzaG9ydCkge1xuICAgIGNvbnN0IHN0YXJ0ID0gc2Nhbm5lci5wb3M7XG4gICAgaWYgKHNjYW5uZXIuZWF0KGlzSWRlbnRQcmVmaXgpKSB7XG4gICAgICAgIC8vIFNDU1Mgb3IgTEVTUyB2YXJpYWJsZVxuICAgICAgICAvLyBOQiBhIGJpdCBkaXJ0eSBoYWNrOiBpZiBhYmJyZXZpYXRpb24gc3RhcnRzIHdpdGggaWRlbnRpZmllciBwcmVmaXgsXG4gICAgICAgIC8vIGNvbnN1bWUgYWxwaGEgY2hhcmFjdGVycyBvbmx5IHRvIGFsbG93IGVtYmVkZGVkIHZhcmlhYmxlc1xuICAgICAgICBzY2FubmVyLmVhdFdoaWxlKHN0YXJ0ID8gaXNLZXl3b3JkIDogaXNMaXRlcmFsKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc2Nhbm5lci5lYXQoaXNBbHBoYVdvcmQpKSB7XG4gICAgICAgIHNjYW5uZXIuZWF0V2hpbGUoc2hvcnQgPyBpc0xpdGVyYWwgOiBpc0tleXdvcmQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gQWxsb3cgZG90cyBvbmx5IGF0IHRoZSBiZWdpbm5pbmcgb2YgbGl0ZXJhbFxuICAgICAgICBzY2FubmVyLmVhdCg0NiAvKiBEb3QgKi8pO1xuICAgICAgICBzY2FubmVyLmVhdFdoaWxlKGlzTGl0ZXJhbCk7XG4gICAgfVxuICAgIGlmIChzdGFydCAhPT0gc2Nhbm5lci5wb3MpIHtcbiAgICAgICAgc2Nhbm5lci5zdGFydCA9IHN0YXJ0O1xuICAgICAgICByZXR1cm4gY3JlYXRlTGl0ZXJhbChzY2FubmVyLCBzY2FubmVyLnN0YXJ0ID0gc3RhcnQpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZUxpdGVyYWwoc2Nhbm5lciwgc3RhcnQgPSBzY2FubmVyLnN0YXJ0LCBlbmQgPSBzY2FubmVyLnBvcykge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdMaXRlcmFsJyxcbiAgICAgICAgdmFsdWU6IHNjYW5uZXIuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpLFxuICAgICAgICBzdGFydCxcbiAgICAgICAgZW5kXG4gICAgfTtcbn1cbi8qKlxuICogQ29uc3VtZXMgbnVtZXJpYyBDU1MgdmFsdWUgKG51bWJlciB3aXRoIG9wdGlvbmFsIHVuaXQpIGZyb20gY3VycmVudCBzdHJlYW0sXG4gKiBpZiBwb3NzaWJsZVxuICovXG5mdW5jdGlvbiBudW1iZXJWYWx1ZShzY2FubmVyKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBzY2FubmVyLnBvcztcbiAgICBpZiAoY29uc3VtZU51bWJlcihzY2FubmVyKSkge1xuICAgICAgICBzY2FubmVyLnN0YXJ0ID0gc3RhcnQ7XG4gICAgICAgIGNvbnN0IHJhd1ZhbHVlID0gc2Nhbm5lci5jdXJyZW50KCk7XG4gICAgICAgIC8vIGVhdCB1bml0LCB3aGljaCBjYW4gYmUgYSAlIG9yIGFscGhhIHdvcmRcbiAgICAgICAgc2Nhbm5lci5zdGFydCA9IHNjYW5uZXIucG9zO1xuICAgICAgICBzY2FubmVyLmVhdCgzNyAvKiBQZXJjZW50ICovKSB8fCBzY2FubmVyLmVhdFdoaWxlKGlzQWxwaGFXb3JkKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6ICdOdW1iZXJWYWx1ZScsXG4gICAgICAgICAgICB2YWx1ZTogTnVtYmVyKHJhd1ZhbHVlKSxcbiAgICAgICAgICAgIHJhd1ZhbHVlLFxuICAgICAgICAgICAgdW5pdDogc2Nhbm5lci5jdXJyZW50KCksXG4gICAgICAgICAgICBzdGFydCxcbiAgICAgICAgICAgIGVuZDogc2Nhbm5lci5wb3NcbiAgICAgICAgfTtcbiAgICB9XG59XG4vKipcbiAqIENvbnN1bWVzIHF1b3RlZCBzdHJpbmcgdmFsdWUgZnJvbSBnaXZlbiBzY2FubmVyXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1ZhbHVlKHNjYW5uZXIpIHtcbiAgICBjb25zdCBjaCA9IHNjYW5uZXIucGVlaygpO1xuICAgIGNvbnN0IHN0YXJ0ID0gc2Nhbm5lci5wb3M7XG4gICAgbGV0IGZpbmlzaGVkID0gZmFsc2U7XG4gICAgaWYgKGlzUXVvdGUkMihjaCkpIHtcbiAgICAgICAgc2Nhbm5lci5wb3MrKztcbiAgICAgICAgd2hpbGUgKCFzY2FubmVyLmVvZigpKSB7XG4gICAgICAgICAgICAvLyBEbyBub3QgdGhyb3cgZXJyb3Igb24gbWFsZm9ybWVkIHN0cmluZ1xuICAgICAgICAgICAgaWYgKHNjYW5uZXIuZWF0KGNoKSkge1xuICAgICAgICAgICAgICAgIGZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNjYW5uZXIucG9zKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2Nhbm5lci5zdGFydCA9IHN0YXJ0O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogJ1N0cmluZ1ZhbHVlJyxcbiAgICAgICAgICAgIHZhbHVlOiBzY2FubmVyLnN1YnN0cmluZyhzdGFydCArIDEsIHNjYW5uZXIucG9zIC0gKGZpbmlzaGVkID8gMSA6IDApKSxcbiAgICAgICAgICAgIHF1b3RlOiBjaCA9PT0gMzkgLyogU2luZ2xlUXVvdGUgKi8gPyAnc2luZ2xlJyA6ICdkb3VibGUnLFxuICAgICAgICAgICAgc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IHNjYW5uZXIucG9zXG4gICAgICAgIH07XG4gICAgfVxufVxuLyoqXG4gKiBDb25zdW1lcyBhIGNvbG9yIHRva2VuIGZyb20gZ2l2ZW4gc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIGNvbG9yVmFsdWUoc2Nhbm5lcikge1xuICAgIC8vIHN1cHBvcnRlZCBjb2xvciB2YXJpYXRpb25zOlxuICAgIC8vICNhYmMgICDihpIgI2FhYmJjY2NcbiAgICAvLyAjMCAgICAg4oaSICMwMDAwMDBcbiAgICAvLyAjZmZmLjUg4oaSIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KVxuICAgIC8vICN0ICAgICDihpIgdHJhbnNwYXJlbnRcbiAgICBjb25zdCBzdGFydCA9IHNjYW5uZXIucG9zO1xuICAgIGlmIChzY2FubmVyLmVhdCgzNSAvKiBIYXNoICovKSkge1xuICAgICAgICBjb25zdCB2YWx1ZVN0YXJ0ID0gc2Nhbm5lci5wb3M7XG4gICAgICAgIGxldCBjb2xvciA9ICcnO1xuICAgICAgICBsZXQgYWxwaGEgPSAnJztcbiAgICAgICAgaWYgKHNjYW5uZXIuZWF0V2hpbGUoaXNIZXgpKSB7XG4gICAgICAgICAgICBjb2xvciA9IHNjYW5uZXIuc3Vic3RyaW5nKHZhbHVlU3RhcnQsIHNjYW5uZXIucG9zKTtcbiAgICAgICAgICAgIGFscGhhID0gY29sb3JBbHBoYShzY2FubmVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzY2FubmVyLmVhdCgxMTYgLyogVHJhbnNwYXJlbnQgKi8pKSB7XG4gICAgICAgICAgICBjb2xvciA9ICcwJztcbiAgICAgICAgICAgIGFscGhhID0gY29sb3JBbHBoYShzY2FubmVyKSB8fCAnMCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhbHBoYSA9IGNvbG9yQWxwaGEoc2Nhbm5lcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbG9yIHx8IGFscGhhIHx8IHNjYW5uZXIuZW9mKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgciwgZywgYiwgYSB9ID0gcGFyc2VDb2xvcihjb2xvciwgYWxwaGEpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnQ29sb3JWYWx1ZScsXG4gICAgICAgICAgICAgICAgciwgZywgYiwgYSxcbiAgICAgICAgICAgICAgICByYXc6IHNjYW5uZXIuc3Vic3RyaW5nKHN0YXJ0ICsgMSwgc2Nhbm5lci5wb3MpLFxuICAgICAgICAgICAgICAgIHN0YXJ0LFxuICAgICAgICAgICAgICAgIGVuZDogc2Nhbm5lci5wb3NcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBDb25zdW1lZCAjIGJ1dCBubyBhY3R1YWwgdmFsdWU6IGludmFsaWQgY29sb3IgdmFsdWUsIHRyZWF0IGl0IGFzIGxpdGVyYWxcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVMaXRlcmFsKHNjYW5uZXIsIHN0YXJ0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzY2FubmVyLnBvcyA9IHN0YXJ0O1xufVxuLyoqXG4gKiBDb25zdW1lcyBhbHBoYSB2YWx1ZSBvZiBjb2xvcjogYC4xYFxuICovXG5mdW5jdGlvbiBjb2xvckFscGhhKHNjYW5uZXIpIHtcbiAgICBjb25zdCBzdGFydCA9IHNjYW5uZXIucG9zO1xuICAgIGlmIChzY2FubmVyLmVhdCg0NiAvKiBEb3QgKi8pKSB7XG4gICAgICAgIHNjYW5uZXIuc3RhcnQgPSBzdGFydDtcbiAgICAgICAgaWYgKHNjYW5uZXIuZWF0V2hpbGUoaXNOdW1iZXIkMSkpIHtcbiAgICAgICAgICAgIHJldHVybiBzY2FubmVyLmN1cnJlbnQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJzEnO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG59XG4vKipcbiAqIENvbnN1bWVzIHdoaXRlIHNwYWNlIGNoYXJhY3RlcnMgYXMgc3RyaW5nIGxpdGVyYWwgZnJvbSBnaXZlbiBzY2FubmVyXG4gKi9cbmZ1bmN0aW9uIHdoaXRlU3BhY2Uoc2Nhbm5lcikge1xuICAgIGNvbnN0IHN0YXJ0ID0gc2Nhbm5lci5wb3M7XG4gICAgaWYgKHNjYW5uZXIuZWF0V2hpbGUoaXNTcGFjZSkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6ICdXaGl0ZVNwYWNlJyxcbiAgICAgICAgICAgIHN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBzY2FubmVyLnBvc1xuICAgICAgICB9O1xuICAgIH1cbn1cbi8qKlxuICogQ29uc3VtZXMgYnJhY2tldCBmcm9tIGdpdmVuIHNjYW5uZXJcbiAqL1xuZnVuY3Rpb24gYnJhY2tldChzY2FubmVyKSB7XG4gICAgY29uc3QgY2ggPSBzY2FubmVyLnBlZWsoKTtcbiAgICBpZiAoaXNCcmFja2V0KGNoKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogJ0JyYWNrZXQnLFxuICAgICAgICAgICAgb3BlbjogY2ggPT09IDQwIC8qIFJvdW5kQnJhY2tldE9wZW4gKi8sXG4gICAgICAgICAgICBzdGFydDogc2Nhbm5lci5wb3MrKyxcbiAgICAgICAgICAgIGVuZDogc2Nhbm5lci5wb3NcbiAgICAgICAgfTtcbiAgICB9XG59XG4vKipcbiAqIENvbnN1bWVzIG9wZXJhdG9yIGZyb20gZ2l2ZW4gc2Nhbm5lclxuICovXG5mdW5jdGlvbiBvcGVyYXRvcihzY2FubmVyKSB7XG4gICAgY29uc3Qgb3AgPSBvcGVyYXRvclR5cGUoc2Nhbm5lci5wZWVrKCkpO1xuICAgIGlmIChvcCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogJ09wZXJhdG9yJyxcbiAgICAgICAgICAgIG9wZXJhdG9yOiBvcCxcbiAgICAgICAgICAgIHN0YXJ0OiBzY2FubmVyLnBvcysrLFxuICAgICAgICAgICAgZW5kOiBzY2FubmVyLnBvc1xuICAgICAgICB9O1xuICAgIH1cbn1cbi8qKlxuICogRWF0cyBudW1iZXIgdmFsdWUgZnJvbSBnaXZlbiBzdHJlYW1cbiAqIEByZXR1cm4gUmV0dXJucyBgdHJ1ZWAgaWYgbnVtYmVyIHdhcyBjb25zdW1lZFxuICovXG5mdW5jdGlvbiBjb25zdW1lTnVtYmVyKHN0cmVhbSkge1xuICAgIGNvbnN0IHN0YXJ0ID0gc3RyZWFtLnBvcztcbiAgICBzdHJlYW0uZWF0KDQ1IC8qIERhc2ggKi8pO1xuICAgIGNvbnN0IGFmdGVyTmVnYXRpdmUgPSBzdHJlYW0ucG9zO1xuICAgIGNvbnN0IGhhc0RlY2ltYWwgPSBzdHJlYW0uZWF0V2hpbGUoaXNOdW1iZXIkMSk7XG4gICAgY29uc3QgcHJldlBvcyA9IHN0cmVhbS5wb3M7XG4gICAgaWYgKHN0cmVhbS5lYXQoNDYgLyogRG90ICovKSkge1xuICAgICAgICAvLyBJdOKAmXMgcGVyZmVjdGx5IHZhbGlkIHRvIGhhdmUgbnVtYmVycyBsaWtlIGAxLmAsIHdoaWNoIGVuZm9yY2VzXG4gICAgICAgIC8vIHZhbHVlIHRvIGZsb2F0IHVuaXQgdHlwZVxuICAgICAgICBjb25zdCBoYXNGbG9hdCA9IHN0cmVhbS5lYXRXaGlsZShpc051bWJlciQxKTtcbiAgICAgICAgaWYgKCFoYXNEZWNpbWFsICYmICFoYXNGbG9hdCkge1xuICAgICAgICAgICAgLy8gTG9uZSBkb3RcbiAgICAgICAgICAgIHN0cmVhbS5wb3MgPSBwcmV2UG9zO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEVkZ2UgY2FzZTogY29uc3VtZWQgZGFzaCBvbmx5OiBub3QgYSBudW1iZXIsIGJhaWwtb3V0XG4gICAgaWYgKHN0cmVhbS5wb3MgPT09IGFmdGVyTmVnYXRpdmUpIHtcbiAgICAgICAgc3RyZWFtLnBvcyA9IHN0YXJ0O1xuICAgIH1cbiAgICByZXR1cm4gc3RyZWFtLnBvcyAhPT0gc3RhcnQ7XG59XG5mdW5jdGlvbiBpc0lkZW50UHJlZml4KGNvZGUpIHtcbiAgICByZXR1cm4gY29kZSA9PT0gNjQgLyogQXQgKi8gfHwgY29kZSA9PT0gMzYgLyogRG9sbGFyICovO1xufVxuLyoqXG4gKiBJZiBnaXZlbiBjaGFyYWN0ZXIgaXMgYW4gb3BlcmF0b3IsIHJldHVybnMgaXTigJlzIHR5cGVcbiAqL1xuZnVuY3Rpb24gb3BlcmF0b3JUeXBlKGNoKSB7XG4gICAgcmV0dXJuIChjaCA9PT0gNDMgLyogU2libGluZyAqLyAmJiBcIitcIiAvKiBTaWJsaW5nICovKVxuICAgICAgICB8fCAoY2ggPT09IDMzIC8qIEV4Y2wgKi8gJiYgXCIhXCIgLyogSW1wb3J0YW50ICovKVxuICAgICAgICB8fCAoY2ggPT09IDQ0IC8qIENvbW1hICovICYmIFwiLFwiIC8qIEFyZ3VtZW50RGVsaW1pdGVyICovKVxuICAgICAgICB8fCAoY2ggPT09IDU4IC8qIENvbG9uICovICYmIFwiOlwiIC8qIFByb3BlcnR5RGVsaW1pdGVyICovKVxuICAgICAgICB8fCAoY2ggPT09IDQ1IC8qIERhc2ggKi8gJiYgXCItXCIgLyogVmFsdWVEZWxpbWl0ZXIgKi8pXG4gICAgICAgIHx8IHZvaWQgMDtcbn1cbi8qKlxuICogQ2hlY2sgaWYgZ2l2ZW4gY29kZSBpcyBhIGhleCB2YWx1ZSAoLzAtOWEtZi8pXG4gKi9cbmZ1bmN0aW9uIGlzSGV4KGNvZGUpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIkMShjb2RlKSB8fCBpc0FscGhhJDEoY29kZSwgNjUsIDcwKTsgLy8gQS1GXG59XG5mdW5jdGlvbiBpc0tleXdvcmQoY29kZSkge1xuICAgIHJldHVybiBpc0FscGhhTnVtZXJpY1dvcmQoY29kZSkgfHwgY29kZSA9PT0gNDUgLyogRGFzaCAqLztcbn1cbmZ1bmN0aW9uIGlzQnJhY2tldChjb2RlKSB7XG4gICAgcmV0dXJuIGNvZGUgPT09IDQwIC8qIFJvdW5kQnJhY2tldE9wZW4gKi8gfHwgY29kZSA9PT0gNDEgLyogUm91bmRCcmFja2V0Q2xvc2UgKi87XG59XG5mdW5jdGlvbiBpc0xpdGVyYWwoY29kZSkge1xuICAgIHJldHVybiBpc0FscGhhV29yZChjb2RlKSB8fCBjb2RlID09PSAzNyAvKiBQZXJjZW50ICovIHx8IGNvZGUgPT09IDQ3IC8qIFNsYXNoICovO1xufVxuLyoqXG4gKiBQYXJzZXMgZ2l2ZW4gY29sb3IgdmFsdWUgZnJvbSBhYmJyZXZpYXRpb24gaW50byBSR0JBIGZvcm1hdFxuICovXG5mdW5jdGlvbiBwYXJzZUNvbG9yKHZhbHVlLCBhbHBoYSkge1xuICAgIGxldCByID0gJzAnO1xuICAgIGxldCBnID0gJzAnO1xuICAgIGxldCBiID0gJzAnO1xuICAgIGxldCBhID0gTnVtYmVyKGFscGhhICE9IG51bGwgJiYgYWxwaGEgIT09ICcnID8gYWxwaGEgOiAxKTtcbiAgICBpZiAodmFsdWUgPT09ICd0Jykge1xuICAgICAgICBhID0gMDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHN3aXRjaCAodmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgciA9IGcgPSBiID0gdmFsdWUgKyB2YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByID0gZyA9IGIgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICByID0gdmFsdWVbMF0gKyB2YWx1ZVswXTtcbiAgICAgICAgICAgICAgICBnID0gdmFsdWVbMV0gKyB2YWx1ZVsxXTtcbiAgICAgICAgICAgICAgICBiID0gdmFsdWVbMl0gKyB2YWx1ZVsyXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdmFsdWUgKz0gdmFsdWU7XG4gICAgICAgICAgICAgICAgciA9IHZhbHVlLnNsaWNlKDAsIDIpO1xuICAgICAgICAgICAgICAgIGcgPSB2YWx1ZS5zbGljZSgyLCA0KTtcbiAgICAgICAgICAgICAgICBiID0gdmFsdWUuc2xpY2UoNCwgNik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcjogcGFyc2VJbnQociwgMTYpLFxuICAgICAgICBnOiBwYXJzZUludChnLCAxNiksXG4gICAgICAgIGI6IHBhcnNlSW50KGIsIDE2KSxcbiAgICAgICAgYVxuICAgIH07XG59XG4vKipcbiAqIENoZWNrIGlmIHNjYW5uZXIgcmVhZGVyIG11c3QgY29uc3VtZSBkYXNoIGFmdGVyIGdpdmVuIHRva2VuLlxuICogVXNlZCBpbiBjYXNlcyB3aGVyZSB1c2VyIG11c3QgZXhwbGljaXRseSBzZXBhcmF0ZSBudW1lcmljIHZhbHVlc1xuICovXG5mdW5jdGlvbiBzaG91bGRDb25zdW1lRGFzaEFmdGVyKHRva2VuKSB7XG4gICAgcmV0dXJuIHRva2VuLnR5cGUgPT09ICdDb2xvclZhbHVlJyB8fCAodG9rZW4udHlwZSA9PT0gJ051bWJlclZhbHVlJyAmJiAhdG9rZW4udW5pdCk7XG59XG4vKipcbiAqIE1lcmdlcyBsYXN0IGFkamFjZW50IHRva2VucyBpbnRvIGEgc2luZ2xlIGxpdGVyYWwuXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gb3ZlcmNvbWUgZWRnZSBjYXNlIHdoZW4gZnVuY3Rpb24gbmFtZSB3YXMgcGFyc2VkXG4gKiBhcyBhIGxpc3Qgb2Ygc2VwYXJhdGUgdG9rZW5zLiBGb3IgZXhhbXBsZSwgYSBgc2NhbGUzZCgpYCB2YWx1ZSB3aWxsIGJlXG4gKiBwYXJzZWQgYXMgbGl0ZXJhbCBhbmQgbnVtYmVyIHRva2VucyAoYHNjYWxlYCBhbmQgYDNkYCkgd2hpY2ggaXMgYSBwZXJmZWN0bHlcbiAqIHZhbGlkIGFiYnJldmlhdGlvbiBidXQgdW5kZXNpcmVkIHJlc3VsdC4gVGhpcyBmdW5jdGlvbiB3aWxsIGRldGVjdCBsYXN0IGFkamFjZW50XG4gKiBsaXRlcmFsIGFuZCBudW1iZXIgdmFsdWVzIGFuZCBjb21iaW5lIHRoZW0gaW50byBzaW5nbGUgbGl0ZXJhbFxuICovXG5mdW5jdGlvbiBtZXJnZVRva2VucyhzY2FubmVyLCB0b2tlbnMpIHtcbiAgICBsZXQgc3RhcnQgPSAwO1xuICAgIGxldCBlbmQgPSAwO1xuICAgIHdoaWxlICh0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gbGFzdCh0b2tlbnMpO1xuICAgICAgICBpZiAodG9rZW4udHlwZSA9PT0gJ0xpdGVyYWwnIHx8IHRva2VuLnR5cGUgPT09ICdOdW1iZXJWYWx1ZScpIHtcbiAgICAgICAgICAgIHN0YXJ0ID0gdG9rZW4uc3RhcnQ7XG4gICAgICAgICAgICBpZiAoIWVuZCkge1xuICAgICAgICAgICAgICAgIGVuZCA9IHRva2VuLmVuZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRva2Vucy5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChzdGFydCAhPT0gZW5kKSB7XG4gICAgICAgIHRva2Vucy5wdXNoKGNyZWF0ZUxpdGVyYWwoc2Nhbm5lciwgc3RhcnQsIGVuZCkpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGxhc3QoYXJyKSB7XG4gICAgcmV0dXJuIGFyclthcnIubGVuZ3RoIC0gMV07XG59XG5cbmZ1bmN0aW9uIHRva2VuU2Nhbm5lcih0b2tlbnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0b2tlbnMsXG4gICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICBwb3M6IDAsXG4gICAgICAgIHNpemU6IHRva2Vucy5sZW5ndGhcbiAgICB9O1xufVxuZnVuY3Rpb24gcGVlayQyKHNjYW5uZXIpIHtcbiAgICByZXR1cm4gc2Nhbm5lci50b2tlbnNbc2Nhbm5lci5wb3NdO1xufVxuZnVuY3Rpb24gcmVhZGFibGUoc2Nhbm5lcikge1xuICAgIHJldHVybiBzY2FubmVyLnBvcyA8IHNjYW5uZXIuc2l6ZTtcbn1cbmZ1bmN0aW9uIGNvbnN1bWUkMShzY2FubmVyLCB0ZXN0KSB7XG4gICAgaWYgKHRlc3QocGVlayQyKHNjYW5uZXIpKSkge1xuICAgICAgICBzY2FubmVyLnBvcysrO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gZXJyb3Ioc2Nhbm5lciwgbWVzc2FnZSwgdG9rZW4gPSBwZWVrJDIoc2Nhbm5lcikpIHtcbiAgICBpZiAodG9rZW4gJiYgdG9rZW4uc3RhcnQgIT0gbnVsbCkge1xuICAgICAgICBtZXNzYWdlICs9IGAgYXQgJHt0b2tlbi5zdGFydH1gO1xuICAgIH1cbiAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgZXJyWydwb3MnXSA9IHRva2VuICYmIHRva2VuLnN0YXJ0O1xuICAgIHJldHVybiBlcnI7XG59XG5cbmZ1bmN0aW9uIHBhcnNlcih0b2tlbnMsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHNjYW5uZXIgPSB0b2tlblNjYW5uZXIodG9rZW5zKTtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBsZXQgcHJvcGVydHk7XG4gICAgd2hpbGUgKHJlYWRhYmxlKHNjYW5uZXIpKSB7XG4gICAgICAgIGlmIChwcm9wZXJ0eSA9IGNvbnN1bWVQcm9wZXJ0eShzY2FubmVyLCBvcHRpb25zKSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocHJvcGVydHkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFjb25zdW1lJDEoc2Nhbm5lciwgaXNTaWJsaW5nT3BlcmF0b3IpKSB7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcihzY2FubmVyLCAnVW5leHBlY3RlZCB0b2tlbicpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIENvbnN1bWVzIHNpbmdsZSBDU1MgcHJvcGVydHlcbiAqL1xuZnVuY3Rpb24gY29uc3VtZVByb3BlcnR5KHNjYW5uZXIsIG9wdGlvbnMpIHtcbiAgICBsZXQgbmFtZTtcbiAgICBsZXQgaW1wb3J0YW50ID0gZmFsc2U7XG4gICAgbGV0IHZhbHVlRnJhZ21lbnQ7XG4gICAgY29uc3QgdmFsdWUgPSBbXTtcbiAgICBjb25zdCB0b2tlbiA9IHBlZWskMihzY2FubmVyKTtcbiAgICBjb25zdCB2YWx1ZU1vZGUgPSAhIW9wdGlvbnMudmFsdWU7XG4gICAgaWYgKCF2YWx1ZU1vZGUgJiYgaXNMaXRlcmFsJDEodG9rZW4pICYmICFpc0Z1bmN0aW9uU3RhcnQoc2Nhbm5lcikpIHtcbiAgICAgICAgc2Nhbm5lci5wb3MrKztcbiAgICAgICAgbmFtZSA9IHRva2VuLnZhbHVlO1xuICAgICAgICAvLyBDb25zdW1lIGFueSBmb2xsb3dpbmcgdmFsdWUgZGVsaW1pdGVyIGFmdGVyIHByb3BlcnR5IG5hbWVcbiAgICAgICAgY29uc3VtZSQxKHNjYW5uZXIsIGlzVmFsdWVEZWxpbWl0ZXIpO1xuICAgIH1cbiAgICAvLyBTa2lwIHdoaXRlc3BhY2UgcmlnaHQgYWZ0ZXIgcHJvcGVydHkgbmFtZSwgaWYgYW55XG4gICAgaWYgKHZhbHVlTW9kZSkge1xuICAgICAgICBjb25zdW1lJDEoc2Nhbm5lciwgaXNXaGl0ZVNwYWNlJDEpO1xuICAgIH1cbiAgICB3aGlsZSAocmVhZGFibGUoc2Nhbm5lcikpIHtcbiAgICAgICAgaWYgKGNvbnN1bWUkMShzY2FubmVyLCBpc0ltcG9ydGFudCkpIHtcbiAgICAgICAgICAgIGltcG9ydGFudCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWVGcmFnbWVudCA9IGNvbnN1bWVWYWx1ZShzY2FubmVyLCB2YWx1ZU1vZGUpKSB7XG4gICAgICAgICAgICB2YWx1ZS5wdXNoKHZhbHVlRnJhZ21lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFjb25zdW1lJDEoc2Nhbm5lciwgaXNGcmFnbWVudERlbGltaXRlcikpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChuYW1lIHx8IHZhbHVlLmxlbmd0aCB8fCBpbXBvcnRhbnQpIHtcbiAgICAgICAgcmV0dXJuIHsgbmFtZSwgdmFsdWUsIGltcG9ydGFudCB9O1xuICAgIH1cbn1cbi8qKlxuICogQ29uc3VtZXMgc2luZ2xlIHZhbHVlIGZyYWdtZW50LCBlLmcuIGFsbCB2YWx1ZSB0b2tlbnMgYmVmb3JlIGNvbW1hXG4gKi9cbmZ1bmN0aW9uIGNvbnN1bWVWYWx1ZShzY2FubmVyLCBpbkFyZ3VtZW50KSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgbGV0IHRva2VuO1xuICAgIGxldCBhcmdzO1xuICAgIHdoaWxlIChyZWFkYWJsZShzY2FubmVyKSkge1xuICAgICAgICB0b2tlbiA9IHBlZWskMihzY2FubmVyKTtcbiAgICAgICAgaWYgKGlzVmFsdWUodG9rZW4pKSB7XG4gICAgICAgICAgICBzY2FubmVyLnBvcysrO1xuICAgICAgICAgICAgaWYgKGlzTGl0ZXJhbCQxKHRva2VuKSAmJiAoYXJncyA9IGNvbnN1bWVBcmd1bWVudHMoc2Nhbm5lcikpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnRnVuY3Rpb25DYWxsJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdG9rZW4udmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50czogYXJnc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzVmFsdWVEZWxpbWl0ZXIodG9rZW4pIHx8IChpbkFyZ3VtZW50ICYmIGlzV2hpdGVTcGFjZSQxKHRva2VuKSkpIHtcbiAgICAgICAgICAgIHNjYW5uZXIucG9zKys7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0Lmxlbmd0aFxuICAgICAgICA/IHsgdHlwZTogJ0NTU1ZhbHVlJywgdmFsdWU6IHJlc3VsdCB9XG4gICAgICAgIDogdm9pZCAwO1xufVxuZnVuY3Rpb24gY29uc3VtZUFyZ3VtZW50cyhzY2FubmVyKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBzY2FubmVyLnBvcztcbiAgICBpZiAoY29uc3VtZSQxKHNjYW5uZXIsIGlzT3BlbkJyYWNrZXQkMSkpIHtcbiAgICAgICAgY29uc3QgYXJncyA9IFtdO1xuICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgIHdoaWxlIChyZWFkYWJsZShzY2FubmVyKSAmJiAhY29uc3VtZSQxKHNjYW5uZXIsIGlzQ2xvc2VCcmFja2V0JDEpKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPSBjb25zdW1lVmFsdWUoc2Nhbm5lciwgdHJ1ZSkpIHtcbiAgICAgICAgICAgICAgICBhcmdzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIWNvbnN1bWUkMShzY2FubmVyLCBpc1doaXRlU3BhY2UkMSkgJiYgIWNvbnN1bWUkMShzY2FubmVyLCBpc0FyZ3VtZW50RGVsaW1pdGVyKSkge1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yKHNjYW5uZXIsICdVbmV4cGVjdGVkIHRva2VuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2Nhbm5lci5zdGFydCA9IHN0YXJ0O1xuICAgICAgICByZXR1cm4gYXJncztcbiAgICB9XG59XG5mdW5jdGlvbiBpc0xpdGVyYWwkMSh0b2tlbikge1xuICAgIHJldHVybiB0b2tlbiAmJiB0b2tlbi50eXBlID09PSAnTGl0ZXJhbCc7XG59XG5mdW5jdGlvbiBpc0JyYWNrZXQkMSh0b2tlbiwgb3Blbikge1xuICAgIHJldHVybiB0b2tlbiAmJiB0b2tlbi50eXBlID09PSAnQnJhY2tldCcgJiYgKG9wZW4gPT0gbnVsbCB8fCB0b2tlbi5vcGVuID09PSBvcGVuKTtcbn1cbmZ1bmN0aW9uIGlzT3BlbkJyYWNrZXQkMSh0b2tlbikge1xuICAgIHJldHVybiBpc0JyYWNrZXQkMSh0b2tlbiwgdHJ1ZSk7XG59XG5mdW5jdGlvbiBpc0Nsb3NlQnJhY2tldCQxKHRva2VuKSB7XG4gICAgcmV0dXJuIGlzQnJhY2tldCQxKHRva2VuLCBmYWxzZSk7XG59XG5mdW5jdGlvbiBpc1doaXRlU3BhY2UkMSh0b2tlbikge1xuICAgIHJldHVybiB0b2tlbiAmJiB0b2tlbi50eXBlID09PSAnV2hpdGVTcGFjZSc7XG59XG5mdW5jdGlvbiBpc09wZXJhdG9yKHRva2VuLCBvcGVyYXRvcikge1xuICAgIHJldHVybiB0b2tlbiAmJiB0b2tlbi50eXBlID09PSAnT3BlcmF0b3InICYmICghb3BlcmF0b3IgfHwgdG9rZW4ub3BlcmF0b3IgPT09IG9wZXJhdG9yKTtcbn1cbmZ1bmN0aW9uIGlzU2libGluZ09wZXJhdG9yKHRva2VuKSB7XG4gICAgcmV0dXJuIGlzT3BlcmF0b3IodG9rZW4sIFwiK1wiIC8qIFNpYmxpbmcgKi8pO1xufVxuZnVuY3Rpb24gaXNBcmd1bWVudERlbGltaXRlcih0b2tlbikge1xuICAgIHJldHVybiBpc09wZXJhdG9yKHRva2VuLCBcIixcIiAvKiBBcmd1bWVudERlbGltaXRlciAqLyk7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50RGVsaW1pdGVyKHRva2VuKSB7XG4gICAgcmV0dXJuIGlzQXJndW1lbnREZWxpbWl0ZXIodG9rZW4pO1xufVxuZnVuY3Rpb24gaXNJbXBvcnRhbnQodG9rZW4pIHtcbiAgICByZXR1cm4gaXNPcGVyYXRvcih0b2tlbiwgXCIhXCIgLyogSW1wb3J0YW50ICovKTtcbn1cbmZ1bmN0aW9uIGlzVmFsdWUodG9rZW4pIHtcbiAgICByZXR1cm4gdG9rZW4udHlwZSA9PT0gJ1N0cmluZ1ZhbHVlJ1xuICAgICAgICB8fCB0b2tlbi50eXBlID09PSAnQ29sb3JWYWx1ZSdcbiAgICAgICAgfHwgdG9rZW4udHlwZSA9PT0gJ051bWJlclZhbHVlJ1xuICAgICAgICB8fCB0b2tlbi50eXBlID09PSAnTGl0ZXJhbCdcbiAgICAgICAgfHwgdG9rZW4udHlwZSA9PT0gJ0ZpZWxkJztcbn1cbmZ1bmN0aW9uIGlzVmFsdWVEZWxpbWl0ZXIodG9rZW4pIHtcbiAgICByZXR1cm4gaXNPcGVyYXRvcih0b2tlbiwgXCI6XCIgLyogUHJvcGVydHlEZWxpbWl0ZXIgKi8pXG4gICAgICAgIHx8IGlzT3BlcmF0b3IodG9rZW4sIFwiLVwiIC8qIFZhbHVlRGVsaW1pdGVyICovKTtcbn1cbmZ1bmN0aW9uIGlzRnVuY3Rpb25TdGFydChzY2FubmVyKSB7XG4gICAgY29uc3QgdDEgPSBzY2FubmVyLnRva2Vuc1tzY2FubmVyLnBvc107XG4gICAgY29uc3QgdDIgPSBzY2FubmVyLnRva2Vuc1tzY2FubmVyLnBvcyArIDFdO1xuICAgIHJldHVybiB0MSAmJiB0MiAmJiBpc0xpdGVyYWwkMSh0MSkgJiYgdDIudHlwZSA9PT0gJ0JyYWNrZXQnO1xufVxuXG4vKipcbiAqIFBhcnNlcyBnaXZlbiBhYmJyZXZpYXRpb24gaW50byBwcm9wZXJ0eSBzZXRcbiAqL1xuZnVuY3Rpb24gcGFyc2UkMihhYmJyLCBvcHRpb25zKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdG9rZW5zID0gdHlwZW9mIGFiYnIgPT09ICdzdHJpbmcnID8gdG9rZW5pemUoYWJiciwgb3B0aW9ucyAmJiBvcHRpb25zLnZhbHVlKSA6IGFiYnI7XG4gICAgICAgIHJldHVybiBwYXJzZXIodG9rZW5zLCBvcHRpb25zKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgU2Nhbm5lckVycm9yICYmIHR5cGVvZiBhYmJyID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgZXJyLm1lc3NhZ2UgKz0gYFxcbiR7YWJicn1cXG4keyctJy5yZXBlYXQoZXJyLnBvcyl9XmA7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbn1cblxuLyoqXG4gKiBNZXJnZXMgYXR0cmlidXRlcyBpbiBjdXJyZW50IG5vZGU6IGRlLWR1cGxpY2F0ZXMgYXR0cmlidXRlcyB3aXRoIHRoZSBzYW1lIG5hbWVcbiAqIGFuZCBtZXJnZXMgY2xhc3MgbmFtZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2VBdHRyaWJ1dGVzKG5vZGUsIGNvbmZpZykge1xuICAgIGlmICghbm9kZS5hdHRyaWJ1dGVzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgYXR0cmlidXRlcyA9IFtdO1xuICAgIGNvbnN0IGxvb2t1cCA9IHt9O1xuICAgIGZvciAoY29uc3QgYXR0ciBvZiBub2RlLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgaWYgKGF0dHIubmFtZSkge1xuICAgICAgICAgICAgY29uc3QgYXR0ck5hbWUgPSBhdHRyLm5hbWU7XG4gICAgICAgICAgICBpZiAoYXR0ck5hbWUgaW4gbG9va3VwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJldiA9IGxvb2t1cFthdHRyTmFtZV07XG4gICAgICAgICAgICAgICAgaWYgKGF0dHJOYW1lID09PSAnY2xhc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXYudmFsdWUgPSBtZXJnZVZhbHVlKHByZXYudmFsdWUsIGF0dHIudmFsdWUsICcgJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtZXJnZURlY2xhcmF0aW9ucyhwcmV2LCBhdHRyLCBjb25maWcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBuZXcgYXR0cmlidXRlIGluc3RhbmNlIHNvIHdlIGNhbiBzYWZlbHkgbW9kaWZ5IGl0IGxhdGVyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5wdXNoKGxvb2t1cFthdHRyTmFtZV0gPSBPYmplY3QuYXNzaWduKHt9LCBhdHRyKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzLnB1c2goYXR0cik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbm9kZS5hdHRyaWJ1dGVzID0gYXR0cmlidXRlcztcbn1cbi8qKlxuICogTWVyZ2VzIHR3byB0b2tlbiBsaXN0cyBpbnRvIHNpbmdsZSBsaXN0LiBBZGphY2VudCBzdHJpbmdzIGFyZSBtZXJnZWQgdG9nZXRoZXJcbiAqL1xuZnVuY3Rpb24gbWVyZ2VWYWx1ZShwcmV2LCBuZXh0LCBnbHVlKSB7XG4gICAgaWYgKHByZXYgJiYgbmV4dCkge1xuICAgICAgICBpZiAocHJldi5sZW5ndGggJiYgZ2x1ZSkge1xuICAgICAgICAgICAgYXBwZW5kKHByZXYsIGdsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgdCBvZiBuZXh0KSB7XG4gICAgICAgICAgICBhcHBlbmQocHJldiwgdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IHByZXYgfHwgbmV4dDtcbiAgICByZXR1cm4gcmVzdWx0ICYmIHJlc3VsdC5zbGljZSgpO1xufVxuLyoqXG4gKiBNZXJnZXMgZGF0YSBmcm9tIGBzcmNgIGF0dHJpYnV0ZSBpbnRvIGBkZXN0YCBhbmQgcmV0dXJucyBpdFxuICovXG5mdW5jdGlvbiBtZXJnZURlY2xhcmF0aW9ucyhkZXN0LCBzcmMsIGNvbmZpZykge1xuICAgIGRlc3QubmFtZSA9IHNyYy5uYW1lO1xuICAgIGlmICghY29uZmlnLm9wdGlvbnNbJ291dHB1dC5yZXZlcnNlQXR0cmlidXRlcyddKSB7XG4gICAgICAgIGRlc3QudmFsdWUgPSBzcmMudmFsdWU7XG4gICAgfVxuICAgIC8vIEtlZXAgaGlnaC1wcmlvcml0eSBwcm9wZXJ0aWVzXG4gICAgaWYgKCFkZXN0LmltcGxpZWQpIHtcbiAgICAgICAgZGVzdC5pbXBsaWVkID0gc3JjLmltcGxpZWQ7XG4gICAgfVxuICAgIGlmICghZGVzdC5ib29sZWFuKSB7XG4gICAgICAgIGRlc3QuYm9vbGVhbiA9IHNyYy5ib29sZWFuO1xuICAgIH1cbiAgICBpZiAoZGVzdC52YWx1ZVR5cGUgIT09ICdleHByZXNzaW9uJykge1xuICAgICAgICBkZXN0LnZhbHVlVHlwZSA9IHNyYy52YWx1ZVR5cGU7XG4gICAgfVxuICAgIHJldHVybiBkZXN0O1xufVxuZnVuY3Rpb24gYXBwZW5kKHRva2VucywgdmFsdWUpIHtcbiAgICBjb25zdCBsYXN0SXggPSB0b2tlbnMubGVuZ3RoIC0gMTtcbiAgICBpZiAodHlwZW9mIHRva2Vuc1tsYXN0SXhdID09PSAnc3RyaW5nJyAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRva2Vuc1tsYXN0SXhdICs9IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdG9rZW5zLnB1c2godmFsdWUpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBXYWxrcyBvdmVyIGVhY2ggY2hpbGQgbm9kZSBvZiBnaXZlbiBtYXJrdXAgYWJicmV2aWF0aW9uIEFTVCBub2RlIChub3QgaW5jbHVkaW5nXG4gKiBnaXZlbiBvbmUpIGFuZCBpbnZva2VzIGBmbmAgb24gZWFjaCBub2RlLlxuICogVGhlIGBmbmAgY2FsbGJhY2sgYWNjZXB0cyBjb250ZXh0IG5vZGUsIGxpc3Qgb2YgYW5jZXN0b3Igbm9kZXMgYW5kIG9wdGlvbmFsXG4gKiBzdGF0ZSBvYmplY3RcbiAqL1xuZnVuY3Rpb24gd2Fsayhub2RlLCBmbiwgc3RhdGUpIHtcbiAgICBjb25zdCBhbmNlc3RvcnMgPSBbbm9kZV07XG4gICAgY29uc3QgY2FsbGJhY2sgPSAoY3R4KSA9PiB7XG4gICAgICAgIGZuKGN0eCwgYW5jZXN0b3JzLCBzdGF0ZSk7XG4gICAgICAgIGFuY2VzdG9ycy5wdXNoKGN0eCk7XG4gICAgICAgIGN0eC5jaGlsZHJlbi5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgICAgICAgYW5jZXN0b3JzLnBvcCgpO1xuICAgIH07XG4gICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNhbGxiYWNrKTtcbn1cbi8qKlxuICogRmluZHMgbm9kZSB3aGljaCBpcyB0aGUgZGVlcGVzdCBmb3IgaW4gY3VycmVudCBub2RlIG9yIG5vZGUgaXRzZWxmLlxuICovXG5mdW5jdGlvbiBmaW5kRGVlcGVzdChub2RlKSB7XG4gICAgbGV0IHBhcmVudDtcbiAgICB3aGlsZSAobm9kZS5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgcGFyZW50ID0gbm9kZTtcbiAgICAgICAgbm9kZSA9IG5vZGUuY2hpbGRyZW5bbm9kZS5jaGlsZHJlbi5sZW5ndGggLSAxXTtcbiAgICB9XG4gICAgcmV0dXJuIHsgcGFyZW50LCBub2RlIH07XG59XG5mdW5jdGlvbiBpc05vZGUobm9kZSkge1xuICAgIHJldHVybiBub2RlLnR5cGUgPT09ICdBYmJyZXZpYXRpb25Ob2RlJztcbn1cblxuLyoqXG4gKiBGaW5kcyBtYXRjaGluZyBzbmlwcGV0IGZyb20gYHJlZ2lzdHJ5YCBhbmQgcmVzb2x2ZXMgaXQgaW50byBhIHBhcnNlZCBhYmJyZXZpYXRpb24uXG4gKiBSZXNvbHZlZCBub2RlIGlzIHRoZW4gdXBkYXRlZCBvciByZXBsYWNlZCB3aXRoIG1hdGNoZWQgYWJicmV2aWF0aW9uIHRyZWUuXG4gKlxuICogQSBIVE1MIHJlZ2lzdHJ5IGJhc2ljYWxseSBjb250YWlucyBhbGlhc2VzIHRvIGFub3RoZXIgRW1tZXQgYWJicmV2aWF0aW9ucyxcbiAqIGUuZy4gYSBwcmVkZWZpbmVkIHNldCBvZiBuYW1lLCBhdHRyaWJ1dGVzIGFuZCBzbyBvbiwgcG9zc2libHkgYSBjb21wbGV4XG4gKiBhYmJyZXZpYXRpb24gd2l0aCBtdWx0aXBsZSBlbGVtZW50cy4gU28gd2UgaGF2ZSB0byBnZXQgc25pcHBldCwgcGFyc2UgaXRcbiAqIGFuZCByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICovXG5mdW5jdGlvbiByZXNvbHZlU25pcHBldHMoYWJiciwgY29uZmlnKSB7XG4gICAgY29uc3Qgc3RhY2sgPSBbXTtcbiAgICBjb25zdCByZXZlcnNlZCA9IGNvbmZpZy5vcHRpb25zWydvdXRwdXQucmV2ZXJzZUF0dHJpYnV0ZXMnXTtcbiAgICBjb25zdCByZXNvbHZlID0gKGNoaWxkKSA9PiB7XG4gICAgICAgIGNvbnN0IHNuaXBwZXQgPSBjaGlsZC5uYW1lICYmIGNvbmZpZy5zbmlwcGV0c1tjaGlsZC5uYW1lXTtcbiAgICAgICAgLy8gQSBzbmlwcGV0IGluIHN0YWNrIG1lYW5zIGNpcmN1bGFyIHJlZmVyZW5jZS5cbiAgICAgICAgLy8gSXQgY2FuIGJlIGVpdGhlciBhIHVzZXIgZXJyb3Igb3IgYSBwZXJmZWN0bHkgdmFsaWQgc25pcHBldCBsaWtlXG4gICAgICAgIC8vIFwiaW1nXCI6IFwiaW1nW3NyYyBhbHRdL1wiLCBlLmcuIGFuIGVsZW1lbnQgd2l0aCBwcmVkZWZpbmVkIHNoYXBlLlxuICAgICAgICAvLyBJbiBhbnkgY2FzZSwgc2ltcGx5IHN0b3AgcGFyc2luZyBhbmQga2VlcCBlbGVtZW50IGFzIGlzXG4gICAgICAgIGlmICghc25pcHBldCB8fCBzdGFjay5pbmNsdWRlcyhzbmlwcGV0KSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc25pcHBldEFiYnIgPSBwYXJzZUFiYnJldmlhdGlvbihzbmlwcGV0LCBjb25maWcpO1xuICAgICAgICBzdGFjay5wdXNoKHNuaXBwZXQpO1xuICAgICAgICB3YWxrUmVzb2x2ZShzbmlwcGV0QWJiciwgcmVzb2x2ZSk7XG4gICAgICAgIHN0YWNrLnBvcCgpO1xuICAgICAgICAvLyBBZGQgYXR0cmlidXRlcyBmcm9tIGN1cnJlbnQgbm9kZSBpbnRvIGV2ZXJ5IHRvcC1sZXZlbCBub2RlIG9mIHBhcnNlZCBhYmJyZXZpYXRpb25cbiAgICAgICAgZm9yIChjb25zdCB0b3BOb2RlIG9mIHNuaXBwZXRBYmJyLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQuYXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZyb20gPSB0b3BOb2RlLmF0dHJpYnV0ZXMgfHwgW107XG4gICAgICAgICAgICAgICAgY29uc3QgdG8gPSBjaGlsZC5hdHRyaWJ1dGVzIHx8IFtdO1xuICAgICAgICAgICAgICAgIHRvcE5vZGUuYXR0cmlidXRlcyA9IHJldmVyc2VkID8gdG8uY29uY2F0KGZyb20pIDogZnJvbS5jb25jYXQodG8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWVyZ2VOb2RlcyhjaGlsZCwgdG9wTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNuaXBwZXRBYmJyO1xuICAgIH07XG4gICAgd2Fsa1Jlc29sdmUoYWJiciwgcmVzb2x2ZSk7XG4gICAgcmV0dXJuIGFiYnI7XG59XG5mdW5jdGlvbiB3YWxrUmVzb2x2ZShub2RlLCByZXNvbHZlLCBjb25maWcpIHtcbiAgICBsZXQgY2hpbGRyZW4gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgY29uc3QgcmVzb2x2ZWQgPSByZXNvbHZlKGNoaWxkKTtcbiAgICAgICAgaWYgKHJlc29sdmVkKSB7XG4gICAgICAgICAgICBjaGlsZHJlbiA9IGNoaWxkcmVuLmNvbmNhdChyZXNvbHZlZC5jaGlsZHJlbik7XG4gICAgICAgICAgICBjb25zdCBkZWVwZXN0ID0gZmluZERlZXBlc3QocmVzb2x2ZWQpO1xuICAgICAgICAgICAgaWYgKGlzTm9kZShkZWVwZXN0Lm5vZGUpKSB7XG4gICAgICAgICAgICAgICAgZGVlcGVzdC5ub2RlLmNoaWxkcmVuID0gZGVlcGVzdC5ub2RlLmNoaWxkcmVuLmNvbmNhdCh3YWxrUmVzb2x2ZShjaGlsZCwgcmVzb2x2ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICAgICAgICBjaGlsZC5jaGlsZHJlbiA9IHdhbGtSZXNvbHZlKGNoaWxkLCByZXNvbHZlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm9kZS5jaGlsZHJlbiA9IGNoaWxkcmVuO1xufVxuLyoqXG4gKiBBZGRzIGRhdGEgZnJvbSBmaXJzdCBub2RlIGludG8gc2Vjb25kIG5vZGVcbiAqL1xuZnVuY3Rpb24gbWVyZ2VOb2Rlcyhmcm9tLCB0bykge1xuICAgIGlmIChmcm9tLnNlbGZDbG9zaW5nKSB7XG4gICAgICAgIHRvLnNlbGZDbG9zaW5nID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGZyb20udmFsdWUgIT0gbnVsbCkge1xuICAgICAgICB0by52YWx1ZSA9IGZyb20udmFsdWU7XG4gICAgfVxuICAgIGlmIChmcm9tLnJlcGVhdCkge1xuICAgICAgICB0by5yZXBlYXQgPSBmcm9tLnJlcGVhdDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU91dHB1dFN0cmVhbShvcHRpb25zLCBsZXZlbCA9IDApIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBvcHRpb25zLFxuICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgIGxldmVsLFxuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIGxpbmU6IDAsXG4gICAgICAgIGNvbHVtbjogMFxuICAgIH07XG59XG4vKipcbiAqIFB1c2hlcyBwbGFpbiBzdHJpbmcgaW50byBvdXRwdXQgc3RyZWFtIHdpdGhvdXQgbmV3bGluZSBwcm9jZXNzaW5nXG4gKi9cbmZ1bmN0aW9uIHB1c2goc3RyZWFtLCB0ZXh0KSB7XG4gICAgY29uc3QgcHJvY2Vzc1RleHQgPSBzdHJlYW0ub3B0aW9uc1snb3V0cHV0LnRleHQnXTtcbiAgICBfcHVzaChzdHJlYW0sIHByb2Nlc3NUZXh0KHRleHQsIHN0cmVhbS5vZmZzZXQsIHN0cmVhbS5saW5lLCBzdHJlYW0uY29sdW1uKSk7XG59XG4vKipcbiAqIFB1c2hlcyBnaXZlbiBzdHJpbmcgd2l0aCBwb3NzaWJsZSBuZXdsaW5lIGZvcm1hdHRpbmcgaW50byBvdXRwdXRcbiAqL1xuZnVuY3Rpb24gcHVzaFN0cmluZyhzdHJlYW0sIHZhbHVlKSB7XG4gICAgLy8gSWYgZ2l2ZW4gdmFsdWUgY29udGFpbnMgbmV3bGluZXMsIHdlIHNob3VsZCBwdXNoIGNvbnRlbnQgbGluZS1ieS1saW5lIGFuZFxuICAgIC8vIHVzZSBgcHVzaE5ld2xpbmUoKWAgdG8gbWFpbnRhaW4gcHJvcGVyIGxpbmUvY29sdW1uIHN0YXRlXG4gICAgY29uc3QgbGluZXMgPSBzcGxpdEJ5TGluZXModmFsdWUpO1xuICAgIGZvciAobGV0IGkgPSAwLCBpbCA9IGxpbmVzLmxlbmd0aCAtIDE7IGkgPD0gaWw7IGkrKykge1xuICAgICAgICBwdXNoKHN0cmVhbSwgbGluZXNbaV0pO1xuICAgICAgICBpZiAoaSAhPT0gaWwpIHtcbiAgICAgICAgICAgIHB1c2hOZXdsaW5lKHN0cmVhbSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vKipcbiAqIFB1c2hlcyBuZXcgbGluZSBpbnRvIGdpdmVuIG91dHB1dCBzdHJlYW1cbiAqL1xuZnVuY3Rpb24gcHVzaE5ld2xpbmUoc3RyZWFtLCBpbmRlbnQpIHtcbiAgICBjb25zdCBiYXNlSW5kZW50ID0gc3RyZWFtLm9wdGlvbnNbJ291dHB1dC5iYXNlSW5kZW50J107XG4gICAgY29uc3QgbmV3bGluZSA9IHN0cmVhbS5vcHRpb25zWydvdXRwdXQubmV3bGluZSddO1xuICAgIHB1c2goc3RyZWFtLCBuZXdsaW5lICsgYmFzZUluZGVudCk7XG4gICAgc3RyZWFtLmxpbmUrKztcbiAgICBzdHJlYW0uY29sdW1uID0gYmFzZUluZGVudC5sZW5ndGg7XG4gICAgaWYgKGluZGVudCkge1xuICAgICAgICBwdXNoSW5kZW50KHN0cmVhbSwgaW5kZW50ID09PSB0cnVlID8gc3RyZWFtLmxldmVsIDogaW5kZW50KTtcbiAgICB9XG59XG4vKipcbiAqIEFkZHMgaW5kZW50YXRpb24gb2YgYHNpemVgIHRvIGN1cnJlbnQgb3V0cHV0IHN0cmVhbVxuICovXG5mdW5jdGlvbiBwdXNoSW5kZW50KHN0cmVhbSwgc2l6ZSA9IHN0cmVhbS5sZXZlbCkge1xuICAgIGNvbnN0IGluZGVudCA9IHN0cmVhbS5vcHRpb25zWydvdXRwdXQuaW5kZW50J107XG4gICAgcHVzaChzdHJlYW0sIGluZGVudC5yZXBlYXQoTWF0aC5tYXgoc2l6ZSwgMCkpKTtcbn1cbi8qKlxuICogUHVzaGVzIGZpZWxkL3RhYnN0b3AgaW50byBvdXRwdXQgc3RyZWFtXG4gKi9cbmZ1bmN0aW9uIHB1c2hGaWVsZChzdHJlYW0sIGluZGV4LCBwbGFjZWhvbGRlcikge1xuICAgIGNvbnN0IGZpZWxkID0gc3RyZWFtLm9wdGlvbnNbJ291dHB1dC5maWVsZCddO1xuICAgIC8vIE5COiB1c2UgYF9wdXNoYCBpbnN0ZWFkIG9mIGBwdXNoYCB0byBza2lwIHRleHQgcHJvY2Vzc2luZ1xuICAgIF9wdXNoKHN0cmVhbSwgZmllbGQoaW5kZXgsIHBsYWNlaG9sZGVyLCBzdHJlYW0ub2Zmc2V0LCBzdHJlYW0ubGluZSwgc3RyZWFtLmNvbHVtbikpO1xufVxuLyoqXG4gKiBSZXR1cm5zIGdpdmVuIHRhZyBuYW1lIGZvcm1hdHRlZCBhY2NvcmRpbmcgdG8gZ2l2ZW4gY29uZmlnXG4gKi9cbmZ1bmN0aW9uIHRhZ05hbWUobmFtZSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHN0ckNhc2UobmFtZSwgY29uZmlnLm9wdGlvbnNbJ291dHB1dC50YWdDYXNlJ10pO1xufVxuLyoqXG4gKiBSZXR1cm5zIGdpdmVuIGF0dHJpYnV0ZSBuYW1lIGZvcm1hdHRlZCBhY2NvcmRpbmcgdG8gZ2l2ZW4gY29uZmlnXG4gKi9cbmZ1bmN0aW9uIGF0dHJOYW1lKG5hbWUsIGNvbmZpZykge1xuICAgIHJldHVybiBzdHJDYXNlKG5hbWUsIGNvbmZpZy5vcHRpb25zWydvdXRwdXQuYXR0cmlidXRlQ2FzZSddKTtcbn1cbi8qKlxuICogUmV0dXJucyBjaGFyYWN0ZXIgZm9yIHF1b3RpbmcgdmFsdWUgb2YgZ2l2ZW4gYXR0cmlidXRlXG4gKi9cbmZ1bmN0aW9uIGF0dHJRdW90ZShhdHRyLCBjb25maWcsIGlzT3Blbikge1xuICAgIGlmIChhdHRyLnZhbHVlVHlwZSA9PT0gJ2V4cHJlc3Npb24nKSB7XG4gICAgICAgIHJldHVybiBpc09wZW4gPyAneycgOiAnfSc7XG4gICAgfVxuICAgIHJldHVybiBjb25maWcub3B0aW9uc1snb3V0cHV0LmF0dHJpYnV0ZVF1b3RlcyddID09PSAnc2luZ2xlJyA/ICdcXCcnIDogJ1wiJztcbn1cbi8qKlxuICogQ2hlY2sgaWYgZ2l2ZW4gYXR0cmlidXRlIGlzIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gaXNCb29sZWFuQXR0cmlidXRlKGF0dHIsIGNvbmZpZykge1xuICAgIHJldHVybiBhdHRyLmJvb2xlYW5cbiAgICAgICAgfHwgY29uZmlnLm9wdGlvbnNbJ291dHB1dC5ib29sZWFuQXR0cmlidXRlcyddLmluY2x1ZGVzKChhdHRyLm5hbWUgfHwgJycpLnRvTG93ZXJDYXNlKCkpO1xufVxuLyoqXG4gKiBSZXR1cm5zIGEgdG9rZW4gZm9yIHNlbGYtY2xvc2luZyB0YWcsIGRlcGVuZGluZyBvbiBjdXJyZW50IG9wdGlvbnNcbiAqL1xuZnVuY3Rpb24gc2VsZkNsb3NlKGNvbmZpZykge1xuICAgIHN3aXRjaCAoY29uZmlnLm9wdGlvbnNbJ291dHB1dC5zZWxmQ2xvc2luZ1N0eWxlJ10pIHtcbiAgICAgICAgY2FzZSAneGh0bWwnOiByZXR1cm4gJyAvJztcbiAgICAgICAgY2FzZSAneG1sJzogcmV0dXJuICcvJztcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuICcnO1xuICAgIH1cbn1cbi8qKlxuICogQ2hlY2sgaWYgZ2l2ZW4gdGFnIG5hbWUgYmVsb25ncyB0byBpbmxpbmUtbGV2ZWwgZWxlbWVudFxuICogQHBhcmFtIG5vZGUgUGFyc2VkIG5vZGUgb3IgdGFnIG5hbWVcbiAqL1xuZnVuY3Rpb24gaXNJbmxpbmUobm9kZSwgY29uZmlnKSB7XG4gICAgaWYgKHR5cGVvZiBub2RlID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gY29uZmlnLm9wdGlvbnMuaW5saW5lRWxlbWVudHMuaW5jbHVkZXMobm9kZS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG4gICAgLy8gaW5saW5lIG5vZGUgaXMgYSBub2RlIGVpdGhlciB3aXRoIGlubGluZS1sZXZlbCBuYW1lIG9yIHRleHQtb25seSBub2RlXG4gICAgcmV0dXJuIG5vZGUubmFtZSA/IGlzSW5saW5lKG5vZGUubmFtZSwgY29uZmlnKSA6IEJvb2xlYW4obm9kZS52YWx1ZSAmJiAhbm9kZS5hdHRyaWJ1dGVzKTtcbn1cbi8qKlxuICogU3BsaXRzIGdpdmVuIHRleHQgYnkgbGluZXNcbiAqL1xuZnVuY3Rpb24gc3BsaXRCeUxpbmVzKHRleHQpIHtcbiAgICByZXR1cm4gdGV4dC5zcGxpdCgvXFxyXFxufFxccnxcXG4vZyk7XG59XG4vKipcbiAqIFB1c2hlcyByYXcgc3RyaW5nIGludG8gb3V0cHV0IHN0cmVhbSB3aXRob3V0IGFueSBwcm9jZXNzaW5nXG4gKi9cbmZ1bmN0aW9uIF9wdXNoKHN0cmVhbSwgdGV4dCkge1xuICAgIHN0cmVhbS52YWx1ZSArPSB0ZXh0O1xuICAgIHN0cmVhbS5vZmZzZXQgKz0gdGV4dC5sZW5ndGg7XG4gICAgc3RyZWFtLmNvbHVtbiArPSB0ZXh0Lmxlbmd0aDtcbn1cbmZ1bmN0aW9uIHN0ckNhc2Uoc3RyLCB0eXBlKSB7XG4gICAgaWYgKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHR5cGUgPT09ICd1cHBlcicgPyBzdHIudG9VcHBlckNhc2UoKSA6IHN0ci50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xufVxuXG5jb25zdCBlbGVtZW50TWFwID0ge1xuICAgIHA6ICdzcGFuJyxcbiAgICB1bDogJ2xpJyxcbiAgICBvbDogJ2xpJyxcbiAgICB0YWJsZTogJ3RyJyxcbiAgICB0cjogJ3RkJyxcbiAgICB0Ym9keTogJ3RyJyxcbiAgICB0aGVhZDogJ3RyJyxcbiAgICB0Zm9vdDogJ3RyJyxcbiAgICBjb2xncm91cDogJ2NvbCcsXG4gICAgc2VsZWN0OiAnb3B0aW9uJyxcbiAgICBvcHRncm91cDogJ29wdGlvbicsXG4gICAgYXVkaW86ICdzb3VyY2UnLFxuICAgIHZpZGVvOiAnc291cmNlJyxcbiAgICBvYmplY3Q6ICdwYXJhbScsXG4gICAgbWFwOiAnYXJlYSdcbn07XG5mdW5jdGlvbiBpbXBsaWNpdFRhZyhub2RlLCBhbmNlc3RvcnMsIGNvbmZpZykge1xuICAgIGlmICghbm9kZS5uYW1lICYmIG5vZGUuYXR0cmlidXRlcykge1xuICAgICAgICByZXNvbHZlSW1wbGljaXRUYWcobm9kZSwgYW5jZXN0b3JzLCBjb25maWcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHJlc29sdmVJbXBsaWNpdFRhZyhub2RlLCBhbmNlc3RvcnMsIGNvbmZpZykge1xuICAgIGNvbnN0IHBhcmVudCA9IGdldFBhcmVudEVsZW1lbnQoYW5jZXN0b3JzKTtcbiAgICBjb25zdCBjb250ZXh0TmFtZSA9IGNvbmZpZy5jb250ZXh0ID8gY29uZmlnLmNvbnRleHQubmFtZSA6ICcnO1xuICAgIGNvbnN0IHBhcmVudE5hbWUgPSBsb3dlcmNhc2UocGFyZW50ID8gcGFyZW50Lm5hbWUgOiBjb250ZXh0TmFtZSk7XG4gICAgbm9kZS5uYW1lID0gZWxlbWVudE1hcFtwYXJlbnROYW1lXVxuICAgICAgICB8fCAoaXNJbmxpbmUocGFyZW50TmFtZSwgY29uZmlnKSA/ICdzcGFuJyA6ICdkaXYnKTtcbn1cbmZ1bmN0aW9uIGxvd2VyY2FzZShzdHIpIHtcbiAgICByZXR1cm4gKHN0ciB8fCAnJykudG9Mb3dlckNhc2UoKTtcbn1cbi8qKlxuICogUmV0dXJucyBjbG9zZXN0IGVsZW1lbnQgbm9kZSBmcm9tIGdpdmVuIGFuY2VzdG9ycyBsaXN0XG4gKi9cbmZ1bmN0aW9uIGdldFBhcmVudEVsZW1lbnQoYW5jZXN0b3JzKSB7XG4gICAgZm9yIChsZXQgaSA9IGFuY2VzdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBjb25zdCBlbGVtID0gYW5jZXN0b3JzW2ldO1xuICAgICAgICBpZiAoaXNOb2RlKGVsZW0pKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxudmFyIGxhdGluID0ge1xuXHRcImNvbW1vblwiOiBbXCJsb3JlbVwiLCBcImlwc3VtXCIsIFwiZG9sb3JcIiwgXCJzaXRcIiwgXCJhbWV0XCIsIFwiY29uc2VjdGV0dXJcIiwgXCJhZGlwaXNpY2luZ1wiLCBcImVsaXRcIl0sXG5cdFwid29yZHNcIjogW1wiZXhlcmNpdGF0aW9uZW1cIiwgXCJwZXJmZXJlbmRpc1wiLCBcInBlcnNwaWNpYXRpc1wiLCBcImxhYm9ydW1cIiwgXCJldmVuaWV0XCIsXG5cdFx0XCJzdW50XCIsIFwiaXVyZVwiLCBcIm5hbVwiLCBcIm5vYmlzXCIsIFwiZXVtXCIsIFwiY3VtXCIsIFwib2ZmaWNpaXNcIiwgXCJleGNlcHR1cmlcIixcblx0XHRcIm9kaW9cIiwgXCJjb25zZWN0ZXR1clwiLCBcInF1YXNpXCIsIFwiYXV0XCIsIFwicXVpc3F1YW1cIiwgXCJ2ZWxcIiwgXCJlbGlnZW5kaVwiLFxuXHRcdFwiaXRhcXVlXCIsIFwibm9uXCIsIFwib2RpdFwiLCBcInRlbXBvcmVcIiwgXCJxdWFlcmF0XCIsIFwiZGlnbmlzc2ltb3NcIixcblx0XHRcImZhY2lsaXNcIiwgXCJuZXF1ZVwiLCBcIm5paGlsXCIsIFwiZXhwZWRpdGFcIiwgXCJ2aXRhZVwiLCBcInZlcm9cIiwgXCJpcHN1bVwiLFxuXHRcdFwibmlzaVwiLCBcImFuaW1pXCIsIFwiY3VtcXVlXCIsIFwicGFyaWF0dXJcIiwgXCJ2ZWxpdFwiLCBcIm1vZGlcIiwgXCJuYXR1c1wiLFxuXHRcdFwiaXVzdG9cIiwgXCJlYXF1ZVwiLCBcInNlcXVpXCIsIFwiaWxsb1wiLCBcInNlZFwiLCBcImV4XCIsIFwiZXRcIiwgXCJ2b2x1cHRhdGlidXNcIixcblx0XHRcInRlbXBvcmFcIiwgXCJ2ZXJpdGF0aXNcIiwgXCJyYXRpb25lXCIsIFwiYXNzdW1lbmRhXCIsIFwiaW5jaWR1bnRcIiwgXCJub3N0cnVtXCIsXG5cdFx0XCJwbGFjZWF0XCIsIFwiYWxpcXVpZFwiLCBcImZ1Z2FcIiwgXCJwcm92aWRlbnRcIiwgXCJwcmFlc2VudGl1bVwiLCBcInJlbVwiLFxuXHRcdFwibmVjZXNzaXRhdGlidXNcIiwgXCJzdXNjaXBpdFwiLCBcImFkaXBpc2NpXCIsIFwicXVpZGVtXCIsIFwicG9zc2ltdXNcIixcblx0XHRcInZvbHVwdGFzXCIsIFwiZGViaXRpc1wiLCBcInNpbnRcIiwgXCJhY2N1c2FudGl1bVwiLCBcInVuZGVcIiwgXCJzYXBpZW50ZVwiLFxuXHRcdFwidm9sdXB0YXRlXCIsIFwicXVpXCIsIFwiYXNwZXJuYXR1clwiLCBcImxhdWRhbnRpdW1cIiwgXCJzb2x1dGFcIiwgXCJhbWV0XCIsXG5cdFx0XCJxdW9cIiwgXCJhbGlxdWFtXCIsIFwic2FlcGVcIiwgXCJjdWxwYVwiLCBcImxpYmVyb1wiLCBcImlwc2FcIiwgXCJkaWN0YVwiLFxuXHRcdFwicmVpY2llbmRpc1wiLCBcIm5lc2NpdW50XCIsIFwiZG9sb3JpYnVzXCIsIFwiYXV0ZW1cIiwgXCJpbXBlZGl0XCIsIFwibWluaW1hXCIsXG5cdFx0XCJtYWlvcmVzXCIsIFwicmVwdWRpYW5kYWVcIiwgXCJpcHNhbVwiLCBcIm9iY2FlY2F0aVwiLCBcInVsbGFtXCIsIFwiZW5pbVwiLFxuXHRcdFwidG90YW1cIiwgXCJkZWxlY3R1c1wiLCBcImR1Y2ltdXNcIiwgXCJxdWlzXCIsIFwidm9sdXB0YXRlc1wiLCBcImRvbG9yZXNcIixcblx0XHRcIm1vbGVzdGlhZVwiLCBcImhhcnVtXCIsIFwiZG9sb3JlbVwiLCBcInF1aWFcIiwgXCJ2b2x1cHRhdGVtXCIsIFwibW9sZXN0aWFzXCIsXG5cdFx0XCJtYWduaVwiLCBcImRpc3RpbmN0aW9cIiwgXCJvbW5pc1wiLCBcImlsbHVtXCIsIFwiZG9sb3J1bVwiLCBcInZvbHVwdGF0dW1cIiwgXCJlYVwiLFxuXHRcdFwicXVhc1wiLCBcInF1YW1cIiwgXCJjb3Jwb3Jpc1wiLCBcInF1YWVcIiwgXCJibGFuZGl0aWlzXCIsIFwiYXRxdWVcIiwgXCJkZXNlcnVudFwiLFxuXHRcdFwibGFib3Jpb3NhbVwiLCBcImVhcnVtXCIsIFwiY29uc2VxdXVudHVyXCIsIFwiaGljXCIsIFwiY3VwaWRpdGF0ZVwiLFxuXHRcdFwicXVpYnVzZGFtXCIsIFwiYWNjdXNhbXVzXCIsIFwidXRcIiwgXCJyZXJ1bVwiLCBcImVycm9yXCIsIFwibWludXNcIiwgXCJlaXVzXCIsXG5cdFx0XCJhYlwiLCBcImFkXCIsIFwibmVtb1wiLCBcImZ1Z2l0XCIsIFwib2ZmaWNpYVwiLCBcImF0XCIsIFwiaW5cIiwgXCJpZFwiLCBcInF1b3NcIixcblx0XHRcInJlcHJlaGVuZGVyaXRcIiwgXCJudW1xdWFtXCIsIFwiaXN0ZVwiLCBcImZ1Z2lhdFwiLCBcInNpdFwiLCBcImludmVudG9yZVwiLFxuXHRcdFwiYmVhdGFlXCIsIFwicmVwZWxsZW5kdXNcIiwgXCJtYWduYW1cIiwgXCJyZWN1c2FuZGFlXCIsIFwicXVvZFwiLCBcImV4cGxpY2Fib1wiLFxuXHRcdFwiZG9sb3JlbXF1ZVwiLCBcImFwZXJpYW1cIiwgXCJjb25zZXF1YXR1clwiLCBcImFzcGVyaW9yZXNcIiwgXCJjb21tb2RpXCIsXG5cdFx0XCJvcHRpb1wiLCBcImRvbG9yXCIsIFwibGFib3JlXCIsIFwidGVtcG9yaWJ1c1wiLCBcInJlcGVsbGF0XCIsIFwidmVuaWFtXCIsXG5cdFx0XCJhcmNoaXRlY3RvXCIsIFwiZXN0XCIsIFwiZXNzZVwiLCBcIm1vbGxpdGlhXCIsIFwibnVsbGFcIiwgXCJhXCIsIFwic2ltaWxpcXVlXCIsXG5cdFx0XCJlb3NcIiwgXCJhbGlhc1wiLCBcImRvbG9yZVwiLCBcInRlbmV0dXJcIiwgXCJkZWxlbml0aVwiLCBcInBvcnJvXCIsIFwiZmFjZXJlXCIsXG5cdFx0XCJtYXhpbWVcIiwgXCJjb3JydXB0aVwiXVxufTtcblxudmFyIHJ1ID0ge1xuXHRcImNvbW1vblwiOiBbXCLQtNCw0LvQtdC60L4t0LTQsNC70LXQutC+XCIsIFwi0LfQsFwiLCBcItGB0LvQvtCy0LXRgdC90YvQvNC4XCIsIFwi0LPQvtGA0LDQvNC4XCIsIFwi0LIg0YHRgtGA0LDQvdC1XCIsIFwi0LPQu9Cw0YHQvdGL0YVcIiwgXCLQuCDRgdC+0LPQu9Cw0YHQvdGL0YVcIiwgXCLQttC40LLRg9GCXCIsIFwi0YDRi9Cx0L3Ri9C1XCIsIFwi0YLQtdC60YHRgtGLXCJdLFxuXHRcIndvcmRzXCI6IFtcItCy0LTQsNC70LhcIiwgXCLQvtGCINCy0YHQtdGFXCIsIFwi0L7QvdC4XCIsIFwi0LHRg9C60LLQtdC90L3Ri9GFXCIsIFwi0LTQvtC80LDRhVwiLCBcItC90LAg0LHQtdGA0LXQs9GDXCIsIFwi0YHQtdC80LDQvdGC0LjQutCwXCIsXG5cdFx0XCLQsdC+0LvRjNGI0L7Qs9C+XCIsIFwi0Y/Qt9GL0LrQvtCy0L7Qs9C+XCIsIFwi0L7QutC10LDQvdCwXCIsIFwi0LzQsNC70LXQvdGM0LrQuNC5XCIsIFwi0YDRg9GH0LXQtdC6XCIsIFwi0LTQsNC70YxcIixcblx0XHRcItC20YPRgNGH0LjRglwiLCBcItC/0L4g0LLRgdC10LlcIiwgXCLQvtCx0LXRgdC/0LXRh9C40LLQsNC10YJcIiwgXCLQtdC1XCIsXCLQstGB0LXQvNC4XCIsIFwi0L3QtdC+0LHRhdC+0LTQuNC80YvQvNC4XCIsXG5cdFx0XCLQv9GA0LDQstC40LvQsNC80LhcIiwgXCLRjdGC0LBcIiwgXCLQv9Cw0YDQsNC00LjQs9C80LDRgtC40YfQtdGB0LrQsNGPXCIsIFwi0YHRgtGA0LDQvdCwXCIsIFwi0LrQvtGC0L7RgNC+0LlcIiwgXCLQttCw0YDQtdC90L3Ri9C1XCIsXG5cdFx0XCLQv9GA0LXQtNC70L7QttC10L3QuNGPXCIsIFwi0LfQsNC70LXRgtCw0Y7RglwiLCBcItC/0YDRj9C80L5cIiwgXCLRgNC+0YJcIiwgXCLQtNCw0LbQtVwiLCBcItCy0YHQtdC80L7Qs9GD0YnQsNGPXCIsXG5cdFx0XCLQv9GD0L3QutGC0YPQsNGG0LjRj1wiLCBcItC90LVcIiwgXCLQuNC80LXQtdGCXCIsIFwi0LLQu9Cw0YHRgtC4XCIsIFwi0L3QsNC0XCIsIFwi0YDRi9Cx0L3Ri9C80LhcIiwgXCLRgtC10LrRgdGC0LDQvNC4XCIsXG5cdFx0XCLQstC10LTRg9GJ0LjQvNC4XCIsIFwi0LHQtdC30L7RgNGE0L7Qs9GA0LDRhNC40YfQvdGL0LlcIiwgXCLQvtCx0YDQsNC3XCIsIFwi0LbQuNC30L3QuFwiLCBcItC+0LTQvdCw0LbQtNGLXCIsIFwi0L7QtNC90LBcIixcblx0XHRcItC80LDQu9C10L3RjNC60LDRj1wiLCBcItGB0YLRgNC+0YfQutCwXCIsXCLRgNGL0LHQvdC+0LPQvlwiLCBcItGC0LXQutGB0YLQsFwiLCBcItC40LzQtdC90LhcIiwgXCJsb3JlbVwiLCBcImlwc3VtXCIsXG5cdFx0XCLRgNC10YjQuNC70LBcIiwgXCLQstGL0LnRgtC4XCIsIFwi0LHQvtC70YzRiNC+0LlcIiwgXCLQvNC40YBcIiwgXCLQs9GA0LDQvNC80LDRgtC40LrQuFwiLCBcItCy0LXQu9C40LrQuNC5XCIsIFwi0L7QutGB0LzQvtC60YFcIixcblx0XHRcItC/0YDQtdC00YPQv9GA0LXQttC00LDQu1wiLCBcItC+XCIsIFwi0LfQu9GL0YVcIiwgXCLQt9Cw0L/Rj9GC0YvRhVwiLCBcItC00LjQutC40YVcIiwgXCLQt9C90LDQutCw0YVcIiwgXCLQstC+0L/RgNC+0YHQsFwiLFxuXHRcdFwi0LrQvtCy0LDRgNC90YvRhVwiLCBcItGC0L7Rh9C60LDRhVwiLCBcItC30LDQv9GP0YLQvtC5XCIsIFwi0L3QvlwiLCBcItGC0LXQutGB0YJcIiwgXCLQtNCw0LtcIiwgXCLRgdCx0LjRgtGMXCIsXG5cdFx0XCLRgdC10LHRj1wiLCBcItGC0L7Qu9C60YNcIiwgXCLQvtC9XCIsIFwi0YHQvtCx0YDQsNC7XCIsIFwi0YHQtdC80YxcIiwgXCLRgdCy0L7QuNGFXCIsIFwi0LfQsNCz0LvQsNCy0L3Ri9GFXCIsIFwi0LHRg9C60LJcIixcblx0XHRcItC/0L7QtNC/0L7Rj9GB0LDQu1wiLCBcItC40L3QuNGG0LjQsNC7XCIsIFwi0LfQsFwiLCBcItC/0L7Rj9GBXCIsIFwi0L/Rg9GB0YLQuNC70YHRj1wiLCBcItC00L7RgNC+0LPRg1wiLFxuXHRcdFwi0LLQt9C+0LHRgNCw0LLRiNC40YHRjFwiLCBcItC/0LXRgNCy0YPRjlwiLCBcItCy0LXRgNGI0LjQvdGDXCIsIFwi0LrRg9GA0YHQuNCy0L3Ri9GFXCIsIFwi0LPQvtGAXCIsIFwi0LHRgNC+0YHQuNC7XCIsXG5cdFx0XCLQv9C+0YHQu9C10LTQvdC40LlcIiwgXCLQstC30LPQu9GP0LRcIiwgXCLQvdCw0LfQsNC0XCIsIFwi0YHQuNC70YPRjdGCXCIsIFwi0YHQstC+0LXQs9C+XCIsIFwi0YDQvtC00L3QvtCz0L5cIiwgXCLQs9C+0YDQvtC00LBcIixcblx0XHRcItCx0YPQutCy0L7Qs9GA0LDQtFwiLCBcItC30LDQs9C+0LvQvtCy0L7QulwiLCBcItC00LXRgNC10LLQvdC4XCIsIFwi0LDQu9GE0LDQstC40YJcIiwgXCLQv9C+0LTQt9Cw0LPQvtC70L7QstC+0LpcIiwgXCLRgdCy0L7QtdCz0L5cIixcblx0XHRcItC/0LXRgNC10YPQu9C60LBcIiwgXCLQs9GA0YPRgdGC0L3Ri9C5XCIsIFwi0YDQtdGC0L7RgNC40YfQtdGB0LrQuNC5XCIsIFwi0LLQvtC/0YDQvtGBXCIsIFwi0YHQutCw0YLQuNC70YHRj1wiLCBcItC10LPQvlwiLFxuXHRcdFwi0YnQtdC60LVcIiwgXCLQv9GA0L7QtNC+0LvQttC40LtcIiwgXCLRgdCy0L7QuVwiLCBcItC/0YPRgtGMXCIsIFwi0LTQvtGA0L7Qs9C1XCIsIFwi0LLRgdGC0YDQtdGC0LjQu1wiLCBcItGA0YPQutC+0L/QuNGB0YxcIixcblx0XHRcItC+0L3QsFwiLCBcItC/0YDQtdC00YPQv9GA0LXQtNC40LvQsFwiLCAgXCLQvNC+0LXQuVwiLCBcItCy0YHQtVwiLCBcItC/0LXRgNC10L/QuNGB0YvQstCw0LXRgtGB0Y9cIiwgXCLQvdC10YHQutC+0LvRjNC60L5cIixcblx0XHRcItGA0LDQt1wiLCBcItC10LTQuNC90YHRgtCy0LXQvdC90L7QtVwiLCBcItGH0YLQvlwiLCBcItC80LXQvdGPXCIsIFwi0L7RgdGC0LDQu9C+0YHRjFwiLCBcItGN0YLQvlwiLCBcItC/0YDQuNGB0YLQsNCy0LrQsFwiLFxuXHRcdFwi0LLQvtC30LLRgNCw0YnQsNC50YHRj1wiLCBcItGC0YtcIiwgXCLQu9GD0YfRiNC1XCIsIFwi0YHQstC+0Y5cIiwgXCLQsdC10LfQvtC/0LDRgdC90YPRjlwiLCBcItGB0YLRgNCw0L3Rg1wiLCBcItC/0L7RgdC70YPRiNCw0LLRiNC40YHRjFwiLFxuXHRcdFwi0YDRg9C60L7Qv9C40YHQuFwiLCBcItC90LDRiFwiLCBcItC/0YDQvtC00L7Qu9C20LjQu1wiLCBcItGB0LLQvtC5XCIsIFwi0L/Rg9GC0YxcIiwgXCLQstGB0LrQvtGA0LVcIiwgXCLQtdC80YNcIixcblx0XHRcItC/0L7QstGB0YLRgNC10YfQsNC70YHRj1wiLCBcItC60L7QstCw0YDQvdGL0LlcIiwgXCLRgdC+0YHRgtCw0LLQuNGC0LXQu9GMXCIsIFwi0YDQtdC60LvQsNC80L3Ri9GFXCIsIFwi0YLQtdC60YHRgtC+0LJcIixcblx0XHRcItC90LDQv9C+0LjQstGI0LjQuVwiLCBcItGP0LfRi9C60L7QvFwiLCBcItGA0LXRh9GM0Y5cIiwgXCLQt9Cw0LzQsNC90LjQstGI0LjQuVwiLCBcItGB0LLQvtC1XCIsIFwi0LDQs9C10L3RgtGB0YLQstC+XCIsXG5cdFx0XCLQutC+0YLQvtGA0L7QtVwiLCBcItC40YHQv9C+0LvRjNC30L7QstCw0LvQvlwiLCBcItGB0L3QvtCy0LBcIiwgXCLRgdC90L7QstCwXCIsIFwi0YHQstC+0LjRhVwiLCBcItC/0YDQvtC10LrRgtCw0YVcIixcblx0XHRcItC10YHQu9C4XCIsIFwi0L/QtdGA0LXQv9C40YHQsNC70LhcIiwgXCLRgtC+XCIsIFwi0LbQuNCy0LXRglwiLCBcItGC0LDQvFwiLCBcItC00L5cIiwgXCLRgdC40YVcIiwgXCLQv9C+0YBcIl1cbn07XG5cbnZhciBzcCA9IHtcblx0XCJjb21tb25cIjogW1wibXVqZXJcIiwgXCJ1bm9cIiwgXCJkb2xvclwiLCBcIm3DoXNcIiwgXCJkZVwiLCBcInBvZGVyXCIsIFwibWlzbW9cIiwgXCJzaVwiXSxcblx0XCJ3b3Jkc1wiOiBbXCJlamVyY2ljaW9cIiwgXCJwcmVmZXJlbmNpYVwiLCBcInBlcnNwaWNhY2lhXCIsIFwibGFib3JhbFwiLCBcInBhw7FvXCIsXG5cdFx0XCJzdW50dW9zb1wiLCBcIm1vbGRlXCIsIFwibmFtaWJpYVwiLCBcInBsYW5lYWRvclwiLCBcIm1pcmFyXCIsIFwiZGVtw6FzXCIsIFwib2ZpY2luaXN0YVwiLCBcImV4Y2VwY2nDs25cIixcblx0XHRcIm9kaW9cIiwgXCJjb25zZWN1ZW5jaWFcIiwgXCJjYXNpXCIsIFwiYXV0b1wiLCBcImNoaWNoYXJyYVwiLCBcInZlbG9cIiwgXCJlbGl4aXJcIixcblx0XHRcImF0YXF1ZVwiLCBcIm5vXCIsIFwib2Rpb1wiLCBcInRlbXBvcmFsXCIsIFwiY3XDs3J1bVwiLCBcImRpZ27DrXNpbW9cIixcblx0XHRcImZhY2lsaXNtb1wiLCBcImxldHJhXCIsIFwibmloaWxpc3RhXCIsIFwiZXhwZWRpY2nDs25cIiwgXCJhbG1hXCIsIFwiYWx2ZW9sYXJcIiwgXCJhcGFydGVcIixcblx0XHRcImxlw7NuXCIsIFwiYW5pbWFsXCIsIFwiY29tb1wiLCBcInBhcmlhXCIsIFwiYmVsbGV6YVwiLCBcIm1vZG9cIiwgXCJuYXRpdmlkYWRcIixcblx0XHRcImp1c3RvXCIsIFwiYXRhcXVlXCIsIFwic8OpcXVpdG9cIiwgXCJwaWxsb1wiLCBcInNlZFwiLCBcImV4XCIsIFwieVwiLCBcInZvbHVtaW5vc29cIixcblx0XHRcInRlbXBvcmFsaWRhZFwiLCBcInZlcmRhZGVzXCIsIFwicmFjaW9uYWxcIiwgXCJhc3VuY2nDs25cIiwgXCJpbmNpZGVudGVcIiwgXCJtYXJlamFkYVwiLFxuXHRcdFwicGxhY2VudGFcIiwgXCJhbWFuZWNlclwiLCBcImZ1Z2FcIiwgXCJwcmV2aXNvclwiLCBcInByZXNlbnRhY2nDs25cIiwgXCJsZWpvc1wiLFxuXHRcdFwibmVjZXNhcmlhbWVudGVcIiwgXCJzb3NwZWNob3NvXCIsIFwiYWRpcG9zaWRhZFwiLCBcInF1aW5kw61vXCIsIFwicMOzY2ltYVwiLFxuXHRcdFwidm9sdWJsZVwiLCBcImTDqWJpdG9cIiwgXCJzaW50acOzXCIsIFwiYWNjZXNvcmlvXCIsIFwiZmFsZGFcIiwgXCJzYXBpZW5jaWFcIixcblx0XHRcInZvbHV0YXNcIiwgXCJxdWVzb1wiLCBcInBlcm1hY3VsdHVyYVwiLCBcImxhdWRvXCIsIFwic29sdWNpb25lc1wiLCBcImVudGVyb1wiLFxuXHRcdFwicGFuXCIsIFwibGl0cm9cIiwgXCJ0b25lbGFkYVwiLCBcImN1bHBhXCIsIFwibGliZXJ0YXJpb1wiLCBcIm1vc2NhXCIsIFwiZGljdGFkb1wiLFxuXHRcdFwicmVpbmNpZGVudGVcIiwgXCJuYXNjaW1pZW50b1wiLCBcImRvbG9yXCIsIFwiZXNjb2xhclwiLCBcImltcGVkaW1lbnRvXCIsIFwibcOtbmltYVwiLFxuXHRcdFwibWF5b3Jlc1wiLCBcInJlcHVnbmFudGVcIiwgXCJkdWxjZVwiLCBcIm9iY2VjYWRvXCIsIFwibW9udGHDsWFcIiwgXCJlbmlnbWFcIixcblx0XHRcInRvdGFsXCIsIFwiZGVsZXTDqXJlb1wiLCBcImTDqWNpbWFcIiwgXCJjw6FiYWxhXCIsIFwiZm90b2dyYWbDrWFcIiwgXCJkb2xvcmVzXCIsXG5cdFx0XCJtb2xlc3RvXCIsIFwib2x2aWRvXCIsIFwicGFjaWVuY2lhXCIsIFwicmVzaWxpZW5jaWFcIiwgXCJ2b2x1bnRhZFwiLCBcIm1vbGVzdGlhc1wiLFxuXHRcdFwibWFnbsOtZmljb1wiLCBcImRpc3RpbmNpw7NuXCIsIFwib3ZuaVwiLCBcIm1hcmVqYWRhXCIsIFwiY2Vycm9cIiwgXCJ0b3JyZVwiLCBcInlcIixcblx0XHRcImFib2dhZGFcIiwgXCJtYW5hbnRpYWxcIiwgXCJjb3Jwb3JhbFwiLCBcImFndWFcIiwgXCJjcmVww7pzY3Vsb1wiLCBcImF0YXF1ZVwiLCBcImRlc2llcnRvXCIsXG5cdFx0XCJsYWJvcmlvc2FtZW50ZVwiLCBcImFuZ3VzdGlhXCIsIFwiYWZvcnR1bmFkb1wiLCBcImFsbWFcIiwgXCJlbmNlZmFsb2dyYW1hXCIsXG5cdFx0XCJtYXRlcmlhbGlkYWRcIiwgXCJjb3Nhc1wiLCBcIm9cIiwgXCJyZW51bmNpYVwiLCBcImVycm9yXCIsIFwibWVub3NcIiwgXCJjb25lam9cIixcblx0XHRcImFiYWTDrWFcIiwgXCJhbmFsZmFiZXRvXCIsIFwicmVtb1wiLCBcImZ1Z2FjaWRhZFwiLCBcIm9maWNpb1wiLCBcImVuXCIsIFwiYWxtw6FjaWdvXCIsIFwidm9zXCIsIFwicGFuXCIsXG5cdFx0XCJyZXByZXNpw7NuXCIsIFwibsO6bWVyb3NcIiwgXCJ0cmlzdGVcIiwgXCJyZWZ1Z2lhZG9cIiwgXCJ0cm90ZVwiLCBcImludmVudG9yXCIsXG5cdFx0XCJjb3JjaGVhXCIsIFwicmVwZWxlbnRlXCIsIFwibWFnbWFcIiwgXCJyZWN1c2Fkb1wiLCBcInBhdHLDs25cIiwgXCJleHBsw61jaXRvXCIsXG5cdFx0XCJwYWxvbWFcIiwgXCJzw61uZHJvbWVcIiwgXCJpbm11bmVcIiwgXCJhdXRvaW5tdW5lXCIsIFwiY29tb2RpZGFkXCIsXG5cdFx0XCJsZXlcIiwgXCJ2aWV0bmFtaXRhXCIsIFwiZGVtb25pb1wiLCBcInRhc21hbmlhXCIsIFwicmVwZWxlclwiLCBcImFww6luZGljZVwiLFxuXHRcdFwiYXJxdWl0ZWN0b1wiLCBcImNvbHVtbmFcIiwgXCJ5dWdvXCIsIFwiY29tcHV0YWRvclwiLCBcIm11bGFcIiwgXCJhXCIsIFwicHJvcMOzc2l0b1wiLFxuXHRcdFwiZmFudGFzw61hXCIsIFwiYWxpYXNcIiwgXCJyYXlvXCIsIFwidGVuZWRvclwiLCBcImRlbGV6bmFibGVcIiwgXCJ2ZW50YW5hXCIsIFwiY2FyYVwiLFxuXHRcdFwiYW5lbWlhXCIsIFwiY29ycnVwdG9cIl1cbn07XG5cbmNvbnN0IHZvY2FidWxhcmllcyA9IHsgcnUsIHNwLCBsYXRpbiB9O1xuY29uc3QgcmVMb3JlbSA9IC9ebG9yZW0oW2Etel0qKShcXGQqKSgtXFxkKik/JC9pO1xuZnVuY3Rpb24gbG9yZW0obm9kZSwgYW5jZXN0b3JzLCBjb25maWcpIHtcbiAgICBsZXQgbTtcbiAgICBpZiAobm9kZS5uYW1lICYmIChtID0gbm9kZS5uYW1lLm1hdGNoKHJlTG9yZW0pKSkge1xuICAgICAgICBjb25zdCBkYiA9IHZvY2FidWxhcmllc1ttWzFdXSB8fCB2b2NhYnVsYXJpZXMubGF0aW47XG4gICAgICAgIGNvbnN0IG1pbldvcmRDb3VudCA9IG1bMl0gPyBNYXRoLm1heCgxLCBOdW1iZXIobVsyXSkpIDogMzA7XG4gICAgICAgIGNvbnN0IG1heFdvcmRDb3VudCA9IG1bM10gPyBNYXRoLm1heChtaW5Xb3JkQ291bnQsIE51bWJlcihtWzNdLnNsaWNlKDEpKSkgOiBtaW5Xb3JkQ291bnQ7XG4gICAgICAgIGNvbnN0IHdvcmRDb3VudCA9IHJhbmQobWluV29yZENvdW50LCBtYXhXb3JkQ291bnQpO1xuICAgICAgICBjb25zdCByZXBlYXQgPSBub2RlLnJlcGVhdCB8fCBmaW5kUmVwZWF0ZXIoYW5jZXN0b3JzKTtcbiAgICAgICAgbm9kZS5uYW1lID0gbm9kZS5hdHRyaWJ1dGVzID0gdm9pZCAwO1xuICAgICAgICBub2RlLnZhbHVlID0gW3BhcmFncmFwaChkYiwgd29yZENvdW50LCAhcmVwZWF0IHx8IHJlcGVhdC52YWx1ZSA9PT0gMCldO1xuICAgICAgICBpZiAobm9kZS5yZXBlYXQgJiYgYW5jZXN0b3JzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHJlc29sdmVJbXBsaWNpdFRhZyhub2RlLCBhbmNlc3RvcnMsIGNvbmZpZyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vKipcbiAqIFJldHVybnMgcmFuZG9tIGludGVnZXIgYmV0d2VlbiA8Y29kZT5mcm9tPC9jb2RlPiBhbmQgPGNvZGU+dG88L2NvZGU+IHZhbHVlc1xuICovXG5mdW5jdGlvbiByYW5kKGZyb20sIHRvKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh0byAtIGZyb20pICsgZnJvbSk7XG59XG5mdW5jdGlvbiBzYW1wbGUoYXJyLCBjb3VudCkge1xuICAgIGNvbnN0IGxlbiA9IGFyci5sZW5ndGg7XG4gICAgY29uc3QgaXRlcmF0aW9ucyA9IE1hdGgubWluKGxlbiwgY291bnQpO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIHdoaWxlIChyZXN1bHQubGVuZ3RoIDwgaXRlcmF0aW9ucykge1xuICAgICAgICBjb25zdCBzdHIgPSBhcnJbcmFuZCgwLCBsZW4pXTtcbiAgICAgICAgaWYgKCFyZXN1bHQuaW5jbHVkZXMoc3RyKSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goc3RyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gY2hvaWNlKHZhbCkge1xuICAgIHJldHVybiB2YWxbcmFuZCgwLCB2YWwubGVuZ3RoIC0gMSldO1xufVxuZnVuY3Rpb24gc2VudGVuY2Uod29yZHMsIGVuZCkge1xuICAgIGlmICh3b3Jkcy5sZW5ndGgpIHtcbiAgICAgICAgd29yZHMgPSBbY2FwaXRhbGl6ZSh3b3Jkc1swXSldLmNvbmNhdCh3b3Jkcy5zbGljZSgxKSk7XG4gICAgfVxuICAgIHJldHVybiB3b3Jkcy5qb2luKCcgJykgKyAoZW5kIHx8IGNob2ljZSgnPyEuLi4nKSk7IC8vIG1vcmUgZG90cyB0aGFuIHF1ZXN0aW9uIG1hcmtzXG59XG5mdW5jdGlvbiBjYXBpdGFsaXplKHdvcmQpIHtcbiAgICByZXR1cm4gd29yZFswXS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKTtcbn1cbi8qKlxuICogSW5zZXJ0IGNvbW1hcyBhdCByYW5kb21seSBzZWxlY3RlZCB3b3Jkcy4gVGhpcyBmdW5jdGlvbiBtb2RpZmllcyB2YWx1ZXNcbiAqIGluc2lkZSBgd29yZHNgIGFycmF5XG4gKi9cbmZ1bmN0aW9uIGluc2VydENvbW1hcyh3b3Jkcykge1xuICAgIGlmICh3b3Jkcy5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiB3b3JkcztcbiAgICB9XG4gICAgd29yZHMgPSB3b3Jkcy5zbGljZSgpO1xuICAgIGNvbnN0IGxlbiA9IHdvcmRzLmxlbmd0aDtcbiAgICBjb25zdCBoYXNDb21tYSA9IC8sJC87XG4gICAgbGV0IHRvdGFsQ29tbWFzID0gMDtcbiAgICBpZiAobGVuID4gMyAmJiBsZW4gPD0gNikge1xuICAgICAgICB0b3RhbENvbW1hcyA9IHJhbmQoMCwgMSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGxlbiA+IDYgJiYgbGVuIDw9IDEyKSB7XG4gICAgICAgIHRvdGFsQ29tbWFzID0gcmFuZCgwLCAyKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRvdGFsQ29tbWFzID0gcmFuZCgxLCA0KTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDAsIHBvczsgaSA8IHRvdGFsQ29tbWFzOyBpKyspIHtcbiAgICAgICAgcG9zID0gcmFuZCgwLCBsZW4gLSAyKTtcbiAgICAgICAgaWYgKCFoYXNDb21tYS50ZXN0KHdvcmRzW3Bvc10pKSB7XG4gICAgICAgICAgICB3b3Jkc1twb3NdICs9ICcsJztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gd29yZHM7XG59XG4vKipcbiAqIEdlbmVyYXRlIGEgcGFyYWdyYXBoIG9mIFwiTG9yZW0gaXBzdW1cIiB0ZXh0XG4gKiBAcGFyYW0gZGljdCBXb3JkcyBkaWN0aW9uYXJ5XG4gKiBAcGFyYW0gd29yZENvdW50IFdvcmRzIGNvdW50IGluIHBhcmFncmFwaFxuICogQHBhcmFtIHN0YXJ0V2l0aENvbW1vbiBTaG91bGQgcGFyYWdyYXBoIHN0YXJ0IHdpdGggY29tbW9uIFwibG9yZW0gaXBzdW1cIiBzZW50ZW5jZS5cbiAqL1xuZnVuY3Rpb24gcGFyYWdyYXBoKGRpY3QsIHdvcmRDb3VudCwgc3RhcnRXaXRoQ29tbW9uKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgbGV0IHRvdGFsV29yZHMgPSAwO1xuICAgIGxldCB3b3JkcztcbiAgICBpZiAoc3RhcnRXaXRoQ29tbW9uICYmIGRpY3QuY29tbW9uKSB7XG4gICAgICAgIHdvcmRzID0gZGljdC5jb21tb24uc2xpY2UoMCwgd29yZENvdW50KTtcbiAgICAgICAgdG90YWxXb3JkcyArPSB3b3Jkcy5sZW5ndGg7XG4gICAgICAgIHJlc3VsdC5wdXNoKHNlbnRlbmNlKGluc2VydENvbW1hcyh3b3JkcyksICcuJykpO1xuICAgIH1cbiAgICB3aGlsZSAodG90YWxXb3JkcyA8IHdvcmRDb3VudCkge1xuICAgICAgICB3b3JkcyA9IHNhbXBsZShkaWN0LndvcmRzLCBNYXRoLm1pbihyYW5kKDIsIDMwKSwgd29yZENvdW50IC0gdG90YWxXb3JkcykpO1xuICAgICAgICB0b3RhbFdvcmRzICs9IHdvcmRzLmxlbmd0aDtcbiAgICAgICAgcmVzdWx0LnB1c2goc2VudGVuY2UoaW5zZXJ0Q29tbWFzKHdvcmRzKSkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0LmpvaW4oJyAnKTtcbn1cbmZ1bmN0aW9uIGZpbmRSZXBlYXRlcihhbmNlc3RvcnMpIHtcbiAgICBmb3IgKGxldCBpID0gYW5jZXN0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBhbmNlc3RvcnNbaV07XG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdBYmJyZXZpYXRpb25Ob2RlJyAmJiBlbGVtZW50LnJlcGVhdCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQucmVwZWF0O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIEpTWCB0cmFuc2Zvcm1lcjogcmVwbGFjZXMgYGNsYXNzYCBhbmQgYGZvcmAgYXR0cmlidXRlcyB3aXRoIGBjbGFzc05hbWVgIGFuZFxuICogYGh0bWxGb3JgIGF0dHJpYnV0ZXMgcmVzcGVjdGl2ZWx5XG4gKi9cbmZ1bmN0aW9uIGpzeChub2RlKSB7XG4gICAgaWYgKG5vZGUuYXR0cmlidXRlcykge1xuICAgICAgICBub2RlLmF0dHJpYnV0ZXMuZm9yRWFjaChyZW5hbWUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHJlbmFtZShhdHRyKSB7XG4gICAgaWYgKGF0dHIubmFtZSA9PT0gJ2NsYXNzJykge1xuICAgICAgICBhdHRyLm5hbWUgPSAnY2xhc3NOYW1lJztcbiAgICB9XG4gICAgZWxzZSBpZiAoYXR0ci5uYW1lID09PSAnZm9yJykge1xuICAgICAgICBhdHRyLm5hbWUgPSAnaHRtbEZvcic7XG4gICAgfVxufVxuXG4vKipcbiAqIFhTTCB0cmFuc2Zvcm1lcjogcmVtb3ZlcyBgc2VsZWN0YCBhdHRyaWJ1dGVzIGZyb20gY2VydGFpbiBub2RlcyB0aGF0IGNvbnRhaW5cbiAqIGNoaWxkcmVuXG4gKi9cbmZ1bmN0aW9uIHhzbChub2RlKSB7XG4gICAgaWYgKG1hdGNoZXNOYW1lKG5vZGUubmFtZSkgJiYgbm9kZS5hdHRyaWJ1dGVzICYmIChub2RlLmNoaWxkcmVuLmxlbmd0aCB8fCBub2RlLnZhbHVlKSkge1xuICAgICAgICBub2RlLmF0dHJpYnV0ZXMgPSBub2RlLmF0dHJpYnV0ZXMuZmlsdGVyKGlzQWxsb3dlZCk7XG4gICAgfVxufVxuZnVuY3Rpb24gaXNBbGxvd2VkKGF0dHIpIHtcbiAgICByZXR1cm4gYXR0ci5uYW1lICE9PSAnc2VsZWN0Jztcbn1cbmZ1bmN0aW9uIG1hdGNoZXNOYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gbmFtZSA9PT0gJ3hzbDp2YXJpYWJsZScgfHwgbmFtZSA9PT0gJ3hzbDp3aXRoLXBhcmFtJztcbn1cblxuY29uc3QgcmVFbGVtZW50ID0gL14oLSspKFthLXowLTldK1thLXowLTktXSopL2k7XG5jb25zdCByZU1vZGlmaWVyID0gL14oXyspKFthLXowLTldK1thLXowLTktX10qKS9pO1xuY29uc3QgYmxvY2tDYW5kaWRhdGVzMSA9IChjbGFzc05hbWUpID0+IC9eW2Etel1cXC0vaS50ZXN0KGNsYXNzTmFtZSk7XG5jb25zdCBibG9ja0NhbmRpZGF0ZXMyID0gKGNsYXNzTmFtZSkgPT4gL15bYS16XS9pLnRlc3QoY2xhc3NOYW1lKTtcbmZ1bmN0aW9uIGJlbShub2RlLCBhbmNlc3RvcnMsIGNvbmZpZykge1xuICAgIGV4cGFuZENsYXNzTmFtZXMobm9kZSk7XG4gICAgZXhwYW5kU2hvcnROb3RhdGlvbihub2RlLCBhbmNlc3RvcnMsIGNvbmZpZyk7XG59XG4vKipcbiAqIEV4cGFuZHMgZXhpc3RpbmcgY2xhc3MgbmFtZXMgaW4gQkVNIG5vdGF0aW9uIGluIGdpdmVuIGBub2RlYC5cbiAqIEZvciBleGFtcGxlLCBpZiBub2RlIGNvbnRhaW5zIGBiX19lbF9tb2RgIGNsYXNzIG5hbWUsIHRoaXMgbWV0aG9kIGVuc3VyZXNcbiAqIHRoYXQgZWxlbWVudCBjb250YWlucyBgYl9fZWxgIGNsYXNzIGFzIHdlbGxcbiAqL1xuZnVuY3Rpb24gZXhwYW5kQ2xhc3NOYW1lcyhub2RlKSB7XG4gICAgY29uc3QgZGF0YSA9IGdldEJFTURhdGEobm9kZSk7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IFtdO1xuICAgIGZvciAoY29uc3QgY2wgb2YgZGF0YS5jbGFzc05hbWVzKSB7XG4gICAgICAgIC8vIHJlbW92ZSBhbGwgbW9kaWZpZXJzIGFuZCBlbGVtZW50IHByZWZpeGVzIGZyb20gY2xhc3MgbmFtZSB0byBnZXQgYSBiYXNlIGVsZW1lbnQgbmFtZVxuICAgICAgICBjb25zdCBpeCA9IGNsLmluZGV4T2YoJ18nKTtcbiAgICAgICAgaWYgKGl4ID4gMCAmJiAhY2wuc3RhcnRzV2l0aCgnLScpKSB7XG4gICAgICAgICAgICBjbGFzc05hbWVzLnB1c2goY2wuc2xpY2UoMCwgaXgpKTtcbiAgICAgICAgICAgIGNsYXNzTmFtZXMucHVzaChjbC5zbGljZShpeCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2xhc3NOYW1lcy5wdXNoKGNsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoY2xhc3NOYW1lcy5sZW5ndGgpIHtcbiAgICAgICAgZGF0YS5jbGFzc05hbWVzID0gY2xhc3NOYW1lcy5maWx0ZXIodW5pcXVlQ2xhc3MpO1xuICAgICAgICBkYXRhLmJsb2NrID0gZmluZEJsb2NrTmFtZShkYXRhLmNsYXNzTmFtZXMpO1xuICAgICAgICB1cGRhdGVDbGFzcyhub2RlLCBkYXRhLmNsYXNzTmFtZXMuam9pbignICcpKTtcbiAgICB9XG59XG4vKipcbiAqIEV4cGFuZHMgc2hvcnQgQkVNIG5vdGF0aW9uLCBlLmcuIGAtZWxlbWVudGAgYW5kIGBfbW9kaWZpZXJgXG4gKi9cbmZ1bmN0aW9uIGV4cGFuZFNob3J0Tm90YXRpb24obm9kZSwgYW5jZXN0b3JzLCBjb25maWcpIHtcbiAgICBjb25zdCBkYXRhID0gZ2V0QkVNRGF0YShub2RlKTtcbiAgICBjb25zdCBjbGFzc05hbWVzID0gW107XG4gICAgY29uc3QgeyBvcHRpb25zIH0gPSBjb25maWc7XG4gICAgY29uc3QgcGF0aCA9IGFuY2VzdG9ycy5zbGljZSgxKS5jb25jYXQobm9kZSk7XG4gICAgZm9yIChsZXQgY2wgb2YgZGF0YS5jbGFzc05hbWVzKSB7XG4gICAgICAgIGxldCBwcmVmaXggPSAnJztcbiAgICAgICAgbGV0IG07XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsQ2xhc3MgPSBjbDtcbiAgICAgICAgLy8gcGFyc2UgZWxlbWVudCBkZWZpbml0aW9uIChjb3VsZCBiZSBvbmx5IG9uZSlcbiAgICAgICAgaWYgKG0gPSBjbC5tYXRjaChyZUVsZW1lbnQpKSB7XG4gICAgICAgICAgICBwcmVmaXggPSBnZXRCbG9ja05hbWUocGF0aCwgbVsxXS5sZW5ndGgsIGNvbmZpZy5jb250ZXh0KSArIG9wdGlvbnNbJ2JlbS5lbGVtZW50J10gKyBtWzJdO1xuICAgICAgICAgICAgY2xhc3NOYW1lcy5wdXNoKHByZWZpeCk7XG4gICAgICAgICAgICBjbCA9IGNsLnNsaWNlKG1bMF0ubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBwYXJzZSBtb2RpZmllcnMgZGVmaW5pdGlvbnNcbiAgICAgICAgaWYgKG0gPSBjbC5tYXRjaChyZU1vZGlmaWVyKSkge1xuICAgICAgICAgICAgaWYgKCFwcmVmaXgpIHtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBnZXRCbG9ja05hbWUocGF0aCwgbVsxXS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZXMucHVzaChwcmVmaXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xhc3NOYW1lcy5wdXNoKGAke3ByZWZpeH0ke29wdGlvbnNbJ2JlbS5tb2RpZmllciddfSR7bVsyXX1gKTtcbiAgICAgICAgICAgIGNsID0gY2wuc2xpY2UobVswXS5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjbCA9PT0gb3JpZ2luYWxDbGFzcykge1xuICAgICAgICAgICAgLy8gY2xhc3MgbmFtZSB3YXNu4oCZdCBtb2RpZmllZDogaXTigJlzIG5vdCBhIEJFTS1zcGVjaWZpYyBjbGFzcyxcbiAgICAgICAgICAgIC8vIGFkZCBpdCBhcy1pcyBpbnRvIG91dHB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lcy5wdXNoKG9yaWdpbmFsQ2xhc3MpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGFyckNsYXNzTmFtZXMgPSBjbGFzc05hbWVzLmZpbHRlcih1bmlxdWVDbGFzcyk7XG4gICAgaWYgKGFyckNsYXNzTmFtZXMubGVuZ3RoKSB7XG4gICAgICAgIHVwZGF0ZUNsYXNzKG5vZGUsIGFyckNsYXNzTmFtZXMuam9pbignICcpKTtcbiAgICB9XG59XG4vKipcbiAqIFJldHVybnMgQkVNIGRhdGEgZnJvbSBnaXZlbiBhYmJyZXZpYXRpb24gbm9kZVxuICovXG5mdW5jdGlvbiBnZXRCRU1EYXRhKG5vZGUpIHtcbiAgICBpZiAoIW5vZGUuX2JlbSkge1xuICAgICAgICBsZXQgY2xhc3NWYWx1ZSA9ICcnO1xuICAgICAgICBpZiAobm9kZS5hdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGF0dHIgb2Ygbm9kZS5hdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGF0dHIubmFtZSA9PT0gJ2NsYXNzJyAmJiBhdHRyLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzVmFsdWUgPSBzdHJpbmdpZnlWYWx1ZShhdHRyLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG5vZGUuX2JlbSA9IHBhcnNlQkVNKGNsYXNzVmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZS5fYmVtO1xufVxuZnVuY3Rpb24gZ2V0QkVNRGF0YUZyb21Db250ZXh0KGNvbnRleHQpIHtcbiAgICBpZiAoIWNvbnRleHQuX2JlbSkge1xuICAgICAgICBjb250ZXh0Ll9iZW0gPSBwYXJzZUJFTShjb250ZXh0LmF0dHJpYnV0ZXMgJiYgY29udGV4dC5hdHRyaWJ1dGVzLmNsYXNzIHx8ICcnKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRleHQuX2JlbTtcbn1cbi8qKlxuICogUGFyc2VzIEJFTSBkYXRhIGZyb20gZ2l2ZW4gY2xhc3MgbmFtZVxuICovXG5mdW5jdGlvbiBwYXJzZUJFTShjbGFzc1ZhbHVlKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IGNsYXNzVmFsdWUgPyBjbGFzc1ZhbHVlLnNwbGl0KC9cXHMrLykgOiBbXTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjbGFzc05hbWVzLFxuICAgICAgICBibG9jazogZmluZEJsb2NrTmFtZShjbGFzc05hbWVzKVxuICAgIH07XG59XG4vKipcbiAqIFJldHVybnMgYmxvY2sgbmFtZSBmb3IgZ2l2ZW4gYG5vZGVgIGJ5IGBwcmVmaXhgLCB3aGljaCB0ZWxscyB0aGUgZGVwdGggb2ZcbiAqIG9mIHBhcmVudCBub2RlIGxvb2t1cFxuICovXG5mdW5jdGlvbiBnZXRCbG9ja05hbWUoYW5jZXN0b3JzLCBkZXB0aCA9IDAsIGNvbnRleHQpIHtcbiAgICBjb25zdCBtYXhQYXJlbnRJeCA9IDA7XG4gICAgbGV0IHBhcmVudEl4ID0gTWF0aC5tYXgoYW5jZXN0b3JzLmxlbmd0aCAtIGRlcHRoLCBtYXhQYXJlbnRJeCk7XG4gICAgZG8ge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBhbmNlc3RvcnNbcGFyZW50SXhdO1xuICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gZ2V0QkVNRGF0YShwYXJlbnQpO1xuICAgICAgICAgICAgaWYgKGRhdGEuYmxvY2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5ibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gd2hpbGUgKG1heFBhcmVudEl4IDwgcGFyZW50SXgtLSk7XG4gICAgaWYgKGNvbnRleHQpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGdldEJFTURhdGFGcm9tQ29udGV4dChjb250ZXh0KTtcbiAgICAgICAgaWYgKGRhdGEuYmxvY2spIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhLmJsb2NrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAnJztcbn1cbmZ1bmN0aW9uIGZpbmRCbG9ja05hbWUoY2xhc3NOYW1lcykge1xuICAgIHJldHVybiBmaW5kKGNsYXNzTmFtZXMsIGJsb2NrQ2FuZGlkYXRlczEpXG4gICAgICAgIHx8IGZpbmQoY2xhc3NOYW1lcywgYmxvY2tDYW5kaWRhdGVzMilcbiAgICAgICAgfHwgdm9pZCAwO1xufVxuLyoqXG4gKiBGaW5kcyBjbGFzcyBuYW1lIGZyb20gZ2l2ZW4gbGlzdCB3aGljaCBtYXkgYmUgdXNlZCBhcyBibG9jayBuYW1lXG4gKi9cbmZ1bmN0aW9uIGZpbmQoY2xhc3NOYW1lcywgZmlsdGVyKSB7XG4gICAgZm9yIChjb25zdCBjbCBvZiBjbGFzc05hbWVzKSB7XG4gICAgICAgIGlmIChyZUVsZW1lbnQudGVzdChjbCkgfHwgcmVNb2RpZmllci50ZXN0KGNsKSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpbHRlcihjbCkpIHtcbiAgICAgICAgICAgIHJldHVybiBjbDtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIHVwZGF0ZUNsYXNzKG5vZGUsIHZhbHVlKSB7XG4gICAgZm9yIChjb25zdCBhdHRyIG9mIG5vZGUuYXR0cmlidXRlcykge1xuICAgICAgICBpZiAoYXR0ci5uYW1lID09PSAnY2xhc3MnKSB7XG4gICAgICAgICAgICBhdHRyLnZhbHVlID0gW3ZhbHVlXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gc3RyaW5naWZ5VmFsdWUodmFsdWUpIHtcbiAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgZm9yIChjb25zdCB0IG9mIHZhbHVlKSB7XG4gICAgICAgIHJlc3VsdCArPSB0eXBlb2YgdCA9PT0gJ3N0cmluZycgPyB0IDogdC5uYW1lO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gdW5pcXVlQ2xhc3MoaXRlbSwgaXgsIGFycikge1xuICAgIHJldHVybiAhIWl0ZW0gJiYgYXJyLmluZGV4T2YoaXRlbSkgPT09IGl4O1xufVxuXG5mdW5jdGlvbiB3YWxrJDEoYWJiciwgdmlzaXRvciwgc3RhdGUpIHtcbiAgICBjb25zdCBjYWxsYmFjayA9IChjdHgsIGluZGV4LCBpdGVtcykgPT4ge1xuICAgICAgICBjb25zdCB7IHBhcmVudCwgY3VycmVudCB9ID0gc3RhdGU7XG4gICAgICAgIHN0YXRlLnBhcmVudCA9IGN1cnJlbnQ7XG4gICAgICAgIHN0YXRlLmN1cnJlbnQgPSBjdHg7XG4gICAgICAgIHZpc2l0b3IoY3R4LCBpbmRleCwgaXRlbXMsIHN0YXRlLCBuZXh0KTtcbiAgICAgICAgc3RhdGUuY3VycmVudCA9IGN1cnJlbnQ7XG4gICAgICAgIHN0YXRlLnBhcmVudCA9IHBhcmVudDtcbiAgICB9O1xuICAgIGNvbnN0IG5leHQgPSAobm9kZSwgaW5kZXgsIGl0ZW1zKSA9PiB7XG4gICAgICAgIHN0YXRlLmFuY2VzdG9ycy5wdXNoKHN0YXRlLmN1cnJlbnQpO1xuICAgICAgICBjYWxsYmFjayhub2RlLCBpbmRleCwgaXRlbXMpO1xuICAgICAgICBzdGF0ZS5hbmNlc3RvcnMucG9wKCk7XG4gICAgfTtcbiAgICBhYmJyLmNoaWxkcmVuLmZvckVhY2goY2FsbGJhY2spO1xufVxuZnVuY3Rpb24gY3JlYXRlV2Fsa1N0YXRlKGNvbmZpZykge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmU6IFdpbGwgc2V0IHZhbHVlIGluIGl0ZXJhdG9yXG4gICAgICAgIGN1cnJlbnQ6IG51bGwsXG4gICAgICAgIHBhcmVudDogdm9pZCAwLFxuICAgICAgICBhbmNlc3RvcnM6IFtdLFxuICAgICAgICBjb25maWcsXG4gICAgICAgIGZpZWxkOiAxLFxuICAgICAgICBvdXQ6IGNyZWF0ZU91dHB1dFN0cmVhbShjb25maWcub3B0aW9ucylcbiAgICB9O1xufVxuXG5jb25zdCBjYXJldCA9IFt7IHR5cGU6ICdGaWVsZCcsIGluZGV4OiAwLCBuYW1lOiAnJyB9XTtcbi8qKlxuICogQ2hlY2sgaWYgZ2l2ZW4gbm9kZSBpcyBhIHNuaXBwZXQ6IGEgbm9kZSB3aXRob3V0IG5hbWUgYW5kIGF0dHJpYnV0ZXNcbiAqL1xuZnVuY3Rpb24gaXNTbmlwcGV0KG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZSA/ICFub2RlLm5hbWUgJiYgIW5vZGUuYXR0cmlidXRlcyA6IGZhbHNlO1xufVxuLyoqXG4gKiBDaGVjayBpZiBnaXZlbiBub2RlIGlzIGlubGluZS1sZXZlbCBlbGVtZW50LCBlLmcuIGVsZW1lbnQgd2l0aCBleHBsaWNpdGx5XG4gKiBkZWZpbmVkIG5vZGUgbmFtZVxuICovXG5mdW5jdGlvbiBpc0lubGluZUVsZW1lbnQobm9kZSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIG5vZGUgPyBpc0lubGluZShub2RlLCBjb25maWcpIDogZmFsc2U7XG59XG4vKipcbiAqIENoZWNrIGlmIGdpdmVuIHZhbHVlIHRva2VuIGlzIGEgZmllbGRcbiAqL1xuZnVuY3Rpb24gaXNGaWVsZCh0b2tlbikge1xuICAgIHJldHVybiB0eXBlb2YgdG9rZW4gPT09ICdvYmplY3QnICYmIHRva2VuLnR5cGUgPT09ICdGaWVsZCc7XG59XG5mdW5jdGlvbiBwdXNoVG9rZW5zKHRva2Vucywgc3RhdGUpIHtcbiAgICBjb25zdCB7IG91dCB9ID0gc3RhdGU7XG4gICAgbGV0IGxhcmdlc3RJbmRleCA9IC0xO1xuICAgIGZvciAoY29uc3QgdCBvZiB0b2tlbnMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcHVzaFN0cmluZyhvdXQsIHQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcHVzaEZpZWxkKG91dCwgc3RhdGUuZmllbGQgKyB0LmluZGV4LCB0Lm5hbWUpO1xuICAgICAgICAgICAgaWYgKHQuaW5kZXggPiBsYXJnZXN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICBsYXJnZXN0SW5kZXggPSB0LmluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChsYXJnZXN0SW5kZXggIT09IC0xKSB7XG4gICAgICAgIHN0YXRlLmZpZWxkICs9IGxhcmdlc3RJbmRleCArIDE7XG4gICAgfVxufVxuLyoqXG4gKiBTcGxpdHMgZ2l2ZW4gdmFsdWUgdG9rZW4gYnkgbGluZXM6IHJldHVybnMgYXJyYXkgd2hlcmUgZWFjaCBlbnRyeSBpcyBhIHRva2VuIGxpc3RcbiAqIGZvciBhIHNpbmdsZSBsaW5lXG4gKi9cbmZ1bmN0aW9uIHNwbGl0QnlMaW5lcyQxKHRva2Vucykge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGxldCBsaW5lID0gW107XG4gICAgZm9yIChjb25zdCB0IG9mIHRva2Vucykge1xuICAgICAgICBpZiAodHlwZW9mIHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBsaW5lcyA9IHQuc3BsaXQoL1xcclxcbj98XFxuL2cpO1xuICAgICAgICAgICAgbGluZS5wdXNoKGxpbmVzLnNoaWZ0KCkgfHwgJycpO1xuICAgICAgICAgICAgd2hpbGUgKGxpbmVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGxpbmUpO1xuICAgICAgICAgICAgICAgIGxpbmUgPSBbbGluZXMuc2hpZnQoKSB8fCAnJ107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsaW5lLnB1c2godCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGluZS5sZW5ndGggJiYgcmVzdWx0LnB1c2gobGluZSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogQ2hlY2sgaWYgZ2l2ZW4gYXR0cmlidXRlIHNob3VsZCBiZSBvdXRwdXR0ZWRcbiAqL1xuZnVuY3Rpb24gc2hvdWxkT3V0cHV0QXR0cmlidXRlKGF0dHIpIHtcbiAgICAvLyBJbiBjYXNlIGlmIGF0dHJpYnV0ZSBpcyBpbXBsaWVkLCBjaGVjayBpZiBpdCBoYXMgYSBkZWZpbmVkIHZhbHVlOlxuICAgIC8vIGVpdGhlciBub24tZW1wdHkgdmFsdWUgb3IgcXVvdGVkIGVtcHR5IHZhbHVlXG4gICAgcmV0dXJuICFhdHRyLmltcGxpZWQgfHwgYXR0ci52YWx1ZVR5cGUgIT09ICdyYXcnIHx8ICghIWF0dHIudmFsdWUgJiYgYXR0ci52YWx1ZS5sZW5ndGggPiAwKTtcbn1cblxuLyoqXG4gKiBTcGxpdHMgZ2l2ZW4gc3RyaW5nIGludG8gdGVtcGxhdGUgdG9rZW5zLlxuICogVGVtcGxhdGUgaXMgYSBzdHJpbmcgd2hpY2ggY29udGFpbnMgcGxhY2Vob2xkZXJzIHdoaWNoIGFyZSB1cHBlcmNhc2UgbmFtZXNcbiAqIGJldHdlZW4gYFtgIGFuZCBgXWAsIGZvciBleGFtcGxlOiBgW1BMQUNFSE9MREVSXWAuXG4gKiBVbmxpa2Ugb3RoZXIgdGVtcGxhdGVzLCBhIHBsYWNlaG9sZGVyIG1heSBjb250YWluIGV4dHJhIGNoYXJhY3RlcnMgYmVmb3JlIGFuZFxuICogYWZ0ZXIgbmFtZTogYFslUExBQ0VIT0xERVIuXWAuIElmIGRhdGEgZm9yIGBQTEFDRUhPTERFUmAgaXMgZGVmaW5lZCwgaXQgd2lsbFxuICogYmUgb3V0cHV0dGVkIHdpdGggd2l0aCB0aGVzZSBleHRyYSBjaGFyYWN0ZXIsIG90aGVyd2lzZSB3aWxsIGJlIGNvbXBsZXRlbHkgb21pdHRlZC5cbiAqL1xuZnVuY3Rpb24gdGVtcGxhdGUodGV4dCkge1xuICAgIGNvbnN0IHRva2VucyA9IFtdO1xuICAgIGNvbnN0IHNjYW5uZXIgPSB7IHBvczogMCwgdGV4dCB9O1xuICAgIGxldCBwbGFjZWhvbGRlcjtcbiAgICBsZXQgb2Zmc2V0ID0gc2Nhbm5lci5wb3M7XG4gICAgbGV0IHBvcyA9IHNjYW5uZXIucG9zO1xuICAgIHdoaWxlIChzY2FubmVyLnBvcyA8IHNjYW5uZXIudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgcG9zID0gc2Nhbm5lci5wb3M7XG4gICAgICAgIGlmIChwbGFjZWhvbGRlciA9IGNvbnN1bWVQbGFjZWhvbGRlcihzY2FubmVyKSkge1xuICAgICAgICAgICAgaWYgKG9mZnNldCAhPT0gc2Nhbm5lci5wb3MpIHtcbiAgICAgICAgICAgICAgICB0b2tlbnMucHVzaCh0ZXh0LnNsaWNlKG9mZnNldCwgcG9zKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b2tlbnMucHVzaChwbGFjZWhvbGRlcik7XG4gICAgICAgICAgICBvZmZzZXQgPSBzY2FubmVyLnBvcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNjYW5uZXIucG9zKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9mZnNldCAhPT0gc2Nhbm5lci5wb3MpIHtcbiAgICAgICAgdG9rZW5zLnB1c2godGV4dC5zbGljZShvZmZzZXQpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogQ29uc3VtZXMgcGxhY2Vob2xkZXIgbGlrZSBgWyNJRF1gIGZyb20gZ2l2ZW4gc2Nhbm5lclxuICovXG5mdW5jdGlvbiBjb25zdW1lUGxhY2Vob2xkZXIoc2Nhbm5lcikge1xuICAgIGlmIChwZWVrKHNjYW5uZXIpID09PSA5MSAvKiBTdGFydCAqLykge1xuICAgICAgICBjb25zdCBzdGFydCA9ICsrc2Nhbm5lci5wb3M7XG4gICAgICAgIGxldCBuYW1lUG9zID0gc3RhcnQ7XG4gICAgICAgIGxldCBhZnRlclBvcyA9IHN0YXJ0O1xuICAgICAgICBsZXQgc3RhY2sgPSAxO1xuICAgICAgICB3aGlsZSAoc2Nhbm5lci5wb3MgPCBzY2FubmVyLnRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBjb2RlID0gcGVlayhzY2FubmVyKTtcbiAgICAgICAgICAgIGlmIChpc1Rva2VuU3RhcnQoY29kZSkpIHtcbiAgICAgICAgICAgICAgICBuYW1lUG9zID0gc2Nhbm5lci5wb3M7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGlzVG9rZW4ocGVlayhzY2FubmVyKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2Nhbm5lci5wb3MrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYWZ0ZXJQb3MgPSBzY2FubmVyLnBvcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjb2RlID09PSA5MSAvKiBTdGFydCAqLykge1xuICAgICAgICAgICAgICAgICAgICBzdGFjaysrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjb2RlID09PSA5MyAvKiBFbmQgKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKC0tc3RhY2sgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVmb3JlOiBzY2FubmVyLnRleHQuc2xpY2Uoc3RhcnQsIG5hbWVQb3MpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyOiBzY2FubmVyLnRleHQuc2xpY2UoYWZ0ZXJQb3MsIHNjYW5uZXIucG9zKyspLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHNjYW5uZXIudGV4dC5zbGljZShuYW1lUG9zLCBhZnRlclBvcylcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2Nhbm5lci5wb3MrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIHBlZWsoc2Nhbm5lciwgcG9zID0gc2Nhbm5lci5wb3MpIHtcbiAgICByZXR1cm4gc2Nhbm5lci50ZXh0LmNoYXJDb2RlQXQocG9zKTtcbn1cbmZ1bmN0aW9uIGlzVG9rZW5TdGFydChjb2RlKSB7XG4gICAgcmV0dXJuIGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MDsgLy8gQS1aXG59XG5mdW5jdGlvbiBpc1Rva2VuKGNvZGUpIHtcbiAgICByZXR1cm4gaXNUb2tlblN0YXJ0KGNvZGUpXG4gICAgICAgIHx8IChjb2RlID4gNDcgJiYgY29kZSA8IDU4KSAvKiAwLTkgKi9cbiAgICAgICAgfHwgY29kZSA9PT0gOTUgLyogVW5kZXJzY29yZSAqL1xuICAgICAgICB8fCBjb2RlID09PSA0NSAvKiBEYXNoICovO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb21tZW50U3RhdGUoY29uZmlnKSB7XG4gICAgY29uc3QgeyBvcHRpb25zIH0gPSBjb25maWc7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZW5hYmxlZDogb3B0aW9uc1snY29tbWVudC5lbmFibGVkJ10sXG4gICAgICAgIHRyaWdnZXI6IG9wdGlvbnNbJ2NvbW1lbnQudHJpZ2dlciddLFxuICAgICAgICBiZWZvcmU6IG9wdGlvbnNbJ2NvbW1lbnQuYmVmb3JlJ10gPyB0ZW1wbGF0ZShvcHRpb25zWydjb21tZW50LmJlZm9yZSddKSA6IHZvaWQgMCxcbiAgICAgICAgYWZ0ZXI6IG9wdGlvbnNbJ2NvbW1lbnQuYWZ0ZXInXSA/IHRlbXBsYXRlKG9wdGlvbnNbJ2NvbW1lbnQuYWZ0ZXInXSkgOiB2b2lkIDBcbiAgICB9O1xufVxuLyoqXG4gKiBBZGRzIGNvbW1lbnQgcHJlZml4IGZvciBnaXZlbiBub2RlLCBpZiByZXF1aXJlZFxuICovXG5mdW5jdGlvbiBjb21tZW50Tm9kZUJlZm9yZShub2RlLCBzdGF0ZSkge1xuICAgIGlmIChzaG91bGRDb21tZW50KG5vZGUsIHN0YXRlKSAmJiBzdGF0ZS5jb21tZW50LmJlZm9yZSkge1xuICAgICAgICBvdXRwdXQobm9kZSwgc3RhdGUuY29tbWVudC5iZWZvcmUsIHN0YXRlKTtcbiAgICB9XG59XG4vKipcbiAqIEFkZHMgY29tbWVudCBzdWZmaXggZm9yIGdpdmVuIG5vZGUsIGlmIHJlcXVpcmVkXG4gKi9cbmZ1bmN0aW9uIGNvbW1lbnROb2RlQWZ0ZXIobm9kZSwgc3RhdGUpIHtcbiAgICBpZiAoc2hvdWxkQ29tbWVudChub2RlLCBzdGF0ZSkgJiYgc3RhdGUuY29tbWVudC5hZnRlcikge1xuICAgICAgICBvdXRwdXQobm9kZSwgc3RhdGUuY29tbWVudC5hZnRlciwgc3RhdGUpO1xuICAgIH1cbn1cbi8qKlxuICogQ2hlY2sgaWYgZ2l2ZW4gbm9kZSBzaG91bGQgYmUgY29tbWVudGVkXG4gKi9cbmZ1bmN0aW9uIHNob3VsZENvbW1lbnQobm9kZSwgc3RhdGUpIHtcbiAgICBjb25zdCB7IGNvbW1lbnQgfSA9IHN0YXRlO1xuICAgIGlmICghY29tbWVudC5lbmFibGVkIHx8ICFjb21tZW50LnRyaWdnZXIgfHwgIW5vZGUubmFtZSB8fCAhbm9kZS5hdHRyaWJ1dGVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBhdHRyIG9mIG5vZGUuYXR0cmlidXRlcykge1xuICAgICAgICBpZiAoYXR0ci5uYW1lICYmIGNvbW1lbnQudHJpZ2dlci5pbmNsdWRlcyhhdHRyLm5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG4vKipcbiAqIFB1c2hlcyBnaXZlbiB0ZW1wbGF0ZSB0b2tlbnMgaW50byBvdXRwdXQgc3RyZWFtXG4gKi9cbmZ1bmN0aW9uIG91dHB1dChub2RlLCB0b2tlbnMsIHN0YXRlKSB7XG4gICAgY29uc3QgYXR0cnMgPSB7fTtcbiAgICBjb25zdCB7IG91dCB9ID0gc3RhdGU7XG4gICAgLy8gQ29sbGVjdCBhdHRyaWJ1dGVzIHBheWxvYWRcbiAgICBmb3IgKGNvbnN0IGF0dHIgb2Ygbm9kZS5hdHRyaWJ1dGVzKSB7XG4gICAgICAgIGlmIChhdHRyLm5hbWUgJiYgYXR0ci52YWx1ZSkge1xuICAgICAgICAgICAgYXR0cnNbYXR0ci5uYW1lLnRvVXBwZXJDYXNlKCldID0gYXR0ci52YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBPdXRwdXQgcGFyc2VkIHRva2Vuc1xuICAgIGZvciAoY29uc3QgdG9rZW4gb2YgdG9rZW5zKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBwdXNoU3RyaW5nKG91dCwgdG9rZW4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGF0dHJzW3Rva2VuLm5hbWVdKSB7XG4gICAgICAgICAgICBwdXNoU3RyaW5nKG91dCwgdG9rZW4uYmVmb3JlKTtcbiAgICAgICAgICAgIHB1c2hUb2tlbnMoYXR0cnNbdG9rZW4ubmFtZV0sIHN0YXRlKTtcbiAgICAgICAgICAgIHB1c2hTdHJpbmcob3V0LCB0b2tlbi5hZnRlcik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IGh0bWxUYWdSZWdleCA9IC9ePChbXFx3XFwtOl0rKVtcXHM+XS87XG5mdW5jdGlvbiBodG1sKGFiYnIsIGNvbmZpZykge1xuICAgIGNvbnN0IHN0YXRlID0gY3JlYXRlV2Fsa1N0YXRlKGNvbmZpZyk7XG4gICAgc3RhdGUuY29tbWVudCA9IGNyZWF0ZUNvbW1lbnRTdGF0ZShjb25maWcpO1xuICAgIHdhbGskMShhYmJyLCBlbGVtZW50LCBzdGF0ZSk7XG4gICAgcmV0dXJuIHN0YXRlLm91dC52YWx1ZTtcbn1cbi8qKlxuICogT3V0cHV0cyBgbm9kZWAgY29udGVudCB0byBvdXRwdXQgc3RyZWFtIG9mIGBzdGF0ZWBcbiAqIEBwYXJhbSBub2RlIENvbnRleHQgbm9kZVxuICogQHBhcmFtIGluZGV4IEluZGV4IG9mIGBub2RlYCBpbiBgaXRlbXNgXG4gKiBAcGFyYW0gaXRlbXMgTGlzdCBvZiBgbm9kZWDigJlzIHNpYmxpbmdzXG4gKiBAcGFyYW0gc3RhdGUgQ3VycmVudCB3YWxrIHN0YXRlXG4gKi9cbmZ1bmN0aW9uIGVsZW1lbnQobm9kZSwgaW5kZXgsIGl0ZW1zLCBzdGF0ZSwgbmV4dCkge1xuICAgIGNvbnN0IHsgb3V0LCBjb25maWcgfSA9IHN0YXRlO1xuICAgIGNvbnN0IGZvcm1hdCA9IHNob3VsZEZvcm1hdChub2RlLCBpbmRleCwgaXRlbXMsIHN0YXRlKTtcbiAgICAvLyBQaWNrIG9mZnNldCBsZXZlbCBmb3IgY3VycmVudCBub2RlXG4gICAgY29uc3QgbGV2ZWwgPSBnZXRJbmRlbnQoc3RhdGUpO1xuICAgIG91dC5sZXZlbCArPSBsZXZlbDtcbiAgICBmb3JtYXQgJiYgcHVzaE5ld2xpbmUob3V0LCB0cnVlKTtcbiAgICBpZiAobm9kZS5uYW1lKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0YWdOYW1lKG5vZGUubmFtZSwgY29uZmlnKTtcbiAgICAgICAgY29tbWVudE5vZGVCZWZvcmUobm9kZSwgc3RhdGUpO1xuICAgICAgICBwdXNoU3RyaW5nKG91dCwgYDwke25hbWV9YCk7XG4gICAgICAgIGlmIChub2RlLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgYXR0ciBvZiBub2RlLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2hvdWxkT3V0cHV0QXR0cmlidXRlKGF0dHIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHB1c2hBdHRyaWJ1dGUoYXR0ciwgc3RhdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS5zZWxmQ2xvc2luZyAmJiAhbm9kZS5jaGlsZHJlbi5sZW5ndGggJiYgIW5vZGUudmFsdWUpIHtcbiAgICAgICAgICAgIHB1c2hTdHJpbmcob3V0LCBgJHtzZWxmQ2xvc2UoY29uZmlnKX0+YCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwdXNoU3RyaW5nKG91dCwgJz4nKTtcbiAgICAgICAgICAgIGlmICghcHVzaFNuaXBwZXQobm9kZSwgc3RhdGUsIG5leHQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5uZXJGb3JtYXQgPSBub2RlLnZhbHVlLnNvbWUoaGFzTmV3bGluZSkgfHwgc3RhcnRzV2l0aEJsb2NrVGFnKG5vZGUudmFsdWUsIGNvbmZpZyk7XG4gICAgICAgICAgICAgICAgICAgIGlubmVyRm9ybWF0ICYmIHB1c2hOZXdsaW5lKHN0YXRlLm91dCwgKytvdXQubGV2ZWwpO1xuICAgICAgICAgICAgICAgICAgICBwdXNoVG9rZW5zKG5vZGUudmFsdWUsIHN0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJGb3JtYXQgJiYgcHVzaE5ld2xpbmUoc3RhdGUub3V0LCAtLW91dC5sZXZlbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaChuZXh0KTtcbiAgICAgICAgICAgICAgICBpZiAoIW5vZGUudmFsdWUgJiYgIW5vZGUuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlubmVyRm9ybWF0ID0gY29uZmlnLm9wdGlvbnNbJ291dHB1dC5mb3JtYXRMZWFmTm9kZSddXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCBjb25maWcub3B0aW9uc1snb3V0cHV0LmZvcm1hdEZvcmNlJ10uaW5jbHVkZXMobm9kZS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJGb3JtYXQgJiYgcHVzaE5ld2xpbmUoc3RhdGUub3V0LCArK291dC5sZXZlbCk7XG4gICAgICAgICAgICAgICAgICAgIHB1c2hUb2tlbnMoY2FyZXQsIHN0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJGb3JtYXQgJiYgcHVzaE5ld2xpbmUoc3RhdGUub3V0LCAtLW91dC5sZXZlbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHVzaFN0cmluZyhvdXQsIGA8LyR7bmFtZX0+YCk7XG4gICAgICAgICAgICBjb21tZW50Tm9kZUFmdGVyKG5vZGUsIHN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICghcHVzaFNuaXBwZXQobm9kZSwgc3RhdGUsIG5leHQpICYmIG5vZGUudmFsdWUpIHtcbiAgICAgICAgLy8gQSB0ZXh0LW9ubHkgbm9kZSAoc25pcHBldClcbiAgICAgICAgcHVzaFRva2Vucyhub2RlLnZhbHVlLCBzdGF0ZSk7XG4gICAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaChuZXh0KTtcbiAgICB9XG4gICAgaWYgKGZvcm1hdCAmJiBpbmRleCA9PT0gaXRlbXMubGVuZ3RoIC0gMSAmJiBzdGF0ZS5wYXJlbnQpIHtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gaXNTbmlwcGV0KHN0YXRlLnBhcmVudCkgPyAwIDogMTtcbiAgICAgICAgcHVzaE5ld2xpbmUob3V0LCBvdXQubGV2ZWwgLSBvZmZzZXQpO1xuICAgIH1cbiAgICBvdXQubGV2ZWwgLT0gbGV2ZWw7XG59XG4vKipcbiAqIE91dHB1dHMgZ2l2ZW4gYXR0cmlidXRl4oCZcyBjb250ZW50IGludG8gb3V0cHV0IHN0cmVhbVxuICovXG5mdW5jdGlvbiBwdXNoQXR0cmlidXRlKGF0dHIsIHN0YXRlKSB7XG4gICAgY29uc3QgeyBvdXQsIGNvbmZpZyB9ID0gc3RhdGU7XG4gICAgaWYgKGF0dHIubmFtZSkge1xuICAgICAgICBjb25zdCBuYW1lID0gYXR0ck5hbWUoYXR0ci5uYW1lLCBjb25maWcpO1xuICAgICAgICBjb25zdCBsUXVvdGUgPSBhdHRyUXVvdGUoYXR0ciwgY29uZmlnLCB0cnVlKTtcbiAgICAgICAgY29uc3QgclF1b3RlID0gYXR0clF1b3RlKGF0dHIsIGNvbmZpZyk7XG4gICAgICAgIGxldCB2YWx1ZSA9IGF0dHIudmFsdWU7XG4gICAgICAgIGlmIChpc0Jvb2xlYW5BdHRyaWJ1dGUoYXR0ciwgY29uZmlnKSAmJiAhdmFsdWUpIHtcbiAgICAgICAgICAgIC8vIElmIGF0dHJpYnV0ZSB2YWx1ZSBpcyBvbWl0dGVkIGFuZCBpdOKAmXMgYSBib29sZWFuIHZhbHVlLCBjaGVjayBmb3JcbiAgICAgICAgICAgIC8vIGBjb21wYWN0Qm9vbGVhbmAgb3B0aW9uOiBpZiBpdOKAmXMgZGlzYWJsZWQsIHNldCB2YWx1ZSB0byBhdHRyaWJ1dGUgbmFtZVxuICAgICAgICAgICAgLy8gKFhNTCBzdHlsZSlcbiAgICAgICAgICAgIGlmICghY29uZmlnLm9wdGlvbnNbJ291dHB1dC5jb21wYWN0Qm9vbGVhbiddKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBbbmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGNhcmV0O1xuICAgICAgICB9XG4gICAgICAgIHB1c2hTdHJpbmcob3V0LCAnICcgKyBuYW1lKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwdXNoU3RyaW5nKG91dCwgJz0nICsgbFF1b3RlKTtcbiAgICAgICAgICAgIHB1c2hUb2tlbnModmFsdWUsIHN0YXRlKTtcbiAgICAgICAgICAgIHB1c2hTdHJpbmcob3V0LCByUXVvdGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbmZpZy5vcHRpb25zWydvdXRwdXQuc2VsZkNsb3NpbmdTdHlsZSddICE9PSAnaHRtbCcpIHtcbiAgICAgICAgICAgIHB1c2hTdHJpbmcob3V0LCAnPScgKyBsUXVvdGUgKyByUXVvdGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gcHVzaFNuaXBwZXQobm9kZSwgc3RhdGUsIG5leHQpIHtcbiAgICBpZiAobm9kZS52YWx1ZSAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAvLyBXZSBoYXZlIGEgdmFsdWUgYW5kIGNoaWxkIG5vZGVzLiBJbiBjYXNlIGlmIHZhbHVlIGNvbnRhaW5zIGZpZWxkcyxcbiAgICAgICAgLy8gd2Ugc2hvdWxkIG91dHB1dCBjaGlsZHJlbiBhcyBhIGNvbnRlbnQgb2YgZmlyc3QgZmllbGRcbiAgICAgICAgY29uc3QgZmllbGRJeCA9IG5vZGUudmFsdWUuZmluZEluZGV4KGlzRmllbGQpO1xuICAgICAgICBpZiAoZmllbGRJeCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHB1c2hUb2tlbnMobm9kZS52YWx1ZS5zbGljZSgwLCBmaWVsZEl4KSwgc3RhdGUpO1xuICAgICAgICAgICAgY29uc3QgbGluZSA9IHN0YXRlLm91dC5saW5lO1xuICAgICAgICAgICAgbGV0IHBvcyA9IGZpZWxkSXggKyAxO1xuICAgICAgICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKG5leHQpO1xuICAgICAgICAgICAgLy8gSWYgdGhlcmUgd2FzIGEgbGluZSBjaGFuZ2UsIHRyaW0gbGVhZGluZyB3aGl0ZXNwYWNlIGZvciBiZXR0ZXIgcmVzdWx0XG4gICAgICAgICAgICBpZiAoc3RhdGUub3V0LmxpbmUgIT09IGxpbmUgJiYgdHlwZW9mIG5vZGUudmFsdWVbcG9zXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBwdXNoU3RyaW5nKHN0YXRlLm91dCwgbm9kZS52YWx1ZVtwb3MrK10udHJpbUxlZnQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwdXNoVG9rZW5zKG5vZGUudmFsdWUuc2xpY2UocG9zKSwgc3RhdGUpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuLyoqXG4gKiBDaGVjayBpZiBnaXZlbiBub2RlIHNob3VsZCBiZSBmb3JtYXR0ZWQgaW4gaXRzIHBhcmVudCBjb250ZXh0XG4gKi9cbmZ1bmN0aW9uIHNob3VsZEZvcm1hdChub2RlLCBpbmRleCwgaXRlbXMsIHN0YXRlKSB7XG4gICAgY29uc3QgeyBjb25maWcsIHBhcmVudCB9ID0gc3RhdGU7XG4gICAgaWYgKCFjb25maWcub3B0aW9uc1snb3V0cHV0LmZvcm1hdCddKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGluZGV4ID09PSAwICYmICFwYXJlbnQpIHtcbiAgICAgICAgLy8gRG8gbm90IGZvcm1hdCB2ZXJ5IGZpcnN0IG5vZGVcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBEbyBub3QgZm9ybWF0IHNpbmdsZSBjaGlsZCBvZiBzbmlwcGV0XG4gICAgaWYgKHBhcmVudCAmJiBpc1NuaXBwZXQocGFyZW50KSAmJiBpdGVtcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGphY2VudCB0ZXh0LW9ubHkvc25pcHBldCBub2Rlc1xuICAgICAqL1xuICAgIGlmIChpc1NuaXBwZXQobm9kZSkpIHtcbiAgICAgICAgLy8gQWRqYWNlbnQgdGV4dC1vbmx5L3NuaXBwZXQgbm9kZXNcbiAgICAgICAgY29uc3QgZm9ybWF0ID0gaXNTbmlwcGV0KGl0ZW1zW2luZGV4IC0gMV0pIHx8IGlzU25pcHBldChpdGVtc1tpbmRleCArIDFdKVxuICAgICAgICAgICAgLy8gSGFzIG5ld2xpbmVzOiBsb29rcyBsaWtlIHdyYXBwaW5nIGNvZGUgZnJhZ21lbnRcbiAgICAgICAgICAgIHx8IG5vZGUudmFsdWUuc29tZShoYXNOZXdsaW5lKVxuICAgICAgICAgICAgLy8gRm9ybWF0IGFzIHdyYXBwZXI6IGNvbnRhaW5zIGNoaWxkcmVuIHdoaWNoIHdpbGwgYmUgb3V0cHV0dGVkIGFzIGZpZWxkIGNvbnRlbnRcbiAgICAgICAgICAgIHx8IChub2RlLnZhbHVlLnNvbWUoaXNGaWVsZCkgJiYgbm9kZS5jaGlsZHJlbi5sZW5ndGgpO1xuICAgICAgICBpZiAoZm9ybWF0KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXNJbmxpbmUobm9kZSwgY29uZmlnKSkge1xuICAgICAgICAvLyBDaGVjayBpZiBpbmxpbmUgbm9kZSBpcyB0aGUgbmV4dCBzaWJsaW5nIG9mIGJsb2NrLWxldmVsIG5vZGVcbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAvLyBGaXJzdCBub2RlIGluIHBhcmVudDogZm9ybWF0IGlmIGl04oCZcyBmb2xsb3dlZCBieSBhIGJsb2NrLWxldmVsIGVsZW1lbnRcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzSW5saW5lKGl0ZW1zW2ldLCBjb25maWcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghaXNJbmxpbmUoaXRlbXNbaW5kZXggLSAxXSwgY29uZmlnKSkge1xuICAgICAgICAgICAgLy8gTm9kZSBpcyByaWdodCBhZnRlciBibG9jay1sZXZlbCBlbGVtZW50XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29uZmlnLm9wdGlvbnNbJ291dHB1dC5pbmxpbmVCcmVhayddKSB7XG4gICAgICAgICAgICAvLyBjaGVjayBmb3IgYWRqYWNlbnQgaW5saW5lIGVsZW1lbnRzIGJlZm9yZSBhbmQgYWZ0ZXIgY3VycmVudCBlbGVtZW50XG4gICAgICAgICAgICBsZXQgYWRqYWNlbnRJbmxpbmUgPSAxO1xuICAgICAgICAgICAgbGV0IGJlZm9yZSA9IGluZGV4O1xuICAgICAgICAgICAgbGV0IGFmdGVyID0gaW5kZXg7XG4gICAgICAgICAgICB3aGlsZSAoaXNJbmxpbmVFbGVtZW50KGl0ZW1zWy0tYmVmb3JlXSwgY29uZmlnKSkge1xuICAgICAgICAgICAgICAgIGFkamFjZW50SW5saW5lKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaXNJbmxpbmVFbGVtZW50KGl0ZW1zWysrYWZ0ZXJdLCBjb25maWcpKSB7XG4gICAgICAgICAgICAgICAgYWRqYWNlbnRJbmxpbmUrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhZGphY2VudElubGluZSA+PSBjb25maWcub3B0aW9uc1snb3V0cHV0LmlubGluZUJyZWFrJ10pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBFZGdlIGNhc2U6IGlubGluZSBub2RlIGNvbnRhaW5zIG5vZGUgdGhhdCBzaG91bGQgcmVjZWl2ZSBmb3JtYXR0aW5nXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBpbCA9IG5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgaWw7IGkrKykge1xuICAgICAgICAgICAgaWYgKHNob3VsZEZvcm1hdChub2RlLmNoaWxkcmVuW2ldLCBpLCBub2RlLmNoaWxkcmVuLCBzdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuLyoqXG4gKiBSZXR1cm5zIGluZGVudGF0aW9uIG9mZnNldCBmb3IgZ2l2ZW4gbm9kZVxuICovXG5mdW5jdGlvbiBnZXRJbmRlbnQoc3RhdGUpIHtcbiAgICBjb25zdCB7IGNvbmZpZywgcGFyZW50IH0gPSBzdGF0ZTtcbiAgICBpZiAoIXBhcmVudCB8fCBpc1NuaXBwZXQocGFyZW50KSB8fCAocGFyZW50Lm5hbWUgJiYgY29uZmlnLm9wdGlvbnNbJ291dHB1dC5mb3JtYXRTa2lwJ10uaW5jbHVkZXMocGFyZW50Lm5hbWUpKSkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgcmV0dXJuIDE7XG59XG4vKipcbiAqIENoZWNrIGlmIGdpdmVuIG5vZGUgdmFsdWUgY29udGFpbnMgbmV3bGluZXNcbiAqL1xuZnVuY3Rpb24gaGFzTmV3bGluZSh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIC9cXHJ8XFxuLy50ZXN0KHZhbHVlKTtcbn1cbi8qKlxuICogQ2hlY2sgaWYgZ2l2ZW4gbm9kZSB2YWx1ZSBzdGFydHMgd2l0aCBibG9jay1sZXZlbCB0YWdcbiAqL1xuZnVuY3Rpb24gc3RhcnRzV2l0aEJsb2NrVGFnKHZhbHVlLCBjb25maWcpIHtcbiAgICBpZiAodmFsdWUubGVuZ3RoICYmIHR5cGVvZiB2YWx1ZVswXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGh0bWxUYWdSZWdleC5leGVjKHZhbHVlWzBdKTtcbiAgICAgICAgaWYgKChtYXRjaGVzID09PSBudWxsIHx8IG1hdGNoZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1hdGNoZXMubGVuZ3RoKSAmJiAhY29uZmlnLm9wdGlvbnNbJ2lubGluZUVsZW1lbnRzJ10uaW5jbHVkZXMobWF0Y2hlc1sxXS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBpbmRlbnRGb3JtYXQoYWJiciwgY29uZmlnLCBvcHRpb25zKSB7XG4gICAgY29uc3Qgc3RhdGUgPSBjcmVhdGVXYWxrU3RhdGUoY29uZmlnKTtcbiAgICBzdGF0ZS5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB3YWxrJDEoYWJiciwgZWxlbWVudCQxLCBzdGF0ZSk7XG4gICAgcmV0dXJuIHN0YXRlLm91dC52YWx1ZTtcbn1cbi8qKlxuICogT3V0cHV0cyBgbm9kZWAgY29udGVudCB0byBvdXRwdXQgc3RyZWFtIG9mIGBzdGF0ZWBcbiAqIEBwYXJhbSBub2RlIENvbnRleHQgbm9kZVxuICogQHBhcmFtIGluZGV4IEluZGV4IG9mIGBub2RlYCBpbiBgaXRlbXNgXG4gKiBAcGFyYW0gaXRlbXMgTGlzdCBvZiBgbm9kZWDigJlzIHNpYmxpbmdzXG4gKiBAcGFyYW0gc3RhdGUgQ3VycmVudCB3YWxrIHN0YXRlXG4gKi9cbmZ1bmN0aW9uIGVsZW1lbnQkMShub2RlLCBpbmRleCwgaXRlbXMsIHN0YXRlLCBuZXh0KSB7XG4gICAgY29uc3QgeyBvdXQsIG9wdGlvbnMgfSA9IHN0YXRlO1xuICAgIGNvbnN0IHsgcHJpbWFyeSwgc2Vjb25kYXJ5IH0gPSBjb2xsZWN0QXR0cmlidXRlcyhub2RlKTtcbiAgICAvLyBQaWNrIG9mZnNldCBsZXZlbCBmb3IgY3VycmVudCBub2RlXG4gICAgY29uc3QgbGV2ZWwgPSBzdGF0ZS5wYXJlbnQgPyAxIDogMDtcbiAgICBvdXQubGV2ZWwgKz0gbGV2ZWw7XG4gICAgLy8gRG8gbm90IGluZGVudCB0b3AtbGV2ZWwgZWxlbWVudHNcbiAgICBpZiAoc2hvdWxkRm9ybWF0JDEobm9kZSwgaW5kZXgsIGl0ZW1zLCBzdGF0ZSkpIHtcbiAgICAgICAgcHVzaE5ld2xpbmUob3V0LCB0cnVlKTtcbiAgICB9XG4gICAgaWYgKG5vZGUubmFtZSAmJiAobm9kZS5uYW1lICE9PSAnZGl2JyB8fCAhcHJpbWFyeS5sZW5ndGgpKSB7XG4gICAgICAgIHB1c2hTdHJpbmcob3V0LCAob3B0aW9ucy5iZWZvcmVOYW1lIHx8ICcnKSArIG5vZGUubmFtZSArIChvcHRpb25zLmFmdGVyTmFtZSB8fCAnJykpO1xuICAgIH1cbiAgICBwdXNoUHJpbWFyeUF0dHJpYnV0ZXMocHJpbWFyeSwgc3RhdGUpO1xuICAgIHB1c2hTZWNvbmRhcnlBdHRyaWJ1dGVzKHNlY29uZGFyeS5maWx0ZXIoc2hvdWxkT3V0cHV0QXR0cmlidXRlKSwgc3RhdGUpO1xuICAgIGlmIChub2RlLnNlbGZDbG9zaW5nICYmICFub2RlLnZhbHVlICYmICFub2RlLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICBpZiAoc3RhdGUub3B0aW9ucy5zZWxmQ2xvc2UpIHtcbiAgICAgICAgICAgIHB1c2hTdHJpbmcob3V0LCBzdGF0ZS5vcHRpb25zLnNlbGZDbG9zZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHB1c2hWYWx1ZShub2RlLCBzdGF0ZSk7XG4gICAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaChuZXh0KTtcbiAgICB9XG4gICAgb3V0LmxldmVsIC09IGxldmVsO1xufVxuLyoqXG4gKiBGcm9tIGdpdmVuIG5vZGUsIGNvbGxlY3RzIGFsbCBhdHRyaWJ1dGVzIGFzIGBwcmltYXJ5YCAoaWQsIGNsYXNzKSBhbmRcbiAqIGBzZWNvbmRhcnlgIChhbGwgdGhlIHJlc3QpIGxpc3RzLiBJbiBtb3N0IGluZGVudC1iYXNlZCBzeW50YXhlcywgcHJpbWFyeSBhdHRyaWJ1dGVcbiAqIGhhcyBzcGVjaWFsIHN5bnRheFxuICovXG5mdW5jdGlvbiBjb2xsZWN0QXR0cmlidXRlcyhub2RlKSB7XG4gICAgY29uc3QgcHJpbWFyeSA9IFtdO1xuICAgIGNvbnN0IHNlY29uZGFyeSA9IFtdO1xuICAgIGlmIChub2RlLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgZm9yIChjb25zdCBhdHRyIG9mIG5vZGUuYXR0cmlidXRlcykge1xuICAgICAgICAgICAgaWYgKGlzUHJpbWFyeUF0dHJpYnV0ZShhdHRyKSkge1xuICAgICAgICAgICAgICAgIHByaW1hcnkucHVzaChhdHRyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlY29uZGFyeS5wdXNoKGF0dHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHByaW1hcnksIHNlY29uZGFyeSB9O1xufVxuLyoqXG4gKiBPdXRwdXRzIGdpdmVuIGF0dHJpYnV0ZXMgYXMgcHJpbWFyeSBpbnRvIG91dHB1dCBzdHJlYW1cbiAqL1xuZnVuY3Rpb24gcHVzaFByaW1hcnlBdHRyaWJ1dGVzKGF0dHJzLCBzdGF0ZSkge1xuICAgIGZvciAoY29uc3QgYXR0ciBvZiBhdHRycykge1xuICAgICAgICBpZiAoYXR0ci52YWx1ZSkge1xuICAgICAgICAgICAgaWYgKGF0dHIubmFtZSA9PT0gJ2NsYXNzJykge1xuICAgICAgICAgICAgICAgIHB1c2hTdHJpbmcoc3RhdGUub3V0LCAnLicpO1xuICAgICAgICAgICAgICAgIC8vIEFsbCB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMgbXVzdCBiZSByZXBsYWNlZCB3aXRoIGRvdHMgaW4gY2xhc3MgbmFtZXNcbiAgICAgICAgICAgICAgICBjb25zdCB0b2tlbnMgPSBhdHRyLnZhbHVlLm1hcCh0ID0+IHR5cGVvZiB0ID09PSAnc3RyaW5nJyA/IHQucmVwbGFjZSgvXFxzKy9nLCAnLicpIDogdCk7XG4gICAgICAgICAgICAgICAgcHVzaFRva2Vucyh0b2tlbnMsIHN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIElEIGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgIHB1c2hTdHJpbmcoc3RhdGUub3V0LCAnIycpO1xuICAgICAgICAgICAgICAgIHB1c2hUb2tlbnMoYXR0ci52YWx1ZSwgc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLyoqXG4gKiBPdXRwdXRzIGdpdmVuIGF0dHJpYnV0ZXMgYXMgc2Vjb25kYXJ5IGludG8gb3V0cHV0IHN0cmVhbVxuICovXG5mdW5jdGlvbiBwdXNoU2Vjb25kYXJ5QXR0cmlidXRlcyhhdHRycywgc3RhdGUpIHtcbiAgICBpZiAoYXR0cnMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHsgb3V0LCBjb25maWcsIG9wdGlvbnMgfSA9IHN0YXRlO1xuICAgICAgICBvcHRpb25zLmJlZm9yZUF0dHJpYnV0ZSAmJiBwdXNoU3RyaW5nKG91dCwgb3B0aW9ucy5iZWZvcmVBdHRyaWJ1dGUpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBhdHRyID0gYXR0cnNbaV07XG4gICAgICAgICAgICBwdXNoU3RyaW5nKG91dCwgYXR0ck5hbWUoYXR0ci5uYW1lIHx8ICcnLCBjb25maWcpKTtcbiAgICAgICAgICAgIGlmIChpc0Jvb2xlYW5BdHRyaWJ1dGUoYXR0ciwgY29uZmlnKSAmJiAhYXR0ci52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICghY29uZmlnLm9wdGlvbnNbJ291dHB1dC5jb21wYWN0Qm9vbGVhbiddICYmIG9wdGlvbnMuYm9vbGVhblZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHB1c2hTdHJpbmcob3V0LCAnPScgKyBvcHRpb25zLmJvb2xlYW5WYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcHVzaFN0cmluZyhvdXQsICc9JyArIGF0dHJRdW90ZShhdHRyLCBjb25maWcsIHRydWUpKTtcbiAgICAgICAgICAgICAgICBwdXNoVG9rZW5zKGF0dHIudmFsdWUgfHwgY2FyZXQsIHN0YXRlKTtcbiAgICAgICAgICAgICAgICBwdXNoU3RyaW5nKG91dCwgYXR0clF1b3RlKGF0dHIsIGNvbmZpZykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGkgIT09IGF0dHJzLmxlbmd0aCAtIDEgJiYgb3B0aW9ucy5nbHVlQXR0cmlidXRlKSB7XG4gICAgICAgICAgICAgICAgcHVzaFN0cmluZyhvdXQsIG9wdGlvbnMuZ2x1ZUF0dHJpYnV0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9ucy5hZnRlckF0dHJpYnV0ZSAmJiBwdXNoU3RyaW5nKG91dCwgb3B0aW9ucy5hZnRlckF0dHJpYnV0ZSk7XG4gICAgfVxufVxuLyoqXG4gKiBPdXRwdXRzIGdpdmVuIG5vZGUgdmFsdWUgaW50byBzdGF0ZSBvdXRwdXQgc3RyZWFtXG4gKi9cbmZ1bmN0aW9uIHB1c2hWYWx1ZShub2RlLCBzdGF0ZSkge1xuICAgIC8vIFdlIHNob3VsZCBlaXRoZXIgb3V0cHV0IHZhbHVlIG9yIGFkZCBjYXJldCBidXQgZm9yIGxlYWYgbm9kZXMgb25seSAobm8gY2hpbGRyZW4pXG4gICAgaWYgKCFub2RlLnZhbHVlICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdmFsdWUgPSBub2RlLnZhbHVlIHx8IGNhcmV0O1xuICAgIGNvbnN0IGxpbmVzID0gc3BsaXRCeUxpbmVzJDEodmFsdWUpO1xuICAgIGNvbnN0IHsgb3V0LCBvcHRpb25zIH0gPSBzdGF0ZTtcbiAgICBpZiAobGluZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGlmIChub2RlLm5hbWUgfHwgbm9kZS5hdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBwdXNoKG91dCwgJyAnKTtcbiAgICAgICAgfVxuICAgICAgICBwdXNoVG9rZW5zKHZhbHVlLCBzdGF0ZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBXZSBzaG91bGQgZm9ybWF0IG11bHRpLWxpbmUgdmFsdWUgd2l0aCB0ZXJtaW5hdGluZyBgfGAgY2hhcmFjdGVyXG4gICAgICAgIC8vIGFuZCBzYW1lIGxpbmUgbGVuZ3RoXG4gICAgICAgIGNvbnN0IGxpbmVMZW5ndGhzID0gW107XG4gICAgICAgIGxldCBtYXhMZW5ndGggPSAwO1xuICAgICAgICAvLyBDYWxjdWxhdGUgbGVuZ3RocyBvZiBhbGwgbGluZXMgYW5kIG1heCBsaW5lIGxlbmd0aFxuICAgICAgICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGxlbiA9IHZhbHVlTGVuZ3RoKGxpbmUpO1xuICAgICAgICAgICAgbGluZUxlbmd0aHMucHVzaChsZW4pO1xuICAgICAgICAgICAgaWYgKGxlbiA+IG1heExlbmd0aCkge1xuICAgICAgICAgICAgICAgIG1heExlbmd0aCA9IGxlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBPdXRwdXQgZWFjaCBsaW5lLCBwYWRkZWQgdG8gbWF4IGxlbmd0aFxuICAgICAgICBvdXQubGV2ZWwrKztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcHVzaE5ld2xpbmUob3V0LCB0cnVlKTtcbiAgICAgICAgICAgIG9wdGlvbnMuYmVmb3JlVGV4dExpbmUgJiYgcHVzaChvdXQsIG9wdGlvbnMuYmVmb3JlVGV4dExpbmUpO1xuICAgICAgICAgICAgcHVzaFRva2VucyhsaW5lc1tpXSwgc3RhdGUpO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuYWZ0ZXJUZXh0TGluZSkge1xuICAgICAgICAgICAgICAgIHB1c2gob3V0LCAnICcucmVwZWF0KG1heExlbmd0aCAtIGxpbmVMZW5ndGhzW2ldKSk7XG4gICAgICAgICAgICAgICAgcHVzaChvdXQsIG9wdGlvbnMuYWZ0ZXJUZXh0TGluZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgb3V0LmxldmVsLS07XG4gICAgfVxufVxuZnVuY3Rpb24gaXNQcmltYXJ5QXR0cmlidXRlKGF0dHIpIHtcbiAgICByZXR1cm4gYXR0ci5uYW1lID09PSAnY2xhc3MnIHx8IGF0dHIubmFtZSA9PT0gJ2lkJztcbn1cbi8qKlxuICogQ2FsY3VsYXRlcyBzdHJpbmcgbGVuZ3RoIGZyb20gZ2l2ZW4gdG9rZW5zXG4gKi9cbmZ1bmN0aW9uIHZhbHVlTGVuZ3RoKHRva2Vucykge1xuICAgIGxldCBsZW4gPSAwO1xuICAgIGZvciAoY29uc3QgdG9rZW4gb2YgdG9rZW5zKSB7XG4gICAgICAgIGxlbiArPSB0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnID8gdG9rZW4ubGVuZ3RoIDogdG9rZW4ubmFtZS5sZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiBsZW47XG59XG5mdW5jdGlvbiBzaG91bGRGb3JtYXQkMShub2RlLCBpbmRleCwgaXRlbXMsIHN0YXRlKSB7XG4gICAgLy8gRG8gbm90IGZvcm1hdCBmaXJzdCB0b3AtbGV2ZWwgZWxlbWVudCBvciBzbmlwcGV0c1xuICAgIGlmICghc3RhdGUucGFyZW50ICYmIGluZGV4ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuICFpc1NuaXBwZXQobm9kZSk7XG59XG5cbmZ1bmN0aW9uIGhhbWwoYWJiciwgY29uZmlnKSB7XG4gICAgcmV0dXJuIGluZGVudEZvcm1hdChhYmJyLCBjb25maWcsIHtcbiAgICAgICAgYmVmb3JlTmFtZTogJyUnLFxuICAgICAgICBiZWZvcmVBdHRyaWJ1dGU6ICcoJyxcbiAgICAgICAgYWZ0ZXJBdHRyaWJ1dGU6ICcpJyxcbiAgICAgICAgZ2x1ZUF0dHJpYnV0ZTogJyAnLFxuICAgICAgICBhZnRlclRleHRMaW5lOiAnIHwnLFxuICAgICAgICBib29sZWFuVmFsdWU6ICd0cnVlJyxcbiAgICAgICAgc2VsZkNsb3NlOiAnLydcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gc2xpbShhYmJyLCBjb25maWcpIHtcbiAgICByZXR1cm4gaW5kZW50Rm9ybWF0KGFiYnIsIGNvbmZpZywge1xuICAgICAgICBiZWZvcmVBdHRyaWJ1dGU6ICcgJyxcbiAgICAgICAgZ2x1ZUF0dHJpYnV0ZTogJyAnLFxuICAgICAgICBiZWZvcmVUZXh0TGluZTogJ3wgJyxcbiAgICAgICAgc2VsZkNsb3NlOiAnLydcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gcHVnKGFiYnIsIGNvbmZpZykge1xuICAgIHJldHVybiBpbmRlbnRGb3JtYXQoYWJiciwgY29uZmlnLCB7XG4gICAgICAgIGJlZm9yZUF0dHJpYnV0ZTogJygnLFxuICAgICAgICBhZnRlckF0dHJpYnV0ZTogJyknLFxuICAgICAgICBnbHVlQXR0cmlidXRlOiAnLCAnLFxuICAgICAgICBiZWZvcmVUZXh0TGluZTogJ3wgJyxcbiAgICAgICAgc2VsZkNsb3NlOiBjb25maWcub3B0aW9uc1snb3V0cHV0LnNlbGZDbG9zaW5nU3R5bGUnXSA9PT0gJ3htbCcgPyAnLycgOiAnJ1xuICAgIH0pO1xufVxuXG5jb25zdCBmb3JtYXR0ZXJzID0geyBodG1sLCBoYW1sLCBzbGltLCBwdWcgfTtcbi8qKlxuICogUGFyc2VzIGdpdmVuIEVtbWV0IGFiYnJldmlhdGlvbiBpbnRvIGEgZmluYWwgYWJicmV2aWF0aW9uIHRyZWUgd2l0aCBhbGxcbiAqIHJlcXVpcmVkIHRyYW5zZm9ybWF0aW9ucyBhcHBsaWVkXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKGFiYnIsIGNvbmZpZykge1xuICAgIGxldCBvbGRUZXh0VmFsdWU7XG4gICAgaWYgKHR5cGVvZiBhYmJyID09PSAnc3RyaW5nJykge1xuICAgICAgICBsZXQgcGFyc2VPcHQgPSBjb25maWc7XG4gICAgICAgIGlmIChjb25maWcub3B0aW9uc1snanN4LmVuYWJsZWQnXSkge1xuICAgICAgICAgICAgcGFyc2VPcHQgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHBhcnNlT3B0KSwgeyBqc3g6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbmZpZy5vcHRpb25zWydtYXJrdXAuaHJlZiddKSB7XG4gICAgICAgICAgICBwYXJzZU9wdCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VPcHQpLCB7IGhyZWY6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICAgICAgYWJiciA9IHBhcnNlQWJicmV2aWF0aW9uKGFiYnIsIHBhcnNlT3B0KTtcbiAgICAgICAgLy8gcmVtb3ZlIHRleHQgZmllbGQgYmVmb3JlIHNuaXBwZXRzKGFiYnIsIGNvbmZpZykgY2FsbFxuICAgICAgICAvLyBhcyBhYmJyZXZpYXRpb24oYWJiciwgcGFyc2VPcHQpIGFscmVhZHkgaGFuZGxlZCBpdFxuICAgICAgICBvbGRUZXh0VmFsdWUgPSBjb25maWcudGV4dDtcbiAgICAgICAgY29uZmlnLnRleHQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8vIFJ1biBhYmJyZXZpYXRpb24gcmVzb2x2ZSBpbiB0d28gcGFzc2VzOlxuICAgIC8vIDEuIE1hcCBlYWNoIG5vZGUgdG8gc25pcHBldHMsIHdoaWNoIGFyZSBhYmJyZXZpYXRpb25zIGFzIHdlbGwuIEEgc2luZ2xlIHNuaXBwZXRcbiAgICAvLyBtYXkgcHJvZHVjZSBtdWx0aXBsZSBub2Rlc1xuICAgIC8vIDIuIFRyYW5zZm9ybSBldmVyeSByZXNvbHZlZCBub2RlXG4gICAgYWJiciA9IHJlc29sdmVTbmlwcGV0cyhhYmJyLCBjb25maWcpO1xuICAgIHdhbGsoYWJiciwgdHJhbnNmb3JtLCBjb25maWcpO1xuICAgIGNvbmZpZy50ZXh0ID0gb2xkVGV4dFZhbHVlICE9PSBudWxsICYmIG9sZFRleHRWYWx1ZSAhPT0gdm9pZCAwID8gb2xkVGV4dFZhbHVlIDogY29uZmlnLnRleHQ7XG4gICAgcmV0dXJuIGFiYnI7XG59XG4vKipcbiAqIENvbnZlcnRzIGdpdmVuIGFiYnJldmlhdGlvbiB0byBzdHJpbmcgYWNjb3JkaW5nIHRvIHByb3ZpZGVkIGBjb25maWdgXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ2lmeShhYmJyLCBjb25maWcpIHtcbiAgICBjb25zdCBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW2NvbmZpZy5zeW50YXhdIHx8IGh0bWw7XG4gICAgcmV0dXJuIGZvcm1hdHRlcihhYmJyLCBjb25maWcpO1xufVxuLyoqXG4gKiBNb2RpZmllcyBnaXZlbiBub2RlIGFuZCBwcmVwYXJlcyBpdCBmb3Igb3V0cHV0XG4gKi9cbmZ1bmN0aW9uIHRyYW5zZm9ybShub2RlLCBhbmNlc3RvcnMsIGNvbmZpZykge1xuICAgIGltcGxpY2l0VGFnKG5vZGUsIGFuY2VzdG9ycywgY29uZmlnKTtcbiAgICBtZXJnZUF0dHJpYnV0ZXMobm9kZSwgY29uZmlnKTtcbiAgICBsb3JlbShub2RlLCBhbmNlc3RvcnMsIGNvbmZpZyk7XG4gICAgaWYgKGNvbmZpZy5zeW50YXggPT09ICd4c2wnKSB7XG4gICAgICAgIHhzbChub2RlKTtcbiAgICB9XG4gICAgaWYgKGNvbmZpZy5vcHRpb25zWydqc3guZW5hYmxlZCddKSB7XG4gICAgICAgIGpzeChub2RlKTtcbiAgICB9XG4gICAgaWYgKGNvbmZpZy5vcHRpb25zWydiZW0uZW5hYmxlZCddKSB7XG4gICAgICAgIGJlbShub2RlLCBhbmNlc3RvcnMsIGNvbmZpZyk7XG4gICAgfVxufVxuXG5jb25zdCByZVByb3BlcnR5ID0gL14oW2Etei1dKykoPzpcXHMqOlxccyooW15cXG5cXHI7XSs/KTsqKT8kLztcbmNvbnN0IG9wdCA9IHsgdmFsdWU6IHRydWUgfTtcbi8qKlxuICogQ3JlYXRlcyBzdHJ1Y3R1cmUgZm9yIGhvbGRpbmcgcmVzb2x2ZWQgQ1NTIHNuaXBwZXRcbiAqL1xuZnVuY3Rpb24gY3JlYXRlU25pcHBldChrZXksIHZhbHVlKSB7XG4gICAgLy8gQSBzbmlwcGV0IGNvdWxkIGJlIGEgcmF3IHRleHQgc25pcHBldCAoZS5nLiBhcmJpdHJhcnkgdGV4dCBzdHJpbmcpIG9yIGFcbiAgICAvLyBDU1MgcHJvcGVydHkgd2l0aCBwb3NzaWJsZSB2YWx1ZXMgc2VwYXJhdGVkIGJ5IGB8YC5cbiAgICAvLyBJbiBsYXR0ZXIgY2FzZSwgd2UgaGF2ZSB0byBwYXJzZSBzbmlwcGV0IGFzIENTUyBhYmJyZXZpYXRpb25cbiAgICBjb25zdCBtID0gdmFsdWUubWF0Y2gocmVQcm9wZXJ0eSk7XG4gICAgaWYgKG0pIHtcbiAgICAgICAgY29uc3Qga2V5d29yZHMgPSB7fTtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gbVsyXSA/IG1bMl0uc3BsaXQoJ3wnKS5tYXAocGFyc2VWYWx1ZSkgOiBbXTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHBhcnNlZCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBjc3NWYWwgb2YgaXRlbSkge1xuICAgICAgICAgICAgICAgIGNvbGxlY3RLZXl3b3Jkcyhjc3NWYWwsIGtleXdvcmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogXCJQcm9wZXJ0eVwiIC8qIFByb3BlcnR5ICovLFxuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgcHJvcGVydHk6IG1bMV0sXG4gICAgICAgICAgICB2YWx1ZTogcGFyc2VkLFxuICAgICAgICAgICAga2V5d29yZHMsXG4gICAgICAgICAgICBkZXBlbmRlbmNpZXM6IFtdXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7IHR5cGU6IFwiUmF3XCIgLyogUmF3ICovLCBrZXksIHZhbHVlIH07XG59XG4vKipcbiAqIE5lc3RzIG1vcmUgc3BlY2lmaWMgQ1NTIHByb3BlcnRpZXMgaW50byBzaG9ydGhhbmQgb25lcywgZS5nLlxuICogYGJhY2tncm91bmQtcG9zaXRpb24teGAgLT4gYGJhY2tncm91bmQtcG9zaXRpb25gIC0+IGBiYWNrZ3JvdW5kYFxuICovXG5mdW5jdGlvbiBuZXN0KHNuaXBwZXRzKSB7XG4gICAgc25pcHBldHMgPSBzbmlwcGV0cy5zbGljZSgpLnNvcnQoc25pcHBldHNTb3J0KTtcbiAgICBjb25zdCBzdGFjayA9IFtdO1xuICAgIGxldCBwcmV2O1xuICAgIC8vIEZvciBzb3J0ZWQgbGlzdCBvZiBDU1MgcHJvcGVydGllcywgY3JlYXRlIGRlcGVuZGVuY3kgZ3JhcGggd2hlcmUgZWFjaFxuICAgIC8vIHNob3J0aGFuZCBwcm9wZXJ0eSBjb250YWlucyBpdHMgbW9yZSBzcGVjaWZpYyBvbmUsIGUuZy5cbiAgICAvLyBiYWNrZ3JvdW5kIC0+IGJhY2tncm91bmQtcG9zaXRpb24gLT4gYmFja2dyb3VuZC1wb3NpdGlvbi14XG4gICAgZm9yIChjb25zdCBjdXIgb2Ygc25pcHBldHMuZmlsdGVyKGlzUHJvcGVydHkpKSB7XG4gICAgICAgIC8vIENoZWNrIGlmIGN1cnJlbnQgcHJvcGVydHkgYmVsb25ncyB0byBvbmUgZnJvbSBwYXJlbnQgc3RhY2suXG4gICAgICAgIC8vIFNpbmNlIGBzbmlwcGV0c2AgYXJyYXkgaXMgc29ydGVkLCBpdGVtcyBhcmUgcGVyZmVjdGx5IGFsaWduZWRcbiAgICAgICAgLy8gZnJvbSBzaG9ydGhhbmRzIHRvIG1vcmUgc3BlY2lmaWMgdmFyaWFudHNcbiAgICAgICAgd2hpbGUgKHN0YWNrLmxlbmd0aCkge1xuICAgICAgICAgICAgcHJldiA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgaWYgKGN1ci5wcm9wZXJ0eS5zdGFydHNXaXRoKHByZXYucHJvcGVydHkpXG4gICAgICAgICAgICAgICAgJiYgY3VyLnByb3BlcnR5LmNoYXJDb2RlQXQocHJldi5wcm9wZXJ0eS5sZW5ndGgpID09PSA0NSAvKiAtICovKSB7XG4gICAgICAgICAgICAgICAgcHJldi5kZXBlbmRlbmNpZXMucHVzaChjdXIpO1xuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goY3VyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YWNrLnBvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc3RhY2subGVuZ3RoKSB7XG4gICAgICAgICAgICBzdGFjay5wdXNoKGN1cik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNuaXBwZXRzO1xufVxuLyoqXG4gKiBBIHNvcnRpbmcgZnVuY3Rpb24gZm9yIGFycmF5IG9mIHNuaXBwZXRzXG4gKi9cbmZ1bmN0aW9uIHNuaXBwZXRzU29ydChhLCBiKSB7XG4gICAgaWYgKGEua2V5ID09PSBiLmtleSkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgcmV0dXJuIGEua2V5IDwgYi5rZXkgPyAtMSA6IDE7XG59XG5mdW5jdGlvbiBwYXJzZVZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHBhcnNlJDIodmFsdWUudHJpbSgpLCBvcHQpWzBdLnZhbHVlO1xufVxuZnVuY3Rpb24gaXNQcm9wZXJ0eShzbmlwcGV0KSB7XG4gICAgcmV0dXJuIHNuaXBwZXQudHlwZSA9PT0gXCJQcm9wZXJ0eVwiIC8qIFByb3BlcnR5ICovO1xufVxuZnVuY3Rpb24gY29sbGVjdEtleXdvcmRzKGNzc1ZhbCwgZGVzdCkge1xuICAgIGZvciAoY29uc3QgdiBvZiBjc3NWYWwudmFsdWUpIHtcbiAgICAgICAgaWYgKHYudHlwZSA9PT0gJ0xpdGVyYWwnKSB7XG4gICAgICAgICAgICBkZXN0W3YudmFsdWVdID0gdjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2LnR5cGUgPT09ICdGdW5jdGlvbkNhbGwnKSB7XG4gICAgICAgICAgICBkZXN0W3YubmFtZV0gPSB2O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHYudHlwZSA9PT0gJ0ZpZWxkJykge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGxpdGVyYWwgZnJvbSBmaWVsZCwgaWYgYXZhaWxhYmxlXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHYubmFtZS50cmltKCk7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBkZXN0W3ZhbHVlXSA9IHsgdHlwZTogJ0xpdGVyYWwnLCB2YWx1ZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgaG93IGNsb3NlIGBzdHIxYCBtYXRjaGVzIGBzdHIyYCB1c2luZyBmdXp6eSBtYXRjaC5cbiAqIEhvdyBtYXRjaGluZyB3b3JrczpcbiAqIOKAkyBmaXJzdCBjaGFyYWN0ZXJzIG9mIGJvdGggYHN0cjFgIGFuZCBgc3RyMmAgKm11c3QqIG1hdGNoXG4gKiDigJMgYHN0cjFgIGxlbmd0aCBsYXJnZXIgdGhhbiBgc3RyMmAgbGVuZ3RoIGlzIGFsbG93ZWQgb25seSB3aGVuIGB1bm1hdGNoZWRgIGlzIHRydWVcbiAqIOKAkyBpZGVhbCBtYXRjaCBpcyB3aGVuIGBzdHIxYCBlcXVhbHMgdG8gYHN0cjJgIChzY29yZTogMSlcbiAqIOKAkyBuZXh0IGJlc3QgbWF0Y2ggaXMgYHN0cjJgIHN0YXJ0cyB3aXRoIGBzdHIxYCAoc2NvcmU6IDEgw5cgcGVyY2VudCBvZiBtYXRjaGVkIGNoYXJhY3RlcnMpXG4gKiDigJMgb3RoZXIgc2NvcmVzIGRlcGVuZCBvbiBob3cgY2xvc2UgY2hhcmFjdGVycyBvZiBgc3RyMWAgdG8gdGhlIGJlZ2lubmluZyBvZiBgc3RyMmBcbiAqIEBwYXJhbSBwYXJ0aWFsTWF0Y2ggQWxsb3cgbGVuZ3RoIGBzdHIxYCB0byBiZSBncmVhdGVyIHRoYW4gYHN0cjJgIGxlbmd0aFxuICovXG5mdW5jdGlvbiBzY29yZU1hdGNoKHN0cjEsIHN0cjIsIHBhcnRpYWxNYXRjaCA9IGZhbHNlKSB7XG4gICAgc3RyMSA9IHN0cjEudG9Mb3dlckNhc2UoKTtcbiAgICBzdHIyID0gc3RyMi50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChzdHIxID09PSBzdHIyKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICAvLyBCb3RoIHN0cmluZ3MgTVVTVCBzdGFydCB3aXRoIHRoZSBzYW1lIGNoYXJhY3RlclxuICAgIGlmICghc3RyMSB8fCAhc3RyMiB8fCBzdHIxLmNoYXJDb2RlQXQoMCkgIT09IHN0cjIuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgY29uc3Qgc3RyMUxlbiA9IHN0cjEubGVuZ3RoO1xuICAgIGNvbnN0IHN0cjJMZW4gPSBzdHIyLmxlbmd0aDtcbiAgICBpZiAoIXBhcnRpYWxNYXRjaCAmJiBzdHIxTGVuID4gc3RyMkxlbikge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgLy8gQ2hhcmFjdGVycyBmcm9tIGBzdHIxYCB3aGljaCBhcmUgY2xvc2VyIHRvIHRoZSBiZWdpbm5pbmcgb2YgYSBgc3RyMmAgc2hvdWxkXG4gICAgLy8gaGF2ZSBoaWdoZXIgc2NvcmUuXG4gICAgLy8gRm9yIGV4YW1wbGUsIGlmIGBzdHIyYCBpcyBgYWJjZGVgLCBpdOKAmXMgbWF4IHNjb3JlIGlzOlxuICAgIC8vIDUgKyA0ICsgMyArIDIgKyAxID0gMTUgKHN1bSBvZiBjaGFyYWN0ZXIgcG9zaXRpb25zIGluIHJldmVyc2Ugb3JkZXIpXG4gICAgLy8gTWF0Y2hpbmcgYGFiZGAgYWdhaW5zdCBgYWJjZGVgIHNob3VsZCBwcm9kdWNlOlxuICAgIC8vIDUgKyA0ICsgMiA9IDExXG4gICAgLy8gQWNyb255bSBib251cyBmb3IgbWF0Y2ggcmlnaHQgYWZ0ZXIgYC1gLiBNYXRjaGluZyBgYWJkYCBhZ2FpbnN0IGBhYmMtZGVgXG4gICAgLy8gc2hvdWxkIHByb2R1Y2U6XG4gICAgLy8gNiArIDUgKyA0ICh1c2UgYGRgIHBvc2l0aW9uIGluIGBhYmRgLCBub3QgaW4gYWJjLWRlYClcbiAgICBjb25zdCBtaW5MZW5ndGggPSBNYXRoLm1pbihzdHIxTGVuLCBzdHIyTGVuKTtcbiAgICBjb25zdCBtYXhMZW5ndGggPSBNYXRoLm1heChzdHIxTGVuLCBzdHIyTGVuKTtcbiAgICBsZXQgaSA9IDE7XG4gICAgbGV0IGogPSAxO1xuICAgIGxldCBzY29yZSA9IG1heExlbmd0aDtcbiAgICBsZXQgY2gxID0gMDtcbiAgICBsZXQgY2gyID0gMDtcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICBsZXQgYWNyb255bSA9IGZhbHNlO1xuICAgIHdoaWxlIChpIDwgc3RyMUxlbikge1xuICAgICAgICBjaDEgPSBzdHIxLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGZvdW5kID0gZmFsc2U7XG4gICAgICAgIGFjcm9ueW0gPSBmYWxzZTtcbiAgICAgICAgd2hpbGUgKGogPCBzdHIyTGVuKSB7XG4gICAgICAgICAgICBjaDIgPSBzdHIyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICBpZiAoY2gxID09PSBjaDIpIHtcbiAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2NvcmUgKz0gbWF4TGVuZ3RoIC0gKGFjcm9ueW0gPyBpIDogaik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBhZGQgYWNyb255bSBib251cyBmb3IgZXhhY3RseSBuZXh0IG1hdGNoIGFmdGVyIHVubWF0Y2hlZCBgLWBcbiAgICAgICAgICAgIGFjcm9ueW0gPSBjaDIgPT09IDQ1IC8qIC0gKi87XG4gICAgICAgICAgICBqKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICAgICAgaWYgKCFwYXJ0aWFsTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGkrKztcbiAgICB9XG4gICAgY29uc3QgbWF0Y2hSYXRpbyA9IGkgLyBtYXhMZW5ndGg7XG4gICAgY29uc3QgZGVsdGEgPSBtYXhMZW5ndGggLSBtaW5MZW5ndGg7XG4gICAgY29uc3QgbWF4U2NvcmUgPSBzdW0obWF4TGVuZ3RoKSAtIHN1bShkZWx0YSk7XG4gICAgcmV0dXJuIChzY29yZSAqIG1hdGNoUmF0aW8pIC8gbWF4U2NvcmU7XG59XG4vKipcbiAqIENhbGN1bGF0ZXMgc3VtIG9mIGZpcnN0IGBuYCBudW1iZXJzLCBlLmcuIDErMiszKy4uLm5cbiAqL1xuZnVuY3Rpb24gc3VtKG4pIHtcbiAgICByZXR1cm4gbiAqIChuICsgMSkgLyAyO1xufVxuXG5mdW5jdGlvbiBjb2xvcih0b2tlbiwgc2hvcnRIZXgpIHtcbiAgICBpZiAoIXRva2VuLnIgJiYgIXRva2VuLmcgJiYgIXRva2VuLmIgJiYgIXRva2VuLmEpIHtcbiAgICAgICAgcmV0dXJuICd0cmFuc3BhcmVudCc7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRva2VuLmEgPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIGFzSGV4KHRva2VuLCBzaG9ydEhleCk7XG4gICAgfVxuICAgIHJldHVybiBhc1JHQih0b2tlbik7XG59XG4vKipcbiAqIE91dHB1dCBnaXZlbiBjb2xvciBhcyBoZXggdmFsdWVcbiAqIEBwYXJhbSBzaG9ydCBQcm9kdWNlIHNob3J0IHZhbHVlIChlLmcuICNmZmYgaW5zdGVhZCBvZiAjZmZmZmZmKSwgaWYgcG9zc2libGVcbiAqL1xuZnVuY3Rpb24gYXNIZXgodG9rZW4sIHNob3J0KSB7XG4gICAgY29uc3QgZm4gPSAoc2hvcnQgJiYgaXNTaG9ydEhleCh0b2tlbi5yKSAmJiBpc1Nob3J0SGV4KHRva2VuLmcpICYmIGlzU2hvcnRIZXgodG9rZW4uYikpXG4gICAgICAgID8gdG9TaG9ydEhleCA6IHRvSGV4O1xuICAgIHJldHVybiAnIycgKyBmbih0b2tlbi5yKSArIGZuKHRva2VuLmcpICsgZm4odG9rZW4uYik7XG59XG4vKipcbiAqIE91dHB1dCBjdXJyZW50IGNvbG9yIGFzIGByZ2JhPyguLi4pYCBDU1MgY29sb3JcbiAqL1xuZnVuY3Rpb24gYXNSR0IodG9rZW4pIHtcbiAgICBjb25zdCB2YWx1ZXMgPSBbdG9rZW4uciwgdG9rZW4uZywgdG9rZW4uYl07XG4gICAgaWYgKHRva2VuLmEgIT09IDEpIHtcbiAgICAgICAgdmFsdWVzLnB1c2goZnJhYyh0b2tlbi5hLCA4KSk7XG4gICAgfVxuICAgIHJldHVybiBgJHt2YWx1ZXMubGVuZ3RoID09PSAzID8gJ3JnYicgOiAncmdiYSd9KCR7dmFsdWVzLmpvaW4oJywgJyl9KWA7XG59XG5mdW5jdGlvbiBmcmFjKG51bSwgZGlnaXRzID0gNCkge1xuICAgIHJldHVybiBudW0udG9GaXhlZChkaWdpdHMpLnJlcGxhY2UoL1xcLj8wKyQvLCAnJyk7XG59XG5mdW5jdGlvbiBpc1Nob3J0SGV4KGhleCkge1xuICAgIHJldHVybiAhKGhleCAlIDE3KTtcbn1cbmZ1bmN0aW9uIHRvU2hvcnRIZXgobnVtKSB7XG4gICAgcmV0dXJuIChudW0gPj4gNCkudG9TdHJpbmcoMTYpO1xufVxuZnVuY3Rpb24gdG9IZXgobnVtKSB7XG4gICAgcmV0dXJuIHBhZChudW0udG9TdHJpbmcoMTYpLCAyKTtcbn1cbmZ1bmN0aW9uIHBhZCh2YWx1ZSwgbGVuKSB7XG4gICAgd2hpbGUgKHZhbHVlLmxlbmd0aCA8IGxlbikge1xuICAgICAgICB2YWx1ZSA9ICcwJyArIHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGNzcyhhYmJyLCBjb25maWcpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3Qgb3V0ID0gY3JlYXRlT3V0cHV0U3RyZWFtKGNvbmZpZy5vcHRpb25zKTtcbiAgICBjb25zdCBmb3JtYXQgPSBjb25maWcub3B0aW9uc1snb3V0cHV0LmZvcm1hdCddO1xuICAgIGlmICgoKF9hID0gY29uZmlnLmNvbnRleHQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5uYW1lKSA9PT0gXCJAQHNlY3Rpb25cIiAvKiBTZWN0aW9uICovKSB7XG4gICAgICAgIC8vIEZvciBzZWN0aW9uIGNvbnRleHQsIGZpbHRlciBvdXQgdW5tYXRjaGVkIHNuaXBwZXRzXG4gICAgICAgIGFiYnIgPSBhYmJyLmZpbHRlcihub2RlID0+IG5vZGUuc25pcHBldCk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWJici5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZm9ybWF0ICYmIGkgIT09IDApIHtcbiAgICAgICAgICAgIHB1c2hOZXdsaW5lKG91dCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvcGVydHkoYWJicltpXSwgb3V0LCBjb25maWcpO1xuICAgIH1cbiAgICByZXR1cm4gb3V0LnZhbHVlO1xufVxuLyoqXG4gKiBPdXRwdXRzIGdpdmVuIGFiYnJldmlhdGlvbiBub2RlIGludG8gb3V0cHV0IHN0cmVhbVxuICovXG5mdW5jdGlvbiBwcm9wZXJ0eShub2RlLCBvdXQsIGNvbmZpZykge1xuICAgIGNvbnN0IGlzSlNPTiA9IGNvbmZpZy5vcHRpb25zWydzdHlsZXNoZWV0Lmpzb24nXTtcbiAgICBpZiAobm9kZS5uYW1lKSB7XG4gICAgICAgIC8vIEl04oCZcyBhIENTUyBwcm9wZXJ0eVxuICAgICAgICBjb25zdCBuYW1lID0gaXNKU09OID8gdG9DYW1lbENhc2Uobm9kZS5uYW1lKSA6IG5vZGUubmFtZTtcbiAgICAgICAgcHVzaFN0cmluZyhvdXQsIG5hbWUgKyBjb25maWcub3B0aW9uc1snc3R5bGVzaGVldC5iZXR3ZWVuJ10pO1xuICAgICAgICBpZiAobm9kZS52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHByb3BlcnR5VmFsdWUobm9kZSwgb3V0LCBjb25maWcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcHVzaEZpZWxkKG91dCwgMCwgJycpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0pTT04pIHtcbiAgICAgICAgICAgIC8vIEZvciBDU1MtaW4tSlMsIGFsd2F5cyBmaW5hbGl6ZSBwcm9wZXJ0eSB3aXRoIGNvbW1hXG4gICAgICAgICAgICAvLyBOQjogc2VlbXMgbGlrZSBgaW1wb3J0YW50YCBpcyBub3QgYXZhaWxhYmxlIGluIENTUy1pbi1KUyBzeW50YXhlc1xuICAgICAgICAgICAgcHVzaChvdXQsICcsJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvdXRwdXRJbXBvcnRhbnQobm9kZSwgb3V0LCB0cnVlKTtcbiAgICAgICAgICAgIHB1c2gob3V0LCBjb25maWcub3B0aW9uc1snc3R5bGVzaGVldC5hZnRlciddKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gSXTigJlzIGEgcmVndWxhciBzbmlwcGV0LCBvdXRwdXQgcGxhaW4gdG9rZW5zIHdpdGhvdXQgYW55IGFkZGl0aW9uYWwgZm9ybWF0dGluZ1xuICAgICAgICBmb3IgKGNvbnN0IGNzc1ZhbCBvZiBub2RlLnZhbHVlKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHYgb2YgY3NzVmFsLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0VG9rZW4odiwgb3V0LCBjb25maWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG91dHB1dEltcG9ydGFudChub2RlLCBvdXQsIG5vZGUudmFsdWUubGVuZ3RoID4gMCk7XG4gICAgfVxufVxuZnVuY3Rpb24gcHJvcGVydHlWYWx1ZShub2RlLCBvdXQsIGNvbmZpZykge1xuICAgIGNvbnN0IGlzSlNPTiA9IGNvbmZpZy5vcHRpb25zWydzdHlsZXNoZWV0Lmpzb24nXTtcbiAgICBjb25zdCBudW0gPSBpc0pTT04gPyBnZXRTaW5nbGVOdW1lcmljKG5vZGUpIDogbnVsbDtcbiAgICBpZiAobnVtICYmICghbnVtLnVuaXQgfHwgbnVtLnVuaXQgPT09ICdweCcpKSB7XG4gICAgICAgIC8vIEZvciBDU1MtaW4tSlMsIGlmIHByb3BlcnR5IGNvbnRhaW5zIHNpbmdsZSBudW1lcmljIHZhbHVlLCBvdXRwdXQgaXRcbiAgICAgICAgLy8gYXMgSlMgbnVtYmVyXG4gICAgICAgIHB1c2gob3V0LCBTdHJpbmcobnVtLnZhbHVlKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBxdW90ZSA9IGdldFF1b3RlKGNvbmZpZyk7XG4gICAgICAgIGlzSlNPTiAmJiBwdXNoKG91dCwgcXVvdGUpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGUudmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgcHVzaChvdXQsICcsICcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3V0cHV0VmFsdWUobm9kZS52YWx1ZVtpXSwgb3V0LCBjb25maWcpO1xuICAgICAgICB9XG4gICAgICAgIGlzSlNPTiAmJiBwdXNoKG91dCwgcXVvdGUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG91dHB1dEltcG9ydGFudChub2RlLCBvdXQsIHNlcGFyYXRvcikge1xuICAgIGlmIChub2RlLmltcG9ydGFudCkge1xuICAgICAgICBpZiAoc2VwYXJhdG9yKSB7XG4gICAgICAgICAgICBwdXNoKG91dCwgJyAnKTtcbiAgICAgICAgfVxuICAgICAgICBwdXNoKG91dCwgJyFpbXBvcnRhbnQnKTtcbiAgICB9XG59XG5mdW5jdGlvbiBvdXRwdXRWYWx1ZSh2YWx1ZSwgb3V0LCBjb25maWcpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgcHJldkVuZCA9IC0xOyBpIDwgdmFsdWUudmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSB2YWx1ZS52YWx1ZVtpXTtcbiAgICAgICAgLy8gSGFuZGxlIGVkZ2UgY2FzZTogYSBmaWVsZCBpcyB3cml0dGVuIGNsb3NlIHRvIHByZXZpb3VzIHRva2VuIGxpa2UgdGhpczogYGZvbyR7YmFyfWAuXG4gICAgICAgIC8vIFdlIHNob3VsZCBub3QgYWRkIGRlbGltaXRlciBoZXJlXG4gICAgICAgIGlmIChpICE9PSAwICYmICh0b2tlbi50eXBlICE9PSAnRmllbGQnIHx8IHRva2VuLnN0YXJ0ICE9PSBwcmV2RW5kKSkge1xuICAgICAgICAgICAgcHVzaChvdXQsICcgJyk7XG4gICAgICAgIH1cbiAgICAgICAgb3V0cHV0VG9rZW4odG9rZW4sIG91dCwgY29uZmlnKTtcbiAgICAgICAgcHJldkVuZCA9IHRva2VuWydlbmQnXTtcbiAgICB9XG59XG5mdW5jdGlvbiBvdXRwdXRUb2tlbih0b2tlbiwgb3V0LCBjb25maWcpIHtcbiAgICBpZiAodG9rZW4udHlwZSA9PT0gJ0NvbG9yVmFsdWUnKSB7XG4gICAgICAgIHB1c2gob3V0LCBjb2xvcih0b2tlbiwgY29uZmlnLm9wdGlvbnNbJ3N0eWxlc2hlZXQuc2hvcnRIZXgnXSkpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0b2tlbi50eXBlID09PSAnTGl0ZXJhbCcpIHtcbiAgICAgICAgcHVzaFN0cmluZyhvdXQsIHRva2VuLnZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodG9rZW4udHlwZSA9PT0gJ051bWJlclZhbHVlJykge1xuICAgICAgICBwdXNoU3RyaW5nKG91dCwgZnJhYyh0b2tlbi52YWx1ZSwgNCkgKyB0b2tlbi51bml0KTtcbiAgICB9XG4gICAgZWxzZSBpZiAodG9rZW4udHlwZSA9PT0gJ1N0cmluZ1ZhbHVlJykge1xuICAgICAgICBjb25zdCBxdW90ZSA9IHRva2VuLnF1b3RlID09PSAnZG91YmxlJyA/ICdcIicgOiAnXFwnJztcbiAgICAgICAgcHVzaFN0cmluZyhvdXQsIHF1b3RlICsgdG9rZW4udmFsdWUgKyBxdW90ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRva2VuLnR5cGUgPT09ICdGaWVsZCcpIHtcbiAgICAgICAgcHVzaEZpZWxkKG91dCwgdG9rZW4uaW5kZXgsIHRva2VuLm5hbWUpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0b2tlbi50eXBlID09PSAnRnVuY3Rpb25DYWxsJykge1xuICAgICAgICBwdXNoKG91dCwgdG9rZW4ubmFtZSArICcoJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9rZW4uYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSkge1xuICAgICAgICAgICAgICAgIHB1c2gob3V0LCAnLCAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG91dHB1dFZhbHVlKHRva2VuLmFyZ3VtZW50c1tpXSwgb3V0LCBjb25maWcpO1xuICAgICAgICB9XG4gICAgICAgIHB1c2gob3V0LCAnKScpO1xuICAgIH1cbn1cbi8qKlxuICogSWYgdmFsdWUgb2YgZ2l2ZW4gcHJvcGVydHkgaXMgYSBzaW5nbGUgbnVtZXJpYyB2YWx1ZSwgcmV0dXJucyB0aGlzIHRva2VuXG4gKi9cbmZ1bmN0aW9uIGdldFNpbmdsZU51bWVyaWMobm9kZSkge1xuICAgIGlmIChub2RlLnZhbHVlLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb25zdCBjc3NWYWwgPSBub2RlLnZhbHVlWzBdO1xuICAgICAgICBpZiAoY3NzVmFsLnZhbHVlLmxlbmd0aCA9PT0gMSAmJiBjc3NWYWwudmFsdWVbMF0udHlwZSA9PT0gJ051bWJlclZhbHVlJykge1xuICAgICAgICAgICAgcmV0dXJuIGNzc1ZhbC52YWx1ZVswXTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8qKlxuICogQ29udmVydHMga2ViYWItY2FzZSBzdHJpbmcgdG8gY2FtZWxDYXNlXG4gKi9cbmZ1bmN0aW9uIHRvQ2FtZWxDYXNlKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFwtKFxcdykvZywgKF8sIGxldHRlcikgPT4gbGV0dGVyLnRvVXBwZXJDYXNlKCkpO1xufVxuZnVuY3Rpb24gZ2V0UXVvdGUoY29uZmlnKSB7XG4gICAgcmV0dXJuIGNvbmZpZy5vcHRpb25zWydzdHlsZXNoZWV0Lmpzb25Eb3VibGVRdW90ZXMnXSA/ICdcIicgOiAnXFwnJztcbn1cblxuY29uc3QgZ3JhZGllbnROYW1lID0gJ2xnJztcbi8qKlxuICogUGFyc2VzIGdpdmVuIEVtbWV0IGFiYnJldmlhdGlvbiBpbnRvIGEgZmluYWwgYWJicmV2aWF0aW9uIHRyZWUgd2l0aCBhbGxcbiAqIHJlcXVpcmVkIHRyYW5zZm9ybWF0aW9ucyBhcHBsaWVkXG4gKi9cbmZ1bmN0aW9uIHBhcnNlJDEoYWJiciwgY29uZmlnKSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IHNuaXBwZXRzID0gKChfYSA9IGNvbmZpZy5jYWNoZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnN0eWxlc2hlZXRTbmlwcGV0cykgfHwgY29udmVydFNuaXBwZXRzKGNvbmZpZy5zbmlwcGV0cyk7XG4gICAgaWYgKGNvbmZpZy5jYWNoZSkge1xuICAgICAgICBjb25maWcuY2FjaGUuc3R5bGVzaGVldFNuaXBwZXRzID0gc25pcHBldHM7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgYWJiciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgYWJiciA9IHBhcnNlJDIoYWJiciwgeyB2YWx1ZTogaXNWYWx1ZVNjb3BlKGNvbmZpZykgfSk7XG4gICAgfVxuICAgIGNvbnN0IGZpbHRlcmVkU25pcHBldHMgPSBnZXRTbmlwcGV0c0ZvclNjb3BlKHNuaXBwZXRzLCBjb25maWcpO1xuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBhYmJyKSB7XG4gICAgICAgIHJlc29sdmVOb2RlKG5vZGUsIGZpbHRlcmVkU25pcHBldHMsIGNvbmZpZyk7XG4gICAgfVxuICAgIHJldHVybiBhYmJyO1xufVxuLyoqXG4gKiBDb252ZXJ0cyBnaXZlbiByYXcgc25pcHBldHMgaW50byBpbnRlcm5hbCBzbmlwcGV0cyByZXByZXNlbnRhdGlvblxuICovXG5mdW5jdGlvbiBjb252ZXJ0U25pcHBldHMoc25pcHBldHMpIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhzbmlwcGV0cykpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goY3JlYXRlU25pcHBldChrZXksIHNuaXBwZXRzW2tleV0pKTtcbiAgICB9XG4gICAgcmV0dXJuIG5lc3QocmVzdWx0KTtcbn1cbi8qKlxuICogUmVzb2x2ZXMgZ2l2ZW4gbm9kZTogZmluZHMgbWF0Y2hlZCBDU1Mgc25pcHBldHMgdXNpbmcgZnV6enkgbWF0Y2ggYW5kIHJlc29sdmVzXG4gKiBrZXl3b3JkIGFsaWFzZXMgZnJvbSBub2RlIHZhbHVlXG4gKi9cbmZ1bmN0aW9uIHJlc29sdmVOb2RlKG5vZGUsIHNuaXBwZXRzLCBjb25maWcpIHtcbiAgICBpZiAoIXJlc29sdmVHcmFkaWVudChub2RlLCBjb25maWcpKSB7XG4gICAgICAgIGNvbnN0IHNjb3JlID0gY29uZmlnLm9wdGlvbnNbJ3N0eWxlc2hlZXQuZnV6enlTZWFyY2hNaW5TY29yZSddO1xuICAgICAgICBpZiAoaXNWYWx1ZVNjb3BlKGNvbmZpZykpIHtcbiAgICAgICAgICAgIC8vIFJlc29sdmUgYXMgdmFsdWUgb2YgZ2l2ZW4gQ1NTIHByb3BlcnR5XG4gICAgICAgICAgICBjb25zdCBwcm9wTmFtZSA9IGNvbmZpZy5jb250ZXh0Lm5hbWU7XG4gICAgICAgICAgICBjb25zdCBzbmlwcGV0ID0gc25pcHBldHMuZmluZChzID0+IHMudHlwZSA9PT0gXCJQcm9wZXJ0eVwiIC8qIFByb3BlcnR5ICovICYmIHMucHJvcGVydHkgPT09IHByb3BOYW1lKTtcbiAgICAgICAgICAgIHJlc29sdmVWYWx1ZUtleXdvcmRzKG5vZGUsIGNvbmZpZywgc25pcHBldCwgc2NvcmUpO1xuICAgICAgICAgICAgbm9kZS5zbmlwcGV0ID0gc25pcHBldDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChub2RlLm5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHNuaXBwZXQgPSBmaW5kQmVzdE1hdGNoKG5vZGUubmFtZSwgc25pcHBldHMsIHNjb3JlLCB0cnVlKTtcbiAgICAgICAgICAgIG5vZGUuc25pcHBldCA9IHNuaXBwZXQ7XG4gICAgICAgICAgICBpZiAoc25pcHBldCkge1xuICAgICAgICAgICAgICAgIGlmIChzbmlwcGV0LnR5cGUgPT09IFwiUHJvcGVydHlcIiAvKiBQcm9wZXJ0eSAqLykge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlQXNQcm9wZXJ0eShub2RlLCBzbmlwcGV0LCBjb25maWcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZUFzU25pcHBldChub2RlLCBzbmlwcGV0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKG5vZGUubmFtZSB8fCBjb25maWcuY29udGV4dCkge1xuICAgICAgICAvLyBSZXNvbHZlIG51bWVyaWMgdmFsdWVzIGZvciBDU1MgcHJvcGVydGllcyBvbmx5XG4gICAgICAgIHJlc29sdmVOdW1lcmljVmFsdWUobm9kZSwgY29uZmlnKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG59XG4vKipcbiAqIFJlc29sdmVzIENTUyBncmFkaWVudCBzaG9ydGN1dCBmcm9tIGdpdmVuIHByb3BlcnR5LCBpZiBwb3NzaWJsZVxuICovXG5mdW5jdGlvbiByZXNvbHZlR3JhZGllbnQobm9kZSwgY29uZmlnKSB7XG4gICAgbGV0IGdyYWRpZW50Rm4gPSBudWxsO1xuICAgIGNvbnN0IGNzc1ZhbCA9IG5vZGUudmFsdWUubGVuZ3RoID09PSAxID8gbm9kZS52YWx1ZVswXSA6IG51bGw7XG4gICAgaWYgKGNzc1ZhbCAmJiBjc3NWYWwudmFsdWUubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGNvbnN0IHYgPSBjc3NWYWwudmFsdWVbMF07XG4gICAgICAgIGlmICh2LnR5cGUgPT09ICdGdW5jdGlvbkNhbGwnICYmIHYubmFtZSA9PT0gZ3JhZGllbnROYW1lKSB7XG4gICAgICAgICAgICBncmFkaWVudEZuID0gdjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZ3JhZGllbnRGbiB8fCBub2RlLm5hbWUgPT09IGdyYWRpZW50TmFtZSkge1xuICAgICAgICBpZiAoIWdyYWRpZW50Rm4pIHtcbiAgICAgICAgICAgIGdyYWRpZW50Rm4gPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ0Z1bmN0aW9uQ2FsbCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2xpbmVhci1ncmFkaWVudCcsXG4gICAgICAgICAgICAgICAgYXJndW1lbnRzOiBbY3NzVmFsdWUoZmllbGQoMCwgJycpKV1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBncmFkaWVudEZuID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBncmFkaWVudEZuKSwgeyBuYW1lOiAnbGluZWFyLWdyYWRpZW50JyB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNvbmZpZy5jb250ZXh0KSB7XG4gICAgICAgICAgICBub2RlLm5hbWUgPSAnYmFja2dyb3VuZC1pbWFnZSc7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS52YWx1ZSA9IFtjc3NWYWx1ZShncmFkaWVudEZuKV07XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG4vKipcbiAqIFJlc29sdmVzIGdpdmVuIHBhcnNlZCBhYmJyZXZpYXRpb24gbm9kZSBhcyBDU1MgcHJvcGVydHlcbiAqL1xuZnVuY3Rpb24gcmVzb2x2ZUFzUHJvcGVydHkobm9kZSwgc25pcHBldCwgY29uZmlnKSB7XG4gICAgY29uc3QgYWJiciA9IG5vZGUubmFtZTtcbiAgICAvLyBDaGVjayBmb3IgdW5tYXRjaGVkIHBhcnQgb2YgYWJicmV2aWF0aW9uXG4gICAgLy8gRm9yIGV4YW1wbGUsIGluIGBkaWJgIGFiYnJldmlhdGlvbiB0aGUgbWF0Y2hlZCBwYXJ0IGlzIGBkYCBhbmQgYGliYCBzaG91bGRcbiAgICAvLyBiZSBjb25zaWRlcmVkIGFzIGlubGluZSB2YWx1ZS4gSWYgdW5tYXRjaGVkIGZyYWdtZW50IGV4aXN0cywgd2Ugc2hvdWxkIGNoZWNrXG4gICAgLy8gaWYgaXQgbWF0Y2hlcyBhY3R1YWwgdmFsdWUgb2Ygc25pcHBldC4gSWYgZWl0aGVyIGV4cGxpY2l0IHZhbHVlIGlzIHNwZWNpZmllZFxuICAgIC8vIG9yIHVubWF0Y2hlZCBmcmFnbWVudCBkaWQgbm90IHJlc29sdmUgdG8gdG8gYSBrZXl3b3JkLCB3ZSBzaG91bGQgY29uc2lkZXJcbiAgICAvLyBtYXRjaGVkIHNuaXBwZXQgYXMgaW52YWxpZFxuICAgIGNvbnN0IGlubGluZVZhbHVlID0gZ2V0VW5tYXRjaGVkUGFydChhYmJyLCBzbmlwcGV0LmtleSk7XG4gICAgaWYgKGlubGluZVZhbHVlKSB7XG4gICAgICAgIGlmIChub2RlLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gQWxyZWFkeSBoYXZlIHZhbHVlOiB1bm1hdGNoZWQgcGFydCBpbmRpY2F0ZXMgbWF0Y2hlZCBzbmlwcGV0IGlzIGludmFsaWRcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGt3ID0gcmVzb2x2ZUtleXdvcmQoaW5saW5lVmFsdWUsIGNvbmZpZywgc25pcHBldCk7XG4gICAgICAgIGlmICgha3cpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUudmFsdWUucHVzaChjc3NWYWx1ZShrdykpO1xuICAgIH1cbiAgICBub2RlLm5hbWUgPSBzbmlwcGV0LnByb3BlcnR5O1xuICAgIGlmIChub2RlLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAvLyBSZXBsYWNlIGtleXdvcmQgYWxpYXMgZnJvbSBjdXJyZW50IGFiYnJldmlhdGlvbiBub2RlIHdpdGggbWF0Y2hlZCBrZXl3b3JkXG4gICAgICAgIHJlc29sdmVWYWx1ZUtleXdvcmRzKG5vZGUsIGNvbmZpZywgc25pcHBldCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHNuaXBwZXQudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IHNuaXBwZXQudmFsdWVbMF07XG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9lbW1ldGlvL2VtbWV0L2lzc3Vlcy81NThcbiAgICAgICAgLy8gV2Ugc2hvdWxkIGF1dG8tc2VsZWN0IGluc2VydGVkIHZhbHVlIG9ubHkgaWYgdGhlcmXigJlzIG11bHRpcGxlIHZhbHVlXG4gICAgICAgIC8vIGNob2ljZVxuICAgICAgICBub2RlLnZhbHVlID0gc25pcHBldC52YWx1ZS5sZW5ndGggPT09IDEgfHwgZGVmYXVsdFZhbHVlLnNvbWUoaGFzRmllbGQpXG4gICAgICAgICAgICA/IGRlZmF1bHRWYWx1ZVxuICAgICAgICAgICAgOiBkZWZhdWx0VmFsdWUubWFwKG4gPT4gd3JhcFdpdGhGaWVsZChuLCBjb25maWcpKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG59XG5mdW5jdGlvbiByZXNvbHZlVmFsdWVLZXl3b3Jkcyhub2RlLCBjb25maWcsIHNuaXBwZXQsIG1pblNjb3JlKSB7XG4gICAgZm9yIChjb25zdCBjc3NWYWwgb2Ygbm9kZS52YWx1ZSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IHRva2VuIG9mIGNzc1ZhbC52YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHRva2VuLnR5cGUgPT09ICdMaXRlcmFsJykge1xuICAgICAgICAgICAgICAgIHZhbHVlLnB1c2gocmVzb2x2ZUtleXdvcmQodG9rZW4udmFsdWUsIGNvbmZpZywgc25pcHBldCwgbWluU2NvcmUpIHx8IHRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRva2VuLnR5cGUgPT09ICdGdW5jdGlvbkNhbGwnKSB7XG4gICAgICAgICAgICAgICAgLy8gRm9yIGZ1bmN0aW9uIGNhbGxzLCB3ZSBzaG91bGQgZmluZCBtYXRjaGluZyBmdW5jdGlvbiBjYWxsXG4gICAgICAgICAgICAgICAgLy8gYW5kIG1lcmdlIGFyZ3VtZW50c1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gcmVzb2x2ZUtleXdvcmQodG9rZW4ubmFtZSwgY29uZmlnLCBzbmlwcGV0LCBtaW5TY29yZSk7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoICYmIG1hdGNoLnR5cGUgPT09ICdGdW5jdGlvbkNhbGwnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLnB1c2goT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBtYXRjaCksIHsgYXJndW1lbnRzOiB0b2tlbi5hcmd1bWVudHMuY29uY2F0KG1hdGNoLmFyZ3VtZW50cy5zbGljZSh0b2tlbi5hcmd1bWVudHMubGVuZ3RoKSkgfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWUucHVzaCh0b2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY3NzVmFsLnZhbHVlID0gdmFsdWU7XG4gICAgfVxufVxuLyoqXG4gKiBSZXNvbHZlcyBnaXZlbiBwYXJzZWQgYWJicmV2aWF0aW9uIG5vZGUgYXMgYSBzbmlwcGV0OiBhIHBsYWluIGNvZGUgY2h1bmtcbiAqL1xuZnVuY3Rpb24gcmVzb2x2ZUFzU25pcHBldChub2RlLCBzbmlwcGV0KSB7XG4gICAgLy8gV2hlbiByZXNvbHZpbmcgc25pcHBldHMsIHdlIGhhdmUgdG8gZG8gdGhlIGZvbGxvd2luZzpcbiAgICAvLyAxLiBSZXBsYWNlIGZpZWxkIHBsYWNlaG9sZGVycyB3aXRoIGFjdHVhbCBmaWVsZCB0b2tlbnMuXG4gICAgLy8gMi4gSWYgaW5wdXQgdmFsdWVzIGdpdmVuLCBwdXQgdGhlbSBpbnN0ZWFkIG9mIGZpZWxkc1xuICAgIGxldCBvZmZzZXQgPSAwO1xuICAgIGxldCBtO1xuICAgIGNvbnN0IHJlRmllbGQgPSAvXFwkXFx7KFxcZCspKDpbXn1dKyk/XFx9L2c7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IG5vZGUudmFsdWVbMF07XG4gICAgY29uc3Qgb3V0cHV0VmFsdWUgPSBbXTtcbiAgICB3aGlsZSAobSA9IHJlRmllbGQuZXhlYyhzbmlwcGV0LnZhbHVlKSkge1xuICAgICAgICBpZiAob2Zmc2V0ICE9PSBtLmluZGV4KSB7XG4gICAgICAgICAgICBvdXRwdXRWYWx1ZS5wdXNoKGxpdGVyYWwoc25pcHBldC52YWx1ZS5zbGljZShvZmZzZXQsIG0uaW5kZXgpKSk7XG4gICAgICAgIH1cbiAgICAgICAgb2Zmc2V0ID0gbS5pbmRleCArIG1bMF0ubGVuZ3RoO1xuICAgICAgICBpZiAoaW5wdXRWYWx1ZSAmJiBpbnB1dFZhbHVlLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgb3V0cHV0VmFsdWUucHVzaChpbnB1dFZhbHVlLnZhbHVlLnNoaWZ0KCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb3V0cHV0VmFsdWUucHVzaChmaWVsZChOdW1iZXIobVsxXSksIG1bMl0gPyBtWzJdLnNsaWNlKDEpIDogJycpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB0YWlsID0gc25pcHBldC52YWx1ZS5zbGljZShvZmZzZXQpO1xuICAgIGlmICh0YWlsKSB7XG4gICAgICAgIG91dHB1dFZhbHVlLnB1c2gobGl0ZXJhbCh0YWlsKSk7XG4gICAgfVxuICAgIG5vZGUubmFtZSA9IHZvaWQgMDtcbiAgICBub2RlLnZhbHVlID0gW2Nzc1ZhbHVlKC4uLm91dHB1dFZhbHVlKV07XG4gICAgcmV0dXJuIG5vZGU7XG59XG4vKipcbiAqIEZpbmRzIGJlc3QgbWF0Y2hpbmcgaXRlbSBmcm9tIGBpdGVtc2AgYXJyYXlcbiAqIEBwYXJhbSBhYmJyICBBYmJyZXZpYXRpb24gdG8gbWF0Y2hcbiAqIEBwYXJhbSBpdGVtcyBMaXN0IG9mIGl0ZW1zIGZvciBtYXRjaFxuICogQHBhcmFtIG1pblNjb3JlIFRoZSBtaW5pbXVtIHNjb3JlIHRoZSBiZXN0IG1hdGNoZWQgaXRlbSBzaG91bGQgaGF2ZSB0byBiZSBhIHZhbGlkIG1hdGNoLlxuICovXG5mdW5jdGlvbiBmaW5kQmVzdE1hdGNoKGFiYnIsIGl0ZW1zLCBtaW5TY29yZSA9IDAsIHBhcnRpYWxNYXRjaCA9IGZhbHNlKSB7XG4gICAgbGV0IG1hdGNoZWRJdGVtID0gbnVsbDtcbiAgICBsZXQgbWF4U2NvcmUgPSAwO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICBjb25zdCBzY29yZSA9IHNjb3JlTWF0Y2goYWJiciwgZ2V0U2NvcmluZ1BhcnQoaXRlbSksIHBhcnRpYWxNYXRjaCk7XG4gICAgICAgIGlmIChzY29yZSA9PT0gMSkge1xuICAgICAgICAgICAgLy8gZGlyZWN0IGhpdCwgbm8gbmVlZCB0byBsb29rIGZ1cnRoZXJcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzY29yZSAmJiBzY29yZSA+PSBtYXhTY29yZSkge1xuICAgICAgICAgICAgbWF4U2NvcmUgPSBzY29yZTtcbiAgICAgICAgICAgIG1hdGNoZWRJdGVtID0gaXRlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWF4U2NvcmUgPj0gbWluU2NvcmUgPyBtYXRjaGVkSXRlbSA6IG51bGw7XG59XG5mdW5jdGlvbiBnZXRTY29yaW5nUGFydChpdGVtKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJyA/IGl0ZW0gOiBpdGVtLmtleTtcbn1cbi8qKlxuICogUmV0dXJucyBhIHBhcnQgb2YgYGFiYnJgIHRoYXQgd2FzbuKAmXQgZGlyZWN0bHkgbWF0Y2hlZCBhZ2FpbnN0IGBzdHJgLlxuICogRm9yIGV4YW1wbGUsIGlmIGFiYnJldmlhdGlvbiBgcG9hc2AgaXMgbWF0Y2hlZCBhZ2FpbnN0IGBwb3NpdGlvbmAsXG4gKiB0aGUgdW5tYXRjaGVkIHBhcnQgd2lsbCBiZSBgYXNgIHNpbmNlIGBhYCB3YXNu4oCZdCBmb3VuZCBpbiBzdHJpbmcgc3RyZWFtXG4gKi9cbmZ1bmN0aW9uIGdldFVubWF0Y2hlZFBhcnQoYWJiciwgc3RyKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxhc3RQb3MgPSAwOyBpIDwgYWJici5sZW5ndGg7IGkrKykge1xuICAgICAgICBsYXN0UG9zID0gc3RyLmluZGV4T2YoYWJicltpXSwgbGFzdFBvcyk7XG4gICAgICAgIGlmIChsYXN0UG9zID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGFiYnIuc2xpY2UoaSk7XG4gICAgICAgIH1cbiAgICAgICAgbGFzdFBvcysrO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG59XG4vKipcbiAqIFJlc29sdmVzIGdpdmVuIGtleXdvcmQgc2hvcnRoYW5kIGludG8gbWF0Y2hlZCBzbmlwcGV0IGtleXdvcmQgb3IgZ2xvYmFsIGtleXdvcmQsXG4gKiBpZiBwb3NzaWJsZVxuICovXG5mdW5jdGlvbiByZXNvbHZlS2V5d29yZChrdywgY29uZmlnLCBzbmlwcGV0LCBtaW5TY29yZSkge1xuICAgIGxldCByZWY7XG4gICAgaWYgKHNuaXBwZXQpIHtcbiAgICAgICAgaWYgKHJlZiA9IGZpbmRCZXN0TWF0Y2goa3csIE9iamVjdC5rZXlzKHNuaXBwZXQua2V5d29yZHMpLCBtaW5TY29yZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBzbmlwcGV0LmtleXdvcmRzW3JlZl07XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBkZXAgb2Ygc25pcHBldC5kZXBlbmRlbmNpZXMpIHtcbiAgICAgICAgICAgIGlmIChyZWYgPSBmaW5kQmVzdE1hdGNoKGt3LCBPYmplY3Qua2V5cyhkZXAua2V5d29yZHMpLCBtaW5TY29yZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVwLmtleXdvcmRzW3JlZl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHJlZiA9IGZpbmRCZXN0TWF0Y2goa3csIGNvbmZpZy5vcHRpb25zWydzdHlsZXNoZWV0LmtleXdvcmRzJ10sIG1pblNjb3JlKSkge1xuICAgICAgICByZXR1cm4gbGl0ZXJhbChyZWYpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbi8qKlxuICogUmVzb2x2ZXMgbnVtZXJpYyB2YWx1ZXMgaW4gZ2l2ZW4gYWJicmV2aWF0aW9uIG5vZGVcbiAqL1xuZnVuY3Rpb24gcmVzb2x2ZU51bWVyaWNWYWx1ZShub2RlLCBjb25maWcpIHtcbiAgICBjb25zdCBhbGlhc2VzID0gY29uZmlnLm9wdGlvbnNbJ3N0eWxlc2hlZXQudW5pdEFsaWFzZXMnXTtcbiAgICBjb25zdCB1bml0bGVzcyA9IGNvbmZpZy5vcHRpb25zWydzdHlsZXNoZWV0LnVuaXRsZXNzJ107XG4gICAgZm9yIChjb25zdCB2IG9mIG5vZGUudmFsdWUpIHtcbiAgICAgICAgZm9yIChjb25zdCB0IG9mIHYudmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh0LnR5cGUgPT09ICdOdW1iZXJWYWx1ZScpIHtcbiAgICAgICAgICAgICAgICBpZiAodC51bml0KSB7XG4gICAgICAgICAgICAgICAgICAgIHQudW5pdCA9IGFsaWFzZXNbdC51bml0XSB8fCB0LnVuaXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHQudmFsdWUgIT09IDAgJiYgIXVuaXRsZXNzLmluY2x1ZGVzKG5vZGUubmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdC51bml0ID0gdC5yYXdWYWx1ZS5pbmNsdWRlcygnLicpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZy5vcHRpb25zWydzdHlsZXNoZWV0LmZsb2F0VW5pdCddXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZy5vcHRpb25zWydzdHlsZXNoZWV0LmludFVuaXQnXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4vKipcbiAqIENvbnN0cnVjdHMgQ1NTIHZhbHVlIHRva2VuXG4gKi9cbmZ1bmN0aW9uIGNzc1ZhbHVlKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnQ1NTVmFsdWUnLFxuICAgICAgICB2YWx1ZTogYXJnc1xuICAgIH07XG59XG4vKipcbiAqIENvbnN0cnVjdHMgbGl0ZXJhbCB0b2tlblxuICovXG5mdW5jdGlvbiBsaXRlcmFsKHZhbHVlKSB7XG4gICAgcmV0dXJuIHsgdHlwZTogJ0xpdGVyYWwnLCB2YWx1ZSB9O1xufVxuLyoqXG4gKiBDb25zdHJ1Y3RzIGZpZWxkIHRva2VuXG4gKi9cbmZ1bmN0aW9uIGZpZWxkKGluZGV4LCBuYW1lKSB7XG4gICAgcmV0dXJuIHsgdHlwZTogJ0ZpZWxkJywgaW5kZXgsIG5hbWUgfTtcbn1cbi8qKlxuICogQ2hlY2sgaWYgZ2l2ZW4gdmFsdWUgY29udGFpbnMgZmllbGRzXG4gKi9cbmZ1bmN0aW9uIGhhc0ZpZWxkKHZhbHVlKSB7XG4gICAgZm9yIChjb25zdCB2IG9mIHZhbHVlLnZhbHVlKSB7XG4gICAgICAgIGlmICh2LnR5cGUgPT09ICdGaWVsZCcgfHwgKHYudHlwZSA9PT0gJ0Z1bmN0aW9uQ2FsbCcgJiYgdi5hcmd1bWVudHMuc29tZShoYXNGaWVsZCkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG4vKipcbiAqIFdyYXBzIHRva2VucyBvZiBnaXZlbiBhYmJyZXZpYXRpb24gd2l0aCBmaWVsZHNcbiAqL1xuZnVuY3Rpb24gd3JhcFdpdGhGaWVsZChub2RlLCBjb25maWcsIHN0YXRlID0geyBpbmRleDogMSB9KSB7XG4gICAgbGV0IHZhbHVlID0gW107XG4gICAgZm9yIChjb25zdCB2IG9mIG5vZGUudmFsdWUpIHtcbiAgICAgICAgc3dpdGNoICh2LnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ0NvbG9yVmFsdWUnOlxuICAgICAgICAgICAgICAgIHZhbHVlLnB1c2goZmllbGQoc3RhdGUuaW5kZXgrKywgY29sb3IodiwgY29uZmlnLm9wdGlvbnNbJ3N0eWxlc2hlZXQuc2hvcnRIZXgnXSkpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0xpdGVyYWwnOlxuICAgICAgICAgICAgICAgIHZhbHVlLnB1c2goZmllbGQoc3RhdGUuaW5kZXgrKywgdi52YWx1ZSkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnTnVtYmVyVmFsdWUnOlxuICAgICAgICAgICAgICAgIHZhbHVlLnB1c2goZmllbGQoc3RhdGUuaW5kZXgrKywgYCR7di52YWx1ZX0ke3YudW5pdH1gKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdTdHJpbmdWYWx1ZSc6XG4gICAgICAgICAgICAgICAgY29uc3QgcSA9IHYucXVvdGUgPT09ICdzaW5nbGUnID8gJ1xcJycgOiAnXCInO1xuICAgICAgICAgICAgICAgIHZhbHVlLnB1c2goZmllbGQoc3RhdGUuaW5kZXgrKywgcSArIHYudmFsdWUgKyBxKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdGdW5jdGlvbkNhbGwnOlxuICAgICAgICAgICAgICAgIHZhbHVlLnB1c2goZmllbGQoc3RhdGUuaW5kZXgrKywgdi5uYW1lKSwgbGl0ZXJhbCgnKCcpKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgaWwgPSB2LmFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuY29uY2F0KHdyYXBXaXRoRmllbGQodi5hcmd1bWVudHNbaV0sIGNvbmZpZywgc3RhdGUpLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgIT09IGlsIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUucHVzaChsaXRlcmFsKCcsICcpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZS5wdXNoKGxpdGVyYWwoJyknKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHZhbHVlLnB1c2godik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgbm9kZSksIHsgdmFsdWUgfSk7XG59XG4vKipcbiAqIENoZWNrIGlmIGFiYnJldmlhdGlvbiBzaG91bGQgYmUgZXhwYW5kZWQgaW4gQ1NTIHZhbHVlIGNvbnRleHRcbiAqL1xuZnVuY3Rpb24gaXNWYWx1ZVNjb3BlKGNvbmZpZykge1xuICAgIGlmIChjb25maWcuY29udGV4dCkge1xuICAgICAgICByZXR1cm4gY29uZmlnLmNvbnRleHQubmFtZSA9PT0gXCJAQHZhbHVlXCIgLyogVmFsdWUgKi8gfHwgIWNvbmZpZy5jb250ZXh0Lm5hbWUuc3RhcnRzV2l0aCgnQEAnKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuLyoqXG4gKiBSZXR1cm5zIHNuaXBwZXRzIGZvciBnaXZlbiBzY29wZVxuICovXG5mdW5jdGlvbiBnZXRTbmlwcGV0c0ZvclNjb3BlKHNuaXBwZXRzLCBjb25maWcpIHtcbiAgICBpZiAoY29uZmlnLmNvbnRleHQpIHtcbiAgICAgICAgaWYgKGNvbmZpZy5jb250ZXh0Lm5hbWUgPT09IFwiQEBzZWN0aW9uXCIgLyogU2VjdGlvbiAqLykge1xuICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRzLmZpbHRlcihzID0+IHMudHlwZSA9PT0gXCJSYXdcIiAvKiBSYXcgKi8pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25maWcuY29udGV4dC5uYW1lID09PSBcIkBAcHJvcGVydHlcIiAvKiBQcm9wZXJ0eSAqLykge1xuICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRzLmZpbHRlcihzID0+IHMudHlwZSA9PT0gXCJQcm9wZXJ0eVwiIC8qIFByb3BlcnR5ICovKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc25pcHBldHM7XG59XG5cbnZhciBtYXJrdXBTbmlwcGV0cyA9IHtcblx0XCJhXCI6IFwiYVtocmVmXVwiLFxuXHRcImE6YmxhbmtcIjogXCJhW2hyZWY9J2h0dHA6Ly8kezB9JyB0YXJnZXQ9J19ibGFuaycgcmVsPSdub29wZW5lciBub3JlZmVycmVyJ11cIixcblx0XCJhOmxpbmtcIjogXCJhW2hyZWY9J2h0dHA6Ly8kezB9J11cIixcblx0XCJhOm1haWxcIjogXCJhW2hyZWY9J21haWx0bzokezB9J11cIixcblx0XCJhOnRlbFwiOiBcImFbaHJlZj0ndGVsOiskezB9J11cIixcblx0XCJhYmJyXCI6IFwiYWJiclt0aXRsZV1cIixcblx0XCJhY3J8YWNyb255bVwiOiBcImFjcm9ueW1bdGl0bGVdXCIsXG5cdFwiYmFzZVwiOiBcImJhc2VbaHJlZl0vXCIsXG5cdFwiYmFzZWZvbnRcIjogXCJiYXNlZm9udC9cIixcblx0XCJiclwiOiBcImJyL1wiLFxuXHRcImZyYW1lXCI6IFwiZnJhbWUvXCIsXG5cdFwiaHJcIjogXCJoci9cIixcblx0XCJiZG9cIjogXCJiZG9bZGlyXVwiLFxuXHRcImJkbzpyXCI6IFwiYmRvW2Rpcj1ydGxdXCIsXG5cdFwiYmRvOmxcIjogXCJiZG9bZGlyPWx0cl1cIixcblx0XCJjb2xcIjogXCJjb2wvXCIsXG5cdFwibGlua1wiOiBcImxpbmtbcmVsPXN0eWxlc2hlZXQgaHJlZl0vXCIsXG5cdFwibGluazpjc3NcIjogXCJsaW5rW2hyZWY9JyR7MTpzdHlsZX0uY3NzJ11cIixcblx0XCJsaW5rOnByaW50XCI6IFwibGlua1tocmVmPSckezE6cHJpbnR9LmNzcycgbWVkaWE9cHJpbnRdXCIsXG5cdFwibGluazpmYXZpY29uXCI6IFwibGlua1tyZWw9J3Nob3J0Y3V0IGljb24nIHR5cGU9aW1hZ2UveC1pY29uIGhyZWY9JyR7MTpmYXZpY29uLmljb30nXVwiLFxuXHRcImxpbms6bWZ8bGluazptYW5pZmVzdFwiOiBcImxpbmtbcmVsPSdtYW5pZmVzdCcgaHJlZj0nJHsxOm1hbmlmZXN0Lmpzb259J11cIixcblx0XCJsaW5rOnRvdWNoXCI6IFwibGlua1tyZWw9YXBwbGUtdG91Y2gtaWNvbiBocmVmPSckezE6ZmF2aWNvbi5wbmd9J11cIixcblx0XCJsaW5rOnJzc1wiOiBcImxpbmtbcmVsPWFsdGVybmF0ZSB0eXBlPWFwcGxpY2F0aW9uL3Jzcyt4bWwgdGl0bGU9UlNTIGhyZWY9JyR7MTpyc3MueG1sfSddXCIsXG5cdFwibGluazphdG9tXCI6IFwibGlua1tyZWw9YWx0ZXJuYXRlIHR5cGU9YXBwbGljYXRpb24vYXRvbSt4bWwgdGl0bGU9QXRvbSBocmVmPSckezE6YXRvbS54bWx9J11cIixcblx0XCJsaW5rOmltfGxpbms6aW1wb3J0XCI6IFwibGlua1tyZWw9aW1wb3J0IGhyZWY9JyR7MTpjb21wb25lbnR9Lmh0bWwnXVwiLFxuXHRcIm1ldGFcIjogXCJtZXRhL1wiLFxuXHRcIm1ldGE6dXRmXCI6IFwibWV0YVtodHRwLWVxdWl2PUNvbnRlbnQtVHlwZSBjb250ZW50PSd0ZXh0L2h0bWw7Y2hhcnNldD1VVEYtOCddXCIsXG5cdFwibWV0YTp2cFwiOiBcIm1ldGFbbmFtZT12aWV3cG9ydCBjb250ZW50PSd3aWR0aD0kezE6ZGV2aWNlLXdpZHRofSwgaW5pdGlhbC1zY2FsZT0kezI6MS4wfSddXCIsXG5cdFwibWV0YTpjb21wYXRcIjogXCJtZXRhW2h0dHAtZXF1aXY9WC1VQS1Db21wYXRpYmxlIGNvbnRlbnQ9JyR7MTpJRT03fSddXCIsXG5cdFwibWV0YTplZGdlXCI6IFwibWV0YTpjb21wYXRbY29udGVudD0nJHsxOmllPWVkZ2V9J11cIixcblx0XCJtZXRhOnJlZGlyZWN0XCI6IFwibWV0YVtodHRwLWVxdWl2PXJlZnJlc2ggY29udGVudD0nMDsgdXJsPSR7MTpodHRwOi8vZXhhbXBsZS5jb219J11cIixcblx0XCJtZXRhOmt3XCI6IFwibWV0YVtuYW1lPWtleXdvcmRzIGNvbnRlbnRdXCIsXG5cdFwibWV0YTpkZXNjXCI6IFwibWV0YVtuYW1lPWRlc2NyaXB0aW9uIGNvbnRlbnRdXCIsXG5cdFwic3R5bGVcIjogXCJzdHlsZVwiLFxuXHRcInNjcmlwdFwiOiBcInNjcmlwdFwiLFxuXHRcInNjcmlwdDpzcmNcIjogXCJzY3JpcHRbc3JjXVwiLFxuXHRcImltZ1wiOiBcImltZ1tzcmMgYWx0XS9cIixcblx0XCJpbWc6c3xpbWc6c3Jjc2V0XCI6IFwiaW1nW3NyY3NldCBzcmMgYWx0XVwiLFxuXHRcImltZzp6fGltZzpzaXplc1wiOiBcImltZ1tzaXplcyBzcmNzZXQgc3JjIGFsdF1cIixcblx0XCJwaWN0dXJlXCI6IFwicGljdHVyZVwiLFxuXHRcInNyY3xzb3VyY2VcIjogXCJzb3VyY2UvXCIsXG5cdFwic3JjOnNjfHNvdXJjZTpzcmNcIjogXCJzb3VyY2Vbc3JjIHR5cGVdXCIsXG5cdFwic3JjOnN8c291cmNlOnNyY3NldFwiOiBcInNvdXJjZVtzcmNzZXRdXCIsXG5cdFwic3JjOnR8c291cmNlOnR5cGVcIjogXCJzb3VyY2Vbc3Jjc2V0IHR5cGU9JyR7MTppbWFnZS99J11cIixcblx0XCJzcmM6enxzb3VyY2U6c2l6ZXNcIjogXCJzb3VyY2Vbc2l6ZXMgc3Jjc2V0XVwiLFxuXHRcInNyYzptfHNvdXJjZTptZWRpYVwiOiBcInNvdXJjZVttZWRpYT0nKCR7MTptaW4td2lkdGg6IH0pJyBzcmNzZXRdXCIsXG5cdFwic3JjOm10fHNvdXJjZTptZWRpYTp0eXBlXCI6IFwic291cmNlOm1lZGlhW3R5cGU9JyR7MjppbWFnZS99J11cIixcblx0XCJzcmM6bXp8c291cmNlOm1lZGlhOnNpemVzXCI6IFwic291cmNlOm1lZGlhW3NpemVzIHNyY3NldF1cIixcblx0XCJzcmM6enR8c291cmNlOnNpemVzOnR5cGVcIjogXCJzb3VyY2Vbc2l6ZXMgc3Jjc2V0IHR5cGU9JyR7MTppbWFnZS99J11cIixcblx0XCJpZnJhbWVcIjogXCJpZnJhbWVbc3JjIGZyYW1lYm9yZGVyPTBdXCIsXG5cdFwiZW1iZWRcIjogXCJlbWJlZFtzcmMgdHlwZV0vXCIsXG5cdFwib2JqZWN0XCI6IFwib2JqZWN0W2RhdGEgdHlwZV1cIixcblx0XCJwYXJhbVwiOiBcInBhcmFtW25hbWUgdmFsdWVdL1wiLFxuXHRcIm1hcFwiOiBcIm1hcFtuYW1lXVwiLFxuXHRcImFyZWFcIjogXCJhcmVhW3NoYXBlIGNvb3JkcyBocmVmIGFsdF0vXCIsXG5cdFwiYXJlYTpkXCI6IFwiYXJlYVtzaGFwZT1kZWZhdWx0XVwiLFxuXHRcImFyZWE6Y1wiOiBcImFyZWFbc2hhcGU9Y2lyY2xlXVwiLFxuXHRcImFyZWE6clwiOiBcImFyZWFbc2hhcGU9cmVjdF1cIixcblx0XCJhcmVhOnBcIjogXCJhcmVhW3NoYXBlPXBvbHldXCIsXG5cdFwiZm9ybVwiOiBcImZvcm1bYWN0aW9uXVwiLFxuXHRcImZvcm06Z2V0XCI6IFwiZm9ybVttZXRob2Q9Z2V0XVwiLFxuXHRcImZvcm06cG9zdFwiOiBcImZvcm1bbWV0aG9kPXBvc3RdXCIsXG5cdFwibGFiZWxcIjogXCJsYWJlbFtmb3JdXCIsXG5cdFwiaW5wdXRcIjogXCJpbnB1dFt0eXBlPSR7MTp0ZXh0fV0vXCIsXG5cdFwiaW5wXCI6IFwiaW5wdXRbbmFtZT0kezF9IGlkPSR7MX1dXCIsXG5cdFwiaW5wdXQ6aHxpbnB1dDpoaWRkZW5cIjogXCJpbnB1dFt0eXBlPWhpZGRlbiBuYW1lXVwiLFxuXHRcImlucHV0OnR8aW5wdXQ6dGV4dFwiOiBcImlucFt0eXBlPXRleHRdXCIsXG5cdFwiaW5wdXQ6c2VhcmNoXCI6IFwiaW5wW3R5cGU9c2VhcmNoXVwiLFxuXHRcImlucHV0OmVtYWlsXCI6IFwiaW5wW3R5cGU9ZW1haWxdXCIsXG5cdFwiaW5wdXQ6dXJsXCI6IFwiaW5wW3R5cGU9dXJsXVwiLFxuXHRcImlucHV0OnB8aW5wdXQ6cGFzc3dvcmRcIjogXCJpbnBbdHlwZT1wYXNzd29yZF1cIixcblx0XCJpbnB1dDpkYXRldGltZVwiOiBcImlucFt0eXBlPWRhdGV0aW1lXVwiLFxuXHRcImlucHV0OmRhdGVcIjogXCJpbnBbdHlwZT1kYXRlXVwiLFxuXHRcImlucHV0OmRhdGV0aW1lLWxvY2FsXCI6IFwiaW5wW3R5cGU9ZGF0ZXRpbWUtbG9jYWxdXCIsXG5cdFwiaW5wdXQ6bW9udGhcIjogXCJpbnBbdHlwZT1tb250aF1cIixcblx0XCJpbnB1dDp3ZWVrXCI6IFwiaW5wW3R5cGU9d2Vla11cIixcblx0XCJpbnB1dDp0aW1lXCI6IFwiaW5wW3R5cGU9dGltZV1cIixcblx0XCJpbnB1dDp0ZWxcIjogXCJpbnBbdHlwZT10ZWxdXCIsXG5cdFwiaW5wdXQ6bnVtYmVyXCI6IFwiaW5wW3R5cGU9bnVtYmVyXVwiLFxuXHRcImlucHV0OmNvbG9yXCI6IFwiaW5wW3R5cGU9Y29sb3JdXCIsXG5cdFwiaW5wdXQ6Y3xpbnB1dDpjaGVja2JveFwiOiBcImlucFt0eXBlPWNoZWNrYm94XVwiLFxuXHRcImlucHV0OnJ8aW5wdXQ6cmFkaW9cIjogXCJpbnBbdHlwZT1yYWRpb11cIixcblx0XCJpbnB1dDpyYW5nZVwiOiBcImlucFt0eXBlPXJhbmdlXVwiLFxuXHRcImlucHV0OmZ8aW5wdXQ6ZmlsZVwiOiBcImlucFt0eXBlPWZpbGVdXCIsXG5cdFwiaW5wdXQ6c3xpbnB1dDpzdWJtaXRcIjogXCJpbnB1dFt0eXBlPXN1Ym1pdCB2YWx1ZV1cIixcblx0XCJpbnB1dDppfGlucHV0OmltYWdlXCI6IFwiaW5wdXRbdHlwZT1pbWFnZSBzcmMgYWx0XVwiLFxuXHRcImlucHV0OmJ8aW5wdXQ6YnRufGlucHV0OmJ1dHRvblwiOiBcImlucHV0W3R5cGU9YnV0dG9uIHZhbHVlXVwiLFxuXHRcImlucHV0OnJlc2V0XCI6IFwiaW5wdXQ6YnV0dG9uW3R5cGU9cmVzZXRdXCIsXG5cdFwiaXNpbmRleFwiOiBcImlzaW5kZXgvXCIsXG5cdFwic2VsZWN0XCI6IFwic2VsZWN0W25hbWU9JHsxfSBpZD0kezF9XVwiLFxuXHRcInNlbGVjdDpkfHNlbGVjdDpkaXNhYmxlZFwiOiBcInNlbGVjdFtkaXNhYmxlZC5dXCIsXG5cdFwib3B0fG9wdGlvblwiOiBcIm9wdGlvblt2YWx1ZV1cIixcblx0XCJ0ZXh0YXJlYVwiOiBcInRleHRhcmVhW25hbWU9JHsxfSBpZD0kezF9IGNvbHM9JHsyOjMwfSByb3dzPSR7MzoxMH1dXCIsXG5cdFwibWFycXVlZVwiOiBcIm1hcnF1ZWVbYmVoYXZpb3IgZGlyZWN0aW9uXVwiLFxuXHRcIm1lbnU6Y3xtZW51OmNvbnRleHRcIjogXCJtZW51W3R5cGU9Y29udGV4dF1cIixcblx0XCJtZW51OnR8bWVudTp0b29sYmFyXCI6IFwibWVudVt0eXBlPXRvb2xiYXJdXCIsXG5cdFwidmlkZW9cIjogXCJ2aWRlb1tzcmNdXCIsXG5cdFwiYXVkaW9cIjogXCJhdWRpb1tzcmNdXCIsXG5cdFwiaHRtbDp4bWxcIjogXCJodG1sW3htbG5zPWh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxdXCIsXG5cdFwia2V5Z2VuXCI6IFwia2V5Z2VuL1wiLFxuXHRcImNvbW1hbmRcIjogXCJjb21tYW5kL1wiLFxuXHRcImJ0bjpzfGJ1dHRvbjpzfGJ1dHRvbjpzdWJtaXRcIiA6IFwiYnV0dG9uW3R5cGU9c3VibWl0XVwiLFxuXHRcImJ0bjpyfGJ1dHRvbjpyfGJ1dHRvbjpyZXNldFwiIDogXCJidXR0b25bdHlwZT1yZXNldF1cIixcblx0XCJidG46ZHxidXR0b246ZHxidXR0b246ZGlzYWJsZWRcIiA6IFwiYnV0dG9uW2Rpc2FibGVkLl1cIixcblx0XCJmc3Q6ZHxmc2V0OmR8ZmllbGRzZXQ6ZHxmaWVsZHNldDpkaXNhYmxlZFwiIDogXCJmaWVsZHNldFtkaXNhYmxlZC5dXCIsXG5cblx0XCJicVwiOiBcImJsb2NrcXVvdGVcIixcblx0XCJmaWdcIjogXCJmaWd1cmVcIixcblx0XCJmaWdjXCI6IFwiZmlnY2FwdGlvblwiLFxuXHRcInBpY1wiOiBcInBpY3R1cmVcIixcblx0XCJpZnJcIjogXCJpZnJhbWVcIixcblx0XCJlbWJcIjogXCJlbWJlZFwiLFxuXHRcIm9ialwiOiBcIm9iamVjdFwiLFxuXHRcImNhcFwiOiBcImNhcHRpb25cIixcblx0XCJjb2xnXCI6IFwiY29sZ3JvdXBcIixcblx0XCJmc3RcIjogXCJmaWVsZHNldFwiLFxuXHRcImJ0blwiOiBcImJ1dHRvblwiLFxuXHRcIm9wdGdcIjogXCJvcHRncm91cFwiLFxuXHRcInRhcmVhXCI6IFwidGV4dGFyZWFcIixcblx0XCJsZWdcIjogXCJsZWdlbmRcIixcblx0XCJzZWN0XCI6IFwic2VjdGlvblwiLFxuXHRcImFydFwiOiBcImFydGljbGVcIixcblx0XCJoZHJcIjogXCJoZWFkZXJcIixcblx0XCJmdHJcIjogXCJmb290ZXJcIixcblx0XCJhZHJcIjogXCJhZGRyZXNzXCIsXG5cdFwiZGxnXCI6IFwiZGlhbG9nXCIsXG5cdFwic3RyXCI6IFwic3Ryb25nXCIsXG5cdFwicHJvZ1wiOiBcInByb2dyZXNzXCIsXG5cdFwibW5cIjogXCJtYWluXCIsXG5cdFwidGVtXCI6IFwidGVtcGxhdGVcIixcblx0XCJmc2V0XCI6IFwiZmllbGRzZXRcIixcblx0XCJkYXRhZ1wiOiBcImRhdGFncmlkXCIsXG5cdFwiZGF0YWxcIjogXCJkYXRhbGlzdFwiLFxuXHRcImtnXCI6IFwia2V5Z2VuXCIsXG5cdFwib3V0XCI6IFwib3V0cHV0XCIsXG5cdFwiZGV0XCI6IFwiZGV0YWlsc1wiLFxuXHRcInN1bVwiOiBcInN1bW1hcnlcIixcblx0XCJjbWRcIjogXCJjb21tYW5kXCIsXG5cblx0XCJyaTpkfHJpOmRwclwiOiBcImltZzpzXCIsXG5cdFwicmk6dnxyaTp2aWV3cG9ydFwiOiBcImltZzp6XCIsXG5cdFwicmk6YXxyaTphcnRcIjogXCJwaWM+c3JjOm0raW1nXCIsXG5cdFwicmk6dHxyaTp0eXBlXCI6IFwicGljPnNyYzp0K2ltZ1wiLFxuXG5cdFwiISEhXCI6IFwiezwhRE9DVFlQRSBodG1sPn1cIixcblx0XCJkb2NcIjogXCJodG1sW2xhbmc9JHtsYW5nfV0+KGhlYWQ+bWV0YVtjaGFyc2V0PSR7Y2hhcnNldH1dK21ldGFbaHR0cC1lcXVpdj0nWC1VQS1Db21wYXRpYmxlJ11bY29udGVudD0nSUU9ZWRnZSddK21ldGE6dnArdGl0bGV7JHsxOkRvY3VtZW50fX0pK2JvZHlcIixcblx0XCIhfGh0bWw6NVwiOiBcIiEhIStkb2NcIixcblxuXHRcImNcIjogXCJ7PCEtLSAkezB9IC0tPn1cIixcblx0XCJjYzppZVwiOiBcIns8IS0tW2lmIElFXT4kezB9PCFbZW5kaWZdLS0+fVwiLFxuXHRcImNjOm5vaWVcIjogXCJ7PCEtLVtpZiAhSUVdPjwhLS0+JHswfTwhLS08IVtlbmRpZl0tLT59XCJcbn07XG5cbnZhciBzdHlsZXNoZWV0U25pcHBldHMgPSB7XG5cdFwiQGZcIjogXCJAZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogJHsxfTtcXG5cXHRzcmM6IHVybCgkezJ9KTtcXG59XCIsXG5cdFwiQGZmXCI6IFwiQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICckezE6Rm9udE5hbWV9JztcXG5cXHRzcmM6IHVybCgnJHsyOkZpbGVOYW1lfS5lb3QnKTtcXG5cXHRzcmM6IHVybCgnJHsyOkZpbGVOYW1lfS5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcblxcdFxcdCB1cmwoJyR7MjpGaWxlTmFtZX0ud29mZicpIGZvcm1hdCgnd29mZicpLFxcblxcdFxcdCB1cmwoJyR7MjpGaWxlTmFtZX0udHRmJykgZm9ybWF0KCd0cnVldHlwZScpLFxcblxcdFxcdCB1cmwoJyR7MjpGaWxlTmFtZX0uc3ZnIyR7MTpGb250TmFtZX0nKSBmb3JtYXQoJ3N2ZycpO1xcblxcdGZvbnQtc3R5bGU6ICR7Mzpub3JtYWx9O1xcblxcdGZvbnQtd2VpZ2h0OiAkezQ6bm9ybWFsfTtcXG59XCIsXG5cdFwiQGl8QGltcG9ydFwiOiBcIkBpbXBvcnQgdXJsKCR7MH0pO1wiLFxuXHRcIkBrZlwiOiBcIkBrZXlmcmFtZXMgJHsxOmlkZW50aWZpZXJ9IHtcXG5cXHQkezJ9XFxufVwiLFxuXHRcIkBtfEBtZWRpYVwiOiBcIkBtZWRpYSAkezE6c2NyZWVufSB7XFxuXFx0JHswfVxcbn1cIixcblx0XCJhY1wiOiBcImFsaWduLWNvbnRlbnQ6c3RhcnR8ZW5kfGZsZXgtc3RhcnR8ZmxleC1lbmR8Y2VudGVyfHNwYWNlLWJldHdlZW58c3BhY2UtYXJvdW5kfHN0cmV0Y2h8c3BhY2UtZXZlbmx5XCIsXG5cdFwiYWlcIjogXCJhbGlnbi1pdGVtczpzdGFydHxlbmR8ZmxleC1zdGFydHxmbGV4LWVuZHxjZW50ZXJ8YmFzZWxpbmV8c3RyZXRjaFwiLFxuXHRcImFuaW1cIjogXCJhbmltYXRpb246JHsxOm5hbWV9ICR7MjpkdXJhdGlvbn0gJHszOnRpbWluZy1mdW5jdGlvbn0gJHs0OmRlbGF5fSAkezU6aXRlcmF0aW9uLWNvdW50fSAkezY6ZGlyZWN0aW9ufSAkezc6ZmlsbC1tb2RlfVwiLFxuXHRcImFuaW1kZWxcIjogXCJhbmltYXRpb24tZGVsYXk6dGltZVwiLFxuXHRcImFuaW1kaXJcIjogXCJhbmltYXRpb24tZGlyZWN0aW9uOm5vcm1hbHxyZXZlcnNlfGFsdGVybmF0ZXxhbHRlcm5hdGUtcmV2ZXJzZVwiLFxuXHRcImFuaW1kdXJcIjogXCJhbmltYXRpb24tZHVyYXRpb246JHsxOjB9c1wiLFxuXHRcImFuaW1mbVwiOiBcImFuaW1hdGlvbi1maWxsLW1vZGU6Ym90aHxmb3J3YXJkc3xiYWNrd2FyZHNcIixcblx0XCJhbmltaWNcIjogXCJhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OjF8aW5maW5pdGVcIixcblx0XCJhbmltblwiOiBcImFuaW1hdGlvbi1uYW1lXCIsXG5cdFwiYW5pbXBzXCI6IFwiYW5pbWF0aW9uLXBsYXktc3RhdGU6cnVubmluZ3xwYXVzZWRcIixcblx0XCJhbmltdGZcIjogXCJhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcnxlYXNlfGVhc2UtaW58ZWFzZS1vdXR8ZWFzZS1pbi1vdXR8Y3ViaWMtYmV6aWVyKCR7MTowLjF9LCAkezI6MC43fSwgJHszOjEuMH0sICR7MzowLjF9KVwiLFxuXHRcImFwXCI6IFwiYXBwZWFyYW5jZTpub25lXCIsXG5cdFwiYXNcIjogXCJhbGlnbi1zZWxmOnN0YXJ0fGVuZHxhdXRvfGZsZXgtc3RhcnR8ZmxleC1lbmR8Y2VudGVyfGJhc2VsaW5lfHN0cmV0Y2hcIixcblx0XCJiXCI6IFwiYm90dG9tXCIsXG5cdFwiYmRcIjogXCJib3JkZXI6JHsxOjFweH0gJHsyOnNvbGlkfSAkezM6IzAwMH1cIixcblx0XCJiZGJcIjogXCJib3JkZXItYm90dG9tOiR7MToxcHh9ICR7Mjpzb2xpZH0gJHszOiMwMDB9XCIsXG5cdFwiYmRiY1wiOiBcImJvcmRlci1ib3R0b20tY29sb3I6JHsxOiMwMDB9XCIsXG5cdFwiYmRiaVwiOiBcImJvcmRlci1ib3R0b20taW1hZ2U6dXJsKCR7MH0pXCIsXG5cdFwiYmRia1wiOiBcImJvcmRlci1icmVhazpjbG9zZVwiLFxuXHRcImJkYmxpXCI6IFwiYm9yZGVyLWJvdHRvbS1sZWZ0LWltYWdlOnVybCgkezB9KXxjb250aW51ZVwiLFxuXHRcImJkYmxyc1wiOiBcImJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXNcIixcblx0XCJiZGJyaVwiOiBcImJvcmRlci1ib3R0b20tcmlnaHQtaW1hZ2U6dXJsKCR7MH0pfGNvbnRpbnVlXCIsXG5cdFwiYmRicnJzXCI6IFwiYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXNcIixcblx0XCJiZGJzXCI6IFwiYm9yZGVyLWJvdHRvbS1zdHlsZVwiLFxuXHRcImJkYndcIjogXCJib3JkZXItYm90dG9tLXdpZHRoXCIsXG5cdFwiYmRjXCI6IFwiYm9yZGVyLWNvbG9yOiR7MTojMDAwfVwiLFxuXHRcImJkY2lcIjogXCJib3JkZXItY29ybmVyLWltYWdlOnVybCgkezB9KXxjb250aW51ZVwiLFxuXHRcImJkY2xcIjogXCJib3JkZXItY29sbGFwc2U6Y29sbGFwc2V8c2VwYXJhdGVcIixcblx0XCJiZGZcIjogXCJib3JkZXItZml0OnJlcGVhdHxjbGlwfHNjYWxlfHN0cmV0Y2h8b3ZlcndyaXRlfG92ZXJmbG93fHNwYWNlXCIsXG5cdFwiYmRpXCI6IFwiYm9yZGVyLWltYWdlOnVybCgkezB9KVwiLFxuXHRcImJkbFwiOiBcImJvcmRlci1sZWZ0OiR7MToxcHh9ICR7Mjpzb2xpZH0gJHszOiMwMDB9XCIsXG5cdFwiYmRsY1wiOiBcImJvcmRlci1sZWZ0LWNvbG9yOiR7MTojMDAwfVwiLFxuXHRcImJkbGVuXCI6IFwiYm9yZGVyLWxlbmd0aFwiLFxuXHRcImJkbGlcIjogXCJib3JkZXItbGVmdC1pbWFnZTp1cmwoJHswfSlcIixcblx0XCJiZGxzXCI6IFwiYm9yZGVyLWxlZnQtc3R5bGVcIixcblx0XCJiZGx3XCI6IFwiYm9yZGVyLWxlZnQtd2lkdGhcIixcblx0XCJiZHJcIjogXCJib3JkZXItcmlnaHQ6JHsxOjFweH0gJHsyOnNvbGlkfSAkezM6IzAwMH1cIixcblx0XCJiZHJjXCI6IFwiYm9yZGVyLXJpZ2h0LWNvbG9yOiR7MTojMDAwfVwiLFxuXHRcImJkcmlcIjogXCJib3JkZXItcmlnaHQtaW1hZ2U6dXJsKCR7MH0pXCIsXG5cdFwiYmRyc1wiOiBcImJvcmRlci1yYWRpdXNcIixcblx0XCJiZHJzdFwiOiBcImJvcmRlci1yaWdodC1zdHlsZVwiLFxuXHRcImJkcndcIjogXCJib3JkZXItcmlnaHQtd2lkdGhcIixcblx0XCJiZHNcIjogXCJib3JkZXItc3R5bGU6bm9uZXxoaWRkZW58ZG90dGVkfGRhc2hlZHxzb2xpZHxkb3VibGV8ZG90LWRhc2h8ZG90LWRvdC1kYXNofHdhdmV8Z3Jvb3ZlfHJpZGdlfGluc2V0fG91dHNldFwiLFxuXHRcImJkc3BcIjogXCJib3JkZXItc3BhY2luZ1wiLFxuXHRcImJkdFwiOiBcImJvcmRlci10b3A6JHsxOjFweH0gJHsyOnNvbGlkfSAkezM6IzAwMH1cIixcblx0XCJiZHRjXCI6IFwiYm9yZGVyLXRvcC1jb2xvcjokezE6IzAwMH1cIixcblx0XCJiZHRpXCI6IFwiYm9yZGVyLXRvcC1pbWFnZTp1cmwoJHswfSlcIixcblx0XCJiZHRsaVwiOiBcImJvcmRlci10b3AtbGVmdC1pbWFnZTp1cmwoJHswfSl8Y29udGludWVcIixcblx0XCJiZHRscnNcIjogXCJib3JkZXItdG9wLWxlZnQtcmFkaXVzXCIsXG5cdFwiYmR0cmlcIjogXCJib3JkZXItdG9wLXJpZ2h0LWltYWdlOnVybCgkezB9KXxjb250aW51ZVwiLFxuXHRcImJkdHJyc1wiOiBcImJvcmRlci10b3AtcmlnaHQtcmFkaXVzXCIsXG5cdFwiYmR0c1wiOiBcImJvcmRlci10b3Atc3R5bGVcIixcblx0XCJiZHR3XCI6IFwiYm9yZGVyLXRvcC13aWR0aFwiLFxuXHRcImJkd1wiOiBcImJvcmRlci13aWR0aFwiLFxuXHRcImJmdlwiOiBcImJhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVufHZpc2libGVcIixcblx0XCJiZ1wiOiBcImJhY2tncm91bmQ6JHsxOiMwMDB9XCIsXG5cdFwiYmdhXCI6IFwiYmFja2dyb3VuZC1hdHRhY2htZW50OmZpeGVkfHNjcm9sbFwiLFxuXHRcImJnYmtcIjogXCJiYWNrZ3JvdW5kLWJyZWFrOmJvdW5kaW5nLWJveHxlYWNoLWJveHxjb250aW51b3VzXCIsXG5cdFwiYmdjXCI6IFwiYmFja2dyb3VuZC1jb2xvcjojJHsxOmZmZn1cIixcblx0XCJiZ2NwXCI6IFwiYmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94fGJvcmRlci1ib3h8Y29udGVudC1ib3h8bm8tY2xpcFwiLFxuXHRcImJnaVwiOiBcImJhY2tncm91bmQtaW1hZ2U6dXJsKCR7MH0pXCIsXG5cdFwiYmdvXCI6IFwiYmFja2dyb3VuZC1vcmlnaW46cGFkZGluZy1ib3h8Ym9yZGVyLWJveHxjb250ZW50LWJveFwiLFxuXHRcImJncFwiOiBcImJhY2tncm91bmQtcG9zaXRpb246JHsxOjB9ICR7MjowfVwiLFxuXHRcImJncHhcIjogXCJiYWNrZ3JvdW5kLXBvc2l0aW9uLXhcIixcblx0XCJiZ3B5XCI6IFwiYmFja2dyb3VuZC1wb3NpdGlvbi15XCIsXG5cdFwiYmdyXCI6IFwiYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0fHJlcGVhdC14fHJlcGVhdC15fHNwYWNlfHJvdW5kXCIsXG5cdFwiYmdzelwiOiBcImJhY2tncm91bmQtc2l6ZTpjb250YWlufGNvdmVyXCIsXG5cdFwiYnhzaFwiOiBcImJveC1zaGFkb3c6JHsxOmluc2V0IH0kezI6aG9mZn0gJHszOnZvZmZ9ICR7NDpibHVyfSAkezU6IzAwMH18bm9uZVwiLFxuXHRcImJ4c3pcIjogXCJib3gtc2l6aW5nOmJvcmRlci1ib3h8Y29udGVudC1ib3h8Ym9yZGVyLWJveFwiLFxuXHRcImNcIjogXCJjb2xvcjokezE6IzAwMH1cIixcblx0XCJjclwiOiBcImNvbG9yOnJnYigkezE6MH0sICR7MjowfSwgJHszOjB9KVwiLFxuXHRcImNyYVwiOiBcImNvbG9yOnJnYmEoJHsxOjB9LCAkezI6MH0sICR7MzowfSwgJHs0Oi41fSlcIixcblx0XCJjbFwiOiBcImNsZWFyOmJvdGh8bGVmdHxyaWdodHxub25lXCIsXG5cdFwiY21cIjogXCIvKiAkezB9ICovXCIsXG5cdFwiY250XCI6IFwiY29udGVudDonJHswfSd8bm9ybWFsfG9wZW4tcXVvdGV8bm8tb3Blbi1xdW90ZXxjbG9zZS1xdW90ZXxuby1jbG9zZS1xdW90ZXxhdHRyKCR7MH0pfGNvdW50ZXIoJHswfSl8Y291bnRlcnMoJHswfSlcIixcblx0XCJjb2lcIjogXCJjb3VudGVyLWluY3JlbWVudFwiLFxuXHRcImNvbG1cIjogXCJjb2x1bW5zXCIsXG5cdFwiY29sbWNcIjogXCJjb2x1bW4tY291bnRcIixcblx0XCJjb2xtZlwiOiBcImNvbHVtbi1maWxsXCIsXG5cdFwiY29sbWdcIjogXCJjb2x1bW4tZ2FwXCIsXG5cdFwiY29sbXJcIjogXCJjb2x1bW4tcnVsZVwiLFxuXHRcImNvbG1yY1wiOiBcImNvbHVtbi1ydWxlLWNvbG9yXCIsXG5cdFwiY29sbXJzXCI6IFwiY29sdW1uLXJ1bGUtc3R5bGVcIixcblx0XCJjb2xtcndcIjogXCJjb2x1bW4tcnVsZS13aWR0aFwiLFxuXHRcImNvbG1zXCI6IFwiY29sdW1uLXNwYW5cIixcblx0XCJjb2xtd1wiOiBcImNvbHVtbi13aWR0aFwiLFxuXHRcImNvclwiOiBcImNvdW50ZXItcmVzZXRcIixcblx0XCJjcFwiOiBcImNsaXA6YXV0b3xyZWN0KCR7MTp0b3B9ICR7MjpyaWdodH0gJHszOmJvdHRvbX0gJHs0OmxlZnR9KVwiLFxuXHRcImNwc1wiOiBcImNhcHRpb24tc2lkZTp0b3B8Ym90dG9tXCIsXG5cdFwiY3VyXCI6IFwiY3Vyc29yOnBvaW50ZXJ8YXV0b3xkZWZhdWx0fGNyb3NzaGFpcnxoYW5kfGhlbHB8bW92ZXxwb2ludGVyfHRleHRcIixcblx0XCJkXCI6IFwiZGlzcGxheTpibG9ja3xub25lfGZsZXh8aW5saW5lLWZsZXh8aW5saW5lfGlubGluZS1ibG9ja3xncmlkfGlubGluZS1ncmlkfHN1YmdyaWR8bGlzdC1pdGVtfHJ1bi1pbnxjb21wYWN0fHRhYmxlfGlubGluZS10YWJsZXx0YWJsZS1jYXB0aW9ufHRhYmxlLWNvbHVtbnx0YWJsZS1jb2x1bW4tZ3JvdXB8dGFibGUtaGVhZGVyLWdyb3VwfHRhYmxlLWZvb3Rlci1ncm91cHx0YWJsZS1yb3d8dGFibGUtcm93LWdyb3VwfHRhYmxlLWNlbGx8cnVieXxydWJ5LWJhc2V8cnVieS1iYXNlLWdyb3VwfHJ1YnktdGV4dHxydWJ5LXRleHQtZ3JvdXBcIixcblx0XCJlY1wiOiBcImVtcHR5LWNlbGxzOnNob3d8aGlkZVwiLFxuXHRcImZcIjogXCJmb250OiR7MToxZW19ICR7MjpzYW5zLXNlcmlmfVwiLFxuXHRcImZkXCI6IFwiZm9udC1kaXNwbGF5OmF1dG98YmxvY2t8c3dhcHxmYWxsYmFja3xvcHRpb25hbFwiLFxuXHRcImZlZlwiOiBcImZvbnQtZWZmZWN0Om5vbmV8ZW5ncmF2ZXxlbWJvc3N8b3V0bGluZVwiLFxuXHRcImZlbVwiOiBcImZvbnQtZW1waGFzaXplXCIsXG5cdFwiZmVtcFwiOiBcImZvbnQtZW1waGFzaXplLXBvc2l0aW9uOmJlZm9yZXxhZnRlclwiLFxuXHRcImZlbXNcIjogXCJmb250LWVtcGhhc2l6ZS1zdHlsZTpub25lfGFjY2VudHxkb3R8Y2lyY2xlfGRpc2NcIixcblx0XCJmZlwiOiBcImZvbnQtZmFtaWx5OnNlcmlmfHNhbnMtc2VyaWZ8Y3Vyc2l2ZXxmYW50YXN5fG1vbm9zcGFjZVwiLFxuXHRcImZmdFwiOiBcImZvbnQtZmFtaWx5OlxcXCJUaW1lcyBOZXcgUm9tYW5cXFwiLCBUaW1lcywgQmFza2VydmlsbGUsIEdlb3JnaWEsIHNlcmlmXCIsXG5cdFwiZmZhXCI6IFwiZm9udC1mYW1pbHk6QXJpYWwsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZlwiLFxuXHRcImZmdlwiOiBcImZvbnQtZmFtaWx5OlZlcmRhbmEsIEdlbmV2YSwgc2Fucy1zZXJpZlwiLFxuXHRcImZsXCI6IFwiZmxvYXQ6bGVmdHxyaWdodHxub25lXCIsXG5cdFwiZnNcIjogXCJmb250LXN0eWxlOml0YWxpY3xub3JtYWx8b2JsaXF1ZVwiLFxuXHRcImZzbVwiOiBcImZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkfHN1YnBpeGVsLWFudGlhbGlhc2VkfG5vbmVcIixcblx0XCJmc3RcIjogXCJmb250LXN0cmV0Y2g6bm9ybWFsfHVsdHJhLWNvbmRlbnNlZHxleHRyYS1jb25kZW5zZWR8Y29uZGVuc2VkfHNlbWktY29uZGVuc2VkfHNlbWktZXhwYW5kZWR8ZXhwYW5kZWR8ZXh0cmEtZXhwYW5kZWR8dWx0cmEtZXhwYW5kZWRcIixcblx0XCJmdlwiOiBcImZvbnQtdmFyaWFudDpub3JtYWx8c21hbGwtY2Fwc1wiLFxuXHRcImZ2c1wiOiBcImZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOm5vcm1hbHxpbmhlcml0fGluaXRpYWx8dW5zZXRcIixcblx0XCJmd1wiOiBcImZvbnQtd2VpZ2h0Om5vcm1hbHxib2xkfGJvbGRlcnxsaWdodGVyXCIsXG5cdFwiZnhcIjogXCJmbGV4XCIsXG5cdFwiZnhiXCI6IFwiZmxleC1iYXNpczpmaWxsfG1heC1jb250ZW50fG1pbi1jb250ZW50fGZpdC1jb250ZW50fGNvbnRlbnRcIixcblx0XCJmeGRcIjogXCJmbGV4LWRpcmVjdGlvbjpyb3d8cm93LXJldmVyc2V8Y29sdW1ufGNvbHVtbi1yZXZlcnNlXCIsXG5cdFwiZnhmXCI6IFwiZmxleC1mbG93XCIsXG5cdFwiZnhnXCI6IFwiZmxleC1ncm93XCIsXG5cdFwiZnhzaFwiOiBcImZsZXgtc2hyaW5rXCIsXG5cdFwiZnh3XCI6IFwiZmxleC13cmFwOm5vd3JhcHx3cmFwfHdyYXAtcmV2ZXJzZVwiLFxuXHRcImZzelwiOiBcImZvbnQtc2l6ZVwiLFxuXHRcImZzemFcIjogXCJmb250LXNpemUtYWRqdXN0XCIsXG5cdFwiZ3RjXCI6IFwiZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCgkezB9KXxtaW5tYXgoKVwiLFxuXHRcImd0clwiOiBcImdyaWQtdGVtcGxhdGUtcm93czpyZXBlYXQoJHswfSl8bWlubWF4KClcIixcblx0XCJndGFcIjogXCJncmlkLXRlbXBsYXRlLWFyZWFzXCIsXG5cdFwiZ3RcIjogXCJncmlkLXRlbXBsYXRlXCIsXG5cdFwiZ2dcIjogXCJncmlkLWdhcFwiLFxuXHRcImdjZ1wiOiBcImdyaWQtY29sdW1uLWdhcFwiLFxuXHRcImdyZ1wiOiBcImdyaWQtcm93LWdhcFwiLFxuXHRcImdhY1wiOiBcImdyaWQtYXV0by1jb2x1bW5zOmF1dG98bWlubWF4KClcIixcblx0XCJnYXJcIjogXCJncmlkLWF1dG8tcm93czphdXRvfG1pbm1heCgpXCIsXG5cdFwiZ2FmXCI6IFwiZ3JpZC1hdXRvLWZsb3c6cm93fGNvbHVtbnxkZW5zZXxpbmhlcml0fGluaXRpYWx8dW5zZXRcIixcblx0XCJnZFwiOiBcImdyaWRcIixcblx0XCJnY1wiOiBcImdyaWQtY29sdW1uXCIsXG5cdFwiZ2NzXCI6IFwiZ3JpZC1jb2x1bW4tc3RhcnRcIixcblx0XCJnY2VcIjogXCJncmlkLWNvbHVtbi1lbmRcIixcblx0XCJnclwiOiBcImdyaWQtcm93XCIsXG5cdFwiZ3JzXCI6IFwiZ3JpZC1yb3ctc3RhcnRcIixcblx0XCJncmVcIjogXCJncmlkLXJvdy1lbmRcIixcblx0XCJnYVwiOiBcImdyaWQtYXJlYVwiLFxuXHRcImhcIjogXCJoZWlnaHRcIixcblx0XCJqY1wiOiBcImp1c3RpZnktY29udGVudDpzdGFydHxlbmR8c3RyZXRjaHxmbGV4LXN0YXJ0fGZsZXgtZW5kfGNlbnRlcnxzcGFjZS1iZXR3ZWVufHNwYWNlLWFyb3VuZHxzcGFjZS1ldmVubHlcIixcblx0XCJqaVwiOiBcImp1c3RpZnktaXRlbXM6c3RhcnR8ZW5kfGNlbnRlcnxzdHJldGNoXCIsXG5cdFwianNcIjogXCJqdXN0aWZ5LXNlbGY6c3RhcnR8ZW5kfGNlbnRlcnxzdHJldGNoXCIsXG5cdFwibFwiOiBcImxlZnRcIixcblx0XCJsZ1wiOiBcImJhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KCR7MX0pXCIsXG5cdFwibGhcIjogXCJsaW5lLWhlaWdodFwiLFxuXHRcImxpc1wiOiBcImxpc3Qtc3R5bGVcIixcblx0XCJsaXNpXCI6IFwibGlzdC1zdHlsZS1pbWFnZVwiLFxuXHRcImxpc3BcIjogXCJsaXN0LXN0eWxlLXBvc2l0aW9uOmluc2lkZXxvdXRzaWRlXCIsXG5cdFwibGlzdFwiOiBcImxpc3Qtc3R5bGUtdHlwZTpkaXNjfGNpcmNsZXxzcXVhcmV8ZGVjaW1hbHxkZWNpbWFsLWxlYWRpbmctemVyb3xsb3dlci1yb21hbnx1cHBlci1yb21hblwiLFxuXHRcImx0c1wiOiBcImxldHRlci1zcGFjaW5nOm5vcm1hbFwiLFxuXHRcIm1cIjogXCJtYXJnaW5cIixcblx0XCJtYWhcIjogXCJtYXgtaGVpZ2h0XCIsXG5cdFwibWFyXCI6IFwibWF4LXJlc29sdXRpb25cIixcblx0XCJtYXdcIjogXCJtYXgtd2lkdGhcIixcblx0XCJtYlwiOiBcIm1hcmdpbi1ib3R0b21cIixcblx0XCJtaWhcIjogXCJtaW4taGVpZ2h0XCIsXG5cdFwibWlyXCI6IFwibWluLXJlc29sdXRpb25cIixcblx0XCJtaXdcIjogXCJtaW4td2lkdGhcIixcblx0XCJtbFwiOiBcIm1hcmdpbi1sZWZ0XCIsXG5cdFwibXJcIjogXCJtYXJnaW4tcmlnaHRcIixcblx0XCJtdFwiOiBcIm1hcmdpbi10b3BcIixcblx0XCJvbFwiOiBcIm91dGxpbmVcIixcblx0XCJvbGNcIjogXCJvdXRsaW5lLWNvbG9yOiR7MTojMDAwfXxpbnZlcnRcIixcblx0XCJvbG9cIjogXCJvdXRsaW5lLW9mZnNldFwiLFxuXHRcIm9sc1wiOiBcIm91dGxpbmUtc3R5bGU6bm9uZXxkb3R0ZWR8ZGFzaGVkfHNvbGlkfGRvdWJsZXxncm9vdmV8cmlkZ2V8aW5zZXR8b3V0c2V0XCIsXG5cdFwib2x3XCI6IFwib3V0bGluZS13aWR0aHx0aGlufG1lZGl1bXx0aGlja1wiLFxuXHRcIm9wfG9wYVwiOiBcIm9wYWNpdHlcIixcblx0XCJvcmRcIjogXCJvcmRlclwiLFxuXHRcIm9yaVwiOiBcIm9yaWVudGF0aW9uOmxhbmRzY2FwZXxwb3J0cmFpdFwiLFxuXHRcIm9ycFwiOiBcIm9ycGhhbnNcIixcblx0XCJvdlwiOiBcIm92ZXJmbG93OmhpZGRlbnx2aXNpYmxlfGhpZGRlbnxzY3JvbGx8YXV0b1wiLFxuXHRcIm92c1wiOiBcIm92ZXJmbG93LXN0eWxlOnNjcm9sbGJhcnxhdXRvfHNjcm9sbGJhcnxwYW5uZXJ8bW92ZXxtYXJxdWVlXCIsXG5cdFwib3Z4XCI6IFwib3ZlcmZsb3cteDpoaWRkZW58dmlzaWJsZXxoaWRkZW58c2Nyb2xsfGF1dG9cIixcblx0XCJvdnlcIjogXCJvdmVyZmxvdy15OmhpZGRlbnx2aXNpYmxlfGhpZGRlbnxzY3JvbGx8YXV0b1wiLFxuXHRcInBcIjogXCJwYWRkaW5nXCIsXG5cdFwicGJcIjogXCJwYWRkaW5nLWJvdHRvbVwiLFxuXHRcInBnYmFcIjogXCJwYWdlLWJyZWFrLWFmdGVyOmF1dG98YWx3YXlzfGxlZnR8cmlnaHRcIixcblx0XCJwZ2JiXCI6IFwicGFnZS1icmVhay1iZWZvcmU6YXV0b3xhbHdheXN8bGVmdHxyaWdodFwiLFxuXHRcInBnYmlcIjogXCJwYWdlLWJyZWFrLWluc2lkZTphdXRvfGF2b2lkXCIsXG5cdFwicGxcIjogXCJwYWRkaW5nLWxlZnRcIixcblx0XCJwb3NcIjogXCJwb3NpdGlvbjpyZWxhdGl2ZXxhYnNvbHV0ZXxyZWxhdGl2ZXxmaXhlZHxzdGF0aWNcIixcblx0XCJwclwiOiBcInBhZGRpbmctcmlnaHRcIixcblx0XCJwdFwiOiBcInBhZGRpbmctdG9wXCIsXG5cdFwicVwiOiBcInF1b3Rlc1wiLFxuXHRcInFlblwiOiBcInF1b3RlczonXFxcXDIwMUMnICdcXFxcMjAxRCcgJ1xcXFwyMDE4JyAnXFxcXDIwMTknXCIsXG5cdFwicXJ1XCI6IFwicXVvdGVzOidcXFxcMDBBQicgJ1xcXFwwMEJCJyAnXFxcXDIwMUUnICdcXFxcMjAxQydcIixcblx0XCJyXCI6IFwicmlnaHRcIixcblx0XCJyc3pcIjogXCJyZXNpemU6bm9uZXxib3RofGhvcml6b250YWx8dmVydGljYWxcIixcblx0XCJ0XCI6IFwidG9wXCIsXG5cdFwidGFcIjogXCJ0ZXh0LWFsaWduOmxlZnR8Y2VudGVyfHJpZ2h0fGp1c3RpZnlcIixcblx0XCJ0YWxcIjogXCJ0ZXh0LWFsaWduLWxhc3Q6bGVmdHxjZW50ZXJ8cmlnaHRcIixcblx0XCJ0YmxcIjogXCJ0YWJsZS1sYXlvdXQ6Zml4ZWRcIixcblx0XCJ0ZFwiOiBcInRleHQtZGVjb3JhdGlvbjpub25lfHVuZGVybGluZXxvdmVybGluZXxsaW5lLXRocm91Z2hcIixcblx0XCJ0ZVwiOiBcInRleHQtZW1waGFzaXM6bm9uZXxhY2NlbnR8ZG90fGNpcmNsZXxkaXNjfGJlZm9yZXxhZnRlclwiLFxuXHRcInRoXCI6IFwidGV4dC1oZWlnaHQ6YXV0b3xmb250LXNpemV8dGV4dC1zaXplfG1heC1zaXplXCIsXG5cdFwidGlcIjogXCJ0ZXh0LWluZGVudFwiLFxuXHRcInRqXCI6IFwidGV4dC1qdXN0aWZ5OmF1dG98aW50ZXItd29yZHxpbnRlci1pZGVvZ3JhcGh8aW50ZXItY2x1c3RlcnxkaXN0cmlidXRlfGthc2hpZGF8dGliZXRhblwiLFxuXHRcInRvXCI6IFwidGV4dC1vdXRsaW5lOiR7MTowfSAkezI6MH0gJHszOiMwMDB9XCIsXG5cdFwidG92XCI6IFwidGV4dC1vdmVyZmxvdzplbGxpcHNpc3xjbGlwXCIsXG5cdFwidHJcIjogXCJ0ZXh0LXJlcGxhY2VcIixcblx0XCJ0cmZcIjogXCJ0cmFuc2Zvcm06JHsxfXxza2V3WCgkezE6YW5nbGV9KXxza2V3WSgkezE6YW5nbGV9KXxzY2FsZSgkezE6eH0sICR7Mjp5fSl8c2NhbGVYKCR7MTp4fSl8c2NhbGVZKCR7MTp5fSl8c2NhbGVaKCR7MTp6fSl8c2NhbGUzZCgkezE6eH0sICR7Mjp5fSwgJHszOnp9KXxyb3RhdGUoJHsxOmFuZ2xlfSl8cm90YXRlWCgkezE6YW5nbGV9KXxyb3RhdGVZKCR7MTphbmdsZX0pfHJvdGF0ZVooJHsxOmFuZ2xlfSl8dHJhbnNsYXRlKCR7MTp4fSwgJHsyOnl9KXx0cmFuc2xhdGVYKCR7MTp4fSl8dHJhbnNsYXRlWSgkezE6eX0pfHRyYW5zbGF0ZVooJHsxOnp9KXx0cmFuc2xhdGUzZCgkezE6dHh9LCAkezI6dHl9LCAkezM6dHp9KVwiLFxuXHRcInRyZm9cIjogXCJ0cmFuc2Zvcm0tb3JpZ2luXCIsXG5cdFwidHJmc1wiOiBcInRyYW5zZm9ybS1zdHlsZTpwcmVzZXJ2ZS0zZFwiLFxuXHRcInRyc1wiOiBcInRyYW5zaXRpb246JHsxOnByb3B9ICR7Mjp0aW1lfVwiLFxuXHRcInRyc2RlXCI6IFwidHJhbnNpdGlvbi1kZWxheTokezE6dGltZX1cIixcblx0XCJ0cnNkdVwiOiBcInRyYW5zaXRpb24tZHVyYXRpb246JHsxOnRpbWV9XCIsXG5cdFwidHJzcFwiOiBcInRyYW5zaXRpb24tcHJvcGVydHk6JHsxOnByb3B9XCIsXG5cdFwidHJzdGZcIjogXCJ0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjokezE6Zm59XCIsXG5cdFwidHNoXCI6IFwidGV4dC1zaGFkb3c6JHsxOmhvZmZ9ICR7Mjp2b2ZmfSAkezM6Ymx1cn0gJHs0OiMwMDB9XCIsXG5cdFwidHRcIjogXCJ0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2V8bG93ZXJjYXNlfGNhcGl0YWxpemV8bm9uZVwiLFxuXHRcInR3XCI6IFwidGV4dC13cmFwOm5vbmV8bm9ybWFsfHVucmVzdHJpY3RlZHxzdXBwcmVzc1wiLFxuXHRcInVzXCI6IFwidXNlci1zZWxlY3Q6bm9uZVwiLFxuXHRcInZcIjogXCJ2aXNpYmlsaXR5OmhpZGRlbnx2aXNpYmxlfGNvbGxhcHNlXCIsXG5cdFwidmFcIjogXCJ2ZXJ0aWNhbC1hbGlnbjp0b3B8c3VwZXJ8dGV4dC10b3B8bWlkZGxlfGJhc2VsaW5lfGJvdHRvbXx0ZXh0LWJvdHRvbXxzdWJcIixcblx0XCJ3XCI6IFwid2lkdGhcIixcblx0XCJ3aHNcIjogXCJ3aGl0ZS1zcGFjZTpub3dyYXB8cHJlfHByZS13cmFwfHByZS1saW5lfG5vcm1hbFwiLFxuXHRcIndoc2NcIjogXCJ3aGl0ZS1zcGFjZS1jb2xsYXBzZTpub3JtYWx8a2VlcC1hbGx8bG9vc2V8YnJlYWstc3RyaWN0fGJyZWFrLWFsbFwiLFxuXHRcIndpZFwiOiBcIndpZG93c1wiLFxuXHRcIndtXCI6IFwid3JpdGluZy1tb2RlOmxyLXRifGxyLXRifGxyLWJ0fHJsLXRifHJsLWJ0fHRiLXJsfHRiLWxyfGJ0LWxyfGJ0LXJsXCIsXG5cdFwid29iXCI6IFwid29yZC1icmVhazpub3JtYWx8a2VlcC1hbGx8YnJlYWstYWxsXCIsXG5cdFwid29zXCI6IFwid29yZC1zcGFjaW5nXCIsXG5cdFwid293XCI6IFwid29yZC13cmFwOm5vbmV8dW5yZXN0cmljdGVkfHN1cHByZXNzfGJyZWFrLXdvcmR8bm9ybWFsXCIsXG5cdFwielwiOiBcInotaW5kZXhcIixcblx0XCJ6b21cIjogXCJ6b29tOjFcIlxufTtcblxudmFyIHhzbFNuaXBwZXRzID0ge1xuICAgIFwidG18dG1hdGNoXCI6IFwieHNsOnRlbXBsYXRlW21hdGNoIG1vZGVdXCIsXG4gICAgXCJ0bnx0bmFtZVwiOiBcInhzbDp0ZW1wbGF0ZVtuYW1lXVwiLFxuICAgIFwiY2FsbFwiOiBcInhzbDpjYWxsLXRlbXBsYXRlW25hbWVdXCIsXG4gICAgXCJhcFwiOiBcInhzbDphcHBseS10ZW1wbGF0ZXNbc2VsZWN0IG1vZGVdXCIsXG4gICAgXCJhcGlcIjogXCJ4c2w6YXBwbHktaW1wb3J0c1wiLFxuICAgIFwiaW1wXCI6IFwieHNsOmltcG9ydFtocmVmXVwiLFxuICAgIFwiaW5jXCI6IFwieHNsOmluY2x1ZGVbaHJlZl1cIixcbiAgICBcImNoXCI6IFwieHNsOmNob29zZVwiLFxuICAgIFwid2h8eHNsOndoZW5cIjogXCJ4c2w6d2hlblt0ZXN0XVwiLFxuICAgIFwib3RcIjogXCJ4c2w6b3RoZXJ3aXNlXCIsXG4gICAgXCJpZlwiOiBcInhzbDppZlt0ZXN0XVwiLFxuICAgIFwicGFyXCI6IFwieHNsOnBhcmFtW25hbWVdXCIsXG4gICAgXCJwYXJlXCI6IFwieHNsOnBhcmFtW25hbWUgc2VsZWN0XVwiLFxuICAgIFwidmFyXCI6IFwieHNsOnZhcmlhYmxlW25hbWVdXCIsXG4gICAgXCJ2YXJlXCI6IFwieHNsOnZhcmlhYmxlW25hbWUgc2VsZWN0XVwiLFxuICAgIFwid3BcIjogXCJ4c2w6d2l0aC1wYXJhbVtuYW1lIHNlbGVjdF1cIixcbiAgICBcImtleVwiOiBcInhzbDprZXlbbmFtZSBtYXRjaCB1c2VdXCIsXG4gICAgXCJlbGVtXCI6IFwieHNsOmVsZW1lbnRbbmFtZV1cIixcbiAgICBcImF0dHJcIjogXCJ4c2w6YXR0cmlidXRlW25hbWVdXCIsXG4gICAgXCJhdHRyc1wiOiBcInhzbDphdHRyaWJ1dGUtc2V0W25hbWVdXCIsXG4gICAgXCJjcFwiOiBcInhzbDpjb3B5W3NlbGVjdF1cIixcbiAgICBcImNvXCI6IFwieHNsOmNvcHktb2Zbc2VsZWN0XVwiLFxuICAgIFwidmFsXCI6IFwieHNsOnZhbHVlLW9mW3NlbGVjdF1cIixcbiAgICBcImZvcnxlYWNoXCI6IFwieHNsOmZvci1lYWNoW3NlbGVjdF1cIixcbiAgICBcInRleFwiOiBcInhzbDp0ZXh0XCIsXG4gICAgXCJjb21cIjogXCJ4c2w6Y29tbWVudFwiLFxuICAgIFwibXNnXCI6IFwieHNsOm1lc3NhZ2VbdGVybWluYXRlPW5vXVwiLFxuICAgIFwiZmFsbFwiOiBcInhzbDpmYWxsYmFja1wiLFxuICAgIFwibnVtXCI6IFwieHNsOm51bWJlclt2YWx1ZV1cIixcbiAgICBcIm5hbVwiOiBcIm5hbWVzcGFjZS1hbGlhc1tzdHlsZXNoZWV0LXByZWZpeCByZXN1bHQtcHJlZml4XVwiLFxuICAgIFwicHJlc1wiOiBcInhzbDpwcmVzZXJ2ZS1zcGFjZVtlbGVtZW50c11cIixcbiAgICBcInN0cmlwXCI6IFwieHNsOnN0cmlwLXNwYWNlW2VsZW1lbnRzXVwiLFxuICAgIFwicHJvY1wiOiBcInhzbDpwcm9jZXNzaW5nLWluc3RydWN0aW9uW25hbWVdXCIsXG4gICAgXCJzb3J0XCI6IFwieHNsOnNvcnRbc2VsZWN0IG9yZGVyXVwiLFxuICAgIFwiY2hvb3NlXCI6IFwieHNsOmNob29zZT54c2w6d2hlbit4c2w6b3RoZXJ3aXNlXCIsXG4gICAgXCJ4c2xcIjogXCIhISEreHNsOnN0eWxlc2hlZXRbdmVyc2lvbj0xLjAgeG1sbnM6eHNsPWh0dHA6Ly93d3cudzMub3JnLzE5OTkvWFNML1RyYW5zZm9ybV0+e1xcbnx9XCIsXG4gICAgXCIhISFcIjogXCJ7PD94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwiVVRGLThcXFwiPz59XCJcbn07XG5cbnZhciBwdWdTbmlwcGV0cyA9IHtcblx0XCIhISFcIjogXCJ7ZG9jdHlwZSBodG1sfVwiXG59O1xuXG52YXIgdmFyaWFibGVzID0ge1xuXHRcImxhbmdcIjogXCJlblwiLFxuXHRcImxvY2FsZVwiOiBcImVuLVVTXCIsXG5cdFwiY2hhcnNldFwiOiBcIlVURi04XCIsXG5cdFwiaW5kZW50YXRpb25cIjogXCJcXHRcIixcblx0XCJuZXdsaW5lXCI6IFwiXFxuXCJcbn07XG5cbi8qKlxuICogRGVmYXVsdCBzeW50YXhlcyBmb3IgYWJicmV2aWF0aW9uIHR5cGVzXG4gKi9cbmNvbnN0IGRlZmF1bHRTeW50YXhlcyA9IHtcbiAgICBtYXJrdXA6ICdodG1sJyxcbiAgICBzdHlsZXNoZWV0OiAnY3NzJ1xufTtcbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICdpbmxpbmVFbGVtZW50cyc6IFtcbiAgICAgICAgJ2EnLCAnYWJicicsICdhY3JvbnltJywgJ2FwcGxldCcsICdiJywgJ2Jhc2Vmb250JywgJ2JkbycsXG4gICAgICAgICdiaWcnLCAnYnInLCAnYnV0dG9uJywgJ2NpdGUnLCAnY29kZScsICdkZWwnLCAnZGZuJywgJ2VtJywgJ2ZvbnQnLCAnaScsXG4gICAgICAgICdpZnJhbWUnLCAnaW1nJywgJ2lucHV0JywgJ2lucycsICdrYmQnLCAnbGFiZWwnLCAnbWFwJywgJ29iamVjdCcsICdxJyxcbiAgICAgICAgJ3MnLCAnc2FtcCcsICdzZWxlY3QnLCAnc21hbGwnLCAnc3BhbicsICdzdHJpa2UnLCAnc3Ryb25nJywgJ3N1YicsICdzdXAnLFxuICAgICAgICAndGV4dGFyZWEnLCAndHQnLCAndScsICd2YXInXG4gICAgXSxcbiAgICAnb3V0cHV0LmluZGVudCc6ICdcXHQnLFxuICAgICdvdXRwdXQuYmFzZUluZGVudCc6ICcnLFxuICAgICdvdXRwdXQubmV3bGluZSc6ICdcXG4nLFxuICAgICdvdXRwdXQudGFnQ2FzZSc6ICcnLFxuICAgICdvdXRwdXQuYXR0cmlidXRlQ2FzZSc6ICcnLFxuICAgICdvdXRwdXQuYXR0cmlidXRlUXVvdGVzJzogJ2RvdWJsZScsXG4gICAgJ291dHB1dC5mb3JtYXQnOiB0cnVlLFxuICAgICdvdXRwdXQuZm9ybWF0TGVhZk5vZGUnOiBmYWxzZSxcbiAgICAnb3V0cHV0LmZvcm1hdFNraXAnOiBbJ2h0bWwnXSxcbiAgICAnb3V0cHV0LmZvcm1hdEZvcmNlJzogWydib2R5J10sXG4gICAgJ291dHB1dC5pbmxpbmVCcmVhayc6IDMsXG4gICAgJ291dHB1dC5jb21wYWN0Qm9vbGVhbic6IGZhbHNlLFxuICAgICdvdXRwdXQuYm9vbGVhbkF0dHJpYnV0ZXMnOiBbXG4gICAgICAgICdjb250ZW50ZWRpdGFibGUnLCAnc2VhbWxlc3MnLCAnYXN5bmMnLCAnYXV0b2ZvY3VzJyxcbiAgICAgICAgJ2F1dG9wbGF5JywgJ2NoZWNrZWQnLCAnY29udHJvbHMnLCAnZGVmZXInLCAnZGlzYWJsZWQnLCAnZm9ybW5vdmFsaWRhdGUnLFxuICAgICAgICAnaGlkZGVuJywgJ2lzbWFwJywgJ2xvb3AnLCAnbXVsdGlwbGUnLCAnbXV0ZWQnLCAnbm92YWxpZGF0ZScsICdyZWFkb25seScsXG4gICAgICAgICdyZXF1aXJlZCcsICdyZXZlcnNlZCcsICdzZWxlY3RlZCcsICd0eXBlbXVzdG1hdGNoJ1xuICAgIF0sXG4gICAgJ291dHB1dC5yZXZlcnNlQXR0cmlidXRlcyc6IGZhbHNlLFxuICAgICdvdXRwdXQuc2VsZkNsb3NpbmdTdHlsZSc6ICdodG1sJyxcbiAgICAnb3V0cHV0LmZpZWxkJzogKGluZGV4LCBwbGFjZWhvbGRlcikgPT4gcGxhY2Vob2xkZXIsXG4gICAgJ291dHB1dC50ZXh0JzogdGV4dCA9PiB0ZXh0LFxuICAgICdtYXJrdXAuaHJlZic6IHRydWUsXG4gICAgJ2NvbW1lbnQuZW5hYmxlZCc6IGZhbHNlLFxuICAgICdjb21tZW50LnRyaWdnZXInOiBbJ2lkJywgJ2NsYXNzJ10sXG4gICAgJ2NvbW1lbnQuYmVmb3JlJzogJycsXG4gICAgJ2NvbW1lbnQuYWZ0ZXInOiAnXFxuPCEtLSAvWyNJRF1bLkNMQVNTXSAtLT4nLFxuICAgICdiZW0uZW5hYmxlZCc6IGZhbHNlLFxuICAgICdiZW0uZWxlbWVudCc6ICdfXycsXG4gICAgJ2JlbS5tb2RpZmllcic6ICdfJyxcbiAgICAnanN4LmVuYWJsZWQnOiBmYWxzZSxcbiAgICAnc3R5bGVzaGVldC5rZXl3b3Jkcyc6IFsnYXV0bycsICdpbmhlcml0JywgJ3Vuc2V0JywgJ25vbmUnXSxcbiAgICAnc3R5bGVzaGVldC51bml0bGVzcyc6IFsnei1pbmRleCcsICdsaW5lLWhlaWdodCcsICdvcGFjaXR5JywgJ2ZvbnQtd2VpZ2h0JywgJ3pvb20nLCAnZmxleCcsICdmbGV4LWdyb3cnLCAnZmxleC1zaHJpbmsnXSxcbiAgICAnc3R5bGVzaGVldC5zaG9ydEhleCc6IHRydWUsXG4gICAgJ3N0eWxlc2hlZXQuYmV0d2Vlbic6ICc6ICcsXG4gICAgJ3N0eWxlc2hlZXQuYWZ0ZXInOiAnOycsXG4gICAgJ3N0eWxlc2hlZXQuaW50VW5pdCc6ICdweCcsXG4gICAgJ3N0eWxlc2hlZXQuZmxvYXRVbml0JzogJ2VtJyxcbiAgICAnc3R5bGVzaGVldC51bml0QWxpYXNlcyc6IHsgZTogJ2VtJywgcDogJyUnLCB4OiAnZXgnLCByOiAncmVtJyB9LFxuICAgICdzdHlsZXNoZWV0Lmpzb24nOiBmYWxzZSxcbiAgICAnc3R5bGVzaGVldC5qc29uRG91YmxlUXVvdGVzJzogZmFsc2UsXG4gICAgJ3N0eWxlc2hlZXQuZnV6enlTZWFyY2hNaW5TY29yZSc6IDBcbn07XG5jb25zdCBkZWZhdWx0Q29uZmlnID0ge1xuICAgIHR5cGU6ICdtYXJrdXAnLFxuICAgIHN5bnRheDogJ2h0bWwnLFxuICAgIHZhcmlhYmxlcyxcbiAgICBzbmlwcGV0czoge30sXG4gICAgb3B0aW9uczogZGVmYXVsdE9wdGlvbnNcbn07XG4vKipcbiAqIERlZmF1bHQgcGVyLXN5bnRheCBjb25maWdcbiAqL1xuY29uc3Qgc3ludGF4Q29uZmlnID0ge1xuICAgIG1hcmt1cDoge1xuICAgICAgICBzbmlwcGV0czogcGFyc2VTbmlwcGV0cyhtYXJrdXBTbmlwcGV0cyksXG4gICAgfSxcbiAgICB4aHRtbDoge1xuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAnb3V0cHV0LnNlbGZDbG9zaW5nU3R5bGUnOiAneGh0bWwnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHhtbDoge1xuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAnb3V0cHV0LnNlbGZDbG9zaW5nU3R5bGUnOiAneG1sJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICB4c2w6IHtcbiAgICAgICAgc25pcHBldHM6IHBhcnNlU25pcHBldHMoeHNsU25pcHBldHMpLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAnb3V0cHV0LnNlbGZDbG9zaW5nU3R5bGUnOiAneG1sJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBqc3g6IHtcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgJ2pzeC5lbmFibGVkJzogdHJ1ZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBwdWc6IHtcbiAgICAgICAgc25pcHBldHM6IHBhcnNlU25pcHBldHMocHVnU25pcHBldHMpXG4gICAgfSxcbiAgICBzdHlsZXNoZWV0OiB7XG4gICAgICAgIHNuaXBwZXRzOiBwYXJzZVNuaXBwZXRzKHN0eWxlc2hlZXRTbmlwcGV0cylcbiAgICB9LFxuICAgIHNhc3M6IHtcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgJ3N0eWxlc2hlZXQuYWZ0ZXInOiAnJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBzdHlsdXM6IHtcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgJ3N0eWxlc2hlZXQuYmV0d2Vlbic6ICcgJyxcbiAgICAgICAgICAgICdzdHlsZXNoZWV0LmFmdGVyJzogJycsXG4gICAgICAgIH1cbiAgICB9XG59O1xuLyoqXG4gKiBQYXJzZXMgcmF3IHNuaXBwZXRzIGRlZmluaXRpb25zIHdpdGggcG9zc2libHkgbXVsdGlwbGUga2V5cyBpbnRvIGEgcGxhblxuICogc25pcHBldCBtYXBcbiAqL1xuZnVuY3Rpb24gcGFyc2VTbmlwcGV0cyhzbmlwcGV0cykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHNuaXBwZXRzKS5mb3JFYWNoKGsgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2Ygay5zcGxpdCgnfCcpKSB7XG4gICAgICAgICAgICByZXN1bHRbbmFtZV0gPSBzbmlwcGV0c1trXTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiByZXNvbHZlQ29uZmlnKGNvbmZpZyA9IHt9LCBnbG9iYWxzID0ge30pIHtcbiAgICBjb25zdCB0eXBlID0gY29uZmlnLnR5cGUgfHwgJ21hcmt1cCc7XG4gICAgY29uc3Qgc3ludGF4ID0gY29uZmlnLnN5bnRheCB8fCBkZWZhdWx0U3ludGF4ZXNbdHlwZV07XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0Q29uZmlnKSwgY29uZmlnKSwgeyB0eXBlLFxuICAgICAgICBzeW50YXgsIHZhcmlhYmxlczogbWVyZ2VkRGF0YSh0eXBlLCBzeW50YXgsICd2YXJpYWJsZXMnLCBjb25maWcsIGdsb2JhbHMpLCBzbmlwcGV0czogbWVyZ2VkRGF0YSh0eXBlLCBzeW50YXgsICdzbmlwcGV0cycsIGNvbmZpZywgZ2xvYmFscyksIG9wdGlvbnM6IG1lcmdlZERhdGEodHlwZSwgc3ludGF4LCAnb3B0aW9ucycsIGNvbmZpZywgZ2xvYmFscykgfSk7XG59XG5mdW5jdGlvbiBtZXJnZWREYXRhKHR5cGUsIHN5bnRheCwga2V5LCBjb25maWcsIGdsb2JhbHMgPSB7fSkge1xuICAgIGNvbnN0IHR5cGVEZWZhdWx0cyA9IHN5bnRheENvbmZpZ1t0eXBlXTtcbiAgICBjb25zdCB0eXBlT3ZlcnJpZGUgPSBnbG9iYWxzW3R5cGVdO1xuICAgIGNvbnN0IHN5bnRheERlZmF1bHRzID0gc3ludGF4Q29uZmlnW3N5bnRheF07XG4gICAgY29uc3Qgc3ludGF4T3ZlcnJpZGUgPSBnbG9iYWxzW3N5bnRheF07XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0Q29uZmlnW2tleV0pLCAodHlwZURlZmF1bHRzICYmIHR5cGVEZWZhdWx0c1trZXldKSksIChzeW50YXhEZWZhdWx0cyAmJiBzeW50YXhEZWZhdWx0c1trZXldKSksICh0eXBlT3ZlcnJpZGUgJiYgdHlwZU92ZXJyaWRlW2tleV0pKSwgKHN5bnRheE92ZXJyaWRlICYmIHN5bnRheE92ZXJyaWRlW2tleV0pKSwgY29uZmlnW2tleV0pO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgc3RydWN0dXJlIGZvciBzY2FubmluZyBnaXZlbiBzdHJpbmcgaW4gYmFja3dhcmQgZGlyZWN0aW9uXG4gKi9cbmZ1bmN0aW9uIGJhY2t3YXJkU2Nhbm5lcih0ZXh0LCBzdGFydCA9IDApIHtcbiAgICByZXR1cm4geyB0ZXh0LCBzdGFydCwgcG9zOiB0ZXh0Lmxlbmd0aCB9O1xufVxuLyoqXG4gKiBDaGVjayBpZiBnaXZlbiBzY2FubmVyIHBvc2l0aW9uIGlzIGF0IHN0YXJ0IG9mIHNjYW5uZWQgdGV4dFxuICovXG5mdW5jdGlvbiBzb2woc2Nhbm5lcikge1xuICAgIHJldHVybiBzY2FubmVyLnBvcyA9PT0gc2Nhbm5lci5zdGFydDtcbn1cbi8qKlxuICog4oCcUGVla3PigJ0gY2hhcmFjdGVyIGNvZGUgYW4gY3VycmVudCBzY2FubmVyIGxvY2F0aW9uIHdpdGhvdXQgYWR2YW5jaW5nIGl0XG4gKi9cbmZ1bmN0aW9uIHBlZWskMShzY2FubmVyLCBvZmZzZXQgPSAwKSB7XG4gICAgcmV0dXJuIHNjYW5uZXIudGV4dC5jaGFyQ29kZUF0KHNjYW5uZXIucG9zIC0gMSArIG9mZnNldCk7XG59XG4vKipcbiAqIFJldHVybnMgY3VycmVudCBjaGFyYWN0ZXIgY29kZSBhbmQgbW92ZXMgY2hhcmFjdGVyIGxvY2F0aW9uIG9uZSBzeW1ib2wgYmFja1xuICovXG5mdW5jdGlvbiBwcmV2aW91cyhzY2FubmVyKSB7XG4gICAgaWYgKCFzb2woc2Nhbm5lcikpIHtcbiAgICAgICAgcmV0dXJuIHNjYW5uZXIudGV4dC5jaGFyQ29kZUF0KC0tc2Nhbm5lci5wb3MpO1xuICAgIH1cbn1cbi8qKlxuICogQ29uc3VtZXMgY3VycmVudCBjaGFyYWN0ZXIgY29kZSBpZiBpdCBtYXRjaGVzIGdpdmVuIGBtYXRjaGAgY29kZSBvciBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBjb25zdW1lKHNjYW5uZXIsIG1hdGNoKSB7XG4gICAgaWYgKHNvbChzY2FubmVyKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IG9rID0gdHlwZW9mIG1hdGNoID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gbWF0Y2gocGVlayQxKHNjYW5uZXIpKVxuICAgICAgICA6IG1hdGNoID09PSBwZWVrJDEoc2Nhbm5lcik7XG4gICAgaWYgKG9rKSB7XG4gICAgICAgIHNjYW5uZXIucG9zLS07XG4gICAgfVxuICAgIHJldHVybiAhIW9rO1xufVxuZnVuY3Rpb24gY29uc3VtZVdoaWxlKHNjYW5uZXIsIG1hdGNoKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBzY2FubmVyLnBvcztcbiAgICB3aGlsZSAoY29uc3VtZShzY2FubmVyLCBtYXRjaCkpIHtcbiAgICAgICAgLy8gZW1wdHlcbiAgICB9XG4gICAgcmV0dXJuIHNjYW5uZXIucG9zIDwgc3RhcnQ7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgZ2l2ZW4gY2hhcmFjdGVyIGNvZGUgaXMgYSBxdW90ZVxuICovXG5mdW5jdGlvbiBpc1F1b3RlKGMpIHtcbiAgICByZXR1cm4gYyA9PT0gMzkgLyogU2luZ2xlUXVvdGUgKi8gfHwgYyA9PT0gMzQgLyogRG91YmxlUXVvdGUgKi87XG59XG4vKipcbiAqIENvbnN1bWVzIHF1b3RlZCB2YWx1ZSwgaWYgcG9zc2libGVcbiAqIEByZXR1cm4gUmV0dXJucyBgdHJ1ZWAgaXMgdmFsdWUgd2FzIGNvbnN1bWVkXG4gKi9cbmZ1bmN0aW9uIGNvbnN1bWVRdW90ZWQoc2Nhbm5lcikge1xuICAgIGNvbnN0IHN0YXJ0ID0gc2Nhbm5lci5wb3M7XG4gICAgY29uc3QgcXVvdGUgPSBwcmV2aW91cyhzY2FubmVyKTtcbiAgICBpZiAoaXNRdW90ZShxdW90ZSkpIHtcbiAgICAgICAgd2hpbGUgKCFzb2woc2Nhbm5lcikpIHtcbiAgICAgICAgICAgIGlmIChwcmV2aW91cyhzY2FubmVyKSA9PT0gcXVvdGUgJiYgcGVlayQxKHNjYW5uZXIpICE9PSA5MiAvKiBFc2NhcGUgKi8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzY2FubmVyLnBvcyA9IHN0YXJ0O1xuICAgIHJldHVybiBmYWxzZTtcbn1cblxuY29uc3QgYnJhY2VQYWlycyA9IHtcbiAgICBbOTEgLyogU3F1YXJlTCAqL106IDkzIC8qIFNxdWFyZVIgKi8sXG4gICAgWzQwIC8qIFJvdW5kTCAqL106IDQxIC8qIFJvdW5kUiAqLyxcbiAgICBbMTIzIC8qIEN1cmx5TCAqL106IDEyNSAvKiBDdXJseVIgKi8sXG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGdpdmVuIHJlYWRlcuKAmXMgY3VycmVudCBwb3NpdGlvbiBwb2ludHMgYXQgdGhlIGVuZCBvZiBIVE1MIHRhZ1xuICovXG5mdW5jdGlvbiBpc0h0bWwoc2Nhbm5lcikge1xuICAgIGNvbnN0IHN0YXJ0ID0gc2Nhbm5lci5wb3M7XG4gICAgaWYgKCFjb25zdW1lKHNjYW5uZXIsIDYyIC8qIEFuZ2xlUmlnaHQgKi8pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IG9rID0gZmFsc2U7XG4gICAgY29uc3VtZShzY2FubmVyLCA0NyAvKiBTbGFzaCAqLyk7IC8vIHBvc3NpYmx5IHNlbGYtY2xvc2VkIGVsZW1lbnRcbiAgICB3aGlsZSAoIXNvbChzY2FubmVyKSkge1xuICAgICAgICBjb25zdW1lV2hpbGUoc2Nhbm5lciwgaXNXaGl0ZVNwYWNlKTtcbiAgICAgICAgaWYgKGNvbnN1bWVJZGVudChzY2FubmVyKSkge1xuICAgICAgICAgICAgLy8gYXRlIGlkZW50aWZpZXI6IGNvdWxkIGJlIGEgdGFnIG5hbWUsIGJvb2xlYW4gYXR0cmlidXRlIG9yIHVucXVvdGVkXG4gICAgICAgICAgICAvLyBhdHRyaWJ1dGUgdmFsdWVcbiAgICAgICAgICAgIGlmIChjb25zdW1lKHNjYW5uZXIsIDQ3IC8qIFNsYXNoICovKSkge1xuICAgICAgICAgICAgICAgIC8vIGVpdGhlciBjbG9zaW5nIHRhZyBvciBpbnZhbGlkIHRhZ1xuICAgICAgICAgICAgICAgIG9rID0gY29uc3VtZShzY2FubmVyLCA2MCAvKiBBbmdsZUxlZnQgKi8pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY29uc3VtZShzY2FubmVyLCA2MCAvKiBBbmdsZUxlZnQgKi8pKSB7XG4gICAgICAgICAgICAgICAgLy8gb3BlbmluZyB0YWdcbiAgICAgICAgICAgICAgICBvayA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjb25zdW1lKHNjYW5uZXIsIGlzV2hpdGVTcGFjZSkpIHtcbiAgICAgICAgICAgICAgICAvLyBib29sZWFuIGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY29uc3VtZShzY2FubmVyLCA2MSAvKiBFcXVhbHMgKi8pKSB7XG4gICAgICAgICAgICAgICAgLy8gc2ltcGxlIHVucXVvdGVkIHZhbHVlIG9yIGludmFsaWQgYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgaWYgKGNvbnN1bWVJZGVudChzY2FubmVyKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjb25zdW1lQXR0cmlidXRlV2l0aFVucXVvdGVkVmFsdWUoc2Nhbm5lcikpIHtcbiAgICAgICAgICAgICAgICAvLyBpZGVudGlmaWVyIHdhcyBhIHBhcnQgb2YgdW5xdW90ZWQgdmFsdWVcbiAgICAgICAgICAgICAgICBvayA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpbnZhbGlkIHRhZ1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbnN1bWVBdHRyaWJ1dGUoc2Nhbm5lcikpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBzY2FubmVyLnBvcyA9IHN0YXJ0O1xuICAgIHJldHVybiBvaztcbn1cbi8qKlxuICogQ29uc3VtZXMgSFRNTCBhdHRyaWJ1dGUgZnJvbSBnaXZlbiBzdHJpbmcuXG4gKiBAcmV0dXJuIGB0cnVlYCBpZiBhdHRyaWJ1dGUgd2FzIGNvbnN1bWVkLlxuICovXG5mdW5jdGlvbiBjb25zdW1lQXR0cmlidXRlKHNjYW5uZXIpIHtcbiAgICByZXR1cm4gY29uc3VtZUF0dHJpYnV0ZVdpdGhRdW90ZWRWYWx1ZShzY2FubmVyKSB8fCBjb25zdW1lQXR0cmlidXRlV2l0aFVucXVvdGVkVmFsdWUoc2Nhbm5lcik7XG59XG5mdW5jdGlvbiBjb25zdW1lQXR0cmlidXRlV2l0aFF1b3RlZFZhbHVlKHNjYW5uZXIpIHtcbiAgICBjb25zdCBzdGFydCA9IHNjYW5uZXIucG9zO1xuICAgIGlmIChjb25zdW1lUXVvdGVkKHNjYW5uZXIpICYmIGNvbnN1bWUoc2Nhbm5lciwgNjEgLyogRXF1YWxzICovKSAmJiBjb25zdW1lSWRlbnQoc2Nhbm5lcikpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHNjYW5uZXIucG9zID0gc3RhcnQ7XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gY29uc3VtZUF0dHJpYnV0ZVdpdGhVbnF1b3RlZFZhbHVlKHNjYW5uZXIpIHtcbiAgICBjb25zdCBzdGFydCA9IHNjYW5uZXIucG9zO1xuICAgIGNvbnN0IHN0YWNrID0gW107XG4gICAgd2hpbGUgKCFzb2woc2Nhbm5lcikpIHtcbiAgICAgICAgY29uc3QgY2ggPSBwZWVrJDEoc2Nhbm5lcik7XG4gICAgICAgIGlmIChpc0Nsb3NlQnJhY2tldChjaCkpIHtcbiAgICAgICAgICAgIHN0YWNrLnB1c2goY2gpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzT3BlbkJyYWNrZXQoY2gpKSB7XG4gICAgICAgICAgICBpZiAoc3RhY2sucG9wKCkgIT09IGJyYWNlUGFpcnNbY2hdKSB7XG4gICAgICAgICAgICAgICAgLy8gVW5leHBlY3RlZCBvcGVuIGJyYWNrZXRcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghaXNVbnF1b3RlZFZhbHVlKGNoKSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgc2Nhbm5lci5wb3MtLTtcbiAgICB9XG4gICAgaWYgKHN0YXJ0ICE9PSBzY2FubmVyLnBvcyAmJiBjb25zdW1lKHNjYW5uZXIsIDYxIC8qIEVxdWFscyAqLykgJiYgY29uc3VtZUlkZW50KHNjYW5uZXIpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBzY2FubmVyLnBvcyA9IHN0YXJ0O1xuICAgIHJldHVybiBmYWxzZTtcbn1cbi8qKlxuICogQ29uc3VtZXMgSFRNTCBpZGVudGlmaWVyIGZyb20gc3RyZWFtXG4gKi9cbmZ1bmN0aW9uIGNvbnN1bWVJZGVudChzY2FubmVyKSB7XG4gICAgcmV0dXJuIGNvbnN1bWVXaGlsZShzY2FubmVyLCBpc0lkZW50KTtcbn1cbi8qKlxuICogQ2hlY2sgaWYgZ2l2ZW4gY2hhcmFjdGVyIGNvZGUgYmVsb25ncyB0byBIVE1MIGlkZW50aWZpZXJcbiAqL1xuZnVuY3Rpb24gaXNJZGVudChjaCkge1xuICAgIHJldHVybiBjaCA9PT0gNTggLyogQ29sb24gKi8gfHwgY2ggPT09IDQ1IC8qIERhc2ggKi8gfHwgaXNBbHBoYShjaCkgfHwgaXNOdW1iZXIoY2gpO1xufVxuLyoqXG4gKiBDaGVjayBpZiBnaXZlbiBjaGFyYWN0ZXIgY29kZSBpcyBhbHBoYSBjb2RlIChsZXR0ZXIgdGhvdWdoIEEgdG8gWilcbiAqL1xuZnVuY3Rpb24gaXNBbHBoYShjaCkge1xuICAgIGNoICY9IH4zMjsgLy8gcXVpY2sgaGFjayB0byBjb252ZXJ0IGFueSBjaGFyIGNvZGUgdG8gdXBwZXJjYXNlIGNoYXIgY29kZVxuICAgIHJldHVybiBjaCA+PSA2NSAmJiBjaCA8PSA5MDsgLy8gQS1aXG59XG4vKipcbiAqIENoZWNrIGlmIGdpdmVuIGNvZGUgaXMgYSBudW1iZXJcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIoY2gpIHtcbiAgICByZXR1cm4gY2ggPiA0NyAmJiBjaCA8IDU4O1xufVxuLyoqXG4gKiBDaGVjayBpZiBnaXZlbiBjb2RlIGlzIGEgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiBpc1doaXRlU3BhY2UoY2gpIHtcbiAgICByZXR1cm4gY2ggPT09IDMyIC8qIFNwYWNlICovIHx8IGNoID09PSA5IC8qIFRhYiAqLztcbn1cbi8qKlxuICogQ2hlY2sgaWYgZ2l2ZW4gY29kZSBtYXkgYmVsb25nIHRvIHVucXVvdGVkIGF0dHJpYnV0ZSB2YWx1ZVxuICovXG5mdW5jdGlvbiBpc1VucXVvdGVkVmFsdWUoY2gpIHtcbiAgICByZXR1cm4gIWlzTmFOKGNoKSAmJiBjaCAhPT0gNjEgLyogRXF1YWxzICovICYmICFpc1doaXRlU3BhY2UoY2gpICYmICFpc1F1b3RlKGNoKTtcbn1cbmZ1bmN0aW9uIGlzT3BlbkJyYWNrZXQoY2gpIHtcbiAgICByZXR1cm4gY2ggPT09IDEyMyAvKiBDdXJseUwgKi8gfHwgY2ggPT09IDQwIC8qIFJvdW5kTCAqLyB8fCBjaCA9PT0gOTEgLyogU3F1YXJlTCAqLztcbn1cbmZ1bmN0aW9uIGlzQ2xvc2VCcmFja2V0KGNoKSB7XG4gICAgcmV0dXJuIGNoID09PSAxMjUgLyogQ3VybHlSICovIHx8IGNoID09PSA0MSAvKiBSb3VuZFIgKi8gfHwgY2ggPT09IDkzIC8qIFNxdWFyZVIgKi87XG59XG5cbmNvbnN0IGNvZGUgPSAoY2gpID0+IGNoLmNoYXJDb2RlQXQoMCk7XG5jb25zdCBzcGVjaWFsQ2hhcnMgPSAnIy4qOiQtXyFAJV4rPi8nLnNwbGl0KCcnKS5tYXAoY29kZSk7XG5jb25zdCBkZWZhdWx0T3B0aW9ucyQxID0ge1xuICAgIHR5cGU6ICdtYXJrdXAnLFxuICAgIGxvb2tBaGVhZDogdHJ1ZSxcbiAgICBwcmVmaXg6ICcnXG59O1xuLyoqXG4gKiBFeHRyYWN0cyBFbW1ldCBhYmJyZXZpYXRpb24gZnJvbSBnaXZlbiBzdHJpbmcuXG4gKiBUaGUgZ29hbCBvZiB0aGlzIG1vZHVsZSBpcyB0byBleHRyYWN0IGFiYnJldmlhdGlvbiBmcm9tIGN1cnJlbnQgZWRpdG9y4oCZcyBsaW5lLFxuICogZS5nLiBsaWtlIHRoaXM6IGA8c3Bhbj4uZm9vW3RpdGxlPWJhcnxdPC9zcGFuPmAgLT4gYC5mb29bdGl0bGU9YmFyXWAsIHdoZXJlXG4gKiBgfGAgaXMgYSBjdXJyZW50IGNhcmV0IHBvc2l0aW9uLlxuICogQHBhcmFtIGxpbmUgQSB0ZXh0IGxpbmUgd2hlcmUgYWJicmV2aWF0aW9uIHNob3VsZCBiZSBleHBhbmRlZFxuICogQHBhcmFtIHBvcyBDYXJldCBwb3NpdGlvbiBpbiBsaW5lLiBJZiBub3QgZ2l2ZW4sIHVzZXMgZW5kIG9mIGxpbmVcbiAqIEBwYXJhbSBvcHRpb25zIEV4dHJhY3Rpbmcgb3B0aW9uc1xuICovXG5mdW5jdGlvbiBleHRyYWN0QWJicmV2aWF0aW9uJDEobGluZSwgcG9zID0gbGluZS5sZW5ndGgsIG9wdGlvbnMgPSB7fSkge1xuICAgIC8vIG1ha2Ugc3VyZSBgcG9zYCBpcyB3aXRoaW4gbGluZSByYW5nZVxuICAgIGNvbnN0IG9wdCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMkMSksIG9wdGlvbnMpO1xuICAgIHBvcyA9IE1hdGgubWluKGxpbmUubGVuZ3RoLCBNYXRoLm1heCgwLCBwb3MgPT0gbnVsbCA/IGxpbmUubGVuZ3RoIDogcG9zKSk7XG4gICAgaWYgKG9wdC5sb29rQWhlYWQpIHtcbiAgICAgICAgcG9zID0gb2Zmc2V0UGFzdEF1dG9DbG9zZWQobGluZSwgcG9zLCBvcHQpO1xuICAgIH1cbiAgICBsZXQgY2g7XG4gICAgY29uc3Qgc3RhcnQgPSBnZXRTdGFydE9mZnNldChsaW5lLCBwb3MsIG9wdC5wcmVmaXggfHwgJycpO1xuICAgIGlmIChzdGFydCA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICB9XG4gICAgY29uc3Qgc2Nhbm5lciA9IGJhY2t3YXJkU2Nhbm5lcihsaW5lLCBzdGFydCk7XG4gICAgc2Nhbm5lci5wb3MgPSBwb3M7XG4gICAgY29uc3Qgc3RhY2sgPSBbXTtcbiAgICB3aGlsZSAoIXNvbChzY2FubmVyKSkge1xuICAgICAgICBjaCA9IHBlZWskMShzY2FubmVyKTtcbiAgICAgICAgaWYgKHN0YWNrLmluY2x1ZGVzKDEyNSAvKiBDdXJseVIgKi8pKSB7XG4gICAgICAgICAgICBpZiAoY2ggPT09IDEyNSAvKiBDdXJseVIgKi8pIHtcbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKGNoKTtcbiAgICAgICAgICAgICAgICBzY2FubmVyLnBvcy0tO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoICE9PSAxMjMgLyogQ3VybHlMICovKSB7XG4gICAgICAgICAgICAgICAgc2Nhbm5lci5wb3MtLTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNDbG9zZUJyYWNlKGNoLCBvcHQudHlwZSkpIHtcbiAgICAgICAgICAgIHN0YWNrLnB1c2goY2gpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzT3BlbkJyYWNlKGNoLCBvcHQudHlwZSkpIHtcbiAgICAgICAgICAgIGlmIChzdGFjay5wb3AoKSAhPT0gYnJhY2VQYWlyc1tjaF0pIHtcbiAgICAgICAgICAgICAgICAvLyB1bmV4cGVjdGVkIGJyYWNlXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhY2suaW5jbHVkZXMoOTMgLyogU3F1YXJlUiAqLykgfHwgc3RhY2suaW5jbHVkZXMoMTI1IC8qIEN1cmx5UiAqLykpIHtcbiAgICAgICAgICAgIC8vIHJlc3BlY3QgYWxsIGNoYXJhY3RlcnMgaW5zaWRlIGF0dHJpYnV0ZSBzZXRzIG9yIHRleHQgbm9kZXNcbiAgICAgICAgICAgIHNjYW5uZXIucG9zLS07XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0h0bWwoc2Nhbm5lcikgfHwgIWlzQWJicmV2aWF0aW9uKGNoKSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgc2Nhbm5lci5wb3MtLTtcbiAgICB9XG4gICAgaWYgKCFzdGFjay5sZW5ndGggJiYgc2Nhbm5lci5wb3MgIT09IHBvcykge1xuICAgICAgICAvLyBGb3VuZCBzb21ldGhpbmcsIHJlbW92ZSBzb21lIGludmFsaWQgc3ltYm9scyBmcm9tIHRoZVxuICAgICAgICAvLyBiZWdpbm5pbmcgYW5kIHJldHVybiBhYmJyZXZpYXRpb25cbiAgICAgICAgY29uc3QgYWJicmV2aWF0aW9uID0gbGluZS5zbGljZShzY2FubmVyLnBvcywgcG9zKS5yZXBsYWNlKC9eWyorPl5dKy8sICcnKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFiYnJldmlhdGlvbixcbiAgICAgICAgICAgIGxvY2F0aW9uOiBwb3MgLSBhYmJyZXZpYXRpb24ubGVuZ3RoLFxuICAgICAgICAgICAgc3RhcnQ6IG9wdGlvbnMucHJlZml4XG4gICAgICAgICAgICAgICAgPyBzdGFydCAtIG9wdGlvbnMucHJlZml4Lmxlbmd0aFxuICAgICAgICAgICAgICAgIDogcG9zIC0gYWJicmV2aWF0aW9uLmxlbmd0aCxcbiAgICAgICAgICAgIGVuZDogcG9zXG4gICAgICAgIH07XG4gICAgfVxufVxuLyoqXG4gKiBSZXR1cm5zIG5ldyBgbGluZWAgaW5kZXggd2hpY2ggaXMgcmlnaHQgYWZ0ZXIgY2hhcmFjdGVycyBiZXlvdW5kIGBwb3NgIHRoYXRcbiAqIGVkaXRvciB3aWxsIGxpa2VseSBhdXRvbWF0aWNhbGx5IGNsb3NlLCBlLmcuIH0sIF0sIGFuZCBxdW90ZXNcbiAqL1xuZnVuY3Rpb24gb2Zmc2V0UGFzdEF1dG9DbG9zZWQobGluZSwgcG9zLCBvcHRpb25zKSB7XG4gICAgLy8gY2xvc2luZyBxdW90ZSBpcyBhbGxvd2VkIG9ubHkgYXMgYSBuZXh0IGNoYXJhY3RlclxuICAgIGlmIChpc1F1b3RlKGxpbmUuY2hhckNvZGVBdChwb3MpKSkge1xuICAgICAgICBwb3MrKztcbiAgICB9XG4gICAgLy8gb2Zmc2V0IHBvaW50ZXIgdW50aWwgbm9uLWF1dG9jbG9zZWQgY2hhcmFjdGVyIGlzIGZvdW5kXG4gICAgd2hpbGUgKGlzQ2xvc2VCcmFjZShsaW5lLmNoYXJDb2RlQXQocG9zKSwgb3B0aW9ucy50eXBlKSkge1xuICAgICAgICBwb3MrKztcbiAgICB9XG4gICAgcmV0dXJuIHBvcztcbn1cbi8qKlxuICogUmV0dXJucyBzdGFydCBvZmZzZXQgKGxlZnQgbGltaXQpIGluIGBsaW5lYCB3aGVyZSB3ZSBzaG91bGQgc3RvcCBsb29raW5nIGZvclxuICogYWJicmV2aWF0aW9uOiBpdOKAmXMgbmVhcmVzdCB0byBgcG9zYCBsb2NhdGlvbiBvZiBgcHJlZml4YCB0b2tlblxuICovXG5mdW5jdGlvbiBnZXRTdGFydE9mZnNldChsaW5lLCBwb3MsIHByZWZpeCkge1xuICAgIGlmICghcHJlZml4KSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBjb25zdCBzY2FubmVyID0gYmFja3dhcmRTY2FubmVyKGxpbmUpO1xuICAgIGNvbnN0IGNvbXBpbGVkUHJlZml4ID0gcHJlZml4LnNwbGl0KCcnKS5tYXAoY29kZSk7XG4gICAgc2Nhbm5lci5wb3MgPSBwb3M7XG4gICAgbGV0IHJlc3VsdDtcbiAgICB3aGlsZSAoIXNvbChzY2FubmVyKSkge1xuICAgICAgICBpZiAoY29uc3VtZVBhaXIoc2Nhbm5lciwgOTMgLyogU3F1YXJlUiAqLywgOTEgLyogU3F1YXJlTCAqLykgfHwgY29uc3VtZVBhaXIoc2Nhbm5lciwgMTI1IC8qIEN1cmx5UiAqLywgMTIzIC8qIEN1cmx5TCAqLykpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCA9IHNjYW5uZXIucG9zO1xuICAgICAgICBpZiAoY29uc3VtZUFycmF5KHNjYW5uZXIsIGNvbXBpbGVkUHJlZml4KSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBzY2FubmVyLnBvcy0tO1xuICAgIH1cbiAgICByZXR1cm4gLTE7XG59XG4vKipcbiAqIENvbnN1bWVzIGZ1bGwgY2hhcmFjdGVyIHBhaXIsIGlmIHBvc3NpYmxlXG4gKi9cbmZ1bmN0aW9uIGNvbnN1bWVQYWlyKHNjYW5uZXIsIGNsb3NlLCBvcGVuKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBzY2FubmVyLnBvcztcbiAgICBpZiAoY29uc3VtZShzY2FubmVyLCBjbG9zZSkpIHtcbiAgICAgICAgd2hpbGUgKCFzb2woc2Nhbm5lcikpIHtcbiAgICAgICAgICAgIGlmIChjb25zdW1lKHNjYW5uZXIsIG9wZW4pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzY2FubmVyLnBvcy0tO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNjYW5uZXIucG9zID0gc3RhcnQ7XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuLyoqXG4gKiBDb25zdW1lcyBhbGwgY2hhcmFjdGVyIGNvZGVzIGZyb20gZ2l2ZW4gYXJyYXksIHJpZ2h0LXRvLWxlZnQsIGlmIHBvc3NpYmxlXG4gKi9cbmZ1bmN0aW9uIGNvbnN1bWVBcnJheShzY2FubmVyLCBhcnIpIHtcbiAgICBjb25zdCBzdGFydCA9IHNjYW5uZXIucG9zO1xuICAgIGxldCBjb25zdW1lZCA9IGZhbHNlO1xuICAgIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwICYmICFzb2woc2Nhbm5lcik7IGktLSkge1xuICAgICAgICBpZiAoIWNvbnN1bWUoc2Nhbm5lciwgYXJyW2ldKSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3VtZWQgPSBpID09PSAwO1xuICAgIH1cbiAgICBpZiAoIWNvbnN1bWVkKSB7XG4gICAgICAgIHNjYW5uZXIucG9zID0gc3RhcnQ7XG4gICAgfVxuICAgIHJldHVybiBjb25zdW1lZDtcbn1cbmZ1bmN0aW9uIGlzQWJicmV2aWF0aW9uKGNoKSB7XG4gICAgcmV0dXJuIChjaCA+IDY0ICYmIGNoIDwgOTEpIC8vIHVwcGVyY2FzZSBsZXR0ZXJcbiAgICAgICAgfHwgKGNoID4gOTYgJiYgY2ggPCAxMjMpIC8vIGxvd2VyY2FzZSBsZXR0ZXJcbiAgICAgICAgfHwgKGNoID4gNDcgJiYgY2ggPCA1OCkgLy8gbnVtYmVyXG4gICAgICAgIHx8IHNwZWNpYWxDaGFycy5pbmNsdWRlcyhjaCk7IC8vIHNwZWNpYWwgY2hhcmFjdGVyXG59XG5mdW5jdGlvbiBpc09wZW5CcmFjZShjaCwgc3ludGF4KSB7XG4gICAgcmV0dXJuIGNoID09PSA0MCAvKiBSb3VuZEwgKi8gfHwgKHN5bnRheCA9PT0gJ21hcmt1cCcgJiYgKGNoID09PSA5MSAvKiBTcXVhcmVMICovIHx8IGNoID09PSAxMjMgLyogQ3VybHlMICovKSk7XG59XG5mdW5jdGlvbiBpc0Nsb3NlQnJhY2UoY2gsIHN5bnRheCkge1xuICAgIHJldHVybiBjaCA9PT0gNDEgLyogUm91bmRSICovIHx8IChzeW50YXggPT09ICdtYXJrdXAnICYmIChjaCA9PT0gOTMgLyogU3F1YXJlUiAqLyB8fCBjaCA9PT0gMTI1IC8qIEN1cmx5UiAqLykpO1xufVxuXG5mdW5jdGlvbiBleHBhbmRBYmJyZXZpYXRpb24kMShhYmJyLCBjb25maWcpIHtcbiAgICBjb25zdCByZXNvbHZlZENvbmZpZyA9IHJlc29sdmVDb25maWcoY29uZmlnKTtcbiAgICByZXR1cm4gcmVzb2x2ZWRDb25maWcudHlwZSA9PT0gJ3N0eWxlc2hlZXQnXG4gICAgICAgID8gc3R5bGVzaGVldChhYmJyLCByZXNvbHZlZENvbmZpZylcbiAgICAgICAgOiBtYXJrdXAoYWJiciwgcmVzb2x2ZWRDb25maWcpO1xufVxuLyoqXG4gKiBFeHBhbmRzIGdpdmVuICptYXJrdXAqIGFiYnJldmlhdGlvbiAoZS5nLiByZWd1bGFyIEVtbWV0IGFiYnJldmlhdGlvbiB0aGF0XG4gKiBwcm9kdWNlcyBzdHJ1Y3R1cmVkIG91dHB1dCBsaWtlIEhUTUwpIGFuZCBvdXRwdXRzIGl0IGFjY29yZGluZyB0byBvcHRpb25zXG4gKiBwcm92aWRlZCBpbiBjb25maWdcbiAqL1xuZnVuY3Rpb24gbWFya3VwKGFiYnIsIGNvbmZpZykge1xuICAgIHJldHVybiBzdHJpbmdpZnkocGFyc2UoYWJiciwgY29uZmlnKSwgY29uZmlnKTtcbn1cbi8qKlxuICogRXhwYW5kcyBnaXZlbiAqc3R5bGVzaGVldCogYWJicmV2aWF0aW9uIChhIHNwZWNpYWwgRW1tZXQgYWJicmV2aWF0aW9uIGRlc2lnbmVkIGZvclxuICogc3R5bGVzaGVldCBsYW5ndWFnZXMgbGlrZSBDU1MsIFNBU1MgZXRjLikgYW5kIG91dHB1dHMgaXQgYWNjb3JkaW5nIHRvIG9wdGlvbnNcbiAqIHByb3ZpZGVkIGluIGNvbmZpZ1xuICovXG5mdW5jdGlvbiBzdHlsZXNoZWV0KGFiYnIsIGNvbmZpZykge1xuICAgIHJldHVybiBjc3MocGFyc2UkMShhYmJyLCBjb25maWcpLCBjb25maWcpO1xufVxuXG52YXIgY3NzRGF0YSA9IHtcbiAgICBcInByb3BlcnRpZXNcIjogW1wiYWRkaXRpdmUtc3ltYm9sc1wiLCBcImFsaWduLWNvbnRlbnRcIiwgXCJhbGlnbi1pdGVtc1wiLCBcImp1c3RpZnktaXRlbXNcIiwgXCJqdXN0aWZ5LXNlbGZcIiwgXCJqdXN0aWZ5LWl0ZW1zXCIsIFwiYWxpZ24tc2VsZlwiLCBcImFsbFwiLCBcImFsdFwiLCBcImFuaW1hdGlvblwiLCBcImFuaW1hdGlvbi1kZWxheVwiLCBcImFuaW1hdGlvbi1kaXJlY3Rpb25cIiwgXCJhbmltYXRpb24tZHVyYXRpb25cIiwgXCJhbmltYXRpb24tZmlsbC1tb2RlXCIsIFwiYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudFwiLCBcImFuaW1hdGlvbi1uYW1lXCIsIFwiYW5pbWF0aW9uLXBsYXktc3RhdGVcIiwgXCJhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uXCIsIFwiYmFja2ZhY2UtdmlzaWJpbGl0eVwiLCBcImJhY2tncm91bmRcIiwgXCJiYWNrZ3JvdW5kLWF0dGFjaG1lbnRcIiwgXCJiYWNrZ3JvdW5kLWJsZW5kLW1vZGVcIiwgXCJiYWNrZ3JvdW5kLWNsaXBcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwiYmFja2dyb3VuZC1pbWFnZVwiLCBcImJhY2tncm91bmQtb3JpZ2luXCIsIFwiYmFja2dyb3VuZC1wb3NpdGlvblwiLCBcImJhY2tncm91bmQtcG9zaXRpb24teFwiLCBcImJhY2tncm91bmQtcG9zaXRpb24teVwiLCBcImJhY2tncm91bmQtcmVwZWF0XCIsIFwiYmFja2dyb3VuZC1zaXplXCIsIFwiYmVoYXZpb3JcIiwgXCJibG9jay1zaXplXCIsIFwiYm9yZGVyXCIsIFwiYm9yZGVyLWJsb2NrLWVuZFwiLCBcImJvcmRlci1ibG9jay1zdGFydFwiLCBcImJvcmRlci1ibG9jay1lbmQtY29sb3JcIiwgXCJib3JkZXItYmxvY2stc3RhcnQtY29sb3JcIiwgXCJib3JkZXItYmxvY2stZW5kLXN0eWxlXCIsIFwiYm9yZGVyLWJsb2NrLXN0YXJ0LXN0eWxlXCIsIFwiYm9yZGVyLWJsb2NrLWVuZC13aWR0aFwiLCBcImJvcmRlci1ibG9jay1zdGFydC13aWR0aFwiLCBcImJvcmRlci1ib3R0b21cIiwgXCJib3JkZXItYm90dG9tLWNvbG9yXCIsIFwiYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1c1wiLCBcImJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzXCIsIFwiYm9yZGVyLWJvdHRvbS1zdHlsZVwiLCBcImJvcmRlci1ib3R0b20td2lkdGhcIiwgXCJib3JkZXItY29sbGFwc2VcIiwgXCJib3JkZXItY29sb3JcIiwgXCJib3JkZXItaW1hZ2VcIiwgXCJib3JkZXItaW1hZ2Utb3V0c2V0XCIsIFwiYm9yZGVyLWltYWdlLXJlcGVhdFwiLCBcImJvcmRlci1pbWFnZS1zbGljZVwiLCBcImJvcmRlci1pbWFnZS1zb3VyY2VcIiwgXCJib3JkZXItaW1hZ2Utd2lkdGhcIiwgXCJib3JkZXItaW5saW5lLWVuZFwiLCBcImJvcmRlci1pbmxpbmUtc3RhcnRcIiwgXCJib3JkZXItaW5saW5lLWVuZC1jb2xvclwiLCBcImJvcmRlci1pbmxpbmUtc3RhcnQtY29sb3JcIiwgXCJib3JkZXItaW5saW5lLWVuZC1zdHlsZVwiLCBcImJvcmRlci1pbmxpbmUtc3RhcnQtc3R5bGVcIiwgXCJib3JkZXItaW5saW5lLWVuZC13aWR0aFwiLCBcImJvcmRlci1pbmxpbmUtc3RhcnQtd2lkdGhcIiwgXCJib3JkZXItbGVmdFwiLCBcImJvcmRlci1sZWZ0LWNvbG9yXCIsIFwiYm9yZGVyLWxlZnQtc3R5bGVcIiwgXCJib3JkZXItbGVmdC13aWR0aFwiLCBcImJvcmRlci1yYWRpdXNcIiwgXCJib3JkZXItcmlnaHRcIiwgXCJib3JkZXItcmlnaHQtY29sb3JcIiwgXCJib3JkZXItcmlnaHQtc3R5bGVcIiwgXCJib3JkZXItcmlnaHQtd2lkdGhcIiwgXCJib3JkZXItc3BhY2luZ1wiLCBcImJvcmRlci1zdHlsZVwiLCBcImJvcmRlci10b3BcIiwgXCJib3JkZXItdG9wLWNvbG9yXCIsIFwiYm9yZGVyLXRvcC1sZWZ0LXJhZGl1c1wiLCBcImJvcmRlci10b3AtcmlnaHQtcmFkaXVzXCIsIFwiYm9yZGVyLXRvcC1zdHlsZVwiLCBcImJvcmRlci10b3Atd2lkdGhcIiwgXCJib3JkZXItd2lkdGhcIiwgXCJib3R0b21cIiwgXCJib3gtZGVjb3JhdGlvbi1icmVha1wiLCBcImJveC1zaGFkb3dcIiwgXCJib3gtc2l6aW5nXCIsIFwiYnJlYWstYWZ0ZXJcIiwgXCJicmVhay1iZWZvcmVcIiwgXCJicmVhay1pbnNpZGVcIiwgXCJjYXB0aW9uLXNpZGVcIiwgXCJjYXJldC1jb2xvclwiLCBcImNsZWFyXCIsIFwiY2xpcFwiLCBcImNsaXAtcGF0aFwiLCBcImNsaXAtcnVsZVwiLCBcImNvbG9yXCIsIFwiY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzXCIsIFwiY29sdW1uLWNvdW50XCIsIFwiY29sdW1uLWZpbGxcIiwgXCJjb2x1bW4tZ2FwXCIsIFwiY29sdW1uLXJ1bGVcIiwgXCJjb2x1bW4tcnVsZS1jb2xvclwiLCBcImNvbHVtbi1ydWxlLXN0eWxlXCIsIFwiY29sdW1uLXJ1bGUtd2lkdGhcIiwgXCJjb2x1bW5zXCIsIFwiY29sdW1uLXNwYW5cIiwgXCJjb2x1bW4td2lkdGhcIiwgXCJjb250YWluXCIsIFwiY29udGVudFwiLCBcImNvdW50ZXItaW5jcmVtZW50XCIsIFwiY291bnRlci1yZXNldFwiLCBcImN1cnNvclwiLCBcImRpcmVjdGlvblwiLCBcImRpc3BsYXlcIiwgXCJlbXB0eS1jZWxsc1wiLCBcImVuYWJsZS1iYWNrZ3JvdW5kXCIsIFwiZmFsbGJhY2tcIiwgXCJmaWxsXCIsIFwiZmlsbC1vcGFjaXR5XCIsIFwiZmlsbC1ydWxlXCIsIFwiZmlsdGVyXCIsIFwiZmxleFwiLCBcImZsZXgtYmFzaXNcIiwgXCJmbGV4LWRpcmVjdGlvblwiLCBcImZsZXgtZmxvd1wiLCBcImZsZXgtZ3Jvd1wiLCBcImZsZXgtc2hyaW5rXCIsIFwiZmxleC13cmFwXCIsIFwiZmxvYXRcIiwgXCJmbG9vZC1jb2xvclwiLCBcImZsb29kLW9wYWNpdHlcIiwgXCJmb250XCIsIFwiZm9udC1mYW1pbHlcIiwgXCJmb250LWZlYXR1cmUtc2V0dGluZ3NcIiwgXCJmb250LWtlcm5pbmdcIiwgXCJmb250LWxhbmd1YWdlLW92ZXJyaWRlXCIsIFwiZm9udC1zaXplXCIsIFwiZm9udC1zaXplLWFkanVzdFwiLCBcImZvbnQtc3RyZXRjaFwiLCBcImZvbnQtc3R5bGVcIiwgXCJmb250LXN5bnRoZXNpc1wiLCBcImZvbnQtdmFyaWFudFwiLCBcImZvbnQtdmFyaWFudC1hbHRlcm5hdGVzXCIsIFwiZm9udC12YXJpYW50LWNhcHNcIiwgXCJmb250LXZhcmlhbnQtZWFzdC1hc2lhblwiLCBcImZvbnQtdmFyaWFudC1saWdhdHVyZXNcIiwgXCJmb250LXZhcmlhbnQtbnVtZXJpY1wiLCBcImZvbnQtdmFyaWFudC1wb3NpdGlvblwiLCBcImZvbnQtd2VpZ2h0XCIsIFwiZ2x5cGgtb3JpZW50YXRpb24taG9yaXpvbnRhbFwiLCBcImdseXBoLW9yaWVudGF0aW9uLXZlcnRpY2FsXCIsIFwiZ3JpZC1hcmVhXCIsIFwiZ3JpZC1hdXRvLWNvbHVtbnNcIiwgXCJncmlkLWF1dG8tZmxvd1wiLCBcImdyaWQtYXV0by1yb3dzXCIsIFwiZ3JpZC1jb2x1bW5cIiwgXCJncmlkLWNvbHVtbi1lbmRcIiwgXCJncmlkLWNvbHVtbi1nYXBcIiwgXCJncmlkLWNvbHVtbi1zdGFydFwiLCBcImdyaWQtZ2FwXCIsIFwiZ3JpZC1yb3dcIiwgXCJncmlkLXJvdy1lbmRcIiwgXCJncmlkLXJvdy1nYXBcIiwgXCJncmlkLXJvdy1zdGFydFwiLCBcImdyaWQtdGVtcGxhdGVcIiwgXCJncmlkLXRlbXBsYXRlLWFyZWFzXCIsIFwiZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zXCIsIFwiZ3JpZC10ZW1wbGF0ZS1yb3dzXCIsIFwiaGVpZ2h0XCIsIFwiaHlwaGVuc1wiLCBcImltYWdlLW9yaWVudGF0aW9uXCIsIFwiaW1hZ2UtcmVuZGVyaW5nXCIsIFwiaW1lLW1vZGVcIiwgXCJpbmxpbmUtc2l6ZVwiLCBcImlzb2xhdGlvblwiLCBcImp1c3RpZnktY29udGVudFwiLCBcImtlcm5pbmdcIiwgXCJsZWZ0XCIsIFwibGV0dGVyLXNwYWNpbmdcIiwgXCJsaWdodGluZy1jb2xvclwiLCBcImxpbmUtYnJlYWtcIiwgXCJsaW5lLWhlaWdodFwiLCBcImxpc3Qtc3R5bGVcIiwgXCJsaXN0LXN0eWxlLWltYWdlXCIsIFwibGlzdC1zdHlsZS1wb3NpdGlvblwiLCBcImxpc3Qtc3R5bGUtdHlwZVwiLCBcIm1hcmdpblwiLCBcIm1hcmdpbi1ibG9jay1lbmRcIiwgXCJtYXJnaW4tYmxvY2stc3RhcnRcIiwgXCJtYXJnaW4tYm90dG9tXCIsIFwibWFyZ2luLWlubGluZS1lbmRcIiwgXCJtYXJnaW4taW5saW5lLXN0YXJ0XCIsIFwibWFyZ2luLWxlZnRcIiwgXCJtYXJnaW4tcmlnaHRcIiwgXCJtYXJnaW4tdG9wXCIsIFwibWFya2VyXCIsIFwibWFya2VyLWVuZFwiLCBcIm1hcmtlci1taWRcIiwgXCJtYXJrZXItc3RhcnRcIiwgXCJtYXNrLXR5cGVcIiwgXCJtYXgtYmxvY2stc2l6ZVwiLCBcIm1heC1oZWlnaHRcIiwgXCJtYXgtaW5saW5lLXNpemVcIiwgXCJtYXgtd2lkdGhcIiwgXCJtaW4tYmxvY2stc2l6ZVwiLCBcIm1pbi1oZWlnaHRcIiwgXCJtaW4taW5saW5lLXNpemVcIiwgXCJtaW4td2lkdGhcIiwgXCJtaXgtYmxlbmQtbW9kZVwiLCBcIm1vdGlvblwiLCBcIm1vdGlvbi1vZmZzZXRcIiwgXCJtb3Rpb24tcGF0aFwiLCBcIm1vdGlvbi1yb3RhdGlvblwiLCBcIi1tb3otYW5pbWF0aW9uXCIsIFwiLW1vei1hbmltYXRpb24tZGVsYXlcIiwgXCItbW96LWFuaW1hdGlvbi1kaXJlY3Rpb25cIiwgXCItbW96LWFuaW1hdGlvbi1kdXJhdGlvblwiLCBcIi1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudFwiLCBcIi1tb3otYW5pbWF0aW9uLW5hbWVcIiwgXCItbW96LWFuaW1hdGlvbi1wbGF5LXN0YXRlXCIsIFwiLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uXCIsIFwiLW1vei1hcHBlYXJhbmNlXCIsIFwiLW1vei1iYWNrZmFjZS12aXNpYmlsaXR5XCIsIFwiLW1vei1iYWNrZ3JvdW5kLWNsaXBcIiwgXCItbW96LWJhY2tncm91bmQtaW5saW5lLXBvbGljeVwiLCBcIi1tb3otYmFja2dyb3VuZC1vcmlnaW5cIiwgXCItbW96LWJvcmRlci1ib3R0b20tY29sb3JzXCIsIFwiLW1vei1ib3JkZXItaW1hZ2VcIiwgXCItbW96LWJvcmRlci1sZWZ0LWNvbG9yc1wiLCBcIi1tb3otYm9yZGVyLXJpZ2h0LWNvbG9yc1wiLCBcIi1tb3otYm9yZGVyLXRvcC1jb2xvcnNcIiwgXCItbW96LWJveC1hbGlnblwiLCBcIi1tb3otYm94LWRpcmVjdGlvblwiLCBcIi1tb3otYm94LWZsZXhcIiwgXCItbW96LWJveC1mbGV4Z3JvdXBcIiwgXCItbW96LWJveC1vcmRpbmFsLWdyb3VwXCIsIFwiLW1vei1ib3gtb3JpZW50XCIsIFwiLW1vei1ib3gtcGFja1wiLCBcIi1tb3otYm94LXNpemluZ1wiLCBcIi1tb3otY29sdW1uLWNvdW50XCIsIFwiLW1vei1jb2x1bW4tZ2FwXCIsIFwiLW1vei1jb2x1bW4tcnVsZVwiLCBcIi1tb3otY29sdW1uLXJ1bGUtY29sb3JcIiwgXCItbW96LWNvbHVtbi1ydWxlLXN0eWxlXCIsIFwiLW1vei1jb2x1bW4tcnVsZS13aWR0aFwiLCBcIi1tb3otY29sdW1uc1wiLCBcIi1tb3otY29sdW1uLXdpZHRoXCIsIFwiLW1vei1mb250LWZlYXR1cmUtc2V0dGluZ3NcIiwgXCItbW96LWh5cGhlbnNcIiwgXCItbW96LXBlcnNwZWN0aXZlXCIsIFwiLW1vei1wZXJzcGVjdGl2ZS1vcmlnaW5cIiwgXCItbW96LXRleHQtYWxpZ24tbGFzdFwiLCBcIi1tb3otdGV4dC1kZWNvcmF0aW9uLWNvbG9yXCIsIFwiLW1vei10ZXh0LWRlY29yYXRpb24tbGluZVwiLCBcIi1tb3otdGV4dC1kZWNvcmF0aW9uLXN0eWxlXCIsIFwiLW1vei10ZXh0LXNpemUtYWRqdXN0XCIsIFwiLW1vei10cmFuc2Zvcm1cIiwgXCItbW96LXRyYW5zZm9ybS1vcmlnaW5cIiwgXCItbW96LXRyYW5zaXRpb25cIiwgXCItbW96LXRyYW5zaXRpb24tZGVsYXlcIiwgXCItbW96LXRyYW5zaXRpb24tZHVyYXRpb25cIiwgXCItbW96LXRyYW5zaXRpb24tcHJvcGVydHlcIiwgXCItbW96LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uXCIsIFwiLW1vei11c2VyLWZvY3VzXCIsIFwiLW1vei11c2VyLXNlbGVjdFwiLCBcIi1tcy1hY2NlbGVyYXRvclwiLCBcIi1tcy1iZWhhdmlvclwiLCBcIi1tcy1ibG9jay1wcm9ncmVzc2lvblwiLCBcIi1tcy1jb250ZW50LXpvb20tY2hhaW5pbmdcIiwgXCItbXMtY29udGVudC16b29taW5nXCIsIFwiLW1zLWNvbnRlbnQtem9vbS1saW1pdFwiLCBcIi1tcy1jb250ZW50LXpvb20tbGltaXQtbWF4XCIsIFwiLW1zLWNvbnRlbnQtem9vbS1saW1pdC1taW5cIiwgXCItbXMtY29udGVudC16b29tLXNuYXBcIiwgXCItbXMtY29udGVudC16b29tLXNuYXAtcG9pbnRzXCIsIFwiLW1zLWNvbnRlbnQtem9vbS1zbmFwLXR5cGVcIiwgXCItbXMtZmlsdGVyXCIsIFwiLW1zLWZsZXhcIiwgXCItbXMtZmxleC1hbGlnblwiLCBcIi1tcy1mbGV4LWRpcmVjdGlvblwiLCBcIi1tcy1mbGV4LWZsb3dcIiwgXCItbXMtZmxleC1pdGVtLWFsaWduXCIsIFwiLW1zLWZsZXgtbGluZS1wYWNrXCIsIFwiLW1zLWZsZXgtb3JkZXJcIiwgXCItbXMtZmxleC1wYWNrXCIsIFwiLW1zLWZsZXgtd3JhcFwiLCBcIi1tcy1mbG93LWZyb21cIiwgXCItbXMtZmxvdy1pbnRvXCIsIFwiLW1zLWdyaWQtY29sdW1uXCIsIFwiLW1zLWdyaWQtY29sdW1uLWFsaWduXCIsIFwiLW1zLWdyaWQtY29sdW1uc1wiLCBcIi1tcy1ncmlkLWNvbHVtbi1zcGFuXCIsIFwiLW1zLWdyaWQtbGF5ZXJcIiwgXCItbXMtZ3JpZC1yb3dcIiwgXCItbXMtZ3JpZC1yb3ctYWxpZ25cIiwgXCItbXMtZ3JpZC1yb3dzXCIsIFwiLW1zLWdyaWQtcm93LXNwYW5cIiwgXCItbXMtaGlnaC1jb250cmFzdC1hZGp1c3RcIiwgXCItbXMtaHlwaGVuYXRlLWxpbWl0LWNoYXJzXCIsIFwiLW1zLWh5cGhlbmF0ZS1saW1pdC1saW5lc1wiLCBcIi1tcy1oeXBoZW5hdGUtbGltaXQtem9uZVwiLCBcIi1tcy1oeXBoZW5zXCIsIFwiLW1zLWltZS1tb2RlXCIsIFwiLW1zLWludGVycG9sYXRpb24tbW9kZVwiLCBcIi1tcy1sYXlvdXQtZ3JpZFwiLCBcIi1tcy1sYXlvdXQtZ3JpZC1jaGFyXCIsIFwiLW1zLWxheW91dC1ncmlkLWxpbmVcIiwgXCItbXMtbGF5b3V0LWdyaWQtbW9kZVwiLCBcIi1tcy1sYXlvdXQtZ3JpZC10eXBlXCIsIFwiLW1zLWxpbmUtYnJlYWtcIiwgXCItbXMtb3ZlcmZsb3ctc3R5bGVcIiwgXCItbXMtcGVyc3BlY3RpdmVcIiwgXCItbXMtcGVyc3BlY3RpdmUtb3JpZ2luXCIsIFwiLW1zLXBlcnNwZWN0aXZlLW9yaWdpbi14XCIsIFwiLW1zLXBlcnNwZWN0aXZlLW9yaWdpbi15XCIsIFwiLW1zLXByb2dyZXNzLWFwcGVhcmFuY2VcIiwgXCItbXMtc2Nyb2xsYmFyLTNkbGlnaHQtY29sb3JcIiwgXCItbXMtc2Nyb2xsYmFyLWFycm93LWNvbG9yXCIsIFwiLW1zLXNjcm9sbGJhci1iYXNlLWNvbG9yXCIsIFwiLW1zLXNjcm9sbGJhci1kYXJrc2hhZG93LWNvbG9yXCIsIFwiLW1zLXNjcm9sbGJhci1mYWNlLWNvbG9yXCIsIFwiLW1zLXNjcm9sbGJhci1oaWdobGlnaHQtY29sb3JcIiwgXCItbXMtc2Nyb2xsYmFyLXNoYWRvdy1jb2xvclwiLCBcIi1tcy1zY3JvbGxiYXItdHJhY2stY29sb3JcIiwgXCItbXMtc2Nyb2xsLWNoYWluaW5nXCIsIFwiLW1zLXNjcm9sbC1saW1pdFwiLCBcIi1tcy1zY3JvbGwtbGltaXQteC1tYXhcIiwgXCItbXMtc2Nyb2xsLWxpbWl0LXgtbWluXCIsIFwiLW1zLXNjcm9sbC1saW1pdC15LW1heFwiLCBcIi1tcy1zY3JvbGwtbGltaXQteS1taW5cIiwgXCItbXMtc2Nyb2xsLXJhaWxzXCIsIFwiLW1zLXNjcm9sbC1zbmFwLXBvaW50cy14XCIsIFwiLW1zLXNjcm9sbC1zbmFwLXBvaW50cy15XCIsIFwiLW1zLXNjcm9sbC1zbmFwLXR5cGVcIiwgXCItbXMtc2Nyb2xsLXNuYXAteFwiLCBcIi1tcy1zY3JvbGwtc25hcC15XCIsIFwiLW1zLXNjcm9sbC10cmFuc2xhdGlvblwiLCBcIi1tcy10ZXh0LWFsaWduLWxhc3RcIiwgXCItbXMtdGV4dC1hdXRvc3BhY2VcIiwgXCItbXMtdGV4dC1jb21iaW5lLWhvcml6b250YWxcIiwgXCItbXMtdGV4dC1qdXN0aWZ5XCIsIFwiLW1zLXRleHQta2FzaGlkYS1zcGFjZVwiLCBcIi1tcy10ZXh0LW92ZXJmbG93XCIsIFwiLW1zLXRleHQtc2l6ZS1hZGp1c3RcIiwgXCItbXMtdGV4dC11bmRlcmxpbmUtcG9zaXRpb25cIiwgXCItbXMtdG91Y2gtYWN0aW9uXCIsIFwiLW1zLXRvdWNoLXNlbGVjdFwiLCBcIi1tcy10cmFuc2Zvcm1cIiwgXCItbXMtdHJhbnNmb3JtLW9yaWdpblwiLCBcIi1tcy10cmFuc2Zvcm0tb3JpZ2luLXhcIiwgXCItbXMtdHJhbnNmb3JtLW9yaWdpbi15XCIsIFwiLW1zLXRyYW5zZm9ybS1vcmlnaW4telwiLCBcIi1tcy11c2VyLXNlbGVjdFwiLCBcIi1tcy13b3JkLWJyZWFrXCIsIFwiLW1zLXdvcmQtd3JhcFwiLCBcIi1tcy13cmFwLWZsb3dcIiwgXCItbXMtd3JhcC1tYXJnaW5cIiwgXCItbXMtd3JhcC10aHJvdWdoXCIsIFwiLW1zLXdyaXRpbmctbW9kZVwiLCBcIi1tcy16b29tXCIsIFwiLW1zLXpvb20tYW5pbWF0aW9uXCIsIFwibmF2LWRvd25cIiwgXCJuYXYtaW5kZXhcIiwgXCJuYXYtbGVmdFwiLCBcIm5hdi1yaWdodFwiLCBcIm5hdi11cFwiLCBcIm5lZ2F0aXZlXCIsIFwiLW8tYW5pbWF0aW9uXCIsIFwiLW8tYW5pbWF0aW9uLWRlbGF5XCIsIFwiLW8tYW5pbWF0aW9uLWRpcmVjdGlvblwiLCBcIi1vLWFuaW1hdGlvbi1kdXJhdGlvblwiLCBcIi1vLWFuaW1hdGlvbi1maWxsLW1vZGVcIiwgXCItby1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50XCIsIFwiLW8tYW5pbWF0aW9uLW5hbWVcIiwgXCItby1hbmltYXRpb24tcGxheS1zdGF0ZVwiLCBcIi1vLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb25cIiwgXCJvYmplY3QtZml0XCIsIFwib2JqZWN0LXBvc2l0aW9uXCIsIFwiLW8tYm9yZGVyLWltYWdlXCIsIFwiLW8tb2JqZWN0LWZpdFwiLCBcIi1vLW9iamVjdC1wb3NpdGlvblwiLCBcIm9wYWNpdHlcIiwgXCJvcmRlclwiLCBcIm9ycGhhbnNcIiwgXCItby10YWJsZS1iYXNlbGluZVwiLCBcIi1vLXRhYi1zaXplXCIsIFwiLW8tdGV4dC1vdmVyZmxvd1wiLCBcIi1vLXRyYW5zZm9ybVwiLCBcIi1vLXRyYW5zZm9ybS1vcmlnaW5cIiwgXCItby10cmFuc2l0aW9uXCIsIFwiLW8tdHJhbnNpdGlvbi1kZWxheVwiLCBcIi1vLXRyYW5zaXRpb24tZHVyYXRpb25cIiwgXCItby10cmFuc2l0aW9uLXByb3BlcnR5XCIsIFwiLW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb25cIiwgXCJvZmZzZXQtYmxvY2stZW5kXCIsIFwib2Zmc2V0LWJsb2NrLXN0YXJ0XCIsIFwib2Zmc2V0LWlubGluZS1lbmRcIiwgXCJvZmZzZXQtaW5saW5lLXN0YXJ0XCIsIFwib3V0bGluZVwiLCBcIm91dGxpbmUtY29sb3JcIiwgXCJvdXRsaW5lLW9mZnNldFwiLCBcIm91dGxpbmUtc3R5bGVcIiwgXCJvdXRsaW5lLXdpZHRoXCIsIFwib3ZlcmZsb3dcIiwgXCJvdmVyZmxvdy13cmFwXCIsIFwib3ZlcmZsb3cteFwiLCBcIm92ZXJmbG93LXlcIiwgXCJwYWRcIiwgXCJwYWRkaW5nXCIsIFwicGFkZGluZy1ib3R0b21cIiwgXCJwYWRkaW5nLWJsb2NrLWVuZFwiLCBcInBhZGRpbmctYmxvY2stc3RhcnRcIiwgXCJwYWRkaW5nLWlubGluZS1lbmRcIiwgXCJwYWRkaW5nLWlubGluZS1zdGFydFwiLCBcInBhZGRpbmctbGVmdFwiLCBcInBhZGRpbmctcmlnaHRcIiwgXCJwYWRkaW5nLXRvcFwiLCBcInBhZ2UtYnJlYWstYWZ0ZXJcIiwgXCJwYWdlLWJyZWFrLWJlZm9yZVwiLCBcInBhZ2UtYnJlYWstaW5zaWRlXCIsIFwicGFpbnQtb3JkZXJcIiwgXCJwZXJzcGVjdGl2ZVwiLCBcInBlcnNwZWN0aXZlLW9yaWdpblwiLCBcInBvaW50ZXItZXZlbnRzXCIsIFwicG9zaXRpb25cIiwgXCJwcmVmaXhcIiwgXCJxdW90ZXNcIiwgXCJyYW5nZVwiLCBcInJlc2l6ZVwiLCBcInJpZ2h0XCIsIFwicnVieS1hbGlnblwiLCBcInJ1Ynktb3ZlcmhhbmdcIiwgXCJydWJ5LXBvc2l0aW9uXCIsIFwicnVieS1zcGFuXCIsIFwic2Nyb2xsYmFyLTNkbGlnaHQtY29sb3JcIiwgXCJzY3JvbGxiYXItYXJyb3ctY29sb3JcIiwgXCJzY3JvbGxiYXItYmFzZS1jb2xvclwiLCBcInNjcm9sbGJhci1kYXJrc2hhZG93LWNvbG9yXCIsIFwic2Nyb2xsYmFyLWZhY2UtY29sb3JcIiwgXCJzY3JvbGxiYXItaGlnaGxpZ2h0LWNvbG9yXCIsIFwic2Nyb2xsYmFyLXNoYWRvdy1jb2xvclwiLCBcInNjcm9sbGJhci10cmFjay1jb2xvclwiLCBcInNjcm9sbC1iZWhhdmlvclwiLCBcInNjcm9sbC1zbmFwLWNvb3JkaW5hdGVcIiwgXCJzY3JvbGwtc25hcC1kZXN0aW5hdGlvblwiLCBcInNjcm9sbC1zbmFwLXBvaW50cy14XCIsIFwic2Nyb2xsLXNuYXAtcG9pbnRzLXlcIiwgXCJzY3JvbGwtc25hcC10eXBlXCIsIFwic2hhcGUtaW1hZ2UtdGhyZXNob2xkXCIsIFwic2hhcGUtbWFyZ2luXCIsIFwic2hhcGUtb3V0c2lkZVwiLCBcInNoYXBlLXJlbmRlcmluZ1wiLCBcInNpemVcIiwgXCJzcmNcIiwgXCJzdG9wLWNvbG9yXCIsIFwic3RvcC1vcGFjaXR5XCIsIFwic3Ryb2tlXCIsIFwic3Ryb2tlLWRhc2hhcnJheVwiLCBcInN0cm9rZS1kYXNob2Zmc2V0XCIsIFwic3Ryb2tlLWxpbmVjYXBcIiwgXCJzdHJva2UtbGluZWpvaW5cIiwgXCJzdHJva2UtbWl0ZXJsaW1pdFwiLCBcInN0cm9rZS1vcGFjaXR5XCIsIFwic3Ryb2tlLXdpZHRoXCIsIFwic3VmZml4XCIsIFwic3lzdGVtXCIsIFwic3ltYm9sc1wiLCBcInRhYmxlLWxheW91dFwiLCBcInRhYi1zaXplXCIsIFwidGV4dC1hbGlnblwiLCBcInRleHQtYWxpZ24tbGFzdFwiLCBcInRleHQtYW5jaG9yXCIsIFwidGV4dC1kZWNvcmF0aW9uXCIsIFwidGV4dC1kZWNvcmF0aW9uLWNvbG9yXCIsIFwidGV4dC1kZWNvcmF0aW9uLWxpbmVcIiwgXCJ0ZXh0LWRlY29yYXRpb24tc3R5bGVcIiwgXCJ0ZXh0LWluZGVudFwiLCBcInRleHQtanVzdGlmeVwiLCBcInRleHQtb3JpZW50YXRpb25cIiwgXCJ0ZXh0LW92ZXJmbG93XCIsIFwidGV4dC1yZW5kZXJpbmdcIiwgXCJ0ZXh0LXNoYWRvd1wiLCBcInRleHQtdHJhbnNmb3JtXCIsIFwidGV4dC11bmRlcmxpbmUtcG9zaXRpb25cIiwgXCJ0b3BcIiwgXCJ0b3VjaC1hY3Rpb25cIiwgXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2Zvcm0tb3JpZ2luXCIsIFwidHJhbnNmb3JtLXN0eWxlXCIsIFwidHJhbnNpdGlvblwiLCBcInRyYW5zaXRpb24tZGVsYXlcIiwgXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCIsIFwidHJhbnNpdGlvbi1wcm9wZXJ0eVwiLCBcInRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uXCIsIFwidW5pY29kZS1iaWRpXCIsIFwidW5pY29kZS1yYW5nZVwiLCBcInVzZXItc2VsZWN0XCIsIFwidmVydGljYWwtYWxpZ25cIiwgXCJ2aXNpYmlsaXR5XCIsIFwiLXdlYmtpdC1hbmltYXRpb25cIiwgXCItd2Via2l0LWFuaW1hdGlvbi1kZWxheVwiLCBcIi13ZWJraXQtYW5pbWF0aW9uLWRpcmVjdGlvblwiLCBcIi13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uXCIsIFwiLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlXCIsIFwiLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50XCIsIFwiLXdlYmtpdC1hbmltYXRpb24tbmFtZVwiLCBcIi13ZWJraXQtYW5pbWF0aW9uLXBsYXktc3RhdGVcIiwgXCItd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb25cIiwgXCItd2Via2l0LWFwcGVhcmFuY2VcIiwgXCItd2Via2l0LWJhY2tkcm9wLWZpbHRlclwiLCBcIi13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eVwiLCBcIi13ZWJraXQtYmFja2dyb3VuZC1jbGlwXCIsIFwiLXdlYmtpdC1iYWNrZ3JvdW5kLWNvbXBvc2l0ZVwiLCBcIi13ZWJraXQtYmFja2dyb3VuZC1vcmlnaW5cIiwgXCItd2Via2l0LWJvcmRlci1pbWFnZVwiLCBcIi13ZWJraXQtYm94LWFsaWduXCIsIFwiLXdlYmtpdC1ib3gtZGlyZWN0aW9uXCIsIFwiLXdlYmtpdC1ib3gtZmxleFwiLCBcIi13ZWJraXQtYm94LWZsZXgtZ3JvdXBcIiwgXCItd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwXCIsIFwiLXdlYmtpdC1ib3gtb3JpZW50XCIsIFwiLXdlYmtpdC1ib3gtcGFja1wiLCBcIi13ZWJraXQtYm94LXJlZmxlY3RcIiwgXCItd2Via2l0LWJveC1zaXppbmdcIiwgXCItd2Via2l0LWJyZWFrLWFmdGVyXCIsIFwiLXdlYmtpdC1icmVhay1iZWZvcmVcIiwgXCItd2Via2l0LWJyZWFrLWluc2lkZVwiLCBcIi13ZWJraXQtY29sdW1uLWJyZWFrLWFmdGVyXCIsIFwiLXdlYmtpdC1jb2x1bW4tYnJlYWstYmVmb3JlXCIsIFwiLXdlYmtpdC1jb2x1bW4tYnJlYWstaW5zaWRlXCIsIFwiLXdlYmtpdC1jb2x1bW4tY291bnRcIiwgXCItd2Via2l0LWNvbHVtbi1nYXBcIiwgXCItd2Via2l0LWNvbHVtbi1ydWxlXCIsIFwiLXdlYmtpdC1jb2x1bW4tcnVsZS1jb2xvclwiLCBcIi13ZWJraXQtY29sdW1uLXJ1bGUtc3R5bGVcIiwgXCItd2Via2l0LWNvbHVtbi1ydWxlLXdpZHRoXCIsIFwiLXdlYmtpdC1jb2x1bW5zXCIsIFwiLXdlYmtpdC1jb2x1bW4tc3BhblwiLCBcIi13ZWJraXQtY29sdW1uLXdpZHRoXCIsIFwiLXdlYmtpdC1maWx0ZXJcIiwgXCItd2Via2l0LWZsb3ctZnJvbVwiLCBcIi13ZWJraXQtZmxvdy1pbnRvXCIsIFwiLXdlYmtpdC1mb250LWZlYXR1cmUtc2V0dGluZ3NcIiwgXCItd2Via2l0LWh5cGhlbnNcIiwgXCItd2Via2l0LWxpbmUtYnJlYWtcIiwgXCItd2Via2l0LW1hcmdpbi1ib3R0b20tY29sbGFwc2VcIiwgXCItd2Via2l0LW1hcmdpbi1jb2xsYXBzZVwiLCBcIi13ZWJraXQtbWFyZ2luLXN0YXJ0XCIsIFwiLXdlYmtpdC1tYXJnaW4tdG9wLWNvbGxhcHNlXCIsIFwiLXdlYmtpdC1tYXNrLWNsaXBcIiwgXCItd2Via2l0LW1hc2staW1hZ2VcIiwgXCItd2Via2l0LW1hc2stb3JpZ2luXCIsIFwiLXdlYmtpdC1tYXNrLXJlcGVhdFwiLCBcIi13ZWJraXQtbWFzay1zaXplXCIsIFwiLXdlYmtpdC1uYnNwLW1vZGVcIiwgXCItd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZ1wiLCBcIi13ZWJraXQtcGFkZGluZy1zdGFydFwiLCBcIi13ZWJraXQtcGVyc3BlY3RpdmVcIiwgXCItd2Via2l0LXBlcnNwZWN0aXZlLW9yaWdpblwiLCBcIi13ZWJraXQtcmVnaW9uLWZyYWdtZW50XCIsIFwiLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yXCIsIFwiLXdlYmtpdC10ZXh0LWZpbGwtY29sb3JcIiwgXCItd2Via2l0LXRleHQtc2l6ZS1hZGp1c3RcIiwgXCItd2Via2l0LXRleHQtc3Ryb2tlXCIsIFwiLXdlYmtpdC10ZXh0LXN0cm9rZS1jb2xvclwiLCBcIi13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGhcIiwgXCItd2Via2l0LXRvdWNoLWNhbGxvdXRcIiwgXCItd2Via2l0LXRyYW5zZm9ybVwiLCBcIi13ZWJraXQtdHJhbnNmb3JtLW9yaWdpblwiLCBcIi13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbi14XCIsIFwiLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luLXlcIiwgXCItd2Via2l0LXRyYW5zZm9ybS1vcmlnaW4telwiLCBcIi13ZWJraXQtdHJhbnNmb3JtLXN0eWxlXCIsIFwiLXdlYmtpdC10cmFuc2l0aW9uXCIsIFwiLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5XCIsIFwiLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uXCIsIFwiLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5XCIsIFwiLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvblwiLCBcIi13ZWJraXQtdXNlci1kcmFnXCIsIFwiLXdlYmtpdC11c2VyLW1vZGlmeVwiLCBcIi13ZWJraXQtdXNlci1zZWxlY3RcIiwgXCJ3aGl0ZS1zcGFjZVwiLCBcIndpZG93c1wiLCBcIndpZHRoXCIsIFwid2lsbC1jaGFuZ2VcIiwgXCJ3b3JkLWJyZWFrXCIsIFwid29yZC1zcGFjaW5nXCIsIFwid29yZC13cmFwXCIsIFwid3JpdGluZy1tb2RlXCIsIFwiei1pbmRleFwiLCBcInpvb21cIl1cbn07XG52YXIgaHRtbERhdGEgPSB7XG4gICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJib2R5XCIsIFwiaGVhZFwiLCBcImh0bWxcIixcbiAgICAgICAgXCJhZGRyZXNzXCIsIFwiYmxvY2txdW90ZVwiLCBcImRkXCIsIFwiZGl2XCIsIFwic2VjdGlvblwiLCBcImFydGljbGVcIiwgXCJhc2lkZVwiLCBcImhlYWRlclwiLCBcImZvb3RlclwiLCBcIm5hdlwiLCBcIm1lbnVcIiwgXCJkbFwiLCBcImR0XCIsIFwiZmllbGRzZXRcIiwgXCJmb3JtXCIsIFwiZnJhbWVcIiwgXCJmcmFtZXNldFwiLCBcImgxXCIsIFwiaDJcIiwgXCJoM1wiLCBcImg0XCIsIFwiaDVcIiwgXCJoNlwiLCBcImlmcmFtZVwiLCBcIm5vZnJhbWVzXCIsIFwib2JqZWN0XCIsIFwib2xcIiwgXCJwXCIsIFwidWxcIiwgXCJhcHBsZXRcIiwgXCJjZW50ZXJcIiwgXCJkaXJcIiwgXCJoclwiLCBcInByZVwiLFxuICAgICAgICBcImFcIiwgXCJhYmJyXCIsIFwiYWNyb255bVwiLCBcImFyZWFcIiwgXCJiXCIsIFwiYmFzZVwiLCBcImJhc2Vmb250XCIsIFwiYmRvXCIsIFwiYmlnXCIsIFwiYnJcIiwgXCJidXR0b25cIiwgXCJjYXB0aW9uXCIsIFwiY2l0ZVwiLCBcImNvZGVcIiwgXCJjb2xcIiwgXCJjb2xncm91cFwiLCBcImRlbFwiLCBcImRmblwiLCBcImVtXCIsIFwiZm9udFwiLCBcImlcIiwgXCJpbWdcIiwgXCJpbnB1dFwiLCBcImluc1wiLCBcImlzaW5kZXhcIiwgXCJrYmRcIiwgXCJsYWJlbFwiLCBcImxlZ2VuZFwiLCBcImxpXCIsIFwibGlua1wiLCBcIm1hcFwiLCBcIm1ldGFcIiwgXCJub3NjcmlwdFwiLCBcIm9wdGdyb3VwXCIsIFwib3B0aW9uXCIsIFwicGFyYW1cIiwgXCJxXCIsIFwic1wiLCBcInNhbXBcIiwgXCJzY3JpcHRcIiwgXCJzZWxlY3RcIiwgXCJzbWFsbFwiLCBcInNwYW5cIiwgXCJzdHJpa2VcIiwgXCJzdHJvbmdcIiwgXCJzdHlsZVwiLCBcInN1YlwiLCBcInN1cFwiLCBcInRhYmxlXCIsIFwidGJvZHlcIiwgXCJ0ZFwiLCBcInRleHRhcmVhXCIsIFwidGZvb3RcIiwgXCJ0aFwiLCBcInRoZWFkXCIsIFwidGl0bGVcIiwgXCJ0clwiLCBcInR0XCIsIFwidVwiLCBcInZhclwiLFxuICAgICAgICBcImNhbnZhc1wiLCBcIm1haW5cIiwgXCJmaWd1cmVcIiwgXCJwbGFpbnRleHRcIiwgXCJmaWdjYXB0aW9uXCIsIFwiaGdyb3VwXCIsIFwiZGV0YWlsc1wiLCBcInN1bW1hcnlcIlxuICAgIF1cbn07XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xudmFyIHNuaXBwZXRLZXlDYWNoZSA9IG5ldyBNYXAoKTtcbnZhciBtYXJrdXBTbmlwcGV0S2V5cztcbnZhciBzdHlsZXNoZWV0Q3VzdG9tU25pcHBldHNLZXlDYWNoZSA9IG5ldyBNYXAoKTtcbnZhciBodG1sQWJicmV2aWF0aW9uU3RhcnRSZWdleCA9IC9eW2EteixBLVosISwoLFssIyxcXC5cXHtdLztcbi8vIHRha2Ugb2ZmIHsgZm9yIGpzeCBiZWNhdXNlIGl0IGludGVyZmVyZXMgd2l0aCB0aGUgbGFuZ3VhZ2VcbnZhciBqc3hBYmJyZXZpYXRpb25TdGFydFJlZ2V4ID0gL15bYS16LEEtWiwhLCgsWywjLFxcLl0vO1xudmFyIGNzc0FiYnJldmlhdGlvblJlZ2V4ID0gL14tP1thLXosQS1aLCEsQCwjXS87XG52YXIgaHRtbEFiYnJldmlhdGlvblJlZ2V4ID0gL1thLXosQS1aXFwuXS87XG52YXIgY29tbW9ubHlVc2VkVGFncyA9IF9fc3ByZWFkQXJyYXkoX19zcHJlYWRBcnJheShbXSwgaHRtbERhdGEudGFncywgdHJ1ZSksIFsnbG9yZW0nXSwgZmFsc2UpO1xudmFyIGJlbUZpbHRlclN1ZmZpeCA9ICdiZW0nO1xudmFyIGZpbHRlckRlbGltaXRvciA9ICd8JztcbnZhciB0cmltRmlsdGVyU3VmZml4ID0gJ3QnO1xudmFyIGNvbW1lbnRGaWx0ZXJTdWZmaXggPSAnYyc7XG52YXIgbWF4RmlsdGVycyA9IDM7XG4vKipcbiAqIFJldHVybnMgYWxsIGFwcGxpY2FibGUgZW1tZXQgZXhwYW5zaW9ucyBmb3IgYWJicmV2aWF0aW9uIGF0IGdpdmVuIHBvc2l0aW9uIGluIGEgQ29tcGxldGlvbkxpc3RcbiAqIEBwYXJhbSBtb2RlbCBUZXh0TW9kZWwgaW4gd2hpY2ggY29tcGxldGlvbnMgYXJlIHJlcXVlc3RlZFxuICogQHBhcmFtIHBvc2l0aW9uIFBvc2l0aW9uIGluIHRoZSBkb2N1bWVudCBhdCB3aGljaCBjb21wbGV0aW9ucyBhcmUgcmVxdWVzdGVkXG4gKiBAcGFyYW0gc3ludGF4IEVtbWV0IHN1cHBvcnRlZCBsYW5ndWFnZVxuICogQHBhcmFtIGVtbWV0Q29uZmlnIEVtbWV0IENvbmZpZ3VyYXRpb25zIGFzIGRlcml2ZWQgZnJvbSBWUyBDb2RlXG4gKi9cbmZ1bmN0aW9uIGRvQ29tcGxldGUobW9uYWNvLCBtb2RlbCwgcG9zaXRpb24sIHN5bnRheCwgZW1tZXRDb25maWcpIHtcbiAgICB2YXIgX2E7XG4gICAgdmFyIGlzU3R5bGVTaGVldFJlcyA9IGlzU3R5bGVTaGVldChzeW50YXgpO1xuICAgIC8vIEZldGNoIG1hcmt1cFNuaXBwZXRzIHNvIHRoYXQgd2UgY2FuIHByb3ZpZGUgcG9zc2libGUgYWJicmV2aWF0aW9uIGNvbXBsZXRpb25zXG4gICAgLy8gRm9yIGV4YW1wbGUsIHdoZW4gdGV4dCBhdCBwb3NpdGlvbiBpcyBgYWAsIGNvbXBsZXRpb25zIHNob3VsZCByZXR1cm4gYGE6YmxhbmtgLCBgYTpsaW5rYCwgYGFjcmAgZXRjLlxuICAgIGlmICghaXNTdHlsZVNoZWV0UmVzKSB7XG4gICAgICAgIGlmICghc25pcHBldEtleUNhY2hlLmhhcyhzeW50YXgpKSB7XG4gICAgICAgICAgICB2YXIgcmVnaXN0cnkgPSBnZXREZWZhdWx0U25pcHBldHMoc3ludGF4KTtcbiAgICAgICAgICAgIHNuaXBwZXRLZXlDYWNoZS5zZXQoc3ludGF4LCBPYmplY3Qua2V5cyhyZWdpc3RyeSkpO1xuICAgICAgICB9XG4gICAgICAgIG1hcmt1cFNuaXBwZXRLZXlzID0gKF9hID0gc25pcHBldEtleUNhY2hlLmdldChzeW50YXgpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBbXTtcbiAgICB9XG4gICAgdmFyIGV4dHJhY3RPcHRpb25zID0ge1xuICAgICAgICBsb29rQWhlYWQ6ICFpc1N0eWxlU2hlZXRSZXMsXG4gICAgICAgIHR5cGU6IGdldFN5bnRheFR5cGUoc3ludGF4KSxcbiAgICB9O1xuICAgIHZhciBleHRyYWN0ZWRWYWx1ZSA9IGV4dHJhY3RBYmJyZXZpYXRpb24obW9uYWNvLCBtb2RlbCwgcG9zaXRpb24sIGV4dHJhY3RPcHRpb25zKTtcbiAgICBpZiAoIWV4dHJhY3RlZFZhbHVlKVxuICAgICAgICByZXR1cm47XG4gICAgdmFyIGFiYnJldmlhdGlvblJhbmdlID0gZXh0cmFjdGVkVmFsdWUuYWJicmV2aWF0aW9uUmFuZ2UsIGFiYnJldmlhdGlvbiA9IGV4dHJhY3RlZFZhbHVlLmFiYnJldmlhdGlvbiwgY3VycmVudExpbmVUaWxsUG9zaXRpb24gPSBleHRyYWN0ZWRWYWx1ZS5jdXJyZW50TGluZVRpbGxQb3NpdGlvbiwgZmlsdGVyID0gZXh0cmFjdGVkVmFsdWUuZmlsdGVyO1xuICAgIHZhciBjdXJyZW50V29yZCA9IGdldEN1cnJlbnRXb3JkKGN1cnJlbnRMaW5lVGlsbFBvc2l0aW9uKTtcbiAgICAvLyBEb24ndCBhdHRlbXB0IHRvIGV4cGFuZCBvcGVuIHRhZ3NcbiAgICBpZiAoY3VycmVudFdvcmQgPT09IGFiYnJldmlhdGlvbiAmJiBjdXJyZW50TGluZVRpbGxQb3NpdGlvbi5lbmRzV2l0aChcIjxcIi5jb25jYXQoYWJicmV2aWF0aW9uKSkgJiYgIWlzU3R5bGVTaGVldFJlcykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBleHBhbmRPcHRpb25zID0gZ2V0RXhwYW5kT3B0aW9ucyhzeW50YXgsIGZpbHRlcik7XG4gICAgdmFyIGV4cGFuZGVkVGV4dCA9ICcnO1xuICAgIHZhciBleHBhbmRlZEFiYnI7XG4gICAgdmFyIGNvbXBsZXRpb25JdGVtcyA9IFtdO1xuICAgIC8vIENyZWF0ZSBjb21wbGV0aW9uIGl0ZW0gYWZ0ZXIgZXhwYW5kaW5nIGdpdmVuIGFiYnJldmlhdGlvblxuICAgIC8vIGlmIGFiYnJldmlhdGlvbiBpcyB2YWxpZCBhbmQgZXhwYW5kZWQgdmFsdWUgaXMgbm90IG5vaXNlXG4gICAgdmFyIGNyZWF0ZUV4cGFuZGVkQWJiciA9IGZ1bmN0aW9uIChzeW50YXgsIGFiYnIpIHtcbiAgICAgICAgaWYgKCFpc0FiYnJldmlhdGlvblZhbGlkKHN5bnRheCwgYWJicmV2aWF0aW9uKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGV4cGFuZGVkVGV4dCA9IGV4cGFuZEFiYnJldmlhdGlvbiQxKGFiYnIsIGV4cGFuZE9wdGlvbnMpO1xuICAgICAgICAgICAgLy8gbWFudWFsbHkgcGF0Y2ggaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC92c2NvZGUvaXNzdWVzLzEyMDI0NSBmb3Igbm93XG4gICAgICAgICAgICBpZiAoaXNTdHlsZVNoZWV0UmVzICYmICchaW1wb3J0YW50Jy5zdGFydHNXaXRoKGFiYnIpKSB7XG4gICAgICAgICAgICAgICAgZXhwYW5kZWRUZXh0ID0gJyFpbXBvcnRhbnQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7IH1cbiAgICAgICAgaWYgKCFleHBhbmRlZFRleHQgfHwgaXNFeHBhbmRlZFRleHROb2lzZShzeW50YXgsIGFiYnIsIGV4cGFuZGVkVGV4dCwgZXhwYW5kT3B0aW9ucy5vcHRpb25zKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGV4cGFuZGVkQWJiciA9IHtcbiAgICAgICAgICAgIGtpbmQ6IG1vbmFjby5sYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1LaW5kLlByb3BlcnR5LFxuICAgICAgICAgICAgbGFiZWw6IGFiYnJldmlhdGlvbiArIChmaWx0ZXIgPyAnfCcgKyBmaWx0ZXIucmVwbGFjZSgnLCcsICd8JykgOiAnJyksXG4gICAgICAgICAgICBkb2N1bWVudGF0aW9uOiByZXBsYWNlVGFiU3RvcHNXaXRoQ3Vyc29ycyhleHBhbmRlZFRleHQpLFxuICAgICAgICAgICAgZGV0YWlsOiAnRW1tZXQgYWJicmV2aWF0aW9uJyxcbiAgICAgICAgICAgIGluc2VydFRleHRSdWxlczogbW9uYWNvLmxhbmd1YWdlcy5Db21wbGV0aW9uSXRlbUluc2VydFRleHRSdWxlLkluc2VydEFzU25pcHBldCxcbiAgICAgICAgICAgIHJhbmdlOiBhYmJyZXZpYXRpb25SYW5nZSxcbiAgICAgICAgICAgIGluc2VydFRleHQ6IGVzY2FwZU5vblRhYlN0b3BEb2xsYXIoYWRkRmluYWxUYWJTdG9wKGV4cGFuZGVkVGV4dCkpLFxuICAgICAgICB9O1xuICAgICAgICBjb21wbGV0aW9uSXRlbXMgPSBbZXhwYW5kZWRBYmJyXTtcbiAgICB9O1xuICAgIGNyZWF0ZUV4cGFuZGVkQWJicihzeW50YXgsIGFiYnJldmlhdGlvbik7XG4gICAgaWYgKGlzU3R5bGVTaGVldFJlcykge1xuICAgICAgICAvLyBXaGVuIGFiYnIgaXMgbG9uZ2VyIHRoYW4gdXN1YWwgZW1tZXQgc25pcHBldHMgYW5kIG1hdGNoZXMgYmV0dGVyIHdpdGggZXhpc3RpbmcgY3NzIHByb3BlcnR5LCB0aGVuIG5vIGVtbWV0XG4gICAgICAgIGlmIChhYmJyZXZpYXRpb24ubGVuZ3RoID4gNCAmJiBjc3NEYXRhLnByb3BlcnRpZXMuc29tZShmdW5jdGlvbiAoeCkgeyByZXR1cm4geC5zdGFydHNXaXRoKGFiYnJldmlhdGlvbik7IH0pKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWdnZXN0aW9uczogW10sIGluY29tcGxldGU6IHRydWUgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXhwYW5kZWRBYmJyICYmIGV4cGFuZGVkVGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGV4cGFuZGVkQWJici5yYW5nZSA9IGFiYnJldmlhdGlvblJhbmdlO1xuICAgICAgICAgICAgZXhwYW5kZWRBYmJyLmluc2VydFRleHQgPSBlc2NhcGVOb25UYWJTdG9wRG9sbGFyKGFkZEZpbmFsVGFiU3RvcChleHBhbmRlZFRleHQpKTtcbiAgICAgICAgICAgIGV4cGFuZGVkQWJici5kb2N1bWVudGF0aW9uID0gcmVwbGFjZVRhYlN0b3BzV2l0aEN1cnNvcnMoZXhwYW5kZWRUZXh0KTtcbiAgICAgICAgICAgIGV4cGFuZGVkQWJici5sYWJlbCA9IHJlbW92ZVRhYlN0b3BzKGV4cGFuZGVkVGV4dCk7XG4gICAgICAgICAgICBleHBhbmRlZEFiYnIuZmlsdGVyVGV4dCA9IGFiYnJldmlhdGlvbjtcbiAgICAgICAgICAgIC8vIEN1c3RvbSBzbmlwcGV0cyBzaG91bGQgc2hvdyB1cCBpbiBjb21wbGV0aW9ucyBpZiBhYmJyZXZpYXRpb24gaXMgYSBwcmVmaXhcbiAgICAgICAgICAgIHZhciBzdHlsZXNoZWV0Q3VzdG9tU25pcHBldHNLZXlzID0gc3R5bGVzaGVldEN1c3RvbVNuaXBwZXRzS2V5Q2FjaGUuaGFzKHN5bnRheClcbiAgICAgICAgICAgICAgICA/IHN0eWxlc2hlZXRDdXN0b21TbmlwcGV0c0tleUNhY2hlLmdldChzeW50YXgpXG4gICAgICAgICAgICAgICAgOiBzdHlsZXNoZWV0Q3VzdG9tU25pcHBldHNLZXlDYWNoZS5nZXQoJ2NzcycpO1xuICAgICAgICAgICAgY29tcGxldGlvbkl0ZW1zID0gbWFrZVNuaXBwZXRTdWdnZXN0aW9uKG1vbmFjbywgc3R5bGVzaGVldEN1c3RvbVNuaXBwZXRzS2V5cyAhPT0gbnVsbCAmJiBzdHlsZXNoZWV0Q3VzdG9tU25pcHBldHNLZXlzICE9PSB2b2lkIDAgPyBzdHlsZXNoZWV0Q3VzdG9tU25pcHBldHNLZXlzIDogW10sIGFiYnJldmlhdGlvbiwgYWJicmV2aWF0aW9uLCBhYmJyZXZpYXRpb25SYW5nZSwgZXhwYW5kT3B0aW9ucywgJ0VtbWV0IEN1c3RvbSBTbmlwcGV0JywgZmFsc2UpO1xuICAgICAgICAgICAgaWYgKCFjb21wbGV0aW9uSXRlbXMuZmluZChmdW5jdGlvbiAoeCkgeyByZXR1cm4geC5pbnNlcnRUZXh0ID09PSAoZXhwYW5kZWRBYmJyID09PSBudWxsIHx8IGV4cGFuZGVkQWJiciA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXhwYW5kZWRBYmJyLmluc2VydFRleHQpOyB9KSkge1xuICAgICAgICAgICAgICAgIC8vIEZpeCBmb3IgaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC92c2NvZGUvaXNzdWVzLzI4OTMzI2lzc3VlY29tbWVudC0zMDkyMzY5MDJcbiAgICAgICAgICAgICAgICAvLyBXaGVuIHVzZXIgdHlwZXMgaW4gcHJvcGVydHluYW1lLCBlbW1ldCB1c2VzIGl0IHRvIG1hdGNoIHdpdGggc25pcHBldCBuYW1lcywgcmVzdWx0aW5nIGluIHdpZHRoIC0+IHdpZG93cyBvciBmb250LWZhbWlseSAtPiBmb250OiBmYW1pbHlcbiAgICAgICAgICAgICAgICAvLyBGaWx0ZXIgb3V0IHRob3NlIGNhc2VzIGhlcmUuXG4gICAgICAgICAgICAgICAgdmFyIGFiYnJSZWdleCA9IG5ldyBSZWdFeHAoJy4qJyArXG4gICAgICAgICAgICAgICAgICAgIGFiYnJldmlhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KCcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoeCkgeyByZXR1cm4gKHggPT09ICckJyB8fCB4ID09PSAnKycgPyAnXFxcXCcgKyB4IDogeCk7IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuam9pbignLionKSArXG4gICAgICAgICAgICAgICAgICAgICcuKicsICdpJyk7XG4gICAgICAgICAgICAgICAgaWYgKC9cXGQvLnRlc3QoYWJicmV2aWF0aW9uKSB8fCBhYmJyUmVnZXgudGVzdChleHBhbmRlZEFiYnIubGFiZWwpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRpb25JdGVtcy5wdXNoKGV4cGFuZGVkQWJicik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgdGFnVG9GaW5kTW9yZVN1Z2dlc3Rpb25zRm9yID0gYWJicmV2aWF0aW9uO1xuICAgICAgICB2YXIgbmV3VGFnTWF0Y2hlcyA9IGFiYnJldmlhdGlvbi5tYXRjaCgvKD58XFwrKShbXFx3Oi1dKykkLyk7XG4gICAgICAgIGlmIChuZXdUYWdNYXRjaGVzICYmIG5ld1RhZ01hdGNoZXMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICB0YWdUb0ZpbmRNb3JlU3VnZ2VzdGlvbnNGb3IgPSBuZXdUYWdNYXRjaGVzWzJdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzeW50YXggIT09ICd4bWwnKSB7XG4gICAgICAgICAgICB2YXIgY29tbW9ubHlVc2VkVGFnU3VnZ2VzdGlvbnMgPSBtYWtlU25pcHBldFN1Z2dlc3Rpb24obW9uYWNvLCBjb21tb25seVVzZWRUYWdzLCB0YWdUb0ZpbmRNb3JlU3VnZ2VzdGlvbnNGb3IsIGFiYnJldmlhdGlvbiwgYWJicmV2aWF0aW9uUmFuZ2UsIGV4cGFuZE9wdGlvbnMsICdFbW1ldCBBYmJyZXZpYXRpb24nKTtcbiAgICAgICAgICAgIGNvbXBsZXRpb25JdGVtcyA9IGNvbXBsZXRpb25JdGVtcy5jb25jYXQoY29tbW9ubHlVc2VkVGFnU3VnZ2VzdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbW1ldENvbmZpZy5zaG93QWJicmV2aWF0aW9uU3VnZ2VzdGlvbnMgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHZhciBhYmJyZXZpYXRpb25TdWdnZXN0aW9ucyA9IG1ha2VTbmlwcGV0U3VnZ2VzdGlvbihtb25hY28sIG1hcmt1cFNuaXBwZXRLZXlzLmZpbHRlcihmdW5jdGlvbiAoeCkgeyByZXR1cm4gIWNvbW1vbmx5VXNlZFRhZ3MuaW5jbHVkZXMoeCk7IH0pLCB0YWdUb0ZpbmRNb3JlU3VnZ2VzdGlvbnNGb3IsIGFiYnJldmlhdGlvbiwgYWJicmV2aWF0aW9uUmFuZ2UsIGV4cGFuZE9wdGlvbnMsICdFbW1ldCBBYmJyZXZpYXRpb24nKTtcbiAgICAgICAgICAgIC8vIFdvcmthcm91bmQgZm9yIHRoZSBtYWluIGV4cGFuZGVkIGFiYnIgbm90IGFwcGVhcmluZyBiZWZvcmUgdGhlIHNuaXBwZXQgc3VnZ2VzdGlvbnNcbiAgICAgICAgICAgIGlmIChleHBhbmRlZEFiYnIgJiYgYWJicmV2aWF0aW9uU3VnZ2VzdGlvbnMubGVuZ3RoID4gMCAmJiB0YWdUb0ZpbmRNb3JlU3VnZ2VzdGlvbnNGb3IgIT09IGFiYnJldmlhdGlvbikge1xuICAgICAgICAgICAgICAgIGV4cGFuZGVkQWJici5zb3J0VGV4dCA9ICcwJyArIGV4cGFuZGVkQWJici5sYWJlbDtcbiAgICAgICAgICAgICAgICBhYmJyZXZpYXRpb25TdWdnZXN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdvcmthcm91bmQgZm9yIHNuaXBwZXQgc3VnZ2VzdGlvbnMgaXRlbXMgZ2V0dGluZyBmaWx0ZXJlZCBvdXQgYXMgdGhlIGNvbXBsZXRlIGFiYnIgZG9lcyBub3Qgc3RhcnQgd2l0aCBzbmlwcGV0S2V5XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZmlsdGVyVGV4dCA9IGFiYnJldmlhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgLy8gV29ya2Fyb3VuZCBmb3IgdGhlIG1haW4gZXhwYW5kZWQgYWJiciBub3QgYXBwZWFyaW5nIGJlZm9yZSB0aGUgc25pcHBldCBzdWdnZXN0aW9uc1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnNvcnRUZXh0ID0gJzknICsgYWJicmV2aWF0aW9uO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29tcGxldGlvbkl0ZW1zID0gY29tcGxldGlvbkl0ZW1zLmNvbmNhdChhYmJyZXZpYXRpb25TdWdnZXN0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC92c2NvZGUvaXNzdWVzLzY2NjgwXG4gICAgICAgIGlmIChzeW50YXggPT09ICdodG1sJyAmJlxuICAgICAgICAgICAgY29tcGxldGlvbkl0ZW1zLmxlbmd0aCA+PSAyICYmXG4gICAgICAgICAgICBhYmJyZXZpYXRpb24uaW5jbHVkZXMoJzonKSAmJlxuICAgICAgICAgICAgKGV4cGFuZGVkQWJiciA9PT0gbnVsbCB8fCBleHBhbmRlZEFiYnIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV4cGFuZGVkQWJici5pbnNlcnRUZXh0KSA9PT0gXCI8XCIuY29uY2F0KGFiYnJldmlhdGlvbiwgXCI+JHswfTwvXCIpLmNvbmNhdChhYmJyZXZpYXRpb24sIFwiPlwiKSkge1xuICAgICAgICAgICAgY29tcGxldGlvbkl0ZW1zID0gY29tcGxldGlvbkl0ZW1zLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbS5sYWJlbCAhPT0gYWJicmV2aWF0aW9uOyB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW1tZXRDb25maWcuc2hvd1N1Z2dlc3Rpb25zQXNTbmlwcGV0cyA9PT0gdHJ1ZSkge1xuICAgICAgICBjb21wbGV0aW9uSXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoeCkgeyByZXR1cm4gKHgua2luZCA9IG1vbmFjby5sYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1LaW5kLlNuaXBwZXQpOyB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXBsZXRpb25JdGVtcy5sZW5ndGggPyB7IHN1Z2dlc3Rpb25zOiBjb21wbGV0aW9uSXRlbXMsIGluY29tcGxldGU6IHRydWUgfSA6IHVuZGVmaW5lZDtcbn1cbi8qKlxuICogQ3JlYXRlICYgcmV0dXJuIHNuaXBwZXRzIGZvciBzbmlwcGV0IGtleXMgdGhhdCBzdGFydCB3aXRoIGdpdmVuIHByZWZpeFxuICovXG5mdW5jdGlvbiBtYWtlU25pcHBldFN1Z2dlc3Rpb24obW9uYWNvLCBzbmlwcGV0S2V5cywgcHJlZml4LCBhYmJyZXZpYXRpb24sIGFiYnJldmlhdGlvblJhbmdlLCBleHBhbmRPcHRpb25zLCBzbmlwcGV0RGV0YWlsLCBza2lwRnVsbE1hdGNoKSB7XG4gICAgaWYgKHNraXBGdWxsTWF0Y2ggPT09IHZvaWQgMCkgeyBza2lwRnVsbE1hdGNoID0gdHJ1ZTsgfVxuICAgIGlmICghcHJlZml4IHx8ICFzbmlwcGV0S2V5cykge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHZhciBzbmlwcGV0Q29tcGxldGlvbnMgPSBbXTtcbiAgICBzbmlwcGV0S2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChzbmlwcGV0S2V5KSB7XG4gICAgICAgIGlmICghc25pcHBldEtleS5zdGFydHNXaXRoKHByZWZpeC50b0xvd2VyQ2FzZSgpKSB8fCAoc2tpcEZ1bGxNYXRjaCAmJiBzbmlwcGV0S2V5ID09PSBwcmVmaXgudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY3VycmVudEFiYnIgPSBhYmJyZXZpYXRpb24gKyBzbmlwcGV0S2V5LnN1YnN0cihwcmVmaXgubGVuZ3RoKTtcbiAgICAgICAgdmFyIGV4cGFuZGVkQWJicjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGV4cGFuZGVkQWJiciA9IGV4cGFuZEFiYnJldmlhdGlvbiQxKGN1cnJlbnRBYmJyLCBleHBhbmRPcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkgeyB9XG4gICAgICAgIGlmICghZXhwYW5kZWRBYmJyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGl0ZW0gPSB7XG4gICAgICAgICAgICBraW5kOiBtb25hY28ubGFuZ3VhZ2VzLkNvbXBsZXRpb25JdGVtS2luZC5Qcm9wZXJ0eSxcbiAgICAgICAgICAgIGxhYmVsOiBwcmVmaXggKyBzbmlwcGV0S2V5LnN1YnN0cihwcmVmaXgubGVuZ3RoKSxcbiAgICAgICAgICAgIGRvY3VtZW50YXRpb246IHJlcGxhY2VUYWJTdG9wc1dpdGhDdXJzb3JzKGV4cGFuZGVkQWJiciksXG4gICAgICAgICAgICBkZXRhaWw6IHNuaXBwZXREZXRhaWwsXG4gICAgICAgICAgICBpbnNlcnRUZXh0UnVsZXM6IG1vbmFjby5sYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1JbnNlcnRUZXh0UnVsZS5JbnNlcnRBc1NuaXBwZXQsXG4gICAgICAgICAgICByYW5nZTogYWJicmV2aWF0aW9uUmFuZ2UsXG4gICAgICAgICAgICBpbnNlcnRUZXh0OiBlc2NhcGVOb25UYWJTdG9wRG9sbGFyKGFkZEZpbmFsVGFiU3RvcChleHBhbmRlZEFiYnIpKSxcbiAgICAgICAgfTtcbiAgICAgICAgc25pcHBldENvbXBsZXRpb25zLnB1c2goaXRlbSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHNuaXBwZXRDb21wbGV0aW9ucztcbn1cbmZ1bmN0aW9uIGdldEN1cnJlbnRXb3JkKGN1cnJlbnRMaW5lVGlsbFBvc2l0aW9uKSB7XG4gICAgaWYgKGN1cnJlbnRMaW5lVGlsbFBvc2l0aW9uKSB7XG4gICAgICAgIHZhciBtYXRjaGVzID0gY3VycmVudExpbmVUaWxsUG9zaXRpb24ubWF0Y2goL1tcXHcsOiwtLFxcLl0qJC8pO1xuICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXNbMF07XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiByZXBsYWNlVGFiU3RvcHNXaXRoQ3Vyc29ycyhleHBhbmRlZFdvcmQpIHtcbiAgICByZXR1cm4gZXhwYW5kZWRXb3JkLnJlcGxhY2UoLyhbXlxcXFxdKVxcJFxce1xcZCtcXH0vZywgJyQxfCcpLnJlcGxhY2UoL1xcJFxce1xcZCs6KFteXFx9XSspXFx9L2csICckMScpO1xufVxuZnVuY3Rpb24gcmVtb3ZlVGFiU3RvcHMoZXhwYW5kZWRXb3JkKSB7XG4gICAgcmV0dXJuIGV4cGFuZGVkV29yZC5yZXBsYWNlKC8oW15cXFxcXSlcXCRcXHtcXGQrXFx9L2csICckMScpLnJlcGxhY2UoL1xcJFxce1xcZCs6KFteXFx9XSspXFx9L2csICckMScpO1xufVxuZnVuY3Rpb24gZXNjYXBlTm9uVGFiU3RvcERvbGxhcih0ZXh0KSB7XG4gICAgcmV0dXJuIHRleHQgPyB0ZXh0LnJlcGxhY2UoLyhbXlxcXFxdKShcXCQpKFteXFx7XSkvZywgJyQxXFxcXCQyJDMnKSA6IHRleHQ7XG59XG5mdW5jdGlvbiBhZGRGaW5hbFRhYlN0b3AodGV4dCkge1xuICAgIGlmICghdGV4dCB8fCAhdGV4dC50cmltKCkpIHtcbiAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfVxuICAgIHZhciBtYXhUYWJTdG9wID0gLTE7XG4gICAgdmFyIG1heFRhYlN0b3BSYW5nZXMgPSBbXTtcbiAgICB2YXIgZm91bmRMYXN0U3RvcCA9IGZhbHNlO1xuICAgIHZhciByZXBsYWNlV2l0aExhc3RTdG9wID0gZmFsc2U7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBuID0gdGV4dC5sZW5ndGg7XG4gICAgdHJ5IHtcbiAgICAgICAgd2hpbGUgKGkgPCBuICYmICFmb3VuZExhc3RTdG9wKSB7XG4gICAgICAgICAgICAvLyBMb29rIGZvciAke1xuICAgICAgICAgICAgaWYgKHRleHRbaSsrXSAhPSAnJCcgfHwgdGV4dFtpKytdICE9ICd7Jykge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRmluZCB0YWJzdG9wXG4gICAgICAgICAgICB2YXIgbnVtYmVyU3RhcnQgPSAtMTtcbiAgICAgICAgICAgIHZhciBudW1iZXJFbmQgPSAtMTtcbiAgICAgICAgICAgIHdoaWxlIChpIDwgbiAmJiAvXFxkLy50ZXN0KHRleHRbaV0pKSB7XG4gICAgICAgICAgICAgICAgbnVtYmVyU3RhcnQgPSBudW1iZXJTdGFydCA8IDAgPyBpIDogbnVtYmVyU3RhcnQ7XG4gICAgICAgICAgICAgICAgbnVtYmVyRW5kID0gaSArIDE7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgJHsgd2FzIG5vdCBmb2xsb3dlZCBieSBhIG51bWJlciBhbmQgZWl0aGVyIH0gb3IgOiwgdGhlbiBpdHMgbm90IGEgdGFic3RvcFxuICAgICAgICAgICAgaWYgKG51bWJlclN0YXJ0ID09PSAtMSB8fCBudW1iZXJFbmQgPT09IC0xIHx8IGkgPj0gbiB8fCAodGV4dFtpXSAhPSAnfScgJiYgdGV4dFtpXSAhPSAnOicpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiAkezB9IHdhcyBmb3VuZCwgdGhlbiBicmVha1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRUYWJTdG9wID0gdGV4dC5zdWJzdHJpbmcobnVtYmVyU3RhcnQsIG51bWJlckVuZCk7XG4gICAgICAgICAgICBmb3VuZExhc3RTdG9wID0gY3VycmVudFRhYlN0b3AgPT09ICcwJztcbiAgICAgICAgICAgIGlmIChmb3VuZExhc3RTdG9wKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZm91bmRQbGFjZWhvbGRlciA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHRleHRbaSsrXSA9PSAnOicpIHtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBOZXN0ZWQgcGxhY2Vob2xkZXJzIG1heSBicmVhayBoZXJlXG4gICAgICAgICAgICAgICAgd2hpbGUgKGkgPCBuKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0W2ldID09ICd9Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRQbGFjZWhvbGRlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRGVjaWRlIHRvIHJlcGxhY2UgY3VycmVudFRhYlN0b3Agd2l0aCAkezB9IG9ubHkgaWYgaXRzIHRoZSBtYXggYW1vbmcgYWxsIHRhYnN0b3BzIGFuZCBpcyBub3QgYSBwbGFjZWhvbGRlclxuICAgICAgICAgICAgaWYgKE51bWJlcihjdXJyZW50VGFiU3RvcCkgPiBOdW1iZXIobWF4VGFiU3RvcCkpIHtcbiAgICAgICAgICAgICAgICBtYXhUYWJTdG9wID0gTnVtYmVyKGN1cnJlbnRUYWJTdG9wKTtcbiAgICAgICAgICAgICAgICBtYXhUYWJTdG9wUmFuZ2VzID0gW3sgbnVtYmVyU3RhcnQ6IG51bWJlclN0YXJ0LCBudW1iZXJFbmQ6IG51bWJlckVuZCB9XTtcbiAgICAgICAgICAgICAgICByZXBsYWNlV2l0aExhc3RTdG9wID0gIWZvdW5kUGxhY2Vob2xkZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChOdW1iZXIoY3VycmVudFRhYlN0b3ApID09PSBtYXhUYWJTdG9wKSB7XG4gICAgICAgICAgICAgICAgbWF4VGFiU3RvcFJhbmdlcy5wdXNoKHsgbnVtYmVyU3RhcnQ6IG51bWJlclN0YXJ0LCBudW1iZXJFbmQ6IG51bWJlckVuZCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZSkgeyB9XG4gICAgaWYgKHJlcGxhY2VXaXRoTGFzdFN0b3AgJiYgIWZvdW5kTGFzdFN0b3ApIHtcbiAgICAgICAgZm9yICh2YXIgaV8xID0gMDsgaV8xIDwgbWF4VGFiU3RvcFJhbmdlcy5sZW5ndGg7IGlfMSsrKSB7XG4gICAgICAgICAgICB2YXIgcmFuZ2VTdGFydCA9IG1heFRhYlN0b3BSYW5nZXNbaV8xXS5udW1iZXJTdGFydDtcbiAgICAgICAgICAgIHZhciByYW5nZUVuZCA9IG1heFRhYlN0b3BSYW5nZXNbaV8xXS5udW1iZXJFbmQ7XG4gICAgICAgICAgICB0ZXh0ID0gdGV4dC5zdWJzdHIoMCwgcmFuZ2VTdGFydCkgKyAnMCcgKyB0ZXh0LnN1YnN0cihyYW5nZUVuZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRleHQ7XG59XG52YXIgZW1tZXRTbmlwcGV0RmllbGQgPSBmdW5jdGlvbiAoaW5kZXgsIHBsYWNlaG9sZGVyKSB7IHJldHVybiBcIiR7XCIuY29uY2F0KGluZGV4KS5jb25jYXQocGxhY2Vob2xkZXIgPyAnOicgKyBwbGFjZWhvbGRlciA6ICcnLCBcIn1cIik7IH07XG4vKiogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCBzeW50YXggaXMgYSBzdXBwb3J0ZWQgc3R5bGVzaGVldCBzeW50YXgsIGxpa2UgQ1NTICovXG5mdW5jdGlvbiBpc1N0eWxlU2hlZXQoc3ludGF4KSB7XG4gICAgcmV0dXJuIHN5bnRheCA9PT0gJ2Nzcyc7XG59XG4vKiogUmV0dXJucyB0aGUgc3ludGF4IHR5cGUsIGVpdGhlciBtYXJrdXAgKGUuZy4gZm9yIEhUTUwpIG9yIHN0eWxlc2hlZXQgKGUuZy4gZm9yIENTUykgKi9cbmZ1bmN0aW9uIGdldFN5bnRheFR5cGUoc3ludGF4KSB7XG4gICAgcmV0dXJuIGlzU3R5bGVTaGVldChzeW50YXgpID8gJ3N0eWxlc2hlZXQnIDogJ21hcmt1cCc7XG59XG4vKiogUmV0dXJucyB0aGUgZGVmYXVsdCBzbmlwcGV0cyB0aGF0IEVtbWV0IHN1Z2dlc3RzICovXG5mdW5jdGlvbiBnZXREZWZhdWx0U25pcHBldHMoc3ludGF4KSB7XG4gICAgdmFyIHN5bnRheFR5cGUgPSBnZXRTeW50YXhUeXBlKHN5bnRheCk7XG4gICAgdmFyIGVtcHR5VXNlckNvbmZpZyA9IHsgdHlwZTogc3ludGF4VHlwZSwgc3ludGF4OiBzeW50YXggfTtcbiAgICB2YXIgcmVzb2x2ZWRDb25maWcgPSByZXNvbHZlQ29uZmlnKGVtcHR5VXNlckNvbmZpZyk7XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC92c2NvZGUvaXNzdWVzLzk3NjMyXG4gICAgLy8gZG9uJ3QgcmV0dXJuIG1hcmt1cCAoSFRNTCkgc25pcHBldHMgZm9yIFhNTFxuICAgIHJldHVybiBzeW50YXggPT09ICd4bWwnID8ge30gOiByZXNvbHZlZENvbmZpZy5zbmlwcGV0cztcbn1cbmZ1bmN0aW9uIGdldEZpbHRlcnModGV4dCwgcG9zKSB7XG4gICAgdmFyIGZpbHRlcjtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1heEZpbHRlcnM7IGkrKykge1xuICAgICAgICBpZiAodGV4dC5lbmRzV2l0aChcIlwiLmNvbmNhdChmaWx0ZXJEZWxpbWl0b3IpLmNvbmNhdChiZW1GaWx0ZXJTdWZmaXgpLCBwb3MpKSB7XG4gICAgICAgICAgICBwb3MgLT0gYmVtRmlsdGVyU3VmZml4Lmxlbmd0aCArIDE7XG4gICAgICAgICAgICBmaWx0ZXIgPSBmaWx0ZXIgPyBiZW1GaWx0ZXJTdWZmaXggKyAnLCcgKyBmaWx0ZXIgOiBiZW1GaWx0ZXJTdWZmaXg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGV4dC5lbmRzV2l0aChcIlwiLmNvbmNhdChmaWx0ZXJEZWxpbWl0b3IpLmNvbmNhdChjb21tZW50RmlsdGVyU3VmZml4KSwgcG9zKSkge1xuICAgICAgICAgICAgcG9zIC09IGNvbW1lbnRGaWx0ZXJTdWZmaXgubGVuZ3RoICsgMTtcbiAgICAgICAgICAgIGZpbHRlciA9IGZpbHRlciA/IGNvbW1lbnRGaWx0ZXJTdWZmaXggKyAnLCcgKyBmaWx0ZXIgOiBjb21tZW50RmlsdGVyU3VmZml4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRleHQuZW5kc1dpdGgoXCJcIi5jb25jYXQoZmlsdGVyRGVsaW1pdG9yKS5jb25jYXQodHJpbUZpbHRlclN1ZmZpeCksIHBvcykpIHtcbiAgICAgICAgICAgIHBvcyAtPSB0cmltRmlsdGVyU3VmZml4Lmxlbmd0aCArIDE7XG4gICAgICAgICAgICBmaWx0ZXIgPSBmaWx0ZXIgPyB0cmltRmlsdGVyU3VmZml4ICsgJywnICsgZmlsdGVyIDogdHJpbUZpbHRlclN1ZmZpeDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHBvczogcG9zLFxuICAgICAgICBmaWx0ZXI6IGZpbHRlcixcbiAgICB9O1xufVxuLyoqXG4gKiBFeHRyYWN0cyBhYmJyZXZpYXRpb24gZnJvbSB0aGUgZ2l2ZW4gcG9zaXRpb24gaW4gdGhlIGdpdmVuIGRvY3VtZW50XG4gKiBAcGFyYW0gbW9kZWwgVGhlIFRleHRNb2RlbCBmcm9tIHdoaWNoIGFiYnJldmlhdGlvbiBuZWVkcyB0byBiZSBleHRyYWN0ZWRcbiAqIEBwYXJhbSBwb3NpdGlvbiBUaGUgUG9zaXRpb24gaW4gdGhlIGdpdmVuIGRvY3VtZW50IGZyb20gd2hlcmUgYWJicmV2aWF0aW9uIG5lZWRzIHRvIGJlIGV4dHJhY3RlZFxuICogQHBhcmFtIG9wdGlvbnMgVGhlIG9wdGlvbnMgdG8gcGFzcyB0byB0aGUgQGVtbWV0aW8vZXh0cmFjdC1hYmJyZXZpYXRpb24gbW9kdWxlXG4gKi9cbmZ1bmN0aW9uIGV4dHJhY3RBYmJyZXZpYXRpb24obW9uYWNvLCBtb2RlbCwgcG9zaXRpb24sIG9wdGlvbnMpIHtcbiAgICB2YXIgY3VycmVudExpbmUgPSBtb2RlbC5nZXRMaW5lQ29udGVudChwb3NpdGlvbi5saW5lTnVtYmVyKTtcbiAgICB2YXIgY3VycmVudExpbmVUaWxsUG9zaXRpb24gPSBjdXJyZW50TGluZS5zdWJzdHIoMCwgcG9zaXRpb24uY29sdW1uIC0gMSk7XG4gICAgdmFyIF9hID0gZ2V0RmlsdGVycyhjdXJyZW50TGluZVRpbGxQb3NpdGlvbiwgcG9zaXRpb24uY29sdW1uIC0gMSksIHBvcyA9IF9hLnBvcywgZmlsdGVyID0gX2EuZmlsdGVyO1xuICAgIHZhciBsZW5ndGhPY2N1cGllZEJ5RmlsdGVyID0gZmlsdGVyID8gZmlsdGVyLmxlbmd0aCArIDEgOiAwO1xuICAgIHZhciByZXN1bHQgPSBleHRyYWN0QWJicmV2aWF0aW9uJDEoY3VycmVudExpbmUsIHBvcywgb3B0aW9ucyk7XG4gICAgaWYgKCFyZXN1bHQpXG4gICAgICAgIHJldHVybjtcbiAgICB2YXIgcmFuZ2VUb1JlcGxhY2UgPSBuZXcgbW9uYWNvLlJhbmdlKHBvc2l0aW9uLmxpbmVOdW1iZXIsIHJlc3VsdC5sb2NhdGlvbiArIDEsIHBvc2l0aW9uLmxpbmVOdW1iZXIsIHJlc3VsdC5sb2NhdGlvbiArIHJlc3VsdC5hYmJyZXZpYXRpb24ubGVuZ3RoICsgbGVuZ3RoT2NjdXBpZWRCeUZpbHRlciArIDEpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGFiYnJldmlhdGlvblJhbmdlOiByYW5nZVRvUmVwbGFjZSxcbiAgICAgICAgYWJicmV2aWF0aW9uOiByZXN1bHQuYWJicmV2aWF0aW9uLFxuICAgICAgICBjdXJyZW50TGluZVRpbGxQb3NpdGlvbjogY3VycmVudExpbmVUaWxsUG9zaXRpb24sXG4gICAgICAgIGZpbHRlcjogZmlsdGVyLFxuICAgIH07XG59XG4vKipcbiAqIFJldHVybnMgYSBib29sZWFuIGRlbm90aW5nIHZhbGlkaXR5IG9mIGdpdmVuIGFiYnJldmlhdGlvbiBpbiB0aGUgY29udGV4dCBvZiBnaXZlbiBzeW50YXhcbiAqIE5vdCBuZWVkZWQgb25jZSBodHRwczovL2dpdGh1Yi5jb20vZW1tZXRpby9hdG9tLXBsdWdpbi9pc3N1ZXMvMjIgaXMgZml4ZWRcbiAqIEBwYXJhbSBzeW50YXggc3RyaW5nXG4gKiBAcGFyYW0gYWJicmV2aWF0aW9uIHN0cmluZ1xuICovXG5mdW5jdGlvbiBpc0FiYnJldmlhdGlvblZhbGlkKHN5bnRheCwgYWJicmV2aWF0aW9uKSB7XG4gICAgaWYgKCFhYmJyZXZpYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoaXNTdHlsZVNoZWV0KHN5bnRheCkpIHtcbiAgICAgICAgaWYgKGFiYnJldmlhdGlvbi5pbmNsdWRlcygnIycpKSB7XG4gICAgICAgICAgICBpZiAoYWJicmV2aWF0aW9uLnN0YXJ0c1dpdGgoJyMnKSkge1xuICAgICAgICAgICAgICAgIHZhciBoZXhDb2xvclJlZ2V4ID0gL14jW1xcZCxhLWYsQS1GXXsxLDZ9JC87XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhleENvbG9yUmVnZXgudGVzdChhYmJyZXZpYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY29tbW9ubHlVc2VkVGFncy5pbmNsdWRlcyhhYmJyZXZpYXRpb24uc3Vic3RyaW5nKDAsIGFiYnJldmlhdGlvbi5pbmRleE9mKCcjJykpKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3NzQWJicmV2aWF0aW9uUmVnZXgudGVzdChhYmJyZXZpYXRpb24pO1xuICAgIH1cbiAgICBpZiAoYWJicmV2aWF0aW9uLnN0YXJ0c1dpdGgoJyEnKSkge1xuICAgICAgICByZXR1cm4gIS9bXiFdLy50ZXN0KGFiYnJldmlhdGlvbik7XG4gICAgfVxuICAgIC8vIEl0cyBjb21tb24gZm9yIHVzZXJzIHRvIHR5cGUgKHNvbWV0ZXh0aW5zaWRlYnJhY2tldHMpLCB0aGlzIHNob3VsZCBub3QgYmUgdHJlYXRlZCBhcyBhbiBhYmJyZXZpYXRpb25cbiAgICAvLyBHcm91cGluZyBpbiBhYmJyZXZpYXRpb24gaXMgdmFsaWQgb25seSBpZiBpdCdzIGluc2lkZSBhIHRleHQgbm9kZSBvciBwcmVjZWVkZWQvc3VjY2VlZGVkIHdpdGggb25lIG9mIHRoZSBzeW1ib2xzIGZvciBuZXN0aW5nLCBzaWJsaW5nLCByZXBlYXRlciBvciBjbGltYiB1cFxuICAgIC8vIEFsc28sIGNhc2VzIHN1Y2ggYXMgYHNwYW5bb25jbGljaz1cImFsZXJ0KCk7XCJdYCBhcmUgdmFsaWRcbiAgICBpZiAoKC9cXCgvLnRlc3QoYWJicmV2aWF0aW9uKSB8fCAvXFwpLy50ZXN0KGFiYnJldmlhdGlvbikpICYmXG4gICAgICAgICEvXFx7W15cXH1cXHtdKltcXChcXCldK1teXFx9XFx7XSpcXH0oPzpbPlxcK1xcKlxcXl18JCkvLnRlc3QoYWJicmV2aWF0aW9uKSAmJlxuICAgICAgICAhL1xcKC4qXFwpWz5cXCtcXCpcXF5dLy50ZXN0KGFiYnJldmlhdGlvbikgJiZcbiAgICAgICAgIS9cXFtbXlxcW1xcXVxcKFxcKV0rPVwiLipcIlxcXS8udGVzdChhYmJyZXZpYXRpb24pICYmXG4gICAgICAgICEvWz5cXCtcXCpcXF5dXFwoLipcXCkvLnRlc3QoYWJicmV2aWF0aW9uKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChzeW50YXggPT09ICdqc3gnKSB7XG4gICAgICAgIHJldHVybiBqc3hBYmJyZXZpYXRpb25TdGFydFJlZ2V4LnRlc3QoYWJicmV2aWF0aW9uKSAmJiBodG1sQWJicmV2aWF0aW9uUmVnZXgudGVzdChhYmJyZXZpYXRpb24pO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbEFiYnJldmlhdGlvblN0YXJ0UmVnZXgudGVzdChhYmJyZXZpYXRpb24pICYmIGh0bWxBYmJyZXZpYXRpb25SZWdleC50ZXN0KGFiYnJldmlhdGlvbik7XG59XG5mdW5jdGlvbiBpc0V4cGFuZGVkVGV4dE5vaXNlKHN5bnRheCwgYWJicmV2aWF0aW9uLCBleHBhbmRlZFRleHQsIG9wdGlvbnMpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIC8vIFVucmVzb2x2ZWQgY3NzIGFiYnJldmlhdGlvbnMgZ2V0IGV4cGFuZGVkIHRvIGEgYmxhbmsgcHJvcGVydHkgdmFsdWVcbiAgICAvLyBFZzogYWJjIC0+IGFiYzogOyBvciBhYmM6ZCAtPiBhYmM6IGQ7IHdoaWNoIGlzIG5vaXNlIGlmIGl0IGdldHMgc3VnZ2VzdGVkIGZvciBldmVyeSB3b3JkIHR5cGVkXG4gICAgaWYgKGlzU3R5bGVTaGVldChzeW50YXgpICYmIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGJldHdlZW4gPSAoX2EgPSBvcHRpb25zWydzdHlsZXNoZWV0LmJldHdlZW4nXSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJzogJztcbiAgICAgICAgdmFyIGFmdGVyID0gKF9iID0gb3B0aW9uc1snc3R5bGVzaGVldC5hZnRlciddKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAnOyc7XG4gICAgICAgIC8vIFJlbW92ZSBvdmVybGFwcGluZyBiZXR3ZWVuIGBhYmJyZXZpYXRpb25gIGFuZCBgYmV0d2VlbmAsIGlmIGFueVxuICAgICAgICB2YXIgZW5kUHJlZml4SW5kZXggPSBhYmJyZXZpYXRpb24uaW5kZXhPZihiZXR3ZWVuWzBdLCBNYXRoLm1heChhYmJyZXZpYXRpb24ubGVuZ3RoIC0gYmV0d2Vlbi5sZW5ndGgsIDApKTtcbiAgICAgICAgZW5kUHJlZml4SW5kZXggPSBlbmRQcmVmaXhJbmRleCA+PSAwID8gZW5kUHJlZml4SW5kZXggOiBhYmJyZXZpYXRpb24ubGVuZ3RoO1xuICAgICAgICB2YXIgYWJiciA9IGFiYnJldmlhdGlvbi5zdWJzdHJpbmcoMCwgZW5kUHJlZml4SW5kZXgpO1xuICAgICAgICByZXR1cm4gKGV4cGFuZGVkVGV4dCA9PT0gXCJcIi5jb25jYXQoYWJicikuY29uY2F0KGJldHdlZW4sIFwiJHswfVwiKS5jb25jYXQoYWZ0ZXIpIHx8XG4gICAgICAgICAgICBleHBhbmRlZFRleHQucmVwbGFjZSgvXFxzL2csICcnKSA9PT0gYWJicmV2aWF0aW9uLnJlcGxhY2UoL1xccy9nLCAnJykgKyBhZnRlcik7XG4gICAgfVxuICAgIC8vIHdlIGRvbid0IHdhbnQgY29tbW9uIGh0bWwgdGFncyBzdWdnZXN0ZWQgZm9yIHhtbFxuICAgIGlmIChzeW50YXggPT09ICd4bWwnICYmIGNvbW1vbmx5VXNlZFRhZ3Muc29tZShmdW5jdGlvbiAodGFnKSB7IHJldHVybiB0YWcuc3RhcnRzV2l0aChhYmJyZXZpYXRpb24udG9Mb3dlckNhc2UoKSk7IH0pKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoY29tbW9ubHlVc2VkVGFncy5pbmNsdWRlcyhhYmJyZXZpYXRpb24udG9Mb3dlckNhc2UoKSkgfHwgbWFya3VwU25pcHBldEtleXMuaW5jbHVkZXMoYWJicmV2aWF0aW9uKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIEN1c3RvbSB0YWdzIGNhbiBoYXZlIC0gb3IgOlxuICAgIGlmICgvWy0sOl0vLnRlc3QoYWJicmV2aWF0aW9uKSAmJiAhLy0tfDo6Ly50ZXN0KGFiYnJldmlhdGlvbikgJiYgIWFiYnJldmlhdGlvbi5lbmRzV2l0aCgnOicpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gSXRzIGNvbW1vbiBmb3IgdXNlcnMgdG8gdHlwZSBzb21lIHRleHQgYW5kIGVuZCBpdCB3aXRoIHBlcmlvZCwgdGhpcyBzaG91bGQgbm90IGJlIHRyZWF0ZWQgYXMgYW4gYWJicmV2aWF0aW9uXG4gICAgLy8gRWxzZSBpdCBiZWNvbWVzIG5vaXNlLlxuICAgIC8vIFdoZW4gdXNlciBqdXN0IHR5cGVzICcuJywgcmV0dXJuIHRoZSBleHBhbnNpb25cbiAgICAvLyBPdGhlcndpc2UgZW1tZXQgbG9zZXMgY2hhbmdlIHRvIHBhcnRpY2lwYXRlIGxhdGVyXG4gICAgLy8gRm9yIGV4YW1wbGUgaW4gYC5mb29gLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC92c2NvZGUvaXNzdWVzLzY2MDEzXG4gICAgaWYgKGFiYnJldmlhdGlvbiA9PT0gJy4nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGRvdE1hdGNoZXMgPSBhYmJyZXZpYXRpb24ubWF0Y2goL14oW2EteixBLVosXFxkXSopXFwuJC8pO1xuICAgIGlmIChkb3RNYXRjaGVzKSB7XG4gICAgICAgIC8vIFZhbGlkIGh0bWwgdGFncyBzdWNoIGFzIGBkaXYuYFxuICAgICAgICBpZiAoZG90TWF0Y2hlc1sxXSAmJiBodG1sRGF0YS50YWdzLmluY2x1ZGVzKGRvdE1hdGNoZXNbMV0pKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8vIEZpeCBmb3IgaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC92c2NvZGUvaXNzdWVzLzg5NzQ2XG4gICAgLy8gUGFzY2FsQ2FzZSB0YWdzIGFyZSBjb21tb24gaW4ganN4IGNvZGUsIHdoaWNoIHNob3VsZCBub3QgYmUgdHJlYXRlZCBhcyBub2lzZS5cbiAgICAvLyBFZzogTXlBd2Vzb21Db21wb25lbnQgLT4gPE15QXdlc29tQ29tcG9uZW50PjwvTXlBd2Vzb21Db21wb25lbnQ+XG4gICAgaWYgKHN5bnRheCA9PT0gJ2pzeCcgJiYgL14oW0EtWl1bQS1aYS16MC05XSopKyQvLnRlc3QoYWJicmV2aWF0aW9uKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIFVucmVzb2x2ZWQgaHRtbCBhYmJyZXZpYXRpb25zIGdldCBleHBhbmRlZCBhcyBpZiBpdCB3ZXJlIGEgdGFnXG4gICAgLy8gRWc6IGFiYyAtPiA8YWJjPjwvYWJjPiB3aGljaCBpcyBub2lzZSBpZiBpdCBnZXRzIHN1Z2dlc3RlZCBmb3IgZXZlcnkgd29yZCB0eXBlZFxuICAgIHJldHVybiBleHBhbmRlZFRleHQudG9Mb3dlckNhc2UoKSA9PT0gXCI8XCIuY29uY2F0KGFiYnJldmlhdGlvbi50b0xvd2VyQ2FzZSgpLCBcIj4kezF9PC9cIikuY29uY2F0KGFiYnJldmlhdGlvbi50b0xvd2VyQ2FzZSgpLCBcIj5cIik7XG59XG4vKipcbiAqIFJldHVybnMgb3B0aW9ucyB0byBiZSB1c2VkIGJ5IGVtbWV0XG4gKi9cbmZ1bmN0aW9uIGdldEV4cGFuZE9wdGlvbnMoc3ludGF4LCBmaWx0ZXIpIHtcbiAgICB2YXIgdHlwZSA9IGdldFN5bnRheFR5cGUoc3ludGF4KTtcbiAgICB2YXIgZmlsdGVycyA9IGZpbHRlciA/IGZpbHRlci5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbiAoeCkgeyByZXR1cm4geC50cmltKCk7IH0pIDogW107XG4gICAgdmFyIGJlbUVuYWJsZWQgPSBmaWx0ZXJzLmluY2x1ZGVzKCdiZW0nKTtcbiAgICB2YXIgY29tbWVudEVuYWJsZWQgPSBmaWx0ZXJzLmluY2x1ZGVzKCdjJyk7XG4gICAgdmFyIGNvbWJpbmVkT3B0aW9ucyA9IHtcbiAgICAgICAgJ291dHB1dC5mb3JtYXRTa2lwJzogWydodG1sJ10sXG4gICAgICAgICdvdXRwdXQuZm9ybWF0Rm9yY2UnOiBbJ2JvZHknXSxcbiAgICAgICAgJ291dHB1dC5maWVsZCc6IGVtbWV0U25pcHBldEZpZWxkLFxuICAgICAgICAnb3V0cHV0LmlubGluZUJyZWFrJzogMCxcbiAgICAgICAgJ291dHB1dC5jb21wYWN0Qm9vbGVhbic6IGZhbHNlLFxuICAgICAgICAnb3V0cHV0LnJldmVyc2VBdHRyaWJ1dGVzJzogZmFsc2UsXG4gICAgICAgICdtYXJrdXAuaHJlZic6IHRydWUsXG4gICAgICAgICdjb21tZW50LmVuYWJsZWQnOiBjb21tZW50RW5hYmxlZCxcbiAgICAgICAgJ2NvbW1lbnQudHJpZ2dlcic6IFsnaWQnLCAnY2xhc3MnXSxcbiAgICAgICAgJ2NvbW1lbnQuYmVmb3JlJzogJycsXG4gICAgICAgICdjb21tZW50LmFmdGVyJzogJ1xcbjwhLS0gL1sjSURdWy5DTEFTU10gLS0+JyxcbiAgICAgICAgJ2JlbS5lbmFibGVkJzogYmVtRW5hYmxlZCxcbiAgICAgICAgJ2JlbS5lbGVtZW50JzogJ19fJyxcbiAgICAgICAgJ2JlbS5tb2RpZmllcic6ICdfJyxcbiAgICAgICAgJ2pzeC5lbmFibGVkJzogc3ludGF4ID09PSAnanN4JyxcbiAgICAgICAgJ3N0eWxlc2hlZXQuc2hvcnRIZXgnOiB0cnVlLFxuICAgICAgICAnc3R5bGVzaGVldC5iZXR3ZWVuJzogc3ludGF4ID09PSAnc3R5bHVzJyA/ICcgJyA6ICc6ICcsXG4gICAgICAgICdzdHlsZXNoZWV0LmFmdGVyJzogc3ludGF4ID09PSAnc2FzcycgfHwgc3ludGF4ID09PSAnc3R5bHVzJyA/ICcnIDogJzsnLFxuICAgICAgICAnc3R5bGVzaGVldC5pbnRVbml0JzogJ3B4JyxcbiAgICAgICAgJ3N0eWxlc2hlZXQuZmxvYXRVbml0JzogJ2VtJyxcbiAgICAgICAgJ3N0eWxlc2hlZXQudW5pdEFsaWFzZXMnOiB7XG4gICAgICAgICAgICBlOiAnZW0nLFxuICAgICAgICAgICAgcDogJyUnLFxuICAgICAgICAgICAgeDogJ2V4JyxcbiAgICAgICAgICAgIHI6ICdyZW0nLFxuICAgICAgICB9LFxuICAgICAgICAnc3R5bGVzaGVldC5mdXp6eVNlYXJjaE1pblNjb3JlJzogMC4zLFxuICAgICAgICAnb3V0cHV0LmZvcm1hdCc6IHRydWUsXG4gICAgICAgICdvdXRwdXQuc2VsZkNsb3NpbmdTdHlsZSc6ICdodG1sJyxcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIG9wdGlvbnM6IGNvbWJpbmVkT3B0aW9ucyxcbiAgICAgICAgdmFyaWFibGVzOiB7fSxcbiAgICAgICAgc25pcHBldHM6IHt9LFxuICAgICAgICBzeW50YXg6IHN5bnRheCxcbiAgICAgICAgLy8gY29udGV4dDogbnVsbCxcbiAgICAgICAgdGV4dDogdW5kZWZpbmVkLFxuICAgICAgICBtYXhSZXBlYXQ6IDEwMDAsXG4gICAgICAgIC8vIGNhY2hlOiBudWxsXG4gICAgfTtcbn1cbi8qKlxuICogRXhwYW5kcyBnaXZlbiBhYmJyZXZpYXRpb24gdXNpbmcgZ2l2ZW4gb3B0aW9uc1xuICogQHBhcmFtIGFiYnJldmlhdGlvbiBzdHJpbmcgb3IgcGFyc2VkIGFiYnJldmlhdGlvblxuICogQHBhcmFtIGNvbmZpZyBvcHRpb25zIHVzZWQgYnkgdGhlIEBlbW1ldGlvL2V4cGFuZC1hYmJyZXZpYXRpb24gbW9kdWxlIHRvIGV4cGFuZCBnaXZlbiBhYmJyZXZpYXRpb25cbiAqL1xuZnVuY3Rpb24gZXhwYW5kQWJicmV2aWF0aW9uKGFiYnJldmlhdGlvbiwgY29uZmlnKSB7XG4gICAgdmFyIGV4cGFuZGVkVGV4dDtcbiAgICB2YXIgcmVzb2x2ZWRDb25maWcgPSByZXNvbHZlQ29uZmlnKGNvbmZpZyk7XG4gICAgaWYgKGNvbmZpZy50eXBlID09PSAnc3R5bGVzaGVldCcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhYmJyZXZpYXRpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBleHBhbmRlZFRleHQgPSBleHBhbmRBYmJyZXZpYXRpb24kMShhYmJyZXZpYXRpb24sIHJlc29sdmVkQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGV4cGFuZGVkVGV4dCA9IGNzcyhhYmJyZXZpYXRpb24sIHJlc29sdmVkQ29uZmlnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhYmJyZXZpYXRpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBleHBhbmRlZFRleHQgPSBleHBhbmRBYmJyZXZpYXRpb24kMShhYmJyZXZpYXRpb24sIHJlc29sdmVkQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGV4cGFuZGVkVGV4dCA9IHN0cmluZ2lmeShhYmJyZXZpYXRpb24sIHJlc29sdmVkQ29uZmlnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZXNjYXBlTm9uVGFiU3RvcERvbGxhcihhZGRGaW5hbFRhYlN0b3AoZXhwYW5kZWRUZXh0KSk7XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbW1ldFRva2VuKHRva2VucywgaW5kZXgsIHN5bnRheCwgbGFuZ3VhZ2UpIHtcbiAgICB2YXIgY3VycmVudFRva2VuVHlwZSA9IHRva2Vuc1tpbmRleF0udHlwZTtcbiAgICBpZiAoc3ludGF4ID09PSAnaHRtbCcpIHtcbiAgICAgICAgLy8gcHJldmVudCBlbW1ldCB0cmlnZ2VyZWQgd2l0aGluIGF0dHJpYnV0ZXNcbiAgICAgICAgcmV0dXJuICgoY3VycmVudFRva2VuVHlwZSA9PT0gJycgJiYgKGluZGV4ID09PSAwIHx8IHRva2Vuc1tpbmRleCAtIDFdLnR5cGUgPT09ICdkZWxpbWl0ZXIuaHRtbCcpKSB8fFxuICAgICAgICAgICAgLy8gIzcgY29tcGF0aWJsZSB3aXRoIGh0dHBzOi8vZ2l0aHViLmNvbS9OZWVrU2FuZGh1L21vbmFjby10ZXh0bWF0ZVxuICAgICAgICAgICAgdG9rZW5zWzBdLnR5cGUgPT09ICd0ZXh0Lmh0bWwuYmFzaWMnKTtcbiAgICB9XG4gICAgaWYgKHN5bnRheCA9PT0gJ2NzcycpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRUb2tlblR5cGUgPT09ICcnKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIC8vIGxlc3MgLyBzY3NzIGFsbG93IG5lc3RpbmdcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRUb2tlblR5cGUgPT09ICd0YWcuJyArIGxhbmd1YWdlO1xuICAgIH1cbiAgICBpZiAoc3ludGF4ID09PSAnanN4Jykge1xuICAgICAgICAvLyB0eXBlIG11c3QgYmUgYGlkZW50aWZpZXJgIGFuZCBub3QgYXQgc3RhcnRcbiAgICAgICAgcmV0dXJuICghIWluZGV4ICYmXG4gICAgICAgICAgICBbJ2lkZW50aWZpZXIuanMnLCAndHlwZS5pZGVudGlmaWVyLmpzJywgJ2lkZW50aWZpZXIudHMnLCAndHlwZS5pZGVudGlmaWVyLnRzJ10uaW5jbHVkZXMoY3VycmVudFRva2VuVHlwZSkpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG4vLyB2c2NvZGUgZGlkIGEgY29tcGxleCBub2RlIGFuYWx5c2lzLCB3ZSBqdXN0IHVzZSBtb25hY28ncyBidWlsdC1pbiB0b2tlbml6ZXJcbi8vIHRvIGFjaGlldmUgYWxtb3N0IHRoZSBzYW1lIGVmZmVjdFxuZnVuY3Rpb24gaXNWYWxpZExvY2F0aW9uRm9yRW1tZXRBYmJyZXZpYXRpb24obW9kZWwsIHBvc2l0aW9uLCBzeW50YXgsIGxhbmd1YWdlKSB7XG4gICAgdmFyIGNvbHVtbiA9IHBvc2l0aW9uLmNvbHVtbiwgbGluZU51bWJlciA9IHBvc2l0aW9uLmxpbmVOdW1iZXI7XG4gICAgLy8gZ2V0IGN1cnJlbnQgbGluZSdzIHRva2Vuc1xuICAgIHZhciBfdG9rZW5pemF0aW9uID0gXG4gICAgLy8gbW9uYWNvLWVkaXRvciA8IDAuMzQuMFxuICAgIG1vZGVsLl90b2tlbml6YXRpb24gfHxcbiAgICAgICAgLy8gbW9uYWNvLWVkaXRvciA+PSAwLjM0LjBcbiAgICAgICAgbW9kZWwudG9rZW5pemF0aW9uLl90b2tlbml6YXRpb247XG4gICAgdmFyIF90b2tlbml6YXRpb25TdGF0ZVN0b3JlID0gX3Rva2VuaXphdGlvbi5fdG9rZW5pemF0aW9uU3RhdGVTdG9yZTtcbiAgICB2YXIgX3Rva2VuaXphdGlvblN1cHBvcnQgPSBcbiAgICAvLyBtb25hY28tZWRpdG9yID49IDAuMzIuMFxuICAgIF90b2tlbml6YXRpb25TdGF0ZVN0b3JlLnRva2VuaXphdGlvblN1cHBvcnQgfHxcbiAgICAgICAgLy8gbW9uYWNvLWVkaXRvciA8IDAuMzIuMFxuICAgICAgICBfdG9rZW5pemF0aW9uLl90b2tlbml6YXRpb25TdXBwb3J0O1xuICAgIHZhciBzdGF0ZSA9IF90b2tlbml6YXRpb25TdGF0ZVN0b3JlLmdldEJlZ2luU3RhdGUobGluZU51bWJlciAtIDEpLmNsb25lKCk7XG4gICAgdmFyIHRva2VuaXphdGlvblJlc3VsdCA9IF90b2tlbml6YXRpb25TdXBwb3J0LnRva2VuaXplKG1vZGVsLmdldExpbmVDb250ZW50KGxpbmVOdW1iZXIpLCB0cnVlLCBzdGF0ZSwgMCk7XG4gICAgdmFyIHRva2VucyA9IHRva2VuaXphdGlvblJlc3VsdC50b2tlbnM7XG4gICAgdmFyIHZhbGlkID0gZmFsc2U7XG4gICAgLy8gZ2V0IHRva2VuIHR5cGUgYXQgY3VycmVudCBjb2x1bW5cbiAgICBmb3IgKHZhciBpID0gdG9rZW5zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGlmIChjb2x1bW4gLSAxID4gdG9rZW5zW2ldLm9mZnNldCkge1xuICAgICAgICAgICAgdmFsaWQgPSBpc1ZhbGlkRW1tZXRUb2tlbih0b2tlbnMsIGksIHN5bnRheCwgbGFuZ3VhZ2UpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbGlkO1xufVxuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L3ZzY29kZS9ibG9iL21haW4vZXh0ZW5zaW9ucy9lbW1ldC9zcmMvdXRpbC50cyNMODZcbnZhciBMQU5HVUFHRV9NT0RFUyA9IHtcbiAgICBodG1sOiBbJyEnLCAnLicsICd9JywgJzonLCAnKicsICckJywgJ10nLCAnLycsICc+JywgJzAnLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknXSxcbiAgICBqYWRlOiBbJyEnLCAnLicsICd9JywgJzonLCAnKicsICckJywgJ10nLCAnLycsICc+JywgJzAnLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknXSxcbiAgICBzbGltOiBbJyEnLCAnLicsICd9JywgJzonLCAnKicsICckJywgJ10nLCAnLycsICc+JywgJzAnLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknXSxcbiAgICBoYW1sOiBbJyEnLCAnLicsICd9JywgJzonLCAnKicsICckJywgJ10nLCAnLycsICc+JywgJzAnLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknXSxcbiAgICB4bWw6IFsnLicsICd9JywgJyonLCAnJCcsICddJywgJy8nLCAnPicsICcwJywgJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5J10sXG4gICAgeHNsOiBbJyEnLCAnLicsICd9JywgJyonLCAnJCcsICcvJywgJ10nLCAnPicsICcwJywgJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5J10sXG4gICAgY3NzOiBbJzonLCAnIScsICctJywgJzAnLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknXSxcbiAgICBzY3NzOiBbJzonLCAnIScsICctJywgJzAnLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknXSxcbiAgICBzYXNzOiBbJzonLCAnIScsICcwJywgJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5J10sXG4gICAgbGVzczogWyc6JywgJyEnLCAnLScsICcwJywgJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5J10sXG4gICAgc3R5bHVzOiBbJzonLCAnIScsICcwJywgJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5J10sXG4gICAgamF2YXNjcmlwdDogWychJywgJy4nLCAnfScsICcqJywgJyQnLCAnXScsICcvJywgJz4nLCAnMCcsICcxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOSddLFxuICAgIHR5cGVzY3JpcHQ6IFsnIScsICcuJywgJ30nLCAnKicsICckJywgJ10nLCAnLycsICc+JywgJzAnLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknXSxcbn07XG4vLyBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L3ZzY29kZS9ibG9iL21haW4vZXh0ZW5zaW9ucy9lbW1ldC9zcmMvdXRpbC50cyNMMTI0XG52YXIgTUFQUEVEX01PREVTID0ge1xuICAgIGhhbmRsZWJhcnM6ICdodG1sJyxcbiAgICBwaHA6ICdodG1sJyxcbiAgICB0d2lnOiAnaHRtbCcsXG59O1xudmFyIERFRkFVTFRfQ09ORklHID0ge1xuICAgIHNob3dFeHBhbmRlZEFiYnJldmlhdGlvbjogJ2Fsd2F5cycsXG4gICAgc2hvd0FiYnJldmlhdGlvblN1Z2dlc3Rpb25zOiB0cnVlLFxuICAgIHNob3dTdWdnZXN0aW9uc0FzU25pcHBldHM6IGZhbHNlLFxufTtcbi8qKlxuICogYWRkIGNvbXBsZXRpb24gcHJvdmlkZXJcbiAqIEBwYXJhbSBtb25hY28gbW9uYWNvIHNlbGZcbiAqIEBwYXJhbSBsYW5ndWFnZSBhZGRlZCBsYW5ndWFnZVxuICogQHBhcmFtIGlzTWFya3VwIGlzIG1hcmt1cCBsYW5ndWFnZVxuICogQHBhcmFtIGlzTGVnYWxUb2tlbiBjaGVjayB3aGV0aGVyIGdpdmVuIHRva2VuIGlzIGxlZ2FsIG9yIG5vdFxuICogQHBhcmFtIGdldExlZ2FsRW1tZXRTZXRzIGdldCBsZWdhbCBlbW1ldCBzdWJzdHJpbmcgZnJvbSBhIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gcmVnaXN0ZXJQcm92aWRlcihtb25hY28sIGxhbmd1YWdlcywgc3ludGF4KSB7XG4gICAgaWYgKCFtb25hY28pIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcImVtbWV0LW1vbmFjby1lczogJ21vbmFjbycgc2hvdWxkIGJlIGVpdGhlciBkZWNsYXJlZCBvbiB3aW5kb3cgb3IgcGFzc2VkIGFzIGZpcnN0IHBhcmFtZXRlclwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgcHJvdmlkZXJzID0gbGFuZ3VhZ2VzLm1hcChmdW5jdGlvbiAobGFuZ3VhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG1vbmFjby5sYW5ndWFnZXMucmVnaXN0ZXJDb21wbGV0aW9uSXRlbVByb3ZpZGVyKGxhbmd1YWdlLCB7XG4gICAgICAgICAgICB0cmlnZ2VyQ2hhcmFjdGVyczogTEFOR1VBR0VfTU9ERVNbTUFQUEVEX01PREVTW2xhbmd1YWdlXSB8fCBsYW5ndWFnZV0sXG4gICAgICAgICAgICBwcm92aWRlQ29tcGxldGlvbkl0ZW1zOiBmdW5jdGlvbiAobW9kZWwsIHBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzVmFsaWRMb2NhdGlvbkZvckVtbWV0QWJicmV2aWF0aW9uKG1vZGVsLCBwb3NpdGlvbiwgc3ludGF4LCBsYW5ndWFnZSlcbiAgICAgICAgICAgICAgICAgICAgPyBkb0NvbXBsZXRlKG1vbmFjbywgbW9kZWwsIHBvc2l0aW9uLCBzeW50YXgsIERFRkFVTFRfQ09ORklHKVxuICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHByb3ZpZGVycy5mb3JFYWNoKGZ1bmN0aW9uIChwcm92aWRlcikgeyByZXR1cm4gcHJvdmlkZXIuZGlzcG9zZSgpOyB9KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gZW1tZXRIVE1MKG1vbmFjbywgbGFuZ3VhZ2VzKSB7XG4gICAgaWYgKG1vbmFjbyA9PT0gdm9pZCAwKSB7IG1vbmFjbyA9IHdpbmRvdy5tb25hY287IH1cbiAgICBpZiAobGFuZ3VhZ2VzID09PSB2b2lkIDApIHsgbGFuZ3VhZ2VzID0gWydodG1sJ107IH1cbiAgICByZXR1cm4gcmVnaXN0ZXJQcm92aWRlcihtb25hY28sIGxhbmd1YWdlcywgJ2h0bWwnKTtcbn1cbmZ1bmN0aW9uIGVtbWV0Q1NTKG1vbmFjbywgbGFuZ3VhZ2VzKSB7XG4gICAgaWYgKG1vbmFjbyA9PT0gdm9pZCAwKSB7IG1vbmFjbyA9IHdpbmRvdy5tb25hY287IH1cbiAgICBpZiAobGFuZ3VhZ2VzID09PSB2b2lkIDApIHsgbGFuZ3VhZ2VzID0gWydjc3MnXTsgfVxuICAgIHJldHVybiByZWdpc3RlclByb3ZpZGVyKG1vbmFjbywgbGFuZ3VhZ2VzLCAnY3NzJyk7XG59XG5mdW5jdGlvbiBlbW1ldEpTWChtb25hY28sIGxhbmd1YWdlcykge1xuICAgIGlmIChtb25hY28gPT09IHZvaWQgMCkgeyBtb25hY28gPSB3aW5kb3cubW9uYWNvOyB9XG4gICAgaWYgKGxhbmd1YWdlcyA9PT0gdm9pZCAwKSB7IGxhbmd1YWdlcyA9IFsnamF2YXNjcmlwdCddOyB9XG4gICAgcmV0dXJuIHJlZ2lzdGVyUHJvdmlkZXIobW9uYWNvLCBsYW5ndWFnZXMsICdqc3gnKTtcbn1cblxuZXhwb3J0IHsgZW1tZXRDU1MsIGVtbWV0SFRNTCwgZW1tZXRKU1gsIGV4cGFuZEFiYnJldmlhdGlvbiB9O1xuIl0sInNvdXJjZVJvb3QiOiIvcHJvamVjdC9vdXQifQ==