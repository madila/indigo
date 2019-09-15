import onScrolling from './onScrolling';

class AnimateHeader {

	animateHeader = () => {
		const {navBar, footer} = this;

		let doc = document.documentElement,
			scrolled = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0),
			_windowHeight = window.innerHeight,
			_threshold = _windowHeight / 2;

		if (scrolled > 10 && scrolled < _threshold) {
			let fadeIn = scrolled / _threshold;
			navBar.style.backgroundColor = 'rgba(0,0,0,'+fadeIn+')';
			footer.style.backgroundColor = 'rgba(0,0,0,'+fadeIn+')';
			document.documentElement.classList.add('scrolling');
			document.documentElement.classList.remove('scrolled');
		} else if (scrolled > _threshold) {
			navBar.style.backgroundColor = 'rgba(0,0,0,1)';
			footer.style.backgroundColor = 'rgba(0,0,0,1)';
			document.documentElement.classList.remove('scrolling');
			document.documentElement.classList.add('scrolled');
		} else {
			document.documentElement.classList.remove('scrolling');
			navBar.style.backgroundColor = 'rgba(0,0,0,0)';
			footer.style.backgroundColor = 'rgba(0,0,0,0)';
		}
	};

	getPosition(element) {
		return window.getComputedStyle(element, null).getPropertyValue("position");
	}

	constructor() {
		let {animateHeader} = this;
		this.navBar = document.querySelector('.site-header');
		this.footer = document.querySelector('.site-footer');

		this.isHome = document.body.classList.contains('home');

		this.isNavBarFixed = (this.getPosition(document.querySelector('.site-header')) === "fixed");
		this.isFooterFixed = (this.getPosition(document.querySelector('.site-footer')) === "fixed");

		if(this.isNavBarFixed) {
			document.documentElement.classList.add('has-fixed-header');
		}

		if(this.isFooterFixed && this.isHome) {
			document.documentElement.classList.add('has-fixed-footer');
		}

		if(this.isNavBarFixed || this.isFooterFixed) {
			animateHeader();
			onScrolling(function () {
				animateHeader();
			});
		}

	}

}

new AnimateHeader();
