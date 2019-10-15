<?php
/**
 * The sidebar containing the main widget area
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Indigo
 */

if ( ! is_active_sidebar( 'entry-sidebar' ) ) {
	return;
}
?>

<aside id="secondary" class="area-inverted alignfull">
    <div class="aligncontainer widget-area">
        <?php dynamic_sidebar( 'entry-sidebar' ); ?>
    </div>
</aside><!-- #secondary -->
