import "./modules/publicPath";

if(typeof DOMTokenList !== "function" || (!window.requestAnimationFrame) || !('CSS' in window && CSS.supports('color', 'var(--body-color)'))) {
	let promise = Promise.resolve();
	import(
		/* webpackChunkName: "indigo-polyfills" */
		'./modules/polyfills'
		)
}

import "./modules/navigation";
import "./modules/pageOnScroll";

//import "./modules/fixedHeader";
//import "./modules/fullPageInit";

