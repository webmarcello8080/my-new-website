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

      // REMOVE WP EMOJI
      if(isset($args['remove_global_style']) && $args['remove_global_style']){
         add_action( 'wp_enqueue_scripts', [$this, 'remove_global_styles'] );
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
      add_filter('script_loader_tag',  array( $this, 'add_async_script'), 10, 2);
      add_filter('style_loader_tag',  array( $this, 'add_async_style'), 10, 2);
   }

   public function remove_global_styles(){
      wp_dequeue_style( 'global-styles' );
   }

   public function load_assets(){
      wp_enqueue_style( 'new_web_marcello-stylesheet', get_template_directory_uri() . '/dist/css/styles.css', array(), '1.0.0', 'all' );
      wp_enqueue_script( 'new_web_marcello-scripts', get_template_directory_uri() . '/dist/js/scripts.js', array('jquery'), '1.0.0', true );
   }

   public function load_metatag(){
      ?>
      <!--=== META TAGS ===-->
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
      <meta charset="<?php bloginfo( 'charset' ); ?>" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
      <meta name="description" content="<?= is_single() ? get_the_excerpt() : bloginfo('name'); echo " - "; bloginfo('description') ?>">
      <?php
   }

   public function load_link(){
      ?>
      <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
      <?php
   }
   
   // add script handles to the array below
   public function add_async_script($tag, $handle) {
      $scripts_to_async = array('new_web_marcello-scripts');
      
      foreach($scripts_to_async as $async_script) {
         if ($async_script === $handle) {
            return str_replace(' src', ' async="async" src', $tag);
         }
      }
      return $tag;
   }

   // add script handles to the array below
   public function add_async_style($tag, $handle) {
      $scripts_to_async = array('new_web_marcello-stylesheet');
      
      foreach($scripts_to_async as $async_script) {
         if ($async_script === $handle) {
            return str_replace(' href', ' async="async" href', $tag);
         }
      }
      return $tag;
   }
}