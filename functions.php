<?php
/**
 * Indigo functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Indigo
 */

require_once "inc/composer.php";


/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function indigo_content_width() {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( 'content_width', 780 );
}
add_action( 'after_setup_theme', 'indigo_content_width', 0 );

function  indigo_get_content_width() {
	global $content_width;
	return $content_width;
}

if ( ! function_exists( 'indigo_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function indigo_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on Indigo, use a find and replace
		 * to change 'indigo' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'indigo', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		if(get_theme_mod('indigo_alignment_support')) {
			add_theme_support( 'align-wide' );
		}

		$font_size = get_theme_mod('base_font_size', 14);

		add_theme_support(
			'editor-font-sizes',
			array(
				array(
					'name'      => __( 'Normal', 'indigo' ),
					'shortName' => __( 'N', 'indigo' ),
					'size'      => $font_size,
					'slug'      => 'normal'
				),
				array(
					'name'      => __( 'Medium', 'indigo' ),
					'shortName' => __( 'M', 'indigo' ),
					'size'      => $font_size * 1.4,
					'slug'      => 'medium'
				),
				array(
					'name'      => __( 'Large', 'indigo' ),
					'shortName' => __( 'L', 'indigo' ),
					'size'      => $font_size * 1.7,
					'slug'      => 'large'
				),
				array(
					'name'      => __( 'Huge', 'indigo' ),
					'shortName' => __( 'H', 'indigo' ),
					'size'      => $font_size * 2,
					'slug'      => 'huge'
				)
			)
		);

		add_theme_support( 'editor-color-palette',
			apply_filters('indigo_color_palette', array(
				array(
					'name' => __( 'black', 'indigo' ),
					'slug' => 'black',
					'color' => '#000000',
				),
				array(
					'name' => __( 'dark grey', 'indigo' ),
					'slug' => 'dark-grey',
					'color' => '#333333',
				),
				array(
					'name' => __( 'grey', 'indigo' ),
					'slug' => 'grey',
					'color' => '#535353',
				),
				array(
					'name' => __( 'light grey', 'indigo' ),
					'slug' => 'light-grey',
					'color' => '#999999',
				),
				array(
					'name' => __( 'off white', 'indigo' ),
					'slug' => 'off-white',
					'color' => '#f6f7f9',
				),
				array(
					'name' => __( 'white', 'indigo' ),
					'slug' => 'white',
					'color' => '#ffffff',
				),
			))
		);


		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );
		set_post_thumbnail_size( indigo_get_content_width(), 9999 );
		add_image_size('hd', 1920, 1080, false);

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
			'site-navigation' => esc_html__( 'Site Navigation', 'indigo' ),
		) );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );


		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		add_theme_support( 'responsive-embeds' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support( 'custom-logo', array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		) );

	}
endif;
add_action( 'after_setup_theme', 'indigo_setup' );


function get_indigo_version() {
	return wp_get_theme('indigo')->get('Version');
}

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function indigo_widgets_init() {
	if(get_theme_mod('indigo_sidebar_alignment') !== 'none') {
		register_sidebar( array(
			'name'          => esc_html__( 'Sidebar', 'indigo' ),
			'id'            => 'entry-sidebar',
			'description'   => esc_html__( 'Can run vertically alongside the page entry or horizontally below it.', 'indigo' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h4 class="widget-title">',
			'after_title'   => '</h4>',
		) );
	}
	if(get_theme_mod('indigo_pre_footer_alignment') !== 'none') {
		register_sidebar(array(
			'name' => esc_html__('Pre-Footer Sidebar', 'indigo'),
			'id' => 'pre-footer',
			'description' => esc_html__('Runs before the site footer and the footer navigation.', 'indigo'),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget' => '</section>',
			'before_title' => '<h4 class="widget-title">',
			'after_title' => '</h4>',
		));
	}
}
add_action( 'widgets_init', 'indigo_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function indigo_scripts() {

	wp_register_script( 'indigo-script', get_template_directory_uri() . '/js/scripts.js', array(), get_indigo_version(), true );

	if(get_template_directory() === get_stylesheet_directory()) {
		wp_enqueue_style( 'indigo-style', get_stylesheet_uri(), array(), get_indigo_version() );
	}

	wp_localize_script('indigo-script', 'indigo', array(
		'assets_url' => get_template_directory_uri().'/js/'
	));

	if( is_post_type_archive('jetpack-portfolio') ) {

		wp_enqueue_style( 'fullpage-style', 'https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.7/fullpage.min.css', array(), get_indigo_version() );
		wp_enqueue_script( 'fullpage-script', 'https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.7/fullpage.min.js', array(), get_indigo_version(), true );
		wp_enqueue_script( 'fullpage-overflow-script', 'https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.7/vendors/scrolloverflow.min.js', array('fullpage-script'), get_indigo_version(), true );

	}

	wp_enqueue_script( 'indigo-script' );


	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'indigo_scripts' );

/**
 * Enqueue block editor style
 */
function indigo_block_editor_styles() {
	wp_enqueue_style( 'indigo-block-editor-styles', get_template_directory_uri().'/block-editor-style.css', false, '1.0', 'screen' );
}
add_action( 'enqueue_block_editor_assets', 'indigo_block_editor_styles' );



/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Oembed functions.
 */
require get_template_directory() . '/inc/oembed.php';


/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

