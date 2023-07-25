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

// .beyond/uimport/temp/emmet-monaco-es.5.2.0.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL2VtbWV0LW1vbmFjby1lcy41LjIuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbW1ldC1tb25hY28tZXMvZGlzdC9lbW1ldC1tb25hY28uZXNtLmpzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiZW1tZXRDU1MiLCJlbW1ldEhUTUwiLCJlbW1ldEpTWCIsImV4cGFuZEFiYnJldmlhdGlvbiIsIm1vZHVsZSIsImlzTnVtYmVyJDEiLCJjb2RlIiwiaXNBbHBoYSQxIiwiZnJvbSIsInRvIiwiaXNBbHBoYU51bWVyaWNXb3JkIiwiaXNBbHBoYVdvcmQiLCJpc1doaXRlU3BhY2UkMyIsImlzU3BhY2UiLCJpc1F1b3RlJDIiLCJTY2FubmVyIiwiY29uc3RydWN0b3IiLCJzdHIiLCJzdGFydCIsImVuZCIsImxlbmd0aCIsInN0cmluZyIsInBvcyIsImVvZiIsImxpbWl0IiwicGVlayIsImNoYXJDb2RlQXQiLCJuZXh0IiwiZWF0IiwibWF0Y2giLCJjaCIsIm9rIiwiZWF0V2hpbGUiLCJiYWNrVXAiLCJuIiwiY3VycmVudCIsInN1YnN0cmluZyIsInNsaWNlIiwiZXJyb3IiLCJtZXNzYWdlIiwiU2Nhbm5lckVycm9yIiwiRXJyb3IiLCJ0b2tlblNjYW5uZXIkMSIsInRva2VucyIsInNpemUiLCJwZWVrJDMiLCJzY2FubmVyIiwicmVhZGFibGUkMSIsImNvbnN1bWUkMiIsInRlc3QiLCJ0b2tlbiIsImVycm9yJDEiLCJlcnIiLCJhYmJyZXZpYXRpb24iLCJhYmJyIiwib3B0aW9ucyIsInJlc3VsdCIsInN0YXRlbWVudHMiLCJ0eXBlIiwiZWxlbWVudHMiLCJjdHgiLCJub2RlIiwic3RhY2siLCJlbGVtZW50JDIiLCJncm91cCIsInB1c2giLCJpc0NoaWxkT3BlcmF0b3IiLCJpc1NpYmxpbmdPcGVyYXRvciQxIiwiaXNDbGltYk9wZXJhdG9yIiwicG9wIiwiaXNHcm91cFN0YXJ0IiwiaXNCcmFja2V0JDIiLCJyZXBlYXQiLCJyZXBlYXRlciIsImF0dHIiLCJlbGVtIiwibmFtZSIsImF0dHJpYnV0ZXMiLCJ2YWx1ZSIsInNlbGZDbG9zZSIsImVsZW1lbnROYW1lIiwiaXNFbXB0eSIsImlzUmVwZWF0ZXIiLCJ0ZXh0IiwiZ2V0VGV4dCIsInNob3J0QXR0cmlidXRlIiwiYXR0cmlidXRlU2V0IiwiQXJyYXkiLCJpc0FycmF5IiwiY29uY2F0IiwiaXNDbG9zZU9wZXJhdG9yIiwiaXNBdHRyaWJ1dGVTZXRTdGFydCIsImF0dHJpYnV0ZSIsImlzQXR0cmlidXRlU2V0RW5kIiwiaXNXaGl0ZVNwYWNlJDIiLCJpc09wZXJhdG9yJDEiLCJjcmVhdGVMaXRlcmFsJDEiLCJqc3giLCJleHByZXNzaW9uIiwibGl0ZXJhbCQyIiwicXVvdGVkIiwiaXNFcXVhbHMiLCJxdW90ZSIsImlzUXVvdGUkMSIsInNpbmdsZSIsImFsbG93QnJhY2tldHMiLCJicmFja2V0cyIsImNvbnRleHQiLCJvcGVuIiwiaXNDYXBpdGFsaXplZExpdGVyYWwiLCJpc0NsYXNzTmFtZU9wZXJhdG9yIiwiaXNFbGVtZW50TmFtZSIsImlzVGV4dFN0YXJ0IiwiaXNPcGVuIiwiQm9vbGVhbiIsIm9wZXJhdG9yIiwiaXNTaW5nbGUiLCJpc0xpdGVyYWwkMiIsImVzY2FwZWQiLCJ0b2tlbml6ZSQxIiwic291cmNlIiwiZ2V0VG9rZW4kMSIsImZpZWxkJDIiLCJyZXBlYXRlclBsYWNlaG9sZGVyIiwicmVwZWF0ZXJOdW1iZXIiLCJyZXBlYXRlciQxIiwid2hpdGVTcGFjZSQxIiwibGl0ZXJhbCQxJDEiLCJvcGVyYXRvciQxIiwiYnJhY2tldCQxIiwiaXNBbGxvd2VkT3BlcmF0b3IiLCJpc0VsZW1lbnROYW1lJDEiLCJpc0FsbG93ZWRTcGFjZSIsImlzQWxsb3dlZFJlcGVhdGVyIiwiYnJhY2tldFR5cGUiLCJpc09wZW5CcmFja2V0JDIiLCJvcCIsIm9wZXJhdG9yVHlwZSQxIiwiY291bnQiLCJpbXBsaWNpdCIsIk51bWJlciIsInJldmVyc2UiLCJiYXNlIiwicGFyZW50IiwiaW5kZXgiLCJjb25zdW1lUGxhY2Vob2xkZXIkMiIsInN0cmVhbSIsIm9wZXJhdG9ycyIsImNoaWxkIiwiY2xhc3MiLCJjbGltYiIsImlkIiwiZXF1YWwiLCJjbG9zZSIsInNpYmxpbmciLCJ0b2tlblZpc2l0b3IiLCJMaXRlcmFsIiwiUXVvdGUiLCJCcmFja2V0IiwiT3BlcmF0b3IiLCJGaWVsZCIsInN0YXRlIiwiZ2V0VmFyaWFibGUiLCJSZXBlYXRlclBsYWNlaG9sZGVyIiwiaSIsInJlcGVhdGVycyIsImluc2VydGVkIiwiUmVwZWF0ZXJOdW1iZXIiLCJsYXN0SXgiLCJwYXJlbnRJeCIsIk1hdGgiLCJtYXgiLCJwYXJlbnRSZXBlYXRlciIsIlN0cmluZyIsIldoaXRlU3BhY2UiLCJzdHJpbmdpZnkkMSIsInVybFJlZ2V4IiwiZW1haWxSZWdleCIsImNvbnZlcnQiLCJ0ZXh0SW5zZXJ0ZWQiLCJjbGVhblRleHQiLCJmaWx0ZXIiLCJzIiwidHJpbSIsImNoaWxkcmVuIiwiY29udmVydEdyb3VwIiwicmVwZWF0R3VhcmQiLCJtYXhSZXBlYXQiLCJQT1NJVElWRV9JTkZJTklUWSIsIl9hIiwiam9pbiIsInZhclZhbHVlIiwidmFyaWFibGVzIiwiZGVlcGVzdCIsImRlZXBlc3ROb2RlIiwibGFzdCQxIiwiaW5zZXJ0VGV4dCIsImhyZWYiLCJpbnNlcnRIcmVmIiwiY29udmVydFN0YXRlbWVudCIsIm9yaWdpbmFsIiwiT2JqZWN0IiwiYXNzaWduIiwiaXRlbXMiLCJpc0dyb3VwIiwiY29udmVydEVsZW1lbnQiLCJ0YXJnZXQiLCJzdHJpbmdpZnlOYW1lIiwic3RyaW5naWZ5VmFsdWUkMSIsInNlbGZDbG9zaW5nIiwiY29udmVydEF0dHJpYnV0ZSIsInNvbWUiLCJpc0ZpZWxkJDEiLCJhdHRhY2hSZXBlYXRlciIsImltcGxpZWQiLCJpc0Jvb2xlYW4iLCJ2YWx1ZVR5cGUiLCJzaGlmdCIsImJvb2xlYW4iLCJhcnIiLCJsYXN0VG9rZW4iLCJzdGFydHNXaXRoIiwiaHJlZkF0dHJpYnV0ZSIsImZpbmQiLCJpdGVtIiwicGFyc2VBYmJyZXZpYXRpb24iLCJ0b2tlbml6ZSIsImlzVmFsdWUiLCJnZXRUb2tlbiIsIm1lcmdlVG9rZW5zIiwic2hvdWxkQ29uc3VtZURhc2hBZnRlciIsInNob3J0IiwiZmllbGQkMSIsIm51bWJlclZhbHVlIiwiY29sb3JWYWx1ZSIsInN0cmluZ1ZhbHVlIiwiYnJhY2tldCIsIndoaXRlU3BhY2UiLCJsaXRlcmFsJDEiLCJjb25zdW1lUGxhY2Vob2xkZXIkMSIsImlzSWRlbnRQcmVmaXgiLCJpc0tleXdvcmQiLCJpc0xpdGVyYWwiLCJjcmVhdGVMaXRlcmFsIiwiY29uc3VtZU51bWJlciIsInJhd1ZhbHVlIiwidW5pdCIsImZpbmlzaGVkIiwidmFsdWVTdGFydCIsImNvbG9yIiwiYWxwaGEiLCJpc0hleCIsImNvbG9yQWxwaGEiLCJyIiwiZyIsImIiLCJhIiwicGFyc2VDb2xvciIsInJhdyIsImlzQnJhY2tldCIsIm9wZXJhdG9yVHlwZSIsImFmdGVyTmVnYXRpdmUiLCJoYXNEZWNpbWFsIiwicHJldlBvcyIsImhhc0Zsb2F0IiwicGFyc2VJbnQiLCJsYXN0IiwidG9rZW5TY2FubmVyIiwicGVlayQyIiwicmVhZGFibGUiLCJjb25zdW1lJDEiLCJwYXJzZXIiLCJwcm9wZXJ0eSIsImNvbnN1bWVQcm9wZXJ0eSIsImlzU2libGluZ09wZXJhdG9yIiwiaW1wb3J0YW50IiwidmFsdWVGcmFnbWVudCIsInZhbHVlTW9kZSIsImlzTGl0ZXJhbCQxIiwiaXNGdW5jdGlvblN0YXJ0IiwiaXNWYWx1ZURlbGltaXRlciIsImlzV2hpdGVTcGFjZSQxIiwiaXNJbXBvcnRhbnQiLCJjb25zdW1lVmFsdWUiLCJpc0ZyYWdtZW50RGVsaW1pdGVyIiwiaW5Bcmd1bWVudCIsImFyZ3MiLCJjb25zdW1lQXJndW1lbnRzIiwiYXJndW1lbnRzIiwiaXNPcGVuQnJhY2tldCQxIiwiaXNDbG9zZUJyYWNrZXQkMSIsImlzQXJndW1lbnREZWxpbWl0ZXIiLCJpc0JyYWNrZXQkMSIsImlzT3BlcmF0b3IiLCJ0MSIsInQyIiwicGFyc2UkMiIsIm1lcmdlQXR0cmlidXRlcyIsImNvbmZpZyIsImxvb2t1cCIsImF0dHJOYW1lIiwicHJldiIsIm1lcmdlVmFsdWUiLCJtZXJnZURlY2xhcmF0aW9ucyIsImdsdWUiLCJhcHBlbmQiLCJ0IiwiZGVzdCIsInNyYyIsIndhbGsiLCJmbiIsImFuY2VzdG9ycyIsImNhbGxiYWNrIiwiZm9yRWFjaCIsImZpbmREZWVwZXN0IiwiaXNOb2RlIiwicmVzb2x2ZVNuaXBwZXRzIiwicmV2ZXJzZWQiLCJyZXNvbHZlIiwic25pcHBldCIsInNuaXBwZXRzIiwiaW5jbHVkZXMiLCJzbmlwcGV0QWJiciIsIndhbGtSZXNvbHZlIiwidG9wTm9kZSIsIm1lcmdlTm9kZXMiLCJyZXNvbHZlZCIsImNyZWF0ZU91dHB1dFN0cmVhbSIsImxldmVsIiwib2Zmc2V0IiwibGluZSIsImNvbHVtbiIsInByb2Nlc3NUZXh0IiwiX3B1c2giLCJwdXNoU3RyaW5nIiwibGluZXMiLCJzcGxpdEJ5TGluZXMiLCJpbCIsInB1c2hOZXdsaW5lIiwiaW5kZW50IiwiYmFzZUluZGVudCIsIm5ld2xpbmUiLCJwdXNoSW5kZW50IiwicHVzaEZpZWxkIiwicGxhY2Vob2xkZXIiLCJmaWVsZCIsInRhZ05hbWUiLCJzdHJDYXNlIiwiYXR0clF1b3RlIiwiaXNCb29sZWFuQXR0cmlidXRlIiwidG9Mb3dlckNhc2UiLCJpc0lubGluZSIsImlubGluZUVsZW1lbnRzIiwic3BsaXQiLCJ0b1VwcGVyQ2FzZSIsImVsZW1lbnRNYXAiLCJwIiwidWwiLCJvbCIsInRhYmxlIiwidHIiLCJ0Ym9keSIsInRoZWFkIiwidGZvb3QiLCJjb2xncm91cCIsInNlbGVjdCIsIm9wdGdyb3VwIiwiYXVkaW8iLCJ2aWRlbyIsIm9iamVjdCIsIm1hcCIsImltcGxpY2l0VGFnIiwicmVzb2x2ZUltcGxpY2l0VGFnIiwiZ2V0UGFyZW50RWxlbWVudCIsImNvbnRleHROYW1lIiwicGFyZW50TmFtZSIsImxvd2VyY2FzZSIsImxhdGluIiwicnUiLCJzcCIsInZvY2FidWxhcmllcyIsInJlTG9yZW0iLCJsb3JlbSIsIm0iLCJkYiIsIm1pbldvcmRDb3VudCIsIm1heFdvcmRDb3VudCIsIndvcmRDb3VudCIsInJhbmQiLCJmaW5kUmVwZWF0ZXIiLCJwYXJhZ3JhcGgiLCJmbG9vciIsInJhbmRvbSIsInNhbXBsZSIsImxlbiIsIml0ZXJhdGlvbnMiLCJtaW4iLCJjaG9pY2UiLCJ2YWwiLCJzZW50ZW5jZSIsIndvcmRzIiwiY2FwaXRhbGl6ZSIsIndvcmQiLCJpbnNlcnRDb21tYXMiLCJoYXNDb21tYSIsInRvdGFsQ29tbWFzIiwiZGljdCIsInN0YXJ0V2l0aENvbW1vbiIsInRvdGFsV29yZHMiLCJjb21tb24iLCJlbGVtZW50IiwicmVuYW1lIiwieHNsIiwibWF0Y2hlc05hbWUiLCJpc0FsbG93ZWQiLCJyZUVsZW1lbnQiLCJyZU1vZGlmaWVyIiwiYmxvY2tDYW5kaWRhdGVzMSIsImNsYXNzTmFtZSIsImJsb2NrQ2FuZGlkYXRlczIiLCJiZW0iLCJleHBhbmRDbGFzc05hbWVzIiwiZXhwYW5kU2hvcnROb3RhdGlvbiIsImRhdGEiLCJnZXRCRU1EYXRhIiwiY2xhc3NOYW1lcyIsImNsIiwiaXgiLCJpbmRleE9mIiwidW5pcXVlQ2xhc3MiLCJibG9jayIsImZpbmRCbG9ja05hbWUiLCJ1cGRhdGVDbGFzcyIsInBhdGgiLCJwcmVmaXgiLCJvcmlnaW5hbENsYXNzIiwiZ2V0QmxvY2tOYW1lIiwiYXJyQ2xhc3NOYW1lcyIsIl9iZW0iLCJjbGFzc1ZhbHVlIiwic3RyaW5naWZ5VmFsdWUiLCJwYXJzZUJFTSIsImdldEJFTURhdGFGcm9tQ29udGV4dCIsImRlcHRoIiwibWF4UGFyZW50SXgiLCJ3YWxrJDEiLCJ2aXNpdG9yIiwiY3JlYXRlV2Fsa1N0YXRlIiwib3V0IiwiY2FyZXQiLCJpc1NuaXBwZXQiLCJpc0lubGluZUVsZW1lbnQiLCJpc0ZpZWxkIiwicHVzaFRva2VucyIsImxhcmdlc3RJbmRleCIsInNwbGl0QnlMaW5lcyQxIiwic2hvdWxkT3V0cHV0QXR0cmlidXRlIiwidGVtcGxhdGUiLCJjb25zdW1lUGxhY2Vob2xkZXIiLCJuYW1lUG9zIiwiYWZ0ZXJQb3MiLCJpc1Rva2VuU3RhcnQiLCJpc1Rva2VuIiwiYmVmb3JlIiwiYWZ0ZXIiLCJjcmVhdGVDb21tZW50U3RhdGUiLCJlbmFibGVkIiwidHJpZ2dlciIsImNvbW1lbnROb2RlQmVmb3JlIiwic2hvdWxkQ29tbWVudCIsImNvbW1lbnQiLCJvdXRwdXQiLCJjb21tZW50Tm9kZUFmdGVyIiwiYXR0cnMiLCJodG1sVGFnUmVnZXgiLCJodG1sIiwiZm9ybWF0Iiwic2hvdWxkRm9ybWF0IiwiZ2V0SW5kZW50IiwicHVzaEF0dHJpYnV0ZSIsInB1c2hTbmlwcGV0IiwiaW5uZXJGb3JtYXQiLCJoYXNOZXdsaW5lIiwic3RhcnRzV2l0aEJsb2NrVGFnIiwibFF1b3RlIiwiclF1b3RlIiwiZmllbGRJeCIsImZpbmRJbmRleCIsInRyaW1MZWZ0IiwiYWRqYWNlbnRJbmxpbmUiLCJtYXRjaGVzIiwiZXhlYyIsImluZGVudEZvcm1hdCIsImVsZW1lbnQkMSIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJjb2xsZWN0QXR0cmlidXRlcyIsInNob3VsZEZvcm1hdCQxIiwiYmVmb3JlTmFtZSIsImFmdGVyTmFtZSIsInB1c2hQcmltYXJ5QXR0cmlidXRlcyIsInB1c2hTZWNvbmRhcnlBdHRyaWJ1dGVzIiwicHVzaFZhbHVlIiwiaXNQcmltYXJ5QXR0cmlidXRlIiwicmVwbGFjZSIsImJlZm9yZUF0dHJpYnV0ZSIsImJvb2xlYW5WYWx1ZSIsImdsdWVBdHRyaWJ1dGUiLCJhZnRlckF0dHJpYnV0ZSIsImxpbmVMZW5ndGhzIiwibWF4TGVuZ3RoIiwidmFsdWVMZW5ndGgiLCJiZWZvcmVUZXh0TGluZSIsImFmdGVyVGV4dExpbmUiLCJoYW1sIiwic2xpbSIsInB1ZyIsImZvcm1hdHRlcnMiLCJwYXJzZSIsIm9sZFRleHRWYWx1ZSIsInBhcnNlT3B0IiwidHJhbnNmb3JtIiwic3RyaW5naWZ5IiwiZm9ybWF0dGVyIiwic3ludGF4IiwicmVQcm9wZXJ0eSIsIm9wdCIsImNyZWF0ZVNuaXBwZXQiLCJrZXkiLCJrZXl3b3JkcyIsInBhcnNlZCIsInBhcnNlVmFsdWUiLCJjc3NWYWwiLCJjb2xsZWN0S2V5d29yZHMiLCJkZXBlbmRlbmNpZXMiLCJuZXN0Iiwic29ydCIsInNuaXBwZXRzU29ydCIsImN1ciIsImlzUHJvcGVydHkiLCJ2Iiwic2NvcmVNYXRjaCIsInN0cjEiLCJzdHIyIiwicGFydGlhbE1hdGNoIiwic3RyMUxlbiIsInN0cjJMZW4iLCJtaW5MZW5ndGgiLCJqIiwic2NvcmUiLCJjaDEiLCJjaDIiLCJmb3VuZCIsImFjcm9ueW0iLCJtYXRjaFJhdGlvIiwiZGVsdGEiLCJtYXhTY29yZSIsInN1bSIsInNob3J0SGV4IiwiYXNIZXgiLCJhc1JHQiIsImlzU2hvcnRIZXgiLCJ0b1Nob3J0SGV4IiwidG9IZXgiLCJ2YWx1ZXMiLCJmcmFjIiwibnVtIiwiZGlnaXRzIiwidG9GaXhlZCIsImhleCIsInRvU3RyaW5nIiwicGFkIiwiY3NzIiwiaXNKU09OIiwidG9DYW1lbENhc2UiLCJwcm9wZXJ0eVZhbHVlIiwib3V0cHV0SW1wb3J0YW50Iiwib3V0cHV0VG9rZW4iLCJnZXRTaW5nbGVOdW1lcmljIiwiZ2V0UXVvdGUiLCJvdXRwdXRWYWx1ZSIsInNlcGFyYXRvciIsInByZXZFbmQiLCJfIiwibGV0dGVyIiwiZ3JhZGllbnROYW1lIiwicGFyc2UkMSIsImNhY2hlIiwic3R5bGVzaGVldFNuaXBwZXRzIiwiY29udmVydFNuaXBwZXRzIiwiaXNWYWx1ZVNjb3BlIiwiZmlsdGVyZWRTbmlwcGV0cyIsImdldFNuaXBwZXRzRm9yU2NvcGUiLCJyZXNvbHZlTm9kZSIsImtleXMiLCJyZXNvbHZlR3JhZGllbnQiLCJwcm9wTmFtZSIsInJlc29sdmVWYWx1ZUtleXdvcmRzIiwiZmluZEJlc3RNYXRjaCIsInJlc29sdmVBc1Byb3BlcnR5IiwicmVzb2x2ZUFzU25pcHBldCIsInJlc29sdmVOdW1lcmljVmFsdWUiLCJncmFkaWVudEZuIiwiY3NzVmFsdWUiLCJpbmxpbmVWYWx1ZSIsImdldFVubWF0Y2hlZFBhcnQiLCJrdyIsInJlc29sdmVLZXl3b3JkIiwiZGVmYXVsdFZhbHVlIiwiaGFzRmllbGQiLCJ3cmFwV2l0aEZpZWxkIiwibWluU2NvcmUiLCJyZUZpZWxkIiwiaW5wdXRWYWx1ZSIsImxpdGVyYWwiLCJ0YWlsIiwibWF0Y2hlZEl0ZW0iLCJnZXRTY29yaW5nUGFydCIsImxhc3RQb3MiLCJyZWYiLCJkZXAiLCJhbGlhc2VzIiwidW5pdGxlc3MiLCJxIiwibWFya3VwU25pcHBldHMiLCJ4c2xTbmlwcGV0cyIsInB1Z1NuaXBwZXRzIiwiZGVmYXVsdFN5bnRheGVzIiwibWFya3VwIiwic3R5bGVzaGVldCIsImRlZmF1bHRPcHRpb25zIiwiZSIsIngiLCJkZWZhdWx0Q29uZmlnIiwic3ludGF4Q29uZmlnIiwicGFyc2VTbmlwcGV0cyIsInhodG1sIiwieG1sIiwic2FzcyIsInN0eWx1cyIsImsiLCJyZXNvbHZlQ29uZmlnIiwiZ2xvYmFscyIsIm1lcmdlZERhdGEiLCJ0eXBlRGVmYXVsdHMiLCJ0eXBlT3ZlcnJpZGUiLCJzeW50YXhEZWZhdWx0cyIsInN5bnRheE92ZXJyaWRlIiwiYmFja3dhcmRTY2FubmVyIiwic29sIiwicGVlayQxIiwicHJldmlvdXMiLCJjb25zdW1lIiwiY29uc3VtZVdoaWxlIiwiaXNRdW90ZSIsImMiLCJjb25zdW1lUXVvdGVkIiwiYnJhY2VQYWlycyIsImlzSHRtbCIsImlzV2hpdGVTcGFjZSIsImNvbnN1bWVJZGVudCIsImNvbnN1bWVBdHRyaWJ1dGVXaXRoVW5xdW90ZWRWYWx1ZSIsImNvbnN1bWVBdHRyaWJ1dGUiLCJjb25zdW1lQXR0cmlidXRlV2l0aFF1b3RlZFZhbHVlIiwiaXNDbG9zZUJyYWNrZXQiLCJpc09wZW5CcmFja2V0IiwiaXNVbnF1b3RlZFZhbHVlIiwiaXNJZGVudCIsImlzQWxwaGEiLCJpc051bWJlciIsImlzTmFOIiwic3BlY2lhbENoYXJzIiwiZGVmYXVsdE9wdGlvbnMkMSIsImxvb2tBaGVhZCIsImV4dHJhY3RBYmJyZXZpYXRpb24kMSIsIm9mZnNldFBhc3RBdXRvQ2xvc2VkIiwiZ2V0U3RhcnRPZmZzZXQiLCJpc0Nsb3NlQnJhY2UiLCJpc09wZW5CcmFjZSIsImlzQWJicmV2aWF0aW9uIiwibG9jYXRpb24iLCJjb21waWxlZFByZWZpeCIsImNvbnN1bWVQYWlyIiwiY29uc3VtZUFycmF5IiwiY29uc3VtZWQiLCJleHBhbmRBYmJyZXZpYXRpb24kMSIsInJlc29sdmVkQ29uZmlnIiwiY3NzRGF0YSIsImh0bWxEYXRhIiwic25pcHBldEtleUNhY2hlIiwiTWFwIiwibWFya3VwU25pcHBldEtleXMiLCJzdHlsZXNoZWV0Q3VzdG9tU25pcHBldHNLZXlDYWNoZSIsImh0bWxBYmJyZXZpYXRpb25TdGFydFJlZ2V4IiwianN4QWJicmV2aWF0aW9uU3RhcnRSZWdleCIsImNzc0FiYnJldmlhdGlvblJlZ2V4IiwiaHRtbEFiYnJldmlhdGlvblJlZ2V4IiwiY29tbW9ubHlVc2VkVGFncyIsInRhZ3MiLCJiZW1GaWx0ZXJTdWZmaXgiLCJmaWx0ZXJEZWxpbWl0b3IiLCJ0cmltRmlsdGVyU3VmZml4IiwiY29tbWVudEZpbHRlclN1ZmZpeCIsIm1heEZpbHRlcnMiLCJkb0NvbXBsZXRlIiwibW9uYWNvIiwibW9kZWwiLCJwb3NpdGlvbiIsImVtbWV0Q29uZmlnIiwiaXNTdHlsZVNoZWV0UmVzIiwiaXNTdHlsZVNoZWV0IiwiaGFzIiwicmVnaXN0cnkiLCJnZXREZWZhdWx0U25pcHBldHMiLCJzZXQiLCJnZXQiLCJleHRyYWN0T3B0aW9ucyIsImdldFN5bnRheFR5cGUiLCJleHRyYWN0ZWRWYWx1ZSIsImV4dHJhY3RBYmJyZXZpYXRpb24iLCJhYmJyZXZpYXRpb25SYW5nZSIsImN1cnJlbnRMaW5lVGlsbFBvc2l0aW9uIiwiY3VycmVudFdvcmQiLCJnZXRDdXJyZW50V29yZCIsImVuZHNXaXRoIiwiZXhwYW5kT3B0aW9ucyIsImdldEV4cGFuZE9wdGlvbnMiLCJleHBhbmRlZFRleHQiLCJleHBhbmRlZEFiYnIiLCJjb21wbGV0aW9uSXRlbXMiLCJjcmVhdGVFeHBhbmRlZEFiYnIiLCJpc0FiYnJldmlhdGlvblZhbGlkIiwiaXNFeHBhbmRlZFRleHROb2lzZSIsImtpbmQiLCJsYW5ndWFnZXMiLCJDb21wbGV0aW9uSXRlbUtpbmQiLCJQcm9wZXJ0eSIsImxhYmVsIiwiZG9jdW1lbnRhdGlvbiIsInJlcGxhY2VUYWJTdG9wc1dpdGhDdXJzb3JzIiwiZGV0YWlsIiwiaW5zZXJ0VGV4dFJ1bGVzIiwiQ29tcGxldGlvbkl0ZW1JbnNlcnRUZXh0UnVsZSIsIkluc2VydEFzU25pcHBldCIsInJhbmdlIiwiZXNjYXBlTm9uVGFiU3RvcERvbGxhciIsImFkZEZpbmFsVGFiU3RvcCIsInByb3BlcnRpZXMiLCJzdWdnZXN0aW9ucyIsImluY29tcGxldGUiLCJyZW1vdmVUYWJTdG9wcyIsImZpbHRlclRleHQiLCJzdHlsZXNoZWV0Q3VzdG9tU25pcHBldHNLZXlzIiwibWFrZVNuaXBwZXRTdWdnZXN0aW9uIiwiYWJiclJlZ2V4IiwiUmVnRXhwIiwidGFnVG9GaW5kTW9yZVN1Z2dlc3Rpb25zRm9yIiwibmV3VGFnTWF0Y2hlcyIsImNvbW1vbmx5VXNlZFRhZ1N1Z2dlc3Rpb25zIiwic2hvd0FiYnJldmlhdGlvblN1Z2dlc3Rpb25zIiwiYWJicmV2aWF0aW9uU3VnZ2VzdGlvbnMiLCJzb3J0VGV4dCIsInNob3dTdWdnZXN0aW9uc0FzU25pcHBldHMiLCJTbmlwcGV0Iiwic25pcHBldEtleXMiLCJzbmlwcGV0RGV0YWlsIiwic2tpcEZ1bGxNYXRjaCIsInNuaXBwZXRDb21wbGV0aW9ucyIsInNuaXBwZXRLZXkiLCJjdXJyZW50QWJiciIsInN1YnN0ciIsImV4cGFuZGVkV29yZCIsIm1heFRhYlN0b3AiLCJtYXhUYWJTdG9wUmFuZ2VzIiwiZm91bmRMYXN0U3RvcCIsInJlcGxhY2VXaXRoTGFzdFN0b3AiLCJudW1iZXJTdGFydCIsIm51bWJlckVuZCIsImN1cnJlbnRUYWJTdG9wIiwiZm91bmRQbGFjZWhvbGRlciIsInJhbmdlU3RhcnQiLCJyYW5nZUVuZCIsImVtbWV0U25pcHBldEZpZWxkIiwic3ludGF4VHlwZSIsImVtcHR5VXNlckNvbmZpZyIsImdldEZpbHRlcnMiLCJjdXJyZW50TGluZSIsImdldExpbmVDb250ZW50IiwibGluZU51bWJlciIsImxlbmd0aE9jY3VwaWVkQnlGaWx0ZXIiLCJyYW5nZVRvUmVwbGFjZSIsIlJhbmdlIiwiaGV4Q29sb3JSZWdleCIsIl9iIiwiYmV0d2VlbiIsImVuZFByZWZpeEluZGV4IiwidGFnIiwiZG90TWF0Y2hlcyIsImZpbHRlcnMiLCJiZW1FbmFibGVkIiwiY29tbWVudEVuYWJsZWQiLCJjb21iaW5lZE9wdGlvbnMiLCJpc1ZhbGlkRW1tZXRUb2tlbiIsImxhbmd1YWdlIiwiY3VycmVudFRva2VuVHlwZSIsImlzVmFsaWRMb2NhdGlvbkZvckVtbWV0QWJicmV2aWF0aW9uIiwiX3Rva2VuaXphdGlvbiIsInRva2VuaXphdGlvbiIsIl90b2tlbml6YXRpb25TdGF0ZVN0b3JlIiwiX3Rva2VuaXphdGlvblN1cHBvcnQiLCJ0b2tlbml6YXRpb25TdXBwb3J0IiwiZ2V0QmVnaW5TdGF0ZSIsImNsb25lIiwidG9rZW5pemF0aW9uUmVzdWx0IiwidmFsaWQiLCJMQU5HVUFHRV9NT0RFUyIsImphZGUiLCJzY3NzIiwibGVzcyIsImphdmFzY3JpcHQiLCJ0eXBlc2NyaXB0IiwiTUFQUEVEX01PREVTIiwiaGFuZGxlYmFycyIsInBocCIsInR3aWciLCJERUZBVUxUX0NPTkZJRyIsInNob3dFeHBhbmRlZEFiYnJldmlhdGlvbiIsInJlZ2lzdGVyUHJvdmlkZXIiLCJjb25zb2xlIiwicHJvdmlkZXJzIiwicmVnaXN0ZXJDb21wbGV0aW9uSXRlbVByb3ZpZGVyIiwidHJpZ2dlckNoYXJhY3RlcnMiLCJwcm92aWRlQ29tcGxldGlvbkl0ZW1zIiwicHJvdmlkZXIiLCJkaXNwb3NlIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7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T0FBTztFQUNQLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLE9BQU87RUFDUCxRQUFRO0VBQ1IsT0FBTztFQUNQLE9BQU87RUFDUCxPQUFPO0VBQ1AsUUFBUTtFQUNSLFFBQVE7RUFDUixPQUFPO0VBQ1AsUUFBUTtFQUNSLFFBQVE7RUFDUixRQUFRO0VBQ1IsS0FBSztFQUNMLE1BQU07RUFDTixPQUFPO0VBQ1AsTUFBTTtFQUNOLE1BQU07RUFDTixPQUFPO0VBQ1AsT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsU0FBUztFQUNULFNBQVM7RUFDVCxTQUFTO0VBQ1QsVUFBVTtFQUNWLFVBQVU7RUFDVixVQUFVO0VBQ1YsU0FBUztFQUNULFNBQVM7RUFDVCxPQUFPO0VBQ1AsTUFBTTtFQUNOLE9BQU87RUFDUCxPQUFPO0VBQ1AsS0FBSztFQUNMLE1BQU07RUFDTixLQUFLO0VBQ0wsTUFBTTtFQUNOLE9BQU87RUFDUCxPQUFPO0VBQ1AsUUFBUTtFQUNSLFFBQVE7RUFDUixNQUFNO0VBQ04sT0FBTztFQUNQLE9BQU87RUFDUCxPQUFPO0VBQ1AsTUFBTTtFQUNOLE1BQU07RUFDTixPQUFPO0VBQ1AsT0FBTztFQUNQLE1BQU07RUFDTixPQUFPO0VBQ1AsTUFBTTtFQUNOLE1BQU07RUFDTixPQUFPO0VBQ1AsT0FBTztFQUNQLE9BQU87RUFDUCxPQUFPO0VBQ1AsUUFBUTtFQUNSLE9BQU87RUFDUCxPQUFPO0VBQ1AsUUFBUTtFQUNSLE9BQU87RUFDUCxPQUFPO0VBQ1AsT0FBTztFQUNQLE1BQU07RUFDTixNQUFNO0VBQ04sT0FBTztFQUNQLE9BQU87RUFDUCxPQUFPO0VBQ1AsT0FBTztFQUNQLE9BQU87RUFDUCxNQUFNO0VBQ04sTUFBTTtFQUNOLE9BQU87RUFDUCxPQUFPO0VBQ1AsTUFBTTtFQUNOLE9BQU87RUFDUCxPQUFPO0VBQ1AsTUFBTTtFQUNOLEtBQUs7RUFDTCxNQUFNO0VBQ04sTUFBTTtFQUNOLE1BQU07RUFDTixLQUFLO0VBQ0wsTUFBTTtFQUNOLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFFBQVE7RUFDUixRQUFRO0VBQ1IsT0FBTztFQUNQLEtBQUs7RUFDTCxPQUFPO0VBQ1AsT0FBTztFQUNQLE9BQU87RUFDUCxNQUFNO0VBQ04sT0FBTztFQUNQLE9BQU87RUFDUCxPQUFPO0VBQ1AsTUFBTTtFQUNOLE1BQU07RUFDTixNQUFNO0VBQ04sTUFBTTtFQUNOLE9BQU87RUFDUCxPQUFPO0VBQ1AsT0FBTztFQUNQLE9BQU87RUFDUCxVQUFVO0VBQ1YsT0FBTztFQUNQLE9BQU87RUFDUCxPQUFPO0VBQ1AsTUFBTTtFQUNOLE9BQU87RUFDUCxPQUFPO0VBQ1AsT0FBTztFQUNQLEtBQUs7RUFDTCxNQUFNO0VBQ04sUUFBUTtFQUNSLFFBQVE7RUFDUixRQUFRO0VBQ1IsTUFBTTtFQUNOLE9BQU87RUFDUCxNQUFNO0VBQ04sTUFBTTtFQUNOLEtBQUs7RUFDTCxPQUFPO0VBQ1AsT0FBTztFQUNQLEtBQUs7RUFDTCxPQUFPO0VBQ1AsS0FBSztFQUNMLE1BQU07RUFDTixPQUFPO0VBQ1AsT0FBTztFQUNQLE1BQU07RUFDTixNQUFNO0VBQ04sTUFBTTtFQUNOLE1BQU07RUFDTixNQUFNO0VBQ04sTUFBTTtFQUNOLE9BQU87RUFDUCxNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixRQUFRO0VBQ1IsT0FBTztFQUNQLFNBQVM7RUFDVCxTQUFTO0VBQ1QsUUFBUTtFQUNSLFNBQVM7RUFDVCxPQUFPO0VBQ1AsTUFBTTtFQUNOLE1BQU07RUFDTixNQUFNO0VBQ04sS0FBSztFQUNMLE1BQU07RUFDTixLQUFLO0VBQ0wsT0FBTztFQUNQLFFBQVE7RUFDUixPQUFPO0VBQ1AsTUFBTTtFQUNOLE9BQU87RUFDUCxPQUFPO0VBQ1AsT0FBTztFQUNQLEtBQUs7RUFDTCxPQUFPO0FBQ1I7QUFFQSxJQUFJcUMsY0FBYztFQUNkLGFBQWE7RUFDYixZQUFZO0VBQ1osUUFBUTtFQUNSLE1BQU07RUFDTixPQUFPO0VBQ1AsT0FBTztFQUNQLE9BQU87RUFDUCxNQUFNO0VBQ04sZUFBZTtFQUNmLE1BQU07RUFD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QUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxHQUFHO0VBQ3JHQyxZQUFZLENBQUMsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEdBQUc7QUFDekc7QUFFQSxJQUFNQyxlQUFlO0VBQ2pCQyxZQUFZO0VBQ1pDLEtBQUs7RUFDTEMsTUFBTTtBQUNWO0FBQ0EsSUFBTUMsaUJBQWlCO0VBQ25CQywwQkFBMEI7RUFDMUJuRSw2QkFBNkI7RUFDN0JHLDJCQUEyQjtBQUMvQjtBQVNBLFNBQVNpRSxpQkFBaUIxSCxRQUFRNkIsV0FBV2xOLFFBQVE7RUFDakQsSUFBSSxDQUFDcUwsUUFBUTtJQUNUMkgsUUFBUXR4QixNQUFNLDRGQUE0RjtJQUMxRztFQUNKO0VBQ0EsTUFBTXV4QixZQUFZL0YsVUFBVTVXLElBQUtpYixZQUFhbEcsT0FBTzZCLFVBQVVnRywrQkFBK0IzQixVQUFVO0lBQ3BHNEIsbUJBQW1CaEIsZUFBZU0sYUFBYWxCLGFBQWFBO0lBQzVENkIsd0JBQXdCLENBQUM5SCxPQUFPQyxhQUFha0csb0NBQW9DbkcsT0FBT0MsVUFBVXZMLFFBQVF1UixRQUFRLElBQzVHbkcsV0FBV0MsUUFBUUMsT0FBT0MsVUFBVXZMLFFBQVE2UyxjQUFjLElBQzFEO0VBQ1YsQ0FBQyxDQUFDO0VBQ0YsT0FBTyxNQUFNO0lBQ1RJLFVBQVVwZ0IsUUFBU3dnQixZQUFhQSxTQUFTQyxTQUFTO0VBQ3REO0FBQ0o7QUFDQSxTQUFTajBCLFVBQVVnc0IsU0FBU2tJLE9BQU9sSSxRQUFRNkIsWUFBWSxDQUFDLE1BQU0sR0FBRztFQUM3RCxPQUFPNkYsaUJBQWlCMUgsUUFBUTZCLFdBQVcsTUFBTTtBQUNyRDtBQUNBLFNBQVM5dEIsU0FBU2lzQixTQUFTa0ksT0FBT2xJLFFBQVE2QixZQUFZLENBQUMsS0FBSyxHQUFHO0VBQzNELE9BQU82RixpQkFBaUIxSCxRQUFRNkIsV0FBVyxLQUFLO0FBQ3BEO0FBQ0EsU0FBUzV0QixTQUFTK3JCLFNBQVNrSSxPQUFPbEksUUFBUTZCLFlBQVksQ0FBQyxZQUFZLEdBQUc7RUFDbEUsT0FBTzZGLGlCQUFpQjFILFFBQVE2QixXQUFXLEtBQUs7QUFDcEQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9wcm9qZWN0L291dCJ9