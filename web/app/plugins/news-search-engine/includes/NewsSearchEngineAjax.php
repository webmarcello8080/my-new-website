<?php
if ( !class_exists( 'NewsSearchEngineAjax' ) ) {

    class NewsSearchEngineAjax {

        private $request;

        public function __construct(){
            add_action( 'wp_ajax_news_search_source' , array( $this, 'ajaxSource' ));
            add_action( 'wp_ajax_news_search_domain' , array( $this, 'ajaxDomain' ));
            $this->request  = new NewsSearchEngineRequest;
        }

        // render the result of the ajax call for the source
        public function ajaxSource(){
            $found = false;
            $args = $this->createInput($_POST);

            $response = $this->request->sourcesRequest($args);
            $source_ids = array_column($response->sources, 'name', 'id');

            ?>
            <ul class="news-search-sources-list">
            <?php
            foreach($source_ids as $key => $value) {
                if(strpos($key, $_POST['source']) !== false){
                    ?>
                    <li class="news-search-sources-result" onClick="selectSource('<?= $key ?>');" ><?= $value ?></li>
                    <?php 
                    $found = true;
                }
            }
            if(!$found){
                ?>
                <li class="news-search-sources-result">No result found</li>
                <?php  
            }
            ?>
            </ul>
            <?php
        }

        // render the result of the ajax call for the domains
        public function ajaxDomain(){
            $found = false;
            $args = $this->createInput($_POST);

            $response = $this->request->sourcesRequest($args);
            $source_ids = array_column($response->sources, 'url', 'id');

            ?>
            <ul class="news-search-sources-list">
            <?php
            foreach($source_ids as $key => $value) {
                $parse = parse_url($value);
                $value = preg_replace('#^www\.(.+\.)#i', '$1', $parse['host']);
                if(strpos($value, $_POST['domain']) !== false){
                    ?>
                    <li class="news-search-sources-result" onClick="selectDomain('<?= $value ?>');" ><?= $value ?></li>
                    <?php
                    $found = true;
                }
            }
            if(!$found){
                ?>
                <li class="news-search-sources-result">No result found</li>
                <?php  
            }
            ?>
            </ul>
            <?php
        }

        private function createInput($input){
            $args = array(
                'news-search-engine-language' => sanitize_text_field($input['language']),
                'news-search-engine-category' => sanitize_text_field($input['category']),
                'news-search-engine-country' => sanitize_text_field($input['country'])
            );

            return $args;
        }

    }
}