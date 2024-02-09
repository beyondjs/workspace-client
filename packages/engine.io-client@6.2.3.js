define(["engine.io-parser@5.0.7","@socket.io/component-emitter@3.1.0"], (dep_0, dep_1) => {

const bimport = specifier => {
	const dependencies = new Map([["engine.io-parser","5.0.7"],["@socket.io/component-emitter","3.1.0"],["engine.io-client","6.2.3"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};



const dependencies = new Map([["engine.io-parser@5.0.7", dep_0],["@socket.io/component-emitter@3.1.0", dep_1]]);
const require = dependency => dependencies.get(dependency);
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

// .beyond/uimport/temp/engine.io-client.6.2.3.js
var engine_io_client_6_2_3_exports = {};
__export(engine_io_client_6_2_3_exports, {
  Socket: () => Socket,
  Transport: () => Transport,
  installTimerFunctions: () => installTimerFunctions,
  nextTick: () => nextTick,
  parse: () => parse,
  protocol: () => protocol2,
  transports: () => transports
});
module.exports = __toCommonJS(engine_io_client_6_2_3_exports);

// node_modules/engine.io-client/build/esm/globalThis.browser.js
var globalThisShim = (() => {
  if (typeof self !== "undefined") {
    return self;
  } else if (typeof window !== "undefined") {
    return window;
  } else {
    return Function("return this")();
  }
})();

// node_modules/engine.io-client/build/esm/util.js
function pick(obj, ...attr) {
  return attr.reduce((acc, k) => {
    if (obj.hasOwnProperty(k)) {
      acc[k] = obj[k];
    }
    return acc;
  }, {});
}
var NATIVE_SET_TIMEOUT = setTimeout;
var NATIVE_CLEAR_TIMEOUT = clearTimeout;
function installTimerFunctions(obj, opts) {
  if (opts.useNativeTimers) {
    obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThisShim);
    obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThisShim);
  } else {
    obj.setTimeoutFn = setTimeout.bind(globalThisShim);
    obj.clearTimeoutFn = clearTimeout.bind(globalThisShim);
  }
}
var BASE64_OVERHEAD = 1.33;
function byteLength(obj) {
  if (typeof obj === "string") {
    return utf8Length(obj);
  }
  return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
}
function utf8Length(str) {
  let c = 0,
    length2 = 0;
  for (let i2 = 0, l = str.length; i2 < l; i2++) {
    c = str.charCodeAt(i2);
    if (c < 128) {
      length2 += 1;
    } else if (c < 2048) {
      length2 += 2;
    } else if (c < 55296 || c >= 57344) {
      length2 += 3;
    } else {
      i2++;
      length2 += 4;
    }
  }
  return length2;
}

// node_modules/engine.io-client/build/esm/transport.js
var import_engine = require("engine.io-parser@5.0.7");
var import_component_emitter = require("@socket.io/component-emitter@3.1.0");
var TransportError = class extends Error {
  constructor(reason, description, context) {
    super(reason);
    this.description = description;
    this.context = context;
    this.type = "TransportError";
  }
};
var Transport = class extends import_component_emitter.Emitter {
  constructor(opts) {
    super();
    this.writable = false;
    installTimerFunctions(this, opts);
    this.opts = opts;
    this.query = opts.query;
    this.readyState = "";
    this.socket = opts.socket;
  }
  onError(reason, description, context) {
    super.emitReserved("error", new TransportError(reason, description, context));
    return this;
  }
  open() {
    if ("closed" === this.readyState || "" === this.readyState) {
      this.readyState = "opening";
      this.doOpen();
    }
    return this;
  }
  close() {
    if ("opening" === this.readyState || "open" === this.readyState) {
      this.doClose();
      this.onClose();
    }
    return this;
  }
  send(packets) {
    if ("open" === this.readyState) {
      this.write(packets);
    } else {}
  }
  onOpen() {
    this.readyState = "open";
    this.writable = true;
    super.emitReserved("open");
  }
  onData(data) {
    const packet = (0, import_engine.decodePacket)(data, this.socket.binaryType);
    this.onPacket(packet);
  }
  onPacket(packet) {
    super.emitReserved("packet", packet);
  }
  onClose(details) {
    this.readyState = "closed";
    super.emitReserved("close", details);
  }
};

// node_modules/engine.io-client/build/esm/contrib/yeast.js
var alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
  length = 64,
  map = {};
var seed = 0,
  i = 0,
  prev;
function encode(num) {
  let encoded = "";
  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);
  return encoded;
}
function decode(str) {
  let decoded = 0;
  for (i = 0; i < str.length; i++) {
    decoded = decoded * length + map[str.charAt(i)];
  }
  return decoded;
}
function yeast() {
  const now = encode(+new Date());
  if (now !== prev) return seed = 0, prev = now;
  return now + "." + encode(seed++);
}
for (; i < length; i++) map[alphabet[i]] = i;

// node_modules/engine.io-client/build/esm/contrib/parseqs.js
function encode2(obj) {
  let str = "";
  for (let i2 in obj) {
    if (obj.hasOwnProperty(i2)) {
      if (str.length) str += "&";
      str += encodeURIComponent(i2) + "=" + encodeURIComponent(obj[i2]);
    }
  }
  return str;
}
function decode2(qs) {
  let qry = {};
  let pairs = qs.split("&");
  for (let i2 = 0, l = pairs.length; i2 < l; i2++) {
    let pair = pairs[i2].split("=");
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
}

// node_modules/engine.io-client/build/esm/contrib/has-cors.js
var value = false;
try {
  value = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest();
} catch (err) {}
var hasCORS = value;

// node_modules/engine.io-client/build/esm/transports/xmlhttprequest.browser.js
function XHR(opts) {
  const xdomain = opts.xdomain;
  try {
    if ("undefined" !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) {}
  if (!xdomain) {
    try {
      return new globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (e) {}
  }
}

// node_modules/engine.io-client/build/esm/transports/polling.js
var import_engine2 = require("engine.io-parser@5.0.7");
var import_component_emitter2 = require("@socket.io/component-emitter@3.1.0");
function empty() {}
var hasXHR2 = function () {
  const xhr = new XHR({
    xdomain: false
  });
  return null != xhr.responseType;
}();
var Polling = class extends Transport {
  constructor(opts) {
    super(opts);
    this.polling = false;
    if (typeof location !== "undefined") {
      const isSSL = "https:" === location.protocol;
      let port = location.port;
      if (!port) {
        port = isSSL ? "443" : "80";
      }
      this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
      this.xs = opts.secure !== isSSL;
    }
    const forceBase64 = opts && opts.forceBase64;
    this.supportsBinary = hasXHR2 && !forceBase64;
  }
  get name() {
    return "polling";
  }
  doOpen() {
    this.poll();
  }
  pause(onPause) {
    this.readyState = "pausing";
    const pause = () => {
      this.readyState = "paused";
      onPause();
    };
    if (this.polling || !this.writable) {
      let total = 0;
      if (this.polling) {
        total++;
        this.once("pollComplete", function () {
          --total || pause();
        });
      }
      if (!this.writable) {
        total++;
        this.once("drain", function () {
          --total || pause();
        });
      }
    } else {
      pause();
    }
  }
  poll() {
    this.polling = true;
    this.doPoll();
    this.emitReserved("poll");
  }
  onData(data) {
    const callback = packet => {
      if ("opening" === this.readyState && packet.type === "open") {
        this.onOpen();
      }
      if ("close" === packet.type) {
        this.onClose({
          description: "transport closed by the server"
        });
        return false;
      }
      this.onPacket(packet);
    };
    (0, import_engine2.decodePayload)(data, this.socket.binaryType).forEach(callback);
    if ("closed" !== this.readyState) {
      this.polling = false;
      this.emitReserved("pollComplete");
      if ("open" === this.readyState) {
        this.poll();
      } else {}
    }
  }
  doClose() {
    const close = () => {
      this.write([{
        type: "close"
      }]);
    };
    if ("open" === this.readyState) {
      close();
    } else {
      this.once("open", close);
    }
  }
  write(packets) {
    this.writable = false;
    (0, import_engine2.encodePayload)(packets, data => {
      this.doWrite(data, () => {
        this.writable = true;
        this.emitReserved("drain");
      });
    });
  }
  uri() {
    let query = this.query || {};
    const schema = this.opts.secure ? "https" : "http";
    let port = "";
    if (false !== this.opts.timestampRequests) {
      query[this.opts.timestampParam] = yeast();
    }
    if (!this.supportsBinary && !query.sid) {
      query.b64 = 1;
    }
    if (this.opts.port && ("https" === schema && Number(this.opts.port) !== 443 || "http" === schema && Number(this.opts.port) !== 80)) {
      port = ":" + this.opts.port;
    }
    const encodedQuery = encode2(query);
    const ipv6 = this.opts.hostname.indexOf(":") !== -1;
    return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
  }
  request(opts = {}) {
    Object.assign(opts, {
      xd: this.xd,
      xs: this.xs
    }, this.opts);
    return new Request(this.uri(), opts);
  }
  doWrite(data, fn) {
    const req = this.request({
      method: "POST",
      data
    });
    req.on("success", fn);
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr post error", xhrStatus, context);
    });
  }
  doPoll() {
    const req = this.request();
    req.on("data", this.onData.bind(this));
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr poll error", xhrStatus, context);
    });
    this.pollXhr = req;
  }
};
var Request = class extends import_component_emitter2.Emitter {
  constructor(uri, opts) {
    super();
    installTimerFunctions(this, opts);
    this.opts = opts;
    this.method = opts.method || "GET";
    this.uri = uri;
    this.async = false !== opts.async;
    this.data = void 0 !== opts.data ? opts.data : null;
    this.create();
  }
  create() {
    const opts = pick(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    opts.xdomain = !!this.opts.xd;
    opts.xscheme = !!this.opts.xs;
    const xhr = this.xhr = new XHR(opts);
    try {
      xhr.open(this.method, this.uri, this.async);
      try {
        if (this.opts.extraHeaders) {
          xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
          for (let i2 in this.opts.extraHeaders) {
            if (this.opts.extraHeaders.hasOwnProperty(i2)) {
              xhr.setRequestHeader(i2, this.opts.extraHeaders[i2]);
            }
          }
        }
      } catch (e) {}
      if ("POST" === this.method) {
        try {
          xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch (e) {}
      }
      try {
        xhr.setRequestHeader("Accept", "*/*");
      } catch (e) {}
      if ("withCredentials" in xhr) {
        xhr.withCredentials = this.opts.withCredentials;
      }
      if (this.opts.requestTimeout) {
        xhr.timeout = this.opts.requestTimeout;
      }
      xhr.onreadystatechange = () => {
        if (4 !== xhr.readyState) return;
        if (200 === xhr.status || 1223 === xhr.status) {
          this.onLoad();
        } else {
          this.setTimeoutFn(() => {
            this.onError(typeof xhr.status === "number" ? xhr.status : 0);
          }, 0);
        }
      };
      xhr.send(this.data);
    } catch (e) {
      this.setTimeoutFn(() => {
        this.onError(e);
      }, 0);
      return;
    }
    if (typeof document !== "undefined") {
      this.index = Request.requestsCount++;
      Request.requests[this.index] = this;
    }
  }
  onError(err) {
    this.emitReserved("error", err, this.xhr);
    this.cleanup(true);
  }
  cleanup(fromError) {
    if ("undefined" === typeof this.xhr || null === this.xhr) {
      return;
    }
    this.xhr.onreadystatechange = empty;
    if (fromError) {
      try {
        this.xhr.abort();
      } catch (e) {}
    }
    if (typeof document !== "undefined") {
      delete Request.requests[this.index];
    }
    this.xhr = null;
  }
  onLoad() {
    const data = this.xhr.responseText;
    if (data !== null) {
      this.emitReserved("data", data);
      this.emitReserved("success");
      this.cleanup();
    }
  }
  abort() {
    this.cleanup();
  }
};
Request.requestsCount = 0;
Request.requests = {};
if (typeof document !== "undefined") {
  if (typeof attachEvent === "function") {
    attachEvent("onunload", unloadHandler);
  } else if (typeof addEventListener === "function") {
    const terminationEvent = "onpagehide" in globalThisShim ? "pagehide" : "unload";
    addEventListener(terminationEvent, unloadHandler, false);
  }
}
function unloadHandler() {
  for (let i2 in Request.requests) {
    if (Request.requests.hasOwnProperty(i2)) {
      Request.requests[i2].abort();
    }
  }
}

// node_modules/engine.io-client/build/esm/transports/websocket-constructor.browser.js
var nextTick = (() => {
  const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
  if (isPromiseAvailable) {
    return cb => Promise.resolve().then(cb);
  } else {
    return (cb, setTimeoutFn) => setTimeoutFn(cb, 0);
  }
})();
var WebSocket = globalThisShim.WebSocket || globalThisShim.MozWebSocket;
var usingBrowserWebSocket = true;
var defaultBinaryType = "arraybuffer";

// node_modules/engine.io-client/build/esm/transports/websocket.js
var import_engine3 = require("engine.io-parser@5.0.7");
var isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
var WS = class extends Transport {
  constructor(opts) {
    super(opts);
    this.supportsBinary = !opts.forceBase64;
  }
  get name() {
    return "websocket";
  }
  doOpen() {
    if (!this.check()) {
      return;
    }
    const uri = this.uri();
    const protocols = this.opts.protocols;
    const opts = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    if (this.opts.extraHeaders) {
      opts.headers = this.opts.extraHeaders;
    }
    try {
      this.ws = usingBrowserWebSocket && !isReactNative ? protocols ? new WebSocket(uri, protocols) : new WebSocket(uri) : new WebSocket(uri, protocols, opts);
    } catch (err) {
      return this.emitReserved("error", err);
    }
    this.ws.binaryType = this.socket.binaryType || defaultBinaryType;
    this.addEventListeners();
  }
  addEventListeners() {
    this.ws.onopen = () => {
      if (this.opts.autoUnref) {
        this.ws._socket.unref();
      }
      this.onOpen();
    };
    this.ws.onclose = closeEvent => this.onClose({
      description: "websocket connection closed",
      context: closeEvent
    });
    this.ws.onmessage = ev => this.onData(ev.data);
    this.ws.onerror = e => this.onError("websocket error", e);
  }
  write(packets) {
    this.writable = false;
    for (let i2 = 0; i2 < packets.length; i2++) {
      const packet = packets[i2];
      const lastPacket = i2 === packets.length - 1;
      (0, import_engine3.encodePacket)(packet, this.supportsBinary, data => {
        const opts = {};
        if (!usingBrowserWebSocket) {
          if (packet.options) {
            opts.compress = packet.options.compress;
          }
          if (this.opts.perMessageDeflate) {
            const len = "string" === typeof data ? Buffer.byteLength(data) : data.length;
            if (len < this.opts.perMessageDeflate.threshold) {
              opts.compress = false;
            }
          }
        }
        try {
          if (usingBrowserWebSocket) {
            this.ws.send(data);
          } else {
            this.ws.send(data, opts);
          }
        } catch (e) {}
        if (lastPacket) {
          nextTick(() => {
            this.writable = true;
            this.emitReserved("drain");
          }, this.setTimeoutFn);
        }
      });
    }
  }
  doClose() {
    if (typeof this.ws !== "undefined") {
      this.ws.close();
      this.ws = null;
    }
  }
  uri() {
    let query = this.query || {};
    const schema = this.opts.secure ? "wss" : "ws";
    let port = "";
    if (this.opts.port && ("wss" === schema && Number(this.opts.port) !== 443 || "ws" === schema && Number(this.opts.port) !== 80)) {
      port = ":" + this.opts.port;
    }
    if (this.opts.timestampRequests) {
      query[this.opts.timestampParam] = yeast();
    }
    if (!this.supportsBinary) {
      query.b64 = 1;
    }
    const encodedQuery = encode2(query);
    const ipv6 = this.opts.hostname.indexOf(":") !== -1;
    return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
  }
  check() {
    return !!WebSocket;
  }
};

// node_modules/engine.io-client/build/esm/transports/index.js
var transports = {
  websocket: WS,
  polling: Polling
};

// node_modules/engine.io-client/build/esm/contrib/parseuri.js
var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
var parts = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
function parse(str) {
  const src = str,
    b = str.indexOf("["),
    e = str.indexOf("]");
  if (b != -1 && e != -1) {
    str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ";") + str.substring(e, str.length);
  }
  let m = re.exec(str || ""),
    uri = {},
    i2 = 14;
  while (i2--) {
    uri[parts[i2]] = m[i2] || "";
  }
  if (b != -1 && e != -1) {
    uri.source = src;
    uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ":");
    uri.authority = uri.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
    uri.ipv6uri = true;
  }
  uri.pathNames = pathNames(uri, uri["path"]);
  uri.queryKey = queryKey(uri, uri["query"]);
  return uri;
}
function pathNames(obj, path) {
  const regx = /\/{2,9}/g,
    names = path.replace(regx, "/").split("/");
  if (path.slice(0, 1) == "/" || path.length === 0) {
    names.splice(0, 1);
  }
  if (path.slice(-1) == "/") {
    names.splice(names.length - 1, 1);
  }
  return names;
}
function queryKey(uri, query) {
  const data = {};
  query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
    if ($1) {
      data[$1] = $2;
    }
  });
  return data;
}

