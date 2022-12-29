define([], () => {

const bimport = specifier => {
	const dependencies = new Map([["engine.io-parser","5.0.4"]]);
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
var __markAsModule = target => __defProp(target, "__esModule", {
  value: true
});
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2)) if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default")) __defProp(target, key, {
      get: () => module2[key],
      enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable
    });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */(cache => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0);

// .beyond/uimport/temp/engine.io-parser.5.0.4.js
var engine_io_parser_5_0_4_exports = {};
__export(engine_io_parser_5_0_4_exports, {
  decodePacket: () => decodePacket_browser_default,
  decodePayload: () => decodePayload,
  encodePacket: () => encodePacket_browser_default,
  encodePayload: () => encodePayload,
  protocol: () => protocol
});

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
    callback("b" + content);
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
module.exports = __toCommonJS(engine_io_parser_5_0_4_exports);
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL2VuZ2luZS5pby1wYXJzZXIuNS4wLjQuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9idWlsZC9lc20vY29tbW9ucy5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tcGFyc2VyL2J1aWxkL2VzbS9lbmNvZGVQYWNrZXQuYnJvd3Nlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tcGFyc2VyL2J1aWxkL2VzbS9jb250cmliL2Jhc2U2NC1hcnJheWJ1ZmZlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tcGFyc2VyL2J1aWxkL2VzbS9kZWNvZGVQYWNrZXQuYnJvd3Nlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tcGFyc2VyL2J1aWxkL2VzbS9pbmRleC5qcyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsImRlY29kZVBhY2tldCIsImRlY29kZVBheWxvYWQiLCJlbmNvZGVQYWNrZXQiLCJlbmNvZGVQYXlsb2FkIiwicHJvdG9jb2wiLCJQQUNLRVRfVFlQRVMiLCJjcmVhdGUiLCJQQUNLRVRfVFlQRVNfUkVWRVJTRSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiRVJST1JfUEFDS0VUIiwidHlwZSIsImRhdGEiLCJ3aXRoTmF0aXZlQmxvYiIsIkJsb2IiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJ3aXRoTmF0aXZlQXJyYXlCdWZmZXIiLCJBcnJheUJ1ZmZlciIsImlzVmlldyIsIm9iaiIsImJ1ZmZlciIsInN1cHBvcnRzQmluYXJ5IiwiY2FsbGJhY2siLCJlbmNvZGVCbG9iQXNCYXNlNjQiLCJmaWxlUmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImNvbnRlbnQiLCJyZXN1bHQiLCJzcGxpdCIsInJlYWRBc0RhdGFVUkwiLCJlbmNvZGVQYWNrZXRfYnJvd3Nlcl9kZWZhdWx0IiwiY2hhcnMiLCJsb29rdXAiLCJVaW50OEFycmF5IiwiaSIsImxlbmd0aCIsImNoYXJDb2RlQXQiLCJlbmNvZGUiLCJhcnJheWJ1ZmZlciIsImJ5dGVzIiwibGVuIiwiYmFzZTY0Iiwic3Vic3RyaW5nIiwiZGVjb2RlIiwiYnVmZmVyTGVuZ3RoIiwicCIsImVuY29kZWQxIiwiZW5jb2RlZDIiLCJlbmNvZGVkMyIsImVuY29kZWQ0Iiwid2l0aE5hdGl2ZUFycmF5QnVmZmVyMiIsImVuY29kZWRQYWNrZXQiLCJiaW5hcnlUeXBlIiwibWFwQmluYXJ5IiwiY2hhckF0IiwiZGVjb2RlQmFzZTY0UGFja2V0IiwicGFja2V0VHlwZSIsImRlY29kZWQiLCJkZWNvZGVQYWNrZXRfYnJvd3Nlcl9kZWZhdWx0IiwiU0VQQVJBVE9SIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwicGFja2V0cyIsImVuY29kZWRQYWNrZXRzIiwiQXJyYXkiLCJjb3VudCIsInBhY2tldCIsImpvaW4iLCJlbmNvZGVkUGF5bG9hZCIsImRlY29kZWRQYWNrZXQiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztFQUFBQztFQUFBQztFQUFBQztFQUFBQztBQUFBOzs7QUNBQSxJQUFNQyxlQUFlLHNCQUFPQyxPQUFPLElBQUk7QUFDdkNELGFBQWEsVUFBVTtBQUN2QkEsYUFBYSxXQUFXO0FBQ3hCQSxhQUFhLFVBQVU7QUFDdkJBLGFBQWEsVUFBVTtBQUN2QkEsYUFBYSxhQUFhO0FBQzFCQSxhQUFhLGFBQWE7QUFDMUJBLGFBQWEsVUFBVTtBQUN2QixJQUFNRSx1QkFBdUIsc0JBQU9ELE9BQU8sSUFBSTtBQUMvQ0UsT0FBT0MsS0FBS0osWUFBWSxFQUFFSyxRQUFRQyxPQUFPO0VBQ3JDSixxQkFBcUJGLGFBQWFNLFFBQVFBO0FBQzlDLENBQUM7QUFDRCxJQUFNQyxlQUFlO0VBQUVDLE1BQU07RUFBU0MsTUFBTTtBQUFlOzs7QUNYM0QsSUFBTUMsaUJBQWlCLE9BQU9DLFNBQVMsY0FDbEMsT0FB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IGZyb20gJ2VuZ2luZS5pby1wYXJzZXInOyIsImNvbnN0IFBBQ0tFVF9UWVBFUyA9IE9iamVjdC5jcmVhdGUobnVsbCk7IC8vIG5vIE1hcCA9IG5vIHBvbHlmaWxsXG5QQUNLRVRfVFlQRVNbXCJvcGVuXCJdID0gXCIwXCI7XG5QQUNLRVRfVFlQRVNbXCJjbG9zZVwiXSA9IFwiMVwiO1xuUEFDS0VUX1RZUEVTW1wicGluZ1wiXSA9IFwiMlwiO1xuUEFDS0VUX1RZUEVTW1wicG9uZ1wiXSA9IFwiM1wiO1xuUEFDS0VUX1RZUEVTW1wibWVzc2FnZVwiXSA9IFwiNFwiO1xuUEFDS0VUX1RZUEVTW1widXBncmFkZVwiXSA9IFwiNVwiO1xuUEFDS0VUX1RZUEVTW1wibm9vcFwiXSA9IFwiNlwiO1xuY29uc3QgUEFDS0VUX1RZUEVTX1JFVkVSU0UgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuT2JqZWN0LmtleXMoUEFDS0VUX1RZUEVTKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgUEFDS0VUX1RZUEVTX1JFVkVSU0VbUEFDS0VUX1RZUEVTW2tleV1dID0ga2V5O1xufSk7XG5jb25zdCBFUlJPUl9QQUNLRVQgPSB7IHR5cGU6IFwiZXJyb3JcIiwgZGF0YTogXCJwYXJzZXIgZXJyb3JcIiB9O1xuZXhwb3J0IHsgUEFDS0VUX1RZUEVTLCBQQUNLRVRfVFlQRVNfUkVWRVJTRSwgRVJST1JfUEFDS0VUIH07XG4iLCJpbXBvcnQgeyBQQUNLRVRfVFlQRVMgfSBmcm9tIFwiLi9jb21tb25zLmpzXCI7XG5jb25zdCB3aXRoTmF0aXZlQmxvYiA9IHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgfHxcbiAgICAodHlwZW9mIEJsb2IgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKEJsb2IpID09PSBcIltvYmplY3QgQmxvYkNvbnN0cnVjdG9yXVwiKTtcbmNvbnN0IHdpdGhOYXRpdmVBcnJheUJ1ZmZlciA9IHR5cGVvZiBBcnJheUJ1ZmZlciA9PT0gXCJmdW5jdGlvblwiO1xuLy8gQXJyYXlCdWZmZXIuaXNWaWV3IG1ldGhvZCBpcyBub3QgZGVmaW5lZCBpbiBJRTEwXG5jb25zdCBpc1ZpZXcgPSBvYmogPT4ge1xuICAgIHJldHVybiB0eXBlb2YgQXJyYXlCdWZmZXIuaXNWaWV3ID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgPyBBcnJheUJ1ZmZlci5pc1ZpZXcob2JqKVxuICAgICAgICA6IG9iaiAmJiBvYmouYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXI7XG59O1xuY29uc3QgZW5jb2RlUGFja2V0ID0gKHsgdHlwZSwgZGF0YSB9LCBzdXBwb3J0c0JpbmFyeSwgY2FsbGJhY2spID0+IHtcbiAgICBpZiAod2l0aE5hdGl2ZUJsb2IgJiYgZGF0YSBpbnN0YW5jZW9mIEJsb2IpIHtcbiAgICAgICAgaWYgKHN1cHBvcnRzQmluYXJ5KSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZW5jb2RlQmxvYkFzQmFzZTY0KGRhdGEsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh3aXRoTmF0aXZlQXJyYXlCdWZmZXIgJiZcbiAgICAgICAgKGRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciB8fCBpc1ZpZXcoZGF0YSkpKSB7XG4gICAgICAgIGlmIChzdXBwb3J0c0JpbmFyeSkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGVuY29kZUJsb2JBc0Jhc2U2NChuZXcgQmxvYihbZGF0YV0pLCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gcGxhaW4gc3RyaW5nXG4gICAgcmV0dXJuIGNhbGxiYWNrKFBBQ0tFVF9UWVBFU1t0eXBlXSArIChkYXRhIHx8IFwiXCIpKTtcbn07XG5jb25zdCBlbmNvZGVCbG9iQXNCYXNlNjQgPSAoZGF0YSwgY2FsbGJhY2spID0+IHtcbiAgICBjb25zdCBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICBmaWxlUmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGZpbGVSZWFkZXIucmVzdWx0LnNwbGl0KFwiLFwiKVsxXTtcbiAgICAgICAgY2FsbGJhY2soXCJiXCIgKyBjb250ZW50KTtcbiAgICB9O1xuICAgIHJldHVybiBmaWxlUmVhZGVyLnJlYWRBc0RhdGFVUkwoZGF0YSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZW5jb2RlUGFja2V0O1xuIiwiY29uc3QgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7XG4vLyBVc2UgYSBsb29rdXAgdGFibGUgdG8gZmluZCB0aGUgaW5kZXguXG5jb25zdCBsb29rdXAgPSB0eXBlb2YgVWludDhBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyBbXSA6IG5ldyBVaW50OEFycmF5KDI1Nik7XG5mb3IgKGxldCBpID0gMDsgaSA8IGNoYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgbG9va3VwW2NoYXJzLmNoYXJDb2RlQXQoaSldID0gaTtcbn1cbmV4cG9ydCBjb25zdCBlbmNvZGUgPSAoYXJyYXlidWZmZXIpID0+IHtcbiAgICBsZXQgYnl0ZXMgPSBuZXcgVWludDhBcnJheShhcnJheWJ1ZmZlciksIGksIGxlbiA9IGJ5dGVzLmxlbmd0aCwgYmFzZTY0ID0gJyc7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSArPSAzKSB7XG4gICAgICAgIGJhc2U2NCArPSBjaGFyc1tieXRlc1tpXSA+PiAyXTtcbiAgICAgICAgYmFzZTY0ICs9IGNoYXJzWygoYnl0ZXNbaV0gJiAzKSA8PCA0KSB8IChieXRlc1tpICsgMV0gPj4gNCldO1xuICAgICAgICBiYXNlNjQgKz0gY2hhcnNbKChieXRlc1tpICsgMV0gJiAxNSkgPDwgMikgfCAoYnl0ZXNbaSArIDJdID4+IDYpXTtcbiAgICAgICAgYmFzZTY0ICs9IGNoYXJzW2J5dGVzW2kgKyAyXSAmIDYzXTtcbiAgICB9XG4gICAgaWYgKGxlbiAlIDMgPT09IDIpIHtcbiAgICAgICAgYmFzZTY0ID0gYmFzZTY0LnN1YnN0cmluZygwLCBiYXNlNjQubGVuZ3RoIC0gMSkgKyAnPSc7XG4gICAgfVxuICAgIGVsc2UgaWYgKGxlbiAlIDMgPT09IDEpIHtcbiAgICAgICAgYmFzZTY0ID0gYmFzZTY0LnN1YnN0cmluZygwLCBiYXNlNjQubGVuZ3RoIC0gMikgKyAnPT0nO1xuICAgIH1cbiAgICByZXR1cm4gYmFzZTY0O1xufTtcbmV4cG9ydCBjb25zdCBkZWNvZGUgPSAoYmFzZTY0KSA9PiB7XG4gICAgbGV0IGJ1ZmZlckxlbmd0aCA9IGJhc2U2NC5sZW5ndGggKiAwLjc1LCBsZW4gPSBiYXNlNjQubGVuZ3RoLCBpLCBwID0gMCwgZW5jb2RlZDEsIGVuY29kZWQyLCBlbmNvZGVkMywgZW5jb2RlZDQ7XG4gICAgaWYgKGJhc2U2NFtiYXNlNjQubGVuZ3RoIC0gMV0gPT09ICc9Jykge1xuICAgICAgICBidWZmZXJMZW5ndGgtLTtcbiAgICAgICAgaWYgKGJhc2U2NFtiYXNlNjQubGVuZ3RoIC0gMl0gPT09ICc9Jykge1xuICAgICAgICAgICAgYnVmZmVyTGVuZ3RoLS07XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgYXJyYXlidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoYnVmZmVyTGVuZ3RoKSwgYnl0ZXMgPSBuZXcgVWludDhBcnJheShhcnJheWJ1ZmZlcik7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgICAgIGVuY29kZWQxID0gbG9va3VwW2Jhc2U2NC5jaGFyQ29kZUF0KGkpXTtcbiAgICAgICAgZW5jb2RlZDIgPSBsb29rdXBbYmFzZTY0LmNoYXJDb2RlQXQoaSArIDEpXTtcbiAgICAgICAgZW5jb2RlZDMgPSBsb29rdXBbYmFzZTY0LmNoYXJDb2RlQXQoaSArIDIpXTtcbiAgICAgICAgZW5jb2RlZDQgPSBsb29rdXBbYmFzZTY0LmNoYXJDb2RlQXQoaSArIDMpXTtcbiAgICAgICAgYnl0ZXNbcCsrXSA9IChlbmNvZGVkMSA8PCAyKSB8IChlbmNvZGVkMiA+PiA0KTtcbiAgICAgICAgYnl0ZXNbcCsrXSA9ICgoZW5jb2RlZDIgJiAxNSkgPDwgNCkgfCAoZW5jb2RlZDMgPj4gMik7XG4gICAgICAgIGJ5dGVzW3ArK10gPSAoKGVuY29kZWQzICYgMykgPDwgNikgfCAoZW5jb2RlZDQgJiA2Myk7XG4gICAgfVxuICAgIHJldHVybiBhcnJheWJ1ZmZlcjtcbn07XG4iLCJpbXBvcnQgeyBFUlJPUl9QQUNLRVQsIFBBQ0tFVF9UWVBFU19SRVZFUlNFIH0gZnJvbSBcIi4vY29tbW9ucy5qc1wiO1xuaW1wb3J0IHsgZGVjb2RlIH0gZnJvbSBcIi4vY29udHJpYi9iYXNlNjQtYXJyYXlidWZmZXIuanNcIjtcbmNvbnN0IHdpdGhOYXRpdmVBcnJheUJ1ZmZlciA9IHR5cGVvZiBBcnJheUJ1ZmZlciA9PT0gXCJmdW5jdGlvblwiO1xuY29uc3QgZGVjb2RlUGFja2V0ID0gKGVuY29kZWRQYWNrZXQsIGJpbmFyeVR5cGUpID0+IHtcbiAgICBpZiAodHlwZW9mIGVuY29kZWRQYWNrZXQgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6IFwibWVzc2FnZVwiLFxuICAgICAgICAgICAgZGF0YTogbWFwQmluYXJ5KGVuY29kZWRQYWNrZXQsIGJpbmFyeVR5cGUpXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHR5cGUgPSBlbmNvZGVkUGFja2V0LmNoYXJBdCgwKTtcbiAgICBpZiAodHlwZSA9PT0gXCJiXCIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6IFwibWVzc2FnZVwiLFxuICAgICAgICAgICAgZGF0YTogZGVjb2RlQmFzZTY0UGFja2V0KGVuY29kZWRQYWNrZXQuc3Vic3RyaW5nKDEpLCBiaW5hcnlUeXBlKVxuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBwYWNrZXRUeXBlID0gUEFDS0VUX1RZUEVTX1JFVkVSU0VbdHlwZV07XG4gICAgaWYgKCFwYWNrZXRUeXBlKSB7XG4gICAgICAgIHJldHVybiBFUlJPUl9QQUNLRVQ7XG4gICAgfVxuICAgIHJldHVybiBlbmNvZGVkUGFja2V0Lmxlbmd0aCA+IDFcbiAgICAgICAgPyB7XG4gICAgICAgICAgICB0eXBlOiBQQUNLRVRfVFlQRVNfUkVWRVJTRVt0eXBlXSxcbiAgICAgICAgICAgIGRhdGE6IGVuY29kZWRQYWNrZXQuc3Vic3RyaW5nKDEpXG4gICAgICAgIH1cbiAgICAgICAgOiB7XG4gICAgICAgICAgICB0eXBlOiBQQUNLRVRfVFlQRVNfUkVWRVJTRVt0eXBlXVxuICAgICAgICB9O1xufTtcbmNvbnN0IGRlY29kZUJhc2U2NFBhY2tldCA9IChkYXRhLCBiaW5hcnlUeXBlKSA9PiB7XG4gICAgaWYgKHdpdGhOYXRpdmVBcnJheUJ1ZmZlcikge1xuICAgICAgICBjb25zdCBkZWNvZGVkID0gZGVjb2RlKGRhdGEpO1xuICAgICAgICByZXR1cm4gbWFwQmluYXJ5KGRlY29kZWQsIGJpbmFyeVR5cGUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHsgYmFzZTY0OiB0cnVlLCBkYXRhIH07IC8vIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnNcbiAgICB9XG59O1xuY29uc3QgbWFwQmluYXJ5ID0gKGRhdGEsIGJpbmFyeVR5cGUpID0+IHtcbiAgICBzd2l0Y2ggKGJpbmFyeVR5cGUpIHtcbiAgICAgICAgY2FzZSBcImJsb2JcIjpcbiAgICAgICAgICAgIHJldHVybiBkYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIgPyBuZXcgQmxvYihbZGF0YV0pIDogZGF0YTtcbiAgICAgICAgY2FzZSBcImFycmF5YnVmZmVyXCI6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gZGF0YTsgLy8gYXNzdW1pbmcgdGhlIGRhdGEgaXMgYWxyZWFkeSBhbiBBcnJheUJ1ZmZlclxuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBkZWNvZGVQYWNrZXQ7XG4iLCJpbXBvcnQgZW5jb2RlUGFja2V0IGZyb20gXCIuL2VuY29kZVBhY2tldC5qc1wiO1xuaW1wb3J0IGRlY29kZVBhY2tldCBmcm9tIFwiLi9kZWNvZGVQYWNrZXQuanNcIjtcbmNvbnN0IFNFUEFSQVRPUiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMzApOyAvLyBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRGVsaW1pdGVyI0FTQ0lJX2RlbGltaXRlZF90ZXh0XG5jb25zdCBlbmNvZGVQYXlsb2FkID0gKHBhY2tldHMsIGNhbGxiYWNrKSA9PiB7XG4gICAgLy8gc29tZSBwYWNrZXRzIG1heSBiZSBhZGRlZCB0byB0aGUgYXJyYXkgd2hpbGUgZW5jb2RpbmcsIHNvIHRoZSBpbml0aWFsIGxlbmd0aCBtdXN0IGJlIHNhdmVkXG4gICAgY29uc3QgbGVuZ3RoID0gcGFja2V0cy5sZW5ndGg7XG4gICAgY29uc3QgZW5jb2RlZFBhY2tldHMgPSBuZXcgQXJyYXkobGVuZ3RoKTtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIHBhY2tldHMuZm9yRWFjaCgocGFja2V0LCBpKSA9PiB7XG4gICAgICAgIC8vIGZvcmNlIGJhc2U2NCBlbmNvZGluZyBmb3IgYmluYXJ5IHBhY2tldHNcbiAgICAgICAgZW5jb2RlUGFja2V0KHBhY2tldCwgZmFsc2UsIGVuY29kZWRQYWNrZXQgPT4ge1xuICAgICAgICAgICAgZW5jb2RlZFBhY2tldHNbaV0gPSBlbmNvZGVkUGFja2V0O1xuICAgICAgICAgICAgaWYgKCsrY291bnQgPT09IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVuY29kZWRQYWNrZXRzLmpvaW4oU0VQQVJBVE9SKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcbmNvbnN0IGRlY29kZVBheWxvYWQgPSAoZW5jb2RlZFBheWxvYWQsIGJpbmFyeVR5cGUpID0+IHtcbiAgICBjb25zdCBlbmNvZGVkUGFja2V0cyA9IGVuY29kZWRQYXlsb2FkLnNwbGl0KFNFUEFSQVRPUik7XG4gICAgY29uc3QgcGFja2V0cyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW5jb2RlZFBhY2tldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGVjb2RlZFBhY2tldCA9IGRlY29kZVBhY2tldChlbmNvZGVkUGFja2V0c1tpXSwgYmluYXJ5VHlwZSk7XG4gICAgICAgIHBhY2tldHMucHVzaChkZWNvZGVkUGFja2V0KTtcbiAgICAgICAgaWYgKGRlY29kZWRQYWNrZXQudHlwZSA9PT0gXCJlcnJvclwiKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGFja2V0cztcbn07XG5leHBvcnQgY29uc3QgcHJvdG9jb2wgPSA0O1xuZXhwb3J0IHsgZW5jb2RlUGFja2V0LCBlbmNvZGVQYXlsb2FkLCBkZWNvZGVQYWNrZXQsIGRlY29kZVBheWxvYWQgfTtcbiJdLCJzb3VyY2VSb290IjoiL3Byb2plY3Qvb3V0In0=