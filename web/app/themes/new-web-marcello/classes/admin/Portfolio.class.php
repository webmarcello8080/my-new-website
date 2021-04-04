<?php

namespace NewWebMarcello\Admin;

/*
 * Retrieving the values:
 * Position = get_post_meta( get_the_ID(), 'portfolio_fields_position', true )
 * Portfolio Logo = get_post_meta( get_the_ID(), 'portfolio_fields_portfolio-logo', true )
 * Image 1 = get_post_meta( get_the_ID(), 'portfolio_fields_image-1', true )
 * Image 2 = get_post_meta( get_the_ID(), 'portfolio_fields_image-2', true )
 * Image 3 = get_post_meta( get_the_ID(), 'portfolio_fields_image-3', true )
 * Image 4 = get_post_meta( get_the_ID(), 'portfolio_fields_image-4', true )
 */
class Portfolio {

   private $config = '{"title":"Portfolio Fields","prefix":"portfolio_fields_","domain":"new_web_marcello","class_name":"New_web_marcello","post-type":["portfolio"],"context":"normal","priority":"default","cpt":"portfolio","fields":[{"type":"number","label":"Position","max":"100","min":"1","id":"portfolio_fields_position"},{"type":"media","label":"Portfolio Logo","return":"url","id":"portfolio_fields_portfolio-logo"},{"type":"media","label":"Image 1","return":"url","id":"portfolio_fields_image-1"},{"type":"media","label":"Image 2","return":"url","id":"portfolio_fields_image-2"},{"type":"media","label":"Image 3","return":"url","id":"portfolio_fields_image-3"},{"type":"media","label":"Image 4","return":"url","id":"portfolio_fields_image-4"}]}';

   public function __construct() {
		add_action( 'init', array( $this,'custom_post_type'), 0 );

		$this->config = json_decode( $this->config, true );
		$this->process_cpts();
		add_action( 'add_meta_boxes', [ $this, 'add_meta_boxes' ] );
		add_action( 'admin_enqueue_scripts', [ $this, 'admin_enqueue_scripts' ] );
		add_action( 'admin_head', [ $this, 'admin_head' ] );
		add_action( 'save_post', [ $this, 'save_post' ] );
	}

   // Register Custom Post Type
   public function custom_post_type() {

      $labels = array(
         'name'                  => _x( 'Portfolio', 'Post Type General Name', 'new_web_marcello' ),
         'singular_name'         => _x( 'Portfolio', 'Post Type Singular Name', 'new_web_marcello' ),
         'menu_name'             => __( 'Portfolio', 'new_web_marcello' ),
         'name_admin_bar'        => __( 'Portfolio', 'new_web_marcello' ),
         'archives'              => __( 'Item Archives', 'new_web_marcello' ),
         'attributes'            => __( 'Item Attributes', 'new_web_marcello' ),
         'parent_item_colon'     => __( 'Parent Item:', 'new_web_marcello' ),
         'all_items'             => __( 'All Items', 'new_web_marcello' ),
         'add_new_item'          => __( 'Add New Item', 'new_web_marcello' ),
         'add_new'               => __( 'Add New', 'new_web_marcello' ),
         'new_item'              => __( 'New Item', 'new_web_marcello' ),
         'edit_item'             => __( 'Edit Item', 'new_web_marcello' ),
         'update_item'           => __( 'Update Item', 'new_web_marcello' ),
         'view_item'             => __( 'View Item', 'new_web_marcello' ),
         'view_items'            => __( 'View Items', 'new_web_marcello' ),
         'search_items'          => __( 'Search Item', 'new_web_marcello' ),
         'not_found'             => __( 'Not found', 'new_web_marcello' ),
         'not_found_in_trash'    => __( 'Not found in Trash', 'new_web_marcello' ),
         'featured_image'        => __( 'Featured Image', 'new_web_marcello' ),
         'set_featured_image'    => __( 'Set featured image', 'new_web_marcello' ),
         'remove_featured_image' => __( 'Remove featured image', 'new_web_marcello' ),
         'use_featured_image'    => __( 'Use as featured image', 'new_web_marcello' ),
         'insert_into_item'      => __( 'Insert into item', 'new_web_marcello' ),
         'uploaded_to_this_item' => __( 'Uploaded to this item', 'new_web_marcello' ),
         'items_list'            => __( 'Items list', 'new_web_marcello' ),
         'items_list_navigation' => __( 'Items list navigation', 'new_web_marcello' ),
         'filter_items_list'     => __( 'Filter items list', 'new_web_marcello' ),
      );
      $args = array(
         'label'                 => __( 'Portfolio', 'new_web_marcello' ),
         'description'           => __( 'What I have been working on', 'new_web_marcello' ),
         'labels'                => $labels,
         'supports'              => array( 'title', 'editor', 'thumbnail', 'custom-fields' ),
         'taxonomies'            => array( 'category', 'post_tag' ),
         'hierarchical'          => false,
         'public'                => true,
         'show_ui'               => true,
         'show_in_menu'          => true,
         'menu_position'         => 5,
         'menu_icon'             => 'dashicons-format-gallery',
         'show_in_admin_bar'     => true,
         'show_in_nav_menus'     => true,
         'can_export'            => true,
         'has_archive'           => true,
         'exclude_from_search'   => false,
         'publicly_queryable'    => true,
         'capability_type'       => 'page',
      );
      register_post_type( 'portfolio', $args );

   }

