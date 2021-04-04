<?php

namespace NewWebMarcello\Frontend;

class Menu{

   public function __construct(){
      add_action( 'init', array($this, 'register_menus') );
   }

   public function register_menus() {
      register_nav_menus(
         array(
            'header-menu' => __( 'Header Menu' ),
         )
      );
   }
}