import fullpage from 'fullpage.js';

console.log('loading fullpage...');

let fullPageElement = document.querySelector('.full-page-container');
if(fullPageElement && 'fullPageLicense' in window.indigo) {
	console.log('passed test fullpage...');
	new fullpage(fullPageElement, {
		licenseKey: window.indigo.fullPageLicense,
		sectionSelector: '.wp-block-ampersand-panel-block',
		autoScrolling:false
	});
}

