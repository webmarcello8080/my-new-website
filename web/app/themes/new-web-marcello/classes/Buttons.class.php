<?php

namespace NewWebMarcello;

class Buttons{

   public function get_login($test, $target = '_self', $classes = ''){
      ?>
      <a class="<?= $classes ?>" 
         href="<?= esc_url( wp_login_url( get_permalink() ) ); ?>" 
         alt="<?php esc_attr_e( $test, 'new_web_marcello' ); ?>"
         target="<?= $target ?>">
         <?php _e( $test, 'new_web_marcello' ); ?>
      </a>
      <?php
   }
}