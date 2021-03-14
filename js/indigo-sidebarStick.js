(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["indigo-sidebarStick"],{

/***/ "./src/js/modules/sidebarStick.js":
/*!****************************************!*\
  !*** ./src/js/modules/sidebarStick.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/index-of */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sticky_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sticky-sidebar */ "./node_modules/sticky-sidebar/src/sticky-sidebar.js");
/* harmony import */ var css_element_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! css-element-queries */ "./node_modules/css-element-queries/index.js");
/* harmony import */ var css_element_queries__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(css_element_queries__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




var isPageTemplate = document.querySelector('.page-template-default');
var sidebarElement = document.querySelector('.has-sticky-sidebar #secondary');

if (sidebarElement && !isPageTemplate) {
  var _context, _context2;

  var stickySidebar = null;
  var topSpacing = 0;

  if (_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_0___default()(_context = document.body.className).call(_context, 'has-fixed-header') > 0) {
    topSpacing = function topSpacing() {
      return document.querySelector('.site-header').clientHeight;
    };
  }

  if (_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = document.body.className).call(_context2, 'admin-bar') > 0) {
    topSpacing = 50;
  }

  var options = {
    containerSelector: '#primary',
    resizeSensor: true,
    innerWrapperSelector: '.widget-area',
    topSpacing: topSpacing
  };

  function enableStickySidebar() {
    if (window.innerWidth < 769) return false;
    stickySidebar = new sticky_sidebar__WEBPACK_IMPORTED_MODULE_1__["default"]('#secondary', options);
  }

  function reCalculateStickySidebar() {
    console.log(stickySidebar);

    if (stickySidebar) {
      if (window.innerWidth > 769) {
        stickySidebar.updateSticky();
      } else {
        stickySidebar.destroy();
      }
    } else {
      enableStickySidebar();
    }
  }

  window.addEventListener('load', enableStickySidebar);
  reCalculateStickySidebar();
  window.addEventListener('resize', Object(lodash__WEBPACK_IMPORTED_MODULE_3__["debounce"])(reCalculateStickySidebar, 100));
}

/***/ })

}]);
//# sourceMappingURL=indigo-sidebarStick.js.map