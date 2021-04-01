<?php 
$query_result = new WP_Query( array(
   'category_name' => 'blog',
   'posts_per_page' => block_value('number-of-posts'),
));
// get background images
$smallest_square_background = file_get_contents( get_template_directory() . "/dist/images/smallest-square-background.svg");
?>
<section class="blog-block py-5 text-center bg-light <?php block_field('className'); ?>">
   <div class="container-xl blog-wrapper">
      <h2><?php block_field('block-title'); ?></h2>
      <p><?php block_field('block-description'); ?></p>
      <div class="row mt-5">
         <?php if ( $query_result->have_posts() ) : ?>
            <?php while ( $query_result->have_posts() ) : $query_result->the_post(); ?>
               <?php get_template_part( 'template-parts/loop/blog' ); ?>
            <?php endwhile; ?>
            <?php wp_reset_postdata(); ?>
         <?php else : ?>
            <p><?php __('No Posts', 'new_web_marcello'); ?></p>
         <?php endif; ?>
      </div>
   </div>
   <div class="mt-4 blog-block-footer">
      <a href="<?php block_field('button-url'); ?>" class="btn btn-primary service-btn">Explore more</a>
   </div>
   <div class="smallest-square-background"><?= $smallest_square_background ?></div>
</section>