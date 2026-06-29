<?php

function cc_mime_types($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');

/**
 * Disables the polyfill.io script in Site Reviews.
 * Paste this in your active theme's functions.php file.
 * @return bool
 */
add_filter('site-reviews/assets/polyfill', '__return_false');