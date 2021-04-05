<?php

namespace NewWebMarcello\Frontend;

class Categories{

   public function getCategoryLink($post_id, $classes, $spacer = '', $taxonomy = ''){
      $categories = $this->get_the_terms($post_id, $taxonomy);
      
      if($categories){
         foreach( $categories as $category) {
            
            $name = $category->name;
            $category_link = get_category_link( $category->term_id );
            echo '<a class="' . $classes . '" href="' . $category_link . '">' . esc_attr($name) . '</a>';
            if (next($categories)==true){
               echo $spacer;
            }
         }
      }
   }

   public function getCategoryList($post_id, $classes, $spacer = '', $taxonomy = ''){
      $categories = $this->get_the_terms($post_id, $taxonomy);
      
      if($categories){
         foreach( $categories as $category) {
            
            $name = $category->name;
            echo '<span class="' . $classes . '" >' . esc_attr($name) . '</span>';
            if (next($categories)==true){
               echo $spacer;
            }
         }
      }
   }

   private function get_the_terms($post_id, $taxonomy = ''){
      if($taxonomy){
         $categories = get_the_terms( $post_id, $taxonomy ); 
      } else {
         $categories =  get_the_category($post_id);
      }

      return $categories;
   }
}