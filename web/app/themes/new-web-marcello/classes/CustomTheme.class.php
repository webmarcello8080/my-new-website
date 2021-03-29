<?php

namespace NewWebMarcello;

class CustomTheme{
   
   public function __construct(){
      add_action( 'after_setup_theme', array($this, 'custom_logo') );
      add_action( 'after_setup_theme', array($this, 'html5_markup') );

      add_theme_support( 'post-thumbnails' );
      add_theme_support( 'title-tag' );
      add_theme_support( 'automatic-feed-links' );
   }

   public function custom_logo(){
      $args = array(
        'header-text' => array( 'site-title', 'site-description' ),
        'width'              => 400,
        'height'             => 60,
        'flex-width'         => true,
        'flex-height'        => true,
      );

      add_theme_support( 'custom-logo', $args );
   }

   public function html5_markup(){
      $args = array(
         'search-form',
         'comment-form',
         'comment-list',
         'gallery',
         'caption',
      );

      add_theme_support( 'html5', $args );
   }
}