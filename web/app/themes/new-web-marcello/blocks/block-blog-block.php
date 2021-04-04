<?php 
$query_result = new WP_Query( array(
   'category_name' => 'blog',
   'posts_per_page' => block_value('number-of-posts'),
));
// get background images
$big_square_background = file_get_contents( get_template_directory() . "/dist/images/big-square-background.svg");
$smallest_square_background = file_get_contents( get_template_directory() . "/dist/images/smallest-square-background.svg");
// get theme options
$new_web_marcello_theme_options = get_option( 'new_web_marcello_theme_option_name' );
$standard_button_text_0 = $new_web_marcello_theme_options['standard_button_text_0'];
$no_posts_text_1 = $new_web_marcello_theme_options['no_posts_text_1'];
?>
<section class="blog-block py-5 text-center bg-light <?php block_field('className'); ?>">
   <div class="container-xl blog-wrapper">
      <h2 class="blog-block-title"><?php block_field('block-title'); ?></h2>
      <p class="lead"><?php block_field('block-description'); ?></p>
      <div class="row mt-5">
         <?php if ( $query_result->have_posts() ) : ?>
            <?php while ( $query_result->have_posts() ) : $query_result->the_post(); ?>
               <?php get_template_part( 'template-parts/loop/blog' ); ?>
            <?php endwhile; ?>
            <?php wp_reset_postdata(); ?>
         <?php else : ?>
            <p><?= esc_attr($no_posts_text_1) ?></p>
         <?php endif; ?>
      </div>
   </div>
   <div class="mt-4 blog-block-footer">
      <a href="<?php block_field('button-url'); ?>" class="btn btn-primary blog-block-btn"><?= esc_attr($standard_button_text_0) ?></a>
   </div>
   <div class="big-square-background img-fluid"><?= $big_square_background ?></div>
   <div class="smallest-square-background"><?= $smallest_square_background ?></div>
</section>