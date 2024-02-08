define(["@socket.io/component-emitter@3.1.0"], (dep_0) => {

const bimport = specifier => {
	const dependencies = new Map([["@socket.io/component-emitter","3.1.0"],["socket.io-parser","4.2.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};



const dependencies = new Map([["@socket.io/component-emitter@3.1.0", dep_0]]);
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

// .beyond/uimport/temp/socket.io-parser.4.2.1.js
var socket_io_parser_4_2_1_exports = {};
__export(socket_io_parser_4_2_1_exports, {
  Decoder: () => Decoder,
  Encoder: () => Encoder,
  PacketType: () => PacketType,
  protocol: () => protocol
});
module.exports = __toCommonJS(socket_io_parser_4_2_1_exports);

// node_modules/socket.io-parser/build/esm/is-binary.js
var withNativeArrayBuffer = typeof ArrayBuffer === "function";
var isView = obj => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
};
var toString = Object.prototype.toString;
var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
var withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
function isBinary(obj) {
  return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
}
function hasBinary(obj, toJSON) {
  if (!obj || typeof obj !== "object") {
    return false;
  }
  if (Array.isArray(obj)) {
    for (let i = 0, l = obj.length; i < l; i++) {
      if (hasBinary(obj[i])) {
        return true;
      }
    }
    return false;
  }
  if (isBinary(obj)) {
    return true;
  }
  if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }
  return false;
}

// node_modules/socket.io-parser/build/esm/binary.js
function deconstructPacket(packet) {
  const buffers = [];
  const packetData = packet.data;
  const pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length;
  return {
    packet: pack,
    buffers
  };
}
function _deconstructPacket(data, buffers) {
  if (!data) return data;
  if (isBinary(data)) {
    const placeholder = {
      _placeholder: true,
      num: buffers.length
    };
    buffers.push(data);
    return placeholder;
  } else if (Array.isArray(data)) {
    const newData = new Array(data.length);
    for (let i = 0; i < data.length; i++) {
      newData[i] = _deconstructPacket(data[i], buffers);
    }
    return newData;
  } else if (typeof data === "object" && !(data instanceof Date)) {
    const newData = {};
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        newData[key] = _deconstructPacket(data[key], buffers);
      }
    }
    return newData;
  }
  return data;
}
function reconstructPacket(packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  packet.attachments = void 0;
  return packet;
}
function _reconstructPacket(data, buffers) {
  if (!data) return data;
  if (data && data._placeholder === true) {
    const isIndexValid = typeof data.num === "number" && data.num >= 0 && data.num < buffers.length;
    if (isIndexValid) {
      return buffers[data.num];
    } else {
      throw new Error("illegal attachments");
    }
  } else if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      data[i] = _reconstructPacket(data[i], buffers);
    }
  } else if (typeof data === "object") {
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        data[key] = _reconstructPacket(data[key], buffers);
      }
    }
  }
  return data;
}

