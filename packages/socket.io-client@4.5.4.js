define(["engine.io-parser@5.0.7","@socket.io/component-emitter@3.1.0","engine.io-client@6.2.3","socket.io-parser@4.2.1"], (dep_0, dep_1, dep_2, dep_3) => {

const bimport = specifier => {
	const dependencies = new Map([["engine.io-parser","5.0.7"],["@socket.io/component-emitter","3.1.0"],["engine.io-client","6.2.3"],["socket.io-client","4.5.4"],["socket.io-parser","4.2.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};



const dependencies = new Map([["engine.io-parser@5.0.7", dep_0],["@socket.io/component-emitter@3.1.0", dep_1],["engine.io-client@6.2.3", dep_2],["socket.io-parser@4.2.1", dep_3]]);
const require = dependency => dependencies.get(dependency);
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/temp/socket.io-client.4.5.4.js
var socket_io_client_4_5_4_exports = {};
__export(socket_io_client_4_5_4_exports, {
  Manager: () => Manager,
  Socket: () => Socket,
  connect: () => lookup,
  default: () => socket_io_client_4_5_4_default,
  io: () => lookup,
  protocol: () => import_socket4.protocol
});
module.exports = __toCommonJS(socket_io_client_4_5_4_exports);

// node_modules/socket.io-client/build/esm/url.js
var import_engine = require("engine.io-client@6.2.3");
function url(uri, path = "", loc) {
  let obj = uri;
  loc = loc || typeof location !== "undefined" && location;
  if (null == uri) uri = loc.protocol + "//" + loc.host;
  if (typeof uri === "string") {
    if ("/" === uri.charAt(0)) {
      if ("/" === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }
    if (!/^(https?|wss?):\/\//.test(uri)) {
      if ("undefined" !== typeof loc) {
        uri = loc.protocol + "//" + uri;
      } else {
        uri = "https://" + uri;
      }
    }
    obj = (0, import_engine.parse)(uri);
  }
  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = "80";
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = "443";
    }
  }
  obj.path = obj.path || "/";
  const ipv6 = obj.host.indexOf(":") !== -1;
  const host = ipv6 ? "[" + obj.host + "]" : obj.host;
  obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
  obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
  return obj;
}

// node_modules/socket.io-client/build/esm/on.js
function on(obj, ev, fn) {
  obj.on(ev, fn);
  return function subDestroy() {
    obj.off(ev, fn);
  };
}

// node_modules/socket.io-client/build/esm/socket.js
var import_socket = require("socket.io-parser@4.2.1");
var import_component_emitter = require("@socket.io/component-emitter@3.1.0");
var RESERVED_EVENTS = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1
});
var Socket = class extends import_component_emitter.Emitter {
  constructor(io, nsp, opts) {
    super();
    this.connected = false;
    this.receiveBuffer = [];
    this.sendBuffer = [];
    this.ids = 0;
    this.acks = {};
    this.flags = {};
    this.io = io;
    this.nsp = nsp;
    if (opts && opts.auth) {
      this.auth = opts.auth;
    }
    if (this.io._autoConnect) this.open();
  }
  get disconnected() {
    return !this.connected;
  }
  subEvents() {
    if (this.subs) return;
    const io = this.io;
    this.subs = [on(io, "open", this.onopen.bind(this)), on(io, "packet", this.onpacket.bind(this)), on(io, "error", this.onerror.bind(this)), on(io, "close", this.onclose.bind(this))];
  }
  get active() {
    return !!this.subs;
  }
  connect() {
    if (this.connected) return this;
    this.subEvents();
    if (!this.io["_reconnecting"]) this.io.open();
    if ("open" === this.io._readyState) this.onopen();
    return this;
  }
  open() {
    return this.connect();
  }
  send(...args) {
    args.unshift("message");
    this.emit.apply(this, args);
    return this;
  }
  emit(ev, ...args) {
    if (RESERVED_EVENTS.hasOwnProperty(ev)) {
      throw new Error('"' + ev.toString() + '" is a reserved event name');
    }
    args.unshift(ev);
    const packet = {
      type: import_socket.PacketType.EVENT,
      data: args
    };
    packet.options = {};
    packet.options.compress = this.flags.compress !== false;
    if ("function" === typeof args[args.length - 1]) {
      const id = this.ids++;
      const ack = args.pop();
      this._registerAckCallback(id, ack);
      packet.id = id;
    }
    const isTransportWritable = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
    const discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);
    if (discardPacket) {} else if (this.connected) {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    } else {
      this.sendBuffer.push(packet);
    }
    this.flags = {};
    return this;
  }
  _registerAckCallback(id, ack) {
    const timeout = this.flags.timeout;
    if (timeout === void 0) {
      this.acks[id] = ack;
      return;
    }
    const timer = this.io.setTimeoutFn(() => {
      delete this.acks[id];
      for (let i = 0; i < this.sendBuffer.length; i++) {
        if (this.sendBuffer[i].id === id) {
          this.sendBuffer.splice(i, 1);
        }
      }
      ack.call(this, new Error("operation has timed out"));
    }, timeout);
    this.acks[id] = (...args) => {
      this.io.clearTimeoutFn(timer);
      ack.apply(this, [null, ...args]);
    };
  }
  packet(packet) {
    packet.nsp = this.nsp;
    this.io._packet(packet);
  }
  onopen() {
    if (typeof this.auth == "function") {
      this.auth(data => {
        this.packet({
          type: import_socket.PacketType.CONNECT,
          data
        });
      });
    } else {
      this.packet({
        type: import_socket.PacketType.CONNECT,
        data: this.auth
      });
    }
  }
  onerror(err) {
    if (!this.connected) {
      this.emitReserved("connect_error", err);
    }
  }
  onclose(reason, description) {
    this.connected = false;
    delete this.id;
    this.emitReserved("disconnect", reason, description);
  }
  onpacket(packet) {
    const sameNamespace = packet.nsp === this.nsp;
    if (!sameNamespace) return;
    switch (packet.type) {
      case import_socket.PacketType.CONNECT:
        if (packet.data && packet.data.sid) {
          const id = packet.data.sid;
          this.onconnect(id);
        } else {
          this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
        }
        break;
      case import_socket.PacketType.EVENT:
      case import_socket.PacketType.BINARY_EVENT:
        this.onevent(packet);
        break;
      case import_socket.PacketType.ACK:
      case import_socket.PacketType.BINARY_ACK:
        this.onack(packet);
        break;
      case import_socket.PacketType.DISCONNECT:
        this.ondisconnect();
        break;
      case import_socket.PacketType.CONNECT_ERROR:
        this.destroy();
        const err = new Error(packet.data.message);
        err.data = packet.data.data;
        this.emitReserved("connect_error", err);
        break;
    }
  }
  onevent(packet) {
    const args = packet.data || [];
    if (null != packet.id) {
      args.push(this.ack(packet.id));
    }
    if (this.connected) {
      this.emitEvent(args);
    } else {
      this.receiveBuffer.push(Object.freeze(args));
    }
  }
  emitEvent(args) {
    if (this._anyListeners && this._anyListeners.length) {
      const listeners = this._anyListeners.slice();
      for (const listener of listeners) {
        listener.apply(this, args);
      }
    }
    super.emit.apply(this, args);
  }
  ack(id) {
    const self = this;
    let sent = false;
    return function (...args) {
      if (sent) return;
      sent = true;
      self.packet({
        type: import_socket.PacketType.ACK,
        id,
        data: args
      });
    };
  }
  onack(packet) {
    const ack = this.acks[packet.id];
    if ("function" === typeof ack) {
      ack.apply(this, packet.data);
      delete this.acks[packet.id];
    } else {}
  }
  onconnect(id) {
    this.id = id;
    this.connected = true;
    this.emitBuffered();
    this.emitReserved("connect");
  }
  emitBuffered() {
    this.receiveBuffer.forEach(args => this.emitEvent(args));
    this.receiveBuffer = [];
    this.sendBuffer.forEach(packet => {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    });
    this.sendBuffer = [];
  }
  ondisconnect() {
    this.destroy();
    this.onclose("io server disconnect");
  }
  destroy() {
    if (this.subs) {
      this.subs.forEach(subDestroy => subDestroy());
      this.subs = void 0;
    }
    this.io["_destroy"](this);
  }
  disconnect() {
    if (this.connected) {
      this.packet({
        type: import_socket.PacketType.DISCONNECT
      });
    }
    this.destroy();
    if (this.connected) {
      this.onclose("io client disconnect");
    }
    return this;
  }
  close() {
    return this.disconnect();
  }
  compress(compress) {
    this.flags.compress = compress;
    return this;
  }
  get volatile() {
    this.flags.volatile = true;
    return this;
  }
  timeout(timeout) {
    this.flags.timeout = timeout;
    return this;
  }
  onAny(listener) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.push(listener);
    return this;
  }
  prependAny(listener) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.unshift(listener);
    return this;
  }
  offAny(listener) {
    if (!this._anyListeners) {
      return this;
    }
    if (listener) {
      const listeners = this._anyListeners;
      for (let i = 0; i < listeners.length; i++) {
        if (listener === listeners[i]) {
          listeners.splice(i, 1);
          return this;
        }
      }
    } else {
      this._anyListeners = [];
    }
    return this;
  }
  listenersAny() {
    return this._anyListeners || [];
  }
  onAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.push(listener);
    return this;
  }
  prependAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.unshift(listener);
    return this;
  }
  offAnyOutgoing(listener) {
    if (!this._anyOutgoingListeners) {
      return this;
    }
    if (listener) {
      const listeners = this._anyOutgoingListeners;
      for (let i = 0; i < listeners.length; i++) {
        if (listener === listeners[i]) {
          listeners.splice(i, 1);
          return this;
        }
      }
    } else {
      this._anyOutgoingListeners = [];
    }
    return this;
  }
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  notifyOutgoingListeners(packet) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const listeners = this._anyOutgoingListeners.slice();
      for (const listener of listeners) {
        listener.apply(this, packet.data);
      }
    }
  }
};

