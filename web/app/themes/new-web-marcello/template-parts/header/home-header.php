<?php
// get background images
$smallest_square_background = file_get_contents( get_template_directory() . "/dist/images/smallest-square-background.svg");
$mid_square_background = file_get_contents( get_template_directory() . "/dist/images/mid-square-background.svg");
?>
<header class="category-header bg-light">
   <div class="container-xl py-5 category-header-wrapper">
      <h1 class="category-title mb-5">Home</h1>
      <?php the_archive_description('<div class="category-description lead">', '</div>') ?>
   </div>
   <div class="mid-square-background img-fluid"><?= $mid_square_background ?></div>
   <div class="smallest-square-background"><?= $smallest_square_background ?></div>
</header>