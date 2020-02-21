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
		'background_color' => '#f6f7f9',
		'text_color' => '#333',
		'content_width' => '960',
		'content_width_wide' => '1060',
		'logo_width' => '200px',

		'header_bg_color' => 'linear-gradient(45deg, #7154d8, #3d2986)',
		'header_textcolor' => '#ffffff',
		'indigo_header_alignment' => 'center',


		'primary_color' => '#4b0082',
		'primary_text_color' => '#4b0082',
		'secondary_color' => '',
		'secondary_text_color' => '',

		'sidebar_width' => 0,
		'base_border_radius' => 0,

		'base_font_size' => '16px',
		'base_font_weight' => '300',
		'bold_font_weight' => '600',
		'base_line_height' => '1.3em',
		'headings_font_weight' => '600',
		'indigo_sidebar_alignment' => 'bottom',
		'indigo_content_gutter_x' => '1rem',
		'indigo_content_gutter_y' => '1rem',

		'indigo_header_padding_y' => '1rem',
		'indigo_header_padding_x' => '1rem',
	));
}


function get_theme_mod_default($key) {
	$defaults = get_theme_mod_defaults();
	return (array_key_exists($key, $defaults)) ? get_theme_mod($key, $defaults[$key]) : false;
}

function indigo_set_theme_mod_css_var($option_id, $variable_name = null) {
	if(get_theme_mod($option_id)) { ?>
		--<?php echo ($variable_name) ? $variable_name : $option_id; ?>: <?php echo get_theme_mod($option_id); ?>;
	<?php } else { ?>
		--<?php echo ($variable_name) ? $variable_name : $option_id; ?>: <?php echo get_theme_mod_default($option_id); ?>;
	<?php }
}

function indigo_set_unit_css_var($unit, $option_id, $variable_name = null) {
	if(get_theme_mod($option_id)) { ?>
		--<?php echo ($variable_name) ? $variable_name : $option_id; ?>: <?php echo intval(get_theme_mod($option_id)); ?><?php echo $unit; ?>;
	<?php } else { ?>
		--<?php echo ($variable_name) ? $variable_name : $option_id; ?>: <?php echo intval(get_theme_mod_default($option_id)); ?><?php echo $unit; ?>
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
					max-width: <?php echo get_theme_mod('logo_width').'px'; ?>;
				}
			<?php }
			?>

			:root {
				<?php
				indigo_set_unit_css_var('px', 'logo_width', 'logo-width');
				if(!get_theme_mod('indigo_full_width_content')) {
					indigo_set_unit_css_var('px', 'content_width', 'content-width');
					indigo_set_unit_css_var('px', 'content_width_wide', 'content-width-wide');
				} else {
					echo '--content-width: 100%';
					echo '--content-width-wide: 100%';
				}
				?>
				<?php indigo_set_unit_css_var('px', 'sidebar_width', 'sidebar-width'); ?>
				<?php indigo_set_color_mod_css_var('text_color', 'base-color'); ?>
				<?php indigo_set_color_mod_css_var('background_color', 'base-bg-color'); ?>
				<?php indigo_set_color_mod_css_var('header_bg_color', 'header-bg-color'); ?>
				<?php indigo_set_color_mod_css_var('primary_color', 'primary-color'); ?>
				<?php indigo_set_color_mod_css_var('primary_text_color', 'primary-text-color'); ?>
				<?php indigo_set_color_mod_css_var('secondary_color', 'secondary-color'); ?>
				<?php indigo_set_color_mod_css_var('secondary_text_color', 'secondary-text-color'); ?>
				<?php indigo_set_unit_css_var('rem', 'base_border_radius', 'base-border-radius'); ?>
				<?php indigo_set_color_mod_css_var('header_textcolor', 'header-text-color'); ?>
				<?php indigo_set_font_family_mod_css_var('base_font_family', 'base-font-family'); ?>
				<?php indigo_set_unit_css_var('px', 'base_font_size', 'base-font-size'); ?>
				<?php indigo_set_font_family_mod_css_var('headings_font_family', 'headings-font-family'); ?>
				<?php indigo_set_theme_mod_css_var('headings_font_weight', 'headings-font-weight'); ?>
				<?php indigo_set_theme_mod_css_var('bold_font_weight', 'bold-font-weight'); ?>
				<?php indigo_set_theme_mod_css_var('base_font_weight', 'base-font-weight'); ?>
				<?php indigo_set_theme_mod_css_var('base_line_height', 'base-line-height'); ?>
				<?php indigo_set_unit_css_var('rem', 'indigo_content_gutter_y', 'content-gutter-y'); ?>
				<?php indigo_set_unit_css_var('rem', 'indigo_content_gutter_x', 'content-gutter-x'); ?>
				<?php indigo_set_unit_css_var('rem', 'indigo_header_padding_y', 'header-padding-y'); ?>
				<?php indigo_set_unit_css_var('rem', 'indigo_header_padding_x', 'header-padding-x'); ?>
			}
		</style>
		<?php
	}
endif;

