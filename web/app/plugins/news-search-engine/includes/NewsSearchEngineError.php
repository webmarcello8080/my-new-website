<?php

if ( !class_exists( 'NewsSearchEngineError' ) ) {

    class NewsSearchEngineError {

      // display API error
      public function renderError($response){
         $errorMessage = 'The API returned an error:<br/><b>Code </b>' . $response->code . '<br/><b>' . $response->message . '</b>';
         echo '<div class="news-search-engine-error">' . $errorMessage . '</div>';
         return true;
      }

      // display API error if it doesn't have any error message
      public function misteryError($response){
         $errorMessage = 'The API returned an unknow error:<br/>Please be sure to set page and pagesize.<br/>Be sure to select the right protocol HTTP or HTTPS<br/><b>' . $response->message . '</b>';
         echo '<div class="news-search-engine-error">' . $errorMessage . '</div>';
         return true;
      }

      // display error if we have an empty reponse from the API
      public function emptyResponse(){
         echo '<div class="news-search-engine-error">No result found</div>';
         return true;
      }
   }
}