<?php
/**
 * Customizer Setup and Custom Controls
 *
 */

/**
 * Adds the individual sections, settings, and controls to the theme customizer
 */
class indigo_initialise_customizer_settings {
	// Get our default values
	private $defaults;

	public function __construct() {
		// Get our Customizer defaults
		$this->defaults = indigo_generate_defaults();

		// Register our Panels
		//add_action( 'customize_register', array( $this, 'indigo_add_customizer_panels' ) );

		// Register our sections
		//add_action( 'customize_register', array( $this, 'indigo_add_customizer_sections' ) );

		// Register our social media controls
		//add_action( 'customize_register', array( $this, 'indigo_register_social_controls' ) );

		// Register our contact controls
		//add_action( 'customize_register', array( $this, 'indigo_register_contact_controls' ) );

		// Register our search controls
		//add_action( 'customize_register', array( $this, 'indigo_register_search_controls' ) );

		// Register our WooCommerce controls, only if WooCommerce is active
		if( indigo_is_woocommerce_active() ) {
		//	add_action( 'customize_register', array( $this, 'indigo_register_woocommerce_controls' ) );
		}

		// Register our sample Custom Control controls
		//add_action( 'customize_register', array( $this, 'indigo_register_sample_custom_controls' ) );

		// Register our sample default controls
		//add_action( 'customize_register', array( $this, 'indigo_register_sample_default_controls' ) );

	}

	/**
	 * Register the Customizer panels
	 */
	public function indigo_add_customizer_panels( $wp_customize ) {
		/**
		 * Add our Header & Navigation Panel
		 */
		 $wp_customize->add_panel( 'header_naviation_panel',
		 	array(
				'title' => __( 'Header & Navigation', 'indigo' ),
				'description' => esc_html__( 'Adjust your Header and Navigation sections.', 'indigo' )
			)
		);
	}

	/**
	 * Register the Customizer sections
	 */
	public function indigo_add_customizer_sections( $wp_customize ) {
		/**
		 * Add our Social Icons Section
		 */
		$wp_customize->add_section( 'social_icons_section',
			array(
				'title' => __( 'Social Icons', 'indigo' ),
				'description' => esc_html__( 'Add your social media links and we\'ll automatically match them with the appropriate icons. Drag and drop the URLs to rearrange their order.', 'indigo' ),
				'panel' => 'header_naviation_panel'
			)
		);

		/**
		 * Add our Contact Section
		 */
		$wp_customize->add_section( 'contact_section',
			array(
				'title' => __( 'Contact', 'indigo' ),
				'description' => esc_html__( 'Add your phone number to the site header bar.', 'indigo' ),
				'panel' => 'header_naviation_panel'
			)
		);

		/**
		 * Add our Search Section
		 */
		$wp_customize->add_section( 'search_section',
			array(
				'title' => __( 'Search', 'indigo' ),
				'description' => esc_html__( 'Add a search icon to your primary naigation menu.', 'indigo' ),
				'panel' => 'header_naviation_panel'
			)
		);

		/**
		 * Add our WooCommerce Layout Section, only if WooCommerce is active
		 */
		$wp_customize->add_section( 'woocommerce_layout_section',
			array(
				'title' => __( 'WooCommerce Layout', 'indigo' ),
				'description' => esc_html__( 'Adjust the layout of your WooCommerce shop.', 'indigo' ),
				'active_callback' => 'indigo_is_woocommerce_active'
			)
		);

		/**
		 * Add our section that contains examples of our Custom Controls
		 */
		$wp_customize->add_section( 'sample_custom_controls_section',
			array(
				'title' => __( 'Sample Custom Controls', 'indigo' ),
				'description' => esc_html__( 'These are an example of Customizer Custom Controls.', 'indigo'  )
			)
		);

		/**
		 * Add our section that contains examples of the default Core Customizer Controls
		 */
		$wp_customize->add_section( 'default_controls_section',
			array(
				'title' => __( 'Default Controls', 'indigo' ),
				'description' => esc_html__( 'These are an example of the default Customizer Controls.', 'indigo'  )
			)
		);

	}

