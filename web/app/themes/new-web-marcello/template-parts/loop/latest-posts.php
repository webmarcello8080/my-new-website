<?php 
$query_result = new WP_Query( array(
      'category__in'   => wp_get_post_categories(get_the_ID()),
      'post_type'      => get_post_type(get_the_ID()),
      'post__not_in'    => array(get_the_ID()),
      'posts_per_page'  => '3',
      )
   );
// category URL
$category_id = get_cat_ID( 'Blog' );
$category_link = get_category_link( $category_id );
// get background images
$big_square_background = file_get_contents( get_template_directory() . "/dist/images/big-square-background.svg");
$smallest_square_background = file_get_contents( get_template_directory() . "/dist/images/smallest-square-background.svg");
?>
<section class="blog-block py-5 bg-primary text-center">
   <div class="container-xl blog-wrapper">
      <h2 class="blog-block-title text-light"><?= __('You May Like', 'new_web_marcello') ?></h2>
      <div class="row mt-5">
         <?php if ( $query_result->have_posts() ) : ?>
            <?php while ( $query_result->have_posts() ) : $query_result->the_post(); ?>
               <?php get_template_part( 'template-parts/loop/blog' ); ?>
            <?php endwhile; ?>
            <?php wp_reset_postdata(); ?>
         <?php else : ?>
            <p><?= __('No Posts', 'new_web_marcello'); ?></p>
         <?php endif; ?>
      </div>
   </div>
   <div class="mt-4 blog-block-footer">
      <a href="<?= esc_url( $category_link ); ?>" class="btn btn-light blog-block-btn"><?= __('Explore more', 'new_web_marcello') ?></a>
   </div>
   <div class="big-square-background img-fluid"><?= $big_square_background ?></div>
   <div class="smallest-square-background"><?= $smallest_square_background ?></div>
</section>