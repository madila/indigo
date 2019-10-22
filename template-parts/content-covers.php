<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Indigo
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class('section section-cover half-height'); ?>>
	<?php indigo_post_thumbnail(true); ?>
	<div class="section-overlay">
		<a class="section-content v-align text-<?php echo apply_filters('section_cover_horizontal_align', 'center'); ?>" href="<?php the_permalink(); ?>">
			<div class="v-align-<?php echo apply_filters('section_cover_vertical_align', 'middle'); ?>">
				<div class="p-3">
					<?php the_title('<h2 class="display-4 my-0">', '</h2>'); ?>
					<?php if(has_excerpt(get_the_ID())) { ?>
						<hr/>
						<div class="section-description">
							<?php the_excerpt(); ?>
						</div>
					<?php } ?>
				</div>
			</div>
		</a>
	</div>
</article><!-- #post-<?php the_ID(); ?> -->
