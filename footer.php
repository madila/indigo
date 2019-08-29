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

	</div><!-- #content -->

	<footer id="colophon" class="site-footer">
        <?php if ( is_active_sidebar( 'pre-footer' ) ) { ?>
            <aside id="secondary" class="widget-area">
                <?php dynamic_sidebar( 'pre-footer' ); ?>
            </aside><!-- #secondary -->
        <?php } ?>

        <div class="site-info">
			<a href="<?php echo esc_url( __( 'https://wordpress.org/', 'indigo' ) ); ?>">
				<?php
				/* translators: %s: CMS name, i.e. WordPress. */
				printf( esc_html__( 'Proudly powered by %s', 'indigo' ), 'WordPress' );
				?>
			</a>
			<span class="sep"> | </span>
				<?php
				/* translators: 1: Theme name, 2: Theme author. */
				printf( esc_html__( 'Theme: %1$s by %2$s.', 'indigo' ), 'indigo', '<a href="http://underscores.me/">Ruben Madila for Ollie Ford & Co</a>' );
				?>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
