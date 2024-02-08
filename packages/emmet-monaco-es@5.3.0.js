define([], () => {

const bimport = specifier => {
	const dependencies = new Map([["emmet-monaco-es","5.3.0"]]);
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

// .beyond/uimport/temp/emmet-monaco-es.5.3.0.js
var emmet_monaco_es_5_3_0_exports = {};
__export(emmet_monaco_es_5_3_0_exports, {
  emmetCSS: () => emmetCSS,
  emmetHTML: () => emmetHTML,
  emmetJSX: () => emmetJSX,
  expandAbbreviation: () => expandAbbreviation,
  registerCustomSnippets: () => registerCustomSnippets
});
module.exports = __toCommonJS(emmet_monaco_es_5_3_0_exports);

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
function isUmlaut(code2) {
  return code2 === 196 || code2 == 214 || code2 === 220 || code2 === 228 || code2 === 246 || code2 === 252;
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
      result.repeat = repeater$1(scanner);
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
    let count = 1;
    while (isOperator$1(peek$3(scanner), type)) {
      scanner.pos++;
      count++;
    }
    const attr = {
      name: [createLiteral$1(type)]
    };
    if (count > 1) {
      attr.multiple = true;
    }
    if (options.jsx && text(scanner)) {
      attr.value = getText(scanner);
      attr.expression = true;
    } else {
      attr.value = literal$1$1(scanner) ? slice(scanner) : void 0;
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
  if (literal$1$1(scanner, true)) {
    const name = slice(scanner);
    let value;
    if (consume$2(scanner, isEquals)) {
      if (quoted(scanner) || literal$1$1(scanner, true)) {
        value = slice(scanner);
      }
    }
    return {
      name,
      value
    };
  }
}
function repeater$1(scanner) {
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
function literal$1$1(scanner, allowBrackets) {
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
  while (readable$1(scanner) && consume$2(scanner, isElementName$1)) {}
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
function isElementName$1(token) {
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
var Chars$3;
(function (Chars2) {
  Chars2[Chars2["CurlyBracketOpen"] = 123] = "CurlyBracketOpen";
  Chars2[Chars2["CurlyBracketClose"] = 125] = "CurlyBracketClose";
  Chars2[Chars2["Escape"] = 92] = "Escape";
  Chars2[Chars2["Equals"] = 61] = "Equals";
  Chars2[Chars2["SquareBracketOpen"] = 91] = "SquareBracketOpen";
  Chars2[Chars2["SquareBracketClose"] = 93] = "SquareBracketClose";
  Chars2[Chars2["Asterisk"] = 42] = "Asterisk";
  Chars2[Chars2["Hash"] = 35] = "Hash";
  Chars2[Chars2["Dollar"] = 36] = "Dollar";
  Chars2[Chars2["Dash"] = 45] = "Dash";
  Chars2[Chars2["Dot"] = 46] = "Dot";
  Chars2[Chars2["Slash"] = 47] = "Slash";
  Chars2[Chars2["Colon"] = 58] = "Colon";
  Chars2[Chars2["Excl"] = 33] = "Excl";
  Chars2[Chars2["At"] = 64] = "At";
  Chars2[Chars2["Underscore"] = 95] = "Underscore";
  Chars2[Chars2["RoundBracketOpen"] = 40] = "RoundBracketOpen";
  Chars2[Chars2["RoundBracketClose"] = 41] = "RoundBracketClose";
  Chars2[Chars2["Sibling"] = 43] = "Sibling";
  Chars2[Chars2["Child"] = 62] = "Child";
  Chars2[Chars2["Climb"] = 94] = "Climb";
  Chars2[Chars2["SingleQuote"] = 39] = "SingleQuote";
  Chars2[Chars2["DoubleQuote"] = 34] = "DoubleQuote";
})(Chars$3 || (Chars$3 = {}));
function escaped(scanner) {
  if (scanner.eat(Chars$3.Escape)) {
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
  return field$2(scanner, ctx) || repeaterPlaceholder(scanner) || repeaterNumber(scanner) || repeater(scanner) || whiteSpace$1(scanner) || literal$2(scanner, ctx) || operator$1(scanner) || quote(scanner) || bracket$1(scanner);
}
function literal$2(scanner, ctx) {
  const start = scanner.pos;
  const expressionStart2 = ctx.expression;
  let value = "";
  while (!scanner.eof()) {
    if (escaped(scanner)) {
      value += scanner.current();
      continue;
    }
    const ch = scanner.peek();
    if (ch === Chars$3.Slash && !ctx.quote && !ctx.expression && !ctx.attribute) {
      const prev = scanner.string.charCodeAt(scanner.pos - 1);
      const next2 = scanner.string.charCodeAt(scanner.pos + 1);
      if (isNumber$1(prev) && isNumber$1(next2)) {
        value += scanner.string[scanner.pos++];
        continue;
      }
    }
    if (ch === ctx.quote || ch === Chars$3.Dollar || isAllowedOperator(ch, ctx)) {
      break;
    }
    if (expressionStart2) {
      if (ch === Chars$3.CurlyBracketOpen) {
        ctx.expression++;
      } else if (ch === Chars$3.CurlyBracketClose) {
        if (ctx.expression > expressionStart2) {
          ctx.expression--;
        } else {
          break;
        }
      }
    } else if (!ctx.quote) {
      if (!ctx.attribute && !isElementName(ch)) {
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
      single: ch === Chars$3.SingleQuote,
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
function repeater(scanner) {
  const start = scanner.pos;
  if (scanner.eat(Chars$3.Asterisk)) {
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
  if (scanner.eat(Chars$3.Dollar) && scanner.eat(Chars$3.Hash)) {
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
  if (scanner.eatWhile(Chars$3.Dollar)) {
    const size = scanner.pos - start;
    let reverse = false;
    let base = 1;
    let parent = 0;
    if (scanner.eat(Chars$3.At)) {
      while (scanner.eat(Chars$3.Climb)) {
        parent++;
      }
      reverse = scanner.eat(Chars$3.Dash);
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
  if ((ctx.expression || ctx.attribute) && scanner.eat(Chars$3.Dollar) && scanner.eat(Chars$3.CurlyBracketOpen)) {
    scanner.start = scanner.pos;
    let index;
    let name = "";
    if (scanner.eatWhile(isNumber$1)) {
      index = Number(scanner.current());
      name = scanner.eat(Chars$3.Colon) ? consumePlaceholder$2(scanner) : "";
    } else if (isAlpha$1(scanner.peek())) {
      name = consumePlaceholder$2(scanner);
    }
    if (scanner.eat(Chars$3.CurlyBracketClose)) {
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
    if (stream.eat(Chars$3.CurlyBracketOpen)) {
      stack.push(stream.pos);
    } else if (stream.eat(Chars$3.CurlyBracketClose)) {
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
  return ch === Chars$3.Asterisk && !ctx.attribute && !ctx.expression;
}
function bracketType(ch) {
  if (ch === Chars$3.RoundBracketOpen || ch === Chars$3.RoundBracketClose) {
    return "group";
  }
  if (ch === Chars$3.SquareBracketOpen || ch === Chars$3.SquareBracketClose) {
    return "attribute";
  }
  if (ch === Chars$3.CurlyBracketOpen || ch === Chars$3.CurlyBracketClose) {
    return "expression";
  }
}
function operatorType$1(ch) {
  return ch === Chars$3.Child && "child" || ch === Chars$3.Sibling && "sibling" || ch === Chars$3.Climb && "climb" || ch === Chars$3.Dot && "class" || ch === Chars$3.Hash && "id" || ch === Chars$3.Slash && "close" || ch === Chars$3.Equals && "equal" || void 0;
}
function isOpenBracket$2(ch) {
  return ch === Chars$3.CurlyBracketOpen || ch === Chars$3.SquareBracketOpen || ch === Chars$3.RoundBracketOpen;
}
function isElementName(ch) {
  return isAlphaNumericWord(ch) || isUmlaut(ch) || ch === Chars$3.Dash || ch === Chars$3.Colon || ch === Chars$3.Excl;
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
    valueType,
    multiple: node.multiple
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
var OperatorType;
(function (OperatorType2) {
  OperatorType2["Sibling"] = "+";
  OperatorType2["Important"] = "!";
  OperatorType2["ArgumentDelimiter"] = ",";
  OperatorType2["ValueDelimiter"] = "-";
  OperatorType2["PropertyDelimiter"] = ":";
})(OperatorType || (OperatorType = {}));
var Chars$2;
(function (Chars2) {
  Chars2[Chars2["Hash"] = 35] = "Hash";
  Chars2[Chars2["Dollar"] = 36] = "Dollar";
  Chars2[Chars2["Dash"] = 45] = "Dash";
  Chars2[Chars2["Dot"] = 46] = "Dot";
  Chars2[Chars2["Colon"] = 58] = "Colon";
  Chars2[Chars2["Comma"] = 44] = "Comma";
  Chars2[Chars2["Excl"] = 33] = "Excl";
  Chars2[Chars2["At"] = 64] = "At";
  Chars2[Chars2["Percent"] = 37] = "Percent";
  Chars2[Chars2["Underscore"] = 95] = "Underscore";
  Chars2[Chars2["RoundBracketOpen"] = 40] = "RoundBracketOpen";
  Chars2[Chars2["RoundBracketClose"] = 41] = "RoundBracketClose";
  Chars2[Chars2["CurlyBracketOpen"] = 123] = "CurlyBracketOpen";
  Chars2[Chars2["CurlyBracketClose"] = 125] = "CurlyBracketClose";
  Chars2[Chars2["Sibling"] = 43] = "Sibling";
  Chars2[Chars2["SingleQuote"] = 39] = "SingleQuote";
  Chars2[Chars2["DoubleQuote"] = 34] = "DoubleQuote";
  Chars2[Chars2["Transparent"] = 116] = "Transparent";
  Chars2[Chars2["Slash"] = 47] = "Slash";
})(Chars$2 || (Chars$2 = {}));
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
  return field$1(scanner) || customProperty(scanner) || numberValue(scanner) || colorValue(scanner) || stringValue(scanner) || bracket(scanner) || operator(scanner) || whiteSpace(scanner) || literal$1(scanner, short);
}
function field$1(scanner) {
  const start = scanner.pos;
  if (scanner.eat(Chars$2.Dollar) && scanner.eat(Chars$2.CurlyBracketOpen)) {
    scanner.start = scanner.pos;
    let index;
    let name = "";
    if (scanner.eatWhile(isNumber$1)) {
      index = Number(scanner.current());
      name = scanner.eat(Chars$2.Colon) ? consumePlaceholder$1(scanner) : "";
    } else if (isAlpha$1(scanner.peek())) {
      name = consumePlaceholder$1(scanner);
    }
    if (scanner.eat(Chars$2.CurlyBracketClose)) {
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
    if (stream.eat(Chars$2.CurlyBracketOpen)) {
      stack.push(stream.pos);
    } else if (stream.eat(Chars$2.CurlyBracketClose)) {
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
    scanner.eatWhile(start ? isKeyword : isLiteral$1);
  } else if (scanner.eat(isAlphaWord)) {
    scanner.eatWhile(short ? isLiteral$1 : isKeyword);
  } else {
    scanner.eat(Chars$2.Dot);
    scanner.eatWhile(isLiteral$1);
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
    scanner.eat(Chars$2.Percent) || scanner.eatWhile(isAlphaWord);
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
      quote: ch === Chars$2.SingleQuote ? "single" : "double",
      start,
      end: scanner.pos
    };
  }
}
function colorValue(scanner) {
  const start = scanner.pos;
  if (scanner.eat(Chars$2.Hash)) {
    const valueStart = scanner.pos;
    let color2 = "";
    let alpha = "";
    if (scanner.eatWhile(isHex)) {
      color2 = scanner.substring(valueStart, scanner.pos);
      alpha = colorAlpha(scanner);
    } else if (scanner.eat(Chars$2.Transparent)) {
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
  if (scanner.eat(Chars$2.Dot)) {
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
function customProperty(scanner) {
  const start = scanner.pos;
  if (scanner.eat(Chars$2.Dash) && scanner.eat(Chars$2.Dash)) {
    scanner.start = start;
    scanner.eatWhile(isKeyword);
    return {
      type: "CustomProperty",
      value: scanner.current(),
      start,
      end: scanner.pos
    };
  }
  scanner.pos = start;
}
function bracket(scanner) {
  const ch = scanner.peek();
  if (isBracket$1(ch)) {
    return {
      type: "Bracket",
      open: ch === Chars$2.RoundBracketOpen,
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
  stream.eat(Chars$2.Dash);
  const afterNegative = stream.pos;
  const hasDecimal = stream.eatWhile(isNumber$1);
  const prevPos = stream.pos;
  if (stream.eat(Chars$2.Dot)) {
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
  return code2 === Chars$2.At || code2 === Chars$2.Dollar;
}
function operatorType(ch) {
  return ch === Chars$2.Sibling && OperatorType.Sibling || ch === Chars$2.Excl && OperatorType.Important || ch === Chars$2.Comma && OperatorType.ArgumentDelimiter || ch === Chars$2.Colon && OperatorType.PropertyDelimiter || ch === Chars$2.Dash && OperatorType.ValueDelimiter || void 0;
}
function isHex(code2) {
  return isNumber$1(code2) || isAlpha$1(code2, 65, 70);
}
function isKeyword(code2) {
  return isAlphaNumericWord(code2) || code2 === Chars$2.Dash;
}
function isBracket$1(code2) {
  return code2 === Chars$2.RoundBracketOpen || code2 === Chars$2.RoundBracketClose;
}
function isLiteral$1(code2) {
  return isAlphaWord(code2) || code2 === Chars$2.Percent || code2 === Chars$2.Slash;
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
  if (!valueMode && isLiteral(token) && !isFunctionStart(scanner)) {
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
      if (isLiteral(token) && (args = consumeArguments(scanner))) {
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
function isLiteral(token) {
  return token && token.type === "Literal";
}
function isBracket(token, open) {
  return token && token.type === "Bracket" && (open == null || token.open === open);
}
function isOpenBracket$1(token) {
  return isBracket(token, true);
}
function isCloseBracket$1(token) {
  return isBracket(token, false);
}
function isWhiteSpace$1(token) {
  return token && token.type === "WhiteSpace";
}
function isOperator(token, operator2) {
  return token && token.type === "Operator" && (!operator2 || token.operator === operator2);
}
function isSiblingOperator(token) {
  return isOperator(token, OperatorType.Sibling);
}
function isArgumentDelimiter(token) {
  return isOperator(token, OperatorType.ArgumentDelimiter);
}
function isFragmentDelimiter(token) {
  return isArgumentDelimiter(token);
}
function isImportant(token) {
  return isOperator(token, OperatorType.Important);
}
function isValue(token) {
  return token.type === "StringValue" || token.type === "ColorValue" || token.type === "NumberValue" || token.type === "Literal" || token.type === "Field" || token.type === "CustomProperty";
}
function isValueDelimiter(token) {
  return isOperator(token, OperatorType.PropertyDelimiter) || isOperator(token, OperatorType.ValueDelimiter);
}
function isFunctionStart(scanner) {
  const t1 = scanner.tokens[scanner.pos];
  const t2 = scanner.tokens[scanner.pos + 1];
  return t1 && t2 && isLiteral(t1) && t2.type === "Bracket";
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
function walk$1(node, fn, state) {
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
var expressionStart = "{";
var expressionEnd = "}";
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
  const lines = splitByLines$1(value);
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
    return isOpen ? expressionStart : expressionEnd;
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
function splitByLines$1(text2) {
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
function walk(abbr, visitor, state) {
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
function splitByLines(tokens) {
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
var TemplateChars;
(function (TemplateChars2) {
  TemplateChars2[TemplateChars2["Start"] = 91] = "Start";
  TemplateChars2[TemplateChars2["End"] = 93] = "End";
  TemplateChars2[TemplateChars2["Underscore"] = 95] = "Underscore";
  TemplateChars2[TemplateChars2["Dash"] = 45] = "Dash";
})(TemplateChars || (TemplateChars = {}));
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
  if (peek$1(scanner) === TemplateChars.Start) {
    const start = ++scanner.pos;
    let namePos = start;
    let afterPos = start;
    let stack = 1;
    while (scanner.pos < scanner.text.length) {
      const code2 = peek$1(scanner);
      if (isTokenStart(code2)) {
        namePos = scanner.pos;
        while (isToken(peek$1(scanner))) {
          scanner.pos++;
        }
        afterPos = scanner.pos;
      } else {
        if (code2 === TemplateChars.Start) {
          stack++;
        } else if (code2 === TemplateChars.End) {
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
function peek$1(scanner, pos = scanner.pos) {
  return scanner.text.charCodeAt(pos);
}
function isTokenStart(code2) {
  return code2 >= 65 && code2 <= 90;
}
function isToken(code2) {
  return isTokenStart(code2) || code2 > 47 && code2 < 58 || code2 === TemplateChars.Underscore || code2 === TemplateChars.Dash;
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
var reservedKeywords = /* @__PURE__ */new Set(["for", "while", "of", "async", "await", "const", "let", "var", "continue", "break", "debugger", "do", "export", "import", "in", "instanceof", "new", "return", "switch", "this", "throw", "try", "catch", "typeof", "void", "with", "yield"]);
function html(abbr, config) {
  const state = createWalkState(config);
  state.comment = createCommentState(config);
  walk(abbr, element$1, state);
  return state.out.value;
}
function element$1(node, index, items, state, next2) {
  const {
    out,
    config
  } = state;
  const format = shouldFormat$1(node, index, items, state);
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
    const attributes = config.options["markup.attributes"];
    const valuePrefix = config.options["markup.valuePrefix"];
    let {
      name,
      value
    } = attr;
    let lQuote = attrQuote(attr, config, true);
    let rQuote = attrQuote(attr, config);
    if (attributes) {
      name = getMultiValue(name, attributes, attr.multiple) || name;
    }
    name = attrName(name, config);
    const prefix = valuePrefix ? getMultiValue(attr.name, valuePrefix, attr.multiple) : null;
    if (prefix && (value === null || value === void 0 ? void 0 : value.length) === 1 && typeof value[0] === "string") {
      const val = value[0];
      value = [isPropKey(val) ? `${prefix}.${val}` : `${prefix}['${val}']`];
      if (config.options["jsx.enabled"]) {
        lQuote = expressionStart;
        rQuote = expressionEnd;
      }
    }
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
function shouldFormat$1(node, index, items, state) {
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
      if (shouldFormat$1(node.children[i], i, node.children, state)) {
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
function getMultiValue(key, data, multiple) {
  return multiple && data[`${key}*`] || data[key];
}
function isPropKey(name) {
  return !reservedKeywords.has(name) && /^[a-zA-Z_$][\w_$]*$/.test(name);
}
function indentFormat(abbr, config, options) {
  const state = createWalkState(config);
  state.options = options || {};
  walk(abbr, element, state);
  return state.out.value;
}
function element(node, index, items, state, next2) {
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
  if (shouldFormat(node, index, items, state)) {
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
  const lines = splitByLines(value);
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
function shouldFormat(node, index, items, state) {
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
function parse$1(abbr, config) {
  let oldTextValue;
  if (typeof abbr === "string") {
    const parseOpt = Object.assign({}, config);
    if (config.options["jsx.enabled"]) {
      parseOpt.jsx = true;
    }
    if (config.options["markup.href"]) {
      parseOpt.href = true;
    }
    abbr = parseAbbreviation(abbr, parseOpt);
    oldTextValue = config.text;
    config.text = void 0;
  }
  abbr = resolveSnippets(abbr, config);
  walk$1(abbr, transform, config);
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
  if (config.options["bem.enabled"]) {
    bem(node, ancestors, config);
  }
}
var CSSSnippetType;
(function (CSSSnippetType2) {
  CSSSnippetType2["Raw"] = "Raw";
  CSSSnippetType2["Property"] = "Property";
})(CSSSnippetType || (CSSSnippetType = {}));
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
      type: CSSSnippetType.Property,
      key,
      property: m[1],
      value: parsed,
      keywords,
      dependencies: []
    };
  }
  return {
    type: CSSSnippetType.Raw,
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
  return snippet.type === CSSSnippetType.Property;
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
var CSSAbbreviationScope = {
  Global: "@@global",
  Section: "@@section",
  Property: "@@property",
  Value: "@@value"
};
function css(abbr, config) {
  var _a;
  const out = createOutputStream(config.options);
  const format = config.options["output.format"];
  if (((_a = config.context) === null || _a === void 0 ? void 0 : _a.name) === CSSAbbreviationScope.Section) {
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
  } else if (token.type === "Literal" || token.type === "CustomProperty") {
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
function parse(abbr, config) {
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
      const snippet = snippets.find(s => s.type === CSSSnippetType.Property && s.property === propName);
      resolveValueKeywords(node, config, snippet, score);
      node.snippet = snippet;
    } else if (node.name) {
      const snippet = findBestMatch(node.name, snippets, score, true);
      node.snippet = snippet;
      if (snippet) {
        if (snippet.type === CSSSnippetType.Property) {
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
    return config.context.name === CSSAbbreviationScope.Value || !config.context.name.startsWith("@@");
  }
  return false;
}
function getSnippetsForScope(snippets, config) {
  if (config.context) {
    if (config.context.name === CSSAbbreviationScope.Section) {
      return snippets.filter(s => s.type === CSSSnippetType.Raw);
    }
    if (config.context.name === CSSAbbreviationScope.Property) {
      return snippets.filter(s => s.type === CSSSnippetType.Property);
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
  "meta:refresh": "meta[http-equiv=refresh content='${1:5}']",
  "meta:kw": "meta[name=keywords content]",
  "meta:desc": "meta[name=description content]",
  "style": "style",
  "script": "script",
  "script:src": "script[src]",
  "script:module": "script[type=module src]",
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
  "doc": "html[lang=${lang}]>(head>meta[charset=${charset}]+meta:vp+title{${1:Document}})+body",
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
  "bg:n": "background: none",
  "bga": "background-attachment:fixed|scroll",
  "bgbk": "background-break:bounding-box|each-box|continuous",
  "bgc": "background-color:${1:#fff}",
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
  "d": "display:block|none|flex|inline-flex|inline|inline-block|grid|inline-grid|subgrid|list-item|run-in|contents|table|inline-table|table-caption|table-column|table-column-group|table-header-group|table-footer-group|table-row|table-row-group|table-cell|ruby|ruby-base|ruby-base-group|ruby-text|ruby-text-group",
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
  "g": "gap",
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
var defaultOptions$1 = {
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
  options: defaultOptions$1
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
      "jsx.enabled": true,
      "markup.attributes": {
        "class": "className",
        "class*": "styleName",
        "for": "htmlFor"
      },
      "markup.valuePrefix": {
        "class*": "styles"
      }
    }
  },
  vue: {
    options: {
      "markup.attributes": {
        "class*": ":class"
      }
    }
  },
  svelte: {
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
function peek(scanner, offset = 0) {
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
  const ok = typeof match === "function" ? match(peek(scanner)) : match === peek(scanner);
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
var Chars$1;
(function (Chars2) {
  Chars2[Chars2["SingleQuote"] = 39] = "SingleQuote";
  Chars2[Chars2["DoubleQuote"] = 34] = "DoubleQuote";
  Chars2[Chars2["Escape"] = 92] = "Escape";
})(Chars$1 || (Chars$1 = {}));
function isQuote(c) {
  return c === Chars$1.SingleQuote || c === Chars$1.DoubleQuote;
}
function consumeQuoted(scanner) {
  const start = scanner.pos;
  const quote2 = previous(scanner);
  if (isQuote(quote2)) {
    while (!sol(scanner)) {
      if (previous(scanner) === quote2 && peek(scanner) !== Chars$1.Escape) {
        return true;
      }
    }
  }
  scanner.pos = start;
  return false;
}
var Brackets;
(function (Brackets2) {
  Brackets2[Brackets2["SquareL"] = 91] = "SquareL";
  Brackets2[Brackets2["SquareR"] = 93] = "SquareR";
  Brackets2[Brackets2["RoundL"] = 40] = "RoundL";
  Brackets2[Brackets2["RoundR"] = 41] = "RoundR";
  Brackets2[Brackets2["CurlyL"] = 123] = "CurlyL";
  Brackets2[Brackets2["CurlyR"] = 125] = "CurlyR";
})(Brackets || (Brackets = {}));
var bracePairs = {
  [Brackets.SquareL]: Brackets.SquareR,
  [Brackets.RoundL]: Brackets.RoundR,
  [Brackets.CurlyL]: Brackets.CurlyR
};
var Chars;
(function (Chars2) {
  Chars2[Chars2["Tab"] = 9] = "Tab";
  Chars2[Chars2["Space"] = 32] = "Space";
  Chars2[Chars2["Dash"] = 45] = "Dash";
  Chars2[Chars2["Slash"] = 47] = "Slash";
  Chars2[Chars2["Colon"] = 58] = "Colon";
  Chars2[Chars2["Equals"] = 61] = "Equals";
  Chars2[Chars2["AngleLeft"] = 60] = "AngleLeft";
  Chars2[Chars2["AngleRight"] = 62] = "AngleRight";
})(Chars || (Chars = {}));
function isHtml(scanner) {
  const start = scanner.pos;
  if (!consume(scanner, Chars.AngleRight)) {
    return false;
  }
  let ok = false;
  consume(scanner, Chars.Slash);
  while (!sol(scanner)) {
    consumeWhile(scanner, isWhiteSpace);
    if (consumeIdent(scanner)) {
      if (consume(scanner, Chars.Slash)) {
        ok = consume(scanner, Chars.AngleLeft);
        break;
      } else if (consume(scanner, Chars.AngleLeft)) {
        ok = true;
        break;
      } else if (consume(scanner, isWhiteSpace)) {
        continue;
      } else if (consume(scanner, Chars.Equals)) {
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
  if (consumeQuoted(scanner) && consume(scanner, Chars.Equals) && consumeIdent(scanner)) {
    return true;
  }
  scanner.pos = start;
  return false;
}
function consumeAttributeWithUnquotedValue(scanner) {
  const start = scanner.pos;
  const stack = [];
  while (!sol(scanner)) {
    const ch = peek(scanner);
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
  if (start !== scanner.pos && consume(scanner, Chars.Equals) && consumeIdent(scanner)) {
    return true;
  }
  scanner.pos = start;
  return false;
}
function consumeIdent(scanner) {
  return consumeWhile(scanner, isIdent);
}
function isIdent(ch) {
  return ch === Chars.Colon || ch === Chars.Dash || isAlpha(ch) || isNumber(ch);
}
function isAlpha(ch) {
  ch &= ~32;
  return ch >= 65 && ch <= 90;
}
function isNumber(ch) {
  return ch > 47 && ch < 58;
}
function isWhiteSpace(ch) {
  return ch === Chars.Space || ch === Chars.Tab;
}
function isUnquotedValue(ch) {
  return !isNaN(ch) && ch !== Chars.Equals && !isWhiteSpace(ch) && !isQuote(ch);
}
function isOpenBracket(ch) {
  return ch === Brackets.CurlyL || ch === Brackets.RoundL || ch === Brackets.SquareL;
}
function isCloseBracket(ch) {
  return ch === Brackets.CurlyR || ch === Brackets.RoundR || ch === Brackets.SquareR;
}
var code = ch => ch.charCodeAt(0);
var specialChars = "#.*:$-_!@%^+>/".split("").map(code);
var defaultOptions = {
  type: "markup",
  lookAhead: true,
  prefix: ""
};
function extractAbbreviation$1(line, pos = line.length, options = {}) {
  const opt2 = Object.assign(Object.assign({}, defaultOptions), options);
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
    ch = peek(scanner);
    if (stack.includes(Brackets.CurlyR)) {
      if (ch === Brackets.CurlyR) {
        stack.push(ch);
        scanner.pos--;
        continue;
      }
      if (ch !== Brackets.CurlyL) {
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
    } else if (stack.includes(Brackets.SquareR) || stack.includes(Brackets.CurlyR)) {
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
    if (consumePair(scanner, Brackets.SquareR, Brackets.SquareL) || consumePair(scanner, Brackets.CurlyR, Brackets.CurlyL)) {
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
  return ch === Brackets.RoundL || syntax === "markup" && (ch === Brackets.SquareL || ch === Brackets.CurlyL);
}
function isCloseBrace(ch, syntax) {
  return ch === Brackets.RoundR || syntax === "markup" && (ch === Brackets.SquareR || ch === Brackets.CurlyR);
}
function expandAbbreviation$1(abbr, config) {
  const resolvedConfig = resolveConfig(config);
  return resolvedConfig.type === "stylesheet" ? stylesheet(abbr, resolvedConfig) : markup(abbr, resolvedConfig);
}
function markup(abbr, config) {
  return stringify(parse$1(abbr, config), config);
}
function stylesheet(abbr, config) {
  return css(parse(abbr, config), config);
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
      const registry = Object.assign(Object.assign({}, getDefaultSnippets(syntax)), customSnippetsRegistry[syntax]);
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
var customSnippetsRegistry = {};
var emmetSnippetField = (index, placeholder) => `\${${index}${placeholder ? ":" + placeholder : ""}}`;
function isStyleSheet(syntax) {
  return syntax === "css";
}
function getSyntaxType(syntax) {
  return isStyleSheet(syntax) ? "stylesheet" : "markup";
}
function getDefaultSyntax(syntax) {
  return isStyleSheet(syntax) ? "css" : "html";
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
  var _a;
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
  const type = getSyntaxType(syntax);
  const baseSyntax = getDefaultSyntax(syntax);
  const snippets = type === "stylesheet" ? (_a = customSnippetsRegistry[syntax]) !== null && _a !== void 0 ? _a : customSnippetsRegistry[baseSyntax] : customSnippetsRegistry[syntax];
  return {
    type,
    options: combinedOptions,
    variables: {},
    snippets,
    syntax,
    text: void 0,
    maxRepeat: 1e3
  };
}
function registerCustomSnippets(syntax, customSnippets) {
  const baseSyntax = getDefaultSyntax(syntax);
  if (baseSyntax !== syntax && customSnippetsRegistry[baseSyntax]) {
    customSnippets = Object.assign({}, customSnippetsRegistry[baseSyntax], customSnippets);
  }
  if (isStyleSheet(syntax)) {
    const prevSnippetKeys = stylesheetCustomSnippetsKeyCache.get(syntax);
    const mergedSnippetKeys = Object.assign([], prevSnippetKeys, Object.keys(customSnippets));
    stylesheetCustomSnippetsKeyCache.set(syntax, mergedSnippetKeys);
  }
  const prevSnippetsRegistry = customSnippetsRegistry[syntax];
  const mergedSnippets = Object.assign({}, prevSnippetsRegistry, customSnippets);
  customSnippetsRegistry[syntax] = mergedSnippets;
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
var tokenEnvCache = /* @__PURE__ */new WeakMap();
function getTokenizationEnv(model) {
  if (tokenEnvCache.has(model)) return tokenEnvCache.get(model);
  let _tokenization = model._tokenization || model.tokenization._tokenization;
  let _tokenizationStateStore = _tokenization === null || _tokenization === void 0 ? void 0 : _tokenization._tokenizationStateStore;
  if (!_tokenization || !_tokenizationStateStore) {
    const _t = model.tokenization;
    if (_t.grammarTokens) {
      _tokenization = _t.grammarTokens._defaultBackgroundTokenizer;
      _tokenizationStateStore = _tokenization._tokenizerWithStateStore;
    } else {
      Object.values(_t).some(val => _tokenization = val.tokenizeViewport && val);
      Object.values(_tokenization).some(val => _tokenizationStateStore = val.tokenizationSupport && val);
    }
  }
  const _tokenizationSupport = _tokenizationStateStore.tokenizationSupport || _tokenization._tokenizationSupport;
  const env = {
    _stateStore: _tokenizationStateStore,
    _support: _tokenizationSupport
  };
  tokenEnvCache.set(model, env);
  return env;
}
function isValidLocationForEmmetAbbreviation(model, position, syntax, language) {
  var _a;
  const {
    column,
    lineNumber
  } = position;
  const {
    _stateStore,
    _support
  } = getTokenizationEnv(model);
  const state = ((_a = _stateStore.getBeginState) === null || _a === void 0 ? void 0 : _a.call(_stateStore, lineNumber - 1).clone()) || _stateStore.getStartState(lineNumber).clone();
  const tokenizationResult = _support.tokenize(model.getLineContent(lineNumber), true, state, 0);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL2VtbWV0LW1vbmFjby1lcy41LjMuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbW1ldC1tb25hY28tZXMvZGlzdC9lbW1ldC1tb25hY28uZXNtLmpzIl0sIm5hbWVzIjpbImVtbWV0X21vbmFjb19lc181XzNfMF9leHBvcnRzIiwiX19leHBvcnQiLCJlbW1ldENTUyIsImVtbWV0SFRNTCIsImVtbWV0SlNYIiwiZXhwYW5kQWJicmV2aWF0aW9uIiwicmVnaXN0ZXJDdXN0b21TbmlwcGV0cyIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpc051bWJlciQxIiwiY29kZTIiLCJpc0FscGhhJDEiLCJmcm9tIiwidG8iLCJpc0FscGhhTnVtZXJpY1dvcmQiLCJpc0FscGhhV29yZCIsImlzVW1sYXV0IiwiaXNXaGl0ZVNwYWNlJDMiLCJpc1NwYWNlIiwiaXNRdW90ZSQyIiwiU2Nhbm5lciIsImNvbnN0cnVjdG9yIiwic3RyIiwic3RhcnQiLCJlbmQiLCJsZW5ndGgiLCJzdHJpbmciLCJwb3MiLCJlb2YiLCJsaW1pdCIsInBlZWsiLCJjaGFyQ29kZUF0IiwibmV4dCIsImVhdCIsIm1hdGNoIiwiY2giLCJvayIsImVhdFdoaWxlIiwiYmFja1VwIiwibiIsImN1cnJlbnQiLCJzdWJzdHJpbmciLCJzbGljZSIsImVycm9yIiwibWVzc2FnZSIsIlNjYW5uZXJFcnJvciIsIkVycm9yIiwidG9rZW5TY2FubmVyJDEiLCJ0b2tlbnMiLCJzaXplIiwicGVlayQzIiwic2Nhbm5lciIsInJlYWRhYmxlJDEiLCJjb25zdW1lJDIiLCJ0ZXN0IiwidG9rZW4iLCJlcnJvciQxIiwiZXJyIiwiYWJicmV2aWF0aW9uIiwiYWJiciIsIm9wdGlvbnMiLCJyZXN1bHQiLCJzdGF0ZW1lbnRzIiwidHlwZSIsImVsZW1lbnRzIiwiY3R4Iiwibm9kZSIsInN0YWNrIiwiZWxlbWVudCQyIiwiZ3JvdXAiLCJwdXNoIiwiaXNDaGlsZE9wZXJhdG9yIiwiaXNTaWJsaW5nT3BlcmF0b3IkMSIsImlzQ2xpbWJPcGVyYXRvciIsInBvcCIsImlzR3JvdXBTdGFydCIsImlzQnJhY2tldCQyIiwicmVwZWF0IiwicmVwZWF0ZXIkMSIsImF0dHIiLCJlbGVtIiwibmFtZSIsImF0dHJpYnV0ZXMiLCJ2YWx1ZSIsInNlbGZDbG9zZSIsImVsZW1lbnROYW1lIiwiaXNFbXB0eSIsImlzUmVwZWF0ZXIiLCJ0ZXh0IiwiZ2V0VGV4dCIsInNob3J0QXR0cmlidXRlIiwiYXR0cmlidXRlU2V0IiwiQXJyYXkiLCJpc0FycmF5IiwiY29uY2F0IiwiaXNDbG9zZU9wZXJhdG9yIiwiaXNBdHRyaWJ1dGVTZXRTdGFydCIsImF0dHJpYnV0ZSIsImlzQXR0cmlidXRlU2V0RW5kIiwiaXNXaGl0ZVNwYWNlJDIiLCJpc09wZXJhdG9yJDEiLCJjb3VudCIsImNyZWF0ZUxpdGVyYWwkMSIsIm11bHRpcGxlIiwianN4IiwiZXhwcmVzc2lvbiIsImxpdGVyYWwkMSQxIiwicXVvdGVkIiwiaXNFcXVhbHMiLCJxdW90ZTIiLCJpc1F1b3RlJDEiLCJzaW5nbGUiLCJhbGxvd0JyYWNrZXRzIiwiYnJhY2tldHMiLCJjb250ZXh0Iiwib3BlbiIsImlzQ2FwaXRhbGl6ZWRMaXRlcmFsIiwiaXNDbGFzc05hbWVPcGVyYXRvciIsImlzRWxlbWVudE5hbWUkMSIsImlzVGV4dFN0YXJ0IiwiaXNPcGVuIiwiQm9vbGVhbiIsIm9wZXJhdG9yIiwiaXNTaW5nbGUiLCJpc0xpdGVyYWwkMiIsIkNoYXJzJDMiLCJDaGFyczIiLCJlc2NhcGVkIiwiRXNjYXBlIiwidG9rZW5pemUkMSIsInNvdXJjZSIsInF1b3RlIiwiZ2V0VG9rZW4kMSIsImZpZWxkJDIiLCJyZXBlYXRlclBsYWNlaG9sZGVyIiwicmVwZWF0ZXJOdW1iZXIiLCJyZXBlYXRlciIsIndoaXRlU3BhY2UkMSIsImxpdGVyYWwkMiIsIm9wZXJhdG9yJDEiLCJicmFja2V0JDEiLCJleHByZXNzaW9uU3RhcnQyIiwiU2xhc2giLCJwcmV2IiwibmV4dDIiLCJEb2xsYXIiLCJpc0FsbG93ZWRPcGVyYXRvciIsIkN1cmx5QnJhY2tldE9wZW4iLCJDdXJseUJyYWNrZXRDbG9zZSIsImlzRWxlbWVudE5hbWUiLCJpc0FsbG93ZWRTcGFjZSIsImlzQWxsb3dlZFJlcGVhdGVyIiwiYnJhY2tldFR5cGUiLCJTaW5nbGVRdW90ZSIsImlzT3BlbkJyYWNrZXQkMiIsIm9wIiwib3BlcmF0b3JUeXBlJDEiLCJBc3RlcmlzayIsImltcGxpY2l0IiwiTnVtYmVyIiwiSGFzaCIsInJldmVyc2UiLCJiYXNlIiwicGFyZW50IiwiQXQiLCJDbGltYiIsIkRhc2giLCJpbmRleCIsIkNvbG9uIiwiY29uc3VtZVBsYWNlaG9sZGVyJDIiLCJzdHJlYW0iLCJSb3VuZEJyYWNrZXRPcGVuIiwiUm91bmRCcmFja2V0Q2xvc2UiLCJTcXVhcmVCcmFja2V0T3BlbiIsIlNxdWFyZUJyYWNrZXRDbG9zZSIsIkNoaWxkIiwiU2libGluZyIsIkRvdCIsIkVxdWFscyIsIkV4Y2wiLCJvcGVyYXRvcnMiLCJjaGlsZCIsImNsYXNzIiwiY2xpbWIiLCJpZCIsImVxdWFsIiwiY2xvc2UiLCJzaWJsaW5nIiwidG9rZW5WaXNpdG9yIiwiTGl0ZXJhbCIsIlF1b3RlIiwiQnJhY2tldCIsIk9wZXJhdG9yIiwiRmllbGQiLCJzdGF0ZSIsImdldFZhcmlhYmxlIiwiUmVwZWF0ZXJQbGFjZWhvbGRlciIsInJlcGVhdGVyMiIsImkiLCJyZXBlYXRlcnMiLCJpbnNlcnRlZCIsIlJlcGVhdGVyTnVtYmVyIiwibGFzdEl4IiwicGFyZW50SXgiLCJNYXRoIiwibWF4IiwicGFyZW50UmVwZWF0ZXIiLCJTdHJpbmciLCJXaGl0ZVNwYWNlIiwic3RyaW5naWZ5JDEiLCJ1cmxSZWdleCIsImVtYWlsUmVnZXgiLCJjb252ZXJ0IiwidGV4dEluc2VydGVkIiwiY2xlYW5UZXh0IiwiZmlsdGVyIiwicyIsInRyaW0iLCJjaGlsZHJlbiIsImNvbnZlcnRHcm91cCIsInJlcGVhdEd1YXJkIiwibWF4UmVwZWF0IiwiUE9TSVRJVkVfSU5GSU5JVFkiLCJfYSIsImpvaW4iLCJ2YXJWYWx1ZSIsInZhcmlhYmxlcyIsImRlZXBlc3QiLCJkZWVwZXN0Tm9kZSIsImxhc3QkMSIsInRleHQyIiwiaW5zZXJ0VGV4dCIsImhyZWYiLCJpbnNlcnRIcmVmIiwiY29udmVydFN0YXRlbWVudCIsIm9yaWdpbmFsIiwiT2JqZWN0IiwiYXNzaWduIiwiaXRlbXMiLCJpc0dyb3VwIiwiY29udmVydEVsZW1lbnQiLCJ0YXJnZXQiLCJzdHJpbmdpZnlOYW1lIiwic3RyaW5naWZ5VmFsdWUkMSIsInNlbGZDbG9zaW5nIiwiY29udmVydEF0dHJpYnV0ZSIsInNvbWUiLCJpc0ZpZWxkJDEiLCJhdHRhY2hSZXBlYXRlciIsImltcGxpZWQiLCJpc0Jvb2xlYW4iLCJ2YWx1ZVR5cGUiLCJzaGlmdCIsImJvb2xlYW4iLCJhcnIiLCJsYXN0VG9rZW4iLCJzdGFydHNXaXRoIiwiaHJlZkF0dHJpYnV0ZSIsImZpbmQiLCJpdGVtIiwicGFyc2VBYmJyZXZpYXRpb24iLCJPcGVyYXRvclR5cGUiLCJPcGVyYXRvclR5cGUyIiwiQ2hhcnMkMiIsInRva2VuaXplIiwiaXNWYWx1ZTIiLCJnZXRUb2tlbiIsIm1lcmdlVG9rZW5zIiwic2hvdWxkQ29uc3VtZURhc2hBZnRlciIsInNob3J0IiwiZmllbGQkMSIsImN1c3RvbVByb3BlcnR5IiwibnVtYmVyVmFsdWUiLCJjb2xvclZhbHVlIiwic3RyaW5nVmFsdWUiLCJicmFja2V0Iiwid2hpdGVTcGFjZSIsImxpdGVyYWwkMSIsImNvbnN1bWVQbGFjZWhvbGRlciQxIiwiaXNJZGVudFByZWZpeCIsImlzS2V5d29yZCIsImlzTGl0ZXJhbCQxIiwiY3JlYXRlTGl0ZXJhbCIsImNvbnN1bWVOdW1iZXIiLCJyYXdWYWx1ZSIsIlBlcmNlbnQiLCJ1bml0IiwiZmluaXNoZWQiLCJ2YWx1ZVN0YXJ0IiwiY29sb3IyIiwiYWxwaGEiLCJpc0hleCIsImNvbG9yQWxwaGEiLCJUcmFuc3BhcmVudCIsInIiLCJnIiwiYiIsImEiLCJwYXJzZUNvbG9yIiwicmF3IiwiaXNCcmFja2V0JDEiLCJvcGVyYXRvclR5cGUiLCJhZnRlck5lZ2F0aXZlIiwiaGFzRGVjaW1hbCIsInByZXZQb3MiLCJoYXNGbG9hdCIsIkltcG9ydGFudCIsIkNvbW1hIiwiQXJndW1lbnREZWxpbWl0ZXIiLCJQcm9wZXJ0eURlbGltaXRlciIsIlZhbHVlRGVsaW1pdGVyIiwicGFyc2VJbnQiLCJsYXN0IiwidG9rZW5TY2FubmVyIiwicGVlayQyIiwicmVhZGFibGUiLCJjb25zdW1lJDEiLCJwYXJzZXIiLCJwcm9wZXJ0eTIiLCJjb25zdW1lUHJvcGVydHkiLCJpc1NpYmxpbmdPcGVyYXRvciIsImltcG9ydGFudCIsInZhbHVlRnJhZ21lbnQiLCJ2YWx1ZU1vZGUiLCJpc0xpdGVyYWwiLCJpc0Z1bmN0aW9uU3RhcnQiLCJpc1ZhbHVlRGVsaW1pdGVyIiwiaXNXaGl0ZVNwYWNlJDEiLCJpc0ltcG9ydGFudCIsImNvbnN1bWVWYWx1ZSIsImlzRnJhZ21lbnREZWxpbWl0ZXIiLCJpbkFyZ3VtZW50IiwiYXJncyIsImlzVmFsdWUiLCJjb25zdW1lQXJndW1lbnRzIiwiYXJndW1lbnRzIiwiaXNPcGVuQnJhY2tldCQxIiwiaXNDbG9zZUJyYWNrZXQkMSIsImlzQXJndW1lbnREZWxpbWl0ZXIiLCJpc0JyYWNrZXQiLCJpc09wZXJhdG9yIiwib3BlcmF0b3IyIiwidDEiLCJ0MiIsInBhcnNlJDIiLCJtZXJnZUF0dHJpYnV0ZXMiLCJjb25maWciLCJsb29rdXAiLCJhdHRyTmFtZTIiLCJtZXJnZVZhbHVlIiwibWVyZ2VEZWNsYXJhdGlvbnMiLCJnbHVlIiwiYXBwZW5kIiwidCIsImRlc3QiLCJzcmMiLCJ3YWxrJDEiLCJmbiIsImFuY2VzdG9ycyIsImNhbGxiYWNrIiwiZm9yRWFjaCIsImZpbmREZWVwZXN0IiwiaXNOb2RlIiwicmVzb2x2ZVNuaXBwZXRzIiwicmV2ZXJzZWQiLCJyZXNvbHZlIiwic25pcHBldCIsInNuaXBwZXRzIiwiaW5jbHVkZXMiLCJzbmlwcGV0QWJiciIsIndhbGtSZXNvbHZlIiwidG9wTm9kZSIsIm1lcmdlTm9kZXMiLCJyZXNvbHZlZCIsImV4cHJlc3Npb25TdGFydCIsImV4cHJlc3Npb25FbmQiLCJjcmVhdGVPdXRwdXRTdHJlYW0iLCJsZXZlbCIsIm9mZnNldCIsImxpbmUiLCJjb2x1bW4iLCJwcm9jZXNzVGV4dCIsIl9wdXNoIiwicHVzaFN0cmluZyIsImxpbmVzIiwic3BsaXRCeUxpbmVzJDEiLCJpbCIsInB1c2hOZXdsaW5lIiwiaW5kZW50IiwiYmFzZUluZGVudCIsIm5ld2xpbmUiLCJwdXNoSW5kZW50IiwicHVzaEZpZWxkIiwicGxhY2Vob2xkZXIiLCJmaWVsZDIiLCJ0YWdOYW1lIiwic3RyQ2FzZSIsImF0dHJOYW1lIiwiYXR0clF1b3RlIiwiaXNCb29sZWFuQXR0cmlidXRlIiwidG9Mb3dlckNhc2UiLCJpc0lubGluZSIsImlubGluZUVsZW1lbnRzIiwic3BsaXQiLCJ0b1VwcGVyQ2FzZSIsImVsZW1lbnRNYXAiLCJwIiwidWwiLCJvbCIsInRhYmxlIiwidHIiLCJ0Ym9keSIsInRoZWFkIiwidGZvb3QiLCJjb2xncm91cCIsInNlbGVjdCIsIm9wdGdyb3VwIiwiYXVkaW8iLCJ2aWRlbyIsIm9iamVjdCIsIm1hcCIsImltcGxpY2l0VGFnIiwicmVzb2x2ZUltcGxpY2l0VGFnIiwiZ2V0UGFyZW50RWxlbWVudCIsImNvbnRleHROYW1lIiwicGFyZW50TmFtZSIsImxvd2VyY2FzZSIsImxhdGluIiwicnUiLCJzcCIsInZvY2FidWxhcmllcyIsInJlTG9yZW0iLCJsb3JlbSIsIm0iLCJkYiIsIm1pbldvcmRDb3VudCIsIm1heFdvcmRDb3VudCIsIndvcmRDb3VudCIsInJhbmQiLCJmaW5kUmVwZWF0ZXIiLCJwYXJhZ3JhcGgiLCJmbG9vciIsInJhbmRvbSIsInNhbXBsZSIsImxlbiIsIml0ZXJhdGlvbnMiLCJtaW4iLCJjaG9pY2UiLCJ2YWwiLCJzZW50ZW5jZSIsIndvcmRzIiwiY2FwaXRhbGl6ZSIsIndvcmQiLCJpbnNlcnRDb21tYXMiLCJoYXNDb21tYSIsInRvdGFsQ29tbWFzIiwiZGljdCIsInN0YXJ0V2l0aENvbW1vbiIsInRvdGFsV29yZHMiLCJjb21tb24iLCJlbGVtZW50MiIsInhzbCIsIm1hdGNoZXNOYW1lIiwiaXNBbGxvd2VkIiwicmVFbGVtZW50IiwicmVNb2RpZmllciIsImJsb2NrQ2FuZGlkYXRlczEiLCJjbGFzc05hbWUiLCJibG9ja0NhbmRpZGF0ZXMyIiwiYmVtIiwiZXhwYW5kQ2xhc3NOYW1lcyIsImV4cGFuZFNob3J0Tm90YXRpb24iLCJkYXRhIiwiZ2V0QkVNRGF0YSIsImNsYXNzTmFtZXMiLCJjbCIsIml4IiwiaW5kZXhPZiIsInVuaXF1ZUNsYXNzIiwiYmxvY2siLCJmaW5kQmxvY2tOYW1lIiwidXBkYXRlQ2xhc3MiLCJwYXRoIiwicHJlZml4Iiwib3JpZ2luYWxDbGFzcyIsImdldEJsb2NrTmFtZSIsImFyckNsYXNzTmFtZXMiLCJfYmVtIiwiY2xhc3NWYWx1ZSIsInN0cmluZ2lmeVZhbHVlIiwicGFyc2VCRU0iLCJnZXRCRU1EYXRhRnJvbUNvbnRleHQiLCJkZXB0aCIsIm1heFBhcmVudEl4Iiwid2FsayIsInZpc2l0b3IiLCJjcmVhdGVXYWxrU3RhdGUiLCJmaWVsZCIsIm91dCIsImNhcmV0IiwiaXNTbmlwcGV0IiwiaXNJbmxpbmVFbGVtZW50IiwiaXNGaWVsZCIsInB1c2hUb2tlbnMiLCJsYXJnZXN0SW5kZXgiLCJzcGxpdEJ5TGluZXMiLCJzaG91bGRPdXRwdXRBdHRyaWJ1dGUiLCJUZW1wbGF0ZUNoYXJzIiwiVGVtcGxhdGVDaGFyczIiLCJ0ZW1wbGF0ZSIsImNvbnN1bWVQbGFjZWhvbGRlciIsInBlZWskMSIsIlN0YXJ0IiwibmFtZVBvcyIsImFmdGVyUG9zIiwiaXNUb2tlblN0YXJ0IiwiaXNUb2tlbiIsIkVuZCIsImJlZm9yZSIsImFmdGVyIiwiVW5kZXJzY29yZSIsImNyZWF0ZUNvbW1lbnRTdGF0ZSIsImVuYWJsZWQiLCJ0cmlnZ2VyIiwiY29tbWVudE5vZGVCZWZvcmUiLCJzaG91bGRDb21tZW50IiwiY29tbWVudCIsIm91dHB1dCIsImNvbW1lbnROb2RlQWZ0ZXIiLCJhdHRycyIsImh0bWxUYWdSZWdleCIsInJlc2VydmVkS2V5d29yZHMiLCJTZXQiLCJodG1sIiwiZWxlbWVudCQxIiwiZm9ybWF0Iiwic2hvdWxkRm9ybWF0JDEiLCJnZXRJbmRlbnQiLCJwdXNoQXR0cmlidXRlIiwicHVzaFNuaXBwZXQiLCJpbm5lckZvcm1hdCIsImhhc05ld2xpbmUiLCJzdGFydHNXaXRoQmxvY2tUYWciLCJ2YWx1ZVByZWZpeCIsImxRdW90ZSIsInJRdW90ZSIsImdldE11bHRpVmFsdWUiLCJpc1Byb3BLZXkiLCJmaWVsZEl4IiwiZmluZEluZGV4IiwidHJpbUxlZnQiLCJhZGphY2VudElubGluZSIsIm1hdGNoZXMiLCJleGVjIiwia2V5IiwiaGFzIiwiaW5kZW50Rm9ybWF0IiwiZWxlbWVudCIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJjb2xsZWN0QXR0cmlidXRlcyIsInNob3VsZEZvcm1hdCIsImJlZm9yZU5hbWUiLCJhZnRlck5hbWUiLCJwdXNoUHJpbWFyeUF0dHJpYnV0ZXMiLCJwdXNoU2Vjb25kYXJ5QXR0cmlidXRlcyIsInB1c2hWYWx1ZSIsImlzUHJpbWFyeUF0dHJpYnV0ZSIsInJlcGxhY2UiLCJiZWZvcmVBdHRyaWJ1dGUiLCJib29sZWFuVmFsdWUiLCJnbHVlQXR0cmlidXRlIiwiYWZ0ZXJBdHRyaWJ1dGUiLCJsaW5lTGVuZ3RocyIsIm1heExlbmd0aCIsInZhbHVlTGVuZ3RoIiwiYmVmb3JlVGV4dExpbmUiLCJhZnRlclRleHRMaW5lIiwiaGFtbCIsInNsaW0iLCJwdWciLCJmb3JtYXR0ZXJzIiwicGFyc2UkMSIsIm9sZFRleHRWYWx1ZSIsInBhcnNlT3B0IiwidHJhbnNmb3JtIiwic3RyaW5naWZ5IiwiZm9ybWF0dGVyIiwic3ludGF4IiwiQ1NTU25pcHBldFR5cGUiLCJDU1NTbmlwcGV0VHlwZTIiLCJyZVByb3BlcnR5Iiwib3B0IiwiY3JlYXRlU25pcHBldCIsImtleXdvcmRzIiwicGFyc2VkIiwicGFyc2VWYWx1ZSIsImNzc1ZhbCIsImNvbGxlY3RLZXl3b3JkcyIsIlByb3BlcnR5IiwicHJvcGVydHkiLCJkZXBlbmRlbmNpZXMiLCJSYXciLCJuZXN0Iiwic29ydCIsInNuaXBwZXRzU29ydCIsImN1ciIsImlzUHJvcGVydHkiLCJ2Iiwic2NvcmVNYXRjaCIsInN0cjEiLCJzdHIyIiwicGFydGlhbE1hdGNoIiwic3RyMUxlbiIsInN0cjJMZW4iLCJtaW5MZW5ndGgiLCJqIiwic2NvcmUiLCJjaDEiLCJjaDIiLCJmb3VuZCIsImFjcm9ueW0iLCJtYXRjaFJhdGlvIiwiZGVsdGEiLCJtYXhTY29yZSIsInN1bSIsImNvbG9yIiwic2hvcnRIZXgiLCJhc0hleCIsImFzUkdCIiwiaXNTaG9ydEhleCIsInRvU2hvcnRIZXgiLCJ0b0hleCIsInZhbHVlcyIsImZyYWMiLCJudW0iLCJkaWdpdHMiLCJ0b0ZpeGVkIiwiaGV4IiwidG9TdHJpbmciLCJwYWQiLCJDU1NBYmJyZXZpYXRpb25TY29wZSIsIkdsb2JhbCIsIlNlY3Rpb24iLCJWYWx1ZSIsImNzcyIsImlzSlNPTiIsInRvQ2FtZWxDYXNlIiwicHJvcGVydHlWYWx1ZSIsIm91dHB1dEltcG9ydGFudCIsIm91dHB1dFRva2VuIiwiZ2V0U2luZ2xlTnVtZXJpYyIsImdldFF1b3RlIiwib3V0cHV0VmFsdWUiLCJzZXBhcmF0b3IiLCJwcmV2RW5kIiwiXyIsImxldHRlciIsImdyYWRpZW50TmFtZSIsInBhcnNlIiwiY2FjaGUiLCJzdHlsZXNoZWV0U25pcHBldHMiLCJjb252ZXJ0U25pcHBldHMiLCJpc1ZhbHVlU2NvcGUiLCJmaWx0ZXJlZFNuaXBwZXRzIiwiZ2V0U25pcHBldHNGb3JTY29wZSIsInJlc29sdmVOb2RlIiwia2V5cyIsInJlc29sdmVHcmFkaWVudCIsInByb3BOYW1lIiwicmVzb2x2ZVZhbHVlS2V5d29yZHMiLCJmaW5kQmVzdE1hdGNoIiwicmVzb2x2ZUFzUHJvcGVydHkiLCJyZXNvbHZlQXNTbmlwcGV0IiwicmVzb2x2ZU51bWVyaWNWYWx1ZSIsImdyYWRpZW50Rm4iLCJjc3NWYWx1ZSIsImlubGluZVZhbHVlIiwiZ2V0VW5tYXRjaGVkUGFydCIsImt3IiwicmVzb2x2ZUtleXdvcmQiLCJkZWZhdWx0VmFsdWUiLCJoYXNGaWVsZCIsIndyYXBXaXRoRmllbGQiLCJtaW5TY29yZSIsInJlRmllbGQiLCJpbnB1dFZhbHVlIiwib3V0cHV0VmFsdWUyIiwibGl0ZXJhbCIsInRhaWwiLCJtYXRjaGVkSXRlbSIsImdldFNjb3JpbmdQYXJ0IiwibGFzdFBvcyIsInJlZiIsImRlcCIsImFsaWFzZXMiLCJ1bml0bGVzcyIsInEiLCJtYXJrdXBTbmlwcGV0cyIsInhzbFNuaXBwZXRzIiwicHVnU25pcHBldHMiLCJkZWZhdWx0U3ludGF4ZXMiLCJtYXJrdXAiLCJzdHlsZXNoZWV0IiwiZGVmYXVsdE9wdGlvbnMkMSIsIm91dHB1dC5maWVsZCIsImUiLCJ4IiwiZGVmYXVsdENvbmZpZyIsInN5bnRheENvbmZpZyIsInBhcnNlU25pcHBldHMiLCJ4aHRtbCIsInhtbCIsInZ1ZSIsInN2ZWx0ZSIsInNhc3MiLCJzdHlsdXMiLCJrIiwicmVzb2x2ZUNvbmZpZyIsImdsb2JhbHMiLCJtZXJnZWREYXRhIiwidHlwZURlZmF1bHRzIiwidHlwZU92ZXJyaWRlIiwic3ludGF4RGVmYXVsdHMiLCJzeW50YXhPdmVycmlkZSIsImJhY2t3YXJkU2Nhbm5lciIsInNvbCIsInByZXZpb3VzIiwiY29uc3VtZSIsImNvbnN1bWVXaGlsZSIsIkNoYXJzJDEiLCJpc1F1b3RlIiwiYyIsIkRvdWJsZVF1b3RlIiwiY29uc3VtZVF1b3RlZCIsIkJyYWNrZXRzIiwiQnJhY2tldHMyIiwiYnJhY2VQYWlycyIsIlNxdWFyZUwiLCJTcXVhcmVSIiwiUm91bmRMIiwiUm91bmRSIiwiQ3VybHlMIiwiQ3VybHlSIiwiQ2hhcnMiLCJpc0h0bWwiLCJBbmdsZVJpZ2h0IiwiaXNXaGl0ZVNwYWNlIiwiY29uc3VtZUlkZW50IiwiQW5nbGVMZWZ0IiwiY29uc3VtZUF0dHJpYnV0ZVdpdGhVbnF1b3RlZFZhbHVlIiwiY29uc3VtZUF0dHJpYnV0ZSIsImNvbnN1bWVBdHRyaWJ1dGVXaXRoUXVvdGVkVmFsdWUiLCJpc0Nsb3NlQnJhY2tldCIsImlzT3BlbkJyYWNrZXQiLCJpc1VucXVvdGVkVmFsdWUiLCJpc0lkZW50IiwiaXNBbHBoYSIsImlzTnVtYmVyIiwiU3BhY2UiLCJUYWIiLCJpc05hTiIsImNvZGUiLCJzcGVjaWFsQ2hhcnMiLCJkZWZhdWx0T3B0aW9ucyIsImxvb2tBaGVhZCIsImV4dHJhY3RBYmJyZXZpYXRpb24kMSIsIm9wdDIiLCJvZmZzZXRQYXN0QXV0b0Nsb3NlZCIsImdldFN0YXJ0T2Zmc2V0IiwiaXNDbG9zZUJyYWNlIiwiaXNPcGVuQnJhY2UiLCJpc0FiYnJldmlhdGlvbiIsImFiYnJldmlhdGlvbjIiLCJsb2NhdGlvbiIsImNvbXBpbGVkUHJlZml4IiwiY29uc3VtZVBhaXIiLCJjb25zdW1lQXJyYXkiLCJjb25zdW1lZCIsImV4cGFuZEFiYnJldmlhdGlvbiQxIiwicmVzb2x2ZWRDb25maWciLCJjc3NEYXRhIiwiaHRtbERhdGEiLCJzbmlwcGV0S2V5Q2FjaGUiLCJNYXAiLCJtYXJrdXBTbmlwcGV0S2V5cyIsInN0eWxlc2hlZXRDdXN0b21TbmlwcGV0c0tleUNhY2hlIiwiaHRtbEFiYnJldmlhdGlvblN0YXJ0UmVnZXgiLCJqc3hBYmJyZXZpYXRpb25TdGFydFJlZ2V4IiwiY3NzQWJicmV2aWF0aW9uUmVnZXgiLCJodG1sQWJicmV2aWF0aW9uUmVnZXgiLCJjb21tb25seVVzZWRUYWdzIiwidGFncyIsImJlbUZpbHRlclN1ZmZpeCIsImZpbHRlckRlbGltaXRvciIsInRyaW1GaWx0ZXJTdWZmaXgiLCJjb21tZW50RmlsdGVyU3VmZml4IiwibWF4RmlsdGVycyIsImRvQ29tcGxldGUiLCJtb25hY28iLCJtb2RlbCIsInBvc2l0aW9uIiwiZW1tZXRDb25maWciLCJpc1N0eWxlU2hlZXRSZXMiLCJpc1N0eWxlU2hlZXQiLCJyZWdpc3RyeSIsImdldERlZmF1bHRTbmlwcGV0cyIsImN1c3RvbVNuaXBwZXRzUmVnaXN0cnkiLCJzZXQiLCJnZXQiLCJleHRyYWN0T3B0aW9ucyIsImdldFN5bnRheFR5cGUiLCJleHRyYWN0ZWRWYWx1ZSIsImV4dHJhY3RBYmJyZXZpYXRpb24iLCJhYmJyZXZpYXRpb25SYW5nZSIsImN1cnJlbnRMaW5lVGlsbFBvc2l0aW9uIiwiY3VycmVudFdvcmQiLCJnZXRDdXJyZW50V29yZCIsImVuZHNXaXRoIiwiZXhwYW5kT3B0aW9ucyIsImdldEV4cGFuZE9wdGlvbnMiLCJleHBhbmRlZFRleHQiLCJleHBhbmRlZEFiYnIiLCJjb21wbGV0aW9uSXRlbXMiLCJjcmVhdGVFeHBhbmRlZEFiYnIiLCJzeW50YXgyIiwiaXNBYmJyZXZpYXRpb25WYWxpZCIsImlzRXhwYW5kZWRUZXh0Tm9pc2UiLCJraW5kIiwibGFuZ3VhZ2VzIiwiQ29tcGxldGlvbkl0ZW1LaW5kIiwibGFiZWwiLCJkb2N1bWVudGF0aW9uIiwicmVwbGFjZVRhYlN0b3BzV2l0aEN1cnNvcnMiLCJkZXRhaWwiLCJpbnNlcnRUZXh0UnVsZXMiLCJDb21wbGV0aW9uSXRlbUluc2VydFRleHRSdWxlIiwiSW5zZXJ0QXNTbmlwcGV0IiwicmFuZ2UiLCJlc2NhcGVOb25UYWJTdG9wRG9sbGFyIiwiYWRkRmluYWxUYWJTdG9wIiwicHJvcGVydGllcyIsInN1Z2dlc3Rpb25zIiwiaW5jb21wbGV0ZSIsInJlbW92ZVRhYlN0b3BzIiwiZmlsdGVyVGV4dCIsInN0eWxlc2hlZXRDdXN0b21TbmlwcGV0c0tleXMiLCJtYWtlU25pcHBldFN1Z2dlc3Rpb24iLCJhYmJyUmVnZXgiLCJSZWdFeHAiLCJ0YWdUb0ZpbmRNb3JlU3VnZ2VzdGlvbnNGb3IiLCJuZXdUYWdNYXRjaGVzIiwiY29tbW9ubHlVc2VkVGFnU3VnZ2VzdGlvbnMiLCJzaG93QWJicmV2aWF0aW9uU3VnZ2VzdGlvbnMiLCJhYmJyZXZpYXRpb25TdWdnZXN0aW9ucyIsInNvcnRUZXh0Iiwic2hvd1N1Z2dlc3Rpb25zQXNTbmlwcGV0cyIsIlNuaXBwZXQiLCJzbmlwcGV0S2V5cyIsInNuaXBwZXREZXRhaWwiLCJza2lwRnVsbE1hdGNoIiwic25pcHBldENvbXBsZXRpb25zIiwic25pcHBldEtleSIsImN1cnJlbnRBYmJyIiwic3Vic3RyIiwiZXhwYW5kZWRXb3JkIiwibWF4VGFiU3RvcCIsIm1heFRhYlN0b3BSYW5nZXMiLCJmb3VuZExhc3RTdG9wIiwicmVwbGFjZVdpdGhMYXN0U3RvcCIsIm51bWJlclN0YXJ0IiwibnVtYmVyRW5kIiwiY3VycmVudFRhYlN0b3AiLCJmb3VuZFBsYWNlaG9sZGVyIiwiaTIiLCJyYW5nZVN0YXJ0IiwicmFuZ2VFbmQiLCJlbW1ldFNuaXBwZXRGaWVsZCIsImdldERlZmF1bHRTeW50YXgiLCJzeW50YXhUeXBlIiwiZW1wdHlVc2VyQ29uZmlnIiwiZ2V0RmlsdGVycyIsImN1cnJlbnRMaW5lIiwiZ2V0TGluZUNvbnRlbnQiLCJsaW5lTnVtYmVyIiwibGVuZ3RoT2NjdXBpZWRCeUZpbHRlciIsInJhbmdlVG9SZXBsYWNlIiwiUmFuZ2UiLCJoZXhDb2xvclJlZ2V4IiwiX2IiLCJiZXR3ZWVuIiwiZW5kUHJlZml4SW5kZXgiLCJ0YWciLCJkb3RNYXRjaGVzIiwiZmlsdGVycyIsImJlbUVuYWJsZWQiLCJjb21tZW50RW5hYmxlZCIsImNvbWJpbmVkT3B0aW9ucyIsImJhc2VTeW50YXgiLCJjdXN0b21TbmlwcGV0cyIsInByZXZTbmlwcGV0S2V5cyIsIm1lcmdlZFNuaXBwZXRLZXlzIiwicHJldlNuaXBwZXRzUmVnaXN0cnkiLCJtZXJnZWRTbmlwcGV0cyIsImlzVmFsaWRFbW1ldFRva2VuIiwibGFuZ3VhZ2UiLCJjdXJyZW50VG9rZW5UeXBlIiwidG9rZW5FbnZDYWNoZSIsIldlYWtNYXAiLCJnZXRUb2tlbml6YXRpb25FbnYiLCJfdG9rZW5pemF0aW9uIiwidG9rZW5pemF0aW9uIiwiX3Rva2VuaXphdGlvblN0YXRlU3RvcmUiLCJfdCIsImdyYW1tYXJUb2tlbnMiLCJfZGVmYXVsdEJhY2tncm91bmRUb2tlbml6ZXIiLCJfdG9rZW5pemVyV2l0aFN0YXRlU3RvcmUiLCJ0b2tlbml6ZVZpZXdwb3J0IiwidG9rZW5pemF0aW9uU3VwcG9ydCIsIl90b2tlbml6YXRpb25TdXBwb3J0IiwiZW52IiwiX3N0YXRlU3RvcmUiLCJfc3VwcG9ydCIsImlzVmFsaWRMb2NhdGlvbkZvckVtbWV0QWJicmV2aWF0aW9uIiwiZ2V0QmVnaW5TdGF0ZSIsImNhbGwiLCJjbG9uZSIsImdldFN0YXJ0U3RhdGUiLCJ0b2tlbml6YXRpb25SZXN1bHQiLCJ2YWxpZCIsIkxBTkdVQUdFX01PREVTIiwiamFkZSIsInNjc3MiLCJsZXNzIiwiamF2YXNjcmlwdCIsInR5cGVzY3JpcHQiLCJNQVBQRURfTU9ERVMiLCJoYW5kbGViYXJzIiwicGhwIiwidHdpZyIsIkRFRkFVTFRfQ09ORklHIiwic2hvd0V4cGFuZGVkQWJicmV2aWF0aW9uIiwicmVnaXN0ZXJQcm92aWRlciIsImNvbnNvbGUiLCJwcm92aWRlcnMiLCJyZWdpc3RlckNvbXBsZXRpb25JdGVtUHJvdmlkZXIiLCJ0cmlnZ2VyQ2hhcmFjdGVycyIsInByb3ZpZGVDb21wbGV0aW9uSXRlbXMiLCJwcm92aWRlciIsImRpc3Bvc2UiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSw2QkFBQTtBQUFBQyxRQUFBLENBQUFELDZCQUFBO0VBQUFFLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLGtCQUFBLEVBQUFBLENBQUEsS0FBQUEsa0JBQUE7RUFBQUMsc0JBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFULDZCQUFBOzs7QUNHQSxTQUFTVSxXQUFXQyxLQUFBLEVBQU07RUFDdEIsT0FBT0EsS0FBQSxHQUFPLE1BQU1BLEtBQUEsR0FBTztBQUMv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Q1IsUUFBUTtFQUNSLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7RUFDVCxVQUFVO0VBQ1YsUUFBUTtFQUNSLFFBQVE7RUFDUixPQUFPO0VBQ1AsUUFBUTtFQUNSLFFBQVE7RUFDUixPQUFPO0VBQ1AsT0FBTztFQUNQLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULFFBQVE7RUFDUixRQUFRO0VBQ1IsUUFBUTtFQUNSLE9BQU87RUFDUCxRQUFRO0VBQ1IsUUFBUTtFQUNSLFFBQVE7RUFDUixTQUFTO0VBQ1QsUUFBUTtFQUNSLE9BQU87RUFDUCxRQUFRO0VBQ1IsT0FBTztFQUNQLFFBQVE7RUFDUixRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixTQUFTO0VBQ1QsVUFBVTtFQUNWLFFBQVE7RUFDUixRQUFRO0VBQ1IsT0FBTztFQUNQLE9BQU87RUFDUCxNQUFNO0VBQ04sUUFBUTtFQUNSLE9BQU87RUFDUCxRQUFRO0VBQ1IsT0FBTztFQUNQLFFBQVE7RUFDUixPQUFPO0VBQ1AsT0FBTztFQUNQLE9BQU87RUFDUCxRQUFRO0VBQ1IsUUFBUTtFQUNSLE9BQU87RUFDUCxRQUFRO0VBQ1IsUUFBUTtFQUNSLFFBQVE7RUFDUixLQUFLO0VBQ0wsTUFBTTtFQUNOLE9BQU87RUFDUCxNQUFNO0VBQ04sTUFBTTtFQUNOLE9BQU87RUFDUCxPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxTQUFTO0VBQ1QsU0FBUztFQUNULFNBQVM7RUFDVCxVQUFVO0VBQ1YsVUFBVTtFQUNWLFVBQVU7RUFDVixTQUFTO0VBQ1QsU0FBUztFQUNULE9BQU87RUFDUCxNQUFNO0VBQ04sT0FBTztFQUNQLE9BQU87RUFDUCxLQUFLO0VBQ0wsTUFBTTtFQUNOLEtBQUs7RUFDTCxNQUFNO0VBQ04sT0FBTztFQUNQLE9BQU87RUFDUCxRQUFRO0VBQ1IsUUFBUTtFQUNSLE1BQU07RUFDTixPQUFPO0VBQ1AsT0FBTztFQUNQLE9BQU87RUFDUCxNQUFNO0VBQ04sTUFBTTtFQUNOLE9BQU87RUFDUCxPQUFPO0VBQ1AsTUFBTTtFQUNOLE9BQU87RUFDUCxNQUFNO0VBQ04sTUFBTTtFQUNOLE9BQU87RUFDUCxPQUFPO0VBQ1AsT0FBTztFQUNQLE9BQU87RUFDUCxRQUFRO0VBQ1IsT0FBTztFQUNQLE9BQU87RUFDUCxRQUFRO0VBQ1IsS0FBSztFQUNMLE9BQU87RUFDUCxPQUFPO0VBQ1AsT0FBTztFQUNQLE1BQU07RUFDTixNQUFNO0VBQ04sT0FBTztFQUNQLE9BQU87RUFDUCxPQUFPO0VBQ1AsT0FBTztFQUNQLE9BQU87RUFDUCxNQUFNO0VBQ04sTUFBTTtFQUNOLE9BQU87RUFDUCxPQUFPO0VBQ1AsTUFBTTtFQUNOLE9BQU87RUFDUCxPQUFPO0VBQ1AsTUFBTTtFQUNOLEtBQUs7RUFDTCxNQUFNO0VBQ04sTUFBTTtFQUNOLE1BQU07RUFDTixLQUFLO0VBQ0wsTUFBTTtFQUNOLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFFBQVE7RUFDUixRQUFRO0VBQ1IsT0FBTztFQUNQLEtBQUs7RUFDTCxPQUFPO0VBQ1AsT0FBTztFQUNQLE9BQU87RUFDUCxNQUFNO0VBQ04sT0FBTztFQUNQLE9BQU87RUFDUCxPQUFPO0VBQ1AsTUFBTTtFQUNOLE1BQU07RUFDTixNQUFNO0VBQ04sTUFBTTtFQUNOLE9BQU87RUFDUCxPQUFPO0VBQ1AsT0FBTztFQUNQLE9BQU87RUFDUCxVQUFVO0VBQ1YsT0FBTztFQUNQLE9BQU87RUFDUCxPQUFPO0VBQ1AsTUFBTTtFQUNOLE9BQU87RUFDUCxPQUFPO0VBQ1AsT0FBTztFQUNQLEtBQUs7RUFDTCxNQUFNO0VBQ04sUUFBUTtFQUNSLFFBQVE7RUFDUixRQUFRO0VBQ1IsTUFBTTtFQUNOLE9BQU87RUFDUCxNQUFNO0VBQ04sTUFBTTtFQUNOLEtBQUs7RUFDTCxPQUFPO0VBQ1AsT0FBTztFQUNQLEtBQUs7RUFDTCxPQUFPO0VBQ1AsS0FBSztFQUNMLE1BQU07RUFDTixPQUFPO0VBQ1AsT0FBTztFQUNQLE1BQU07RUFDTixNQUFNO0VBQ04sTUFBTTtFQUNOLE1BQU07RUFDTixNQUFNO0VB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