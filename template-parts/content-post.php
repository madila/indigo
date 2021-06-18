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
	if(!get_theme_mod('indigo_hide_post_thumbnail')) {
		indigo_post_thumbnail();
	} ?>

	<?php
	if(get_theme_mod('indigo_show_single_title') ) : ?>
		<header class="entry-header archive-entry">
			<?php if ( is_singular() ) : ?>
				<?php the_title( '<h1 class="entry-title default-max-width">', '</h1>' ); ?>
			<?php else : ?>
				<?php the_title( sprintf( '<h2 class="entry-title default-max-width"><a href="%s">', esc_url( get_permalink() ) ), '</a></h2>' ); ?>
			<?php endif; ?>
		</header><!-- .entry-header -->
	<?php endif; ?>

	<div class="entry-content">
		<?php
		the_content();

		 if ( 'post' === get_post_type() ) : ?>
		<div class="entry-meta">
			<?php
			indigo_posted_on();
			indigo_posted_by();
			?>
		</div><!-- .entry-meta -->
		<?php endif;

		wp_link_pages( array(
			'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'indigo' ),
			'after'  => '</div>',
		) );
		?>
	</div><!-- .entry-content -->

	<?php if ( get_edit_post_link() ) : ?>
		<footer class="entry-footer">
			<?php
			edit_post_link(
				sprintf(
					wp_kses(
					/* translators: %s: Name of current post. Only visible to screen readers */
						__( 'Edit <span class="screen-reader-text">%s</span>', 'indigo' ),
						array(
							'span' => array(
								'class' => array(),
							),
						)
					),
					get_the_title()
				),
				'<span class="edit-link">',
				'</span>'
			);
			?>
		</footer><!-- .entry-footer -->
	<?php endif; ?>
</article><!-- #post-<?php the_ID(); ?> -->
