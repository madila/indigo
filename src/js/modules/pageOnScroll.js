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
		var r = hex >> 16;
		var g = hex >> 8 & 0xFF;
		var b = hex & 0xFF;
		return [r,g,b];
	};


	rgb2rgba = (r, g, b, alpha = 1) => {
		return `rgba(${r},${g},${b},${alpha})`;
	};


	headerScrollBg = () => {
		const {navBar, headerBgColor, rgb2rgba} = this;

		let docEle = document.documentElement,
			scrolled = (window.pageYOffset || docEle.scrollTop) - (docEle.clientTop || 0),
			_windowHeight = window.innerHeight,
			_threshold = _windowHeight / 2;

		if (scrolled > 10 && scrolled < _threshold) {
			let fadeIn = scrolled / _threshold;
			navBar.style.backgroundColor = rgb2rgba(headerBgColor[0], headerBgColor[1], headerBgColor[2], fadeIn);
			docEle.style.setProperty('--header-text-color', this.headerTextColor);
		} else if (scrolled > _threshold) {
			navBar.style.backgroundColor = rgb2rgba(headerBgColor[0], headerBgColor[1], headerBgColor[2], 1);
			docEle.style.setProperty('--header-text-color', this.headerTextColor);
		} else {
			navBar.style.backgroundColor = rgb2rgba(headerBgColor[0], headerBgColor[1], headerBgColor[2], 0);
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
			.getPropertyValue(property);
	}

	getPosition(element) {
		return window.getComputedStyle(element, null).getPropertyValue("position");
	}

	constructor() {
		let docEle = document.documentElement;
		let {headerScrollBg, bodyScrolled, hexToRgb, getCSSVar, getPosition} = this;
		this.navBar = document.querySelector('.site-header');
		this.footer = document.querySelector('.site-footer');

		const headerHexColor = hexToRgb(getCSSVar('--header-bg-color'));

		this.headerBgColor = hexToRgb(getCSSVar('--header-bg-color'));
		this.headerTextColor = getCSSVar('--header-text-color');
		this.baseTextColor = getCSSVar('--base-color');

		this.isHome = document.body.classList.contains('home');
		this.isHeaderScrollBg = document.body.classList.contains('header-scroll-bg');

		this.isNavBarFixed = (getPosition(document.querySelector('.site-header')) === "fixed");
		this.isFooterFixed = (getPosition(document.querySelector('.site-footer')) === "fixed");

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

new pageOnScroll();
