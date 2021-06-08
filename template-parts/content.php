<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Indigo
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<header class="entry-header archive-entry">
		<?php if ( is_singular() ) : ?>
			<?php the_title( '<h1 class="entry-title default-max-width">', '</h1>' ); ?>
		<?php else : ?>
			<?php the_title( sprintf( '<h2 class="entry-title default-max-width"><a href="%s">', esc_url( get_permalink() ) ), '</a></h2>' ); ?>
		<?php endif; ?>

	</header><!-- .entry-header -->
	<div class="entry-content">
		<?php
		the_excerpt();

		wp_link_pages( array(
			'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'indigo' ),
			'after'  => '</div>',
		) );
		?>

		<div class="wp-read-more wp-block-buttons is-content-justification-left has-small-font-size">
			<div class="wp-block-button is-style-outline"><a class="wp-block-button__link has-logo-green-color has-text-color" href="<?php the_permalink(); ?>">Read more</a></div>
		</div>
	</div><!-- .entry-content -->

	<footer class="entry-footer">
		<?php indigo_entry_footer(); ?>
	</footer><!-- .entry-footer -->
	<?php indigo_edit_link(); ?>
</article><!-- #post-<?php the_ID(); ?> -->
