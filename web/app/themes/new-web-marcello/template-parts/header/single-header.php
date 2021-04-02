<?php
// get background images
$smallest_square_background = file_get_contents( get_template_directory() . "/dist/images/smallest-square-background.svg");
$mid_square_background = file_get_contents( get_template_directory() . "/dist/images/mid-square-background.svg");
?>
<header class="post-header mb-5 bg-light">
   <div class="container-xl py-5 post-header-wrapper">
      <div class="d-flex justify-content-between mb-4">
         <h6 class="post-author"><?= get_the_author_meta('display_name'); ?></h6>
         <h6 class="post-date"><?= get_the_date(); ?></h6>
      </div>
      <h1 class="post-title text-center"><?= get_the_title() ?></h1>
   </div>
   <div class="mid-square-background img-fluid"><?= $mid_square_background ?></div>
   <div class="smallest-square-background"><?= $smallest_square_background ?></div>
</header>