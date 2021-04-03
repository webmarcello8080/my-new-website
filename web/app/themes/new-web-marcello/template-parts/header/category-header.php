<?php
// get background images
$hero_background = file_get_contents( get_template_directory() . "/dist/images/hero-background.svg");
$smallest_square_background = file_get_contents( get_template_directory() . "/dist/images/smallest-square-background.svg");
?>
<header class="category-header">
   <div class="container-xl py-5 category-header-wrapper">
      <h1 class="category-title"><?= single_cat_title() ?></h1>
      <?php the_archive_description('<div class="category-description lead">', '</div>') ?>
   </div>
   <div class="smallest-square-background"><?= $smallest_square_background ?></div>
   <div class="hero-background-image"><?= $hero_background ?></div>
</header>