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
	<style>
		article.full-height {
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
			flex-direction: column;
		}
	</style>
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e('Skip to content', 'indigo'); ?></a>
	<div class="site-content-wrapper">
		<div id="content" class="site-holding-content">

			<div id="primary" class="content-area">

				<main id="main" class="site-main">
					<article class="full-height">
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
					</article>
				</main><!-- #main -->
			</div><!-- #primary -->

			<footer id="colophon" class="site-footer">
				<?php
				$copyright_notice = sprintf('Copyright &copy; %1s',
					date( 'Y' )
				);
				echo sprintf( '<p class="copyright-notice"><small>%1s %2s</small></p>',
					(get_theme_mod('indigo_display_copyright') == '1') ? $copyright_notice : '',
					apply_filters( 'indigo_site_info', get_theme_mod( 'indigo_site_info' ) )
				);
				?>
				<?php if($site_info = get_option('indigo_site_info')) { ?>
					<p>
						<small class="site-info">
							<?php echo apply_filters('indigo_site_info', $site_info); ?>
						</small><!-- .site-info -->
					</p>
				<?php } ?>
				<small class="site-theme-info has-text-align-center d-block">
					<a href="<?php echo esc_url( __( 'https://wordpress.org/', 'indigo' ) ); ?>" class="screen-reader-text">
						<?php
						/* translators: %s: CMS name, i.e. WordPress. */
						printf( esc_html__( 'Proudly powered by %s', 'indigo' ), 'WordPress' );
						?>
						<span class="sep"> | </span>
					</a>
					<?php
					/* translators: 1: Theme name, 2: Theme author. */
					printf( esc_html__( '%1$s developed by %2$s.', 'indigo' ), get_bloginfo('site_title'), '<a href="https://rubenmadila.com/">Rub&eacute;n Madila</a>' );
					?>
				</small><!-- .site-info -->
			</footer><!-- #colophon -->
		</div><!-- #page -->

		<?php wp_footer(); ?>

</body>
</html>
