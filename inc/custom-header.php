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

function get_theme_mod_defaults() {
	return apply_filters('indigo_theme_mod_defaults', array(
		'content_width' => '1200',
		'header_textcolor' => (get_theme_mod('text_color')) ? get_theme_mod('text_color') : '#fff',
		'primary_color' => '#4b0082',
		'secondary_color' => '#000',
		'text_color' => '#000',
		'header_bg_color' => '#000'
	));
}

function get_theme_mod_default($key) {
	$defaults = get_theme_mod_defaults();
	return (array_key_exists($key, $defaults)) ? $defaults[$key] : false;
}

function indigo_set_theme_mod_css_var($option_id, $variable_name = null) {
	if(get_theme_mod($option_id)) { ?>
		--<?php echo ($variable_name) ? $variable_name : $option_id; ?>: <?php echo get_theme_mod($option_id); ?>;
	<?php }
}

function indigo_set_color_mod_css_var($option_id, $variable_name = null) {
	if(get_theme_mod($option_id) && get_theme_mod($option_id) !== 'blank') { ?>
		--<?php echo ($variable_name) ? $variable_name : $option_id; ?>: <?php echo maybe_hash_hex_color(get_theme_mod($option_id)); ?>;
	<?php } else { ?>
		--<?php echo ($variable_name) ? $variable_name : $option_id; ?>: <?php echo maybe_hash_hex_color(get_theme_mod_default($option_id)); ?>;
	<?php }
}

function indigo_set_font_family_mod_css_var($option_id, $variable_name = null) {
	if(get_theme_mod($option_id)) { ?>
		--<?php echo ($variable_name) ? $variable_name : $option_id; ?>: <?php echo add_default_font_stack(get_theme_mod($option_id)); ?>;
	<?php }
}

function add_default_font_stack($fontFamily) {
	$default_fonts = apply_filters('indigo_default_font_stack', array(
		$fontFamily,
		'-apple-system',
		'BlinkMacSystemFont',
		'Segoe UI',
		'Roboto',
		'Helvetica Neue',
		'Arial',
		'sans-serif',
		'Apple Color Emoji',
		'Segoe UI Emoji',
		'Segoe UI Symbol'
	));
	return implode(',', $default_fonts);
}

add_action('admin_head', 'indigo_header_style');

if ( ! function_exists( 'indigo_header_style' ) ) :
	/**
	 * Styles the header image and text displayed on the blog.
	 *
	 * @see indigo_custom_header_setup().
	 */
	function indigo_header_style() {

		// If we get this far, we have custom styles. Let's do this.
		?>
		<style type="text/css" id="indigo-header-css">
			<?php

			// Custom Logo Width
			if(has_custom_logo() && get_theme_mod('logo_width')) { ?>
				.custom-logo-link {
					max-width: <?php echo get_theme_mod('logo_width'); ?>;
				}
			<?php }
			?>

			:root {
				<?php indigo_set_theme_mod_css_var('content_width', 'content-width'); ?>
				<?php indigo_set_color_mod_css_var('text_color', 'base-color'); ?>
				<?php indigo_set_color_mod_css_var('header_bg_color', 'header-bg-color'); ?>
				<?php indigo_set_color_mod_css_var('primary_color', 'primary-color'); ?>
				<?php indigo_set_color_mod_css_var('secondary_color', 'secondary-color'); ?>
				<?php indigo_set_theme_mod_css_var('base_border_radius', 'base-border-radius'); ?>
				<?php indigo_set_color_mod_css_var('header_textcolor', 'header-text-color'); ?>
				<?php indigo_set_font_family_mod_css_var('base_font_family', 'base-font-family'); ?>
				<?php indigo_set_theme_mod_css_var('base_font_size', 'base-font-size'); ?>
				<?php indigo_set_font_family_mod_css_var('headings_font_family', 'headings-font-family'); ?>
				<?php indigo_set_theme_mod_css_var('headings_font_weight', 'headings-font-weight'); ?>
				<?php indigo_set_theme_mod_css_var('base_font_weight', 'base-font-weight'); ?>
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

add_action( 'admin_head', 'indigo_custom_background_cb' );
