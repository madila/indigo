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

	// Header text color.
	wp.customize( 'header_textcolor', function( value ) {
		value.bind( function( to ) {
			if ( 'blank' === to ) {
				$( '.site-title, .site-description' ).css( {
					'clip': 'rect(1px, 1px, 1px, 1px)',
					'position': 'absolute'
				} );
			} else {
				$( '.site-title, .site-description' ).css( {
					'clip': 'auto',
					'position': 'relative'
				} );
				document.documentElement.style
					.setProperty('--base-color', to);
			}
		} );
	} );
} )( jQuery );
