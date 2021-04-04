<?php
    if( current_user_can( 'edit_users' ) ){
    ?>
<div class="wrap">
      <h1 class="admin-page-title"><?= esc_html( get_admin_page_title() ); ?></h1>

      <?= WpPhoneMessageForm::getSettingsTabs($active_tab); ?>

      <form  class="wp-phone-message-form" method="post" action="<?= esc_html( admin_url( 'admin-post.php' ) ); ?>?">

            <h1 class="admin-page-title"><?= __( 'Managing Form Generated by the Shortcode', 'wp-phone-message' ); ?></h1>

            <table class="form-table">
                  <tbody>
                        <tr>
                              <th scope="row">
                                    <label for="wp-phone-message-text">Text in ShortCode Form: </label>
                              </th>
                              <td>
                                    <textarea name="wp-phone-message-text" id="wp-phone-message-text"
                                          class="large-text code"
                                          rows="3"><?= get_option('wp-phone-message-text'); ?></textarea>
                                    <p class="description" id="wp-phone-message-text-description">The text will appear on the top of the message form.</p>
                              </td>
                        </tr>
                        <tr>
                              <th>
                                    <label for="wp-phone-message-name">Name Area in ShortCode Form: </label>
                              </th>
                              <td>
                                    <input type="checkbox" id="wp-phone-message-name-active"
                                          name="wp-phone-message-name-active"
                                          <?= ( get_option('wp-phone-message-name-active') ? 'checked' : '') ?>
                                          value="1">
                                    <label for="wp-phone-message-name-active">Active Name Input Area in shortcode</label>
                              </td>
                              <td>
                                    <input type="checkbox" id="wp-phone-message-name-mandatory"
                                          name="wp-phone-message-name-mandatory"
                                          <?= ( get_option('wp-phone-message-name-mandatory') ? 'checked' : '') ?>
                                          value="required">
                                    <label for="wp-phone-message-name-mandatory">Name Input Area Mandatory</label>
                              </td>
                              <td>
                                    <input name="wp-phone-message-name" type="text" id="wp-phone-message-name"
                                          value="<?= get_option('wp-phone-message-name'); ?>" class="regular-text" />
                                    <p class="description" id="wp-phone-message-name-description">The Name input placeholder.</p>
                              </td>
                        </tr>
                        <tr>
                              <th scope="row">
                                    <label for="wp-phone-message-phone">Phone Area in ShortCode Form: </label>
                              </th>
                              <td>
                                    <input type="checkbox" id="wp-phone-message-phone-active"
                                          name="wp-phone-message-phone-active"
                                          <?= ( get_option('wp-phone-message-phone-active') ? 'checked' : '') ?>
                                          value="1">
                                    <label for="wp-phone-message-phone-active">Active Phone Input Area in shortcode</label>
                              </td>
                              <td>
                                    <input type="checkbox" id="wp-phone-message-phone-mandatory"
                                          name="wp-phone-message-phone-mandatory"
                                          <?= ( get_option('wp-phone-message-phone-mandatory') ? 'checked' : '') ?>
                                          value="required">
                                    <label for="wp-phone-message-phone-mandatory">Phone Input Area Mandatory</label>
                              </td>
                              <td>
                                    <input name="wp-phone-message-phone" type="text" id="wp-phone-message-phone"
                                          value="<?= get_option('wp-phone-message-phone'); ?>" class="regular-text" />
                                    <p class="description" id="wp-phone-message-phone-description">The Phone input placeholder.</p>
                              </td>
                        </tr>
                        <tr>
                              <th>
                                    <label for="wp-phone-message-extra">Extra Area in ShortCode Form: </label>
                                    <?= WpPhoneMessageForm::isPremiumOnly(); ?>
                              </th>
                              <td>
                                    <input type="checkbox" id="wp-phone-message-extra-active"
                                          name="wp-phone-message-extra-active"
                                          <?= ( get_option('wp-phone-message-extra-active') ? 'checked' : '') ?>
                                          value="1">
                                    <label for="wp-phone-message-extra-active">Active Extra Input Area in shortcode</label>
                              </td>
                              <td>
                                    <input type="checkbox" id="wp-phone-message-extra-mandatory"
                                          name="wp-phone-message-extra-mandatory"
                                          <?= ( get_option('wp-phone-message-extra-mandatory') ? 'checked' : '') ?>
                                          value="required">
                                    <label for="wp-phone-message-extra-mandatory">Extra Input Area Mandatory</label>
                              </td>
                              <td>
                                    <input name="wp-phone-message-extra" type="text" id="wp-phone-message-extra"
                                          value="<?= get_option('wp-phone-message-extra'); ?>" class="regular-text" />
                                    <p class="description" id="wp-phone-message-extra-description">The Extra input placeholder.</p>
                              </td>
                        </tr>
                        <tr>
                              <th scope="row">
                                    <label for="wp-phone-message-email">Email Address Area in ShortCode Form: </label>
                                    <?= WpPhoneMessageForm::isPremiumOnly(); ?>
                              </th>
                              <td>
                                    <input type="checkbox" id="wp-phone-message-email-active"
                                          name="wp-phone-message-email-active"
                                          <?= ( get_option('wp-phone-message-email-active') ? 'checked' : '') ?>
                                          value="1">
                                    <label for="wp-phone-message-email-active">Active Email Address Input Area in shortcode</label>
                              </td>
                              <td>
                                    <input type="checkbox" id="wp-phone-message-email-mandatory"
                                          name="wp-phone-message-email-mandatory"
                                          <?= ( get_option('wp-phone-message-email-mandatory') ? 'checked' : '') ?>
                                          value="required">
                                    <label for="wp-phone-message-email-mandatory">Email Address Input Area Mandatory</label>
                              </td>
                              <td>
                                    <input name="wp-phone-message-email" type="text" id="wp-phone-message-email"
                                          value="<?= get_option('wp-phone-message-email'); ?>" class="regular-text" />
                                    <p class="description" id="wp-phone-message-email-description">The Email Address input placeholder.</p>
                              </td>
                        </tr>
                        <tr>
                              <th scope="row">
                                    <label for="wp-phone-message-dropdown">Dropdown Area in ShortCode Form: </label>
                                    <?= WpPhoneMessageForm::isPremiumOnly(); ?>
                              </th>
                              <td>
                                    <input type="checkbox" id="wp-phone-message-dropdown-active"
                                          name="wp-phone-message-dropdown-active"
                                          <?= ( get_option('wp-phone-message-dropdown-active') ? 'checked' : '') ?>
                                          value="1">
                                    <label for="wp-phone-message-dropdown-active">Active Dropdown Input Area in shortcode</label>
                              </td>
                              <td>
                                    <input type="checkbox" id="wp-phone-message-dropdown-mandatory"
                                          name="wp-phone-message-dropdown-mandatory"
                                          <?= ( get_option('wp-phone-message-dropdown-mandatory') ? 'checked' : '') ?>
                                          value="required">
                                    <label for="wp-phone-message-dropdown-mandatory">Dropdown Input Area Mandatory</label>
                              </td>
                              <td>
                                    <textarea name="wp-phone-message-dropdown" id="wp-phone-message-dropdown"
                                          class="large-text code"
                                          rows="3"><?= get_option('wp-phone-message-dropdown'); ?></textarea>
                                    <p class="description" id="wp-phone-message-dropdown-description">The Dropdown input options. Please insert options separated by comma.</p>
                              </td>
                        </tr>
                        <tr>
                              <th scope="row">
                                    <label for="wp-phone-message-textarea">Text Area Placeholder in ShortCode Form: </label>
                                    <?= WpPhoneMessageForm::isPremiumOnly(); ?>
                              </th>
                              <td>
                                    <input name="wp-phone-message-textarea" type="text" id="wp-phone-message-textarea"
                                          value="<?= get_option('wp-phone-message-textarea'); ?>"
                                          class="regular-text" />
                                    <p class="description" id="wp-phone-message-textarea-description">The textarea placeholder.</p>
                              </td>
                        </tr>
                        <tr>
                              <th scope="row">
                                    <label for="wp-phone-message-button">Button Title in ShortCode Form: </label>
                              </th>
                              <td>
                                    <input name="wp-phone-message-button" type="text" id="wp-phone-message-button"
                                          value="<?= get_option('wp-phone-message-button'); ?>" class="regular-text" />
                                    <p class="description" id="wp-phone-message-button-description">The Button Title will appear on the button of the message form.</p>
                              </td>
                        </tr>
                  </tbody>
            </table>

            <div class="form-messages">
                  <?php echo get_option('wp-phone-message-form-message'); ?>
                  <input type="hidden" id="wp-phone-message-full-phone-number"
                        value="<?= get_option('wp-phone-message-full-phone-number'); ?>" />
            </div>
            <input type="hidden" name="action" value="wp-phone-message-shortcode">
            <?php
                wp_nonce_field( 'wp-phone-message-settings-save', 'wp-phone-message-form-message' );
                submit_button();
            ?>
      </form>
</div><!-- .wrap -->
<?php
    }
    else {
      ?>
      <p><?php __("You are not authorized to perform this operation.", 'wp-phone-message') ?></p>
      <?php   
    }
