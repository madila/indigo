<?php
/**
 * The sidebar containing the main widget area
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Indigo
 */

if ( ! is_active_sidebar( 'modal' ) ) {
	return;
}
?>

<div id="modal-box">
	<div class="indigo-modal">
		<a href="#" class="close-btn is-pulled-right">
			<i class="fas fa-times"></i>
			<span class="sr-only">Close</span>
		</a>
		<div>
			<?php dynamic_sidebar( 'modal' ); ?>
		</div>
	</div>
</div><!-- #secondary -->
