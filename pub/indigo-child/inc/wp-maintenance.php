<?php

if(!function_exists('ofc_framework_maintenance_redirect')) {

	class Indigo_Redirect {

		private $wp_maintenance = false;

		function __constructor() {

			if ( ( defined( 'WP_MAINTENANCE' ) && WP_MAINTENANCE ) ) {
				$this->wp_maintenance = true;
				$this->do_maintenance();
			}

		}

		function do_maintenance() {
			add_action( 'template_redirect', array($this, 'maintenance_redirect') );
			add_filter( 'template_include', array($this, 'maintenance_mode'), 99 );
		}

		function maintenance_redirect() {

			if ( is_front_page() ) {
				return null;
			}

			// we do not redirect ajax calls
			if ( ( defined( 'DOING_AJAX' ) && DOING_AJAX ) ) {
				return null;
			}

			// Deactivate Maintenance Redirection for Login Routes
			if ( class_exists( 'Personalize_Login_Plugin' ) && Personalize_Login_Plugin::is_login_url() ) {
				return null;
			}

			// we do not redirect visitors or logged-in users that are not using /wp-admin/
			if ( is_user_logged_in() || is_admin() ) {
				return null;
			}

			$front_page = get_option( 'page_on_front' );
			$redirect_url = $front_page !== "0" ? get_permalink( $front_page ) : home_url( '/' );
			wp_redirect( $redirect_url );
			exit;
		}


		function maintenance_mode( $template ) {
			if ( ! is_user_logged_in() && is_front_page() ) {
				return locate_template( 'holding.php' );
			}

			return $template;
		}


	}

	$wp_maintenance = new Indigo_Redirect();

}
