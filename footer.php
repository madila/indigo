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
<footer id="colophon" class="site-footer alignfull">
	<?php
	$copyright_notice = sprintf('Copyright &copy; %1s',
		date( 'Y' )
	);
	echo sprintf( '<p class="copyright-notice alt-font py-3"><small>%1s %2s</small></p>',
		(get_theme_mod('indigo_display_copyright') == '1') ? $copyright_notice : '',
		apply_filters( 'indigo_site_info', get_theme_mod( 'indigo_site_info' ) )
	);
	?>
</footer><!-- #colophon -->
</div><!-- #page -->
<?php get_sidebar('modal'); ?>
<?php wp_footer(); ?>

</body>
</html>
