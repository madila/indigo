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
	if(get_theme_mod('indigo_show_page_title')) : ?>
		<header class="entry-header page-header">
			<?php
			the_archive_title( '<h1 class="entry-title page-title">', '</h1>' );
			the_archive_description( '<div class="archive-description">', '</div>' );
			?>
		</header><!-- .page-header -->
	<?php endif; ?>

	<?php indigo_post_thumbnail(); ?>

	<div class="entry-content">
		<?php
		the_content();

		wp_link_pages( array(
			'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'indigo' ),
			'after'  => '</div>',
		) );
		?>
	</div><!-- .entry-content -->

	<?php indigo_edit_link(); ?>
</article><!-- #post-<?php the_ID(); ?> -->
