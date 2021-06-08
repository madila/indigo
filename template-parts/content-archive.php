<?php
/**
 * Template part for displaying results in search pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Indigo
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<?php indigo_post_thumbnail(); ?>

	<div class="entry-wrapper">
		<header class="archive-entry-header">

			<?php the_title( sprintf( '<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' ); ?>

			<?php if ( 'post' === get_post_type() ) : ?>
				<div class="entry-meta">
					<?php
					indigo_posted_on();
					indigo_posted_by();
					?>
				</div><!-- .entry-meta -->
			<?php endif; ?>
		</header><!-- .entry-header -->

		<div class="entry-summary">
			<?php the_excerpt(); ?>
			<div class="wp-read-more wp-block-buttons is-content-justification-left has-small-font-size">
				<div class="wp-block-button is-style-outline"><a class="wp-block-button__link has-logo-green-color has-text-color" href="<?php the_permalink(); ?>">Read more</a></div>
			</div>
		</div><!-- .entry-summary -->
	</div>

</article><!-- #post-<?php the_ID(); ?> -->
