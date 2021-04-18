<?php
$categories = new \NewWebMarcello\frontend\Categories;
?>
<div class="col-md-4">
<div class="card my-3 rounded-0 single-portfolio">
   <?php if(has_post_thumbnail()): ?>
      <a href="<?php the_permalink() ?>" >
         <div class="card-img-top rounded-0 portfolio-img-wrapper">
            <?php the_post_thumbnail( 'large', ['class' => 'portfolio-img'] ); ?>
            <div class="d-flex justify-content-center align-items-center portfolio-overlay">
               <div class="p-3 text-center">
                  <h5 class="portfolio-title"><?php the_title(); ?></h5>
                  <div class="portfolio-categories"><?php $categories->getCategoryList(get_the_ID(), '', ' - ', 'topics') ?></div>
               </div>
            </div>
         </div>
      </a>
   <?php endif; ?>
</div>
</div>