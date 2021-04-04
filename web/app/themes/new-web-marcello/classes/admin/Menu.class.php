<?php

namespace NewWebMarcello\Admin;

class Menu {
	private $new_web_marcello_theme_options;

	public function __construct() {
		add_action( 'admin_menu', array( $this, 'new_web_marcello_theme_add_plugin_page' ) );
		add_action( 'admin_init', array( $this, 'new_web_marcello_theme_page_init' ) );
	}

	public function new_web_marcello_theme_add_plugin_page() {
		add_menu_page(
			'New Web Marcello Theme', // page_title
			'New Web Marcello Theme', // menu_title
			'manage_options', // capability
			'new-web-marcello-theme', // menu_slug
			array( $this, 'new_web_marcello_theme_create_admin_page' ), // function
			'dashicons-welcome-widgets-menus', // icon_url
			60 // position
		);
	}

	public function new_web_marcello_theme_create_admin_page() {
		$this->new_web_marcello_theme_options = get_option( 'new_web_marcello_theme_option_name' ); ?>

		<div class="wrap">
			<h2>New Web Marcello Theme</h2>
			<p>Please set the following fields.</p>
			<?php settings_errors(); ?>

			<form method="post" action="options.php">
				<?php
					settings_fields( 'new_web_marcello_theme_option_group' );
					do_settings_sections( 'new-web-marcello-theme-admin' );
					submit_button();
				?>
			</form>
		</div>
	<?php }

	public function new_web_marcello_theme_page_init() {
		register_setting(
			'new_web_marcello_theme_option_group', // option_group
			'new_web_marcello_theme_option_name', // option_name
			array( $this, 'new_web_marcello_theme_sanitize' ) // sanitize_callback
		);

		add_settings_section(
			'new_web_marcello_theme_setting_section', // id
			'Theme Settings', // title
			array( $this, 'new_web_marcello_theme_section_info' ), // callback
			'new-web-marcello-theme-admin' // page
		);

   	add_settings_section(
			'new_web_marcello_blog_section', // id
			'Blog Section Settings', // title
			array( $this, 'new_web_marcello_theme_section_info' ), // callback
			'new-web-marcello-theme-admin' // page
		);

		add_settings_section(
			'new_web_marcello_404_section', // id
			'404 Page Settings', // title
			array( $this, 'new_web_marcello_theme_section_info' ), // callback
			'new-web-marcello-theme-admin' // page
		);

		add_settings_section(
			'new_web_marcello_search_section', // id
			'Search Bar Settings', // title
			array( $this, 'new_web_marcello_theme_section_info' ), // callback
			'new-web-marcello-theme-admin' // page
		);

		add_settings_field(
			'standard_button_text_0', // id
			'Standard Button Text', // title
			array( $this, 'standard_button_text_0_callback' ), // callback
			'new-web-marcello-theme-admin', // page
			'new_web_marcello_theme_setting_section' // section
		);

		add_settings_field(
			'no_posts_text_1', // id
			'No Posts Text', // title
			array( $this, 'no_posts_text_1_callback' ), // callback
			'new-web-marcello-theme-admin', // page
			'new_web_marcello_theme_setting_section' // section
		);

		add_settings_field(
			'login_button_text_2', // id
			'Login Button Text', // title
			array( $this, 'login_button_text_2_callback' ), // callback
			'new-web-marcello-theme-admin', // page
			'new_web_marcello_theme_setting_section' // section
		);

		add_settings_field(
			'latest_post_title_4', // id
			'Latest Post Title', // title
			array( $this, 'latest_post_title_4_callback' ), // callback
			'new-web-marcello-theme-admin', // page
			'new_web_marcello_blog_section' // section
		);

  		add_settings_field(
			'404_page_title_3', // id
			'404 Page Title', // title
			array( $this, 'page_404_title_3_callback' ), // callback
			'new-web-marcello-theme-admin', // page
			'new_web_marcello_404_section' // section
		);

		add_settings_field(
			'404_page_content_5', // id
			'404 Page Content', // title
			array( $this, 'page_404_content_5_callback' ), // callback
			'new-web-marcello-theme-admin', // page
			'new_web_marcello_404_section' // section
		);

		add_settings_field(
			'comment_form_title_6', // id
			'Comment Form Title', // title
			array( $this, 'comment_form_title_6_callback' ), // callback
			'new-web-marcello-theme-admin', // page
			'new_web_marcello_blog_section' // section
		);

		add_settings_field(
			'read_more_7', // id
			'Read More Text', // title
			array( $this, 'read_more_7_callback' ), // callback
			'new-web-marcello-theme-admin', // page
			'new_web_marcello_blog_section' // section
		);
	}

