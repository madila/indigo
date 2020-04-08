import debounce from "lodash/debounce";

/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
( function() {

	let container, button, menu, submenu, links, i, len;

	button = document.querySelector( '.menu-toggle' );

	if ( 'undefined' === typeof button || 'undefined' === button.dataset.target ) {
		return;
	}

	container = document.getElementById(button.dataset.target);
	if ( ! container ) {
		return;
	}

	menu = container.getElementsByTagName( 'ul' )[0];

	// Hide menu toggle button if menu is empty and return early.
	if ( 'undefined' === typeof menu ) {
		button.style.display = 'none';
		return;
	}

	menu.setAttribute( 'aria-expanded', 'false' );
	if ( -1 === menu.className.indexOf( 'nav-menu' ) ) {
		menu.className += ' nav-menu';
	}

	window.addEventListener('resize', debounce(function() {
		if(window.innerWidth < 768) return;

		let body = document.body;
		if(-1!== body.className.indexOf('toggled')) {
			body.className = body.className.replace(' menu-toggled', '');
			button.setAttribute('aria-expanded', 'false');
			menu.setAttribute('aria-expanded', 'false');
		}

	}, 100));

	button.onclick = function() {
		let body = document.body;
		if ( -1 !== body.className.indexOf( 'toggled' ) ) {
			body.className = body.className.replace( ' menu-toggled', '' );
			button.setAttribute( 'aria-expanded', 'false' );
			menu.setAttribute( 'aria-expanded', 'false' );
		} else {
			body.className += ' menu-toggled';
			button.setAttribute( 'aria-expanded', 'true' );
			menu.setAttribute( 'aria-expanded', 'true' );
		}
	};

	// Get all the link elements within the menu.
	links = menu.getElementsByTagName( 'a' );

	// Each time a menu link is focused or blurred, toggle focus.
	for ( i = 0, len = links.length; i < len; i++ ) {
		links[i].addEventListener( 'focus', toggleFocus, true );
		links[i].addEventListener( 'blur', toggleFocus, true );
	}

	/**
	 * Sets or removes .focus class on an element.
	 */
	function toggleFocus() {
		let self = this;

		// Move up through the ancestors of the current link until we hit .nav-menu.
		while ( -1 === self.className.indexOf( 'nav-menu' ) ) {

			// On li elements toggle the class .focus.
			if ( 'li' === self.tagName.toLowerCase() ) {
				if ( -1 !== self.className.indexOf( 'focus' ) ) {
					self.className = self.className.replace( ' focus', '' );
				} else {
					self.className += ' focus';
				}
			}

			self = self.parentElement;
		}
	}

	/**
	 * Toggles `focus` class to allow submenu access on tablets.
	 */
	( function( container ) {
		let touchStartFn, i,
			parentLink = container.querySelectorAll( '.menu-item-has-children > a, .page_item_has_children > a' );

		if ( 'ontouchstart' in window ) {
			touchStartFn = function( e ) {
				let menuItem = this.parentNode, i;

				if ( ! menuItem.classList.contains( 'focus' ) ) {
					e.preventDefault();
					for ( i = 0; i < menuItem.parentNode.children.length; ++i ) {
						if ( menuItem === menuItem.parentNode.children[i] ) {
							continue;
						}
						menuItem.parentNode.children[i].classList.remove( 'focus' );
					}
					menuItem.classList.add( 'focus' );
				} else {
					menuItem.classList.remove( 'focus' );
				}
			};

			for ( i = 0; i < parentLink.length; ++i ) {
				parentLink[i].addEventListener( 'touchstart', touchStartFn, false );
			}
		}
	}( container ) );


} )();


/**
 *
 * Handles the first click on mobile for dropdowns.
 */
( function() {

	let currentMenu, menuTrigger, menuItems, i, len;

	menuItems = document.querySelectorAll( '.menu-item-has-children' );

	console.log(menuItems);

	if ( menuItems.length === 0 ) {
		return;
	}

	for ( i = 0, len = menuItems.length; i < len; i++ ) {
		let currentMenu, menuTrigger;

		currentMenu = menuItems[i];
		console.log(currentMenu);

		 console.log(typeof currentMenu.children[0]);

		 if(currentMenu.children[0].tagName !== 'a' || 'undefined' === currentMenu.children[0].href) {
		 	return;
		 }
	}

} )();
