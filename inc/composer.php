<?php

// Load composer libraries as required

if ( class_exists( 'WP_Customize_Control' ) ) {
	require_once  dirname( __FILE__ ) . '/class-customizer-range-value-control/class-customizer-range-value-control.php';
}

function indigo_customizer_resource_url($url) {
	return $url.'/inc/customizer-custom-controls/';
}

add_filter('skyrocket_resource_url', 'indigo_customizer_resource_url');

if ( class_exists( 'WP_Customize_Control' ) ) {
	require_once  dirname( __FILE__ ) . '/customizer-custom-controls/functions.php';
}
