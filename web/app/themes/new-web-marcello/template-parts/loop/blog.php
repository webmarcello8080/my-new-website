<div class="col-md-4">
   <div class="card border-0 mb-3 text-left single-blog">
      <div class="card-img-top blog-img">
         <a href="<?php the_permalink() ?>" ><?php the_post_thumbnail( 'large', ['class' => 'img-fluid'] ); ?></a>
      </div>
      <div class="card-body pb-2 blog-header">
         <div class="d-flex justify-content-between mb-3">
            <div class="blog-author"><?= get_the_author_meta('display_name'); ?></div>
            <div class="blog-date"><?= get_the_date(); ?></div>
         </div>
         <h6 class="card-title blog-title mb-1"><a href="<?php the_permalink() ?>" ><?php the_title(); ?></a></h6>
      </div>
      <div class="card-body pt-0 blog-body">
         <p class="card-text blog-text mt-3"><?php the_excerpt() ?></p>
         <h6 class="blog-read-more"><a href="<?php the_permalink() ?>" >Read More</a></h6>
      </div>
   </div>
</div>
