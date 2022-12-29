define([], () => {

const bimport = specifier => {
	const dependencies = new Map([["scheduler","0.19.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};

const require = () => void 0;
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
var __markAsModule = target => __defProp(target, "__esModule", {
  value: true
});
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
    exports: {}
  }).exports, mod), mod.exports;
};
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
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? {
    get: () => module2.default,
    enumerable: true
  } : {
    value: module2,
    enumerable: true
  })), module2);
};
var __toCommonJS = /* @__PURE__ */(cache => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0);

// node_modules/scheduler/cjs/scheduler.development.js
var require_scheduler_development = __commonJS({
  "node_modules/scheduler/cjs/scheduler.development.js"(exports) {
    "use strict";

    if (true) {
      (function () {
        "use strict";

        var enableSchedulerDebugging = false;
        var enableProfiling = true;
        var requestHostCallback;
        var requestHostTimeout;
        var cancelHostTimeout;
        var shouldYieldToHost;
        var requestPaint;
        if (typeof window === "undefined" || typeof MessageChannel !== "function") {
          var _callback = null;
          var _timeoutID = null;
          var _flushCallback = function () {
            if (_callback !== null) {
              try {
                var currentTime = exports.unstable_now();
                var hasRemainingTime = true;
                _callback(hasRemainingTime, currentTime);
                _callback = null;
              } catch (e) {
                setTimeout(_flushCallback, 0);
                throw e;
              }
            }
          };
          var initialTime = Date.now();
          exports.unstable_now = function () {
            return Date.now() - initialTime;
          };
          requestHostCallback = function (cb) {
            if (_callback !== null) {
              setTimeout(requestHostCallback, 0, cb);
            } else {
              _callback = cb;
              setTimeout(_flushCallback, 0);
            }
          };
          requestHostTimeout = function (cb, ms) {
            _timeoutID = setTimeout(cb, ms);
          };
          cancelHostTimeout = function () {
            clearTimeout(_timeoutID);
          };
          shouldYieldToHost = function () {
            return false;
          };
          requestPaint = exports.unstable_forceFrameRate = function () {};
        } else {
          var performance = window.performance;
          var _Date = window.Date;
          var _setTimeout = window.setTimeout;
          var _clearTimeout = window.clearTimeout;
          if (typeof console !== "undefined") {
            var requestAnimationFrame = window.requestAnimationFrame;
            var cancelAnimationFrame = window.cancelAnimationFrame;
            if (typeof requestAnimationFrame !== "function") {
              console["error"]("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
            }
            if (typeof cancelAnimationFrame !== "function") {
              console["error"]("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
            }
          }
          if (typeof performance === "object" && typeof performance.now === "function") {
            exports.unstable_now = function () {
              return performance.now();
            };
          } else {
            var _initialTime = _Date.now();
            exports.unstable_now = function () {
              return _Date.now() - _initialTime;
            };
          }
          var isMessageLoopRunning = false;
          var scheduledHostCallback = null;
          var taskTimeoutID = -1;
          var yieldInterval = 5;
          var deadline = 0;
          {
            shouldYieldToHost = function () {
              return exports.unstable_now() >= deadline;
            };
            requestPaint = function () {};
          }
          exports.unstable_forceFrameRate = function (fps) {
            if (fps < 0 || fps > 125) {
              console["error"]("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported");
              return;
            }
            if (fps > 0) {
              yieldInterval = Math.floor(1e3 / fps);
            } else {
              yieldInterval = 5;
            }
          };
          var performWorkUntilDeadline = function () {
            if (scheduledHostCallback !== null) {
              var currentTime = exports.unstable_now();
              deadline = currentTime + yieldInterval;
              var hasTimeRemaining = true;
              try {
                var hasMoreWork = scheduledHostCallback(hasTimeRemaining, currentTime);
                if (!hasMoreWork) {
                  isMessageLoopRunning = false;
                  scheduledHostCallback = null;
                } else {
                  port.postMessage(null);
                }
              } catch (error) {
                port.postMessage(null);
                throw error;
              }
            } else {
              isMessageLoopRunning = false;
            }
          };
          var channel = new MessageChannel();
          var port = channel.port2;
          channel.port1.onmessage = performWorkUntilDeadline;
          requestHostCallback = function (callback) {
            scheduledHostCallback = callback;
            if (!isMessageLoopRunning) {
              isMessageLoopRunning = true;
              port.postMessage(null);
            }
          };
          requestHostTimeout = function (callback, ms) {
            taskTimeoutID = _setTimeout(function () {
              callback(exports.unstable_now());
            }, ms);
          };
          cancelHostTimeout = function () {
            _clearTimeout(taskTimeoutID);
            taskTimeoutID = -1;
          };
        }
        function push(heap, node) {
          var index = heap.length;
          heap.push(node);
          siftUp(heap, node, index);
        }
        function peek(heap) {
          var first = heap[0];
          return first === void 0 ? null : first;
        }
        function pop(heap) {
          var first = heap[0];
          if (first !== void 0) {
            var last = heap.pop();
            if (last !== first) {
              heap[0] = last;
              siftDown(heap, last, 0);
            }
            return first;
          } else {
            return null;
          }
        }
        function siftUp(heap, node, i) {
          var index = i;
          while (true) {
            var parentIndex = index - 1 >>> 1;
            var parent = heap[parentIndex];
            if (parent !== void 0 && compare(parent, node) > 0) {
              heap[parentIndex] = node;
              heap[index] = parent;
              index = parentIndex;
            } else {
              return;
            }
          }
        }
        function siftDown(heap, node, i) {
          var index = i;
          var length = heap.length;
          while (index < length) {
            var leftIndex = (index + 1) * 2 - 1;
            var left = heap[leftIndex];
            var rightIndex = leftIndex + 1;
            var right = heap[rightIndex];
            if (left !== void 0 && compare(left, node) < 0) {
              if (right !== void 0 && compare(right, left) < 0) {
                heap[index] = right;
                heap[rightIndex] = node;
                index = rightIndex;
              } else {
                heap[index] = left;
                heap[leftIndex] = node;
                index = leftIndex;
              }
            } else if (right !== void 0 && compare(right, node) < 0) {
              heap[index] = right;
              heap[rightIndex] = node;
              index = rightIndex;
            } else {
              return;
            }
          }
        }
        function compare(a, b) {
          var diff = a.sortIndex - b.sortIndex;
          return diff !== 0 ? diff : a.id - b.id;
        }
        var NoPriority = 0;
        var ImmediatePriority = 1;
        var UserBlockingPriority = 2;
        var NormalPriority = 3;
        var LowPriority = 4;
        var IdlePriority = 5;
        var runIdCounter = 0;
        var mainThreadIdCounter = 0;
        var profilingStateSize = 4;
        var sharedProfilingBuffer = typeof SharedArrayBuffer === "function" ? new SharedArrayBuffer(profilingStateSize * Int32Array.BYTES_PER_ELEMENT) : typeof ArrayBuffer === "function" ? new ArrayBuffer(profilingStateSize * Int32Array.BYTES_PER_ELEMENT) : null;
        var profilingState = sharedProfilingBuffer !== null ? new Int32Array(sharedProfilingBuffer) : [];
        var PRIORITY = 0;
        var CURRENT_TASK_ID = 1;
        var CURRENT_RUN_ID = 2;
        var QUEUE_SIZE = 3;
        {
          profilingState[PRIORITY] = NoPriority;
          profilingState[QUEUE_SIZE] = 0;
          profilingState[CURRENT_TASK_ID] = 0;
        }
        var INITIAL_EVENT_LOG_SIZE = 131072;
        var MAX_EVENT_LOG_SIZE = 524288;
        var eventLogSize = 0;
        var eventLogBuffer = null;
        var eventLog = null;
        var eventLogIndex = 0;
        var TaskStartEvent = 1;
        var TaskCompleteEvent = 2;
        var TaskErrorEvent = 3;
        var TaskCancelEvent = 4;
        var TaskRunEvent = 5;
        var TaskYieldEvent = 6;
        var SchedulerSuspendEvent = 7;
        var SchedulerResumeEvent = 8;
        function logEvent(entries) {
          if (eventLog !== null) {
            var offset = eventLogIndex;
            eventLogIndex += entries.length;
            if (eventLogIndex + 1 > eventLogSize) {
              eventLogSize *= 2;
              if (eventLogSize > MAX_EVENT_LOG_SIZE) {
                console["error"]("Scheduler Profiling: Event log exceeded maximum size. Don't forget to call `stopLoggingProfilingEvents()`.");
                stopLoggingProfilingEvents();
                return;
              }
              var newEventLog = new Int32Array(eventLogSize * 4);
              newEventLog.set(eventLog);
              eventLogBuffer = newEventLog.buffer;
              eventLog = newEventLog;
            }
            eventLog.set(entries, offset);
          }
        }
        function startLoggingProfilingEvents() {
          eventLogSize = INITIAL_EVENT_LOG_SIZE;
          eventLogBuffer = new ArrayBuffer(eventLogSize * 4);
          eventLog = new Int32Array(eventLogBuffer);
          eventLogIndex = 0;
        }
        function stopLoggingProfilingEvents() {
          var buffer = eventLogBuffer;
          eventLogSize = 0;
          eventLogBuffer = null;
          eventLog = null;
          eventLogIndex = 0;
          return buffer;
        }
        function markTaskStart(task, ms) {
          {
            profilingState[QUEUE_SIZE]++;
            if (eventLog !== null) {
              logEvent([TaskStartEvent, ms * 1e3, task.id, task.priorityLevel]);
            }
          }
        }
        function markTaskCompleted(task, ms) {
          {
            profilingState[PRIORITY] = NoPriority;
            profilingState[CURRENT_TASK_ID] = 0;
            profilingState[QUEUE_SIZE]--;
            if (eventLog !== null) {
              logEvent([TaskCompleteEvent, ms * 1e3, task.id]);
            }
          }
        }
        function markTaskCanceled(task, ms) {
          {
            profilingState[QUEUE_SIZE]--;
            if (eventLog !== null) {
              logEvent([TaskCancelEvent, ms * 1e3, task.id]);
            }
          }
        }
        function markTaskErrored(task, ms) {
          {
            profilingState[PRIORITY] = NoPriority;
            profilingState[CURRENT_TASK_ID] = 0;
            profilingState[QUEUE_SIZE]--;
            if (eventLog !== null) {
              logEvent([TaskErrorEvent, ms * 1e3, task.id]);
            }
          }
        }
        function markTaskRun(task, ms) {
          {
            runIdCounter++;
            profilingState[PRIORITY] = task.priorityLevel;
            profilingState[CURRENT_TASK_ID] = task.id;
            profilingState[CURRENT_RUN_ID] = runIdCounter;
            if (eventLog !== null) {
              logEvent([TaskRunEvent, ms * 1e3, task.id, runIdCounter]);
            }
          }
        }
        function markTaskYield(task, ms) {
          {
            profilingState[PRIORITY] = NoPriority;
            profilingState[CURRENT_TASK_ID] = 0;
            profilingState[CURRENT_RUN_ID] = 0;
            if (eventLog !== null) {
              logEvent([TaskYieldEvent, ms * 1e3, task.id, runIdCounter]);
            }
          }
        }
        function markSchedulerSuspended(ms) {
          {
            mainThreadIdCounter++;
            if (eventLog !== null) {
              logEvent([SchedulerSuspendEvent, ms * 1e3, mainThreadIdCounter]);
            }
          }
        }
        function markSchedulerUnsuspended(ms) {
          {
            if (eventLog !== null) {
              logEvent([SchedulerResumeEvent, ms * 1e3, mainThreadIdCounter]);
            }
          }
        }
        var maxSigned31BitInt = 1073741823;
        var IMMEDIATE_PRIORITY_TIMEOUT = -1;
        var USER_BLOCKING_PRIORITY = 250;
        var NORMAL_PRIORITY_TIMEOUT = 5e3;
        var LOW_PRIORITY_TIMEOUT = 1e4;
        var IDLE_PRIORITY = maxSigned31BitInt;
        var taskQueue = [];
        var timerQueue = [];
        var taskIdCounter = 1;
        var currentTask = null;
        var currentPriorityLevel = NormalPriority;
        var isPerformingWork = false;
        var isHostCallbackScheduled = false;
        var isHostTimeoutScheduled = false;
        function advanceTimers(currentTime) {
          var timer = peek(timerQueue);
          while (timer !== null) {
            if (timer.callback === null) {
              pop(timerQueue);
            } else if (timer.startTime <= currentTime) {
              pop(timerQueue);
              timer.sortIndex = timer.expirationTime;
              push(taskQueue, timer);
              {
                markTaskStart(timer, currentTime);
                timer.isQueued = true;
              }
            } else {
              return;
            }
            timer = peek(timerQueue);
          }
        }
        function handleTimeout(currentTime) {
          isHostTimeoutScheduled = false;
          advanceTimers(currentTime);
          if (!isHostCallbackScheduled) {
            if (peek(taskQueue) !== null) {
              isHostCallbackScheduled = true;
              requestHostCallback(flushWork);
            } else {
              var firstTimer = peek(timerQueue);
              if (firstTimer !== null) {
                requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
              }
            }
          }
        }
        function flushWork(hasTimeRemaining, initialTime2) {
          {
            markSchedulerUnsuspended(initialTime2);
          }
          isHostCallbackScheduled = false;
          if (isHostTimeoutScheduled) {
            isHostTimeoutScheduled = false;
            cancelHostTimeout();
          }
          isPerformingWork = true;
          var previousPriorityLevel = currentPriorityLevel;
          try {
            if (enableProfiling) {
              try {
                return workLoop(hasTimeRemaining, initialTime2);
              } catch (error) {
                if (currentTask !== null) {
                  var currentTime = exports.unstable_now();
                  markTaskErrored(currentTask, currentTime);
                  currentTask.isQueued = false;
                }
                throw error;
              }
            } else {
              return workLoop(hasTimeRemaining, initialTime2);
            }
          } finally {
            currentTask = null;
            currentPriorityLevel = previousPriorityLevel;
            isPerformingWork = false;
            {
              var _currentTime = exports.unstable_now();
              markSchedulerSuspended(_currentTime);
            }
          }
        }
        function workLoop(hasTimeRemaining, initialTime2) {
          var currentTime = initialTime2;
          advanceTimers(currentTime);
          currentTask = peek(taskQueue);
          while (currentTask !== null && !enableSchedulerDebugging) {
            if (currentTask.expirationTime > currentTime && (!hasTimeRemaining || shouldYieldToHost())) {
              break;
            }
            var callback = currentTask.callback;
            if (callback !== null) {
              currentTask.callback = null;
              currentPriorityLevel = currentTask.priorityLevel;
              var didUserCallbackTimeout = currentTask.expirationTime <= currentTime;
              markTaskRun(currentTask, currentTime);
              var continuationCallback = callback(didUserCallbackTimeout);
              currentTime = exports.unstable_now();
              if (typeof continuationCallback === "function") {
                currentTask.callback = continuationCallback;
                markTaskYield(currentTask, currentTime);
              } else {
                {
                  markTaskCompleted(currentTask, currentTime);
                  currentTask.isQueued = false;
                }
                if (currentTask === peek(taskQueue)) {
                  pop(taskQueue);
                }
              }
              advanceTimers(currentTime);
            } else {
              pop(taskQueue);
            }
            currentTask = peek(taskQueue);
          }
          if (currentTask !== null) {
            return true;
          } else {
            var firstTimer = peek(timerQueue);
            if (firstTimer !== null) {
              requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
            }
            return false;
          }
        }
        function unstable_runWithPriority(priorityLevel, eventHandler) {
          switch (priorityLevel) {
            case ImmediatePriority:
            case UserBlockingPriority:
            case NormalPriority:
            case LowPriority:
            case IdlePriority:
              break;
            default:
              priorityLevel = NormalPriority;
          }
          var previousPriorityLevel = currentPriorityLevel;
          currentPriorityLevel = priorityLevel;
          try {
            return eventHandler();
          } finally {
            currentPriorityLevel = previousPriorityLevel;
          }
        }
        function unstable_next(eventHandler) {
          var priorityLevel;
          switch (currentPriorityLevel) {
            case ImmediatePriority:
            case UserBlockingPriority:
            case NormalPriority:
              priorityLevel = NormalPriority;
              break;
            default:
              priorityLevel = currentPriorityLevel;
              break;
          }
          var previousPriorityLevel = currentPriorityLevel;
          currentPriorityLevel = priorityLevel;
          try {
            return eventHandler();
          } finally {
            currentPriorityLevel = previousPriorityLevel;
          }
        }
        function unstable_wrapCallback(callback) {
          var parentPriorityLevel = currentPriorityLevel;
          return function () {
            var previousPriorityLevel = currentPriorityLevel;
            currentPriorityLevel = parentPriorityLevel;
            try {
              return callback.apply(this, arguments);
            } finally {
              currentPriorityLevel = previousPriorityLevel;
            }
          };
        }
        function timeoutForPriorityLevel(priorityLevel) {
          switch (priorityLevel) {
            case ImmediatePriority:
              return IMMEDIATE_PRIORITY_TIMEOUT;
            case UserBlockingPriority:
              return USER_BLOCKING_PRIORITY;
            case IdlePriority:
              return IDLE_PRIORITY;
            case LowPriority:
              return LOW_PRIORITY_TIMEOUT;
            case NormalPriority:
            default:
              return NORMAL_PRIORITY_TIMEOUT;
          }
        }
        function unstable_scheduleCallback(priorityLevel, callback, options) {
          var currentTime = exports.unstable_now();
          var startTime;
          var timeout;
          if (typeof options === "object" && options !== null) {
            var delay = options.delay;
            if (typeof delay === "number" && delay > 0) {
              startTime = currentTime + delay;
            } else {
              startTime = currentTime;
            }
            timeout = typeof options.timeout === "number" ? options.timeout : timeoutForPriorityLevel(priorityLevel);
          } else {
            timeout = timeoutForPriorityLevel(priorityLevel);
            startTime = currentTime;
          }
          var expirationTime = startTime + timeout;
          var newTask = {
            id: taskIdCounter++,
            callback,
            priorityLevel,
            startTime,
            expirationTime,
            sortIndex: -1
          };
          {
            newTask.isQueued = false;
          }
          if (startTime > currentTime) {
            newTask.sortIndex = startTime;
            push(timerQueue, newTask);
            if (peek(taskQueue) === null && newTask === peek(timerQueue)) {
              if (isHostTimeoutScheduled) {
                cancelHostTimeout();
              } else {
                isHostTimeoutScheduled = true;
              }
              requestHostTimeout(handleTimeout, startTime - currentTime);
            }
          } else {
            newTask.sortIndex = expirationTime;
            push(taskQueue, newTask);
            {
              markTaskStart(newTask, currentTime);
              newTask.isQueued = true;
            }
            if (!isHostCallbackScheduled && !isPerformingWork) {
              isHostCallbackScheduled = true;
              requestHostCallback(flushWork);
            }
          }
          return newTask;
        }
        function unstable_pauseExecution() {}
        function unstable_continueExecution() {
          if (!isHostCallbackScheduled && !isPerformingWork) {
            isHostCallbackScheduled = true;
            requestHostCallback(flushWork);
          }
        }
        function unstable_getFirstCallbackNode() {
          return peek(taskQueue);
        }
        function unstable_cancelCallback(task) {
          {
            if (task.isQueued) {
              var currentTime = exports.unstable_now();
              markTaskCanceled(task, currentTime);
              task.isQueued = false;
            }
          }
          task.callback = null;
        }
        function unstable_getCurrentPriorityLevel() {
          return currentPriorityLevel;
        }
        function unstable_shouldYield() {
          var currentTime = exports.unstable_now();
          advanceTimers(currentTime);
          var firstTask = peek(taskQueue);
          return firstTask !== currentTask && currentTask !== null && firstTask !== null && firstTask.callback !== null && firstTask.startTime <= currentTime && firstTask.expirationTime < currentTask.expirationTime || shouldYieldToHost();
        }
        var unstable_requestPaint = requestPaint;
        var unstable_Profiling = {
          startLoggingProfilingEvents,
          stopLoggingProfilingEvents,
          sharedProfilingBuffer
        };
        exports.unstable_IdlePriority = IdlePriority;
        exports.unstable_ImmediatePriority = ImmediatePriority;
        exports.unstable_LowPriority = LowPriority;
        exports.unstable_NormalPriority = NormalPriority;
        exports.unstable_Profiling = unstable_Profiling;
        exports.unstable_UserBlockingPriority = UserBlockingPriority;
        exports.unstable_cancelCallback = unstable_cancelCallback;
        exports.unstable_continueExecution = unstable_continueExecution;
        exports.unstable_getCurrentPriorityLevel = unstable_getCurrentPriorityLevel;
        exports.unstable_getFirstCallbackNode = unstable_getFirstCallbackNode;
        exports.unstable_next = unstable_next;
        exports.unstable_pauseExecution = unstable_pauseExecution;
        exports.unstable_requestPaint = unstable_requestPaint;
        exports.unstable_runWithPriority = unstable_runWithPriority;
        exports.unstable_scheduleCallback = unstable_scheduleCallback;
        exports.unstable_shouldYield = unstable_shouldYield;
        exports.unstable_wrapCallback = unstable_wrapCallback;
      })();
    }
  }
});

// node_modules/scheduler/index.js
var require_scheduler = __commonJS({
  "node_modules/scheduler/index.js"(exports, module2) {
    "use strict";

    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_scheduler_development();
    }
  }
});

// .beyond/uimport/temp/scheduler.0.19.1.js
var scheduler_0_19_1_exports = {};
__export(scheduler_0_19_1_exports, {
  default: () => scheduler_0_19_1_default
});
__reExport(scheduler_0_19_1_exports, __toESM(require_scheduler()));
var import_scheduler = __toESM(require_scheduler());
var scheduler_0_19_1_default = import_scheduler.default;
module.exports = __toCommonJS(scheduler_0_19_1_exports);
/** @license React v0.19.1
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9zY2hlZHVsZXIvY2pzL3NjaGVkdWxlci5kZXZlbG9wbWVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9zY2hlZHVsZXIvaW5kZXguanMiLCIuLi8uYmV5b25kL3VpbXBvcnQvdGVtcC9zY2hlZHVsZXIuMC4xOS4xLmpzIl0sIm5hbWVzIjpbImVuYWJsZVNjaGVkdWxlckRlYnVnZ2luZyIsImVuYWJsZVByb2ZpbGluZyIsInJlcXVlc3RIb3N0Q2FsbGJhY2siLCJyZXF1ZXN0SG9zdFRpbWVvdXQiLCJjYW5jZWxIb3N0VGltZW91dCIsInNob3VsZFlpZWxkVG9Ib3N0IiwicmVxdWVzdFBhaW50Iiwid2luZG93IiwiTWVzc2FnZUNoYW5uZWwiLCJfY2FsbGJhY2siLCJfdGltZW91dElEIiwiX2ZsdXNoQ2FsbGJhY2siLCJjdXJyZW50VGltZSIsImV4cG9ydHMiLCJ1bnN0YWJsZV9ub3ciLCJoYXNSZW1haW5pbmdUaW1lIiwiZSIsInNldFRpbWVvdXQiLCJpbml0aWFsVGltZSIsIkRhdGUiLCJub3ciLCJjYiIsIm1zIiwiY2xlYXJUaW1lb3V0IiwidW5zdGFibGVfZm9yY2VGcmFtZVJhdGUiLCJwZXJmb3JtYW5jZSIsIl9EYXRlIiwiX3NldFRpbWVvdXQiLCJfY2xlYXJUaW1lb3V0IiwiY29uc29sZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiX2luaXRpYWxUaW1lIiwiaXNNZXNzYWdlTG9vcFJ1bm5pbmciLCJzY2hlZHVsZWRIb3N0Q2FsbGJhY2siLCJ0YXNrVGltZW91dElEIiwieWllbGRJbnRlcnZhbCIsImRlYWRsaW5lIiwiZnBzIiwiTWF0aCIsImZsb29yIiwicGVyZm9ybVdvcmtVbnRpbERlYWRsaW5lIiwiaGFzVGltZVJlbWFpbmluZyIsImhhc01vcmVXb3JrIiwicG9ydCIsInBvc3RNZXNzYWdlIiwiZXJyb3IiLCJjaGFubmVsIiwicG9ydDIiLCJwb3J0MSIsIm9ubWVzc2FnZSIsImNhbGxiYWNrIiwiaGVhcCIsIm5vZGUiLCJpbmRleCIsImxlbmd0aCIsInB1c2giLCJzaWZ0VXAiLCJmaXJzdCIsImxhc3QiLCJwb3AiLCJzaWZ0RG93biIsImkiLCJwYXJlbnRJbmRleCIsInBhcmVudCIsImNvbXBhcmUiLCJsZWZ0SW5kZXgiLCJsZWZ0IiwicmlnaHRJbmRleCIsInJpZ2h0IiwiYSIsImIiLCJkaWZmIiwic29ydEluZGV4IiwiaWQiLCJOb1ByaW9yaXR5IiwiSW1tZWRpYXRlUHJpb3JpdHkiLCJVc2VyQmxvY2tpbmdQcmlvcml0eSIsIk5vcm1hbFByaW9yaXR5IiwiTG93UHJpb3JpdHkiLCJJZGxlUHJpb3JpdHkiLCJydW5JZENvdW50ZXIiLCJtYWluVGhyZWFkSWRDb3VudGVyIiwicHJvZmlsaW5nU3RhdGVTaXplIiwic2hhcmVkUHJvZmlsaW5nQnVmZmVyIiwiU2hhcmVkQXJyYXlCdWZmZXIiLCJJbnQzMkFycmF5IiwiQllURVNfUEVSX0VMRU1FTlQiLCJBcnJheUJ1ZmZlciIsInByb2ZpbGluZ1N0YXRlIiwiUFJJT1JJVFkiLCJDVVJSRU5UX1RBU0tfSUQiLCJDVVJSRU5UX1JVTl9JRCIsIlFVRVVFX1NJWkUiLCJJTklUSUFMX0VWRU5UX0xPR19TSVpFIiwiTUFYX0VWRU5UX0xPR19TSVpFIiwiZXZlbnRMb2dTaXplIiwiZXZlbnRMb2dCdWZmZXIiLCJldmVudExvZyIsImV2ZW50TG9nSW5kZXgiLCJUYXNrU3RhcnRFdmVudCIsIlRhc2tDb21wbGV0ZUV2ZW50IiwiVGFza0Vycm9yRXZlbnQiLCJUYXNrQ2FuY2VsRXZlbnQiLCJUYXNrUnVuRXZlbnQiLCJUYXNrWWllbGRFdmVudCIsIlNjaGVkdWxlclN1c3BlbmRFdmVudCIsIlNjaGVkdWxlclJlc3VtZUV2ZW50IiwiZW50cmllcyIsIm9mZnNldCIsInN0b3BMb2dnaW5nUHJvZmlsaW5nRXZlbnRzIiwibmV3RXZlbnRMb2ciLCJzZXQiLCJidWZmZXIiLCJ0YXNrIiwibG9nRXZlbnQiLCJwcmlvcml0eUxldmVsIiwibWF4U2lnbmVkMzFCaXRJbnQiLCJJTU1FRElBVEVfUFJJT1JJVFlfVElNRU9VVCIsIlVTRVJfQkxPQ0tJTkdfUFJJT1JJVFkiLCJOT1JNQUxfUFJJT1JJVFlfVElNRU9VVCIsIkxPV19QUklPUklUWV9USU1FT1VUIiwiSURMRV9QUklPUklUWSIsInRhc2tRdWV1ZSIsInRpbWVyUXVldWUiLCJ0YXNrSWRDb3VudGVyIiwiY3VycmVudFRhc2siLCJjdXJyZW50UHJpb3JpdHlMZXZlbCIsImlzUGVyZm9ybWluZ1dvcmsiLCJpc0hvc3RDYWxsYmFja1NjaGVkdWxlZCIsImlzSG9zdFRpbWVvdXRTY2hlZHVsZWQiLCJ0aW1lciIsInBlZWsiLCJzdGFydFRpbWUiLCJleHBpcmF0aW9uVGltZSIsIm1hcmtUYXNrU3RhcnQiLCJpc1F1ZXVlZCIsImFkdmFuY2VUaW1lcnMiLCJmbHVzaFdvcmsiLCJmaXJzdFRpbWVyIiwiaGFuZGxlVGltZW91dCIsImluaXRpYWxUaW1lMiIsIm1hcmtTY2hlZHVsZXJVbnN1c3BlbmRlZCIsInByZXZpb3VzUHJpb3JpdHlMZXZlbCIsIndvcmtMb29wIiwibWFya1Rhc2tFcnJvcmVkIiwiX2N1cnJlbnRUaW1lIiwibWFya1NjaGVkdWxlclN1c3BlbmRlZCIsImRpZFVzZXJDYWxsYmFja1RpbWVvdXQiLCJtYXJrVGFza1J1biIsImNvbnRpbnVhdGlvbkNhbGxiYWNrIiwibWFya1Rhc2tZaWVsZCIsIm1hcmtUYXNrQ29tcGxldGVkIiwiZXZlbnRIYW5kbGVyIiwicGFyZW50UHJpb3JpdHlMZXZlbCIsImFwcGx5IiwiYXJndW1lbnRzIiwib3B0aW9ucyIsInRpbWVvdXQiLCJkZWxheSIsInRpbWVvdXRGb3JQcmlvcml0eUxldmVsIiwibmV3VGFzayIsIm1hcmtUYXNrQ2FuY2VsZWQiLCJmaXJzdFRhc2siLCJ1bnN0YWJsZV9yZXF1ZXN0UGFpbnQiLCJ1bnN0YWJsZV9Qcm9maWxpbmciLCJzdGFydExvZ2dpbmdQcm9maWxpbmdFdmVudHMiLCJ1bnN0YWJsZV9JZGxlUHJpb3JpdHkiLCJ1bnN0YWJsZV9JbW1lZGlhdGVQcmlvcml0eSIsInVuc3RhYmxlX0xvd1ByaW9yaXR5IiwidW5zdGFibGVfTm9ybWFsUHJpb3JpdHkiLCJ1bnN0YWJsZV9Vc2VyQmxvY2tpbmdQcmlvcml0eSIsInVuc3RhYmxlX2NhbmNlbENhbGxiYWNrIiwidW5zdGFibGVfY29udGludWVFeGVjdXRpb24iLCJ1bnN0YWJsZV9nZXRDdXJyZW50UHJpb3JpdHlMZXZlbCIsInVuc3RhYmxlX2dldEZpcnN0Q2FsbGJhY2tOb2RlIiwidW5zdGFibGVfbmV4dCIsInVuc3RhYmxlX3BhdXNlRXhlY3V0aW9uIiwidW5zdGFibGVfcnVuV2l0aFByaW9yaXR5IiwidW5zdGFibGVfc2NoZWR1bGVDYWxsYmFjayIsInVuc3RhYmxlX3Nob3VsZFlpZWxkIiwidW5zdGFibGVfd3JhcENhbGxiYWNrIiwibW9kdWxlMiIsInJlcXVpcmVfc2NoZWR1bGVyX2RldmVsb3BtZW50IiwiX19leHBvcnQiLCJkZWZhdWx0IiwiX19yZUV4cG9ydCIsIl9fdG9FU00iLCJzY2hlZHVsZXJfMF8xOV8xX2RlZmF1bHQiLCJpbXBvcnRfc2NoZWR1bGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7RUFBQTtJQUFBOztJQWFBLElBQUksTUFBdUM7TUFDeEMsYUFBVztRQUNkOztRQUVBLElBQUlBLDJCQUEyQjtRQUMvQixJQUFJQyxrQkFBa0I7UUFFdEIsSUFBSUM7UUFDSixJQUFJQztRQUNKLElBQUlDO1FBQ0osSUFBSUM7UUFDSixJQUFJQztRQUVKLElBRUEsT0FBT0MsV0FBVyxlQUNsQixPQUFPQyxtQkFBbUIsWUFBWTtVQUdwQyxJQUFJQyxZQUFZO1VBQ2hCLElBQUlDLGFBQWE7VUFFakIsSUFBSUMsaUJBQWlCLFlBQVk7WUFDL0IsSUFBSUYsY0FBYyxNQUFNO2NBQ3RCLElBQUk7Z0JBQ0YsSUFBSUcsY0FBY0MsUUFBUUMsY0FBYTtnQkFDdkMsSUFBSUMsbUJBQW1CO2dC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QUMvQmxFLFFBQVE2SiwwQkFBMEI1RjtRQUNsQ2pFLFFBQVF3SixxQkFBcUJBO1FBQzdCeEosUUFBUThKLGdDQUFnQzlGO1FBQ3hDaEUsUUFBUStKLDBCQUEwQkE7UUFDbEMvSixRQUFRZ0ssNkJBQTZCQTtRQUNyQ2hLLFFBQVFpSyxtQ0FBbUNBO1FBQzNDakssUUFBUWtLLGdDQUFnQ0E7UUFDeENsSyxRQUFRbUssZ0JBQWdCQTtRQUN4Qm5LLFFBQVFvSywwQkFBMEJBO1FBQ2xDcEssUUFBUXVKLHdCQUF3QkE7UUFDaEN2SixRQUFRcUssMkJBQTJCQTtRQUNuQ3JLLFFBQVFzSyw0QkFBNEJBO1FBQ3BDdEssUUFBUXVLLHVCQUF1QkE7UUFDL0J2SyxRQUFRd0ssd0JBQXdCQTtNQUM5QixJQUFHO0lBQ0w7RUFBQTtBQUFBOzs7QUN6MUJBO0VBQUE7SUFBQTs7SUFFQSxJQUFJLE9BQXVDO01BQ3pDQyxRQUFPekssVUFBVTtJQUNuQixPQUFPO01BQ0x5SyxRQUFPekssVUFBVTBLO0lBQ25CO0VBQUE7QUFBQTs7O0FDTkE7QUFBQUM7RUFBQUM7QUFBQTtBQUFBQyxxQ0FBY0M7QUFFZCx1QkFBcUJBO0FBQ3JCLElBQU9DLDJCQUFRQyIsImZpbGUiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGxpY2Vuc2UgUmVhY3QgdjAuMTkuMVxuICogc2NoZWR1bGVyLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbmFibGVTY2hlZHVsZXJEZWJ1Z2dpbmcgPSBmYWxzZTtcbnZhciBlbmFibGVQcm9maWxpbmcgPSB0cnVlO1xuXG52YXIgcmVxdWVzdEhvc3RDYWxsYmFjaztcbnZhciByZXF1ZXN0SG9zdFRpbWVvdXQ7XG52YXIgY2FuY2VsSG9zdFRpbWVvdXQ7XG52YXIgc2hvdWxkWWllbGRUb0hvc3Q7XG52YXIgcmVxdWVzdFBhaW50O1xuXG5pZiAoIC8vIElmIFNjaGVkdWxlciBydW5zIGluIGEgbm9uLURPTSBlbnZpcm9ubWVudCwgaXQgZmFsbHMgYmFjayB0byBhIG5haXZlXG4vLyBpbXBsZW1lbnRhdGlvbiB1c2luZyBzZXRUaW1lb3V0LlxudHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgLy8gQ2hlY2sgaWYgTWVzc2FnZUNoYW5uZWwgaXMgc3VwcG9ydGVkLCB0b28uXG50eXBlb2YgTWVzc2FnZUNoYW5uZWwgIT09ICdmdW5jdGlvbicpIHtcbiAgLy8gSWYgdGhpcyBhY2NpZGVudGFsbHkgZ2V0cyBpbXBvcnRlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50LCBlLmcuIEphdmFTY3JpcHRDb3JlLFxuICAvLyBmYWxsYmFjayB0byBhIG5haXZlIGltcGxlbWVudGF0aW9uLlxuICB2YXIgX2NhbGxiYWNrID0gbnVsbDtcbiAgdmFyIF90aW1lb3V0SUQgPSBudWxsO1xuXG4gIHZhciBfZmx1c2hDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoX2NhbGxiYWNrICE9PSBudWxsKSB7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgY3VycmVudFRpbWUgPSBleHBvcnRzLnVuc3RhYmxlX25vdygpO1xuICAgICAgICB2YXIgaGFzUmVtYWluaW5nVGltZSA9IHRydWU7XG5cbiAgICAgICAgX2NhbGxiYWNrKGhhc1JlbWFpbmluZ1RpbWUsIGN1cnJlbnRUaW1lKTtcblxuICAgICAgICBfY2FsbGJhY2sgPSBudWxsO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBzZXRUaW1lb3V0KF9mbHVzaENhbGxiYWNrLCAwKTtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdmFyIGluaXRpYWxUaW1lID0gRGF0ZS5ub3coKTtcblxuICBleHBvcnRzLnVuc3RhYmxlX25vdyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gRGF0ZS5ub3coKSAtIGluaXRpYWxUaW1lO1xuICB9O1xuXG4gIHJlcXVlc3RIb3N0Q2FsbGJhY2sgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICBpZiAoX2NhbGxiYWNrICE9PSBudWxsKSB7XG4gICAgICAvLyBQcm90ZWN0IGFnYWluc3QgcmUtZW50cmFuY3kuXG4gICAgICBzZXRUaW1lb3V0KHJlcXVlc3RIb3N0Q2FsbGJhY2ssIDAsIGNiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgX2NhbGxiYWNrID0gY2I7XG4gICAgICBzZXRUaW1lb3V0KF9mbHVzaENhbGxiYWNrLCAwKTtcbiAgICB9XG4gIH07XG5cbiAgcmVxdWVzdEhvc3RUaW1lb3V0ID0gZnVuY3Rpb24gKGNiLCBtcykge1xuICAgIF90aW1lb3V0SUQgPSBzZXRUaW1lb3V0KGNiLCBtcyk7XG4gIH07XG5cbiAgY2FuY2VsSG9zdFRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgY2xlYXJUaW1lb3V0KF90aW1lb3V0SUQpO1xuICB9O1xuXG4gIHNob3VsZFlpZWxkVG9Ib3N0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICByZXF1ZXN0UGFpbnQgPSBleHBvcnRzLnVuc3RhYmxlX2ZvcmNlRnJhbWVSYXRlID0gZnVuY3Rpb24gKCkge307XG59IGVsc2Uge1xuICAvLyBDYXB0dXJlIGxvY2FsIHJlZmVyZW5jZXMgdG8gbmF0aXZlIEFQSXMsIGluIGNhc2UgYSBwb2x5ZmlsbCBvdmVycmlkZXMgdGhlbS5cbiAgdmFyIHBlcmZvcm1hbmNlID0gd2luZG93LnBlcmZvcm1hbmNlO1xuICB2YXIgX0RhdGUgPSB3aW5kb3cuRGF0ZTtcbiAgdmFyIF9zZXRUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQ7XG4gIHZhciBfY2xlYXJUaW1lb3V0ID0gd2luZG93LmNsZWFyVGltZW91dDtcblxuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gVE9ETzogU2NoZWR1bGVyIG5vIGxvbmdlciByZXF1aXJlcyB0aGVzZSBtZXRob2RzIHRvIGJlIHBvbHlmaWxsZWQuIEJ1dFxuICAgIC8vIG1heWJlIHdlIHdhbnQgdG8gY29udGludWUgd2FybmluZyBpZiB0aGV5IGRvbid0IGV4aXN0LCB0byBwcmVzZXJ2ZSB0aGVcbiAgICAvLyBvcHRpb24gdG8gcmVseSBvbiBpdCBpbiB0aGUgZnV0dXJlP1xuICAgIHZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuICAgIHZhciBjYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZTsgLy8gVE9ETzogUmVtb3ZlIGZiLm1lIGxpbmtcblxuICAgIGlmICh0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBVc2luZyBjb25zb2xlWydlcnJvciddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcbiAgICAgIGNvbnNvbGVbJ2Vycm9yJ10oXCJUaGlzIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IHJlcXVlc3RBbmltYXRpb25GcmFtZS4gXCIgKyAnTWFrZSBzdXJlIHRoYXQgeW91IGxvYWQgYSAnICsgJ3BvbHlmaWxsIGluIG9sZGVyIGJyb3dzZXJzLiBodHRwczovL2ZiLm1lL3JlYWN0LXBvbHlmaWxscycpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY2FuY2VsQW5pbWF0aW9uRnJhbWUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIFVzaW5nIGNvbnNvbGVbJ2Vycm9yJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuICAgICAgY29uc29sZVsnZXJyb3InXShcIlRoaXMgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgY2FuY2VsQW5pbWF0aW9uRnJhbWUuIFwiICsgJ01ha2Ugc3VyZSB0aGF0IHlvdSBsb2FkIGEgJyArICdwb2x5ZmlsbCBpbiBvbGRlciBicm93c2Vycy4gaHR0cHM6Ly9mYi5tZS9yZWFjdC1wb2x5ZmlsbHMnKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHBlcmZvcm1hbmNlID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgcGVyZm9ybWFuY2Uubm93ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXhwb3J0cy51bnN0YWJsZV9ub3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgX2luaXRpYWxUaW1lID0gX0RhdGUubm93KCk7XG5cbiAgICBleHBvcnRzLnVuc3RhYmxlX25vdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfRGF0ZS5ub3coKSAtIF9pbml0aWFsVGltZTtcbiAgICB9O1xuICB9XG5cbiAgdmFyIGlzTWVzc2FnZUxvb3BSdW5uaW5nID0gZmFsc2U7XG4gIHZhciBzY2hlZHVsZWRIb3N0Q2FsbGJhY2sgPSBudWxsO1xuICB2YXIgdGFza1RpbWVvdXRJRCA9IC0xOyAvLyBTY2hlZHVsZXIgcGVyaW9kaWNhbGx5IHlpZWxkcyBpbiBjYXNlIHRoZXJlIGlzIG90aGVyIHdvcmsgb24gdGhlIG1haW5cbiAgLy8gdGhyZWFkLCBsaWtlIHVzZXIgZXZlbnRzLiBCeSBkZWZhdWx0LCBpdCB5aWVsZHMgbXVsdGlwbGUgdGltZXMgcGVyIGZyYW1lLlxuICAvLyBJdCBkb2VzIG5vdCBhdHRlbXB0IHRvIGFsaWduIHdpdGggZnJhbWUgYm91bmRhcmllcywgc2luY2UgbW9zdCB0YXNrcyBkb24ndFxuICAvLyBuZWVkIHRvIGJlIGZyYW1lIGFsaWduZWQ7IGZvciB0aG9zZSB0aGF0IGRvLCB1c2UgcmVxdWVzdEFuaW1hdGlvbkZyYW1lLlxuXG4gIHZhciB5aWVsZEludGVydmFsID0gNTtcbiAgdmFyIGRlYWRsaW5lID0gMDsgLy8gVE9ETzogTWFrZSB0aGlzIGNvbmZpZ3VyYWJsZVxuXG4gIHtcbiAgICAvLyBgaXNJbnB1dFBlbmRpbmdgIGlzIG5vdCBhdmFpbGFibGUuIFNpbmNlIHdlIGhhdmUgbm8gd2F5IG9mIGtub3dpbmcgaWZcbiAgICAvLyB0aGVyZSdzIHBlbmRpbmcgaW5wdXQsIGFsd2F5cyB5aWVsZCBhdCB0aGUgZW5kIG9mIHRoZSBmcmFtZS5cbiAgICBzaG91bGRZaWVsZFRvSG9zdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBleHBvcnRzLnVuc3RhYmxlX25vdygpID49IGRlYWRsaW5lO1xuICAgIH07IC8vIFNpbmNlIHdlIHlpZWxkIGV2ZXJ5IGZyYW1lIHJlZ2FyZGxlc3MsIGByZXF1ZXN0UGFpbnRgIGhhcyBubyBlZmZlY3QuXG5cblxuICAgIHJlcXVlc3RQYWludCA9IGZ1bmN0aW9uICgpIHt9O1xuICB9XG5cbiAgZXhwb3J0cy51bnN0YWJsZV9mb3JjZUZyYW1lUmF0ZSA9IGZ1bmN0aW9uIChmcHMpIHtcbiAgICBpZiAoZnBzIDwgMCB8fCBmcHMgPiAxMjUpIHtcbiAgICAgIC8vIFVzaW5nIGNvbnNvbGVbJ2Vycm9yJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuICAgICAgY29uc29sZVsnZXJyb3InXSgnZm9yY2VGcmFtZVJhdGUgdGFrZXMgYSBwb3NpdGl2ZSBpbnQgYmV0d2VlbiAwIGFuZCAxMjUsICcgKyAnZm9yY2luZyBmcmFtZXJhdGVzIGhpZ2hlciB0aGFuIDEyNSBmcHMgaXMgbm90IHVuc3VwcG9ydGVkJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGZwcyA+IDApIHtcbiAgICAgIHlpZWxkSW50ZXJ2YWwgPSBNYXRoLmZsb29yKDEwMDAgLyBmcHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyByZXNldCB0aGUgZnJhbWVyYXRlXG4gICAgICB5aWVsZEludGVydmFsID0gNTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHBlcmZvcm1Xb3JrVW50aWxEZWFkbGluZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc2NoZWR1bGVkSG9zdENhbGxiYWNrICE9PSBudWxsKSB7XG4gICAgICB2YXIgY3VycmVudFRpbWUgPSBleHBvcnRzLnVuc3RhYmxlX25vdygpOyAvLyBZaWVsZCBhZnRlciBgeWllbGRJbnRlcnZhbGAgbXMsIHJlZ2FyZGxlc3Mgb2Ygd2hlcmUgd2UgYXJlIGluIHRoZSB2c3luY1xuICAgICAgLy8gY3ljbGUuIFRoaXMgbWVhbnMgdGhlcmUncyBhbHdheXMgdGltZSByZW1haW5pbmcgYXQgdGhlIGJlZ2lubmluZyBvZlxuICAgICAgLy8gdGhlIG1lc3NhZ2UgZXZlbnQuXG5cbiAgICAgIGRlYWRsaW5lID0gY3VycmVudFRpbWUgKyB5aWVsZEludGVydmFsO1xuICAgICAgdmFyIGhhc1RpbWVSZW1haW5pbmcgPSB0cnVlO1xuXG4gICAgICB0cnkge1xuICAgICAgICB2YXIgaGFzTW9yZVdvcmsgPSBzY2hlZHVsZWRIb3N0Q2FsbGJhY2soaGFzVGltZVJlbWFpbmluZywgY3VycmVudFRpbWUpO1xuXG4gICAgICAgIGlmICghaGFzTW9yZVdvcmspIHtcbiAgICAgICAgICBpc01lc3NhZ2VMb29wUnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgIHNjaGVkdWxlZEhvc3RDYWxsYmFjayA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gSWYgdGhlcmUncyBtb3JlIHdvcmssIHNjaGVkdWxlIHRoZSBuZXh0IG1lc3NhZ2UgZXZlbnQgYXQgdGhlIGVuZFxuICAgICAgICAgIC8vIG9mIHRoZSBwcmVjZWRpbmcgb25lLlxuICAgICAgICAgIHBvcnQucG9zdE1lc3NhZ2UobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIElmIGEgc2NoZWR1bGVyIHRhc2sgdGhyb3dzLCBleGl0IHRoZSBjdXJyZW50IGJyb3dzZXIgdGFzayBzbyB0aGVcbiAgICAgICAgLy8gZXJyb3IgY2FuIGJlIG9ic2VydmVkLlxuICAgICAgICBwb3J0LnBvc3RNZXNzYWdlKG51bGwpO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaXNNZXNzYWdlTG9vcFJ1bm5pbmcgPSBmYWxzZTtcbiAgICB9IC8vIFlpZWxkaW5nIHRvIHRoZSBicm93c2VyIHdpbGwgZ2l2ZSBpdCBhIGNoYW5jZSB0byBwYWludCwgc28gd2UgY2FuXG4gIH07XG5cbiAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgdmFyIHBvcnQgPSBjaGFubmVsLnBvcnQyO1xuICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IHBlcmZvcm1Xb3JrVW50aWxEZWFkbGluZTtcblxuICByZXF1ZXN0SG9zdENhbGxiYWNrID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgc2NoZWR1bGVkSG9zdENhbGxiYWNrID0gY2FsbGJhY2s7XG5cbiAgICBpZiAoIWlzTWVzc2FnZUxvb3BSdW5uaW5nKSB7XG4gICAgICBpc01lc3NhZ2VMb29wUnVubmluZyA9IHRydWU7XG4gICAgICBwb3J0LnBvc3RNZXNzYWdlKG51bGwpO1xuICAgIH1cbiAgfTtcblxuICByZXF1ZXN0SG9zdFRpbWVvdXQgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIG1zKSB7XG4gICAgdGFza1RpbWVvdXRJRCA9IF9zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNhbGxiYWNrKGV4cG9ydHMudW5zdGFibGVfbm93KCkpO1xuICAgIH0sIG1zKTtcbiAgfTtcblxuICBjYW5jZWxIb3N0VGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICBfY2xlYXJUaW1lb3V0KHRhc2tUaW1lb3V0SUQpO1xuXG4gICAgdGFza1RpbWVvdXRJRCA9IC0xO1xuICB9O1xufVxuXG5mdW5jdGlvbiBwdXNoKGhlYXAsIG5vZGUpIHtcbiAgdmFyIGluZGV4ID0gaGVhcC5sZW5ndGg7XG4gIGhlYXAucHVzaChub2RlKTtcbiAgc2lmdFVwKGhlYXAsIG5vZGUsIGluZGV4KTtcbn1cbmZ1bmN0aW9uIHBlZWsoaGVhcCkge1xuICB2YXIgZmlyc3QgPSBoZWFwWzBdO1xuICByZXR1cm4gZmlyc3QgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBmaXJzdDtcbn1cbmZ1bmN0aW9uIHBvcChoZWFwKSB7XG4gIHZhciBmaXJzdCA9IGhlYXBbMF07XG5cbiAgaWYgKGZpcnN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgbGFzdCA9IGhlYXAucG9wKCk7XG5cbiAgICBpZiAobGFzdCAhPT0gZmlyc3QpIHtcbiAgICAgIGhlYXBbMF0gPSBsYXN0O1xuICAgICAgc2lmdERvd24oaGVhcCwgbGFzdCwgMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpcnN0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNpZnRVcChoZWFwLCBub2RlLCBpKSB7XG4gIHZhciBpbmRleCA9IGk7XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICB2YXIgcGFyZW50SW5kZXggPSBpbmRleCAtIDEgPj4+IDE7XG4gICAgdmFyIHBhcmVudCA9IGhlYXBbcGFyZW50SW5kZXhdO1xuXG4gICAgaWYgKHBhcmVudCAhPT0gdW5kZWZpbmVkICYmIGNvbXBhcmUocGFyZW50LCBub2RlKSA+IDApIHtcbiAgICAgIC8vIFRoZSBwYXJlbnQgaXMgbGFyZ2VyLiBTd2FwIHBvc2l0aW9ucy5cbiAgICAgIGhlYXBbcGFyZW50SW5kZXhdID0gbm9kZTtcbiAgICAgIGhlYXBbaW5kZXhdID0gcGFyZW50O1xuICAgICAgaW5kZXggPSBwYXJlbnRJbmRleDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhlIHBhcmVudCBpcyBzbWFsbGVyLiBFeGl0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzaWZ0RG93bihoZWFwLCBub2RlLCBpKSB7XG4gIHZhciBpbmRleCA9IGk7XG4gIHZhciBsZW5ndGggPSBoZWFwLmxlbmd0aDtcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgbGVmdEluZGV4ID0gKGluZGV4ICsgMSkgKiAyIC0gMTtcbiAgICB2YXIgbGVmdCA9IGhlYXBbbGVmdEluZGV4XTtcbiAgICB2YXIgcmlnaHRJbmRleCA9IGxlZnRJbmRleCArIDE7XG4gICAgdmFyIHJpZ2h0ID0gaGVhcFtyaWdodEluZGV4XTsgLy8gSWYgdGhlIGxlZnQgb3IgcmlnaHQgbm9kZSBpcyBzbWFsbGVyLCBzd2FwIHdpdGggdGhlIHNtYWxsZXIgb2YgdGhvc2UuXG5cbiAgICBpZiAobGVmdCAhPT0gdW5kZWZpbmVkICYmIGNvbXBhcmUobGVmdCwgbm9kZSkgPCAwKSB7XG4gICAgICBpZiAocmlnaHQgIT09IHVuZGVmaW5lZCAmJiBjb21wYXJlKHJpZ2h0LCBsZWZ0KSA8IDApIHtcbiAgICAgICAgaGVhcFtpbmRleF0gPSByaWdodDtcbiAgICAgICAgaGVhcFtyaWdodEluZGV4XSA9IG5vZGU7XG4gICAgICAgIGluZGV4ID0gcmlnaHRJbmRleDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhlYXBbaW5kZXhdID0gbGVmdDtcbiAgICAgICAgaGVhcFtsZWZ0SW5kZXhdID0gbm9kZTtcbiAgICAgICAgaW5kZXggPSBsZWZ0SW5kZXg7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyaWdodCAhPT0gdW5kZWZpbmVkICYmIGNvbXBhcmUocmlnaHQsIG5vZGUpIDwgMCkge1xuICAgICAgaGVhcFtpbmRleF0gPSByaWdodDtcbiAgICAgIGhlYXBbcmlnaHRJbmRleF0gPSBub2RlO1xuICAgICAgaW5kZXggPSByaWdodEluZGV4O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBOZWl0aGVyIGNoaWxkIGlzIHNtYWxsZXIuIEV4aXQuXG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNvbXBhcmUoYSwgYikge1xuICAvLyBDb21wYXJlIHNvcnQgaW5kZXggZmlyc3QsIHRoZW4gdGFzayBpZC5cbiAgdmFyIGRpZmYgPSBhLnNvcnRJbmRleCAtIGIuc29ydEluZGV4O1xuICByZXR1cm4gZGlmZiAhPT0gMCA/IGRpZmYgOiBhLmlkIC0gYi5pZDtcbn1cblxuLy8gVE9ETzogVXNlIHN5bWJvbHM/XG52YXIgTm9Qcmlvcml0eSA9IDA7XG52YXIgSW1tZWRpYXRlUHJpb3JpdHkgPSAxO1xudmFyIFVzZXJCbG9ja2luZ1ByaW9yaXR5ID0gMjtcbnZhciBOb3JtYWxQcmlvcml0eSA9IDM7XG52YXIgTG93UHJpb3JpdHkgPSA0O1xudmFyIElkbGVQcmlvcml0eSA9IDU7XG5cbnZhciBydW5JZENvdW50ZXIgPSAwO1xudmFyIG1haW5UaHJlYWRJZENvdW50ZXIgPSAwO1xudmFyIHByb2ZpbGluZ1N0YXRlU2l6ZSA9IDQ7XG52YXIgc2hhcmVkUHJvZmlsaW5nQnVmZmVyID0gIC8vICRGbG93Rml4TWUgRmxvdyBkb2Vzbid0IGtub3cgYWJvdXQgU2hhcmVkQXJyYXlCdWZmZXJcbnR5cGVvZiBTaGFyZWRBcnJheUJ1ZmZlciA9PT0gJ2Z1bmN0aW9uJyA/IG5ldyBTaGFyZWRBcnJheUJ1ZmZlcihwcm9maWxpbmdTdGF0ZVNpemUgKiBJbnQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5UKSA6IC8vICRGbG93Rml4TWUgRmxvdyBkb2Vzbid0IGtub3cgYWJvdXQgQXJyYXlCdWZmZXJcbnR5cGVvZiBBcnJheUJ1ZmZlciA9PT0gJ2Z1bmN0aW9uJyA/IG5ldyBBcnJheUJ1ZmZlcihwcm9maWxpbmdTdGF0ZVNpemUgKiBJbnQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5UKSA6IG51bGwgLy8gRG9uJ3QgY3Jhc2ggdGhlIGluaXQgcGF0aCBvbiBJRTlcbjtcbnZhciBwcm9maWxpbmdTdGF0ZSA9ICBzaGFyZWRQcm9maWxpbmdCdWZmZXIgIT09IG51bGwgPyBuZXcgSW50MzJBcnJheShzaGFyZWRQcm9maWxpbmdCdWZmZXIpIDogW107IC8vIFdlIGNhbid0IHJlYWQgdGhpcyBidXQgaXQgaGVscHMgc2F2ZSBieXRlcyBmb3IgbnVsbCBjaGVja3NcblxudmFyIFBSSU9SSVRZID0gMDtcbnZhciBDVVJSRU5UX1RBU0tfSUQgPSAxO1xudmFyIENVUlJFTlRfUlVOX0lEID0gMjtcbnZhciBRVUVVRV9TSVpFID0gMztcblxue1xuICBwcm9maWxpbmdTdGF0ZVtQUklPUklUWV0gPSBOb1ByaW9yaXR5OyAvLyBUaGlzIGlzIG1haW50YWluZWQgd2l0aCBhIGNvdW50ZXIsIGJlY2F1c2UgdGhlIHNpemUgb2YgdGhlIHByaW9yaXR5IHF1ZXVlXG4gIC8vIGFycmF5IG1pZ2h0IGluY2x1ZGUgY2FuY2VsZWQgdGFza3MuXG5cbiAgcHJvZmlsaW5nU3RhdGVbUVVFVUVfU0laRV0gPSAwO1xuICBwcm9maWxpbmdTdGF0ZVtDVVJSRU5UX1RBU0tfSURdID0gMDtcbn0gLy8gQnl0ZXMgcGVyIGVsZW1lbnQgaXMgNFxuXG5cbnZhciBJTklUSUFMX0VWRU5UX0xPR19TSVpFID0gMTMxMDcyO1xudmFyIE1BWF9FVkVOVF9MT0dfU0laRSA9IDUyNDI4ODsgLy8gRXF1aXZhbGVudCB0byAyIG1lZ2FieXRlc1xuXG52YXIgZXZlbnRMb2dTaXplID0gMDtcbnZhciBldmVudExvZ0J1ZmZlciA9IG51bGw7XG52YXIgZXZlbnRMb2cgPSBudWxsO1xudmFyIGV2ZW50TG9nSW5kZXggPSAwO1xudmFyIFRhc2tTdGFydEV2ZW50ID0gMTtcbnZhciBUYXNrQ29tcGxldGVFdmVudCA9IDI7XG52YXIgVGFza0Vycm9yRXZlbnQgPSAzO1xudmFyIFRhc2tDYW5jZWxFdmVudCA9IDQ7XG52YXIgVGFza1J1bkV2ZW50ID0gNTtcbnZhciBUYXNrWWllbGRFdmVudCA9IDY7XG52YXIgU2NoZWR1bGVyU3VzcGVuZEV2ZW50ID0gNztcbnZhciBTY2hlZHVsZXJSZXN1bWVFdmVudCA9IDg7XG5cbmZ1bmN0aW9uIGxvZ0V2ZW50KGVudHJpZXMpIHtcbiAgaWYgKGV2ZW50TG9nICE9PSBudWxsKSB7XG4gICAgdmFyIG9mZnNldCA9IGV2ZW50TG9nSW5kZXg7XG4gICAgZXZlbnRMb2dJbmRleCArPSBlbnRyaWVzLmxlbmd0aDtcblxuICAgIGlmIChldmVudExvZ0luZGV4ICsgMSA+IGV2ZW50TG9nU2l6ZSkge1xuICAgICAgZXZlbnRMb2dTaXplICo9IDI7XG5cbiAgICAgIGlmIChldmVudExvZ1NpemUgPiBNQVhfRVZFTlRfTE9HX1NJWkUpIHtcbiAgICAgICAgLy8gVXNpbmcgY29uc29sZVsnZXJyb3InXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG4gICAgICAgIGNvbnNvbGVbJ2Vycm9yJ10oXCJTY2hlZHVsZXIgUHJvZmlsaW5nOiBFdmVudCBsb2cgZXhjZWVkZWQgbWF4aW11bSBzaXplLiBEb24ndCBcIiArICdmb3JnZXQgdG8gY2FsbCBgc3RvcExvZ2dpbmdQcm9maWxpbmdFdmVudHMoKWAuJyk7XG4gICAgICAgIHN0b3BMb2dnaW5nUHJvZmlsaW5nRXZlbnRzKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIG5ld0V2ZW50TG9nID0gbmV3IEludDMyQXJyYXkoZXZlbnRMb2dTaXplICogNCk7XG4gICAgICBuZXdFdmVudExvZy5zZXQoZXZlbnRMb2cpO1xuICAgICAgZXZlbnRMb2dCdWZmZXIgPSBuZXdFdmVudExvZy5idWZmZXI7XG4gICAgICBldmVudExvZyA9IG5ld0V2ZW50TG9nO1xuICAgIH1cblxuICAgIGV2ZW50TG9nLnNldChlbnRyaWVzLCBvZmZzZXQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0YXJ0TG9nZ2luZ1Byb2ZpbGluZ0V2ZW50cygpIHtcbiAgZXZlbnRMb2dTaXplID0gSU5JVElBTF9FVkVOVF9MT0dfU0laRTtcbiAgZXZlbnRMb2dCdWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoZXZlbnRMb2dTaXplICogNCk7XG4gIGV2ZW50TG9nID0gbmV3IEludDMyQXJyYXkoZXZlbnRMb2dCdWZmZXIpO1xuICBldmVudExvZ0luZGV4ID0gMDtcbn1cbmZ1bmN0aW9uIHN0b3BMb2dnaW5nUHJvZmlsaW5nRXZlbnRzKCkge1xuICB2YXIgYnVmZmVyID0gZXZlbnRMb2dCdWZmZXI7XG4gIGV2ZW50TG9nU2l6ZSA9IDA7XG4gIGV2ZW50TG9nQnVmZmVyID0gbnVsbDtcbiAgZXZlbnRMb2cgPSBudWxsO1xuICBldmVudExvZ0luZGV4ID0gMDtcbiAgcmV0dXJuIGJ1ZmZlcjtcbn1cbmZ1bmN0aW9uIG1hcmtUYXNrU3RhcnQodGFzaywgbXMpIHtcbiAge1xuICAgIHByb2ZpbGluZ1N0YXRlW1FVRVVFX1NJWkVdKys7XG5cbiAgICBpZiAoZXZlbnRMb2cgIT09IG51bGwpIHtcbiAgICAgIC8vIHBlcmZvcm1hbmNlLm5vdyByZXR1cm5zIGEgZmxvYXQsIHJlcHJlc2VudGluZyBtaWxsaXNlY29uZHMuIFdoZW4gdGhlXG4gICAgICAvLyBldmVudCBpcyBsb2dnZWQsIGl0J3MgY29lcmNlZCB0byBhbiBpbnQuIENvbnZlcnQgdG8gbWljcm9zZWNvbmRzIHRvXG4gICAgICAvLyBtYWludGFpbiBleHRyYSBkZWdyZWVzIG9mIHByZWNpc2lvbi5cbiAgICAgIGxvZ0V2ZW50KFtUYXNrU3RhcnRFdmVudCwgbXMgKiAxMDAwLCB0YXNrLmlkLCB0YXNrLnByaW9yaXR5TGV2ZWxdKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIG1hcmtUYXNrQ29tcGxldGVkKHRhc2ssIG1zKSB7XG4gIHtcbiAgICBwcm9maWxpbmdTdGF0ZVtQUklPUklUWV0gPSBOb1ByaW9yaXR5O1xuICAgIHByb2ZpbGluZ1N0YXRlW0NVUlJFTlRfVEFTS19JRF0gPSAwO1xuICAgIHByb2ZpbGluZ1N0YXRlW1FVRVVFX1NJWkVdLS07XG5cbiAgICBpZiAoZXZlbnRMb2cgIT09IG51bGwpIHtcbiAgICAgIGxvZ0V2ZW50KFtUYXNrQ29tcGxldGVFdmVudCwgbXMgKiAxMDAwLCB0YXNrLmlkXSk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBtYXJrVGFza0NhbmNlbGVkKHRhc2ssIG1zKSB7XG4gIHtcbiAgICBwcm9maWxpbmdTdGF0ZVtRVUVVRV9TSVpFXS0tO1xuXG4gICAgaWYgKGV2ZW50TG9nICE9PSBudWxsKSB7XG4gICAgICBsb2dFdmVudChbVGFza0NhbmNlbEV2ZW50LCBtcyAqIDEwMDAsIHRhc2suaWRdKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIG1hcmtUYXNrRXJyb3JlZCh0YXNrLCBtcykge1xuICB7XG4gICAgcHJvZmlsaW5nU3RhdGVbUFJJT1JJVFldID0gTm9Qcmlvcml0eTtcbiAgICBwcm9maWxpbmdTdGF0ZVtDVVJSRU5UX1RBU0tfSURdID0gMDtcbiAgICBwcm9maWxpbmdTdGF0ZVtRVUVVRV9TSVpFXS0tO1xuXG4gICAgaWYgKGV2ZW50TG9nICE9PSBudWxsKSB7XG4gICAgICBsb2dFdmVudChbVGFza0Vycm9yRXZlbnQsIG1zICogMTAwMCwgdGFzay5pZF0pO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gbWFya1Rhc2tSdW4odGFzaywgbXMpIHtcbiAge1xuICAgIHJ1bklkQ291bnRlcisrO1xuICAgIHByb2ZpbGluZ1N0YXRlW1BSSU9SSVRZXSA9IHRhc2sucHJpb3JpdHlMZXZlbDtcbiAgICBwcm9maWxpbmdTdGF0ZVtDVVJSRU5UX1RBU0tfSURdID0gdGFzay5pZDtcbiAgICBwcm9maWxpbmdTdGF0ZVtDVVJSRU5UX1JVTl9JRF0gPSBydW5JZENvdW50ZXI7XG5cbiAgICBpZiAoZXZlbnRMb2cgIT09IG51bGwpIHtcbiAgICAgIGxvZ0V2ZW50KFtUYXNrUnVuRXZlbnQsIG1zICogMTAwMCwgdGFzay5pZCwgcnVuSWRDb3VudGVyXSk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBtYXJrVGFza1lpZWxkKHRhc2ssIG1zKSB7XG4gIHtcbiAgICBwcm9maWxpbmdTdGF0ZVtQUklPUklUWV0gPSBOb1ByaW9yaXR5O1xuICAgIHByb2ZpbGluZ1N0YXRlW0NVUlJFTlRfVEFTS19JRF0gPSAwO1xuICAgIHByb2ZpbGluZ1N0YXRlW0NVUlJFTlRfUlVOX0lEXSA9IDA7XG5cbiAgICBpZiAoZXZlbnRMb2cgIT09IG51bGwpIHtcbiAgICAgIGxvZ0V2ZW50KFtUYXNrWWllbGRFdmVudCwgbXMgKiAxMDAwLCB0YXNrLmlkLCBydW5JZENvdW50ZXJdKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIG1hcmtTY2hlZHVsZXJTdXNwZW5kZWQobXMpIHtcbiAge1xuICAgIG1haW5UaHJlYWRJZENvdW50ZXIrKztcblxuICAgIGlmIChldmVudExvZyAhPT0gbnVsbCkge1xuICAgICAgbG9nRXZlbnQoW1NjaGVkdWxlclN1c3BlbmRFdmVudCwgbXMgKiAxMDAwLCBtYWluVGhyZWFkSWRDb3VudGVyXSk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBtYXJrU2NoZWR1bGVyVW5zdXNwZW5kZWQobXMpIHtcbiAge1xuICAgIGlmIChldmVudExvZyAhPT0gbnVsbCkge1xuICAgICAgbG9nRXZlbnQoW1NjaGVkdWxlclJlc3VtZUV2ZW50LCBtcyAqIDEwMDAsIG1haW5UaHJlYWRJZENvdW50ZXJdKTtcbiAgICB9XG4gIH1cbn1cblxuLyogZXNsaW50LWRpc2FibGUgbm8tdmFyICovXG4vLyBNYXRoLnBvdygyLCAzMCkgLSAxXG4vLyAwYjExMTExMTExMTExMTExMTExMTExMTExMTExMTExMVxuXG52YXIgbWF4U2lnbmVkMzFCaXRJbnQgPSAxMDczNzQxODIzOyAvLyBUaW1lcyBvdXQgaW1tZWRpYXRlbHlcblxudmFyIElNTUVESUFURV9QUklPUklUWV9USU1FT1VUID0gLTE7IC8vIEV2ZW50dWFsbHkgdGltZXMgb3V0XG5cbnZhciBVU0VSX0JMT0NLSU5HX1BSSU9SSVRZID0gMjUwO1xudmFyIE5PUk1BTF9QUklPUklUWV9USU1FT1VUID0gNTAwMDtcbnZhciBMT1dfUFJJT1JJVFlfVElNRU9VVCA9IDEwMDAwOyAvLyBOZXZlciB0aW1lcyBvdXRcblxudmFyIElETEVfUFJJT1JJVFkgPSBtYXhTaWduZWQzMUJpdEludDsgLy8gVGFza3MgYXJlIHN0b3JlZCBvbiBhIG1pbiBoZWFwXG5cbnZhciB0YXNrUXVldWUgPSBbXTtcbnZhciB0aW1lclF1ZXVlID0gW107IC8vIEluY3JlbWVudGluZyBpZCBjb3VudGVyLiBVc2VkIHRvIG1haW50YWluIGluc2VydGlvbiBvcmRlci5cblxudmFyIHRhc2tJZENvdW50ZXIgPSAxOyAvLyBQYXVzaW5nIHRoZSBzY2hlZHVsZXIgaXMgdXNlZnVsIGZvciBkZWJ1Z2dpbmcuXG52YXIgY3VycmVudFRhc2sgPSBudWxsO1xudmFyIGN1cnJlbnRQcmlvcml0eUxldmVsID0gTm9ybWFsUHJpb3JpdHk7IC8vIFRoaXMgaXMgc2V0IHdoaWxlIHBlcmZvcm1pbmcgd29yaywgdG8gcHJldmVudCByZS1lbnRyYW5jeS5cblxudmFyIGlzUGVyZm9ybWluZ1dvcmsgPSBmYWxzZTtcbnZhciBpc0hvc3RDYWxsYmFja1NjaGVkdWxlZCA9IGZhbHNlO1xudmFyIGlzSG9zdFRpbWVvdXRTY2hlZHVsZWQgPSBmYWxzZTtcblxuZnVuY3Rpb24gYWR2YW5jZVRpbWVycyhjdXJyZW50VGltZSkge1xuICAvLyBDaGVjayBmb3IgdGFza3MgdGhhdCBhcmUgbm8gbG9uZ2VyIGRlbGF5ZWQgYW5kIGFkZCB0aGVtIHRvIHRoZSBxdWV1ZS5cbiAgdmFyIHRpbWVyID0gcGVlayh0aW1lclF1ZXVlKTtcblxuICB3aGlsZSAodGltZXIgIT09IG51bGwpIHtcbiAgICBpZiAodGltZXIuY2FsbGJhY2sgPT09IG51bGwpIHtcbiAgICAgIC8vIFRpbWVyIHdhcyBjYW5jZWxsZWQuXG4gICAgICBwb3AodGltZXJRdWV1ZSk7XG4gICAgfSBlbHNlIGlmICh0aW1lci5zdGFydFRpbWUgPD0gY3VycmVudFRpbWUpIHtcbiAgICAgIC8vIFRpbWVyIGZpcmVkLiBUcmFuc2ZlciB0byB0aGUgdGFzayBxdWV1ZS5cbiAgICAgIHBvcCh0aW1lclF1ZXVlKTtcbiAgICAgIHRpbWVyLnNvcnRJbmRleCA9IHRpbWVyLmV4cGlyYXRpb25UaW1lO1xuICAgICAgcHVzaCh0YXNrUXVldWUsIHRpbWVyKTtcblxuICAgICAge1xuICAgICAgICBtYXJrVGFza1N0YXJ0KHRpbWVyLCBjdXJyZW50VGltZSk7XG4gICAgICAgIHRpbWVyLmlzUXVldWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmVtYWluaW5nIHRpbWVycyBhcmUgcGVuZGluZy5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aW1lciA9IHBlZWsodGltZXJRdWV1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlVGltZW91dChjdXJyZW50VGltZSkge1xuICBpc0hvc3RUaW1lb3V0U2NoZWR1bGVkID0gZmFsc2U7XG4gIGFkdmFuY2VUaW1lcnMoY3VycmVudFRpbWUpO1xuXG4gIGlmICghaXNIb3N0Q2FsbGJhY2tTY2hlZHVsZWQpIHtcbiAgICBpZiAocGVlayh0YXNrUXVldWUpICE9PSBudWxsKSB7XG4gICAgICBpc0hvc3RDYWxsYmFja1NjaGVkdWxlZCA9IHRydWU7XG4gICAgICByZXF1ZXN0SG9zdENhbGxiYWNrKGZsdXNoV29yayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBmaXJzdFRpbWVyID0gcGVlayh0aW1lclF1ZXVlKTtcblxuICAgICAgaWYgKGZpcnN0VGltZXIgIT09IG51bGwpIHtcbiAgICAgICAgcmVxdWVzdEhvc3RUaW1lb3V0KGhhbmRsZVRpbWVvdXQsIGZpcnN0VGltZXIuc3RhcnRUaW1lIC0gY3VycmVudFRpbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBmbHVzaFdvcmsoaGFzVGltZVJlbWFpbmluZywgaW5pdGlhbFRpbWUpIHtcbiAge1xuICAgIG1hcmtTY2hlZHVsZXJVbnN1c3BlbmRlZChpbml0aWFsVGltZSk7XG4gIH0gLy8gV2UnbGwgbmVlZCBhIGhvc3QgY2FsbGJhY2sgdGhlIG5leHQgdGltZSB3b3JrIGlzIHNjaGVkdWxlZC5cblxuXG4gIGlzSG9zdENhbGxiYWNrU2NoZWR1bGVkID0gZmFsc2U7XG5cbiAgaWYgKGlzSG9zdFRpbWVvdXRTY2hlZHVsZWQpIHtcbiAgICAvLyBXZSBzY2hlZHVsZWQgYSB0aW1lb3V0IGJ1dCBpdCdzIG5vIGxvbmdlciBuZWVkZWQuIENhbmNlbCBpdC5cbiAgICBpc0hvc3RUaW1lb3V0U2NoZWR1bGVkID0gZmFsc2U7XG4gICAgY2FuY2VsSG9zdFRpbWVvdXQoKTtcbiAgfVxuXG4gIGlzUGVyZm9ybWluZ1dvcmsgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmlvcml0eUxldmVsID0gY3VycmVudFByaW9yaXR5TGV2ZWw7XG5cbiAgdHJ5IHtcbiAgICBpZiAoZW5hYmxlUHJvZmlsaW5nKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gd29ya0xvb3AoaGFzVGltZVJlbWFpbmluZywgaW5pdGlhbFRpbWUpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRUYXNrICE9PSBudWxsKSB7XG4gICAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gZXhwb3J0cy51bnN0YWJsZV9ub3coKTtcbiAgICAgICAgICBtYXJrVGFza0Vycm9yZWQoY3VycmVudFRhc2ssIGN1cnJlbnRUaW1lKTtcbiAgICAgICAgICBjdXJyZW50VGFzay5pc1F1ZXVlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5vIGNhdGNoIGluIHByb2QgY29kZXBhdGguXG4gICAgICByZXR1cm4gd29ya0xvb3AoaGFzVGltZVJlbWFpbmluZywgaW5pdGlhbFRpbWUpO1xuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICBjdXJyZW50VGFzayA9IG51bGw7XG4gICAgY3VycmVudFByaW9yaXR5TGV2ZWwgPSBwcmV2aW91c1ByaW9yaXR5TGV2ZWw7XG4gICAgaXNQZXJmb3JtaW5nV29yayA9IGZhbHNlO1xuXG4gICAge1xuICAgICAgdmFyIF9jdXJyZW50VGltZSA9IGV4cG9ydHMudW5zdGFibGVfbm93KCk7XG5cbiAgICAgIG1hcmtTY2hlZHVsZXJTdXNwZW5kZWQoX2N1cnJlbnRUaW1lKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gd29ya0xvb3AoaGFzVGltZVJlbWFpbmluZywgaW5pdGlhbFRpbWUpIHtcbiAgdmFyIGN1cnJlbnRUaW1lID0gaW5pdGlhbFRpbWU7XG4gIGFkdmFuY2VUaW1lcnMoY3VycmVudFRpbWUpO1xuICBjdXJyZW50VGFzayA9IHBlZWsodGFza1F1ZXVlKTtcblxuICB3aGlsZSAoY3VycmVudFRhc2sgIT09IG51bGwgJiYgIShlbmFibGVTY2hlZHVsZXJEZWJ1Z2dpbmcgKSkge1xuICAgIGlmIChjdXJyZW50VGFzay5leHBpcmF0aW9uVGltZSA+IGN1cnJlbnRUaW1lICYmICghaGFzVGltZVJlbWFpbmluZyB8fCBzaG91bGRZaWVsZFRvSG9zdCgpKSkge1xuICAgICAgLy8gVGhpcyBjdXJyZW50VGFzayBoYXNuJ3QgZXhwaXJlZCwgYW5kIHdlJ3ZlIHJlYWNoZWQgdGhlIGRlYWRsaW5lLlxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdmFyIGNhbGxiYWNrID0gY3VycmVudFRhc2suY2FsbGJhY2s7XG5cbiAgICBpZiAoY2FsbGJhY2sgIT09IG51bGwpIHtcbiAgICAgIGN1cnJlbnRUYXNrLmNhbGxiYWNrID0gbnVsbDtcbiAgICAgIGN1cnJlbnRQcmlvcml0eUxldmVsID0gY3VycmVudFRhc2sucHJpb3JpdHlMZXZlbDtcbiAgICAgIHZhciBkaWRVc2VyQ2FsbGJhY2tUaW1lb3V0ID0gY3VycmVudFRhc2suZXhwaXJhdGlvblRpbWUgPD0gY3VycmVudFRpbWU7XG4gICAgICBtYXJrVGFza1J1bihjdXJyZW50VGFzaywgY3VycmVudFRpbWUpO1xuICAgICAgdmFyIGNvbnRpbnVhdGlvbkNhbGxiYWNrID0gY2FsbGJhY2soZGlkVXNlckNhbGxiYWNrVGltZW91dCk7XG4gICAgICBjdXJyZW50VGltZSA9IGV4cG9ydHMudW5zdGFibGVfbm93KCk7XG5cbiAgICAgIGlmICh0eXBlb2YgY29udGludWF0aW9uQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY3VycmVudFRhc2suY2FsbGJhY2sgPSBjb250aW51YXRpb25DYWxsYmFjaztcbiAgICAgICAgbWFya1Rhc2tZaWVsZChjdXJyZW50VGFzaywgY3VycmVudFRpbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAge1xuICAgICAgICAgIG1hcmtUYXNrQ29tcGxldGVkKGN1cnJlbnRUYXNrLCBjdXJyZW50VGltZSk7XG4gICAgICAgICAgY3VycmVudFRhc2suaXNRdWV1ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJyZW50VGFzayA9PT0gcGVlayh0YXNrUXVldWUpKSB7XG4gICAgICAgICAgcG9wKHRhc2tRdWV1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYWR2YW5jZVRpbWVycyhjdXJyZW50VGltZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBvcCh0YXNrUXVldWUpO1xuICAgIH1cblxuICAgIGN1cnJlbnRUYXNrID0gcGVlayh0YXNrUXVldWUpO1xuICB9IC8vIFJldHVybiB3aGV0aGVyIHRoZXJlJ3MgYWRkaXRpb25hbCB3b3JrXG5cblxuICBpZiAoY3VycmVudFRhc2sgIT09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZmlyc3RUaW1lciA9IHBlZWsodGltZXJRdWV1ZSk7XG5cbiAgICBpZiAoZmlyc3RUaW1lciAhPT0gbnVsbCkge1xuICAgICAgcmVxdWVzdEhvc3RUaW1lb3V0KGhhbmRsZVRpbWVvdXQsIGZpcnN0VGltZXIuc3RhcnRUaW1lIC0gY3VycmVudFRpbWUpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1bnN0YWJsZV9ydW5XaXRoUHJpb3JpdHkocHJpb3JpdHlMZXZlbCwgZXZlbnRIYW5kbGVyKSB7XG4gIHN3aXRjaCAocHJpb3JpdHlMZXZlbCkge1xuICAgIGNhc2UgSW1tZWRpYXRlUHJpb3JpdHk6XG4gICAgY2FzZSBVc2VyQmxvY2tpbmdQcmlvcml0eTpcbiAgICBjYXNlIE5vcm1hbFByaW9yaXR5OlxuICAgIGNhc2UgTG93UHJpb3JpdHk6XG4gICAgY2FzZSBJZGxlUHJpb3JpdHk6XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBwcmlvcml0eUxldmVsID0gTm9ybWFsUHJpb3JpdHk7XG4gIH1cblxuICB2YXIgcHJldmlvdXNQcmlvcml0eUxldmVsID0gY3VycmVudFByaW9yaXR5TGV2ZWw7XG4gIGN1cnJlbnRQcmlvcml0eUxldmVsID0gcHJpb3JpdHlMZXZlbDtcblxuICB0cnkge1xuICAgIHJldHVybiBldmVudEhhbmRsZXIoKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBjdXJyZW50UHJpb3JpdHlMZXZlbCA9IHByZXZpb3VzUHJpb3JpdHlMZXZlbDtcbiAgfVxufVxuXG5mdW5jdGlvbiB1bnN0YWJsZV9uZXh0KGV2ZW50SGFuZGxlcikge1xuICB2YXIgcHJpb3JpdHlMZXZlbDtcblxuICBzd2l0Y2ggKGN1cnJlbnRQcmlvcml0eUxldmVsKSB7XG4gICAgY2FzZSBJbW1lZGlhdGVQcmlvcml0eTpcbiAgICBjYXNlIFVzZXJCbG9ja2luZ1ByaW9yaXR5OlxuICAgIGNhc2UgTm9ybWFsUHJpb3JpdHk6XG4gICAgICAvLyBTaGlmdCBkb3duIHRvIG5vcm1hbCBwcmlvcml0eVxuICAgICAgcHJpb3JpdHlMZXZlbCA9IE5vcm1hbFByaW9yaXR5O1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgLy8gQW55dGhpbmcgbG93ZXIgdGhhbiBub3JtYWwgcHJpb3JpdHkgc2hvdWxkIHJlbWFpbiBhdCB0aGUgY3VycmVudCBsZXZlbC5cbiAgICAgIHByaW9yaXR5TGV2ZWwgPSBjdXJyZW50UHJpb3JpdHlMZXZlbDtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgdmFyIHByZXZpb3VzUHJpb3JpdHlMZXZlbCA9IGN1cnJlbnRQcmlvcml0eUxldmVsO1xuICBjdXJyZW50UHJpb3JpdHlMZXZlbCA9IHByaW9yaXR5TGV2ZWw7XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gZXZlbnRIYW5kbGVyKCk7XG4gIH0gZmluYWxseSB7XG4gICAgY3VycmVudFByaW9yaXR5TGV2ZWwgPSBwcmV2aW91c1ByaW9yaXR5TGV2ZWw7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5zdGFibGVfd3JhcENhbGxiYWNrKGNhbGxiYWNrKSB7XG4gIHZhciBwYXJlbnRQcmlvcml0eUxldmVsID0gY3VycmVudFByaW9yaXR5TGV2ZWw7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gVGhpcyBpcyBhIGZvcmsgb2YgcnVuV2l0aFByaW9yaXR5LCBpbmxpbmVkIGZvciBwZXJmb3JtYW5jZS5cbiAgICB2YXIgcHJldmlvdXNQcmlvcml0eUxldmVsID0gY3VycmVudFByaW9yaXR5TGV2ZWw7XG4gICAgY3VycmVudFByaW9yaXR5TGV2ZWwgPSBwYXJlbnRQcmlvcml0eUxldmVsO1xuXG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBjdXJyZW50UHJpb3JpdHlMZXZlbCA9IHByZXZpb3VzUHJpb3JpdHlMZXZlbDtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRpbWVvdXRGb3JQcmlvcml0eUxldmVsKHByaW9yaXR5TGV2ZWwpIHtcbiAgc3dpdGNoIChwcmlvcml0eUxldmVsKSB7XG4gICAgY2FzZSBJbW1lZGlhdGVQcmlvcml0eTpcbiAgICAgIHJldHVybiBJTU1FRElBVEVfUFJJT1JJVFlfVElNRU9VVDtcblxuICAgIGNhc2UgVXNlckJsb2NraW5nUHJpb3JpdHk6XG4gICAgICByZXR1cm4gVVNFUl9CTE9DS0lOR19QUklPUklUWTtcblxuICAgIGNhc2UgSWRsZVByaW9yaXR5OlxuICAgICAgcmV0dXJuIElETEVfUFJJT1JJVFk7XG5cbiAgICBjYXNlIExvd1ByaW9yaXR5OlxuICAgICAgcmV0dXJuIExPV19QUklPUklUWV9USU1FT1VUO1xuXG4gICAgY2FzZSBOb3JtYWxQcmlvcml0eTpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIE5PUk1BTF9QUklPUklUWV9USU1FT1VUO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVuc3RhYmxlX3NjaGVkdWxlQ2FsbGJhY2socHJpb3JpdHlMZXZlbCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgdmFyIGN1cnJlbnRUaW1lID0gZXhwb3J0cy51bnN0YWJsZV9ub3coKTtcbiAgdmFyIHN0YXJ0VGltZTtcbiAgdmFyIHRpbWVvdXQ7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0JyAmJiBvcHRpb25zICE9PSBudWxsKSB7XG4gICAgdmFyIGRlbGF5ID0gb3B0aW9ucy5kZWxheTtcblxuICAgIGlmICh0eXBlb2YgZGVsYXkgPT09ICdudW1iZXInICYmIGRlbGF5ID4gMCkge1xuICAgICAgc3RhcnRUaW1lID0gY3VycmVudFRpbWUgKyBkZWxheTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhcnRUaW1lID0gY3VycmVudFRpbWU7XG4gICAgfVxuXG4gICAgdGltZW91dCA9IHR5cGVvZiBvcHRpb25zLnRpbWVvdXQgPT09ICdudW1iZXInID8gb3B0aW9ucy50aW1lb3V0IDogdGltZW91dEZvclByaW9yaXR5TGV2ZWwocHJpb3JpdHlMZXZlbCk7XG4gIH0gZWxzZSB7XG4gICAgdGltZW91dCA9IHRpbWVvdXRGb3JQcmlvcml0eUxldmVsKHByaW9yaXR5TGV2ZWwpO1xuICAgIHN0YXJ0VGltZSA9IGN1cnJlbnRUaW1lO1xuICB9XG5cbiAgdmFyIGV4cGlyYXRpb25UaW1lID0gc3RhcnRUaW1lICsgdGltZW91dDtcbiAgdmFyIG5ld1Rhc2sgPSB7XG4gICAgaWQ6IHRhc2tJZENvdW50ZXIrKyxcbiAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgcHJpb3JpdHlMZXZlbDogcHJpb3JpdHlMZXZlbCxcbiAgICBzdGFydFRpbWU6IHN0YXJ0VGltZSxcbiAgICBleHBpcmF0aW9uVGltZTogZXhwaXJhdGlvblRpbWUsXG4gICAgc29ydEluZGV4OiAtMVxuICB9O1xuXG4gIHtcbiAgICBuZXdUYXNrLmlzUXVldWVkID0gZmFsc2U7XG4gIH1cblxuICBpZiAoc3RhcnRUaW1lID4gY3VycmVudFRpbWUpIHtcbiAgICAvLyBUaGlzIGlzIGEgZGVsYXllZCB0YXNrLlxuICAgIG5ld1Rhc2suc29ydEluZGV4ID0gc3RhcnRUaW1lO1xuICAgIHB1c2godGltZXJRdWV1ZSwgbmV3VGFzayk7XG5cbiAgICBpZiAocGVlayh0YXNrUXVldWUpID09PSBudWxsICYmIG5ld1Rhc2sgPT09IHBlZWsodGltZXJRdWV1ZSkpIHtcbiAgICAgIC8vIEFsbCB0YXNrcyBhcmUgZGVsYXllZCwgYW5kIHRoaXMgaXMgdGhlIHRhc2sgd2l0aCB0aGUgZWFybGllc3QgZGVsYXkuXG4gICAgICBpZiAoaXNIb3N0VGltZW91dFNjaGVkdWxlZCkge1xuICAgICAgICAvLyBDYW5jZWwgYW4gZXhpc3RpbmcgdGltZW91dC5cbiAgICAgICAgY2FuY2VsSG9zdFRpbWVvdXQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlzSG9zdFRpbWVvdXRTY2hlZHVsZWQgPSB0cnVlO1xuICAgICAgfSAvLyBTY2hlZHVsZSBhIHRpbWVvdXQuXG5cblxuICAgICAgcmVxdWVzdEhvc3RUaW1lb3V0KGhhbmRsZVRpbWVvdXQsIHN0YXJ0VGltZSAtIGN1cnJlbnRUaW1lKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbmV3VGFzay5zb3J0SW5kZXggPSBleHBpcmF0aW9uVGltZTtcbiAgICBwdXNoKHRhc2tRdWV1ZSwgbmV3VGFzayk7XG5cbiAgICB7XG4gICAgICBtYXJrVGFza1N0YXJ0KG5ld1Rhc2ssIGN1cnJlbnRUaW1lKTtcbiAgICAgIG5ld1Rhc2suaXNRdWV1ZWQgPSB0cnVlO1xuICAgIH0gLy8gU2NoZWR1bGUgYSBob3N0IGNhbGxiYWNrLCBpZiBuZWVkZWQuIElmIHdlJ3JlIGFscmVhZHkgcGVyZm9ybWluZyB3b3JrLFxuICAgIC8vIHdhaXQgdW50aWwgdGhlIG5leHQgdGltZSB3ZSB5aWVsZC5cblxuXG4gICAgaWYgKCFpc0hvc3RDYWxsYmFja1NjaGVkdWxlZCAmJiAhaXNQZXJmb3JtaW5nV29yaykge1xuICAgICAgaXNIb3N0Q2FsbGJhY2tTY2hlZHVsZWQgPSB0cnVlO1xuICAgICAgcmVxdWVzdEhvc3RDYWxsYmFjayhmbHVzaFdvcmspO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdUYXNrO1xufVxuXG5mdW5jdGlvbiB1bnN0YWJsZV9wYXVzZUV4ZWN1dGlvbigpIHtcbn1cblxuZnVuY3Rpb24gdW5zdGFibGVfY29udGludWVFeGVjdXRpb24oKSB7XG5cbiAgaWYgKCFpc0hvc3RDYWxsYmFja1NjaGVkdWxlZCAmJiAhaXNQZXJmb3JtaW5nV29yaykge1xuICAgIGlzSG9zdENhbGxiYWNrU2NoZWR1bGVkID0gdHJ1ZTtcbiAgICByZXF1ZXN0SG9zdENhbGxiYWNrKGZsdXNoV29yayk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5zdGFibGVfZ2V0Rmlyc3RDYWxsYmFja05vZGUoKSB7XG4gIHJldHVybiBwZWVrKHRhc2tRdWV1ZSk7XG59XG5cbmZ1bmN0aW9uIHVuc3RhYmxlX2NhbmNlbENhbGxiYWNrKHRhc2spIHtcbiAge1xuICAgIGlmICh0YXNrLmlzUXVldWVkKSB7XG4gICAgICB2YXIgY3VycmVudFRpbWUgPSBleHBvcnRzLnVuc3RhYmxlX25vdygpO1xuICAgICAgbWFya1Rhc2tDYW5jZWxlZCh0YXNrLCBjdXJyZW50VGltZSk7XG4gICAgICB0YXNrLmlzUXVldWVkID0gZmFsc2U7XG4gICAgfVxuICB9IC8vIE51bGwgb3V0IHRoZSBjYWxsYmFjayB0byBpbmRpY2F0ZSB0aGUgdGFzayBoYXMgYmVlbiBjYW5jZWxlZC4gKENhbid0XG4gIC8vIHJlbW92ZSBmcm9tIHRoZSBxdWV1ZSBiZWNhdXNlIHlvdSBjYW4ndCByZW1vdmUgYXJiaXRyYXJ5IG5vZGVzIGZyb20gYW5cbiAgLy8gYXJyYXkgYmFzZWQgaGVhcCwgb25seSB0aGUgZmlyc3Qgb25lLilcblxuXG4gIHRhc2suY2FsbGJhY2sgPSBudWxsO1xufVxuXG5mdW5jdGlvbiB1bnN0YWJsZV9nZXRDdXJyZW50UHJpb3JpdHlMZXZlbCgpIHtcbiAgcmV0dXJuIGN1cnJlbnRQcmlvcml0eUxldmVsO1xufVxuXG5mdW5jdGlvbiB1bnN0YWJsZV9zaG91bGRZaWVsZCgpIHtcbiAgdmFyIGN1cnJlbnRUaW1lID0gZXhwb3J0cy51bnN0YWJsZV9ub3coKTtcbiAgYWR2YW5jZVRpbWVycyhjdXJyZW50VGltZSk7XG4gIHZhciBmaXJzdFRhc2sgPSBwZWVrKHRhc2tRdWV1ZSk7XG4gIHJldHVybiBmaXJzdFRhc2sgIT09IGN1cnJlbnRUYXNrICYmIGN1cnJlbnRUYXNrICE9PSBudWxsICYmIGZpcnN0VGFzayAhPT0gbnVsbCAmJiBmaXJzdFRhc2suY2FsbGJhY2sgIT09IG51bGwgJiYgZmlyc3RUYXNrLnN0YXJ0VGltZSA8PSBjdXJyZW50VGltZSAmJiBmaXJzdFRhc2suZXhwaXJhdGlvblRpbWUgPCBjdXJyZW50VGFzay5leHBpcmF0aW9uVGltZSB8fCBzaG91bGRZaWVsZFRvSG9zdCgpO1xufVxuXG52YXIgdW5zdGFibGVfcmVxdWVzdFBhaW50ID0gcmVxdWVzdFBhaW50O1xudmFyIHVuc3RhYmxlX1Byb2ZpbGluZyA9ICB7XG4gIHN0YXJ0TG9nZ2luZ1Byb2ZpbGluZ0V2ZW50czogc3RhcnRMb2dnaW5nUHJvZmlsaW5nRXZlbnRzLFxuICBzdG9wTG9nZ2luZ1Byb2ZpbGluZ0V2ZW50czogc3RvcExvZ2dpbmdQcm9maWxpbmdFdmVudHMsXG4gIHNoYXJlZFByb2ZpbGluZ0J1ZmZlcjogc2hhcmVkUHJvZmlsaW5nQnVmZmVyXG59IDtcblxuZXhwb3J0cy51bnN0YWJsZV9JZGxlUHJpb3JpdHkgPSBJZGxlUHJpb3JpdHk7XG5leHBvcnRzLnVuc3RhYmxlX0ltbWVkaWF0ZVByaW9yaXR5ID0gSW1tZWRpYXRlUHJpb3JpdHk7XG5leHBvcnRzLnVuc3RhYmxlX0xvd1ByaW9yaXR5ID0gTG93UHJpb3JpdHk7XG5leHBvcnRzLnVuc3RhYmxlX05vcm1hbFByaW9yaXR5ID0gTm9ybWFsUHJpb3JpdHk7XG5leHBvcnRzLnVuc3RhYmxlX1Byb2ZpbGluZyA9IHVuc3RhYmxlX1Byb2ZpbGluZztcbmV4cG9ydHMudW5zdGFibGVfVXNlckJsb2NraW5nUHJpb3JpdHkgPSBVc2VyQmxvY2tpbmdQcmlvcml0eTtcbmV4cG9ydHMudW5zdGFibGVfY2FuY2VsQ2FsbGJhY2sgPSB1bnN0YWJsZV9jYW5jZWxDYWxsYmFjaztcbmV4cG9ydHMudW5zdGFibGVfY29udGludWVFeGVjdXRpb24gPSB1bnN0YWJsZV9jb250aW51ZUV4ZWN1dGlvbjtcbmV4cG9ydHMudW5zdGFibGVfZ2V0Q3VycmVudFByaW9yaXR5TGV2ZWwgPSB1bnN0YWJsZV9nZXRDdXJyZW50UHJpb3JpdHlMZXZlbDtcbmV4cG9ydHMudW5zdGFibGVfZ2V0Rmlyc3RDYWxsYmFja05vZGUgPSB1bnN0YWJsZV9nZXRGaXJzdENhbGxiYWNrTm9kZTtcbmV4cG9ydHMudW5zdGFibGVfbmV4dCA9IHVuc3RhYmxlX25leHQ7XG5leHBvcnRzLnVuc3RhYmxlX3BhdXNlRXhlY3V0aW9uID0gdW5zdGFibGVfcGF1c2VFeGVjdXRpb247XG5leHBvcnRzLnVuc3RhYmxlX3JlcXVlc3RQYWludCA9IHVuc3RhYmxlX3JlcXVlc3RQYWludDtcbmV4cG9ydHMudW5zdGFibGVfcnVuV2l0aFByaW9yaXR5ID0gdW5zdGFibGVfcnVuV2l0aFByaW9yaXR5O1xuZXhwb3J0cy51bnN0YWJsZV9zY2hlZHVsZUNhbGxiYWNrID0gdW5zdGFibGVfc2NoZWR1bGVDYWxsYmFjaztcbmV4cG9ydHMudW5zdGFibGVfc2hvdWxkWWllbGQgPSB1bnN0YWJsZV9zaG91bGRZaWVsZDtcbmV4cG9ydHMudW5zdGFibGVfd3JhcENhbGxiYWNrID0gdW5zdGFibGVfd3JhcENhbGxiYWNrO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3NjaGVkdWxlci5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9zY2hlZHVsZXIuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImV4cG9ydCAqIGZyb20gJ3NjaGVkdWxlcic7XG5cbmltcG9ydCBfZGVmYXVsdCBmcm9tICdzY2hlZHVsZXInO1xuZXhwb3J0IGRlZmF1bHQgX2RlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIvcHJvamVjdC9vdXQifQ==