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

   public function home_page_title(){
      // get theme options
      $new_web_marcello_theme_options = get_option( 'new_web_marcello_theme_option_name' );
      $page_404_header_3 = $new_web_marcello_theme_options['404_page_header_3'];

      $page_title = get_bloginfo('description');
      if(is_404()){
         $page_title = esc_attr($page_404_header_3);
      } 
      if(is_search()){
         $page_title = 'Search Result for: "' . get_search_query() .  '"';
      }

      return $page_title;
   }

   public function category_page_title(){
      if(single_cat_title()){
         return single_cat_title();
      } 
      return post_type_archive_title();
   }
}