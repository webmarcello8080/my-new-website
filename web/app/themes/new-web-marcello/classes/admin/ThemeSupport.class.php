<?php

namespace NewWebMarcello\Admin;

class ThemeSupport{
   
   public function __construct(){
      add_action( 'after_setup_theme', array($this, 'custom_logo') );
      add_action( 'after_setup_theme', array($this, 'html5_markup') );
      add_action( 'after_setup_theme', array($this, 'post_formats') );

      add_theme_support( 'post-thumbnails' );
      add_theme_support( 'title-tag' );
      add_theme_support( 'automatic-feed-links' );
      add_theme_support( 'customize-selective-refresh-widgets' );
      add_theme_support( 'align-wide' );
      add_theme_support( 'editor-styles' );
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

   public function post_formats(){
      $post_formats = array('aside','image','gallery','video','audio','link','quote','status');
      add_theme_support( 'post-formats', $post_formats);
   }
}