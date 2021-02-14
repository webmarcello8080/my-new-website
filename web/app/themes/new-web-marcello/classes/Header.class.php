<?php

namespace NewWebMarcello;

class Header{
   
   public function __construct(){
      // REMOVE WP EMOJI
      remove_action('wp_head', 'print_emoji_detection_script', 7);
      remove_action('wp_print_styles', 'print_emoji_styles');

      remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
      remove_action( 'admin_print_styles', 'print_emoji_styles' );

      // remove meta genarator
      remove_action('wp_head', 'wp_generator');

      add_action('wp_enqueue_scripts', array( $this, 'load_assets'));
   }

   public function load_assets(){
      wp_enqueue_style( 'new_web_marcello-stylesheet', get_template_directory_uri() . '/dist/css/styles.css', array(), '1.0.0', 'all' );

      wp_enqueue_script( 'new_web_marcello-scripts', get_template_directory_uri() . '/dist/js/scripts.js', array('jquery'), '1.0.0', true );
   }

   public function get_logo(){
      ?>
         <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="logo-link" rel="home" >
            <?php
            if ( has_custom_logo() ) {
                  $custom_logo_id = get_theme_mod( 'custom_logo' );
                  $logo = wp_get_attachment_image_src( $custom_logo_id , 'full' );

                  echo '<img class="logo-img" src="' . esc_url( $logo[0] ) . '" alt="' . get_bloginfo( 'name' ) . '">';
            } else {
                  echo '<h1>'. get_bloginfo('name') .'</h1>';
                  echo '<h3>'. get_bloginfo('description') .'</h3>';
            }
            ?>         
         </a>
      <?php
   }
}