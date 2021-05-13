<?php

if ( !function_exists( 'news_search_engine_loader' ) ) {
	function news_search_engine_settings_link( $links ) {
		$links[] = '<a href="' .
			admin_url( 'admin.php?page=news_search_engine_settings' ) .
			'">' . __('Settings', 'news_search_engine_domain') . '</a>';
		return $links;
	}
	add_filter('plugin_action_links_' . PLUGIN_NSE_BASENAME, 'news_search_engine_settings_link');
}
