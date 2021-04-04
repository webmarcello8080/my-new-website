<?php

namespace NewWebMarcello\Frontend;

class Header{
   
   public function get_logo($wrapper_classes = '', $logo_classes = ''){
      ?>
         <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="<?= $wrapper_classes ?>" rel="home" >
            <?php
            if ( has_custom_logo() ) {
                  $custom_logo_id = get_theme_mod( 'custom_logo' );
                  $logo = wp_get_attachment_image_src( $custom_logo_id , 'full' );

                  echo '<img class="' . $logo_classes . '" src="' . esc_url( $logo[0] ) . '" alt="' . get_bloginfo( 'name' ) . '">';
            } else {
                  echo '<h1>'. get_bloginfo('name') .'</h1>';
                  echo '<h3>'. get_bloginfo('description') .'</h3>';
            }
            ?>         
         </a>
      <?php
   }
}