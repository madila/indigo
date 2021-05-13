(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~indigo-sidebarStick"],{

/***/ "./node_modules/css-element-queries/index.js":
/*!***************************************************!*\
  !*** ./node_modules/css-element-queries/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    ResizeSensor: __webpack_require__(/*! ./src/ResizeSensor */ "./node_modules/css-element-queries/src/ResizeSensor.js"),
    ElementQueries: __webpack_require__(/*! ./src/ElementQueries */ "./node_modules/css-element-queries/src/ElementQueries.js")
};


/***/ }),

/***/ "./node_modules/css-element-queries/src/ElementQueries.js":
/*!****************************************************************!*\
  !*** ./node_modules/css-element-queries/src/ElementQueries.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

/**
 * Copyright Marc J. Schmidt. See the LICENSE file at the top-level
 * directory of this distribution and at
 * https://github.com/marcj/css-element-queries/blob/master/LICENSE.
 */
(function (root, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./ResizeSensor.js */ "./node_modules/css-element-queries/src/ResizeSensor.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(typeof window !== 'undefined' ? window : this, function (ResizeSensor) {

    /**
     *
     * @type {Function}
     * @constructor
     */
    var ElementQueries = function () {
        //<style> element with our dynamically created styles
        var cssStyleElement;

        //all rules found for element queries
        var allQueries = {};

        //association map to identify which selector belongs to a element from the animationstart event.
        var idToSelectorMapping = [];

        /**
         *
         * @param element
         * @returns {Number}
         */
        function getEmSize(element) {
            if (!element) {
                element = document.documentElement;
            }
            var fontSize = window.getComputedStyle(element, null).fontSize;
            return parseFloat(fontSize) || 16;
        }

        /**
         * Get element size
         * @param {HTMLElement} element
         * @returns {Object} {width, height}
         */
        function getElementSize(element) {
            if (!element.getBoundingClientRect) {
                return {
                    width: element.offsetWidth,
                    height: element.offsetHeight
                }
            }

            var rect = element.getBoundingClientRect();
            return {
                width: Math.round(rect.width),
                height: Math.round(rect.height)
            }
        }

        /**
         *
         * @copyright https://github.com/Mr0grog/element-query/blob/master/LICENSE
         *
         * @param {HTMLElement} element
         * @param {*} value
         * @returns {*}
         */
        function convertToPx(element, value) {
            var numbers = value.split(/\d/);
            var units = numbers[numbers.length - 1];
            value = parseFloat(value);
            switch (units) {
                case "px":
                    return value;
                case "em":
                    return value * getEmSize(element);
                case "rem":
                    return value * getEmSize();
                // Viewport units!
                // According to http://quirksmode.org/mobile/tableViewport.html
                // documentElement.clientWidth/Height gets us the most reliable info
                case "vw":
                    return value * document.documentElement.clientWidth / 100;
                case "vh":
                    return value * document.documentElement.clientHeight / 100;
                case "vmin":
                case "vmax":
                    var vw = document.documentElement.clientWidth / 100;
                    var vh = document.documentElement.clientHeight / 100;
                    var chooser = Math[units === "vmin" ? "min" : "max"];
                    return value * chooser(vw, vh);
                default:
                    return value;
                // for now, not supporting physical units (since they are just a set number of px)
                // or ex/ch (getting accurate measurements is hard)
            }
        }

        /**
         *
         * @param {HTMLElement} element
         * @param {String} id
         * @constructor
         */
        function SetupInformation(element, id) {
            this.element = element;
            var key, option, elementSize, value, actualValue, attrValues, attrValue, attrName;

            var attributes = ['min-width', 'min-height', 'max-width', 'max-height'];

            /**
             * Extracts the computed width/height and sets to min/max- attribute.
             */
            this.call = function () {
                // extract current dimensions
                elementSize = getElementSize(this.element);

                attrValues = {};

                for (key in allQueries[id]) {
                    if (!allQueries[id].hasOwnProperty(key)) {
                        continue;
                    }
                    option = allQueries[id][key];

                    value = convertToPx(this.element, option.value);

                    actualValue = option.property === 'width' ? elementSize.width : elementSize.height;
                    attrName = option.mode + '-' + option.property;
                    attrValue = '';

                    if (option.mode === 'min' && actualValue >= value) {
                        attrValue += option.value;
                    }

                    if (option.mode === 'max' && actualValue <= value) {
                        attrValue += option.value;
                    }

                    if (!attrValues[attrName]) attrValues[attrName] = '';
                    if (attrValue && -1 === (' ' + attrValues[attrName] + ' ').indexOf(' ' + attrValue + ' ')) {
                        attrValues[attrName] += ' ' + attrValue;
                    }
                }

                for (var k in attributes) {
                    if (!attributes.hasOwnProperty(k)) continue;

                    if (attrValues[attributes[k]]) {
                        this.element.setAttribute(attributes[k], attrValues[attributes[k]].substr(1));
                    } else {
                        this.element.removeAttribute(attributes[k]);
                    }
                }
            };
        }

        /**
         * @param {HTMLElement} element
         * @param {Object}      id
         */
        function setupElement(element, id) {
            if (!element.elementQueriesSetupInformation) {
                element.elementQueriesSetupInformation = new SetupInformation(element, id);
            }

            if (!element.elementQueriesSensor) {
                element.elementQueriesSensor = new ResizeSensor(element, function () {
                    element.elementQueriesSetupInformation.call();
                });
            }
        }

        /**
         * Stores rules to the selector that should be applied once resized.
         *
         * @param {String} selector
         * @param {String} mode min|max
         * @param {String} property width|height
         * @param {String} value
         */
        function queueQuery(selector, mode, property, value) {
            if (typeof(allQueries[selector]) === 'undefined') {
                allQueries[selector] = [];
                // add animation to trigger animationstart event, so we know exactly when a element appears in the DOM

                var id = idToSelectorMapping.length;
                cssStyleElement.innerHTML += '\n' + selector + ' {animation: 0.1s element-queries;}';
                cssStyleElement.innerHTML += '\n' + selector + ' > .resize-sensor {min-width: '+id+'px;}';
                idToSelectorMapping.push(selector);
            }

            allQueries[selector].push({
                mode: mode,
                property: property,
                value: value
            });
        }

        function getQuery(container) {
            var query;
            if (document.querySelectorAll) query = (container) ? container.querySelectorAll.bind(container) : document.querySelectorAll.bind(document);
            if (!query && 'undefined' !== typeof $$) query = $$;
            if (!query && 'undefined' !== typeof jQuery) query = jQuery;

            if (!query) {
                throw 'No document.querySelectorAll, jQuery or Mootools\'s $$ found.';
            }

            return query;
        }

        /**
         * If animationStart didn't catch a new element in the DOM, we can manually search for it
         */
        function findElementQueriesElements(container) {
            var query = getQuery(container);

            for (var selector in allQueries) if (allQueries.hasOwnProperty(selector)) {
                // find all elements based on the extract query selector from the element query rule
                var elements = query(selector, container);

                for (var i = 0, j = elements.length; i < j; i++) {
                    setupElement(elements[i], selector);
                }
            }
        }

        /**
         *
         * @param {HTMLElement} element
         */
        function attachResponsiveImage(element) {
            var children = [];
            var rules = [];
            var sources = [];
            var defaultImageId = 0;
            var lastActiveImage = -1;
            var loadedImages = [];

            for (var i in element.children) {
                if (!element.children.hasOwnProperty(i)) continue;

                if (element.children[i].tagName && element.children[i].tagName.toLowerCase() === 'img') {
                    children.push(element.children[i]);

                    var minWidth = element.children[i].getAttribute('min-width') || element.children[i].getAttribute('data-min-width');
                    //var minHeight = element.children[i].getAttribute('min-height') || element.children[i].getAttribute('data-min-height');
                    var src = element.children[i].getAttribute('data-src') || element.children[i].getAttribute('url');

                    sources.push(src);

                    var rule = {
                        minWidth: minWidth
                    };

                    rules.push(rule);

                    if (!minWidth) {
                        defaultImageId = children.length - 1;
                        element.children[i].style.display = 'block';
                    } else {
                        element.children[i].style.display = 'none';
                    }
                }
            }

            lastActiveImage = defaultImageId;

            function check() {
                var imageToDisplay = false, i;

                for (i in children) {
                    if (!children.hasOwnProperty(i)) continue;

                    if (rules[i].minWidth) {
                        if (element.offsetWidth > rules[i].minWidth) {
                            imageToDisplay = i;
                        }
                    }
                }

                if (!imageToDisplay) {
                    //no rule matched, show default
                    imageToDisplay = defaultImageId;
                }

                if (lastActiveImage !== imageToDisplay) {
                    //image change

                    if (!loadedImages[imageToDisplay]) {
                        //image has not been loaded yet, we need to load the image first in memory to prevent flash of
                        //no content

                        var image = new Image();
                        image.onload = function () {
                            children[imageToDisplay].src = sources[imageToDisplay];

                            children[lastActiveImage].style.display = 'none';
                            children[imageToDisplay].style.display = 'block';

                            loadedImages[imageToDisplay] = true;

                            lastActiveImage = imageToDisplay;
                        };

                        image.src = sources[imageToDisplay];
                    } else {
                        children[lastActiveImage].style.display = 'none';
                        children[imageToDisplay].style.display = 'block';
                        lastActiveImage = imageToDisplay;
                    }
                } else {
                    //make sure for initial check call the .src is set correctly
                    children[imageToDisplay].src = sources[imageToDisplay];
                }
            }

            element.resizeSensorInstance = new ResizeSensor(element, check);
            check();
        }

        function findResponsiveImages() {
            var query = getQuery();

            var elements = query('[data-responsive-image],[responsive-image]');
            for (var i = 0, j = elements.length; i < j; i++) {
                attachResponsiveImage(elements[i]);
            }
        }

        var regex = /,?[\s\t]*([^,\n]*?)((?:\[[\s\t]*?(?:min|max)-(?:width|height)[\s\t]*?[~$\^]?=[\s\t]*?"[^"]*?"[\s\t]*?])+)([^,\n\s\{]*)/mgi;
        var attrRegex = /\[[\s\t]*?(min|max)-(width|height)[\s\t]*?[~$\^]?=[\s\t]*?"([^"]*?)"[\s\t]*?]/mgi;

        /**
         * @param {String} css
         */
        function extractQuery(css) {
            var match, smatch, attrs, attrMatch;

            css = css.replace(/'/g, '"');
            while (null !== (match = regex.exec(css))) {
                smatch = match[1] + match[3];
                attrs = match[2];

                while (null !== (attrMatch = attrRegex.exec(attrs))) {
                    queueQuery(smatch, attrMatch[1], attrMatch[2], attrMatch[3]);
                }
            }
        }

        /**
         * @param {CssRule[]|String} rules
         */
        function readRules(rules) {
            var selector = '';

            if (!rules) {
                return;
            }

            if ('string' === typeof rules) {
                rules = rules.toLowerCase();
                if (-1 !== rules.indexOf('min-width') || -1 !== rules.indexOf('max-width')) {
                    extractQuery(rules);
                }
            } else {
                for (var i = 0, j = rules.length; i < j; i++) {
                    if (1 === rules[i].type) {
                        selector = rules[i].selectorText || rules[i].cssText;
                        if (-1 !== selector.indexOf('min-height') || -1 !== selector.indexOf('max-height')) {
                            extractQuery(selector);
                        } else if (-1 !== selector.indexOf('min-width') || -1 !== selector.indexOf('max-width')) {
                            extractQuery(selector);
                        }
                    } else if (4 === rules[i].type) {
                        readRules(rules[i].cssRules || rules[i].rules);
                    } else if (3 === rules[i].type) {
                        if(rules[i].styleSheet.hasOwnProperty("cssRules")) {
                            readRules(rules[i].styleSheet.cssRules);
                        }
                    }
                }
            }
        }

        var defaultCssInjected = false;

        /**
         * Searches all css rules and setups the event listener to all elements with element query rules..
         */
        this.init = function () {
            var animationStart = 'animationstart';
            if (typeof document.documentElement.style['webkitAnimationName'] !== 'undefined') {
                animationStart = 'webkitAnimationStart';
            } else if (typeof document.documentElement.style['MozAnimationName'] !== 'undefined') {
                animationStart = 'mozanimationstart';
            } else if (typeof document.documentElement.style['OAnimationName'] !== 'undefined') {
                animationStart = 'oanimationstart';
            }

            document.body.addEventListener(animationStart, function (e) {
                var element = e.target;
                var styles = element && window.getComputedStyle(element, null);
                var animationName = styles && styles.getPropertyValue('animation-name');
                var requiresSetup = animationName && (-1 !== animationName.indexOf('element-queries'));

                if (requiresSetup) {
                    element.elementQueriesSensor = new ResizeSensor(element, function () {
                        if (element.elementQueriesSetupInformation) {
                            element.elementQueriesSetupInformation.call();
                        }
                    });

                    var sensorStyles = window.getComputedStyle(element.resizeSensor, null);
                    var id = sensorStyles.getPropertyValue('min-width');
                    id = parseInt(id.replace('px', ''));
                    setupElement(e.target, idToSelectorMapping[id]);
                }
            });

            if (!defaultCssInjected) {
                cssStyleElement = document.createElement('style');
                cssStyleElement.type = 'text/css';
                cssStyleElement.innerHTML = '[responsive-image] > img, [data-responsive-image] {overflow: hidden; padding: 0; } [responsive-image] > img, [data-responsive-image] > img {width: 100%;}';

                //safari wants at least one rule in keyframes to start working
                cssStyleElement.innerHTML += '\n@keyframes element-queries { 0% { visibility: inherit; } }';
                document.getElementsByTagName('head')[0].appendChild(cssStyleElement);
                defaultCssInjected = true;
            }

            for (var i = 0, j = document.styleSheets.length; i < j; i++) {
                try {
                    if (document.styleSheets[i].href && 0 === document.styleSheets[i].href.indexOf('file://')) {
                        console.warn("CssElementQueries: unable to parse local css files, " + document.styleSheets[i].href);
                    }

                    readRules(document.styleSheets[i].cssRules || document.styleSheets[i].rules || document.styleSheets[i].cssText);
                } catch (e) {
                }
            }

            findResponsiveImages();
        };

        /**
         * Go through all collected rules (readRules()) and attach the resize-listener.
         * Not necessary to call it manually, since we detect automatically when new elements
         * are available in the DOM. However, sometimes handy for dirty DOM modifications.
         *
         * @param {HTMLElement} container only elements of the container are considered (document.body if not set)
         */
        this.findElementQueriesElements = function (container) {
            findElementQueriesElements(container);
        };

        this.update = function () {
            this.init();
        };
    };

    ElementQueries.update = function () {
        ElementQueries.instance.update();
    };

    /**
     * Removes all sensor and elementquery information from the element.
     *
     * @param {HTMLElement} element
     */
    ElementQueries.detach = function (element) {
        if (element.elementQueriesSetupInformation) {
            //element queries
            element.elementQueriesSensor.detach();
            delete element.elementQueriesSetupInformation;
            delete element.elementQueriesSensor;

        } else if (element.resizeSensorInstance) {
            //responsive image

            element.resizeSensorInstance.detach();
            delete element.resizeSensorInstance;
        }
    };

    ElementQueries.init = function () {
        if (!ElementQueries.instance) {
            ElementQueries.instance = new ElementQueries();
        }

        ElementQueries.instance.init();
    };

    var domLoaded = function (callback) {
        /* Mozilla, Chrome, Opera */
        if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', callback, false);
        }
        /* Safari, iCab, Konqueror */
        else if (/KHTML|WebKit|iCab/i.test(navigator.userAgent)) {
            var DOMLoadTimer = setInterval(function () {
                if (/loaded|complete/i.test(document.readyState)) {
                    callback();
                    clearInterval(DOMLoadTimer);
                }
            }, 10);
        }
        /* Other web browsers */
        else window.onload = callback;
    };

    ElementQueries.findElementQueriesElements = function (container) {
        ElementQueries.instance.findElementQueriesElements(container);
    };

    ElementQueries.listen = function () {
        domLoaded(ElementQueries.init);
    };

    return ElementQueries;

}));


