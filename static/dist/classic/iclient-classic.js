/*!
 * 
 *          iclient-classic.(http://iclient.supermap.io)
 *          CopyrightÂ© 2000 - 2018 SuperMap Software Co.Ltd
 *          license: Apache-2.0
 *          version: v9.1.0-alpha
 *         
 */
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = 56);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SuperMap = exports.SuperMap = window.SuperMap = window.SuperMap || {};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Util = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _SuperMap = __webpack_require__(0);

__webpack_require__(9);

var Util = exports.Util = _SuperMap.SuperMap.Util = _SuperMap.SuperMap.Util || {};
/**
 * @name Util
 * @memberOf SuperMap
 * @namespace
 * @description commonĺ·Ąĺ…·ç±»ă€‚
 */

/**
 * @description ĺ¤Ťĺ?¶ćş?ĺŻąč±ˇçš„ć‰€ćś‰ĺ±žć€§ĺ?°ç›®ć ‡ĺŻąč±ˇä¸ŠďĽŚćş?ĺŻąč±ˇä¸Šçš„ć˛ˇćś‰ĺ®šäą‰çš„ĺ±žć€§ĺś¨ç›®ć ‡ĺŻąč±ˇä¸Šäąźä¸ŤäĽšč˘«č®ľç˝®ă€‚
 * @example
 * č¦?ĺ¤Ťĺ?¶SuperMap.SizeĺŻąč±ˇçš„ć‰€ćś‰ĺ±žć€§ĺ?°č‡Şĺ®šäą‰ĺŻąč±ˇä¸ŠďĽŚä˝żç”¨ć–ąćł•ĺ¦‚ä¸‹:
 *     var size = new SuperMap.Size(100, 100);
 *     var obj = {}ďĽ›
 *     SuperMap.Util.extend(obj, size);
 * @param {Object} destination - ç›®ć ‡ĺŻąč±ˇă€‚
 * @param {Object} source - ćş?ĺŻąč±ˇďĽŚĺ…¶ĺ±žć€§ĺ°†č˘«č®ľç˝®ĺ?°ç›®ć ‡ĺŻąč±ˇä¸Šă€‚
 * @return {Object} ç›®ć ‡ĺŻąč±ˇă€‚
 */

_SuperMap.SuperMap.Util.extend = function (destination, source) {
    destination = destination || {};
    if (source) {
        for (var property in source) {
            var value = source[property];
            if (value !== undefined) {
                destination[property] = value;
            }
        }

        /**
         * IE doesn't include the toString property when iterating over an object's
         * properties with the for(property in object) syntax.  Explicitly check if
         * the source has its own toString property.
         */

        /*
         * FF/Windows < 2.0.0.13 reports "Illegal operation on WrappedNative
         * prototype object" when calling hawOwnProperty if the source object
         * is an instance of window.Event.
         */

        var sourceIsEvt = typeof window.Event === "function" && source instanceof window.Event;

        if (!sourceIsEvt && source.hasOwnProperty && source.hasOwnProperty("toString")) {
            destination.toString = source.toString;
        }
    }
    return destination;
};
/**
 * @description ĺŻąč±ˇć‹·č´ťă€‚
 * @param {Object} des - ç›®ć ‡ĺŻąč±ˇă€‚
 * @param {Object} soc - ćş?ĺŻąč±ˇ
 */
_SuperMap.SuperMap.Util.copy = function (des, soc) {
    des = des || {};
    var v;
    if (soc) {
        for (var p in des) {
            v = soc[p];
            if (typeof v !== 'undefined') {
                des[p] = v;
            }
        }
    }
};
/**
 * @description é”€ćŻ?ĺŻąč±ˇďĽŚĺ°†ĺ…¶ĺ±žć€§ç˝®ç©ş
 * @param {Object} obj - ç›®ć ‡ĺŻąč±ˇă€‚
 */
_SuperMap.SuperMap.Util.reset = function (obj) {
    obj = obj || {};
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            if (_typeof(obj[p]) === "object" && obj[p] instanceof Array) {
                for (var i in obj[p]) {
                    if (obj[p][i].destroy) {
                        obj[p][i].destroy();
                    }
                }
                obj[p].length = 0;
            } else if (_typeof(obj[p]) === "object" && obj[p] instanceof Object) {
                if (obj[p].destroy) {
                    obj[p].destroy();
                }
            }
            obj[p] = null;
        }
    }
};

/**
 * @description čŽ·ĺŹ–HTMLĺ…?ç´ ć•°ç»„ă€‚
 * @return {Array.<HTMLElement>} HTMLĺ…?ç´ ć•°ç»„ă€‚
 */
_SuperMap.SuperMap.Util.getElement = function () {
    var elements = [];

    for (var i = 0, len = arguments.length; i < len; i++) {
        var element = arguments[i];
        if (typeof element === 'string') {
            element = document.getElementById(element);
        }
        if (arguments.length === 1) {
            return element;
        }
        elements.push(element);
    }
    return elements;
};

/**
 * @description instance ofçš„č·¨ćµŹč§?ĺ™¨ĺ®žçŽ°ă€‚
 * @param {Object} o - ĺŻąč±ˇă€‚
 * @return {boolean} ć?Żĺ?¦ć?Żéˇµéť˘ĺ…?ç´ 
 */
_SuperMap.SuperMap.Util.isElement = function (o) {
    return !!(o && o.nodeType === 1);
};

/**
 * @description ĺ?¤ć–­ä¸€ä¸ŞĺŻąč±ˇć?Żĺ?¦ć?Żć•°ç»„ă€‚
 * @param {Object} a - ĺŻąč±ˇă€‚
 * @return {boolean} ć?Żĺ?¦ć?Żć•°ç»„ă€‚
 */
_SuperMap.SuperMap.Util.isArray = function (a) {
    return Object.prototype.toString.call(a) === '[object Array]';
};

/**
 * @description ä»Žć•°ç»„ä¸­ĺ? é™¤ćź?ä¸€éˇąă€‚
 * @param {Array} array - ć•°ç»„ă€‚
 * @param {Object} item - ć•°ç»„ä¸­č¦?ĺ? é™¤çš„ä¸€éˇąă€‚
 * @return {Array} ć‰§čˇŚĺ? é™¤ć“Ťä˝śĺ?Žçš„ć•°ç»„ă€‚
 */
_SuperMap.SuperMap.Util.removeItem = function (array, item) {
    for (var i = array.length - 1; i >= 0; i--) {
        if (array[i] === item) {
            array.splice(i, 1);
            //break;more than once??
        }
    }
    return array;
};

/**
 * @description čŽ·ĺŹ–ćź?ĺŻąč±ˇĺ†Ťć•°ç»„ä¸­çš„ç´˘ĺĽ•ĺ€Ľă€‚
 * @param {Array} array - ć•°ç»„ă€‚
 * @param {Object} obj - ĺŻąč±ˇă€‚
 * @return {number} ćź?ĺŻąč±ˇĺ†Ťć•°ç»„ä¸­çš„ç´˘ĺĽ•ĺ€Ľă€‚
 */
_SuperMap.SuperMap.Util.indexOf = function (array, obj) {
    if (array == null) {
        return -1;
    } else {
        // use the build-in function if available.
        if (typeof array.indexOf === "function") {
            return array.indexOf(obj);
        } else {
            for (var i = 0, len = array.length; i < len; i++) {
                if (array[i] === obj) {
                    return i;
                }
            }
            return -1;
        }
    }
};

/**
 * @description äż®ć”ąćź?DOMĺ…?ç´ çš„č®¸ĺ¤šĺ±žć€§ă€‚
 * @param {HTMLElement} element - ĺľ…äż®ć”ąçš„DOMĺ…?ç´ ă€‚
 * @param {string} id - DOMĺ…?ç´ çš„idă€‚
 * @param {SuperMap.Pixel} px - ĺŚ…ĺ?«DOMĺ…?ç´ çš„styleĺ±žć€§çš„leftĺ’Śtopĺ±žć€§ă€‚
 * @param {SuperMap.Size} sz - ĺŚ…ĺ?«DOMĺ…?ç´ çš„widthĺ’Śheightĺ±žć€§ă€‚
 * @param {string} position - DOMĺ…?ç´ çš„positionĺ±žć€§ă€‚
 * @param {string} border - DOMĺ…?ç´ çš„styleĺ±žć€§çš„borderĺ±žć€§ă€‚
 * @param {string} overflow - DOMĺ…?ç´ çš„styleĺ±žć€§çš„overflowĺ±žć€§ă€‚
 * @param {number} opacity - ä¸Ťé€Źć?Žĺş¦ĺ€Ľă€‚ĺŹ–ĺ€ĽčŚ?ĺ›´ä¸ş (0.0 - 1.0)ă€‚
 */
_SuperMap.SuperMap.Util.modifyDOMElement = function (element, id, px, sz, position, border, overflow, opacity) {

    if (id) {
        element.id = id;
    }
    if (px) {
        element.style.left = px.x + "px";
        element.style.top = px.y + "px";
    }
    if (sz) {
        element.style.width = sz.w + "px";
        element.style.height = sz.h + "px";
    }
    if (position) {
        element.style.position = position;
    }
    if (border) {
        element.style.border = border;
    }
    if (overflow) {
        element.style.overflow = overflow;
    }
    if (parseFloat(opacity) >= 0.0 && parseFloat(opacity) < 1.0) {
        element.style.filter = 'alpha(opacity=' + opacity * 100 + ')';
        element.style.opacity = opacity;
    } else if (parseFloat(opacity) === 1.0) {
        element.style.filter = '';
        element.style.opacity = '';
    }
};

/**
 * @description Takes an object and copies any properties that don't exist from
 *     another properties, by analogy with SuperMap.Util.extend() from
 *     Prototype.js.
 *
 * @param {Object} to - The destination object.
 * @param {Object} from - The source object.  Any properties of this object that
 *     are undefined in the to object will be set on the to object.
 *
 * @return {Object} A reference to the to object.  Note that the to argument is modified
 *     in place and returned by this function.
 */
_SuperMap.SuperMap.Util.applyDefaults = function (to, from) {
    to = to || {};
    /*
     * FF/Windows < 2.0.0.13 reports "Illegal operation on WrappedNative
     * prototype object" when calling hawOwnProperty if the source object is an
     * instance of window.Event.
     */
    var fromIsEvt = typeof window.Event === "function" && from instanceof window.Event;

    for (var key in from) {
        if (to[key] === undefined || !fromIsEvt && from.hasOwnProperty && from.hasOwnProperty(key) && !to.hasOwnProperty(key)) {
            to[key] = from[key];
        }
    }
    /**
     * IE doesn't include the toString property when iterating over an object's
     * properties with the for(property in object) syntax.  Explicitly check if
     * the source has its own toString property.
     */
    if (!fromIsEvt && from && from.hasOwnProperty && from.hasOwnProperty('toString') && !to.hasOwnProperty('toString')) {
        to.toString = from.toString;
    }

    return to;
};

/**
 * @description ĺ°†ĺŹ‚ć•°ĺŻąč±ˇč˝¬ćŤ˘ä¸şHTTPçš„GEIčŻ·ć±‚ä¸­çš„ĺŹ‚ć•°ĺ­—ç¬¦ä¸˛ă€‚äľ‹ĺ¦‚ďĽš"key1=value1&key2=value2&key3=value3"ă€‚
 * @param {Object} params - ĺŹ‚ć•°ĺŻąč±ˇă€‚
 * @return {string} HTTPçš„GEIčŻ·ć±‚ä¸­çš„ĺŹ‚ć•°ĺ­—ç¬¦ä¸˛ă€‚
 */
_SuperMap.SuperMap.Util.getParameterString = function (params) {
    var paramsArray = [];

    for (var key in params) {
        var value = params[key];
        if (value != null && typeof value !== 'function') {
            var encodedValue;
            if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.constructor === Array) {
                /* value is an array; encode items and separate with "," */
                var encodedItemArray = [];
                var item;
                for (var itemIndex = 0, len = value.length; itemIndex < len; itemIndex++) {
                    item = value[itemIndex];
                    encodedItemArray.push(encodeURIComponent(item === null || item === undefined ? "" : item));
                }
                encodedValue = encodedItemArray.join(",");
            } else {
                /* value is a string; simply encode */
                encodedValue = encodeURIComponent(value);
            }
            paramsArray.push(encodeURIComponent(key) + "=" + encodedValue);
        }
    }

    return paramsArray.join("&");
};

/**
 * @description ç»™urlčż˝ĺŠ ĺŹ‚ć•°ă€‚
 * @param {string} url - ĺľ…čż˝ĺŠ ĺŹ‚ć•°çš„urlĺ­—ç¬¦ä¸˛ă€‚
 * @param {string} paramStr - ĺľ…čż˝ĺŠ çš„ĺŹ‚ć•°ă€‚
 * @return {string} The new url
 */
_SuperMap.SuperMap.Util.urlAppend = function (url, paramStr) {
    var newUrl = url;
    if (paramStr) {
        var parts = (url + " ").split(/[?&]/);
        newUrl += parts.pop() === " " ? paramStr : parts.length ? "&" + paramStr : "?" + paramStr;
    }
    return newUrl;
};

/**
 * @description ä¸şäş†é?żĺ…Ťćµ®ç‚ąç˛ľĺş¦é”™čŻŻč€Śäżťç•™çš„ćś‰ć•?ä˝Ťć•°ă€‚
 * @type {number}
 * @default 14
 */
_SuperMap.SuperMap.Util.DEFAULT_PRECISION = 14;

/**
 * @description ĺ°†ĺ­—ç¬¦ä¸˛ä»ĄćŽĄčż‘çš„ç˛ľĺş¦č˝¬ćŤ˘ä¸şć•°ĺ­—ă€‚
 * @param {string} number - ĺ­—ç¬¦ä¸˛ă€‚
 * @param {number} precision - ç˛ľĺş¦ă€‚
 * @return {number} ć•°ĺ­—ă€‚
 */
_SuperMap.SuperMap.Util.toFloat = function (number, precision) {
    if (precision == null) {
        precision = _SuperMap.SuperMap.Util.DEFAULT_PRECISION;
    }
    if (typeof number !== "number") {
        number = parseFloat(number);
    }
    return precision === 0 ? number : parseFloat(number.toPrecision(precision));
};

/**
 * @description č§’ĺş¦č˝¬ĺĽ§ĺş¦ă€‚
 * @param {number} x - č§’ĺş¦ă€‚
 * @return {number} ĺĽ§ĺş¦ă€‚
 */
_SuperMap.SuperMap.Util.rad = function (x) {
    return x * Math.PI / 180;
};

/**
 * @description ä»ŽURLĺ­—ç¬¦ä¸˛ä¸­č§Łćž?ĺ‡şĺŹ‚ć•°ĺŻąč±ˇă€‚
 * @param {string} url - urlă€‚
 * @return {Object} č§Łćž?ĺ‡şçš„ĺŹ‚ć•°ĺŻąč±ˇă€‚
 */
_SuperMap.SuperMap.Util.getParameters = function (url) {
    // if no url specified, take it from the location bar
    url = url === null || url === undefined ? window.location.href : url;

    //parse out parameters portion of url string
    var paramsString = "";
    if (_SuperMap.SuperMap.String.contains(url, '?')) {
        var start = url.indexOf('?') + 1;
        var end = _SuperMap.SuperMap.String.contains(url, "#") ? url.indexOf('#') : url.length;
        paramsString = url.substring(start, end);
    }

    var parameters = {};
    var pairs = paramsString.split(/[&;]/);
    for (var i = 0, len = pairs.length; i < len; ++i) {
        var keyValue = pairs[i].split('=');
        if (keyValue[0]) {

            var key = keyValue[0];
            try {
                key = decodeURIComponent(key);
            } catch (err) {
                key = unescape(key);
            }

            // being liberal by replacing "+" with " "
            var value = (keyValue[1] || '').replace(/\+/g, " ");

            try {
                value = decodeURIComponent(value);
            } catch (err) {
                value = unescape(value);
            }

            // follow OGC convention of comma delimited values
            value = value.split(",");

            //if there's only one value, do not return as array                    
            if (value.length == 1) {
                value = value[0];
            }

            parameters[key] = value;
        }
    }
    return parameters;
};

/**
 * @description ä¸Ťć–­é€’ĺ˘žč®ˇć•°ĺŹ?é‡ŹďĽŚç”¨äşŽç”źć??ĺ”Żä¸€IDă€‚
 * @type {number}
 * @default 0
 */
_SuperMap.SuperMap.Util.lastSeqID = 0;

/**
 * @description ĺ?›ĺ»şĺ”Żä¸€IDĺ€Ľă€‚
 * @param {string} prefix - ĺ‰ŤçĽ€ă€‚
 * @return {string} ĺ”Żä¸€çš„IDĺ€Ľă€‚
 */
_SuperMap.SuperMap.Util.createUniqueID = function (prefix) {
    if (prefix == null) {
        prefix = "id_";
    }
    _SuperMap.SuperMap.Util.lastSeqID += 1;
    return prefix + _SuperMap.SuperMap.Util.lastSeqID;
};

/**
 * @memberOf SuperMap
 * @description ćŻŹĺŤ•ä˝Ťçš„č‹±ĺ°şć•°ă€‚
 * @type {Object}
 * @constant
 */
_SuperMap.SuperMap.INCHES_PER_UNIT = {
    'inches': 1.0,
    'ft': 12.0,
    'mi': 63360.0,
    'm': 39.3701,
    'km': 39370.1,
    'dd': 4374754,
    'yd': 36
};
_SuperMap.SuperMap.INCHES_PER_UNIT["in"] = _SuperMap.SuperMap.INCHES_PER_UNIT.inches;
_SuperMap.SuperMap.INCHES_PER_UNIT["degrees"] = _SuperMap.SuperMap.INCHES_PER_UNIT.dd;
_SuperMap.SuperMap.INCHES_PER_UNIT["nmi"] = 1852 * _SuperMap.SuperMap.INCHES_PER_UNIT.m;

// Units from CS-Map
_SuperMap.SuperMap.METERS_PER_INCH = 0.02540005080010160020;
_SuperMap.SuperMap.Util.extend(_SuperMap.SuperMap.INCHES_PER_UNIT, {
    "Inch": _SuperMap.SuperMap.INCHES_PER_UNIT.inches,
    "Meter": 1.0 / _SuperMap.SuperMap.METERS_PER_INCH, //EPSG:9001
    "Foot": 0.30480060960121920243 / _SuperMap.SuperMap.METERS_PER_INCH, //EPSG:9003
    "IFoot": 0.30480000000000000000 / _SuperMap.SuperMap.METERS_PER_INCH, //EPSG:9002
    "ClarkeFoot": 0.3047972651151 / _SuperMap.SuperMap.METERS_PER_INCH, //EPSG:9005
    "SearsFoot": 0.30479947153867624624 / _SuperMap.SuperMap.METERS_PER_INCH, //EPSG:9041
    "GoldCoastFoot": 0.30479971018150881758 / _SuperMap.SuperMap.METERS_PER_INCH, //EPSG:9094
    "IInch": 0.02540000000000000000 / _SuperMap.SuperMap.METERS_PER_INCH,
    "MicroInch": 0.00002540000000000000 / _SuperMap.SuperMap.METERS_PER_INCH,
    "Mil": 0.00000002540000000000 / _SuperMap.SuperMap.METERS_PER_INCH,
    "Centimeter": 0.01000000000000000000 / _SuperMap.SuperMap.METERS_PER_INCH,
    "Kilometer": 1000.00000000000000000000 / _SuperMap.SuperMap.METERS_PER_INCH, //EPSG:9036
    "Yard": 0.91440182880365760731 / _SuperMap.SuperMap.METERS_PER_INCH,
    "SearsYard": 0.914398414616029 / _SuperMap.SuperMap.METERS_PER_INCH, //EPSG:9040
    "IndianYard": 0.91439853074444079983 / _SuperMap.SuperMap.METERS_PER_INCH, //EPSG:9084
    "IndianYd37": 0.91439523 / _SuperMap.SuperMap.METERS_PER_INCH, //EPSG:9085
    "IndianYd62": 0.9143988 / _SuperMap.SuperMap.METERS_PER_INCH, //EPSG:9086
    "IndianYd75": 0.9143985 / _SuperMap.SuperMap.METERS_PER_INCH, //EPSG:9087
    "IndianFoot": 0.30479951 / _SuperMap.SuperMap.METERS_PER_INCH, //EPSG:9080
    "IndianFt37": 0.30479841 / _SuperMap.SuperMap.METERS_PER_INCH, //EPSG:9081
    "IndianFt62": 0.3047996 / _SuperMap.SuperMap.METERS_PER_INCH, //EPSG:9082
    "IndianFt75": 0.3047995 / _SuperMap.SuperMap.METERS_PER_INCH, //EPSG:9083
    "Mile": 1609.34721869443738887477 / _SuperMap.SuperMap.METERS_PER_INCH,
    "IYard": 0.91440000000000000000 / _SuperMap.SuperMap.METERS_PER_INCH, //EPSG:9096
    "IMile": 1609.34400000000000000000 / _SuperMap.SuperMap.METERS_PER_INCH, //EPSG:9093
    "NautM": 1852.00000000000000000000 / _SuperMap.SuperMap.METERS_PER_INCH, //EPSG:9030
    "Lat-66": 110943.316488932731 / _SuperMap.SuperMap.METERS_PER_INCH,
    "Lat-83": 110946.25736872234125 / _SuperMap.SuperMap.METERS_PER_INCH,
    "Decimeter": 0.10000000000000000000 / _SuperMap.SuperMap.METERS_PER_INCH,
    "Millimeter": 0.00100000000000000000 / _SuperMap.SuperMap.METERS_PER_INCH,
    "Dekameter": 10.00000000000000000000 / _SuperMap.SuperMap.METERS_PER_INCH,
    "Decameter": 10.00000000000000000000 / _SuperMap.SuperMap.METERS_PER_INCH,
    "Hectometer": 100.00000000000000000000 / _SuperMap.SuperMap.METERS_PER_INCH,
    "GermanMeter": 1.0000135965 / _SuperMap.SuperMap.METERS_PER_INCH, //EPSG:9031
    "CaGrid": 0.999738 / _SuperMap.SuperMap.METERS_PER_INCH,
    "ClarkeChain": 20.1166194976 / _SuperMap.SuperMap.METERS_PER_INCH, //EPSG:9038
    "GunterChain": 20.11684023368047 / _SuperMap.SuperMap.METERS_PER_INCH, //EPSG:9033
    "BenoitChain": 20.116782494375872 / _SuperMap.SuperMap.METERS_PER_INCH, //EPSG:9062
    "SearsChain": 20.11676512155 / _SuperMap.SuperMap.METERS_PER_INCH, //EPSG:9042
    "ClarkeLink": 0.201166194976 / _SuperMap.SuperMap.METERS_PER_INCH, //EPSG:9039
    "GunterLink": 0.2011684023368047 / _SuperMap.SuperMap.METERS_PER_INCH, //EPSG:9034
    "BenoitLink": 0.20116782494375872 / _SuperMap.SuperMap.METERS_PER_INCH, //EPSG:9063
    "SearsLink": 0.2011676512155 / _SuperMap.SuperMap.METERS_PER_INCH, //EPSG:9043
    "Rod": 5.02921005842012 / _SuperMap.SuperMap.METERS_PER_INCH,
    "IntnlChain": 20.1168 / _SuperMap.SuperMap.METERS_PER_INCH, //EPSG:9097
    "IntnlLink": 0.201168 / _SuperMap.SuperMap.METERS_PER_INCH, //EPSG:9098
    "Perch": 5.02921005842012 / _SuperMap.SuperMap.METERS_PER_INCH,
    "Pole": 5.02921005842012 / _SuperMap.SuperMap.METERS_PER_INCH,
    "Furlong": 201.1684023368046 / _SuperMap.SuperMap.METERS_PER_INCH,
    "Rood": 3.778266898 / _SuperMap.SuperMap.METERS_PER_INCH,
    "CapeFoot": 0.3047972615 / _SuperMap.SuperMap.METERS_PER_INCH,
    "Brealey": 375.00000000000000000000 / _SuperMap.SuperMap.METERS_PER_INCH,
    "ModAmFt": 0.304812252984505969011938 / _SuperMap.SuperMap.METERS_PER_INCH,
    "Fathom": 1.8288 / _SuperMap.SuperMap.METERS_PER_INCH,
    "NautM-UK": 1853.184 / _SuperMap.SuperMap.METERS_PER_INCH,
    "50kilometers": 50000.0 / _SuperMap.SuperMap.METERS_PER_INCH,
    "150kilometers": 150000.0 / _SuperMap.SuperMap.METERS_PER_INCH
});

//unit abbreviations supported by PROJ.4
_SuperMap.SuperMap.Util.extend(_SuperMap.SuperMap.INCHES_PER_UNIT, {
    "mm": _SuperMap.SuperMap.INCHES_PER_UNIT["Meter"] / 1000.0,
    "cm": _SuperMap.SuperMap.INCHES_PER_UNIT["Meter"] / 100.0,
    "dm": _SuperMap.SuperMap.INCHES_PER_UNIT["Meter"] * 100.0,
    "km": _SuperMap.SuperMap.INCHES_PER_UNIT["Meter"] * 1000.0,
    "kmi": _SuperMap.SuperMap.INCHES_PER_UNIT["nmi"], //International Nautical Mile
    "fath": _SuperMap.SuperMap.INCHES_PER_UNIT["Fathom"], //International Fathom
    "ch": _SuperMap.SuperMap.INCHES_PER_UNIT["IntnlChain"], //International Chain
    "link": _SuperMap.SuperMap.INCHES_PER_UNIT["IntnlLink"], //International Link
    "us-in": _SuperMap.SuperMap.INCHES_PER_UNIT["inches"], //U.S. Surveyor's Inch
    "us-ft": _SuperMap.SuperMap.INCHES_PER_UNIT["Foot"], //U.S. Surveyor's Foot
    "us-yd": _SuperMap.SuperMap.INCHES_PER_UNIT["Yard"], //U.S. Surveyor's Yard
    "us-ch": _SuperMap.SuperMap.INCHES_PER_UNIT["GunterChain"], //U.S. Surveyor's Chain
    "us-mi": _SuperMap.SuperMap.INCHES_PER_UNIT["Mile"], //U.S. Surveyor's Statute Mile
    "ind-yd": _SuperMap.SuperMap.INCHES_PER_UNIT["IndianYd37"], //Indian Yard
    "ind-ft": _SuperMap.SuperMap.INCHES_PER_UNIT["IndianFt37"], //Indian Foot
    "ind-ch": 20.11669506 / _SuperMap.SuperMap.METERS_PER_INCH //Indian Chain
});

/**
 * @memberOf SuperMap
 * @description ĺ?†čľ¨çŽ‡ä¸ŽćŻ”äľ‹ĺ°şäą‹é—´č˝¬ćŤ˘çš„ĺ¸¸é‡ŹďĽŚé»?č®¤ĺ€Ľ96ă€‚
 * @type {Object}
 * @default 96
 */
_SuperMap.SuperMap.DOTS_PER_INCH = 96;

/**
 * @param {number} scale - ćŻ”äľ‹ĺ°ş
 * @return {number} čż”ĺ›žć­Łĺ¸¸çš„scaleĺ€Ľ
 */
_SuperMap.SuperMap.Util.normalizeScale = function (scale) {
    var normScale = scale > 1.0 ? 1.0 / scale : scale;
    return normScale;
};

/**
 * @description ćŻ”äľ‹ĺ°şč˝¬ĺ?†čľ¨çŽ‡ă€‚
 * @param {number} scale - ćŻ”äľ‹ĺ°şă€‚
 * @param {string} units - ćŻ”äľ‹ĺ°şĺŤ•ä˝Ťă€‚
 * @return {number} ĺ?†čľ¨çŽ‡ă€‚
 */
_SuperMap.SuperMap.Util.getResolutionFromScale = function (scale, units) {
    var resolution;
    if (scale) {
        if (units == null) {
            units = "degrees";
        }
        var normScale = _SuperMap.SuperMap.Util.normalizeScale(scale);
        resolution = 1 / (normScale * _SuperMap.SuperMap.INCHES_PER_UNIT[units] * _SuperMap.SuperMap.DOTS_PER_INCH);
    }
    return resolution;
};

/**
 * @description ĺ?†čľ¨çŽ‡č˝¬ćŻ”äľ‹ĺ°şă€‚
 * @param {number} resolution - ĺ?†čľ¨çŽ‡ă€‚
 * @param {string} units - ĺ?†čľ¨çŽ‡ĺŤ•ä˝Ťă€‚
 * @return {number} ćŻ”äľ‹ĺ°şă€‚
 */
_SuperMap.SuperMap.Util.getScaleFromResolution = function (resolution, units) {

    if (units == null) {
        units = "degrees";
    }

    var scale = resolution * _SuperMap.SuperMap.INCHES_PER_UNIT[units] * _SuperMap.SuperMap.DOTS_PER_INCH;
    return scale;
};

/**
 * @memberOf SuperMap
 * @description ĺ¦‚ćžśuserAgentćŤ•čŽ·ĺ?°ćµŹč§?ĺ™¨ä˝żç”¨çš„ć?ŻGeckoĺĽ•ć“Žĺ?™čż”ĺ›žtrueă€‚
 * @constant
 */
_SuperMap.SuperMap.IS_GECKO = function () {
    var ua = navigator.userAgent.toLowerCase();
    return ua.indexOf("webkit") === -1 && ua.indexOf("gecko") !== -1;
}();

/**
 * @memberOf SuperMap
 * @description ćµŹč§?ĺ™¨ĺ?Ťç§°ďĽŚäľťčµ–äşŽuserAgentĺ±žć€§ďĽŚBROWSER_NAMEĺŹŻä»Ąć?Żç©şďĽŚć?–č€…ä»Ąä¸‹ćµŹč§?ĺ™¨ďĽš
 *     * "opera" -- Opera
 *     * "msie"  -- Internet Explorer
 *     * "safari" -- Safari
 *     * "firefox" -- Firefox
 *     * "mozilla" -- Mozilla
 * @constant
 */
_SuperMap.SuperMap.Browser = function () {
    var name = '',
        version = '',
        device = 'pc',
        uaMatch;
    //ä»Ąä¸‹čż›čˇŚćµ‹čŻ•
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf("msie") > -1 || ua.indexOf("trident") > -1 && ua.indexOf("rv") > -1) {
        name = 'msie';
        uaMatch = ua.match(/msie ([\d.]+)/) || ua.match(/rv:([\d.]+)/);
    } else if (ua.indexOf("chrome") > -1) {
        name = 'chrome';
        uaMatch = ua.match(/chrome\/([\d.]+)/);
    } else if (ua.indexOf("firefox") > -1) {
        name = 'firefox';
        uaMatch = ua.match(/firefox\/([\d.]+)/);
    } else if (ua.indexOf("opera") > -1) {
        name = 'opera';
        uaMatch = ua.match(/version\/([\d.]+)/);
    } else if (ua.indexOf("safari") > -1) {
        name = 'safari';
        uaMatch = ua.match(/version\/([\d.]+)/);
    }
    version = uaMatch ? uaMatch[1] : '';

    if (ua.indexOf("ipad") > -1 || ua.indexOf("ipod") > -1 || ua.indexOf("iphone") > -1) {
        device = 'apple';
    } else if (ua.indexOf("android") > -1) {
        uaMatch = ua.match(/version\/([\d.]+)/);
        version = uaMatch ? uaMatch[1] : '';
        device = 'android';
    }
    return { name: name, version: version, device: device };
}();

/**
 * @description čŽ·ĺŹ–ćµŹč§?ĺ™¨ç›¸ĺ…łäżˇć?Żă€‚ć”ŻćŚ?çš„ćµŹč§?ĺ™¨ĺŚ…ć‹¬ďĽšOperaďĽŚInternet ExplorerďĽŚSafariďĽŚFirefoxă€‚
 * @return {Object} čŽ·ĺŹ–ćµŹč§?ĺ™¨ĺ?Ťç§°ă€?ç‰?ćś¬ă€?č®ľĺ¤‡ĺ?Ťç§°ă€‚ĺŻąĺş”çš„ĺ±žć€§ĺ?†ĺ?«ä¸ş name, version, deviceă€‚
 */
_SuperMap.SuperMap.Util.getBrowser = function () {
    return _SuperMap.SuperMap.Browser;
};

/**
 * @description ćµŹč§?ĺ™¨ć?Żĺ?¦ć”ŻćŚ?Canvasă€‚
 * @return {boolean} čŽ·ĺŹ–ĺ˝“ĺ‰ŤćµŹč§?ĺ™¨ć?Żĺ?¦ć”ŻćŚ? HTML5 Canvas ă€‚
 */
_SuperMap.SuperMap.Util.isSupportCanvas = function () {
    var checkRes = true,
        broz = _SuperMap.SuperMap.Util.getBrowser();
    if (document.createElement("canvas").getContext) {
        if (broz.name === 'firefox' && parseFloat(broz.version) < 5) {
            checkRes = false;
        }
        if (broz.name === 'safari' && parseFloat(broz.version) < 4) {
            checkRes = false;
        }
        if (broz.name === 'opera' && parseFloat(broz.version) < 10) {
            checkRes = false;
        }
        if (broz.name === 'msie' && parseFloat(broz.version) < 9) {
            checkRes = false;
        }
    } else {
        checkRes = false;
    }
    return checkRes;
}();

/**
 * @description ĺ?¤ć–­ďĽ›ćµŹč§?ĺ™¨ć?Żĺ?¦ć”ŻćŚ?Canvasă€‚
 * @return {boolean} čŽ·ĺŹ–ĺ˝“ĺ‰ŤćµŹč§?ĺ™¨ć?Żĺ?¦ć”ŻćŚ? HTML5 Canvas ă€‚
 */
_SuperMap.SuperMap.Util.supportCanvas = function () {
    return _SuperMap.SuperMap.Util.isSupportCanvas;
};

//ĺ°†ćśŤĺŠˇç«Żçš„ĺś°ĺ›ľĺŤ•ä˝Ťč˝¬ć??SuperMapçš„ĺś°ĺ›ľĺŤ•ä˝Ť
_SuperMap.SuperMap.INCHES_PER_UNIT["degree"] = _SuperMap.SuperMap.INCHES_PER_UNIT.dd;
_SuperMap.SuperMap.INCHES_PER_UNIT["meter"] = _SuperMap.SuperMap.INCHES_PER_UNIT.m;
_SuperMap.SuperMap.INCHES_PER_UNIT["foot"] = _SuperMap.SuperMap.INCHES_PER_UNIT.ft;
_SuperMap.SuperMap.INCHES_PER_UNIT["inch"] = _SuperMap.SuperMap.INCHES_PER_UNIT.inches;
_SuperMap.SuperMap.INCHES_PER_UNIT["mile"] = _SuperMap.SuperMap.INCHES_PER_UNIT.mi;
_SuperMap.SuperMap.INCHES_PER_UNIT["kilometer"] = _SuperMap.SuperMap.INCHES_PER_UNIT.km;
_SuperMap.SuperMap.INCHES_PER_UNIT["yard"] = _SuperMap.SuperMap.INCHES_PER_UNIT.yd;

/**
 * @description ĺ?¤ć–­ä¸€ä¸Ş URL čŻ·ć±‚ć?Żĺ?¦ĺś¨ĺ˝“ĺ‰Ťĺźźä¸­ă€‚
 * @param {string} url - URL čŻ·ć±‚ĺ­—ç¬¦ä¸˛ă€‚
 * @return {boolean} URLčŻ·ć±‚ć?Żĺ?¦ĺś¨ĺ˝“ĺ‰Ťĺźźä¸­ă€‚
 */
_SuperMap.SuperMap.Util.isInTheSameDomain = function (url) {
    if (!url) {
        return true;
    }
    var index = url.indexOf("//");
    var documentUrl = document.location.toString();
    var documentIndex = documentUrl.indexOf("//");
    if (index === -1) {
        return true;
    } else {
        var protocol;
        var substring = protocol = url.substring(0, index);
        var documentSubString = documentUrl.substring(documentIndex + 2);
        documentIndex = documentSubString.indexOf("/");
        var documentPortIndex = documentSubString.indexOf(":");
        var documentDomainWithPort = documentSubString.substring(0, documentIndex);
        //var documentPort;

        var documentprotocol = document.location.protocol;
        if (documentPortIndex !== -1) {
            // documentPort = +documentSubString.substring(documentPortIndex, documentIndex);
        } else {
            documentDomainWithPort += ':' + (documentprotocol.toLowerCase() === 'http:' ? 80 : 443);
        }
        if (documentprotocol.toLowerCase() !== substring.toLowerCase()) {
            return false;
        }
        substring = url.substring(index + 2);
        var portIndex = substring.indexOf(":");
        index = substring.indexOf("/");
        var domainWithPort = substring.substring(0, index);
        var domain;
        if (portIndex !== -1) {
            domain = substring.substring(0, portIndex);
        } else {
            domain = substring.substring(0, index);
            domainWithPort += ':' + (protocol.toLowerCase() === 'http:' ? 80 : 443);
        }
        var documentDomain = document.domain;
        if (domain === documentDomain && domainWithPort === documentDomainWithPort) {
            return true;
        }
    }
    return false;
};

/**
 * @description č®ˇç®—iServerćśŤĺŠˇçš„RESTĺ›ľĺ±‚çš„ć?ľç¤şĺ?†čľ¨çŽ‡ďĽŚéś€č¦?ä»ŽiServerçš„RESTĺ›ľĺ±‚čˇ¨čż°ä¸­čŽ·ĺŹ–viewBoundsă€?vieweră€?scaleă€?coordUnită€?datumAxis äş”ä¸ŞĺŹ‚ć•°ďĽŚćťĄčż›čˇŚč®ˇç®—ă€‚
 * @param {SuperMap.Bounds} viewBounds - ĺś°ĺ›ľçš„ĺŹ‚ç…§ĺŹŻč§†čŚ?ĺ›´ďĽŚĺŤłĺś°ĺ›ľĺ?ťĺ§‹ĺŚ–ć—¶é»?č®¤çš„ĺś°ĺ›ľć?ľç¤şčŚ?ĺ›´ă€‚
 * @param {SuperMap.Size} viewer - ĺś°ĺ›ľĺ?ťĺ§‹ĺŚ–ć—¶é»?č®¤çš„ĺś°ĺ›ľĺ›ľç‰‡çš„ĺ°şĺŻ¸ă€‚
 * @param {number} scale - ĺś°ĺ›ľĺ?ťĺ§‹ĺŚ–ć—¶é»?č®¤çš„ć?ľç¤şćŻ”äľ‹ĺ°şă€‚
 * @param {string} coordUnit - ćŠ•ĺ˝±ĺť?ć ‡çł»ç»źçš„ĺś°ĺ›ľĺŤ•ä˝Ťă€‚
 * @param {number} datumAxis - ĺś°ç?†ĺť?ć ‡çł»ç»źć¤­ç??ä˝“é•żĺŤŠč˝´ă€‚ç”¨ć?·č‡Şĺ®šäą‰ĺś°ĺ›ľçš„Optionsć—¶ďĽŚč‹ĄćśŞćŚ‡ĺ®ščŻĄĺŹ‚ć•°çš„ĺ€ĽďĽŚĺ?™çł»ç»źé»?č®¤ä¸şWGS84ĺŹ‚č€?çł»çš„ć¤­ç??ä˝“é•żĺŤŠč˝´6378137ă€‚
 * @return {number} čż”ĺ›žĺ›ľĺ±‚ć?ľç¤şĺ?†čľ¨çŽ‡ă€‚
 */
_SuperMap.SuperMap.Util.calculateDpi = function (viewBounds, viewer, scale, coordUnit, datumAxis) {
    //10000 ć?Ż 0.1ćŻ«ç±łä¸Žç±łçš„č˝¬ćŤ˘ă€‚DPIçš„č®ˇç®—ĺ…¬ĺĽŹďĽšViewer / DPI *  0.0254 * 10000 = ViewBounds * scale ďĽŚĺ…¬ĺĽŹä¸­çš„10000ć?Żä¸şäş†ćŹ?é«?č®ˇç®—ç»“ćžśçš„ç˛ľĺş¦ďĽŚä»Ąä¸‹ĺ‡şçŽ°çš„ratioçš†ä¸şĺ¦‚ć­¤ă€‚
    if (!viewBounds || !viewer || !scale) {
        return;
    }
    var ratio = 10000,
        rvbWidth = viewBounds.getWidth(),
        rvbHeight = viewBounds.getHeight(),
        rvWidth = viewer.w,
        rvHeight = viewer.h;
    //ç”¨ć?·č‡Şĺ®šäą‰ĺś°ĺ›ľçš„Optionsć—¶ďĽŚč‹ĄćśŞćŚ‡ĺ®ščŻĄĺŹ‚ć•°çš„ĺ€ĽďĽŚĺ?™çł»ç»źé»?č®¤ä¸ş6378137ç±łďĽŚĺŤłWGS84ĺŹ‚č€?çł»çš„ć¤­ç??ä˝“é•żĺŤŠč˝´ă€‚
    datumAxis = datumAxis || 6378137;
    coordUnit = coordUnit || "degrees";
    var dpi;
    if (coordUnit.toLowerCase() === "degree" || coordUnit.toLowerCase() === "degrees" || coordUnit.toLowerCase() === "dd") {
        var num1 = rvbWidth / rvWidth,
            num2 = rvbHeight / rvHeight,
            resolution = num1 > num2 ? num1 : num2;
        dpi = 0.0254 * ratio / resolution / scale / (Math.PI * 2 * datumAxis / 360) / ratio;
    } else {
        var _resolution = rvbWidth / rvWidth;
        dpi = 0.0254 * ratio / _resolution / scale / ratio;
    }
    return dpi;
};

/**
 * @description ĺ°†ĺŻąč±ˇč˝¬ćŤ˘ć?? JSON ĺ­—ç¬¦ä¸˛ă€‚
 * @param {Object} obj - č¦?č˝¬ćŤ˘ć?? JSON çš„ Object ĺŻąč±ˇă€‚
 * @return {string} čż”ĺ›žč˝¬ćŤ˘ĺ?Žçš„ JSON ĺŻąč±ˇă€‚
 */
_SuperMap.SuperMap.Util.toJSON = function (obj) {
    var objInn = obj;
    if (objInn == null) {
        return null;
    }
    switch (objInn.constructor) {
        case String:
            //s = "'" + str.replace(/(["\\])/g, "\\$1") + "'";   stringĺ?«ćś‰ĺŤ•ĺĽ•ĺŹ·ĺ‡şé”™
            objInn = '"' + objInn.replace(/(["\\])/g, '\\$1') + '"';
            objInn = objInn.replace(/\n/g, "\\n");
            objInn = objInn.replace(/\r/g, "\\r");
            objInn = objInn.replace("<", "&lt;");
            objInn = objInn.replace(">", "&gt;");
            objInn = objInn.replace(/%/g, "%25");
            objInn = objInn.replace(/&/g, "%26");
            return objInn;
        case Array:
            var arr = [];
            for (var i = 0, len = objInn.length; i < len; i++) {
                arr.push(_SuperMap.SuperMap.Util.toJSON(objInn[i]));
            }
            return "[" + arr.join(",") + "]";
        case Number:
            return isFinite(objInn) ? String(objInn) : null;
        case Boolean:
            return String(objInn);
        case Date:
            var dateStr = "{" + "'__type':\"System.DateTime\"," + "'Year':" + objInn.getFullYear() + "," + "'Month':" + (objInn.getMonth() + 1) + "," + "'Day':" + objInn.getDate() + "," + "'Hour':" + objInn.getHours() + "," + "'Minute':" + objInn.getMinutes() + "," + "'Second':" + objInn.getSeconds() + "," + "'Millisecond':" + objInn.getMilliseconds() + "," + "'TimezoneOffset':" + objInn.getTimezoneOffset() + "}";
            return dateStr;
        default:
            if (objInn["toJSON"] != null && typeof objInn["toJSON"] === "function") {
                return objInn.toJSON();
            }
            if ((typeof objInn === 'undefined' ? 'undefined' : _typeof(objInn)) === "object") {
                if (objInn.length) {
                    var _arr2 = [];
                    for (var _i = 0, _len = objInn.length; _i < _len; _i++) {
                        _arr2.push(_SuperMap.SuperMap.Util.toJSON(objInn[_i]));
                    }
                    return "[" + _arr2.join(",") + "]";
                }
                var _arr = [];
                for (var attr in objInn) {
                    //ä¸şč§Łĺ†łSuperMap.Geometryç±»ĺž‹ĺ¤´jsonć—¶ĺ †ć ?ćş˘ĺ‡şçš„é—®é˘?ďĽŚattr == "parent"ć—¶ä¸Ťčż›čˇŚjsonč˝¬ćŤ˘
                    if (typeof objInn[attr] !== "function" && attr !== "CLASS_NAME" && attr !== "parent") {
                        _arr.push("'" + attr + "':" + _SuperMap.SuperMap.Util.toJSON(objInn[attr]));
                    }
                }

                if (_arr.length > 0) {
                    return "{" + _arr.join(",") + "}";
                } else {
                    return "{}";
                }
            }
            return objInn.toString();
    }
};

/**
 * @description ć ąćŤ®ćŻ”äľ‹ĺ°şĺ’Śdpič®ˇç®—ĺ±Źĺą•ĺ?†čľ¨çŽ‡ă€‚
 * @param {number} scale - ćŻ”äľ‹ĺ°şă€‚
 * @param {number} dpi - ĺ›ľĺ?Źĺ?†čľ¨çŽ‡ďĽŚčˇ¨ç¤şćŻŹč‹±ĺŻ¸ĺ†…çš„ĺ?Źç´ ä¸Şć•°ă€‚
 * @param {string} coordUnit - ćŠ•ĺ˝±ĺť?ć ‡çł»ç»źçš„ĺś°ĺ›ľĺŤ•ä˝Ťă€‚
 * @param {number} datumAxis - ĺś°ç?†ĺť?ć ‡çł»ç»źć¤­ç??ä˝“é•żĺŤŠč˝´ă€‚ç”¨ć?·č‡Şĺ®šäą‰ĺś°ĺ›ľçš„Optionsć—¶ďĽŚč‹ĄćśŞćŚ‡ĺ®ščŻĄĺŹ‚ć•°çš„ĺ€ĽďĽŚĺ?™DPIé»?č®¤ćŚ‰ç…§WGS84ĺŹ‚č€?çł»çš„ć¤­ç??ä˝“é•żĺŤŠč˝´6378137ćťĄč®ˇç®—ă€‚
 * @return {number} čż”ĺ›žĺ˝“ĺ‰ŤćŻ”äľ‹ĺ°şä¸‹çš„ĺ±Źĺą•ĺ?†čľ¨çŽ‡ă€‚
 */
_SuperMap.SuperMap.Util.getResolutionFromScaleDpi = function (scale, dpi, coordUnit, datumAxis) {
    var resolution = null,
        ratio = 10000;
    //ç”¨ć?·č‡Şĺ®šäą‰ĺś°ĺ›ľçš„Optionsć—¶ďĽŚč‹ĄćśŞćŚ‡ĺ®ščŻĄĺŹ‚ć•°çš„ĺ€ĽďĽŚĺ?™çł»ç»źé»?č®¤ä¸ş6378137ç±łďĽŚĺŤłWGS84ĺŹ‚č€?çł»çš„ć¤­ç??ä˝“é•żĺŤŠč˝´ă€‚
    datumAxis = datumAxis || 6378137;
    coordUnit = coordUnit || "";
    if (scale > 0 && dpi > 0) {
        scale = _SuperMap.SuperMap.Util.normalizeScale(scale);
        if (coordUnit.toLowerCase() === "degree" || coordUnit.toLowerCase() === "degrees" || coordUnit.toLowerCase() === "dd") {
            //scale = SuperMap.Util.normalizeScale(scale);
            resolution = 0.0254 * ratio / dpi / scale / (Math.PI * 2 * datumAxis / 360) / ratio;
            return resolution;
        } else {
            resolution = 0.0254 * ratio / dpi / scale / ratio;
            return resolution;
        }
    }
    return -1;
};

/**
 * @description ć ąćŤ®resolutionă€?dpiă€?coordUnitĺ’ŚdatumAxisč®ˇç®—ćŻ”äľ‹ĺ°şă€‚
 * @param {number} resolution - ç”¨äşŽč®ˇç®—ćŻ”äľ‹ĺ°şçš„ĺś°ĺ›ľĺ?†čľ¨çŽ‡ă€‚
 * @param {number} dpi - ĺ›ľĺ?Źĺ?†čľ¨çŽ‡ďĽŚčˇ¨ç¤şćŻŹč‹±ĺŻ¸ĺ†…çš„ĺ?Źç´ ä¸Şć•°ă€‚
 * @param {string} coordUnit - ćŠ•ĺ˝±ĺť?ć ‡çł»ç»źçš„ĺś°ĺ›ľĺŤ•ä˝Ťă€‚
 * @param {number} datumAxis - ĺś°ç?†ĺť?ć ‡çł»ç»źć¤­ç??ä˝“é•żĺŤŠč˝´ă€‚ç”¨ć?·č‡Şĺ®šäą‰ĺś°ĺ›ľçš„Optionsć—¶ďĽŚč‹ĄćśŞćŚ‡ĺ®ščŻĄĺŹ‚ć•°çš„ĺ€ĽďĽŚĺ?™DPIé»?č®¤ćŚ‰ç…§WGS84ĺŹ‚č€?çł»çš„ć¤­ç??ä˝“é•żĺŤŠč˝´6378137ćťĄč®ˇç®—ă€‚
 * @return {number} čż”ĺ›žĺ˝“ĺ‰Ťĺ±Źĺą•ĺ?†čľ¨çŽ‡ä¸‹çš„ćŻ”äľ‹ĺ°şă€‚
 */
_SuperMap.SuperMap.Util.getScaleFromResolutionDpi = function (resolution, dpi, coordUnit, datumAxis) {
    var scale = null,
        ratio = 10000;
    //ç”¨ć?·č‡Şĺ®šäą‰ĺś°ĺ›ľçš„Optionsć—¶ďĽŚč‹ĄćśŞćŚ‡ĺ®ščŻĄĺŹ‚ć•°çš„ĺ€ĽďĽŚĺ?™çł»ç»źé»?č®¤ä¸ş6378137ç±łďĽŚĺŤłWGS84ĺŹ‚č€?çł»çš„ć¤­ç??ä˝“é•żĺŤŠč˝´ă€‚
    datumAxis = datumAxis || 6378137;
    coordUnit = coordUnit || "";
    if (resolution > 0 && dpi > 0) {
        if (coordUnit.toLowerCase() === "degree" || coordUnit.toLowerCase() === "degrees" || coordUnit.toLowerCase() === "dd") {
            scale = 0.0254 * ratio / dpi / resolution / (Math.PI * 2 * datumAxis / 360) / ratio;
            return scale;
        } else {
            scale = 0.0254 * ratio / dpi / resolution / ratio;
            return scale;
        }
    }
    return -1;
};

/**
 * @description č˝¬ćŤ˘ćźĄčŻ˘ç»“ćžśă€‚
 * @param {Object} result - ćźĄčŻ˘ç»“ćžśă€‚
 * @return {Object} č˝¬ćŤ˘ĺ?Žçš„ćźĄčŻ˘ç»“ćžśă€‚
 */
_SuperMap.SuperMap.Util.transformResult = function (result) {
    if (result.responseText && typeof result.responseText === "string") {
        result = JSON.parse(result.responseText);
    }
    return result;
};

/**
 * @description ĺ±žć€§ć‹·č´ťďĽŚä¸Ťć‹·č´ťć–ąćł•ç±»ĺ?Ť(CLASS_NAME)ç­‰ă€‚
 * @param {Object} destination - ć‹·č´ťç›®ć ‡ă€‚
 * @param {Object} source - ćş?ĺŻąč±ˇă€‚
 *
 */
_SuperMap.SuperMap.Util.copyAttributes = function (destination, source) {
    destination = destination || {};
    if (source) {
        for (var property in source) {
            var value = source[property];
            if (value !== undefined && property !== "CLASS_NAME" && typeof value !== "function") {
                destination[property] = value;
            }
        }
    }
    return destination;
};

/**
 * @description ĺ°†ćş?ĺŻąč±ˇä¸Šçš„ĺ±žć€§ć‹·č´ťĺ?°ç›®ć ‡ĺŻąč±ˇä¸Šă€‚ďĽ?ä¸Ťć‹·č´ť CLASS_NAME ĺ’Ść–ąćł•ďĽ‰
 * @param {Object} destination - ç›®ć ‡ĺŻąč±ˇă€‚
 * @param {Object} source - ćş?ĺŻąč±ˇă€‚
 * @param {Array.<string>} clip - ćş?ĺŻąč±ˇä¸­ç¦?ć­˘ć‹·č´ťĺ?°ç›®ć ‡ĺŻąč±ˇçš„ĺ±žć€§ďĽŚç›®çš„ć?Żé?˛ć­˘ç›®ć ‡ĺŻąč±ˇä¸Šä¸ŤĺŹŻäż®ć”ąçš„ĺ±žć€§č˘«çŻˇć”ąă€‚
 *
 */
_SuperMap.SuperMap.Util.copyAttributesWithClip = function (destination, source, clip) {
    destination = destination || {};
    if (source) {
        for (var property in source) {
            //ĺŽ»ćŽ‰ç¦?ć­˘ć‹·č´ťçš„ĺ±žć€§
            var isInClip = false;
            if (clip && clip.length) {
                for (var i = 0, len = clip.length; i < len; i++) {
                    if (property === clip[i]) {
                        isInClip = true;
                        break;
                    }
                }
            }
            if (isInClip === true) {
                continue;
            }

            var value = source[property];
            if (value !== undefined && property !== "CLASS_NAME" && typeof value !== "function") {
                destination[property] = value;
            }
        }
    }
    return destination;
};

/**
 * @description ĺ…‹éš†ä¸€ä»˝ObjectĺŻąč±ˇ
 * @param {Object} obj - éś€č¦?ĺ…‹éš†çš„ĺŻąč±ˇă€‚
 * @return {Object} čż”ĺ›žĺŻąč±ˇçš„ć‹·č´ťĺŻąč±ˇďĽŚćł¨ć„Źć?Żć–°çš„ĺŻąč±ˇďĽŚä¸Ťć?ŻćŚ‡ĺ?‘ă€‚
 */
_SuperMap.SuperMap.Util.cloneObject = function (obj) {
    // Handle the 3 simple types, and null or undefined
    if (null === obj || "object" !== (typeof obj === 'undefined' ? 'undefined' : _typeof(obj))) {
        return obj;
    }

    // Handle Date
    if (obj instanceof Date) {
        var copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        var _copy = obj.slice(0);
        return _copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        var _copy2 = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) {
                _copy2[attr] = _SuperMap.SuperMap.Util.cloneObject(obj[attr]);
            }
        }
        return _copy2;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
};

/**
 * @description ĺ?¤ć–­ä¸¤ćťˇçşżć®µć?Żä¸Ťć?Żćś‰äş¤ç‚ąă€‚
 * @param {SuperMap.Geometry.Point} a1 - ç¬¬ä¸€ćťˇçşżć®µçš„čµ·ĺ§‹čŠ‚ç‚ąă€‚
 * @param {SuperMap.Geometry.Point} a2 - ç¬¬ä¸€ćťˇçşżć®µçš„ç»“ćťźčŠ‚ç‚ąă€‚
 * @param {SuperMap.Geometry.Point} b1 - ç¬¬äşŚćťˇçşżć®µçš„čµ·ĺ§‹čŠ‚ç‚ąă€‚
 * @param {SuperMap.Geometry.Point} b2 - ç¬¬äşŚćťˇçşżć®µçš„ç»“ćťźčŠ‚ç‚ąă€‚
 * @return {Object} ĺ¦‚ćžśç›¸äş¤čż”ĺ›žäş¤ç‚ąďĽŚĺ¦‚ćžśä¸Ťç›¸äş¤čż”ĺ›žä¸¤ćťˇçşżć®µçš„ä˝Ťç˝®ĺ…łçł»ă€‚
 */
_SuperMap.SuperMap.Util.lineIntersection = function (a1, a2, b1, b2) {
    var intersectValue = null;
    var k1;
    var k2;
    var b = (b2.x - b1.x) * (a1.y - b1.y) - (b2.y - b1.y) * (a1.x - b1.x);
    var a = (a2.x - a1.x) * (a1.y - b1.y) - (a2.y - a1.y) * (a1.x - b1.x);
    var ab = (b2.y - b1.y) * (a2.x - a1.x) - (b2.x - b1.x) * (a2.y - a1.y);
    //ab==0ä»Łčˇ¨ä¸¤ćťˇçşżć–­çš„ć–śçŽ‡ä¸€ć ·
    if (ab != 0) {
        k1 = b / ab;
        k2 = a / ab;

        if (k1 >= 0 && k2 <= 1 && k1 <= 1 && k2 >= 0) {
            intersectValue = new _SuperMap.SuperMap.Geometry.Point(a1.x + k1 * (a2.x - a1.x), a1.y + k1 * (a2.y - a1.y));
        } else {
            intersectValue = "No Intersection";
        }
    } else {

        if (b == 0 && a == 0) {
            var maxy = Math.max(a1.y, a2.y);
            var miny = Math.min(a1.y, a2.y);
            var maxx = Math.max(a1.x, a2.x);
            var minx = Math.min(a1.x, a2.x);
            if ((b1.y >= miny && b1.y <= maxy || b2.y >= miny && b2.y <= maxy) && b1.x >= minx && b1.x <= maxx || b2.x >= minx && b2.x <= maxx) {
                intersectValue = "Coincident"; //é‡Ťĺ??
            } else {
                intersectValue = "Parallel"; //ĺąłčˇŚ
            }
        } else {
            intersectValue = "Parallel"; //ĺąłčˇŚ
        }
    }
    return intersectValue;
};

/**
 * @description čŽ·ĺŹ–ć–‡ćś¬ĺ¤–ćŽĄçź©ĺ˝˘ĺ®˝ĺş¦ä¸Žé«?ĺş¦ă€‚
 * @param {SuperMap.Style} style - ć–‡ćś¬ć ·ĺĽŹă€‚
 * @param {string} text - ć–‡ćś¬ĺ†…ĺ®ąă€‚
 * @param {Object} element - DOMĺ…?ç´ ă€‚
 * @return {Object} čż”ĺ›žčŁ?ĺ‰Şĺ?Žçš„ĺ®˝ĺş¦ďĽŚé«?ĺş¦äżˇć?Żă€‚
 */
_SuperMap.SuperMap.Util.getTextBounds = function (style, text, element) {
    document.body.appendChild(element);
    element.style.width = 'auto';
    element.style.height = 'auto';
    if (style.fontSize) {
        element.style.fontSize = style.fontSize;
    }
    if (style.fontFamily) {
        element.style.fontFamily = style.fontFamily;
    }
    if (style.fontWeight) {
        element.style.fontWeight = style.fontWeight;
    }
    element.style.position = 'relative';
    element.style.visibility = 'hidden';
    //fix ĺś¨ćź?äş›ć?…ĺ†µä¸‹ďĽŚelementĺ†…çš„ć–‡ćś¬ĺŹ?ć??ç«–čµ·ćŽ’ĺ?—ďĽŚĺŻĽč‡´ĺ®˝ĺş¦č®ˇç®—ä¸Ťć­Łçˇ®çš„bug
    element.style.display = 'inline-block';
    element.innerHTML = text;
    var textWidth = element.clientWidth;
    var textHeight = element.clientHeight;
    document.body.removeChild(element);
    return {
        textWidth: textWidth,
        textHeight: textHeight
    };
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AggregationQueryBuilderType = exports.AggregationType = exports.TopologyValidatorRule = exports.SummaryType = exports.StatisticAnalystMode = exports.AnalystSizeUnit = exports.AnalystAreaUnit = exports.ClipAnalystMode = exports.ChartType = exports.ClientType = exports.Exponent = exports.VariogramMode = exports.InterpolationAlgorithmType = exports.SearchMode = exports.PixelFormat = exports.StatisticMode = exports.UGCLayerType = exports.LayerType = exports.ColorSpaceType = exports.GridType = exports.TransferPreference = exports.TransferTactic = exports.EditType = exports.DataReturnMode = exports.SurfaceAnalystMethod = exports.SmoothMethod = exports.OutputType = exports.OverlayOperationType = exports.BufferEndType = exports.TurnType = exports.SupplyCenterType = exports.SideType = exports.DirectionType = exports.LabelOverLengthMode = exports.LabelBackShape = exports.AlongLineDirection = exports.FillGradientMode = exports.TextAlignment = exports.ColorGradientType = exports.ThemeType = exports.RangeMode = exports.GraduatedMode = exports.GraphAxesTextDisplayMode = exports.ThemeGraphType = exports.ThemeGraphTextFormat = exports.EngineType = exports.BufferRadiusUnit = exports.Unit = exports.MeasureMode = exports.SpatialRelationType = exports.SpatialQueryMode = exports.JoinType = exports.QueryOption = exports.GeometryType = exports.ServerType = exports.DataFormat = undefined;

var _SuperMap = __webpack_require__(0);

/**
 * @enum DataFormat
 * @memberOf SuperMap
 * @description ćśŤĺŠˇčŻ·ć±‚čż”ĺ›žç»“ćžść•°ćŤ®ç±»ĺž‹
 * @type {string}
 */
var DataFormat = _SuperMap.SuperMap.DataFormat = {
    /** GEOJSON */
    GEOJSON: "GEOJSON",
    /** ISERVER */
    ISERVER: "ISERVER"
};
exports.DataFormat = DataFormat;

/**
 * @enum ServerType
 * @memberOf SuperMap
 * @description ćśŤĺŠˇĺ™¨ç±»ĺž‹
 * @type {string}
 */

var ServerType = _SuperMap.SuperMap.ServerType = {
    /** ISERVER */
    ISERVER: "ISERVER",
    /** IPORTAL */
    IPORTAL: "IPORTAL",
    /** ONLINE */
    ONLINE: "ONLINE"
};
exports.ServerType = ServerType;

/**
 * @enum GeometryType
 * @memberOf SuperMap
 * @description ĺ‡ ä˝•ĺŻąč±ˇćžšä¸ľ,ĺ®šäą‰äş†ä¸€çł»ĺ?—ĺ‡ ä˝•ĺŻąč±ˇç±»ĺž‹ă€‚
 * @type {string}
 */

var GeometryType = _SuperMap.SuperMap.GeometryType = {
    /** LINE */
    LINE: "LINE",
    /** LINEM */
    LINEM: "LINEM",
    /** POINT */
    POINT: "POINT",
    /** REGION */
    REGION: "REGION",
    /** ELLIPSE */
    ELLIPSE: "ELLIPSE",
    /** CIRCLE */
    CIRCLE: "CIRCLE",
    /** TEXT */
    TEXT: "TEXT",
    /** RECTANGLE */
    RECTANGLE: "RECTANGLE",
    /** UNKNOWN */
    UNKNOWN: "UNKNOWN"
};
exports.GeometryType = GeometryType;

/**
 * @enum QueryOption
 * @memberOf SuperMap
 * @description ćźĄčŻ˘ç»“ćžśç±»ĺž‹ćžšä¸ľ,ćŹŹčż°ćźĄčŻ˘ç»“ćžśčż”ĺ›žç±»ĺž‹ďĽŚĺŚ…ć‹¬ĺŹŞčż”ĺ›žĺ±žć€§ă€?ĺŹŞčż”ĺ›žĺ‡ ä˝•ĺ®žä˝“ä»ĄĺŹŠčż”ĺ›žĺ±žć€§ĺ’Śĺ‡ ä˝•ĺ®žä˝“ă€‚
 * @type {string}
 */

var QueryOption = _SuperMap.SuperMap.QueryOption = {
    /** ĺ±žć€§ */
    ATTRIBUTE: "ATTRIBUTE",
    /** ĺ±žć€§ĺ’Śĺ‡ ä˝•ĺŻąč±ˇ */
    ATTRIBUTEANDGEOMETRY: "ATTRIBUTEANDGEOMETRY",
    /** ĺ‡ ä˝•ĺŻąč±ˇ */
    GEOMETRY: "GEOMETRY"
};
exports.QueryOption = QueryOption;

/**
 * @enum JoinType
 * @memberOf SuperMap
 * @description ĺ…łč?”ćźĄčŻ˘ć—¶çš„ĺ…łč?”ç±»ĺž‹ĺ¸¸é‡Źă€‚
 * čŻĄç±»ĺ®šäą‰äş†ä¸¤ä¸Şčˇ¨äą‹é—´çš„čżžćŽĄç±»ĺž‹ĺ¸¸é‡ŹďĽŚĺ†łĺ®šäş†ĺŻąä¸¤ä¸Şčˇ¨äą‹é—´čż›čˇŚčżžćŽĄćźĄčŻ˘ć—¶ďĽŚćźĄčŻ˘ç»“ćžśä¸­ĺľ—ĺ?°çš„č®°ĺ˝•çš„ć?…ĺ†µă€‚
 * @type {string}
 */

var JoinType = _SuperMap.SuperMap.JoinType = {
    /** INNERJOIN */
    INNERJOIN: "INNERJOIN",
    /** LEFTJOIN */
    LEFTJOIN: "LEFTJOIN"
};
exports.JoinType = JoinType;

/**
 * @enum SpatialQueryMode
 * @memberOf SuperMap
 * @description  ç©şé—´ćźĄčŻ˘ć¨ˇĺĽŹćžšä¸ľă€‚čŻĄç±»ĺ®šäą‰äş†ç©şé—´ćźĄčŻ˘ć“Ťä˝ść¨ˇĺĽŹĺ¸¸é‡Źă€‚
 * @type {string}
 */

var SpatialQueryMode = _SuperMap.SuperMap.SpatialQueryMode = {
    /** ĺŚ…ĺ?«ç©şé—´ćźĄčŻ˘ć¨ˇĺĽŹ */
    CONTAIN: "CONTAIN",
    /** äş¤ĺŹ‰ç©şé—´ćźĄčŻ˘ć¨ˇĺĽŹ */
    CROSS: "CROSS",
    /** ĺ?†ç¦»ç©şé—´ćźĄčŻ˘ć¨ˇĺĽŹ */
    DISJOINT: "DISJOINT",
    /** é‡Ťĺ??ç©şé—´ćźĄčŻ˘ć¨ˇĺĽŹ */
    IDENTITY: "IDENTITY",
    /** ç›¸äş¤ç©şé—´ćźĄčŻ˘ć¨ˇĺĽŹ */
    INTERSECT: "INTERSECT",
    /** ć— ç©şé—´ćźĄčŻ˘ */
    NONE: "NONE",
    /** ĺŹ ĺŠ ç©şé—´ćźĄčŻ˘ć¨ˇĺĽŹ */
    OVERLAP: "OVERLAP",
    /** é‚»ćŽĄç©şé—´ćźĄčŻ˘ć¨ˇĺĽŹ */
    TOUCH: "TOUCH",
    /** č˘«ĺŚ…ĺ?«ç©şé—´ćźĄčŻ˘ć¨ˇĺĽŹ */
    WITHIN: "WITHIN"
};
exports.SpatialQueryMode = SpatialQueryMode;
/**
 * @enum SpatialRelationType
 * @memberOf SuperMap
 * @description  ć•°ćŤ®é›†ĺŻąč±ˇé—´çš„ç©şé—´ĺ…łçł»ćžšä¸ľă€‚
 * čŻĄç±»ĺ®šäą‰äş†ć•°ćŤ®é›†ĺŻąč±ˇé—´çš„ç©şé—´ĺ…łçł»ç±»ĺž‹ĺ¸¸é‡Źă€‚
 * @type {string}
 */

var SpatialRelationType = _SuperMap.SuperMap.SpatialRelationType = {
    /** ĺŚ…ĺ?«ĺ…łçł» */
    CONTAIN: "CONTAIN",
    /** ç›¸äş¤ĺ…łçł» */
    INTERSECT: "INTERSECT",
    /** č˘«ĺŚ…ĺ?«ĺ…łçł» */
    WITHIN: "WITHIN"
};
exports.SpatialRelationType = SpatialRelationType;

/**
 * @enum MeasureMode
 * @memberOf SuperMap
 * @type {string}
 * @description  é‡Źç®—ć¨ˇĺĽŹćžšä¸ľă€‚
 * čŻĄç±»ĺ®šäą‰äş†ä¸¤ç§Ťćµ‹é‡Źć¨ˇĺĽŹďĽšč·ťç¦»ćµ‹é‡Źĺ’Śéť˘ç§Żćµ‹é‡Źă€‚
 */

var MeasureMode = _SuperMap.SuperMap.MeasureMode = {
    /** č·ťç¦»ćµ‹é‡Ź */
    DISTANCE: "DISTANCE",
    /** éť˘ç§Żćµ‹é‡Ź */
    AREA: "AREA"
};
exports.MeasureMode = MeasureMode;

/**
 * @enum Unit
 * @memberOf SuperMap
 * @description  č·ťç¦»ĺŤ•ä˝Ťćžšä¸ľă€‚
 * čŻĄç±»ĺ®šäą‰äş†ä¸€çł»ĺ?—č·ťç¦»ĺŤ•ä˝Ťç±»ĺž‹ă€‚
 * @type {string}
 */

var Unit = _SuperMap.SuperMap.Unit = {
    /**  ç±ł */
    METER: "METER",
    /**  ĺŤ?ç±ł */
    KILOMETER: "KILOMETER",
    /**  č‹±é‡Ś */
    MILE: "MILE",
    /**  ç ? */
    YARD: "YARD",
    /**  ĺş¦ */
    DEGREE: "DEGREE",
    /**  ćŻ«ç±ł */
    MILLIMETER: "MILLIMETER",
    /**  ĺŽ?ç±ł */
    CENTIMETER: "CENTIMETER",
    /**  č‹±ĺŻ¸ */
    INCH: "INCH",
    /**  ĺ?†ç±ł */
    DECIMETER: "DECIMETER",
    /**  č‹±ĺ°ş */
    FOOT: "FOOT",
    /**  ç§’ */
    SECOND: "SECOND",
    /**  ĺ?† */
    MINUTE: "MINUTE",
    /**  ĺĽ§ĺş¦ */
    RADIAN: "RADIAN"
};
exports.Unit = Unit;

/**
 * @enum BufferRadiusUnit
 * @memberOf SuperMap
 * @description  çĽ“ĺ†˛ĺŚşč·ťç¦»ĺŤ•ä˝Ťćžšä¸ľă€‚
 * čŻĄç±»ĺ®šäą‰äş†ä¸€çł»ĺ?—çĽ“ĺ†˛č·ťç¦»ĺŤ•ä˝Ťç±»ĺž‹ă€‚
 * @type {string}
 */

var BufferRadiusUnit = _SuperMap.SuperMap.BufferRadiusUnit = {
    /**  ĺŽ?ç±ł */
    CENTIMETER: "CENTIMETER",
    /**  ĺ?†ç±ł */
    DECIMETER: "DECIMETER",
    /**  č‹±ĺ°ş */
    FOOT: "FOOT",
    /**  č‹±ĺŻ¸ */
    INCH: "INCH",
    /**  ĺŤ?ç±ł */
    KILOMETER: "KILOMETER",
    /**  ç±ł */
    METER: "METER",
    /**  č‹±é‡Ś */
    MILE: "MILE",
    /**  ćŻ«ç±ł */
    MILLIMETER: "MILLIMETER",
    /**  ç ? */
    YARD: "YARD"
};
exports.BufferRadiusUnit = BufferRadiusUnit;

/**
 * @enum EngineType
 * @memberOf SuperMap
 * @description  ć•°ćŤ®ćş?ĺĽ•ć“Žç±»ĺž‹ćžšä¸ľă€‚
 * @type {string}
 */

var EngineType = _SuperMap.SuperMap.EngineType = {
    /** ĺ˝±ĺ?ŹĺŹŞčŻ»ĺĽ•ć“Žç±»ĺž‹ďĽŚć–‡ä»¶ĺĽ•ć“ŽďĽŚé’?ĺŻąé€šç”¨ĺ˝±ĺ?Źć ĽĺĽŹĺ¦‚ BMPďĽŚJPGďĽŚTIFF ä»ĄĺŹŠč¶…ĺ›ľč‡Şĺ®šäą‰ĺ˝±ĺ?Źć ĽĺĽŹ SIT ç­‰ă€‚ */
    IMAGEPLUGINS: "IMAGEPLUGINS",
    /**  OGC ĺĽ•ć“Žç±»ĺž‹ďĽŚé’?ĺŻąäşŽ Web ć•°ćŤ®ćş?ďĽŚWeb ĺĽ•ć“ŽďĽŚç›®ĺ‰Ťć”ŻćŚ?çš„ç±»ĺž‹ćś‰ WMSďĽŚWFSďĽŚWCSă€‚ */
    OGC: "OGC",
    /**  Oracle ĺĽ•ć“Žç±»ĺž‹ďĽŚé’?ĺŻą Oracle ć•°ćŤ®ćş?ďĽŚć•°ćŤ®ĺş“ĺĽ•ć“Žă€‚ */
    ORACLEPLUS: "ORACLEPLUS",
    /**  SDB ĺĽ•ć“Žç±»ĺž‹ďĽŚć–‡ä»¶ĺĽ•ć“ŽďĽŚĺŤł SDB ć•°ćŤ®ćş?ă€‚ */
    SDBPLUS: "SDBPLUS",
    /**  SQL Server ĺĽ•ć“Žç±»ĺž‹ďĽŚé’?ĺŻą SQL Server ć•°ćŤ®ćş?ďĽŚć•°ćŤ®ĺş“ĺĽ•ć“Ž */
    SQLPLUS: "SQLPLUS",
    /**  UDB ĺĽ•ć“Žç±»ĺž‹ďĽŚć–‡ä»¶ĺĽ•ć“Žă€‚ */
    UDB: "UDB"
};
exports.EngineType = EngineType;

/**
 * @enum ThemeGraphTextFormat
 * @memberOf SuperMap
 * @description  ç»źč®ˇä¸“é˘?ĺ›ľć–‡ćś¬ć?ľç¤şć ĽĺĽŹćžšä¸ľă€‚
 * @type {string}
 */

var ThemeGraphTextFormat = _SuperMap.SuperMap.ThemeGraphTextFormat = {
    /**  ć ‡é˘?ă€‚ä»Ąĺ?„ĺ­?éˇąçš„ć ‡é˘?ćťĄčż›čˇŚć ‡ćł¨ă€‚ */
    CAPTION: "CAPTION",
    /**  ć ‡é˘? + ç™ľĺ?†ć•°ă€‚ä»Ąĺ?„ĺ­?éˇąçš„ć ‡é˘?ĺ’Ść‰€ĺŤ çš„ç™ľĺ?†ćŻ”ćťĄčż›čˇŚć ‡ćł¨ă€‚ */
    CAPTION_PERCENT: "CAPTION_PERCENT",
    /**  ć ‡é˘? + ĺ®žé™…ć•°ĺ€Ľă€‚ä»Ąĺ?„ĺ­?éˇąçš„ć ‡é˘?ĺ’Śçśźĺ®žć•°ĺ€ĽćťĄčż›čˇŚć ‡ćł¨ă€‚ */
    CAPTION_VALUE: "CAPTION_VALUE",
    /**  ç™ľĺ?†ć•°ă€‚ä»Ąĺ?„ĺ­?éˇąć‰€ĺŤ çš„ç™ľĺ?†ćŻ”ćťĄčż›čˇŚć ‡ćł¨ă€‚ */
    PERCENT: "PERCENT",
    /**  ĺ®žé™…ć•°ĺ€Ľă€‚ä»Ąĺ?„ĺ­?éˇąçš„çśźĺ®žć•°ĺ€ĽćťĄčż›čˇŚć ‡ćł¨ă€‚ */
    VALUE: "VALUE"

};
exports.ThemeGraphTextFormat = ThemeGraphTextFormat;

/**
 * @enum ThemeGraphType
 * @memberOf SuperMap
 * @description  ç»źč®ˇä¸“é˘?ĺ›ľç±»ĺž‹ćžšä¸ľă€‚
 * @type {string}
 */

var ThemeGraphType = _SuperMap.SuperMap.ThemeGraphType = {
    /**  éť˘ç§Żĺ›ľă€‚ */
    AREA: "AREA",
    /**  ćź±çŠ¶ĺ›ľă€‚ */
    BAR: "BAR",
    /**  ä¸‰ç»´ćź±çŠ¶ĺ›ľă€‚ */
    BAR3D: "BAR3D",
    /**  ćŠ?çşżĺ›ľă€‚ */
    LINE: "LINE",
    /**  éĄĽĺ›ľă€‚ */
    PIE: "PIE",
    /**  ä¸‰ç»´éĄĽĺ›ľă€‚ */
    PIE3D: "PIE3D",
    /**  ç‚ąçŠ¶ĺ›ľă€‚ */
    POINT: "POINT",
    /**  çŽŻçŠ¶ĺ›ľă€‚ */
    RING: "RING",
    /**  çŽ«ç‘°ĺ›ľă€‚ */
    ROSE: "ROSE",
    /**  ä¸‰ç»´çŽ«ç‘°ĺ›ľă€‚ */
    ROSE3D: "ROSE3D",
    /**  ĺ †ĺŹ ćź±çŠ¶ĺ›ľă€‚ */
    STACK_BAR: "STACK_BAR",
    /**  ä¸‰ç»´ĺ †ĺŹ ćź±çŠ¶ĺ›ľă€‚ */
    STACK_BAR3D: "STACK_BAR3D",
    /**  é?¶ć˘Żĺ›ľă€‚ */
    STEP: "STEP"
};
exports.ThemeGraphType = ThemeGraphType;

/**
 * @enum GraphAxesTextDisplayMode
 * @memberOf SuperMap
 * @description  ç»źč®ˇä¸“é˘?ĺ›ľĺť?ć ‡č˝´ć–‡ćś¬ć?ľç¤şć¨ˇĺĽŹă€‚
 * @type {string}
 */

var GraphAxesTextDisplayMode = _SuperMap.SuperMap.GraphAxesTextDisplayMode = {
    /**  ć?ľç¤şĺ…¨é?¨ć–‡ćś¬ă€‚ */
    ALL: "ALL",
    /**  ä¸Ťć?ľç¤şă€‚ */
    NONE: "NONE",
    /**  ć?ľç¤şYč˝´çš„ć–‡ćś¬ă€‚ */
    YAXES: "YAXES"
};
exports.GraphAxesTextDisplayMode = GraphAxesTextDisplayMode;

/**
 * @enum GraduatedMode
 * @memberOf SuperMap
 * @description  ä¸“é˘?ĺ›ľĺ?†çş§ć¨ˇĺĽŹćžšä¸ľă€‚
 *
 * @type {string}
 */

var GraduatedMode = _SuperMap.SuperMap.GraduatedMode = {
    /**  ĺ¸¸é‡Źĺ?†çş§ć¨ˇĺĽŹă€‚ */
    CONSTANT: "CONSTANT",
    /** ĺŻąć•°ĺ?†çş§ć¨ˇĺĽŹă€‚ */
    LOGARITHM: "LOGARITHM",
    /**  ĺąłć–ąć ąĺ?†çş§ć¨ˇĺĽŹă€‚ */
    SQUAREROOT: "SQUAREROOT"
};
exports.GraduatedMode = GraduatedMode;

/**
 * @enum RangeMode
 * @memberOf SuperMap
 * @description  čŚ?ĺ›´ĺ?†ć®µä¸“é˘?ĺ›ľĺ?†ć®µć–ąĺĽŹćžšä¸ľă€‚
 * @type {string}
 */

var RangeMode = _SuperMap.SuperMap.RangeMode = {
    /**  č‡Şĺ®šäą‰ĺ?†ć®µćł•ă€‚ */
    CUSTOMINTERVAL: "CUSTOMINTERVAL",
    /**  ç­‰č·ťç¦»ĺ?†ć®µćł•ă€‚ */
    EQUALINTERVAL: "EQUALINTERVAL",
    /**  ĺŻąć•°ĺ?†ć®µćł•ă€‚ */
    LOGARITHM: "LOGARITHM",
    /**  ç­‰č®ˇć•°ĺ?†ć®µćł•ă€‚ */
    QUANTILE: "QUANTILE",
    /**  ĺąłć–ąć ąĺ?†ć®µćł•ă€‚ */
    SQUAREROOT: "SQUAREROOT",
    /**  ć ‡ĺ‡†ĺ·®ĺ?†ć®µćł•ă€‚ */
    STDDEVIATION: "STDDEVIATION"
};
exports.RangeMode = RangeMode;

/**
 * @enum ThemeType
 * @memberOf SuperMap
 * @description  ä¸“é˘?ĺ›ľç±»ĺž‹ćžšä¸ľă€‚
 * @type {string}
 */

var ThemeType = _SuperMap.SuperMap.ThemeType = {
    /** ç‚ąĺŻ†ĺş¦ä¸“é˘?ĺ›ľă€‚ */
    DOTDENSITY: "DOTDENSITY",
    /** ç­‰çş§ç¬¦ĺŹ·ä¸“é˘?ĺ›ľă€‚ */
    GRADUATEDSYMBOL: "GRADUATEDSYMBOL",
    /** ç»źč®ˇä¸“é˘?ĺ›ľă€‚ */
    GRAPH: "GRAPH",
    /** ć ‡ç­ľä¸“é˘?ĺ›ľă€‚ */
    LABEL: "LABEL",
    /** ĺ?†ć®µä¸“é˘?ĺ›ľă€‚ */
    RANGE: "RANGE",
    /** ĺŤ?ĺ€Ľä¸“é˘?ĺ›ľă€‚ */
    UNIQUE: "UNIQUE"
};
exports.ThemeType = ThemeType;

/**
 * @enum ColorGradientType
 * @memberOf SuperMap
 * @description  ć¸?ĺŹ?é˘śč‰˛ćžšä¸ľă€‚
 * @type {string}
 */

var ColorGradientType = _SuperMap.SuperMap.ColorGradientType = {
    /** é»‘ç™˝ć¸?ĺŹ?č‰˛ă€‚ */
    BLACK_WHITE: "BLACKWHITE",
    /** č“ťé»‘ć¸?ĺŹ?č‰˛ă€‚ */
    BLUE_BLACK: "BLUEBLACK",
    /** č“ťçş˘ć¸?ĺŹ?č‰˛ă€‚ */
    BLUE_RED: "BLUERED",
    /** č“ťç™˝ć¸?ĺŹ?č‰˛ă€‚ */
    BLUE_WHITE: "BLUEWHITE",
    /** éť’é»‘ć¸?ĺŹ?č‰˛ă€‚ */
    CYAN_BLACK: "CYANBLACK",
    /** éť’č“ťć¸?ĺŹ?č‰˛ă€‚ */
    CYAN_BLUE: "CYANBLUE",
    /** éť’ç»żć¸?ĺŹ?č‰˛ă€‚ */
    CYAN_GREEN: "CYANGREEN",
    /** éť’ç™˝ć¸?ĺŹ?č‰˛ă€‚ */
    CYAN_WHITE: "CYANWHITE",
    /** ç»żé»‘ć¸?ĺŹ?č‰˛ă€‚ */
    GREEN_BLACK: "GREENBLACK",
    /** ç»żč“ťć¸?ĺŹ?č‰˛ă€‚ */
    GREEN_BLUE: "GREENBLUE",
    /** ç»żć©™ç´«ć¸?ĺŹ?č‰˛ă€‚ */
    GREEN_ORANGE_VIOLET: "GREENORANGEVIOLET",
    /** ç»żçş˘ć¸?ĺŹ?č‰˛ă€‚ */
    GREEN_RED: "GREENRED",
    /** č“ťçş˘ć¸?ĺŹ?č‰˛ă€‚ */
    GREEN_WHITE: "GREENWHITE",
    /** ç˛‰é»‘ć¸?ĺŹ?č‰˛ă€‚ */
    PINK_BLACK: "PINKBLACK",
    /** ç˛‰č“ťć¸?ĺŹ?č‰˛ă€‚ */
    PINK_BLUE: "PINKBLUE",
    /** ç˛‰çş˘ć¸?ĺŹ?č‰˛ă€‚ */
    PINK_RED: "PINKRED",
    /** ç˛‰ç™˝ć¸?ĺŹ?č‰˛ă€‚ */
    PINK_WHITE: "PINKWHITE",
    /** ĺ˝©č™ąč‰˛ă€‚ */
    RAIN_BOW: "RAINBOW",
    /** çş˘é»‘ć¸?ĺŹ?č‰˛ă€‚ */
    RED_BLACK: "REDBLACK",
    /** çş˘ç™˝ć¸?ĺŹ?č‰˛ă€‚ */
    RED_WHITE: "REDWHITE",
    /** ĺ…‰č°±ć¸?ĺŹ?ă€‚ */
    SPECTRUM: "SPECTRUM",
    /** ĺś°ĺ˝˘ć¸?ĺŹ?,ç”¨äşŽä¸‰ç»´ć?ľç¤şć•?ćžśčľ?ĺĄ˝ă€‚ */
    TERRAIN: "TERRAIN",
    /** é»„é»‘ć¸?ĺŹ?č‰˛ă€‚ */
    YELLOW_BLACK: "YELLOWBLACK",
    /** é»„č“ťć¸?ĺŹ?č‰˛ă€‚ */
    YELLOW_BLUE: "YELLOWBLUE",
    /** é»„ç»żć¸?ĺŹ?č‰˛ă€‚ */
    YELLOW_GREEN: "YELLOWGREEN",
    /** é»„çş˘ć¸?ĺŹ?č‰˛ă€‚ */
    YELLOW_RED: "YELLOWRED",
    /** é»„ç™˝ć¸?ĺŹ?č‰˛ă€‚ */
    YELLOW_WHITE: "YELLOWWHITE"
};
exports.ColorGradientType = ColorGradientType;

/**
 * @enum TextAlignment
 * @memberOf SuperMap
 * @description  ć–‡ćś¬ĺŻąé˝?ćžšä¸ľă€‚
 * @type {string}
 */

var TextAlignment = _SuperMap.SuperMap.TextAlignment = {
    /** ĺ·¦ä¸Šč§’ĺŻąé˝?ă€‚ */
    TOPLEFT: "TOPLEFT",
    /** éˇ¶é?¨ĺ±…ä¸­ĺŻąé˝?ă€‚ */
    TOPCENTER: "TOPCENTER",
    /** ĺŹłä¸Šč§’ĺŻąé˝?ă€‚ */
    TOPRIGHT: "TOPRIGHT",
    /** ĺźşĺ‡†çşżĺ·¦ĺŻąé˝?ă€‚ */
    BASELINELEFT: "BASELINELEFT",
    /** ĺźşĺ‡†çşżĺ±…ä¸­ĺŻąé˝?ă€‚ */
    BASELINECENTER: "BASELINECENTER",
    /** ĺźşĺ‡†çşżĺŹłĺŻąé˝?ă€‚ */
    BASELINERIGHT: "BASELINERIGHT",
    /** ĺ·¦ä¸‹č§’ĺŻąé˝?ă€‚ */
    BOTTOMLEFT: "BOTTOMLEFT",
    /** ĺş•é?¨ĺ±…ä¸­ĺŻąé˝?ă€‚ */
    BOTTOMCENTER: "BOTTOMCENTER",
    /** ĺŹłä¸‹č§’ĺŻąé˝?ă€‚ */
    BOTTOMRIGHT: "BOTTOMRIGHT",
    /** ĺ·¦ä¸­ĺŻąé˝?ă€‚ */
    MIDDLELEFT: "MIDDLELEFT",
    /** ä¸­ĺż?ĺŻąé˝?ă€‚ */
    MIDDLECENTER: "MIDDLECENTER",
    /** ĺŹłä¸­ĺŻąé˝?ă€‚ */
    MIDDLERIGHT: "MIDDLERIGHT"
};
exports.TextAlignment = TextAlignment;
/**
 * @enum FillGradientMode
 * @memberOf SuperMap
 * @description  ć¸?ĺŹ?ĺˇ«ĺ……éŁŽć Ľçš„ć¸?ĺŹ?ç±»ĺž‹ćžšä¸ľă€‚
 * @type {string}
 */

var FillGradientMode = _SuperMap.SuperMap.FillGradientMode = {
    /** ć— ć¸?ĺŹ?ă€‚ */
    NONE: "NONE",
    /** çşżć€§ć¸?ĺŹ?ĺˇ«ĺ……ă€‚ */
    LINEAR: "LINEAR",
    /** čľ?ĺ°„ć¸?ĺŹ?ĺˇ«ĺ……ă€‚ */
    RADIAL: "RADIAL",
    /** ĺś†é”Ąć¸?ĺŹ?ĺˇ«ĺ……ă€‚ */
    CONICAL: "CONICAL",
    /** ĺ››č§’ć¸?ĺŹ?ĺˇ«ĺ……ă€‚ */
    SQUARE: "SQUARE"
};
exports.FillGradientMode = FillGradientMode;

/**
 * @enum AlongLineDirection
 * @memberOf SuperMap
 * @description  ć ‡ç­ľć˛żçşżć ‡ćł¨ć–ąĺ?‘ćžšä¸ľă€‚
 * @type {string}
 */

var AlongLineDirection = _SuperMap.SuperMap.AlongLineDirection = {
    /** ć˛żçşżçš„ćł•çşżć–ąĺ?‘ć”ľç˝®ć ‡ç­ľă€‚ */
    NORMAL: "ALONG_LINE_NORMAL",
    /** ä»Žä¸‹ĺ?°ä¸ŠďĽŚä»Žĺ·¦ĺ?°ĺŹłć”ľç˝®ă€‚ */
    LB_TO_RT: "LEFT_BOTTOM_TO_RIGHT_TOP",
    /** ä»Žä¸Šĺ?°ä¸‹ďĽŚä»Žĺ·¦ĺ?°ĺŹłć”ľç˝®ă€‚ */
    LT_TO_RB: "LEFT_TOP_TO_RIGHT_BOTTOM",
    /** ä»Žä¸‹ĺ?°ä¸ŠďĽŚä»ŽĺŹłĺ?°ĺ·¦ć”ľç˝®ă€‚ */
    RB_TO_LT: "RIGHT_BOTTOM_TO_LEFT_TOP",
    /** ä»Žä¸Šĺ?°ä¸‹ďĽŚä»ŽĺŹłĺ?°ĺ·¦ć”ľç˝®ă€‚ */
    RT_TO_LB: "RIGHT_TOP_TO_LEFT_BOTTOM"
};
exports.AlongLineDirection = AlongLineDirection;

/**
 * @enum LabelBackShape
 * @memberOf SuperMap
 * @description  ć ‡ç­ľä¸“é˘?ĺ›ľä¸­ć ‡ç­ľč?Ść™Żçš„ĺ˝˘çŠ¶ćžšä¸ľă€‚
 * @type {string}
 */

var LabelBackShape = _SuperMap.SuperMap.LabelBackShape = {
    /** čŹ±ĺ˝˘č?Ść™ŻďĽŚĺŤłć ‡ç­ľč?Ść™Żçš„ĺ˝˘çŠ¶ä¸şčŹ±ĺ˝˘ă€‚ */
    DIAMOND: "DIAMOND",
    /** ć¤­ĺś†ĺ˝˘č?Ść™ŻďĽŚĺŤłć ‡ç­ľč?Ść™Żçš„čˇŚçŠ¶ä¸şć¤­ĺś†ĺ˝˘ă€‚ */
    ELLIPSE: "ELLIPSE",
    /** ç¬¦ĺŹ·č?Ść™ŻďĽŚĺŤłć ‡ç­ľč?Ść™Żçš„ĺ˝˘çŠ¶ä¸şč®ľĺ®šçš„ç¬¦ĺŹ·ă€‚ */
    MARKER: "MARKER",
    /** ç©şč?Ść™ŻďĽŚĺŤłä¸Ťä˝żç”¨ä»»ä˝•ĺ˝˘çŠ¶ä˝śä¸şć ‡ç­ľçš„č?Ść™Żă€‚ */
    NONE: "NONE",
    /** çź©ĺ˝˘č?Ść™ŻďĽŚĺŤłć ‡ç­ľč?Ść™Żçš„ĺ˝˘çŠ¶ä¸şçź©ĺ˝˘ă€‚ */
    RECT: "RECT",
    /** ĺś†č§’çź©ĺ˝˘č?Ść™ŻďĽŚĺŤłć ‡ç­ľč?Ść™Żçš„ĺ˝˘çŠ¶ä¸şĺś†č§’çź©ĺ˝˘ă€‚ */
    ROUNDRECT: "ROUNDRECT",
    /** ä¸‰č§’ĺ˝˘č?Ść™ŻďĽŚĺŤłć ‡ç­ľč?Ść™Żçš„ĺ˝˘çŠ¶ä¸şä¸‰č§’ĺ˝˘ă€‚ */
    TRIANGLE: "TRIANGLE"
};
exports.LabelBackShape = LabelBackShape;

/**
 * @enum LabelOverLengthMode
 * @memberOf SuperMap
 * @description  ć ‡ç­ľä¸“é˘?ĺ›ľä¸­č¶…é•żć ‡ç­ľçš„ĺ¤„ç?†ć¨ˇĺĽŹćžšä¸ľă€‚
 * @type {string}
 */

var LabelOverLengthMode = _SuperMap.SuperMap.LabelOverLengthMode = {
    /** ćŤ˘čˇŚć?ľç¤şă€‚ */
    NEWLINE: "NEWLINE",
    /** ĺŻąč¶…é•żć ‡ç­ľä¸Ťčż›čˇŚĺ¤„ç?†ă€‚ */
    NONE: "NONE",
    /** çś?ç•Ąč¶…ĺ‡şé?¨ĺ?†ă€‚ */
    OMIT: "OMIT"
};
exports.LabelOverLengthMode = LabelOverLengthMode;

/**
 * @enum DirectionType
 * @memberOf SuperMap
 * @description  ç˝‘ç»śĺ?†ćž?ä¸­ć–ąĺ?‘ćžšä¸ľă€‚
 * ĺś¨čˇŚé©¶ĺĽ•ĺŻĽĺ­?éˇąä¸­ä˝żç”¨ă€‚
 * @type {string}
 */

var DirectionType = _SuperMap.SuperMap.DirectionType = {
    /** ä¸śă€‚ */
    EAST: "EAST",
    /** ć— ć–ąĺ?‘ă€‚ */
    NONE: "NONE",
    /** ĺŚ—ă€‚ */
    NORTH: "NORTH",
    /** ĺŤ—ă€‚ */
    SOURTH: "SOURTH",
    /** čĄżă€‚ */
    WEST: "WEST"
};
exports.DirectionType = DirectionType;

/**
 * @enum SideType
 * @memberOf SuperMap
 * @description  čˇŚé©¶ä˝Ťç˝®ćžšä¸ľă€‚
 * čˇ¨ç¤şĺś¨čˇŚé©¶ĺś¨č·Żçš„ĺ·¦čľąă€?ĺŹłčľąć?–č€…č·Żä¸Šçš„ćžšä¸ľ,čŻĄç±»ç”¨ĺś¨čˇŚé©¶ĺŻĽĺĽ•ĺ­?éˇąç±»ä¸­ă€‚
 * @type {string}
 */

var SideType = _SuperMap.SuperMap.SideType = {
    /** č·Żçš„ĺ·¦äľ§ă€‚ */
    LEFT: "LEFT",
    /** ĺś¨č·Żä¸ŠďĽ?ĺŤłč·Żçš„ä¸­é—´ďĽ‰ă€‚ */
    MIDDLE: "MIDDLE",
    /** ć— ć•?ĺ€Ľă€‚ */
    NONE: "NONE",
    /** č·Żçš„ĺŹłäľ§ă€‚ */
    RIGHT: "RIGHT"
};
exports.SideType = SideType;

/**
 * @enum SupplyCenterType
 * @memberOf SuperMap
 * @description  čµ„ćş?äľ›ç»™ä¸­ĺż?ç±»ĺž‹ćžšä¸ľă€‚
 * čŻĄćžšä¸ľĺ®šäą‰äş†ç˝‘ç»śĺ?†ćž?ä¸­čµ„ćş?ä¸­ĺż?ç‚ąçš„ç±»ĺž‹ďĽŚä¸»č¦?ç”¨äşŽčµ„ćş?ĺ?†é…Ťĺ’Śé€‰ĺť€ĺ?†ĺŚşă€‚
 * čµ„ćş?äľ›ç»™ä¸­ĺż?ç‚ąçš„ç±»ĺž‹ĺŚ…ć‹¬éťžä¸­ĺż?ďĽŚĺ›şĺ®šä¸­ĺż?ĺ’ŚĺŹŻé€‰ä¸­ĺż?ă€‚ĺ›şĺ®šä¸­ĺż?ç”¨äşŽčµ„ćş?ĺ?†é…Ťĺ?†ćž?ďĽ› ĺ›şĺ®šä¸­ĺż?ĺ’ŚĺŹŻé€‰ä¸­ĺż?ç”¨äşŽé€‰ĺť€ĺ?†ćž?ďĽ›éťžä¸­ĺż?ĺś¨ä¸¤ç§Ťç˝‘ç»śĺ?†ćž?ć—¶é?˝ä¸Ťäş?č€?č™‘ă€‚
 * @type {string}
 */

var SupplyCenterType = _SuperMap.SuperMap.SupplyCenterType = {
    /** ĺ›şĺ®šä¸­ĺż?ç‚ąă€‚ */
    FIXEDCENTER: "FIXEDCENTER",
    /** éťžä¸­ĺż?ç‚ąă€‚ */
    NULL: "NULL",
    /** ĺŹŻé€‰ä¸­ĺż?ç‚ąă€‚ */
    OPTIONALCENTER: "OPTIONALCENTER"
};
exports.SupplyCenterType = SupplyCenterType;

/**
 * @enum TurnType
 * @memberOf SuperMap
 * @description  č˝¬ĺĽŻć–ąĺ?‘ćžšä¸ľă€‚
 * ç”¨ĺś¨čˇŚé©¶ĺĽ•ĺŻĽĺ­?éˇąç±»ä¸­ďĽŚčˇ¨ç¤şč˝¬ĺĽŻçš„ć–ąĺ?‘ă€‚
 * @type {string}
 */

var TurnType = _SuperMap.SuperMap.TurnType = {
    /** ĺ?‘ĺ‰Ťç›´čˇŚă€‚ */
    AHEAD: "AHEAD",
    /** ćŽ‰ĺ¤´ă€‚ */
    BACK: "BACK",
    /** ç»?ç‚ąďĽŚä¸Ťć‹?ĺĽŻă€‚ */
    END: "END",
    /** ĺ·¦č˝¬ĺĽŻă€‚ */
    LEFT: "LEFT",
    /** ć— ć•?ĺ€Ľă€‚ */
    NONE: "NONE",
    /** ĺŹłč˝¬ĺĽŻă€‚ */
    RIGHT: "RIGHT"
};
exports.TurnType = TurnType;

/**
 * @enum BufferEndType
 * @memberOf SuperMap
 * @description  çĽ“ĺ†˛ĺŚşĺ?†ćž?BufferEndç±»ĺž‹ă€‚
 * @type {string}
 */

var BufferEndType = _SuperMap.SuperMap.BufferEndType = {
    /** FLAT */
    FLAT: "FLAT",
    /** ROUND */
    ROUND: "ROUND"
};
exports.BufferEndType = BufferEndType;
/**
 * @enum OverlayOperationType
 * @memberOf SuperMap
 * @description  ĺŹ ĺŠ ĺ?†ćž?ç±»ĺž‹ćžšä¸ľă€‚
 * @type {string}
 */

var OverlayOperationType = _SuperMap.SuperMap.OverlayOperationType = {
    /** ć“Ťä˝ść•°ćŤ®é›†ďĽ?ĺ‡ ä˝•ĺŻąč±ˇďĽ‰čŁ?ĺ‰Şč˘«ć“Ťä˝ść•°ćŤ®é›†ďĽ?ĺ‡ ä˝•ĺŻąč±ˇďĽ‰ă€‚ */
    CLIP: "CLIP",
    /** ĺś¨č˘«ć“Ťä˝ść•°ćŤ®é›†ďĽ?ĺ‡ ä˝•ĺŻąč±ˇďĽ‰ä¸Šć“¦é™¤ćŽ‰ä¸Žć“Ťä˝ść•°ćŤ®é›†ďĽ?ĺ‡ ä˝•ĺŻąč±ˇďĽ‰ç›¸é‡Ťĺ??çš„é?¨ĺ?†ă€‚ă€‚ */
    ERASE: "ERASE",
    /**ĺŻąč˘«ć“Ťä˝ść•°ćŤ®é›†ďĽ?ĺ‡ ä˝•ĺŻąč±ˇďĽ‰čż›čˇŚĺ?Śä¸€ć“Ťä˝śďĽŚĺŤłć“Ťä˝ść‰§čˇŚĺ?ŽďĽŚč˘«ć“Ťä˝ść•°ćŤ®é›†ďĽ?ĺ‡ ä˝•ĺŻąč±ˇďĽ‰ĺŚ…ĺ?«ćťĄč‡Şć“Ťä˝ść•°ćŤ®é›†ďĽ?ĺ‡ ä˝•ĺŻąč±ˇďĽ‰çš„ĺ‡ ä˝•ĺ˝˘çŠ¶ă€‚ */
    IDENTITY: "IDENTITY",
    /** ĺŻąä¸¤ä¸Şć•°ćŤ®é›†ďĽ?ĺ‡ ä˝•ĺŻąč±ˇďĽ‰ć±‚äş¤ďĽŚčż”ĺ›žä¸¤ä¸Şć•°ćŤ®é›†ďĽ?ĺ‡ ä˝•ĺŻąč±ˇďĽ‰çš„äş¤é›†ă€‚ */
    INTERSECT: "INTERSECT",
    /** ĺŻąä¸¤ä¸Şéť˘ć•°ćŤ®é›†ďĽ?ĺ‡ ä˝•ĺŻąč±ˇďĽ‰čż›čˇŚĺ??ĺą¶ć“Ťä˝śă€‚ă€‚ */
    UNION: "UNION",
    /** ĺŻąä¸¤ä¸Şéť˘ć•°ćŤ®é›†ďĽ?ĺ‡ ä˝•ĺŻąč±ˇďĽ‰čż›čˇŚć›´ć–°ć“Ťä˝śă€‚ */
    UPDATE: "UPDATE",
    /** ĺŻąä¸¤ä¸Şéť˘ć•°ćŤ®é›†ďĽ?ĺ‡ ä˝•ĺŻąč±ˇďĽ‰čż›čˇŚĺŻąç§°ĺ·®ć“Ťä˝śă€‚ */
    XOR: "XOR"
};
exports.OverlayOperationType = OverlayOperationType;

/**
 * @enum OutputType
 * @memberOf SuperMap
 * @description  ĺ?†ĺ¸?ĺĽŹĺ?†ćž?čľ“ĺ‡şç±»ĺž‹ćžšä¸ľă€‚
 * @type {string}
 */

var OutputType = _SuperMap.SuperMap.OutputType = {
    /** INDEXEDHDFS */
    INDEXEDHDFS: "INDEXEDHDFS",
    /** UDB */
    UDB: "UDB",
    /** MONGODB */
    MONGODB: "MONGODB",
    /** PG */
    PG: "PG"
};
exports.OutputType = OutputType;

/**
 * @enum SmoothMethod
 * @memberOf SuperMap
 * @description  ĺ…‰ć»‘ć–ąćł•ćžšä¸ľă€‚
 * ç”¨äşŽä»ŽGrid ć?–DEMć•°ćŤ®ç”źć??ç­‰ĺ€Ľçşżć?–ç­‰ĺ€Ľéť˘ć—¶ĺŻąç­‰ĺ€Ľçşżć?–č€…ç­‰ĺ€Ľéť˘çš„čľąç•Śçşżčż›čˇŚĺąłć»‘ĺ¤„ç?†çš„ć–ąćł•ă€‚
 * @type {string}
 */

var SmoothMethod = _SuperMap.SuperMap.SmoothMethod = {
    /** B ć ·ćťˇćł•ă€‚ */
    BSPLINE: "BSPLINE",
    /** çŁ¨č§’ćł•ă€‚ */
    POLISH: "POLISH"
};
exports.SmoothMethod = SmoothMethod;
/**
 * @enum SurfaceAnalystMethod
 * @memberOf SuperMap
 * @description  čˇ¨éť˘ĺ?†ćž?ć–ąćł•ćžšä¸ľă€‚
 * é€ščż‡ĺŻąć•°ćŤ®čż›čˇŚčˇ¨éť˘ĺ?†ćž?ďĽŚč?˝ĺ¤źćŚ–ćŽ?ĺŽźĺ§‹ć•°ćŤ®ć‰€ĺŚ…ĺ?«çš„äżˇć?ŻďĽŚä˝żćź?äş›ç»†čŠ‚ć?Žć?ľĺŚ–ďĽŚć?“äşŽĺ?†ćž?ă€‚
 * @type {string}
 */

var SurfaceAnalystMethod = _SuperMap.SuperMap.SurfaceAnalystMethod = {
    /** ç­‰ĺ€ĽçşżćŹ?ĺŹ–ă€‚ */
    ISOLINE: "ISOLINE",
    /** ç­‰ĺ€Ľéť˘ćŹ?ĺŹ–ă€‚ */
    ISOREGION: "ISOREGION"
};
exports.SurfaceAnalystMethod = SurfaceAnalystMethod;
/**
 * @enum DataReturnMode
 * @memberOf SuperMap
 * @description  ć•°ćŤ®čż”ĺ›žć¨ˇĺĽŹćžšä¸ľă€‚
 * čŻĄćžšä¸ľç”¨äşŽćŚ‡ĺ®šç©şé—´ĺ?†ćž?čż”ĺ›žç»“ćžść¨ˇĺĽŹ,ĺŚ…ĺ?«čż”ĺ›žć•°ćŤ®é›†ć ‡čŻ†ĺ’Śč®°ĺ˝•é›†ă€?ĺŹŞčż”ĺ›žć•°ćŤ®é›†ć ‡čŻ†(ć•°ćŤ®é›†ĺ?Ťç§°@ć•°ćŤ®ćş?ĺ?Ťç§°)ĺŹŠĺŹŞčż”ĺ›žč®°ĺ˝•é›†ä¸‰ç§Ťć¨ˇĺĽŹă€‚
 * @type {string}
 */

var DataReturnMode = _SuperMap.SuperMap.DataReturnMode = {
    /** čż”ĺ›žç»“ćžść•°ćŤ®é›†ć ‡čŻ†(ć•°ćŤ®é›†ĺ?Ťç§°@ć•°ćŤ®ćş?ĺ?Ťç§°)ĺ’Śč®°ĺ˝•é›†ďĽ?RecordSetďĽ‰ă€‚ */
    DATASET_AND_RECORDSET: "DATASET_AND_RECORDSET",
    /** ĺŹŞčż”ĺ›žć•°ćŤ®é›†ć ‡čŻ†ďĽ?ć•°ćŤ®é›†ĺ?Ťç§°@ć•°ćŤ®ćş?ĺ?Ťç§°ďĽ‰ă€‚ */
    DATASET_ONLY: "DATASET_ONLY",
    /** ĺŹŞčż”ĺ›žč®°ĺ˝•é›†ďĽ?RecordSetďĽ‰ă€‚ */
    RECORDSET_ONLY: "RECORDSET_ONLY"
};
exports.DataReturnMode = DataReturnMode;
/**
 * @enum EditType
 * @memberOf SuperMap
 * @description  č¦?ç´ é›†ć›´ć–°ć¨ˇĺĽŹćžšä¸ľă€‚
 * čŻĄćžšä¸ľç”¨äşŽćŚ‡ĺ®šć•°ćŤ®ćśŤĺŠˇä¸­č¦?ç´ é›†ć›´ć–°ć¨ˇĺĽŹ,ĺŚ…ĺ?«ć·»ĺŠ č¦?ç´ é›†ă€?ć›´ć–°č¦?ç´ é›†ĺ’Śĺ? é™¤č¦?ç´ é›†ă€‚
 * @type {string}
 */

var EditType = _SuperMap.SuperMap.EditType = {
    /** ĺ˘žĺŠ ć“Ťä˝śă€‚ */
    ADD: "add",
    /** äż®ć”ąć“Ťä˝śă€‚ */
    UPDATE: "update",
    /** ĺ? é™¤ć“Ťä˝śă€‚ */
    DELETE: "delete"
};
exports.EditType = EditType;

/**
 * @enum TransferTactic
 * @memberOf SuperMap
 * @description  ĺ…¬äş¤ćŤ˘äą?ç­–ç•Ąćžšä¸ľă€‚
 * čŻĄćžšä¸ľç”¨äşŽćŚ‡ĺ®šĺ…¬äş¤ćśŤĺŠˇä¸­č¦?ç´ é›†ć›´ć–°ć¨ˇĺĽŹ,ĺŚ…ĺ?«ć·»ĺŠ č¦?ç´ é›†ă€?ć›´ć–°č¦?ç´ é›†ĺ’Śĺ? é™¤č¦?ç´ é›†ă€‚
 * @type {string}
 */

var TransferTactic = _SuperMap.SuperMap.TransferTactic = {
    /** ć—¶é—´çź­ă€‚ */
    LESS_TIME: "LESS_TIME",
    /** ĺ°‘ćŤ˘äą?ă€‚ */
    LESS_TRANSFER: "LESS_TRANSFER",
    /** ĺ°‘ć­ĄčˇŚă€‚ */
    LESS_WALK: "LESS_WALK",
    /** č·ťç¦»ćś€çź­ă€‚ */
    MIN_DISTANCE: "MIN_DISTANCE"
};
exports.TransferTactic = TransferTactic;

/**
 * @enum TransferPreference
 * @memberOf SuperMap
 * @description  ĺ…¬äş¤ćŤ˘äą?ç­–ç•Ąćžšä¸ľă€‚
 * čŻĄćžšä¸ľç”¨äşŽćŚ‡ĺ®šäş¤é€šćŤ˘äą?ćśŤĺŠˇä¸­č®ľç˝®ĺś°é“?äĽ?ĺ…?ă€?ĺ…¬äş¤äĽ?ĺ…?ă€?ä¸Ťäą?ĺś°é“?ă€?ć— ĺ?ŹĺĄ˝ç­‰ĺ?ŹĺĄ˝č®ľç˝®ă€‚
 * @type {string}
 */

var TransferPreference = _SuperMap.SuperMap.TransferPreference = {
    /** ĺ…¬äş¤ć±˝č˝¦äĽ?ĺ…?ă€‚ */
    BUS: "BUS",
    /** ĺś°é“?äĽ?ĺ…?ă€‚ */
    SUBWAY: "SUBWAY",
    /** ä¸Ťäą?ĺť?ĺś°é“?ă€‚ */
    NO_SUBWAY: "NO_SUBWAY",
    /** ć— äą?č˝¦ĺ?ŹĺĄ˝ă€‚ */
    NONE: "NONE"
};
exports.TransferPreference = TransferPreference;

/**
 * @enum GridType
 * @memberOf SuperMap
 * @description  ĺś°ĺ›ľč?Ść™Żć Ľç˝‘ç±»ĺž‹ćžšä¸ľă€‚
 * @type {string}
 */

var GridType = _SuperMap.SuperMap.GridType = {
    /** ĺŤ?ĺ­—ĺŹ‰ä¸ťă€‚ */
    CROSS: "CROSS",
    /** ç˝‘ć Ľçşżă€‚ */
    GRID: "GRID",
    /** ç‚ąă€‚ */
    POINT: "POINT"
};
exports.GridType = GridType;

/**
 * @enum ColorSpaceType
 * @memberOf SuperMap
 * @description  č‰˛ĺ˝©ç©şé—´ćžšä¸ľă€‚
 * ç”±äşŽć??č‰˛ĺŽźç?†çš„ä¸Ťĺ?ŚďĽŚĺ†łĺ®šäş†ć?ľç¤şĺ™¨ă€?ćŠ•ĺ˝±ä»Şčż™ç±»éť č‰˛ĺ…‰ç›´ćŽĄĺ??ć??é˘śč‰˛çš„é˘śč‰˛č®ľĺ¤‡ĺ’Ść‰“ĺŤ°ćśşă€?
 * ĺŤ°ĺ?·ćśşčż™ç±»éť ä˝żç”¨é˘ść–™çš„ĺŤ°ĺ?·č®ľĺ¤‡ĺś¨ç”źć??é˘śč‰˛ć–ąĺĽŹä¸Šçš„ĺŚşĺ?«ă€‚
 * é’?ĺŻąä¸Ščż°ä¸Ťĺ?Ść??č‰˛ć–ąĺĽŹďĽŚSuperMap ćŹ?äľ›ä¸¤ç§Ťč‰˛ĺ˝©ç©şé—´ďĽŚ
 * ĺ?†ĺ?«ä¸ş RGB ĺ’Ś CMYKă€‚RGB ä¸»č¦?ç”¨äşŽć?ľç¤şçł»ç»źä¸­ďĽŚCMYK ä¸»č¦?ç”¨äşŽĺŤ°ĺ?·çł»ç»źä¸­ă€‚
 * @type {string}
 */

var ColorSpaceType = _SuperMap.SuperMap.ColorSpaceType = {
    /** čŻĄç±»ĺž‹ä¸»č¦?ĺś¨ĺŤ°ĺ?·çł»ç»źä˝żç”¨ă€‚ */
    CMYK: "CMYK",
    /** čŻĄç±»ĺž‹ä¸»č¦?ĺś¨ć?ľç¤şçł»ç»źä¸­ä˝żç”¨ă€‚ */
    RGB: "RGB"
};
exports.ColorSpaceType = ColorSpaceType;
/**
 * @enum LayerType
 * @memberOf SuperMap
 * @description  ĺ›ľĺ±‚ç±»ĺž‹ă€‚
 * @type {string}
 */

var LayerType = _SuperMap.SuperMap.LayerType = {
    /** SuperMap UGC ç±»ĺž‹ĺ›ľĺ±‚ă€‚ĺ¦‚çź˘é‡Źĺ›ľĺ±‚ă€?ć …ć Ľ(Grid)ĺ›ľĺ±‚ă€?ĺ˝±ĺ?Źĺ›ľĺ±‚ă€‚ă€‚ */
    UGC: "UGC",
    /** WMS ĺ›ľĺ±‚ă€‚ */
    WMS: "WMS",
    /** WFS ĺ›ľĺ±‚ă€‚ */
    WFS: "WFS",
    /** č‡Şĺ®šäą‰ĺ›ľĺ±‚ă€‚ */
    CUSTOM: "CUSTOM"
};
exports.LayerType = LayerType;

/**
 * @enum UGCLayerType
 * @memberOf SuperMap
 * @description  UGCĺ›ľĺ±‚ç±»ĺž‹ă€‚
 * @type {string}
 */

var UGCLayerType = _SuperMap.SuperMap.UGCLayerType = {
    /** ä¸“é˘?ĺ›ľĺ±‚ă€‚ */
    THEME: "THEME",
    /** çź˘é‡Źĺ›ľĺ±‚ă€‚ */
    VECTOR: "VECTOR",
    /** ć …ć Ľĺ›ľĺ±‚ă€‚ă€‚ */
    GRID: "GRID",
    /** ĺ˝±ĺ?Źĺ›ľĺ±‚ă€‚ */
    IMAGE: "IMAGE"
};
exports.UGCLayerType = UGCLayerType;

/**
 * @enum StatisticMode
 * @memberOf SuperMap
 * @description  ĺ­—ć®µç»źč®ˇć–ąćł•ç±»ĺž‹ă€‚
 * @type {string}
 */

var StatisticMode = _SuperMap.SuperMap.StatisticMode = {
    /** ç»źč®ˇć‰€é€‰ĺ­—ć®µçš„ĺąłĺť‡ĺ€Ľă€‚ */
    AVERAGE: "AVERAGE",
    /** ç»źč®ˇć‰€é€‰ĺ­—ć®µçš„ćś€ĺ¤§ĺ€Ľă€‚ */
    MAX: "MAX",
    /** ç»źč®ˇć‰€é€‰ĺ­—ć®µçš„ćś€ĺ°Źĺ€Ľă€‚ */
    MIN: "MIN",
    /** ç»źč®ˇć‰€é€‰ĺ­—ć®µçš„ć ‡ĺ‡†ĺ·® */
    STDDEVIATION: "STDDEVIATION",
    /** ç»źč®ˇć‰€é€‰ĺ­—ć®µçš„ć€»ĺ’Śă€‚ */
    SUM: "SUM",
    /** ç»źč®ˇć‰€é€‰ĺ­—ć®µçš„ć–ąĺ·®ă€‚ */
    VARIANCE: "VARIANCE"
};
exports.StatisticMode = StatisticMode;

/**
 * @enum PixelFormat
 * @memberOf SuperMap
 * @description  ć …ć Ľä¸Žĺ˝±ĺ?Źć•°ćŤ®ĺ­?ĺ‚¨çš„ĺ?Źç´ ć ĽĺĽŹćžšä¸ľă€‚
 * @type {string}
 */

var PixelFormat = _SuperMap.SuperMap.PixelFormat = {
    /** ćŻŹä¸Şĺ?Źĺ…?ç”¨16ä¸ŞćŻ”ç‰ą(ĺŤł2ä¸Şĺ­—čŠ‚)čˇ¨ç¤şă€‚ */
    BIT16: "BIT16",
    /** ćŻŹä¸Şĺ?Źĺ…?ç”¨32ä¸ŞćŻ”ç‰ą(ĺŤł4ä¸Şĺ­—čŠ‚)čˇ¨ç¤şă€‚ */
    BIT32: "BIT32",
    /** ćŻŹä¸Şĺ?Źĺ…?ç”¨64ä¸ŞćŻ”ç‰ą(ĺŤł8ä¸Şĺ­—čŠ‚)čˇ¨ç¤şďĽŚĺŹŞćŹ?äľ›ç»™ć …ć Ľć•°ćŤ®é›†ä˝żç”¨ă€‚ */
    BIT64: "BIT64",
    /** ćŻŹä¸Şĺ?Źĺ…?ç”¨4ä¸Şĺ­—čŠ‚ćťĄčˇ¨ç¤şďĽŚĺŹŞćŹ?äľ›ç»™ć …ć Ľć•°ćŤ®é›†ä˝żç”¨ă€‚ */
    SINGLE: "SINGLE",
    /** ćŻŹä¸Şĺ?Źĺ…?ç”¨8ä¸Şĺ­—čŠ‚ćťĄčˇ¨ç¤şďĽŚĺŹŞćŹ?äľ›ç»™ć …ć Ľć•°ćŤ®é›†ä˝żç”¨ă€‚ */
    DOUBLE: "DOUBLE",
    /** ćŻŹä¸Şĺ?Źĺ…?ç”¨1ä¸ŞćŻ”ç‰ąčˇ¨ç¤şă€‚ */
    UBIT1: "UBIT1",
    /** ćŻŹä¸Şĺ?Źĺ…?ç”¨4ä¸ŞćŻ”ç‰ąćťĄčˇ¨ç¤şă€‚ */
    UBIT4: "UBIT4",
    /** ćŻŹä¸Şĺ?Źĺ…?ç”¨8ä¸ŞćŻ”ç‰ą(ĺŤł1ä¸Şĺ­—čŠ‚)ćťĄčˇ¨ç¤şă€‚ */
    UBIT8: "UBIT8",
    /** ćŻŹä¸Şĺ?Źĺ…?ç”¨24ä¸ŞćŻ”ç‰ą(ĺŤł3ä¸Şĺ­—čŠ‚)ćťĄčˇ¨ç¤şă€‚ */
    UBIT24: "UBIT24",
    /** ćŻŹä¸Şĺ?Źĺ…?ç”¨32ä¸ŞćŻ”ç‰ą(ĺŤł4ä¸Şĺ­—čŠ‚)ćťĄčˇ¨ç¤şă€‚ */
    UBIT32: "UBIT32"
};
exports.PixelFormat = PixelFormat;

/**
 * @enum SearchMode
 * @memberOf SuperMap
 * @description  ĺ†…ćŹ’ć—¶ä˝żç”¨çš„ć ·ćś¬ç‚ąçš„ćźĄć‰ľć–ąĺĽŹćžšä¸ľ
 * @type {string}
 */

var SearchMode = _SuperMap.SuperMap.SearchMode = {
    /** ä˝żç”¨ KDTREE çš„ĺ›şĺ®šç‚ąć•°ć–ąĺĽŹćźĄć‰ľĺŹ‚ä¸Žĺ†…ćŹ’ĺ?†ćž?çš„ç‚ąă€‚ */
    KDTREE_FIXED_COUNT: "KDTREE_FIXED_COUNT",
    /** ä˝żç”¨ KDTREE çš„ĺ®šé•żć–ąĺĽŹćźĄć‰ľĺŹ‚ä¸Žĺ†…ćŹ’ĺ?†ćž?çš„ç‚ąă€‚ */
    KDTREE_FIXED_RADIUS: "KDTREE_FIXED_RADIUS",
    /** ä¸Ťčż›čˇŚćźĄć‰ľďĽŚä˝żç”¨ć‰€ćś‰çš„čľ“ĺ…Ąç‚ąčż›čˇŚĺ†…ćŹ’ĺ?†ćž?ă€‚ */
    NONE: "NONE",
    /** ä˝żç”¨ QUADTREE ć–ąĺĽŹćźĄć‰ľĺŹ‚ä¸Žĺ†…ćŹ’ĺ?†ćž?çš„ç‚ąďĽŚä»…ĺŻąć ·ćťˇďĽ?RBFďĽ‰ćŹ’ĺ€Ľĺ’Ść™®é€šĺ…‹ĺ?•é‡‘ďĽ?KrigingďĽ‰ćś‰ç”¨ă€‚ */
    QUADTREE: "QUADTREE"
};
exports.SearchMode = SearchMode;

/**
 * @enum InterpolationAlgorithmType
 * @memberOf SuperMap
 * @description  ćŹ’ĺ€Ľĺ?†ćž?çš„ç®—ćł•çš„ç±»ĺž‹
 * @type {string}
 */

var InterpolationAlgorithmType = _SuperMap.SuperMap.InterpolationAlgorithmType = {
    /** ć™®é€šĺ…‹ĺ?•é‡‘ćŹ’ĺ€Ľćł•ă€‚ */
    KRIGING: "KRIGING",
    /** ç®€ĺŤ•ĺ…‹ĺ?•é‡‘ćŹ’ĺ€Ľćł•ă€‚ */
    SimpleKriging: "SimpleKriging",
    /** ćł›ĺ…‹ĺ?•é‡‘ćŹ’ĺ€Ľćł•ă€‚ */
    UniversalKriging: "UniversalKriging"
};
exports.InterpolationAlgorithmType = InterpolationAlgorithmType;

/**
 * @enum VariogramMode
 * @memberOf SuperMap
 * @description  ĺ…‹ĺ?•é‡‘ďĽ?KrigingďĽ‰ćŹ’ĺ€Ľć—¶çš„ĺŤŠĺŹ?ĺ‡˝ć•°ç±»ĺž‹ćžšä¸ľ
 * @type {string}
 */

var VariogramMode = _SuperMap.SuperMap.VariogramMode = {
    /** ćŚ‡ć•°ĺ‡˝ć•°ă€‚ */
    EXPONENTIAL: "EXPONENTIAL",
    /** é«?ć–Żĺ‡˝ć•°ă€‚ */
    GAUSSIAN: "GAUSSIAN",
    /** ç??ĺž‹ĺ‡˝ć•°ă€‚ */
    SPHERICAL: "SPHERICAL"
};
exports.VariogramMode = VariogramMode;

/**
 * @enum Exponent
 * @memberOf SuperMap
 * @description  ĺ®šäą‰äş†ćł›ĺ…‹ĺ?•é‡‘ďĽ?UniversalKrigingďĽ‰ćŹ’ĺ€Ľć—¶ć ·ç‚ąć•°ćŤ®ä¸­č¶‹ĺŠżéť˘ć–ąç¨‹çš„é?¶ć•°
 * @type {string}
 */

var Exponent = _SuperMap.SuperMap.Exponent = {
    /** é?¶ć•°ä¸ş1ă€‚ */
    EXP1: "EXP1",
    /** é?¶ć•°ä¸ş2ă€‚ */
    EXP2: "EXP2"
};
exports.Exponent = Exponent;

/**
 * @enum ClientType
 * @memberOf SuperMap
 * @description tokenç”łčŻ·çš„ĺ®˘ć?·ç«Żć ‡čŻ†ç±»ĺž‹
 * @type {string}
 */

var ClientType = _SuperMap.SuperMap.ClientType = {
    /** ćŚ‡ĺ®šçš„ IP ĺś°ĺť€ă€‚ */
    IP: "IP",
    /** ćŚ‡ĺ®šçš„ URLă€‚ */
    REFERER: "Referer",
    /** ĺŹ‘é€?ç”łčŻ·ä»¤ç‰ŚčŻ·ć±‚çš„ĺ®˘ć?·ç«Ż IPă€‚ */
    REQUESTIP: "RequestIP",
    /** ä¸Ťĺ?šä»»ä˝•éŞŚčŻ?ă€‚ */
    NONE: "NONE",
    /** SERVERă€‚ */
    SERVER: "SERVER",
    /** WEBă€‚ */
    WEB: "WEB"
};
exports.ClientType = ClientType;

/**
 * @enum ChartType
 * @memberOf SuperMap
 * @description ĺ®˘ć?·ç«Żä¸“é˘?ĺ›ľĺ›ľčˇ¨ç±»ĺž‹
 * @type {string}
 */

var ChartType = _SuperMap.SuperMap.ChartType = {
    /** ćź±çŠ¶ĺ›ľă€‚ */
    BAR: "Bar",
    /** ä¸‰ç»´ćź±çŠ¶ĺ›ľă€‚ */
    BAR3D: "Bar3D",
    /** ĺś†ĺ˝˘ĺ›ľă€‚ */
    CIRCLE: "Circle",
    /** éĄĽĺ›ľă€‚ */
    PIE: "Pie",
    /** ć•Łç‚ąĺ›ľă€‚ */
    POINT: "Point",
    /** ćŠ?çşżĺ›ľă€‚ */
    LINE: "Line",
    /** çŽŻçŠ¶ĺ›ľă€‚ */
    RING: "Ring"
};
exports.ChartType = ChartType;

/**
 * @enum ClipAnalystMode
 * @memberOf SuperMap
 * @description  čŁ?ĺ‰Şĺ?†ćž?ć¨ˇĺĽŹ
 * @type {string}
 */

var ClipAnalystMode = _SuperMap.SuperMap.ClipAnalystMode = {
    /** CLIPă€‚ */
    CLIP: "clip",
    /** INTERSECTă€‚ */
    INTERSECT: "intersect"
};
exports.ClipAnalystMode = ClipAnalystMode;
/**
 * @enum AnalystAreaUnit
 * @memberOf SuperMap
 * @description ĺ?†ĺ¸?ĺĽŹĺ?†ćž?éť˘ç§ŻĺŤ•ä˝Ť
 * @type {string}
 */

var AnalystAreaUnit = _SuperMap.SuperMap.AnalystAreaUnit = {
    /** ĺąłć–ąç±łă€‚ */
    "SQUAREMETER": "SquareMeter",
    /** ĺąłć–ąĺŤ?ç±łă€‚ */
    "SQUAREKILOMETER": "SquareKiloMeter",
    /** ĺ…¬éˇ·ă€‚ */
    "HECTARE": "Hectare",
    /** ĺ…¬äş©ă€‚ */
    "ARE": "Are",
    /** č‹±äş©ă€‚ */
    "ACRE": "Acre",
    /** ĺąłć–ąč‹±ĺ°şă€‚ */
    "SQUAREFOOT": "SquareFoot",
    /** ĺąłć–ąç ?ă€‚ */
    "SQUAREYARD": "SquareYard",
    /** ĺąłć–ąč‹±é‡Śă€‚ */
    "SQUAREMILE": "SquareMile"
};
exports.AnalystAreaUnit = AnalystAreaUnit;
/**
 * @enum AnalystSizeUnit
 * @memberOf SuperMap
 * @description ĺ?†ĺ¸?ĺĽŹĺ?†ćž?ĺŤ•ä˝Ť
 * @type {string}
 */

var AnalystSizeUnit = _SuperMap.SuperMap.AnalystSizeUnit = {
    /** ç±łă€‚ */
    "METER": "Meter",
    /** ĺŤ?ç±łă€‚ */
    "KILOMETER": "Kilometer",
    /** ç ?ă€‚ */
    "YARD": "Yard",
    /** č‹±ĺ°şă€‚ */
    "FOOT": "Foot",
    /** č‹±é‡Śă€‚ */
    "MILE": "Mile"
};
exports.AnalystSizeUnit = AnalystSizeUnit;

/**
 * @enum StatisticAnalystMode
 * @memberOf SuperMap
 * @description ĺ?†ĺ¸?ĺĽŹĺ?†ćž?ç»źč®ˇć¨ˇĺĽŹ
 * @type {string}
 */

var StatisticAnalystMode = _SuperMap.SuperMap.StatisticAnalystMode = {
    /** ç»źč®ˇć‰€é€‰ĺ­—ć®µçš„ćś€ĺ¤§ĺ€Ľă€‚ */
    "MAX": "max",
    /** ç»źč®ˇć‰€é€‰ĺ­—ć®µçš„ćś€ĺ°Źĺ€Ľă€‚ */
    "MIN": "min",
    /** ç»źč®ˇć‰€é€‰ĺ­—ć®µçš„ĺąłĺť‡ĺ€Ľă€‚ */
    "AVERAGE": "average",
    /** ç»źč®ˇć‰€é€‰ĺ­—ć®µçš„ć€»ĺ’Śă€‚ */
    "SUM": "sum",
    /** ç»źč®ˇć‰€é€‰ĺ­—ć®µçš„ć–ąĺ·®ă€‚ */
    "VARIANCE": "variance",
    /** ç»źč®ˇć‰€é€‰ĺ­—ć®µçš„ć ‡ĺ‡†ĺ·® */
    "STDDEVIATION": "stdDeviation"
};
exports.StatisticAnalystMode = StatisticAnalystMode;
/**
 * @enum SummaryType
 * @memberOf SuperMap
 * @description ĺ?†ĺ¸?ĺĽŹĺ?†ćž?č?šĺ??ç±»ĺž‹
 * @type {string}
 */

var SummaryType = _SuperMap.SuperMap.SummaryType = {
    /** ć Ľç˝‘č?šĺ??ă€‚ */
    "SUMMARYMESH": "SUMMARYMESH",
    /** ĺ¤ščľąĺ˝˘č?šĺ??ă€‚ */
    "SUMMARYREGION": "SUMMARYREGION"
};
exports.SummaryType = SummaryType;
/**
 * @enum TopologyValidatorRule
 * @memberOf SuperMap
 * @description  ć‹“ć‰‘ćŁ€ćźĄć¨ˇĺĽŹćžšä¸ľă€‚čŻĄç±»ĺ®šäą‰äş†ć‹“ć‰‘ćŁ€ćźĄć“Ťä˝ść¨ˇĺĽŹĺ¸¸é‡Źă€‚
 * @type {string}
 */

var TopologyValidatorRule = _SuperMap.SuperMap.TopologyValidatorRule = {
    /** éť˘ĺ†…ć— é‡ŤĺŹ ďĽŚç”¨äşŽĺŻąéť˘ć•°ćŤ®čż›čˇŚć‹“ć‰‘ćŁ€ćźĄă€‚ */
    REGIONNOOVERLAP: "REGIONNOOVERLAP",
    /** éť˘ä¸Žéť˘ć— é‡ŤĺŹ ďĽŚç”¨äşŽĺŻąéť˘ć•°ćŤ®čż›čˇŚć‹“ć‰‘ćŁ€ćźĄă€‚ */
    REGIONNOOVERLAPWITH: "REGIONNOOVERLAPWITH",
    /** éť˘č˘«éť˘ĺŚ…ĺ?«ďĽŚç”¨äşŽĺŻąéť˘ć•°ćŤ®čż›čˇŚć‹“ć‰‘ćŁ€ćźĄă€‚ */
    REGIONCONTAINEDBYREGION: "REGIONCONTAINEDBYREGION",
    /** éť˘č˘«éť˘č¦†ç›–ďĽŚç”¨äşŽĺŻąéť˘ć•°ćŤ®čż›čˇŚć‹“ć‰‘ćŁ€ćźĄă€‚ */
    REGIONCOVEREDBYREGION: "REGIONCOVEREDBYREGION",
    /** çşżä¸Žçşżć— é‡ŤĺŹ ďĽŚç”¨äşŽĺŻąçşżć•°ćŤ®čż›čˇŚć‹“ć‰‘ćŁ€ćźĄă€‚ */
    LINENOOVERLAP: "LINENOOVERLAP",
    /** çşżĺ†…ć— é‡ŤĺŹ ďĽŚç”¨äşŽĺŻąçşżć•°ćŤ®čż›čˇŚć‹“ć‰‘ćŁ€ćźĄă€‚ */
    LINENOOVERLAPWITH: "LINENOOVERLAPWITH",
    /** ç‚ąä¸Ťç›¸ĺ?ŚďĽŚç”¨äşŽĺŻąç‚ąć•°ćŤ®čż›čˇŚć‹“ć‰‘ćŁ€ćźĄă€‚ */
    POINTNOIDENTICAL: "POINTNOIDENTICAL"
};
exports.TopologyValidatorRule = TopologyValidatorRule;

/**
 * @enum AggregationType
 * @memberOf SuperMap
 * @description  č?šĺ??ćźĄčŻ˘ćžšä¸ľç±»ďĽŚčŻĄç±»ĺ®šäą‰äş†Esć•°ćŤ®ćśŤĺŠˇä¸­č?šĺ??ćźĄčŻ˘ć¨ˇĺĽŹĺ¸¸é‡Ź
 * @type {string}
 */

var AggregationType = _SuperMap.SuperMap.AggregationType = {
    /** ć Ľç˝‘č?šĺ??ç±»ĺž‹ă€‚ */
    GEOHASH_GRID: "geohash_grid",
    /** čż‡ć»¤č?šĺ??ç±»ĺž‹ă€‚ */
    FILTER: "filter"
};
exports.AggregationType = AggregationType;

/**
 * @enum AggregationType
 * @memberOf SuperMap
 * @description  č?šĺ??ćźĄčŻ˘ä¸­filterćźĄčŻ˘ćžšä¸ľç±»
 * @type {string}
 */

var AggregationQueryBuilderType = _SuperMap.SuperMap.AggregationQueryBuilderType = {
    /** čŚ?ĺ›´ćźĄčŻ˘ă€‚ */
    GEO_BOUNDING_BOX: "geo_bounding_box"
};
exports.AggregationQueryBuilderType = AggregationQueryBuilderType;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OutputSetting = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperMap = __webpack_require__(0);

var _Util = __webpack_require__(1);

var _DatasourceConnectionInfo = __webpack_require__(44);

var _REST = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class SuperMap.OutputSetting
 * @category  iServer ProcessingService
 * @classdesc ĺ?†ĺ¸?ĺĽŹĺ?†ćž?čľ“ĺ‡şç±»ĺž‹č®ľç˝®ç±»
 * @param {Object} options - ĺŹ‚ć•°ă€‚<br>
 * @param {SuperMap.OutputType} options.type - čľ“ĺ‡şç±»ĺž‹ă€‚<br>
 * @param {string} options.datasetName - ç»“ćžść•°ćŤ®é›†ĺ?Ťç§°ă€‚<br>
 * @param {SuperMap.DatasourceConnectionInfo} options.datasourceInfo - ć•°ćŤ®ćş?čżžćŽĄäżˇć?Żă€‚<br>
 * @param {string} options.outputPath - ĺ?†ćž?ç»“ćžśčľ“ĺ‡şč·Żĺľ„ <br>
 */
var OutputSetting = exports.OutputSetting = function () {
  function OutputSetting(options) {
    _classCallCheck(this, OutputSetting);

    /**
     * @member {SuperMap.OutputType} SuperMap.OutputSetting.prototype.type
     * @description ĺ?†ĺ¸?ĺĽŹĺ?†ćž?çš„čľ“ĺ‡şç±»ĺž‹ďĽŚĺż…č®ľĺ­—ć®µă€‚
     */
    this.type = _REST.OutputType.UDB;

    /**
     * @member {string} SuperMap.OutputSetting.prototype.datasetName
     * @description ĺ?†ĺ¸?ĺĽŹĺ?†ćž?çš„čľ“ĺ‡şç»“ćžść•°ćŤ®é›†ĺ?Ťç§°ďĽŚĺż…č®ľĺ­—ć®µă€‚
     */
    this.datasetName = "analystResult";

    /**
     * @member {SuperMap.DatasourceConnectionInfo} SuperMap.OutputSetting.prototype.datasourceInfo
     * @description ĺ?†ĺ¸?ĺĽŹĺ?†ćž?çš„čľ“ĺ‡şç»“ćžść•°ćŤ®ćş?čżžćŽĄäżˇć?Żă€‚
     */
    this.datasourceInfo = null;

    /**
     * @member {string} SuperMap.OutputSetting.prototype.outputPath
     * @description ĺ?†ĺ¸?ĺĽŹĺ?†ćž?çš„ĺ?†ćž?ç»“ćžśčľ“ĺ‡şč·Żĺľ„ă€‚
     */
    this.outputPath = "";

    _Util.Util.extend(this, options);
    this.CLASS_NAME = "SuperMap.OutputSetting";
  }

  /**
   * @function SuperMap.OutputSetting.prototype.destroy
   * @description é‡Šć”ľčµ„ćş?ďĽŚĺ°†ĺĽ•ç”¨čµ„ćş?çš„ĺ±žć€§ç˝®ç©şă€‚
   */


  _createClass(OutputSetting, [{
    key: 'destroy',
    value: function destroy() {
      var me = this;
      me.type = null;
      me.datasetName = null;
      me.outputPath = null;
      if (me.datasourceInfo instanceof _DatasourceConnectionInfo.DatasourceConnectionInfo) {
        me.datasourceInfo.destroy();
        me.datasourceInfo = null;
      }
    }
  }]);

  return OutputSetting;
}();

_SuperMap.SuperMap.OutputSetting = OutputSetting;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ProcessingServiceBase = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _SuperMap = __webpack_require__(0);

var _CommonServiceBase2 = __webpack_require__(6);

var _FetchRequest = __webpack_require__(7);

var _Util = __webpack_require__(1);

var _SecurityManager = __webpack_require__(8);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class SuperMap.ProcessingServiceBase
 * @category  iServer ProcessingService
 * @classdesc ĺ?†ĺ¸?ĺĽŹĺ?†ćž?ćśŤĺŠˇĺźşç±»
 * @extends {SuperMap.CommonServiceBase}
 * @param {string} url - ĺ?†ĺ¸?ĺĽŹĺ?†ćž?ćśŤĺŠˇĺś°ĺť€ă€‚
 * @param {Object} options - ĺŹ‚ć•°ă€‚<br>
 * @param {SuperMap.Events} options.events - ĺ¤„ç?†ć‰€ćś‰äş‹ä»¶çš„ĺŻąč±ˇă€‚<br>
 * @param {Object} options.eventListeners - ĺ?¬ĺ™¨ĺŻąč±ˇă€‚<br>
 * @param {SuperMap.ServerType} options.serverType - ćśŤĺŠˇĺ™¨ç±»ĺž‹ďĽŚiServer|iPortal|Onlineă€‚<br>
 * @param {number} options.index - ćśŤĺŠˇč®żé—®ĺś°ĺť€ĺś¨ć•°ç»„ä¸­çš„ä˝Ťç˝®ă€‚<br>
 * @param {number} options.length - ćśŤĺŠˇč®żé—®ĺś°ĺť€ć•°ç»„é•żĺş¦ă€‚
 */
var ProcessingServiceBase = exports.ProcessingServiceBase = function (_CommonServiceBase) {
    _inherits(ProcessingServiceBase, _CommonServiceBase);

    function ProcessingServiceBase(url, options) {
        _classCallCheck(this, ProcessingServiceBase);

        options = options || {};
        /*
         * Constant: EVENT_TYPES
         * {Array.<string>}
         * ć­¤ç±»ć”ŻćŚ?çš„äş‹ä»¶ç±»ĺž‹
         * - *processCompleted* ĺ?›ĺ»şć??ĺŠźĺ?Žč§¦ĺŹ‘çš„äş‹ä»¶ă€‚
         * - *processFailed* ĺ?›ĺ»şĺ¤±č´Ąĺ?Žč§¦ĺŹ‘çš„äş‹ä»¶ ă€‚
         * - *processRunning* ĺ?›ĺ»şčż‡ç¨‹çš„ć•´ä¸Şé?¶ć®µé?˝äĽšč§¦ĺŹ‘çš„äş‹ä»¶ďĽŚç”¨äşŽčŽ·ĺŹ–ĺ?›ĺ»şčż‡ç¨‹çš„çŠ¶ć€? ă€‚
         */
        options.EVENT_TYPES = ["processCompleted", "processFailed", "processRunning"];

        var _this = _possibleConstructorReturn(this, (ProcessingServiceBase.__proto__ || Object.getPrototypeOf(ProcessingServiceBase)).call(this, url, options));

        _this.CLASS_NAME = "SuperMap.ProcessingServiceBase";
        return _this;
    }

    /**
     * @function SuperMap.ProcessingServiceBase.prototype.destroy
     * @override
     */


    _createClass(ProcessingServiceBase, [{
        key: 'destroy',
        value: function destroy() {
            _get(ProcessingServiceBase.prototype.__proto__ || Object.getPrototypeOf(ProcessingServiceBase.prototype), 'destroy', this).call(this);
        }

        /**
         * @function SuperMap.ProcessingServiceBase.prototype.getJobs
         * @description čŽ·ĺŹ–ĺ?†ĺ¸?ĺĽŹĺ?†ćž?ä»»ĺŠˇă€‚
         * @param {string} url - čµ„ćş?ĺś°ĺť€ă€‚
         */

    }, {
        key: 'getJobs',
        value: function getJobs(url) {
            var me = this;
            _FetchRequest.FetchRequest.get(url, null, { proxy: me.proxy }).then(function (response) {
                return response.json();
            }).then(function (result) {
                me.events.triggerEvent("processCompleted", { result: result });
            }).catch(function (e) {
                me.eventListeners.processFailed({ error: e });
            });
        }

        /**
         * @function SuperMap.ProcessingServiceBase.prototype.addJob
         * @description ć·»ĺŠ ĺ?†ĺ¸?ĺĽŹĺ?†ćž?ä»»ĺŠˇă€‚
         * @param {string} url - čµ„ćş?ć ąĺś°ĺť€ă€‚
         * @param {Object} params - ĺ?›ĺ»şä¸€ä¸Şç©şé—´ĺ?†ćž?çš„čŻ·ć±‚ĺŹ‚ć•°ă€‚
         * @param {string} paramType - čŻ·ć±‚ĺŹ‚ć•°ç±»ĺž‹ă€‚
         * @param {number} seconds - ĺĽ€ĺ§‹ĺ?›ĺ»şĺ?ŽďĽŚčŽ·ĺŹ–ĺ?›ĺ»şć??ĺŠźç»“ćžśçš„ć—¶é—´é—´éš”ă€‚
         */

    }, {
        key: 'addJob',
        value: function addJob(url, params, paramType, seconds) {
            var me = this,
                parameterObject = null;
            if (params && params instanceof paramType) {
                parameterObject = new Object();
                paramType.toObject(params, parameterObject);
            }
            var options = {
                proxy: me.proxy,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            };
            _FetchRequest.FetchRequest.post(me._processUrl(url), JSON.stringify(parameterObject), options).then(function (response) {
                return response.json();
            }).then(function (result) {
                if (result.succeed) {
                    me.serviceProcessCompleted(result, seconds);
                } else {
                    me.serviceProcessFailed(result);
                }
            }).catch(function (e) {
                me.serviceProcessFailed({ error: e });
            });
        }
    }, {
        key: 'serviceProcessCompleted',
        value: function serviceProcessCompleted(result, seconds) {
            result = _Util.Util.transformResult(result);
            seconds = seconds || 1000;
            var me = this;
            if (result) {
                var id = setInterval(function () {
                    _FetchRequest.FetchRequest.get(result.newResourceLocation, { _t: new Date().getTime() }).then(function (response) {
                        return response.json();
                    }).then(function (job) {
                        me.events.triggerEvent("processRunning", { id: job.id, state: job.state });
                        if (job.state.runState === 'LOST' || job.state.runState === 'KILLED' || job.state.runState === 'FAILED') {
                            clearInterval(id);
                            me.events.triggerEvent("processFailed", { error: job.state.errorMsg, state: job.state.runState });
                        }
                        if (job.state.runState === 'FINISHED' && job.setting.serviceInfo) {
                            clearInterval(id);
                            me.events.triggerEvent("processCompleted", { result: job });
                        }
                    }).catch(function (e) {
                        clearInterval(id);
                        me.events.triggerEvent("processFailed", { error: e });
                    });
                }, seconds);
            }
        }
    }, {
        key: 'serviceProcessFailed',
        value: function serviceProcessFailed(result) {
            _get(ProcessingServiceBase.prototype.__proto__ || Object.getPrototypeOf(ProcessingServiceBase.prototype), 'serviceProcessFailed', this).call(this, result);
        }

        //ä¸şä¸Ťć?Żä»Ą.jsonç»“ĺ°ľçš„urlĺŠ ä¸Š.jsonďĽŚĺą¶ä¸”ĺ¦‚ćžśćś‰tokençš„čŻťďĽŚĺś¨.jsonĺ?ŽĺŠ ä¸ŠtokenĺŹ‚ć•°ă€‚

    }, {
        key: '_processUrl',
        value: function _processUrl(url) {
            if (url.indexOf('.json') === -1) {
                url += '.json';
            }
            if (_SecurityManager.SecurityManager.getToken(url)) {
                url += '?token=' + _SecurityManager.SecurityManager.getToken(url);
            }
            return url;
        }
    }]);

    return ProcessingServiceBase;
}(_CommonServiceBase2.CommonServiceBase);

_SuperMap.SuperMap.ProcessingServiceBase = ProcessingServiceBase;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SuperMap = window.SuperMap = window.SuperMap || {};
SuperMap.REST = SuperMap.REST || {};
exports.SuperMap = SuperMap;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CommonServiceBase = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperMap = __webpack_require__(0);

var _FetchRequest = __webpack_require__(7);

var _Events = __webpack_require__(22);

var _Credential = __webpack_require__(37);

var _SecurityManager = __webpack_require__(8);

var _Util = __webpack_require__(1);

var _REST = __webpack_require__(2);

var _JSON = __webpack_require__(36);

var _BaseTypes = __webpack_require__(9);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class SuperMap.CommonServiceBase
 * @category  iServer
 * @classdesc ĺŻąćŽĄiServerĺ?„ç§ŤćśŤĺŠˇçš„Serviceçš„ĺźşç±»ă€‚
 * @param {string} url - ćśŤĺŠˇĺś°ĺť€ă€‚
 * @param {Object} options - ĺŹ‚ć•°ă€‚<br>
 * @param {Object} options.eventListeners - äş‹ä»¶ç›‘ĺ?¬ĺ™¨ĺŻąč±ˇă€‚ćś‰processCompletedĺ±žć€§ĺŹŻäĽ ĺ…Ąĺ¤„ç?†ĺ®Ść??ĺ?Žçš„ĺ›žč°?ĺ‡˝ć•°ă€‚processFailedĺ±žć€§äĽ ĺ…Ąĺ¤„ç?†ĺ¤±č´Ąĺ?Žçš„ĺ›žč°?ĺ‡˝ć•°ă€‚
 * @param {string} options.proxy - ćśŤĺŠˇä»Łç?†ĺś°ĺť€ă€‚
 * @param {SuperMap.ServerType} options.serverType - ćśŤĺŠˇĺ™¨ç±»ĺž‹ďĽŚiServer|iPortal|Onlineă€‚
 * @param {boolean} options.withCredentials - čŻ·ć±‚ć?Żĺ?¦ć?şĺ¸¦cookie,é»?č®¤ä¸şfalseă€‚
 * @param {SuperMap.DataFormat} options.format - ćźĄčŻ˘ç»“ćžśčż”ĺ›žć ĽĺĽŹďĽŚç›®ĺ‰Ťć”ŻćŚ?iServerJSON ĺ’ŚGeoJSONä¸¤ç§Ťć ĽĺĽŹă€‚ĺŹ‚ć•°ć ĽĺĽŹä¸ş"ISERVER","GEOJSON"ă€‚
 */
var CommonServiceBase = exports.CommonServiceBase = function () {
    function CommonServiceBase(url, options) {
        _classCallCheck(this, CommonServiceBase);

        var me = this;

        this.EVENT_TYPES = ["processCompleted", "processFailed"];

        this.events = null;

        this.eventListeners = null;

        this.url = null;

        this.urls = null;

        this.proxy = null;

        this.serverType = null;

        this.index = null;

        this.length = null;

        this.options = null;

        this.totalTimes = null;

        this.POLLING_TIMES = 3;

        this._processSuccess = null;

        this._processFailed = null;

        this.isInTheSameDomain = null;

        this.withCredentials = false;

        if (_Util.Util.isArray(url)) {
            me.urls = url;
            me.length = url.length;
            me.totalTimes = me.length;
            if (me.length === 1) {
                me.url = url[0];
            } else {
                me.index = parseInt(Math.random() * me.length);
                me.url = url[me.index];
            }
        } else {
            me.totalTimes = 1;
            me.url = url;
        }

        if (_Util.Util.isArray(url) && !me.isServiceSupportPolling()) {
            me.url = url[0];
            me.totalTimes = 1;
        }

        me.serverType = me.serverType || _REST.ServerType.ISERVER;

        options = options || {};

        if (options) {
            _Util.Util.extend(this, options);
        }

        me.isInTheSameDomain = _Util.Util.isInTheSameDomain(me.url);

        me.events = new _Events.Events(me, null, me.EVENT_TYPES, true);
        if (me.eventListeners instanceof Object) {
            me.events.on(me.eventListeners);
        }

        this.CLASS_NAME = "SuperMap.CommonServiceBase";
    }

    /**
     * @function SuperMap.CommonServiceBase.prototype.destroy
     * @description é‡Šć”ľčµ„ćş?ďĽŚĺ°†ĺĽ•ç”¨çš„čµ„ćş?ĺ±žć€§ç˝®ç©şă€‚
     */


    _createClass(CommonServiceBase, [{
        key: 'destroy',
        value: function destroy() {
            var me = this;
            if (_Util.Util.isArray(me.urls)) {
                me.urls = null;
                me.index = null;
                me.length = null;
                me.totalTimes = null;
            }
            me.url = null;
            me.options = null;
            me._processSuccess = null;
            me._processFailed = null;
            me.isInTheSameDomain = null;

            me.EVENT_TYPES = null;
            if (me.events) {
                me.events.destroy();
                me.events = null;
            }
            if (me.eventListeners) {
                me.eventListeners = null;
            }
        }

        /**
         * @function  SuperMap.CommonServiceBase.prototype.request
         * @description: čŻĄć–ąćł•ç”¨äşŽĺ?‘ćśŤĺŠˇĺŹ‘é€?čŻ·ć±‚ă€‚
         * @param {Object} options - ĺŹ‚ć•°ă€‚
         * @param {string} options.method - čŻ·ć±‚ć–ąĺĽŹďĽŚĺŚ…ć‹¬"GET"ďĽŚ"POST"ďĽŚ"PUT"ďĽŚ"DELETE"ă€‚<br>
         * @param {string} options.url - ĺŹ‘é€?čŻ·ć±‚çš„ĺś°ĺť€ă€‚<br>
         * @param {Object} options.params - ä˝śä¸şćźĄčŻ˘ĺ­—ç¬¦ä¸˛ć·»ĺŠ ĺ?°urlä¸­çš„ä¸€ç»„é”®ĺ€ĽĺŻąďĽŚć­¤ĺŹ‚ć•°ĺŹŞé€‚ç”¨äşŽGETć–ąĺĽŹĺŹ‘é€?çš„čŻ·ć±‚ă€‚<br>
         * @param {String} options.data - ĺŹ‘é€?ĺ?°ćśŤĺŠˇĺ™¨çš„ć•°ćŤ®ă€‚<br>
         * @param {function} options.success - čŻ·ć±‚ć??ĺŠźĺ?Žçš„ĺ›žč°?ĺ‡˝ć•°ă€‚<br>
         * @param {function} options.failure - čŻ·ć±‚ĺ¤±č´Ąĺ?Žçš„ĺ›žč°?ĺ‡˝ć•°ă€‚<br>
         * @param {Object} options.scope - ĺ¦‚ćžśĺ›žč°?ĺ‡˝ć•°ć?ŻĺŻąč±ˇçš„ä¸€ä¸Şĺ…¬ĺ…±ć–ąćł•ďĽŚč®ľĺ®ščŻĄĺŻąč±ˇçš„čŚ?ĺ›´ă€‚<br>
         * @param {boolean} options.isInTheSameDomain - čŻ·ć±‚ć?Żĺ?¦ĺś¨ĺ˝“ĺ‰Ťĺźźä¸­ă€‚<br>
         * @param {boolean} options.withCredentials - čŻ·ć±‚ć?Żĺ?¦ć?şĺ¸¦cookieă€‚<br>
         */

    }, {
        key: 'request',
        value: function request(options) {
            var me = this;
            options.url = options.url || me.url;
            options.proxy = options.proxy || me.proxy;
            options.withCredentials = options.withCredentials != undefined ? options.withCredentials : me.withCredentials;
            options.isInTheSameDomain = me.isInTheSameDomain;
            //ä¸şurlć·»ĺŠ ĺ®‰ĺ…¨č®¤čŻ?äżˇć?Żç‰‡ć®µ
            var credential = this.getCredential(options.url);
            if (credential) {
                //ĺ˝“urlä¸­ĺ?«ćś‰?ďĽŚĺą¶ä¸”?ĺś¨urlćś«ĺ°ľçš„ć—¶ĺ€™ç›´ćŽĄć·»ĺŠ token *ç˝‘ç»śĺ?†ćž?ç­‰ćśŤĺŠˇčŻ·ć±‚urläĽšĺ‡şçŽ°ćś«ĺ°ľć?Ż?çš„ć?…ĺ†µ*
                //ĺ˝“urlä¸­ĺ?«ćś‰?ďĽŚĺą¶ä¸”?ä¸Ťĺś¨urlćś«ĺ°ľçš„ć—¶ĺ€™ć·»ĺŠ &token
                //ĺ˝“urlä¸­ä¸Ťĺ?«ćś‰?ďĽŚĺś¨urlćś«ĺ°ľć·»ĺŠ ?token
                var endStr = options.url.substring(options.url.length - 1, options.url.length);
                if (options.url.indexOf("?") > -1 && endStr === "?") {
                    options.url += credential.getUrlParameters();
                } else if (options.url.indexOf("?") > -1 && endStr !== "?") {
                    options.url += "&" + credential.getUrlParameters();
                } else {
                    options.url += "?" + credential.getUrlParameters();
                }
            }

            me.calculatePollingTimes();
            me._processSuccess = options.success;
            me._processFailed = options.failure;
            options.scope = me;
            options.success = me.getUrlCompleted;
            options.failure = me.getUrlFailed;
            me.options = options;
            me._commit(me.options);
        }

        /**
         * @function SuperMap.CommonServiceBase.prototype.getCredential
         * @description  čŽ·ĺŹ–ĺ‡­ćŤ®äżˇć?Ż
         * @param {string} url - ćśŤĺŠˇĺś°ĺť€ă€‚
         * @return {SuperMap.Credential} ĺ‡­ćŤ®äżˇć?ŻĺŻąč±ˇă€‚
         */

    }, {
        key: 'getCredential',
        value: function getCredential(url) {
            var keyUrl = url,
                credential = void 0,
                value = void 0;
            switch (this.serverType) {
                case _REST.ServerType.IPORTAL:
                    value = _SecurityManager.SecurityManager.getToken(keyUrl);
                    credential = value ? new _Credential.Credential(value, "token") : null;
                    if (!credential) {
                        value = _SecurityManager.SecurityManager.getKey(keyUrl);
                        credential = value ? new _Credential.Credential(value, "key") : null;
                    }
                    break;
                case _REST.ServerType.ONLINE:
                    value = _SecurityManager.SecurityManager.getKey(keyUrl);
                    credential = value ? new _Credential.Credential(value, "key") : null;
                    break;
                default:
                    //iServer or others
                    value = _SecurityManager.SecurityManager.getToken(keyUrl);
                    credential = value ? new _Credential.Credential(value, "token") : null;
                    break;
            }
            return credential;
        }

        /**
         * @function SuperMap.CommonServiceBase.prototype.getUrlCompleted
         * @description čŻ·ć±‚ć??ĺŠźĺ?Žć‰§čˇŚć­¤ć–ąćł•ă€‚
         * @param {Object} result - ćśŤĺŠˇĺ™¨čż”ĺ›žçš„ç»“ćžśĺŻąč±ˇă€‚
         */

    }, {
        key: 'getUrlCompleted',
        value: function getUrlCompleted(result) {
            var me = this;
            me._processSuccess(result);
        }

        /**
         * @function SuperMap.CommonServiceBase.prototype.getUrlFailed
         * @description čŻ·ć±‚ĺ¤±č´Ąĺ?Žć‰§čˇŚć­¤ć–ąćł•ă€‚
         * @param {Object} result - ćśŤĺŠˇĺ™¨čż”ĺ›žçš„ç»“ćžśĺŻąč±ˇă€‚
         */

    }, {
        key: 'getUrlFailed',
        value: function getUrlFailed(result) {
            var me = this;
            if (me.totalTimes > 0) {
                me.totalTimes--;
                me.ajaxPolling();
            } else {
                me._processFailed(result);
            }
        }

        /**
         *
         * @function SuperMap.CommonServiceBase.prototype.ajaxPolling
         * @description čŻ·ć±‚ĺ¤±č´Ąĺ?ŽďĽŚĺ¦‚ćžśĺ‰©ä˝™čŻ·ć±‚ĺ¤±č´Ąć¬ˇć•°ä¸Ťä¸ş0ďĽŚé‡Ťć–°čŽ·ĺŹ–urlĺŹ‘é€?čŻ·ć±‚
         */

    }, {
        key: 'ajaxPolling',
        value: function ajaxPolling() {
            var me = this,
                url = me.options.url,
                re = /^http:\/\/([a-z]{9}|(\d+\.){3}\d+):\d{0,4}/;
            me.index = parseInt(Math.random() * me.length);
            me.url = me.urls[me.index];
            url = url.replace(re, re.exec(me.url)[0]);
            me.options.url = url;
            me.options.isInTheSameDomain = _Util.Util.isInTheSameDomain(url);
            me._commit(me.options);
        }

        /**
         * @function SuperMap.CommonServiceBase.prototype.calculatePollingTimes
         * @description č®ˇç®—ĺ‰©ä˝™čŻ·ć±‚ĺ¤±č´Ąć‰§čˇŚć¬ˇć•°ă€‚
         */

    }, {
        key: 'calculatePollingTimes',
        value: function calculatePollingTimes() {
            var me = this;
            if (me.times) {
                if (me.totalTimes > me.POLLING_TIMES) {
                    if (me.times > me.POLLING_TIMES) {
                        me.totalTimes = me.POLLING_TIMES;
                    } else {
                        me.totalTimes = me.times;
                    }
                } else {
                    if (me.times < me.totalTimes) {
                        me.totalTimes = me.times;
                    }
                }
            } else {
                if (me.totalTimes > me.POLLING_TIMES) {
                    me.totalTimes = me.POLLING_TIMES;
                }
            }
            me.totalTimes--;
        }

        /**
         * @function SuperMap.CommonServiceBase.prototype.isServiceSupportPolling
         * @description ĺ?¤ć–­ćśŤĺŠˇć?Żĺ?¦ć”ŻćŚ?č˝®čŻ˘ă€‚
         */

    }, {
        key: 'isServiceSupportPolling',
        value: function isServiceSupportPolling() {
            var me = this;
            return !(me.CLASS_NAME === "SuperMap.REST.ThemeService" || me.CLASS_NAME === "SuperMap.REST.EditFeaturesService");
        }

        /**
         * @function SuperMap.CommonServiceBase.prototype.serviceProcessCompleted
         * @description çŠ¶ć€?ĺ®Ść??ďĽŚć‰§čˇŚć­¤ć–ąćł•ă€‚
         * @param {Object} result - ćśŤĺŠˇĺ™¨čż”ĺ›žçš„ç»“ćžśĺŻąč±ˇă€‚
         */

    }, {
        key: 'serviceProcessCompleted',
        value: function serviceProcessCompleted(result) {
            result = _Util.Util.transformResult(result);
            this.events.triggerEvent("processCompleted", {
                result: result
            });
        }

        /**
         * @function SuperMap.CommonServiceBase.prototype.serviceProcessFailed
         * @description çŠ¶ć€?ĺ¤±č´ĄďĽŚć‰§čˇŚć­¤ć–ąćł•ă€‚
         * @param{Object}  result - ćśŤĺŠˇĺ™¨čż”ĺ›žçš„ç»“ćžśĺŻąč±ˇă€‚
         */

    }, {
        key: 'serviceProcessFailed',
        value: function serviceProcessFailed(result) {
            result = _Util.Util.transformResult(result);
            var error = result.error || result;
            this.events.triggerEvent("processFailed", {
                error: error
            });
        }
    }, {
        key: '_commit',
        value: function _commit(options) {
            if (options.method === "POST" || options.method === "PUT") {
                if (options.params) {
                    options.url = _Util.Util.urlAppend(options.url, _Util.Util.getParameterString(options.params || {}));
                }
                options.params = options.data;
            }
            _FetchRequest.FetchRequest.commit(options.method, options.url, options.params, {
                headers: options.headers,
                withCredentials: options.withCredentials,
                timeout: options.async ? 0 : null,
                proxy: options.proxy
            }).then(function (response) {
                if (response.text) {
                    return response.text();
                }
                if (response.json) {
                    return response.json();
                }
                return response;
            }).then(function (text) {
                var result = text;
                if (typeof text === "string") {
                    result = new _JSON.JSONFormat().read(text);
                }
                if (!result || result.error || result.code >= 300 && result.code !== 304) {
                    if (result && result.error) {
                        result = {
                            error: result.error
                        };
                    } else {
                        result = {
                            error: result
                        };
                    }
                }
                if (result.error) {
                    var failure = options.scope ? _BaseTypes.FunctionExt.bind(options.failure, options.scope) : options.failure;
                    failure(result);
                } else {
                    result.succeed = result.succeed == undefined ? true : result.succeed;
                    var success = options.scope ? _BaseTypes.FunctionExt.bind(options.success, options.scope) : options.success;
                    success(result);
                }
            });
        }
    }]);

    return CommonServiceBase;
}();

_SuperMap.SuperMap.CommonServiceBase = CommonServiceBase;

/**
 * ćśŤĺŠˇĺ™¨čŻ·ć±‚ĺ›žč°?ĺ‡˝ć•°
 * @callback RequestCallback
 * @example
 * var requestCallback = function (serviceResult){
 *      console.log(serviceResult.result);
 * }
 * new QueryService(url).queryByBounds(param, requestCallback);
 * @param {Object} serviceResult
 * @param {Object} serviceResult.result ćśŤĺŠˇĺ™¨čż”ĺ›žç»“ćžś
 * @param {Object} serviceResult.object ĺŹ‘ĺ¸?ĺş”ç”¨ç¨‹ĺşŹäş‹ä»¶çš„ĺŻąč±ˇ
 * @param {Object} serviceResult.type äş‹ä»¶ç±»ĺž‹
 * @param {Object} serviceResult.element ćŽĄĺŹ—ćµŹč§?ĺ™¨äş‹ä»¶çš„DOMčŠ‚ç‚ą
 */

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FetchRequest = exports.getRequestTimeout = exports.setRequestTimeout = exports.isCORS = exports.setCORS = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

__webpack_require__(51);

__webpack_require__(46);

var _fetchJsonp2 = __webpack_require__(45);

var _fetchJsonp3 = _interopRequireDefault(_fetchJsonp2);

var _SuperMap = __webpack_require__(0);

var _Util = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetch = window.fetch;
/**
 * @function SuperMap.setCORS
 * @description č®ľç˝®ć?Żĺ?¦ć”ŻćŚ?č·¨ĺźź
 * @param {boolean} cors - ć?Żĺ?¦ć”ŻćŚ?č·¨ĺźź
 */
var setCORS = exports.setCORS = _SuperMap.SuperMap.setCORS = function (cors) {
    _SuperMap.SuperMap.CORS = cors;
};
/**
 * @function SuperMap.isCORS
 * @description ć?Żĺ?¦ć”ŻćŚ?č·¨ĺźź
 * @returns {boolean} ć?Żĺ?¦ć”ŻćŚ?č·¨ĺźź
 */
var isCORS = exports.isCORS = _SuperMap.SuperMap.isCORS = function () {
    if (_SuperMap.SuperMap.CORS != undefined) {
        return _SuperMap.SuperMap.CORS;
    }
    return window.XMLHttpRequest && 'withCredentials' in new window.XMLHttpRequest();
};
/**
 * @function SuperMap.setRequestTimeout
 * @description č®ľç˝®čŻ·ć±‚č¶…ć—¶ć—¶é—´ă€‚
 * @param {number} timeout - čŻ·ć±‚č¶…ć—¶ć—¶é—´
 */
var setRequestTimeout = exports.setRequestTimeout = _SuperMap.SuperMap.setRequestTimeout = function (timeout) {
    return _SuperMap.SuperMap.RequestTimeout = timeout;
};
/**
 * @function SuperMap.getRequestTimeout
 * @description čŽ·ĺŹ–čŻ·ć±‚č¶…ć—¶ć—¶é—´ďĽŚé»?č®¤45să€‚
 * @returns {number} čŻ·ć±‚č¶…ć—¶ć—¶é—´
 */
var getRequestTimeout = exports.getRequestTimeout = _SuperMap.SuperMap.getRequestTimeout = function () {
    return _SuperMap.SuperMap.RequestTimeout || 45000;
};
var FetchRequest = exports.FetchRequest = _SuperMap.SuperMap.FetchRequest = {
    commit: function commit(method, url, params, options) {
        method = method ? method.toUpperCase() : method;
        switch (method) {
            case 'GET':
                return this.get(url, params, options);
            case 'POST':
                return this.post(url, params, options);
            case 'PUT':
                return this.put(url, params, options);
            case 'DELETE':
                return this.delete(url, params, options);
            default:
                return this.get(url, params, options);
        }
    },
    supportDirectRequest: function supportDirectRequest(url, options) {
        return _Util.Util.isInTheSameDomain(url) || isCORS() || options.proxy;
    },
    get: function get(url, params, options) {
        options = options || {};
        var type = 'GET';
        url = this._processUrl(url, options);
        url = _Util.Util.urlAppend(url, this._getParameterString(params || {}));
        if (!this.supportDirectRequest(url, options)) {
            url = url.replace('.json', '.jsonp');
            var config = {
                url: url,
                data: params
            };
            return _SuperMap.SuperMap.Util.RequestJSONPPromise.GET(config);
        }
        if (!this.urlIsLong(url)) {
            return this._fetch(url, params, options, type);
        } else {
            return this._postSimulatie(type, url.substring(0, url.indexOf('?') - 1), params, options);
        }
    },

    delete: function _delete(url, params, options) {
        options = options || {};
        var type = 'DELETE';
        url = this._processUrl(url, options);
        url = _Util.Util.urlAppend(url, this._getParameterString(params || {}));
        if (!this.supportDirectRequest(url, options)) {
            url = url.replace('.json', '.jsonp');
            var config = {
                url: url += "&_method=DELETE",
                data: params
            };
            return _SuperMap.SuperMap.Util.RequestJSONPPromise.DELETE(config);
        }
        if (this.urlIsLong(url)) {
            return this._postSimulatie(type, url.substring(0, url.indexOf('?') - 1), params, options);
        }
        return this._fetch(url, params, options, type);
    },
    post: function post(url, params, options) {
        options = options || {};
        if (!this.supportDirectRequest(url, options)) {
            url = url.replace('.json', '.jsonp');
            var config = {
                url: url += "&_method=POST",
                data: params
            };
            return _SuperMap.SuperMap.Util.RequestJSONPPromise.POST(config);
        }
        return this._fetch(this._processUrl(url, options), params, options, 'POST');
    },

    put: function put(url, params, options) {
        options = options || {};
        url = this._processUrl(url, options);
        if (!this.supportDirectRequest(url, options)) {
            url = url.replace('.json', '.jsonp');
            var config = {
                url: url += "&_method=PUT",
                data: params
            };
            return _SuperMap.SuperMap.Util.RequestJSONPPromise.DELETE(config);
        }
        return this._fetch(url, params, options, 'PUT');
    },
    urlIsLong: function urlIsLong(url) {
        //ĺ˝“ĺ‰Ťurlçš„ĺ­—čŠ‚é•żĺş¦ă€‚
        var totalLength = 0,
            charCode = null;
        for (var i = 0, len = url.length; i < len; i++) {
            //č˝¬ĺŚ–ä¸şUnicodeçĽ–ç ?
            charCode = url.charCodeAt(i);
            if (charCode < 0x007f) {
                totalLength++;
            } else if (0x0080 <= charCode && charCode <= 0x07ff) {
                totalLength += 2;
            } else if (0x0800 <= charCode && charCode <= 0xffff) {
                totalLength += 3;
            }
        }
        return totalLength < 2000 ? false : true;
    },
    _postSimulatie: function _postSimulatie(type, url, params, options) {
        var separator = url.indexOf("?") > -1 ? "&" : "?";
        url += separator + '_method=' + type;
        if (typeof params !== 'string') {
            params = JSON.stringify(params);
        }
        return this.post(url, params, options);
    },

    _processUrl: function _processUrl(url, options) {
        if (this._isMVTRequest(url)) {
            return url;
        }

        if (url.indexOf('.json') === -1 && !options.withoutFormatSuffix) {
            if (url.indexOf("?") < 0) {
                url += '.json';
            } else {
                var urlArrays = url.split("?");
                if (urlArrays.length === 2) {
                    url = urlArrays[0] + ".json?" + urlArrays[1];
                }
            }
        }
        if (options && options.proxy) {
            if (typeof options.proxy === "function") {
                url = options.proxy(url);
            } else {
                url = decodeURIComponent(url);
                url = options.proxy + encodeURIComponent(url);
            }
        }
        return url;
    },

    _fetch: function _fetch(url, params, options, type) {
        options = options || {};
        options.headers = options.headers || {};
        if (!options.headers['Content-Type']) {
            options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
        }
        if (options.timeout) {
            return this._timeout(options.timeout, fetch(url, {
                method: type,
                headers: options.headers,
                body: type === 'PUT' || type === 'POST' ? params : undefined,
                credentials: options.withCredentials ? 'include' : 'omit',
                mode: 'cors',
                timeout: getRequestTimeout()
            }).then(function (response) {
                return response;
            }));
        }
        return fetch(url, {
            method: type,
            body: type === 'PUT' || type === 'POST' ? params : undefined,
            headers: options.headers,
            credentials: options.withCredentials ? 'include' : 'omit',
            mode: 'cors',
            timeout: getRequestTimeout()
        }).then(function (response) {
            return response;
        });
    },

    _fetchJsonp: function _fetchJsonp(url, options) {
        options = options || {};
        return (0, _fetchJsonp3.default)(url, {
            method: 'GET',
            timeout: options.timeout
        }).then(function (response) {
            return response;
        });
    },

    _timeout: function _timeout(seconds, promise) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                reject(new Error("timeout"));
            }, seconds);
            promise.then(resolve, reject);
        });
    },

    _getParameterString: function _getParameterString(params) {
        var paramsArray = [];
        for (var key in params) {
            var value = params[key];
            if (value != null && typeof value !== 'function') {
                var encodedValue;
                if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.constructor === Array) {
                    var encodedItemArray = [];
                    var item;
                    for (var itemIndex = 0, len = value.length; itemIndex < len; itemIndex++) {
                        item = value[itemIndex];
                        encodedItemArray.push(encodeURIComponent(item === null || item === undefined ? "" : item));
                    }
                    encodedValue = '[' + encodedItemArray.join(",") + ']';
                } else {
                    encodedValue = encodeURIComponent(value);
                }
                paramsArray.push(encodeURIComponent(key) + "=" + encodedValue);
            }
        }
        return paramsArray.join("&");
    },

    _isMVTRequest: function _isMVTRequest(url) {
        return url.indexOf('.mvt') > -1 || url.indexOf('.pbf') > -1;
    }
};
_SuperMap.SuperMap.Util.RequestJSONPPromise = {
    limitLength: 1500,
    queryKeys: [],
    queryValues: [],
    supermap_callbacks: {},
    addQueryStrings: function addQueryStrings(values) {
        var me = this;
        for (var key in values) {
            me.queryKeys.push(key);
            if (typeof values[key] !== "string") {
                values[key] = _SuperMap.SuperMap.Util.toJSON(values[key]);
            }
            var tempValue = encodeURIComponent(values[key]);
            me.queryValues.push(tempValue);
        }
    },
    issue: function issue(config) {
        var me = this,
            uid = me.getUid(),
            url = config.url,
            splitQuestUrl = [];
        var p = new Promise(function (resolve) {
            me.supermap_callbacks[uid] = function (response) {
                delete me.supermap_callbacks[uid];
                resolve(response);
            };
        });

        // me.addQueryStrings({
        //     callback: "SuperMap.Util.RequestJSONPPromise.supermap_callbacks[" + uid + "]"
        // });
        var sectionURL = url,
            keysCount = 0; //ć­¤ć¬ˇsectionURLä¸­ćś‰ĺ¤šĺ°‘ä¸Şkey
        var length = me.queryKeys ? me.queryKeys.length : 0;
        for (var i = 0; i < length; i++) {
            if (sectionURL.length + me.queryKeys[i].length + 2 >= me.limitLength) {
                //+2 for ("&"or"?")and"="
                if (keysCount == 0) {
                    return false;
                }
                splitQuestUrl.push(sectionURL);
                sectionURL = url;
                keysCount = 0;
                i--;
            } else {
                if (sectionURL.length + me.queryKeys[i].length + 2 + me.queryValues[i].length > me.limitLength) {
                    var leftValue = me.queryValues[i];
                    while (leftValue.length > 0) {
                        var leftLength = me.limitLength - sectionURL.length - me.queryKeys[i].length - 2; //+2 for ("&"or"?")and"="
                        if (sectionURL.indexOf("?") > -1) {
                            sectionURL += "&";
                        } else {
                            sectionURL += "?";
                        }
                        var tempLeftValue = leftValue.substring(0, leftLength);
                        //é?żĺ…Ť ć?Şć–­sectionURLć—¶ďĽŚĺ°†ç±»äĽĽäşŽ%22čż™ć ·çš„ç¬¦ĺŹ·ć?Şć??ä¸¤ĺŤŠďĽŚä»Žč€ŚĺŻĽč‡´ćśŤĺŠˇç«Żç»„čŁ…sectionURLć—¶ĺŹ‘ç”źé”™čŻŻ
                        if (tempLeftValue.substring(leftLength - 1, leftLength) === "%") {
                            leftLength -= 1;
                            tempLeftValue = leftValue.substring(0, leftLength);
                        } else if (tempLeftValue.substring(leftLength - 2, leftLength - 1) === "%") {
                            leftLength -= 2;
                            tempLeftValue = leftValue.substring(0, leftLength);
                        }

                        sectionURL += me.queryKeys[i] + "=" + tempLeftValue;
                        leftValue = leftValue.substring(leftLength);
                        if (tempLeftValue.length > 0) {
                            splitQuestUrl.push(sectionURL);
                            sectionURL = url;
                            keysCount = 0;
                        }
                    }
                } else {
                    keysCount++;
                    if (sectionURL.indexOf("?") > -1) {
                        sectionURL += "&";
                    } else {
                        sectionURL += "?";
                    }
                    sectionURL += me.queryKeys[i] + "=" + me.queryValues[i];
                }
            }
        }
        splitQuestUrl.push(sectionURL);
        me.send(splitQuestUrl, "SuperMap.Util.RequestJSONPPromise.supermap_callbacks[" + uid + "]", config && config.proxy);
        return p;
    },

    getUid: function getUid() {
        var uid = new Date().getTime(),
            random = Math.floor(Math.random() * 1e17);
        return uid * 1000 + random;
    },

    send: function send(splitQuestUrl, callback, proxy) {
        var len = splitQuestUrl.length;
        if (len > 0) {
            var jsonpUserID = new Date().getTime();
            for (var i = 0; i < len; i++) {
                var url = splitQuestUrl[i];
                if (url.indexOf("?") > -1) {
                    url += "&";
                } else {
                    url += "?";
                }
                url += "sectionCount=" + len;
                url += "&sectionIndex=" + i;
                url += "&jsonpUserID=" + jsonpUserID;
                if (proxy) {
                    url = decodeURIComponent(url);
                    url = proxy + encodeURIComponent(url);
                }
                (0, _fetchJsonp3.default)(url, {
                    jsonpCallbackFunction: callback,
                    timeout: 30000
                });
            }
        }
    },

    GET: function GET(config) {
        var me = this;
        me.queryKeys.length = 0;
        me.queryValues.length = 0;
        me.addQueryStrings(config.params);
        return me.issue(config);
    },

    POST: function POST(config) {
        var me = this;
        me.queryKeys.length = 0;
        me.queryValues.length = 0;
        me.addQueryStrings({
            requestEntity: config.data
        });
        return me.issue(config);
    },

    PUT: function PUT(config) {
        var me = this;
        me.queryKeys.length = 0;
        me.queryValues.length = 0;
        me.addQueryStrings({
            requestEntity: config.data
        });
        return me.issue(config);
    },
    DELETE: function DELETE(config) {
        var me = this;
        me.queryKeys.length = 0;
        me.queryValues.length = 0;
        me.addQueryStrings({
            requestEntity: config.data
        });
        return me.issue(config);
    }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SecurityManager = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperMap = __webpack_require__(0);

var _Util = __webpack_require__(1);

var _FetchRequest = __webpack_require__(7);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @name SecurityManager
 * @memberOf SuperMap
 * @namespace
 * @category Security
 * @description ĺ®‰ĺ…¨ç®ˇç?†ä¸­ĺż?ďĽŚćŹ?äľ›iServer,iPortal,Onlineç»źä¸€ćť?é™?č®¤čŻ?ç®ˇç?†
 *  > ä˝żç”¨čŻ´ć?ŽďĽš
 *  > ĺ?›ĺ»şä»»ä˝•ä¸€ä¸ŞćśŤĺŠˇäą‹ĺ‰Ťč°?ç”¨{@link SuperMap.SecurityManager.registerToken}ć?–
 *  > {@link SuperMap.SecurityManager.registerKey}ćł¨ĺ†Śĺ‡­ćŤ®ă€‚
 *  > ĺŹ‘é€?čŻ·ć±‚ć—¶ć ąćŤ®urlć?–č€…ćśŤĺŠˇidčŽ·ĺŹ–ç›¸ĺş”çš„keyć?–č€…tokenĺą¶č‡ŞĺŠ¨ć·»ĺŠ ĺ?°ćśŤĺŠˇĺś°ĺť€ä¸­
 */
var SecurityManager = exports.SecurityManager = function () {
    function SecurityManager() {
        _classCallCheck(this, SecurityManager);
    }

    _createClass(SecurityManager, null, [{
        key: 'generateToken',


        /**
         * @description ä»ŽćśŤĺŠˇĺ™¨čŽ·ĺŹ–ä¸€ä¸Ştoken,ĺś¨ć­¤äą‹ĺ‰Ťč¦?ćł¨ĺ†ŚćśŤĺŠˇĺ™¨äżˇć?Ż
         * @param {string} url -ćśŤĺŠˇĺ™¨ĺźźĺ?Ť+ç«ŻĺŹŁďĽŚĺ¦‚ďĽšhttp://localhost:8092
         * @param {SuperMap.TokenServiceParameter} tokenParam - tokenç”łčŻ·ĺŹ‚ć•°
         * @return {Promise} čż”ĺ›žĺŚ…ĺ?«tokenäżˇć?Żçš„PromiseĺŻąč±ˇ
         */

        value: function generateToken(url, tokenParam) {
            var serverInfo = this.servers[url];
            if (!serverInfo) {
                return;
            }
            return _FetchRequest.FetchRequest.post(serverInfo.tokenServiceUrl, JSON.stringify(tokenParam.toJSON())).then(function (response) {
                return response.text();
            });
        }

        /**
         * @description ćł¨ĺ†Śĺ®‰ĺ…¨ćśŤĺŠˇĺ™¨ç›¸ĺ…łäżˇć?Ż
         * @param {SuperMap.ServerInfo} serverInfos - ćśŤĺŠˇĺ™¨äżˇć?Ż
         */

    }, {
        key: 'registerServers',
        value: function registerServers(serverInfos) {
            this.servers = this.servers || {};
            if (!_Util.Util.isArray(serverInfos)) {
                serverInfos = [serverInfos];
            }
            for (var i = 0; i < serverInfos.length; i++) {
                var serverInfo = serverInfos[i];
                this.servers[serverInfo.server] = serverInfo;
            }
        }

        /**
         * @description ćśŤĺŠˇčŻ·ć±‚é?˝äĽšč‡ŞĺŠ¨ĺ¸¦ä¸Ščż™ä¸Ştoken
         * @param {string} url -ćśŤĺŠˇĺ™¨ĺźźĺ?Ť+ç«ŻĺŹŁďĽšĺ¦‚http://localhost:8090
         * @param {string} token - token
         */

    }, {
        key: 'registerToken',
        value: function registerToken(url, token) {
            this.tokens = this.tokens || {};
            if (!url || !token) {
                return;
            }
            var domain = this._getTokenStorageKey(url);
            this.tokens[domain] = token;
        }

        /**
         * @description ćł¨ĺ†Śkey,idsä¸şć•°ç»„(ĺ­?ĺś¨ä¸€ä¸ŞkeyĺŻąĺş”ĺ¤šä¸ŞćśŤĺŠˇ)
         * @param {Array} ids - ĺŹŻä»Ąć?ŻćśŤĺŠˇidć•°ç»„ć?–č€…urlĺś°ĺť€ć•°ç»„ć?–č€…webAPIç±»ĺž‹ć•°ç»„
         * @param {string} key - key
         */

    }, {
        key: 'registerKey',
        value: function registerKey(ids, key) {
            this.keys = this.keys || {};
            if (!ids || ids.length < 1 || !key) {
                return;
            }

            ids = _Util.Util.isArray(ids) ? ids : [ids];
            for (var i = 0; i < ids.length; i++) {
                var id = this._getUrlRestString(ids[0]) || ids[0];
                this.keys[id] = key;
            }
        }

        /**
         * @description čŽ·ĺŹ–ćśŤĺŠˇĺ™¨äżˇć?Ż
         * @param {string} url -ćśŤĺŠˇĺ™¨ĺźźĺ?Ť+ç«ŻĺŹŁďĽŚĺ¦‚ďĽšhttp://localhost:8092
         * @returns {SuperMap.ServerInfo} ćśŤĺŠˇĺ™¨äżˇć?Ż
         */

    }, {
        key: 'getServerInfo',
        value: function getServerInfo(url) {
            this.servers = this.servers || {};
            return this.servers[url];
        }

        /**
         * @description ć ąćŤ®UrlčŽ·ĺŹ–token
         * @param {string} url - ćśŤĺŠˇĺ™¨ĺźźĺ?Ť+ç«ŻĺŹŁďĽŚĺ¦‚ďĽšhttp://localhost:8092
         * @returns {string} token
         */

    }, {
        key: 'getToken',
        value: function getToken(url) {
            if (!url) {
                return;
            }
            this.tokens = this.tokens || {};
            var domain = this._getTokenStorageKey(url);
            return this.tokens[domain];
        }

        /**
         * @description ć ąćŤ®UrlčŽ·ĺŹ–key
         * @param {string} id - id
         * @returns {string} key
         */

    }, {
        key: 'getKey',
        value: function getKey(id) {
            this.keys = this.keys || {};
            var key = this._getUrlRestString(id) || id;
            return this.keys[key];
        }

        /**
         * @description iServerç™»ĺ˝•éŞŚčŻ?
         * @param {string} url - iServeré¦–éˇµĺś°ĺť€ďĽŚĺ¦‚ďĽšhttp://localhost:8090/iserver
         * @param {string} username - ç”¨ć?·ĺ?Ť
         * @param {string} password - ĺŻ†ç ?
         * @param {boolean} rememberme - ć?Żĺ?¦č®°ä˝Ź
         * @returns {Promise} čż”ĺ›žĺŚ…ĺ?«iServerç™»ĺ˝•čŻ·ć±‚ç»“ćžśçš„PromiseĺŻąč±ˇ
         */

    }, {
        key: 'loginiServer',
        value: function loginiServer(url, username, password, rememberme) {
            var end = url.substr(url.length - 1, 1);
            url += end === "/" ? "services/security/login.json" : "/services/security/login.json";
            var loginInfo = {
                username: username && username.toString(),
                password: password && password.toString(),
                rememberme: rememberme
            };
            loginInfo = JSON.stringify(loginInfo);
            var requestOptions = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            };
            return _FetchRequest.FetchRequest.post(url, loginInfo, requestOptions).then(function (response) {
                return response.json();
            });
        }

        /**
         * @description iServerç™»ĺ‡ş
         * @param {string} url - iServeré¦–éˇµĺś°ĺť€,ĺ¦‚ďĽšhttp://localhost:8090/iserver
         * @returns {Promise} ć?Żĺ?¦ç™»ĺ‡şć??ĺŠź
         */

    }, {
        key: 'logoutiServer',
        value: function logoutiServer(url) {
            var end = url.substr(url.length - 1, 1);
            url += end === "/" ? "services/security/logout" : "/services/security/logout";

            var requestOptions = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                },
                withoutFormatSuffix: true
            };
            return _FetchRequest.FetchRequest.get(url, "", requestOptions).then(function () {
                return true;
            }).catch(function () {
                return false;
            });
        }

        /**
         * @description Onlineç™»ĺ˝•éŞŚčŻ?
         * @param {string} callbackLocation - č·łč˝¬ä˝Ťç˝®
         * @param {boolean} newTab -ć?Żĺ?¦ć–°çŞ—ĺŹŁć‰“ĺĽ€
         */

    }, {
        key: 'loginOnline',
        value: function loginOnline(callbackLocation, newTab) {
            var loginUrl = SecurityManager.SSO + "/login?service=" + callbackLocation;
            this._open(loginUrl, newTab);
        }

        /**
         * @description iPortalç™»ĺ˝•éŞŚčŻ?
         * @param {string} url - iportalé¦–éˇµĺś°ĺť€
         * @param {string} username - ç”¨ć?·ĺ?Ť
         * @param {string} password - ĺŻ†ç ?
         * @returns {Promise} čż”ĺ›žĺŚ…ĺ?«iPortalç™»ĺ˝•čŻ·ć±‚ç»“ćžśçš„PromiseĺŻąč±ˇ
         */

    }, {
        key: 'loginiPortal',
        value: function loginiPortal(url, username, password) {
            var end = url.substr(url.length - 1, 1);
            url += end === "/" ? "web/login.json" : "/web/login.json";
            var loginInfo = {
                username: username && username.toString(),
                password: password && password.toString()
            };
            loginInfo = JSON.stringify(loginInfo);
            var requestOptions = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                },
                withCredentials: true
            };
            return _FetchRequest.FetchRequest.post(url, loginInfo, requestOptions).then(function (response) {
                return response.json();
            });
        }

        /**
         * @description iPortalç™»ĺ‡ş
         * @param {string} url - iportalé¦–éˇµĺś°ĺť€
         * @returns {Promise} ĺ¦‚ćžśç™»ĺ‡şć??ĺŠźďĽŚčż”ĺ›žtrue;ĺ?¦ĺ?™čż”ĺ›žfalse
         */

    }, {
        key: 'logoutiPortal',
        value: function logoutiPortal(url) {
            var end = url.substr(url.length - 1, 1);
            url += end === "/" ? "services/security/logout" : "/services/security/logout";

            var requestOptions = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                },
                withCredentials: true,
                withoutFormatSuffix: true
            };
            return _FetchRequest.FetchRequest.get(url, "", requestOptions).then(function () {
                return true;
            }).catch(function () {
                return false;
            });
        }

        /**
         * @description iManagerç™»ĺ˝•éŞŚčŻ?
         * @param {string} url - iManagerĺś°ĺť€ă€‚ĺś°ĺť€ĺŹ‚ć•°ä¸şiManageré¦–éˇµĺś°ĺť€ďĽŚĺ¦‚ďĽš http://localhost:8390/imanager
         * @param {Object} loginInfoParams - iManager ç™»ĺ˝•ĺŹ‚ć•°ă€‚
         * @param {string} loginInfoParams.userName - ç”¨ć?·ĺ?Ť
         * @param {string} loginInfoParams.password - ĺŻ†ç ?
         * @param {Object} options  
         * @param {boolean} options.isNewTab - ä¸Ťĺ?Śĺźźć—¶ć?Żĺ?¦ĺś¨ć–°çŞ—ĺŹŁć‰“ĺĽ€ç™»ĺ˝•éˇµéť˘
         * @return {Promise} čż”ĺ›žĺŚ…ĺ?«iManagerç™»ĺ˝•čŻ·ć±‚ç»“ćžśçš„PromiseĺŻąč±ˇ
         */

    }, {
        key: 'loginManager',
        value: function loginManager(url, loginInfoParams, options) {
            if (!_Util.Util.isInTheSameDomain(url)) {
                var isNewTab = options ? options.isNewTab : true;
                this._open(url, isNewTab);
                return;
            }
            var end = url.substr(url.length - 1, 1);
            var requestUrl = end === "/" ? url + "icloud/security/tokens.json" : url + "/icloud/security/tokens.json";
            var params = loginInfoParams || {};
            var loginInfo = {
                username: params.userName && params.userName.toString(),
                password: params.password && params.password.toString()
            };
            loginInfo = JSON.stringify(loginInfo);
            var requestOptions = {
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json'
                }
            };
            var me = this;
            return _FetchRequest.FetchRequest.post(requestUrl, loginInfo, requestOptions).then(function (response) {
                response.text().then(function (result) {
                    me.imanagerToken = result;
                    return result;
                });
            });
        }

        /**
         * @description ć¸…ç©şĺ…¨é?¨éŞŚčŻ?äżˇć?Ż
         */

    }, {
        key: 'destroyAllCredentials',
        value: function destroyAllCredentials() {
            this.keys = null;
            this.tokens = null;
            this.servers = null;
        }

        /**
         * @description ć¸…ç©şä»¤ç‰Śäżˇć?Ż
         */

    }, {
        key: 'destroyToken',
        value: function destroyToken(url) {
            if (!url) {
                return;
            }
            var domain = this._getTokenStorageKey(url);
            this.tokens = this.tokens || {};
            if (this.tokens[domain]) {
                delete this.tokens[domain];
            }
        }

        /**
         * @description ć¸…ç©şćśŤĺŠˇćŽ?ćť?ç ?
         */

    }, {
        key: 'destroyKey',
        value: function destroyKey(id) {
            if (!id) {
                return;
            }
            this.keys = this.keys || {};
            var key = this._getUrlRestString(id) || id;
            if (this.keys[key]) {
                delete this.keys[key];
            }
        }
    }, {
        key: '_open',
        value: function _open(url, newTab) {
            newTab = newTab != null ? newTab : true;
            var offsetX = window.screen.availWidth / 2 - this.INNER_WINDOW_WIDTH / 2;
            var offsetY = window.screen.availHeight / 2 - this.INNER_WINDOW_HEIGHT / 2;
            var options = "height=" + this.INNER_WINDOW_HEIGHT + ", width=" + this.INNER_WINDOW_WIDTH + ",top=" + offsetY + ", left=" + offsetX + ",toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no";
            if (newTab) {
                window.open(url, 'login');
            } else {
                window.open(url, 'login', options);
            }
        }
    }, {
        key: '_getTokenStorageKey',
        value: function _getTokenStorageKey(url) {
            var patten = /(.*?):\/\/([^\/]+)/i;
            var result = url.match(patten);
            if (!result) {
                return url;
            }
            return result[0];
        }
    }, {
        key: '_getUrlRestString',
        value: function _getUrlRestString(url) {
            if (!url) {
                return url;
            }
            var patten = /http:\/\/(.*\/rest)/i;
            var result = url.match(patten);
            if (!result) {
                return url;
            }
            return result[0];
        }
    }]);

    return SecurityManager;
}();

SecurityManager.INNER_WINDOW_WIDTH = 600;
SecurityManager.INNER_WINDOW_HEIGHT = 600;
SecurityManager.SSO = "https://sso.supermap.com";
SecurityManager.ONLINE = "http://www.supermapol.com";
_SuperMap.SuperMap.SecurityManager = SecurityManager;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ArrayExt = exports.FunctionExt = exports.NumberExt = exports.StringExt = undefined;

var _SuperMap = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *@namespace SuperMap
 */

/**
 * @description In addition to the mandatory C and P parameters, an arbitrary number of
 * objects can be passed, which will extend C.
 * @memberOf SuperMap
 * @param {Object} C - the class that inherits
 * @param {Object} P - the superclass to inherit from
 */
_SuperMap.SuperMap.inherit = function (C, P) {
    var F = function F() {};
    F.prototype = P.prototype;
    C.prototype = new F();
    var i, l, o;
    for (i = 2, l = arguments.length; i < l; i++) {
        o = arguments[i];
        if (typeof o === "function") {
            o = o.prototype;
        }
        _SuperMap.SuperMap.Util.extend(C.prototype, o);
    }
};

/**
 * @description ĺ®žçŽ°ĺ¤šé‡Ťç»§ć‰ż
 * @memberOf SuperMap
 * @param {Class|Object} ...mixins - ç»§ć‰żçš„ç±»
 */
_SuperMap.SuperMap.mixin = function () {
    for (var _len = arguments.length, mixins = Array(_len), _key = 0; _key < _len; _key++) {
        mixins[_key] = arguments[_key];
    }

    var Mix = function Mix(options) {
        _classCallCheck(this, Mix);

        for (var index = 0; index < mixins.length; index++) {
            copyProperties(this, new mixins[index](options));
        }
    };

    for (var index = 0; index < mixins.length; index++) {
        var mixin = mixins[index];
        copyProperties(Mix, mixin);
        copyProperties(Mix.prototype, mixin.prototype);
        copyProperties(Mix.prototype, new mixin());
    }
    return Mix;

    function copyProperties(target, source) {
        var ownKeys = Object.getOwnPropertyNames(source);
        if (Object.getOwnPropertySymbols) {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source));
        }
        for (var index = 0; index < ownKeys.length; index++) {
            var key = ownKeys[index];
            if (key !== "constructor" && key !== "prototype" && key !== "name" && key !== "length") {
                var desc = Object.getOwnPropertyDescriptor(source, key);
                if (window["ActiveXObject"]) {
                    Object.defineProperty(target, key, desc || {});
                } else {
                    Object.defineProperty(target, key, desc);
                }
            }
        }
    }
};

/**
 * @name String
 * @memberOf SuperMap
 * @namespace
 * @description ĺ­—ç¬¦ä¸˛ć“Ťä˝śçš„ä¸€çł»ĺ?—ĺ¸¸ç”¨ć‰©ĺ±•ĺ‡˝ć•°.
 */
var StringExt = exports.StringExt = _SuperMap.SuperMap.String = {

    /**
     * @description ĺ?¤ć–­ç›®ć ‡ĺ­—ç¬¦ä¸˛ć?Żĺ?¦ä»ĄćŚ‡ĺ®šçš„ĺ­?ĺ­—ç¬¦ä¸˛ĺĽ€ĺ¤´.
     * @param {string} str - ç›®ć ‡ĺ­—ç¬¦ä¸˛.
     * @param {string} sub - ćźĄć‰ľçš„ĺ­?ĺ­—ç¬¦ä¸˛.
     * @returns {boolean} ç›®ć ‡ĺ­—ç¬¦ä¸˛ä»ĄćŚ‡ĺ®šçš„ĺ­?ĺ­—ç¬¦ä¸˛ĺĽ€ĺ¤´ďĽŚĺ?™čż”ĺ›žtrueďĽ›ĺ?¦ĺ?™čż”ĺ›žfalseă€‚
     */
    startsWith: function startsWith(str, sub) {
        return str.indexOf(sub) == 0;
    },

    /**
     * @description ĺ?¤ć–­ç›®ć ‡ĺ­—ç¬¦ä¸˛ć?Żĺ?¦ĺŚ…ĺ?«ćŚ‡ĺ®šçš„ĺ­?ĺ­—ç¬¦ä¸˛.
     * @param {string} str - ç›®ć ‡ĺ­—ç¬¦ä¸˛.
     * @param {string} sub - ćźĄć‰ľçš„ĺ­?ĺ­—ç¬¦ä¸˛.
     * @returns {boolean} ç›®ć ‡ĺ­—ç¬¦ä¸˛ä¸­ĺŚ…ĺ?«ćŚ‡ĺ®šçš„ĺ­?ĺ­—ç¬¦ä¸˛,ĺ?™čż”ĺ›žtrueďĽ›ĺ?¦ĺ?™čż”ĺ›žfalse.
     */
    contains: function contains(str, sub) {
        return str.indexOf(sub) != -1;
    },

    /**
     * @description ĺ? é™¤ä¸€ä¸Şĺ­—ç¬¦ä¸˛çš„ĺĽ€ĺ¤´ĺ’Śç»“ĺ°ľĺ¤„çš„ć‰€ćś‰ç©şç™˝ĺ­—ç¬¦.
     * @param {string} str - (ĺŹŻč?˝)ĺ­?ĺś¨ç©şç™˝ĺ­—ç¬¦ĺˇ«ĺˇžçš„ĺ­—ç¬¦ä¸˛.
     * @returns {string} ĺ? é™¤ĺĽ€ĺ¤´ĺ’Śç»“ĺ°ľĺ¤„ç©şç™˝ĺ­—ç¬¦ĺ?Žçš„ĺ­—ç¬¦ä¸˛.
     */
    trim: function trim(str) {
        return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    },

    /**
     * @description éŞ†é©ĽĺĽŹ("-")čżžĺ­—ç¬¦çš„ĺ­—ç¬¦ä¸˛ĺ¤„ç?†.
     * äľ‹ĺ¦‚: "chicken-head" becomes "chickenHead",
     *       "-chicken-head" becomes "ChickenHead".
     * @param {string} str - č¦?ĺ¤„ç?†çš„ĺ­—ç¬¦ä¸˛,ĺŽźĺ§‹ĺ†…ĺ®ąä¸Ťĺş”č˘«äż®ć”ą.
     * @returns {string}
     */
    camelize: function camelize(str) {
        var oStringList = str.split('-');
        var camelizedString = oStringList[0];
        for (var i = 1, len = oStringList.length; i < len; i++) {
            var s = oStringList[i];
            camelizedString += s.charAt(0).toUpperCase() + s.substring(1);
        }
        return camelizedString;
    },

    /**
     * @description ćŹ?äľ›ĺ¸¦ ${token} ć ‡č®°çš„ĺ­—ç¬¦ä¸˛, čż”ĺ›žcontextĺŻąč±ˇĺ±žć€§ä¸­ćŚ‡ĺ®šć ‡č®°çš„ĺ±žć€§ĺ€Ľ.
     * @example
     * ç¤şäľ‹:
     * (code)
     * 1ă€?template = "${value,getValue}";
     *         context = {value: {getValue:function(){return Math.max.apply(null,argument);}}};
     *         args = [2,23,12,36,21];
     *       čż”ĺ›žĺ€Ľ:36
     * (end)
     * ç¤şäľ‹:
     * (code)
     * 2ă€?template = "$${{value,getValue}}";
     *         context = {value: {getValue:function(){return Math.max.apply(null,argument);}}};
     *         args = [2,23,12,36,21];
     *       čż”ĺ›žĺ€Ľ:"${36}"
     * (end)
     * ç¤şäľ‹:
     * (code)
     * 3ă€?template = "${a,b}";
     *         context = {a: {b:"format"}};
     *         args = null;
     *       čż”ĺ›žĺ€Ľ:"format"
     * (end)
     * ç¤şäľ‹:
     * (code)
     * 3ă€?template = "${a,b}";
     *         context = null;
     *         args = null;
     *       čż”ĺ›žĺ€Ľ:"${a.b}"
     * (end)
     * @param {string} template - ĺ¸¦ć ‡č®°çš„ĺ­—ç¬¦ä¸˛ĺ°†č¦?č˘«ć›żćŤ˘.ĺŹ‚ć•° template ć ĽĺĽŹä¸ş"${token}",ć­¤ĺ¤„çš„ token ć ‡č®°äĽšć›żćŤ˘ä¸ş context["token"] ĺ±žć€§çš„ĺ€Ľ
     * @param {Object} context - ĺ¸¦ćś‰ĺ±žć€§çš„ĺŹŻé€‰ĺŻąč±ˇçš„ĺ±žć€§ç”¨äşŽĺŚąé…Ťć ĽĺĽŹĺŚ–ĺ­—ç¬¦ä¸˛ä¸­çš„ć ‡č®°.ĺ¦‚ćžśčŻĄĺŹ‚ć•°ä¸şç©ş,ĺ°†ä˝żç”¨ window ĺŻąč±ˇ.
     * @param {Array} args - ĺŹŻé€‰ĺŹ‚ć•°äĽ é€’ç»™ĺś¨contextĺŻąč±ˇä¸Šć‰ľĺ?°çš„ĺ‡˝ć•°.
     * @returns {string} ä»Ž context ĺŻąč±ˇĺ±žć€§ä¸­ć›żćŤ˘ĺ­—ç¬¦ä¸˛ć ‡č®°ä˝Ťçš„ĺ­—ç¬¦ä¸˛.
     */
    format: function format(template, context, args) {
        if (!context) {
            context = window;
        }

        // Example matching:
        // str   = ${foo.bar}
        // match = foo.bar
        var replacer = function replacer(str, match) {
            var replacement;

            // Loop through all subs. Example: ${a.b.c}
            // 0 -> replacement = context[a];
            // 1 -> replacement = context[a][b];
            // 2 -> replacement = context[a][b][c];
            var subs = match.split(/\.+/);
            for (var i = 0; i < subs.length; i++) {
                if (i == 0) {
                    replacement = context;
                }

                replacement = replacement[subs[i]];
            }

            if (typeof replacement === "function") {
                replacement = args ? replacement.apply(null, args) : replacement();
            }

            // If replacement is undefined, return the string 'undefined'.
            // This is a workaround for a bugs in browsers not properly
            // dealing with non-participating groups in regular expressions:
            // http://blog.stevenlevithan.com/archives/npcg-javascript
            if (typeof replacement == 'undefined') {
                return 'undefined';
            } else {
                return replacement;
            }
        };

        return template.replace(_SuperMap.SuperMap.String.tokenRegEx, replacer);
    },

    /**
     * @description Used to find tokens in a string.
     * @example
     * Examples: ${a}, ${a.b.c}, ${a-b}, ${5}
     */
    tokenRegEx: /\$\{([\w.]+?)\}/g,

    /**
     * @description Used to test strings as numbers.
     */
    numberRegEx: /^([+-]?)(?=\d|\.\d)\d*(\.\d*)?([Ee]([+-]?\d+))?$/,

    /**
     * @description ĺ?¤ć–­ä¸€ä¸Şĺ­—ç¬¦ä¸˛ć?Żĺ?¦ĺŹŞĺŚ…ĺ?«ä¸€ä¸Şć•°ĺ€Ľ.
     * @example
     * (code)
     * SuperMap.String.isNumeric("6.02e23") // true
     * SuperMap.String.isNumeric("12 dozen") // false
     * SuperMap.String.isNumeric("4") // true
     * SuperMap.String.isNumeric(" 4 ") // false
     * (end)
     * @returns {boolean} ĺ­—ç¬¦ä¸˛ĺŚ…ĺ?«ĺ”Żä¸€çš„ć•°ĺ€Ľ,čż”ĺ›žtrue;ĺ?¦ĺ?™čż”ĺ›žfalse.
     */
    isNumeric: function isNumeric(value) {
        return _SuperMap.SuperMap.String.numberRegEx.test(value);
    },

    /**
     * @description ćŠŠä¸€ä¸Şçś‹äĽĽć•°ĺ€Ľĺž‹çš„ĺ­—ç¬¦ä¸˛č˝¬ĺŚ–ä¸şä¸€ä¸Şć•°ĺ€Ľ.
     * @returns {(number|string)} ĺ¦‚ćžśč?˝č˝¬ćŤ˘ä¸şć•°ĺ€Ľĺ?™čż”ĺ›žć•°ĺ€Ľ,ĺ?¦ĺ?™čż”ĺ›žĺ­—ç¬¦ä¸˛ćś¬čş«.
     */
    numericIf: function numericIf(value) {
        return _SuperMap.SuperMap.String.isNumeric(value) ? parseFloat(value) : value;
    }

};

/**
 * @name Number
 * @memberOf SuperMap
 * @namespace
 * @description ć•°ĺ€Ľć“Ťä˝śçš„ä¸€çł»ĺ?—ĺ¸¸ç”¨ć‰©ĺ±•ĺ‡˝ć•°.
 */
var NumberExt = exports.NumberExt = _SuperMap.SuperMap.Number = {

    /**
     *  @description ć ĽĺĽŹĺŚ–ć•°ĺ­—ć—¶é»?č®¤çš„ĺ°Źć•°ç‚ąĺ?†éš”ç¬¦.
     *  @constant
     *  @default "."
     */
    decimalSeparator: ".",

    /**
     *  @description ć ĽĺĽŹĺŚ–ć•°ĺ­—ć—¶é»?č®¤çš„ĺŤ?ä˝Ťĺ?†éš”ç¬¦.
     *  @constant
     *  @default ","
     */
    thousandsSeparator: ",",

    /**
     * @description é™?ĺ?¶ćµ®ç‚ąć•°çš„ćś‰ć•?ć•°ĺ­—ä˝Ťć•°.
     * @param {number} num - ćµ®ç‚ąć•°
     * @param {integer} sig - ćś‰ć•?ä˝Ťć•°
     * @returns {number} ĺ°†ć•°ĺ­—ĺ››č?Ťäş”ĺ…Ąĺ?°ćŚ‡ĺ®šć•°é‡Źçš„ćś‰ć•?ä˝Ťć•°.
     */
    limitSigDigs: function limitSigDigs(num, sig) {
        var fig = 0;
        if (sig > 0) {
            fig = parseFloat(num.toPrecision(sig));
        }
        return fig;
    },

    /**
     * @description ć•°ĺ­—ć ĽĺĽŹĺŚ–čľ“ĺ‡ş.
     * @param {number} num - ć•°ĺ­—
     * @param {integer} dec  - ć•°ĺ­—çš„ĺ°Źć•°é?¨ĺ?†ĺ››č?Ťäş”ĺ…Ąĺ?°ćŚ‡ĺ®šçš„ä˝Ťć•°.é»?č®¤ä¸ş 0. č®ľç˝®ä¸şnullĺ€Ľć—¶ĺ°Źć•°é?¨ĺ?†ä¸ŤĺŹ?.
     * @param {string} tsep - ĺŤ?ä˝Ťĺ?†éš”ç¬¦. é»?č®¤ä¸ş",".
     * @param {string} dsep - ĺ°Źć•°ç‚ąĺ?†éš”ç¬¦. é»?č®¤ä¸ş".".
     * @returns {string} ć•°ĺ­—ć ĽĺĽŹĺŚ–ĺ?Žçš„ĺ­—ç¬¦ä¸˛.
     */
    format: function format(num, dec, tsep, dsep) {
        dec = typeof dec != "undefined" ? dec : 0;
        tsep = typeof tsep != "undefined" ? tsep : _SuperMap.SuperMap.Number.thousandsSeparator;
        dsep = typeof dsep != "undefined" ? dsep : _SuperMap.SuperMap.Number.decimalSeparator;

        if (dec != null) {
            num = parseFloat(num.toFixed(dec));
        }

        var parts = num.toString().split(".");
        if (parts.length === 1 && dec == null) {
            // integer where we do not want to touch the decimals
            dec = 0;
        }

        var integer = parts[0];
        if (tsep) {
            var thousands = /(-?[0-9]+)([0-9]{3})/;
            while (thousands.test(integer)) {
                integer = integer.replace(thousands, "$1" + tsep + "$2");
            }
        }

        var str;
        if (dec == 0) {
            str = integer;
        } else {
            var rem = parts.length > 1 ? parts[1] : "0";
            if (dec != null) {
                rem = rem + new Array(dec - rem.length + 1).join("0");
            }
            str = integer + dsep + rem;
        }
        return str;
    }
};

if (!Number.prototype.limitSigDigs) {
    /**
     * APIMethod: Number.limitSigDigs
     * é™?ĺ?¶ćµ®ç‚ąć•°çš„ćś‰ć•?ć•°ĺ­—ä˝Ťć•°.
     * @param {integer} sig -ćś‰ć•?ä˝Ťć•°
     * @returns {integer} ĺ°†ć•°ĺ­—ĺ››č?Ťäş”ĺ…Ąĺ?°ćŚ‡ĺ®šć•°é‡Źçš„ćś‰ć•?ä˝Ťć•°.
     *           ĺ¦‚ćžśäĽ ĺ…Ąĺ€Ľä¸ş nullă€?0ă€?ć?–č€…ć?Żč´źć•°, čż”ĺ›žĺ€Ľ 0
     */
    Number.prototype.limitSigDigs = function (sig) {
        return NumberExt.limitSigDigs(this, sig);
    };
}

/**
 * @name Function
 * @memberOf SuperMap
 * @namespace
 * @description ĺ‡˝ć•°ć“Ťä˝śçš„ä¸€çł»ĺ?—ĺ¸¸ç”¨ć‰©ĺ±•ĺ‡˝ć•°.
 */
var FunctionExt = exports.FunctionExt = _SuperMap.SuperMap.Function = {
    /**
     * @description ç»‘ĺ®šĺ‡˝ć•°ĺ?°ĺŻąč±ˇ.ć–ąäľżĺ?›ĺ»şthisçš„ä˝śç”¨ĺźź.
     * @param {function} func - čľ“ĺ…Ąĺ‡˝ć•°.
     * @param {Object} object - ĺŻąč±ˇç»‘ĺ®šĺ?°čľ“ĺ…Ąĺ‡˝ć•°(ä˝śä¸şčľ“ĺ…Ąĺ‡˝ć•°çš„thisĺŻąč±ˇ).
     * @returns {function} objectĺŹ‚ć•°ä˝śä¸şfuncĺ‡˝ć•°çš„thisĺŻąč±ˇ.
     */
    bind: function bind(func, object) {
        // create a reference to all arguments past the second one
        var args = Array.prototype.slice.apply(arguments, [2]);
        return function () {
            // Push on any additional arguments from the actual function call.
            // These will come after those sent to the bind call.
            var newArgs = args.concat(Array.prototype.slice.apply(arguments, [0]));
            return func.apply(object, newArgs);
        };
    },

    /**
     * @description ç»‘ĺ®šĺ‡˝ć•°ĺ?°ĺŻąč±ˇ,ĺś¨č°?ç”¨čŻĄĺ‡˝ć•°ć—¶é…Ťç˝®ĺą¶ä˝żç”¨äş‹ä»¶ĺŻąč±ˇä˝śä¸şç¬¬ä¸€ä¸ŞĺŹ‚ć•°.
     * @param {function} func - ç”¨äşŽç›‘ĺ?¬äş‹ä»¶çš„ĺ‡˝ć•°.
     * @param {Object} object - this ĺŻąč±ˇçš„ĺĽ•ç”¨.
     * @returns {function}
     */
    bindAsEventListener: function bindAsEventListener(func, object) {
        return function (event) {
            return func.call(object, event || window.event);
        };
    },

    /**
     * @description čŻĄĺ‡˝ć•°ä»…ä»…čż”ĺ›žfalse.čŻĄĺ‡˝ć•°ä¸»č¦?ć?Żé?żĺ…Ťĺś¨IE8ä»Ąä¸‹ćµŹč§?ä¸­DOMäş‹ä»¶ĺŹĄćź„çš„ĺŚżĺ?Ťĺ‡˝ć•°é—®é˘?.
     * @example
     * document.onclick = SuperMap.Function.False;
     * @returns {boolean}
     */
    False: function False() {
        return false;
    },

    /**
     * @description čŻĄĺ‡˝ć•°ä»…ä»…čż”ĺ›žtrue.čŻĄĺ‡˝ć•°ä¸»č¦?ć?Żé?żĺ…Ťĺś¨IE8ä»Ąä¸‹ćµŹč§?ä¸­DOMäş‹ä»¶ĺŹĄćź„çš„ĺŚżĺ?Ťĺ‡˝ć•°é—®é˘?.
     * @example
     * document.onclick = SuperMap.Function.True;
     * @returns {boolean}
     */
    True: function True() {
        return true;
    },

    /**
     * @description ĺŹŻé‡Ťç”¨ĺ‡˝ć•°,ä»…ä»…čż”ĺ›ž"undefined".
     * @returns {undefined}
     */
    Void: function Void() {}

};

/**
 * @name Array
 * @memberOf SuperMap
 * @namespace
 * @description ć•°ç»„ć“Ťä˝śçš„ä¸€çł»ĺ?—ĺ¸¸ç”¨ć‰©ĺ±•ĺ‡˝ć•°.
 */
var ArrayExt = exports.ArrayExt = _SuperMap.SuperMap.Array = {

    /**
     * @description čż‡ć»¤ć•°ç»„.ćŹ?äľ›äş†ECMA-262ć ‡ĺ‡†ä¸­Array.prototype.filterĺ‡˝ć•°çš„ć‰©ĺ±•.
     * @see {@link http://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Global_Objects/Array/filter}
     * @param {Array} array - č¦?čż‡ć»¤çš„ć•°ç»„.
     * @param {function} callback - ć•°ç»„ä¸­çš„ćŻŹä¸€ä¸Şĺ…?ç´ č°?ç”¨čŻĄĺ‡˝ć•°.<br>
     *     ĺ¦‚ćžśĺ‡˝ć•°çš„čż”ĺ›žĺ€Ľä¸ştrue,čŻĄĺ…?ç´ ĺ°†ĺŚ…ĺ?«ĺś¨čż”ĺ›žçš„ć•°ç»„ä¸­.čŻĄĺ‡˝ć•°ćś‰ä¸‰ä¸ŞĺŹ‚ć•°: ć•°ç»„ä¸­çš„ĺ…?ç´ ,ĺ…?ç´ çš„ç´˘ĺĽ•,ć•°ç»„č‡Şčş«.<br>
     *     ĺ¦‚ćžśč®ľç˝®äş†ĺŹŻé€‰ĺŹ‚ć•°caller,ĺś¨č°?ç”¨callbackć—¶,ä˝żç”¨ĺŹŻé€‰ĺŹ‚ć•°callerč®ľç˝®ä¸şcallbackçš„ĺŹ‚ć•°.<br>
     * @param {Object} caller - ĺś¨č°?ç”¨callbackć—¶ďĽŚä˝żç”¨ĺŹŻé€‰ĺŹ‚ć•°callerč®ľç˝®ä¸şcallbackçš„ĺŹ‚ć•°ă€‚
     * @returns {Array} callbackĺ‡˝ć•°čż”ĺ›žtrueć—¶çš„ĺ…?ç´ ĺ°†ä˝śä¸şčż”ĺ›žć•°ç»„ä¸­çš„ĺ…?ç´ ă€‚
     */
    filter: function filter(array, callback, caller) {
        var selected = [];
        if (Array.prototype.filter) {
            selected = array.filter(callback, caller);
        } else {
            var len = array.length;
            if (typeof callback != "function") {
                throw new TypeError();
            }
            for (var i = 0; i < len; i++) {
                if (i in array) {
                    var val = array[i];
                    if (callback.call(caller, val, i, array)) {
                        selected.push(val);
                    }
                }
            }
        }
        return selected;
    }

};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MapVRenderer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _SuperMap = __webpack_require__(5);

var _mapv = __webpack_require__(41);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class MapVRenderer
 * @classdesc MapVć¸˛ćź“ĺ™¨ă€‚
 * @private
 * @extends mapv.MapVBaseLayer
 * @param map - {SuperMap.Map} ĺľ…ć¸˛ćź“çš„ĺś°ĺ›ľ
 * @param layer - {mapv.baiduMapLayer} ĺľ…ć¸˛ćź“çš„ĺ›ľĺ±‚
 * @param dataSet - {mapv.DataSet} ĺľ…ć¸˛ćź“çš„ć•°ćŤ®é›†
 * @param options - {Object} ć¸˛ćź“çš„ĺŹ‚ć•°
 */
var MapVBaseLayer = _mapv.baiduMapLayer ? _mapv.baiduMapLayer.__proto__ : Function;

var MapVRenderer = exports.MapVRenderer = function (_MapVBaseLayer) {
    _inherits(MapVRenderer, _MapVBaseLayer);

    function MapVRenderer(map, layer, dataSet, options) {
        _classCallCheck(this, MapVRenderer);

        var _this = _possibleConstructorReturn(this, (MapVRenderer.__proto__ || Object.getPrototypeOf(MapVRenderer)).call(this, map, dataSet, options));

        if (!MapVBaseLayer) {
            var _ret;

            return _ret = _this, _possibleConstructorReturn(_this, _ret);
        }

        var self = _this;
        options = options || {};

        self.init(options);
        self.argCheck(options);
        _this.canvasLayer = layer;
        self.transferToMercator();
        _this.clickEvent = _this.clickEvent.bind(_this);
        _this.mousemoveEvent = _this.mousemoveEvent.bind(_this);
        _this.bindEvent();
        return _this;
    }

    /**
     * @function MapvRenderer.prototype.clickEvent
     * @description ç‚ąĺ‡»äş‹ä»¶
     * @param e - {Object} č§¦ĺŹ‘ĺŻąč±ˇ
     */


    _createClass(MapVRenderer, [{
        key: 'clickEvent',
        value: function clickEvent(e) {
            var pixel = e.xy;
            _get(MapVRenderer.prototype.__proto__ || Object.getPrototypeOf(MapVRenderer.prototype), 'clickEvent', this).call(this, pixel, e);
        }

        /**
         * @function MapvRenderer.prototype.mousemoveEvent
         * @description éĽ ć ‡ç§»ĺŠ¨äş‹ä»¶
         * @param  e - {Object} č§¦ĺŹ‘ĺŻąč±ˇ
         */

    }, {
        key: 'mousemoveEvent',
        value: function mousemoveEvent(e) {
            var pixel = e.xy;
            _get(MapVRenderer.prototype.__proto__ || Object.getPrototypeOf(MapVRenderer.prototype), 'mousemoveEvent', this).call(this, pixel, e);
        }

        /**
         * @function MapvRenderer.prototype.bindEvent
         * @description ç»‘ĺ®šéĽ ć ‡ç§»ĺŠ¨ĺ’ŚéĽ ć ‡ç‚ąĺ‡»äş‹ä»¶
         */

    }, {
        key: 'bindEvent',
        value: function bindEvent() {
            var map = this.map;

            if (this.options.methods) {
                if (this.options.methods.click) {
                    map.events.on({ 'click': this.clickEvent });
                }
                if (this.options.methods.mousemove) {
                    map.events.on({ 'mousemove': this.mousemoveEvent });
                }
            }
        }

        /**
         * @function MapvRenderer.prototype.unbindEvent
         * @description č§Łç»‘éĽ ć ‡ç§»ĺŠ¨ĺ’ŚéĽ ć ‡ć»‘ĺŠ¨č§¦ĺŹ‘çš„äş‹ä»¶
         */

    }, {
        key: 'unbindEvent',
        value: function unbindEvent() {
            var map = this.map;

            if (this.options.methods) {
                if (this.options.methods.click) {
                    map.events.un({ 'click': this.clickEvent });
                }
                if (this.options.methods.mousemove) {
                    map.events.un({ 'mousemove': this.mousemoveEvent });
                }
            }
        }

        /**
         * @function MapvRenderer.prototype.getContext
         * @description čŽ·ĺŹ–äżˇć?Ż
         */

    }, {
        key: 'getContext',
        value: function getContext() {
            return this.canvasLayer && this.canvasLayer.canvasContext;
        }

        /**
         * @function MapvRenderer.prototype.addData
         * @description čż˝ĺŠ ć•°ćŤ®
         * @param data - {oject} ĺľ…ć·»ĺŠ çš„ć•°ćŤ®
         * @param options - {oject} ĺľ…ć·»ĺŠ çš„ć•°ćŤ®äżˇć?Ż
         */

    }, {
        key: 'addData',
        value: function addData(data, options) {
            var _data = data;
            if (data && data.get) {
                _data = data.get();
            }
            this.dataSet.add(_data);
            this.update({ options: options });
        }

        /**
         * @function MapvRenderer.prototype.updateData
         * @description ć›´ć–°č¦†ç›–ĺŽźć•°ćŤ®
         * @param data - {oject} ĺľ…ć›´ć–°çš„ć•°ćŤ®
         * @param options - {oject} ĺľ…ć›´ć–°çš„ć•°ćŤ®äżˇć?Ż
         */

    }, {
        key: 'setData',
        value: function setData(data, options) {
            var _data = data;
            if (data && data.get) {
                _data = data.get();
            }
            this.dataSet = this.dataSet || new _mapv.DataSet();
            this.dataSet.set(_data);
            this.update({ options: options });
        }

        /**
         * @function MapvRenderer.prototype.getData
         * @description čŽ·ĺŹ–ć•°ćŤ®
         */

    }, {
        key: 'getData',
        value: function getData() {
            return this.dataSet;
        }

        /**
         * @function MapvRenderer.prototype.removeData
         * @description ĺ? é™¤ç¬¦ĺ??čż‡ć»¤ćťˇä»¶çš„ć•°ćŤ®
         * @param filter - {function} čż‡ć»¤ćťˇä»¶ă€‚ćťˇä»¶ĺŹ‚ć•°ä¸şć•°ćŤ®éˇąďĽŚčż”ĺ›žĺ€Ľä¸ştrue,čˇ¨ç¤şĺ? é™¤čŻĄĺ…?ç´ ďĽ›ĺ?¦ĺ?™čˇ¨ç¤şä¸Ťĺ? é™¤
         */

    }, {
        key: 'removeData',
        value: function removeData(_filter) {
            if (!this.dataSet) {
                return;
            }
            var newData = this.dataSet.get({
                filter: function filter(data) {
                    return _filter != null && typeof _filter === "function" ? !_filter(data) : true;
                }
            });
            this.dataSet.set(newData);
            this.update({ options: null });
        }

        /**
         * @function MapvRenderer.prototype.clearData
         * @description ć¸…é™¤ć•°ćŤ®
         */

    }, {
        key: 'clearData',
        value: function clearData() {
            this.dataSet && this.dataSet.clear();
            this.update({ options: null });
        }

        /**
         * @function MapvRenderer.prototype.render
         * @description çť€č‰˛
         * @param time - {number}
         */

    }, {
        key: 'render',
        value: function render(time) {
            this._canvasUpdate(time);
        }

        /**
         * @function MapvRenderer.prototype.transferToMercator
         * @description ĺ˘¨ĺŤˇć‰?ĺť?ć ‡ä¸şç»Źçş¬ĺş¦
         */

    }, {
        key: 'transferToMercator',
        value: function transferToMercator() {
            if (this.options.coordType && ["bd09mc", "coordinates_mercator"].indexOf(this.options.coordType) > -1) {
                var data = this.dataSet.get();
                data = this.dataSet.transferCoordinate(data, function (coordinates) {
                    var pixel = _SuperMap.SuperMap.Projection.transform({
                        x: coordinates[0],
                        y: coordinates[1]
                    }, "EPSG:3857", "EPSG:4326");
                    return [pixel.x, pixel.y];
                }, 'coordinates', 'coordinates');
                this.dataSet._set(data);
            }
        }
    }, {
        key: '_canvasUpdate',
        value: function _canvasUpdate(time) {
            if (!this.canvasLayer) {
                return;
            }

            var self = this;

            var animationOptions = self.options.animation;

            var context = this.getContext();
            var map = this.map;
            if (self.isEnabledTime()) {
                if (time === undefined) {
                    this.clear(context);
                    return;
                }
                if (this.context === '2d') {
                    context.save();
                    context.globalCompositeOperation = 'destination-out';
                    context.fillStyle = 'rgba(0, 0, 0, .1)';
                    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
                    context.restore();
                }
            } else {
                this.clear(context);
            }

            if (this.context === '2d') {
                for (var key in self.options) {
                    context[key] = self.options[key];
                }
            } else {
                context.clear(context.COLOR_BUFFER_BIT);
            }

            if (self.options.minZoom && map.getZoom() < self.options.minZoom || self.options.maxZoom && map.getZoom() > self.options.maxZoom) {
                return;
            }
            var layer = self.canvasLayer;
            var dataGetOptions = {
                fromColumn: 'coordinates',
                transferCoordinate: function transferCoordinate(coordinate) {
                    var coord = layer.transferToMapLatLng({ lon: coordinate[0], lat: coordinate[1] });
                    var worldPoint = map.getViewPortPxFromLonLat(coord);
                    return [worldPoint.x, worldPoint.y];
                }
            };

            if (time !== undefined) {
                dataGetOptions.filter = function (item) {
                    var trails = animationOptions.trails || 10;
                    return time && item.time > time - trails && item.time < time;
                };
            }

            var data = self.dataSet.get(dataGetOptions);

            this.processData(data);

            self.options._size = self.options.size;

            var worldPoint = map.getViewPortPxFromLonLat(layer.transferToMapLatLng({ lon: 0, lat: 0 }));

            var zoomUnit = Math.pow(2, 14 - map.getZoom());
            if (self.options.unit == 'm') {
                if (self.options.size) {
                    self.options._size = self.options.size / zoomUnit;
                }
                if (self.options.width) {
                    self.options._width = self.options.width / zoomUnit;
                }
                if (self.options.height) {
                    self.options._height = self.options.height / zoomUnit;
                }
            } else {
                self.options._size = self.options.size;
                self.options._height = self.options.height;
                self.options._width = self.options.width;
            }

            this.drawContext(context, data, self.options, worldPoint);

            self.options.updateCallback && self.options.updateCallback(time);
        }
    }, {
        key: 'init',
        value: function init(options) {

            var self = this;

            self.options = options;

            this.initDataRange(options);

            this.context = self.options.context || '2d';

            if (self.options.zIndex) {
                this.canvasLayer && this.canvasLayer.setZIndex(self.options.zIndex);
            }

            this.initAnimator();
        }

        /**
         * @function MapvRenderer.prototype.addAnimatorEvent
         * @description ć·»ĺŠ ĺŠ¨ç”»äş‹ä»¶
         */

    }, {
        key: 'addAnimatorEvent',
        value: function addAnimatorEvent() {
            this.map.events.on({ 'movestart': this.animatorMovestartEvent.bind(this) });
            this.map.events.on({ 'moveend': this.animatorMoveendEvent.bind(this) });
        }

        /**
         * @function MapvRenderer.prototype.clear
         * @description ć¸…é™¤çŽŻĺ˘?
         * @param context - {Object} ĺ˝“ĺ‰ŤçŽŻĺ˘?
         */

    }, {
        key: 'clear',
        value: function clear(context) {
            context && context.clearRect && context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        }

        /**
         * @function MapvRenderer.prototype.show
         * @description ĺ±•ç¤şć¸˛ćź“ć•?ćžś
         */

    }, {
        key: 'show',
        value: function show() {
            this.map.addLayer(this.canvasLayer);
        }

        /**
         * @function MapvRenderer.prototype.hide
         * @description éš?č—Źć¸˛ćź“ć•?ćžś
         */

    }, {
        key: 'hide',
        value: function hide() {
            this.map.removeLayer(this.canvasLayer);
        }

        /**
         * @function MapvRenderer.prototype.draw
         * @description ć¸˛ćź“ç»?ĺ?¶
         */

    }, {
        key: 'draw',
        value: function draw() {
            this.canvasLayer.redraw();
        }
    }]);

    return MapVRenderer;
}(MapVBaseLayer);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GeoDecodingParameter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperMap = __webpack_require__(0);

var _Util = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class SuperMap.GeoDecodingParameter
 * @category iServer AddressMatch
 * @classdesc ĺś°ç?†ĺŹŤĺ?‘ĺŚąé…ŤĺŹ‚ć•°ç±»ă€‚
 * @param {Object} options - ĺŹ‚ć•°ă€‚<br>
 * @param {number} options.x - ćźĄčŻ˘ä˝Ťç˝®çš„ć¨Şĺť?ć ‡ă€‚<br>
 * @param {number} options.y - ćźĄčŻ˘ä˝Ťç˝®çš„çşµĺť?ć ‡ă€‚<br>
 * @param {number} options.fromIndex - č®ľç˝®čż”ĺ›žĺŻąč±ˇçš„čµ·ĺ§‹ç´˘ĺĽ•ĺ€Ľă€‚<br>
 * @param {Array.<string>} options.filters - čż‡ć»¤ĺ­—ć®µďĽŚé™?ĺ®šćźĄčŻ˘ĺŚşĺźźă€‚<br>
 * @param {string} options.prjCoordSys - ćźĄčŻ˘ç»“ćžśçš„ĺť?ć ‡çł»ă€‚<br>
 * @param {number} options.maxReturn - ćś€ĺ¤§čż”ĺ›žç»“ćžść•°ă€‚<br>
 * @param {number} options.geoDecodingRadius - ćźĄčŻ˘ĺŤŠĺľ„ă€‚
 */
var GeoDecodingParameter = exports.GeoDecodingParameter = function () {
  function GeoDecodingParameter(options) {
    _classCallCheck(this, GeoDecodingParameter);

    if (options.filters) {
      var strs = [];
      var fields = options.filters.split(',');
      fields.map(function (field) {
        strs.push("\"" + field + "\"");
        return field;
      });
      options.filters = strs;
    }
    /**
     * @member {number} SuperMap.GeoDecodingParameter.prototype.x
     * @description ćźĄčŻ˘ä˝Ťç˝®çš„ć¨Şĺť?ć ‡ă€‚
     */
    this.x = null;

    /**
     * @member {number} SuperMap.GeoDecodingParameter.prototype.y
     * @description ćźĄčŻ˘ä˝Ťç˝®çš„çşµĺť?ć ‡ă€‚
     */
    this.y = null;
    /**
     * @member {number} SuperMap.GeoDecodingParameter.prototype.fromIndex
     * @description  č®ľç˝®čż”ĺ›žĺŻąč±ˇçš„čµ·ĺ§‹ç´˘ĺĽ•ĺ€Ľă€‚
     */
    this.fromIndex = null;

    /**
     * @member {number} SuperMap.GeoDecodingParameter.prototype.toIndex
     * @description č®ľç˝®čż”ĺ›žĺŻąč±ˇçš„ç»“ćťźç´˘ĺĽ•ĺ€Ľă€‚
     */
    this.toIndex = null;

    /**
     * @member {Array.<string>} SuperMap.GeoDecodingParameter.prototype.filters
     * @description čż‡ć»¤ĺ­—ć®µďĽŚé™?ĺ®šćźĄčŻ˘ĺŚşĺźźă€‚
     */
    this.filters = null;

    /**
     * @member {string} SuperMap.GeoDecodingParameter.prototype.prjCoordSys
     * @description ćźĄčŻ˘ç»“ćžśçš„ĺť?ć ‡çł»ă€‚
     */
    this.prjCoordSys = null;

    /**
     *  @member {number} SuperMap.GeoDecodingParameter.prototype.maxReturn
     *  @description ćś€ĺ¤§čż”ĺ›žç»“ćžść•°ă€‚
     */
    this.maxReturn = null;

    /**
     * @member {number} SuperMap.GeoDecodingParameter.prototype.geoDecodingRadius
     * @description ćźĄčŻ˘ĺŤŠĺľ„ă€‚
     */
    this.geoDecodingRadius = null;
    _Util.Util.extend(this, options);
  }

  /**
   * @function SuperMap.GeoDecodingParameter.prototype.destroy
   * @description é‡Šć”ľčµ„ćş?ďĽŚĺ°†ĺĽ•ç”¨čµ„ćş?çš„ĺ±žć€§ç˝®ç©şă€‚
   */


  _createClass(GeoDecodingParameter, [{
    key: 'destroy',
    value: function destroy() {
      this.x = null;
      this.y = null;
      this.fromIndex = null;
      this.toIndex = null;
      this.filters = null;
      this.prjCoordSys = null;
      this.maxReturn = null;
      this.geoDecodingRadius = null;
    }
  }]);

  return GeoDecodingParameter;
}();

_SuperMap.SuperMap.GeoDecodingParameter = GeoDecodingParameter;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GeoCodingParameter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperMap = __webpack_require__(0);

var _Util = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class SuperMap.GeoCodingParameter
 * @category  iServer AddressMatch
 * @classdesc ĺś°ç?†ć­Łĺ?‘ĺŚąé…ŤĺŹ‚ć•°ç±»ă€‚
 * @param {Object} options - ĺŹ‚ć•°ă€‚</br>
 * @param {string} options.address - ĺś°ç‚ąĺ…łé”®čŻŤă€‚</br>
 * @param {number} options.fromIndex - č®ľç˝®čż”ĺ›žĺŻąč±ˇçš„čµ·ĺ§‹ç´˘ĺĽ•ĺ€Ľă€‚</br>
 * @param {number} options.toIndex - č®ľç˝®čż”ĺ›žĺŻąč±ˇçš„ç»“ćťźç´˘ĺĽ•ĺ€Ľă€‚</br>
 * @param {Array.<string>} options.filters - čż‡ć»¤ĺ­—ć®µďĽŚé™?ĺ®šćźĄčŻ˘ĺŚşĺźźă€‚</br>
 * @param {string} options.prjCoordSys - ćźĄčŻ˘ç»“ćžśçš„ĺť?ć ‡çł»ă€‚</br>
 * @param {number} options.maxReturn - ćś€ĺ¤§čż”ĺ›žç»“ćžść•°ă€‚
 */
var GeoCodingParameter = exports.GeoCodingParameter = function () {
  function GeoCodingParameter(options) {
    _classCallCheck(this, GeoCodingParameter);

    if (options.filters) {
      var strs = [];
      var fields = options.filters.split(',');
      fields.map(function (field) {
        strs.push("\"" + field + "\"");
        return field;
      });
      options.filters = strs;
    }
    /**
     * @member {string} SuperMap.GeoCodingParameter.prototype.address
     * @description ĺś°ç‚ąĺ…łé”®čŻŤă€‚
     */
    this.address = null;

    /**
     * @member {number} SuperMap.GeoCodingParameter.prototype.fromIndex
     * @description č®ľç˝®čż”ĺ›žĺŻąč±ˇçš„čµ·ĺ§‹ç´˘ĺĽ•ĺ€Ľă€‚
     */
    this.fromIndex = null;

    /**
     * @member {number} SuperMap.GeoCodingParameter.prototype.toIndex
     * @description č®ľç˝®čż”ĺ›žĺŻąč±ˇçš„ç»“ćťźç´˘ĺĽ•ĺ€Ľă€‚
     */
    this.toIndex = null;

    /**
     * @member {Array.<string>}SuperMap.GeoCodingParameter.prototype.filters
     * @description čż‡ć»¤ĺ­—ć®µďĽŚé™?ĺ®šćźĄčŻ˘ĺŚşĺźźă€‚
     */
    this.filters = null;

    /**
     * @member {string} SuperMap.GeoCodingParameter.prototype.prjCoordSys
     * @description  ćźĄčŻ˘ç»“ćžśçš„ĺť?ć ‡çł»ă€‚
     */
    this.prjCoordSys = null;

    /**
     * @member {number} SuperMap.GeoCodingParameter.prototype.maxReturn
     * @description ćś€ĺ¤§čż”ĺ›žç»“ćžść•°ă€‚
     */
    this.maxReturn = null;
    _Util.Util.extend(this, options);
  }

  /**
   * @function SuperMap.GeoCodingParameter.prototype.destroy
   * @description é‡Šć”ľčµ„ćş?ďĽŚĺ°†ĺĽ•ç”¨čµ„ćş?çš„ĺ±žć€§ç˝®ç©şă€‚
   */


  _createClass(GeoCodingParameter, [{
    key: 'destroy',
    value: function destroy() {
      this.address = null;
      this.fromIndex = null;
      this.toIndex = null;
      this.filters = null;
      this.prjCoordSys = null;
      this.maxReturn = null;
    }
  }]);

  return GeoCodingParameter;
}();

_SuperMap.SuperMap.GeoCodingParameter = GeoCodingParameter;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TopologyValidatorJobsParameter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperMap = __webpack_require__(0);

var _Util = __webpack_require__(1);

var _REST = __webpack_require__(2);

var _OutputSetting = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class SuperMap.TopologyValidatorJobsParameter
 * @category  iServer ProcessingService TopologyValidator
 * @classdesc ć‹“ć‰‘ćŁ€ćźĄĺ?†ćž?ä»»ĺŠˇĺŹ‚ć•°ç±»
 * @param {Object} options - ĺż…ĺˇ«ĺŹ‚ć•°ă€‚<br>
 * @param {string} options.datasetName -ć•°ćŤ®é›†ĺ?Ťă€‚<br>
 * @param {string} options.datasetTopology -ćŁ€ćźĄĺŻąč±ˇć‰€ĺś¨çš„ć•°ćŤ®é›†ĺ?Ťç§°ă€‚<br>
 * @param {SuperMap.TopologyValidatorRule} options.rule - ć‹“ć‰‘ćŁ€ćźĄč§„ĺ?™ă€‚<br>
 * @param {string} options.tolerance - ĺ®ąé™?ă€‚<br>
 * @param {SuperMap.OutputSetting} options.output - čľ“ĺ‡şĺŹ‚ć•°č®ľç˝®ă€‚<br>
 */
var TopologyValidatorJobsParameter = exports.TopologyValidatorJobsParameter = function () {
    function TopologyValidatorJobsParameter(options) {
        _classCallCheck(this, TopologyValidatorJobsParameter);

        if (!options) {
            return;
        }
        /**
         * @member {string} SuperMap.TopologyValidatorJobsParameter.prototype.datasetName
         * @description ć•°ćŤ®é›†ĺ?Ťă€‚
         */
        this.datasetName = "";

        /**
         * @member {string} SuperMap.TopologyValidatorJobsParameter.prototype.datasetTopology
         * @description ć‹“ć‰‘ćŁ€ćźĄĺŻąč±ˇć‰€ĺś¨çš„ć•°ćŤ®é›†ĺ?Ťç§°ă€‚
         */
        this.datasetTopology = "";

        /**
         * @member {string} SuperMap.TopologyValidatorJobsParameter.prototype.tolerance
         * @description ĺ®ąé™?ďĽŚćŚ‡ĺ®šçš„ć‹“ć‰‘é”™čŻŻćŁ€ćźĄć—¶ä˝żç”¨çš„ĺ®ąé™?ă€‚
         */
        this.tolerance = "";

        /**
         * @member {SuperMap.TopologyValidatorRule} SuperMap.TopologyValidatorJobsParameter.prototype.rule
         * @description ć‹“ć‰‘ćŁ€ćźĄć¨ˇĺĽŹ ă€‚
         */
        this.rule = _REST.TopologyValidatorRule.REGIONNOOVERLAP;

        /**
         * @member {SuperMap.OutputSetting} SuperMap.TopologyValidatorJobsParameter.prototype.output
         * @description čľ“ĺ‡şĺŹ‚ć•°č®ľç˝®ç±»
         */
        this.output = null;

        _Util.Util.extend(this, options);

        this.CLASS_NAME = "SuperMap.TopologyValidatorJobsParameter";
    }

    /**
     * @function SuperMap.TopologyValidatorJobsParameter.prototype.destroy
     * @description é‡Šć”ľčµ„ćş?ďĽŚĺ°†ĺĽ•ç”¨čµ„ćş?çš„ĺ±žć€§ç˝®ç©şă€‚
     */


    _createClass(TopologyValidatorJobsParameter, [{
        key: 'destroy',
        value: function destroy() {
            this.datasetName = null;
            this.datasetTopology = null;
            this.tolerance = null;
            this.rule = null;
            if (this.output instanceof _OutputSetting.OutputSetting) {
                this.output.destroy();
                this.output = null;
            }
        }

        /**
         * @function SuperMap.TopologyValidatorJobsParameter.toObject
         * @param {Object} TopologyValidatorJobsParameter -ć‹“ć‰‘ćŁ€ćźĄĺ?†ćž?ä»»ĺŠˇĺŹ‚ć•°
         * @param {Object} tempObj - ç›®ć ‡ĺŻąč±ˇ
         * @description ç”źć??ć‹“ć‰‘ćŁ€ćźĄĺ?†ćž?ä»»ĺŠˇĺŻąč±ˇ
         */

    }], [{
        key: 'toObject',
        value: function toObject(TopologyValidatorJobsParameter, tempObj) {
            for (var name in TopologyValidatorJobsParameter) {
                if (name === "datasetName") {
                    tempObj['input'] = tempObj['input'] || {};
                    tempObj['input'][name] = TopologyValidatorJobsParameter[name];
                    continue;
                }
                if (name === "output") {
                    tempObj['output'] = tempObj['output'] || {};
                    tempObj['output'] = TopologyValidatorJobsParameter[name];
                    continue;
                }
                tempObj['analyst'] = tempObj['analyst'] || {};
                tempObj['analyst'][name] = TopologyValidatorJobsParameter[name];
            }
        }
    }]);

    return TopologyValidatorJobsParameter;
}();

_SuperMap.SuperMap.TopologyValidatorJobsParameter = TopologyValidatorJobsParameter;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BuffersAnalystJobsParameter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperMap = __webpack_require__(0);

var _Util = __webpack_require__(1);

var _REST = __webpack_require__(2);

var _OutputSetting = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class SuperMap.BuffersAnalystJobsParameter
 * @category iServer ProcessingService BufferAnalyst
 * @classdesc çĽ“ĺ†˛ĺŚşĺ?†ćž?ä»»ĺŠˇĺŹ‚ć•°ç±»ă€‚
 * @param {Object} options - ĺŹ‚ć•°ă€‚</br>
 * @param {string} options.datasetName - ć•°ćŤ®é›†ĺ?Ťă€‚</br>
 * @param {(SuperMap.Bounds|L.Bounds|ol.extent)} options.bounds - ĺ?†ćž?čŚ?ĺ›´ă€‚</br>
 * @param {string} options.distance - çĽ“ĺ†˛č·ťç¦»ďĽŚć?–çĽ“ĺ†˛ĺŚşĺŤŠĺľ„ă€‚</br>
 * @param {string} options.distanceField - çĽ“ĺ†˛ĺŚşĺ?†ćž?č·ťç¦»ĺ­—ć®µă€‚</br>
 * @param {SuperMap.AnalystSizeUnit} options.distanceUnit - çĽ“ĺ†˛č·ťç¦»ĺŤ•ä˝ŤĺŤ•ä˝Ťă€‚</br>
 * @param {SuperMap.OutputSetting} options.output - čľ“ĺ‡şĺŹ‚ć•°č®ľç˝®ă€‚</br>
 */
var BuffersAnalystJobsParameter = exports.BuffersAnalystJobsParameter = function () {
    function BuffersAnalystJobsParameter(options) {
        _classCallCheck(this, BuffersAnalystJobsParameter);

        /**
         * @member {string} SuperMap.BuffersAnalystJobsParameter.prototype.datasetName
         * @description ć•°ćŤ®é›†ĺ?Ťă€‚
         */
        this.datasetName = "";

        /**
         * @member {(SuperMap.Bounds|L.Bounds|ol.extent)} SuperMap.BuffersAnalystJobsParameter.prototype.bounds
         * @description ĺ?†ćž?čŚ?ĺ›´ă€‚<br>
         */
        this.bounds = "";

        /**
         * @member {string} SuperMap.BuffersAnalystJobsParameter.prototype.distance
         * @description çĽ“ĺ†˛č·ťç¦»ďĽŚć?–ç§°ä¸şçĽ“ĺ†˛ĺŚşĺŤŠĺľ„ă€‚ĺ˝“çĽ“ĺ†˛č·ťç¦»ĺ­—ć®µä˝Ťç©şć—¶ďĽŚć­¤ĺŹ‚ć•°ćś‰ć•?ă€‚
         */
        this.distance = "";

        /**
         * @member {string} SuperMap.BuffersAnalystJobsParameter.prototype.distanceField
         * @description çĽ“ĺ†˛č·ťç¦»ĺ­—ć®µă€‚
         */
        this.distanceField = "";

        /**
         * @member {SuperMap.AnalystSizeUnit} SuperMap.BuffersAnalystJobsParameter.prototype.distanceUnit
         * @description çĽ“ĺ†˛č·ťç¦»ĺŤ•ä˝Ťă€‚
         */
        this.distanceUnit = _REST.AnalystSizeUnit.METER;

        /**
         * @member {string} SuperMap.BuffersAnalystJobsParameter.prototype.dissolveField
         * @description čžŤĺ??ĺ­—ć®µďĽŚć ąćŤ®ĺ­—ć®µĺ€ĽĺŻąçĽ“ĺ†˛ĺŚşç»“ćžśéť˘ĺŻąč±ˇčż›čˇŚčžŤĺ??ă€‚
         */
        this.dissolveField = "";

        /**
         * @member {SuperMap.OutputSetting} SuperMap.BuffersAnalystJobsParameter.prototype.output
         * @description čľ“ĺ‡şĺŹ‚ć•°č®ľç˝®ç±»
         */
        this.output = null;

        if (!options) {
            return this;
        }
        _Util.Util.extend(this, options);

        this.CLASS_NAME = "SuperMap.BuffersAnalystJobsParameter";
    }

    /**
     * @function SuperMap.BuffersAnalystJobsParameter.prototype.destroy
     * @description é‡Šć”ľčµ„ćş?ďĽŚĺ°†ĺĽ•ç”¨čµ„ćş?çš„ĺ±žć€§ç˝®ç©şă€‚
     */


    _createClass(BuffersAnalystJobsParameter, [{
        key: 'destroy',
        value: function destroy() {
            this.datasetName = null;
            this.bounds = null;
            this.distance = null;
            this.distanceField = null;
            this.distanceUnit = null;
            this.dissolveField = null;
            if (this.output instanceof _OutputSetting.OutputSetting) {
                this.output.destroy();
                this.output = null;
            }
        }

        /**
         * @function SuperMap.BuffersAnalystJobsParameter.toObject
         * @param {SuperMap.BuffersAnalystJobsParameter} BuffersAnalystJobsParameter - çĽ“ĺ†˛ĺŚşĺ?†ćž?ä»»ĺŠˇĺŹ‚ć•°
         * @param {Object} tempObj - ç›®ć ‡ĺŻąč±ˇ
         * @description ç”źć??çĽ“ĺ†˛ĺŚşĺ?†ćž?ä»»ĺŠˇĺŻąč±ˇ
         */

    }], [{
        key: 'toObject',
        value: function toObject(BuffersAnalystJobsParameter, tempObj) {
            for (var name in BuffersAnalystJobsParameter) {
                if (name === "datasetName") {
                    tempObj['input'] = tempObj['input'] || {};
                    tempObj['input'][name] = BuffersAnalystJobsParameter[name];
                    continue;
                }
                if (name === "output") {
                    tempObj['output'] = tempObj['output'] || {};
                    tempObj['output'] = BuffersAnalystJobsParameter[name];
                    continue;
                }
                tempObj['analyst'] = tempObj['analyst'] || {};
                if (name === 'bounds') {
                    tempObj['analyst'][name] = BuffersAnalystJobsParameter[name].toBBOX();
                } else {
                    tempObj['analyst'][name] = BuffersAnalystJobsParameter[name];
                }
            }
        }
    }]);

    return BuffersAnalystJobsParameter;
}();

_SuperMap.SuperMap.BuffersAnalystJobsParameter = BuffersAnalystJobsParameter;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OverlayGeoJobParameter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperMap = __webpack_require__(0);

var _Util = __webpack_require__(1);

var _OutputSetting = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class SuperMap.OverlayGeoJobParameter
 * @category iServer ProcessingService OverlayAnalyst
 * @classdesc ĺŹ ĺŠ ĺ?†ćž?ä»»ĺŠˇĺŹ‚ć•°ç±»
 * @param {Object} options - ĺŹ‚ć•°ă€‚<br>
 * @param {string} options.datasetName - ć•°ćŤ®é›†ĺ?Ťă€‚<br>
 * @param {string} options.datasetOverlay - ĺŹ ĺŠ ĺŻąč±ˇć‰€ĺś¨çš„ć•°ćŤ®é›†ĺ?Ťç§°ă€‚<br>
 * @param {string} options.mode - ĺŹ ĺŠ ĺ?†ćž?ć¨ˇĺĽŹă€‚<br>
 * @param {SuperMap.OutputSetting} options.output - čľ“ĺ‡şĺŹ‚ć•°č®ľç˝®ă€‚<br>
 */
var OverlayGeoJobParameter = exports.OverlayGeoJobParameter = function () {
    function OverlayGeoJobParameter(options) {
        _classCallCheck(this, OverlayGeoJobParameter);

        if (!options) {
            return;
        }
        /**
         * @member {string} SuperMap.OverlayGeoJobParameter.prototype.datasetName
         * @description ć•°ćŤ®é›†ĺ?Ťă€‚
         */
        this.datasetName = "";

        /**
         * @member {string} SuperMap.OverlayGeoJobParameter.prototype.datasetOverlay
         * @description ĺŹ ĺŠ ĺŻąč±ˇć‰€ĺś¨çš„ć•°ćŤ®é›†ĺ?Ťç§°ă€‚
         */
        this.datasetOverlay = "";

        /**
         * @member {string} SuperMap.OverlayGeoJobParameter.prototype.mode
         * @description ĺŹ ĺŠ ĺ?†ćž?ć¨ˇĺĽŹ
         */
        this.mode = "";

        /**
         * @member {string} SuperMap.OverlayGeoJobParameter.prototype.srcFields
         * @description čľ“ĺ…Ąć•°ćŤ®éś€č¦?äżťç•™çš„ĺ­—ć®µ
         */
        this.srcFields = "";

        /**
         * @member {string} SuperMap.OverlayGeoJobParameter.prototype.overlayFields
         * @description ĺŹ ĺŠ ć•°ćŤ®éś€č¦?äżťç•™çš„ĺ­—ć®µďĽŚĺŻąĺ?†ćž?ć¨ˇĺĽŹä¸şclipă€?updateă€?eraseć—¶ďĽŚć­¤ĺŹ‚ć•°ć— ć•?ă€‚
         */
        this.overlayFields = "";

        /**
         * @member {SuperMap.OutputSetting} SuperMap.OverlayGeoJobParameter.prototype.output
         * @description čľ“ĺ‡şĺŹ‚ć•°č®ľç˝®ç±»
         */
        this.output = null;

        _Util.Util.extend(this, options);
        this.CLASS_NAME = "SuperMap.OverlayGeoJobParameter";
    }

    /**
     * @function SuperMap.OverlayGeoJobParameter.destroy
     * @override
     */


    _createClass(OverlayGeoJobParameter, [{
        key: 'destroy',
        value: function destroy() {
            this.datasetName = null;
            this.datasetOverlay = null;
            this.mode = null;
            this.srcFields = null;
            this.overlayFields = null;
            if (this.output instanceof _OutputSetting.OutputSetting) {
                this.output.destroy();
                this.output = null;
            }
        }

        /**
         * @function SuperMap.OverlayGeoJobParameter.toObject
         * @param {Object} OverlayGeoJobParameter - ç‚ąč?šĺ??ĺ?†ćž?ä»»ĺŠˇĺŹ‚ć•°ă€‚
         * @param {Object} tempObj - ç›®ć ‡ĺŻąč±ˇă€‚
         * @description ç”źć??ç‚ąč?šĺ??ĺ?†ćž?ä»»ĺŠˇĺŻąč±ˇ
         */

    }], [{
        key: 'toObject',
        value: function toObject(OverlayGeoJobParameter, tempObj) {
            for (var name in OverlayGeoJobParameter) {
                if (name == "datasetName") {
                    tempObj['input'] = tempObj['input'] || {};
                    tempObj['input'][name] = OverlayGeoJobParameter[name];
                    continue;
                }
                if (name === "output") {
                    tempObj['output'] = tempObj['output'] || {};
                    tempObj['output'] = OverlayGeoJobParameter[name];
                    continue;
                }
                tempObj['analyst'] = tempObj['analyst'] || {};
                tempObj['analyst'][name] = OverlayGeoJobParameter[name];
            }
        }
    }]);

    return OverlayGeoJobParameter;
}();

_SuperMap.SuperMap.OverlayGeoJobParameter = OverlayGeoJobParameter;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SummaryRegionJobParameter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperMap = __webpack_require__(0);

var _Util = __webpack_require__(1);

var _REST = __webpack_require__(2);

var _OutputSetting = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class SuperMap.SummaryRegionJobParameter
 * @category  iServer ProcessingService SummaryRegion
 * @classdesc ĺŚşĺźźć±‡ć€»ĺ?†ćž?ä»»ĺŠˇĺŹ‚ć•°ç±»
 * @param {Object} options - ĺŹ‚ć•°ă€‚<br>
 * @param {string} options.datasetName - ć•°ćŤ®é›†ĺ?Ťă€‚<br>
 * @param {boolean} options.sumShape - ć?Żĺ?¦ç»źč®ˇé•żĺş¦ć?–éť˘ç§Żă€‚<br>
 * @param {(SuperMap.Bounds|L.Bounds|ol.extent)} options.query -ĺ?†ćž?čŚ?ĺ›´ă€‚<br>
 * @param {boolean} options.standardSummaryFields ä»Ąć ‡ĺ‡†ĺ±žĺ­—ć®µç»źč®ˇă€‚<br>
 * @param {string} options.standardFields - ä»Ąć ‡ĺ‡†ĺ±žĺ­—ć®µç»źč®ˇçš„ĺ­—ć®µĺ?Ťç§°ă€‚<br>
 * @param {SuperMap.StatisticAnalystMode} options.standardStatisticModes - ä»Ąć ‡ĺ‡†ĺ±žĺ­—ć®µç»źč®ˇçš„ç»źč®ˇć¨ˇĺĽŹă€‚<br>
 * @param {boolean} options.weightedSummaryFields - ä»Ąćť?é‡Ťĺ­—ć®µç»źč®ˇă€‚<br>
 * @param {string} options.weightedFields - ä»Ąćť?é‡Ťĺ­—ć®µç»źč®ˇçš„ĺ­—ć®µĺ?Ťç§°ă€‚<br>
 * @param {SuperMap.StatisticAnalystMode} options.weightedStatisticModes - ä»Ąćť?é‡Ťĺ­—ć®µç»źč®ˇçš„ç»źč®ˇć¨ˇĺĽŹă€‚<br>
 * @param {number} options.resolution - ç˝‘ć Ľĺ¤§ĺ°Źă€‚<br>
 * @param {number} options.meshType - ç˝‘ć Ľéť˘ć±‡ć€»ç±»ĺž‹ă€‚ <br>
 * @param {SuperMap.AnalystSizeUnit} options.meshSizeUnit - ç˝‘ć Ľĺ¤§ĺ°ŹĺŤ•ä˝Ťă€‚<br>
 * @param {SuperMap.SummaryType} options.type - ć±‡ć€»ç±»ĺž‹ă€‚<br>
 * @param {SuperMap.OutputSetting} options.output - čľ“ĺ‡şĺŹ‚ć•°č®ľç˝®ă€‚<br>
 */
var SummaryRegionJobParameter = exports.SummaryRegionJobParameter = function () {
  function SummaryRegionJobParameter(options) {
    _classCallCheck(this, SummaryRegionJobParameter);

    if (!options) {
      return;
    }

    /**
     * @member {string} SuperMap.SummaryRegionJobParameter.prototype.datasetName
     * @description ć•°ćŤ®é›†ĺ?Ťă€‚
     */
    this.datasetName = "";

    /**
     * @member {string} SuperMap.SummaryRegionJobParameter.prototype.regionDataset
     * @description ć±‡ć€»ć•°ćŤ®ćş?ďĽ?ĺ¤ščľąĺ˝˘ć±‡ć€»ć—¶ç”¨ĺ?°çš„ĺŹ‚ć•°ďĽ‰ă€‚
     */
    this.regionDataset = "";

    /**
     * @member {boolean} SuperMap.SummaryRegionJobParameter.prototype.sumShape
     * @description ć?Żĺ?¦ç»źč®ˇé•żĺş¦ć?–éť˘ç§Żă€‚
     */
    this.sumShape = true;

    /**
     * @member {(SuperMap.Bounds|L.Bounds|ol.extent)} SuperMap.SummaryRegionJobParameter.prototype.query
     * @description ĺ?†ćž?čŚ?ĺ›´ă€‚
     */
    this.query = "";

    /**
     * @member {boolean} SuperMap.SummaryRegionJobParameter.prototype.standardSummaryFields
     * @description ä»Ąć ‡ĺ‡†ĺ±žĺ­—ć®µç»źč®ˇă€‚
     */
    this.standardSummaryFields = false;

    /**
     * @member {string} SuperMap.SummaryRegionJobParameter.prototype.standardFields
     * @description ä»Ąć ‡ĺ‡†ĺ±žĺ­—ć®µç»źč®ˇçš„ĺ­—ć®µĺ?Ťç§°ă€‚
     */
    this.standardFields = "";

    /**
     * @member {SuperMap.StatisticAnalystMode} SuperMap.SummaryRegionJobParameter.prototype.standardStatisticModes
     * @description ä»Ąć ‡ĺ‡†ĺ±žĺ­—ć®µç»źč®ˇçš„ç»źč®ˇć¨ˇĺĽŹă€‚
     */
    this.standardStatisticModes = "";

    /**
     * @member {boolean} SuperMap.SummaryRegionJobParameter.prototype.weightedSummaryFields
     * @description ä»Ąćť?é‡Ťĺ­—ć®µç»źč®ˇă€‚
     */
    this.weightedSummaryFields = false;

    /**
     * @member {string} SuperMap.SummaryRegionJobParameter.prototype.weightedFields
     * @description ä»Ąćť?é‡Ťĺ­—ć®µç»źč®ˇçš„ĺ­—ć®µĺ?Ťç§°ă€‚
     */
    this.weightedFields = "";

    /**
     * @member {SuperMap.StatisticAnalystMode} SuperMap.SummaryRegionJobParameter.prototype.weightedStatisticModes
     * @description ä»Ąćť?é‡Ťĺ­—ć®µç»źč®ˇçš„ç»źč®ˇć¨ˇĺĽŹă€‚
     */
    this.weightedStatisticModes = "";

    /**
     * @member {number} SuperMap.SummaryRegionJobParameter.prototype.meshType
     * @description ç˝‘ć Ľéť˘ć±‡ć€»ç±»ĺž‹ă€‚
     */
    this.meshType = 0;

    /**
     * @member {number} SuperMap.SummaryRegionJobParameter.prototype.resolution
     * @description ç˝‘ć Ľĺ¤§ĺ°Źă€‚
     */
    this.resolution = 100;

    /**
     * @member {SuperMap.AnalystSizeUnit} SuperMap.SummaryRegionJobParameter.prototype.meshSizeUnit
     * @description ç˝‘ć Ľĺ¤§ĺ°ŹĺŤ•ä˝Ťă€‚
     */
    this.meshSizeUnit = _REST.AnalystSizeUnit.METER;

    /**
     * @member {SuperMap.SummaryType} SuperMap.SummaryRegionJobParameter.prototype.type
     * @description ć±‡ć€»ç±»ĺž‹ă€‚
     */
    this.type = _REST.SummaryType.SUMMARYMESH;

    /**
     * @member {SuperMap.OutputSetting} SuperMap.SummaryRegionJobParameter.prototype.output
     * @description čľ“ĺ‡şĺŹ‚ć•°č®ľç˝®ç±»
     */
    this.output = null;

    _Util.Util.extend(this, options);

    this.CLASS_NAME = "SuperMap.SummaryRegionJobParameter";
  }

  /**
   * @function SuperMap.SummaryRegionJobParameter.prototype.destroy
   * @description é‡Šć”ľčµ„ćş?ďĽŚĺ°†ĺĽ•ç”¨čµ„ćş?çš„ĺ±žć€§ç˝®ç©şă€‚
   */


  _createClass(SummaryRegionJobParameter, [{
    key: 'destroy',
    value: function destroy() {
      this.datasetName = null;
      this.sumShape = null;
      this.regionDataset = null;
      this.query = null;
      this.standardSummaryFields = null;
      this.standardFields = null;
      this.standardStatisticModes = null;
      this.weightedSummaryFields = null;
      this.weightedFields = null;
      this.weightedStatisticModes = null;
      this.meshType = null;
      this.resolution = null;
      this.meshSizeUnit = null;
      this.type = null;
      if (this.output instanceof _OutputSetting.OutputSetting) {
        this.output.destroy();
        this.output = null;
      }
    }

    /**
     * @function SuperMap.SummaryRegionJobParameter.toObject
     * @param {Object} summaryRegionJobParameter - çź˘é‡ŹčŁ?ĺ‰Şĺ?†ćž?ä»»ĺŠˇĺŹ‚ć•°ă€‚
     * @param {Object} tempObj - ç›®ć ‡ĺŻąč±ˇă€‚
     * @description ç”źć??ĺŚşĺźźć±‡ć€»ĺ?†ćž?ćśŤĺŠˇĺŻąč±ˇ
     */

  }], [{
    key: 'toObject',
    value: function toObject(summaryRegionJobParameter, tempObj) {
      for (var name in summaryRegionJobParameter) {
        if (name === "datasetName") {
          tempObj['input'] = tempObj['input'] || {};
          tempObj['input'][name] = summaryRegionJobParameter[name];
          continue;
        }
        if (name === "type") {
          tempObj['type'] = summaryRegionJobParameter[name];
          continue;
        }
        if (name === "type") {
          tempObj['type'] = summaryRegionJobParameter[name];
          continue;
        }
        if (name === "output") {
          tempObj['output'] = tempObj['output'] || {};
          tempObj['output'] = summaryRegionJobParameter[name];
          continue;
        }
        if (summaryRegionJobParameter.type === "SUMMARYREGION" || summaryRegionJobParameter.type === "SUMMARYMESH" && name !== "regionDataset") {
          tempObj['analyst'] = tempObj['analyst'] || {};
          if (name === 'query') {
            tempObj['analyst'][name] = summaryRegionJobParameter[name].toBBOX();
          } else {
            tempObj['analyst'][name] = summaryRegionJobParameter[name];
          }
        }
      }
    }
  }]);

  return SummaryRegionJobParameter;
}();

_SuperMap.SuperMap.SummaryRegionJobParameter = SummaryRegionJobParameter;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SummaryMeshJobParameter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperMap = __webpack_require__(0);

var _Util = __webpack_require__(1);

var _REST = __webpack_require__(2);

var _OutputSetting = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class SuperMap.SummaryMeshJobParameter
 * @category  iServer ProcessingService AggregatePoints
 * @classdesc ç‚ąč?šĺ??ĺ?†ćž?ä»»ĺŠˇĺŹ‚ć•°ç±»ă€‚
 * @param {Object} options - ĺŹ‚ć•°ă€‚<br>
 * @param {string} options.datasetName - ć•°ćŤ®é›†ĺ?Ťă€‚<br>
 * @param {(SuperMap.Bounds|L.Bounds|ol.extent)} options.query - ĺ?†ćž?čŚ?ĺ›´ă€‚<br>
 * @param {number} options.resolution - ĺ?†čľ¨çŽ‡ă€‚<br>
 * @param {SuperMap.StatisticAnalystMode} options.statisticModes - ĺ?†ćž?ć¨ˇĺĽŹă€‚<br>
 * @param {number} options.meshType - ĺ?†ćž?ç±»ĺž‹ă€‚<br>
 * @param {number} options.fields - ćť?é‡Ťç´˘ĺĽ•ă€‚<br>
 * @param {SuperMap.SummaryType} options.type - č?šĺ??ç±»ĺž‹ă€‚
 * @param {SuperMap.OutputSetting} options.output - čľ“ĺ‡şĺŹ‚ć•°č®ľç˝®ă€‚
 */
var SummaryMeshJobParameter = exports.SummaryMeshJobParameter = function () {
    function SummaryMeshJobParameter(options) {
        _classCallCheck(this, SummaryMeshJobParameter);

        if (!options) {
            return;
        }
        /**
         * @member {string} SuperMap.SummaryMeshJobParameter.prototype.datasetName
         * @description ć•°ćŤ®é›†ĺ?Ťă€‚
         */
        this.datasetName = "";

        /**
         * @member {string} SuperMap.SummaryMeshJobParameter.prototype.regionDataset
         * @description č?šĺ??éť˘ć•°ćŤ®é›†(č?šĺ??ç±»ĺž‹ä¸şĺ¤ščľąĺ˝˘č?šĺ??ć—¶ä˝żç”¨çš„ĺŹ‚ć•°)ă€‚
         */
        this.regionDataset = "";

        /**
         * @member {(SuperMap.Bounds|L.Bounds|ol.extent)} SuperMap.SummaryMeshJobParameter.prototype.query
         * @description ĺ?†ćž?čŚ?ĺ›´(č?šĺ??ç±»ĺž‹ä¸şç˝‘ć Ľéť˘č?šĺ??ć—¶ä˝żç”¨çš„ĺŹ‚ć•°)ă€‚
         */
        this.query = "";

        /**
         * @member {number} SuperMap.SummaryMeshJobParameter.prototype.resolution
         * @description ĺ?†čľ¨çŽ‡(č?šĺ??ç±»ĺž‹ä¸şç˝‘ć Ľéť˘č?šĺ??ć—¶ä˝żç”¨çš„ĺŹ‚ć•°)ă€‚
         */
        this.resolution = 100;

        /**
         * @member {number} SuperMap.SummaryMeshJobParameter.prototype.meshType
         * @description  ç˝‘ć Ľéť˘ç±»ĺž‹(č?šĺ??ç±»ĺž‹ä¸şç˝‘ć Ľéť˘č?šĺ??ć—¶ä˝żç”¨çš„ĺŹ‚ć•°)ďĽŚĺŹ–ĺ€ĽďĽš0ć?–1ă€‚
         */
        this.meshType = 0;

        /**
         * @member {SuperMap.StatisticAnalystMode} SuperMap.SummaryMeshJobParameter.prototype.statisticModes
         * @description ç»źč®ˇć¨ˇĺĽŹă€‚
         */
        this.statisticModes = _REST.StatisticAnalystMode.AVERAGE;

        /**
         * @member {number} SuperMap.SummaryMeshJobParameter.prototype.fields
         * @description ćť?é‡Ťĺ­—ć®µă€‚
         */
        this.fields = "";

        /**
         * @member {SuperMap.SummaryType} SuperMap.SummaryMeshJobParameter.prototype.type
         * @description č?šĺ??ç±»ĺž‹ă€‚
         */
        this.type = _REST.SummaryType.SUMMARYMESH;

        /**
         * @member {SuperMap.OutputSetting} SuperMap.SummaryMeshJobParameter.prototype.output
         * @description čľ“ĺ‡şĺŹ‚ć•°č®ľç˝®ç±»
         */
        this.output = null;

        _Util.Util.extend(this, options);

        this.CLASS_NAME = "SuperMap.SummaryMeshJobParameter";
    }

    /**
     * @function SuperMap.SummaryMeshJobParameter.destroy
     * @override
     */


    _createClass(SummaryMeshJobParameter, [{
        key: 'destroy',
        value: function destroy() {
            this.datasetName = null;
            this.query = null;
            this.resolution = null;
            this.statisticModes = null;
            this.meshType = null;
            this.fields = null;
            this.regionDataset = null;
            this.type = null;
            if (this.output instanceof _OutputSetting.OutputSetting) {
                this.output.destroy();
                this.output = null;
            }
        }

        /**
         * @function SuperMap.SummaryMeshJobParameter.toObject
         * @param {Object} summaryMeshJobParameter - ç‚ąč?šĺ??ĺ?†ćž?ä»»ĺŠˇĺŹ‚ć•°ă€‚
         * @param {Object} tempObj - ç›®ć ‡ĺŻąč±ˇă€‚
         * @description ç”źć??ç‚ąč?šĺ??ĺ?†ćž?ä»»ĺŠˇĺŻąč±ˇ
         */

    }], [{
        key: 'toObject',
        value: function toObject(summaryMeshJobParameter, tempObj) {
            for (var name in summaryMeshJobParameter) {
                if (name === "datasetName") {
                    tempObj['input'] = tempObj['input'] || {};
                    tempObj['input'][name] = summaryMeshJobParameter[name];
                    continue;
                }
                if (name === "type") {
                    tempObj['type'] = summaryMeshJobParameter[name];
                    continue;
                }
                if (name === "output") {
                    tempObj['output'] = tempObj['output'] || {};
                    tempObj['output'] = summaryMeshJobParameter[name];
                    continue;
                }
                if (summaryMeshJobParameter.type === 'SUMMARYMESH' && name !== 'regionDataset' || summaryMeshJobParameter.type === 'SUMMARYREGION' && !contains(['meshType', 'resolution', 'query'], name)) {
                    tempObj['analyst'] = tempObj['analyst'] || {};
                    if (name === 'query') {
                        tempObj['analyst'][name] = summaryMeshJobParameter[name].toBBOX();
                    } else {
                        tempObj['analyst'][name] = summaryMeshJobParameter[name];
                    }
                }
            }

            function contains(arr, obj) {
                var i = arr.length;
                while (i--) {
                    if (arr[i] === obj) {
                        return true;
                    }
                }
                return false;
            }
        }
    }]);

    return SummaryMeshJobParameter;
}();

_SuperMap.SuperMap.SummaryMeshJobParameter = SummaryMeshJobParameter;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SummaryAttributesJobsParameter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperMap = __webpack_require__(0);

var _Util = __webpack_require__(1);

var _OutputSetting = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class SuperMap.SummaryAttributesJobsParameter
 * @category  iServer ProcessingService SummaryAttributes
 * @classdesc ĺ±žć€§ć±‡ć€»ĺ?†ćž?ä»»ĺŠˇĺŹ‚ć•°ç±»
 * @param {Object} options - ĺŹ‚ć•°ă€‚<br>
 * @param {string} options.datasetName - ć•°ćŤ®é›†ĺ?Ťă€‚<br>
 * @param {string} options.groupField - ĺ?†ç»„ĺ­—ć®µă€‚<br>
 * @param {string} options.attributeField - ĺ±žć€§ĺ­—ć®µă€‚<br>
 * @param {string} options.statisticModes - ç»źč®ˇć¨ˇĺĽŹă€‚<br>
 * @param {SuperMap.OutputSetting} options.output -čľ“ĺ‡şĺŹ‚ć•°č®ľç˝®ă€‚<br>
 */
var SummaryAttributesJobsParameter = exports.SummaryAttributesJobsParameter = function () {
    function SummaryAttributesJobsParameter(options) {
        _classCallCheck(this, SummaryAttributesJobsParameter);

        if (!options) {
            return;
        }
        /**
         * @member {string} SuperMap.SummaryAttributesJobsParameter.prototype.datasetName
         * @description ć±‡ć€»ć•°ćŤ®é›†ĺ?Ťç§°
         */
        this.datasetName = "";
        /**
         * @member {string} SuperMap.SummaryAttributesJobsParameter.prototype.groupField
         * @description ĺ?†ç»„ĺ­—ć®µ
         */
        this.groupField = "";
        /**
         * @member {string} SuperMap.SummaryAttributesJobsParameter.prototype.attributeField
         * @description ĺ±žć€§ĺ­—ć®µ
         */
        this.attributeField = "";
        /**
         * @member {string} SuperMap.SummaryAttributesJobsParameter.prototype.statisticModes
         * @description ĺ±žć€§ć±‡ć€»ç»źč®ˇć¨ˇĺĽŹ
         */
        this.statisticModes = "";
        /**
         * @member {SuperMap.OutputSetting} SuperMap.SummaryAttributesJobsParameter.prototype.output
         * @description čľ“ĺ‡şĺŹ‚ć•°č®ľç˝®ç±»
         */
        this.output = null;

        _Util.Util.extend(this, options);
        this.CLASS_NAME = "SuperMap.SummaryAttributesJobsParameter";
    }

    /**
     * @function SuperMap.SummaryAttributesJobsParameter.destroy
     * @override
     */


    _createClass(SummaryAttributesJobsParameter, [{
        key: 'destroy',
        value: function destroy() {
            this.datasetName = null;
            this.groupField = null;
            this.attributeField = null;
            this.statisticModes = null;
            if (this.output instanceof _OutputSetting.OutputSetting) {
                this.output.destroy();
                this.output = null;
            }
        }

        /**
         * @function SuperMap.SummaryAttributesJobsParameter.toObject
         * @param {Object} SummaryAttributesJobsParameter - ĺ±žć€§ć±‡ć€»ä»»ĺŠˇĺŹ‚ć•°
         * @param {Object} tempObj - ç›®ć ‡ĺŻąč±ˇ
         * @description ç”źć??ĺ±žć€§ć±‡ć€»ĺ?†ćž?ä»»ĺŠˇĺŻąč±ˇ
         */

    }], [{
        key: 'toObject',
        value: function toObject(SummaryAttributesJobsParameter, tempObj) {
            for (var name in SummaryAttributesJobsParameter) {
                if (name === "datasetName") {
                    tempObj['input'] = tempObj['input'] || {};
                    tempObj['input'][name] = SummaryAttributesJobsParameter[name];
                    continue;
                }
                if (name === "output") {
                    tempObj['output'] = tempObj['output'] || {};
                    tempObj['output'] = SummaryAttributesJobsParameter[name];
                    continue;
                }
                tempObj['analyst'] = tempObj['analyst'] || {};
                tempObj['analyst'][name] = SummaryAttributesJobsParameter[name];
            }
        }
    }]);

    return SummaryAttributesJobsParameter;
}();

_SuperMap.SuperMap.SummaryAttributesJobsParameter = SummaryAttributesJobsParameter;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SingleObjectQueryJobsParameter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperMap = __webpack_require__(0);

var _Util = __webpack_require__(1);

var _REST = __webpack_require__(2);

var _OutputSetting = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class SuperMap.SingleObjectQueryJobsParameter
 * @category  iServer ProcessingService Query
 * @classdesc ĺŤ•ĺŻąč±ˇç©şé—´ćźĄčŻ˘ĺ?†ćž?ä»»ĺŠˇĺŹ‚ć•°ç±»
 * @param {Object} options - ĺŹ‚ć•°ă€‚<br>
 * @param {string} options.datasetName - ć•°ćŤ®é›†ĺ?Ťă€‚<br>
 * @param {string} options.datasetQuery - ćźĄčŻ˘ĺŻąč±ˇć‰€ĺś¨çš„ć•°ćŤ®é›†ĺ?Ťç§°ă€‚<br>
 * @param {SuperMap.SpatialQueryMode} options.mode - ç©şé—´ćźĄčŻ˘ć¨ˇĺĽŹă€‚<br>
 * @param {SuperMap.OutputSetting} options.output - čľ“ĺ‡şĺŹ‚ć•°č®ľç˝®ă€‚<br>
 */
var SingleObjectQueryJobsParameter = exports.SingleObjectQueryJobsParameter = function () {
    function SingleObjectQueryJobsParameter(options) {
        _classCallCheck(this, SingleObjectQueryJobsParameter);

        if (!options) {
            return;
        }
        /**
         * @member {string} SuperMap.SingleObjectQueryJobsParameter.prototype.datasetName
         * @description ć•°ćŤ®é›†ĺ?Ťă€‚
         */
        this.datasetName = "";

        /**
         * @member {string} SuperMap.SingleObjectQueryJobsParameter.prototype.datasetQuery
         * @description ćźĄčŻ˘ĺŻąč±ˇć‰€ĺś¨çš„ć•°ćŤ®é›†ĺ?Ťç§°ă€‚
         */
        this.datasetQuery = "";

        /**
         * @member {string} SuperMap.SingleObjectQueryJobsParameter.prototype.geometryQuery
         * @description ćźĄčŻ˘ĺŻąč±ˇć‰€ĺś¨çš„ĺ‡ ä˝•ĺŻąč±ˇă€‚
         */
        this.geometryQuery = "";

        /**
         * @member {SuperMap.SpatialQueryMode} SuperMap.SingleObjectQueryJobsParameter.prototype.mode
         * @description ç©şé—´ćźĄčŻ˘ć¨ˇĺĽŹ ă€‚
         */
        this.mode = _REST.SpatialQueryMode.CONTAIN;

        /**
         * @member {SuperMap.OutputSetting} SuperMap.SingleObjectQueryJobsParameter.prototype.output
         * @description čľ“ĺ‡şĺŹ‚ć•°č®ľç˝®ç±»
         */
        this.output = null;

        _Util.Util.extend(this, options);

        this.CLASS_NAME = "SuperMap.SingleObjectQueryJobsParameter";
    }

    /**
     * @function SuperMap.SingleObjectQueryJobsParameter.prototype.destroy
     * @description é‡Šć”ľčµ„ćş?ďĽŚĺ°†ĺĽ•ç”¨čµ„ćş?çš„ĺ±žć€§ç˝®ç©şă€‚
     */


    _createClass(SingleObjectQueryJobsParameter, [{
        key: 'destroy',
        value: function destroy() {
            this.datasetName = null;
            this.datasetQuery = null;
            this.geometryQuery = null;
            this.mode = null;
            if (this.output instanceof _OutputSetting.OutputSetting) {
                this.output.destroy();
                this.output = null;
            }
        }

        /**
         * @function SuperMap.SingleObjectQueryJobsParameter.toObject
         * @param {Object} singleObjectQueryJobsParameter - ĺŤ•ĺŻąč±ˇç©şé—´ćźĄčŻ˘ĺ?†ćž?ä»»ĺŠˇĺŹ‚ć•°
         * @param {Object} tempObj - ç›®ć ‡ĺŻąč±ˇ
         * @description ç”źć??ĺŤ•ĺŻąč±ˇç©şé—´ćźĄčŻ˘ĺ?†ćž?ä»»ĺŠˇĺŻąč±ˇ
         */

    }], [{
        key: 'toObject',
        value: function toObject(singleObjectQueryJobsParameter, tempObj) {
            for (var name in singleObjectQueryJobsParameter) {
                if (name === "datasetName") {
                    tempObj['input'] = tempObj['input'] || {};
                    tempObj['input'][name] = singleObjectQueryJobsParameter[name];
                    continue;
                }
                if (name === "output") {
                    tempObj['output'] = tempObj['output'] || {};
                    tempObj['output'] = singleObjectQueryJobsParameter[name];
                    continue;
                }
                tempObj['analyst'] = tempObj['analyst'] || {};
                tempObj['analyst'][name] = singleObjectQueryJobsParameter[name];
            }
        }
    }]);

    return SingleObjectQueryJobsParameter;
}();

_SuperMap.SuperMap.SingleObjectQueryJobsParameter = SingleObjectQueryJobsParameter;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KernelDensityJobParameter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperMap = __webpack_require__(0);

var _Util = __webpack_require__(1);

var _REST = __webpack_require__(2);

var _OutputSetting = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class SuperMap.KernelDensityJobParameter
 * @category iServer ProcessingService DensityAnalyst
 * @classdesc ĺŻ†ĺş¦ĺ?†ćž?ä»»ĺŠˇĺŹ‚ć•°ç±»ă€‚
 * @param {Object} options - ĺŹ‚ć•°ă€‚<br>
 * @param {string} options.datasetName - ć•°ćŤ®é›†ĺ?Ťă€‚<br>
 * @param {(SuperMap.Bounds|L.Bounds|ol.extent)} options.query - ĺ?†ćž?čŚ?ĺ›´ă€‚<br>
 * @param {number} options.resolution - ĺ?†čľ¨çŽ‡ă€‚<br>
 * @param {number} options.method - ĺ?†ćž?ć–ąćł•ă€‚<br>
 * @param {number} options.meshType - ĺ?†ćž?ç±»ĺž‹ă€‚<br>
 * @param {string} options.fields - ćť?é‡Ťç´˘ĺĽ•ă€‚<br>
 * @param {number} options.radius - ĺ?†ćž?çš„ĺ˝±ĺ“ŤĺŤŠĺľ„ă€‚
 * @param {SuperMap.OutputSetting} options.output - čľ“ĺ‡şĺŹ‚ć•°č®ľç˝®  <br>
 */
var KernelDensityJobParameter = exports.KernelDensityJobParameter = function () {
  function KernelDensityJobParameter(options) {
    _classCallCheck(this, KernelDensityJobParameter);

    if (!options) {
      return;
    }
    /**
     * @member {string} SuperMap.KernelDensityJobParameter.prototype.datasetName
     * @description ć•°ćŤ®é›†ĺ?Ťă€‚
     */
    this.datasetName = "";

    /**
     * @member {SuperMap.Bounds|L.Bounds|ol.extent} SuperMap.KernelDensityJobParameter.prototype.query
     * @description ĺ?†ćž?čŚ?ĺ›´ă€‚<br>
     */
    this.query = "";

    /**
     * @member {number} SuperMap.KernelDensityJobParameter.prototype.resolution
     * @description ç˝‘ć Ľĺ¤§ĺ°Źă€‚
     */
    this.resolution = 80;

    /**
     * @member {number} SuperMap.KernelDensityJobParameter.prototype.method
     * @description ĺ?†ćž?ć–ąćł•ă€‚
     */
    this.method = 0;

    /**
     * @member {number} SuperMap.KernelDensityJobParameter.prototype.meshType
     * @description ĺ?†ćž?ç±»ĺž‹ă€‚
     */
    this.meshType = 0;

    /**
     * @member {string} SuperMap.KernelDensityJobParameter.prototype.fields
     * @description ćť?é‡Ťç´˘ĺĽ•ă€‚
     */
    this.fields = "";

    /**
     * @member {number} SuperMap.KernelDensityJobParameter.prototype.radius
     * @description ĺ?†ćž?çš„ĺ˝±ĺ“ŤĺŤŠĺľ„ă€‚
     */
    this.radius = 300;

    /**
     * @member {SuperMap.AnalystSizeUnit} SuperMap.KernelDensityJobParameter.prototype.meshSizeUnit
     * @description ç˝‘ć Ľĺ¤§ĺ°ŹĺŤ•ä˝Ťă€‚
     */
    this.meshSizeUnit = _REST.AnalystSizeUnit.METER;

    /**
     * @member {SuperMap.AnalystSizeUnit} SuperMap.KernelDensityJobParameter.prototype.radiusUnit
     * @description ć?śç´˘ĺŤŠĺľ„ĺŤ•ä˝Ťă€‚
     */
    this.radiusUnit = _REST.AnalystSizeUnit.METER;

    /**
     * @member {SuperMap.AnalystAreaUnit} SuperMap.KernelDensityJobParameter.prototype.areaUnit
     * @description éť˘ç§ŻĺŤ•ä˝Ťă€‚
     */
    this.areaUnit = _REST.AnalystAreaUnit.SQUAREMILE;

    /**
     * @member {SuperMap.OutputSetting} SuperMap.KernelDensityJobParameter.prototype.output
     * @description čľ“ĺ‡şĺŹ‚ć•°č®ľç˝®ç±»
     */
    this.output = null;

    _Util.Util.extend(this, options);

    this.CLASS_NAME = "SuperMap.KernelDensityJobParameter";
  }

  /**
   * @function SuperMap.KernelDensityJobParameter.prototype.destroy
   * @description é‡Šć”ľčµ„ćş?ďĽŚĺ°†ĺĽ•ç”¨čµ„ćş?çš„ĺ±žć€§ç˝®ç©şă€‚
   */


  _createClass(KernelDensityJobParameter, [{
    key: 'destroy',
    value: function destroy() {
      this.datasetName = null;
      this.query = null;
      this.resolution = null;
      this.method = null;
      this.radius = null;
      this.meshType = null;
      this.fields = null;
      this.meshSizeUnit = null;
      this.radiusUnit = null;
      this.areaUnit = null;
      if (this.output instanceof _OutputSetting.OutputSetting) {
        this.output.destroy();
        this.output = null;
      }
    }

    /**
     * @function SuperMap.KernelDensityJobParameter.toObject
     * @param {SuperMap.KernelDensityJobParameter} kernelDensityJobParameter - ĺŻ†ĺş¦ĺ?†ćž?ä»»ĺŠˇĺŹ‚ć•°ç±»ă€‚
     * @param {SuperMap.KernelDensityJobParameter} tempObj - ĺŻ†ĺş¦ĺ?†ćž?ä»»ĺŠˇĺŹ‚ć•°ĺŻąč±ˇă€‚
     * @description ĺ°†ĺŻ†ĺş¦ĺ?†ćž?ä»»ĺŠˇĺŹ‚ć•°ĺŻąč±ˇč˝¬ćŤ˘ä¸şJSONĺŻąč±ˇă€‚
     * @returns JSONĺŻąč±ˇă€‚
     */

  }], [{
    key: 'toObject',
    value: function toObject(kernelDensityJobParameter, tempObj) {
      for (var name in kernelDensityJobParameter) {
        if (name === "datasetName") {
          tempObj['input'] = tempObj['input'] || {};
          tempObj['input'][name] = kernelDensityJobParameter[name];
          continue;
        }
        if (name === "output") {
          tempObj['output'] = tempObj['output'] || {};
          tempObj['output'] = kernelDensityJobParameter[name];
          continue;
        }
        tempObj['analyst'] = tempObj['analyst'] || {};
        if (name === 'query') {
          tempObj['analyst'][name] = kernelDensityJobParameter[name].toBBOX();
        } else {
          tempObj['analyst'][name] = kernelDensityJobParameter[name];
        }
      }
    }
  }]);

  return KernelDensityJobParameter;
}();

_SuperMap.SuperMap.KernelDensityJobParameter = KernelDensityJobParameter;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Events = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperMap = __webpack_require__(0);

var _Pixel = __webpack_require__(54);

var _Event = __webpack_require__(53);

var _BaseTypes = __webpack_require__(9);

var _Util = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class SuperMap.Events
 * @classdesc äş‹ä»¶ç±»ă€‚
 * @param {Object} object - ĺ˝“ĺ‰Ťäş‹ä»¶ĺŻąč±ˇč˘«ć·»ĺŠ ĺ?°çš„JSĺŻąč±ˇă€‚
 * @param {HTMLElement} element - ĺ“Ťĺş”ćµŹč§?ĺ™¨äş‹ä»¶çš„domĺ…?ç´ ă€‚
 * @param {Array.<string>} eventTypes - č‡Şĺ®šäą‰ĺş”ç”¨äş‹ä»¶çš„ć•°ç»„ă€‚
 * @param {boolean} fallThrough - ć?Żĺ?¦ĺ…?č®¸äş‹ä»¶ĺ¤„ç?†äą‹ĺ?Žĺ?‘ä¸ŠäĽ é€’ďĽ?ĺ†’ćłˇďĽ‰ďĽŚä¸şfalseçš„ć—¶ĺ€™é?»ć­˘äş‹ä»¶ĺ†’ćłˇă€‚
 * @param {Object} options - äş‹ä»¶ĺŻąč±ˇé€‰éˇąă€‚
 */
var Events = exports.Events = function () {
    function Events(object, element, eventTypes, fallThrough, options) {
        _classCallCheck(this, Events);

        /**
         * @member {Array.<string>} SuperMap.Events.prototype.BROWSER_EVENTS
         * @description ć”ŻćŚ?çš„äş‹ä»¶ă€‚
         * @constant
         * @default [
         "mouseover", "mouseout","mousedown", "mouseup", "mousemove",
         "click", "dblclick", "rightclick", "dblrightclick","resize",
         "focus", "blur","touchstart", "touchmove", "touchend","keydown",
         "MSPointerDown", "MSPointerUp", "pointerdown", "pointerup",
         "MSGestureStart", "MSGestureChange", "MSGestureEnd","contextmenu"
         ]
         */
        this.BROWSER_EVENTS = ["mouseover", "mouseout", "mousedown", "mouseup", "mousemove", "click", "dblclick", "rightclick", "dblrightclick", "resize", "focus", "blur", "touchstart", "touchmove", "touchend", "keydown", "MSPointerDown", "MSPointerUp", "pointerdown", "pointerup", "MSGestureStart", "MSGestureChange", "MSGestureEnd", "contextmenu"];

        /**
         * @member {Object} SuperMap.Events.prototype.listeners
         * @description Hashtable of Array(function): events listener functions
         */
        this.listeners = {};

        /**
         * @member {Object} SuperMap.Events.prototype.object
         * @description  ĺŹ‘ĺ¸?ĺş”ç”¨ç¨‹ĺşŹäş‹ä»¶çš„ĺŻąč±ˇă€‚
         */
        this.object = object;

        /**
         * @member {HTMLElement} SuperMap.Events.prototype.element
         * @description ćŽĄĺŹ—ćµŹč§?ĺ™¨äş‹ä»¶çš„DOMčŠ‚ç‚ąă€‚
         */
        this.element = null;

        /**
         * @member {Array.<string>} SuperMap.Events.prototype.eventTypes
         * @description ć”ŻćŚ?çš„äş‹ä»¶ç±»ĺž‹ĺ?—čˇ¨ă€‚
         */
        this.eventTypes = [];

        /**
         * @member {function} SuperMap.Events.prototype.eventHandler
         * @description ç»‘ĺ®šĺś¨ĺ…?ç´ ä¸Šçš„äş‹ä»¶ĺ¤„ç?†ĺ™¨ĺŻąč±ˇă€‚
         */
        this.eventHandler = null;

        /**
         * @member {boolean} SuperMap.Events.prototype.fallThrough
         * @description ć?Żĺ?¦ĺ…?č®¸äş‹ä»¶ĺ¤„ç?†äą‹ĺ?Žĺ?‘ä¸ŠäĽ é€’ďĽ?ĺ†’ćłˇďĽ‰ďĽŚä¸şfalseçš„ć—¶ĺ€™é?»ć­˘äş‹ä»¶ĺ†’ćłˇă€‚
         */
        this.fallThrough = fallThrough;

        /**
         * @member {boolean} SuperMap.Events.prototype.includeXY
         * @description ĺ?¤ć–­ć?Żĺ?¦č®©xyĺ±žć€§č‡ŞĺŠ¨ĺ?›ĺ»şĺ?°ćµŹč§?ĺ™¨ä¸Šçš„éĽ ć ‡äş‹ä»¶ďĽŚä¸€č?¬č®ľç˝®ä¸şfalseďĽŚĺ¦‚ćžśč®ľç˝®ä¸ştrueďĽŚéĽ ć ‡äş‹ä»¶ĺ°†äĽšĺś¨äş‹ä»¶äĽ é€’čż‡ç¨‹ä¸­č‡ŞĺŠ¨äş§ç”źxyĺ±žć€§ă€‚
         *              ĺŹŻć ąćŤ®äş‹ä»¶ĺŻąč±ˇçš„'evt.object'ĺ±žć€§ĺś¨ç›¸ĺ…łçš„äş‹ä»¶ĺŹĄćź„ä¸Šč°?ç”¨getMousePositionĺ‡˝ć•°ă€‚čż™ä¸Şé€‰éˇąäą ć?Żé»?č®¤ä¸şfalseçš„ĺŽźĺ› ĺś¨äşŽďĽŚĺ˝“ĺ?›ĺ»şä¸€ä¸Ş
         *              äş‹ä»¶ĺŻąč±ˇďĽŚĺ…¶ä¸»č¦?ç›®çš„ć?Żç®ˇç?†ă€‚ĺś¨ä¸€ä¸Şdivçš„ç›¸ĺŻąĺ®šä˝Ťçš„éĽ ć ‡äş‹ä»¶,ĺ°†ĺ…¶č®ľä¸ştrueäąźć?Żćś‰ć„Źäą‰çš„ă€‚čż™ä¸Şé€‰éˇąäąźĺŹŻä»Ąç”¨ćťĄćŽ§ĺ?¶ć?Żĺ?¦ćŠµć¶?çĽ“ĺ­?ă€‚ĺ¦‚ćžś
         *              č®ľä¸şfalseä¸ŤćŠµć¶?ďĽŚĺ¦‚ćžśč®ľä¸ştrueďĽŚç”¨this.clearMouseCache() ć¸…é™¤çĽ“ĺ­?ĺ?Źç§»ďĽ?čľąç•Śĺ…?ç´ ĺ?Źç§»ďĽŚĺ…?ç´ ĺś¨éˇµéť˘çš„ä˝Ťç˝®ĺ?Źç§»ďĽ‰ă€‚
         * @example
         *  function named(evt) {
         *        this.xy = this.object.events.getMousePosition(evt);
         *  }
         */
        this.includeXY = false;

        /**
         * @member {Object} SuperMap.Events.prototype.extensions
         * @description äş‹ä»¶ć‰©ĺ±•ă€‚Keysä»Łčˇ¨äş‹ä»¶ç±»ĺž‹ďĽŚvaluesä»Łčˇ¨äş‹ä»¶ĺŻąč±ˇă€‚
         * @example
         * ä»Ąć‰©ĺ±•"foostart" ĺ’Ś "fooend" äş‹ä»¶ä¸şäľ‹ă€‚ĺ±•ç¤şć›żćŤ˘cssĺ±žć€§ä¸şfooçš„ĺ…?ç´ çš„clickäş‹ä»¶ă€‚
         *
         *   SuperMap.Events.foostart = SuperMap.Class({
        *       initialize: function(target) {
        *           this.target = target;
        *           this.target.register("click", this, this.doStuff, {extension: true});
        *           // only required if extension provides more than one event type
        *           this.target.extensions["foostart"] = true;
        *           this.target.extensions["fooend"] = true;
        *       },
        *       destroy: function() {
        *           var target = this.target;
        *           target.unregister("click", this, this.doStuff);
        *           delete this.target;
        *           // only required if extension provides more than one event type
        *           delete target.extensions["foostart"];
        *           delete target.extensions["fooend"];
        *       },
        *       doStuff: function(evt) {
        *           var propagate = true;
        *           if (SuperMap.Event.element(evt).className === "foo") {
        *               propagate = false;
        *               var target = this.target;
        *               target.triggerEvent("foostart");
        *               window.setTimeout(function() {
        *                   target.triggerEvent("fooend");
        *               }, 1000);
        *           }
        *           return propagate;
        *       }
        *   });
         *   // only required if extension provides more than one event type
         *   SuperMap.Events.fooend = SuperMap.Events.foostart;
         */
        this.extensions = {};

        /**
         * @member {Object} SuperMap.Events.prototype.extensionCount
         */
        this.extensionCount = {};
        /**
         * @member {Object} SuperMap.Events.prototype.clearMouseListener
         */
        this.clearMouseListener = null;

        _Util.Util.extend(this, options);

        if (eventTypes != null) {
            for (var i = 0, len = eventTypes.length; i < len; i++) {
                this.addEventType(eventTypes[i]);
            }
        }

        if (element != null) {
            this.attachToElement(element);
        }

        this.CLASS_NAME = "SuperMap.Events";
    }

    /**
     * @function SuperMap.Events.prototype.destroy
     * @description ç§»é™¤ĺ˝“ĺ‰Ťč¦?ç´ elementä¸Šçš„ć‰€ćś‰äş‹ä»¶ç›‘ĺ?¬ĺ’Śĺ¤„ç?†ă€‚
     */


    _createClass(Events, [{
        key: 'destroy',
        value: function destroy() {
            for (var e in this.extensions) {
                if (typeof this.extensions[e] !== "boolean") {
                    this.extensions[e].destroy();
                }
            }
            this.extensions = null;
            if (this.element) {
                _Event.Event.stopObservingElement(this.element);
                if (this.element.hasScrollEvent) {
                    _Event.Event.stopObserving(window, "scroll", this.clearMouseListener);
                }
            }
            this.element = null;

            this.listeners = null;
            this.object = null;
            this.eventTypes = null;
            this.fallThrough = null;
            this.eventHandler = null;
        }

        /**
         * @function SuperMap.Events.prototype.addEventType
         * @description ĺś¨ć­¤äş‹ä»¶ĺŻąč±ˇä¸­ć·»ĺŠ ć–°çš„äş‹ä»¶ç±»ĺž‹ďĽŚĺ¦‚ćžśčż™ä¸Şäş‹ä»¶ç±»ĺž‹ĺ·˛ç»Źć·»ĺŠ čż‡äş†ďĽŚĺ?™ä¸Ťĺ?šä»»ä˝•äş‹ć?…ă€‚
         * @param {string} eventName - äş‹ä»¶ĺ?Ťă€‚
         */

    }, {
        key: 'addEventType',
        value: function addEventType(eventName) {
            if (!this.listeners[eventName]) {
                this.eventTypes.push(eventName);
                this.listeners[eventName] = [];
            }
        }

        /**
         * @function SuperMap.Events.prototype.attachToElement
         * @description ç»™domĺ…?ç´ ç»‘ĺ®šćµŹč§?ĺ™¨äş‹ä»¶ă€‚
         * @param {HTMLDOMElement} element - ç»‘ĺ®šćµŹč§?ĺ™¨äş‹ä»¶çš„domĺ…?ç´ ă€‚
         */

    }, {
        key: 'attachToElement',
        value: function attachToElement(element) {
            if (this.element) {
                _Event.Event.stopObservingElement(this.element);
            } else {
                // keep a bound copy of handleBrowserEvent() so that we can
                // pass the same function to both Event.observe() and .stopObserving()
                this.eventHandler = _BaseTypes.FunctionExt.bindAsEventListener(this.handleBrowserEvent, this);

                // to be used with observe and stopObserving
                this.clearMouseListener = _BaseTypes.FunctionExt.bind(this.clearMouseCache, this);
            }
            this.element = element;
            for (var i = 0, len = this.BROWSER_EVENTS.length; i < len; i++) {
                var eventType = this.BROWSER_EVENTS[i];

                // every browser event has a corresponding application event
                // (whether it's listened for or not).
                this.addEventType(eventType);

                // use Prototype to register the event cross-browser
                _Event.Event.observe(element, eventType, this.eventHandler);
            }
            // disable dragstart in IE so that mousedown/move/up works normally
            _Event.Event.observe(element, "dragstart", _Event.Event.stop);
        }

        /**
         * @function SuperMap.Events.prototype.on
         * @description ĺś¨ä¸€ä¸Şç›¸ĺ?Śçš„čŚ?ĺ›´ĺ†…ćł¨ĺ†Śç›‘ĺ?¬ĺ™¨çš„ć–ąćł•ďĽŚć­¤ć–ąćł•č°?ç”¨registerĺ‡˝ć•°ă€‚
         * @example
         * // ćł¨ĺ†Śä¸€ä¸Ş"loadstart"ç›‘ĺ?¬äş‹ä»¶
         * events.on({"loadstart": loadStartListener});
         *
         * // ĺ?Ść ·ćł¨ĺ†Śä¸€ä¸Ş"loadstart"ç›‘ĺ?¬äş‹ä»¶
         * events.register("loadstart", undefined, loadStartListener);
         *
         * // ĺ?Ść—¶ä¸şĺŻąč±ˇćł¨ĺ†Śĺ¤šä¸Şç›‘ĺ?¬äş‹ä»¶
         * events.on({
         *     "loadstart": loadStartListener,
         *     "loadend": loadEndListener,
         *     scope: object
         * });
         *
         * // ĺ?Ść—¶ä¸şĺŻąč±ˇćł¨ĺ†Śĺ¤šä¸Şç›‘ĺ?¬äş‹ä»¶ďĽŚĺ¤šć¬ˇč°?ç”¨registerć–ąćł•
         * events.register("loadstart", object, loadStartListener);
         * events.register("loadend", object, loadEndListener);
         *
         *
         * @param {Object} object - ć·»ĺŠ ç›‘ĺ?¬çš„ĺŻąč±ˇă€‚
         */

    }, {
        key: 'on',
        value: function on(object) {
            for (var type in object) {
                if (type !== "scope" && object.hasOwnProperty(type)) {
                    this.register(type, object.scope, object[type]);
                }
            }
        }

        /**
         * @function SuperMap.Events.prototype.register
         * @description ĺś¨äş‹ä»¶ĺŻąč±ˇä¸Šćł¨ĺ†Śä¸€ä¸Şäş‹ä»¶ă€‚ĺ˝“äş‹ä»¶č˘«č§¦ĺŹ‘ć—¶ďĽŚ'func'ĺ‡˝ć•°č˘«č°?ç”¨ďĽŚĺ?‡č®ľć?‘ä»¬č§¦ĺŹ‘ä¸€ä¸Şäş‹ä»¶ďĽŚ
         *              ćŚ‡ĺ®šSuperMap.Boundsä˝śä¸şâ€?objâ€™,ĺ˝“äş‹ä»¶č˘«č§¦ĺŹ‘ć—¶ďĽŚĺ›žč°?ĺ‡˝ć•°çš„ä¸Šä¸‹ć–‡ä˝śä¸şBoundsĺŻąč±ˇă€‚
         * @param {string} type - äş‹ä»¶ćł¨ĺ†Śč€…çš„ĺ?Ťĺ­—ă€‚
         * @param {Object} obj - ĺŻąč±ˇç»‘ĺ®šçš„ĺ›žč°?ă€‚ĺ¦‚ćžść˛ˇćś‰ç‰ąĺ®šçš„ĺŻąč±ˇďĽŚĺ?™é»?č®¤ć?Żäş‹ä»¶çš„objectĺ±žć€§ă€‚
         * @param {function} func - ĺ›žč°?ĺ‡˝ć•°ďĽŚĺ¦‚ćžść˛ˇćś‰ç‰ąĺ®šçš„ĺ›žč°?ďĽŚĺ?™čż™ä¸Şĺ‡˝ć•°ä¸Ťĺ?šä»»ä˝•äş‹ć?…ă€‚
         * @param {(boolean|Object)} priority - ĺ˝“ä¸ştrueć—¶ĺ°†ć–°çš„ç›‘ĺ?¬ĺŠ ĺś¨äş‹ä»¶é?źĺ?—çš„ĺ‰Ťéť˘ă€‚
         */

    }, {
        key: 'register',
        value: function register(type, obj, func, priority) {
            if (type in Events && !this.extensions[type]) {
                this.extensions[type] = new Events[type](this);
            }
            if (func != null && _Util.Util.indexOf(this.eventTypes, type) !== -1) {

                if (obj == null) {
                    obj = this.object;
                }
                var listeners = this.listeners[type];
                if (!listeners) {
                    listeners = [];
                    this.listeners[type] = listeners;
                    this.extensionCount[type] = 0;
                }
                var listener = { obj: obj, func: func };
                if (priority) {
                    listeners.splice(this.extensionCount[type], 0, listener);
                    if ((typeof priority === 'undefined' ? 'undefined' : _typeof(priority)) === "object" && priority.extension) {
                        this.extensionCount[type]++;
                    }
                } else {
                    listeners.push(listener);
                }
            }
        }

        /**
         * @function SuperMap.Events.prototype.registerPriority
         * @description ç›¸ĺ?Śçš„ćł¨ĺ†Ść–ąćł•ďĽŚä˝†ć?Żĺś¨ĺ‰Ťéť˘ĺ˘žĺŠ ć–°çš„ç›‘ĺ?¬č€…äş‹ä»¶ćźĄčŻ˘č€Śä»Łć›żĺ?°ć–ąćł•çš„ç»“ćťźă€‚
         * @param {string} type - äş‹ä»¶ćł¨ĺ†Śč€…çš„ĺ?Ťĺ­—ă€‚
         * @param {Object} obj - ĺŻąč±ˇç»‘ĺ®šć–ąéť˘çš„ĺ›žč°?ă€‚ĺ¦‚ćžść˛ˇćś‰ç‰ąĺ®šçš„ĺŻąč±ˇďĽŚĺ?™é»?č®¤ć?Żäş‹ä»¶çš„objectĺ±žć€§ă€‚
         * @param {function} func - ĺ›žč°?ĺ‡˝ć•°ďĽŚĺ¦‚ćžść˛ˇćś‰ç‰ąĺ®šçš„ĺ›žč°?ďĽŚĺ?™čż™ä¸Şĺ‡˝ć•°ä¸Ťĺ?šä»»ä˝•äş‹ć?…ă€‚
         */

    }, {
        key: 'registerPriority',
        value: function registerPriority(type, obj, func) {
            this.register(type, obj, func, true);
        }

        /**
         * @function SuperMap.Events.prototype.un
         * @description ĺś¨ä¸€ä¸Şç›¸ĺ?Śçš„čŚ?ĺ›´ĺ†…ĺŹ–ć¶?ćł¨ĺ†Śç›‘ĺ?¬ĺ™¨çš„ć–ąćł•ďĽŚć­¤ć–ąćł•č°?ç”¨unregisterĺ‡˝ć•°ă€‚
         * @example
         * // ç§»é™¤"loadstart" äş‹ä»¶ç›‘ĺ?¬
         * events.un({"loadstart": loadStartListener});
         *
         * // ä˝żç”¨unregisterć–ąćł•ç§»é™¤"loadstart" äş‹ä»¶ç›‘ĺ?¬
         * events.unregister("loadstart", undefined, loadStartListener);
         *
         * // ĺŹ–ć¶?ĺŻąč±ˇĺ¤šä¸Şäş‹ä»¶ç›‘ĺ?¬
         * events.un({
         *     "loadstart": loadStartListener,
         *     "loadend": loadEndListener,
         *     scope: object
         * });
         *
         * // ĺŹ–ć¶?ĺŻąč±ˇĺ¤šä¸Şäş‹ä»¶ç›‘ĺ?¬ďĽŚĺ¤šć¬ˇč°?ç”¨unregisterć–ąćł•ă€‚
         * events.unregister("loadstart", object, loadStartListener);
         * events.unregister("loadend", object, loadEndListener);
         *
         * @param {Object} object - ç§»é™¤ç›‘ĺ?¬çš„ĺŻąč±ˇă€‚
         */

    }, {
        key: 'un',
        value: function un(object) {
            for (var type in object) {
                if (type !== "scope" && object.hasOwnProperty(type)) {
                    this.unregister(type, object.scope, object[type]);
                }
            }
        }

        /**
         * @function SuperMap.Events.prototype.unregister
         * @description ĺŹ–ć¶?ćł¨ĺ†Śă€‚
         * @param {string} type - äş‹ä»¶ç±»ĺž‹ă€‚
         * @param {Object} obj - é»?č®¤ä¸ş this.objectă€‚
         * @param {function} func - äş‹ä»¶ç›‘ĺ?¬ă€‚
         */

    }, {
        key: 'unregister',
        value: function unregister(type, obj, func) {
            if (obj == null) {
                obj = this.object;
            }
            var listeners = this.listeners[type];
            if (listeners != null) {
                for (var i = 0, len = listeners.length; i < len; i++) {
                    if (listeners[i].obj === obj && listeners[i].func === func) {
                        listeners.splice(i, 1);
                        break;
                    }
                }
            }
        }

        /**
         * @function SuperMap.Events.prototype.remove
         * @description ĺ? é™¤ćź?ä¸Şäş‹ä»¶ç±»ĺž‹çš„ć‰€ćś‰ç›‘ĺ?¬ďĽŚĺ¦‚ćžśčŻĄäş‹ä»¶ç±»ĺž‹ć˛ˇćś‰ćł¨ĺ†ŚďĽŚĺ?™ä¸Ťĺ?šä»»ä˝•ć“Ťä˝śă€‚
         * @param {string} type - äş‹ä»¶ç±»ĺž‹ă€‚
         */

    }, {
        key: 'remove',
        value: function remove(type) {
            if (this.listeners[type] != null) {
                this.listeners[type] = [];
            }
        }

        /**
         * @function SuperMap.Events.prototype.triggerEvent
         * @description č§¦ĺŹ‘ä¸€ä¸Şç‰ąĺ®šçš„ćł¨ĺ†Śäş‹ä»¶ă€‚
         * @param {string} type - č§¦ĺŹ‘äş‹ä»¶ç±»ĺž‹ă€‚
         * @param {Event} evt - äş‹ä»¶ĺŻąč±ˇă€‚
         * @returns {boolean} čż”ĺ›žç›‘ĺ?¬ĺŻąč±ˇďĽŚĺ¦‚ćžśčż”ĺ›žć?ŻfaleeďĽŚĺ?™ĺ?ść­˘ç›‘ĺ?¬ă€‚
         */

    }, {
        key: 'triggerEvent',
        value: function triggerEvent(type, evt) {
            var listeners = this.listeners[type];

            // fast path
            if (!listeners || listeners.length == 0) {
                return undefined;
            }

            // prep evt object with object & div references
            if (evt == null) {
                evt = {};
            }
            evt.object = this.object;
            evt.element = this.element;
            if (!evt.type) {
                evt.type = type;
            }

            // execute all callbacks registered for specified type
            // get a clone of the listeners array to
            // allow for splicing during callbacks
            listeners = listeners.slice();
            var continueChain;
            for (var i = 0, len = listeners.length; i < len; i++) {
                var callback = listeners[i];
                // bind the context to callback.obj
                continueChain = callback.func.apply(callback.obj, [evt]);

                if (continueChain != undefined && continueChain == false) {
                    // if callback returns false, execute no more callbacks.
                    break;
                }
            }
            // don't fall through to other DOM elements
            if (!this.fallThrough) {
                _Event.Event.stop(evt, true);
            }
            return continueChain;
        }

        /**
         * @function SuperMap.Events.prototype.handleBrowserEvent
         * @description ĺŻątriggerEventĺ‡˝ć•°çš„ĺŚ…čŁ…ďĽŚç»™äş‹ä»¶ĺŻąč±ˇč®ľç˝®äş†xyĺ±žć€§(ĺŤłĺ˝“ĺ‰ŤéĽ ć ‡ç‚ąçš„xyĺť?ć ‡)ă€‚
         * @param {Event} evt - äş‹ä»¶ĺŻąč±ˇă€‚
         */

    }, {
        key: 'handleBrowserEvent',
        value: function handleBrowserEvent(evt) {
            var type = evt.type,
                listeners = this.listeners[type];
            if (!listeners || listeners.length == 0) {
                // noone's listening, bail out
                return;
            }
            // add clientX & clientY to all events - corresponds to average x, y
            var touches = evt.touches;
            if (touches && touches[0]) {
                var x = 0;
                var y = 0;
                var num = touches.length;
                var touch;
                for (var i = 0; i < num; ++i) {
                    touch = touches[i];
                    x += touch.clientX;
                    y += touch.clientY;
                }
                evt.clientX = x / num;
                evt.clientY = y / num;
            }
            if (this.includeXY) {
                evt.xy = this.getMousePosition(evt);
            }
            this.triggerEvent(type, evt);
        }

        /**
         * @function SuperMap.Events.prototype.clearMouseCache
         * @description ć¸…é™¤éĽ ć ‡çĽ“ĺ­?ă€‚
         */

    }, {
        key: 'clearMouseCache',
        value: function clearMouseCache() {
            this.element.scrolls = null;
            this.element.lefttop = null;
            var body = document.body;
            if (body && !((body.scrollTop != 0 || body.scrollLeft != 0) && navigator.userAgent.match(/iPhone/i))) {
                this.element.offsets = null;
            }
        }

        /**
         * @function SuperMap.Events.prototype.getMousePosition
         * @param {Event} evt - äş‹ä»¶ĺŻąč±ˇă€‚
         * @returns {SuperMap.Pixel} ĺ˝“ĺ‰Ťçš„éĽ ć ‡çš„xyĺť?ć ‡ç‚ąă€‚
         */

    }, {
        key: 'getMousePosition',
        value: function getMousePosition(evt) {
            if (!this.includeXY) {
                this.clearMouseCache();
            } else if (!this.element.hasScrollEvent) {
                _Event.Event.observe(window, "scroll", this.clearMouseListener);
                this.element.hasScrollEvent = true;
            }

            if (!this.element.scrolls) {
                var viewportElement = _Util.Util.getViewportElement();
                this.element.scrolls = [viewportElement.scrollLeft, viewportElement.scrollTop];
            }

            if (!this.element.lefttop) {
                this.element.lefttop = [document.documentElement.clientLeft || 0, document.documentElement.clientTop || 0];
            }

            if (!this.element.offsets) {
                this.element.offsets = _Util.Util.pagePosition(this.element);
            }

            return new _Pixel.Pixel(evt.clientX + this.element.scrolls[0] - this.element.offsets[0] - this.element.lefttop[0], evt.clientY + this.element.scrolls[1] - this.element.offsets[1] - this.element.lefttop[1]);
        }
    }]);

    return Events;
}();

_SuperMap.SuperMap.Events = Events;
_SuperMap.SuperMap.Events.prototype.BROWSER_EVENTS = ["mouseover", "mouseout", "mousedown", "mouseup", "mousemove", "click", "dblclick", "rightclick", "dblrightclick", "resize", "focus", "blur", "touchstart", "touchmove", "touchend", "keydown", "MSPointerDown", "MSPointerUp", "pointerdown", "pointerup", "MSGestureStart", "MSGestureChange", "MSGestureEnd", "contextmenu"];

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SummaryAttributesJobsService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _SuperMap = __webpack_require__(0);

var _ProcessingServiceBase = __webpack_require__(4);

var _SummaryAttributesJobsParameter = __webpack_require__(18);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class SuperMap.SummaryAttributesJobsService
 * @category  iServer ProcessingService SummaryAttributes
 * @classdesc ĺ±žć€§ć±‡ć€»ĺ?†ćž?ćśŤĺŠˇç±»
 * @extends {SuperMap.ProcessingServiceBase}
 * @param {string} url - ć±‡ć€»ç»źč®ˇĺ?†ćž?ćśŤĺŠˇĺś°ĺť€ă€‚
 * @param {Object} options - ĺŹ‚ć•°ă€‚
 */
var SummaryAttributesJobsService = exports.SummaryAttributesJobsService = function (_ProcessingServiceBas) {
    _inherits(SummaryAttributesJobsService, _ProcessingServiceBas);

    function SummaryAttributesJobsService(url, options) {
        _classCallCheck(this, SummaryAttributesJobsService);

        var _this = _possibleConstructorReturn(this, (SummaryAttributesJobsService.__proto__ || Object.getPrototypeOf(SummaryAttributesJobsService)).call(this, url, options));

        _this.url += "/spatialanalyst/summaryattributes";
        _this.CLASS_NAME = "SuperMap.SummaryAttributesJobsService";
        return _this;
    }

    /**
     *@override
     */


    _createClass(SummaryAttributesJobsService, [{
        key: 'destroy',
        value: function destroy() {
            _get(SummaryAttributesJobsService.prototype.__proto__ || Object.getPrototypeOf(SummaryAttributesJobsService.prototype), 'destroy', this).call(this);
        }

        /**
         * @function SuperMap.SummaryAttributesJobsService.protitype.getSummaryAttributesJobs
         * @description čŽ·ĺŹ–ĺ±žć€§ć±‡ć€»ĺ?†ćž?ć‰€ćś‰ä»»ĺŠˇ
         */

    }, {
        key: 'getSummaryAttributesJobs',
        value: function getSummaryAttributesJobs() {
            _get(SummaryAttributesJobsService.prototype.__proto__ || Object.getPrototypeOf(SummaryAttributesJobsService.prototype), 'getJobs', this).call(this, this.url);
        }

        /**
         * @function SuperMap.SummaryAttributesJobsService.protitype.getSummaryAttributesJob
         * @description čŽ·ĺŹ–ćŚ‡ĺ®šidçš„ĺ±žć€§ć±‡ć€»ĺ?†ćž?ćśŤĺŠˇ
         * @param {string} id - ćŚ‡ĺ®šč¦?čŽ·ĺŹ–ć•°ćŤ®çš„id
         */

    }, {
        key: 'getSummaryAttributesJob',
        value: function getSummaryAttributesJob(id) {
            _get(SummaryAttributesJobsService.prototype.__proto__ || Object.getPrototypeOf(SummaryAttributesJobsService.prototype), 'getJobs', this).call(this, this.url + '/' + id);
        }

        /**
         * @function SuperMap.SummaryAttributesJobsService.protitype.addSummaryAttributesJob
         * @description ć–°ĺ»şĺ±žć€§ć±‡ć€»ĺ?†ćž?ćśŤĺŠˇ
         * @param {SuperMap.SummaryAttributesJobsParameter} params - ĺ?›ĺ»şä¸€ä¸Şç©şé—´ĺ?†ćž?çš„čŻ·ć±‚ĺŹ‚ć•°ă€‚
         * @param {number} seconds - ĺĽ€ĺ§‹ĺ?›ĺ»şĺ?ŽďĽŚčŽ·ĺŹ–ĺ?›ĺ»şć??ĺŠźç»“ćžśçš„ć—¶é—´é—´éš”ă€‚
         */

    }, {
        key: 'addSummaryAttributesJob',
        value: function addSummaryAttributesJob(params, seconds) {
            _get(SummaryAttributesJobsService.prototype.__proto__ || Object.getPrototypeOf(SummaryAttributesJobsService.prototype), 'addJob', this).call(this, this.url, params, _SummaryAttributesJobsParameter.SummaryAttributesJobsParameter, seconds);
        }
    }]);

    return SummaryAttributesJobsService;
}(_ProcessingServiceBase.ProcessingServiceBase);

_SuperMap.SuperMap.SummaryAttributesJobsService = SummaryAttributesJobsService;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TopologyValidatorJobsService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _SuperMap = __webpack_require__(0);

var _ProcessingServiceBase = __webpack_require__(4);

var _TopologyValidatorJobsParameter = __webpack_require__(13);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class SuperMap.TopologyValidatorJobsService
 * @category  iServer ProcessingService TopologyValidator
 * @classdesc ć‹“ć‰‘ćŁ€ćźĄĺ?†ćž?ćśŤĺŠˇç±»
 * @extends {SuperMap.ProcessingServiceBase}
 * @param {string} url - ć‹“ć‰‘ćŁ€ćźĄĺ?†ćž?ćśŤĺŠˇĺś°ĺť€ă€‚
 * @param {Object} options - ĺŹ‚ć•°ă€‚
 */
var TopologyValidatorJobsService = exports.TopologyValidatorJobsService = function (_ProcessingServiceBas) {
    _inherits(TopologyValidatorJobsService, _ProcessingServiceBas);

    function TopologyValidatorJobsService(url, options) {
        _classCallCheck(this, TopologyValidatorJobsService);

        var _this = _possibleConstructorReturn(this, (TopologyValidatorJobsService.__proto__ || Object.getPrototypeOf(TopologyValidatorJobsService)).call(this, url, options));

        _this.url += "/spatialanalyst/topologyvalidator";
        _this.CLASS_NAME = "SuperMap.TopologyValidatorJobsService";
        return _this;
    }

    /**
     *@override
     */


    _createClass(TopologyValidatorJobsService, [{
        key: 'destroy',
        value: function destroy() {
            _get(TopologyValidatorJobsService.prototype.__proto__ || Object.getPrototypeOf(TopologyValidatorJobsService.prototype), 'destroy', this).call(this);
        }

        /**
         * @function SuperMap.TopologyValidatorJobsService.protitype.getTopologyValidatorJobs
         * @description čŽ·ĺŹ–ć‹“ć‰‘ćŁ€ćźĄĺ?†ćž?ć‰€ćś‰ä»»ĺŠˇ
         */

    }, {
        key: 'getTopologyValidatorJobs',
        value: function getTopologyValidatorJobs() {
            _get(TopologyValidatorJobsService.prototype.__proto__ || Object.getPrototypeOf(TopologyValidatorJobsService.prototype), 'getJobs', this).call(this, this.url);
        }

        /**
         * @function SuperMap.TopologyValidatorJobsService.protitype.getTopologyValidatorJob
         * @description čŽ·ĺŹ–ćŚ‡ĺ®šidçš„ć‹“ć‰‘ćŁ€ćźĄĺ?†ćž?ćśŤĺŠˇ
         * @param {string} id - ćŚ‡ĺ®šč¦?čŽ·ĺŹ–ć•°ćŤ®çš„id
         */

    }, {
        key: 'getTopologyValidatorJob',
        value: function getTopologyValidatorJob(id) {
            _get(TopologyValidatorJobsService.prototype.__proto__ || Object.getPrototypeOf(TopologyValidatorJobsService.prototype), 'getJobs', this).call(this, this.url + '/' + id);
        }

        /**
         * @function SuperMap.TopologyValidatorJobsService.protitype.addTopologyValidatorJob
         * @description ć–°ĺ»şć‹“ć‰‘ćŁ€ćźĄĺ?†ćž?ćśŤĺŠˇ
         * @param {SuperMap.TopologyValidatorJobsParameter} params - ĺ?›ĺ»şä¸€ä¸Şç©şé—´ĺ?†ćž?çš„čŻ·ć±‚ĺŹ‚ć•°ă€‚
         * @param {number} seconds - ĺĽ€ĺ§‹ĺ?›ĺ»şĺ?ŽďĽŚčŽ·ĺŹ–ĺ?›ĺ»şć??ĺŠźç»“ćžśçš„ć—¶é—´é—´éš”ă€‚
         */

    }, {
        key: 'addTopologyValidatorJob',
        value: function addTopologyValidatorJob(params, seconds) {
            _get(TopologyValidatorJobsService.prototype.__proto__ || Object.getPrototypeOf(TopologyValidatorJobsService.prototype), 'addJob', this).call(this, this.url, params, _TopologyValidatorJobsParameter.TopologyValidatorJobsParameter, seconds);
        }
    }]);

    return TopologyValidatorJobsService;
}(_ProcessingServiceBase.ProcessingServiceBase);

_SuperMap.SuperMap.TopologyValidatorJobsService = TopologyValidatorJobsService;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BuffersAnalystJobsService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _SuperMap = __webpack_require__(0);

var _ProcessingServiceBase = __webpack_require__(4);

var _BuffersAnalystJobsParameter = __webpack_require__(14);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class SuperMap.BuffersAnalystJobsService
 * @category iServer ProcessingService BufferAnalyst
 * @classdesc çĽ“ĺ†˛ĺŚşĺ?†ćž?ćśŤĺŠˇç±»
 * @extends {SuperMap.ProcessingServiceBase}
 * @param {string} url - ćśŤĺŠˇĺś°ĺť€ă€‚
 * @param {Object} options - ĺŹ‚ć•°ă€‚
 */
var BuffersAnalystJobsService = exports.BuffersAnalystJobsService = function (_ProcessingServiceBas) {
    _inherits(BuffersAnalystJobsService, _ProcessingServiceBas);

    function BuffersAnalystJobsService(url, options) {
        _classCallCheck(this, BuffersAnalystJobsService);

        var _this = _possibleConstructorReturn(this, (BuffersAnalystJobsService.__proto__ || Object.getPrototypeOf(BuffersAnalystJobsService)).call(this, url, options));

        _this.url += "/spatialanalyst/buffers";
        _this.CLASS_NAME = "SuperMap.BuffersAnalystJobsService";
        return _this;
    }

    /**
     *@override
     */


    _createClass(BuffersAnalystJobsService, [{
        key: 'destroy',
        value: function destroy() {
            _get(BuffersAnalystJobsService.prototype.__proto__ || Object.getPrototypeOf(BuffersAnalystJobsService.prototype), 'destroy', this).call(this);
        }

        /**
         * @function SuperMap.BuffersAnalystJobsService.prototype.getBufferJobs
         * @description čŽ·ĺŹ–çĽ“ĺ†˛ĺŚşĺ?†ćž?ć‰€ćś‰ä»»ĺŠˇ
         */

    }, {
        key: 'getBuffersJobs',
        value: function getBuffersJobs() {
            _get(BuffersAnalystJobsService.prototype.__proto__ || Object.getPrototypeOf(BuffersAnalystJobsService.prototype), 'getJobs', this).call(this, this.url);
        }

        /**
         * @function SuperMap.BuffersAnalystJobsService.prototype.getBufferJob
         * @description čŽ·ĺŹ–ćŚ‡ĺ®šidçš„çĽ“ĺ†˛ĺŚşĺ?†ćž?ćśŤĺŠˇ
         * @param {string} id - ćŚ‡ĺ®šč¦?čŽ·ĺŹ–ć•°ćŤ®çš„idă€‚
         */

    }, {
        key: 'getBuffersJob',
        value: function getBuffersJob(id) {
            _get(BuffersAnalystJobsService.prototype.__proto__ || Object.getPrototypeOf(BuffersAnalystJobsService.prototype), 'getJobs', this).call(this, this.url + '/' + id);
        }

        /**
         * @function SuperMap.BuffersAnalystJobsService.prototype.addBufferJob
         * @description ć–°ĺ»şçĽ“ĺ†˛ĺŚşĺ?†ćž?ćśŤĺŠˇ
         * @param {SuperMap.BuffersAnalystJobsParameter} params - ĺ?›ĺ»şä¸€ä¸Şç©şé—´ĺ?†ćž?çš„čŻ·ć±‚ĺŹ‚ć•°ă€‚
         * @param {number} seconds - ĺĽ€ĺ§‹ĺ?›ĺ»şĺ?ŽďĽŚčŽ·ĺŹ–ĺ?›ĺ»şć??ĺŠźç»“ćžśçš„ć—¶é—´é—´éš”ă€‚
         */

    }, {
        key: 'addBuffersJob',
        value: function addBuffersJob(params, seconds) {
            _get(BuffersAnalystJobsService.prototype.__proto__ || Object.getPrototypeOf(BuffersAnalystJobsService.prototype), 'addJob', this).call(this, this.url, params, _BuffersAnalystJobsParameter.BuffersAnalystJobsParameter, seconds);
        }
    }]);

    return BuffersAnalystJobsService;
}(_ProcessingServiceBase.ProcessingServiceBase);

_SuperMap.SuperMap.BuffersAnalystJobsService = BuffersAnalystJobsService;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OverlayGeoJobsService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _SuperMap = __webpack_require__(0);

var _ProcessingServiceBase = __webpack_require__(4);

var _OverlayGeoJobParameter = __webpack_require__(15);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class SuperMap.OverlayGeoJobsService
 * @category iServer ProcessingService OverlayAnalyst
 * @classdesc ĺŹ ĺŠ ĺ?†ćž?ä»»ĺŠˇç±»ă€‚
 * @param {string} url - ĺŹ ĺŠ ĺ?†ćž?ä»»ĺŠˇĺś°ĺť€ă€‚
 * @param {Object} options - ĺŹ‚ć•°ă€‚<br>
 * @param {SuperMap.Events} options.events - ĺ¤„ç?†ć‰€ćś‰äş‹ä»¶çš„ĺŻąč±ˇă€‚<br>
 * @param {Object} options.eventListeners - ĺ?¬ĺ™¨ĺŻąč±ˇă€‚<br>
 * @param {SuperMap.ServerType} options.serverType - ćśŤĺŠˇĺ™¨ç±»ĺž‹ďĽŚiServer|iPortal|Onlineă€‚<br>
 * @param {number} options.index - ćśŤĺŠˇč®żé—®ĺś°ĺť€ĺś¨ć•°ç»„ä¸­çš„ä˝Ťç˝®ă€‚<br>
 * @param {number} options.length - ćśŤĺŠˇč®żé—®ĺś°ĺť€ć•°ç»„é•żĺş¦ă€‚
 */
var OverlayGeoJobsService = exports.OverlayGeoJobsService = function (_ProcessingServiceBas) {
    _inherits(OverlayGeoJobsService, _ProcessingServiceBas);

    function OverlayGeoJobsService(url, options) {
        _classCallCheck(this, OverlayGeoJobsService);

        var _this = _possibleConstructorReturn(this, (OverlayGeoJobsService.__proto__ || Object.getPrototypeOf(OverlayGeoJobsService)).call(this, url, options));

        _this.url += "/spatialanalyst/overlay";
        _this.CLASS_NAME = "SuperMap.OverlayGeoJobsService";
        return _this;
    }

    /**
     * @override
     */


    _createClass(OverlayGeoJobsService, [{
        key: 'destroy',
        value: function destroy() {
            _get(OverlayGeoJobsService.prototype.__proto__ || Object.getPrototypeOf(OverlayGeoJobsService.prototype), 'destroy', this).call(this);
        }

        /**
         * @function SuperMap.OverlayGeoJobsService.prototype.getOverlayGeoJobs
         * @description čŽ·ĺŹ–ĺŹ ĺŠ ĺ?†ćž?ä»»ĺŠˇ
         */

    }, {
        key: 'getOverlayGeoJobs',
        value: function getOverlayGeoJobs() {
            _get(OverlayGeoJobsService.prototype.__proto__ || Object.getPrototypeOf(OverlayGeoJobsService.prototype), 'getJobs', this).call(this, this.url);
        }

        /**
         * @function SuperMap.OverlayGeoJobsService.prototype.getOverlayGeoJob
         * @description čŽ·ĺŹ–ćŚ‡ĺ®šidçš„ĺŹ ĺŠ ĺ?†ćž?ä»»ĺŠˇ
         * @param {string} id - ćŚ‡ĺ®šč¦?čŽ·ĺŹ–ć•°ćŤ®çš„id
         */

    }, {
        key: 'getOverlayGeoJob',
        value: function getOverlayGeoJob(id) {
            _get(OverlayGeoJobsService.prototype.__proto__ || Object.getPrototypeOf(OverlayGeoJobsService.prototype), 'getJobs', this).call(this, this.url + '/' + id);
        }

        /**
         * @function SuperMap.OverlayGeoJobsService.prototype.addOverlayGeoJob
         * @description ć–°ĺ»şç‚ąĺŹ ĺŠ ćž?ćśŤĺŠˇ
         * @param {SuperMap.OverlayGeoJobParameter} params - ĺ?›ĺ»şä¸€ä¸ŞĺŹ ĺŠ ĺ?†ćž?çš„čŻ·ć±‚ĺŹ‚ć•°ă€‚
         * @param {number} seconds - ĺĽ€ĺ§‹ĺ?›ĺ»şĺ?ŽďĽŚčŽ·ĺŹ–ĺ?›ĺ»şć??ĺŠźç»“ćžśçš„ć—¶é—´é—´éš”ă€‚
         */

    }, {
        key: 'addOverlayGeoJob',
        value: function addOverlayGeoJob(params, seconds) {
            _get(OverlayGeoJobsService.prototype.__proto__ || Object.getPrototypeOf(OverlayGeoJobsService.prototype), 'addJob', this).call(this, this.url, params, _OverlayGeoJobParameter.OverlayGeoJobParameter, seconds);
        }
    }]);

    return OverlayGeoJobsService;
}(_ProcessingServiceBase.ProcessingServiceBase);

_SuperMap.SuperMap.OverlayGeoJobsService = OverlayGeoJobsService;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VectorClipJobsParameter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperMap = __webpack_require__(0);

var _Util = __webpack_require__(1);

var _REST = __webpack_require__(2);

var _OutputSetting = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class SuperMap.VectorClipJobsParameter
 * @category  iServer ProcessingService VectorClip
 * @classdesc çź˘é‡ŹčŁ?ĺ‰Şĺ?†ćž?ä»»ĺŠˇĺŹ‚ć•°ç±»
 * @param {Object} options - ĺŹ‚ć•°ă€‚<br>
 * @param {string} options.datasetName - ć•°ćŤ®é›†ĺ?Ťă€‚<br>
 * @param {string} options.datasetOverlay - čŁ?ĺ‰ŞĺŻąč±ˇć•°ćŤ®é›†ă€‚<br>
 * @param {SuperMap.ClipAnalystMode} options.mode - čŁ?ĺ‰Şĺ?†ćž?ć¨ˇĺĽŹă€‚<br>
 * @param {SuperMap.OutputSetting} options.output - čľ“ĺ‡şĺŹ‚ć•°č®ľç˝®ă€‚<br>
 */
var VectorClipJobsParameter = exports.VectorClipJobsParameter = function () {
    function VectorClipJobsParameter(options) {
        _classCallCheck(this, VectorClipJobsParameter);

        options = options || {};

        /**
         * @member {string} SuperMap.VectorClipJobsParameter.prototype.datasetName
         * @description ć•°ćŤ®é›†ĺ?Ťă€‚
         */
        this.datasetName = "";

        /**
         * @member {string} SuperMap.VectorClipJobsParameter.prototype.datasetOverlay
         * @description čŁ?ĺ‰ŞĺŻąč±ˇć•°ćŤ®é›†ă€‚
         */
        this.datasetVectorClip = "";

        /**
         * @member {string} SuperMap.VectorClipJobsParameter.prototype.geometryClip
         * @description čŁ?ĺ‰Şĺ‡ ä˝•ĺŻąč±ˇă€‚
         */
        this.geometryClip = "";

        /**
         * @member {SuperMap.ClipAnalystMode} SuperMap.VectorClipJobsParameter.prototype.mode
         * @description čŁ?ĺ‰Şĺ?†ćž?ć¨ˇĺĽŹ ă€‚
         */
        this.mode = _REST.ClipAnalystMode.CLIP;

        /**
         * @member {SuperMap.OutputSetting} SuperMap.VectorClipJobsParameter.prototype.output
         * @description čľ“ĺ‡şĺŹ‚ć•°č®ľç˝®ç±»
         */
        this.output = null;

        _Util.Util.extend(this, options);

        this.CLASS_NAME = "SuperMap.VectorClipJobsParameter";
    }

    /**
     * @function SuperMap.VectorClipJobsParameter.prototype.destroy
     * @description é‡Šć”ľčµ„ćş?ďĽŚĺ°†ĺĽ•ç”¨čµ„ćş?çš„ĺ±žć€§ç˝®ç©şă€‚
     */


    _createClass(VectorClipJobsParameter, [{
        key: 'destroy',
        value: function destroy() {
            this.datasetName = null;
            this.datasetVectorClip = null;
            this.geometryClip = null;
            this.mode = null;
            if (this.output instanceof _OutputSetting.OutputSetting) {
                this.output.destroy();
                this.output = null;
            }
        }

        /**
         * @function SuperMap.VectorClipJobsParameter.toObject
         * @param {Object} vectorClipJobsParameter - ĺŚşĺźźć±‡ć€»ĺ?†ćž?ćśŤĺŠˇĺŹ‚ć•°
         * @param {Object} tempObj - ç›®ć ‡ĺŻąč±ˇă€‚
         * @description çź˘é‡ŹčŁ?ĺ‰Şĺ?†ćž?ä»»ĺŠˇĺŻąč±ˇ
         */

    }], [{
        key: 'toObject',
        value: function toObject(vectorClipJobsParameter, tempObj) {
            for (var name in vectorClipJobsParameter) {
                if (name === "datasetName") {
                    tempObj['input'] = tempObj['input'] || {};
                    tempObj['input'][name] = vectorClipJobsParameter[name];
                    continue;
                }
                if (name === "output") {
                    tempObj['output'] = tempObj['output'] || {};
                    tempObj['output'] = vectorClipJobsParameter[name];
                    continue;
                }
                tempObj['analyst'] = tempObj['analyst'] || {};
                tempObj['analyst'][name] = vectorClipJobsParameter[name];
            }
        }
    }]);

    return VectorClipJobsParameter;
}();

_SuperMap.SuperMap.VectorClipJobsParameter = VectorClipJobsParameter;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VectorClipJobsService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _SuperMap = __webpack_require__(0);

var _ProcessingServiceBase = __webpack_require__(4);

var _VectorClipJobsParameter = __webpack_require__(27);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class SuperMap.VectorClipJobsService
 * @category  iServer ProcessingService VectorClip
 * @classdesc çź˘é‡ŹčŁ?ĺ‰Şĺ?†ćž?ćśŤĺŠˇç±»
 * @extends {SuperMap.ProcessingServiceBase}
 * @param {string} url -çź˘é‡ŹčŁ?ĺ‰Şĺ?†ćž?ćśŤĺŠˇĺś°ĺť€ă€‚
 * @param {Object} options - äş¤äş’ćśŤĺŠˇć—¶ć‰€éś€ĺŹŻé€‰ĺŹ‚ć•°ă€‚
 */
var VectorClipJobsService = exports.VectorClipJobsService = function (_ProcessingServiceBas) {
    _inherits(VectorClipJobsService, _ProcessingServiceBas);

    function VectorClipJobsService(url, options) {
        _classCallCheck(this, VectorClipJobsService);

        var _this = _possibleConstructorReturn(this, (VectorClipJobsService.__proto__ || Object.getPrototypeOf(VectorClipJobsService)).call(this, url, options));

        _this.url += "/spatialanalyst/vectorclip";
        _this.CLASS_NAME = "SuperMap.VectorClipJobsService";
        return _this;
    }

    /**
     *@override
     */


    _createClass(VectorClipJobsService, [{
        key: 'destroy',
        value: function destroy() {
            _get(VectorClipJobsService.prototype.__proto__ || Object.getPrototypeOf(VectorClipJobsService.prototype), 'destroy', this).call(this);
        }

        /**
         * @function SuperMap.VectorClipJobsService.protitype.getVectorClipJobs
         * @description čŽ·ĺŹ–çź˘é‡ŹčŁ?ĺ‰Şĺ?†ćž?ć‰€ćś‰ä»»ĺŠˇ
         */

    }, {
        key: 'getVectorClipJobs',
        value: function getVectorClipJobs() {
            _get(VectorClipJobsService.prototype.__proto__ || Object.getPrototypeOf(VectorClipJobsService.prototype), 'getJobs', this).call(this, this.url);
        }

        /**
         * @function SuperMap.KernelDensityJobsService.protitype.getVectorClipJob
         * @description čŽ·ĺŹ–ćŚ‡ĺ®šidçš„çź˘é‡ŹčŁ?ĺ‰Şĺ?†ćž?ćśŤĺŠˇ
         * @param {string} id - ćŚ‡ĺ®šč¦?čŽ·ĺŹ–ć•°ćŤ®çš„id
         */

    }, {
        key: 'getVectorClipJob',
        value: function getVectorClipJob(id) {
            _get(VectorClipJobsService.prototype.__proto__ || Object.getPrototypeOf(VectorClipJobsService.prototype), 'getJobs', this).call(this, this.url + '/' + id);
        }

        /**
         * @function SuperMap.VectorClipJobsService.protitype.addVectorClipJob
         * @description ć–°ĺ»şçź˘é‡ŹčŁ?ĺ‰Şĺ?†ćž?ćśŤĺŠˇ
         * @param {SuperMap.VectorClipJobsParameter} params - ĺ?›ĺ»şä¸€ä¸Şç©şé—´ĺ?†ćž?çš„čŻ·ć±‚ĺŹ‚ć•°ă€‚
         * @param {number} seconds - ĺĽ€ĺ§‹ĺ?›ĺ»şĺ?ŽďĽŚčŽ·ĺŹ–ĺ?›ĺ»şć??ĺŠźç»“ćžśçš„ć—¶é—´é—´éš”ă€‚
         */

    }, {
        key: 'addVectorClipJob',
        value: function addVectorClipJob(params, seconds) {
            _get(VectorClipJobsService.prototype.__proto__ || Object.getPrototypeOf(VectorClipJobsService.prototype), 'addJob', this).call(this, this.url, params, _VectorClipJobsParameter.VectorClipJobsParameter, seconds);
        }
    }]);

    return VectorClipJobsService;
}(_ProcessingServiceBase.ProcessingServiceBase);

_SuperMap.SuperMap.VectorClipJobsService = VectorClipJobsService;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SummaryRegionJobsService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _SuperMap = __webpack_require__(0);

var _ProcessingServiceBase = __webpack_require__(4);

var _SummaryRegionJobParameter = __webpack_require__(16);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class SuperMap.SummaryRegionJobsService
 * @category  iServer ProcessingService SummaryRegion
 * @classdesc ĺŚşĺźźć±‡ć€»ĺ?†ćž?ćśŤĺŠˇç±»
 * @extends {SuperMap.ProcessingServiceBase}
 * @param {string} url - ĺŚşĺźźć±‡ć€»ĺ?†ćž?ćśŤĺŠˇĺś°ĺť€ă€‚
 * @param {Object} options - ĺŹ‚ć•°ă€‚
 */
var SummaryRegionJobsService = exports.SummaryRegionJobsService = function (_ProcessingServiceBas) {
    _inherits(SummaryRegionJobsService, _ProcessingServiceBas);

    function SummaryRegionJobsService(url, options) {
        _classCallCheck(this, SummaryRegionJobsService);

        var _this = _possibleConstructorReturn(this, (SummaryRegionJobsService.__proto__ || Object.getPrototypeOf(SummaryRegionJobsService)).call(this, url, options));

        _this.url += "/spatialanalyst/summaryregion";
        _this.CLASS_NAME = "SuperMap.SummaryRegionJobsService";
        return _this;
    }

    /**
     *@override
     */


    _createClass(SummaryRegionJobsService, [{
        key: 'destroy',
        value: function destroy() {
            _get(SummaryRegionJobsService.prototype.__proto__ || Object.getPrototypeOf(SummaryRegionJobsService.prototype), 'destroy', this).call(this);
        }

        /**
         * @function SuperMap.SummaryRegionJobsService.prototype.getSummaryRegionJobs
         * @description čŽ·ĺŹ–ĺŚşĺźźć±‡ć€»ĺ?†ćž?ä»»ĺŠˇé›†ĺ??ă€‚
         */

    }, {
        key: 'getSummaryRegionJobs',
        value: function getSummaryRegionJobs() {
            _get(SummaryRegionJobsService.prototype.__proto__ || Object.getPrototypeOf(SummaryRegionJobsService.prototype), 'getJobs', this).call(this, this.url);
        }

        /**
         * @function SuperMap.SummaryRegionJobsService.prototype.getSummaryRegionJob
         * @description čŽ·ĺŹ–ćŚ‡ĺ®šidçš„ĺŚşĺźźć±‡ć€»ĺ?†ćž?ä»»ĺŠˇă€‚
         * @param {string} id -č¦?čŽ·ĺŹ–ĺŚşĺźźć±‡ć€»ĺ?†ćž?ä»»ĺŠˇçš„id
         */

    }, {
        key: 'getSummaryRegionJob',
        value: function getSummaryRegionJob(id) {
            _get(SummaryRegionJobsService.prototype.__proto__ || Object.getPrototypeOf(SummaryRegionJobsService.prototype), 'getJobs', this).call(this, this.url + '/' + id);
        }

        /**
         * @function SuperMap.SummaryRegionJobsService.prototype.addSummaryRegionJob
         * @description ć–°ĺ»şĺŚşĺźźć±‡ć€»ä»»ĺŠˇă€‚
         * @param {SuperMap.SummaryRegionJobParameter} params - ĺ?›ĺ»şä¸€ä¸ŞĺŚşĺźźć±‡ć€»ä»»ĺŠˇçš„čŻ·ć±‚ĺŹ‚ć•°ă€‚
         * @param {number} seconds - ĺĽ€ĺ§‹ĺ?›ĺ»şĺ?ŽďĽŚčŽ·ĺŹ–ĺ?›ĺ»şć??ĺŠźç»“ćžśçš„ć—¶é—´é—´éš”ă€‚
         */

    }, {
        key: 'addSummaryRegionJob',
        value: function addSummaryRegionJob(params, seconds) {
            _get(SummaryRegionJobsService.prototype.__proto__ || Object.getPrototypeOf(SummaryRegionJobsService.prototype), 'addJob', this).call(this, this.url, params, _SummaryRegionJobParameter.SummaryRegionJobParameter, seconds);
        }
    }]);

    return SummaryRegionJobsService;
}(_ProcessingServiceBase.ProcessingServiceBase);

_SuperMap.SuperMap.SummaryRegionJobsService = SummaryRegionJobsService;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SummaryMeshJobsService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _SuperMap = __webpack_require__(0);

var _ProcessingServiceBase = __webpack_require__(4);

var _SummaryMeshJobParameter = __webpack_require__(17);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class SuperMap.SummaryMeshJobsService
 * @category  iServer ProcessingService AggregatePoints
 * @classdesc ç‚ąč?šĺ??ĺ?†ćž?ä»»ĺŠˇç±»ă€‚
 * @param {string} url -ç‚ąč?šĺ??ĺ?†ćž?ä»»ĺŠˇĺś°ĺť€ă€‚
 * @param {Object} options - ĺŹ‚ć•°ă€‚<br>
 * @param {SuperMap.Events} options.events - ĺ¤„ç?†ć‰€ćś‰äş‹ä»¶çš„ĺŻąč±ˇă€‚<br>
 * @param {Object} options.eventListeners - ĺ?¬ĺ™¨ĺŻąč±ˇă€‚<br>
 * @param {SuperMap.ServerType} options.serverType - ćśŤĺŠˇĺ™¨ç±»ĺž‹ďĽŚiServer|iPortal|Onlineă€‚<br>
 * @param {number} options.index - ćśŤĺŠˇč®żé—®ĺś°ĺť€ĺś¨ć•°ç»„ä¸­çš„ä˝Ťç˝®ă€‚<br>
 * @param {number} options.length - ćśŤĺŠˇč®żé—®ĺś°ĺť€ć•°ç»„é•żĺş¦ă€‚
 */
var SummaryMeshJobsService = exports.SummaryMeshJobsService = function (_ProcessingServiceBas) {
    _inherits(SummaryMeshJobsService, _ProcessingServiceBas);

    function SummaryMeshJobsService(url, options) {
        _classCallCheck(this, SummaryMeshJobsService);

        var _this = _possibleConstructorReturn(this, (SummaryMeshJobsService.__proto__ || Object.getPrototypeOf(SummaryMeshJobsService)).call(this, url, options));

        _this.url += "/spatialanalyst/aggregatepoints";
        _this.CLASS_NAME = "SuperMap.SummaryMeshJobsService";
        return _this;
    }

    /**
     * @override
     */


    _createClass(SummaryMeshJobsService, [{
        key: 'destroy',
        value: function destroy() {
            _get(SummaryMeshJobsService.prototype.__proto__ || Object.getPrototypeOf(SummaryMeshJobsService.prototype), 'destroy', this).call(this);
        }

        /**
         * @function SuperMap.SummaryMeshJobsService.prototype.getSummaryMeshJobs
         * @description čŽ·ĺŹ–ç‚ąč?šĺ??ĺ?†ćž?ä»»ĺŠˇ
         */

    }, {
        key: 'getSummaryMeshJobs',
        value: function getSummaryMeshJobs() {
            _get(SummaryMeshJobsService.prototype.__proto__ || Object.getPrototypeOf(SummaryMeshJobsService.prototype), 'getJobs', this).call(this, this.url);
        }

        /**
         * @function SuperMap.SummaryMeshJobsService.prototype.getSummaryMeshJob
         * @description čŽ·ĺŹ–ćŚ‡ĺ®šipçš„ç‚ąč?šĺ??ĺ?†ćž?ä»»ĺŠˇ
         * @param {string} id - ćŚ‡ĺ®šč¦?čŽ·ĺŹ–ć•°ćŤ®çš„id
         */

    }, {
        key: 'getSummaryMeshJob',
        value: function getSummaryMeshJob(id) {
            _get(SummaryMeshJobsService.prototype.__proto__ || Object.getPrototypeOf(SummaryMeshJobsService.prototype), 'getJobs', this).call(this, this.url + '/' + id);
        }

        /**
         * @function SuperMap.SummaryMeshJobsService.prototype.addSummaryMeshJob
         * @description ć–°ĺ»şç‚ąč?šĺ??ĺ?†ćž?ćśŤĺŠˇ
         * @param {SuperMap.SummaryMeshJobParameter} params - ĺ?›ĺ»şä¸€ä¸Şç©şé—´ĺ?†ćž?çš„čŻ·ć±‚ĺŹ‚ć•°ă€‚
         * @param {number} seconds - ĺĽ€ĺ§‹ĺ?›ĺ»şĺ?ŽďĽŚčŽ·ĺŹ–ĺ?›ĺ»şć??ĺŠźç»“ćžśçš„ć—¶é—´é—´éš”ă€‚
         */

    }, {
        key: 'addSummaryMeshJob',
        value: function addSummaryMeshJob(params, seconds) {
            _get(SummaryMeshJobsService.prototype.__proto__ || Object.getPrototypeOf(SummaryMeshJobsService.prototype), 'addJob', this).call(this, this.url, params, _SummaryMeshJobParameter.SummaryMeshJobParameter, seconds);
        }
    }]);

    return SummaryMeshJobsService;
}(_ProcessingServiceBase.ProcessingServiceBase);

_SuperMap.SuperMap.SummaryMeshJobsService = SummaryMeshJobsService;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SingleObjectQueryJobsService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _SuperMap = __webpack_require__(0);

var _ProcessingServiceBase = __webpack_require__(4);

var _SingleObjectQueryJobsParameter = __webpack_require__(19);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class SuperMap.SingleObjectQueryJobsService
 * @category  iServer ProcessingService Query
 * @classdesc ĺŤ•ĺŻąč±ˇćźĄčŻ˘ĺ?†ćž?ćśŤĺŠˇç±»
 * @extends {SuperMap.ProcessingServiceBase}
 * @param {string} url - ĺŤ•ĺŻąč±ˇç©şé—´ćźĄčŻ˘ĺ?†ćž?ćśŤĺŠˇĺś°ĺť€ă€‚
 * @param {Object} options - ĺŹ‚ć•°ă€‚
 */
var SingleObjectQueryJobsService = exports.SingleObjectQueryJobsService = function (_ProcessingServiceBas) {
    _inherits(SingleObjectQueryJobsService, _ProcessingServiceBas);

    function SingleObjectQueryJobsService(url, options) {
        _classCallCheck(this, SingleObjectQueryJobsService);

        var _this = _possibleConstructorReturn(this, (SingleObjectQueryJobsService.__proto__ || Object.getPrototypeOf(SingleObjectQueryJobsService)).call(this, url, options));

        _this.url += "/spatialanalyst/query";
        _this.CLASS_NAME = "SuperMap.SingleObjectQueryJobsService";
        return _this;
    }

    /**
     *@override
     */


    _createClass(SingleObjectQueryJobsService, [{
        key: 'destroy',
        value: function destroy() {
            _get(SingleObjectQueryJobsService.prototype.__proto__ || Object.getPrototypeOf(SingleObjectQueryJobsService.prototype), 'destroy', this).call(this);
        }

        /**
         * @function SuperMap.SingleObjectQueryJobsService.protitype.getQueryJobs
         * @description čŽ·ĺŹ–ĺŤ•ĺŻąč±ˇç©şé—´ćźĄčŻ˘ĺ?†ćž?ć‰€ćś‰ä»»ĺŠˇ
         */

    }, {
        key: 'getQueryJobs',
        value: function getQueryJobs() {
            _get(SingleObjectQueryJobsService.prototype.__proto__ || Object.getPrototypeOf(SingleObjectQueryJobsService.prototype), 'getJobs', this).call(this, this.url);
        }

        /**
         * @function SuperMap.KernelDensityJobsService.protitype.getQueryJob
         * @description čŽ·ĺŹ–ćŚ‡ĺ®šidçš„ĺŤ•ĺŻąč±ˇç©şé—´ćźĄčŻ˘ĺ?†ćž?ćśŤĺŠˇ
         * @param {string} id - ćŚ‡ĺ®šč¦?čŽ·ĺŹ–ć•°ćŤ®çš„id
         */

    }, {
        key: 'getQueryJob',
        value: function getQueryJob(id) {
            _get(SingleObjectQueryJobsService.prototype.__proto__ || Object.getPrototypeOf(SingleObjectQueryJobsService.prototype), 'getJobs', this).call(this, this.url + '/' + id);
        }

        /**
         * @function SuperMap.SingleObjectQueryJobsService.protitype.addQueryJob
         * @description ć–°ĺ»şĺŤ•ĺŻąč±ˇç©şé—´ćźĄčŻ˘ĺ?†ćž?ćśŤĺŠˇ
         * @param {SuperMap.SingleObjectQueryJobsParameter} params - ĺ?›ĺ»şä¸€ä¸Şç©şé—´ĺ?†ćž?çš„čŻ·ć±‚ĺŹ‚ć•°ă€‚
         * @param {number} seconds - ĺĽ€ĺ§‹ĺ?›ĺ»şĺ?ŽďĽŚčŽ·ĺŹ–ĺ?›ĺ»şć??ĺŠźç»“ćžśçš„ć—¶é—´é—´éš”ă€‚
         */

    }, {
        key: 'addQueryJob',
        value: function addQueryJob(params, seconds) {
            _get(SingleObjectQueryJobsService.prototype.__proto__ || Object.getPrototypeOf(SingleObjectQueryJobsService.prototype), 'addJob', this).call(this, this.url, params, _SingleObjectQueryJobsParameter.SingleObjectQueryJobsParameter, seconds);
        }
    }]);

    return SingleObjectQueryJobsService;
}(_ProcessingServiceBase.ProcessingServiceBase);

_SuperMap.SuperMap.SingleObjectQueryJobsService = SingleObjectQueryJobsService;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.KernelDensityJobsService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _SuperMap = __webpack_require__(0);

var _ProcessingServiceBase = __webpack_require__(4);

var _KernelDensityJobParameter = __webpack_require__(20);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class SuperMap.KernelDensityJobsService
 * @category  iServer ProcessingService DensityAnalyst
 * @classdesc ć ¸ĺŻ†ĺş¦ĺ?†ćž?ćśŤĺŠˇç±»
 * @extends {SuperMap.ProcessingServiceBase}
 * @param {string} url -ć ¸ĺŻ†ĺş¦ĺ?†ćž?ćśŤĺŠˇĺś°ĺť€ă€‚
 * @param {Object} options - äş¤äş’ćśŤĺŠˇć—¶ć‰€éś€ĺŹŻé€‰ĺŹ‚ć•°ă€‚
 */
var KernelDensityJobsService = exports.KernelDensityJobsService = function (_ProcessingServiceBas) {
    _inherits(KernelDensityJobsService, _ProcessingServiceBas);

    function KernelDensityJobsService(url, options) {
        _classCallCheck(this, KernelDensityJobsService);

        var _this = _possibleConstructorReturn(this, (KernelDensityJobsService.__proto__ || Object.getPrototypeOf(KernelDensityJobsService)).call(this, url, options));

        _this.url += "/spatialanalyst/density";
        _this.CLASS_NAME = "SuperMap.KernelDensityJobsService";
        return _this;
    }

    /**
     * @function SuperMap.KernelDensityJobsService.prototype.destroy
     * @override
     */


    _createClass(KernelDensityJobsService, [{
        key: 'destroy',
        value: function destroy() {
            _get(KernelDensityJobsService.prototype.__proto__ || Object.getPrototypeOf(KernelDensityJobsService.prototype), 'destroy', this).call(this);
        }

        /**
         * @function SuperMap.KernelDensityJobsService.prototype.getKernelDensityJobs
         * @description čŽ·ĺŹ–ć ¸ĺŻ†ĺş¦ĺ?†ćž?ä»»ĺŠˇ
         */

    }, {
        key: 'getKernelDensityJobs',
        value: function getKernelDensityJobs() {
            _get(KernelDensityJobsService.prototype.__proto__ || Object.getPrototypeOf(KernelDensityJobsService.prototype), 'getJobs', this).call(this, this.url);
        }

        /**
         * @function SuperMap.KernelDensityJobsService.prototype.getKernelDensityJobs
         * @description čŽ·ĺŹ–ćŚ‡ĺ®šidçš„ć ¸ĺŻ†ĺş¦ĺ?†ćž?ćśŤĺŠˇ
         * @param {string} id - ćŚ‡ĺ®šč¦?čŽ·ĺŹ–ć•°ćŤ®çš„id
         */

    }, {
        key: 'getKernelDensityJob',
        value: function getKernelDensityJob(id) {
            _get(KernelDensityJobsService.prototype.__proto__ || Object.getPrototypeOf(KernelDensityJobsService.prototype), 'getJobs', this).call(this, this.url + '/' + id);
        }

        /**
         * @function SuperMap.KernelDensityJobsService.prototype.addKernelDensityJob
         * @description ć–°ĺ»şć ¸ĺŻ†ĺş¦ĺ?†ćž?ćśŤĺŠˇ
         * @param {SuperMap.KernelDensityJobParameter} params - ĺ?›ĺ»şä¸€ä¸Şç©şé—´ĺ?†ćž?çš„čŻ·ć±‚ĺŹ‚ć•°ă€‚
         * @param {number} seconds - ĺĽ€ĺ§‹ĺ?›ĺ»şĺ?ŽďĽŚčŽ·ĺŹ–ĺ?›ĺ»şć??ĺŠźç»“ćžśçš„ć—¶é—´é—´éš”ă€‚
         */

    }, {
        key: 'addKernelDensityJob',
        value: function addKernelDensityJob(params, seconds) {
            _get(KernelDensityJobsService.prototype.__proto__ || Object.getPrototypeOf(KernelDensityJobsService.prototype), 'addJob', this).call(this, this.url, params, _KernelDensityJobParameter.KernelDensityJobParameter, seconds);
        }
    }]);

    return KernelDensityJobsService;
}(_ProcessingServiceBase.ProcessingServiceBase);

_SuperMap.SuperMap.KernelDensityJobsService = KernelDensityJobsService;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ProcessingService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperMap = __webpack_require__(5);

var _REST = __webpack_require__(2);

var _CommonServiceBase2 = __webpack_require__(6);

var _KernelDensityJobsService = __webpack_require__(32);

var _SingleObjectQueryJobsService = __webpack_require__(31);

var _SummaryMeshJobsService = __webpack_require__(30);

var _SummaryRegionJobsService = __webpack_require__(29);

var _VectorClipJobsService = __webpack_require__(28);

var _OverlayGeoJobsService = __webpack_require__(26);

var _BuffersAnalystJobsService = __webpack_require__(25);

var _TopologyValidatorJobsService = __webpack_require__(24);

var _SummaryAttributesJobsService = __webpack_require__(23);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class SuperMap.REST.ProcessingService
 * @category  iServer ProcessingService
 * @classdesc ĺ?†ĺ¸?ĺĽŹĺ?†ćž?ç›¸ĺ…łćśŤĺŠˇç±»ă€‚
 * @augments SuperMap.CommonServiceBase
 * @example
 * ç”¨ćł•ďĽš
 * new SuperMap.REST.ProcessingService(url,options)
 *    .getKernelDensityJobs(function(result){
 *       //doSomething
 * })
 * @param {string} url -ĺ?†ĺ¸?ĺĽŹĺ?†ćž?ćśŤĺŠˇĺś°ĺť€ă€‚
 * @param {Object} options - ĺŹŻé€‰ĺŹ‚ć•°
 */
var ProcessingService = exports.ProcessingService = function (_CommonServiceBase) {
    _inherits(ProcessingService, _CommonServiceBase);

    function ProcessingService(url, options) {
        _classCallCheck(this, ProcessingService);

        var _this = _possibleConstructorReturn(this, (ProcessingService.__proto__ || Object.getPrototypeOf(ProcessingService)).call(this, url, options));

        _this.kernelDensityJobs = {};
        _this.summaryMeshJobs = {};
        _this.queryJobs = {};
        _this.summaryRegionJobs = {};
        _this.vectorClipJobs = {};
        _this.overlayGeoJobs = {};
        _this.buffersJobs = {};
        _this.topologyValidatorJobs = {};
        _this.summaryAttributesJobs = {};
        return _this;
    }

    /**
     * @function SuperMap.REST.ProcessingService.prototype.getKernelDensityJobs
     * @description čŽ·ĺŹ–ĺŻ†ĺş¦ĺ?†ćž?çš„ĺ?—čˇ¨ă€‚
     * @param {function} callback - čŻ·ć±‚ç»“ćžśçš„ĺ›žč°?ĺ‡˝ć•°ă€‚
     * @param {SuperMap.DataFormat} resultFormat - čż”ĺ›žçš„ç»“ćžśç±»ĺž‹ďĽ?é»?č®¤ä¸şGeoJSONďĽ‰ă€‚
     */


    _createClass(ProcessingService, [{
        key: 'getKernelDensityJobs',
        value: function getKernelDensityJobs(callback, resultFormat) {
            var me = this,
                format = me._processFormat(resultFormat);
            var kernelDensityJobsService = new _KernelDensityJobsService.KernelDensityJobsService(me.url, {
                proxy: me.proxy,
                withCredentials: me.withCredentials,
                serverType: me.serverType,
                eventListeners: {
                    scope: me,
                    processCompleted: callback,
                    processFailed: callback
                },
                format: format
            });
            kernelDensityJobsService.getKernelDensityJobs();
        }

        /**
         * @function SuperMap.REST.ProcessingService.prototype.getKernelDensityJob
         * @description čŽ·ĺŹ–ćź?ä¸€ä¸ŞĺŻ†ĺş¦ĺ?†ćž?ă€‚
         * @param {string} id - ç©şé—´ĺ?†ćž?çš„idă€‚
         * @param {function} callback - čŻ·ć±‚ç»“ćžśçš„ĺ›žč°?ĺ‡˝ć•°ă€‚
         * @param {SuperMap.DataFormat} resultFormat - čż”ĺ›žçš„ç»“ćžśç±»ĺž‹ďĽ?é»?č®¤ä¸şGeoJSONďĽ‰ă€‚
         */

    }, {
        key: 'getKernelDensityJob',
        value: function getKernelDensityJob(id, callback, resultFormat) {
            var me = this,
                format = me._processFormat(resultFormat);
            var kernelDensityJobsService = new _KernelDensityJobsService.KernelDensityJobsService(me.url, {
                proxy: me.proxy,
                withCredentials: me.withCredentials,
                serverType: me.serverType,
                eventListeners: {
                    scope: me,
                    processCompleted: callback,
                    processFailed: callback
                },
                format: format
            });
            kernelDensityJobsService.getKernelDensityJob(id);
        }

        /**
         * @function SuperMap.REST.ProcessingService.prototype.addKernelDensityJob
         * @description ć–°ĺ»şä¸€ä¸ŞĺŻ†ĺş¦ĺ?†ćž?ă€‚
         * @param {SuperMap.KernelDensityJobParameter} params - ĺ?›ĺ»şä¸€ä¸Şç©şé—´ĺ?†ćž?çš„čŻ·ć±‚ĺŹ‚ć•°ă€‚
         * @param {function} callback - čŻ·ć±‚ç»“ćžśçš„ĺ›žč°?ĺ‡˝ć•°ă€‚
         * @param {number} seconds - ĺĽ€ĺ§‹ĺ?›ĺ»şĺ?ŽďĽŚčŽ·ĺŹ–ĺ?›ĺ»şć??ĺŠźç»“ćžśçš„ć—¶é—´é—´éš”ă€‚
         * @param {SuperMap.DataFormat} resultFormat - čż”ĺ›žçš„ç»“ćžśç±»ĺž‹ďĽ?é»?č®¤ä¸şGeoJSONďĽ‰ă€‚
         */

    }, {
        key: 'addKernelDensityJob',
        value: function addKernelDensityJob(params, callback, seconds, resultFormat) {
            var me = this,
                format = me._processFormat(resultFormat);
            var kernelDensityJobsService = new _KernelDensityJobsService.KernelDensityJobsService(me.url, {
                proxy: me.proxy,
                withCredentials: me.withCredentials,
                eventListeners: {
                    scope: me,
                    processCompleted: callback,
                    processFailed: callback,
                    processRunning: function processRunning(job) {
                        me.kernelDensityJobs[job.id] = job.state;
                    }
                },
                format: format
            });
            kernelDensityJobsService.addKernelDensityJob(params, seconds);
        }

        /**
         * @function SuperMap.REST.ProcessingService.prototype.getKernelDensityJobState
         * @description čŽ·ĺŹ–ĺŻ†ĺş¦ĺ?†ćž?çš„çŠ¶ć€?ă€‚
         * @param {string} id - ĺŻ†ĺş¦ĺ?†ćž?çš„idă€‚
         * @returns {Object} ĺŻ†ĺş¦ĺ?†ćž?çš„çŠ¶ć€?
         */

    }, {
        key: 'getKernelDensityJobState',
        value: function getKernelDensityJobState(id) {
            return this.kernelDensityJobs[id];
        }

        /**
         * @function SuperMap.REST.ProcessingService.prototype.getSummaryMeshJobs
         * @description čŽ·ĺŹ–ç‚ąč?šĺ??ĺ?†ćž?çš„ĺ?—čˇ¨ă€‚
         * @param {function} callback - čŻ·ć±‚ç»“ćžśçš„ĺ›žč°?ĺ‡˝ć•°ă€‚
         * @param {SuperMap.DataFormat} resultFormat - čż”ĺ›žçš„ç»“ćžśç±»ĺž‹ďĽ?é»?č®¤ä¸şGeoJSONďĽ‰ă€‚
         */

    }, {
        key: 'getSummaryMeshJobs',
        value: function getSummaryMeshJobs(callback, resultFormat) {
            var me = this,
                format = me._processFormat(resultFormat);
            var summaryMeshJobsService = new _SummaryMeshJobsService.SummaryMeshJobsService(me.url, {
                proxy: me.proxy,
                withCredentials: me.withCredentials,
                serverType: me.serverType,
                eventListeners: {
                    scope: me,
                    processCompleted: callback,
                    processFailed: callback
                },
                format: format
            });
            summaryMeshJobsService.getSummaryMeshJobs();
        }

        /**
         * @function SuperMap.REST.ProcessingService.prototype.getSummaryMeshJob
         * @description čŽ·ĺŹ–ćź?ä¸€ä¸Şç‚ąč?šĺ??ĺ?†ćž?ă€‚
         * @param {string} id - ç©şé—´ĺ?†ćž?çš„idă€‚
         * @param {function} callback - čŻ·ć±‚ç»“ćžśçš„ĺ›žč°?ĺ‡˝ć•°ă€‚
         * @param {SuperMap.DataFormat} resultFormat - čż”ĺ›žçš„ç»“ćžśç±»ĺž‹ďĽ?é»?č®¤ä¸şGeoJSONďĽ‰ă€‚
         */

    }, {
        key: 'getSummaryMeshJob',
        value: function getSummaryMeshJob(id, callback, resultFormat) {
            var me = this,
                format = me._processFormat(resultFormat);
            var summaryMeshJobsService = new _SummaryMeshJobsService.SummaryMeshJobsService(me.url, {
                proxy: me.proxy,
                withCredentials: me.withCredentials,
                serverType: me.serverType,
                eventListeners: {
                    scope: me,
                    processCompleted: callback,
                    processFailed: callback
                },
                format: format
            });
            summaryMeshJobsService.getSummaryMeshJob(id);
        }

        /**
         * @function SuperMap.REST.ProcessingService.prototype.addSummaryMeshJob
         * @description ć–°ĺ»şä¸€ä¸Şç‚ąč?šĺ??ĺ?†ćž?ă€‚
         * @param {SuperMap.SummaryMeshJobParameter} params - ç‚ąč?šĺ??ĺ?†ćž?ä»»ĺŠˇĺŹ‚ć•°ç±»ă€‚
         * @param {function} callback - čŻ·ć±‚ç»“ćžśçš„ĺ›žč°?ĺ‡˝ć•°ă€‚
         * @param {number} seconds - ĺĽ€ĺ§‹ĺ?›ĺ»şĺ?ŽďĽŚčŽ·ĺŹ–ĺ?›ĺ»şć??ĺŠźç»“ćžśçš„ć—¶é—´é—´éš”
         * @param {SuperMap.DataFormat} resultFormat - čż”ĺ›žçš„ç»“ćžśç±»ĺž‹ďĽ?é»?č®¤ä¸şGeoJSONďĽ‰ă€‚
         */

    }, {
        key: 'addSummaryMeshJob',
        value: function addSummaryMeshJob(params, callback, seconds, resultFormat) {
            var me = this,
                format = me._processFormat(resultFormat);
            var summaryMeshJobsService = new _SummaryMeshJobsService.SummaryMeshJobsService(me.url, {
                proxy: me.proxy,
                withCredentials: me.withCredentials,
                eventListeners: {
                    scope: me,
                    processCompleted: callback,
                    processFailed: callback,
                    processRunning: function processRunning(job) {
                        me.summaryMeshJobs[job.id] = job.state;
                    }
                },
                format: format
            });
            summaryMeshJobsService.addSummaryMeshJob(params, seconds);
        }

        /**
         * @function SuperMap.REST.ProcessingService.prototype.getSummaryMeshJobState
         * @description čŽ·ĺŹ–ç‚ąč?šĺ??ĺ?†ćž?çš„çŠ¶ć€?ă€‚
         * @param {string} id - ç‚ąč?šĺ??ĺ?†ćž?çš„idă€‚
         * @returns {Object} ç‚ąč?šĺ??ĺ?†ćž?çš„çŠ¶ć€?
         */

    }, {
        key: 'getSummaryMeshJobState',
        value: function getSummaryMeshJobState(id) {
            return this.summaryMeshJobs[id];
        }

        /**
         * @function SuperMap.REST.ProcessingService.prototype.getQueryJobs
         * @description čŽ·ĺŹ–ĺŤ•ĺŻąč±ˇćźĄčŻ˘ĺ?†ćž?çš„ĺ?—čˇ¨ă€‚
         * @param {function} callback - čŻ·ć±‚ç»“ćžśçš„ĺ›žč°?ĺ‡˝ć•°ă€‚
         * @param {SuperMap.DataFormat} resultFormat - čż”ĺ›žçš„ç»“ćžśç±»ĺž‹ďĽ?é»?č®¤ä¸şGeoJSONďĽ‰ă€‚
         */

    }, {
        key: 'getQueryJobs',
        value: function getQueryJobs(callback, resultFormat) {
            var me = this,
                format = me._processFormat(resultFormat);
            var singleObjectQueryJobsService = new _SingleObjectQueryJobsService.SingleObjectQueryJobsService(me.url, {
                proxy: me.proxy,
                withCredentials: me.withCredentials,
                serverType: me.serverType,
                eventListeners: {
                    scope: me,
                    processCompleted: callback,
                    processFailed: callback
                },
                format: format
            });
            singleObjectQueryJobsService.getQueryJobs();
        }

        /**
         * @function SuperMap.REST.ProcessingService.prototype.getQueryJob
         * @description čŽ·ĺŹ–ćź?ä¸€ä¸ŞĺŤ•ĺŻąč±ˇćźĄčŻ˘ĺ?†ćž?ă€‚
         * @param {string} id - ç©şé—´ĺ?†ćž?çš„idă€‚
         * @param {function} callback - čŻ·ć±‚ç»“ćžśçš„ĺ›žč°?ĺ‡˝ć•°ă€‚
         * @param {SuperMap.DataFormat} resultFormat - čż”ĺ›žçš„ç»“ćžśç±»ĺž‹ďĽ?é»?č®¤ä¸şGeoJSONďĽ‰ă€‚
         */

    }, {
        key: 'getQueryJob',
        value: function getQueryJob(id, callback, resultFormat) {
            var me = this,
                format = me._processFormat(resultFormat);
            var singleObjectQueryJobsService = new _SingleObjectQueryJobsService.SingleObjectQueryJobsService(me.url, {
                proxy: me.proxy,
                withCredentials: me.withCredentials,
                serverType: me.serverType,
                eventListeners: {
                    scope: me,
                    processCompleted: callback,
                    processFailed: callback
                },
                format: format
            });
            singleObjectQueryJobsService.getQueryJob(id);
        }

        /**
         * @function SuperMap.REST.ProcessingService.prototype.addQueryJob
         * @description ć–°ĺ»şä¸€ä¸ŞĺŤ•ĺŻąč±ˇćźĄčŻ˘ĺ?†ćž?ă€‚
         * @param {SuperMap.SingleObjectQueryJobsParameter} params - ĺ?›ĺ»şä¸€ä¸Şç©şé—´ĺ?†ćž?çš„čŻ·ć±‚ĺŹ‚ć•°ă€‚
         * @param {function} callback - čŻ·ć±‚ç»“ćžśçš„ĺ›žč°?ĺ‡˝ć•°ă€‚
         * @param {number}seconds - ĺĽ€ĺ§‹ĺ?›ĺ»şĺ?ŽďĽŚčŽ·ĺŹ–ĺ?›ĺ»şć??ĺŠźç»“ćžśçš„ć—¶é—´é—´éš”ă€‚
         * @param {SuperMap.DataFormat} resultFormat - čż”ĺ›žçš„ç»“ćžśç±»ĺž‹ďĽ?é»?č®¤ä¸şGeoJSONďĽ‰ă€‚
         */

    }, {
        key: 'addQueryJob',
        value: function addQueryJob(params, callback, seconds, resultFormat) {
            var me = this,
                param = me._processParams(params),
                format = me._processFormat(resultFormat);
            var singleObjectQueryJobsService = new _SingleObjectQueryJobsService.SingleObjectQueryJobsService(me.url, {
                proxy: me.proxy,
                withCredentials: me.withCredentials,
                eventListeners: {
                    scope: me,
                    processCompleted: callback,
                    processFailed: callback,
                    processRunning: function processRunning(job) {
                        me.queryJobs[job.id] = job.state;
                    }
                },
                format: format
            });
            singleObjectQueryJobsService.addQueryJob(param, seconds);
        }

        /**
         * @function SuperMap.REST.ProcessingService.prototype.getQueryJobState
         * @description čŽ·ĺŹ–ĺŤ•ĺŻąč±ˇćźĄčŻ˘ĺ?†ćž?çš„çŠ¶ć€?ă€‚
         * @param {string} id - ĺŤ•ĺŻąč±ˇćźĄčŻ˘ĺ?†ćž?çš„idă€‚
         * @returns {Object} ĺŤ•ĺŻąč±ˇćźĄčŻ˘ĺ?†ćž?çš„çŠ¶ć€?
         */

    }, {
        key: 'getQueryJobState',
        value: function getQueryJobState(id) {
            return this.queryJobs[id];
        }

        /**
         * @function SuperMap.REST.ProcessingService.prototype.getSummaryRegionJobs
         * @description čŽ·ĺŹ–ĺŚşĺźźć±‡ć€»ĺ?†ćž?çš„ĺ?—čˇ¨ă€‚
         * @param {function} callback - čŻ·ć±‚ç»“ćžśçš„ĺ›žč°?ĺ‡˝ć•°ă€‚
         * @param {SuperMap.DataFormat} resultFormat - čż”ĺ›žçš„ç»“ćžśç±»ĺž‹ďĽ?é»?č®¤ä¸şGeoJSONďĽ‰ă€‚
         */

    }, {
        key: 'getSummaryRegionJobs',
        value: function getSummaryRegionJobs(callback, resultFormat) {
            var me = this,
                format = me._processFormat(resultFormat);
            var summaryRegionJobsService = new _SummaryRegionJobsService.SummaryRegionJobsService(me.url, {
                proxy: me.proxy,
                withCredentials: me.withCredentials,
                serverType: me.serverType,
                eventListeners: {
                    scope: me,
                    processCompleted: callback,
                    processFailed: callback
                },
                format: format
            });
            summaryRegionJobsService.getSummaryRegionJobs();
        }

        /**
         * @function SuperMap.REST.ProcessingService.prototype.getSummaryRegionJob
         * @description čŽ·ĺŹ–ćź?ä¸€ä¸ŞĺŚşĺźźć±‡ć€»ĺ?†ćž?ă€‚
         * @param {string} id - ĺŚşĺźźć±‡ć€»ĺ?†ćž?çš„idă€‚
         * @param {function} callback - čŻ·ć±‚ç»“ćžśçš„ĺ›žč°?ĺ‡˝ć•°ă€‚
         * @param {SuperMap.DataFormat} resultFormat - čż”ĺ›žçš„ç»“ćžśç±»ĺž‹ďĽ?é»?č®¤ä¸şGeoJSONďĽ‰ă€‚
         */

    }, {
        key: 'getSummaryRegionJob',
        value: function getSummaryRegionJob(id, callback, resultFormat) {
            var me = this,
                format = me._processFormat(resultFormat);
            var summaryRegionJobsService = new _SummaryRegionJobsService.SummaryRegionJobsService(me.url, {
                proxy: me.proxy,
                withCredentials: me.withCredentials,
                serverType: me.serverType,
                eventListeners: {
                    scope: me,
                    processCompleted: callback,
                    processFailed: callback
                },
                format: format
            });
            summaryRegionJobsService.getSummaryRegionJob(id);
        }

        /**
         * @function SuperMap.REST.ProcessingService.prototype.addSummaryRegionJob
         * @description ć–°ĺ»şä¸€ä¸ŞĺŚşĺźźć±‡ć€»ĺ?†ćž?ă€‚
         * @param {SuperMap.SummaryRegionJobParameter} params -ĺ?›ĺ»şä¸€ä¸ŞĺŚşĺźźć±‡ć€»ĺ?†ćž?çš„čŻ·ć±‚ĺŹ‚ć•°ă€‚
         * @param {function} callback - čŻ·ć±‚ç»“ćžśçš„ĺ›žč°?ĺ‡˝ć•°ă€‚
         * @param {number} seconds - ĺĽ€ĺ§‹ĺ?›ĺ»şĺ?ŽďĽŚčŽ·ĺŹ–ĺ?›ĺ»şć??ĺŠźç»“ćžśçš„ć—¶é—´é—´éš”ă€‚
         * @param {SuperMap.DataFormat} resultFormat - čż”ĺ›žçš„ç»“ćžśç±»ĺž‹ďĽ?é»?č®¤ä¸şGeoJSONďĽ‰ă€‚
         */

    }, {
        key: 'addSummaryRegionJob',
        value: function addSummaryRegionJob(params, callback, seconds, resultFormat) {
            var me = this,
                format = me._processFormat(resultFormat);
            var summaryRegionJobsService = new _SummaryRegionJobsService.SummaryRegionJobsService(me.url, {
                proxy: me.proxy,
                withCredentials: me.withCredentials,
                eventListeners: {
                    scope: me,
                    processCompleted: callback,
                    processFailed: callback,
                    processRunning: function processRunning(job) {
                        me.summaryRegionJobs[job.id] = job.state;
                    }
                },
                format: format
            });
            summaryRegionJobsService.addSummaryRegionJob(params, seconds);
        }

        /**
         * @function SuperMap.REST.ProcessingService.prototype.getSummaryRegionJobState
         * @description čŽ·ĺŹ–ĺŚşĺźźć±‡ć€»ĺ?†ćž?çš„çŠ¶ć€?ă€‚
         * @param {string} id - ĺŚşĺźźć±‡ć€»ĺ?†ćž?çš„idă€‚
         * @returns {Object} ĺŚşĺźźć±‡ć€»ĺ?†ćž?çš„çŠ¶ć€?
         */

    }, {
        key: 'getSummaryRegionJobState',
        value: function getSummaryRegionJobState(id) {
            return this.summaryRegionJobs[id];
        }

        /**
         * @function SuperMap.REST.ProcessingService.prototype.getVectorClipJobs
         * @description čŽ·ĺŹ–çź˘é‡ŹčŁ?ĺ‰Şĺ?†ćž?çš„ĺ?—čˇ¨ă€‚
         * @param {function} callback - čŻ·ć±‚ç»“ćžśçš„ĺ›žč°?ĺ‡˝ć•°ă€‚
         * @param {SuperMap.DataFormat} resultFormat - čż”ĺ›žçš„ç»“ćžśç±»ĺž‹ďĽ?é»?č®¤ä¸şGeoJSONďĽ‰ă€‚
         */

    }, {
        key: 'getVectorClipJobs',
        value: function getVectorClipJobs(callback, resultFormat) {
            var me = this,
                format = me._processFormat(resultFormat);
            var vectorClipJobsService = new _VectorClipJobsService.VectorClipJobsService(me.url, {
                proxy: me.proxy,
                withCredentials: me.withCredentials,
                serverType: me.serverType,
                eventListeners: {
                    scope: me,
                    processCompleted: callback,
                    processFailed: callback
                },
                format: format
            });
            vectorClipJobsService.getVectorClipJobs();
        }

        /**
         * @function SuperMap.REST.ProcessingService.prototype.getVectorClipJob
         * @description čŽ·ĺŹ–ćź?ä¸€ä¸Şçź˘é‡ŹčŁ?ĺ‰Şĺ?†ćž?ă€‚
         * @param {string} id - ç©şé—´ĺ?†ćž?çš„idă€‚
         * @param {function} callback - čŻ·ć±‚ç»“ćžśçš„ĺ›žč°?ĺ‡˝ć•°ă€‚
         * @param {SuperMap.DataFormat} resultFormat - čż”ĺ›žçš„ç»“ćžśç±»ĺž‹ďĽ?é»?č®¤ä¸şGeoJSONďĽ‰ă€‚
         */

    }, {
        key: 'getVectorClipJob',
        value: function getVectorClipJob(id, callback, resultFormat) {
            var me = this,
                format = me._processFormat(resultFormat);
            var vectorClipJobsService = new _VectorClipJobsService.VectorClipJobsService(me.url, {
                proxy: me.proxy,
                withCredentials: me.withCredentials,
                serverType: me.serverType,
                eventListeners: {
                    scope: me,
                    processCompleted: callback,
                    processFailed: callback
                },
                format: format
            });
            vectorClipJobsService.getVectorClipJob(id);
        }

        /**
         * @function SuperMap.REST.ProcessingService.prototype.addVectorClipJob
         * @description ć–°ĺ»şä¸€ä¸Şçź˘é‡ŹčŁ?ĺ‰Şĺ?†ćž?ă€‚
         * @param {SuperMap.VectorClipJobsParameter} params - ĺ?›ĺ»şä¸€ä¸Şç©şé—´ĺ?†ćž?çš„čŻ·ć±‚ĺŹ‚ć•°ă€‚
         * @param {function} callback - čŻ·ć±‚ç»“ćžśçš„ĺ›žč°?ĺ‡˝ć•°ă€‚
         * @param {number} seconds - ĺĽ€ĺ§‹ĺ?›ĺ»şĺ?ŽďĽŚčŽ·ĺŹ–ĺ?›ĺ»şć??ĺŠźç»“ćžśçš„ć—¶é—´é—´éš”ă€‚
         * @param {SuperMap.DataFormat} resultFormat - čż”ĺ›žçš„ç»“ćžśç±»ĺž‹ďĽ?é»?č®¤ä¸şGeoJSONďĽ‰ă€‚
         */

    }, {
        key: 'addVectorClipJob',
        value: function addVectorClipJob(params, callback, seconds, resultFormat) {
            var me = this,
                param = me._processParams(params),
                format = me._processFormat(resultFormat);
            var vectorClipJobsService = new _VectorClipJobsService.VectorClipJobsService(me.url, {
                proxy: me.proxy,
                withCredentials: me.withCredentials,
                serverType: me.serverType,
                eventListeners: {
                    scope: me,
                    processCompleted: callback,
                    processFailed: callback,
                    processRunning: function processRunning(job) {
                        me.vectorClipJobs[job.id] = job.state;
                    }
                },
                format: format
            });
            vectorClipJobsService.addVectorClipJob(param, seconds);
        }

        /**
         * @function SuperMap.REST.ProcessingService.prototype.getVectorClipJobState
         * @description čŽ·ĺŹ–çź˘é‡ŹčŁ?ĺ‰Şĺ?†ćž?çš„çŠ¶ć€?ă€‚
         * @param {string} id - çź˘é‡ŹčŁ?ĺ‰Şĺ?†ćž?çš„idă€‚
         * @returns {Object} çź˘é‡ŹčŁ?ĺ‰Şĺ?†ćž?çš„çŠ¶ć€?
         */

    }, {
        key: 'getVectorClipJobState',
        value: function getVectorClipJobState(id) {
            return this.vectorClipJobs[id];
        }

        /**
         * @function SuperMap.REST.ProcessingService.prototype.getOverlayGeoJobs
         * @description čŽ·ĺŹ–ĺŹ ĺŠ ĺ?†ćž?çš„ĺ?—čˇ¨ă€‚
         * @param {function} callback - čŻ·ć±‚ç»“ćžśçš„ĺ›žč°?ĺ‡˝ć•°ă€‚
         * @param {SuperMap.DataFormat} resultFormat - čż”ĺ›žçš„ç»“ćžśç±»ĺž‹ďĽ?é»?č®¤ä¸şGeoJSONďĽ‰ă€‚
         */

    }, {
        key: 'getOverlayGeoJobs',
        value: function getOverlayGeoJobs(callback, resultFormat) {
            var me = this,
                format = me._processFormat(resultFormat);
            var overlayGeoJobsService = new _OverlayGeoJobsService.OverlayGeoJobsService(me.url, {
                proxy: me.proxy,
                withCredentials: me.withCredentials,
                serverType: me.serverType,
                eventListeners: {
                    scope: me,
                    processCompleted: callback,
                    processFailed: callback
                },
                format: format
            });
            overlayGeoJobsService.getOverlayGeoJobs();
        }

        /**
         * @function SuperMap.REST.ProcessingService.prototype.getOverlayGeoJob
         * @description čŽ·ĺŹ–ćź?ä¸€ä¸ŞĺŹ ĺŠ ĺ?†ćž?ă€‚
         * @param {string} id - ç©şé—´ĺ?†ćž?çš„idă€‚
         * @param {function} callback - čŻ·ć±‚ç»“ćžśçš„ĺ›žč°?ĺ‡˝ć•°ă€‚
         * @param {SuperMap.DataFormat} resultFormat - čż”ĺ›žçš„ç»“ćžśç±»ĺž‹ďĽ?é»?č®¤ä¸şGeoJSONďĽ‰ă€‚
         */

    }, {
        key: 'getOverlayGeoJob',
        value: function getOverlayGeoJob(id, callback, resultFormat) {
            var me = this,
                format = me._processFormat(resultFormat);
            var overlayGeoJobsService = new _OverlayGeoJobsService.OverlayGeoJobsService(me.url, {
                proxy: me.proxy,
                withCredentials: me.withCredentials,
                serverType: me.serverType,
                eventListeners: {
                    scope: me,
                    processCompleted: callback,
                    processFailed: callback
                },
                format: format
            });
            overlayGeoJobsService.getOverlayGeoJob(id);
        }

        /**
         * @function SuperMap.REST.ProcessingService.prototype.addOverlayGeoJob
         * @description ć–°ĺ»şä¸€ä¸ŞĺŹ ĺŠ ĺ?†ćž?ă€‚
         * @param {SuperMap.OverlayGeoJobParameter} params - ĺ?›ĺ»şä¸€ä¸Şç©şé—´ĺ?†ćž?çš„čŻ·ć±‚ĺŹ‚ć•°ă€‚
         * @param {function} callback - čŻ·ć±‚ç»“ćžśçš„ĺ›žč°?ĺ‡˝ć•°ă€‚
         * @param {number} seconds - ĺĽ€ĺ§‹ĺ?›ĺ»şĺ?ŽďĽŚčŽ·ĺŹ–ĺ?›ĺ»şć??ĺŠźç»“ćžśçš„ć—¶é—´é—´éš”ă€‚
         * @param {SuperMap.DataFormat} resultFormat - čż”ĺ›žçš„ç»“ćžśç±»ĺž‹ďĽ?é»?č®¤ä¸şGeoJSONďĽ‰ă€‚
         */

    }, {
        key: 'addOverlayGeoJob',
        value: function addOverlayGeoJob(params, callback, seconds, resultFormat) {
            var me = this,
                format = me._processFormat(resultFormat);
            var overlayGeoJobsService = new _OverlayGeoJobsService.OverlayGeoJobsService(me.url, {
                proxy: me.proxy,
                withCredentials: me.withCredentials,
                serverType: me.serverType,
                eventListeners: {
                    scope: me,
                    processCompleted: callback,
                    processFailed: callback,
                    processRunning: function processRunning(job) {
                        me.overlayGeoJobs[job.id] = job.state;
                    }
                },
                format: format
            });
            overlayGeoJobsService.addOverlayGeoJob(params, seconds);
        }

        /**
         * @function SuperMap.REST.ProcessingService.prototype.getoverlayGeoJobState
         * @description čŽ·ĺŹ–ĺŹ ĺŠ ĺ?†ćž?çš„çŠ¶ć€?ă€‚
         * @param {string} id - ĺŹ ĺŠ ĺ?†ćž?çš„idă€‚
         * @returns {Object} ĺŹ ĺŠ ĺ?†ćž?çš„çŠ¶ć€?
         */

    }, {
        key: 'getoverlayGeoJobState',
        value: function getoverlayGeoJobState(id) {
            return this.overlayGeoJobs[id];
        }

        /**
         * @function SuperMap.REST.ProcessingService.prototype.getBuffersJobs
         * @description čŽ·ĺŹ–çĽ“ĺ†˛ĺŚşĺ?†ćž?çš„ĺ?—čˇ¨ă€‚
         * @param {function} callback - čŻ·ć±‚ç»“ćžśçš„ĺ›žč°?ĺ‡˝ć•°ă€‚
         * @param {SuperMap.DataFormat} resultFormat - čż”ĺ›žçš„ç»“ćžśç±»ĺž‹ďĽ?é»?č®¤ä¸şGeoJSONďĽ‰ă€‚
         */

    }, {
        key: 'getBuffersJobs',
        value: function getBuffersJobs(callback, resultFormat) {
            var me = this,
                format = me._processFormat(resultFormat);
            var buffersAnalystJobsService = new _BuffersAnalystJobsService.BuffersAnalystJobsService(me.url, {
                proxy: me.proxy,
                withCredentials: me.withCredentials,
                serverType: me.serverType,
                eventListeners: {
                    scope: me,
                    processCompleted: callback,
                    processFailed: callback
                },
                format: format
            });
            buffersAnalystJobsService.getBuffersJobs();
        }

        /**
         * @function SuperMap.REST.ProcessingService.prototype.getBuffersJob
         * @description čŽ·ĺŹ–ćź?ä¸€ä¸ŞçĽ“ĺ†˛ĺŚşĺ?†ćž?ă€‚
         * @param {string} id - ç©şé—´ĺ?†ćž?çš„idă€‚
         * @param {function} callback - čŻ·ć±‚ç»“ćžśçš„ĺ›žč°?ĺ‡˝ć•°ă€‚
         * @param {SuperMap.DataFormat} resultFormat - čż”ĺ›žçš„ç»“ćžśç±»ĺž‹ďĽ?é»?č®¤ä¸şGeoJSONďĽ‰ă€‚
         */

    }, {
        key: 'getBuffersJob',
        value: function getBuffersJob(id, callback, resultFormat) {
            var me = this,
                format = me._processFormat(resultFormat);
            var buffersAnalystJobsService = new _BuffersAnalystJobsService.BuffersAnalystJobsService(me.url, {
                proxy: me.proxy,
                withCredentials: me.withCredentials,
                serverType: me.serverType,
                eventListeners: {
                    scope: me,
                    processCompleted: callback,
                    processFailed: callback
                },
                format: format
            });
            buffersAnalystJobsService.getBuffersJob(id);
        }

        /**
         * @function SuperMap.REST.ProcessingService.prototype.addBuffersJob
         * @description ć–°ĺ»şä¸€ä¸ŞçĽ“ĺ†˛ĺŚşĺ?†ćž?ă€‚
         * @param {SuperMap.BuffersAnalystJobsParameter} params - ĺ?›ĺ»şä¸€ä¸Şç©şé—´ĺ?†ćž?çš„čŻ·ć±‚ĺŹ‚ć•°ă€‚
         * @param {function} callback - čŻ·ć±‚ç»“ćžśçš„ĺ›žč°?ĺ‡˝ć•°ă€‚
         * @param {number} seconds - ĺĽ€ĺ§‹ĺ?›ĺ»şĺ?ŽďĽŚčŽ·ĺŹ–ĺ?›ĺ»şć??ĺŠźç»“ćžśçš„ć—¶é—´é—´éš”ă€‚
         * @param {SuperMap.DataFormat} resultFormat - čż”ĺ›žçš„ç»“ćžśç±»ĺž‹ďĽ?é»?č®¤ä¸şGeoJSONďĽ‰ă€‚
         */

    }, {
        key: 'addBuffersJob',
        value: function addBuffersJob(params, callback, seconds, resultFormat) {
            var me = this,
                format = me._processFormat(resultFormat);
            var buffersAnalystJobsService = new _BuffersAnalystJobsService.BuffersAnalystJobsService(me.url, {
                proxy: me.proxy,
                withCredentials: me.withCredentials,
                serverType: me.serverType,
                eventListeners: {
                    scope: me,
                    processCompleted: callback,
                    processFailed: callback,
                    processRunning: function processRunning(job) {
                        me.buffersJobs[job.id] = job.state;
                    }
                },
                format: format
            });
            buffersAnalystJobsService.addBuffersJob(params, seconds);
        }

        /**
         * @function SuperMap.REST.ProcessingService.prototype.getBuffersJobState
         * @description čŽ·ĺŹ–çĽ“ĺ†˛ĺŚşĺ?†ćž?çš„çŠ¶ć€?ă€‚
         * @param {string} id - çĽ“ĺ†˛ĺŚşĺ?†ćž?çš„idă€‚
         * @returns {Object} çĽ“ĺ†˛ĺŚşĺ?†ćž?çš„çŠ¶ć€?
         */

    }, {
        key: 'getBuffersJobState',
        value: function getBuffersJobState(id) {
            return this.buffersJobs[id];
        }

        /**
         * @function SuperMap.REST.ProcessingService.prototype.getTopologyValidatorJobs
         * @description čŽ·ĺŹ–ć‹“ć‰‘ćŁ€ćźĄĺ?†ćž?çš„ĺ?—čˇ¨ă€‚
         * @param {function} callback - čŻ·ć±‚ç»“ćžśçš„ĺ›žč°?ĺ‡˝ć•°ă€‚
         * @param {SuperMap.DataFormat} resultFormat - čż”ĺ›žçš„ç»“ćžśç±»ĺž‹ďĽ?é»?č®¤ä¸şGeoJSONďĽ‰ă€‚
         */

    }, {
        key: 'getTopologyValidatorJobs',
        value: function getTopologyValidatorJobs(callback, resultFormat) {
            var me = this,
                format = me._processFormat(resultFormat);
            var topologyValidatorJobsService = new _TopologyValidatorJobsService.TopologyValidatorJobsService(me.url, {
                proxy: me.proxy,
                withCredentials: me.withCredentials,
                serverType: me.serverType,
                eventListeners: {
                    scope: me,
                    processCompleted: callback,
                    processFailed: callback
                },
                format: format
            });
            topologyValidatorJobsService.getTopologyValidatorJobs();
        }

        /**
         * @function SuperMap.REST.ProcessingService.prototype.getTopologyValidatorJob
         * @description čŽ·ĺŹ–ćź?ä¸€ä¸Şć‹“ć‰‘ćŁ€ćźĄĺ?†ćž?ă€‚
         * @param {string} id - ç©şé—´ĺ?†ćž?çš„idă€‚
         * @param {function} callback - čŻ·ć±‚ç»“ćžśçš„ĺ›žč°?ĺ‡˝ć•°ă€‚
         * @param {SuperMap.DataFormat} resultFormat - čż”ĺ›žçš„ç»“ćžśç±»ĺž‹ďĽ?é»?č®¤ä¸şGeoJSONďĽ‰ă€‚
         */

    }, {
        key: 'getTopologyValidatorJob',
        value: function getTopologyValidatorJob(id, callback, resultFormat) {
            var me = this,
                format = me._processFormat(resultFormat);
            var topologyValidatorJobsService = new _TopologyValidatorJobsService.TopologyValidatorJobsService(me.url, {
                proxy: me.proxy,
                withCredentials: me.withCredentials,
                serverType: me.serverType,
                eventListeners: {
                    scope: me,
                    processCompleted: callback,
                    processFailed: callback
                },
                format: format
            });
            topologyValidatorJobsService.getTopologyValidatorJob(id);
        }

        /**
         * @function SuperMap.REST.ProcessingService.prototype.addTopologyValidatorJob
         * @description ć–°ĺ»şä¸€ä¸Şć‹“ć‰‘ćŁ€ćźĄĺ?†ćž?ă€‚
         * @param {SuperMap.TopologyValidatorJobsParameter} params - ĺ?›ĺ»şä¸€ä¸Şç©şé—´ĺ?†ćž?çš„čŻ·ć±‚ĺŹ‚ć•°ă€‚
         * @param {function} callback - čŻ·ć±‚ç»“ćžśçš„ĺ›žč°?ĺ‡˝ć•°ă€‚
         * @param {number} seconds - ĺĽ€ĺ§‹ĺ?›ĺ»şĺ?ŽďĽŚčŽ·ĺŹ–ĺ?›ĺ»şć??ĺŠźç»“ćžśçš„ć—¶é—´é—´éš”ă€‚
         * @param {SuperMap.DataFormat} resultFormat - čż”ĺ›žçš„ç»“ćžśç±»ĺž‹ďĽ?é»?č®¤ä¸şGeoJSONďĽ‰ă€‚
         */

    }, {
        key: 'addTopologyValidatorJob',
        value: function addTopologyValidatorJob(params, callback, seconds, resultFormat) {
            var me = this,
                format = me._processFormat(resultFormat);
            var topologyValidatorJobsService = new _TopologyValidatorJobsService.TopologyValidatorJobsService(me.url, {
                proxy: me.proxy,
                withCredentials: me.withCredentials,
                serverType: me.serverType,
                eventListeners: {
                    scope: me,
                    processCompleted: callback,
                    processFailed: callback,
                    processRunning: function processRunning(job) {
                        me.topologyValidatorJobs[job.id] = job.state;
                    }
                },
                format: format
            });
            topologyValidatorJobsService.addTopologyValidatorJob(params, seconds);
        }

        /**
         * @function SuperMap.REST.ProcessingService.prototype.getTopologyValidatorJobState
         * @description čŽ·ĺŹ–ć‹“ć‰‘ćŁ€ćźĄĺ?†ćž?çš„çŠ¶ć€?ă€‚
         * @param {string} id - ć‹“ć‰‘ćŁ€ćźĄĺ?†ćž?çš„idă€‚
         * @returns {Object} ć‹“ć‰‘ćŁ€ćźĄĺ?†ćž?çš„çŠ¶ć€?
         */

    }, {
        key: 'getTopologyValidatorJobState',
        value: function getTopologyValidatorJobState(id) {
            return this.topologyValidatorJobs[id];
        }

        /**
         * @function SuperMap.REST.ProcessingService.prototype.getSummaryAttributesJobs
         * @description čŽ·ĺŹ–ĺ±žć€§ć±‡ć€»ĺ?†ćž?çš„ĺ?—čˇ¨ă€‚
         * @param {function} callback - čŻ·ć±‚ç»“ćžśçš„ĺ›žč°?ĺ‡˝ć•°ă€‚
         * @param {SuperMap.DataFormat} resultFormat - čż”ĺ›žçš„ç»“ćžśç±»ĺž‹ďĽ?é»?č®¤ä¸şGeoJSONďĽ‰ă€‚
         */

    }, {
        key: 'getSummaryAttributesJobs',
        value: function getSummaryAttributesJobs(callback, resultFormat) {
            var me = this,
                format = me._processFormat(resultFormat);
            var summaryAttributesJobsService = new _SummaryAttributesJobsService.SummaryAttributesJobsService(me.url, {
                proxy: me.proxy,
                withCredentials: me.withCredentials,
                serverType: me.serverType,
                eventListeners: {
                    scope: me,
                    processCompleted: callback,
                    processFailed: callback
                },
                format: format
            });
            summaryAttributesJobsService.getSummaryAttributesJobs();
        }

        /**
         * @function SuperMap.REST.ProcessingService.prototype.getSummaryAttributesJob
         * @description čŽ·ĺŹ–ćź?ä¸€ä¸Şĺ±žć€§ć±‡ć€»ĺ?†ćž?ă€‚
         * @param {string} id - ç©şé—´ĺ?†ćž?çš„idă€‚
         * @param {function} callback - čŻ·ć±‚ç»“ćžśçš„ĺ›žč°?ĺ‡˝ć•°ă€‚
         * @param {SuperMap.DataFormat} resultFormat - čż”ĺ›žçš„ç»“ćžśç±»ĺž‹ďĽ?é»?č®¤ä¸şGeoJSONďĽ‰ă€‚
         */

    }, {
        key: 'getSummaryAttributesJob',
        value: function getSummaryAttributesJob(id, callback, resultFormat) {
            var me = this,
                format = me._processFormat(resultFormat);
            var summaryAttributesJobsService = new _SummaryAttributesJobsService.SummaryAttributesJobsService(me.url, {
                proxy: me.proxy,
                withCredentials: me.withCredentials,
                serverType: me.serverType,
                eventListeners: {
                    scope: me,
                    processCompleted: callback,
                    processFailed: callback
                },
                format: format
            });
            summaryAttributesJobsService.getSummaryAttributesJob(id);
        }

        /**
         * @function SuperMap.REST.ProcessingService.prototype.addSummaryAttributesJob
         * @description ć–°ĺ»şä¸€ä¸Şĺ±žć€§ć±‡ć€»ĺ?†ćž?ă€‚
         * @param {SuperMap.SummaryAttributesJobsParameter} params - ĺ?›ĺ»şä¸€ä¸Şç©şé—´ĺ?†ćž?çš„čŻ·ć±‚ĺŹ‚ć•°ă€‚
         * @param {function} callback - čŻ·ć±‚ç»“ćžśçš„ĺ›žč°?ĺ‡˝ć•°ă€‚
         * @param {number} seconds - ĺĽ€ĺ§‹ĺ?›ĺ»şĺ?ŽďĽŚčŽ·ĺŹ–ĺ?›ĺ»şć??ĺŠźç»“ćžśçš„ć—¶é—´é—´éš”ă€‚
         * @param {SuperMap.DataFormat} resultFormat - čż”ĺ›žçš„ç»“ćžśç±»ĺž‹ďĽ?é»?č®¤ä¸şGeoJSONďĽ‰ă€‚
         */

    }, {
        key: 'addSummaryAttributesJob',
        value: function addSummaryAttributesJob(params, callback, seconds, resultFormat) {
            var me = this,
                format = me._processFormat(resultFormat);
            var summaryAttributesJobsService = new _SummaryAttributesJobsService.SummaryAttributesJobsService(me.url, {
                proxy: me.proxy,
                withCredentials: me.withCredentials,
                serverType: me.serverType,
                eventListeners: {
                    scope: me,
                    processCompleted: callback,
                    processFailed: callback,
                    processRunning: function processRunning(job) {
                        me.summaryAttributesJobs[job.id] = job.state;
                    }
                },
                format: format
            });
            summaryAttributesJobsService.addSummaryAttributesJob(params, seconds);
        }

        /**
         * @function SuperMap.REST.ProcessingService.prototype.getSummaryAttributesJobState
         * @description čŽ·ĺŹ–ĺ±žć€§ć±‡ć€»ĺ?†ćž?çš„çŠ¶ć€?ă€‚
         * @param {string} id - ĺ±žć€§ć±‡ć€»ĺ?†ćž?çš„idă€‚
         * @returns {Object} ĺ±žć€§ć±‡ć€»ĺ?†ćž?çš„çŠ¶ć€?
         */

    }, {
        key: 'getSummaryAttributesJobState',
        value: function getSummaryAttributesJobState(id) {
            return this.summaryAttributesJobs[id];
        }
    }, {
        key: '_processFormat',
        value: function _processFormat(resultFormat) {
            return resultFormat ? resultFormat : _REST.DataFormat.GEOJSON;
        }
    }, {
        key: '_processParams',
        value: function _processParams(params) {
            if (!params) {
                return {};
            }
            if (params.geometryQuery) {
                params.geometryQuery = this._convertPatams(params.geometryQuery);
            }
            if (params.geometryClip) {
                params.geometryClip = this._convertPatams(params.geometryClip);
            }
            return params;
        }
    }, {
        key: '_convertPatams',
        value: function _convertPatams(points) {
            var geometryParam = {};
            if (points.length < 1) {
                geometryParam = "";
            } else {
                var results = [];
                for (var i = 0; i < points.length; i++) {
                    var point = {};
                    point.x = points[i].x;
                    point.y = points[i].y;
                    results.push(point);
                }
                geometryParam.type = "REGION";
                geometryParam.points = results;
            }
            return geometryParam;
        }
    }]);

    return ProcessingService;
}(_CommonServiceBase2.CommonServiceBase);

_SuperMap.SuperMap.REST.ProcessingService = ProcessingService;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AddressMatchService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _SuperMap = __webpack_require__(0);

var _CommonServiceBase2 = __webpack_require__(6);

var _FetchRequest = __webpack_require__(7);

var _GeoCodingParameter = __webpack_require__(12);

var _GeoDecodingParameter = __webpack_require__(11);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class SuperMap.AddressMatchService
 * @category iServer AddressMatch
 * @classdesc ĺś°ĺť€ĺŚąé…ŤćśŤĺŠˇďĽŚĺŚ…ć‹¬ć­Łĺ?‘ĺŚąé…Ťĺ’ŚĺŹŤĺ?‘ĺŚąé…Ťă€‚
 * @param {string} url - ĺś°ĺť€ĺŚąé…ŤćśŤĺŠˇĺś°ĺť€ă€‚
 * @param {Object} options - ĺŹ‚ć•°ă€‚
 */
var AddressMatchService = exports.AddressMatchService = function (_CommonServiceBase) {
    _inherits(AddressMatchService, _CommonServiceBase);

    function AddressMatchService(url, options) {
        _classCallCheck(this, AddressMatchService);

        var _this = _possibleConstructorReturn(this, (AddressMatchService.__proto__ || Object.getPrototypeOf(AddressMatchService)).call(this, url, options));

        _this.CLASS_NAME = "SuperMap.AddressMatchService";
        return _this;
    }

    /**
     * @function SuperMap.AddressMatchService.prototype.destroy
     * @override
     */


    _createClass(AddressMatchService, [{
        key: 'destroy',
        value: function destroy() {
            _get(AddressMatchService.prototype.__proto__ || Object.getPrototypeOf(AddressMatchService.prototype), 'destroy', this).call(this);
        }

        /**
         * @function SuperMap.AddressMatchService.prototype.code
         * @param {string} url - ć­Łĺ?‘ĺś°ĺť€ĺŚąé…ŤćśŤĺŠˇĺś°ĺť€ă€‚
         * @param {SuperMap.GeoCodingParameter} params - ć­Łĺ?‘ĺś°ĺť€ĺŚąé…ŤćśŤĺŠˇĺŹ‚ć•°ă€‚
         */

    }, {
        key: 'code',
        value: function code(url, params) {
            if (!(params instanceof _GeoCodingParameter.GeoCodingParameter)) {
                return;
            }
            this.processAsync(url, params);
        }

        /**
         * @function SuperMap.AddressMatchService.prototype.decode
         * @param {string} url - ĺŹŤĺ?‘ĺś°ĺť€ĺŚąé…ŤćśŤĺŠˇĺś°ĺť€ă€‚
         * @param {SuperMap.GeoDecodingParameter} params - ĺŹŤĺ?‘ĺś°ĺť€ĺŚąé…ŤćśŤĺŠˇĺŹ‚ć•°ă€‚
         */

    }, {
        key: 'decode',
        value: function decode(url, params) {
            if (!(params instanceof _GeoDecodingParameter.GeoDecodingParameter)) {
                return;
            }
            this.processAsync(url, params);
        }

        /**
         * @function SuperMap.AddressMatchService.prototype.processAsync
         * @description č´źč´Łĺ°†ĺ®˘ć?·ç«Żçš„ĺŠ¨ć€?ĺ?†ć®µćśŤĺŠˇĺŹ‚ć•°äĽ é€’ĺ?°ćśŤĺŠˇç«Żă€‚
         * @param {string} url - ćśŤĺŠˇĺś°ĺť€ă€‚
         * @param {Object} params - ĺŹ‚ć•°ă€‚
         */

    }, {
        key: 'processAsync',
        value: function processAsync(url, params) {
            var me = this;
            _FetchRequest.FetchRequest.get(url, params, { proxy: me.proxy }).then(function (response) {
                return response.json();
            }).then(function (result) {
                if (result) {
                    me.serviceProcessCompleted(result);
                } else {
                    me.serviceProcessFailed(result);
                }
            }).catch(function (e) {
                me.eventListeners.processFailed({ error: e });
            });
        }

        /**
         * @function SuperMap.AddressMatchService.prototype.serviceProcessCompleted
         * @param {Object} result - ćśŤĺŠˇĺ™¨čż”ĺ›žçš„ç»“ćžśĺŻąč±ˇă€‚
         * @description ćśŤĺŠˇćµ?ç¨‹ć?Żĺ?¦ĺ®Ść??
         */

    }, {
        key: 'serviceProcessCompleted',
        value: function serviceProcessCompleted(result) {
            _get(AddressMatchService.prototype.__proto__ || Object.getPrototypeOf(AddressMatchService.prototype), 'serviceProcessCompleted', this).call(this, result);
        }

        /**
         * @function SuperMap.AddressMatchService.prototype.serviceProcessCompleted
         * @param {Object} result - ćśŤĺŠˇĺ™¨čż”ĺ›žçš„ç»“ćžśĺŻąč±ˇă€‚
         * @description ćśŤĺŠˇćµ?ç¨‹ć?Żĺ?¦ĺ¤±č´Ą
         */

    }, {
        key: 'serviceProcessFailed',
        value: function serviceProcessFailed(result) {
            _get(AddressMatchService.prototype.__proto__ || Object.getPrototypeOf(AddressMatchService.prototype), 'serviceProcessFailed', this).call(this, result);
        }
    }]);

    return AddressMatchService;
}(_CommonServiceBase2.CommonServiceBase);

_SuperMap.SuperMap.AddressMatchService = AddressMatchService;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Format = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperMap = __webpack_require__(0);

var _Util = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class SuperMap.Format
 * @classdesc čŻ»ĺ†™ĺ?„ç§Ťć ĽĺĽŹçš„ć ĽĺĽŹç±»ĺźşç±»ă€‚ĺ…¶ĺ­?ç±»ĺş”čŻĄĺŚ…ĺ?«ĺą¶ĺ®žçŽ°readĺ’Śwriteć–ąćł•ă€‚
 * @category BaseTypes Format
 * @param {Object} options - ĺŹŻé€‰ĺŹ‚ć•°ă€‚
 * @param {boolean} options.keepData - ĺ¦‚ćžśč®ľç˝®ä¸ştrueďĽŚ dataĺ±žć€§äĽšćŚ‡ĺ?‘č˘«č§Łćž?çš„ĺŻąč±ˇďĽ?äľ‹ĺ¦‚jsonć?–xmlć•°ćŤ®ĺŻąč±ˇďĽ‰ă€‚
 */
var Format = exports.Format = function () {
    function Format(options) {
        _classCallCheck(this, Format);

        /**
         * @member {Object} SuperMap.Format.prototype.data 
         * @description ĺ˝“ <keepData> ĺ±žć€§č®ľç˝®ä¸ştrueďĽŚčż™ć?ŻäĽ é€’ç»™<read>ć“Ťä˝śçš„č¦?č˘«č§Łćž?çš„ĺ­—ç¬¦ä¸˛ă€‚
         */
        this.data = null;

        /**
         * APIProperty: keepData
         * @member {Object} SuperMap.Format.prototype.keepData
         * @description äżťćŚ?ćś€čż‘čŻ»ĺ?°çš„ć•°ćŤ®çš„ĺĽ•ç”¨ďĽ?é€ščż‡ <data> ĺ±žć€§ďĽ‰ă€‚é»?č®¤ĺ€Ľć?Żfalseă€‚
         */
        this.keepData = false;

        _Util.Util.extend(this, options);
        /**
         * @member {Object} SuperMap.Format.prototype.options
         * @description ĺŹŻé€‰ĺŹ‚ć•°ă€‚
         */
        this.options = options;

        this.CLASS_NAME = "SuperMap.Format";
    }

    /**
     * @function SuperMap.Format.prototype.destroy
     * @description é”€ćŻ?čŻĄć ĽĺĽŹç±»ďĽŚé‡Šć”ľç›¸ĺ…łčµ„ćş?ă€‚
     */


    _createClass(Format, [{
        key: 'destroy',
        value: function destroy() {}
        //ç”¨ćťĄé”€ćŻ?čŻĄć ĽĺĽŹç±»ďĽŚé‡Šć”ľç›¸ĺ…łčµ„ćş?


        /**
         * @function SuperMap.Format.prototype.read
         * @description ćťĄä»Žĺ­—ç¬¦ä¸˛ä¸­čŻ»ĺŹ–ć•°ćŤ®ă€‚
         * @param {string} data - čŻ»ĺŹ–çš„ć•°ćŤ®ă€‚
         */

    }, {
        key: 'read',
        value: function read(data) {} // eslint-disable-line no-unused-vars
        //ç”¨ćťĄä»Žĺ­—ç¬¦ä¸˛ä¸­čŻ»ĺŹ–ć•°ćŤ®


        /**
         * @function SuperMap.Format.prototype.write
         * @description ĺ°†ĺŻąč±ˇĺ†™ć??ĺ­—ç¬¦ä¸˛ă€‚
         * @param {Object} object - ĺŹŻĺşŹĺ?—ĺŚ–çš„ĺŻąč±ˇă€‚
         * @return {string} ĺŻąč±ˇč˘«ĺ†™ć??ĺ­—ç¬¦ä¸˛ă€‚
         */

    }, {
        key: 'write',
        value: function write(object) {// eslint-disable-line no-unused-vars
            //ç”¨ćťĄĺ†™ĺ­—ç¬¦ä¸˛
        }
    }]);

    return Format;
}();

_SuperMap.SuperMap.Format = Format;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.JSONFormat = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperMap = __webpack_require__(0);

var _Format2 = __webpack_require__(35);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class SuperMap.Format.JSON
 * @classdesc ĺ®‰ĺ…¨çš„čŻ»ĺ†™JSONçš„č§Łćž?ç±»ă€‚ä˝żç”¨<SuperMap.Format.JSON> ćž„é€ ĺ‡˝ć•°ĺ?›ĺ»şć–°ĺ®žäľ‹ă€‚
 * @category BaseTypes Format
 * @extends SuperMap.Format
 */
var JSONFormat = exports.JSONFormat = function (_Format) {
    _inherits(JSONFormat, _Format);

    function JSONFormat(options) {
        _classCallCheck(this, JSONFormat);

        /**
         * @member {string} SuperMap.Format.JSON.prototype.indent
         * @description ç”¨äşŽć ĽĺĽŹĺŚ–čľ“ĺ‡şďĽŚindentĺ­—ç¬¦ä¸˛äĽšĺś¨ćŻŹć¬ˇçĽ©čż›çš„ć—¶ĺ€™ä˝żç”¨ä¸€ć¬ˇă€‚
         */
        var _this = _possibleConstructorReturn(this, (JSONFormat.__proto__ || Object.getPrototypeOf(JSONFormat)).call(this, options));

        _this.indent = "    ";

        /**
         * @member {string} SuperMap.Format.JSON.prototype.space
         * @description ç”¨äşŽć ĽĺĽŹĺŚ–čľ“ĺ‡şďĽŚspaceĺ­—ç¬¦ä¸˛äĽšĺś¨ĺ?Ťĺ€ĽĺŻąçš„":"ĺ?Žčľąć·»ĺŠ ă€‚
         */
        _this.space = " ";

        /**
         * @member {string} SuperMap.Format.JSON.prototype.newline
         * @description ç”¨äşŽć ĽĺĽŹĺŚ–čľ“ĺ‡ş, newlineĺ­—ç¬¦ä¸˛äĽšç”¨ĺś¨ćŻŹä¸€ä¸Şĺ?Ťĺ€ĽĺŻąć?–ć•°ç»„éˇąćś«ĺ°ľă€‚
         */
        _this.newline = "\n";

        /**
         * @member {integer} SuperMap.Format.JSON.prototype.level 
         * @description ç”¨äşŽć ĽĺĽŹĺŚ–čľ“ĺ‡ş, čˇ¨ç¤şçš„ć?ŻçĽ©čż›çş§ĺ?«ă€‚
         */
        _this.level = 0;

        /**
         * @member {boolean} SuperMap.Format.JSON.prototype.pretty 
         * @description ć?Żĺ?¦ĺś¨ĺşŹĺ?—ĺŚ–çš„ć—¶ĺ€™ä˝żç”¨é˘ťĺ¤–çš„ç©şć ĽćŽ§ĺ?¶ç»“ćž„ă€‚ĺś¨writeć–ąćł•ä¸­ä˝żç”¨ďĽŚé»?č®¤ĺ€Ľä¸şfalseă€‚
         */
        _this.pretty = false;

        /**
         * @member {boolean} SuperMap.Format.JSON.prototype.nativeJSON 
         * @description ĺ?¤ć–­ćµŹč§?ĺ™¨ć?Żĺ?¦ĺŽźç”źć”ŻćŚ?JSONć ĽĺĽŹć•°ćŤ®ă€‚
         */
        _this.nativeJSON = function () {
            return !!(window.JSON && typeof JSON.parse === "function" && typeof JSON.stringify === "function");
        }();

        _this.CLASS_NAME = "SuperMap.Format.JSON";
        /**
         * @member SuperMap.Format.JSON.prototype.serialize
         * @description ćŹ?äľ›ä¸€äş›ç±»ĺž‹ĺŻąč±ˇč˝¬JSONĺ­—ç¬¦ä¸˛çš„ć–ąćł•ă€‚
         */
        _this.serialize = {
            /**
             * @function SuperMap.Format.JSON.serialize.object
             * @description ćŠŠĺŻąč±ˇč˝¬ćŤ˘ä¸şJSONĺ­—ç¬¦ä¸˛ă€‚
             * @param {Object} object - ĺŹŻĺşŹĺ?—ĺŚ–çš„ĺŻąč±ˇă€‚
             * @return {string} JSONĺ­—ç¬¦ä¸˛ă€‚
             */
            'object': function object(_object) {
                // three special objects that we want to treat differently
                if (_object == null) {
                    return "null";
                }
                if (_object.constructor === Date) {
                    return this.serialize.date.apply(this, [_object]);
                }
                if (_object.constructor === Array) {
                    return this.serialize.array.apply(this, [_object]);
                }
                var pieces = ['{'];
                this.level += 1;
                var key, keyJSON, valueJSON;

                var addComma = false;
                for (key in _object) {
                    if (_object.hasOwnProperty(key)) {
                        // recursive calls need to allow for sub-classing
                        keyJSON = this.write.apply(this, [key, this.pretty]);
                        valueJSON = this.write.apply(this, [_object[key], this.pretty]);
                        if (keyJSON != null && valueJSON != null) {
                            if (addComma) {
                                pieces.push(',');
                            }
                            pieces.push(this.writeNewline(), this.writeIndent(), keyJSON, ':', this.writeSpace(), valueJSON);
                            addComma = true;
                        }
                    }
                }

                this.level -= 1;
                pieces.push(this.writeNewline(), this.writeIndent(), '}');
                return pieces.join('');
            },

            /**
             * @function SuperMap.Format.JSON.serialize.array
             * @description ćŠŠć•°ç»„č˝¬ćŤ˘ć??JSONĺ­—ç¬¦ä¸˛ă€‚
             * @param {Array} array - ĺŹŻĺşŹĺ?—ĺŚ–çš„ć•°ç»„ă€‚
             * @return {string} JSONĺ­—ç¬¦ä¸˛ă€‚
             */
            'array': function array(_array) {
                var json;
                var pieces = ['['];
                this.level += 1;

                for (var i = 0, len = _array.length; i < len; ++i) {
                    // recursive calls need to allow for sub-classing
                    json = this.write.apply(this, [_array[i], this.pretty]);
                    if (json != null) {
                        if (i > 0) {
                            pieces.push(',');
                        }
                        pieces.push(this.writeNewline(), this.writeIndent(), json);
                    }
                }

                this.level -= 1;
                pieces.push(this.writeNewline(), this.writeIndent(), ']');
                return pieces.join('');
            },

            /**
             * @function SuperMap.Format.JSON.serialize.string
             * @description ćŠŠĺ­—ç¬¦ä¸˛č˝¬ćŤ˘ć??JSONĺ­—ç¬¦ä¸˛ă€‚
             * @param {string} string - ĺŹŻĺşŹĺ?—ĺŚ–çš„ĺ­—ç¬¦ä¸˛ă€‚
             * @return {string} JSONĺ­—ç¬¦ä¸˛ă€‚
             */
            'string': function string(_string) {
                // If the string contains no control characters, no quote characters, and no
                // backslash characters, then we can simply slap some quotes around it.
                // Otherwise we must also replace the offending characters with safe
                // sequences.
                var m = {
                    '\b': '\\b',
                    '\t': '\\t',
                    '\n': '\\n',
                    '\f': '\\f',
                    '\r': '\\r',
                    '"': '\\"',
                    '\\': '\\\\'
                };
                /*eslint-disable no-control-regex*/
                if (/["\\\x00-\x1f]/.test(_string)) {
                    return '"' + _string.replace(/([\x00-\x1f\\"])/g, function (a, b) {
                        var c = m[b];
                        if (c) {
                            return c;
                        }
                        c = b.charCodeAt();
                        return '\\u00' + Math.floor(c / 16).toString(16) + (c % 16).toString(16);
                    }) + '"';
                }
                return '"' + _string + '"';
            },

            /**
             * @function SuperMap.Format.JSON.serialize.number
             * @description ćŠŠć•°ĺ­—č˝¬ćŤ˘ć??JSONĺ­—ç¬¦ä¸˛ă€‚
             * @param {number} number - ĺŹŻĺşŹĺ?—ĺŚ–çš„ć•°ĺ­—ă€‚
             * @return {string} JSONĺ­—ç¬¦ä¸˛ă€‚
             */
            'number': function number(_number) {
                return isFinite(_number) ? String(_number) : "null";
            },

            /**
             * @function SuperMap.Format.JSON.serialize.boolean
             * @description Transform a boolean into a JSON string.
             * @param {boolean} bool - The boolean to be serialized.
             * @return {string} A JSON string representing the boolean.
             */
            'boolean': function boolean(bool) {
                return String(bool);
            },

            /**
             * @function SuperMap.Format.JSON.serialize.object
             * @description ĺ°†ć—ĄćśźĺŻąč±ˇč˝¬ćŤ˘ć??JSONĺ­—ç¬¦ä¸˛ă€‚
             * @param {Date} date - ĺŹŻĺşŹĺ?—ĺŚ–çš„ć—ĄćśźĺŻąč±ˇă€‚
             * @return {string} JSONĺ­—ç¬¦ä¸˛ă€‚
             */
            'date': function date(_date) {
                function format(number) {
                    // Format integers to have at least two digits.
                    return number < 10 ? '0' + number : number;
                }

                return '"' + _date.getFullYear() + '-' + format(_date.getMonth() + 1) + '-' + format(_date.getDate()) + 'T' + format(_date.getHours()) + ':' + format(_date.getMinutes()) + ':' + format(_date.getSeconds()) + '"';
            }
        };
        return _this;
    }

    /**
     * @function SuperMap.Format.JSON.prototype.read
     * @description ĺ°†ä¸€ä¸Şç¬¦ĺ??jsonç»“ćž„çš„ĺ­—ç¬¦ä¸˛čż›čˇŚč§Łćž?ă€‚
     * @param {string} json - ç¬¦ĺ??jsonç»“ćž„çš„ĺ­—ç¬¦ä¸˛ă€‚
     * @param {function} filter - čż‡ć»¤ć–ąćł•ďĽŚćś€ç»?ç»“ćžśçš„ćŻŹä¸€ä¸Şé”®ĺ€ĽĺŻąé?˝äĽšč°?ç”¨čŻĄčż‡ć»¤ć–ąćł•ďĽŚĺą¶ĺś¨ĺŻąĺş”çš„ĺ€Ľçš„ä˝Ťç˝®ć›żćŤ˘ć??čŻĄć–ąćł•čż”ĺ›žçš„ĺ€Ľă€‚
     * @return {Object} ĺŻąč±ˇďĽŚć•°ç»„ďĽŚĺ­—ç¬¦ä¸˛ć?–ć•°ĺ­—ă€‚
     */


    _createClass(JSONFormat, [{
        key: 'read',
        value: function read(json, filter) {
            var object;
            if (this.nativeJSON) {
                try {
                    object = JSON.parse(json, filter);
                } catch (e) {
                    // Fall through if the regexp test fails.
                }
            }

            if (this.keepData) {
                this.data = object;
            }

            return object;
        }

        /**
         * @function SuperMap.Format.JSON.prototype.write
         * @description ĺşŹĺ?—ĺŚ–ä¸€ä¸ŞĺŻąč±ˇĺ?°ä¸€ä¸Şç¬¦ĺ??JSONć ĽĺĽŹçš„ĺ­—ç¬¦ä¸˛ă€‚
         * @param {(object|string|Array|number|boolean)} value - éś€č¦?č˘«ĺşŹĺ?—ĺŚ–çš„ĺŻąč±ˇďĽŚć•°ç»„ďĽŚĺ­—ç¬¦ä¸˛ďĽŚć•°ĺ­—ďĽŚĺ¸?ĺ°”ĺ€Ľă€‚
         * @param {boolean} pretty 
         * @return {string} ç¬¦ĺ??JSONć ĽĺĽŹçš„ĺ­—ç¬¦ä¸˛ă€‚
         *
         */

    }, {
        key: 'write',
        value: function write(value, pretty) {
            this.pretty = !!pretty;
            var json = null;
            var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
            if (this.serialize[type]) {
                try {
                    json = !this.pretty && this.nativeJSON ? JSON.stringify(value) : this.serialize[type].apply(this, [value]);
                } catch (err) {
                    //SuperMap.Console.error("Trouble serializing: " + err);
                }
            }
            return json;
        }

        /**
         * @function SuperMap.Format.JSON.prototype.writeIndent
         * @description ć ąćŤ®çĽ©čż›çş§ĺ?«čľ“ĺ‡şä¸€ä¸ŞçĽ©čż›ĺ­—ç¬¦ä¸˛ă€‚
         * @return {string} ä¸€ä¸Şé€‚ĺ˝“çš„çĽ©čż›ĺ­—ç¬¦ä¸˛ă€‚
         */

    }, {
        key: 'writeIndent',
        value: function writeIndent() {
            var pieces = [];
            if (this.pretty) {
                for (var i = 0; i < this.level; ++i) {
                    pieces.push(this.indent);
                }
            }
            return pieces.join('');
        }

        /**
         * @function SuperMap.Format.JSON.prototype.writeNewline
         * @description ĺś¨ć ĽĺĽŹĺŚ–čľ“ĺ‡şć¨ˇĺĽŹć?…ĺ†µä¸‹čľ“ĺ‡şä»Łčˇ¨ć–°ä¸€čˇŚçš„ĺ­—ç¬¦ä¸˛ă€‚
         * @return {string} ä»Łčˇ¨ć–°çš„ä¸€čˇŚçš„ĺ­—ç¬¦ä¸˛ă€‚
         */

    }, {
        key: 'writeNewline',
        value: function writeNewline() {
            return this.pretty ? this.newline : '';
        }

        /**
         * @function SuperMap.Format.JSON.prototype.writeSpace
         * @description ĺś¨ć ĽĺĽŹĺŚ–čľ“ĺ‡şć¨ˇĺĽŹć?…ĺ†µä¸‹čľ“ĺ‡şä¸€ä¸Şä»Łčˇ¨ç©şć Ľçš„ĺ­—ç¬¦ä¸˛ă€‚
         * @return {string} A space.
         */

    }, {
        key: 'writeSpace',
        value: function writeSpace() {
            return this.pretty ? this.space : '';
        }
    }]);

    return JSONFormat;
}(_Format2.Format);

_SuperMap.SuperMap.Format.JSON = JSONFormat;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Credential = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperMap = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class SuperMap.Credential
 * @classdesc SuperMapçš„ĺ®‰ĺ…¨čŻ?äą¦ç±»ďĽŚĺ…¶ä¸­ĺŚ…ć‹¬tokenç­‰ĺ®‰ĺ…¨éŞŚčŻ?äżˇć?Żă€‚<br>
 * éś€č¦?ä˝żç”¨ç”¨ć?·ĺ?Ťĺ’ŚĺŻ†ç ?ĺś¨ďĽš"http://localhost:8090/iserver/services/security/tokens"ä¸‹ç”łčŻ·value <br>
 * čŽ·ĺľ—ĺ˝˘ĺ¦‚ďĽš"2OMwGmcNlrP2ixqv1Mk4BuQMybOGfLOrljruX6VcYMDQKc58Sl9nMHsqQaqeBx44jRvKSjkmpZKK1L596y7skQ.."çš„value<br>
 * ç›®ĺ‰Ťć”ŻćŚ?çš„ĺŠźč?˝ĺŚ…ć‹¬ďĽšĺś°ĺ›ľćśŤĺŠˇă€?ä¸“é˘?ĺ›ľă€?é‡Źç®—ă€?ćźĄčŻ˘ă€?ĺ…¬äş¤ćŤ˘äą?ă€?ç©şé—´ĺ?†ćž?ă€?ç˝‘ç»śĺ?†ćž?ďĽŚä¸Ťć”ŻćŚ?č˝®čŻ˘ĺŠźč?˝ă€‚
 * @param {string} value - č®żé—®ĺŹ—ĺ®‰ĺ…¨é™?ĺ?¶çš„ćśŤĺŠˇć—¶ç”¨äşŽé€ščż‡ĺ®‰ĺ…¨č®¤čŻ?çš„éŞŚčŻ?äżˇć?Żă€‚
 * @param {string} name - éŞŚčŻ?äżˇć?Żĺ‰ŤçĽ€ďĽŚname=valueé?¨ĺ?†çš„nameé?¨ĺ?†ďĽŚé»?č®¤ä¸şâ€śtokenâ€ťă€‚
 * @example
 * var pixcel = new SuperMap.Credential("valueString","token");
 * pixcel.destroy();
 */
var Credential = exports.Credential = function () {
    function Credential(value, name) {
        _classCallCheck(this, Credential);

        /**
         * @member {string} SuperMap.Bounds.prototype.value
         * @description č®żé—®ĺŹ—ĺ®‰ĺ…¨é™?ĺ?¶çš„ćśŤĺŠˇć—¶ç”¨äşŽé€ščż‡ĺ®‰ĺ…¨č®¤čŻ?çš„éŞŚčŻ?äżˇć?Żă€‚
         */
        this.value = value ? value : "";

        /**
         * @member {string} [SuperMap.Bounds.prototype.name="token"]
         * @description éŞŚčŻ?äżˇć?Żĺ‰ŤçĽ€ďĽŚname=valueé?¨ĺ?†çš„nameé?¨ĺ?†ă€‚
         */
        this.name = name ? name : "token";
        this.CLASS_NAME = "SuperMap.Credential";
    }

    /**
     * @function SuperMap.Credential.prototype.getUrlParameters
     * @example
     * var credential = new SuperMap.Credential("valueString","token");
     * //čż™é‡Ś str = "token=valueString";
     * var str = credential.getUrlParameters();
     * @returns {string} čż”ĺ›žĺ®‰ĺ…¨äżˇć?Żç»„ć??çš„urlç‰‡ć®µă€‚
     */


    _createClass(Credential, [{
        key: "getUrlParameters",
        value: function getUrlParameters() {
            //ĺ˝“éś€č¦?ĺ…¶ä»–ĺ®‰ĺ…¨äżˇć?Żçš„ć—¶ĺ€™ďĽŚĺ?™éś€č¦?return this.name + "=" + this.value + "&" + "...";çš„ĺ˝˘ĺĽŹć·»ĺŠ ă€‚
            return this.name + "=" + this.value;
        }

        /**
         * @function SuperMap.Bounds.prototype.getValue
         * @description čŽ·ĺŹ–value
         * @example
         * var credential = new SuperMap.Credential("2OMwGmcNlrP2ixqv1Mk4BuQMybOGfLOrljruX6VcYMDQKc58Sl9nMHsqQaqeBx44jRvKSjkmpZKK1L596y7skQ..","token");
         * //čż™é‡Ś str = "2OMwGmcNlrP2ixqv1Mk4BuQMybOGfLOrljruX6VcYMDQKc58Sl9nMHsqQaqeBx44jRvKSjkmpZKK1L596y7skQ..";
         * var str = credential.getValue();
         * @returns {string} čż”ĺ›žvalueĺ­—ç¬¦ä¸˛ďĽŚĺś¨iServerćśŤĺŠˇä¸‹čŻĄvalueĺ€ĽĺŤłä¸ştokenĺ€Ľă€‚
         */

    }, {
        key: "getValue",
        value: function getValue() {
            return this.value;
        }

        /**
         *
         * @function SuperMap.Credential.prototype.destroy
         * @description é”€ćŻ?ć­¤ĺŻąč±ˇă€‚é”€ćŻ?ĺ?Žć­¤ĺŻąč±ˇçš„ć‰€ćś‰ĺ±žć€§ä¸şnullďĽŚč€Śä¸Ťć?Żĺ?ťĺ§‹ĺ€Ľă€‚
         * @example
         * var credential = new SuperMap.Credential("valueString","token");
         * credential.destroy();
         */

    }, {
        key: "destroy",
        value: function destroy() {
            this.value = null;
            this.name = null;
        }
    }]);

    return Credential;
}();

/**
 * @member SuperMap.Credential.CREDENTIAL -{SuperMap.Credential}
 * @description čż™ä¸ŞĺŻąč±ˇäżťĺ­?ä¸€ä¸Şĺ®‰ĺ…¨ç±»çš„ĺ®žäľ‹ďĽŚĺś¨ćśŤĺŠˇç«Żéś€č¦?ĺ®‰ĺ…¨éŞŚčŻ?çš„ć—¶ĺ€™ĺż…éˇ»čż›čˇŚč®ľç˝®ă€‚
 * @constant
 * @example
 * ä»Łç ?ĺ®žäľ‹:
 *  // ĺ˝“iServerĺ?Żç”¨ćśŤĺŠˇĺ®‰ĺ…¨çš„ć—¶ĺ€™ďĽŚä¸‹čľąçš„ä»Łç ?ć?Żĺż…éˇ»çš„ă€‚ĺ®‰ĺ…¨čŻ?äą¦ç±»č?˝ĺ¤źćŽĄć”¶ä¸€ä¸Şvalueĺ’Śä¸€ä¸ŞnameĺŹ‚ć•°ă€‚
 *  var value = "(ä»ĄiServerä¸şäľ‹ďĽŚčż™é‡Ść?Żç”łčŻ·çš„tokenĺ€Ľ)";
 *  var name = "token";
 *  // é»?č®¤nameĺŹ‚ć•°ä¸ştokenďĽŚć‰€ä»Ąĺ˝“ä˝żç”¨iServerćśŤĺŠˇçš„ć—¶ĺ€™ĺŹŻä»Ąä¸Ťčż›čˇŚč®ľç˝®ă€‚
 *  SuperMap.Credential.CREDENTIAL = new SuperMap.Credential(value, name);
 *
 */

Credential.CREDENTIAL = null;
_SuperMap.SuperMap.Credential = Credential;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AddressMatchService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperMap = __webpack_require__(5);

var _CommonServiceBase2 = __webpack_require__(6);

var _AddressMatchService = __webpack_require__(34);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class SuperMap.REST.AddressMatchService
 * @category  iServer AddressMatch
 * @classdesc ĺś°ĺť€ĺŚąé…ŤćśŤĺŠˇďĽŚĺŚ…ć‹¬ć­Łĺ?‘ĺŚąé…Ťĺ’ŚĺŹŤĺ?‘ĺŚąé…Ťă€‚
 * @extends {SuperMap.REST.CommonServiceBase}
 * @param {string} url - ćśŤĺŠˇĺś°ĺť€
 * @param {Object} options - ĺŹ‚ć•°
 */
var AddressMatchService = exports.AddressMatchService = function (_CommonServiceBase) {
    _inherits(AddressMatchService, _CommonServiceBase);

    function AddressMatchService(url, options) {
        _classCallCheck(this, AddressMatchService);

        var _this = _possibleConstructorReturn(this, (AddressMatchService.__proto__ || Object.getPrototypeOf(AddressMatchService)).call(this, url, options));

        _this.CLASS_NAME = "SuperMap.REST.AddressMatchService";
        return _this;
    }

    /**
     * @function SuperMap.REST.AddressMatchService.prototype.code
     * @description ć­Łĺ?‘ĺŚąé…Ť
     * @param {SuperMap.GeoCodingParameter} params - ć­Łĺ?‘ĺŚąé…ŤĺŹ‚ć•°
     * @param {function} callback - ĺ›žč°?ĺ‡˝ć•°
     */


    _createClass(AddressMatchService, [{
        key: 'code',
        value: function code(params, callback) {
            var me = this;
            var addressMatchService = new _AddressMatchService.AddressMatchService(me.url, {
                proxy: me.proxy,
                withCredentials: me.withCredentials,
                serverType: me.serverType,
                eventListeners: {
                    scope: me,
                    processCompleted: callback,
                    processFailed: callback
                }
            });
            addressMatchService.code(me.url + '/geocoding', params);
        }

        /**
         * @function SuperMap.REST.AddressMatchService.prototype.decode
         * @description ĺŹŤĺ?‘ĺŚąé…Ť
         * @param {SuperMap.GeoDeCodingParameter} params -  ĺŹŤĺ?‘ĺŚąé…ŤĺŹ‚ć•°
         * @param {function} callback - ĺ›žč°?ĺ‡˝ć•°
         */

    }, {
        key: 'decode',
        value: function decode(params, callback) {
            var me = this;
            var addressMatchService = new _AddressMatchService.AddressMatchService(me.url, {
                proxy: me.proxy,
                withCredentials: me.withCredentials,
                serverType: me.serverType,
                eventListeners: {
                    scope: me,
                    processCompleted: callback,
                    processFailed: callback
                }
            });
            addressMatchService.decode(me.url + '/geodecoding', params);
        }
    }]);

    return AddressMatchService;
}(_CommonServiceBase2.CommonServiceBase);

_SuperMap.SuperMap.REST.AddressMatchService = AddressMatchService;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AddressMatchService = __webpack_require__(38);

Object.defineProperty(exports, 'AddressMatchService', {
  enumerable: true,
  get: function get() {
    return _AddressMatchService.AddressMatchService;
  }
});

var _ProcessingService = __webpack_require__(33);

Object.defineProperty(exports, 'ProcessingService', {
  enumerable: true,
  get: function get() {
    return _ProcessingService.ProcessingService;
  }
});

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MapVRenderer = __webpack_require__(10);

Object.defineProperty(exports, 'MapVRenderer', {
  enumerable: true,
  get: function get() {
    return _MapVRenderer.MapVRenderer;
  }
});

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = function(){try{return mapv}catch(e){return {}}}();

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MapVLayer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _SuperMap = __webpack_require__(5);

var _MapVRenderer = __webpack_require__(10);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class SuperMap.Layer.MapVLayer
 * @category  Visualization MapV
 * @classdesc MapVĺ›ľĺ±‚ă€‚
 * @extends SuperMap.Layer
 * @param name - {string} ĺ›ľĺ±‚ĺ?Ť
 * @param options  - {Object} ĺŹŻé€‰ĺŹ‚ć•°ďĽŚćś‰ĺ¦‚ä¸‹ä¸¤ä¸ŞĺŹ‚ć•°ďĽš<br>
 *        dataSet - {mapv.DataSet} mapv çš„dataSetĺŻąč±ˇ <br>
 *        options - {Object} mapv ç»?ĺ›ľéŁŽć Ľé…Ťç˝®äżˇć?Ż
 */
var MapVLayer = exports.MapVLayer = function (_SuperMap$Layer) {
    _inherits(MapVLayer, _SuperMap$Layer);

    /*
     * @function SuperMap.Layer.MapVLayer.prototype.
     * @description
     * MapVć”ŻćŚ?webglĺ’Ść™®é€šcanvasć¸˛ćź“.
     * ä˝†ç›®ĺ‰Ťćś¬ĺ›ľĺ±‚webglć¸˛ćź“ä¸Ťč?˝ć­Łçˇ®ć?ľç¤şďĽŚĺľ…č§Łĺ†ł
     *
     * @param name
     * @param options ćś‰ä¸¤ä¸ŞĺŹ‚ć•°<br>
     *  * dataSet: mapv çš„dataSetĺŻąč±ˇ
     *  * options: mapv ç»?ĺ›ľéŁŽć Ľé…Ťç˝®äżˇć?Ż
     */
    function MapVLayer(name, options) {
        _classCallCheck(this, MapVLayer);

        /**
         * @member SuperMap.Layer.MapVLayer.prototype.dataSet -{mapv.DataSet}
         * @description mapv dataset ĺŻąč±ˇ
         */
        var _this = _possibleConstructorReturn(this, (MapVLayer.__proto__ || Object.getPrototypeOf(MapVLayer)).call(this, name, options));

        _this.dataSet = null;

        /**
         * @member SuperMap.Layer.MapVLayer.prototype.options -{Object}
         * @description mapv ç»?ĺ›ľéŁŽć Ľé…Ťç˝®äżˇć?Ż
         */
        _this.options = null;

        /**
         * @member SuperMap.Layer.MapVLayer.prototype.supported -{boolean}
         * @description ĺ˝“ĺ‰ŤćµŹč§?ĺ™¨ć?Żĺ?¦ć”ŻćŚ?canvasç»?ĺ?¶ďĽŚé»?č®¤ä¸şfalseă€‚ĺ†łĺ®šäş†MapVĺ›ľć?Żĺ?¦ĺŹŻç”¨ďĽŚĺ†…é?¨ĺ?¤ć–­ä˝żç”¨ă€‚
         */
        _this.supported = false;

        /**
         * @member SuperMap.Layer.MapVLayer.prototype.canvas {Canvas}
         * @description MapVĺ›ľä¸»ç»?ĺ?¶éť˘ćťżă€‚
         */
        _this.canvas = null;

        /**
         * @private
         * @member SuperMap.Layer.MapVLayer.prototype.canvasContext -{CanvasContext}
         * @description MapVĺ›ľä¸»ç»?ĺ?¶ĺŻąč±ˇă€‚
         */
        _this.canvasContext = null;

        if (options) {
            _SuperMap.SuperMap.Util.extend(_this, options);
        }
        //MapVĺ›ľč¦?ć±‚ä˝żç”¨canvasç»?ĺ?¶ďĽŚĺ?¤ć–­ć?Żĺ?¦ć”ŻćŚ?
        _this.canvas = document.createElement("canvas");
        if (!_this.canvas.getContext) {
            return _possibleConstructorReturn(_this);
        }
        _this.supported = true;
        //ćž„ĺ»şç»?ĺ›ľéť˘ćťż
        _this.canvas.style.position = "absolute";
        _this.canvas.style.top = 0 + "px";
        _this.canvas.style.left = 0 + "px";
        _this.div.appendChild(_this.canvas);
        var context = _this.options && _this.options.context || "2d";
        _this.canvasContext = _this.canvas.getContext(context);
        var global$2 = typeof window === 'undefined' ? {} : window;
        var devicePixelRatio = _this.devicePixelRatio = global$2.devicePixelRatio;
        if (_this.options.context == '2d') {
            _this.canvasContext.scale(devicePixelRatio, devicePixelRatio);
        }
        _this.attribution = "Â© 2017 ç™ľĺş¦ <a href='http://mapv.baidu.com' target='_blank'>MapV</a> with <span>Â© <a target='_blank' href='http://iclient.supermap.io' " + "style='color: #08c;text-decoration: none;'>SuperMap iClient</a></span>";

        _this.CLASS_NAME = "SuperMap.Layer.MapVLayer";
        return _this;
    }

    /**
     * @function SuperMap.Layer.MapVLayer.prototype.destroy
     * @override
     */


    _createClass(MapVLayer, [{
        key: 'destroy',
        value: function destroy() {
            this.dataSet = null;
            this.options = null;
            this.renderer = null;
            this.supported = null;
            this.canvas = null;
            this.canvasContext = null;
            this.maxWidth = null;
            this.maxHeight = null;
            _get(MapVLayer.prototype.__proto__ || Object.getPrototypeOf(MapVLayer.prototype), 'destroy', this).call(this);
        }

        /**
         * @function SuperMap.Layer.MapVLayer.prototype.addData
         * @description čż˝ĺŠ ć•°ćŤ®
         * @param dataSet - {mapv.DataSet} mapvć•°ćŤ®é›†
         * @param options - {Object} mapvç»?ĺ›ľĺŹ‚ć•°
         */

    }, {
        key: 'addData',
        value: function addData(dataSet, options) {
            this.renderer && this.renderer.addData(dataSet, options);
        }

        /**
         * @function SuperMap.Layer.MapVLayer.prototype.
         * @description č®ľç˝®ć•°ćŤ®
         * @param dataSet {mapv.DataSet} mapvć•°ćŤ®é›†
         * @param options {Object} mapvç»?ĺ›ľĺŹ‚ć•°
         */

    }, {
        key: 'setData',
        value: function setData(dataSet, options) {
            this.renderer && this.renderer.setData(dataSet, options);
        }

        /**
         * @function SuperMap.Layer.MapVLayer.prototype.getData
         * @description čŽ·ĺŹ–ć•°ćŤ®
         * @return {mapv.DataSet} mapvć•°ćŤ®é›†
         */

    }, {
        key: 'getData',
        value: function getData() {
            if (this.renderer) {
                this.dataSet = this.renderer.getData();
            }
            return this.dataSet;
        }

        /**
         * @function SuperMap.Layer.MapVLayer.prototype.removeData
         * @description ĺ? é™¤ç¬¦ĺ??čż‡ć»¤ćťˇä»¶çš„ć•°ćŤ®
         * @param filter - {function} čż‡ć»¤ćťˇä»¶ă€‚ćťˇä»¶ĺŹ‚ć•°ä¸şć•°ćŤ®éˇąďĽŚčż”ĺ›žĺ€Ľä¸ştrue,čˇ¨ç¤şĺ? é™¤čŻĄĺ…?ç´ ďĽ›ĺ?¦ĺ?™čˇ¨ç¤şä¸Ťĺ? é™¤
         * @example
         *  filter=function(data){
         *    if(data.id=="1"){
         *      return true
         *    }
         *    return false;
         *  }
         */

    }, {
        key: 'removeData',
        value: function removeData(filter) {
            this.renderer && this.renderer.removeData(filter);
        }

        /**
         * @function SuperMap.Layer.MapVLayer.prototype.clearData
         * @description ć¸…é™¤ć•°ćŤ®
         */

    }, {
        key: 'clearData',
        value: function clearData() {
            this.renderer.clearData();
        }

        /**
         * @function SuperMap.Layer.MapVLayer.prototype.setMap
         * @description ĺ›ľĺ±‚ĺ·˛ç»Źć·»ĺŠ ĺ?°Mapä¸­ă€‚
         *              ĺ¦‚ćžśĺ˝“ĺ‰ŤćµŹč§?ĺ™¨ć”ŻćŚ?canvasďĽŚĺ?™ĺĽ€ĺ§‹ć¸˛ćź“č¦?ç´ ďĽ›ĺ¦‚ćžśä¸Ťć”ŻćŚ?ĺ?™ç§»é™¤ĺ›ľĺ±‚ă€‚
         * @param map - {SuperMap.Map} éś€č¦?ç»‘ĺ®šçš„mapĺŻąč±ˇ
         */

    }, {
        key: 'setMap',
        value: function setMap(map) {
            _get(MapVLayer.prototype.__proto__ || Object.getPrototypeOf(MapVLayer.prototype), 'setMap', this).call(this, map);
            this.renderer = new _MapVRenderer.MapVRenderer(map, this, this.dataSet, this.options);
            if (!this.supported) {
                this.map.removeLayer(this);
            } else {
                this.redraw();
            }
        }

        /**
         * @function SuperMap.Layer.MapVLayer.prototype.moveTo
         * @description é‡Ťç˝®ĺ˝“ĺ‰ŤMapVĺ›ľĺ±‚çš„divďĽŚĺ†Ťä¸€ć¬ˇä¸ŽMapćŽ§ä»¶äżťćŚ?ä¸€č‡´ă€‚
         *              äż®ć”ąĺ˝“ĺ‰Ťć?ľç¤şčŚ?ĺ›´ďĽŚĺ˝“ĺąłç§»ć?–č€…çĽ©ć”ľç»“ćťźĺ?ŽĺĽ€ĺ§‹é‡Ťç»?MapVĺ›ľçš„ć¸˛ćź“ć•?ćžśă€‚
         * @param bounds - {SuperMap.Bounds} ĺ›ľĺ±‚čŚ?ĺ›´
         * @param zoomChanged - {boolean} çĽ©ć”ľçş§ĺ?«ć?Żĺ?¦ć”ąĺŹ?
         * @param dragging - {boolean} ć?Żĺ?¦ć‹–ĺŠ¨
         */

    }, {
        key: 'moveTo',
        value: function moveTo(bounds, zoomChanged, dragging) {
            _get(MapVLayer.prototype.__proto__ || Object.getPrototypeOf(MapVLayer.prototype), 'moveTo', this).call(this, bounds, zoomChanged, dragging);
            if (!this.supported) {
                return;
            }
            this.zoomChanged = zoomChanged;
            if (!dragging) {
                this.div.style.visibility = "hidden";
                this.div.style.left = -parseInt(this.map.layerContainerDiv.style.left) + "px";
                this.div.style.top = -parseInt(this.map.layerContainerDiv.style.top) + "px";
                /*this.canvas.style.left = this.div.style.left;
                 this.canvas.style.top = this.div.style.top;*/
                var size = this.map.getSize();
                this.div.style.width = parseInt(size.w) + "px";
                this.div.style.height = parseInt(size.h) + "px";
                this.canvas.width = parseInt(size.w);
                this.canvas.height = parseInt(size.h);
                this.canvas.style.width = this.div.style.width;
                this.canvas.style.height = this.div.style.height;
                this.maxWidth = size.w;
                this.maxHeight = size.h;
                this.div.style.visibility = "";
                if (!zoomChanged) {
                    this.renderer && this.renderer.render();
                }
            }

            if (zoomChanged) {
                this.renderer && this.renderer.render();
            }
        }

        /**
         * @function SuperMap.Layer.MapVLayer.prototype.transferToMapLatLng
         * @description ĺ°†ç»Źçş¬ĺş¦č˝¬ć??ĺş•ĺ›ľçš„ćŠ•ĺ˝±ĺť?ć ‡
         * @param latLng - {SuperMap.Lonlat} ç»Źçş¬ĺş¦ĺť?ć ‡
         */

    }, {
        key: 'transferToMapLatLng',
        value: function transferToMapLatLng(latLng) {
            var source = "EPSG:4326",
                dest = "EPSG:4326";
            var unit = this.map.getUnits() || "degree";
            if (["m", "meter"].indexOf(unit.toLowerCase()) > -1) {
                dest = "EPSG:3857";
            }
            return new _SuperMap.SuperMap.LonLat(latLng.lon, latLng.lat).transform(source, dest);
        }
    }]);

    return MapVLayer;
}(_SuperMap.SuperMap.Layer);

_SuperMap.SuperMap.Layer.MapVLayer = MapVLayer;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MapVLayer = __webpack_require__(42);

Object.defineProperty(exports, 'MapVLayer', {
  enumerable: true,
  get: function get() {
    return _MapVLayer.MapVLayer;
  }
});

var _mapv = __webpack_require__(40);

Object.keys(_mapv).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _mapv[key];
    }
  });
});

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatasourceConnectionInfo = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperMap = __webpack_require__(0);

var _Util = __webpack_require__(1);

var _REST = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// eslint-disable-line no-unused-vars

/**
 * @class SuperMap.DatasourceConnectionInfo
 * @category  iServer Data
 * @classdesc ć•°ćŤ®ćş?čżžćŽĄäżˇć?Żç±»ă€‚čŻĄç±»ĺŚ…ć‹¬äş†čż›čˇŚć•°ćŤ®ćş?čżžćŽĄçš„ć‰€ćś‰äżˇć?ŻďĽŚĺ¦‚ć‰€č¦?čżžćŽĄçš„ćśŤĺŠˇĺ™¨ĺ?Ťç§°ă€?ć•°ćŤ®ĺş“ĺ?Ťç§°ă€?ç”¨ć?·ĺ?Ťä»ĄĺŹŠĺŻ†ç ?ç­‰ă€‚
 *            ĺ˝“äżťĺ­?ä¸şĺ·Ąä˝śç©şé—´ć—¶ďĽŚ ĺ·Ąä˝śç©şé—´ä¸­çš„ć•°ćŤ®ćş?çš„čżžćŽĄäżˇć?Żé?˝ĺ°†ĺ­?ĺ‚¨ĺ?°ĺ·Ąä˝śç©şé—´ć–‡ä»¶ä¸­ă€‚ĺŻąäşŽä¸Ťĺ?Śç±»ĺž‹çš„ć•°ćŤ®ćş?ďĽŚĺ…¶čżžćŽĄäżˇć?Żćś‰ć‰€ĺŚşĺ?«ă€‚
 *            ć‰€ä»Ąĺś¨ä˝ż ç”¨čŻĄç±»ć‰€ĺŚ…ĺ?«çš„ć??ĺ‘?ć—¶ďĽŚčŻ·ćł¨ć„ŹčŻĄć??ĺ‘?ć‰€é€‚ç”¨çš„ć•°ćŤ®ćş?ç±»ĺž‹ă€‚ĺŻąäşŽä»Žć•°ćŤ®ćş?ĺŻąč±ˇä¸­čż”ĺ›žçš„ć•°ćŤ®čżžćŽĄäżˇć?ŻĺŻąč±ˇďĽŚĺŹŞćś‰ connect ć–ąćł•ĺŹŻä»Ąč˘«äż®ć”ąďĽŚ
 *            ĺ…¶ä»–ĺ†…ĺ®ąć?Żä¸ŤĺŹŻä»Ąč˘«äż®ć”ąçš„ă€‚ĺŻąäşŽç”¨ć?·ĺ?›ĺ»şçš„ć•°ćŤ®ćş?čżžćŽĄäżˇć?ŻĺŻąč±ˇďĽŚĺ…¶ĺ†…ĺ®ąé?˝ĺŹŻä»Ąäż®ć”ąă€‚
 * @category iServer Data
 * @param {Object} options - ĺŹ‚ć•°ă€‚</br>
 * @param {string} options.alias - ć•°ćŤ®ćş?ĺ?«ĺ?Ťă€‚</br>
 * @param {boolean} options.connect - ć•°ćŤ®ćş?ć?Żĺ?¦č‡ŞĺŠ¨čżžćŽĄć•°ćŤ®ă€‚</br>
 * @param {string} options.dataBase - ć•°ćŤ®ćş?čżžćŽĄçš„ć•°ćŤ®ĺş“ĺ?Ťă€‚</br>
 * @param {string} options.driver - ä˝żç”¨ ODBC(Open Database ConnectivityďĽŚĺĽ€ć”ľć•°ćŤ®ĺş“äş’čżž)çš„ć•°ćŤ®ĺş“çš„é©±ĺŠ¨ç¨‹ĺşŹĺ?Ťă€‚</br>
 * @param {SuperMap.EngineType} options.engineType - ć•°ćŤ®ćş?čżžćŽĄçš„ĺĽ•ć“Žç±»ĺž‹ă€‚</br>
 * @param {boolean} options.exclusive - ć?Żĺ?¦ä»Ąç‹¬ĺŤ ć–ąĺĽŹć‰“ĺĽ€ć•°ćŤ®ćş?ă€‚</br>
 * @param {boolean} options.OpenLinkTable - ć?Żĺ?¦ćŠŠć•°ćŤ®ĺş“ä¸­çš„ĺ…¶ä»–éťž SuperMap ć•°ćŤ®čˇ¨ä˝śä¸ş LinkTable ć‰“ĺĽ€ă€‚</br>
 * @param {string} options.password - ç™»ĺ˝•ć•°ćŤ®ćş?čżžćŽĄçš„ć•°ćŤ®ĺş“ć?–ć–‡ä»¶çš„ĺŻ†ç ?ă€‚</br>
 * @param {boolean} options.readOnly - ć?Żĺ?¦ä»ĄĺŹŞčŻ»ć–ąĺĽŹć‰“ĺĽ€ć•°ćŤ®ćş?ă€‚</br>
 * @param {string} options.server - ć•°ćŤ®ĺş“ćśŤĺŠˇĺ™¨ĺ?Ťć?– SDB ć–‡ä»¶ĺ?Ťă€‚</br>
 * @param {string} options.user - ç™»ĺ˝•ć•°ćŤ®ĺş“çš„ç”¨ć?·ĺ?Ťă€‚</br>
 */
var DatasourceConnectionInfo = exports.DatasourceConnectionInfo = function () {
  function DatasourceConnectionInfo(options) {
    _classCallCheck(this, DatasourceConnectionInfo);

    /**
     * @member {string} SuperMap.DatasourceConnectionInfo.prototype.alias
     * @description ć•°ćŤ®ćş?ĺ?«ĺ?Ťă€‚
     */
    this.alias = null;

    /**
     * @member {boolean} SuperMap.DatasourceConnectionInfo.prototype.connect
     * @description ć•°ćŤ®ćş?ć?Żĺ?¦č‡ŞĺŠ¨čżžćŽĄć•°ćŤ®ă€‚
     */
    this.connect = null;

    /**
     * @member {string} SuperMap.DatasourceConnectionInfo.prototype.dataBase
     * @description ć•°ćŤ®ćş?čżžćŽĄçš„ć•°ćŤ®ĺş“ĺ?Ťă€‚
     */
    this.dataBase = null;

    /**
     * @member {string} SuperMap.DatasourceConnectionInfo.prototype.driver
     * @description ä˝żç”¨ ODBC(Open Database ConnectivityďĽŚĺĽ€ć”ľć•°ćŤ®ĺş“äş’čżž)çš„ć•°ćŤ®ĺş“çš„é©±ĺŠ¨ç¨‹ĺşŹĺ?Ťă€‚
     * ĺ…¶ä¸­ďĽŚĺŻąäşŽSQL Server ć•°ćŤ®ĺş“ä¸Ž iServer ĺŹ‘ĺ¸?çš„ WMTS ćśŤĺŠˇďĽŚć­¤ä¸şĺż…č®ľĺŹ‚ć•°ă€‚
     * ĺŻąäşŽSQL Server ć•°ćŤ®ĺş“ďĽŚĺ®?ä˝żç”¨ ODBC čżžćŽĄďĽŚć‰€č®ľç˝®çš„é©±ĺŠ¨ç¨‹ĺşŹĺ?Ťä¸ş "SQL Server" ć?– "SQL Native Client"ďĽ›
     * ĺŻąäşŽ iServer ĺŹ‘ĺ¸?çš„ WMTS ćśŤĺŠˇďĽŚč®ľç˝®çš„é©±ĺŠ¨ĺ?Ťç§°ä¸ş "WMTS"ă€‚
     */
    this.driver = null;

    /**
     * @member {SuperMap.EngineType} SuperMap.DatasourceConnectionInfo.prototype.engineType
     * @description ć•°ćŤ®ćş?čżžćŽĄçš„ĺĽ•ć“Žç±»ĺž‹ă€‚
     */
    this.engineType = null;

    /**
     * @member {boolean} SuperMap.DatasourceConnectionInfo.prototype.exclusive
     * @description ć?Żĺ?¦ä»Ąç‹¬ĺŤ ć–ąĺĽŹć‰“ĺĽ€ć•°ćŤ®ćş?ă€‚
     */
    this.exclusive = null;

    /**
     * @member {boolean} SuperMap.DatasourceConnectionInfo.prototype.OpenLinkTable
     * @description ć?Żĺ?¦ćŠŠć•°ćŤ®ĺş“ä¸­çš„ĺ…¶ä»–éťž SuperMap ć•°ćŤ®čˇ¨ä˝śä¸ş LinkTableć‰“ĺĽ€ă€‚
     */
    this.OpenLinkTable = null;

    /**
     * @member {string} SuperMap.DatasourceConnectionInfo.prototype.password
     * @description ç™»ĺ˝•ć•°ćŤ®ćş?čżžćŽĄçš„ć•°ćŤ®ĺş“ć?–ć–‡ä»¶çš„ĺŻ†ç ?ă€‚
     */
    this.password = null;

    /**
     * @member {boolean} SuperMap.DatasourceConnectionInfo.prototype.readOnly
     * @description ć?Żĺ?¦ä»ĄĺŹŞčŻ»ć–ąĺĽŹć‰“ĺĽ€ć•°ćŤ®ćş?ă€‚
     */
    this.readOnly = null;

    /**
     * @member {string} SuperMap.DatasourceConnectionInfo.prototype.server
     * @description ć•°ćŤ®ĺş“ćśŤĺŠˇĺ™¨ĺ?Ťă€?ć–‡ä»¶ĺ?Ťć?–ćśŤĺŠˇĺś°ĺť€ă€‚
     * 1.ĺŻąäşŽSDBĺ’ŚUDBć–‡ä»¶ďĽŚä¸şĺ…¶ć–‡ä»¶çš„ç»ťĺŻąč·Żĺľ„ă€‚ćł¨ć„ŹďĽšĺ˝“ç»ťĺŻąč·Żĺľ„çš„é•żĺş¦č¶…čż‡UTF-8çĽ–ç ?ć ĽĺĽŹçš„260ĺ­—čŠ‚é•żĺş¦ďĽŚčŻĄć•°ćŤ®ćş?ć— ćł•ć‰“ĺĽ€ă€‚
     * 2.ĺŻąäşŽOracleć•°ćŤ®ĺş“ďĽŚĺ…¶ćśŤĺŠˇĺ™¨ĺ?Ťä¸şĺ…¶TNSćśŤĺŠˇĺ?Ťç§°ă€‚
     * 3.ĺŻąäşŽSQL Serverć•°ćŤ®ĺş“ďĽŚĺ…¶ćśŤĺŠˇĺ™¨ĺ?Ťä¸şĺ…¶çł»ç»źçš„DSN(Database Source Name)ĺ?Ťç§°ă€‚
     * 4.ĺŻąäşŽPostgreSQLć•°ćŤ®ĺş“ďĽŚĺ…¶ćśŤĺŠˇĺ™¨ĺ?Ťä¸şâ€śIP:ç«ŻĺŹŁĺŹ·â€ťďĽŚé»?č®¤çš„ç«ŻĺŹŁĺŹ·ć?Ż 5432ă€‚
     * 5.ĺŻąäşŽDB2ć•°ćŤ®ĺş“ďĽŚĺ·˛ç»Źčż›čˇŚäş†çĽ–ç›®ďĽŚć‰€ä»Ąä¸Ťéś€č¦?čż›čˇŚćśŤĺŠˇĺ™¨çš„č®ľç˝®ă€‚
     * 6.ĺŻąäşŽ Kingbase ć•°ćŤ®ĺş“ďĽŚĺ…¶ćśŤĺŠˇĺ™¨ĺ?Ťä¸şĺ…¶ IP ĺś°ĺť€ă€‚
     * 7.ĺŻąäşŽGoogleMapsć•°ćŤ®ćş?ďĽŚĺ…¶ćśŤĺŠˇĺ™¨ĺś°ĺť€ďĽŚé»?č®¤č®ľç˝®ä¸şâ€ś{@link http://maps.google.com}â€ťďĽŚä¸”ä¸ŤĺŹŻć›´ć”ąă€‚
     * 8.ĺŻąäşŽSuperMapCouldć•°ćŤ®ćş?ďĽŚä¸şĺ…¶ćśŤĺŠˇĺś°ĺť€ă€‚
     * 9.ĺŻąäşŽMAPWORLDć•°ćŤ®ćş?ďĽŚä¸şĺ…¶ćśŤĺŠˇĺś°ĺť€ďĽŚé»?č®¤č®ľç˝®ä¸şâ€ś{@link http://www.tianditu.cn}â€ťďĽŚä¸”ä¸ŤĺŹŻć›´ć”ąă€‚
     * 10.ĺŻąäşŽOGCĺ’ŚRESTć•°ćŤ®ćş?ďĽŚä¸şĺ…¶ćśŤĺŠˇĺś°ĺť€ă€‚
     */
    this.server = null;

    /**
     * @member {string} SuperMap.DatasourceConnectionInfo.prototype.user
     * @description ç™»ĺ˝•ć•°ćŤ®ĺş“çš„ç”¨ć?·ĺ?Ťă€‚
     */
    this.user = null;

    if (options) {
      _Util.Util.extend(this, options);
    }

    this.CLASS_NAME = "SuperMap.DatasourceConnectionInfo";
  }

  /**
   * @function SuperMap.DatasourceConnectionInfo.prototype.destroy
   * @description é‡Šć”ľčµ„ćş?ďĽŚĺ°†ĺĽ•ç”¨čµ„ćş?çš„ĺ±žć€§ç˝®ç©şă€‚
   */


  _createClass(DatasourceConnectionInfo, [{
    key: 'destroy',
    value: function destroy() {
      var me = this;
      me.alias = null;
      me.connect = null;
      me.dataBase = null;
      me.driver = null;
      me.engineType = null;
      me.exclusive = null;
      me.OpenLinkTable = null;
      me.password = null;
      me.readOnly = null;
      me.server = null;
      me.user = null;
    }
  }]);

  return DatasourceConnectionInfo;
}();

_SuperMap.SuperMap.DatasourceConnectionInfo = DatasourceConnectionInfo;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(undefined, function (exports, module) {
  'use strict';

  var defaultOptions = {
    timeout: 5000,
    jsonpCallback: 'callback',
    jsonpCallbackFunction: null
  };

  function generateCallbackFunction() {
    return 'jsonp_' + Date.now() + '_' + Math.ceil(Math.random() * 100000);
  }

  // Known issue: Will throw 'Uncaught ReferenceError: callback_*** is not defined'
  // error if request timeout
  function clearFunction(functionName) {
    // IE8 throws an exception when you try to delete a property on window
    // http://stackoverflow.com/a/1824228/751089
    try {
      delete window[functionName];
    } catch (e) {
      window[functionName] = undefined;
    }
  }

  function removeScript(scriptId) {
    var script = document.getElementById(scriptId);
    document.getElementsByTagName('head')[0].removeChild(script);
  }

  function fetchJsonp(_url) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    // to avoid param reassign
    var url = _url;
    var timeout = options.timeout || defaultOptions.timeout;
    var jsonpCallback = options.jsonpCallback || defaultOptions.jsonpCallback;

    var timeoutId = undefined;

    return new Promise(function (resolve, reject) {
      var callbackFunction = options.jsonpCallbackFunction || generateCallbackFunction();
      var scriptId = jsonpCallback + '_' + callbackFunction;

      window[callbackFunction] = function (response) {
        resolve({
          ok: true,
          // keep consistent with fetch API
          json: function json() {
            return Promise.resolve(response);
          }
        });

        if (timeoutId) clearTimeout(timeoutId);

        removeScript(scriptId);

        clearFunction(callbackFunction);
      };

      // Check if the user set their own params, and if not add a ? to start a list of params
      url += url.indexOf('?') === -1 ? '?' : '&';

      var jsonpScript = document.createElement('script');
      jsonpScript.setAttribute('src', '' + url + jsonpCallback + '=' + callbackFunction);
      jsonpScript.id = scriptId;
      document.getElementsByTagName('head')[0].appendChild(jsonpScript);

      timeoutId = setTimeout(function () {
        reject(new Error('JSONP request to ' + _url + ' timed out'));

        clearFunction(callbackFunction);
        removeScript(scriptId);
      }, timeout);
    });
  }

  // export as global function
  /*
  let local;
  if (typeof global !== 'undefined') {
    local = global;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('polyfill failed because global object is unavailable in this environment');
    }
  }
  local.fetchJsonp = fetchJsonp;
  */

  module.exports = fetchJsonp;
});

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function (self) {
  'use strict';

  // if __disableNativeFetch is set to true, the it will always polyfill fetch
  // with Ajax.

  if (!self.__disableNativeFetch && self.fetch) {
    return;
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name');
    }
    return name.toLowerCase();
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value;
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function (value, name) {
        this.append(name, value);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function (name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function (name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var list = this.map[name];
    if (!list) {
      list = [];
      this.map[name] = list;
    }
    list.push(value);
  };

  Headers.prototype['delete'] = function (name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function (name) {
    var values = this.map[normalizeName(name)];
    return values ? values[0] : null;
  };

  Headers.prototype.getAll = function (name) {
    return this.map[normalizeName(name)] || [];
  };

  Headers.prototype.has = function (name) {
    return this.map.hasOwnProperty(normalizeName(name));
  };

  Headers.prototype.set = function (name, value) {
    this.map[normalizeName(name)] = [normalizeValue(value)];
  };

  Headers.prototype.forEach = function (callback, thisArg) {
    Object.getOwnPropertyNames(this.map).forEach(function (name) {
      this.map[name].forEach(function (value) {
        callback.call(thisArg, value, name, this);
      }, this);
    }, this);
  };

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'));
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function (resolve, reject) {
      reader.onload = function () {
        resolve(reader.result);
      };
      reader.onerror = function () {
        reject(reader.error);
      };
    });
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    reader.readAsArrayBuffer(blob);
    return fileReaderReady(reader);
  }

  function readBlobAsText(blob, options) {
    var reader = new FileReader();
    var contentType = options.headers.map['content-type'] ? options.headers.map['content-type'].toString() : '';
    var regex = /charset\=[0-9a-zA-Z\-\_]*;?/;
    var _charset = blob.type.match(regex) || contentType.match(regex);
    var args = [blob];

    if (_charset) {
      args.push(_charset[0].replace(/^charset\=/, '').replace(/;$/, ''));
    }

    reader.readAsText.apply(reader, args);
    return fileReaderReady(reader);
  }

  var support = {
    blob: 'FileReader' in self && 'Blob' in self && function () {
      try {
        new Blob();
        return true;
      } catch (e) {
        return false;
      }
    }(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  function Body() {
    this.bodyUsed = false;

    this._initBody = function (body, options) {
      this._bodyInit = body;
      if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
        this._options = options;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (!body) {
        this._bodyText = '';
      } else if (support.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(body)) {
        // Only support ArrayBuffers for POST method.
        // Receiving ArrayBuffers happens via Blobs, instead.
      } else {
        throw new Error('unsupported BodyInit type');
      }
    };

    if (support.blob) {
      this.blob = function () {
        var rejected = consumed(this);
        if (rejected) {
          return rejected;
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob);
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob');
        } else {
          return Promise.resolve(new Blob([this._bodyText]));
        }
      };

      this.arrayBuffer = function () {
        return this.blob().then(readBlobAsArrayBuffer);
      };

      this.text = function () {
        var rejected = consumed(this);
        if (rejected) {
          return rejected;
        }

        if (this._bodyBlob) {
          return readBlobAsText(this._bodyBlob, this._options);
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as text');
        } else {
          return Promise.resolve(this._bodyText);
        }
      };
    } else {
      this.text = function () {
        var rejected = consumed(this);
        return rejected ? rejected : Promise.resolve(this._bodyText);
      };
    }

    if (support.formData) {
      this.formData = function () {
        return this.text().then(decode);
      };
    }

    this.json = function () {
      return this.text().then(JSON.parse);
    };

    return this;
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method;
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;
    if (Request.prototype.isPrototypeOf(input)) {
      if (input.bodyUsed) {
        throw new TypeError('Already read');
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      if (!body) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = input;
    }

    this.credentials = options.credentials || this.credentials || 'omit';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests');
    }
    this._initBody(body, options);
  }

  Request.prototype.clone = function () {
    return new Request(this);
  };

  function decode(body) {
    var form = new FormData();
    body.trim().split('&').forEach(function (bytes) {
      if (bytes) {
        var split = bytes.split('=');
        var name = split.shift().replace(/\+/g, ' ');
        var value = split.join('=').replace(/\+/g, ' ');
        form.append(decodeURIComponent(name), decodeURIComponent(value));
      }
    });
    return form;
  }

  function headers(xhr) {
    var head = new Headers();
    var pairs = xhr.getAllResponseHeaders().trim().split('\n');
    pairs.forEach(function (header) {
      var split = header.trim().split(':');
      var key = split.shift().trim();
      var value = split.join(':').trim();
      head.append(key, value);
    });
    return head;
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this._initBody(bodyInit, options);
    this.type = 'default';
    this.status = options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = options.statusText;
    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers);
    this.url = options.url || '';
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function () {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    });
  };

  Response.error = function () {
    var response = new Response(null, { status: 0, statusText: '' });
    response.type = 'error';
    return response;
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function (url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code');
    }

    return new Response(null, { status: status, headers: { location: url } });
  };

  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;

  self.fetch = function (input, init) {
    return new Promise(function (resolve, reject) {
      var request;
      if (Request.prototype.isPrototypeOf(input) && !init) {
        request = input;
      } else {
        request = new Request(input, init);
      }

      var xhr = new XMLHttpRequest();

      function responseURL() {
        if ('responseURL' in xhr) {
          return xhr.responseURL;
        }

        // Avoid security warnings on getResponseHeader when not allowed by CORS
        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
          return xhr.getResponseHeader('X-Request-URL');
        }

        return;
      }

      var __onLoadHandled = false;

      function onload() {
        if (xhr.readyState !== 4) {
          return;
        }
        var status = xhr.status === 1223 ? 204 : xhr.status;
        if (status < 100 || status > 599) {
          if (__onLoadHandled) {
            return;
          } else {
            __onLoadHandled = true;
          }
          reject(new TypeError('Network request failed'));
          return;
        }
        var options = {
          status: status,
          statusText: xhr.statusText,
          headers: headers(xhr),
          url: responseURL()
        };
        var body = 'response' in xhr ? xhr.response : xhr.responseText;

        if (__onLoadHandled) {
          return;
        } else {
          __onLoadHandled = true;
        }
        resolve(new Response(body, options));
      }
      xhr.onreadystatechange = onload;
      xhr.onload = onload;
      xhr.onerror = function () {
        if (__onLoadHandled) {
          return;
        } else {
          __onLoadHandled = true;
        }
        reject(new TypeError('Network request failed'));
      };

      xhr.open(request.method, request.url, true);

      // `withCredentials` should be setted after calling `.open` in IE10
      // http://stackoverflow.com/a/19667959/1219343
      try {
        if (request.credentials === 'include') {
          if ('withCredentials' in xhr) {
            xhr.withCredentials = true;
          } else {
            console && console.warn && console.warn('withCredentials is not supported, you can ignore this warning');
          }
        }
      } catch (e) {
        console && console.warn && console.warn('set withCredentials error:' + e);
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function (value, name) {
        xhr.setRequestHeader(name, value);
      });

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    });
  };
  self.fetch.polyfill = true;

  // Support CommonJS
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = self.fetch;
  }
})(typeof self !== 'undefined' ? self : undefined);

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
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
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
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
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
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
    while (len) {
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

process.nextTick = function (fun) {
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
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {

(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
        // Callback can either be a function or a string
        if (typeof callback !== "function") {
            callback = new Function("" + callback);
        }
        // Copy function arguments
        var args = new Array(arguments.length - 1);
        for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i + 1];
        }
        // Store and register the task
        var task = { callback: callback, args: args };
        tasksByHandle[nextHandle] = task;
        registerImmediate(nextHandle);
        return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
            case 0:
                callback();
                break;
            case 1:
                callback(args[0]);
                break;
            case 2:
                callback(args[0], args[1]);
                break;
            case 3:
                callback(args[0], args[1], args[2]);
                break;
            default:
                callback.apply(undefined, args);
                break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function registerImmediate(handle) {
            process.nextTick(function () {
                runIfPresent(handle);
            });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function () {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function onGlobalMessage(event) {
            if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function registerImmediate(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function (event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function registerImmediate(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function registerImmediate(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function registerImmediate(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();
    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();
    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();
    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6â€“8
        installReadyStateChangeImplementation();
    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? undefined : global : self);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(21), __webpack_require__(47)))

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function () {};
Timeout.prototype.close = function () {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(48);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || undefined && undefined.setImmediate;
exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || undefined && undefined.clearImmediate;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(21)))

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (root) {

  // Store setTimeout reference so promise-polyfill will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var setTimeoutFunc = setTimeout;

  function noop() {}

  // Polyfill for Function.prototype.bind
  function bind(fn, thisArg) {
    return function () {
      fn.apply(thisArg, arguments);
    };
  }

  function Promise(fn) {
    if (_typeof(this) !== 'object') throw new TypeError('Promises must be constructed via new');
    if (typeof fn !== 'function') throw new TypeError('not a function');
    this._state = 0;
    this._handled = false;
    this._value = undefined;
    this._deferreds = [];

    doResolve(fn, this);
  }

  function handle(self, deferred) {
    while (self._state === 3) {
      self = self._value;
    }
    if (self._state === 0) {
      self._deferreds.push(deferred);
      return;
    }
    self._handled = true;
    Promise._immediateFn(function () {
      var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
      if (cb === null) {
        (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
        return;
      }
      var ret;
      try {
        ret = cb(self._value);
      } catch (e) {
        reject(deferred.promise, e);
        return;
      }
      resolve(deferred.promise, ret);
    });
  }

  function resolve(self, newValue) {
    try {
      // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
      if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
      if (newValue && ((typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) === 'object' || typeof newValue === 'function')) {
        var then = newValue.then;
        if (newValue instanceof Promise) {
          self._state = 3;
          self._value = newValue;
          finale(self);
          return;
        } else if (typeof then === 'function') {
          doResolve(bind(then, newValue), self);
          return;
        }
      }
      self._state = 1;
      self._value = newValue;
      finale(self);
    } catch (e) {
      reject(self, e);
    }
  }

  function reject(self, newValue) {
    self._state = 2;
    self._value = newValue;
    finale(self);
  }

  function finale(self) {
    if (self._state === 2 && self._deferreds.length === 0) {
      Promise._immediateFn(function () {
        if (!self._handled) {
          Promise._unhandledRejectionFn(self._value);
        }
      });
    }

    for (var i = 0, len = self._deferreds.length; i < len; i++) {
      handle(self, self._deferreds[i]);
    }
    self._deferreds = null;
  }

  function Handler(onFulfilled, onRejected, promise) {
    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
    this.promise = promise;
  }

  /**
   * Take a potentially misbehaving resolver function and make sure
   * onFulfilled and onRejected are only called once.
   *
   * Makes no guarantees about asynchrony.
   */
  function doResolve(fn, self) {
    var done = false;
    try {
      fn(function (value) {
        if (done) return;
        done = true;
        resolve(self, value);
      }, function (reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      });
    } catch (ex) {
      if (done) return;
      done = true;
      reject(self, ex);
    }
  }

  Promise.prototype['catch'] = function (onRejected) {
    return this.then(null, onRejected);
  };

  Promise.prototype.then = function (onFulfilled, onRejected) {
    var prom = new this.constructor(noop);

    handle(this, new Handler(onFulfilled, onRejected, prom));
    return prom;
  };

  Promise.all = function (arr) {
    var args = Array.prototype.slice.call(arr);

    return new Promise(function (resolve, reject) {
      if (args.length === 0) return resolve([]);
      var remaining = args.length;

      function res(i, val) {
        try {
          if (val && ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' || typeof val === 'function')) {
            var then = val.then;
            if (typeof then === 'function') {
              then.call(val, function (val) {
                res(i, val);
              }, reject);
              return;
            }
          }
          args[i] = val;
          if (--remaining === 0) {
            resolve(args);
          }
        } catch (ex) {
          reject(ex);
        }
      }

      for (var i = 0; i < args.length; i++) {
        res(i, args[i]);
      }
    });
  };

  Promise.resolve = function (value) {
    if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.constructor === Promise) {
      return value;
    }

    return new Promise(function (resolve) {
      resolve(value);
    });
  };

  Promise.reject = function (value) {
    return new Promise(function (resolve, reject) {
      reject(value);
    });
  };

  Promise.race = function (values) {
    return new Promise(function (resolve, reject) {
      for (var i = 0, len = values.length; i < len; i++) {
        values[i].then(resolve, reject);
      }
    });
  };

  // Use polyfill for setImmediate for performance gains
  Promise._immediateFn = typeof setImmediate === 'function' && function (fn) {
    setImmediate(fn);
  } || function (fn) {
    setTimeoutFunc(fn, 0);
  };

  Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
    if (typeof console !== 'undefined' && console) {
      console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
    }
  };

  /**
   * Set the immediate function to execute callbacks
   * @param fn {function} Function to execute
   * @deprecated
   */
  Promise._setImmediateFn = function _setImmediateFn(fn) {
    Promise._immediateFn = fn;
  };

  /**
   * Change the function to execute on unhandled rejection
   * @param {function} fn Function to execute on unhandled rejection
   * @deprecated
   */
  Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {
    Promise._unhandledRejectionFn = fn;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Promise;
  } else if (!root.Promise) {
    root.Promise = Promise;
  }
})(undefined);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(49).setImmediate))

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promisePolyfill = __webpack_require__(50);

var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Promise = _promisePolyfill2.default;

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = function(){try{return elasticsearch}catch(e){return {}}}();

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Event = undefined;

var _SuperMap = __webpack_require__(0);

var _Util = __webpack_require__(1);

/**
 * @name Event
 * @memberOf SuperMap
 * @namespace
 * @description äş‹ä»¶ĺ¤„ç?†ĺ‡˝ć•°.
 */
var Event = exports.Event = _SuperMap.SuperMap.Event = {

    /**
     * @description  A hash table cache of the event observers. Keyed by element._eventCacheID
     * @type {boolean}
     * @default false
     */
    observers: false,

    /**
     * @description KEY_SPACE
     * @type {number}
     * @default 32
     */
    KEY_SPACE: 32,

    /**
     * @description KEY_BACKSPACE
     * @type {number}
     * @default 8
     */
    KEY_BACKSPACE: 8,

    /**
     * @description KEY_TAB
     * @type {number}
     * @default 9
     */
    KEY_TAB: 9,

    /**
     * @description KEY_RETURN
     * @type {number}
     * @default 13
     */
    KEY_RETURN: 13,

    /**
     * @description KEY_ESC
     * @type {number}
     * @default 27
     */
    KEY_ESC: 27,

    /**
     * @description KEY_LEFT
     * @type {number}
     * @default 37
     */
    KEY_LEFT: 37,

    /**
     * @description KEY_UP
     * @type {number}
     * @default 38
     */
    KEY_UP: 38,

    /**
     * @description KEY_RIGHT
     * @type {number}
     * @default 39
     */
    KEY_RIGHT: 39,

    /**
     * @description KEY_DOWN
     * @type {number}
     * @default 40
     */
    KEY_DOWN: 40,

    /**
     * @description KEY_DELETE
     * @type {number}
     * @default 46
     */
    KEY_DELETE: 46,

    /**
     * @description Cross browser event element detection.
     * @param {Event} event - The event
     * @returns {HTMLElement} The element that caused the event
     */
    element: function element(event) {
        return event.target || event.srcElement;
    },

    /**
     * @description Determine whether event was caused by a single touch
     * @param {Event} event - The event
     * @returns {boolean}
     */
    isSingleTouch: function isSingleTouch(event) {
        return event.touches && event.touches.length === 1;
    },

    /**
     * @description Determine whether event was caused by a multi touch
     * @param {Event} event - The event
     * @returns {boolean}
     */
    isMultiTouch: function isMultiTouch(event) {
        return event.touches && event.touches.length > 1;
    },

    /**
     * @description Determine whether event was caused by a left click.
     * @param {Event} event - The event
     * @returns {boolean}
     */
    isLeftClick: function isLeftClick(event) {
        return event.which && event.which === 1 || event.button && event.button === 1;
    },

    /**
     * @description Determine whether event was caused by a right mouse click.
     * @param {Event} event - The event
     * @returns {boolean}
     */
    isRightClick: function isRightClick(event) {
        return event.which && event.which === 3 || event.button && event.button === 2;
    },

    /**
     * @description Stops an event from propagating.
     * @param {Event} event - The event
     * @param {boolean} allowDefault - If true, we stop the event chain but still allow the default browser  behaviour (text selection, radio-button clicking, etc) Default false
     */
    stop: function stop(event, allowDefault) {

        if (!allowDefault) {
            if (event.preventDefault) {
                event.preventDefault();
            } else {
                event.returnValue = false;
            }
        }

        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },

    /**
     * @param {Event} event - The event
     * @param {string} tagName - htmlć ‡ç­ľĺ?Ť
     * @returns {HTMLElement} The first node with the given tagName, starting from the node the event was triggered on and traversing the DOM upwards
     */
    findElement: function findElement(event, tagName) {
        var element = _SuperMap.SuperMap.Event.element(event);
        while (element.parentNode && (!element.tagName || element.tagName.toUpperCase() != tagName.toUpperCase())) {
            element = element.parentNode;
        }
        return element;
    },

    /**
     * @description ç›‘ĺ?¬äş‹ä»¶ďĽŚćł¨ĺ†Śäş‹ä»¶ĺ¤„ç?†ć–ąćł•ă€‚
     * @param {(HTMLElement|string)} elementParam - ĺľ…ç›‘ĺ?¬çš„DOMĺŻąč±ˇć?–č€…ĺ…¶idć ‡čŻ†ă€‚
     * @param {string} name - ç›‘ĺ?¬äş‹ä»¶çš„ç±»ĺ?«ĺ?Ťç§°ă€‚
     * @param {function} observer - ćł¨ĺ†Śçš„äş‹ä»¶ĺ¤„ç?†ć–ąćł•ă€‚
     * @param {boolean} useCapture - ć?Żĺ?¦ćŤ•čŽ·ă€‚
     */
    observe: function observe(elementParam, name, observer, useCapture) {
        var element = _Util.Util.getElement(elementParam);
        useCapture = useCapture || false;

        if (name === 'keypress' && (navigator.appVersion.match(/Konqueror|Safari|KHTML/) || element.attachEvent)) {
            name = 'keydown';
        }

        //if observers cache has not yet been created, create it
        if (!this.observers) {
            this.observers = {};
        }

        //if not already assigned, make a new unique cache ID
        if (!element._eventCacheID) {
            var idPrefix = "eventCacheID_";
            if (element.id) {
                idPrefix = element.id + "_" + idPrefix;
            }
            element._eventCacheID = _Util.Util.createUniqueID(idPrefix);
        }

        var cacheID = element._eventCacheID;

        //if there is not yet a hash entry for this element, add one
        if (!this.observers[cacheID]) {
            this.observers[cacheID] = [];
        }

        //add a new observer to this element's list
        this.observers[cacheID].push({
            'element': element,
            'name': name,
            'observer': observer,
            'useCapture': useCapture
        });

        //add the actual browser event listener
        if (element.addEventListener) {
            element.addEventListener(name, observer, useCapture);
        } else if (element.attachEvent) {
            element.attachEvent('on' + name, observer);
        }
    },

    /**
     * @description Given the id of an element to stop observing, cycle through the
     *   element's cached observers, calling stopObserving on each one,
     *   skipping those entries which can no longer be removed.
     *
     * @param {(HTMLElement|string)} elementParam -
     */
    stopObservingElement: function stopObservingElement(elementParam) {
        var element = _Util.Util.getElement(elementParam);
        var cacheID = element._eventCacheID;

        this._removeElementObservers(_SuperMap.SuperMap.Event.observers[cacheID]);
    },

    /**
     * @param {Array.<Object>} elementObservers - Array of (element, name,
     *                                         observer, usecapture) objects,
     *                                         taken directly from hashtable
     */
    _removeElementObservers: function _removeElementObservers(elementObservers) {
        if (elementObservers) {
            for (var i = elementObservers.length - 1; i >= 0; i--) {
                var entry = elementObservers[i];
                var args = new Array(entry.element, entry.name, entry.observer, entry.useCapture);
                _SuperMap.SuperMap.Event.stopObserving.apply(this, args);
            }
        }
    },

    /**
     * @description ç§»é™¤äş‹ä»¶ç›‘ĺ?¬ĺ’Śćł¨ĺ†Śçš„äş‹ä»¶ĺ¤„ç?†ć–ąćł•ă€‚ćł¨ć„ŹďĽšäş‹ä»¶çš„ç§»é™¤ĺ’Śç›‘ĺ?¬ç›¸ĺŻąĺş”ďĽŚç§»é™¤ć—¶çš„ĺ?„ĺ±žć€§äżˇć?Żĺż…éˇ»ç›‘ĺ?¬ć—¶
     * äżťćŚ?ä¸€č‡´ć‰Ťč?˝çˇ®äżťäş‹ä»¶ç§»é™¤ć??ĺŠźă€‚
     * @param {(HTMLElement|string)} elementParam - č˘«ç›‘ĺ?¬çš„DOMĺ…?ç´ ć?–č€…ĺ…¶idă€‚
     * @param {string} name - éś€č¦?ç§»é™¤çš„č˘«ç›‘ĺ?¬äş‹ä»¶ĺ?Ťç§°ă€‚
     * @param {function} observer - éś€č¦?ç§»é™¤çš„äş‹ä»¶ĺ¤„ç?†ć–ąćł•ă€‚
     * @param {boolean} useCapture - ć?Żĺ?¦ćŤ•čŽ·ă€‚
     * @returns {boolean} Whether or not the event observer was removed
     */
    stopObserving: function stopObserving(elementParam, name, observer, useCapture) {
        useCapture = useCapture || false;

        var element = _Util.Util.getElement(elementParam);
        var cacheID = element._eventCacheID;

        if (name === 'keypress') {
            if (navigator.appVersion.match(/Konqueror|Safari|KHTML/) || element.detachEvent) {
                name = 'keydown';
            }
        }

        // find element's entry in this.observers cache and remove it
        var foundEntry = false;
        var elementObservers = _SuperMap.SuperMap.Event.observers[cacheID];
        if (elementObservers) {

            // find the specific event type in the element's list
            var i = 0;
            while (!foundEntry && i < elementObservers.length) {
                var cacheEntry = elementObservers[i];

                if (cacheEntry.name === name && cacheEntry.observer === observer && cacheEntry.useCapture === useCapture) {

                    elementObservers.splice(i, 1);
                    if (elementObservers.length == 0) {
                        delete _SuperMap.SuperMap.Event.observers[cacheID];
                    }
                    foundEntry = true;
                    break;
                }
                i++;
            }
        }

        //actually remove the event listener from browser
        if (foundEntry) {
            if (element.removeEventListener) {
                element.removeEventListener(name, observer, useCapture);
            } else if (element && element.detachEvent) {
                element.detachEvent('on' + name, observer);
            }
        }
        return foundEntry;
    },

    /**
     * @description Cycle through all the element entries in the events cache and call
     *   stopObservingElement on each.
     */
    unloadCache: function unloadCache() {
        // check for SuperMap.Event before checking for observers, because
        // SuperMap.Event may be undefined in IE if no map instance was
        // created
        if (_SuperMap.SuperMap.Event && _SuperMap.SuperMap.Event.observers) {
            for (var cacheID in _SuperMap.SuperMap.Event.observers) {
                var elementObservers = _SuperMap.SuperMap.Event.observers[cacheID];
                _SuperMap.SuperMap.Event._removeElementObservers.apply(this, [elementObservers]);
            }
            _SuperMap.SuperMap.Event.observers = false;
        }
    },

    CLASS_NAME: "SuperMap.Event"
};
_SuperMap.SuperMap.Event = Event;
/* prevent memory leaks in IE */
_SuperMap.SuperMap.Event.observe(window, 'unload', _SuperMap.SuperMap.Event.unloadCache, false);

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Pixel = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperMap = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class SuperMap.Pixel
 * @classdesc ć­¤ç±»ç”¨x,yĺť?ć ‡ćŹŹç»?ĺ±Źĺą•ĺť?ć ‡ďĽ?ĺ?Źç´ ç‚ąďĽ‰ă€‚
 * @param {number} [x=0.0] - xĺť?ć ‡
 * @param {number} [y=0.0] - yĺť?ć ‡
 * @param {string} mode - ĺť?ć ‡ć¨ˇĺĽŹďĽŚé»?č®¤ä¸ş{@link SuperMap.Pixel.Mode|SuperMap.Pixel.Mode.LeftTop}
 *
 * @example
 * //ĺŤ•ç‹¬ĺ?›ĺ»şä¸€ä¸ŞĺŻąč±ˇ
 * var pixcel = new SuperMap.Pixel(100,50);
 *
 * //äľťćŤ®sizeĺ?›ĺ»ş
 *  var size = new SuperMap.Size(21,25);
 *  var offset = new SuperMap.Pixel(-(size.w/2), -size.h);
 */
var Pixel = exports.Pixel = function () {
    function Pixel(x, y, mode) {
        _classCallCheck(this, Pixel);

        /**
         * @member {number} [SuperMap.Pixel.prototype.x=0.0]
         * @description xĺť?ć ‡
         */
        this.x = x ? parseFloat(x) : 0.0;

        /**
         * @member {number} [SuperMap.Pixel.prototype.y=0.0]
         * @description yĺť?ć ‡
         */
        this.y = y ? parseFloat(y) : 0.0;

        /**
         * @member {SuperMap.Pixel.Mode} SuperMap.Pixel.prototype.mode
         * @description ĺť?ć ‡ć¨ˇĺĽŹďĽŚćś‰ĺ·¦ä¸Šă€?ĺŹłä¸Šă€?ĺŹłä¸‹ă€?ĺ·¦ä¸‹čż™ĺ‡ ç§Ťć¨ˇĺĽŹďĽŚĺ?†ĺ?«čˇ¨ç¤şç›¸ĺŻąäşŽĺ·¦ä¸Šč§’ă€?ĺŹłä¸Šč§’ă€?ĺŹłä¸‹č§’ă€?ĺ·¦ä¸‹č§’çš„ĺť?ć ‡ă€‚<br>
         * ĺ€Ľćś‰<br>
         * * {@link SuperMap.Pixel.Mode|SuperMap.Pixel.Mode.LeftTop}
         * * {@link SuperMap.Pixel.Mode|SuperMap.Pixel.Mode.RightTop}
         * * {@link SuperMap.Pixel.Mode|SuperMap.Pixel.Mode.RightBottom}
         * * {@link SuperMap.Pixel.Mode|SuperMap.Pixel.Mode.LeftBottom}
         *
         * čż™ĺ››ç§Ť é»?č®¤ĺ€Ľä¸şďĽš{@link SuperMap.Pixel.Mode|SuperMap.Pixel.Mode.LeftTop}
         */
        this.mode = mode;
        this.CLASS_NAME = "SuperMap.Pixel";
        /**
         * @member SuperMap.Pixel.Mode
         * @enum {string}
         * @readonly
         * @description ć¨ˇĺĽŹ
         *
         * * SuperMap.Pixel.Mode.LeftTop ĺ·¦ä¸Šć¨ˇĺĽŹ
         * * SuperMap.Pixel.Mode.RightTop ĺŹłä¸Šć¨ˇĺĽŹ
         * * SuperMap.Pixel.Mode.RightBottom ĺŹłä¸‹ć¨ˇĺĽŹ
         * * SuperMap.Pixel.Mode.LeftBottom ĺ·¦ä¸‹ć¨ˇĺĽŹ
         */

        Pixel.Mode = {
            LeftTop: "lefttop",
            RightTop: "righttop",
            RightBottom: "rightbottom",
            LeftBottom: "leftbottom"
        };
    }

    /**
     * @function SuperMap.Pixel.prototype.toString
     * @description čż”ĺ›žć­¤ĺŻąč±ˇçš„ĺ­—ç¬¦ä¸˛ĺ˝˘ĺĽŹ
     * @example
     *
     * var pixcel = new SuperMap.Pixel(100,50);
     * var str = pixcel.toString();
     *
     * @returns {string} äľ‹ĺ¦‚: "x=200.4,y=242.2"
     */


    _createClass(Pixel, [{
        key: "toString",
        value: function toString() {
            return "x=" + this.x + ",y=" + this.y;
        }

        /**
         * @function SuperMap.Pixel.prototype.clone
         * @description ĺ…‹éš†ĺ˝“ĺ‰Ťçš„ pixel ĺŻąč±ˇă€‚
         * @example
         * var pixcel = new SuperMap.Pixel(100,50);
         * var pixcel2 = pixcel.clone();
         * @returns {SuperMap.Pixel} čż”ĺ›žä¸€ä¸Şć–°çš„ä¸Žĺ˝“ĺ‰Ť pixel ĺŻąč±ˇćś‰ç›¸ĺ?Śxă€?yĺť?ć ‡çš„ pixel ĺŻąč±ˇă€‚
         */

    }, {
        key: "clone",
        value: function clone() {
            return new Pixel(this.x, this.y, this.mode);
        }

        /**
         * @function SuperMap.Pixel.prototype.equals
         * @description ćŻ”čľ?ä¸¤ pixel ć?Żĺ?¦ç›¸ç­‰
         * @example
         * var pixcel = new SuperMap.Pixel(100,50);
         * var pixcel2 = new SuperMap.Pixel(100,50);
         * var isEquals = pixcel.equals(pixcel2);
         *
         * @param {SuperMap.Pixel} px - ç”¨äşŽćŻ”čľ?ç›¸ç­‰çš„ pixel ĺŻąč±ˇă€‚
         * @returns {boolean} ĺ¦‚ćžśäĽ ĺ…Ąçš„ĺ?Źç´ ç‚ąĺ’Śĺ˝“ĺ‰Ťĺ?Źç´ ç‚ąç›¸ĺ?Śčż”ĺ›žtrue,ĺ¦‚ćžśä¸Ťĺ?Ść?–äĽ ĺ…ĄĺŹ‚ć•°ä¸şNULLĺ?™čż”ĺ›žfalse
         */

    }, {
        key: "equals",
        value: function equals(px) {
            var equals = false;
            if (px != null) {
                equals = this.x == px.x && this.y == px.y || isNaN(this.x) && isNaN(this.y) && isNaN(px.x) && isNaN(px.y);
            }
            return equals;
        }

        /**
         * @function SuperMap.Pixel.prototype.distanceTo
         * @description čż”ĺ›žä¸¤ä¸Ş pixel çš„č·ťç¦»ă€‚
         * @example
         * var pixcel = new SuperMap.Pixel(100,50);
         * var pixcel2 = new SuperMap.Pixel(110,30);
         * var distance = pixcel.distanceTo(pixcel2);
         *
         * @param {SuperMap.Pixel} px - ç”¨äşŽč®ˇç®—çš„ä¸€ä¸Ş pixel
         * @returns {float} ä˝śä¸şĺŹ‚ć•°äĽ ĺ…Ąçš„ĺ?Źç´ ä¸Žĺ˝“ĺ‰Ťĺ?Źç´ ç‚ąçš„č·ťç¦»ă€‚
         */

    }, {
        key: "distanceTo",
        value: function distanceTo(px) {
            return Math.sqrt(Math.pow(this.x - px.x, 2) + Math.pow(this.y - px.y, 2));
        }

        /**
         * @function SuperMap.Pixel.prototype.add
         * @description ĺś¨ĺŽźćťĄĺ?Źç´ ĺť?ć ‡ĺźşçˇ€ä¸ŠďĽŚxĺ€ĽĺŠ ä¸ŠäĽ ĺ…Ąçš„xĺŹ‚ć•°ďĽŚyĺ€ĽĺŠ ä¸ŠäĽ ĺ…Ąçš„yĺŹ‚ć•°ă€‚
         * @example
         * var pixcel = new SuperMap.Pixel(100,50);
         * //pixcel2ć?Żć–°çš„ĺŻąč±ˇ
         * var pixcel2 = pixcel.add(20,30);
         *
         * @param {number} x - äĽ ĺ…Ąçš„xĺ€Ľă€‚
         * @param {number} y - äĽ ĺ…Ąçš„yĺ€Ľă€‚
         * @returns {SuperMap.Pixel} čż”ĺ›žä¸€ä¸Şć–°çš„pixelĺŻąč±ˇďĽŚčŻĄpixelć?Żç”±ĺ˝“ĺ‰Ťçš„pixelä¸ŽäĽ 
         *      ĺ…Ąçš„x,yç›¸ĺŠ ĺľ—ĺ?°ă€‚
         */

    }, {
        key: "add",
        value: function add(x, y) {
            if (x == null || y == null) {
                throw new TypeError('Pixel.add cannot receive null values');
            }
            return new Pixel(this.x + x, this.y + y);
        }

        /**
         * @function SuperMap.Pixel.prototype.offset
         * @description é€ščż‡äĽ ĺ…Ąçš„ {@link SuperMap.Pixel} ĺŹ‚ć•°ĺŻąĺŽźĺ±Źĺą•ĺť?ć ‡čż›čˇŚĺ?Źç§»ă€‚
         * @example
         * var pixcel = new SuperMap.Pixel(100,50);
         * var pixcel2 = new SuperMap.Pixel(130,20);
         * //pixcel3 ć?Żć–°çš„ĺŻąč±ˇ
         * var pixcel3 = pixcel.offset(pixcel2);
         *
         * @param {SuperMap.Pixel} px - äĽ ĺ…Ąçš„ <SuperMap.Pixel> ĺŻąč±ˇă€‚
         * @returns {SuperMap.Pixel} čż”ĺ›žä¸€ä¸Şć–°çš„pixelďĽŚčŻĄpixelć?Żç”±ĺ˝“ĺ‰Ťçš„pixelĺŻąč±ˇçš„xďĽŚy
         *      ĺ€Ľä¸ŽäĽ ĺ…Ąçš„PixelĺŻąč±ˇçš„xďĽŚyĺ€Ľç›¸ĺŠ ĺľ—ĺ?°ă€‚
         */

    }, {
        key: "offset",
        value: function offset(px) {
            var newPx = this.clone();
            if (px) {
                newPx = this.add(px.x, px.y);
            }
            return newPx;
        }

        /**
         *
         * @function SuperMap.Pixel.prototype.destroy
         * @description é”€ćŻ?ć­¤ĺŻąč±ˇă€‚
         * é”€ćŻ?ĺ?Žć­¤ĺŻąč±ˇçš„ć‰€ćś‰ĺ±žć€§ä¸şnullďĽŚč€Śä¸Ťć?Żĺ?ťĺ§‹ĺ€Ľă€‚
         * @example
         * var pixcel = new SuperMap.Pixel(100,50);
         * pixcel.destroy();
         */

    }, {
        key: "destroy",
        value: function destroy() {
            this.x = null;
            this.y = null;
            this.mode = null;
        }
    }]);

    return Pixel;
}();

_SuperMap.SuperMap.Pixel = Pixel;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ElasticSearch = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperMap = __webpack_require__(0);

var _Events = __webpack_require__(22);

var _elasticsearch = __webpack_require__(52);

var _elasticsearch2 = _interopRequireDefault(_elasticsearch);

var _Util = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class SuperMap.ElasticSearch
 * @classdesc ElasticSearchćśŤĺŠˇç±»ă€‚
 * @category ElasticSearch
 * @param {string} url - ElasticSearchćśŤĺŠˇĺś°ĺť€ă€‚
 * @param {Object} options - ĺŹ‚ć•°ă€‚
 * @param {function} options.change - ćśŤĺŠˇĺ™¨čż”ĺ›žć•°ćŤ®ĺ?Žć‰§čˇŚçš„ĺ‡˝ć•°ă€‚ĺşźĺĽ?,ä¸Ťĺ»şč®®ä˝żç”¨ă€‚ä˝żç”¨searchć?–msearchć–ąćł•ă€‚
 * @param {boolean} options.openGeoFence - ć?Żĺ?¦ĺĽ€ĺ?Żĺś°ç?†ĺ›´ć ŹéŞŚčŻ?ďĽŚé»?č®¤ä¸şä¸ŤĺĽ€ĺ?Żă€‚
 * @param {function} options.outOfGeoFence - ć•°ćŤ®č¶…ĺ‡şĺś°ç?†ĺ›´ć Źĺ?Žć‰§čˇŚçš„ĺ‡˝ć•°ă€‚
 * @param {Object} options.geoFence - ĺś°ç?†ĺ›´ć Źă€‚
 */

var ElasticSearch = exports.ElasticSearch = function () {
    function ElasticSearch(url, options) {
        _classCallCheck(this, ElasticSearch);

        options = options || {};
        /**
         *  @member {string} SuperMap.ElasticSearch.prototype.url 
         *  @description ElasticSearchćśŤĺŠˇĺś°ĺť€
         */
        this.url = url;
        /**
         *  @member {Object} SuperMap.ElasticSearch.prototype.client
         *  @description client ESĺ®˘ć?·ç«Ż
         */
        this.client = new _elasticsearch2.default.Client({
            host: this.url
        });
        /**
         *  @deprecated
         *  @member {function} SuperMap.ElasticSearch.prototype.change
         *  @description ćśŤĺŠˇĺ™¨čż”ĺ›žć•°ćŤ®ĺ?Žć‰§čˇŚçš„ĺ‡˝ć•°ă€‚ĺşźĺĽ?,ä¸Ťĺ»şč®®ä˝żç”¨ă€‚ä˝żç”¨searchć?–msearchć–ąćł•ă€‚
         */
        this.change = null;
        /**
         *  @member {boolean} SuperMap.ElasticSearch.prototype.openGeoFence
         *  @description ć?Żĺ?¦ĺĽ€ĺ?Żĺś°ç?†ĺ›´ć ŹéŞŚčŻ?ďĽŚé»?č®¤ä¸şä¸ŤĺĽ€ĺ?Żă€‚
         */
        this.openGeoFence = false;
        /**
         *  @member {function} SuperMap.ElasticSearch.prototype.outOfGeoFence
         *  @description ć•°ćŤ®č¶…ĺ‡şĺś°ç?†ĺ›´ć Źĺ?Žć‰§čˇŚçš„ĺ‡˝ć•°
         */
        this.outOfGeoFence = null;

        /**
         * @member {Object} SuperMap.ElasticSearch.prototype.geoFence
         * @description ĺś°ç?†ĺ›´ć Ź
         * @example {
        *    radius: 1000,//ĺŤ•ä˝Ťć?Żm
        *    center: [104.40, 30.43],
        *    unit: 'meter|degree'
        *  }
         */
        this.geoFence = null;

        /*
         * Constant: EVENT_TYPES
         * {Array.<String>}
         * ć­¤ç±»ć”ŻćŚ?çš„äş‹ä»¶ç±»ĺž‹ă€‚
         *
         */
        this.EVENT_TYPES = ['change', 'error', 'outOfGeoFence'];

        /**
         * @member {SuperMap.Events} SuperMap.ElasticSearch.prototype.events
         * @description äş‹ä»¶
         */
        this.events = new _Events.Events(this, null, this.EVENT_TYPES);

        /**
         * @member {Object} SuperMap.ElasticSearch.prototype.eventListeners
         * @description ĺ?¬ĺ™¨ĺŻąč±ˇďĽŚĺś¨ćž„é€ ĺ‡˝ć•°ä¸­č®ľç˝®ć­¤ĺŹ‚ć•°ďĽ?ĺŹŻé€‰ďĽ‰ďĽŚĺŻą MapService ć”ŻćŚ?çš„ä¸¤ä¸Şäş‹ä»¶ processCompleted ă€?processFailed čż›čˇŚç›‘ĺ?¬ďĽŚ
         * ç›¸ĺ˝“äşŽč°?ç”¨ SuperMap.Events.on(eventListeners)ă€‚
         */
        this.eventListeners = null;
        _Util.Util.extend(this, options);
        if (this.eventListeners instanceof Object) {
            this.events.on(this.eventListeners);
        }
    }

    /**
     * @function  SuperMap.ElasticSearch.prototype.setGeoFence
     * @description č®ľç˝®ĺś°ç?†ĺ›´ć ŹďĽŚopenGeoFenceĺŹ‚ć•°ä¸ştrueçš„ć—¶ĺ€™ďĽŚč®ľç˝®çš„ĺś°ç?†ĺ›´ć Źć‰Ťç”źć•?ă€‚
     * @param {SuperMap.Geometry} geoFence - ĺś°ç?†ĺ›´ć Źă€‚
     */

    _createClass(ElasticSearch, [{
        key: 'setGeoFence',
        value: function setGeoFence(geoFence) {
            this.geoFence = geoFence;
        }

        /**
         * @function  SuperMap.ElasticSearch.prototype.bulk
         * @description ć‰ąé‡Źć“Ťä˝śAPIďĽŚĺ…?č®¸ć‰§čˇŚĺ¤šä¸Şç´˘ĺĽ•/ĺ? é™¤ć“Ťä˝śă€‚
         * ĺŹ‚ć•°č®ľç˝®ĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-bulk}</br>
         * ć›´ĺ¤šäżˇć?ŻĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-bulk.html}</br>
         * @param {Object} params - ĺŹ‚ć•°ă€‚
         * @param {function} callback - ĺ›žč°?ĺ‡˝ć•°ă€‚
         */

    }, {
        key: 'bulk',
        value: function bulk(params, callback) {
            return this.client.bulk(params, callback);
        }

        /**
         * @function  SuperMap.ElasticSearch.prototype.clearScroll
         * @description é€ščż‡ćŚ‡ĺ®šscrollĺŹ‚ć•°čż›čˇŚćźĄčŻ˘ćťĄć¸…é™¤ĺ·˛ç»Źĺ?›ĺ»şçš„scrollčŻ·ć±‚ă€‚
         * ĺŹ‚ć•°č®ľç˝®ĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-clearscroll}</br>
         *ć›´ĺ¤šäżˇć?ŻĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/reference/current/search-request-scroll.html}</br>
         * @param {Object} params - ĺŹ‚ć•°ă€‚
         * @param {function} callback - ĺ›žč°?ĺ‡˝ć•°ă€‚
         */

    }, {
        key: 'clearScroll',
        value: function clearScroll(params, callback) {
            return this.client.clearScroll(params, callback);
        }

        /**
         * @function  SuperMap.ElasticSearch.prototype.count
         * @description čŽ·ĺŹ–é›†çľ¤ă€?ç´˘ĺĽ•ă€?ç±»ĺž‹ć?–ćźĄčŻ˘çš„ć–‡ćˇŁä¸Şć•°ă€‚
         * ĺŹ‚ć•°č®ľç˝®ĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-count}</br>
         * ć›´ĺ¤šäżˇć?ŻĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/reference/current/search-count.html}</br>
         * @param {Object} params - ĺŹ‚ć•°ă€‚
         * @param {function} callback - ĺ›žč°?ĺ‡˝ć•°ă€‚
         */

    }, {
        key: 'count',
        value: function count(params, callback) {
            return this.client.count(params, callback);
        }

        /**
         * @function  SuperMap.ElasticSearch.prototype.count
         * @description ĺś¨ç‰ąĺ®šç´˘ĺĽ•ä¸­ć·»ĺŠ ä¸€ä¸Şç±»ĺž‹ĺŚ–çš„JSONć–‡ćˇŁďĽŚä˝żĺ…¶ĺŹŻć?śç´˘ă€‚ĺ¦‚ćžśĺ…·ćś‰ç›¸ĺ?ŚindexďĽŚtypeä¸”idĺ·˛ç»Źĺ­?ĺś¨çš„ć–‡ćˇŁĺ°†ĺŹ‘ç”źé”™čŻŻă€‚</br>
         * ĺŹ‚ć•°č®ľç˝®ĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-create}
         * ć›´ĺ¤šäżˇć?ŻĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-index_.html}
         * @param {Object} params - ĺŹ‚ć•°ă€‚
         * @param {function} callback - ĺ›žč°?ĺ‡˝ć•°ă€‚
         */

    }, {
        key: 'create',
        value: function create(params, callback) {
            return this.client.create(params, callback);
        }

        /**
         * @function  SuperMap.ElasticSearch.prototype.delete
         * @description ć ąćŤ®ĺ…¶IDä»Žç‰ąĺ®šç´˘ĺĽ•ä¸­ĺ? é™¤é”®ĺ…Ąçš„JSONć–‡ćˇŁă€‚
         * ĺŹ‚ć•°č®ľç˝®ĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-delete}</br>
         * ć›´ĺ¤šäżˇć?ŻĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-delete.html}</br>
         * @param {Object} params - ĺŹ‚ć•°ă€‚
         * @param {function} callback - ĺ›žč°?ĺ‡˝ć•°ă€‚
         */

    }, {
        key: 'delete',
        value: function _delete(params, callback) {
            return this.client.delete(params, callback);
        }

        /**
         * @function  SuperMap.ElasticSearch.prototype.delete
         * @description ć ąćŤ®ĺ…¶IDä»Žç‰ąĺ®šç´˘ĺĽ•ä¸­ĺ? é™¤é”®ĺ…Ąçš„JSONć–‡ćˇŁă€‚
         * ĺŹ‚ć•°č®ľç˝®ĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-deletebyquery}</br>
         * ć›´ĺ¤šäżˇć?ŻĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-delete-by-query.html}</br>
         * @param {Object} params - ĺŹ‚ć•°ă€‚
         * @param {function} callback - ĺ›žč°?ĺ‡˝ć•°ă€‚
         */

    }, {
        key: 'deleteByQuery',
        value: function deleteByQuery(params, callback) {
            return this.client.deleteByQuery(params, callback);
        }

        /**
         * @function  SuperMap.ElasticSearch.prototype.delete
         * @description ć ąćŤ®ĺ…¶IDĺ? é™¤č„šćś¬ă€‚</br>
         * ĺŹ‚ć•°č®ľç˝®ĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-deletescript}</br>
         * ć›´ĺ¤šäżˇć?ŻĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-scripting.html}</br>
         * @param {Object} params - ĺŹ‚ć•°ă€‚
         * @param {function} callback - ĺ›žč°?ĺ‡˝ć•°ă€‚
         */

    }, {
        key: 'deleteScript',
        value: function deleteScript(params, callback) {
            return this.client.deleteScript(params, callback);
        }

        /**
         * @function  SuperMap.ElasticSearch.prototype.deleteTemplate
         * @description ć ąćŤ®ĺ…¶IDĺ? é™¤ć¨ˇćťżă€‚</br>
         * ĺŹ‚ć•°č®ľç˝®ĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-deletetemplate}</br>
         * ć›´ĺ¤šäżˇć?ŻĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/reference/current/search-template.html}</br>
         * @param {Object} params - ĺŹ‚ć•°ă€‚
         * @param {function} callback - ĺ›žč°?ĺ‡˝ć•°ă€‚
         */

    }, {
        key: 'deleteTemplate',
        value: function deleteTemplate(params, callback) {
            return this.client.deleteTemplate(params, callback);
        }

        /**
         * @function  SuperMap.ElasticSearch.prototype.exists
         * @description ćŁ€ćźĄç»™ĺ®šć–‡ćˇŁć?Żĺ?¦ĺ­?ĺś¨ă€‚</br>
         * ĺŹ‚ć•°č®ľç˝®ĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-exists}</br>
         * ć›´ĺ¤šäżˇć?ŻĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-get.html}</br>
         * @param {Object} params - ĺŹ‚ć•°ă€‚
         * @param {function} callback - ĺ›žč°?ĺ‡˝ć•°ă€‚
         */

    }, {
        key: 'exists',
        value: function exists(params, callback) {
            return this.client.exists(params, callback);
        }

        /**
         * @function  SuperMap.ElasticSearch.prototype.existsSource
         * @description ćŁ€ćźĄčµ„ćş?ć?Żĺ?¦ĺ­?ĺś¨ă€‚</br>
         * ĺŹ‚ć•°č®ľç˝®ĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-existssource}</br>
         * ć›´ĺ¤šäżˇć?ŻĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-get.html}</br>
         * @param {Object} params - ĺŹ‚ć•°ă€‚
         * @param {function} callback - ĺ›žč°?ĺ‡˝ć•°ă€‚
         */

    }, {
        key: 'existsSource',
        value: function existsSource(params, callback) {
            return this.client.existsSource(params, callback);
        }

        /**
         * @function  SuperMap.ElasticSearch.prototype.explain
         * @description ćŹ?äľ›ä¸Žç‰ąĺ®šćźĄčŻ˘ç›¸ĺ…łçš„ç‰ąĺ®šć–‡ćˇŁĺ?†ć•°çš„čŻ¦ç»†äżˇć?Żă€‚ĺ®?čż?äĽšĺ‘ŠčŻ‰ć‚¨ć–‡ćˇŁć?Żĺ?¦ä¸ŽćŚ‡ĺ®šçš„ćźĄčŻ˘ĺŚąé…Ťă€‚</br>
         * ĺŹ‚ć•°č®ľç˝®ĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-explain}</br>
         * ć›´ĺ¤šäżˇć?ŻĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/reference/current/search-explain.html}</br>
         * @param {Object} params - ĺŹ‚ć•°ă€‚
         * @param {function} callback - ĺ›žč°?ĺ‡˝ć•°ă€‚
         */

    }, {
        key: 'explain',
        value: function explain(params, callback) {
            return this.client.explain(params, callback);
        }

        /**
         * @function  SuperMap.ElasticSearch.prototype.fieldCaps
         * @description ĺ…?č®¸ćŁ€ç´˘ĺ¤šä¸Şç´˘ĺĽ•äą‹é—´çš„ĺ­—ć®µçš„ĺŠźč?˝ă€‚(ĺ®žéŞŚć€§APIďĽŚĺŹŻč?˝äĽšĺś¨ćśŞćťĄç‰?ćś¬ä¸­ĺ? é™¤)</br>
         * ĺŹ‚ć•°č®ľç˝®ĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-fieldcaps}</br>
         * ć›´ĺ¤šäżˇć?ŻĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/reference/current/search-field-caps.html}</br>
         * @param {Object} params - ĺŹ‚ć•°ă€‚
         * @param {function} callback - ĺ›žč°?ĺ‡˝ć•°ă€‚
         */

    }, {
        key: 'fieldCaps',
        value: function fieldCaps(params, callback) {
            return this.client.fieldCaps(params, callback);
        }

        /**
         * @function  SuperMap.ElasticSearch.prototype.get
         * @description ä»Žç´˘ĺĽ•čŽ·ĺŹ–ä¸€ä¸ŞĺźşäşŽĺ…¶idçš„ç±»ĺž‹çš„JSONć–‡ćˇŁă€‚</br>
         * ĺŹ‚ć•°č®ľç˝®ĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-get}</br>
         * ć›´ĺ¤šäżˇć?ŻĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-get.html}</br>
         * @param {Object} params - ĺŹ‚ć•°ă€‚
         * @param {function} callback - ĺ›žč°?ĺ‡˝ć•°ă€‚
         */

    }, {
        key: 'get',
        value: function get(params, callback) {
            return this.client.get(params, callback);
        }

        /**
         * @function  SuperMap.ElasticSearch.prototype.getScript
         * @description čŽ·ĺŹ–č„šćś¬ă€‚</br>
         * ĺŹ‚ć•°č®ľç˝®ĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-getscript}</br>
         * ć›´ĺ¤šäżˇć?ŻĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-scripting.html}</br>
         * @param {Object} params - ĺŹ‚ć•°ă€‚
         * @param {function} callback - ĺ›žč°?ĺ‡˝ć•°ă€‚
         */

    }, {
        key: 'getScript',
        value: function getScript(params, callback) {
            return this.client.getScript(params, callback);
        }

        /**
         * @function  SuperMap.ElasticSearch.prototype.getSource
         * @description é€ščż‡ç´˘ĺĽ•ďĽŚç±»ĺž‹ĺ’ŚIDčŽ·ĺŹ–ć–‡ćˇŁçš„ćş?ă€‚</br>
         * ĺŹ‚ć•°č®ľç˝®ĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-getsource}</br>
         * ć›´ĺ¤šäżˇć?ŻĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-get.html}</br>
         * @param {Object} params - ĺŹ‚ć•°ă€‚
         * @param {function} callback - ĺ›žč°?ĺ‡˝ć•°ă€‚
         */

    }, {
        key: 'getSource',
        value: function getSource(params, callback) {
            return this.client.getSource(params, callback);
        }

        /**
         * @function  SuperMap.ElasticSearch.prototype.getTemplate
         * @description čŽ·ĺŹ–ć¨ˇćťżă€‚</br>
         * ĺŹ‚ć•°č®ľç˝®ĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-gettemplate}</br>
         * ć›´ĺ¤šäżˇć?ŻĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/reference/current/search-template.html}</br>
         * @param {Object} params - ĺŹ‚ć•°ă€‚
         * @param {function} callback - ĺ›žč°?ĺ‡˝ć•°ă€‚
         */

    }, {
        key: 'getTemplate',
        value: function getTemplate(params, callback) {
            return this.client.getTemplate(params, callback);
        }

        /**
         * @function  SuperMap.ElasticSearch.prototype.index
         * @description ĺś¨ç´˘ĺĽ•ä¸­ĺ­?ĺ‚¨ä¸€ä¸Şé”®ĺ…Ąçš„JSONć–‡ćˇŁďĽŚä˝żĺ…¶ĺŹŻć?śç´˘ă€‚</br>
         * ĺŹ‚ć•°č®ľç˝®ĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-index}</br>
         * ć›´ĺ¤šäżˇć?ŻĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-index_.html}</br>
         * @param {Object} params - ĺŹ‚ć•°ă€‚
         * @param {function} callback - ĺ›žč°?ĺ‡˝ć•°ă€‚
         */

    }, {
        key: 'index',
        value: function index(params, callback) {
            return this.client.index(params, callback);
        }

        /**
         * @function  SuperMap.ElasticSearch.prototype.info
         * @description ä»Žĺ˝“ĺ‰Ťé›†çľ¤čŽ·ĺŹ–ĺźşćś¬äżˇć?Żă€‚</br>
         * ĺŹ‚ć•°č®ľç˝®ĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-info}</br>
         * ć›´ĺ¤šäżˇć?ŻĺŹ‚č€? {@link https://www.elastic.co/guide/index.html}</br>
         * @param {Object} params - ĺŹ‚ć•°ă€‚
         * @param {function} callback - ĺ›žč°?ĺ‡˝ć•°ă€‚
         */

    }, {
        key: 'info',
        value: function info(params, callback) {
            return this.client.info(params, callback);
        }

        /**
         * @function  SuperMap.ElasticSearch.prototype.mget
         * @description ć ąćŤ®ç´˘ĺĽ•ďĽŚç±»ĺž‹ďĽ?ĺŹŻé€‰ďĽ‰ĺ’ŚidsćťĄčŽ·ĺŹ–ĺ¤šä¸Şć–‡ćˇŁă€‚mgetć‰€éś€çš„ä¸»ä˝“ĺŹŻä»Ąé‡‡ç”¨ä¸¤ç§Ťĺ˝˘ĺĽŹďĽšć–‡ćˇŁä˝Ťç˝®ć•°ç»„ć?–ć–‡ćˇŁIDć•°ç»„ă€‚</br>
         * ĺŹ‚ć•°č®ľç˝®ĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-mget}</br>
         * ć›´ĺ¤šäżˇć?ŻĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-multi-get.html}</br>
         * @param {Object} params - ĺŹ‚ć•°ă€‚
         * @param {function} callback - ĺ›žč°?ĺ‡˝ć•°ă€‚
         */

    }, {
        key: 'mget',
        value: function mget(params, callback) {
            return this.client.mget(params, callback);
        }

        /**
         * @function  SuperMap.ElasticSearch.prototype.msearch
         * @description ĺś¨ĺ?Śä¸€čŻ·ć±‚ä¸­ć‰§čˇŚĺ¤šä¸Şć?śç´˘čŻ·ć±‚ă€‚</br>
         * ĺŹ‚ć•°č®ľç˝®ĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-msearch}</br>
         * ć›´ĺ¤šäżˇć?ŻĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/reference/current/search-multi-search.html}</br>
         * @param {Object} params - ĺŹ‚ć•°ă€‚
         * @param {function} callback - čŻ·ć±‚čż”ĺ›žçš„ĺ›žč°?ĺ‡˝ć•°ă€‚äąźĺŹŻä»Ąä˝żç”¨thenčˇ¨čľľĺĽŹčŽ·ĺŹ–čż”ĺ›žç»“ćžśă€‚
         *     ĺ›žč°?ĺŹ‚ć•°ďĽšerror,responseă€‚ç»“ćžśĺ­?ĺ‚¨ĺś¨response.responsesä¸­
         */

    }, {
        key: 'msearch',
        value: function msearch(params, callback) {
            var me = this;

            return me.client.msearch(params).then(function (resp) {
                me._update(resp.responses, callback);
                return resp;
            }, function (err) {
                callback(err);
                me.events.triggerEvent('error', { error: err });
                return err;
            });
        }

        /**
         * @function  SuperMap.ElasticSearch.prototype.msearchTemplate
         * @description ĺś¨ĺ?Śä¸€čŻ·ć±‚ä¸­ć‰§čˇŚĺ¤šä¸Şć?śç´˘ć¨ˇćťżčŻ·ć±‚ă€‚</br>
         * ĺŹ‚ć•°č®ľç˝®ĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-msearchtemplate}</br>
         * ć›´ĺ¤šäżˇć?ŻĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/reference/current/search-template.html}</br>
         * @param {Object} params - ĺŹ‚ć•°ă€‚
         * @param {function} callback - ĺ›žč°?ĺ‡˝ć•°ă€‚
         */

    }, {
        key: 'msearchTemplate',
        value: function msearchTemplate(params, callback) {
            return this.client.msearchTemplate(params, callback);
        }

        /**
         * @function  SuperMap.ElasticSearch.prototype.mtermvectors
         * @description ĺ¤štermvectors APIĺ…?č®¸ä¸€ć¬ˇčŽ·ĺľ—ĺ¤šä¸Ştermvectorsă€‚</br>
         * ĺŹ‚ć•°č®ľç˝®ĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-mtermvectors}</br>
         * ć›´ĺ¤šäżˇć?ŻĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-multi-termvectors.html}</br>
         * @param {Object} params - ĺŹ‚ć•°ă€‚
         * @param {function} callback - ĺ›žč°?ĺ‡˝ć•°ă€‚
         */

    }, {
        key: 'mtermvectors',
        value: function mtermvectors(params, callback) {
            return this.client.mtermvectors(params, callback);
        }

        /**
         * @function  SuperMap.ElasticSearch.prototype.ping
         * @description ćµ‹čŻ•čżžćŽĄă€‚</br>
         * ĺŹ‚ć•°č®ľç˝®ĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-ping}</br>
         * ć›´ĺ¤šäżˇć?ŻĺŹ‚č€? {@link https://www.elastic.co/guide/index.html}</br>
         * @param {Object} params - ĺŹ‚ć•°ă€‚
         * @param {function} callback - ĺ›žč°?ĺ‡˝ć•°ă€‚
         */

    }, {
        key: 'ping',
        value: function ping(params, callback) {
            return this.client.ping(params, callback);
        }

        /**
         * @function  SuperMap.ElasticSearch.prototype.putScript
         * @description ć·»ĺŠ č„šćś¬ă€‚</br>
         * ĺŹ‚ć•°č®ľç˝®ĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-putscript}</br>
         * ć›´ĺ¤šäżˇć?ŻĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-scripting.html}</br>
         * @param {Object} params - ĺŹ‚ć•°ă€‚
         * @param {function} callback - ĺ›žč°?ĺ‡˝ć•°ă€‚
         */

    }, {
        key: 'putScript',
        value: function putScript(params, callback) {
            return this.client.putScript(params, callback);
        }

        /**
         * @function  SuperMap.ElasticSearch.prototype.putTemplate
         * @description ć·»ĺŠ ć¨ˇćťżă€‚</br>
         * ĺŹ‚ć•°č®ľç˝®ĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-puttemplate}</br>
         * ć›´ĺ¤šäżˇć?ŻĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/reference/current/search-template.html}</br>
         * @param {Object} params - ĺŹ‚ć•°ă€‚
         * @param {function} callback - ĺ›žč°?ĺ‡˝ć•°ă€‚
         */

    }, {
        key: 'putTemplate',
        value: function putTemplate(params, callback) {
            return this.client.putTemplate(params, callback);
        }

        /**
         * @function  SuperMap.ElasticSearch.prototype.reindex
         * @description é‡Ťć–°ç´˘ĺĽ•ă€‚</br>
         * ĺŹ‚ć•°č®ľç˝®ĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-reindex}</br>
         * ć›´ĺ¤šäżˇć?ŻĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-reindex.html}</br>
         * @param {Object} params - ĺŹ‚ć•°ă€‚
         * @param {function} callback - ĺ›žč°?ĺ‡˝ć•°ă€‚
         */

    }, {
        key: 'reindex',
        value: function reindex(params, callback) {
            return this.client.reindex(params, callback);
        }

        /**
         * @function  SuperMap.ElasticSearch.prototype.reindexRessrottle
         * @description é‡Ťć–°ç´˘ĺĽ•ă€‚</br>
         * ĺŹ‚ć•°č®ľç˝®ĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-reindexrethrottle}</br>
         * ć›´ĺ¤šäżˇć?ŻĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-reindex.html}</br>
         * @param {Object} params - ĺŹ‚ć•°ă€‚
         * @param {function} callback - ĺ›žč°?ĺ‡˝ć•°ă€‚
         */

    }, {
        key: 'reindexRessrottle',
        value: function reindexRessrottle(params, callback) {
            return this.client.reindexRessrottle(params, callback);
        }

        /**
         * @function  SuperMap.ElasticSearch.prototype.renderSearchTemplate
         * @description ć?śç´˘ć¨ˇćťżă€‚</br>
         * ĺŹ‚ć•°č®ľç˝®ĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-rendersearchtemplate}</br>
         * ć›´ĺ¤šäżˇć?ŻĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/reference/current/search-template.html}</br>
         * @param {Object} params - ĺŹ‚ć•°ă€‚
         * @param {function} callback - ĺ›žč°?ĺ‡˝ć•°ă€‚
         */

    }, {
        key: 'renderSearchTemplate',
        value: function renderSearchTemplate(params, callback) {
            return this.client.renderSearchTemplate(params, callback);
        }

        /**
         * @function  SuperMap.ElasticSearch.prototype.scroll
         * @description  ĺś¨search()č°?ç”¨ä¸­ćŚ‡ĺ®šć»šĺŠ¨ĺŹ‚ć•°äą‹ĺ?ŽďĽŚć»šĺŠ¨ć?śç´˘čŻ·ć±‚ďĽ?ćŁ€ç´˘ä¸‹ä¸€ç»„ç»“ćžśďĽ‰ă€‚</br>
         * ĺŹ‚ć•°č®ľç˝®ĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-scroll}</br>
         * ć›´ĺ¤šäżˇć?ŻĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/reference/current/search-request-scroll.html}</br>
         * @param {Object} params - ĺŹ‚ć•°ă€‚
         * @param {function} callback - ĺ›žč°?ĺ‡˝ć•°ă€‚
         */

    }, {
        key: 'scroll',
        value: function scroll(params, callback) {
            return this.client.scroll(params, callback);
        }

        /**
         * @function  SuperMap.ElasticSearch.prototype.search
         * @description  ĺś¨search()č°?ç”¨ä¸­ćŚ‡ĺ®šć»šĺŠ¨ĺŹ‚ć•°äą‹ĺ?ŽďĽŚć»šĺŠ¨ć?śç´˘čŻ·ć±‚ďĽ?ćŁ€ç´˘ä¸‹ä¸€ç»„ç»“ćžśďĽ‰ă€‚
         * ĺŹ‚ć•°č®ľç˝®ĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-search}</br>
         * ć›´ĺ¤šäżˇć?ŻĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/reference/current/search-search.html}</br>
         * @param {Object} params - ĺŹ‚ć•°ă€‚
         * @param {function} callback - čŻ·ć±‚čż”ĺ›žçš„ĺ›žč°?ĺ‡˝ć•°ă€‚äąźĺŹŻä»Ąä˝żç”¨thenčˇ¨čľľĺĽŹčŽ·ĺŹ–čż”ĺ›žç»“ćžśă€‚
         *     ĺ›žč°?ĺŹ‚ć•°ďĽšerror,response,ç»“ćžśĺ­?ĺ‚¨ĺś¨response.responsesä¸­
         */

    }, {
        key: 'search',
        value: function search(params, callback) {
            var me = this;
            return me.client.search(params).then(function (resp) {
                me._update(resp.responses, callback);
                return resp;
            }, function (err) {
                callback(err);
                me.events.triggerEvent('error', { error: err });
                return err;
            });
        }

        /**
         * @function  SuperMap.ElasticSearch.prototype.searchShards
         * @description  čż”ĺ›žč¦?ć‰§čˇŚć?śç´˘čŻ·ć±‚çš„ç´˘ĺĽ•ĺ’Śĺ?†ç‰‡ă€‚
         * ĺŹ‚ć•°č®ľç˝®ĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-searchshards}</br>
         * ć›´ĺ¤šäżˇć?ŻĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/reference/current/search-shards.html}</br>
         * @param {Object} params - ĺŹ‚ć•°ă€‚
         * @param {function} callback - ĺ›žč°?ĺ‡˝ć•°ă€‚
         */

    }, {
        key: 'searchShards',
        value: function searchShards(params, callback) {
            return this.client.searchShards(params, callback);
        }

        /**
         * @function  SuperMap.ElasticSearch.prototype.searchTemplate
         * @description  ć?śç´˘ć¨ˇćťżă€‚
         * ĺŹ‚ć•°č®ľç˝®ĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-searchtemplate}</br>
         * ć›´ĺ¤šäżˇć?ŻĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/reference/current/search-suggesters.html}</br>
         * @param {Object} params - ĺŹ‚ć•°ă€‚
         * @param {function} callback - ĺ›žč°?ĺ‡˝ć•°ă€‚
         */

    }, {
        key: 'searchTemplate',
        value: function searchTemplate(params, callback) {
            return this.client.searchTemplate(params, callback);
        }

        /**
         * @function  SuperMap.ElasticSearch.prototype.suggest
         * @description čŻĄĺ»şč®®ĺŠźč?˝é€ščż‡ä˝żç”¨ç‰ąĺ®šçš„ĺ»şč®®č€…ďĽŚĺźşäşŽć‰€ćŹ?äľ›çš„ć–‡ćś¬ćťĄĺ»şč®®ç±»äĽĽçš„ćśŻčŻ­ă€‚
         * ĺŹ‚ć•°č®ľç˝®ĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-suggest}</br>
         * ć›´ĺ¤šäżˇć?ŻĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/reference/current/search-suggesters.html}</br>
         * @param {Object} params - ĺŹ‚ć•°ă€‚
         * @param {function} callback - ĺ›žč°?ĺ‡˝ć•°ă€‚
         */

    }, {
        key: 'suggest',
        value: function suggest(params, callback) {
            return this.client.suggest(params, callback);
        }

        /**
         * @function  SuperMap.ElasticSearch.prototype.termvectors
         * @description čż”ĺ›žćś‰ĺ…łç‰ąĺ®šć–‡ćˇŁĺ­—ć®µä¸­çš„ćśŻčŻ­çš„äżˇć?Żĺ’Śç»źč®ˇäżˇć?Żă€‚
         * ĺŹ‚ć•°č®ľç˝®ĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-termvectors}</br>
         * ć›´ĺ¤šäżˇć?ŻĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-termvectors.html}</br>
         * @param {Object} params - ĺŹ‚ć•°ă€‚
         * @param {function} callback - ĺ›žč°?ĺ‡˝ć•°ă€‚
         */

    }, {
        key: 'termvectors',
        value: function termvectors(params, callback) {
            return this.client.termvectors(params, callback);
        }

        /**
         * @function  SuperMap.ElasticSearch.prototype.update
         * @description ć›´ć–°ć–‡ćˇŁçš„é?¨ĺ?†ă€‚
         * ĺŹ‚ć•°č®ľç˝®ĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-update}</br>
         * ć›´ĺ¤šäżˇć?ŻĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-update.html}</br>
         * @param {Object} params - ĺŹ‚ć•°ă€‚
         * @param {function} callback - ĺ›žč°?ĺ‡˝ć•°ă€‚
         */

    }, {
        key: 'update',
        value: function update(params, callback) {
            return this.client.update(params, callback);
        }

        /**
         * @function  SuperMap.ElasticSearch.prototype.update
         * @description é€ščż‡ćźĄčŻ˘APIćťĄć›´ć–°ć–‡ćˇŁă€‚
         * ĺŹ‚ć•°č®ľç˝®ĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-updatebyquery}</br>
         * ć›´ĺ¤šäżˇć?ŻĺŹ‚č€? {@link https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-update-by-query.html}</br>
         * @param {Object} params - ĺŹ‚ć•°ă€‚
         * @param {function} callback - ĺ›žč°?ĺ‡˝ć•°ă€‚
         */

    }, {
        key: 'updateByQuery',
        value: function updateByQuery(params, callback) {
            return this.client.updateByQuery(params, callback);
        }
    }, {
        key: '_update',
        value: function _update(data, callback) {
            var me = this;
            if (!data) {
                return;
            }
            me.data = data;
            if (me.openGeoFence && me.geoFence) {
                me._validateDatas(data);
            }
            me.events.triggerEvent('change', { data: me.data });
            //changeć–ąćł•ĺ·˛ĺşźĺĽ?ďĽŚä¸Ťĺ»şč®®ä˝żç”¨ă€‚ĺ»şč®®ä˝żç”¨searchć–ąćł•çš„ç¬¬äşŚä¸ŞĺŹ‚ć•°äĽ ĺ…ĄčŻ·ć±‚ć??ĺŠźçš„ĺ›žč°?
            if (me.change) {
                me.change && me.change(data);
            } else {
                //ĺŠ responsesć?Żä¸şäş†äżťćŚ?č·źĺŽźćťĄesč‡Şčş«çš„ć•°ćŤ®ç»“ćž„ä¸€č‡´
                callback && callback(undefined, { responses: data });
            }
        }
    }, {
        key: '_validateDatas',
        value: function _validateDatas(datas) {
            if (!datas) {
                return;
            }
            if (!(datas instanceof Array)) {
                datas = [datas];
            }
            var i,
                len = datas.length;
            for (i = 0; i < len; i++) {
                this._validateData(datas[i]);
            }
        }
    }, {
        key: '_validateData',
        value: function _validateData(data) {
            var me = this;
            data.hits.hits.map(function (source) {
                var content = source._source;
                var meterUnit = me._getMeterPerMapUnit(me.geoFence.unit);
                var geoFenceCX = me.geoFence.center[0] * meterUnit;
                var geoFenceCY = me.geoFence.center[1] * meterUnit;
                var contentX = content.x * meterUnit;
                var contentY = content.y * meterUnit;
                var distance = me._distance(contentX, contentY, geoFenceCX, geoFenceCY);
                var radius = me.geoFence.radius;
                if (distance > radius) {
                    me.outOfGeoFence && me.outOfGeoFence(data);
                    me.events.triggerEvent('outOfGeoFence', { data: data });
                }
                return source;
            });
        }
    }, {
        key: '_distance',
        value: function _distance(x1, y1, x2, y2) {
            return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
        }
    }, {
        key: '_getMeterPerMapUnit',
        value: function _getMeterPerMapUnit(mapUnit) {
            var earchRadiusInMeters = 6378137;
            var meterPerMapUnit = void 0;
            if (mapUnit === 'meter') {
                meterPerMapUnit = 1;
            } else if (mapUnit === 'degree') {
                // ćŻŹĺş¦čˇ¨ç¤şĺ¤šĺ°‘ç±łă€‚
                meterPerMapUnit = Math.PI * 2 * earchRadiusInMeters / 360;
            }
            return meterPerMapUnit;
        }
    }]);

    return ElasticSearch;
}();

_SuperMap.SuperMap.ElasticSearch = ElasticSearch;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ElasticSearch = __webpack_require__(55);

Object.defineProperty(exports, 'ElasticSearch', {
  enumerable: true,
  get: function get() {
    return _ElasticSearch.ElasticSearch;
  }
});

var _SecurityManager = __webpack_require__(8);

Object.defineProperty(exports, 'SecurityManager', {
  enumerable: true,
  get: function get() {
    return _SecurityManager.SecurityManager;
  }
});

var _KernelDensityJobParameter = __webpack_require__(20);

Object.defineProperty(exports, 'KernelDensityJobParameter', {
  enumerable: true,
  get: function get() {
    return _KernelDensityJobParameter.KernelDensityJobParameter;
  }
});

var _SingleObjectQueryJobsParameter = __webpack_require__(19);

Object.defineProperty(exports, 'SingleObjectQueryJobsParameter', {
  enumerable: true,
  get: function get() {
    return _SingleObjectQueryJobsParameter.SingleObjectQueryJobsParameter;
  }
});

var _SummaryAttributesJobsParameter = __webpack_require__(18);

Object.defineProperty(exports, 'SummaryAttributesJobsParameter', {
  enumerable: true,
  get: function get() {
    return _SummaryAttributesJobsParameter.SummaryAttributesJobsParameter;
  }
});

var _SummaryMeshJobParameter = __webpack_require__(17);

Object.defineProperty(exports, 'SummaryMeshJobParameter', {
  enumerable: true,
  get: function get() {
    return _SummaryMeshJobParameter.SummaryMeshJobParameter;
  }
});

var _SummaryRegionJobParameter = __webpack_require__(16);

Object.defineProperty(exports, 'SummaryRegionJobParameter', {
  enumerable: true,
  get: function get() {
    return _SummaryRegionJobParameter.SummaryRegionJobParameter;
  }
});

var _OverlayGeoJobParameter = __webpack_require__(15);

Object.defineProperty(exports, 'OverlayGeoJobParameter', {
  enumerable: true,
  get: function get() {
    return _OverlayGeoJobParameter.OverlayGeoJobParameter;
  }
});

var _BuffersAnalystJobsParameter = __webpack_require__(14);

Object.defineProperty(exports, 'BuffersAnalystJobsParameter', {
  enumerable: true,
  get: function get() {
    return _BuffersAnalystJobsParameter.BuffersAnalystJobsParameter;
  }
});

var _TopologyValidatorJobsParameter = __webpack_require__(13);

Object.defineProperty(exports, 'TopologyValidatorJobsParameter', {
  enumerable: true,
  get: function get() {
    return _TopologyValidatorJobsParameter.TopologyValidatorJobsParameter;
  }
});

var _OutputSetting = __webpack_require__(3);

Object.defineProperty(exports, 'OutputSetting', {
  enumerable: true,
  get: function get() {
    return _OutputSetting.OutputSetting;
  }
});

var _GeoCodingParameter = __webpack_require__(12);

Object.defineProperty(exports, 'GeoCodingParameter', {
  enumerable: true,
  get: function get() {
    return _GeoCodingParameter.GeoCodingParameter;
  }
});

var _GeoDecodingParameter = __webpack_require__(11);

Object.defineProperty(exports, 'GeoDecodingParameter', {
  enumerable: true,
  get: function get() {
    return _GeoDecodingParameter.GeoDecodingParameter;
  }
});

var _overlay = __webpack_require__(43);

Object.keys(_overlay).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _overlay[key];
    }
  });
});

var _services = __webpack_require__(39);

Object.keys(_services).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _services[key];
    }
  });
});

var _SuperMap = __webpack_require__(5);

Object.defineProperty(exports, 'SuperMap', {
  enumerable: true,
  get: function get() {
    return _SuperMap.SuperMap;
  }
});

/***/ })
/******/ ]);