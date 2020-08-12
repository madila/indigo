(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["indigo-sidebarStick"],{

/***/ "./src/js/modules/sidebarStick.js":
/*!****************************************!*\
  !*** ./src/js/modules/sidebarStick.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sticky_sidebar_v2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sticky-sidebar-v2 */ "./node_modules/sticky-sidebar-v2/src/sticky-sidebar.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


window.stickySidebar = false;
window.isPageTemplate = document.querySelector('.page-template-default');
var sidebarElement = document.querySelector('.vertical-sidebar #secondary');

if (sidebarElement && !window.isPageTemplate) {
  function enableStickySidebar() {
    console.log('enabling sticky sidebar');
    window.stickySidebar = new sticky_sidebar_v2__WEBPACK_IMPORTED_MODULE_0__["default"]('#secondary', {
      containerSelector: '#primary',
      innerWrapperSelector: '.widget-area',
      topSpacing: function topSpacing() {
        return document.querySelector('.site-header').clientHeight;
      },
      bottomSpacing: 0
    });
  }

  function reCalculateStickySidebar() {
    if ('stickySidebar' in window && window.stickySidebar) {
      if (window.innerWidth > 769) {
        window.stickySidebar.updateSticky();
      } else {
        window.stickySidebar.destroy();
      }
    } else {
      if (window.innerWidth > 769) {
        enableStickySidebar();
      }
    }
  }

  ;

  if (window.innerWidth > 769) {
    window.addEventListener('load', enableStickySidebar);
    reCalculateStickySidebar();
  }

  window.addEventListener('resize', Object(lodash__WEBPACK_IMPORTED_MODULE_1__["debounce"])(reCalculateStickySidebar, 100));
}

/***/ })

}]);
//# sourceMappingURL=indigo-sidebarStick.js.map