<?php
// get background images
$smallest_square_background = file_get_contents( get_template_directory() . "/dist/images/smallest-square-background.svg");
$mid_square_background = file_get_contents( get_template_directory() . "/dist/images/mid-square-background.svg");
?>
<header class="category-header bg-light">
   <div class="container-xl py-5 category-header-wrapper">
      <h1 class="category-title mb-5"><?= single_cat_title() ?></h1>
      <h5 class="category-description"><?= category_description() ?></h5>
   </div>
   <div class="mid-square-background img-fluid"><?= $mid_square_background ?></div>
   <div class="smallest-square-background"><?= $smallest_square_background ?></div>
</header>