<?php

namespace NewWebMarcello\Frontend;

class Head{
   
   public function __construct($args){
      // REMOVE WP EMOJI
      if(isset($args['remove_emoji']) && $args['remove_emoji']){
         remove_action('wp_head', 'print_emoji_detection_script', 7);
         remove_action('wp_print_styles', 'print_emoji_styles');
         remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
         remove_action( 'admin_print_styles', 'print_emoji_styles' );
      }

      // remove meta genarator
      if(isset($args['remove_wp_generator']) && $args['remove_wp_generator']){
         remove_action('wp_head', 'wp_generator');
      }

      // include the CSS and JS
      add_action('wp_enqueue_scripts', array( $this, 'load_assets'));

      // include metatag on head
      if(isset($args['metatag']) && $args['metatag']){
         add_action( 'wp_head', array( $this, 'load_metatag'));
      }

      // include pingback link on head
      if(isset($args['link']) && $args['link']){
         add_action( 'wp_head', array( $this, 'load_link'));
      }

      // include async on script
      add_filter('clean_url',  array( $this, 'add_async_forscript'), 11, 1);

   }

   public function load_assets(){
      wp_enqueue_style( 'new_web_marcello-stylesheet', get_template_directory_uri() . '/dist/css/styles.css', array(), '1.0.0', 'all' );
      wp_enqueue_script( 'new_web_marcello-scripts', get_template_directory_uri() . '/dist/js/scripts.js#asyncload', array('jquery'), '1.0.0', true );
   }

   public function load_metatag(){
      ?>
      <!--=== META TAGS ===-->
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
      <meta charset="<?php bloginfo( 'charset' ); ?>" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
      <?php
   }

   public function load_link(){
      ?>
      <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
      <?php
   }

   public function add_async_forscript($url)
   {
      if (strpos($url, '#asyncload')===false)
         return $url;
      else if (is_admin())
         return str_replace('#asyncload', '', $url);
      else
         return str_replace('#asyncload', '', $url)."' async='async"; 
   }
}