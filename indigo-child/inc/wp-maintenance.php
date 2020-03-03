<?php
/**
 * Enabling maintenance page.
 *
 * @package WordPress
 * @subpackage Framework
 * @since Framework 0.0.4
 */

/*
 * TODO: Add to documentation the WP_MAINTENANCE constant
 */

function ofc_framework_maintenance_redirect() {

	if(is_front_page()) {
		return NULL;
	}

	// we do not redirect ajax calls
	if ((defined('DOING_AJAX') && DOING_AJAX)) {
		return NULL;
	}

	// we do not redirect visitors or logged-in users that are not using /wp-admin/
	if (is_user_logged_in() || is_admin()) {
		return NULL;
	}

	$front_page = get_option('page_on_front');
	$redirect_url = $front_page !== "0" ? get_permalink($front_page) : home_url('/');
	wp_redirect($redirect_url);
	exit;
}

function ofc_framework_maintenance_mode( $template ) {

	if ( !is_user_logged_in() && is_front_page()) {
		return locate_template( 'holding.php' );
	}

	return $template;
}

if((defined('WP_MAINTENANCE') && WP_MAINTENANCE)) {
	add_action('template_redirect', 'ofc_framework_maintenance_redirect');
	add_filter('template_include', 'ofc_framework_maintenance_mode', 99);
}