// node_modules/engine.io-client/build/esm/socket.js
var import_component_emitter3 = require("@socket.io/component-emitter@3.1.0");
var import_engine4 = require("engine.io-parser@5.0.7");
var Socket = class extends import_component_emitter3.Emitter {
  constructor(uri, opts = {}) {
    super();
    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = null;
    }
    if (uri) {
      uri = parse(uri);
      opts.hostname = uri.host;
      opts.secure = uri.protocol === "https" || uri.protocol === "wss";
      opts.port = uri.port;
      if (uri.query) opts.query = uri.query;
    } else if (opts.host) {
      opts.hostname = parse(opts.host).host;
    }
    installTimerFunctions(this, opts);
    this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
    if (opts.hostname && !opts.port) {
      opts.port = this.secure ? "443" : "80";
    }
    this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
    this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
    this.transports = opts.transports || ["polling", "websocket"];
    this.readyState = "";
    this.writeBuffer = [];
    this.prevBufferLen = 0;
    this.opts = Object.assign({
      path: "/engine.io",
      agent: false,
      withCredentials: false,
      upgrade: true,
      timestampParam: "t",
      rememberUpgrade: false,
      rejectUnauthorized: true,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: true
    }, opts);
    this.opts.path = this.opts.path.replace(/\/$/, "") + "/";
    if (typeof this.opts.query === "string") {
      this.opts.query = decode2(this.opts.query);
    }
    this.id = null;
    this.upgrades = null;
    this.pingInterval = null;
    this.pingTimeout = null;
    this.pingTimeoutTimer = null;
    if (typeof addEventListener === "function") {
      if (this.opts.closeOnBeforeunload) {
        this.beforeunloadEventListener = () => {
          if (this.transport) {
            this.transport.removeAllListeners();
            this.transport.close();
          }
        };
        addEventListener("beforeunload", this.beforeunloadEventListener, false);
      }
      if (this.hostname !== "localhost") {
        this.offlineEventListener = () => {
          this.onClose("transport close", {
            description: "network connection lost"
          });
        };
        addEventListener("offline", this.offlineEventListener, false);
      }
    }
    this.open();
  }
  createTransport(name) {
    const query = Object.assign({}, this.opts.query);
    query.EIO = import_engine4.protocol;
    query.transport = name;
    if (this.id) query.sid = this.id;
    const opts = Object.assign({}, this.opts.transportOptions[name], this.opts, {
      query,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    });
    return new transports[name](opts);
  }
  open() {
    let transport;
    if (this.opts.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) {
      transport = "websocket";
    } else if (0 === this.transports.length) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    } else {
      transport = this.transports[0];
    }
    this.readyState = "opening";
    try {
      transport = this.createTransport(transport);
    } catch (e) {
      this.transports.shift();
      this.open();
      return;
    }
    transport.open();
    this.setTransport(transport);
  }
  setTransport(transport) {
    if (this.transport) {
      this.transport.removeAllListeners();
    }
    this.transport = transport;
    transport.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", reason => this.onClose("transport close", reason));
  }
  probe(name) {
    let transport = this.createTransport(name);
    let failed = false;
    Socket.priorWebsocketSuccess = false;
    const onTransportOpen = () => {
      if (failed) return;
      transport.send([{
        type: "ping",
        data: "probe"
      }]);
      transport.once("packet", msg => {
        if (failed) return;
        if ("pong" === msg.type && "probe" === msg.data) {
          this.upgrading = true;
          this.emitReserved("upgrading", transport);
          if (!transport) return;
          Socket.priorWebsocketSuccess = "websocket" === transport.name;
          this.transport.pause(() => {
            if (failed) return;
            if ("closed" === this.readyState) return;
            cleanup();
            this.setTransport(transport);
            transport.send([{
              type: "upgrade"
            }]);
            this.emitReserved("upgrade", transport);
            transport = null;
            this.upgrading = false;
            this.flush();
          });
        } else {
          const err = new Error("probe error");
          err.transport = transport.name;
          this.emitReserved("upgradeError", err);
        }
      });
    };
    function freezeTransport() {
      if (failed) return;
      failed = true;
      cleanup();
      transport.close();
      transport = null;
    }
    const onerror = err => {
      const error = new Error("probe error: " + err);
      error.transport = transport.name;
      freezeTransport();
      this.emitReserved("upgradeError", error);
    };
    function onTransportClose() {
      onerror("transport closed");
    }
    function onclose() {
      onerror("socket closed");
    }
    function onupgrade(to) {
      if (transport && to.name !== transport.name) {
        freezeTransport();
      }
    }
    const cleanup = () => {
      transport.removeListener("open", onTransportOpen);
      transport.removeListener("error", onerror);
      transport.removeListener("close", onTransportClose);
      this.off("close", onclose);
      this.off("upgrading", onupgrade);
    };
    transport.once("open", onTransportOpen);
    transport.once("error", onerror);
    transport.once("close", onTransportClose);
    this.once("close", onclose);
    this.once("upgrading", onupgrade);
    transport.open();
  }
  onOpen() {
    this.readyState = "open";
    Socket.priorWebsocketSuccess = "websocket" === this.transport.name;
    this.emitReserved("open");
    this.flush();
    if ("open" === this.readyState && this.opts.upgrade && this.transport.pause) {
      let i2 = 0;
      const l = this.upgrades.length;
      for (; i2 < l; i2++) {
        this.probe(this.upgrades[i2]);
      }
    }
  }
  onPacket(packet) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      this.emitReserved("packet", packet);
      this.emitReserved("heartbeat");
      switch (packet.type) {
        case "open":
          this.onHandshake(JSON.parse(packet.data));
          break;
        case "ping":
          this.resetPingTimeout();
          this.sendPacket("pong");
          this.emitReserved("ping");
          this.emitReserved("pong");
          break;
        case "error":
          const err = new Error("server error");
          err.code = packet.data;
          this.onError(err);
          break;
        case "message":
          this.emitReserved("data", packet.data);
          this.emitReserved("message", packet.data);
          break;
      }
    } else {}
  }
  onHandshake(data) {
    this.emitReserved("handshake", data);
    this.id = data.sid;
    this.transport.query.sid = data.sid;
    this.upgrades = this.filterUpgrades(data.upgrades);
    this.pingInterval = data.pingInterval;
    this.pingTimeout = data.pingTimeout;
    this.maxPayload = data.maxPayload;
    this.onOpen();
    if ("closed" === this.readyState) return;
    this.resetPingTimeout();
  }
  resetPingTimeout() {
    this.clearTimeoutFn(this.pingTimeoutTimer);
    this.pingTimeoutTimer = this.setTimeoutFn(() => {
      this.onClose("ping timeout");
    }, this.pingInterval + this.pingTimeout);
    if (this.opts.autoUnref) {
      this.pingTimeoutTimer.unref();
    }
  }
  onDrain() {
    this.writeBuffer.splice(0, this.prevBufferLen);
    this.prevBufferLen = 0;
    if (0 === this.writeBuffer.length) {
      this.emitReserved("drain");
    } else {
      this.flush();
    }
  }
  flush() {
    if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const packets = this.getWritablePackets();
      this.transport.send(packets);
      this.prevBufferLen = packets.length;
      this.emitReserved("flush");
    }
  }
  getWritablePackets() {
    const shouldCheckPayloadSize = this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
    if (!shouldCheckPayloadSize) {
      return this.writeBuffer;
    }
    let payloadSize = 1;
    for (let i2 = 0; i2 < this.writeBuffer.length; i2++) {
      const data = this.writeBuffer[i2].data;
      if (data) {
        payloadSize += byteLength(data);
      }
      if (i2 > 0 && payloadSize > this.maxPayload) {
        return this.writeBuffer.slice(0, i2);
      }
      payloadSize += 2;
    }
    return this.writeBuffer;
  }
  write(msg, options, fn) {
    this.sendPacket("message", msg, options, fn);
    return this;
  }
  send(msg, options, fn) {
    this.sendPacket("message", msg, options, fn);
    return this;
  }
  sendPacket(type, data, options, fn) {
    if ("function" === typeof data) {
      fn = data;
      data = void 0;
    }
    if ("function" === typeof options) {
      fn = options;
      options = null;
    }
    if ("closing" === this.readyState || "closed" === this.readyState) {
      return;
    }
    options = options || {};
    options.compress = false !== options.compress;
    const packet = {
      type,
      data,
      options
    };
    this.emitReserved("packetCreate", packet);
    this.writeBuffer.push(packet);
    if (fn) this.once("flush", fn);
    this.flush();
  }
  close() {
    const close = () => {
      this.onClose("forced close");
      this.transport.close();
    };
    const cleanupAndClose = () => {
      this.off("upgrade", cleanupAndClose);
      this.off("upgradeError", cleanupAndClose);
      close();
    };
    const waitForUpgrade = () => {
      this.once("upgrade", cleanupAndClose);
      this.once("upgradeError", cleanupAndClose);
    };
    if ("opening" === this.readyState || "open" === this.readyState) {
      this.readyState = "closing";
      if (this.writeBuffer.length) {
        this.once("drain", () => {
          if (this.upgrading) {
            waitForUpgrade();
          } else {
            close();
          }
        });
      } else if (this.upgrading) {
        waitForUpgrade();
      } else {
        close();
      }
    }
    return this;
  }
  onError(err) {
    Socket.priorWebsocketSuccess = false;
    this.emitReserved("error", err);
    this.onClose("transport error", err);
  }
  onClose(reason, description) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      this.clearTimeoutFn(this.pingTimeoutTimer);
      this.transport.removeAllListeners("close");
      this.transport.close();
      this.transport.removeAllListeners();
      if (typeof removeEventListener === "function") {
        removeEventListener("beforeunload", this.beforeunloadEventListener, false);
        removeEventListener("offline", this.offlineEventListener, false);
      }
      this.readyState = "closed";
      this.id = null;
      this.emitReserved("close", reason, description);
      this.writeBuffer = [];
      this.prevBufferLen = 0;
    }
  }
  filterUpgrades(upgrades) {
    const filteredUpgrades = [];
    let i2 = 0;
    const j = upgrades.length;
    for (; i2 < j; i2++) {
      if (~this.transports.indexOf(upgrades[i2])) filteredUpgrades.push(upgrades[i2]);
    }
    return filteredUpgrades;
  }
};
Socket.protocol = import_engine4.protocol;

