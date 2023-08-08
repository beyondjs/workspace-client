define([], () => {

const bimport = specifier => {
	const dependencies = new Map([["emmet-monaco-es","5.2.0"]]);
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
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/emmet-monaco-es.5.2.0.js
var emmet_monaco_es_5_2_0_exports = {};
__export(emmet_monaco_es_5_2_0_exports, {
  emmetCSS: () => emmetCSS,
  emmetHTML: () => emmetHTML,
  emmetJSX: () => emmetJSX,
  expandAbbreviation: () => expandAbbreviation
});
module.exports = __toCommonJS(emmet_monaco_es_5_2_0_exports);

// node_modules/emmet-monaco-es/dist/emmet-monaco.esm.js
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
var commonlyUsedTags = [...htmlData.tags, "lorem"];
var bemFilterSuffix = "bem";
var filterDelimitor = "|";
var trimFilterSuffix = "t";
var commentFilterSuffix = "c";
var maxFilters = 3;
function doComplete(monaco, model, position, syntax, emmetConfig) {
  var _a;
  const isStyleSheetRes = isStyleSheet(syntax);
  if (!isStyleSheetRes) {
    if (!snippetKeyCache.has(syntax)) {
      const registry = getDefaultSnippets(syntax);
      snippetKeyCache.set(syntax, Object.keys(registry));
    }
    markupSnippetKeys = (_a = snippetKeyCache.get(syntax)) !== null && _a !== void 0 ? _a : [];
  }
  const extractOptions = {
    lookAhead: !isStyleSheetRes,
    type: getSyntaxType(syntax)
  };
  const extractedValue = extractAbbreviation(monaco, model, position, extractOptions);
  if (!extractedValue) return;
  const {
    abbreviationRange,
    abbreviation: abbreviation2,
    currentLineTillPosition,
    filter
  } = extractedValue;
  const currentWord = getCurrentWord(currentLineTillPosition);
  if (currentWord === abbreviation2 && currentLineTillPosition.endsWith(`<${abbreviation2}`) && !isStyleSheetRes) {
    return;
  }
  const expandOptions = getExpandOptions(syntax, filter);
  let expandedText = "";
  let expandedAbbr;
  let completionItems = [];
  const createExpandedAbbr = (syntax2, abbr) => {
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
    if (abbreviation2.length > 4 && cssData.properties.some(x => x.startsWith(abbreviation2))) {
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
      const stylesheetCustomSnippetsKeys = stylesheetCustomSnippetsKeyCache.has(syntax) ? stylesheetCustomSnippetsKeyCache.get(syntax) : stylesheetCustomSnippetsKeyCache.get("css");
      completionItems = makeSnippetSuggestion(monaco, stylesheetCustomSnippetsKeys !== null && stylesheetCustomSnippetsKeys !== void 0 ? stylesheetCustomSnippetsKeys : [], abbreviation2, abbreviation2, abbreviationRange, expandOptions, "Emmet Custom Snippet", false);
      if (!completionItems.find(x => x.insertText === (expandedAbbr === null || expandedAbbr === void 0 ? void 0 : expandedAbbr.insertText))) {
        const abbrRegex = new RegExp(".*" + abbreviation2.split("").map(x => x === "$" || x === "+" ? "\\" + x : x).join(".*") + ".*", "i");
        if (/\d/.test(abbreviation2) || abbrRegex.test(expandedAbbr.label)) {
          completionItems.push(expandedAbbr);
        }
      }
    }
  } else {
    let tagToFindMoreSuggestionsFor = abbreviation2;
    const newTagMatches = abbreviation2.match(/(>|\+)([\w:-]+)$/);
    if (newTagMatches && newTagMatches.length === 3) {
      tagToFindMoreSuggestionsFor = newTagMatches[2];
    }
    if (syntax !== "xml") {
      const commonlyUsedTagSuggestions = makeSnippetSuggestion(monaco, commonlyUsedTags, tagToFindMoreSuggestionsFor, abbreviation2, abbreviationRange, expandOptions, "Emmet Abbreviation");
      completionItems = completionItems.concat(commonlyUsedTagSuggestions);
    }
    if (emmetConfig.showAbbreviationSuggestions === true) {
      const abbreviationSuggestions = makeSnippetSuggestion(monaco, markupSnippetKeys.filter(x => !commonlyUsedTags.includes(x)), tagToFindMoreSuggestionsFor, abbreviation2, abbreviationRange, expandOptions, "Emmet Abbreviation");
      if (expandedAbbr && abbreviationSuggestions.length > 0 && tagToFindMoreSuggestionsFor !== abbreviation2) {
        expandedAbbr.sortText = "0" + expandedAbbr.label;
        abbreviationSuggestions.forEach(item => {
          item.filterText = abbreviation2;
          item.sortText = "9" + abbreviation2;
        });
      }
      completionItems = completionItems.concat(abbreviationSuggestions);
    }
    if (syntax === "html" && completionItems.length >= 2 && abbreviation2.includes(":") && (expandedAbbr === null || expandedAbbr === void 0 ? void 0 : expandedAbbr.insertText) === `<${abbreviation2}>\${0}</${abbreviation2}>`) {
      completionItems = completionItems.filter(item => item.label !== abbreviation2);
    }
  }
  if (emmetConfig.showSuggestionsAsSnippets === true) {
    completionItems.forEach(x => x.kind = monaco.languages.CompletionItemKind.Snippet);
  }
  return completionItems.length ? {
    suggestions: completionItems,
    incomplete: true
  } : void 0;
}
function makeSnippetSuggestion(monaco, snippetKeys, prefix, abbreviation2, abbreviationRange, expandOptions, snippetDetail, skipFullMatch = true) {
  if (!prefix || !snippetKeys) {
    return [];
  }
  const snippetCompletions = [];
  snippetKeys.forEach(snippetKey => {
    if (!snippetKey.startsWith(prefix.toLowerCase()) || skipFullMatch && snippetKey === prefix.toLowerCase()) {
      return;
    }
    const currentAbbr = abbreviation2 + snippetKey.substr(prefix.length);
    let expandedAbbr;
    try {
      expandedAbbr = expandAbbreviation$1(currentAbbr, expandOptions);
    } catch (e) {}
    if (!expandedAbbr) {
      return;
    }
    const item = {
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
    const matches = currentLineTillPosition.match(/[\w,:,-,\.]*$/);
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
  let maxTabStop = -1;
  let maxTabStopRanges = [];
  let foundLastStop = false;
  let replaceWithLastStop = false;
  let i = 0;
  const n = text2.length;
  try {
    while (i < n && !foundLastStop) {
      if (text2[i++] != "$" || text2[i++] != "{") {
        continue;
      }
      let numberStart = -1;
      let numberEnd = -1;
      while (i < n && /\d/.test(text2[i])) {
        numberStart = numberStart < 0 ? i : numberStart;
        numberEnd = i + 1;
        i++;
      }
      if (numberStart === -1 || numberEnd === -1 || i >= n || text2[i] != "}" && text2[i] != ":") {
        continue;
      }
      const currentTabStop = text2.substring(numberStart, numberEnd);
      foundLastStop = currentTabStop === "0";
      if (foundLastStop) {
        break;
      }
      let foundPlaceholder = false;
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
    for (let i2 = 0; i2 < maxTabStopRanges.length; i2++) {
      const rangeStart = maxTabStopRanges[i2].numberStart;
      const rangeEnd = maxTabStopRanges[i2].numberEnd;
      text2 = text2.substr(0, rangeStart) + "0" + text2.substr(rangeEnd);
    }
  }
  return text2;
}
var emmetSnippetField = (index, placeholder) => `\${${index}${placeholder ? ":" + placeholder : ""}}`;
function isStyleSheet(syntax) {
  return syntax === "css";
}
function getSyntaxType(syntax) {
  return isStyleSheet(syntax) ? "stylesheet" : "markup";
}
function getDefaultSnippets(syntax) {
  const syntaxType = getSyntaxType(syntax);
  const emptyUserConfig = {
    type: syntaxType,
    syntax
  };
  const resolvedConfig = resolveConfig(emptyUserConfig);
  return syntax === "xml" ? {} : resolvedConfig.snippets;
}
function getFilters(text2, pos) {
  let filter;
  for (let i = 0; i < maxFilters; i++) {
    if (text2.endsWith(`${filterDelimitor}${bemFilterSuffix}`, pos)) {
      pos -= bemFilterSuffix.length + 1;
      filter = filter ? bemFilterSuffix + "," + filter : bemFilterSuffix;
    } else if (text2.endsWith(`${filterDelimitor}${commentFilterSuffix}`, pos)) {
      pos -= commentFilterSuffix.length + 1;
      filter = filter ? commentFilterSuffix + "," + filter : commentFilterSuffix;
    } else if (text2.endsWith(`${filterDelimitor}${trimFilterSuffix}`, pos)) {
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
  const currentLine = model.getLineContent(position.lineNumber);
  const currentLineTillPosition = currentLine.substr(0, position.column - 1);
  const {
    pos,
    filter
  } = getFilters(currentLineTillPosition, position.column - 1);
  const lengthOccupiedByFilter = filter ? filter.length + 1 : 0;
  const result = extractAbbreviation$1(currentLine, pos, options);
  if (!result) return;
  const rangeToReplace = new monaco.Range(position.lineNumber, result.location + 1, position.lineNumber, result.location + result.abbreviation.length + lengthOccupiedByFilter + 1);
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
        const hexColorRegex = /^#[\d,a-f,A-F]{1,6}$/;
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
    const between = (_a = options["stylesheet.between"]) !== null && _a !== void 0 ? _a : ": ";
    const after = (_b = options["stylesheet.after"]) !== null && _b !== void 0 ? _b : ";";
    let endPrefixIndex = abbreviation2.indexOf(between[0], Math.max(abbreviation2.length - between.length, 0));
    endPrefixIndex = endPrefixIndex >= 0 ? endPrefixIndex : abbreviation2.length;
    const abbr = abbreviation2.substring(0, endPrefixIndex);
    return expandedText === `${abbr}${between}\${0}${after}` || expandedText.replace(/\s/g, "") === abbreviation2.replace(/\s/g, "") + after;
  }
  if (syntax === "xml" && commonlyUsedTags.some(tag => tag.startsWith(abbreviation2.toLowerCase()))) {
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
  const dotMatches = abbreviation2.match(/^([a-z,A-Z,\d]*)\.$/);
  if (dotMatches) {
    if (dotMatches[1] && htmlData.tags.includes(dotMatches[1])) {
      return false;
    }
    return true;
  }
  if (syntax === "jsx" && /^([A-Z][A-Za-z0-9]*)+$/.test(abbreviation2)) {
    return false;
  }
  return expandedText.toLowerCase() === `<${abbreviation2.toLowerCase()}>\${1}</${abbreviation2.toLowerCase()}>`;
}
function getExpandOptions(syntax, filter) {
  const type = getSyntaxType(syntax);
  const filters = filter ? filter.split(",").map(x => x.trim()) : [];
  const bemEnabled = filters.includes("bem");
  const commentEnabled = filters.includes("c");
  const combinedOptions = {
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
  let expandedText;
  const resolvedConfig = resolveConfig(config);
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
  const currentTokenType = tokens[index].type;
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
  const {
    column,
    lineNumber
  } = position;
  const _tokenization = model._tokenization || model.tokenization._tokenization || model.tokenization.m;
  const _tokenizationStateStore = _tokenization._tokenizationStateStore || _tokenization.a;
  const _tokenizationSupport = _tokenizationStateStore.tokenizationSupport || _tokenization._tokenizationSupport;
  const state = _tokenizationStateStore.getBeginState(lineNumber - 1).clone();
  const tokenizationResult = _tokenizationSupport.tokenize(model.getLineContent(lineNumber), true, state, 0);
  const tokens = tokenizationResult.tokens;
  let valid = false;
  for (let i = tokens.length - 1; i >= 0; i--) {
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
  const providers = languages.map(language => monaco.languages.registerCompletionItemProvider(language, {
    triggerCharacters: LANGUAGE_MODES[MAPPED_MODES[language] || language],
    provideCompletionItems: (model, position) => isValidLocationForEmmetAbbreviation(model, position, syntax, language) ? doComplete(monaco, model, position, syntax, DEFAULT_CONFIG) : void 0
  }));
  return () => {
    providers.forEach(provider => provider.dispose());
  };
}
function emmetHTML(monaco = window.monaco, languages = ["html"]) {
  return registerProvider(monaco, languages, "html");
}
function emmetCSS(monaco = window.monaco, languages = ["css"]) {
  return registerProvider(monaco, languages, "css");
}
function emmetJSX(monaco = window.monaco, languages = ["javascript"]) {
  return registerProvider(monaco, languages, "jsx");
}
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9lbW1ldC1tb25hY28tZXMuNS4yLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvZW1tZXQtbW9uYWNvLWVzL2Rpc3QvZW1tZXQtbW9uYWNvLmVzbS5qcyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsImVtbWV0Q1NTIiwiZW1tZXRIVE1MIiwiZW1tZXRKU1giLCJleHBhbmRBYmJyZXZpYXRpb24iLCJtb2R1bGUiLCJpc051bWJlciQxIiwiY29kZSIsImlzQWxwaGEkMSIsImZyb20iLCJ0byIsImlzQWxwaGFOdW1lcmljV29yZCIsImlzQWxwaGFXb3JkIiwiaXNXaGl0ZVNwYWNlJDMiLCJpc1NwYWNlIiwiaXNRdW90ZSQyIiwiU2Nhbm5lciIsImNvbnN0cnVjdG9yIiwic3RyIiwic3RhcnQiLCJlbmQiLCJsZW5ndGgiLCJzdHJpbmciLCJwb3MiLCJlb2YiLCJsaW1pdCIsInBlZWsiLCJjaGFyQ29kZUF0IiwibmV4dCIsImVhdCIsIm1hdGNoIiwiY2giLCJvayIsImVhdFdoaWxlIiwiYmFja1VwIiwibiIsImN1cnJlbnQiLCJzdWJzdHJpbmciLCJzbGljZSIsImVycm9yIiwibWVzc2FnZSIsIlNjYW5uZXJFcnJvciIsIkVycm9yIiwidG9rZW5TY2FubmVyJDEiLCJ0b2tlbnMiLCJzaXplIiwicGVlayQzIiwic2Nhbm5lciIsInJlYWRhYmxlJDEiLCJjb25zdW1lJDIiLCJ0ZXN0IiwidG9rZW4iLCJlcnJvciQxIiwiZXJyIiwiYWJicmV2aWF0aW9uIiwiYWJiciIsIm9wdGlvbnMiLCJyZXN1bHQiLCJzdGF0ZW1lbnRzIiwidHlwZSIsImVsZW1lbnRzIiwiY3R4Iiwibm9kZSIsInN0YWNrIiwiZWxlbWVudCQyIiwiZ3JvdXAiLCJwdXNoIiwiaXNDaGlsZE9wZXJhdG9yIiwiaXNTaWJsaW5nT3BlcmF0b3IkMSIsImlzQ2xpbWJPcGVyYXRvciIsInBvcCIsImlzR3JvdXBTdGFydCIsImlzQnJhY2tldCQyIiwicmVwZWF0IiwicmVwZWF0ZXIiLCJhdHRyIiwiZWxlbSIsIm5hbWUiLCJhdHRyaWJ1dGVzIiwidmFsdWUiLCJzZWxmQ2xvc2UiLCJlbGVtZW50TmFtZSIsImlzRW1wdHkiLCJpc1JlcGVhdGVyIiwidGV4dCIsImdldFRleHQiLCJzaG9ydEF0dHJpYnV0ZSIsImF0dHJpYnV0ZVNldCIsIkFycmF5IiwiaXNBcnJheSIsImNvbmNhdCIsImlzQ2xvc2VPcGVyYXRvciIsImlzQXR0cmlidXRlU2V0U3RhcnQiLCJhdHRyaWJ1dGUiLCJpc0F0dHJpYnV0ZVNldEVuZCIsImlzV2hpdGVTcGFjZSQyIiwiaXNPcGVyYXRvciQxIiwiY3JlYXRlTGl0ZXJhbCQxIiwianN4IiwiZXhwcmVzc2lvbiIsImxpdGVyYWwkMiIsInF1b3RlZCIsImlzRXF1YWxzIiwicXVvdGUiLCJpc1F1b3RlJDEiLCJzaW5nbGUiLCJhbGxvd0JyYWNrZXRzIiwiYnJhY2tldHMiLCJjb250ZXh0Iiwib3BlbiIsImlzQ2FwaXRhbGl6ZWRMaXRlcmFsIiwiaXNDbGFzc05hbWVPcGVyYXRvciIsImlzRWxlbWVudE5hbWUiLCJpc1RleHRTdGFydCIsImlzT3BlbiIsIkJvb2xlYW4iLCJvcGVyYXRvciIsImlzU2luZ2xlIiwiaXNMaXRlcmFsJDIiLCJlc2NhcGVkIiwidG9rZW5pemUkMSIsInNvdXJjZSIsImdldFRva2VuJDEiLCJmaWVsZCQyIiwicmVwZWF0ZXJQbGFjZWhvbGRlciIsInJlcGVhdGVyTnVtYmVyIiwicmVwZWF0ZXIkMSIsIndoaXRlU3BhY2UkMSIsImxpdGVyYWwkMSQxIiwib3BlcmF0b3IkMSIsImJyYWNrZXQkMSIsImlzQWxsb3dlZE9wZXJhdG9yIiwiaXNFbGVtZW50TmFtZSQxIiwiaXNBbGxvd2VkU3BhY2UiLCJpc0FsbG93ZWRSZXBlYXRlciIsImJyYWNrZXRUeXBlIiwiaXNPcGVuQnJhY2tldCQyIiwib3AiLCJvcGVyYXRvclR5cGUkMSIsImNvdW50IiwiaW1wbGljaXQiLCJOdW1iZXIiLCJyZXZlcnNlIiwiYmFzZSIsInBhcmVudCIsImluZGV4IiwiY29uc3VtZVBsYWNlaG9sZGVyJDIiLCJzdHJlYW0iLCJvcGVyYXRvcnMiLCJjaGlsZCIsImNsYXNzIiwiY2xpbWIiLCJpZCIsImVxdWFsIiwiY2xvc2UiLCJzaWJsaW5nIiwidG9rZW5WaXNpdG9yIiwiTGl0ZXJhbCIsIlF1b3RlIiwiQnJhY2tldCIsIk9wZXJhdG9yIiwiRmllbGQiLCJzdGF0ZSIsImdldFZhcmlhYmxlIiwiUmVwZWF0ZXJQbGFjZWhvbGRlciIsImkiLCJyZXBlYXRlcnMiLCJpbnNlcnRlZCIsIlJlcGVhdGVyTnVtYmVyIiwibGFzdEl4IiwicGFyZW50SXgiLCJNYXRoIiwibWF4IiwicGFyZW50UmVwZWF0ZXIiLCJTdHJpbmciLCJXaGl0ZVNwYWNlIiwic3RyaW5naWZ5JDEiLCJ1cmxSZWdleCIsImVtYWlsUmVnZXgiLCJjb252ZXJ0IiwidGV4dEluc2VydGVkIiwiY2xlYW5UZXh0IiwiZmlsdGVyIiwicyIsInRyaW0iLCJjaGlsZHJlbiIsImNvbnZlcnRHcm91cCIsInJlcGVhdEd1YXJkIiwibWF4UmVwZWF0IiwiUE9TSVRJVkVfSU5GSU5JVFkiLCJfYSIsImpvaW4iLCJ2YXJWYWx1ZSIsInZhcmlhYmxlcyIsImRlZXBlc3QiLCJkZWVwZXN0Tm9kZSIsImxhc3QkMSIsImluc2VydFRleHQiLCJocmVmIiwiaW5zZXJ0SHJlZiIsImNvbnZlcnRTdGF0ZW1lbnQiLCJvcmlnaW5hbCIsIk9iamVjdCIsImFzc2lnbiIsIml0ZW1zIiwiaXNHcm91cCIsImNvbnZlcnRFbGVtZW50IiwidGFyZ2V0Iiwic3RyaW5naWZ5TmFtZSIsInN0cmluZ2lmeVZhbHVlJDEiLCJzZWxmQ2xvc2luZyIsImNvbnZlcnRBdHRyaWJ1dGUiLCJzb21lIiwiaXNGaWVsZCQxIiwiYXR0YWNoUmVwZWF0ZXIiLCJpbXBsaWVkIiwiaXNCb29sZWFuIiwidmFsdWVUeXBlIiwic2hpZnQiLCJib29sZWFuIiwiYXJyIiwibGFzdFRva2VuIiwic3RhcnRzV2l0aCIsImhyZWZBdHRyaWJ1dGUiLCJmaW5kIiwiaXRlbSIsInBhcnNlQWJicmV2aWF0aW9uIiwidG9rZW5pemUiLCJpc1ZhbHVlIiwiZ2V0VG9rZW4iLCJtZXJnZVRva2VucyIsInNob3VsZENvbnN1bWVEYXNoQWZ0ZXIiLCJzaG9ydCIsImZpZWxkJDEiLCJudW1iZXJWYWx1ZSIsImNvbG9yVmFsdWUiLCJzdHJpbmdWYWx1ZSIsImJyYWNrZXQiLCJ3aGl0ZVNwYWNlIiwibGl0ZXJhbCQxIiwiY29uc3VtZVBsYWNlaG9sZGVyJDEiLCJpc0lkZW50UHJlZml4IiwiaXNLZXl3b3JkIiwiaXNMaXRlcmFsIiwiY3JlYXRlTGl0ZXJhbCIsImNvbnN1bWVOdW1iZXIiLCJyYXdWYWx1ZSIsInVuaXQiLCJmaW5pc2hlZCIsInZhbHVlU3RhcnQiLCJjb2xvciIsImFscGhhIiwiaXNIZXgiLCJjb2xvckFscGhhIiwiciIsImciLCJiIiwiYSIsInBhcnNlQ29sb3IiLCJyYXciLCJpc0JyYWNrZXQiLCJvcGVyYXRvclR5cGUiLCJhZnRlck5lZ2F0aXZlIiwiaGFzRGVjaW1hbCIsInByZXZQb3MiLCJoYXNGbG9hdCIsInBhcnNlSW50IiwibGFzdCIsInRva2VuU2Nhbm5lciIsInBlZWskMiIsInJlYWRhYmxlIiwiY29uc3VtZSQxIiwicGFyc2VyIiwicHJvcGVydHkiLCJjb25zdW1lUHJvcGVydHkiLCJpc1NpYmxpbmdPcGVyYXRvciIsImltcG9ydGFudCIsInZhbHVlRnJhZ21lbnQiLCJ2YWx1ZU1vZGUiLCJpc0xpdGVyYWwkMSIsImlzRnVuY3Rpb25TdGFydCIsImlzVmFsdWVEZWxpbWl0ZXIiLCJpc1doaXRlU3BhY2UkMSIsImlzSW1wb3J0YW50IiwiY29uc3VtZVZhbHVlIiwiaXNGcmFnbWVudERlbGltaXRlciIsImluQXJndW1lbnQiLCJhcmdzIiwiY29uc3VtZUFyZ3VtZW50cyIsImFyZ3VtZW50cyIsImlzT3BlbkJyYWNrZXQkMSIsImlzQ2xvc2VCcmFja2V0JDEiLCJpc0FyZ3VtZW50RGVsaW1pdGVyIiwiaXNCcmFja2V0JDEiLCJpc09wZXJhdG9yIiwidDEiLCJ0MiIsInBhcnNlJDIiLCJtZXJnZUF0dHJpYnV0ZXMiLCJjb25maWciLCJsb29rdXAiLCJhdHRyTmFtZSIsInByZXYiLCJtZXJnZVZhbHVlIiwibWVyZ2VEZWNsYXJhdGlvbnMiLCJnbHVlIiwiYXBwZW5kIiwidCIsImRlc3QiLCJzcmMiLCJ3YWxrIiwiZm4iLCJhbmNlc3RvcnMiLCJjYWxsYmFjayIsImZvckVhY2giLCJmaW5kRGVlcGVzdCIsImlzTm9kZSIsInJlc29sdmVTbmlwcGV0cyIsInJldmVyc2VkIiwicmVzb2x2ZSIsInNuaXBwZXQiLCJzbmlwcGV0cyIsImluY2x1ZGVzIiwic25pcHBldEFiYnIiLCJ3YWxrUmVzb2x2ZSIsInRvcE5vZGUiLCJtZXJnZU5vZGVzIiwicmVzb2x2ZWQiLCJjcmVhdGVPdXRwdXRTdHJlYW0iLCJsZXZlbCIsIm9mZnNldCIsImxpbmUiLCJjb2x1bW4iLCJwcm9jZXNzVGV4dCIsIl9wdXNoIiwicHVzaFN0cmluZyIsImxpbmVzIiwic3BsaXRCeUxpbmVzIiwiaWwiLCJwdXNoTmV3bGluZSIsImluZGVudCIsImJhc2VJbmRlbnQiLCJuZXdsaW5lIiwicHVzaEluZGVudCIsInB1c2hGaWVsZCIsInBsYWNlaG9sZGVyIiwiZmllbGQiLCJ0YWdOYW1lIiwic3RyQ2FzZSIsImF0dHJRdW90ZSIsImlzQm9vbGVhbkF0dHJpYnV0ZSIsInRvTG93ZXJDYXNlIiwiaXNJbmxpbmUiLCJpbmxpbmVFbGVtZW50cyIsInNwbGl0IiwidG9VcHBlckNhc2UiLCJlbGVtZW50TWFwIiwicCIsInVsIiwib2wiLCJ0YWJsZSIsInRyIiwidGJvZHkiLCJ0aGVhZCIsInRmb290IiwiY29sZ3JvdXAiLCJzZWxlY3QiLCJvcHRncm91cCIsImF1ZGlvIiwidmlkZW8iLCJvYmplY3QiLCJtYXAiLCJpbXBsaWNpdFRhZyIsInJlc29sdmVJbXBsaWNpdFRhZyIsImdldFBhcmVudEVsZW1lbnQiLCJjb250ZXh0TmFtZSIsInBhcmVudE5hbWUiLCJsb3dlcmNhc2UiLCJsYXRpbiIsInJ1Iiwic3AiLCJ2b2NhYnVsYXJpZXMiLCJyZUxvcmVtIiwibG9yZW0iLCJtIiwiZGIiLCJtaW5Xb3JkQ291bnQiLCJtYXhXb3JkQ291bnQiLCJ3b3JkQ291bnQiLCJyYW5kIiwiZmluZFJlcGVhdGVyIiwicGFyYWdyYXBoIiwiZmxvb3IiLCJyYW5kb20iLCJzYW1wbGUiLCJsZW4iLCJpdGVyYXRpb25zIiwibWluIiwiY2hvaWNlIiwidmFsIiwic2VudGVuY2UiLCJ3b3JkcyIsImNhcGl0YWxpemUiLCJ3b3JkIiwiaW5zZXJ0Q29tbWFzIiwiaGFzQ29tbWEiLCJ0b3RhbENvbW1hcyIsImRpY3QiLCJzdGFydFdpdGhDb21tb24iLCJ0b3RhbFdvcmRzIiwiY29tbW9uIiwiZWxlbWVudCIsInJlbmFtZSIsInhzbCIsIm1hdGNoZXNOYW1lIiwiaXNBbGxvd2VkIiwicmVFbGVtZW50IiwicmVNb2RpZmllciIsImJsb2NrQ2FuZGlkYXRlczEiLCJjbGFzc05hbWUiLCJibG9ja0NhbmRpZGF0ZXMyIiwiYmVtIiwiZXhwYW5kQ2xhc3NOYW1lcyIsImV4cGFuZFNob3J0Tm90YXRpb24iLCJkYXRhIiwiZ2V0QkVNRGF0YSIsImNsYXNzTmFtZXMiLCJjbCIsIml4IiwiaW5kZXhPZiIsInVuaXF1ZUNsYXNzIiwiYmxvY2siLCJmaW5kQmxvY2tOYW1lIiwidXBkYXRlQ2xhc3MiLCJwYXRoIiwicHJlZml4Iiwib3JpZ2luYWxDbGFzcyIsImdldEJsb2NrTmFtZSIsImFyckNsYXNzTmFtZXMiLCJfYmVtIiwiY2xhc3NWYWx1ZSIsInN0cmluZ2lmeVZhbHVlIiwicGFyc2VCRU0iLCJnZXRCRU1EYXRhRnJvbUNvbnRleHQiLCJkZXB0aCIsIm1heFBhcmVudEl4Iiwid2FsayQxIiwidmlzaXRvciIsImNyZWF0ZVdhbGtTdGF0ZSIsIm91dCIsImNhcmV0IiwiaXNTbmlwcGV0IiwiaXNJbmxpbmVFbGVtZW50IiwiaXNGaWVsZCIsInB1c2hUb2tlbnMiLCJsYXJnZXN0SW5kZXgiLCJzcGxpdEJ5TGluZXMkMSIsInNob3VsZE91dHB1dEF0dHJpYnV0ZSIsInRlbXBsYXRlIiwiY29uc3VtZVBsYWNlaG9sZGVyIiwibmFtZVBvcyIsImFmdGVyUG9zIiwiaXNUb2tlblN0YXJ0IiwiaXNUb2tlbiIsImJlZm9yZSIsImFmdGVyIiwiY3JlYXRlQ29tbWVudFN0YXRlIiwiZW5hYmxlZCIsInRyaWdnZXIiLCJjb21tZW50Tm9kZUJlZm9yZSIsInNob3VsZENvbW1lbnQiLCJjb21tZW50Iiwib3V0cHV0IiwiY29tbWVudE5vZGVBZnRlciIsImF0dHJzIiwiaHRtbFRhZ1JlZ2V4IiwiaHRtbCIsImZvcm1hdCIsInNob3VsZEZvcm1hdCIsImdldEluZGVudCIsInB1c2hBdHRyaWJ1dGUiLCJwdXNoU25pcHBldCIsImlubmVyRm9ybWF0IiwiaGFzTmV3bGluZSIsInN0YXJ0c1dpdGhCbG9ja1RhZyIsImxRdW90ZSIsInJRdW90ZSIsImZpZWxkSXgiLCJmaW5kSW5kZXgiLCJ0cmltTGVmdCIsImFkamFjZW50SW5saW5lIiwibWF0Y2hlcyIsImV4ZWMiLCJpbmRlbnRGb3JtYXQiLCJlbGVtZW50JDEiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwiY29sbGVjdEF0dHJpYnV0ZXMiLCJzaG91bGRGb3JtYXQkMSIsImJlZm9yZU5hbWUiLCJhZnRlck5hbWUiLCJwdXNoUHJpbWFyeUF0dHJpYnV0ZXMiLCJwdXNoU2Vjb25kYXJ5QXR0cmlidXRlcyIsInB1c2hWYWx1ZSIsImlzUHJpbWFyeUF0dHJpYnV0ZSIsInJlcGxhY2UiLCJiZWZvcmVBdHRyaWJ1dGUiLCJib29sZWFuVmFsdWUiLCJnbHVlQXR0cmlidXRlIiwiYWZ0ZXJBdHRyaWJ1dGUiLCJsaW5lTGVuZ3RocyIsIm1heExlbmd0aCIsInZhbHVlTGVuZ3RoIiwiYmVmb3JlVGV4dExpbmUiLCJhZnRlclRleHRMaW5lIiwiaGFtbCIsInNsaW0iLCJwdWciLCJmb3JtYXR0ZXJzIiwicGFyc2UiLCJvbGRUZXh0VmFsdWUiLCJwYXJzZU9wdCIsInRyYW5zZm9ybSIsInN0cmluZ2lmeSIsImZvcm1hdHRlciIsInN5bnRheCIsInJlUHJvcGVydHkiLCJvcHQiLCJjcmVhdGVTbmlwcGV0Iiwia2V5Iiwia2V5d29yZHMiLCJwYXJzZWQiLCJwYXJzZVZhbHVlIiwiY3NzVmFsIiwiY29sbGVjdEtleXdvcmRzIiwiZGVwZW5kZW5jaWVzIiwibmVzdCIsInNvcnQiLCJzbmlwcGV0c1NvcnQiLCJjdXIiLCJpc1Byb3BlcnR5IiwidiIsInNjb3JlTWF0Y2giLCJzdHIxIiwic3RyMiIsInBhcnRpYWxNYXRjaCIsInN0cjFMZW4iLCJzdHIyTGVuIiwibWluTGVuZ3RoIiwiaiIsInNjb3JlIiwiY2gxIiwiY2gyIiwiZm91bmQiLCJhY3JvbnltIiwibWF0Y2hSYXRpbyIsImRlbHRhIiwibWF4U2NvcmUiLCJzdW0iLCJzaG9ydEhleCIsImFzSGV4IiwiYXNSR0IiLCJpc1Nob3J0SGV4IiwidG9TaG9ydEhleCIsInRvSGV4IiwidmFsdWVzIiwiZnJhYyIsIm51bSIsImRpZ2l0cyIsInRvRml4ZWQiLCJoZXgiLCJ0b1N0cmluZyIsInBhZCIsImNzcyIsImlzSlNPTiIsInRvQ2FtZWxDYXNlIiwicHJvcGVydHlWYWx1ZSIsIm91dHB1dEltcG9ydGFudCIsIm91dHB1dFRva2VuIiwiZ2V0U2luZ2xlTnVtZXJpYyIsImdldFF1b3RlIiwib3V0cHV0VmFsdWUiLCJzZXBhcmF0b3IiLCJwcmV2RW5kIiwiXyIsImxldHRlciIsImdyYWRpZW50TmFtZSIsInBhcnNlJDEiLCJjYWNoZSIsInN0eWxlc2hlZXRTbmlwcGV0cyIsImNvbnZlcnRTbmlwcGV0cyIsImlzVmFsdWVTY29wZSIsImZpbHRlcmVkU25pcHBldHMiLCJnZXRTbmlwcGV0c0ZvclNjb3BlIiwicmVzb2x2ZU5vZGUiLCJrZXlzIiwicmVzb2x2ZUdyYWRpZW50IiwicHJvcE5hbWUiLCJyZXNvbHZlVmFsdWVLZXl3b3JkcyIsImZpbmRCZXN0TWF0Y2giLCJyZXNvbHZlQXNQcm9wZXJ0eSIsInJlc29sdmVBc1NuaXBwZXQiLCJyZXNvbHZlTnVtZXJpY1ZhbHVlIiwiZ3JhZGllbnRGbiIsImNzc1ZhbHVlIiwiaW5saW5lVmFsdWUiLCJnZXRVbm1hdGNoZWRQYXJ0Iiwia3ciLCJyZXNvbHZlS2V5d29yZCIsImRlZmF1bHRWYWx1ZSIsImhhc0ZpZWxkIiwid3JhcFdpdGhGaWVsZCIsIm1pblNjb3JlIiwicmVGaWVsZCIsImlucHV0VmFsdWUiLCJsaXRlcmFsIiwidGFpbCIsIm1hdGNoZWRJdGVtIiwiZ2V0U2NvcmluZ1BhcnQiLCJsYXN0UG9zIiwicmVmIiwiZGVwIiwiYWxpYXNlcyIsInVuaXRsZXNzIiwicSIsIm1hcmt1cFNuaXBwZXRzIiwieHNsU25pcHBldHMiLCJwdWdTbmlwcGV0cyIsImRlZmF1bHRTeW50YXhlcyIsIm1hcmt1cCIsInN0eWxlc2hlZXQiLCJkZWZhdWx0T3B0aW9ucyIsImUiLCJ4IiwiZGVmYXVsdENvbmZpZyIsInN5bnRheENvbmZpZyIsInBhcnNlU25pcHBldHMiLCJ4aHRtbCIsInhtbCIsInNhc3MiLCJzdHlsdXMiLCJrIiwicmVzb2x2ZUNvbmZpZyIsImdsb2JhbHMiLCJtZXJnZWREYXRhIiwidHlwZURlZmF1bHRzIiwidHlwZU92ZXJyaWRlIiwic3ludGF4RGVmYXVsdHMiLCJzeW50YXhPdmVycmlkZSIsImJhY2t3YXJkU2Nhbm5lciIsInNvbCIsInBlZWskMSIsInByZXZpb3VzIiwiY29uc3VtZSIsImNvbnN1bWVXaGlsZSIsImlzUXVvdGUiLCJjIiwiY29uc3VtZVF1b3RlZCIsImJyYWNlUGFpcnMiLCJpc0h0bWwiLCJpc1doaXRlU3BhY2UiLCJjb25zdW1lSWRlbnQiLCJjb25zdW1lQXR0cmlidXRlV2l0aFVucXVvdGVkVmFsdWUiLCJjb25zdW1lQXR0cmlidXRlIiwiY29uc3VtZUF0dHJpYnV0ZVdpdGhRdW90ZWRWYWx1ZSIsImlzQ2xvc2VCcmFja2V0IiwiaXNPcGVuQnJhY2tldCIsImlzVW5xdW90ZWRWYWx1ZSIsImlzSWRlbnQiLCJpc0FscGhhIiwiaXNOdW1iZXIiLCJpc05hTiIsInNwZWNpYWxDaGFycyIsImRlZmF1bHRPcHRpb25zJDEiLCJsb29rQWhlYWQiLCJleHRyYWN0QWJicmV2aWF0aW9uJDEiLCJvZmZzZXRQYXN0QXV0b0Nsb3NlZCIsImdldFN0YXJ0T2Zmc2V0IiwiaXNDbG9zZUJyYWNlIiwiaXNPcGVuQnJhY2UiLCJpc0FiYnJldmlhdGlvbiIsImxvY2F0aW9uIiwiY29tcGlsZWRQcmVmaXgiLCJjb25zdW1lUGFpciIsImNvbnN1bWVBcnJheSIsImNvbnN1bWVkIiwiZXhwYW5kQWJicmV2aWF0aW9uJDEiLCJyZXNvbHZlZENvbmZpZyIsImNzc0RhdGEiLCJodG1sRGF0YSIsInNuaXBwZXRLZXlDYWNoZSIsIk1hcCIsIm1hcmt1cFNuaXBwZXRLZXlzIiwic3R5bGVzaGVldEN1c3RvbVNuaXBwZXRzS2V5Q2FjaGUiLCJodG1sQWJicmV2aWF0aW9uU3RhcnRSZWdleCIsImpzeEFiYnJldmlhdGlvblN0YXJ0UmVnZXgiLCJjc3NBYmJyZXZpYXRpb25SZWdleCIsImh0bWxBYmJyZXZpYXRpb25SZWdleCIsImNvbW1vbmx5VXNlZFRhZ3MiLCJ0YWdzIiwiYmVtRmlsdGVyU3VmZml4IiwiZmlsdGVyRGVsaW1pdG9yIiwidHJpbUZpbHRlclN1ZmZpeCIsImNvbW1lbnRGaWx0ZXJTdWZmaXgiLCJtYXhGaWx0ZXJzIiwiZG9Db21wbGV0ZSIsIm1vbmFjbyIsIm1vZGVsIiwicG9zaXRpb24iLCJlbW1ldENvbmZpZyIsImlzU3R5bGVTaGVldFJlcyIsImlzU3R5bGVTaGVldCIsImhhcyIsInJlZ2lzdHJ5IiwiZ2V0RGVmYXVsdFNuaXBwZXRzIiwic2V0IiwiZ2V0IiwiZXh0cmFjdE9wdGlvbnMiLCJnZXRTeW50YXhUeXBlIiwiZXh0cmFjdGVkVmFsdWUiLCJleHRyYWN0QWJicmV2aWF0aW9uIiwiYWJicmV2aWF0aW9uUmFuZ2UiLCJjdXJyZW50TGluZVRpbGxQb3NpdGlvbiIsImN1cnJlbnRXb3JkIiwiZ2V0Q3VycmVudFdvcmQiLCJlbmRzV2l0aCIsImV4cGFuZE9wdGlvbnMiLCJnZXRFeHBhbmRPcHRpb25zIiwiZXhwYW5kZWRUZXh0IiwiZXhwYW5kZWRBYmJyIiwiY29tcGxldGlvbkl0ZW1zIiwiY3JlYXRlRXhwYW5kZWRBYmJyIiwiaXNBYmJyZXZpYXRpb25WYWxpZCIsImlzRXhwYW5kZWRUZXh0Tm9pc2UiLCJraW5kIiwibGFuZ3VhZ2VzIiwiQ29tcGxldGlvbkl0ZW1LaW5kIiwiUHJvcGVydHkiLCJsYWJlbCIsImRvY3VtZW50YXRpb24iLCJyZXBsYWNlVGFiU3RvcHNXaXRoQ3Vyc29ycyIsImRldGFpbCIsImluc2VydFRleHRSdWxlcyIsIkNvbXBsZXRpb25JdGVtSW5zZXJ0VGV4dFJ1bGUiLCJJbnNlcnRBc1NuaXBwZXQiLCJyYW5nZSIsImVzY2FwZU5vblRhYlN0b3BEb2xsYXIiLCJhZGRGaW5hbFRhYlN0b3AiLCJwcm9wZXJ0aWVzIiwic3VnZ2VzdGlvbnMiLCJpbmNvbXBsZXRlIiwicmVtb3ZlVGFiU3RvcHMiLCJmaWx0ZXJUZXh0Iiwic3R5bGVzaGVldEN1c3RvbVNuaXBwZXRzS2V5cyIsIm1ha2VTbmlwcGV0U3VnZ2VzdGlvbiIsImFiYnJSZWdleCIsIlJlZ0V4cCIsInRhZ1RvRmluZE1vcmVTdWdnZXN0aW9uc0ZvciIsIm5ld1RhZ01hdGNoZXMiLCJjb21tb25seVVzZWRUYWdTdWdnZXN0aW9ucyIsInNob3dBYmJyZXZpYXRpb25TdWdnZXN0aW9ucyIsImFiYnJldmlhdGlvblN1Z2dlc3Rpb25zIiwic29ydFRleHQiLCJzaG93U3VnZ2VzdGlvbnNBc1NuaXBwZXRzIiwiU25pcHBldCIsInNuaXBwZXRLZXlzIiwic25pcHBldERldGFpbCIsInNraXBGdWxsTWF0Y2giLCJzbmlwcGV0Q29tcGxldGlvbnMiLCJzbmlwcGV0S2V5IiwiY3VycmVudEFiYnIiLCJzdWJzdHIiLCJleHBhbmRlZFdvcmQiLCJtYXhUYWJTdG9wIiwibWF4VGFiU3RvcFJhbmdlcyIsImZvdW5kTGFzdFN0b3AiLCJyZXBsYWNlV2l0aExhc3RTdG9wIiwibnVtYmVyU3RhcnQiLCJudW1iZXJFbmQiLCJjdXJyZW50VGFiU3RvcCIsImZvdW5kUGxhY2Vob2xkZXIiLCJyYW5nZVN0YXJ0IiwicmFuZ2VFbmQiLCJlbW1ldFNuaXBwZXRGaWVsZCIsInN5bnRheFR5cGUiLCJlbXB0eVVzZXJDb25maWciLCJnZXRGaWx0ZXJzIiwiY3VycmVudExpbmUiLCJnZXRMaW5lQ29udGVudCIsImxpbmVOdW1iZXIiLCJsZW5ndGhPY2N1cGllZEJ5RmlsdGVyIiwicmFuZ2VUb1JlcGxhY2UiLCJSYW5nZSIsImhleENvbG9yUmVnZXgiLCJfYiIsImJldHdlZW4iLCJlbmRQcmVmaXhJbmRleCIsInRhZyIsImRvdE1hdGNoZXMiLCJmaWx0ZXJzIiwiYmVtRW5hYmxlZCIsImNvbW1lbnRFbmFibGVkIiwiY29tYmluZWRPcHRpb25zIiwiaXNWYWxpZEVtbWV0VG9rZW4iLCJsYW5ndWFnZSIsImN1cnJlbnRUb2tlblR5cGUiLCJpc1ZhbGlkTG9jYXRpb25Gb3JFbW1ldEFiYnJldmlhdGlvbiIsIl90b2tlbml6YXRpb24iLCJ0b2tlbml6YXRpb24iLCJfdG9rZW5pemF0aW9uU3RhdGVTdG9yZSIsIl90b2tlbml6YXRpb25TdXBwb3J0IiwidG9rZW5pemF0aW9uU3VwcG9ydCIsImdldEJlZ2luU3RhdGUiLCJjbG9uZSIsInRva2VuaXphdGlvblJlc3VsdCIsInZhbGlkIiwiTEFOR1VBR0VfTU9ERVMiLCJqYWRlIiwic2NzcyIsImxlc3MiLCJqYXZhc2NyaXB0IiwidHlwZXNjcmlwdCIsIk1BUFBFRF9NT0RFUyIsImhhbmRsZWJhcnMiLCJwaHAiLCJ0d2lnIiwiREVGQVVMVF9DT05GSUciLCJzaG93RXhwYW5kZWRBYmJyZXZpYXRpb24iLCJyZWdpc3RlclByb3ZpZGVyIiwiY29uc29sZSIsInByb3ZpZGVycyIsInJlZ2lzdGVyQ29tcGxldGlvbkl0ZW1Qcm92aWRlciIsInRyaWdnZXJDaGFyYWN0ZXJzIiwicHJvdmlkZUNvbXBsZXRpb25JdGVtcyIsInByb3ZpZGVyIiwiZGlzcG9zZSIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0VBQUFD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RUFDUCxNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixPQUFPO0VBQ1AsUUFBUTtFQUNSLE9BQU87RUFDUCxPQUFPO0VBQ1AsT0FBTztFQUNQLFFBQVE7RUFDUixRQUFRO0VBQ1IsT0FBTztFQUNQLFFBQVE7RUFDUixRQUFRO0VBQ1IsUUFBUTtFQUNSLEtBQUs7RUFDTCxNQUFNO0VBQ04sT0FBTztFQUNQLE1BQU07RUFDTixNQUFNO0VBQ04sT0FBTztFQUNQLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULFNBQVM7RUFDVCxTQUFTO0VBQ1QsU0FBUztFQUNULFVBQVU7RUFDVixVQUFVO0VBQ1YsVUFBVTtFQUNWLFNBQVM7RUFDVCxTQUFTO0VBQ1QsT0FBTztFQUNQLE1BQU07RUFDTixPQUFPO0VBQ1AsT0FBTztFQUNQLEtBQUs7RUFDTCxNQUFNO0VBQ04sS0FBSztFQUNMLE1BQU07RUFDTixPQUFPO0VBQ1AsT0FBTztFQUNQLFFBQVE7RUFDUixRQUFRO0VBQ1IsTUFBTTtFQUNOLE9BQU87RUFDUCxPQUFPO0VBQ1AsT0FBTztFQUNQLE1BQU07RUFDTixNQUFNO0VBQ04sT0FBTztFQUNQLE9BQU87RUFDUCxNQUFNO0VBQ04sT0FBTztFQUNQLE1BQU07RUFDTixNQUFNO0VBQ04sT0FBTztFQUNQLE9BQU87RUFDUCxPQUFPO0VBQ1AsT0FBTztFQUNQLFFBQVE7RUFDUixPQUFPO0VBQ1AsT0FBTztFQUNQLFFBQVE7RUFDUixPQUFPO0VBQ1AsT0FBTztFQUNQLE9BQU87RUFDUCxNQUFNO0VBQ04sTUFBTTtFQUNOLE9BQU87RUFDUCxPQUFPO0VBQ1AsT0FBTztFQUNQLE9BQU87RUFDUCxPQUFPO0VBQ1AsTUFBTTtFQUNOLE1BQU07RUFDTixPQUFPO0VBQ1AsT0FBTztFQUNQLE1BQU07RUFDTixPQUFPO0VBQ1AsT0FBTztFQUNQLE1BQU07RUFDTixLQUFLO0VBQ0wsTUFBTTtFQUNOLE1BQU07RUFDTixNQUFNO0VBQ04sS0FBSztFQUNMLE1BQU07RUFDTixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixRQUFRO0VBQ1IsUUFBUTtFQUNSLE9BQU87RUFDUCxLQUFLO0VBQ0wsT0FBTztFQUNQLE9BQU87RUFDUCxPQUFPO0VBQ1AsTUFBTTtFQUNOLE9BQU87RUFDUCxPQUFPO0VBQ1AsT0FBTztFQUNQLE1BQU07RUFDTixNQUFNO0VBQ04sTUFBTTtFQUNOLE1BQU07RUFDTixPQUFPO0VBQ1AsT0FBTztFQUNQLE9BQU87RUFDUCxPQUFPO0VBQ1AsVUFBVTtFQUNWLE9BQU87RUFDUCxPQUFPO0VBQ1AsT0FBTztFQUNQLE1BQU07RUFDTixPQUFPO0VBQ1AsT0FBTztFQUNQLE9BQU87RUFDUCxLQUFLO0VBQ0wsTUFBTTtFQUNOLFFBQVE7RUFDUixRQUFRO0VBQ1IsUUFBUTtFQUNSLE1BQU07RUFDTixPQUFPO0VBQ1AsTUFBTTtFQUNOLE1BQU07RUFDTixLQUFLO0VBQ0wsT0FBTztFQUNQLE9BQU87RUFDUCxLQUFLO0VBQ0wsT0FBTztFQUNQLEtBQUs7RUFDTCxNQUFNO0VBQ04sT0FBTztFQUNQLE9BQU87RUFDUCxNQUFNO0VBQ04sTUFBTTtFQUNOLE1BQU07RUFDTixNQUFNO0VBQ04sTUFBTTtFQUNOLE1BQU07RUFDTixPQUFPO0VBQ1AsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsUUFBUTtFQUNSLE9BQU87RUFDUCxTQUFTO0VBQ1QsU0FBUztFQUNULFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTztFQUNQLE1BQU07RUFDTixNQUFNO0VBQ04sTUFBTTtFQUNOLEtBQUs7RUFDTCxNQUFNO0VBQ04sS0FBSztFQUNMLE9BQU87RUFDUCxRQUFRO0VBQ1IsT0FBTztFQUNQLE1BQU07RUFDTixPQUFPO0VBQ1AsT0FBTztFQUNQLE9BQU87RUFDUCxLQUFLO0VBQ0wsT0FBTztBQUNSO0FBRUEsSUFBSXFDLGNBQWM7RUFDZCxhQUFhO0VBQ2IsWUFBWTtFQUNaLFFBQVE7RUFDUixNQUFNO0VBQ04sT0FBTztFQUNQLE9BQU87RUFDUCxPQUFPO0VBQ1AsTUFBTTtFQUNOLGVBQWU7RUFDZixNQUFNO0VBQ04sTUFB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QUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssR0FBRztFQUNyR0MsWUFBWSxDQUFDLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxHQUFHO0FBQ3pHO0FBRUEsSUFBTUMsZUFBZTtFQUNqQkMsWUFBWTtFQUNaQyxLQUFLO0VBQ0xDLE1BQU07QUFDVjtBQUNBLElBQU1DLGlCQUFpQjtFQUNuQkMsMEJBQTBCO0VBQzFCbkUsNkJBQTZCO0VBQzdCRywyQkFBMkI7QUFDL0I7QUFTQSxTQUFTaUUsaUJBQWlCMUgsUUFBUTZCLFdBQVdsTixRQUFRO0VBQ2pELElBQUksQ0FBQ3FMLFFBQVE7SUFDVDJILFFBQVF0eEIsTUFBTSw0RkFBNEY7SUFDMUc7RUFDSjtFQUNBLE1BQU11eEIsWUFBWS9GLFVBQVU1VyxJQUFLaWIsWUFBYWxHLE9BQU82QixVQUFVZ0csK0JBQStCM0IsVUFBVTtJQUNwRzRCLG1CQUFtQmhCLGVBQWVNLGFBQWFsQixhQUFhQTtJQUM1RDZCLHdCQUF3QixDQUFDOUgsT0FBT0MsYUFBYWtHLG9DQUFvQ25HLE9BQU9DLFVBQVV2TCxRQUFRdVIsUUFBUSxJQUM1R25HLFdBQVdDLFFBQVFDLE9BQU9DLFVBQVV2TCxRQUFRNlMsY0FBYyxJQUMxRDtFQUNWLENBQUMsQ0FBQztFQUNGLE9BQU8sTUFBTTtJQUNUSSxVQUFVcGdCLFFBQVN3Z0IsWUFBYUEsU0FBU0MsU0FBUztFQUN0RDtBQUNKO0FBQ0EsU0FBU2owQixVQUFVZ3NCLFNBQVNrSSxPQUFPbEksUUFBUTZCLFlBQVksQ0FBQyxNQUFNLEdBQUc7RUFDN0QsT0FBTzZGLGlCQUFpQjFILFFBQVE2QixXQUFXLE1BQU07QUFDckQ7QUFDQSxTQUFTOXRCLFNBQVNpc0IsU0FBU2tJLE9BQU9sSSxRQUFRNkIsWUFBWSxDQUFDLEtBQUssR0FBRztFQUMzRCxPQUFPNkYsaUJBQWlCMUgsUUFBUTZCLFdBQVcsS0FBSztBQUNwRDtBQUNBLFNBQVM1dEIsU0FBUytyQixTQUFTa0ksT0FBT2xJLFFBQVE2QixZQUFZLENBQUMsWUFBWSxHQUFHO0VBQ2xFLE9BQU82RixpQkFBaUIxSCxRQUFRNkIsV0FBVyxLQUFLO0FBQ3BEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvcHJvamVjdC9vdXQifQ==