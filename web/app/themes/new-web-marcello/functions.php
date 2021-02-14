<?php

// import classes
foreach (glob( get_template_directory() . "/classes/*.php") as $filename)
{
  include_once $filename;
}

new \NewWebMarcello\CustomTheme();
new \NewWebMarcello\Header();

function new_web_marcello_assets() {
  wp_enqueue_style( 'new_web_marcello-stylesheet', get_template_directory_uri() . '/dist/css/styles.css', array(), '1.0.0', 'all' );

  wp_enqueue_script( 'new_web_marcello-scripts', get_template_directory_uri() . '/dist/js/scripts.js', array('jquery'), '1.0.0', true );
}
add_action('wp_enqueue_scripts', 'new_web_marcello_assets');
