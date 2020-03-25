import "./modules/publicPath";

if(typeof DOMTokenList !== "function" || (!window.requestAnimationFrame) || !('CSS' in window && CSS.supports('color', 'var(--body-color)'))) {
	let promise = Promise.resolve();
	import(
		/* webpackChunkName: "indigo-polyfills" */
		'./modules/polyfills'
		)
}


window.addEventListener('load', function() {
	let main = document.querySelector('.page-content');
	if(main && main.hasChildNodes()) {
		let firstChild = main.childNodes[0];
		console.log(firstChild);

	}
});

import "./modules/navigation";
import "./modules/pageOnScroll";
import "./modules/sidebarStick";

//import "./modules/fixedHeader";
//import "./modules/fullPageInit";