	public function process_cpts() {
		if ( !empty( $this->config['cpt'] ) ) {
			if ( empty( $this->config['post-type'] ) ) {
				$this->config['post-type'] = [];
			}
			$parts = explode( ',', $this->config['cpt'] );
			$parts = array_map( 'trim', $parts );
			$this->config['post-type'] = array_merge( $this->config['post-type'], $parts );
		}
	}

	public function add_meta_boxes() {
		foreach ( $this->config['post-type'] as $screen ) {
			add_meta_box(
				sanitize_title( $this->config['title'] ),
				$this->config['title'],
				[ $this, 'add_meta_box_callback' ],
				$screen,
				$this->config['context'],
				$this->config['priority']
			);
		}
	}

	public function admin_enqueue_scripts() {
		global $typenow;
		if ( in_array( $typenow, $this->config['post-type'] ) ) {
			wp_enqueue_media();
		}
	}

	public function admin_head() {
		global $typenow;
		if ( in_array( $typenow, $this->config['post-type'] ) ) {
			?><script>
				jQuery.noConflict();
				(function($) {
					$(function() {
						$('body').on('click', '.rwp-media-toggle', function(e) {
							e.preventDefault();
							let button = $(this);
							let rwpMediaUploader = null;
							rwpMediaUploader = wp.media({
								title: button.data('modal-title'),
								button: {
									text: button.data('modal-button')
								},
								multiple: true
							}).on('select', function() {
								let attachment = rwpMediaUploader.state().get('selection').first().toJSON();
								button.prev().val(attachment[button.data('return')]);
							}).open();
						});
					});
				})(jQuery);
			</script><?php
		}
	}

	public function save_post( $post_id ) {
		foreach ( $this->config['fields'] as $field ) {
			switch ( $field['type'] ) {
				default:
					if ( isset( $_POST[ $field['id'] ] ) ) {
						$sanitized = sanitize_text_field( $_POST[ $field['id'] ] );
						update_post_meta( $post_id, $field['id'], $sanitized );
					}
			}
		}
	}

	public function add_meta_box_callback() {
		$this->fields_table();
	}

	private function fields_table() {
		?><table class="form-table" role="presentation">
			<tbody><?php
				foreach ( $this->config['fields'] as $field ) {
					?><tr>
						<th scope="row"><?php $this->label( $field ); ?></th>
						<td><?php $this->field( $field ); ?></td>
					</tr><?php
				}
			?></tbody>
		</table><?php
	}

	private function label( $field ) {
		switch ( $field['type'] ) {
			case 'media':
				printf(
					'<label class="" for="%s_button">%s</label>',
					$field['id'], $field['label']
				);
				break;
			default:
				printf(
					'<label class="" for="%s">%s</label>',
					$field['id'], $field['label']
				);
		}
	}

	private function field( $field ) {
		switch ( $field['type'] ) {
			case 'number':
				$this->input_minmax( $field );
				break;
			case 'media':
				$this->input( $field );
				$this->media_button( $field );
				break;
			default:
				$this->input( $field );
		}
	}

	private function input( $field ) {
		if ( $field['type'] === 'media' ) {
			$field['type'] = 'text';
		}
		printf(
			'<input class="regular-text %s" id="%s" name="%s" %s type="%s" value="%s">',
			isset( $field['class'] ) ? $field['class'] : '',
			$field['id'], $field['id'],
			isset( $field['pattern'] ) ? "pattern='{$field['pattern']}'" : '',
			$field['type'],
			$this->value( $field )
		);
	}

	private function input_minmax( $field ) {
		printf(
			'<input class="regular-text" id="%s" %s %s name="%s" %s type="%s" value="%s">',
			$field['id'],
			isset( $field['max'] ) ? "max='{$field['max']}'" : '',
			isset( $field['min'] ) ? "min='{$field['min']}'" : '',
			$field['id'],
			isset( $field['step'] ) ? "step='{$field['step']}'" : '',
			$field['type'],
			$this->value( $field )
		);
	}

	private function media_button( $field ) {
		printf(
			' <button class="button rwp-media-toggle" data-modal-button="%s" data-modal-title="%s" data-return="%s" id="%s_button" name="%s_button" type="button">%s</button>',
			isset( $field['modal-button'] ) ? $field['modal-button'] : __( 'Select this file', 'new_web_marcello' ),
			isset( $field['modal-title'] ) ? $field['modal-title'] : __( 'Choose a file', 'new_web_marcello' ),
			$field['return'],
			$field['id'], $field['id'],
			isset( $field['button-text'] ) ? $field['button-text'] : __( 'Upload', 'new_web_marcello' )
		);
	}

	private function value( $field ) {
		global $post;
		if ( metadata_exists( 'post', $post->ID, $field['id'] ) ) {
			$value = get_post_meta( $post->ID, $field['id'], true );
		} else if ( isset( $field['default'] ) ) {
			$value = $field['default'];
		} else {
			return '';
		}
		return str_replace( '\u0027', "'", $value );
	}
}