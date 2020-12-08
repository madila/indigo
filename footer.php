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
		(get_theme_mod('indigo_display_copyright') == '1') ? $copyright_notice : '',
		apply_filters( 'indigo_site_info', get_theme_mod( 'indigo_site_info' ) )
	);
	?>
	<?php if($site_info = get_theme_mod('indigo_site_info')) { ?>
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
		<span class="screen-reader-text"><?php
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
