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

function indigo_maintenance_redirect() {

	if(is_front_page()) {
		return NULL;
	}

	// we do not redirect ajax calls
	if((defined('DOING_AJAX') && DOING_AJAX)) {
		return NULL;
	}

	// Deactivate Maintenance Redirection for Login Routes
	if(class_exists( 'Personalize_Login_Plugin' ) && Personalize_Login_Plugin::is_login_url()) {
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

function indigo_add_maintenance_class( $classes ) {
	if ( !is_user_logged_in() && is_front_page()) {
		$classes[] = 'wp-maintenance';
	}

	return $classes;
}

function indigo_maintenance_mode( $template ) {
	if ( !is_user_logged_in() && is_front_page()) {
		return locate_template( 'holding.php' );
	}

	return $template;
}


add_filter('body_class', 'indigo_add_maintenance_class');
add_action('template_redirect', 'indigo_maintenance_redirect');
add_filter('template_include', 'indigo_maintenance_mode', 99);

