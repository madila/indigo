import onScrolling from './onScrolling';
import {debounce} from 'lodash';


window.addEventListener('load', function() {
	window.requestAnimationFrame(function() {
		document.documentElement.classList.remove('site-loading');
	});
});



class pageOnScroll {

	/**
	 * hexToRgb
	 * @param  string  hex  Hexadicimal value
	 * @return number       Color of selected chanel Red, Green or Blue
	 * @usage  //alert( hexToRgb("#0033ff").g ); // "51";
	 * @usage  //alert( hexToRgb("0033ff").g );  // "51";
	 */
	hexToRgb = (hex) => {
		// Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
		let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
		hex = hex.replace(shorthandRegex, function(m, r, g, b) {
			return r + r + g + g + b + b;
		});

		let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result ? {
			r: parseInt(result[1], 16),
			g: parseInt(result[2], 16),
			b: parseInt(result[3], 16)
		} : null;
	};


	rgb2rgba = (r, g, b, alpha = 1) => {
		return `rgba(${r},${g},${b},${alpha})`;
	};

	doHeader = (fade, headerColor) => {
		const {headerBgElements, headerBgColor, rgb2rgba} = this;
		if (headerBgElements) {
			headerBgElements.style.backgroundColor = rgb2rgba(headerBgColor.r, headerBgColor.g, headerBgColor.b, fade);
		}
		document.documentElement.style.setProperty('--header-text-color', this.headerTextColor);
	};


	headerScrollBg = () => {
		if(this.isHeaderScrollBg) {
			const {headerBgElements, headerBgColor, rgb2rgba, doHeader} = this;

			let docEle = document.documentElement,
				scrolled = (window.pageYOffset || docEle.scrollTop) - (docEle.clientTop || 0),
				_windowHeight = window.innerHeight,
				_threshold = _windowHeight / 2,
				fade = 0,
				headerColour = this.headerTextColor;

			if (scrolled > 25 && scrolled < _threshold) {
				fade = scrolled / _threshold;
			} else if (scrolled >= _threshold) {
				fade = 1;
			} else {
				headerColour = (this.isHeaderScrollBg) ? this.baseTextColor : this.headerTextColor;
			}

			doHeader(fade, headerColour);

		}
	};

	bodyScrolled = (windowScrolled) => {
		console.log(windowScrolled);
		let {reCalculateHeader} = this,
			doc = document.documentElement,
			_windowHeight = window.innerHeight,
			_scrolling_threshold = ('indigo' in window) ? window.indigo.scrolling_offset : 19,
			_threshold = _windowHeight,
			header = 50;

		if(this.fixedBrandingWrapper ) {
			header = this.fixedBrandingWrapper.offsetHeight;
		}

		if(windowScrolled > _scrolling_threshold && windowScrolled < _threshold) {
			doc.classList.add('scrolling');
			if(doc.classList.contains('scrolled')) {
				doc.classList.remove('scrolled');
			}
		}

		if(windowScrolled >= (_threshold + header)) {
			if(doc.classList.contains('scrolling')) {
				doc.classList.remove('scrolling');
			}
			doc.classList.add('scrolled');
		}

		if(windowScrolled <= _scrolling_threshold) {
			if(doc.classList.contains('scrolling')) {
				doc.classList.remove('scrolling');
			}
			if(doc.classList.contains('scrolled')) {
				doc.classList.remove('scrolled');
			}
		}
	};

	reCalculateHeader = () => {
		let self = this;
		if(self.fixedBrandingWrapper ) {
			window.requestAnimationFrame(function() {
				let newHeight = self.fixedBrandingWrapper.offsetHeight+'px';
				document.documentElement.style.setProperty('--header-height', newHeight);
			})
		}
	};

	initialHeaderHeight = () => {
		let self = this;
		if(self.fixedBrandingWrapper ) {
			let newHeight = self.fixedBrandingWrapper.offsetHeight+'px';
			document.documentElement.style.setProperty('--initial-header-height', newHeight);
		}
	};


	getCSSVar(property) {
		return getComputedStyle(document.documentElement)
			.getPropertyValue(property).trim();
	}

	getPosition(element) {
		return window.getComputedStyle(element, null).getPropertyValue("position");
	}

	constructor() {
		let docEle = document.documentElement;
		let {headerScrollBg, reCalculateHeader, initialHeaderHeight, bodyScrolled, hexToRgb, getCSSVar, getPosition} = this;
		this.archiveTitle = document.querySelector('.archive-title');
		this.fixedHeader = document.querySelector('.has-fixed-header');
		//this.fixedBrandingWrapper = document.querySelector('.has-fixed-header.indigo-calculate-header .site-header-wrapping');
		this.headerOverlaysContent = document.querySelector('.indigo-header-overlays');

		this.fixedBrandingWrapper = document.querySelector('.site-header-wrapping');

		this.navBar = document.querySelector('.site-header');
		this.footer = document.querySelector('.site-footer');

		this.headerBgElements = document.querySelector('[data-header-bg]');

		this.hasCoverTitle = document.querySelector('.indigo-calculate-header article.has-cover-title');

		this.headerBgColor = hexToRgb(getCSSVar('--header-bg-color'));
		this.headerTextColor = getCSSVar('--header-text-color');

		this.baseTextColor = getCSSVar('--base-color');

		this.isContainedHeader = document.body.classList.contains('has-header-contained');
		this.isHome = document.body.classList.contains('home');
		this.isHeaderScrollBg = document.body.classList.contains('header-scroll-bg');

		this.isNavBarFixed = document.body.classList.contains('has-fixed-header');

		if(this.isHeaderScrollBg) {
			docEle.style.setProperty('--header-text-color', this.headerTextColor);
		}

		bodyScrolled();
		headerScrollBg();
		onScrolling(function () {
			let windowScrolled = (window.pageYOffset || docEle.scrollTop) - (docEle.clientTop || 0);
			bodyScrolled(windowScrolled);
			headerScrollBg();
		});

		if(this.fixedBrandingWrapper || this.headerOverlaysContent) {

			window.addEventListener("load", function() {
				reCalculateHeader();
				initialHeaderHeight();
			});

			let logo = document.querySelector('.custom-logo');
			if(logo) {
				logo.addEventListener('load', function() {
					reCalculateHeader();
					initialHeaderHeight();
				});
			}
			window.addEventListener('resize', debounce(reCalculateHeader, 10));
			window.addEventListener('resize', debounce(initialHeaderHeight, 100));
			window.addEventListener('indigoCustomizerUpdate', reCalculateHeader);

			const transition = document.querySelector('.custom-logo-link');
			if(transition) {
				let self = this;
				transition.addEventListener('transitionend', () => {
					self.reCalculateHeader();
					window.dispatchEvent(new Event('resize'));
				});
			}
		}

	}

}

window.addEventListener('DOMContentLoaded', function() {
	new pageOnScroll();
});
