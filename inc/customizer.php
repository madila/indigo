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
	 * Typography Color
	 */
	$wp_customize->add_setting( 'text_color' , array(
		'default' => '#000',
		'transport' => 'postMessage',
		'sanitize_callback' => 'sanitize_hex_color',
	) );

	$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'text_color', array(
		'label'      => __( 'Typography Color', 'indigo' ),
		'section'    => 'colors'
	) ) );

	/**
	 * Primary Color
	 */
	$wp_customize->add_setting( 'primary_color' , array(
		'default' => '#db2372',
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
		'default' => '#000',
		'transport' => 'postMessage',
		'sanitize_callback' => 'sanitize_hex_color',
	) );

	$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'secondary_color', array(
		'label'      => __( 'Secondary Color', 'indigo' ),
		'section'    => 'colors'
	) ) );

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
			'default'           => 'default',
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
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function indigo_customize_preview_js() {
	wp_enqueue_script( 'indigo-customizer', get_template_directory_uri() . '/js/customizer.js', array( 'customize-preview' ), '20151215', true );
}
add_action( 'customize_preview_init', 'indigo_customize_preview_js' );
