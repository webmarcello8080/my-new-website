<?php

    if( current_user_can( 'edit_users' ) ){
    ?>
    <div class="wrap">
        <h1 class="admin-page-title"><?= esc_html( get_admin_page_title() ); ?></h1>

            <form method="post" action="<?= esc_html( admin_url( 'admin-post.php' ) ); ?>">

                <div class="form-description">
                    Please insert your <b>Google News API Key</b> and click on "Save Settings" button to save.<br/><br/>
                    If you don't have a Google News API key please click on the following link below and follow the instructions on screen
                    <a href="https://newsapi.org/pricing" target="_blank">https://newsapi.org/pricing</a><br/><br/>
                    Please go to <a href="<?= admin_url('admin.php?page=news_search_engine') ?>">News Search Form</a> to test your API key.<br/><br/>
                </div>

                <table class="form-table">
                    <tbody>
                        <tr>
                            <th scope="row">
                                <label for="news-search-engine-api-key">
                                    Google News API Key :
                                </label>
                            </th>
                            <td>
                                <input name="news-search-engine-api-key" type="text" id="news-search-engine-api-key" value="<?= get_option('news-search-engine-api-key'); ?>" class="regular-text" />
                                <p class="description">Insert Google News API Key to access to Google API.</p>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row">
                                <label for="news-search-engine-default-page-size">
                                    Default result per page :
                                </label>
                            </th>
                            <td>
                                <input name="news-search-engine-default-page-size" type="number" id="news-search-engine-default-page-size" max="100" value="<?= get_option('news-search-engine-default-page-size'); ?>" class="regular-text" />
                                <p class="description">Default number of result per page.</p>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row">
                                <label for="news-search-engine-default-number-characters">
                                    Default number of characters in result table :
                                </label>
                            </th>
                            <td>
                                <input name="news-search-engine-default-number-characters" type="number" id="news-search-engine-default-number-characters" max="300" value="<?= get_option('news-search-engine-default-number-characters'); ?>" class="regular-text" />
                                <p class="description">If title, description or url is too long it will be truncate.</p>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row">
                                <label for="news-search-engine-http">
                                    HTTP or HTTPS :
                                </label>
                            </th>
                            <td>
                                <select name="news-search-engine-http" id="news-search-engine-http">
                                    <option value="http" <?= get_option('news-search-engine-http') == 'http' ? ' selected="selected"' : ''; ?> >HTTP</option>
                                    <option value="https" <?= get_option('news-search-engine-http') == 'https' ? ' selected="selected"' : ''; ?> >HTTPS</option>
                                </select>
                                <p class="description">Do use SSL certificate? Do you have HTTP or HTTPS domain?</p>
                            </td>
                        </tr>

                    </tbody>
                </table>
            
                <div class="form-messages">
                    <?= esc_html( get_option('news-search-engine-settings-message') ); ?>
                </div>

                <?php
                    wp_nonce_field( 'news-search-engine-settings-save', 'news-search-engine-settings-message' );
                    submit_button('Save Settings');
                ?>
            </form>

    </div><!-- .wrap -->
    <?php
    }
    else {  
    ?>
        <p> <?php __("You are not authorized to perform this operation.") ?> </p>
    <?php   
    }