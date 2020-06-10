import "./modules/publicPath";

if(typeof DOMTokenList !== "function" || (!window.requestAnimationFrame) || !('CSS' in window && 'supports' in CSS && CSS.supports('color', 'var(--body-color)'))) {
	let promise = Promise.resolve();
	import(
		/* webpackChunkName: "indigo-polyfills" */
		'./modules/polyfills'
		)
}

document.addEventListener('DOMContentLoaded', function() {
	let fullPageElement = document.querySelector('.full-page-container');
	if(fullPageElement && 'fullPageLicense' in window.indigo) {
		import(
			/* webpackChunkName: "indigo-fullpage" */
			'./modules/fullPageInit'
			);
	}

});


import "./modules/navigation";
import "./modules/pageOnScroll";

document.addEventListener('DOMContentLoaded', function() {
	let stickSidebarElement = document.querySelector('.vertical-sidebar #secondary');
	if(stickSidebarElement) {
		import(
			/* webpackChunkName: "indigo-sidebarStick" */
			'./modules/sidebarStick'
			);
	}

});

//import "./modules/fixedHeader";
//import "./modules/fullPageInit";

