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

	// Logo Max Width
	wp.customize( 'logo_width', function( value ) {
		value.bind( function( to ) {
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
	wp.customize( 'header_textcolor', function( value ) {
		value.bind( function( to ) {
			console.log(to);
			if ( 'blank' === to ) {
				$( 'body' ).addClass('sr-only-header');
			} else {
				$( 'body' ).removeClass('sr-only-header');
			}
			document.documentElement.style
				.setProperty('--header-text-color', to);
		} );
	} );

} )( jQuery );
