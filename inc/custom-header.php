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
		'default-text-color' => get_theme_mod_default('indigo_text_color'),
		'width'              => 1000,
		'height'             => 250,
		'flex-height'        => true,
		'wp-head-callback'   => 'indigo_header_style',
	) ) );
}

add_action( 'after_setup_theme', 'indigo_custom_header_setup' );

function get_theme_mod_defaults() {
	return apply_filters('indigo_theme_mod_defaults', array(
		'background_color' => '#ffffff',
		'indigo_text_color' => '#222',
		'content_width' => '960',
		'content_width_wide' => '1060',
		'logo_width' => '200px',
		'logo_width_mobile' => '100px',

		'header_bg_color' => '#ffffff',
		'header_textcolor' => '#333333',
		'indigo_header_alignment' => 'left',
		'nav_font_family' => 'var(--headings-font-family)',

		'primary_color' => '#454545',
		'primary_text_color' => '#ffffff',
		'secondary_color' => '#999999',
		'secondary_text_color' => '#ffffff',

		'sidebar_width' => 300,
		'base_border_radius' => 0,

		'base_font_size' => '16',
		'base_letter_spacing' => '0em',
		'mobile_font_size' => '16px',

		'base_font_weight' => '200',
		'bold_font_weight' => '600',
		'base_line_height' => '1.5em',
		'headings_font_weight' => '600',
		'headings_line_height' => '1.2em',
		'nav_font_weight' => '500',
		'nav_font_size' => '16px',

		'indigo_sidebar_alignment' => 'bottom',
		'indigo_content_gutter_x' => '1rem',
		'indigo_content_gutter_y' => '1rem',

		'indigo_header_padding_y' => '1rem',
		'indigo_header_padding_x' => '1rem',
	));
}


function get_theme_mod_default($key) {
	$defaults = get_theme_mod_defaults();
	return (array_key_exists($key, $defaults)) ? get_theme_mod($key, $defaults[$key]) : get_theme_mod($key);
}

function indigo_set_theme_mod_css_var($option_id, $variable_name = null) {
	$value = get_theme_mod($option_id);
	if(!empty($value)) { ?>
		--<?php echo ($variable_name) ? $variable_name : $option_id; ?>: <?php echo $value; ?>;
	<?php } else { ?>
		--<?php echo ($variable_name) ? $variable_name : $option_id; ?>: <?php echo get_theme_mod_default($option_id); ?>;
	<?php }
}

function indigo_set_unit_css_var($unit, $option_id, $variable_name = null) {
	$value = get_theme_mod($option_id);
	if(!empty($value)) { ?>
		--<?php echo ($variable_name) ? $variable_name : $option_id; ?>: <?php echo $value; ?><?php echo $unit; ?>;
	<?php } else { ?>
		--<?php echo ($variable_name) ? $variable_name : $option_id; ?>: <?php echo intval(get_theme_mod_default($option_id)); ?><?php echo $unit; ?>;
	<?php }
}

function indigo_set_negative_unit_css_var($unit, $option_id, $variable_name = null) {
	$value = get_theme_mod($option_id);
	if(!empty($value)) { ?>
		--<?php echo ($variable_name) ? $variable_name : $option_id; ?>: <?php echo '-'.$value; ?><?php echo $unit; ?>;
	<?php } else { ?>
		--<?php echo ($variable_name) ? $variable_name : $option_id; ?>: <?php echo '-'.intval(get_theme_mod_default($option_id)); ?><?php echo $unit; ?>;
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
	if(get_theme_mod_default($option_id)) { ?>
		--<?php echo ($variable_name) ? $variable_name : $option_id; ?>: <?php echo add_default_font_stack(get_theme_mod_default($option_id)); ?> !important;
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

			:root {
				<?php
				indigo_set_unit_css_var('px', 'logo_width', 'logo-width');
				indigo_set_unit_css_var('px', 'logo_width_mobile', 'logo-width-mobile');
				if(!get_theme_mod('indigo_full_width_content')) {
					indigo_set_unit_css_var('px', 'content_width', 'content-width');
					indigo_set_unit_css_var('px', 'content_width_wide', 'content-width-wide');
				} else {
					echo '--content-width: 100%';
					echo '--content-width-wide: 100%';
				}
				?>

				--header-height: auto;
				<?php indigo_set_unit_css_var('px', 'sidebar_width', 'sidebar-width'); ?>
				<?php indigo_set_color_mod_css_var('indigo_text_color', 'base-color'); ?>
				<?php indigo_set_color_mod_css_var('background_color', 'base-bg-color'); ?>
				<?php indigo_set_color_mod_css_var('header_bg_color', 'header-bg-color'); ?>
				<?php indigo_set_color_mod_css_var('primary_color', 'primary-color'); ?>
				<?php indigo_set_color_mod_css_var('header_textcolor', 'header-text-color'); ?>
				<?php indigo_set_color_mod_css_var('primary_text_color', 'primary-text-color'); ?>
				<?php indigo_set_color_mod_css_var('secondary_color', 'secondary-color'); ?>
				<?php indigo_set_color_mod_css_var('secondary_text_color', 'secondary-text-color'); ?>
				<?php indigo_set_unit_css_var('rem', 'base_border_radius', 'base-border-radius'); ?>
				<?php indigo_set_unit_css_var('em', 'base_letter_spacing', 'base-letter-spacing'); ?>

				<?php indigo_set_color_mod_css_var('header_textcolor', 'header-text-color'); ?>
				<?php indigo_set_font_family_mod_css_var('base_font_family', 'base-font-family'); ?>
				<?php indigo_set_font_family_mod_css_var('nav_font_family', 'nav-font-family'); ?>
				<?php indigo_set_theme_mod_css_var('nav_font_weight', 'nav-font-weight'); ?>
				<?php indigo_set_unit_css_var('px', 'nav_font_size', 'nav-font-size'); ?>

				<?php indigo_set_unit_css_var('px', 'base_font_size', 'base-font-size'); ?>
				<?php indigo_set_unit_css_var('px', 'mobile_font_size', 'mobile-font-size'); ?>
				<?php indigo_set_font_family_mod_css_var('headings_font_family', 'headings-font-family'); ?>
				<?php indigo_set_theme_mod_css_var('headings_font_weight', 'headings-font-weight'); ?>
				<?php indigo_set_theme_mod_css_var('bold_font_weight', 'bold-font-weight'); ?>
				<?php indigo_set_theme_mod_css_var('base_font_weight', 'base-font-weight'); ?>
				<?php indigo_set_theme_mod_css_var('base_line_height', 'base-line-height'); ?>
				<?php indigo_set_theme_mod_css_var('headings_line_height', 'headings-line-height'); ?>
				<?php indigo_set_unit_css_var('rem', 'indigo_content_gutter_y', 'content-gutter-y'); ?>
				<?php indigo_set_unit_css_var('rem', 'indigo_content_gutter_x', 'content-gutter-x'); ?>
				<?php indigo_set_negative_unit_css_var('rem', 'indigo_content_gutter_y', 'content-no-gutter-y'); ?>
				<?php indigo_set_negative_unit_css_var('rem', 'indigo_content_gutter_x', 'content-no-gutter-x'); ?>


				<?php indigo_set_unit_css_var('rem', 'indigo_header_padding_x', 'header-padding-x'); ?>
				<?php indigo_set_unit_css_var('rem', 'indigo_header_padding_y', 'header-padding-y'); ?>
			}
		</style>
		<?php
	}
endif;