	/**
	 * Register our social media controls
	 */
	public function indigo_register_social_controls( $wp_customize ) {

		// Add our Checkbox switch setting and control for opening URLs in a new tab
		$wp_customize->add_setting( 'social_newtab',
			array(
				'default' => $this->defaults['social_newtab'],
				'transport' => 'postMessage',
				'sanitize_callback' => 'indigo_switch_sanitization'
			)
		);
		$wp_customize->add_control( new Indigo_Toggle_Switch_Custom_control( $wp_customize, 'social_newtab',
			array(
				'label' => __( 'Open in new browser tab', 'indigo' ),
				'section' => 'social_icons_section'
			)
		) );
		$wp_customize->selective_refresh->add_partial( 'social_newtab',
			array(
				'selector' => '.social',
				'container_inclusive' => false,
				'render_callback' => function() {
					echo indigo_get_social_media();
				},
				'fallback_refresh' => true
			)
		);

		// Add our Text Radio Button setting and Custom Control for controlling alignment of icons
		$wp_customize->add_setting( 'social_alignment',
			array(
				'default' => $this->defaults['social_alignment'],
				'transport' => 'postMessage',
				'sanitize_callback' => 'indigo_radio_sanitization'
			)
		);
		$wp_customize->add_control( new Indigo_Text_Radio_Button_Custom_Control( $wp_customize, 'social_alignment',
			array(
				'label' => __( 'Alignment', 'indigo' ),
				'description' => esc_html__( 'Choose the alignment for your social icons', 'indigo' ),
				'section' => 'social_icons_section',
				'choices' => array(
					'alignleft' => __( 'Left', 'indigo' ),
					'alignright' => __( 'Right', 'indigo'  )
				)
			)
		) );
		$wp_customize->selective_refresh->add_partial( 'social_alignment',
			array(
				'selector' => '.social',
				'container_inclusive' => false,
				'render_callback' => function() {
					echo indigo_get_social_media();
				},
				'fallback_refresh' => true
			)
		);

		// Add our Sortable Repeater setting and Custom Control for Social media URLs
		$wp_customize->add_setting( 'social_urls',
			array(
				'default' => $this->defaults['social_urls'],
				'transport' => 'postMessage',
				'sanitize_callback' => 'indigo_url_sanitization'
			)
		);
		$wp_customize->add_control( new Indigo_Sortable_Repeater_Custom_Control( $wp_customize, 'social_urls',
			array(
				'label' => __( 'Social URLs', 'indigo' ),
				'description' => esc_html__( 'Add your social media links.', 'indigo' ),
				'section' => 'social_icons_section',
				'button_labels' => array(
					'add' => __( 'Add Icon', 'indigo' ),
				)
			)
		) );
		$wp_customize->selective_refresh->add_partial( 'social_urls',
			array(
				'selector' => '.social',
				'container_inclusive' => false,
				'render_callback' => function() {
					echo indigo_get_social_media();
				},
				'fallback_refresh' => true
			)
		);

		// Add our Single Accordion setting and Custom Control to list the available Social Media icons
		$socialIconsList = array(
			'Behance' => __( '<i class="fab fa-behance"></i>', 'indigo' ),
			'Bitbucket' => __( '<i class="fab fa-bitbucket"></i>', 'indigo' ),
			'CodePen' => __( '<i class="fab fa-codepen"></i>', 'indigo' ),
			'DeviantArt' => __( '<i class="fab fa-deviantart"></i>', 'indigo' ),
			'Discord' => __( '<i class="fab fa-discord"></i>', 'indigo' ),
			'Dribbble' => __( '<i class="fab fa-dribbble"></i>', 'indigo' ),
			'Etsy' => __( '<i class="fab fa-etsy"></i>', 'indigo' ),
			'Facebook' => __( '<i class="fab fa-facebook-f"></i>', 'indigo' ),
			'Flickr' => __( '<i class="fab fa-flickr"></i>', 'indigo' ),
			'Foursquare' => __( '<i class="fab fa-foursquare"></i>', 'indigo' ),
			'GitHub' => __( '<i class="fab fa-github"></i>', 'indigo' ),
			'Google+' => __( '<i class="fab fa-google-plus-g"></i>', 'indigo' ),
			'Instagram' => __( '<i class="fab fa-instagram"></i>', 'indigo' ),
			'Kickstarter' => __( '<i class="fab fa-kickstarter-k"></i>', 'indigo' ),
			'Last.fm' => __( '<i class="fab fa-lastfm"></i>', 'indigo' ),
			'LinkedIn' => __( '<i class="fab fa-linkedin-in"></i>', 'indigo' ),
			'Medium' => __( '<i class="fab fa-medium-m"></i>', 'indigo' ),
			'Patreon' => __( '<i class="fab fa-patreon"></i>', 'indigo' ),
			'Pinterest' => __( '<i class="fab fa-pinterest-p"></i>', 'indigo' ),
			'Reddit' => __( '<i class="fab fa-reddit-alien"></i>', 'indigo' ),
			'Slack' => __( '<i class="fab fa-slack-hash"></i>', 'indigo' ),
			'SlideShare' => __( '<i class="fab fa-slideshare"></i>', 'indigo' ),
			'Snapchat' => __( '<i class="fab fa-snapchat-ghost"></i>', 'indigo' ),
			'SoundCloud' => __( '<i class="fab fa-soundcloud"></i>', 'indigo' ),
			'Spotify' => __( '<i class="fab fa-spotify"></i>', 'indigo' ),
			'Stack Overflow' => __( '<i class="fab fa-stack-overflow"></i>', 'indigo' ),
			'Tumblr' => __( '<i class="fab fa-tumblr"></i>', 'indigo' ),
			'Twitch' => __( '<i class="fab fa-twitch"></i>', 'indigo' ),
			'Twitter' => __( '<i class="fab fa-twitter"></i>', 'indigo' ),
			'Vimeo' => __( '<i class="fab fa-vimeo-v"></i>', 'indigo' ),
			'Weibo' => __( '<i class="fab fa-weibo"></i>', 'indigo' ),
			'YouTube' => __( '<i class="fab fa-youtube"></i>', 'indigo' ),
		);
		$wp_customize->add_setting( 'social_url_icons',
			array(
				'default' => $this->defaults['social_url_icons'],
				'transport' => 'refresh',
				'sanitize_callback' => 'indigo_text_sanitization'
			)
		);
		$wp_customize->add_control( new Indigo_Single_Accordion_Custom_Control( $wp_customize, 'social_url_icons',
			array(
				'label' => __( 'View list of available icons', 'indigo' ),
				'description' => $socialIconsList,
				'section' => 'social_icons_section'
			)
		) );

		// Add our Checkbox switch setting and Custom Control for displaying an RSS icon
		$wp_customize->add_setting( 'social_rss',
			array(
				'default' => $this->defaults['social_rss'],
				'transport' => 'postMessage',
				'sanitize_callback' => 'indigo_switch_sanitization'
			)
		);
		$wp_customize->add_control( new Indigo_Toggle_Switch_Custom_control( $wp_customize, 'social_rss',
			array(
				'label' => __( 'Display RSS icon', 'indigo' ),
				'section' => 'social_icons_section'
			)
		) );
		$wp_customize->selective_refresh->add_partial( 'social_rss',
			array(
				'selector' => '.social',
				'container_inclusive' => false,
				'render_callback' => function() {
					echo indigo_get_social_media();
				},
				'fallback_refresh' => true
			)
		);

	}

	/**
	 * Register our Contact controls
	 */
	public function indigo_register_contact_controls( $wp_customize ) {
		// Add our Text field setting and Control for displaying the phone number
		$wp_customize->add_setting( 'contact_phone',
			array(
				'default' => $this->defaults['contact_phone'],
				'transport' => 'postMessage',
				'sanitize_callback' => 'wp_filter_nohtml_kses'
			)
		);
		$wp_customize->add_control( 'contact_phone',
			array(
				'label' => __( 'Display phone number', 'indigo' ),
				'type' => 'text',
				'section' => 'contact_section'
			)
		);
		$wp_customize->selective_refresh->add_partial( 'contact_phone',
			array(
				'selector' => '.social',
				'container_inclusive' => false,
				'render_callback' => function() {
					echo indigo_get_social_media();
				},
				'fallback_refresh' => true
			)
		);

	}

	/**
	 * Register our Search controls
	 */
	public function indigo_register_search_controls( $wp_customize ) {
		// Add our Checkbox switch setting and control for opening URLs in a new tab
		$wp_customize->add_setting( 'search_menu_icon',
			array(
				'default' => $this->defaults['search_menu_icon'],
				'transport' => 'postMessage',
				'sanitize_callback' => 'indigo_switch_sanitization'
			)
		);
		$wp_customize->add_control( new Indigo_Toggle_Switch_Custom_control( $wp_customize, 'search_menu_icon',
			array(
				'label' => __( 'Display Search Icon', 'indigo' ),
				'section' => 'search_section'
			)
		) );
		$wp_customize->selective_refresh->add_partial( 'search_menu_icon',
			array(
				'selector' => '.menu-item-search',
				'container_inclusive' => false,
				'fallback_refresh' => false
			)
		);
	}

