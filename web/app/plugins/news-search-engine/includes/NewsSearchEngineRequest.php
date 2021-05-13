<?php
if ( !class_exists( 'NewsSearchEngineRequest' ) ) {

    class NewsSearchEngineRequest {

        // call source API
        public function sourcesRequest($arg){

            $client = new \NewsApi\Client(new \NewsApi\RequestParser(), new \NewsApi\ResponseParser());
            
            $request = new \NewsApi\Request\SourcesRequest();
            $request->apiKey = get_option('news-search-engine-api-key');
            $request->language = strtolower( sanitize_text_field( $arg['news-search-engine-language'] ));
            $request->category = strtolower( sanitize_text_field( $arg['news-search-engine-category'] ));
            $request->country = strtolower( sanitize_text_field( $arg['news-search-engine-country'] ));

            return $client->sources($request);
        }

        // call topHeadlines API
        public function topHeadlines($arg){

            $client = new \NewsApi\Client(new \NewsApi\RequestParser(), new \NewsApi\ResponseParser());
            
            $request = new \NewsApi\Request\TopHeadlinesRequest();
            $request->apiKey = get_option('news-search-engine-api-key');
            $request->category = strtolower( sanitize_text_field( $arg['news-search-engine-category'] ));
            $request->country = strtolower( sanitize_text_field( $arg['news-search-engine-country'] ));
            $request->language = strtolower( sanitize_text_field( $arg['news-search-engine-language'] ));
            $request->sources = strtolower( sanitize_text_field( $arg['news-search-engine-sources'] ));
            $request->q = strtolower( sanitize_text_field( $arg['news-search-engine-q'] ));
            $request->pageSize = strtolower( sanitize_text_field( $arg['news-search-engine-page-size'] ));
            $request->page = strtolower( sanitize_text_field( $arg['news-search-engine-page'] ));

            return $client->topHeadlines($request);
        }

        // call everythingRequest API
        public function everythingRequest($arg){

            $client = new \NewsApi\Client(new \NewsApi\RequestParser(), new \NewsApi\ResponseParser());
            
            $request = new \NewsApi\Request\EverythingRequest();
            $request->apiKey = get_option('news-search-engine-api-key');
            $request->language = strtolower( sanitize_text_field( $arg['news-search-engine-language'] ));
            $request->domains = strtolower( sanitize_text_field( $arg['news-search-engine-domains'] ));
            $request->sources = strtolower( sanitize_text_field( $arg['news-search-engine-sources'] ));
            $request->sortBy = strtolower( sanitize_text_field( $arg['news-search-engine-sort-by'] ));
            $request->qInTitle = strtolower( sanitize_text_field( $arg['news-search-engine-qIn-title'] ));
            $request->q = strtolower( sanitize_text_field( $arg['news-search-engine-q'] ));
            $request->pageSize = strtolower( sanitize_text_field( $arg['news-search-engine-page-size'] ));
            $request->page = strtolower( sanitize_text_field( $arg['news-search-engine-page'] ));
            $request->from = strtolower( sanitize_text_field( $arg['news-search-engine-from'] ));
            $request->to = strtolower( sanitize_text_field( $arg['news-search-engine-to'] ));

            return $client->everything($request);
        }

        // route to the request
        public function selectRequest($args){

            switch($args['news-search-engine-type']){
                case 'sources':
                    return $this->sourcesRequest($args);
                case 'everything':
                    return $this->everythingRequest($args);
                case 'topHeadlines':
                    return $this->topHeadlines($args);
                default:
                    return false;
            }
            
        }
    }
}