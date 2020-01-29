(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{117:function(e,t,r){"use strict";
/*!
 * css-vars-ponyfill
 * v2.1.2
 * https://jhildenbiddle.github.io/css-vars-ponyfill/
 * (c) 2018-2019 John Hildenbiddle <http://hildenbiddle.com>
 * MIT license
 */
function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function o(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}
/*!
 * get-css-data
 * v1.6.3
 * https://github.com/jhildenbiddle/get-css-data
 * (c) 2018-2019 John Hildenbiddle <http://hildenbiddle.com>
 * MIT license
 */()}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={mimeType:t.mimeType||null,onBeforeSend:t.onBeforeSend||Function.prototype,onSuccess:t.onSuccess||Function.prototype,onError:t.onError||Function.prototype,onComplete:t.onComplete||Function.prototype},n=Array.isArray(e)?e:[e],o=Array.apply(null,Array(n.length)).map((function(e){return null}));function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t="<"===e.trim().charAt(0);return!t}function a(e,t){r.onError(e,n[t],t)}function c(e,t){var s=r.onSuccess(e,n[t],t);e=!1===s?"":s||e,o[t]=e,-1===o.indexOf(null)&&r.onComplete(o)}var i=document.createElement("a");n.forEach((function(e,t){if(i.setAttribute("href",e),i.href=String(i.href),Boolean(document.all&&!window.atob)&&i.host.split(":")[0]!==location.host.split(":")[0]){if(i.protocol===location.protocol){var n=new XDomainRequest;n.open("GET",e),n.timeout=0,n.onprogress=Function.prototype,n.ontimeout=Function.prototype,n.onload=function(){s(n.responseText)?c(n.responseText,t):a(n,t)},n.onerror=function(e){a(n,t)},setTimeout((function(){n.send()}),0)}else console.warn("Internet Explorer 9 Cross-Origin (CORS) requests must use the same protocol (".concat(e,")")),a(null,t)}else{var o=new XMLHttpRequest;o.open("GET",e),r.mimeType&&o.overrideMimeType&&o.overrideMimeType(r.mimeType),r.onBeforeSend(o,e,t),o.onreadystatechange=function(){4===o.readyState&&(200===o.status&&s(o.responseText)?c(o.responseText,t):a(o,t))},o.send()}}))}