	/**
	 * Register our WooCommerce Layout controls
	 */
	public function indigo_register_woocommerce_controls( $wp_customize ) {

		// Add our Checkbox switch setting and control for displaying a sidebar on the shop page
		$wp_customize->add_setting( 'woocommerce_shop_sidebar',
			array(
				'default' => $this->defaults['woocommerce_shop_sidebar'],
				'transport' => 'refresh',
				'sanitize_callback' => 'indigo_switch_sanitization'
			)
		);
		$wp_customize->add_control( new Indigo_Toggle_Switch_Custom_control( $wp_customize, 'woocommerce_shop_sidebar',
			array(
				'label' => __( 'Shop page sidebar', 'indigo' ),
				'section' => 'woocommerce_layout_section'
			)
		) );

		// Add our Checkbox switch setting and control for displaying a sidebar on the single product page
		$wp_customize->add_setting( 'woocommerce_product_sidebar',
			array(
				'default' => $this->defaults['woocommerce_product_sidebar'],
				'transport' => 'refresh',
				'sanitize_callback' => 'indigo_switch_sanitization'
			)
		);
		$wp_customize->add_control( new Indigo_Toggle_Switch_Custom_control( $wp_customize, 'woocommerce_product_sidebar',
			array(
				'label' => esc_html__( 'Single Product page sidebar', 'indigo' ),
				'section' => 'woocommerce_layout_section'
			)
		) );

		// Add our Simple Notice setting and control for displaying a message about the WooCommerce shop sidebars
		$wp_customize->add_setting( 'woocommerce_other_sidebar',
			array(
				'transport' => 'postMessage',
				'sanitize_callback' => 'indigo_text_sanitization'
			)
		);
		$wp_customize->add_control( new Indigo_Simple_Notice_Custom_control( $wp_customize, 'woocommerce_other_sidebar',
			array(
				'label' => __( 'Cart, Checkout & My Account sidebars', 'indigo' ),
				'description' => esc_html__( 'The Cart, Checkout and My Account pages are displayed using shortcodes. To remove the sidebar from these Pages, simply edit each Page and change the Template (in the Page Attributes Panel) to Full-width Page.', 'indigo' ),
				'section' => 'woocommerce_layout_section'
			)
		) );

	}

