define(["engine.io-parser@5.0.6","@socket.io/component-emitter@3.1.0","engine.io-client@6.2.3","socket.io-parser@4.2.2"], (dep_0, dep_1, dep_2, dep_3) => {

const bimport = specifier => {
	const dependencies = new Map([["engine.io-parser","5.0.6"],["@socket.io/component-emitter","3.1.0"],["engine.io-client","6.2.3"],["socket.io-client","4.5.4"],["socket.io-parser","4.2.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};



const dependencies = new Map([["engine.io-parser@5.0.6", dep_0],["@socket.io/component-emitter@3.1.0", dep_1],["engine.io-client@6.2.3", dep_2],["socket.io-parser@4.2.2", dep_3]]);
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

// .beyond/uimport/socket.io-client.4.5.4.js
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
var import_socket = require("socket.io-parser@4.2.2");
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
var parser = __toESM(require("socket.io-parser@4.2.2"), 0);
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
var import_socket4 = require("socket.io-parser@4.2.2");
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

// .beyond/uimport/socket.io-client.4.5.4.js
var socket_io_client_4_5_4_default = lookup;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9zb2NrZXQuaW8tY2xpZW50LjQuNS40LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvYnVpbGQvZXNtL3VybC5qcyIsIi4uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL2VzbS9vbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL2VzbS9zb2NrZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC9lc20vY29udHJpYi9iYWNrbzIuanMiLCIuLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC9lc20vbWFuYWdlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL2VzbS9pbmRleC5qcyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsIk1hbmFnZXIiLCJTb2NrZXQiLCJjb25uZWN0IiwiZGVmYXVsdCIsImlvIiwicHJvdG9jb2wiLCJtb2R1bGUiLCJyZXF1aXJlIiwidXJsIiwidXJpIiwicGF0aCIsImxvYyIsIm9iaiIsImxvY2F0aW9uIiwiaG9zdCIsImNoYXJBdCIsInRlc3QiLCJpbXBvcnRfZW5naW5lIiwicG9ydCIsImlwdjYiLCJpbmRleE9mIiwiaWQiLCJocmVmIiwib24iLCJldiIsImZuIiwic3ViRGVzdHJveSIsIm9mZiIsIlJFU0VSVkVEX0VWRU5UUyIsIk9iamVjdCIsImZyZWV6ZSIsImNvbm5lY3RfZXJyb3IiLCJkaXNjb25uZWN0IiwiZGlzY29ubmVjdGluZyIsIm5ld0xpc3RlbmVyIiwicmVtb3ZlTGlzdGVuZXIiLCJpbXBvcnRfY29tcG9uZW50X2VtaXR0ZXIiLCJjb25zdHJ1Y3RvciIsIm5zcCIsIm9wdHMiLCJjb25uZWN0ZWQiLCJyZWNlaXZlQnVmZmVyIiwic2VuZEJ1ZmZlciIsImlkcyIsImFja3MiLCJmbGFncyIsImF1dGgiLCJfYXV0b0Nvbm5lY3QiLCJvcGVuIiwiZGlzY29ubmVjdGVkIiwic3ViRXZlbnRzIiwic3VicyIsIm9ub3BlbiIsImJpbmQiLCJvbnBhY2tldCIsIm9uZXJyb3IiLCJvbmNsb3NlIiwiYWN0aXZlIiwiX3JlYWR5U3RhdGUiLCJzZW5kIiwiYXJncyIsInVuc2hpZnQiLCJlbWl0IiwiYXBwbHkiLCJoYXNPd25Qcm9wZXJ0eSIsIkVycm9yIiwidG9TdHJpbmciLCJwYWNrZXQiLCJ0eXBlIiwiaW1wb3J0X3NvY2tldCIsIkVWRU5UIiwiZGF0YSIsIm9wdGlvbnMiLCJjb21wcmVzcyIsImxlbmd0aCIsImFjayIsInBvcCIsIl9yZWdpc3RlckFja0NhbGxiYWNrIiwiaXNUcmFuc3BvcnRXcml0YWJsZSIsImVuZ2luZSIsInRyYW5zcG9ydCIsIndyaXRhYmxlIiwiZGlzY2FyZFBhY2tldCIsInZvbGF0aWxlIiwibm90aWZ5T3V0Z29pbmdMaXN0ZW5lcnMiLCJwdXNoIiwidGltZW91dCIsInRpbWVyIiwic2V0VGltZW91dEZuIiwiaSIsInNwbGljZSIsImNhbGwiLCJjbGVhclRpbWVvdXRGbiIsIl9wYWNrZXQiLCJDT05ORUNUIiwiZXJyIiwiZW1pdFJlc2VydmVkIiwicmVhc29uIiwiZGVzY3JpcHRpb24iLCJzYW1lTmFtZXNwYWNlIiwic2lkIiwib25jb25uZWN0IiwiQklOQVJZX0VWRU5UIiwib25ldmVudCIsIkFDSyIsIkJJTkFSWV9BQ0siLCJvbmFjayIsIkRJU0NPTk5FQ1QiLCJvbmRpc2Nvbm5lY3QiLCJDT05ORUNUX0VSUk9SIiwiZGVzdHJveSIsIm1lc3NhZ2UiLCJlbWl0RXZlbnQiLCJfYW55TGlzdGVuZXJzIiwibGlzdGVuZXJzIiwic2xpY2UiLCJsaXN0ZW5lciIsInNlbGYiLCJzZW50IiwiZW1pdEJ1ZmZlcmVkIiwiZm9yRWFjaCIsImNsb3NlIiwib25BbnkiLCJwcmVwZW5kQW55Iiwib2ZmQW55IiwibGlzdGVuZXJzQW55Iiwib25BbnlPdXRnb2luZyIsIl9hbnlPdXRnb2luZ0xpc3RlbmVycyIsInByZXBlbmRBbnlPdXRnb2luZyIsIm9mZkFueU91dGdvaW5nIiwibGlzdGVuZXJzQW55T3V0Z29pbmciLCJCYWNrb2ZmIiwibXMiLCJtaW4iLCJtYXgiLCJmYWN0b3IiLCJqaXR0ZXIiLCJhdHRlbXB0cyIsInByb3RvdHlwZSIsImR1cmF0aW9uIiwiTWF0aCIsInBvdyIsInJhbmQiLCJyYW5kb20iLCJkZXZpYXRpb24iLCJmbG9vciIsInJlc2V0Iiwic2V0TWluIiwic2V0TWF4Iiwic2V0Sml0dGVyIiwiX190b0VTTSIsImltcG9ydF9jb21wb25lbnRfZW1pdHRlcjIiLCJfYSIsIm5zcHMiLCJyZWNvbm5lY3Rpb24iLCJyZWNvbm5lY3Rpb25BdHRlbXB0cyIsIkluZmluaXR5IiwicmVjb25uZWN0aW9uRGVsYXkiLCJyZWNvbm5lY3Rpb25EZWxheU1heCIsInJhbmRvbWl6YXRpb25GYWN0b3IiLCJiYWNrb2ZmIiwiX3BhcnNlciIsInBhcnNlciIsImVuY29kZXIiLCJFbmNvZGVyIiwiZGVjb2RlciIsIkRlY29kZXIiLCJhdXRvQ29ubmVjdCIsInYiLCJhcmd1bWVudHMiLCJfcmVjb25uZWN0aW9uIiwiX3JlY29ubmVjdGlvbkF0dGVtcHRzIiwiX3JlY29ubmVjdGlvbkRlbGF5IiwiX3JhbmRvbWl6YXRpb25GYWN0b3IiLCJfcmVjb25uZWN0aW9uRGVsYXlNYXgiLCJfdGltZW91dCIsIm1heWJlUmVjb25uZWN0T25PcGVuIiwiX3JlY29ubmVjdGluZyIsInJlY29ubmVjdCIsImltcG9ydF9lbmdpbmUyIiwic29ja2V0Iiwic2tpcFJlY29ubmVjdCIsIm9wZW5TdWJEZXN0cm95IiwiZXJyb3JTdWIiLCJjbGVhbnVwIiwiYXV0b1VucmVmIiwidW5yZWYiLCJjbGVhclRpbWVvdXQiLCJvbnBpbmciLCJvbmRhdGEiLCJvbmRlY29kZWQiLCJhZGQiLCJlIiwiX2Rlc3Ryb3kiLCJrZXlzIiwiX2Nsb3NlIiwiZW5jb2RlZFBhY2tldHMiLCJlbmNvZGUiLCJ3cml0ZSIsImRlbGF5Iiwib25yZWNvbm5lY3QiLCJhdHRlbXB0IiwiY2FjaGUiLCJsb29rdXAiLCJwYXJzZWQiLCJzb3VyY2UiLCJuZXdDb25uZWN0aW9uIiwiZm9yY2VOZXciLCJtdWx0aXBsZXgiLCJxdWVyeSIsInF1ZXJ5S2V5IiwiYXNzaWduIiwic29ja2V0X2lvX2NsaWVudF80XzVfNF9kZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7QUFBQTtBQUFBQzs7O0FDQUEsb0JBQXNCQztBQVVmLFNBQVNDLElBQUlDLEtBQUtDLE9BQU8sSUFBSUMsS0FBSztFQUNyQyxJQUFJQyxNQUFNSDtFQUVWRSxNQUFNQSxPQUFRLE9BQU9FLGFBQWEsZUFBZUE7RUFDakQsSUFBSSxRQUFRSixLQUNSQSxNQUFNRSxJQUFJTixXQUFXLE9BQU9NLElBQUlHO0VBRXBDLElBQUksT0FBT0wsUUFBUSxVQUFVO0lBQ3pCLElBQUksUUFBUUEsSUFBSU0sT0FBTyxDQUFDLEdBQUc7TUFDdkIsSUFBSSxRQUFRTixJQUFJTSxPQUFPLENBQUMsR0FBRztRQUN2Qk4sTUFBTUUsSUFBSU4sV0FBV0k7TUFDekIsT0FDSztRQUNEQSxNQUFNRSxJQUFJRyxPQUFPTDtNQUNyQjtJQUNKO0lBQ0EsSUFBSSxDQUFDLHNCQUFzQk8sS0FBS1AsR0FBRyxHQUFHO01BQ2xDLElBQUksZ0JBQWdCLE9BQU9FLEtBQUs7UUFDNUJGLE1BQU1FLElBQUlOLFdBQVcsT0FBT0k7TUFDaEMsT0FDSztRQUNEQSxNQUFNLGFBQWFBO01BQ3ZCO0lBQ0o7SUFFQUcsVUFBTUsscUJBQU1SLEdBQUc7RUFDbkI7RUFFQSxJQUFJLENBQUNHLElBQUlNLE1BQU07SUFDWCxJQUFJLGNBQWNGLEtBQUtKLElBQUlQLFFBQVEsR0FBRztNQUNsQ08sSUFBSU0sT0FBTztJQUNmLFdBQ1MsZUFBZUYsS0FBS0osSUFBSVAsUUFBUSxHQUFHO01BQ3hDTyxJQUFJTSxPQUFPO0lBQ2Y7RUFDSjtFQUNBTixJ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ckI1RCxLQUFLNkQsV0FBVTtZQUNmLEtBQUtsRixhQUFhLG1CQUFtQkQsR0FBRztVQUM1QyxPQUNLO1lBQ0RzQixLQUFLbUYsYUFBWTtVQUNyQjtRQUNKLENBQUM7TUFDTCxHQUFHRCxLQUFLO01BQ1IsSUFBSSxLQUFLaEssS0FBS2tKLFdBQVc7UUFDckJsRyxNQUFNbUcsT0FBTTtNQUNoQjtNQUNBLEtBQUt2SSxLQUFLa0MsS0FBSyxTQUFTM0QsYUFBYTtRQUNqQ2lLLGFBQWFwRyxLQUFLO01BQ3RCLENBQUM7SUFDTDtFQUNKO0VBTUFpSCxjQUFjO0lBQ1YsTUFBTUMsVUFBVSxLQUFLekMsUUFBUXZCO0lBQzdCLEtBQUt3QyxnQkFBZ0I7SUFDckIsS0FBS2pCLFFBQVFkLE9BQU07SUFDbkIsS0FBS2xELGFBQWEsYUFBYXlHLE9BQU87RUFDMUM7QUFDSjs7O0FDblRBLHFCQUF5QmxNO0FBNUN6QixJQUFNbU0sUUFBUSxDQUFDO0FBQ2YsU0FBU0MsT0FBT2xNLEtBQUs4QixNQUFNO0VBQ3ZCLElBQUksT0FBTzlCLFFBQVEsVUFBVTtJQUN6QjhCLE9BQU85QjtJQUNQQSxNQUFNO0VBQ1Y7RUFDQThCLE9BQU9BLFFBQVEsQ0FBQztFQUNoQixNQUFNcUssU0FBU3BNLElBQUlDLEtBQUs4QixLQUFLN0IsUUFBUSxZQUFZO0VBQ2pELE1BQU1tTSxTQUFTRCxPQUFPQztFQUN0QixNQUFNeEwsS0FBS3VMLE9BQU92TDtFQUNsQixNQUFNWCxPQUFPa00sT0FBT2xNO0VBQ3BCLE1BQU15RixnQkFBZ0J1RyxNQUFNckwsT0FBT1gsUUFBUWdNLE1BQU1yTCxJQUFJO0VBQ3JELE1BQU15TCxnQkFBZ0J2SyxLQUFLd0ssWUFDdkJ4SyxLQUFLLDJCQUNMLFVBQVVBLEtBQUt5SyxhQUNmN0c7RUFDSixJQUFJL0Y7RUFDSixJQUFJME0sZUFBZTtJQUNmMU0sS0FBSyxJQUFJSixRQUFRNk0sUUFBUXRLLElBQUk7RUFDakMsT0FDSztJQUNELElBQUksQ0FBQ21LLE1BQU1yTCxLQUFLO01BQ1pxTCxNQUFNckwsTUFBTSxJQUFJckIsUUFBUTZNLFFBQVF0SyxJQUFJO0lBQ3hDO0lBQ0FuQyxLQUFLc00sTUFBTXJMO0VBQ2Y7RUFDQSxJQUFJdUwsT0FBT0ssU0FBUyxDQUFDMUssS0FBSzBLLE9BQU87SUFDN0IxSyxLQUFLMEssUUFBUUwsT0FBT007RUFDeEI7RUFDQSxPQUFPOU0sR0FBR2dMLE9BQU93QixPQUFPbE0sTUFBTTZCLElBQUk7QUFDdEM7QUFHQVYsT0FBT3NMLE9BQU9SLFFBQVE7RUFDbEIzTTtFQUNBQztFQUNBRyxJQUFJdU07RUFDSnpNLFNBQVN5TTtBQUNiLENBQUM7OztBTnpDRCxJQUFPUyxpQ0FBUVQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9wcm9qZWN0L291dCJ9