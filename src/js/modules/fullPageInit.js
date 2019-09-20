document.addEventListener('DOMContentLoaded', function() {
	let fullPageElement = document.getElementById('full-page');
	console.log(fullPageElement);
	if(fullPageElement && 'fullPageLicense' in window.indigo && 'fullpage' in window) {
		new fullpage(fullPageElement, {
			//options here
			licenseKey: '',
			autoScrolling:false,
			scrollHorizontally: true
		});
	}
});
