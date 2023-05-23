define([], () => {

const bimport = specifier => {
	const dependencies = new Map([["@socket.io/component-emitter","3.1.0"]]);
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

// .beyond/uimport/@socket.io/component-emitter.3.1.0.js
var component_emitter_3_1_0_exports = {};
__export(component_emitter_3_1_0_exports, {
  Emitter: () => Emitter
});
module.exports = __toCommonJS(component_emitter_3_1_0_exports);

// node_modules/@socket.io/component-emitter/index.mjs
function Emitter(obj) {
  if (obj) return mixin(obj);
}
function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}
Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};
  (this._callbacks["$" + event] = this._callbacks["$" + event] || []).push(fn);
  return this;
};
Emitter.prototype.once = function (event, fn) {
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }
  on.fn = fn;
  this.on(event, on);
  return this;
};
Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }
  var callbacks = this._callbacks["$" + event];
  if (!callbacks) return this;
  if (1 == arguments.length) {
    delete this._callbacks["$" + event];
    return this;
  }
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  if (callbacks.length === 0) {
    delete this._callbacks["$" + event];
  }
  return this;
};
Emitter.prototype.emit = function (event) {
  this._callbacks = this._callbacks || {};
  var args = new Array(arguments.length - 1),
    callbacks = this._callbacks["$" + event];
  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }
  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }
  return this;
};
Emitter.prototype.emitReserved = Emitter.prototype.emit;
Emitter.prototype.listeners = function (event) {
  this._callbacks = this._callbacks || {};
  return this._callbacks["$" + event] || [];
};
Emitter.prototype.hasListeners = function (event) {
  return !!this.listeners(event).length;
};
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9Ac29ja2V0LmlvL2NvbXBvbmVudC1lbWl0dGVyLjMuMS4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0Bzb2NrZXQuaW8vY29tcG9uZW50LWVtaXR0ZXIvaW5kZXgubWpzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiRW1pdHRlciIsIm1vZHVsZSIsIm9iaiIsIm1peGluIiwia2V5IiwicHJvdG90eXBlIiwib24iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJmbiIsIl9jYWxsYmFja3MiLCJwdXNoIiwib25jZSIsIm9mZiIsImFwcGx5IiwiYXJndW1lbnRzIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibGVuZ3RoIiwiY2FsbGJhY2tzIiwiY2IiLCJpIiwic3BsaWNlIiwiZW1pdCIsImFyZ3MiLCJBcnJheSIsInNsaWNlIiwibGVuIiwiZW1pdFJlc2VydmVkIiwibGlzdGVuZXJzIiwiaGFzTGlzdGVuZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7QUFBQTtBQUFBQzs7O0FDTU8sU0FBU0QsUUFBUUUsS0FBSztFQUMzQixJQUFJQSxLQUFLLE9BQU9DLE1BQU1ELEdBQUc7QUFDM0I7QUFVQSxTQUFTQyxNQUFNRCxLQUFLO0VBQ2xCLFNBQVNFLE9BQU9KLFFBQVFLLFdBQVc7SUFDakNILElBQUlFLE9BQU9KLFFBQVFLLFVBQVVEO0VBQy9CO0VBQ0EsT0FBT0Y7QUFDVDtBQVdBRixRQUFRSyxVQUFVQyxLQUNsQk4sUUFBUUssVUFBVUUsbUJBQW1CLFVBQVNDLE9BQU9DLElBQUc7RUFDdEQsS0FBS0MsYUFBYSxLQUFLQSxjQUFjLENBQUM7RUFDdEMsQ0FBQyxLQUFLQSxXQUFXLE1BQU1GLFNBQVMsS0FBS0UsV0FBVyxNQUFNRixVQUFVLEVBQUMsRUFDOURHLEtBQUtGLEVBQUU7RUFDVixPQUFPO0FBQ1Q7QUFZQVQsUUFBUUssVUFBVU8sT0FBTyxVQUFTSixPQUFPQyxJQUFHO0VBQzFDLFNBQVNILEtBQUs7SUFDWixLQUFLTyxJQUFJTCxPQUFPRixFQUFFO0lBQ2xCRyxHQUFHSyxNQUFNLE1BQU1DLFNBQVM7RUFDMUI7RUFFQVQsR0FBR0csS0FBS0E7RUFDUixLQUFLSCxHQUFHRSxPQUFPRixFQUFFO0VBQ2pCLE9BQU87QUFDVDtBQVlBTixRQUFRSyxVQUFVUSxNQUNsQmIsUUFBUUssVUFBVVcsaUJBQ2xCaEIsUUFBUUssVUFBVVkscUJBQ2xCakIsUUFBUUssVUFBVWEsc0JBQXNCLFVBQVNWLE9BQU9DLElBQUc7RUFDekQsS0FBS0MsYUFBYSxLQUFLQSxjQUFjLENBQUM7RUFHdEMsSUFBSSxLQUFLSyxVQUFVSSxRQUFRO0lBQ3pCLEtBQUtULGFBQWEsQ0FBQztJQUNuQixPQUFPO0VBQ1Q7RUFHQSxJQUFJVSxZQUFZLEtBQUtWLFdBQVcsTUFBTUY7RUFDdEMsSUFBSSxDQUFDWSxXQUFXLE9BQU87RUFHdkIsSUFBSSxLQUFLTCxVQUFVSSxRQUFRO0lBQ3pCLE9BQU8sS0FBS1QsV0FBVyxNQUFNRjtJQUM3QixPQUFPO0VBQ1Q7RUFHQSxJQUFJYTtFQUNKLFNBQVNDLElBQUksR0FBR0EsSUFBSUYsVUFBVUQsUUFBUUcsS0FBSztJQUN6Q0QsS0FBS0QsVUFBVUU7SUFDZixJQUFJRCxPQUFPWixNQUFNWSxHQUFHWixPQUFPQSxJQUFJO01BQzdCVyxVQUFVRyxPQUFPRCxHQUFHLENBQUM7TUFDckI7SUFDRjtFQUNGO0VBSUEsSUFBSUYsVUFBVUQsV0FBVyxHQUFHO0lBQzFCLE9BQU8sS0FBS1QsV0FBVyxNQUFNRjtFQUMvQjtFQUVBLE9BQU87QUFDVDtBQVVBUixRQUFRSyxVQUFVbUIsT0FBTyxVQUFTaEIsT0FBTTtFQUN0QyxLQUFLRSxhQUFhLEtBQUtBLGNBQWMsQ0FBQztFQUV0QyxJQUFJZSxPQUFPLElBQUlDLE1BQU1YLFVBQVVJLFNBQVMsQ0FBQztJQUNyQ0MsWUFBWSxLQUFLVixXQUFXLE1BQU1GO0VBRXRDLFNBQVNjLElBQUksR0FBR0EsSUFBSVAsVUFBVUksUUFBUUcsS0FBSztJQUN6Q0csS0FBS0gsSUFBSSxLQUFLUCxVQUFVTztFQUMxQjtFQUVBLElBQUlGLFdBQVc7SUFDYkEsWUFBWUEsVUFBVU8sTUFBTSxDQUFDO0lBQzdCLFNBQVNMLElBQUksR0FBR00sTUFBTVIsVUFBVUQsUUFBUUcsSUFBSU0sS0FBSyxFQUFFTixHQUFHO01BQ3BERixVQUFVRSxHQUFHUixNQUFNLE1BQU1XLElBQUk7SUFDL0I7RUFDRjtFQUVBLE9BQU87QUFDVDtBQUdBekIsUUFBUUssVUFBVXdCLGVBQWU3QixRQUFRSyxVQUFVbUI7QUFVbkR4QixRQUFRSyxVQUFVeUIsWUFBWSxVQUFTdEIsT0FBTTtFQUMzQyxLQUFLRSxhQUFhLEtBQUtBLGNBQWMsQ0FBQztFQUN0QyxPQUFPLEtBQUtBLFdBQVcsTUFBTUYsVUFBVSxFQUFDO0FBQzFDO0FBVUFSLFFBQVFLLFVBQVUwQixlQUFlLFVBQVN2QixPQUFNO0VBQzlDLE9BQU8sQ0FBQyxDQUFFLEtBQUtzQixVQUFVdEIsS0FBSyxFQUFFVztBQUNsQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3Byb2plY3Qvb3V0In0=