/**
 * Gets CSS data from <style> and <link> nodes (including @imports), then
 * returns data in order processed by DOM. Allows specifying nodes to
 * include/exclude and filtering CSS data using RegEx.
 *
 * @preserve
 * @param {object}   [options] The options object
 * @param {object}   [options.rootElement=document] Root element to traverse for
 *                   <link> and <style> nodes.
 * @param {string}   [options.include] CSS selector matching <link> and <style>
 *                   nodes to include
 * @param {string}   [options.exclude] CSS selector matching <link> and <style>
 *                   nodes to exclude
 * @param {object}   [options.filter] Regular expression used to filter node CSS
 *                   data. Each block of CSS data is tested against the filter,
 *                   and only matching data is included.
 * @param {object}   [options.useCSSOM=false] Determines if CSS data will be
 *                   collected from a stylesheet's runtime values instead of its
 *                   text content. This is required to get accurate CSS data
 *                   when a stylesheet has been modified using the deleteRule()
 *                   or insertRule() methods because these modifications will
 *                   not be reflected in the stylesheet's text content.
 * @param {function} [options.onBeforeSend] Callback before XHR is sent. Passes
 *                   1) the XHR object, 2) source node reference, and 3) the
 *                   source URL as arguments.
 * @param {function} [options.onSuccess] Callback on each CSS node read. Passes
 *                   1) CSS text, 2) source node reference, and 3) the source
 *                   URL as arguments.
 * @param {function} [options.onError] Callback on each error. Passes 1) the XHR
 *                   object for inspection, 2) soure node reference, and 3) the
 *                   source URL that failed (either a <link> href or an @import)
 *                   as arguments
 * @param {function} [options.onComplete] Callback after all nodes have been
 *                   processed. Passes 1) concatenated CSS text, 2) an array of
 *                   CSS text in DOM order, and 3) an array of nodes in DOM
 *                   order as arguments.
 *
 * @example
 *
 *   getCssData({
 *     rootElement: document,
 *     include    : 'style,link[rel="stylesheet"]',
 *     exclude    : '[href="skip.css"]',
 *     filter     : /red/,
 *     useCSSOM   : false,
 *     onBeforeSend(xhr, node, url) {
 *       // ...
 *     }
 *     onSuccess(cssText, node, url) {
 *       // ...
 *     }
 *     onError(xhr, node, url) {
 *       // ...
 *     },
 *     onComplete(cssText, cssArray, nodeArray) {
 *       // ...
 *     }
 *   });
 */function a(e){var t=/\/\*[\s\S]+?\*\//g,r=/(?:@import\s*)(?:url\(\s*)?(?:['"])([^'"]*)(?:['"])(?:\s*\))?(?:[^;]*;)/g,n={rootElement:e.rootElement||document,include:e.include||'style,link[rel="stylesheet"]',exclude:e.exclude||null,filter:e.filter||null,useCSSOM:e.useCSSOM||!1,onBeforeSend:e.onBeforeSend||Function.prototype,onSuccess:e.onSuccess||Function.prototype,onError:e.onError||Function.prototype,onComplete:e.onComplete||Function.prototype},o=Array.apply(null,n.rootElement.querySelectorAll(n.include)).filter((function(e){return t=e,r=n.exclude,!(t.matches||t.matchesSelector||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector).call(t,r);var t,r})),a=Array.apply(null,Array(o.length)).map((function(e){return null}));function i(){if(-1===a.indexOf(null)){var e=a.join("");n.onComplete(e,a,o)}}function u(e,t,r,o){var c=n.onSuccess(e,r,o);(function e(t,r,o,a){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[],u=l(t,o,i);u.rules.length?s(u.absoluteUrls,{onBeforeSend:function(e,t,o){n.onBeforeSend(e,r,t)},onSuccess:function(e,t,o){var s=n.onSuccess(e,r,t),a=l(e=!1===s?"":s||e,t,i);return a.rules.forEach((function(t,r){e=e.replace(t,a.absoluteRules[r])})),e},onError:function(n,s,l){c.push({xhr:n,url:s}),i.push(u.rules[l]),e(t,r,o,a,c,i)},onComplete:function(n){n.forEach((function(e,r){t=t.replace(u.rules[r],e)})),e(t,r,o,a,c,i)}}):a(t,c)})(e=void 0!==c&&!1===Boolean(c)?"":c||e,r,o,(function(e,o){null===a[t]&&(o.forEach((function(e){return n.onError(e.xhr,r,e.url)})),!n.filter||n.filter.test(e)?a[t]=e:a[t]="",i())}))}function l(e,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],s={};return s.rules=(e.replace(t,"").match(r)||[]).filter((function(e){return-1===o.indexOf(e)})),s.urls=s.rules.map((function(e){return e.replace(r,"$1")})),s.absoluteUrls=s.urls.map((function(e){return c(e,n)})),s.absoluteRules=s.rules.map((function(e,t){var r=s.urls[t],o=c(s.absoluteUrls[t],n);return e.replace(r,o)})),s}o.length?o.forEach((function(e,t){var r=e.getAttribute("href"),o=e.getAttribute("rel"),l="LINK"===e.nodeName&&r&&o&&"stylesheet"===o.toLowerCase(),f="STYLE"===e.nodeName;if(l)s(r,{mimeType:"text/css",onBeforeSend:function(t,r,o){n.onBeforeSend(t,e,r)},onSuccess:function(n,o,s){var a=c(r,location.href);u(n,t,e,a)},onError:function(r,o,s){a[t]="",n.onError(r,e,o),i()}});else if(f){var d=e.textContent;n.useCSSOM&&(d=Array.apply(null,e.sheet.cssRules).map((function(e){return e.cssText})).join("")),u(d,t,e,location.href)}else a[t]="",i()})):n.onComplete("",[])}function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location.href,r=document.implementation.createHTMLDocument(""),n=r.createElement("base"),o=r.createElement("a");return r.head.appendChild(n),r.body.appendChild(o),n.href=t,o.href=e,o.href}r.r(t);var i=u;function u(e,t,r){e instanceof RegExp&&(e=l(e,r)),t instanceof RegExp&&(t=l(t,r));var n=f(e,t,r);return n&&{start:n[0],end:n[1],pre:r.slice(0,n[0]),body:r.slice(n[0]+e.length,n[1]),post:r.slice(n[1]+t.length)}}function l(e,t){var r=t.match(e);return r?r[0]:null}function f(e,t,r){var n,o,s,a,c,i=r.indexOf(e),u=r.indexOf(t,i+1),l=i;if(i>=0&&u>0){for(n=[],s=r.length;l>=0&&!c;)l==i?(n.push(l),i=r.indexOf(e,l+1)):1==n.length?c=[n.pop(),u]:((o=n.pop())<s&&(s=o,a=u),u=r.indexOf(t,l+1)),l=i<u&&i>=0?i:u;n.length&&(c=[s,a])}return c}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={preserveStatic:!0,removeComments:!1},o=n({},r,t),s=[];function a(e){throw new Error("CSS parse error: ".concat(e))}function c(t){var r=t.exec(e);if(r)return e=e.slice(r[0].length),r}function u(){return c(/^{\s*/)}function l(){return c(/^}/)}function f(){c(/^\s*/)}function d(){if(f(),"/"===e[0]&&"*"===e[1]){for(var t=2;e[t]&&("*"!==e[t]||"/"!==e[t+1]);)t++;if(!e[t])return a("end of comment is missing");var r=e.slice(2,t);return e=e.slice(t+2),{type:"comment",comment:r}}}function p(){for(var e,t=[];e=d();)t.push(e);return o.removeComments?[]:t}function m(){for(f();"}"===e[0];)a("extra closing bracket");var t=c(/^(("(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^{])+)/);if(t)return t[0].trim().replace(/\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*\/+/g,"").replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g,(function(e){return e.replace(/,/g,"‌")})).split(/\s*(?![^(]*\)),\s*/).map((function(e){return e.replace(/\u200C/g,",")}))}function v(){c(/^([;\s]*)+/);var e=/\/\*[^*]*\*+([^\/*][^*]*\*+)*\//g,t=c(/^(\*?[-#\/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);if(t){if(t=t[0].trim(),!c(/^:\s*/))return a("property missing ':'");var r=c(/^((?:\/\*.*?\*\/|'(?:\\'|.)*?'|"(?:\\"|.)*?"|\((\s*'(?:\\'|.)*?'|"(?:\\"|.)*?"|[^)]*?)\s*\)|[^};])+)/),n={type:"declaration",property:t.replace(e,""),value:r?r[0].replace(e,"").trim():""};return c(/^[;\s]*/),n}}function h(){if(!u())return a("missing '{'");for(var e,t=p();e=v();)t.push(e),t=t.concat(p());return l()?t:a("missing '}'")}function y(){f();for(var e,t=[];e=c(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/);)t.push(e[1]),c(/^,\s*/);if(t.length)return{type:"keyframe",values:t,declarations:h()}}function g(){var e=c(/^@([-\w]+)?keyframes\s*/);if(e){var t=e[1];if(!(e=c(/^([-\w]+)\s*/)))return a("@keyframes missing name");var r,n=e[1];if(!u())return a("@keyframes missing '{'");for(var o=p();r=y();)o.push(r),o=o.concat(p());return l()?{type:"keyframes",name:n,vendor:t,keyframes:o}:a("@keyframes missing '}'")}}function S(){if(c(/^@page */))return{type:"page",selectors:m()||[],declarations:h()}}function b(){if(c(/^@font-face\s*/))return{type:"font-face",declarations:h()}}function E(){var e=c(/^@supports *([^{]+)/);if(e)return{type:"supports",supports:e[1].trim(),rules:M()}}function w(){if(c(/^@host\s*/))return{type:"host",rules:M()}}function O(){var e=c(/^@media([^{]+)*/);if(e)return{type:"media",media:(e[1]||"").trim(),rules:M()}}function C(){var e=c(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);if(e)return{type:"custom-media",name:e[1].trim(),media:e[2].trim()}}function A(){var e=c(/^@([-\w]+)?document *([^{]+)/);if(e)return{type:"document",document:e[2].trim(),vendor:e[1]?e[1].trim():null,rules:M()}}function x(){var e=c(/^@(import|charset|namespace)\s*([^;]+);/);if(e)return{type:e[1],name:e[2].trim()}}function k(){if(f(),"@"===e[0]){var t=g()||E()||w()||O()||C()||S()||A()||b()||x();if(t&&!o.preserveStatic){var r=!1;if(t.declarations)r=t.declarations.some((function(e){return/var\(/.test(e.value)}));else r=(t.keyframes||t.rules||[]).some((function(e){return(e.declarations||[]).some((function(e){return/var\(/.test(e.value)}))}));return r?t:{}}return t}}function j(){if(!o.preserveStatic){var t=i("{","}",e);if(t){var r=/:(?:root|host)(?![.:#(])/.test(t.pre)&&/--\S*\s*:/.test(t.body),n=/var\(/.test(t.body);if(!r&&!n)return e=e.slice(t.end+1),{}}}var s=m()||[],c=o.preserveStatic?h():h().filter((function(e){var t=s.some((function(e){return/:(?:root|host)(?![.:#(])/.test(e)}))&&/^--\S/.test(e.property),r=/var\(/.test(e.value);return t||r}));return s.length||a("selector missing"),{type:"rule",selectors:s,declarations:c}}function M(t){if(!t&&!u())return a("missing '{'");for(var r,n=p();e.length&&(t||"}"!==e[0])&&(r=k()||j());)r.type&&n.push(r),n=n.concat(p());return t||l()?n:a("missing '}'")}return{type:"stylesheet",stylesheet:{rules:M(!0),errors:s}}}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={parseHost:!1,store:{},onWarning:function(){}},o=n({},r,t),s=new RegExp(":".concat(o.parseHost?"host":"root","(?![.:#(])"));return"string"==typeof e&&(e=d(e,o)),e.stylesheet.rules.forEach((function(e){"rule"===e.type&&e.selectors.some((function(e){return s.test(e)}))&&e.declarations.forEach((function(e,t){var r=e.property,n=e.value;r&&0===r.indexOf("--")&&(o.store[r]=n)}))})),o.store}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,n={charset:function(e){return"@charset "+e.name+";"},comment:function(e){return 0===e.comment.indexOf("__CSSVARSPONYFILL")?"/*"+e.comment+"*/":""},"custom-media":function(e){return"@custom-media "+e.name+" "+e.media+";"},declaration:function(e){return e.property+":"+e.value+";"},document:function(e){return"@"+(e.vendor||"")+"document "+e.document+"{"+o(e.rules)+"}"},"font-face":function(e){return"@font-face{"+o(e.declarations)+"}"},host:function(e){return"@host{"+o(e.rules)+"}"},import:function(e){return"@import "+e.name+";"},keyframe:function(e){return e.values.join(",")+"{"+o(e.declarations)+"}"},keyframes:function(e){return"@"+(e.vendor||"")+"keyframes "+e.name+"{"+o(e.keyframes)+"}"},media:function(e){return"@media "+e.media+"{"+o(e.rules)+"}"},namespace:function(e){return"@namespace "+e.name+";"},page:function(e){return"@page "+(e.selectors.length?e.selectors.join(", "):"")+"{"+o(e.declarations)+"}"},rule:function(e){var t=e.declarations;if(t.length)return e.selectors.join(",")+"{"+o(t)+"}"},supports:function(e){return"@supports "+e.supports+"{"+o(e.rules)+"}"}};function o(e){for(var o="",s=0;s<e.length;s++){var a=e[s];r&&r(a);var c=n[a.type](a);c&&(o+=c,c.length&&a.selectors&&(o+=t))}return o}return o(e.stylesheet.rules)}function v(e,t){e.rules.forEach((function(r){r.rules?v(r,t):r.keyframes?r.keyframes.forEach((function(e){"keyframe"===e.type&&t(e.declarations,r)})):r.declarations&&t(r.declarations,e)}))}u.range=f;function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={preserveStatic:!0,preserveVars:!1,variables:{},onWarning:function(){}},o=n({},r,t);return"string"==typeof e&&(e=d(e,o)),v(e.stylesheet,(function(e,t){for(var r=0;r<e.length;r++){var n=e[r],s=n.type,a=n.property,c=n.value;if("declaration"===s)if(o.preserveVars||!a||0!==a.indexOf("--")){if(-1!==c.indexOf("var(")){var i=g(c,o);i!==n.value&&(i=y(i),o.preserveVars?(e.splice(r,0,{type:s,property:a,value:i}),r++):n.value=i)}}else e.splice(r,1),r--}})),m(e)}function y(e){return(e.match(/calc\(([^)]+)\)/g)||[]).forEach((function(t){var r="calc".concat(t.split("calc").join(""));e=e.replace(t,r)})),e}function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;if(-1===e.indexOf("var("))return e;var n=i("(",")",e);function o(e){var n=e.split(",")[0].replace(/[\s\n\t]/g,""),o=(e.match(/(?:\s*,\s*){1}(.*)?/)||[])[1],s=Object.prototype.hasOwnProperty.call(t.variables,n)?String(t.variables[n]):void 0,a=s||(o?String(o):void 0),c=r||e;return s||t.onWarning('variable "'.concat(n,'" is undefined')),a&&"undefined"!==a&&a.length>0?g(a,t,c):"var(".concat(c,")")}if(n){if("var"===n.pre.slice(-3)){var s=0===n.body.trim().length;return s?(t.onWarning("var() must contain a non-whitespace string"),e):n.pre.slice(0,-3)+o(n.body)+g(n.post,t)}return n.pre+"(".concat(g(n.body,t),")")+g(n.post,t)}return-1!==e.indexOf("var(")&&t.onWarning('missing closing ")" in the value "'.concat(e,'"')),e}var S="undefined"!=typeof window,b=S&&window.CSS&&window.CSS.supports&&window.CSS.supports("(--a: 0)"),E={group:0,job:0},w={rootElement:S?document:null,shadowDOM:!1,include:"style,link[rel=stylesheet]",exclude:"",variables:{},onlyLegacy:!0,preserveStatic:!0,preserveVars:!1,silent:!1,updateDOM:!0,updateURLs:!0,watch:null,onBeforeSend:function(){},onWarning:function(){},onError:function(){},onSuccess:function(){},onComplete:function(){}},O={cssComments:/\/\*[\s\S]+?\*\//g,cssKeyframes:/@(?:-\w*-)?keyframes/,cssMediaQueries:/@media[^{]+\{([\s\S]+?})\s*}/g,cssUrls:/url\((?!['"]?(?:data|http|\/\/):)['"]?([^'")]*)['"]?\)/g,cssVarDeclRules:/(?::(?:root|host)(?![.:#(])[\s,]*[^{]*{\s*[^}]*})/g,cssVarDecls:/(?:[\s;]*)(-{2}\w[\w-]*)(?:\s*:\s*)([^;]*);/g,cssVarFunc:/var\(\s*--[\w-]/,cssVars:/(?:(?::(?:root|host)(?![.:#(])[\s,]*[^{]*{\s*[^;]*;*\s*)|(?:var\(\s*))(--[^:)]+)(?:\s*[:)])/},C={dom:{},job:{},user:{}},A=!1,x=null,k=0,j=null,M=!1;
/**
 * Fetches, parses, and transforms CSS custom properties from specified
 * <style> and <link> elements into static values, then appends a new <style>
 * element with static values to the DOM to provide CSS custom property
 * compatibility for legacy browsers. Also provides a single interface for
 * live updates of runtime values in both modern and legacy browsers.
 *
 * @preserve
 * @param {object}   [options] Options object
 * @param {object}   [options.rootElement=document] Root element to traverse for
 *                   <link> and <style> nodes
 * @param {boolean}  [options.shadowDOM=false] Determines if shadow DOM <link>
 *                   and <style> nodes will be processed.
 * @param {string}   [options.include="style,link[rel=stylesheet]"] CSS selector
 *                   matching <link re="stylesheet"> and <style> nodes to
 *                   process
 * @param {string}   [options.exclude] CSS selector matching <link
 *                   rel="stylehseet"> and <style> nodes to exclude from those
 *                   matches by options.include
 * @param {object}   [options.variables] A map of custom property name/value
 *                   pairs. Property names can omit or include the leading
 *                   double-hyphen (—), and values specified will override
 *                   previous values
 * @param {boolean}  [options.onlyLegacy=true] Determines if the ponyfill will
 *                   only generate legacy-compatible CSS in browsers that lack
 *                   native support (i.e., legacy browsers)
 * @param {boolean}  [options.preserveStatic=true] Determines if CSS
 *                   declarations that do not reference a custom property will
 *                   be preserved in the transformed CSS
 * @param {boolean}  [options.preserveVars=false] Determines if CSS custom
 *                   property declarations will be preserved in the transformed
 *                   CSS
 * @param {boolean}  [options.silent=false] Determines if warning and error
 *                   messages will be displayed on the console
 * @param {boolean}  [options.updateDOM=true] Determines if the ponyfill will
 *                   update the DOM after processing CSS custom properties
 * @param {boolean}  [options.updateURLs=true] Determines if the ponyfill will
 *                   convert relative url() paths to absolute urls
 * @param {boolean}  [options.watch=false] Determines if a MutationObserver will
 *                   be created that will execute the ponyfill when a <link> or
 *                   <style> DOM mutation is observed
 * @param {function} [options.onBeforeSend] Callback before XHR is sent. Passes
 *                   1) the XHR object, 2) source node reference, and 3) the
 *                   source URL as arguments
 * @param {function} [options.onWarning] Callback after each CSS parsing warning
 *                   has occurred. Passes 1) a warning message as an argument.
 * @param {function} [options.onError] Callback after a CSS parsing error has
 *                   occurred or an XHR request has failed. Passes 1) an error
 *                   message, and 2) source node reference, 3) xhr, and 4 url as
 *                   arguments.
 * @param {function} [options.onSuccess] Callback after CSS data has been
 *                   collected from each node and before CSS custom properties
 *                   have been transformed. Allows modifying the CSS data before
 *                   it is transformed by returning any string value (or false
 *                   to skip). Passes 1) CSS text, 2) source node reference, and
 *                   3) the source URL as arguments.
 * @param {function} [options.onComplete] Callback after all CSS has been
 *                   processed, legacy-compatible CSS has been generated, and
 *                   (optionally) the DOM has been updated. Passes 1) a CSS
 *                   string with CSS variable values resolved, 2) an array of
 *                   output <style> node references that have been appended to
 *                   the DOM, 3) an object containing all custom properies names
 *                   and values, and 4) the ponyfill execution time in
 *                   milliseconds.
 *
 * @example
 *
 *   cssVars({
 *     rootElement   : document,
 *     shadowDOM     : false,
 *     include       : 'style,link[rel="stylesheet"]',
 *     exclude       : '',
 *     variables     : {},
 *     onlyLegacy    : true,
 *     preserveStatic: true,
 *     preserveVars  : false,
 *     silent        : false,
 *     updateDOM     : true,
 *     updateURLs    : true,
 *     watch         : false,
 *     onBeforeSend(xhr, node, url) {},
 *     onWarning(message) {},
 *     onError(message, node, xhr, url) {},
 *     onSuccess(cssText, node, url) {},
 *     onComplete(cssText, styleNode, cssVariables, benchmark) {}
 *   });
 */
function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t="cssVars(): ",r=n({},w,e);function s(e,n,o,s){!r.silent&&window.console&&console.error("".concat(t).concat(e,"\n"),n),r.onError(e,n,o,s)}function c(e){!r.silent&&window.console&&console.warn("".concat(t).concat(e)),r.onWarning(e)}if(S){if(r.watch)return r.watch=w.watch,T(r),void _(r);if(!1===r.watch&&x&&(x.disconnect(),x=null),!r.__benchmark){if(A===r.rootElement)return void L(e);if(r.__benchmark=D(),r.exclude=[x?'[data-cssvars]:not([data-cssvars=""])':'[data-cssvars="out"]',r.exclude].filter((function(e){return e})).join(","),r.variables=V(r.variables),!x){var i=Array.apply(null,r.rootElement.querySelectorAll('[data-cssvars="out"]'));if(i.forEach((function(e){var t=e.getAttribute("data-cssvars-group");(t?r.rootElement.querySelector('[data-cssvars="src"][data-cssvars-group="'.concat(t,'"]')):null)||e.parentNode.removeChild(e)})),k){var u=r.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars="out"])');u.length<k&&(k=u.length,C.dom={})}}}if("loading"!==document.readyState)if(b&&r.onlyLegacy){if(r.updateDOM){var l=r.rootElement.host||(r.rootElement===document?document.documentElement:r.rootElement);Object.keys(r.variables).forEach((function(e){l.style.setProperty(e,r.variables[e])}))}}else!M&&(r.shadowDOM||r.rootElement.shadowRoot||r.rootElement.host)?a({rootElement:w.rootElement,include:w.include,exclude:r.exclude,onSuccess:function(e,t,r){return(e=((e=e.replace(O.cssComments,"").replace(O.cssMediaQueries,"")).match(O.cssVarDeclRules)||[]).join(""))||!1},onComplete:function(e,t,n){p(e,{store:C.dom,onWarning:c}),M=!0,_(r)}}):(A=r.rootElement,a({rootElement:r.rootElement,include:r.include,exclude:r.exclude,onBeforeSend:r.onBeforeSend,onError:function(e,t,r){var n=e.responseURL||B(r,location.href),o=e.statusText?"(".concat(e.statusText,")"):"Unspecified Error"+(0===e.status?" (possibly CORS related)":"");s("CSS XHR Error: ".concat(n," ").concat(e.status," ").concat(o),t,e,n)},onSuccess:function(e,t,n){var o=r.onSuccess(e,t,n);return e=void 0!==o&&!1===Boolean(o)?"":o||e,r.updateURLs&&(e=N(e,n)),e},onComplete:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i={},u=r.updateDOM?C.dom:Object.keys(C.job).length?C.job:C.job=JSON.parse(JSON.stringify(C.dom)),l=!1;if(a.forEach((function(e,n){if(O.cssVars.test(t[n]))try{var o=d(t[n],{preserveStatic:r.preserveStatic,removeComments:!0});p(o,{parseHost:Boolean(r.rootElement.host),store:i,onWarning:c}),e.__cssVars={tree:o}}catch(t){s(t.message,e)}})),r.updateDOM&&n(C.user,r.variables),n(i,r.variables),l=Boolean((document.querySelector("[data-cssvars]")||Object.keys(C.dom).length)&&Object.keys(i).some((function(e){return i[e]!==u[e]}))),n(u,C.user,i),l)F(r.rootElement),_(r);else{var f=[],v=[],y=!1;if(C.job={},r.updateDOM&&E.job++,a.forEach((function(e){var t=!e.__cssVars;if(e.__cssVars)try{h(e.__cssVars.tree,n({},r,{variables:u,onWarning:c}));var o=m(e.__cssVars.tree);if(r.updateDOM){if(e.getAttribute("data-cssvars")||e.setAttribute("data-cssvars","src"),o.length){var a=e.getAttribute("data-cssvars-group")||++E.group,i=o.replace(/\s/g,""),l=r.rootElement.querySelector('[data-cssvars="out"][data-cssvars-group="'.concat(a,'"]'))||document.createElement("style");y=y||O.cssKeyframes.test(o),l.hasAttribute("data-cssvars")||l.setAttribute("data-cssvars","out"),i===e.textContent.replace(/\s/g,"")?(t=!0,l&&l.parentNode&&(e.removeAttribute("data-cssvars-group"),l.parentNode.removeChild(l))):i!==l.textContent.replace(/\s/g,"")&&([e,l].forEach((function(e){e.setAttribute("data-cssvars-job",E.job),e.setAttribute("data-cssvars-group",a)})),l.textContent=o,f.push(o),v.push(l),l.parentNode||e.parentNode.insertBefore(l,e.nextSibling))}}else e.textContent.replace(/\s/g,"")!==o&&f.push(o)}catch(t){s(t.message,e)}t&&e.setAttribute("data-cssvars","skip"),e.hasAttribute("data-cssvars-job")||e.setAttribute("data-cssvars-job",E.job)})),k=r.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars="out"])').length,r.shadowDOM)for(var g,S=[r.rootElement].concat(o(r.rootElement.querySelectorAll("*"))),b=0;g=S[b];++b)if(g.shadowRoot&&g.shadowRoot.querySelector("style")){var w=n({},r,{rootElement:g.shadowRoot});_(w)}r.updateDOM&&y&&R(r.rootElement),A=!1,r.onComplete(f.join(""),v,JSON.parse(JSON.stringify(u)),D()-r.__benchmark)}}}));else document.addEventListener("DOMContentLoaded",(function t(r){_(e),document.removeEventListener("DOMContentLoaded",t)}))}}function T(e){function t(e){return"LINK"===e.tagName&&-1!==(e.getAttribute("rel")||"").indexOf("stylesheet")&&!e.disabled}window.MutationObserver&&(x&&(x.disconnect(),x=null),(x=new MutationObserver((function(r){r.some((function(r){var n,o=!1;return"attributes"===r.type?o=t(r.target):"childList"===r.type&&(n=r.addedNodes,o=Array.apply(null,n).some((function(e){var r=1===e.nodeType&&e.hasAttribute("data-cssvars"),n=function(e){return"STYLE"===e.tagName&&!e.disabled}(e)&&O.cssVars.test(e.textContent);return!r&&(t(e)||n)}))||function(t){return Array.apply(null,t).some((function(t){var r=1===t.nodeType,n=r&&"out"===t.getAttribute("data-cssvars"),o=r&&"src"===t.getAttribute("data-cssvars"),s=o;if(o||n){var a=t.getAttribute("data-cssvars-group"),c=e.rootElement.querySelector('[data-cssvars-group="'.concat(a,'"]'));o&&(F(e.rootElement),C.dom={}),c&&c.parentNode.removeChild(c)}return s}))}(r.removedNodes)),o}))&&_(e)}))).observe(document.documentElement,{attributes:!0,attributeFilter:["disabled","href"],childList:!0,subtree:!0}))}function L(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;clearTimeout(j),j=setTimeout((function(){e.__benchmark=null,_(e)}),t)}function R(e){var t=["animation-name","-moz-animation-name","-webkit-animation-name"].filter((function(e){return getComputedStyle(document.body)[e]}))[0];if(t){for(var r=e.getElementsByTagName("*"),n=[],o=0,s=r.length;o<s;o++){var a=r[o];"none"!==getComputedStyle(a)[t]&&(a.style[t]+="__CSSVARSPONYFILL-KEYFRAMES__",n.push(a))}document.body.offsetHeight;for(var c=0,i=n.length;c<i;c++){var u=n[c].style;u[t]=u[t].replace("__CSSVARSPONYFILL-KEYFRAMES__","")}}}function N(e,t){return(e.replace(O.cssComments,"").match(O.cssUrls)||[]).forEach((function(r){var n=r.replace(O.cssUrls,"$1"),o=B(n,t);e=e.replace(r,r.replace(n,o))})),e}function V(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=/^-{2}/;return Object.keys(e).reduce((function(r,n){return r[t.test(n)?n:"--".concat(n.replace(/^-+/,""))]=e[n],r}),{})}function B(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location.href,r=document.implementation.createHTMLDocument(""),n=r.createElement("base"),o=r.createElement("a");return r.head.appendChild(n),r.body.appendChild(o),n.href=t,o.href=e,o.href}function D(){return S&&(window.performance||{}).now?window.performance.now():(new Date).getTime()}function F(e){Array.apply(null,e.querySelectorAll('[data-cssvars="skip"],[data-cssvars="src"]')).forEach((function(e){return e.setAttribute("data-cssvars","")}))}_.reset=function(){for(var e in A=!1,x&&(x.disconnect(),x=null),k=0,j=null,M=!1,C)C[e]={}},t.default=_}}]);