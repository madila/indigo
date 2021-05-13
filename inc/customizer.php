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

	$display_header_text = get_theme_mod('display_header_text');
	if(!$display_header_text) {
		$wp_customize->remove_control( 'display_header_text' );
		set_theme_mod( 'display_header_text', '1');
	}

	$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
	$wp_customize->get_setting( 'background_color' )->default = '#f6f7f9';
	$wp_customize->get_setting( 'background_color' )->transport = 'postMessage';

	/**
	 * Site Info
	 */

	$wp_customize->add_setting( 'indigo_header_info', array(
		'capability' => 'edit_theme_options',
		'default' => '',
		'sanitize_callback' => 'wp_kses_post',
	) );

	/**
	 * Typography Color
	 */

	$wp_customize->add_setting( 'header_textcolor' , array(
		'default' => get_theme_mod_default('header_textcolor'),
		'transport' => 'postMessage'
	) );

	$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'header_textcolor', array(
		'label'      => __( 'Header Text Color', 'indigo' ),
		'section'    => 'colors'
	) ) );


	$wp_customize->add_setting( 'background_color' , array(
		'default' => get_theme_mod_default('background_color'),
		'transport' => 'postMessage',
	) );

	$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'background_color', array(
		'label'      => __( 'Background Color', 'indigo' ),
		'section'    => 'colors'
	) ) );



	$wp_customize->add_setting( 'indigo_text_color' , array(
		'default' => get_theme_mod_default('indigo_text_color'),
		'transport' => 'postMessage',
		'sanitize_callback' => 'sanitize_hex_color',
	) );

	$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'indigo_text_color', array(
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
		'default'    => false,
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

	$wp_customize->add_setting( 'primary_text_color' , array(
		'default' => get_theme_mod_default('primary_text_color'),
		'transport' => 'postMessage',
		'sanitize_callback' => 'sanitize_hex_color',
	) );

	$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'primary_text_color', array(
		'label'      => __( 'Primary Text Color', 'indigo' ),
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

	$wp_customize->add_setting( 'secondary_text_color' , array(
		'default' => get_theme_mod_default(	'secondary_text_color'),
		'transport' => 'postMessage',
		'sanitize_callback' => 'sanitize_hex_color',
	) );

	$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'secondary_text_color', array(
		'label'      => __( 'Secondary Text Color', 'indigo' ),
		'section'    => 'colors'
	) ) );

	/**
	 * Logo width
	 */
	$logo_width_value = intval(get_theme_mod('logo_width', '250px'));
	$wp_customize->add_setting(
		'logo_width',
		array(
			'default'           => $logo_width_value,
			'transport'         => 'postMessage'
		)
	);

	$wp_customize->add_control( new Customizer_Range_Value_Control( $wp_customize, 'logo_width', array(
		'type' => 'range-value',
		'section' => 'title_tagline',
		'label' => __( 'Logo Size' ),
		'description' => __( 'The maximum width of the logo.' ),
		'input_attrs' => array(
			'min' => 30,
			'max' => 1000,
			'step' => 5,
			'suffix' => 'px'
		),
	) ));

	/**
	 * Logo width
	 */
	$wp_customize->add_setting(
		'logo_width_mobile',
		array(
			'default'           => intval(get_theme_mod('logo_width_mobile', '250px')),
			'transport'         => 'postMessage'
		)
	);

	$wp_customize->add_control( new Customizer_Range_Value_Control( $wp_customize, 'logo_width_mobile', array(
		'type' => 'range-value',
		'section' => 'title_tagline',
		'label' => __( 'Mobile Logo Size' ),
		'description' => __( 'The maximum width of the logo.' ),
		'input_attrs' => array(
			'min' => 30,
			'max' => 1000,
			'step' => 5,
			'suffix' => 'px'
		),
	) ));


	/**
	 * Archive Settings
	 */

	$wp_customize->add_section( 'footer_settings',
		array(
			'title'       => __( 'Site Footer', 'indigo' ), //Visible title of section
			'priority'    => 25, //Determines what order this appears in
			'capability'  => 'edit_theme_options', //Capability needed to tweak
			'description' => __('Allows you to control the display of archives.', 'indigo'), //Descriptive tooltip
		)
	);


	$wp_customize->add_setting( 'indigo_pre_footer_alignment', array(
		'capability' => 'edit_theme_options',
		'sanitize_callback' => 'indigo_sanitize_select',
		'default' => 'none',
	) );

	$wp_customize->add_control( 'indigo_pre_footer_alignment', array(
		'type' => 'select',
		'section' => 'footer_settings', // Add a default or your own section
		'label' => __( 'Pre Footer Alignment' ),
		'description' => __( 'Select the display of the pre-footer sidebar.' ),
		'choices' => array(
			'none' => __( 'None (Always hidden)' ),
			'column' => __( 'Column' ),
			'row' => __( 'Row' )
		),
	) );

	$wp_customize->add_setting( 'indigo_site_info', array(
		'capability' => 'edit_theme_options',
		'default' => 'All rights reserved unless otherwise stated.',
		'sanitize_callback' => 'wp_kses_post',
	) );

	$wp_customize->add_control( 'indigo_site_info', array(
		'type' => 'textarea',
		'section' => 'footer_settings',
		'label' => __( 'Additional Footer Information' ),
	) );

	// Add settings for output description
	$wp_customize->add_setting( 'indigo_display_copyright', array(
		'default'    => 1,
		'capability' => 'edit_theme_options'
	) );

	// Add control and output for select field
	$wp_customize->add_control( 'indigo_display_copyright', array(
		'label'      => __( 'Display copyright notice?', 'indigo' ),
		'section'    => 'footer_settings',
		'type'       => 'checkbox',
		'std'        => 1
	) );


	// Add settings for output description
	$wp_customize->add_setting( 'indigo_show_archive_title', array(
		'default'    => false,
		'capability' => 'edit_theme_options'
	) );

	// Add control and output for select field
	$wp_customize->add_control( 'indigo_show_archive_title', array(
		'label'      => __( 'Show archive titles?', 'indigo' ),
		'section'    => 'site_layout',
		'type'       => 'checkbox'
	) );

	/**
	 * Theme
	 */

	$wp_customize->add_section( 'typography',
		array(
			'title'       => __( 'Typography', 'indigo' ), //Visible title of section
			'priority'    => 30, //Determines what order this appears in
			'capability'  => 'edit_theme_options', //Capability needed to tweak
			'description' => __('Allows you to control the typography.', 'mytheme'), //Descriptive tooltip
		)
	);

	/**
	 * Full Page License
	 */
	$wp_customize->add_setting(
		'full_page_license',
		array(
			'default'           => '',
			'transport'         => 'postMessage',
			'sanitize_callback' => 'sanitize_text_field',
		)
	);

	$wp_customize->add_control( 'full_page_license', array(
		'type' => 'text',
		'section' => 'title_tagline', // Add a default or your own section
		'label' => __( 'Full Page License' ),
		'description' => __( 'This will activate the full page option on some layouts.' ),
	) );


	/**
	 * Base Typography
	 */
	$wp_customize->add_setting(
		'base_font_family',
		array(
			'default'           => '',
			'transport'         => 'postMessage',
			'sanitize_callback' => 'sanitize_text_field',
		)
	);

	$wp_customize->add_control( 'base_font_family', array(
		'type' => 'text',
		'section' => 'typography', // Add a default or your own section
		'label' => __( 'Base Font Family' ),
		'description' => __( 'Add the css slug of the default font family you want to use, eg. Helvetica.' ),
	) );

	/**
	 * Base Typography
	 */
	$wp_customize->add_setting(
		'nav_font_family',
		array(
			'default'           => '',
			'transport'         => 'postMessage',
			'sanitize_callback' => 'sanitize_text_field'
		)
	);

	$wp_customize->add_control( 'nav_font_family', array(
		'type' => 'text',
		'section' => 'typography', // Add a default or your own section
		'label' => __( 'Base Navigation Family' ),
		'description' => __( 'Add the css slug of the default font family you want to use, eg. Helvetica.' ),
	) );


	/**
	 * Font Size
	 */
	$wp_customize->add_setting(
		'nav_font_size',
		array(
			'default'           => get_theme_mod('nav_font_size', 14),
			'transport'         => 'postMessage'
		)
	);

	$wp_customize->add_control( new Customizer_Range_Value_Control( $wp_customize, 'nav_font_size', array(
		'type' => 'range-value',
		'section' => 'typography',
		'label' => __( 'Nav Font Size' ),
		'description' => __( 'Define the default font size of the navigation.' ),
		'input_attrs' => array(
			'min' => 12,
			'max' => 25,
			'step' => 1,
			'suffix' => 'px'
		),
	)) );

	/**
	 * Font Weight
	 */
	$wp_customize->add_setting( 'nav_font_weight', array(
		'capability' => 'edit_theme_options',
		'transport'         => 'postMessage',
		'sanitize_callback' => 'indigo_sanitize_select',
		'default' => '300',
	) );

	$wp_customize->add_control( 'nav_font_weight', array(
		'type' => 'select',
		'section' => 'typography', // Add a default or your own section
		'label' => __( 'Default Nav Font Weight' ),
		'description' => __( 'Change the thinness of the font you use for the navigation menus.' ),
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
	 * Font Weight
	 */
	$wp_customize->add_setting( 'base_font_weight', array(
		'capability' => 'edit_theme_options',
		'transport'         => 'postMessage',
		'sanitize_callback' => 'indigo_sanitize_select',
		'default' => '300',
	) );

	$wp_customize->add_control( 'base_font_weight', array(
		'type' => 'select',
		'section' => 'typography', // Add a default or your own section
		'label' => __( 'Default Font Weight' ),
		'description' => __( 'Change the thinness of the font you use for the body copy.' ),
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
	 * Headings Weight
	 */
	$wp_customize->add_setting( 'bold_font_weight', array(
		'capability' => 'edit_theme_options',
		'transport'         => 'postMessage',
		'sanitize_callback' => 'indigo_sanitize_select',
		'default' => '600',
	) );

	$wp_customize->add_control( 'bold_font_weight', array(
		'type' => 'select',
		'section' => 'typography', // Add a default or your own section
		'label' => __( 'Bold Font Weight' ),
		'description' => __( 'Change the thinness of the font you use for the bold copy' ),
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
			'default'           => '',
			'transport'         => 'postMessage',
			'sanitize_callback' => 'sanitize_text_field',
		)
	);

	$wp_customize->add_control( 'headings_font_family', array(
		'type' => 'text',
		'section' => 'typography', // Add a default or your own section
		'label' => __( 'Headings Font Family' ),
		'description' => __( 'Add the css slug of the default font family you want to use, eg. Helvetica.' ),
	) );

	/**
	 * Headings Weight
	 */
	$wp_customize->add_setting( 'headings_font_weight', array(
		'capability' => 'edit_theme_options',
		'transport'         => 'postMessage',
		'sanitize_callback' => 'indigo_sanitize_select',
		'default' => '600',
	) );

	$wp_customize->add_control( 'headings_font_weight', array(
		'type' => 'select',
		'section' => 'typography', // Add a default or your own section
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
	 * Font Size
	 */
	$wp_customize->add_setting(
		'base_letter_spacing',
		array(
			'default'           => get_theme_mod('base_letter_spacing', 0),
			'transport'         => 'postMessage'
		)
	);

	$wp_customize->add_control( new Customizer_Range_Value_Control( $wp_customize, 'base_letter_spacing', array(
		'type' => 'range-value',
		'section' => 'typography',
		'label' => __( 'Base Letter Spacing' ),
		'description' => __( 'Define the default letter spacing for your typography.' ),
		'input_attrs' => array(
			'min' => 0,
			'max' => 0.2,
			'step' => 0.01,
			'suffix' => 'em'
		),
	)) );


	/**
	 * Font Size
	 */
	$wp_customize->add_setting(
		'base_font_size',
		array(
			'default'           => get_theme_mod_default('base_font_size'),
			'transport'         => 'postMessage'
		)
	);

	$wp_customize->add_control( new Customizer_Range_Value_Control( $wp_customize, 'base_font_size', array(
		'type' => 'range-value',
		'section' => 'typography',
		'label' => __( 'Base Font Size' ),
		'description' => __( 'Define the default font size of the page.' ),
		'input_attrs' => array(
			'min' => 12,
			'max' => 25,
			'step' => 1,
			'suffix' => 'px'
		),
	)) );

	/**
	 * Mobile Font Size
	 */
	$wp_customize->add_setting(
		'mobile_font_size',
		array(
			'default'           => get_theme_mod('mobile_font_size', 14),
			'transport'         => 'postMessage'
		)
	);

	$wp_customize->add_control( new Customizer_Range_Value_Control( $wp_customize, 'mobile_font_size', array(
		'type' => 'range-value',
		'section' => 'typography',
		'label' => __( 'Mobile Base Font Size' ),
		'description' => __( 'Define the font size on mobile devices.' ),
		'input_attrs' => array(
			'min' => 10,
			'max' => 25,
			'step' => 1,
			'suffix' => 'px'
		),
	)) );

	/**
	 * Font Size
	 */
	$wp_customize->add_setting(
		'base_line_height',
		array(
			'default'           => get_theme_mod('base_line_height', 1.5),
			'transport'         => 'postMessage',
		)
	);

	$wp_customize->add_control( new Customizer_Range_Value_Control( $wp_customize, 'base_line_height', array(
		'type' => 'range-value',
		'section' => 'typography',
		'label' => __( 'Base Line Height' ),
		'description' => __( 'Define the default font line-height of the page.' ),
		'input_attrs' => array(
			'min' => 0.8,
			'max' => 2.2,
			'step' => 0.1
		),
	) ));

	/**
	 * Font Size
	 */
	$wp_customize->add_setting(
		'headings_line_height',
		array(
			'default'           => get_theme_mod('headings_line_height', 1.5),
			'transport'         => 'postMessage',
		)
	);

	$wp_customize->add_control( new Customizer_Range_Value_Control( $wp_customize, 'headings_line_height', array(
		'type' => 'range-value',
		'section' => 'typography',
		'label' => __( 'Headings Line Height' ),
		'description' => __( 'Define the headings font line height of the page.' ),
		'input_attrs' => array(
			'min' => 0.8,
			'max' => 2.2,
			'step' => 0.1
		),
	) ));

	/**
	 * Border Radius
	 */
	$wp_customize->add_setting(
		'base_border_radius',
		array(
			'default'           => get_theme_mod('base_border_radius', 0),
			'transport'         => 'postMessage',
		)
	);

	$wp_customize->add_control(  new Customizer_Range_Value_Control( $wp_customize, 'base_border_radius', array(
		'type' => 'range-value',
		'section' => 'typography',
		'label' => __( 'Border Radius' ),
		'description' => __( 'Define the roundness of UI elements, such as button, inputs...' ),
		'input_attrs' => array(
			'min' => 0,
			'max' => 2.5,
			'step' => 0.05,
			'suffix' => 'em'
		),
	)) );

	/**
	 * Content Max Width
	 */
	$content_width_value = intval(get_theme_mod( 'content_width', '960' ));

	$wp_customize->add_setting(
		'content_width',
		array(
			'default'           => $content_width_value,
			'transport'         => 'postMessage',
		)
	);

	$wp_customize->add_control( new Customizer_Range_Value_Control( $wp_customize, 'content_width', array(
		'type' => 'range-value',
		'section' => 'title_tagline',
		'label' => __( 'Content Width' ),
		'settings' => 'content_width',
		'description' => __( 'The maximum width of the website container.' ),
		'input_attrs' => array(
			'min' => 600,
			'max' => 2400,
			'step' => 100,
			'suffix' => 'px', //optional suffix
			'value' => $content_width_value
		),
	) ) );



	/**
	 * Content Wide Max Width
	 */
	$init_value = intval(get_theme_mod( 'content_width_wide', '1060' ));

	$wp_customize->add_setting(
		'content_width_wide',
		array(
			'default'           => $init_value,
			'transport'         => 'postMessage'
		)
	);
	$wp_customize->add_control( new Customizer_Range_Value_Control( $wp_customize, 'content_width_wide', array(
		'type' => 'range-value',
		'section' => 'title_tagline',
		'label' => __( 'Wide Content Width' ),
		'settings' => 'content_width_wide',
		'description' => __( 'The maximum width of an element that is aligned wide.' ),
		'input_attrs' => array(
			'min' => 600,
			'max' => 2400,
			'step' => 100,
			'suffix' => 'px',
			'value' => $init_value
		),
	) ));

	// Add settings for output description
	$wp_customize->add_setting( 'indigo_full_width_content', array(
		'default'    => false,
		'capability' => 'edit_theme_options'
	) );

	// Add control and output for select field
	$wp_customize->add_control( 'indigo_full_width_content', array(
		'label'      => __( 'Make content full width?', 'indigo' ),
		'section'    => 'title_tagline',
		'type'       => 'checkbox'
	) );

	// Add settings for output description
	$wp_customize->add_setting( 'indigo_sr_site_title', array(
		'default'    => false,
		'transport'  => 'postMessage',
		'capability' => 'edit_theme_options'
	) );

	// Add control and output for select field
	$wp_customize->add_control( 'indigo_sr_site_title', array(
		'label'      => __( 'Display Title as Screen Ready Only?', 'indigo' ),
		'section'    => 'title_tagline',
		'type'       => 'checkbox'
	) );

	// Add settings for output description
	$wp_customize->add_setting( 'indigo_sr_site_desc', array(
		'default'    => false,
		'transport'  => 'postMessage',
		'capability' => 'edit_theme_options'
	) );

	// Add control and output for select field
	$wp_customize->add_control( 'indigo_sr_site_desc', array(
		'label'      => __( 'Display Tagline as Screen Ready Only?', 'indigo' ),
		'section'    => 'title_tagline',
		'type'       => 'checkbox'
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


	/*
	 * Header Panel
	 */

	$wp_customize->add_section( 'theme_header',
		array(
			'title'       => __( 'Site Header', 'indigo' ), //Visible title of section
			'priority'    => 10, //Determines what order this appears in
			'capability'  => 'edit_theme_options', //Capability needed to tweak
			'description' => __('Allows you to define to way the Site Header is displayed.', 'indigo'), //Descriptive tooltip
		)
	);

	$wp_customize->add_setting( 'indigo_header_alignment', array(
		'capability' => 'edit_theme_options',
		'sanitize_callback' => 'indigo_sanitize_select',
		'default' => 'left',
	) );

	$wp_customize->add_control( 'indigo_header_alignment', array(
		'type' => 'select',
		'section' => 'theme_header', // Add a default or your own section
		'label' => __( 'Header Alignment' ),
		'description' => __( 'Change the position of the logo on the header.' ),
		'choices' => array(
			'center' => __( 'Center' ),
			'left' => __( 'Left' ),
			'right' => __( 'Right' )
		),
	) );

	// Add settings for output description
	$wp_customize->add_setting( 'indigo_contain_header', array(
		'default'    => true,
		'capability' => 'edit_theme_options'
	) );

	// Add control and output for select field
	$wp_customize->add_control( 'indigo_contain_header', array(
		'label'      => __( 'Contain the header content?', 'indigo' ),
		'section'    => 'theme_header',
		'type'       => 'checkbox'
	) );

	// Add settings for output description
	$wp_customize->add_setting( 'indigo_overlay_header', array(
		'default'    => false,
		'capability' => 'edit_theme_options'
	) );

	// Add control and output for select field
	$wp_customize->add_control( 'indigo_overlay_header', array(
		'label'      => __( 'Fix header to the top of the page?', 'indigo' ),
		'section'    => 'theme_header',
		'type'       => 'checkbox'
	) );

	// Add settings for output description
	$wp_customize->add_setting( 'indigo_calculate_header', array(
		'default'    => false,
		'capability' => 'edit_theme_options'
	) );

	// Add control and output for select field
	$wp_customize->add_control( 'indigo_calculate_header', array(
		'label'      => __( 'Push the content below the header?', 'indigo' ),
		'section'    => 'theme_header',
		'type'       => 'checkbox'
	) );

	/**
	 * Header Padding X
	 */
	$wp_customize->add_setting(
		'indigo_header_padding_x',
		array(
			'default'           => get_theme_mod('indigo_header_padding_x', 1),
			'transport'         => 'postMessage'
		)
	);

	$wp_customize->add_control( new Customizer_Range_Value_Control( $wp_customize, 'indigo_header_padding_x', array(
		'type' => 'range-value',
		'section' => 'theme_header',
		'label' => __( 'Header Horizontal Padding' ),
		'description' => __( 'The space inside the elements' ),
		'input_attrs' => array(
			'min' => 0,
			'max' => 5,
			'step' => 0.5,
			'suffix' => 'rem'
		),
	)) );

	/**
	 * Header Padding Y
	 */
	$wp_customize->add_setting(
		'indigo_header_padding_y',
		array(
			'default'           => get_theme_mod('indigo_header_padding_y', 1),
			'transport'         => 'postMessage'
		)
	);

	$wp_customize->add_control( new Customizer_Range_Value_Control( $wp_customize, 'indigo_header_padding_y', array(
		'type' => 'range-value',
		'section' => 'theme_header',
		'label' => __( 'Header Vertical Padding' ),
		'description' => __( 'The space inside the elements' ),
		'input_attrs' => array(
			'min' => 0,
			'max' => 5,
			'step' => 0.5,
			'suffix' => 'rem'
		),
	)));


	/*
	 * Site Content Panel
	 */

	$wp_customize->add_section( 'site_layout',
		array(
			'title'       => __( 'Site Layout', 'indigo' ), //Visible title of section
			'priority'    => 25, //Determines what order this appears in
			'capability'  => 'edit_theme_options', //Capability needed to tweak
			'description' => __('Allows you to define how the content of the site behaves.', 'indigo'), //Descriptive tooltip
		)
	);


	// Add settings for output description
	$wp_customize->add_setting( 'indigo_show_single_title', array(
		'default'    => true,
		'capability' => 'edit_theme_options'
	) );

	// Add control and output for select field
	$wp_customize->add_control( 'indigo_show_single_title', array(
		'label'      => __( 'Show the Title in Single Templates?', 'indigo' ),
		'section'    => 'site_layout',
		'type'       => 'checkbox'
	) );


	// Add settings for output description
	$wp_customize->add_setting( 'indigo_hide_post_thumbnail', array(
		'default'    => false,
		'capability' => 'edit_theme_options'
	) );

	// Add control and output for select field
	$wp_customize->add_control( 'indigo_hide_post_thumbnail', array(
		'label'      => __( 'Hide Single Page Post Thumbnail?', 'indigo' ),
		'section'    => 'site_layout',
		'type'       => 'checkbox'
	) );

	/**
	 * Site Gutter X
	 */
	$wp_customize->add_setting(
		'indigo_content_gutter_x',
		array(
			'default'           => 1,
			'transport'         => 'postMessage',
		)
	);

	$wp_customize->add_control( new Customizer_Range_Value_Control( $wp_customize, 'indigo_content_gutter_x', array(
		'type' => 'range',
		'section' => 'site_layout',
		'label' => __( 'Content Horizontal Gutter' ),
		'description' => __( 'The space inside the elements' ),
		'input_attrs' => array(
			'min' => 0,
			'max' => 5,
			'step' => 0.1,
			'suffix' => 'rem'
		),
	) ));

	/**
	 * Site Gutter X
	 */
	$wp_customize->add_setting(
		'indigo_content_gutter_y',
		array(
			'default'           => 1,
			'transport'         => 'postMessage',
		)
	);

	$wp_customize->add_control( new Customizer_Range_Value_Control( $wp_customize, 'indigo_content_gutter_y', array(
		'type' => 'range-value',
		'section' => 'site_layout',
		'label' => __( 'Content Vertical Gutter' ),
		'description' => __( 'The space inside the elements' ),
		'input_attrs' => array(
			'min' => 0,
			'max' => 5,
			'step' => 0.1,
			'suffix' => 'rem'
		),
	)));

	// Add settings for alignment support
	$wp_customize->add_setting( 'indigo_alignment_support', array(
		'default'    => false,
		'capability' => 'edit_theme_options'
	) );

	// Add control and output for select field
	$wp_customize->add_control( 'indigo_alignment_support', array(
		'label'      => __( 'Enable support for wide and full alignment.', 'indigo' ),
		'section'    => 'site_layout',
		'type'       => 'checkbox',
		'std'        => get_theme_mod('indigo_alignment_support')
	) );

	/**
	 * Theme
	 */

	// Add settings for page title visibility
	$wp_customize->add_setting( 'indigo_show_page_title', array(
		'default'    => true,
		'capability' => 'edit_theme_options'
	) );

	// Add control and output for page title visibility
	$wp_customize->add_control( 'indigo_show_page_title', array(
		'label'      => __( 'Show Title on Pages', 'indigo' ),
		'section'    => 'site_layout',
		'type'       => 'checkbox'
	) );

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
 * Adds rem units before saving the value
 *
 * @return string
 */
function indigo_sanitize_rem_units($rem) {
	return $rem.'rem';
}

/**
 * Adds em units before saving the value
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