	/**
	 * Register our sample custom controls
	 */
	public function indigo_register_sample_custom_controls( $wp_customize ) {

		// Test of Toggle Switch Custom Control
		$wp_customize->add_setting( 'sample_toggle_switch',
			array(
				'default' => $this->defaults['sample_toggle_switch'],
				'transport' => 'refresh',
				'sanitize_callback' => 'indigo_switch_sanitization'
			)
		);
		$wp_customize->add_control( new Indigo_Toggle_Switch_Custom_control( $wp_customize, 'sample_toggle_switch',
			array(
				'label' => __( 'Toggle switch', 'indigo' ),
				'section' => 'sample_custom_controls_section'
			)
		) );

		// Test of Slider Custom Control
		$wp_customize->add_setting( 'sample_slider_control',
			array(
				'default' => $this->defaults['sample_slider_control'],
				'transport' => 'postMessage',
				'sanitize_callback' => 'absint'
			)
		);
		$wp_customize->add_control( new Indigo_Slider_Custom_Control( $wp_customize, 'sample_slider_control',
			array(
				'label' => __( 'Slider Control (px)', 'indigo' ),
				'section' => 'sample_custom_controls_section',
				'input_attrs' => array(
					'min' => 10,
					'max' => 90,
					'step' => 1,
				),
			)
		) );

		// Another Test of Slider Custom Control
		$wp_customize->add_setting( 'sample_slider_control_small_step',
			array(
				'default' => $this->defaults['sample_slider_control_small_step'],
				'transport' => 'refresh',
				'sanitize_callback' => 'indigo_range_sanitization'
			)
		);
		$wp_customize->add_control( new Indigo_Slider_Custom_Control( $wp_customize, 'sample_slider_control_small_step',
			array(
				'label' => __( 'Slider Control With a Small Step', 'indigo' ),
				'section' => 'sample_custom_controls_section',
				'input_attrs' => array(
					'min' => 0,
					'max' => 4,
					'step' => .5,
				),
			)
		) );

		// Add our Sortable Repeater setting and Custom Control for Social media URLs
		$wp_customize->add_setting( 'sample_sortable_repeater_control',
			array(
				'default' => $this->defaults['sample_sortable_repeater_control'],
				'transport' => 'refresh',
				'sanitize_callback' => 'indigo_url_sanitization'
			)
		);
		$wp_customize->add_control( new Indigo_Sortable_Repeater_Custom_Control( $wp_customize, 'sample_sortable_repeater_control',
			array(
				'label' => __( 'Sortable Repeater', 'indigo' ),
				'description' => esc_html__( 'This is the control description.', 'indigo' ),
				'section' => 'sample_custom_controls_section',
				'button_labels' => array(
					'add' => __( 'Add Row', 'indigo' ),
				)
			)
		) );

		// Test of Image Radio Button Custom Control
		$wp_customize->add_setting( 'sample_image_radio_button',
			array(
				'default' => $this->defaults['sample_image_radio_button'],
				'transport' => 'refresh',
				'sanitize_callback' => 'indigo_radio_sanitization'
			)
		);
		$wp_customize->add_control( new Indigo_Image_Radio_Button_Custom_Control( $wp_customize, 'sample_image_radio_button',
			array(
				'label' => __( 'Image Radio Button Control', 'indigo' ),
				'description' => esc_html__( 'Sample custom control description', 'indigo' ),
				'section' => 'sample_custom_controls_section',
				'choices' => array(
					'sidebarleft' => array(
						'image' => trailingslashit( get_template_directory_uri() ) . 'images/sidebar-left.png',
						'name' => __( 'Left Sidebar', 'indigo' )
					),
					'sidebarnone' => array(
						'image' => trailingslashit( get_template_directory_uri() ) . 'images/sidebar-none.png',
						'name' => __( 'No Sidebar', 'indigo' )
					),
					'sidebarright' => array(
						'image' => trailingslashit( get_template_directory_uri() ) . 'images/sidebar-right.png',
						'name' => __( 'Right Sidebar', 'indigo' )
					)
				)
			)
		) );

		// Test of Text Radio Button Custom Control
		$wp_customize->add_setting( 'sample_text_radio_button',
			array(
				'default' => $this->defaults['sample_text_radio_button'],
				'transport' => 'refresh',
				'sanitize_callback' => 'indigo_radio_sanitization'
			)
		);
		$wp_customize->add_control( new Indigo_Text_Radio_Button_Custom_Control( $wp_customize, 'sample_text_radio_button',
			array(
				'label' => __( 'Text Radio Button Control', 'indigo' ),
				'description' => esc_html__( 'Sample custom control description', 'indigo' ),
				'section' => 'sample_custom_controls_section',
				'choices' => array(
					'left' => __( 'Left', 'indigo' ),
					'centered' => __( 'Centered', 'indigo' ),
					'right' => __( 'Right', 'indigo'  )
				)
			)
		) );

		// Test of Image Checkbox Custom Control
		$wp_customize->add_setting( 'sample_image_checkbox',
			array(
				'default' => $this->defaults['sample_image_checkbox'],
				'transport' => 'refresh',
				'sanitize_callback' => 'indigo_text_sanitization'
			)
		);
		$wp_customize->add_control( new Indigo_Image_checkbox_Custom_Control( $wp_customize, 'sample_image_checkbox',
			array(
				'label' => __( 'Image Checkbox Control', 'indigo' ),
				'description' => esc_html__( 'Sample custom control description', 'indigo' ),
				'section' => 'sample_custom_controls_section',
				'choices' => array(
					'stylebold' => array(
						'image' => trailingslashit( get_template_directory_uri() ) . 'images/Bold.png',
						'name' => __( 'Bold', 'indigo' )
					),
					'styleitalic' => array(
						'image' => trailingslashit( get_template_directory_uri() ) . 'images/Italic.png',
						'name' => __( 'Italic', 'indigo' )
					),
					'styleallcaps' => array(
						'image' => trailingslashit( get_template_directory_uri() ) . 'images/AllCaps.png',
						'name' => __( 'All Caps', 'indigo' )
					),
					'styleunderline' => array(
						'image' => trailingslashit( get_template_directory_uri() ) . 'images/Underline.png',
						'name' => __( 'Underline', 'indigo' )
					)
				)
			)
		) );

		// Test of Single Accordion Control
		$sampleIconsList = array(
			'Behance' => __( '<i class="fab fa-behance"></i>', 'indigo' ),
			'Bitbucket' => __( '<i class="fab fa-bitbucket"></i>', 'indigo' ),
			'CodePen' => __( '<i class="fab fa-codepen"></i>', 'indigo' ),
			'DeviantArt' => __( '<i class="fab fa-deviantart"></i>', 'indigo' ),
			'Discord' => __( '<i class="fab fa-discord"></i>', 'indigo' ),
			'Dribbble' => __( '<i class="fab fa-dribbble"></i>', 'indigo' ),
			'Etsy' => __( '<i class="fab fa-etsy"></i>', 'indigo' ),
			'Facebook' => __( '<i class="fab fa-facebook-f"></i>', 'indigo' ),
			'Flickr' => __( '<i class="fab fa-flickr"></i>', 'indigo' ),
			'Foursquare' => __( '<i class="fab fa-foursquare"></i>', 'indigo' ),
			'GitHub' => __( '<i class="fab fa-github"></i>', 'indigo' ),
			'Google+' => __( '<i class="fab fa-google-plus-g"></i>', 'indigo' ),
			'Instagram' => __( '<i class="fab fa-instagram"></i>', 'indigo' ),
			'Kickstarter' => __( '<i class="fab fa-kickstarter-k"></i>', 'indigo' ),
			'Last.fm' => __( '<i class="fab fa-lastfm"></i>', 'indigo' ),
			'LinkedIn' => __( '<i class="fab fa-linkedin-in"></i>', 'indigo' ),
			'Medium' => __( '<i class="fab fa-medium-m"></i>', 'indigo' ),
			'Patreon' => __( '<i class="fab fa-patreon"></i>', 'indigo' ),
			'Pinterest' => __( '<i class="fab fa-pinterest-p"></i>', 'indigo' ),
			'Reddit' => __( '<i class="fab fa-reddit-alien"></i>', 'indigo' ),
			'Slack' => __( '<i class="fab fa-slack-hash"></i>', 'indigo' ),
			'SlideShare' => __( '<i class="fab fa-slideshare"></i>', 'indigo' ),
			'Snapchat' => __( '<i class="fab fa-snapchat-ghost"></i>', 'indigo' ),
			'SoundCloud' => __( '<i class="fab fa-soundcloud"></i>', 'indigo' ),
			'Spotify' => __( '<i class="fab fa-spotify"></i>', 'indigo' ),
			'Stack Overflow' => __( '<i class="fab fa-stack-overflow"></i>', 'indigo' ),
			'Tumblr' => __( '<i class="fab fa-tumblr"></i>', 'indigo' ),
			'Twitch' => __( '<i class="fab fa-twitch"></i>', 'indigo' ),
			'Twitter' => __( '<i class="fab fa-twitter"></i>', 'indigo' ),
			'Vimeo' => __( '<i class="fab fa-vimeo-v"></i>', 'indigo' ),
			'Weibo' => __( '<i class="fab fa-weibo"></i>', 'indigo' ),
			'YouTube' => __( '<i class="fab fa-youtube"></i>', 'indigo' ),
		);
		$wp_customize->add_setting( 'sample_single_accordion',
			array(
				'default' => $this->defaults['sample_single_accordion'],
				'transport' => 'refresh',
				'sanitize_callback' => 'indigo_text_sanitization'
			)
		);
		$wp_customize->add_control( new Indigo_Single_Accordion_Custom_Control( $wp_customize, 'sample_single_accordion',
			array(
				'label' => __( 'Single Accordion Control', 'indigo' ),
				'description' => $sampleIconsList,
				'section' => 'sample_custom_controls_section'
			)
		) );

		// Test of Alpha Color Picker Control
		$wp_customize->add_setting( 'sample_alpha_color',
			array(
				'default' => $this->defaults['sample_alpha_color'],
				'transport' => 'postMessage',
				'sanitize_callback' => 'indigo_hex_rgba_sanitization'
			)
		);
		$wp_customize->add_control( new Indigo_Customize_Alpha_Color_Control( $wp_customize, 'sample_alpha_color',
			array(
				'label' => __( 'Alpha Color Picker Control', 'indigo' ),
				'description' => esc_html__( 'Sample custom control description', 'indigo' ),
				'section' => 'sample_custom_controls_section',
				'show_opacity' => true,
				'palette' => array(
					'#000',
					'#fff',
					'#df312c',
					'#df9a23',
					'#eef000',
					'#7ed934',
					'#1571c1',
					'#8309e7'
				)
			)
		) );

		// Test of WPColorPicker Alpha Color Picker Control
		$wp_customize->add_setting( 'sample_wpcolorpicker_alpha_color',
			array(
				'default' => $this->defaults['sample_wpcolorpicker_alpha_color'],
				'transport' => 'refresh',
				'sanitize_callback' => 'indigo_hex_rgba_sanitization'
			)
		);
		$wp_customize->add_control( new Indigo_Alpha_Color_Control( $wp_customize, 'sample_wpcolorpicker_alpha_color',
			array(
				'label' => __( 'WP ColorPicker Alpha Color Picker', 'indigo' ),
				'description' => esc_html__( 'Sample color control with Alpha channel', 'indigo' ),
				'section' => 'sample_custom_controls_section',
				'input_attrs' => array(
					'palette' => array(
						'#000000',
						'#ffffff',
						'#dd3333',
						'#dd9933',
						'#eeee22',
						'#81d742',
						'#1e73be',
						'#8224e3',
					)
				),
			)
		) );

		// Another Test of WPColorPicker Alpha Color Picker Control
		$wp_customize->add_setting( 'sample_wpcolorpicker_alpha_color2',
			array(
				'default' => $this->defaults['sample_wpcolorpicker_alpha_color2'],
				'transport' => 'refresh',
				'sanitize_callback' => 'indigo_hex_rgba_sanitization'
			)
		);
		$wp_customize->add_control( new Indigo_Alpha_Color_Control( $wp_customize, 'sample_wpcolorpicker_alpha_color2',
			array(
				'label' => __( 'WP ColorPicker Alpha Color Picker', 'indigo' ),
				'description' => esc_html__( 'Sample color control with Alpha channel', 'indigo' ),
				'section' => 'sample_custom_controls_section',
				'input_attrs' => array(
					'resetalpha' => false,
					'palette' => array(
						'rgba(99,78,150,1)',
						'rgba(67,78,150,1)',
						'rgba(34,78,150,.7)',
						'rgba(3,78,150,1)',
						'rgba(7,110,230,.9)',
						'rgba(234,78,150,1)',
						'rgba(99,78,150,.5)',
						'rgba(190,120,120,.5)',
					),
				),
			)
		) );

		// Test of Pill Checkbox Custom Control
		$wp_customize->add_setting( 'sample_pill_checkbox',
			array(
				'default' => $this->defaults['sample_pill_checkbox'],
				'transport' => 'refresh',
				'sanitize_callback' => 'indigo_text_sanitization'
			)
		);
		$wp_customize->add_control( new Indigo_Pill_Checkbox_Custom_Control( $wp_customize, 'sample_pill_checkbox',
			array(
				'label' => __( 'Pill Checkbox Control', 'indigo' ),
				'description' => esc_html__( 'This is a sample Pill Checkbox Control', 'indigo' ),
				'section' => 'sample_custom_controls_section',
				'input_attrs' => array(
					'sortable' => false,
					'fullwidth' => false,
				),
				'choices' => array(
					'tiger' => __( 'Tiger', 'indigo' ),
					'lion' => __( 'Lion', 'indigo' ),
					'giraffe' => __( 'Giraffe', 'indigo'  ),
					'elephant' => __( 'Elephant', 'indigo'  ),
					'hippo' => __( 'Hippo', 'indigo'  ),
					'rhino' => __( 'Rhino', 'indigo'  ),
				)
			)
		) );

		// Test of Pill Checkbox Custom Control
		$wp_customize->add_setting( 'sample_pill_checkbox2',
			array(
				'default' => $this->defaults['sample_pill_checkbox2'],
				'transport' => 'refresh',
				'sanitize_callback' => 'indigo_text_sanitization'
			)
		);
		$wp_customize->add_control( new Indigo_Pill_Checkbox_Custom_Control( $wp_customize, 'sample_pill_checkbox2',
			array(
				'label' => __( 'Pill Checkbox Control', 'indigo' ),
				'description' => esc_html__( 'This is a sample Sortable Pill Checkbox Control', 'indigo' ),
				'section' => 'sample_custom_controls_section',
				'input_attrs' => array(
					'sortable' => true,
					'fullwidth' => false,
				),
				'choices' => array(
					'captainamerica' => __( 'Captain America', 'indigo' ),
					'ironman' => __( 'Iron Man', 'indigo' ),
					'captainmarvel' => __( 'Captain Marvel', 'indigo'  ),
					'msmarvel' => __( 'Ms. Marvel', 'indigo'  ),
					'Jessicajones' => __( 'Jessica Jones', 'indigo'  ),
					'squirrelgirl' => __( 'Squirrel Girl', 'indigo'  ),
					'blackwidow' => __( 'Black Widow', 'indigo'  ),
					'hulk' => __( 'Hulk', 'indigo'  ),
				)
			)
		) );

		// Test of Pill Checkbox Custom Control
		$wp_customize->add_setting( 'sample_pill_checkbox3',
			array(
				'default' => $this->defaults['sample_pill_checkbox3'],
				'transport' => 'refresh',
				'sanitize_callback' => 'indigo_text_sanitization'
			)
		);
		$wp_customize->add_control( new Indigo_Pill_Checkbox_Custom_Control( $wp_customize, 'sample_pill_checkbox3',
			array(
				'label' => __( 'Pill Checkbox Control', 'indigo' ),
				'description' => esc_html__( 'This is a sample Sortable Fullwidth Pill Checkbox Control', 'indigo' ),
				'section' => 'sample_custom_controls_section',
				'input_attrs' => array(
					'sortable' => true,
					'fullwidth' => true,
				),
				'choices' => array(
					'date' => __( 'Date', 'indigo' ),
					'author' => __( 'Author', 'indigo' ),
					'categories' => __( 'Categories', 'indigo'  ),
					'tags' => __( 'Tags', 'indigo'  ),
					'comments' => __( 'Comments', 'indigo'  ),
				)
			)
		) );

		// Test of Simple Notice control
		$wp_customize->add_setting( 'sample_simple_notice',
			array(
				'default' => $this->defaults['sample_simple_notice'],
				'transport' => 'postMessage',
				'sanitize_callback' => 'indigo_text_sanitization'
			)
		);
		$wp_customize->add_control( new Indigo_Simple_Notice_Custom_control( $wp_customize, 'sample_simple_notice',
			array(
				'label' => __( 'Simple Notice Control', 'indigo' ),
				'description' => __( 'This Custom Control allows you to display a simple title and description to your users. You can even include <a href="http://google.com" target="_blank">basic html</a>.', 'indigo' ),
				'section' => 'sample_custom_controls_section'
			)
		) );

		// Test of Dropdown Select2 Control (single select)
		$wp_customize->add_setting( 'sample_dropdown_select2_control_single',
			array(
				'default' => $this->defaults['sample_dropdown_select2_control_single'],
				'transport' => 'refresh',
				'sanitize_callback' => 'indigo_text_sanitization'
			)
		);
		$wp_customize->add_control( new Indigo_Dropdown_Select2_Custom_Control( $wp_customize, 'sample_dropdown_select2_control_single',
			array(
				'label' => __( 'Dropdown Select2 Control', 'indigo' ),
				'description' => esc_html__( 'Sample Dropdown Select2 custom control (Single Select)', 'indigo' ),
				'section' => 'sample_custom_controls_section',
				'input_attrs' => array(
					'placeholder' => __( 'Please select a state...', 'indigo' ),
					'multiselect' => false,
				),
				'choices' => array(
					'nsw' => __( 'New South Wales', 'indigo' ),
					'vic' => __( 'Victoria', 'indigo' ),
					'qld' => __( 'Queensland', 'indigo' ),
					'wa' => __( 'Western Australia', 'indigo' ),
					'sa' => __( 'South Australia', 'indigo' ),
					'tas' => __( 'Tasmania', 'indigo' ),
					'act' => __( 'Australian Capital Territory', 'indigo' ),
					'nt' => __( 'Northern Territory', 'indigo' ),
				)
			)
		) );

		// Test of Dropdown Select2 Control (Multi-Select)
		$wp_customize->add_setting( 'sample_dropdown_select2_control_multi',
			array(
				'default' => $this->defaults['sample_dropdown_select2_control_multi'],
				'transport' => 'refresh',
				'sanitize_callback' => 'indigo_text_sanitization'
			)
		);
		$wp_customize->add_control( new Indigo_Dropdown_Select2_Custom_Control( $wp_customize, 'sample_dropdown_select2_control_multi',
			array(
				'label' => __( 'Dropdown Select2 Control', 'indigo' ),
				'description' => esc_html__( 'Sample Dropdown Select2 custom control  (Multi-Select)', 'indigo' ),
				'section' => 'sample_custom_controls_section',
				'input_attrs' => array(
					'multiselect' => true,
				),
				'choices' => array(
					__( 'Antarctica', 'indigo' ) => array(
						'Antarctica/Casey' => __( 'Casey', 'indigo' ),
						'Antarctica/Davis' => __( 'Davis', 'indigo' ),
						'Antarctica/DumontDurville' => __( 'DumontDUrville', 'indigo' ),
						'Antarctica/Macquarie' => __( 'Macquarie', 'indigo' ),
						'Antarctica/Mawson' => __( 'Mawson', 'indigo' ),
						'Antarctica/McMurdo' => __( 'McMurdo', 'indigo' ),
						'Antarctica/Palmer' => __( 'Palmer', 'indigo' ),
						'Antarctica/Rothera' => __( 'Rothera', 'indigo' ),
						'Antarctica/Syowa' => __( 'Syowa', 'indigo' ),
						'Antarctica/Troll' => __( 'Troll', 'indigo' ),
						'Antarctica/Vostok' => __( 'Vostok', 'indigo' ),
					),
					__( 'Atlantic', 'indigo' ) => array(
						'Atlantic/Azores' => __( 'Azores', 'indigo' ),
						'Atlantic/Bermuda' => __( 'Bermuda', 'indigo' ),
						'Atlantic/Canary' => __( 'Canary', 'indigo' ),
						'Atlantic/Cape_Verde' => __( 'Cape Verde', 'indigo' ),
						'Atlantic/Faroe' => __( 'Faroe', 'indigo' ),
						'Atlantic/Madeira' => __( 'Madeira', 'indigo' ),
						'Atlantic/Reykjavik' => __( 'Reykjavik', 'indigo' ),
						'Atlantic/South_Georgia' => __( 'South Georgia', 'indigo' ),
						'Atlantic/Stanley' => __( 'Stanley', 'indigo' ),
						'Atlantic/St_Helena' => __( 'St Helena', 'indigo' ),
					),
					__( 'Australia', 'indigo' ) => array(
						'Australia/Adelaide' => __( 'Adelaide', 'indigo' ),
						'Australia/Brisbane' => __( 'Brisbane', 'indigo' ),
						'Australia/Broken_Hill' => __( 'Broken Hill', 'indigo' ),
						'Australia/Currie' => __( 'Currie', 'indigo' ),
						'Australia/Darwin' => __( 'Darwin', 'indigo' ),
						'Australia/Eucla' => __( 'Eucla', 'indigo' ),
						'Australia/Hobart' => __( 'Hobart', 'indigo' ),
						'Australia/Lindeman' => __( 'Lindeman', 'indigo' ),
						'Australia/Lord_Howe' => __( 'Lord Howe', 'indigo' ),
						'Australia/Melbourne' => __( 'Melbourne', 'indigo' ),
						'Australia/Perth' => __( 'Perth', 'indigo' ),
						'Australia/Sydney' => __( 'Sydney', 'indigo' ),
					)
				)
			)
		) );

		// Test of Dropdown Posts Control
		$wp_customize->add_setting( 'sample_dropdown_posts_control',
			array(
				'default' => $this->defaults['sample_dropdown_posts_control'],
				'transport' => 'postMessage',
				'sanitize_callback' => 'absint'
			)
		);
		$wp_customize->add_control( new Indigo_Dropdown_Posts_Custom_Control( $wp_customize, 'sample_dropdown_posts_control',
			array(
				'label' => __( 'Dropdown Posts Control', 'indigo' ),
				'description' => esc_html__( 'Sample Dropdown Posts custom control description', 'indigo' ),
				'section' => 'sample_custom_controls_section',
				'input_attrs' => array(
					'posts_per_page' => -1,
					'orderby' => 'name',
					'order' => 'ASC',
				),
			)
		) );

		// Test of TinyMCE control
		$wp_customize->add_setting( 'sample_tinymce_editor',
			array(
				'default' => $this->defaults['sample_tinymce_editor'],
				'transport' => 'postMessage',
				'sanitize_callback' => 'wp_kses_post'
			)
		);
		$wp_customize->add_control( new Indigo_TinyMCE_Custom_control( $wp_customize, 'sample_tinymce_editor',
			array(
				'label' => __( 'TinyMCE Control', 'indigo' ),
				'description' => __( 'This is a TinyMCE Editor Custom Control', 'indigo' ),
				'section' => 'sample_custom_controls_section',
				'input_attrs' => array(
					'toolbar1' => 'bold italic bullist numlist alignleft aligncenter alignright link',
					'mediaButtons' => true,
				)
			)
		) );
		$wp_customize->selective_refresh->add_partial( 'sample_tinymce_editor',
			array(
				'selector' => '.footer-credits',
				'container_inclusive' => false,
				'render_callback' => 'indigo_get_credits_render_callback',
				'fallback_refresh' => false,
			)
		);

		// Test of Google Font Select Control
		$wp_customize->add_setting( 'sample_google_font_select',
			array(
				'default' => $this->defaults['sample_google_font_select'],
				'sanitize_callback' => 'indigo_google_font_sanitization'
			)
		);
		$wp_customize->add_control( new Indigo_Google_Font_Select_Custom_Control( $wp_customize, 'sample_google_font_select',
			array(
				'label' => __( 'Google Font Control', 'indigo' ),
				'description' => esc_html__( 'All Google Fonts sorted alphabetically', 'indigo' ),
				'section' => 'sample_custom_controls_section',
				'input_attrs' => array(
					'font_count' => 'all',
					'orderby' => 'alpha',
				),
			)
		) );
	}

