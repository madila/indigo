import StickySidebar from 'sticky-sidebar-v2';
import {debounce} from 'lodash';

window.stickySidebar = false;

let sidebarElement = document.querySelector('.vertical-sidebar #secondary');

if(sidebarElement) {
	function enableStickySidebar() {
		window.stickySidebar = new StickySidebar('#secondary', {
			containerSelector: '#primary',
			innerWrapperSelector: '.widget-area',
			topSpacing: function () {
				return (document.querySelector('.site-header-center').clientHeight + 20);
			},
			bottomSpacing: 20
		});
	}

	let reCalculateStickySidebar = function () {
		if('stickySidebar' in window) {
			if(window.innerWidth > 769) {
				window.stickySidebar.updateSticky();
			} else {
				window.stickySidebar.destroy();
			}
		} else {
			if(window.innerWidth > 769) {
				enableStickySidebar();
			}
		}
	};

	if (window.innerWidth > 769) {
		window.addEventListener('load', enableStickySidebar);
	}

	window.addEventListener('resize', debounce(reCalculateStickySidebar, 100));

}
