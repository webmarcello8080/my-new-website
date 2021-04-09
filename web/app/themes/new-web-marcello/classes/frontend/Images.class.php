<?php

namespace NewWebMarcello\Frontend;

class Images {

   // retrieves the attachment ID from the file URL
   private function get_image_id($image_url) {
      global $wpdb;
      $attachment = $wpdb->get_col($wpdb->prepare("SELECT ID FROM $wpdb->posts WHERE guid='%s';", $image_url ));
      if( $attachment ){
         return $attachment[0];
      }
      return false;
   }

   public function get_image_by_url($image_url, $size = 'thumbnail', $classes = ''){
      $attachment_id = $this->get_image_id($image_url);
      
      if( $attachment_id ){
         $this->get_image_by_id($attachment_id, $size, $classes,$image_url);
      }
   }

   public function get_image_by_id($image_id, $size = 'thumbnail', $classes = '', $original_url = ''){
      if( $image_id ){
         $image_attributes = wp_get_attachment_image_src( $image_id, $size );
         if ( $image_attributes ) { ?>
            <img class="<?= $classes ?>" src="<?= $image_attributes[0]; ?>" width="<?= $image_attributes[1]; ?>" height="<?= $image_attributes[2]; ?>" data-original-url="<?= $original_url ?>" />
         <?php 
         }
      }
   }
}