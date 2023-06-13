define(["engine.io-parser@5.0.6","@socket.io/component-emitter@3.1.0"], (dep_0, dep_1) => {

const bimport = specifier => {
	const dependencies = new Map([["engine.io-parser","5.0.6"],["@socket.io/component-emitter","3.1.0"],["engine.io-client","6.2.3"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};



const dependencies = new Map([["engine.io-parser@5.0.6", dep_0],["@socket.io/component-emitter@3.1.0", dep_1]]);
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

// .beyond/uimport/engine.io-client.6.2.3.js
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
var import_engine = require("engine.io-parser@5.0.6");
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
var import_engine2 = require("engine.io-parser@5.0.6");
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
var import_engine3 = require("engine.io-parser@5.0.6");
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
var import_engine4 = require("engine.io-parser@5.0.6");
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9lbmdpbmUuaW8tY2xpZW50LjYuMi4zLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2dsb2JhbFRoaXMuYnJvd3Nlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS91dGlsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL3RyYW5zcG9ydC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS9jb250cmliL3llYXN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2NvbnRyaWIvcGFyc2Vxcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS9jb250cmliL2hhcy1jb3JzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL3RyYW5zcG9ydHMveG1saHR0cHJlcXVlc3QuYnJvd3Nlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnRzL3BvbGxpbmcuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vdHJhbnNwb3J0cy93ZWJzb2NrZXQtY29uc3RydWN0b3IuYnJvd3Nlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnRzL3dlYnNvY2tldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnRzL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2NvbnRyaWIvcGFyc2V1cmkuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vc29ja2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2luZGV4LmpzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiU29ja2V0IiwiVHJhbnNwb3J0IiwiaW5zdGFsbFRpbWVyRnVuY3Rpb25zIiwibmV4dFRpY2siLCJwYXJzZSIsInByb3RvY29sIiwidHJhbnNwb3J0cyIsIm1vZHVsZSIsImdsb2JhbFRoaXNTaGltIiwic2VsZiIsIndpbmRvdyIsIkZ1bmN0aW9uIiwicGljayIsIm9iaiIsImF0dHIiLCJyZWR1Y2UiLCJhY2MiLCJrIiwiaGFzT3duUHJvcGVydHkiLCJOQVRJVkVfU0VUX1RJTUVPVVQiLCJzZXRUaW1lb3V0IiwiTkFUSVZFX0NMRUFSX1RJTUVPVVQiLCJjbGVhclRpbWVvdXQiLCJvcHRzIiwidXNlTmF0aXZlVGltZXJzIiwic2V0VGltZW91dEZuIiwiYmluZCIsImNsZWFyVGltZW91dEZuIiwiQkFTRTY0X09WRVJIRUFEIiwiYnl0ZUxlbmd0aCIsInV0ZjhMZW5ndGgiLCJNYXRoIiwiY2VpbCIsInNpemUiLCJzdHIiLCJjIiwibGVuZ3RoIiwiaSIsImwiLCJjaGFyQ29kZUF0IiwicmVxdWlyZSIsIlRyYW5zcG9ydEVycm9yIiwiRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJlYXNvbiIsImRlc2NyaXB0aW9uIiwiY29udGV4dCIsInR5cGUiLCJpbXBvcnRfY29tcG9uZW50X2VtaXR0ZXIiLCJ3cml0YWJsZSIsInF1ZXJ5IiwicmVhZHlTdGF0ZSIsInNvY2tldCIsIm9uRXJyb3IiLCJlbWl0UmVzZXJ2ZWQiLCJvcGVuIiwiZG9PcGVuIiwiY2xvc2UiLCJkb0Nsb3NlIiwib25DbG9zZSIsInNlbmQiLCJwYWNrZXRzIiwid3JpdGUiLCJvbk9wZW4iLCJvbkRhdGEiLCJkYXRhIiwicGFja2V0IiwiaW1wb3J0X2VuZ2luZSIsImJpbmFyeVR5cGUiLCJvblBhY2tldCIsImRldGFpbHMiLCJhbHBoYWJldCIsInNwbGl0IiwibWFwIiwic2VlZCIsInByZXYiLCJlbmNvZGUiLCJudW0iLCJlbmNvZGVkIiwiZmxvb3IiLCJkZWNvZGUiLCJkZWNvZGVkIiwiY2hhckF0IiwieWVhc3QiLCJub3ciLCJEYXRlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicXMiLCJxcnkiLCJwYWlycyIsInBhaXIiLCJkZWNvZGVVUklDb21wb25lbnQiLCJ2YWx1ZSIsIlhNTEh0dHBSZXF1ZXN0IiwiZXJyIiwiaGFzQ09SUyIsIlhIUiIsInhkb21haW4iLCJlIiwiY29uY2F0Iiwiam9pbiIsImVtcHR5IiwiaGFzWEhSMiIsInhociIsInJlc3BvbnNlVHlwZSIsIlBvbGxpbmciLCJwb2xsaW5nIiwibG9jYXRpb24iLCJpc1NTTCIsInBvcnQiLCJ4ZCIsImhvc3RuYW1lIiwieHMiLCJzZWN1cmUiLCJmb3JjZUJhc2U2NCIsInN1cHBvcnRzQmluYXJ5IiwibmFtZSIsInBvbGwiLCJwYXVzZSIsIm9uUGF1c2UiLCJ0b3RhbCIsIm9uY2UiLCJkb1BvbGwiLCJjYWxsYmFjayIsImZvckVhY2giLCJkb1dyaXRlIiwidXJpIiwic2NoZW1hIiwidGltZXN0YW1wUmVxdWVzdHMiLCJ0aW1lc3RhbXBQYXJhbSIsInNpZCIsImI2NCIsIk51bWJlciIsImVuY29kZWRRdWVyeSIsImlwdjYiLCJpbmRleE9mIiwicGF0aCIsInJlcXVlc3QiLCJPYmplY3QiLCJhc3NpZ24iLCJSZXF1ZXN0IiwiZm4iLCJyZXEiLCJtZXRob2QiLCJvbiIsInhoclN0YXR1cyIsInBvbGxYaHIiLCJpbXBvcnRfY29tcG9uZW50X2VtaXR0ZXIyIiwiYXN5bmMiLCJjcmVhdGUiLCJ4c2NoZW1lIiwiZXh0cmFIZWFkZXJzIiwic2V0RGlzYWJsZUhlYWRlckNoZWNrIiwic2V0UmVxdWVzdEhlYWRlciIsIndpdGhDcmVkZW50aWFscyIsInJlcXVlc3RUaW1lb3V0IiwidGltZW91dCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInN0YXR1cyIsIm9uTG9hZCIsImRvY3VtZW50IiwiaW5kZXgiLCJyZXF1ZXN0c0NvdW50IiwicmVxdWVzdHMiLCJjbGVhbnVwIiwiZnJvbUVycm9yIiwiYWJvcnQiLCJyZXNwb25zZVRleHQiLCJhdHRhY2hFdmVudCIsInVubG9hZEhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwidGVybWluYXRpb25FdmVudCIsImlzUHJvbWlzZUF2YWlsYWJsZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2IiLCJ0aGVuIiwiV2ViU29ja2V0IiwiTW96V2ViU29ja2V0IiwidXNpbmdCcm93c2VyV2ViU29ja2V0IiwiZGVmYXVsdEJpbmFyeVR5cGUiLCJpc1JlYWN0TmF0aXZlIiwibmF2aWdhdG9yIiwicHJvZHVjdCIsInRvTG93ZXJDYXNlIiwiV1MiLCJjaGVjayIsInByb3RvY29scyIsImhlYWRlcnMiLCJ3cyIsImFkZEV2ZW50TGlzdGVuZXJzIiwib25vcGVuIiwiYXV0b1VucmVmIiwiX3NvY2tldCIsInVucmVmIiwib25jbG9zZSIsImNsb3NlRXZlbnQiLCJvbm1lc3NhZ2UiLCJldiIsIm9uZXJyb3IiLCJsYXN0UGFja2V0Iiwib3B0aW9ucyIsImNvbXByZXNzIiwicGVyTWVzc2FnZURlZmxhdGUiLCJsZW4iLCJCdWZmZXIiLCJ0aHJlc2hvbGQiLCJ3ZWJzb2NrZXQiLCJyZSIsInBhcnRzIiwic3JjIiwiYiIsInN1YnN0cmluZyIsInJlcGxhY2UiLCJtIiwiZXhlYyIsInNvdXJjZSIsImhvc3QiLCJhdXRob3JpdHkiLCJpcHY2dXJpIiwicGF0aE5hbWVzIiwicXVlcnlLZXkiLCJyZWd4IiwibmFtZXMiLCJzbGljZSIsInNwbGljZSIsIiQwIiwiJDEiLCIkMiIsImltcG9ydF9jb21wb25lbnRfZW1pdHRlcjMiLCJ3cml0ZUJ1ZmZlciIsInByZXZCdWZmZXJMZW4iLCJhZ2VudCIsInVwZ3JhZGUiLCJyZW1lbWJlclVwZ3JhZGUiLCJyZWplY3RVbmF1dGhvcml6ZWQiLCJ0cmFuc3BvcnRPcHRpb25zIiwiY2xvc2VPbkJlZm9yZXVubG9hZCIsImlkIiwidXBncmFkZXMiLCJwaW5nSW50ZXJ2YWwiLCJwaW5nVGltZW91dCIsInBpbmdUaW1lb3V0VGltZXIiLCJiZWZvcmV1bmxvYWRFdmVudExpc3RlbmVyIiwidHJhbnNwb3J0IiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwib2ZmbGluZUV2ZW50TGlzdGVuZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJFSU8iLCJpbXBvcnRfZW5naW5lNCIsInByaW9yV2Vic29ja2V0U3VjY2VzcyIsInNoaWZ0Iiwic2V0VHJhbnNwb3J0Iiwib25EcmFpbiIsInByb2JlIiwiZmFpbGVkIiwib25UcmFuc3BvcnRPcGVuIiwibXNnIiwidXBncmFkaW5nIiwiZmx1c2giLCJmcmVlemVUcmFuc3BvcnQiLCJlcnJvciIsIm9uVHJhbnNwb3J0Q2xvc2UiLCJvbnVwZ3JhZGUiLCJ0byIsInJlbW92ZUxpc3RlbmVyIiwib2ZmIiwib25IYW5kc2hha2UiLCJKU09OIiwicmVzZXRQaW5nVGltZW91dCIsInNlbmRQYWNrZXQiLCJjb2RlIiwiZmlsdGVyVXBncmFkZXMiLCJtYXhQYXlsb2FkIiwiZ2V0V3JpdGFibGVQYWNrZXRzIiwic2hvdWxkQ2hlY2tQYXlsb2FkU2l6ZSIsInBheWxvYWRTaXplIiwicHVzaCIsImNsZWFudXBBbmRDbG9zZSIsIndhaXRGb3JVcGdyYWRlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImZpbHRlcmVkVXBncmFkZXMiLCJqIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7QUFBQTtBQUFBQzs7O0FDQU8sSUFBTUMsa0JBQWtCLE1BQU07RUFDakMsSUFBSSxPQUFPQyxTQUFTLGFBQWE7SUFDN0IsT0FBT0E7RUFDWCxXQUNTLE9BQU9DLFdBQVcsYUFBYTtJQUNwQyxPQUFPQTtFQUNYLE9BQ0s7SUFDRCxPQUFPQyxTQUFTLGFBQWEsR0FBRTtFQUNuQztBQUNKLElBQUc7OztBQ1RJLFNBQVNDLEtBQUtDLFFBQVFDLE1BQU07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LEtBQUs5SixLQUFLLFdBQVc2SixlQUFlO01BQ3BDLEtBQUs3SixLQUFLLGdCQUFnQjZKLGVBQWU7SUFDN0M7SUFDQSxJQUFJLGNBQWMsS0FBS25PLGNBQWMsV0FBVyxLQUFLQSxZQUFZO01BQzdELEtBQUtBLGFBQWE7TUFDbEIsSUFBSSxLQUFLbUwsWUFBWWxNLFFBQVE7UUFDekIsS0FBS3FGLEtBQUssU0FBUyxNQUFNO1VBQ3JCLElBQUksS0FBS3lJLFdBQVc7WUFDaEJxQixnQkFBZTtVQUNuQixPQUNLO1lBQ0Q5TixPQUFNO1VBQ1Y7UUFDSixDQUFDO01BQ0wsV0FDUyxLQUFLeU0sV0FBVztRQUNyQnFCLGdCQUFlO01BQ25CLE9BQ0s7UUFDRDlOLE9BQU07TUFDVjtJQUNKO0lBQ0EsT0FBTztFQUNYO0VBTUFKLFFBQVF5QyxLQUFLO0lBQ1Q5RixPQUFPMFAsd0JBQXdCO0lBQy9CLEtBQUtwTSxhQUFhLFNBQVN3QyxHQUFHO0lBQzlCLEtBQUtuQyxRQUFRLG1CQUFtQm1DLEdBQUc7RUFDdkM7RUFNQW5DLFFBQVFmLFFBQVFDLGFBQWE7SUFDekIsSUFBSSxjQUFjLEtBQUtNLGNBQ25CLFdBQVcsS0FBS0EsY0FDaEIsY0FBYyxLQUFLQSxZQUFZO01BRS9CLEtBQUt4QixlQUFlLEtBQUt1TixnQkFBZ0I7TUFFekMsS0FBS0UsVUFBVUMsbUJBQW1CLE9BQU87TUFFekMsS0FBS0QsVUFBVTNMLE9BQU07TUFFckIsS0FBSzJMLFVBQVVDLG9CQUFtQjtNQUNsQyxJQUFJLE9BQU9tQyx3QkFBd0IsWUFBWTtRQUMzQ0Esb0JBQW9CLGdCQUFnQixLQUFLckMsMkJBQTJCLEtBQUs7UUFDekVxQyxvQkFBb0IsV0FBVyxLQUFLbEMsc0JBQXNCLEtBQUs7TUFDbkU7TUFFQSxLQUFLbk0sYUFBYTtNQUVsQixLQUFLMkwsS0FBSztNQUVWLEtBQUt4TCxhQUFhLFNBQVNWLFFBQVFDLFdBQVc7TUFHOUMsS0FBS3lMLGNBQWMsRUFBQztNQUNwQixLQUFLQyxnQkFBZ0I7SUFDekI7RUFDSjtFQVFBeUMsZUFBZWpDLFVBQVU7SUFDckIsTUFBTTBDLG1CQUFtQixFQUFDO0lBQzFCLElBQUlwUCxLQUFJO0lBQ1IsTUFBTXFQLElBQUkzQyxTQUFTM007SUFDbkIsT0FBT0MsS0FBSXFQLEdBQUdyUCxNQUFLO01BQ2YsSUFBSSxDQUFDLEtBQUsvQixXQUFXaUksUUFBUXdHLFNBQVMxTSxHQUFFLEdBQ3BDb1AsaUJBQWlCSixLQUFLdEMsU0FBUzFNLEdBQUU7SUFDekM7SUFDQSxPQUFPb1A7RUFDWDtBQUNKO0FBQ0F6UixPQUFPSyxXQUFXb1A7OztBQ2xrQlgsSUFBTXBQLFlBQVdMLE9BQU9LIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvcHJvamVjdC9vdXQifQ==