<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Indigo
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class('section two-thirds-height'); ?>>

	<?php indigo_post_thumbnail(); ?>

	<a class="section-content v-align text-center" href="<?php the_permalink(); ?>">
		<div class="v-align-middle">
			<?php the_title('<h2 class="display-3 text-light">', '</h2>'); ?>
		</div>
	</a>

</article><!-- #post-<?php the_ID(); ?> -->
