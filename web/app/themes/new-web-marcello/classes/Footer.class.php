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
         'before_title'  => '<h6 class="footer-area-title">',
         'after_title'   => '</h6>',
      ));

      register_sidebar( array(
         'name'          => 'Footer area two',
         'id'            => 'footer_area_two',
         'description'   => 'Top footer section on the righthand side',
         'before_widget' => '<section class="footer-area footer-area-two">',
         'after_widget'  => '</section>',
         'before_title'  => '<h6 class="footer-area-title">',
         'after_title'   => '</h6>',
      ));

      register_sidebar( array(
         'name'          => 'Footer area three',
         'id'            => 'footer_area_three',
         'description'   => 'First small footer section on the righthand side',
         'before_widget' => '<section class="footer-area footer-area-three">',
         'after_widget'  => '</section>',
         'before_title'  => '<h6 class="footer-area-title">',
         'after_title'   => '</h6>',
      ));

      register_sidebar( array(
         'name'          => 'Footer area four',
         'id'            => 'footer_area_four',
         'description'   => 'Second small footer section on the righthand side',
         'before_widget' => '<section class="footer-area footer-area-four">',
         'after_widget'  => '</section>',
         'before_title'  => '<h6 class="footer-area-title">',
         'after_title'   => '</h6>',
      ));

      register_sidebar( array(
         'name'          => 'Footer area five',
         'id'            => 'footer_area_five',
         'description'   => 'Third small footer section on the righthand side',
         'before_widget' => '<section class="footer-area footer-area-five">',
         'after_widget'  => '</section>',
         'before_title'  => '<h6 class="footer-area-title">',
         'after_title'   => '</h6>',
      ));

      register_sidebar( array(
         'name'          => 'Copyright Area',
         'id'            => 'copyright_area',
         'description'   => 'Copyright section on the bottom of the site',
         'before_widget' => '<section class="container-fluid text-center py-2 copyright-area">',
         'after_widget'  => '</section>',
         'before_title'  => '<h6 class="copyright-area-title">',
         'after_title'   => '</h6>',
      ));
   }
}