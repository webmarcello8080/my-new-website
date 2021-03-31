<?php 
$categories = new \NewWebMarcello\Categories; 
if(has_post_thumbnail()){
   $blog_header_class =  'blog-header-aside';
} else {
   $blog_header_class =  'blog-header';
}
?>
<div class="col-md-4">
   <div class="card border-0 rounded-lg my-3 text-left single-blog">
      <div class="card-img-top blog-img">
         <a href="<?php the_permalink() ?>" ><?php the_post_thumbnail( 'large', ['class' => 'img-fluid'] ); ?></a>
      </div>
      <div class="card-body pb-2 <?= $blog_header_class ?>">
         <div class="d-flex justify-content-between mb-3">
            <div class="blog-author"><?= get_the_author_meta('display_name'); ?></div>
            <div class="blog-date"><?= get_the_date(); ?></div>
         </div>
         <h6 class="card-title blog-title mb-1"><a href="<?php the_permalink() ?>" ><?php the_title(); ?></a></h6>
      </div>
      <div class="card-body pt-2 blog-body">
         <div class="blog-categories"><?php $categories->getCategoryList(get_the_ID(), 'badge badge-primary', ' ') ?></div>
         <p class="card-text blog-text mt-3"><?= get_the_excerpt() ?></p>
         <h6 class="blog-read-more"><a href="<?php the_permalink() ?>" >Read More ...</a></h6>
      </div>
   </div>
</div>
