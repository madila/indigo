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

	if(intval(get_theme_mod('header_bg_on_scroll'))) {
		$classes[] = 'header-scroll-bg';
	}

	if(get_theme_mod('indigo_overlay_header')) {
		$classes[] = 'has-fixed-header';
	}

	if(get_theme_mod('indigo_calculate_header') ) {
		$classes[] = 'indigo-calculate-header';
	} else {
		$classes[] = 'indigo-header-overlays';
	}

	if(is_home() || is_archive()) {
		$classes[] = 'indigo-archive-'.get_theme_mod('archive_item_display_in');
		$classes[] = 'indigo-archive-'.get_theme_mod('archive_item_display_as');
		$archive_columns = get_theme_mod('indigo_archive_columns');
		if($archive_columns > 0) {
			$classes[] = 'indigo-archive-cols-'.$archive_columns;

		}
	}


	if(intval(get_theme_mod('indigo_contain_header', true))) {
		$classes[] = 'has-header-contained';
	}

	if(intval(get_theme_mod('indigo_sr_site_title'))) {
		$classes[] = 'sr-only-title';
	}

	if(intval(get_theme_mod('indigo_sr_site_desc'))) {
		$classes[] = 'sr-only-desc';
	}

	$show_on_page = get_theme_mod('indigo_sidebar_direction');
	// Adds a class of no-sidebar when there is no sidebar present.
	$sidebar_direction = get_theme_mod('indigo_sidebar_direction');
	if($sidebar_direction && $sidebar_direction === 'vertical' ) {
		$classes[] = 'vertical-sidebar';
	}

	if(!indigo_show_sidebar_on_pages() && $sidebar_direction && $sidebar_direction !== 'none' ) {
		$classes[] = 'sidebar-'.(get_theme_mod('indigo_sidebar_alignment') ? get_theme_mod('indigo_sidebar_alignment') : get_theme_mod_default('indigo_sidebar_alignment'));
	} else {
		if(intval(get_theme_mod('indigo_alignment_support'))) {
			$classes[] = 'wp-alignment-support';
		}
		$classes[] = 'no-sidebar';
	}

	return $classes;
}
add_filter( 'body_class', 'indigo_body_classes' );

function indigo_show_sidebar_on_pages() {
	return is_page() && get_theme_mod('indigo_content_sidebar_on_pages', true);
}

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
		return (count($blocks) > 0 && $blocks[0]['blockName'] === 'core/cover' );
	}
}

function indigo_post_class($classes) {
	if(indigo_has_cover_title() || is_front_page()) {
		$classes[] = 'has-cover-title';
	} else {
		$classes[] = 'has-no-cover-title';
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

function archive_cover_columns_value() {
	return '2';
}
add_filter('archive_cover_columns', 'archive_cover_columns_value');

function indigo_conditional_class($theme_mod, $class, $classes = '', $add_value_to_class = true) {
	$new_class = [$classes];
	if($mod_value = get_theme_mod($theme_mod)) {
		$value = $class;
		if($add_value_to_class) {
			$value .= $mod_value;
		}
		$new_class[] = $value;
	}
	echo implode(' ', $new_class);
}

function indigo_new_excerpt_more($more) {
	return '...';
}
add_filter('excerpt_more', 'indigo_new_excerpt_more');


function indigo_remove_tax_name($title, $sep, $seplocation)
{
	if (is_tax()) {
		$term_title = single_term_title('', false);

		// Determines position of separator
		if ('right' == $seplocation) {
			$title = $term_title . " $sep ";
		} else {
			$title = " $sep " . $term_title;
		}
	}

	return $title;
}
add_filter( 'wp_title', 'indigo_remove_tax_name', 10, 3 );


add_filter( 'get_the_archive_title', 'indigo_archive_title');
function indigo_archive_title($title) {
	if ( is_category() ) {
		$title = single_cat_title( '', false );
	} elseif ( is_tag() ) {
		$title = single_tag_title( '', false );
	} elseif ( is_author() ) {
		$title = '<span class="vcard">' . get_the_author() . '</span>' ;
	} elseif ( is_tax() ) { //for custom post types
		$title = sprintf( __( '%1$s' ), single_term_title( '', false ) );
	} elseif (is_post_type_archive()) {
		$title = post_type_archive_title( '', false );
	}
	return $title;
}


function get_page_content_for_archive() {
	$page = false;
	$post_type = get_post_type();
	if ( $post_type )
	{
		$post_type_data = get_post_type_object( $post_type );
		if(property_exists($post_type_data, 'has_archive') && $post_type_data->has_archive) {
			$post_type_slug = $post_type_data->has_archive;
			$page = get_page_by_path( $post_type_slug );
		}
	}
	return $page;
}
