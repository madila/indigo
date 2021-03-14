(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["indigo-fullpage"],{

/***/ "./src/js/modules/fullPageInit.js":
/*!****************************************!*\
  !*** ./src/js/modules/fullPageInit.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/assign */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/assign.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fullpage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fullpage.js */ "./node_modules/fullpage.js/dist/fullpage.js");
/* harmony import */ var fullpage_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fullpage_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fullpage_js_vendors_scrolloverflow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fullpage.js/vendors/scrolloverflow */ "./node_modules/fullpage.js/vendors/scrolloverflow.js");
/* harmony import */ var fullpage_js_vendors_scrolloverflow__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fullpage_js_vendors_scrolloverflow__WEBPACK_IMPORTED_MODULE_2__);



var fullPageElement = document.querySelector('.full-page-container');

if (fullPageElement && 'fullPageLicense' in window.indigo) {
  var fullPageConfig = {
    fitToSectionDelay: 0,
    licenseKey: window.indigo.fullPageLicense,
    sectionSelector: '.wp-block-ampersand-panel-block'
  };
  var childConfig = {};

  if ('indigo' in window && 'fullPageOptions' in window.indigo) {
    childConfig = window.indigo.fullPageOptions;
  }

  if ('fullPageOptions' in window) {
    childConfig = window.fullPageOptions;
  }

  console.log(childConfig);

  var options = _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(fullPageConfig, childConfig);

  console.log(options);
  var event = new Event('fullpage_init'); // Dispatch the event.

  document.dispatchEvent(event);
  new fullpage_js__WEBPACK_IMPORTED_MODULE_1___default.a(fullPageElement, options);
}

/***/ })

}]);
//# sourceMappingURL=indigo-fullpage.js.map