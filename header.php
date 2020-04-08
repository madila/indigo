<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Indigo
 */

?>
<!doctype html>
<html <?php language_attributes(); ?> class="site-loading">
<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e('Skip to content', 'indigo'); ?></a>
	<header id="masthead" <?php indigo_header_class(); ?>>
		<div class="site-header-wrapping" data-header-bg>
			<?php get_sidebar('pre-header'); ?>
			<div class="site-header-container">
				<div class="site-branding">
					<?php
					the_custom_logo();
					if (is_front_page() && is_home()) :
						?>
						<h1 class="site-title"><a href="<?php echo esc_url(home_url('/')); ?>"
												  rel="home"><?php bloginfo('name'); ?></a></h1>
					<?php
					else :
						?>
						<a href="<?php echo esc_url(home_url('/')); ?>" class="h1 site-title"
						   rel="home"><?php bloginfo('name'); ?></a>
					<?php
					endif;
					$indigo_description = get_bloginfo('description', 'display');
					if ($indigo_description || is_customize_preview()) :
						?>
						<span class="site-description"><?php echo $indigo_description; /* WPCS: xss ok. */ ?></span>
					<?php endif; ?>

					<?php if (has_nav_menu('site-navigation')) : ?>
						<button class="menu-toggle" data-target="site-navigation" aria-controls="primary-menu" aria-expanded="false">
							<span></span>
							<span class="screen-reader-text"><?php esc_html_e('Primary Menu', 'indigo'); ?></span>
						</button>
					<?php endif; ?>
				</div><!-- .site-branding -->

				<?php if (has_nav_menu('site-navigation')) : ?>
					<nav id="site-navigation" class="main-navigation">
						<?php
						wp_nav_menu(array(
							'theme_location' => 'site-navigation',
							'menu_id' => 'primary-menu',
							'menu_class' => 'menu menu-collapse menu-row',
							'container_class' => 'menu-container',
							'fallback' => false
						));
						?>
					</nav><!-- #site-navigation -->
				<?php endif; ?>
			</div>
		</div>
	</header><!-- #masthead -->
	<div class="site-content-wrapper">
	<div id="content" class="site-content">
