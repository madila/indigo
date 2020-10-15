<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Indigo
 */

get_header();
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">

		<?php if ( have_posts() ) : ?>

			<header class="<?php echo (!get_theme_mod('indigo_show_archive_title')) ? 'screen-reader-archive-header screen-reader-text' : 'archive-header'; ?>">
				<?php
				the_archive_title( '<h1 class="page-title archive-title">', '</h1>' );
				the_archive_description( '<div class="archive-description">', '</div>' );
				?>

			</header><!-- .page-header -->

			<?php get_template_part('template-parts/content-breadcrumbs'); ?>

			<?php
			$archive_content = get_page_content_for_archive();
			if($archive_content) :?>
				<div class="entry-content">
					<?php echo apply_filters('the_content', $archive_content->post_content); ?>
				</div>
			<?php endif; ?>
			<div class="<?php indigo_conditional_class('archive_alignment', 'align', 'feed-container', true); ?>">

			<?php
			/* Start the Loop */
			while ( have_posts() ) :
				the_post();

				/*
				 * Include the Post-Type-specific template for the content.
				 * If you want to override this in a child theme, then include a file
				 * called content-___.php (where ___ is the Post Type name) and that will be used instead.
				 */
				get_template_part( is_single() ? 'template-parts/content' : 'template-parts/content-archive', get_post_type() );


			endwhile;

			the_posts_navigation();

		else :

			get_template_part( 'template-parts/content', 'none' );

		endif;
		?>
			</div>
		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_sidebar();
get_footer();
