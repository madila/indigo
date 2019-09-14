<?php
/**
 * Sample implementation of the Custom Header feature
 *
 * You can add an optional custom header image to header.php like so ...
 *
 * <?php the_header_image_tag(); ?>
 *
 * @link https://developer.wordpress.org/themes/functionality/custom-headers/
 *
 * @package Indigo
 */

/**
 * Set up the WordPress core custom header feature.
 *
 * @uses indigo_header_style()
 */
function indigo_custom_header_setup() {
	add_theme_support( 'custom-header', apply_filters( 'indigo_custom_header_args', array(
		'default-image'      => '',
		'default-text-color' => '000000',
		'width'              => 1000,
		'height'             => 250,
		'flex-height'        => true,
		'wp-head-callback'   => 'indigo_header_style',
	) ) );
}

add_action( 'after_setup_theme', 'indigo_custom_header_setup' );

function indigo_set_theme_mod_css_var($option_id, $variable_name = null) {
	if(get_theme_mod($option_id)) { ?>
		--<?php echo ($variable_name) ? $variable_name : $option_id; ?>: <?php echo get_theme_mod($option_id); ?>;
	<?php }
}

function indigo_set_color_mod_css_var($option_id, $variable_name = null) {
	if(get_theme_mod($option_id)) { ?>
		--<?php echo ($variable_name) ? $variable_name : $option_id; ?>: <?php echo maybe_hash_hex_color(get_theme_mod($option_id)); ?>;
	<?php }
}

if ( ! function_exists( 'indigo_header_style' ) ) :
	/**
	 * Styles the header image and text displayed on the blog.
	 *
	 * @see indigo_custom_header_setup().
	 */
	function indigo_header_style() {
		$header_text_color = get_header_textcolor();

		/*
		 * If no custom options for text are set, let's bail.
		 * get_header_textcolor() options: Any hex value, 'blank' to hide text. Default: add_theme_support( 'custom-header' ).
		 */
		if ( get_theme_support( 'custom-header', 'default-text-color' ) === $header_text_color ) {
			return;
		}

		// If we get this far, we have custom styles. Let's do this.
		?>
		<style type="text/css" id="indigo-header-css">
			<?php

			// Custom Logo Width
			if(has_custom_logo() && get_theme_mod('logo_width')) { ?>
				.custom-logo-link {
					width: <?php echo get_theme_mod('logo_width'); ?>
				}
			<?php }
			?>

			:root {
				<?php indigo_set_theme_mod_css_var('content_width', 'content-width'); ?>
				<?php indigo_set_color_mod_css_var('text_color', 'base-color'); ?>
				<?php indigo_set_color_mod_css_var('primary_color', 'primary-color'); ?>
				<?php indigo_set_color_mod_css_var('secondary_color', 'secondary-color'); ?>
				<?php indigo_set_theme_mod_css_var('base_border_radius', 'base-border-radius'); ?>
				<?php indigo_set_color_mod_css_var('header_textcolor', 'header-text-color'); ?>
			}

		</style>
		<?php
	}
endif;


add_filter('indigo_custom_background_args', 'add_indigo_custom_background_cb');

function add_indigo_custom_background_cb($args) {
	$args['wp-head-callback'] = 'indigo_custom_background_cb';
	return $args;
}

function indigo_custom_background_cb($args) {
	$bg_color = sanitize_hex_color_no_hash(get_theme_mod('background_color'));
	if(!empty($bg_color)) { ?>
		<style id="custom-background-css">
			:root {
				--base-bg-color: #<?php echo $bg_color; ?>;
			}
		</style>
	<?php }
}
