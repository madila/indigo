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

<aside id="secondary" class="widget-area area-inverted alignfull">
    <div class="aligncontainer">
        <?php dynamic_sidebar( 'entry-sidebar' ); ?>
    </div>
</aside><!-- #secondary -->
