(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{301:function(t,e,i){"use strict";i.r(e);
/**
 * Sticky Sidebar v2 JavaScript Plugin.
 * @version 1.0.1
 * @author Øystein Blixhavn <oystein@blixhavn.no>
 * @license The MIT License (MIT)
 */
const s=(()=>{const t=".stickySidebar",e={topSpacing:0,bottomSpacing:0,containerSelector:!1,scrollContainer:!1,innerWrapperSelector:".inner-wrapper-sticky",stickyClass:"is-affixed",resizeSensor:!0,minWidth:!1};class i{constructor(t,s={}){if(this.options=i.extend(e,s),this.sidebar="string"==typeof t?document.querySelector(t):t,void 0===this.sidebar)throw new Error("There is no specific sidebar element.");this.sidebarInner=!1,this.container=this.sidebar.parentElement,this.affixedType="STATIC",this.direction="down",this.support={transform:!1,transform3d:!1},this._initialized=!1,this._reStyle=!1,this._breakpoint=!1,this.dimensions={translateY:0,maxTranslateY:0,topSpacing:0,lastTopSpacing:0,bottomSpacing:0,lastBottomSpacing:0,sidebarHeight:0,sidebarWidth:0,containerTop:0,containerHeight:0,viewportHeight:0,viewportTop:0,lastViewportTop:0},["handleEvent"].forEach(t=>{this[t]=this[t].bind(this)}),this.initialize()}initialize(){if(this._setSupportFeatures(),this.options.innerWrapperSelector&&(this.sidebarInner=this.sidebar.querySelector(this.options.innerWrapperSelector),null===this.sidebarInner&&(this.sidebarInner=!1)),!this.sidebarInner){let t=document.createElement("div");for(t.setAttribute("class","inner-wrapper-sticky"),this.sidebar.appendChild(t);this.sidebar.firstChild!=t;)t.appendChild(this.sidebar.firstChild);this.sidebarInner=this.sidebar.querySelector(".inner-wrapper-sticky")}if(this.options.containerSelector){let t=document.querySelectorAll(this.options.containerSelector);if(t=Array.prototype.slice.call(t),t.forEach((t,e)=>{t.contains(this.sidebar)&&(this.container=t)}),!t.length)throw new Error("The container does not contains on the sidebar.")}this.scrollContainer=this.options.scrollContainer?document.querySelector(this.options.scrollContainer):void 0,"function"!=typeof this.options.topSpacing&&(this.options.topSpacing=parseInt(this.options.topSpacing)||0),"function"!=typeof this.options.bottomSpacing&&(this.options.bottomSpacing=parseInt(this.options.bottomSpacing)||0),this._widthBreakpoint(),this.calcDimensions(),this.stickyPosition(),this.bindEvents(),this._initialized=!0}bindEvents(){this.eventTarget=this.scrollContainer?this.scrollContainer:window,this.eventTarget.addEventListener("resize",this,{passive:!0,capture:!1}),this.eventTarget.addEventListener("scroll",this,{passive:!0,capture:!1}),this.sidebar.addEventListener("update"+t,this),this.options.resizeSensor&&"undefined"!=typeof ResizeSensor&&(new ResizeSensor(this.sidebarInner,this.handleEvent),new ResizeSensor(this.container,this.handleEvent))}handleEvent(t){this.updateSticky(t)}calcDimensions(){if(!this._breakpoint){var t=this.dimensions;t.containerTop=i.offsetRelative(this.container).top,t.containerHeight=this.container.clientHeight,t.containerBottom=t.containerTop+t.containerHeight,t.sidebarHeight=this.sidebarInner.offsetHeight,t.sidebarWidth=this.sidebarInner.offsetWidth,t.viewportHeight=window.innerHeight,t.maxTranslateY=t.containerHeight-t.sidebarHeight,this._calcDimensionsWithScroll()}}_calcDimensionsWithScroll(){var t=this.dimensions;t.sidebarLeft=i.offsetRelative(this.sidebar).left,this.scrollContainer?(t.viewportTop=this.scrollContainer.scrollTop,t.viewportLeft=this.scrollContainer.scrollLeft):(t.viewportTop=document.documentElement.scrollTop||document.body.scrollTop,t.viewportLeft=document.documentElement.scrollLeft||document.body.scrollLeft),t.viewportBottom=t.viewportTop+t.viewportHeight,t.topSpacing=this.options.topSpacing,t.bottomSpacing=this.options.bottomSpacing,"function"==typeof t.topSpacing&&(t.topSpacing=parseInt(t.topSpacing(this.sidebar))||0),"function"==typeof t.bottomSpacing&&(t.bottomSpacing=parseInt(t.bottomSpacing(this.sidebar))||0),"VIEWPORT-TOP"===this.affixedType?t.topSpacing<t.lastTopSpacing&&(t.translateY+=t.lastTopSpacing-t.topSpacing,this._reStyle=!0):"VIEWPORT-BOTTOM"===this.affixedType&&t.bottomSpacing<t.lastBottomSpacing&&(t.translateY+=t.lastBottomSpacing-t.bottomSpacing,this._reStyle=!0),t.lastTopSpacing=t.topSpacing,t.lastBottomSpacing=t.bottomSpacing}isSidebarFitsViewport(){let t=this.dimensions,e="down"===this.scrollDirection?t.lastBottomSpacing:t.lastTopSpacing;return this.dimensions.sidebarHeight+e<this.dimensions.viewportHeight}observeScrollDir(){var t=this.dimensions;if(t.lastViewportTop!==t.viewportTop){var e="down"===this.direction?Math.min:Math.max;t.viewportTop===e(t.viewportTop,t.lastViewportTop)&&(this.direction="down"===this.direction?"up":"down")}}getAffixType(){this._calcDimensionsWithScroll();var t=this.dimensions,e=t.viewportTop+t.topSpacing,i=this.affixedType;return e<=t.containerTop||t.containerHeight<=t.sidebarHeight?(t.translateY=0,i="STATIC"):i="up"===this.direction?this._getAffixTypeScrollingUp():this._getAffixTypeScrollingDown(),t.translateY=Math.max(0,t.translateY),t.translateY=Math.min(t.containerHeight,t.translateY),t.translateY=Math.round(t.translateY),t.lastViewportTop=t.viewportTop,i}_getAffixTypeScrollingDown(){var t=this.dimensions,e=t.sidebarHeight+t.containerTop,i=t.viewportTop+t.topSpacing,s=t.viewportBottom-t.bottomSpacing,n=this.affixedType;return this.isSidebarFitsViewport()?t.sidebarHeight+i>=t.containerBottom?(t.translateY=t.containerBottom-e,n="CONTAINER-BOTTOM"):i>=t.containerTop&&(t.translateY=i-t.containerTop,n="VIEWPORT-TOP"):t.containerBottom<=s?(t.translateY=t.containerBottom-e,n="CONTAINER-BOTTOM"):e+t.translateY<=s?(t.translateY=s-e,n="VIEWPORT-BOTTOM"):t.containerTop+t.translateY<=i&&0!==t.translateY&&t.maxTranslateY!==t.translateY&&(n="VIEWPORT-UNBOTTOM"),n}_getAffixTypeScrollingUp(){var t=this.dimensions,e=t.sidebarHeight+t.containerTop,i=t.viewportTop+t.topSpacing,s=t.viewportBottom-t.bottomSpacing,n=this.affixedType;return i<=t.translateY+t.containerTop?(t.translateY=i-t.containerTop,n="VIEWPORT-TOP"):t.containerBottom<=s?(t.translateY=t.containerBottom-e,n="CONTAINER-BOTTOM"):this.isSidebarFitsViewport()||t.containerTop<=i&&0!==t.translateY&&t.maxTranslateY!==t.translateY&&(n="VIEWPORT-UNBOTTOM"),n}_getStyle(t){if(void 0!==t){var e={inner:{},outer:{}},s=this.dimensions;switch(t){case"VIEWPORT-TOP":e.inner={position:"fixed",top:s.topSpacing,left:s.sidebarLeft-s.viewportLeft,width:s.sidebarWidth};break;case"VIEWPORT-BOTTOM":e.inner={position:"fixed",top:"auto",left:s.sidebarLeft,bottom:s.bottomSpacing,width:s.sidebarWidth};break;case"CONTAINER-BOTTOM":case"VIEWPORT-UNBOTTOM":let t=this._getTranslate(0,s.translateY+"px");e.inner=t?{transform:t}:{position:"absolute",top:s.translateY,width:s.sidebarWidth}}switch(t){case"VIEWPORT-TOP":case"VIEWPORT-BOTTOM":case"VIEWPORT-UNBOTTOM":case"CONTAINER-BOTTOM":e.outer={height:s.sidebarHeight,position:"relative"}}return e.outer=i.extend({height:"",position:""},e.outer),e.inner=i.extend({position:"relative",top:"",left:"",bottom:"",width:"",transform:""},e.inner),e}}stickyPosition(e){if(!this._breakpoint){e=this._reStyle||e||!1;this.options.topSpacing,this.options.bottomSpacing;var s=this.getAffixType(),n=this._getStyle(s);if((this.affixedType!=s||e)&&s){let e="affix."+s.toLowerCase().replace("viewport-","")+t;i.eventTrigger(this.sidebar,e),"STATIC"===s?i.removeClass(this.sidebar,this.options.stickyClass):i.addClass(this.sidebar,this.options.stickyClass);for(let t in n.outer){let e="number"==typeof n.outer[t]?"px":"";this.sidebar.style[t]=n.outer[t]+e}for(let t in n.inner){let e="number"==typeof n.inner[t]?"px":"";this.sidebarInner.style[t]=n.inner[t]+e}let o="affixed."+s.toLowerCase().replace("viewport-","")+t;i.eventTrigger(this.sidebar,o)}else this._initialized&&(this.sidebarInner.style.left=n.inner.left);this.affixedType=s}}_widthBreakpoint(){window.innerWidth<=this.options.minWidth?(this._breakpoint=!0,this.affixedType="STATIC",this.sidebar.removeAttribute("style"),i.removeClass(this.sidebar,this.options.stickyClass),this.sidebarInner.removeAttribute("style")):this._breakpoint=!1}updateSticky(t={}){this._running||(this._running=!0,(t=>{requestAnimationFrame(()=>{switch(t){case"scroll":this._calcDimensionsWithScroll(),this.observeScrollDir(),this.stickyPosition();break;case"resize":default:this._widthBreakpoint(),this.calcDimensions(),this.stickyPosition(!0)}this._running=!1})})(t.type))}_setSupportFeatures(){var t=this.support;t.transform=i.supportTransform(),t.transform3d=i.supportTransform(!0)}_getTranslate(t=0,e=0,i=0){return this.support.transform3d?"translate3d("+t+", "+e+", "+i+")":!!this.support.translate&&"translate("+t+", "+e+")"}destroy(){window.removeEventListener("resize",this,{capture:!1}),window.removeEventListener("scroll",this,{capture:!1}),this.sidebar.classList.remove(this.options.stickyClass),this.sidebar.style.minHeight="",this.sidebar.removeEventListener("update"+t,this);var e={inner:{},outer:{}};e.inner={position:"",top:"",left:"",bottom:"",width:"",transform:""},e.outer={height:"",position:""};for(let t in e.outer)this.sidebar.style[t]=e.outer[t];for(let t in e.inner)this.sidebarInner.style[t]=e.inner[t];this.options.resizeSensor&&"undefined"!=typeof ResizeSensor&&(ResizeSensor.detach(this.sidebarInner,this.handleEvent),ResizeSensor.detach(this.container,this.handleEvent))}static supportTransform(t){var e=!1,i=t?"perspective":"transform",s=i.charAt(0).toUpperCase()+i.slice(1),n=document.createElement("support").style;return(i+" "+["Webkit","Moz","O","ms"].join(s+" ")+s).split(" ").forEach((function(t,i){if(void 0!==n[t])return e=t,!1})),e}static eventTrigger(t,e,i){try{var s=new CustomEvent(e,{detail:i})}catch(t){(s=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,i)}t.dispatchEvent(s)}static extend(t,e){var i={};for(let s in t)void 0!==e[s]?i[s]=e[s]:i[s]=t[s];return i}static offsetRelative(t){var e={left:0,top:0};do{let i=t.offsetTop,s=t.offsetLeft;isNaN(i)||(e.top+=i),isNaN(s)||(e.left+=s),t="BODY"===t.tagName?t.parentElement:t.offsetParent}while(t);return e}static addClass(t,e){i.hasClass(t,e)||(t.classList?t.classList.add(e):t.className+=" "+e)}static removeClass(t,e){i.hasClass(t,e)&&(t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," "))}static hasClass(t,e){return t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className)}static get defaults(){return e}}return i})();var n=s;window.StickySidebar=s;var o=i(73);if(window.stickySidebar=!1,window.isPageTemplate=document.querySelector(".page-template-default"),document.querySelector(".vertical-sidebar #secondary")&&!window.isPageTemplate){function r(){console.log("enabling sticky sidebar"),window.stickySidebar=new n("#secondary",{containerSelector:"#primary",innerWrapperSelector:".widget-area",topSpacing:function(){return document.querySelector(".site-header").clientHeight},bottomSpacing:0})}function a(){"stickySidebar"in window&&window.stickySidebar?window.innerWidth>769?window.stickySidebar.updateSticky():window.stickySidebar.destroy():window.innerWidth>769&&r()}window.innerWidth>769&&(window.addEventListener("load",r),a()),window.addEventListener("resize",Object(o.debounce)(a,100))}}}]);