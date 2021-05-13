<?php

if ( !function_exists( 'news_search_engine_country' ) ) {
    function news_search_engine_country($country = ''){?>

    <select name="news-search-engine-country" data-placeholder="Choose a Country">
        <option value="">None</option>
        <option value="AR" <?= $country == 'AR' ? ' selected="selected"' : ''; ?>>Argentina</option>
        <option value="AU" <?= $country == 'AU' ? ' selected="selected"' : ''; ?>>Australia</option>
        <option value="AT" <?= $country == 'AT' ? ' selected="selected"' : ''; ?>>Austria</option>
        <option value="BE" <?= $country == 'BE' ? ' selected="selected"' : ''; ?>>Belgium</option>
        <option value="BR" <?= $country == 'BR' ? ' selected="selected"' : ''; ?>>Brazil</option>
        <option value="BG" <?= $country == 'BG' ? ' selected="selected"' : ''; ?>>Bulgaria</option>
        <option value="KH" <?= $country == 'KH' ? ' selected="selected"' : ''; ?>>Cambodia</option>
        <option value="CA" <?= $country == 'CA' ? ' selected="selected"' : ''; ?>>Canada</option>
        <option value="KY" <?= $country == 'KY' ? ' selected="selected"' : ''; ?>>Cayman Islands</option>
        <option value="CN" <?= $country == 'CN' ? ' selected="selected"' : ''; ?>>China</option>
        <option value="CO" <?= $country == 'CO' ? ' selected="selected"' : ''; ?>>Colombia</option>
        <option value="KM" <?= $country == 'KM' ? ' selected="selected"' : ''; ?>>Comoros</option>
        <option value="CU" <?= $country == 'CU' ? ' selected="selected"' : ''; ?>>Cuba</option>
        <option value="CZ" <?= $country == 'CZ' ? ' selected="selected"' : ''; ?>>Czech Republic</option>
        <option value="EG" <?= $country == 'EG' ? ' selected="selected"' : ''; ?>>Egypt</option>
        <option value="FR" <?= $country == 'FR' ? ' selected="selected"' : ''; ?>>France</option>
        <option value="PF" <?= $country == 'PF' ? ' selected="selected"' : ''; ?>>French Polynesia</option>
        <option value="DE" <?= $country == 'DE' ? ' selected="selected"' : ''; ?>>Germany</option>
        <option value="GR" <?= $country == 'GR' ? ' selected="selected"' : ''; ?>>Greece</option>
        <option value="HK" <?= $country == 'HK' ? ' selected="selected"' : ''; ?>>Hong Kong</option>
        <option value="HU" <?= $country == 'HU' ? ' selected="selected"' : ''; ?>>Hungary</option>
        <option value="IN" <?= $country == 'IN' ? ' selected="selected"' : ''; ?>>India</option>
        <option value="ID" <?= $country == 'ID' ? ' selected="selected"' : ''; ?>>Indonesia</option>
        <option value="IE" <?= $country == 'IE' ? ' selected="selected"' : ''; ?>>Ireland</option>
        <option value="IL" <?= $country == 'IL' ? ' selected="selected"' : ''; ?>>Israel</option>
        <option value="IT" <?= $country == 'IT' ? ' selected="selected"' : ''; ?>>Italy</option>
        <option value="JP" <?= $country == 'JP' ? ' selected="selected"' : ''; ?>>Japan</option>
        <option value="KR" <?= $country == 'KR' ? ' selected="selected"' : ''; ?>>Korea, Republic of</option>
        <option value="LV" <?= $country == 'LV' ? ' selected="selected"' : ''; ?>>Latvia</option>
        <option value="LT" <?= $country == 'LT' ? ' selected="selected"' : ''; ?>>Lithuania</option>
        <option value="MY" <?= $country == 'MY' ? ' selected="selected"' : ''; ?>>Malaysia</option>
        <option value="YT" <?= $country == 'YT' ? ' selected="selected"' : ''; ?>>Mayotte</option>
        <option value="MX" <?= $country == 'MX' ? ' selected="selected"' : ''; ?>>Mexico</option>
        <option value="MA" <?= $country == 'MA' ? ' selected="selected"' : ''; ?>>Morocco</option>
        <option value="NL" <?= $country == 'NL' ? ' selected="selected"' : ''; ?>>Netherlands</option>
        <option value="NZ" <?= $country == 'NZ' ? ' selected="selected"' : ''; ?>>New Zealand</option>
        <option value="NG" <?= $country == 'NG' ? ' selected="selected"' : ''; ?>>Nigeria</option>
        <option value="NO" <?= $country == 'NO' ? ' selected="selected"' : ''; ?>>Norway</option>
        <option value="OM" <?= $country == 'OM' ? ' selected="selected"' : ''; ?>>Oman</option>
        <option value="PH" <?= $country == 'PH' ? ' selected="selected"' : ''; ?>>Philippines</option>
        <option value="PL" <?= $country == 'PL' ? ' selected="selected"' : ''; ?>>Poland</option>
        <option value="PT" <?= $country == 'PT' ? ' selected="selected"' : ''; ?>>Portugal</option>
        <option value="QA" <?= $country == 'QA' ? ' selected="selected"' : ''; ?>>Qatar</option>
        <option value="RO" <?= $country == 'RO' ? ' selected="selected"' : ''; ?>>Romania</option>
        <option value="RU" <?= $country == 'RU' ? ' selected="selected"' : ''; ?>>Russian Federation</option>
        <option value="BL" <?= $country == 'BL' ? ' selected="selected"' : ''; ?>>Saint Barthélemy</option>
        <option value="WS" <?= $country == 'WS' ? ' selected="selected"' : ''; ?>>Samoa</option>
        <option value="SA" <?= $country == 'SA' ? ' selected="selected"' : ''; ?>>Saudi Arabia</option>
        <option value="RS" <?= $country == 'RS' ? ' selected="selected"' : ''; ?>>Serbia</option>
        <option value="SG" <?= $country == 'SG' ? ' selected="selected"' : ''; ?>>Singapore</option>
        <option value="SK" <?= $country == 'SK' ? ' selected="selected"' : ''; ?>>Slovakia</option>
        <option value="ZA" <?= $country == 'ZA' ? ' selected="selected"' : ''; ?>>South Africa</option>
        <option value="ES" <?= $country == 'ES' ? ' selected="selected"' : ''; ?>>Spain</option>
        <option value="SE" <?= $country == 'SE' ? ' selected="selected"' : ''; ?>>Sweden</option>
        <option value="CH" <?= $country == 'CH' ? ' selected="selected"' : ''; ?>>Switzerland</option>
        <option value="TW" <?= $country == 'TW' ? ' selected="selected"' : ''; ?>>Taiwan, Province of China</option>
        <option value="TH" <?= $country == 'TH' ? ' selected="selected"' : ''; ?>>Thailand</option>
        <option value="TR" <?= $country == 'TR' ? ' selected="selected"' : ''; ?>>Turkey</option>
        <option value="UA" <?= $country == 'UA' ? ' selected="selected"' : ''; ?>>Ukraine</option>
        <option value="AE" <?= $country == 'AE' ? ' selected="selected"' : ''; ?>>United Arab Emirates</option>
        <option value="GB" <?= $country == 'GB' ? ' selected="selected"' : ''; ?>>United Kingdom</option>
        <option value="US" <?= $country == 'US' ? ' selected="selected"' : ''; ?>>United States</option>
        <option value="VE" <?= $country == 'VE' ? ' selected="selected"' : ''; ?>>Venezuela, Bolivarian Republic of</option>
        <option value="YE" <?= $country == 'YE' ? ' selected="selected"' : ''; ?>>Yemen</option>
    </select>
<?php 
    }
} 

