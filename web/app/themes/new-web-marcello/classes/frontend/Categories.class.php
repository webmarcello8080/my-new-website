<?php

namespace NewWebMarcello\Frontend;

class Categories{

   public function getCategoryList($post_id, $classes, $spacer = ''){
      $categories = get_the_category($post_id);
      
      foreach( $categories as $category) {
         
         $name = $category->name;
         $category_link = get_category_link( $category->term_id );
         echo '<a class="' . $classes . '" href="' . $category_link . '">' . esc_attr($name) . '</a>';
         echo $spacer;
      }
   }
}