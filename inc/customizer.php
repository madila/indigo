<?php
/**
 * Indigo Theme Customizer
 *
 * @package Indigo
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function indigo_customize_register( $wp_customize ) {
	$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
	$wp_customize->get_setting( 'background_color' )->transport = 'postMessage';
	$wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';

	/**
	 * Site Info
	 */

	$wp_customize->add_setting( 'indigo_site_info', array(
		'capability' => 'edit_theme_options',
		'default' => 'All rights reserved unless otherwise stated.',
		'sanitize_callback' => 'sanitize_textarea_field',
	) );

	$wp_customize->add_control( 'indigo_site_info', array(
		'type' => 'textarea',
		'section' => 'title_tagline',
		'label' => __( 'Additional Footer Information' ),
	) );

	// Add settings for output description
	$wp_customize->add_setting( 'indigo_display_copyright', array(
		'default'    => '0',
		'capability' => 'edit_theme_options'
	) );

	// Add control and output for select field
	$wp_customize->add_control( 'indigo_display_copyright', array(
		'label'      => __( 'Display copyright notice?', 'indigo' ),
		'section'    => 'title_tagline',
		'type'       => 'checkbox',
		'std'        => '1'
	) );

	/**
	 * Typography Color
	 */
	$wp_customize->add_setting( 'text_color' , array(
		'default' => get_theme_mod_default('text_color'),
		'transport' => 'postMessage',
		'sanitize_callback' => 'sanitize_hex_color',
	) );

	$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'text_color', array(
		'label'      => __( 'Typography Color', 'indigo' ),
		'section'    => 'colors'
	) ) );

	/**
	 * Header Background Color
	 */
	$wp_customize->add_setting( 'header_bg_color' , array(
		'default' => get_theme_mod_default('header_bg_color'),
		'transport' => 'postMessage',
		'sanitize_callback' => 'sanitize_hex_color',
	) );

	$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'header_bg_color', array(
		'label'      => __( 'Header Background', 'indigo' ),
		'section'    => 'colors'
	) ) );


	// Add settings for output description
	$wp_customize->add_setting( 'header_bg_on_scroll', array(
		'default'    => '0',
		'capability' => 'edit_theme_options'
	) );

	// Add control and output for select field
	$wp_customize->add_control( 'header_bg_on_scroll', array(
		'label'      => __( 'Apply background colour only on scroll', 'documentation' ),
		'section'    => 'colors',
		'type'       => 'checkbox',
		'std'        => '1'
	) );

	/**
	 * Primary Color
	 */
	$wp_customize->add_setting( 'primary_color' , array(
		'default' => get_theme_mod_default('primary_color'),
		'transport' => 'postMessage',
		'sanitize_callback' => 'sanitize_hex_color',
	) );

	$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'primary_color', array(
		'label'      => __( 'Primary Color', 'indigo' ),
		'section'    => 'colors'
	) ) );

	/**
	 * Secondary Color
	 */
	$wp_customize->add_setting( 'secondary_color' , array(
		'default' =>  get_theme_mod_default('secondary_color'),
		'transport' => 'postMessage',
		'sanitize_callback' => 'sanitize_hex_color',
	) );

	$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'secondary_color', array(
		'label'      => __( 'Secondary Color', 'indigo' ),
		'section'    => 'colors'
	) ) );

	/**
	 * Theme
	 */
	$wp_customize->add_setting( 'indigo_theme_style', array(
		'capability' => 'edit_theme_options',
		'sanitize_callback' => 'indigo_sanitize_select',
		'default' => 'blog',
	) );

	$wp_customize->add_control( 'indigo_theme_style', array(
		'type' => 'select',
		'section' => 'title_tagline', // Add a default or your own section
		'label' => __( 'Theme Style' ),
		'description' => __( 'Change the appear of the theme for specific purposes.' ),
		'choices' => array(
			'none' => __( 'None' ),
			'blog' => __( 'Blog' ),
			'portfolio' => __( 'Portfolio' )
		),
	) );


	/**
	 * Logo width
	 */
	$wp_customize->add_setting(
		'logo_width',
		array(
			'default'           => '250px',
			'transport'         => 'postMessage',
			'sanitize_callback' => 'indigo_sanitize_px_units',
		)
	);

	$wp_customize->add_control( 'logo_width', array(
		'type' => 'range',
		'section' => 'title_tagline',
		'label' => __( 'Logo Size' ),
		'description' => __( 'The maximum width of the logo.' ),
		'input_attrs' => array(
			'min' => 100,
			'max' => 1000,
			'step' => 10,
			'value' => get_theme_mod('logo_width')
		),
	) );

	$wp_customize->add_section( 'ui',
		array(
			'title'       => __( 'User Interface', 'indigo' ), //Visible title of section
			'priority'    => 30, //Determines what order this appears in
			'capability'  => 'edit_theme_options', //Capability needed to tweak
			'description' => __('Allows you to define to way the User Interface is displayed.', 'mytheme'), //Descriptive tooltip
		)
	);

	/**
	 * Base Typography
	 */
	$wp_customize->add_setting(
		'base_font_family',
		array(
			'default'           => 'Helvetica',
			'transport'         => 'postMessage',
			'sanitize_callback' => 'sanitize_text_field',
		)
	);

	$wp_customize->add_control( 'base_font_family', array(
		'type' => 'text',
		'section' => 'ui', // Add a default or your own section
		'label' => __( 'Base Font Family' ),
		'description' => __( 'Add the css slug of the default font family you want to use, eg. Helvetica.' ),
	) );

	/**
	 * Font Weight
	 */
	$wp_customize->add_setting( 'base_font_weight', array(
		'capability' => 'edit_theme_options',
		'sanitize_callback' => 'indigo_sanitize_select',
		'default' => '300',
	) );

	$wp_customize->add_control( 'base_font_weight', array(
		'type' => 'select',
		'section' => 'ui', // Add a default or your own section
		'label' => __( 'Default Font Weight' ),
		'description' => __( 'Change the thinness of the font you use for the body copy' ),
		'choices' => array(
			'100' => __( 'Hairline' ),
			'200' => __( 'Thin' ),
			'300' => __( 'Light' ),
			'400' => __( 'Regular' ),
			'500' => __( 'Medium' ),
			'600' => __( 'Bold' ),
			'700' => __( 'ExtraBold' ),
			'800' => __( 'UltraBold' ),
			'900' => __( 'Black' )
		),
	) );

	/**
	 * Headings Typography
	 */
	$wp_customize->add_setting(
		'headings_font_family',
		array(
			'default'           => 'Helvetica',
			'transport'         => 'postMessage',
			'sanitize_callback' => 'sanitize_text_field',
		)
	);

	$wp_customize->add_control( 'headings_font_family', array(
		'type' => 'text',
		'section' => 'ui', // Add a default or your own section
		'label' => __( 'Headings Font Family' ),
		'description' => __( 'Add the css slug of the default font family you want to use, eg. Helvetica.' ),
	) );

	/**
	 * Headings Weight
	 */
	$wp_customize->add_setting( 'headings_font_weight', array(
		'capability' => 'edit_theme_options',
		'sanitize_callback' => 'indigo_sanitize_select',
		'default' => '300',
	) );

	$wp_customize->add_control( 'headings_font_weight', array(
		'type' => 'select',
		'section' => 'ui', // Add a default or your own section
		'label' => __( 'Headings Font Weight' ),
		'description' => __( 'Change the thinness of the font you use for the body copy' ),
		'choices' => array(
			'100' => __( 'Hairline' ),
			'200' => __( 'Thin' ),
			'300' => __( 'Light' ),
			'400' => __( 'Regular' ),
			'500' => __( 'Medium' ),
			'600' => __( 'Bold' ),
			'700' => __( 'ExtraBold' ),
			'800' => __( 'UltraBold' ),
			'900' => __( 'Black' )
		),
	) );

	/**
	 * Border Radius
	 */
	$wp_customize->add_setting(
		'base_border_radius',
		array(
			'default'           => '0',
			'transport'         => 'postMessage',
			'sanitize_callback' => 'indigo_sanitize_em_units',
		)
	);

	/**
	 * Border Radius
	 */
	$wp_customize->add_setting(
		'base_border_radius',
		array(
			'default'           => 0,
			'transport'         => 'postMessage',
			'sanitize_callback' => 'indigo_sanitize_em_units',
		)
	);

	$wp_customize->add_control( 'base_border_radius', array(
		'type' => 'range',
		'section' => 'ui',
		'label' => __( 'Border Radius' ),
		'description' => __( 'Define the roundness of UI elements, such as button, inputs...' ),
		'input_attrs' => array(
			'min' => 0,
			'max' => 2.5,
			'step' => 0.05,
			'value' => get_theme_mod('base_border_radius')
		),
	) );

	/**
	 * Content Max Width
	 */
	$wp_customize->add_setting(
		'content_width',
		array(
			'default'           => 800,
			'transport'         => 'postMessage',
			'sanitize_callback' => 'indigo_sanitize_px_units',
		)
	);

	$wp_customize->add_control( 'content_width', array(
		'type' => 'range',
		'section' => 'title_tagline',
		'label' => __( 'Content Width' ),
		'description' => __( 'The maximum width of the website container.' ),
		'input_attrs' => array(
			'min' => 600,
			'max' => 2400,
			'step' => 100,
		),
	) );

	if ( isset( $wp_customize->selective_refresh ) ) {
		$wp_customize->selective_refresh->add_partial( 'blogname', array(
			'selector'        => '.site-title a',
			'render_callback' => 'indigo_customize_partial_blogname',
		) );
		$wp_customize->selective_refresh->add_partial( 'blogdescription', array(
			'selector'        => '.site-description',
			'render_callback' => 'indigo_customize_partial_blogdescription',
		) );
	}
}
add_action( 'customize_register', 'indigo_customize_register' );