// node_modules/socket.io-client/build/esm/contrib/backo2.js
function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 1e4;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}
Backoff.prototype.duration = function () {
  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand = Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
  }
  return Math.min(ms, this.max) | 0;
};
Backoff.prototype.reset = function () {
  this.attempts = 0;
};
Backoff.prototype.setMin = function (min) {
  this.ms = min;
};
Backoff.prototype.setMax = function (max) {
  this.max = max;
};
Backoff.prototype.setJitter = function (jitter) {
  this.jitter = jitter;
};

// node_modules/socket.io-client/build/esm/manager.js
var import_engine2 = require("engine.io-client@6.2.3");
var parser = __toESM(require("socket.io-parser@4.2.1"), 0);
var import_component_emitter2 = require("@socket.io/component-emitter@3.1.0");
var Manager = class extends import_component_emitter2.Emitter {
  constructor(uri, opts) {
    var _a;
    super();
    this.nsps = {};
    this.subs = [];
    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = void 0;
    }
    opts = opts || {};
    opts.path = opts.path || "/socket.io";
    this.opts = opts;
    (0, import_engine2.installTimerFunctions)(this, opts);
    this.reconnection(opts.reconnection !== false);
    this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
    this.reconnectionDelay(opts.reconnectionDelay || 1e3);
    this.reconnectionDelayMax(opts.reconnectionDelayMax || 5e3);
    this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
    this.backoff = new Backoff({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    });
    this.timeout(null == opts.timeout ? 2e4 : opts.timeout);
    this._readyState = "closed";
    this.uri = uri;
    const _parser = opts.parser || parser;
    this.encoder = new _parser.Encoder();
    this.decoder = new _parser.Decoder();
    this._autoConnect = opts.autoConnect !== false;
    if (this._autoConnect) this.open();
  }
  reconnection(v) {
    if (!arguments.length) return this._reconnection;
    this._reconnection = !!v;
    return this;
  }
  reconnectionAttempts(v) {
    if (v === void 0) return this._reconnectionAttempts;
    this._reconnectionAttempts = v;
    return this;
  }
  reconnectionDelay(v) {
    var _a;
    if (v === void 0) return this._reconnectionDelay;
    this._reconnectionDelay = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
    return this;
  }
  randomizationFactor(v) {
    var _a;
    if (v === void 0) return this._randomizationFactor;
    this._randomizationFactor = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
    return this;
  }
  reconnectionDelayMax(v) {
    var _a;
    if (v === void 0) return this._reconnectionDelayMax;
    this._reconnectionDelayMax = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
    return this;
  }
  timeout(v) {
    if (!arguments.length) return this._timeout;
    this._timeout = v;
    return this;
  }
  maybeReconnectOnOpen() {
    if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
      this.reconnect();
    }
  }
  open(fn) {
    if (~this._readyState.indexOf("open")) return this;
    this.engine = new import_engine2.Socket(this.uri, this.opts);
    const socket = this.engine;
    const self = this;
    this._readyState = "opening";
    this.skipReconnect = false;
    const openSubDestroy = on(socket, "open", function () {
      self.onopen();
      fn && fn();
    });
    const errorSub = on(socket, "error", err => {
      self.cleanup();
      self._readyState = "closed";
      this.emitReserved("error", err);
      if (fn) {
        fn(err);
      } else {
        self.maybeReconnectOnOpen();
      }
    });
    if (false !== this._timeout) {
      const timeout = this._timeout;
      if (timeout === 0) {
        openSubDestroy();
      }
      const timer = this.setTimeoutFn(() => {
        openSubDestroy();
        socket.close();
        socket.emit("error", new Error("timeout"));
      }, timeout);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(function subDestroy() {
        clearTimeout(timer);
      });
    }
    this.subs.push(openSubDestroy);
    this.subs.push(errorSub);
    return this;
  }
  connect(fn) {
    return this.open(fn);
  }
  onopen() {
    this.cleanup();
    this._readyState = "open";
    this.emitReserved("open");
    const socket = this.engine;
    this.subs.push(on(socket, "ping", this.onping.bind(this)), on(socket, "data", this.ondata.bind(this)), on(socket, "error", this.onerror.bind(this)), on(socket, "close", this.onclose.bind(this)), on(this.decoder, "decoded", this.ondecoded.bind(this)));
  }
  onping() {
    this.emitReserved("ping");
  }
  ondata(data) {
    try {
      this.decoder.add(data);
    } catch (e) {
      this.onclose("parse error", e);
    }
  }
  ondecoded(packet) {
    (0, import_engine2.nextTick)(() => {
      this.emitReserved("packet", packet);
    }, this.setTimeoutFn);
  }
  onerror(err) {
    this.emitReserved("error", err);
  }
  socket(nsp, opts) {
    let socket = this.nsps[nsp];
    if (!socket) {
      socket = new Socket(this, nsp, opts);
      this.nsps[nsp] = socket;
    }
    return socket;
  }
  _destroy(socket) {
    const nsps = Object.keys(this.nsps);
    for (const nsp of nsps) {
      const socket2 = this.nsps[nsp];
      if (socket2.active) {
        return;
      }
    }
    this._close();
  }
  _packet(packet) {
    const encodedPackets = this.encoder.encode(packet);
    for (let i = 0; i < encodedPackets.length; i++) {
      this.engine.write(encodedPackets[i], packet.options);
    }
  }
  cleanup() {
    this.subs.forEach(subDestroy => subDestroy());
    this.subs.length = 0;
    this.decoder.destroy();
  }
  _close() {
    this.skipReconnect = true;
    this._reconnecting = false;
    this.onclose("forced close");
    if (this.engine) this.engine.close();
  }
  disconnect() {
    return this._close();
  }
  onclose(reason, description) {
    this.cleanup();
    this.backoff.reset();
    this._readyState = "closed";
    this.emitReserved("close", reason, description);
    if (this._reconnection && !this.skipReconnect) {
      this.reconnect();
    }
  }
  reconnect() {
    if (this._reconnecting || this.skipReconnect) return this;
    const self = this;
    if (this.backoff.attempts >= this._reconnectionAttempts) {
      this.backoff.reset();
      this.emitReserved("reconnect_failed");
      this._reconnecting = false;
    } else {
      const delay = this.backoff.duration();
      this._reconnecting = true;
      const timer = this.setTimeoutFn(() => {
        if (self.skipReconnect) return;
        this.emitReserved("reconnect_attempt", self.backoff.attempts);
        if (self.skipReconnect) return;
        self.open(err => {
          if (err) {
            self._reconnecting = false;
            self.reconnect();
            this.emitReserved("reconnect_error", err);
          } else {
            self.onreconnect();
          }
        });
      }, delay);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(function subDestroy() {
        clearTimeout(timer);
      });
    }
  }
  onreconnect() {
    const attempt = this.backoff.attempts;
    this._reconnecting = false;
    this.backoff.reset();
    this.emitReserved("reconnect", attempt);
  }
};

