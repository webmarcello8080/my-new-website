<?php

if (!defined('WP_UNINSTALL_PLUGIN')) {
    die;
}

delete_option( 'news-search-engine-api-key' );
delete_option( 'news-search-engine-default-page-size' );
delete_option( 'news-search-engine-settings-message' );
delete_option( 'news-search-engine-form-message' );
delete_option( 'news-search-engine-http' );

add_shortcode( 'news-search-engine', '__return_false' );