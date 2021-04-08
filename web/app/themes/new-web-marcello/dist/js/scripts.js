/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/bootstrap/dist/js/bootstrap.js":
/*!*****************************************************!*\
  !*** ./node_modules/bootstrap/dist/js/bootstrap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
  * Bootstrap v4.6.0 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? factory(exports, __webpack_require__(/*! jquery */ "jquery"), __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")) : undefined;
})(this, function (exports, $, Popper) {
  'use strict';

  function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
      'default': e
    };
  }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);

  var Popper__default = /*#__PURE__*/_interopDefaultLegacy(Popper);

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
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.6.0): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */


  var TRANSITION_END = 'transitionend';
  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    if (obj === null || typeof obj === 'undefined') {
      return "" + obj;
    }

    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        if ($__default['default'](event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined;
      }
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $__default['default'](this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    $__default['default'].fn.emulateTransitionEnd = transitionEndEmulator;
    $__default['default'].event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        var hrefAttr = element.getAttribute('href');
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
      }

      try {
        return document.querySelector(selector) ? selector : null;
      } catch (_) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      if (!element) {
        return 0;
      } // Get transition-duration of the element


      var transitionDuration = $__default['default'](element).css('transition-duration');
      var transitionDelay = $__default['default'](element).css('transition-delay');
      var floatTransitionDuration = parseFloat(transitionDuration);
      var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
      } // If multiple durations are defined, take the first


      transitionDuration = transitionDuration.split(',')[0];
      transitionDelay = transitionDelay.split(',')[0];
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $__default['default'](element).trigger(TRANSITION_END);
    },
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      if (!document.documentElement.attachShadow) {
        return null;
      } // Can find the shadow root otherwise it'll return the document


      if (typeof element.getRootNode === 'function') {
        var root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
      }

      if (element instanceof ShadowRoot) {
        return element;
      } // when we don't find a shadow root


      if (!element.parentNode) {
        return null;
      }

      return Util.findShadowRoot(element.parentNode);
    },
    jQueryDetection: function jQueryDetection() {
      if (typeof $__default['default'] === 'undefined') {
        throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
      }

      var version = $__default['default'].fn.jquery.split(' ')[0].split('.');
      var minMajor = 1;
      var ltMajor = 2;
      var minMinor = 9;
      var minPatch = 1;
      var maxMajor = 4;

      if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
        throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
      }
    }
  };
  Util.jQueryDetection();
  setTransitionEndSupport();
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'alert';
  var VERSION = '4.6.0';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $__default['default'].fn[NAME];
  var SELECTOR_DISMISS = '[data-dismiss="alert"]';
  var EVENT_CLOSE = "close" + EVENT_KEY;
  var EVENT_CLOSED = "closed" + EVENT_KEY;
  var EVENT_CLICK_DATA_API = "click" + EVENT_KEY + DATA_API_KEY;
  var CLASS_NAME_ALERT = 'alert';
  var CLASS_NAME_FADE = 'fade';
  var CLASS_NAME_SHOW = 'show';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Alert = /*#__PURE__*/function () {
    function Alert(element) {
      this._element = element;
    } // Getters


    var _proto = Alert.prototype; // Public

    _proto.close = function close(element) {
      var rootElement = this._element;

      if (element) {
        rootElement = this._getRootElement(element);
      }

      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this._removeElement(rootElement);
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY);
      this._element = null;
    } // Private
    ;

    _proto._getRootElement = function _getRootElement(element) {
      var selector = Util.getSelectorFromElement(element);
      var parent = false;

      if (selector) {
        parent = document.querySelector(selector);
      }

      if (!parent) {
        parent = $__default['default'](element).closest("." + CLASS_NAME_ALERT)[0];
      }

      return parent;
    };

    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
      var closeEvent = $__default['default'].Event(EVENT_CLOSE);
      $__default['default'](element).trigger(closeEvent);
      return closeEvent;
    };

    _proto._removeElement = function _removeElement(element) {
      var _this = this;

      $__default['default'](element).removeClass(CLASS_NAME_SHOW);

      if (!$__default['default'](element).hasClass(CLASS_NAME_FADE)) {
        this._destroyElement(element);

        return;
      }

      var transitionDuration = Util.getTransitionDurationFromElement(element);
      $__default['default'](element).one(Util.TRANSITION_END, function (event) {
        return _this._destroyElement(element, event);
      }).emulateTransitionEnd(transitionDuration);
    };

    _proto._destroyElement = function _destroyElement(element) {
      $__default['default'](element).detach().trigger(EVENT_CLOSED).remove();
    } // Static
    ;

    Alert._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default['default'](this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Alert;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API, SELECTOR_DISMISS, Alert._handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME] = Alert._jQueryInterface;
  $__default['default'].fn[NAME].Constructor = Alert;

  $__default['default'].fn[NAME].noConflict = function () {
    $__default['default'].fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$1 = 'button';
  var VERSION$1 = '4.6.0';
  var DATA_KEY$1 = 'bs.button';
  var EVENT_KEY$1 = "." + DATA_KEY$1;
  var DATA_API_KEY$1 = '.data-api';
  var JQUERY_NO_CONFLICT$1 = $__default['default'].fn[NAME$1];
  var CLASS_NAME_ACTIVE = 'active';
  var CLASS_NAME_BUTTON = 'btn';
  var CLASS_NAME_FOCUS = 'focus';
  var SELECTOR_DATA_TOGGLE_CARROT = '[data-toggle^="button"]';
  var SELECTOR_DATA_TOGGLES = '[data-toggle="buttons"]';
  var SELECTOR_DATA_TOGGLE = '[data-toggle="button"]';
  var SELECTOR_DATA_TOGGLES_BUTTONS = '[data-toggle="buttons"] .btn';
  var SELECTOR_INPUT = 'input:not([type="hidden"])';
  var SELECTOR_ACTIVE = '.active';
  var SELECTOR_BUTTON = '.btn';
  var EVENT_CLICK_DATA_API$1 = "click" + EVENT_KEY$1 + DATA_API_KEY$1;
  var EVENT_FOCUS_BLUR_DATA_API = "focus" + EVENT_KEY$1 + DATA_API_KEY$1 + " " + ("blur" + EVENT_KEY$1 + DATA_API_KEY$1);
  var EVENT_LOAD_DATA_API = "load" + EVENT_KEY$1 + DATA_API_KEY$1;
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Button = /*#__PURE__*/function () {
    function Button(element) {
      this._element = element;
      this.shouldAvoidTriggerChange = false;
    } // Getters


    var _proto = Button.prototype; // Public

    _proto.toggle = function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = $__default['default'](this._element).closest(SELECTOR_DATA_TOGGLES)[0];

      if (rootElement) {
        var input = this._element.querySelector(SELECTOR_INPUT);

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && this._element.classList.contains(CLASS_NAME_ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = rootElement.querySelector(SELECTOR_ACTIVE);

              if (activeElement) {
                $__default['default'](activeElement).removeClass(CLASS_NAME_ACTIVE);
              }
            }
          }

          if (triggerChangeEvent) {
            // if it's not a radio button or checkbox don't add a pointless/invalid checked property to the input
            if (input.type === 'checkbox' || input.type === 'radio') {
              input.checked = !this._element.classList.contains(CLASS_NAME_ACTIVE);
            }

            if (!this.shouldAvoidTriggerChange) {
              $__default['default'](input).trigger('change');
            }
          }

          input.focus();
          addAriaPressed = false;
        }
      }

      if (!(this._element.hasAttribute('disabled') || this._element.classList.contains('disabled'))) {
        if (addAriaPressed) {
          this._element.setAttribute('aria-pressed', !this._element.classList.contains(CLASS_NAME_ACTIVE));
        }

        if (triggerChangeEvent) {
          $__default['default'](this._element).toggleClass(CLASS_NAME_ACTIVE);
        }
      }
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY$1);
      this._element = null;
    } // Static
    ;

    Button._jQueryInterface = function _jQueryInterface(config, avoidTriggerChange) {
      return this.each(function () {
        var $element = $__default['default'](this);
        var data = $element.data(DATA_KEY$1);

        if (!data) {
          data = new Button(this);
          $element.data(DATA_KEY$1, data);
        }

        data.shouldAvoidTriggerChange = avoidTriggerChange;

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$1;
      }
    }]);

    return Button;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
    var button = event.target;
    var initialButton = button;

    if (!$__default['default'](button).hasClass(CLASS_NAME_BUTTON)) {
      button = $__default['default'](button).closest(SELECTOR_BUTTON)[0];
    }

    if (!button || button.hasAttribute('disabled') || button.classList.contains('disabled')) {
      event.preventDefault(); // work around Firefox bug #1540995
    } else {
      var inputBtn = button.querySelector(SELECTOR_INPUT);

      if (inputBtn && (inputBtn.hasAttribute('disabled') || inputBtn.classList.contains('disabled'))) {
        event.preventDefault(); // work around Firefox bug #1540995

        return;
      }

      if (initialButton.tagName === 'INPUT' || button.tagName !== 'LABEL') {
        Button._jQueryInterface.call($__default['default'](button), 'toggle', initialButton.tagName === 'INPUT');
      }
    }
  }).on(EVENT_FOCUS_BLUR_DATA_API, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
    var button = $__default['default'](event.target).closest(SELECTOR_BUTTON)[0];
    $__default['default'](button).toggleClass(CLASS_NAME_FOCUS, /^focus(in)?$/.test(event.type));
  });
  $__default['default'](window).on(EVENT_LOAD_DATA_API, function () {
    // ensure correct active class is set to match the controls' actual values/states
    // find all checkboxes/readio buttons inside data-toggle groups
    var buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLES_BUTTONS));

    for (var i = 0, len = buttons.length; i < len; i++) {
      var button = buttons[i];
      var input = button.querySelector(SELECTOR_INPUT);

      if (input.checked || input.hasAttribute('checked')) {
        button.classList.add(CLASS_NAME_ACTIVE);
      } else {
        button.classList.remove(CLASS_NAME_ACTIVE);
      }
    } // find all button toggles


    buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE));

    for (var _i = 0, _len = buttons.length; _i < _len; _i++) {
      var _button = buttons[_i];

      if (_button.getAttribute('aria-pressed') === 'true') {
        _button.classList.add(CLASS_NAME_ACTIVE);
      } else {
        _button.classList.remove(CLASS_NAME_ACTIVE);
      }
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$1] = Button._jQueryInterface;
  $__default['default'].fn[NAME$1].Constructor = Button;

  $__default['default'].fn[NAME$1].noConflict = function () {
    $__default['default'].fn[NAME$1] = JQUERY_NO_CONFLICT$1;
    return Button._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$2 = 'carousel';
  var VERSION$2 = '4.6.0';
  var DATA_KEY$2 = 'bs.carousel';
  var EVENT_KEY$2 = "." + DATA_KEY$2;
  var DATA_API_KEY$2 = '.data-api';
  var JQUERY_NO_CONFLICT$2 = $__default['default'].fn[NAME$2];
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = 40;
  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  var DIRECTION_NEXT = 'next';
  var DIRECTION_PREV = 'prev';
  var DIRECTION_LEFT = 'left';
  var DIRECTION_RIGHT = 'right';
  var EVENT_SLIDE = "slide" + EVENT_KEY$2;
  var EVENT_SLID = "slid" + EVENT_KEY$2;
  var EVENT_KEYDOWN = "keydown" + EVENT_KEY$2;
  var EVENT_MOUSEENTER = "mouseenter" + EVENT_KEY$2;
  var EVENT_MOUSELEAVE = "mouseleave" + EVENT_KEY$2;
  var EVENT_TOUCHSTART = "touchstart" + EVENT_KEY$2;
  var EVENT_TOUCHMOVE = "touchmove" + EVENT_KEY$2;
  var EVENT_TOUCHEND = "touchend" + EVENT_KEY$2;
  var EVENT_POINTERDOWN = "pointerdown" + EVENT_KEY$2;
  var EVENT_POINTERUP = "pointerup" + EVENT_KEY$2;
  var EVENT_DRAG_START = "dragstart" + EVENT_KEY$2;
  var EVENT_LOAD_DATA_API$1 = "load" + EVENT_KEY$2 + DATA_API_KEY$2;
  var EVENT_CLICK_DATA_API$2 = "click" + EVENT_KEY$2 + DATA_API_KEY$2;
  var CLASS_NAME_CAROUSEL = 'carousel';
  var CLASS_NAME_ACTIVE$1 = 'active';
  var CLASS_NAME_SLIDE = 'slide';
  var CLASS_NAME_RIGHT = 'carousel-item-right';
  var CLASS_NAME_LEFT = 'carousel-item-left';
  var CLASS_NAME_NEXT = 'carousel-item-next';
  var CLASS_NAME_PREV = 'carousel-item-prev';
  var CLASS_NAME_POINTER_EVENT = 'pointer-event';
  var SELECTOR_ACTIVE$1 = '.active';
  var SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
  var SELECTOR_ITEM = '.carousel-item';
  var SELECTOR_ITEM_IMG = '.carousel-item img';
  var SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
  var SELECTOR_INDICATORS = '.carousel-indicators';
  var SELECTOR_DATA_SLIDE = '[data-slide], [data-slide-to]';
  var SELECTOR_DATA_RIDE = '[data-ride="carousel"]';
  var PointerType = {
    TOUCH: 'touch',
    PEN: 'pen'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Carousel = /*#__PURE__*/function () {
    function Carousel(element, config) {
      this._items = null;
      this._interval = null;
      this._activeElement = null;
      this._isPaused = false;
      this._isSliding = false;
      this.touchTimeout = null;
      this.touchStartX = 0;
      this.touchDeltaX = 0;
      this._config = this._getConfig(config);
      this._element = element;
      this._indicatorsElement = this._element.querySelector(SELECTOR_INDICATORS);
      this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);

      this._addEventListeners();
    } // Getters


    var _proto = Carousel.prototype; // Public

    _proto.next = function next() {
      if (!this._isSliding) {
        this._slide(DIRECTION_NEXT);
      }
    };

    _proto.nextWhenVisible = function nextWhenVisible() {
      var $element = $__default['default'](this._element); // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible

      if (!document.hidden && $element.is(':visible') && $element.css('visibility') !== 'hidden') {
        this.next();
      }
    };

    _proto.prev = function prev() {
      if (!this._isSliding) {
        this._slide(DIRECTION_PREV);
      }
    };

    _proto.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if (this._element.querySelector(SELECTOR_NEXT_PREV)) {
        Util.triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    };

    _proto.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config.interval && !this._isPaused) {
        this._updateInterval();

        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    _proto.to = function to(index) {
      var _this = this;

      this._activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        $__default['default'](this._element).one(EVENT_SLID, function () {
          return _this.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? DIRECTION_NEXT : DIRECTION_PREV;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose = function dispose() {
      $__default['default'](this._element).off(EVENT_KEY$2);
      $__default['default'].removeData(this._element, DATA_KEY$2);
      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default, config);
      Util.typeCheckConfig(NAME$2, config, DefaultType);
      return config;
    };

    _proto._handleSwipe = function _handleSwipe() {
      var absDeltax = Math.abs(this.touchDeltaX);

      if (absDeltax <= SWIPE_THRESHOLD) {
        return;
      }

      var direction = absDeltax / this.touchDeltaX;
      this.touchDeltaX = 0; // swipe left

      if (direction > 0) {
        this.prev();
      } // swipe right


      if (direction < 0) {
        this.next();
      }
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      if (this._config.keyboard) {
        $__default['default'](this._element).on(EVENT_KEYDOWN, function (event) {
          return _this2._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        $__default['default'](this._element).on(EVENT_MOUSEENTER, function (event) {
          return _this2.pause(event);
        }).on(EVENT_MOUSELEAVE, function (event) {
          return _this2.cycle(event);
        });
      }

      if (this._config.touch) {
        this._addTouchEventListeners();
      }
    };

    _proto._addTouchEventListeners = function _addTouchEventListeners() {
      var _this3 = this;

      if (!this._touchSupported) {
        return;
      }

      var start = function start(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchStartX = event.originalEvent.clientX;
        } else if (!_this3._pointerEvent) {
          _this3.touchStartX = event.originalEvent.touches[0].clientX;
        }
      };

      var move = function move(event) {
        // ensure swiping with one touch and not pinching
        if (event.originalEvent.touches && event.originalEvent.touches.length > 1) {
          _this3.touchDeltaX = 0;
        } else {
          _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
        }
      };

      var end = function end(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
        }

        _this3._handleSwipe();

        if (_this3._config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this3.pause();

          if (_this3.touchTimeout) {
            clearTimeout(_this3.touchTimeout);
          }

          _this3.touchTimeout = setTimeout(function (event) {
            return _this3.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
        }
      };

      $__default['default'](this._element.querySelectorAll(SELECTOR_ITEM_IMG)).on(EVENT_DRAG_START, function (e) {
        return e.preventDefault();
      });

      if (this._pointerEvent) {
        $__default['default'](this._element).on(EVENT_POINTERDOWN, function (event) {
          return start(event);
        });
        $__default['default'](this._element).on(EVENT_POINTERUP, function (event) {
          return end(event);
        });

        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        $__default['default'](this._element).on(EVENT_TOUCHSTART, function (event) {
          return start(event);
        });
        $__default['default'](this._element).on(EVENT_TOUCHMOVE, function (event) {
          return move(event);
        });
        $__default['default'](this._element).on(EVENT_TOUCHEND, function (event) {
          return end(event);
        });
      }
    };

    _proto._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;

        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(SELECTOR_ITEM)) : [];
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === DIRECTION_NEXT;
      var isPrevDirection = direction === DIRECTION_PREV;

      var activeIndex = this._getItemIndex(activeElement);

      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === DIRECTION_PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;
      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);

      var fromIndex = this._getItemIndex(this._element.querySelector(SELECTOR_ACTIVE_ITEM));

      var slideEvent = $__default['default'].Event(EVENT_SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
      $__default['default'](this._element).trigger(slideEvent);
      return slideEvent;
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(SELECTOR_ACTIVE$1));
        $__default['default'](indicators).removeClass(CLASS_NAME_ACTIVE$1);

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          $__default['default'](nextIndicator).addClass(CLASS_NAME_ACTIVE$1);
        }
      }
    };

    _proto._updateInterval = function _updateInterval() {
      var element = this._activeElement || this._element.querySelector(SELECTOR_ACTIVE_ITEM);

      if (!element) {
        return;
      }

      var elementInterval = parseInt(element.getAttribute('data-interval'), 10);

      if (elementInterval) {
        this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
        this._config.interval = elementInterval;
      } else {
        this._config.interval = this._config.defaultInterval || this._config.interval;
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this4 = this;

      var activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

      var activeElementIndex = this._getItemIndex(activeElement);

      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

      var nextElementIndex = this._getItemIndex(nextElement);

      var isCycling = Boolean(this._interval);
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;

      if (direction === DIRECTION_NEXT) {
        directionalClassName = CLASS_NAME_LEFT;
        orderClassName = CLASS_NAME_NEXT;
        eventDirectionName = DIRECTION_LEFT;
      } else {
        directionalClassName = CLASS_NAME_RIGHT;
        orderClassName = CLASS_NAME_PREV;
        eventDirectionName = DIRECTION_RIGHT;
      }

      if (nextElement && $__default['default'](nextElement).hasClass(CLASS_NAME_ACTIVE$1)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      this._activeElement = nextElement;
      var slidEvent = $__default['default'].Event(EVENT_SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });

      if ($__default['default'](this._element).hasClass(CLASS_NAME_SLIDE)) {
        $__default['default'](nextElement).addClass(orderClassName);
        Util.reflow(nextElement);
        $__default['default'](activeElement).addClass(directionalClassName);
        $__default['default'](nextElement).addClass(directionalClassName);
        var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
        $__default['default'](activeElement).one(Util.TRANSITION_END, function () {
          $__default['default'](nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(CLASS_NAME_ACTIVE$1);
          $__default['default'](activeElement).removeClass(CLASS_NAME_ACTIVE$1 + " " + orderClassName + " " + directionalClassName);
          _this4._isSliding = false;
          setTimeout(function () {
            return $__default['default'](_this4._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        $__default['default'](activeElement).removeClass(CLASS_NAME_ACTIVE$1);
        $__default['default'](nextElement).addClass(CLASS_NAME_ACTIVE$1);
        this._isSliding = false;
        $__default['default'](this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    } // Static
    ;

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$2);

        var _config = _extends({}, Default, $__default['default'](this).data());

        if (typeof config === 'object') {
          _config = _extends({}, _config, config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(this, _config);
          $__default['default'](this).data(DATA_KEY$2, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError("No method named \"" + action + "\"");
          }

          data[action]();
        } else if (_config.interval && _config.ride) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      var selector = Util.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = $__default['default'](selector)[0];

      if (!target || !$__default['default'](target).hasClass(CLASS_NAME_CAROUSEL)) {
        return;
      }

      var config = _extends({}, $__default['default'](target).data(), $__default['default'](this).data());

      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel._jQueryInterface.call($__default['default'](target), config);

      if (slideIndex) {
        $__default['default'](target).data(DATA_KEY$2).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$2;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Carousel;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API$2, SELECTOR_DATA_SLIDE, Carousel._dataApiClickHandler);
  $__default['default'](window).on(EVENT_LOAD_DATA_API$1, function () {
    var carousels = [].slice.call(document.querySelectorAll(SELECTOR_DATA_RIDE));

    for (var i = 0, len = carousels.length; i < len; i++) {
      var $carousel = $__default['default'](carousels[i]);

      Carousel._jQueryInterface.call($carousel, $carousel.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$2] = Carousel._jQueryInterface;
  $__default['default'].fn[NAME$2].Constructor = Carousel;

  $__default['default'].fn[NAME$2].noConflict = function () {
    $__default['default'].fn[NAME$2] = JQUERY_NO_CONFLICT$2;
    return Carousel._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$3 = 'collapse';
  var VERSION$3 = '4.6.0';
  var DATA_KEY$3 = 'bs.collapse';
  var EVENT_KEY$3 = "." + DATA_KEY$3;
  var DATA_API_KEY$3 = '.data-api';
  var JQUERY_NO_CONFLICT$3 = $__default['default'].fn[NAME$3];
  var Default$1 = {
    toggle: true,
    parent: ''
  };
  var DefaultType$1 = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var EVENT_SHOW = "show" + EVENT_KEY$3;
  var EVENT_SHOWN = "shown" + EVENT_KEY$3;
  var EVENT_HIDE = "hide" + EVENT_KEY$3;
  var EVENT_HIDDEN = "hidden" + EVENT_KEY$3;
  var EVENT_CLICK_DATA_API$3 = "click" + EVENT_KEY$3 + DATA_API_KEY$3;
  var CLASS_NAME_SHOW$1 = 'show';
  var CLASS_NAME_COLLAPSE = 'collapse';
  var CLASS_NAME_COLLAPSING = 'collapsing';
  var CLASS_NAME_COLLAPSED = 'collapsed';
  var DIMENSION_WIDTH = 'width';
  var DIMENSION_HEIGHT = 'height';
  var SELECTOR_ACTIVES = '.show, .collapsing';
  var SELECTOR_DATA_TOGGLE$1 = '[data-toggle="collapse"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Collapse = /*#__PURE__*/function () {
    function Collapse(element, config) {
      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var toggleList = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$1));

      for (var i = 0, len = toggleList.length; i < len; i++) {
        var elem = toggleList[i];
        var selector = Util.getSelectorFromElement(elem);
        var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
          return foundElem === element;
        });

        if (selector !== null && filterElement.length > 0) {
          this._selector = selector;

          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    var _proto = Collapse.prototype; // Public

    _proto.toggle = function toggle() {
      if ($__default['default'](this._element).hasClass(CLASS_NAME_SHOW$1)) {
        this.hide();
      } else {
        this.show();
      }
    };

    _proto.show = function show() {
      var _this = this;

      if (this._isTransitioning || $__default['default'](this._element).hasClass(CLASS_NAME_SHOW$1)) {
        return;
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = [].slice.call(this._parent.querySelectorAll(SELECTOR_ACTIVES)).filter(function (elem) {
          if (typeof _this._config.parent === 'string') {
            return elem.getAttribute('data-parent') === _this._config.parent;
          }

          return elem.classList.contains(CLASS_NAME_COLLAPSE);
        });

        if (actives.length === 0) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $__default['default'](actives).not(this._selector).data(DATA_KEY$3);

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = $__default['default'].Event(EVENT_SHOW);
      $__default['default'](this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($__default['default'](actives).not(this._selector), 'hide');

        if (!activesData) {
          $__default['default'](actives).data(DATA_KEY$3, null);
        }
      }

      var dimension = this._getDimension();

      $__default['default'](this._element).removeClass(CLASS_NAME_COLLAPSE).addClass(CLASS_NAME_COLLAPSING);
      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        $__default['default'](this._triggerArray).removeClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $__default['default'](_this._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$1);
        _this._element.style[dimension] = '';

        _this.setTransitioning(false);

        $__default['default'](_this._element).trigger(EVENT_SHOWN);
      };

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll" + capitalizedDimension;
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $__default['default'](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this2 = this;

      if (this._isTransitioning || !$__default['default'](this._element).hasClass(CLASS_NAME_SHOW$1)) {
        return;
      }

      var startEvent = $__default['default'].Event(EVENT_HIDE);
      $__default['default'](this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      Util.reflow(this._element);
      $__default['default'](this._element).addClass(CLASS_NAME_COLLAPSING).removeClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$1);
      var triggerArrayLength = this._triggerArray.length;

      if (triggerArrayLength > 0) {
        for (var i = 0; i < triggerArrayLength; i++) {
          var trigger = this._triggerArray[i];
          var selector = Util.getSelectorFromElement(trigger);

          if (selector !== null) {
            var $elem = $__default['default']([].slice.call(document.querySelectorAll(selector)));

            if (!$elem.hasClass(CLASS_NAME_SHOW$1)) {
              $__default['default'](trigger).addClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this2.setTransitioning(false);

        $__default['default'](_this2._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE).trigger(EVENT_HIDDEN);
      };

      this._element.style[dimension] = '';
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $__default['default'](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY$3);
      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$1, config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      Util.typeCheckConfig(NAME$3, config, DefaultType$1);
      return config;
    };

    _proto._getDimension = function _getDimension() {
      var hasWidth = $__default['default'](this._element).hasClass(DIMENSION_WIDTH);
      return hasWidth ? DIMENSION_WIDTH : DIMENSION_HEIGHT;
    };

    _proto._getParent = function _getParent() {
      var _this3 = this;

      var parent;

      if (Util.isElement(this._config.parent)) {
        parent = this._config.parent; // It's a jQuery object

        if (typeof this._config.parent.jquery !== 'undefined') {
          parent = this._config.parent[0];
        }
      } else {
        parent = document.querySelector(this._config.parent);
      }

      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
      var children = [].slice.call(parent.querySelectorAll(selector));
      $__default['default'](children).each(function (i, element) {
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      var isOpen = $__default['default'](element).hasClass(CLASS_NAME_SHOW$1);

      if (triggerArray.length) {
        $__default['default'](triggerArray).toggleClass(CLASS_NAME_COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
      }
    } // Static
    ;

    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? document.querySelector(selector) : null;
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default['default'](this);
        var data = $element.data(DATA_KEY$3);

        var _config = _extends({}, Default$1, $element.data(), typeof config === 'object' && config ? config : {});

        if (!data && _config.toggle && typeof config === 'string' && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $element.data(DATA_KEY$3, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$3;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$1;
      }
    }]);

    return Collapse;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$1, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      event.preventDefault();
    }

    var $trigger = $__default['default'](this);
    var selector = Util.getSelectorFromElement(this);
    var selectors = [].slice.call(document.querySelectorAll(selector));
    $__default['default'](selectors).each(function () {
      var $target = $__default['default'](this);
      var data = $target.data(DATA_KEY$3);
      var config = data ? 'toggle' : $trigger.data();

      Collapse._jQueryInterface.call($target, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$3] = Collapse._jQueryInterface;
  $__default['default'].fn[NAME$3].Constructor = Collapse;

  $__default['default'].fn[NAME$3].noConflict = function () {
    $__default['default'].fn[NAME$3] = JQUERY_NO_CONFLICT$3;
    return Collapse._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$4 = 'dropdown';
  var VERSION$4 = '4.6.0';
  var DATA_KEY$4 = 'bs.dropdown';
  var EVENT_KEY$4 = "." + DATA_KEY$4;
  var DATA_API_KEY$4 = '.data-api';
  var JQUERY_NO_CONFLICT$4 = $__default['default'].fn[NAME$4];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
  var EVENT_HIDE$1 = "hide" + EVENT_KEY$4;
  var EVENT_HIDDEN$1 = "hidden" + EVENT_KEY$4;
  var EVENT_SHOW$1 = "show" + EVENT_KEY$4;
  var EVENT_SHOWN$1 = "shown" + EVENT_KEY$4;
  var EVENT_CLICK = "click" + EVENT_KEY$4;
  var EVENT_CLICK_DATA_API$4 = "click" + EVENT_KEY$4 + DATA_API_KEY$4;
  var EVENT_KEYDOWN_DATA_API = "keydown" + EVENT_KEY$4 + DATA_API_KEY$4;
  var EVENT_KEYUP_DATA_API = "keyup" + EVENT_KEY$4 + DATA_API_KEY$4;
  var CLASS_NAME_DISABLED = 'disabled';
  var CLASS_NAME_SHOW$2 = 'show';
  var CLASS_NAME_DROPUP = 'dropup';
  var CLASS_NAME_DROPRIGHT = 'dropright';
  var CLASS_NAME_DROPLEFT = 'dropleft';
  var CLASS_NAME_MENURIGHT = 'dropdown-menu-right';
  var CLASS_NAME_POSITION_STATIC = 'position-static';
  var SELECTOR_DATA_TOGGLE$2 = '[data-toggle="dropdown"]';
  var SELECTOR_FORM_CHILD = '.dropdown form';
  var SELECTOR_MENU = '.dropdown-menu';
  var SELECTOR_NAVBAR_NAV = '.navbar-nav';
  var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
  var PLACEMENT_TOP = 'top-start';
  var PLACEMENT_TOPEND = 'top-end';
  var PLACEMENT_BOTTOM = 'bottom-start';
  var PLACEMENT_BOTTOMEND = 'bottom-end';
  var PLACEMENT_RIGHT = 'right-start';
  var PLACEMENT_LEFT = 'left-start';
  var Default$2 = {
    offset: 0,
    flip: true,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null
  };
  var DefaultType$2 = {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)',
    reference: '(string|element)',
    display: 'string',
    popperConfig: '(null|object)'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Dropdown = /*#__PURE__*/function () {
    function Dropdown(element, config) {
      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    } // Getters


    var _proto = Dropdown.prototype; // Public

    _proto.toggle = function toggle() {
      if (this._element.disabled || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED)) {
        return;
      }

      var isActive = $__default['default'](this._menu).hasClass(CLASS_NAME_SHOW$2);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      this.show(true);
    };

    _proto.show = function show(usePopper) {
      if (usePopper === void 0) {
        usePopper = false;
      }

      if (this._element.disabled || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED) || $__default['default'](this._menu).hasClass(CLASS_NAME_SHOW$2)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $__default['default'].Event(EVENT_SHOW$1, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $__default['default'](parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      } // Totally disable Popper for Dropdowns in Navbar


      if (!this._inNavbar && usePopper) {
        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper__default['default'] === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
        }

        var referenceElement = this._element;

        if (this._config.reference === 'parent') {
          referenceElement = parent;
        } else if (Util.isElement(this._config.reference)) {
          referenceElement = this._config.reference; // Check if it's jQuery element

          if (typeof this._config.reference.jquery !== 'undefined') {
            referenceElement = this._config.reference[0];
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        if (this._config.boundary !== 'scrollParent') {
          $__default['default'](parent).addClass(CLASS_NAME_POSITION_STATIC);
        }

        this._popper = new Popper__default['default'](referenceElement, this._menu, this._getPopperConfig());
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && $__default['default'](parent).closest(SELECTOR_NAVBAR_NAV).length === 0) {
        $__default['default'](document.body).children().on('mouseover', null, $__default['default'].noop);
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      $__default['default'](this._menu).toggleClass(CLASS_NAME_SHOW$2);
      $__default['default'](parent).toggleClass(CLASS_NAME_SHOW$2).trigger($__default['default'].Event(EVENT_SHOWN$1, relatedTarget));
    };

    _proto.hide = function hide() {
      if (this._element.disabled || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED) || !$__default['default'](this._menu).hasClass(CLASS_NAME_SHOW$2)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var hideEvent = $__default['default'].Event(EVENT_HIDE$1, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $__default['default'](parent).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      if (this._popper) {
        this._popper.destroy();
      }

      $__default['default'](this._menu).toggleClass(CLASS_NAME_SHOW$2);
      $__default['default'](parent).toggleClass(CLASS_NAME_SHOW$2).trigger($__default['default'].Event(EVENT_HIDDEN$1, relatedTarget));
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY$4);
      $__default['default'](this._element).off(EVENT_KEY$4);
      this._element = null;
      this._menu = null;

      if (this._popper !== null) {
        this._popper.destroy();

        this._popper = null;
      }
    };

    _proto.update = function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Private
    ;

    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      $__default['default'](this._element).on(EVENT_CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, this.constructor.Default, $__default['default'](this._element).data(), config);
      Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);

        if (parent) {
          this._menu = parent.querySelector(SELECTOR_MENU);
        }
      }

      return this._menu;
    };

    _proto._getPlacement = function _getPlacement() {
      var $parentDropdown = $__default['default'](this._element.parentNode);
      var placement = PLACEMENT_BOTTOM; // Handle dropup

      if ($parentDropdown.hasClass(CLASS_NAME_DROPUP)) {
        placement = $__default['default'](this._menu).hasClass(CLASS_NAME_MENURIGHT) ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      } else if ($parentDropdown.hasClass(CLASS_NAME_DROPRIGHT)) {
        placement = PLACEMENT_RIGHT;
      } else if ($parentDropdown.hasClass(CLASS_NAME_DROPLEFT)) {
        placement = PLACEMENT_LEFT;
      } else if ($__default['default'](this._menu).hasClass(CLASS_NAME_MENURIGHT)) {
        placement = PLACEMENT_BOTTOMEND;
      }

      return placement;
    };

    _proto._detectNavbar = function _detectNavbar() {
      return $__default['default'](this._element).closest('.navbar').length > 0;
    };

    _proto._getOffset = function _getOffset() {
      var _this2 = this;

      var offset = {};

      if (typeof this._config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _extends({}, data.offsets, _this2._config.offset(data.offsets, _this2._element) || {});
          return data;
        };
      } else {
        offset.offset = this._config.offset;
      }

      return offset;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      }; // Disable Popper if we have a static display

      if (this._config.display === 'static') {
        popperConfig.modifiers.applyStyle = {
          enabled: false
        };
      }

      return _extends({}, popperConfig, this._config.popperConfig);
    } // Static
    ;

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$4);

        var _config = typeof config === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          $__default['default'](this).data(DATA_KEY$4, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$2));

      for (var i = 0, len = toggles.length; i < len; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);

        var context = $__default['default'](toggles[i]).data(DATA_KEY$4);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (event && event.type === 'click') {
          relatedTarget.clickEvent = event;
        }

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;

        if (!$__default['default'](parent).hasClass(CLASS_NAME_SHOW$2)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $__default['default'].contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $__default['default'].Event(EVENT_HIDE$1, relatedTarget);
        $__default['default'](parent).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          continue;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          $__default['default'](document.body).children().off('mouseover', null, $__default['default'].noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');

        if (context._popper) {
          context._popper.destroy();
        }

        $__default['default'](dropdownMenu).removeClass(CLASS_NAME_SHOW$2);
        $__default['default'](parent).removeClass(CLASS_NAME_SHOW$2).trigger($__default['default'].Event(EVENT_HIDDEN$1, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = document.querySelector(selector);
      }

      return parent || element.parentNode;
    } // eslint-disable-next-line complexity
    ;

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $__default['default'](event.target).closest(SELECTOR_MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
        return;
      }

      if (this.disabled || $__default['default'](this).hasClass(CLASS_NAME_DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);

      var isActive = $__default['default'](parent).hasClass(CLASS_NAME_SHOW$2);

      if (!isActive && event.which === ESCAPE_KEYCODE) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (!isActive || event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE) {
        if (event.which === ESCAPE_KEYCODE) {
          $__default['default'](parent.querySelector(SELECTOR_DATA_TOGGLE$2)).trigger('focus');
        }

        $__default['default'](this).trigger('click');
        return;
      }

      var items = [].slice.call(parent.querySelectorAll(SELECTOR_VISIBLE_ITEMS)).filter(function (item) {
        return $__default['default'](item).is(':visible');
      });

      if (items.length === 0) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // Up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // Down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$4;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$2;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$2;
      }
    }]);

    return Dropdown;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$2, Dropdown._dataApiKeydownHandler).on(EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown._dataApiKeydownHandler).on(EVENT_CLICK_DATA_API$4 + " " + EVENT_KEYUP_DATA_API, Dropdown._clearMenus).on(EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$2, function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown._jQueryInterface.call($__default['default'](this), 'toggle');
  }).on(EVENT_CLICK_DATA_API$4, SELECTOR_FORM_CHILD, function (e) {
    e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$4] = Dropdown._jQueryInterface;
  $__default['default'].fn[NAME$4].Constructor = Dropdown;

  $__default['default'].fn[NAME$4].noConflict = function () {
    $__default['default'].fn[NAME$4] = JQUERY_NO_CONFLICT$4;
    return Dropdown._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$5 = 'modal';
  var VERSION$5 = '4.6.0';
  var DATA_KEY$5 = 'bs.modal';
  var EVENT_KEY$5 = "." + DATA_KEY$5;
  var DATA_API_KEY$5 = '.data-api';
  var JQUERY_NO_CONFLICT$5 = $__default['default'].fn[NAME$5];
  var ESCAPE_KEYCODE$1 = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default$3 = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };
  var DefaultType$3 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  var EVENT_HIDE$2 = "hide" + EVENT_KEY$5;
  var EVENT_HIDE_PREVENTED = "hidePrevented" + EVENT_KEY$5;
  var EVENT_HIDDEN$2 = "hidden" + EVENT_KEY$5;
  var EVENT_SHOW$2 = "show" + EVENT_KEY$5;
  var EVENT_SHOWN$2 = "shown" + EVENT_KEY$5;
  var EVENT_FOCUSIN = "focusin" + EVENT_KEY$5;
  var EVENT_RESIZE = "resize" + EVENT_KEY$5;
  var EVENT_CLICK_DISMISS = "click.dismiss" + EVENT_KEY$5;
  var EVENT_KEYDOWN_DISMISS = "keydown.dismiss" + EVENT_KEY$5;
  var EVENT_MOUSEUP_DISMISS = "mouseup.dismiss" + EVENT_KEY$5;
  var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss" + EVENT_KEY$5;
  var EVENT_CLICK_DATA_API$5 = "click" + EVENT_KEY$5 + DATA_API_KEY$5;
  var CLASS_NAME_SCROLLABLE = 'modal-dialog-scrollable';
  var CLASS_NAME_SCROLLBAR_MEASURER = 'modal-scrollbar-measure';
  var CLASS_NAME_BACKDROP = 'modal-backdrop';
  var CLASS_NAME_OPEN = 'modal-open';
  var CLASS_NAME_FADE$1 = 'fade';
  var CLASS_NAME_SHOW$3 = 'show';
  var CLASS_NAME_STATIC = 'modal-static';
  var SELECTOR_DIALOG = '.modal-dialog';
  var SELECTOR_MODAL_BODY = '.modal-body';
  var SELECTOR_DATA_TOGGLE$3 = '[data-toggle="modal"]';
  var SELECTOR_DATA_DISMISS = '[data-dismiss="modal"]';
  var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  var SELECTOR_STICKY_CONTENT = '.sticky-top';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Modal = /*#__PURE__*/function () {
    function Modal(element, config) {
      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = element.querySelector(SELECTOR_DIALOG);
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollbarWidth = 0;
    } // Getters


    var _proto = Modal.prototype; // Public

    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      if (this._isShown || this._isTransitioning) {
        return;
      }

      if ($__default['default'](this._element).hasClass(CLASS_NAME_FADE$1)) {
        this._isTransitioning = true;
      }

      var showEvent = $__default['default'].Event(EVENT_SHOW$2, {
        relatedTarget: relatedTarget
      });
      $__default['default'](this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      $__default['default'](this._element).on(EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, function (event) {
        return _this.hide(event);
      });
      $__default['default'](this._dialog).on(EVENT_MOUSEDOWN_DISMISS, function () {
        $__default['default'](_this._element).one(EVENT_MOUSEUP_DISMISS, function (event) {
          if ($__default['default'](event.target).is(_this._element)) {
            _this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      if (event) {
        event.preventDefault();
      }

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      var hideEvent = $__default['default'].Event(EVENT_HIDE$2);
      $__default['default'](this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;
      var transition = $__default['default'](this._element).hasClass(CLASS_NAME_FADE$1);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      $__default['default'](document).off(EVENT_FOCUSIN);
      $__default['default'](this._element).removeClass(CLASS_NAME_SHOW$3);
      $__default['default'](this._element).off(EVENT_CLICK_DISMISS);
      $__default['default'](this._dialog).off(EVENT_MOUSEDOWN_DISMISS);

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $__default['default'](this._element).one(Util.TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        return $__default['default'](htmlElement).off(EVENT_KEY$5);
      });
      /**
       * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `EVENT_CLICK_DATA_API` event that should remain
       */

      $__default['default'](document).off(EVENT_FOCUSIN);
      $__default['default'].removeData(this._element, DATA_KEY$5);
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._isTransitioning = null;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$3, config);
      Util.typeCheckConfig(NAME$5, config, DefaultType$3);
      return config;
    };

    _proto._triggerBackdropTransition = function _triggerBackdropTransition() {
      var _this3 = this;

      var hideEventPrevented = $__default['default'].Event(EVENT_HIDE_PREVENTED);
      $__default['default'](this._element).trigger(hideEventPrevented);

      if (hideEventPrevented.isDefaultPrevented()) {
        return;
      }

      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!isModalOverflowing) {
        this._element.style.overflowY = 'hidden';
      }

      this._element.classList.add(CLASS_NAME_STATIC);

      var modalTransitionDuration = Util.getTransitionDurationFromElement(this._dialog);
      $__default['default'](this._element).off(Util.TRANSITION_END);
      $__default['default'](this._element).one(Util.TRANSITION_END, function () {
        _this3._element.classList.remove(CLASS_NAME_STATIC);

        if (!isModalOverflowing) {
          $__default['default'](_this3._element).one(Util.TRANSITION_END, function () {
            _this3._element.style.overflowY = '';
          }).emulateTransitionEnd(_this3._element, modalTransitionDuration);
        }
      }).emulateTransitionEnd(modalTransitionDuration);

      this._element.focus();
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this4 = this;

      var transition = $__default['default'](this._element).hasClass(CLASS_NAME_FADE$1);
      var modalBody = this._dialog ? this._dialog.querySelector(SELECTOR_MODAL_BODY) : null;

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      this._element.setAttribute('role', 'dialog');

      if ($__default['default'](this._dialog).hasClass(CLASS_NAME_SCROLLABLE) && modalBody) {
        modalBody.scrollTop = 0;
      } else {
        this._element.scrollTop = 0;
      }

      if (transition) {
        Util.reflow(this._element);
      }

      $__default['default'](this._element).addClass(CLASS_NAME_SHOW$3);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $__default['default'].Event(EVENT_SHOWN$2, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this4._config.focus) {
          _this4._element.focus();
        }

        _this4._isTransitioning = false;
        $__default['default'](_this4._element).trigger(shownEvent);
      };

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
        $__default['default'](this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this5 = this;

      $__default['default'](document).off(EVENT_FOCUSIN) // Guard against infinite focus loop
      .on(EVENT_FOCUSIN, function (event) {
        if (document !== event.target && _this5._element !== event.target && $__default['default'](_this5._element).has(event.target).length === 0) {
          _this5._element.focus();
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this6 = this;

      if (this._isShown) {
        $__default['default'](this._element).on(EVENT_KEYDOWN_DISMISS, function (event) {
          if (_this6._config.keyboard && event.which === ESCAPE_KEYCODE$1) {
            event.preventDefault();

            _this6.hide();
          } else if (!_this6._config.keyboard && event.which === ESCAPE_KEYCODE$1) {
            _this6._triggerBackdropTransition();
          }
        });
      } else if (!this._isShown) {
        $__default['default'](this._element).off(EVENT_KEYDOWN_DISMISS);
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this7 = this;

      if (this._isShown) {
        $__default['default'](window).on(EVENT_RESIZE, function (event) {
          return _this7.handleUpdate(event);
        });
      } else {
        $__default['default'](window).off(EVENT_RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this8 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._element.removeAttribute('role');

      this._isTransitioning = false;

      this._showBackdrop(function () {
        $__default['default'](document.body).removeClass(CLASS_NAME_OPEN);

        _this8._resetAdjustments();

        _this8._resetScrollbar();

        $__default['default'](_this8._element).trigger(EVENT_HIDDEN$2);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $__default['default'](this._backdrop).remove();
        this._backdrop = null;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this9 = this;

      var animate = $__default['default'](this._element).hasClass(CLASS_NAME_FADE$1) ? CLASS_NAME_FADE$1 : '';

      if (this._isShown && this._config.backdrop) {
        this._backdrop = document.createElement('div');
        this._backdrop.className = CLASS_NAME_BACKDROP;

        if (animate) {
          this._backdrop.classList.add(animate);
        }

        $__default['default'](this._backdrop).appendTo(document.body);
        $__default['default'](this._element).on(EVENT_CLICK_DISMISS, function (event) {
          if (_this9._ignoreBackdropClick) {
            _this9._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          if (_this9._config.backdrop === 'static') {
            _this9._triggerBackdropTransition();
          } else {
            _this9.hide();
          }
        });

        if (animate) {
          Util.reflow(this._backdrop);
        }

        $__default['default'](this._backdrop).addClass(CLASS_NAME_SHOW$3);

        if (!callback) {
          return;
        }

        if (!animate) {
          callback();
          return;
        }

        var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
        $__default['default'](this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else if (!this._isShown && this._backdrop) {
        $__default['default'](this._backdrop).removeClass(CLASS_NAME_SHOW$3);

        var callbackRemove = function callbackRemove() {
          _this9._removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if ($__default['default'](this._element).hasClass(CLASS_NAME_FADE$1)) {
          var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

          $__default['default'](this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this10 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
        var stickyContent = [].slice.call(document.querySelectorAll(SELECTOR_STICKY_CONTENT)); // Adjust fixed content padding

        $__default['default'](fixedContent).each(function (index, element) {
          var actualPadding = element.style.paddingRight;
          var calculatedPadding = $__default['default'](element).css('padding-right');
          $__default['default'](element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this10._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        $__default['default'](stickyContent).each(function (index, element) {
          var actualMargin = element.style.marginRight;
          var calculatedMargin = $__default['default'](element).css('margin-right');
          $__default['default'](element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this10._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $__default['default'](document.body).css('padding-right');
        $__default['default'](document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      }

      $__default['default'](document.body).addClass(CLASS_NAME_OPEN);
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
      $__default['default'](fixedContent).each(function (index, element) {
        var padding = $__default['default'](element).data('padding-right');
        $__default['default'](element).removeData('padding-right');
        element.style.paddingRight = padding ? padding : '';
      }); // Restore sticky content

      var elements = [].slice.call(document.querySelectorAll("" + SELECTOR_STICKY_CONTENT));
      $__default['default'](elements).each(function (index, element) {
        var margin = $__default['default'](element).data('margin-right');

        if (typeof margin !== 'undefined') {
          $__default['default'](element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = $__default['default'](document.body).data('padding-right');
      $__default['default'](document.body).removeData('padding-right');
      document.body.style.paddingRight = padding ? padding : '';
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = CLASS_NAME_SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    } // Static
    ;

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$5);

        var _config = _extends({}, Default$3, $__default['default'](this).data(), typeof config === 'object' && config ? config : {});

        if (!data) {
          data = new Modal(this, _config);
          $__default['default'](this).data(DATA_KEY$5, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$5;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$3;
      }
    }]);

    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API$5, SELECTOR_DATA_TOGGLE$3, function (event) {
    var _this11 = this;

    var target;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = document.querySelector(selector);
    }

    var config = $__default['default'](target).data(DATA_KEY$5) ? 'toggle' : _extends({}, $__default['default'](target).data(), $__default['default'](this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $__default['default'](target).one(EVENT_SHOW$2, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // Only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(EVENT_HIDDEN$2, function () {
        if ($__default['default'](_this11).is(':visible')) {
          _this11.focus();
        }
      });
    });

    Modal._jQueryInterface.call($__default['default'](target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$5] = Modal._jQueryInterface;
  $__default['default'].fn[NAME$5].Constructor = Modal;

  $__default['default'].fn[NAME$5].noConflict = function () {
    $__default['default'].fn[NAME$5] = JQUERY_NO_CONFLICT$5;
    return Modal._jQueryInterface;
  };
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.6.0): tools/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  var DefaultWhitelist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

  function allowedAttribute(attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase();

    if (allowedAttributeList.indexOf(attrName) !== -1) {
      if (uriAttrs.indexOf(attrName) !== -1) {
        return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
      }

      return true;
    }

    var regExp = allowedAttributeList.filter(function (attrRegex) {
      return attrRegex instanceof RegExp;
    }); // Check if a regular expression validates the attribute.

    for (var i = 0, len = regExp.length; i < len; i++) {
      if (attrName.match(regExp[i])) {
        return true;
      }
    }

    return false;
  }

  function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
    if (unsafeHtml.length === 0) {
      return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }

    var domParser = new window.DOMParser();
    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    var whitelistKeys = Object.keys(whiteList);
    var elements = [].slice.call(createdDocument.body.querySelectorAll('*'));

    var _loop = function _loop(i, len) {
      var el = elements[i];
      var elName = el.nodeName.toLowerCase();

      if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
        el.parentNode.removeChild(el);
        return "continue";
      }

      var attributeList = [].slice.call(el.attributes);
      var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);
      attributeList.forEach(function (attr) {
        if (!allowedAttribute(attr, whitelistedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    };

    for (var i = 0, len = elements.length; i < len; i++) {
      var _ret = _loop(i);

      if (_ret === "continue") continue;
    }

    return createdDocument.body.innerHTML;
  }
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$6 = 'tooltip';
  var VERSION$6 = '4.6.0';
  var DATA_KEY$6 = 'bs.tooltip';
  var EVENT_KEY$6 = "." + DATA_KEY$6;
  var JQUERY_NO_CONFLICT$6 = $__default['default'].fn[NAME$6];
  var CLASS_PREFIX = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
  var DefaultType$4 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)',
    boundary: '(string|element)',
    customClass: '(string|function)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    whiteList: 'object',
    popperConfig: '(null|object)'
  };
  var AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };
  var Default$4 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent',
    customClass: '',
    sanitize: true,
    sanitizeFn: null,
    whiteList: DefaultWhitelist,
    popperConfig: null
  };
  var HOVER_STATE_SHOW = 'show';
  var HOVER_STATE_OUT = 'out';
  var Event = {
    HIDE: "hide" + EVENT_KEY$6,
    HIDDEN: "hidden" + EVENT_KEY$6,
    SHOW: "show" + EVENT_KEY$6,
    SHOWN: "shown" + EVENT_KEY$6,
    INSERTED: "inserted" + EVENT_KEY$6,
    CLICK: "click" + EVENT_KEY$6,
    FOCUSIN: "focusin" + EVENT_KEY$6,
    FOCUSOUT: "focusout" + EVENT_KEY$6,
    MOUSEENTER: "mouseenter" + EVENT_KEY$6,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$6
  };
  var CLASS_NAME_FADE$2 = 'fade';
  var CLASS_NAME_SHOW$4 = 'show';
  var SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
  var SELECTOR_ARROW = '.arrow';
  var TRIGGER_HOVER = 'hover';
  var TRIGGER_FOCUS = 'focus';
  var TRIGGER_CLICK = 'click';
  var TRIGGER_MANUAL = 'manual';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tooltip = /*#__PURE__*/function () {
    function Tooltip(element, config) {
      if (typeof Popper__default['default'] === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
      } // private


      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null; // Protected

      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    } // Getters


    var _proto = Tooltip.prototype; // Public

    _proto.enable = function enable() {
      this._isEnabled = true;
    };

    _proto.disable = function disable() {
      this._isEnabled = false;
    };

    _proto.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    _proto.toggle = function toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $__default['default'](event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $__default['default'](event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if ($__default['default'](this.getTipElement()).hasClass(CLASS_NAME_SHOW$4)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      $__default['default'].removeData(this.element, this.constructor.DATA_KEY);
      $__default['default'](this.element).off(this.constructor.EVENT_KEY);
      $__default['default'](this.element).closest('.modal').off('hide.bs.modal', this._hideModalHandler);

      if (this.tip) {
        $__default['default'](this.tip).remove();
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;

      if (this._popper) {
        this._popper.destroy();
      }

      this._popper = null;
      this.element = null;
      this.config = null;
      this.tip = null;
    };

    _proto.show = function show() {
      var _this = this;

      if ($__default['default'](this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $__default['default'].Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        $__default['default'](this.element).trigger(showEvent);
        var shadowRoot = Util.findShadowRoot(this.element);
        var isInTheDom = $__default['default'].contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);
        this.setContent();

        if (this.config.animation) {
          $__default['default'](tip).addClass(CLASS_NAME_FADE$2);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this._getAttachment(placement);

        this.addAttachmentClass(attachment);

        var container = this._getContainer();

        $__default['default'](tip).data(this.constructor.DATA_KEY, this);

        if (!$__default['default'].contains(this.element.ownerDocument.documentElement, this.tip)) {
          $__default['default'](tip).appendTo(container);
        }

        $__default['default'](this.element).trigger(this.constructor.Event.INSERTED);
        this._popper = new Popper__default['default'](this.element, tip, this._getPopperConfig(attachment));
        $__default['default'](tip).addClass(CLASS_NAME_SHOW$4);
        $__default['default'](tip).addClass(this.config.customClass); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement) {
          $__default['default'](document.body).children().on('mouseover', null, $__default['default'].noop);
        }

        var complete = function complete() {
          if (_this.config.animation) {
            _this._fixTransition();
          }

          var prevHoverState = _this._hoverState;
          _this._hoverState = null;
          $__default['default'](_this.element).trigger(_this.constructor.Event.SHOWN);

          if (prevHoverState === HOVER_STATE_OUT) {
            _this._leave(null, _this);
          }
        };

        if ($__default['default'](this.tip).hasClass(CLASS_NAME_FADE$2)) {
          var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
          $__default['default'](this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      }
    };

    _proto.hide = function hide(callback) {
      var _this2 = this;

      var tip = this.getTipElement();
      var hideEvent = $__default['default'].Event(this.constructor.Event.HIDE);

      var complete = function complete() {
        if (_this2._hoverState !== HOVER_STATE_SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this2._cleanTipClass();

        _this2.element.removeAttribute('aria-describedby');

        $__default['default'](_this2.element).trigger(_this2.constructor.Event.HIDDEN);

        if (_this2._popper !== null) {
          _this2._popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      $__default['default'](this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $__default['default'](tip).removeClass(CLASS_NAME_SHOW$4); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        $__default['default'](document.body).children().off('mouseover', null, $__default['default'].noop);
      }

      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;

      if ($__default['default'](this.tip).hasClass(CLASS_NAME_FADE$2)) {
        var transitionDuration = Util.getTransitionDurationFromElement(tip);
        $__default['default'](tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    _proto.update = function update() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Protected
    ;

    _proto.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $__default['default'](this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $__default['default'](this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var tip = this.getTipElement();
      this.setElementContent($__default['default'](tip.querySelectorAll(SELECTOR_TOOLTIP_INNER)), this.getTitle());
      $__default['default'](tip).removeClass(CLASS_NAME_FADE$2 + " " + CLASS_NAME_SHOW$4);
    };

    _proto.setElementContent = function setElementContent($element, content) {
      if (typeof content === 'object' && (content.nodeType || content.jquery)) {
        // Content is a DOM node or a jQuery
        if (this.config.html) {
          if (!$__default['default'](content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($__default['default'](content).text());
        }

        return;
      }

      if (this.config.html) {
        if (this.config.sanitize) {
          content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
        }

        $element.html(content);
      } else {
        $element.text(content);
      }
    };

    _proto.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    } // Private
    ;

    _proto._getPopperConfig = function _getPopperConfig(attachment) {
      var _this3 = this;

      var defaultBsConfig = {
        placement: attachment,
        modifiers: {
          offset: this._getOffset(),
          flip: {
            behavior: this.config.fallbackPlacement
          },
          arrow: {
            element: SELECTOR_ARROW
          },
          preventOverflow: {
            boundariesElement: this.config.boundary
          }
        },
        onCreate: function onCreate(data) {
          if (data.originalPlacement !== data.placement) {
            _this3._handlePopperPlacementChange(data);
          }
        },
        onUpdate: function onUpdate(data) {
          return _this3._handlePopperPlacementChange(data);
        }
      };
      return _extends({}, defaultBsConfig, this.config.popperConfig);
    };

    _proto._getOffset = function _getOffset() {
      var _this4 = this;

      var offset = {};

      if (typeof this.config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _extends({}, data.offsets, _this4.config.offset(data.offsets, _this4.element) || {});
          return data;
        };
      } else {
        offset.offset = this.config.offset;
      }

      return offset;
    };

    _proto._getContainer = function _getContainer() {
      if (this.config.container === false) {
        return document.body;
      }

      if (Util.isElement(this.config.container)) {
        return $__default['default'](this.config.container);
      }

      return $__default['default'](document).find(this.config.container);
    };

    _proto._getAttachment = function _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    };

    _proto._setListeners = function _setListeners() {
      var _this5 = this;

      var triggers = this.config.trigger.split(' ');
      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $__default['default'](_this5.element).on(_this5.constructor.Event.CLICK, _this5.config.selector, function (event) {
            return _this5.toggle(event);
          });
        } else if (trigger !== TRIGGER_MANUAL) {
          var eventIn = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSEENTER : _this5.constructor.Event.FOCUSIN;
          var eventOut = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSELEAVE : _this5.constructor.Event.FOCUSOUT;
          $__default['default'](_this5.element).on(eventIn, _this5.config.selector, function (event) {
            return _this5._enter(event);
          }).on(eventOut, _this5.config.selector, function (event) {
            return _this5._leave(event);
          });
        }
      });

      this._hideModalHandler = function () {
        if (_this5.element) {
          _this5.hide();
        }
      };

      $__default['default'](this.element).closest('.modal').on('hide.bs.modal', this._hideModalHandler);

      if (this.config.selector) {
        this.config = _extends({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    _proto._fixTitle = function _fixTitle() {
      var titleType = typeof this.element.getAttribute('data-original-title');

      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    _proto._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $__default['default'](event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $__default['default'](event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
      }

      if ($__default['default'](context.getTipElement()).hasClass(CLASS_NAME_SHOW$4) || context._hoverState === HOVER_STATE_SHOW) {
        context._hoverState = HOVER_STATE_SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HOVER_STATE_SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    _proto._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $__default['default'](event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $__default['default'](event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HOVER_STATE_OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    _proto._getConfig = function _getConfig(config) {
      var dataAttributes = $__default['default'](this.element).data();
      Object.keys(dataAttributes).forEach(function (dataAttr) {
        if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
          delete dataAttributes[dataAttr];
        }
      });
      config = _extends({}, this.constructor.Default, dataAttributes, typeof config === 'object' && config ? config : {});

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType);

      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
      }

      return config;
    };

    _proto._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $__default['default'](this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
      this.tip = popperData.instance.popper;

      this._cleanTipClass();

      this.addAttachmentClass(this._getAttachment(popperData.placement));
    };

    _proto._fixTransition = function _fixTransition() {
      var tip = this.getTipElement();
      var initConfigAnimation = this.config.animation;

      if (tip.getAttribute('x-placement') !== null) {
        return;
      }

      $__default['default'](tip).removeClass(CLASS_NAME_FADE$2);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    } // Static
    ;

    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default['default'](this);
        var data = $element.data(DATA_KEY$6);

        var _config = typeof config === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $element.data(DATA_KEY$6, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$6;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$4;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$6;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$6;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$6;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$4;
      }
    }]);

    return Tooltip;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $__default['default'].fn[NAME$6] = Tooltip._jQueryInterface;
  $__default['default'].fn[NAME$6].Constructor = Tooltip;

  $__default['default'].fn[NAME$6].noConflict = function () {
    $__default['default'].fn[NAME$6] = JQUERY_NO_CONFLICT$6;
    return Tooltip._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$7 = 'popover';
  var VERSION$7 = '4.6.0';
  var DATA_KEY$7 = 'bs.popover';
  var EVENT_KEY$7 = "." + DATA_KEY$7;
  var JQUERY_NO_CONFLICT$7 = $__default['default'].fn[NAME$7];
  var CLASS_PREFIX$1 = 'bs-popover';
  var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", 'g');

  var Default$5 = _extends({}, Tooltip.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  });

  var DefaultType$5 = _extends({}, Tooltip.DefaultType, {
    content: '(string|element|function)'
  });

  var CLASS_NAME_FADE$3 = 'fade';
  var CLASS_NAME_SHOW$5 = 'show';
  var SELECTOR_TITLE = '.popover-header';
  var SELECTOR_CONTENT = '.popover-body';
  var Event$1 = {
    HIDE: "hide" + EVENT_KEY$7,
    HIDDEN: "hidden" + EVENT_KEY$7,
    SHOW: "show" + EVENT_KEY$7,
    SHOWN: "shown" + EVENT_KEY$7,
    INSERTED: "inserted" + EVENT_KEY$7,
    CLICK: "click" + EVENT_KEY$7,
    FOCUSIN: "focusin" + EVENT_KEY$7,
    FOCUSOUT: "focusout" + EVENT_KEY$7,
    MOUSEENTER: "mouseenter" + EVENT_KEY$7,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$7
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Popover = /*#__PURE__*/function (_Tooltip) {
    _inheritsLoose(Popover, _Tooltip);

    function Popover() {
      return _Tooltip.apply(this, arguments) || this;
    }

    var _proto = Popover.prototype; // Overrides

    _proto.isWithContent = function isWithContent() {
      return this.getTitle() || this._getContent();
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $__default['default'](this.getTipElement()).addClass(CLASS_PREFIX$1 + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $__default['default'](this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var $tip = $__default['default'](this.getTipElement()); // We use append for html objects to maintain js events

      this.setElementContent($tip.find(SELECTOR_TITLE), this.getTitle());

      var content = this._getContent();

      if (typeof content === 'function') {
        content = content.call(this.element);
      }

      this.setElementContent($tip.find(SELECTOR_CONTENT), content);
      $tip.removeClass(CLASS_NAME_FADE$3 + " " + CLASS_NAME_SHOW$5);
    } // Private
    ;

    _proto._getContent = function _getContent() {
      return this.element.getAttribute('data-content') || this.config.content;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $__default['default'](this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX$1);

      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    } // Static
    ;

    Popover._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$7);

        var _config = typeof config === 'object' ? config : null;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, _config);
          $__default['default'](this).data(DATA_KEY$7, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Popover, null, [{
      key: "VERSION",
      // Getters
      get: function get() {
        return VERSION$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$5;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$7;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$7;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$1;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$7;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$5;
      }
    }]);

    return Popover;
  }(Tooltip);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $__default['default'].fn[NAME$7] = Popover._jQueryInterface;
  $__default['default'].fn[NAME$7].Constructor = Popover;

  $__default['default'].fn[NAME$7].noConflict = function () {
    $__default['default'].fn[NAME$7] = JQUERY_NO_CONFLICT$7;
    return Popover._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$8 = 'scrollspy';
  var VERSION$8 = '4.6.0';
  var DATA_KEY$8 = 'bs.scrollspy';
  var EVENT_KEY$8 = "." + DATA_KEY$8;
  var DATA_API_KEY$6 = '.data-api';
  var JQUERY_NO_CONFLICT$8 = $__default['default'].fn[NAME$8];
  var Default$6 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType$6 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  var EVENT_ACTIVATE = "activate" + EVENT_KEY$8;
  var EVENT_SCROLL = "scroll" + EVENT_KEY$8;
  var EVENT_LOAD_DATA_API$2 = "load" + EVENT_KEY$8 + DATA_API_KEY$6;
  var CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
  var CLASS_NAME_ACTIVE$2 = 'active';
  var SELECTOR_DATA_SPY = '[data-spy="scroll"]';
  var SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
  var SELECTOR_NAV_LINKS = '.nav-link';
  var SELECTOR_NAV_ITEMS = '.nav-item';
  var SELECTOR_LIST_ITEMS = '.list-group-item';
  var SELECTOR_DROPDOWN = '.dropdown';
  var SELECTOR_DROPDOWN_ITEMS = '.dropdown-item';
  var SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
  var METHOD_OFFSET = 'offset';
  var METHOD_POSITION = 'position';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var ScrollSpy = /*#__PURE__*/function () {
    function ScrollSpy(element, config) {
      var _this = this;

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + " " + SELECTOR_NAV_LINKS + "," + (this._config.target + " " + SELECTOR_LIST_ITEMS + ",") + (this._config.target + " " + SELECTOR_DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      $__default['default'](this._scrollElement).on(EVENT_SCROLL, function (event) {
        return _this._process(event);
      });
      this.refresh();

      this._process();
    } // Getters


    var _proto = ScrollSpy.prototype; // Public

    _proto.refresh = function refresh() {
      var _this2 = this;

      var autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      var offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      var targets = [].slice.call(document.querySelectorAll(this._selector));
      targets.map(function (element) {
        var target;
        var targetSelector = Util.getSelectorFromElement(element);

        if (targetSelector) {
          target = document.querySelector(targetSelector);
        }

        if (target) {
          var targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            // TODO (fat): remove sketch reliance on jQuery position/offset
            return [$__default['default'](target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this2._offsets.push(item[0]);

        _this2._targets.push(item[1]);
      });
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY$8);
      $__default['default'](this._scrollElement).off(EVENT_KEY$8);
      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$6, typeof config === 'object' && config ? config : {});

      if (typeof config.target !== 'string' && Util.isElement(config.target)) {
        var id = $__default['default'](config.target).attr('id');

        if (!id) {
          id = Util.getUID(NAME$8);
          $__default['default'](config.target).attr('id', id);
        }

        config.target = "#" + id;
      }

      Util.typeCheckConfig(NAME$8, config, DefaultType$6);
      return config;
    };

    _proto._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    _proto._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    _proto._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    };

    _proto._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;

      var scrollHeight = this._getScrollHeight();

      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      for (var i = this._offsets.length; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    _proto._activate = function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(',').map(function (selector) {
        return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
      });

      var $link = $__default['default']([].slice.call(document.querySelectorAll(queries.join(','))));

      if ($link.hasClass(CLASS_NAME_DROPDOWN_ITEM)) {
        $link.closest(SELECTOR_DROPDOWN).find(SELECTOR_DROPDOWN_TOGGLE).addClass(CLASS_NAME_ACTIVE$2);
        $link.addClass(CLASS_NAME_ACTIVE$2);
      } else {
        // Set triggered link as active
        $link.addClass(CLASS_NAME_ACTIVE$2); // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

        $link.parents(SELECTOR_NAV_LIST_GROUP).prev(SELECTOR_NAV_LINKS + ", " + SELECTOR_LIST_ITEMS).addClass(CLASS_NAME_ACTIVE$2); // Handle special case when .nav-link is inside .nav-item

        $link.parents(SELECTOR_NAV_LIST_GROUP).prev(SELECTOR_NAV_ITEMS).children(SELECTOR_NAV_LINKS).addClass(CLASS_NAME_ACTIVE$2);
      }

      $__default['default'](this._scrollElement).trigger(EVENT_ACTIVATE, {
        relatedTarget: target
      });
    };

    _proto._clear = function _clear() {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
        return node.classList.contains(CLASS_NAME_ACTIVE$2);
      }).forEach(function (node) {
        return node.classList.remove(CLASS_NAME_ACTIVE$2);
      });
    } // Static
    ;

    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$8);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
          $__default['default'](this).data(DATA_KEY$8, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$8;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$6;
      }
    }]);

    return ScrollSpy;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](window).on(EVENT_LOAD_DATA_API$2, function () {
    var scrollSpys = [].slice.call(document.querySelectorAll(SELECTOR_DATA_SPY));
    var scrollSpysLength = scrollSpys.length;

    for (var i = scrollSpysLength; i--;) {
      var $spy = $__default['default'](scrollSpys[i]);

      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$8] = ScrollSpy._jQueryInterface;
  $__default['default'].fn[NAME$8].Constructor = ScrollSpy;

  $__default['default'].fn[NAME$8].noConflict = function () {
    $__default['default'].fn[NAME$8] = JQUERY_NO_CONFLICT$8;
    return ScrollSpy._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$9 = 'tab';
  var VERSION$9 = '4.6.0';
  var DATA_KEY$9 = 'bs.tab';
  var EVENT_KEY$9 = "." + DATA_KEY$9;
  var DATA_API_KEY$7 = '.data-api';
  var JQUERY_NO_CONFLICT$9 = $__default['default'].fn[NAME$9];
  var EVENT_HIDE$3 = "hide" + EVENT_KEY$9;
  var EVENT_HIDDEN$3 = "hidden" + EVENT_KEY$9;
  var EVENT_SHOW$3 = "show" + EVENT_KEY$9;
  var EVENT_SHOWN$3 = "shown" + EVENT_KEY$9;
  var EVENT_CLICK_DATA_API$6 = "click" + EVENT_KEY$9 + DATA_API_KEY$7;
  var CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
  var CLASS_NAME_ACTIVE$3 = 'active';
  var CLASS_NAME_DISABLED$1 = 'disabled';
  var CLASS_NAME_FADE$4 = 'fade';
  var CLASS_NAME_SHOW$6 = 'show';
  var SELECTOR_DROPDOWN$1 = '.dropdown';
  var SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
  var SELECTOR_ACTIVE$2 = '.active';
  var SELECTOR_ACTIVE_UL = '> li > .active';
  var SELECTOR_DATA_TOGGLE$4 = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]';
  var SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
  var SELECTOR_DROPDOWN_ACTIVE_CHILD = '> .dropdown-menu .active';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tab = /*#__PURE__*/function () {
    function Tab(element) {
      this._element = element;
    } // Getters


    var _proto = Tab.prototype; // Public

    _proto.show = function show() {
      var _this = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $__default['default'](this._element).hasClass(CLASS_NAME_ACTIVE$3) || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED$1)) {
        return;
      }

      var target;
      var previous;
      var listElement = $__default['default'](this._element).closest(SELECTOR_NAV_LIST_GROUP$1)[0];
      var selector = Util.getSelectorFromElement(this._element);

      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE$2;
        previous = $__default['default'].makeArray($__default['default'](listElement).find(itemSelector));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $__default['default'].Event(EVENT_HIDE$3, {
        relatedTarget: this._element
      });
      var showEvent = $__default['default'].Event(EVENT_SHOW$3, {
        relatedTarget: previous
      });

      if (previous) {
        $__default['default'](previous).trigger(hideEvent);
      }

      $__default['default'](this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = document.querySelector(selector);
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = $__default['default'].Event(EVENT_HIDDEN$3, {
          relatedTarget: _this._element
        });
        var shownEvent = $__default['default'].Event(EVENT_SHOWN$3, {
          relatedTarget: previous
        });
        $__default['default'](previous).trigger(hiddenEvent);
        $__default['default'](_this._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY$9);
      this._element = null;
    } // Private
    ;

    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;

      var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $__default['default'](container).find(SELECTOR_ACTIVE_UL) : $__default['default'](container).children(SELECTOR_ACTIVE$2);
      var active = activeElements[0];
      var isTransitioning = callback && active && $__default['default'](active).hasClass(CLASS_NAME_FADE$4);

      var complete = function complete() {
        return _this2._transitionComplete(element, active, callback);
      };

      if (active && isTransitioning) {
        var transitionDuration = Util.getTransitionDurationFromElement(active);
        $__default['default'](active).removeClass(CLASS_NAME_SHOW$6).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
      if (active) {
        $__default['default'](active).removeClass(CLASS_NAME_ACTIVE$3);
        var dropdownChild = $__default['default'](active.parentNode).find(SELECTOR_DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $__default['default'](dropdownChild).removeClass(CLASS_NAME_ACTIVE$3);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      $__default['default'](element).addClass(CLASS_NAME_ACTIVE$3);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      Util.reflow(element);

      if (element.classList.contains(CLASS_NAME_FADE$4)) {
        element.classList.add(CLASS_NAME_SHOW$6);
      }

      if (element.parentNode && $__default['default'](element.parentNode).hasClass(CLASS_NAME_DROPDOWN_MENU)) {
        var dropdownElement = $__default['default'](element).closest(SELECTOR_DROPDOWN$1)[0];

        if (dropdownElement) {
          var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(SELECTOR_DROPDOWN_TOGGLE$1));
          $__default['default'](dropdownToggleList).addClass(CLASS_NAME_ACTIVE$3);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    } // Static
    ;

    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $__default['default'](this);
        var data = $this.data(DATA_KEY$9);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY$9, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$9;
      }
    }]);

    return Tab;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$4, function (event) {
    event.preventDefault();

    Tab._jQueryInterface.call($__default['default'](this), 'show');
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$9] = Tab._jQueryInterface;
  $__default['default'].fn[NAME$9].Constructor = Tab;

  $__default['default'].fn[NAME$9].noConflict = function () {
    $__default['default'].fn[NAME$9] = JQUERY_NO_CONFLICT$9;
    return Tab._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$a = 'toast';
  var VERSION$a = '4.6.0';
  var DATA_KEY$a = 'bs.toast';
  var EVENT_KEY$a = "." + DATA_KEY$a;
  var JQUERY_NO_CONFLICT$a = $__default['default'].fn[NAME$a];
  var EVENT_CLICK_DISMISS$1 = "click.dismiss" + EVENT_KEY$a;
  var EVENT_HIDE$4 = "hide" + EVENT_KEY$a;
  var EVENT_HIDDEN$4 = "hidden" + EVENT_KEY$a;
  var EVENT_SHOW$4 = "show" + EVENT_KEY$a;
  var EVENT_SHOWN$4 = "shown" + EVENT_KEY$a;
  var CLASS_NAME_FADE$5 = 'fade';
  var CLASS_NAME_HIDE = 'hide';
  var CLASS_NAME_SHOW$7 = 'show';
  var CLASS_NAME_SHOWING = 'showing';
  var DefaultType$7 = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  var Default$7 = {
    animation: true,
    autohide: true,
    delay: 500
  };
  var SELECTOR_DATA_DISMISS$1 = '[data-dismiss="toast"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Toast = /*#__PURE__*/function () {
    function Toast(element, config) {
      this._element = element;
      this._config = this._getConfig(config);
      this._timeout = null;

      this._setListeners();
    } // Getters


    var _proto = Toast.prototype; // Public

    _proto.show = function show() {
      var _this = this;

      var showEvent = $__default['default'].Event(EVENT_SHOW$4);
      $__default['default'](this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      this._clearTimeout();

      if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE$5);
      }

      var complete = function complete() {
        _this._element.classList.remove(CLASS_NAME_SHOWING);

        _this._element.classList.add(CLASS_NAME_SHOW$7);

        $__default['default'](_this._element).trigger(EVENT_SHOWN$4);

        if (_this._config.autohide) {
          _this._timeout = setTimeout(function () {
            _this.hide();
          }, _this._config.delay);
        }
      };

      this._element.classList.remove(CLASS_NAME_HIDE);

      Util.reflow(this._element);

      this._element.classList.add(CLASS_NAME_SHOWING);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $__default['default'](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto.hide = function hide() {
      if (!this._element.classList.contains(CLASS_NAME_SHOW$7)) {
        return;
      }

      var hideEvent = $__default['default'].Event(EVENT_HIDE$4);
      $__default['default'](this._element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      this._close();
    };

    _proto.dispose = function dispose() {
      this._clearTimeout();

      if (this._element.classList.contains(CLASS_NAME_SHOW$7)) {
        this._element.classList.remove(CLASS_NAME_SHOW$7);
      }

      $__default['default'](this._element).off(EVENT_CLICK_DISMISS$1);
      $__default['default'].removeData(this._element, DATA_KEY$a);
      this._element = null;
      this._config = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$7, $__default['default'](this._element).data(), typeof config === 'object' && config ? config : {});
      Util.typeCheckConfig(NAME$a, config, this.constructor.DefaultType);
      return config;
    };

    _proto._setListeners = function _setListeners() {
      var _this2 = this;

      $__default['default'](this._element).on(EVENT_CLICK_DISMISS$1, SELECTOR_DATA_DISMISS$1, function () {
        return _this2.hide();
      });
    };

    _proto._close = function _close() {
      var _this3 = this;

      var complete = function complete() {
        _this3._element.classList.add(CLASS_NAME_HIDE);

        $__default['default'](_this3._element).trigger(EVENT_HIDDEN$4);
      };

      this._element.classList.remove(CLASS_NAME_SHOW$7);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $__default['default'](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._clearTimeout = function _clearTimeout() {
      clearTimeout(this._timeout);
      this._timeout = null;
    } // Static
    ;

    Toast._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default['default'](this);
        var data = $element.data(DATA_KEY$a);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new Toast(this, _config);
          $element.data(DATA_KEY$a, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](this);
        }
      });
    };

    _createClass(Toast, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$a;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$7;
      }
    }]);

    return Toast;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $__default['default'].fn[NAME$a] = Toast._jQueryInterface;
  $__default['default'].fn[NAME$a].Constructor = Toast;

  $__default['default'].fn[NAME$a].noConflict = function () {
    $__default['default'].fn[NAME$a] = JQUERY_NO_CONFLICT$a;
    return Toast._jQueryInterface;
  };

  exports.Alert = Alert;
  exports.Button = Button;
  exports.Carousel = Carousel;
  exports.Collapse = Collapse;
  exports.Dropdown = Dropdown;
  exports.Modal = Modal;
  exports.Popover = Popover;
  exports.Scrollspy = ScrollSpy;
  exports.Tab = Tab;
  exports.Toast = Toast;
  exports.Tooltip = Tooltip;
  exports.Util = Util;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

/***/ }),

/***/ "./node_modules/macy/dist/macy.js":
/*!****************************************!*\
  !*** ./node_modules/macy/dist/macy.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function (t, n) {
   true ? module.exports = n() : undefined;
}(this, function () {
  "use strict";

  function t(t, n) {
    var e = void 0;
    return function () {
      e && clearTimeout(e), e = setTimeout(t, n);
    };
  }

  function n(t, n) {
    for (var e = t.length, r = e, o = []; e--;) o.push(n(t[r - e - 1]));

    return o;
  }

  function e(t, n) {
    var e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (window.Promise) return A(t, n, e);
    t.recalculate(!0, !0);
  }

  function r(t) {
    for (var n = t.options, e = t.responsiveOptions, r = t.keys, o = t.docWidth, i = void 0, s = 0; s < r.length; s++) {
      var a = parseInt(r[s], 10);
      o >= a && (i = n.breakAt[a], O(i, e));
    }

    return e;
  }

  function o(t) {
    for (var n = t.options, e = t.responsiveOptions, r = t.keys, o = t.docWidth, i = void 0, s = r.length - 1; s >= 0; s--) {
      var a = parseInt(r[s], 10);
      o <= a && (i = n.breakAt[a], O(i, e));
    }

    return e;
  }

  function i(t) {
    var n = t.useContainerForBreakpoints ? t.container.clientWidth : window.innerWidth,
        e = {
      columns: t.columns
    };
    b(t.margin) ? e.margin = {
      x: t.margin.x,
      y: t.margin.y
    } : e.margin = {
      x: t.margin,
      y: t.margin
    };
    var i = Object.keys(t.breakAt);
    return t.mobileFirst ? r({
      options: t,
      responsiveOptions: e,
      keys: i,
      docWidth: n
    }) : o({
      options: t,
      responsiveOptions: e,
      keys: i,
      docWidth: n
    });
  }

  function s(t) {
    return i(t).columns;
  }

  function a(t) {
    return i(t).margin;
  }

  function c(t) {
    var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        e = s(t),
        r = a(t).x,
        o = 100 / e;
    if (!n) return o;
    if (1 === e) return "100%";
    var i = "px";

    if ("string" == typeof r) {
      var c = parseFloat(r);
      i = r.replace(c, ""), r = c;
    }

    return r = (e - 1) * r / e, "%" === i ? o - r + "%" : "calc(" + o + "% - " + r + i + ")";
  }

  function u(t, n) {
    var e = s(t.options),
        r = 0,
        o = void 0,
        i = void 0;
    if (1 === ++n) return 0;
    i = a(t.options).x;
    var u = "px";

    if ("string" == typeof i) {
      var l = parseFloat(i, 10);
      u = i.replace(l, ""), i = l;
    }

    return o = (i - (e - 1) * i / e) * (n - 1), r += c(t.options, !1) * (n - 1), "%" === u ? r + o + "%" : "calc(" + r + "% + " + o + u + ")";
  }

  function l(t) {
    var n = 0,
        e = t.container,
        r = t.rows;
    v(r, function (t) {
      n = t > n ? t : n;
    }), e.style.height = n + "px";
  }

  function p(t, n) {
    var e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        o = s(t.options),
        i = a(t.options).y;
    M(t, o, e), v(n, function (n) {
      var e = 0,
          o = parseInt(n.offsetHeight, 10);
      isNaN(o) || (t.rows.forEach(function (n, r) {
        n < t.rows[e] && (e = r);
      }), n.style.position = "absolute", n.style.top = t.rows[e] + "px", n.style.left = "" + t.cols[e], t.rows[e] += isNaN(o) ? 0 : o + i, r && (n.dataset.macyComplete = 1));
    }), r && (t.tmpRows = null), l(t);
  }

  function f(t, n) {
    var e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        o = s(t.options),
        i = a(t.options).y;
    M(t, o, e), v(n, function (n) {
      t.lastcol === o && (t.lastcol = 0);
      var e = C(n, "height");
      e = parseInt(n.offsetHeight, 10), isNaN(e) || (n.style.position = "absolute", n.style.top = t.rows[t.lastcol] + "px", n.style.left = "" + t.cols[t.lastcol], t.rows[t.lastcol] += isNaN(e) ? 0 : e + i, t.lastcol += 1, r && (n.dataset.macyComplete = 1));
    }), r && (t.tmpRows = null), l(t);
  }

  var h = function t(n, e) {
    if (!(this instanceof t)) return new t(n, e);
    if (n && n.nodeName) return n;
    if (n = n.replace(/^\s*/, "").replace(/\s*$/, ""), e) return this.byCss(n, e);

    for (var r in this.selectors) if (e = r.split("/"), new RegExp(e[1], e[2]).test(n)) return this.selectors[r](n);

    return this.byCss(n);
  };

  h.prototype.byCss = function (t, n) {
    return (n || document).querySelectorAll(t);
  }, h.prototype.selectors = {}, h.prototype.selectors[/^\.[\w\-]+$/] = function (t) {
    return document.getElementsByClassName(t.substring(1));
  }, h.prototype.selectors[/^\w+$/] = function (t) {
    return document.getElementsByTagName(t);
  }, h.prototype.selectors[/^\#[\w\-]+$/] = function (t) {
    return document.getElementById(t.substring(1));
  };

  var v = function (t, n) {
    for (var e = t.length, r = e; e--;) n(t[r - e - 1]);
  },
      m = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    this.running = !1, this.events = [], this.add(t);
  };

  m.prototype.run = function () {
    if (!this.running && this.events.length > 0) {
      var t = this.events.shift();
      this.running = !0, t(), this.running = !1, this.run();
    }
  }, m.prototype.add = function () {
    var t = this,
        n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return !!n && (Array.isArray(n) ? v(n, function (n) {
      return t.add(n);
    }) : (this.events.push(n), void this.run()));
  }, m.prototype.clear = function () {
    this.events = [];
  };

  var d = function (t) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return this.instance = t, this.data = n, this;
  },
      y = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    this.events = {}, this.instance = t;
  };

  y.prototype.on = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return !(!t || !n) && (Array.isArray(this.events[t]) || (this.events[t] = []), this.events[t].push(n));
  }, y.prototype.emit = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (!t || !Array.isArray(this.events[t])) return !1;
    var e = new d(this.instance, n);
    v(this.events[t], function (t) {
      return t(e);
    });
  };

  var g = function (t) {
    return !("naturalHeight" in t && t.naturalHeight + t.naturalWidth === 0) || t.width + t.height !== 0;
  },
      E = function (t, n) {
    var e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return new Promise(function (t, e) {
      if (n.complete) return g(n) ? t(n) : e(n);
      n.addEventListener("load", function () {
        return g(n) ? t(n) : e(n);
      }), n.addEventListener("error", function () {
        return e(n);
      });
    }).then(function (n) {
      e && t.emit(t.constants.EVENT_IMAGE_LOAD, {
        img: n
      });
    }).catch(function (n) {
      return t.emit(t.constants.EVENT_IMAGE_ERROR, {
        img: n
      });
    });
  },
      w = function (t, e) {
    var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return n(e, function (n) {
      return E(t, n, r);
    });
  },
      A = function (t, n) {
    var e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return Promise.all(w(t, n, e)).then(function () {
      t.emit(t.constants.EVENT_IMAGE_COMPLETE);
    });
  },
      I = function (n) {
    return t(function () {
      n.emit(n.constants.EVENT_RESIZE), n.queue.add(function () {
        return n.recalculate(!0, !0);
      });
    }, 100);
  },
      N = function (t) {
    if (t.container = h(t.options.container), t.container instanceof h || !t.container) return !!t.options.debug && console.error("Error: Container not found");
    t.container.length && (t.container = t.container[0]), t.options.container = t.container, t.container.style.position = "relative";
  },
      T = function (t) {
    t.queue = new m(), t.events = new y(t), t.rows = [], t.resizer = I(t);
  },
      L = function (t) {
    var n = h("img", t.container);
    window.addEventListener("resize", t.resizer), t.on(t.constants.EVENT_IMAGE_LOAD, function () {
      return t.recalculate(!1, !1);
    }), t.on(t.constants.EVENT_IMAGE_COMPLETE, function () {
      return t.recalculate(!0, !0);
    }), t.options.useOwnImageLoader || e(t, n, !t.options.waitForImages), t.emit(t.constants.EVENT_INITIALIZED);
  },
      _ = function (t) {
    N(t), T(t), L(t);
  },
      b = function (t) {
    return t === Object(t) && "[object Array]" !== Object.prototype.toString.call(t);
  },
      O = function (t, n) {
    b(t) || (n.columns = t), b(t) && t.columns && (n.columns = t.columns), b(t) && t.margin && !b(t.margin) && (n.margin = {
      x: t.margin,
      y: t.margin
    }), b(t) && t.margin && b(t.margin) && t.margin.x && (n.margin.x = t.margin.x), b(t) && t.margin && b(t.margin) && t.margin.y && (n.margin.y = t.margin.y);
  },
      C = function (t, n) {
    return window.getComputedStyle(t, null).getPropertyValue(n);
  },
      M = function (t, n) {
    var e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];

    if (t.lastcol || (t.lastcol = 0), t.rows.length < 1 && (e = !0), e) {
      t.rows = [], t.cols = [], t.lastcol = 0;

      for (var r = n - 1; r >= 0; r--) t.rows[r] = 0, t.cols[r] = u(t, r);
    } else if (t.tmpRows) {
      t.rows = [];

      for (var r = n - 1; r >= 0; r--) t.rows[r] = t.tmpRows[r];
    } else {
      t.tmpRows = [];

      for (var r = n - 1; r >= 0; r--) t.tmpRows[r] = t.rows[r];
    }
  },
      V = function (t) {
    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        e = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        r = n ? t.container.children : h(':scope > *:not([data-macy-complete="1"])', t.container);
    r = Array.from(r).filter(function (t) {
      return null !== t.offsetParent;
    });
    var o = c(t.options);
    return v(r, function (t) {
      n && (t.dataset.macyComplete = 0), t.style.width = o;
    }), t.options.trueOrder ? (f(t, r, n, e), t.emit(t.constants.EVENT_RECALCULATED)) : (p(t, r, n, e), t.emit(t.constants.EVENT_RECALCULATED));
  },
      R = function () {
    return !!window.Promise;
  },
      x = Object.assign || function (t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = arguments[n];

      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    }

    return t;
  };

  Array.from || (Array.from = function (t) {
    for (var n = 0, e = []; n < t.length;) e.push(t[n++]);

    return e;
  });
  var k = {
    columns: 4,
    margin: 2,
    trueOrder: !1,
    waitForImages: !1,
    useImageLoader: !0,
    breakAt: {},
    useOwnImageLoader: !1,
    onInit: !1,
    cancelLegacy: !1,
    useContainerForBreakpoints: !1
  };
  !function () {
    try {
      document.createElement("a").querySelector(":scope *");
    } catch (t) {
      !function () {
        function t(t) {
          return function (e) {
            if (e && n.test(e)) {
              var r = this.getAttribute("id");
              r || (this.id = "q" + Math.floor(9e6 * Math.random()) + 1e6), arguments[0] = e.replace(n, "#" + this.id);
              var o = t.apply(this, arguments);
              return null === r ? this.removeAttribute("id") : r || (this.id = r), o;
            }

            return t.apply(this, arguments);
          };
        }

        var n = /:scope\b/gi,
            e = t(Element.prototype.querySelector);

        Element.prototype.querySelector = function (t) {
          return e.apply(this, arguments);
        };

        var r = t(Element.prototype.querySelectorAll);

        Element.prototype.querySelectorAll = function (t) {
          return r.apply(this, arguments);
        };
      }();
    }
  }();

  var q = function t() {
    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k;
    if (!(this instanceof t)) return new t(n);
    this.options = {}, x(this.options, k, n), this.options.cancelLegacy && !R() || _(this);
  };

  return q.init = function (t) {
    return console.warn("Depreciated: Macy.init will be removed in v3.0.0 opt to use Macy directly like so Macy({ /*options here*/ }) "), new q(t);
  }, q.prototype.recalculateOnImageLoad = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return e(this, h("img", this.container), !t);
  }, q.prototype.runOnImageLoad = function (t) {
    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = h("img", this.container);
    return this.on(this.constants.EVENT_IMAGE_COMPLETE, t), n && this.on(this.constants.EVENT_IMAGE_LOAD, t), e(this, r, n);
  }, q.prototype.recalculate = function () {
    var t = this,
        n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    return e && this.queue.clear(), this.queue.add(function () {
      return V(t, n, e);
    });
  }, q.prototype.remove = function () {
    window.removeEventListener("resize", this.resizer), v(this.container.children, function (t) {
      t.removeAttribute("data-macy-complete"), t.removeAttribute("style");
    }), this.container.removeAttribute("style");
  }, q.prototype.reInit = function () {
    this.recalculate(!0, !0), this.emit(this.constants.EVENT_INITIALIZED), window.addEventListener("resize", this.resizer), this.container.style.position = "relative";
  }, q.prototype.on = function (t, n) {
    this.events.on(t, n);
  }, q.prototype.emit = function (t, n) {
    this.events.emit(t, n);
  }, q.constants = {
    EVENT_INITIALIZED: "macy.initialized",
    EVENT_RECALCULATED: "macy.recalculated",
    EVENT_IMAGE_LOAD: "macy.image.load",
    EVENT_IMAGE_ERROR: "macy.image.error",
    EVENT_IMAGE_COMPLETE: "macy.images.complete",
    EVENT_RESIZE: "macy.resize"
  }, q.prototype.constants = q.constants, q;
});

/***/ }),

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];

  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }

  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }

    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;
/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/

var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;
/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */

function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}
/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */


function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  } // NOTE: 1 DOM access here


  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}
/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */


function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }

  return element.parentNode || element.host;
}
/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */


function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;

    case '#document':
      return element.body;
  } // Firefox want us to check `-x` and `-y` variations as well


  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}
/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */


function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);
/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */

function isIE(version) {
  if (version === 11) {
    return isIE11;
  }

  if (version === 10) {
    return isIE10;
  }

  return isIE11 || isIE10;
}
/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */


function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null; // NOTE: 1 DOM access here

  var offsetParent = element.offsetParent || null; // Skip hidden elements which don't have an offsetParent

  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  } // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...


  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }

  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}
/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */


function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}
/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */


function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  } // Here we make sure to give as "start" the element that comes first in the DOM


  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1; // Get common ancestor container

  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer; // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  } // one of the nodes is inside shadowDOM, find which one


  var element1root = getRoot(element1);

  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}
/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */


function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}
/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */


function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}
/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */


function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
  return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);
  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function (obj, key, value) {
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
};

var _extends = Object.assign || function (target) {
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
/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */


function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}
/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */


function getBoundingClientRect(element) {
  var rect = {}; // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11

  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  }; // subtract scrollbar size from sizes

  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;
  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height; // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons

  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');
    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);
  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth); // In cases where the parent is fixed, we must ignore negative scroll in offset calc

  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }

  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0; // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.

  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop);
    var marginLeft = parseFloat(styles.marginLeft);
    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft; // Attach marginTop and marginLeft because in some circumstances we may need them

    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);
  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };
  return getClientRect(offset);
}
/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */


function isFixed(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }

  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }

  var parentNode = getParentNode(element);

  if (!parentNode) {
    return false;
  }

  return isFixed(parentNode);
}
/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */


function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }

  var el = element.parentElement;

  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }

  return el || document.documentElement;
}
/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */


function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false; // NOTE: 1 DOM access here

  var boundaries = {
    top: 0,
    left: 0
  };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference)); // Handle viewport case

  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;

    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));

      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition); // In case of HTML, we need a different computation

    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  } // Add paddings


  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;
  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;
  return width * height;
}
/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };
  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });
  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });
  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
  var variation = placement.split('-')[1];
  return computedPlacement + (variation ? '-' + variation : '');
}
/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */


function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}
/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */


function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}
/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */


function getOppositePlacement(placement) {
  var hash = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}
/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */


function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0]; // Get popper node sizes

  var popperRect = getOuterSizes(popper); // Add position, width and height to our offsets object

  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  }; // depending by the popper placement we have to compute its offsets slightly differently

  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';
  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;

  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}
/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */


function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  } // use `filter` to obtain the same behavior of `find`


  return arr.filter(check)[0];
}
/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */


function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  } // use `find` + `indexOf` if `findIndex` isn't supported


  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}
/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */


function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));
  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }

    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation

    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);
      data = fn(data, modifier);
    }
  });
  return data;
}
/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */


function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  }; // compute reference element offsets

  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed); // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value

  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding); // store the computed placement inside `originalPlacement`

  data.originalPlacement = data.placement;
  data.positionFixed = this.options.positionFixed; // compute the popper offsets

  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute'; // run the modifiers

  data = runModifiers(this.modifiers, data); // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback

  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}
/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */


function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}
/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */


function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;

    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }

  return null;
}
/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */


function destroy() {
  this.state.isDestroyed = true; // touch DOM only if `applyStyle` modifier is enabled

  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners(); // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it

  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }

  return this;
}
/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */


function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, {
    passive: true
  });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }

  scrollParents.push(target);
}
/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */


function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, {
    passive: true
  }); // Scroll event listener on scroll parents

  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;
  return state;
}
/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */


function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}
/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */


function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound); // Remove scroll event listener on scroll parents

  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  }); // Reset state

  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}
/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */


function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}
/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */


function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}
/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */


function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = ''; // add unit if the value is numeric and is one of the following

    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }

    element.style[prop] = styles[prop] + unit;
  });
}
/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */


function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];

    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */


function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles); // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element

  setAttributes(data.instance.popper, data.attributes); // if arrowElement is defined and arrowStyles has some properties

  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}
/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */


function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed); // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value

  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
  popper.setAttribute('x-placement', placement); // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations

  setStyles(popper, {
    position: options.positionFixed ? 'fixed' : 'absolute'
  });
  return options;
}
/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */


function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);
  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;
  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;
  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */

function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper; // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;

  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }

  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;
  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent); // Styles

  var styles = {
    position: popper.position
  };
  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);
  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right'; // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed

  var prefixedProperty = getSupportedPropertyName('transform'); // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.

  var left = void 0,
      top = void 0;

  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }

  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }

  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  } // Attributes


  var attributes = {
    'x-placement': data.placement
  }; // Update `data` attributes, styles and arrowStyles

  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);
  return data;
}
/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */


function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });
  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';

    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }

  return isRequired;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function arrow(data, options) {
  var _data$offsets$arrow; // arrow depends on keepTogether in order to work


  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element; // if arrowElement is a string, suppose it's a CSS selector

  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement); // if arrowElement is not found, don't run the modifier

    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var isVertical = ['left', 'right'].indexOf(placement) !== -1;
  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len]; //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //
  // top/left side

  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  } // bottom/right side


  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }

  data.offsets.popper = getClientRect(data.offsets.popper); // compute center of the popper

  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2; // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available

  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide; // prevent arrowElement from being placed not contiguously to its popper

  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);
  return data;
}
/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */


function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }

  return variation;
}
/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */


var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start']; // Get rid of `auto` `auto-start` and `auto-end`

var validPlacements = placements.slice(3);
/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */

function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */

function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);
  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';
  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;

    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;

    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;

    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);
    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference; // using floor because the reference offsets may contain decimals we are not going to consider here

    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);
    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom; // flip the variation if required

    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1; // flips variation if reference element overflows boundaries

    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom); // flips variation if popper content overflows boundaries

    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);
    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : ''); // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future

      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }

  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}
/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */


function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2]; // If it's not a number it's an operator, I guess

  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;

    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;

      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;

    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }

    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}
/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */


function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0]; // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one

  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1; // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)

  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  }); // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space

  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  } // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.


  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments]; // Convert the values with units to absolute pixels to allow our computations

  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, []) // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  }); // Loop trough the offsets arrays and execute the operations

  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */


function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var basePlacement = placement.split('-')[0];
  var offsets = void 0;

  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper); // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken

  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  } // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself


  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification

  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];
  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';
  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed); // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed

  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;
  options.boundaries = boundaries;
  var order = options.priority;
  var popper = data.offsets.popper;
  var check = {
    primary: function primary(placement) {
      var value = popper[placement];

      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }

      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];

      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }

      return defineProperty({}, mainSide, value);
    }
  };
  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });
  data.offsets.popper = popper;
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1]; // if shift shiftvariation is specified, run the modifier

  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;
    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';
    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };
    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;
  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;
  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);
  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);
  return data;
}
/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */


var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: offset,

    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: preventOverflow,

    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],

    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,

    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: arrow,

    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: flip,

    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',

    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,

    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',

    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,

    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,

    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,

    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: computeStyle,

    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,

    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',

    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: applyStyle,

    /** @prop {Function} */
    onLoad: applyStyleOnLoad,

    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};
/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */

var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};
/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */
// Utils
// Methods

var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    }; // make update() debounced, so that it only runs at most once-per-tick


    this.update = debounce(this.update.bind(this)); // with {} we create a new object with the options inside it

    this.options = _extends({}, Popper.Defaults, options); // init state

    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    }; // get reference and popper elements (allow jQuery wrappers)

    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper; // Deep merge modifiers options

    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    }); // Refactoring modifiers' list (Object => Array)

    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    }) // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    }); // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!

    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    }); // fire the first update to position the popper in the right place

    this.update();
    var eventsEnabled = this.options.eventsEnabled;

    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  } // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }
    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */

    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();
/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;
/* harmony default export */ __webpack_exports__["default"] = (Popper);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./src/js/components/comments.js":
/*!***************************************!*\
  !*** ./src/js/components/comments.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

jQuery(function ($) {
  $('#reply-title').on('click', function () {
    $('#commentform').slideToggle();
  });
});

/***/ }),

/***/ "./src/js/components/fixed-headers.js":
/*!********************************************!*\
  !*** ./src/js/components/fixed-headers.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

jQuery(function ($) {
  $('#fixed-headers').on('scroll', function (ev) {
    $('thead th').css('transform', 'translateY(' + this.scrollTop + 'px)');
    $('tbody th').css('transform', 'translateX(' + this.scrollLeft + 'px)');
  });
});

/***/ }),

/***/ "./src/js/components/masonry.js":
/*!**************************************!*\
  !*** ./src/js/components/masonry.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var macy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! macy */ "./node_modules/macy/dist/macy.js");
/* harmony import */ var macy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(macy__WEBPACK_IMPORTED_MODULE_0__);

jQuery(function ($) {
  if ($('#masonry-wrapper').length > 0) {
    var bundler = macy__WEBPACK_IMPORTED_MODULE_0___default()({
      container: '#masonry-wrapper',
      trueOrder: false,
      waitForImages: false,
      margin: 0,
      columns: 3,
      breakAt: {
        768: 1
      }
    });
  }
});

/***/ }),

/***/ "./src/js/components/menu.js":
/*!***********************************!*\
  !*** ./src/js/components/menu.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

jQuery(function ($) {
  $('#menu-toggle').on('click', function () {
    if ($(this).hasClass('open')) {
      $('#full-screen').animate({
        left: "-100%"
      }, 1000);
      $('body').css("overflow", "auto");
    } else {
      $('#full-screen').animate({
        left: "0px"
      }, 1000);
      $('body').css("overflow", "hidden");
    }

    $(this).toggleClass('open');
  });
  $('.sub-menu').on('click', function (event) {
    event.stopPropagation();
  });
  $('.menu-item-has-children').on('click', function (event) {
    event.preventDefault();
    $(this).find('.sub-menu').slideToggle();
    $(this).find(':before').css({
      'transform': 'rotate(45deg)'
    });
  });
});

/***/ }),

/***/ "./src/js/components/scroll-indicator.js":
/*!***********************************************!*\
  !*** ./src/js/components/scroll-indicator.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = winScroll / height * 100;
  document.getElementById("scrollIndicator").style.width = scrolled + "%";
}

/***/ }),

/***/ "./src/js/components/time-zone.js":
/*!****************************************!*\
  !*** ./src/js/components/time-zone.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

jQuery(function ($) {
  function calcTime(offset, current_time) {
    // creo un oggetto Date per l'orario inserito 
    d = new Date(current_time); // lo converto in millisecondi

    utc = d.getTime(); // creo un altro oggetto Date aggiungedo la differenza di orario della citta' del computer

    nd = new Date(utc + 3600000 * offset); // creo una string per visualizzare l'offeset a schermo

    if (offset > 0) string_offeset = ' (GMT +' + offset + ')';else string_offeset = ' (GMT ' + offset + ')';
    var month = nd.getMonth() + 1;
    var day = nd.getDate();
    var year = nd.getFullYear();
    var hour = nd.getHours();
    var minute = nd.getMinutes(); // retorna la data come stringa

    return appendLeadingZeroes(day) + "/" + appendLeadingZeroes(month) + "/" + year + " " + appendLeadingZeroes(hour) + ":" + appendLeadingZeroes(minute) + string_offeset;
  } // questa funzione aggiunge uno zero quando e' necessario


  function appendLeadingZeroes(n) {
    if (n <= 9) {
      return "0" + n;
    }

    return n;
  }

  $(".span-datetime").each(function () {
    var current_time = $(this).text(); // se il contenuto e' un orario accettato

    if (Date.parse(current_time)) {
      // calcolo l'offset del computer
      var hrs_offset = -(new Date().getTimezoneOffset() / 60);
      var new_time = calcTime(hrs_offset, current_time);
      $(this).text(new_time);
    }
  });
});

/***/ }),

/***/ "./src/js/scripts.js":
/*!***************************!*\
  !*** ./src/js/scripts.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/menu */ "./src/js/components/menu.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_fixed_headers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/fixed-headers */ "./src/js/components/fixed-headers.js");
/* harmony import */ var _components_fixed_headers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_fixed_headers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_comments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/comments */ "./src/js/components/comments.js");
/* harmony import */ var _components_comments__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_comments__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_time_zone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/time-zone */ "./src/js/components/time-zone.js");
/* harmony import */ var _components_time_zone__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_time_zone__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_scroll_indicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/scroll-indicator */ "./src/js/components/scroll-indicator.js");
/* harmony import */ var _components_scroll_indicator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_scroll_indicator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_masonry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/masonry */ "./src/js/components/masonry.js");








/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** multi ./src/js/scripts.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\coding\xampp\htdocs\newwebmarcello\web\app\themes\new-web-marcello\src\js\scripts.js */"./src/js/scripts.js");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy91dGlsLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvYWxlcnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9jYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL2NvbGxhcHNlLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL3Rvb2xzL3Nhbml0aXplci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL3Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9wb3BvdmVyLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvc2Nyb2xsc3B5LmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvdGFiLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvdG9hc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hY3kvZGlzdC9tYWN5LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvaXNCcm93c2VyLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9pc0Z1bmN0aW9uLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0UGFyZW50Tm9kZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2dldFNjcm9sbFBhcmVudC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2dldFJlZmVyZW5jZU5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9pc0lFLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvaXNPZmZzZXRDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRSb290LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZmluZENvbW1vbk9mZnNldFBhcmVudC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2dldFNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2luY2x1ZGVTY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRCb3JkZXJzU2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2dldFdpbmRvd1NpemVzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0Q2xpZW50UmVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2dldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2dldFZpZXdwb3J0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcnRiaXRyYXJ5Tm9kZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2lzRml4ZWQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0Qm91bmRhcmllcy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2NvbXB1dGVBdXRvUGxhY2VtZW50LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0UmVmZXJlbmNlT2Zmc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2dldE91dGVyU2l6ZXMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRPcHBvc2l0ZVBsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2dldFBvcHBlck9mZnNldHMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9maW5kLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZmluZEluZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvcnVuTW9kaWZpZXJzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbWV0aG9kcy91cGRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9pc01vZGlmaWVyRW5hYmxlZC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2dldFN1cHBvcnRlZFByb3BlcnR5TmFtZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21ldGhvZHMvZGVzdHJveS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2dldFdpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL3NldHVwRXZlbnRMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9tZXRob2RzL2VuYWJsZUV2ZW50TGlzdGVuZXJzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvcmVtb3ZlRXZlbnRMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9tZXRob2RzL2Rpc2FibGVFdmVudExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2lzTnVtZXJpYy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL3NldFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL3NldEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9tb2RpZmllcnMvYXBwbHlTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2dldFJvdW5kZWRPZmZzZXRzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbW9kaWZpZXJzL2NvbXB1dGVTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2lzTW9kaWZpZXJSZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21vZGlmaWVycy9hcnJvdy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2dldE9wcG9zaXRlVmFyaWF0aW9uLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbWV0aG9kcy9wbGFjZW1lbnRzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvY2xvY2t3aXNlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbW9kaWZpZXJzL2ZsaXAuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9tb2RpZmllcnMva2VlcFRvZ2V0aGVyLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbW9kaWZpZXJzL29mZnNldC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21vZGlmaWVycy9wcmV2ZW50T3ZlcmZsb3cuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9tb2RpZmllcnMvc2hpZnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9tb2RpZmllcnMvaGlkZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21vZGlmaWVycy9pbm5lci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21vZGlmaWVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21ldGhvZHMvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2NvbW1lbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2ZpeGVkLWhlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbWFzb25yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3Njcm9sbC1pbmRpY2F0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvdGltZS16b25lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zY3JpcHRzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbIlRSQU5TSVRJT05fRU5EIiwiTUFYX1VJRCIsIk1JTExJU0VDT05EU19NVUxUSVBMSUVSIiwib2JqIiwiYmluZFR5cGUiLCJkZWxlZ2F0ZVR5cGUiLCJoYW5kbGUiLCIkIiwiZXZlbnQiLCJjYWxsZWQiLCJVdGlsIiwic2V0VGltZW91dCIsImdldFNwZWNpYWxUcmFuc2l0aW9uRW5kRXZlbnQiLCJnZXRVSUQiLCJwcmVmaXgiLCJNYXRoIiwiZG9jdW1lbnQiLCJnZXRTZWxlY3RvckZyb21FbGVtZW50Iiwic2VsZWN0b3IiLCJlbGVtZW50IiwiaHJlZkF0dHIiLCJnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCIsInRyYW5zaXRpb25EdXJhdGlvbiIsInRyYW5zaXRpb25EZWxheSIsImZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uIiwicGFyc2VGbG9hdCIsImZsb2F0VHJhbnNpdGlvbkRlbGF5IiwicmVmbG93IiwidHJpZ2dlclRyYW5zaXRpb25FbmQiLCJzdXBwb3J0c1RyYW5zaXRpb25FbmQiLCJCb29sZWFuIiwiaXNFbGVtZW50IiwidHlwZUNoZWNrQ29uZmlnIiwiT2JqZWN0IiwiZXhwZWN0ZWRUeXBlcyIsImNvbmZpZ1R5cGVzIiwidmFsdWUiLCJjb25maWciLCJ2YWx1ZVR5cGUiLCJ0b1R5cGUiLCJjb21wb25lbnROYW1lIiwiZmluZFNoYWRvd1Jvb3QiLCJyb290IiwialF1ZXJ5RGV0ZWN0aW9uIiwidmVyc2lvbiIsIm1pbk1ham9yIiwibHRNYWpvciIsIm1pbk1pbm9yIiwibWluUGF0Y2giLCJtYXhNYWpvciIsInNldFRyYW5zaXRpb25FbmRTdXBwb3J0IiwiTkFNRSIsIlZFUlNJT04iLCJEQVRBX0tFWSIsIkVWRU5UX0tFWSIsIkRBVEFfQVBJX0tFWSIsIkpRVUVSWV9OT19DT05GTElDVCIsIlNFTEVDVE9SX0RJU01JU1MiLCJFVkVOVF9DTE9TRSIsIkVWRU5UX0NMT1NFRCIsIkVWRU5UX0NMSUNLX0RBVEFfQVBJIiwiQ0xBU1NfTkFNRV9BTEVSVCIsIkNMQVNTX05BTUVfRkFERSIsIkNMQVNTX05BTUVfU0hPVyIsIkFsZXJ0IiwiY2xvc2UiLCJyb290RWxlbWVudCIsImN1c3RvbUV2ZW50IiwiZGlzcG9zZSIsIl9nZXRSb290RWxlbWVudCIsInBhcmVudCIsIl90cmlnZ2VyQ2xvc2VFdmVudCIsImNsb3NlRXZlbnQiLCJfcmVtb3ZlRWxlbWVudCIsIl9kZXN0cm95RWxlbWVudCIsIl9qUXVlcnlJbnRlcmZhY2UiLCIkZWxlbWVudCIsImRhdGEiLCJfaGFuZGxlRGlzbWlzcyIsImFsZXJ0SW5zdGFuY2UiLCJDTEFTU19OQU1FX0FDVElWRSIsIkNMQVNTX05BTUVfQlVUVE9OIiwiQ0xBU1NfTkFNRV9GT0NVUyIsIlNFTEVDVE9SX0RBVEFfVE9HR0xFX0NBUlJPVCIsIlNFTEVDVE9SX0RBVEFfVE9HR0xFUyIsIlNFTEVDVE9SX0RBVEFfVE9HR0xFIiwiU0VMRUNUT1JfREFUQV9UT0dHTEVTX0JVVFRPTlMiLCJTRUxFQ1RPUl9JTlBVVCIsIlNFTEVDVE9SX0FDVElWRSIsIlNFTEVDVE9SX0JVVFRPTiIsIkVWRU5UX0ZPQ1VTX0JMVVJfREFUQV9BUEkiLCJFVkVOVF9MT0FEX0RBVEFfQVBJIiwiQnV0dG9uIiwidG9nZ2xlIiwidHJpZ2dlckNoYW5nZUV2ZW50IiwiYWRkQXJpYVByZXNzZWQiLCJpbnB1dCIsImFjdGl2ZUVsZW1lbnQiLCJidXR0b24iLCJpbml0aWFsQnV0dG9uIiwiaW5wdXRCdG4iLCJidXR0b25zIiwiaSIsImxlbiIsIkFSUk9XX0xFRlRfS0VZQ09ERSIsIkFSUk9XX1JJR0hUX0tFWUNPREUiLCJUT1VDSEVWRU5UX0NPTVBBVF9XQUlUIiwiU1dJUEVfVEhSRVNIT0xEIiwiRGVmYXVsdCIsImludGVydmFsIiwia2V5Ym9hcmQiLCJzbGlkZSIsInBhdXNlIiwid3JhcCIsInRvdWNoIiwiRGVmYXVsdFR5cGUiLCJESVJFQ1RJT05fTkVYVCIsIkRJUkVDVElPTl9QUkVWIiwiRElSRUNUSU9OX0xFRlQiLCJESVJFQ1RJT05fUklHSFQiLCJFVkVOVF9TTElERSIsIkVWRU5UX1NMSUQiLCJFVkVOVF9LRVlET1dOIiwiRVZFTlRfTU9VU0VFTlRFUiIsIkVWRU5UX01PVVNFTEVBVkUiLCJFVkVOVF9UT1VDSFNUQVJUIiwiRVZFTlRfVE9VQ0hNT1ZFIiwiRVZFTlRfVE9VQ0hFTkQiLCJFVkVOVF9QT0lOVEVSRE9XTiIsIkVWRU5UX1BPSU5URVJVUCIsIkVWRU5UX0RSQUdfU1RBUlQiLCJDTEFTU19OQU1FX0NBUk9VU0VMIiwiQ0xBU1NfTkFNRV9TTElERSIsIkNMQVNTX05BTUVfUklHSFQiLCJDTEFTU19OQU1FX0xFRlQiLCJDTEFTU19OQU1FX05FWFQiLCJDTEFTU19OQU1FX1BSRVYiLCJDTEFTU19OQU1FX1BPSU5URVJfRVZFTlQiLCJTRUxFQ1RPUl9BQ1RJVkVfSVRFTSIsIlNFTEVDVE9SX0lURU0iLCJTRUxFQ1RPUl9JVEVNX0lNRyIsIlNFTEVDVE9SX05FWFRfUFJFViIsIlNFTEVDVE9SX0lORElDQVRPUlMiLCJTRUxFQ1RPUl9EQVRBX1NMSURFIiwiU0VMRUNUT1JfREFUQV9SSURFIiwiUG9pbnRlclR5cGUiLCJUT1VDSCIsIlBFTiIsIkNhcm91c2VsIiwibmF2aWdhdG9yIiwid2luZG93IiwibmV4dCIsIm5leHRXaGVuVmlzaWJsZSIsInByZXYiLCJjbGVhckludGVydmFsIiwiY3ljbGUiLCJzZXRJbnRlcnZhbCIsInRvIiwiYWN0aXZlSW5kZXgiLCJpbmRleCIsImRpcmVjdGlvbiIsIl9nZXRDb25maWciLCJfaGFuZGxlU3dpcGUiLCJhYnNEZWx0YXgiLCJfYWRkRXZlbnRMaXN0ZW5lcnMiLCJfYWRkVG91Y2hFdmVudExpc3RlbmVycyIsInN0YXJ0IiwibW92ZSIsImVuZCIsImNsZWFyVGltZW91dCIsImUiLCJfa2V5ZG93biIsIl9nZXRJdGVtSW5kZXgiLCJfZ2V0SXRlbUJ5RGlyZWN0aW9uIiwiaXNOZXh0RGlyZWN0aW9uIiwiaXNQcmV2RGlyZWN0aW9uIiwibGFzdEl0ZW1JbmRleCIsImlzR29pbmdUb1dyYXAiLCJkZWx0YSIsIml0ZW1JbmRleCIsIl90cmlnZ2VyU2xpZGVFdmVudCIsInRhcmdldEluZGV4IiwiZnJvbUluZGV4Iiwic2xpZGVFdmVudCIsInJlbGF0ZWRUYXJnZXQiLCJmcm9tIiwiX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQiLCJpbmRpY2F0b3JzIiwibmV4dEluZGljYXRvciIsIl91cGRhdGVJbnRlcnZhbCIsImVsZW1lbnRJbnRlcnZhbCIsInBhcnNlSW50IiwiX3NsaWRlIiwiYWN0aXZlRWxlbWVudEluZGV4IiwibmV4dEVsZW1lbnQiLCJuZXh0RWxlbWVudEluZGV4IiwiaXNDeWNsaW5nIiwiZGlyZWN0aW9uYWxDbGFzc05hbWUiLCJvcmRlckNsYXNzTmFtZSIsImV2ZW50RGlyZWN0aW9uTmFtZSIsInNsaWRFdmVudCIsIl9jb25maWciLCJhY3Rpb24iLCJfZGF0YUFwaUNsaWNrSGFuZGxlciIsInRhcmdldCIsInNsaWRlSW5kZXgiLCJjYXJvdXNlbHMiLCIkY2Fyb3VzZWwiLCJFVkVOVF9TSE9XIiwiRVZFTlRfU0hPV04iLCJFVkVOVF9ISURFIiwiRVZFTlRfSElEREVOIiwiQ0xBU1NfTkFNRV9DT0xMQVBTRSIsIkNMQVNTX05BTUVfQ09MTEFQU0lORyIsIkNMQVNTX05BTUVfQ09MTEFQU0VEIiwiRElNRU5TSU9OX1dJRFRIIiwiRElNRU5TSU9OX0hFSUdIVCIsIlNFTEVDVE9SX0FDVElWRVMiLCJDb2xsYXBzZSIsInRvZ2dsZUxpc3QiLCJlbGVtIiwiZmlsdGVyRWxlbWVudCIsImZvdW5kRWxlbSIsInNob3ciLCJhY3RpdmVzIiwiYWN0aXZlc0RhdGEiLCJzdGFydEV2ZW50IiwiZGltZW5zaW9uIiwiY29tcGxldGUiLCJjYXBpdGFsaXplZERpbWVuc2lvbiIsInNjcm9sbFNpemUiLCJoaWRlIiwidHJpZ2dlckFycmF5TGVuZ3RoIiwidHJpZ2dlciIsIiRlbGVtIiwic2V0VHJhbnNpdGlvbmluZyIsIl9nZXREaW1lbnNpb24iLCJoYXNXaWR0aCIsIl9nZXRQYXJlbnQiLCJjaGlsZHJlbiIsIl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MiLCJpc09wZW4iLCJ0cmlnZ2VyQXJyYXkiLCJfZ2V0VGFyZ2V0RnJvbUVsZW1lbnQiLCIkdHJpZ2dlciIsInNlbGVjdG9ycyIsIiR0YXJnZXQiLCJFU0NBUEVfS0VZQ09ERSIsIlNQQUNFX0tFWUNPREUiLCJUQUJfS0VZQ09ERSIsIkFSUk9XX1VQX0tFWUNPREUiLCJBUlJPV19ET1dOX0tFWUNPREUiLCJSSUdIVF9NT1VTRV9CVVRUT05fV0hJQ0giLCJSRUdFWFBfS0VZRE9XTiIsIkVWRU5UX0NMSUNLIiwiRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSIsIkVWRU5UX0tFWVVQX0RBVEFfQVBJIiwiQ0xBU1NfTkFNRV9ESVNBQkxFRCIsIkNMQVNTX05BTUVfRFJPUFVQIiwiQ0xBU1NfTkFNRV9EUk9QUklHSFQiLCJDTEFTU19OQU1FX0RST1BMRUZUIiwiQ0xBU1NfTkFNRV9NRU5VUklHSFQiLCJDTEFTU19OQU1FX1BPU0lUSU9OX1NUQVRJQyIsIlNFTEVDVE9SX0ZPUk1fQ0hJTEQiLCJTRUxFQ1RPUl9NRU5VIiwiU0VMRUNUT1JfTkFWQkFSX05BViIsIlNFTEVDVE9SX1ZJU0lCTEVfSVRFTVMiLCJQTEFDRU1FTlRfVE9QIiwiUExBQ0VNRU5UX1RPUEVORCIsIlBMQUNFTUVOVF9CT1RUT00iLCJQTEFDRU1FTlRfQk9UVE9NRU5EIiwiUExBQ0VNRU5UX1JJR0hUIiwiUExBQ0VNRU5UX0xFRlQiLCJvZmZzZXQiLCJmbGlwIiwiYm91bmRhcnkiLCJyZWZlcmVuY2UiLCJkaXNwbGF5IiwicG9wcGVyQ29uZmlnIiwiRHJvcGRvd24iLCJpc0FjdGl2ZSIsInVzZVBvcHBlciIsIl9lbGVtZW50Iiwic2hvd0V2ZW50IiwiUG9wcGVyIiwicmVmZXJlbmNlRWxlbWVudCIsImhpZGVFdmVudCIsInVwZGF0ZSIsIl9nZXRNZW51RWxlbWVudCIsIl9nZXRQbGFjZW1lbnQiLCIkcGFyZW50RHJvcGRvd24iLCJwbGFjZW1lbnQiLCJfZGV0ZWN0TmF2YmFyIiwiX2dldE9mZnNldCIsIl9nZXRQb3BwZXJDb25maWciLCJtb2RpZmllcnMiLCJlbmFibGVkIiwicHJldmVudE92ZXJmbG93IiwiYm91bmRhcmllc0VsZW1lbnQiLCJfY2xlYXJNZW51cyIsInRvZ2dsZXMiLCJjb250ZXh0IiwiZHJvcGRvd25NZW51IiwiX2dldFBhcmVudEZyb21FbGVtZW50IiwiX2RhdGFBcGlLZXlkb3duSGFuZGxlciIsIml0ZW1zIiwiYmFja2Ryb3AiLCJmb2N1cyIsIkVWRU5UX0hJREVfUFJFVkVOVEVEIiwiRVZFTlRfRk9DVVNJTiIsIkVWRU5UX1JFU0laRSIsIkVWRU5UX0NMSUNLX0RJU01JU1MiLCJFVkVOVF9LRVlET1dOX0RJU01JU1MiLCJFVkVOVF9NT1VTRVVQX0RJU01JU1MiLCJFVkVOVF9NT1VTRURPV05fRElTTUlTUyIsIkNMQVNTX05BTUVfU0NST0xMQUJMRSIsIkNMQVNTX05BTUVfU0NST0xMQkFSX01FQVNVUkVSIiwiQ0xBU1NfTkFNRV9CQUNLRFJPUCIsIkNMQVNTX05BTUVfT1BFTiIsIkNMQVNTX05BTUVfU1RBVElDIiwiU0VMRUNUT1JfRElBTE9HIiwiU0VMRUNUT1JfTU9EQUxfQk9EWSIsIlNFTEVDVE9SX0RBVEFfRElTTUlTUyIsIlNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQiLCJTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCIsIk1vZGFsIiwidHJhbnNpdGlvbiIsImhhbmRsZVVwZGF0ZSIsIl90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uIiwiaGlkZUV2ZW50UHJldmVudGVkIiwiaXNNb2RhbE92ZXJmbG93aW5nIiwibW9kYWxUcmFuc2l0aW9uRHVyYXRpb24iLCJfc2hvd0VsZW1lbnQiLCJtb2RhbEJvZHkiLCJOb2RlIiwic2hvd25FdmVudCIsInRyYW5zaXRpb25Db21wbGV0ZSIsIl9lbmZvcmNlRm9jdXMiLCJfc2V0RXNjYXBlRXZlbnQiLCJfc2V0UmVzaXplRXZlbnQiLCJfaGlkZU1vZGFsIiwiX3JlbW92ZUJhY2tkcm9wIiwiX3Nob3dCYWNrZHJvcCIsImFuaW1hdGUiLCJjYWxsYmFjayIsImJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uIiwiY2FsbGJhY2tSZW1vdmUiLCJfYWRqdXN0RGlhbG9nIiwiX3Jlc2V0QWRqdXN0bWVudHMiLCJfY2hlY2tTY3JvbGxiYXIiLCJyZWN0IiwiX3NldFNjcm9sbGJhciIsImZpeGVkQ29udGVudCIsInN0aWNreUNvbnRlbnQiLCJhY3R1YWxQYWRkaW5nIiwiY2FsY3VsYXRlZFBhZGRpbmciLCJhY3R1YWxNYXJnaW4iLCJjYWxjdWxhdGVkTWFyZ2luIiwiX3Jlc2V0U2Nyb2xsYmFyIiwicGFkZGluZyIsImVsZW1lbnRzIiwibWFyZ2luIiwiX2dldFNjcm9sbGJhcldpZHRoIiwic2Nyb2xsRGl2Iiwic2Nyb2xsYmFyV2lkdGgiLCJ1cmlBdHRycyIsIkFSSUFfQVRUUklCVVRFX1BBVFRFUk4iLCJEZWZhdWx0V2hpdGVsaXN0IiwiYSIsImFyZWEiLCJiIiwiYnIiLCJjb2wiLCJjb2RlIiwiZGl2IiwiZW0iLCJociIsImgxIiwiaDIiLCJoMyIsImg0IiwiaDUiLCJoNiIsImltZyIsImxpIiwib2wiLCJwIiwicHJlIiwicyIsInNtYWxsIiwic3BhbiIsInN1YiIsInN1cCIsInN0cm9uZyIsInUiLCJ1bCIsIlNBRkVfVVJMX1BBVFRFUk4iLCJEQVRBX1VSTF9QQVRURVJOIiwiYXR0ck5hbWUiLCJhdHRyIiwiYWxsb3dlZEF0dHJpYnV0ZUxpc3QiLCJyZWdFeHAiLCJhdHRyUmVnZXgiLCJ1bnNhZmVIdG1sIiwic2FuaXRpemVGbiIsImRvbVBhcnNlciIsImNyZWF0ZWREb2N1bWVudCIsIndoaXRlbGlzdEtleXMiLCJlbCIsImVsTmFtZSIsImF0dHJpYnV0ZUxpc3QiLCJ3aGl0ZWxpc3RlZEF0dHJpYnV0ZXMiLCJ3aGl0ZUxpc3QiLCJhbGxvd2VkQXR0cmlidXRlIiwiQ0xBU1NfUFJFRklYIiwiQlNDTFNfUFJFRklYX1JFR0VYIiwiRElTQUxMT1dFRF9BVFRSSUJVVEVTIiwiYW5pbWF0aW9uIiwidGVtcGxhdGUiLCJ0aXRsZSIsImRlbGF5IiwiaHRtbCIsImNvbnRhaW5lciIsImZhbGxiYWNrUGxhY2VtZW50IiwiY3VzdG9tQ2xhc3MiLCJzYW5pdGl6ZSIsIkF0dGFjaG1lbnRNYXAiLCJBVVRPIiwiVE9QIiwiUklHSFQiLCJCT1RUT00iLCJMRUZUIiwiSE9WRVJfU1RBVEVfU0hPVyIsIkhPVkVSX1NUQVRFX09VVCIsIkV2ZW50IiwiSElERSIsIkhJRERFTiIsIlNIT1ciLCJTSE9XTiIsIklOU0VSVEVEIiwiQ0xJQ0siLCJGT0NVU0lOIiwiRk9DVVNPVVQiLCJNT1VTRUVOVEVSIiwiTU9VU0VMRUFWRSIsIlNFTEVDVE9SX1RPT0xUSVBfSU5ORVIiLCJTRUxFQ1RPUl9BUlJPVyIsIlRSSUdHRVJfSE9WRVIiLCJUUklHR0VSX0ZPQ1VTIiwiVFJJR0dFUl9DTElDSyIsIlRSSUdHRVJfTUFOVUFMIiwiVG9vbHRpcCIsImVuYWJsZSIsImRpc2FibGUiLCJ0b2dnbGVFbmFibGVkIiwiZGF0YUtleSIsInNoYWRvd1Jvb3QiLCJpc0luVGhlRG9tIiwidGlwIiwidGlwSWQiLCJhdHRhY2htZW50IiwicHJldkhvdmVyU3RhdGUiLCJpc1dpdGhDb250ZW50IiwiYWRkQXR0YWNobWVudENsYXNzIiwiZ2V0VGlwRWxlbWVudCIsInNldENvbnRlbnQiLCJzZXRFbGVtZW50Q29udGVudCIsImNvbnRlbnQiLCJzYW5pdGl6ZUh0bWwiLCJnZXRUaXRsZSIsImRlZmF1bHRCc0NvbmZpZyIsImJlaGF2aW9yIiwiYXJyb3ciLCJvbkNyZWF0ZSIsIm9uVXBkYXRlIiwiX2dldENvbnRhaW5lciIsIl9nZXRBdHRhY2htZW50IiwiX3NldExpc3RlbmVycyIsInRyaWdnZXJzIiwiZXZlbnRJbiIsImV2ZW50T3V0IiwiX2ZpeFRpdGxlIiwidGl0bGVUeXBlIiwiX2VudGVyIiwiX2xlYXZlIiwiX2lzV2l0aEFjdGl2ZVRyaWdnZXIiLCJkYXRhQXR0cmlidXRlcyIsIl9nZXREZWxlZ2F0ZUNvbmZpZyIsIl9jbGVhblRpcENsYXNzIiwiJHRpcCIsInRhYkNsYXNzIiwiX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZSIsInBvcHBlckRhdGEiLCJfZml4VHJhbnNpdGlvbiIsImluaXRDb25maWdBbmltYXRpb24iLCJTRUxFQ1RPUl9USVRMRSIsIlNFTEVDVE9SX0NPTlRFTlQiLCJQb3BvdmVyIiwiX2dldENvbnRlbnQiLCJtZXRob2QiLCJFVkVOVF9BQ1RJVkFURSIsIkVWRU5UX1NDUk9MTCIsIkNMQVNTX05BTUVfRFJPUERPV05fSVRFTSIsIlNFTEVDVE9SX0RBVEFfU1BZIiwiU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVAiLCJTRUxFQ1RPUl9OQVZfTElOS1MiLCJTRUxFQ1RPUl9OQVZfSVRFTVMiLCJTRUxFQ1RPUl9MSVNUX0lURU1TIiwiU0VMRUNUT1JfRFJPUERPV04iLCJTRUxFQ1RPUl9EUk9QRE9XTl9JVEVNUyIsIlNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSIsIk1FVEhPRF9PRkZTRVQiLCJNRVRIT0RfUE9TSVRJT04iLCJTY3JvbGxTcHkiLCJyZWZyZXNoIiwiYXV0b01ldGhvZCIsIm9mZnNldE1ldGhvZCIsIm9mZnNldEJhc2UiLCJ0YXJnZXRzIiwidGFyZ2V0U2VsZWN0b3IiLCJ0YXJnZXRCQ1IiLCJpdGVtIiwiaWQiLCJfZ2V0U2Nyb2xsVG9wIiwiX2dldFNjcm9sbEhlaWdodCIsIl9nZXRPZmZzZXRIZWlnaHQiLCJfcHJvY2VzcyIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsIm1heFNjcm9sbCIsImlzQWN0aXZlVGFyZ2V0IiwiX2FjdGl2YXRlIiwicXVlcmllcyIsIiRsaW5rIiwiX2NsZWFyIiwibm9kZSIsInNjcm9sbFNweXMiLCJzY3JvbGxTcHlzTGVuZ3RoIiwiJHNweSIsIkNMQVNTX05BTUVfRFJPUERPV05fTUVOVSIsIlNFTEVDVE9SX0FDVElWRV9VTCIsIlNFTEVDVE9SX0RST1BET1dOX0FDVElWRV9DSElMRCIsIlRhYiIsImxpc3RFbGVtZW50IiwiaXRlbVNlbGVjdG9yIiwicHJldmlvdXMiLCJoaWRkZW5FdmVudCIsImFjdGl2ZUVsZW1lbnRzIiwiYWN0aXZlIiwiaXNUcmFuc2l0aW9uaW5nIiwiX3RyYW5zaXRpb25Db21wbGV0ZSIsImRyb3Bkb3duQ2hpbGQiLCJkcm9wZG93bkVsZW1lbnQiLCJkcm9wZG93blRvZ2dsZUxpc3QiLCIkdGhpcyIsIkNMQVNTX05BTUVfSElERSIsIkNMQVNTX05BTUVfU0hPV0lORyIsImF1dG9oaWRlIiwiVG9hc3QiLCJfY2xvc2UiLCJfY2xlYXJUaW1lb3V0IiwidCIsIm4iLCJtb2R1bGUiLCJleHBvcnRzIiwibGVuZ3RoIiwiciIsIm8iLCJwdXNoIiwiYXJndW1lbnRzIiwiUHJvbWlzZSIsIkEiLCJyZWNhbGN1bGF0ZSIsIm9wdGlvbnMiLCJyZXNwb25zaXZlT3B0aW9ucyIsImtleXMiLCJkb2NXaWR0aCIsImJyZWFrQXQiLCJPIiwidXNlQ29udGFpbmVyRm9yQnJlYWtwb2ludHMiLCJjbGllbnRXaWR0aCIsImlubmVyV2lkdGgiLCJjb2x1bW5zIiwieCIsInkiLCJtb2JpbGVGaXJzdCIsImMiLCJyZXBsYWNlIiwibCIsInJvd3MiLCJ2Iiwic3R5bGUiLCJoZWlnaHQiLCJNIiwib2Zmc2V0SGVpZ2h0IiwiaXNOYU4iLCJmb3JFYWNoIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiY29scyIsImRhdGFzZXQiLCJtYWN5Q29tcGxldGUiLCJ0bXBSb3dzIiwiZiIsImxhc3Rjb2wiLCJDIiwiaCIsIm5vZGVOYW1lIiwiYnlDc3MiLCJzcGxpdCIsIlJlZ0V4cCIsInRlc3QiLCJwcm90b3R5cGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInN1YnN0cmluZyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZ2V0RWxlbWVudEJ5SWQiLCJtIiwicnVubmluZyIsImV2ZW50cyIsImFkZCIsInJ1biIsInNoaWZ0IiwiQXJyYXkiLCJpc0FycmF5IiwiY2xlYXIiLCJkIiwiaW5zdGFuY2UiLCJvbiIsImVtaXQiLCJnIiwibmF0dXJhbEhlaWdodCIsIm5hdHVyYWxXaWR0aCIsIndpZHRoIiwiRSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0aGVuIiwiY29uc3RhbnRzIiwiRVZFTlRfSU1BR0VfTE9BRCIsImNhdGNoIiwiRVZFTlRfSU1BR0VfRVJST1IiLCJ3IiwiYWxsIiwiRVZFTlRfSU1BR0VfQ09NUExFVEUiLCJJIiwicXVldWUiLCJOIiwiZGVidWciLCJjb25zb2xlIiwiZXJyb3IiLCJUIiwicmVzaXplciIsIkwiLCJ1c2VPd25JbWFnZUxvYWRlciIsIndhaXRGb3JJbWFnZXMiLCJFVkVOVF9JTklUSUFMSVpFRCIsIl8iLCJ0b1N0cmluZyIsImNhbGwiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsIlYiLCJmaWx0ZXIiLCJvZmZzZXRQYXJlbnQiLCJ0cnVlT3JkZXIiLCJFVkVOVF9SRUNBTENVTEFURUQiLCJSIiwiYXNzaWduIiwiaGFzT3duUHJvcGVydHkiLCJrIiwidXNlSW1hZ2VMb2FkZXIiLCJvbkluaXQiLCJjYW5jZWxMZWdhY3kiLCJjcmVhdGVFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsImZsb29yIiwicmFuZG9tIiwiYXBwbHkiLCJyZW1vdmVBdHRyaWJ1dGUiLCJFbGVtZW50IiwicSIsImluaXQiLCJ3YXJuIiwicmVjYWxjdWxhdGVPbkltYWdlTG9hZCIsInJ1bk9uSW1hZ2VMb2FkIiwicmVtb3ZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlSW5pdCIsInRpbWVvdXREdXJhdGlvbiIsImxvbmdlclRpbWVvdXRCcm93c2VycyIsImlzQnJvd3NlciIsInNjaGVkdWxlZCIsInN1cHBvcnRzTWljcm9UYXNrcyIsImdldFR5cGUiLCJmdW5jdGlvblRvQ2hlY2siLCJjc3MiLCJwcm9wZXJ0eSIsImdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSIsIm92ZXJmbG93Iiwib3ZlcmZsb3dYIiwib3ZlcmZsb3dZIiwiZ2V0U2Nyb2xsUGFyZW50IiwiZ2V0UGFyZW50Tm9kZSIsImlzSUUxMSIsImlzSUUxMCIsIm5vT2Zmc2V0UGFyZW50IiwiaXNJRSIsImdldE9mZnNldFBhcmVudCIsImdldFJvb3QiLCJlbGVtZW50MSIsImVsZW1lbnQyIiwib3JkZXIiLCJyYW5nZSIsImNvbW1vbkFuY2VzdG9yQ29udGFpbmVyIiwiaXNPZmZzZXRDb250YWluZXIiLCJlbGVtZW50MXJvb3QiLCJmaW5kQ29tbW9uT2Zmc2V0UGFyZW50Iiwic2lkZSIsInVwcGVyU2lkZSIsInNjcm9sbGluZ0VsZW1lbnQiLCJzdWJ0cmFjdCIsImdldFNjcm9sbCIsInNjcm9sbExlZnQiLCJtb2RpZmllciIsInNpZGVBIiwiYXhpcyIsInNpZGVCIiwic3R5bGVzIiwiYm9keSIsImNvbXB1dGVkU3R5bGUiLCJnZXRTaXplIiwib2Zmc2V0cyIsInJlc3VsdCIsInNpemVzIiwiZ2V0V2luZG93U2l6ZXMiLCJob3JpelNjcm9sbGJhciIsInZlcnRTY3JvbGxiYXIiLCJnZXRCb3JkZXJzU2l6ZSIsImdldENsaWVudFJlY3QiLCJmaXhlZFBvc2l0aW9uIiwicnVuSXNJRSIsImlzSFRNTCIsImNoaWxkcmVuUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhcmVudFJlY3QiLCJzY3JvbGxQYXJlbnQiLCJib3JkZXJUb3BXaWR0aCIsImJvcmRlckxlZnRXaWR0aCIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJpbmNsdWRlU2Nyb2xsIiwiZXhjbHVkZVNjcm9sbCIsInJlbGF0aXZlT2Zmc2V0IiwiZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlIiwicGFyZW50Tm9kZSIsImlzRml4ZWQiLCJib3VuZGFyaWVzIiwiZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudCIsImdldFJlZmVyZW5jZU5vZGUiLCJnZXRWaWV3cG9ydE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJ0Yml0cmFyeU5vZGUiLCJib3VuZGFyaWVzTm9kZSIsInBvcHBlciIsImlzUGFkZGluZ051bWJlciIsImdldEJvdW5kYXJpZXMiLCJyZWN0cyIsInJlZlJlY3QiLCJib3R0b20iLCJzb3J0ZWRBcmVhcyIsImdldEFyZWEiLCJmaWx0ZXJlZEFyZWFzIiwiY29tcHV0ZWRQbGFjZW1lbnQiLCJ2YXJpYXRpb24iLCJjb21tb25PZmZzZXRQYXJlbnQiLCJoYXNoIiwicmlnaHQiLCJwb3BwZXJSZWN0IiwiZ2V0T3V0ZXJTaXplcyIsInBvcHBlck9mZnNldHMiLCJpc0hvcml6IiwibWFpblNpZGUiLCJzZWNvbmRhcnlTaWRlIiwibWVhc3VyZW1lbnQiLCJzZWNvbmRhcnlNZWFzdXJlbWVudCIsInJlZmVyZW5jZU9mZnNldHMiLCJnZXRPcHBvc2l0ZVBsYWNlbWVudCIsImFyciIsImN1ciIsIm1hdGNoIiwibW9kaWZpZXJzVG9SdW4iLCJlbmRzIiwiZmluZEluZGV4IiwiZm4iLCJpc0Z1bmN0aW9uIiwiZ2V0UmVmZXJlbmNlT2Zmc2V0cyIsImNvbXB1dGVBdXRvUGxhY2VtZW50IiwiZ2V0UG9wcGVyT2Zmc2V0cyIsInJ1bk1vZGlmaWVycyIsIm5hbWUiLCJwcmVmaXhlcyIsInVwcGVyUHJvcCIsInRvQ2hlY2siLCJpc01vZGlmaWVyRW5hYmxlZCIsImdldFN1cHBvcnRlZFByb3BlcnR5TmFtZSIsIm93bmVyRG9jdW1lbnQiLCJpc0JvZHkiLCJwYXNzaXZlIiwic3RhdGUiLCJzY3JvbGxFbGVtZW50Iiwic2V0dXBFdmVudExpc3RlbmVycyIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwiaXNGaW5pdGUiLCJ1bml0IiwiaXNOdW1lcmljIiwiYXR0cmlidXRlcyIsInJvdW5kIiwibm9Sb3VuZCIsInJlZmVyZW5jZVdpZHRoIiwicG9wcGVyV2lkdGgiLCJpc1ZlcnRpY2FsIiwiaXNWYXJpYXRpb24iLCJzYW1lV2lkdGhQYXJpdHkiLCJib3RoT2RkV2lkdGgiLCJob3Jpem9udGFsVG9JbnRlZ2VyIiwidmVydGljYWxUb0ludGVnZXIiLCJpc0ZpcmVmb3giLCJsZWdhY3lHcHVBY2NlbGVyYXRpb25PcHRpb24iLCJncHVBY2NlbGVyYXRpb24iLCJvZmZzZXRQYXJlbnRSZWN0IiwiZ2V0Um91bmRlZE9mZnNldHMiLCJwcmVmaXhlZFByb3BlcnR5IiwiaW52ZXJ0VG9wIiwiaW52ZXJ0TGVmdCIsInJlcXVlc3RpbmciLCJpc1JlcXVpcmVkIiwicmVxdWVzdGVkIiwiaXNNb2RpZmllclJlcXVpcmVkIiwiYXJyb3dFbGVtZW50Iiwic2lkZUNhcGl0YWxpemVkIiwiYWx0U2lkZSIsIm9wU2lkZSIsImFycm93RWxlbWVudFNpemUiLCJjZW50ZXIiLCJwb3BwZXJNYXJnaW5TaWRlIiwicG9wcGVyQm9yZGVyU2lkZSIsInNpZGVWYWx1ZSIsInZhbGlkUGxhY2VtZW50cyIsInBsYWNlbWVudHMiLCJjb3VudGVyIiwiQkVIQVZJT1JTIiwicGxhY2VtZW50T3Bwb3NpdGUiLCJmbGlwT3JkZXIiLCJjbG9ja3dpc2UiLCJyZWZPZmZzZXRzIiwib3ZlcmxhcHNSZWYiLCJvdmVyZmxvd3NMZWZ0Iiwib3ZlcmZsb3dzUmlnaHQiLCJvdmVyZmxvd3NUb3AiLCJvdmVyZmxvd3NCb3R0b20iLCJvdmVyZmxvd3NCb3VuZGFyaWVzIiwiZmxpcHBlZFZhcmlhdGlvbkJ5UmVmIiwiZmxpcHBlZFZhcmlhdGlvbkJ5Q29udGVudCIsImZsaXBwZWRWYXJpYXRpb24iLCJnZXRPcHBvc2l0ZVZhcmlhdGlvbiIsInN0ciIsInNpemUiLCJ1c2VIZWlnaHQiLCJmcmFnbWVudHMiLCJmcmFnIiwiZGl2aWRlciIsInNwbGl0UmVnZXgiLCJvcHMiLCJtZXJnZVdpdGhQcmV2aW91cyIsInRvVmFsdWUiLCJvcCIsImluZGV4MiIsImJhc2VQbGFjZW1lbnQiLCJwYXJzZU9mZnNldCIsInRyYW5zZm9ybVByb3AiLCJwb3BwZXJTdHlsZXMiLCJ0cmFuc2Zvcm0iLCJjaGVjayIsInNoaWZ0dmFyaWF0aW9uIiwic2hpZnRPZmZzZXRzIiwiYm91bmQiLCJzdWJ0cmFjdExlbmd0aCIsImtlZXBUb2dldGhlciIsImlubmVyIiwidW5kZWZpbmVkIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZGVib3VuY2UiLCJtb2RpZmllck9wdGlvbnMiLCJldmVudHNFbmFibGVkIiwiZGVzdHJveSIsImVuYWJsZUV2ZW50TGlzdGVuZXJzIiwiZGlzYWJsZUV2ZW50TGlzdGVuZXJzIiwiVXRpbHMiLCJQb3BwZXJVdGlscyIsIkRlZmF1bHRzIiwiRnVuY3Rpb24iLCJqUXVlcnkiLCJzbGlkZVRvZ2dsZSIsImV2IiwiYnVuZGxlciIsIm1hY3kiLCJoYXNDbGFzcyIsInRvZ2dsZUNsYXNzIiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJmaW5kIiwib25zY3JvbGwiLCJteUZ1bmN0aW9uIiwid2luU2Nyb2xsIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsZWQiLCJjYWxjVGltZSIsImN1cnJlbnRfdGltZSIsIkRhdGUiLCJ1dGMiLCJnZXRUaW1lIiwibmQiLCJzdHJpbmdfb2ZmZXNldCIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXkiLCJnZXREYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwiaG91ciIsImdldEhvdXJzIiwibWludXRlIiwiZ2V0TWludXRlcyIsImFwcGVuZExlYWRpbmdaZXJvZXMiLCJlYWNoIiwidGV4dCIsInBhcnNlIiwiaHJzX29mZnNldCIsImdldFRpbWV6b25lT2Zmc2V0IiwibmV3X3RpbWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFD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RCxDQUFwRCxHQUE4RCxHQUE5RCxHQUFvRUksSUFBcEUsR0FBMkUsR0FBM0UsR0FBaUZNLG1CQUFtQixDQUFDSixJQUFELENBQXBHLEdBQTZHLEdBQTdHLEdBQW1ISSxtQkFBbUIsQ0FBQ0YsTUFBRCxDQUF0SSxHQUFpSlQsY0FBeEo7QUFDRixHQXhCZ0IsQ0EwQmpCOzs7QUFDQSxXQUFTVyxtQkFBVCxDQUE2QnJYLENBQTdCLEVBQWdDO0FBQzdCLFFBQUlBLENBQUMsSUFBSSxDQUFULEVBQVk7QUFDVCxhQUFPLE1BQU1BLENBQWI7QUFDRjs7QUFDRCxXQUFPQSxDQUFQO0FBQ0Y7O0FBRUQzaUIsR0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JpNkIsSUFBcEIsQ0FBeUIsWUFBWTtBQUNsQyxRQUFJakIsWUFBWSxHQUFHaDVCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWs2QixJQUFSLEVBQW5CLENBRGtDLENBRWxDOztBQUNBLFFBQUlqQixJQUFJLENBQUNrQixLQUFMLENBQVduQixZQUFYLENBQUosRUFBOEI7QUFDM0I7QUFDQSxVQUFJb0IsVUFBVSxHQUFHLEVBQUUsSUFBSW5CLElBQUosR0FBV29CLGlCQUFYLEtBQWlDLEVBQW5DLENBQWpCO0FBQ0EsVUFBSUMsUUFBUSxHQUFHdkIsUUFBUSxDQUFDcUIsVUFBRCxFQUFhcEIsWUFBYixDQUF2QjtBQUNBaDVCLE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWs2QixJQUFSLENBQWFJLFFBQWI7QUFDRjtBQUNILEdBVEQ7QUFVRixDQTVDSyxDQUFOLEM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBLHdCIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjYuMCk6IHV0aWwuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQcml2YXRlIFRyYW5zaXRpb25FbmQgSGVscGVyc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgVFJBTlNJVElPTl9FTkQgPSAndHJhbnNpdGlvbmVuZCdcbmNvbnN0IE1BWF9VSUQgPSAxMDAwMDAwXG5jb25zdCBNSUxMSVNFQ09ORFNfTVVMVElQTElFUiA9IDEwMDBcblxuLy8gU2hvdXRvdXQgQW5ndXNDcm9sbCAoaHR0cHM6Ly9nb28uZ2wvcHh3UUdwKVxuZnVuY3Rpb24gdG9UeXBlKG9iaikge1xuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGAke29ian1gXG4gIH1cblxuICByZXR1cm4ge30udG9TdHJpbmcuY2FsbChvYmopLm1hdGNoKC9cXHMoW2Etel0rKS9pKVsxXS50b0xvd2VyQ2FzZSgpXG59XG5cbmZ1bmN0aW9uIGdldFNwZWNpYWxUcmFuc2l0aW9uRW5kRXZlbnQoKSB7XG4gIHJldHVybiB7XG4gICAgYmluZFR5cGU6IFRSQU5TSVRJT05fRU5ELFxuICAgIGRlbGVnYXRlVHlwZTogVFJBTlNJVElPTl9FTkQsXG4gICAgaGFuZGxlKGV2ZW50KSB7XG4gICAgICBpZiAoJChldmVudC50YXJnZXQpLmlzKHRoaXMpKSB7XG4gICAgICAgIHJldHVybiBldmVudC5oYW5kbGVPYmouaGFuZGxlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcHJlZmVyLXJlc3QtcGFyYW1zXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdHJhbnNpdGlvbkVuZEVtdWxhdG9yKGR1cmF0aW9uKSB7XG4gIGxldCBjYWxsZWQgPSBmYWxzZVxuXG4gICQodGhpcykub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsICgpID0+IHtcbiAgICBjYWxsZWQgPSB0cnVlXG4gIH0pXG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgIFV0aWwudHJpZ2dlclRyYW5zaXRpb25FbmQodGhpcylcbiAgICB9XG4gIH0sIGR1cmF0aW9uKVxuXG4gIHJldHVybiB0aGlzXG59XG5cbmZ1bmN0aW9uIHNldFRyYW5zaXRpb25FbmRTdXBwb3J0KCkge1xuICAkLmZuLmVtdWxhdGVUcmFuc2l0aW9uRW5kID0gdHJhbnNpdGlvbkVuZEVtdWxhdG9yXG4gICQuZXZlbnQuc3BlY2lhbFtVdGlsLlRSQU5TSVRJT05fRU5EXSA9IGdldFNwZWNpYWxUcmFuc2l0aW9uRW5kRXZlbnQoKVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQdWJsaWMgVXRpbCBBcGlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgVXRpbCA9IHtcbiAgVFJBTlNJVElPTl9FTkQ6ICdic1RyYW5zaXRpb25FbmQnLFxuXG4gIGdldFVJRChwcmVmaXgpIHtcbiAgICBkbyB7XG4gICAgICBwcmVmaXggKz0gfn4oTWF0aC5yYW5kb20oKSAqIE1BWF9VSUQpIC8vIFwifn5cIiBhY3RzIGxpa2UgYSBmYXN0ZXIgTWF0aC5mbG9vcigpIGhlcmVcbiAgICB9IHdoaWxlIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmVmaXgpKVxuXG4gICAgcmV0dXJuIHByZWZpeFxuICB9LFxuXG4gIGdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgIGxldCBzZWxlY3RvciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpXG5cbiAgICBpZiAoIXNlbGVjdG9yIHx8IHNlbGVjdG9yID09PSAnIycpIHtcbiAgICAgIGNvbnN0IGhyZWZBdHRyID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgc2VsZWN0b3IgPSBocmVmQXR0ciAmJiBocmVmQXR0ciAhPT0gJyMnID8gaHJlZkF0dHIudHJpbSgpIDogJydcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpID8gc2VsZWN0b3IgOiBudWxsXG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH0sXG5cbiAgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuIDBcbiAgICB9XG5cbiAgICAvLyBHZXQgdHJhbnNpdGlvbi1kdXJhdGlvbiBvZiB0aGUgZWxlbWVudFxuICAgIGxldCB0cmFuc2l0aW9uRHVyYXRpb24gPSAkKGVsZW1lbnQpLmNzcygndHJhbnNpdGlvbi1kdXJhdGlvbicpXG4gICAgbGV0IHRyYW5zaXRpb25EZWxheSA9ICQoZWxlbWVudCkuY3NzKCd0cmFuc2l0aW9uLWRlbGF5JylcblxuICAgIGNvbnN0IGZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uID0gcGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgY29uc3QgZmxvYXRUcmFuc2l0aW9uRGVsYXkgPSBwYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSlcblxuICAgIC8vIFJldHVybiAwIGlmIGVsZW1lbnQgb3IgdHJhbnNpdGlvbiBkdXJhdGlvbiBpcyBub3QgZm91bmRcbiAgICBpZiAoIWZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uICYmICFmbG9hdFRyYW5zaXRpb25EZWxheSkge1xuICAgICAgcmV0dXJuIDBcbiAgICB9XG5cbiAgICAvLyBJZiBtdWx0aXBsZSBkdXJhdGlvbnMgYXJlIGRlZmluZWQsIHRha2UgdGhlIGZpcnN0XG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uID0gdHJhbnNpdGlvbkR1cmF0aW9uLnNwbGl0KCcsJylbMF1cbiAgICB0cmFuc2l0aW9uRGVsYXkgPSB0cmFuc2l0aW9uRGVsYXkuc3BsaXQoJywnKVswXVxuXG4gICAgcmV0dXJuIChwYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbikgKyBwYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSkpICogTUlMTElTRUNPTkRTX01VTFRJUExJRVJcbiAgfSxcblxuICByZWZsb3coZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50Lm9mZnNldEhlaWdodFxuICB9LFxuXG4gIHRyaWdnZXJUcmFuc2l0aW9uRW5kKGVsZW1lbnQpIHtcbiAgICAkKGVsZW1lbnQpLnRyaWdnZXIoVFJBTlNJVElPTl9FTkQpXG4gIH0sXG5cbiAgc3VwcG9ydHNUcmFuc2l0aW9uRW5kKCkge1xuICAgIHJldHVybiBCb29sZWFuKFRSQU5TSVRJT05fRU5EKVxuICB9LFxuXG4gIGlzRWxlbWVudChvYmopIHtcbiAgICByZXR1cm4gKG9ialswXSB8fCBvYmopLm5vZGVUeXBlXG4gIH0sXG5cbiAgdHlwZUNoZWNrQ29uZmlnKGNvbXBvbmVudE5hbWUsIGNvbmZpZywgY29uZmlnVHlwZXMpIHtcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIGNvbmZpZ1R5cGVzKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZ1R5cGVzLCBwcm9wZXJ0eSkpIHtcbiAgICAgICAgY29uc3QgZXhwZWN0ZWRUeXBlcyA9IGNvbmZpZ1R5cGVzW3Byb3BlcnR5XVxuICAgICAgICBjb25zdCB2YWx1ZSA9IGNvbmZpZ1twcm9wZXJ0eV1cbiAgICAgICAgY29uc3QgdmFsdWVUeXBlID0gdmFsdWUgJiYgVXRpbC5pc0VsZW1lbnQodmFsdWUpID9cbiAgICAgICAgICAnZWxlbWVudCcgOiB0b1R5cGUodmFsdWUpXG5cbiAgICAgICAgaWYgKCFuZXcgUmVnRXhwKGV4cGVjdGVkVHlwZXMpLnRlc3QodmFsdWVUeXBlKSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGAke2NvbXBvbmVudE5hbWUudG9VcHBlckNhc2UoKX06IGAgK1xuICAgICAgICAgICAgYE9wdGlvbiBcIiR7cHJvcGVydHl9XCIgcHJvdmlkZWQgdHlwZSBcIiR7dmFsdWVUeXBlfVwiIGAgK1xuICAgICAgICAgICAgYGJ1dCBleHBlY3RlZCB0eXBlIFwiJHtleHBlY3RlZFR5cGVzfVwiLmApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgZmluZFNoYWRvd1Jvb3QoZWxlbWVudCkge1xuICAgIGlmICghZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmF0dGFjaFNoYWRvdykge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICAvLyBDYW4gZmluZCB0aGUgc2hhZG93IHJvb3Qgb3RoZXJ3aXNlIGl0J2xsIHJldHVybiB0aGUgZG9jdW1lbnRcbiAgICBpZiAodHlwZW9mIGVsZW1lbnQuZ2V0Um9vdE5vZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IHJvb3QgPSBlbGVtZW50LmdldFJvb3ROb2RlKClcbiAgICAgIHJldHVybiByb290IGluc3RhbmNlb2YgU2hhZG93Um9vdCA/IHJvb3QgOiBudWxsXG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTaGFkb3dSb290KSB7XG4gICAgICByZXR1cm4gZWxlbWVudFxuICAgIH1cblxuICAgIC8vIHdoZW4gd2UgZG9uJ3QgZmluZCBhIHNoYWRvdyByb290XG4gICAgaWYgKCFlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIFV0aWwuZmluZFNoYWRvd1Jvb3QoZWxlbWVudC5wYXJlbnROb2RlKVxuICB9LFxuXG4gIGpRdWVyeURldGVjdGlvbigpIHtcbiAgICBpZiAodHlwZW9mICQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb290c3RyYXBcXCdzIEphdmFTY3JpcHQgcmVxdWlyZXMgalF1ZXJ5LiBqUXVlcnkgbXVzdCBiZSBpbmNsdWRlZCBiZWZvcmUgQm9vdHN0cmFwXFwncyBKYXZhU2NyaXB0LicpXG4gICAgfVxuXG4gICAgY29uc3QgdmVyc2lvbiA9ICQuZm4uanF1ZXJ5LnNwbGl0KCcgJylbMF0uc3BsaXQoJy4nKVxuICAgIGNvbnN0IG1pbk1ham9yID0gMVxuICAgIGNvbnN0IGx0TWFqb3IgPSAyXG4gICAgY29uc3QgbWluTWlub3IgPSA5XG4gICAgY29uc3QgbWluUGF0Y2ggPSAxXG4gICAgY29uc3QgbWF4TWFqb3IgPSA0XG5cbiAgICBpZiAodmVyc2lvblswXSA8IGx0TWFqb3IgJiYgdmVyc2lvblsxXSA8IG1pbk1pbm9yIHx8IHZlcnNpb25bMF0gPT09IG1pbk1ham9yICYmIHZlcnNpb25bMV0gPT09IG1pbk1pbm9yICYmIHZlcnNpb25bMl0gPCBtaW5QYXRjaCB8fCB2ZXJzaW9uWzBdID49IG1heE1ham9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgSmF2YVNjcmlwdCByZXF1aXJlcyBhdCBsZWFzdCBqUXVlcnkgdjEuOS4xIGJ1dCBsZXNzIHRoYW4gdjQuMC4wJylcbiAgICB9XG4gIH1cbn1cblxuVXRpbC5qUXVlcnlEZXRlY3Rpb24oKVxuc2V0VHJhbnNpdGlvbkVuZFN1cHBvcnQoKVxuXG5leHBvcnQgZGVmYXVsdCBVdGlsXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjYuMCk6IGFsZXJ0LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ2FsZXJ0J1xuY29uc3QgVkVSU0lPTiA9ICc0LjYuMCdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmFsZXJ0J1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5cbmNvbnN0IFNFTEVDVE9SX0RJU01JU1MgPSAnW2RhdGEtZGlzbWlzcz1cImFsZXJ0XCJdJ1xuXG5jb25zdCBFVkVOVF9DTE9TRSA9IGBjbG9zZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMT1NFRCA9IGBjbG9zZWQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9BTEVSVCA9ICdhbGVydCdcbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBBbGVydCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgY2xvc2UoZWxlbWVudCkge1xuICAgIGxldCByb290RWxlbWVudCA9IHRoaXMuX2VsZW1lbnRcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgcm9vdEVsZW1lbnQgPSB0aGlzLl9nZXRSb290RWxlbWVudChlbGVtZW50KVxuICAgIH1cblxuICAgIGNvbnN0IGN1c3RvbUV2ZW50ID0gdGhpcy5fdHJpZ2dlckNsb3NlRXZlbnQocm9vdEVsZW1lbnQpXG5cbiAgICBpZiAoY3VzdG9tRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX3JlbW92ZUVsZW1lbnQocm9vdEVsZW1lbnQpXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbFxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRSb290RWxlbWVudChlbGVtZW50KSB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudClcbiAgICBsZXQgcGFyZW50ID0gZmFsc2VcblxuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICB9XG5cbiAgICBpZiAoIXBhcmVudCkge1xuICAgICAgcGFyZW50ID0gJChlbGVtZW50KS5jbG9zZXN0KGAuJHtDTEFTU19OQU1FX0FMRVJUfWApWzBdXG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudFxuICB9XG5cbiAgX3RyaWdnZXJDbG9zZUV2ZW50KGVsZW1lbnQpIHtcbiAgICBjb25zdCBjbG9zZUV2ZW50ID0gJC5FdmVudChFVkVOVF9DTE9TRSlcblxuICAgICQoZWxlbWVudCkudHJpZ2dlcihjbG9zZUV2ZW50KVxuICAgIHJldHVybiBjbG9zZUV2ZW50XG4gIH1cblxuICBfcmVtb3ZlRWxlbWVudChlbGVtZW50KSB7XG4gICAgJChlbGVtZW50KS5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBpZiAoISQoZWxlbWVudCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9GQURFKSkge1xuICAgICAgdGhpcy5fZGVzdHJveUVsZW1lbnQoZWxlbWVudClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQoZWxlbWVudClcblxuICAgICQoZWxlbWVudClcbiAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgZXZlbnQgPT4gdGhpcy5fZGVzdHJveUVsZW1lbnQoZWxlbWVudCwgZXZlbnQpKVxuICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbilcbiAgfVxuXG4gIF9kZXN0cm95RWxlbWVudChlbGVtZW50KSB7XG4gICAgJChlbGVtZW50KVxuICAgICAgLmRldGFjaCgpXG4gICAgICAudHJpZ2dlcihFVkVOVF9DTE9TRUQpXG4gICAgICAucmVtb3ZlKClcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgJGVsZW1lbnQgPSAkKHRoaXMpXG4gICAgICBsZXQgZGF0YSA9ICRlbGVtZW50LmRhdGEoREFUQV9LRVkpXG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IEFsZXJ0KHRoaXMpXG4gICAgICAgICRlbGVtZW50LmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcgPT09ICdjbG9zZScpIHtcbiAgICAgICAgZGF0YVtjb25maWddKHRoaXMpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBfaGFuZGxlRGlzbWlzcyhhbGVydEluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIH1cblxuICAgICAgYWxlcnRJbnN0YW5jZS5jbG9zZSh0aGlzKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQoZG9jdW1lbnQpLm9uKFxuICBFVkVOVF9DTElDS19EQVRBX0FQSSxcbiAgU0VMRUNUT1JfRElTTUlTUyxcbiAgQWxlcnQuX2hhbmRsZURpc21pc3MobmV3IEFsZXJ0KCkpXG4pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQuZm5bTkFNRV0gPSBBbGVydC5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gQWxlcnRcbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gQWxlcnQuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbGVydFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC42LjApOiBidXR0b24uanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAnYnV0dG9uJ1xuY29uc3QgVkVSU0lPTiA9ICc0LjYuMCdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmJ1dHRvbidcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXVxuXG5jb25zdCBDTEFTU19OQU1FX0FDVElWRSA9ICdhY3RpdmUnXG5jb25zdCBDTEFTU19OQU1FX0JVVFRPTiA9ICdidG4nXG5jb25zdCBDTEFTU19OQU1FX0ZPQ1VTID0gJ2ZvY3VzJ1xuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRV9DQVJST1QgPSAnW2RhdGEtdG9nZ2xlXj1cImJ1dHRvblwiXSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFUyA9ICdbZGF0YS10b2dnbGU9XCJidXR0b25zXCJdJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtdG9nZ2xlPVwiYnV0dG9uXCJdJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEVTX0JVVFRPTlMgPSAnW2RhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiXSAuYnRuJ1xuY29uc3QgU0VMRUNUT1JfSU5QVVQgPSAnaW5wdXQ6bm90KFt0eXBlPVwiaGlkZGVuXCJdKSdcbmNvbnN0IFNFTEVDVE9SX0FDVElWRSA9ICcuYWN0aXZlJ1xuY29uc3QgU0VMRUNUT1JfQlVUVE9OID0gJy5idG4nXG5cbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuY29uc3QgRVZFTlRfRk9DVVNfQkxVUl9EQVRBX0FQSSA9IGBmb2N1cyR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYGJsdXIke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBCdXR0b24ge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLnNob3VsZEF2b2lkVHJpZ2dlckNoYW5nZSA9IGZhbHNlXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICB0b2dnbGUoKSB7XG4gICAgbGV0IHRyaWdnZXJDaGFuZ2VFdmVudCA9IHRydWVcbiAgICBsZXQgYWRkQXJpYVByZXNzZWQgPSB0cnVlXG4gICAgY29uc3Qgcm9vdEVsZW1lbnQgPSAkKHRoaXMuX2VsZW1lbnQpLmNsb3Nlc3QoU0VMRUNUT1JfREFUQV9UT0dHTEVTKVswXVxuXG4gICAgaWYgKHJvb3RFbGVtZW50KSB7XG4gICAgICBjb25zdCBpbnB1dCA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihTRUxFQ1RPUl9JTlBVVClcblxuICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgIGlmIChpbnB1dC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgICAgaWYgKGlucHV0LmNoZWNrZWQgJiYgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9BQ1RJVkUpKSB7XG4gICAgICAgICAgICB0cmlnZ2VyQ2hhbmdlRXZlbnQgPSBmYWxzZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBhY3RpdmVFbGVtZW50ID0gcm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihTRUxFQ1RPUl9BQ1RJVkUpXG5cbiAgICAgICAgICAgIGlmIChhY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICQoYWN0aXZlRWxlbWVudCkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRyaWdnZXJDaGFuZ2VFdmVudCkge1xuICAgICAgICAgIC8vIGlmIGl0J3Mgbm90IGEgcmFkaW8gYnV0dG9uIG9yIGNoZWNrYm94IGRvbid0IGFkZCBhIHBvaW50bGVzcy9pbnZhbGlkIGNoZWNrZWQgcHJvcGVydHkgdG8gdGhlIGlucHV0XG4gICAgICAgICAgaWYgKGlucHV0LnR5cGUgPT09ICdjaGVja2JveCcgfHwgaW5wdXQudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICAgICAgaW5wdXQuY2hlY2tlZCA9ICF0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0FDVElWRSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIXRoaXMuc2hvdWxkQXZvaWRUcmlnZ2VyQ2hhbmdlKSB7XG4gICAgICAgICAgICAkKGlucHV0KS50cmlnZ2VyKCdjaGFuZ2UnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0LmZvY3VzKClcbiAgICAgICAgYWRkQXJpYVByZXNzZWQgPSBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKHRoaXMuX2VsZW1lbnQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpIHx8IHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSkge1xuICAgICAgaWYgKGFkZEFyaWFQcmVzc2VkKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnLCAhdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9BQ1RJVkUpKVxuICAgICAgfVxuXG4gICAgICBpZiAodHJpZ2dlckNoYW5nZUV2ZW50KSB7XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkudG9nZ2xlQ2xhc3MoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpXG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGxcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZywgYXZvaWRUcmlnZ2VyQ2hhbmdlKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCAkZWxlbWVudCA9ICQodGhpcylcbiAgICAgIGxldCBkYXRhID0gJGVsZW1lbnQuZGF0YShEQVRBX0tFWSlcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgQnV0dG9uKHRoaXMpXG4gICAgICAgICRlbGVtZW50LmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGRhdGEuc2hvdWxkQXZvaWRUcmlnZ2VyQ2hhbmdlID0gYXZvaWRUcmlnZ2VyQ2hhbmdlXG5cbiAgICAgIGlmIChjb25maWcgPT09ICd0b2dnbGUnKSB7XG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQoZG9jdW1lbnQpXG4gIC5vbihFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEVfQ0FSUk9ULCBldmVudCA9PiB7XG4gICAgbGV0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldFxuICAgIGNvbnN0IGluaXRpYWxCdXR0b24gPSBidXR0b25cblxuICAgIGlmICghJChidXR0b24pLmhhc0NsYXNzKENMQVNTX05BTUVfQlVUVE9OKSkge1xuICAgICAgYnV0dG9uID0gJChidXR0b24pLmNsb3Nlc3QoU0VMRUNUT1JfQlVUVE9OKVswXVxuICAgIH1cblxuICAgIGlmICghYnV0dG9uIHx8IGJ1dHRvbi5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgfHwgYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKSAvLyB3b3JrIGFyb3VuZCBGaXJlZm94IGJ1ZyAjMTU0MDk5NVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbnB1dEJ0biA9IGJ1dHRvbi5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SX0lOUFVUKVxuXG4gICAgICBpZiAoaW5wdXRCdG4gJiYgKGlucHV0QnRuLmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSB8fCBpbnB1dEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgLy8gd29yayBhcm91bmQgRmlyZWZveCBidWcgIzE1NDA5OTVcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChpbml0aWFsQnV0dG9uLnRhZ05hbWUgPT09ICdJTlBVVCcgfHwgYnV0dG9uLnRhZ05hbWUgIT09ICdMQUJFTCcpIHtcbiAgICAgICAgQnV0dG9uLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKGJ1dHRvbiksICd0b2dnbGUnLCBpbml0aWFsQnV0dG9uLnRhZ05hbWUgPT09ICdJTlBVVCcpXG4gICAgICB9XG4gICAgfVxuICB9KVxuICAub24oRVZFTlRfRk9DVVNfQkxVUl9EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEVfQ0FSUk9ULCBldmVudCA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gJChldmVudC50YXJnZXQpLmNsb3Nlc3QoU0VMRUNUT1JfQlVUVE9OKVswXVxuICAgICQoYnV0dG9uKS50b2dnbGVDbGFzcyhDTEFTU19OQU1FX0ZPQ1VTLCAvXmZvY3VzKGluKT8kLy50ZXN0KGV2ZW50LnR5cGUpKVxuICB9KVxuXG4kKHdpbmRvdykub24oRVZFTlRfTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICAvLyBlbnN1cmUgY29ycmVjdCBhY3RpdmUgY2xhc3MgaXMgc2V0IHRvIG1hdGNoIHRoZSBjb250cm9scycgYWN0dWFsIHZhbHVlcy9zdGF0ZXNcblxuICAvLyBmaW5kIGFsbCBjaGVja2JveGVzL3JlYWRpbyBidXR0b25zIGluc2lkZSBkYXRhLXRvZ2dsZSBncm91cHNcbiAgbGV0IGJ1dHRvbnMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1JfREFUQV9UT0dHTEVTX0JVVFRPTlMpKVxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gYnV0dG9ucy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGJ1dHRvbnNbaV1cbiAgICBjb25zdCBpbnB1dCA9IGJ1dHRvbi5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SX0lOUFVUKVxuICAgIGlmIChpbnB1dC5jaGVja2VkIHx8IGlucHV0Lmhhc0F0dHJpYnV0ZSgnY2hlY2tlZCcpKSB7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcbiAgICB9IGVsc2Uge1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgfVxuICB9XG5cbiAgLy8gZmluZCBhbGwgYnV0dG9uIHRvZ2dsZXNcbiAgYnV0dG9ucyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTRUxFQ1RPUl9EQVRBX1RPR0dMRSkpXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBidXR0b25zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgYnV0dG9uID0gYnV0dG9uc1tpXVxuICAgIGlmIChidXR0b24uZ2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnKSA9PT0gJ3RydWUnKSB7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcbiAgICB9IGVsc2Uge1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgfVxuICB9XG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kLmZuW05BTUVdID0gQnV0dG9uLl9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBCdXR0b25cbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gQnV0dG9uLl9qUXVlcnlJbnRlcmZhY2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjYuMCk6IGNhcm91c2VsLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ2Nhcm91c2VsJ1xuY29uc3QgVkVSU0lPTiA9ICc0LjYuMCdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmNhcm91c2VsJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5jb25zdCBBUlJPV19MRUZUX0tFWUNPREUgPSAzNyAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciBsZWZ0IGFycm93IGtleVxuY29uc3QgQVJST1dfUklHSFRfS0VZQ09ERSA9IDM5IC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIHJpZ2h0IGFycm93IGtleVxuY29uc3QgVE9VQ0hFVkVOVF9DT01QQVRfV0FJVCA9IDUwMCAvLyBUaW1lIGZvciBtb3VzZSBjb21wYXQgZXZlbnRzIHRvIGZpcmUgYWZ0ZXIgdG91Y2hcbmNvbnN0IFNXSVBFX1RIUkVTSE9MRCA9IDQwXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGludGVydmFsOiA1MDAwLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgc2xpZGU6IGZhbHNlLFxuICBwYXVzZTogJ2hvdmVyJyxcbiAgd3JhcDogdHJ1ZSxcbiAgdG91Y2g6IHRydWVcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGludGVydmFsOiAnKG51bWJlcnxib29sZWFuKScsXG4gIGtleWJvYXJkOiAnYm9vbGVhbicsXG4gIHNsaWRlOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gIHBhdXNlOiAnKHN0cmluZ3xib29sZWFuKScsXG4gIHdyYXA6ICdib29sZWFuJyxcbiAgdG91Y2g6ICdib29sZWFuJ1xufVxuXG5jb25zdCBESVJFQ1RJT05fTkVYVCA9ICduZXh0J1xuY29uc3QgRElSRUNUSU9OX1BSRVYgPSAncHJldidcbmNvbnN0IERJUkVDVElPTl9MRUZUID0gJ2xlZnQnXG5jb25zdCBESVJFQ1RJT05fUklHSFQgPSAncmlnaHQnXG5cbmNvbnN0IEVWRU5UX1NMSURFID0gYHNsaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0xJRCA9IGBzbGlkJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfS0VZRE9XTiA9IGBrZXlkb3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VFTlRFUiA9IGBtb3VzZWVudGVyJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VMRUFWRSA9IGBtb3VzZWxlYXZlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfVE9VQ0hTVEFSVCA9IGB0b3VjaHN0YXJ0JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfVE9VQ0hNT1ZFID0gYHRvdWNobW92ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1RPVUNIRU5EID0gYHRvdWNoZW5kJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfUE9JTlRFUkRPV04gPSBgcG9pbnRlcmRvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9QT0lOVEVSVVAgPSBgcG9pbnRlcnVwJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfRFJBR19TVEFSVCA9IGBkcmFnc3RhcnQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9DQVJPVVNFTCA9ICdjYXJvdXNlbCdcbmNvbnN0IENMQVNTX05BTUVfQUNUSVZFID0gJ2FjdGl2ZSdcbmNvbnN0IENMQVNTX05BTUVfU0xJREUgPSAnc2xpZGUnXG5jb25zdCBDTEFTU19OQU1FX1JJR0hUID0gJ2Nhcm91c2VsLWl0ZW0tcmlnaHQnXG5jb25zdCBDTEFTU19OQU1FX0xFRlQgPSAnY2Fyb3VzZWwtaXRlbS1sZWZ0J1xuY29uc3QgQ0xBU1NfTkFNRV9ORVhUID0gJ2Nhcm91c2VsLWl0ZW0tbmV4dCdcbmNvbnN0IENMQVNTX05BTUVfUFJFViA9ICdjYXJvdXNlbC1pdGVtLXByZXYnXG5jb25zdCBDTEFTU19OQU1FX1BPSU5URVJfRVZFTlQgPSAncG9pbnRlci1ldmVudCdcblxuY29uc3QgU0VMRUNUT1JfQUNUSVZFID0gJy5hY3RpdmUnXG5jb25zdCBTRUxFQ1RPUl9BQ1RJVkVfSVRFTSA9ICcuYWN0aXZlLmNhcm91c2VsLWl0ZW0nXG5jb25zdCBTRUxFQ1RPUl9JVEVNID0gJy5jYXJvdXNlbC1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfSVRFTV9JTUcgPSAnLmNhcm91c2VsLWl0ZW0gaW1nJ1xuY29uc3QgU0VMRUNUT1JfTkVYVF9QUkVWID0gJy5jYXJvdXNlbC1pdGVtLW5leHQsIC5jYXJvdXNlbC1pdGVtLXByZXYnXG5jb25zdCBTRUxFQ1RPUl9JTkRJQ0FUT1JTID0gJy5jYXJvdXNlbC1pbmRpY2F0b3JzJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9TTElERSA9ICdbZGF0YS1zbGlkZV0sIFtkYXRhLXNsaWRlLXRvXSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfUklERSA9ICdbZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIl0nXG5cbmNvbnN0IFBvaW50ZXJUeXBlID0ge1xuICBUT1VDSDogJ3RvdWNoJyxcbiAgUEVOOiAncGVuJ1xufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbmNsYXNzIENhcm91c2VsIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgdGhpcy5faXRlbXMgPSBudWxsXG4gICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsXG4gICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IG51bGxcbiAgICB0aGlzLl9pc1BhdXNlZCA9IGZhbHNlXG4gICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2VcbiAgICB0aGlzLnRvdWNoVGltZW91dCA9IG51bGxcbiAgICB0aGlzLnRvdWNoU3RhcnRYID0gMFxuICAgIHRoaXMudG91Y2hEZWx0YVggPSAwXG5cbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JfSU5ESUNBVE9SUylcbiAgICB0aGlzLl90b3VjaFN1cHBvcnRlZCA9ICdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCB8fCBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAwXG4gICAgdGhpcy5fcG9pbnRlckV2ZW50ID0gQm9vbGVhbih3aW5kb3cuUG9pbnRlckV2ZW50IHx8IHdpbmRvdy5NU1BvaW50ZXJFdmVudClcblxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgbmV4dCgpIHtcbiAgICBpZiAoIXRoaXMuX2lzU2xpZGluZykge1xuICAgICAgdGhpcy5fc2xpZGUoRElSRUNUSU9OX05FWFQpXG4gICAgfVxuICB9XG5cbiAgbmV4dFdoZW5WaXNpYmxlKCkge1xuICAgIGNvbnN0ICRlbGVtZW50ID0gJCh0aGlzLl9lbGVtZW50KVxuICAgIC8vIERvbid0IGNhbGwgbmV4dCB3aGVuIHRoZSBwYWdlIGlzbid0IHZpc2libGVcbiAgICAvLyBvciB0aGUgY2Fyb3VzZWwgb3IgaXRzIHBhcmVudCBpc24ndCB2aXNpYmxlXG4gICAgaWYgKCFkb2N1bWVudC5oaWRkZW4gJiZcbiAgICAgICgkZWxlbWVudC5pcygnOnZpc2libGUnKSAmJiAkZWxlbWVudC5jc3MoJ3Zpc2liaWxpdHknKSAhPT0gJ2hpZGRlbicpKSB7XG4gICAgICB0aGlzLm5leHQoKVxuICAgIH1cbiAgfVxuXG4gIHByZXYoKSB7XG4gICAgaWYgKCF0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgIHRoaXMuX3NsaWRlKERJUkVDVElPTl9QUkVWKVxuICAgIH1cbiAgfVxuXG4gIHBhdXNlKGV2ZW50KSB7XG4gICAgaWYgKCFldmVudCkge1xuICAgICAgdGhpcy5faXNQYXVzZWQgPSB0cnVlXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihTRUxFQ1RPUl9ORVhUX1BSRVYpKSB7XG4gICAgICBVdGlsLnRyaWdnZXJUcmFuc2l0aW9uRW5kKHRoaXMuX2VsZW1lbnQpXG4gICAgICB0aGlzLmN5Y2xlKHRydWUpXG4gICAgfVxuXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbClcbiAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGxcbiAgfVxuXG4gIGN5Y2xlKGV2ZW50KSB7XG4gICAgaWYgKCFldmVudCkge1xuICAgICAgdGhpcy5faXNQYXVzZWQgPSBmYWxzZVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbnRlcnZhbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbClcbiAgICAgIHRoaXMuX2ludGVydmFsID0gbnVsbFxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcuaW50ZXJ2YWwgJiYgIXRoaXMuX2lzUGF1c2VkKSB7XG4gICAgICB0aGlzLl91cGRhdGVJbnRlcnZhbCgpXG5cbiAgICAgIHRoaXMuX2ludGVydmFsID0gc2V0SW50ZXJ2YWwoXG4gICAgICAgIChkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPyB0aGlzLm5leHRXaGVuVmlzaWJsZSA6IHRoaXMubmV4dCkuYmluZCh0aGlzKSxcbiAgICAgICAgdGhpcy5fY29uZmlnLmludGVydmFsXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgdG8oaW5kZXgpIHtcbiAgICB0aGlzLl9hY3RpdmVFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SX0FDVElWRV9JVEVNKVxuXG4gICAgY29uc3QgYWN0aXZlSW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgodGhpcy5fYWN0aXZlRWxlbWVudClcblxuICAgIGlmIChpbmRleCA+IHRoaXMuX2l0ZW1zLmxlbmd0aCAtIDEgfHwgaW5kZXggPCAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uZShFVkVOVF9TTElELCAoKSA9PiB0aGlzLnRvKGluZGV4KSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChhY3RpdmVJbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgIHRoaXMucGF1c2UoKVxuICAgICAgdGhpcy5jeWNsZSgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkaXJlY3Rpb24gPSBpbmRleCA+IGFjdGl2ZUluZGV4ID9cbiAgICAgIERJUkVDVElPTl9ORVhUIDpcbiAgICAgIERJUkVDVElPTl9QUkVWXG5cbiAgICB0aGlzLl9zbGlkZShkaXJlY3Rpb24sIHRoaXMuX2l0ZW1zW2luZGV4XSlcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoRVZFTlRfS0VZKVxuICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcblxuICAgIHRoaXMuX2l0ZW1zID0gbnVsbFxuICAgIHRoaXMuX2NvbmZpZyA9IG51bGxcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbFxuICAgIHRoaXMuX2ludGVydmFsID0gbnVsbFxuICAgIHRoaXMuX2lzUGF1c2VkID0gbnVsbFxuICAgIHRoaXMuX2lzU2xpZGluZyA9IG51bGxcbiAgICB0aGlzLl9hY3RpdmVFbGVtZW50ID0gbnVsbFxuICAgIHRoaXMuX2luZGljYXRvcnNFbGVtZW50ID0gbnVsbFxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLmNvbmZpZ1xuICAgIH1cbiAgICBVdGlsLnR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIERlZmF1bHRUeXBlKVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9oYW5kbGVTd2lwZSgpIHtcbiAgICBjb25zdCBhYnNEZWx0YXggPSBNYXRoLmFicyh0aGlzLnRvdWNoRGVsdGFYKVxuXG4gICAgaWYgKGFic0RlbHRheCA8PSBTV0lQRV9USFJFU0hPTEQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IGFic0RlbHRheCAvIHRoaXMudG91Y2hEZWx0YVhcblxuICAgIHRoaXMudG91Y2hEZWx0YVggPSAwXG5cbiAgICAvLyBzd2lwZSBsZWZ0XG4gICAgaWYgKGRpcmVjdGlvbiA+IDApIHtcbiAgICAgIHRoaXMucHJldigpXG4gICAgfVxuXG4gICAgLy8gc3dpcGUgcmlnaHRcbiAgICBpZiAoZGlyZWN0aW9uIDwgMCkge1xuICAgICAgdGhpcy5uZXh0KClcbiAgICB9XG4gIH1cblxuICBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKHRoaXMuX2NvbmZpZy5rZXlib2FyZCkge1xuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFVkVOVF9LRVlET1dOLCBldmVudCA9PiB0aGlzLl9rZXlkb3duKGV2ZW50KSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnBhdXNlID09PSAnaG92ZXInKSB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAgIC5vbihFVkVOVF9NT1VTRUVOVEVSLCBldmVudCA9PiB0aGlzLnBhdXNlKGV2ZW50KSlcbiAgICAgICAgLm9uKEVWRU5UX01PVVNFTEVBVkUsIGV2ZW50ID0+IHRoaXMuY3ljbGUoZXZlbnQpKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcudG91Y2gpIHtcbiAgICAgIHRoaXMuX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMoKVxuICAgIH1cbiAgfVxuXG4gIF9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGlmICghdGhpcy5fdG91Y2hTdXBwb3J0ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0ID0gZXZlbnQgPT4ge1xuICAgICAgaWYgKHRoaXMuX3BvaW50ZXJFdmVudCAmJiBQb2ludGVyVHlwZVtldmVudC5vcmlnaW5hbEV2ZW50LnBvaW50ZXJUeXBlLnRvVXBwZXJDYXNlKCldKSB7XG4gICAgICAgIHRoaXMudG91Y2hTdGFydFggPSBldmVudC5vcmlnaW5hbEV2ZW50LmNsaWVudFhcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX3BvaW50ZXJFdmVudCkge1xuICAgICAgICB0aGlzLnRvdWNoU3RhcnRYID0gZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdLmNsaWVudFhcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBtb3ZlID0gZXZlbnQgPT4ge1xuICAgICAgLy8gZW5zdXJlIHN3aXBpbmcgd2l0aCBvbmUgdG91Y2ggYW5kIG5vdCBwaW5jaGluZ1xuICAgICAgaWYgKGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcyAmJiBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMubGVuZ3RoID4gMSkge1xuICAgICAgICB0aGlzLnRvdWNoRGVsdGFYID0gMFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50b3VjaERlbHRhWCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlc1swXS5jbGllbnRYIC0gdGhpcy50b3VjaFN0YXJ0WFxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGVuZCA9IGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLl9wb2ludGVyRXZlbnQgJiYgUG9pbnRlclR5cGVbZXZlbnQub3JpZ2luYWxFdmVudC5wb2ludGVyVHlwZS50b1VwcGVyQ2FzZSgpXSkge1xuICAgICAgICB0aGlzLnRvdWNoRGVsdGFYID0gZXZlbnQub3JpZ2luYWxFdmVudC5jbGllbnRYIC0gdGhpcy50b3VjaFN0YXJ0WFxuICAgICAgfVxuXG4gICAgICB0aGlzLl9oYW5kbGVTd2lwZSgpXG4gICAgICBpZiAodGhpcy5fY29uZmlnLnBhdXNlID09PSAnaG92ZXInKSB7XG4gICAgICAgIC8vIElmIGl0J3MgYSB0b3VjaC1lbmFibGVkIGRldmljZSwgbW91c2VlbnRlci9sZWF2ZSBhcmUgZmlyZWQgYXNcbiAgICAgICAgLy8gcGFydCBvZiB0aGUgbW91c2UgY29tcGF0aWJpbGl0eSBldmVudHMgb24gZmlyc3QgdGFwIC0gdGhlIGNhcm91c2VsXG4gICAgICAgIC8vIHdvdWxkIHN0b3AgY3ljbGluZyB1bnRpbCB1c2VyIHRhcHBlZCBvdXQgb2YgaXQ7XG4gICAgICAgIC8vIGhlcmUsIHdlIGxpc3RlbiBmb3IgdG91Y2hlbmQsIGV4cGxpY2l0bHkgcGF1c2UgdGhlIGNhcm91c2VsXG4gICAgICAgIC8vIChhcyBpZiBpdCdzIHRoZSBzZWNvbmQgdGltZSB3ZSB0YXAgb24gaXQsIG1vdXNlZW50ZXIgY29tcGF0IGV2ZW50XG4gICAgICAgIC8vIGlzIE5PVCBmaXJlZCkgYW5kIGFmdGVyIGEgdGltZW91dCAodG8gYWxsb3cgZm9yIG1vdXNlIGNvbXBhdGliaWxpdHlcbiAgICAgICAgLy8gZXZlbnRzIHRvIGZpcmUpIHdlIGV4cGxpY2l0bHkgcmVzdGFydCBjeWNsaW5nXG5cbiAgICAgICAgdGhpcy5wYXVzZSgpXG4gICAgICAgIGlmICh0aGlzLnRvdWNoVGltZW91dCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRvdWNoVGltZW91dClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudG91Y2hUaW1lb3V0ID0gc2V0VGltZW91dChldmVudCA9PiB0aGlzLmN5Y2xlKGV2ZW50KSwgVE9VQ0hFVkVOVF9DT01QQVRfV0FJVCArIHRoaXMuX2NvbmZpZy5pbnRlcnZhbClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAkKHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvckFsbChTRUxFQ1RPUl9JVEVNX0lNRykpXG4gICAgICAub24oRVZFTlRfRFJBR19TVEFSVCwgZSA9PiBlLnByZXZlbnREZWZhdWx0KCkpXG5cbiAgICBpZiAodGhpcy5fcG9pbnRlckV2ZW50KSB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEVWRU5UX1BPSU5URVJET1dOLCBldmVudCA9PiBzdGFydChldmVudCkpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEVWRU5UX1BPSU5URVJVUCwgZXZlbnQgPT4gZW5kKGV2ZW50KSlcblxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfUE9JTlRFUl9FVkVOVClcbiAgICB9IGVsc2Uge1xuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFVkVOVF9UT1VDSFNUQVJULCBldmVudCA9PiBzdGFydChldmVudCkpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEVWRU5UX1RPVUNITU9WRSwgZXZlbnQgPT4gbW92ZShldmVudCkpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEVWRU5UX1RPVUNIRU5ELCBldmVudCA9PiBlbmQoZXZlbnQpKVxuICAgIH1cbiAgfVxuXG4gIF9rZXlkb3duKGV2ZW50KSB7XG4gICAgaWYgKC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBzd2l0Y2ggKGV2ZW50LndoaWNoKSB7XG4gICAgICBjYXNlIEFSUk9XX0xFRlRfS0VZQ09ERTpcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICB0aGlzLnByZXYoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSBBUlJPV19SSUdIVF9LRVlDT0RFOlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHRoaXMubmV4dCgpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfVxuXG4gIF9nZXRJdGVtSW5kZXgoZWxlbWVudCkge1xuICAgIHRoaXMuX2l0ZW1zID0gZWxlbWVudCAmJiBlbGVtZW50LnBhcmVudE5vZGUgP1xuICAgICAgW10uc2xpY2UuY2FsbChlbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvckFsbChTRUxFQ1RPUl9JVEVNKSkgOlxuICAgICAgW11cbiAgICByZXR1cm4gdGhpcy5faXRlbXMuaW5kZXhPZihlbGVtZW50KVxuICB9XG5cbiAgX2dldEl0ZW1CeURpcmVjdGlvbihkaXJlY3Rpb24sIGFjdGl2ZUVsZW1lbnQpIHtcbiAgICBjb25zdCBpc05leHREaXJlY3Rpb24gPSBkaXJlY3Rpb24gPT09IERJUkVDVElPTl9ORVhUXG4gICAgY29uc3QgaXNQcmV2RGlyZWN0aW9uID0gZGlyZWN0aW9uID09PSBESVJFQ1RJT05fUFJFVlxuICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KGFjdGl2ZUVsZW1lbnQpXG4gICAgY29uc3QgbGFzdEl0ZW1JbmRleCA9IHRoaXMuX2l0ZW1zLmxlbmd0aCAtIDFcbiAgICBjb25zdCBpc0dvaW5nVG9XcmFwID0gaXNQcmV2RGlyZWN0aW9uICYmIGFjdGl2ZUluZGV4ID09PSAwIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNOZXh0RGlyZWN0aW9uICYmIGFjdGl2ZUluZGV4ID09PSBsYXN0SXRlbUluZGV4XG5cbiAgICBpZiAoaXNHb2luZ1RvV3JhcCAmJiAhdGhpcy5fY29uZmlnLndyYXApIHtcbiAgICAgIHJldHVybiBhY3RpdmVFbGVtZW50XG4gICAgfVxuXG4gICAgY29uc3QgZGVsdGEgPSBkaXJlY3Rpb24gPT09IERJUkVDVElPTl9QUkVWID8gLTEgOiAxXG4gICAgY29uc3QgaXRlbUluZGV4ID0gKGFjdGl2ZUluZGV4ICsgZGVsdGEpICUgdGhpcy5faXRlbXMubGVuZ3RoXG5cbiAgICByZXR1cm4gaXRlbUluZGV4ID09PSAtMSA/XG4gICAgICB0aGlzLl9pdGVtc1t0aGlzLl9pdGVtcy5sZW5ndGggLSAxXSA6IHRoaXMuX2l0ZW1zW2l0ZW1JbmRleF1cbiAgfVxuXG4gIF90cmlnZ2VyU2xpZGVFdmVudChyZWxhdGVkVGFyZ2V0LCBldmVudERpcmVjdGlvbk5hbWUpIHtcbiAgICBjb25zdCB0YXJnZXRJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleChyZWxhdGVkVGFyZ2V0KVxuICAgIGNvbnN0IGZyb21JbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleCh0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JfQUNUSVZFX0lURU0pKVxuICAgIGNvbnN0IHNsaWRlRXZlbnQgPSAkLkV2ZW50KEVWRU5UX1NMSURFLCB7XG4gICAgICByZWxhdGVkVGFyZ2V0LFxuICAgICAgZGlyZWN0aW9uOiBldmVudERpcmVjdGlvbk5hbWUsXG4gICAgICBmcm9tOiBmcm9tSW5kZXgsXG4gICAgICB0bzogdGFyZ2V0SW5kZXhcbiAgICB9KVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNsaWRlRXZlbnQpXG5cbiAgICByZXR1cm4gc2xpZGVFdmVudFxuICB9XG5cbiAgX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQoZWxlbWVudCkge1xuICAgIGlmICh0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCkge1xuICAgICAgY29uc3QgaW5kaWNhdG9ycyA9IFtdLnNsaWNlLmNhbGwodGhpcy5faW5kaWNhdG9yc0VsZW1lbnQucXVlcnlTZWxlY3RvckFsbChTRUxFQ1RPUl9BQ1RJVkUpKVxuICAgICAgJChpbmRpY2F0b3JzKS5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0FDVElWRSlcblxuICAgICAgY29uc3QgbmV4dEluZGljYXRvciA9IHRoaXMuX2luZGljYXRvcnNFbGVtZW50LmNoaWxkcmVuW1xuICAgICAgICB0aGlzLl9nZXRJdGVtSW5kZXgoZWxlbWVudClcbiAgICAgIF1cblxuICAgICAgaWYgKG5leHRJbmRpY2F0b3IpIHtcbiAgICAgICAgJChuZXh0SW5kaWNhdG9yKS5hZGRDbGFzcyhDTEFTU19OQU1FX0FDVElWRSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfdXBkYXRlSW50ZXJ2YWwoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2FjdGl2ZUVsZW1lbnQgfHwgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SX0FDVElWRV9JVEVNKVxuXG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50SW50ZXJ2YWwgPSBwYXJzZUludChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pbnRlcnZhbCcpLCAxMClcblxuICAgIGlmIChlbGVtZW50SW50ZXJ2YWwpIHtcbiAgICAgIHRoaXMuX2NvbmZpZy5kZWZhdWx0SW50ZXJ2YWwgPSB0aGlzLl9jb25maWcuZGVmYXVsdEludGVydmFsIHx8IHRoaXMuX2NvbmZpZy5pbnRlcnZhbFxuICAgICAgdGhpcy5fY29uZmlnLmludGVydmFsID0gZWxlbWVudEludGVydmFsXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbmZpZy5pbnRlcnZhbCA9IHRoaXMuX2NvbmZpZy5kZWZhdWx0SW50ZXJ2YWwgfHwgdGhpcy5fY29uZmlnLmludGVydmFsXG4gICAgfVxuICB9XG5cbiAgX3NsaWRlKGRpcmVjdGlvbiwgZWxlbWVudCkge1xuICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JfQUNUSVZFX0lURU0pXG4gICAgY29uc3QgYWN0aXZlRWxlbWVudEluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KGFjdGl2ZUVsZW1lbnQpXG4gICAgY29uc3QgbmV4dEVsZW1lbnQgPSBlbGVtZW50IHx8IGFjdGl2ZUVsZW1lbnQgJiZcbiAgICAgIHRoaXMuX2dldEl0ZW1CeURpcmVjdGlvbihkaXJlY3Rpb24sIGFjdGl2ZUVsZW1lbnQpXG4gICAgY29uc3QgbmV4dEVsZW1lbnRJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleChuZXh0RWxlbWVudClcbiAgICBjb25zdCBpc0N5Y2xpbmcgPSBCb29sZWFuKHRoaXMuX2ludGVydmFsKVxuXG4gICAgbGV0IGRpcmVjdGlvbmFsQ2xhc3NOYW1lXG4gICAgbGV0IG9yZGVyQ2xhc3NOYW1lXG4gICAgbGV0IGV2ZW50RGlyZWN0aW9uTmFtZVxuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OX05FWFQpIHtcbiAgICAgIGRpcmVjdGlvbmFsQ2xhc3NOYW1lID0gQ0xBU1NfTkFNRV9MRUZUXG4gICAgICBvcmRlckNsYXNzTmFtZSA9IENMQVNTX05BTUVfTkVYVFxuICAgICAgZXZlbnREaXJlY3Rpb25OYW1lID0gRElSRUNUSU9OX0xFRlRcbiAgICB9IGVsc2Uge1xuICAgICAgZGlyZWN0aW9uYWxDbGFzc05hbWUgPSBDTEFTU19OQU1FX1JJR0hUXG4gICAgICBvcmRlckNsYXNzTmFtZSA9IENMQVNTX05BTUVfUFJFVlxuICAgICAgZXZlbnREaXJlY3Rpb25OYW1lID0gRElSRUNUSU9OX1JJR0hUXG4gICAgfVxuXG4gICAgaWYgKG5leHRFbGVtZW50ICYmICQobmV4dEVsZW1lbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfQUNUSVZFKSkge1xuICAgICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2VcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHNsaWRlRXZlbnQgPSB0aGlzLl90cmlnZ2VyU2xpZGVFdmVudChuZXh0RWxlbWVudCwgZXZlbnREaXJlY3Rpb25OYW1lKVxuICAgIGlmIChzbGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIWFjdGl2ZUVsZW1lbnQgfHwgIW5leHRFbGVtZW50KSB7XG4gICAgICAvLyBTb21lIHdlaXJkbmVzcyBpcyBoYXBwZW5pbmcsIHNvIHdlIGJhaWxcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzU2xpZGluZyA9IHRydWVcblxuICAgIGlmIChpc0N5Y2xpbmcpIHtcbiAgICAgIHRoaXMucGF1c2UoKVxuICAgIH1cblxuICAgIHRoaXMuX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQobmV4dEVsZW1lbnQpXG4gICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IG5leHRFbGVtZW50XG5cbiAgICBjb25zdCBzbGlkRXZlbnQgPSAkLkV2ZW50KEVWRU5UX1NMSUQsIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IG5leHRFbGVtZW50LFxuICAgICAgZGlyZWN0aW9uOiBldmVudERpcmVjdGlvbk5hbWUsXG4gICAgICBmcm9tOiBhY3RpdmVFbGVtZW50SW5kZXgsXG4gICAgICB0bzogbmV4dEVsZW1lbnRJbmRleFxuICAgIH0pXG5cbiAgICBpZiAoJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDTEFTU19OQU1FX1NMSURFKSkge1xuICAgICAgJChuZXh0RWxlbWVudCkuYWRkQ2xhc3Mob3JkZXJDbGFzc05hbWUpXG5cbiAgICAgIFV0aWwucmVmbG93KG5leHRFbGVtZW50KVxuXG4gICAgICAkKGFjdGl2ZUVsZW1lbnQpLmFkZENsYXNzKGRpcmVjdGlvbmFsQ2xhc3NOYW1lKVxuICAgICAgJChuZXh0RWxlbWVudCkuYWRkQ2xhc3MoZGlyZWN0aW9uYWxDbGFzc05hbWUpXG5cbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQoYWN0aXZlRWxlbWVudClcblxuICAgICAgJChhY3RpdmVFbGVtZW50KVxuICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsICgpID0+IHtcbiAgICAgICAgICAkKG5leHRFbGVtZW50KVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKGAke2RpcmVjdGlvbmFsQ2xhc3NOYW1lfSAke29yZGVyQ2xhc3NOYW1lfWApXG4gICAgICAgICAgICAuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9BQ1RJVkUpXG5cbiAgICAgICAgICAkKGFjdGl2ZUVsZW1lbnQpLnJlbW92ZUNsYXNzKGAke0NMQVNTX05BTUVfQUNUSVZFfSAke29yZGVyQ2xhc3NOYW1lfSAke2RpcmVjdGlvbmFsQ2xhc3NOYW1lfWApXG5cbiAgICAgICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZVxuXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc2xpZEV2ZW50KSwgMClcbiAgICAgICAgfSlcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgJChhY3RpdmVFbGVtZW50KS5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0FDVElWRSlcbiAgICAgICQobmV4dEVsZW1lbnQpLmFkZENsYXNzKENMQVNTX05BTUVfQUNUSVZFKVxuXG4gICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNsaWRFdmVudClcbiAgICB9XG5cbiAgICBpZiAoaXNDeWNsaW5nKSB7XG4gICAgICB0aGlzLmN5Y2xlKClcbiAgICB9XG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuICAgICAgbGV0IF9jb25maWcgPSB7XG4gICAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAgIC4uLiQodGhpcykuZGF0YSgpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0Jykge1xuICAgICAgICBfY29uZmlnID0ge1xuICAgICAgICAgIC4uLl9jb25maWcsXG4gICAgICAgICAgLi4uY29uZmlnXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgYWN0aW9uID0gdHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycgPyBjb25maWcgOiBfY29uZmlnLnNsaWRlXG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IENhcm91c2VsKHRoaXMsIF9jb25maWcpXG4gICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGRhdGEudG8oY29uZmlnKVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYWN0aW9uID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbYWN0aW9uXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2FjdGlvbn1cImApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2FjdGlvbl0oKVxuICAgICAgfSBlbHNlIGlmIChfY29uZmlnLmludGVydmFsICYmIF9jb25maWcucmlkZSkge1xuICAgICAgICBkYXRhLnBhdXNlKClcbiAgICAgICAgZGF0YS5jeWNsZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBfZGF0YUFwaUNsaWNrSGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KHRoaXMpXG5cbiAgICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0YXJnZXQgPSAkKHNlbGVjdG9yKVswXVxuXG4gICAgaWYgKCF0YXJnZXQgfHwgISQodGFyZ2V0KS5oYXNDbGFzcyhDTEFTU19OQU1FX0NBUk9VU0VMKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgLi4uJCh0YXJnZXQpLmRhdGEoKSxcbiAgICAgIC4uLiQodGhpcykuZGF0YSgpXG4gICAgfVxuICAgIGNvbnN0IHNsaWRlSW5kZXggPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZS10bycpXG5cbiAgICBpZiAoc2xpZGVJbmRleCkge1xuICAgICAgY29uZmlnLmludGVydmFsID0gZmFsc2VcbiAgICB9XG5cbiAgICBDYXJvdXNlbC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0YXJnZXQpLCBjb25maWcpXG5cbiAgICBpZiAoc2xpZGVJbmRleCkge1xuICAgICAgJCh0YXJnZXQpLmRhdGEoREFUQV9LRVkpLnRvKHNsaWRlSW5kZXgpXG4gICAgfVxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJChkb2N1bWVudCkub24oRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfU0xJREUsIENhcm91c2VsLl9kYXRhQXBpQ2xpY2tIYW5kbGVyKVxuXG4kKHdpbmRvdykub24oRVZFTlRfTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICBjb25zdCBjYXJvdXNlbHMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1JfREFUQV9SSURFKSlcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGNhcm91c2Vscy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0ICRjYXJvdXNlbCA9ICQoY2Fyb3VzZWxzW2ldKVxuICAgIENhcm91c2VsLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkY2Fyb3VzZWwsICRjYXJvdXNlbC5kYXRhKCkpXG4gIH1cbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQuZm5bTkFNRV0gPSBDYXJvdXNlbC5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gQ2Fyb3VzZWxcbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gQ2Fyb3VzZWwuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC42LjApOiBjb2xsYXBzZS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICdjb2xsYXBzZSdcbmNvbnN0IFZFUlNJT04gPSAnNC42LjAnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5jb2xsYXBzZSdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICB0b2dnbGU6IHRydWUsXG4gIHBhcmVudDogJydcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIHRvZ2dsZTogJ2Jvb2xlYW4nLFxuICBwYXJlbnQ6ICcoc3RyaW5nfGVsZW1lbnQpJ1xufVxuXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX0NPTExBUFNFID0gJ2NvbGxhcHNlJ1xuY29uc3QgQ0xBU1NfTkFNRV9DT0xMQVBTSU5HID0gJ2NvbGxhcHNpbmcnXG5jb25zdCBDTEFTU19OQU1FX0NPTExBUFNFRCA9ICdjb2xsYXBzZWQnXG5cbmNvbnN0IERJTUVOU0lPTl9XSURUSCA9ICd3aWR0aCdcbmNvbnN0IERJTUVOU0lPTl9IRUlHSFQgPSAnaGVpZ2h0J1xuXG5jb25zdCBTRUxFQ1RPUl9BQ1RJVkVTID0gJy5zaG93LCAuY29sbGFwc2luZydcbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgQ29sbGFwc2Uge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl90cmlnZ2VyQXJyYXkgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBgW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl1baHJlZj1cIiMke2VsZW1lbnQuaWR9XCJdLGAgK1xuICAgICAgYFtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdW2RhdGEtdGFyZ2V0PVwiIyR7ZWxlbWVudC5pZH1cIl1gXG4gICAgKSlcblxuICAgIGNvbnN0IHRvZ2dsZUxpc3QgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1JfREFUQV9UT0dHTEUpKVxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0b2dnbGVMaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtID0gdG9nZ2xlTGlzdFtpXVxuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbSlcbiAgICAgIGNvbnN0IGZpbHRlckVsZW1lbnQgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKVxuICAgICAgICAuZmlsdGVyKGZvdW5kRWxlbSA9PiBmb3VuZEVsZW0gPT09IGVsZW1lbnQpXG5cbiAgICAgIGlmIChzZWxlY3RvciAhPT0gbnVsbCAmJiBmaWx0ZXJFbGVtZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0b3IgPSBzZWxlY3RvclxuICAgICAgICB0aGlzLl90cmlnZ2VyQXJyYXkucHVzaChlbGVtKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX3BhcmVudCA9IHRoaXMuX2NvbmZpZy5wYXJlbnQgPyB0aGlzLl9nZXRQYXJlbnQoKSA6IG51bGxcblxuICAgIGlmICghdGhpcy5fY29uZmlnLnBhcmVudCkge1xuICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX2VsZW1lbnQsIHRoaXMuX3RyaWdnZXJBcnJheSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnRvZ2dsZSkge1xuICAgICAgdGhpcy50b2dnbGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICgkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgIHRoaXMuaGlkZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvdygpXG4gICAgfVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBpZiAodGhpcy5faXNUcmFuc2l0aW9uaW5nIHx8XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBhY3RpdmVzXG4gICAgbGV0IGFjdGl2ZXNEYXRhXG5cbiAgICBpZiAodGhpcy5fcGFyZW50KSB7XG4gICAgICBhY3RpdmVzID0gW10uc2xpY2UuY2FsbCh0aGlzLl9wYXJlbnQucXVlcnlTZWxlY3RvckFsbChTRUxFQ1RPUl9BQ1RJVkVTKSlcbiAgICAgICAgLmZpbHRlcihlbGVtID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2NvbmZpZy5wYXJlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGFyZW50JykgPT09IHRoaXMuX2NvbmZpZy5wYXJlbnRcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9DT0xMQVBTRSlcbiAgICAgICAgfSlcblxuICAgICAgaWYgKGFjdGl2ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGFjdGl2ZXMgPSBudWxsXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZXMpIHtcbiAgICAgIGFjdGl2ZXNEYXRhID0gJChhY3RpdmVzKS5ub3QodGhpcy5fc2VsZWN0b3IpLmRhdGEoREFUQV9LRVkpXG4gICAgICBpZiAoYWN0aXZlc0RhdGEgJiYgYWN0aXZlc0RhdGEuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzdGFydEV2ZW50ID0gJC5FdmVudChFVkVOVF9TSE9XKVxuICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzdGFydEV2ZW50KVxuICAgIGlmIChzdGFydEV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlcykge1xuICAgICAgQ29sbGFwc2UuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQoYWN0aXZlcykubm90KHRoaXMuX3NlbGVjdG9yKSwgJ2hpZGUnKVxuICAgICAgaWYgKCFhY3RpdmVzRGF0YSkge1xuICAgICAgICAkKGFjdGl2ZXMpLmRhdGEoREFUQV9LRVksIG51bGwpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZGltZW5zaW9uID0gdGhpcy5fZ2V0RGltZW5zaW9uKClcblxuICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgIC5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0NPTExBUFNFKVxuICAgICAgLmFkZENsYXNzKENMQVNTX05BTUVfQ09MTEFQU0lORylcblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IDBcblxuICAgIGlmICh0aGlzLl90cmlnZ2VyQXJyYXkubGVuZ3RoKSB7XG4gICAgICAkKHRoaXMuX3RyaWdnZXJBcnJheSlcbiAgICAgICAgLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfQ09MTEFQU0VEKVxuICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIHRydWUpXG4gICAgfVxuXG4gICAgdGhpcy5zZXRUcmFuc2l0aW9uaW5nKHRydWUpXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgICAgLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfQ09MTEFQU0lORylcbiAgICAgICAgLmFkZENsYXNzKGAke0NMQVNTX05BTUVfQ09MTEFQU0V9ICR7Q0xBU1NfTkFNRV9TSE9XfWApXG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9ICcnXG5cbiAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyhmYWxzZSlcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKEVWRU5UX1NIT1dOKVxuICAgIH1cblxuICAgIGNvbnN0IGNhcGl0YWxpemVkRGltZW5zaW9uID0gZGltZW5zaW9uWzBdLnRvVXBwZXJDYXNlKCkgKyBkaW1lbnNpb24uc2xpY2UoMSlcbiAgICBjb25zdCBzY3JvbGxTaXplID0gYHNjcm9sbCR7Y2FwaXRhbGl6ZWREaW1lbnNpb259YFxuICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY29tcGxldGUpXG4gICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudFtzY3JvbGxTaXplXX1weGBcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZyB8fFxuICAgICAgISQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRFdmVudCA9ICQuRXZlbnQoRVZFTlRfSElERSlcbiAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc3RhcnRFdmVudClcbiAgICBpZiAoc3RhcnRFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZGltZW5zaW9uID0gdGhpcy5fZ2V0RGltZW5zaW9uKClcblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IGAke3RoaXMuX2VsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbZGltZW5zaW9uXX1weGBcblxuICAgIFV0aWwucmVmbG93KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuICAgICAgLnJlbW92ZUNsYXNzKGAke0NMQVNTX05BTUVfQ09MTEFQU0V9ICR7Q0xBU1NfTkFNRV9TSE9XfWApXG5cbiAgICBjb25zdCB0cmlnZ2VyQXJyYXlMZW5ndGggPSB0aGlzLl90cmlnZ2VyQXJyYXkubGVuZ3RoXG4gICAgaWYgKHRyaWdnZXJBcnJheUxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJpZ2dlckFycmF5TGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdHJpZ2dlciA9IHRoaXMuX3RyaWdnZXJBcnJheVtpXVxuICAgICAgICBjb25zdCBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0cmlnZ2VyKVxuXG4gICAgICAgIGlmIChzZWxlY3RvciAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0ICRlbGVtID0gJChbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKSlcbiAgICAgICAgICBpZiAoISRlbGVtLmhhc0NsYXNzKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgICAgICAgICQodHJpZ2dlcikuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9DT0xMQVBTRUQpXG4gICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRUcmFuc2l0aW9uaW5nKHRydWUpXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyhmYWxzZSlcbiAgICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgICAgLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfQ09MTEFQU0lORylcbiAgICAgICAgLmFkZENsYXNzKENMQVNTX05BTUVfQ09MTEFQU0UpXG4gICAgICAgIC50cmlnZ2VyKEVWRU5UX0hJRERFTilcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAnJ1xuICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY29tcGxldGUpXG4gICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICB9XG5cbiAgc2V0VHJhbnNpdGlvbmluZyhpc1RyYW5zaXRpb25pbmcpIHtcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBpc1RyYW5zaXRpb25pbmdcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuXG4gICAgdGhpcy5fY29uZmlnID0gbnVsbFxuICAgIHRoaXMuX3BhcmVudCA9IG51bGxcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbFxuICAgIHRoaXMuX3RyaWdnZXJBcnJheSA9IG51bGxcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBudWxsXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uY29uZmlnXG4gICAgfVxuICAgIGNvbmZpZy50b2dnbGUgPSBCb29sZWFuKGNvbmZpZy50b2dnbGUpIC8vIENvZXJjZSBzdHJpbmcgdmFsdWVzXG4gICAgVXRpbC50eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBEZWZhdWx0VHlwZSlcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0RGltZW5zaW9uKCkge1xuICAgIGNvbnN0IGhhc1dpZHRoID0gJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhESU1FTlNJT05fV0lEVEgpXG4gICAgcmV0dXJuIGhhc1dpZHRoID8gRElNRU5TSU9OX1dJRFRIIDogRElNRU5TSU9OX0hFSUdIVFxuICB9XG5cbiAgX2dldFBhcmVudCgpIHtcbiAgICBsZXQgcGFyZW50XG5cbiAgICBpZiAoVXRpbC5pc0VsZW1lbnQodGhpcy5fY29uZmlnLnBhcmVudCkpIHtcbiAgICAgIHBhcmVudCA9IHRoaXMuX2NvbmZpZy5wYXJlbnRcblxuICAgICAgLy8gSXQncyBhIGpRdWVyeSBvYmplY3RcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLnBhcmVudC5qcXVlcnkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHBhcmVudCA9IHRoaXMuX2NvbmZpZy5wYXJlbnRbMF1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9jb25maWcucGFyZW50KVxuICAgIH1cblxuICAgIGNvbnN0IHNlbGVjdG9yID0gYFtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdW2RhdGEtcGFyZW50PVwiJHt0aGlzLl9jb25maWcucGFyZW50fVwiXWBcbiAgICBjb25zdCBjaGlsZHJlbiA9IFtdLnNsaWNlLmNhbGwocGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKVxuXG4gICAgJChjaGlsZHJlbikuZWFjaCgoaSwgZWxlbWVudCkgPT4ge1xuICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKFxuICAgICAgICBDb2xsYXBzZS5fZ2V0VGFyZ2V0RnJvbUVsZW1lbnQoZWxlbWVudCksXG4gICAgICAgIFtlbGVtZW50XVxuICAgICAgKVxuICAgIH0pXG5cbiAgICByZXR1cm4gcGFyZW50XG4gIH1cblxuICBfYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKGVsZW1lbnQsIHRyaWdnZXJBcnJheSkge1xuICAgIGNvbnN0IGlzT3BlbiA9ICQoZWxlbWVudCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgaWYgKHRyaWdnZXJBcnJheS5sZW5ndGgpIHtcbiAgICAgICQodHJpZ2dlckFycmF5KVxuICAgICAgICAudG9nZ2xlQ2xhc3MoQ0xBU1NfTkFNRV9DT0xMQVBTRUQsICFpc09wZW4pXG4gICAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgaXNPcGVuKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfZ2V0VGFyZ2V0RnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpXG4gICAgcmV0dXJuIHNlbGVjdG9yID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgOiBudWxsXG4gIH1cblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0ICRlbGVtZW50ID0gJCh0aGlzKVxuICAgICAgbGV0IGRhdGEgPSAkZWxlbWVudC5kYXRhKERBVEFfS0VZKVxuICAgICAgY29uc3QgX2NvbmZpZyA9IHtcbiAgICAgICAgLi4uRGVmYXVsdCxcbiAgICAgICAgLi4uJGVsZW1lbnQuZGF0YSgpLFxuICAgICAgICAuLi4odHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge30pXG4gICAgICB9XG5cbiAgICAgIGlmICghZGF0YSAmJiBfY29uZmlnLnRvZ2dsZSAmJiB0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyAmJiAvc2hvd3xoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgICAgX2NvbmZpZy50b2dnbGUgPSBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBDb2xsYXBzZSh0aGlzLCBfY29uZmlnKVxuICAgICAgICAkZWxlbWVudC5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJChkb2N1bWVudCkub24oRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgLy8gcHJldmVudERlZmF1bHQgb25seSBmb3IgPGE+IGVsZW1lbnRzICh3aGljaCBjaGFuZ2UgdGhlIFVSTCkgbm90IGluc2lkZSB0aGUgY29sbGFwc2libGUgZWxlbWVudFxuICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC50YWdOYW1lID09PSAnQScpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBjb25zdCAkdHJpZ2dlciA9ICQodGhpcylcbiAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQodGhpcylcbiAgY29uc3Qgc2VsZWN0b3JzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSlcblxuICAkKHNlbGVjdG9ycykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgJHRhcmdldCA9ICQodGhpcylcbiAgICBjb25zdCBkYXRhID0gJHRhcmdldC5kYXRhKERBVEFfS0VZKVxuICAgIGNvbnN0IGNvbmZpZyA9IGRhdGEgPyAndG9nZ2xlJyA6ICR0cmlnZ2VyLmRhdGEoKVxuICAgIENvbGxhcHNlLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkdGFyZ2V0LCBjb25maWcpXG4gIH0pXG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kLmZuW05BTUVdID0gQ29sbGFwc2UuX2pRdWVyeUludGVyZmFjZVxuJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IENvbGxhcHNlXG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIENvbGxhcHNlLl9qUXVlcnlJbnRlcmZhY2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29sbGFwc2VcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuNi4wKTogZHJvcGRvd24uanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgUG9wcGVyIGZyb20gJ3BvcHBlci5qcydcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICdkcm9wZG93bidcbmNvbnN0IFZFUlNJT04gPSAnNC42LjAnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5kcm9wZG93bidcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXVxuY29uc3QgRVNDQVBFX0tFWUNPREUgPSAyNyAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciBFc2NhcGUgKEVzYykga2V5XG5jb25zdCBTUEFDRV9LRVlDT0RFID0gMzIgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3Igc3BhY2Uga2V5XG5jb25zdCBUQUJfS0VZQ09ERSA9IDkgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgdGFiIGtleVxuY29uc3QgQVJST1dfVVBfS0VZQ09ERSA9IDM4IC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIHVwIGFycm93IGtleVxuY29uc3QgQVJST1dfRE9XTl9LRVlDT0RFID0gNDAgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgZG93biBhcnJvdyBrZXlcbmNvbnN0IFJJR0hUX01PVVNFX0JVVFRPTl9XSElDSCA9IDMgLy8gTW91c2VFdmVudC53aGljaCB2YWx1ZSBmb3IgdGhlIHJpZ2h0IGJ1dHRvbiAoYXNzdW1pbmcgYSByaWdodC1oYW5kZWQgbW91c2UpXG5jb25zdCBSRUdFWFBfS0VZRE9XTiA9IG5ldyBSZWdFeHAoYCR7QVJST1dfVVBfS0VZQ09ERX18JHtBUlJPV19ET1dOX0tFWUNPREV9fCR7RVNDQVBFX0tFWUNPREV9YClcblxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0sgPSBgY2xpY2ske0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV05fREFUQV9BUEkgPSBga2V5ZG93biR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWVVQX0RBVEFfQVBJID0gYGtleXVwJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX0RJU0FCTEVEID0gJ2Rpc2FibGVkJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX0RST1BVUCA9ICdkcm9wdXAnXG5jb25zdCBDTEFTU19OQU1FX0RST1BSSUdIVCA9ICdkcm9wcmlnaHQnXG5jb25zdCBDTEFTU19OQU1FX0RST1BMRUZUID0gJ2Ryb3BsZWZ0J1xuY29uc3QgQ0xBU1NfTkFNRV9NRU5VUklHSFQgPSAnZHJvcGRvd24tbWVudS1yaWdodCdcbmNvbnN0IENMQVNTX05BTUVfUE9TSVRJT05fU1RBVElDID0gJ3Bvc2l0aW9uLXN0YXRpYydcblxuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIl0nXG5jb25zdCBTRUxFQ1RPUl9GT1JNX0NISUxEID0gJy5kcm9wZG93biBmb3JtJ1xuY29uc3QgU0VMRUNUT1JfTUVOVSA9ICcuZHJvcGRvd24tbWVudSdcbmNvbnN0IFNFTEVDVE9SX05BVkJBUl9OQVYgPSAnLm5hdmJhci1uYXYnXG5jb25zdCBTRUxFQ1RPUl9WSVNJQkxFX0lURU1TID0gJy5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpJ1xuXG5jb25zdCBQTEFDRU1FTlRfVE9QID0gJ3RvcC1zdGFydCdcbmNvbnN0IFBMQUNFTUVOVF9UT1BFTkQgPSAndG9wLWVuZCdcbmNvbnN0IFBMQUNFTUVOVF9CT1RUT00gPSAnYm90dG9tLXN0YXJ0J1xuY29uc3QgUExBQ0VNRU5UX0JPVFRPTUVORCA9ICdib3R0b20tZW5kJ1xuY29uc3QgUExBQ0VNRU5UX1JJR0hUID0gJ3JpZ2h0LXN0YXJ0J1xuY29uc3QgUExBQ0VNRU5UX0xFRlQgPSAnbGVmdC1zdGFydCdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgb2Zmc2V0OiAwLFxuICBmbGlwOiB0cnVlLFxuICBib3VuZGFyeTogJ3Njcm9sbFBhcmVudCcsXG4gIHJlZmVyZW5jZTogJ3RvZ2dsZScsXG4gIGRpc3BsYXk6ICdkeW5hbWljJyxcbiAgcG9wcGVyQ29uZmlnOiBudWxsXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBvZmZzZXQ6ICcobnVtYmVyfHN0cmluZ3xmdW5jdGlvbiknLFxuICBmbGlwOiAnYm9vbGVhbicsXG4gIGJvdW5kYXJ5OiAnKHN0cmluZ3xlbGVtZW50KScsXG4gIHJlZmVyZW5jZTogJyhzdHJpbmd8ZWxlbWVudCknLFxuICBkaXNwbGF5OiAnc3RyaW5nJyxcbiAgcG9wcGVyQ29uZmlnOiAnKG51bGx8b2JqZWN0KSdcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIERyb3Bkb3duIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLl9wb3BwZXIgPSBudWxsXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9tZW51ID0gdGhpcy5fZ2V0TWVudUVsZW1lbnQoKVxuICAgIHRoaXMuX2luTmF2YmFyID0gdGhpcy5fZGV0ZWN0TmF2YmFyKClcblxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudC5kaXNhYmxlZCB8fCAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfRElTQUJMRUQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBpc0FjdGl2ZSA9ICQodGhpcy5fbWVudSkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgRHJvcGRvd24uX2NsZWFyTWVudXMoKVxuXG4gICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnNob3codHJ1ZSlcbiAgfVxuXG4gIHNob3codXNlUG9wcGVyID0gZmFsc2UpIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudC5kaXNhYmxlZCB8fCAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfRElTQUJMRUQpIHx8ICQodGhpcy5fbWVudSkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICB9XG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gJC5FdmVudChFVkVOVF9TSE9XLCByZWxhdGVkVGFyZ2V0KVxuICAgIGNvbnN0IHBhcmVudCA9IERyb3Bkb3duLl9nZXRQYXJlbnRGcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuXG4gICAgJChwYXJlbnQpLnRyaWdnZXIoc2hvd0V2ZW50KVxuXG4gICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gVG90YWxseSBkaXNhYmxlIFBvcHBlciBmb3IgRHJvcGRvd25zIGluIE5hdmJhclxuICAgIGlmICghdGhpcy5faW5OYXZiYXIgJiYgdXNlUG9wcGVyKSB7XG4gICAgICAvKipcbiAgICAgICAqIENoZWNrIGZvciBQb3BwZXIgZGVwZW5kZW5jeVxuICAgICAgICogUG9wcGVyIC0gaHR0cHM6Ly9wb3BwZXIuanMub3JnXG4gICAgICAgKi9cbiAgICAgIGlmICh0eXBlb2YgUG9wcGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb290c3RyYXBcXCdzIGRyb3Bkb3ducyByZXF1aXJlIFBvcHBlciAoaHR0cHM6Ly9wb3BwZXIuanMub3JnKScpXG4gICAgICB9XG5cbiAgICAgIGxldCByZWZlcmVuY2VFbGVtZW50ID0gdGhpcy5fZWxlbWVudFxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLnJlZmVyZW5jZSA9PT0gJ3BhcmVudCcpIHtcbiAgICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHBhcmVudFxuICAgICAgfSBlbHNlIGlmIChVdGlsLmlzRWxlbWVudCh0aGlzLl9jb25maWcucmVmZXJlbmNlKSkge1xuICAgICAgICByZWZlcmVuY2VFbGVtZW50ID0gdGhpcy5fY29uZmlnLnJlZmVyZW5jZVxuXG4gICAgICAgIC8vIENoZWNrIGlmIGl0J3MgalF1ZXJ5IGVsZW1lbnRcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcucmVmZXJlbmNlLmpxdWVyeSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICByZWZlcmVuY2VFbGVtZW50ID0gdGhpcy5fY29uZmlnLnJlZmVyZW5jZVswXVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGJvdW5kYXJ5IGlzIG5vdCBgc2Nyb2xsUGFyZW50YCwgdGhlbiBzZXQgcG9zaXRpb24gdG8gYHN0YXRpY2BcbiAgICAgIC8vIHRvIGFsbG93IHRoZSBtZW51IHRvIFwiZXNjYXBlXCIgdGhlIHNjcm9sbCBwYXJlbnQncyBib3VuZGFyaWVzXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzI0MjUxXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmJvdW5kYXJ5ICE9PSAnc2Nyb2xsUGFyZW50Jykge1xuICAgICAgICAkKHBhcmVudCkuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9QT1NJVElPTl9TVEFUSUMpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3BvcHBlciA9IG5ldyBQb3BwZXIocmVmZXJlbmNlRWxlbWVudCwgdGhpcy5fbWVudSwgdGhpcy5fZ2V0UG9wcGVyQ29uZmlnKCkpXG4gICAgfVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIGFkZCBleHRyYVxuICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgdG8gdGhlIGJvZHkncyBpbW1lZGlhdGUgY2hpbGRyZW47XG4gICAgLy8gb25seSBuZWVkZWQgYmVjYXVzZSBvZiBicm9rZW4gZXZlbnQgZGVsZWdhdGlvbiBvbiBpT1NcbiAgICAvLyBodHRwczovL3d3dy5xdWlya3Ntb2RlLm9yZy9ibG9nL2FyY2hpdmVzLzIwMTQvMDIvbW91c2VfZXZlbnRfYnViLmh0bWxcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmXG4gICAgICAgICQocGFyZW50KS5jbG9zZXN0KFNFTEVDVE9SX05BVkJBUl9OQVYpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgJChkb2N1bWVudC5ib2R5KS5jaGlsZHJlbigpLm9uKCdtb3VzZW92ZXInLCBudWxsLCAkLm5vb3ApXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5mb2N1cygpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxuXG4gICAgJCh0aGlzLl9tZW51KS50b2dnbGVDbGFzcyhDTEFTU19OQU1FX1NIT1cpXG4gICAgJChwYXJlbnQpXG4gICAgICAudG9nZ2xlQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKVxuICAgICAgLnRyaWdnZXIoJC5FdmVudChFVkVOVF9TSE9XTiwgcmVsYXRlZFRhcmdldCkpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICh0aGlzLl9lbGVtZW50LmRpc2FibGVkIHx8ICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9ESVNBQkxFRCkgfHwgISQodGhpcy5fbWVudSkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICB9XG4gICAgY29uc3QgaGlkZUV2ZW50ID0gJC5FdmVudChFVkVOVF9ISURFLCByZWxhdGVkVGFyZ2V0KVxuICAgIGNvbnN0IHBhcmVudCA9IERyb3Bkb3duLl9nZXRQYXJlbnRGcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuXG4gICAgJChwYXJlbnQpLnRyaWdnZXIoaGlkZUV2ZW50KVxuXG4gICAgaWYgKGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKVxuICAgIH1cblxuICAgICQodGhpcy5fbWVudSkudG9nZ2xlQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKVxuICAgICQocGFyZW50KVxuICAgICAgLnRvZ2dsZUNsYXNzKENMQVNTX05BTUVfU0hPVylcbiAgICAgIC50cmlnZ2VyKCQuRXZlbnQoRVZFTlRfSElEREVOLCByZWxhdGVkVGFyZ2V0KSlcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuICAgICQodGhpcy5fZWxlbWVudCkub2ZmKEVWRU5UX0tFWSlcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbFxuICAgIHRoaXMuX21lbnUgPSBudWxsXG4gICAgaWYgKHRoaXMuX3BvcHBlciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKVxuICAgICAgdGhpcy5fcG9wcGVyID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLl9pbk5hdmJhciA9IHRoaXMuX2RldGVjdE5hdmJhcigpXG4gICAgaWYgKHRoaXMuX3BvcHBlciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fcG9wcGVyLnNjaGVkdWxlVXBkYXRlKClcbiAgICB9XG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICQodGhpcy5fZWxlbWVudCkub24oRVZFTlRfQ0xJQ0ssIGV2ZW50ID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICB0aGlzLnRvZ2dsZSgpXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4udGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0LFxuICAgICAgLi4uJCh0aGlzLl9lbGVtZW50KS5kYXRhKCksXG4gICAgICAuLi5jb25maWdcbiAgICB9XG5cbiAgICBVdGlsLnR5cGVDaGVja0NvbmZpZyhcbiAgICAgIE5BTUUsXG4gICAgICBjb25maWcsXG4gICAgICB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlXG4gICAgKVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2dldE1lbnVFbGVtZW50KCkge1xuICAgIGlmICghdGhpcy5fbWVudSkge1xuICAgICAgY29uc3QgcGFyZW50ID0gRHJvcGRvd24uX2dldFBhcmVudEZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgdGhpcy5fbWVudSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SX01FTlUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX21lbnVcbiAgfVxuXG4gIF9nZXRQbGFjZW1lbnQoKSB7XG4gICAgY29uc3QgJHBhcmVudERyb3Bkb3duID0gJCh0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUpXG4gICAgbGV0IHBsYWNlbWVudCA9IFBMQUNFTUVOVF9CT1RUT01cblxuICAgIC8vIEhhbmRsZSBkcm9wdXBcbiAgICBpZiAoJHBhcmVudERyb3Bkb3duLmhhc0NsYXNzKENMQVNTX05BTUVfRFJPUFVQKSkge1xuICAgICAgcGxhY2VtZW50ID0gJCh0aGlzLl9tZW51KS5oYXNDbGFzcyhDTEFTU19OQU1FX01FTlVSSUdIVCkgP1xuICAgICAgICBQTEFDRU1FTlRfVE9QRU5EIDpcbiAgICAgICAgUExBQ0VNRU5UX1RPUFxuICAgIH0gZWxzZSBpZiAoJHBhcmVudERyb3Bkb3duLmhhc0NsYXNzKENMQVNTX05BTUVfRFJPUFJJR0hUKSkge1xuICAgICAgcGxhY2VtZW50ID0gUExBQ0VNRU5UX1JJR0hUXG4gICAgfSBlbHNlIGlmICgkcGFyZW50RHJvcGRvd24uaGFzQ2xhc3MoQ0xBU1NfTkFNRV9EUk9QTEVGVCkpIHtcbiAgICAgIHBsYWNlbWVudCA9IFBMQUNFTUVOVF9MRUZUXG4gICAgfSBlbHNlIGlmICgkKHRoaXMuX21lbnUpLmhhc0NsYXNzKENMQVNTX05BTUVfTUVOVVJJR0hUKSkge1xuICAgICAgcGxhY2VtZW50ID0gUExBQ0VNRU5UX0JPVFRPTUVORFxuICAgIH1cblxuICAgIHJldHVybiBwbGFjZW1lbnRcbiAgfVxuXG4gIF9kZXRlY3ROYXZiYXIoKSB7XG4gICAgcmV0dXJuICQodGhpcy5fZWxlbWVudCkuY2xvc2VzdCgnLm5hdmJhcicpLmxlbmd0aCA+IDBcbiAgfVxuXG4gIF9nZXRPZmZzZXQoKSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0ge31cblxuICAgIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLm9mZnNldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb2Zmc2V0LmZuID0gZGF0YSA9PiB7XG4gICAgICAgIGRhdGEub2Zmc2V0cyA9IHtcbiAgICAgICAgICAuLi5kYXRhLm9mZnNldHMsXG4gICAgICAgICAgLi4uKHRoaXMuX2NvbmZpZy5vZmZzZXQoZGF0YS5vZmZzZXRzLCB0aGlzLl9lbGVtZW50KSB8fCB7fSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG9mZnNldC5vZmZzZXQgPSB0aGlzLl9jb25maWcub2Zmc2V0XG4gICAgfVxuXG4gICAgcmV0dXJuIG9mZnNldFxuICB9XG5cbiAgX2dldFBvcHBlckNvbmZpZygpIHtcbiAgICBjb25zdCBwb3BwZXJDb25maWcgPSB7XG4gICAgICBwbGFjZW1lbnQ6IHRoaXMuX2dldFBsYWNlbWVudCgpLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIG9mZnNldDogdGhpcy5fZ2V0T2Zmc2V0KCksXG4gICAgICAgIGZsaXA6IHtcbiAgICAgICAgICBlbmFibGVkOiB0aGlzLl9jb25maWcuZmxpcFxuICAgICAgICB9LFxuICAgICAgICBwcmV2ZW50T3ZlcmZsb3c6IHtcbiAgICAgICAgICBib3VuZGFyaWVzRWxlbWVudDogdGhpcy5fY29uZmlnLmJvdW5kYXJ5XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEaXNhYmxlIFBvcHBlciBpZiB3ZSBoYXZlIGEgc3RhdGljIGRpc3BsYXlcbiAgICBpZiAodGhpcy5fY29uZmlnLmRpc3BsYXkgPT09ICdzdGF0aWMnKSB7XG4gICAgICBwb3BwZXJDb25maWcubW9kaWZpZXJzLmFwcGx5U3R5bGUgPSB7XG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnBvcHBlckNvbmZpZyxcbiAgICAgIC4uLnRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWdcbiAgICB9XG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuICAgICAgY29uc3QgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDogbnVsbFxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBEcm9wZG93bih0aGlzLCBfY29uZmlnKVxuICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgX2NsZWFyTWVudXMoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQgJiYgKGV2ZW50LndoaWNoID09PSBSSUdIVF9NT1VTRV9CVVRUT05fV0hJQ0ggfHxcbiAgICAgIGV2ZW50LnR5cGUgPT09ICdrZXl1cCcgJiYgZXZlbnQud2hpY2ggIT09IFRBQl9LRVlDT0RFKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdG9nZ2xlcyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTRUxFQ1RPUl9EQVRBX1RPR0dMRSkpXG5cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdG9nZ2xlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29uc3QgcGFyZW50ID0gRHJvcGRvd24uX2dldFBhcmVudEZyb21FbGVtZW50KHRvZ2dsZXNbaV0pXG4gICAgICBjb25zdCBjb250ZXh0ID0gJCh0b2dnbGVzW2ldKS5kYXRhKERBVEFfS0VZKVxuICAgICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogdG9nZ2xlc1tpXVxuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQgJiYgZXZlbnQudHlwZSA9PT0gJ2NsaWNrJykge1xuICAgICAgICByZWxhdGVkVGFyZ2V0LmNsaWNrRXZlbnQgPSBldmVudFxuICAgICAgfVxuXG4gICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgZHJvcGRvd25NZW51ID0gY29udGV4dC5fbWVudVxuICAgICAgaWYgKCEkKHBhcmVudCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycgJiZcbiAgICAgICAgICAvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSB8fCBldmVudC50eXBlID09PSAna2V5dXAnICYmIGV2ZW50LndoaWNoID09PSBUQUJfS0VZQ09ERSkgJiZcbiAgICAgICAgICAkLmNvbnRhaW5zKHBhcmVudCwgZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBoaWRlRXZlbnQgPSAkLkV2ZW50KEVWRU5UX0hJREUsIHJlbGF0ZWRUYXJnZXQpXG4gICAgICAkKHBhcmVudCkudHJpZ2dlcihoaWRlRXZlbnQpXG4gICAgICBpZiAoaGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSByZW1vdmUgdGhlIGV4dHJhXG4gICAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHdlIGFkZGVkIGZvciBpT1Mgc3VwcG9ydFxuICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICAkKGRvY3VtZW50LmJvZHkpLmNoaWxkcmVuKCkub2ZmKCdtb3VzZW92ZXInLCBudWxsLCAkLm5vb3ApXG4gICAgICB9XG5cbiAgICAgIHRvZ2dsZXNbaV0uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJylcblxuICAgICAgaWYgKGNvbnRleHQuX3BvcHBlcikge1xuICAgICAgICBjb250ZXh0Ll9wb3BwZXIuZGVzdHJveSgpXG4gICAgICB9XG5cbiAgICAgICQoZHJvcGRvd25NZW51KS5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX1NIT1cpXG4gICAgICAkKHBhcmVudClcbiAgICAgICAgLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfU0hPVylcbiAgICAgICAgLnRyaWdnZXIoJC5FdmVudChFVkVOVF9ISURERU4sIHJlbGF0ZWRUYXJnZXQpKVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBfZ2V0UGFyZW50RnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgIGxldCBwYXJlbnRcbiAgICBjb25zdCBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KVxuXG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnQgfHwgZWxlbWVudC5wYXJlbnROb2RlXG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuICBzdGF0aWMgX2RhdGFBcGlLZXlkb3duSGFuZGxlcihldmVudCkge1xuICAgIC8vIElmIG5vdCBpbnB1dC90ZXh0YXJlYTpcbiAgICAvLyAgLSBBbmQgbm90IGEga2V5IGluIFJFR0VYUF9LRVlET1dOID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICAvLyBJZiBpbnB1dC90ZXh0YXJlYTpcbiAgICAvLyAgLSBJZiBzcGFjZSBrZXkgPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuICAgIC8vICAtIElmIGtleSBpcyBvdGhlciB0aGFuIGVzY2FwZVxuICAgIC8vICAgIC0gSWYga2V5IGlzIG5vdCB1cCBvciBkb3duID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICAvLyAgICAtIElmIHRyaWdnZXIgaW5zaWRlIHRoZSBtZW51ID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICBpZiAoL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkgP1xuICAgICAgZXZlbnQud2hpY2ggPT09IFNQQUNFX0tFWUNPREUgfHwgZXZlbnQud2hpY2ggIT09IEVTQ0FQRV9LRVlDT0RFICYmXG4gICAgICAoZXZlbnQud2hpY2ggIT09IEFSUk9XX0RPV05fS0VZQ09ERSAmJiBldmVudC53aGljaCAhPT0gQVJST1dfVVBfS0VZQ09ERSB8fFxuICAgICAgICAkKGV2ZW50LnRhcmdldCkuY2xvc2VzdChTRUxFQ1RPUl9NRU5VKS5sZW5ndGgpIDogIVJFR0VYUF9LRVlET1dOLnRlc3QoZXZlbnQud2hpY2gpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCAkKHRoaXMpLmhhc0NsYXNzKENMQVNTX05BTUVfRElTQUJMRUQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnQgPSBEcm9wZG93bi5fZ2V0UGFyZW50RnJvbUVsZW1lbnQodGhpcylcbiAgICBjb25zdCBpc0FjdGl2ZSA9ICQocGFyZW50KS5oYXNDbGFzcyhDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBpZiAoIWlzQWN0aXZlICYmIGV2ZW50LndoaWNoID09PSBFU0NBUEVfS0VZQ09ERSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICBpZiAoIWlzQWN0aXZlIHx8IChldmVudC53aGljaCA9PT0gRVNDQVBFX0tFWUNPREUgfHwgZXZlbnQud2hpY2ggPT09IFNQQUNFX0tFWUNPREUpKSB7XG4gICAgICBpZiAoZXZlbnQud2hpY2ggPT09IEVTQ0FQRV9LRVlDT0RFKSB7XG4gICAgICAgICQocGFyZW50LnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JfREFUQV9UT0dHTEUpKS50cmlnZ2VyKCdmb2N1cycpXG4gICAgICB9XG5cbiAgICAgICQodGhpcykudHJpZ2dlcignY2xpY2snKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXRlbXMgPSBbXS5zbGljZS5jYWxsKHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SX1ZJU0lCTEVfSVRFTVMpKVxuICAgICAgLmZpbHRlcihpdGVtID0+ICQoaXRlbSkuaXMoJzp2aXNpYmxlJykpXG5cbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgaW5kZXggPSBpdGVtcy5pbmRleE9mKGV2ZW50LnRhcmdldClcblxuICAgIGlmIChldmVudC53aGljaCA9PT0gQVJST1dfVVBfS0VZQ09ERSAmJiBpbmRleCA+IDApIHsgLy8gVXBcbiAgICAgIGluZGV4LS1cbiAgICB9XG5cbiAgICBpZiAoZXZlbnQud2hpY2ggPT09IEFSUk9XX0RPV05fS0VZQ09ERSAmJiBpbmRleCA8IGl0ZW1zLmxlbmd0aCAtIDEpIHsgLy8gRG93blxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgIGluZGV4ID0gMFxuICAgIH1cblxuICAgIGl0ZW1zW2luZGV4XS5mb2N1cygpXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kKGRvY3VtZW50KVxuICAub24oRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIERyb3Bkb3duLl9kYXRhQXBpS2V5ZG93bkhhbmRsZXIpXG4gIC5vbihFVkVOVF9LRVlET1dOX0RBVEFfQVBJLCBTRUxFQ1RPUl9NRU5VLCBEcm9wZG93bi5fZGF0YUFwaUtleWRvd25IYW5kbGVyKVxuICAub24oYCR7RVZFTlRfQ0xJQ0tfREFUQV9BUEl9ICR7RVZFTlRfS0VZVVBfREFUQV9BUEl9YCwgRHJvcGRvd24uX2NsZWFyTWVudXMpXG4gIC5vbihFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRoaXMpLCAndG9nZ2xlJylcbiAgfSlcbiAgLm9uKEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9GT1JNX0NISUxELCBlID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gIH0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQuZm5bTkFNRV0gPSBEcm9wZG93bi5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gRHJvcGRvd25cbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gRHJvcGRvd24uX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93blxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC42LjApOiBtb2RhbC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICdtb2RhbCdcbmNvbnN0IFZFUlNJT04gPSAnNC42LjAnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5tb2RhbCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXVxuY29uc3QgRVNDQVBFX0tFWUNPREUgPSAyNyAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciBFc2NhcGUgKEVzYykga2V5XG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGJhY2tkcm9wOiB0cnVlLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgZm9jdXM6IHRydWUsXG4gIHNob3c6IHRydWVcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGJhY2tkcm9wOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gIGtleWJvYXJkOiAnYm9vbGVhbicsXG4gIGZvY3VzOiAnYm9vbGVhbicsXG4gIHNob3c6ICdib29sZWFuJ1xufVxuXG5jb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURFX1BSRVZFTlRFRCA9IGBoaWRlUHJldmVudGVkJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfRk9DVVNJTiA9IGBmb2N1c2luJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfUkVTSVpFID0gYHJlc2l6ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RJU01JU1MgPSBgY2xpY2suZGlzbWlzcyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV05fRElTTUlTUyA9IGBrZXlkb3duLmRpc21pc3Mke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9NT1VTRVVQX0RJU01JU1MgPSBgbW91c2V1cC5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VET1dOX0RJU01JU1MgPSBgbW91c2Vkb3duLmRpc21pc3Mke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9TQ1JPTExBQkxFID0gJ21vZGFsLWRpYWxvZy1zY3JvbGxhYmxlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TQ1JPTExCQVJfTUVBU1VSRVIgPSAnbW9kYWwtc2Nyb2xsYmFyLW1lYXN1cmUnXG5jb25zdCBDTEFTU19OQU1FX0JBQ0tEUk9QID0gJ21vZGFsLWJhY2tkcm9wJ1xuY29uc3QgQ0xBU1NfTkFNRV9PUEVOID0gJ21vZGFsLW9wZW4nXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuY29uc3QgQ0xBU1NfTkFNRV9TVEFUSUMgPSAnbW9kYWwtc3RhdGljJ1xuXG5jb25zdCBTRUxFQ1RPUl9ESUFMT0cgPSAnLm1vZGFsLWRpYWxvZydcbmNvbnN0IFNFTEVDVE9SX01PREFMX0JPRFkgPSAnLm1vZGFsLWJvZHknXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS10b2dnbGU9XCJtb2RhbFwiXSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfRElTTUlTUyA9ICdbZGF0YS1kaXNtaXNzPVwibW9kYWxcIl0nXG5jb25zdCBTRUxFQ1RPUl9GSVhFRF9DT05URU5UID0gJy5maXhlZC10b3AsIC5maXhlZC1ib3R0b20sIC5pcy1maXhlZCwgLnN0aWNreS10b3AnXG5jb25zdCBTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCA9ICcuc3RpY2t5LXRvcCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIE1vZGFsIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuX2RpYWxvZyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihTRUxFQ1RPUl9ESUFMT0cpXG4gICAgdGhpcy5fYmFja2Ryb3AgPSBudWxsXG4gICAgdGhpcy5faXNTaG93biA9IGZhbHNlXG4gICAgdGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcgPSBmYWxzZVxuICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSBmYWxzZVxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgdGhpcy5fc2Nyb2xsYmFyV2lkdGggPSAwXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHRvZ2dsZShyZWxhdGVkVGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU2hvd24gPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdyhyZWxhdGVkVGFyZ2V0KVxuICB9XG5cbiAgc2hvdyhyZWxhdGVkVGFyZ2V0KSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24gfHwgdGhpcy5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDTEFTU19OQU1FX0ZBREUpKSB7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gJC5FdmVudChFVkVOVF9TSE9XLCB7XG4gICAgICByZWxhdGVkVGFyZ2V0XG4gICAgfSlcblxuICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzaG93RXZlbnQpXG5cbiAgICBpZiAodGhpcy5faXNTaG93biB8fCBzaG93RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzU2hvd24gPSB0cnVlXG5cbiAgICB0aGlzLl9jaGVja1Njcm9sbGJhcigpXG4gICAgdGhpcy5fc2V0U2Nyb2xsYmFyKClcblxuICAgIHRoaXMuX2FkanVzdERpYWxvZygpXG5cbiAgICB0aGlzLl9zZXRFc2NhcGVFdmVudCgpXG4gICAgdGhpcy5fc2V0UmVzaXplRXZlbnQoKVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KS5vbihcbiAgICAgIEVWRU5UX0NMSUNLX0RJU01JU1MsXG4gICAgICBTRUxFQ1RPUl9EQVRBX0RJU01JU1MsXG4gICAgICBldmVudCA9PiB0aGlzLmhpZGUoZXZlbnQpXG4gICAgKVxuXG4gICAgJCh0aGlzLl9kaWFsb2cpLm9uKEVWRU5UX01PVVNFRE9XTl9ESVNNSVNTLCAoKSA9PiB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uZShFVkVOVF9NT1VTRVVQX0RJU01JU1MsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKCQoZXZlbnQudGFyZ2V0KS5pcyh0aGlzLl9lbGVtZW50KSkge1xuICAgICAgICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHRoaXMuX3Nob3dCYWNrZHJvcCgoKSA9PiB0aGlzLl9zaG93RWxlbWVudChyZWxhdGVkVGFyZ2V0KSlcbiAgfVxuXG4gIGhpZGUoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2lzU2hvd24gfHwgdGhpcy5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSAkLkV2ZW50KEVWRU5UX0hJREUpXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoaGlkZUV2ZW50KVxuXG4gICAgaWYgKCF0aGlzLl9pc1Nob3duIHx8IGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5faXNTaG93biA9IGZhbHNlXG4gICAgY29uc3QgdHJhbnNpdGlvbiA9ICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9GQURFKVxuXG4gICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWVcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRFc2NhcGVFdmVudCgpXG4gICAgdGhpcy5fc2V0UmVzaXplRXZlbnQoKVxuXG4gICAgJChkb2N1bWVudCkub2ZmKEVWRU5UX0ZPQ1VTSU4pXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfU0hPVylcblxuICAgICQodGhpcy5fZWxlbWVudCkub2ZmKEVWRU5UX0NMSUNLX0RJU01JU1MpXG4gICAgJCh0aGlzLl9kaWFsb2cpLm9mZihFVkVOVF9NT1VTRURPV05fRElTTUlTUylcblxuICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBldmVudCA9PiB0aGlzLl9oaWRlTW9kYWwoZXZlbnQpKVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9oaWRlTW9kYWwoKVxuICAgIH1cbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgW3dpbmRvdywgdGhpcy5fZWxlbWVudCwgdGhpcy5fZGlhbG9nXVxuICAgICAgLmZvckVhY2goaHRtbEVsZW1lbnQgPT4gJChodG1sRWxlbWVudCkub2ZmKEVWRU5UX0tFWSkpXG5cbiAgICAvKipcbiAgICAgKiBgZG9jdW1lbnRgIGhhcyAyIGV2ZW50cyBgRVZFTlRfRk9DVVNJTmAgYW5kIGBFVkVOVF9DTElDS19EQVRBX0FQSWBcbiAgICAgKiBEbyBub3QgbW92ZSBgZG9jdW1lbnRgIGluIGBodG1sRWxlbWVudHNgIGFycmF5XG4gICAgICogSXQgd2lsbCByZW1vdmUgYEVWRU5UX0NMSUNLX0RBVEFfQVBJYCBldmVudCB0aGF0IHNob3VsZCByZW1haW5cbiAgICAgKi9cbiAgICAkKGRvY3VtZW50KS5vZmYoRVZFTlRfRk9DVVNJTilcblxuICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcblxuICAgIHRoaXMuX2NvbmZpZyA9IG51bGxcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbFxuICAgIHRoaXMuX2RpYWxvZyA9IG51bGxcbiAgICB0aGlzLl9iYWNrZHJvcCA9IG51bGxcbiAgICB0aGlzLl9pc1Nob3duID0gbnVsbFxuICAgIHRoaXMuX2lzQm9keU92ZXJmbG93aW5nID0gbnVsbFxuICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSBudWxsXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gbnVsbFxuICAgIHRoaXMuX3Njcm9sbGJhcldpZHRoID0gbnVsbFxuICB9XG5cbiAgaGFuZGxlVXBkYXRlKCkge1xuICAgIHRoaXMuX2FkanVzdERpYWxvZygpXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uY29uZmlnXG4gICAgfVxuICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKSB7XG4gICAgY29uc3QgaGlkZUV2ZW50UHJldmVudGVkID0gJC5FdmVudChFVkVOVF9ISURFX1BSRVZFTlRFRClcblxuICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihoaWRlRXZlbnRQcmV2ZW50ZWQpXG4gICAgaWYgKGhpZGVFdmVudFByZXZlbnRlZC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNNb2RhbE92ZXJmbG93aW5nID0gdGhpcy5fZWxlbWVudC5zY3JvbGxIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG5cbiAgICBpZiAoIWlzTW9kYWxPdmVyZmxvd2luZykge1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJ1xuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NUQVRJQylcblxuICAgIGNvbnN0IG1vZGFsVHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9kaWFsb2cpXG4gICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoVXRpbC5UUkFOU0lUSU9OX0VORClcblxuICAgICQodGhpcy5fZWxlbWVudCkub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsICgpID0+IHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NUQVRJQylcbiAgICAgIGlmICghaXNNb2RhbE92ZXJmbG93aW5nKSB7XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsICgpID0+IHtcbiAgICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93WSA9ICcnXG4gICAgICAgIH0pXG4gICAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRoaXMuX2VsZW1lbnQsIG1vZGFsVHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgICAgfVxuICAgIH0pXG4gICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQobW9kYWxUcmFuc2l0aW9uRHVyYXRpb24pXG4gICAgdGhpcy5fZWxlbWVudC5mb2N1cygpXG4gIH1cblxuICBfc2hvd0VsZW1lbnQocmVsYXRlZFRhcmdldCkge1xuICAgIGNvbnN0IHRyYW5zaXRpb24gPSAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfRkFERSlcbiAgICBjb25zdCBtb2RhbEJvZHkgPSB0aGlzLl9kaWFsb2cgPyB0aGlzLl9kaWFsb2cucXVlcnlTZWxlY3RvcihTRUxFQ1RPUl9NT0RBTF9CT0RZKSA6IG51bGxcblxuICAgIGlmICghdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlIHx8XG4gICAgICAgIHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgIC8vIERvbid0IG1vdmUgbW9kYWwncyBET00gcG9zaXRpb25cbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJylcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcsIHRydWUpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZGlhbG9nJylcblxuICAgIGlmICgkKHRoaXMuX2RpYWxvZykuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9TQ1JPTExBQkxFKSAmJiBtb2RhbEJvZHkpIHtcbiAgICAgIG1vZGFsQm9keS5zY3JvbGxUb3AgPSAwXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc2Nyb2xsVG9wID0gMFxuICAgIH1cblxuICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICBVdGlsLnJlZmxvdyh0aGlzLl9lbGVtZW50KVxuICAgIH1cblxuICAgICQodGhpcy5fZWxlbWVudCkuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5mb2N1cykge1xuICAgICAgdGhpcy5fZW5mb3JjZUZvY3VzKClcbiAgICB9XG5cbiAgICBjb25zdCBzaG93bkV2ZW50ID0gJC5FdmVudChFVkVOVF9TSE9XTiwge1xuICAgICAgcmVsYXRlZFRhcmdldFxuICAgIH0pXG5cbiAgICBjb25zdCB0cmFuc2l0aW9uQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLmZvY3VzKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNob3duRXZlbnQpXG4gICAgfVxuXG4gICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZGlhbG9nKVxuXG4gICAgICAkKHRoaXMuX2RpYWxvZylcbiAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCB0cmFuc2l0aW9uQ29tcGxldGUpXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zaXRpb25Db21wbGV0ZSgpXG4gICAgfVxuICB9XG5cbiAgX2VuZm9yY2VGb2N1cygpIHtcbiAgICAkKGRvY3VtZW50KVxuICAgICAgLm9mZihFVkVOVF9GT0NVU0lOKSAvLyBHdWFyZCBhZ2FpbnN0IGluZmluaXRlIGZvY3VzIGxvb3BcbiAgICAgIC5vbihFVkVOVF9GT0NVU0lOLCBldmVudCA9PiB7XG4gICAgICAgIGlmIChkb2N1bWVudCAhPT0gZXZlbnQudGFyZ2V0ICYmXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50ICE9PSBldmVudC50YXJnZXQgJiZcbiAgICAgICAgICAgICQodGhpcy5fZWxlbWVudCkuaGFzKGV2ZW50LnRhcmdldCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5fZWxlbWVudC5mb2N1cygpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cblxuICBfc2V0RXNjYXBlRXZlbnQoKSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24pIHtcbiAgICAgICQodGhpcy5fZWxlbWVudCkub24oRVZFTlRfS0VZRE9XTl9ESVNNSVNTLCBldmVudCA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9jb25maWcua2V5Ym9hcmQgJiYgZXZlbnQud2hpY2ggPT09IEVTQ0FQRV9LRVlDT0RFKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX2NvbmZpZy5rZXlib2FyZCAmJiBldmVudC53aGljaCA9PT0gRVNDQVBFX0tFWUNPREUpIHtcbiAgICAgICAgICB0aGlzLl90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKCF0aGlzLl9pc1Nob3duKSB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9mZihFVkVOVF9LRVlET1dOX0RJU01JU1MpXG4gICAgfVxuICB9XG5cbiAgX3NldFJlc2l6ZUV2ZW50KCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duKSB7XG4gICAgICAkKHdpbmRvdykub24oRVZFTlRfUkVTSVpFLCBldmVudCA9PiB0aGlzLmhhbmRsZVVwZGF0ZShldmVudCkpXG4gICAgfSBlbHNlIHtcbiAgICAgICQod2luZG93KS5vZmYoRVZFTlRfUkVTSVpFKVxuICAgIH1cbiAgfVxuXG4gIF9oaWRlTW9kYWwoKSB7XG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdHJ1ZSlcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcpXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3JvbGUnKVxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgdGhpcy5fc2hvd0JhY2tkcm9wKCgpID0+IHtcbiAgICAgICQoZG9jdW1lbnQuYm9keSkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9PUEVOKVxuICAgICAgdGhpcy5fcmVzZXRBZGp1c3RtZW50cygpXG4gICAgICB0aGlzLl9yZXNldFNjcm9sbGJhcigpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoRVZFTlRfSElEREVOKVxuICAgIH0pXG4gIH1cblxuICBfcmVtb3ZlQmFja2Ryb3AoKSB7XG4gICAgaWYgKHRoaXMuX2JhY2tkcm9wKSB7XG4gICAgICAkKHRoaXMuX2JhY2tkcm9wKS5yZW1vdmUoKVxuICAgICAgdGhpcy5fYmFja2Ryb3AgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgX3Nob3dCYWNrZHJvcChjYWxsYmFjaykge1xuICAgIGNvbnN0IGFuaW1hdGUgPSAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfRkFERSkgP1xuICAgICAgQ0xBU1NfTkFNRV9GQURFIDogJydcblxuICAgIGlmICh0aGlzLl9pc1Nob3duICYmIHRoaXMuX2NvbmZpZy5iYWNrZHJvcCkge1xuICAgICAgdGhpcy5fYmFja2Ryb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgdGhpcy5fYmFja2Ryb3AuY2xhc3NOYW1lID0gQ0xBU1NfTkFNRV9CQUNLRFJPUFxuXG4gICAgICBpZiAoYW5pbWF0ZSkge1xuICAgICAgICB0aGlzLl9iYWNrZHJvcC5jbGFzc0xpc3QuYWRkKGFuaW1hdGUpXG4gICAgICB9XG5cbiAgICAgICQodGhpcy5fYmFja2Ryb3ApLmFwcGVuZFRvKGRvY3VtZW50LmJvZHkpXG5cbiAgICAgICQodGhpcy5fZWxlbWVudCkub24oRVZFTlRfQ0xJQ0tfRElTTUlTUywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAodGhpcy5faWdub3JlQmFja2Ryb3BDbGljaykge1xuICAgICAgICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSBmYWxzZVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gZXZlbnQuY3VycmVudFRhcmdldCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgICB0aGlzLl90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBpZiAoYW5pbWF0ZSkge1xuICAgICAgICBVdGlsLnJlZmxvdyh0aGlzLl9iYWNrZHJvcClcbiAgICAgIH1cblxuICAgICAgJCh0aGlzLl9iYWNrZHJvcCkuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoIWFuaW1hdGUpIHtcbiAgICAgICAgY2FsbGJhY2soKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2JhY2tkcm9wKVxuXG4gICAgICAkKHRoaXMuX2JhY2tkcm9wKVxuICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNhbGxiYWNrKVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24pXG4gICAgfSBlbHNlIGlmICghdGhpcy5faXNTaG93biAmJiB0aGlzLl9iYWNrZHJvcCkge1xuICAgICAgJCh0aGlzLl9iYWNrZHJvcCkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgICBjb25zdCBjYWxsYmFja1JlbW92ZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlQmFja2Ryb3AoKVxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjaygpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9GQURFKSkge1xuICAgICAgICBjb25zdCBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fYmFja2Ryb3ApXG5cbiAgICAgICAgJCh0aGlzLl9iYWNrZHJvcClcbiAgICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNhbGxiYWNrUmVtb3ZlKVxuICAgICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZChiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrUmVtb3ZlKClcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpXG4gICAgfVxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB0aGUgZm9sbG93aW5nIG1ldGhvZHMgYXJlIHVzZWQgdG8gaGFuZGxlIG92ZXJmbG93aW5nIG1vZGFsc1xuICAvLyB0b2RvIChmYXQpOiB0aGVzZSBzaG91bGQgcHJvYmFibHkgYmUgcmVmYWN0b3JlZCBvdXQgb2YgbW9kYWwuanNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIF9hZGp1c3REaWFsb2coKSB7XG4gICAgY29uc3QgaXNNb2RhbE92ZXJmbG93aW5nID0gdGhpcy5fZWxlbWVudC5zY3JvbGxIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG5cbiAgICBpZiAoIXRoaXMuX2lzQm9keU92ZXJmbG93aW5nICYmIGlzTW9kYWxPdmVyZmxvd2luZykge1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nTGVmdCA9IGAke3RoaXMuX3Njcm9sbGJhcldpZHRofXB4YFxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyAmJiAhaXNNb2RhbE92ZXJmbG93aW5nKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke3RoaXMuX3Njcm9sbGJhcldpZHRofXB4YFxuICAgIH1cbiAgfVxuXG4gIF9yZXNldEFkanVzdG1lbnRzKCkge1xuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ0xlZnQgPSAnJ1xuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gJydcbiAgfVxuXG4gIF9jaGVja1Njcm9sbGJhcigpIHtcbiAgICBjb25zdCByZWN0ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHRoaXMuX2lzQm9keU92ZXJmbG93aW5nID0gTWF0aC5yb3VuZChyZWN0LmxlZnQgKyByZWN0LnJpZ2h0KSA8IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgdGhpcy5fc2Nyb2xsYmFyV2lkdGggPSB0aGlzLl9nZXRTY3JvbGxiYXJXaWR0aCgpXG4gIH1cblxuICBfc2V0U2Nyb2xsYmFyKCkge1xuICAgIGlmICh0aGlzLl9pc0JvZHlPdmVyZmxvd2luZykge1xuICAgICAgLy8gTm90ZTogRE9NTm9kZS5zdHlsZS5wYWRkaW5nUmlnaHQgcmV0dXJucyB0aGUgYWN0dWFsIHZhbHVlIG9yICcnIGlmIG5vdCBzZXRcbiAgICAgIC8vICAgd2hpbGUgJChET01Ob2RlKS5jc3MoJ3BhZGRpbmctcmlnaHQnKSByZXR1cm5zIHRoZSBjYWxjdWxhdGVkIHZhbHVlIG9yIDAgaWYgbm90IHNldFxuICAgICAgY29uc3QgZml4ZWRDb250ZW50ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQpKVxuICAgICAgY29uc3Qgc3RpY2t5Q29udGVudCA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCkpXG5cbiAgICAgIC8vIEFkanVzdCBmaXhlZCBjb250ZW50IHBhZGRpbmdcbiAgICAgICQoZml4ZWRDb250ZW50KS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBhY3R1YWxQYWRkaW5nID0gZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHRcbiAgICAgICAgY29uc3QgY2FsY3VsYXRlZFBhZGRpbmcgPSAkKGVsZW1lbnQpLmNzcygncGFkZGluZy1yaWdodCcpXG4gICAgICAgICQoZWxlbWVudClcbiAgICAgICAgICAuZGF0YSgncGFkZGluZy1yaWdodCcsIGFjdHVhbFBhZGRpbmcpXG4gICAgICAgICAgLmNzcygncGFkZGluZy1yaWdodCcsIGAke3BhcnNlRmxvYXQoY2FsY3VsYXRlZFBhZGRpbmcpICsgdGhpcy5fc2Nyb2xsYmFyV2lkdGh9cHhgKVxuICAgICAgfSlcblxuICAgICAgLy8gQWRqdXN0IHN0aWNreSBjb250ZW50IG1hcmdpblxuICAgICAgJChzdGlja3lDb250ZW50KS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBhY3R1YWxNYXJnaW4gPSBlbGVtZW50LnN0eWxlLm1hcmdpblJpZ2h0XG4gICAgICAgIGNvbnN0IGNhbGN1bGF0ZWRNYXJnaW4gPSAkKGVsZW1lbnQpLmNzcygnbWFyZ2luLXJpZ2h0JylcbiAgICAgICAgJChlbGVtZW50KVxuICAgICAgICAgIC5kYXRhKCdtYXJnaW4tcmlnaHQnLCBhY3R1YWxNYXJnaW4pXG4gICAgICAgICAgLmNzcygnbWFyZ2luLXJpZ2h0JywgYCR7cGFyc2VGbG9hdChjYWxjdWxhdGVkTWFyZ2luKSAtIHRoaXMuX3Njcm9sbGJhcldpZHRofXB4YClcbiAgICAgIH0pXG5cbiAgICAgIC8vIEFkanVzdCBib2R5IHBhZGRpbmdcbiAgICAgIGNvbnN0IGFjdHVhbFBhZGRpbmcgPSBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodFxuICAgICAgY29uc3QgY2FsY3VsYXRlZFBhZGRpbmcgPSAkKGRvY3VtZW50LmJvZHkpLmNzcygncGFkZGluZy1yaWdodCcpXG4gICAgICAkKGRvY3VtZW50LmJvZHkpXG4gICAgICAgIC5kYXRhKCdwYWRkaW5nLXJpZ2h0JywgYWN0dWFsUGFkZGluZylcbiAgICAgICAgLmNzcygncGFkZGluZy1yaWdodCcsIGAke3BhcnNlRmxvYXQoY2FsY3VsYXRlZFBhZGRpbmcpICsgdGhpcy5fc2Nyb2xsYmFyV2lkdGh9cHhgKVxuICAgIH1cblxuICAgICQoZG9jdW1lbnQuYm9keSkuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9PUEVOKVxuICB9XG5cbiAgX3Jlc2V0U2Nyb2xsYmFyKCkge1xuICAgIC8vIFJlc3RvcmUgZml4ZWQgY29udGVudCBwYWRkaW5nXG4gICAgY29uc3QgZml4ZWRDb250ZW50ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQpKVxuICAgICQoZml4ZWRDb250ZW50KS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgcGFkZGluZyA9ICQoZWxlbWVudCkuZGF0YSgncGFkZGluZy1yaWdodCcpXG4gICAgICAkKGVsZW1lbnQpLnJlbW92ZURhdGEoJ3BhZGRpbmctcmlnaHQnKVxuICAgICAgZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBwYWRkaW5nID8gcGFkZGluZyA6ICcnXG4gICAgfSlcblxuICAgIC8vIFJlc3RvcmUgc3RpY2t5IGNvbnRlbnRcbiAgICBjb25zdCBlbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgJHtTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVH1gKSlcbiAgICAkKGVsZW1lbnRzKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgbWFyZ2luID0gJChlbGVtZW50KS5kYXRhKCdtYXJnaW4tcmlnaHQnKVxuICAgICAgaWYgKHR5cGVvZiBtYXJnaW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICQoZWxlbWVudCkuY3NzKCdtYXJnaW4tcmlnaHQnLCBtYXJnaW4pLnJlbW92ZURhdGEoJ21hcmdpbi1yaWdodCcpXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFJlc3RvcmUgYm9keSBwYWRkaW5nXG4gICAgY29uc3QgcGFkZGluZyA9ICQoZG9jdW1lbnQuYm9keSkuZGF0YSgncGFkZGluZy1yaWdodCcpXG4gICAgJChkb2N1bWVudC5ib2R5KS5yZW1vdmVEYXRhKCdwYWRkaW5nLXJpZ2h0JylcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IHBhZGRpbmcgPyBwYWRkaW5nIDogJydcbiAgfVxuXG4gIF9nZXRTY3JvbGxiYXJXaWR0aCgpIHsgLy8gdGh4IGQud2Fsc2hcbiAgICBjb25zdCBzY3JvbGxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNjcm9sbERpdi5jbGFzc05hbWUgPSBDTEFTU19OQU1FX1NDUk9MTEJBUl9NRUFTVVJFUlxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2Nyb2xsRGl2KVxuICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gc2Nyb2xsRGl2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC0gc2Nyb2xsRGl2LmNsaWVudFdpZHRoXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzY3JvbGxEaXYpXG4gICAgcmV0dXJuIHNjcm9sbGJhcldpZHRoXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcsIHJlbGF0ZWRUYXJnZXQpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuICAgICAgY29uc3QgX2NvbmZpZyA9IHtcbiAgICAgICAgLi4uRGVmYXVsdCxcbiAgICAgICAgLi4uJCh0aGlzKS5kYXRhKCksXG4gICAgICAgIC4uLih0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fSlcbiAgICAgIH1cblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgTW9kYWwodGhpcywgX2NvbmZpZylcbiAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtjb25maWddKHJlbGF0ZWRUYXJnZXQpXG4gICAgICB9IGVsc2UgaWYgKF9jb25maWcuc2hvdykge1xuICAgICAgICBkYXRhLnNob3cocmVsYXRlZFRhcmdldClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJChkb2N1bWVudCkub24oRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgbGV0IHRhcmdldFxuICBjb25zdCBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0aGlzKVxuXG4gIGlmIChzZWxlY3Rvcikge1xuICAgIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gIH1cblxuICBjb25zdCBjb25maWcgPSAkKHRhcmdldCkuZGF0YShEQVRBX0tFWSkgP1xuICAgICd0b2dnbGUnIDoge1xuICAgICAgLi4uJCh0YXJnZXQpLmRhdGEoKSxcbiAgICAgIC4uLiQodGhpcykuZGF0YSgpXG4gICAgfVxuXG4gIGlmICh0aGlzLnRhZ05hbWUgPT09ICdBJyB8fCB0aGlzLnRhZ05hbWUgPT09ICdBUkVBJykge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGNvbnN0ICR0YXJnZXQgPSAkKHRhcmdldCkub25lKEVWRU5UX1NIT1csIHNob3dFdmVudCA9PiB7XG4gICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgLy8gT25seSByZWdpc3RlciBmb2N1cyByZXN0b3JlciBpZiBtb2RhbCB3aWxsIGFjdHVhbGx5IGdldCBzaG93blxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgJHRhcmdldC5vbmUoRVZFTlRfSElEREVOLCAoKSA9PiB7XG4gICAgICBpZiAoJCh0aGlzKS5pcygnOnZpc2libGUnKSkge1xuICAgICAgICB0aGlzLmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICB9KVxuXG4gIE1vZGFsLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRhcmdldCksIGNvbmZpZywgdGhpcylcbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQuZm5bTkFNRV0gPSBNb2RhbC5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gTW9kYWxcbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gTW9kYWwuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC42LjApOiB0b29scy9zYW5pdGl6ZXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCB1cmlBdHRycyA9IFtcbiAgJ2JhY2tncm91bmQnLFxuICAnY2l0ZScsXG4gICdocmVmJyxcbiAgJ2l0ZW10eXBlJyxcbiAgJ2xvbmdkZXNjJyxcbiAgJ3Bvc3RlcicsXG4gICdzcmMnLFxuICAneGxpbms6aHJlZidcbl1cblxuY29uc3QgQVJJQV9BVFRSSUJVVEVfUEFUVEVSTiA9IC9eYXJpYS1bXFx3LV0qJC9pXG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0V2hpdGVsaXN0ID0ge1xuICAvLyBHbG9iYWwgYXR0cmlidXRlcyBhbGxvd2VkIG9uIGFueSBzdXBwbGllZCBlbGVtZW50IGJlbG93LlxuICAnKic6IFsnY2xhc3MnLCAnZGlyJywgJ2lkJywgJ2xhbmcnLCAncm9sZScsIEFSSUFfQVRUUklCVVRFX1BBVFRFUk5dLFxuICBhOiBbJ3RhcmdldCcsICdocmVmJywgJ3RpdGxlJywgJ3JlbCddLFxuICBhcmVhOiBbXSxcbiAgYjogW10sXG4gIGJyOiBbXSxcbiAgY29sOiBbXSxcbiAgY29kZTogW10sXG4gIGRpdjogW10sXG4gIGVtOiBbXSxcbiAgaHI6IFtdLFxuICBoMTogW10sXG4gIGgyOiBbXSxcbiAgaDM6IFtdLFxuICBoNDogW10sXG4gIGg1OiBbXSxcbiAgaDY6IFtdLFxuICBpOiBbXSxcbiAgaW1nOiBbJ3NyYycsICdzcmNzZXQnLCAnYWx0JywgJ3RpdGxlJywgJ3dpZHRoJywgJ2hlaWdodCddLFxuICBsaTogW10sXG4gIG9sOiBbXSxcbiAgcDogW10sXG4gIHByZTogW10sXG4gIHM6IFtdLFxuICBzbWFsbDogW10sXG4gIHNwYW46IFtdLFxuICBzdWI6IFtdLFxuICBzdXA6IFtdLFxuICBzdHJvbmc6IFtdLFxuICB1OiBbXSxcbiAgdWw6IFtdXG59XG5cbi8qKlxuICogQSBwYXR0ZXJuIHRoYXQgcmVjb2duaXplcyBhIGNvbW1vbmx5IHVzZWZ1bCBzdWJzZXQgb2YgVVJMcyB0aGF0IGFyZSBzYWZlLlxuICpcbiAqIFNob3V0b3V0IHRvIEFuZ3VsYXIgNyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNy4yLjQvcGFja2FnZXMvY29yZS9zcmMvc2FuaXRpemF0aW9uL3VybF9zYW5pdGl6ZXIudHNcbiAqL1xuY29uc3QgU0FGRV9VUkxfUEFUVEVSTiA9IC9eKD86KD86aHR0cHM/fG1haWx0b3xmdHB8dGVsfGZpbGUpOnxbXiMmLzo/XSooPzpbIy8/XXwkKSkvZ2lcblxuLyoqXG4gKiBBIHBhdHRlcm4gdGhhdCBtYXRjaGVzIHNhZmUgZGF0YSBVUkxzLiBPbmx5IG1hdGNoZXMgaW1hZ2UsIHZpZGVvIGFuZCBhdWRpbyB0eXBlcy5cbiAqXG4gKiBTaG91dG91dCB0byBBbmd1bGFyIDcgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzcuMi40L3BhY2thZ2VzL2NvcmUvc3JjL3Nhbml0aXphdGlvbi91cmxfc2FuaXRpemVyLnRzXG4gKi9cbmNvbnN0IERBVEFfVVJMX1BBVFRFUk4gPSAvXmRhdGE6KD86aW1hZ2VcXC8oPzpibXB8Z2lmfGpwZWd8anBnfHBuZ3x0aWZmfHdlYnApfHZpZGVvXFwvKD86bXBlZ3xtcDR8b2dnfHdlYm0pfGF1ZGlvXFwvKD86bXAzfG9nYXxvZ2d8b3B1cykpO2Jhc2U2NCxbXFxkKy9hLXpdKz0qJC9pXG5cbmZ1bmN0aW9uIGFsbG93ZWRBdHRyaWJ1dGUoYXR0ciwgYWxsb3dlZEF0dHJpYnV0ZUxpc3QpIHtcbiAgY29uc3QgYXR0ck5hbWUgPSBhdHRyLm5vZGVOYW1lLnRvTG93ZXJDYXNlKClcblxuICBpZiAoYWxsb3dlZEF0dHJpYnV0ZUxpc3QuaW5kZXhPZihhdHRyTmFtZSkgIT09IC0xKSB7XG4gICAgaWYgKHVyaUF0dHJzLmluZGV4T2YoYXR0ck5hbWUpICE9PSAtMSkge1xuICAgICAgcmV0dXJuIEJvb2xlYW4oYXR0ci5ub2RlVmFsdWUubWF0Y2goU0FGRV9VUkxfUEFUVEVSTikgfHwgYXR0ci5ub2RlVmFsdWUubWF0Y2goREFUQV9VUkxfUEFUVEVSTikpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGNvbnN0IHJlZ0V4cCA9IGFsbG93ZWRBdHRyaWJ1dGVMaXN0LmZpbHRlcihhdHRyUmVnZXggPT4gYXR0clJlZ2V4IGluc3RhbmNlb2YgUmVnRXhwKVxuXG4gIC8vIENoZWNrIGlmIGEgcmVndWxhciBleHByZXNzaW9uIHZhbGlkYXRlcyB0aGUgYXR0cmlidXRlLlxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gcmVnRXhwLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGF0dHJOYW1lLm1hdGNoKHJlZ0V4cFtpXSkpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYW5pdGl6ZUh0bWwodW5zYWZlSHRtbCwgd2hpdGVMaXN0LCBzYW5pdGl6ZUZuKSB7XG4gIGlmICh1bnNhZmVIdG1sLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB1bnNhZmVIdG1sXG4gIH1cblxuICBpZiAoc2FuaXRpemVGbiAmJiB0eXBlb2Ygc2FuaXRpemVGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBzYW5pdGl6ZUZuKHVuc2FmZUh0bWwpXG4gIH1cblxuICBjb25zdCBkb21QYXJzZXIgPSBuZXcgd2luZG93LkRPTVBhcnNlcigpXG4gIGNvbnN0IGNyZWF0ZWREb2N1bWVudCA9IGRvbVBhcnNlci5wYXJzZUZyb21TdHJpbmcodW5zYWZlSHRtbCwgJ3RleHQvaHRtbCcpXG4gIGNvbnN0IHdoaXRlbGlzdEtleXMgPSBPYmplY3Qua2V5cyh3aGl0ZUxpc3QpXG4gIGNvbnN0IGVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChjcmVhdGVkRG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yQWxsKCcqJykpXG5cbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgZWwgPSBlbGVtZW50c1tpXVxuICAgIGNvbnN0IGVsTmFtZSA9IGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKClcblxuICAgIGlmICh3aGl0ZWxpc3RLZXlzLmluZGV4T2YoZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkgPT09IC0xKSB7XG4gICAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKVxuXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGNvbnN0IGF0dHJpYnV0ZUxpc3QgPSBbXS5zbGljZS5jYWxsKGVsLmF0dHJpYnV0ZXMpXG4gICAgY29uc3Qgd2hpdGVsaXN0ZWRBdHRyaWJ1dGVzID0gW10uY29uY2F0KHdoaXRlTGlzdFsnKiddIHx8IFtdLCB3aGl0ZUxpc3RbZWxOYW1lXSB8fCBbXSlcblxuICAgIGF0dHJpYnV0ZUxpc3QuZm9yRWFjaChhdHRyID0+IHtcbiAgICAgIGlmICghYWxsb3dlZEF0dHJpYnV0ZShhdHRyLCB3aGl0ZWxpc3RlZEF0dHJpYnV0ZXMpKSB7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShhdHRyLm5vZGVOYW1lKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gY3JlYXRlZERvY3VtZW50LmJvZHkuaW5uZXJIVE1MXG59XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjYuMCk6IHRvb2x0aXAuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQge1xuICBEZWZhdWx0V2hpdGVsaXN0LFxuICBzYW5pdGl6ZUh0bWxcbn0gZnJvbSAnLi90b29scy9zYW5pdGl6ZXInXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgUG9wcGVyIGZyb20gJ3BvcHBlci5qcydcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICd0b29sdGlwJ1xuY29uc3QgVkVSU0lPTiA9ICc0LjYuMCdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLnRvb2x0aXAnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXVxuY29uc3QgQ0xBU1NfUFJFRklYID0gJ2JzLXRvb2x0aXAnXG5jb25zdCBCU0NMU19QUkVGSVhfUkVHRVggPSBuZXcgUmVnRXhwKGAoXnxcXFxccykke0NMQVNTX1BSRUZJWH1cXFxcUytgLCAnZycpXG5jb25zdCBESVNBTExPV0VEX0FUVFJJQlVURVMgPSBbJ3Nhbml0aXplJywgJ3doaXRlTGlzdCcsICdzYW5pdGl6ZUZuJ11cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGFuaW1hdGlvbjogJ2Jvb2xlYW4nLFxuICB0ZW1wbGF0ZTogJ3N0cmluZycsXG4gIHRpdGxlOiAnKHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9uKScsXG4gIHRyaWdnZXI6ICdzdHJpbmcnLFxuICBkZWxheTogJyhudW1iZXJ8b2JqZWN0KScsXG4gIGh0bWw6ICdib29sZWFuJyxcbiAgc2VsZWN0b3I6ICcoc3RyaW5nfGJvb2xlYW4pJyxcbiAgcGxhY2VtZW50OiAnKHN0cmluZ3xmdW5jdGlvbiknLFxuICBvZmZzZXQ6ICcobnVtYmVyfHN0cmluZ3xmdW5jdGlvbiknLFxuICBjb250YWluZXI6ICcoc3RyaW5nfGVsZW1lbnR8Ym9vbGVhbiknLFxuICBmYWxsYmFja1BsYWNlbWVudDogJyhzdHJpbmd8YXJyYXkpJyxcbiAgYm91bmRhcnk6ICcoc3RyaW5nfGVsZW1lbnQpJyxcbiAgY3VzdG9tQ2xhc3M6ICcoc3RyaW5nfGZ1bmN0aW9uKScsXG4gIHNhbml0aXplOiAnYm9vbGVhbicsXG4gIHNhbml0aXplRm46ICcobnVsbHxmdW5jdGlvbiknLFxuICB3aGl0ZUxpc3Q6ICdvYmplY3QnLFxuICBwb3BwZXJDb25maWc6ICcobnVsbHxvYmplY3QpJ1xufVxuXG5jb25zdCBBdHRhY2htZW50TWFwID0ge1xuICBBVVRPOiAnYXV0bycsXG4gIFRPUDogJ3RvcCcsXG4gIFJJR0hUOiAncmlnaHQnLFxuICBCT1RUT006ICdib3R0b20nLFxuICBMRUZUOiAnbGVmdCdcbn1cblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYW5pbWF0aW9uOiB0cnVlLFxuICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJ0b29sdGlwXCIgcm9sZT1cInRvb2x0aXBcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJhcnJvd1wiPjwvZGl2PicgK1xuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj48L2Rpdj48L2Rpdj4nLFxuICB0cmlnZ2VyOiAnaG92ZXIgZm9jdXMnLFxuICB0aXRsZTogJycsXG4gIGRlbGF5OiAwLFxuICBodG1sOiBmYWxzZSxcbiAgc2VsZWN0b3I6IGZhbHNlLFxuICBwbGFjZW1lbnQ6ICd0b3AnLFxuICBvZmZzZXQ6IDAsXG4gIGNvbnRhaW5lcjogZmFsc2UsXG4gIGZhbGxiYWNrUGxhY2VtZW50OiAnZmxpcCcsXG4gIGJvdW5kYXJ5OiAnc2Nyb2xsUGFyZW50JyxcbiAgY3VzdG9tQ2xhc3M6ICcnLFxuICBzYW5pdGl6ZTogdHJ1ZSxcbiAgc2FuaXRpemVGbjogbnVsbCxcbiAgd2hpdGVMaXN0OiBEZWZhdWx0V2hpdGVsaXN0LFxuICBwb3BwZXJDb25maWc6IG51bGxcbn1cblxuY29uc3QgSE9WRVJfU1RBVEVfU0hPVyA9ICdzaG93J1xuY29uc3QgSE9WRVJfU1RBVEVfT1VUID0gJ291dCdcblxuY29uc3QgRXZlbnQgPSB7XG4gIEhJREU6IGBoaWRlJHtFVkVOVF9LRVl9YCxcbiAgSElEREVOOiBgaGlkZGVuJHtFVkVOVF9LRVl9YCxcbiAgU0hPVzogYHNob3cke0VWRU5UX0tFWX1gLFxuICBTSE9XTjogYHNob3duJHtFVkVOVF9LRVl9YCxcbiAgSU5TRVJURUQ6IGBpbnNlcnRlZCR7RVZFTlRfS0VZfWAsXG4gIENMSUNLOiBgY2xpY2ske0VWRU5UX0tFWX1gLFxuICBGT0NVU0lOOiBgZm9jdXNpbiR7RVZFTlRfS0VZfWAsXG4gIEZPQ1VTT1VUOiBgZm9jdXNvdXQke0VWRU5UX0tFWX1gLFxuICBNT1VTRUVOVEVSOiBgbW91c2VlbnRlciR7RVZFTlRfS0VZfWAsXG4gIE1PVVNFTEVBVkU6IGBtb3VzZWxlYXZlJHtFVkVOVF9LRVl9YFxufVxuXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuXG5jb25zdCBTRUxFQ1RPUl9UT09MVElQX0lOTkVSID0gJy50b29sdGlwLWlubmVyJ1xuY29uc3QgU0VMRUNUT1JfQVJST1cgPSAnLmFycm93J1xuXG5jb25zdCBUUklHR0VSX0hPVkVSID0gJ2hvdmVyJ1xuY29uc3QgVFJJR0dFUl9GT0NVUyA9ICdmb2N1cydcbmNvbnN0IFRSSUdHRVJfQ0xJQ0sgPSAnY2xpY2snXG5jb25zdCBUUklHR0VSX01BTlVBTCA9ICdtYW51YWwnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBUb29sdGlwIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgaWYgKHR5cGVvZiBQb3BwZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb290c3RyYXBcXCdzIHRvb2x0aXBzIHJlcXVpcmUgUG9wcGVyIChodHRwczovL3BvcHBlci5qcy5vcmcpJylcbiAgICB9XG5cbiAgICAvLyBwcml2YXRlXG4gICAgdGhpcy5faXNFbmFibGVkID0gdHJ1ZVxuICAgIHRoaXMuX3RpbWVvdXQgPSAwXG4gICAgdGhpcy5faG92ZXJTdGF0ZSA9ICcnXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlciA9IHt9XG4gICAgdGhpcy5fcG9wcGVyID0gbnVsbFxuXG4gICAgLy8gUHJvdGVjdGVkXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLnRpcCA9IG51bGxcblxuICAgIHRoaXMuX3NldExpc3RlbmVycygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgc3RhdGljIGdldCBEQVRBX0tFWSgpIHtcbiAgICByZXR1cm4gREFUQV9LRVlcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRXZlbnQoKSB7XG4gICAgcmV0dXJuIEV2ZW50XG4gIH1cblxuICBzdGF0aWMgZ2V0IEVWRU5UX0tFWSgpIHtcbiAgICByZXR1cm4gRVZFTlRfS0VZXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMuX2lzRW5hYmxlZCA9IHRydWVcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5faXNFbmFibGVkID0gZmFsc2VcbiAgfVxuXG4gIHRvZ2dsZUVuYWJsZWQoKSB7XG4gICAgdGhpcy5faXNFbmFibGVkID0gIXRoaXMuX2lzRW5hYmxlZFxuICB9XG5cbiAgdG9nZ2xlKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLl9pc0VuYWJsZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChldmVudCkge1xuICAgICAgY29uc3QgZGF0YUtleSA9IHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVlcbiAgICAgIGxldCBjb250ZXh0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXkpXG5cbiAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICBjb250ZXh0ID0gbmV3IHRoaXMuY29uc3RydWN0b3IoXG4gICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldCxcbiAgICAgICAgICB0aGlzLl9nZXREZWxlZ2F0ZUNvbmZpZygpXG4gICAgICAgIClcbiAgICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXksIGNvbnRleHQpXG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXIuY2xpY2sgPSAhY29udGV4dC5fYWN0aXZlVHJpZ2dlci5jbGlja1xuXG4gICAgICBpZiAoY29udGV4dC5faXNXaXRoQWN0aXZlVHJpZ2dlcigpKSB7XG4gICAgICAgIGNvbnRleHQuX2VudGVyKG51bGwsIGNvbnRleHQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0Ll9sZWF2ZShudWxsLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoJCh0aGlzLmdldFRpcEVsZW1lbnQoKSkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKSkge1xuICAgICAgICB0aGlzLl9sZWF2ZShudWxsLCB0aGlzKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5fZW50ZXIobnVsbCwgdGhpcylcbiAgICB9XG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KVxuXG4gICAgJC5yZW1vdmVEYXRhKHRoaXMuZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWSlcblxuICAgICQodGhpcy5lbGVtZW50KS5vZmYodGhpcy5jb25zdHJ1Y3Rvci5FVkVOVF9LRVkpXG4gICAgJCh0aGlzLmVsZW1lbnQpLmNsb3Nlc3QoJy5tb2RhbCcpLm9mZignaGlkZS5icy5tb2RhbCcsIHRoaXMuX2hpZGVNb2RhbEhhbmRsZXIpXG5cbiAgICBpZiAodGhpcy50aXApIHtcbiAgICAgICQodGhpcy50aXApLnJlbW92ZSgpXG4gICAgfVxuXG4gICAgdGhpcy5faXNFbmFibGVkID0gbnVsbFxuICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsXG4gICAgdGhpcy5faG92ZXJTdGF0ZSA9IG51bGxcbiAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyID0gbnVsbFxuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KClcbiAgICB9XG5cbiAgICB0aGlzLl9wb3BwZXIgPSBudWxsXG4gICAgdGhpcy5lbGVtZW50ID0gbnVsbFxuICAgIHRoaXMuY29uZmlnID0gbnVsbFxuICAgIHRoaXMudGlwID0gbnVsbFxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBpZiAoJCh0aGlzLmVsZW1lbnQpLmNzcygnZGlzcGxheScpID09PSAnbm9uZScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHVzZSBzaG93IG9uIHZpc2libGUgZWxlbWVudHMnKVxuICAgIH1cblxuICAgIGNvbnN0IHNob3dFdmVudCA9ICQuRXZlbnQodGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5TSE9XKVxuICAgIGlmICh0aGlzLmlzV2l0aENvbnRlbnQoKSAmJiB0aGlzLl9pc0VuYWJsZWQpIHtcbiAgICAgICQodGhpcy5lbGVtZW50KS50cmlnZ2VyKHNob3dFdmVudClcblxuICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IFV0aWwuZmluZFNoYWRvd1Jvb3QodGhpcy5lbGVtZW50KVxuICAgICAgY29uc3QgaXNJblRoZURvbSA9ICQuY29udGFpbnMoXG4gICAgICAgIHNoYWRvd1Jvb3QgIT09IG51bGwgPyBzaGFkb3dSb290IDogdGhpcy5lbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgICB0aGlzLmVsZW1lbnRcbiAgICAgIClcblxuICAgICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fCAhaXNJblRoZURvbSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KClcbiAgICAgIGNvbnN0IHRpcElkID0gVXRpbC5nZXRVSUQodGhpcy5jb25zdHJ1Y3Rvci5OQU1FKVxuXG4gICAgICB0aXAuc2V0QXR0cmlidXRlKCdpZCcsIHRpcElkKVxuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIHRpcElkKVxuXG4gICAgICB0aGlzLnNldENvbnRlbnQoKVxuXG4gICAgICBpZiAodGhpcy5jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICAgICQodGlwKS5hZGRDbGFzcyhDTEFTU19OQU1FX0ZBREUpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBsYWNlbWVudCA9IHR5cGVvZiB0aGlzLmNvbmZpZy5wbGFjZW1lbnQgPT09ICdmdW5jdGlvbicgP1xuICAgICAgICB0aGlzLmNvbmZpZy5wbGFjZW1lbnQuY2FsbCh0aGlzLCB0aXAsIHRoaXMuZWxlbWVudCkgOlxuICAgICAgICB0aGlzLmNvbmZpZy5wbGFjZW1lbnRcblxuICAgICAgY29uc3QgYXR0YWNobWVudCA9IHRoaXMuX2dldEF0dGFjaG1lbnQocGxhY2VtZW50KVxuICAgICAgdGhpcy5hZGRBdHRhY2htZW50Q2xhc3MoYXR0YWNobWVudClcblxuICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5fZ2V0Q29udGFpbmVyKClcbiAgICAgICQodGlwKS5kYXRhKHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVksIHRoaXMpXG5cbiAgICAgIGlmICghJC5jb250YWlucyh0aGlzLmVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHRoaXMudGlwKSkge1xuICAgICAgICAkKHRpcCkuYXBwZW5kVG8oY29udGFpbmVyKVxuICAgICAgfVxuXG4gICAgICAkKHRoaXMuZWxlbWVudCkudHJpZ2dlcih0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LklOU0VSVEVEKVxuXG4gICAgICB0aGlzLl9wb3BwZXIgPSBuZXcgUG9wcGVyKHRoaXMuZWxlbWVudCwgdGlwLCB0aGlzLl9nZXRQb3BwZXJDb25maWcoYXR0YWNobWVudCkpXG5cbiAgICAgICQodGlwKS5hZGRDbGFzcyhDTEFTU19OQU1FX1NIT1cpXG4gICAgICAkKHRpcCkuYWRkQ2xhc3ModGhpcy5jb25maWcuY3VzdG9tQ2xhc3MpXG5cbiAgICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSBhZGQgZXh0cmFcbiAgICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgdG8gdGhlIGJvZHkncyBpbW1lZGlhdGUgY2hpbGRyZW47XG4gICAgICAvLyBvbmx5IG5lZWRlZCBiZWNhdXNlIG9mIGJyb2tlbiBldmVudCBkZWxlZ2F0aW9uIG9uIGlPU1xuICAgICAgLy8gaHR0cHM6Ly93d3cucXVpcmtzbW9kZS5vcmcvYmxvZy9hcmNoaXZlcy8yMDE0LzAyL21vdXNlX2V2ZW50X2J1Yi5odG1sXG4gICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgICQoZG9jdW1lbnQuYm9keSkuY2hpbGRyZW4oKS5vbignbW91c2VvdmVyJywgbnVsbCwgJC5ub29wKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmFuaW1hdGlvbikge1xuICAgICAgICAgIHRoaXMuX2ZpeFRyYW5zaXRpb24oKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJldkhvdmVyU3RhdGUgPSB0aGlzLl9ob3ZlclN0YXRlXG4gICAgICAgIHRoaXMuX2hvdmVyU3RhdGUgPSBudWxsXG5cbiAgICAgICAgJCh0aGlzLmVsZW1lbnQpLnRyaWdnZXIodGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5TSE9XTilcblxuICAgICAgICBpZiAocHJldkhvdmVyU3RhdGUgPT09IEhPVkVSX1NUQVRFX09VVCkge1xuICAgICAgICAgIHRoaXMuX2xlYXZlKG51bGwsIHRoaXMpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCQodGhpcy50aXApLmhhc0NsYXNzKENMQVNTX05BTUVfRkFERSkpIHtcbiAgICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLnRpcClcblxuICAgICAgICAkKHRoaXMudGlwKVxuICAgICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY29tcGxldGUpXG4gICAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBsZXRlKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoaWRlKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KClcbiAgICBjb25zdCBoaWRlRXZlbnQgPSAkLkV2ZW50KHRoaXMuY29uc3RydWN0b3IuRXZlbnQuSElERSlcbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9ob3ZlclN0YXRlICE9PSBIT1ZFUl9TVEFURV9TSE9XICYmIHRpcC5wYXJlbnROb2RlKSB7XG4gICAgICAgIHRpcC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRpcClcbiAgICAgIH1cblxuICAgICAgdGhpcy5fY2xlYW5UaXBDbGFzcygpXG4gICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JylcbiAgICAgICQodGhpcy5lbGVtZW50KS50cmlnZ2VyKHRoaXMuY29uc3RydWN0b3IuRXZlbnQuSElEREVOKVxuICAgICAgaWYgKHRoaXMuX3BvcHBlciAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgICB9XG5cbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjaygpXG4gICAgICB9XG4gICAgfVxuXG4gICAgJCh0aGlzLmVsZW1lbnQpLnRyaWdnZXIoaGlkZUV2ZW50KVxuXG4gICAgaWYgKGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgJCh0aXApLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfU0hPVylcblxuICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSByZW1vdmUgdGhlIGV4dHJhXG4gICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB3ZSBhZGRlZCBmb3IgaU9TIHN1cHBvcnRcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAkKGRvY3VtZW50LmJvZHkpLmNoaWxkcmVuKCkub2ZmKCdtb3VzZW92ZXInLCBudWxsLCAkLm5vb3ApXG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0NMSUNLXSA9IGZhbHNlXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0ZPQ1VTXSA9IGZhbHNlXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0hPVkVSXSA9IGZhbHNlXG5cbiAgICBpZiAoJCh0aGlzLnRpcCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9GQURFKSkge1xuICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aXApXG5cbiAgICAgICQodGlwKVxuICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb21wbGV0ZSgpXG4gICAgfVxuXG4gICAgdGhpcy5faG92ZXJTdGF0ZSA9ICcnXG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgaWYgKHRoaXMuX3BvcHBlciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fcG9wcGVyLnNjaGVkdWxlVXBkYXRlKClcbiAgICB9XG4gIH1cblxuICAvLyBQcm90ZWN0ZWRcblxuICBpc1dpdGhDb250ZW50KCkge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMuZ2V0VGl0bGUoKSlcbiAgfVxuXG4gIGFkZEF0dGFjaG1lbnRDbGFzcyhhdHRhY2htZW50KSB7XG4gICAgJCh0aGlzLmdldFRpcEVsZW1lbnQoKSkuYWRkQ2xhc3MoYCR7Q0xBU1NfUFJFRklYfS0ke2F0dGFjaG1lbnR9YClcbiAgfVxuXG4gIGdldFRpcEVsZW1lbnQoKSB7XG4gICAgdGhpcy50aXAgPSB0aGlzLnRpcCB8fCAkKHRoaXMuY29uZmlnLnRlbXBsYXRlKVswXVxuICAgIHJldHVybiB0aGlzLnRpcFxuICB9XG5cbiAgc2V0Q29udGVudCgpIHtcbiAgICBjb25zdCB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKVxuICAgIHRoaXMuc2V0RWxlbWVudENvbnRlbnQoJCh0aXAucXVlcnlTZWxlY3RvckFsbChTRUxFQ1RPUl9UT09MVElQX0lOTkVSKSksIHRoaXMuZ2V0VGl0bGUoKSlcbiAgICAkKHRpcCkucmVtb3ZlQ2xhc3MoYCR7Q0xBU1NfTkFNRV9GQURFfSAke0NMQVNTX05BTUVfU0hPV31gKVxuICB9XG5cbiAgc2V0RWxlbWVudENvbnRlbnQoJGVsZW1lbnQsIGNvbnRlbnQpIHtcbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdvYmplY3QnICYmIChjb250ZW50Lm5vZGVUeXBlIHx8IGNvbnRlbnQuanF1ZXJ5KSkge1xuICAgICAgLy8gQ29udGVudCBpcyBhIERPTSBub2RlIG9yIGEgalF1ZXJ5XG4gICAgICBpZiAodGhpcy5jb25maWcuaHRtbCkge1xuICAgICAgICBpZiAoISQoY29udGVudCkucGFyZW50KCkuaXMoJGVsZW1lbnQpKSB7XG4gICAgICAgICAgJGVsZW1lbnQuZW1wdHkoKS5hcHBlbmQoY29udGVudClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGVsZW1lbnQudGV4dCgkKGNvbnRlbnQpLnRleHQoKSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29uZmlnLmh0bWwpIHtcbiAgICAgIGlmICh0aGlzLmNvbmZpZy5zYW5pdGl6ZSkge1xuICAgICAgICBjb250ZW50ID0gc2FuaXRpemVIdG1sKGNvbnRlbnQsIHRoaXMuY29uZmlnLndoaXRlTGlzdCwgdGhpcy5jb25maWcuc2FuaXRpemVGbilcbiAgICAgIH1cblxuICAgICAgJGVsZW1lbnQuaHRtbChjb250ZW50KVxuICAgIH0gZWxzZSB7XG4gICAgICAkZWxlbWVudC50ZXh0KGNvbnRlbnQpXG4gICAgfVxuICB9XG5cbiAgZ2V0VGl0bGUoKSB7XG4gICAgbGV0IHRpdGxlID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vcmlnaW5hbC10aXRsZScpXG5cbiAgICBpZiAoIXRpdGxlKSB7XG4gICAgICB0aXRsZSA9IHR5cGVvZiB0aGlzLmNvbmZpZy50aXRsZSA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgICAgIHRoaXMuY29uZmlnLnRpdGxlLmNhbGwodGhpcy5lbGVtZW50KSA6XG4gICAgICAgIHRoaXMuY29uZmlnLnRpdGxlXG4gICAgfVxuXG4gICAgcmV0dXJuIHRpdGxlXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldFBvcHBlckNvbmZpZyhhdHRhY2htZW50KSB7XG4gICAgY29uc3QgZGVmYXVsdEJzQ29uZmlnID0ge1xuICAgICAgcGxhY2VtZW50OiBhdHRhY2htZW50LFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIG9mZnNldDogdGhpcy5fZ2V0T2Zmc2V0KCksXG4gICAgICAgIGZsaXA6IHtcbiAgICAgICAgICBiZWhhdmlvcjogdGhpcy5jb25maWcuZmFsbGJhY2tQbGFjZW1lbnRcbiAgICAgICAgfSxcbiAgICAgICAgYXJyb3c6IHtcbiAgICAgICAgICBlbGVtZW50OiBTRUxFQ1RPUl9BUlJPV1xuICAgICAgICB9LFxuICAgICAgICBwcmV2ZW50T3ZlcmZsb3c6IHtcbiAgICAgICAgICBib3VuZGFyaWVzRWxlbWVudDogdGhpcy5jb25maWcuYm91bmRhcnlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uQ3JlYXRlOiBkYXRhID0+IHtcbiAgICAgICAgaWYgKGRhdGEub3JpZ2luYWxQbGFjZW1lbnQgIT09IGRhdGEucGxhY2VtZW50KSB7XG4gICAgICAgICAgdGhpcy5faGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlKGRhdGEpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvblVwZGF0ZTogZGF0YSA9PiB0aGlzLl9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UoZGF0YSlcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uZGVmYXVsdEJzQ29uZmlnLFxuICAgICAgLi4udGhpcy5jb25maWcucG9wcGVyQ29uZmlnXG4gICAgfVxuICB9XG5cbiAgX2dldE9mZnNldCgpIHtcbiAgICBjb25zdCBvZmZzZXQgPSB7fVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLmNvbmZpZy5vZmZzZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9mZnNldC5mbiA9IGRhdGEgPT4ge1xuICAgICAgICBkYXRhLm9mZnNldHMgPSB7XG4gICAgICAgICAgLi4uZGF0YS5vZmZzZXRzLFxuICAgICAgICAgIC4uLih0aGlzLmNvbmZpZy5vZmZzZXQoZGF0YS5vZmZzZXRzLCB0aGlzLmVsZW1lbnQpIHx8IHt9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgb2Zmc2V0Lm9mZnNldCA9IHRoaXMuY29uZmlnLm9mZnNldFxuICAgIH1cblxuICAgIHJldHVybiBvZmZzZXRcbiAgfVxuXG4gIF9nZXRDb250YWluZXIoKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLmNvbnRhaW5lciA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5ib2R5XG4gICAgfVxuXG4gICAgaWYgKFV0aWwuaXNFbGVtZW50KHRoaXMuY29uZmlnLmNvbnRhaW5lcikpIHtcbiAgICAgIHJldHVybiAkKHRoaXMuY29uZmlnLmNvbnRhaW5lcilcbiAgICB9XG5cbiAgICByZXR1cm4gJChkb2N1bWVudCkuZmluZCh0aGlzLmNvbmZpZy5jb250YWluZXIpXG4gIH1cblxuICBfZ2V0QXR0YWNobWVudChwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gQXR0YWNobWVudE1hcFtwbGFjZW1lbnQudG9VcHBlckNhc2UoKV1cbiAgfVxuXG4gIF9zZXRMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgdHJpZ2dlcnMgPSB0aGlzLmNvbmZpZy50cmlnZ2VyLnNwbGl0KCcgJylcblxuICAgIHRyaWdnZXJzLmZvckVhY2godHJpZ2dlciA9PiB7XG4gICAgICBpZiAodHJpZ2dlciA9PT0gJ2NsaWNrJykge1xuICAgICAgICAkKHRoaXMuZWxlbWVudCkub24oXG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5DTElDSyxcbiAgICAgICAgICB0aGlzLmNvbmZpZy5zZWxlY3RvcixcbiAgICAgICAgICBldmVudCA9PiB0aGlzLnRvZ2dsZShldmVudClcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIGlmICh0cmlnZ2VyICE9PSBUUklHR0VSX01BTlVBTCkge1xuICAgICAgICBjb25zdCBldmVudEluID0gdHJpZ2dlciA9PT0gVFJJR0dFUl9IT1ZFUiA/XG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5NT1VTRUVOVEVSIDpcbiAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkZPQ1VTSU5cbiAgICAgICAgY29uc3QgZXZlbnRPdXQgPSB0cmlnZ2VyID09PSBUUklHR0VSX0hPVkVSID9cbiAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50Lk1PVVNFTEVBVkUgOlxuICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuRXZlbnQuRk9DVVNPVVRcblxuICAgICAgICAkKHRoaXMuZWxlbWVudClcbiAgICAgICAgICAub24oZXZlbnRJbiwgdGhpcy5jb25maWcuc2VsZWN0b3IsIGV2ZW50ID0+IHRoaXMuX2VudGVyKGV2ZW50KSlcbiAgICAgICAgICAub24oZXZlbnRPdXQsIHRoaXMuY29uZmlnLnNlbGVjdG9yLCBldmVudCA9PiB0aGlzLl9sZWF2ZShldmVudCkpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuX2hpZGVNb2RhbEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgJCh0aGlzLmVsZW1lbnQpLmNsb3Nlc3QoJy5tb2RhbCcpLm9uKCdoaWRlLmJzLm1vZGFsJywgdGhpcy5faGlkZU1vZGFsSGFuZGxlcilcblxuICAgIGlmICh0aGlzLmNvbmZpZy5zZWxlY3Rvcikge1xuICAgICAgdGhpcy5jb25maWcgPSB7XG4gICAgICAgIC4uLnRoaXMuY29uZmlnLFxuICAgICAgICB0cmlnZ2VyOiAnbWFudWFsJyxcbiAgICAgICAgc2VsZWN0b3I6ICcnXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2ZpeFRpdGxlKClcbiAgICB9XG4gIH1cblxuICBfZml4VGl0bGUoKSB7XG4gICAgY29uc3QgdGl0bGVUeXBlID0gdHlwZW9mIHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3JpZ2luYWwtdGl0bGUnKVxuXG4gICAgaWYgKHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJykgfHwgdGl0bGVUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShcbiAgICAgICAgJ2RhdGEtb3JpZ2luYWwtdGl0bGUnLFxuICAgICAgICB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0aXRsZScpIHx8ICcnXG4gICAgICApXG5cbiAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJycpXG4gICAgfVxuICB9XG5cbiAgX2VudGVyKGV2ZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgZGF0YUtleSA9IHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVlcbiAgICBjb250ZXh0ID0gY29udGV4dCB8fCAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSlcblxuICAgIGlmICghY29udGV4dCkge1xuICAgICAgY29udGV4dCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKFxuICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LFxuICAgICAgICB0aGlzLl9nZXREZWxlZ2F0ZUNvbmZpZygpXG4gICAgICApXG4gICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSwgY29udGV4dClcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbXG4gICAgICAgIGV2ZW50LnR5cGUgPT09ICdmb2N1c2luJyA/IFRSSUdHRVJfRk9DVVMgOiBUUklHR0VSX0hPVkVSXG4gICAgICBdID0gdHJ1ZVxuICAgIH1cblxuICAgIGlmICgkKGNvbnRleHQuZ2V0VGlwRWxlbWVudCgpKS5oYXNDbGFzcyhDTEFTU19OQU1FX1NIT1cpIHx8IGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhPVkVSX1NUQVRFX1NIT1cpIHtcbiAgICAgIGNvbnRleHQuX2hvdmVyU3RhdGUgPSBIT1ZFUl9TVEFURV9TSE9XXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjbGVhclRpbWVvdXQoY29udGV4dC5fdGltZW91dClcblxuICAgIGNvbnRleHQuX2hvdmVyU3RhdGUgPSBIT1ZFUl9TVEFURV9TSE9XXG5cbiAgICBpZiAoIWNvbnRleHQuY29uZmlnLmRlbGF5IHx8ICFjb250ZXh0LmNvbmZpZy5kZWxheS5zaG93KSB7XG4gICAgICBjb250ZXh0LnNob3coKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29udGV4dC5fdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhPVkVSX1NUQVRFX1NIT1cpIHtcbiAgICAgICAgY29udGV4dC5zaG93KClcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0LmNvbmZpZy5kZWxheS5zaG93KVxuICB9XG5cbiAgX2xlYXZlKGV2ZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgZGF0YUtleSA9IHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVlcbiAgICBjb250ZXh0ID0gY29udGV4dCB8fCAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSlcblxuICAgIGlmICghY29udGV4dCkge1xuICAgICAgY29udGV4dCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKFxuICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LFxuICAgICAgICB0aGlzLl9nZXREZWxlZ2F0ZUNvbmZpZygpXG4gICAgICApXG4gICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSwgY29udGV4dClcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbXG4gICAgICAgIGV2ZW50LnR5cGUgPT09ICdmb2N1c291dCcgPyBUUklHR0VSX0ZPQ1VTIDogVFJJR0dFUl9IT1ZFUlxuICAgICAgXSA9IGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKGNvbnRleHQuX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY2xlYXJUaW1lb3V0KGNvbnRleHQuX3RpbWVvdXQpXG5cbiAgICBjb250ZXh0Ll9ob3ZlclN0YXRlID0gSE9WRVJfU1RBVEVfT1VUXG5cbiAgICBpZiAoIWNvbnRleHQuY29uZmlnLmRlbGF5IHx8ICFjb250ZXh0LmNvbmZpZy5kZWxheS5oaWRlKSB7XG4gICAgICBjb250ZXh0LmhpZGUoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29udGV4dC5fdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhPVkVSX1NUQVRFX09VVCkge1xuICAgICAgICBjb250ZXh0LmhpZGUoKVxuICAgICAgfVxuICAgIH0sIGNvbnRleHQuY29uZmlnLmRlbGF5LmhpZGUpXG4gIH1cblxuICBfaXNXaXRoQWN0aXZlVHJpZ2dlcigpIHtcbiAgICBmb3IgKGNvbnN0IHRyaWdnZXIgaW4gdGhpcy5fYWN0aXZlVHJpZ2dlcikge1xuICAgICAgaWYgKHRoaXMuX2FjdGl2ZVRyaWdnZXJbdHJpZ2dlcl0pIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uc3QgZGF0YUF0dHJpYnV0ZXMgPSAkKHRoaXMuZWxlbWVudCkuZGF0YSgpXG5cbiAgICBPYmplY3Qua2V5cyhkYXRhQXR0cmlidXRlcylcbiAgICAgIC5mb3JFYWNoKGRhdGFBdHRyID0+IHtcbiAgICAgICAgaWYgKERJU0FMTE9XRURfQVRUUklCVVRFUy5pbmRleE9mKGRhdGFBdHRyKSAhPT0gLTEpIHtcbiAgICAgICAgICBkZWxldGUgZGF0YUF0dHJpYnV0ZXNbZGF0YUF0dHJdXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICBjb25maWcgPSB7XG4gICAgICAuLi50aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHQsXG4gICAgICAuLi5kYXRhQXR0cmlidXRlcyxcbiAgICAgIC4uLih0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fSlcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy5kZWxheSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNvbmZpZy5kZWxheSA9IHtcbiAgICAgICAgc2hvdzogY29uZmlnLmRlbGF5LFxuICAgICAgICBoaWRlOiBjb25maWcuZGVsYXlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy50aXRsZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNvbmZpZy50aXRsZSA9IGNvbmZpZy50aXRsZS50b1N0cmluZygpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcuY29udGVudCA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNvbmZpZy5jb250ZW50ID0gY29uZmlnLmNvbnRlbnQudG9TdHJpbmcoKVxuICAgIH1cblxuICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKFxuICAgICAgTkFNRSxcbiAgICAgIGNvbmZpZyxcbiAgICAgIHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFR5cGVcbiAgICApXG5cbiAgICBpZiAoY29uZmlnLnNhbml0aXplKSB7XG4gICAgICBjb25maWcudGVtcGxhdGUgPSBzYW5pdGl6ZUh0bWwoY29uZmlnLnRlbXBsYXRlLCBjb25maWcud2hpdGVMaXN0LCBjb25maWcuc2FuaXRpemVGbilcbiAgICB9XG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0RGVsZWdhdGVDb25maWcoKSB7XG4gICAgY29uc3QgY29uZmlnID0ge31cblxuICAgIGlmICh0aGlzLmNvbmZpZykge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5jb25maWcpIHtcbiAgICAgICAgaWYgKHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFtrZXldICE9PSB0aGlzLmNvbmZpZ1trZXldKSB7XG4gICAgICAgICAgY29uZmlnW2tleV0gPSB0aGlzLmNvbmZpZ1trZXldXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfY2xlYW5UaXBDbGFzcygpIHtcbiAgICBjb25zdCAkdGlwID0gJCh0aGlzLmdldFRpcEVsZW1lbnQoKSlcbiAgICBjb25zdCB0YWJDbGFzcyA9ICR0aXAuYXR0cignY2xhc3MnKS5tYXRjaChCU0NMU19QUkVGSVhfUkVHRVgpXG4gICAgaWYgKHRhYkNsYXNzICE9PSBudWxsICYmIHRhYkNsYXNzLmxlbmd0aCkge1xuICAgICAgJHRpcC5yZW1vdmVDbGFzcyh0YWJDbGFzcy5qb2luKCcnKSlcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlKHBvcHBlckRhdGEpIHtcbiAgICB0aGlzLnRpcCA9IHBvcHBlckRhdGEuaW5zdGFuY2UucG9wcGVyXG4gICAgdGhpcy5fY2xlYW5UaXBDbGFzcygpXG4gICAgdGhpcy5hZGRBdHRhY2htZW50Q2xhc3ModGhpcy5fZ2V0QXR0YWNobWVudChwb3BwZXJEYXRhLnBsYWNlbWVudCkpXG4gIH1cblxuICBfZml4VHJhbnNpdGlvbigpIHtcbiAgICBjb25zdCB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKVxuICAgIGNvbnN0IGluaXRDb25maWdBbmltYXRpb24gPSB0aGlzLmNvbmZpZy5hbmltYXRpb25cblxuICAgIGlmICh0aXAuZ2V0QXR0cmlidXRlKCd4LXBsYWNlbWVudCcpICE9PSBudWxsKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAkKHRpcCkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9GQURFKVxuICAgIHRoaXMuY29uZmlnLmFuaW1hdGlvbiA9IGZhbHNlXG4gICAgdGhpcy5oaWRlKClcbiAgICB0aGlzLnNob3coKVxuICAgIHRoaXMuY29uZmlnLmFuaW1hdGlvbiA9IGluaXRDb25maWdBbmltYXRpb25cbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgJGVsZW1lbnQgPSAkKHRoaXMpXG4gICAgICBsZXQgZGF0YSA9ICRlbGVtZW50LmRhdGEoREFUQV9LRVkpXG4gICAgICBjb25zdCBfY29uZmlnID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnXG5cbiAgICAgIGlmICghZGF0YSAmJiAvZGlzcG9zZXxoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IFRvb2x0aXAodGhpcywgX2NvbmZpZylcbiAgICAgICAgJGVsZW1lbnQuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kLmZuW05BTUVdID0gVG9vbHRpcC5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gVG9vbHRpcFxuJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gIHJldHVybiBUb29sdGlwLl9qUXVlcnlJbnRlcmZhY2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9vbHRpcFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC42LjApOiBwb3BvdmVyLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi90b29sdGlwJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ3BvcG92ZXInXG5jb25zdCBWRVJTSU9OID0gJzQuNi4wJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMucG9wb3ZlcidcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5jb25zdCBDTEFTU19QUkVGSVggPSAnYnMtcG9wb3ZlcidcbmNvbnN0IEJTQ0xTX1BSRUZJWF9SRUdFWCA9IG5ldyBSZWdFeHAoYChefFxcXFxzKSR7Q0xBU1NfUFJFRklYfVxcXFxTK2AsICdnJylcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgLi4uVG9vbHRpcC5EZWZhdWx0LFxuICBwbGFjZW1lbnQ6ICdyaWdodCcsXG4gIHRyaWdnZXI6ICdjbGljaycsXG4gIGNvbnRlbnQ6ICcnLFxuICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJwb3BvdmVyXCIgcm9sZT1cInRvb2x0aXBcIj4nICtcbiAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJhcnJvd1wiPjwvZGl2PicgK1xuICAgICAgICAgICAgICAnPGgzIGNsYXNzPVwicG9wb3Zlci1oZWFkZXJcIj48L2gzPicgK1xuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInBvcG92ZXItYm9keVwiPjwvZGl2PjwvZGl2Pidcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIC4uLlRvb2x0aXAuRGVmYXVsdFR5cGUsXG4gIGNvbnRlbnQ6ICcoc3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb24pJ1xufVxuXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuXG5jb25zdCBTRUxFQ1RPUl9USVRMRSA9ICcucG9wb3Zlci1oZWFkZXInXG5jb25zdCBTRUxFQ1RPUl9DT05URU5UID0gJy5wb3BvdmVyLWJvZHknXG5cbmNvbnN0IEV2ZW50ID0ge1xuICBISURFOiBgaGlkZSR7RVZFTlRfS0VZfWAsXG4gIEhJRERFTjogYGhpZGRlbiR7RVZFTlRfS0VZfWAsXG4gIFNIT1c6IGBzaG93JHtFVkVOVF9LRVl9YCxcbiAgU0hPV046IGBzaG93biR7RVZFTlRfS0VZfWAsXG4gIElOU0VSVEVEOiBgaW5zZXJ0ZWQke0VWRU5UX0tFWX1gLFxuICBDTElDSzogYGNsaWNrJHtFVkVOVF9LRVl9YCxcbiAgRk9DVVNJTjogYGZvY3VzaW4ke0VWRU5UX0tFWX1gLFxuICBGT0NVU09VVDogYGZvY3Vzb3V0JHtFVkVOVF9LRVl9YCxcbiAgTU9VU0VFTlRFUjogYG1vdXNlZW50ZXIke0VWRU5UX0tFWX1gLFxuICBNT1VTRUxFQVZFOiBgbW91c2VsZWF2ZSR7RVZFTlRfS0VZfWBcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIFBvcG92ZXIgZXh0ZW5kcyBUb29sdGlwIHtcbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgREFUQV9LRVkoKSB7XG4gICAgcmV0dXJuIERBVEFfS0VZXG4gIH1cblxuICBzdGF0aWMgZ2V0IEV2ZW50KCkge1xuICAgIHJldHVybiBFdmVudFxuICB9XG5cbiAgc3RhdGljIGdldCBFVkVOVF9LRVkoKSB7XG4gICAgcmV0dXJuIEVWRU5UX0tFWVxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIC8vIE92ZXJyaWRlc1xuXG4gIGlzV2l0aENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGl0bGUoKSB8fCB0aGlzLl9nZXRDb250ZW50KClcbiAgfVxuXG4gIGFkZEF0dGFjaG1lbnRDbGFzcyhhdHRhY2htZW50KSB7XG4gICAgJCh0aGlzLmdldFRpcEVsZW1lbnQoKSkuYWRkQ2xhc3MoYCR7Q0xBU1NfUFJFRklYfS0ke2F0dGFjaG1lbnR9YClcbiAgfVxuXG4gIGdldFRpcEVsZW1lbnQoKSB7XG4gICAgdGhpcy50aXAgPSB0aGlzLnRpcCB8fCAkKHRoaXMuY29uZmlnLnRlbXBsYXRlKVswXVxuICAgIHJldHVybiB0aGlzLnRpcFxuICB9XG5cbiAgc2V0Q29udGVudCgpIHtcbiAgICBjb25zdCAkdGlwID0gJCh0aGlzLmdldFRpcEVsZW1lbnQoKSlcblxuICAgIC8vIFdlIHVzZSBhcHBlbmQgZm9yIGh0bWwgb2JqZWN0cyB0byBtYWludGFpbiBqcyBldmVudHNcbiAgICB0aGlzLnNldEVsZW1lbnRDb250ZW50KCR0aXAuZmluZChTRUxFQ1RPUl9USVRMRSksIHRoaXMuZ2V0VGl0bGUoKSlcbiAgICBsZXQgY29udGVudCA9IHRoaXMuX2dldENvbnRlbnQoKVxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29udGVudCA9IGNvbnRlbnQuY2FsbCh0aGlzLmVsZW1lbnQpXG4gICAgfVxuXG4gICAgdGhpcy5zZXRFbGVtZW50Q29udGVudCgkdGlwLmZpbmQoU0VMRUNUT1JfQ09OVEVOVCksIGNvbnRlbnQpXG5cbiAgICAkdGlwLnJlbW92ZUNsYXNzKGAke0NMQVNTX05BTUVfRkFERX0gJHtDTEFTU19OQU1FX1NIT1d9YClcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1jb250ZW50JykgfHxcbiAgICAgIHRoaXMuY29uZmlnLmNvbnRlbnRcbiAgfVxuXG4gIF9jbGVhblRpcENsYXNzKCkge1xuICAgIGNvbnN0ICR0aXAgPSAkKHRoaXMuZ2V0VGlwRWxlbWVudCgpKVxuICAgIGNvbnN0IHRhYkNsYXNzID0gJHRpcC5hdHRyKCdjbGFzcycpLm1hdGNoKEJTQ0xTX1BSRUZJWF9SRUdFWClcbiAgICBpZiAodGFiQ2xhc3MgIT09IG51bGwgJiYgdGFiQ2xhc3MubGVuZ3RoID4gMCkge1xuICAgICAgJHRpcC5yZW1vdmVDbGFzcyh0YWJDbGFzcy5qb2luKCcnKSlcbiAgICB9XG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuICAgICAgY29uc3QgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDogbnVsbFxuXG4gICAgICBpZiAoIWRhdGEgJiYgL2Rpc3Bvc2V8aGlkZS8udGVzdChjb25maWcpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBQb3BvdmVyKHRoaXMsIF9jb25maWcpXG4gICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kLmZuW05BTUVdID0gUG9wb3Zlci5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gUG9wb3ZlclxuJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gIHJldHVybiBQb3BvdmVyLl9qUXVlcnlJbnRlcmZhY2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9wb3ZlclxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC42LjApOiBzY3JvbGxzcHkuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAnc2Nyb2xsc3B5J1xuY29uc3QgVkVSU0lPTiA9ICc0LjYuMCdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLnNjcm9sbHNweSdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBvZmZzZXQ6IDEwLFxuICBtZXRob2Q6ICdhdXRvJyxcbiAgdGFyZ2V0OiAnJ1xufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgb2Zmc2V0OiAnbnVtYmVyJyxcbiAgbWV0aG9kOiAnc3RyaW5nJyxcbiAgdGFyZ2V0OiAnKHN0cmluZ3xlbGVtZW50KSdcbn1cblxuY29uc3QgRVZFTlRfQUNUSVZBVEUgPSBgYWN0aXZhdGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TQ1JPTEwgPSBgc2Nyb2xsJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSA9IGBsb2FkJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX0RST1BET1dOX0lURU0gPSAnZHJvcGRvd24taXRlbSdcbmNvbnN0IENMQVNTX05BTUVfQUNUSVZFID0gJ2FjdGl2ZSdcblxuY29uc3QgU0VMRUNUT1JfREFUQV9TUFkgPSAnW2RhdGEtc3B5PVwic2Nyb2xsXCJdJ1xuY29uc3QgU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVAgPSAnLm5hdiwgLmxpc3QtZ3JvdXAnXG5jb25zdCBTRUxFQ1RPUl9OQVZfTElOS1MgPSAnLm5hdi1saW5rJ1xuY29uc3QgU0VMRUNUT1JfTkFWX0lURU1TID0gJy5uYXYtaXRlbSdcbmNvbnN0IFNFTEVDVE9SX0xJU1RfSVRFTVMgPSAnLmxpc3QtZ3JvdXAtaXRlbSdcbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOID0gJy5kcm9wZG93bidcbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOX0lURU1TID0gJy5kcm9wZG93bi1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFID0gJy5kcm9wZG93bi10b2dnbGUnXG5cbmNvbnN0IE1FVEhPRF9PRkZTRVQgPSAnb2Zmc2V0J1xuY29uc3QgTUVUSE9EX1BPU0lUSU9OID0gJ3Bvc2l0aW9uJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgU2Nyb2xsU3B5IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLl9zY3JvbGxFbGVtZW50ID0gZWxlbWVudC50YWdOYW1lID09PSAnQk9EWScgPyB3aW5kb3cgOiBlbGVtZW50XG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9zZWxlY3RvciA9IGAke3RoaXMuX2NvbmZpZy50YXJnZXR9ICR7U0VMRUNUT1JfTkFWX0xJTktTfSxgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7dGhpcy5fY29uZmlnLnRhcmdldH0gJHtTRUxFQ1RPUl9MSVNUX0lURU1TfSxgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7dGhpcy5fY29uZmlnLnRhcmdldH0gJHtTRUxFQ1RPUl9EUk9QRE9XTl9JVEVNU31gXG4gICAgdGhpcy5fb2Zmc2V0cyA9IFtdXG4gICAgdGhpcy5fdGFyZ2V0cyA9IFtdXG4gICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gbnVsbFxuICAgIHRoaXMuX3Njcm9sbEhlaWdodCA9IDBcblxuICAgICQodGhpcy5fc2Nyb2xsRWxlbWVudCkub24oRVZFTlRfU0NST0xMLCBldmVudCA9PiB0aGlzLl9wcm9jZXNzKGV2ZW50KSlcblxuICAgIHRoaXMucmVmcmVzaCgpXG4gICAgdGhpcy5fcHJvY2VzcygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3QgYXV0b01ldGhvZCA9IHRoaXMuX3Njcm9sbEVsZW1lbnQgPT09IHRoaXMuX3Njcm9sbEVsZW1lbnQud2luZG93ID9cbiAgICAgIE1FVEhPRF9PRkZTRVQgOiBNRVRIT0RfUE9TSVRJT05cblxuICAgIGNvbnN0IG9mZnNldE1ldGhvZCA9IHRoaXMuX2NvbmZpZy5tZXRob2QgPT09ICdhdXRvJyA/XG4gICAgICBhdXRvTWV0aG9kIDogdGhpcy5fY29uZmlnLm1ldGhvZFxuXG4gICAgY29uc3Qgb2Zmc2V0QmFzZSA9IG9mZnNldE1ldGhvZCA9PT0gTUVUSE9EX1BPU0lUSU9OID9cbiAgICAgIHRoaXMuX2dldFNjcm9sbFRvcCgpIDogMFxuXG4gICAgdGhpcy5fb2Zmc2V0cyA9IFtdXG4gICAgdGhpcy5fdGFyZ2V0cyA9IFtdXG5cbiAgICB0aGlzLl9zY3JvbGxIZWlnaHQgPSB0aGlzLl9nZXRTY3JvbGxIZWlnaHQoKVxuXG4gICAgY29uc3QgdGFyZ2V0cyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9zZWxlY3RvcikpXG5cbiAgICB0YXJnZXRzXG4gICAgICAubWFwKGVsZW1lbnQgPT4ge1xuICAgICAgICBsZXQgdGFyZ2V0XG4gICAgICAgIGNvbnN0IHRhcmdldFNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpXG5cbiAgICAgICAgaWYgKHRhcmdldFNlbGVjdG9yKSB7XG4gICAgICAgICAgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXRTZWxlY3RvcilcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICBjb25zdCB0YXJnZXRCQ1IgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICBpZiAodGFyZ2V0QkNSLndpZHRoIHx8IHRhcmdldEJDUi5oZWlnaHQpIHtcbiAgICAgICAgICAgIC8vIFRPRE8gKGZhdCk6IHJlbW92ZSBza2V0Y2ggcmVsaWFuY2Ugb24galF1ZXJ5IHBvc2l0aW9uL29mZnNldFxuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgJCh0YXJnZXQpW29mZnNldE1ldGhvZF0oKS50b3AgKyBvZmZzZXRCYXNlLFxuICAgICAgICAgICAgICB0YXJnZXRTZWxlY3RvclxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9KVxuICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0pXG4gICAgICAuc29ydCgoYSwgYikgPT4gYVswXSAtIGJbMF0pXG4gICAgICAuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgdGhpcy5fb2Zmc2V0cy5wdXNoKGl0ZW1bMF0pXG4gICAgICAgIHRoaXMuX3RhcmdldHMucHVzaChpdGVtWzFdKVxuICAgICAgfSlcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuICAgICQodGhpcy5fc2Nyb2xsRWxlbWVudCkub2ZmKEVWRU5UX0tFWSlcblxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsXG4gICAgdGhpcy5fc2Nyb2xsRWxlbWVudCA9IG51bGxcbiAgICB0aGlzLl9jb25maWcgPSBudWxsXG4gICAgdGhpcy5fc2VsZWN0b3IgPSBudWxsXG4gICAgdGhpcy5fb2Zmc2V0cyA9IG51bGxcbiAgICB0aGlzLl90YXJnZXRzID0gbnVsbFxuICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IG51bGxcbiAgICB0aGlzLl9zY3JvbGxIZWlnaHQgPSBudWxsXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9KVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLnRhcmdldCAhPT0gJ3N0cmluZycgJiYgVXRpbC5pc0VsZW1lbnQoY29uZmlnLnRhcmdldCkpIHtcbiAgICAgIGxldCBpZCA9ICQoY29uZmlnLnRhcmdldCkuYXR0cignaWQnKVxuICAgICAgaWYgKCFpZCkge1xuICAgICAgICBpZCA9IFV0aWwuZ2V0VUlEKE5BTUUpXG4gICAgICAgICQoY29uZmlnLnRhcmdldCkuYXR0cignaWQnLCBpZClcbiAgICAgIH1cblxuICAgICAgY29uZmlnLnRhcmdldCA9IGAjJHtpZH1gXG4gICAgfVxuXG4gICAgVXRpbC50eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBEZWZhdWx0VHlwZSlcblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9nZXRTY3JvbGxUb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbEVsZW1lbnQgPT09IHdpbmRvdyA/XG4gICAgICB0aGlzLl9zY3JvbGxFbGVtZW50LnBhZ2VZT2Zmc2V0IDogdGhpcy5fc2Nyb2xsRWxlbWVudC5zY3JvbGxUb3BcbiAgfVxuXG4gIF9nZXRTY3JvbGxIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IHx8IE1hdGgubWF4KFxuICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQsXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0XG4gICAgKVxuICB9XG5cbiAgX2dldE9mZnNldEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2Nyb2xsRWxlbWVudCA9PT0gd2luZG93ID9cbiAgICAgIHdpbmRvdy5pbm5lckhlaWdodCA6IHRoaXMuX3Njcm9sbEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XG4gIH1cblxuICBfcHJvY2VzcygpIHtcbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLl9nZXRTY3JvbGxUb3AoKSArIHRoaXMuX2NvbmZpZy5vZmZzZXRcbiAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSB0aGlzLl9nZXRTY3JvbGxIZWlnaHQoKVxuICAgIGNvbnN0IG1heFNjcm9sbCA9IHRoaXMuX2NvbmZpZy5vZmZzZXQgKyBzY3JvbGxIZWlnaHQgLSB0aGlzLl9nZXRPZmZzZXRIZWlnaHQoKVxuXG4gICAgaWYgKHRoaXMuX3Njcm9sbEhlaWdodCAhPT0gc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICB0aGlzLnJlZnJlc2goKVxuICAgIH1cblxuICAgIGlmIChzY3JvbGxUb3AgPj0gbWF4U2Nyb2xsKSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLl90YXJnZXRzW3RoaXMuX3RhcmdldHMubGVuZ3RoIC0gMV1cblxuICAgICAgaWYgKHRoaXMuX2FjdGl2ZVRhcmdldCAhPT0gdGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuX2FjdGl2YXRlKHRhcmdldClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2FjdGl2ZVRhcmdldCAmJiBzY3JvbGxUb3AgPCB0aGlzLl9vZmZzZXRzWzBdICYmIHRoaXMuX29mZnNldHNbMF0gPiAwKSB7XG4gICAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSBudWxsXG4gICAgICB0aGlzLl9jbGVhcigpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gdGhpcy5fb2Zmc2V0cy5sZW5ndGg7IGktLTspIHtcbiAgICAgIGNvbnN0IGlzQWN0aXZlVGFyZ2V0ID0gdGhpcy5fYWN0aXZlVGFyZ2V0ICE9PSB0aGlzLl90YXJnZXRzW2ldICYmXG4gICAgICAgICAgc2Nyb2xsVG9wID49IHRoaXMuX29mZnNldHNbaV0gJiZcbiAgICAgICAgICAodHlwZW9mIHRoaXMuX29mZnNldHNbaSArIDFdID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICAgICAgICBzY3JvbGxUb3AgPCB0aGlzLl9vZmZzZXRzW2kgKyAxXSlcblxuICAgICAgaWYgKGlzQWN0aXZlVGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuX2FjdGl2YXRlKHRoaXMuX3RhcmdldHNbaV0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2FjdGl2YXRlKHRhcmdldCkge1xuICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IHRhcmdldFxuXG4gICAgdGhpcy5fY2xlYXIoKVxuXG4gICAgY29uc3QgcXVlcmllcyA9IHRoaXMuX3NlbGVjdG9yXG4gICAgICAuc3BsaXQoJywnKVxuICAgICAgLm1hcChzZWxlY3RvciA9PiBgJHtzZWxlY3Rvcn1bZGF0YS10YXJnZXQ9XCIke3RhcmdldH1cIl0sJHtzZWxlY3Rvcn1baHJlZj1cIiR7dGFyZ2V0fVwiXWApXG5cbiAgICBjb25zdCAkbGluayA9ICQoW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJpZXMuam9pbignLCcpKSkpXG5cbiAgICBpZiAoJGxpbmsuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9EUk9QRE9XTl9JVEVNKSkge1xuICAgICAgJGxpbmsuY2xvc2VzdChTRUxFQ1RPUl9EUk9QRE9XTilcbiAgICAgICAgLmZpbmQoU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFKVxuICAgICAgICAuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICAkbGluay5hZGRDbGFzcyhDTEFTU19OQU1FX0FDVElWRSlcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU2V0IHRyaWdnZXJlZCBsaW5rIGFzIGFjdGl2ZVxuICAgICAgJGxpbmsuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICAvLyBTZXQgdHJpZ2dlcmVkIGxpbmtzIHBhcmVudHMgYXMgYWN0aXZlXG4gICAgICAvLyBXaXRoIGJvdGggPHVsPiBhbmQgPG5hdj4gbWFya3VwIGEgcGFyZW50IGlzIHRoZSBwcmV2aW91cyBzaWJsaW5nIG9mIGFueSBuYXYgYW5jZXN0b3JcbiAgICAgICRsaW5rLnBhcmVudHMoU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVApXG4gICAgICAgIC5wcmV2KGAke1NFTEVDVE9SX05BVl9MSU5LU30sICR7U0VMRUNUT1JfTElTVF9JVEVNU31gKVxuICAgICAgICAuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICAvLyBIYW5kbGUgc3BlY2lhbCBjYXNlIHdoZW4gLm5hdi1saW5rIGlzIGluc2lkZSAubmF2LWl0ZW1cbiAgICAgICRsaW5rLnBhcmVudHMoU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVApXG4gICAgICAgIC5wcmV2KFNFTEVDVE9SX05BVl9JVEVNUylcbiAgICAgICAgLmNoaWxkcmVuKFNFTEVDVE9SX05BVl9MSU5LUylcbiAgICAgICAgLmFkZENsYXNzKENMQVNTX05BTUVfQUNUSVZFKVxuICAgIH1cblxuICAgICQodGhpcy5fc2Nyb2xsRWxlbWVudCkudHJpZ2dlcihFVkVOVF9BQ1RJVkFURSwge1xuICAgICAgcmVsYXRlZFRhcmdldDogdGFyZ2V0XG4gICAgfSlcbiAgfVxuXG4gIF9jbGVhcigpIHtcbiAgICBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5fc2VsZWN0b3IpKVxuICAgICAgLmZpbHRlcihub2RlID0+IG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQUNUSVZFKSlcbiAgICAgIC5mb3JFYWNoKG5vZGUgPT4gbm9kZS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFKSlcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG4gICAgICBjb25zdCBfY29uZmlnID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnXG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IFNjcm9sbFNweSh0aGlzLCBfY29uZmlnKVxuICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kKHdpbmRvdykub24oRVZFTlRfTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICBjb25zdCBzY3JvbGxTcHlzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SX0RBVEFfU1BZKSlcbiAgY29uc3Qgc2Nyb2xsU3B5c0xlbmd0aCA9IHNjcm9sbFNweXMubGVuZ3RoXG5cbiAgZm9yIChsZXQgaSA9IHNjcm9sbFNweXNMZW5ndGg7IGktLTspIHtcbiAgICBjb25zdCAkc3B5ID0gJChzY3JvbGxTcHlzW2ldKVxuICAgIFNjcm9sbFNweS5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJHNweSwgJHNweS5kYXRhKCkpXG4gIH1cbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQuZm5bTkFNRV0gPSBTY3JvbGxTcHkuX2pRdWVyeUludGVyZmFjZVxuJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IFNjcm9sbFNweVxuJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gIHJldHVybiBTY3JvbGxTcHkuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxTcHlcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuNi4wKTogdGFiLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ3RhYidcbmNvbnN0IFZFUlNJT04gPSAnNC42LjAnXG5jb25zdCBEQVRBX0tFWSA9ICdicy50YWInXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV1cblxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfRFJPUERPV05fTUVOVSA9ICdkcm9wZG93bi1tZW51J1xuY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUgPSAnYWN0aXZlJ1xuY29uc3QgQ0xBU1NfTkFNRV9ESVNBQkxFRCA9ICdkaXNhYmxlZCdcbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5cbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOID0gJy5kcm9wZG93bidcbmNvbnN0IFNFTEVDVE9SX05BVl9MSVNUX0dST1VQID0gJy5uYXYsIC5saXN0LWdyb3VwJ1xuY29uc3QgU0VMRUNUT1JfQUNUSVZFID0gJy5hY3RpdmUnXG5jb25zdCBTRUxFQ1RPUl9BQ1RJVkVfVUwgPSAnPiBsaSA+IC5hY3RpdmUnXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS10b2dnbGU9XCJ0YWJcIl0sIFtkYXRhLXRvZ2dsZT1cInBpbGxcIl0sIFtkYXRhLXRvZ2dsZT1cImxpc3RcIl0nXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUgPSAnLmRyb3Bkb3duLXRvZ2dsZSdcbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOX0FDVElWRV9DSElMRCA9ICc+IC5kcm9wZG93bi1tZW51IC5hY3RpdmUnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBUYWIge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHNob3coKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZSAmJlxuICAgICAgICB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFICYmXG4gICAgICAgICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9BQ1RJVkUpIHx8XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9ESVNBQkxFRCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCB0YXJnZXRcbiAgICBsZXQgcHJldmlvdXNcbiAgICBjb25zdCBsaXN0RWxlbWVudCA9ICQodGhpcy5fZWxlbWVudCkuY2xvc2VzdChTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUClbMF1cbiAgICBjb25zdCBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuXG4gICAgaWYgKGxpc3RFbGVtZW50KSB7XG4gICAgICBjb25zdCBpdGVtU2VsZWN0b3IgPSBsaXN0RWxlbWVudC5ub2RlTmFtZSA9PT0gJ1VMJyB8fCBsaXN0RWxlbWVudC5ub2RlTmFtZSA9PT0gJ09MJyA/IFNFTEVDVE9SX0FDVElWRV9VTCA6IFNFTEVDVE9SX0FDVElWRVxuICAgICAgcHJldmlvdXMgPSAkLm1ha2VBcnJheSgkKGxpc3RFbGVtZW50KS5maW5kKGl0ZW1TZWxlY3RvcikpXG4gICAgICBwcmV2aW91cyA9IHByZXZpb3VzW3ByZXZpb3VzLmxlbmd0aCAtIDFdXG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gJC5FdmVudChFVkVOVF9ISURFLCB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgfSlcblxuICAgIGNvbnN0IHNob3dFdmVudCA9ICQuRXZlbnQoRVZFTlRfU0hPVywge1xuICAgICAgcmVsYXRlZFRhcmdldDogcHJldmlvdXNcbiAgICB9KVxuXG4gICAgaWYgKHByZXZpb3VzKSB7XG4gICAgICAkKHByZXZpb3VzKS50cmlnZ2VyKGhpZGVFdmVudClcbiAgICB9XG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc2hvd0V2ZW50KVxuXG4gICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fFxuICAgICAgICBoaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICB9XG5cbiAgICB0aGlzLl9hY3RpdmF0ZShcbiAgICAgIHRoaXMuX2VsZW1lbnQsXG4gICAgICBsaXN0RWxlbWVudFxuICAgIClcblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgY29uc3QgaGlkZGVuRXZlbnQgPSAkLkV2ZW50KEVWRU5UX0hJRERFTiwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgICB9KVxuXG4gICAgICBjb25zdCBzaG93bkV2ZW50ID0gJC5FdmVudChFVkVOVF9TSE9XTiwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiBwcmV2aW91c1xuICAgICAgfSlcblxuICAgICAgJChwcmV2aW91cykudHJpZ2dlcihoaWRkZW5FdmVudClcbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzaG93bkV2ZW50KVxuICAgIH1cblxuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgIHRoaXMuX2FjdGl2YXRlKHRhcmdldCwgdGFyZ2V0LnBhcmVudE5vZGUsIGNvbXBsZXRlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb21wbGV0ZSgpXG4gICAgfVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpXG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGxcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfYWN0aXZhdGUoZWxlbWVudCwgY29udGFpbmVyLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnRzID0gY29udGFpbmVyICYmIChjb250YWluZXIubm9kZU5hbWUgPT09ICdVTCcgfHwgY29udGFpbmVyLm5vZGVOYW1lID09PSAnT0wnKSA/XG4gICAgICAkKGNvbnRhaW5lcikuZmluZChTRUxFQ1RPUl9BQ1RJVkVfVUwpIDpcbiAgICAgICQoY29udGFpbmVyKS5jaGlsZHJlbihTRUxFQ1RPUl9BQ1RJVkUpXG5cbiAgICBjb25zdCBhY3RpdmUgPSBhY3RpdmVFbGVtZW50c1swXVxuICAgIGNvbnN0IGlzVHJhbnNpdGlvbmluZyA9IGNhbGxiYWNrICYmIChhY3RpdmUgJiYgJChhY3RpdmUpLmhhc0NsYXNzKENMQVNTX05BTUVfRkFERSkpXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB0aGlzLl90cmFuc2l0aW9uQ29tcGxldGUoXG4gICAgICBlbGVtZW50LFxuICAgICAgYWN0aXZlLFxuICAgICAgY2FsbGJhY2tcbiAgICApXG5cbiAgICBpZiAoYWN0aXZlICYmIGlzVHJhbnNpdGlvbmluZykge1xuICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudChhY3RpdmUpXG5cbiAgICAgICQoYWN0aXZlKVxuICAgICAgICAucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKVxuICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb21wbGV0ZSgpXG4gICAgfVxuICB9XG5cbiAgX3RyYW5zaXRpb25Db21wbGV0ZShlbGVtZW50LCBhY3RpdmUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgJChhY3RpdmUpLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfQUNUSVZFKVxuXG4gICAgICBjb25zdCBkcm9wZG93bkNoaWxkID0gJChhY3RpdmUucGFyZW50Tm9kZSkuZmluZChcbiAgICAgICAgU0VMRUNUT1JfRFJPUERPV05fQUNUSVZFX0NISUxEXG4gICAgICApWzBdXG5cbiAgICAgIGlmIChkcm9wZG93bkNoaWxkKSB7XG4gICAgICAgICQoZHJvcGRvd25DaGlsZCkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICB9XG5cbiAgICAgIGlmIChhY3RpdmUuZ2V0QXR0cmlidXRlKCdyb2xlJykgPT09ICd0YWInKSB7XG4gICAgICAgIGFjdGl2ZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAkKGVsZW1lbnQpLmFkZENsYXNzKENMQVNTX05BTUVfQUNUSVZFKVxuICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgncm9sZScpID09PSAndGFiJykge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCB0cnVlKVxuICAgIH1cblxuICAgIFV0aWwucmVmbG93KGVsZW1lbnQpXG5cbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlICYmICQoZWxlbWVudC5wYXJlbnROb2RlKS5oYXNDbGFzcyhDTEFTU19OQU1FX0RST1BET1dOX01FTlUpKSB7XG4gICAgICBjb25zdCBkcm9wZG93bkVsZW1lbnQgPSAkKGVsZW1lbnQpLmNsb3Nlc3QoU0VMRUNUT1JfRFJPUERPV04pWzBdXG5cbiAgICAgIGlmIChkcm9wZG93bkVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgZHJvcGRvd25Ub2dnbGVMaXN0ID0gW10uc2xpY2UuY2FsbChkcm9wZG93bkVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUpKVxuXG4gICAgICAgICQoZHJvcGRvd25Ub2dnbGVMaXN0KS5hZGRDbGFzcyhDTEFTU19OQU1FX0FDVElWRSlcbiAgICAgIH1cblxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxuICAgIH1cblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpXG4gICAgICBsZXQgZGF0YSA9ICR0aGlzLmRhdGEoREFUQV9LRVkpXG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IFRhYih0aGlzKVxuICAgICAgICAkdGhpcy5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJChkb2N1bWVudClcbiAgLm9uKEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIFRhYi5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0aGlzKSwgJ3Nob3cnKVxuICB9KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kLmZuW05BTUVdID0gVGFiLl9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBUYWJcbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gVGFiLl9qUXVlcnlJbnRlcmZhY2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFiXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjYuMCk6IHRvYXN0LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ3RvYXN0J1xuY29uc3QgVkVSU0lPTiA9ICc0LjYuMCdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLnRvYXN0J1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV1cblxuY29uc3QgRVZFTlRfQ0xJQ0tfRElTTUlTUyA9IGBjbGljay5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfSElERSA9ICdoaWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX1NIT1dJTkcgPSAnc2hvd2luZydcblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGFuaW1hdGlvbjogJ2Jvb2xlYW4nLFxuICBhdXRvaGlkZTogJ2Jvb2xlYW4nLFxuICBkZWxheTogJ251bWJlcidcbn1cblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYW5pbWF0aW9uOiB0cnVlLFxuICBhdXRvaGlkZTogdHJ1ZSxcbiAgZGVsYXk6IDUwMFxufVxuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX0RJU01JU1MgPSAnW2RhdGEtZGlzbWlzcz1cInRvYXN0XCJdJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgVG9hc3Qge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fdGltZW91dCA9IG51bGxcbiAgICB0aGlzLl9zZXRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgc2hvdygpIHtcbiAgICBjb25zdCBzaG93RXZlbnQgPSAkLkV2ZW50KEVWRU5UX1NIT1cpXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc2hvd0V2ZW50KVxuICAgIGlmIChzaG93RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2NsZWFyVGltZW91dCgpXG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmFuaW1hdGlvbikge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfRkFERSlcbiAgICB9XG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1dJTkcpXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoRVZFTlRfU0hPV04pXG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcuYXV0b2hpZGUpIHtcbiAgICAgICAgdGhpcy5fdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICAgIH0sIHRoaXMuX2NvbmZpZy5kZWxheSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9ISURFKVxuICAgIFV0aWwucmVmbG93KHRoaXMuX2VsZW1lbnQpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPV0lORylcbiAgICBpZiAodGhpcy5fY29uZmlnLmFuaW1hdGlvbikge1xuICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY29tcGxldGUpXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBsZXRlKClcbiAgICB9XG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICghdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gJC5FdmVudChFVkVOVF9ISURFKVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKGhpZGVFdmVudClcbiAgICBpZiAoaGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9jbG9zZSgpXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIHRoaXMuX2NsZWFyVGltZW91dCgpXG5cbiAgICBpZiAodGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKSkge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcbiAgICB9XG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpLm9mZihFVkVOVF9DTElDS19ESVNNSVNTKVxuXG4gICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsXG4gICAgdGhpcy5fY29uZmlnID0gbnVsbFxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLiQodGhpcy5fZWxlbWVudCkuZGF0YSgpLFxuICAgICAgLi4uKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9KVxuICAgIH1cblxuICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKFxuICAgICAgTkFNRSxcbiAgICAgIGNvbmZpZyxcbiAgICAgIHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFR5cGVcbiAgICApXG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfc2V0TGlzdGVuZXJzKCkge1xuICAgICQodGhpcy5fZWxlbWVudCkub24oRVZFTlRfQ0xJQ0tfRElTTUlTUywgU0VMRUNUT1JfREFUQV9ESVNNSVNTLCAoKSA9PiB0aGlzLmhpZGUoKSlcbiAgfVxuXG4gIF9jbG9zZSgpIHtcbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0hJREUpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoRVZFTlRfSElEREVOKVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb21wbGV0ZSgpXG4gICAgfVxuICB9XG5cbiAgX2NsZWFyVGltZW91dCgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dClcbiAgICB0aGlzLl90aW1lb3V0ID0gbnVsbFxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCAkZWxlbWVudCA9ICQodGhpcylcbiAgICAgIGxldCBkYXRhID0gJGVsZW1lbnQuZGF0YShEQVRBX0tFWSlcbiAgICAgIGNvbnN0IF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWdcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgVG9hc3QodGhpcywgX2NvbmZpZylcbiAgICAgICAgJGVsZW1lbnQuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXSh0aGlzKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJC5mbltOQU1FXSA9IFRvYXN0Ll9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBUb2FzdFxuJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gIHJldHVybiBUb2FzdC5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvYXN0XG4iLCIhZnVuY3Rpb24odCxuKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1uKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShuKTp0Lk1hY3k9bigpfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gdCh0LG4pe3ZhciBlPXZvaWQgMDtyZXR1cm4gZnVuY3Rpb24oKXtlJiZjbGVhclRpbWVvdXQoZSksZT1zZXRUaW1lb3V0KHQsbil9fWZ1bmN0aW9uIG4odCxuKXtmb3IodmFyIGU9dC5sZW5ndGgscj1lLG89W107ZS0tOylvLnB1c2gobih0W3ItZS0xXSkpO3JldHVybiBvfWZ1bmN0aW9uIGUodCxuKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXSYmYXJndW1lbnRzWzJdO2lmKHdpbmRvdy5Qcm9taXNlKXJldHVybiBBKHQsbixlKTt0LnJlY2FsY3VsYXRlKCEwLCEwKX1mdW5jdGlvbiByKHQpe2Zvcih2YXIgbj10Lm9wdGlvbnMsZT10LnJlc3BvbnNpdmVPcHRpb25zLHI9dC5rZXlzLG89dC5kb2NXaWR0aCxpPXZvaWQgMCxzPTA7czxyLmxlbmd0aDtzKyspe3ZhciBhPXBhcnNlSW50KHJbc10sMTApO28+PWEmJihpPW4uYnJlYWtBdFthXSxPKGksZSkpfXJldHVybiBlfWZ1bmN0aW9uIG8odCl7Zm9yKHZhciBuPXQub3B0aW9ucyxlPXQucmVzcG9uc2l2ZU9wdGlvbnMscj10LmtleXMsbz10LmRvY1dpZHRoLGk9dm9pZCAwLHM9ci5sZW5ndGgtMTtzPj0wO3MtLSl7dmFyIGE9cGFyc2VJbnQocltzXSwxMCk7bzw9YSYmKGk9bi5icmVha0F0W2FdLE8oaSxlKSl9cmV0dXJuIGV9ZnVuY3Rpb24gaSh0KXt2YXIgbj10LnVzZUNvbnRhaW5lckZvckJyZWFrcG9pbnRzP3QuY29udGFpbmVyLmNsaWVudFdpZHRoOndpbmRvdy5pbm5lcldpZHRoLGU9e2NvbHVtbnM6dC5jb2x1bW5zfTtiKHQubWFyZ2luKT9lLm1hcmdpbj17eDp0Lm1hcmdpbi54LHk6dC5tYXJnaW4ueX06ZS5tYXJnaW49e3g6dC5tYXJnaW4seTp0Lm1hcmdpbn07dmFyIGk9T2JqZWN0LmtleXModC5icmVha0F0KTtyZXR1cm4gdC5tb2JpbGVGaXJzdD9yKHtvcHRpb25zOnQscmVzcG9uc2l2ZU9wdGlvbnM6ZSxrZXlzOmksZG9jV2lkdGg6bn0pOm8oe29wdGlvbnM6dCxyZXNwb25zaXZlT3B0aW9uczplLGtleXM6aSxkb2NXaWR0aDpufSl9ZnVuY3Rpb24gcyh0KXtyZXR1cm4gaSh0KS5jb2x1bW5zfWZ1bmN0aW9uIGEodCl7cmV0dXJuIGkodCkubWFyZ2lufWZ1bmN0aW9uIGModCl7dmFyIG49IShhcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXSl8fGFyZ3VtZW50c1sxXSxlPXModCkscj1hKHQpLngsbz0xMDAvZTtpZighbilyZXR1cm4gbztpZigxPT09ZSlyZXR1cm5cIjEwMCVcIjt2YXIgaT1cInB4XCI7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHIpe3ZhciBjPXBhcnNlRmxvYXQocik7aT1yLnJlcGxhY2UoYyxcIlwiKSxyPWN9cmV0dXJuIHI9KGUtMSkqci9lLFwiJVwiPT09aT9vLXIrXCIlXCI6XCJjYWxjKFwiK28rXCIlIC0gXCIrcitpK1wiKVwifWZ1bmN0aW9uIHUodCxuKXt2YXIgZT1zKHQub3B0aW9ucykscj0wLG89dm9pZCAwLGk9dm9pZCAwO2lmKDE9PT0rK24pcmV0dXJuIDA7aT1hKHQub3B0aW9ucykueDt2YXIgdT1cInB4XCI7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGkpe3ZhciBsPXBhcnNlRmxvYXQoaSwxMCk7dT1pLnJlcGxhY2UobCxcIlwiKSxpPWx9cmV0dXJuIG89KGktKGUtMSkqaS9lKSoobi0xKSxyKz1jKHQub3B0aW9ucywhMSkqKG4tMSksXCIlXCI9PT11P3IrbytcIiVcIjpcImNhbGMoXCIrcitcIiUgKyBcIitvK3UrXCIpXCJ9ZnVuY3Rpb24gbCh0KXt2YXIgbj0wLGU9dC5jb250YWluZXIscj10LnJvd3M7dihyLGZ1bmN0aW9uKHQpe249dD5uP3Q6bn0pLGUuc3R5bGUuaGVpZ2h0PW4rXCJweFwifWZ1bmN0aW9uIHAodCxuKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXSYmYXJndW1lbnRzWzJdLHI9IShhcmd1bWVudHMubGVuZ3RoPjMmJnZvaWQgMCE9PWFyZ3VtZW50c1szXSl8fGFyZ3VtZW50c1szXSxvPXModC5vcHRpb25zKSxpPWEodC5vcHRpb25zKS55O00odCxvLGUpLHYobixmdW5jdGlvbihuKXt2YXIgZT0wLG89cGFyc2VJbnQobi5vZmZzZXRIZWlnaHQsMTApO2lzTmFOKG8pfHwodC5yb3dzLmZvckVhY2goZnVuY3Rpb24obixyKXtuPHQucm93c1tlXSYmKGU9cil9KSxuLnN0eWxlLnBvc2l0aW9uPVwiYWJzb2x1dGVcIixuLnN0eWxlLnRvcD10LnJvd3NbZV0rXCJweFwiLG4uc3R5bGUubGVmdD1cIlwiK3QuY29sc1tlXSx0LnJvd3NbZV0rPWlzTmFOKG8pPzA6bytpLHImJihuLmRhdGFzZXQubWFjeUNvbXBsZXRlPTEpKX0pLHImJih0LnRtcFJvd3M9bnVsbCksbCh0KX1mdW5jdGlvbiBmKHQsbil7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0mJmFyZ3VtZW50c1syXSxyPSEoYXJndW1lbnRzLmxlbmd0aD4zJiZ2b2lkIDAhPT1hcmd1bWVudHNbM10pfHxhcmd1bWVudHNbM10sbz1zKHQub3B0aW9ucyksaT1hKHQub3B0aW9ucykueTtNKHQsbyxlKSx2KG4sZnVuY3Rpb24obil7dC5sYXN0Y29sPT09byYmKHQubGFzdGNvbD0wKTt2YXIgZT1DKG4sXCJoZWlnaHRcIik7ZT1wYXJzZUludChuLm9mZnNldEhlaWdodCwxMCksaXNOYU4oZSl8fChuLnN0eWxlLnBvc2l0aW9uPVwiYWJzb2x1dGVcIixuLnN0eWxlLnRvcD10LnJvd3NbdC5sYXN0Y29sXStcInB4XCIsbi5zdHlsZS5sZWZ0PVwiXCIrdC5jb2xzW3QubGFzdGNvbF0sdC5yb3dzW3QubGFzdGNvbF0rPWlzTmFOKGUpPzA6ZStpLHQubGFzdGNvbCs9MSxyJiYobi5kYXRhc2V0Lm1hY3lDb21wbGV0ZT0xKSl9KSxyJiYodC50bXBSb3dzPW51bGwpLGwodCl9dmFyIGg9ZnVuY3Rpb24gdChuLGUpe2lmKCEodGhpcyBpbnN0YW5jZW9mIHQpKXJldHVybiBuZXcgdChuLGUpO2lmKG4mJm4ubm9kZU5hbWUpcmV0dXJuIG47aWYobj1uLnJlcGxhY2UoL15cXHMqLyxcIlwiKS5yZXBsYWNlKC9cXHMqJC8sXCJcIiksZSlyZXR1cm4gdGhpcy5ieUNzcyhuLGUpO2Zvcih2YXIgciBpbiB0aGlzLnNlbGVjdG9ycylpZihlPXIuc3BsaXQoXCIvXCIpLG5ldyBSZWdFeHAoZVsxXSxlWzJdKS50ZXN0KG4pKXJldHVybiB0aGlzLnNlbGVjdG9yc1tyXShuKTtyZXR1cm4gdGhpcy5ieUNzcyhuKX07aC5wcm90b3R5cGUuYnlDc3M9ZnVuY3Rpb24odCxuKXtyZXR1cm4obnx8ZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwodCl9LGgucHJvdG90eXBlLnNlbGVjdG9ycz17fSxoLnByb3RvdHlwZS5zZWxlY3RvcnNbL15cXC5bXFx3XFwtXSskL109ZnVuY3Rpb24odCl7cmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUodC5zdWJzdHJpbmcoMSkpfSxoLnByb3RvdHlwZS5zZWxlY3RvcnNbL15cXHcrJC9dPWZ1bmN0aW9uKHQpe3JldHVybiBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0KX0saC5wcm90b3R5cGUuc2VsZWN0b3JzWy9eXFwjW1xcd1xcLV0rJC9dPWZ1bmN0aW9uKHQpe3JldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0LnN1YnN0cmluZygxKSl9O3ZhciB2PWZ1bmN0aW9uKHQsbil7Zm9yKHZhciBlPXQubGVuZ3RoLHI9ZTtlLS07KW4odFtyLWUtMV0pfSxtPWZ1bmN0aW9uKCl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0mJmFyZ3VtZW50c1swXTt0aGlzLnJ1bm5pbmc9ITEsdGhpcy5ldmVudHM9W10sdGhpcy5hZGQodCl9O20ucHJvdG90eXBlLnJ1bj1mdW5jdGlvbigpe2lmKCF0aGlzLnJ1bm5pbmcmJnRoaXMuZXZlbnRzLmxlbmd0aD4wKXt2YXIgdD10aGlzLmV2ZW50cy5zaGlmdCgpO3RoaXMucnVubmluZz0hMCx0KCksdGhpcy5ydW5uaW5nPSExLHRoaXMucnVuKCl9fSxtLnByb3RvdHlwZS5hZGQ9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLG49YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0mJmFyZ3VtZW50c1swXTtyZXR1cm4hIW4mJihBcnJheS5pc0FycmF5KG4pP3YobixmdW5jdGlvbihuKXtyZXR1cm4gdC5hZGQobil9KToodGhpcy5ldmVudHMucHVzaChuKSx2b2lkIHRoaXMucnVuKCkpKX0sbS5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLmV2ZW50cz1bXX07dmFyIGQ9ZnVuY3Rpb24odCl7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnt9O3JldHVybiB0aGlzLmluc3RhbmNlPXQsdGhpcy5kYXRhPW4sdGhpc30seT1mdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdJiZhcmd1bWVudHNbMF07dGhpcy5ldmVudHM9e30sdGhpcy5pbnN0YW5jZT10fTt5LnByb3RvdHlwZS5vbj1mdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdJiZhcmd1bWVudHNbMF0sbj1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXSYmYXJndW1lbnRzWzFdO3JldHVybiEoIXR8fCFuKSYmKEFycmF5LmlzQXJyYXkodGhpcy5ldmVudHNbdF0pfHwodGhpcy5ldmVudHNbdF09W10pLHRoaXMuZXZlbnRzW3RdLnB1c2gobikpfSx5LnByb3RvdHlwZS5lbWl0PWZ1bmN0aW9uKCl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0mJmFyZ3VtZW50c1swXSxuPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTp7fTtpZighdHx8IUFycmF5LmlzQXJyYXkodGhpcy5ldmVudHNbdF0pKXJldHVybiExO3ZhciBlPW5ldyBkKHRoaXMuaW5zdGFuY2Usbik7dih0aGlzLmV2ZW50c1t0XSxmdW5jdGlvbih0KXtyZXR1cm4gdChlKX0pfTt2YXIgZz1mdW5jdGlvbih0KXtyZXR1cm4hKFwibmF0dXJhbEhlaWdodFwiaW4gdCYmdC5uYXR1cmFsSGVpZ2h0K3QubmF0dXJhbFdpZHRoPT09MCl8fHQud2lkdGgrdC5oZWlnaHQhPT0wfSxFPWZ1bmN0aW9uKHQsbil7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0mJmFyZ3VtZW50c1syXTtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24odCxlKXtpZihuLmNvbXBsZXRlKXJldHVybiBnKG4pP3Qobik6ZShuKTtuLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsZnVuY3Rpb24oKXtyZXR1cm4gZyhuKT90KG4pOmUobil9KSxuLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLGZ1bmN0aW9uKCl7cmV0dXJuIGUobil9KX0pLnRoZW4oZnVuY3Rpb24obil7ZSYmdC5lbWl0KHQuY29uc3RhbnRzLkVWRU5UX0lNQUdFX0xPQUQse2ltZzpufSl9KS5jYXRjaChmdW5jdGlvbihuKXtyZXR1cm4gdC5lbWl0KHQuY29uc3RhbnRzLkVWRU5UX0lNQUdFX0VSUk9SLHtpbWc6bn0pfSl9LHc9ZnVuY3Rpb24odCxlKXt2YXIgcj1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXSYmYXJndW1lbnRzWzJdO3JldHVybiBuKGUsZnVuY3Rpb24obil7cmV0dXJuIEUodCxuLHIpfSl9LEE9ZnVuY3Rpb24odCxuKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXSYmYXJndW1lbnRzWzJdO3JldHVybiBQcm9taXNlLmFsbCh3KHQsbixlKSkudGhlbihmdW5jdGlvbigpe3QuZW1pdCh0LmNvbnN0YW50cy5FVkVOVF9JTUFHRV9DT01QTEVURSl9KX0sST1mdW5jdGlvbihuKXtyZXR1cm4gdChmdW5jdGlvbigpe24uZW1pdChuLmNvbnN0YW50cy5FVkVOVF9SRVNJWkUpLG4ucXVldWUuYWRkKGZ1bmN0aW9uKCl7cmV0dXJuIG4ucmVjYWxjdWxhdGUoITAsITApfSl9LDEwMCl9LE49ZnVuY3Rpb24odCl7aWYodC5jb250YWluZXI9aCh0Lm9wdGlvbnMuY29udGFpbmVyKSx0LmNvbnRhaW5lciBpbnN0YW5jZW9mIGh8fCF0LmNvbnRhaW5lcilyZXR1cm4hIXQub3B0aW9ucy5kZWJ1ZyYmY29uc29sZS5lcnJvcihcIkVycm9yOiBDb250YWluZXIgbm90IGZvdW5kXCIpO3QuY29udGFpbmVyLmxlbmd0aCYmKHQuY29udGFpbmVyPXQuY29udGFpbmVyWzBdKSx0Lm9wdGlvbnMuY29udGFpbmVyPXQuY29udGFpbmVyLHQuY29udGFpbmVyLnN0eWxlLnBvc2l0aW9uPVwicmVsYXRpdmVcIn0sVD1mdW5jdGlvbih0KXt0LnF1ZXVlPW5ldyBtLHQuZXZlbnRzPW5ldyB5KHQpLHQucm93cz1bXSx0LnJlc2l6ZXI9SSh0KX0sTD1mdW5jdGlvbih0KXt2YXIgbj1oKFwiaW1nXCIsdC5jb250YWluZXIpO3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdC5yZXNpemVyKSx0Lm9uKHQuY29uc3RhbnRzLkVWRU5UX0lNQUdFX0xPQUQsZnVuY3Rpb24oKXtyZXR1cm4gdC5yZWNhbGN1bGF0ZSghMSwhMSl9KSx0Lm9uKHQuY29uc3RhbnRzLkVWRU5UX0lNQUdFX0NPTVBMRVRFLGZ1bmN0aW9uKCl7cmV0dXJuIHQucmVjYWxjdWxhdGUoITAsITApfSksdC5vcHRpb25zLnVzZU93bkltYWdlTG9hZGVyfHxlKHQsbiwhdC5vcHRpb25zLndhaXRGb3JJbWFnZXMpLHQuZW1pdCh0LmNvbnN0YW50cy5FVkVOVF9JTklUSUFMSVpFRCl9LF89ZnVuY3Rpb24odCl7Tih0KSxUKHQpLEwodCl9LGI9ZnVuY3Rpb24odCl7cmV0dXJuIHQ9PT1PYmplY3QodCkmJlwiW29iamVjdCBBcnJheV1cIiE9PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KX0sTz1mdW5jdGlvbih0LG4pe2IodCl8fChuLmNvbHVtbnM9dCksYih0KSYmdC5jb2x1bW5zJiYobi5jb2x1bW5zPXQuY29sdW1ucyksYih0KSYmdC5tYXJnaW4mJiFiKHQubWFyZ2luKSYmKG4ubWFyZ2luPXt4OnQubWFyZ2luLHk6dC5tYXJnaW59KSxiKHQpJiZ0Lm1hcmdpbiYmYih0Lm1hcmdpbikmJnQubWFyZ2luLngmJihuLm1hcmdpbi54PXQubWFyZ2luLngpLGIodCkmJnQubWFyZ2luJiZiKHQubWFyZ2luKSYmdC5tYXJnaW4ueSYmKG4ubWFyZ2luLnk9dC5tYXJnaW4ueSl9LEM9ZnVuY3Rpb24odCxuKXtyZXR1cm4gd2luZG93LmdldENvbXB1dGVkU3R5bGUodCxudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKG4pfSxNPWZ1bmN0aW9uKHQsbil7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0mJmFyZ3VtZW50c1syXTtpZih0Lmxhc3Rjb2x8fCh0Lmxhc3Rjb2w9MCksdC5yb3dzLmxlbmd0aDwxJiYoZT0hMCksZSl7dC5yb3dzPVtdLHQuY29scz1bXSx0Lmxhc3Rjb2w9MDtmb3IodmFyIHI9bi0xO3I+PTA7ci0tKXQucm93c1tyXT0wLHQuY29sc1tyXT11KHQscil9ZWxzZSBpZih0LnRtcFJvd3Mpe3Qucm93cz1bXTtmb3IodmFyIHI9bi0xO3I+PTA7ci0tKXQucm93c1tyXT10LnRtcFJvd3Nbcl19ZWxzZXt0LnRtcFJvd3M9W107Zm9yKHZhciByPW4tMTtyPj0wO3ItLSl0LnRtcFJvd3Nbcl09dC5yb3dzW3JdfX0sVj1mdW5jdGlvbih0KXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXSYmYXJndW1lbnRzWzFdLGU9IShhcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXSl8fGFyZ3VtZW50c1syXSxyPW4/dC5jb250YWluZXIuY2hpbGRyZW46aCgnOnNjb3BlID4gKjpub3QoW2RhdGEtbWFjeS1jb21wbGV0ZT1cIjFcIl0pJyx0LmNvbnRhaW5lcik7cj1BcnJheS5mcm9tKHIpLmZpbHRlcihmdW5jdGlvbih0KXtyZXR1cm4gbnVsbCE9PXQub2Zmc2V0UGFyZW50fSk7dmFyIG89Yyh0Lm9wdGlvbnMpO3JldHVybiB2KHIsZnVuY3Rpb24odCl7biYmKHQuZGF0YXNldC5tYWN5Q29tcGxldGU9MCksdC5zdHlsZS53aWR0aD1vfSksdC5vcHRpb25zLnRydWVPcmRlcj8oZih0LHIsbixlKSx0LmVtaXQodC5jb25zdGFudHMuRVZFTlRfUkVDQUxDVUxBVEVEKSk6KHAodCxyLG4sZSksdC5lbWl0KHQuY29uc3RhbnRzLkVWRU5UX1JFQ0FMQ1VMQVRFRCkpfSxSPWZ1bmN0aW9uKCl7cmV0dXJuISF3aW5kb3cuUHJvbWlzZX0seD1PYmplY3QuYXNzaWdufHxmdW5jdGlvbih0KXtmb3IodmFyIG49MTtuPGFyZ3VtZW50cy5sZW5ndGg7bisrKXt2YXIgZT1hcmd1bWVudHNbbl07Zm9yKHZhciByIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUscikmJih0W3JdPWVbcl0pfXJldHVybiB0fTtBcnJheS5mcm9tfHwoQXJyYXkuZnJvbT1mdW5jdGlvbih0KXtmb3IodmFyIG49MCxlPVtdO248dC5sZW5ndGg7KWUucHVzaCh0W24rK10pO3JldHVybiBlfSk7dmFyIGs9e2NvbHVtbnM6NCxtYXJnaW46Mix0cnVlT3JkZXI6ITEsd2FpdEZvckltYWdlczohMSx1c2VJbWFnZUxvYWRlcjohMCxicmVha0F0Ont9LHVzZU93bkltYWdlTG9hZGVyOiExLG9uSW5pdDohMSxjYW5jZWxMZWdhY3k6ITEsdXNlQ29udGFpbmVyRm9yQnJlYWtwb2ludHM6ITF9OyFmdW5jdGlvbigpe3RyeXtkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKS5xdWVyeVNlbGVjdG9yKFwiOnNjb3BlICpcIil9Y2F0Y2godCl7IWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0KXtyZXR1cm4gZnVuY3Rpb24oZSl7aWYoZSYmbi50ZXN0KGUpKXt2YXIgcj10aGlzLmdldEF0dHJpYnV0ZShcImlkXCIpO3J8fCh0aGlzLmlkPVwicVwiK01hdGguZmxvb3IoOWU2Kk1hdGgucmFuZG9tKCkpKzFlNiksYXJndW1lbnRzWzBdPWUucmVwbGFjZShuLFwiI1wiK3RoaXMuaWQpO3ZhciBvPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiBudWxsPT09cj90aGlzLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpOnJ8fCh0aGlzLmlkPXIpLG99cmV0dXJuIHQuYXBwbHkodGhpcyxhcmd1bWVudHMpfX12YXIgbj0vOnNjb3BlXFxiL2dpLGU9dChFbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yKTtFbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yPWZ1bmN0aW9uKHQpe3JldHVybiBlLmFwcGx5KHRoaXMsYXJndW1lbnRzKX07dmFyIHI9dChFbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yQWxsKTtFbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yQWxsPWZ1bmN0aW9uKHQpe3JldHVybiByLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19KCl9fSgpO3ZhciBxPWZ1bmN0aW9uIHQoKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06aztpZighKHRoaXMgaW5zdGFuY2VvZiB0KSlyZXR1cm4gbmV3IHQobik7dGhpcy5vcHRpb25zPXt9LHgodGhpcy5vcHRpb25zLGssbiksdGhpcy5vcHRpb25zLmNhbmNlbExlZ2FjeSYmIVIoKXx8Xyh0aGlzKX07cmV0dXJuIHEuaW5pdD1mdW5jdGlvbih0KXtyZXR1cm4gY29uc29sZS53YXJuKFwiRGVwcmVjaWF0ZWQ6IE1hY3kuaW5pdCB3aWxsIGJlIHJlbW92ZWQgaW4gdjMuMC4wIG9wdCB0byB1c2UgTWFjeSBkaXJlY3RseSBsaWtlIHNvIE1hY3koeyAvKm9wdGlvbnMgaGVyZSovIH0pIFwiKSxuZXcgcSh0KX0scS5wcm90b3R5cGUucmVjYWxjdWxhdGVPbkltYWdlTG9hZD1mdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdJiZhcmd1bWVudHNbMF07cmV0dXJuIGUodGhpcyxoKFwiaW1nXCIsdGhpcy5jb250YWluZXIpLCF0KX0scS5wcm90b3R5cGUucnVuT25JbWFnZUxvYWQ9ZnVuY3Rpb24odCl7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0mJmFyZ3VtZW50c1sxXSxyPWgoXCJpbWdcIix0aGlzLmNvbnRhaW5lcik7cmV0dXJuIHRoaXMub24odGhpcy5jb25zdGFudHMuRVZFTlRfSU1BR0VfQ09NUExFVEUsdCksbiYmdGhpcy5vbih0aGlzLmNvbnN0YW50cy5FVkVOVF9JTUFHRV9MT0FELHQpLGUodGhpcyxyLG4pfSxxLnByb3RvdHlwZS5yZWNhbGN1bGF0ZT1mdW5jdGlvbigpe3ZhciB0PXRoaXMsbj1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXSYmYXJndW1lbnRzWzBdLGU9IShhcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXSl8fGFyZ3VtZW50c1sxXTtyZXR1cm4gZSYmdGhpcy5xdWV1ZS5jbGVhcigpLHRoaXMucXVldWUuYWRkKGZ1bmN0aW9uKCl7cmV0dXJuIFYodCxuLGUpfSl9LHEucHJvdG90eXBlLnJlbW92ZT1mdW5jdGlvbigpe3dpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5yZXNpemVyKSx2KHRoaXMuY29udGFpbmVyLmNoaWxkcmVuLGZ1bmN0aW9uKHQpe3QucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1tYWN5LWNvbXBsZXRlXCIpLHQucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIil9KSx0aGlzLmNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKX0scS5wcm90b3R5cGUucmVJbml0PWZ1bmN0aW9uKCl7dGhpcy5yZWNhbGN1bGF0ZSghMCwhMCksdGhpcy5lbWl0KHRoaXMuY29uc3RhbnRzLkVWRU5UX0lOSVRJQUxJWkVEKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMucmVzaXplciksdGhpcy5jb250YWluZXIuc3R5bGUucG9zaXRpb249XCJyZWxhdGl2ZVwifSxxLnByb3RvdHlwZS5vbj1mdW5jdGlvbih0LG4pe3RoaXMuZXZlbnRzLm9uKHQsbil9LHEucHJvdG90eXBlLmVtaXQ9ZnVuY3Rpb24odCxuKXt0aGlzLmV2ZW50cy5lbWl0KHQsbil9LHEuY29uc3RhbnRzPXtFVkVOVF9JTklUSUFMSVpFRDpcIm1hY3kuaW5pdGlhbGl6ZWRcIixFVkVOVF9SRUNBTENVTEFURUQ6XCJtYWN5LnJlY2FsY3VsYXRlZFwiLEVWRU5UX0lNQUdFX0xPQUQ6XCJtYWN5LmltYWdlLmxvYWRcIixFVkVOVF9JTUFHRV9FUlJPUjpcIm1hY3kuaW1hZ2UuZXJyb3JcIixFVkVOVF9JTUFHRV9DT01QTEVURTpcIm1hY3kuaW1hZ2VzLmNvbXBsZXRlXCIsRVZFTlRfUkVTSVpFOlwibWFjeS5yZXNpemVcIn0scS5wcm90b3R5cGUuY29uc3RhbnRzPXEuY29uc3RhbnRzLHF9KTtcbiIsImV4cG9ydCBkZWZhdWx0IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCc7XG4iLCJpbXBvcnQgaXNCcm93c2VyIGZyb20gJy4vaXNCcm93c2VyJztcblxuY29uc3QgdGltZW91dER1cmF0aW9uID0gKGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGxvbmdlclRpbWVvdXRCcm93c2VycyA9IFsnRWRnZScsICdUcmlkZW50JywgJ0ZpcmVmb3gnXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb25nZXJUaW1lb3V0QnJvd3NlcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoaXNCcm93c2VyICYmIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihsb25nZXJUaW1lb3V0QnJvd3NlcnNbaV0pID49IDApIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgfVxuICByZXR1cm4gMDtcbn0oKSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBtaWNyb3Rhc2tEZWJvdW5jZShmbikge1xuICBsZXQgY2FsbGVkID0gZmFsc2VcbiAgcmV0dXJuICgpID0+IHtcbiAgICBpZiAoY2FsbGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY2FsbGVkID0gdHJ1ZVxuICAgIHdpbmRvdy5Qcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIGNhbGxlZCA9IGZhbHNlXG4gICAgICBmbigpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGFza0RlYm91bmNlKGZuKSB7XG4gIGxldCBzY2hlZHVsZWQgPSBmYWxzZTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBpZiAoIXNjaGVkdWxlZCkge1xuICAgICAgc2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzY2hlZHVsZWQgPSBmYWxzZTtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0sIHRpbWVvdXREdXJhdGlvbik7XG4gICAgfVxuICB9O1xufVxuXG5jb25zdCBzdXBwb3J0c01pY3JvVGFza3MgPSBpc0Jyb3dzZXIgJiYgd2luZG93LlByb21pc2VcblxuXG4vKipcbiogQ3JlYXRlIGEgZGVib3VuY2VkIHZlcnNpb24gb2YgYSBtZXRob2QsIHRoYXQncyBhc3luY2hyb25vdXNseSBkZWZlcnJlZFxuKiBidXQgY2FsbGVkIGluIHRoZSBtaW5pbXVtIHRpbWUgcG9zc2libGUuXG4qXG4qIEBtZXRob2RcbiogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuKiBAYXJndW1lbnQge0Z1bmN0aW9ufSBmblxuKiBAcmV0dXJucyB7RnVuY3Rpb259XG4qL1xuZXhwb3J0IGRlZmF1bHQgKHN1cHBvcnRzTWljcm9UYXNrc1xuICA/IG1pY3JvdGFza0RlYm91bmNlXG4gIDogdGFza0RlYm91bmNlKTtcbiIsIi8qKlxuICogQ2hlY2sgaWYgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIGEgZnVuY3Rpb25cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7QW55fSBmdW5jdGlvblRvQ2hlY2sgLSB2YXJpYWJsZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IGFuc3dlciB0bzogaXMgYSBmdW5jdGlvbj9cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNGdW5jdGlvbihmdW5jdGlvblRvQ2hlY2spIHtcbiAgY29uc3QgZ2V0VHlwZSA9IHt9O1xuICByZXR1cm4gKFxuICAgIGZ1bmN0aW9uVG9DaGVjayAmJlxuICAgIGdldFR5cGUudG9TdHJpbmcuY2FsbChmdW5jdGlvblRvQ2hlY2spID09PSAnW29iamVjdCBGdW5jdGlvbl0nXG4gICk7XG59XG4iLCIvKipcbiAqIEdldCBDU1MgY29tcHV0ZWQgcHJvcGVydHkgb2YgdGhlIGdpdmVuIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWVtZW50fSBlbGVtZW50XG4gKiBAYXJndW1lbnQge1N0cmluZ30gcHJvcGVydHlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsZW1lbnQsIHByb3BlcnR5KSB7XG4gIGlmIChlbGVtZW50Lm5vZGVUeXBlICE9PSAxKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIC8vIE5PVEU6IDEgRE9NIGFjY2VzcyBoZXJlXG4gIGNvbnN0IHdpbmRvdyA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcbiAgY29uc3QgY3NzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbCk7XG4gIHJldHVybiBwcm9wZXJ0eSA/IGNzc1twcm9wZXJ0eV0gOiBjc3M7XG59XG4iLCIvKipcbiAqIFJldHVybnMgdGhlIHBhcmVudE5vZGUgb3IgdGhlIGhvc3Qgb2YgdGhlIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge0VsZW1lbnR9IHBhcmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQYXJlbnROb2RlKGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnQubm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG4gIHJldHVybiBlbGVtZW50LnBhcmVudE5vZGUgfHwgZWxlbWVudC5ob3N0O1xufVxuIiwiaW1wb3J0IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSBmcm9tICcuL2dldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSc7XG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tICcuL2dldFBhcmVudE5vZGUnO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIHNjcm9sbGluZyBwYXJlbnQgb2YgdGhlIGdpdmVuIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge0VsZW1lbnR9IHNjcm9sbCBwYXJlbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U2Nyb2xsUGFyZW50KGVsZW1lbnQpIHtcbiAgLy8gUmV0dXJuIGJvZHksIGBnZXRTY3JvbGxgIHdpbGwgdGFrZSBjYXJlIHRvIGdldCB0aGUgY29ycmVjdCBgc2Nyb2xsVG9wYCBmcm9tIGl0XG4gIGlmICghZWxlbWVudCkge1xuICAgIHJldHVybiBkb2N1bWVudC5ib2R5XG4gIH1cblxuICBzd2l0Y2ggKGVsZW1lbnQubm9kZU5hbWUpIHtcbiAgICBjYXNlICdIVE1MJzpcbiAgICBjYXNlICdCT0RZJzpcbiAgICAgIHJldHVybiBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYm9keVxuICAgIGNhc2UgJyNkb2N1bWVudCc6XG4gICAgICByZXR1cm4gZWxlbWVudC5ib2R5XG4gIH1cblxuICAvLyBGaXJlZm94IHdhbnQgdXMgdG8gY2hlY2sgYC14YCBhbmQgYC15YCB2YXJpYXRpb25zIGFzIHdlbGxcbiAgY29uc3QgeyBvdmVyZmxvdywgb3ZlcmZsb3dYLCBvdmVyZmxvd1kgfSA9IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShlbGVtZW50KTtcbiAgaWYgKC8oYXV0b3xzY3JvbGx8b3ZlcmxheSkvLnRlc3Qob3ZlcmZsb3cgKyBvdmVyZmxvd1kgKyBvdmVyZmxvd1gpKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICByZXR1cm4gZ2V0U2Nyb2xsUGFyZW50KGdldFBhcmVudE5vZGUoZWxlbWVudCkpO1xufVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRoZSByZWZlcmVuY2Ugbm9kZSBvZiB0aGUgcmVmZXJlbmNlIG9iamVjdCwgb3IgdGhlIHJlZmVyZW5jZSBvYmplY3QgaXRzZWxmLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtFbGVtZW50fE9iamVjdH0gcmVmZXJlbmNlIC0gdGhlIHJlZmVyZW5jZSBlbGVtZW50ICh0aGUgcG9wcGVyIHdpbGwgYmUgcmVsYXRpdmUgdG8gdGhpcylcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBwYXJlbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UmVmZXJlbmNlTm9kZShyZWZlcmVuY2UpIHtcbiAgcmV0dXJuIHJlZmVyZW5jZSAmJiByZWZlcmVuY2UucmVmZXJlbmNlTm9kZSA/IHJlZmVyZW5jZS5yZWZlcmVuY2VOb2RlIDogcmVmZXJlbmNlO1xufVxuIiwiaW1wb3J0IGlzQnJvd3NlciBmcm9tICcuL2lzQnJvd3Nlcic7XG5cbmNvbnN0IGlzSUUxMSA9IGlzQnJvd3NlciAmJiAhISh3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgZG9jdW1lbnQuZG9jdW1lbnRNb2RlKTtcbmNvbnN0IGlzSUUxMCA9IGlzQnJvd3NlciAmJiAvTVNJRSAxMC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIHRoZSBicm93c2VyIGlzIEludGVybmV0IEV4cGxvcmVyXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge051bWJlcn0gdmVyc2lvbiB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IGlzSUVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNJRSh2ZXJzaW9uKSB7XG4gIGlmICh2ZXJzaW9uID09PSAxMSkge1xuICAgIHJldHVybiBpc0lFMTE7XG4gIH1cbiAgaWYgKHZlcnNpb24gPT09IDEwKSB7XG4gICAgcmV0dXJuIGlzSUUxMDtcbiAgfVxuICByZXR1cm4gaXNJRTExIHx8IGlzSUUxMDtcbn1cbiIsImltcG9ydCBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkgZnJvbSAnLi9nZXRTdHlsZUNvbXB1dGVkUHJvcGVydHknO1xuaW1wb3J0IGlzSUUgZnJvbSAnLi9pc0lFJztcbi8qKlxuICogUmV0dXJucyB0aGUgb2Zmc2V0IHBhcmVudCBvZiB0aGUgZ2l2ZW4gZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7RWxlbWVudH0gb2Zmc2V0IHBhcmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB9XG5cbiAgY29uc3Qgbm9PZmZzZXRQYXJlbnQgPSBpc0lFKDEwKSA/IGRvY3VtZW50LmJvZHkgOiBudWxsO1xuXG4gIC8vIE5PVEU6IDEgRE9NIGFjY2VzcyBoZXJlXG4gIGxldCBvZmZzZXRQYXJlbnQgPSBlbGVtZW50Lm9mZnNldFBhcmVudCB8fCBudWxsO1xuICAvLyBTa2lwIGhpZGRlbiBlbGVtZW50cyB3aGljaCBkb24ndCBoYXZlIGFuIG9mZnNldFBhcmVudFxuICB3aGlsZSAob2Zmc2V0UGFyZW50ID09PSBub09mZnNldFBhcmVudCAmJiBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZykge1xuICAgIG9mZnNldFBhcmVudCA9IChlbGVtZW50ID0gZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcpLm9mZnNldFBhcmVudDtcbiAgfVxuXG4gIGNvbnN0IG5vZGVOYW1lID0gb2Zmc2V0UGFyZW50ICYmIG9mZnNldFBhcmVudC5ub2RlTmFtZTtcblxuICBpZiAoIW5vZGVOYW1lIHx8IG5vZGVOYW1lID09PSAnQk9EWScgfHwgbm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgIHJldHVybiBlbGVtZW50ID8gZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgfVxuXG4gIC8vIC5vZmZzZXRQYXJlbnQgd2lsbCByZXR1cm4gdGhlIGNsb3Nlc3QgVEgsIFREIG9yIFRBQkxFIGluIGNhc2VcbiAgLy8gbm8gb2Zmc2V0UGFyZW50IGlzIHByZXNlbnQsIEkgaGF0ZSB0aGlzIGpvYi4uLlxuICBpZiAoXG4gICAgWydUSCcsICdURCcsICdUQUJMRSddLmluZGV4T2Yob2Zmc2V0UGFyZW50Lm5vZGVOYW1lKSAhPT0gLTEgJiZcbiAgICBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkob2Zmc2V0UGFyZW50LCAncG9zaXRpb24nKSA9PT0gJ3N0YXRpYydcbiAgKSB7XG4gICAgcmV0dXJuIGdldE9mZnNldFBhcmVudChvZmZzZXRQYXJlbnQpO1xuICB9XG5cbiAgcmV0dXJuIG9mZnNldFBhcmVudDtcbn1cbiIsImltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSAnLi9nZXRPZmZzZXRQYXJlbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc09mZnNldENvbnRhaW5lcihlbGVtZW50KSB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGVsZW1lbnQ7XG4gIGlmIChub2RlTmFtZSA9PT0gJ0JPRFknKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgbm9kZU5hbWUgPT09ICdIVE1MJyB8fCBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCkgPT09IGVsZW1lbnRcbiAgKTtcbn1cbiIsIi8qKlxuICogRmluZHMgdGhlIHJvb3Qgbm9kZSAoZG9jdW1lbnQsIHNoYWRvd0RPTSByb290KSBvZiB0aGUgZ2l2ZW4gZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBub2RlXG4gKiBAcmV0dXJucyB7RWxlbWVudH0gcm9vdCBub2RlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFJvb3Qobm9kZSkge1xuICBpZiAobm9kZS5wYXJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIGdldFJvb3Qobm9kZS5wYXJlbnROb2RlKTtcbiAgfVxuXG4gIHJldHVybiBub2RlO1xufVxuIiwiaW1wb3J0IGlzT2Zmc2V0Q29udGFpbmVyIGZyb20gJy4vaXNPZmZzZXRDb250YWluZXInO1xuaW1wb3J0IGdldFJvb3QgZnJvbSAnLi9nZXRSb290JztcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSAnLi9nZXRPZmZzZXRQYXJlbnQnO1xuXG4vKipcbiAqIEZpbmRzIHRoZSBvZmZzZXQgcGFyZW50IGNvbW1vbiB0byB0aGUgdHdvIHByb3ZpZGVkIG5vZGVzXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnQxXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnQyXG4gKiBAcmV0dXJucyB7RWxlbWVudH0gY29tbW9uIG9mZnNldCBwYXJlbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmluZENvbW1vbk9mZnNldFBhcmVudChlbGVtZW50MSwgZWxlbWVudDIpIHtcbiAgLy8gVGhpcyBjaGVjayBpcyBuZWVkZWQgdG8gYXZvaWQgZXJyb3JzIGluIGNhc2Ugb25lIG9mIHRoZSBlbGVtZW50cyBpc24ndCBkZWZpbmVkIGZvciBhbnkgcmVhc29uXG4gIGlmICghZWxlbWVudDEgfHwgIWVsZW1lbnQxLm5vZGVUeXBlIHx8ICFlbGVtZW50MiB8fCAhZWxlbWVudDIubm9kZVR5cGUpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB9XG5cbiAgLy8gSGVyZSB3ZSBtYWtlIHN1cmUgdG8gZ2l2ZSBhcyBcInN0YXJ0XCIgdGhlIGVsZW1lbnQgdGhhdCBjb21lcyBmaXJzdCBpbiB0aGUgRE9NXG4gIGNvbnN0IG9yZGVyID1cbiAgICBlbGVtZW50MS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihlbGVtZW50MikgJlxuICAgIE5vZGUuRE9DVU1FTlRfUE9TSVRJT05fRk9MTE9XSU5HO1xuICBjb25zdCBzdGFydCA9IG9yZGVyID8gZWxlbWVudDEgOiBlbGVtZW50MjtcbiAgY29uc3QgZW5kID0gb3JkZXIgPyBlbGVtZW50MiA6IGVsZW1lbnQxO1xuXG4gIC8vIEdldCBjb21tb24gYW5jZXN0b3IgY29udGFpbmVyXG4gIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgcmFuZ2Uuc2V0U3RhcnQoc3RhcnQsIDApO1xuICByYW5nZS5zZXRFbmQoZW5kLCAwKTtcbiAgY29uc3QgeyBjb21tb25BbmNlc3RvckNvbnRhaW5lciB9ID0gcmFuZ2U7XG5cbiAgLy8gQm90aCBub2RlcyBhcmUgaW5zaWRlICNkb2N1bWVudFxuICBpZiAoXG4gICAgKGVsZW1lbnQxICE9PSBjb21tb25BbmNlc3RvckNvbnRhaW5lciAmJlxuICAgICAgZWxlbWVudDIgIT09IGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyKSB8fFxuICAgIHN0YXJ0LmNvbnRhaW5zKGVuZClcbiAgKSB7XG4gICAgaWYgKGlzT2Zmc2V0Q29udGFpbmVyKGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyKSkge1xuICAgICAgcmV0dXJuIGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyO1xuICAgIH1cblxuICAgIHJldHVybiBnZXRPZmZzZXRQYXJlbnQoY29tbW9uQW5jZXN0b3JDb250YWluZXIpO1xuICB9XG5cbiAgLy8gb25lIG9mIHRoZSBub2RlcyBpcyBpbnNpZGUgc2hhZG93RE9NLCBmaW5kIHdoaWNoIG9uZVxuICBjb25zdCBlbGVtZW50MXJvb3QgPSBnZXRSb290KGVsZW1lbnQxKTtcbiAgaWYgKGVsZW1lbnQxcm9vdC5ob3N0KSB7XG4gICAgcmV0dXJuIGZpbmRDb21tb25PZmZzZXRQYXJlbnQoZWxlbWVudDFyb290Lmhvc3QsIGVsZW1lbnQyKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmluZENvbW1vbk9mZnNldFBhcmVudChlbGVtZW50MSwgZ2V0Um9vdChlbGVtZW50MikuaG9zdCk7XG4gIH1cbn1cbiIsIi8qKlxuICogR2V0cyB0aGUgc2Nyb2xsIHZhbHVlIG9mIHRoZSBnaXZlbiBlbGVtZW50IGluIHRoZSBnaXZlbiBzaWRlICh0b3AgYW5kIGxlZnQpXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBzaWRlIGB0b3BgIG9yIGBsZWZ0YFxuICogQHJldHVybnMge251bWJlcn0gYW1vdW50IG9mIHNjcm9sbGVkIHBpeGVsc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTY3JvbGwoZWxlbWVudCwgc2lkZSA9ICd0b3AnKSB7XG4gIGNvbnN0IHVwcGVyU2lkZSA9IHNpZGUgPT09ICd0b3AnID8gJ3Njcm9sbFRvcCcgOiAnc2Nyb2xsTGVmdCc7XG4gIGNvbnN0IG5vZGVOYW1lID0gZWxlbWVudC5ub2RlTmFtZTtcblxuICBpZiAobm9kZU5hbWUgPT09ICdCT0RZJyB8fCBub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgY29uc3QgaHRtbCA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgY29uc3Qgc2Nyb2xsaW5nRWxlbWVudCA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50IHx8IGh0bWw7XG4gICAgcmV0dXJuIHNjcm9sbGluZ0VsZW1lbnRbdXBwZXJTaWRlXTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50W3VwcGVyU2lkZV07XG59XG4iLCJpbXBvcnQgZ2V0U2Nyb2xsIGZyb20gJy4vZ2V0U2Nyb2xsJztcblxuLypcbiAqIFN1bSBvciBzdWJ0cmFjdCB0aGUgZWxlbWVudCBzY3JvbGwgdmFsdWVzIChsZWZ0IGFuZCB0b3ApIGZyb20gYSBnaXZlbiByZWN0IG9iamVjdFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtPYmplY3R9IHJlY3QgLSBSZWN0IG9iamVjdCB5b3Ugd2FudCB0byBjaGFuZ2VcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBUaGUgZWxlbWVudCBmcm9tIHRoZSBmdW5jdGlvbiByZWFkcyB0aGUgc2Nyb2xsIHZhbHVlc1xuICogQHBhcmFtIHtCb29sZWFufSBzdWJ0cmFjdCAtIHNldCB0byB0cnVlIGlmIHlvdSB3YW50IHRvIHN1YnRyYWN0IHRoZSBzY3JvbGwgdmFsdWVzXG4gKiBAcmV0dXJuIHtPYmplY3R9IHJlY3QgLSBUaGUgbW9kaWZpZXIgcmVjdCBvYmplY3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5jbHVkZVNjcm9sbChyZWN0LCBlbGVtZW50LCBzdWJ0cmFjdCA9IGZhbHNlKSB7XG4gIGNvbnN0IHNjcm9sbFRvcCA9IGdldFNjcm9sbChlbGVtZW50LCAndG9wJyk7XG4gIGNvbnN0IHNjcm9sbExlZnQgPSBnZXRTY3JvbGwoZWxlbWVudCwgJ2xlZnQnKTtcbiAgY29uc3QgbW9kaWZpZXIgPSBzdWJ0cmFjdCA/IC0xIDogMTtcbiAgcmVjdC50b3AgKz0gc2Nyb2xsVG9wICogbW9kaWZpZXI7XG4gIHJlY3QuYm90dG9tICs9IHNjcm9sbFRvcCAqIG1vZGlmaWVyO1xuICByZWN0LmxlZnQgKz0gc2Nyb2xsTGVmdCAqIG1vZGlmaWVyO1xuICByZWN0LnJpZ2h0ICs9IHNjcm9sbExlZnQgKiBtb2RpZmllcjtcbiAgcmV0dXJuIHJlY3Q7XG59XG4iLCIvKlxuICogSGVscGVyIHRvIGRldGVjdCBib3JkZXJzIG9mIGEgZ2l2ZW4gZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtDU1NTdHlsZURlY2xhcmF0aW9ufSBzdHlsZXNcbiAqIFJlc3VsdCBvZiBgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5YCBvbiB0aGUgZ2l2ZW4gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IGF4aXMgLSBgeGAgb3IgYHlgXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGJvcmRlcnMgLSBUaGUgYm9yZGVycyBzaXplIG9mIHRoZSBnaXZlbiBheGlzXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzLCBheGlzKSB7XG4gIGNvbnN0IHNpZGVBID0gYXhpcyA9PT0gJ3gnID8gJ0xlZnQnIDogJ1RvcCc7XG4gIGNvbnN0IHNpZGVCID0gc2lkZUEgPT09ICdMZWZ0JyA/ICdSaWdodCcgOiAnQm90dG9tJztcblxuICByZXR1cm4gKFxuICAgIHBhcnNlRmxvYXQoc3R5bGVzW2Bib3JkZXIke3NpZGVBfVdpZHRoYF0pICtcbiAgICBwYXJzZUZsb2F0KHN0eWxlc1tgYm9yZGVyJHtzaWRlQn1XaWR0aGBdKVxuICApO1xufVxuIiwiaW1wb3J0IGlzSUUgZnJvbSAnLi9pc0lFJztcblxuZnVuY3Rpb24gZ2V0U2l6ZShheGlzLCBib2R5LCBodG1sLCBjb21wdXRlZFN0eWxlKSB7XG4gIHJldHVybiBNYXRoLm1heChcbiAgICBib2R5W2BvZmZzZXQke2F4aXN9YF0sXG4gICAgYm9keVtgc2Nyb2xsJHtheGlzfWBdLFxuICAgIGh0bWxbYGNsaWVudCR7YXhpc31gXSxcbiAgICBodG1sW2BvZmZzZXQke2F4aXN9YF0sXG4gICAgaHRtbFtgc2Nyb2xsJHtheGlzfWBdLFxuICAgIGlzSUUoMTApXG4gICAgICA/IChwYXJzZUludChodG1sW2BvZmZzZXQke2F4aXN9YF0pICsgXG4gICAgICBwYXJzZUludChjb21wdXRlZFN0eWxlW2BtYXJnaW4ke2F4aXMgPT09ICdIZWlnaHQnID8gJ1RvcCcgOiAnTGVmdCd9YF0pICsgXG4gICAgICBwYXJzZUludChjb21wdXRlZFN0eWxlW2BtYXJnaW4ke2F4aXMgPT09ICdIZWlnaHQnID8gJ0JvdHRvbScgOiAnUmlnaHQnfWBdKSlcbiAgICA6IDAgXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdpbmRvd1NpemVzKGRvY3VtZW50KSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICBjb25zdCBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICBjb25zdCBjb21wdXRlZFN0eWxlID0gaXNJRSgxMCkgJiYgZ2V0Q29tcHV0ZWRTdHlsZShodG1sKTtcblxuICByZXR1cm4ge1xuICAgIGhlaWdodDogZ2V0U2l6ZSgnSGVpZ2h0JywgYm9keSwgaHRtbCwgY29tcHV0ZWRTdHlsZSksXG4gICAgd2lkdGg6IGdldFNpemUoJ1dpZHRoJywgYm9keSwgaHRtbCwgY29tcHV0ZWRTdHlsZSksXG4gIH07XG59XG4iLCIvKipcbiAqIEdpdmVuIGVsZW1lbnQgb2Zmc2V0cywgZ2VuZXJhdGUgYW4gb3V0cHV0IHNpbWlsYXIgdG8gZ2V0Qm91bmRpbmdDbGllbnRSZWN0XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge09iamVjdH0gb2Zmc2V0c1xuICogQHJldHVybnMge09iamVjdH0gQ2xpZW50UmVjdCBsaWtlIG91dHB1dFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDbGllbnRSZWN0KG9mZnNldHMpIHtcbiAgcmV0dXJuIHtcbiAgICAuLi5vZmZzZXRzLFxuICAgIHJpZ2h0OiBvZmZzZXRzLmxlZnQgKyBvZmZzZXRzLndpZHRoLFxuICAgIGJvdHRvbTogb2Zmc2V0cy50b3AgKyBvZmZzZXRzLmhlaWdodCxcbiAgfTtcbn1cbiIsImltcG9ydCBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkgZnJvbSAnLi9nZXRTdHlsZUNvbXB1dGVkUHJvcGVydHknO1xuaW1wb3J0IGdldEJvcmRlcnNTaXplIGZyb20gJy4vZ2V0Qm9yZGVyc1NpemUnO1xuaW1wb3J0IGdldFdpbmRvd1NpemVzIGZyb20gJy4vZ2V0V2luZG93U2l6ZXMnO1xuaW1wb3J0IGdldFNjcm9sbCBmcm9tICcuL2dldFNjcm9sbCc7XG5pbXBvcnQgZ2V0Q2xpZW50UmVjdCBmcm9tICcuL2dldENsaWVudFJlY3QnO1xuaW1wb3J0IGlzSUUgZnJvbSAnLi9pc0lFJztcblxuLyoqXG4gKiBHZXQgYm91bmRpbmcgY2xpZW50IHJlY3Qgb2YgZ2l2ZW4gZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybiB7T2JqZWN0fSBjbGllbnQgcmVjdFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCkge1xuICBsZXQgcmVjdCA9IHt9O1xuXG4gIC8vIElFMTAgMTAgRklYOiBQbGVhc2UsIGRvbid0IGFzaywgdGhlIGVsZW1lbnQgaXNuJ3RcbiAgLy8gY29uc2lkZXJlZCBpbiBET00gaW4gc29tZSBjaXJjdW1zdGFuY2VzLi4uXG4gIC8vIFRoaXMgaXNuJ3QgcmVwcm9kdWNpYmxlIGluIElFMTAgY29tcGF0aWJpbGl0eSBtb2RlIG9mIElFMTFcbiAgdHJ5IHtcbiAgICBpZiAoaXNJRSgxMCkpIHtcbiAgICAgIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gZ2V0U2Nyb2xsKGVsZW1lbnQsICd0b3AnKTtcbiAgICAgIGNvbnN0IHNjcm9sbExlZnQgPSBnZXRTY3JvbGwoZWxlbWVudCwgJ2xlZnQnKTtcbiAgICAgIHJlY3QudG9wICs9IHNjcm9sbFRvcDtcbiAgICAgIHJlY3QubGVmdCArPSBzY3JvbGxMZWZ0O1xuICAgICAgcmVjdC5ib3R0b20gKz0gc2Nyb2xsVG9wO1xuICAgICAgcmVjdC5yaWdodCArPSBzY3JvbGxMZWZ0O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIH1cbiAgfVxuICBjYXRjaChlKXt9XG5cbiAgY29uc3QgcmVzdWx0ID0ge1xuICAgIGxlZnQ6IHJlY3QubGVmdCxcbiAgICB0b3A6IHJlY3QudG9wLFxuICAgIHdpZHRoOiByZWN0LnJpZ2h0IC0gcmVjdC5sZWZ0LFxuICAgIGhlaWdodDogcmVjdC5ib3R0b20gLSByZWN0LnRvcCxcbiAgfTtcblxuICAvLyBzdWJ0cmFjdCBzY3JvbGxiYXIgc2l6ZSBmcm9tIHNpemVzXG4gIGNvbnN0IHNpemVzID0gZWxlbWVudC5ub2RlTmFtZSA9PT0gJ0hUTUwnID8gZ2V0V2luZG93U2l6ZXMoZWxlbWVudC5vd25lckRvY3VtZW50KSA6IHt9O1xuICBjb25zdCB3aWR0aCA9XG4gICAgc2l6ZXMud2lkdGggfHwgZWxlbWVudC5jbGllbnRXaWR0aCB8fCByZXN1bHQud2lkdGg7XG4gIGNvbnN0IGhlaWdodCA9XG4gICAgc2l6ZXMuaGVpZ2h0IHx8IGVsZW1lbnQuY2xpZW50SGVpZ2h0IHx8IHJlc3VsdC5oZWlnaHQ7XG5cbiAgbGV0IGhvcml6U2Nyb2xsYmFyID0gZWxlbWVudC5vZmZzZXRXaWR0aCAtIHdpZHRoO1xuICBsZXQgdmVydFNjcm9sbGJhciA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0IC0gaGVpZ2h0O1xuXG4gIC8vIGlmIGFuIGh5cG90aGV0aWNhbCBzY3JvbGxiYXIgaXMgZGV0ZWN0ZWQsIHdlIG11c3QgYmUgc3VyZSBpdCdzIG5vdCBhIGBib3JkZXJgXG4gIC8vIHdlIG1ha2UgdGhpcyBjaGVjayBjb25kaXRpb25hbCBmb3IgcGVyZm9ybWFuY2UgcmVhc29uc1xuICBpZiAoaG9yaXpTY3JvbGxiYXIgfHwgdmVydFNjcm9sbGJhcikge1xuICAgIGNvbnN0IHN0eWxlcyA9IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShlbGVtZW50KTtcbiAgICBob3JpelNjcm9sbGJhciAtPSBnZXRCb3JkZXJzU2l6ZShzdHlsZXMsICd4Jyk7XG4gICAgdmVydFNjcm9sbGJhciAtPSBnZXRCb3JkZXJzU2l6ZShzdHlsZXMsICd5Jyk7XG5cbiAgICByZXN1bHQud2lkdGggLT0gaG9yaXpTY3JvbGxiYXI7XG4gICAgcmVzdWx0LmhlaWdodCAtPSB2ZXJ0U2Nyb2xsYmFyO1xuICB9XG5cbiAgcmV0dXJuIGdldENsaWVudFJlY3QocmVzdWx0KTtcbn1cbiIsImltcG9ydCBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkgZnJvbSAnLi9nZXRTdHlsZUNvbXB1dGVkUHJvcGVydHknO1xuaW1wb3J0IGluY2x1ZGVTY3JvbGwgZnJvbSAnLi9pbmNsdWRlU2Nyb2xsJztcbmltcG9ydCBnZXRTY3JvbGxQYXJlbnQgZnJvbSAnLi9nZXRTY3JvbGxQYXJlbnQnO1xuaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tICcuL2dldEJvdW5kaW5nQ2xpZW50UmVjdCc7XG5pbXBvcnQgcnVuSXNJRSBmcm9tICcuL2lzSUUnO1xuaW1wb3J0IGdldENsaWVudFJlY3QgZnJvbSAnLi9nZXRDbGllbnRSZWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlKGNoaWxkcmVuLCBwYXJlbnQsIGZpeGVkUG9zaXRpb24gPSBmYWxzZSkge1xuICBjb25zdCBpc0lFMTAgPSBydW5Jc0lFKDEwKTtcbiAgY29uc3QgaXNIVE1MID0gcGFyZW50Lm5vZGVOYW1lID09PSAnSFRNTCc7XG4gIGNvbnN0IGNoaWxkcmVuUmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChjaGlsZHJlbik7XG4gIGNvbnN0IHBhcmVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QocGFyZW50KTtcbiAgY29uc3Qgc2Nyb2xsUGFyZW50ID0gZ2V0U2Nyb2xsUGFyZW50KGNoaWxkcmVuKTtcblxuICBjb25zdCBzdHlsZXMgPSBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkocGFyZW50KTtcbiAgY29uc3QgYm9yZGVyVG9wV2lkdGggPSBwYXJzZUZsb2F0KHN0eWxlcy5ib3JkZXJUb3BXaWR0aCk7XG4gIGNvbnN0IGJvcmRlckxlZnRXaWR0aCA9IHBhcnNlRmxvYXQoc3R5bGVzLmJvcmRlckxlZnRXaWR0aCk7XG5cbiAgLy8gSW4gY2FzZXMgd2hlcmUgdGhlIHBhcmVudCBpcyBmaXhlZCwgd2UgbXVzdCBpZ25vcmUgbmVnYXRpdmUgc2Nyb2xsIGluIG9mZnNldCBjYWxjXG4gIGlmKGZpeGVkUG9zaXRpb24gJiYgaXNIVE1MKSB7XG4gICAgcGFyZW50UmVjdC50b3AgPSBNYXRoLm1heChwYXJlbnRSZWN0LnRvcCwgMCk7XG4gICAgcGFyZW50UmVjdC5sZWZ0ID0gTWF0aC5tYXgocGFyZW50UmVjdC5sZWZ0LCAwKTtcbiAgfVxuICBsZXQgb2Zmc2V0cyA9IGdldENsaWVudFJlY3Qoe1xuICAgIHRvcDogY2hpbGRyZW5SZWN0LnRvcCAtIHBhcmVudFJlY3QudG9wIC0gYm9yZGVyVG9wV2lkdGgsXG4gICAgbGVmdDogY2hpbGRyZW5SZWN0LmxlZnQgLSBwYXJlbnRSZWN0LmxlZnQgLSBib3JkZXJMZWZ0V2lkdGgsXG4gICAgd2lkdGg6IGNoaWxkcmVuUmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IGNoaWxkcmVuUmVjdC5oZWlnaHQsXG4gIH0pO1xuICBvZmZzZXRzLm1hcmdpblRvcCA9IDA7XG4gIG9mZnNldHMubWFyZ2luTGVmdCA9IDA7XG5cbiAgLy8gU3VidHJhY3QgbWFyZ2lucyBvZiBkb2N1bWVudEVsZW1lbnQgaW4gY2FzZSBpdCdzIGJlaW5nIHVzZWQgYXMgcGFyZW50XG4gIC8vIHdlIGRvIHRoaXMgb25seSBvbiBIVE1MIGJlY2F1c2UgaXQncyB0aGUgb25seSBlbGVtZW50IHRoYXQgYmVoYXZlc1xuICAvLyBkaWZmZXJlbnRseSB3aGVuIG1hcmdpbnMgYXJlIGFwcGxpZWQgdG8gaXQuIFRoZSBtYXJnaW5zIGFyZSBpbmNsdWRlZCBpblxuICAvLyB0aGUgYm94IG9mIHRoZSBkb2N1bWVudEVsZW1lbnQsIGluIHRoZSBvdGhlciBjYXNlcyBub3QuXG4gIGlmICghaXNJRTEwICYmIGlzSFRNTCkge1xuICAgIGNvbnN0IG1hcmdpblRvcCA9IHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpblRvcCk7XG4gICAgY29uc3QgbWFyZ2luTGVmdCA9IHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpbkxlZnQpO1xuXG4gICAgb2Zmc2V0cy50b3AgLT0gYm9yZGVyVG9wV2lkdGggLSBtYXJnaW5Ub3A7XG4gICAgb2Zmc2V0cy5ib3R0b20gLT0gYm9yZGVyVG9wV2lkdGggLSBtYXJnaW5Ub3A7XG4gICAgb2Zmc2V0cy5sZWZ0IC09IGJvcmRlckxlZnRXaWR0aCAtIG1hcmdpbkxlZnQ7XG4gICAgb2Zmc2V0cy5yaWdodCAtPSBib3JkZXJMZWZ0V2lkdGggLSBtYXJnaW5MZWZ0O1xuXG4gICAgLy8gQXR0YWNoIG1hcmdpblRvcCBhbmQgbWFyZ2luTGVmdCBiZWNhdXNlIGluIHNvbWUgY2lyY3Vtc3RhbmNlcyB3ZSBtYXkgbmVlZCB0aGVtXG4gICAgb2Zmc2V0cy5tYXJnaW5Ub3AgPSBtYXJnaW5Ub3A7XG4gICAgb2Zmc2V0cy5tYXJnaW5MZWZ0ID0gbWFyZ2luTGVmdDtcbiAgfVxuXG4gIGlmIChcbiAgICBpc0lFMTAgJiYgIWZpeGVkUG9zaXRpb25cbiAgICAgID8gcGFyZW50LmNvbnRhaW5zKHNjcm9sbFBhcmVudClcbiAgICAgIDogcGFyZW50ID09PSBzY3JvbGxQYXJlbnQgJiYgc2Nyb2xsUGFyZW50Lm5vZGVOYW1lICE9PSAnQk9EWSdcbiAgKSB7XG4gICAgb2Zmc2V0cyA9IGluY2x1ZGVTY3JvbGwob2Zmc2V0cywgcGFyZW50KTtcbiAgfVxuXG4gIHJldHVybiBvZmZzZXRzO1xufVxuIiwiaW1wb3J0IGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZSBmcm9tICcuL2dldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZSc7XG5pbXBvcnQgZ2V0U2Nyb2xsIGZyb20gJy4vZ2V0U2Nyb2xsJztcbmltcG9ydCBnZXRDbGllbnRSZWN0IGZyb20gJy4vZ2V0Q2xpZW50UmVjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFZpZXdwb3J0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcnRiaXRyYXJ5Tm9kZShlbGVtZW50LCBleGNsdWRlU2Nyb2xsID0gZmFsc2UpIHtcbiAgY29uc3QgaHRtbCA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIGNvbnN0IHJlbGF0aXZlT2Zmc2V0ID0gZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlKGVsZW1lbnQsIGh0bWwpO1xuICBjb25zdCB3aWR0aCA9IE1hdGgubWF4KGh0bWwuY2xpZW50V2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDApO1xuICBjb25zdCBoZWlnaHQgPSBNYXRoLm1heChodG1sLmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApO1xuXG4gIGNvbnN0IHNjcm9sbFRvcCA9ICFleGNsdWRlU2Nyb2xsID8gZ2V0U2Nyb2xsKGh0bWwpIDogMDtcbiAgY29uc3Qgc2Nyb2xsTGVmdCA9ICFleGNsdWRlU2Nyb2xsID8gZ2V0U2Nyb2xsKGh0bWwsICdsZWZ0JykgOiAwO1xuXG4gIGNvbnN0IG9mZnNldCA9IHtcbiAgICB0b3A6IHNjcm9sbFRvcCAtIHJlbGF0aXZlT2Zmc2V0LnRvcCArIHJlbGF0aXZlT2Zmc2V0Lm1hcmdpblRvcCxcbiAgICBsZWZ0OiBzY3JvbGxMZWZ0IC0gcmVsYXRpdmVPZmZzZXQubGVmdCArIHJlbGF0aXZlT2Zmc2V0Lm1hcmdpbkxlZnQsXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICB9O1xuXG4gIHJldHVybiBnZXRDbGllbnRSZWN0KG9mZnNldCk7XG59XG4iLCJpbXBvcnQgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5IGZyb20gJy4vZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5JztcbmltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gJy4vZ2V0UGFyZW50Tm9kZSc7XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIGdpdmVuIGVsZW1lbnQgaXMgZml4ZWQgb3IgaXMgaW5zaWRlIGEgZml4ZWQgcGFyZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gY3VzdG9tQ29udGFpbmVyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gYW5zd2VyIHRvIFwiaXNGaXhlZD9cIlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0ZpeGVkKGVsZW1lbnQpIHtcbiAgY29uc3Qgbm9kZU5hbWUgPSBlbGVtZW50Lm5vZGVOYW1lO1xuICBpZiAobm9kZU5hbWUgPT09ICdCT0RZJyB8fCBub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZWxlbWVudCwgJ3Bvc2l0aW9uJykgPT09ICdmaXhlZCcpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjb25zdCBwYXJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShlbGVtZW50KTtcbiAgaWYgKCFwYXJlbnROb2RlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBpc0ZpeGVkKHBhcmVudE5vZGUpO1xufVxuIiwiaW1wb3J0IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSBmcm9tICcuL2dldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSc7XG5pbXBvcnQgaXNJRSBmcm9tICcuL2lzSUUnO1xuLyoqXG4gKiBGaW5kcyB0aGUgZmlyc3QgcGFyZW50IG9mIGFuIGVsZW1lbnQgdGhhdCBoYXMgYSB0cmFuc2Zvcm1lZCBwcm9wZXJ0eSBkZWZpbmVkXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBmaXJzdCB0cmFuc2Zvcm1lZCBwYXJlbnQgb3IgZG9jdW1lbnRFbGVtZW50XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gIC8vIFRoaXMgY2hlY2sgaXMgbmVlZGVkIHRvIGF2b2lkIGVycm9ycyBpbiBjYXNlIG9uZSBvZiB0aGUgZWxlbWVudHMgaXNuJ3QgZGVmaW5lZCBmb3IgYW55IHJlYXNvblxuICAgaWYgKCFlbGVtZW50IHx8ICFlbGVtZW50LnBhcmVudEVsZW1lbnQgfHwgaXNJRSgpKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgfVxuICBsZXQgZWwgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gIHdoaWxlIChlbCAmJiBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZWwsICd0cmFuc2Zvcm0nKSA9PT0gJ25vbmUnKSB7XG4gICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xuICB9XG4gIHJldHVybiBlbCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbn1cbiIsImltcG9ydCBnZXRTY3JvbGxQYXJlbnQgZnJvbSAnLi9nZXRTY3JvbGxQYXJlbnQnO1xuaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSAnLi9nZXRQYXJlbnROb2RlJztcbmltcG9ydCBnZXRSZWZlcmVuY2VOb2RlIGZyb20gJy4vZ2V0UmVmZXJlbmNlTm9kZSc7XG5pbXBvcnQgZmluZENvbW1vbk9mZnNldFBhcmVudCBmcm9tICcuL2ZpbmRDb21tb25PZmZzZXRQYXJlbnQnO1xuaW1wb3J0IGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZSBmcm9tICcuL2dldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZSc7XG5pbXBvcnQgZ2V0Vmlld3BvcnRPZmZzZXRSZWN0UmVsYXRpdmVUb0FydGJpdHJhcnlOb2RlIGZyb20gJy4vZ2V0Vmlld3BvcnRPZmZzZXRSZWN0UmVsYXRpdmVUb0FydGJpdHJhcnlOb2RlJztcbmltcG9ydCBnZXRXaW5kb3dTaXplcyBmcm9tICcuL2dldFdpbmRvd1NpemVzJztcbmltcG9ydCBpc0ZpeGVkIGZyb20gJy4vaXNGaXhlZCc7XG5pbXBvcnQgZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudCBmcm9tICcuL2dldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQnO1xuXG4vKipcbiAqIENvbXB1dGVkIHRoZSBib3VuZGFyaWVzIGxpbWl0cyBhbmQgcmV0dXJuIHRoZW1cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHBlclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcmVmZXJlbmNlXG4gKiBAcGFyYW0ge251bWJlcn0gcGFkZGluZ1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gYm91bmRhcmllc0VsZW1lbnQgLSBFbGVtZW50IHVzZWQgdG8gZGVmaW5lIHRoZSBib3VuZGFyaWVzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGZpeGVkUG9zaXRpb24gLSBJcyBpbiBmaXhlZCBwb3NpdGlvbiBtb2RlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBDb29yZGluYXRlcyBvZiB0aGUgYm91bmRhcmllc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRCb3VuZGFyaWVzKFxuICBwb3BwZXIsXG4gIHJlZmVyZW5jZSxcbiAgcGFkZGluZyxcbiAgYm91bmRhcmllc0VsZW1lbnQsXG4gIGZpeGVkUG9zaXRpb24gPSBmYWxzZVxuKSB7XG4gIC8vIE5PVEU6IDEgRE9NIGFjY2VzcyBoZXJlXG5cbiAgbGV0IGJvdW5kYXJpZXMgPSB7IHRvcDogMCwgbGVmdDogMCB9O1xuICBjb25zdCBvZmZzZXRQYXJlbnQgPSBmaXhlZFBvc2l0aW9uID8gZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudChwb3BwZXIpIDogZmluZENvbW1vbk9mZnNldFBhcmVudChwb3BwZXIsIGdldFJlZmVyZW5jZU5vZGUocmVmZXJlbmNlKSk7XG5cbiAgLy8gSGFuZGxlIHZpZXdwb3J0IGNhc2VcbiAgaWYgKGJvdW5kYXJpZXNFbGVtZW50ID09PSAndmlld3BvcnQnICkge1xuICAgIGJvdW5kYXJpZXMgPSBnZXRWaWV3cG9ydE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJ0Yml0cmFyeU5vZGUob2Zmc2V0UGFyZW50LCBmaXhlZFBvc2l0aW9uKTtcbiAgfVxuXG4gIGVsc2Uge1xuICAgIC8vIEhhbmRsZSBvdGhlciBjYXNlcyBiYXNlZCBvbiBET00gZWxlbWVudCB1c2VkIGFzIGJvdW5kYXJpZXNcbiAgICBsZXQgYm91bmRhcmllc05vZGU7XG4gICAgaWYgKGJvdW5kYXJpZXNFbGVtZW50ID09PSAnc2Nyb2xsUGFyZW50Jykge1xuICAgICAgYm91bmRhcmllc05vZGUgPSBnZXRTY3JvbGxQYXJlbnQoZ2V0UGFyZW50Tm9kZShyZWZlcmVuY2UpKTtcbiAgICAgIGlmIChib3VuZGFyaWVzTm9kZS5ub2RlTmFtZSA9PT0gJ0JPRFknKSB7XG4gICAgICAgIGJvdW5kYXJpZXNOb2RlID0gcG9wcGVyLm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYm91bmRhcmllc0VsZW1lbnQgPT09ICd3aW5kb3cnKSB7XG4gICAgICBib3VuZGFyaWVzTm9kZSA9IHBvcHBlci5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgYm91bmRhcmllc05vZGUgPSBib3VuZGFyaWVzRWxlbWVudDtcbiAgICB9XG5cbiAgICBjb25zdCBvZmZzZXRzID0gZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlKFxuICAgICAgYm91bmRhcmllc05vZGUsXG4gICAgICBvZmZzZXRQYXJlbnQsXG4gICAgICBmaXhlZFBvc2l0aW9uXG4gICAgKTtcblxuICAgIC8vIEluIGNhc2Ugb2YgSFRNTCwgd2UgbmVlZCBhIGRpZmZlcmVudCBjb21wdXRhdGlvblxuICAgIGlmIChib3VuZGFyaWVzTm9kZS5ub2RlTmFtZSA9PT0gJ0hUTUwnICYmICFpc0ZpeGVkKG9mZnNldFBhcmVudCkpIHtcbiAgICAgIGNvbnN0IHsgaGVpZ2h0LCB3aWR0aCB9ID0gZ2V0V2luZG93U2l6ZXMocG9wcGVyLm93bmVyRG9jdW1lbnQpO1xuICAgICAgYm91bmRhcmllcy50b3AgKz0gb2Zmc2V0cy50b3AgLSBvZmZzZXRzLm1hcmdpblRvcDtcbiAgICAgIGJvdW5kYXJpZXMuYm90dG9tID0gaGVpZ2h0ICsgb2Zmc2V0cy50b3A7XG4gICAgICBib3VuZGFyaWVzLmxlZnQgKz0gb2Zmc2V0cy5sZWZ0IC0gb2Zmc2V0cy5tYXJnaW5MZWZ0O1xuICAgICAgYm91bmRhcmllcy5yaWdodCA9IHdpZHRoICsgb2Zmc2V0cy5sZWZ0O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmb3IgYWxsIHRoZSBvdGhlciBET00gZWxlbWVudHMsIHRoaXMgb25lIGlzIGdvb2RcbiAgICAgIGJvdW5kYXJpZXMgPSBvZmZzZXRzO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCBwYWRkaW5nc1xuICBwYWRkaW5nID0gcGFkZGluZyB8fCAwO1xuICBjb25zdCBpc1BhZGRpbmdOdW1iZXIgPSB0eXBlb2YgcGFkZGluZyA9PT0gJ251bWJlcic7XG4gIGJvdW5kYXJpZXMubGVmdCArPSBpc1BhZGRpbmdOdW1iZXIgPyBwYWRkaW5nIDogcGFkZGluZy5sZWZ0IHx8IDA7IFxuICBib3VuZGFyaWVzLnRvcCArPSBpc1BhZGRpbmdOdW1iZXIgPyBwYWRkaW5nIDogcGFkZGluZy50b3AgfHwgMDsgXG4gIGJvdW5kYXJpZXMucmlnaHQgLT0gaXNQYWRkaW5nTnVtYmVyID8gcGFkZGluZyA6IHBhZGRpbmcucmlnaHQgfHwgMDsgXG4gIGJvdW5kYXJpZXMuYm90dG9tIC09IGlzUGFkZGluZ051bWJlciA/IHBhZGRpbmcgOiBwYWRkaW5nLmJvdHRvbSB8fCAwOyBcblxuICByZXR1cm4gYm91bmRhcmllcztcbn1cbiIsImltcG9ydCBnZXRCb3VuZGFyaWVzIGZyb20gJy4uL3V0aWxzL2dldEJvdW5kYXJpZXMnO1xuXG5mdW5jdGlvbiBnZXRBcmVhKHsgd2lkdGgsIGhlaWdodCB9KSB7XG4gIHJldHVybiB3aWR0aCAqIGhlaWdodDtcbn1cblxuLyoqXG4gKiBVdGlsaXR5IHVzZWQgdG8gdHJhbnNmb3JtIHRoZSBgYXV0b2AgcGxhY2VtZW50IHRvIHRoZSBwbGFjZW1lbnQgd2l0aCBtb3JlXG4gKiBhdmFpbGFibGUgc3BhY2UuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlQXV0b1BsYWNlbWVudChcbiAgcGxhY2VtZW50LFxuICByZWZSZWN0LFxuICBwb3BwZXIsXG4gIHJlZmVyZW5jZSxcbiAgYm91bmRhcmllc0VsZW1lbnQsXG4gIHBhZGRpbmcgPSAwXG4pIHtcbiAgaWYgKHBsYWNlbWVudC5pbmRleE9mKCdhdXRvJykgPT09IC0xKSB7XG4gICAgcmV0dXJuIHBsYWNlbWVudDtcbiAgfVxuXG4gIGNvbnN0IGJvdW5kYXJpZXMgPSBnZXRCb3VuZGFyaWVzKFxuICAgIHBvcHBlcixcbiAgICByZWZlcmVuY2UsXG4gICAgcGFkZGluZyxcbiAgICBib3VuZGFyaWVzRWxlbWVudFxuICApO1xuXG4gIGNvbnN0IHJlY3RzID0ge1xuICAgIHRvcDoge1xuICAgICAgd2lkdGg6IGJvdW5kYXJpZXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHJlZlJlY3QudG9wIC0gYm91bmRhcmllcy50b3AsXG4gICAgfSxcbiAgICByaWdodDoge1xuICAgICAgd2lkdGg6IGJvdW5kYXJpZXMucmlnaHQgLSByZWZSZWN0LnJpZ2h0LFxuICAgICAgaGVpZ2h0OiBib3VuZGFyaWVzLmhlaWdodCxcbiAgICB9LFxuICAgIGJvdHRvbToge1xuICAgICAgd2lkdGg6IGJvdW5kYXJpZXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IGJvdW5kYXJpZXMuYm90dG9tIC0gcmVmUmVjdC5ib3R0b20sXG4gICAgfSxcbiAgICBsZWZ0OiB7XG4gICAgICB3aWR0aDogcmVmUmVjdC5sZWZ0IC0gYm91bmRhcmllcy5sZWZ0LFxuICAgICAgaGVpZ2h0OiBib3VuZGFyaWVzLmhlaWdodCxcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IHNvcnRlZEFyZWFzID0gT2JqZWN0LmtleXMocmVjdHMpXG4gICAgLm1hcChrZXkgPT4gKHtcbiAgICAgIGtleSxcbiAgICAgIC4uLnJlY3RzW2tleV0sXG4gICAgICBhcmVhOiBnZXRBcmVhKHJlY3RzW2tleV0pLFxuICAgIH0pKVxuICAgIC5zb3J0KChhLCBiKSA9PiBiLmFyZWEgLSBhLmFyZWEpO1xuXG4gIGNvbnN0IGZpbHRlcmVkQXJlYXMgPSBzb3J0ZWRBcmVhcy5maWx0ZXIoXG4gICAgKHsgd2lkdGgsIGhlaWdodCB9KSA9PlxuICAgICAgd2lkdGggPj0gcG9wcGVyLmNsaWVudFdpZHRoICYmIGhlaWdodCA+PSBwb3BwZXIuY2xpZW50SGVpZ2h0XG4gICk7XG5cbiAgY29uc3QgY29tcHV0ZWRQbGFjZW1lbnQgPSBmaWx0ZXJlZEFyZWFzLmxlbmd0aCA+IDBcbiAgICA/IGZpbHRlcmVkQXJlYXNbMF0ua2V5XG4gICAgOiBzb3J0ZWRBcmVhc1swXS5rZXk7XG5cbiAgY29uc3QgdmFyaWF0aW9uID0gcGxhY2VtZW50LnNwbGl0KCctJylbMV07XG5cbiAgcmV0dXJuIGNvbXB1dGVkUGxhY2VtZW50ICsgKHZhcmlhdGlvbiA/IGAtJHt2YXJpYXRpb259YCA6ICcnKTtcbn1cbiIsImltcG9ydCBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50IGZyb20gJy4vZmluZENvbW1vbk9mZnNldFBhcmVudCc7XG5pbXBvcnQgZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlIGZyb20gJy4vZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlJztcbmltcG9ydCBnZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50IGZyb20gJy4vZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudCc7XG5pbXBvcnQgZ2V0UmVmZXJlbmNlTm9kZSBmcm9tICcuL2dldFJlZmVyZW5jZU5vZGUnO1xuXG4vKipcbiAqIEdldCBvZmZzZXRzIHRvIHRoZSByZWZlcmVuY2UgZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHBvcHBlciAtIHRoZSBwb3BwZXIgZWxlbWVudFxuICogQHBhcmFtIHtFbGVtZW50fSByZWZlcmVuY2UgLSB0aGUgcmVmZXJlbmNlIGVsZW1lbnQgKHRoZSBwb3BwZXIgd2lsbCBiZSByZWxhdGl2ZSB0byB0aGlzKVxuICogQHBhcmFtIHtFbGVtZW50fSBmaXhlZFBvc2l0aW9uIC0gaXMgaW4gZml4ZWQgcG9zaXRpb24gbW9kZVxuICogQHJldHVybnMge09iamVjdH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9mZnNldHMgd2hpY2ggd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UmVmZXJlbmNlT2Zmc2V0cyhzdGF0ZSwgcG9wcGVyLCByZWZlcmVuY2UsIGZpeGVkUG9zaXRpb24gPSBudWxsKSB7XG4gIGNvbnN0IGNvbW1vbk9mZnNldFBhcmVudCA9IGZpeGVkUG9zaXRpb24gPyBnZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50KHBvcHBlcikgOiBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KHBvcHBlciwgZ2V0UmVmZXJlbmNlTm9kZShyZWZlcmVuY2UpKTtcbiAgcmV0dXJuIGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZShyZWZlcmVuY2UsIGNvbW1vbk9mZnNldFBhcmVudCwgZml4ZWRQb3NpdGlvbik7XG59XG4iLCIvKipcbiAqIEdldCB0aGUgb3V0ZXIgc2l6ZXMgb2YgdGhlIGdpdmVuIGVsZW1lbnQgKG9mZnNldCBzaXplICsgbWFyZ2lucylcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge09iamVjdH0gb2JqZWN0IGNvbnRhaW5pbmcgd2lkdGggYW5kIGhlaWdodCBwcm9wZXJ0aWVzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE91dGVyU2l6ZXMoZWxlbWVudCkge1xuICBjb25zdCB3aW5kb3cgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gIGNvbnN0IHN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICBjb25zdCB4ID0gcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luVG9wIHx8IDApICsgcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luQm90dG9tIHx8IDApO1xuICBjb25zdCB5ID0gcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luTGVmdCB8fCAwKSArIHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpblJpZ2h0IHx8IDApO1xuICBjb25zdCByZXN1bHQgPSB7XG4gICAgd2lkdGg6IGVsZW1lbnQub2Zmc2V0V2lkdGggKyB5LFxuICAgIGhlaWdodDogZWxlbWVudC5vZmZzZXRIZWlnaHQgKyB4LFxuICB9O1xuICByZXR1cm4gcmVzdWx0O1xufVxuIiwiLyoqXG4gKiBHZXQgdGhlIG9wcG9zaXRlIHBsYWNlbWVudCBvZiB0aGUgZ2l2ZW4gb25lXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge1N0cmluZ30gcGxhY2VtZW50XG4gKiBAcmV0dXJucyB7U3RyaW5nfSBmbGlwcGVkIHBsYWNlbWVudFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgY29uc3QgaGFzaCA9IHsgbGVmdDogJ3JpZ2h0JywgcmlnaHQ6ICdsZWZ0JywgYm90dG9tOiAndG9wJywgdG9wOiAnYm90dG9tJyB9O1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL2xlZnR8cmlnaHR8Ym90dG9tfHRvcC9nLCBtYXRjaGVkID0+IGhhc2hbbWF0Y2hlZF0pO1xufVxuIiwiaW1wb3J0IGdldE91dGVyU2l6ZXMgZnJvbSAnLi9nZXRPdXRlclNpemVzJztcbmltcG9ydCBnZXRPcHBvc2l0ZVBsYWNlbWVudCBmcm9tICcuL2dldE9wcG9zaXRlUGxhY2VtZW50JztcblxuLyoqXG4gKiBHZXQgb2Zmc2V0cyB0byB0aGUgcG9wcGVyXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge09iamVjdH0gcG9zaXRpb24gLSBDU1MgcG9zaXRpb24gdGhlIFBvcHBlciB3aWxsIGdldCBhcHBsaWVkXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwb3BwZXIgLSB0aGUgcG9wcGVyIGVsZW1lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWZlcmVuY2VPZmZzZXRzIC0gdGhlIHJlZmVyZW5jZSBvZmZzZXRzICh0aGUgcG9wcGVyIHdpbGwgYmUgcmVsYXRpdmUgdG8gdGhpcylcbiAqIEBwYXJhbSB7U3RyaW5nfSBwbGFjZW1lbnQgLSBvbmUgb2YgdGhlIHZhbGlkIHBsYWNlbWVudCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBwb3BwZXJPZmZzZXRzIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9mZnNldHMgd2hpY2ggd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UG9wcGVyT2Zmc2V0cyhwb3BwZXIsIHJlZmVyZW5jZU9mZnNldHMsIHBsYWNlbWVudCkge1xuICBwbGFjZW1lbnQgPSBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcblxuICAvLyBHZXQgcG9wcGVyIG5vZGUgc2l6ZXNcbiAgY29uc3QgcG9wcGVyUmVjdCA9IGdldE91dGVyU2l6ZXMocG9wcGVyKTtcblxuICAvLyBBZGQgcG9zaXRpb24sIHdpZHRoIGFuZCBoZWlnaHQgdG8gb3VyIG9mZnNldHMgb2JqZWN0XG4gIGNvbnN0IHBvcHBlck9mZnNldHMgPSB7XG4gICAgd2lkdGg6IHBvcHBlclJlY3Qud2lkdGgsXG4gICAgaGVpZ2h0OiBwb3BwZXJSZWN0LmhlaWdodCxcbiAgfTtcblxuICAvLyBkZXBlbmRpbmcgYnkgdGhlIHBvcHBlciBwbGFjZW1lbnQgd2UgaGF2ZSB0byBjb21wdXRlIGl0cyBvZmZzZXRzIHNsaWdodGx5IGRpZmZlcmVudGx5XG4gIGNvbnN0IGlzSG9yaXogPSBbJ3JpZ2h0JywgJ2xlZnQnXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xO1xuICBjb25zdCBtYWluU2lkZSA9IGlzSG9yaXogPyAndG9wJyA6ICdsZWZ0JztcbiAgY29uc3Qgc2Vjb25kYXJ5U2lkZSA9IGlzSG9yaXogPyAnbGVmdCcgOiAndG9wJztcbiAgY29uc3QgbWVhc3VyZW1lbnQgPSBpc0hvcml6ID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICBjb25zdCBzZWNvbmRhcnlNZWFzdXJlbWVudCA9ICFpc0hvcml6ID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gIHBvcHBlck9mZnNldHNbbWFpblNpZGVdID1cbiAgICByZWZlcmVuY2VPZmZzZXRzW21haW5TaWRlXSArXG4gICAgcmVmZXJlbmNlT2Zmc2V0c1ttZWFzdXJlbWVudF0gLyAyIC1cbiAgICBwb3BwZXJSZWN0W21lYXN1cmVtZW50XSAvIDI7XG4gIGlmIChwbGFjZW1lbnQgPT09IHNlY29uZGFyeVNpZGUpIHtcbiAgICBwb3BwZXJPZmZzZXRzW3NlY29uZGFyeVNpZGVdID1cbiAgICAgIHJlZmVyZW5jZU9mZnNldHNbc2Vjb25kYXJ5U2lkZV0gLSBwb3BwZXJSZWN0W3NlY29uZGFyeU1lYXN1cmVtZW50XTtcbiAgfSBlbHNlIHtcbiAgICBwb3BwZXJPZmZzZXRzW3NlY29uZGFyeVNpZGVdID1cbiAgICAgIHJlZmVyZW5jZU9mZnNldHNbZ2V0T3Bwb3NpdGVQbGFjZW1lbnQoc2Vjb25kYXJ5U2lkZSldO1xuICB9XG5cbiAgcmV0dXJuIHBvcHBlck9mZnNldHM7XG59XG4iLCIvKipcbiAqIE1pbWljcyB0aGUgYGZpbmRgIG1ldGhvZCBvZiBBcnJheVxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtBcnJheX0gYXJyXG4gKiBAYXJndW1lbnQgcHJvcFxuICogQGFyZ3VtZW50IHZhbHVlXG4gKiBAcmV0dXJucyBpbmRleCBvciAtMVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaW5kKGFyciwgY2hlY2spIHtcbiAgLy8gdXNlIG5hdGl2ZSBmaW5kIGlmIHN1cHBvcnRlZFxuICBpZiAoQXJyYXkucHJvdG90eXBlLmZpbmQpIHtcbiAgICByZXR1cm4gYXJyLmZpbmQoY2hlY2spO1xuICB9XG5cbiAgLy8gdXNlIGBmaWx0ZXJgIHRvIG9idGFpbiB0aGUgc2FtZSBiZWhhdmlvciBvZiBgZmluZGBcbiAgcmV0dXJuIGFyci5maWx0ZXIoY2hlY2spWzBdO1xufVxuIiwiaW1wb3J0IGZpbmQgZnJvbSAnLi9maW5kJztcblxuLyoqXG4gKiBSZXR1cm4gdGhlIGluZGV4IG9mIHRoZSBtYXRjaGluZyBvYmplY3RcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7QXJyYXl9IGFyclxuICogQGFyZ3VtZW50IHByb3BcbiAqIEBhcmd1bWVudCB2YWx1ZVxuICogQHJldHVybnMgaW5kZXggb3IgLTFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmluZEluZGV4KGFyciwgcHJvcCwgdmFsdWUpIHtcbiAgLy8gdXNlIG5hdGl2ZSBmaW5kSW5kZXggaWYgc3VwcG9ydGVkXG4gIGlmIChBcnJheS5wcm90b3R5cGUuZmluZEluZGV4KSB7XG4gICAgcmV0dXJuIGFyci5maW5kSW5kZXgoY3VyID0+IGN1cltwcm9wXSA9PT0gdmFsdWUpO1xuICB9XG5cbiAgLy8gdXNlIGBmaW5kYCArIGBpbmRleE9mYCBpZiBgZmluZEluZGV4YCBpc24ndCBzdXBwb3J0ZWRcbiAgY29uc3QgbWF0Y2ggPSBmaW5kKGFyciwgb2JqID0+IG9ialtwcm9wXSA9PT0gdmFsdWUpO1xuICByZXR1cm4gYXJyLmluZGV4T2YobWF0Y2gpO1xufVxuIiwiaW1wb3J0IGlzRnVuY3Rpb24gZnJvbSAnLi9pc0Z1bmN0aW9uJztcbmltcG9ydCBmaW5kSW5kZXggZnJvbSAnLi9maW5kSW5kZXgnO1xuaW1wb3J0IGdldENsaWVudFJlY3QgZnJvbSAnLi4vdXRpbHMvZ2V0Q2xpZW50UmVjdCc7XG5cbi8qKlxuICogTG9vcCB0cm91Z2ggdGhlIGxpc3Qgb2YgbW9kaWZpZXJzIGFuZCBydW4gdGhlbSBpbiBvcmRlcixcbiAqIGVhY2ggb2YgdGhlbSB3aWxsIHRoZW4gZWRpdCB0aGUgZGF0YSBvYmplY3QuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge2RhdGFPYmplY3R9IGRhdGFcbiAqIEBwYXJhbSB7QXJyYXl9IG1vZGlmaWVyc1xuICogQHBhcmFtIHtTdHJpbmd9IGVuZHMgLSBPcHRpb25hbCBtb2RpZmllciBuYW1lIHVzZWQgYXMgc3RvcHBlclxuICogQHJldHVybnMge2RhdGFPYmplY3R9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJ1bk1vZGlmaWVycyhtb2RpZmllcnMsIGRhdGEsIGVuZHMpIHtcbiAgY29uc3QgbW9kaWZpZXJzVG9SdW4gPSBlbmRzID09PSB1bmRlZmluZWRcbiAgICA/IG1vZGlmaWVyc1xuICAgIDogbW9kaWZpZXJzLnNsaWNlKDAsIGZpbmRJbmRleChtb2RpZmllcnMsICduYW1lJywgZW5kcykpO1xuXG4gIG1vZGlmaWVyc1RvUnVuLmZvckVhY2gobW9kaWZpZXIgPT4ge1xuICAgIGlmIChtb2RpZmllclsnZnVuY3Rpb24nXSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuICAgICAgY29uc29sZS53YXJuKCdgbW9kaWZpZXIuZnVuY3Rpb25gIGlzIGRlcHJlY2F0ZWQsIHVzZSBgbW9kaWZpZXIuZm5gIScpO1xuICAgIH1cbiAgICBjb25zdCBmbiA9IG1vZGlmaWVyWydmdW5jdGlvbiddIHx8IG1vZGlmaWVyLmZuOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuICAgIGlmIChtb2RpZmllci5lbmFibGVkICYmIGlzRnVuY3Rpb24oZm4pKSB7XG4gICAgICAvLyBBZGQgcHJvcGVydGllcyB0byBvZmZzZXRzIHRvIG1ha2UgdGhlbSBhIGNvbXBsZXRlIGNsaWVudFJlY3Qgb2JqZWN0XG4gICAgICAvLyB3ZSBkbyB0aGlzIGJlZm9yZSBlYWNoIG1vZGlmaWVyIHRvIG1ha2Ugc3VyZSB0aGUgcHJldmlvdXMgb25lIGRvZXNuJ3RcbiAgICAgIC8vIG1lc3Mgd2l0aCB0aGVzZSB2YWx1ZXNcbiAgICAgIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSBnZXRDbGllbnRSZWN0KGRhdGEub2Zmc2V0cy5wb3BwZXIpO1xuICAgICAgZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSA9IGdldENsaWVudFJlY3QoZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSk7XG5cbiAgICAgIGRhdGEgPSBmbihkYXRhLCBtb2RpZmllcik7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn1cbiIsImltcG9ydCBjb21wdXRlQXV0b1BsYWNlbWVudCBmcm9tICcuLi91dGlscy9jb21wdXRlQXV0b1BsYWNlbWVudCc7XG5pbXBvcnQgZ2V0UmVmZXJlbmNlT2Zmc2V0cyBmcm9tICcuLi91dGlscy9nZXRSZWZlcmVuY2VPZmZzZXRzJztcbmltcG9ydCBnZXRQb3BwZXJPZmZzZXRzIGZyb20gJy4uL3V0aWxzL2dldFBvcHBlck9mZnNldHMnO1xuaW1wb3J0IHJ1bk1vZGlmaWVycyBmcm9tICcuLi91dGlscy9ydW5Nb2RpZmllcnMnO1xuXG4vKipcbiAqIFVwZGF0ZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBwb3BwZXIsIGNvbXB1dGluZyB0aGUgbmV3IG9mZnNldHMgYW5kIGFwcGx5aW5nXG4gKiB0aGUgbmV3IHN0eWxlLjxiciAvPlxuICogUHJlZmVyIGBzY2hlZHVsZVVwZGF0ZWAgb3ZlciBgdXBkYXRlYCBiZWNhdXNlIG9mIHBlcmZvcm1hbmNlIHJlYXNvbnMuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgLy8gaWYgcG9wcGVyIGlzIGRlc3Ryb3llZCwgZG9uJ3QgcGVyZm9ybSBhbnkgZnVydGhlciB1cGRhdGVcbiAgaWYgKHRoaXMuc3RhdGUuaXNEZXN0cm95ZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgZGF0YSA9IHtcbiAgICBpbnN0YW5jZTogdGhpcyxcbiAgICBzdHlsZXM6IHt9LFxuICAgIGFycm93U3R5bGVzOiB7fSxcbiAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICBmbGlwcGVkOiBmYWxzZSxcbiAgICBvZmZzZXRzOiB7fSxcbiAgfTtcblxuICAvLyBjb21wdXRlIHJlZmVyZW5jZSBlbGVtZW50IG9mZnNldHNcbiAgZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSA9IGdldFJlZmVyZW5jZU9mZnNldHMoXG4gICAgdGhpcy5zdGF0ZSxcbiAgICB0aGlzLnBvcHBlcixcbiAgICB0aGlzLnJlZmVyZW5jZSxcbiAgICB0aGlzLm9wdGlvbnMucG9zaXRpb25GaXhlZFxuICApO1xuXG4gIC8vIGNvbXB1dGUgYXV0byBwbGFjZW1lbnQsIHN0b3JlIHBsYWNlbWVudCBpbnNpZGUgdGhlIGRhdGEgb2JqZWN0LFxuICAvLyBtb2RpZmllcnMgd2lsbCBiZSBhYmxlIHRvIGVkaXQgYHBsYWNlbWVudGAgaWYgbmVlZGVkXG4gIC8vIGFuZCByZWZlciB0byBvcmlnaW5hbFBsYWNlbWVudCB0byBrbm93IHRoZSBvcmlnaW5hbCB2YWx1ZVxuICBkYXRhLnBsYWNlbWVudCA9IGNvbXB1dGVBdXRvUGxhY2VtZW50KFxuICAgIHRoaXMub3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSxcbiAgICB0aGlzLnBvcHBlcixcbiAgICB0aGlzLnJlZmVyZW5jZSxcbiAgICB0aGlzLm9wdGlvbnMubW9kaWZpZXJzLmZsaXAuYm91bmRhcmllc0VsZW1lbnQsXG4gICAgdGhpcy5vcHRpb25zLm1vZGlmaWVycy5mbGlwLnBhZGRpbmdcbiAgKTtcblxuICAvLyBzdG9yZSB0aGUgY29tcHV0ZWQgcGxhY2VtZW50IGluc2lkZSBgb3JpZ2luYWxQbGFjZW1lbnRgXG4gIGRhdGEub3JpZ2luYWxQbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudDtcblxuICBkYXRhLnBvc2l0aW9uRml4ZWQgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25GaXhlZDtcblxuICAvLyBjb21wdXRlIHRoZSBwb3BwZXIgb2Zmc2V0c1xuICBkYXRhLm9mZnNldHMucG9wcGVyID0gZ2V0UG9wcGVyT2Zmc2V0cyhcbiAgICB0aGlzLnBvcHBlcixcbiAgICBkYXRhLm9mZnNldHMucmVmZXJlbmNlLFxuICAgIGRhdGEucGxhY2VtZW50XG4gICk7XG5cbiAgZGF0YS5vZmZzZXRzLnBvcHBlci5wb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbkZpeGVkXG4gICAgPyAnZml4ZWQnXG4gICAgOiAnYWJzb2x1dGUnO1xuXG4gIC8vIHJ1biB0aGUgbW9kaWZpZXJzXG4gIGRhdGEgPSBydW5Nb2RpZmllcnModGhpcy5tb2RpZmllcnMsIGRhdGEpO1xuXG4gIC8vIHRoZSBmaXJzdCBgdXBkYXRlYCB3aWxsIGNhbGwgYG9uQ3JlYXRlYCBjYWxsYmFja1xuICAvLyB0aGUgb3RoZXIgb25lcyB3aWxsIGNhbGwgYG9uVXBkYXRlYCBjYWxsYmFja1xuICBpZiAoIXRoaXMuc3RhdGUuaXNDcmVhdGVkKSB7XG4gICAgdGhpcy5zdGF0ZS5pc0NyZWF0ZWQgPSB0cnVlO1xuICAgIHRoaXMub3B0aW9ucy5vbkNyZWF0ZShkYXRhKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLm9wdGlvbnMub25VcGRhdGUoZGF0YSk7XG4gIH1cbn1cbiIsIi8qKlxuICogSGVscGVyIHVzZWQgdG8ga25vdyBpZiB0aGUgZ2l2ZW4gbW9kaWZpZXIgaXMgZW5hYmxlZC5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc01vZGlmaWVyRW5hYmxlZChtb2RpZmllcnMsIG1vZGlmaWVyTmFtZSkge1xuICByZXR1cm4gbW9kaWZpZXJzLnNvbWUoXG4gICAgKHsgbmFtZSwgZW5hYmxlZCB9KSA9PiBlbmFibGVkICYmIG5hbWUgPT09IG1vZGlmaWVyTmFtZVxuICApO1xufVxuIiwiLyoqXG4gKiBHZXQgdGhlIHByZWZpeGVkIHN1cHBvcnRlZCBwcm9wZXJ0eSBuYW1lXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge1N0cmluZ30gcHJvcGVydHkgKGNhbWVsQ2FzZSlcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHByZWZpeGVkIHByb3BlcnR5IChjYW1lbENhc2Ugb3IgUGFzY2FsQ2FzZSwgZGVwZW5kaW5nIG9uIHRoZSB2ZW5kb3IgcHJlZml4KVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUocHJvcGVydHkpIHtcbiAgY29uc3QgcHJlZml4ZXMgPSBbZmFsc2UsICdtcycsICdXZWJraXQnLCAnTW96JywgJ08nXTtcbiAgY29uc3QgdXBwZXJQcm9wID0gcHJvcGVydHkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wZXJ0eS5zbGljZSgxKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByZWZpeGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcHJlZml4ID0gcHJlZml4ZXNbaV07XG4gICAgY29uc3QgdG9DaGVjayA9IHByZWZpeCA/IGAke3ByZWZpeH0ke3VwcGVyUHJvcH1gIDogcHJvcGVydHk7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudC5ib2R5LnN0eWxlW3RvQ2hlY2tdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHRvQ2hlY2s7XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuIiwiaW1wb3J0IGlzTW9kaWZpZXJFbmFibGVkIGZyb20gJy4uL3V0aWxzL2lzTW9kaWZpZXJFbmFibGVkJztcbmltcG9ydCBnZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUgZnJvbSAnLi4vdXRpbHMvZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lJztcblxuLyoqXG4gKiBEZXN0cm95cyB0aGUgcG9wcGVyLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXN0cm95KCkge1xuICB0aGlzLnN0YXRlLmlzRGVzdHJveWVkID0gdHJ1ZTtcblxuICAvLyB0b3VjaCBET00gb25seSBpZiBgYXBwbHlTdHlsZWAgbW9kaWZpZXIgaXMgZW5hYmxlZFxuICBpZiAoaXNNb2RpZmllckVuYWJsZWQodGhpcy5tb2RpZmllcnMsICdhcHBseVN0eWxlJykpIHtcbiAgICB0aGlzLnBvcHBlci5yZW1vdmVBdHRyaWJ1dGUoJ3gtcGxhY2VtZW50Jyk7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGUucG9zaXRpb24gPSAnJztcbiAgICB0aGlzLnBvcHBlci5zdHlsZS50b3AgPSAnJztcbiAgICB0aGlzLnBvcHBlci5zdHlsZS5sZWZ0ID0gJyc7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGUucmlnaHQgPSAnJztcbiAgICB0aGlzLnBvcHBlci5zdHlsZS5ib3R0b20gPSAnJztcbiAgICB0aGlzLnBvcHBlci5zdHlsZS53aWxsQ2hhbmdlID0gJyc7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGVbZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lKCd0cmFuc2Zvcm0nKV0gPSAnJztcbiAgfVxuXG4gIHRoaXMuZGlzYWJsZUV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgLy8gcmVtb3ZlIHRoZSBwb3BwZXIgaWYgdXNlciBleHBsaWNpdGx5IGFza2VkIGZvciB0aGUgZGVsZXRpb24gb24gZGVzdHJveVxuICAvLyBkbyBub3QgdXNlIGByZW1vdmVgIGJlY2F1c2UgSUUxMSBkb2Vzbid0IHN1cHBvcnQgaXRcbiAgaWYgKHRoaXMub3B0aW9ucy5yZW1vdmVPbkRlc3Ryb3kpIHtcbiAgICB0aGlzLnBvcHBlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMucG9wcGVyKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cbiIsIi8qKlxuICogR2V0IHRoZSB3aW5kb3cgYXNzb2NpYXRlZCB3aXRoIHRoZSBlbGVtZW50XG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtXaW5kb3d9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdpbmRvdyhlbGVtZW50KSB7XG4gIGNvbnN0IG93bmVyRG9jdW1lbnQgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQ7XG4gIHJldHVybiBvd25lckRvY3VtZW50ID8gb3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyA6IHdpbmRvdztcbn1cbiIsImltcG9ydCBnZXRTY3JvbGxQYXJlbnQgZnJvbSAnLi9nZXRTY3JvbGxQYXJlbnQnO1xuaW1wb3J0IGdldFdpbmRvdyBmcm9tICcuL2dldFdpbmRvdyc7XG5cbmZ1bmN0aW9uIGF0dGFjaFRvU2Nyb2xsUGFyZW50cyhzY3JvbGxQYXJlbnQsIGV2ZW50LCBjYWxsYmFjaywgc2Nyb2xsUGFyZW50cykge1xuICBjb25zdCBpc0JvZHkgPSBzY3JvbGxQYXJlbnQubm9kZU5hbWUgPT09ICdCT0RZJztcbiAgY29uc3QgdGFyZ2V0ID0gaXNCb2R5ID8gc2Nyb2xsUGFyZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgOiBzY3JvbGxQYXJlbnQ7XG4gIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaywgeyBwYXNzaXZlOiB0cnVlIH0pO1xuXG4gIGlmICghaXNCb2R5KSB7XG4gICAgYXR0YWNoVG9TY3JvbGxQYXJlbnRzKFxuICAgICAgZ2V0U2Nyb2xsUGFyZW50KHRhcmdldC5wYXJlbnROb2RlKSxcbiAgICAgIGV2ZW50LFxuICAgICAgY2FsbGJhY2ssXG4gICAgICBzY3JvbGxQYXJlbnRzXG4gICAgKTtcbiAgfVxuICBzY3JvbGxQYXJlbnRzLnB1c2godGFyZ2V0KTtcbn1cblxuLyoqXG4gKiBTZXR1cCBuZWVkZWQgZXZlbnQgbGlzdGVuZXJzIHVzZWQgdG8gdXBkYXRlIHRoZSBwb3BwZXIgcG9zaXRpb25cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldHVwRXZlbnRMaXN0ZW5lcnMoXG4gIHJlZmVyZW5jZSxcbiAgb3B0aW9ucyxcbiAgc3RhdGUsXG4gIHVwZGF0ZUJvdW5kXG4pIHtcbiAgLy8gUmVzaXplIGV2ZW50IGxpc3RlbmVyIG9uIHdpbmRvd1xuICBzdGF0ZS51cGRhdGVCb3VuZCA9IHVwZGF0ZUJvdW5kO1xuICBnZXRXaW5kb3cocmVmZXJlbmNlKS5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzdGF0ZS51cGRhdGVCb3VuZCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuXG4gIC8vIFNjcm9sbCBldmVudCBsaXN0ZW5lciBvbiBzY3JvbGwgcGFyZW50c1xuICBjb25zdCBzY3JvbGxFbGVtZW50ID0gZ2V0U2Nyb2xsUGFyZW50KHJlZmVyZW5jZSk7XG4gIGF0dGFjaFRvU2Nyb2xsUGFyZW50cyhcbiAgICBzY3JvbGxFbGVtZW50LFxuICAgICdzY3JvbGwnLFxuICAgIHN0YXRlLnVwZGF0ZUJvdW5kLFxuICAgIHN0YXRlLnNjcm9sbFBhcmVudHNcbiAgKTtcbiAgc3RhdGUuc2Nyb2xsRWxlbWVudCA9IHNjcm9sbEVsZW1lbnQ7XG4gIHN0YXRlLmV2ZW50c0VuYWJsZWQgPSB0cnVlO1xuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiIsImltcG9ydCBzZXR1cEV2ZW50TGlzdGVuZXJzIGZyb20gJy4uL3V0aWxzL3NldHVwRXZlbnRMaXN0ZW5lcnMnO1xuXG4vKipcbiAqIEl0IHdpbGwgYWRkIHJlc2l6ZS9zY3JvbGwgZXZlbnRzIGFuZCBzdGFydCByZWNhbGN1bGF0aW5nXG4gKiBwb3NpdGlvbiBvZiB0aGUgcG9wcGVyIGVsZW1lbnQgd2hlbiB0aGV5IGFyZSB0cmlnZ2VyZWQuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVuYWJsZUV2ZW50TGlzdGVuZXJzKCkge1xuICBpZiAoIXRoaXMuc3RhdGUuZXZlbnRzRW5hYmxlZCkge1xuICAgIHRoaXMuc3RhdGUgPSBzZXR1cEV2ZW50TGlzdGVuZXJzKFxuICAgICAgdGhpcy5yZWZlcmVuY2UsXG4gICAgICB0aGlzLm9wdGlvbnMsXG4gICAgICB0aGlzLnN0YXRlLFxuICAgICAgdGhpcy5zY2hlZHVsZVVwZGF0ZVxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBnZXRXaW5kb3cgZnJvbSAnLi9nZXRXaW5kb3cnO1xuXG4vKipcbiAqIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMgdXNlZCB0byB1cGRhdGUgdGhlIHBvcHBlciBwb3NpdGlvblxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcnMocmVmZXJlbmNlLCBzdGF0ZSkge1xuICAvLyBSZW1vdmUgcmVzaXplIGV2ZW50IGxpc3RlbmVyIG9uIHdpbmRvd1xuICBnZXRXaW5kb3cocmVmZXJlbmNlKS5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzdGF0ZS51cGRhdGVCb3VuZCk7XG5cbiAgLy8gUmVtb3ZlIHNjcm9sbCBldmVudCBsaXN0ZW5lciBvbiBzY3JvbGwgcGFyZW50c1xuICBzdGF0ZS5zY3JvbGxQYXJlbnRzLmZvckVhY2godGFyZ2V0ID0+IHtcbiAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc3RhdGUudXBkYXRlQm91bmQpO1xuICB9KTtcblxuICAvLyBSZXNldCBzdGF0ZVxuICBzdGF0ZS51cGRhdGVCb3VuZCA9IG51bGw7XG4gIHN0YXRlLnNjcm9sbFBhcmVudHMgPSBbXTtcbiAgc3RhdGUuc2Nyb2xsRWxlbWVudCA9IG51bGw7XG4gIHN0YXRlLmV2ZW50c0VuYWJsZWQgPSBmYWxzZTtcbiAgcmV0dXJuIHN0YXRlO1xufVxuIiwiaW1wb3J0IHJlbW92ZUV2ZW50TGlzdGVuZXJzIGZyb20gJy4uL3V0aWxzL3JlbW92ZUV2ZW50TGlzdGVuZXJzJztcblxuLyoqXG4gKiBJdCB3aWxsIHJlbW92ZSByZXNpemUvc2Nyb2xsIGV2ZW50cyBhbmQgd29uJ3QgcmVjYWxjdWxhdGUgcG9wcGVyIHBvc2l0aW9uXG4gKiB3aGVuIHRoZXkgYXJlIHRyaWdnZXJlZC4gSXQgYWxzbyB3b24ndCB0cmlnZ2VyIGBvblVwZGF0ZWAgY2FsbGJhY2sgYW55bW9yZSxcbiAqIHVubGVzcyB5b3UgY2FsbCBgdXBkYXRlYCBtZXRob2QgbWFudWFsbHkuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc2FibGVFdmVudExpc3RlbmVycygpIHtcbiAgaWYgKHRoaXMuc3RhdGUuZXZlbnRzRW5hYmxlZCkge1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuc2NoZWR1bGVVcGRhdGUpO1xuICAgIHRoaXMuc3RhdGUgPSByZW1vdmVFdmVudExpc3RlbmVycyh0aGlzLnJlZmVyZW5jZSwgdGhpcy5zdGF0ZSk7XG4gIH1cbn1cbiIsIi8qKlxuICogVGVsbHMgaWYgYSBnaXZlbiBpbnB1dCBpcyBhIG51bWJlclxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHsqfSBpbnB1dCB0byBjaGVja1xuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNOdW1lcmljKG4pIHtcbiAgcmV0dXJuIG4gIT09ICcnICYmICFpc05hTihwYXJzZUZsb2F0KG4pKSAmJiBpc0Zpbml0ZShuKTtcbn1cbiIsImltcG9ydCBpc051bWVyaWMgZnJvbSAnLi9pc051bWVyaWMnO1xuXG4vKipcbiAqIFNldCB0aGUgc3R5bGUgdG8gdGhlIGdpdmVuIHBvcHBlclxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50IC0gRWxlbWVudCB0byBhcHBseSB0aGUgc3R5bGUgdG9cbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBzdHlsZXNcbiAqIE9iamVjdCB3aXRoIGEgbGlzdCBvZiBwcm9wZXJ0aWVzIGFuZCB2YWx1ZXMgd2hpY2ggd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBlbGVtZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFN0eWxlcyhlbGVtZW50LCBzdHlsZXMpIHtcbiAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKHByb3AgPT4ge1xuICAgIGxldCB1bml0ID0gJyc7XG4gICAgLy8gYWRkIHVuaXQgaWYgdGhlIHZhbHVlIGlzIG51bWVyaWMgYW5kIGlzIG9uZSBvZiB0aGUgZm9sbG93aW5nXG4gICAgaWYgKFxuICAgICAgWyd3aWR0aCcsICdoZWlnaHQnLCAndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J10uaW5kZXhPZihwcm9wKSAhPT1cbiAgICAgICAgLTEgJiZcbiAgICAgIGlzTnVtZXJpYyhzdHlsZXNbcHJvcF0pXG4gICAgKSB7XG4gICAgICB1bml0ID0gJ3B4JztcbiAgICB9XG4gICAgZWxlbWVudC5zdHlsZVtwcm9wXSA9IHN0eWxlc1twcm9wXSArIHVuaXQ7XG4gIH0pO1xufVxuIiwiLyoqXG4gKiBTZXQgdGhlIGF0dHJpYnV0ZXMgdG8gdGhlIGdpdmVuIHBvcHBlclxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50IC0gRWxlbWVudCB0byBhcHBseSB0aGUgYXR0cmlidXRlcyB0b1xuICogQGFyZ3VtZW50IHtPYmplY3R9IHN0eWxlc1xuICogT2JqZWN0IHdpdGggYSBsaXN0IG9mIHByb3BlcnRpZXMgYW5kIHZhbHVlcyB3aGljaCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhlbGVtZW50LCBhdHRyaWJ1dGVzKSB7XG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24ocHJvcCkge1xuICAgIGNvbnN0IHZhbHVlID0gYXR0cmlidXRlc1twcm9wXTtcbiAgICBpZiAodmFsdWUgIT09IGZhbHNlKSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShwcm9wLCBhdHRyaWJ1dGVzW3Byb3BdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUocHJvcCk7XG4gICAgfVxuICB9KTtcbn1cbiIsImltcG9ydCBzZXRTdHlsZXMgZnJvbSAnLi4vdXRpbHMvc2V0U3R5bGVzJztcbmltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gJy4uL3V0aWxzL3NldEF0dHJpYnV0ZXMnO1xuaW1wb3J0IGdldFJlZmVyZW5jZU9mZnNldHMgZnJvbSAnLi4vdXRpbHMvZ2V0UmVmZXJlbmNlT2Zmc2V0cyc7XG5pbXBvcnQgY29tcHV0ZUF1dG9QbGFjZW1lbnQgZnJvbSAnLi4vdXRpbHMvY29tcHV0ZUF1dG9QbGFjZW1lbnQnO1xuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEuc3R5bGVzIC0gTGlzdCBvZiBzdHlsZSBwcm9wZXJ0aWVzIC0gdmFsdWVzIHRvIGFwcGx5IHRvIHBvcHBlciBlbGVtZW50XG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YS5hdHRyaWJ1dGVzIC0gTGlzdCBvZiBhdHRyaWJ1dGUgcHJvcGVydGllcyAtIHZhbHVlcyB0byBhcHBseSB0byBwb3BwZXIgZWxlbWVudFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIHNhbWUgZGF0YSBvYmplY3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwbHlTdHlsZShkYXRhKSB7XG4gIC8vIGFueSBwcm9wZXJ0eSBwcmVzZW50IGluIGBkYXRhLnN0eWxlc2Agd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXIsXG4gIC8vIGluIHRoaXMgd2F5IHdlIGNhbiBtYWtlIHRoZSAzcmQgcGFydHkgbW9kaWZpZXJzIGFkZCBjdXN0b20gc3R5bGVzIHRvIGl0XG4gIC8vIEJlIGF3YXJlLCBtb2RpZmllcnMgY291bGQgb3ZlcnJpZGUgdGhlIHByb3BlcnRpZXMgZGVmaW5lZCBpbiB0aGUgcHJldmlvdXNcbiAgLy8gbGluZXMgb2YgdGhpcyBtb2RpZmllciFcbiAgc2V0U3R5bGVzKGRhdGEuaW5zdGFuY2UucG9wcGVyLCBkYXRhLnN0eWxlcyk7XG5cbiAgLy8gYW55IHByb3BlcnR5IHByZXNlbnQgaW4gYGRhdGEuYXR0cmlidXRlc2Agd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXIsXG4gIC8vIHRoZXkgd2lsbCBiZSBzZXQgYXMgSFRNTCBhdHRyaWJ1dGVzIG9mIHRoZSBlbGVtZW50XG4gIHNldEF0dHJpYnV0ZXMoZGF0YS5pbnN0YW5jZS5wb3BwZXIsIGRhdGEuYXR0cmlidXRlcyk7XG5cbiAgLy8gaWYgYXJyb3dFbGVtZW50IGlzIGRlZmluZWQgYW5kIGFycm93U3R5bGVzIGhhcyBzb21lIHByb3BlcnRpZXNcbiAgaWYgKGRhdGEuYXJyb3dFbGVtZW50ICYmIE9iamVjdC5rZXlzKGRhdGEuYXJyb3dTdHlsZXMpLmxlbmd0aCkge1xuICAgIHNldFN0eWxlcyhkYXRhLmFycm93RWxlbWVudCwgZGF0YS5hcnJvd1N0eWxlcyk7XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIHgtcGxhY2VtZW50IGF0dHJpYnV0ZSBiZWZvcmUgZXZlcnl0aGluZyBlbHNlIGJlY2F1c2UgaXQgY291bGQgYmUgdXNlZFxuICogdG8gYWRkIG1hcmdpbnMgdG8gdGhlIHBvcHBlciBtYXJnaW5zIG5lZWRzIHRvIGJlIGNhbGN1bGF0ZWQgdG8gZ2V0IHRoZVxuICogY29ycmVjdCBwb3BwZXIgb2Zmc2V0cy5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIubW9kaWZpZXJzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSByZWZlcmVuY2UgLSBUaGUgcmVmZXJlbmNlIGVsZW1lbnQgdXNlZCB0byBwb3NpdGlvbiB0aGUgcG9wcGVyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwb3BwZXIgLSBUaGUgSFRNTCBlbGVtZW50IHVzZWQgYXMgcG9wcGVyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFBvcHBlci5qcyBvcHRpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVN0eWxlT25Mb2FkKFxuICByZWZlcmVuY2UsXG4gIHBvcHBlcixcbiAgb3B0aW9ucyxcbiAgbW9kaWZpZXJPcHRpb25zLFxuICBzdGF0ZVxuKSB7XG4gIC8vIGNvbXB1dGUgcmVmZXJlbmNlIGVsZW1lbnQgb2Zmc2V0c1xuICBjb25zdCByZWZlcmVuY2VPZmZzZXRzID0gZ2V0UmVmZXJlbmNlT2Zmc2V0cyhzdGF0ZSwgcG9wcGVyLCByZWZlcmVuY2UsIG9wdGlvbnMucG9zaXRpb25GaXhlZCk7XG5cbiAgLy8gY29tcHV0ZSBhdXRvIHBsYWNlbWVudCwgc3RvcmUgcGxhY2VtZW50IGluc2lkZSB0aGUgZGF0YSBvYmplY3QsXG4gIC8vIG1vZGlmaWVycyB3aWxsIGJlIGFibGUgdG8gZWRpdCBgcGxhY2VtZW50YCBpZiBuZWVkZWRcbiAgLy8gYW5kIHJlZmVyIHRvIG9yaWdpbmFsUGxhY2VtZW50IHRvIGtub3cgdGhlIG9yaWdpbmFsIHZhbHVlXG4gIGNvbnN0IHBsYWNlbWVudCA9IGNvbXB1dGVBdXRvUGxhY2VtZW50KFxuICAgIG9wdGlvbnMucGxhY2VtZW50LFxuICAgIHJlZmVyZW5jZU9mZnNldHMsXG4gICAgcG9wcGVyLFxuICAgIHJlZmVyZW5jZSxcbiAgICBvcHRpb25zLm1vZGlmaWVycy5mbGlwLmJvdW5kYXJpZXNFbGVtZW50LFxuICAgIG9wdGlvbnMubW9kaWZpZXJzLmZsaXAucGFkZGluZ1xuICApO1xuXG4gIHBvcHBlci5zZXRBdHRyaWJ1dGUoJ3gtcGxhY2VtZW50JywgcGxhY2VtZW50KTtcblxuICAvLyBBcHBseSBgcG9zaXRpb25gIHRvIHBvcHBlciBiZWZvcmUgYW55dGhpbmcgZWxzZSBiZWNhdXNlXG4gIC8vIHdpdGhvdXQgdGhlIHBvc2l0aW9uIGFwcGxpZWQgd2UgY2FuJ3QgZ3VhcmFudGVlIGNvcnJlY3QgY29tcHV0YXRpb25zXG4gIHNldFN0eWxlcyhwb3BwZXIsIHsgcG9zaXRpb246IG9wdGlvbnMucG9zaXRpb25GaXhlZCA/ICdmaXhlZCcgOiAnYWJzb2x1dGUnIH0pO1xuXG4gIHJldHVybiBvcHRpb25zO1xufVxuIiwiLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAqIEBhcmd1bWVudCB7Qm9vbGVhbn0gc2hvdWxkUm91bmQgLSBJZiB0aGUgb2Zmc2V0cyBzaG91bGQgYmUgcm91bmRlZCBhdCBhbGxcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBwb3BwZXIncyBwb3NpdGlvbiBvZmZzZXRzIHJvdW5kZWRcbiAqXG4gKiBUaGUgdGFsZSBvZiBwaXhlbC1wZXJmZWN0IHBvc2l0aW9uaW5nLiBJdCdzIHN0aWxsIG5vdCAxMDAlIHBlcmZlY3QsIGJ1dCBhc1xuICogZ29vZCBhcyBpdCBjYW4gYmUgd2l0aGluIHJlYXNvbi5cbiAqIERpc2N1c3Npb24gaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL0ZlelZyYXN0YS9wb3BwZXIuanMvcHVsbC83MTVcbiAqXG4gKiBMb3cgRFBJIHNjcmVlbnMgY2F1c2UgYSBwb3BwZXIgdG8gYmUgYmx1cnJ5IGlmIG5vdCB1c2luZyBmdWxsIHBpeGVscyAoU2FmYXJpXG4gKiBhcyB3ZWxsIG9uIEhpZ2ggRFBJIHNjcmVlbnMpLlxuICpcbiAqIEZpcmVmb3ggcHJlZmVycyBubyByb3VuZGluZyBmb3IgcG9zaXRpb25pbmcgYW5kIGRvZXMgbm90IGhhdmUgYmx1cnJpbmVzcyBvblxuICogaGlnaCBEUEkgc2NyZWVucy5cbiAqXG4gKiBPbmx5IGhvcml6b250YWwgcGxhY2VtZW50IGFuZCBsZWZ0L3JpZ2h0IHZhbHVlcyBuZWVkIHRvIGJlIGNvbnNpZGVyZWQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFJvdW5kZWRPZmZzZXRzKGRhdGEsIHNob3VsZFJvdW5kKSB7XG4gIGNvbnN0IHsgcG9wcGVyLCByZWZlcmVuY2UgfSA9IGRhdGEub2Zmc2V0cztcbiAgY29uc3QgeyByb3VuZCwgZmxvb3IgfSA9IE1hdGg7XG4gIGNvbnN0IG5vUm91bmQgPSB2ID0+IHY7XG4gIFxuICBjb25zdCByZWZlcmVuY2VXaWR0aCA9IHJvdW5kKHJlZmVyZW5jZS53aWR0aCk7XG4gIGNvbnN0IHBvcHBlcldpZHRoID0gcm91bmQocG9wcGVyLndpZHRoKTtcbiAgXG4gIGNvbnN0IGlzVmVydGljYWwgPSBbJ2xlZnQnLCAncmlnaHQnXS5pbmRleE9mKGRhdGEucGxhY2VtZW50KSAhPT0gLTE7XG4gIGNvbnN0IGlzVmFyaWF0aW9uID0gZGF0YS5wbGFjZW1lbnQuaW5kZXhPZignLScpICE9PSAtMTtcbiAgY29uc3Qgc2FtZVdpZHRoUGFyaXR5ID0gcmVmZXJlbmNlV2lkdGggJSAyID09PSBwb3BwZXJXaWR0aCAlIDI7XG4gIGNvbnN0IGJvdGhPZGRXaWR0aCA9IHJlZmVyZW5jZVdpZHRoICUgMiA9PT0gMSAmJiBwb3BwZXJXaWR0aCAlIDIgPT09IDE7XG5cbiAgY29uc3QgaG9yaXpvbnRhbFRvSW50ZWdlciA9ICFzaG91bGRSb3VuZFxuICAgID8gbm9Sb3VuZFxuICAgIDogaXNWZXJ0aWNhbCB8fCBpc1ZhcmlhdGlvbiB8fCBzYW1lV2lkdGhQYXJpdHlcbiAgICA/IHJvdW5kXG4gICAgOiBmbG9vcjtcbiAgY29uc3QgdmVydGljYWxUb0ludGVnZXIgPSAhc2hvdWxkUm91bmQgPyBub1JvdW5kIDogcm91bmQ7XG5cbiAgcmV0dXJuIHtcbiAgICBsZWZ0OiBob3Jpem9udGFsVG9JbnRlZ2VyKFxuICAgICAgYm90aE9kZFdpZHRoICYmICFpc1ZhcmlhdGlvbiAmJiBzaG91bGRSb3VuZFxuICAgICAgICA/IHBvcHBlci5sZWZ0IC0gMVxuICAgICAgICA6IHBvcHBlci5sZWZ0XG4gICAgKSxcbiAgICB0b3A6IHZlcnRpY2FsVG9JbnRlZ2VyKHBvcHBlci50b3ApLFxuICAgIGJvdHRvbTogdmVydGljYWxUb0ludGVnZXIocG9wcGVyLmJvdHRvbSksXG4gICAgcmlnaHQ6IGhvcml6b250YWxUb0ludGVnZXIocG9wcGVyLnJpZ2h0KSxcbiAgfTtcbn1cbiIsImltcG9ydCBnZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUgZnJvbSAnLi4vdXRpbHMvZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lJztcbmltcG9ydCBmaW5kIGZyb20gJy4uL3V0aWxzL2ZpbmQnO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tICcuLi91dGlscy9nZXRPZmZzZXRQYXJlbnQnO1xuaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tICcuLi91dGlscy9nZXRCb3VuZGluZ0NsaWVudFJlY3QnO1xuaW1wb3J0IGdldFJvdW5kZWRPZmZzZXRzIGZyb20gJy4uL3V0aWxzL2dldFJvdW5kZWRPZmZzZXRzJztcbmltcG9ydCBpc0Jyb3dzZXIgZnJvbSAnLi4vdXRpbHMvaXNCcm93c2VyJztcblxuY29uc3QgaXNGaXJlZm94ID0gaXNCcm93c2VyICYmIC9GaXJlZm94L2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZVN0eWxlKGRhdGEsIG9wdGlvbnMpIHtcbiAgY29uc3QgeyB4LCB5IH0gPSBvcHRpb25zO1xuICBjb25zdCB7IHBvcHBlciB9ID0gZGF0YS5vZmZzZXRzO1xuXG4gIC8vIFJlbW92ZSB0aGlzIGxlZ2FjeSBzdXBwb3J0IGluIFBvcHBlci5qcyB2MlxuICBjb25zdCBsZWdhY3lHcHVBY2NlbGVyYXRpb25PcHRpb24gPSBmaW5kKFxuICAgIGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLFxuICAgIG1vZGlmaWVyID0+IG1vZGlmaWVyLm5hbWUgPT09ICdhcHBseVN0eWxlJ1xuICApLmdwdUFjY2VsZXJhdGlvbjtcbiAgaWYgKGxlZ2FjeUdwdUFjY2VsZXJhdGlvbk9wdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgJ1dBUk5JTkc6IGBncHVBY2NlbGVyYXRpb25gIG9wdGlvbiBtb3ZlZCB0byBgY29tcHV0ZVN0eWxlYCBtb2RpZmllciBhbmQgd2lsbCBub3QgYmUgc3VwcG9ydGVkIGluIGZ1dHVyZSB2ZXJzaW9ucyBvZiBQb3BwZXIuanMhJ1xuICAgICk7XG4gIH1cbiAgY29uc3QgZ3B1QWNjZWxlcmF0aW9uID1cbiAgICBsZWdhY3lHcHVBY2NlbGVyYXRpb25PcHRpb24gIT09IHVuZGVmaW5lZFxuICAgICAgPyBsZWdhY3lHcHVBY2NlbGVyYXRpb25PcHRpb25cbiAgICAgIDogb3B0aW9ucy5ncHVBY2NlbGVyYXRpb247XG5cbiAgY29uc3Qgb2Zmc2V0UGFyZW50ID0gZ2V0T2Zmc2V0UGFyZW50KGRhdGEuaW5zdGFuY2UucG9wcGVyKTtcbiAgY29uc3Qgb2Zmc2V0UGFyZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChvZmZzZXRQYXJlbnQpO1xuXG4gIC8vIFN0eWxlc1xuICBjb25zdCBzdHlsZXMgPSB7XG4gICAgcG9zaXRpb246IHBvcHBlci5wb3NpdGlvbixcbiAgfTtcblxuICBjb25zdCBvZmZzZXRzID0gZ2V0Um91bmRlZE9mZnNldHMoXG4gICAgZGF0YSxcbiAgICB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA8IDIgfHwgIWlzRmlyZWZveFxuICApO1xuXG4gIGNvbnN0IHNpZGVBID0geCA9PT0gJ2JvdHRvbScgPyAndG9wJyA6ICdib3R0b20nO1xuICBjb25zdCBzaWRlQiA9IHkgPT09ICdyaWdodCcgPyAnbGVmdCcgOiAncmlnaHQnO1xuXG4gIC8vIGlmIGdwdUFjY2VsZXJhdGlvbiBpcyBzZXQgdG8gYHRydWVgIGFuZCB0cmFuc2Zvcm0gaXMgc3VwcG9ydGVkLFxuICAvLyAgd2UgdXNlIGB0cmFuc2xhdGUzZGAgdG8gYXBwbHkgdGhlIHBvc2l0aW9uIHRvIHRoZSBwb3BwZXIgd2VcbiAgLy8gYXV0b21hdGljYWxseSB1c2UgdGhlIHN1cHBvcnRlZCBwcmVmaXhlZCB2ZXJzaW9uIGlmIG5lZWRlZFxuICBjb25zdCBwcmVmaXhlZFByb3BlcnR5ID0gZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lKCd0cmFuc2Zvcm0nKTtcblxuICAvLyBub3csIGxldCdzIG1ha2UgYSBzdGVwIGJhY2sgYW5kIGxvb2sgYXQgdGhpcyBjb2RlIGNsb3NlbHkgKHd0Zj8pXG4gIC8vIElmIHRoZSBjb250ZW50IG9mIHRoZSBwb3BwZXIgZ3Jvd3Mgb25jZSBpdCdzIGJlZW4gcG9zaXRpb25lZCwgaXRcbiAgLy8gbWF5IGhhcHBlbiB0aGF0IHRoZSBwb3BwZXIgZ2V0cyBtaXNwbGFjZWQgYmVjYXVzZSBvZiB0aGUgbmV3IGNvbnRlbnRcbiAgLy8gb3ZlcmZsb3dpbmcgaXRzIHJlZmVyZW5jZSBlbGVtZW50XG4gIC8vIFRvIGF2b2lkIHRoaXMgcHJvYmxlbSwgd2UgcHJvdmlkZSB0d28gb3B0aW9ucyAoeCBhbmQgeSksIHdoaWNoIGFsbG93XG4gIC8vIHRoZSBjb25zdW1lciB0byBkZWZpbmUgdGhlIG9mZnNldCBvcmlnaW4uXG4gIC8vIElmIHdlIHBvc2l0aW9uIGEgcG9wcGVyIG9uIHRvcCBvZiBhIHJlZmVyZW5jZSBlbGVtZW50LCB3ZSBjYW4gc2V0XG4gIC8vIGB4YCB0byBgdG9wYCB0byBtYWtlIHRoZSBwb3BwZXIgZ3JvdyB0b3dhcmRzIGl0cyB0b3AgaW5zdGVhZCBvZlxuICAvLyBpdHMgYm90dG9tLlxuICBsZXQgbGVmdCwgdG9wO1xuICBpZiAoc2lkZUEgPT09ICdib3R0b20nKSB7XG4gICAgLy8gd2hlbiBvZmZzZXRQYXJlbnQgaXMgPGh0bWw+IHRoZSBwb3NpdGlvbmluZyBpcyByZWxhdGl2ZSB0byB0aGUgYm90dG9tIG9mIHRoZSBzY3JlZW4gKGV4Y2x1ZGluZyB0aGUgc2Nyb2xsYmFyKVxuICAgIC8vIGFuZCBub3QgdGhlIGJvdHRvbSBvZiB0aGUgaHRtbCBlbGVtZW50XG4gICAgaWYgKG9mZnNldFBhcmVudC5ub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgICB0b3AgPSAtb2Zmc2V0UGFyZW50LmNsaWVudEhlaWdodCArIG9mZnNldHMuYm90dG9tO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b3AgPSAtb2Zmc2V0UGFyZW50UmVjdC5oZWlnaHQgKyBvZmZzZXRzLmJvdHRvbTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdG9wID0gb2Zmc2V0cy50b3A7XG4gIH1cbiAgaWYgKHNpZGVCID09PSAncmlnaHQnKSB7XG4gICAgaWYgKG9mZnNldFBhcmVudC5ub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgICBsZWZ0ID0gLW9mZnNldFBhcmVudC5jbGllbnRXaWR0aCArIG9mZnNldHMucmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlZnQgPSAtb2Zmc2V0UGFyZW50UmVjdC53aWR0aCArIG9mZnNldHMucmlnaHQ7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGxlZnQgPSBvZmZzZXRzLmxlZnQ7XG4gIH1cbiAgaWYgKGdwdUFjY2VsZXJhdGlvbiAmJiBwcmVmaXhlZFByb3BlcnR5KSB7XG4gICAgc3R5bGVzW3ByZWZpeGVkUHJvcGVydHldID0gYHRyYW5zbGF0ZTNkKCR7bGVmdH1weCwgJHt0b3B9cHgsIDApYDtcbiAgICBzdHlsZXNbc2lkZUFdID0gMDtcbiAgICBzdHlsZXNbc2lkZUJdID0gMDtcbiAgICBzdHlsZXMud2lsbENoYW5nZSA9ICd0cmFuc2Zvcm0nO1xuICB9IGVsc2Uge1xuICAgIC8vIG90aHdlcmlzZSwgd2UgdXNlIHRoZSBzdGFuZGFyZCBgdG9wYCwgYGxlZnRgLCBgYm90dG9tYCBhbmQgYHJpZ2h0YCBwcm9wZXJ0aWVzXG4gICAgY29uc3QgaW52ZXJ0VG9wID0gc2lkZUEgPT09ICdib3R0b20nID8gLTEgOiAxO1xuICAgIGNvbnN0IGludmVydExlZnQgPSBzaWRlQiA9PT0gJ3JpZ2h0JyA/IC0xIDogMTtcbiAgICBzdHlsZXNbc2lkZUFdID0gdG9wICogaW52ZXJ0VG9wO1xuICAgIHN0eWxlc1tzaWRlQl0gPSBsZWZ0ICogaW52ZXJ0TGVmdDtcbiAgICBzdHlsZXMud2lsbENoYW5nZSA9IGAke3NpZGVBfSwgJHtzaWRlQn1gO1xuICB9XG5cbiAgLy8gQXR0cmlidXRlc1xuICBjb25zdCBhdHRyaWJ1dGVzID0ge1xuICAgICd4LXBsYWNlbWVudCc6IGRhdGEucGxhY2VtZW50LFxuICB9O1xuXG4gIC8vIFVwZGF0ZSBgZGF0YWAgYXR0cmlidXRlcywgc3R5bGVzIGFuZCBhcnJvd1N0eWxlc1xuICBkYXRhLmF0dHJpYnV0ZXMgPSB7IC4uLmF0dHJpYnV0ZXMsIC4uLmRhdGEuYXR0cmlidXRlcyB9O1xuICBkYXRhLnN0eWxlcyA9IHsgLi4uc3R5bGVzLCAuLi5kYXRhLnN0eWxlcyB9O1xuICBkYXRhLmFycm93U3R5bGVzID0geyAuLi5kYXRhLm9mZnNldHMuYXJyb3csIC4uLmRhdGEuYXJyb3dTdHlsZXMgfTtcblxuICByZXR1cm4gZGF0YTtcbn1cbiIsImltcG9ydCBmaW5kIGZyb20gJy4vZmluZCc7XG5cbi8qKlxuICogSGVscGVyIHVzZWQgdG8ga25vdyBpZiB0aGUgZ2l2ZW4gbW9kaWZpZXIgZGVwZW5kcyBmcm9tIGFub3RoZXIgb25lLjxiciAvPlxuICogSXQgY2hlY2tzIGlmIHRoZSBuZWVkZWQgbW9kaWZpZXIgaXMgbGlzdGVkIGFuZCBlbmFibGVkLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtBcnJheX0gbW9kaWZpZXJzIC0gbGlzdCBvZiBtb2RpZmllcnNcbiAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0aW5nTmFtZSAtIG5hbWUgb2YgcmVxdWVzdGluZyBtb2RpZmllclxuICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RlZE5hbWUgLSBuYW1lIG9mIHJlcXVlc3RlZCBtb2RpZmllclxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzTW9kaWZpZXJSZXF1aXJlZChcbiAgbW9kaWZpZXJzLFxuICByZXF1ZXN0aW5nTmFtZSxcbiAgcmVxdWVzdGVkTmFtZVxuKSB7XG4gIGNvbnN0IHJlcXVlc3RpbmcgPSBmaW5kKG1vZGlmaWVycywgKHsgbmFtZSB9KSA9PiBuYW1lID09PSByZXF1ZXN0aW5nTmFtZSk7XG5cbiAgY29uc3QgaXNSZXF1aXJlZCA9XG4gICAgISFyZXF1ZXN0aW5nICYmXG4gICAgbW9kaWZpZXJzLnNvbWUobW9kaWZpZXIgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgbW9kaWZpZXIubmFtZSA9PT0gcmVxdWVzdGVkTmFtZSAmJlxuICAgICAgICBtb2RpZmllci5lbmFibGVkICYmXG4gICAgICAgIG1vZGlmaWVyLm9yZGVyIDwgcmVxdWVzdGluZy5vcmRlclxuICAgICAgKTtcbiAgICB9KTtcblxuICBpZiAoIWlzUmVxdWlyZWQpIHtcbiAgICBjb25zdCByZXF1ZXN0aW5nID0gYFxcYCR7cmVxdWVzdGluZ05hbWV9XFxgYDtcbiAgICBjb25zdCByZXF1ZXN0ZWQgPSBgXFxgJHtyZXF1ZXN0ZWROYW1lfVxcYGA7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYCR7cmVxdWVzdGVkfSBtb2RpZmllciBpcyByZXF1aXJlZCBieSAke3JlcXVlc3Rpbmd9IG1vZGlmaWVyIGluIG9yZGVyIHRvIHdvcmssIGJlIHN1cmUgdG8gaW5jbHVkZSBpdCBiZWZvcmUgJHtyZXF1ZXN0aW5nfSFgXG4gICAgKTtcbiAgfVxuICByZXR1cm4gaXNSZXF1aXJlZDtcbn1cbiIsImltcG9ydCBnZXRDbGllbnRSZWN0IGZyb20gJy4uL3V0aWxzL2dldENsaWVudFJlY3QnO1xuaW1wb3J0IGdldE91dGVyU2l6ZXMgZnJvbSAnLi4vdXRpbHMvZ2V0T3V0ZXJTaXplcyc7XG5pbXBvcnQgaXNNb2RpZmllclJlcXVpcmVkIGZyb20gJy4uL3V0aWxzL2lzTW9kaWZpZXJSZXF1aXJlZCc7XG5pbXBvcnQgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5IGZyb20gJy4uL3V0aWxzL2dldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSc7XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcnJvdyhkYXRhLCBvcHRpb25zKSB7XG4gIC8vIGFycm93IGRlcGVuZHMgb24ga2VlcFRvZ2V0aGVyIGluIG9yZGVyIHRvIHdvcmtcbiAgaWYgKCFpc01vZGlmaWVyUmVxdWlyZWQoZGF0YS5pbnN0YW5jZS5tb2RpZmllcnMsICdhcnJvdycsICdrZWVwVG9nZXRoZXInKSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgbGV0IGFycm93RWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudDtcblxuICAvLyBpZiBhcnJvd0VsZW1lbnQgaXMgYSBzdHJpbmcsIHN1cHBvc2UgaXQncyBhIENTUyBzZWxlY3RvclxuICBpZiAodHlwZW9mIGFycm93RWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICBhcnJvd0VsZW1lbnQgPSBkYXRhLmluc3RhbmNlLnBvcHBlci5xdWVyeVNlbGVjdG9yKGFycm93RWxlbWVudCk7XG5cbiAgICAvLyBpZiBhcnJvd0VsZW1lbnQgaXMgbm90IGZvdW5kLCBkb24ndCBydW4gdGhlIG1vZGlmaWVyXG4gICAgaWYgKCFhcnJvd0VsZW1lbnQpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBpZiB0aGUgYXJyb3dFbGVtZW50IGlzbid0IGEgcXVlcnkgc2VsZWN0b3Igd2UgbXVzdCBjaGVjayB0aGF0IHRoZVxuICAgIC8vIHByb3ZpZGVkIERPTSBub2RlIGlzIGNoaWxkIG9mIGl0cyBwb3BwZXIgbm9kZVxuICAgIGlmICghZGF0YS5pbnN0YW5jZS5wb3BwZXIuY29udGFpbnMoYXJyb3dFbGVtZW50KSkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnV0FSTklORzogYGFycm93LmVsZW1lbnRgIG11c3QgYmUgY2hpbGQgb2YgaXRzIHBvcHBlciBlbGVtZW50ISdcbiAgICAgICk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICBjb25zdCB7IHBvcHBlciwgcmVmZXJlbmNlIH0gPSBkYXRhLm9mZnNldHM7XG4gIGNvbnN0IGlzVmVydGljYWwgPSBbJ2xlZnQnLCAncmlnaHQnXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xO1xuXG4gIGNvbnN0IGxlbiA9IGlzVmVydGljYWwgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG4gIGNvbnN0IHNpZGVDYXBpdGFsaXplZCA9IGlzVmVydGljYWwgPyAnVG9wJyA6ICdMZWZ0JztcbiAgY29uc3Qgc2lkZSA9IHNpZGVDYXBpdGFsaXplZC50b0xvd2VyQ2FzZSgpO1xuICBjb25zdCBhbHRTaWRlID0gaXNWZXJ0aWNhbCA/ICdsZWZ0JyA6ICd0b3AnO1xuICBjb25zdCBvcFNpZGUgPSBpc1ZlcnRpY2FsID8gJ2JvdHRvbScgOiAncmlnaHQnO1xuICBjb25zdCBhcnJvd0VsZW1lbnRTaXplID0gZ2V0T3V0ZXJTaXplcyhhcnJvd0VsZW1lbnQpW2xlbl07XG5cbiAgLy9cbiAgLy8gZXh0ZW5kcyBrZWVwVG9nZXRoZXIgYmVoYXZpb3IgbWFraW5nIHN1cmUgdGhlIHBvcHBlciBhbmQgaXRzXG4gIC8vIHJlZmVyZW5jZSBoYXZlIGVub3VnaCBwaXhlbHMgaW4gY29uanVuY3Rpb25cbiAgLy9cblxuICAvLyB0b3AvbGVmdCBzaWRlXG4gIGlmIChyZWZlcmVuY2Vbb3BTaWRlXSAtIGFycm93RWxlbWVudFNpemUgPCBwb3BwZXJbc2lkZV0pIHtcbiAgICBkYXRhLm9mZnNldHMucG9wcGVyW3NpZGVdIC09XG4gICAgICBwb3BwZXJbc2lkZV0gLSAocmVmZXJlbmNlW29wU2lkZV0gLSBhcnJvd0VsZW1lbnRTaXplKTtcbiAgfVxuICAvLyBib3R0b20vcmlnaHQgc2lkZVxuICBpZiAocmVmZXJlbmNlW3NpZGVdICsgYXJyb3dFbGVtZW50U2l6ZSA+IHBvcHBlcltvcFNpZGVdKSB7XG4gICAgZGF0YS5vZmZzZXRzLnBvcHBlcltzaWRlXSArPVxuICAgICAgcmVmZXJlbmNlW3NpZGVdICsgYXJyb3dFbGVtZW50U2l6ZSAtIHBvcHBlcltvcFNpZGVdO1xuICB9XG4gIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSBnZXRDbGllbnRSZWN0KGRhdGEub2Zmc2V0cy5wb3BwZXIpO1xuXG4gIC8vIGNvbXB1dGUgY2VudGVyIG9mIHRoZSBwb3BwZXJcbiAgY29uc3QgY2VudGVyID0gcmVmZXJlbmNlW3NpZGVdICsgcmVmZXJlbmNlW2xlbl0gLyAyIC0gYXJyb3dFbGVtZW50U2l6ZSAvIDI7XG5cbiAgLy8gQ29tcHV0ZSB0aGUgc2lkZVZhbHVlIHVzaW5nIHRoZSB1cGRhdGVkIHBvcHBlciBvZmZzZXRzXG4gIC8vIHRha2UgcG9wcGVyIG1hcmdpbiBpbiBhY2NvdW50IGJlY2F1c2Ugd2UgZG9uJ3QgaGF2ZSB0aGlzIGluZm8gYXZhaWxhYmxlXG4gIGNvbnN0IGNzcyA9IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShkYXRhLmluc3RhbmNlLnBvcHBlcik7XG4gIGNvbnN0IHBvcHBlck1hcmdpblNpZGUgPSBwYXJzZUZsb2F0KGNzc1tgbWFyZ2luJHtzaWRlQ2FwaXRhbGl6ZWR9YF0pO1xuICBjb25zdCBwb3BwZXJCb3JkZXJTaWRlID0gcGFyc2VGbG9hdChjc3NbYGJvcmRlciR7c2lkZUNhcGl0YWxpemVkfVdpZHRoYF0pO1xuICBsZXQgc2lkZVZhbHVlID1cbiAgICBjZW50ZXIgLSBkYXRhLm9mZnNldHMucG9wcGVyW3NpZGVdIC0gcG9wcGVyTWFyZ2luU2lkZSAtIHBvcHBlckJvcmRlclNpZGU7XG5cbiAgLy8gcHJldmVudCBhcnJvd0VsZW1lbnQgZnJvbSBiZWluZyBwbGFjZWQgbm90IGNvbnRpZ3VvdXNseSB0byBpdHMgcG9wcGVyXG4gIHNpZGVWYWx1ZSA9IE1hdGgubWF4KE1hdGgubWluKHBvcHBlcltsZW5dIC0gYXJyb3dFbGVtZW50U2l6ZSwgc2lkZVZhbHVlKSwgMCk7XG5cbiAgZGF0YS5hcnJvd0VsZW1lbnQgPSBhcnJvd0VsZW1lbnQ7XG4gIGRhdGEub2Zmc2V0cy5hcnJvdyA9IHtcbiAgICBbc2lkZV06IE1hdGgucm91bmQoc2lkZVZhbHVlKSxcbiAgICBbYWx0U2lkZV06ICcnLCAvLyBtYWtlIHN1cmUgdG8gdW5zZXQgYW55IGV2ZW50dWFsIGFsdFNpZGUgdmFsdWUgZnJvbSB0aGUgRE9NIG5vZGVcbiAgfTtcblxuICByZXR1cm4gZGF0YTtcbn1cbiIsIi8qKlxuICogR2V0IHRoZSBvcHBvc2l0ZSBwbGFjZW1lbnQgdmFyaWF0aW9uIG9mIHRoZSBnaXZlbiBvbmVcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBwbGFjZW1lbnQgdmFyaWF0aW9uXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBmbGlwcGVkIHBsYWNlbWVudCB2YXJpYXRpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T3Bwb3NpdGVWYXJpYXRpb24odmFyaWF0aW9uKSB7XG4gIGlmICh2YXJpYXRpb24gPT09ICdlbmQnKSB7XG4gICAgcmV0dXJuICdzdGFydCc7XG4gIH0gZWxzZSBpZiAodmFyaWF0aW9uID09PSAnc3RhcnQnKSB7XG4gICAgcmV0dXJuICdlbmQnO1xuICB9XG4gIHJldHVybiB2YXJpYXRpb247XG59XG4iLCIvKipcbiAqIExpc3Qgb2YgYWNjZXB0ZWQgcGxhY2VtZW50cyB0byB1c2UgYXMgdmFsdWVzIG9mIHRoZSBgcGxhY2VtZW50YCBvcHRpb24uPGJyIC8+XG4gKiBWYWxpZCBwbGFjZW1lbnRzIGFyZTpcbiAqIC0gYGF1dG9gXG4gKiAtIGB0b3BgXG4gKiAtIGByaWdodGBcbiAqIC0gYGJvdHRvbWBcbiAqIC0gYGxlZnRgXG4gKlxuICogRWFjaCBwbGFjZW1lbnQgY2FuIGhhdmUgYSB2YXJpYXRpb24gZnJvbSB0aGlzIGxpc3Q6XG4gKiAtIGAtc3RhcnRgXG4gKiAtIGAtZW5kYFxuICpcbiAqIFZhcmlhdGlvbnMgYXJlIGludGVycHJldGVkIGVhc2lseSBpZiB5b3UgdGhpbmsgb2YgdGhlbSBhcyB0aGUgbGVmdCB0byByaWdodFxuICogd3JpdHRlbiBsYW5ndWFnZXMuIEhvcml6b250YWxseSAoYHRvcGAgYW5kIGBib3R0b21gKSwgYHN0YXJ0YCBpcyBsZWZ0IGFuZCBgZW5kYFxuICogaXMgcmlnaHQuPGJyIC8+XG4gKiBWZXJ0aWNhbGx5IChgbGVmdGAgYW5kIGByaWdodGApLCBgc3RhcnRgIGlzIHRvcCBhbmQgYGVuZGAgaXMgYm90dG9tLlxuICpcbiAqIFNvbWUgdmFsaWQgZXhhbXBsZXMgYXJlOlxuICogLSBgdG9wLWVuZGAgKG9uIHRvcCBvZiByZWZlcmVuY2UsIHJpZ2h0IGFsaWduZWQpXG4gKiAtIGByaWdodC1zdGFydGAgKG9uIHJpZ2h0IG9mIHJlZmVyZW5jZSwgdG9wIGFsaWduZWQpXG4gKiAtIGBib3R0b21gIChvbiBib3R0b20sIGNlbnRlcmVkKVxuICogLSBgYXV0by1lbmRgIChvbiB0aGUgc2lkZSB3aXRoIG1vcmUgc3BhY2UgYXZhaWxhYmxlLCBhbGlnbm1lbnQgZGVwZW5kcyBieSBwbGFjZW1lbnQpXG4gKlxuICogQHN0YXRpY1xuICogQHR5cGUge0FycmF5fVxuICogQGVudW0ge1N0cmluZ31cbiAqIEByZWFkb25seVxuICogQG1ldGhvZCBwbGFjZW1lbnRzXG4gKiBAbWVtYmVyb2YgUG9wcGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IFtcbiAgJ2F1dG8tc3RhcnQnLFxuICAnYXV0bycsXG4gICdhdXRvLWVuZCcsXG4gICd0b3Atc3RhcnQnLFxuICAndG9wJyxcbiAgJ3RvcC1lbmQnLFxuICAncmlnaHQtc3RhcnQnLFxuICAncmlnaHQnLFxuICAncmlnaHQtZW5kJyxcbiAgJ2JvdHRvbS1lbmQnLFxuICAnYm90dG9tJyxcbiAgJ2JvdHRvbS1zdGFydCcsXG4gICdsZWZ0LWVuZCcsXG4gICdsZWZ0JyxcbiAgJ2xlZnQtc3RhcnQnLFxuXTtcbiIsImltcG9ydCBwbGFjZW1lbnRzIGZyb20gJy4uL21ldGhvZHMvcGxhY2VtZW50cyc7XG5cbi8vIEdldCByaWQgb2YgYGF1dG9gIGBhdXRvLXN0YXJ0YCBhbmQgYGF1dG8tZW5kYFxuY29uc3QgdmFsaWRQbGFjZW1lbnRzID0gcGxhY2VtZW50cy5zbGljZSgzKTtcblxuLyoqXG4gKiBHaXZlbiBhbiBpbml0aWFsIHBsYWNlbWVudCwgcmV0dXJucyBhbGwgdGhlIHN1YnNlcXVlbnQgcGxhY2VtZW50c1xuICogY2xvY2t3aXNlIChvciBjb3VudGVyLWNsb2Nrd2lzZSkuXG4gKlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtTdHJpbmd9IHBsYWNlbWVudCAtIEEgdmFsaWQgcGxhY2VtZW50IChpdCBhY2NlcHRzIHZhcmlhdGlvbnMpXG4gKiBAYXJndW1lbnQge0Jvb2xlYW59IGNvdW50ZXIgLSBTZXQgdG8gdHJ1ZSB0byB3YWxrIHRoZSBwbGFjZW1lbnRzIGNvdW50ZXJjbG9ja3dpc2VcbiAqIEByZXR1cm5zIHtBcnJheX0gcGxhY2VtZW50cyBpbmNsdWRpbmcgdGhlaXIgdmFyaWF0aW9uc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbG9ja3dpc2UocGxhY2VtZW50LCBjb3VudGVyID0gZmFsc2UpIHtcbiAgY29uc3QgaW5kZXggPSB2YWxpZFBsYWNlbWVudHMuaW5kZXhPZihwbGFjZW1lbnQpO1xuICBjb25zdCBhcnIgPSB2YWxpZFBsYWNlbWVudHNcbiAgICAuc2xpY2UoaW5kZXggKyAxKVxuICAgIC5jb25jYXQodmFsaWRQbGFjZW1lbnRzLnNsaWNlKDAsIGluZGV4KSk7XG4gIHJldHVybiBjb3VudGVyID8gYXJyLnJldmVyc2UoKSA6IGFycjtcbn1cbiIsImltcG9ydCBnZXRPcHBvc2l0ZVBsYWNlbWVudCBmcm9tICcuLi91dGlscy9nZXRPcHBvc2l0ZVBsYWNlbWVudCc7XG5pbXBvcnQgZ2V0T3Bwb3NpdGVWYXJpYXRpb24gZnJvbSAnLi4vdXRpbHMvZ2V0T3Bwb3NpdGVWYXJpYXRpb24nO1xuaW1wb3J0IGdldFBvcHBlck9mZnNldHMgZnJvbSAnLi4vdXRpbHMvZ2V0UG9wcGVyT2Zmc2V0cyc7XG5pbXBvcnQgcnVuTW9kaWZpZXJzIGZyb20gJy4uL3V0aWxzL3J1bk1vZGlmaWVycyc7XG5pbXBvcnQgZ2V0Qm91bmRhcmllcyBmcm9tICcuLi91dGlscy9nZXRCb3VuZGFyaWVzJztcbmltcG9ydCBpc01vZGlmaWVyRW5hYmxlZCBmcm9tICcuLi91dGlscy9pc01vZGlmaWVyRW5hYmxlZCc7XG5pbXBvcnQgY2xvY2t3aXNlIGZyb20gJy4uL3V0aWxzL2Nsb2Nrd2lzZSc7XG5cbmNvbnN0IEJFSEFWSU9SUyA9IHtcbiAgRkxJUDogJ2ZsaXAnLFxuICBDTE9DS1dJU0U6ICdjbG9ja3dpc2UnLFxuICBDT1VOVEVSQ0xPQ0tXSVNFOiAnY291bnRlcmNsb2Nrd2lzZScsXG59O1xuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmxpcChkYXRhLCBvcHRpb25zKSB7XG4gIC8vIGlmIGBpbm5lcmAgbW9kaWZpZXIgaXMgZW5hYmxlZCwgd2UgY2FuJ3QgdXNlIHRoZSBgZmxpcGAgbW9kaWZpZXJcbiAgaWYgKGlzTW9kaWZpZXJFbmFibGVkKGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLCAnaW5uZXInKSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgaWYgKGRhdGEuZmxpcHBlZCAmJiBkYXRhLnBsYWNlbWVudCA9PT0gZGF0YS5vcmlnaW5hbFBsYWNlbWVudCkge1xuICAgIC8vIHNlZW1zIGxpa2UgZmxpcCBpcyB0cnlpbmcgdG8gbG9vcCwgcHJvYmFibHkgdGhlcmUncyBub3QgZW5vdWdoIHNwYWNlIG9uIGFueSBvZiB0aGUgZmxpcHBhYmxlIHNpZGVzXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBjb25zdCBib3VuZGFyaWVzID0gZ2V0Qm91bmRhcmllcyhcbiAgICBkYXRhLmluc3RhbmNlLnBvcHBlcixcbiAgICBkYXRhLmluc3RhbmNlLnJlZmVyZW5jZSxcbiAgICBvcHRpb25zLnBhZGRpbmcsXG4gICAgb3B0aW9ucy5ib3VuZGFyaWVzRWxlbWVudCxcbiAgICBkYXRhLnBvc2l0aW9uRml4ZWRcbiAgKTtcblxuICBsZXQgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgbGV0IHBsYWNlbWVudE9wcG9zaXRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgbGV0IHZhcmlhdGlvbiA9IGRhdGEucGxhY2VtZW50LnNwbGl0KCctJylbMV0gfHwgJyc7XG5cbiAgbGV0IGZsaXBPcmRlciA9IFtdO1xuXG4gIHN3aXRjaCAob3B0aW9ucy5iZWhhdmlvcikge1xuICAgIGNhc2UgQkVIQVZJT1JTLkZMSVA6XG4gICAgICBmbGlwT3JkZXIgPSBbcGxhY2VtZW50LCBwbGFjZW1lbnRPcHBvc2l0ZV07XG4gICAgICBicmVhaztcbiAgICBjYXNlIEJFSEFWSU9SUy5DTE9DS1dJU0U6XG4gICAgICBmbGlwT3JkZXIgPSBjbG9ja3dpc2UocGxhY2VtZW50KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQkVIQVZJT1JTLkNPVU5URVJDTE9DS1dJU0U6XG4gICAgICBmbGlwT3JkZXIgPSBjbG9ja3dpc2UocGxhY2VtZW50LCB0cnVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBmbGlwT3JkZXIgPSBvcHRpb25zLmJlaGF2aW9yO1xuICB9XG5cbiAgZmxpcE9yZGVyLmZvckVhY2goKHN0ZXAsIGluZGV4KSA9PiB7XG4gICAgaWYgKHBsYWNlbWVudCAhPT0gc3RlcCB8fCBmbGlwT3JkZXIubGVuZ3RoID09PSBpbmRleCArIDEpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50LnNwbGl0KCctJylbMF07XG4gICAgcGxhY2VtZW50T3Bwb3NpdGUgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuXG4gICAgY29uc3QgcG9wcGVyT2Zmc2V0cyA9IGRhdGEub2Zmc2V0cy5wb3BwZXI7XG4gICAgY29uc3QgcmVmT2Zmc2V0cyA9IGRhdGEub2Zmc2V0cy5yZWZlcmVuY2U7XG5cbiAgICAvLyB1c2luZyBmbG9vciBiZWNhdXNlIHRoZSByZWZlcmVuY2Ugb2Zmc2V0cyBtYXkgY29udGFpbiBkZWNpbWFscyB3ZSBhcmUgbm90IGdvaW5nIHRvIGNvbnNpZGVyIGhlcmVcbiAgICBjb25zdCBmbG9vciA9IE1hdGguZmxvb3I7XG4gICAgY29uc3Qgb3ZlcmxhcHNSZWYgPVxuICAgICAgKHBsYWNlbWVudCA9PT0gJ2xlZnQnICYmXG4gICAgICAgIGZsb29yKHBvcHBlck9mZnNldHMucmlnaHQpID4gZmxvb3IocmVmT2Zmc2V0cy5sZWZ0KSkgfHxcbiAgICAgIChwbGFjZW1lbnQgPT09ICdyaWdodCcgJiZcbiAgICAgICAgZmxvb3IocG9wcGVyT2Zmc2V0cy5sZWZ0KSA8IGZsb29yKHJlZk9mZnNldHMucmlnaHQpKSB8fFxuICAgICAgKHBsYWNlbWVudCA9PT0gJ3RvcCcgJiZcbiAgICAgICAgZmxvb3IocG9wcGVyT2Zmc2V0cy5ib3R0b20pID4gZmxvb3IocmVmT2Zmc2V0cy50b3ApKSB8fFxuICAgICAgKHBsYWNlbWVudCA9PT0gJ2JvdHRvbScgJiZcbiAgICAgICAgZmxvb3IocG9wcGVyT2Zmc2V0cy50b3ApIDwgZmxvb3IocmVmT2Zmc2V0cy5ib3R0b20pKTtcblxuICAgIGNvbnN0IG92ZXJmbG93c0xlZnQgPSBmbG9vcihwb3BwZXJPZmZzZXRzLmxlZnQpIDwgZmxvb3IoYm91bmRhcmllcy5sZWZ0KTtcbiAgICBjb25zdCBvdmVyZmxvd3NSaWdodCA9IGZsb29yKHBvcHBlck9mZnNldHMucmlnaHQpID4gZmxvb3IoYm91bmRhcmllcy5yaWdodCk7XG4gICAgY29uc3Qgb3ZlcmZsb3dzVG9wID0gZmxvb3IocG9wcGVyT2Zmc2V0cy50b3ApIDwgZmxvb3IoYm91bmRhcmllcy50b3ApO1xuICAgIGNvbnN0IG92ZXJmbG93c0JvdHRvbSA9XG4gICAgICBmbG9vcihwb3BwZXJPZmZzZXRzLmJvdHRvbSkgPiBmbG9vcihib3VuZGFyaWVzLmJvdHRvbSk7XG5cbiAgICBjb25zdCBvdmVyZmxvd3NCb3VuZGFyaWVzID1cbiAgICAgIChwbGFjZW1lbnQgPT09ICdsZWZ0JyAmJiBvdmVyZmxvd3NMZWZ0KSB8fFxuICAgICAgKHBsYWNlbWVudCA9PT0gJ3JpZ2h0JyAmJiBvdmVyZmxvd3NSaWdodCkgfHxcbiAgICAgIChwbGFjZW1lbnQgPT09ICd0b3AnICYmIG92ZXJmbG93c1RvcCkgfHxcbiAgICAgIChwbGFjZW1lbnQgPT09ICdib3R0b20nICYmIG92ZXJmbG93c0JvdHRvbSk7XG5cbiAgICAvLyBmbGlwIHRoZSB2YXJpYXRpb24gaWYgcmVxdWlyZWRcbiAgICBjb25zdCBpc1ZlcnRpY2FsID0gWyd0b3AnLCAnYm90dG9tJ10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMTtcblxuICAgIC8vIGZsaXBzIHZhcmlhdGlvbiBpZiByZWZlcmVuY2UgZWxlbWVudCBvdmVyZmxvd3MgYm91bmRhcmllc1xuICAgIGNvbnN0IGZsaXBwZWRWYXJpYXRpb25CeVJlZiA9XG4gICAgICAhIW9wdGlvbnMuZmxpcFZhcmlhdGlvbnMgJiZcbiAgICAgICgoaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdzdGFydCcgJiYgb3ZlcmZsb3dzTGVmdCkgfHxcbiAgICAgICAgKGlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnZW5kJyAmJiBvdmVyZmxvd3NSaWdodCkgfHxcbiAgICAgICAgKCFpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ3N0YXJ0JyAmJiBvdmVyZmxvd3NUb3ApIHx8XG4gICAgICAgICghaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdlbmQnICYmIG92ZXJmbG93c0JvdHRvbSkpO1xuXG4gICAgLy8gZmxpcHMgdmFyaWF0aW9uIGlmIHBvcHBlciBjb250ZW50IG92ZXJmbG93cyBib3VuZGFyaWVzXG4gICAgY29uc3QgZmxpcHBlZFZhcmlhdGlvbkJ5Q29udGVudCA9XG4gICAgICAhIW9wdGlvbnMuZmxpcFZhcmlhdGlvbnNCeUNvbnRlbnQgJiZcbiAgICAgICgoaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdzdGFydCcgJiYgb3ZlcmZsb3dzUmlnaHQpIHx8XG4gICAgICAgIChpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ2VuZCcgJiYgb3ZlcmZsb3dzTGVmdCkgfHxcbiAgICAgICAgKCFpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ3N0YXJ0JyAmJiBvdmVyZmxvd3NCb3R0b20pIHx8XG4gICAgICAgICghaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdlbmQnICYmIG92ZXJmbG93c1RvcCkpO1xuXG4gICAgY29uc3QgZmxpcHBlZFZhcmlhdGlvbiA9IGZsaXBwZWRWYXJpYXRpb25CeVJlZiB8fCBmbGlwcGVkVmFyaWF0aW9uQnlDb250ZW50O1xuXG4gICAgaWYgKG92ZXJsYXBzUmVmIHx8IG92ZXJmbG93c0JvdW5kYXJpZXMgfHwgZmxpcHBlZFZhcmlhdGlvbikge1xuICAgICAgLy8gdGhpcyBib29sZWFuIHRvIGRldGVjdCBhbnkgZmxpcCBsb29wXG4gICAgICBkYXRhLmZsaXBwZWQgPSB0cnVlO1xuXG4gICAgICBpZiAob3ZlcmxhcHNSZWYgfHwgb3ZlcmZsb3dzQm91bmRhcmllcykge1xuICAgICAgICBwbGFjZW1lbnQgPSBmbGlwT3JkZXJbaW5kZXggKyAxXTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZsaXBwZWRWYXJpYXRpb24pIHtcbiAgICAgICAgdmFyaWF0aW9uID0gZ2V0T3Bwb3NpdGVWYXJpYXRpb24odmFyaWF0aW9uKTtcbiAgICAgIH1cblxuICAgICAgZGF0YS5wbGFjZW1lbnQgPSBwbGFjZW1lbnQgKyAodmFyaWF0aW9uID8gJy0nICsgdmFyaWF0aW9uIDogJycpO1xuXG4gICAgICAvLyB0aGlzIG9iamVjdCBjb250YWlucyBgcG9zaXRpb25gLCB3ZSB3YW50IHRvIHByZXNlcnZlIGl0IGFsb25nIHdpdGhcbiAgICAgIC8vIGFueSBhZGRpdGlvbmFsIHByb3BlcnR5IHdlIG1heSBhZGQgaW4gdGhlIGZ1dHVyZVxuICAgICAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IHtcbiAgICAgICAgLi4uZGF0YS5vZmZzZXRzLnBvcHBlcixcbiAgICAgICAgLi4uZ2V0UG9wcGVyT2Zmc2V0cyhcbiAgICAgICAgICBkYXRhLmluc3RhbmNlLnBvcHBlcixcbiAgICAgICAgICBkYXRhLm9mZnNldHMucmVmZXJlbmNlLFxuICAgICAgICAgIGRhdGEucGxhY2VtZW50XG4gICAgICAgICksXG4gICAgICB9O1xuXG4gICAgICBkYXRhID0gcnVuTW9kaWZpZXJzKGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLCBkYXRhLCAnZmxpcCcpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBkYXRhO1xufVxuIiwiLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSB1cGRhdGUgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGtlZXBUb2dldGhlcihkYXRhKSB7XG4gIGNvbnN0IHsgcG9wcGVyLCByZWZlcmVuY2UgfSA9IGRhdGEub2Zmc2V0cztcbiAgY29uc3QgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgY29uc3QgZmxvb3IgPSBNYXRoLmZsb29yO1xuICBjb25zdCBpc1ZlcnRpY2FsID0gWyd0b3AnLCAnYm90dG9tJ10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMTtcbiAgY29uc3Qgc2lkZSA9IGlzVmVydGljYWwgPyAncmlnaHQnIDogJ2JvdHRvbSc7XG4gIGNvbnN0IG9wU2lkZSA9IGlzVmVydGljYWwgPyAnbGVmdCcgOiAndG9wJztcbiAgY29uc3QgbWVhc3VyZW1lbnQgPSBpc1ZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnO1xuXG4gIGlmIChwb3BwZXJbc2lkZV0gPCBmbG9vcihyZWZlcmVuY2Vbb3BTaWRlXSkpIHtcbiAgICBkYXRhLm9mZnNldHMucG9wcGVyW29wU2lkZV0gPVxuICAgICAgZmxvb3IocmVmZXJlbmNlW29wU2lkZV0pIC0gcG9wcGVyW21lYXN1cmVtZW50XTtcbiAgfVxuICBpZiAocG9wcGVyW29wU2lkZV0gPiBmbG9vcihyZWZlcmVuY2Vbc2lkZV0pKSB7XG4gICAgZGF0YS5vZmZzZXRzLnBvcHBlcltvcFNpZGVdID0gZmxvb3IocmVmZXJlbmNlW3NpZGVdKTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuIiwiaW1wb3J0IGlzTnVtZXJpYyBmcm9tICcuLi91dGlscy9pc051bWVyaWMnO1xuaW1wb3J0IGdldENsaWVudFJlY3QgZnJvbSAnLi4vdXRpbHMvZ2V0Q2xpZW50UmVjdCc7XG5pbXBvcnQgZmluZCBmcm9tICcuLi91dGlscy9maW5kJztcblxuLyoqXG4gKiBDb252ZXJ0cyBhIHN0cmluZyBjb250YWluaW5nIHZhbHVlICsgdW5pdCBpbnRvIGEgcHggdmFsdWUgbnVtYmVyXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiB7bW9kaWZpZXJzfm9mZnNldH1cbiAqIEBwcml2YXRlXG4gKiBAYXJndW1lbnQge1N0cmluZ30gc3RyIC0gVmFsdWUgKyB1bml0IHN0cmluZ1xuICogQGFyZ3VtZW50IHtTdHJpbmd9IG1lYXN1cmVtZW50IC0gYGhlaWdodGAgb3IgYHdpZHRoYFxuICogQGFyZ3VtZW50IHtPYmplY3R9IHBvcHBlck9mZnNldHNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSByZWZlcmVuY2VPZmZzZXRzXG4gKiBAcmV0dXJucyB7TnVtYmVyfFN0cmluZ31cbiAqIFZhbHVlIGluIHBpeGVscywgb3Igb3JpZ2luYWwgc3RyaW5nIGlmIG5vIHZhbHVlcyB3ZXJlIGV4dHJhY3RlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9WYWx1ZShzdHIsIG1lYXN1cmVtZW50LCBwb3BwZXJPZmZzZXRzLCByZWZlcmVuY2VPZmZzZXRzKSB7XG4gIC8vIHNlcGFyYXRlIHZhbHVlIGZyb20gdW5pdFxuICBjb25zdCBzcGxpdCA9IHN0ci5tYXRjaCgvKCg/OlxcLXxcXCspP1xcZCpcXC4/XFxkKikoLiopLyk7XG4gIGNvbnN0IHZhbHVlID0gK3NwbGl0WzFdO1xuICBjb25zdCB1bml0ID0gc3BsaXRbMl07XG5cbiAgLy8gSWYgaXQncyBub3QgYSBudW1iZXIgaXQncyBhbiBvcGVyYXRvciwgSSBndWVzc1xuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIGlmICh1bml0LmluZGV4T2YoJyUnKSA9PT0gMCkge1xuICAgIGxldCBlbGVtZW50O1xuICAgIHN3aXRjaCAodW5pdCkge1xuICAgICAgY2FzZSAnJXAnOlxuICAgICAgICBlbGVtZW50ID0gcG9wcGVyT2Zmc2V0cztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICclJzpcbiAgICAgIGNhc2UgJyVyJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGVsZW1lbnQgPSByZWZlcmVuY2VPZmZzZXRzO1xuICAgIH1cblxuICAgIGNvbnN0IHJlY3QgPSBnZXRDbGllbnRSZWN0KGVsZW1lbnQpO1xuICAgIHJldHVybiByZWN0W21lYXN1cmVtZW50XSAvIDEwMCAqIHZhbHVlO1xuICB9IGVsc2UgaWYgKHVuaXQgPT09ICd2aCcgfHwgdW5pdCA9PT0gJ3Z3Jykge1xuICAgIC8vIGlmIGlzIGEgdmggb3IgdncsIHdlIGNhbGN1bGF0ZSB0aGUgc2l6ZSBiYXNlZCBvbiB0aGUgdmlld3BvcnRcbiAgICBsZXQgc2l6ZTtcbiAgICBpZiAodW5pdCA9PT0gJ3ZoJykge1xuICAgICAgc2l6ZSA9IE1hdGgubWF4KFxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LFxuICAgICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2l6ZSA9IE1hdGgubWF4KFxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgICAgIHdpbmRvdy5pbm5lcldpZHRoIHx8IDBcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBzaXplIC8gMTAwICogdmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgLy8gaWYgaXMgYW4gZXhwbGljaXQgcGl4ZWwgdW5pdCwgd2UgZ2V0IHJpZCBvZiB0aGUgdW5pdCBhbmQga2VlcCB0aGUgdmFsdWVcbiAgICAvLyBpZiBpcyBhbiBpbXBsaWNpdCB1bml0LCBpdCdzIHB4LCBhbmQgd2UgcmV0dXJuIGp1c3QgdGhlIHZhbHVlXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59XG5cbi8qKlxuICogUGFyc2UgYW4gYG9mZnNldGAgc3RyaW5nIHRvIGV4dHJhcG9sYXRlIGB4YCBhbmQgYHlgIG51bWVyaWMgb2Zmc2V0cy5cbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIHttb2RpZmllcnN+b2Zmc2V0fVxuICogQHByaXZhdGVcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBvZmZzZXRcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBwb3BwZXJPZmZzZXRzXG4gKiBAYXJndW1lbnQge09iamVjdH0gcmVmZXJlbmNlT2Zmc2V0c1xuICogQGFyZ3VtZW50IHtTdHJpbmd9IGJhc2VQbGFjZW1lbnRcbiAqIEByZXR1cm5zIHtBcnJheX0gYSB0d28gY2VsbHMgYXJyYXkgd2l0aCB4IGFuZCB5IG9mZnNldHMgaW4gbnVtYmVyc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VPZmZzZXQoXG4gIG9mZnNldCxcbiAgcG9wcGVyT2Zmc2V0cyxcbiAgcmVmZXJlbmNlT2Zmc2V0cyxcbiAgYmFzZVBsYWNlbWVudFxuKSB7XG4gIGNvbnN0IG9mZnNldHMgPSBbMCwgMF07XG5cbiAgLy8gVXNlIGhlaWdodCBpZiBwbGFjZW1lbnQgaXMgbGVmdCBvciByaWdodCBhbmQgaW5kZXggaXMgMCBvdGhlcndpc2UgdXNlIHdpZHRoXG4gIC8vIGluIHRoaXMgd2F5IHRoZSBmaXJzdCBvZmZzZXQgd2lsbCB1c2UgYW4gYXhpcyBhbmQgdGhlIHNlY29uZCBvbmVcbiAgLy8gd2lsbCB1c2UgdGhlIG90aGVyIG9uZVxuICBjb25zdCB1c2VIZWlnaHQgPSBbJ3JpZ2h0JywgJ2xlZnQnXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpICE9PSAtMTtcblxuICAvLyBTcGxpdCB0aGUgb2Zmc2V0IHN0cmluZyB0byBvYnRhaW4gYSBsaXN0IG9mIHZhbHVlcyBhbmQgb3BlcmFuZHNcbiAgLy8gVGhlIHJlZ2V4IGFkZHJlc3NlcyB2YWx1ZXMgd2l0aCB0aGUgcGx1cyBvciBtaW51cyBzaWduIGluIGZyb250ICgrMTAsIC0yMCwgZXRjKVxuICBjb25zdCBmcmFnbWVudHMgPSBvZmZzZXQuc3BsaXQoLyhcXCt8XFwtKS8pLm1hcChmcmFnID0+IGZyYWcudHJpbSgpKTtcblxuICAvLyBEZXRlY3QgaWYgdGhlIG9mZnNldCBzdHJpbmcgY29udGFpbnMgYSBwYWlyIG9mIHZhbHVlcyBvciBhIHNpbmdsZSBvbmVcbiAgLy8gdGhleSBjb3VsZCBiZSBzZXBhcmF0ZWQgYnkgY29tbWEgb3Igc3BhY2VcbiAgY29uc3QgZGl2aWRlciA9IGZyYWdtZW50cy5pbmRleE9mKFxuICAgIGZpbmQoZnJhZ21lbnRzLCBmcmFnID0+IGZyYWcuc2VhcmNoKC8sfFxccy8pICE9PSAtMSlcbiAgKTtcblxuICBpZiAoZnJhZ21lbnRzW2RpdmlkZXJdICYmIGZyYWdtZW50c1tkaXZpZGVyXS5pbmRleE9mKCcsJykgPT09IC0xKSB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgJ09mZnNldHMgc2VwYXJhdGVkIGJ5IHdoaXRlIHNwYWNlKHMpIGFyZSBkZXByZWNhdGVkLCB1c2UgYSBjb21tYSAoLCkgaW5zdGVhZC4nXG4gICAgKTtcbiAgfVxuXG4gIC8vIElmIGRpdmlkZXIgaXMgZm91bmQsIHdlIGRpdmlkZSB0aGUgbGlzdCBvZiB2YWx1ZXMgYW5kIG9wZXJhbmRzIHRvIGRpdmlkZVxuICAvLyB0aGVtIGJ5IG9mc2V0IFggYW5kIFkuXG4gIGNvbnN0IHNwbGl0UmVnZXggPSAvXFxzKixcXHMqfFxccysvO1xuICBsZXQgb3BzID0gZGl2aWRlciAhPT0gLTFcbiAgICA/IFtcbiAgICAgICAgZnJhZ21lbnRzXG4gICAgICAgICAgLnNsaWNlKDAsIGRpdmlkZXIpXG4gICAgICAgICAgLmNvbmNhdChbZnJhZ21lbnRzW2RpdmlkZXJdLnNwbGl0KHNwbGl0UmVnZXgpWzBdXSksXG4gICAgICAgIFtmcmFnbWVudHNbZGl2aWRlcl0uc3BsaXQoc3BsaXRSZWdleClbMV1dLmNvbmNhdChcbiAgICAgICAgICBmcmFnbWVudHMuc2xpY2UoZGl2aWRlciArIDEpXG4gICAgICAgICksXG4gICAgICBdXG4gICAgOiBbZnJhZ21lbnRzXTtcblxuICAvLyBDb252ZXJ0IHRoZSB2YWx1ZXMgd2l0aCB1bml0cyB0byBhYnNvbHV0ZSBwaXhlbHMgdG8gYWxsb3cgb3VyIGNvbXB1dGF0aW9uc1xuICBvcHMgPSBvcHMubWFwKChvcCwgaW5kZXgpID0+IHtcbiAgICAvLyBNb3N0IG9mIHRoZSB1bml0cyByZWx5IG9uIHRoZSBvcmllbnRhdGlvbiBvZiB0aGUgcG9wcGVyXG4gICAgY29uc3QgbWVhc3VyZW1lbnQgPSAoaW5kZXggPT09IDEgPyAhdXNlSGVpZ2h0IDogdXNlSGVpZ2h0KVxuICAgICAgPyAnaGVpZ2h0J1xuICAgICAgOiAnd2lkdGgnO1xuICAgIGxldCBtZXJnZVdpdGhQcmV2aW91cyA9IGZhbHNlO1xuICAgIHJldHVybiAoXG4gICAgICBvcFxuICAgICAgICAvLyBUaGlzIGFnZ3JlZ2F0ZXMgYW55IGArYCBvciBgLWAgc2lnbiB0aGF0IGFyZW4ndCBjb25zaWRlcmVkIG9wZXJhdG9yc1xuICAgICAgICAvLyBlLmcuOiAxMCArICs1ID0+IFsxMCwgKywgKzVdXG4gICAgICAgIC5yZWR1Y2UoKGEsIGIpID0+IHtcbiAgICAgICAgICBpZiAoYVthLmxlbmd0aCAtIDFdID09PSAnJyAmJiBbJysnLCAnLSddLmluZGV4T2YoYikgIT09IC0xKSB7XG4gICAgICAgICAgICBhW2EubGVuZ3RoIC0gMV0gPSBiO1xuICAgICAgICAgICAgbWVyZ2VXaXRoUHJldmlvdXMgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgICAgfSBlbHNlIGlmIChtZXJnZVdpdGhQcmV2aW91cykge1xuICAgICAgICAgICAgYVthLmxlbmd0aCAtIDFdICs9IGI7XG4gICAgICAgICAgICBtZXJnZVdpdGhQcmV2aW91cyA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBhLmNvbmNhdChiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIFtdKVxuICAgICAgICAvLyBIZXJlIHdlIGNvbnZlcnQgdGhlIHN0cmluZyB2YWx1ZXMgaW50byBudW1iZXIgdmFsdWVzIChpbiBweClcbiAgICAgICAgLm1hcChzdHIgPT4gdG9WYWx1ZShzdHIsIG1lYXN1cmVtZW50LCBwb3BwZXJPZmZzZXRzLCByZWZlcmVuY2VPZmZzZXRzKSlcbiAgICApO1xuICB9KTtcblxuICAvLyBMb29wIHRyb3VnaCB0aGUgb2Zmc2V0cyBhcnJheXMgYW5kIGV4ZWN1dGUgdGhlIG9wZXJhdGlvbnNcbiAgb3BzLmZvckVhY2goKG9wLCBpbmRleCkgPT4ge1xuICAgIG9wLmZvckVhY2goKGZyYWcsIGluZGV4MikgPT4ge1xuICAgICAgaWYgKGlzTnVtZXJpYyhmcmFnKSkge1xuICAgICAgICBvZmZzZXRzW2luZGV4XSArPSBmcmFnICogKG9wW2luZGV4MiAtIDFdID09PSAnLScgPyAtMSA6IDEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIG9mZnNldHM7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQGFyZ3VtZW50IHtOdW1iZXJ8U3RyaW5nfSBvcHRpb25zLm9mZnNldD0wXG4gKiBUaGUgb2Zmc2V0IHZhbHVlIGFzIGRlc2NyaWJlZCBpbiB0aGUgbW9kaWZpZXIgZGVzY3JpcHRpb25cbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb2Zmc2V0KGRhdGEsIHsgb2Zmc2V0IH0pIHtcbiAgY29uc3QgeyBwbGFjZW1lbnQsIG9mZnNldHM6IHsgcG9wcGVyLCByZWZlcmVuY2UgfSB9ID0gZGF0YTtcbiAgY29uc3QgYmFzZVBsYWNlbWVudCA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuXG4gIGxldCBvZmZzZXRzO1xuICBpZiAoaXNOdW1lcmljKCtvZmZzZXQpKSB7XG4gICAgb2Zmc2V0cyA9IFsrb2Zmc2V0LCAwXTtcbiAgfSBlbHNlIHtcbiAgICBvZmZzZXRzID0gcGFyc2VPZmZzZXQob2Zmc2V0LCBwb3BwZXIsIHJlZmVyZW5jZSwgYmFzZVBsYWNlbWVudCk7XG4gIH1cblxuICBpZiAoYmFzZVBsYWNlbWVudCA9PT0gJ2xlZnQnKSB7XG4gICAgcG9wcGVyLnRvcCArPSBvZmZzZXRzWzBdO1xuICAgIHBvcHBlci5sZWZ0IC09IG9mZnNldHNbMV07XG4gIH0gZWxzZSBpZiAoYmFzZVBsYWNlbWVudCA9PT0gJ3JpZ2h0Jykge1xuICAgIHBvcHBlci50b3AgKz0gb2Zmc2V0c1swXTtcbiAgICBwb3BwZXIubGVmdCArPSBvZmZzZXRzWzFdO1xuICB9IGVsc2UgaWYgKGJhc2VQbGFjZW1lbnQgPT09ICd0b3AnKSB7XG4gICAgcG9wcGVyLmxlZnQgKz0gb2Zmc2V0c1swXTtcbiAgICBwb3BwZXIudG9wIC09IG9mZnNldHNbMV07XG4gIH0gZWxzZSBpZiAoYmFzZVBsYWNlbWVudCA9PT0gJ2JvdHRvbScpIHtcbiAgICBwb3BwZXIubGVmdCArPSBvZmZzZXRzWzBdO1xuICAgIHBvcHBlci50b3AgKz0gb2Zmc2V0c1sxXTtcbiAgfVxuXG4gIGRhdGEucG9wcGVyID0gcG9wcGVyO1xuICByZXR1cm4gZGF0YTtcbn1cbiIsImltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSAnLi4vdXRpbHMvZ2V0T2Zmc2V0UGFyZW50JztcbmltcG9ydCBnZXRCb3VuZGFyaWVzIGZyb20gJy4uL3V0aWxzL2dldEJvdW5kYXJpZXMnO1xuaW1wb3J0IGdldFN1cHBvcnRlZFByb3BlcnR5TmFtZSBmcm9tICcuLi91dGlscy9nZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUnO1xuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmV2ZW50T3ZlcmZsb3coZGF0YSwgb3B0aW9ucykge1xuICBsZXQgYm91bmRhcmllc0VsZW1lbnQgPVxuICAgIG9wdGlvbnMuYm91bmRhcmllc0VsZW1lbnQgfHwgZ2V0T2Zmc2V0UGFyZW50KGRhdGEuaW5zdGFuY2UucG9wcGVyKTtcblxuICAvLyBJZiBvZmZzZXRQYXJlbnQgaXMgdGhlIHJlZmVyZW5jZSBlbGVtZW50LCB3ZSByZWFsbHkgd2FudCB0b1xuICAvLyBnbyBvbmUgc3RlcCB1cCBhbmQgdXNlIHRoZSBuZXh0IG9mZnNldFBhcmVudCBhcyByZWZlcmVuY2UgdG9cbiAgLy8gYXZvaWQgdG8gbWFrZSB0aGlzIG1vZGlmaWVyIGNvbXBsZXRlbHkgdXNlbGVzcyBhbmQgbG9vayBsaWtlIGJyb2tlblxuICBpZiAoZGF0YS5pbnN0YW5jZS5yZWZlcmVuY2UgPT09IGJvdW5kYXJpZXNFbGVtZW50KSB7XG4gICAgYm91bmRhcmllc0VsZW1lbnQgPSBnZXRPZmZzZXRQYXJlbnQoYm91bmRhcmllc0VsZW1lbnQpO1xuICB9XG5cbiAgLy8gTk9URTogRE9NIGFjY2VzcyBoZXJlXG4gIC8vIHJlc2V0cyB0aGUgcG9wcGVyJ3MgcG9zaXRpb24gc28gdGhhdCB0aGUgZG9jdW1lbnQgc2l6ZSBjYW4gYmUgY2FsY3VsYXRlZCBleGNsdWRpbmdcbiAgLy8gdGhlIHNpemUgb2YgdGhlIHBvcHBlciBlbGVtZW50IGl0c2VsZlxuICBjb25zdCB0cmFuc2Zvcm1Qcm9wID0gZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lKCd0cmFuc2Zvcm0nKTtcbiAgY29uc3QgcG9wcGVyU3R5bGVzID0gZGF0YS5pbnN0YW5jZS5wb3BwZXIuc3R5bGU7IC8vIGFzc2lnbm1lbnQgdG8gaGVscCBtaW5pZmljYXRpb25cbiAgY29uc3QgeyB0b3AsIGxlZnQsIFt0cmFuc2Zvcm1Qcm9wXTogdHJhbnNmb3JtIH0gPSBwb3BwZXJTdHlsZXM7XG4gIHBvcHBlclN0eWxlcy50b3AgPSAnJztcbiAgcG9wcGVyU3R5bGVzLmxlZnQgPSAnJztcbiAgcG9wcGVyU3R5bGVzW3RyYW5zZm9ybVByb3BdID0gJyc7XG5cbiAgY29uc3QgYm91bmRhcmllcyA9IGdldEJvdW5kYXJpZXMoXG4gICAgZGF0YS5pbnN0YW5jZS5wb3BwZXIsXG4gICAgZGF0YS5pbnN0YW5jZS5yZWZlcmVuY2UsXG4gICAgb3B0aW9ucy5wYWRkaW5nLFxuICAgIGJvdW5kYXJpZXNFbGVtZW50LFxuICAgIGRhdGEucG9zaXRpb25GaXhlZFxuICApO1xuXG4gIC8vIE5PVEU6IERPTSBhY2Nlc3MgaGVyZVxuICAvLyByZXN0b3JlcyB0aGUgb3JpZ2luYWwgc3R5bGUgcHJvcGVydGllcyBhZnRlciB0aGUgb2Zmc2V0cyBoYXZlIGJlZW4gY29tcHV0ZWRcbiAgcG9wcGVyU3R5bGVzLnRvcCA9IHRvcDtcbiAgcG9wcGVyU3R5bGVzLmxlZnQgPSBsZWZ0O1xuICBwb3BwZXJTdHlsZXNbdHJhbnNmb3JtUHJvcF0gPSB0cmFuc2Zvcm07XG5cbiAgb3B0aW9ucy5ib3VuZGFyaWVzID0gYm91bmRhcmllcztcblxuICBjb25zdCBvcmRlciA9IG9wdGlvbnMucHJpb3JpdHk7XG4gIGxldCBwb3BwZXIgPSBkYXRhLm9mZnNldHMucG9wcGVyO1xuXG4gIGNvbnN0IGNoZWNrID0ge1xuICAgIHByaW1hcnkocGxhY2VtZW50KSB7XG4gICAgICBsZXQgdmFsdWUgPSBwb3BwZXJbcGxhY2VtZW50XTtcbiAgICAgIGlmIChcbiAgICAgICAgcG9wcGVyW3BsYWNlbWVudF0gPCBib3VuZGFyaWVzW3BsYWNlbWVudF0gJiZcbiAgICAgICAgIW9wdGlvbnMuZXNjYXBlV2l0aFJlZmVyZW5jZVxuICAgICAgKSB7XG4gICAgICAgIHZhbHVlID0gTWF0aC5tYXgocG9wcGVyW3BsYWNlbWVudF0sIGJvdW5kYXJpZXNbcGxhY2VtZW50XSk7XG4gICAgICB9XG4gICAgICByZXR1cm4geyBbcGxhY2VtZW50XTogdmFsdWUgfTtcbiAgICB9LFxuICAgIHNlY29uZGFyeShwbGFjZW1lbnQpIHtcbiAgICAgIGNvbnN0IG1haW5TaWRlID0gcGxhY2VtZW50ID09PSAncmlnaHQnID8gJ2xlZnQnIDogJ3RvcCc7XG4gICAgICBsZXQgdmFsdWUgPSBwb3BwZXJbbWFpblNpZGVdO1xuICAgICAgaWYgKFxuICAgICAgICBwb3BwZXJbcGxhY2VtZW50XSA+IGJvdW5kYXJpZXNbcGxhY2VtZW50XSAmJlxuICAgICAgICAhb3B0aW9ucy5lc2NhcGVXaXRoUmVmZXJlbmNlXG4gICAgICApIHtcbiAgICAgICAgdmFsdWUgPSBNYXRoLm1pbihcbiAgICAgICAgICBwb3BwZXJbbWFpblNpZGVdLFxuICAgICAgICAgIGJvdW5kYXJpZXNbcGxhY2VtZW50XSAtXG4gICAgICAgICAgICAocGxhY2VtZW50ID09PSAncmlnaHQnID8gcG9wcGVyLndpZHRoIDogcG9wcGVyLmhlaWdodClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IFttYWluU2lkZV06IHZhbHVlIH07XG4gICAgfSxcbiAgfTtcblxuICBvcmRlci5mb3JFYWNoKHBsYWNlbWVudCA9PiB7XG4gICAgY29uc3Qgc2lkZSA9XG4gICAgICBbJ2xlZnQnLCAndG9wJ10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMSA/ICdwcmltYXJ5JyA6ICdzZWNvbmRhcnknO1xuICAgIHBvcHBlciA9IHsgLi4ucG9wcGVyLCAuLi5jaGVja1tzaWRlXShwbGFjZW1lbnQpIH07XG4gIH0pO1xuXG4gIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSBwb3BwZXI7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG4iLCIvKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaGlmdChkYXRhKSB7XG4gIGNvbnN0IHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50O1xuICBjb25zdCBiYXNlUGxhY2VtZW50ID0gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG4gIGNvbnN0IHNoaWZ0dmFyaWF0aW9uID0gcGxhY2VtZW50LnNwbGl0KCctJylbMV07XG5cbiAgLy8gaWYgc2hpZnQgc2hpZnR2YXJpYXRpb24gaXMgc3BlY2lmaWVkLCBydW4gdGhlIG1vZGlmaWVyXG4gIGlmIChzaGlmdHZhcmlhdGlvbikge1xuICAgIGNvbnN0IHsgcmVmZXJlbmNlLCBwb3BwZXIgfSA9IGRhdGEub2Zmc2V0cztcbiAgICBjb25zdCBpc1ZlcnRpY2FsID0gWydib3R0b20nLCAndG9wJ10uaW5kZXhPZihiYXNlUGxhY2VtZW50KSAhPT0gLTE7XG4gICAgY29uc3Qgc2lkZSA9IGlzVmVydGljYWwgPyAnbGVmdCcgOiAndG9wJztcbiAgICBjb25zdCBtZWFzdXJlbWVudCA9IGlzVmVydGljYWwgPyAnd2lkdGgnIDogJ2hlaWdodCc7XG5cbiAgICBjb25zdCBzaGlmdE9mZnNldHMgPSB7XG4gICAgICBzdGFydDogeyBbc2lkZV06IHJlZmVyZW5jZVtzaWRlXSB9LFxuICAgICAgZW5kOiB7XG4gICAgICAgIFtzaWRlXTogcmVmZXJlbmNlW3NpZGVdICsgcmVmZXJlbmNlW21lYXN1cmVtZW50XSAtIHBvcHBlclttZWFzdXJlbWVudF0sXG4gICAgICB9LFxuICAgIH07XG5cbiAgICBkYXRhLm9mZnNldHMucG9wcGVyID0geyAuLi5wb3BwZXIsIC4uLnNoaWZ0T2Zmc2V0c1tzaGlmdHZhcmlhdGlvbl0gfTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuIiwiaW1wb3J0IGlzTW9kaWZpZXJSZXF1aXJlZCBmcm9tICcuLi91dGlscy9pc01vZGlmaWVyUmVxdWlyZWQnO1xuaW1wb3J0IGZpbmQgZnJvbSAnLi4vdXRpbHMvZmluZCc7XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoaWRlKGRhdGEpIHtcbiAgaWYgKCFpc01vZGlmaWVyUmVxdWlyZWQoZGF0YS5pbnN0YW5jZS5tb2RpZmllcnMsICdoaWRlJywgJ3ByZXZlbnRPdmVyZmxvdycpKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBjb25zdCByZWZSZWN0ID0gZGF0YS5vZmZzZXRzLnJlZmVyZW5jZTtcbiAgY29uc3QgYm91bmQgPSBmaW5kKFxuICAgIGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLFxuICAgIG1vZGlmaWVyID0+IG1vZGlmaWVyLm5hbWUgPT09ICdwcmV2ZW50T3ZlcmZsb3cnXG4gICkuYm91bmRhcmllcztcblxuICBpZiAoXG4gICAgcmVmUmVjdC5ib3R0b20gPCBib3VuZC50b3AgfHxcbiAgICByZWZSZWN0LmxlZnQgPiBib3VuZC5yaWdodCB8fFxuICAgIHJlZlJlY3QudG9wID4gYm91bmQuYm90dG9tIHx8XG4gICAgcmVmUmVjdC5yaWdodCA8IGJvdW5kLmxlZnRcbiAgKSB7XG4gICAgLy8gQXZvaWQgdW5uZWNlc3NhcnkgRE9NIGFjY2VzcyBpZiB2aXNpYmlsaXR5IGhhc24ndCBjaGFuZ2VkXG4gICAgaWYgKGRhdGEuaGlkZSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgZGF0YS5oaWRlID0gdHJ1ZTtcbiAgICBkYXRhLmF0dHJpYnV0ZXNbJ3gtb3V0LW9mLWJvdW5kYXJpZXMnXSA9ICcnO1xuICB9IGVsc2Uge1xuICAgIC8vIEF2b2lkIHVubmVjZXNzYXJ5IERPTSBhY2Nlc3MgaWYgdmlzaWJpbGl0eSBoYXNuJ3QgY2hhbmdlZFxuICAgIGlmIChkYXRhLmhpZGUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBkYXRhLmhpZGUgPSBmYWxzZTtcbiAgICBkYXRhLmF0dHJpYnV0ZXNbJ3gtb3V0LW9mLWJvdW5kYXJpZXMnXSA9IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG4iLCJpbXBvcnQgZ2V0Q2xpZW50UmVjdCBmcm9tICcuLi91dGlscy9nZXRDbGllbnRSZWN0JztcbmltcG9ydCBnZXRPcHBvc2l0ZVBsYWNlbWVudCBmcm9tICcuLi91dGlscy9nZXRPcHBvc2l0ZVBsYWNlbWVudCc7XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlubmVyKGRhdGEpIHtcbiAgY29uc3QgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQ7XG4gIGNvbnN0IGJhc2VQbGFjZW1lbnQgPSBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgY29uc3QgeyBwb3BwZXIsIHJlZmVyZW5jZSB9ID0gZGF0YS5vZmZzZXRzO1xuICBjb25zdCBpc0hvcml6ID0gWydsZWZ0JywgJ3JpZ2h0J10uaW5kZXhPZihiYXNlUGxhY2VtZW50KSAhPT0gLTE7XG5cbiAgY29uc3Qgc3VidHJhY3RMZW5ndGggPSBbJ3RvcCcsICdsZWZ0J10uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA9PT0gLTE7XG5cbiAgcG9wcGVyW2lzSG9yaXogPyAnbGVmdCcgOiAndG9wJ10gPVxuICAgIHJlZmVyZW5jZVtiYXNlUGxhY2VtZW50XSAtXG4gICAgKHN1YnRyYWN0TGVuZ3RoID8gcG9wcGVyW2lzSG9yaXogPyAnd2lkdGgnIDogJ2hlaWdodCddIDogMCk7XG5cbiAgZGF0YS5wbGFjZW1lbnQgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICBkYXRhLm9mZnNldHMucG9wcGVyID0gZ2V0Q2xpZW50UmVjdChwb3BwZXIpO1xuXG4gIHJldHVybiBkYXRhO1xufVxuIiwiaW1wb3J0IGFwcGx5U3R5bGUsIHsgYXBwbHlTdHlsZU9uTG9hZCB9IGZyb20gJy4vYXBwbHlTdHlsZSc7XG5pbXBvcnQgY29tcHV0ZVN0eWxlIGZyb20gJy4vY29tcHV0ZVN0eWxlJztcbmltcG9ydCBhcnJvdyBmcm9tICcuL2Fycm93JztcbmltcG9ydCBmbGlwIGZyb20gJy4vZmxpcCc7XG5pbXBvcnQga2VlcFRvZ2V0aGVyIGZyb20gJy4va2VlcFRvZ2V0aGVyJztcbmltcG9ydCBvZmZzZXQgZnJvbSAnLi9vZmZzZXQnO1xuaW1wb3J0IHByZXZlbnRPdmVyZmxvdyBmcm9tICcuL3ByZXZlbnRPdmVyZmxvdyc7XG5pbXBvcnQgc2hpZnQgZnJvbSAnLi9zaGlmdCc7XG5pbXBvcnQgaGlkZSBmcm9tICcuL2hpZGUnO1xuaW1wb3J0IGlubmVyIGZyb20gJy4vaW5uZXInO1xuXG4vKipcbiAqIE1vZGlmaWVyIGZ1bmN0aW9uLCBlYWNoIG1vZGlmaWVyIGNhbiBoYXZlIGEgZnVuY3Rpb24gb2YgdGhpcyB0eXBlIGFzc2lnbmVkXG4gKiB0byBpdHMgYGZuYCBwcm9wZXJ0eS48YnIgLz5cbiAqIFRoZXNlIGZ1bmN0aW9ucyB3aWxsIGJlIGNhbGxlZCBvbiBlYWNoIHVwZGF0ZSwgdGhpcyBtZWFucyB0aGF0IHlvdSBtdXN0XG4gKiBtYWtlIHN1cmUgdGhleSBhcmUgcGVyZm9ybWFudCBlbm91Z2ggdG8gYXZvaWQgcGVyZm9ybWFuY2UgYm90dGxlbmVja3MuXG4gKlxuICogQGZ1bmN0aW9uIE1vZGlmaWVyRm5cbiAqIEBhcmd1bWVudCB7ZGF0YU9iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7ZGF0YU9iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5cbi8qKlxuICogTW9kaWZpZXJzIGFyZSBwbHVnaW5zIHVzZWQgdG8gYWx0ZXIgdGhlIGJlaGF2aW9yIG9mIHlvdXIgcG9wcGVycy48YnIgLz5cbiAqIFBvcHBlci5qcyB1c2VzIGEgc2V0IG9mIDkgbW9kaWZpZXJzIHRvIHByb3ZpZGUgYWxsIHRoZSBiYXNpYyBmdW5jdGlvbmFsaXRpZXNcbiAqIG5lZWRlZCBieSB0aGUgbGlicmFyeS5cbiAqXG4gKiBVc3VhbGx5IHlvdSBkb24ndCB3YW50IHRvIG92ZXJyaWRlIHRoZSBgb3JkZXJgLCBgZm5gIGFuZCBgb25Mb2FkYCBwcm9wcy5cbiAqIEFsbCB0aGUgb3RoZXIgcHJvcGVydGllcyBhcmUgY29uZmlndXJhdGlvbnMgdGhhdCBjb3VsZCBiZSB0d2Vha2VkLlxuICogQG5hbWVzcGFjZSBtb2RpZmllcnNcbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICAvKipcbiAgICogTW9kaWZpZXIgdXNlZCB0byBzaGlmdCB0aGUgcG9wcGVyIG9uIHRoZSBzdGFydCBvciBlbmQgb2YgaXRzIHJlZmVyZW5jZVxuICAgKiBlbGVtZW50LjxiciAvPlxuICAgKiBJdCB3aWxsIHJlYWQgdGhlIHZhcmlhdGlvbiBvZiB0aGUgYHBsYWNlbWVudGAgcHJvcGVydHkuPGJyIC8+XG4gICAqIEl0IGNhbiBiZSBvbmUgZWl0aGVyIGAtZW5kYCBvciBgLXN0YXJ0YC5cbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIHNoaWZ0OiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTEwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogMTAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogc2hpZnQsXG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoZSBgb2Zmc2V0YCBtb2RpZmllciBjYW4gc2hpZnQgeW91ciBwb3BwZXIgb24gYm90aCBpdHMgYXhpcy5cbiAgICpcbiAgICogSXQgYWNjZXB0cyB0aGUgZm9sbG93aW5nIHVuaXRzOlxuICAgKiAtIGBweGAgb3IgdW5pdC1sZXNzLCBpbnRlcnByZXRlZCBhcyBwaXhlbHNcbiAgICogLSBgJWAgb3IgYCVyYCwgcGVyY2VudGFnZSByZWxhdGl2ZSB0byB0aGUgbGVuZ3RoIG9mIHRoZSByZWZlcmVuY2UgZWxlbWVudFxuICAgKiAtIGAlcGAsIHBlcmNlbnRhZ2UgcmVsYXRpdmUgdG8gdGhlIGxlbmd0aCBvZiB0aGUgcG9wcGVyIGVsZW1lbnRcbiAgICogLSBgdndgLCBDU1Mgdmlld3BvcnQgd2lkdGggdW5pdFxuICAgKiAtIGB2aGAsIENTUyB2aWV3cG9ydCBoZWlnaHQgdW5pdFxuICAgKlxuICAgKiBGb3IgbGVuZ3RoIGlzIGludGVuZGVkIHRoZSBtYWluIGF4aXMgcmVsYXRpdmUgdG8gdGhlIHBsYWNlbWVudCBvZiB0aGUgcG9wcGVyLjxiciAvPlxuICAgKiBUaGlzIG1lYW5zIHRoYXQgaWYgdGhlIHBsYWNlbWVudCBpcyBgdG9wYCBvciBgYm90dG9tYCwgdGhlIGxlbmd0aCB3aWxsIGJlIHRoZVxuICAgKiBgd2lkdGhgLiBJbiBjYXNlIG9mIGBsZWZ0YCBvciBgcmlnaHRgLCBpdCB3aWxsIGJlIHRoZSBgaGVpZ2h0YC5cbiAgICpcbiAgICogWW91IGNhbiBwcm92aWRlIGEgc2luZ2xlIHZhbHVlIChhcyBgTnVtYmVyYCBvciBgU3RyaW5nYCksIG9yIGEgcGFpciBvZiB2YWx1ZXNcbiAgICogYXMgYFN0cmluZ2AgZGl2aWRlZCBieSBhIGNvbW1hIG9yIG9uZSAob3IgbW9yZSkgd2hpdGUgc3BhY2VzLjxiciAvPlxuICAgKiBUaGUgbGF0dGVyIGlzIGEgZGVwcmVjYXRlZCBtZXRob2QgYmVjYXVzZSBpdCBsZWFkcyB0byBjb25mdXNpb24gYW5kIHdpbGwgYmVcbiAgICogcmVtb3ZlZCBpbiB2Mi48YnIgLz5cbiAgICogQWRkaXRpb25hbGx5LCBpdCBhY2NlcHRzIGFkZGl0aW9ucyBhbmQgc3VidHJhY3Rpb25zIGJldHdlZW4gZGlmZmVyZW50IHVuaXRzLlxuICAgKiBOb3RlIHRoYXQgbXVsdGlwbGljYXRpb25zIGFuZCBkaXZpc2lvbnMgYXJlbid0IHN1cHBvcnRlZC5cbiAgICpcbiAgICogVmFsaWQgZXhhbXBsZXMgYXJlOlxuICAgKiBgYGBcbiAgICogMTBcbiAgICogJzEwJSdcbiAgICogJzEwLCAxMCdcbiAgICogJzEwJSwgMTAnXG4gICAqICcxMCArIDEwJSdcbiAgICogJzEwIC0gNXZoICsgMyUnXG4gICAqICctMTBweCArIDV2aCwgNXB4IC0gNiUnXG4gICAqIGBgYFxuICAgKiA+ICoqTkIqKjogSWYgeW91IGRlc2lyZSB0byBhcHBseSBvZmZzZXRzIHRvIHlvdXIgcG9wcGVycyBpbiBhIHdheSB0aGF0IG1heSBtYWtlIHRoZW0gb3ZlcmxhcFxuICAgKiA+IHdpdGggdGhlaXIgcmVmZXJlbmNlIGVsZW1lbnQsIHVuZm9ydHVuYXRlbHksIHlvdSB3aWxsIGhhdmUgdG8gZGlzYWJsZSB0aGUgYGZsaXBgIG1vZGlmaWVyLlxuICAgKiA+IFlvdSBjYW4gcmVhZCBtb3JlIG9uIHRoaXMgYXQgdGhpcyBbaXNzdWVdKGh0dHBzOi8vZ2l0aHViLmNvbS9GZXpWcmFzdGEvcG9wcGVyLmpzL2lzc3Vlcy8zNzMpLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgb2Zmc2V0OiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTIwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogMjAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogb2Zmc2V0LFxuICAgIC8qKiBAcHJvcCB7TnVtYmVyfFN0cmluZ30gb2Zmc2V0PTBcbiAgICAgKiBUaGUgb2Zmc2V0IHZhbHVlIGFzIGRlc2NyaWJlZCBpbiB0aGUgbW9kaWZpZXIgZGVzY3JpcHRpb25cbiAgICAgKi9cbiAgICBvZmZzZXQ6IDAsXG4gIH0sXG5cbiAgLyoqXG4gICAqIE1vZGlmaWVyIHVzZWQgdG8gcHJldmVudCB0aGUgcG9wcGVyIGZyb20gYmVpbmcgcG9zaXRpb25lZCBvdXRzaWRlIHRoZSBib3VuZGFyeS5cbiAgICpcbiAgICogQSBzY2VuYXJpbyBleGlzdHMgd2hlcmUgdGhlIHJlZmVyZW5jZSBpdHNlbGYgaXMgbm90IHdpdGhpbiB0aGUgYm91bmRhcmllcy48YnIgLz5cbiAgICogV2UgY2FuIHNheSBpdCBoYXMgXCJlc2NhcGVkIHRoZSBib3VuZGFyaWVzXCIg4oCUIG9yIGp1c3QgXCJlc2NhcGVkXCIuPGJyIC8+XG4gICAqIEluIHRoaXMgY2FzZSB3ZSBuZWVkIHRvIGRlY2lkZSB3aGV0aGVyIHRoZSBwb3BwZXIgc2hvdWxkIGVpdGhlcjpcbiAgICpcbiAgICogLSBkZXRhY2ggZnJvbSB0aGUgcmVmZXJlbmNlIGFuZCByZW1haW4gXCJ0cmFwcGVkXCIgaW4gdGhlIGJvdW5kYXJpZXMsIG9yXG4gICAqIC0gaWYgaXQgc2hvdWxkIGlnbm9yZSB0aGUgYm91bmRhcnkgYW5kIFwiZXNjYXBlIHdpdGggaXRzIHJlZmVyZW5jZVwiXG4gICAqXG4gICAqIFdoZW4gYGVzY2FwZVdpdGhSZWZlcmVuY2VgIGlzIHNldCB0b2B0cnVlYCBhbmQgcmVmZXJlbmNlIGlzIGNvbXBsZXRlbHlcbiAgICogb3V0c2lkZSBpdHMgYm91bmRhcmllcywgdGhlIHBvcHBlciB3aWxsIG92ZXJmbG93IChvciBjb21wbGV0ZWx5IGxlYXZlKVxuICAgKiB0aGUgYm91bmRhcmllcyBpbiBvcmRlciB0byByZW1haW4gYXR0YWNoZWQgdG8gdGhlIGVkZ2Ugb2YgdGhlIHJlZmVyZW5jZS5cbiAgICpcbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIHByZXZlbnRPdmVyZmxvdzoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj0zMDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDMwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IHByZXZlbnRPdmVyZmxvdyxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7QXJyYXl9IFtwcmlvcml0eT1bJ2xlZnQnLCdyaWdodCcsJ3RvcCcsJ2JvdHRvbSddXVxuICAgICAqIFBvcHBlciB3aWxsIHRyeSB0byBwcmV2ZW50IG92ZXJmbG93IGZvbGxvd2luZyB0aGVzZSBwcmlvcml0aWVzIGJ5IGRlZmF1bHQsXG4gICAgICogdGhlbiwgaXQgY291bGQgb3ZlcmZsb3cgb24gdGhlIGxlZnQgYW5kIG9uIHRvcCBvZiB0aGUgYGJvdW5kYXJpZXNFbGVtZW50YFxuICAgICAqL1xuICAgIHByaW9yaXR5OiBbJ2xlZnQnLCAncmlnaHQnLCAndG9wJywgJ2JvdHRvbSddLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtudW1iZXJ9IHBhZGRpbmc9NVxuICAgICAqIEFtb3VudCBvZiBwaXhlbCB1c2VkIHRvIGRlZmluZSBhIG1pbmltdW0gZGlzdGFuY2UgYmV0d2VlbiB0aGUgYm91bmRhcmllc1xuICAgICAqIGFuZCB0aGUgcG9wcGVyLiBUaGlzIG1ha2VzIHN1cmUgdGhlIHBvcHBlciBhbHdheXMgaGFzIGEgbGl0dGxlIHBhZGRpbmdcbiAgICAgKiBiZXR3ZWVuIHRoZSBlZGdlcyBvZiBpdHMgY29udGFpbmVyXG4gICAgICovXG4gICAgcGFkZGluZzogNSxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7U3RyaW5nfEhUTUxFbGVtZW50fSBib3VuZGFyaWVzRWxlbWVudD0nc2Nyb2xsUGFyZW50J1xuICAgICAqIEJvdW5kYXJpZXMgdXNlZCBieSB0aGUgbW9kaWZpZXIuIENhbiBiZSBgc2Nyb2xsUGFyZW50YCwgYHdpbmRvd2AsXG4gICAgICogYHZpZXdwb3J0YCBvciBhbnkgRE9NIGVsZW1lbnQuXG4gICAgICovXG4gICAgYm91bmRhcmllc0VsZW1lbnQ6ICdzY3JvbGxQYXJlbnQnLFxuICB9LFxuXG4gIC8qKlxuICAgKiBNb2RpZmllciB1c2VkIHRvIG1ha2Ugc3VyZSB0aGUgcmVmZXJlbmNlIGFuZCBpdHMgcG9wcGVyIHN0YXkgbmVhciBlYWNoIG90aGVyXG4gICAqIHdpdGhvdXQgbGVhdmluZyBhbnkgZ2FwIGJldHdlZW4gdGhlIHR3by4gRXNwZWNpYWxseSB1c2VmdWwgd2hlbiB0aGUgYXJyb3cgaXNcbiAgICogZW5hYmxlZCBhbmQgeW91IHdhbnQgdG8gZW5zdXJlIHRoYXQgaXQgcG9pbnRzIHRvIGl0cyByZWZlcmVuY2UgZWxlbWVudC5cbiAgICogSXQgY2FyZXMgb25seSBhYm91dCB0aGUgZmlyc3QgYXhpcy4gWW91IGNhbiBzdGlsbCBoYXZlIHBvcHBlcnMgd2l0aCBtYXJnaW5cbiAgICogYmV0d2VlbiB0aGUgcG9wcGVyIGFuZCBpdHMgcmVmZXJlbmNlIGVsZW1lbnQuXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBrZWVwVG9nZXRoZXI6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9NDAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA0MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBrZWVwVG9nZXRoZXIsXG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoaXMgbW9kaWZpZXIgaXMgdXNlZCB0byBtb3ZlIHRoZSBgYXJyb3dFbGVtZW50YCBvZiB0aGUgcG9wcGVyIHRvIG1ha2VcbiAgICogc3VyZSBpdCBpcyBwb3NpdGlvbmVkIGJldHdlZW4gdGhlIHJlZmVyZW5jZSBlbGVtZW50IGFuZCBpdHMgcG9wcGVyIGVsZW1lbnQuXG4gICAqIEl0IHdpbGwgcmVhZCB0aGUgb3V0ZXIgc2l6ZSBvZiB0aGUgYGFycm93RWxlbWVudGAgbm9kZSB0byBkZXRlY3QgaG93IG1hbnlcbiAgICogcGl4ZWxzIG9mIGNvbmp1bmN0aW9uIGFyZSBuZWVkZWQuXG4gICAqXG4gICAqIEl0IGhhcyBubyBlZmZlY3QgaWYgbm8gYGFycm93RWxlbWVudGAgaXMgcHJvdmlkZWQuXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBhcnJvdzoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj01MDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDUwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IGFycm93LFxuICAgIC8qKiBAcHJvcCB7U3RyaW5nfEhUTUxFbGVtZW50fSBlbGVtZW50PSdbeC1hcnJvd10nIC0gU2VsZWN0b3Igb3Igbm9kZSB1c2VkIGFzIGFycm93ICovXG4gICAgZWxlbWVudDogJ1t4LWFycm93XScsXG4gIH0sXG5cbiAgLyoqXG4gICAqIE1vZGlmaWVyIHVzZWQgdG8gZmxpcCB0aGUgcG9wcGVyJ3MgcGxhY2VtZW50IHdoZW4gaXQgc3RhcnRzIHRvIG92ZXJsYXAgaXRzXG4gICAqIHJlZmVyZW5jZSBlbGVtZW50LlxuICAgKlxuICAgKiBSZXF1aXJlcyB0aGUgYHByZXZlbnRPdmVyZmxvd2AgbW9kaWZpZXIgYmVmb3JlIGl0IGluIG9yZGVyIHRvIHdvcmsuXG4gICAqXG4gICAqICoqTk9URToqKiB0aGlzIG1vZGlmaWVyIHdpbGwgaW50ZXJydXB0IHRoZSBjdXJyZW50IHVwZGF0ZSBjeWNsZSBhbmQgd2lsbFxuICAgKiByZXN0YXJ0IGl0IGlmIGl0IGRldGVjdHMgdGhlIG5lZWQgdG8gZmxpcCB0aGUgcGxhY2VtZW50LlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgZmxpcDoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj02MDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDYwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IGZsaXAsXG4gICAgLyoqXG4gICAgICogQHByb3Age1N0cmluZ3xBcnJheX0gYmVoYXZpb3I9J2ZsaXAnXG4gICAgICogVGhlIGJlaGF2aW9yIHVzZWQgdG8gY2hhbmdlIHRoZSBwb3BwZXIncyBwbGFjZW1lbnQuIEl0IGNhbiBiZSBvbmUgb2ZcbiAgICAgKiBgZmxpcGAsIGBjbG9ja3dpc2VgLCBgY291bnRlcmNsb2Nrd2lzZWAgb3IgYW4gYXJyYXkgd2l0aCBhIGxpc3Qgb2YgdmFsaWRcbiAgICAgKiBwbGFjZW1lbnRzICh3aXRoIG9wdGlvbmFsIHZhcmlhdGlvbnMpXG4gICAgICovXG4gICAgYmVoYXZpb3I6ICdmbGlwJyxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7bnVtYmVyfSBwYWRkaW5nPTVcbiAgICAgKiBUaGUgcG9wcGVyIHdpbGwgZmxpcCBpZiBpdCBoaXRzIHRoZSBlZGdlcyBvZiB0aGUgYGJvdW5kYXJpZXNFbGVtZW50YFxuICAgICAqL1xuICAgIHBhZGRpbmc6IDUsXG4gICAgLyoqXG4gICAgICogQHByb3Age1N0cmluZ3xIVE1MRWxlbWVudH0gYm91bmRhcmllc0VsZW1lbnQ9J3ZpZXdwb3J0J1xuICAgICAqIFRoZSBlbGVtZW50IHdoaWNoIHdpbGwgZGVmaW5lIHRoZSBib3VuZGFyaWVzIG9mIHRoZSBwb3BwZXIgcG9zaXRpb24uXG4gICAgICogVGhlIHBvcHBlciB3aWxsIG5ldmVyIGJlIHBsYWNlZCBvdXRzaWRlIG9mIHRoZSBkZWZpbmVkIGJvdW5kYXJpZXNcbiAgICAgKiAoZXhjZXB0IGlmIGBrZWVwVG9nZXRoZXJgIGlzIGVuYWJsZWQpXG4gICAgICovXG4gICAgYm91bmRhcmllc0VsZW1lbnQ6ICd2aWV3cG9ydCcsXG4gICAgLyoqXG4gICAgICogQHByb3Age0Jvb2xlYW59IGZsaXBWYXJpYXRpb25zPWZhbHNlXG4gICAgICogVGhlIHBvcHBlciB3aWxsIHN3aXRjaCBwbGFjZW1lbnQgdmFyaWF0aW9uIGJldHdlZW4gYC1zdGFydGAgYW5kIGAtZW5kYCB3aGVuXG4gICAgICogdGhlIHJlZmVyZW5jZSBlbGVtZW50IG92ZXJsYXBzIGl0cyBib3VuZGFyaWVzLlxuICAgICAqXG4gICAgICogVGhlIG9yaWdpbmFsIHBsYWNlbWVudCBzaG91bGQgaGF2ZSBhIHNldCB2YXJpYXRpb24uXG4gICAgICovXG4gICAgZmxpcFZhcmlhdGlvbnM6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtCb29sZWFufSBmbGlwVmFyaWF0aW9uc0J5Q29udGVudD1mYWxzZVxuICAgICAqIFRoZSBwb3BwZXIgd2lsbCBzd2l0Y2ggcGxhY2VtZW50IHZhcmlhdGlvbiBiZXR3ZWVuIGAtc3RhcnRgIGFuZCBgLWVuZGAgd2hlblxuICAgICAqIHRoZSBwb3BwZXIgZWxlbWVudCBvdmVybGFwcyBpdHMgcmVmZXJlbmNlIGJvdW5kYXJpZXMuXG4gICAgICpcbiAgICAgKiBUaGUgb3JpZ2luYWwgcGxhY2VtZW50IHNob3VsZCBoYXZlIGEgc2V0IHZhcmlhdGlvbi5cbiAgICAgKi9cbiAgICBmbGlwVmFyaWF0aW9uc0J5Q29udGVudDogZmFsc2UsXG4gIH0sXG5cbiAgLyoqXG4gICAqIE1vZGlmaWVyIHVzZWQgdG8gbWFrZSB0aGUgcG9wcGVyIGZsb3cgdG93YXJkIHRoZSBpbm5lciBvZiB0aGUgcmVmZXJlbmNlIGVsZW1lbnQuXG4gICAqIEJ5IGRlZmF1bHQsIHdoZW4gdGhpcyBtb2RpZmllciBpcyBkaXNhYmxlZCwgdGhlIHBvcHBlciB3aWxsIGJlIHBsYWNlZCBvdXRzaWRlXG4gICAqIHRoZSByZWZlcmVuY2UgZWxlbWVudC5cbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGlubmVyOiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTcwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogNzAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD1mYWxzZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogZmFsc2UsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBpbm5lcixcbiAgfSxcblxuICAvKipcbiAgICogTW9kaWZpZXIgdXNlZCB0byBoaWRlIHRoZSBwb3BwZXIgd2hlbiBpdHMgcmVmZXJlbmNlIGVsZW1lbnQgaXMgb3V0c2lkZSBvZiB0aGVcbiAgICogcG9wcGVyIGJvdW5kYXJpZXMuIEl0IHdpbGwgc2V0IGEgYHgtb3V0LW9mLWJvdW5kYXJpZXNgIGF0dHJpYnV0ZSB3aGljaCBjYW5cbiAgICogYmUgdXNlZCB0byBoaWRlIHdpdGggYSBDU1Mgc2VsZWN0b3IgdGhlIHBvcHBlciB3aGVuIGl0cyByZWZlcmVuY2UgaXNcbiAgICogb3V0IG9mIGJvdW5kYXJpZXMuXG4gICAqXG4gICAqIFJlcXVpcmVzIHRoZSBgcHJldmVudE92ZXJmbG93YCBtb2RpZmllciBiZWZvcmUgaXQgaW4gb3JkZXIgdG8gd29yay5cbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGhpZGU6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9ODAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA4MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBoaWRlLFxuICB9LFxuXG4gIC8qKlxuICAgKiBDb21wdXRlcyB0aGUgc3R5bGUgdGhhdCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlciBlbGVtZW50IHRvIGdldHNcbiAgICogcHJvcGVybHkgcG9zaXRpb25lZC5cbiAgICpcbiAgICogTm90ZSB0aGF0IHRoaXMgbW9kaWZpZXIgd2lsbCBub3QgdG91Y2ggdGhlIERPTSwgaXQganVzdCBwcmVwYXJlcyB0aGUgc3R5bGVzXG4gICAqIHNvIHRoYXQgYGFwcGx5U3R5bGVgIG1vZGlmaWVyIGNhbiBhcHBseSBpdC4gVGhpcyBzZXBhcmF0aW9uIGlzIHVzZWZ1bFxuICAgKiBpbiBjYXNlIHlvdSBuZWVkIHRvIHJlcGxhY2UgYGFwcGx5U3R5bGVgIHdpdGggYSBjdXN0b20gaW1wbGVtZW50YXRpb24uXG4gICAqXG4gICAqIFRoaXMgbW9kaWZpZXIgaGFzIGA4NTBgIGFzIGBvcmRlcmAgdmFsdWUgdG8gbWFpbnRhaW4gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuICAgKiB3aXRoIHByZXZpb3VzIHZlcnNpb25zIG9mIFBvcHBlci5qcy4gRXhwZWN0IHRoZSBtb2RpZmllcnMgb3JkZXJpbmcgbWV0aG9kXG4gICAqIHRvIGNoYW5nZSBpbiBmdXR1cmUgbWFqb3IgdmVyc2lvbnMgb2YgdGhlIGxpYnJhcnkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBjb21wdXRlU3R5bGU6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9ODUwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA4NTAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBjb21wdXRlU3R5bGUsXG4gICAgLyoqXG4gICAgICogQHByb3Age0Jvb2xlYW59IGdwdUFjY2VsZXJhdGlvbj10cnVlXG4gICAgICogSWYgdHJ1ZSwgaXQgdXNlcyB0aGUgQ1NTIDNEIHRyYW5zZm9ybWF0aW9uIHRvIHBvc2l0aW9uIHRoZSBwb3BwZXIuXG4gICAgICogT3RoZXJ3aXNlLCBpdCB3aWxsIHVzZSB0aGUgYHRvcGAgYW5kIGBsZWZ0YCBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgZ3B1QWNjZWxlcmF0aW9uOiB0cnVlLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtzdHJpbmd9IFt4PSdib3R0b20nXVxuICAgICAqIFdoZXJlIHRvIGFuY2hvciB0aGUgWCBheGlzIChgYm90dG9tYCBvciBgdG9wYCkuIEFLQSBYIG9mZnNldCBvcmlnaW4uXG4gICAgICogQ2hhbmdlIHRoaXMgaWYgeW91ciBwb3BwZXIgc2hvdWxkIGdyb3cgaW4gYSBkaXJlY3Rpb24gZGlmZmVyZW50IGZyb20gYGJvdHRvbWBcbiAgICAgKi9cbiAgICB4OiAnYm90dG9tJyxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7c3RyaW5nfSBbeD0nbGVmdCddXG4gICAgICogV2hlcmUgdG8gYW5jaG9yIHRoZSBZIGF4aXMgKGBsZWZ0YCBvciBgcmlnaHRgKS4gQUtBIFkgb2Zmc2V0IG9yaWdpbi5cbiAgICAgKiBDaGFuZ2UgdGhpcyBpZiB5b3VyIHBvcHBlciBzaG91bGQgZ3JvdyBpbiBhIGRpcmVjdGlvbiBkaWZmZXJlbnQgZnJvbSBgcmlnaHRgXG4gICAgICovXG4gICAgeTogJ3JpZ2h0JyxcbiAgfSxcblxuICAvKipcbiAgICogQXBwbGllcyB0aGUgY29tcHV0ZWQgc3R5bGVzIHRvIHRoZSBwb3BwZXIgZWxlbWVudC5cbiAgICpcbiAgICogQWxsIHRoZSBET00gbWFuaXB1bGF0aW9ucyBhcmUgbGltaXRlZCB0byB0aGlzIG1vZGlmaWVyLiBUaGlzIGlzIHVzZWZ1bCBpbiBjYXNlXG4gICAqIHlvdSB3YW50IHRvIGludGVncmF0ZSBQb3BwZXIuanMgaW5zaWRlIGEgZnJhbWV3b3JrIG9yIHZpZXcgbGlicmFyeSBhbmQgeW91XG4gICAqIHdhbnQgdG8gZGVsZWdhdGUgYWxsIHRoZSBET00gbWFuaXB1bGF0aW9ucyB0byBpdC5cbiAgICpcbiAgICogTm90ZSB0aGF0IGlmIHlvdSBkaXNhYmxlIHRoaXMgbW9kaWZpZXIsIHlvdSBtdXN0IG1ha2Ugc3VyZSB0aGUgcG9wcGVyIGVsZW1lbnRcbiAgICogaGFzIGl0cyBwb3NpdGlvbiBzZXQgdG8gYGFic29sdXRlYCBiZWZvcmUgUG9wcGVyLmpzIGNhbiBkbyBpdHMgd29yayFcbiAgICpcbiAgICogSnVzdCBkaXNhYmxlIHRoaXMgbW9kaWZpZXIgYW5kIGRlZmluZSB5b3VyIG93biB0byBhY2hpZXZlIHRoZSBkZXNpcmVkIGVmZmVjdC5cbiAgICpcbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGFwcGx5U3R5bGU6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9OTAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA5MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBhcHBseVN0eWxlLFxuICAgIC8qKiBAcHJvcCB7RnVuY3Rpb259ICovXG4gICAgb25Mb2FkOiBhcHBseVN0eWxlT25Mb2FkLFxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4xMC4wLCB0aGUgcHJvcGVydHkgbW92ZWQgdG8gYGNvbXB1dGVTdHlsZWAgbW9kaWZpZXJcbiAgICAgKiBAcHJvcCB7Qm9vbGVhbn0gZ3B1QWNjZWxlcmF0aW9uPXRydWVcbiAgICAgKiBJZiB0cnVlLCBpdCB1c2VzIHRoZSBDU1MgM0QgdHJhbnNmb3JtYXRpb24gdG8gcG9zaXRpb24gdGhlIHBvcHBlci5cbiAgICAgKiBPdGhlcndpc2UsIGl0IHdpbGwgdXNlIHRoZSBgdG9wYCBhbmQgYGxlZnRgIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBncHVBY2NlbGVyYXRpb246IHVuZGVmaW5lZCxcbiAgfSxcbn07XG5cbi8qKlxuICogVGhlIGBkYXRhT2JqZWN0YCBpcyBhbiBvYmplY3QgY29udGFpbmluZyBhbGwgdGhlIGluZm9ybWF0aW9uIHVzZWQgYnkgUG9wcGVyLmpzLlxuICogVGhpcyBvYmplY3QgaXMgcGFzc2VkIHRvIG1vZGlmaWVycyBhbmQgdG8gdGhlIGBvbkNyZWF0ZWAgYW5kIGBvblVwZGF0ZWAgY2FsbGJhY2tzLlxuICogQG5hbWUgZGF0YU9iamVjdFxuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEuaW5zdGFuY2UgVGhlIFBvcHBlci5qcyBpbnN0YW5jZVxuICogQHByb3BlcnR5IHtTdHJpbmd9IGRhdGEucGxhY2VtZW50IFBsYWNlbWVudCBhcHBsaWVkIHRvIHBvcHBlclxuICogQHByb3BlcnR5IHtTdHJpbmd9IGRhdGEub3JpZ2luYWxQbGFjZW1lbnQgUGxhY2VtZW50IG9yaWdpbmFsbHkgZGVmaW5lZCBvbiBpbml0XG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IGRhdGEuZmxpcHBlZCBUcnVlIGlmIHBvcHBlciBoYXMgYmVlbiBmbGlwcGVkIGJ5IGZsaXAgbW9kaWZpZXJcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gZGF0YS5oaWRlIFRydWUgaWYgdGhlIHJlZmVyZW5jZSBlbGVtZW50IGlzIG91dCBvZiBib3VuZGFyaWVzLCB1c2VmdWwgdG8ga25vdyB3aGVuIHRvIGhpZGUgdGhlIHBvcHBlclxuICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gZGF0YS5hcnJvd0VsZW1lbnQgTm9kZSB1c2VkIGFzIGFycm93IGJ5IGFycm93IG1vZGlmaWVyXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5zdHlsZXMgQW55IENTUyBwcm9wZXJ0eSBkZWZpbmVkIGhlcmUgd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXIuIEl0IGV4cGVjdHMgdGhlIEphdmFTY3JpcHQgbm9tZW5jbGF0dXJlIChlZy4gYG1hcmdpbkJvdHRvbWApXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5hcnJvd1N0eWxlcyBBbnkgQ1NTIHByb3BlcnR5IGRlZmluZWQgaGVyZSB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlciBhcnJvdy4gSXQgZXhwZWN0cyB0aGUgSmF2YVNjcmlwdCBub21lbmNsYXR1cmUgKGVnLiBgbWFyZ2luQm90dG9tYClcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLmJvdW5kYXJpZXMgT2Zmc2V0cyBvZiB0aGUgcG9wcGVyIGJvdW5kYXJpZXNcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLm9mZnNldHMgVGhlIG1lYXN1cmVtZW50cyBvZiBwb3BwZXIsIHJlZmVyZW5jZSBhbmQgYXJyb3cgZWxlbWVudHNcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLm9mZnNldHMucG9wcGVyIGB0b3BgLCBgbGVmdGAsIGB3aWR0aGAsIGBoZWlnaHRgIHZhbHVlc1xuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UgYHRvcGAsIGBsZWZ0YCwgYHdpZHRoYCwgYGhlaWdodGAgdmFsdWVzXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5vZmZzZXRzLmFycm93XSBgdG9wYCBhbmQgYGxlZnRgIG9mZnNldHMsIG9ubHkgb25lIG9mIHRoZW0gd2lsbCBiZSBkaWZmZXJlbnQgZnJvbSAwXG4gKi9cbiIsImltcG9ydCBtb2RpZmllcnMgZnJvbSAnLi4vbW9kaWZpZXJzL2luZGV4JztcblxuLyoqXG4gKiBEZWZhdWx0IG9wdGlvbnMgcHJvdmlkZWQgdG8gUG9wcGVyLmpzIGNvbnN0cnVjdG9yLjxiciAvPlxuICogVGhlc2UgY2FuIGJlIG92ZXJyaWRkZW4gdXNpbmcgdGhlIGBvcHRpb25zYCBhcmd1bWVudCBvZiBQb3BwZXIuanMuPGJyIC8+XG4gKiBUbyBvdmVycmlkZSBhbiBvcHRpb24sIHNpbXBseSBwYXNzIGFuIG9iamVjdCB3aXRoIHRoZSBzYW1lXG4gKiBzdHJ1Y3R1cmUgb2YgdGhlIGBvcHRpb25zYCBvYmplY3QsIGFzIHRoZSAzcmQgYXJndW1lbnQuIEZvciBleGFtcGxlOlxuICogYGBgXG4gKiBuZXcgUG9wcGVyKHJlZiwgcG9wLCB7XG4gKiAgIG1vZGlmaWVyczoge1xuICogICAgIHByZXZlbnRPdmVyZmxvdzogeyBlbmFibGVkOiBmYWxzZSB9XG4gKiAgIH1cbiAqIH0pXG4gKiBgYGBcbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyb2YgUG9wcGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLyoqXG4gICAqIFBvcHBlcidzIHBsYWNlbWVudC5cbiAgICogQHByb3Age1BvcHBlci5wbGFjZW1lbnRzfSBwbGFjZW1lbnQ9J2JvdHRvbSdcbiAgICovXG4gIHBsYWNlbWVudDogJ2JvdHRvbScsXG5cbiAgLyoqXG4gICAqIFNldCB0aGlzIHRvIHRydWUgaWYgeW91IHdhbnQgcG9wcGVyIHRvIHBvc2l0aW9uIGl0IHNlbGYgaW4gJ2ZpeGVkJyBtb2RlXG4gICAqIEBwcm9wIHtCb29sZWFufSBwb3NpdGlvbkZpeGVkPWZhbHNlXG4gICAqL1xuICBwb3NpdGlvbkZpeGVkOiBmYWxzZSxcblxuICAvKipcbiAgICogV2hldGhlciBldmVudHMgKHJlc2l6ZSwgc2Nyb2xsKSBhcmUgaW5pdGlhbGx5IGVuYWJsZWQuXG4gICAqIEBwcm9wIHtCb29sZWFufSBldmVudHNFbmFibGVkPXRydWVcbiAgICovXG4gIGV2ZW50c0VuYWJsZWQ6IHRydWUsXG5cbiAgLyoqXG4gICAqIFNldCB0byB0cnVlIGlmIHlvdSB3YW50IHRvIGF1dG9tYXRpY2FsbHkgcmVtb3ZlIHRoZSBwb3BwZXIgd2hlblxuICAgKiB5b3UgY2FsbCB0aGUgYGRlc3Ryb3lgIG1ldGhvZC5cbiAgICogQHByb3Age0Jvb2xlYW59IHJlbW92ZU9uRGVzdHJveT1mYWxzZVxuICAgKi9cbiAgcmVtb3ZlT25EZXN0cm95OiBmYWxzZSxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgY2FsbGVkIHdoZW4gdGhlIHBvcHBlciBpcyBjcmVhdGVkLjxiciAvPlxuICAgKiBCeSBkZWZhdWx0LCBpdCBpcyBzZXQgdG8gbm8tb3AuPGJyIC8+XG4gICAqIEFjY2VzcyBQb3BwZXIuanMgaW5zdGFuY2Ugd2l0aCBgZGF0YS5pbnN0YW5jZWAuXG4gICAqIEBwcm9wIHtvbkNyZWF0ZX1cbiAgICovXG4gIG9uQ3JlYXRlOiAoKSA9PiB7fSxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgY2FsbGVkIHdoZW4gdGhlIHBvcHBlciBpcyB1cGRhdGVkLiBUaGlzIGNhbGxiYWNrIGlzIG5vdCBjYWxsZWRcbiAgICogb24gdGhlIGluaXRpYWxpemF0aW9uL2NyZWF0aW9uIG9mIHRoZSBwb3BwZXIsIGJ1dCBvbmx5IG9uIHN1YnNlcXVlbnRcbiAgICogdXBkYXRlcy48YnIgLz5cbiAgICogQnkgZGVmYXVsdCwgaXQgaXMgc2V0IHRvIG5vLW9wLjxiciAvPlxuICAgKiBBY2Nlc3MgUG9wcGVyLmpzIGluc3RhbmNlIHdpdGggYGRhdGEuaW5zdGFuY2VgLlxuICAgKiBAcHJvcCB7b25VcGRhdGV9XG4gICAqL1xuICBvblVwZGF0ZTogKCkgPT4ge30sXG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgbW9kaWZpZXJzIHVzZWQgdG8gbW9kaWZ5IHRoZSBvZmZzZXRzIGJlZm9yZSB0aGV5IGFyZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXIuXG4gICAqIFRoZXkgcHJvdmlkZSBtb3N0IG9mIHRoZSBmdW5jdGlvbmFsaXRpZXMgb2YgUG9wcGVyLmpzLlxuICAgKiBAcHJvcCB7bW9kaWZpZXJzfVxuICAgKi9cbiAgbW9kaWZpZXJzLFxufTtcblxuLyoqXG4gKiBAY2FsbGJhY2sgb25DcmVhdGVcbiAqIEBwYXJhbSB7ZGF0YU9iamVjdH0gZGF0YVxuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIG9uVXBkYXRlXG4gKiBAcGFyYW0ge2RhdGFPYmplY3R9IGRhdGFcbiAqL1xuIiwiLy8gVXRpbHNcbmltcG9ydCBkZWJvdW5jZSBmcm9tICcuL3V0aWxzL2RlYm91bmNlJztcbmltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJy4vdXRpbHMvaXNGdW5jdGlvbic7XG5cbi8vIE1ldGhvZHNcbmltcG9ydCB1cGRhdGUgZnJvbSAnLi9tZXRob2RzL3VwZGF0ZSc7XG5pbXBvcnQgZGVzdHJveSBmcm9tICcuL21ldGhvZHMvZGVzdHJveSc7XG5pbXBvcnQgZW5hYmxlRXZlbnRMaXN0ZW5lcnMgZnJvbSAnLi9tZXRob2RzL2VuYWJsZUV2ZW50TGlzdGVuZXJzJztcbmltcG9ydCBkaXNhYmxlRXZlbnRMaXN0ZW5lcnMgZnJvbSAnLi9tZXRob2RzL2Rpc2FibGVFdmVudExpc3RlbmVycyc7XG5pbXBvcnQgRGVmYXVsdHMgZnJvbSAnLi9tZXRob2RzL2RlZmF1bHRzJztcbmltcG9ydCBwbGFjZW1lbnRzIGZyb20gJy4vbWV0aG9kcy9wbGFjZW1lbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wcGVyIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgUG9wcGVyLmpzIGluc3RhbmNlLlxuICAgKiBAY2xhc3MgUG9wcGVyXG4gICAqIEBwYXJhbSB7RWxlbWVudHxyZWZlcmVuY2VPYmplY3R9IHJlZmVyZW5jZSAtIFRoZSByZWZlcmVuY2UgZWxlbWVudCB1c2VkIHRvIHBvc2l0aW9uIHRoZSBwb3BwZXJcbiAgICogQHBhcmFtIHtFbGVtZW50fSBwb3BwZXIgLSBUaGUgSFRNTCAvIFhNTCBlbGVtZW50IHVzZWQgYXMgdGhlIHBvcHBlclxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFlvdXIgY3VzdG9tIG9wdGlvbnMgdG8gb3ZlcnJpZGUgdGhlIG9uZXMgZGVmaW5lZCBpbiBbRGVmYXVsdHNdKCNkZWZhdWx0cylcbiAgICogQHJldHVybiB7T2JqZWN0fSBpbnN0YW5jZSAtIFRoZSBnZW5lcmF0ZWQgUG9wcGVyLmpzIGluc3RhbmNlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihyZWZlcmVuY2UsIHBvcHBlciwgb3B0aW9ucyA9IHt9KSB7XG4gICAgLy8gbWFrZSB1cGRhdGUoKSBkZWJvdW5jZWQsIHNvIHRoYXQgaXQgb25seSBydW5zIGF0IG1vc3Qgb25jZS1wZXItdGlja1xuICAgIHRoaXMudXBkYXRlID0gZGVib3VuY2UodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cbiAgICAvLyB3aXRoIHt9IHdlIGNyZWF0ZSBhIG5ldyBvYmplY3Qgd2l0aCB0aGUgb3B0aW9ucyBpbnNpZGUgaXRcbiAgICB0aGlzLm9wdGlvbnMgPSB7IC4uLlBvcHBlci5EZWZhdWx0cywgLi4ub3B0aW9ucyB9O1xuXG4gICAgLy8gaW5pdCBzdGF0ZVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0Rlc3Ryb3llZDogZmFsc2UsXG4gICAgICBpc0NyZWF0ZWQ6IGZhbHNlLFxuICAgICAgc2Nyb2xsUGFyZW50czogW10sXG4gICAgfTtcblxuICAgIC8vIGdldCByZWZlcmVuY2UgYW5kIHBvcHBlciBlbGVtZW50cyAoYWxsb3cgalF1ZXJ5IHdyYXBwZXJzKVxuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlICYmIHJlZmVyZW5jZS5qcXVlcnkgPyByZWZlcmVuY2VbMF0gOiByZWZlcmVuY2U7XG4gICAgdGhpcy5wb3BwZXIgPSBwb3BwZXIgJiYgcG9wcGVyLmpxdWVyeSA/IHBvcHBlclswXSA6IHBvcHBlcjtcblxuICAgIC8vIERlZXAgbWVyZ2UgbW9kaWZpZXJzIG9wdGlvbnNcbiAgICB0aGlzLm9wdGlvbnMubW9kaWZpZXJzID0ge307XG4gICAgT2JqZWN0LmtleXMoe1xuICAgICAgLi4uUG9wcGVyLkRlZmF1bHRzLm1vZGlmaWVycyxcbiAgICAgIC4uLm9wdGlvbnMubW9kaWZpZXJzLFxuICAgIH0pLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICB0aGlzLm9wdGlvbnMubW9kaWZpZXJzW25hbWVdID0ge1xuICAgICAgICAvLyBJZiBpdCdzIGEgYnVpbHQtaW4gbW9kaWZpZXIsIHVzZSBpdCBhcyBiYXNlXG4gICAgICAgIC4uLihQb3BwZXIuRGVmYXVsdHMubW9kaWZpZXJzW25hbWVdIHx8IHt9KSxcbiAgICAgICAgLy8gSWYgdGhlcmUgYXJlIGN1c3RvbSBvcHRpb25zLCBvdmVycmlkZSBhbmQgbWVyZ2Ugd2l0aCBkZWZhdWx0IG9uZXNcbiAgICAgICAgLi4uKG9wdGlvbnMubW9kaWZpZXJzID8gb3B0aW9ucy5tb2RpZmllcnNbbmFtZV0gOiB7fSksXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgLy8gUmVmYWN0b3JpbmcgbW9kaWZpZXJzJyBsaXN0IChPYmplY3QgPT4gQXJyYXkpXG4gICAgdGhpcy5tb2RpZmllcnMgPSBPYmplY3Qua2V5cyh0aGlzLm9wdGlvbnMubW9kaWZpZXJzKVxuICAgICAgLm1hcChuYW1lID0+ICh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIC4uLnRoaXMub3B0aW9ucy5tb2RpZmllcnNbbmFtZV0sXG4gICAgICB9KSlcbiAgICAgIC8vIHNvcnQgdGhlIG1vZGlmaWVycyBieSBvcmRlclxuICAgICAgLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKTtcblxuICAgIC8vIG1vZGlmaWVycyBoYXZlIHRoZSBhYmlsaXR5IHRvIGV4ZWN1dGUgYXJiaXRyYXJ5IGNvZGUgd2hlbiBQb3BwZXIuanMgZ2V0IGluaXRlZFxuICAgIC8vIHN1Y2ggY29kZSBpcyBleGVjdXRlZCBpbiB0aGUgc2FtZSBvcmRlciBvZiBpdHMgbW9kaWZpZXJcbiAgICAvLyB0aGV5IGNvdWxkIGFkZCBuZXcgcHJvcGVydGllcyB0byB0aGVpciBvcHRpb25zIGNvbmZpZ3VyYXRpb25cbiAgICAvLyBCRSBBV0FSRTogZG9uJ3QgYWRkIG9wdGlvbnMgdG8gYG9wdGlvbnMubW9kaWZpZXJzLm5hbWVgIGJ1dCB0byBgbW9kaWZpZXJPcHRpb25zYCFcbiAgICB0aGlzLm1vZGlmaWVycy5mb3JFYWNoKG1vZGlmaWVyT3B0aW9ucyA9PiB7XG4gICAgICBpZiAobW9kaWZpZXJPcHRpb25zLmVuYWJsZWQgJiYgaXNGdW5jdGlvbihtb2RpZmllck9wdGlvbnMub25Mb2FkKSkge1xuICAgICAgICBtb2RpZmllck9wdGlvbnMub25Mb2FkKFxuICAgICAgICAgIHRoaXMucmVmZXJlbmNlLFxuICAgICAgICAgIHRoaXMucG9wcGVyLFxuICAgICAgICAgIHRoaXMub3B0aW9ucyxcbiAgICAgICAgICBtb2RpZmllck9wdGlvbnMsXG4gICAgICAgICAgdGhpcy5zdGF0ZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gZmlyZSB0aGUgZmlyc3QgdXBkYXRlIHRvIHBvc2l0aW9uIHRoZSBwb3BwZXIgaW4gdGhlIHJpZ2h0IHBsYWNlXG4gICAgdGhpcy51cGRhdGUoKTtcblxuICAgIGNvbnN0IGV2ZW50c0VuYWJsZWQgPSB0aGlzLm9wdGlvbnMuZXZlbnRzRW5hYmxlZDtcbiAgICBpZiAoZXZlbnRzRW5hYmxlZCkge1xuICAgICAgLy8gc2V0dXAgZXZlbnQgbGlzdGVuZXJzLCB0aGV5IHdpbGwgdGFrZSBjYXJlIG9mIHVwZGF0ZSB0aGUgcG9zaXRpb24gaW4gc3BlY2lmaWMgc2l0dWF0aW9uc1xuICAgICAgdGhpcy5lbmFibGVFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUuZXZlbnRzRW5hYmxlZCA9IGV2ZW50c0VuYWJsZWQ7XG4gIH1cblxuICAvLyBXZSBjYW4ndCB1c2UgY2xhc3MgcHJvcGVydGllcyBiZWNhdXNlIHRoZXkgZG9uJ3QgZ2V0IGxpc3RlZCBpbiB0aGVcbiAgLy8gY2xhc3MgcHJvdG90eXBlIGFuZCBicmVhayBzdHVmZiBsaWtlIFNpbm9uIHN0dWJzXG4gIHVwZGF0ZSgpIHtcbiAgICByZXR1cm4gdXBkYXRlLmNhbGwodGhpcyk7XG4gIH1cbiAgZGVzdHJveSgpIHtcbiAgICByZXR1cm4gZGVzdHJveS5jYWxsKHRoaXMpO1xuICB9XG4gIGVuYWJsZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHJldHVybiBlbmFibGVFdmVudExpc3RlbmVycy5jYWxsKHRoaXMpO1xuICB9XG4gIGRpc2FibGVFdmVudExpc3RlbmVycygpIHtcbiAgICByZXR1cm4gZGlzYWJsZUV2ZW50TGlzdGVuZXJzLmNhbGwodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogU2NoZWR1bGVzIGFuIHVwZGF0ZS4gSXQgd2lsbCBydW4gb24gdGhlIG5leHQgVUkgdXBkYXRlIGF2YWlsYWJsZS5cbiAgICogQG1ldGhvZCBzY2hlZHVsZVVwZGF0ZVxuICAgKiBAbWVtYmVyb2YgUG9wcGVyXG4gICAqL1xuICBzY2hlZHVsZVVwZGF0ZSA9ICgpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZSk7XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgdXRpbGl0aWVzIHVzZWZ1bCB3aGVuIHdyaXRpbmcgY3VzdG9tIG1vZGlmaWVycy5cbiAgICogU3RhcnRpbmcgZnJvbSB2ZXJzaW9uIDEuNywgdGhpcyBtZXRob2QgaXMgYXZhaWxhYmxlIG9ubHkgaWYgeW91XG4gICAqIGluY2x1ZGUgYHBvcHBlci11dGlscy5qc2AgYmVmb3JlIGBwb3BwZXIuanNgLlxuICAgKlxuICAgKiAqKkRFUFJFQ0FUSU9OKio6IFRoaXMgd2F5IHRvIGFjY2VzcyBQb3BwZXJVdGlscyBpcyBkZXByZWNhdGVkXG4gICAqIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdjIhIFVzZSB0aGUgUG9wcGVyVXRpbHMgbW9kdWxlIGRpcmVjdGx5IGluc3RlYWQuXG4gICAqIER1ZSB0byB0aGUgaGlnaCBpbnN0YWJpbGl0eSBvZiB0aGUgbWV0aG9kcyBjb250YWluZWQgaW4gVXRpbHMsIHdlIGNhbid0XG4gICAqIGd1YXJhbnRlZSB0aGVtIHRvIGZvbGxvdyBzZW12ZXIuIFVzZSB0aGVtIGF0IHlvdXIgb3duIHJpc2shXG4gICAqIEBzdGF0aWNcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge09iamVjdH1cbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjhcbiAgICogQG1lbWJlciBVdGlsc1xuICAgKiBAbWVtYmVyb2YgUG9wcGVyXG4gICAqL1xuICBzdGF0aWMgVXRpbHMgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWwpLlBvcHBlclV0aWxzO1xuXG4gIHN0YXRpYyBwbGFjZW1lbnRzID0gcGxhY2VtZW50cztcblxuICBzdGF0aWMgRGVmYXVsdHMgPSBEZWZhdWx0cztcbn1cblxuLyoqXG4gKiBUaGUgYHJlZmVyZW5jZU9iamVjdGAgaXMgYW4gb2JqZWN0IHRoYXQgcHJvdmlkZXMgYW4gaW50ZXJmYWNlIGNvbXBhdGlibGUgd2l0aCBQb3BwZXIuanNcbiAqIGFuZCBsZXRzIHlvdSB1c2UgaXQgYXMgcmVwbGFjZW1lbnQgb2YgYSByZWFsIERPTSBub2RlLjxiciAvPlxuICogWW91IGNhbiB1c2UgdGhpcyBtZXRob2QgdG8gcG9zaXRpb24gYSBwb3BwZXIgcmVsYXRpdmVseSB0byBhIHNldCBvZiBjb29yZGluYXRlc1xuICogaW4gY2FzZSB5b3UgZG9uJ3QgaGF2ZSBhIERPTSBub2RlIHRvIHVzZSBhcyByZWZlcmVuY2UuXG4gKlxuICogYGBgXG4gKiBuZXcgUG9wcGVyKHJlZmVyZW5jZU9iamVjdCwgcG9wcGVyTm9kZSk7XG4gKiBgYGBcbiAqXG4gKiBOQjogVGhpcyBmZWF0dXJlIGlzbid0IHN1cHBvcnRlZCBpbiBJbnRlcm5ldCBFeHBsb3JlciAxMC5cbiAqIEBuYW1lIHJlZmVyZW5jZU9iamVjdFxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gZGF0YS5nZXRCb3VuZGluZ0NsaWVudFJlY3RcbiAqIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgc2V0IG9mIGNvb3JkaW5hdGVzIGNvbXBhdGlibGUgd2l0aCB0aGUgbmF0aXZlIGBnZXRCb3VuZGluZ0NsaWVudFJlY3RgIG1ldGhvZC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBkYXRhLmNsaWVudFdpZHRoXG4gKiBBbiBFUzYgZ2V0dGVyIHRoYXQgd2lsbCByZXR1cm4gdGhlIHdpZHRoIG9mIHRoZSB2aXJ0dWFsIHJlZmVyZW5jZSBlbGVtZW50LlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGRhdGEuY2xpZW50SGVpZ2h0XG4gKiBBbiBFUzYgZ2V0dGVyIHRoYXQgd2lsbCByZXR1cm4gdGhlIGhlaWdodCBvZiB0aGUgdmlydHVhbCByZWZlcmVuY2UgZWxlbWVudC5cbiAqL1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwialF1ZXJ5KGZ1bmN0aW9uICgkKSB7XHJcbiAgICQoJyNyZXBseS10aXRsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgJCgnI2NvbW1lbnRmb3JtJykuc2xpZGVUb2dnbGUoKTtcclxuICAgfSk7XHJcbn0pOyIsImpRdWVyeShmdW5jdGlvbiAoJCkge1xyXG4gICAkKCcjZml4ZWQtaGVhZGVycycpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgJCgndGhlYWQgdGgnKS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVZKCcgKyB0aGlzLnNjcm9sbFRvcCArICdweCknKTtcclxuICAgICAgJCgndGJvZHkgdGgnKS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKCcgKyB0aGlzLnNjcm9sbExlZnQgKyAncHgpJyk7XHJcbiAgIH0pO1xyXG59KTsiLCJpbXBvcnQgbWFjeSBmcm9tICdtYWN5JztcclxualF1ZXJ5KGZ1bmN0aW9uICgkKSB7XHJcbiAgIGlmICgkKCcjbWFzb25yeS13cmFwcGVyJykubGVuZ3RoID4gMCkge1xyXG4gICAgICB2YXIgYnVuZGxlciA9IG1hY3koe1xyXG4gICAgICAgICBjb250YWluZXI6ICcjbWFzb25yeS13cmFwcGVyJyxcclxuICAgICAgICAgdHJ1ZU9yZGVyOiBmYWxzZSxcclxuICAgICAgICAgd2FpdEZvckltYWdlczogZmFsc2UsXHJcbiAgICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICAgY29sdW1uczogMyxcclxuICAgICAgICAgYnJlYWtBdDoge1xyXG4gICAgICAgICAgICA3Njg6IDFcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgfVxyXG59KTsiLCJqUXVlcnkoZnVuY3Rpb24gKCQpIHtcclxuXHJcbiAgICQoJyNtZW51LXRvZ2dsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdvcGVuJykpIHtcclxuICAgICAgICAgJCgnI2Z1bGwtc2NyZWVuJykuYW5pbWF0ZSh7IGxlZnQ6IFwiLTEwMCVcIiB9LCAxMDAwKTtcclxuICAgICAgICAgJCgnYm9keScpLmNzcyhcIm92ZXJmbG93XCIsIFwiYXV0b1wiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgJCgnI2Z1bGwtc2NyZWVuJykuYW5pbWF0ZSh7IGxlZnQ6IFwiMHB4XCIgfSwgMTAwMCk7XHJcbiAgICAgICAgICQoJ2JvZHknKS5jc3MoXCJvdmVyZmxvd1wiLCBcImhpZGRlblwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnb3BlbicpO1xyXG4gICB9KTtcclxuXHJcbiAgICQoJy5zdWItbWVudScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgfSlcclxuICAgJCgnLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgJCh0aGlzKS5maW5kKCcuc3ViLW1lbnUnKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgICAkKHRoaXMpLmZpbmQoJzpiZWZvcmUnKS5jc3MoeyAndHJhbnNmb3JtJzogJ3JvdGF0ZSg0NWRlZyknIH0pO1xyXG4gICB9KVxyXG5cclxufSk7Iiwid2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkgeyBteUZ1bmN0aW9uKCkgfTtcclxuXHJcbmZ1bmN0aW9uIG15RnVuY3Rpb24oKSB7XHJcbiAgIHZhciB3aW5TY3JvbGwgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gICB2YXIgaGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAtIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcbiAgIHZhciBzY3JvbGxlZCA9ICh3aW5TY3JvbGwgLyBoZWlnaHQpICogMTAwO1xyXG4gICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjcm9sbEluZGljYXRvclwiKS5zdHlsZS53aWR0aCA9IHNjcm9sbGVkICsgXCIlXCI7XHJcbn0iLCJqUXVlcnkoZnVuY3Rpb24gKCQpIHtcclxuICAgZnVuY3Rpb24gY2FsY1RpbWUob2Zmc2V0LCBjdXJyZW50X3RpbWUpIHtcclxuICAgICAgLy8gY3JlbyB1biBvZ2dldHRvIERhdGUgcGVyIGwnb3JhcmlvIGluc2VyaXRvIFxyXG4gICAgICBkID0gbmV3IERhdGUoY3VycmVudF90aW1lKTtcclxuXHJcbiAgICAgIC8vIGxvIGNvbnZlcnRvIGluIG1pbGxpc2Vjb25kaVxyXG4gICAgICB1dGMgPSBkLmdldFRpbWUoKTtcclxuXHJcbiAgICAgIC8vIGNyZW8gdW4gYWx0cm8gb2dnZXR0byBEYXRlIGFnZ2l1bmdlZG8gbGEgZGlmZmVyZW56YSBkaSBvcmFyaW8gZGVsbGEgY2l0dGEnIGRlbCBjb21wdXRlclxyXG4gICAgICBuZCA9IG5ldyBEYXRlKHV0YyArICgzNjAwMDAwICogb2Zmc2V0KSk7XHJcbiAgICAgIC8vIGNyZW8gdW5hIHN0cmluZyBwZXIgdmlzdWFsaXp6YXJlIGwnb2ZmZXNldCBhIHNjaGVybW9cclxuICAgICAgaWYgKG9mZnNldCA+IDApXHJcbiAgICAgICAgIHN0cmluZ19vZmZlc2V0ID0gJyAoR01UICsnICsgb2Zmc2V0ICsgJyknO1xyXG4gICAgICBlbHNlXHJcbiAgICAgICAgIHN0cmluZ19vZmZlc2V0ID0gJyAoR01UICcgKyBvZmZzZXQgKyAnKSc7XHJcblxyXG4gICAgICB2YXIgbW9udGggPSBuZC5nZXRNb250aCgpICsgMTtcclxuICAgICAgdmFyIGRheSA9IG5kLmdldERhdGUoKTtcclxuICAgICAgdmFyIHllYXIgPSBuZC5nZXRGdWxsWWVhcigpO1xyXG4gICAgICB2YXIgaG91ciA9IG5kLmdldEhvdXJzKCk7XHJcbiAgICAgIHZhciBtaW51dGUgPSBuZC5nZXRNaW51dGVzKCk7XHJcblxyXG4gICAgICAvLyByZXRvcm5hIGxhIGRhdGEgY29tZSBzdHJpbmdhXHJcbiAgICAgIHJldHVybiBhcHBlbmRMZWFkaW5nWmVyb2VzKGRheSkgKyBcIi9cIiArIGFwcGVuZExlYWRpbmdaZXJvZXMobW9udGgpICsgXCIvXCIgKyB5ZWFyICsgXCIgXCIgKyBhcHBlbmRMZWFkaW5nWmVyb2VzKGhvdXIpICsgXCI6XCIgKyBhcHBlbmRMZWFkaW5nWmVyb2VzKG1pbnV0ZSkgKyBzdHJpbmdfb2ZmZXNldDtcclxuICAgfVxyXG5cclxuICAgLy8gcXVlc3RhIGZ1bnppb25lIGFnZ2l1bmdlIHVubyB6ZXJvIHF1YW5kbyBlJyBuZWNlc3NhcmlvXHJcbiAgIGZ1bmN0aW9uIGFwcGVuZExlYWRpbmdaZXJvZXMobikge1xyXG4gICAgICBpZiAobiA8PSA5KSB7XHJcbiAgICAgICAgIHJldHVybiBcIjBcIiArIG47XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG47XHJcbiAgIH1cclxuXHJcbiAgICQoXCIuc3Bhbi1kYXRldGltZVwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIGN1cnJlbnRfdGltZSA9ICQodGhpcykudGV4dCgpO1xyXG4gICAgICAvLyBzZSBpbCBjb250ZW51dG8gZScgdW4gb3JhcmlvIGFjY2V0dGF0b1xyXG4gICAgICBpZiAoRGF0ZS5wYXJzZShjdXJyZW50X3RpbWUpKSB7XHJcbiAgICAgICAgIC8vIGNhbGNvbG8gbCdvZmZzZXQgZGVsIGNvbXB1dGVyXHJcbiAgICAgICAgIHZhciBocnNfb2Zmc2V0ID0gLShuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCkgLyA2MCk7XHJcbiAgICAgICAgIHZhciBuZXdfdGltZSA9IGNhbGNUaW1lKGhyc19vZmZzZXQsIGN1cnJlbnRfdGltZSk7XHJcbiAgICAgICAgICQodGhpcykudGV4dChuZXdfdGltZSk7XHJcbiAgICAgIH1cclxuICAgfSk7XHJcbn0pOyIsImltcG9ydCAnYm9vdHN0cmFwJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvbWVudSc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2ZpeGVkLWhlYWRlcnMnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9jb21tZW50cyc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3RpbWUtem9uZSc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3Njcm9sbC1pbmRpY2F0b3InO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9tYXNvbnJ5JztcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==