// node_modules/socket.io-parser/build/esm/index.js
var import_component_emitter = require("@socket.io/component-emitter@3.1.0");
var protocol = 5;
var PacketType;
(function (PacketType2) {
  PacketType2[PacketType2["CONNECT"] = 0] = "CONNECT";
  PacketType2[PacketType2["DISCONNECT"] = 1] = "DISCONNECT";
  PacketType2[PacketType2["EVENT"] = 2] = "EVENT";
  PacketType2[PacketType2["ACK"] = 3] = "ACK";
  PacketType2[PacketType2["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
  PacketType2[PacketType2["BINARY_EVENT"] = 5] = "BINARY_EVENT";
  PacketType2[PacketType2["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType || (PacketType = {}));
var Encoder = class {
  constructor(replacer) {
    this.replacer = replacer;
  }
  encode(obj) {
    if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
      if (hasBinary(obj)) {
        obj.type = obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK;
        return this.encodeAsBinary(obj);
      }
    }
    return [this.encodeAsString(obj)];
  }
  encodeAsString(obj) {
    let str = "" + obj.type;
    if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
      str += obj.attachments + "-";
    }
    if (obj.nsp && "/" !== obj.nsp) {
      str += obj.nsp + ",";
    }
    if (null != obj.id) {
      str += obj.id;
    }
    if (null != obj.data) {
      str += JSON.stringify(obj.data, this.replacer);
    }
    return str;
  }
  encodeAsBinary(obj) {
    const deconstruction = deconstructPacket(obj);
    const pack = this.encodeAsString(deconstruction.packet);
    const buffers = deconstruction.buffers;
    buffers.unshift(pack);
    return buffers;
  }
};
var Decoder = class extends import_component_emitter.Emitter {
  constructor(reviver) {
    super();
    this.reviver = reviver;
  }
  add(obj) {
    let packet;
    if (typeof obj === "string") {
      if (this.reconstructor) {
        throw new Error("got plaintext data when reconstructing a packet");
      }
      packet = this.decodeString(obj);
      if (packet.type === PacketType.BINARY_EVENT || packet.type === PacketType.BINARY_ACK) {
        this.reconstructor = new BinaryReconstructor(packet);
        if (packet.attachments === 0) {
          super.emitReserved("decoded", packet);
        }
      } else {
        super.emitReserved("decoded", packet);
      }
    } else if (isBinary(obj) || obj.base64) {
      if (!this.reconstructor) {
        throw new Error("got binary data when not reconstructing a packet");
      } else {
        packet = this.reconstructor.takeBinaryData(obj);
        if (packet) {
          this.reconstructor = null;
          super.emitReserved("decoded", packet);
        }
      }
    } else {
      throw new Error("Unknown type: " + obj);
    }
  }
  decodeString(str) {
    let i = 0;
    const p = {
      type: Number(str.charAt(0))
    };
    if (PacketType[p.type] === void 0) {
      throw new Error("unknown packet type " + p.type);
    }
    if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
      const start = i + 1;
      while (str.charAt(++i) !== "-" && i != str.length) {}
      const buf = str.substring(start, i);
      if (buf != Number(buf) || str.charAt(i) !== "-") {
        throw new Error("Illegal attachments");
      }
      p.attachments = Number(buf);
    }
    if ("/" === str.charAt(i + 1)) {
      const start = i + 1;
      while (++i) {
        const c = str.charAt(i);
        if ("," === c) break;
        if (i === str.length) break;
      }
      p.nsp = str.substring(start, i);
    } else {
      p.nsp = "/";
    }
    const next = str.charAt(i + 1);
    if ("" !== next && Number(next) == next) {
      const start = i + 1;
      while (++i) {
        const c = str.charAt(i);
        if (null == c || Number(c) != c) {
          --i;
          break;
        }
        if (i === str.length) break;
      }
      p.id = Number(str.substring(start, i + 1));
    }
    if (str.charAt(++i)) {
      const payload = this.tryParse(str.substr(i));
      if (Decoder.isPayloadValid(p.type, payload)) {
        p.data = payload;
      } else {
        throw new Error("invalid payload");
      }
    }
    return p;
  }
  tryParse(str) {
    try {
      return JSON.parse(str, this.reviver);
    } catch (e) {
      return false;
    }
  }
  static isPayloadValid(type, payload) {
    switch (type) {
      case PacketType.CONNECT:
        return typeof payload === "object";
      case PacketType.DISCONNECT:
        return payload === void 0;
      case PacketType.CONNECT_ERROR:
        return typeof payload === "string" || typeof payload === "object";
      case PacketType.EVENT:
      case PacketType.BINARY_EVENT:
        return Array.isArray(payload) && payload.length > 0;
      case PacketType.ACK:
      case PacketType.BINARY_ACK:
        return Array.isArray(payload);
    }
  }
  destroy() {
    if (this.reconstructor) {
      this.reconstructor.finishedReconstruction();
    }
  }
};
var BinaryReconstructor = class {
  constructor(packet) {
    this.packet = packet;
    this.buffers = [];
    this.reconPack = packet;
  }
  takeBinaryData(binData) {
    this.buffers.push(binData);
    if (this.buffers.length === this.reconPack.attachments) {
      const packet = reconstructPacket(this.reconPack, this.buffers);
      this.finishedReconstruction();
      return packet;
    }
    return null;
  }
  finishedReconstruction() {
    this.reconPack = null;
    this.buffers = [];
  }
};
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3NvY2tldC5pby1wYXJzZXIuNC4yLjEuanMiLCIuLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLXBhcnNlci9idWlsZC9lc20vaXMtYmluYXJ5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1wYXJzZXIvYnVpbGQvZXNtL2JpbmFyeS5qcyIsIi4uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tcGFyc2VyL2J1aWxkL2VzbS9pbmRleC5qcyJdLCJuYW1lcyI6WyJzb2NrZXRfaW9fcGFyc2VyXzRfMl8xX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkRlY29kZXIiLCJFbmNvZGVyIiwiUGFja2V0VHlwZSIsInByb3RvY29sIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIndpdGhOYXRpdmVBcnJheUJ1ZmZlciIsIkFycmF5QnVmZmVyIiwiaXNWaWV3Iiwib2JqIiwiYnVmZmVyIiwidG9TdHJpbmciLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ3aXRoTmF0aXZlQmxvYiIsIkJsb2IiLCJjYWxsIiwid2l0aE5hdGl2ZUZpbGUiLCJGaWxlIiwiaXNCaW5hcnkiLCJoYXNCaW5hcnkiLCJ0b0pTT04iLCJBcnJheSIsImlzQXJyYXkiLCJpIiwibCIsImxlbmd0aCIsImFyZ3VtZW50cyIsImtleSIsImhhc093blByb3BlcnR5IiwiZGVjb25zdHJ1Y3RQYWNrZXQiLCJwYWNrZXQiLCJidWZmZXJzIiwicGFja2V0RGF0YSIsImRhdGEiLCJwYWNrIiwiX2RlY29uc3RydWN0UGFja2V0IiwiYXR0YWNobWVudHMiLCJwbGFjZWhvbGRlciIsIl9wbGFjZWhvbGRlciIsIm51bSIsInB1c2giLCJuZXdEYXRhIiwiRGF0ZSIsInJlY29uc3RydWN0UGFja2V0IiwiX3JlY29uc3RydWN0UGFja2V0IiwiaXNJbmRleFZhbGlkIiwiRXJyb3IiLCJpbXBvcnRfY29tcG9uZW50X2VtaXR0ZXIiLCJyZXF1aXJlIiwiUGFja2V0VHlwZTIiLCJjb25zdHJ1Y3RvciIsInJlcGxhY2VyIiwiZW5jb2RlIiwidHlwZSIsIkVWRU5UIiwiQUNLIiwiQklOQVJZX0VWRU5UIiwiQklOQVJZX0FDSyIsImVuY29kZUFzQmluYXJ5IiwiZW5jb2RlQXNTdHJpbmciLCJzdHIiLCJuc3AiLCJpZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkZWNvbnN0cnVjdGlvbiIsInVuc2hpZnQiLCJFbWl0dGVyIiwicmV2aXZlciIsImFkZCIsInJlY29uc3RydWN0b3IiLCJkZWNvZGVTdHJpbmciLCJCaW5hcnlSZWNvbnN0cnVjdG9yIiwiZW1pdFJlc2VydmVkIiwiYmFzZTY0IiwidGFrZUJpbmFyeURhdGEiLCJwIiwiTnVtYmVyIiwiY2hhckF0Iiwic3RhcnQiLCJidWYiLCJzdWJzdHJpbmciLCJjIiwibmV4dCIsInBheWxvYWQiLCJ0cnlQYXJzZSIsInN1YnN0ciIsImlzUGF5bG9hZFZhbGlkIiwicGFyc2UiLCJlIiwiQ09OTkVDVCIsIkRJU0NPTk5FQ1QiLCJDT05ORUNUX0VSUk9SIiwiZGVzdHJveSIsImZpbmlzaGVkUmVjb25zdHJ1Y3Rpb24iLCJyZWNvblBhY2siLCJiaW5EYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsOEJBQUE7QUFBQUMsUUFBQSxDQUFBRCw4QkFBQTtFQUFBRSxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBUiw4QkFBQTs7O0FDQUEsSUFBTVMscUJBQUEsR0FBd0IsT0FBT0MsV0FBQSxLQUFnQjtBQUNyRCxJQUFNQyxNQUFBLEdBQVVDLEdBQUEsSUFBUTtFQUNwQixPQUFPLE9BQU9GLFdBQUEsQ0FBWUMsTUFBQSxLQUFXLGFB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