<?php

// Load composer libraries as required

function indigo_customizer_resource_url($url) {
	return $url.'/inc/customizer-custom-controls/';
}

if ( class_exists( 'WP_Customize_Control' ) ) {
	require_once dirname(__FILE__) . '/customizer-range-control/class-customizer-range-value-control.php';
}

add_filter('skyrocket_resource_url', 'indigo_customizer_resource_url');

if ( class_exists( 'WP_Customize_Control' ) ) {
	require_once dirname(__FILE__) . '/customizer-controls/functions.php';
}