if ( !function_exists( 'news_search_engine_language' ) ) {
    function news_search_engine_language($language = ''){
?>
    <select name="news-search-engine-language" data-placeholder="Choose a Language">
        <option value="">None</option>
        <option value="ar" <?= $language == 'ar' ? ' selected="selected"' : ''; ?>>Arabic</option>
        <option value="de" <?= $language == 'de' ? ' selected="selected"' : ''; ?>>German</option>
        <option value="en" <?= $language == 'en' ? ' selected="selected"' : ''; ?>>English</option>
        <option value="es" <?= $language == 'es' ? ' selected="selected"' : ''; ?>>Spanish</option>
        <option value="fr" <?= $language == 'fr' ? ' selected="selected"' : ''; ?>>French</option>
        <option value="he" <?= $language == 'he' ? ' selected="selected"' : ''; ?>>Hebrew</option>
        <option value="it" <?= $language == 'it' ? ' selected="selected"' : ''; ?>>Italian</option>
        <option value="nl" <?= $language == 'nl' ? ' selected="selected"' : ''; ?>>Dutch</option>
        <option value="no" <?= $language == 'no' ? ' selected="selected"' : ''; ?>>Norwegian</option>
        <option value="pt" <?= $language == 'pt' ? ' selected="selected"' : ''; ?>>Portuguese</option>
        <option value="ru" <?= $language == 'ru' ? ' selected="selected"' : ''; ?>>Russian</option>
        <option value="se" <?= $language == 'se' ? ' selected="selected"' : ''; ?>>Northern Sami</option>
        <option value="ud" <?= $language == 'ud' ? ' selected="selected"' : ''; ?>>Udmurt</option>
        <option value="zh" <?= $language == 'zh' ? ' selected="selected"' : ''; ?>>Chinese</option>
    </select>
<?php 
    }
} 

if ( !function_exists( 'news_search_engine_category' ) ) {
    function news_search_engine_category($category = ''){
?>
    <select name="news-search-engine-category" data-placeholder="Choose a Category">
        <option value="">None</option>
        <option value="business" <?= $category == 'business' ? ' selected="selected"' : ''; ?>>Business</option>
        <option value="entertainment" <?= $category == 'entertainment' ? ' selected="selected"' : ''; ?>>Entertainment</option>
        <option value="general" <?= $category == 'general' ? ' selected="selected"' : ''; ?>>General</option>
        <option value="health" <?= $category == 'health' ? ' selected="selected"' : ''; ?>>Health</option>
        <option value="science" <?= $category == 'science' ? ' selected="selected"' : ''; ?>>Science</option>
        <option value="sports" <?= $category == 'sports' ? ' selected="selected"' : ''; ?>>Sports</option>
        <option value="technology" <?= $category == 'technology' ? ' selected="selected"' : ''; ?>>Technology</option>
    </select>
<?php 
    }
} 

if ( !function_exists( 'news_search_engine_sort_by' ) ) {
    function news_search_engine_sort_by($sortBy = ''){
?>
    <select name="news-search-engine-sort-by" data-placeholder="Sort By">
        <option value="">None</option>
        <option value="relevancy" <?= $sortBy == 'relevancy' ? ' selected="selected"' : ''; ?>>Relevancy</option>
        <option value="popularity" <?= $sortBy == 'popularity' ? ' selected="selected"' : ''; ?>>Popularity</option>
        <option value="publishedAt" <?= $sortBy == 'publishedAt' ? ' selected="selected"' : ''; ?>>Published At</option>
    </select>
<?php 
    }
}