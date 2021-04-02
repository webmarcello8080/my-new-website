<?php
get_header();

/* Start the Loop */
while ( have_posts() ) :
	
	the_post();

	if(!is_front_page()){
		get_template_part( 'template-parts/header/page-header' );
	}
	
	get_template_part( 'template-parts/content/content-page' );

	// If comments are open or there is at least one comment, load up the comment template.
	if ( comments_open() || get_comments_number() ) {
		comments_template();
	}

endwhile; // End of the loop.

get_footer();
