<?php
get_header();

/* Start the Loop */
while (have_posts()) :

	the_post();

	get_template_part('template-parts/header/single-' . get_post_type() . '-header');

	get_template_part('template-parts/content/content', get_post_type());

endwhile; // End of the loop.

get_footer();
