(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{291:function(e,t,n){var o;
/*!
 * fullPage 3.0.8
 * https://github.com/alvarotrigo/fullPage.js
 *
 * @license GPLv3 for open source use only
 * or Fullpage Commercial License for commercial use
 * http://alvarotrigo.com/fullPage/pricing/
 *
 * Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
 */!function(r,i,l,a,s){void 0===(o=function(){return r.fullpage=a(i,l),r.fullpage}.call(t,n,t,e))||(e.exports=o)}(this,window,document,(function(e,t){"use strict";var n="active",o="fp-completely",r="fp-section",i="."+r,l=i+".active",a=".fp-tableCell",s=".fp-slide",c=".fp-slides",u=".fp-slidesContainer";function f(t,n){e.console&&e.console[t]&&e.console[t]("fullPage: "+n)}function d(e,n){return(n=arguments.length>1?n:t)?n.querySelectorAll(e):null}function v(e){e=e||{};for(var t=1,n=arguments.length;t<n;++t){var o=arguments[t];if(o)for(var r in o)o.hasOwnProperty(r)&&("[object Object]"!==Object.prototype.toString.call(o[r])?e[r]=o[r]:e[r]=v(e[r],o[r]))}return e}function p(e,t){return null!=e&&(e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className))}function h(){return"innerHeight"in e?e.innerHeight:t.documentElement.offsetHeight}function g(){return e.innerWidth}function m(e,t){var n;for(n in e=A(e),t)if(t.hasOwnProperty(n)&&null!==n)for(var o=0;o<e.length;o++){e[o].style[n]=t[n]}return e}function w(e,t,n){for(var o=e[n];o&&!X(o,t);)o=o[n];return o}function b(e,t){return w(e,t,"previousElementSibling")}function S(e,t){return w(e,t,"nextElementSibling")}function y(e){return e.previousElementSibling}function E(e){return e.nextElementSibling}function L(e){return e[e.length-1]}function x(e,t){e=O(e)?e[0]:e;for(var n=null!=t?d(t,e.parentNode):e.parentNode.childNodes,o=0,r=0;r<n.length;r++){if(n[r]==e)return o;1==n[r].nodeType&&o++}return-1}function A(e){return O(e)?e:[e]}function T(e){e=A(e);for(var t=0;t<e.length;t++)e[t].style.display="none";return e}function k(e){e=A(e);for(var t=0;t<e.length;t++)e[t].style.display="block";return e}function O(e){return"[object Array]"===Object.prototype.toString.call(e)||"[object NodeList]"===Object.prototype.toString.call(e)}function M(e,t){e=A(e);for(var n=0;n<e.length;n++){var o=e[n];o.classList?o.classList.add(t):o.className+=" "+t}return e}function C(e,t){e=A(e);for(var n=t.split(" "),o=0;o<n.length;o++){t=n[o];for(var r=0;r<e.length;r++){var i=e[r];i.classList?i.classList.remove(t):i.className=i.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}}return e}function H(e,t){t.appendChild(e)}function I(e,n,o){var r;n=n||t.createElement("div");for(var i=0;i<e.length;i++){var l=e[i];(o&&!i||!o)&&(r=n.cloneNode(!0),l.parentNode.insertBefore(r,l)),r.appendChild(l)}return e}function B(e,t){I(e,t,!0)}function N(e,t){for("string"==typeof t&&(t=_(t)),e.appendChild(t);e.firstChild!==t;)t.appendChild(e.firstChild)}function R(e){for(var n=t.createDocumentFragment();e.firstChild;)n.appendChild(e.firstChild);e.parentNode.replaceChild(n,e)}function z(e,t){return e&&1===e.nodeType?X(e,t)?e:z(e.parentNode,t):null}function j(e,t){D(e,e.nextSibling,t)}function P(e,t){D(e,e,t)}function D(e,t,n){O(n)||("string"==typeof n&&(n=_(n)),n=[n]);for(var o=0;o<n.length;o++)e.parentNode.insertBefore(n[o],t)}function V(){var n=t.documentElement;return(e.pageYOffset||n.scrollTop)-(n.clientTop||0)}function W(e){return Array.prototype.filter.call(e.parentNode.children,(function(t){return t!==e}))}function Y(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function F(e){if("function"==typeof e)return!0;var t=Object.prototype.toString(e);return"[object Function]"===t||"[object GeneratorFunction]"===t}function U(n,o,r){var i;r=void 0===r?{}:r,"function"==typeof e.CustomEvent?i=new CustomEvent(o,{detail:r}):(i=t.createEvent("CustomEvent")).initCustomEvent(o,!0,!0,r),n.dispatchEvent(i)}function X(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t)}function K(e,t){if("boolean"==typeof t)for(var n=0;n<e.length;n++)e[n].style.display=t?"block":"none";return e}function _(e){var n=t.createElement("div");return n.innerHTML=e.trim(),n.firstChild}function $(e){e=A(e);for(var t=0;t<e.length;t++){var n=e[t];n&&n.parentElement&&n.parentNode.removeChild(n)}}function q(e,t,n){for(var o=e[n],r=[];o;)(X(o,t)||null==t)&&r.push(o),o=o[n];return r}function Q(e,t){return q(e,t,"nextElementSibling")}function G(e,t){return q(e,t,"previousElementSibling")}return e.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,n){n=n||e;for(var o=0;o<this.length;o++)t.call(n,this[o],o,this)}),e.fp_utils={$:d,deepExtend:v,hasClass:p,getWindowHeight:h,css:m,until:w,prevUntil:b,nextUntil:S,prev:y,next:E,last:L,index:x,getList:A,hide:T,show:k,isArrayOrList:O,addClass:M,removeClass:C,appendTo:H,wrap:I,wrapAll:B,wrapInner:N,unwrap:R,closest:z,after:j,before:P,insertBefore:D,getScrollTop:V,siblings:W,preventDefault:Y,isFunction:F,trigger:U,matches:X,toggle:K,createElementFromHTML:_,remove:$,filter:function(e,t){Array.prototype.filter.call(e,t)},untilAll:q,nextAll:Q,prevAll:G,showError:f},function(w,A){var O=A&&new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(A.licenseKey)||t.domain.indexOf("alvarotrigo.com")>-1,I=d("html, body"),D=d("html")[0],q=d("body")[0];if(!p(D,"fp-enabled")){var J={};A=v({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:e.fp_scrolloverflow?e.fp_scrolloverflow.iscrollHandler:null,scrollOverflowOptions:null,touchSensitivity:5,touchWrapper:"string"==typeof w?d(w)[0]:w,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},cards:!1,cardsOptions:{perspective:100,fadeContent:!0,fadeBackground:!0},sectionSelector:".section",slideSelector:".slide",v2compatible:!1,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},A);var Z,ee,te,ne,oe=!1,re=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),ie="ontouchstart"in e||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,le="string"==typeof w?d(w)[0]:w,ae=h(),se=g(),ce=!1,ue=!0,fe=!0,de=[],ve={m:{up:!0,down:!0,left:!0,right:!0}};ve.k=v({},ve.m);var pe,he,ge,me,we,be,Se,ye,Ee,Le=function(){var t;t=e.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"};return t}(),xe={touchmove:"ontouchmove"in e?"touchmove":Le.move,touchstart:"ontouchstart"in e?"touchstart":Le.down},Ae=!1;try{var Te=Object.defineProperty({},"passive",{get:function(){Ae=!0}});e.addEventListener("testPassive",null,Te),e.removeEventListener("testPassive",null,Te)}catch(e){}var ke,Oe,Me=v({},A),Ce=!1,He=!0,Ie=["parallax","scrollOverflowReset","dragAndMove","offsetSections","fadingEffect","responsiveSlides","continuousHorizontal","interlockedSlides","scrollHorizontally","resetSliders","cards"];kn(),e.fp_easings=v(e.fp_easings,{easeInOutCubic:function(e,t,n,o){return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t}}),le&&(J.version="3.0.8",J.setAutoScrolling=Fe,J.setRecordHistory=Ue,J.setScrollingSpeed=Xe,J.setFitToSection=Ke,J.setLockAnchors=function(e){A.lockAnchors=e},J.setMouseWheelScrolling=_e,J.setAllowScrolling=$e,J.setKeyboardScrolling=Qe,J.moveSectionUp=Ge,J.moveSectionDown=Je,J.silentMoveTo=Ze,J.moveTo=et,J.moveSlideRight=tt,J.moveSlideLeft=nt,J.fitToSection=gt,J.reBuild=ot,J.setResponsive=it,J.getFullpageData=function(){return A},J.destroy=function(n){Fe(!1,"internal"),$e(!0),qe(!1),Qe(!1),M(le,"fp-destroyed"),[we,me,he,be,Se,Ee,ge].forEach((function(e){clearTimeout(e)})),e.removeEventListener("scroll",ht),e.removeEventListener("hashchange",Wt),e.removeEventListener("resize",on),t.removeEventListener("keydown",Ft),t.removeEventListener("keyup",Xt),["click","touchstart"].forEach((function(e){t.removeEventListener(e,lt)})),["mouseenter","touchstart","mouseleave","touchend"].forEach((function(e){t.removeEventListener(e,st,!0)})),n&&(Ln(0),d("img[data-src], source[data-src], audio[data-src], iframe[data-src]",le).forEach((function(e){It(e,"src")})),d("img[data-srcset]").forEach((function(e){It(e,"srcset")})),$(d("#fp-nav, .fp-slidesNav, .fp-controlArrow")),m(d(i),{height:"","background-color":"",padding:""}),m(d(s),{width:""}),m(le,{height:"",position:"","-ms-touch-action":"","touch-action":""}),m(I,{overflow:"",height:""}),C(D,"fp-enabled"),C(q,"fp-responsive"),q.className.split(/\s+/).forEach((function(e){0===e.indexOf("fp-viewing")&&C(q,e)})),d(i+", "+s).forEach((function(e){A.scrollOverflowHandler&&A.scrollOverflow&&A.scrollOverflowHandler.remove(e),C(e,"fp-table active "+o),e.getAttribute("data-fp-styles")&&e.setAttribute("style",e.getAttribute("data-fp-styles")),p(e,r)&&!Ce&&e.removeAttribute("data-anchor")})),sn(le),[a,u,c].forEach((function(e){d(e,le).forEach((function(e){R(e)}))})),m(le,{"-webkit-transition":"none",transition:"none"}),e.scrollTo(0,0),[r,"fp-slide","fp-slidesContainer"].forEach((function(e){C(d("."+e),e)})))},J.getActiveSection=function(){return new Hn(d(l)[0])},J.getActiveSlide=function(){return Mt(d(".fp-slide.active",d(l)[0])[0])},J.test={top:"0px",translate3d:"translate3d(0px, 0px, 0px)",translate3dH:function(){for(var e=[],t=0;t<d(A.sectionSelector,le).length;t++)e.push("translate3d(0px, 0px, 0px)");return e}(),left:function(){for(var e=[],t=0;t<d(A.sectionSelector,le).length;t++)e.push(0);return e}(),options:A,setAutoScrolling:Fe},J.shared={afterRenderActions:pt,isNormalScrollElement:!1},e.fullpage_api=J,A.$&&Object.keys(J).forEach((function(e){A.$.fn.fullpage[e]=J[e]})),function(){A.css3&&(A.css3=function(){var n,o=t.createElement("p"),r={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(var i in o.style.display="block",t.body.insertBefore(o,null),r)void 0!==o.style[i]&&(o.style[i]="translate3d(1px,1px,1px)",n=e.getComputedStyle(o).getPropertyValue(r[i]));return t.body.removeChild(o),void 0!==n&&n.length>0&&"none"!==n}());A.scrollBar=A.scrollBar||A.hybrid,function(){if(!A.anchors.length){var e=d(A.sectionSelector.split(",").join("[data-anchor],")+"[data-anchor]",le);e.length&&(Ce=!0,e.forEach((function(e){A.anchors.push(e.getAttribute("data-anchor").toString())})))}if(!A.navigationTooltips.length){var t=d(A.sectionSelector.split(",").join("[data-tooltip],")+"[data-tooltip]",le);t.length&&t.forEach((function(e){A.navigationTooltips.push(e.getAttribute("data-tooltip").toString())}))}}(),function(){m(le,{height:"100%",position:"relative"}),M(le,"fullpage-wrapper"),M(D,"fp-enabled"),ae=h(),C(le,"fp-destroyed"),M(d(A.sectionSelector,le),r),M(d(A.slideSelector,le),"fp-slide");for(var e=d(i),o=0;o<e.length;o++){var a=o,c=e[o],u=d(s,c),f=u.length;c.setAttribute("data-fp-styles",c.getAttribute("style")),ft(c,a),dt(c,a),f>0?ut(c,u,f):A.verticalCentered&&fn(c)}A.fixedElements&&A.css3&&d(A.fixedElements).forEach((function(e){q.appendChild(e)}));A.navigation&&function(){var e=t.createElement("div");e.setAttribute("id","fp-nav");var o=t.createElement("ul");e.appendChild(o),H(e,q);var r=d("#fp-nav")[0];M(r,"fp-"+A.navigationPosition),A.showActiveTooltip&&M(r,"fp-show-active");for(var a="",s=0;s<d(i).length;s++){var c="";A.anchors.length&&(c=A.anchors[s]),a+='<li><a href="#'+c+'"><span class="fp-sr-only">'+vt(s,"Section")+"</span><span></span></a>";var u=A.navigationTooltips[s];void 0!==u&&""!==u&&(a+='<div class="fp-tooltip fp-'+A.navigationPosition+'">'+u+"</div>"),a+="</li>"}d("ul",r)[0].innerHTML=a,m(d("#fp-nav"),{"margin-top":"-"+d("#fp-nav")[0].offsetHeight/2+"px"});var f=d("li",d("#fp-nav")[0])[x(d(l)[0],i)];M(d("a",f),n)}();void d('iframe[src*="youtube.com/embed/"]',le).forEach((function(e){var t,n,o;n="enablejsapi=1",o=(t=e).getAttribute("src"),t.setAttribute("src",o+(/\?/.test(o)?"&":"?")+n)})),A.scrollOverflow&&(pe=A.scrollOverflowHandler.init(A))}(),$e(!0),qe(!0),Fe(A.autoScrolling,"internal"),ln(),Sn(),"complete"===t.readyState&&Vt();e.addEventListener("load",Vt),A.scrollOverflow||pt();!function(){for(var e=1;e<4;e++)Ee=setTimeout(ct,350*e)}()}(),e.addEventListener("scroll",ht),e.addEventListener("hashchange",Wt),e.addEventListener("blur",Qt),e.addEventListener("resize",on),t.addEventListener("keydown",Ft),t.addEventListener("keyup",Xt),["click","touchstart"].forEach((function(e){t.addEventListener(e,lt)})),A.normalScrollElements&&(["mouseenter","touchstart"].forEach((function(e){at(e,!1)})),["mouseleave","touchend"].forEach((function(e){at(e,!0)}))));var Be=!1,Ne=0,Re=0,ze=0,je=0,Pe=0,De=(new Date).getTime(),Ve=0,We=0,Ye=ae;return J}function Fe(e,t){e||Ln(0),Tn("autoScrolling",e,t);var n=d(l)[0];if(A.autoScrolling&&!A.scrollBar)m(I,{overflow:"hidden",height:"100%"}),Ue(Me.recordHistory,"internal"),m(le,{"-ms-touch-action":"none","touch-action":"none"}),null!=n&&Ln(n.offsetTop);else if(m(I,{overflow:"visible",height:"initial"}),Ue(!!A.autoScrolling&&Me.recordHistory,"internal"),m(le,{"-ms-touch-action":"","touch-action":""}),null!=n){var o=Ct(n.offsetTop);o.element.scrollTo(0,o.options)}}function Ue(e,t){Tn("recordHistory",e,t)}function Xe(e,t){Tn("scrollingSpeed",e,t)}function Ke(e,t){Tn("fitToSection",e,t)}function _e(n){n?(!function(){var n,o="";e.addEventListener?n="addEventListener":(n="attachEvent",o="on");var r="onwheel"in t.createElement("div")?"wheel":void 0!==t.onmousewheel?"mousewheel":"DOMMouseScroll",i=!!Ae&&{passive:!1};"DOMMouseScroll"==r?t[n](o+"MozMousePixelScroll",Lt,i):t[n](o+r,Lt,i)}(),le.addEventListener("mousedown",Kt),le.addEventListener("mouseup",_t)):(t.addEventListener?(t.removeEventListener("mousewheel",Lt,!1),t.removeEventListener("wheel",Lt,!1),t.removeEventListener("MozMousePixelScroll",Lt,!1)):t.detachEvent("onmousewheel",Lt),le.removeEventListener("mousedown",Kt),le.removeEventListener("mouseup",_t))}function $e(e,t){void 0!==t?(t=t.replace(/ /g,"").split(",")).forEach((function(t){An(e,t,"m")})):An(e,"all","m")}function qe(e){e?(_e(!0),function(){if(re||ie){A.autoScrolling&&(q.removeEventListener(xe.touchmove,wt,{passive:!1}),q.addEventListener(xe.touchmove,wt,{passive:!1}));var e=A.touchWrapper;e.removeEventListener(xe.touchstart,yt),e.removeEventListener(xe.touchmove,bt,{passive:!1}),e.addEventListener(xe.touchstart,yt),e.addEventListener(xe.touchmove,bt,{passive:!1})}}()):(_e(!1),function(){if(re||ie){A.autoScrolling&&(q.removeEventListener(xe.touchmove,bt,{passive:!1}),q.removeEventListener(xe.touchmove,wt,{passive:!1}));var e=A.touchWrapper;e.removeEventListener(xe.touchstart,yt),e.removeEventListener(xe.touchmove,bt,{passive:!1})}}())}function Qe(e,t){void 0!==t?(t=t.replace(/ /g,"").split(",")).forEach((function(t){An(e,t,"k")})):(An(e,"all","k"),A.keyboardScrolling=e)}function Ge(){var e=b(d(l)[0],i);e||!A.loopTop&&!A.continuousVertical||(e=L(d(i))),null!=e&&Tt(e,null,!0)}function Je(){var e=S(d(l)[0],i);e||!A.loopBottom&&!A.continuousVertical||(e=d(i)[0]),null!=e&&Tt(e,null,!1)}function Ze(e,t){Xe(0,"internal"),et(e,t),Xe(Me.scrollingSpeed,"internal")}function et(e,t){var n=pn(e);void 0!==t?hn(e,t):null!=n&&Tt(n)}function tt(e){xt("right",e)}function nt(e){xt("left",e)}function ot(t){if(!p(le,"fp-destroyed")){ce=!0,ae=h(),se=g();for(var n=d(i),o=0;o<n.length;++o){var r=n[o],u=d(c,r)[0],f=d(s,r);A.verticalCentered&&m(d(a,r),{height:dn(r)+"px"}),m(r,{height:ae+"px"}),f.length>1&&tn(u,d(".fp-slide.active",u)[0])}A.scrollOverflow&&pe.createScrollBarForAll();var v=x(d(l)[0],i);v&&Ze(v+1),ce=!1,F(A.afterResize)&&t&&A.afterResize.call(le,e.innerWidth,e.innerHeight),F(A.afterReBuild)&&!t&&A.afterReBuild.call(le)}}function rt(){return p(q,"fp-responsive")}function it(e){var t=rt();e?t||(Fe(!1,"internal"),Ke(!1,"internal"),T(d("#fp-nav")),M(q,"fp-responsive"),F(A.afterResponsive)&&A.afterResponsive.call(le,e),A.scrollOverflow&&pe.createScrollBarForAll()):t&&(Fe(Me.autoScrolling,"internal"),Ke(Me.autoScrolling,"internal"),k(d("#fp-nav")),C(q,"fp-responsive"),F(A.afterResponsive)&&A.afterResponsive.call(le,e))}function lt(e){var t=e.target;t&&z(t,"#fp-nav a")?Gt.call(t,e):X(t,".fp-tooltip")?Ut.call(t):X(t,".fp-controlArrow")?qt.call(t,e):X(t,".fp-slidesNav a")||null!=z(t,".fp-slidesNav a")?Jt.call(t,e):z(t,A.menu+" [data-menuanchor]")&&Zt.call(t,e)}function at(e,n){t["fp_"+e]=n,t.addEventListener(e,st,!0)}function st(e){var n=e.type,o=!1,r=A.scrollOverflow,i="mouseleave"===n?e.toElement||e.relatedTarget:e.target;if(i==t||!i)return qe(!0),void(r&&A.scrollOverflowHandler.setIscroll(i,!0));("touchend"===n&&(He=!1,setTimeout((function(){He=!0}),800)),"mouseenter"!==n||He)&&(A.normalScrollElements.split(",").forEach((function(e){if(!o){var t=X(i,e),n=z(i,e);(t||n)&&(J.shared.isNormalScrollElement||(qe(!1),r&&A.scrollOverflowHandler.setIscroll(i,!1)),J.shared.isNormalScrollElement=!0,o=!0)}})),!o&&J.shared.isNormalScrollElement&&(qe(!0),r&&A.scrollOverflowHandler.setIscroll(i,!0),J.shared.isNormalScrollElement=!1))}function ct(){var e=h(),t=g();ae===e&&se===t||(ae=e,se=t,ot(!0))}function ut(e,o,r){var a=100*r,s=100/r,f=t.createElement("div");f.className="fp-slides",B(o,f);var v=t.createElement("div");v.className="fp-slidesContainer",B(o,v),m(d(u,e),{width:a+"%"}),r>1&&(A.controlArrows&&function(e){var t=[_('<div class="fp-controlArrow fp-prev"></div>'),_('<div class="fp-controlArrow fp-next"></div>')];j(d(c,e)[0],t),"#fff"!==A.controlArrowColor&&(m(d(".fp-controlArrow.fp-next",e),{"border-color":"transparent transparent transparent "+A.controlArrowColor}),m(d(".fp-controlArrow.fp-prev",e),{"border-color":"transparent "+A.controlArrowColor+" transparent transparent"}));A.loopHorizontal||T(d(".fp-controlArrow.fp-prev",e))}(e),A.slidesNavigation&&function(e,t){H(_('<div class="fp-slidesNav"><ul></ul></div>'),e);var o=d(".fp-slidesNav",e)[0];M(o,"fp-"+A.slidesNavPosition);for(var r=0;r<t;r++)H(_('<li><a href="#"><span class="fp-sr-only">'+vt(r,"Slide")+"</span><span></span></a></li>"),d("ul",o)[0]);m(o,{"margin-left":"-"+o.innerWidth/2+"px"}),M(d("a",d("li",o)[0]),n)}(e,r)),o.forEach((function(e){m(e,{width:s+"%"}),A.verticalCentered&&fn(e)}));var p=d(".fp-slide.active",e)[0];null!=p&&(0!==x(d(l),i)||0===x(d(l),i)&&0!==x(p))?En(p,"internal"):M(o[0],n)}function ft(e,t){t||null!=d(l)[0]||M(e,n),ne=d(l)[0],m(e,{height:ae+"px"}),A.paddingTop&&m(e,{"padding-top":A.paddingTop}),A.paddingBottom&&m(e,{"padding-bottom":A.paddingBottom}),void 0!==A.sectionsColor[t]&&m(e,{"background-color":A.sectionsColor[t]}),void 0!==A.anchors[t]&&e.setAttribute("data-anchor",A.anchors[t])}function dt(e,t){void 0!==A.anchors[t]&&p(e,n)&&cn(A.anchors[t],t),A.menu&&A.css3&&null!=z(d(A.menu)[0],".fullpage-wrapper")&&d(A.menu).forEach((function(e){q.appendChild(e)}))}function vt(e,t){return A.navigationTooltips[e]||A.anchors[e]||t+" "+(e+1)}function pt(){var e,t,n=d(l)[0];M(n,o),Nt(n),Bt(),zt(n),A.scrollOverflow&&A.scrollOverflowHandler.afterLoad(),e=Yt(),t=pn(e.section),e.section&&t&&(void 0===t||x(t)!==x(ne))||!F(A.afterLoad)||kt("afterLoad",{activeSection:n,element:n,direction:null,anchorLink:n.getAttribute("data-anchor"),sectionIndex:x(n,i)}),F(A.afterRender)&&kt("afterRender")}function ht(){var e;if(!A.autoScrolling||A.scrollBar){var t=V(),r=function(e){var t=e>Ne?"down":"up";return Ne=e,Ve=e,t}(t),a=0,s=t+h()/2,c=q.offsetHeight-h()===t,u=d(i);if(c)a=u.length-1;else if(t)for(var f=0;f<u.length;++f){u[f].offsetTop<=s&&(a=f)}else a=0;if(function(e){var t=d(l)[0].offsetTop,n=t+h();if("up"==e)return n>=V()+h();return t<=V()}(r)&&(p(d(l)[0],o)||(M(d(l)[0],o),C(W(d(l)[0]),o))),!p(e=u[a],n)){Be=!0;var v,g,m=d(l)[0],w=x(m,i)+1,b=un(e),S=e.getAttribute("data-anchor"),y=x(e,i)+1,E=d(".fp-slide.active",e)[0],L={activeSection:m,sectionIndex:y-1,anchorLink:S,element:e,leavingSection:w,direction:b};E&&(g=E.getAttribute("data-anchor"),v=x(E)),fe&&(M(e,n),C(W(e),n),F(A.onLeave)&&kt("onLeave",L),F(A.afterLoad)&&kt("afterLoad",L),Pt(m),Nt(e),zt(e),cn(S,y-1),A.anchors.length&&(Z=S),mn(v,g,S,y)),clearTimeout(be),be=setTimeout((function(){Be=!1}),100)}A.fitToSection&&(clearTimeout(Se),Se=setTimeout((function(){A.fitToSection&&d(l)[0].offsetHeight<=ae&&gt()}),A.fitToSectionDelay))}}function gt(){fe&&(ce=!0,Tt(d(l)[0]),ce=!1)}function mt(e){if(ve.m[e]){var t="down"===e?Je:Ge;if(A.scrollOverflow){var n=A.scrollOverflowHandler.scrollable(d(l)[0]),o="down"===e?"bottom":"top";if(null!=n){if(!A.scrollOverflowHandler.isScrolled(o,n))return!0;t()}else t()}else t()}}function wt(e){A.autoScrolling&&St(e)&&ve.m.up&&Y(e)}function bt(t){var n=z(t.target,i)||d(l)[0];if(St(t)){A.autoScrolling&&Y(t);var o=yn(t);je=o.y,Pe=o.x,d(c,n).length&&Math.abs(ze-Pe)>Math.abs(Re-je)?!oe&&Math.abs(ze-Pe)>g()/100*A.touchSensitivity&&(ze>Pe?ve.m.right&&tt(n):ve.m.left&&nt(n)):A.autoScrolling&&fe&&Math.abs(Re-je)>e.innerHeight/100*A.touchSensitivity&&(Re>je?mt("down"):je>Re&&mt("up"))}}function St(e){return void 0===e.pointerType||"mouse"!=e.pointerType}function yt(e){if(A.fitToSection&&(ke=!1),St(e)){var t=yn(e);Re=t.y,ze=t.x}}function Et(e,t){for(var n=0,o=e.slice(Math.max(e.length-t,1)),r=0;r<o.length;r++)n+=o[r];return Math.ceil(n/t)}function Lt(t){var n=(new Date).getTime(),o=p(d(".fp-completely")[0],"fp-normal-scroll");if(!ve.m.down&&!ve.m.up)return Y(t),!1;if(A.autoScrolling&&!te&&!o){var r=(t=t||e.event).wheelDelta||-t.deltaY||-t.detail,i=Math.max(-1,Math.min(1,r)),l=void 0!==t.wheelDeltaX||void 0!==t.deltaX,a=Math.abs(t.wheelDeltaX)<Math.abs(t.wheelDelta)||Math.abs(t.deltaX)<Math.abs(t.deltaY)||!l;de.length>149&&de.shift(),de.push(Math.abs(r)),A.scrollBar&&Y(t);var s=n-De;if(De=n,s>200&&(de=[]),fe)Et(de,10)>=Et(de,70)&&a&&mt(i<0?"down":"up");return!1}A.fitToSection&&(ke=!1)}function xt(e,t){var n=null==t?d(l)[0]:t,o=d(c,n)[0];if(!(null==o||oe||d(s,o).length<2)){var r=d(".fp-slide.active",o)[0],i=null;if(null==(i="left"===e?b(r,s):S(r,s))){if(!A.loopHorizontal)return;var a=W(r);i="left"===e?a[a.length-1]:a[0]}oe=!J.test.isTesting,tn(o,i,e)}}function At(){for(var e=d(".fp-slide.active"),t=0;t<e.length;t++)En(e[t],"internal")}function Tt(e,t,o){if(null!=e){var r,a,s={element:e,callback:t,isMovementUp:o,dtop:function(e){var t=e.offsetHeight,n=e.offsetTop,o=n,r=n>Ve,i=o-ae+t,l=A.bigSectionsDestination;return t>ae?(r||l)&&"bottom"!==l||(o=i):(r||ce&&null==E(e))&&(o=i),Ve=o,o}(e),yMovement:un(e),anchorLink:e.getAttribute("data-anchor"),sectionIndex:x(e,i),activeSlide:d(".fp-slide.active",e)[0],activeSection:d(l)[0],leavingSection:x(d(l),i)+1,localIsResizing:ce};if(!(s.activeSection==e&&!ce||A.scrollBar&&V()===s.dtop&&!p(e,"fp-auto-height"))){if(null!=s.activeSlide&&(r=s.activeSlide.getAttribute("data-anchor"),a=x(s.activeSlide)),!s.localIsResizing){var c=s.yMovement;if(void 0!==o&&(c=o?"up":"down"),s.direction=c,F(A.onLeave)&&!1===kt("onLeave",s))return}A.autoScrolling&&A.continuousVertical&&void 0!==s.isMovementUp&&(!s.isMovementUp&&"up"==s.yMovement||s.isMovementUp&&"down"==s.yMovement)&&(s=function(e){e.isMovementUp?P(d(l)[0],Q(e.activeSection,i)):j(d(l)[0],G(e.activeSection,i).reverse());return Ln(d(l)[0].offsetTop),At(),e.wrapAroundElements=e.activeSection,e.dtop=e.element.offsetTop,e.yMovement=un(e.element),e}(s)),s.localIsResizing||Pt(s.activeSection),A.scrollOverflow&&A.scrollOverflowHandler.beforeLeave(),M(e,n),C(W(e),n),Nt(e),A.scrollOverflow&&A.scrollOverflowHandler.onLeave(),fe=J.test.isTesting,mn(a,r,s.anchorLink,s.sectionIndex),function(e){if(A.css3&&A.autoScrolling&&!A.scrollBar){vn("translate3d(0px, -"+Math.round(e.dtop)+"px, 0px)",!0),A.scrollingSpeed?(clearTimeout(me),me=setTimeout((function(){Ht(e)}),A.scrollingSpeed)):Ht(e)}else{var t=Ct(e.dtop);J.test.top=-e.dtop+"px",On(t.element,t.options,A.scrollingSpeed,(function(){A.scrollBar?setTimeout((function(){Ht(e)}),30):Ht(e)}))}}(s),Z=s.anchorLink,cn(s.anchorLink,s.sectionIndex)}}}function kt(e,t){var n,o=function(e,t){var n;n=A.v2compatible?{afterRender:function(){return[le]},onLeave:function(){return[t.activeSection,t.leavingSection,t.sectionIndex+1,t.direction]},afterLoad:function(){return[t.element,t.anchorLink,t.sectionIndex+1]},afterSlideLoad:function(){return[t.destiny,t.anchorLink,t.sectionIndex+1,t.slideAnchor,t.slideIndex]},onSlideLeave:function(){return[t.prevSlide,t.anchorLink,t.sectionIndex+1,t.prevSlideIndex,t.direction,t.slideIndex]}}:{afterRender:function(){return{section:Ot(d(l)[0]),slide:Mt(d(".fp-slide.active",d(l)[0])[0])}},onLeave:function(){return{origin:Ot(t.activeSection),destination:Ot(t.element),direction:t.direction}},afterLoad:function(){return n.onLeave()},afterSlideLoad:function(){return{section:Ot(t.section),origin:Mt(t.prevSlide),destination:Mt(t.destiny),direction:t.direction}},onSlideLeave:function(){return n.afterSlideLoad()}};return n[e]()}(e,t);if(A.v2compatible){if(!1===A[e].apply(o[0],o.slice(1)))return!1}else if(U(le,e,o),!1===A[e].apply(o[Object.keys(o)[0]],(n=o,Object.keys(n).map((function(e){return n[e]})))))return!1;return!0}function Ot(e){return e?new Hn(e):null}function Mt(e){return e?new In(e):null}function Ct(t){var n={};return A.autoScrolling&&!A.scrollBar?(n.options=-t,n.element=d(".fullpage-wrapper")[0]):(n.options=t,n.element=e),n}function Ht(e){!function(e){null!=e.wrapAroundElements&&(e.isMovementUp?P(d(i)[0],e.wrapAroundElements):j(d(i)[d(i).length-1],e.wrapAroundElements),Ln(d(l)[0].offsetTop),At())}(e),F(A.afterLoad)&&!e.localIsResizing&&kt("afterLoad",e),A.scrollOverflow&&A.scrollOverflowHandler.afterLoad(),e.localIsResizing||zt(e.element),M(e.element,o),C(W(e.element),o),Bt(),fe=!0,F(e.callback)&&e.callback()}function It(e,t){e.setAttribute(t,e.getAttribute("data-"+t)),e.removeAttribute("data-"+t)}function Bt(){var e=d(".fp-auto-height")[0]||rt()&&d(".fp-auto-height-responsive")[0];A.lazyLoading&&e&&d(i+":not(.active)").forEach((function(e){var t,n,o;t=e.getBoundingClientRect(),n=t.top,o=t.bottom,(n+2<ae&&n>0||o>2&&o<ae)&&Nt(e)}))}function Nt(e){A.lazyLoading&&d("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",Dt(e)).forEach((function(t){if(["src","srcset"].forEach((function(n){var o=t.getAttribute("data-"+n);null!=o&&o&&(It(t,n),t.addEventListener("load",(function(){Rt(e)})))})),X(t,"source")){var n=z(t,"video, audio");n&&(n.load(),n.onloadeddata=function(){Rt(e)})}}))}function Rt(e){A.scrollOverflow&&(clearTimeout(Oe),Oe=setTimeout((function(){pe.createScrollBar(e)}),200))}function zt(e){var t=Dt(e);d("video, audio",t).forEach((function(e){e.hasAttribute("data-autoplay")&&"function"==typeof e.play&&e.play()})),d('iframe[src*="youtube.com/embed/"]',t).forEach((function(e){e.hasAttribute("data-autoplay")&&jt(e),e.onload=function(){e.hasAttribute("data-autoplay")&&jt(e)}}))}function jt(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function Pt(e){var t=Dt(e);d("video, audio",t).forEach((function(e){e.hasAttribute("data-keepplaying")||"function"!=typeof e.pause||e.pause()})),d('iframe[src*="youtube.com/embed/"]',t).forEach((function(e){/youtube\.com\/embed\//.test(e.getAttribute("src"))&&!e.hasAttribute("data-keepplaying")&&e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")}))}function Dt(e){var t=d(".fp-slide.active",e);return t.length&&(e=t[0]),e}function Vt(){var e=Yt(),t=e.section,n=e.slide;t&&(A.animateAnchor?hn(t,n):Ze(t,n))}function Wt(){if(!Be&&!A.lockAnchors){var e=Yt(),t=e.section,n=e.slide,o=void 0===Z,r=void 0===Z&&void 0===n&&!oe;t&&t.length&&(t&&t!==Z&&!o||r||!oe&&ee!=n)&&hn(t,n)}}function Yt(){var t,n,o=e.location.hash;if(o.length){var r=o.replace("#","").split("/"),i=o.indexOf("#/")>-1;t=i?"/"+r[1]:decodeURIComponent(r[0]);var l=i?r[2]:r[1];l&&l.length&&(n=decodeURIComponent(l))}return{section:t,slide:n}}function Ft(e){clearTimeout(ye);var n=t.activeElement,o=e.keyCode;if(9===o)!function(e){var n=e.shiftKey,o=t.activeElement,r=$t(Dt(d(l)[0]));function a(e){return Y(e),r[0]?r[0].focus():null}if(function(e){var n=$t(t),o=n.indexOf(t.activeElement),r=e.shiftKey?o-1:o+1,l=n[r],a=Mt(z(l,s)),c=Ot(z(l,i));return!a&&!c}(e))return;o?null==z(o,l+","+l+" .fp-slide.active")&&(o=a(e)):a(e);(!n&&o==r[r.length-1]||n&&o==r[0])&&Y(e)}(e);else if(!X(n,"textarea")&&!X(n,"input")&&!X(n,"select")&&"true"!==n.getAttribute("contentEditable")&&""!==n.getAttribute("contentEditable")&&A.keyboardScrolling&&A.autoScrolling){[40,38,32,33,34].indexOf(o)>-1&&Y(e),te=e.ctrlKey,ye=setTimeout((function(){!function(e){var n=e.shiftKey,o=t.activeElement,r=X(o,"video")||X(o,"audio");if(!fe&&[37,39].indexOf(e.keyCode)<0)return;switch(e.keyCode){case 38:case 33:ve.k.up&&Ge();break;case 32:if(n&&ve.k.up&&!r){Ge();break}case 40:case 34:ve.k.down&&(32===e.keyCode&&r||Je());break;case 36:ve.k.up&&et(1);break;case 35:ve.k.down&&et(d(i).length);break;case 37:ve.k.left&&nt();break;case 39:ve.k.right&&tt();break;default:;}}(e)}),150)}}function Ut(){U(y(this),"click")}function Xt(e){ue&&(te=e.ctrlKey)}function Kt(e){2==e.which&&(We=e.pageY,le.addEventListener("mousemove",en))}function _t(e){2==e.which&&le.removeEventListener("mousemove",en)}function $t(e){return[].slice.call(d('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',e)).filter((function(e){return"-1"!==e.getAttribute("tabindex")&&null!==e.offsetParent}))}function qt(){var e=z(this,i);p(this,"fp-prev")?ve.m.left&&nt(e):ve.m.right&&tt(e)}function Qt(){ue=!1,te=!1}function Gt(e){Y(e);var t=x(z(this,"#fp-nav li"));Tt(d(i)[t])}function Jt(e){Y(e);var t=d(c,z(this,i))[0];tn(t,d(s,t)[x(z(this,"li"))])}function Zt(e){!d(A.menu)[0]||!A.lockAnchors&&A.anchors.length||(Y(e),et(this.getAttribute("data-menuanchor")))}function en(e){A.autoScrolling&&(fe&&(e.pageY<We&&ve.m.up?Ge():e.pageY>We&&ve.m.down&&Je()),We=e.pageY)}function tn(e,t,o){var r=z(e,i),l={slides:e,destiny:t,direction:o,destinyPos:{left:t.offsetLeft},slideIndex:x(t),section:r,sectionIndex:x(r,i),anchorLink:r.getAttribute("data-anchor"),slidesNav:d(".fp-slidesNav",r)[0],slideAnchor:bn(t),prevSlide:d(".fp-slide.active",r)[0],prevSlideIndex:x(d(".fp-slide.active",r)[0]),localIsResizing:ce};l.xMovement=function(e,t){if(e==t)return"none";if(e>t)return"left";return"right"}(l.prevSlideIndex,l.slideIndex),l.direction=l.direction?l.direction:l.xMovement,l.localIsResizing||(fe=!1),A.onSlideLeave&&!l.localIsResizing&&"none"!==l.xMovement&&F(A.onSlideLeave)&&!1===kt("onSlideLeave",l)?oe=!1:(M(t,n),C(W(t),n),l.localIsResizing||(Pt(l.prevSlide),Nt(t)),!A.loopHorizontal&&A.controlArrows&&(K(d(".fp-controlArrow.fp-prev",r),0!==l.slideIndex),K(d(".fp-controlArrow.fp-next",r),null!=E(t))),p(r,n)&&!l.localIsResizing&&mn(l.slideIndex,l.slideAnchor,l.anchorLink,l.sectionIndex),function(e,t,n){var o=t.destinyPos;if(A.css3){var r="translate3d(-"+Math.round(o.left)+"px, 0px, 0px)";J.test.translate3dH[t.sectionIndex]=r,m(an(d(u,e)),xn(r)),we=setTimeout((function(){n&&nn(t)}),A.scrollingSpeed)}else J.test.left[t.sectionIndex]=Math.round(o.left),On(e,Math.round(o.left),A.scrollingSpeed,(function(){n&&nn(t)}))}(e,l,!0))}function nn(e){var t,o;t=e.slidesNav,o=e.slideIndex,A.slidesNavigation&&null!=t&&(C(d(".active",t),n),M(d("a",d("li",t)[o]),n)),e.localIsResizing||(F(A.afterSlideLoad)&&kt("afterSlideLoad",e),fe=!0,zt(e.destiny)),oe=!1}function on(){clearTimeout(he),he=setTimeout((function(){for(var e=0;e<4;e++)ge=setTimeout(rn,200*e)}),200)}function rn(){if(ln(),re){var e=t.activeElement;if(!X(e,"textarea")&&!X(e,"input")&&!X(e,"select")){var n=h();Math.abs(n-Ye)>20*Math.max(Ye,n)/100&&(ot(!0),Ye=n)}}else ct()}function ln(){var t=A.responsive||A.responsiveWidth,n=A.responsiveHeight,o=t&&e.innerWidth<t,r=n&&e.innerHeight<n;t&&n?it(o||r):t?it(o):n&&it(r)}function an(e){var t="all "+A.scrollingSpeed+"ms "+A.easingcss3;return C(e,"fp-notransition"),m(e,{"-webkit-transition":t,transition:t})}function sn(e){return M(e,"fp-notransition")}function cn(e,t){var o;o=e,d(A.menu).forEach((function(e){A.menu&&null!=e&&(C(d(".active",e),n),M(d('[data-menuanchor="'+o+'"]',e),n))})),function(e,t){A.navigation&&null!=d("#fp-nav")[0]&&(C(d(".active",d("#fp-nav")[0]),n),M(e?d('a[href="#'+e+'"]',d("#fp-nav")[0]):d("a",d("li",d("#fp-nav")[0])[t]),n))}(e,t)}function un(e){var t=x(d(l)[0],i),n=x(e,i);return t==n?"none":t>n?"up":"down"}function fn(e){if(!p(e,"fp-table")){var n=t.createElement("div");n.className="fp-tableCell",n.style.height=dn(e)+"px",M(e,"fp-table"),N(e,n)}}function dn(e){var t=ae;if(A.paddingTop||A.paddingBottom){var n=e;p(n,r)||(n=z(e,i));var o=parseInt(getComputedStyle(n)["padding-top"])+parseInt(getComputedStyle(n)["padding-bottom"]);t=ae-o}return t}function vn(e,t){t?an(le):sn(le),m(le,xn(e)),J.test.translate3d=e,setTimeout((function(){C(le,"fp-notransition")}),10)}function pn(e){var t=d(i+'[data-anchor="'+e+'"]',le)[0];if(!t){var n=void 0!==e?e-1:0;t=d(i)[n]}return t}function hn(e,t){var o=pn(e);if(null!=o){var r=function(e,t){var n=d(s+'[data-anchor="'+e+'"]',t)[0];return null==n&&(e=void 0!==e?e:0,n=d(s,t)[e]),n}(t,o);bn(o)===Z||p(o,n)?gn(r):Tt(o,(function(){gn(r)}))}}function gn(e){null!=e&&tn(z(e,c),e)}function mn(e,t,n,o){var r="";A.anchors.length&&!A.lockAnchors&&(e?(null!=n&&(r=n),null==t&&(t=e),ee=t,wn(r+"/"+t)):null!=e?(ee=t,wn(n)):wn(n)),Sn()}function wn(t){if(A.recordHistory)location.hash=t;else if(re||ie)e.history.replaceState(void 0,void 0,"#"+t);else{var n=e.location.href.split("#")[0];e.location.replace(n+"#"+t)}}function bn(e){if(!e)return null;var t=e.getAttribute("data-anchor"),n=x(e);return null==t&&(t=n),t}function Sn(){var e=d(l)[0],t=d(".fp-slide.active",e)[0],n=bn(e),o=bn(t),r=String(n);t&&(r=r+"-"+o),r=r.replace("/","-").replace("#","");var i=new RegExp("\\b\\s?fp-viewing-[^\\s]+\\b","g");q.className=q.className.replace(i,""),M(q,"fp-viewing-"+r)}function yn(e){var t=[];return t.y=void 0!==e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,t.x=void 0!==e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,ie&&St(e)&&A.scrollBar&&void 0!==e.touches&&(t.y=e.touches[0].pageY,t.x=e.touches[0].pageX),t}function En(e,t){Xe(0,"internal"),void 0!==t&&(ce=!0),tn(z(e,c),e),void 0!==t&&(ce=!1),Xe(Me.scrollingSpeed,"internal")}function Ln(e){var t=Math.round(e);if(A.css3&&A.autoScrolling&&!A.scrollBar)vn("translate3d(0px, -"+t+"px, 0px)",!1);else if(A.autoScrolling&&!A.scrollBar)m(le,{top:-t+"px"}),J.test.top=-t+"px";else{var n=Ct(t);Mn(n.element,n.options)}}function xn(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function An(e,t,n){"all"!==t?ve[n][t]=e:Object.keys(ve[n]).forEach((function(t){ve[n][t]=e}))}function Tn(e,t,n){A[e]=t,"internal"!==n&&(Me[e]=t)}function kn(){var e=A.licenseKey,t="font-size: 15px;background:yellow;";O?e&&e.length<20&&(console.warn("%c This website was made using fullPage.js slider. More info on the following website:",t),console.warn("%c https://alvarotrigo.com/fullPage/",t)):(f("error","Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"),f("error","https://github.com/alvarotrigo/fullPage.js#options.")),p(D,"fp-enabled")?f("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(A.continuousVertical&&(A.loopTop||A.loopBottom)&&(A.continuousVertical=!1,f("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),!A.scrollOverflow||!A.scrollBar&&A.autoScrolling||f("warn","Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),!A.continuousVertical||!A.scrollBar&&A.autoScrolling||(A.continuousVertical=!1,f("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),A.scrollOverflow&&null==A.scrollOverflowHandler&&(A.scrollOverflow=!1,f("error","The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),Ie.forEach((function(e){A[e]&&f("warn","fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: "+e)})),A.anchors.forEach((function(e){var t=[].slice.call(d("[name]")).filter((function(t){return t.getAttribute("name")&&t.getAttribute("name").toLowerCase()==e.toLowerCase()})),n=[].slice.call(d("[id]")).filter((function(t){return t.getAttribute("id")&&t.getAttribute("id").toLowerCase()==e.toLowerCase()}));if(n.length||t.length){f("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");var o=n.length?"id":"name";(n.length||t.length)&&f("error",'"'+e+'" is is being used by another element `'+o+"` property")}})))}function On(t,n,o,r){var i=function(t){return t.self!=e&&p(t,"fp-slides")?t.scrollLeft:!A.autoScrolling||A.scrollBar?V():t.offsetTop}(t),l=n-i,a=0;ke=!0;var s=function(){if(ke){var c=n;a+=20,o&&(c=e.fp_easings[A.easing](a,i,l,o)),Mn(t,c),a<o?setTimeout(s,20):void 0!==r&&r()}else a<o&&r()};s()}function Mn(t,n){!A.autoScrolling||A.scrollBar||t.self!=e&&p(t,"fp-slides")?t.self!=e&&p(t,"fp-slides")?t.scrollLeft=n:t.scrollTo(0,n):t.style.top=n+"px"}function Cn(e,t){this.anchor=e.getAttribute("data-anchor"),this.item=e,this.index=x(e,t),this.isLast=this.index===e.parentElement.querySelectorAll(t).length-1,this.isFirst=!this.index}function Hn(e){Cn.call(this,e,i)}function In(e){Cn.call(this,e,s)}kn()}})),window.jQuery&&window.fullpage&&function(e,t){"use strict";e&&t?e.fn.fullpage=function(n){n=e.extend({},n,{$:e});new t(this[0],n)}:window.fp_utils.showError("error","jQuery is required to use the jQuery fullpage adapter!")}(window.jQuery,window.fullpage)}}]);