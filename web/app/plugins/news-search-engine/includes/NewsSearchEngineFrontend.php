<?php
if ( !class_exists( 'NewsSearchEngineFrontend' ) ) {

    class NewsSearchEngineFrontend {

      public function __construct(){
         add_action( 'wp_enqueue_scripts', array( $this, 'frontendStyle' ) );
      }

      public function frontendStyle(){
         wp_register_script('news-search-engine-frontend', PLUGIN_NSE_URL . 'assets/admin.min.js', array( 'jquery' ), '1.0.0', true );
         wp_enqueue_style('news-search-engine-frontend', PLUGIN_NSE_URL . 'assets/admin.min.css', array(), null, 'all' );
         wp_localize_script( 'news-search-engine-frontend', 'ajaxData', array( 'ajaxurl' => admin_url( 'admin-ajax.php' )));
         wp_enqueue_script( 'news-search-engine-frontend' );
      }
   }
}