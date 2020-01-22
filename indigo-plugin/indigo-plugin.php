<?php
/**
 * Plugin Name: Indigo Configuration
 * Plugin URI: https://rubenmadila.com/
 * Description: Worpdress Settings for Indigo, do not deactivate.
 * Version: 1.0
 * Author: Ruben Madila
 * Author URI: http://www.rubenmadila.com
 * License: GPL2
 */


 function add_indigo_theme_typography() {
     ?>
     <link rel="stylesheet" href="https://use.typekit.net/wbp1ywb.css">
	<style id="custom-indigo-styles">

	</style>
     <?php
 }

 add_action('wp_head', 'add_indigo_theme_typography', 0);

 /**
 * Enqueue block editor style
 */
function indigo_block_editor_typography() {
    wp_enqueue_style( 'typekit-fonts', 'https://use.typekit.net/wbp1ywb.css' );
}

add_action( 'enqueue_block_editor_assets', 'indigo_block_editor_typography' );
add_action( 'wp_enqueue_scripts', 'indigo_block_editor_typography' );
