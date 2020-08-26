/**
 * File customizer.js.
 *
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */

( function( $ ) {


	// Create a new event
	let event = new CustomEvent('indigoCustomizerUpdate');

	function triggerUpdateEvent() {
		// Dispatch the event
		window.dispatchEvent(event);
		console.log('update dispatched');
	}

	// Site title and description.
	wp.customize( 'blogname', function( value ) {
		value.bind( function( to ) {
			$( '.site-title a' ).text( to );
		} );
	} );
	wp.customize( 'blogdescription', function( value ) {
		value.bind( function( to ) {
			$( '.site-description' ).text( to );
		} );
	} );

	console.log(wp);

	// Logo Max Width
	wp.customize( 'logo_width', function( value ) {
		value.bind( function( to ) {
			document.documentElement.style
				.setProperty('--logo-width', to+'px');
		} );
	} );

	// Content Width
	wp.customize( 'content_width', function( value ) {
		value.bind( function( to ) {
			document.documentElement.style
				.setProperty('--content-width', to+'px');
		} );
	} );

	// Content Width
	wp.customize( 'sidebar_width', function( value ) {
		value.bind( function( to ) {
			document.documentElement.style
				.setProperty('--sidebar-width', to+'px');
		} );
	} );

	// Content Gutter X
	wp.customize( 'indigo_content_gutter_x', function( value ) {
		value.bind( function( to ) {
			document.documentElement.style
				.setProperty('--content-gutter-x', to+'rem');
		} );
	} );

	// Content Gutter Y
	wp.customize( 'indigo_content_gutter_y', function( value ) {
		value.bind( function( to ) {
			document.documentElement.style
				.setProperty('--content-gutter-y', to+'rem');
		} );
	} );


	wp.customize( 'indigo_header_padding_y', function( value ) {
		value.bind( function( to ) {
			document.documentElement.style
				.setProperty('--header-padding-y', to+'rem');
			triggerUpdateEvent();
		} );
	} );


	wp.customize( 'indigo_header_padding_x', function( value ) {
		value.bind( function( to ) {
			document.documentElement.style
				.setProperty('--header-padding-x', to+'rem');
		} );
	} );

	// Border Radius
	wp.customize( 'base_border_radius', function( value ) {
		value.bind( function( to ) {
			document.documentElement.style
				.setProperty('--base-border-radius', to+'em');
		} );
	} );

	wp.customize( 'indigo_text_color', function( value ) {
		value.bind( function( to ) {
			document.documentElement.style
				.setProperty('--base-color', to);
		} );
	} );

	wp.customize( 'base_letter_spacing', function( value ) {
		value.bind( function( to ) {
			document.documentElement.style
				.setProperty('--base-letter-spacing', to+'em');
		} );
	} );

	wp.customize( 'background_color', function( value ) {
		value.bind( function( to ) {
			document.documentElement.style
				.setProperty('--base-bg-color', to);
		} );
	} );

	wp.customize( 'header_textcolor', function( value ) {
		value.bind( function( to ) {
			document.documentElement.style
				.setProperty('--header-text-color', to);
		} );
	} );

	wp.customize( 'primary_color', function( value ) {
		value.bind( function( to ) {
			document.documentElement.style
				.setProperty('--primary-color', to);
		} );
	} );

	wp.customize( 'base_font_size', function( value ) {
		value.bind( function( to ) {
			document.documentElement.style
				.setProperty('--base-font-size', to+'px');
		} );
	} );

	wp.customize( 'nav_font_size', function( value ) {
		value.bind( function( to ) {
			console.log(to);
			document.documentElement.style
				.setProperty('--nav-font-size', to+'px');
		} );
	} );

	wp.customize( 'mobile_font_size', function( value ) {
		value.bind( function( to ) {
			document.documentElement.style
				.setProperty('--mobile-font-size', to+'px');
		} );
	} );

	wp.customize( 'indigo_archive_alignment', function( value ) {
		value.bind( function( to ) {
			let feed = document.querySelector('feed-container');
			if(feed) {
				feed.classList.remove(['feed-full', 'feed-contained', 'feed-wide']);
				feed.classList.add('feed-'+to);
			}
		} );
	} );

	wp.customize( 'base_line_height', function( value ) {
		value.bind( function( to ) {
			document.documentElement.style
				.setProperty('--base-line-height', to);
		} );
	} );


	wp.customize( 'headings_line_height', function( value ) {
		value.bind( function( to ) {
			document.documentElement.style
				.setProperty('--headings-line-height', to);
		} );
	} );

	wp.customize( 'base_font_family', function( value ) {
		value.bind( function( to ) {
			document.documentElement.style
				.setProperty('--base-font-family', to);
		} );
	} );

	wp.customize( 'base_font_weight', function( value ) {
		value.bind( function( to ) {
			document.documentElement.style
				.setProperty('--base-font-weight', to);
		} );
	} );


	wp.customize( 'headings_font_family', function( value ) {
		value.bind( function( to ) {
			document.documentElement.style
				.setProperty('--headings-font-family', to);
		} );
	} );

	wp.customize( 'headings_font_weight', function( value ) {
		value.bind( function( to ) {
			document.documentElement.style
				.setProperty('--headings-font-weight', to);
		} );
	} );


	wp.customize( 'nav_font_family', function( value ) {
		value.bind( function( to ) {
			document.documentElement.style
				.setProperty('--nav-font-family', to);
		} );
	} );


	wp.customize( 'nav_font_weight', function( value ) {
		value.bind( function( to ) {
			document.documentElement.style
				.setProperty('--nav-font-weight', to);
		} );
	} );


	// Header text color.
	wp.customize( 'header_bg_color', function( value ) {
		value.bind( function( to ) {
			document.documentElement.style
				.setProperty('--header-bg-color', to);
		} );
	} );

	// Header text color.
	wp.customize( 'header_textcolor', function( value ) {
		value.bind( function( to ) {
			document.documentElement.style
				.setProperty('--header-text-color', to);
		} );
	} );


	// Header title sr-only.
	wp.customize( 'indigo_sr_site_title', function( value ) {
		value.bind( function( to ) {
			if ( to ) {
				$( 'body' ).addClass('sr-only-title');
			} else {
				$( 'body' ).removeClass('sr-only-title');
			}
		} );
	} );

	// Header desc sr-only.
	wp.customize( 'indigo_sr_site_desc', function( value ) {
		value.bind( function( to ) {
			if ( to ) {
				$( 'body' ).addClass('sr-only-desc');
			} else {
				$( 'body' ).removeClass('sr-only-desc');
			}
		} );
	} );




} )( jQuery );
