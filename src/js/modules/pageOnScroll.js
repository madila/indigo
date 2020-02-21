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


	headerScrollBg = () => {
		if(this.isHeaderScrollBg) {
			const {headerBgElements, headerBgColor, rgb2rgba} = this;

			let docEle = document.documentElement,
				scrolled = (window.pageYOffset || docEle.scrollTop) - (docEle.clientTop || 0),
				_windowHeight = window.innerHeight,
				_threshold = _windowHeight / 2;

			if (scrolled > 10 && scrolled < _threshold) {
				let fadeIn = scrolled / _threshold;
				if (headerBgElements) {
					headerBgElements.style.backgroundColor = rgb2rgba(headerBgColor.r, headerBgColor.g, headerBgColor.b, fadeIn);
				}
				docEle.style.setProperty('--header-text-color', this.headerTextColor);
			} else if (scrolled > _threshold) {
				if (headerBgElements) {
					headerBgElements.style.backgroundColor = rgb2rgba(headerBgColor.r, headerBgColor.g, headerBgColor.b, 1);
				}
				docEle.style.setProperty('--header-text-color', this.headerTextColor);
			} else {
				if (headerBgElements) {
					headerBgElements.style.backgroundColor = rgb2rgba(headerBgColor.r, headerBgColor.g, headerBgColor.b, 0);
				}
				docEle.style.setProperty('--header-text-color', this.baseTextColor);
			}
		}
	};

	bodyScrolled = () => {
		let doc = document.documentElement,
			scrolled = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0),
			_windowHeight = window.innerHeight,
			_threshold = _windowHeight / 2;

		if (scrolled > 10 && scrolled < _threshold) {
			document.documentElement.classList.add('scrolling');
			document.documentElement.classList.remove('scrolled');
		} else if (scrolled > _threshold) {
			document.documentElement.classList.remove('scrolling');
			document.documentElement.classList.add('scrolled');
		} else {
			document.documentElement.classList.remove('scrolling');
		}
	};

	reCalculateHeader = () => {
		let self = this;
		if(self.fixedBrandingWrapper) {
			window.requestAnimationFrame(function() {
				document.querySelector('.site-header').style.height = self.fixedBrandingWrapper.offsetHeight+'px';
			})
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
		let {headerScrollBg, reCalculateHeader, bodyScrolled, hexToRgb, getCSSVar, getPosition} = this;
		this.fixedBrandingWrapper = document.querySelector('.has-fixed-header.header-overlay-content .site-header-wrapping');

		this.navBar = document.querySelector('.site-header');
		this.footer = document.querySelector('.site-footer');

		this.headerBgElements = document.querySelector('[data-header-bg]');

		this.headerBgColor = hexToRgb(getCSSVar('--header-bg-color'));
		this.headerTextColor = getCSSVar('--header-text-color');

		this.baseTextColor = getCSSVar('--base-color');

		this.isContainedHeader = document.body.classList.contains('has-header-contained');
		this.isHome = document.body.classList.contains('home');
		this.isHeaderScrollBg = document.body.classList.contains('header-scroll-bg');

		this.isNavBarFixed = document.body.classList.contains('has-fixed-header');

		if(this.isHeaderScrollBg) {
			docEle.style.setProperty('--header-text-color', this.baseTextColor);
		}

		bodyScrolled();
		reCalculateHeader();
		headerScrollBg();
		onScrolling(function () {
			bodyScrolled();
			headerScrollBg();
		});

		window.addEventListener("load", function() {
			reCalculateHeader();
		});

		let logo = document.querySelector('.custom-logo');
		if(logo) {
			logo.addEventListener('load', function() {
					reCalculateHeader();
			});
		}

		window.addEventListener('resize', debounce(reCalculateHeader, 100));

	}

}

window.addEventListener('DOMContentLoaded', function() {
	new pageOnScroll();
});
