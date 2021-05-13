<?php
if ( !class_exists( 'NewsSearchEngineModel' ) ) {

    class NewsSearchEngineModel {

        public function setData($args){
            update_option( 'news-search-engine-api-key', sanitize_text_field( $args['news-search-engine-api-key'] ) );
            update_option( 'news-search-engine-default-page-size', sanitize_text_field( $args['news-search-engine-default-page-size'] ) );
            update_option( 'news-search-engine-default-number-characters', sanitize_text_field( $args['news-search-engine-default-number-characters'] ) );
            update_option( 'news-search-engine-http', sanitize_text_field( $args['news-search-engine-http'] ) );
            return true;
        }

        public function setMessage($message){
            update_option( 'news-search-engine-settings-message', $message);
            return true;
        }

    }
}