define(["@socket.io/component-emitter@3.1.0"], (dep_0) => {

const bimport = specifier => {
	const dependencies = new Map([["@socket.io/component-emitter","3.1.0"],["socket.io-parser","4.2.2"]]);
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

// .beyond/uimport/socket.io-parser.4.2.2.js
var socket_io_parser_4_2_2_exports = {};
__export(socket_io_parser_4_2_2_exports, {
  Decoder: () => Decoder,
  Encoder: () => Encoder,
  PacketType: () => PacketType,
  protocol: () => protocol
});
module.exports = __toCommonJS(socket_io_parser_4_2_2_exports);

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
  delete packet.attachments;
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
        return this.encodeAsBinary({
          type: obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK,
          nsp: obj.nsp,
          data: obj.data,
          id: obj.id
        });
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
      const isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
      if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
        packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
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
      this.reconstructor = null;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9zb2NrZXQuaW8tcGFyc2VyLjQuMi4yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1wYXJzZXIvYnVpbGQvZXNtL2lzLWJpbmFyeS5qcyIsIi4uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tcGFyc2VyL2J1aWxkL2VzbS9iaW5hcnkuanMiLCIuLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLXBhcnNlci9idWlsZC9lc20vaW5kZXguanMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJEZWNvZGVyIiwiRW5jb2RlciIsIlBhY2tldFR5cGUiLCJwcm90b2NvbCIsIm1vZHVsZSIsIndpdGhOYXRpdmVBcnJheUJ1ZmZlciIsIkFycmF5QnVmZmVyIiwiaXNWaWV3Iiwib2JqIiwiYnVmZmVyIiwidG9TdHJpbmciLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ3aXRoTmF0aXZlQmxvYiIsIkJsb2IiLCJjYWxsIiwid2l0aE5hdGl2ZUZpbGUiLCJGaWxlIiwiaXNCaW5hcnkiLCJoYXNCaW5hcnkiLCJ0b0pTT04iLCJBcnJheSIsImlzQXJyYXkiLCJpIiwibCIsImxlbmd0aCIsImFyZ3VtZW50cyIsImtleSIsImhhc093blByb3BlcnR5IiwiZGVjb25zdHJ1Y3RQYWNrZXQiLCJwYWNrZXQiLCJidWZmZXJzIiwicGFja2V0RGF0YSIsImRhdGEiLCJwYWNrIiwiX2RlY29uc3RydWN0UGFja2V0IiwiYXR0YWNobWVudHMiLCJwbGFjZWhvbGRlciIsIl9wbGFjZWhvbGRlciIsIm51bSIsInB1c2giLCJuZXdEYXRhIiwiRGF0ZSIsInJlY29uc3RydWN0UGFja2V0IiwiX3JlY29uc3RydWN0UGFja2V0IiwiaXNJbmRleFZhbGlkIiwiRXJyb3IiLCJyZXF1aXJlIiwiY29uc3RydWN0b3IiLCJyZXBsYWNlciIsImVuY29kZSIsInR5cGUiLCJFVkVOVCIsIkFDSyIsImVuY29kZUFzQmluYXJ5IiwiQklOQVJZX0VWRU5UIiwiQklOQVJZX0FDSyIsIm5zcCIsImlkIiwiZW5jb2RlQXNTdHJpbmciLCJzdHIiLCJKU09OIiwic3RyaW5naWZ5IiwiZGVjb25zdHJ1Y3Rpb24iLCJ1bnNoaWZ0IiwiaW1wb3J0X2NvbXBvbmVudF9lbWl0dGVyIiwicmV2aXZlciIsImFkZCIsInJlY29uc3RydWN0b3IiLCJkZWNvZGVTdHJpbmciLCJpc0JpbmFyeUV2ZW50IiwiQmluYXJ5UmVjb25zdHJ1Y3RvciIsImVtaXRSZXNlcnZlZCIsImJhc2U2NCIsInRha2VCaW5hcnlEYXRhIiwicCIsIk51bWJlciIsImNoYXJBdCIsInN0YXJ0IiwiYnVmIiwic3Vic3RyaW5nIiwiYyIsIm5leHQiLCJwYXlsb2FkIiwidHJ5UGFyc2UiLCJzdWJzdHIiLCJpc1BheWxvYWRWYWxpZCIsInBhcnNlIiwiZSIsIkNPTk5FQ1QiLCJESVNDT05ORUNUIiwiQ09OTkVDVF9FUlJPUiIsImRlc3Ryb3kiLCJmaW5pc2hlZFJlY29uc3RydWN0aW9uIiwicmVjb25QYWNrIiwiYmluRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0FBQUE7QUFBQUM7OztBQ0FBLElBQU1DLHdCQUF3QixPQUFPQyxnQkFBZ0I7QUFDckQsSUFBTUMsU0FBVUMsT0FBUTtFQUNwQixPQUFPLE9BQU9GLFlBQVlDLFdBQVcsYUFDL0JELFlBQVlDLE9BQU9DLEdBQUcsSUFDdEJBLElBQUlDLGtCQUFrQkg7QUFDaEM7QUFDQSxJQUFNSSxXQUFXQyxPQUFPQyxVQUFVRjtBQUNsQyxJQUFNRyxpQkFBaUIsT0FBT0MsU0FBUyxjQUNsQyxPQUFPQSxTQUFTLGVBQ2JKLFNBQVNLLEtBQUtELElBQUksTUFBTTtBQUNoQyxJQUFNRSxpQkFBaUIsT0FBT0MsU0FBUyxjQUNsQyxPQUFPQSxTQUFTLGVBQ2JQLFNBQVNLLEtBQUtFLElBQUksTUFBTTtBQU16QixTQUFTQyxTQUFTVixLQUFLO0VBQzFCLE9BQVNILDBCQUEwQkcsZUFBZUYsZUFBZUMsT0FBT0MsR0FBRyxNQUN0RUssa0JBQWtCTCxlQUFlTSxRQUNqQ0Usa0JBQWtCUixlQUFlUztBQUMxQztBQUNPLFNBQVNFLFVBQVVYLEtBQUtZLFFBQVE7RUFDbkMsSUFBSSxDQUFDWixPQUFPLE9BQU9BLFFBQVEsVUFBVTtJQUNqQyxPQUFPO0VBQ1g7RUFDQSxJQUFJYSxNQUFNQyxRQUFRZCxHQUFHLEdBQUc7SUFDcEIsU0FBU2UsSUFBSSxHQUFHQyxJQUFJaEIsSUFBSWlCLFFBQVFGLElBQUlDLEdBQUdELEtBQUs7TUFDeEMsSUFBSUosVUFBVVgsSUFBSWUsRUFBRSxHQUFHO1FBQ25CLE9BQU87TUFDWDtJQUNKO0lBQ0EsT0FBTztFQUNYO0VBQ0EsSUFBSUwsU0FBU1YsR0FBRyxHQUFHO0lBQ2YsT0FBTztFQUNYO0VBQ0EsSUFBSUEsSUFBSVksVUFDSixPQUFPWixJQUFJWSxXQUFXLGNBQ3RCTSxVQUFVRCxXQUFXLEdBQUc7SUFDeEIsT0FBT04sVUFBVVgsSUFBSVksUUFBTyxFQUFHLElBQUk7RUFDdkM7RUFDQSxXQUFXTyxPQUFPbkIsS0FBSztJQUNuQixJQUFJRyxPQUFPQyxVQUFVZ0IsZUFBZWIsS0FBS1AsS0FBS21CLEdBQUcsS0FBS1IsVUFBVVgsSUFBSW1CLElBQUksR0FBRztNQUN2RSxPQUFPO0lBQ1g7RUFDSjtFQUNBLE9BQU87QUFDWDs7O0FDekNPLFNBQVNFLGtCQUFrQkMsUUFBUTtFQUN0QyxNQUFNQyxVQUFVLEVBQUM7RUFDakIsTUFBTUMsYUFBYUYsT0FBT0c7RUFDMUIsTUFBTUMsT0FBT0o7RUFDYkksS0FBS0QsT0FBT0UsbUJBQW1CSCxZQUFZRCxPQUFPO0VBQ2xERyxLQUFLRSxjQUFjTCxRQUFRTjtFQUMzQixPQUFPO0lBQUVLLFFBQVFJO0lBQU1IO0VBQWlCO0FBQzVDO0FBQ0EsU0FBU0ksbUJBQW1CRixNQUFNRixTQUFTO0VBQ3ZDLElBQUksQ0FBQ0UsTUFDRCxPQUFPQTtFQUNYLElBQUlmLFNBQVNlLElBQUksR0FBRztJQUNoQixNQUFNSSxjQUFjO01BQUVDLGNBQWM7TUFBTUMsS0FBS1IsUUFBUU47SUFBTztJQUM5RE0sUUFBUVMsS0FBS1AsSUFBSTtJQUNqQixPQUFPSTtFQUNYLFdBQ1NoQixNQUFNQyxRQUFRVyxJQUFJLEdBQUc7SUFDMUIsTUFBTVEsVUFBVSxJQUFJcEIsTUFBTVksS0FBS1IsTUFBTTtJQUNyQyxTQUFTRixJQUFJLEdBQUdBLElBQUlVLEtBQUtSLFFBQVFGLEtBQUs7TUFDbENrQixRQUFRbEIsS0FBS1ksbUJBQW1CRixLQUFLVixJQUFJUSxPQUFPO0lBQ3BEO0lBQ0EsT0FBT1U7RUFDWCxXQUNTLE9BQU9SLFNBQVMsWUFBWSxFQUFFQSxnQkFBZ0JTLE9BQU87SUFDMUQsTUFBTUQsVUFBVSxDQUFDO0lBQ2pCLFdBQVdkLE9BQU9NLE1BQU07TUFDcEIsSUFBSXRCLE9BQU9DLFVBQVVnQixlQUFlYixLQUFLa0IsTUFBTU4sR0FBRyxHQUFHO1FBQ2pEYyxRQUFRZCxPQUFPUSxtQkFBbUJGLEtBQUtOLE1BQU1JLE9BQU87TUFDeEQ7SUFDSjtJQUNBLE9BQU9VO0VBQ1g7RUFDQSxPQUFPUjtBQUNYO0FBU08sU0FBU1Usa0JBQWtCYixRQUFRQyxTQUFTO0VBQy9DRCxPQUFPRyxPQUFPVyxtQkFBbUJkLE9BQU9HLE1BQU1GLE9BQU87RUFDckQsT0FBT0QsT0FBT007RUFDZCxPQUFPTjtBQUNYO0FBQ0EsU0FBU2MsbUJBQW1CWCxNQUFNRixTQUFTO0VBQ3ZDLElBQUksQ0FBQ0UsTUFDRCxPQUFPQTtFQUNYLElBQUlBLFFBQVFBLEtBQUtLLGlCQUFpQixNQUFNO0lBQ3BDLE1BQU1PLGVBQWUsT0FBT1osS0FBS00sUUFBUSxZQUNyQ04sS0FBS00sT0FBTyxLQUNaTixLQUFLTSxNQUFNUixRQUFRTjtJQUN2QixJQUFJb0IsY0FBYztNQUNkLE9BQU9kLFFBQVFFLEtBQUtNO0lBQ3hCLE9BQ0s7TUFDRCxNQUFNLElBQUlPLE1BQU0scUJBQXFCO0lBQ3pDO0VBQ0osV0FDU3pCLE1BQU1DLFFBQVFXLElBQUksR0FBRztJQUMxQixTQUFTVixJQUFJLEdBQUdBLElBQUlVLEtBQUtSLFFBQVFGLEtBQUs7TUFDbENVLEtBQUtWLEtBQUtxQixtQkFBbUJYLEtBQUtWLElBQUlRLE9BQU87SUFDakQ7RUFDSixXQUNTLE9BQU9FLFNBQVMsVUFBVTtJQUMvQixXQUFXTixPQUFPTSxNQUFNO01BQ3BCLElBQUl0QixPQUFPQyxVQUFVZ0IsZUFBZWIsS0FBS2tCLE1BQU1OLEdBQUcsR0FBRztRQUNqRE0sS0FBS04sT0FBT2lCLG1CQUFtQlgsS0FBS04sTUFBTUksT0FBTztNQUNyRDtJQUNKO0VBQ0o7RUFDQSxPQUFPRTtBQUNYOzs7QUNsRkEsK0JBQXdCYztBQVFqQixJQUFNNUMsV0FBVztBQUNqQixJQUFJRDtBQUFBLENBQ1YsVUFBVUEsYUFBWTtFQUNuQkEsWUFBV0EsWUFBVyxhQUFhLEtBQUs7RUFDeENBLFlBQVdBLFlBQVcsZ0JBQWdCLEtBQUs7RUFDM0NBLFlBQVdBLFlBQVcsV0FBVyxLQUFLO0VBQ3RDQSxZQUFXQSxZQUFXLFNBQVMsS0FBSztFQUNwQ0EsWUFBV0EsWUFBVyxtQkFBbUIsS0FBSztFQUM5Q0EsWUFBV0EsWUFBVyxrQkFBa0IsS0FBSztFQUM3Q0EsWUFBV0EsWUFBVyxnQkFBZ0IsS0FBSztBQUMvQyxHQUFHQSxlQUFlQSxhQUFhLENBQUMsRUFBRTtBQUkzQixJQUFNRCxVQUFOLE1BQWM7RUFNakIrQyxZQUFZQyxVQUFVO0lBQ2xCLEtBQUtBLFdBQVdBO0VBQ3BCO0VBT0FDLE9BQU8xQyxLQUFLO0lBQ1IsSUFBSUEsSUFBSTJDLFNBQVNqRCxXQUFXa0QsU0FBUzVDLElBQUkyQyxTQUFTakQsV0FBV21ELEtBQUs7TUFDOUQsSUFBSWxDLFVBQVVYLEdBQUcsR0FBRztRQUNoQixPQUFPLEtBQUs4QyxlQUFlO1VBQ3ZCSCxNQUFNM0MsSUFBSTJDLFNBQVNqRCxXQUFXa0QsUUFDeEJsRCxXQUFXcUQsZUFDWHJELFdBQVdzRDtVQUNqQkMsS0FBS2pELElBQUlpRDtVQUNUeEIsTUFBTXpCLElBQUl5QjtVQUNWeUIsSUFBSWxELElBQUlrRDtRQUNaLENBQUM7TUFDTDtJQUNKO0lBQ0EsT0FBTyxDQUFDLEtBQUtDLGVBQWVuRCxHQUFHLENBQUM7RUFDcEM7RUFJQW1ELGVBQWVuRCxLQUFLO0lBRWhCLElBQUlvRCxNQUFNLEtBQUtwRCxJQUFJMkM7SUFFbkIsSUFBSTNDLElBQUkyQyxTQUFTakQsV0FBV3FELGdCQUN4Qi9DLElBQUkyQyxTQUFTakQsV0FBV3NELFlBQVk7TUFDcENJLE9BQU9wRCxJQUFJNEIsY0FBYztJQUM3QjtJQUdBLElBQUk1QixJQUFJaUQsT0FBTyxRQUFRakQsSUFBSWlELEtBQUs7TUFDNUJHLE9BQU9wRCxJQUFJaUQsTUFBTTtJQUNyQjtJQUVBLElBQUksUUFBUWpELElBQUlrRCxJQUFJO01BQ2hCRSxPQUFPcEQsSUFBSWtEO0lBQ2Y7SUFFQSxJQUFJLFFBQVFsRCxJQUFJeUIsTUFBTTtNQUNsQjJCLE9BQU9DLEtBQUtDLFVBQVV0RCxJQUFJeUIsTUFBTSxLQUFLZ0IsUUFBUTtJQUNqRDtJQUNBLE9BQU9XO0VBQ1g7RUFNQU4sZUFBZTlDLEtBQUs7SUFDaEIsTUFBTXVELGlCQUFpQmxDLGtCQUFrQnJCLEdBQUc7SUFDNUMsTUFBTTBCLE9BQU8sS0FBS3lCLGVBQWVJLGVBQWVqQyxNQUFNO0lBQ3RELE1BQU1DLFVBQVVnQyxlQUFlaEM7SUFDL0JBLFFBQVFpQyxRQUFROUIsSUFBSTtJQUNwQixPQUFPSDtFQUNYO0FBQ0o7QUFNTyxJQUFNL0IsVUFBTixjQUFzQmlFLGlDQUFRO0VBTWpDakIsWUFBWWtCLFNBQVM7SUFDakIsT0FBTTtJQUNOLEtBQUtBLFVBQVVBO0VBQ25CO0VBTUFDLElBQUkzRCxLQUFLO0lBQ0wsSUFBSXNCO0lBQ0osSUFBSSxPQUFPdEIsUUFBUSxVQUFVO01BQ3pCLElBQUksS0FBSzRELGVBQWU7UUFDcEIsTUFBTSxJQUFJdEIsTUFBTSxpREFBaUQ7TUFDckU7TUFDQWhCLFNBQVMsS0FBS3VDLGFBQWE3RCxHQUFHO01BQzlCLE1BQU04RCxnQkFBZ0J4QyxPQUFPcUIsU0FBU2pELFdBQVdxRDtNQUNqRCxJQUFJZSxpQkFBaUJ4QyxPQUFPcUIsU0FBU2pELFdBQVdzRCxZQUFZO1FBQ3hEMUIsT0FBT3FCLE9BQU9tQixnQkFBZ0JwRSxXQUFXa0QsUUFBUWxELFdBQVdtRDtRQUU1RCxLQUFLZSxnQkFBZ0IsSUFBSUcsb0JBQW9CekMsTUFBTTtRQUVuRCxJQUFJQSxPQUFPTSxnQkFBZ0IsR0FBRztVQUMxQixNQUFNb0MsYUFBYSxXQUFXMUMsTUFBTTtRQUN4QztNQUNKLE9BQ0s7UUFFRCxNQUFNMEMsYUFBYSxXQUFXMUMsTUFBTTtNQUN4QztJQUNKLFdBQ1NaLFNBQVNWLEdBQUcsS0FBS0EsSUFBSWlFLFFBQVE7TUFFbEMsSUFBSSxDQUFDLEtBQUtMLGVBQWU7UUFDckIsTUFBTSxJQUFJdEIsTUFBTSxrREFBa0Q7TUFDdEUsT0FDSztRQUNEaEIsU0FBUyxLQUFLc0MsY0FBY00sZUFBZWxFLEdBQUc7UUFDOUMsSUFBSXNCLFFBQVE7VUFFUixLQUFLc0MsZ0JBQWdCO1VBQ3JCLE1BQU1JLGFBQWEsV0FBVzFDLE1BQU07UUFDeEM7TUFDSjtJQUNKLE9BQ0s7TUFDRCxNQUFNLElBQUlnQixNQUFNLG1CQUFtQnRDLEdBQUc7SUFDMUM7RUFDSjtFQU9BNkQsYUFBYVQsS0FBSztJQUNkLElBQUlyQyxJQUFJO0lBRVIsTUFBTW9ELElBQUk7TUFDTnhCLE1BQU15QixPQUFPaEIsSUFBSWlCLE9BQU8sQ0FBQyxDQUFDO0lBQzlCO0lBQ0EsSUFBSTNFLFdBQVd5RSxFQUFFeEIsVUFBVSxRQUFXO01BQ2xDLE1BQU0sSUFBSUwsTUFBTSx5QkFBeUI2QixFQUFFeEIsSUFBSTtJQUNuRDtJQUVBLElBQUl3QixFQUFFeEIsU0FBU2pELFdBQVdxRCxnQkFDdEJvQixFQUFFeEIsU0FBU2pELFdBQVdzRCxZQUFZO01BQ2xDLE1BQU1zQixRQUFRdkQsSUFBSTtNQUNsQixPQUFPcUMsSUFBSWlCLE9BQU8sRUFBRXRELENBQUMsTUFBTSxPQUFPQSxLQUFLcUMsSUFBSW5DLFFBQVEsQ0FBRTtNQUNyRCxNQUFNc0QsTUFBTW5CLElBQUlvQixVQUFVRixPQUFPdkQsQ0FBQztNQUNsQyxJQUFJd0QsT0FBT0gsT0FBT0csR0FBRyxLQUFLbkIsSUFBSWlCLE9BQU90RCxDQUFDLE1BQU0sS0FBSztRQUM3QyxNQUFNLElBQUl1QixNQUFNLHFCQUFxQjtNQUN6QztNQUNBNkIsRUFBRXZDLGNBQWN3QyxPQUFPRyxHQUFHO0lBQzlCO0lBRUEsSUFBSSxRQUFRbkIsSUFBSWlCLE9BQU90RCxJQUFJLENBQUMsR0FBRztNQUMzQixNQUFNdUQsUUFBUXZELElBQUk7TUFDbEIsT0FBTyxFQUFFQSxHQUFHO1FBQ1IsTUFBTTBELElBQUlyQixJQUFJaUIsT0FBT3RELENBQUM7UUFDdEIsSUFBSSxRQUFRMEQsR0FDUjtRQUNKLElBQUkxRCxNQUFNcUMsSUFBSW5DLFFBQ1Y7TUFDUjtNQUNBa0QsRUFBRWxCLE1BQU1HLElBQUlvQixVQUFVRixPQUFPdkQsQ0FBQztJQUNsQyxPQUNLO01BQ0RvRCxFQUFFbEIsTUFBTTtJQUNaO0lBRUEsTUFBTXlCLE9BQU90QixJQUFJaUIsT0FBT3RELElBQUksQ0FBQztJQUM3QixJQUFJLE9BQU8yRCxRQUFRTixPQUFPTSxJQUFJLEtBQUtBLE1BQU07TUFDckMsTUFBTUosUUFBUXZELElBQUk7TUFDbEIsT0FBTyxFQUFFQSxHQUFHO1FBQ1IsTUFBTTBELElBQUlyQixJQUFJaUIsT0FBT3RELENBQUM7UUFDdEIsSUFBSSxRQUFRMEQsS0FBS0wsT0FBT0ssQ0FBQyxLQUFLQSxHQUFHO1VBQzdCLEVBQUUxRDtVQUNGO1FBQ0o7UUFDQSxJQUFJQSxNQUFNcUMsSUFBSW5DLFFBQ1Y7TUFDUjtNQUNBa0QsRUFBRWpCLEtBQUtrQixPQUFPaEIsSUFBSW9CLFVBQVVGLE9BQU92RCxJQUFJLENBQUMsQ0FBQztJQUM3QztJQUVBLElBQUlxQyxJQUFJaUIsT0FBTyxFQUFFdEQsQ0FBQyxHQUFHO01BQ2pCLE1BQU00RCxVQUFVLEtBQUtDLFNBQVN4QixJQUFJeUIsT0FBTzlELENBQUMsQ0FBQztNQUMzQyxJQUFJdkIsUUFBUXNGLGVBQWVYLEVBQUV4QixNQUFNZ0MsT0FBTyxHQUFHO1FBQ3pDUixFQUFFMUMsT0FBT2tEO01BQ2IsT0FDSztRQUNELE1BQU0sSUFBSXJDLE1BQU0saUJBQWlCO01BQ3JDO0lBQ0o7SUFDQSxPQUFPNkI7RUFDWDtFQUNBUyxTQUFTeEIsS0FBSztJQUNWLElBQUk7TUFDQSxPQUFPQyxLQUFLMEIsTUFBTTNCLEtBQUssS0FBS00sT0FBTztJQUN2QyxTQUNPc0IsR0FBUDtNQUNJLE9BQU87SUFDWDtFQUNKO0VBQ0EsT0FBT0YsZUFBZW5DLE1BQU1nQyxTQUFTO0lBQ2pDLFFBQVFoQztNQUFBLEtBQ0NqRCxXQUFXdUY7UUFDWixPQUFPLE9BQU9OLFlBQVk7TUFBQSxLQUN6QmpGLFdBQVd3RjtRQUNaLE9BQU9QLFlBQVk7TUFBQSxLQUNsQmpGLFdBQVd5RjtRQUNaLE9BQU8sT0FBT1IsWUFBWSxZQUFZLE9BQU9BLFlBQVk7TUFBQSxLQUN4RGpGLFdBQVdrRDtNQUFBLEtBQ1hsRCxXQUFXcUQ7UUFDWixPQUFPbEMsTUFBTUMsUUFBUTZELE9BQU8sS0FBS0EsUUFBUTFELFNBQVM7TUFBQSxLQUNqRHZCLFdBQVdtRDtNQUFBLEtBQ1huRCxXQUFXc0Q7UUFDWixPQUFPbkMsTUFBTUMsUUFBUTZELE9BQU87SUFBQTtFQUV4QztFQUlBUyxVQUFVO0lBQ04sSUFBSSxLQUFLeEIsZUFBZTtNQUNwQixLQUFLQSxjQUFjeUIsd0JBQXVCO01BQzFDLEtBQUt6QixnQkFBZ0I7SUFDekI7RUFDSjtBQUNKO0FBU0EsSUFBTUcsc0JBQU4sTUFBMEI7RUFDdEJ2QixZQUFZbEIsUUFBUTtJQUNoQixLQUFLQSxTQUFTQTtJQUNkLEtBQUtDLFVBQVUsRUFBQztJQUNoQixLQUFLK0QsWUFBWWhFO0VBQ3JCO0VBU0E0QyxlQUFlcUIsU0FBUztJQUNwQixLQUFLaEUsUUFBUVMsS0FBS3VELE9BQU87SUFDekIsSUFBSSxLQUFLaEUsUUFBUU4sV0FBVyxLQUFLcUUsVUFBVTFELGFBQWE7TUFFcEQsTUFBTU4sU0FBU2Esa0JBQWtCLEtBQUttRCxXQUFXLEtBQUsvRCxPQUFPO01BQzdELEtBQUs4RCx3QkFBdUI7TUFDNUIsT0FBTy9EO0lBQ1g7SUFDQSxPQUFPO0VBQ1g7RUFJQStELHlCQUF5QjtJQUNyQixLQUFLQyxZQUFZO0lBQ2pCLEtBQUsvRCxVQUFVLEVBQUM7RUFDcEI7QUFDSiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3Byb2plY3Qvb3V0In0=