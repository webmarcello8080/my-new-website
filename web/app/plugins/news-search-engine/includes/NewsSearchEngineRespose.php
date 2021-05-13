<?php

//Our class extends the WP_List_Table class, so we need to make sure that it's there
if(!class_exists('WP_List_Table')){
   require_once( ABSPATH . 'wp-admin/includes/class-wp-list-table.php' );
}

if ( !class_exists( 'NewsSearchEngineResponse' ) ) {

    class NewsSearchEngineResponse extends WP_List_Table {

        private $columns;
        private $APIData;
        private $totalRow;
        private $pagination;

        // write the response and route the response to part of the class
        public function renderResponse($response){

            if($response->status == 'ok'){
                if($response->totalResults){
                    if(isset($response->sources) && $response->sources ){
                        $this->prepareTable($response->sources);
                        $this->totalRow = count($response->sources);
                        $this->pagination = false;
                    }
                    elseif(isset($response->articles) && $response->articles){
                        $this->prepareTable($response->articles);
                        $this->totalRow = $response->totalResults;
                        $this->pagination = true;
                    }
                    return true;
                } else {
                    $this->emptyResponse();
                    return false;
                }
            }
            if($response->status == 'error'){
                $this->renderError($response);
                return false;
            }
            if(!$response->status){
                $this->misteryError($response);
                return false;
            }
        }

        // prepare the table
        private function prepareTable($response){

            foreach($response as $singleResult){
                $APIData[] = (array)$singleResult;
            }
            $this->APIData = $APIData;
            $this->columns = $this->createColumns($APIData[0]);
        }

        // display API error
        private function renderError($response){
            $errorMessage = 'The API returned an error:<br/><b>Code </b>' . $response->code . '<br/><b>' . $response->message . '</b>';
            echo '<div class="form-messages">' . $errorMessage . '</div>';
            return true;
        }

        // display API error if it doesn't have any error message
        private function misteryError($response){
            $errorMessage = 'The API returned an unknow error:<br/>Please be sure to set page and pagesize.<br/>Be sure to select the right protocol HTTP or HTTPS<br/><b>' . $response->message . '</b>';
            echo '<div class="form-messages">' . $errorMessage . '</div>';
            return true;
        }

        // display error if we have an empty reponse from the API
        private function emptyResponse(){
            echo '<div class="form-messages">No result found</div>';
            return true;
        }

        // create to header of the result table
        public function prepare_items(){
            
            $columns = $this->get_columns();
            
            $hidden = array();
            $sortable = array();
            $this->_column_headers = array($columns, $hidden, $sortable);

            $this->items = $this->APIData;
        }

        // create columns of the result table
        private function createColumns($array){
            
            $keys = array_keys($array);
            foreach($keys as $key){
                $columns[$key] = ucfirst($key);
            }

            return $columns;
        }

        // display the actual table, wrap the table with pagination and result data
        public function display_table(){
            echo '<div id="table-result-wrap">';

            if($this->totalRow && $this->pagination){
                echo '<h3>Total Resutls ' . $this->totalRow . ' - Total Pages ' . (intval($this->totalRow / sanitize_text_field( $_POST['news-search-engine-page-size'] )) + 1 ). '</h3>';
                $this->display_pagination();
            }
            elseif($this->totalRow){
                echo '<h3>Total Resutls ' . $this->totalRow . ' - Total Pages 1 </h3>';            
            }

            $this->prepare_items(); 
            $this->display();

            if($this->totalRow  && $this->pagination){
                $this->display_pagination();
            }
            echo '</div>'; 
        }

        // format the column values
        protected  function column_default( $item, $column_name ) {
            switch( $column_name ) { 
                case 'id':
                case 'name':
                case 'category':
                case 'language':
                case 'country':
                case 'author':
                    return $item[ $column_name ];
                case 'description':
                case 'title':
                    return $this->limit_text( $item[ $column_name ] );
                case 'source':
                    return $item[ $column_name ]->name;
                case 'url':
                    return '<a href="' . $item[ $column_name ] . '" target="_blank">' . $this->limit_text( $item[ $column_name ] ) . '</a>';
                case 'urlToImage':
                    return '<a href="' . $item[ $column_name ] . '" target="_blank"><img width="100%" src="' . $item[ $column_name ] . '" /></a>';
                case 'publishedAt':
                    return date("Y-m-d H:i:s", strtotime($item[ $column_name ]));
                default:
                    return print_r( $item, true ) ; //Show the whole array for troubleshooting purposes
            }
        }

        private function limit_text($text) {
            if(get_option('news-search-engine-default-number-characters')) {
                $limit = get_option('news-search-engine-default-number-characters');
            } else {
                $limit = 100;
            }

            if(strlen($text) <= $limit){
                return $text;
            } else {
                $result = substr( $text, 0, $limit) . ' [...]';
                return $result;
            }
        }

        // sort columns - not in use
        public function get_sortable_columns() {
            $sortable_columns = array(
                'category'  => array('category',false),
                'name' => array('name',false)
            );
            return $sortable_columns;
        }

        // return columns, this function is mandatory for the WP_List_Table
        public function get_columns(){
            return $this->columns;
        }

        // disply pagination
        private function display_pagination(){
            $page_number = sanitize_text_field( $_POST['news-search-engine-page'] );
            $total_page = intval($this->totalRow / sanitize_text_field( $_POST['news-search-engine-page-size'] )) + 1;
            ?>

            <ul class="table-pagination">
                <li><span class="select-page<?= ($page_number == 1) ? '-disable' : '' ?>" data-page="1"><< First</span></li>
                <li><span class="select-page<?= ($page_number == 1) ? '-disable' : '' ?>" data-page="<?= $page_number - 1 ?>">< Prev</span></li>
                <li>Current Page <?= $page_number ?></li>
                <li><span class="select-page<?= ($page_number >= $total_page) ? '-disable' : '' ?>" data-page="<?= $page_number + 1 ?>">Next ></span></li>
                <li><span class="select-page<?= ($page_number >= $total_page) ? '-disable' : '' ?>" data-page="<?= intval($total_page) ?>">Last >></span></li>
            </ul>

            <?php
        }
    }
}