	/**
	 * Register our sample default controls
	 */
	public function indigo_register_sample_default_controls( $wp_customize ) {

		// Test of Text Control
		$wp_customize->add_setting( 'sample_default_text',
			array(
				'default' => $this->defaults['sample_default_text'],
				'transport' => 'refresh',
				'sanitize_callback' => 'indigo_text_sanitization'
			)
		);
		$wp_customize->add_control( 'sample_default_text',
			array(
				'label' => __( 'Default Text Control', 'indigo' ),
				'description' => esc_html__( 'Text controls Type can be either text, email, url, number, hidden, or date', 'indigo' ),
				'section' => 'default_controls_section',
				'type' => 'text',
				'input_attrs' => array(
					'class' => 'my-custom-class',
					'style' => 'border: 1px solid rebeccapurple',
					'placeholder' => __( 'Enter name...', 'indigo' ),
				),
			)
		);

		// Test of Email Control
		$wp_customize->add_setting( 'sample_email_text',
			array(
				'default' => $this->defaults['sample_email_text'],
				'transport' => 'refresh',
				'sanitize_callback' => 'sanitize_email'
			)
		);
		$wp_customize->add_control( 'sample_email_text',
			array(
				'label' => __( 'Default Email Control', 'indigo' ),
				'description' => esc_html__( 'Text controls Type can be either text, email, url, number, hidden, or date', 'indigo' ),
				'section' => 'default_controls_section',
				'type' => 'email'
			)
		);

		// Test of URL Control
		$wp_customize->add_setting( 'sample_url_text',
			array(
				'default' => $this->defaults['sample_url_text'],
				'transport' => 'refresh',
				'sanitize_callback' => 'esc_url_raw'
			)
		);
		$wp_customize->add_control( 'sample_url_text',
			array(
				'label' => __( 'Default URL Control', 'indigo' ),
				'description' => esc_html__( 'Text controls Type can be either text, email, url, number, hidden, or date', 'indigo' ),
				'section' => 'default_controls_section',
				'type' => 'url'
			)
		);

		// Test of Number Control
		$wp_customize->add_setting( 'sample_number_text',
			array(
				'default' => $this->defaults['sample_number_text'],
				'transport' => 'refresh',
				'sanitize_callback' => 'indigo_sanitize_integer'
			)
		);
		$wp_customize->add_control( 'sample_number_text',
			array(
				'label' => __( 'Default Number Control', 'indigo' ),
				'description' => esc_html__( 'Text controls Type can be either text, email, url, number, hidden, or date', 'indigo' ),
				'section' => 'default_controls_section',
				'type' => 'number'
			)
		);

		// Test of Hidden Control
		$wp_customize->add_setting( 'sample_hidden_text',
			array(
				'default' => $this->defaults['sample_hidden_text'],
				'transport' => 'refresh',
				'sanitize_callback' => 'indigo_text_sanitization'
			)
		);
		$wp_customize->add_control( 'sample_hidden_text',
			array(
				'label' => __( 'Default Hidden Control', 'indigo' ),
				'description' => esc_html__( 'Text controls Type can be either text, email, url, number, hidden, or date', 'indigo' ),
				'section' => 'default_controls_section',
				'type' => 'hidden'
			)
		);

		// Test of Date Control
		$wp_customize->add_setting( 'sample_date_text',
			array(
				'default' => $this->defaults['sample_date_text'],
				'transport' => 'refresh',
				'sanitize_callback' => 'indigo_text_sanitization'
			)
		);
		$wp_customize->add_control( 'sample_date_text',
			array(
				'label' => __( 'Default Date Control', 'indigo' ),
				'description' => esc_html__( 'Text controls Type can be either text, email, url, number, hidden, or date', 'indigo' ),
				'section' => 'default_controls_section',
				'type' => 'text'
			)
		);

		 // Test of Standard Checkbox Control
		$wp_customize->add_setting( 'sample_default_checkbox',
			array(
				'default' => $this->defaults['sample_default_checkbox'],
				'transport' => 'refresh',
				'sanitize_callback' => 'indigo_switch_sanitization'
			)
		);
		$wp_customize->add_control( 'sample_default_checkbox',
			array(
				'label' => __( 'Default Checkbox Control', 'indigo' ),
				'description' => esc_html__( 'Sample Checkbox description', 'indigo' ),
				'section' => 'default_controls_section',
				'type' => 'checkbox'
			)
		);

 		// Test of Standard Select Control
		$wp_customize->add_setting( 'sample_default_select',
			array(
				'default' => $this->defaults['sample_default_select'],
				'transport' => 'refresh',
				'sanitize_callback' => 'indigo_radio_sanitization'
			)
		);
		$wp_customize->add_control( 'sample_default_select',
			array(
				'label' => __( 'Standard Select Control', 'indigo' ),
				'section' => 'default_controls_section',
				'type' => 'select',
				'choices' => array(
					'wordpress' => __( 'WordPress', 'indigo' ),
					'hamsters' => __( 'Hamsters', 'indigo' ),
					'jet-fuel' => __( 'Jet Fuel', 'indigo' ),
					'nuclear-energy' => __( 'Nuclear Energy', 'indigo' )
				)
			)
		);

		// Test of Standard Radio Control
		$wp_customize->add_setting( 'sample_default_radio',
			array(
				'default' => $this->defaults['sample_default_radio'],
				'transport' => 'refresh',
				'sanitize_callback' => 'indigo_radio_sanitization'
			)
		);
		$wp_customize->add_control( 'sample_default_radio',
			array(
				'label' => __( 'Standard Radio Control', 'indigo' ),
				'section' => 'default_controls_section',
				'type' => 'radio',
				'choices' => array(
					'captain-america' => __( 'Captain America', 'indigo' ),
					'iron-man' => __( 'Iron Man', 'indigo' ),
					'spider-man' => __( 'Spider-Man', 'indigo' ),
					'thor' => __( 'Thor', 'indigo' )
				)
			)
		);

		// Test of Dropdown Pages Control
		$wp_customize->add_setting( 'sample_default_dropdownpages',
			array(
				'default' => $this->defaults['sample_default_dropdownpages'],
				'transport' => 'refresh',
				'sanitize_callback' => 'absint'
			)
		);
		$wp_customize->add_control( 'sample_default_dropdownpages',
			array(
				'label' => __( 'Default Dropdown Pages Control', 'indigo' ),
				'section' => 'default_controls_section',
				'type' => 'dropdown-pages'
			)
		);

		// Test of Textarea Control
		$wp_customize->add_setting( 'sample_default_textarea',
			array(
				'default' => $this->defaults['sample_default_textarea'],
				'transport' => 'refresh',
				'sanitize_callback' => 'wp_filter_nohtml_kses'
			)
		);
		$wp_customize->add_control( 'sample_default_textarea',
			array(
				'label' => __( 'Default Textarea Control', 'indigo' ),
				'section' => 'default_controls_section',
				'type' => 'textarea',
				'input_attrs' => array(
					'class' => 'my-custom-class',
					'style' => 'border: 1px solid #999',
					'placeholder' => __( 'Enter message...', 'indigo' ),
				),
			)
		);

		// Test of Color Control
		$wp_customize->add_setting( 'sample_default_color',
			array(
				'default' => $this->defaults['sample_default_color'],
				'transport' => 'refresh',
				'sanitize_callback' => 'sanitize_hex_color'
			)
		);
		$wp_customize->add_control( 'sample_default_color',
			array(
				'label' => __( 'Default Color Control', 'indigo' ),
				'section' => 'default_controls_section',
				'type' => 'color'
			)
		);

		// Test of Media Control
		$wp_customize->add_setting( 'sample_default_media',
			array(
				'default' => $this->defaults['sample_default_media'],
				'transport' => 'refresh',
				'sanitize_callback' => 'absint'
			)
		);
		$wp_customize->add_control( new WP_Customize_Media_Control( $wp_customize, 'sample_default_media',
			array(
				'label' => __( 'Default Media Control', 'indigo' ),
				'description' => esc_html__( 'This is the description for the Media Control', 'indigo' ),
				'section' => 'default_controls_section',
				'mime_type' => 'image',
				'button_labels' => array(
					'select' => __( 'Select File', 'indigo' ),
					'change' => __( 'Change File', 'indigo' ),
					'default' => __( 'Default', 'indigo' ),
					'remove' => __( 'Remove', 'indigo' ),
					'placeholder' => __( 'No file selected', 'indigo' ),
					'frame_title' => __( 'Select File', 'indigo' ),
					'frame_button' => __( 'Choose File', 'indigo' ),
				)
			)
		) );

		// Test of Image Control
		$wp_customize->add_setting( 'sample_default_image',
			array(
				'default' => $this->defaults['sample_default_image'],
				'transport' => 'refresh',
				'sanitize_callback' => 'esc_url_raw'
			)
		);
		$wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'sample_default_image',
			array(
				'label' => __( 'Default Image Control', 'indigo' ),
				'description' => esc_html__( 'This is the description for the Image Control', 'indigo' ),
				'section' => 'default_controls_section',
				'button_labels' => array(
					'select' => __( 'Select Image', 'indigo' ),
					'change' => __( 'Change Image', 'indigo' ),
					'remove' => __( 'Remove', 'indigo' ),
					'default' => __( 'Default', 'indigo' ),
					'placeholder' => __( 'No image selected', 'indigo' ),
					'frame_title' => __( 'Select Image', 'indigo' ),
					'frame_button' => __( 'Choose Image', 'indigo' ),
				)
			)
		) );

		// Test of Cropped Image Control
		$wp_customize->add_setting( 'sample_default_cropped_image',
			array(
				'default' => $this->defaults['sample_default_cropped_image'],
				'transport' => 'refresh',
				'sanitize_callback' => 'absint'
			)
		);
		$wp_customize->add_control( new WP_Customize_Cropped_Image_Control( $wp_customize, 'sample_default_cropped_image',
			array(
				'label' => __( 'Default Cropped Image Control', 'indigo' ),
				'description' => esc_html__( 'This is the description for the Cropped Image Control', 'indigo' ),
				'section' => 'default_controls_section',
				'flex_width' => false,
				'flex_height' => false,
				'width' => 800,
				'height' => 400
			)
		) );

		// Test of Date/Time Control
		$wp_customize->add_setting( 'sample_date_only',
			array(
				'default' => $this->defaults['sample_date_only'],
				'transport' => 'refresh',
				'sanitize_callback' => 'indigo_date_time_sanitization',
			)
		);
		$wp_customize->add_control( new WP_Customize_Date_Time_Control( $wp_customize, 'sample_date_only',
			array(
				'label' => __( 'Default Date Control', 'indigo' ),
				'description' => esc_html__( 'This is the Date Time Control but is only displaying a date field. It also has Max and Min years set.', 'indigo' ),
				'section' => 'default_controls_section',
				'include_time' => false,
				'allow_past_date' => true,
				'twelve_hour_format' => true,
				'min_year' => '2016',
				'max_year' => '2025',
			)
		) );

		// Test of Date/Time Control
		$wp_customize->add_setting( 'sample_date_time',
			array(
				'default' => $this->defaults['sample_date_time'],
				'transport' => 'refresh',
				'sanitize_callback' => 'indigo_date_time_sanitization',
			)
		);
		$wp_customize->add_control( new WP_Customize_Date_Time_Control( $wp_customize, 'sample_date_time',
			array(
				'label' => __( 'Default Date Control', 'indigo' ),
				'description' => esc_html__( 'This is the Date Time Control. It also has Max and Min years set.', 'indigo' ),
				'section' => 'default_controls_section',
				'include_time' => true,
				'allow_past_date' => true,
				'twelve_hour_format' => true,
				'min_year' => '2010',
				'max_year' => '2020',
			)
		) );

		// Test of Date/Time Control
		$wp_customize->add_setting( 'sample_date_time_no_past_date',
			array(
				'default' => $this->defaults['sample_date_time_no_past_date'],
				'transport' => 'refresh',
				'sanitize_callback' => 'indigo_date_time_sanitization',
			)
		);
		$wp_customize->add_control( new WP_Customize_Date_Time_Control( $wp_customize, 'sample_date_time_no_past_date',
			array(
				'label' => __( 'Default Date Control', 'indigo' ),
				'description' => esc_html__( "This is the Date Time Control but is only displaying a date field. Past dates are not allowed.", 'indigo' ),
				'section' => 'default_controls_section',
				'include_time' => false,
				'allow_past_date' => false,
				'twelve_hour_format' => true,
				'min_year' => '2016',
				'max_year' => '2099',
			)
		) );
	}
}

/**
 * Render Callback for displaying the footer credits
 */
function indigo_get_credits_render_callback() {
	echo indigo_get_credits();
}

/**
 * Load all our Customizer Custom Controls
 */
require_once trailingslashit( dirname(__FILE__) ) . 'custom-controls.php';

/**
 * Initialise our Customizer settings
 */
$indigo_settings = new indigo_initialise_customizer_settings();
