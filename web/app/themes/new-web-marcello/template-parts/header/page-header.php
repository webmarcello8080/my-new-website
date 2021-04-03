<?php
$featured_image = get_the_post_thumbnail_url();
// get background images
$hero_background = file_get_contents( get_template_directory() . "/dist/images/hero-background.svg");
?>
<header class="page-header mb-5" style="background-image: url('<?php echo $featured_image; ?>')">
   <div class="container-xl py-5 page-header-wrapper">
      <h1 class="page-title"><?= get_the_title() ?></h1>
   </div>
   <div class="hero-background-image"><?= $hero_background ?></div>
</header>