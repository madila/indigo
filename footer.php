<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Indigo
 */

?>
</div><!-- .site-content-wrapper -->
</div><!-- .site-content -->
<?php get_sidebar('pre-footer'); ?>
<footer id="colophon" class="site-footer">
	<?php
	$copyright_notice = sprintf('Copyright &copy; %1s',
		date( 'Y' )
	);

	echo sprintf( '<p class="copyright-notice"><small>%1s %2s</small></p>',
		(get_theme_mod('indigo_display_copyright')) ? $copyright_notice : '',
		apply_filters( 'indigo_site_info', get_theme_mod( 'indigo_site_info' ) )
	);
	?>
	<small class="site-theme-info has-text-align-center d-block">
		<span><?php
		/* translators: 1: Theme name, 2: Theme author. */
		printf( esc_html__( '%1$s developed by %2$s.', 'indigo' ), get_bloginfo('site_title'), '<a href="https://rubenmadila.com/">Rub&eacute;n Madila</a>' );
			?></span>
	</small><!-- .site-info -->
</footer><!-- #colophon -->
</div><!-- #page -->
<?php get_sidebar('modal'); ?>
<?php wp_footer(); ?>

</body>
</html>
