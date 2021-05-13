<?php
$svg_spinner = file_get_contents(PLUGIN_NSE_URL . 'img/spinner.svg');

?>
<h1 class="admin-page-title"><?= esc_html( get_admin_page_title() ); ?></h1>

    <form id="news-search-form" method="post" action="">
        <table class="form-table" id="news-search-table">
            <tbody>
                <tr>
                    <th scope="row">
                        <label for="news-search-engine-type">
                            Options :
                        </label>
                    </th>
                    <td class="news-search-engine-type" colspan="3">
                        <lable>
                        <input type="radio" name="news-search-engine-type" value="sources" <?= $_POST ? sanitize_text_field($_POST['news-search-engine-type']) == 'sources' ? ' checked' : '' : ''; ?> /> <b>Sources</b>
                        <p class="description">This option returns the subset of news publishers that top headlines are available from.</p>
                        </lable>
                        <lable>
                        <input type="radio" name="news-search-engine-type" value="everything" <?= $_POST ? sanitize_text_field($_POST['news-search-engine-type']) == 'everything' ? ' checked' : '' : ''; ?> /> <b>Everything</b>
                        <p class="description">Search through articles.</p>
                        </lable>
                        <lable>
                        <input type="radio" name="news-search-engine-type" value="topHeadlines" <?= $_POST ? sanitize_text_field($_POST['news-search-engine-type']) == 'topHeadlines' ? ' checked' : '' : ''; ?> /> <b>Top Headlines</b>
                        <p class="description">This option provides live top and breaking headlines.</p>
                        </lable>
                    </td>                           
                </tr>
                <tr>
                    <th class="sources topHeadlines" scope="row">
                        <label for="news-search-engine-category">
                            Category :
                        </label>
                    </th>
                    <td class="sources topHeadlines">
                        <?= news_search_engine_category($_POST ? esc_html( $_POST['news-search-engine-category'] ) : ''); ?>
                        <p class="description">Find sources that display news of this category.</p>
                    </td>
                    <th class="everything" scope="row">
                        <label for="news-search-engine-sort-by">
                            Sort By :
                        </label>
                    </th>
                    <td class="everything">
                        <?= news_search_engine_sort_by( $_POST ? esc_html( $_POST['news-search-engine-sort-by'] ) : ''); ?>
                        <p class="description">The order to sort the articles in.</p>
                    </td>
                </tr>
                <tr>
                    <th class="sources topHeadlines everything" scope="row">
                        <label for="news-search-engine-language">
                            Language :
                        </label>
                    </th>
                    <td class="sources topHeadlines everything">
                        <?= news_search_engine_language( $_POST ? esc_html( $_POST['news-search-engine-language'] ) : ''); ?>
                        <p class="description">Find sources that display news in a specific language.</p>
                    </td>
                    <th class="sources topHeadlines" scope="row">
                        <label for="news-search-engine-country">
                            Country :
                        </label>
                    </th>
                    <td class="sources topHeadlines">
                        <?= news_search_engine_country( $_POST ? esc_html( $_POST['news-search-engine-country'] ) : ''); ?>
                        <p class="description">Note: you can't mix this param with the sources param.</p>
                    </td>
                </tr>
                <tr>
                    <th class="topHeadlines everything" scope="row">
                        <label for="news-search-engine-q">
                            Keywords [q]:
                        </label>
                    </th>
                    <td class="topHeadlines everything">
                        <input type="text" name="news-search-engine-q" value="<?= $_POST ?  esc_html($_POST['news-search-engine-q']) : '' ?>" />
                        <p class="description">Keywords or a phrase to search for.</p>
                    </td>
                    <th class="everything" scope="row">
                        <label for="news-search-engine-qIn-title">
                            Title Keywords [qInTitle]:
                        </label>
                    </th>
                    <td class="everything">
                        <input type="text" name="news-search-engine-qIn-title" value="<?= $_POST ?  esc_html($_POST['news-search-engine-qIn-title']) : '' ?>" />
                        <p class="description">Keywords or phrases to search for in the article title only.</p>
                    </td>
                </tr>
                <tr>
                    <th class="everything" scope="row">
                        <label for="news-search-engine-from">
                            Date From:
                        </label>
                    </th>
                    <td class="everything">
                        <input type="date" name="news-search-engine-from" value="<?= $_POST ?  esc_html($_POST['news-search-engine-from']) : '' ?>" />
                        <p class="description">A date and optional time for the oldest article allowed.</p>
                    </td>
                    <th class="everything" scope="row">
                        <label for="news-search-engine-to">
                            Date To:
                        </label>
                    </th>
                    <td class="everything">
                        <input type="date" name="news-search-engine-to" value="<?= $_POST ?  esc_html($_POST['news-search-engine-to']) : '' ?>" />
                        <p class="description">A date and optional time for the newest article allowed.</p>
                    </td>
                </tr>

                <tr>
                    <th class="topHeadlines everything" scope="row">
                        <label for="news-search-engine-sources">
                            Sources [sources]:
                        </label>
                    </th>
                    <td class="topHeadlines everything">
                        <input type="text" name="news-search-engine-sources" value="<?= $_POST ?  esc_html($_POST['news-search-engine-sources']) : '' ?>" autocomplete="off" />
                        <div class="news-search-engine-source-loader"><?= $svg_spinner ?></div>
                        <div id="source-suggesstion-box"></div>
                        <p class="description">A comma-seperated string of identifiers for the news sources or blogs you want headlines from.</p>
                    </td>
                    <th class="everything" scope="row">
                        <label for="news-search-engine-domains">
                            Domains [domains]:
                        </label>
                    </th>
                    <td class="everything">
                        <input type="text" name="news-search-engine-domains" value="<?= $_POST ?  esc_html($_POST['news-search-engine-domains']) : '' ?>" autocomplete="off" />
                        <div class="news-search-engine-domains-loader"><?= $svg_spinner ?></div>
                        <div id="domain-suggesstion-box"></div>
                        <p class="description">A comma-seperated string of domains (eg bbc.co.uk, techcrunch.com, engadget.com) to restrict the search to.</p>
                    </td>
                </tr>
                <tr>
                    <th class="topHeadlines everything" scope="row">
                        <label for="news-search-engine-page-size">
                            Page Size :
                        </label>
                    </th>
                    <td class="topHeadlines everything">
                        <input type="number" name="news-search-engine-page-size"  value="<?= isset($_POST['news-search-engine-page-size']) ? esc_html($_POST['news-search-engine-page-size']) : (get_option('news-search-engine-default-page-size') ? get_option('news-search-engine-default-page-size') : '20'); ?>" max="100"/>
                        <p class="description">The number of results to return per page (request). 20 is the default, 100 is the maximum.</p>
                    </td>
                    <th class="topHeadlines everything" scope="row">
                        <label for="news-search-engine-page">
                            Page :
                        </label>
                    </th>
                    <td class="topHeadlines everything">
                        <input type="number" name="news-search-engine-page" value="<?= isset($_POST['news-search-engine-page']) ? esc_html($_POST['news-search-engine-page']) : '1' ?>" />
                        <p class="description">Use this to page through the results if the total results found is greater than the page size.</p>
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="form-messages">
            <?= esc_html( get_option('news-search-engine-form-message') ); ?>
        </div>

        <?php
            wp_nonce_field( 'news-search-engine-settings-save', 'news-search-engine-form-message' );
        ?>
        <p class="submit">
            <input type="submit" name="submit" id="submit" class="button button-primary btn btn-primary" value="Search News">
        </p>
    </form>
<?php

// call API
if($_POST){
    // create classes
    $request = new NewsSearchEngineRequest;
    $response = new NewsSearchEngineResponse;

    $result = $request->selectRequest($_POST);

    // render output
    if($response->renderResponse($result)){
        $response->display();
    }
}
