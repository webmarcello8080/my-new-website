<?php
get_header();

/* Start the Loop */
while ( have_posts() ) :
	
	the_post();

	if(!is_front_page()){
		get_template_part( 'template-parts/header/page-header' );
	}
	
	get_template_part( 'template-parts/content/content-page' );

endwhile; // End of the loop.

get_footer();
