<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Indigo
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

		<?php
		the_content();

		wp_link_pages( array(
			'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'indigo' ),
			'after'  => '</div>',
		) );
		?>

	<?php indigo_edit_link(); ?>
</article><!-- #post-<?php the_ID(); ?> -->
