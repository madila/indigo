<?php

/**
 * TMP functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package TMP
 */

if ( ! function_exists( 'indigo_child_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function indigo_child_setup() {
		add_theme_support(
			'__experimental-editor-gradient-presets',
			array(
				array(
					'name'     => __( 'White Stripes', 'indigo' ),
					'gradient' => 'repeating-linear-gradient(45deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 10%, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0) 20%, rgb(255, 255, 255) 20%, rgb(255, 255, 255) 30%, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0) 40%)',
					'slug'     => 'white-stripes'
				),
				array(
					'name'     => __( 'Narrow White Label', 'indigo' ),
					'gradient' => 'repeating-linear-gradient(45deg, rgba(0, 0, 0, 0) 0%, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 10%, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0) 20%, rgb(255, 255, 255) 20%, rgb(255, 255, 255) 30%, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0) 40%)',
					'slug'     => 'white-stripes-label'
				),
				array(
					'name'     => __( 'Black Stripes', 'indigo' ),
					'gradient' => 'repeating-linear-gradient(45deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 10%, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0) 20%, rgb(0, 0, 0) 20%, rgb(0, 0, 0) 30%, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 40%)',
					'slug'     => 'black-stripes'
				),
				array(
					'name'     => __( 'Narrow Black Label', 'indigo' ),
					'gradient' => 'repeating-linear-gradient(45deg, rgba(0, 0, 0, 0) 0%, rgb(3, 3, 3) 0%, rgb(0, 0, 0) 10%, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0) 20%, rgb(0, 0, 0) 20%, rgb(0, 0, 0) 30%, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 40%)',
					'slug'     => 'black-stripes-label'
				),
				array(
					'name'     => __( 'Gram', 'indigo' ),
					'gradient' => 'linear-gradient(45deg, #FF0080, #FF8C00, #40E0D0)',
					'slug'     => 'gram'
				),
				array(
					'name'     => __( 'Peach', 'indigo' ),
					'gradient' => 'linear-gradient(to right, #ee0979, #ff6a00)',
					'slug'     => 'peach'
				),
			)
		);

	}
endif;
add_action( 'after_setup_theme', 'sad_setup' );

function get_indigo_child_version() {
	return wp_get_theme('indigo-child')->get('Version');
}

add_action( 'wp_enqueue_scripts', 'indigo_child_enqueue_styles' );
function indigo_child_enqueue_styles() {

	if(!is_admin()) :
		wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css', array(), get_indigo_child_version() );
		wp_enqueue_style( 'child-style', get_stylesheet_uri(), array(), get_indigo_child_version() );
	endif;

}

/**
 * Add support for custom color palettes in Gutenberg.
 */
function indigo_child_color_palette($palette)
{
	return array(
		array(
			'name' => __( 'dark green', 'indigo' ),
			'slug' => 'dark-green',
			'color' => '#374f47',
		),
		array(
			'name' => __( 'pale azure', 'indigo' ),
			'slug' => 'pale-azure',
			'color' => '#6c7c93',
		),
		array(
			'name' => __( 'wine red', 'indigo' ),
			'slug' => 'wine-red',
			'color' => '#bd3854',
		),
		array(
			'name' => __( 'deep red', 'indigo' ),
			'slug' => 'deep-red',
			'color' => '#44141f',
		),
		array(
			'name' => __( 'solid light grey', 'indigo' ),
			'slug' => 'solid-light-grey',
			'color' => '#f2f2f2',
		),
		array(
			'name' => __( 'solid dark grey', 'indigo' ),
			'slug' => 'solid-dark-grey',
			'color' => '#656565',
		),
		array(
			'name' => __( 'semi translucid black', 'indigo' ),
			'slug' => 'semi-translucid-black',
			'color' => 'rgba(0,0,0,0.6)',
		),
		array(
			'name' => __( 'translucid black', 'indigo' ),
			'slug' => 'translucid-black',
			'color' => 'rgba(0,0,0,0.3)',
		),
		array(
			'name' => __( 'semi translucid white', 'indigo' ),
			'slug' => 'semi-translucid-white',
			'color' => 'rgba(255,255,255,0.6)',
		),
		array(
			'name' => __( 'translucid white', 'indigo' ),
			'slug' => 'translucid-white',
			'color' => 'rgba(255,255,255,0.3)',
		),
		array(
			'name' => __( 'solid black', 'indigo' ),
			'slug' => 'solid-black',
			'color' => '#232323',
		),
	);
}

add_filter('indigo_color_palette', 'indigo_child_color_palette');
