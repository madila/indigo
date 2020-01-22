/**
 * File customizer.js.
 *
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */

( function( $ ) {

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
			console.log(to);
			$( '.custom-logo-link' ).css( {'max-width': to+'px'} );
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
				.setProperty('--content-gutter-y', to+'px');
		} );
	} );

	// Border Radius
	wp.customize( 'base_border_radius', function( value ) {
		value.bind( function( to ) {
			document.documentElement.style
				.setProperty('--base-border-radius', to+'em');
		} );
	} );

	wp.customize( 'text_color', function( value ) {
		value.bind( function( to ) {
			document.documentElement.style
				.setProperty('--base-color', to);
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

	wp.customize( 'base_font_family', function( value ) {
		value.bind( function( to ) {
			document.documentElement.style
				.setProperty('--base-font-family', to);
		} );
	} );

	wp.customize( 'headings_font_family', function( value ) {
		value.bind( function( to ) {
			document.documentElement.style
				.setProperty('--headings-font-family', to);
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


	// Header text color.
	wp.customize( 'indigo_sr_site_title', function( value ) {
		value.bind( function( to ) {
			if ( to ) {
				$( 'body' ).addClass('sr-only-header');
			} else {
				$( 'body' ).removeClass('sr-only-header');
			}
		} );
	} );




} )( jQuery );
