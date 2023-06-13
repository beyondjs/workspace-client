define([], () => {

const bimport = specifier => {
	const dependencies = new Map([["engine.io-parser","5.0.6"]]);
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

// .beyond/uimport/engine.io-parser.5.0.6.js
var engine_io_parser_5_0_6_exports = {};
__export(engine_io_parser_5_0_6_exports, {
  decodePacket: () => decodePacket_browser_default,
  decodePayload: () => decodePayload,
  encodePacket: () => encodePacket_browser_default,
  encodePayload: () => encodePayload,
  protocol: () => protocol
});
module.exports = __toCommonJS(engine_io_parser_5_0_6_exports);

// node_modules/engine.io-parser/build/esm/commons.js
var PACKET_TYPES = /* @__PURE__ */Object.create(null);
PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
var PACKET_TYPES_REVERSE = /* @__PURE__ */Object.create(null);
Object.keys(PACKET_TYPES).forEach(key => {
  PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
var ERROR_PACKET = {
  type: "error",
  data: "parser error"
};

// node_modules/engine.io-parser/build/esm/encodePacket.browser.js
var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
var withNativeArrayBuffer = typeof ArrayBuffer === "function";
var isView = obj => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
};
var encodePacket = ({
  type,
  data
}, supportsBinary, callback) => {
  if (withNativeBlob && data instanceof Blob) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(data, callback);
    }
  } else if (withNativeArrayBuffer && (data instanceof ArrayBuffer || isView(data))) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(new Blob([data]), callback);
    }
  }
  return callback(PACKET_TYPES[type] + (data || ""));
};
var encodeBlobAsBase64 = (data, callback) => {
  const fileReader = new FileReader();
  fileReader.onload = function () {
    const content = fileReader.result.split(",")[1];
    callback("b" + (content || ""));
  };
  return fileReader.readAsDataURL(data);
};
var encodePacket_browser_default = encodePacket;

// node_modules/engine.io-parser/build/esm/contrib/base64-arraybuffer.js
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for (let i = 0; i < chars.length; i++) {
  lookup[chars.charCodeAt(i)] = i;
}
var encode = arraybuffer => {
  let bytes = new Uint8Array(arraybuffer),
    i,
    len = bytes.length,
    base64 = "";
  for (i = 0; i < len; i += 3) {
    base64 += chars[bytes[i] >> 2];
    base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
    base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
    base64 += chars[bytes[i + 2] & 63];
  }
  if (len % 3 === 2) {
    base64 = base64.substring(0, base64.length - 1) + "=";
  } else if (len % 3 === 1) {
    base64 = base64.substring(0, base64.length - 2) + "==";
  }
  return base64;
};
var decode = base64 => {
  let bufferLength = base64.length * 0.75,
    len = base64.length,
    i,
    p = 0,
    encoded1,
    encoded2,
    encoded3,
    encoded4;
  if (base64[base64.length - 1] === "=") {
    bufferLength--;
    if (base64[base64.length - 2] === "=") {
      bufferLength--;
    }
  }
  const arraybuffer = new ArrayBuffer(bufferLength),
    bytes = new Uint8Array(arraybuffer);
  for (i = 0; i < len; i += 4) {
    encoded1 = lookup[base64.charCodeAt(i)];
    encoded2 = lookup[base64.charCodeAt(i + 1)];
    encoded3 = lookup[base64.charCodeAt(i + 2)];
    encoded4 = lookup[base64.charCodeAt(i + 3)];
    bytes[p++] = encoded1 << 2 | encoded2 >> 4;
    bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
    bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
  }
  return arraybuffer;
};

// node_modules/engine.io-parser/build/esm/decodePacket.browser.js
var withNativeArrayBuffer2 = typeof ArrayBuffer === "function";
var decodePacket = (encodedPacket, binaryType) => {
  if (typeof encodedPacket !== "string") {
    return {
      type: "message",
      data: mapBinary(encodedPacket, binaryType)
    };
  }
  const type = encodedPacket.charAt(0);
  if (type === "b") {
    return {
      type: "message",
      data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
    };
  }
  const packetType = PACKET_TYPES_REVERSE[type];
  if (!packetType) {
    return ERROR_PACKET;
  }
  return encodedPacket.length > 1 ? {
    type: PACKET_TYPES_REVERSE[type],
    data: encodedPacket.substring(1)
  } : {
    type: PACKET_TYPES_REVERSE[type]
  };
};
var decodeBase64Packet = (data, binaryType) => {
  if (withNativeArrayBuffer2) {
    const decoded = decode(data);
    return mapBinary(decoded, binaryType);
  } else {
    return {
      base64: true,
      data
    };
  }
};
var mapBinary = (data, binaryType) => {
  switch (binaryType) {
    case "blob":
      return data instanceof ArrayBuffer ? new Blob([data]) : data;
    case "arraybuffer":
    default:
      return data;
  }
};
var decodePacket_browser_default = decodePacket;