// node_modules/engine.io-client/build/esm/index.js
var protocol2 = Socket.protocol;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL2VuZ2luZS5pby1jbGllbnQuNi4yLjMuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vZ2xvYmFsVGhpcy5icm93c2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL3V0aWwuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vdHJhbnNwb3J0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2NvbnRyaWIveWVhc3QuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vY29udHJpYi9wYXJzZXFzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2NvbnRyaWIvaGFzLWNvcnMuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vdHJhbnNwb3J0cy94bWxodHRwcmVxdWVzdC5icm93c2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL3RyYW5zcG9ydHMvcG9sbGluZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnRzL3dlYnNvY2tldC1jb25zdHJ1Y3Rvci5icm93c2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL3RyYW5zcG9ydHMvd2Vic29ja2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL3RyYW5zcG9ydHMvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vY29udHJpYi9wYXJzZXVyaS5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS9zb2NrZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vaW5kZXguanMiXSwibmFtZXMiOlsiZW5naW5lX2lvX2NsaWVudF82XzJfM19leHBvcnRzIiwiX19leHBvcnQiLCJTb2NrZXQiLCJUcmFuc3BvcnQiLCJpbnN0YWxsVGltZXJGdW5jdGlvbnMiLCJuZXh0VGljayIsInBhcnNlIiwicHJvdG9jb2wiLCJwcm90b2NvbDIiLCJ0cmFuc3BvcnRzIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImdsb2JhbFRoaXNTaGltIiwic2VsZiIsIndpbmRvdyIsIkZ1bmN0aW9uIiwicGljayIsIm9iaiIsImF0dHIiLCJyZWR1Y2UiLCJhY2MiLCJrIiwiaGFzT3duUHJvcGVydHkiLCJOQVRJVkVfU0VUX1RJTUVPVVQiLCJzZXRUaW1lb3V0IiwiTkFUSVZFX0NMRUFSX1RJTUVPVVQiLCJjbGVhclRpbWVvdXQiLCJvcHRzIiwidXNlTmF0aXZlVGltZXJzIiwic2V0VGltZW91dEZuIiwiYmluZCIsImNsZWFyVGltZW91dEZuIiwiQkFTRTY0X09WRVJIRUFEIiwiYnl0ZUxlbmd0aCIsInV0ZjhMZW5ndGgiLCJNYXRoIiwiY2VpbCIsInNpemUiLCJzdHIiLCJjIiwibGVuZ3RoMiIsImkyIiwibCIsImxlbmd0aCIsImNoYXJDb2RlQXQiLCJpbXBvcnRfZW5naW5lIiwicmVxdWlyZSIsImltcG9ydF9jb21wb25lbnRfZW1pdHRlciIsIlRyYW5zcG9ydEVycm9yIiwiRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJlYXNvbiIsImRlc2NyaXB0aW9uIiwiY29udGV4dCIsInR5cGUiLCJFbWl0dGVyIiwid3JpdGFibGUiLCJxdWVyeSIsInJlYWR5U3RhdGUiLCJzb2NrZXQiLCJvbkVycm9yIiwiZW1pdFJlc2VydmVkIiwib3BlbiIsImRvT3BlbiIsImNsb3NlIiwiZG9DbG9zZSIsIm9uQ2xvc2UiLCJzZW5kIiwicGFja2V0cyIsIndyaXRlIiwib25PcGVuIiwib25EYXRhIiwiZGF0YSIsInBhY2tldCIsImRlY29kZVBhY2tldCIsImJpbmFyeVR5cGUiLCJvblBhY2tldCIsImRldGFpbHMiLCJhbHBoYWJldCIsInNwbGl0IiwibWFwIiwic2VlZCIsImkiLCJwcmV2IiwiZW5jb2RlIiwibnVtIiwiZW5jb2RlZCIsImZsb29yIiwiZGVjb2RlIiwiZGVjb2RlZCIsImNoYXJBdCIsInllYXN0Iiwibm93IiwiRGF0ZSIsImVuY29kZTIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJkZWNvZGUyIiwicXMiLCJxcnkiLCJwYWlycyIsInBhaXIiLCJkZWNvZGVVUklDb21wb25lbnQiLCJ2YWx1ZSIsIlhNTEh0dHBSZXF1ZXN0IiwiZXJyIiwiaGFzQ09SUyIsIlhIUiIsInhkb21haW4iLCJlIiwiY29uY2F0Iiwiam9pbiIsImltcG9ydF9lbmdpbmUyIiwiaW1wb3J0X2NvbXBvbmVudF9lbWl0dGVyMiIsImVtcHR5IiwiaGFzWEhSMiIsInhociIsInJlc3BvbnNlVHlwZSIsIlBvbGxpbmciLCJwb2xsaW5nIiwibG9jYXRpb24iLCJpc1NTTCIsInBvcnQiLCJ4ZCIsImhvc3RuYW1lIiwieHMiLCJzZWN1cmUiLCJmb3JjZUJhc2U2NCIsInN1cHBvcnRzQmluYXJ5IiwibmFtZSIsInBvbGwiLCJwYXVzZSIsIm9uUGF1c2UiLCJ0b3RhbCIsIm9uY2UiLCJkb1BvbGwiLCJjYWxsYmFjayIsImRlY29kZVBheWxvYWQiLCJmb3JFYWNoIiwiZW5jb2RlUGF5bG9hZCIsImRvV3JpdGUiLCJ1cmkiLCJzY2hlbWEiLCJ0aW1lc3RhbXBSZXF1ZXN0cyIsInRpbWVzdGFtcFBhcmFtIiwic2lkIiwiYjY0IiwiTnVtYmVyIiwiZW5jb2RlZFF1ZXJ5IiwiaXB2NiIsImluZGV4T2YiLCJwYXRoIiwicmVxdWVzdCIsIk9iamVjdCIsImFzc2lnbiIsIlJlcXVlc3QiLCJmbiIsInJlcSIsIm1ldGhvZCIsIm9uIiwieGhyU3RhdHVzIiwicG9sbFhociIsImFzeW5jIiwiY3JlYXRlIiwieHNjaGVtZSIsImV4dHJhSGVhZGVycyIsInNldERpc2FibGVIZWFkZXJDaGVjayIsInNldFJlcXVlc3RIZWFkZXIiLCJ3aXRoQ3JlZGVudGlhbHMiLCJyZXF1ZXN0VGltZW91dCIsInRpbWVvdXQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJzdGF0dXMiLCJvbkxvYWQiLCJkb2N1bWVudCIsImluZGV4IiwicmVxdWVzdHNDb3VudCIsInJlcXVlc3RzIiwiY2xlYW51cCIsImZyb21FcnJvciIsImFib3J0IiwicmVzcG9uc2VUZXh0IiwiYXR0YWNoRXZlbnQiLCJ1bmxvYWRIYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRlcm1pbmF0aW9uRXZlbnQiLCJpc1Byb21pc2VBdmFpbGFibGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNiIiwidGhlbiIsIldlYlNvY2tldCIsIk1veldlYlNvY2tldCIsInVzaW5nQnJvd3NlcldlYlNvY2tldCIsImRlZmF1bHRCaW5hcnlUeXBlIiwiaW1wb3J0X2VuZ2luZTMiLCJpc1JlYWN0TmF0aXZlIiwibmF2aWdhdG9yIiwicHJvZHVjdCIsInRvTG93ZXJDYXNlIiwiV1MiLCJjaGVjayIsInByb3RvY29scyIsImhlYWRlcnMiLCJ3cyIsImFkZEV2ZW50TGlzdGVuZXJzIiwib25vcGVuIiwiYXV0b1VucmVmIiwiX3NvY2tldCIsInVucmVmIiwib25jbG9zZSIsImNsb3NlRXZlbnQiLCJvbm1lc3NhZ2UiLCJldiIsIm9uZXJyb3IiLCJsYXN0UGFja2V0IiwiZW5jb2RlUGFja2V0Iiwib3B0aW9ucyIsImNvbXByZXNzIiwicGVyTWVzc2FnZURlZmxhdGUiLCJsZW4iLCJCdWZmZXIiLCJ0aHJlc2hvbGQiLCJ3ZWJzb2NrZXQiLCJyZSIsInBhcnRzIiwic3JjIiwiYiIsInN1YnN0cmluZyIsInJlcGxhY2UiLCJtIiwiZXhlYyIsInNvdXJjZSIsImhvc3QiLCJhdXRob3JpdHkiLCJpcHY2dXJpIiwicGF0aE5hbWVzIiwicXVlcnlLZXkiLCJyZWd4IiwibmFtZXMiLCJzbGljZSIsInNwbGljZSIsIiQwIiwiJDEiLCIkMiIsImltcG9ydF9jb21wb25lbnRfZW1pdHRlcjMiLCJpbXBvcnRfZW5naW5lNCIsIndyaXRlQnVmZmVyIiwicHJldkJ1ZmZlckxlbiIsImFnZW50IiwidXBncmFkZSIsInJlbWVtYmVyVXBncmFkZSIsInJlamVjdFVuYXV0aG9yaXplZCIsInRyYW5zcG9ydE9wdGlvbnMiLCJjbG9zZU9uQmVmb3JldW5sb2FkIiwiaWQiLCJ1cGdyYWRlcyIsInBpbmdJbnRlcnZhbCIsInBpbmdUaW1lb3V0IiwicGluZ1RpbWVvdXRUaW1lciIsImJlZm9yZXVubG9hZEV2ZW50TGlzdGVuZXIiLCJ0cmFuc3BvcnQiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJvZmZsaW5lRXZlbnRMaXN0ZW5lciIsImNyZWF0ZVRyYW5zcG9ydCIsIkVJTyIsInByaW9yV2Vic29ja2V0U3VjY2VzcyIsInNoaWZ0Iiwic2V0VHJhbnNwb3J0Iiwib25EcmFpbiIsInByb2JlIiwiZmFpbGVkIiwib25UcmFuc3BvcnRPcGVuIiwibXNnIiwidXBncmFkaW5nIiwiZmx1c2giLCJmcmVlemVUcmFuc3BvcnQiLCJlcnJvciIsIm9uVHJhbnNwb3J0Q2xvc2UiLCJvbnVwZ3JhZGUiLCJ0byIsInJlbW92ZUxpc3RlbmVyIiwib2ZmIiwib25IYW5kc2hha2UiLCJKU09OIiwicmVzZXRQaW5nVGltZW91dCIsInNlbmRQYWNrZXQiLCJjb2RlIiwiZmlsdGVyVXBncmFkZXMiLCJtYXhQYXlsb2FkIiwiZ2V0V3JpdGFibGVQYWNrZXRzIiwic2hvdWxkQ2hlY2tQYXlsb2FkU2l6ZSIsInBheWxvYWRTaXplIiwicHVzaCIsImNsZWFudXBBbmRDbG9zZSIsIndhaXRGb3JVcGdyYWRlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImZpbHRlcmVkVXBncmFkZXMiLCJqIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsOEJBQUE7QUFBQUMsUUFBQSxDQUFB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