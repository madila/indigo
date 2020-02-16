import onScrolling from './onScrolling';
import {debounce} from 'lodash';


document.addEventListener('DOMContentLoaded', function() {

	let fixedBrandingWrapper = document.querySelector('.has-fixed-header.header-overlay-content .site-header-wrapper');

	function reCalculateHeader() {
		if(fixedBrandingWrapper) {
			window.requestAnimationFrame(function() {
				fixedBrandingWrapper.style.height = document.querySelector('.site-header').clientHeight+'px';
			});
		}
	}

	reCalculateHeader();
	window.addEventListener('resize', debounce(reCalculateHeader, 100));
	window.addEventListener("load", reCalculateHeader);

	let logo = document.querySelector('.custom-logo');
	if(logo) {
		logo.addEventListener('load', reCalculateHeader);
	}

}, false);