/**
 * Render the site title for the selective refresh partial.
 *
 * @return void
 */
function indigo_customize_partial_blogname() {
	bloginfo( 'name' );
}

/**
 * Render the site tagline for the selective refresh partial.
 *
 * @return void
 */
function indigo_customize_partial_blogdescription() {
	bloginfo( 'description' );
}

/**
 * Adds px units before saving the value
 *
 * @return string
 */
function indigo_sanitize_px_units($px) {
	return absint( $px ).'px';
}

/**
 * Adds px units before saving the value
 *
 * @return string
 */
function indigo_sanitize_em_units($em) {
	return $em.'em';
}

/**
 * Sanitize the selected option
 *
 * @return string
 */
function indigo_sanitize_select( $input, $setting ) {

	// Ensure input is a slug.
	$input = sanitize_key( $input );

	// Get list of choices from the control associated with the setting.
	$choices = $setting->manager->get_control( $setting->id )->choices;

	// If the input is a valid key, return it; otherwise, return the default.
	return ( array_key_exists( $input, $choices ) ? $input : $setting->default );
}

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function indigo_customize_preview_js() {
	wp_enqueue_script( 'indigo-customizer', get_template_directory_uri() . '/js/customizer.js', array( 'customize-preview' ), '20151215', true );
}
add_action( 'customize_preview_init', 'indigo_customize_preview_js' );