// node_modules/socket.io-client/build/esm/index.js
var import_socket4 = require("socket.io-parser@4.2.1");
var cache = {};
function lookup(uri, opts) {
  if (typeof uri === "object") {
    opts = uri;
    uri = void 0;
  }
  opts = opts || {};
  const parsed = url(uri, opts.path || "/socket.io");
  const source = parsed.source;
  const id = parsed.id;
  const path = parsed.path;
  const sameNamespace = cache[id] && path in cache[id]["nsps"];
  const newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
  let io;
  if (newConnection) {
    io = new Manager(source, opts);
  } else {
    if (!cache[id]) {
      cache[id] = new Manager(source, opts);
    }
    io = cache[id];
  }
  if (parsed.query && !opts.query) {
    opts.query = parsed.queryKey;
  }
  return io.socket(parsed.path, opts);
}
Object.assign(lookup, {
  Manager,
  Socket,
  io: lookup,
  connect: lookup
});

// .beyond/uimport/temp/socket.io-client.4.5.4.js
var socket_io_client_4_5_4_default = lookup;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3NvY2tldC5pby1jbGllbnQuNC41LjQuanMiLCIuLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC9lc20vdXJsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvYnVpbGQvZXNtL29uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvYnVpbGQvZXNtL3NvY2tldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL2VzbS9jb250cmliL2JhY2tvMi5qcyIsIi4uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL2VzbS9tYW5hZ2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvYnVpbGQvZXNtL2luZGV4LmpzIl0sIm5hbWVzIjpbInNvY2tldF9pb19jbGllbnRfNF81XzRfZXhwb3J0cyIsIl9fZXhwb3J0IiwiTWFuYWdlciIsIlNvY2tldCIsImNvbm5lY3QiLCJsb29rdXAiLCJkZWZhdWx0Iiwic29ja2V0X2lvX2NsaWVudF80XzVfNF9kZWZhdWx0IiwiaW8iLCJwcm90b2NvbCIsImltcG9ydF9zb2NrZXQ0IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImltcG9ydF9lbmdpbmUiLCJyZXF1aXJlIiwidXJsIiwidXJpIiwicGF0aCIsImxvYyIsIm9iaiIsImxvY2F0aW9uIiwiaG9zdCIsImNoYXJBdCIsInRlc3QiLCJwYXJzZSIsInBvcnQiLCJpcHY2IiwiaW5kZXhPZiIsImlkIiwiaHJlZiIsIm9uIiwiZXYiLCJmbiIsInN1YkRlc3Ryb3kiLCJvZmYiLCJpbXBvcnRfc29ja2V0IiwiaW1wb3J0X2NvbXBvbmVudF9lbWl0dGVyIiwiUkVTRVJWRURfRVZFTlRTIiwiT2JqZWN0IiwiZnJlZXplIiwiY29ubmVjdF9lcnJvciIsImRpc2Nvbm5lY3QiLCJkaXNjb25uZWN0aW5nIiwibmV3TGlzdGVuZXIiLCJyZW1vdmVMaXN0ZW5lciIsIkVtaXR0ZXIiLCJjb25zdHJ1Y3RvciIsIm5zcCIsIm9wdHMiLCJjb25uZWN0ZWQiLCJyZWNlaXZlQnVmZmVyIiwic2VuZEJ1ZmZlciIsImlkcyIsImFja3MiLCJmbGFncyIsImF1dGgiLCJfYXV0b0Nvbm5lY3QiLCJvcGVuIiwiZGlzY29ubmVjdGVkIiwic3ViRXZlbnRzIiwic3VicyIsIm9ub3BlbiIsImJpbmQiLCJvbnBhY2tldCIsIm9uZXJyb3IiLCJvbmNsb3NlIiwiYWN0aXZlIiwiX3JlYWR5U3RhdGUiLCJzZW5kIiwiYXJncyIsInVuc2hpZnQiLCJlbWl0IiwiYXBwbHkiLCJoYXNPd25Qcm9wZXJ0eSIsIkVycm9yIiwidG9TdHJpbmciLCJwYWNrZXQiLCJ0eXBlIiwiUGFja2V0VHlwZSIsIkVWRU5UIiwiZGF0YSIsIm9wdGlvbnMiLCJjb21wcmVzcyIsImxlbmd0aCIsImFjayIsInBvcCIsIl9yZWdpc3RlckFja0NhbGxiYWNrIiwiaXNUcmFuc3BvcnRXcml0YWJsZSIsImVuZ2luZSIsInRyYW5zcG9ydCIsIndyaXRhYmxlIiwiZGlzY2FyZFBhY2tldCIsInZvbGF0aWxlIiwibm90aWZ5T3V0Z29pbmdMaXN0ZW5lcnMiLCJwdXNoIiwidGltZW91dCIsInRpbWVyIiwic2V0VGltZW91dEZuIiwiaSIsInNwbGljZSIsImNhbGwiLCJjbGVhclRpbWVvdXRGbiIsIl9wYWNrZXQiLCJDT05ORUNUIiwiZXJyIiwiZW1pdFJlc2VydmVkIiwicmVhc29uIiwiZGVzY3JpcHRpb24iLCJzYW1lTmFtZXNwYWNlIiwic2lkIiwib25jb25uZWN0IiwiQklOQVJZX0VWRU5UIiwib25ldmVudCIsIkFDSyIsIkJJTkFSWV9BQ0siLCJvbmFjayIsIkRJU0NPTk5FQ1QiLCJvbmRpc2Nvbm5lY3QiLCJDT05ORUNUX0VSUk9SIiwiZGVzdHJveSIsIm1lc3NhZ2UiLCJlbWl0RXZlbnQiLCJfYW55TGlzdGVuZXJzIiwibGlzdGVuZXJzIiwic2xpY2UiLCJsaXN0ZW5lciIsInNlbGYiLCJzZW50IiwiZW1pdEJ1ZmZlcmVkIiwiZm9yRWFjaCIsImNsb3NlIiwib25BbnkiLCJwcmVwZW5kQW55Iiwib2ZmQW55IiwibGlzdGVuZXJzQW55Iiwib25BbnlPdXRnb2luZyIsIl9hbnlPdXRnb2luZ0xpc3RlbmVycyIsInByZXBlbmRBbnlPdXRnb2luZyIsIm9mZkFueU91dGdvaW5nIiwibGlzdGVuZXJzQW55T3V0Z29pbmciLCJCYWNrb2ZmIiwibXMiLCJtaW4iLCJtYXgiLCJmYWN0b3IiLCJqaXR0ZXIiLCJhdHRlbXB0cyIsInByb3RvdHlwZSIsImR1cmF0aW9uIiwiTWF0aCIsInBvdyIsInJhbmQiLCJyYW5kb20iLCJkZXZpYXRpb24iLCJmbG9vciIsInJlc2V0Iiwic2V0TWluIiwic2V0TWF4Iiwic2V0Sml0dGVyIiwiaW1wb3J0X2VuZ2luZTIiLCJwYXJzZXIiLCJfX3RvRVNNIiwiaW1wb3J0X2NvbXBvbmVudF9lbWl0dGVyMiIsIl9hIiwibnNwcyIsImluc3RhbGxUaW1lckZ1bmN0aW9ucyIsInJlY29ubmVjdGlvbiIsInJlY29ubmVjdGlvbkF0dGVtcHRzIiwiSW5maW5pdHkiLCJyZWNvbm5lY3Rpb25EZWxheSIsInJlY29ubmVjdGlvbkRlbGF5TWF4IiwicmFuZG9taXphdGlvbkZhY3RvciIsImJhY2tvZmYiLCJfcGFyc2VyIiwiZW5jb2RlciIsIkVuY29kZXIiLCJkZWNvZGVyIiwiRGVjb2RlciIsImF1dG9Db25uZWN0IiwidiIsImFyZ3VtZW50cyIsIl9yZWNvbm5lY3Rpb24iLCJfcmVjb25uZWN0aW9uQXR0ZW1wdHMiLCJfcmVjb25uZWN0aW9uRGVsYXkiLCJfcmFuZG9taXphdGlvbkZhY3RvciIsIl9yZWNvbm5lY3Rpb25EZWxheU1heCIsIl90aW1lb3V0IiwibWF5YmVSZWNvbm5lY3RPbk9wZW4iLCJfcmVjb25uZWN0aW5nIiwicmVjb25uZWN0Iiwic29ja2V0Iiwic2tpcFJlY29ubmVjdCIsIm9wZW5TdWJEZXN0cm95IiwiZXJyb3JTdWIiLCJjbGVhbnVwIiwiYXV0b1VucmVmIiwidW5yZWYiLCJjbGVhclRpbWVvdXQiLCJvbnBpbmciLCJvbmRhdGEiLCJvbmRlY29kZWQiLCJhZGQiLCJlIiwibmV4dFRpY2siLCJfZGVzdHJveSIsImtleXMiLCJzb2NrZXQyIiwiX2Nsb3NlIiwiZW5jb2RlZFBhY2tldHMiLCJlbmNvZGUiLCJ3cml0ZSIsImRlbGF5Iiwib25yZWNvbm5lY3QiLCJhdHRlbXB0IiwiY2FjaGUiLCJwYXJzZWQiLCJzb3VyY2UiLCJuZXdDb25uZWN0aW9uIiwiZm9yY2VOZXciLCJtdWx0aXBsZXgiLCJxdWVyeSIsInF1ZXJ5S2V5IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsOEJBQUE7QUFBQUMsUUFBQSxDQUFBRCw4QkFBQTtFQUFBRSxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUMsTUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUMsOEJBQUE7RUFBQUMsRUFBQSxFQUFBQSxDQUFBLEtBQUFILE1BQUE7RUFBQUksUUFBQSxFQUFBQSxDQUFBLEtBQUFDLGNBQUEsQ0FBQUQ7QUFBQTtBQUFBRSxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBYiw4QkFBQTs7O0FDQUEsSUFBQWMsYUFBQSxHQUFzQkMsT0FBQTtBQVVmLFNBQVNDLElBQUlDLEdBQUEsRUFBS0MsSUFBQSxHQUFPLElBQUlDLEdBQUEsRUFBSztFQUNyQyxJQUFJQyxHQUFBLEdBQU1ILEdBQUE7RUFFVkUsR0FBQSxHQUFNQSxHQUFBLElBQVEsT0FBT0UsUUFBQSxLQUFhLGVBQWVBLFFBQUE7RUFDakQsSUFBSSxRQUFRSixHQUFBLEVBQ1JBLEdBQUEsR0FBTUUsR0FBQSxDQUFJVixRQUFBLEdBQVcsT0FBT1UsR0FBQSxDQUFJRyxJQUFBO0VBRXBDLElBQUksT0FB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