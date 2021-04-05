<?php
// get background images
$hero_background = file_get_contents( get_template_directory() . "/dist/images/hero-background.svg");
$smallest_square_background = file_get_contents( get_template_directory() . "/dist/images/smallest-square-background.svg");
?>
<header class="portfolio-header mb-5">
   <div class="container-xl py-5 post-header-wrapper">
      <h1 class="portfolio-title"><?= get_the_title() ?></h1>
   </div>
   <div class="smallest-square-background"><?= $smallest_square_background ?></div>
   <div class="hero-background-image"><?= $hero_background ?></div>
</header>