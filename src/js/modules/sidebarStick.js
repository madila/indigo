import StickySidebar from 'sticky-sidebar';
import ResizeSensor from "css-element-queries";
import {debounce} from 'lodash';

let isPageTemplate = document.querySelector('.page-template-default');

let sidebarElement = document.querySelector('.has-sticky-sidebar #secondary');

if(sidebarElement && !isPageTemplate) {

	let stickySidebar = null;
	let topSpacing = 0;

	if(document.body.className.indexOf('has-fixed-header') > 0) {
		topSpacing = function () {
			return document.querySelector('.site-header').clientHeight;
		};
	}

	if(document.body.className.indexOf('admin-bar') > 0) {
		topSpacing = 50;
	}


	let options = {
		containerSelector: '#primary',
		resizeSensor: true,
		innerWrapperSelector: '.widget-area',
		topSpacing: topSpacing
	};

	function enableStickySidebar() {
		if(window.innerWidth < 769) return false;
		stickySidebar = new StickySidebar('#secondary', options);
	}

	function reCalculateStickySidebar() {
		console.log(stickySidebar);
		if(stickySidebar) {
			if(window.innerWidth > 769) {
				stickySidebar.updateSticky();
			} else {
				stickySidebar.destroy();
			}
		} else {
			enableStickySidebar();
		}
	}



	window.addEventListener('load', enableStickySidebar);
	reCalculateStickySidebar();


	window.addEventListener('resize', debounce(reCalculateStickySidebar, 100));

}
