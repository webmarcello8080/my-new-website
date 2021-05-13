<?php

if ( !class_exists( 'NewsSearchEngineResponse' ) ) {

    class NewsSearchEngineResponse {

        private $columns;
        private $rows;
        private $totalRow;
        private $pagination;
        private $error;

        public function __construct(){
            $this->error = new NewsSearchEngineError;
        }

        // write the response and route the response to part of the class
        public function renderResponse($response){

            if($response->status == 'ok'){
                if(isset($response->sources) && $response->sources ){
                    $this->prepareTable($response->sources);
                    $this->totalRow = count($response->sources);
                    $this->pagination = false;

                    return true;
                }
                if(isset($response->totalResults) && $response->totalResults){
                    if(isset($response->articles) && $response->articles){
                        $this->prepareTable($response->articles);
                        $this->totalRow = $response->totalResults;
                        $this->pagination = true;
                    }
                    return true;
                } else {
                    $this->error->emptyResponse();
                    return false;
                }
            }
            if($response->status == 'error'){
                $this->error->renderError($response);
                return false;
            }
            if(!$response->status){
                $this->error->misteryError($response);
                return false;
            }
        }

        // prepare the table
        private function prepareTable($response){

            foreach($response as $singleResult){
                $APIData[] = (array)$singleResult;
            }
            $this->rows = $APIData;
            $this->columns = $this->createColumns($APIData[0]);
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
        public function display(){
            echo '<div id="table-result-wrap">';

            if($this->totalRow && $this->pagination){
                echo '<h3>Total Resutls ' . $this->totalRow . ' - Total Pages ' . (intval($this->totalRow / sanitize_text_field( $_POST['news-search-engine-page-size'] )) + 1 ). '</h3>';
                $this->display_pagination();
            }
            elseif($this->totalRow){
                echo '<h3>Total Resutls ' . $this->totalRow . ' - Total Pages 1 </h3>';            
            }

            $this->display_table();

            if($this->totalRow  && $this->pagination){
                $this->display_pagination();
            }
            echo '</div>'; 
        }

        // render actual table
        private function display_table(){
            ?>
                <table class="wp-list-table widefat fixed striped">
                    <?php if ($this->columns): ?>
                        <?php $this->display_table_header('head');?>
                    <?php endif; ?>
                    <?php if ($this->rows): ?>
                        <tbody id="the-list">
                            <?php foreach($this->rows as $row) : ?>
                                <tr>
                                    <?php foreach($row as $key => $value) : ?>
                                        <td data-colname="<?= $key ?>" class="column-<?= strtolower($key) ?>" >
                                            <?= $this->column_default( $value, $key ) ?>
                                        </td>
                                    <?php endforeach; ?>
                                </tr>
                            <?php endforeach; ?>                            
                        </tbody>
                    <?php endif; ?>
                    <?php if ($this->columns): ?>
                        <?php $this->display_table_header('foot');?>
                    <?php endif; ?>
                </table>
            <?php
        }

        private function display_table_header($part){
            ?>
                <t<?= $part ?>>
                    <tr>
                        <?php foreach($this->columns as $column) : ?>
                            <th scope="col" class="column-<?= strtolower($column) ?>"><?= $column ?></th>
                        <?php endforeach; ?>
                    </tr>
                </t<?= $part ?>>
            <?php
        }

        // format the column values
        protected function column_default( $item, $column_name ) {
            switch( $column_name ) { 
                case 'id':
                case 'name':
                case 'category':
                case 'language':
                case 'country':
                case 'author':
                    return $item;
                case 'description':
                case 'title':
                    return $this->limit_text( $item );
                case 'source':
                    return $item->name;
                case 'url':
                    return '<a href="' . $item . '" target="_blank">' . $this->limit_text( $item ) . '</a>';
                case 'urlToImage':
                    return '<a href="' . $item . '" target="_blank"><img width="100%" src="' . $item . '" /></a>';
                case 'publishedAt':
                    return date( get_option('date_format') . " " . get_option('time_format'), strtotime($item) );
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