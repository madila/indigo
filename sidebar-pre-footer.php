<?php
/**
 * The sidebar containing the main widget area
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Indigo
 */

if ( ! is_active_sidebar( 'pre-footer' ) ) {
	return;
}
?>

<aside id="tertiary" class="pre-footer">
	<div class="aligncontainer">
		<div class="<?php indigo_conditional_class('indigo_pre_footer_alignment', 'flex', 'widget-area', true); ?>">
			<?php dynamic_sidebar( 'pre-footer' ); ?>
		</div>
	</div>
</aside><!-- #secondary -->
