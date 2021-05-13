# News Search Engine
News Search Engine uses Google news API in order to create a universal news search engine

## Description

News Search Engine is a Wordpress plugin that create a new section on the Wordpress Dashboard and it gives the possibility to search news through Google news API. A Google news API Key is required.

PHP 7 or above Required.

### Settings include:
* Enter your Google news API Key (required)
* Enter a Default result per page (required)
* Enter protocol HTTP or HTTPS

### Search Section:
* Search news sources
* Search any news
* Search Top Headlines news
* Dynamic Pagination
* Ajax population for source and domain fields
* Select news by date
* Sort News by Relavancy, Popolarity, Date
* Select News by language, country, category
* Display API errors
* Open news in a new tab
* Open news image in a new tab
* Search news by source and domains

## Installation.

Download the plugin in your computer, explode the ZIP file on your plugin folder in your wordpress website. 
On your wordpress dashboard, go to Plugins => Installed Plugins, search for News Search Engine and activate the Plugin.

### Settings

The News Search Engine setting are on the wordpress dashboard on News Search Engine => News Search Engine Setting

Here is your News Search Engine settings:

![News Search Engine settings](http://webmarcello.co.uk/wp-content/uploads/2020/04/plugin-admin-settings.jpg)

##  Search news sources
From the wordpress dashboard on News Search Engine => News Search Engine, click on Sources and follow the instruction on screen.
This endpoint returns the subset of news publishers that top headlines (/v2/top-headlines) are available from. It's mainly a convenience endpoint that you can use to keep track of the publishers available on the API, and you can pipe it straight through to your users.

Here is your News Search Engine Source:

![News Search Engine Source](http://webmarcello.co.uk/wp-content/uploads/2020/04/plugin-admin-source.jpg)

## Search any news
From the wordpress dashboard on News Search Engine => News Search Engine, click on Everything and follow the instruction on screen.
Search through millions of articles from over 30,000 large and small news sources and blogs. This includes breaking news as well as lesser articles.
This endpoint suits article discovery and analysis, but can be used to retrieve articles for display, too.

Here is your News Search Engine Everything:

![News Search Engine Everything](http://webmarcello.co.uk/wp-content/uploads/2020/04/plugin-admin-everything.jpg)

## Search Top Headlines news
From the wordpress dashboard on News Search Engine => News Search Engine, click on Top Headlines and follow the instruction on screen.
This endpoint provides live top and breaking headlines for a country, specific category in a country, single source, or multiple sources. You can also search with keywords. Articles are sorted by the earliest date published first.
This endpoint is great for retrieving headlines for display on news tickers or similar.

Here is your News Search Engine Top Headlines:

![News Search Engine Top Headlines](http://webmarcello.co.uk/wp-content/uploads/2020/04/plugin-admin-topheadline.jpg)

## NOTE From Google NEWS API
To get started you'll need an API key. They're free for development, open-source, and non-commercial use.

Also we're assuming you know how to make web requests in your chosen programming language. We've included some crude ways to do this in our examples below if you need a place to start. Alternatively you can use one of our client libraries.

Now let's consider two of the most popular use cases for News API and walk through each one:
* I want to show my users live top and breaking news headlines
* I want to search across every news article that mentions a specific topic or keyword (limited to the last 24 months).
