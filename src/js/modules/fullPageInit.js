import fullpage from 'fullpage.js';
import scrollOverflow from 'fullpage.js/vendors/scrolloverflow';

let fullPageElement = document.querySelector('.full-page-container');
if(fullPageElement && 'fullPageLicense' in window.indigo) {

	let fullPageConfig = {
		licenseKey: window.indigo.fullPageLicense,
		sectionSelector: '.wp-block-ampersand-panel-block',
	};

	let childConfig = {};

	if('indigo' in window && 'fullPageOptions' in window.indigo) {
		childConfig = window.indigo.fullPageOptions;
	}

	if('fullPageOptions' in window) {
		childConfig = window.fullPageOptions;
	}

	console.log(childConfig);

	const options = Object.assign(fullPageConfig, childConfig);

	console.log(options);


	let event = new Event('fullpage_init');

	// Dispatch the event.
	document.dispatchEvent(event);

	new fullpage(fullPageElement, options);

}

