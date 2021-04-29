import { r as react } from './common/index-7cda8b13.js';
import { c as createCommonjsModule, g as getDefaultExportFromCjs } from './common/_commonjsHelpers-4f955397.js';
import { r as reactDom } from './common/index-916de6ed.js';
import { h as hooks } from './common/moment-7a40e797.js';

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$1.apply(this, arguments);
}

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _setPrototypeOf$1(o, p) {
  _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf$1(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf$1(subClass, superClass);
}

function _getPrototypeOf$1(o) {
  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf$1(o);
}

function _isNativeReflectConstruct$1() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _typeof$2 = /*@__PURE__*/getDefaultExportFromCjs(_typeof_1);

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof$2(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$1();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$1(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$1(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _typeof$1(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$1 = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof$1 = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof$1(obj);
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function omit(obj, fields) {
  var clone = _objectSpread$1({}, obj);

  if (Array.isArray(fields)) {
    fields.forEach(function (key) {
      delete clone[key];
    });
  }

  return clone;
}

function ownKeys$2(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$2(Object(source), true).forEach(function (key) {
        _defineProperty$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$2(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/**
 * Return if a node is a DOM node. Else will return by `findDOMNode`
 */

function findDOMNode(node) {
  if (node instanceof HTMLElement) {
    return node;
  }

  return reactDom.findDOMNode(node);
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element$1=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal$1=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element$1,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal$1,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs = createCommonjsModule(function (module) {

{
  module.exports = reactIs_production_min;
}
});

function toArray$3(children) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var ret = [];
  react.Children.forEach(children, function (child) {
    if ((child === undefined || child === null) && !option.keepEmpty) {
      return;
    }

    if (Array.isArray(child)) {
      ret = ret.concat(toArray$3(child));
    } else if (reactIs.isFragment(child) && child.props) {
      ret = ret.concat(toArray$3(child.props.children, option));
    } else {
      ret.push(child);
    }
  });
  return ret;
}

/* eslint-disable no-console */
var warned = {};
function warning$2(valid, message) {
}
function note(valid, message) {
}
function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning$2, valid, message);
}
function noteOnce(valid, message) {
  call(note, valid, message);
}
/* eslint-enable */

function fillRef(ref, node) {
  if (typeof ref === 'function') {
    ref(node);
  } else if (_typeof$1(ref) === 'object' && ref && 'current' in ref) {
    ref.current = node;
  }
}
/**
 * Merge refs into one ref function to support ref passing.
 */

function composeRef() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }

  return function (node) {
    refs.forEach(function (ref) {
      fillRef(ref, node);
    });
  };
}
function supportRef(nodeOrComponent) {
  var _type$prototype, _nodeOrComponent$prot;

  var type = reactIs.isMemo(nodeOrComponent) ? nodeOrComponent.type.type : nodeOrComponent.type; // Function component node

  if (typeof type === 'function' && !((_type$prototype = type.prototype) === null || _type$prototype === void 0 ? void 0 : _type$prototype.render)) {
    return false;
  } // Class component


  if (typeof nodeOrComponent === 'function' && !((_nodeOrComponent$prot = nodeOrComponent.prototype) === null || _nodeOrComponent$prot === void 0 ? void 0 : _nodeOrComponent$prot.render)) {
    return false;
  }

  return true;
}
/* eslint-enable */

/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

var IconContext = /*#__PURE__*/react.createContext({});

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

var HOOK_MARK = 'RC_FORM_INTERNAL_HOOKS'; // eslint-disable-next-line @typescript-eslint/no-explicit-any

var warningFunc = function warningFunc() {
  warningOnce(false, 'Can not find FormContext. Please make sure you wrap Field under Form.');
};

var Context = /*#__PURE__*/react.createContext({
  getFieldValue: warningFunc,
  getFieldsValue: warningFunc,
  getFieldError: warningFunc,
  getFieldsError: warningFunc,
  isFieldsTouched: warningFunc,
  isFieldTouched: warningFunc,
  isFieldValidating: warningFunc,
  isFieldsValidating: warningFunc,
  resetFields: warningFunc,
  setFields: warningFunc,
  setFieldsValue: warningFunc,
  validateFields: warningFunc,
  submit: warningFunc,
  getInternalHooks: function getInternalHooks() {
    warningFunc();
    return {
      dispatch: warningFunc,
      initEntityValue: warningFunc,
      registerField: warningFunc,
      useSubscribe: warningFunc,
      setInitialValues: warningFunc,
      setCallbacks: warningFunc,
      getFields: warningFunc,
      setValidateMessages: warningFunc,
      setPreserve: warningFunc
    };
  }
});

function toArray$2(value) {
  if (value === undefined || value === null) {
    return [];
  }

  return Array.isArray(value) ? value : [value];
}

var runtime_1 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  module.exports 
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
});

var regenerator = runtime_1;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/* SNOWPACK PROCESS POLYFILL (based on https://github.com/calvinmetcalf/node-process-es6) */
function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
var cachedSetTimeout = defaultSetTimout;
var cachedClearTimeout = defaultClearTimeout;
var globalContext;
if (typeof window !== 'undefined') {
    globalContext = window;
} else if (typeof self !== 'undefined') {
    globalContext = self;
} else {
    globalContext = {};
}
if (typeof globalContext.setTimeout === 'function') {
    cachedSetTimeout = setTimeout;
}
if (typeof globalContext.clearTimeout === 'function') {
    cachedClearTimeout = clearTimeout;
}

function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
function nextTick(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
}
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
var title = 'browser';
var platform = 'browser';
var browser = true;
var argv = [];
var version = ''; // empty string to avoid regexp issues
var versions = {};
var release = {};
var config = {};

function noop$1() {}

var on = noop$1;
var addListener = noop$1;
var once = noop$1;
var off = noop$1;
var removeListener = noop$1;
var removeAllListeners = noop$1;
var emit = noop$1;

function binding(name) {
    throw new Error('process.binding is not supported');
}

function cwd () { return '/' }
function chdir (dir) {
    throw new Error('process.chdir is not supported');
}function umask() { return 0; }

// from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
var performance = globalContext.performance || {};
var performanceNow =
  performance.now        ||
  performance.mozNow     ||
  performance.msNow      ||
  performance.oNow       ||
  performance.webkitNow  ||
  function(){ return (new Date()).getTime() };

// generate timestamp or delta
// see http://nodejs.org/api/process.html#process_process_hrtime
function hrtime(previousTimestamp){
  var clocktime = performanceNow.call(performance)*1e-3;
  var seconds = Math.floor(clocktime);
  var nanoseconds = Math.floor((clocktime%1)*1e9);
  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0];
    nanoseconds = nanoseconds - previousTimestamp[1];
    if (nanoseconds<0) {
      seconds--;
      nanoseconds += 1e9;
    }
  }
  return [seconds,nanoseconds]
}

var startTime = new Date();
function uptime() {
  var currentTime = new Date();
  var dif = currentTime - startTime;
  return dif / 1000;
}

var process = {
  nextTick: nextTick,
  title: title,
  browser: browser,
  env: {"NODE_ENV":"production"},
  argv: argv,
  version: version,
  versions: versions,
  on: on,
  addListener: addListener,
  once: once,
  off: off,
  removeListener: removeListener,
  removeAllListeners: removeAllListeners,
  emit: emit,
  binding: binding,
  cwd: cwd,
  chdir: chdir,
  umask: umask,
  hrtime: hrtime,
  platform: platform,
  release: release,
  config: config,
  uptime: uptime
};

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

/* eslint no-console:0 */
var formatRegExp = /%[sdj%]/g;
var warning$1 = function warning() {}; // don't print warning message when in production env or node runtime

if (typeof process !== 'undefined' && process.env && "production" !== 'production' && typeof window !== 'undefined' && typeof document !== 'undefined') {
  warning$1 = function warning(type, errors) {
    if (typeof console !== 'undefined' && console.warn) {
      if (errors.every(function (e) {
        return typeof e === 'string';
      })) {
        console.warn(type, errors);
      }
    }
  };
}

function convertFieldsError(errors) {
  if (!errors || !errors.length) return null;
  var fields = {};
  errors.forEach(function (error) {
    var field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}
function format() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var i = 1;
  var f = args[0];
  var len = args.length;

  if (typeof f === 'function') {
    return f.apply(null, args.slice(1));
  }

  if (typeof f === 'string') {
    var str = String(f).replace(formatRegExp, function (x) {
      if (x === '%%') {
        return '%';
      }

      if (i >= len) {
        return x;
      }

      switch (x) {
        case '%s':
          return String(args[i++]);

        case '%d':
          return Number(args[i++]);

        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }

          break;

        default:
          return x;
      }
    });
    return str;
  }

  return f;
}

function isNativeStringType(type) {
  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'date' || type === 'pattern';
}

function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }

  if (type === 'array' && Array.isArray(value) && !value.length) {
    return true;
  }

  if (isNativeStringType(type) && typeof value === 'string' && !value) {
    return true;
  }

  return false;
}

function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;

  function count(errors) {
    results.push.apply(results, errors);
    total++;

    if (total === arrLength) {
      callback(results);
    }
  }

  arr.forEach(function (a) {
    func(a, count);
  });
}

function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;

  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }

    var original = index;
    index = index + 1;

    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }

  next([]);
}

function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function (k) {
    ret.push.apply(ret, objArr[k]);
  });
  return ret;
}

var AsyncValidationError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(AsyncValidationError, _Error);

  function AsyncValidationError(errors, fields) {
    var _this;

    _this = _Error.call(this, 'Async Validation Error') || this;
    _this.errors = errors;
    _this.fields = fields;
    return _this;
  }

  return AsyncValidationError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
function asyncMap(objArr, option, func, callback) {
  if (option.first) {
    var _pending = new Promise(function (resolve, reject) {
      var next = function next(errors) {
        callback(errors);
        return errors.length ? reject(new AsyncValidationError(errors, convertFieldsError(errors))) : resolve();
      };

      var flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func, next);
    });

    _pending["catch"](function (e) {
      return e;
    });

    return _pending;
  }

  var firstFields = option.firstFields || [];

  if (firstFields === true) {
    firstFields = Object.keys(objArr);
  }

  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new Promise(function (resolve, reject) {
    var next = function next(errors) {
      results.push.apply(results, errors);
      total++;

      if (total === objArrLength) {
        callback(results);
        return results.length ? reject(new AsyncValidationError(results, convertFieldsError(results))) : resolve();
      }
    };

    if (!objArrKeys.length) {
      callback(results);
      resolve();
    }

    objArrKeys.forEach(function (key) {
      var arr = objArr[key];

      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending["catch"](function (e) {
    return e;
  });
  return pending;
}
function complementError(rule) {
  return function (oe) {
    if (oe && oe.message) {
      oe.field = oe.field || rule.fullField;
      return oe;
    }

    return {
      message: typeof oe === 'function' ? oe() : oe,
      field: oe.field || rule.fullField
    };
  };
}
function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];

        if (typeof value === 'object' && typeof target[s] === 'object') {
          target[s] = _extends(_extends({}, target[s]), value);
        } else {
          target[s] = value;
        }
      }
    }
  }

  return target;
}

/**
 *  Rule for validating required fields.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function required(rule, value, source, errors, options, type) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type || rule.type))) {
    errors.push(format(options.messages.required, rule.fullField));
  }
}

/**
 *  Rule for validating whitespace.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function whitespace(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === '') {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
}

/* eslint max-len:0 */

var pattern = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", 'i'),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  "float": function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }

    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function' && !isNaN(value.getTime());
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }

    return typeof value === 'number';
  },
  object: function object(value) {
    return typeof value === 'object' && !types.array(value);
  },
  method: function method(value) {
    return typeof value === 'function';
  },
  email: function email(value) {
    return typeof value === 'string' && !!value.match(pattern.email) && value.length < 255;
  },
  url: function url(value) {
    return typeof value === 'string' && !!value.match(pattern.url);
  },
  hex: function hex(value) {
    return typeof value === 'string' && !!value.match(pattern.hex);
  }
};
/**
 *  Rule for validating the type of a value.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function type(rule, value, source, errors, options) {
  if (rule.required && value === undefined) {
    required(rule, value, source, errors, options);
    return;
  }

  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
  var ruleType = rule.type;

  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    } // straight typeof check

  } else if (ruleType && typeof value !== rule.type) {
    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
}

/**
 *  Rule for validating minimum and maximum allowed values.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function range(rule, value, source, errors, options) {
  var len = typeof rule.len === 'number';
  var min = typeof rule.min === 'number';
  var max = typeof rule.max === 'number'; // 正则匹配码点范围从U+010000一直到U+10FFFF的文字（补充平面Supplementary Plane）

  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === 'number';
  var str = typeof value === 'string';
  var arr = Array.isArray(value);

  if (num) {
    key = 'number';
  } else if (str) {
    key = 'string';
  } else if (arr) {
    key = 'array';
  } // if the value is not of a supported type for range validation
  // the validation rule rule should use the
  // type property to also test for a particular type


  if (!key) {
    return false;
  }

  if (arr) {
    val = value.length;
  }

  if (str) {
    // 处理码点大于U+010000的文字length属性不准确的bug，如"𠮷𠮷𠮷".lenght !== 3
    val = value.replace(spRegexp, '_').length;
  }

  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
}

var ENUM = 'enum';
/**
 *  Rule for validating a value exists in an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function enumerable(rule, value, source, errors, options) {
  rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];

  if (rule[ENUM].indexOf(value) === -1) {
    errors.push(format(options.messages[ENUM], rule.fullField, rule[ENUM].join(', ')));
  }
}

/**
 *  Rule for validating a regular expression pattern.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function pattern$1(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      // if a RegExp instance is passed, reset `lastIndex` in case its `global`
      // flag is accidentally set to `true`, which in a validation scenario
      // is not necessary and the result might be misleading
      rule.pattern.lastIndex = 0;

      if (!rule.pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === 'string') {
      var _pattern = new RegExp(rule.pattern);

      if (!_pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
}

var rules = {
  required: required,
  whitespace: whitespace,
  type: type,
  range: range,
  "enum": enumerable,
  pattern: pattern$1
};

/**
 *  Performs validation for string types.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function string(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, 'string');

    if (!isEmptyValue(value, 'string')) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
      rules.pattern(rule, value, source, errors, options);

      if (rule.whitespace === true) {
        rules.whitespace(rule, value, source, errors, options);
      }
    }
  }

  callback(errors);
}

/**
 *  Validates a function.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function method(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
 *  Validates a number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function number(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (value === '') {
      value = undefined;
    }

    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
 *  Validates a boolean.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function _boolean(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
 *  Validates the regular expression type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function regexp(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value)) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
 *  Validates a number is an integer.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function integer(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
 *  Validates a number is a floating point number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function floatFn(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
 *  Validates an array.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function array(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if ((value === undefined || value === null) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, 'array');

    if (value !== undefined && value !== null) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
 *  Validates an object.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function object(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

var ENUM$1 = 'enum';
/**
 *  Validates an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function enumerable$1(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules[ENUM$1](rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
 *  Validates a regular expression pattern.
 *
 *  Performs validation when a rule only contains
 *  a pattern property but is not declared as a string type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function pattern$2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value, 'string')) {
      rules.pattern(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

function date(rule, value, callback, source, options) {
  // console.log('integer rule called %j', rule);
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field); // console.log('validate on %s value', value);

  if (validate) {
    if (isEmptyValue(value, 'date') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value, 'date')) {
      var dateObject;

      if (value instanceof Date) {
        dateObject = value;
      } else {
        dateObject = new Date(value);
      }

      rules.type(rule, dateObject, source, errors, options);

      if (dateObject) {
        rules.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }

  callback(errors);
}

function required$1(rule, value, callback, source, options) {
  var errors = [];
  var type = Array.isArray(value) ? 'array' : typeof value;
  rules.required(rule, value, source, errors, options, type);
  callback(errors);
}

function type$1(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, ruleType);

    if (!isEmptyValue(value, ruleType)) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
 *  Performs validation for any type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function any(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);
  }

  callback(errors);
}

var validators = {
  string: string,
  method: method,
  number: number,
  "boolean": _boolean,
  regexp: regexp,
  integer: integer,
  "float": floatFn,
  array: array,
  object: object,
  "enum": enumerable$1,
  pattern: pattern$2,
  date: date,
  url: type$1,
  hex: type$1,
  email: type$1,
  required: required$1,
  any: any
};

function newMessages() {
  return {
    "default": 'Validation error on field %s',
    required: '%s is required',
    "enum": '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid'
    },
    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      "boolean": '%s is not a %s',
      integer: '%s is not an %s',
      "float": '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s'
    },
    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters'
    },
    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s'
    },
    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length'
    },
    pattern: {
      mismatch: '%s value %s does not match pattern %s'
    },
    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}
var messages = newMessages();

/**
 *  Encapsulates a validation schema.
 *
 *  @param descriptor An object declaring validation rules
 *  for this schema.
 */

function Schema(descriptor) {
  this.rules = null;
  this._messages = messages;
  this.define(descriptor);
}

Schema.prototype = {
  messages: function messages(_messages) {
    if (_messages) {
      this._messages = deepMerge(newMessages(), _messages);
    }

    return this._messages;
  },
  define: function define(rules) {
    if (!rules) {
      throw new Error('Cannot configure a schema with no rules');
    }

    if (typeof rules !== 'object' || Array.isArray(rules)) {
      throw new Error('Rules must be an object');
    }

    this.rules = {};
    var z;
    var item;

    for (z in rules) {
      if (rules.hasOwnProperty(z)) {
        item = rules[z];
        this.rules[z] = Array.isArray(item) ? item : [item];
      }
    }
  },
  validate: function validate(source_, o, oc) {
    var _this = this;

    if (o === void 0) {
      o = {};
    }

    if (oc === void 0) {
      oc = function oc() {};
    }

    var source = source_;
    var options = o;
    var callback = oc;

    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback();
      }

      return Promise.resolve();
    }

    function complete(results) {
      var i;
      var errors = [];
      var fields = {};

      function add(e) {
        if (Array.isArray(e)) {
          var _errors;

          errors = (_errors = errors).concat.apply(_errors, e);
        } else {
          errors.push(e);
        }
      }

      for (i = 0; i < results.length; i++) {
        add(results[i]);
      }

      if (!errors.length) {
        errors = null;
        fields = null;
      } else {
        fields = convertFieldsError(errors);
      }

      callback(errors, fields);
    }

    if (options.messages) {
      var messages$1 = this.messages();

      if (messages$1 === messages) {
        messages$1 = newMessages();
      }

      deepMerge(messages$1, options.messages);
      options.messages = messages$1;
    } else {
      options.messages = this.messages();
    }

    var arr;
    var value;
    var series = {};
    var keys = options.keys || Object.keys(this.rules);
    keys.forEach(function (z) {
      arr = _this.rules[z];
      value = source[z];
      arr.forEach(function (r) {
        var rule = r;

        if (typeof rule.transform === 'function') {
          if (source === source_) {
            source = _extends({}, source);
          }

          value = source[z] = rule.transform(value);
        }

        if (typeof rule === 'function') {
          rule = {
            validator: rule
          };
        } else {
          rule = _extends({}, rule);
        }

        rule.validator = _this.getValidationMethod(rule);
        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this.getType(rule);

        if (!rule.validator) {
          return;
        }

        series[z] = series[z] || [];
        series[z].push({
          rule: rule,
          value: value,
          source: source,
          field: z
        });
      });
    });
    var errorFields = {};
    return asyncMap(series, options, function (data, doIt) {
      var rule = data.rule;
      var deep = (rule.type === 'object' || rule.type === 'array') && (typeof rule.fields === 'object' || typeof rule.defaultField === 'object');
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;

      function addFullfield(key, schema) {
        return _extends(_extends({}, schema), {}, {
          fullField: rule.fullField + "." + key
        });
      }

      function cb(e) {
        if (e === void 0) {
          e = [];
        }

        var errors = e;

        if (!Array.isArray(errors)) {
          errors = [errors];
        }

        if (!options.suppressWarning && errors.length) {
          Schema.warning('async-validator:', errors);
        }

        if (errors.length && rule.message !== undefined) {
          errors = [].concat(rule.message);
        }

        errors = errors.map(complementError(rule));

        if (options.first && errors.length) {
          errorFields[rule.field] = 1;
          return doIt(errors);
        }

        if (!deep) {
          doIt(errors);
        } else {
          // if rule is required but the target object
          // does not exist fail at the rule level and don't
          // go deeper
          if (rule.required && !data.value) {
            if (rule.message !== undefined) {
              errors = [].concat(rule.message).map(complementError(rule));
            } else if (options.error) {
              errors = [options.error(rule, format(options.messages.required, rule.field))];
            }

            return doIt(errors);
          }

          var fieldsSchema = {};

          if (rule.defaultField) {
            for (var k in data.value) {
              if (data.value.hasOwnProperty(k)) {
                fieldsSchema[k] = rule.defaultField;
              }
            }
          }

          fieldsSchema = _extends(_extends({}, fieldsSchema), data.rule.fields);

          for (var f in fieldsSchema) {
            if (fieldsSchema.hasOwnProperty(f)) {
              var fieldSchema = Array.isArray(fieldsSchema[f]) ? fieldsSchema[f] : [fieldsSchema[f]];
              fieldsSchema[f] = fieldSchema.map(addFullfield.bind(null, f));
            }
          }

          var schema = new Schema(fieldsSchema);
          schema.messages(options.messages);

          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }

          schema.validate(data.value, data.rule.options || options, function (errs) {
            var finalErrors = [];

            if (errors && errors.length) {
              finalErrors.push.apply(finalErrors, errors);
            }

            if (errs && errs.length) {
              finalErrors.push.apply(finalErrors, errs);
            }

            doIt(finalErrors.length ? finalErrors : null);
          });
        }
      }

      var res;

      if (rule.asyncValidator) {
        res = rule.asyncValidator(rule, data.value, cb, data.source, options);
      } else if (rule.validator) {
        res = rule.validator(rule, data.value, cb, data.source, options);

        if (res === true) {
          cb();
        } else if (res === false) {
          cb(rule.message || rule.field + " fails");
        } else if (res instanceof Array) {
          cb(res);
        } else if (res instanceof Error) {
          cb(res.message);
        }
      }

      if (res && res.then) {
        res.then(function () {
          return cb();
        }, function (e) {
          return cb(e);
        });
      }
    }, function (results) {
      complete(results);
    });
  },
  getType: function getType(rule) {
    if (rule.type === undefined && rule.pattern instanceof RegExp) {
      rule.type = 'pattern';
    }

    if (typeof rule.validator !== 'function' && rule.type && !validators.hasOwnProperty(rule.type)) {
      throw new Error(format('Unknown rule type %s', rule.type));
    }

    return rule.type || 'string';
  },
  getValidationMethod: function getValidationMethod(rule) {
    if (typeof rule.validator === 'function') {
      return rule.validator;
    }

    var keys = Object.keys(rule);
    var messageIndex = keys.indexOf('message');

    if (messageIndex !== -1) {
      keys.splice(messageIndex, 1);
    }

    if (keys.length === 1 && keys[0] === 'required') {
      return validators.required;
    }

    return validators[this.getType(rule)] || false;
  }
};

Schema.register = function register(type, validator) {
  if (typeof validator !== 'function') {
    throw new Error('Cannot register a validator by type, validator is not a function');
  }

  validators[type] = validator;
};

Schema.warning = warning$1;
Schema.messages = messages;
Schema.validators = validators;

function get(entity, path) {
  var current = entity;

  for (var i = 0; i < path.length; i += 1) {
    if (current === null || current === undefined) {
      return undefined;
    }

    current = current[path[i]];
  }

  return current;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toArray(arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
}

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function internalSet(entity, paths, value, removeIfUndefined) {
  if (!paths.length) {
    return value;
  }

  var _paths = _toArray(paths),
      path = _paths[0],
      restPath = _paths.slice(1);

  var clone;

  if (!entity && typeof path === 'number') {
    clone = [];
  } else if (Array.isArray(entity)) {
    clone = _toConsumableArray(entity);
  } else {
    clone = _objectSpread({}, entity);
  } // Delete prop if `removeIfUndefined` and value is undefined


  if (removeIfUndefined && value === undefined && restPath.length === 1) {
    delete clone[path][restPath[0]];
  } else {
    clone[path] = internalSet(clone[path], restPath, value, removeIfUndefined);
  }

  return clone;
}

function set(entity, paths, value) {
  var removeIfUndefined = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  // Do nothing if `removeIfUndefined` and parent object not exist
  if (paths.length && removeIfUndefined && value === undefined && !get(entity, paths.slice(0, -1))) {
    return entity;
  }

  return internalSet(entity, paths, value, removeIfUndefined);
}

/**
 * Convert name to internal supported format.
 * This function should keep since we still thinking if need support like `a.b.c` format.
 * 'a' => ['a']
 * 123 => [123]
 * ['a', 123] => ['a', 123]
 */

function getNamePath(path) {
  return toArray$2(path);
}
function getValue$2(store, namePath) {
  var value = get(store, namePath);
  return value;
}
function setValue(store, namePath, value) {
  var removeIfUndefined = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var newStore = set(store, namePath, value, removeIfUndefined);
  return newStore;
}
function cloneByNamePathList(store, namePathList) {
  var newStore = {};
  namePathList.forEach(function (namePath) {
    var value = getValue$2(store, namePath);
    newStore = setValue(newStore, namePath, value);
  });
  return newStore;
}
function containsNamePath(namePathList, namePath) {
  return namePathList && namePathList.some(function (path) {
    return matchNamePath(path, namePath);
  });
}

function isObject(obj) {
  return _typeof$1(obj) === 'object' && obj !== null && Object.getPrototypeOf(obj) === Object.prototype;
}
/**
 * Copy values into store and return a new values object
 * ({ a: 1, b: { c: 2 } }, { a: 4, b: { d: 5 } }) => { a: 4, b: { c: 2, d: 5 } }
 */


function internalSetValues(store, values) {
  var newStore = Array.isArray(store) ? _toConsumableArray(store) : _objectSpread2$1({}, store);

  if (!values) {
    return newStore;
  }

  Object.keys(values).forEach(function (key) {
    var prevValue = newStore[key];
    var value = values[key]; // If both are object (but target is not array), we use recursion to set deep value

    var recursive = isObject(prevValue) && isObject(value);
    newStore[key] = recursive ? internalSetValues(prevValue, value || {}) : value;
  });
  return newStore;
}

function setValues(store) {
  for (var _len = arguments.length, restValues = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    restValues[_key - 1] = arguments[_key];
  }

  return restValues.reduce(function (current, newStore) {
    return internalSetValues(current, newStore);
  }, store);
}
function matchNamePath(namePath, changedNamePath) {
  if (!namePath || !changedNamePath || namePath.length !== changedNamePath.length) {
    return false;
  }

  return namePath.every(function (nameUnit, i) {
    return changedNamePath[i] === nameUnit;
  });
}
function isSimilar(source, target) {
  if (source === target) {
    return true;
  }

  if (!source && target || source && !target) {
    return false;
  }

  if (!source || !target || _typeof$1(source) !== 'object' || _typeof$1(target) !== 'object') {
    return false;
  }

  var sourceKeys = Object.keys(source);
  var targetKeys = Object.keys(target);
  var keys = new Set([].concat(_toConsumableArray(sourceKeys), _toConsumableArray(targetKeys)));
  return _toConsumableArray(keys).every(function (key) {
    var sourceValue = source[key];
    var targetValue = target[key];

    if (typeof sourceValue === 'function' && typeof targetValue === 'function') {
      return true;
    }

    return sourceValue === targetValue;
  });
}
function defaultGetValueFromEvent(valuePropName) {
  var event = arguments.length <= 1 ? undefined : arguments[1];

  if (event && event.target && valuePropName in event.target) {
    return event.target[valuePropName];
  }

  return event;
}
/**
 * Moves an array item from one position in an array to another.
 *
 * Note: This is a pure function so a new array will be returned, instead
 * of altering the array argument.
 *
 * @param array         Array in which to move an item.         (required)
 * @param moveIndex     The index of the item to move.          (required)
 * @param toIndex       The index to move item at moveIndex to. (required)
 */

function move(array, moveIndex, toIndex) {
  var length = array.length;

  if (moveIndex < 0 || moveIndex >= length || toIndex < 0 || toIndex >= length) {
    return array;
  }

  var item = array[moveIndex];
  var diff = moveIndex - toIndex;

  if (diff > 0) {
    // move left
    return [].concat(_toConsumableArray(array.slice(0, toIndex)), [item], _toConsumableArray(array.slice(toIndex, moveIndex)), _toConsumableArray(array.slice(moveIndex + 1, length)));
  }

  if (diff < 0) {
    // move right
    return [].concat(_toConsumableArray(array.slice(0, moveIndex)), _toConsumableArray(array.slice(moveIndex + 1, toIndex + 1)), [item], _toConsumableArray(array.slice(toIndex + 1, length)));
  }

  return array;
}

var typeTemplate$1 = "'${name}' is not a valid ${type}";
var defaultValidateMessages = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: typeTemplate$1,
    method: typeTemplate$1,
    array: typeTemplate$1,
    object: typeTemplate$1,
    number: typeTemplate$1,
    date: typeTemplate$1,
    boolean: typeTemplate$1,
    integer: typeTemplate$1,
    float: typeTemplate$1,
    regexp: typeTemplate$1,
    email: typeTemplate$1,
    url: typeTemplate$1,
    hex: typeTemplate$1
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
};

var AsyncValidator = Schema;
/**
 * Replace with template.
 *   `I'm ${name}` + { name: 'bamboo' } = I'm bamboo
 */

function replaceMessage(template, kv) {
  return template.replace(/\$\{\w+\}/g, function (str) {
    var key = str.slice(2, -1);
    return kv[key];
  });
}
/**
 * We use `async-validator` to validate rules. So have to hot replace the message with validator.
 * { required: '${name} is required' } => { required: () => 'field is required' }
 */


function convertMessages(messages, name, rule, messageVariables) {
  var kv = _objectSpread2$1(_objectSpread2$1({}, rule), {}, {
    name: name,
    enum: (rule.enum || []).join(', ')
  });

  var replaceFunc = function replaceFunc(template, additionalKV) {
    return function () {
      return replaceMessage(template, _objectSpread2$1(_objectSpread2$1({}, kv), additionalKV));
    };
  };
  /* eslint-disable no-param-reassign */


  function fillTemplate(source) {
    var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Object.keys(source).forEach(function (ruleName) {
      var value = source[ruleName];

      if (typeof value === 'string') {
        target[ruleName] = replaceFunc(value, messageVariables);
      } else if (value && _typeof$1(value) === 'object') {
        target[ruleName] = {};
        fillTemplate(value, target[ruleName]);
      } else {
        target[ruleName] = value;
      }
    });
    return target;
  }
  /* eslint-enable */


  return fillTemplate(setValues({}, defaultValidateMessages, messages));
}

function validateRule(_x, _x2, _x3, _x4, _x5) {
  return _validateRule.apply(this, arguments);
}
/**
 * We use `async-validator` to validate the value.
 * But only check one value in a time to avoid namePath validate issue.
 */


function _validateRule() {
  _validateRule = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2(name, value, rule, options, messageVariables) {
    var cloneRule, subRuleField, validator, messages, result, subResults;
    return regenerator.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            cloneRule = _objectSpread2$1({}, rule); // We should special handle array validate

            subRuleField = null;

            if (cloneRule && cloneRule.type === 'array' && cloneRule.defaultField) {
              subRuleField = cloneRule.defaultField;
              delete cloneRule.defaultField;
            }

            validator = new AsyncValidator(_defineProperty$1({}, name, [cloneRule]));
            messages = convertMessages(options.validateMessages, name, cloneRule, messageVariables);
            validator.messages(messages);
            result = [];
            _context2.prev = 7;
            _context2.next = 10;
            return Promise.resolve(validator.validate(_defineProperty$1({}, name, value), _objectSpread2$1({}, options)));

          case 10:
            _context2.next = 15;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](7);

            if (_context2.t0.errors) {
              result = _context2.t0.errors.map(function (_ref2, index) {
                var message = _ref2.message;
                return (// Wrap ReactNode with `key`

                  /*#__PURE__*/
                  react.isValidElement(message) ? /*#__PURE__*/react.cloneElement(message, {
                    key: "error_".concat(index)
                  }) : message
                );
              });
            } else {
              console.error(_context2.t0);
              result = [messages.default()];
            }

          case 15:
            if (!(!result.length && subRuleField)) {
              _context2.next = 20;
              break;
            }

            _context2.next = 18;
            return Promise.all(value.map(function (subValue, i) {
              return validateRule("".concat(name, ".").concat(i), subValue, subRuleField, options, messageVariables);
            }));

          case 18:
            subResults = _context2.sent;
            return _context2.abrupt("return", subResults.reduce(function (prev, errors) {
              return [].concat(_toConsumableArray(prev), _toConsumableArray(errors));
            }, []));

          case 20:
            return _context2.abrupt("return", result);

          case 21:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[7, 12]]);
  }));
  return _validateRule.apply(this, arguments);
}

function validateRules(namePath, value, rules, options, validateFirst, messageVariables) {
  var name = namePath.join('.'); // Fill rule with context

  var filledRules = rules.map(function (currentRule) {
    var originValidatorFunc = currentRule.validator;

    if (!originValidatorFunc) {
      return currentRule;
    }

    return _objectSpread2$1(_objectSpread2$1({}, currentRule), {}, {
      validator: function validator(rule, val, callback) {
        var hasPromise = false; // Wrap callback only accept when promise not provided

        var wrappedCallback = function wrappedCallback() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          // Wait a tick to make sure return type is a promise
          Promise.resolve().then(function () {
            warningOnce(!hasPromise, 'Your validator function has already return a promise. `callback` will be ignored.');

            if (!hasPromise) {
              callback.apply(void 0, args);
            }
          });
        }; // Get promise


        var promise = originValidatorFunc(rule, val, wrappedCallback);
        hasPromise = promise && typeof promise.then === 'function' && typeof promise.catch === 'function';
        /**
         * 1. Use promise as the first priority.
         * 2. If promise not exist, use callback with warning instead
         */

        warningOnce(hasPromise, '`callback` is deprecated. Please return a promise instead.');

        if (hasPromise) {
          promise.then(function () {
            callback();
          }).catch(function (err) {
            callback(err || ' ');
          });
        }
      }
    });
  });
  var summaryPromise;

  if (validateFirst === true) {
    // >>>>> Validate by serialization
    summaryPromise = new Promise( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(resolve, reject) {
        var i, errors;
        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                i = 0;

              case 1:
                if (!(i < filledRules.length)) {
                  _context.next = 11;
                  break;
                }

                _context.next = 4;
                return validateRule(name, value, filledRules[i], options, messageVariables);

              case 4:
                errors = _context.sent;

                if (!errors.length) {
                  _context.next = 8;
                  break;
                }

                reject(errors);
                return _context.abrupt("return");

              case 8:
                i += 1;
                _context.next = 1;
                break;

              case 11:
                /* eslint-enable */
                resolve([]);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x6, _x7) {
        return _ref.apply(this, arguments);
      };
    }());
  } else {
    // >>>>> Validate by parallel
    var rulePromises = filledRules.map(function (rule) {
      return validateRule(name, value, rule, options, messageVariables);
    });
    summaryPromise = (validateFirst ? finishOnFirstFailed(rulePromises) : finishOnAllFailed(rulePromises)).then(function (errors) {
      if (!errors.length) {
        return [];
      }

      return Promise.reject(errors);
    });
  } // Internal catch error to avoid console error log.


  summaryPromise.catch(function (e) {
    return e;
  });
  return summaryPromise;
}

function finishOnAllFailed(_x8) {
  return _finishOnAllFailed.apply(this, arguments);
}

function _finishOnAllFailed() {
  _finishOnAllFailed = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee3(rulePromises) {
    return regenerator.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", Promise.all(rulePromises).then(function (errorsList) {
              var _ref3;

              var errors = (_ref3 = []).concat.apply(_ref3, _toConsumableArray(errorsList));

              return errors;
            }));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _finishOnAllFailed.apply(this, arguments);
}

function finishOnFirstFailed(_x9) {
  return _finishOnFirstFailed.apply(this, arguments);
}

function _finishOnFirstFailed() {
  _finishOnFirstFailed = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee4(rulePromises) {
    var count;
    return regenerator.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            count = 0;
            return _context4.abrupt("return", new Promise(function (resolve) {
              rulePromises.forEach(function (promise) {
                promise.then(function (errors) {
                  if (errors.length) {
                    resolve(errors);
                  }

                  count += 1;

                  if (count === rulePromises.length) {
                    resolve([]);
                  }
                });
              });
            }));

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _finishOnFirstFailed.apply(this, arguments);
}

function requireUpdate(shouldUpdate, prev, next, prevValue, nextValue, info) {
  if (typeof shouldUpdate === 'function') {
    return shouldUpdate(prev, next, 'source' in info ? {
      source: info.source
    } : {});
  }

  return prevValue !== nextValue;
} // We use Class instead of Hooks here since it will cost much code by using Hooks.


var Field = /*#__PURE__*/function (_React$Component) {
  _inherits(Field, _React$Component);

  var _super = _createSuper(Field);

  // ============================== Subscriptions ==============================
  function Field(props) {
    var _this;

    _classCallCheck(this, Field);

    _this = _super.call(this, props);
    _this.state = {
      resetCount: 0
    };
    _this.cancelRegisterFunc = null;
    _this.mounted = false;
    /**
     * Follow state should not management in State since it will async update by React.
     * This makes first render of form can not get correct state value.
     */

    _this.touched = false;
    /** Mark when touched & validated. Currently only used for `dependencies` */

    _this.dirty = false;
    _this.validatePromise = null;
    _this.errors = [];

    _this.cancelRegister = function () {
      var _this$props = _this.props,
          preserve = _this$props.preserve,
          isListField = _this$props.isListField,
          name = _this$props.name;

      if (_this.cancelRegisterFunc) {
        _this.cancelRegisterFunc(isListField, preserve, getNamePath(name));
      }

      _this.cancelRegisterFunc = null;
    }; // ================================== Utils ==================================


    _this.getNamePath = function () {
      var _this$props2 = _this.props,
          name = _this$props2.name,
          fieldContext = _this$props2.fieldContext;
      var _fieldContext$prefixN = fieldContext.prefixName,
          prefixName = _fieldContext$prefixN === void 0 ? [] : _fieldContext$prefixN;
      return name !== undefined ? [].concat(_toConsumableArray(prefixName), _toConsumableArray(name)) : [];
    };

    _this.getRules = function () {
      var _this$props3 = _this.props,
          _this$props3$rules = _this$props3.rules,
          rules = _this$props3$rules === void 0 ? [] : _this$props3$rules,
          fieldContext = _this$props3.fieldContext;
      return rules.map(function (rule) {
        if (typeof rule === 'function') {
          return rule(fieldContext);
        }

        return rule;
      });
    };

    _this.refresh = function () {
      if (!_this.mounted) return;
      /**
       * Clean up current node.
       */

      _this.setState(function (_ref) {
        var resetCount = _ref.resetCount;
        return {
          resetCount: resetCount + 1
        };
      });
    }; // ========================= Field Entity Interfaces =========================
    // Trigger by store update. Check if need update the component


    _this.onStoreChange = function (prevStore, namePathList, info) {
      var _this$props4 = _this.props,
          shouldUpdate = _this$props4.shouldUpdate,
          _this$props4$dependen = _this$props4.dependencies,
          dependencies = _this$props4$dependen === void 0 ? [] : _this$props4$dependen,
          onReset = _this$props4.onReset;
      var store = info.store;

      var namePath = _this.getNamePath();

      var prevValue = _this.getValue(prevStore);

      var curValue = _this.getValue(store);

      var namePathMatch = namePathList && containsNamePath(namePathList, namePath); // `setFieldsValue` is a quick access to update related status

      if (info.type === 'valueUpdate' && info.source === 'external' && prevValue !== curValue) {
        _this.touched = true;
        _this.dirty = true;
        _this.validatePromise = null;
        _this.errors = [];
      }

      switch (info.type) {
        case 'reset':
          if (!namePathList || namePathMatch) {
            // Clean up state
            _this.touched = false;
            _this.dirty = false;
            _this.validatePromise = null;
            _this.errors = [];

            if (onReset) {
              onReset();
            }

            _this.refresh();

            return;
          }

          break;

        case 'setField':
          {
            if (namePathMatch) {
              var data = info.data;

              if ('touched' in data) {
                _this.touched = data.touched;
              }

              if ('validating' in data && !('originRCField' in data)) {
                _this.validatePromise = data.validating ? Promise.resolve([]) : null;
              }

              if ('errors' in data) {
                _this.errors = data.errors || [];
              }

              _this.dirty = true;

              _this.reRender();

              return;
            } // Handle update by `setField` with `shouldUpdate`


            if (shouldUpdate && !namePath.length && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) {
              _this.reRender();

              return;
            }

            break;
          }

        case 'dependenciesUpdate':
          {
            /**
             * Trigger when marked `dependencies` updated. Related fields will all update
             */
            var dependencyList = dependencies.map(getNamePath); // No need for `namePathMath` check and `shouldUpdate` check, since `valueUpdate` will be
            // emitted earlier and they will work there
            // If set it may cause unnecessary twice rerendering

            if (dependencyList.some(function (dependency) {
              return containsNamePath(info.relatedFields, dependency);
            })) {
              _this.reRender();

              return;
            }

            break;
          }

        default:
          // 1. If `namePath` exists in `namePathList`, means it's related value and should update
          //      For example <List name="list"><Field name={['list', 0]}></List>
          //      If `namePathList` is [['list']] (List value update), Field should be updated
          //      If `namePathList` is [['list', 0]] (Field value update), List shouldn't be updated
          // 2.
          //   2.1 If `dependencies` is set, `name` is not set and `shouldUpdate` is not set,
          //       don't use `shouldUpdate`. `dependencies` is view as a shortcut if `shouldUpdate`
          //       is not provided
          //   2.2 If `shouldUpdate` provided, use customize logic to update the field
          //       else to check if value changed
          if (namePathMatch || (!dependencies.length || namePath.length || shouldUpdate) && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) {
            _this.reRender();

            return;
          }

          break;
      }

      if (shouldUpdate === true) {
        _this.reRender();
      }
    };

    _this.validateRules = function (options) {
      // We should fixed namePath & value to avoid developer change then by form function
      var namePath = _this.getNamePath();

      var currentValue = _this.getValue(); // Force change to async to avoid rule OOD under renderProps field


      var rootPromise = Promise.resolve().then(function () {
        if (!_this.mounted) {
          return [];
        }

        var _this$props5 = _this.props,
            _this$props5$validate = _this$props5.validateFirst,
            validateFirst = _this$props5$validate === void 0 ? false : _this$props5$validate,
            messageVariables = _this$props5.messageVariables;

        var _ref2 = options || {},
            triggerName = _ref2.triggerName;

        var filteredRules = _this.getRules();

        if (triggerName) {
          filteredRules = filteredRules.filter(function (rule) {
            var validateTrigger = rule.validateTrigger;

            if (!validateTrigger) {
              return true;
            }

            var triggerList = toArray$2(validateTrigger);
            return triggerList.includes(triggerName);
          });
        }

        var promise = validateRules(namePath, currentValue, filteredRules, options, validateFirst, messageVariables);
        promise.catch(function (e) {
          return e;
        }).then(function () {
          var errors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

          if (_this.validatePromise === rootPromise) {
            _this.validatePromise = null;
            _this.errors = errors;

            _this.reRender();
          }
        });
        return promise;
      });
      _this.validatePromise = rootPromise;
      _this.dirty = true;
      _this.errors = []; // Force trigger re-render since we need sync renderProps with new meta

      _this.reRender();

      return rootPromise;
    };

    _this.isFieldValidating = function () {
      return !!_this.validatePromise;
    };

    _this.isFieldTouched = function () {
      return _this.touched;
    };

    _this.isFieldDirty = function () {
      return _this.dirty;
    };

    _this.getErrors = function () {
      return _this.errors;
    };

    _this.isListField = function () {
      return _this.props.isListField;
    };

    _this.isList = function () {
      return _this.props.isList;
    };

    _this.isPreserve = function () {
      return _this.props.preserve;
    }; // ============================= Child Component =============================


    _this.getMeta = function () {
      // Make error & validating in cache to save perf
      _this.prevValidating = _this.isFieldValidating();
      var meta = {
        touched: _this.isFieldTouched(),
        validating: _this.prevValidating,
        errors: _this.errors,
        name: _this.getNamePath()
      };
      return meta;
    }; // Only return validate child node. If invalidate, will do nothing about field.


    _this.getOnlyChild = function (children) {
      // Support render props
      if (typeof children === 'function') {
        var meta = _this.getMeta();

        return _objectSpread2$1(_objectSpread2$1({}, _this.getOnlyChild(children(_this.getControlled(), meta, _this.props.fieldContext))), {}, {
          isFunction: true
        });
      } // Filed element only


      var childList = toArray$3(children);

      if (childList.length !== 1 || ! /*#__PURE__*/react.isValidElement(childList[0])) {
        return {
          child: childList,
          isFunction: false
        };
      }

      return {
        child: childList[0],
        isFunction: false
      };
    }; // ============================== Field Control ==============================


    _this.getValue = function (store) {
      var getFieldsValue = _this.props.fieldContext.getFieldsValue;

      var namePath = _this.getNamePath();

      return getValue$2(store || getFieldsValue(true), namePath);
    };

    _this.getControlled = function () {
      var childProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _this$props6 = _this.props,
          trigger = _this$props6.trigger,
          validateTrigger = _this$props6.validateTrigger,
          getValueFromEvent = _this$props6.getValueFromEvent,
          normalize = _this$props6.normalize,
          valuePropName = _this$props6.valuePropName,
          getValueProps = _this$props6.getValueProps,
          fieldContext = _this$props6.fieldContext;
      var mergedValidateTrigger = validateTrigger !== undefined ? validateTrigger : fieldContext.validateTrigger;

      var namePath = _this.getNamePath();

      var getInternalHooks = fieldContext.getInternalHooks,
          getFieldsValue = fieldContext.getFieldsValue;

      var _getInternalHooks = getInternalHooks(HOOK_MARK),
          dispatch = _getInternalHooks.dispatch;

      var value = _this.getValue();

      var mergedGetValueProps = getValueProps || function (val) {
        return _defineProperty$1({}, valuePropName, val);
      }; // eslint-disable-next-line @typescript-eslint/no-explicit-any


      var originTriggerFunc = childProps[trigger];

      var control = _objectSpread2$1(_objectSpread2$1({}, childProps), mergedGetValueProps(value)); // Add trigger


      control[trigger] = function () {
        // Mark as touched
        _this.touched = true;
        _this.dirty = true;
        var newValue;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        if (getValueFromEvent) {
          newValue = getValueFromEvent.apply(void 0, args);
        } else {
          newValue = defaultGetValueFromEvent.apply(void 0, [valuePropName].concat(args));
        }

        if (normalize) {
          newValue = normalize(newValue, value, getFieldsValue(true));
        }

        dispatch({
          type: 'updateValue',
          namePath: namePath,
          value: newValue
        });

        if (originTriggerFunc) {
          originTriggerFunc.apply(void 0, args);
        }
      }; // Add validateTrigger


      var validateTriggerList = toArray$2(mergedValidateTrigger || []);
      validateTriggerList.forEach(function (triggerName) {
        // Wrap additional function of component, so that we can get latest value from store
        var originTrigger = control[triggerName];

        control[triggerName] = function () {
          if (originTrigger) {
            originTrigger.apply(void 0, arguments);
          } // Always use latest rules


          var rules = _this.props.rules;

          if (rules && rules.length) {
            // We dispatch validate to root,
            // since it will update related data with other field with same name
            dispatch({
              type: 'validateField',
              namePath: namePath,
              triggerName: triggerName
            });
          }
        };
      });
      return control;
    }; // Register on init


    if (props.fieldContext) {
      var getInternalHooks = props.fieldContext.getInternalHooks;

      var _getInternalHooks2 = getInternalHooks(HOOK_MARK),
          initEntityValue = _getInternalHooks2.initEntityValue;

      initEntityValue(_assertThisInitialized(_this));
    }

    return _this;
  }

  _createClass(Field, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props7 = this.props,
          shouldUpdate = _this$props7.shouldUpdate,
          fieldContext = _this$props7.fieldContext;
      this.mounted = true; // Register on init

      if (fieldContext) {
        var getInternalHooks = fieldContext.getInternalHooks;

        var _getInternalHooks3 = getInternalHooks(HOOK_MARK),
            registerField = _getInternalHooks3.registerField;

        this.cancelRegisterFunc = registerField(this);
      } // One more render for component in case fields not ready


      if (shouldUpdate === true) {
        this.reRender();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cancelRegister();
      this.mounted = false;
    }
  }, {
    key: "reRender",
    value: function reRender() {
      if (!this.mounted) return;
      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      var resetCount = this.state.resetCount;
      var children = this.props.children;

      var _this$getOnlyChild = this.getOnlyChild(children),
          child = _this$getOnlyChild.child,
          isFunction = _this$getOnlyChild.isFunction; // Not need to `cloneElement` since user can handle this in render function self


      var returnChildNode;

      if (isFunction) {
        returnChildNode = child;
      } else if ( /*#__PURE__*/react.isValidElement(child)) {
        returnChildNode = /*#__PURE__*/react.cloneElement(child, this.getControlled(child.props));
      } else {
        warningOnce(!child, '`children` of Field is not validate ReactElement.');
        returnChildNode = child;
      }

      return /*#__PURE__*/react.createElement(react.Fragment, {
        key: resetCount
      }, returnChildNode);
    }
  }]);

  return Field;
}(react.Component);

Field.contextType = Context;
Field.defaultProps = {
  trigger: 'onChange',
  valuePropName: 'value'
};

function WrapperField(_ref4) {
  var name = _ref4.name,
      restProps = _objectWithoutProperties(_ref4, ["name"]);

  var fieldContext = react.useContext(Context);
  var namePath = name !== undefined ? getNamePath(name) : undefined;
  var key = 'keep';

  if (!restProps.isListField) {
    key = "_".concat((namePath || []).join('_'));
  } // Warning if it's a directly list field.

  return /*#__PURE__*/react.createElement(Field, _extends$1({
    key: key,
    name: namePath
  }, restProps, {
    fieldContext: fieldContext
  }));
}

var List = function List(_ref) {
  var name = _ref.name,
      initialValue = _ref.initialValue,
      children = _ref.children,
      rules = _ref.rules,
      validateTrigger = _ref.validateTrigger;
  var context = react.useContext(Context);
  var keyRef = react.useRef({
    keys: [],
    id: 0
  });
  var keyManager = keyRef.current; // User should not pass `children` as other type.

  if (typeof children !== 'function') {
    warningOnce(false, 'Form.List only accepts function as children.');
    return null;
  }

  var parentPrefixName = getNamePath(context.prefixName) || [];
  var prefixName = [].concat(_toConsumableArray(parentPrefixName), _toConsumableArray(getNamePath(name)));

  var shouldUpdate = function shouldUpdate(prevValue, nextValue, _ref2) {
    var source = _ref2.source;

    if (source === 'internal') {
      return false;
    }

    return prevValue !== nextValue;
  };

  return /*#__PURE__*/react.createElement(Context.Provider, {
    value: _objectSpread2$1(_objectSpread2$1({}, context), {}, {
      prefixName: prefixName
    })
  }, /*#__PURE__*/react.createElement(WrapperField, {
    name: [],
    shouldUpdate: shouldUpdate,
    rules: rules,
    validateTrigger: validateTrigger,
    initialValue: initialValue,
    isList: true
  }, function (_ref3, meta) {
    var _ref3$value = _ref3.value,
        value = _ref3$value === void 0 ? [] : _ref3$value,
        onChange = _ref3.onChange;
    var getFieldValue = context.getFieldValue;

    var getNewValue = function getNewValue() {
      var values = getFieldValue(prefixName || []);
      return values || [];
    };
    /**
     * Always get latest value in case user update fields by `form` api.
     */


    var operations = {
      add: function add(defaultValue, index) {
        // Mapping keys
        var newValue = getNewValue();

        if (index >= 0 && index <= newValue.length) {
          keyManager.keys = [].concat(_toConsumableArray(keyManager.keys.slice(0, index)), [keyManager.id], _toConsumableArray(keyManager.keys.slice(index)));
          onChange([].concat(_toConsumableArray(newValue.slice(0, index)), [defaultValue], _toConsumableArray(newValue.slice(index))));
        } else {

          keyManager.keys = [].concat(_toConsumableArray(keyManager.keys), [keyManager.id]);
          onChange([].concat(_toConsumableArray(newValue), [defaultValue]));
        }

        keyManager.id += 1;
      },
      remove: function remove(index) {
        var newValue = getNewValue();
        var indexSet = new Set(Array.isArray(index) ? index : [index]);

        if (indexSet.size <= 0) {
          return;
        }

        keyManager.keys = keyManager.keys.filter(function (_, keysIndex) {
          return !indexSet.has(keysIndex);
        }); // Trigger store change

        onChange(newValue.filter(function (_, valueIndex) {
          return !indexSet.has(valueIndex);
        }));
      },
      move: function move$1(from, to) {
        if (from === to) {
          return;
        }

        var newValue = getNewValue(); // Do not handle out of range

        if (from < 0 || from >= newValue.length || to < 0 || to >= newValue.length) {
          return;
        }

        keyManager.keys = move(keyManager.keys, from, to); // Trigger store change

        onChange(move(newValue, from, to));
      }
    };
    var listValue = value || [];

    if (!Array.isArray(listValue)) {
      listValue = [];
    }

    return children(listValue.map(function (__, index) {
      var key = keyManager.keys[index];

      if (key === undefined) {
        keyManager.keys[index] = keyManager.id;
        key = keyManager.keys[index];
        keyManager.id += 1;
      }

      return {
        name: index,
        key: key,
        isListField: true
      };
    }), operations, meta);
  }));
};

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function allPromiseFinish(promiseList) {
  var hasError = false;
  var count = promiseList.length;
  var results = [];

  if (!promiseList.length) {
    return Promise.resolve([]);
  }

  return new Promise(function (resolve, reject) {
    promiseList.forEach(function (promise, index) {
      promise.catch(function (e) {
        hasError = true;
        return e;
      }).then(function (result) {
        count -= 1;
        results[index] = result;

        if (count > 0) {
          return;
        }

        if (hasError) {
          reject(results);
        }

        resolve(results);
      });
    });
  });
}

var SPLIT = '__@field_split__';
/**
 * Convert name path into string to fast the fetch speed of Map.
 */

function normalize(namePath) {
  return namePath.map(function (cell) {
    return "".concat(_typeof$1(cell), ":").concat(cell);
  }) // Magic split
  .join(SPLIT);
}
/**
 * NameMap like a `Map` but accepts `string[]` as key.
 */


var NameMap = /*#__PURE__*/function () {
  function NameMap() {
    _classCallCheck(this, NameMap);

    this.kvs = new Map();
  }

  _createClass(NameMap, [{
    key: "set",
    value: function set(key, value) {
      this.kvs.set(normalize(key), value);
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.kvs.get(normalize(key));
    }
  }, {
    key: "update",
    value: function update(key, updater) {
      var origin = this.get(key);
      var next = updater(origin);

      if (!next) {
        this.delete(key);
      } else {
        this.set(key, next);
      }
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      this.kvs.delete(normalize(key));
    } // Since we only use this in test, let simply realize this

  }, {
    key: "map",
    value: function map(callback) {
      return _toConsumableArray(this.kvs.entries()).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        var cells = key.split(SPLIT);
        return callback({
          key: cells.map(function (cell) {
            var _cell$match = cell.match(/^([^:]*):(.*)$/),
                _cell$match2 = _slicedToArray(_cell$match, 3),
                type = _cell$match2[1],
                unit = _cell$match2[2];

            return type === 'number' ? Number(unit) : unit;
          }),
          value: value
        });
      });
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var json = {};
      this.map(function (_ref3) {
        var key = _ref3.key,
            value = _ref3.value;
        json[key.join('.')] = value;
        return null;
      });
      return json;
    }
  }]);

  return NameMap;
}();

var FormStore = function FormStore(forceRootUpdate) {
  var _this = this;

  _classCallCheck(this, FormStore);

  this.formHooked = false;
  this.subscribable = true;
  this.store = {};
  this.fieldEntities = [];
  this.initialValues = {};
  this.callbacks = {};
  this.validateMessages = null;
  this.preserve = null;
  this.lastValidatePromise = null;

  this.getForm = function () {
    return {
      getFieldValue: _this.getFieldValue,
      getFieldsValue: _this.getFieldsValue,
      getFieldError: _this.getFieldError,
      getFieldsError: _this.getFieldsError,
      isFieldsTouched: _this.isFieldsTouched,
      isFieldTouched: _this.isFieldTouched,
      isFieldValidating: _this.isFieldValidating,
      isFieldsValidating: _this.isFieldsValidating,
      resetFields: _this.resetFields,
      setFields: _this.setFields,
      setFieldsValue: _this.setFieldsValue,
      validateFields: _this.validateFields,
      submit: _this.submit,
      getInternalHooks: _this.getInternalHooks
    };
  }; // ======================== Internal Hooks ========================


  this.getInternalHooks = function (key) {
    if (key === HOOK_MARK) {
      _this.formHooked = true;
      return {
        dispatch: _this.dispatch,
        initEntityValue: _this.initEntityValue,
        registerField: _this.registerField,
        useSubscribe: _this.useSubscribe,
        setInitialValues: _this.setInitialValues,
        setCallbacks: _this.setCallbacks,
        setValidateMessages: _this.setValidateMessages,
        getFields: _this.getFields,
        setPreserve: _this.setPreserve
      };
    }

    warningOnce(false, '`getInternalHooks` is internal usage. Should not call directly.');
    return null;
  };

  this.useSubscribe = function (subscribable) {
    _this.subscribable = subscribable;
  };
  /**
   * First time `setInitialValues` should update store with initial value
   */


  this.setInitialValues = function (initialValues, init) {
    _this.initialValues = initialValues || {};

    if (init) {
      _this.store = setValues({}, initialValues, _this.store);
    }
  };

  this.getInitialValue = function (namePath) {
    return getValue$2(_this.initialValues, namePath);
  };

  this.setCallbacks = function (callbacks) {
    _this.callbacks = callbacks;
  };

  this.setValidateMessages = function (validateMessages) {
    _this.validateMessages = validateMessages;
  };

  this.setPreserve = function (preserve) {
    _this.preserve = preserve;
  }; // ========================== Dev Warning =========================


  this.timeoutId = null;

  this.warningUnhooked = function () {
  }; // ============================ Fields ============================

  /**
   * Get registered field entities.
   * @param pure Only return field which has a `name`. Default: false
   */


  this.getFieldEntities = function () {
    var pure = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (!pure) {
      return _this.fieldEntities;
    }

    return _this.fieldEntities.filter(function (field) {
      return field.getNamePath().length;
    });
  };

  this.getFieldsMap = function () {
    var pure = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var cache = new NameMap();

    _this.getFieldEntities(pure).forEach(function (field) {
      var namePath = field.getNamePath();
      cache.set(namePath, field);
    });

    return cache;
  };

  this.getFieldEntitiesForNamePathList = function (nameList) {
    if (!nameList) {
      return _this.getFieldEntities(true);
    }

    var cache = _this.getFieldsMap(true);

    return nameList.map(function (name) {
      var namePath = getNamePath(name);
      return cache.get(namePath) || {
        INVALIDATE_NAME_PATH: getNamePath(name)
      };
    });
  };

  this.getFieldsValue = function (nameList, filterFunc) {
    _this.warningUnhooked();

    if (nameList === true && !filterFunc) {
      return _this.store;
    }

    var fieldEntities = _this.getFieldEntitiesForNamePathList(Array.isArray(nameList) ? nameList : null);

    var filteredNameList = [];
    fieldEntities.forEach(function (entity) {
      var _entity$isListField;

      var namePath = 'INVALIDATE_NAME_PATH' in entity ? entity.INVALIDATE_NAME_PATH : entity.getNamePath(); // Ignore when it's a list item and not specific the namePath,
      // since parent field is already take in count

      if (!nameList && ((_entity$isListField = entity.isListField) === null || _entity$isListField === void 0 ? void 0 : _entity$isListField.call(entity))) {
        return;
      }

      if (!filterFunc) {
        filteredNameList.push(namePath);
      } else {
        var meta = 'getMeta' in entity ? entity.getMeta() : null;

        if (filterFunc(meta)) {
          filteredNameList.push(namePath);
        }
      }
    });
    return cloneByNamePathList(_this.store, filteredNameList.map(getNamePath));
  };

  this.getFieldValue = function (name) {
    _this.warningUnhooked();

    var namePath = getNamePath(name);
    return getValue$2(_this.store, namePath);
  };

  this.getFieldsError = function (nameList) {
    _this.warningUnhooked();

    var fieldEntities = _this.getFieldEntitiesForNamePathList(nameList);

    return fieldEntities.map(function (entity, index) {
      if (entity && !('INVALIDATE_NAME_PATH' in entity)) {
        return {
          name: entity.getNamePath(),
          errors: entity.getErrors()
        };
      }

      return {
        name: getNamePath(nameList[index]),
        errors: []
      };
    });
  };

  this.getFieldError = function (name) {
    _this.warningUnhooked();

    var namePath = getNamePath(name);

    var fieldError = _this.getFieldsError([namePath])[0];

    return fieldError.errors;
  };

  this.isFieldsTouched = function () {
    _this.warningUnhooked();

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var arg0 = args[0],
        arg1 = args[1];
    var namePathList;
    var isAllFieldsTouched = false;

    if (args.length === 0) {
      namePathList = null;
    } else if (args.length === 1) {
      if (Array.isArray(arg0)) {
        namePathList = arg0.map(getNamePath);
        isAllFieldsTouched = false;
      } else {
        namePathList = null;
        isAllFieldsTouched = arg0;
      }
    } else {
      namePathList = arg0.map(getNamePath);
      isAllFieldsTouched = arg1;
    }

    var fieldEntities = _this.getFieldEntities(true);

    var isFieldTouched = function isFieldTouched(field) {
      return field.isFieldTouched();
    }; // ===== Will get fully compare when not config namePathList =====


    if (!namePathList) {
      return isAllFieldsTouched ? fieldEntities.every(isFieldTouched) : fieldEntities.some(isFieldTouched);
    } // Generate a nest tree for validate


    var map = new NameMap();
    namePathList.forEach(function (shortNamePath) {
      map.set(shortNamePath, []);
    });
    fieldEntities.forEach(function (field) {
      var fieldNamePath = field.getNamePath(); // Find matched entity and put into list

      namePathList.forEach(function (shortNamePath) {
        if (shortNamePath.every(function (nameUnit, i) {
          return fieldNamePath[i] === nameUnit;
        })) {
          map.update(shortNamePath, function (list) {
            return [].concat(_toConsumableArray(list), [field]);
          });
        }
      });
    }); // Check if NameMap value is touched

    var isNamePathListTouched = function isNamePathListTouched(entities) {
      return entities.some(isFieldTouched);
    };

    var namePathListEntities = map.map(function (_ref) {
      var value = _ref.value;
      return value;
    });
    return isAllFieldsTouched ? namePathListEntities.every(isNamePathListTouched) : namePathListEntities.some(isNamePathListTouched);
  };

  this.isFieldTouched = function (name) {
    _this.warningUnhooked();

    return _this.isFieldsTouched([name]);
  };

  this.isFieldsValidating = function (nameList) {
    _this.warningUnhooked();

    var fieldEntities = _this.getFieldEntities();

    if (!nameList) {
      return fieldEntities.some(function (testField) {
        return testField.isFieldValidating();
      });
    }

    var namePathList = nameList.map(getNamePath);
    return fieldEntities.some(function (testField) {
      var fieldNamePath = testField.getNamePath();
      return containsNamePath(namePathList, fieldNamePath) && testField.isFieldValidating();
    });
  };

  this.isFieldValidating = function (name) {
    _this.warningUnhooked();

    return _this.isFieldsValidating([name]);
  };
  /**
   * Reset Field with field `initialValue` prop.
   * Can pass `entities` or `namePathList` or just nothing.
   */


  this.resetWithFieldInitialValue = function () {
    var info = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // Create cache
    var cache = new NameMap();

    var fieldEntities = _this.getFieldEntities(true);

    fieldEntities.forEach(function (field) {
      var initialValue = field.props.initialValue;
      var namePath = field.getNamePath(); // Record only if has `initialValue`

      if (initialValue !== undefined) {
        var records = cache.get(namePath) || new Set();
        records.add({
          entity: field,
          value: initialValue
        });
        cache.set(namePath, records);
      }
    }); // Reset

    var resetWithFields = function resetWithFields(entities) {
      entities.forEach(function (field) {
        var initialValue = field.props.initialValue;

        if (initialValue !== undefined) {
          var namePath = field.getNamePath();

          var formInitialValue = _this.getInitialValue(namePath);

          if (formInitialValue !== undefined) {
            // Warning if conflict with form initialValues and do not modify value
            warningOnce(false, "Form already set 'initialValues' with path '".concat(namePath.join('.'), "'. Field can not overwrite it."));
          } else {
            var records = cache.get(namePath);

            if (records && records.size > 1) {
              // Warning if multiple field set `initialValue`and do not modify value
              warningOnce(false, "Multiple Field with path '".concat(namePath.join('.'), "' set 'initialValue'. Can not decide which one to pick."));
            } else if (records) {
              var originValue = _this.getFieldValue(namePath); // Set `initialValue`


              if (!info.skipExist || originValue === undefined) {
                _this.store = setValue(_this.store, namePath, _toConsumableArray(records)[0].value);
              }
            }
          }
        }
      });
    };

    var requiredFieldEntities;

    if (info.entities) {
      requiredFieldEntities = info.entities;
    } else if (info.namePathList) {
      requiredFieldEntities = [];
      info.namePathList.forEach(function (namePath) {
        var records = cache.get(namePath);

        if (records) {
          var _requiredFieldEntitie;

          (_requiredFieldEntitie = requiredFieldEntities).push.apply(_requiredFieldEntitie, _toConsumableArray(_toConsumableArray(records).map(function (r) {
            return r.entity;
          })));
        }
      });
    } else {
      requiredFieldEntities = fieldEntities;
    }

    resetWithFields(requiredFieldEntities);
  };

  this.resetFields = function (nameList) {
    _this.warningUnhooked();

    var prevStore = _this.store;

    if (!nameList) {
      _this.store = setValues({}, _this.initialValues);

      _this.resetWithFieldInitialValue();

      _this.notifyObservers(prevStore, null, {
        type: 'reset'
      });

      return;
    } // Reset by `nameList`


    var namePathList = nameList.map(getNamePath);
    namePathList.forEach(function (namePath) {
      var initialValue = _this.getInitialValue(namePath);

      _this.store = setValue(_this.store, namePath, initialValue);
    });

    _this.resetWithFieldInitialValue({
      namePathList: namePathList
    });

    _this.notifyObservers(prevStore, namePathList, {
      type: 'reset'
    });
  };

  this.setFields = function (fields) {
    _this.warningUnhooked();

    var prevStore = _this.store;
    fields.forEach(function (fieldData) {
      var name = fieldData.name;
          fieldData.errors;
          var data = _objectWithoutProperties(fieldData, ["name", "errors"]);

      var namePath = getNamePath(name); // Value

      if ('value' in data) {
        _this.store = setValue(_this.store, namePath, data.value);
      }

      _this.notifyObservers(prevStore, [namePath], {
        type: 'setField',
        data: fieldData
      });
    });
  };

  this.getFields = function () {
    var entities = _this.getFieldEntities(true);

    var fields = entities.map(function (field) {
      var namePath = field.getNamePath();
      var meta = field.getMeta();

      var fieldData = _objectSpread2$1(_objectSpread2$1({}, meta), {}, {
        name: namePath,
        value: _this.getFieldValue(namePath)
      });

      Object.defineProperty(fieldData, 'originRCField', {
        value: true
      });
      return fieldData;
    });
    return fields;
  }; // =========================== Observer ===========================

  /**
   * This only trigger when a field is on constructor to avoid we get initialValue too late
   */


  this.initEntityValue = function (entity) {
    var initialValue = entity.props.initialValue;

    if (initialValue !== undefined) {
      var namePath = entity.getNamePath();
      var prevValue = getValue$2(_this.store, namePath);

      if (prevValue === undefined) {
        _this.store = setValue(_this.store, namePath, initialValue);
      }
    }
  };

  this.registerField = function (entity) {
    _this.fieldEntities.push(entity); // Set initial values


    if (entity.props.initialValue !== undefined) {
      var prevStore = _this.store;

      _this.resetWithFieldInitialValue({
        entities: [entity],
        skipExist: true
      });

      _this.notifyObservers(prevStore, [entity.getNamePath()], {
        type: 'valueUpdate',
        source: 'internal'
      });
    } // un-register field callback


    return function (isListField, preserve) {
      var subNamePath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      _this.fieldEntities = _this.fieldEntities.filter(function (item) {
        return item !== entity;
      }); // Clean up store value if not preserve

      var mergedPreserve = preserve !== undefined ? preserve : _this.preserve;

      if (mergedPreserve === false && (!isListField || subNamePath.length > 1)) {
        var namePath = entity.getNamePath();
        var defaultValue = isListField ? undefined : getValue$2(_this.initialValues, namePath);

        if (namePath.length && _this.getFieldValue(namePath) !== defaultValue && _this.fieldEntities.every(function (field) {
          return (// Only reset when no namePath exist
            !matchNamePath(field.getNamePath(), namePath)
          );
        })) {
          _this.store = setValue(_this.store, namePath, defaultValue, true);
        }
      }
    };
  };

  this.dispatch = function (action) {
    switch (action.type) {
      case 'updateValue':
        {
          var namePath = action.namePath,
              value = action.value;

          _this.updateValue(namePath, value);

          break;
        }

      case 'validateField':
        {
          var _namePath = action.namePath,
              triggerName = action.triggerName;

          _this.validateFields([_namePath], {
            triggerName: triggerName
          });

          break;
        }

    }
  };

  this.notifyObservers = function (prevStore, namePathList, info) {
    if (_this.subscribable) {
      var mergedInfo = _objectSpread2$1(_objectSpread2$1({}, info), {}, {
        store: _this.getFieldsValue(true)
      });

      _this.getFieldEntities().forEach(function (_ref2) {
        var onStoreChange = _ref2.onStoreChange;
        onStoreChange(prevStore, namePathList, mergedInfo);
      });
    } else {
      _this.forceRootUpdate();
    }
  };

  this.updateValue = function (name, value) {
    var namePath = getNamePath(name);
    var prevStore = _this.store;
    _this.store = setValue(_this.store, namePath, value);

    _this.notifyObservers(prevStore, [namePath], {
      type: 'valueUpdate',
      source: 'internal'
    }); // Notify dependencies children with parent update
    // We need delay to trigger validate in case Field is under render props


    var childrenFields = _this.getDependencyChildrenFields(namePath);

    if (childrenFields.length) {
      _this.validateFields(childrenFields);
    }

    _this.notifyObservers(prevStore, childrenFields, {
      type: 'dependenciesUpdate',
      relatedFields: [namePath].concat(_toConsumableArray(childrenFields))
    }); // trigger callback function


    var onValuesChange = _this.callbacks.onValuesChange;

    if (onValuesChange) {
      var changedValues = cloneByNamePathList(_this.store, [namePath]);
      onValuesChange(changedValues, _this.getFieldsValue());
    }

    _this.triggerOnFieldsChange([namePath].concat(_toConsumableArray(childrenFields)));
  }; // Let all child Field get update.


  this.setFieldsValue = function (store) {
    _this.warningUnhooked();

    var prevStore = _this.store;

    if (store) {
      _this.store = setValues(_this.store, store);
    }

    _this.notifyObservers(prevStore, null, {
      type: 'valueUpdate',
      source: 'external'
    });
  };

  this.getDependencyChildrenFields = function (rootNamePath) {
    var children = new Set();
    var childrenFields = [];
    var dependencies2fields = new NameMap();
    /**
     * Generate maps
     * Can use cache to save perf if user report performance issue with this
     */

    _this.getFieldEntities().forEach(function (field) {
      var dependencies = field.props.dependencies;
      (dependencies || []).forEach(function (dependency) {
        var dependencyNamePath = getNamePath(dependency);
        dependencies2fields.update(dependencyNamePath, function () {
          var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Set();
          fields.add(field);
          return fields;
        });
      });
    });

    var fillChildren = function fillChildren(namePath) {
      var fields = dependencies2fields.get(namePath) || new Set();
      fields.forEach(function (field) {
        if (!children.has(field)) {
          children.add(field);
          var fieldNamePath = field.getNamePath();

          if (field.isFieldDirty() && fieldNamePath.length) {
            childrenFields.push(fieldNamePath);
            fillChildren(fieldNamePath);
          }
        }
      });
    };

    fillChildren(rootNamePath);
    return childrenFields;
  };

  this.triggerOnFieldsChange = function (namePathList, filedErrors) {
    var onFieldsChange = _this.callbacks.onFieldsChange;

    if (onFieldsChange) {
      var fields = _this.getFields();
      /**
       * Fill errors since `fields` may be replaced by controlled fields
       */


      if (filedErrors) {
        var cache = new NameMap();
        filedErrors.forEach(function (_ref3) {
          var name = _ref3.name,
              errors = _ref3.errors;
          cache.set(name, errors);
        });
        fields.forEach(function (field) {
          // eslint-disable-next-line no-param-reassign
          field.errors = cache.get(field.name) || field.errors;
        });
      }

      var changedFields = fields.filter(function (_ref4) {
        var fieldName = _ref4.name;
        return containsNamePath(namePathList, fieldName);
      });
      onFieldsChange(changedFields, fields);
    }
  }; // =========================== Validate ===========================


  this.validateFields = function (nameList, options) {
    _this.warningUnhooked();

    var provideNameList = !!nameList;
    var namePathList = provideNameList ? nameList.map(getNamePath) : []; // Collect result in promise list

    var promiseList = [];

    _this.getFieldEntities(true).forEach(function (field) {
      // Add field if not provide `nameList`
      if (!provideNameList) {
        namePathList.push(field.getNamePath());
      }
      /**
       * Recursive validate if configured.
       * TODO: perf improvement @zombieJ
       */


      if ((options === null || options === void 0 ? void 0 : options.recursive) && provideNameList) {
        var namePath = field.getNamePath();

        if ( // nameList[i] === undefined 说明是以 nameList 开头的
        // ['name'] -> ['name','list']
        namePath.every(function (nameUnit, i) {
          return nameList[i] === nameUnit || nameList[i] === undefined;
        })) {
          namePathList.push(namePath);
        }
      } // Skip if without rule


      if (!field.props.rules || !field.props.rules.length) {
        return;
      }

      var fieldNamePath = field.getNamePath(); // Add field validate rule in to promise list

      if (!provideNameList || containsNamePath(namePathList, fieldNamePath)) {
        var promise = field.validateRules(_objectSpread2$1({
          validateMessages: _objectSpread2$1(_objectSpread2$1({}, defaultValidateMessages), _this.validateMessages)
        }, options)); // Wrap promise with field

        promiseList.push(promise.then(function () {
          return {
            name: fieldNamePath,
            errors: []
          };
        }).catch(function (errors) {
          return Promise.reject({
            name: fieldNamePath,
            errors: errors
          });
        }));
      }
    });

    var summaryPromise = allPromiseFinish(promiseList);
    _this.lastValidatePromise = summaryPromise; // Notify fields with rule that validate has finished and need update

    summaryPromise.catch(function (results) {
      return results;
    }).then(function (results) {
      var resultNamePathList = results.map(function (_ref5) {
        var name = _ref5.name;
        return name;
      });

      _this.notifyObservers(_this.store, resultNamePathList, {
        type: 'validateFinish'
      });

      _this.triggerOnFieldsChange(resultNamePathList, results);
    });
    var returnPromise = summaryPromise.then(function () {
      if (_this.lastValidatePromise === summaryPromise) {
        return Promise.resolve(_this.getFieldsValue(namePathList));
      }

      return Promise.reject([]);
    }).catch(function (results) {
      var errorList = results.filter(function (result) {
        return result && result.errors.length;
      });
      return Promise.reject({
        values: _this.getFieldsValue(namePathList),
        errorFields: errorList,
        outOfDate: _this.lastValidatePromise !== summaryPromise
      });
    }); // Do not throw in console

    returnPromise.catch(function (e) {
      return e;
    });
    return returnPromise;
  }; // ============================ Submit ============================


  this.submit = function () {
    _this.warningUnhooked();

    _this.validateFields().then(function (values) {
      var onFinish = _this.callbacks.onFinish;

      if (onFinish) {
        try {
          onFinish(values);
        } catch (err) {
          // Should print error if user `onFinish` callback failed
          console.error(err);
        }
      }
    }).catch(function (e) {
      var onFinishFailed = _this.callbacks.onFinishFailed;

      if (onFinishFailed) {
        onFinishFailed(e);
      }
    });
  };

  this.forceRootUpdate = forceRootUpdate;
};

function useForm(form) {
  var formRef = react.useRef();

  var _React$useState = react.useState({}),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      forceUpdate = _React$useState2[1];

  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      // Create a new FormStore if not provided
      var forceReRender = function forceReRender() {
        forceUpdate({});
      };

      var formStore = new FormStore(forceReRender);
      formRef.current = formStore.getForm();
    }
  }

  return [formRef.current];
}

var FormContext = /*#__PURE__*/react.createContext({
  triggerFormChange: function triggerFormChange() {},
  triggerFormFinish: function triggerFormFinish() {},
  registerForm: function registerForm() {},
  unregisterForm: function unregisterForm() {}
});

var FormProvider = function FormProvider(_ref) {
  var validateMessages = _ref.validateMessages,
      onFormChange = _ref.onFormChange,
      onFormFinish = _ref.onFormFinish,
      children = _ref.children;
  var formContext = react.useContext(FormContext);
  var formsRef = react.useRef({});
  return /*#__PURE__*/react.createElement(FormContext.Provider, {
    value: _objectSpread2$1(_objectSpread2$1({}, formContext), {}, {
      validateMessages: _objectSpread2$1(_objectSpread2$1({}, formContext.validateMessages), validateMessages),
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: function triggerFormChange(name, changedFields) {
        if (onFormChange) {
          onFormChange(name, {
            changedFields: changedFields,
            forms: formsRef.current
          });
        }

        formContext.triggerFormChange(name, changedFields);
      },
      triggerFormFinish: function triggerFormFinish(name, values) {
        if (onFormFinish) {
          onFormFinish(name, {
            values: values,
            forms: formsRef.current
          });
        }

        formContext.triggerFormFinish(name, values);
      },
      registerForm: function registerForm(name, form) {
        if (name) {
          formsRef.current = _objectSpread2$1(_objectSpread2$1({}, formsRef.current), {}, _defineProperty$1({}, name, form));
        }

        formContext.registerForm(name, form);
      },
      unregisterForm: function unregisterForm(name) {
        var newForms = _objectSpread2$1({}, formsRef.current);

        delete newForms[name];
        formsRef.current = newForms;
        formContext.unregisterForm(name);
      }
    })
  }, children);
};

var Form = function Form(_ref, ref) {
  var name = _ref.name,
      initialValues = _ref.initialValues,
      fields = _ref.fields,
      form = _ref.form,
      preserve = _ref.preserve,
      children = _ref.children,
      _ref$component = _ref.component,
      Component = _ref$component === void 0 ? 'form' : _ref$component,
      validateMessages = _ref.validateMessages,
      _ref$validateTrigger = _ref.validateTrigger,
      validateTrigger = _ref$validateTrigger === void 0 ? 'onChange' : _ref$validateTrigger,
      onValuesChange = _ref.onValuesChange,
      _onFieldsChange = _ref.onFieldsChange,
      _onFinish = _ref.onFinish,
      onFinishFailed = _ref.onFinishFailed,
      restProps = _objectWithoutProperties(_ref, ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed"]);

  var formContext = react.useContext(FormContext); // We customize handle event since Context will makes all the consumer re-render:
  // https://reactjs.org/docs/context.html#contextprovider

  var _useForm = useForm(form),
      _useForm2 = _slicedToArray(_useForm, 1),
      formInstance = _useForm2[0];

  var _formInstance$getInte = formInstance.getInternalHooks(HOOK_MARK),
      useSubscribe = _formInstance$getInte.useSubscribe,
      setInitialValues = _formInstance$getInte.setInitialValues,
      setCallbacks = _formInstance$getInte.setCallbacks,
      setValidateMessages = _formInstance$getInte.setValidateMessages,
      setPreserve = _formInstance$getInte.setPreserve; // Pass ref with form instance


  react.useImperativeHandle(ref, function () {
    return formInstance;
  }); // Register form into Context

  react.useEffect(function () {
    formContext.registerForm(name, formInstance);
    return function () {
      formContext.unregisterForm(name);
    };
  }, [formContext, formInstance, name]); // Pass props to store

  setValidateMessages(_objectSpread2$1(_objectSpread2$1({}, formContext.validateMessages), validateMessages));
  setCallbacks({
    onValuesChange: onValuesChange,
    onFieldsChange: function onFieldsChange(changedFields) {
      formContext.triggerFormChange(name, changedFields);

      if (_onFieldsChange) {
        for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          rest[_key - 1] = arguments[_key];
        }

        _onFieldsChange.apply(void 0, [changedFields].concat(rest));
      }
    },
    onFinish: function onFinish(values) {
      formContext.triggerFormFinish(name, values);

      if (_onFinish) {
        _onFinish(values);
      }
    },
    onFinishFailed: onFinishFailed
  });
  setPreserve(preserve); // Set initial value, init store value when first mount

  var mountRef = react.useRef(null);
  setInitialValues(initialValues, !mountRef.current);

  if (!mountRef.current) {
    mountRef.current = true;
  } // Prepare children by `children` type


  var childrenNode = children;
  var childrenRenderProps = typeof children === 'function';

  if (childrenRenderProps) {
    var values = formInstance.getFieldsValue(true);
    childrenNode = children(values, formInstance);
  } // Not use subscribe when using render props


  useSubscribe(!childrenRenderProps); // Listen if fields provided. We use ref to save prev data here to avoid additional render

  var prevFieldsRef = react.useRef();
  react.useEffect(function () {
    if (!isSimilar(prevFieldsRef.current || [], fields || [])) {
      formInstance.setFields(fields || []);
    }

    prevFieldsRef.current = fields;
  }, [fields, formInstance]);
  var formContextValue = react.useMemo(function () {
    return _objectSpread2$1(_objectSpread2$1({}, formInstance), {}, {
      validateTrigger: validateTrigger
    });
  }, [formInstance, validateTrigger]);
  var wrapperNode = /*#__PURE__*/react.createElement(Context.Provider, {
    value: formContextValue
  }, childrenNode);

  if (Component === false) {
    return wrapperNode;
  }

  return /*#__PURE__*/react.createElement(Component, _extends$1({}, restProps, {
    onSubmit: function onSubmit(event) {
      event.preventDefault();
      event.stopPropagation();
      formInstance.submit();
    },
    onReset: function onReset(event) {
      var _restProps$onReset;

      event.preventDefault();
      formInstance.resetFields();
      (_restProps$onReset = restProps.onReset) === null || _restProps$onReset === void 0 ? void 0 : _restProps$onReset.call(restProps, event);
    }
  }), wrapperNode);
};

var InternalForm = /*#__PURE__*/react.forwardRef(Form);
var RefForm = InternalForm;
RefForm.FormProvider = FormProvider;
RefForm.Field = WrapperField;
RefForm.List = List;
RefForm.useForm = useForm;

function useMemo(getValue, condition, shouldUpdate) {
  var cacheRef = react.useRef({});

  if (!('value' in cacheRef.current) || shouldUpdate(cacheRef.current.condition, condition)) {
    cacheRef.current.value = getValue();
    cacheRef.current.condition = condition;
  }

  return cacheRef.current.value;
}

var devWarning = (function (valid, component, message) {
  warningOnce(valid, "[antd: ".concat(component, "] ").concat(message));
});

var enUS = {
  // Options.jsx
  items_per_page: '/ page',
  jump_to: 'Go to',
  jump_to_confirm: 'confirm',
  page: '',
  // Pagination.jsx
  prev_page: 'Previous Page',
  next_page: 'Next Page',
  prev_5: 'Previous 5 Pages',
  next_5: 'Next 5 Pages',
  prev_3: 'Previous 3 Pages',
  next_3: 'Next 3 Pages'
};

var locale$2 = {
  locale: 'en_US',
  today: 'Today',
  now: 'Now',
  backToToday: 'Back to today',
  ok: 'Ok',
  clear: 'Clear',
  month: 'Month',
  year: 'Year',
  timeSelect: 'select time',
  dateSelect: 'select date',
  weekSelect: 'Choose a week',
  monthSelect: 'Choose a month',
  yearSelect: 'Choose a year',
  decadeSelect: 'Choose a decade',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Previous month (PageUp)',
  nextMonth: 'Next month (PageDown)',
  previousYear: 'Last year (Control + left)',
  nextYear: 'Next year (Control + right)',
  previousDecade: 'Last decade',
  nextDecade: 'Next decade',
  previousCentury: 'Last century',
  nextCentury: 'Next century'
};

var locale$1 = {
  placeholder: 'Select time',
  rangePlaceholder: ['Start time', 'End time']
};

var locale = {
  lang: _extends$1({
    placeholder: 'Select date',
    yearPlaceholder: 'Select year',
    quarterPlaceholder: 'Select quarter',
    monthPlaceholder: 'Select month',
    weekPlaceholder: 'Select week',
    rangePlaceholder: ['Start date', 'End date'],
    rangeYearPlaceholder: ['Start year', 'End year'],
    rangeMonthPlaceholder: ['Start month', 'End month'],
    rangeWeekPlaceholder: ['Start week', 'End week']
  }, locale$2),
  timePickerLocale: _extends$1({}, locale$1)
}; // All settings at:

/* eslint-disable no-template-curly-in-string */
var typeTemplate = '${label} is not a valid ${type}';
var localeValues = {
  locale: 'en',
  Pagination: enUS,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  global: {
    placeholder: 'Please select'
  },
  Table: {
    filterTitle: 'Filter menu',
    filterConfirm: 'OK',
    filterReset: 'Reset',
    filterEmptyText: 'No filters',
    emptyText: 'No data',
    selectAll: 'Select current page',
    selectInvert: 'Invert current page',
    selectNone: 'Clear all data',
    selectionAll: 'Select all data',
    sortTitle: 'Sort',
    expand: 'Expand row',
    collapse: 'Collapse row',
    triggerDesc: 'Click to sort descending',
    triggerAsc: 'Click to sort ascending',
    cancelSort: 'Click to cancel sorting'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Cancel',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Cancel'
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Search here',
    itemUnit: 'item',
    itemsUnit: 'items',
    remove: 'Remove',
    selectCurrent: 'Select current page',
    removeCurrent: 'Remove current page',
    selectAll: 'Select all data',
    removeAll: 'Remove all data',
    selectInvert: 'Invert current page'
  },
  Upload: {
    uploading: 'Uploading...',
    removeFile: 'Remove file',
    uploadError: 'Upload error',
    previewFile: 'Preview file',
    downloadFile: 'Download file'
  },
  Empty: {
    description: 'No Data'
  },
  Icon: {
    icon: 'icon'
  },
  Text: {
    edit: 'Edit',
    copy: 'Copy',
    copied: 'Copied',
    expand: 'Expand'
  },
  PageHeader: {
    back: 'Back'
  },
  Form: {
    optional: '(optional)',
    defaultValidateMessages: {
      "default": 'Field validation error for ${label}',
      required: 'Please enter ${label}',
      "enum": '${label} must be one of [${enum}]',
      whitespace: '${label} cannot be a blank character',
      date: {
        format: '${label} date format is invalid',
        parse: '${label} cannot be converted to a date',
        invalid: '${label} is an invalid date'
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        "boolean": typeTemplate,
        integer: typeTemplate,
        "float": typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: '${label} must be ${len} characters',
        min: '${label} must be at least ${min} characters',
        max: '${label} must be up to ${max} characters',
        range: '${label} must be between ${min}-${max} characters'
      },
      number: {
        len: '${label} must be equal to ${len}',
        min: '${label} must be minimum ${min}',
        max: '${label} must be maximum ${max}',
        range: '${label} must be between ${min}-${max}'
      },
      array: {
        len: 'Must be ${len} ${label}',
        min: 'At least ${min} ${label}',
        max: 'At most ${max} ${label}',
        range: 'The amount of ${label} must be between ${min}-${max}'
      },
      pattern: {
        mismatch: '${label} does not match the pattern ${pattern}'
      }
    }
  },
  Image: {
    preview: 'Preview'
  }
};

var runtimeLocale = _extends$1({}, localeValues.Modal);

function changeConfirmLocale(newLocale) {
  if (newLocale) {
    runtimeLocale = _extends$1(_extends$1({}, runtimeLocale), newLocale);
  } else {
    runtimeLocale = _extends$1({}, localeValues.Modal);
  }
}

var LocaleContext = /*#__PURE__*/react.createContext(undefined);

var ANT_MARK = 'internalMark';

var LocaleProvider = /*#__PURE__*/function (_React$Component) {
  _inherits(LocaleProvider, _React$Component);

  var _super = _createSuper(LocaleProvider);

  function LocaleProvider(props) {
    var _this;

    _classCallCheck(this, LocaleProvider);

    _this = _super.call(this, props);
    changeConfirmLocale(props.locale && props.locale.Modal);
    devWarning(props._ANT_MARK__ === ANT_MARK, 'LocaleProvider', '`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale');
    return _this;
  }

  _createClass(LocaleProvider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      changeConfirmLocale(this.props.locale && this.props.locale.Modal);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var locale = this.props.locale;

      if (prevProps.locale !== locale) {
        changeConfirmLocale(locale && locale.Modal);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      changeConfirmLocale();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          locale = _this$props.locale,
          children = _this$props.children;
      return /*#__PURE__*/react.createElement(LocaleContext.Provider, {
        value: _extends$1(_extends$1({}, locale), {
          exist: true
        })
      }, children);
    }
  }]);

  return LocaleProvider;
}(react.Component);
LocaleProvider.defaultProps = {
  locale: {}
};

var LocaleReceiver = /*#__PURE__*/function (_React$Component) {
  _inherits(LocaleReceiver, _React$Component);

  var _super = _createSuper(LocaleReceiver);

  function LocaleReceiver() {
    _classCallCheck(this, LocaleReceiver);

    return _super.apply(this, arguments);
  }

  _createClass(LocaleReceiver, [{
    key: "getLocale",
    value: function getLocale() {
      var _this$props = this.props,
          componentName = _this$props.componentName,
          defaultLocale = _this$props.defaultLocale;
      var locale = defaultLocale || localeValues[componentName || 'global'];
      var antLocale = this.context;
      var localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
      return _extends$1(_extends$1({}, typeof locale === 'function' ? locale() : locale), localeFromContext || {});
    }
  }, {
    key: "getLocaleCode",
    value: function getLocaleCode() {
      var antLocale = this.context;
      var localeCode = antLocale && antLocale.locale; // Had use LocaleProvide but didn't set locale

      if (antLocale && antLocale.exist && !localeCode) {
        return localeValues.locale;
      }

      return localeCode;
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children(this.getLocale(), this.getLocaleCode(), this.context);
    }
  }]);

  return LocaleReceiver;
}(react.Component);
LocaleReceiver.defaultProps = {
  componentName: 'global'
};
LocaleReceiver.contextType = LocaleContext;

var Empty$1 = function Empty() {
  var _React$useContext = react.useContext(ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;

  var prefixCls = getPrefixCls('empty-img-default');
  return /*#__PURE__*/react.createElement("svg", {
    className: prefixCls,
    width: "184",
    height: "152",
    viewBox: "0 0 184 152",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react.createElement("g", {
    transform: "translate(24 31.67)"
  }, /*#__PURE__*/react.createElement("ellipse", {
    className: "".concat(prefixCls, "-ellipse"),
    cx: "67.797",
    cy: "106.89",
    rx: "67.797",
    ry: "12.668"
  }), /*#__PURE__*/react.createElement("path", {
    className: "".concat(prefixCls, "-path-1"),
    d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "".concat(prefixCls, "-path-2"),
    d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
    transform: "translate(13.56)"
  }), /*#__PURE__*/react.createElement("path", {
    className: "".concat(prefixCls, "-path-3"),
    d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "".concat(prefixCls, "-path-4"),
    d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
  })), /*#__PURE__*/react.createElement("path", {
    className: "".concat(prefixCls, "-path-5"),
    d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
  }), /*#__PURE__*/react.createElement("g", {
    className: "".concat(prefixCls, "-g"),
    transform: "translate(149.65 15.383)"
  }, /*#__PURE__*/react.createElement("ellipse", {
    cx: "20.654",
    cy: "3.167",
    rx: "2.849",
    ry: "2.815"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
  }))));
};

var Simple = function Simple() {
  var _React$useContext = react.useContext(ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;

  var prefixCls = getPrefixCls('empty-img-simple');
  return /*#__PURE__*/react.createElement("svg", {
    className: prefixCls,
    width: "64",
    height: "41",
    viewBox: "0 0 64 41",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react.createElement("g", {
    transform: "translate(0 1)",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react.createElement("ellipse", {
    className: "".concat(prefixCls, "-ellipse"),
    cx: "32",
    cy: "33",
    rx: "32",
    ry: "7"
  }), /*#__PURE__*/react.createElement("g", {
    className: "".concat(prefixCls, "-g"),
    fillRule: "nonzero"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
    className: "".concat(prefixCls, "-path")
  }))));
};

var __rest$6 = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var defaultEmptyImg = /*#__PURE__*/react.createElement(Empty$1, null);
var simpleEmptyImg = /*#__PURE__*/react.createElement(Simple, null);

var Empty = function Empty(_a) {
  var className = _a.className,
      customizePrefixCls = _a.prefixCls,
      _a$image = _a.image,
      image = _a$image === void 0 ? defaultEmptyImg : _a$image,
      description = _a.description,
      children = _a.children,
      imageStyle = _a.imageStyle,
      restProps = __rest$6(_a, ["className", "prefixCls", "image", "description", "children", "imageStyle"]);

  var _React$useContext = react.useContext(ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  return /*#__PURE__*/react.createElement(LocaleReceiver, {
    componentName: "Empty"
  }, function (locale) {
    var _classNames;

    var prefixCls = getPrefixCls('empty', customizePrefixCls);
    var des = typeof description !== 'undefined' ? description : locale.description;
    var alt = typeof des === 'string' ? des : 'empty';
    var imageNode = null;

    if (typeof image === 'string') {
      imageNode = /*#__PURE__*/react.createElement("img", {
        alt: alt,
        src: image
      });
    } else {
      imageNode = image;
    }

    return /*#__PURE__*/react.createElement("div", _extends$1({
      className: classnames(prefixCls, (_classNames = {}, _defineProperty$1(_classNames, "".concat(prefixCls, "-normal"), image === simpleEmptyImg), _defineProperty$1(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className)
    }, restProps), /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-image"),
      style: imageStyle
    }, imageNode), des && /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-description")
    }, des), children && /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-footer")
    }, children));
  });
};

Empty.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
Empty.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;

var renderEmpty = function renderEmpty(componentName) {
  return /*#__PURE__*/react.createElement(ConfigConsumer, null, function (_ref) {
    var getPrefixCls = _ref.getPrefixCls;
    var prefix = getPrefixCls('empty');

    switch (componentName) {
      case 'Table':
      case 'List':
        return /*#__PURE__*/react.createElement(Empty, {
          image: Empty.PRESENTED_IMAGE_SIMPLE
        });

      case 'Select':
      case 'TreeSelect':
      case 'Cascader':
      case 'Transfer':
      case 'Mentions':
        return /*#__PURE__*/react.createElement(Empty, {
          image: Empty.PRESENTED_IMAGE_SIMPLE,
          className: "".concat(prefix, "-small")
        });

      default:
        return /*#__PURE__*/react.createElement(Empty, null);
    }
  });
};

var defaultGetPrefixCls = function defaultGetPrefixCls(suffixCls, customizePrefixCls) {
  if (customizePrefixCls) return customizePrefixCls;
  return suffixCls ? "ant-".concat(suffixCls) : 'ant';
};

var ConfigContext = /*#__PURE__*/react.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: defaultGetPrefixCls,
  renderEmpty: renderEmpty
});
var ConfigConsumer = ConfigContext.Consumer;

var SizeContext = /*#__PURE__*/react.createContext(undefined);
var SizeContextProvider = function SizeContextProvider(_ref) {
  var children = _ref.children,
      size = _ref.size;
  return /*#__PURE__*/react.createElement(SizeContext.Consumer, null, function (originSize) {
    return /*#__PURE__*/react.createElement(SizeContext.Provider, {
      value: size || originSize
    }, children);
  });
};

function canUseDom() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}

// Event wrapper. Copy from react source code

function makePrefixMap(styleProp, eventName) {
  var prefixes = {};
  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
  prefixes["Webkit".concat(styleProp)] = "webkit".concat(eventName);
  prefixes["Moz".concat(styleProp)] = "moz".concat(eventName);
  prefixes["ms".concat(styleProp)] = "MS".concat(eventName);
  prefixes["O".concat(styleProp)] = "o".concat(eventName.toLowerCase());
  return prefixes;
}

function getVendorPrefixes(domSupport, win) {
  var prefixes = {
    animationend: makePrefixMap('Animation', 'AnimationEnd'),
    transitionend: makePrefixMap('Transition', 'TransitionEnd')
  };

  if (domSupport) {
    if (!('AnimationEvent' in win)) {
      delete prefixes.animationend.animation;
    }

    if (!('TransitionEvent' in win)) {
      delete prefixes.transitionend.transition;
    }
  }

  return prefixes;
}
var vendorPrefixes = getVendorPrefixes(canUseDom(), typeof window !== 'undefined' ? window : {});
var style = {};

if (canUseDom()) {
  var _document$createEleme = document.createElement('div');

  style = _document$createEleme.style;
}

var prefixedEventNames = {};
function getVendorPrefixedEventName(eventName) {
  if (prefixedEventNames[eventName]) {
    return prefixedEventNames[eventName];
  }

  var prefixMap = vendorPrefixes[eventName];

  if (prefixMap) {
    var stylePropList = Object.keys(prefixMap);
    var len = stylePropList.length;

    for (var i = 0; i < len; i += 1) {
      var styleProp = stylePropList[i];

      if (Object.prototype.hasOwnProperty.call(prefixMap, styleProp) && styleProp in style) {
        prefixedEventNames[eventName] = prefixMap[styleProp];
        return prefixedEventNames[eventName];
      }
    }
  }

  return '';
}
var internalAnimationEndName = getVendorPrefixedEventName('animationend');
var internalTransitionEndName = getVendorPrefixedEventName('transitionend');
var supportTransition = !!(internalAnimationEndName && internalTransitionEndName);
var animationEndName = internalAnimationEndName || 'animationend';
var transitionEndName = internalTransitionEndName || 'transitionend';
function getTransitionName$1(transitionName, transitionType) {
  if (!transitionName) return null;

  if (_typeof$1(transitionName) === 'object') {
    var type = transitionType.replace(/-\w/g, function (match) {
      return match[1].toUpperCase();
    });
    return transitionName[type];
  }

  return "".concat(transitionName, "-").concat(transitionType);
}

var STATUS_NONE = 'none';
var STATUS_APPEAR = 'appear';
var STATUS_ENTER = 'enter';
var STATUS_LEAVE = 'leave';
var STEP_NONE = 'none';
var STEP_PREPARE = 'prepare';
var STEP_START = 'start';
var STEP_ACTIVE = 'active';
var STEP_ACTIVATED = 'end';

function useMountStatus(defaultValue) {
  var destroyRef = react.useRef(false);

  var _useState = react.useState(defaultValue),
      _useState2 = _slicedToArray(_useState, 2),
      val = _useState2[0],
      setVal = _useState2[1];

  function setValue(next) {
    if (!destroyRef.current) {
      setVal(next);
    }
  }

  react.useEffect(function () {
    return function () {
      destroyRef.current = true;
    };
  }, []);
  return [val, setValue];
}

var useIsomorphicLayoutEffect = canUseDom() ? react.useLayoutEffect : react.useEffect;

var raf = function raf(callback) {
  return +setTimeout(callback, 16);
};

var caf = function caf(num) {
  return clearTimeout(num);
};

if (typeof window !== 'undefined' && 'requestAnimationFrame' in window) {
  raf = function raf(callback) {
    return window.requestAnimationFrame(callback);
  };

  caf = function caf(handle) {
    return window.cancelAnimationFrame(handle);
  };
}

var rafUUID = 0;
var rafIds = new Map();

function cleanup(id) {
  rafIds.delete(id);
}

function wrapperRaf$1(callback) {
  var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  rafUUID += 1;
  var id = rafUUID;

  function callRef(leftTimes) {
    if (leftTimes === 0) {
      // Clean up
      cleanup(id); // Trigger

      callback();
    } else {
      // Next raf
      var realId = raf(function () {
        callRef(leftTimes - 1);
      }); // Bind real raf id

      rafIds.set(id, realId);
    }
  }

  callRef(times);
  return id;
}

wrapperRaf$1.cancel = function (id) {
  var realId = rafIds.get(id);
  cleanup(realId);
  return caf(realId);
};

var useNextFrame = (function () {
  var nextFrameRef = react.useRef(null);

  function cancelNextFrame() {
    wrapperRaf$1.cancel(nextFrameRef.current);
  }

  function nextFrame(callback) {
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    cancelNextFrame();
    var nextFrameId = wrapperRaf$1(function () {
      if (delay <= 1) {
        callback({
          isCanceled: function isCanceled() {
            return nextFrameId !== nextFrameRef.current;
          }
        });
      } else {
        nextFrame(callback, delay - 1);
      }
    });
    nextFrameRef.current = nextFrameId;
  }

  react.useEffect(function () {
    return function () {
      cancelNextFrame();
    };
  }, []);
  return [nextFrame, cancelNextFrame];
});

var STEP_QUEUE = [STEP_PREPARE, STEP_START, STEP_ACTIVE, STEP_ACTIVATED];
/** Skip current step */

var SkipStep = false;
/** Current step should be update in */

var DoStep = true;
function isActive(step) {
  return step === STEP_ACTIVE || step === STEP_ACTIVATED;
}
var useStepQueue = (function (status, callback) {
  var _React$useState = react.useState(STEP_NONE),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      step = _React$useState2[0],
      setStep = _React$useState2[1];

  var _useNextFrame = useNextFrame(),
      _useNextFrame2 = _slicedToArray(_useNextFrame, 2),
      nextFrame = _useNextFrame2[0],
      cancelNextFrame = _useNextFrame2[1];

  function startQueue() {
    setStep(STEP_PREPARE);
  }

  useIsomorphicLayoutEffect(function () {
    if (step !== STEP_NONE && step !== STEP_ACTIVATED) {
      var index = STEP_QUEUE.indexOf(step);
      var nextStep = STEP_QUEUE[index + 1];
      var result = callback(step);

      if (result === SkipStep) {
        // Skip when no needed
        setStep(nextStep);
      } else {
        // Do as frame for step update
        nextFrame(function (info) {
          function doNext() {
            // Skip since current queue is ood
            if (info.isCanceled()) return;
            setStep(nextStep);
          }

          if (result === true) {
            doNext();
          } else {
            // Only promise should be async
            Promise.resolve(result).then(doNext);
          }
        });
      }
    }
  }, [status, step]);
  react.useEffect(function () {
    return function () {
      cancelNextFrame();
    };
  }, []);
  return [startQueue, step];
});

var useDomMotionEvents = (function (callback) {
  var cacheElementRef = react.useRef(); // Cache callback

  var callbackRef = react.useRef(callback);
  callbackRef.current = callback; // Internal motion event handler

  var onInternalMotionEnd = react.useCallback(function (event) {
    callbackRef.current(event);
  }, []); // Remove events

  function removeMotionEvents(element) {
    if (element) {
      element.removeEventListener(transitionEndName, onInternalMotionEnd);
      element.removeEventListener(animationEndName, onInternalMotionEnd);
    }
  } // Patch events


  function patchMotionEvents(element) {
    if (cacheElementRef.current && cacheElementRef.current !== element) {
      removeMotionEvents(cacheElementRef.current);
    }

    if (element && element !== cacheElementRef.current) {
      element.addEventListener(transitionEndName, onInternalMotionEnd);
      element.addEventListener(animationEndName, onInternalMotionEnd); // Save as cache in case dom removed trigger by `motionDeadline`

      cacheElementRef.current = element;
    }
  } // Clean up when removed


  react.useEffect(function () {
    return function () {
      removeMotionEvents(cacheElementRef.current);
    };
  }, []);
  return [patchMotionEvents, removeMotionEvents];
});

function useStatus(supportMotion, visible, getElement, _ref) {
  var _ref$motionEnter = _ref.motionEnter,
      motionEnter = _ref$motionEnter === void 0 ? true : _ref$motionEnter,
      _ref$motionAppear = _ref.motionAppear,
      motionAppear = _ref$motionAppear === void 0 ? true : _ref$motionAppear,
      _ref$motionLeave = _ref.motionLeave,
      motionLeave = _ref$motionLeave === void 0 ? true : _ref$motionLeave,
      motionDeadline = _ref.motionDeadline,
      motionLeaveImmediately = _ref.motionLeaveImmediately,
      onAppearPrepare = _ref.onAppearPrepare,
      onEnterPrepare = _ref.onEnterPrepare,
      onLeavePrepare = _ref.onLeavePrepare,
      onAppearStart = _ref.onAppearStart,
      onEnterStart = _ref.onEnterStart,
      onLeaveStart = _ref.onLeaveStart,
      onAppearActive = _ref.onAppearActive,
      onEnterActive = _ref.onEnterActive,
      onLeaveActive = _ref.onLeaveActive,
      onAppearEnd = _ref.onAppearEnd,
      onEnterEnd = _ref.onEnterEnd,
      onLeaveEnd = _ref.onLeaveEnd,
      onVisibleChanged = _ref.onVisibleChanged;

  // Used for outer render usage to avoid `visible: false & status: none` to render nothing
  var _useState = useMountStatus(),
      _useState2 = _slicedToArray(_useState, 2),
      asyncVisible = _useState2[0],
      setAsyncVisible = _useState2[1];

  var _useState3 = useMountStatus(STATUS_NONE),
      _useState4 = _slicedToArray(_useState3, 2),
      status = _useState4[0],
      setStatus = _useState4[1];

  var _useState5 = useMountStatus(null),
      _useState6 = _slicedToArray(_useState5, 2),
      style = _useState6[0],
      setStyle = _useState6[1];

  var mountedRef = react.useRef(false);
  var deadlineRef = react.useRef(null);
  var destroyedRef = react.useRef(false); // =========================== Dom Node ===========================

  var cacheElementRef = react.useRef(null);

  function getDomElement() {
    var element = getElement();
    return element || cacheElementRef.current;
  } // ========================== Motion End ==========================


  var activeRef = react.useRef(false);

  function onInternalMotionEnd(event) {
    var element = getDomElement();

    if (event && !event.deadline && event.target !== element) {
      // event exists
      // not initiated by deadline
      // transitionEnd not fired by inner elements
      return;
    }

    var canEnd;

    if (status === STATUS_APPEAR && activeRef.current) {
      canEnd = onAppearEnd === null || onAppearEnd === void 0 ? void 0 : onAppearEnd(element, event);
    } else if (status === STATUS_ENTER && activeRef.current) {
      canEnd = onEnterEnd === null || onEnterEnd === void 0 ? void 0 : onEnterEnd(element, event);
    } else if (status === STATUS_LEAVE && activeRef.current) {
      canEnd = onLeaveEnd === null || onLeaveEnd === void 0 ? void 0 : onLeaveEnd(element, event);
    } // Only update status when `canEnd` and not destroyed


    if (canEnd !== false && !destroyedRef.current) {
      setStatus(STATUS_NONE);
      setStyle(null);
    }
  }

  var _useDomMotionEvents = useDomMotionEvents(onInternalMotionEnd),
      _useDomMotionEvents2 = _slicedToArray(_useDomMotionEvents, 1),
      patchMotionEvents = _useDomMotionEvents2[0]; // ============================= Step =============================


  var eventHandlers = react.useMemo(function () {
    var _ref2, _ref3, _ref4;

    switch (status) {
      case 'appear':
        return _ref2 = {}, _defineProperty$1(_ref2, STEP_PREPARE, onAppearPrepare), _defineProperty$1(_ref2, STEP_START, onAppearStart), _defineProperty$1(_ref2, STEP_ACTIVE, onAppearActive), _ref2;

      case 'enter':
        return _ref3 = {}, _defineProperty$1(_ref3, STEP_PREPARE, onEnterPrepare), _defineProperty$1(_ref3, STEP_START, onEnterStart), _defineProperty$1(_ref3, STEP_ACTIVE, onEnterActive), _ref3;

      case 'leave':
        return _ref4 = {}, _defineProperty$1(_ref4, STEP_PREPARE, onLeavePrepare), _defineProperty$1(_ref4, STEP_START, onLeaveStart), _defineProperty$1(_ref4, STEP_ACTIVE, onLeaveActive), _ref4;

      default:
        return {};
    }
  }, [status]);

  var _useStepQueue = useStepQueue(status, function (newStep) {
    // Only prepare step can be skip
    if (newStep === STEP_PREPARE) {
      var onPrepare = eventHandlers[STEP_PREPARE];

      if (!onPrepare) {
        return SkipStep;
      }

      return onPrepare(getDomElement());
    } // Rest step is sync update


    // Rest step is sync update
    if (step in eventHandlers) {
      var _eventHandlers$step;

      setStyle(((_eventHandlers$step = eventHandlers[step]) === null || _eventHandlers$step === void 0 ? void 0 : _eventHandlers$step.call(eventHandlers, getDomElement(), null)) || null);
    }

    if (step === STEP_ACTIVE) {
      // Patch events when motion needed
      patchMotionEvents(getDomElement());

      if (motionDeadline > 0) {
        clearTimeout(deadlineRef.current);
        deadlineRef.current = setTimeout(function () {
          onInternalMotionEnd({
            deadline: true
          });
        }, motionDeadline);
      }
    }

    return DoStep;
  }),
      _useStepQueue2 = _slicedToArray(_useStepQueue, 2),
      startStep = _useStepQueue2[0],
      step = _useStepQueue2[1];

  var active = isActive(step);
  activeRef.current = active; // ============================ Status ============================
  // Update with new status

  useIsomorphicLayoutEffect(function () {
    setAsyncVisible(visible);
    var isMounted = mountedRef.current;
    mountedRef.current = true;

    if (!supportMotion) {
      return;
    }

    var nextStatus; // Appear

    if (!isMounted && visible && motionAppear) {
      nextStatus = STATUS_APPEAR;
    } // Enter


    if (isMounted && visible && motionEnter) {
      nextStatus = STATUS_ENTER;
    } // Leave


    if (isMounted && !visible && motionLeave || !isMounted && motionLeaveImmediately && !visible && motionLeave) {
      nextStatus = STATUS_LEAVE;
    } // Update to next status


    if (nextStatus) {
      setStatus(nextStatus);
      startStep();
    }
  }, [visible]); // ============================ Effect ============================
  // Reset when motion changed

  react.useEffect(function () {
    if ( // Cancel appear
    status === STATUS_APPEAR && !motionAppear || // Cancel enter
    status === STATUS_ENTER && !motionEnter || // Cancel leave
    status === STATUS_LEAVE && !motionLeave) {
      setStatus(STATUS_NONE);
    }
  }, [motionAppear, motionEnter, motionLeave]);
  react.useEffect(function () {
    return function () {
      clearTimeout(deadlineRef.current);
      destroyedRef.current = true;
    };
  }, []); // Trigger `onVisibleChanged`

  react.useEffect(function () {
    if (asyncVisible !== undefined && status === STATUS_NONE) {
      onVisibleChanged === null || onVisibleChanged === void 0 ? void 0 : onVisibleChanged(asyncVisible);
    }
  }, [asyncVisible, status]); // ============================ Styles ============================

  var mergedStyle = style;

  if (eventHandlers[STEP_PREPARE] && step === STEP_START) {
    mergedStyle = _objectSpread2$1({
      transition: 'none'
    }, mergedStyle);
  }

  return [status, step, mergedStyle, asyncVisible !== null && asyncVisible !== void 0 ? asyncVisible : visible];
}

var DomWrapper = /*#__PURE__*/function (_React$Component) {
  _inherits(DomWrapper, _React$Component);

  var _super = _createSuper(DomWrapper);

  function DomWrapper() {
    _classCallCheck(this, DomWrapper);

    return _super.apply(this, arguments);
  }

  _createClass(DomWrapper, [{
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return DomWrapper;
}(react.Component);

/**
 * `transitionSupport` is used for none transition test case.
 * Default we use browser transition event support check.
 */

function genCSSMotion(config) {
  var transitionSupport = config;

  if (_typeof$1(config) === 'object') {
    transitionSupport = config.transitionSupport;
  }

  function isSupportTransition(props) {
    return !!(props.motionName && transitionSupport);
  }

  var CSSMotion = /*#__PURE__*/react.forwardRef(function (props, ref) {
    var _props$visible = props.visible,
        visible = _props$visible === void 0 ? true : _props$visible,
        _props$removeOnLeave = props.removeOnLeave,
        removeOnLeave = _props$removeOnLeave === void 0 ? true : _props$removeOnLeave,
        forceRender = props.forceRender,
        children = props.children,
        motionName = props.motionName,
        leavedClassName = props.leavedClassName,
        eventProps = props.eventProps;
    var supportMotion = isSupportTransition(props); // Ref to the react node, it may be a HTMLElement

    var nodeRef = react.useRef(); // Ref to the dom wrapper in case ref can not pass to HTMLElement

    var wrapperNodeRef = react.useRef();

    function getDomElement() {
      try {
        return findDOMNode(nodeRef.current || wrapperNodeRef.current);
      } catch (e) {
        // Only happen when `motionDeadline` trigger but element removed.
        return null;
      }
    }

    var _useStatus = useStatus(supportMotion, visible, getDomElement, props),
        _useStatus2 = _slicedToArray(_useStatus, 4),
        status = _useStatus2[0],
        statusStep = _useStatus2[1],
        statusStyle = _useStatus2[2],
        mergedVisible = _useStatus2[3]; // Record whether content has rended
    // Will return null for un-rendered even when `removeOnLeave={false}`


    var renderedRef = react.useRef(mergedVisible);

    if (mergedVisible) {
      renderedRef.current = true;
    } // ====================== Refs ======================


    var originRef = react.useRef(ref);
    originRef.current = ref;
    var setNodeRef = react.useCallback(function (node) {
      nodeRef.current = node;
      fillRef(originRef.current, node);
    }, []); // ===================== Render =====================

    var motionChildren;

    var mergedProps = _objectSpread2$1(_objectSpread2$1({}, eventProps), {}, {
      visible: visible
    });

    if (!children) {
      // No children
      motionChildren = null;
    } else if (status === STATUS_NONE || !isSupportTransition(props)) {
      // Stable children
      if (mergedVisible) {
        motionChildren = children(_objectSpread2$1({}, mergedProps), setNodeRef);
      } else if (!removeOnLeave && renderedRef.current) {
        motionChildren = children(_objectSpread2$1(_objectSpread2$1({}, mergedProps), {}, {
          className: leavedClassName
        }), setNodeRef);
      } else if (forceRender) {
        motionChildren = children(_objectSpread2$1(_objectSpread2$1({}, mergedProps), {}, {
          style: {
            display: 'none'
          }
        }), setNodeRef);
      } else {
        motionChildren = null;
      }
    } else {
      var _classNames;

      // In motion
      var statusSuffix;

      if (statusStep === STEP_PREPARE) {
        statusSuffix = 'prepare';
      } else if (isActive(statusStep)) {
        statusSuffix = 'active';
      } else if (statusStep === STEP_START) {
        statusSuffix = 'start';
      }

      motionChildren = children(_objectSpread2$1(_objectSpread2$1({}, mergedProps), {}, {
        className: classnames(getTransitionName$1(motionName, status), (_classNames = {}, _defineProperty$1(_classNames, getTransitionName$1(motionName, "".concat(status, "-").concat(statusSuffix)), statusSuffix), _defineProperty$1(_classNames, motionName, typeof motionName === 'string'), _classNames)),
        style: statusStyle
      }), setNodeRef);
    }

    return /*#__PURE__*/react.createElement(DomWrapper, {
      ref: wrapperNodeRef
    }, motionChildren);
  });
  CSSMotion.displayName = 'CSSMotion';
  return CSSMotion;
}
var CSSMotion = genCSSMotion(supportTransition);

var STATUS_ADD = 'add';
var STATUS_KEEP = 'keep';
var STATUS_REMOVE = 'remove';
var STATUS_REMOVED = 'removed';
function wrapKeyToObject(key) {
  var keyObj;

  if (key && _typeof$1(key) === 'object' && 'key' in key) {
    keyObj = key;
  } else {
    keyObj = {
      key: key
    };
  }

  return _objectSpread2$1(_objectSpread2$1({}, keyObj), {}, {
    key: String(keyObj.key)
  });
}
function parseKeys() {
  var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return keys.map(wrapKeyToObject);
}
function diffKeys() {
  var prevKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var currentKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var list = [];
  var currentIndex = 0;
  var currentLen = currentKeys.length;
  var prevKeyObjects = parseKeys(prevKeys);
  var currentKeyObjects = parseKeys(currentKeys); // Check prev keys to insert or keep

  prevKeyObjects.forEach(function (keyObj) {
    var hit = false;

    for (var i = currentIndex; i < currentLen; i += 1) {
      var currentKeyObj = currentKeyObjects[i];

      if (currentKeyObj.key === keyObj.key) {
        // New added keys should add before current key
        if (currentIndex < i) {
          list = list.concat(currentKeyObjects.slice(currentIndex, i).map(function (obj) {
            return _objectSpread2$1(_objectSpread2$1({}, obj), {}, {
              status: STATUS_ADD
            });
          }));
          currentIndex = i;
        }

        list.push(_objectSpread2$1(_objectSpread2$1({}, currentKeyObj), {}, {
          status: STATUS_KEEP
        }));
        currentIndex += 1;
        hit = true;
        break;
      }
    } // If not hit, it means key is removed


    if (!hit) {
      list.push(_objectSpread2$1(_objectSpread2$1({}, keyObj), {}, {
        status: STATUS_REMOVE
      }));
    }
  }); // Add rest to the list

  if (currentIndex < currentLen) {
    list = list.concat(currentKeyObjects.slice(currentIndex).map(function (obj) {
      return _objectSpread2$1(_objectSpread2$1({}, obj), {}, {
        status: STATUS_ADD
      });
    }));
  }
  /**
   * Merge same key when it remove and add again:
   *    [1 - add, 2 - keep, 1 - remove] -> [1 - keep, 2 - keep]
   */


  var keys = {};
  list.forEach(function (_ref) {
    var key = _ref.key;
    keys[key] = (keys[key] || 0) + 1;
  });
  var duplicatedKeys = Object.keys(keys).filter(function (key) {
    return keys[key] > 1;
  });
  duplicatedKeys.forEach(function (matchKey) {
    // Remove `STATUS_REMOVE` node.
    list = list.filter(function (_ref2) {
      var key = _ref2.key,
          status = _ref2.status;
      return key !== matchKey || status !== STATUS_REMOVE;
    }); // Update `STATUS_ADD` to `STATUS_KEEP`

    list.forEach(function (node) {
      if (node.key === matchKey) {
        // eslint-disable-next-line no-param-reassign
        node.status = STATUS_KEEP;
      }
    });
  });
  return list;
}

var MOTION_PROP_NAMES = ['eventProps', 'visible', 'children', 'motionName', 'motionAppear', 'motionEnter', 'motionLeave', 'motionLeaveImmediately', 'motionDeadline', 'removeOnLeave', 'leavedClassName', 'onAppearStart', 'onAppearActive', 'onAppearEnd', 'onEnterStart', 'onEnterActive', 'onEnterEnd', 'onLeaveStart', 'onLeaveActive', 'onLeaveEnd'];
/**
 * Generate a CSSMotionList component with config
 * @param transitionSupport No need since CSSMotionList no longer depends on transition support
 * @param CSSMotion CSSMotion component
 */

function genCSSMotionList(transitionSupport) {
  var CSSMotion$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CSSMotion;

  var CSSMotionList = /*#__PURE__*/function (_React$Component) {
    _inherits(CSSMotionList, _React$Component);

    var _super = _createSuper(CSSMotionList);

    function CSSMotionList() {
      var _this;

      _classCallCheck(this, CSSMotionList);

      _this = _super.apply(this, arguments);
      _this.state = {
        keyEntities: []
      };

      _this.removeKey = function (removeKey) {
        _this.setState(function (_ref) {
          var keyEntities = _ref.keyEntities;
          return {
            keyEntities: keyEntities.map(function (entity) {
              if (entity.key !== removeKey) return entity;
              return _objectSpread2$1(_objectSpread2$1({}, entity), {}, {
                status: STATUS_REMOVED
              });
            })
          };
        });
      };

      return _this;
    }

    _createClass(CSSMotionList, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var keyEntities = this.state.keyEntities;

        var _this$props = this.props,
            component = _this$props.component,
            children = _this$props.children,
            _onVisibleChanged = _this$props.onVisibleChanged,
            restProps = _objectWithoutProperties(_this$props, ["component", "children", "onVisibleChanged"]);

        var Component = component || react.Fragment;
        var motionProps = {};
        MOTION_PROP_NAMES.forEach(function (prop) {
          motionProps[prop] = restProps[prop];
          delete restProps[prop];
        });
        delete restProps.keys;
        return /*#__PURE__*/react.createElement(Component, restProps, keyEntities.map(function (_ref2) {
          var status = _ref2.status,
              eventProps = _objectWithoutProperties(_ref2, ["status"]);

          var visible = status === STATUS_ADD || status === STATUS_KEEP;
          return /*#__PURE__*/react.createElement(CSSMotion$1, _extends$1({}, motionProps, {
            key: eventProps.key,
            visible: visible,
            eventProps: eventProps,
            onVisibleChanged: function onVisibleChanged(changedVisible) {
              _onVisibleChanged === null || _onVisibleChanged === void 0 ? void 0 : _onVisibleChanged(changedVisible, {
                key: eventProps.key
              });

              if (!changedVisible) {
                _this2.removeKey(eventProps.key);
              }
            }
          }), children);
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(_ref3, _ref4) {
        var keys = _ref3.keys;
        var keyEntities = _ref4.keyEntities;
        var parsedKeyObjects = parseKeys(keys);
        var mixedKeyEntities = diffKeys(keyEntities, parsedKeyObjects);
        return {
          keyEntities: mixedKeyEntities.filter(function (entity) {
            var prevEntity = keyEntities.find(function (_ref5) {
              var key = _ref5.key;
              return entity.key === key;
            }); // Remove if already mark as removed

            if (prevEntity && prevEntity.status === STATUS_REMOVED && entity.status === STATUS_REMOVE) {
              return false;
            }

            return true;
          })
        };
      }
    }]);

    return CSSMotionList;
  }(react.Component);

  CSSMotionList.defaultProps = {
    component: 'div'
  };
  return CSSMotionList;
}
var CSSMotionList = genCSSMotionList(supportTransition);

var Notice = /*#__PURE__*/function (_Component) {
  _inherits(Notice, _Component);

  var _super = _createSuper(Notice);

  function Notice() {
    var _this;

    _classCallCheck(this, Notice);

    _this = _super.apply(this, arguments);
    _this.closeTimer = null;

    _this.close = function (e) {
      if (e) {
        e.stopPropagation();
      }

      _this.clearCloseTimer();

      var _this$props = _this.props,
          onClose = _this$props.onClose,
          noticeKey = _this$props.noticeKey;

      if (onClose) {
        onClose(noticeKey);
      }
    };

    _this.startCloseTimer = function () {
      if (_this.props.duration) {
        _this.closeTimer = window.setTimeout(function () {
          _this.close();
        }, _this.props.duration * 1000);
      }
    };

    _this.clearCloseTimer = function () {
      if (_this.closeTimer) {
        clearTimeout(_this.closeTimer);
        _this.closeTimer = null;
      }
    };

    return _this;
  }

  _createClass(Notice, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startCloseTimer();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.duration !== prevProps.duration || this.props.updateMark !== prevProps.updateMark) {
        this.restartCloseTimer();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearCloseTimer();
    }
  }, {
    key: "restartCloseTimer",
    value: function restartCloseTimer() {
      this.clearCloseTimer();
      this.startCloseTimer();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          className = _this$props2.className,
          closable = _this$props2.closable,
          closeIcon = _this$props2.closeIcon,
          style = _this$props2.style,
          onClick = _this$props2.onClick,
          children = _this$props2.children,
          holder = _this$props2.holder;
      var componentClass = "".concat(prefixCls, "-notice");
      var dataOrAriaAttributeProps = Object.keys(this.props).reduce(function (acc, key) {
        if (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-' || key === 'role') {
          acc[key] = _this2.props[key];
        }

        return acc;
      }, {});
      var node = /*#__PURE__*/react.createElement("div", _extends$1({
        className: classnames(componentClass, className, _defineProperty$1({}, "".concat(componentClass, "-closable"), closable)),
        style: style,
        onMouseEnter: this.clearCloseTimer,
        onMouseLeave: this.startCloseTimer,
        onClick: onClick
      }, dataOrAriaAttributeProps), /*#__PURE__*/react.createElement("div", {
        className: "".concat(componentClass, "-content")
      }, children), closable ? /*#__PURE__*/react.createElement("a", {
        tabIndex: 0,
        onClick: this.close,
        className: "".concat(componentClass, "-close")
      }, closeIcon || /*#__PURE__*/react.createElement("span", {
        className: "".concat(componentClass, "-close-x")
      })) : null);

      if (holder) {
        return /*#__PURE__*/reactDom.createPortal(node, holder);
      }

      return node;
    }
  }]);

  return Notice;
}(react.Component);
Notice.defaultProps = {
  onClose: function onClose() {},
  duration: 1.5
};

function useNotification(notificationInstance) {
  var createdRef = react.useRef({});

  var _React$useState = react.useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      elements = _React$useState2[0],
      setElements = _React$useState2[1];

  function notify(noticeProps) {
    var firstMount = true;
    notificationInstance.add(noticeProps, function (div, props) {
      var key = props.key;

      if (div && (!createdRef.current[key] || firstMount)) {
        var noticeEle = /*#__PURE__*/react.createElement(Notice, _extends$1({}, props, {
          holder: div
        }));
        createdRef.current[key] = noticeEle;
        setElements(function (originElements) {
          var index = originElements.findIndex(function (ele) {
            return ele.key === props.key;
          });

          if (index === -1) {
            return [].concat(_toConsumableArray(originElements), [noticeEle]);
          }

          var cloneList = _toConsumableArray(originElements);

          cloneList[index] = noticeEle;
          return cloneList;
        });
      }

      firstMount = false;
    });
  }

  return [notify, /*#__PURE__*/react.createElement(react.Fragment, null, elements)];
}

var seed = 0;
var now = Date.now();

function getUuid() {
  var id = seed;
  seed += 1;
  return "rcNotification_".concat(now, "_").concat(id);
}

var Notification = /*#__PURE__*/function (_Component) {
  _inherits(Notification, _Component);

  var _super = _createSuper(Notification);

  function Notification() {
    var _this;

    _classCallCheck(this, Notification);

    _this = _super.apply(this, arguments);
    _this.state = {
      notices: []
    };
    _this.hookRefs = new Map();

    _this.add = function (originNotice, holderCallback) {
      var key = originNotice.key || getUuid();

      var notice = _objectSpread2$1(_objectSpread2$1({}, originNotice), {}, {
        key: key
      });

      var maxCount = _this.props.maxCount;

      _this.setState(function (previousState) {
        var notices = previousState.notices;
        var noticeIndex = notices.map(function (v) {
          return v.notice.key;
        }).indexOf(key);
        var updatedNotices = notices.concat();

        if (noticeIndex !== -1) {
          updatedNotices.splice(noticeIndex, 1, {
            notice: notice,
            holderCallback: holderCallback
          });
        } else {
          if (maxCount && notices.length >= maxCount) {
            // XXX, use key of first item to update new added (let React to move exsiting
            // instead of remove and mount). Same key was used before for both a) external
            // manual control and b) internal react 'key' prop , which is not that good.
            // eslint-disable-next-line no-param-reassign
            // zombieJ: Not know why use `updateKey`. This makes Notice infinite loop in jest.
            // Change to `updateMark` for compare instead.
            // https://github.com/react-component/notification/commit/32299e6be396f94040bfa82517eea940db947ece
            notice.key = updatedNotices[0].notice.key;
            notice.updateMark = getUuid(); // zombieJ: That's why. User may close by key directly.
            // We need record this but not re-render to avoid upper issue
            // https://github.com/react-component/notification/issues/129

            notice.userPassKey = key;
            updatedNotices.shift();
          }

          updatedNotices.push({
            notice: notice,
            holderCallback: holderCallback
          });
        }

        return {
          notices: updatedNotices
        };
      });
    };

    _this.remove = function (removeKey) {
      _this.setState(function (_ref) {
        var notices = _ref.notices;
        return {
          notices: notices.filter(function (_ref2) {
            var _ref2$notice = _ref2.notice,
                key = _ref2$notice.key,
                userPassKey = _ref2$notice.userPassKey;
            var mergedKey = userPassKey || key;
            return mergedKey !== removeKey;
          })
        };
      });
    };

    _this.noticePropsMap = {};
    return _this;
  }

  _createClass(Notification, [{
    key: "getTransitionName",
    value: function getTransitionName() {
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          animation = _this$props.animation;
      var transitionName = this.props.transitionName;

      if (!transitionName && animation) {
        transitionName = "".concat(prefixCls, "-").concat(animation);
      }

      return transitionName;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var notices = this.state.notices;
      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          className = _this$props2.className,
          closeIcon = _this$props2.closeIcon,
          style = _this$props2.style;
      var noticeKeys = [];
      notices.forEach(function (_ref3, index) {
        var notice = _ref3.notice,
            holderCallback = _ref3.holderCallback;
        var updateMark = index === notices.length - 1 ? notice.updateMark : undefined;
        var key = notice.key,
            userPassKey = notice.userPassKey;

        var noticeProps = _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({
          prefixCls: prefixCls,
          closeIcon: closeIcon
        }, notice), notice.props), {}, {
          key: key,
          noticeKey: userPassKey || key,
          updateMark: updateMark,
          onClose: function onClose(noticeKey) {
            var _notice$onClose;

            _this2.remove(noticeKey);

            (_notice$onClose = notice.onClose) === null || _notice$onClose === void 0 ? void 0 : _notice$onClose.call(notice);
          },
          onClick: notice.onClick,
          children: notice.content
        }); // Give to motion


        noticeKeys.push(key);
        _this2.noticePropsMap[key] = {
          props: noticeProps,
          holderCallback: holderCallback
        };
      });
      return /*#__PURE__*/react.createElement("div", {
        className: classnames(prefixCls, className),
        style: style
      }, /*#__PURE__*/react.createElement(CSSMotionList, {
        keys: noticeKeys,
        motionName: this.getTransitionName(),
        onVisibleChanged: function onVisibleChanged(changedVisible, _ref4) {
          var key = _ref4.key;

          if (!changedVisible) {
            delete _this2.noticePropsMap[key];
          }
        }
      }, function (_ref5) {
        var key = _ref5.key,
            motionClassName = _ref5.className,
            motionStyle = _ref5.style;
        var _this2$noticePropsMap = _this2.noticePropsMap[key],
            noticeProps = _this2$noticePropsMap.props,
            holderCallback = _this2$noticePropsMap.holderCallback;

        if (holderCallback) {
          return /*#__PURE__*/react.createElement("div", {
            key: key,
            className: classnames(motionClassName, "".concat(prefixCls, "-hook-holder")),
            style: _objectSpread2$1({}, motionStyle),
            ref: function ref(div) {
              if (typeof key === 'undefined') {
                return;
              }

              if (div) {
                _this2.hookRefs.set(key, div);

                holderCallback(div, noticeProps);
              } else {
                _this2.hookRefs.delete(key);
              }
            }
          });
        }

        return /*#__PURE__*/react.createElement(Notice, _extends$1({}, noticeProps, {
          className: classnames(motionClassName, noticeProps === null || noticeProps === void 0 ? void 0 : noticeProps.className),
          style: _objectSpread2$1(_objectSpread2$1({}, motionStyle), noticeProps === null || noticeProps === void 0 ? void 0 : noticeProps.style)
        }));
      }));
    }
  }]);

  return Notification;
}(react.Component);

Notification.defaultProps = {
  prefixCls: 'rc-notification',
  animation: 'fade',
  style: {
    top: 65,
    left: '50%'
  }
};

Notification.newInstance = function newNotificationInstance(properties, callback) {
  var _ref6 = properties || {},
      getContainer = _ref6.getContainer,
      props = _objectWithoutProperties(_ref6, ["getContainer"]);

  var div = document.createElement('div');

  if (getContainer) {
    var root = getContainer();
    root.appendChild(div);
  } else {
    document.body.appendChild(div);
  }

  var called = false;

  function ref(notification) {
    if (called) {
      return;
    }

    called = true;
    callback({
      notice: function notice(noticeProps) {
        notification.add(noticeProps);
      },
      removeNotice: function removeNotice(key) {
        notification.remove(key);
      },
      component: notification,
      destroy: function destroy() {
        reactDom.unmountComponentAtNode(div);

        if (div.parentNode) {
          div.parentNode.removeChild(div);
        }
      },
      // Hooks
      useNotification: function useNotification$1() {
        return useNotification(notification);
      }
    });
  } // Only used for test case usage

  reactDom.render( /*#__PURE__*/react.createElement(Notification, _extends$1({}, props, {
    ref: ref
  })), div);
};

// This icon file is generated automatically.
var LoadingOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, "name": "loading", "theme": "outlined" };

/**
 * Take input from [0, n] and return it as [0, 1]
 * @hidden
 */
function bound01(n, max) {
    if (isOnePointZero(n)) {
        n = '100%';
    }
    var isPercent = isPercentage(n);
    n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
    // Automatically convert percentage into number
    if (isPercent) {
        n = parseInt(String(n * max), 10) / 100;
    }
    // Handle floating point rounding errors
    if (Math.abs(n - max) < 0.000001) {
        return 1;
    }
    // Convert into [0, 1] range if it isn't already
    if (max === 360) {
        // If n is a hue given in degrees,
        // wrap around out-of-range values into [0, 360] range
        // then convert into [0, 1].
        n = (n < 0 ? (n % max) + max : n % max) / parseFloat(String(max));
    }
    else {
        // If n not a hue given in degrees
        // Convert into [0, 1] range if it isn't already.
        n = (n % max) / parseFloat(String(max));
    }
    return n;
}
/**
 * Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
 * <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
 * @hidden
 */
function isOnePointZero(n) {
    return typeof n === 'string' && n.indexOf('.') !== -1 && parseFloat(n) === 1;
}
/**
 * Check to see if string passed in is a percentage
 * @hidden
 */
function isPercentage(n) {
    return typeof n === 'string' && n.indexOf('%') !== -1;
}
/**
 * Return a valid alpha value [0,1] with all invalid values being set to 1
 * @hidden
 */
function boundAlpha(a) {
    a = parseFloat(a);
    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }
    return a;
}
/**
 * Replace a decimal with it's percentage value
 * @hidden
 */
function convertToPercentage(n) {
    if (n <= 1) {
        return Number(n) * 100 + "%";
    }
    return n;
}
/**
 * Force a hex value to have 2 characters
 * @hidden
 */
function pad2(c) {
    return c.length === 1 ? '0' + c : String(c);
}

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>
/**
 * Handle bounds / percentage checking to conform to CSS color spec
 * <http://www.w3.org/TR/css3-color/>
 * *Assumes:* r, g, b in [0, 255] or [0, 1]
 * *Returns:* { r, g, b } in [0, 255]
 */
function rgbToRgb(r, g, b) {
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255,
    };
}
function hue2rgb(p, q, t) {
    if (t < 0) {
        t += 1;
    }
    if (t > 1) {
        t -= 1;
    }
    if (t < 1 / 6) {
        return p + (q - p) * (6 * t);
    }
    if (t < 1 / 2) {
        return q;
    }
    if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
}
/**
 * Converts an HSL color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hslToRgb(h, s, l) {
    var r;
    var g;
    var b;
    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);
    if (s === 0) {
        // achromatic
        g = l;
        b = l;
        r = l;
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color value to HSV
 *
 * *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
 * *Returns:* { h, s, v } in [0,1]
 */
function rgbToHsv(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var v = max;
    var d = max - min;
    var s = max === 0 ? 0 : d / max;
    if (max === min) {
        h = 0; // achromatic
    }
    else {
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}
/**
 * Converts an HSV color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hsvToRgb(h, s, v) {
    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);
    var i = Math.floor(h);
    var f = h - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);
    var mod = i % 6;
    var r = [v, q, p, p, t, v][mod];
    var g = [t, v, v, q, p, p][mod];
    var b = [p, p, t, v, v, q][mod];
    return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color to hex
 *
 * Assumes r, g, and b are contained in the set [0, 255]
 * Returns a 3 or 6 character hex
 */
function rgbToHex(r, g, b, allow3Char) {
    var hex = [
        pad2(Math.round(r).toString(16)),
        pad2(Math.round(g).toString(16)),
        pad2(Math.round(b).toString(16)),
    ];
    // Return a 3 character hex if possible
    if (allow3Char &&
        hex[0].startsWith(hex[0].charAt(1)) &&
        hex[1].startsWith(hex[1].charAt(1)) &&
        hex[2].startsWith(hex[2].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }
    return hex.join('');
}
/** Converts a hex value to a decimal */
function convertHexToDecimal(h) {
    return parseIntFromHex(h) / 255;
}
/** Parse a base-16 hex value into a base-10 integer */
function parseIntFromHex(val) {
    return parseInt(val, 16);
}

// https://github.com/bahamas10/css-color-names/blob/master/css-color-names.json
/**
 * @hidden
 */
var names = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    goldenrod: '#daa520',
    gold: '#ffd700',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavenderblush: '#fff0f5',
    lavender: '#e6e6fa',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32',
};

/**
 * Given a string or object, convert that input to RGB
 *
 * Possible string inputs:
 * ```
 * "red"
 * "#f00" or "f00"
 * "#ff0000" or "ff0000"
 * "#ff000000" or "ff000000"
 * "rgb 255 0 0" or "rgb (255, 0, 0)"
 * "rgb 1.0 0 0" or "rgb (1, 0, 0)"
 * "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
 * "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
 * "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
 * "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
 * "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
 * ```
 */
function inputToRGB(color) {
    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;
    if (typeof color === 'string') {
        color = stringInputToObject(color);
    }
    if (typeof color === 'object') {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === '%' ? 'prgb' : 'rgb';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = 'hsv';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = 'hsl';
        }
        if (Object.prototype.hasOwnProperty.call(color, 'a')) {
            a = color.a;
        }
    }
    a = boundAlpha(a);
    return {
        ok: ok,
        format: color.format || format,
        r: Math.min(255, Math.max(rgb.r, 0)),
        g: Math.min(255, Math.max(rgb.g, 0)),
        b: Math.min(255, Math.max(rgb.b, 0)),
        a: a,
    };
}
// <http://www.w3.org/TR/css3-values/#integers>
var CSS_INTEGER = '[-\\+]?\\d+%?';
// <http://www.w3.org/TR/css3-values/#number-value>
var CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?';
// Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
// Actual matching.
// Parentheses and commas are optional, but not required.
// Whitespace can take the place of commas or opening paren
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
var matchers = {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp('rgb' + PERMISSIVE_MATCH3),
    rgba: new RegExp('rgba' + PERMISSIVE_MATCH4),
    hsl: new RegExp('hsl' + PERMISSIVE_MATCH3),
    hsla: new RegExp('hsla' + PERMISSIVE_MATCH4),
    hsv: new RegExp('hsv' + PERMISSIVE_MATCH3),
    hsva: new RegExp('hsva' + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
};
/**
 * Permissive string parsing.  Take in a number of formats, and output an object
 * based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
 */
function stringInputToObject(color) {
    color = color.trim().toLowerCase();
    if (color.length === 0) {
        return false;
    }
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color === 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
    }
    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match = matchers.rgb.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    match = matchers.rgba.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    match = matchers.hsl.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    match = matchers.hsla.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    match = matchers.hsv.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    match = matchers.hsva.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    match = matchers.hex8.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex6.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    match = matchers.hex4.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1] + match[1]),
            g: parseIntFromHex(match[2] + match[2]),
            b: parseIntFromHex(match[3] + match[3]),
            a: convertHexToDecimal(match[4] + match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex3.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1] + match[1]),
            g: parseIntFromHex(match[2] + match[2]),
            b: parseIntFromHex(match[3] + match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    return false;
}
/**
 * Check to see if it looks like a CSS unit
 * (see `matchers` above for definition).
 */
function isValidCSSUnit(color) {
    return Boolean(matchers.CSS_UNIT.exec(String(color)));
}

var hueStep = 2; // 色相阶梯

var saturationStep = 0.16; // 饱和度阶梯，浅色部分

var saturationStep2 = 0.05; // 饱和度阶梯，深色部分

var brightnessStep1 = 0.05; // 亮度阶梯，浅色部分

var brightnessStep2 = 0.15; // 亮度阶梯，深色部分

var lightColorCount = 5; // 浅色数量，主色上

var darkColorCount = 4; // 深色数量，主色下
// 暗色主题颜色映射关系表

var darkColorMap = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}]; // Wrapper function ported from TinyColor.prototype.toHsv
// Keep it here because of `hsv.h * 360`

function toHsv(_ref) {
  var r = _ref.r,
      g = _ref.g,
      b = _ref.b;
  var hsv = rgbToHsv(r, g, b);
  return {
    h: hsv.h * 360,
    s: hsv.s,
    v: hsv.v
  };
} // Wrapper function ported from TinyColor.prototype.toHexString
// Keep it here because of the prefix `#`


function toHex(_ref2) {
  var r = _ref2.r,
      g = _ref2.g,
      b = _ref2.b;
  return "#".concat(rgbToHex(r, g, b, false));
} // Wrapper function ported from TinyColor.prototype.mix, not treeshakable.
// Amount in range [0, 1]
// Assume color1 & color2 has no alpha, since the following src code did so.


function mix$1(rgb1, rgb2, amount) {
  var p = amount / 100;
  var rgb = {
    r: (rgb2.r - rgb1.r) * p + rgb1.r,
    g: (rgb2.g - rgb1.g) * p + rgb1.g,
    b: (rgb2.b - rgb1.b) * p + rgb1.b
  };
  return rgb;
}

function getHue(hsv, i, light) {
  var hue; // 根据色相不同，色相转向不同

  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
  } else {
    hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
  }

  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }

  return hue;
}

function getSaturation(hsv, i, light) {
  // grey color don't change saturation
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }

  var saturation;

  if (light) {
    saturation = hsv.s - saturationStep * i;
  } else if (i === darkColorCount) {
    saturation = hsv.s + saturationStep;
  } else {
    saturation = hsv.s + saturationStep2 * i;
  } // 边界值修正


  if (saturation > 1) {
    saturation = 1;
  } // 第一格的 s 限制在 0.06-0.1 之间


  if (light && i === lightColorCount && saturation > 0.1) {
    saturation = 0.1;
  }

  if (saturation < 0.06) {
    saturation = 0.06;
  }

  return Number(saturation.toFixed(2));
}

function getValue$1(hsv, i, light) {
  var value;

  if (light) {
    value = hsv.v + brightnessStep1 * i;
  } else {
    value = hsv.v - brightnessStep2 * i;
  }

  if (value > 1) {
    value = 1;
  }

  return Number(value.toFixed(2));
}

function generate$1(color) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var patterns = [];
  var pColor = inputToRGB(color);

  for (var i = lightColorCount; i > 0; i -= 1) {
    var hsv = toHsv(pColor);
    var colorString = toHex(inputToRGB({
      h: getHue(hsv, i, true),
      s: getSaturation(hsv, i, true),
      v: getValue$1(hsv, i, true)
    }));
    patterns.push(colorString);
  }

  patterns.push(toHex(pColor));

  for (var _i = 1; _i <= darkColorCount; _i += 1) {
    var _hsv = toHsv(pColor);

    var _colorString = toHex(inputToRGB({
      h: getHue(_hsv, _i),
      s: getSaturation(_hsv, _i),
      v: getValue$1(_hsv, _i)
    }));

    patterns.push(_colorString);
  } // dark theme patterns


  if (opts.theme === 'dark') {
    return darkColorMap.map(function (_ref3) {
      var index = _ref3.index,
          opacity = _ref3.opacity;
      var darkColorString = toHex(mix$1(inputToRGB(opts.backgroundColor || '#141414'), inputToRGB(patterns[index]), opacity * 100));
      return darkColorString;
    });
  }

  return patterns;
}

var presetPrimaryColors = {
  red: '#F5222D',
  volcano: '#FA541C',
  orange: '#FA8C16',
  gold: '#FAAD14',
  yellow: '#FADB14',
  lime: '#A0D911',
  green: '#52C41A',
  cyan: '#13C2C2',
  blue: '#1890FF',
  geekblue: '#2F54EB',
  purple: '#722ED1',
  magenta: '#EB2F96',
  grey: '#666666'
};
var presetPalettes = {};
var presetDarkPalettes = {};
Object.keys(presetPrimaryColors).forEach(function (key) {
  presetPalettes[key] = generate$1(presetPrimaryColors[key]);
  presetPalettes[key].primary = presetPalettes[key][5]; // dark presetPalettes

  presetDarkPalettes[key] = generate$1(presetPrimaryColors[key], {
    theme: 'dark',
    backgroundColor: '#141414'
  });
  presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
});

var MARK_KEY = "rc-util-key";

function getContainer$1(option) {
  if (option.attachTo) {
    return option.attachTo;
  }

  var head = document.querySelector('head');
  return head || document.body;
}

function injectCSS(css) {
  var _option$csp;

  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!canUseDom()) {
    return null;
  }

  var styleNode = document.createElement('style');

  if ((_option$csp = option.csp) === null || _option$csp === void 0 ? void 0 : _option$csp.nonce) {
    var _option$csp2;

    styleNode.nonce = (_option$csp2 = option.csp) === null || _option$csp2 === void 0 ? void 0 : _option$csp2.nonce;
  }

  styleNode.innerHTML = css;
  var container = getContainer$1(option);
  var firstChild = container.firstChild;

  if (option.prepend && firstChild) {
    container.insertBefore(styleNode, firstChild);
  } else {
    container.appendChild(styleNode);
  }

  return styleNode;
}
var containerCache = new Map();
function updateCSS(css, key) {
  var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var container = getContainer$1(option); // Get real parent

  if (!containerCache.has(container)) {
    var placeholderStyle = injectCSS('', option);
    var parentElement = placeholderStyle.parentElement;
    containerCache.set(container, parentElement);
    parentElement.removeChild(placeholderStyle);
  }

  var existNode = Array.from(containerCache.get(container).children).find(function (node) {
    return node.tagName === 'STYLE' && node[MARK_KEY] === key;
  });

  if (existNode) {
    var _option$csp3, _option$csp4;

    if (((_option$csp3 = option.csp) === null || _option$csp3 === void 0 ? void 0 : _option$csp3.nonce) && existNode.nonce !== ((_option$csp4 = option.csp) === null || _option$csp4 === void 0 ? void 0 : _option$csp4.nonce)) {
      var _option$csp5;

      existNode.nonce = (_option$csp5 = option.csp) === null || _option$csp5 === void 0 ? void 0 : _option$csp5.nonce;
    }

    if (existNode.innerHTML !== css) {
      existNode.innerHTML = css;
    }

    return existNode;
  }

  var newNode = injectCSS(css, option);
  newNode[MARK_KEY] = key;
  return newNode;
}

function warning(valid, message) {
  warningOnce(valid, "[@ant-design/icons] ".concat(message));
}
function isIconDefinition(target) {
  return _typeof$1(target) === 'object' && typeof target.name === 'string' && typeof target.theme === 'string' && (_typeof$1(target.icon) === 'object' || typeof target.icon === 'function');
}
function normalizeAttrs() {
  var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.keys(attrs).reduce(function (acc, key) {
    var val = attrs[key];

    switch (key) {
      case 'class':
        acc.className = val;
        delete acc.class;
        break;

      default:
        acc[key] = val;
    }

    return acc;
  }, {});
}
function generate(node, key, rootProps) {
  if (!rootProps) {
    return /*#__PURE__*/react.createElement(node.tag, _objectSpread2$1({
      key: key
    }, normalizeAttrs(node.attrs)), (node.children || []).map(function (child, index) {
      return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
    }));
  }

  return /*#__PURE__*/react.createElement(node.tag, _objectSpread2$1(_objectSpread2$1({
    key: key
  }, normalizeAttrs(node.attrs)), rootProps), (node.children || []).map(function (child, index) {
    return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
  }));
}
function getSecondaryColor(primaryColor) {
  // choose the second color
  return generate$1(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
  if (!twoToneColor) {
    return [];
  }

  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
} // These props make sure that the SVG behaviours like general text.
var iconStyles = "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
var useInsertStyles = function useInsertStyles() {
  var styleStr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : iconStyles;

  var _useContext = react.useContext(IconContext),
      csp = _useContext.csp;

  react.useEffect(function () {
    updateCSS(styleStr, '@ant-design-icons', {
      prepend: true,
      csp: csp
    });
  }, []);
};

var twoToneColorPalette = {
  primaryColor: '#333',
  secondaryColor: '#E6E6E6',
  calculated: false
};

function setTwoToneColors(_ref) {
  var primaryColor = _ref.primaryColor,
      secondaryColor = _ref.secondaryColor;
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}

function getTwoToneColors() {
  return _objectSpread2$1({}, twoToneColorPalette);
}

var IconBase = function IconBase(props) {
  var icon = props.icon,
      className = props.className,
      onClick = props.onClick,
      style = props.style,
      primaryColor = props.primaryColor,
      secondaryColor = props.secondaryColor,
      restProps = _objectWithoutProperties(props, ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"]);

  var colors = twoToneColorPalette;

  if (primaryColor) {
    colors = {
      primaryColor: primaryColor,
      secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
    };
  }

  useInsertStyles();
  warning(isIconDefinition(icon), "icon should be icon definiton, but got ".concat(icon));

  if (!isIconDefinition(icon)) {
    return null;
  }

  var target = icon;

  if (target && typeof target.icon === 'function') {
    target = _objectSpread2$1(_objectSpread2$1({}, target), {}, {
      icon: target.icon(colors.primaryColor, colors.secondaryColor)
    });
  }

  return generate(target.icon, "svg-".concat(target.name), _objectSpread2$1({
    className: className,
    onClick: onClick,
    style: style,
    'data-icon': target.name,
    width: '1em',
    height: '1em',
    fill: 'currentColor',
    'aria-hidden': 'true'
  }, restProps));
};

IconBase.displayName = 'IconReact';
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;

function setTwoToneColor(twoToneColor) {
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
      _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2),
      primaryColor = _normalizeTwoToneColo2[0],
      secondaryColor = _normalizeTwoToneColo2[1];

  return IconBase.setTwoToneColors({
    primaryColor: primaryColor,
    secondaryColor: secondaryColor
  });
}
function getTwoToneColor() {
  var colors = IconBase.getTwoToneColors();

  if (!colors.calculated) {
    return colors.primaryColor;
  }

  return [colors.primaryColor, colors.secondaryColor];
}

// should move it to antd main repo?

setTwoToneColor('#1890ff');
var Icon = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _classNames;

  var className = props.className,
      icon = props.icon,
      spin = props.spin,
      rotate = props.rotate,
      tabIndex = props.tabIndex,
      onClick = props.onClick,
      twoToneColor = props.twoToneColor,
      restProps = _objectWithoutProperties(props, ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"]);

  var _React$useContext = react.useContext(IconContext),
      _React$useContext$pre = _React$useContext.prefixCls,
      prefixCls = _React$useContext$pre === void 0 ? 'anticon' : _React$useContext$pre;

  var classString = classnames(prefixCls, (_classNames = {}, _defineProperty$1(_classNames, "".concat(prefixCls, "-").concat(icon.name), !!icon.name), _defineProperty$1(_classNames, "".concat(prefixCls, "-spin"), !!spin || icon.name === 'loading'), _classNames), className);
  var iconTabIndex = tabIndex;

  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }

  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : undefined;

  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
      _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2),
      primaryColor = _normalizeTwoToneColo2[0],
      secondaryColor = _normalizeTwoToneColo2[1];

  return /*#__PURE__*/react.createElement("span", Object.assign({
    role: "img",
    "aria-label": icon.name
  }, restProps, {
    ref: ref,
    tabIndex: iconTabIndex,
    onClick: onClick,
    className: classString
  }), /*#__PURE__*/react.createElement(IconBase, {
    icon: icon,
    primaryColor: primaryColor,
    secondaryColor: secondaryColor,
    style: svgStyle
  }));
});
Icon.displayName = 'AntdIcon';
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;

// GENERATE BY ./scripts/generate.ts

var LoadingOutlined = function LoadingOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(Icon, Object.assign({}, props, {
    ref: ref,
    icon: LoadingOutlined$2
  }));
};

LoadingOutlined.displayName = 'LoadingOutlined';
var LoadingOutlined$1 = /*#__PURE__*/react.forwardRef(LoadingOutlined);

// This icon file is generated automatically.
var ExclamationCircleFilled$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, "name": "exclamation-circle", "theme": "filled" };

// GENERATE BY ./scripts/generate.ts

var ExclamationCircleFilled = function ExclamationCircleFilled(props, ref) {
  return /*#__PURE__*/react.createElement(Icon, Object.assign({}, props, {
    ref: ref,
    icon: ExclamationCircleFilled$2
  }));
};

ExclamationCircleFilled.displayName = 'ExclamationCircleFilled';
var ExclamationCircleFilled$1 = /*#__PURE__*/react.forwardRef(ExclamationCircleFilled);

// This icon file is generated automatically.
var CloseCircleFilled$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" } }] }, "name": "close-circle", "theme": "filled" };

// GENERATE BY ./scripts/generate.ts

var CloseCircleFilled = function CloseCircleFilled(props, ref) {
  return /*#__PURE__*/react.createElement(Icon, Object.assign({}, props, {
    ref: ref,
    icon: CloseCircleFilled$2
  }));
};

CloseCircleFilled.displayName = 'CloseCircleFilled';
var CloseCircleFilled$1 = /*#__PURE__*/react.forwardRef(CloseCircleFilled);

// This icon file is generated automatically.
var CheckCircleFilled$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, "name": "check-circle", "theme": "filled" };

// GENERATE BY ./scripts/generate.ts

var CheckCircleFilled = function CheckCircleFilled(props, ref) {
  return /*#__PURE__*/react.createElement(Icon, Object.assign({}, props, {
    ref: ref,
    icon: CheckCircleFilled$2
  }));
};

CheckCircleFilled.displayName = 'CheckCircleFilled';
var CheckCircleFilled$1 = /*#__PURE__*/react.forwardRef(CheckCircleFilled);

// This icon file is generated automatically.
var InfoCircleFilled$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, "name": "info-circle", "theme": "filled" };

// GENERATE BY ./scripts/generate.ts

var InfoCircleFilled = function InfoCircleFilled(props, ref) {
  return /*#__PURE__*/react.createElement(Icon, Object.assign({}, props, {
    ref: ref,
    icon: InfoCircleFilled$2
  }));
};

InfoCircleFilled.displayName = 'InfoCircleFilled';
var InfoCircleFilled$1 = /*#__PURE__*/react.forwardRef(InfoCircleFilled);

function createUseMessage(getRcNotificationInstance, getRCNoticeProps) {
  var useMessage = function useMessage() {
    // We can only get content by render
    var getPrefixCls; // We create a proxy to handle delay created instance

    var innerInstance = null;
    var proxy = {
      add: function add(noticeProps, holderCallback) {
        innerInstance === null || innerInstance === void 0 ? void 0 : innerInstance.component.add(noticeProps, holderCallback);
      }
    };

    var _useRCNotification = useNotification(proxy),
        _useRCNotification2 = _slicedToArray(_useRCNotification, 2),
        hookNotify = _useRCNotification2[0],
        holder = _useRCNotification2[1];

    function notify(args) {
      var customizePrefixCls = args.prefixCls;
      var mergedPrefixCls = getPrefixCls('message', customizePrefixCls);
      var rootPrefixCls = getPrefixCls();
      var target = args.key || getKeyThenIncreaseKey();
      var closePromise = new Promise(function (resolve) {
        var callback = function callback() {
          if (typeof args.onClose === 'function') {
            args.onClose();
          }

          return resolve(true);
        };

        getRcNotificationInstance(_extends$1(_extends$1({}, args), {
          prefixCls: mergedPrefixCls,
          rootPrefixCls: rootPrefixCls
        }), function (_ref) {
          var prefixCls = _ref.prefixCls,
              instance = _ref.instance;
          innerInstance = instance;
          hookNotify(getRCNoticeProps(_extends$1(_extends$1({}, args), {
            key: target,
            onClose: callback
          }), prefixCls));
        });
      });

      var result = function result() {
        if (innerInstance) {
          innerInstance.removeNotice(target);
        }
      };

      result.then = function (filled, rejected) {
        return closePromise.then(filled, rejected);
      };

      result.promise = closePromise;
      return result;
    } // Fill functions


    var hookApiRef = react.useRef({});
    hookApiRef.current.open = notify;
    ['success', 'info', 'warning', 'error', 'loading'].forEach(function (type) {
      return attachTypeApi(hookApiRef.current, type);
    });
    return [hookApiRef.current, /*#__PURE__*/react.createElement(ConfigConsumer, {
      key: "holder"
    }, function (context) {
      getPrefixCls = context.getPrefixCls;
      return holder;
    })];
  };

  return useMessage;
}

var messageInstance;
var defaultDuration$1 = 3;
var defaultTop$1;
var key = 1;
var localPrefixCls = '';
var transitionName = 'move-up';
var hasTransitionName = false;
var getContainer;
var maxCount;
var rtl$1 = false;
function getKeyThenIncreaseKey() {
  return key++;
}

function setMessageConfig(options) {
  if (options.top !== undefined) {
    defaultTop$1 = options.top;
    messageInstance = null; // delete messageInstance for new defaultTop
  }

  if (options.duration !== undefined) {
    defaultDuration$1 = options.duration;
  }

  if (options.prefixCls !== undefined) {
    localPrefixCls = options.prefixCls;
  }

  if (options.getContainer !== undefined) {
    getContainer = options.getContainer;
  }

  if (options.transitionName !== undefined) {
    transitionName = options.transitionName;
    messageInstance = null; // delete messageInstance for new transitionName

    hasTransitionName = true;
  }

  if (options.maxCount !== undefined) {
    maxCount = options.maxCount;
    messageInstance = null;
  }

  if (options.rtl !== undefined) {
    rtl$1 = options.rtl;
  }
}

function getRCNotificationInstance(args, callback) {
  var customizePrefixCls = args.prefixCls;

  var _globalConfig = globalConfig(),
      getPrefixCls = _globalConfig.getPrefixCls,
      getRootPrefixCls = _globalConfig.getRootPrefixCls;

  var prefixCls = getPrefixCls('message', customizePrefixCls || localPrefixCls);
  var rootPrefixCls = getRootPrefixCls(args.rootPrefixCls, prefixCls);

  if (messageInstance) {
    callback({
      prefixCls: prefixCls,
      rootPrefixCls: rootPrefixCls,
      instance: messageInstance
    });
    return;
  }

  var instanceConfig = {
    prefixCls: prefixCls,
    transitionName: hasTransitionName ? transitionName : "".concat(rootPrefixCls, "-").concat(transitionName),
    style: {
      top: defaultTop$1
    },
    getContainer: getContainer,
    maxCount: maxCount
  };
  Notification.newInstance(instanceConfig, function (instance) {
    if (messageInstance) {
      callback({
        prefixCls: prefixCls,
        rootPrefixCls: rootPrefixCls,
        instance: messageInstance
      });
      return;
    }

    messageInstance = instance;

    callback({
      prefixCls: prefixCls,
      rootPrefixCls: rootPrefixCls,
      instance: instance
    });
  });
}

var typeToIcon$1 = {
  info: InfoCircleFilled$1,
  success: CheckCircleFilled$1,
  error: CloseCircleFilled$1,
  warning: ExclamationCircleFilled$1,
  loading: LoadingOutlined$1
};

function getRCNoticeProps$1(args, prefixCls) {
  var _classNames;

  var duration = args.duration !== undefined ? args.duration : defaultDuration$1;
  var IconComponent = typeToIcon$1[args.type];
  var messageClass = classnames("".concat(prefixCls, "-custom-content"), (_classNames = {}, _defineProperty$1(_classNames, "".concat(prefixCls, "-").concat(args.type), args.type), _defineProperty$1(_classNames, "".concat(prefixCls, "-rtl"), rtl$1 === true), _classNames));
  return {
    key: args.key,
    duration: duration,
    style: args.style || {},
    className: args.className,
    content: /*#__PURE__*/react.createElement("div", {
      className: messageClass
    }, args.icon || IconComponent && /*#__PURE__*/react.createElement(IconComponent, null), /*#__PURE__*/react.createElement("span", null, args.content)),
    onClose: args.onClose,
    onClick: args.onClick
  };
}

function notice$1(args) {
  var target = args.key || key++;
  var closePromise = new Promise(function (resolve) {
    var callback = function callback() {
      if (typeof args.onClose === 'function') {
        args.onClose();
      }

      return resolve(true);
    };

    getRCNotificationInstance(args, function (_ref) {
      var prefixCls = _ref.prefixCls,
          instance = _ref.instance;
      instance.notice(getRCNoticeProps$1(_extends$1(_extends$1({}, args), {
        key: target,
        onClose: callback
      }), prefixCls));
    });
  });

  var result = function result() {
    if (messageInstance) {
      messageInstance.removeNotice(target);
    }
  };

  result.then = function (filled, rejected) {
    return closePromise.then(filled, rejected);
  };

  result.promise = closePromise;
  return result;
}

function isArgsProps(content) {
  return Object.prototype.toString.call(content) === '[object Object]' && !!content.content;
}

var api$1 = {
  open: notice$1,
  config: setMessageConfig,
  destroy: function destroy(messageKey) {
    if (messageInstance) {
      if (messageKey) {
        var _messageInstance = messageInstance,
            removeNotice = _messageInstance.removeNotice;
        removeNotice(messageKey);
      } else {
        var _messageInstance2 = messageInstance,
            destroy = _messageInstance2.destroy;
        destroy();
        messageInstance = null;
      }
    }
  }
};
function attachTypeApi(originalApi, type) {
  originalApi[type] = function (content, duration, onClose) {
    if (isArgsProps(content)) {
      return originalApi.open(_extends$1(_extends$1({}, content), {
        type: type
      }));
    }

    if (typeof duration === 'function') {
      onClose = duration;
      duration = undefined;
    }

    return originalApi.open({
      content: content,
      duration: duration,
      type: type,
      onClose: onClose
    });
  };
}
['success', 'info', 'warning', 'error', 'loading'].forEach(function (type) {
  return attachTypeApi(api$1, type);
});
api$1.warn = api$1.warning;
api$1.useMessage = createUseMessage(getRCNotificationInstance, getRCNoticeProps$1);

// This icon file is generated automatically.
var CloseOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" } }] }, "name": "close", "theme": "outlined" };

// GENERATE BY ./scripts/generate.ts

var CloseOutlined = function CloseOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(Icon, Object.assign({}, props, {
    ref: ref,
    icon: CloseOutlined$2
  }));
};

CloseOutlined.displayName = 'CloseOutlined';
var CloseOutlined$1 = /*#__PURE__*/react.forwardRef(CloseOutlined);

// This icon file is generated automatically.
var CheckCircleOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" } }, { "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, "name": "check-circle", "theme": "outlined" };

// GENERATE BY ./scripts/generate.ts

var CheckCircleOutlined = function CheckCircleOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(Icon, Object.assign({}, props, {
    ref: ref,
    icon: CheckCircleOutlined$2
  }));
};

CheckCircleOutlined.displayName = 'CheckCircleOutlined';
var CheckCircleOutlined$1 = /*#__PURE__*/react.forwardRef(CheckCircleOutlined);

// This icon file is generated automatically.
var CloseCircleOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z" } }, { "tag": "path", "attrs": { "d": "M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, "name": "close-circle", "theme": "outlined" };

// GENERATE BY ./scripts/generate.ts

var CloseCircleOutlined = function CloseCircleOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(Icon, Object.assign({}, props, {
    ref: ref,
    icon: CloseCircleOutlined$2
  }));
};

CloseCircleOutlined.displayName = 'CloseCircleOutlined';
var CloseCircleOutlined$1 = /*#__PURE__*/react.forwardRef(CloseCircleOutlined);

// This icon file is generated automatically.
var ExclamationCircleOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { "tag": "path", "attrs": { "d": "M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z" } }] }, "name": "exclamation-circle", "theme": "outlined" };

// GENERATE BY ./scripts/generate.ts

var ExclamationCircleOutlined = function ExclamationCircleOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(Icon, Object.assign({}, props, {
    ref: ref,
    icon: ExclamationCircleOutlined$2
  }));
};

ExclamationCircleOutlined.displayName = 'ExclamationCircleOutlined';
var ExclamationCircleOutlined$1 = /*#__PURE__*/react.forwardRef(ExclamationCircleOutlined);

// This icon file is generated automatically.
var InfoCircleOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { "tag": "path", "attrs": { "d": "M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" } }] }, "name": "info-circle", "theme": "outlined" };

// GENERATE BY ./scripts/generate.ts

var InfoCircleOutlined = function InfoCircleOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(Icon, Object.assign({}, props, {
    ref: ref,
    icon: InfoCircleOutlined$2
  }));
};

InfoCircleOutlined.displayName = 'InfoCircleOutlined';
var InfoCircleOutlined$1 = /*#__PURE__*/react.forwardRef(InfoCircleOutlined);

function createUseNotification(getNotificationInstance, getRCNoticeProps) {
  var useNotification$1 = function useNotification$1() {
    // We can only get content by render
    var getPrefixCls; // We create a proxy to handle delay created instance

    var innerInstance = null;
    var proxy = {
      add: function add(noticeProps, holderCallback) {
        innerInstance === null || innerInstance === void 0 ? void 0 : innerInstance.component.add(noticeProps, holderCallback);
      }
    };

    var _useRCNotification = useNotification(proxy),
        _useRCNotification2 = _slicedToArray(_useRCNotification, 2),
        hookNotify = _useRCNotification2[0],
        holder = _useRCNotification2[1];

    function notify(args) {
      var customizePrefixCls = args.prefixCls;
      var mergedPrefixCls = getPrefixCls('notification', customizePrefixCls);
      getNotificationInstance(_extends$1(_extends$1({}, args), {
        prefixCls: mergedPrefixCls
      }), function (_ref) {
        var prefixCls = _ref.prefixCls,
            instance = _ref.instance;
        innerInstance = instance;
        hookNotify(getRCNoticeProps(args, prefixCls));
      });
    } // Fill functions


    var hookApiRef = react.useRef({});
    hookApiRef.current.open = notify;
    ['success', 'info', 'warning', 'error'].forEach(function (type) {
      hookApiRef.current[type] = function (args) {
        return hookApiRef.current.open(_extends$1(_extends$1({}, args), {
          type: type
        }));
      };
    });
    return [hookApiRef.current, /*#__PURE__*/react.createElement(ConfigConsumer, {
      key: "holder"
    }, function (context) {
      getPrefixCls = context.getPrefixCls;
      return holder;
    })];
  };

  return useNotification$1;
}

undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var notificationInstance = {};
var defaultDuration = 4.5;
var defaultTop = 24;
var defaultBottom = 24;
var defaultPrefixCls$1 = '';
var defaultPlacement = 'topRight';
var defaultGetContainer;
var defaultCloseIcon;
var rtl = false;

function setNotificationConfig(options) {
  var duration = options.duration,
      placement = options.placement,
      bottom = options.bottom,
      top = options.top,
      getContainer = options.getContainer,
      closeIcon = options.closeIcon,
      prefixCls = options.prefixCls;

  if (prefixCls !== undefined) {
    defaultPrefixCls$1 = prefixCls;
  }

  if (duration !== undefined) {
    defaultDuration = duration;
  }

  if (placement !== undefined) {
    defaultPlacement = placement;
  } else if (options.rtl) {
    defaultPlacement = 'topLeft';
  }

  if (bottom !== undefined) {
    defaultBottom = bottom;
  }

  if (top !== undefined) {
    defaultTop = top;
  }

  if (getContainer !== undefined) {
    defaultGetContainer = getContainer;
  }

  if (closeIcon !== undefined) {
    defaultCloseIcon = closeIcon;
  }

  if (options.rtl !== undefined) {
    rtl = options.rtl;
  }
}

function getPlacementStyle(placement) {
  var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultTop;
  var bottom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultBottom;
  var style;

  switch (placement) {
    case 'topLeft':
      style = {
        left: 0,
        top: top,
        bottom: 'auto'
      };
      break;

    case 'topRight':
      style = {
        right: 0,
        top: top,
        bottom: 'auto'
      };
      break;

    case 'bottomLeft':
      style = {
        left: 0,
        top: 'auto',
        bottom: bottom
      };
      break;

    default:
      style = {
        right: 0,
        top: 'auto',
        bottom: bottom
      };
      break;
  }

  return style;
}

function getNotificationInstance(args, callback) {
  var _args$placement = args.placement,
      placement = _args$placement === void 0 ? defaultPlacement : _args$placement,
      top = args.top,
      bottom = args.bottom,
      _args$getContainer = args.getContainer,
      getContainer = _args$getContainer === void 0 ? defaultGetContainer : _args$getContainer,
      _args$closeIcon = args.closeIcon,
      closeIcon = _args$closeIcon === void 0 ? defaultCloseIcon : _args$closeIcon,
      customizePrefixCls = args.prefixCls;

  var _globalConfig = globalConfig(),
      getPrefixCls = _globalConfig.getPrefixCls;

  var prefixCls = getPrefixCls('notification', customizePrefixCls || defaultPrefixCls$1);
  var cacheKey = "".concat(prefixCls, "-").concat(placement);
  var cacheInstance = notificationInstance[cacheKey];

  if (cacheInstance) {
    Promise.resolve(cacheInstance).then(function (instance) {
      callback({
        prefixCls: "".concat(prefixCls, "-notice"),
        instance: instance
      });
    });
    return;
  }

  var closeIconToRender = /*#__PURE__*/react.createElement("span", {
    className: "".concat(prefixCls, "-close-x")
  }, closeIcon || /*#__PURE__*/react.createElement(CloseOutlined$1, {
    className: "".concat(prefixCls, "-close-icon")
  }));
  var notificationClass = classnames("".concat(prefixCls, "-").concat(placement), _defineProperty$1({}, "".concat(prefixCls, "-rtl"), rtl === true));
  notificationInstance[cacheKey] = new Promise(function (resolve) {
    Notification.newInstance({
      prefixCls: prefixCls,
      className: notificationClass,
      style: getPlacementStyle(placement, top, bottom),
      getContainer: getContainer,
      closeIcon: closeIconToRender
    }, function (notification) {
      resolve(notification);
      callback({
        prefixCls: "".concat(prefixCls, "-notice"),
        instance: notification
      });
    });
  });
}

var typeToIcon = {
  success: CheckCircleOutlined$1,
  info: InfoCircleOutlined$1,
  error: CloseCircleOutlined$1,
  warning: ExclamationCircleOutlined$1
};

function getRCNoticeProps(args, prefixCls) {
  var durationArg = args.duration,
      icon = args.icon,
      type = args.type,
      description = args.description,
      message = args.message,
      btn = args.btn,
      onClose = args.onClose,
      onClick = args.onClick,
      key = args.key,
      style = args.style,
      className = args.className;
  var duration = durationArg === undefined ? defaultDuration : durationArg;
  var iconNode = null;

  if (icon) {
    iconNode = /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-icon")
    }, args.icon);
  } else if (type) {
    iconNode = /*#__PURE__*/react.createElement(typeToIcon[type] || null, {
      className: "".concat(prefixCls, "-icon ").concat(prefixCls, "-icon-").concat(type)
    });
  }

  var autoMarginTag = !description && iconNode ? /*#__PURE__*/react.createElement("span", {
    className: "".concat(prefixCls, "-message-single-line-auto-margin")
  }) : null;
  return {
    content: /*#__PURE__*/react.createElement("div", {
      className: iconNode ? "".concat(prefixCls, "-with-icon") : '',
      role: "alert"
    }, iconNode, /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-message")
    }, autoMarginTag, message), /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-description")
    }, description), btn ? /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-btn")
    }, btn) : null),
    duration: duration,
    closable: true,
    onClose: onClose,
    onClick: onClick,
    key: key,
    style: style || {},
    className: classnames(className, _defineProperty$1({}, "".concat(prefixCls, "-").concat(type), !!type))
  };
}

function notice(args) {
  getNotificationInstance(args, function (_ref) {
    var prefixCls = _ref.prefixCls,
        instance = _ref.instance;
    instance.notice(getRCNoticeProps(args, prefixCls));
  });
}

var api = {
  open: notice,
  close: function close(key) {
    Object.keys(notificationInstance).forEach(function (cacheKey) {
      return Promise.resolve(notificationInstance[cacheKey]).then(function (instance) {
        instance.removeNotice(key);
      });
    });
  },
  config: setNotificationConfig,
  destroy: function destroy() {
    Object.keys(notificationInstance).forEach(function (cacheKey) {
      Promise.resolve(notificationInstance[cacheKey]).then(function (instance) {
        instance.destroy();
      });
      delete notificationInstance[cacheKey]; // lgtm[js/missing-await]
    });
  }
};
['success', 'info', 'warning', 'error'].forEach(function (type) {
  api[type] = function (args) {
    return api.open(_extends$1(_extends$1({}, args), {
      type: type
    }));
  };
});
api.warn = api.warning;
api.useNotification = createUseNotification(getNotificationInstance, getRCNoticeProps);

var PASSED_PROPS = ['getTargetContainer', 'getPopupContainer', 'renderEmpty', 'pageHeader', 'input', 'form'];
var defaultPrefixCls = 'ant';
var globalPrefixCls;

var setGlobalConfig = function setGlobalConfig(params) {
  if (params.prefixCls !== undefined) {
    globalPrefixCls = params.prefixCls;
  }
};

function getGlobalPrefixCls() {
  return globalPrefixCls || defaultPrefixCls;
}

var globalConfig = function globalConfig() {
  return {
    getPrefixCls: function getPrefixCls(suffixCls, customizePrefixCls) {
      if (customizePrefixCls) return customizePrefixCls;
      return suffixCls ? "".concat(getGlobalPrefixCls(), "-").concat(suffixCls) : getGlobalPrefixCls();
    },
    getRootPrefixCls: function getRootPrefixCls(rootPrefixCls, customizePrefixCls) {
      // Customize rootPrefixCls is first priority
      if (rootPrefixCls) {
        return rootPrefixCls;
      } // If Global prefixCls provided, use this


      if (globalPrefixCls) {
        return globalPrefixCls;
      } // [Legacy] If customize prefixCls provided, we cut it to get the prefixCls


      if (customizePrefixCls && customizePrefixCls.includes('-')) {
        return customizePrefixCls.replace(/^(.*)-[^-]*$/, '$1');
      } // Fallback to default prefixCls


      return getGlobalPrefixCls();
    }
  };
};

var ProviderChildren = function ProviderChildren(props) {
  var children = props.children,
      csp = props.csp,
      autoInsertSpaceInButton = props.autoInsertSpaceInButton,
      form = props.form,
      locale = props.locale,
      componentSize = props.componentSize,
      direction = props.direction,
      space = props.space,
      virtual = props.virtual,
      dropdownMatchSelectWidth = props.dropdownMatchSelectWidth,
      legacyLocale = props.legacyLocale,
      parentContext = props.parentContext,
      iconPrefixCls = props.iconPrefixCls;
  var getPrefixCls = react.useCallback(function (suffixCls, customizePrefixCls) {
    var prefixCls = props.prefixCls;
    if (customizePrefixCls) return customizePrefixCls;
    var mergedPrefixCls = prefixCls || parentContext.getPrefixCls('');
    return suffixCls ? "".concat(mergedPrefixCls, "-").concat(suffixCls) : mergedPrefixCls;
  }, [parentContext.getPrefixCls]);

  var config = _extends$1(_extends$1({}, parentContext), {
    csp: csp,
    autoInsertSpaceInButton: autoInsertSpaceInButton,
    locale: locale || legacyLocale,
    direction: direction,
    space: space,
    virtual: virtual,
    dropdownMatchSelectWidth: dropdownMatchSelectWidth,
    getPrefixCls: getPrefixCls
  }); // Pass the props used by `useContext` directly with child component.
  // These props should merged into `config`.


  PASSED_PROPS.forEach(function (propName) {
    var propValue = props[propName];

    if (propValue) {
      config[propName] = propValue;
    }
  }); // https://github.com/ant-design/ant-design/issues/27617

  var memoedConfig = useMemo(function () {
    return config;
  }, config, function (prevConfig, currentConfig) {
    var prevKeys = Object.keys(prevConfig);
    var currentKeys = Object.keys(currentConfig);
    return prevKeys.length !== currentKeys.length || prevKeys.some(function (key) {
      return prevConfig[key] !== currentConfig[key];
    });
  });
  var memoIconContextValue = react.useMemo(function () {
    return {
      prefixCls: iconPrefixCls,
      csp: csp
    };
  }, [iconPrefixCls]);
  var childNode = children; // Additional Form provider

  var validateMessages = {};

  if (locale && locale.Form && locale.Form.defaultValidateMessages) {
    validateMessages = locale.Form.defaultValidateMessages;
  }

  if (form && form.validateMessages) {
    validateMessages = _extends$1(_extends$1({}, validateMessages), form.validateMessages);
  }

  if (Object.keys(validateMessages).length > 0) {
    childNode = /*#__PURE__*/react.createElement(FormProvider, {
      validateMessages: validateMessages
    }, children);
  }

  if (locale) {
    childNode = /*#__PURE__*/react.createElement(LocaleProvider, {
      locale: locale,
      _ANT_MARK__: ANT_MARK
    }, childNode);
  }

  if (iconPrefixCls) {
    childNode = /*#__PURE__*/react.createElement(IconContext.Provider, {
      value: memoIconContextValue
    }, childNode);
  }

  if (componentSize) {
    childNode = /*#__PURE__*/react.createElement(SizeContextProvider, {
      size: componentSize
    }, childNode);
  }

  return /*#__PURE__*/react.createElement(ConfigContext.Provider, {
    value: memoedConfig
  }, childNode);
};

var ConfigProvider = function ConfigProvider(props) {
  react.useEffect(function () {
    if (props.direction) {
      api$1.config({
        rtl: props.direction === 'rtl'
      });
      api.config({
        rtl: props.direction === 'rtl'
      });
    }
  }, [props.direction]);
  return /*#__PURE__*/react.createElement(LocaleReceiver, null, function (_, __, legacyLocale) {
    return /*#__PURE__*/react.createElement(ConfigConsumer, null, function (context) {
      return /*#__PURE__*/react.createElement(ProviderChildren, _extends$1({
        parentContext: context,
        legacyLocale: legacyLocale
      }, props));
    });
  });
};
/** @private internal Usage. do not use in your production */


ConfigProvider.ConfigContext = ConfigContext;
ConfigProvider.SizeContext = SizeContext;
ConfigProvider.config = setGlobalConfig;

function addEventListenerWrap(target, eventType, cb, option) {
  /* eslint camelcase: 2 */
  var callback = reactDom.unstable_batchedUpdates ? function run(e) {
    reactDom.unstable_batchedUpdates(cb, e);
  } : cb;

  if (target.addEventListener) {
    target.addEventListener(eventType, callback, option);
  }

  return {
    remove: function remove() {
      if (target.removeEventListener) {
        target.removeEventListener(eventType, callback);
      }
    }
  };
}

/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */
var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,

  /**
   * BACKSPACE
   */
  BACKSPACE: 8,

  /**
   * TAB
   */
  TAB: 9,

  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,

  /**
   * ENTER
   */
  ENTER: 13,

  /**
   * SHIFT
   */
  SHIFT: 16,

  /**
   * CTRL
   */
  CTRL: 17,

  /**
   * ALT
   */
  ALT: 18,

  /**
   * PAUSE
   */
  PAUSE: 19,

  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,

  /**
   * ESC
   */
  ESC: 27,

  /**
   * SPACE
   */
  SPACE: 32,

  /**
   * PAGE_UP
   */
  PAGE_UP: 33,

  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,

  /**
   * END
   */
  END: 35,

  /**
   * HOME
   */
  HOME: 36,

  /**
   * LEFT
   */
  LEFT: 37,

  /**
   * UP
   */
  UP: 38,

  /**
   * RIGHT
   */
  RIGHT: 39,

  /**
   * DOWN
   */
  DOWN: 40,

  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,

  /**
   * INSERT
   */
  INSERT: 45,

  /**
   * DELETE
   */
  DELETE: 46,

  /**
   * ZERO
   */
  ZERO: 48,

  /**
   * ONE
   */
  ONE: 49,

  /**
   * TWO
   */
  TWO: 50,

  /**
   * THREE
   */
  THREE: 51,

  /**
   * FOUR
   */
  FOUR: 52,

  /**
   * FIVE
   */
  FIVE: 53,

  /**
   * SIX
   */
  SIX: 54,

  /**
   * SEVEN
   */
  SEVEN: 55,

  /**
   * EIGHT
   */
  EIGHT: 56,

  /**
   * NINE
   */
  NINE: 57,

  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,

  /**
   * A
   */
  A: 65,

  /**
   * B
   */
  B: 66,

  /**
   * C
   */
  C: 67,

  /**
   * D
   */
  D: 68,

  /**
   * E
   */
  E: 69,

  /**
   * F
   */
  F: 70,

  /**
   * G
   */
  G: 71,

  /**
   * H
   */
  H: 72,

  /**
   * I
   */
  I: 73,

  /**
   * J
   */
  J: 74,

  /**
   * K
   */
  K: 75,

  /**
   * L
   */
  L: 76,

  /**
   * M
   */
  M: 77,

  /**
   * N
   */
  N: 78,

  /**
   * O
   */
  O: 79,

  /**
   * P
   */
  P: 80,

  /**
   * Q
   */
  Q: 81,

  /**
   * R
   */
  R: 82,

  /**
   * S
   */
  S: 83,

  /**
   * T
   */
  T: 84,

  /**
   * U
   */
  U: 85,

  /**
   * V
   */
  V: 86,

  /**
   * W
   */
  W: 87,

  /**
   * X
   */
  X: 88,

  /**
   * Y
   */
  Y: 89,

  /**
   * Z
   */
  Z: 90,

  /**
   * META
   */
  META: 91,

  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,

  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,

  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,

  /**
   * NUM_ONE
   */
  NUM_ONE: 97,

  /**
   * NUM_TWO
   */
  NUM_TWO: 98,

  /**
   * NUM_THREE
   */
  NUM_THREE: 99,

  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,

  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,

  /**
   * NUM_SIX
   */
  NUM_SIX: 102,

  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,

  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,

  /**
   * NUM_NINE
   */
  NUM_NINE: 105,

  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,

  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,

  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,

  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,

  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,

  /**
   * F1
   */
  F1: 112,

  /**
   * F2
   */
  F2: 113,

  /**
   * F3
   */
  F3: 114,

  /**
   * F4
   */
  F4: 115,

  /**
   * F5
   */
  F5: 116,

  /**
   * F6
   */
  F6: 117,

  /**
   * F7
   */
  F7: 118,

  /**
   * F8
   */
  F8: 119,

  /**
   * F9
   */
  F9: 120,

  /**
   * F10
   */
  F10: 121,

  /**
   * F11
   */
  F11: 122,

  /**
   * F12
   */
  F12: 123,

  /**
   * NUMLOCK
   */
  NUMLOCK: 144,

  /**
   * SEMICOLON
   */
  SEMICOLON: 186,

  /**
   * DASH
   */
  DASH: 189,

  /**
   * EQUALS
   */
  EQUALS: 187,

  /**
   * COMMA
   */
  COMMA: 188,

  /**
   * PERIOD
   */
  PERIOD: 190,

  /**
   * SLASH
   */
  SLASH: 191,

  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,

  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,

  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,

  /**
   * BACKSLASH
   */
  BACKSLASH: 220,

  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,

  /**
   * WIN_KEY
   */
  WIN_KEY: 224,

  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,

  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================

  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e) {
    var keyCode = e.keyCode;

    if (e.altKey && !e.ctrlKey || e.metaKey || // Function keys don't generate text
    keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
      return false;
    } // The following keys are quite harmless, even in combination with
    // CTRL, ALT or SHIFT.


    switch (keyCode) {
      case KeyCode.ALT:
      case KeyCode.CAPS_LOCK:
      case KeyCode.CONTEXT_MENU:
      case KeyCode.CTRL:
      case KeyCode.DOWN:
      case KeyCode.END:
      case KeyCode.ESC:
      case KeyCode.HOME:
      case KeyCode.INSERT:
      case KeyCode.LEFT:
      case KeyCode.MAC_FF_META:
      case KeyCode.META:
      case KeyCode.NUMLOCK:
      case KeyCode.NUM_CENTER:
      case KeyCode.PAGE_DOWN:
      case KeyCode.PAGE_UP:
      case KeyCode.PAUSE:
      case KeyCode.PRINT_SCREEN:
      case KeyCode.RIGHT:
      case KeyCode.SHIFT:
      case KeyCode.UP:
      case KeyCode.WIN_KEY:
      case KeyCode.WIN_KEY_RIGHT:
        return false;

      default:
        return true;
    }
  },

  /**
   * whether character is entered.
   */
  isCharacterKey: function isCharacterKey(keyCode) {
    if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
      return true;
    }

    if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
      return true;
    }

    if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
      return true;
    } // Safari sends zero key code for non-latin characters.


    if (window.navigator.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
      return true;
    }

    switch (keyCode) {
      case KeyCode.SPACE:
      case KeyCode.QUESTION_MARK:
      case KeyCode.NUM_PLUS:
      case KeyCode.NUM_MINUS:
      case KeyCode.NUM_PERIOD:
      case KeyCode.NUM_DIVISION:
      case KeyCode.SEMICOLON:
      case KeyCode.DASH:
      case KeyCode.EQUALS:
      case KeyCode.COMMA:
      case KeyCode.PERIOD:
      case KeyCode.SLASH:
      case KeyCode.APOSTROPHE:
      case KeyCode.SINGLE_QUOTE:
      case KeyCode.OPEN_SQUARE_BRACKET:
      case KeyCode.BACKSLASH:
      case KeyCode.CLOSE_SQUARE_BRACKET:
        return true;

      default:
        return false;
    }
  }
};

var isMobile = (function () {
  if (typeof navigator === 'undefined' || typeof window === 'undefined') {
    return false;
  }

  var agent = navigator.userAgent || navigator.vendor || window.opera;

  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(agent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(agent === null || agent === void 0 ? void 0 : agent.substr(0, 4))) {
    return true;
  }

  return false;
});

function useControlledState(defaultStateValue, option) {
  var _ref = option || {},
      defaultValue = _ref.defaultValue,
      value = _ref.value,
      onChange = _ref.onChange,
      postState = _ref.postState;

  var _React$useState = react.useState(function () {
    if (value !== undefined) {
      return value;
    }

    if (defaultValue !== undefined) {
      return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
    }

    return typeof defaultStateValue === 'function' ? defaultStateValue() : defaultStateValue;
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      innerValue = _React$useState2[0],
      setInnerValue = _React$useState2[1];

  var mergedValue = value !== undefined ? value : innerValue;

  if (postState) {
    mergedValue = postState(mergedValue);
  }

  function triggerChange(newValue) {
    setInnerValue(newValue);

    if (mergedValue !== newValue && onChange) {
      onChange(newValue, mergedValue);
    }
  } // Effect of reset value to `undefined`


  var firstRenderRef = react.useRef(true);
  react.useEffect(function () {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    if (value === undefined) {
      setInnerValue(value);
    }
  }, [value]);
  return [mergedValue, triggerChange];
}

function contains(root, n) {
  if (!root) {
    return false;
  }

  return root.contains(n);
}

var Portal = react.forwardRef(function (props, ref) {
  var didUpdate = props.didUpdate,
      getContainer = props.getContainer,
      children = props.children;
  var containerRef = react.useRef(); // Ref return nothing, only for wrapper check exist

  react.useImperativeHandle(ref, function () {
    return {};
  }); // Create container in client side with sync to avoid useEffect not get ref

  var initRef = react.useRef(false);

  if (!initRef.current && canUseDom()) {
    containerRef.current = getContainer();
    initRef.current = true;
  } // [Legacy] Used by `rc-trigger`


  react.useEffect(function () {
    didUpdate === null || didUpdate === void 0 ? void 0 : didUpdate(props);
  });
  react.useEffect(function () {
    return function () {
      var _containerRef$current, _containerRef$current2;

      // [Legacy] This should not be handle by Portal but parent PortalWrapper instead.
      // Since some component use `Portal` directly, we have to keep the logic here.
      (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : (_containerRef$current2 = _containerRef$current.parentNode) === null || _containerRef$current2 === void 0 ? void 0 : _containerRef$current2.removeChild(containerRef.current);
    };
  }, []);
  return containerRef.current ? reactDom.createPortal(children, containerRef.current) : null;
});

function isPointsEq(a1, a2, isAlignPoint) {
  if (isAlignPoint) {
    return a1[0] === a2[0];
  }

  return a1[0] === a2[0] && a1[1] === a2[1];
}

function getAlignFromPlacement(builtinPlacements, placementStr, align) {
  var baseAlign = builtinPlacements[placementStr] || {};
  return _objectSpread2$1(_objectSpread2$1({}, baseAlign), align);
}
function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
  var points = align.points;
  var placements = Object.keys(builtinPlacements);

  for (var i = 0; i < placements.length; i += 1) {
    var placement = placements[i];

    if (isPointsEq(builtinPlacements[placement].points, points, isAlignPoint)) {
      return "".concat(prefixCls, "-placement-").concat(placement);
    }
  }

  return '';
}

function getMotion(_ref) {
  var prefixCls = _ref.prefixCls,
      motion = _ref.motion,
      animation = _ref.animation,
      transitionName = _ref.transitionName;

  if (motion) {
    return motion;
  }

  if (animation) {
    return {
      motionName: "".concat(prefixCls, "-").concat(animation)
    };
  }

  if (transitionName) {
    return {
      motionName: transitionName
    };
  }

  return null;
}

function Mask(props) {
  var prefixCls = props.prefixCls,
      visible = props.visible,
      zIndex = props.zIndex,
      mask = props.mask,
      maskMotion = props.maskMotion,
      maskAnimation = props.maskAnimation,
      maskTransitionName = props.maskTransitionName;

  if (!mask) {
    return null;
  }

  var motion = {};

  if (maskMotion || maskTransitionName || maskAnimation) {
    motion = _objectSpread2$1({
      motionAppear: true
    }, getMotion({
      motion: maskMotion,
      prefixCls: prefixCls,
      transitionName: maskTransitionName,
      animation: maskAnimation
    }));
  }

  return /*#__PURE__*/react.createElement(CSSMotion, _extends$1({}, motion, {
    visible: visible,
    removeOnLeave: true
  }), function (_ref) {
    var className = _ref.className;
    return /*#__PURE__*/react.createElement("div", {
      style: {
        zIndex: zIndex
      },
      className: classnames("".concat(prefixCls, "-mask"), className)
    });
  });
}

var isVisible = (function (element) {
  if (!element) {
    return false;
  }

  if (element.offsetParent) {
    return true;
  }

  if (element.getBBox) {
    var box = element.getBBox();

    if (box.width || box.height) {
      return true;
    }
  }

  if (element.getBoundingClientRect) {
    var _box = element.getBoundingClientRect();

    if (_box.width || _box.height) {
      return true;
    }
  }

  return false;
});

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var vendorPrefix;
var jsCssMap = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  // IE did it wrong again ...
  ms: '-ms-',
  O: '-o-'
};

function getVendorPrefix() {
  if (vendorPrefix !== undefined) {
    return vendorPrefix;
  }

  vendorPrefix = '';
  var style = document.createElement('p').style;
  var testProp = 'Transform';

  for (var key in jsCssMap) {
    if (key + testProp in style) {
      vendorPrefix = key;
    }
  }

  return vendorPrefix;
}

function getTransitionName() {
  return getVendorPrefix() ? "".concat(getVendorPrefix(), "TransitionProperty") : 'transitionProperty';
}

function getTransformName() {
  return getVendorPrefix() ? "".concat(getVendorPrefix(), "Transform") : 'transform';
}
function setTransitionProperty(node, value) {
  var name = getTransitionName();

  if (name) {
    node.style[name] = value;

    if (name !== 'transitionProperty') {
      node.style.transitionProperty = value;
    }
  }
}

function setTransform(node, value) {
  var name = getTransformName();

  if (name) {
    node.style[name] = value;

    if (name !== 'transform') {
      node.style.transform = value;
    }
  }
}

function getTransitionProperty(node) {
  return node.style.transitionProperty || node.style[getTransitionName()];
}
function getTransformXY(node) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());

  if (transform && transform !== 'none') {
    var matrix = transform.replace(/[^0-9\-.,]/g, '').split(',');
    return {
      x: parseFloat(matrix[12] || matrix[4], 0),
      y: parseFloat(matrix[13] || matrix[5], 0)
    };
  }

  return {
    x: 0,
    y: 0
  };
}
var matrix2d = /matrix\((.*)\)/;
var matrix3d = /matrix3d\((.*)\)/;
function setTransformXY(node, xy) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());

  if (transform && transform !== 'none') {
    var arr;
    var match2d = transform.match(matrix2d);

    if (match2d) {
      match2d = match2d[1];
      arr = match2d.split(',').map(function (item) {
        return parseFloat(item, 10);
      });
      arr[4] = xy.x;
      arr[5] = xy.y;
      setTransform(node, "matrix(".concat(arr.join(','), ")"));
    } else {
      var match3d = transform.match(matrix3d)[1];
      arr = match3d.split(',').map(function (item) {
        return parseFloat(item, 10);
      });
      arr[12] = xy.x;
      arr[13] = xy.y;
      setTransform(node, "matrix3d(".concat(arr.join(','), ")"));
    }
  } else {
    setTransform(node, "translateX(".concat(xy.x, "px) translateY(").concat(xy.y, "px) translateZ(0)"));
  }
}

var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
var getComputedStyleX; // https://stackoverflow.com/a/3485654/3040605

function forceRelayout(elem) {
  var originalStyle = elem.style.display;
  elem.style.display = 'none';
  elem.offsetHeight; // eslint-disable-line

  elem.style.display = originalStyle;
}

function css(el, name, v) {
  var value = v;

  if (_typeof(name) === 'object') {
    for (var i in name) {
      if (name.hasOwnProperty(i)) {
        css(el, i, name[i]);
      }
    }

    return undefined;
  }

  if (typeof value !== 'undefined') {
    if (typeof value === 'number') {
      value = "".concat(value, "px");
    }

    el.style[name] = value;
    return undefined;
  }

  return getComputedStyleX(el, name);
}

function getClientPosition(elem) {
  var box;
  var x;
  var y;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement; // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式

  box = elem.getBoundingClientRect(); // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

  x = box.left;
  y = box.top; // In IE, most of the time, 2 extra pixels are added to the top and left
  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
  // IE6 standards mode, this border can be overridden by setting the
  // document element's border to zero -- thus, we cannot rely on the
  // offset always being 2 pixels.
  // In quirks mode, the offset can be determined by querying the body's
  // clientLeft/clientTop, but in standards mode, it is found by querying
  // the document element's clientLeft/clientTop.  Since we already called
  // getClientBoundingRect we have already forced a reflow, so it is not
  // too expensive just to query them all.
  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
  // 窗口边框标准是设 documentElement ,quirks 时设置 body
  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
  // 标准 ie 下 docElem.clientTop 就是 border-top
  // ie7 html 即窗口边框改变不了。永远为 2
  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;
  return {
    left: x,
    top: y
  };
}

function getScroll(w, top) {
  var ret = w["page".concat(top ? 'Y' : 'X', "Offset")];
  var method = "scroll".concat(top ? 'Top' : 'Left');

  if (typeof ret !== 'number') {
    var d = w.document; // ie6,7,8 standard mode

    ret = d.documentElement[method];

    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method];
    }
  }

  return ret;
}

function getScrollLeft(w) {
  return getScroll(w);
}

function getScrollTop(w) {
  return getScroll(w, true);
}

function getOffset(el) {
  var pos = getClientPosition(el);
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScrollLeft(w);
  pos.top += getScrollTop(w);
  return pos;
}
/**
 * A crude way of determining if an object is a window
 * @member util
 */


function isWindow(obj) {
  // must use == for ie8

  /* eslint eqeqeq:0 */
  return obj !== null && obj !== undefined && obj == obj.window;
}

function getDocument(node) {
  if (isWindow(node)) {
    return node.document;
  }

  if (node.nodeType === 9) {
    return node;
  }

  return node.ownerDocument;
}

function _getComputedStyle(elem, name, cs) {
  var computedStyle = cs;
  var val = '';
  var d = getDocument(elem);
  computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null); // https://github.com/kissyteam/kissy/issues/61

  if (computedStyle) {
    val = computedStyle.getPropertyValue(name) || computedStyle[name];
  }

  return val;
}

var _RE_NUM_NO_PX = new RegExp("^(".concat(RE_NUM, ")(?!px)[a-z%]+$"), 'i');

var RE_POS = /^(top|right|bottom|left)$/;
var CURRENT_STYLE = 'currentStyle';
var RUNTIME_STYLE = 'runtimeStyle';
var LEFT = 'left';
var PX = 'px';

function _getComputedStyleIE(elem, name) {
  // currentStyle maybe null
  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name]; // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
  // 在 ie 下不对，需要直接用 offset 方式
  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了
  // From the awesome hack by Dean Edwards
  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
  // If we're not dealing with a regular pixel number
  // but a number that has a weird ending, we need to convert it to pixels
  // exclude left right for relativity

  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
    // Remember the original values
    var style = elem.style;
    var left = style[LEFT];
    var rsLeft = elem[RUNTIME_STYLE][LEFT]; // prevent flashing of content

    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT]; // Put in the new values to get a computed value out

    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
    ret = style.pixelLeft + PX; // Revert the changed values

    style[LEFT] = left;
    elem[RUNTIME_STYLE][LEFT] = rsLeft;
  }

  return ret === '' ? 'auto' : ret;
}

if (typeof window !== 'undefined') {
  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
}

function getOffsetDirection(dir, option) {
  if (dir === 'left') {
    return option.useCssRight ? 'right' : dir;
  }

  return option.useCssBottom ? 'bottom' : dir;
}

function oppositeOffsetDirection(dir) {
  if (dir === 'left') {
    return 'right';
  } else if (dir === 'right') {
    return 'left';
  } else if (dir === 'top') {
    return 'bottom';
  } else if (dir === 'bottom') {
    return 'top';
  }
} // 设置 elem 相对 elem.ownerDocument 的坐标


function setLeftTop(elem, offset, option) {
  // set position first, in-case top/left are set even on static elem
  if (css(elem, 'position') === 'static') {
    elem.style.position = 'relative';
  }

  var presetH = -999;
  var presetV = -999;
  var horizontalProperty = getOffsetDirection('left', option);
  var verticalProperty = getOffsetDirection('top', option);
  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);

  if (horizontalProperty !== 'left') {
    presetH = 999;
  }

  if (verticalProperty !== 'top') {
    presetV = 999;
  }

  var originalTransition = '';
  var originalOffset = getOffset(elem);

  if ('left' in offset || 'top' in offset) {
    originalTransition = getTransitionProperty(elem) || '';
    setTransitionProperty(elem, 'none');
  }

  if ('left' in offset) {
    elem.style[oppositeHorizontalProperty] = '';
    elem.style[horizontalProperty] = "".concat(presetH, "px");
  }

  if ('top' in offset) {
    elem.style[oppositeVerticalProperty] = '';
    elem.style[verticalProperty] = "".concat(presetV, "px");
  } // force relayout


  forceRelayout(elem);
  var old = getOffset(elem);
  var originalStyle = {};

  for (var key in offset) {
    if (offset.hasOwnProperty(key)) {
      var dir = getOffsetDirection(key, option);
      var preset = key === 'left' ? presetH : presetV;
      var off = originalOffset[key] - old[key];

      if (dir === key) {
        originalStyle[dir] = preset + off;
      } else {
        originalStyle[dir] = preset - off;
      }
    }
  }

  css(elem, originalStyle); // force relayout

  forceRelayout(elem);

  if ('left' in offset || 'top' in offset) {
    setTransitionProperty(elem, originalTransition);
  }

  var ret = {};

  for (var _key in offset) {
    if (offset.hasOwnProperty(_key)) {
      var _dir = getOffsetDirection(_key, option);

      var _off = offset[_key] - originalOffset[_key];

      if (_key === _dir) {
        ret[_dir] = originalStyle[_dir] + _off;
      } else {
        ret[_dir] = originalStyle[_dir] - _off;
      }
    }
  }

  css(elem, ret);
}

function setTransform$1(elem, offset) {
  var originalOffset = getOffset(elem);
  var originalXY = getTransformXY(elem);
  var resultXY = {
    x: originalXY.x,
    y: originalXY.y
  };

  if ('left' in offset) {
    resultXY.x = originalXY.x + offset.left - originalOffset.left;
  }

  if ('top' in offset) {
    resultXY.y = originalXY.y + offset.top - originalOffset.top;
  }

  setTransformXY(elem, resultXY);
}

function setOffset(elem, offset, option) {
  if (option.ignoreShake) {
    var oriOffset = getOffset(elem);
    var oLeft = oriOffset.left.toFixed(0);
    var oTop = oriOffset.top.toFixed(0);
    var tLeft = offset.left.toFixed(0);
    var tTop = offset.top.toFixed(0);

    if (oLeft === tLeft && oTop === tTop) {
      return;
    }
  }

  if (option.useCssRight || option.useCssBottom) {
    setLeftTop(elem, offset, option);
  } else if (option.useCssTransform && getTransformName() in document.body.style) {
    setTransform$1(elem, offset);
  } else {
    setLeftTop(elem, offset, option);
  }
}

function each(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}

function isBorderBoxFn(elem) {
  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
}

var BOX_MODELS = ['margin', 'border', 'padding'];
var CONTENT_INDEX = -1;
var PADDING_INDEX = 2;
var BORDER_INDEX = 1;
var MARGIN_INDEX = 0;

function swap(elem, options, callback) {
  var old = {};
  var style = elem.style;
  var name; // Remember the old values, and insert the new ones

  for (name in options) {
    if (options.hasOwnProperty(name)) {
      old[name] = style[name];
      style[name] = options[name];
    }
  }

  callback.call(elem); // Revert the old values

  for (name in options) {
    if (options.hasOwnProperty(name)) {
      style[name] = old[name];
    }
  }
}

function getPBMWidth(elem, props, which) {
  var value = 0;
  var prop;
  var j;
  var i;

  for (j = 0; j < props.length; j++) {
    prop = props[j];

    if (prop) {
      for (i = 0; i < which.length; i++) {
        var cssProp = void 0;

        if (prop === 'border') {
          cssProp = "".concat(prop).concat(which[i], "Width");
        } else {
          cssProp = prop + which[i];
        }

        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
      }
    }
  }

  return value;
}

var domUtils = {
  getParent: function getParent(element) {
    var parent = element;

    do {
      if (parent.nodeType === 11 && parent.host) {
        parent = parent.host;
      } else {
        parent = parent.parentNode;
      }
    } while (parent && parent.nodeType !== 1 && parent.nodeType !== 9);

    return parent;
  }
};
each(['Width', 'Height'], function (name) {
  domUtils["doc".concat(name)] = function (refWin) {
    var d = refWin.document;
    return Math.max( // firefox chrome documentElement.scrollHeight< body.scrollHeight
    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
    d.documentElement["scroll".concat(name)], // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
    d.body["scroll".concat(name)], domUtils["viewport".concat(name)](d));
  };

  domUtils["viewport".concat(name)] = function (win) {
    // pc browser includes scrollbar in window.innerWidth
    var prop = "client".concat(name);
    var doc = win.document;
    var body = doc.body;
    var documentElement = doc.documentElement;
    var documentElementProp = documentElement[prop]; // 标准模式取 documentElement
    // backcompat 取 body

    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
  };
});
/*
 得到元素的大小信息
 @param elem
 @param name
 @param {String} [extra]  'padding' : (css width) + padding
 'border' : (css width) + padding + border
 'margin' : (css width) + padding + border + margin
 */

function getWH(elem, name, ex) {
  var extra = ex;

  if (isWindow(elem)) {
    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
  } else if (elem.nodeType === 9) {
    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
  }

  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
  var borderBoxValue = name === 'width' ? elem.getBoundingClientRect().width : elem.getBoundingClientRect().height;
  getComputedStyleX(elem);
  var isBorderBox = isBorderBoxFn(elem);
  var cssBoxValue = 0;

  if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
    borderBoxValue = undefined; // Fall back to computed then un computed css if necessary

    cssBoxValue = getComputedStyleX(elem, name);

    if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) {
      cssBoxValue = elem.style[name] || 0;
    } // Normalize '', auto, and prepare for extra


    cssBoxValue = parseFloat(cssBoxValue) || 0;
  }

  if (extra === undefined) {
    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
  }

  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
  var val = borderBoxValue || cssBoxValue;

  if (extra === CONTENT_INDEX) {
    if (borderBoxValueOrIsBorderBox) {
      return val - getPBMWidth(elem, ['border', 'padding'], which);
    }

    return cssBoxValue;
  } else if (borderBoxValueOrIsBorderBox) {
    if (extra === BORDER_INDEX) {
      return val;
    }

    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which) : getPBMWidth(elem, ['margin'], which));
  }

  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which);
}

var cssShow = {
  position: 'absolute',
  visibility: 'hidden',
  display: 'block'
}; // fix #119 : https://github.com/kissyteam/kissy/issues/119

function getWHIgnoreDisplay() {
  for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
    args[_key2] = arguments[_key2];
  }

  var val;
  var elem = args[0]; // in case elem is window
  // elem.offsetWidth === undefined

  if (elem.offsetWidth !== 0) {
    val = getWH.apply(undefined, args);
  } else {
    swap(elem, cssShow, function () {
      val = getWH.apply(undefined, args);
    });
  }

  return val;
}

each(['width', 'height'], function (name) {
  var first = name.charAt(0).toUpperCase() + name.slice(1);

  domUtils["outer".concat(first)] = function (el, includeMargin) {
    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
  };

  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

  domUtils[name] = function (elem, v) {
    var val = v;

    if (val !== undefined) {
      if (elem) {
        getComputedStyleX(elem);
        var isBorderBox = isBorderBoxFn(elem);

        if (isBorderBox) {
          val += getPBMWidth(elem, ['padding', 'border'], which);
        }

        return css(elem, name, val);
      }

      return undefined;
    }

    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
  };
});

function mix(to, from) {
  for (var i in from) {
    if (from.hasOwnProperty(i)) {
      to[i] = from[i];
    }
  }

  return to;
}

var utils = {
  getWindow: function getWindow(node) {
    if (node && node.document && node.setTimeout) {
      return node;
    }

    var doc = node.ownerDocument || node;
    return doc.defaultView || doc.parentWindow;
  },
  getDocument: getDocument,
  offset: function offset(el, value, option) {
    if (typeof value !== 'undefined') {
      setOffset(el, value, option || {});
    } else {
      return getOffset(el);
    }
  },
  isWindow: isWindow,
  each: each,
  css: css,
  clone: function clone(obj) {
    var i;
    var ret = {};

    for (i in obj) {
      if (obj.hasOwnProperty(i)) {
        ret[i] = obj[i];
      }
    }

    var overflow = obj.overflow;

    if (overflow) {
      for (i in obj) {
        if (obj.hasOwnProperty(i)) {
          ret.overflow[i] = obj.overflow[i];
        }
      }
    }

    return ret;
  },
  mix: mix,
  getWindowScrollLeft: function getWindowScrollLeft(w) {
    return getScrollLeft(w);
  },
  getWindowScrollTop: function getWindowScrollTop(w) {
    return getScrollTop(w);
  },
  merge: function merge() {
    var ret = {};

    for (var i = 0; i < arguments.length; i++) {
      utils.mix(ret, i < 0 || arguments.length <= i ? undefined : arguments[i]);
    }

    return ret;
  },
  viewportWidth: 0,
  viewportHeight: 0
};
mix(utils, domUtils);

/**
 * 得到会导致元素显示不全的祖先元素
 */

var getParent = utils.getParent;

function getOffsetParent(element) {
  if (utils.isWindow(element) || element.nodeType === 9) {
    return null;
  } // ie 这个也不是完全可行

  /*
   <div style="width: 50px;height: 100px;overflow: hidden">
   <div style="width: 50px;height: 100px;position: relative;" id="d6">
   元素 6 高 100px 宽 50px<br/>
   </div>
   </div>
   */
  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
  //  In other browsers it only includes elements with position absolute, relative or
  // fixed, not elements with overflow set to auto or scroll.
  //        if (UA.ie && ieMode < 8) {
  //            return element.offsetParent;
  //        }
  // 统一的 offsetParent 方法


  var doc = utils.getDocument(element);
  var body = doc.body;
  var parent;
  var positionStyle = utils.css(element, 'position');
  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';

  if (!skipStatic) {
    return element.nodeName.toLowerCase() === 'html' ? null : getParent(element);
  }

  for (parent = getParent(element); parent && parent !== body && parent.nodeType !== 9; parent = getParent(parent)) {
    positionStyle = utils.css(parent, 'position');

    if (positionStyle !== 'static') {
      return parent;
    }
  }

  return null;
}

var getParent$1 = utils.getParent;
function isAncestorFixed(element) {
  if (utils.isWindow(element) || element.nodeType === 9) {
    return false;
  }

  var doc = utils.getDocument(element);
  var body = doc.body;
  var parent = null;

  for (parent = getParent$1(element); parent && parent !== body; parent = getParent$1(parent)) {
    var positionStyle = utils.css(parent, 'position');

    if (positionStyle === 'fixed') {
      return true;
    }
  }

  return false;
}

/**
 * 获得元素的显示部分的区域
 */

function getVisibleRectForElement(element, alwaysByViewport) {
  var visibleRect = {
    left: 0,
    right: Infinity,
    top: 0,
    bottom: Infinity
  };
  var el = getOffsetParent(element);
  var doc = utils.getDocument(element);
  var win = doc.defaultView || doc.parentWindow;
  var body = doc.body;
  var documentElement = doc.documentElement; // Determine the size of the visible rect by climbing the dom accounting for
  // all scrollable containers.

  while (el) {
    // clientWidth is zero for inline block elements in ie.
    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) && // body may have overflow set on it, yet we still get the entire
    // viewport. In some browsers, el.offsetParent may be
    // document.documentElement, so check for that too.
    el !== body && el !== documentElement && utils.css(el, 'overflow') !== 'visible') {
      var pos = utils.offset(el); // add border

      pos.left += el.clientLeft;
      pos.top += el.clientTop;
      visibleRect.top = Math.max(visibleRect.top, pos.top);
      visibleRect.right = Math.min(visibleRect.right, // consider area without scrollBar
      pos.left + el.clientWidth);
      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
      visibleRect.left = Math.max(visibleRect.left, pos.left);
    } else if (el === body || el === documentElement) {
      break;
    }

    el = getOffsetParent(el);
  } // Set element position to fixed
  // make sure absolute element itself don't affect it's visible area
  // https://github.com/ant-design/ant-design/issues/7601


  var originalPosition = null;

  if (!utils.isWindow(element) && element.nodeType !== 9) {
    originalPosition = element.style.position;
    var position = utils.css(element, 'position');

    if (position === 'absolute') {
      element.style.position = 'fixed';
    }
  }

  var scrollX = utils.getWindowScrollLeft(win);
  var scrollY = utils.getWindowScrollTop(win);
  var viewportWidth = utils.viewportWidth(win);
  var viewportHeight = utils.viewportHeight(win);
  var documentWidth = documentElement.scrollWidth;
  var documentHeight = documentElement.scrollHeight; // scrollXXX on html is sync with body which means overflow: hidden on body gets wrong scrollXXX.
  // We should cut this ourself.

  var bodyStyle = window.getComputedStyle(body);

  if (bodyStyle.overflowX === 'hidden') {
    documentWidth = win.innerWidth;
  }

  if (bodyStyle.overflowY === 'hidden') {
    documentHeight = win.innerHeight;
  } // Reset element position after calculate the visible area


  if (element.style) {
    element.style.position = originalPosition;
  }

  if (alwaysByViewport || isAncestorFixed(element)) {
    // Clip by viewport's size.
    visibleRect.left = Math.max(visibleRect.left, scrollX);
    visibleRect.top = Math.max(visibleRect.top, scrollY);
    visibleRect.right = Math.min(visibleRect.right, scrollX + viewportWidth);
    visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + viewportHeight);
  } else {
    // Clip by document's size.
    var maxVisibleWidth = Math.max(documentWidth, scrollX + viewportWidth);
    visibleRect.right = Math.min(visibleRect.right, maxVisibleWidth);
    var maxVisibleHeight = Math.max(documentHeight, scrollY + viewportHeight);
    visibleRect.bottom = Math.min(visibleRect.bottom, maxVisibleHeight);
  }

  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
}

function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
  var pos = utils.clone(elFuturePos);
  var size = {
    width: elRegion.width,
    height: elRegion.height
  };

  if (overflow.adjustX && pos.left < visibleRect.left) {
    pos.left = visibleRect.left;
  } // Left edge inside and right edge outside viewport, try to resize it.


  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
    size.width -= pos.left + size.width - visibleRect.right;
  } // Right edge outside viewport, try to move it.


  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
    // 保证左边界和可视区域左边界对齐
    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
  } // Top edge outside viewport, try to move it.


  if (overflow.adjustY && pos.top < visibleRect.top) {
    pos.top = visibleRect.top;
  } // Top edge inside and bottom edge outside viewport, try to resize it.


  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
    size.height -= pos.top + size.height - visibleRect.bottom;
  } // Bottom edge outside viewport, try to move it.


  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
    // 保证上边界和可视区域上边界对齐
    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
  }

  return utils.mix(pos, size);
}

function getRegion(node) {
  var offset;
  var w;
  var h;

  if (!utils.isWindow(node) && node.nodeType !== 9) {
    offset = utils.offset(node);
    w = utils.outerWidth(node);
    h = utils.outerHeight(node);
  } else {
    var win = utils.getWindow(node);
    offset = {
      left: utils.getWindowScrollLeft(win),
      top: utils.getWindowScrollTop(win)
    };
    w = utils.viewportWidth(win);
    h = utils.viewportHeight(win);
  }

  offset.width = w;
  offset.height = h;
  return offset;
}

/**
 * 获取 node 上的 align 对齐点 相对于页面的坐标
 */
function getAlignOffset(region, align) {
  var V = align.charAt(0);
  var H = align.charAt(1);
  var w = region.width;
  var h = region.height;
  var x = region.left;
  var y = region.top;

  if (V === 'c') {
    y += h / 2;
  } else if (V === 'b') {
    y += h;
  }

  if (H === 'c') {
    x += w / 2;
  } else if (H === 'r') {
    x += w;
  }

  return {
    left: x,
    top: y
  };
}

function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
  var p1 = getAlignOffset(refNodeRegion, points[1]);
  var p2 = getAlignOffset(elRegion, points[0]);
  var diff = [p2.left - p1.left, p2.top - p1.top];
  return {
    left: Math.round(elRegion.left - diff[0] + offset[0] - targetOffset[0]),
    top: Math.round(elRegion.top - diff[1] + offset[1] - targetOffset[1])
  };
}

/**
 * align dom node flexibly
 * @author yiminghe@gmail.com
 */

function isFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
}

function isFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
}

function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
}

function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
}

function flip(points, reg, map) {
  var ret = [];
  utils.each(points, function (p) {
    ret.push(p.replace(reg, function (m) {
      return map[m];
    }));
  });
  return ret;
}

function flipOffset(offset, index) {
  offset[index] = -offset[index];
  return offset;
}

function convertOffset(str, offsetLen) {
  var n;

  if (/%$/.test(str)) {
    n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
  } else {
    n = parseInt(str, 10);
  }

  return n || 0;
}

function normalizeOffset(offset, el) {
  offset[0] = convertOffset(offset[0], el.width);
  offset[1] = convertOffset(offset[1], el.height);
}
/**
 * @param el
 * @param tgtRegion 参照节点所占的区域: { left, top, width, height }
 * @param align
 */


function doAlign(el, tgtRegion, align, isTgtRegionVisible) {
  var points = align.points;
  var offset = align.offset || [0, 0];
  var targetOffset = align.targetOffset || [0, 0];
  var overflow = align.overflow;
  var source = align.source || el;
  offset = [].concat(offset);
  targetOffset = [].concat(targetOffset);
  overflow = overflow || {};
  var newOverflowCfg = {};
  var fail = 0;
  var alwaysByViewport = !!(overflow && overflow.alwaysByViewport); // 当前节点可以被放置的显示区域

  var visibleRect = getVisibleRectForElement(source, alwaysByViewport); // 当前节点所占的区域, left/top/width/height

  var elRegion = getRegion(source); // 将 offset 转换成数值，支持百分比

  normalizeOffset(offset, elRegion);
  normalizeOffset(targetOffset, tgtRegion); // 当前节点将要被放置的位置

  var elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset, targetOffset); // 当前节点将要所处的区域

  var newElRegion = utils.merge(elRegion, elFuturePos); // 如果可视区域不能完全放置当前节点时允许调整

  if (visibleRect && (overflow.adjustX || overflow.adjustY) && isTgtRegionVisible) {
    if (overflow.adjustX) {
      // 如果横向不能放下
      if (isFailX(elFuturePos, elRegion, visibleRect)) {
        // 对齐位置反下
        var newPoints = flip(points, /[lr]/gi, {
          l: 'r',
          r: 'l'
        }); // 偏移量也反下

        var newOffset = flipOffset(offset, 0);
        var newTargetOffset = flipOffset(targetOffset, 0);
        var newElFuturePos = getElFuturePos(elRegion, tgtRegion, newPoints, newOffset, newTargetOffset);

        if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = newPoints;
          offset = newOffset;
          targetOffset = newTargetOffset;
        }
      }
    }

    if (overflow.adjustY) {
      // 如果纵向不能放下
      if (isFailY(elFuturePos, elRegion, visibleRect)) {
        // 对齐位置反下
        var _newPoints = flip(points, /[tb]/gi, {
          t: 'b',
          b: 't'
        }); // 偏移量也反下


        var _newOffset = flipOffset(offset, 1);

        var _newTargetOffset = flipOffset(targetOffset, 1);

        var _newElFuturePos = getElFuturePos(elRegion, tgtRegion, _newPoints, _newOffset, _newTargetOffset);

        if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = _newPoints;
          offset = _newOffset;
          targetOffset = _newTargetOffset;
        }
      }
    } // 如果失败，重新计算当前节点将要被放置的位置


    if (fail) {
      elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset, targetOffset);
      utils.mix(newElRegion, elFuturePos);
    }

    var isStillFailX = isFailX(elFuturePos, elRegion, visibleRect);
    var isStillFailY = isFailY(elFuturePos, elRegion, visibleRect); // 检查反下后的位置是否可以放下了，如果仍然放不下：
    // 1. 复原修改过的定位参数

    if (isStillFailX || isStillFailY) {
      var _newPoints2 = points; // 重置对应部分的翻转逻辑

      if (isStillFailX) {
        _newPoints2 = flip(points, /[lr]/gi, {
          l: 'r',
          r: 'l'
        });
      }

      if (isStillFailY) {
        _newPoints2 = flip(points, /[tb]/gi, {
          t: 'b',
          b: 't'
        });
      }

      points = _newPoints2;
      offset = align.offset || [0, 0];
      targetOffset = align.targetOffset || [0, 0];
    } // 2. 只有指定了可以调整当前方向才调整


    newOverflowCfg.adjustX = overflow.adjustX && isStillFailX;
    newOverflowCfg.adjustY = overflow.adjustY && isStillFailY; // 确实要调整，甚至可能会调整高度宽度

    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
      newElRegion = adjustForViewport(elFuturePos, elRegion, visibleRect, newOverflowCfg);
    }
  } // need judge to in case set fixed with in css on height auto element


  if (newElRegion.width !== elRegion.width) {
    utils.css(source, 'width', utils.width(source) + newElRegion.width - elRegion.width);
  }

  if (newElRegion.height !== elRegion.height) {
    utils.css(source, 'height', utils.height(source) + newElRegion.height - elRegion.height);
  } // https://github.com/kissyteam/kissy/issues/190
  // 相对于屏幕位置没变，而 left/top 变了
  // 例如 <div 'relative'><el absolute></div>


  utils.offset(source, {
    left: newElRegion.left,
    top: newElRegion.top
  }, {
    useCssRight: align.useCssRight,
    useCssBottom: align.useCssBottom,
    useCssTransform: align.useCssTransform,
    ignoreShake: align.ignoreShake
  });
  return {
    points: points,
    offset: offset,
    targetOffset: targetOffset,
    overflow: newOverflowCfg
  };
}
/**
 *  2012-04-26 yiminghe@gmail.com
 *   - 优化智能对齐算法
 *   - 慎用 resizeXX
 *
 *  2011-07-13 yiminghe@gmail.com note:
 *   - 增加智能对齐，以及大小调整选项
 **/

function isOutOfVisibleRect(target, alwaysByViewport) {
  var visibleRect = getVisibleRectForElement(target, alwaysByViewport);
  var targetRegion = getRegion(target);
  return !visibleRect || targetRegion.left + targetRegion.width <= visibleRect.left || targetRegion.top + targetRegion.height <= visibleRect.top || targetRegion.left >= visibleRect.right || targetRegion.top >= visibleRect.bottom;
}

function alignElement(el, refNode, align) {
  var target = align.target || refNode;
  var refNodeRegion = getRegion(target);
  var isTargetNotOutOfVisible = !isOutOfVisibleRect(target, align.overflow && align.overflow.alwaysByViewport);
  return doAlign(el, refNodeRegion, align, isTargetNotOutOfVisible);
}

alignElement.__getOffsetParent = getOffsetParent;
alignElement.__getVisibleRectForElement = getVisibleRectForElement;

/**
 * `tgtPoint`: { pageX, pageY } or { clientX, clientY }.
 * If client position provided, will internal convert to page position.
 */

function alignPoint(el, tgtPoint, align) {
  var pageX;
  var pageY;
  var doc = utils.getDocument(el);
  var win = doc.defaultView || doc.parentWindow;
  var scrollX = utils.getWindowScrollLeft(win);
  var scrollY = utils.getWindowScrollTop(win);
  var viewportWidth = utils.viewportWidth(win);
  var viewportHeight = utils.viewportHeight(win);

  if ('pageX' in tgtPoint) {
    pageX = tgtPoint.pageX;
  } else {
    pageX = scrollX + tgtPoint.clientX;
  }

  if ('pageY' in tgtPoint) {
    pageY = tgtPoint.pageY;
  } else {
    pageY = scrollY + tgtPoint.clientY;
  }

  var tgtRegion = {
    left: pageX,
    top: pageY,
    width: 0,
    height: 0
  };
  var pointInView = pageX >= 0 && pageX <= scrollX + viewportWidth && pageY >= 0 && pageY <= scrollY + viewportHeight; // Provide default target point

  var points = [align.points[0], 'cc'];
  return doAlign(el, tgtRegion, _objectSpread2({}, align, {
    points: points
  }), pointInView);
}

function isSamePoint(prev, next) {
  if (prev === next) return true;
  if (!prev || !next) return false;

  if ('pageX' in next && 'pageY' in next) {
    return prev.pageX === next.pageX && prev.pageY === next.pageY;
  }

  if ('clientX' in next && 'clientY' in next) {
    return prev.clientX === next.clientX && prev.clientY === next.clientY;
  }

  return false;
}
function restoreFocus(activeElement, container) {
  // Focus back if is in the container
  if (activeElement !== document.activeElement && contains(container, activeElement) && typeof activeElement.focus === 'function') {
    activeElement.focus();
  }
}
function monitorResize(element, callback) {
  var prevWidth = null;
  var prevHeight = null;

  function onResize(_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
        target = _ref2[0].target;

    if (!document.documentElement.contains(target)) return;

    var _target$getBoundingCl = target.getBoundingClientRect(),
        width = _target$getBoundingCl.width,
        height = _target$getBoundingCl.height;

    var fixedWidth = Math.floor(width);
    var fixedHeight = Math.floor(height);

    if (prevWidth !== fixedWidth || prevHeight !== fixedHeight) {
      // https://webkit.org/blog/9997/resizeobserver-in-webkit/
      Promise.resolve().then(function () {
        callback({
          width: fixedWidth,
          height: fixedHeight
        });
      });
    }

    prevWidth = fixedWidth;
    prevHeight = fixedHeight;
  }

  var resizeObserver = new index(onResize);

  if (element) {
    resizeObserver.observe(element);
  }

  return function () {
    resizeObserver.disconnect();
  };
}

var useBuffer = (function (callback, buffer) {
  var calledRef = react.useRef(false);
  var timeoutRef = react.useRef(null);

  function cancelTrigger() {
    window.clearTimeout(timeoutRef.current);
  }

  function trigger(force) {
    if (!calledRef.current || force === true) {
      if (callback() === false) {
        // Not delay since callback cancelled self
        return;
      }

      calledRef.current = true;
      cancelTrigger();
      timeoutRef.current = window.setTimeout(function () {
        calledRef.current = false;
      }, buffer);
    } else {
      cancelTrigger();
      timeoutRef.current = window.setTimeout(function () {
        calledRef.current = false;
        trigger();
      }, buffer);
    }
  }

  return [trigger, function () {
    calledRef.current = false;
    cancelTrigger();
  }];
});

function getElement(func) {
  if (typeof func !== 'function') return null;
  return func();
}

function getPoint(point) {
  if (_typeof$1(point) !== 'object' || !point) return null;
  return point;
}

var Align = function Align(_ref, ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      target = _ref.target,
      align = _ref.align,
      onAlign = _ref.onAlign,
      monitorWindowResize = _ref.monitorWindowResize,
      _ref$monitorBufferTim = _ref.monitorBufferTime,
      monitorBufferTime = _ref$monitorBufferTim === void 0 ? 0 : _ref$monitorBufferTim;
  var cacheRef = react.useRef({});
  var nodeRef = react.useRef();
  var childNode = react.Children.only(children); // ===================== Align ======================
  // We save the props here to avoid closure makes props ood

  var forceAlignPropsRef = react.useRef({});
  forceAlignPropsRef.current.disabled = disabled;
  forceAlignPropsRef.current.target = target;
  forceAlignPropsRef.current.onAlign = onAlign;

  var _useBuffer = useBuffer(function () {
    var _forceAlignPropsRef$c = forceAlignPropsRef.current,
        latestDisabled = _forceAlignPropsRef$c.disabled,
        latestTarget = _forceAlignPropsRef$c.target,
        latestOnAlign = _forceAlignPropsRef$c.onAlign;

    if (!latestDisabled && latestTarget) {
      var source = nodeRef.current;
      var result;
      var element = getElement(latestTarget);
      var point = getPoint(latestTarget);
      cacheRef.current.element = element;
      cacheRef.current.point = point; // IE lose focus after element realign
      // We should record activeElement and restore later

      var _document = document,
          activeElement = _document.activeElement; // We only align when element is visible

      if (element && isVisible(element)) {
        result = alignElement(source, element, align);
      } else if (point) {
        result = alignPoint(source, point, align);
      }

      restoreFocus(activeElement, source);

      if (latestOnAlign && result) {
        latestOnAlign(source, result);
      }

      return true;
    }

    return false;
  }, monitorBufferTime),
      _useBuffer2 = _slicedToArray(_useBuffer, 2),
      _forceAlign = _useBuffer2[0],
      cancelForceAlign = _useBuffer2[1]; // ===================== Effect =====================
  // Listen for target updated


  var resizeMonitor = react.useRef({
    cancel: function cancel() {}
  }); // Listen for source updated

  var sourceResizeMonitor = react.useRef({
    cancel: function cancel() {}
  });
  react.useEffect(function () {
    var element = getElement(target);
    var point = getPoint(target);

    if (nodeRef.current !== sourceResizeMonitor.current.element) {
      sourceResizeMonitor.current.cancel();
      sourceResizeMonitor.current.element = nodeRef.current;
      sourceResizeMonitor.current.cancel = monitorResize(nodeRef.current, _forceAlign);
    }

    if (cacheRef.current.element !== element || !isSamePoint(cacheRef.current.point, point)) {
      _forceAlign(); // Add resize observer


      if (resizeMonitor.current.element !== element) {
        resizeMonitor.current.cancel();
        resizeMonitor.current.element = element;
        resizeMonitor.current.cancel = monitorResize(element, _forceAlign);
      }
    }
  }); // Listen for disabled change

  react.useEffect(function () {
    if (!disabled) {
      _forceAlign();
    } else {
      cancelForceAlign();
    }
  }, [disabled]); // Listen for window resize

  var winResizeRef = react.useRef(null);
  react.useEffect(function () {
    if (monitorWindowResize) {
      if (!winResizeRef.current) {
        winResizeRef.current = addEventListenerWrap(window, 'resize', _forceAlign);
      }
    } else if (winResizeRef.current) {
      winResizeRef.current.remove();
      winResizeRef.current = null;
    }
  }, [monitorWindowResize]); // Clear all if unmount

  react.useEffect(function () {
    return function () {
      resizeMonitor.current.cancel();
      sourceResizeMonitor.current.cancel();
      if (winResizeRef.current) winResizeRef.current.remove();
      cancelForceAlign();
    };
  }, []); // ====================== Ref =======================

  react.useImperativeHandle(ref, function () {
    return {
      forceAlign: function forceAlign() {
        return _forceAlign(true);
      }
    };
  }); // ===================== Render =====================

  if (react.isValidElement(childNode)) {
    childNode = react.cloneElement(childNode, {
      ref: composeRef(childNode.ref, nodeRef)
    });
  }

  return childNode;
};

var RefAlign = react.forwardRef(Align);
RefAlign.displayName = 'Align';

var StatusQueue = ['measure', 'align', null, 'motion'];
var useVisibleStatus = (function (visible, doMeasure) {
  var _useState = react.useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      status = _useState2[0],
      setInternalStatus = _useState2[1];

  var rafRef = react.useRef();
  var destroyRef = react.useRef(false);

  function setStatus(nextStatus) {
    if (!destroyRef.current) {
      setInternalStatus(nextStatus);
    }
  }

  function cancelRaf() {
    wrapperRaf$1.cancel(rafRef.current);
  }

  function goNextStatus(callback) {
    cancelRaf();
    rafRef.current = wrapperRaf$1(function () {
      // Only align should be manually trigger
      setStatus(function (prev) {
        switch (status) {
          case 'align':
            return 'motion';

          case 'motion':
            return 'stable';
        }

        return prev;
      });
      callback === null || callback === void 0 ? void 0 : callback();
    });
  } // Init status


  react.useEffect(function () {
    setStatus('measure');
  }, [visible]); // Go next status

  react.useEffect(function () {
    switch (status) {
      case 'measure':
        doMeasure();
        break;
    }

    if (status) {
      rafRef.current = wrapperRaf$1( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
        var index, nextStatus;
        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                index = StatusQueue.indexOf(status);
                nextStatus = StatusQueue[index + 1];

                if (nextStatus && index !== -1) {
                  setStatus(nextStatus);
                }

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })));
    }
  }, [status]);
  react.useEffect(function () {
    return function () {
      destroyRef.current = true;
      cancelRaf();
    };
  }, []);
  return [status, goNextStatus];
});

var useStretchStyle = (function (stretch) {
  var _React$useState = react.useState({
    width: 0,
    height: 0
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      targetSize = _React$useState2[0],
      setTargetSize = _React$useState2[1];

  function measureStretch(element) {
    setTargetSize({
      width: element.offsetWidth,
      height: element.offsetHeight
    });
  } // Merge stretch style


  var style = react.useMemo(function () {
    var sizeStyle = {};

    if (stretch) {
      var width = targetSize.width,
          height = targetSize.height; // Stretch with target

      if (stretch.indexOf('height') !== -1 && height) {
        sizeStyle.height = height;
      } else if (stretch.indexOf('minHeight') !== -1 && height) {
        sizeStyle.minHeight = height;
      }

      if (stretch.indexOf('width') !== -1 && width) {
        sizeStyle.width = width;
      } else if (stretch.indexOf('minWidth') !== -1 && width) {
        sizeStyle.minWidth = width;
      }
    }

    return sizeStyle;
  }, [stretch, targetSize]);
  return [style, measureStretch];
});

var PopupInner = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var visible = props.visible,
      prefixCls = props.prefixCls,
      className = props.className,
      style = props.style,
      children = props.children,
      zIndex = props.zIndex,
      stretch = props.stretch,
      destroyPopupOnHide = props.destroyPopupOnHide,
      forceRender = props.forceRender,
      align = props.align,
      point = props.point,
      getRootDomNode = props.getRootDomNode,
      getClassNameFromAlign = props.getClassNameFromAlign,
      onAlign = props.onAlign,
      onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave,
      onMouseDown = props.onMouseDown,
      onTouchStart = props.onTouchStart;
  var alignRef = react.useRef();
  var elementRef = react.useRef();

  var _useState = react.useState(),
      _useState2 = _slicedToArray(_useState, 2),
      alignedClassName = _useState2[0],
      setAlignedClassName = _useState2[1]; // ======================= Measure ========================


  var _useStretchStyle = useStretchStyle(stretch),
      _useStretchStyle2 = _slicedToArray(_useStretchStyle, 2),
      stretchStyle = _useStretchStyle2[0],
      measureStretchStyle = _useStretchStyle2[1];

  function doMeasure() {
    if (stretch) {
      measureStretchStyle(getRootDomNode());
    }
  } // ======================== Status ========================


  var _useVisibleStatus = useVisibleStatus(visible, doMeasure),
      _useVisibleStatus2 = _slicedToArray(_useVisibleStatus, 2),
      status = _useVisibleStatus2[0],
      goNextStatus = _useVisibleStatus2[1]; // ======================== Aligns ========================


  var prepareResolveRef = react.useRef(); // `target` on `rc-align` can accept as a function to get the bind element or a point.
  // ref: https://www.npmjs.com/package/rc-align

  function getAlignTarget() {
    if (point) {
      return point;
    }

    return getRootDomNode;
  }

  function forceAlign() {
    var _alignRef$current;

    (_alignRef$current = alignRef.current) === null || _alignRef$current === void 0 ? void 0 : _alignRef$current.forceAlign();
  }

  function onInternalAlign(popupDomNode, matchAlign) {
    if (status === 'align') {
      var nextAlignedClassName = getClassNameFromAlign(matchAlign);
      setAlignedClassName(nextAlignedClassName); // Repeat until not more align needed

      if (alignedClassName !== nextAlignedClassName) {
        Promise.resolve().then(function () {
          forceAlign();
        });
      } else {
        goNextStatus(function () {
          var _prepareResolveRef$cu;

          (_prepareResolveRef$cu = prepareResolveRef.current) === null || _prepareResolveRef$cu === void 0 ? void 0 : _prepareResolveRef$cu.call(prepareResolveRef);
        });
      }

      onAlign === null || onAlign === void 0 ? void 0 : onAlign(popupDomNode, matchAlign);
    }
  } // ======================== Motion ========================


  var motion = _objectSpread2$1({}, getMotion(props));

  ['onAppearEnd', 'onEnterEnd', 'onLeaveEnd'].forEach(function (eventName) {
    var originHandler = motion[eventName];

    motion[eventName] = function (element, event) {
      goNextStatus();
      return originHandler === null || originHandler === void 0 ? void 0 : originHandler(element, event);
    };
  });

  function onShowPrepare() {
    return new Promise(function (resolve) {
      prepareResolveRef.current = resolve;
    });
  } // Go to stable directly when motion not provided


  react.useEffect(function () {
    if (!motion.motionName && status === 'motion') {
      goNextStatus();
    }
  }, [motion.motionName, status]); // ========================= Refs =========================

  react.useImperativeHandle(ref, function () {
    return {
      forceAlign: forceAlign,
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  }); // ======================== Render ========================

  var mergedStyle = _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, stretchStyle), {}, {
    zIndex: zIndex
  }, style), {}, {
    opacity: status === 'motion' || status === 'stable' || !visible ? undefined : 0,
    pointerEvents: status === 'stable' ? undefined : 'none'
  }); // Align status


  var alignDisabled = true;

  if ((align === null || align === void 0 ? void 0 : align.points) && (status === 'align' || status === 'stable')) {
    alignDisabled = false;
  }

  var childNode = children; // Wrapper when multiple children

  if (react.Children.count(children) > 1) {
    childNode = /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-content")
    }, children);
  }

  return /*#__PURE__*/react.createElement(CSSMotion, _extends$1({
    visible: visible,
    ref: elementRef,
    leavedClassName: "".concat(prefixCls, "-hidden")
  }, motion, {
    onAppearPrepare: onShowPrepare,
    onEnterPrepare: onShowPrepare,
    removeOnLeave: destroyPopupOnHide,
    forceRender: forceRender
  }), function (_ref, motionRef) {
    var motionClassName = _ref.className,
        motionStyle = _ref.style;
    var mergedClassName = classnames(prefixCls, className, alignedClassName, motionClassName);
    return /*#__PURE__*/react.createElement(RefAlign, {
      target: getAlignTarget(),
      key: "popup",
      ref: alignRef,
      monitorWindowResize: true,
      disabled: alignDisabled,
      align: align,
      onAlign: onInternalAlign
    }, /*#__PURE__*/react.createElement("div", {
      ref: motionRef,
      className: mergedClassName,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onMouseDownCapture: onMouseDown,
      onTouchStartCapture: onTouchStart,
      style: _objectSpread2$1(_objectSpread2$1({}, motionStyle), mergedStyle)
    }, childNode));
  });
});
PopupInner.displayName = 'PopupInner';

var MobilePopupInner = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var prefixCls = props.prefixCls,
      visible = props.visible,
      zIndex = props.zIndex,
      children = props.children,
      _props$mobile = props.mobile;
  _props$mobile = _props$mobile === void 0 ? {} : _props$mobile;
  var popupClassName = _props$mobile.popupClassName,
      popupStyle = _props$mobile.popupStyle,
      _props$mobile$popupMo = _props$mobile.popupMotion,
      popupMotion = _props$mobile$popupMo === void 0 ? {} : _props$mobile$popupMo,
      popupRender = _props$mobile.popupRender;
  var elementRef = react.useRef(); // ========================= Refs =========================

  react.useImperativeHandle(ref, function () {
    return {
      forceAlign: function forceAlign() {},
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  }); // ======================== Render ========================

  var mergedStyle = _objectSpread2$1({
    zIndex: zIndex
  }, popupStyle);

  var childNode = children; // Wrapper when multiple children

  if (react.Children.count(children) > 1) {
    childNode = /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-content")
    }, children);
  } // Mobile support additional render


  if (popupRender) {
    childNode = popupRender(childNode);
  }

  return /*#__PURE__*/react.createElement(CSSMotion, _extends$1({
    visible: visible,
    ref: elementRef,
    removeOnLeave: true
  }, popupMotion), function (_ref, motionRef) {
    var motionClassName = _ref.className,
        motionStyle = _ref.style;
    var mergedClassName = classnames(prefixCls, popupClassName, motionClassName);
    return /*#__PURE__*/react.createElement("div", {
      ref: motionRef,
      className: mergedClassName,
      style: _objectSpread2$1(_objectSpread2$1({}, motionStyle), mergedStyle)
    }, childNode);
  });
});
MobilePopupInner.displayName = 'MobilePopupInner';

var Popup = /*#__PURE__*/react.forwardRef(function (_ref, ref) {
  var visible = _ref.visible,
      mobile = _ref.mobile,
      props = _objectWithoutProperties(_ref, ["visible", "mobile"]);

  var _useState = react.useState(visible),
      _useState2 = _slicedToArray(_useState, 2),
      innerVisible = _useState2[0],
      serInnerVisible = _useState2[1];

  var _useState3 = react.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      inMobile = _useState4[0],
      setInMobile = _useState4[1];

  var cloneProps = _objectSpread2$1(_objectSpread2$1({}, props), {}, {
    visible: innerVisible
  }); // We check mobile in visible changed here.
  // And this also delay set `innerVisible` to avoid popup component render flash


  react.useEffect(function () {
    serInnerVisible(visible);

    if (visible && mobile) {
      setInMobile(isMobile());
    }
  }, [visible, mobile]);
  var popupNode = inMobile ? /*#__PURE__*/react.createElement(MobilePopupInner, _extends$1({}, cloneProps, {
    mobile: mobile,
    ref: ref
  })) : /*#__PURE__*/react.createElement(PopupInner, _extends$1({}, cloneProps, {
    ref: ref
  })); // We can use fragment directly but this may failed some selector usage. Keep as origin logic

  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(Mask, cloneProps), popupNode);
});
Popup.displayName = 'Popup';

var TriggerContext = /*#__PURE__*/react.createContext(null);

function noop() {}

function returnEmptyString() {
  return '';
}

function returnDocument(element) {
  if (element) {
    return element.ownerDocument;
  }

  return window.document;
}

var ALL_HANDLERS = ['onClick', 'onMouseDown', 'onTouchStart', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur', 'onContextMenu'];
/**
 * Internal usage. Do not use in your code since this will be removed.
 */

function generateTrigger(PortalComponent) {
  var Trigger = /*#__PURE__*/function (_React$Component) {
    _inherits(Trigger, _React$Component);

    var _super = _createSuper(Trigger);

    function Trigger(props) {
      var _this;

      _classCallCheck(this, Trigger);

      _this = _super.call(this, props);
      _this.popupRef = /*#__PURE__*/react.createRef();
      _this.triggerRef = /*#__PURE__*/react.createRef();

      _this.onMouseEnter = function (e) {
        var mouseEnterDelay = _this.props.mouseEnterDelay;

        _this.fireEvents('onMouseEnter', e);

        _this.delaySetPopupVisible(true, mouseEnterDelay, mouseEnterDelay ? null : e);
      };

      _this.onMouseMove = function (e) {
        _this.fireEvents('onMouseMove', e);

        _this.setPoint(e);
      };

      _this.onMouseLeave = function (e) {
        _this.fireEvents('onMouseLeave', e);

        _this.delaySetPopupVisible(false, _this.props.mouseLeaveDelay);
      };

      _this.onPopupMouseEnter = function () {
        _this.clearDelayTimer();
      };

      _this.onPopupMouseLeave = function (e) {
        var _this$popupRef$curren;

        // https://github.com/react-component/trigger/pull/13
        // react bug?
        if (e.relatedTarget && !e.relatedTarget.setTimeout && contains((_this$popupRef$curren = _this.popupRef.current) === null || _this$popupRef$curren === void 0 ? void 0 : _this$popupRef$curren.getElement(), e.relatedTarget)) {
          return;
        }

        _this.delaySetPopupVisible(false, _this.props.mouseLeaveDelay);
      };

      _this.onFocus = function (e) {
        _this.fireEvents('onFocus', e); // incase focusin and focusout


        _this.clearDelayTimer();

        if (_this.isFocusToShow()) {
          _this.focusTime = Date.now();

          _this.delaySetPopupVisible(true, _this.props.focusDelay);
        }
      };

      _this.onMouseDown = function (e) {
        _this.fireEvents('onMouseDown', e);

        _this.preClickTime = Date.now();
      };

      _this.onTouchStart = function (e) {
        _this.fireEvents('onTouchStart', e);

        _this.preTouchTime = Date.now();
      };

      _this.onBlur = function (e) {
        _this.fireEvents('onBlur', e);

        _this.clearDelayTimer();

        if (_this.isBlurToHide()) {
          _this.delaySetPopupVisible(false, _this.props.blurDelay);
        }
      };

      _this.onContextMenu = function (e) {
        e.preventDefault();

        _this.fireEvents('onContextMenu', e);

        _this.setPopupVisible(true, e);
      };

      _this.onContextMenuClose = function () {
        if (_this.isContextMenuToShow()) {
          _this.close();
        }
      };

      _this.onClick = function (event) {
        _this.fireEvents('onClick', event); // focus will trigger click


        if (_this.focusTime) {
          var preTime;

          if (_this.preClickTime && _this.preTouchTime) {
            preTime = Math.min(_this.preClickTime, _this.preTouchTime);
          } else if (_this.preClickTime) {
            preTime = _this.preClickTime;
          } else if (_this.preTouchTime) {
            preTime = _this.preTouchTime;
          }

          if (Math.abs(preTime - _this.focusTime) < 20) {
            return;
          }

          _this.focusTime = 0;
        }

        _this.preClickTime = 0;
        _this.preTouchTime = 0; // Only prevent default when all the action is click.
        // https://github.com/ant-design/ant-design/issues/17043
        // https://github.com/ant-design/ant-design/issues/17291

        if (_this.isClickToShow() && (_this.isClickToHide() || _this.isBlurToHide()) && event && event.preventDefault) {
          event.preventDefault();
        }

        var nextVisible = !_this.state.popupVisible;

        if (_this.isClickToHide() && !nextVisible || nextVisible && _this.isClickToShow()) {
          _this.setPopupVisible(!_this.state.popupVisible, event);
        }
      };

      _this.onPopupMouseDown = function () {
        _this.hasPopupMouseDown = true;
        clearTimeout(_this.mouseDownTimeout);
        _this.mouseDownTimeout = window.setTimeout(function () {
          _this.hasPopupMouseDown = false;
        }, 0);

        if (_this.context) {
          var _this$context;

          (_this$context = _this.context).onPopupMouseDown.apply(_this$context, arguments);
        }
      };

      _this.onDocumentClick = function (event) {
        if (_this.props.mask && !_this.props.maskClosable) {
          return;
        }

        var target = event.target;

        var root = _this.getRootDomNode();

        var popupNode = _this.getPopupDomNode();

        if (!contains(root, target) && !contains(popupNode, target) && !_this.hasPopupMouseDown) {
          _this.close();
        }
      };

      _this.getRootDomNode = function () {
        var getTriggerDOMNode = _this.props.getTriggerDOMNode;

        if (getTriggerDOMNode) {
          return getTriggerDOMNode(_this.triggerRef.current);
        }

        try {
          var domNode = findDOMNode(_this.triggerRef.current);

          if (domNode) {
            return domNode;
          }
        } catch (err) {// Do nothing
        }

        return reactDom.findDOMNode(_assertThisInitialized(_this));
      };

      _this.getPopupClassNameFromAlign = function (align) {
        var className = [];
        var _this$props = _this.props,
            popupPlacement = _this$props.popupPlacement,
            builtinPlacements = _this$props.builtinPlacements,
            prefixCls = _this$props.prefixCls,
            alignPoint = _this$props.alignPoint,
            getPopupClassNameFromAlign = _this$props.getPopupClassNameFromAlign;

        if (popupPlacement && builtinPlacements) {
          className.push(getAlignPopupClassName(builtinPlacements, prefixCls, align, alignPoint));
        }

        if (getPopupClassNameFromAlign) {
          className.push(getPopupClassNameFromAlign(align));
        }

        return className.join(' ');
      };

      _this.getComponent = function () {
        var _this$props2 = _this.props,
            prefixCls = _this$props2.prefixCls,
            destroyPopupOnHide = _this$props2.destroyPopupOnHide,
            popupClassName = _this$props2.popupClassName,
            onPopupAlign = _this$props2.onPopupAlign,
            popupMotion = _this$props2.popupMotion,
            popupAnimation = _this$props2.popupAnimation,
            popupTransitionName = _this$props2.popupTransitionName,
            popupStyle = _this$props2.popupStyle,
            mask = _this$props2.mask,
            maskAnimation = _this$props2.maskAnimation,
            maskTransitionName = _this$props2.maskTransitionName,
            maskMotion = _this$props2.maskMotion,
            zIndex = _this$props2.zIndex,
            popup = _this$props2.popup,
            stretch = _this$props2.stretch,
            alignPoint = _this$props2.alignPoint,
            mobile = _this$props2.mobile,
            forceRender = _this$props2.forceRender;
        var _this$state = _this.state,
            popupVisible = _this$state.popupVisible,
            point = _this$state.point;

        var align = _this.getPopupAlign();

        var mouseProps = {};

        if (_this.isMouseEnterToShow()) {
          mouseProps.onMouseEnter = _this.onPopupMouseEnter;
        }

        if (_this.isMouseLeaveToHide()) {
          mouseProps.onMouseLeave = _this.onPopupMouseLeave;
        }

        mouseProps.onMouseDown = _this.onPopupMouseDown;
        mouseProps.onTouchStart = _this.onPopupMouseDown;
        return /*#__PURE__*/react.createElement(Popup, _extends$1({
          prefixCls: prefixCls,
          destroyPopupOnHide: destroyPopupOnHide,
          visible: popupVisible,
          point: alignPoint && point,
          className: popupClassName,
          align: align,
          onAlign: onPopupAlign,
          animation: popupAnimation,
          getClassNameFromAlign: _this.getPopupClassNameFromAlign
        }, mouseProps, {
          stretch: stretch,
          getRootDomNode: _this.getRootDomNode,
          style: popupStyle,
          mask: mask,
          zIndex: zIndex,
          transitionName: popupTransitionName,
          maskAnimation: maskAnimation,
          maskTransitionName: maskTransitionName,
          maskMotion: maskMotion,
          ref: _this.popupRef,
          motion: popupMotion,
          mobile: mobile,
          forceRender: forceRender
        }), typeof popup === 'function' ? popup() : popup);
      };

      _this.attachParent = function (popupContainer) {
        wrapperRaf$1.cancel(_this.attachId);
        var _this$props3 = _this.props,
            getPopupContainer = _this$props3.getPopupContainer,
            getDocument = _this$props3.getDocument;

        var domNode = _this.getRootDomNode();

        var mountNode;

        if (!getPopupContainer) {
          mountNode = getDocument(_this.getRootDomNode()).body;
        } else if (domNode || getPopupContainer.length === 0) {
          // Compatible for legacy getPopupContainer with domNode argument.
          // If no need `domNode` argument, will call directly.
          // https://codesandbox.io/s/eloquent-mclean-ss93m?file=/src/App.js
          mountNode = getPopupContainer(domNode);
        }

        if (mountNode) {
          mountNode.appendChild(popupContainer);
        } else {
          // Retry after frame render in case parent not ready
          _this.attachId = wrapperRaf$1(function () {
            _this.attachParent(popupContainer);
          });
        }
      };

      _this.getContainer = function () {
        var getDocument = _this.props.getDocument;
        var popupContainer = getDocument(_this.getRootDomNode()).createElement('div'); // Make sure default popup container will never cause scrollbar appearing
        // https://github.com/react-component/trigger/issues/41

        popupContainer.style.position = 'absolute';
        popupContainer.style.top = '0';
        popupContainer.style.left = '0';
        popupContainer.style.width = '100%';

        _this.attachParent(popupContainer);

        return popupContainer;
      };

      _this.setPoint = function (point) {
        var alignPoint = _this.props.alignPoint;
        if (!alignPoint || !point) return;

        _this.setState({
          point: {
            pageX: point.pageX,
            pageY: point.pageY
          }
        });
      };

      _this.handlePortalUpdate = function () {
        if (_this.state.prevPopupVisible !== _this.state.popupVisible) {
          _this.props.afterPopupVisibleChange(_this.state.popupVisible);
        }
      };

      var popupVisible;

      if ('popupVisible' in props) {
        popupVisible = !!props.popupVisible;
      } else {
        popupVisible = !!props.defaultPopupVisible;
      }

      _this.state = {
        prevPopupVisible: popupVisible,
        popupVisible: popupVisible
      };
      ALL_HANDLERS.forEach(function (h) {
        _this["fire".concat(h)] = function (e) {
          _this.fireEvents(h, e);
        };
      });
      return _this;
    }

    _createClass(Trigger, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.componentDidUpdate();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        var props = this.props;
        var state = this.state; // We must listen to `mousedown` or `touchstart`, edge case:
        // https://github.com/ant-design/ant-design/issues/5804
        // https://github.com/react-component/calendar/issues/250
        // https://github.com/react-component/trigger/issues/50

        if (state.popupVisible) {
          var currentDocument;

          if (!this.clickOutsideHandler && (this.isClickToHide() || this.isContextMenuToShow())) {
            currentDocument = props.getDocument(this.getRootDomNode());
            this.clickOutsideHandler = addEventListenerWrap(currentDocument, 'mousedown', this.onDocumentClick);
          } // always hide on mobile


          if (!this.touchOutsideHandler) {
            currentDocument = currentDocument || props.getDocument(this.getRootDomNode());
            this.touchOutsideHandler = addEventListenerWrap(currentDocument, 'touchstart', this.onDocumentClick);
          } // close popup when trigger type contains 'onContextMenu' and document is scrolling.


          if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
            currentDocument = currentDocument || props.getDocument(this.getRootDomNode());
            this.contextMenuOutsideHandler1 = addEventListenerWrap(currentDocument, 'scroll', this.onContextMenuClose);
          } // close popup when trigger type contains 'onContextMenu' and window is blur.


          if (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow()) {
            this.contextMenuOutsideHandler2 = addEventListenerWrap(window, 'blur', this.onContextMenuClose);
          }

          return;
        }

        this.clearOutsideHandler();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.clearDelayTimer();
        this.clearOutsideHandler();
        clearTimeout(this.mouseDownTimeout);
        wrapperRaf$1.cancel(this.attachId);
      }
    }, {
      key: "getPopupDomNode",
      value: function getPopupDomNode() {
        var _this$popupRef$curren2;

        // for test
        return ((_this$popupRef$curren2 = this.popupRef.current) === null || _this$popupRef$curren2 === void 0 ? void 0 : _this$popupRef$curren2.getElement()) || null;
      }
    }, {
      key: "getPopupAlign",
      value: function getPopupAlign() {
        var props = this.props;
        var popupPlacement = props.popupPlacement,
            popupAlign = props.popupAlign,
            builtinPlacements = props.builtinPlacements;

        if (popupPlacement && builtinPlacements) {
          return getAlignFromPlacement(builtinPlacements, popupPlacement, popupAlign);
        }

        return popupAlign;
      }
      /**
       * @param popupVisible    Show or not the popup element
       * @param event           SyntheticEvent, used for `pointAlign`
       */

    }, {
      key: "setPopupVisible",
      value: function setPopupVisible(popupVisible, event) {
        var alignPoint = this.props.alignPoint;
        var prevPopupVisible = this.state.popupVisible;
        this.clearDelayTimer();

        if (prevPopupVisible !== popupVisible) {
          if (!('popupVisible' in this.props)) {
            this.setState({
              popupVisible: popupVisible,
              prevPopupVisible: prevPopupVisible
            });
          }

          this.props.onPopupVisibleChange(popupVisible);
        } // Always record the point position since mouseEnterDelay will delay the show


        if (alignPoint && event && popupVisible) {
          this.setPoint(event);
        }
      }
    }, {
      key: "delaySetPopupVisible",
      value: function delaySetPopupVisible(visible, delayS, event) {
        var _this2 = this;

        var delay = delayS * 1000;
        this.clearDelayTimer();

        if (delay) {
          var point = event ? {
            pageX: event.pageX,
            pageY: event.pageY
          } : null;
          this.delayTimer = window.setTimeout(function () {
            _this2.setPopupVisible(visible, point);

            _this2.clearDelayTimer();
          }, delay);
        } else {
          this.setPopupVisible(visible, event);
        }
      }
    }, {
      key: "clearDelayTimer",
      value: function clearDelayTimer() {
        if (this.delayTimer) {
          clearTimeout(this.delayTimer);
          this.delayTimer = null;
        }
      }
    }, {
      key: "clearOutsideHandler",
      value: function clearOutsideHandler() {
        if (this.clickOutsideHandler) {
          this.clickOutsideHandler.remove();
          this.clickOutsideHandler = null;
        }

        if (this.contextMenuOutsideHandler1) {
          this.contextMenuOutsideHandler1.remove();
          this.contextMenuOutsideHandler1 = null;
        }

        if (this.contextMenuOutsideHandler2) {
          this.contextMenuOutsideHandler2.remove();
          this.contextMenuOutsideHandler2 = null;
        }

        if (this.touchOutsideHandler) {
          this.touchOutsideHandler.remove();
          this.touchOutsideHandler = null;
        }
      }
    }, {
      key: "createTwoChains",
      value: function createTwoChains(event) {
        var childPros = this.props.children.props;
        var props = this.props;

        if (childPros[event] && props[event]) {
          return this["fire".concat(event)];
        }

        return childPros[event] || props[event];
      }
    }, {
      key: "isClickToShow",
      value: function isClickToShow() {
        var _this$props4 = this.props,
            action = _this$props4.action,
            showAction = _this$props4.showAction;
        return action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1;
      }
    }, {
      key: "isContextMenuToShow",
      value: function isContextMenuToShow() {
        var _this$props5 = this.props,
            action = _this$props5.action,
            showAction = _this$props5.showAction;
        return action.indexOf('contextMenu') !== -1 || showAction.indexOf('contextMenu') !== -1;
      }
    }, {
      key: "isClickToHide",
      value: function isClickToHide() {
        var _this$props6 = this.props,
            action = _this$props6.action,
            hideAction = _this$props6.hideAction;
        return action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1;
      }
    }, {
      key: "isMouseEnterToShow",
      value: function isMouseEnterToShow() {
        var _this$props7 = this.props,
            action = _this$props7.action,
            showAction = _this$props7.showAction;
        return action.indexOf('hover') !== -1 || showAction.indexOf('mouseEnter') !== -1;
      }
    }, {
      key: "isMouseLeaveToHide",
      value: function isMouseLeaveToHide() {
        var _this$props8 = this.props,
            action = _this$props8.action,
            hideAction = _this$props8.hideAction;
        return action.indexOf('hover') !== -1 || hideAction.indexOf('mouseLeave') !== -1;
      }
    }, {
      key: "isFocusToShow",
      value: function isFocusToShow() {
        var _this$props9 = this.props,
            action = _this$props9.action,
            showAction = _this$props9.showAction;
        return action.indexOf('focus') !== -1 || showAction.indexOf('focus') !== -1;
      }
    }, {
      key: "isBlurToHide",
      value: function isBlurToHide() {
        var _this$props10 = this.props,
            action = _this$props10.action,
            hideAction = _this$props10.hideAction;
        return action.indexOf('focus') !== -1 || hideAction.indexOf('blur') !== -1;
      }
    }, {
      key: "forcePopupAlign",
      value: function forcePopupAlign() {
        if (this.state.popupVisible) {
          var _this$popupRef$curren3;

          (_this$popupRef$curren3 = this.popupRef.current) === null || _this$popupRef$curren3 === void 0 ? void 0 : _this$popupRef$curren3.forceAlign();
        }
      }
    }, {
      key: "fireEvents",
      value: function fireEvents(type, e) {
        var childCallback = this.props.children.props[type];

        if (childCallback) {
          childCallback(e);
        }

        var callback = this.props[type];

        if (callback) {
          callback(e);
        }
      }
    }, {
      key: "close",
      value: function close() {
        this.setPopupVisible(false);
      }
    }, {
      key: "render",
      value: function render() {
        var popupVisible = this.state.popupVisible;
        var _this$props11 = this.props,
            children = _this$props11.children,
            forceRender = _this$props11.forceRender,
            alignPoint = _this$props11.alignPoint,
            className = _this$props11.className,
            autoDestroy = _this$props11.autoDestroy;
        var child = react.Children.only(children);
        var newChildProps = {
          key: 'trigger'
        }; // ============================== Visible Handlers ==============================
        // >>> ContextMenu

        if (this.isContextMenuToShow()) {
          newChildProps.onContextMenu = this.onContextMenu;
        } else {
          newChildProps.onContextMenu = this.createTwoChains('onContextMenu');
        } // >>> Click


        if (this.isClickToHide() || this.isClickToShow()) {
          newChildProps.onClick = this.onClick;
          newChildProps.onMouseDown = this.onMouseDown;
          newChildProps.onTouchStart = this.onTouchStart;
        } else {
          newChildProps.onClick = this.createTwoChains('onClick');
          newChildProps.onMouseDown = this.createTwoChains('onMouseDown');
          newChildProps.onTouchStart = this.createTwoChains('onTouchStart');
        } // >>> Hover(enter)


        if (this.isMouseEnterToShow()) {
          newChildProps.onMouseEnter = this.onMouseEnter; // Point align

          if (alignPoint) {
            newChildProps.onMouseMove = this.onMouseMove;
          }
        } else {
          newChildProps.onMouseEnter = this.createTwoChains('onMouseEnter');
        } // >>> Hover(leave)


        if (this.isMouseLeaveToHide()) {
          newChildProps.onMouseLeave = this.onMouseLeave;
        } else {
          newChildProps.onMouseLeave = this.createTwoChains('onMouseLeave');
        } // >>> Focus


        if (this.isFocusToShow() || this.isBlurToHide()) {
          newChildProps.onFocus = this.onFocus;
          newChildProps.onBlur = this.onBlur;
        } else {
          newChildProps.onFocus = this.createTwoChains('onFocus');
          newChildProps.onBlur = this.createTwoChains('onBlur');
        } // =================================== Render ===================================


        var childrenClassName = classnames(child && child.props && child.props.className, className);

        if (childrenClassName) {
          newChildProps.className = childrenClassName;
        }

        var cloneProps = _objectSpread2$1({}, newChildProps);

        if (supportRef(child)) {
          cloneProps.ref = composeRef(this.triggerRef, child.ref);
        }

        var trigger = /*#__PURE__*/react.cloneElement(child, cloneProps);
        var portal; // prevent unmounting after it's rendered

        if (popupVisible || this.popupRef.current || forceRender) {
          portal = /*#__PURE__*/react.createElement(PortalComponent, {
            key: "portal",
            getContainer: this.getContainer,
            didUpdate: this.handlePortalUpdate
          }, this.getComponent());
        }

        if (!popupVisible && autoDestroy) {
          portal = null;
        }

        return /*#__PURE__*/react.createElement(TriggerContext.Provider, {
          value: {
            onPopupMouseDown: this.onPopupMouseDown
          }
        }, trigger, portal);
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(_ref, prevState) {
        var popupVisible = _ref.popupVisible;
        var newState = {};

        if (popupVisible !== undefined && prevState.popupVisible !== popupVisible) {
          newState.popupVisible = popupVisible;
          newState.prevPopupVisible = prevState.popupVisible;
        }

        return newState;
      }
    }]);

    return Trigger;
  }(react.Component);

  Trigger.contextType = TriggerContext;
  Trigger.defaultProps = {
    prefixCls: 'rc-trigger-popup',
    getPopupClassNameFromAlign: returnEmptyString,
    getDocument: returnDocument,
    onPopupVisibleChange: noop,
    afterPopupVisibleChange: noop,
    onPopupAlign: noop,
    popupClassName: '',
    mouseEnterDelay: 0,
    mouseLeaveDelay: 0.1,
    focusDelay: 0,
    blurDelay: 0.15,
    popupStyle: {},
    destroyPopupOnHide: false,
    popupAlign: {},
    defaultPopupVisible: false,
    mask: false,
    maskClosable: true,
    action: [],
    showAction: [],
    hideAction: [],
    autoDestroy: false
  };
  return Trigger;
}
var Trigger = generateTrigger(Portal);

var isValidElement = react.isValidElement;
function replaceElement(element, replacement, props) {
  if (!isValidElement(element)) return replacement;
  return /*#__PURE__*/react.cloneElement(element, typeof props === 'function' ? props(element.props || {}) : props);
}
function cloneElement(element, props) {
  return replaceElement(element, element, props);
}

// https://stackoverflow.com/questions/46176165/ways-to-get-string-literal-type-of-array-values-without-enum-overhead
var tuple$1 = function tuple() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args;
};

var PresetStatusColorTypes = tuple$1('success', 'processing', 'error', 'default', 'warning'); // eslint-disable-next-line import/prefer-default-export

var PresetColorTypes = tuple$1('pink', 'red', 'yellow', 'orange', 'cyan', 'green', 'blue', 'purple', 'geekblue', 'magenta', 'volcano', 'gold', 'lime');

var UnreachableException = function UnreachableException(value) {
  _classCallCheck(this, UnreachableException);

  return new Error("unreachable case: ".concat(JSON.stringify(value)));
};

var __rest$5 = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var ButtonGroup = function ButtonGroup(props) {
  return /*#__PURE__*/react.createElement(ConfigConsumer, null, function (_ref) {
    var _classNames;

    var getPrefixCls = _ref.getPrefixCls,
        direction = _ref.direction;

    var customizePrefixCls = props.prefixCls,
        size = props.size,
        className = props.className,
        others = __rest$5(props, ["prefixCls", "size", "className"]);

    var prefixCls = getPrefixCls('btn-group', customizePrefixCls); // large => lg
    // small => sm

    var sizeCls = '';

    switch (size) {
      case 'large':
        sizeCls = 'lg';
        break;

      case 'small':
        sizeCls = 'sm';
        break;

      case 'middle':
      case undefined:
        break;

      default:
        // eslint-disable-next-line no-console
        console.warn(new UnreachableException(size));
    }

    var classes = classnames(prefixCls, (_classNames = {}, _defineProperty$1(_classNames, "".concat(prefixCls, "-").concat(sizeCls), sizeCls), _defineProperty$1(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
    return /*#__PURE__*/react.createElement("div", _extends$1({}, others, {
      className: classes
    }));
  });
};

var id = 0;
var ids = {}; // Support call raf with delay specified frame

function wrapperRaf(callback) {
  var delayFrames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var myId = id++;
  var restFrames = delayFrames;

  function internalCallback() {
    restFrames -= 1;

    if (restFrames <= 0) {
      callback();
      delete ids[myId];
    } else {
      ids[myId] = wrapperRaf$1(internalCallback);
    }
  }

  ids[myId] = wrapperRaf$1(internalCallback);
  return myId;
}

wrapperRaf.cancel = function cancel(pid) {
  if (pid === undefined) return;
  wrapperRaf$1.cancel(ids[pid]);
  delete ids[pid];
};

wrapperRaf.ids = ids; // export this for test usage

var styleForPseudo; // Where el is the DOM element you'd like to test for visibility

function isHidden(element) {

  return !element || element.offsetParent === null || element.hidden;
}

function isNotGrey(color) {
  // eslint-disable-next-line no-useless-escape
  var match = (color || '').match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);

  if (match && match[1] && match[2] && match[3]) {
    return !(match[1] === match[2] && match[2] === match[3]);
  }

  return true;
}

var Wave = /*#__PURE__*/function (_React$Component) {
  _inherits(Wave, _React$Component);

  var _super = _createSuper(Wave);

  function Wave() {
    var _this;

    _classCallCheck(this, Wave);

    _this = _super.apply(this, arguments);
    _this.containerRef = /*#__PURE__*/react.createRef();
    _this.animationStart = false;
    _this.destroyed = false;

    _this.onClick = function (node, waveColor) {
      var _a, _b;

      if (!node || isHidden(node) || node.className.indexOf('-leave') >= 0) {
        return;
      }

      var insertExtraNode = _this.props.insertExtraNode;
      _this.extraNode = document.createElement('div');

      var _assertThisInitialize = _assertThisInitialized(_this),
          extraNode = _assertThisInitialize.extraNode;

      var getPrefixCls = _this.context.getPrefixCls;
      extraNode.className = "".concat(getPrefixCls(''), "-click-animating-node");

      var attributeName = _this.getAttributeName();

      node.setAttribute(attributeName, 'true'); // Not white or transparent or grey

      if (waveColor && waveColor !== '#ffffff' && waveColor !== 'rgb(255, 255, 255)' && isNotGrey(waveColor) && !/rgba\((?:\d*, ){3}0\)/.test(waveColor) && // any transparent rgba color
      waveColor !== 'transparent') {
        extraNode.style.borderColor = waveColor;
        var nodeRoot = ((_a = node.getRootNode) === null || _a === void 0 ? void 0 : _a.call(node)) || node.ownerDocument;
        var nodeBody = nodeRoot instanceof Document ? nodeRoot.body : (_b = nodeRoot.firstChild) !== null && _b !== void 0 ? _b : nodeRoot;
        styleForPseudo = updateCSS("\n      [".concat(getPrefixCls(''), "-click-animating-without-extra-node='true']::after, .").concat(getPrefixCls(''), "-click-animating-node {\n        --antd-wave-shadow-color: ").concat(waveColor, ";\n      }"), 'antd-wave', {
          csp: _this.csp,
          attachTo: nodeBody
        });
      }

      if (insertExtraNode) {
        node.appendChild(extraNode);
      }

      ['transition', 'animation'].forEach(function (name) {
        node.addEventListener("".concat(name, "start"), _this.onTransitionStart);
        node.addEventListener("".concat(name, "end"), _this.onTransitionEnd);
      });
    };

    _this.onTransitionStart = function (e) {
      if (_this.destroyed) {
        return;
      }

      var node = _this.containerRef.current;

      if (!e || e.target !== node || _this.animationStart) {
        return;
      }

      _this.resetEffect(node);
    };

    _this.onTransitionEnd = function (e) {
      if (!e || e.animationName !== 'fadeEffect') {
        return;
      }

      _this.resetEffect(e.target);
    };

    _this.bindAnimationEvent = function (node) {
      if (!node || !node.getAttribute || node.getAttribute('disabled') || node.className.indexOf('disabled') >= 0) {
        return;
      }

      var onClick = function onClick(e) {
        // Fix radio button click twice
        if (e.target.tagName === 'INPUT' || isHidden(e.target)) {
          return;
        }

        _this.resetEffect(node); // Get wave color from target


        var waveColor = getComputedStyle(node).getPropertyValue('border-top-color') || // Firefox Compatible
        getComputedStyle(node).getPropertyValue('border-color') || getComputedStyle(node).getPropertyValue('background-color');
        _this.clickWaveTimeoutId = window.setTimeout(function () {
          return _this.onClick(node, waveColor);
        }, 0);
        wrapperRaf.cancel(_this.animationStartId);
        _this.animationStart = true; // Render to trigger transition event cost 3 frames. Let's delay 10 frames to reset this.

        _this.animationStartId = wrapperRaf(function () {
          _this.animationStart = false;
        }, 10);
      };

      node.addEventListener('click', onClick, true);
      return {
        cancel: function cancel() {
          node.removeEventListener('click', onClick, true);
        }
      };
    };

    _this.renderWave = function (_ref) {
      var csp = _ref.csp;
      var children = _this.props.children;
      _this.csp = csp;
      if (! /*#__PURE__*/react.isValidElement(children)) return children;
      var ref = _this.containerRef;

      if (supportRef(children)) {
        ref = composeRef(children.ref, _this.containerRef);
      }

      return cloneElement(children, {
        ref: ref
      });
    };

    return _this;
  }

  _createClass(Wave, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var node = this.containerRef.current;

      if (!node || node.nodeType !== 1) {
        return;
      }

      this.instance = this.bindAnimationEvent(node);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.instance) {
        this.instance.cancel();
      }

      if (this.clickWaveTimeoutId) {
        clearTimeout(this.clickWaveTimeoutId);
      }

      this.destroyed = true;
    }
  }, {
    key: "getAttributeName",
    value: function getAttributeName() {
      var getPrefixCls = this.context.getPrefixCls;
      var insertExtraNode = this.props.insertExtraNode;
      return insertExtraNode ? "".concat(getPrefixCls(''), "-click-animating") : "".concat(getPrefixCls(''), "-click-animating-without-extra-node");
    }
  }, {
    key: "resetEffect",
    value: function resetEffect(node) {
      var _this2 = this;

      if (!node || node === this.extraNode || !(node instanceof Element)) {
        return;
      }

      var insertExtraNode = this.props.insertExtraNode;
      var attributeName = this.getAttributeName();
      node.setAttribute(attributeName, 'false'); // edge has bug on `removeAttribute` #14466

      if (styleForPseudo) {
        styleForPseudo.innerHTML = '';
      }

      if (insertExtraNode && this.extraNode && node.contains(this.extraNode)) {
        node.removeChild(this.extraNode);
      }

      ['transition', 'animation'].forEach(function (name) {
        node.removeEventListener("".concat(name, "start"), _this2.onTransitionStart);
        node.removeEventListener("".concat(name, "end"), _this2.onTransitionEnd);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement(ConfigConsumer, null, this.renderWave);
    }
  }]);

  return Wave;
}(react.Component);
Wave.contextType = ConfigContext;

var getCollapsedWidth = function getCollapsedWidth() {
  return {
    width: 0,
    opacity: 0,
    transform: 'scale(0)'
  };
};

var getRealWidth = function getRealWidth(node) {
  return {
    width: node.scrollWidth,
    opacity: 1,
    transform: 'scale(1)'
  };
};

var LoadingIcon = function LoadingIcon(_ref) {
  var prefixCls = _ref.prefixCls,
      loading = _ref.loading,
      existIcon = _ref.existIcon;
  var visible = !!loading;

  if (existIcon) {
    return /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-loading-icon")
    }, /*#__PURE__*/react.createElement(LoadingOutlined$1, null));
  }

  return /*#__PURE__*/react.createElement(CSSMotion, {
    visible: visible // We do not really use this motionName
    ,
    motionName: "".concat(prefixCls, "-loading-icon-motion"),
    removeOnLeave: true,
    onAppearStart: getCollapsedWidth,
    onAppearActive: getRealWidth,
    onEnterStart: getCollapsedWidth,
    onEnterActive: getRealWidth,
    onLeaveStart: getRealWidth,
    onLeaveActive: getCollapsedWidth
  }, function (_ref2, ref) {
    var className = _ref2.className,
        style = _ref2.style;
    return /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-loading-icon"),
      style: style,
      ref: ref
    }, /*#__PURE__*/react.createElement(LoadingOutlined$1, {
      className: className
    }));
  });
};

var __rest$4 = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);

function isString(str) {
  return typeof str === 'string';
}

function isUnborderedButtonType(type) {
  return type === 'text' || type === 'link';
} // Insert one space between two chinese characters automatically.


function insertSpace(child, needInserted) {
  // Check the child if is undefined or null.
  if (child == null) {
    return;
  }

  var SPACE = needInserted ? ' ' : ''; // strictNullChecks oops.

  if (typeof child !== 'string' && typeof child !== 'number' && isString(child.type) && isTwoCNChar(child.props.children)) {
    return cloneElement(child, {
      children: child.props.children.split('').join(SPACE)
    });
  }

  if (typeof child === 'string') {
    if (isTwoCNChar(child)) {
      child = child.split('').join(SPACE);
    }

    return /*#__PURE__*/react.createElement("span", null, child);
  }

  return child;
}

function spaceChildren(children, needInserted) {
  var isPrevChildPure = false;
  var childList = [];
  react.Children.forEach(children, function (child) {
    var type = _typeof$1(child);

    var isCurrentChildPure = type === 'string' || type === 'number';

    if (isPrevChildPure && isCurrentChildPure) {
      var lastIndex = childList.length - 1;
      var lastChild = childList[lastIndex];
      childList[lastIndex] = "".concat(lastChild).concat(child);
    } else {
      childList.push(child);
    }

    isPrevChildPure = isCurrentChildPure;
  }); // Pass to React.Children.map to auto fill key

  return react.Children.map(childList, function (child) {
    return insertSpace(child, needInserted);
  });
}

tuple$1('default', 'primary', 'ghost', 'dashed', 'link', 'text');
tuple$1('circle', 'round');
tuple$1('submit', 'button', 'reset');

var InternalButton = function InternalButton(props, ref) {
  var _classNames;

  var _props$loading = props.loading,
      loading = _props$loading === void 0 ? false : _props$loading,
      customizePrefixCls = props.prefixCls,
      type = props.type,
      danger = props.danger,
      shape = props.shape,
      customizeSize = props.size,
      className = props.className,
      children = props.children,
      icon = props.icon,
      _props$ghost = props.ghost,
      ghost = _props$ghost === void 0 ? false : _props$ghost,
      _props$block = props.block,
      block = _props$block === void 0 ? false : _props$block,
      _props$htmlType = props.htmlType,
      htmlType = _props$htmlType === void 0 ? 'button' : _props$htmlType,
      rest = __rest$4(props, ["loading", "prefixCls", "type", "danger", "shape", "size", "className", "children", "icon", "ghost", "block", "htmlType"]);

  var size = react.useContext(SizeContext);

  var _React$useState = react.useState(!!loading),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      innerLoading = _React$useState2[0],
      setLoading = _React$useState2[1];

  var _React$useState3 = react.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      hasTwoCNChar = _React$useState4[0],
      setHasTwoCNChar = _React$useState4[1];

  var _React$useContext = react.useContext(ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      autoInsertSpaceInButton = _React$useContext.autoInsertSpaceInButton,
      direction = _React$useContext.direction;

  var buttonRef = ref || /*#__PURE__*/react.createRef();
  var delayTimeoutRef = react.useRef();

  var isNeedInserted = function isNeedInserted() {
    return react.Children.count(children) === 1 && !icon && !isUnborderedButtonType(type);
  };

  var fixTwoCNChar = function fixTwoCNChar() {
    // Fix for HOC usage like <FormatMessage />
    if (!buttonRef || !buttonRef.current || autoInsertSpaceInButton === false) {
      return;
    }

    var buttonText = buttonRef.current.textContent;

    if (isNeedInserted() && isTwoCNChar(buttonText)) {
      if (!hasTwoCNChar) {
        setHasTwoCNChar(true);
      }
    } else if (hasTwoCNChar) {
      setHasTwoCNChar(false);
    }
  }; // =============== Update Loading ===============


  var loadingOrDelay;

  if (_typeof$1(loading) === 'object' && loading.delay) {
    loadingOrDelay = loading.delay || true;
  } else {
    loadingOrDelay = !!loading;
  }

  react.useEffect(function () {
    clearTimeout(delayTimeoutRef.current);

    if (typeof loadingOrDelay === 'number') {
      delayTimeoutRef.current = window.setTimeout(function () {
        setLoading(loadingOrDelay);
      }, loadingOrDelay);
    } else {
      setLoading(loadingOrDelay);
    }
  }, [loadingOrDelay]);
  react.useEffect(fixTwoCNChar, [buttonRef]);

  var handleClick = function handleClick(e) {
    var _a;

    var onClick = props.onClick,
        disabled = props.disabled; // https://github.com/ant-design/ant-design/issues/30207

    if (innerLoading || disabled) {
      e.preventDefault();
      return;
    }

    (_a = onClick) === null || _a === void 0 ? void 0 : _a(e);
  };

  devWarning(!(typeof icon === 'string' && icon.length > 2), 'Button', "`icon` is using ReactNode instead of string naming in v4. Please check `".concat(icon, "` at https://ant.design/components/icon"));
  devWarning(!(ghost && isUnborderedButtonType(type)), 'Button', "`link` or `text` button can't be a `ghost` button.");
  var prefixCls = getPrefixCls('btn', customizePrefixCls);
  var autoInsertSpace = autoInsertSpaceInButton !== false; // large => lg
  // small => sm

  var sizeCls = '';

  switch (customizeSize || size) {
    case 'large':
      sizeCls = 'lg';
      break;

    case 'small':
      sizeCls = 'sm';
      break;
  }

  var iconType = innerLoading ? 'loading' : icon;
  var classes = classnames(prefixCls, (_classNames = {}, _defineProperty$1(_classNames, "".concat(prefixCls, "-").concat(type), type), _defineProperty$1(_classNames, "".concat(prefixCls, "-").concat(shape), shape), _defineProperty$1(_classNames, "".concat(prefixCls, "-").concat(sizeCls), sizeCls), _defineProperty$1(_classNames, "".concat(prefixCls, "-icon-only"), !children && children !== 0 && !!iconType), _defineProperty$1(_classNames, "".concat(prefixCls, "-background-ghost"), ghost && !isUnborderedButtonType(type)), _defineProperty$1(_classNames, "".concat(prefixCls, "-loading"), innerLoading), _defineProperty$1(_classNames, "".concat(prefixCls, "-two-chinese-chars"), hasTwoCNChar && autoInsertSpace), _defineProperty$1(_classNames, "".concat(prefixCls, "-block"), block), _defineProperty$1(_classNames, "".concat(prefixCls, "-dangerous"), !!danger), _defineProperty$1(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
  var iconNode = icon && !innerLoading ? icon : /*#__PURE__*/react.createElement(LoadingIcon, {
    existIcon: !!icon,
    prefixCls: prefixCls,
    loading: !!innerLoading
  });
  var kids = children || children === 0 ? spaceChildren(children, isNeedInserted() && autoInsertSpace) : null;
  var linkButtonRestProps = omit(rest, ['navigate']);

  if (linkButtonRestProps.href !== undefined) {
    return /*#__PURE__*/react.createElement("a", _extends$1({}, linkButtonRestProps, {
      className: classes,
      onClick: handleClick,
      ref: buttonRef
    }), iconNode, kids);
  }

  var buttonNode = /*#__PURE__*/react.createElement("button", _extends$1({}, rest, {
    type: htmlType,
    className: classes,
    onClick: handleClick,
    ref: buttonRef
  }), iconNode, kids);

  if (isUnborderedButtonType(type)) {
    return buttonNode;
  }

  return /*#__PURE__*/react.createElement(Wave, null, buttonNode);
};

var Button = /*#__PURE__*/react.forwardRef(InternalButton);
Button.displayName = 'Button';
Button.Group = ButtonGroup;
Button.__ANT_BUTTON = true;

//

var shallowequal = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};

var generateConfig = {
  // get
  getNow: function getNow() {
    return hooks();
  },
  getFixedDate: function getFixedDate(string) {
    return hooks(string, 'YYYY-MM-DD');
  },
  getEndDate: function getEndDate(date) {
    var clone = date.clone();
    return clone.endOf('month');
  },
  getWeekDay: function getWeekDay(date) {
    var clone = date.clone().locale('en_US');
    return clone.weekday() + clone.localeData().firstDayOfWeek();
  },
  getYear: function getYear(date) {
    return date.year();
  },
  getMonth: function getMonth(date) {
    return date.month();
  },
  getDate: function getDate(date) {
    return date.date();
  },
  getHour: function getHour(date) {
    return date.hour();
  },
  getMinute: function getMinute(date) {
    return date.minute();
  },
  getSecond: function getSecond(date) {
    return date.second();
  },
  // set
  addYear: function addYear(date, diff) {
    var clone = date.clone();
    return clone.add(diff, 'year');
  },
  addMonth: function addMonth(date, diff) {
    var clone = date.clone();
    return clone.add(diff, 'month');
  },
  addDate: function addDate(date, diff) {
    var clone = date.clone();
    return clone.add(diff, 'day');
  },
  setYear: function setYear(date, year) {
    var clone = date.clone();
    return clone.year(year);
  },
  setMonth: function setMonth(date, month) {
    var clone = date.clone();
    return clone.month(month);
  },
  setDate: function setDate(date, num) {
    var clone = date.clone();
    return clone.date(num);
  },
  setHour: function setHour(date, hour) {
    var clone = date.clone();
    return clone.hour(hour);
  },
  setMinute: function setMinute(date, minute) {
    var clone = date.clone();
    return clone.minute(minute);
  },
  setSecond: function setSecond(date, second) {
    var clone = date.clone();
    return clone.second(second);
  },
  // Compare
  isAfter: function isAfter(date1, date2) {
    return date1.isAfter(date2);
  },
  isValidate: function isValidate(date) {
    return date.isValid();
  },
  locale: {
    getWeekFirstDay: function getWeekFirstDay(locale) {
      var date = hooks().locale(locale);
      return date.localeData().firstDayOfWeek();
    },
    getWeekFirstDate: function getWeekFirstDate(locale, date) {
      var clone = date.clone();
      var result = clone.locale(locale);
      return result.weekday(0);
    },
    getWeek: function getWeek(locale, date) {
      var clone = date.clone();
      var result = clone.locale(locale);
      return result.week();
    },
    getShortWeekDays: function getShortWeekDays(locale) {
      var date = hooks().locale(locale);
      return date.localeData().weekdaysMin();
    },
    getShortMonths: function getShortMonths(locale) {
      var date = hooks().locale(locale);
      return date.localeData().monthsShort();
    },
    format: function format(locale, date, _format) {
      var clone = date.clone();
      var result = clone.locale(locale);
      return result.format(_format);
    },
    parse: function parse(locale, text, formats) {
      var fallbackFormatList = [];

      for (var i = 0; i < formats.length; i += 1) {
        var format = formats[i];
        var formatText = text;

        if (format.includes('wo') || format.includes('Wo')) {
          format = format.replace(/wo/g, 'w').replace(/Wo/g, 'W');
          var matchFormat = format.match(/[-YyMmDdHhSsWwGg]+/g);
          var matchText = formatText.match(/[-\d]+/g);

          if (matchFormat && matchText) {
            format = matchFormat.join('');
            formatText = matchText.join('');
          } else {
            fallbackFormatList.push(format.replace(/o/g, ''));
          }
        }

        var date = hooks(formatText, format, locale, true);

        if (date.isValid()) {
          return date;
        }
      } // Fallback to fuzzy matching, this should always not reach match or need fire a issue


      for (var _i = 0; _i < fallbackFormatList.length; _i += 1) {
        var _date = hooks(text, fallbackFormatList[_i], locale, false);
        /* istanbul ignore next */


        if (_date.isValid()) {
          noteOnce(false, 'Not match any format strictly and fallback to fuzzy match. Please help to fire a issue about this.');
          return _date;
        }
      }

      return null;
    }
  }
};

var PanelContext = /*#__PURE__*/react.createContext({});

var HIDDEN_STYLE = {
  visibility: 'hidden'
};

function Header(_ref) {
  var prefixCls = _ref.prefixCls,
      _ref$prevIcon = _ref.prevIcon,
      prevIcon = _ref$prevIcon === void 0 ? "\u2039" : _ref$prevIcon,
      _ref$nextIcon = _ref.nextIcon,
      nextIcon = _ref$nextIcon === void 0 ? "\u203A" : _ref$nextIcon,
      _ref$superPrevIcon = _ref.superPrevIcon,
      superPrevIcon = _ref$superPrevIcon === void 0 ? "\xAB" : _ref$superPrevIcon,
      _ref$superNextIcon = _ref.superNextIcon,
      superNextIcon = _ref$superNextIcon === void 0 ? "\xBB" : _ref$superNextIcon,
      onSuperPrev = _ref.onSuperPrev,
      onSuperNext = _ref.onSuperNext,
      onPrev = _ref.onPrev,
      onNext = _ref.onNext,
      children = _ref.children;

  var _React$useContext = react.useContext(PanelContext),
      hideNextBtn = _React$useContext.hideNextBtn,
      hidePrevBtn = _React$useContext.hidePrevBtn;

  return /*#__PURE__*/react.createElement("div", {
    className: prefixCls
  }, onSuperPrev && /*#__PURE__*/react.createElement("button", {
    type: "button",
    onClick: onSuperPrev,
    tabIndex: -1,
    className: "".concat(prefixCls, "-super-prev-btn"),
    style: hidePrevBtn ? HIDDEN_STYLE : {}
  }, superPrevIcon), onPrev && /*#__PURE__*/react.createElement("button", {
    type: "button",
    onClick: onPrev,
    tabIndex: -1,
    className: "".concat(prefixCls, "-prev-btn"),
    style: hidePrevBtn ? HIDDEN_STYLE : {}
  }, prevIcon), /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-view")
  }, children), onNext && /*#__PURE__*/react.createElement("button", {
    type: "button",
    onClick: onNext,
    tabIndex: -1,
    className: "".concat(prefixCls, "-next-btn"),
    style: hideNextBtn ? HIDDEN_STYLE : {}
  }, nextIcon), onSuperNext && /*#__PURE__*/react.createElement("button", {
    type: "button",
    onClick: onSuperNext,
    tabIndex: -1,
    className: "".concat(prefixCls, "-super-next-btn"),
    style: hideNextBtn ? HIDDEN_STYLE : {}
  }, superNextIcon));
}

function DecadeHeader(props) {
  var prefixCls = props.prefixCls,
      generateConfig = props.generateConfig,
      viewDate = props.viewDate,
      onPrevDecades = props.onPrevDecades,
      onNextDecades = props.onNextDecades;

  var _React$useContext = react.useContext(PanelContext),
      hideHeader = _React$useContext.hideHeader;

  if (hideHeader) {
    return null;
  }

  var headerPrefixCls = "".concat(prefixCls, "-header");
  var yearNumber = generateConfig.getYear(viewDate);
  var startYear = Math.floor(yearNumber / DECADE_DISTANCE_COUNT) * DECADE_DISTANCE_COUNT;
  var endYear = startYear + DECADE_DISTANCE_COUNT - 1;
  return /*#__PURE__*/react.createElement(Header, _extends$1({}, props, {
    prefixCls: headerPrefixCls,
    onSuperPrev: onPrevDecades,
    onSuperNext: onNextDecades
  }), startYear, "-", endYear);
}

function setTime(generateConfig, date, hour, minute, second) {
  var nextTime = generateConfig.setHour(date, hour);
  nextTime = generateConfig.setMinute(nextTime, minute);
  nextTime = generateConfig.setSecond(nextTime, second);
  return nextTime;
}
function setDateTime(generateConfig, date, defaultDate) {
  if (!defaultDate) {
    return date;
  }

  var newDate = date;
  newDate = generateConfig.setHour(newDate, generateConfig.getHour(defaultDate));
  newDate = generateConfig.setMinute(newDate, generateConfig.getMinute(defaultDate));
  newDate = generateConfig.setSecond(newDate, generateConfig.getSecond(defaultDate));
  return newDate;
}
function getLowerBoundTime(hour, minute, second, hourStep, minuteStep, secondStep) {
  var lowerBoundHour = Math.floor(hour / hourStep) * hourStep;

  if (lowerBoundHour < hour) {
    return [lowerBoundHour, 60 - minuteStep, 60 - secondStep];
  }

  var lowerBoundMinute = Math.floor(minute / minuteStep) * minuteStep;

  if (lowerBoundMinute < minute) {
    return [lowerBoundHour, lowerBoundMinute, 60 - secondStep];
  }

  var lowerBoundSecond = Math.floor(second / secondStep) * secondStep;
  return [lowerBoundHour, lowerBoundMinute, lowerBoundSecond];
}
function getLastDay(generateConfig, date) {
  var year = generateConfig.getYear(date);
  var month = generateConfig.getMonth(date) + 1;
  var endDate = generateConfig.getEndDate(generateConfig.getFixedDate("".concat(year, "-").concat(month, "-01")));
  var lastDay = generateConfig.getDate(endDate);
  var monthShow = month < 10 ? "0".concat(month) : "".concat(month);
  return "".concat(year, "-").concat(monthShow, "-").concat(lastDay);
}

function PanelBody(_ref) {
  var prefixCls = _ref.prefixCls,
      disabledDate = _ref.disabledDate,
      onSelect = _ref.onSelect,
      picker = _ref.picker,
      rowNum = _ref.rowNum,
      colNum = _ref.colNum,
      prefixColumn = _ref.prefixColumn,
      rowClassName = _ref.rowClassName,
      baseDate = _ref.baseDate,
      getCellClassName = _ref.getCellClassName,
      getCellText = _ref.getCellText,
      getCellNode = _ref.getCellNode,
      getCellDate = _ref.getCellDate,
      generateConfig = _ref.generateConfig,
      titleCell = _ref.titleCell,
      headerCells = _ref.headerCells;

  var _React$useContext = react.useContext(PanelContext),
      onDateMouseEnter = _React$useContext.onDateMouseEnter,
      onDateMouseLeave = _React$useContext.onDateMouseLeave,
      mode = _React$useContext.mode;

  var cellPrefixCls = "".concat(prefixCls, "-cell"); // =============================== Body ===============================

  var rows = [];

  for (var i = 0; i < rowNum; i += 1) {
    var row = [];
    var rowStartDate = void 0;

    var _loop = function _loop(j) {
      var _objectSpread2;

      var offset = i * colNum + j;
      var currentDate = getCellDate(baseDate, offset);
      var disabled = getCellDateDisabled({
        cellDate: currentDate,
        mode: mode,
        disabledDate: disabledDate,
        generateConfig: generateConfig
      });

      if (j === 0) {
        rowStartDate = currentDate;

        if (prefixColumn) {
          row.push(prefixColumn(rowStartDate));
        }
      }

      var title = titleCell && titleCell(currentDate);
      row.push( /*#__PURE__*/react.createElement("td", {
        key: j,
        title: title,
        className: classnames(cellPrefixCls, _objectSpread2$1((_objectSpread2 = {}, _defineProperty$1(_objectSpread2, "".concat(cellPrefixCls, "-disabled"), disabled), _defineProperty$1(_objectSpread2, "".concat(cellPrefixCls, "-start"), getCellText(currentDate) === 1 || picker === 'year' && Number(title) % 10 === 0), _defineProperty$1(_objectSpread2, "".concat(cellPrefixCls, "-end"), title === getLastDay(generateConfig, currentDate) || picker === 'year' && Number(title) % 10 === 9), _objectSpread2), getCellClassName(currentDate))),
        onClick: function onClick() {
          if (!disabled) {
            onSelect(currentDate);
          }
        },
        onMouseEnter: function onMouseEnter() {
          if (!disabled && onDateMouseEnter) {
            onDateMouseEnter(currentDate);
          }
        },
        onMouseLeave: function onMouseLeave() {
          if (!disabled && onDateMouseLeave) {
            onDateMouseLeave(currentDate);
          }
        }
      }, getCellNode ? getCellNode(currentDate) : /*#__PURE__*/react.createElement("div", {
        className: "".concat(cellPrefixCls, "-inner")
      }, getCellText(currentDate))));
    };

    for (var j = 0; j < colNum; j += 1) {
      _loop(j);
    }

    rows.push( /*#__PURE__*/react.createElement("tr", {
      key: i,
      className: rowClassName && rowClassName(rowStartDate)
    }, row));
  }

  return /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-body")
  }, /*#__PURE__*/react.createElement("table", {
    className: "".concat(prefixCls, "-content")
  }, headerCells && /*#__PURE__*/react.createElement("thead", null, /*#__PURE__*/react.createElement("tr", null, headerCells)), /*#__PURE__*/react.createElement("tbody", null, rows)));
}

var DECADE_COL_COUNT = 3;
var DECADE_ROW_COUNT = 4;

function DecadeBody(props) {
  var DECADE_UNIT_DIFF_DES = DECADE_UNIT_DIFF - 1;
  var prefixCls = props.prefixCls,
      viewDate = props.viewDate,
      generateConfig = props.generateConfig;
  var cellPrefixCls = "".concat(prefixCls, "-cell");
  var yearNumber = generateConfig.getYear(viewDate);
  var decadeYearNumber = Math.floor(yearNumber / DECADE_UNIT_DIFF) * DECADE_UNIT_DIFF;
  var startDecadeYear = Math.floor(yearNumber / DECADE_DISTANCE_COUNT) * DECADE_DISTANCE_COUNT;
  var endDecadeYear = startDecadeYear + DECADE_DISTANCE_COUNT - 1;
  var baseDecadeYear = generateConfig.setYear(viewDate, startDecadeYear - Math.ceil((DECADE_COL_COUNT * DECADE_ROW_COUNT * DECADE_UNIT_DIFF - DECADE_DISTANCE_COUNT) / 2));

  var getCellClassName = function getCellClassName(date) {
    var _ref;

    var startDecadeNumber = generateConfig.getYear(date);
    var endDecadeNumber = startDecadeNumber + DECADE_UNIT_DIFF_DES;
    return _ref = {}, _defineProperty$1(_ref, "".concat(cellPrefixCls, "-in-view"), startDecadeYear <= startDecadeNumber && endDecadeNumber <= endDecadeYear), _defineProperty$1(_ref, "".concat(cellPrefixCls, "-selected"), startDecadeNumber === decadeYearNumber), _ref;
  };

  return /*#__PURE__*/react.createElement(PanelBody, _extends$1({}, props, {
    rowNum: DECADE_ROW_COUNT,
    colNum: DECADE_COL_COUNT,
    baseDate: baseDecadeYear,
    getCellText: function getCellText(date) {
      var startDecadeNumber = generateConfig.getYear(date);
      return "".concat(startDecadeNumber, "-").concat(startDecadeNumber + DECADE_UNIT_DIFF_DES);
    },
    getCellClassName: getCellClassName,
    getCellDate: function getCellDate(date, offset) {
      return generateConfig.addYear(date, offset * DECADE_UNIT_DIFF);
    }
  }));
}

var scrollIds = new Map();
/** Trigger when element is visible in view */

function waitElementReady(element, callback) {
  var id;

  function tryOrNextFrame() {
    if (isVisible(element)) {
      callback();
    } else {
      id = wrapperRaf$1(function () {
        tryOrNextFrame();
      });
    }
  }

  tryOrNextFrame();
  return function () {
    wrapperRaf$1.cancel(id);
  };
}
/* eslint-disable no-param-reassign */

function scrollTo(element, to, duration) {
  if (scrollIds.get(element)) {
    cancelAnimationFrame(scrollIds.get(element));
  } // jump to target if duration zero


  if (duration <= 0) {
    scrollIds.set(element, requestAnimationFrame(function () {
      element.scrollTop = to;
    }));
    return;
  }

  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;
  scrollIds.set(element, requestAnimationFrame(function () {
    element.scrollTop += perTick;

    if (element.scrollTop !== to) {
      scrollTo(element, to, duration - 10);
    }
  }));
}
function createKeyDownHandler(event, _ref) {
  var onLeftRight = _ref.onLeftRight,
      onCtrlLeftRight = _ref.onCtrlLeftRight,
      onUpDown = _ref.onUpDown,
      onPageUpDown = _ref.onPageUpDown,
      onEnter = _ref.onEnter;
  var which = event.which,
      ctrlKey = event.ctrlKey,
      metaKey = event.metaKey;

  switch (which) {
    case KeyCode.LEFT:
      if (ctrlKey || metaKey) {
        if (onCtrlLeftRight) {
          onCtrlLeftRight(-1);
          return true;
        }
      } else if (onLeftRight) {
        onLeftRight(-1);
        return true;
      }
      /* istanbul ignore next */


      break;

    case KeyCode.RIGHT:
      if (ctrlKey || metaKey) {
        if (onCtrlLeftRight) {
          onCtrlLeftRight(1);
          return true;
        }
      } else if (onLeftRight) {
        onLeftRight(1);
        return true;
      }
      /* istanbul ignore next */


      break;

    case KeyCode.UP:
      if (onUpDown) {
        onUpDown(-1);
        return true;
      }
      /* istanbul ignore next */


      break;

    case KeyCode.DOWN:
      if (onUpDown) {
        onUpDown(1);
        return true;
      }
      /* istanbul ignore next */


      break;

    case KeyCode.PAGE_UP:
      if (onPageUpDown) {
        onPageUpDown(-1);
        return true;
      }
      /* istanbul ignore next */


      break;

    case KeyCode.PAGE_DOWN:
      if (onPageUpDown) {
        onPageUpDown(1);
        return true;
      }
      /* istanbul ignore next */


      break;

    case KeyCode.ENTER:
      if (onEnter) {
        onEnter();
        return true;
      }
      /* istanbul ignore next */


      break;
  }

  return false;
} // ===================== Format =====================

function getDefaultFormat(format, picker, showTime, use12Hours) {
  var mergedFormat = format;

  if (!mergedFormat) {
    switch (picker) {
      case 'time':
        mergedFormat = use12Hours ? 'hh:mm:ss a' : 'HH:mm:ss';
        break;

      case 'week':
        mergedFormat = 'gggg-wo';
        break;

      case 'month':
        mergedFormat = 'YYYY-MM';
        break;

      case 'quarter':
        mergedFormat = 'YYYY-[Q]Q';
        break;

      case 'year':
        mergedFormat = 'YYYY';
        break;

      default:
        mergedFormat = showTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';
    }
  }

  return mergedFormat;
}
function getInputSize(picker, format, generateConfig) {
  var defaultSize = picker === 'time' ? 8 : 10;
  var length = typeof format === 'function' ? format(generateConfig.getNow()).length : format.length;
  return Math.max(defaultSize, length) + 2;
}
var globalClickFunc = null;
var clickCallbacks = new Set();
function addGlobalMouseDownEvent(callback) {
  if (!globalClickFunc && typeof window !== 'undefined' && window.addEventListener) {
    globalClickFunc = function globalClickFunc(e) {
      // Clone a new list to avoid repeat trigger events
      _toConsumableArray(clickCallbacks).forEach(function (queueFunc) {
        queueFunc(e);
      });
    };

    window.addEventListener('mousedown', globalClickFunc);
  }

  clickCallbacks.add(callback);
  return function () {
    clickCallbacks.delete(callback);

    if (clickCallbacks.size === 0) {
      window.removeEventListener('mousedown', globalClickFunc);
      globalClickFunc = null;
    }
  };
}
function getTargetFromEvent(e) {
  var target = e.target; // get target if in shadow dom

  if (e.composed && target.shadowRoot) {
    var _e$composedPath;

    return ((_e$composedPath = e.composedPath) === null || _e$composedPath === void 0 ? void 0 : _e$composedPath.call(e)[0]) || target;
  }

  return target;
} // ====================== Mode ======================

var getYearNextMode = function getYearNextMode(next) {
  if (next === 'month' || next === 'date') {
    return 'year';
  }

  return next;
};

var getMonthNextMode = function getMonthNextMode(next) {
  if (next === 'date') {
    return 'month';
  }

  return next;
};

var getQuarterNextMode = function getQuarterNextMode(next) {
  if (next === 'month' || next === 'date') {
    return 'quarter';
  }

  return next;
};

var getWeekNextMode = function getWeekNextMode(next) {
  if (next === 'date') {
    return 'week';
  }

  return next;
};

var PickerModeMap = {
  year: getYearNextMode,
  month: getMonthNextMode,
  quarter: getQuarterNextMode,
  week: getWeekNextMode,
  time: null,
  date: null
};
function elementsContains(elements, target) {
  return elements.some(function (ele) {
    return ele && ele.contains(target);
  });
}

var DECADE_UNIT_DIFF = 10;
var DECADE_DISTANCE_COUNT = DECADE_UNIT_DIFF * 10;

function DecadePanel(props) {
  var prefixCls = props.prefixCls,
      onViewDateChange = props.onViewDateChange,
      generateConfig = props.generateConfig,
      viewDate = props.viewDate,
      operationRef = props.operationRef,
      onSelect = props.onSelect,
      onPanelChange = props.onPanelChange;
  var panelPrefixCls = "".concat(prefixCls, "-decade-panel"); // ======================= Keyboard =======================

  operationRef.current = {
    onKeyDown: function onKeyDown(event) {
      return createKeyDownHandler(event, {
        onLeftRight: function onLeftRight(diff) {
          onSelect(generateConfig.addYear(viewDate, diff * DECADE_UNIT_DIFF), 'key');
        },
        onCtrlLeftRight: function onCtrlLeftRight(diff) {
          onSelect(generateConfig.addYear(viewDate, diff * DECADE_DISTANCE_COUNT), 'key');
        },
        onUpDown: function onUpDown(diff) {
          onSelect(generateConfig.addYear(viewDate, diff * DECADE_UNIT_DIFF * DECADE_COL_COUNT), 'key');
        },
        onEnter: function onEnter() {
          onPanelChange('year', viewDate);
        }
      });
    }
  }; // ==================== View Operation ====================

  var onDecadesChange = function onDecadesChange(diff) {
    var newDate = generateConfig.addYear(viewDate, diff * DECADE_DISTANCE_COUNT);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };

  var onInternalSelect = function onInternalSelect(date) {
    onSelect(date, 'mouse');
    onPanelChange('year', date);
  };

  return /*#__PURE__*/react.createElement("div", {
    className: panelPrefixCls
  }, /*#__PURE__*/react.createElement(DecadeHeader, _extends$1({}, props, {
    prefixCls: prefixCls,
    onPrevDecades: function onPrevDecades() {
      onDecadesChange(-1);
    },
    onNextDecades: function onNextDecades() {
      onDecadesChange(1);
    }
  })), /*#__PURE__*/react.createElement(DecadeBody, _extends$1({}, props, {
    prefixCls: prefixCls,
    onSelect: onInternalSelect
  })));
}

var WEEK_DAY_COUNT = 7;
function isNullEqual(value1, value2) {
  if (!value1 && !value2) {
    return true;
  }

  if (!value1 || !value2) {
    return false;
  }

  return undefined;
}
function isSameDecade(generateConfig, decade1, decade2) {
  var equal = isNullEqual(decade1, decade2);

  if (typeof equal === 'boolean') {
    return equal;
  }

  var num1 = Math.floor(generateConfig.getYear(decade1) / 10);
  var num2 = Math.floor(generateConfig.getYear(decade2) / 10);
  return num1 === num2;
}
function isSameYear(generateConfig, year1, year2) {
  var equal = isNullEqual(year1, year2);

  if (typeof equal === 'boolean') {
    return equal;
  }

  return generateConfig.getYear(year1) === generateConfig.getYear(year2);
}
function getQuarter(generateConfig, date) {
  var quota = Math.floor(generateConfig.getMonth(date) / 3);
  return quota + 1;
}
function isSameQuarter(generateConfig, quarter1, quarter2) {
  var equal = isNullEqual(quarter1, quarter2);

  if (typeof equal === 'boolean') {
    return equal;
  }

  return isSameYear(generateConfig, quarter1, quarter2) && getQuarter(generateConfig, quarter1) === getQuarter(generateConfig, quarter2);
}
function isSameMonth(generateConfig, month1, month2) {
  var equal = isNullEqual(month1, month2);

  if (typeof equal === 'boolean') {
    return equal;
  }

  return isSameYear(generateConfig, month1, month2) && generateConfig.getMonth(month1) === generateConfig.getMonth(month2);
}
function isSameDate(generateConfig, date1, date2) {
  var equal = isNullEqual(date1, date2);

  if (typeof equal === 'boolean') {
    return equal;
  }

  return generateConfig.getYear(date1) === generateConfig.getYear(date2) && generateConfig.getMonth(date1) === generateConfig.getMonth(date2) && generateConfig.getDate(date1) === generateConfig.getDate(date2);
}
function isSameTime(generateConfig, time1, time2) {
  var equal = isNullEqual(time1, time2);

  if (typeof equal === 'boolean') {
    return equal;
  }

  return generateConfig.getHour(time1) === generateConfig.getHour(time2) && generateConfig.getMinute(time1) === generateConfig.getMinute(time2) && generateConfig.getSecond(time1) === generateConfig.getSecond(time2);
}
function isSameWeek(generateConfig, locale, date1, date2) {
  var equal = isNullEqual(date1, date2);

  if (typeof equal === 'boolean') {
    return equal;
  }

  return generateConfig.locale.getWeek(locale, date1) === generateConfig.locale.getWeek(locale, date2);
}
function isEqual(generateConfig, value1, value2) {
  return isSameDate(generateConfig, value1, value2) && isSameTime(generateConfig, value1, value2);
}
/** Between in date but not equal of date */

function isInRange(generateConfig, startDate, endDate, current) {
  if (!startDate || !endDate || !current) {
    return false;
  }

  return !isSameDate(generateConfig, startDate, current) && !isSameDate(generateConfig, endDate, current) && generateConfig.isAfter(current, startDate) && generateConfig.isAfter(endDate, current);
}
function getWeekStartDate(locale, generateConfig, value) {
  var weekFirstDay = generateConfig.locale.getWeekFirstDay(locale);
  var monthStartDate = generateConfig.setDate(value, 1);
  var startDateWeekDay = generateConfig.getWeekDay(monthStartDate);
  var alignStartDate = generateConfig.addDate(monthStartDate, weekFirstDay - startDateWeekDay);

  if (generateConfig.getMonth(alignStartDate) === generateConfig.getMonth(value) && generateConfig.getDate(alignStartDate) > 1) {
    alignStartDate = generateConfig.addDate(alignStartDate, -7);
  }

  return alignStartDate;
}
function getClosingViewDate(viewDate, picker, generateConfig) {
  var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

  switch (picker) {
    case 'year':
      return generateConfig.addYear(viewDate, offset * 10);

    case 'quarter':
    case 'month':
      return generateConfig.addYear(viewDate, offset);

    default:
      return generateConfig.addMonth(viewDate, offset);
  }
}
function formatValue(value, _ref) {
  var generateConfig = _ref.generateConfig,
      locale = _ref.locale,
      format = _ref.format;
  return typeof format === 'function' ? format(value) : generateConfig.locale.format(locale.locale, value, format);
}
function parseValue(value, _ref2) {
  var generateConfig = _ref2.generateConfig,
      locale = _ref2.locale,
      formatList = _ref2.formatList;

  if (!value || typeof formatList[0] === 'function') {
    return null;
  }

  return generateConfig.locale.parse(locale.locale, value, formatList);
} // eslint-disable-next-line consistent-return

function getCellDateDisabled(_ref3) {
  var cellDate = _ref3.cellDate,
      mode = _ref3.mode,
      disabledDate = _ref3.disabledDate,
      generateConfig = _ref3.generateConfig;
  if (!disabledDate) return false; // Whether cellDate is disabled in range

  var getDisabledFromRange = function getDisabledFromRange(currentMode, start, end) {
    var current = start;

    while (current <= end) {
      var date = void 0;

      switch (currentMode) {
        case 'date':
          {
            date = generateConfig.setDate(cellDate, current);

            if (!disabledDate(date)) {
              return false;
            }

            break;
          }

        case 'month':
          {
            date = generateConfig.setMonth(cellDate, current);

            if (!getCellDateDisabled({
              cellDate: date,
              mode: 'month',
              generateConfig: generateConfig,
              disabledDate: disabledDate
            })) {
              return false;
            }

            break;
          }

        case 'year':
          {
            date = generateConfig.setYear(cellDate, current);

            if (!getCellDateDisabled({
              cellDate: date,
              mode: 'year',
              generateConfig: generateConfig,
              disabledDate: disabledDate
            })) {
              return false;
            }

            break;
          }
      }

      current += 1;
    }

    return true;
  };

  switch (mode) {
    case 'date':
    case 'week':
      {
        return disabledDate(cellDate);
      }

    case 'month':
      {
        var startDate = 1;
        var endDate = generateConfig.getDate(generateConfig.getEndDate(cellDate));
        return getDisabledFromRange('date', startDate, endDate);
      }

    case 'quarter':
      {
        var startMonth = Math.floor(generateConfig.getMonth(cellDate) / 3) * 3;
        var endMonth = startMonth + 2;
        return getDisabledFromRange('month', startMonth, endMonth);
      }

    case 'year':
      {
        return getDisabledFromRange('month', 0, 11);
      }

    case 'decade':
      {
        var year = generateConfig.getYear(cellDate);
        var startYear = Math.floor(year / DECADE_UNIT_DIFF) * DECADE_UNIT_DIFF;
        var endYear = startYear + DECADE_UNIT_DIFF - 1;
        return getDisabledFromRange('year', startYear, endYear);
      }
  }
}

function TimeHeader(props) {
  var _React$useContext = react.useContext(PanelContext),
      hideHeader = _React$useContext.hideHeader;

  if (hideHeader) {
    return null;
  }

  var prefixCls = props.prefixCls,
      generateConfig = props.generateConfig,
      locale = props.locale,
      value = props.value,
      format = props.format;
  var headerPrefixCls = "".concat(prefixCls, "-header");
  return /*#__PURE__*/react.createElement(Header, {
    prefixCls: headerPrefixCls
  }, value ? formatValue(value, {
    locale: locale,
    format: format,
    generateConfig: generateConfig
  }) : "\xA0");
}

function TimeUnitColumn(props) {
  var prefixCls = props.prefixCls,
      units = props.units,
      onSelect = props.onSelect,
      value = props.value,
      active = props.active,
      hideDisabledOptions = props.hideDisabledOptions;
  var cellPrefixCls = "".concat(prefixCls, "-cell");

  var _React$useContext = react.useContext(PanelContext),
      open = _React$useContext.open;

  var ulRef = react.useRef(null);
  var liRefs = react.useRef(new Map());
  var scrollRef = react.useRef(); // `useLayoutEffect` here to avoid blink by duration is 0

  react.useLayoutEffect(function () {
    var li = liRefs.current.get(value);

    if (li && open !== false) {
      scrollTo(ulRef.current, li.offsetTop, 120);
    }
  }, [value]);
  react.useLayoutEffect(function () {
    if (open) {
      var li = liRefs.current.get(value);

      if (li) {
        scrollRef.current = waitElementReady(li, function () {
          scrollTo(ulRef.current, li.offsetTop, 0);
        });
      }
    }

    return function () {
      var _scrollRef$current;

      (_scrollRef$current = scrollRef.current) === null || _scrollRef$current === void 0 ? void 0 : _scrollRef$current.call(scrollRef);
    };
  }, [open]);
  return /*#__PURE__*/react.createElement("ul", {
    className: classnames("".concat(prefixCls, "-column"), _defineProperty$1({}, "".concat(prefixCls, "-column-active"), active)),
    ref: ulRef,
    style: {
      position: 'relative'
    }
  }, units.map(function (unit) {
    var _classNames2;

    if (hideDisabledOptions && unit.disabled) {
      return null;
    }

    return /*#__PURE__*/react.createElement("li", {
      key: unit.value,
      ref: function ref(element) {
        liRefs.current.set(unit.value, element);
      },
      className: classnames(cellPrefixCls, (_classNames2 = {}, _defineProperty$1(_classNames2, "".concat(cellPrefixCls, "-disabled"), unit.disabled), _defineProperty$1(_classNames2, "".concat(cellPrefixCls, "-selected"), value === unit.value), _classNames2)),
      onClick: function onClick() {
        if (unit.disabled) {
          return;
        }

        onSelect(unit.value);
      }
    }, /*#__PURE__*/react.createElement("div", {
      className: "".concat(cellPrefixCls, "-inner")
    }, unit.label));
  }));
}

function leftPad(str, length) {
  var fill = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0';
  var current = String(str);

  while (current.length < length) {
    current = "".concat(fill).concat(str);
  }

  return current;
}
var tuple = function tuple() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args;
};
function toArray$1(val) {
  if (val === null || val === undefined) {
    return [];
  }

  return Array.isArray(val) ? val : [val];
}
function getDataOrAriaProps(props) {
  var retProps = {};
  Object.keys(props).forEach(function (key) {
    if ((key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-' || key === 'role' || key === 'name') && key.substr(0, 7) !== 'data-__') {
      retProps[key] = props[key];
    }
  });
  return retProps;
}
function getValue(values, index) {
  return values ? values[index] : null;
}
function updateValues(values, value, index) {
  var newValues = [getValue(values, 0), getValue(values, 1)];
  newValues[index] = typeof value === 'function' ? value(newValues[index]) : value;

  if (!newValues[0] && !newValues[1]) {
    return null;
  }

  return newValues;
}

function shouldUnitsUpdate(prevUnits, nextUnits) {
  if (prevUnits.length !== nextUnits.length) return true; // if any unit's disabled status is different, the units should be re-evaluted

  for (var i = 0; i < prevUnits.length; i += 1) {
    if (prevUnits[i].disabled !== nextUnits[i].disabled) return true;
  }

  return false;
}

function generateUnits(start, end, step, disabledUnits) {
  var units = [];

  for (var i = start; i <= end; i += step) {
    units.push({
      label: leftPad(i, 2),
      value: i,
      disabled: (disabledUnits || []).includes(i)
    });
  }

  return units;
}

function TimeBody(props) {
  var generateConfig = props.generateConfig,
      prefixCls = props.prefixCls,
      operationRef = props.operationRef,
      activeColumnIndex = props.activeColumnIndex,
      value = props.value,
      showHour = props.showHour,
      showMinute = props.showMinute,
      showSecond = props.showSecond,
      use12Hours = props.use12Hours,
      _props$hourStep = props.hourStep,
      hourStep = _props$hourStep === void 0 ? 1 : _props$hourStep,
      _props$minuteStep = props.minuteStep,
      minuteStep = _props$minuteStep === void 0 ? 1 : _props$minuteStep,
      _props$secondStep = props.secondStep,
      secondStep = _props$secondStep === void 0 ? 1 : _props$secondStep,
      disabledHours = props.disabledHours,
      disabledMinutes = props.disabledMinutes,
      disabledSeconds = props.disabledSeconds,
      hideDisabledOptions = props.hideDisabledOptions,
      onSelect = props.onSelect;
  var columns = [];
  var contentPrefixCls = "".concat(prefixCls, "-content");
  var columnPrefixCls = "".concat(prefixCls, "-time-panel");
  var isPM;
  var originHour = value ? generateConfig.getHour(value) : -1;
  var hour = originHour;
  var minute = value ? generateConfig.getMinute(value) : -1;
  var second = value ? generateConfig.getSecond(value) : -1;

  var setTime$1 = function setTime$1(isNewPM, newHour, newMinute, newSecond) {
    var newDate = value || generateConfig.getNow();
    var mergedHour = Math.max(0, newHour);
    var mergedMinute = Math.max(0, newMinute);
    var mergedSecond = Math.max(0, newSecond);
    newDate = setTime(generateConfig, newDate, !use12Hours || !isNewPM ? mergedHour : mergedHour + 12, mergedMinute, mergedSecond);
    return newDate;
  }; // ========================= Unit =========================


  var rawHours = generateUnits(0, 23, hourStep, disabledHours && disabledHours());
  var memorizedRawHours = useMemo(function () {
    return rawHours;
  }, rawHours, shouldUnitsUpdate); // Should additional logic to handle 12 hours

  if (use12Hours) {
    isPM = hour >= 12; // -1 means should display AM

    hour %= 12;
  }

  var _React$useMemo = react.useMemo(function () {
    if (!use12Hours) {
      return [false, false];
    }

    var AMPMDisabled = [true, true];
    memorizedRawHours.forEach(function (_ref) {
      var disabled = _ref.disabled,
          hourValue = _ref.value;
      if (disabled) return;

      if (hourValue >= 12) {
        AMPMDisabled[1] = false;
      } else {
        AMPMDisabled[0] = false;
      }
    });
    return AMPMDisabled;
  }, [use12Hours, memorizedRawHours]),
      _React$useMemo2 = _slicedToArray(_React$useMemo, 2),
      AMDisabled = _React$useMemo2[0],
      PMDisabled = _React$useMemo2[1];

  var hours = react.useMemo(function () {
    if (!use12Hours) return memorizedRawHours;
    return memorizedRawHours.filter(isPM ? function (hourMeta) {
      return hourMeta.value >= 12;
    } : function (hourMeta) {
      return hourMeta.value < 12;
    }).map(function (hourMeta) {
      var hourValue = hourMeta.value % 12;
      var hourLabel = hourValue === 0 ? '12' : leftPad(hourValue, 2);
      return _objectSpread2$1(_objectSpread2$1({}, hourMeta), {}, {
        label: hourLabel,
        value: hourValue
      });
    });
  }, [use12Hours, isPM, memorizedRawHours]);
  var minutes = generateUnits(0, 59, minuteStep, disabledMinutes && disabledMinutes(originHour));
  var seconds = generateUnits(0, 59, secondStep, disabledSeconds && disabledSeconds(originHour, minute)); // ====================== Operations ======================

  operationRef.current = {
    onUpDown: function onUpDown(diff) {
      var column = columns[activeColumnIndex];

      if (column) {
        var valueIndex = column.units.findIndex(function (unit) {
          return unit.value === column.value;
        });
        var unitLen = column.units.length;

        for (var i = 1; i < unitLen; i += 1) {
          var nextUnit = column.units[(valueIndex + diff * i + unitLen) % unitLen];

          if (nextUnit.disabled !== true) {
            column.onSelect(nextUnit.value);
            break;
          }
        }
      }
    }
  }; // ======================== Render ========================

  function addColumnNode(condition, node, columnValue, units, onColumnSelect) {
    if (condition !== false) {
      columns.push({
        node: /*#__PURE__*/react.cloneElement(node, {
          prefixCls: columnPrefixCls,
          value: columnValue,
          active: activeColumnIndex === columns.length,
          onSelect: onColumnSelect,
          units: units,
          hideDisabledOptions: hideDisabledOptions
        }),
        onSelect: onColumnSelect,
        value: columnValue,
        units: units
      });
    }
  } // Hour


  addColumnNode(showHour, /*#__PURE__*/react.createElement(TimeUnitColumn, {
    key: "hour"
  }), hour, hours, function (num) {
    onSelect(setTime$1(isPM, num, minute, second), 'mouse');
  }); // Minute

  addColumnNode(showMinute, /*#__PURE__*/react.createElement(TimeUnitColumn, {
    key: "minute"
  }), minute, minutes, function (num) {
    onSelect(setTime$1(isPM, hour, num, second), 'mouse');
  }); // Second

  addColumnNode(showSecond, /*#__PURE__*/react.createElement(TimeUnitColumn, {
    key: "second"
  }), second, seconds, function (num) {
    onSelect(setTime$1(isPM, hour, minute, num), 'mouse');
  }); // 12 Hours

  var PMIndex = -1;

  if (typeof isPM === 'boolean') {
    PMIndex = isPM ? 1 : 0;
  }

  addColumnNode(use12Hours === true, /*#__PURE__*/react.createElement(TimeUnitColumn, {
    key: "12hours"
  }), PMIndex, [{
    label: 'AM',
    value: 0,
    disabled: AMDisabled
  }, {
    label: 'PM',
    value: 1,
    disabled: PMDisabled
  }], function (num) {
    onSelect(setTime$1(!!num, hour, minute, second), 'mouse');
  });
  return /*#__PURE__*/react.createElement("div", {
    className: contentPrefixCls
  }, columns.map(function (_ref2) {
    var node = _ref2.node;
    return node;
  }));
}

var countBoolean = function countBoolean(boolList) {
  return boolList.filter(function (bool) {
    return bool !== false;
  }).length;
};

function TimePanel(props) {
  var generateConfig = props.generateConfig,
      _props$format = props.format,
      format = _props$format === void 0 ? 'HH:mm:ss' : _props$format,
      prefixCls = props.prefixCls,
      active = props.active,
      operationRef = props.operationRef,
      showHour = props.showHour,
      showMinute = props.showMinute,
      showSecond = props.showSecond,
      _props$use12Hours = props.use12Hours,
      use12Hours = _props$use12Hours === void 0 ? false : _props$use12Hours,
      onSelect = props.onSelect,
      value = props.value;
  var panelPrefixCls = "".concat(prefixCls, "-time-panel");
  var bodyOperationRef = react.useRef(); // ======================= Keyboard =======================

  var _React$useState = react.useState(-1),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      activeColumnIndex = _React$useState2[0],
      setActiveColumnIndex = _React$useState2[1];

  var columnsCount = countBoolean([showHour, showMinute, showSecond, use12Hours]);
  operationRef.current = {
    onKeyDown: function onKeyDown(event) {
      return createKeyDownHandler(event, {
        onLeftRight: function onLeftRight(diff) {
          setActiveColumnIndex((activeColumnIndex + diff + columnsCount) % columnsCount);
        },
        onUpDown: function onUpDown(diff) {
          if (activeColumnIndex === -1) {
            setActiveColumnIndex(0);
          } else if (bodyOperationRef.current) {
            bodyOperationRef.current.onUpDown(diff);
          }
        },
        onEnter: function onEnter() {
          onSelect(value || generateConfig.getNow(), 'key');
          setActiveColumnIndex(-1);
        }
      });
    },
    onBlur: function onBlur() {
      setActiveColumnIndex(-1);
    }
  };
  return /*#__PURE__*/react.createElement("div", {
    className: classnames(panelPrefixCls, _defineProperty$1({}, "".concat(panelPrefixCls, "-active"), active))
  }, /*#__PURE__*/react.createElement(TimeHeader, _extends$1({}, props, {
    format: format,
    prefixCls: prefixCls
  })), /*#__PURE__*/react.createElement(TimeBody, _extends$1({}, props, {
    prefixCls: prefixCls,
    activeColumnIndex: activeColumnIndex,
    operationRef: bodyOperationRef
  })));
}

var RangeContext = /*#__PURE__*/react.createContext({});

function useCellClassName(_ref) {
  var cellPrefixCls = _ref.cellPrefixCls,
      generateConfig = _ref.generateConfig,
      rangedValue = _ref.rangedValue,
      hoverRangedValue = _ref.hoverRangedValue,
      isInView = _ref.isInView,
      isSameCell = _ref.isSameCell,
      offsetCell = _ref.offsetCell,
      today = _ref.today,
      value = _ref.value;

  function getClassName(currentDate) {
    var _ref2;

    var prevDate = offsetCell(currentDate, -1);
    var nextDate = offsetCell(currentDate, 1);
    var rangeStart = getValue(rangedValue, 0);
    var rangeEnd = getValue(rangedValue, 1);
    var hoverStart = getValue(hoverRangedValue, 0);
    var hoverEnd = getValue(hoverRangedValue, 1);
    var isRangeHovered = isInRange(generateConfig, hoverStart, hoverEnd, currentDate);

    function isRangeStart(date) {
      return isSameCell(rangeStart, date);
    }

    function isRangeEnd(date) {
      return isSameCell(rangeEnd, date);
    }

    var isHoverStart = isSameCell(hoverStart, currentDate);
    var isHoverEnd = isSameCell(hoverEnd, currentDate);
    var isHoverEdgeStart = (isRangeHovered || isHoverEnd) && (!isInView(prevDate) || isRangeEnd(prevDate));
    var isHoverEdgeEnd = (isRangeHovered || isHoverStart) && (!isInView(nextDate) || isRangeStart(nextDate));
    return _ref2 = {}, _defineProperty$1(_ref2, "".concat(cellPrefixCls, "-in-view"), isInView(currentDate)), _defineProperty$1(_ref2, "".concat(cellPrefixCls, "-in-range"), isInRange(generateConfig, rangeStart, rangeEnd, currentDate)), _defineProperty$1(_ref2, "".concat(cellPrefixCls, "-range-start"), isRangeStart(currentDate)), _defineProperty$1(_ref2, "".concat(cellPrefixCls, "-range-end"), isRangeEnd(currentDate)), _defineProperty$1(_ref2, "".concat(cellPrefixCls, "-range-start-single"), isRangeStart(currentDate) && !rangeEnd), _defineProperty$1(_ref2, "".concat(cellPrefixCls, "-range-end-single"), isRangeEnd(currentDate) && !rangeStart), _defineProperty$1(_ref2, "".concat(cellPrefixCls, "-range-start-near-hover"), isRangeStart(currentDate) && (isSameCell(prevDate, hoverStart) || isInRange(generateConfig, hoverStart, hoverEnd, prevDate))), _defineProperty$1(_ref2, "".concat(cellPrefixCls, "-range-end-near-hover"), isRangeEnd(currentDate) && (isSameCell(nextDate, hoverEnd) || isInRange(generateConfig, hoverStart, hoverEnd, nextDate))), _defineProperty$1(_ref2, "".concat(cellPrefixCls, "-range-hover"), isRangeHovered), _defineProperty$1(_ref2, "".concat(cellPrefixCls, "-range-hover-start"), isHoverStart), _defineProperty$1(_ref2, "".concat(cellPrefixCls, "-range-hover-end"), isHoverEnd), _defineProperty$1(_ref2, "".concat(cellPrefixCls, "-range-hover-edge-start"), isHoverEdgeStart), _defineProperty$1(_ref2, "".concat(cellPrefixCls, "-range-hover-edge-end"), isHoverEdgeEnd), _defineProperty$1(_ref2, "".concat(cellPrefixCls, "-range-hover-edge-start-near-range"), isHoverEdgeStart && isSameCell(prevDate, rangeEnd)), _defineProperty$1(_ref2, "".concat(cellPrefixCls, "-range-hover-edge-end-near-range"), isHoverEdgeEnd && isSameCell(nextDate, rangeStart)), _defineProperty$1(_ref2, "".concat(cellPrefixCls, "-today"), isSameCell(today, currentDate)), _defineProperty$1(_ref2, "".concat(cellPrefixCls, "-selected"), isSameCell(value, currentDate)), _ref2;
  }

  return getClassName;
}

function DateBody(props) {
  var prefixCls = props.prefixCls,
      generateConfig = props.generateConfig,
      prefixColumn = props.prefixColumn,
      locale = props.locale,
      rowCount = props.rowCount,
      viewDate = props.viewDate,
      value = props.value,
      dateRender = props.dateRender;

  var _React$useContext = react.useContext(RangeContext),
      rangedValue = _React$useContext.rangedValue,
      hoverRangedValue = _React$useContext.hoverRangedValue;

  var baseDate = getWeekStartDate(locale.locale, generateConfig, viewDate);
  var cellPrefixCls = "".concat(prefixCls, "-cell");
  var weekFirstDay = generateConfig.locale.getWeekFirstDay(locale.locale);
  var today = generateConfig.getNow(); // ============================== Header ==============================

  var headerCells = [];
  var weekDaysLocale = locale.shortWeekDays || (generateConfig.locale.getShortWeekDays ? generateConfig.locale.getShortWeekDays(locale.locale) : []);

  if (prefixColumn) {
    headerCells.push( /*#__PURE__*/react.createElement("th", {
      key: "empty",
      "aria-label": "empty cell"
    }));
  }

  for (var i = 0; i < WEEK_DAY_COUNT; i += 1) {
    headerCells.push( /*#__PURE__*/react.createElement("th", {
      key: i
    }, weekDaysLocale[(i + weekFirstDay) % WEEK_DAY_COUNT]));
  } // =============================== Body ===============================


  var getCellClassName = useCellClassName({
    cellPrefixCls: cellPrefixCls,
    today: today,
    value: value,
    generateConfig: generateConfig,
    rangedValue: prefixColumn ? null : rangedValue,
    hoverRangedValue: prefixColumn ? null : hoverRangedValue,
    isSameCell: function isSameCell(current, target) {
      return isSameDate(generateConfig, current, target);
    },
    isInView: function isInView(date) {
      return isSameMonth(generateConfig, date, viewDate);
    },
    offsetCell: function offsetCell(date, offset) {
      return generateConfig.addDate(date, offset);
    }
  });
  var getCellNode = dateRender ? function (date) {
    return dateRender(date, today);
  } : undefined;
  return /*#__PURE__*/react.createElement(PanelBody, _extends$1({}, props, {
    rowNum: rowCount,
    colNum: WEEK_DAY_COUNT,
    baseDate: baseDate,
    getCellNode: getCellNode,
    getCellText: generateConfig.getDate,
    getCellClassName: getCellClassName,
    getCellDate: generateConfig.addDate,
    titleCell: function titleCell(date) {
      return formatValue(date, {
        locale: locale,
        format: 'YYYY-MM-DD',
        generateConfig: generateConfig
      });
    },
    headerCells: headerCells
  }));
}

function DateHeader(props) {
  var prefixCls = props.prefixCls,
      generateConfig = props.generateConfig,
      locale = props.locale,
      viewDate = props.viewDate,
      onNextMonth = props.onNextMonth,
      onPrevMonth = props.onPrevMonth,
      onNextYear = props.onNextYear,
      onPrevYear = props.onPrevYear,
      onYearClick = props.onYearClick,
      onMonthClick = props.onMonthClick;

  var _React$useContext = react.useContext(PanelContext),
      hideHeader = _React$useContext.hideHeader;

  if (hideHeader) {
    return null;
  }

  var headerPrefixCls = "".concat(prefixCls, "-header");
  var monthsLocale = locale.shortMonths || (generateConfig.locale.getShortMonths ? generateConfig.locale.getShortMonths(locale.locale) : []);
  var month = generateConfig.getMonth(viewDate); // =================== Month & Year ===================

  var yearNode = /*#__PURE__*/react.createElement("button", {
    type: "button",
    key: "year",
    onClick: onYearClick,
    tabIndex: -1,
    className: "".concat(prefixCls, "-year-btn")
  }, formatValue(viewDate, {
    locale: locale,
    format: locale.yearFormat,
    generateConfig: generateConfig
  }));
  var monthNode = /*#__PURE__*/react.createElement("button", {
    type: "button",
    key: "month",
    onClick: onMonthClick,
    tabIndex: -1,
    className: "".concat(prefixCls, "-month-btn")
  }, locale.monthFormat ? formatValue(viewDate, {
    locale: locale,
    format: locale.monthFormat,
    generateConfig: generateConfig
  }) : monthsLocale[month]);
  var monthYearNodes = locale.monthBeforeYear ? [monthNode, yearNode] : [yearNode, monthNode];
  return /*#__PURE__*/react.createElement(Header, _extends$1({}, props, {
    prefixCls: headerPrefixCls,
    onSuperPrev: onPrevYear,
    onPrev: onPrevMonth,
    onNext: onNextMonth,
    onSuperNext: onNextYear
  }), monthYearNodes);
}

var DATE_ROW_COUNT = 6;

function DatePanel(props) {
  var prefixCls = props.prefixCls,
      _props$panelName = props.panelName,
      panelName = _props$panelName === void 0 ? 'date' : _props$panelName,
      keyboardConfig = props.keyboardConfig,
      active = props.active,
      operationRef = props.operationRef,
      generateConfig = props.generateConfig,
      value = props.value,
      viewDate = props.viewDate,
      onViewDateChange = props.onViewDateChange,
      onPanelChange = props.onPanelChange,
      _onSelect = props.onSelect;
  var panelPrefixCls = "".concat(prefixCls, "-").concat(panelName, "-panel"); // ======================= Keyboard =======================

  operationRef.current = {
    onKeyDown: function onKeyDown(event) {
      return createKeyDownHandler(event, _objectSpread2$1({
        onLeftRight: function onLeftRight(diff) {
          _onSelect(generateConfig.addDate(value || viewDate, diff), 'key');
        },
        onCtrlLeftRight: function onCtrlLeftRight(diff) {
          _onSelect(generateConfig.addYear(value || viewDate, diff), 'key');
        },
        onUpDown: function onUpDown(diff) {
          _onSelect(generateConfig.addDate(value || viewDate, diff * WEEK_DAY_COUNT), 'key');
        },
        onPageUpDown: function onPageUpDown(diff) {
          _onSelect(generateConfig.addMonth(value || viewDate, diff), 'key');
        }
      }, keyboardConfig));
    }
  }; // ==================== View Operation ====================

  var onYearChange = function onYearChange(diff) {
    var newDate = generateConfig.addYear(viewDate, diff);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };

  var onMonthChange = function onMonthChange(diff) {
    var newDate = generateConfig.addMonth(viewDate, diff);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };

  return /*#__PURE__*/react.createElement("div", {
    className: classnames(panelPrefixCls, _defineProperty$1({}, "".concat(panelPrefixCls, "-active"), active))
  }, /*#__PURE__*/react.createElement(DateHeader, _extends$1({}, props, {
    prefixCls: prefixCls,
    value: value,
    viewDate: viewDate // View Operation
    ,
    onPrevYear: function onPrevYear() {
      onYearChange(-1);
    },
    onNextYear: function onNextYear() {
      onYearChange(1);
    },
    onPrevMonth: function onPrevMonth() {
      onMonthChange(-1);
    },
    onNextMonth: function onNextMonth() {
      onMonthChange(1);
    },
    onMonthClick: function onMonthClick() {
      onPanelChange('month', viewDate);
    },
    onYearClick: function onYearClick() {
      onPanelChange('year', viewDate);
    }
  })), /*#__PURE__*/react.createElement(DateBody, _extends$1({}, props, {
    onSelect: function onSelect(date) {
      return _onSelect(date, 'mouse');
    },
    prefixCls: prefixCls,
    value: value,
    viewDate: viewDate,
    rowCount: DATE_ROW_COUNT
  })));
}

var ACTIVE_PANEL = tuple('date', 'time');

function DatetimePanel(props) {
  var prefixCls = props.prefixCls,
      operationRef = props.operationRef,
      generateConfig = props.generateConfig,
      value = props.value,
      defaultValue = props.defaultValue,
      disabledTime = props.disabledTime,
      showTime = props.showTime,
      onSelect = props.onSelect;
  var panelPrefixCls = "".concat(prefixCls, "-datetime-panel");

  var _React$useState = react.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      activePanel = _React$useState2[0],
      setActivePanel = _React$useState2[1];

  var dateOperationRef = react.useRef({});
  var timeOperationRef = react.useRef({});
  var timeProps = _typeof$1(showTime) === 'object' ? _objectSpread2$1({}, showTime) : {}; // ======================= Keyboard =======================

  function getNextActive(offset) {
    var activeIndex = ACTIVE_PANEL.indexOf(activePanel) + offset;
    var nextActivePanel = ACTIVE_PANEL[activeIndex] || null;
    return nextActivePanel;
  }

  var onBlur = function onBlur(e) {
    if (timeOperationRef.current.onBlur) {
      timeOperationRef.current.onBlur(e);
    }

    setActivePanel(null);
  };

  operationRef.current = {
    onKeyDown: function onKeyDown(event) {
      // Switch active panel
      if (event.which === KeyCode.TAB) {
        var nextActivePanel = getNextActive(event.shiftKey ? -1 : 1);
        setActivePanel(nextActivePanel);

        if (nextActivePanel) {
          event.preventDefault();
        }

        return true;
      } // Operate on current active panel


      if (activePanel) {
        var ref = activePanel === 'date' ? dateOperationRef : timeOperationRef;

        if (ref.current && ref.current.onKeyDown) {
          ref.current.onKeyDown(event);
        }

        return true;
      } // Switch first active panel if operate without panel


      if ([KeyCode.LEFT, KeyCode.RIGHT, KeyCode.UP, KeyCode.DOWN].includes(event.which)) {
        setActivePanel('date');
        return true;
      }

      return false;
    },
    onBlur: onBlur,
    onClose: onBlur
  }; // ======================== Events ========================

  var onInternalSelect = function onInternalSelect(date, source) {
    var selectedDate = date;

    if (source === 'date' && !value && timeProps.defaultValue) {
      // Date with time defaultValue
      selectedDate = generateConfig.setHour(selectedDate, generateConfig.getHour(timeProps.defaultValue));
      selectedDate = generateConfig.setMinute(selectedDate, generateConfig.getMinute(timeProps.defaultValue));
      selectedDate = generateConfig.setSecond(selectedDate, generateConfig.getSecond(timeProps.defaultValue));
    } else if (source === 'time' && !value && defaultValue) {
      selectedDate = generateConfig.setYear(selectedDate, generateConfig.getYear(defaultValue));
      selectedDate = generateConfig.setMonth(selectedDate, generateConfig.getMonth(defaultValue));
      selectedDate = generateConfig.setDate(selectedDate, generateConfig.getDate(defaultValue));
    }

    if (onSelect) {
      onSelect(selectedDate, 'mouse');
    }
  }; // ======================== Render ========================


  var disabledTimes = disabledTime ? disabledTime(value || null) : {};
  return /*#__PURE__*/react.createElement("div", {
    className: classnames(panelPrefixCls, _defineProperty$1({}, "".concat(panelPrefixCls, "-active"), activePanel))
  }, /*#__PURE__*/react.createElement(DatePanel, _extends$1({}, props, {
    operationRef: dateOperationRef,
    active: activePanel === 'date',
    onSelect: function onSelect(date) {
      onInternalSelect(setDateTime(generateConfig, date, showTime && _typeof$1(showTime) === 'object' ? showTime.defaultValue : null), 'date');
    }
  })), /*#__PURE__*/react.createElement(TimePanel, _extends$1({}, props, {
    format: undefined
  }, timeProps, disabledTimes, {
    defaultValue: undefined,
    operationRef: timeOperationRef,
    active: activePanel === 'time',
    onSelect: function onSelect(date) {
      onInternalSelect(date, 'time');
    }
  })));
}

function WeekPanel(props) {
  var prefixCls = props.prefixCls,
      generateConfig = props.generateConfig,
      locale = props.locale,
      value = props.value; // Render additional column

  var cellPrefixCls = "".concat(prefixCls, "-cell");

  var prefixColumn = function prefixColumn(date) {
    return /*#__PURE__*/react.createElement("td", {
      key: "week",
      className: classnames(cellPrefixCls, "".concat(cellPrefixCls, "-week"))
    }, generateConfig.locale.getWeek(locale.locale, date));
  }; // Add row className


  var rowPrefixCls = "".concat(prefixCls, "-week-panel-row");

  var rowClassName = function rowClassName(date) {
    return classnames(rowPrefixCls, _defineProperty$1({}, "".concat(rowPrefixCls, "-selected"), isSameWeek(generateConfig, locale.locale, value, date)));
  };

  return /*#__PURE__*/react.createElement(DatePanel, _extends$1({}, props, {
    panelName: "week",
    prefixColumn: prefixColumn,
    rowClassName: rowClassName,
    keyboardConfig: {
      onLeftRight: null
    }
  }));
}

function MonthHeader(props) {
  var prefixCls = props.prefixCls,
      generateConfig = props.generateConfig,
      locale = props.locale,
      viewDate = props.viewDate,
      onNextYear = props.onNextYear,
      onPrevYear = props.onPrevYear,
      onYearClick = props.onYearClick;

  var _React$useContext = react.useContext(PanelContext),
      hideHeader = _React$useContext.hideHeader;

  if (hideHeader) {
    return null;
  }

  var headerPrefixCls = "".concat(prefixCls, "-header");
  return /*#__PURE__*/react.createElement(Header, _extends$1({}, props, {
    prefixCls: headerPrefixCls,
    onSuperPrev: onPrevYear,
    onSuperNext: onNextYear
  }), /*#__PURE__*/react.createElement("button", {
    type: "button",
    onClick: onYearClick,
    className: "".concat(prefixCls, "-year-btn")
  }, formatValue(viewDate, {
    locale: locale,
    format: locale.yearFormat,
    generateConfig: generateConfig
  })));
}

var MONTH_COL_COUNT = 3;
var MONTH_ROW_COUNT = 4;

function MonthBody(props) {
  var prefixCls = props.prefixCls,
      locale = props.locale,
      value = props.value,
      viewDate = props.viewDate,
      generateConfig = props.generateConfig,
      monthCellRender = props.monthCellRender;

  var _React$useContext = react.useContext(RangeContext),
      rangedValue = _React$useContext.rangedValue,
      hoverRangedValue = _React$useContext.hoverRangedValue;

  var cellPrefixCls = "".concat(prefixCls, "-cell");
  var getCellClassName = useCellClassName({
    cellPrefixCls: cellPrefixCls,
    value: value,
    generateConfig: generateConfig,
    rangedValue: rangedValue,
    hoverRangedValue: hoverRangedValue,
    isSameCell: function isSameCell(current, target) {
      return isSameMonth(generateConfig, current, target);
    },
    isInView: function isInView() {
      return true;
    },
    offsetCell: function offsetCell(date, offset) {
      return generateConfig.addMonth(date, offset);
    }
  });
  var monthsLocale = locale.shortMonths || (generateConfig.locale.getShortMonths ? generateConfig.locale.getShortMonths(locale.locale) : []);
  var baseMonth = generateConfig.setMonth(viewDate, 0);
  var getCellNode = monthCellRender ? function (date) {
    return monthCellRender(date, locale);
  } : undefined;
  return /*#__PURE__*/react.createElement(PanelBody, _extends$1({}, props, {
    rowNum: MONTH_ROW_COUNT,
    colNum: MONTH_COL_COUNT,
    baseDate: baseMonth,
    getCellNode: getCellNode,
    getCellText: function getCellText(date) {
      return locale.monthFormat ? formatValue(date, {
        locale: locale,
        format: locale.monthFormat,
        generateConfig: generateConfig
      }) : monthsLocale[generateConfig.getMonth(date)];
    },
    getCellClassName: getCellClassName,
    getCellDate: generateConfig.addMonth,
    titleCell: function titleCell(date) {
      return formatValue(date, {
        locale: locale,
        format: 'YYYY-MM',
        generateConfig: generateConfig
      });
    }
  }));
}

function MonthPanel(props) {
  var prefixCls = props.prefixCls,
      operationRef = props.operationRef,
      onViewDateChange = props.onViewDateChange,
      generateConfig = props.generateConfig,
      value = props.value,
      viewDate = props.viewDate,
      onPanelChange = props.onPanelChange,
      _onSelect = props.onSelect;
  var panelPrefixCls = "".concat(prefixCls, "-month-panel"); // ======================= Keyboard =======================

  operationRef.current = {
    onKeyDown: function onKeyDown(event) {
      return createKeyDownHandler(event, {
        onLeftRight: function onLeftRight(diff) {
          _onSelect(generateConfig.addMonth(value || viewDate, diff), 'key');
        },
        onCtrlLeftRight: function onCtrlLeftRight(diff) {
          _onSelect(generateConfig.addYear(value || viewDate, diff), 'key');
        },
        onUpDown: function onUpDown(diff) {
          _onSelect(generateConfig.addMonth(value || viewDate, diff * MONTH_COL_COUNT), 'key');
        },
        onEnter: function onEnter() {
          onPanelChange('date', value || viewDate);
        }
      });
    }
  }; // ==================== View Operation ====================

  var onYearChange = function onYearChange(diff) {
    var newDate = generateConfig.addYear(viewDate, diff);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };

  return /*#__PURE__*/react.createElement("div", {
    className: panelPrefixCls
  }, /*#__PURE__*/react.createElement(MonthHeader, _extends$1({}, props, {
    prefixCls: prefixCls,
    onPrevYear: function onPrevYear() {
      onYearChange(-1);
    },
    onNextYear: function onNextYear() {
      onYearChange(1);
    },
    onYearClick: function onYearClick() {
      onPanelChange('year', viewDate);
    }
  })), /*#__PURE__*/react.createElement(MonthBody, _extends$1({}, props, {
    prefixCls: prefixCls,
    onSelect: function onSelect(date) {
      _onSelect(date, 'mouse');

      onPanelChange('date', date);
    }
  })));
}

function QuarterHeader(props) {
  var prefixCls = props.prefixCls,
      generateConfig = props.generateConfig,
      locale = props.locale,
      viewDate = props.viewDate,
      onNextYear = props.onNextYear,
      onPrevYear = props.onPrevYear,
      onYearClick = props.onYearClick;

  var _React$useContext = react.useContext(PanelContext),
      hideHeader = _React$useContext.hideHeader;

  if (hideHeader) {
    return null;
  }

  var headerPrefixCls = "".concat(prefixCls, "-header");
  return /*#__PURE__*/react.createElement(Header, _extends$1({}, props, {
    prefixCls: headerPrefixCls,
    onSuperPrev: onPrevYear,
    onSuperNext: onNextYear
  }), /*#__PURE__*/react.createElement("button", {
    type: "button",
    onClick: onYearClick,
    className: "".concat(prefixCls, "-year-btn")
  }, formatValue(viewDate, {
    locale: locale,
    format: locale.yearFormat,
    generateConfig: generateConfig
  })));
}

var QUARTER_COL_COUNT = 4;
var QUARTER_ROW_COUNT = 1;

function QuarterBody(props) {
  var prefixCls = props.prefixCls,
      locale = props.locale,
      value = props.value,
      viewDate = props.viewDate,
      generateConfig = props.generateConfig;

  var _React$useContext = react.useContext(RangeContext),
      rangedValue = _React$useContext.rangedValue,
      hoverRangedValue = _React$useContext.hoverRangedValue;

  var cellPrefixCls = "".concat(prefixCls, "-cell");
  var getCellClassName = useCellClassName({
    cellPrefixCls: cellPrefixCls,
    value: value,
    generateConfig: generateConfig,
    rangedValue: rangedValue,
    hoverRangedValue: hoverRangedValue,
    isSameCell: function isSameCell(current, target) {
      return isSameQuarter(generateConfig, current, target);
    },
    isInView: function isInView() {
      return true;
    },
    offsetCell: function offsetCell(date, offset) {
      return generateConfig.addMonth(date, offset * 3);
    }
  });
  var baseQuarter = generateConfig.setDate(generateConfig.setMonth(viewDate, 0), 1);
  return /*#__PURE__*/react.createElement(PanelBody, _extends$1({}, props, {
    rowNum: QUARTER_ROW_COUNT,
    colNum: QUARTER_COL_COUNT,
    baseDate: baseQuarter,
    getCellText: function getCellText(date) {
      return formatValue(date, {
        locale: locale,
        format: locale.quarterFormat || '[Q]Q',
        generateConfig: generateConfig
      });
    },
    getCellClassName: getCellClassName,
    getCellDate: function getCellDate(date, offset) {
      return generateConfig.addMonth(date, offset * 3);
    },
    titleCell: function titleCell(date) {
      return formatValue(date, {
        locale: locale,
        format: 'YYYY-[Q]Q',
        generateConfig: generateConfig
      });
    }
  }));
}

function QuarterPanel(props) {
  var prefixCls = props.prefixCls,
      operationRef = props.operationRef,
      onViewDateChange = props.onViewDateChange,
      generateConfig = props.generateConfig,
      value = props.value,
      viewDate = props.viewDate,
      onPanelChange = props.onPanelChange,
      _onSelect = props.onSelect;
  var panelPrefixCls = "".concat(prefixCls, "-quarter-panel"); // ======================= Keyboard =======================

  operationRef.current = {
    onKeyDown: function onKeyDown(event) {
      return createKeyDownHandler(event, {
        onLeftRight: function onLeftRight(diff) {
          _onSelect(generateConfig.addMonth(value || viewDate, diff * 3), 'key');
        },
        onCtrlLeftRight: function onCtrlLeftRight(diff) {
          _onSelect(generateConfig.addYear(value || viewDate, diff), 'key');
        },
        onUpDown: function onUpDown(diff) {
          _onSelect(generateConfig.addYear(value || viewDate, diff), 'key');
        }
      });
    }
  }; // ==================== View Operation ====================

  var onYearChange = function onYearChange(diff) {
    var newDate = generateConfig.addYear(viewDate, diff);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };

  return /*#__PURE__*/react.createElement("div", {
    className: panelPrefixCls
  }, /*#__PURE__*/react.createElement(QuarterHeader, _extends$1({}, props, {
    prefixCls: prefixCls,
    onPrevYear: function onPrevYear() {
      onYearChange(-1);
    },
    onNextYear: function onNextYear() {
      onYearChange(1);
    },
    onYearClick: function onYearClick() {
      onPanelChange('year', viewDate);
    }
  })), /*#__PURE__*/react.createElement(QuarterBody, _extends$1({}, props, {
    prefixCls: prefixCls,
    onSelect: function onSelect(date) {
      _onSelect(date, 'mouse');
    }
  })));
}

function YearHeader(props) {
  var prefixCls = props.prefixCls,
      generateConfig = props.generateConfig,
      viewDate = props.viewDate,
      onPrevDecade = props.onPrevDecade,
      onNextDecade = props.onNextDecade,
      onDecadeClick = props.onDecadeClick;

  var _React$useContext = react.useContext(PanelContext),
      hideHeader = _React$useContext.hideHeader;

  if (hideHeader) {
    return null;
  }

  var headerPrefixCls = "".concat(prefixCls, "-header");
  var yearNumber = generateConfig.getYear(viewDate);
  var startYear = Math.floor(yearNumber / YEAR_DECADE_COUNT) * YEAR_DECADE_COUNT;
  var endYear = startYear + YEAR_DECADE_COUNT - 1;
  return /*#__PURE__*/react.createElement(Header, _extends$1({}, props, {
    prefixCls: headerPrefixCls,
    onSuperPrev: onPrevDecade,
    onSuperNext: onNextDecade
  }), /*#__PURE__*/react.createElement("button", {
    type: "button",
    onClick: onDecadeClick,
    className: "".concat(prefixCls, "-decade-btn")
  }, startYear, "-", endYear));
}

var YEAR_COL_COUNT = 3;
var YEAR_ROW_COUNT = 4;

function YearBody(props) {
  var prefixCls = props.prefixCls,
      value = props.value,
      viewDate = props.viewDate,
      locale = props.locale,
      generateConfig = props.generateConfig;

  var _React$useContext = react.useContext(RangeContext),
      rangedValue = _React$useContext.rangedValue,
      hoverRangedValue = _React$useContext.hoverRangedValue;

  var yearPrefixCls = "".concat(prefixCls, "-cell"); // =============================== Year ===============================

  var yearNumber = generateConfig.getYear(viewDate);
  var startYear = Math.floor(yearNumber / YEAR_DECADE_COUNT) * YEAR_DECADE_COUNT;
  var endYear = startYear + YEAR_DECADE_COUNT - 1;
  var baseYear = generateConfig.setYear(viewDate, startYear - Math.ceil((YEAR_COL_COUNT * YEAR_ROW_COUNT - YEAR_DECADE_COUNT) / 2));

  var isInView = function isInView(date) {
    var currentYearNumber = generateConfig.getYear(date);
    return startYear <= currentYearNumber && currentYearNumber <= endYear;
  };

  var getCellClassName = useCellClassName({
    cellPrefixCls: yearPrefixCls,
    value: value,
    generateConfig: generateConfig,
    rangedValue: rangedValue,
    hoverRangedValue: hoverRangedValue,
    isSameCell: function isSameCell(current, target) {
      return isSameYear(generateConfig, current, target);
    },
    isInView: isInView,
    offsetCell: function offsetCell(date, offset) {
      return generateConfig.addYear(date, offset);
    }
  });
  return /*#__PURE__*/react.createElement(PanelBody, _extends$1({}, props, {
    rowNum: YEAR_ROW_COUNT,
    colNum: YEAR_COL_COUNT,
    baseDate: baseYear,
    getCellText: generateConfig.getYear,
    getCellClassName: getCellClassName,
    getCellDate: generateConfig.addYear,
    titleCell: function titleCell(date) {
      return formatValue(date, {
        locale: locale,
        format: 'YYYY',
        generateConfig: generateConfig
      });
    }
  }));
}

var YEAR_DECADE_COUNT = 10;

function YearPanel(props) {
  var prefixCls = props.prefixCls,
      operationRef = props.operationRef,
      onViewDateChange = props.onViewDateChange,
      generateConfig = props.generateConfig,
      value = props.value,
      viewDate = props.viewDate,
      sourceMode = props.sourceMode,
      _onSelect = props.onSelect,
      onPanelChange = props.onPanelChange;
  var panelPrefixCls = "".concat(prefixCls, "-year-panel"); // ======================= Keyboard =======================

  operationRef.current = {
    onKeyDown: function onKeyDown(event) {
      return createKeyDownHandler(event, {
        onLeftRight: function onLeftRight(diff) {
          _onSelect(generateConfig.addYear(value || viewDate, diff), 'key');
        },
        onCtrlLeftRight: function onCtrlLeftRight(diff) {
          _onSelect(generateConfig.addYear(value || viewDate, diff * YEAR_DECADE_COUNT), 'key');
        },
        onUpDown: function onUpDown(diff) {
          _onSelect(generateConfig.addYear(value || viewDate, diff * YEAR_COL_COUNT), 'key');
        },
        onEnter: function onEnter() {
          onPanelChange(sourceMode === 'date' ? 'date' : 'month', value || viewDate);
        }
      });
    }
  }; // ==================== View Operation ====================

  var onDecadeChange = function onDecadeChange(diff) {
    var newDate = generateConfig.addYear(viewDate, diff * 10);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };

  return /*#__PURE__*/react.createElement("div", {
    className: panelPrefixCls
  }, /*#__PURE__*/react.createElement(YearHeader, _extends$1({}, props, {
    prefixCls: prefixCls,
    onPrevDecade: function onPrevDecade() {
      onDecadeChange(-1);
    },
    onNextDecade: function onNextDecade() {
      onDecadeChange(1);
    },
    onDecadeClick: function onDecadeClick() {
      onPanelChange('decade', viewDate);
    }
  })), /*#__PURE__*/react.createElement(YearBody, _extends$1({}, props, {
    prefixCls: prefixCls,
    onSelect: function onSelect(date) {
      onPanelChange(sourceMode === 'date' ? 'date' : 'month', date);

      _onSelect(date, 'mouse');
    }
  })));
}

function getExtraFooter(prefixCls, mode, renderExtraFooter) {
  if (!renderExtraFooter) {
    return null;
  }

  return /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-footer-extra")
  }, renderExtraFooter(mode));
}

function getRanges(_ref) {
  var prefixCls = _ref.prefixCls,
      _ref$rangeList = _ref.rangeList,
      rangeList = _ref$rangeList === void 0 ? [] : _ref$rangeList,
      _ref$components = _ref.components,
      components = _ref$components === void 0 ? {} : _ref$components,
      needConfirmButton = _ref.needConfirmButton,
      onNow = _ref.onNow,
      onOk = _ref.onOk,
      okDisabled = _ref.okDisabled,
      showNow = _ref.showNow,
      locale = _ref.locale;
  var presetNode;
  var okNode;

  if (rangeList.length) {
    var Item = components.rangeItem || 'span';
    presetNode = /*#__PURE__*/react.createElement(react.Fragment, null, rangeList.map(function (_ref2) {
      var label = _ref2.label,
          onClick = _ref2.onClick,
          onMouseEnter = _ref2.onMouseEnter,
          onMouseLeave = _ref2.onMouseLeave;
      return /*#__PURE__*/react.createElement("li", {
        key: label,
        className: "".concat(prefixCls, "-preset")
      }, /*#__PURE__*/react.createElement(Item, {
        onClick: onClick,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave
      }, label));
    }));
  }

  if (needConfirmButton) {
    var Button = components.button || 'button';

    if (onNow && !presetNode && showNow !== false) {
      presetNode = /*#__PURE__*/react.createElement("li", {
        className: "".concat(prefixCls, "-now")
      }, /*#__PURE__*/react.createElement("a", {
        className: "".concat(prefixCls, "-now-btn"),
        onClick: onNow
      }, locale.now));
    }

    okNode = needConfirmButton && /*#__PURE__*/react.createElement("li", {
      className: "".concat(prefixCls, "-ok")
    }, /*#__PURE__*/react.createElement(Button, {
      disabled: okDisabled,
      onClick: onOk
    }, locale.ok));
  }

  if (!presetNode && !okNode) {
    return null;
  }

  return /*#__PURE__*/react.createElement("ul", {
    className: "".concat(prefixCls, "-ranges")
  }, presetNode, okNode);
}

function PickerPanel(props) {
  var _classNames;

  var _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-picker' : _props$prefixCls,
      className = props.className,
      style = props.style,
      locale = props.locale,
      generateConfig = props.generateConfig,
      value = props.value,
      defaultValue = props.defaultValue,
      pickerValue = props.pickerValue,
      defaultPickerValue = props.defaultPickerValue,
      disabledDate = props.disabledDate,
      mode = props.mode,
      _props$picker = props.picker,
      picker = _props$picker === void 0 ? 'date' : _props$picker,
      _props$tabIndex = props.tabIndex,
      tabIndex = _props$tabIndex === void 0 ? 0 : _props$tabIndex,
      showNow = props.showNow,
      showTime = props.showTime,
      showToday = props.showToday,
      renderExtraFooter = props.renderExtraFooter,
      hideHeader = props.hideHeader,
      onSelect = props.onSelect,
      onChange = props.onChange,
      onPanelChange = props.onPanelChange,
      onMouseDown = props.onMouseDown,
      onPickerValueChange = props.onPickerValueChange,
      _onOk = props.onOk,
      components = props.components,
      direction = props.direction,
      _props$hourStep = props.hourStep,
      hourStep = _props$hourStep === void 0 ? 1 : _props$hourStep,
      _props$minuteStep = props.minuteStep,
      minuteStep = _props$minuteStep === void 0 ? 1 : _props$minuteStep,
      _props$secondStep = props.secondStep,
      secondStep = _props$secondStep === void 0 ? 1 : _props$secondStep;
  var needConfirmButton = picker === 'date' && !!showTime || picker === 'time';
  var isHourStepValid = 24 % hourStep === 0;
  var isMinuteStepValid = 60 % minuteStep === 0;
  var isSecondStepValid = 60 % secondStep === 0;


  var panelContext = react.useContext(PanelContext);
  var operationRef = panelContext.operationRef,
      panelDivRef = panelContext.panelRef,
      onContextSelect = panelContext.onSelect,
      hideRanges = panelContext.hideRanges,
      defaultOpenValue = panelContext.defaultOpenValue;

  var _React$useContext = react.useContext(RangeContext),
      inRange = _React$useContext.inRange,
      panelPosition = _React$useContext.panelPosition,
      rangedValue = _React$useContext.rangedValue,
      hoverRangedValue = _React$useContext.hoverRangedValue;

  var panelRef = react.useRef({}); // Handle init logic

  var initRef = react.useRef(true); // Value

  var _useMergedState = useControlledState(null, {
    value: value,
    defaultValue: defaultValue,
    postState: function postState(val) {
      if (!val && defaultOpenValue && picker === 'time') {
        return defaultOpenValue;
      }

      return val;
    }
  }),
      _useMergedState2 = _slicedToArray(_useMergedState, 2),
      mergedValue = _useMergedState2[0],
      setInnerValue = _useMergedState2[1]; // View date control


  var _useMergedState3 = useControlledState(null, {
    value: pickerValue,
    defaultValue: defaultPickerValue || mergedValue,
    postState: function postState(date) {
      var now = generateConfig.getNow();
      if (!date) return now; // When value is null and set showTime

      if (!mergedValue && showTime) {
        if (_typeof$1(showTime) === 'object') {
          return setDateTime(generateConfig, date, showTime.defaultValue || now);
        }

        if (defaultValue) {
          return setDateTime(generateConfig, date, defaultValue);
        }

        return setDateTime(generateConfig, date, now);
      }

      return date;
    }
  }),
      _useMergedState4 = _slicedToArray(_useMergedState3, 2),
      viewDate = _useMergedState4[0],
      setInnerViewDate = _useMergedState4[1];

  var setViewDate = function setViewDate(date) {
    setInnerViewDate(date);

    if (onPickerValueChange) {
      onPickerValueChange(date);
    }
  }; // Panel control


  var getInternalNextMode = function getInternalNextMode(nextMode) {
    var getNextMode = PickerModeMap[picker];

    if (getNextMode) {
      return getNextMode(nextMode);
    }

    return nextMode;
  }; // Save panel is changed from which panel


  var _useMergedState5 = useControlledState(function () {
    if (picker === 'time') {
      return 'time';
    }

    return getInternalNextMode('date');
  }, {
    value: mode
  }),
      _useMergedState6 = _slicedToArray(_useMergedState5, 2),
      mergedMode = _useMergedState6[0],
      setInnerMode = _useMergedState6[1];

  react.useEffect(function () {
    setInnerMode(picker);
  }, [picker]);

  var _React$useState = react.useState(function () {
    return mergedMode;
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      sourceMode = _React$useState2[0],
      setSourceMode = _React$useState2[1];

  var onInternalPanelChange = function onInternalPanelChange(newMode, viewValue) {
    var nextMode = getInternalNextMode(newMode || mergedMode);
    setSourceMode(mergedMode);
    setInnerMode(nextMode);

    if (onPanelChange && (mergedMode !== nextMode || isEqual(generateConfig, viewDate, viewDate))) {
      onPanelChange(viewValue, nextMode);
    }
  };

  var triggerSelect = function triggerSelect(date, type) {
    var forceTriggerSelect = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (mergedMode === picker || forceTriggerSelect) {
      setInnerValue(date);

      if (onSelect) {
        onSelect(date);
      }

      if (onContextSelect) {
        onContextSelect(date, type);
      }

      if (onChange && !isEqual(generateConfig, date, mergedValue) && !(disabledDate === null || disabledDate === void 0 ? void 0 : disabledDate(date))) {
        onChange(date);
      }
    }
  }; // ========================= Interactive ==========================


  var onInternalKeyDown = function onInternalKeyDown(e) {
    if (panelRef.current && panelRef.current.onKeyDown) {
      if ([KeyCode.LEFT, KeyCode.RIGHT, KeyCode.UP, KeyCode.DOWN, KeyCode.PAGE_UP, KeyCode.PAGE_DOWN, KeyCode.ENTER].includes(e.which)) {
        e.preventDefault();
      }

      return panelRef.current.onKeyDown(e);
    }
    /* istanbul ignore next */

    /* eslint-disable no-lone-blocks */


    {
      warningOnce(false, 'Panel not correct handle keyDown event. Please help to fire issue about this.');
      return false;
    }
    /* eslint-enable no-lone-blocks */
  };

  var onInternalBlur = function onInternalBlur(e) {
    if (panelRef.current && panelRef.current.onBlur) {
      panelRef.current.onBlur(e);
    }
  };

  if (operationRef && panelPosition !== 'right') {
    operationRef.current = {
      onKeyDown: onInternalKeyDown,
      onClose: function onClose() {
        if (panelRef.current && panelRef.current.onClose) {
          panelRef.current.onClose();
        }
      }
    };
  } // ============================ Effect ============================


  react.useEffect(function () {
    if (value && !initRef.current) {
      setInnerViewDate(value);
    }
  }, [value]);
  react.useEffect(function () {
    initRef.current = false;
  }, []); // ============================ Panels ============================

  var panelNode;

  var pickerProps = _objectSpread2$1(_objectSpread2$1({}, props), {}, {
    operationRef: panelRef,
    prefixCls: prefixCls,
    viewDate: viewDate,
    value: mergedValue,
    onViewDateChange: setViewDate,
    sourceMode: sourceMode,
    onPanelChange: onInternalPanelChange,
    disabledDate: disabledDate
  });

  delete pickerProps.onChange;
  delete pickerProps.onSelect;

  switch (mergedMode) {
    case 'decade':
      panelNode = /*#__PURE__*/react.createElement(DecadePanel, _extends$1({}, pickerProps, {
        onSelect: function onSelect(date, type) {
          setViewDate(date);
          triggerSelect(date, type);
        }
      }));
      break;

    case 'year':
      panelNode = /*#__PURE__*/react.createElement(YearPanel, _extends$1({}, pickerProps, {
        onSelect: function onSelect(date, type) {
          setViewDate(date);
          triggerSelect(date, type);
        }
      }));
      break;

    case 'month':
      panelNode = /*#__PURE__*/react.createElement(MonthPanel, _extends$1({}, pickerProps, {
        onSelect: function onSelect(date, type) {
          setViewDate(date);
          triggerSelect(date, type);
        }
      }));
      break;

    case 'quarter':
      panelNode = /*#__PURE__*/react.createElement(QuarterPanel, _extends$1({}, pickerProps, {
        onSelect: function onSelect(date, type) {
          setViewDate(date);
          triggerSelect(date, type);
        }
      }));
      break;

    case 'week':
      panelNode = /*#__PURE__*/react.createElement(WeekPanel, _extends$1({}, pickerProps, {
        onSelect: function onSelect(date, type) {
          setViewDate(date);
          triggerSelect(date, type);
        }
      }));
      break;

    case 'time':
      delete pickerProps.showTime;
      panelNode = /*#__PURE__*/react.createElement(TimePanel, _extends$1({}, pickerProps, _typeof$1(showTime) === 'object' ? showTime : null, {
        onSelect: function onSelect(date, type) {
          setViewDate(date);
          triggerSelect(date, type);
        }
      }));
      break;

    default:
      if (showTime) {
        panelNode = /*#__PURE__*/react.createElement(DatetimePanel, _extends$1({}, pickerProps, {
          onSelect: function onSelect(date, type) {
            setViewDate(date);
            triggerSelect(date, type);
          }
        }));
      } else {
        panelNode = /*#__PURE__*/react.createElement(DatePanel, _extends$1({}, pickerProps, {
          onSelect: function onSelect(date, type) {
            setViewDate(date);
            triggerSelect(date, type);
          }
        }));
      }

  } // ============================ Footer ============================


  var extraFooter;
  var rangesNode;

  var onNow = function onNow() {
    var now = generateConfig.getNow();
    var lowerBoundTime = getLowerBoundTime(generateConfig.getHour(now), generateConfig.getMinute(now), generateConfig.getSecond(now), isHourStepValid ? hourStep : 1, isMinuteStepValid ? minuteStep : 1, isSecondStepValid ? secondStep : 1);
    var adjustedNow = setTime(generateConfig, now, lowerBoundTime[0], // hour
    lowerBoundTime[1], // minute
    lowerBoundTime[2]);
    triggerSelect(adjustedNow, 'submit');
  };

  if (!hideRanges) {
    extraFooter = getExtraFooter(prefixCls, mergedMode, renderExtraFooter);
    rangesNode = getRanges({
      prefixCls: prefixCls,
      components: components,
      needConfirmButton: needConfirmButton,
      okDisabled: !mergedValue || disabledDate && disabledDate(mergedValue),
      locale: locale,
      showNow: showNow,
      onNow: needConfirmButton && onNow,
      onOk: function onOk() {
        if (mergedValue) {
          triggerSelect(mergedValue, 'submit', true);

          if (_onOk) {
            _onOk(mergedValue);
          }
        }
      }
    });
  }

  var todayNode;

  if (showToday && mergedMode === 'date' && picker === 'date' && !showTime) {
    var now = generateConfig.getNow();
    var todayCls = "".concat(prefixCls, "-today-btn");
    var disabled = disabledDate && disabledDate(now);
    todayNode = /*#__PURE__*/react.createElement("a", {
      className: classnames(todayCls, disabled && "".concat(todayCls, "-disabled")),
      "aria-disabled": disabled,
      onClick: function onClick() {
        if (!disabled) {
          triggerSelect(now, 'mouse', true);
        }
      }
    }, locale.today);
  }

  return /*#__PURE__*/react.createElement(PanelContext.Provider, {
    value: _objectSpread2$1(_objectSpread2$1({}, panelContext), {}, {
      mode: mergedMode,
      hideHeader: 'hideHeader' in props ? hideHeader : panelContext.hideHeader,
      hidePrevBtn: inRange && panelPosition === 'right',
      hideNextBtn: inRange && panelPosition === 'left'
    })
  }, /*#__PURE__*/react.createElement("div", {
    tabIndex: tabIndex,
    className: classnames("".concat(prefixCls, "-panel"), className, (_classNames = {}, _defineProperty$1(_classNames, "".concat(prefixCls, "-panel-has-range"), rangedValue && rangedValue[0] && rangedValue[1]), _defineProperty$1(_classNames, "".concat(prefixCls, "-panel-has-range-hover"), hoverRangedValue && hoverRangedValue[0] && hoverRangedValue[1]), _defineProperty$1(_classNames, "".concat(prefixCls, "-panel-rtl"), direction === 'rtl'), _classNames)),
    style: style,
    onKeyDown: onInternalKeyDown,
    onBlur: onInternalBlur,
    onMouseDown: onMouseDown,
    ref: panelDivRef
  }, panelNode, extraFooter || rangesNode || todayNode ? /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-footer")
  }, extraFooter, rangesNode, todayNode) : null));
}
/* eslint-enable */

var BUILT_IN_PLACEMENTS = {
  bottomLeft: {
    points: ['tl', 'bl'],
    offset: [0, 4],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  },
  bottomRight: {
    points: ['tr', 'br'],
    offset: [0, 4],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  },
  topLeft: {
    points: ['bl', 'tl'],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  },
  topRight: {
    points: ['br', 'tr'],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  }
};

function PickerTrigger(_ref) {
  var _classNames;

  var prefixCls = _ref.prefixCls,
      popupElement = _ref.popupElement,
      popupStyle = _ref.popupStyle,
      visible = _ref.visible,
      dropdownClassName = _ref.dropdownClassName,
      dropdownAlign = _ref.dropdownAlign,
      transitionName = _ref.transitionName,
      getPopupContainer = _ref.getPopupContainer,
      children = _ref.children,
      range = _ref.range,
      popupPlacement = _ref.popupPlacement,
      direction = _ref.direction;
  var dropdownPrefixCls = "".concat(prefixCls, "-dropdown");

  var getPopupPlacement = function getPopupPlacement() {
    if (popupPlacement !== undefined) {
      return popupPlacement;
    }

    return direction === 'rtl' ? 'bottomRight' : 'bottomLeft';
  };

  return /*#__PURE__*/react.createElement(Trigger, {
    showAction: [],
    hideAction: [],
    popupPlacement: getPopupPlacement(),
    builtinPlacements: BUILT_IN_PLACEMENTS,
    prefixCls: dropdownPrefixCls,
    popupTransitionName: transitionName,
    popup: popupElement,
    popupAlign: dropdownAlign,
    popupVisible: visible,
    popupClassName: classnames(dropdownClassName, (_classNames = {}, _defineProperty$1(_classNames, "".concat(dropdownPrefixCls, "-range"), range), _defineProperty$1(_classNames, "".concat(dropdownPrefixCls, "-rtl"), direction === 'rtl'), _classNames)),
    popupStyle: popupStyle,
    getPopupContainer: getPopupContainer
  }, children);
}

function usePickerInput(_ref) {
  var open = _ref.open,
      value = _ref.value,
      isClickOutside = _ref.isClickOutside,
      triggerOpen = _ref.triggerOpen,
      forwardKeyDown = _ref.forwardKeyDown,
      _onKeyDown = _ref.onKeyDown,
      blurToCancel = _ref.blurToCancel,
      onSubmit = _ref.onSubmit,
      onCancel = _ref.onCancel,
      _onFocus = _ref.onFocus,
      _onBlur = _ref.onBlur;

  var _useState = react.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      typing = _useState2[0],
      setTyping = _useState2[1];

  var _useState3 = react.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      focused = _useState4[0],
      setFocused = _useState4[1];
  /**
   * We will prevent blur to handle open event when user click outside,
   * since this will repeat trigger `onOpenChange` event.
   */


  var preventBlurRef = react.useRef(false);
  var valueChangedRef = react.useRef(false);
  var preventDefaultRef = react.useRef(false);
  var inputProps = {
    onMouseDown: function onMouseDown() {
      setTyping(true);
      triggerOpen(true);
    },
    onKeyDown: function onKeyDown(e) {
      var preventDefault = function preventDefault() {
        preventDefaultRef.current = true;
      };

      _onKeyDown(e, preventDefault);

      if (preventDefaultRef.current) return;

      switch (e.which) {
        case KeyCode.ENTER:
          {
            if (!open) {
              triggerOpen(true);
            } else if (onSubmit() !== false) {
              setTyping(true);
            }

            e.preventDefault();
            return;
          }

        case KeyCode.TAB:
          {
            if (typing && open && !e.shiftKey) {
              setTyping(false);
              e.preventDefault();
            } else if (!typing && open) {
              if (!forwardKeyDown(e) && e.shiftKey) {
                setTyping(true);
                e.preventDefault();
              }
            }

            return;
          }

        case KeyCode.ESC:
          {
            setTyping(true);
            onCancel();
            return;
          }
      }

      if (!open && ![KeyCode.SHIFT].includes(e.which)) {
        triggerOpen(true);
      } else if (!typing) {
        // Let popup panel handle keyboard
        forwardKeyDown(e);
      }
    },
    onFocus: function onFocus(e) {
      setTyping(true);
      setFocused(true);

      if (_onFocus) {
        _onFocus(e);
      }
    },
    onBlur: function onBlur(e) {
      if (preventBlurRef.current || !isClickOutside(document.activeElement)) {
        preventBlurRef.current = false;
        return;
      }

      if (blurToCancel) {
        setTimeout(function () {
          var _document = document,
              activeElement = _document.activeElement;

          while (activeElement && activeElement.shadowRoot) {
            activeElement = activeElement.shadowRoot.activeElement;
          }

          if (isClickOutside(activeElement)) {
            onCancel();
          }
        }, 0);
      } else if (open) {
        triggerOpen(false);

        if (valueChangedRef.current) {
          onSubmit();
        }
      }

      setFocused(false);

      if (_onBlur) {
        _onBlur(e);
      }
    }
  }; // check if value changed

  react.useEffect(function () {
    valueChangedRef.current = false;
  }, [open]);
  react.useEffect(function () {
    valueChangedRef.current = true;
  }, [value]); // Global click handler

  react.useEffect(function () {
    return addGlobalMouseDownEvent(function (e) {
      var target = getTargetFromEvent(e);

      if (open) {
        var clickedOutside = isClickOutside(target);

        if (!clickedOutside) {
          preventBlurRef.current = true; // Always set back in case `onBlur` prevented by user

          requestAnimationFrame(function () {
            preventBlurRef.current = false;
          });
        } else if (!focused || clickedOutside) {
          triggerOpen(false);
        }
      }
    });
  });
  return [inputProps, {
    focused: focused,
    typing: typing
  }];
}

function useTextValueMapping(_ref) {
  var valueTexts = _ref.valueTexts,
      onTextChange = _ref.onTextChange;

  var _React$useState = react.useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      text = _React$useState2[0],
      setInnerText = _React$useState2[1];

  var valueTextsRef = react.useRef([]);
  valueTextsRef.current = valueTexts;

  function triggerTextChange(value) {
    setInnerText(value);
    onTextChange(value);
  }

  function resetText() {
    setInnerText(valueTextsRef.current[0]);
  }

  react.useEffect(function () {
    if (valueTexts.every(function (valText) {
      return valText !== text;
    })) {
      resetText();
    }
  }, [valueTexts.join('||')]);
  return [text, triggerTextChange, resetText];
}

function useValueTexts(value, _ref) {
  var formatList = _ref.formatList,
      generateConfig = _ref.generateConfig,
      locale = _ref.locale;
  return useMemo(function () {
    if (!value) {
      return [[''], ''];
    } // We will convert data format back to first format


    var firstValueText = '';
    var fullValueTexts = [];

    for (var i = 0; i < formatList.length; i += 1) {
      var format = formatList[i];
      var formatStr = formatValue(value, {
        generateConfig: generateConfig,
        locale: locale,
        format: format
      });
      fullValueTexts.push(formatStr);

      if (i === 0) {
        firstValueText = formatStr;
      }
    }

    return [fullValueTexts, firstValueText];
  }, [value, formatList], function (prev, next) {
    return prev[0] !== next[0] || !shallowequal(prev[1], next[1]);
  });
}

function useHoverValue(valueText, _ref) {
  var formatList = _ref.formatList,
      generateConfig = _ref.generateConfig,
      locale = _ref.locale;

  var _useState = react.useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      internalSetValue = _useState2[1];

  var raf = react.useRef(null);

  function setValue(val) {
    var immediately = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    cancelAnimationFrame(raf.current);

    if (immediately) {
      internalSetValue(val);
      return;
    }

    raf.current = requestAnimationFrame(function () {
      internalSetValue(val);
    });
  }

  var _useValueTexts = useValueTexts(value, {
    formatList: formatList,
    generateConfig: generateConfig,
    locale: locale
  }),
      _useValueTexts2 = _slicedToArray(_useValueTexts, 2),
      firstText = _useValueTexts2[1];

  function onEnter(date) {
    setValue(date);
  }

  function onLeave() {
    var immediately = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    setValue(null, immediately);
  }

  react.useEffect(function () {
    onLeave(true);
  }, [valueText]);
  react.useEffect(function () {
    return function () {
      return cancelAnimationFrame(raf.current);
    };
  }, []);
  return [firstText, onEnter, onLeave];
}

function InnerPicker(props) {
  var _classNames2;

  var _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-picker' : _props$prefixCls,
      id = props.id,
      tabIndex = props.tabIndex,
      style = props.style,
      className = props.className,
      dropdownClassName = props.dropdownClassName,
      dropdownAlign = props.dropdownAlign,
      popupStyle = props.popupStyle,
      transitionName = props.transitionName,
      generateConfig = props.generateConfig,
      locale = props.locale,
      inputReadOnly = props.inputReadOnly,
      allowClear = props.allowClear,
      autoFocus = props.autoFocus,
      showTime = props.showTime,
      _props$picker = props.picker,
      picker = _props$picker === void 0 ? 'date' : _props$picker,
      format = props.format,
      use12Hours = props.use12Hours,
      value = props.value,
      defaultValue = props.defaultValue,
      open = props.open,
      defaultOpen = props.defaultOpen,
      defaultOpenValue = props.defaultOpenValue,
      suffixIcon = props.suffixIcon,
      clearIcon = props.clearIcon,
      disabled = props.disabled,
      disabledDate = props.disabledDate,
      placeholder = props.placeholder,
      getPopupContainer = props.getPopupContainer,
      pickerRef = props.pickerRef,
      panelRender = props.panelRender,
      onChange = props.onChange,
      onOpenChange = props.onOpenChange,
      onFocus = props.onFocus,
      onBlur = props.onBlur,
      onMouseDown = props.onMouseDown,
      onMouseUp = props.onMouseUp,
      onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave,
      onContextMenu = props.onContextMenu,
      onClick = props.onClick,
      _onKeyDown = props.onKeyDown,
      _onSelect = props.onSelect,
      direction = props.direction,
      _props$autoComplete = props.autoComplete,
      autoComplete = _props$autoComplete === void 0 ? 'off' : _props$autoComplete;
  var inputRef = react.useRef(null);
  var needConfirmButton = picker === 'date' && !!showTime || picker === 'time'; // ============================= State =============================

  var formatList = toArray$1(getDefaultFormat(format, picker, showTime, use12Hours)); // Panel ref

  var panelDivRef = react.useRef(null);
  var inputDivRef = react.useRef(null); // Real value

  var _useMergedState = useControlledState(null, {
    value: value,
    defaultValue: defaultValue
  }),
      _useMergedState2 = _slicedToArray(_useMergedState, 2),
      mergedValue = _useMergedState2[0],
      setInnerValue = _useMergedState2[1]; // Selected value


  var _React$useState = react.useState(mergedValue),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      selectedValue = _React$useState2[0],
      setSelectedValue = _React$useState2[1]; // Operation ref


  var operationRef = react.useRef(null); // Open

  var _useMergedState3 = useControlledState(false, {
    value: open,
    defaultValue: defaultOpen,
    postState: function postState(postOpen) {
      return disabled ? false : postOpen;
    },
    onChange: function onChange(newOpen) {
      if (onOpenChange) {
        onOpenChange(newOpen);
      }

      if (!newOpen && operationRef.current && operationRef.current.onClose) {
        operationRef.current.onClose();
      }
    }
  }),
      _useMergedState4 = _slicedToArray(_useMergedState3, 2),
      mergedOpen = _useMergedState4[0],
      triggerInnerOpen = _useMergedState4[1]; // ============================= Text ==============================


  var _useValueTexts = useValueTexts(selectedValue, {
    formatList: formatList,
    generateConfig: generateConfig,
    locale: locale
  }),
      _useValueTexts2 = _slicedToArray(_useValueTexts, 2),
      valueTexts = _useValueTexts2[0],
      firstValueText = _useValueTexts2[1];

  var _useTextValueMapping = useTextValueMapping({
    valueTexts: valueTexts,
    onTextChange: function onTextChange(newText) {
      var inputDate = parseValue(newText, {
        locale: locale,
        formatList: formatList,
        generateConfig: generateConfig
      });

      if (inputDate && (!disabledDate || !disabledDate(inputDate))) {
        setSelectedValue(inputDate);
      }
    }
  }),
      _useTextValueMapping2 = _slicedToArray(_useTextValueMapping, 3),
      text = _useTextValueMapping2[0],
      triggerTextChange = _useTextValueMapping2[1],
      resetText = _useTextValueMapping2[2]; // ============================ Trigger ============================


  var triggerChange = function triggerChange(newValue) {
    setSelectedValue(newValue);
    setInnerValue(newValue);

    if (onChange && !isEqual(generateConfig, mergedValue, newValue)) {
      onChange(newValue, newValue ? formatValue(newValue, {
        generateConfig: generateConfig,
        locale: locale,
        format: formatList[0]
      }) : '');
    }
  };

  var triggerOpen = function triggerOpen(newOpen) {
    if (disabled && newOpen) {
      return;
    }

    triggerInnerOpen(newOpen);
  };

  var forwardKeyDown = function forwardKeyDown(e) {
    if (mergedOpen && operationRef.current && operationRef.current.onKeyDown) {
      // Let popup panel handle keyboard
      return operationRef.current.onKeyDown(e);
    }
    /* istanbul ignore next */

    /* eslint-disable no-lone-blocks */


    {
      warningOnce(false, 'Picker not correct forward KeyDown operation. Please help to fire issue about this.');
      return false;
    }
  };

  var onInternalMouseUp = function onInternalMouseUp() {
    if (onMouseUp) {
      onMouseUp.apply(void 0, arguments);
    }

    if (inputRef.current) {
      inputRef.current.focus();
      triggerOpen(true);
    }
  }; // ============================= Input =============================


  var _usePickerInput = usePickerInput({
    blurToCancel: needConfirmButton,
    open: mergedOpen,
    value: text,
    triggerOpen: triggerOpen,
    forwardKeyDown: forwardKeyDown,
    isClickOutside: function isClickOutside(target) {
      return !elementsContains([panelDivRef.current, inputDivRef.current], target);
    },
    onSubmit: function onSubmit() {
      if (disabledDate && disabledDate(selectedValue)) {
        return false;
      }

      triggerChange(selectedValue);
      triggerOpen(false);
      resetText();
      return true;
    },
    onCancel: function onCancel() {
      triggerOpen(false);
      setSelectedValue(mergedValue);
      resetText();
    },
    onKeyDown: function onKeyDown(e, preventDefault) {
      _onKeyDown === null || _onKeyDown === void 0 ? void 0 : _onKeyDown(e, preventDefault);
    },
    onFocus: onFocus,
    onBlur: onBlur
  }),
      _usePickerInput2 = _slicedToArray(_usePickerInput, 2),
      inputProps = _usePickerInput2[0],
      _usePickerInput2$ = _usePickerInput2[1],
      focused = _usePickerInput2$.focused,
      typing = _usePickerInput2$.typing; // ============================= Sync ==============================
  // Close should sync back with text value


  react.useEffect(function () {
    if (!mergedOpen) {
      setSelectedValue(mergedValue);

      if (!valueTexts.length || valueTexts[0] === '') {
        triggerTextChange('');
      } else if (firstValueText !== text) {
        resetText();
      }
    }
  }, [mergedOpen, valueTexts]); // Change picker should sync back with text value

  react.useEffect(function () {
    if (!mergedOpen) {
      resetText();
    }
  }, [picker]); // Sync innerValue with control mode

  react.useEffect(function () {
    // Sync select value
    setSelectedValue(mergedValue);
  }, [mergedValue]); // ============================ Private ============================

  if (pickerRef) {
    pickerRef.current = {
      focus: function focus() {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      },
      blur: function blur() {
        if (inputRef.current) {
          inputRef.current.blur();
        }
      }
    };
  }

  var _useHoverValue = useHoverValue(text, {
    formatList: formatList,
    generateConfig: generateConfig,
    locale: locale
  }),
      _useHoverValue2 = _slicedToArray(_useHoverValue, 3),
      hoverValue = _useHoverValue2[0],
      onEnter = _useHoverValue2[1],
      onLeave = _useHoverValue2[2]; // ============================= Panel =============================


  var panelProps = _objectSpread2$1(_objectSpread2$1({}, props), {}, {
    className: undefined,
    style: undefined,
    pickerValue: undefined,
    onPickerValueChange: undefined,
    onChange: null
  });

  var panelNode = /*#__PURE__*/react.createElement(PickerPanel, _extends$1({}, panelProps, {
    generateConfig: generateConfig,
    className: classnames(_defineProperty$1({}, "".concat(prefixCls, "-panel-focused"), !typing)),
    value: selectedValue,
    locale: locale,
    tabIndex: -1,
    onSelect: function onSelect(date) {
      _onSelect === null || _onSelect === void 0 ? void 0 : _onSelect(date);
      setSelectedValue(date);
    },
    direction: direction,
    onPanelChange: function onPanelChange(viewDate, mode) {
      var onPanelChange = props.onPanelChange;
      onLeave(true);
      onPanelChange === null || onPanelChange === void 0 ? void 0 : onPanelChange(viewDate, mode);
    }
  }));

  if (panelRender) {
    panelNode = panelRender(panelNode);
  }

  var panel = /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-panel-container"),
    onMouseDown: function onMouseDown(e) {
      e.preventDefault();
    }
  }, panelNode);
  var suffixNode;

  if (suffixIcon) {
    suffixNode = /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-suffix")
    }, suffixIcon);
  }

  var clearNode;

  if (allowClear && mergedValue && !disabled) {
    clearNode = /*#__PURE__*/react.createElement("span", {
      onMouseDown: function onMouseDown(e) {
        e.preventDefault();
        e.stopPropagation();
      },
      onMouseUp: function onMouseUp(e) {
        e.preventDefault();
        e.stopPropagation();
        triggerChange(null);
        triggerOpen(false);
      },
      className: "".concat(prefixCls, "-clear")
    }, clearIcon || /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-clear-btn")
    }));
  } // ============================ Warning ============================


  var onContextSelect = function onContextSelect(date, type) {
    if (type === 'submit' || type !== 'key' && !needConfirmButton) {
      // triggerChange will also update selected values
      triggerChange(date);
      triggerOpen(false);
    }
  };

  var popupPlacement = direction === 'rtl' ? 'bottomRight' : 'bottomLeft';
  return /*#__PURE__*/react.createElement(PanelContext.Provider, {
    value: {
      operationRef: operationRef,
      hideHeader: picker === 'time',
      panelRef: panelDivRef,
      onSelect: onContextSelect,
      open: mergedOpen,
      defaultOpenValue: defaultOpenValue,
      onDateMouseEnter: onEnter,
      onDateMouseLeave: onLeave
    }
  }, /*#__PURE__*/react.createElement(PickerTrigger, {
    visible: mergedOpen,
    popupElement: panel,
    popupStyle: popupStyle,
    prefixCls: prefixCls,
    dropdownClassName: dropdownClassName,
    dropdownAlign: dropdownAlign,
    getPopupContainer: getPopupContainer,
    transitionName: transitionName,
    popupPlacement: popupPlacement,
    direction: direction
  }, /*#__PURE__*/react.createElement("div", {
    className: classnames(prefixCls, className, (_classNames2 = {}, _defineProperty$1(_classNames2, "".concat(prefixCls, "-disabled"), disabled), _defineProperty$1(_classNames2, "".concat(prefixCls, "-focused"), focused), _defineProperty$1(_classNames2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames2)),
    style: style,
    onMouseDown: onMouseDown,
    onMouseUp: onInternalMouseUp,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    onContextMenu: onContextMenu,
    onClick: onClick
  }, /*#__PURE__*/react.createElement("div", {
    className: classnames("".concat(prefixCls, "-input"), _defineProperty$1({}, "".concat(prefixCls, "-input-placeholder"), !!hoverValue)),
    ref: inputDivRef
  }, /*#__PURE__*/react.createElement("input", _extends$1({
    id: id,
    tabIndex: tabIndex,
    disabled: disabled,
    readOnly: inputReadOnly || typeof formatList[0] === 'function' || !typing,
    value: hoverValue || text,
    onChange: function onChange(e) {
      triggerTextChange(e.target.value);
    },
    autoFocus: autoFocus,
    placeholder: placeholder,
    ref: inputRef,
    title: text
  }, inputProps, {
    size: getInputSize(picker, formatList[0], generateConfig)
  }, getDataOrAriaProps(props), {
    autoComplete: autoComplete
  })), suffixNode, clearNode))));
} // Wrap with class component to enable pass generic with instance method


var Picker = /*#__PURE__*/function (_React$Component) {
  _inherits(Picker, _React$Component);

  var _super = _createSuper(Picker);

  function Picker() {
    var _this;

    _classCallCheck(this, Picker);

    _this = _super.apply(this, arguments);
    _this.pickerRef = /*#__PURE__*/react.createRef();

    _this.focus = function () {
      if (_this.pickerRef.current) {
        _this.pickerRef.current.focus();
      }
    };

    _this.blur = function () {
      if (_this.pickerRef.current) {
        _this.pickerRef.current.blur();
      }
    };

    return _this;
  }

  _createClass(Picker, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement(InnerPicker, _extends$1({}, this.props, {
        pickerRef: this.pickerRef
      }));
    }
  }]);

  return Picker;
}(react.Component);

function useRangeDisabled(_ref, disabledStart, disabledEnd) {
  var picker = _ref.picker,
      locale = _ref.locale,
      selectedValue = _ref.selectedValue,
      disabledDate = _ref.disabledDate,
      disabled = _ref.disabled,
      generateConfig = _ref.generateConfig;
  var startDate = getValue(selectedValue, 0);
  var endDate = getValue(selectedValue, 1);

  function weekFirstDate(date) {
    return generateConfig.locale.getWeekFirstDate(locale.locale, date);
  }

  function monthNumber(date) {
    var year = generateConfig.getYear(date);
    var month = generateConfig.getMonth(date);
    return year * 100 + month;
  }

  function quarterNumber(date) {
    var year = generateConfig.getYear(date);
    var quarter = getQuarter(generateConfig, date);
    return year * 10 + quarter;
  }

  var disabledStartDate = react.useCallback(function (date) {
    if (disabledDate && disabledDate(date)) {
      return true;
    } // Disabled range


    if (disabled[1] && endDate) {
      return !isSameDate(generateConfig, date, endDate) && generateConfig.isAfter(date, endDate);
    } // Disabled part


    if (disabledStart && endDate) {
      switch (picker) {
        case 'quarter':
          return quarterNumber(date) > quarterNumber(endDate);

        case 'month':
          return monthNumber(date) > monthNumber(endDate);

        case 'week':
          return weekFirstDate(date) > weekFirstDate(endDate);

        default:
          return !isSameDate(generateConfig, date, endDate) && generateConfig.isAfter(date, endDate);
      }
    }

    return false;
  }, [disabledDate, disabled[1], endDate, disabledStart]);
  var disabledEndDate = react.useCallback(function (date) {
    if (disabledDate && disabledDate(date)) {
      return true;
    } // Disabled range


    if (disabled[0] && startDate) {
      return !isSameDate(generateConfig, date, endDate) && generateConfig.isAfter(startDate, date);
    } // Disabled part


    if (disabledEnd && startDate) {
      switch (picker) {
        case 'quarter':
          return quarterNumber(date) < quarterNumber(startDate);

        case 'month':
          return monthNumber(date) < monthNumber(startDate);

        case 'week':
          return weekFirstDate(date) < weekFirstDate(startDate);

        default:
          return !isSameDate(generateConfig, date, startDate) && generateConfig.isAfter(startDate, date);
      }
    }

    return false;
  }, [disabledDate, disabled[0], startDate, disabledEnd]);
  return [disabledStartDate, disabledEndDate];
}

function getStartEndDistance(startDate, endDate, picker, generateConfig) {
  var startNext = getClosingViewDate(startDate, picker, generateConfig, 1);

  function getDistance(compareFunc) {
    if (compareFunc(startDate, endDate)) {
      return 'same';
    }

    if (compareFunc(startNext, endDate)) {
      return 'closing';
    }

    return 'far';
  }

  switch (picker) {
    case 'year':
      return getDistance(function (start, end) {
        return isSameDecade(generateConfig, start, end);
      });

    case 'quarter':
    case 'month':
      return getDistance(function (start, end) {
        return isSameYear(generateConfig, start, end);
      });

    default:
      return getDistance(function (start, end) {
        return isSameMonth(generateConfig, start, end);
      });
  }
}

function getRangeViewDate(values, index, picker, generateConfig) {
  var startDate = getValue(values, 0);
  var endDate = getValue(values, 1);

  if (index === 0) {
    return startDate;
  }

  if (startDate && endDate) {
    var distance = getStartEndDistance(startDate, endDate, picker, generateConfig);

    switch (distance) {
      case 'same':
        return startDate;

      case 'closing':
        return startDate;

      default:
        return getClosingViewDate(endDate, picker, generateConfig, -1);
    }
  }

  return startDate;
}

function useRangeViewDates(_ref) {
  var values = _ref.values,
      picker = _ref.picker,
      defaultDates = _ref.defaultDates,
      generateConfig = _ref.generateConfig;

  var _React$useState = react.useState(function () {
    return [getValue(defaultDates, 0), getValue(defaultDates, 1)];
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      defaultViewDates = _React$useState2[0],
      setDefaultViewDates = _React$useState2[1];

  var _React$useState3 = react.useState(null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      viewDates = _React$useState4[0],
      setInternalViewDates = _React$useState4[1];

  var startDate = getValue(values, 0);
  var endDate = getValue(values, 1);

  function getViewDate(index) {
    // If set default view date, use it
    if (defaultViewDates[index]) {
      return defaultViewDates[index];
    }

    return getValue(viewDates, index) || getRangeViewDate(values, index, picker, generateConfig) || startDate || endDate || generateConfig.getNow();
  }

  function setViewDate(viewDate, index) {
    if (viewDate) {
      var newViewDates = updateValues(viewDates, viewDate, index); // Set view date will clean up default one

      setDefaultViewDates( // Should always be an array
      updateValues(defaultViewDates, null, index) || [null, null]); // Reset another one when not have value

      var anotherIndex = (index + 1) % 2;

      if (!getValue(values, anotherIndex)) {
        newViewDates = updateValues(newViewDates, viewDate, anotherIndex);
      }

      setInternalViewDates(newViewDates);
    } else if (startDate || endDate) {
      // Reset all when has values when `viewDate` is `null` which means from open trigger
      setInternalViewDates(null);
    }
  }

  return [getViewDate, setViewDate];
}

function reorderValues(values, generateConfig) {
  if (values && values[0] && values[1] && generateConfig.isAfter(values[0], values[1])) {
    return [values[1], values[0]];
  }

  return values;
}

function canValueTrigger(value, index, disabled, allowEmpty) {
  if (value) {
    return true;
  }

  if (allowEmpty && allowEmpty[index]) {
    return true;
  }

  if (disabled[(index + 1) % 2]) {
    return true;
  }

  return false;
}

function InnerRangePicker(props) {
  var _classNames2, _classNames3, _classNames4;

  var _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-picker' : _props$prefixCls,
      id = props.id,
      style = props.style,
      className = props.className,
      popupStyle = props.popupStyle,
      dropdownClassName = props.dropdownClassName,
      transitionName = props.transitionName,
      dropdownAlign = props.dropdownAlign,
      getPopupContainer = props.getPopupContainer,
      generateConfig = props.generateConfig,
      locale = props.locale,
      placeholder = props.placeholder,
      autoFocus = props.autoFocus,
      disabled = props.disabled,
      format = props.format,
      _props$picker = props.picker,
      picker = _props$picker === void 0 ? 'date' : _props$picker,
      showTime = props.showTime,
      use12Hours = props.use12Hours,
      _props$separator = props.separator,
      separator = _props$separator === void 0 ? '~' : _props$separator,
      value = props.value,
      defaultValue = props.defaultValue,
      defaultPickerValue = props.defaultPickerValue,
      open = props.open,
      defaultOpen = props.defaultOpen,
      disabledDate = props.disabledDate,
      _disabledTime = props.disabledTime,
      dateRender = props.dateRender,
      panelRender = props.panelRender,
      ranges = props.ranges,
      allowEmpty = props.allowEmpty,
      allowClear = props.allowClear,
      suffixIcon = props.suffixIcon,
      clearIcon = props.clearIcon,
      pickerRef = props.pickerRef,
      inputReadOnly = props.inputReadOnly,
      mode = props.mode,
      renderExtraFooter = props.renderExtraFooter,
      onChange = props.onChange,
      onOpenChange = props.onOpenChange,
      onPanelChange = props.onPanelChange,
      onCalendarChange = props.onCalendarChange,
      _onFocus = props.onFocus,
      onBlur = props.onBlur,
      _onOk = props.onOk,
      _onKeyDown = props.onKeyDown,
      components = props.components,
      order = props.order,
      direction = props.direction,
      activePickerIndex = props.activePickerIndex,
      _props$autoComplete = props.autoComplete,
      autoComplete = _props$autoComplete === void 0 ? 'off' : _props$autoComplete;
  var needConfirmButton = picker === 'date' && !!showTime || picker === 'time'; // We record opened status here in case repeat open with picker

  var openRecordsRef = react.useRef({});
  var containerRef = react.useRef(null);
  var panelDivRef = react.useRef(null);
  var startInputDivRef = react.useRef(null);
  var endInputDivRef = react.useRef(null);
  var separatorRef = react.useRef(null);
  var startInputRef = react.useRef(null);
  var endInputRef = react.useRef(null); // ============================= Misc ==============================

  var formatList = toArray$1(getDefaultFormat(format, picker, showTime, use12Hours)); // Active picker

  var _useMergedState = useControlledState(0, {
    value: activePickerIndex
  }),
      _useMergedState2 = _slicedToArray(_useMergedState, 2),
      mergedActivePickerIndex = _useMergedState2[0],
      setMergedActivePickerIndex = _useMergedState2[1]; // Operation ref


  var operationRef = react.useRef(null);
  var mergedDisabled = react.useMemo(function () {
    if (Array.isArray(disabled)) {
      return disabled;
    }

    return [disabled || false, disabled || false];
  }, [disabled]); // ============================= Value =============================

  var _useMergedState3 = useControlledState(null, {
    value: value,
    defaultValue: defaultValue,
    postState: function postState(values) {
      return picker === 'time' && !order ? values : reorderValues(values, generateConfig);
    }
  }),
      _useMergedState4 = _slicedToArray(_useMergedState3, 2),
      mergedValue = _useMergedState4[0],
      setInnerValue = _useMergedState4[1]; // =========================== View Date ===========================
  // Config view panel


  var _useRangeViewDates = useRangeViewDates({
    values: mergedValue,
    picker: picker,
    defaultDates: defaultPickerValue,
    generateConfig: generateConfig
  }),
      _useRangeViewDates2 = _slicedToArray(_useRangeViewDates, 2),
      getViewDate = _useRangeViewDates2[0],
      setViewDate = _useRangeViewDates2[1]; // ========================= Select Values =========================


  var _useMergedState5 = useControlledState(mergedValue, {
    postState: function postState(values) {
      var postValues = values;

      if (mergedDisabled[0] && mergedDisabled[1]) {
        return postValues;
      } // Fill disabled unit


      for (var i = 0; i < 2; i += 1) {
        if (mergedDisabled[i] && !getValue(postValues, i) && !getValue(allowEmpty, i)) {
          postValues = updateValues(postValues, generateConfig.getNow(), i);
        }
      }

      return postValues;
    }
  }),
      _useMergedState6 = _slicedToArray(_useMergedState5, 2),
      selectedValue = _useMergedState6[0],
      setSelectedValue = _useMergedState6[1]; // ============================= Modes =============================


  var _useMergedState7 = useControlledState([picker, picker], {
    value: mode
  }),
      _useMergedState8 = _slicedToArray(_useMergedState7, 2),
      mergedModes = _useMergedState8[0],
      setInnerModes = _useMergedState8[1];

  react.useEffect(function () {
    setInnerModes([picker, picker]);
  }, [picker]);

  var triggerModesChange = function triggerModesChange(modes, values) {
    setInnerModes(modes);

    if (onPanelChange) {
      onPanelChange(values, modes);
    }
  }; // ========================= Disable Date ==========================


  var _useRangeDisabled = useRangeDisabled({
    picker: picker,
    selectedValue: selectedValue,
    locale: locale,
    disabled: mergedDisabled,
    disabledDate: disabledDate,
    generateConfig: generateConfig
  }, openRecordsRef.current[1], openRecordsRef.current[0]),
      _useRangeDisabled2 = _slicedToArray(_useRangeDisabled, 2),
      disabledStartDate = _useRangeDisabled2[0],
      disabledEndDate = _useRangeDisabled2[1]; // ============================= Open ==============================


  var _useMergedState9 = useControlledState(false, {
    value: open,
    defaultValue: defaultOpen,
    postState: function postState(postOpen) {
      return mergedDisabled[mergedActivePickerIndex] ? false : postOpen;
    },
    onChange: function onChange(newOpen) {
      if (onOpenChange) {
        onOpenChange(newOpen);
      }

      if (!newOpen && operationRef.current && operationRef.current.onClose) {
        operationRef.current.onClose();
      }
    }
  }),
      _useMergedState10 = _slicedToArray(_useMergedState9, 2),
      mergedOpen = _useMergedState10[0],
      triggerInnerOpen = _useMergedState10[1];

  var startOpen = mergedOpen && mergedActivePickerIndex === 0;
  var endOpen = mergedOpen && mergedActivePickerIndex === 1; // ============================= Popup =============================
  // Popup min width

  var _useState = react.useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      popupMinWidth = _useState2[0],
      setPopupMinWidth = _useState2[1];

  react.useEffect(function () {
    if (!mergedOpen && containerRef.current) {
      setPopupMinWidth(containerRef.current.offsetWidth);
    }
  }, [mergedOpen]); // ============================ Trigger ============================

  var triggerRef = react.useRef();

  function _triggerOpen(newOpen, index) {
    if (newOpen) {
      clearTimeout(triggerRef.current);
      openRecordsRef.current[index] = true;
      setMergedActivePickerIndex(index);
      triggerInnerOpen(newOpen); // Open to reset view date

      if (!mergedOpen) {
        setViewDate(null, index);
      }
    } else if (mergedActivePickerIndex === index) {
      triggerInnerOpen(newOpen); // Clean up async
      // This makes ref not quick refresh in case user open another input with blur trigger

      var openRecords = openRecordsRef.current;
      triggerRef.current = setTimeout(function () {
        if (openRecords === openRecordsRef.current) {
          openRecordsRef.current = {};
        }
      });
    }
  }

  function triggerOpenAndFocus(index) {
    _triggerOpen(true, index); // Use setTimeout to make sure panel DOM exists


    setTimeout(function () {
      var inputRef = [startInputRef, endInputRef][index];

      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
  }

  function triggerChange(newValue, sourceIndex) {
    var values = newValue;
    var startValue = getValue(values, 0);
    var endValue = getValue(values, 1); // >>>>> Format start & end values

    if (startValue && endValue && generateConfig.isAfter(startValue, endValue)) {
      if ( // WeekPicker only compare week
      picker === 'week' && !isSameWeek(generateConfig, locale.locale, startValue, endValue) || // QuotaPicker only compare week
      picker === 'quarter' && !isSameQuarter(generateConfig, startValue, endValue) || // Other non-TimePicker compare date
      picker !== 'week' && picker !== 'quarter' && picker !== 'time' && !isSameDate(generateConfig, startValue, endValue)) {
        // Clean up end date when start date is after end date
        if (sourceIndex === 0) {
          values = [startValue, null];
          endValue = null;
        } else {
          startValue = null;
          values = [null, endValue];
        } // Clean up cache since invalidate


        openRecordsRef.current = _defineProperty$1({}, sourceIndex, true);
      } else if (picker !== 'time' || order !== false) {
        // Reorder when in same date
        values = reorderValues(values, generateConfig);
      }
    }

    setSelectedValue(values);
    var startStr = values && values[0] ? formatValue(values[0], {
      generateConfig: generateConfig,
      locale: locale,
      format: formatList[0]
    }) : '';
    var endStr = values && values[1] ? formatValue(values[1], {
      generateConfig: generateConfig,
      locale: locale,
      format: formatList[0]
    }) : '';

    if (onCalendarChange) {
      var info = {
        range: sourceIndex === 0 ? 'start' : 'end'
      };
      onCalendarChange(values, [startStr, endStr], info);
    } // >>>>> Trigger `onChange` event


    var canStartValueTrigger = canValueTrigger(startValue, 0, mergedDisabled, allowEmpty);
    var canEndValueTrigger = canValueTrigger(endValue, 1, mergedDisabled, allowEmpty);
    var canTrigger = values === null || canStartValueTrigger && canEndValueTrigger;

    if (canTrigger) {
      // Trigger onChange only when value is validate
      setInnerValue(values);

      if (onChange && (!isEqual(generateConfig, getValue(mergedValue, 0), startValue) || !isEqual(generateConfig, getValue(mergedValue, 1), endValue))) {
        onChange(values, [startStr, endStr]);
      }
    } // >>>>> Open picker when
    // Always open another picker if possible


    var nextOpenIndex = null;

    if (sourceIndex === 0 && !mergedDisabled[1]) {
      nextOpenIndex = 1;
    } else if (sourceIndex === 1 && !mergedDisabled[0]) {
      nextOpenIndex = 0;
    }

    if (nextOpenIndex !== null && nextOpenIndex !== mergedActivePickerIndex && (!openRecordsRef.current[nextOpenIndex] || !getValue(values, nextOpenIndex)) && getValue(values, sourceIndex)) {
      // Delay to focus to avoid input blur trigger expired selectedValues
      triggerOpenAndFocus(nextOpenIndex);
    } else {
      _triggerOpen(false, sourceIndex);
    }
  }

  var forwardKeyDown = function forwardKeyDown(e) {
    if (mergedOpen && operationRef.current && operationRef.current.onKeyDown) {
      // Let popup panel handle keyboard
      return operationRef.current.onKeyDown(e);
    }
    /* istanbul ignore next */

    /* eslint-disable no-lone-blocks */


    {
      warningOnce(false, 'Picker not correct forward KeyDown operation. Please help to fire issue about this.');
      return false;
    }
  }; // ============================= Text ==============================


  var sharedTextHooksProps = {
    formatList: formatList,
    generateConfig: generateConfig,
    locale: locale
  };

  var _useValueTexts = useValueTexts(getValue(selectedValue, 0), sharedTextHooksProps),
      _useValueTexts2 = _slicedToArray(_useValueTexts, 2),
      startValueTexts = _useValueTexts2[0],
      firstStartValueText = _useValueTexts2[1];

  var _useValueTexts3 = useValueTexts(getValue(selectedValue, 1), sharedTextHooksProps),
      _useValueTexts4 = _slicedToArray(_useValueTexts3, 2),
      endValueTexts = _useValueTexts4[0],
      firstEndValueText = _useValueTexts4[1];

  var _onTextChange = function onTextChange(newText, index) {
    var inputDate = parseValue(newText, {
      locale: locale,
      formatList: formatList,
      generateConfig: generateConfig
    });
    var disabledFunc = index === 0 ? disabledStartDate : disabledEndDate;

    if (inputDate && !disabledFunc(inputDate)) {
      setSelectedValue(updateValues(selectedValue, inputDate, index));
      setViewDate(inputDate, index);
    }
  };

  var _useTextValueMapping = useTextValueMapping({
    valueTexts: startValueTexts,
    onTextChange: function onTextChange(newText) {
      return _onTextChange(newText, 0);
    }
  }),
      _useTextValueMapping2 = _slicedToArray(_useTextValueMapping, 3),
      startText = _useTextValueMapping2[0],
      triggerStartTextChange = _useTextValueMapping2[1],
      resetStartText = _useTextValueMapping2[2];

  var _useTextValueMapping3 = useTextValueMapping({
    valueTexts: endValueTexts,
    onTextChange: function onTextChange(newText) {
      return _onTextChange(newText, 1);
    }
  }),
      _useTextValueMapping4 = _slicedToArray(_useTextValueMapping3, 3),
      endText = _useTextValueMapping4[0],
      triggerEndTextChange = _useTextValueMapping4[1],
      resetEndText = _useTextValueMapping4[2];

  var _useState3 = react.useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      rangeHoverValue = _useState4[0],
      setRangeHoverValue = _useState4[1]; // ========================== Hover Range ==========================


  var _useState5 = react.useState(null),
      _useState6 = _slicedToArray(_useState5, 2),
      hoverRangedValue = _useState6[0],
      setHoverRangedValue = _useState6[1];

  var _useHoverValue = useHoverValue(startText, {
    formatList: formatList,
    generateConfig: generateConfig,
    locale: locale
  }),
      _useHoverValue2 = _slicedToArray(_useHoverValue, 3),
      startHoverValue = _useHoverValue2[0],
      onStartEnter = _useHoverValue2[1],
      onStartLeave = _useHoverValue2[2];

  var _useHoverValue3 = useHoverValue(endText, {
    formatList: formatList,
    generateConfig: generateConfig,
    locale: locale
  }),
      _useHoverValue4 = _slicedToArray(_useHoverValue3, 3),
      endHoverValue = _useHoverValue4[0],
      onEndEnter = _useHoverValue4[1],
      onEndLeave = _useHoverValue4[2];

  var onDateMouseEnter = function onDateMouseEnter(date) {
    setHoverRangedValue(updateValues(selectedValue, date, mergedActivePickerIndex));

    if (mergedActivePickerIndex === 0) {
      onStartEnter(date);
    } else {
      onEndEnter(date);
    }
  };

  var onDateMouseLeave = function onDateMouseLeave() {
    setHoverRangedValue(updateValues(selectedValue, null, mergedActivePickerIndex));

    if (mergedActivePickerIndex === 0) {
      onStartLeave();
    } else {
      onEndLeave();
    }
  }; // ============================= Input =============================


  var getSharedInputHookProps = function getSharedInputHookProps(index, resetText) {
    return {
      blurToCancel: needConfirmButton,
      forwardKeyDown: forwardKeyDown,
      onBlur: onBlur,
      isClickOutside: function isClickOutside(target) {
        return !elementsContains([panelDivRef.current, startInputDivRef.current, endInputDivRef.current], target);
      },
      onFocus: function onFocus(e) {
        setMergedActivePickerIndex(index);

        if (_onFocus) {
          _onFocus(e);
        }
      },
      triggerOpen: function triggerOpen(newOpen) {
        _triggerOpen(newOpen, index);
      },
      onSubmit: function onSubmit() {
        triggerChange(selectedValue, index);
        resetText();
      },
      onCancel: function onCancel() {
        _triggerOpen(false, index);

        setSelectedValue(mergedValue);
        resetText();
      }
    };
  };

  var _usePickerInput = usePickerInput(_objectSpread2$1(_objectSpread2$1({}, getSharedInputHookProps(0, resetStartText)), {}, {
    open: startOpen,
    value: startText,
    onKeyDown: function onKeyDown(e, preventDefault) {
      _onKeyDown === null || _onKeyDown === void 0 ? void 0 : _onKeyDown(e, preventDefault);
    }
  })),
      _usePickerInput2 = _slicedToArray(_usePickerInput, 2),
      startInputProps = _usePickerInput2[0],
      _usePickerInput2$ = _usePickerInput2[1],
      startFocused = _usePickerInput2$.focused,
      startTyping = _usePickerInput2$.typing;

  var _usePickerInput3 = usePickerInput(_objectSpread2$1(_objectSpread2$1({}, getSharedInputHookProps(1, resetEndText)), {}, {
    open: endOpen,
    value: endText,
    onKeyDown: function onKeyDown(e, preventDefault) {
      _onKeyDown === null || _onKeyDown === void 0 ? void 0 : _onKeyDown(e, preventDefault);
    }
  })),
      _usePickerInput4 = _slicedToArray(_usePickerInput3, 2),
      endInputProps = _usePickerInput4[0],
      _usePickerInput4$ = _usePickerInput4[1],
      endFocused = _usePickerInput4$.focused,
      endTyping = _usePickerInput4$.typing; // ========================== Click Picker ==========================


  var onPickerClick = function onPickerClick(e) {
    // When click inside the picker & outside the picker's input elements
    // the panel should still be opened
    if (!mergedOpen && !startInputRef.current.contains(e.target) && !endInputRef.current.contains(e.target)) {
      if (!mergedDisabled[0]) {
        triggerOpenAndFocus(0);
      } else if (!mergedDisabled[1]) {
        triggerOpenAndFocus(1);
      }
    }
  };

  var onPickerMouseDown = function onPickerMouseDown(e) {
    // shouldn't affect input elements if picker is active
    if (mergedOpen && (startFocused || endFocused) && !startInputRef.current.contains(e.target) && !endInputRef.current.contains(e.target)) {
      e.preventDefault();
    }
  }; // ============================= Sync ==============================
  // Close should sync back with text value


  var startStr = mergedValue && mergedValue[0] ? formatValue(mergedValue[0], {
    locale: locale,
    format: 'YYYYMMDDHHmmss',
    generateConfig: generateConfig
  }) : '';
  var endStr = mergedValue && mergedValue[1] ? formatValue(mergedValue[1], {
    locale: locale,
    format: 'YYYYMMDDHHmmss',
    generateConfig: generateConfig
  }) : '';
  react.useEffect(function () {
    if (!mergedOpen) {
      setSelectedValue(mergedValue);

      if (!startValueTexts.length || startValueTexts[0] === '') {
        triggerStartTextChange('');
      } else if (firstStartValueText !== startText) {
        resetStartText();
      }

      if (!endValueTexts.length || endValueTexts[0] === '') {
        triggerEndTextChange('');
      } else if (firstEndValueText !== endText) {
        resetEndText();
      }
    }
  }, [mergedOpen, startValueTexts, endValueTexts]); // Sync innerValue with control mode

  react.useEffect(function () {
    setSelectedValue(mergedValue);
  }, [startStr, endStr]); // ============================ Warning ============================


  if (pickerRef) {
    pickerRef.current = {
      focus: function focus() {
        if (startInputRef.current) {
          startInputRef.current.focus();
        }
      },
      blur: function blur() {
        if (startInputRef.current) {
          startInputRef.current.blur();
        }

        if (endInputRef.current) {
          endInputRef.current.blur();
        }
      }
    };
  } // ============================ Ranges =============================


  var rangeLabels = Object.keys(ranges || {});
  var rangeList = rangeLabels.map(function (label) {
    var range = ranges[label];
    var newValues = typeof range === 'function' ? range() : range;
    return {
      label: label,
      onClick: function onClick() {
        triggerChange(newValues, null);

        _triggerOpen(false, mergedActivePickerIndex);
      },
      onMouseEnter: function onMouseEnter() {
        setRangeHoverValue(newValues);
      },
      onMouseLeave: function onMouseLeave() {
        setRangeHoverValue(null);
      }
    };
  }); // ============================= Panel =============================

  function renderPanel() {
    var panelPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var panelProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var panelHoverRangedValue = null;

    if (mergedOpen && hoverRangedValue && hoverRangedValue[0] && hoverRangedValue[1] && generateConfig.isAfter(hoverRangedValue[1], hoverRangedValue[0])) {
      panelHoverRangedValue = hoverRangedValue;
    }

    var panelShowTime = showTime;

    if (showTime && _typeof$1(showTime) === 'object' && showTime.defaultValue) {
      var timeDefaultValues = showTime.defaultValue;
      panelShowTime = _objectSpread2$1(_objectSpread2$1({}, showTime), {}, {
        defaultValue: getValue(timeDefaultValues, mergedActivePickerIndex) || undefined
      });
    }

    var panelDateRender = null;

    if (dateRender) {
      panelDateRender = function panelDateRender(date, today) {
        return dateRender(date, today, {
          range: mergedActivePickerIndex ? 'end' : 'start'
        });
      };
    }

    return /*#__PURE__*/react.createElement(RangeContext.Provider, {
      value: {
        inRange: true,
        panelPosition: panelPosition,
        rangedValue: rangeHoverValue || selectedValue,
        hoverRangedValue: panelHoverRangedValue
      }
    }, /*#__PURE__*/react.createElement(PickerPanel, _extends$1({}, props, panelProps, {
      dateRender: panelDateRender,
      showTime: panelShowTime,
      mode: mergedModes[mergedActivePickerIndex],
      generateConfig: generateConfig,
      style: undefined,
      direction: direction,
      disabledDate: mergedActivePickerIndex === 0 ? disabledStartDate : disabledEndDate,
      disabledTime: function disabledTime(date) {
        if (_disabledTime) {
          return _disabledTime(date, mergedActivePickerIndex === 0 ? 'start' : 'end');
        }

        return false;
      },
      className: classnames(_defineProperty$1({}, "".concat(prefixCls, "-panel-focused"), mergedActivePickerIndex === 0 ? !startTyping : !endTyping)),
      value: getValue(selectedValue, mergedActivePickerIndex),
      locale: locale,
      tabIndex: -1,
      onPanelChange: function onPanelChange(date, newMode) {
        // clear hover value when panel change
        if (mergedActivePickerIndex === 0) {
          onStartLeave(true);
        }

        if (mergedActivePickerIndex === 1) {
          onEndLeave(true);
        }

        triggerModesChange(updateValues(mergedModes, newMode, mergedActivePickerIndex), updateValues(selectedValue, date, mergedActivePickerIndex));
        var viewDate = date;

        if (panelPosition === 'right' && mergedModes[mergedActivePickerIndex] === newMode) {
          viewDate = getClosingViewDate(viewDate, newMode, generateConfig, -1);
        }

        setViewDate(viewDate, mergedActivePickerIndex);
      },
      onOk: null,
      onSelect: undefined,
      onChange: undefined,
      defaultValue: mergedActivePickerIndex === 0 ? getValue(selectedValue, 1) : getValue(selectedValue, 0),
      defaultPickerValue: undefined
    })));
  }

  var arrowLeft = 0;
  var panelLeft = 0;

  if (mergedActivePickerIndex && startInputDivRef.current && separatorRef.current && panelDivRef.current) {
    // Arrow offset
    arrowLeft = startInputDivRef.current.offsetWidth + separatorRef.current.offsetWidth;

    if (panelDivRef.current.offsetWidth && arrowLeft > panelDivRef.current.offsetWidth) {
      panelLeft = arrowLeft;
    }
  }

  var arrowPositionStyle = direction === 'rtl' ? {
    right: arrowLeft
  } : {
    left: arrowLeft
  };

  function renderPanels() {
    var panels;
    var extraNode = getExtraFooter(prefixCls, mergedModes[mergedActivePickerIndex], renderExtraFooter);
    var rangesNode = getRanges({
      prefixCls: prefixCls,
      components: components,
      needConfirmButton: needConfirmButton,
      okDisabled: !getValue(selectedValue, mergedActivePickerIndex) || disabledDate && disabledDate(selectedValue[mergedActivePickerIndex]),
      locale: locale,
      rangeList: rangeList,
      onOk: function onOk() {
        if (getValue(selectedValue, mergedActivePickerIndex)) {
          // triggerChangeOld(selectedValue);
          triggerChange(selectedValue, mergedActivePickerIndex);

          if (_onOk) {
            _onOk(selectedValue);
          }
        }
      }
    });

    if (picker !== 'time' && !showTime) {
      var viewDate = getViewDate(mergedActivePickerIndex);
      var nextViewDate = getClosingViewDate(viewDate, picker, generateConfig);
      var currentMode = mergedModes[mergedActivePickerIndex];
      var showDoublePanel = currentMode === picker;
      var leftPanel = renderPanel(showDoublePanel ? 'left' : false, {
        pickerValue: viewDate,
        onPickerValueChange: function onPickerValueChange(newViewDate) {
          setViewDate(newViewDate, mergedActivePickerIndex);
        }
      });
      var rightPanel = renderPanel('right', {
        pickerValue: nextViewDate,
        onPickerValueChange: function onPickerValueChange(newViewDate) {
          setViewDate(getClosingViewDate(newViewDate, picker, generateConfig, -1), mergedActivePickerIndex);
        }
      });

      if (direction === 'rtl') {
        panels = /*#__PURE__*/react.createElement(react.Fragment, null, rightPanel, showDoublePanel && leftPanel);
      } else {
        panels = /*#__PURE__*/react.createElement(react.Fragment, null, leftPanel, showDoublePanel && rightPanel);
      }
    } else {
      panels = renderPanel();
    }

    var mergedNodes = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-panels")
    }, panels), (extraNode || rangesNode) && /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-footer")
    }, extraNode, rangesNode));

    if (panelRender) {
      mergedNodes = panelRender(mergedNodes);
    }

    return /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-panel-container"),
      style: {
        marginLeft: panelLeft
      },
      ref: panelDivRef,
      onMouseDown: function onMouseDown(e) {
        e.preventDefault();
      }
    }, mergedNodes);
  }

  var rangePanel = /*#__PURE__*/react.createElement("div", {
    className: classnames("".concat(prefixCls, "-range-wrapper"), "".concat(prefixCls, "-").concat(picker, "-range-wrapper")),
    style: {
      minWidth: popupMinWidth
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-range-arrow"),
    style: arrowPositionStyle
  }), renderPanels()); // ============================= Icons =============================

  var suffixNode;

  if (suffixIcon) {
    suffixNode = /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-suffix")
    }, suffixIcon);
  }

  var clearNode;

  if (allowClear && (getValue(mergedValue, 0) && !mergedDisabled[0] || getValue(mergedValue, 1) && !mergedDisabled[1])) {
    clearNode = /*#__PURE__*/react.createElement("span", {
      onMouseDown: function onMouseDown(e) {
        e.preventDefault();
        e.stopPropagation();
      },
      onMouseUp: function onMouseUp(e) {
        e.preventDefault();
        e.stopPropagation();
        var values = mergedValue;

        if (!mergedDisabled[0]) {
          values = updateValues(values, null, 0);
        }

        if (!mergedDisabled[1]) {
          values = updateValues(values, null, 1);
        }

        triggerChange(values, null);

        _triggerOpen(false, mergedActivePickerIndex);
      },
      className: "".concat(prefixCls, "-clear")
    }, clearIcon || /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-clear-btn")
    }));
  }

  var inputSharedProps = {
    size: getInputSize(picker, formatList[0], generateConfig)
  };
  var activeBarLeft = 0;
  var activeBarWidth = 0;

  if (startInputDivRef.current && endInputDivRef.current && separatorRef.current) {
    if (mergedActivePickerIndex === 0) {
      activeBarWidth = startInputDivRef.current.offsetWidth;
    } else {
      activeBarLeft = arrowLeft;
      activeBarWidth = endInputDivRef.current.offsetWidth;
    }
  }

  var activeBarPositionStyle = direction === 'rtl' ? {
    right: activeBarLeft
  } : {
    left: activeBarLeft
  }; // ============================ Return =============================

  var onContextSelect = function onContextSelect(date, type) {
    var values = updateValues(selectedValue, date, mergedActivePickerIndex);

    if (type === 'submit' || type !== 'key' && !needConfirmButton) {
      // triggerChange will also update selected values
      triggerChange(values, mergedActivePickerIndex); // clear hover value style

      if (mergedActivePickerIndex === 0) {
        onStartLeave();
      } else {
        onEndLeave();
      }
    } else {
      setSelectedValue(values);
    }
  };

  return /*#__PURE__*/react.createElement(PanelContext.Provider, {
    value: {
      operationRef: operationRef,
      hideHeader: picker === 'time',
      onDateMouseEnter: onDateMouseEnter,
      onDateMouseLeave: onDateMouseLeave,
      hideRanges: true,
      onSelect: onContextSelect,
      open: mergedOpen
    }
  }, /*#__PURE__*/react.createElement(PickerTrigger, {
    visible: mergedOpen,
    popupElement: rangePanel,
    popupStyle: popupStyle,
    prefixCls: prefixCls,
    dropdownClassName: dropdownClassName,
    dropdownAlign: dropdownAlign,
    getPopupContainer: getPopupContainer,
    transitionName: transitionName,
    range: true,
    direction: direction
  }, /*#__PURE__*/react.createElement("div", _extends$1({
    ref: containerRef,
    className: classnames(prefixCls, "".concat(prefixCls, "-range"), className, (_classNames2 = {}, _defineProperty$1(_classNames2, "".concat(prefixCls, "-disabled"), mergedDisabled[0] && mergedDisabled[1]), _defineProperty$1(_classNames2, "".concat(prefixCls, "-focused"), mergedActivePickerIndex === 0 ? startFocused : endFocused), _defineProperty$1(_classNames2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames2)),
    style: style,
    onClick: onPickerClick,
    onMouseDown: onPickerMouseDown
  }, getDataOrAriaProps(props)), /*#__PURE__*/react.createElement("div", {
    className: classnames("".concat(prefixCls, "-input"), (_classNames3 = {}, _defineProperty$1(_classNames3, "".concat(prefixCls, "-input-active"), mergedActivePickerIndex === 0), _defineProperty$1(_classNames3, "".concat(prefixCls, "-input-placeholder"), !!startHoverValue), _classNames3)),
    ref: startInputDivRef
  }, /*#__PURE__*/react.createElement("input", _extends$1({
    id: id,
    disabled: mergedDisabled[0],
    readOnly: inputReadOnly || typeof formatList[0] === 'function' || !startTyping,
    value: startHoverValue || startText,
    onChange: function onChange(e) {
      triggerStartTextChange(e.target.value);
    },
    autoFocus: autoFocus,
    placeholder: getValue(placeholder, 0) || '',
    ref: startInputRef
  }, startInputProps, inputSharedProps, {
    autoComplete: autoComplete
  }))), /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-range-separator"),
    ref: separatorRef
  }, separator), /*#__PURE__*/react.createElement("div", {
    className: classnames("".concat(prefixCls, "-input"), (_classNames4 = {}, _defineProperty$1(_classNames4, "".concat(prefixCls, "-input-active"), mergedActivePickerIndex === 1), _defineProperty$1(_classNames4, "".concat(prefixCls, "-input-placeholder"), !!endHoverValue), _classNames4)),
    ref: endInputDivRef
  }, /*#__PURE__*/react.createElement("input", _extends$1({
    disabled: mergedDisabled[1],
    readOnly: inputReadOnly || typeof formatList[0] === 'function' || !endTyping,
    value: endHoverValue || endText,
    onChange: function onChange(e) {
      triggerEndTextChange(e.target.value);
    },
    placeholder: getValue(placeholder, 1) || '',
    ref: endInputRef
  }, endInputProps, inputSharedProps, {
    autoComplete: autoComplete
  }))), /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-active-bar"),
    style: _objectSpread2$1(_objectSpread2$1({}, activeBarPositionStyle), {}, {
      width: activeBarWidth,
      position: 'absolute'
    })
  }), suffixNode, clearNode)));
} // Wrap with class component to enable pass generic with instance method


var RangePicker = /*#__PURE__*/function (_React$Component) {
  _inherits(RangePicker, _React$Component);

  var _super = _createSuper(RangePicker);

  function RangePicker() {
    var _this;

    _classCallCheck(this, RangePicker);

    _this = _super.apply(this, arguments);
    _this.pickerRef = /*#__PURE__*/react.createRef();

    _this.focus = function () {
      if (_this.pickerRef.current) {
        _this.pickerRef.current.focus();
      }
    };

    _this.blur = function () {
      if (_this.pickerRef.current) {
        _this.pickerRef.current.blur();
      }
    };

    return _this;
  }

  _createClass(RangePicker, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement(InnerRangePicker, _extends$1({}, this.props, {
        pickerRef: this.pickerRef
      }));
    }
  }]);

  return RangePicker;
}(react.Component);

function PickerButton(props) {
  return /*#__PURE__*/react.createElement(Button, _extends$1({
    size: "small",
    type: "primary"
  }, props));
}

var __rest$3 = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var CheckableTag = function CheckableTag(_a) {
  var _classNames;

  var customizePrefixCls = _a.prefixCls,
      className = _a.className,
      checked = _a.checked,
      onChange = _a.onChange,
      onClick = _a.onClick,
      restProps = __rest$3(_a, ["prefixCls", "className", "checked", "onChange", "onClick"]);

  var _React$useContext = react.useContext(ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;

  var handleClick = function handleClick(e) {
    onChange === null || onChange === void 0 ? void 0 : onChange(!checked);
    onClick === null || onClick === void 0 ? void 0 : onClick(e);
  };

  var prefixCls = getPrefixCls('tag', customizePrefixCls);
  var cls = classnames(prefixCls, (_classNames = {}, _defineProperty$1(_classNames, "".concat(prefixCls, "-checkable"), true), _defineProperty$1(_classNames, "".concat(prefixCls, "-checkable-checked"), checked), _classNames), className);
  return /*#__PURE__*/react.createElement("span", _extends$1({}, restProps, {
    className: cls,
    onClick: handleClick
  }));
};

var __rest$2 = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var PresetColorRegex = new RegExp("^(".concat(PresetColorTypes.join('|'), ")(-inverse)?$"));
var PresetStatusColorRegex = new RegExp("^(".concat(PresetStatusColorTypes.join('|'), ")$"));

var InternalTag = function InternalTag(_a, ref) {
  var _classNames;

  var customizePrefixCls = _a.prefixCls,
      className = _a.className,
      style = _a.style,
      children = _a.children,
      icon = _a.icon,
      color = _a.color,
      onClose = _a.onClose,
      closeIcon = _a.closeIcon,
      _a$closable = _a.closable,
      closable = _a$closable === void 0 ? false : _a$closable,
      props = __rest$2(_a, ["prefixCls", "className", "style", "children", "icon", "color", "onClose", "closeIcon", "closable"]);

  var _React$useContext = react.useContext(ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var _React$useState = react.useState(true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      visible = _React$useState2[0],
      setVisible = _React$useState2[1];

  react.useEffect(function () {
    if ('visible' in props) {
      setVisible(props.visible);
    }
  }, [props.visible]);

  var isPresetColor = function isPresetColor() {
    if (!color) {
      return false;
    }

    return PresetColorRegex.test(color) || PresetStatusColorRegex.test(color);
  };

  var tagStyle = _extends$1({
    backgroundColor: color && !isPresetColor() ? color : undefined
  }, style);

  var presetColor = isPresetColor();
  var prefixCls = getPrefixCls('tag', customizePrefixCls);
  var tagClassName = classnames(prefixCls, (_classNames = {}, _defineProperty$1(_classNames, "".concat(prefixCls, "-").concat(color), presetColor), _defineProperty$1(_classNames, "".concat(prefixCls, "-has-color"), color && !presetColor), _defineProperty$1(_classNames, "".concat(prefixCls, "-hidden"), !visible), _defineProperty$1(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);

  var handleCloseClick = function handleCloseClick(e) {
    e.stopPropagation();
    onClose === null || onClose === void 0 ? void 0 : onClose(e);

    if (e.defaultPrevented) {
      return;
    }

    if (!('visible' in props)) {
      setVisible(false);
    }
  };

  var renderCloseIcon = function renderCloseIcon() {
    if (closable) {
      return closeIcon ? /*#__PURE__*/react.createElement("span", {
        className: "".concat(prefixCls, "-close-icon"),
        onClick: handleCloseClick
      }, closeIcon) : /*#__PURE__*/react.createElement(CloseOutlined$1, {
        className: "".concat(prefixCls, "-close-icon"),
        onClick: handleCloseClick
      });
    }

    return null;
  };

  var isNeedWave = 'onClick' in props || children && children.type === 'a';
  var tagProps = omit(props, ['visible']);
  var iconNode = icon || null;
  var kids = iconNode ? /*#__PURE__*/react.createElement(react.Fragment, null, iconNode, /*#__PURE__*/react.createElement("span", null, children)) : children;
  var tagNode = /*#__PURE__*/react.createElement("span", _extends$1({}, tagProps, {
    ref: ref,
    className: tagClassName,
    style: tagStyle
  }), kids, renderCloseIcon());
  return isNeedWave ? /*#__PURE__*/react.createElement(Wave, null, tagNode) : tagNode;
};

var Tag = /*#__PURE__*/react.forwardRef(InternalTag);
Tag.displayName = 'Tag';
Tag.CheckableTag = CheckableTag;

function PickerTag(props) {
  return /*#__PURE__*/react.createElement(Tag, _extends$1({
    color: "blue"
  }, props));
}

// This icon file is generated automatically.
var CalendarOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z" } }] }, "name": "calendar", "theme": "outlined" };

// GENERATE BY ./scripts/generate.ts

var CalendarOutlined = function CalendarOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(Icon, Object.assign({}, props, {
    ref: ref,
    icon: CalendarOutlined$2
  }));
};

CalendarOutlined.displayName = 'CalendarOutlined';
var CalendarOutlined$1 = /*#__PURE__*/react.forwardRef(CalendarOutlined);

// This icon file is generated automatically.
var ClockCircleOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { "tag": "path", "attrs": { "d": "M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z" } }] }, "name": "clock-circle", "theme": "outlined" };

// GENERATE BY ./scripts/generate.ts

var ClockCircleOutlined = function ClockCircleOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(Icon, Object.assign({}, props, {
    ref: ref,
    icon: ClockCircleOutlined$2
  }));
};

ClockCircleOutlined.displayName = 'ClockCircleOutlined';
var ClockCircleOutlined$1 = /*#__PURE__*/react.forwardRef(ClockCircleOutlined);

function getPlaceholder(picker, locale, customizePlaceholder) {
  if (customizePlaceholder !== undefined) {
    return customizePlaceholder;
  }

  if (picker === 'year' && locale.lang.yearPlaceholder) {
    return locale.lang.yearPlaceholder;
  }

  if (picker === 'quarter' && locale.lang.quarterPlaceholder) {
    return locale.lang.quarterPlaceholder;
  }

  if (picker === 'month' && locale.lang.monthPlaceholder) {
    return locale.lang.monthPlaceholder;
  }

  if (picker === 'week' && locale.lang.weekPlaceholder) {
    return locale.lang.weekPlaceholder;
  }

  if (picker === 'time' && locale.timePickerLocale.placeholder) {
    return locale.timePickerLocale.placeholder;
  }

  return locale.lang.placeholder;
}
function getRangePlaceholder(picker, locale, customizePlaceholder) {
  if (customizePlaceholder !== undefined) {
    return customizePlaceholder;
  }

  if (picker === 'year' && locale.lang.yearPlaceholder) {
    return locale.lang.rangeYearPlaceholder;
  }

  if (picker === 'month' && locale.lang.monthPlaceholder) {
    return locale.lang.rangeMonthPlaceholder;
  }

  if (picker === 'week' && locale.lang.weekPlaceholder) {
    return locale.lang.rangeWeekPlaceholder;
  }

  if (picker === 'time' && locale.timePickerLocale.placeholder) {
    return locale.timePickerLocale.rangePlaceholder;
  }

  return locale.lang.rangePlaceholder;
}

var __rest$1 = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function generatePicker$1(generateConfig) {
  function getPicker(picker, displayName) {
    var Picker$1 = /*#__PURE__*/function (_React$Component) {
      _inherits(Picker$1, _React$Component);

      var _super = _createSuper(Picker$1);

      function Picker$1(props) {
        var _this;

        _classCallCheck(this, Picker$1);

        _this = _super.call(this, props);
        _this.pickerRef = /*#__PURE__*/react.createRef();

        _this.focus = function () {
          if (_this.pickerRef.current) {
            _this.pickerRef.current.focus();
          }
        };

        _this.blur = function () {
          if (_this.pickerRef.current) {
            _this.pickerRef.current.blur();
          }
        };

        _this.getDefaultLocale = function () {
          var locale$1 = _this.props.locale;

          var result = _extends$1(_extends$1({}, locale), locale$1);

          result.lang = _extends$1(_extends$1({}, result.lang), (locale$1 || {}).lang);
          return result;
        };

        _this.renderPicker = function (locale) {
          var _this$context = _this.context,
              getPrefixCls = _this$context.getPrefixCls,
              direction = _this$context.direction,
              getPopupContainer = _this$context.getPopupContainer;

          var _a = _this.props,
              customizePrefixCls = _a.prefixCls,
              customizeGetPopupContainer = _a.getPopupContainer,
              className = _a.className,
              customizeSize = _a.size,
              _a$bordered = _a.bordered,
              bordered = _a$bordered === void 0 ? true : _a$bordered,
              placeholder = _a.placeholder,
              restProps = __rest$1(_a, ["prefixCls", "getPopupContainer", "className", "size", "bordered", "placeholder"]);

          var _this$props = _this.props,
              format = _this$props.format,
              showTime = _this$props.showTime;
          var prefixCls = getPrefixCls('picker', customizePrefixCls);
          var additionalProps = {
            showToday: true
          };
          var additionalOverrideProps = {};

          if (picker) {
            additionalOverrideProps.picker = picker;
          }

          var mergedPicker = picker || _this.props.picker;
          additionalOverrideProps = _extends$1(_extends$1(_extends$1({}, additionalOverrideProps), showTime ? getTimeProps(_extends$1({
            format: format,
            picker: mergedPicker
          }, showTime)) : {}), mergedPicker === 'time' ? getTimeProps(_extends$1(_extends$1({
            format: format
          }, _this.props), {
            picker: mergedPicker
          })) : {});
          var rootPrefixCls = getPrefixCls();
          return /*#__PURE__*/react.createElement(SizeContext.Consumer, null, function (size) {
            var _classNames;

            var mergedSize = customizeSize || size;
            return /*#__PURE__*/react.createElement(Picker, _extends$1({
              ref: _this.pickerRef,
              placeholder: getPlaceholder(mergedPicker, locale, placeholder),
              suffixIcon: mergedPicker === 'time' ? /*#__PURE__*/react.createElement(ClockCircleOutlined$1, null) : /*#__PURE__*/react.createElement(CalendarOutlined$1, null),
              clearIcon: /*#__PURE__*/react.createElement(CloseCircleFilled$1, null),
              allowClear: true,
              transitionName: "".concat(rootPrefixCls, "-slide-up")
            }, additionalProps, restProps, additionalOverrideProps, {
              locale: locale.lang,
              className: classnames((_classNames = {}, _defineProperty$1(_classNames, "".concat(prefixCls, "-").concat(mergedSize), mergedSize), _defineProperty$1(_classNames, "".concat(prefixCls, "-borderless"), !bordered), _classNames), className),
              prefixCls: prefixCls,
              getPopupContainer: customizeGetPopupContainer || getPopupContainer,
              generateConfig: generateConfig,
              prevIcon: /*#__PURE__*/react.createElement("span", {
                className: "".concat(prefixCls, "-prev-icon")
              }),
              nextIcon: /*#__PURE__*/react.createElement("span", {
                className: "".concat(prefixCls, "-next-icon")
              }),
              superPrevIcon: /*#__PURE__*/react.createElement("span", {
                className: "".concat(prefixCls, "-super-prev-icon")
              }),
              superNextIcon: /*#__PURE__*/react.createElement("span", {
                className: "".concat(prefixCls, "-super-next-icon")
              }),
              components: Components,
              direction: direction
            }));
          });
        };

        devWarning(picker !== 'quarter', displayName, "DatePicker.".concat(displayName, " is legacy usage. Please use DatePicker[picker='").concat(picker, "'] directly."));
        return _this;
      }

      _createClass(Picker$1, [{
        key: "render",
        value: function render() {
          return /*#__PURE__*/react.createElement(LocaleReceiver, {
            componentName: "DatePicker",
            defaultLocale: this.getDefaultLocale
          }, this.renderPicker);
        }
      }]);

      return Picker$1;
    }(react.Component);

    Picker$1.contextType = ConfigContext;

    if (displayName) {
      Picker$1.displayName = displayName;
    }

    return Picker$1;
  }

  var DatePicker = getPicker();
  var WeekPicker = getPicker('week', 'WeekPicker');
  var MonthPicker = getPicker('month', 'MonthPicker');
  var YearPicker = getPicker('year', 'YearPicker');
  var TimePicker = getPicker('time', 'TimePicker');
  var QuarterPicker = getPicker('quarter', 'QuarterPicker');
  return {
    DatePicker: DatePicker,
    WeekPicker: WeekPicker,
    MonthPicker: MonthPicker,
    YearPicker: YearPicker,
    TimePicker: TimePicker,
    QuarterPicker: QuarterPicker
  };
}

// This icon file is generated automatically.
var SwapRightOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z" } }] }, "name": "swap-right", "theme": "outlined" };

// GENERATE BY ./scripts/generate.ts

var SwapRightOutlined = function SwapRightOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(Icon, Object.assign({}, props, {
    ref: ref,
    icon: SwapRightOutlined$2
  }));
};

SwapRightOutlined.displayName = 'SwapRightOutlined';
var SwapRightOutlined$1 = /*#__PURE__*/react.forwardRef(SwapRightOutlined);

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function generateRangePicker(generateConfig) {
  var RangePicker$1 = /*#__PURE__*/function (_React$Component) {
    _inherits(RangePicker$1, _React$Component);

    var _super = _createSuper(RangePicker$1);

    function RangePicker$1() {
      var _this;

      _classCallCheck(this, RangePicker$1);

      _this = _super.apply(this, arguments);
      _this.pickerRef = /*#__PURE__*/react.createRef();

      _this.focus = function () {
        if (_this.pickerRef.current) {
          _this.pickerRef.current.focus();
        }
      };

      _this.blur = function () {
        if (_this.pickerRef.current) {
          _this.pickerRef.current.blur();
        }
      };

      _this.getDefaultLocale = function () {
        var locale$1 = _this.props.locale;

        var result = _extends$1(_extends$1({}, locale), locale$1);

        result.lang = _extends$1(_extends$1({}, result.lang), (locale$1 || {}).lang);
        return result;
      };

      _this.renderPicker = function (locale) {
        var _this$context = _this.context,
            getPrefixCls = _this$context.getPrefixCls,
            direction = _this$context.direction,
            getPopupContainer = _this$context.getPopupContainer;

        var _a = _this.props,
            customizePrefixCls = _a.prefixCls,
            customGetPopupContainer = _a.getPopupContainer,
            className = _a.className,
            customizeSize = _a.size,
            _a$bordered = _a.bordered,
            bordered = _a$bordered === void 0 ? true : _a$bordered,
            placeholder = _a.placeholder,
            restProps = __rest(_a, ["prefixCls", "getPopupContainer", "className", "size", "bordered", "placeholder"]);

        var _this$props = _this.props,
            format = _this$props.format,
            showTime = _this$props.showTime,
            picker = _this$props.picker;
        var prefixCls = getPrefixCls('picker', customizePrefixCls);
        var additionalOverrideProps = {};
        additionalOverrideProps = _extends$1(_extends$1(_extends$1({}, additionalOverrideProps), showTime ? getTimeProps(_extends$1({
          format: format,
          picker: picker
        }, showTime)) : {}), picker === 'time' ? getTimeProps(_extends$1(_extends$1({
          format: format
        }, _this.props), {
          picker: picker
        })) : {});
        var rootPrefixCls = getPrefixCls();
        return /*#__PURE__*/react.createElement(SizeContext.Consumer, null, function (size) {
          var _classNames;

          var mergedSize = customizeSize || size;
          return /*#__PURE__*/react.createElement(RangePicker, _extends$1({
            separator: /*#__PURE__*/react.createElement("span", {
              "aria-label": "to",
              className: "".concat(prefixCls, "-separator")
            }, /*#__PURE__*/react.createElement(SwapRightOutlined$1, null)),
            ref: _this.pickerRef,
            placeholder: getRangePlaceholder(picker, locale, placeholder),
            suffixIcon: picker === 'time' ? /*#__PURE__*/react.createElement(ClockCircleOutlined$1, null) : /*#__PURE__*/react.createElement(CalendarOutlined$1, null),
            clearIcon: /*#__PURE__*/react.createElement(CloseCircleFilled$1, null),
            allowClear: true,
            transitionName: "".concat(rootPrefixCls, "-slide-up")
          }, restProps, additionalOverrideProps, {
            className: classnames((_classNames = {}, _defineProperty$1(_classNames, "".concat(prefixCls, "-").concat(mergedSize), mergedSize), _defineProperty$1(_classNames, "".concat(prefixCls, "-borderless"), !bordered), _classNames), className),
            locale: locale.lang,
            prefixCls: prefixCls,
            getPopupContainer: customGetPopupContainer || getPopupContainer,
            generateConfig: generateConfig,
            prevIcon: /*#__PURE__*/react.createElement("span", {
              className: "".concat(prefixCls, "-prev-icon")
            }),
            nextIcon: /*#__PURE__*/react.createElement("span", {
              className: "".concat(prefixCls, "-next-icon")
            }),
            superPrevIcon: /*#__PURE__*/react.createElement("span", {
              className: "".concat(prefixCls, "-super-prev-icon")
            }),
            superNextIcon: /*#__PURE__*/react.createElement("span", {
              className: "".concat(prefixCls, "-super-next-icon")
            }),
            components: Components,
            direction: direction
          }));
        });
      };

      return _this;
    }

    _createClass(RangePicker$1, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/react.createElement(LocaleReceiver, {
          componentName: "DatePicker",
          defaultLocale: this.getDefaultLocale
        }, this.renderPicker);
      }
    }]);

    return RangePicker$1;
  }(react.Component);

  RangePicker$1.contextType = ConfigContext;
  return RangePicker$1;
}

var Components = {
  button: PickerButton,
  rangeItem: PickerTag
};

function toArray(list) {
  if (!list) {
    return [];
  }

  return Array.isArray(list) ? list : [list];
}

function getTimeProps(props) {
  var format = props.format,
      picker = props.picker,
      showHour = props.showHour,
      showMinute = props.showMinute,
      showSecond = props.showSecond,
      use12Hours = props.use12Hours;
  var firstFormat = toArray(format)[0];

  var showTimeObj = _extends$1({}, props);

  if (firstFormat && typeof firstFormat === 'string') {
    if (!firstFormat.includes('s') && showSecond === undefined) {
      showTimeObj.showSecond = false;
    }

    if (!firstFormat.includes('m') && showMinute === undefined) {
      showTimeObj.showMinute = false;
    }

    if (!firstFormat.includes('H') && !firstFormat.includes('h') && showHour === undefined) {
      showTimeObj.showHour = false;
    }

    if ((firstFormat.includes('a') || firstFormat.includes('A')) && use12Hours === undefined) {
      showTimeObj.use12Hours = true;
    }
  }

  if (picker === 'time') {
    return showTimeObj;
  }

  if (typeof firstFormat === 'function') {
    // format of showTime should use default when format is custom format function
    delete showTimeObj.format;
  }

  return {
    showTime: showTimeObj
  };
}

function generatePicker(generateConfig) {
  // =========================== Picker ===========================
  var _generateSinglePicker = generatePicker$1(generateConfig),
      DatePicker = _generateSinglePicker.DatePicker,
      WeekPicker = _generateSinglePicker.WeekPicker,
      MonthPicker = _generateSinglePicker.MonthPicker,
      YearPicker = _generateSinglePicker.YearPicker,
      TimePicker = _generateSinglePicker.TimePicker,
      QuarterPicker = _generateSinglePicker.QuarterPicker; // ======================== Range Picker ========================


  var RangePicker = generateRangePicker(generateConfig);
  var MergedDatePicker = DatePicker;
  MergedDatePicker.WeekPicker = WeekPicker;
  MergedDatePicker.MonthPicker = MonthPicker;
  MergedDatePicker.YearPicker = YearPicker;
  MergedDatePicker.RangePicker = RangePicker;
  MergedDatePicker.TimePicker = TimePicker;
  MergedDatePicker.QuarterPicker = QuarterPicker;
  return MergedDatePicker;
}

var DatePicker = generatePicker(generateConfig);

export { ConfigProvider, DatePicker, api$1 as message };
