<?php
/**
 * The sidebar containing the main widget area
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Indigo
 */

if ( ! is_active_sidebar( 'entry-sidebar' ) || get_theme_mod('indigo_sidebar_alignment') === 'none' ) {
	return;
}
?>

<aside id="secondary">
	<div class="<?php indigo_conditional_class('indigo_sidebar_direction', 'flex', 'widget-area', true); ?>">
		<div class="widget-area-content p-content">
			<?php dynamic_sidebar( 'entry-sidebar' ); ?>
		</div>
	</div>
</aside><!-- #secondary -->
