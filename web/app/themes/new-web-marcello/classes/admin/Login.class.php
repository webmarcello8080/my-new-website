<?php

namespace NewWebMarcello\Admin;

class Login{

   public function __construct(){
      add_action( 'login_head', array($this, 'custom_login_styles') );
      add_action('login_headerurl', array($this, 'login_header_url'));
      add_action('login_footer', array($this, 'login_footer'));
      // add_action('login_headertext', array($this, 'login_header_link_title'));
   }

   // Customize login styles
   public function custom_login_styles(){
      ?><style type="text/css">
      /* Change login page background */
      body{
         background-color: #F2F9FF;
         position: relative;
      }
      body.login h1 a { 
         background-image: url("<?php echo get_template_directory_uri(); ?>/dist/images/logos/marcello-logo.png"); 
         width: 100% !important;
         -webkit-background-size: 100% !important;
         -moz-background-size: 100% !important;
         -o-background-size: 100% !important;
         background-size: 100% !important;
         height: 60px !important;
      }
      body .login-background-image{
         position: absolute;
         top: 0;
         right: 0px;
         z-index: -1;
         pointer-events: none;
      }
      .login form{
         box-shadow: 0 20px 30px rgba(0,0,0,0.4) !important;
      }
      </style><?php
   }

   public function login_header_link_title(){
      return "Wordpress, Freelancing and Design";
   }

   // Customize login header link
   public function login_header_url(){
      return get_home_url();
   }

   public function login_footer(){
      $hero_background = file_get_contents( get_template_directory() . "/dist/images/hero-background.svg");
      echo '<div class="login-background-image">' . $hero_background  .'</div>';
   }
}