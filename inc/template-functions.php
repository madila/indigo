<?php
/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package Indigo
 */

/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function indigo_body_classes( $classes ) {
	// Adds a class of hfeed to non-singular pages.
	if ( ! is_singular() ) {
		$classes[] = 'hfeed';
	}

	if(intval(get_theme_mod('header_bg_on_scroll'))) {
		$classes[] = 'header-scroll-bg';
	}

	$classes[] = 'indigo-'.indigo_get_theme_style();

	if(get_theme_mod('indigo_overlay_header')) {
		$classes[] = 'has-fixed-header';
	}

	if(intval(get_theme_mod('indigo_contain_header'))) {
		$classes[] = 'has-header-contained';
	}

	if(intval(get_theme_mod('indigo_alignment_support'))) {
		$classes[] = 'wp-alignment-support';
	}

	if(intval(get_theme_mod('indigo_sr_site_title'))) {
		$classes[] = 'sr-only-title';
	}

	if(intval(get_theme_mod('indigo_sr_site_desc'))) {
		$classes[] = 'sr-only-desc';
	}


	// Adds a class of no-sidebar when there is no sidebar present.
	if ( is_active_sidebar( 'entry-sidebar' ) && get_theme_mod('indigo_sidebar_alignment') !== 'none' ) {
		$classes[] = 'vertical-sidebar';
		$classes[] = 'sidebar-'.(get_theme_mod('indigo_sidebar_alignment') ? get_theme_mod('indigo_sidebar_alignment') : get_theme_mod_default('indigo_sidebar_alignment'));
	} else {
		$classes[] = 'no-sidebar';
	}

	return $classes;
}
add_filter( 'body_class', 'indigo_body_classes' );


add_filter('indigo_header_class', function($classes) {
	$header_alignment = get_theme_mod('indigo_header_alignment');
	$header_alignment = ($header_alignment) ? $header_alignment : get_theme_mod_default('indigo_header_alignment');
	$classes[] = 'site-header-'.$header_alignment;
	return $classes;
});

function indigo_header_class() {
	$classes = apply_filters('indigo_header_class', ['site-header']);
	echo ' class="'.implode(' ', $classes).'" ';
}

/**
 * Add a pingback url auto-discovery header for single posts, pages, or attachments.
 */
function indigo_pingback_header() {
	if ( is_singular() && pings_open() ) {
		printf( '<link rel="pingback" href="%s">', esc_url( get_bloginfo( 'pingback_url' ) ) );
	}
}
add_action( 'wp_head', 'indigo_pingback_header' );


function display_site_title_class($classes) {
	if(get_theme_mod('indigo_sr_site_title')) {
		$classes[] = 'sr-only-title';
	}
	if(get_theme_mod('indigo_sr_site_desc')) {
		$classes[] = 'sr-only-desc';
	}
	return $classes;
}

add_filter('body_class', 'display_site_title_class');


function archive_columns_class($classes) {
	if(is_post_type_archive(array('jetpack-portfolio', 'case-study'))) {
		$classes[] = 'section-cover-size-'.apply_filters('archive_cover_columns', '1');
	}
	return $classes;
}

add_filter('post_class', 'archive_columns_class');


function archive_cover_columns() {
	return '2';
}

add_filter('archive_cover_columns', 'archive_cover_columns');


function indigo_conditional_class($theme_mod, $prefix, $add_value, $classes) {
	if($value = get_theme_mod($theme_mod)) {
		$value = $prefix;
		if($add_value) {
			$value .= '-' . get_theme_mod( $theme_mod );
		}
		$classes[] = $value;
	}
	echo implode(' ', $classes);
}
