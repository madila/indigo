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
	<div class="widget-area">
		<?php dynamic_sidebar( 'pre-footer' ); ?>
	</div>
</aside><!-- #secondary -->
