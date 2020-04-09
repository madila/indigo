<?php

function indigo_remove_tax_name( $title, $sep, $seplocation ) {
	if ( is_tax() ) {
		$term_title = single_term_title( '', false );

		// Determines position of separator
		if ( 'right' == $seplocation ) {
			$title = $term_title . " $sep ";
		} else {
			$title = " $sep " . $term_title;
		}
	}

	return $title;
}
//add_filter( 'wp_title', 'indigo_remove_tax_name', 10, 3 );
