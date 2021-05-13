<?php
/**
 * Plugin Name:       News Search Engine
 * Plugin URI:        https://github.com/webmarcello8080/news-search-engine
 * Description:       News Search Engine is a Wordpress plugin that create a new section on the Wordpress Dashboard and it gives the possibility to search news through Google news API.
 * Version:           1.0.3
 * Requires at least: 4.5.13
 * Requires PHP:      7.0
 * Text Domain:       news-search-engine
 * Author:            Marcello Perri
 * Author URI:        http://webmarcello.co.uk
 */

define('PLUGIN_NSE_BASENAME', plugin_basename(__FILE__) );

foreach ( glob( plugin_dir_path( __FILE__ ) .'includes/*.php') as $filename)
{
    include_once $filename;
}

if( is_admin() ){
    new NewsSearchEngineMenu;
    new NewsSearchEngineAdmin;
}
new NewsSearchEngineAjax;
new NewsSearchEngineFrontend;
add_action( 'plugins_loaded', array( 'NewsSearchEngineTemplate', 'get_instance' ) );
