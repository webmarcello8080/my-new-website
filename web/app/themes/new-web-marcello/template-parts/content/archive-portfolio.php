<?php 
// get theme options
$new_web_marcello_theme_options = get_option( 'new_web_marcello_theme_option_name' );
$no_posts_text_1 = $new_web_marcello_theme_options['no_posts_text_1'];
?>
<div class="portfolio-category-wrapper">

	<?php if ( have_posts() ) : ?>

		<div id="masonry-wrapper" class="row my-5 portfolio-columns">

			<?php while ( have_posts() ) : ?>
				<?php the_post(); ?>
				<?php get_template_part( 'template-parts/loop/portfolio' ); ?>
			<?php endwhile; ?>

			<?php wp_reset_postdata(); ?>

		</div>
		
	<?php else : ?>
		<p><?= esc_attr($no_posts_text_1) ?></p>
	<?php endif; ?>

</div>
