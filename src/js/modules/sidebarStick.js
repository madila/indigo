import ResizeSensor from 'css-element-queries';
import StickySidebar from 'sticky-sidebar-v2';

function enableSidebarStick() {
	if(window.innerWidth > 769) {
		let sidebar = document.querySelector('#secondary');
		if(sidebar) {
			new StickySidebar('#secondary', {
				containerSelector: '#primary',
				innerWrapperSelector: '.widget-area',
				topSpacing: function() {
					return (document.querySelector('.site-header-center').clientHeight + 20);
				},
				resizeSensor: true,
				bottomSpacing: 20
			});
		}
	}
}

window.addEventListener('load', function() {
	if(window.innerWidth > 769) {
		enableSidebarStick();
	}
});
