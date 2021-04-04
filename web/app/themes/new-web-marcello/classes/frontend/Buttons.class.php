<?php

namespace NewWebMarcello\Frontend;

class Buttons{

   public function get_login($text, $target = '_self', $classes = ''){
      ?>
      <a class="<?= $classes ?>" 
         href="<?= esc_url( wp_login_url( get_permalink() ) ); ?>" 
         alt="<?php esc_attr_e( $text, 'new_web_marcello' ); ?>"
         target="<?= $target ?>">
         <?php _e( $text, 'new_web_marcello' ); ?>
      </a>
      <?php
   }
}