// node_modules/engine.io-parser/build/esm/index.js
var SEPARATOR = String.fromCharCode(30);
var encodePayload = (packets, callback) => {
  const length = packets.length;
  const encodedPackets = new Array(length);
  let count = 0;
  packets.forEach((packet, i) => {
    encodePacket_browser_default(packet, false, encodedPacket => {
      encodedPackets[i] = encodedPacket;
      if (++count === length) {
        callback(encodedPackets.join(SEPARATOR));
      }
    });
  });
};
var decodePayload = (encodedPayload, binaryType) => {
  const encodedPackets = encodedPayload.split(SEPARATOR);
  const packets = [];
  for (let i = 0; i < encodedPackets.length; i++) {
    const decodedPacket = decodePacket_browser_default(encodedPackets[i], binaryType);
    packets.push(decodedPacket);
    if (decodedPacket.type === "error") {
      break;
    }
  }
  return packets;
};
var protocol = 4;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9lbmdpbmUuaW8tcGFyc2VyLjUuMC42LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1wYXJzZXIvYnVpbGQvZXNtL2NvbW1vbnMuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9idWlsZC9lc20vZW5jb2RlUGFja2V0LmJyb3dzZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9idWlsZC9lc20vY29udHJpYi9iYXNlNjQtYXJyYXlidWZmZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9idWlsZC9lc20vZGVjb2RlUGFja2V0LmJyb3dzZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9idWlsZC9lc20vaW5kZXguanMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJkZWNvZGVQYWNrZXQiLCJkZWNvZGVQYXlsb2FkIiwiZW5jb2RlUGFja2V0IiwiZW5jb2RlUGF5bG9hZCIsInByb3RvY29sIiwibW9kdWxlIiwiUEFDS0VUX1RZUEVTIiwiY3JlYXRlIiwiUEFDS0VUX1RZUEVTX1JFVkVSU0UiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsIkVSUk9SX1BBQ0tFVCIsInR5cGUiLCJkYXRhIiwid2l0aE5hdGl2ZUJsb2IiLCJCbG9iIiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwid2l0aE5hdGl2ZUFycmF5QnVmZmVyIiwiQXJyYXlCdWZmZXIiLCJpc1ZpZXciLCJvYmoiLCJidWZmZXIiLCJzdXBwb3J0c0JpbmFyeSIsImNhbGxiYWNrIiwiZW5jb2RlQmxvYkFzQmFzZTY0IiwiZmlsZVJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJjb250ZW50IiwicmVzdWx0Iiwic3BsaXQiLCJyZWFkQXNEYXRhVVJMIiwiZW5jb2RlUGFja2V0X2Jyb3dzZXJfZGVmYXVsdCIsImNoYXJzIiwibG9va3VwIiwiVWludDhBcnJheSIsImkiLCJsZW5ndGgiLCJjaGFyQ29kZUF0IiwiZW5jb2RlIiwiYXJyYXlidWZmZXIiLCJieXRlcyIsImxlbiIsImJhc2U2NCIsInN1YnN0cmluZyIsImRlY29kZSIsImJ1ZmZlckxlbmd0aCIsInAiLCJlbmNvZGVkMSIsImVuY29kZWQyIiwiZW5jb2RlZDMiLCJlbmNvZGVkNCIsImVuY29kZWRQYWNrZXQiLCJiaW5hcnlUeXBlIiwibWFwQmluYXJ5IiwiY2hhckF0IiwiZGVjb2RlQmFzZTY0UGFja2V0IiwicGFja2V0VHlwZSIsImRlY29kZWQiLCJkZWNvZGVQYWNrZXRfYnJvd3Nlcl9kZWZhdWx0IiwiU0VQQVJBVE9SIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwicGFja2V0cyIsImVuY29kZWRQYWNrZXRzIiwiQXJyYXkiLCJjb3VudCIsInBhY2tldCIsImpvaW4iLCJlbmNvZGVkUGF5bG9hZCIsImRlY29kZWRQYWNrZXQiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7QUFBQTtBQUFBQzs7O0FDQUEsSUFBTUMsZUFBZSxzQkFBT0MsT0FBTyxJQUFJO0FBQ3ZDRCxhQUFhLFVBQVU7QUFDdkJBLGFBQWEsV0FBVztBQUN4QkEsYUFBYSxVQUFVO0FBQ3ZCQSxhQUFhLFVBQVU7QUFDdkJBLGFBQWEsYUFBYTtBQUMxQkEsYUFBYSxhQUFhO0FBQzFCQSxhQUFhLFVBQVU7QUFDdkIsSUFBTUUsdUJBQXVCLHNCQUFPRCxPQUFPLElBQUk7QUFDL0NFLE9BQU9DLEtBQUtKLFlBQVksRUFBRUssUUFBUUMsT0FBTztFQUNyQ0oscUJBQXFCRixhQUFhTSxRQUFRQTtBQUM5QyxDQUFDO0FBQ0QsSUFBTUMsZUFBZTtFQUFFQyxNQUFNO0VBQVNDLE1BQU07QUFBZTs7O0FDWDNELElBQU1DLGlCQUFpQixPQUFPQyxTQUFTLGNBQ2xDLE9BQU9BLFNBQVMsZUFDYlIsT0FBT1Ms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