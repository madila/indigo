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

	if(get_theme_mod('indigo_overlay_header')) {
		$classes[] = 'has-fixed-header';
	}

	if(get_theme_mod('indigo_calculate_header')) {
		$classes[] = 'indigo-calculate-header';
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
	$sidebar_direction = get_theme_mod('indigo_sidebar_direction');
	if($sidebar_direction && $sidebar_direction === 'vertical' ) {
		$classes[] = 'vertical-sidebar';
	}

	if($sidebar_direction && $sidebar_direction !== 'none' ) {
		$classes[] = 'sidebar-'.(get_theme_mod('indigo_sidebar_alignment') ? get_theme_mod('indigo_sidebar_alignment') : get_theme_mod_default('indigo_sidebar_alignment'));
	} else {
		$classes[] = 'no-sidebar';
	}

	return $classes;
}
add_filter( 'body_class', 'indigo_body_classes' );


function indigo_add_default_font() {
		?>
		<style>
			@supports (font-variation-settings: normal) {
				:root {
					--base-font-family: 'Inter var', sans-serif;
					--headings-font-family: 'Inter var', sans-serif;
				}
				@font-face {
					font-family: 'Inter var';
					font-weight: 100 900;
					font-display: swap;
					font-style: normal;
					font-named-instance: 'Regular';
					src: url(<?php echo get_template_directory_uri()."/webfonts/Inter-roman.var.woff2?v=3.12"; ?>) format("woff2");
				}
				@font-face {
					font-family: 'Inter var';
					font-weight: 100 900;
					font-display: swap;
					font-style: italic;
					font-named-instance: 'Italic';
					src: url(<?php echo get_template_directory_uri()."/webfonts/Inter-italic.var.woff2?v=3.12" ?>) format("woff2");
				}
			}
		</style>
		<?php
}

if(empty(get_theme_mod('base_font_family')) || get_theme_mod('base_font_family') === 'Inter var') {

	add_action('wp_head', 'indigo_add_default_font');
	add_action('admin_head', 'indigo_add_default_font');
}

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

function indigo_has_cover_title() {
	global $post;
	if ( is_singular() || has_blocks() ) {
		$blocks = parse_blocks( $post->post_content );
		return ($blocks[0]['blockName'] === 'core/cover' );
	}
}

function indigo_post_class($classes) {
	if(indigo_has_cover_title()) {
		$classes[] = 'has-cover-title';
	}
	 return $classes;
}
add_filter('post_class', 'indigo_post_class');

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
add_filter('archive_cover_columns', 'archive_columns_class');

function indigo_conditional_class($theme_mod, $class, $classes = '', $add_value_to_class = true) {
	$new_class = [$classes];
	if($mod_value = get_theme_mod($theme_mod)) {
		$value = $class;
		if($add_value_to_class) {
			$value .= '-' . $mod_value;
		}
		$new_class[] = $value;
	}
	echo implode(' ', $new_class);
}