	public function new_web_marcello_theme_sanitize($input) {
		$sanitary_values = array();
		if ( isset( $input['standard_button_text_0'] ) ) {
			$sanitary_values['standard_button_text_0'] = sanitize_text_field( $input['standard_button_text_0'] );
		}

		if ( isset( $input['no_posts_text_1'] ) ) {
			$sanitary_values['no_posts_text_1'] = sanitize_text_field( $input['no_posts_text_1'] );
		}

		if ( isset( $input['login_button_text_2'] ) ) {
			$sanitary_values['login_button_text_2'] = sanitize_text_field( $input['login_button_text_2'] );
		}

		if ( isset( $input['404_page_title_3'] ) ) {
			$sanitary_values['404_page_title_3'] = sanitize_text_field( $input['404_page_title_3'] );
		}

		if ( isset( $input['latest_post_title_4'] ) ) {
			$sanitary_values['latest_post_title_4'] = sanitize_text_field( $input['latest_post_title_4'] );
		}

		if ( isset( $input['404_page_content_5'] ) ) {
			$sanitary_values['404_page_content_5'] = esc_textarea( $input['404_page_content_5'] );
		}

		if ( isset( $input['comment_form_title_6'] ) ) {
			$sanitary_values['comment_form_title_6'] = sanitize_text_field( $input['comment_form_title_6'] );
		}

		if ( isset( $input['read_more_7'] ) ) {
			$sanitary_values['read_more_7'] = sanitize_text_field( $input['read_more_7'] );
		}

		return $sanitary_values;
	}

	public function new_web_marcello_theme_section_info() {
		
	}

	public function standard_button_text_0_callback() {
		printf(
			'<input class="regular-text" type="text" name="new_web_marcello_theme_option_name[standard_button_text_0]" id="standard_button_text_0" value="%s">',
			isset( $this->new_web_marcello_theme_options['standard_button_text_0'] ) ? esc_attr( $this->new_web_marcello_theme_options['standard_button_text_0']) : ''
		);
	}

	public function no_posts_text_1_callback() {
		printf(
			'<input class="regular-text" type="text" name="new_web_marcello_theme_option_name[no_posts_text_1]" id="no_posts_text_1" value="%s">',
			isset( $this->new_web_marcello_theme_options['no_posts_text_1'] ) ? esc_attr( $this->new_web_marcello_theme_options['no_posts_text_1']) : ''
		);
	}

	public function login_button_text_2_callback() {
		printf(
			'<input class="regular-text" type="text" name="new_web_marcello_theme_option_name[login_button_text_2]" id="login_button_text_2" value="%s">',
			isset( $this->new_web_marcello_theme_options['login_button_text_2'] ) ? esc_attr( $this->new_web_marcello_theme_options['login_button_text_2']) : ''
		);
	}

	public function page_404_title_3_callback() {
		printf(
			'<input class="regular-text" type="text" name="new_web_marcello_theme_option_name[404_page_title_3]" id="404_page_title_3" value="%s">',
			isset( $this->new_web_marcello_theme_options['404_page_title_3'] ) ? esc_attr( $this->new_web_marcello_theme_options['404_page_title_3']) : ''
		);
	}

	public function latest_post_title_4_callback() {
		printf(
			'<input class="regular-text" type="text" name="new_web_marcello_theme_option_name[latest_post_title_4]" id="latest_post_title_4" value="%s">',
			isset( $this->new_web_marcello_theme_options['latest_post_title_4'] ) ? esc_attr( $this->new_web_marcello_theme_options['latest_post_title_4']) : ''
		);
	}

	public function page_404_content_5_callback() {
		printf(
			'<textarea class="large-text" rows="5" name="new_web_marcello_theme_option_name[404_page_content_5]" id="404_page_content_5">%s</textarea>',
			isset( $this->new_web_marcello_theme_options['404_page_content_5'] ) ? esc_attr( $this->new_web_marcello_theme_options['404_page_content_5']) : ''
		);
	}

	public function comment_form_title_6_callback() {
		printf(
			'<input class="regular-text" type="text" name="new_web_marcello_theme_option_name[comment_form_title_6]" id="comment_form_title_6" value="%s">',
			isset( $this->new_web_marcello_theme_options['comment_form_title_6'] ) ? esc_attr( $this->new_web_marcello_theme_options['comment_form_title_6']) : ''
		);
	}

	public function read_more_7_callback() {
		printf(
			'<input class="regular-text" type="text" name="new_web_marcello_theme_option_name[read_more_7]" id="read_more_7" value="%s">',
			isset( $this->new_web_marcello_theme_options['read_more_7'] ) ? esc_attr( $this->new_web_marcello_theme_options['read_more_7']) : ''
		);
	}

}

/* 
 * Retrieve this value with:
 * $new_web_marcello_theme_options = get_option( 'new_web_marcello_theme_option_name' ); // Array of All Options
 * $standard_button_text_0 = $new_web_marcello_theme_options['standard_button_text_0']; // Standard Button Text
 * $no_posts_text_1 = $new_web_marcello_theme_options['no_posts_text_1']; // No Posts Text
 * $login_button_text_2 = $new_web_marcello_theme_options['login_button_text_2']; // Login Button Text
 * $404_page_title_3 = $new_web_marcello_theme_options['404_page_title_3']; // 404 Page Title
 * $latest_post_title_4 = $new_web_marcello_theme_options['latest_post_title_4']; // Latest Post Title
 * $404_page_content_5 = $new_web_marcello_theme_options['404_page_content_5']; // 404 Page Content
 * $comment_form_title_6 = $new_web_marcello_theme_options['comment_form_title_6']; // Comment Form Title
 * $read_more_7 = $new_web_marcello_theme_options['read_more_7']; // Read More
 */
