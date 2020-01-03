import onScrolling from './onScrolling';

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

		console.log(hex);

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
		const {headerBgElements, headerBgColor, rgb2rgba} = this;

		console.log(headerBgElements);

		let docEle = document.documentElement,
			scrolled = (window.pageYOffset || docEle.scrollTop) - (docEle.clientTop || 0),
			_windowHeight = window.innerHeight,
			_threshold = _windowHeight / 2;

		if (scrolled > 10 && scrolled < _threshold) {
			let fadeIn = scrolled / _threshold;
			if(headerBgElements) {
				headerBgElements.style.backgroundColor = rgb2rgba(headerBgColor.r, headerBgColor.g, headerBgColor.b, fadeIn);
			}
			docEle.style.setProperty('--header-text-color', this.headerTextColor);
		} else if (scrolled > _threshold) {
			if(headerBgElements) {
				headerBgElements.style.backgroundColor = rgb2rgba(headerBgColor.r, headerBgColor.g, headerBgColor.b, 1);
			}
			docEle.style.setProperty('--header-text-color', this.headerTextColor);
		} else {
			if(headerBgElements) {
				headerBgElements.style.backgroundColor = rgb2rgba(headerBgColor.r, headerBgColor.g, headerBgColor.b, 0);
			}
			docEle.style.setProperty('--header-text-color', this.baseTextColor);
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

	getCSSVar(property) {
		return getComputedStyle(document.documentElement)
			.getPropertyValue(property).trim();
	}

	getPosition(element) {
		return window.getComputedStyle(element, null).getPropertyValue("position");
	}

	setHeaderBgColor() {
		let { hexToRgb, getCSSVar } = this;
		this.headerBgColor = hexToRgb(getCSSVar('--header-bg-color'));
	}

	constructor() {
		let docEle = document.documentElement;
		let {headerScrollBg, bodyScrolled, hexToRgb, getCSSVar, getPosition} = this;
		this.navBar = document.querySelector('.site-header');
		this.footer = document.querySelector('.site-footer');

		this.headerBgElements = document.querySelector('[data-header-bg]');
		this.footerBgElements = document.querySelector('[data-footer-bg]');

		this.setHeaderBgColor();
		this.headerTextColor = getCSSVar('--header-text-color');
		this.baseTextColor = getCSSVar('--base-color');

		this.isContainedHeader = document.body.classList.contains('has-header-contained');
		this.isHome = document.body.classList.contains('home');
		this.isHeaderScrollBg = document.body.classList.contains('header-scroll-bg');

		this.isNavBarFixed = (getPosition(this.navBar) === "fixed");
		this.isFooterFixed = (getPosition(this.footer) === "fixed");

		if(this.isNavBarFixed) {
			docEle.classList.add('has-fixed-header');
		}

		if(this.isFooterFixed && this.isHome) {
			docEle.classList.add('has-fixed-footer');
		}

		bodyScrolled();
		onScrolling(function () {
			bodyScrolled();
		});

		if(this.isHeaderScrollBg) {
			docEle.style.setProperty('--header-text-color', this.baseTextColor);
			headerScrollBg();
			onScrolling(function () {
				headerScrollBg();
			});
		}

	}

}

window.addEventListener('load', function() {
	new pageOnScroll();
});
