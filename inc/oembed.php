<?php

/**
 * Adds the `autoplay` query string argument to embedded YouTube videos
 */
function wpse5362_autoplay_youtube_oembed( $provider, $url, $args ) {
	if (strpos($provider, 'youtube')!==FALSE) {
		$provider = add_query_arg(array(
			'autoplay' => 1,
			'modestbranding' => 1,
			'mode' => 'opaque',
			'rel' => 0,
			'autohide' => 1,
			'showinfo' => 0,
			'controls' => 0,
			'wmode' => 'transparent'
		), $provider);
	}

	return $provider;
}
add_filter('oembed_fetch_url', 'wpse5362_autoplay_youtube_oembed', 10, 3);

/**
 * https://gist.github.com/richaber/746b5aa389ed71b79859
 * Add params back to oEmbed provider request URL.
 *
 * WordPress runs the embed URL through urlencode prior to constructing it's oEmbed provider endpoint call.
 * This renders any passed in URL query params useless for Vimeo embeds (and probably others).
 * This filter function will decode those URL query param, and add them as proper query args to the provider URL.
 *
 * The first function param, $provider, is the oEmbed provider endpoint.
 * The optional second param, $url, is the original embed URL.
 * The optional third param, $args, is not helpful for this specific purpose, so is omitted.
 *
 * The oembed_fetch_url filter has been available @since WordPress 3.5.0.
 *
 * @see WP_oEmbed::fetch()
 * @see add_query_arg
 *
 * @link https://developer.wordpress.org/reference/hooks/oembed_fetch_url/
 * @link https://developer.wordpress.org/reference/functions/add_query_arg/
 *
 * @param string $provider URL of the oEmbed provider.
 * @param string $url      URL of the content to be embedded.
 *
 * @return string
 */
function prfx_oembed_fetch_url( $provider, $url ) {
	/**
	 * Parse the original embed $url for any URL query params.
	 *
	 * If the query component doesn't exist in $url, will return null. May return false for seriously malformed URLs.
	 *
	 * @var bool|null|string $php_url_query
	 */
	//var_dump('Provider: ', $provider, '<hr>URL: ', $url, '<hr>'.'PHP URL QUERY:');

	//echo urlencode('&'); die();

	$php_url_query = parse_url( $url, PHP_URL_QUERY );

	//var_dump($php_url_query, '<hr>');

	if ( empty( $php_url_query ) ) {
		return $provider;
	}
	/**
	 * Split the $provider URL on '%3F', the urlencoded equivalent of the question mark (?) character.
	 *
	 * Should return 2 array members, where $provider_parts['0'] will be the oEmbed provider URL, minus the urlencoded
	 * query params, and $provider_parts['1'] will be the urlencoded query params that are not helpful, and they will
	 * be replaced by the $php_url_query.
	 *
	 * @var array $provider_parts
	 */
	$provider_parts = explode( '%3F', urlencode($provider) );

	if ( empty( $provider_parts['1'] ) ) {
		return $provider;
	}

	//var_dump($provider_parts, '<hr>'); die();
	/**
	 * Parse $php_url_query as if it were a URL query string, and store the variables in $query_args array.
	 *
	 * @var array $query_args
	 */
	parse_str( $php_url_query, $query_args );

	/**
	 * Add the query args to the provider URL segment that was stripped of the urlencoded query params.
	 *
	 * @var string $provider
	 */
	$provider = add_query_arg( $query_args, $provider_parts['0'] );

	//var_dump(urldecode($provider));

	//var_dump($provider); die();

	$provider = urldecode($provider.urlencode('&mute=1&autoplay=1'));

	return $provider;
}
//add_filter( 'oembed_fetch_url', 'prfx_oembed_fetch_url', 10, 2 );

/**
 * Add params back to embed src in markup returned by oEmbed provider.
 *
 * Some providers, YouTube in particular, allow more params in their oEmbed APIs, than what they return in their
 * embed markup src. For example, embedding the URL
 * https://youtu.be/XCCwCazf4Cc?modestbranding=0&theme=dark&autoplay=1&rel=0,
 * results in return markup like iframe src="https://www.youtube.com/embed/XCCwCazf4Cc?feature=oembed".
 * Note the dropped params, modestbranding=0&theme=dark&autoplay=1&rel=0, in the iframe src.
 * We can compare the extracted URL from the markup src with the original URL sent to the provider to see if we've
 * dropped any URL params and need to add them back.
 *
 * The first function param, $data, is the oEmbed provider's returned embed markup.
 * The optional second param, $url, is the embed URL that was sent to the oEmbed provider.
 * The optional third param, $args, is not helpful for this specific purpose, so is omitted.
 *
 * The oembed_result filter has been available @since WordPress 2.9.0.
 *
 * @see WP_oEmbed::get_html()
 * @see wp_extract_urls
 * @see add_query_arg
 *
 * @link https://developer.wordpress.org/reference/hooks/oembed_result/
 * @link https://developer.wordpress.org/reference/functions/wp_extract_urls/
 * @link https://developer.wordpress.org/reference/functions/add_query_arg/
 *
 * @param string $data The returned oEmbed HTML.
 * @param string $url  URL that was passed to the oEmbed provider.
 *
 * @return string
 */
function prfx_oembed_result( $data, $url ) {
	/**
	 * Extract the oEmbed URL from the oEmbed provider's returned content.
	 *
	 * @var array $extracted_urls
	 */
	$extracted_urls = wp_extract_urls( $data );
	if ( empty( $extracted_urls[0] ) ) {
		return $data;
	}
	/**
	 * Parse the original URL that was sent to the oEmbed provider for any URL query params.
	 *
	 * If the query component doesn't exist, will return null. May return false for seriously malformed URLs.
	 *
	 * @var bool|null|string $original_url_query
	 */
	$original_url_query = parse_url( $url, PHP_URL_QUERY );
	if ( empty( $original_url_query ) ) {
		return $data;
	}
	/**
	 * For easier identification, assign a variable name to $extracted_urls[0].
	 *
	 * @var string $embed_src
	 */
	$embed_src = $extracted_urls[0];
	/**
	 * Parse the extracted URL for any URL query params.
	 *
	 * If the query component doesn't exist, will return null. May return false for seriously malformed URLs.
	 *
	 * @var bool|null|string $embed_url_query
	 */
	$embed_url_query = parse_url( $embed_src, PHP_URL_QUERY );
	/**
	 * Parse $embed_url_query as if it were a URL query string, and store the variables in $embed_query_args array.
	 *
	 * @var array $embed_query_args
	 */
	parse_str( $embed_url_query, $embed_query_args );
	/**
	 * Parse $original_url_query as if it were a URL query string, and store the variables in $original_query_args array.
	 *
	 * @var array $original_query_args
	 */
	parse_str( $original_url_query, $original_query_args );
	/**
	 * Merge the two arrays of query args together.
	 *
	 * @var array $merged_args
	 */
	$merged_args = array_merge( $embed_query_args, $original_query_args );
	/**
	 * Reconstitute the embed src URL with all the query args.
	 *
	 * @var string $new_embed_src
	 */
	$new_embed_src = add_query_arg( $merged_args, $embed_src );
	/**
	 * Replace the existing embed_src URL with the reconstituted new_embed_src URL.
	 *
	 * @var string $data
	 */
	$data = str_replace( $embed_src, $new_embed_src, $data );
	return $data;
}
add_filter( 'oembed_result', 'prfx_oembed_result', 10, 2 );
