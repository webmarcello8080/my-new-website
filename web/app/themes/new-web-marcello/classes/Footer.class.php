<?php

namespace NewWebMarcello;

class Footer{

   public function __construct(){
      add_action( 'wp_footer', array($this, 'deregister_scripts') );
      add_action( 'widgets_init', array($this, 'register_widget_areas') );
   }

   public function deregister_scripts(){
      wp_deregister_script( 'wp-embed' );
   }

   public function register_widget_areas() {

      register_sidebar( array(
         'name'          => 'Footer area one',
         'id'            => 'footer_area_one',
         'description'   => 'Big footer section on the lefthand side',
         'before_widget' => '<section class="footer-area footer-area-one">',
         'after_widget'  => '</section>',
         'before_title'  => '<h4>',
         'after_title'   => '</h4>',
      ));
   
      register_sidebar( array(
         'name'          => 'Copyright Area',
         'id'            => 'copyright_area',
         'description'   => 'Copyright section on the bottom of the site',
         'before_widget' => '<section class="container-fluid text-center copyright-area">',
         'after_widget'  => '</section>',
         'before_title'  => '<h4>',
         'after_title'   => '</h4>',
      ));
   }
}