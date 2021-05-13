<?php
if ( !class_exists( 'NewsSearchEngineMenu' ) ) {

   class NewsSearchEngineMenu {

      public function __construct(){
         add_action( 'admin_menu', array( $this, 'adminMenu' ) );
      }

      // create menu items
      public function adminMenu() {

         add_menu_page(
               'News Search Engine', 
               'News Search Engine', 
               'manage_options', 
               'news_search_engine', 
               array( $this, 'adminFromPage' ), 
               'dashicons-id', 
               90
         );
         
         add_submenu_page(
               'news_search_engine',
               'News Search Engine Settings', 
               'News Search Engine Settings', 
               'manage_options',
               'news_search_engine_settings',
               array( $this, 'adminSettingsPage' )
         ); 

      }

      // create  form page url
      public function adminFromPage() {
         //show the form
         include_once( PLUGIN_NSE_PATH . 'views/admin-form.php' );
      }
      
      // create setting page url
      public function adminSettingsPage() {
         //show the settings form
         include_once( PLUGIN_NSE_PATH . 'views/admin-settings.php' );
      }

   }
}