/***/ }),

/***/ "./node_modules/css-element-queries/src/ResizeSensor.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-element-queries/src/ResizeSensor.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

/**
 * Copyright Marc J. Schmidt. See the LICENSE file at the top-level
 * directory of this distribution and at
 * https://github.com/marcj/css-element-queries/blob/master/LICENSE.
 */
(function (root, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(typeof window !== 'undefined' ? window : this, function () {

    // Make sure it does not throw in a SSR (Server Side Rendering) situation
    if (typeof window === "undefined") {
        return null;
    }
    // https://github.com/Semantic-Org/Semantic-UI/issues/3855
    // https://github.com/marcj/css-element-queries/issues/257
    var globalWindow = typeof window != 'undefined' && window.Math == Math
        ? window
        : typeof self != 'undefined' && self.Math == Math
            ? self
            : Function('return this')();
    // Only used for the dirty checking, so the event callback count is limited to max 1 call per fps per sensor.
    // In combination with the event based resize sensor this saves cpu time, because the sensor is too fast and
    // would generate too many unnecessary events.
    var requestAnimationFrame = globalWindow.requestAnimationFrame ||
        globalWindow.mozRequestAnimationFrame ||
        globalWindow.webkitRequestAnimationFrame ||
        function (fn) {
            return globalWindow.setTimeout(fn, 20);
        };

    var cancelAnimationFrame = globalWindow.cancelAnimationFrame ||
        globalWindow.mozCancelAnimationFrame ||
        globalWindow.webkitCancelAnimationFrame ||
        function (timer) {
            globalWindow.clearTimeout(timer);
        };

    /**
     * Iterate over each of the provided element(s).
     *
     * @param {HTMLElement|HTMLElement[]} elements
     * @param {Function}                  callback
     */
    function forEachElement(elements, callback){
        var elementsType = Object.prototype.toString.call(elements);
        var isCollectionTyped = ('[object Array]' === elementsType
            || ('[object NodeList]' === elementsType)
            || ('[object HTMLCollection]' === elementsType)
            || ('[object Object]' === elementsType)
            || ('undefined' !== typeof jQuery && elements instanceof jQuery) //jquery
            || ('undefined' !== typeof Elements && elements instanceof Elements) //mootools
        );
        var i = 0, j = elements.length;
        if (isCollectionTyped) {
            for (; i < j; i++) {
                callback(elements[i]);
            }
        } else {
            callback(elements);
        }
    }

    /**
    * Get element size
    * @param {HTMLElement} element
    * @returns {Object} {width, height}
    */
    function getElementSize(element) {
        if (!element.getBoundingClientRect) {
            return {
                width: element.offsetWidth,
                height: element.offsetHeight
            }
        }

        var rect = element.getBoundingClientRect();
        return {
            width: Math.round(rect.width),
            height: Math.round(rect.height)
        }
    }

    /**
     * Apply CSS styles to element.
     *
     * @param {HTMLElement} element
     * @param {Object} style
     */
    function setStyle(element, style) {
        Object.keys(style).forEach(function(key) {
            element.style[key] = style[key];
        });
    }

    /**
     * Class for dimension change detection.
     *
     * @param {Element|Element[]|Elements|jQuery} element
     * @param {Function} callback
     *
     * @constructor
     */
    var ResizeSensor = function(element, callback) {
        //Is used when checking in reset() only for invisible elements
        var lastAnimationFrameForInvisibleCheck = 0;

        /**
         *
         * @constructor
         */
        function EventQueue() {
            var q = [];
            this.add = function(ev) {
                q.push(ev);
            };

            var i, j;
            this.call = function(sizeInfo) {
                for (i = 0, j = q.length; i < j; i++) {
                    q[i].call(this, sizeInfo);
                }
            };

            this.remove = function(ev) {
                var newQueue = [];
                for(i = 0, j = q.length; i < j; i++) {
                    if(q[i] !== ev) newQueue.push(q[i]);
                }
                q = newQueue;
            };

            this.length = function() {
                return q.length;
            }
        }

        /**
         *
         * @param {HTMLElement} element
         * @param {Function}    resized
         */
        function attachResizeEvent(element, resized) {
            if (!element) return;
            if (element.resizedAttached) {
                element.resizedAttached.add(resized);
                return;
            }

            element.resizedAttached = new EventQueue();
            element.resizedAttached.add(resized);

            element.resizeSensor = document.createElement('div');
            element.resizeSensor.dir = 'ltr';
            element.resizeSensor.className = 'resize-sensor';

            var style = {
                pointerEvents: 'none',
                position: 'absolute',
                left: '0px',
                top: '0px',
                right: '0px',
                bottom: '0px',
                overflow: 'hidden',
                zIndex: '-1',
                visibility: 'hidden',
                maxWidth: '100%'
            };
            var styleChild = {
                position: 'absolute',
                left: '0px',
                top: '0px',
                transition: '0s',
            };

            setStyle(element.resizeSensor, style);

            var expand = document.createElement('div');
            expand.className = 'resize-sensor-expand';
            setStyle(expand, style);

            var expandChild = document.createElement('div');
            setStyle(expandChild, styleChild);
            expand.appendChild(expandChild);

            var shrink = document.createElement('div');
            shrink.className = 'resize-sensor-shrink';
            setStyle(shrink, style);

            var shrinkChild = document.createElement('div');
            setStyle(shrinkChild, styleChild);
            setStyle(shrinkChild, { width: '200%', height: '200%' });
            shrink.appendChild(shrinkChild);

            element.resizeSensor.appendChild(expand);
            element.resizeSensor.appendChild(shrink);
            element.appendChild(element.resizeSensor);

            var computedStyle = window.getComputedStyle(element);
            var position = computedStyle ? computedStyle.getPropertyValue('position') : null;
            if ('absolute' !== position && 'relative' !== position && 'fixed' !== position && 'sticky' !== position) {
                element.style.position = 'relative';
            }

            var dirty = false;

            //last request animation frame id used in onscroll event
            var rafId = 0;
            var size = getElementSize(element);
            var lastWidth = 0;
            var lastHeight = 0;
            var initialHiddenCheck = true;
            lastAnimationFrameForInvisibleCheck = 0;

            var resetExpandShrink = function () {
                var width = element.offsetWidth;
                var height = element.offsetHeight;

                expandChild.style.width = (width + 10) + 'px';
                expandChild.style.height = (height + 10) + 'px';

                expand.scrollLeft = width + 10;
                expand.scrollTop = height + 10;

                shrink.scrollLeft = width + 10;
                shrink.scrollTop = height + 10;
            };

            var reset = function() {
                // Check if element is hidden
                if (initialHiddenCheck) {
                    var invisible = element.offsetWidth === 0 && element.offsetHeight === 0;
                    if (invisible) {
                        // Check in next frame
                        if (!lastAnimationFrameForInvisibleCheck){
                            lastAnimationFrameForInvisibleCheck = requestAnimationFrame(function(){
                                lastAnimationFrameForInvisibleCheck = 0;
                                reset();
                            });
                        }

                        return;
                    } else {
                        // Stop checking
                        initialHiddenCheck = false;
                    }
                }

                resetExpandShrink();
            };
            element.resizeSensor.resetSensor = reset;

            var onResized = function() {
                rafId = 0;

                if (!dirty) return;

                lastWidth = size.width;
                lastHeight = size.height;

                if (element.resizedAttached) {
                    element.resizedAttached.call(size);
                }
            };

            var onScroll = function() {
                size = getElementSize(element);
                dirty = size.width !== lastWidth || size.height !== lastHeight;

                if (dirty && !rafId) {
                    rafId = requestAnimationFrame(onResized);
                }

                reset();
            };

            var addEvent = function(el, name, cb) {
                if (el.attachEvent) {
                    el.attachEvent('on' + name, cb);
                } else {
                    el.addEventListener(name, cb);
                }
            };

            addEvent(expand, 'scroll', onScroll);
            addEvent(shrink, 'scroll', onScroll);

            // Fix for custom Elements and invisible elements
            lastAnimationFrameForInvisibleCheck = requestAnimationFrame(function(){
                lastAnimationFrameForInvisibleCheck = 0;
                reset();
            });
        }

        forEachElement(element, function(elem){
            attachResizeEvent(elem, callback);
        });

        this.detach = function(ev) {
            // clean up the unfinished animation frame to prevent a potential endless requestAnimationFrame of reset
            if (!lastAnimationFrameForInvisibleCheck) {
                cancelAnimationFrame(lastAnimationFrameForInvisibleCheck);
                lastAnimationFrameForInvisibleCheck = 0;
            }
            ResizeSensor.detach(element, ev);
        };

        this.reset = function() {
            element.resizeSensor.resetSensor();
        };
    };

    ResizeSensor.reset = function(element) {
        forEachElement(element, function(elem){
            elem.resizeSensor.resetSensor();
        });
    };

    ResizeSensor.detach = function(element, ev) {
        forEachElement(element, function(elem){
            if (!elem) return;
            if(elem.resizedAttached && typeof ev === "function"){
                elem.resizedAttached.remove(ev);
                if(elem.resizedAttached.length()) return;
            }
            if (elem.resizeSensor) {
                if (elem.contains(elem.resizeSensor)) {
                    elem.removeChild(elem.resizeSensor);
                }
                delete elem.resizeSensor;
                delete elem.resizedAttached;
            }
        });
    };

    if (typeof MutationObserver !== "undefined") {
        var observer = new MutationObserver(function (mutations) {
            for (var i in mutations) {
                if (mutations.hasOwnProperty(i)) {
                    var items = mutations[i].addedNodes;
                    for (var j = 0; j < items.length; j++) {
                        if (items[j].resizeSensor) {
                            ResizeSensor.reset(items[j]);
                        }
                    }
                }
            }
        });

        document.addEventListener("DOMContentLoaded", function (event) {
            observer.observe(document.body, {
                childList: true,
                subtree: true,
            });
        });
    }

    return ResizeSensor;

}));


/***/ }),

