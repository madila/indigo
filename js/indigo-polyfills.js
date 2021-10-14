"use strict";
(self["webpackChunkindigo"] = self["webpackChunkindigo"] || []).push([["indigo-polyfills"],{

/***/ "./src/js/modules/polyfills.js":
/*!*************************************!*\
  !*** ./src/js/modules/polyfills.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/trim */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/trim.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_entries__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/entries */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/entries.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_entries__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_entries__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_values__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/values */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/values.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_values__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_values__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/keys */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! object-fit-images */ "./node_modules/object-fit-images/dist/ofi.common-js.js");
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(object_fit_images__WEBPACK_IMPORTED_MODULE_14__);















object_fit_images__WEBPACK_IMPORTED_MODULE_14___default()();
/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
// 1. String.prototype.trim polyfill

if (!_babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_10___default()("")) String.prototype.trim = function () {
  return this.replace(/^[\s﻿]+|[\s﻿]+$/g, '');
};

(function (window) {
  "use strict"; // prevent global namespace pollution

  if (!window.DOMException) (DOMException = function DOMException(reason) {
    this.message = reason;
  }).prototype = new Error();

  var wsRE = /[\11\12\14\15\40]/,
      wsIndex = 0,
      checkIfValidClassListEntry = function checkIfValidClassListEntry(O, V) {
    if (V === "") throw new DOMException("Failed to execute '" + O + "' on 'DOMTokenList': The token provided must not be empty.");
    if ((wsIndex = V.search(wsRE)) !== -1) throw new DOMException("Failed to execute '" + O + "' on 'DOMTokenList': " + "The token provided ('" + V[wsIndex] + "') contains HTML space characters, which are not valid in tokens.");
  }; // 2. Implement the barebones DOMTokenList livelyness polyfill


  if (typeof DOMTokenList !== "function") (function (window) {
    var document = window.document,
        Object = window.Object,
        hasOwnProp = Object.prototype.hasOwnProperty;
    var defineProperty = Object.defineProperty,
        allowTokenListConstruction = 0,
        skipPropChange = 0;

    function DOMTokenList() {
      if (!allowTokenListConstruction) throw TypeError("Illegal constructor"); // internally let it through
    }

    DOMTokenList.prototype.toString = DOMTokenList.prototype.toLocaleString = function () {
      return this.value;
    };

    DOMTokenList.prototype.add = function () {
      a: for (var v = 0, argLen = arguments.length, val = "", _ele = this[" uCL"], _proto = _ele[" uCLp"]; v !== argLen; ++v) {
        val = arguments[v] + "", checkIfValidClassListEntry("add", val);

        for (var i = 0, _Len = _proto.length, _resStr = val; i !== _Len; ++i) {
          if (this[i] === val) continue a;else _resStr += " " + this[i];
        }

        this[Len] = val, _proto.length += 1, _proto.value = resStr;
      }

      skipPropChange = 1, ele.className = proto.value, skipPropChange = 0;
    };

    DOMTokenList.prototype.remove = function () {
      for (var v = 0, argLen = arguments.length, val = "", _ele2 = this[" uCL"], _proto2 = _ele2[" uCLp"]; v !== argLen; ++v) {
        val = arguments[v] + "", checkIfValidClassListEntry("remove", val);

        for (var i = 0, _Len2 = _proto2.length, _resStr2 = "", _is = 0; i !== _Len2; ++i) {
          if (_is) {
            this[i - 1] = this[i];
          } else {
            if (this[i] !== val) {
              _resStr2 += this[i] + " ";
            } else {
              _is = 1;
            }
          }
        }

        if (!is) continue;
        delete this[Len], _proto2.length -= 1, _proto2.value = resStr;
      }

      skipPropChange = 1, ele.className = proto.value, skipPropChange = 0;
    };

    window.DOMTokenList = DOMTokenList;

    function whenPropChanges() {
      var evt = window.event,
          prop = evt.propertyName;

      if (!skipPropChange && (prop === "className" || prop === "classList" && !defineProperty)) {
        var target = evt.srcElement,
            protoObjProto = target[" uCLp"],
            strval = "" + target[prop];

        var tokens = _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_10___default()(strval).call(strval).split(wsRE),
            resTokenList = target[prop === "classList" ? " uCL" : "classList"];

        var oldLen = protoObjProto.length;

        a: for (var cI = 0, _cLen = protoObjProto.length = tokens.length, _sub = 0; cI !== _cLen; ++cI) {
          for (var innerI = 0; innerI !== cI; ++innerI) {
            if (tokens[innerI] === tokens[cI]) {
              _sub++;
              continue a;
            }
          }

          resTokenList[cI - _sub] = tokens[cI];
        }

        for (var i = cLen - sub; i < oldLen; ++i) {
          delete resTokenList[i];
        } //remove trailing indexs


        if (prop !== "classList") return;
        skipPropChange = 1, target.classList = resTokenList, target.className = strval;
        skipPropChange = 0, resTokenList.length = tokens.length - sub;
      }
    }

    function polyfillClassList(ele) {
      if (!ele || !("innerHTML" in ele)) throw TypeError("Illegal invocation");
      ele.detachEvent("onpropertychange", whenPropChanges); // prevent duplicate handler infinite loop

      allowTokenListConstruction = 1;

      try {
        function _protoObj() {}

        _protoObj.prototype = new DOMTokenList();
      } finally {
        allowTokenListConstruction = 0;
      }

      var protoObjProto = protoObj.prototype,
          resTokenList = new protoObj();

      a: for (var toks = _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_10___default()(_context = ele.className).call(_context).split(wsRE), cI = 0, _cLen2 = toks.length, _sub2 = 0; cI !== _cLen2; ++cI) {
        var _context;

        for (var innerI = 0; innerI !== cI; ++innerI) {
          if (toks[innerI] === toks[cI]) {
            _sub2++;
            continue a;
          }
        }

        this[cI - _sub2] = toks[cI];
      }

      protoObjProto.length = cLen - sub, protoObjProto.value = ele.className, protoObjProto[" uCL"] = ele;

      if (defineProperty) {
        defineProperty(ele, "classList", {
          // IE8 & IE9 allow defineProperty on the DOM
          enumerable: 1,
          get: function get() {
            return resTokenList;
          },
          configurable: 0,
          set: function set(newVal) {
            skipPropChange = 1, ele.className = protoObjProto.value = newVal += "", skipPropChange = 0;

            var toks = _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_10___default()(newVal).call(newVal).split(wsRE),
                oldLen = protoObjProto.length;

            a: for (var _cI = 0, _cLen3 = protoObjProto.length = toks.length, _sub3 = 0; _cI !== _cLen3; ++_cI) {
              for (var _innerI = 0; _innerI !== _cI; ++_innerI) {
                if (toks[_innerI] === toks[_cI]) {
                  _sub3++;
                  continue a;
                }
              }

              resTokenList[_cI - _sub3] = toks[_cI];
            }

            for (var i = cLen - sub; i < oldLen; ++i) {
              delete resTokenList[i];
            } //remove trailing indexs

          }
        });
        defineProperty(ele, " uCLp", {
          // for accessing the hidden prototype
          enumerable: 0,
          configurable: 0,
          writeable: 0,
          value: protoObj.prototype
        });
        defineProperty(protoObjProto, " uCL", {
          enumerable: 0,
          configurable: 0,
          writeable: 0,
          value: ele
        });
      } else {
        ele.classList = resTokenList, ele[" uCL"] = resTokenList, ele[" uCLp"] = protoObj.prototype;
      }

      ele.attachEvent("onpropertychange", whenPropChanges);
    }

    try {
      // Much faster & cleaner version for IE8 & IE9:
      // Should work in IE8 because Element.prototype instanceof Node is true according to the specs
      window.Object.defineProperty(window.Element.prototype, "classList", {
        enumerable: 1,
        get: function get(val) {
          if (!hasOwnProp.call(this, "classList")) polyfillClassList(this);
          return this.classList;
        },
        configurable: 0,
        set: function set(val) {
          this.className = val;
        }
      });
    } catch (e) {
      // Less performant fallback for older browsers (IE 6-8):
      window[" uCL"] = polyfillClassList; // the below code ensures polyfillClassList is applied to all current and future elements in the doc.

      document.documentElement.firstChild.appendChild(document.createElement('style')).styleSheet.cssText = '_*{x-uCLp:expression(!this.hasOwnProperty("classList")&&window[" uCL"](this))}' + //  IE6
      '[class]{x-uCLp/**/:expression(!this.hasOwnProperty("classList")&&window[" uCL"](this))}' //IE7-8
      ;
    }
  })(window); // 3. Patch in unsupported methods in DOMTokenList

  (function (DOMTokenListProto, testClass) {
    if (!DOMTokenListProto.item) DOMTokenListProto.item = function (i) {
      function NullCheck(n) {
        return n === void 0 ? null : n;
      }

      return NullCheck(this[i]);
    };
    if (!DOMTokenListProto.toggle || testClass.toggle("a", 0) !== false) DOMTokenListProto.toggle = function (val) {
      if (arguments.length > 1) return this[arguments[1] ? "add" : "remove"](val), !!arguments[1];
      var oldValue = this.value;
      return this.remove(oldValue), oldValue === this.value && (this.add(val), true)
      /*|| false*/
      ;
    };
    if (!DOMTokenListProto.replace || typeof testClass.replace("a", "b") !== "boolean") DOMTokenListProto.replace = function (oldToken, newToken) {
      checkIfValidClassListEntry("replace", oldToken), checkIfValidClassListEntry("replace", newToken);
      var oldValue = this.value;
      return this.remove(oldToken), this.value !== oldValue && (this.add(newToken), true);
    };
    if (!DOMTokenListProto.contains) DOMTokenListProto.contains = function (value) {
      for (var i = 0, _Len3 = this.length; i !== _Len3; ++i) {
        if (this[i] === value) return true;
      }

      return false;
    };
    if (!DOMTokenListProto.forEach) DOMTokenListProto.forEach = function (f) {
      if (arguments.length === 1) for (var i = 0, _Len4 = this.length; i !== _Len4; ++i) {
        f(this[i], i, this);
      } else for (var _i = 0, _Len5 = this.length, tArg = arguments[1]; _i !== _Len5; ++_i) {
        f.call(tArg, this[_i], _i, this);
      }
    };
    if (!_babel_runtime_corejs3_core_js_stable_instance_entries__WEBPACK_IMPORTED_MODULE_11___default()(DOMTokenListProto)) DOMTokenListProto.entries = function () {
      var nextIndex = 0,
          that = this;
      return {
        next: function next() {
          return nextIndex < that.length ? {
            value: [nextIndex, that[nextIndex++]],
            done: false
          } : {
            done: true
          };
        }
      };
    };
    if (!_babel_runtime_corejs3_core_js_stable_instance_values__WEBPACK_IMPORTED_MODULE_12___default()(DOMTokenListProto)) DOMTokenListProto.values = function () {
      var nextIndex = 0,
          that = this;
      return {
        next: function next() {
          return nextIndex < that.length ? {
            value: that[nextIndex++],
            done: false
          } : {
            done: true
          };
        }
      };
    };
    if (!_babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_13___default()(DOMTokenListProto)) DOMTokenListProto.keys = function () {
      var nextIndex = 0,
          that = this;
      return {
        next: function next() {
          return nextIndex < that.length ? {
            value: nextIndex++,
            done: false
          } : {
            done: true
          };
        }
      };
    };
  })(window.DOMTokenList.prototype, window.document.createElement("div").classList);
})(window); // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
// MIT license


(function () {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];

  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    var id = window.setTimeout(function () {
      callback(currTime + timeToCall);
    }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };
  if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
    clearTimeout(id);
  };
})();

/***/ })

}]);
//# sourceMappingURL=indigo-polyfills.js.map