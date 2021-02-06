<?php

function _themename_assets() {
  wp_enqueue_style( '_themename-stylesheet', get_template_directory_uri() . '/dist/css/bundle.css', array(), '1.0.0', 'all' );
}
add_action('wp_enqueue_scripts', '_themename_assets');