/***/ "./node_modules/sticky-sidebar/src/sticky-sidebar.js":
/*!***********************************************************!*\
  !*** ./node_modules/sticky-sidebar/src/sticky-sidebar.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Sticky Sidebar JavaScript Plugin.
 * @version 3.3.1
 * @author Ahmed Bouhuolia <a.bouhuolia@gmail.com>
 * @license The MIT License (MIT)
 */
const StickySidebar = (() => {
  
    // ---------------------------------
    // # Define Constants
    // ---------------------------------
    //
    const EVENT_KEY = '.stickySidebar';
    const VERSION   = '3.3.1';
  
    const DEFAULTS = {
      
      /**
       * Additional top spacing of the element when it becomes sticky.
       * @type {Numeric|Function}
       */
      topSpacing: 0,
  
      /**
       * Additional bottom spacing of the element when it becomes sticky.
       * @type {Numeric|Function}
       */
      bottomSpacing: 0,
  
      /**
       * Container sidebar selector to know what the beginning and end of sticky element.
       * @type {String|False}
       */
      containerSelector: false,
  
      /**
       * Inner wrapper selector.
       * @type {String}
       */
      innerWrapperSelector: '.inner-wrapper-sticky',
  
      /**
       * The name of CSS class to apply to elements when they have become stuck.
       * @type {String|False}
       */
      stickyClass: 'is-affixed',
  
      /**
       * Detect when sidebar and its container change height so re-calculate their dimensions.
       * @type {Boolean}
       */
      resizeSensor: true,
  
      /**
       * The sidebar returns to its normal position if its width below this value.
       * @type {Numeric}
       */
      minWidth: false
    };
  
    // ---------------------------------
    // # Class Definition
    // ---------------------------------
    //
    /**
     * Sticky Sidebar Class.
     * @public
     */
    class StickySidebar{
  
      /**
       * Sticky Sidebar Constructor.
       * @constructor
       * @param {HTMLElement|String} sidebar - The sidebar element or sidebar selector.
       * @param {Object} options - The options of sticky sidebar.
       */
      constructor(sidebar, options = {}){
        this.options = StickySidebar.extend(DEFAULTS, options);
  
        // Sidebar element query if there's no one, throw error.
        this.sidebar = ('string' === typeof sidebar ) ? document.querySelector(sidebar) : sidebar;
        if( 'undefined' === typeof this.sidebar )
          throw new Error("There is no specific sidebar element.");
  
        this.sidebarInner = false;
        this.container = this.sidebar.parentElement;
  
        // Current Affix Type of sidebar element.
        this.affixedType = 'STATIC';
        this.direction = 'down';
        this.support = {
          transform:   false,
          transform3d: false
        };
  
        this._initialized = false;
        this._reStyle = false;
        this._breakpoint = false;
        this._resizeListeners = [];
        
        // Dimensions of sidebar, container and screen viewport.
        this.dimensions = {
          translateY: 0,
          topSpacing: 0,
          lastTopSpacing: 0,
          bottomSpacing: 0,
          lastBottomSpacing: 0,
          sidebarHeight: 0,
          sidebarWidth: 0,
          containerTop: 0,
          containerHeight: 0,
          viewportHeight: 0,
          viewportTop: 0, 
          lastViewportTop: 0,
        };
  
        // Bind event handlers for referencability.
        ['handleEvent'].forEach( (method) => {
          this[method] = this[method].bind(this);
        });
  
        // Initialize sticky sidebar for first time.
        this.initialize();
      }
  
      /**
       * Initializes the sticky sidebar by adding inner wrapper, define its container, 
       * min-width breakpoint, calculating dimensions, adding helper classes and inline style.
       * @private
       */
      initialize(){
        this._setSupportFeatures();
  
        // Get sticky sidebar inner wrapper, if not found, will create one.
        if( this.options.innerWrapperSelector ){
          this.sidebarInner = this.sidebar.querySelector(this.options.innerWrapperSelector);
  
          if( null === this.sidebarInner )
            this.sidebarInner = false;
        }
        
        if( ! this.sidebarInner ){
          let wrapper = document.createElement('div');
          wrapper.setAttribute('class', 'inner-wrapper-sticky');
          this.sidebar.appendChild(wrapper);
  
          while( this.sidebar.firstChild != wrapper )
            wrapper.appendChild(this.sidebar.firstChild);
  
          this.sidebarInner = this.sidebar.querySelector('.inner-wrapper-sticky');
        }
  
        // Container wrapper of the sidebar.
        if( this.options.containerSelector ){
          let containers = document.querySelectorAll(this.options.containerSelector);
          containers = Array.prototype.slice.call(containers);
  
          containers.forEach((container, item) => {
            if( ! container.contains(this.sidebar) ) return;
            this.container = container;
          });
  
          if( ! containers.length )
            throw new Error("The container does not contains on the sidebar.");
        }
        
        // If top/bottom spacing is not function parse value to integer.
        if( 'function' !== typeof this.options.topSpacing )
          this.options.topSpacing = parseInt(this.options.topSpacing) || 0;
  
        if( 'function' !== typeof this.options.bottomSpacing )
          this.options.bottomSpacing = parseInt(this.options.bottomSpacing) || 0;
            
        // Breakdown sticky sidebar if screen width below `options.minWidth`.
        this._widthBreakpoint();
  
        // Calculate dimensions of sidebar, container and viewport.
        this.calcDimensions();
  
        // Affix sidebar in proper position.
        this.stickyPosition();
  
        // Bind all events.
        this.bindEvents();
        
        // Inform other properties the sticky sidebar is initialized.
        this._initialized = true;
      }
  
      /**
       * Bind all events of sticky sidebar plugin.
       * @protected
       */
      bindEvents(){
        window.addEventListener('resize', this, {passive: true, capture: false});
        window.addEventListener('scroll', this, {passive: true, capture: false});
  
        this.sidebar.addEventListener('update' + EVENT_KEY, this);
  
        if( this.options.resizeSensor && 'undefined' !== typeof ResizeSensor ){
          new ResizeSensor(this.sidebarInner, this.handleEvent);
          new ResizeSensor(this.container, this.handleEvent);
        }
      }
  
      /**
       * Handles all events of the plugin.
       * @param {Object} event - Event object passed from listener.
       */
      handleEvent(event){
        this.updateSticky(event);
      }
  
      /**
       * Calculates dimensions of sidebar, container and screen viewpoint
       * @public
       */
      calcDimensions(){
        if( this._breakpoint ) return;
        var dims = this.dimensions;
  
        // Container of sticky sidebar dimensions.
        dims.containerTop    = StickySidebar.offsetRelative(this.container).top;
        dims.containerHeight = this.container.clientHeight;
        dims.containerBottom = dims.containerTop + dims.containerHeight;
  
        // Sidebar dimensions.
        dims.sidebarHeight = this.sidebarInner.offsetHeight;
        dims.sidebarWidth  = this.sidebar.offsetWidth;
        
        // Screen viewport dimensions.
        dims.viewportHeight = window.innerHeight;
  
        this._calcDimensionsWithScroll();
      }
  
      /**
       * Some dimensions values need to be up-to-date when scrolling the page.
       * @private
       */
      _calcDimensionsWithScroll(){
        var dims = this.dimensions;
  
        dims.sidebarLeft = StickySidebar.offsetRelative(this.sidebar).left;
  
        dims.viewportTop    = document.documentElement.scrollTop || document.body.scrollTop;
        dims.viewportBottom = dims.viewportTop + dims.viewportHeight;
        dims.viewportLeft   = document.documentElement.scrollLeft || document.body.scrollLeft;
  
        dims.topSpacing    = this.options.topSpacing;
        dims.bottomSpacing = this.options.bottomSpacing;
  
        if( 'function' === typeof dims.topSpacing )
            dims.topSpacing = parseInt(dims.topSpacing(this.sidebar)) || 0;
  
        if( 'function' === typeof dims.bottomSpacing )
            dims.bottomSpacing = parseInt(dims.bottomSpacing(this.sidebar)) || 0;
        
        if( 'VIEWPORT-TOP' === this.affixedType ){
          // Adjust translate Y in the case decrease top spacing value.
          if( dims.topSpacing < dims.lastTopSpacing ){
            dims.translateY += dims.lastTopSpacing - dims.topSpacing;
            this._reStyle = true; 
          }
        
        } else if( 'VIEWPORT-BOTTOM' === this.affixedType ){
          // Adjust translate Y in the case decrease bottom spacing value.
          if( dims.bottomSpacing < dims.lastBottomSpacing ){
            dims.translateY += dims.lastBottomSpacing - dims.bottomSpacing;
            this._reStyle = true;
          }
        }
        
        dims.lastTopSpacing    = dims.topSpacing;
        dims.lastBottomSpacing = dims.bottomSpacing;
      }
      
      /**
       * Determine whether the sidebar is bigger than viewport.
       * @public
       * @return {Boolean}
       */
      isSidebarFitsViewport(){
        return this.dimensions.sidebarHeight < this.dimensions.viewportHeight;
      }
  
      /**
       * Observe browser scrolling direction top and down.
       */
      observeScrollDir(){
        var dims = this.dimensions;
        if( dims.lastViewportTop === dims.viewportTop ) return;
  
        var furthest = 'down' === this.direction ? Math.min : Math.max;
        
        // If the browser is scrolling not in the same direction.
        if( dims.viewportTop === furthest(dims.viewportTop, dims.lastViewportTop) )
          this.direction = 'down' === this.direction ?  'up' : 'down';
      }
  
      /**
       * Gets affix type of sidebar according to current scrollTop and scrollLeft.
       * Holds all logical affix of the sidebar when scrolling up and down and when sidebar 
       * is bigger than viewport and vice versa.
       * @public
       * @return {String|False} - Proper affix type.
       */
      getAffixType(){
        var dims = this.dimensions, affixType = false;
  
        this._calcDimensionsWithScroll();
  
        var sidebarBottom = dims.sidebarHeight + dims.containerTop;
        var colliderTop = dims.viewportTop + dims.topSpacing;
        var colliderBottom = dims.viewportBottom - dims.bottomSpacing;
  
        // When browser is scrolling top.
        if( 'up' === this.direction ){
          if( colliderTop <= dims.containerTop ){
            dims.translateY = 0;
            affixType = 'STATIC';
  
          } else if( colliderTop <= dims.translateY + dims.containerTop ){
            dims.translateY = colliderTop - dims.containerTop;
            affixType = 'VIEWPORT-TOP';
  
          } else if( ! this.isSidebarFitsViewport() && dims.containerTop <= colliderTop ){
            affixType = 'VIEWPORT-UNBOTTOM';
          }
        // When browser is scrolling up.
        } else {
          // When sidebar element is not bigger than screen viewport.
          if( this.isSidebarFitsViewport() ){
  
            if( dims.sidebarHeight + colliderTop >= dims.containerBottom ){
              dims.translateY = dims.containerBottom - sidebarBottom;
              affixType = 'CONTAINER-BOTTOM'; 
  
            } else if( colliderTop >= dims.containerTop ){
              dims.translateY = colliderTop - dims.containerTop;
              affixType = 'VIEWPORT-TOP';
            }
          // When sidebar element is bigger than screen viewport.
          } else {
      
            if( dims.containerBottom <= colliderBottom ){
              dims.translateY = dims.containerBottom - sidebarBottom; 
              affixType = 'CONTAINER-BOTTOM';    
  
            } else if( sidebarBottom + dims.translateY <= colliderBottom ){
              dims.translateY = colliderBottom - sidebarBottom;
              affixType = 'VIEWPORT-BOTTOM';
            
            } else if( dims.containerTop + dims.translateY <= colliderTop ){
              affixType = 'VIEWPORT-UNBOTTOM';
            }
          }
        }
  
        // Make sure the translate Y is not bigger than container height.
        dims.translateY = Math.max(0, dims.translateY);
        dims.translateY = Math.min(dims.containerHeight, dims.translateY);
  
        dims.lastViewportTop = dims.viewportTop;
        return affixType;
      }
  
      /**
       * Gets inline style of sticky sidebar wrapper and inner wrapper according 
       * to its affix type.
       * @private
       * @param {String} affixType - Affix type of sticky sidebar.
       * @return {Object}
       */
      _getStyle(affixType){
        if( 'undefined' === typeof affixType ) return;
  
        var style = {inner: {}, outer: {}};
        var dims = this.dimensions;
  
        switch( affixType ){
          case 'VIEWPORT-TOP':
            style.inner = {position: 'fixed', top: dims.topSpacing,
                  left: dims.sidebarLeft - dims.viewportLeft, width: dims.sidebarWidth};
            break;
          case 'VIEWPORT-BOTTOM':
            style.inner = {position: 'fixed', top: 'auto', left: dims.sidebarLeft,
                  bottom: dims.bottomSpacing, width: dims.sidebarWidth};
            break;
          case 'CONTAINER-BOTTOM':
          case 'VIEWPORT-UNBOTTOM':
            let translate = this._getTranslate(0, dims.translateY + 'px');
            
            if( translate )
              style.inner = {transform: translate};
            else 
              style.inner = {position: 'absolute', top: dims.translateY, width: dims.sidebarWidth};
            break;
        }
        
        switch( affixType ){
          case 'VIEWPORT-TOP':
          case 'VIEWPORT-BOTTOM':
          case 'VIEWPORT-UNBOTTOM':
          case 'CONTAINER-BOTTOM':
            style.outer = {height: dims.sidebarHeight, position: 'relative'};
            break;
        }
  
        style.outer = StickySidebar.extend({height: '', position: ''}, style.outer);
        style.inner = StickySidebar.extend({position: 'relative', top: '', left: '',
            bottom: '', width: '',  transform: this._getTranslate()}, style.inner);
  
        return style;
      }
     
      /**
       * Cause the sidebar to be sticky according to affix type by adding inline
       * style, adding helper class and trigger events.
       * @function
       * @protected
       * @param {string} force - Update sticky sidebar position by force.
       */
      stickyPosition(force){
        if( this._breakpoint ) return;
  
        force = this._reStyle || force || false;
        
        var offsetTop = this.options.topSpacing;
        var offsetBottom = this.options.bottomSpacing;
  
        var affixType = this.getAffixType();
        var style = this._getStyle(affixType);
        
        if( (this.affixedType != affixType || force) && affixType ){
          let affixEvent = 'affix.' + affixType.toLowerCase().replace('viewport-', '') + EVENT_KEY;
          StickySidebar.eventTrigger(this.sidebar, affixEvent);
  
          if( 'STATIC' === affixType )
            StickySidebar.removeClass(this.sidebar, this.options.stickyClass);
          else
            StickySidebar.addClass(this.sidebar, this.options.stickyClass);
          
          for( let key in style.outer ){
            let _unit = ('number' === typeof style.outer[key]) ? 'px' : '';
            this.sidebar.style[key] = style.outer[key];
          }
  
          for( let key in style.inner ){
            let _unit = ('number' === typeof style.inner[key]) ? 'px' : '';
            this.sidebarInner.style[key] = style.inner[key] + _unit;
          }
          
          let affixedEvent = 'affixed.'+ affixType.toLowerCase().replace('viewport-', '') + EVENT_KEY;
          StickySidebar.eventTrigger(this.sidebar, affixedEvent);
        } else {
          if( this._initialized ) this.sidebarInner.style.left = style.inner.left;
        }
  
        this.affixedType = affixType;
      }
  
      /**
       * Breakdown sticky sidebar when window width is below `options.minWidth` value.
       * @protected
       */
      _widthBreakpoint(){
  
        if( window.innerWidth <= this.options.minWidth ){
          this._breakpoint = true;
          this.affixedType = 'STATIC';
  
          this.sidebar.removeAttribute('style');
          StickySidebar.removeClass(this.sidebar, this.options.stickyClass);
          this.sidebarInner.removeAttribute('style');
        } else {
          this._breakpoint = false;
        }
      }
  
      /**
       * Switches between functions stack for each event type, if there's no 
       * event, it will re-initialize sticky sidebar.
       * @public
       */
      updateSticky(event = {}){
        if( this._running ) return;
        this._running = true;
  
        ((eventType) => {

          requestAnimationFrame(() => {
            switch( eventType ){
              // When browser is scrolling and re-calculate just dimensions
              // within scroll. 
              case 'scroll':
                this._calcDimensionsWithScroll();
                this.observeScrollDir();
                this.stickyPosition();
                break;
  
              // When browser is resizing or there's no event, observe width
              // breakpoint and re-calculate dimensions.
              case 'resize':
              default: 
                this._widthBreakpoint();
                this.calcDimensions();
                this.stickyPosition(true);
                break;
            }
            this._running = false;
          });
        })(event.type);
      }
  
      /**
       * Set browser support features to the public property.
       * @private
       */
      _setSupportFeatures(){
        var support = this.support;
  
        support.transform = StickySidebar.supportTransform();
        support.transform3d = StickySidebar.supportTransform(true);
      }
  
      /**
       * Get translate value, if the browser supports transfrom3d, it will adopt it.
       * and the same with translate. if browser doesn't support both return false.
       * @param {Number} y - Value of Y-axis.
       * @param {Number} x - Value of X-axis.
       * @param {Number} z - Value of Z-axis.
       * @return {String|False}
       */
      _getTranslate(y = 0, x = 0, z = 0){
        if( this.support.transform3d ) return 'translate3d(' + y +', '+ x +', '+ z +')';
        else if( this.support.translate ) return 'translate('+ y +', '+ x +')';
        else return false;
      }
  
      /**
       * Destroy sticky sidebar plugin.
       * @public
       */
      destroy(){
        window.removeEventListener('resize', this, {caption: false});
        window.removeEventListener('scroll', this, {caption: false});
  
        this.sidebar.classList.remove(this.options.stickyClass);
        this.sidebar.style.minHeight = '';
  
        this.sidebar.removeEventListener('update' + EVENT_KEY, this);
  
        var styleReset = {inner: {}, outer: {}};
  
        styleReset.inner = {position: '', top: '', left: '', bottom: '', width: '',  transform: ''};
        styleReset.outer = {height: '', position: ''};
  
        for( let key in styleReset.outer )
          this.sidebar.style[key] = styleReset.outer[key];
  
        for( let key in styleReset.inner )
          this.sidebarInner.style[key] = styleReset.inner[key];
  
        if( this.options.resizeSensor && 'undefined' !== typeof ResizeSensor ){
          ResizeSensor.detach(this.sidebarInner, this.handleEvent);
          ResizeSensor.detach(this.container, this.handleEvent);
        }
      }
  
      /**
       * Determine if the browser supports CSS transform feature.
       * @function
       * @static
       * @param {Boolean} transform3d - Detect transform with translate3d.
       * @return {String}
       */
      static supportTransform(transform3d){
        var result = false,
            property = (transform3d) ? 'perspective' : 'transform',
            upper = property.charAt(0).toUpperCase() + property.slice(1),
            prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            support = document.createElement('support'),
            style = support.style;
  
        (property + ' ' + prefixes.join(upper + ' ') + upper).split(' ').forEach(function(property, i) {
          if (style[property] !== undefined) {
            result = property;
            return false;
          }
        });
        return result;
      }
  
      /**
       * Trigger custom event.
       * @static
       * @param {DOMObject} element - Target element on the DOM.
       * @param {String} eventName - Event name.
       * @param {Object} data - 
       */
      static eventTrigger(element, eventName, data){
        try{
          var event = new CustomEvent(eventName, {detail: data});
        } catch(e){
          var event = document.createEvent('CustomEvent');
          event.initCustomEvent(eventName, true, true, data);
        }
        element.dispatchEvent(event);
      }
  
      /**
       * Extend options object with defaults.
       * @function
       * @static
       */
      static extend(defaults, options){
        var results = {};
        for( let key in defaults ){
          if( 'undefined' !== typeof options[key] ) results[key] = options[key];
          else results[key] = defaults[key];
        }
        return results;
      }
  
      /**
       * Get current coordinates left and top of specific element.
       * @static
       */
      static offsetRelative(element){
        var result = {left: 0, top: 0};

        do{
          let offsetTop = element.offsetTop;
          let offsetLeft = element.offsetLeft;
  
          if( ! isNaN(offsetTop) )
            result.top += offsetTop;
  
          if( ! isNaN(offsetLeft) )
            result.left += offsetLeft;

          element = ( 'BODY' === element.tagName ) ?
                      element.parentElement : element.offsetParent;
        } while(element)
        return result;
      }
  
      /**
       * Add specific class name to specific element.
       * @static 
       * @param {ObjectDOM} element 
       * @param {String} className 
       */
      static addClass(element, className){
        if( ! StickySidebar.hasClass(element, className) ){
          if (element.classList)
            element.classList.add(className);
          else
            element.className += ' ' + className;
        }
      }
      
      /**
       * Remove specific class name to specific element
       * @static
       * @param {ObjectDOM} element 
       * @param {String} className 
       */
      static removeClass(element, className){
        if( StickySidebar.hasClass(element, className) ){
          if (element.classList)
            element.classList.remove(className);
          else
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
      }

      /**
       * Determine weather the element has specific class name.
       * @static
       * @param {ObjectDOM} element 
       * @param {String} className 
       */
      static hasClass(element, className){
        if (element.classList)
          return element.classList.contains(className);
        else
          return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
      }
    }
  
    return StickySidebar;
  })();
  
  /* harmony default export */ __webpack_exports__["default"] = (StickySidebar);
  
  // Global
  // -------------------------
  window.StickySidebar = StickySidebar;

/***/ })

}]);
//# sourceMappingURL=vendors~indigo-sidebarStick.js.map