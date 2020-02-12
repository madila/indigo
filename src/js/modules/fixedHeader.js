import onScrolling from './onScrolling';
import {debounce} from 'lodash';


document.addEventListener('DOMContentLoaded', function() {

	let fixedBrandingWrapper = document.querySelector('.site-header-wrapper');

	function reCalculateHeader() {
		if(fixedBrandingWrapper) {
			fixedBrandingWrapper.style.height = document.querySelector('.site-header').clientHeight+'px';
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
