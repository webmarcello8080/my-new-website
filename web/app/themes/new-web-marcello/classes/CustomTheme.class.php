<?php

namespace NewWebMarcello;

class CustomTheme{
   
   public function __construct(){
      add_action( 'after_setup_theme', array($this, 'custom_logo') );
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

}