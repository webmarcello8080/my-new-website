<?php
/*
 * Generate a unique ID for each form and a string containing an aria-label
 * if one was passed to get_search_form() in the args array.
 */
$unique_id = wp_unique_id( 'search-form-' );

$aria_label = ! empty( $args['aria_label'] ) ? 'aria-label="' . esc_attr( $args['aria_label'] ) . '"' : '';
?>
<form role="search" <?php echo $aria_label; ?> method="get" class="search-form form-inline justify-content-center" action="<?php echo esc_url( home_url( '/' ) ); ?>">
	<div class="form-group">
		<label class="" for="<?php echo esc_attr( $unique_id ); ?>"><?php _e( 'Search&hellip;', 'new_web_marcello' ); ?></label>
	</div>
	<div class="form-group mx-3">
		<input type="search" id="<?php echo esc_attr( $unique_id ); ?>" class="search-field form-control" value="<?php echo get_search_query(); ?>" name="s" />
	</div>
	<input type="submit" class="search-submit btn btn-secondary" value="<?php echo esc_attr_x( 'Search', 'submit button', 'new_web_marcello' ); ?>" />
</form>
