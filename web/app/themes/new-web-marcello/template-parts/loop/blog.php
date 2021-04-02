<?php 
$categories = new \NewWebMarcello\Categories; 
?>
<div class="col-md-4">
   <div class="card border-0 rounded-lg my-3 text-left single-blog">
      <?php if(has_post_thumbnail()): ?>
         <div class="card-img-top p-3 blog-img">
            <a href="<?php the_permalink() ?>" ><?php the_post_thumbnail( 'large', ['class' => 'img-fluid rounded'] ); ?></a>
         </div>
      <?php endif; ?>
      <div class="card-body blog-header">
         <h6 class="blog-author"><?= get_the_author_meta('display_name'); ?></h6>
         <h6 class="card-title mb-2 blog-title"><a href="<?php the_permalink() ?>" ><?php the_title(); ?></a></h6>
      </div>
      <div class="card-body pt-0 blog-body">
         <div class="blog-categories"><?php $categories->getCategoryList(get_the_ID(), 'badge badge-pill badge-primary', ' ') ?></div>
         <p class="card-text blog-text mt-3"><small><?= get_the_excerpt() ?></small></p>
         <div class="d-flex justify-content-between">
            <div class="blog-date"><?= get_the_date(); ?></div>
            <h6 class="blog-read-more"><a href="<?php the_permalink() ?>" >Read More ...</a></h6>
         </div>
      </div>
   </div>
</div>
