<?php
/**
 * The sidebar containing the main widget area
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Indigo
 */

if ( ! is_active_sidebar( 'pre-header' ) ) {
	return;
}
?>

<aside class="pre-header">
	<div class="widget-area">
		<?php dynamic_sidebar( 'pre-header' ); ?>
	</div>
</aside><!-- #secondary -->
