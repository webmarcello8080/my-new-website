<?php

namespace NewsApi;

use NewsApi\Request\EverythingRequest;
use NewsApi\Request\SourcesRequest;
use NewsApi\Request\TopHeadlinesRequest;
use NewsApi\Response\ResponseInterface;

/**
 * Class Client
 * @package NewsApi
 */
class Client implements ClientInterface
{
    /**
     * @var RequestParser
     */
    private $requestParser;
    /**
     * @var ResponseParser
     */
    private $responseParser;

    const API_URL = 'http://newsapi.org/v2/';
    const API_URL_SSL = 'https://newsapi.org/v2/';

    const TOP_HEADLINES_ENDPOINT = 'top-headlines';
    const EVERYTHING_ENDPOINT = 'everything';
    const SOURCES_ENDPOINT = 'sources';

    /**
     * Client constructor.
     * @param RequestParser $requestParser
     * @param ResponseParser $responseParser
     */
    public function __construct(RequestParser $requestParser, ResponseParser $responseParser)
    {
        $this->requestParser = $requestParser;
        $this->responseParser = $responseParser;
    }

    /**
     * Get top headlines
     * @param TopHeadlinesRequest $request
     * @return ResponseInterface
     */
    public function topHeadlines(TopHeadlinesRequest $request): ResponseInterface
    {
        return $this->responseParser->parseTopHeadlinesResponse(
            $this->sendRequest(
                $this->requestParser->prepareQueryString($request),
                self::TOP_HEADLINES_ENDPOINT
            )
        );
    }

    /**
     * Serch for everything
     * @param EverythingRequest $request
     * @return ResponseInterface
     */
    public function everything(EverythingRequest $request): ResponseInterface
    {
        return $this->responseParser->parseEverythingResponse(
            $this->sendRequest(
                $this->requestParser->prepareQueryString($request),
                self::EVERYTHING_ENDPOINT
            )
        );
    }

    /**
     * Get news sources
     * @param SourcesRequest $request
     * @return ResponseInterface
     */
    public function sources(SourcesRequest $request): ResponseInterface
    {
        return $this->responseParser->parseSourcesResponse(
            $this->sendRequest(
                $this->requestParser->prepareQueryString($request),
                self::SOURCES_ENDPOINT
            )
        );
    }

    /**
     * @param $query
     * @param string $endpoint
     * @return string
     */
    public function sendRequest($query, $endpoint = self::EVERYTHING_ENDPOINT): string
    {
        // var_dump(self::API_URL . $endpoint . '?' . $query);
        if(get_option('news-search-engine-http') == 'https'){
            $url = self::API_URL_SSL . $endpoint . '?' . $query;
        }else{
            $url = self::API_URL . $endpoint . '?' . $query;
        }

        $ch = curl_init();
        
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        
        //var_dump(curl_error($ch));

        $output = curl_exec($ch);
        curl_close($ch);

        return $output;
    }
}
