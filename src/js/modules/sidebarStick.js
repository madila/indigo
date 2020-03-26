import StickySidebar from 'sticky-sidebar-v2';
import {debounce} from 'lodash';

window.stickySidebar = false;
window.isPageTemplate = document.querySelector('.page-template-default');

let sidebarElement = document.querySelector('.vertical-sidebar #secondary');

if(sidebarElement && !window.isPageTemplate) {
	function enableStickySidebar() {
		console.log('enabling sticky sidebar');
		window.stickySidebar = new StickySidebar('#secondary', {
			containerSelector: '#primary',
			innerWrapperSelector: '.widget-area',
			topSpacing: function () {
				return (document.querySelector('.site-header').clientHeight + 20);
			},
			bottomSpacing: 0
		});
	}

	function reCalculateStickySidebar() {
		if('stickySidebar' in window && window.stickySidebar) {
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


	if(window.innerWidth > 769) {
		window.addEventListener('load', enableStickySidebar);
		reCalculateStickySidebar();
	}

	window.addEventListener('resize', debounce(reCalculateStickySidebar, 100));

}
