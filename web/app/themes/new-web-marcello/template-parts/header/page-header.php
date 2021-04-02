<?php
$featured_image = get_the_post_thumbnail_url();
// get background images
$smallest_square_background = file_get_contents( get_template_directory() . "/dist/images/smallest-square-background.svg");
$mid_square_background = file_get_contents( get_template_directory() . "/dist/images/mid-square-background.svg");
?>
<header class="page-header mb-5" style="background-image: url('<?php echo $featured_image; ?>')">
   <div class="container-xl py-5 page-header-wrapper">
      <h1 class="page-title"><?= get_the_title() ?></h1>
   </div>
   <div class="mid-square-background img-fluid"><?= $mid_square_background ?></div>
   <div class="smallest-square-background"><?= $smallest_square_background ?></div>
</header>