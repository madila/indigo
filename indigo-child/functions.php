<?php

/**
 * TMP functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package TMP
 */

if ( ! function_exists( 'sad_setup' ) ) :
    /**
     * Sets up theme defaults and registers support for various WordPress features.
     *
     * Note that this function is hooked into the after_setup_theme hook, which
     * runs before the init hook. The init hook is too late for some features, such
     * as indicating support for post thumbnails.
     */
    function sad_setup() {
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


add_action( 'wp_enqueue_scripts', 'other_enqueue_parent_styles' );
function other_enqueue_parent_styles() {
    
	wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css', array(), '1.03' );
    wp_enqueue_style( 'child-style', get_stylesheet_uri(), array(), '1.04' );

}

/**
 * Add support for custom color palettes in Gutenberg.
 */
function tmp_color_palette($palette)
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

add_filter('indigo_color_palette', 'tmp_color_palette');

function add_vimeo_player() {
    ?>
    <script src="https://player.vimeo.com/api/player.js"></script>
    <script>
		var vimeoPlayers = document.querySelectorAll('.is-provider-vimeo');
		let soundIcon = '<svg xmlns="http://www.w3.org/2000/svg" version="1.0"  width="500" height="500" viewBox="0 0 75 75">\n' +
			'<path class="path-speaker" d="M39.389,13.769 L22.235,28.606 L6,28.606 L6,47.699 L21.989,47.699 L39.389,62.75 L39.389,13.769z"\n' +
			'style="stroke:#fff;stroke-width:5;stroke-linejoin:round;fill:#fff;"\n' +
			'/>\n' +
			'<path class="path-wave" d="M48,27.6a19.5,19.5 0 0 1 0,21.4M55.1,20.5a30,30 0 0 1 0,35.6M61.6,14a38.8,38.8 0 0 1 0,48.6" style="fill:none;stroke:#fff;stroke-width:5;stroke-linecap:round"/>\n' +
			'</svg>';
		for (var vimeoPlayer of vimeoPlayers.values()) {
			console.log('vimeoPlayer: ', vimeoPlayer);
			var iframe = vimeoPlayer.querySelector('iframe');
			var player = new Vimeo.Player(iframe, {loop: false});

			var muteButton = document.createElement('button');
			muteButton.className = 'btn btn-vimeo-sound btn-muted';
			muteButton.innerHTML = soundIcon;

			muteButton.addEventListener('click', function(event) {
				player.getVolume().then(function(volume) {
					muteButton.className = (volume > 0) ? 'btn btn-vimeo-sound btn-muted' : 'btn btn-vimeo-sound';
					player.setVolume(volume > 0 ? 0 : 1);
				}).catch(function(error) {
					console.log('could not toggle volume');
				});
			});

			iframe.parentElement.appendChild(muteButton);
		};
    </script>
    <?php
}

//add_action( 'wp_footer', 'add_vimeo_player' );

