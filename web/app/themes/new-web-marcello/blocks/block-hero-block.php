<?php
$mouse_icon = file_get_contents( get_template_directory() . "/dist/images/icons/mouse-icon.svg");
$hero_background = file_get_contents( get_template_directory() . "/dist/images/hero-background.svg");
$images = new \NewWebMarcello\Frontend\Images; 
?>
<section class="hero-block vh-100 d-flex align-items-center <?php block_field('className'); ?>">
  <div class="container-xl">
    <div class="row align-items-center">
      <div class="col-md-6">
        <h1><?php block_field('header-text'); ?></h1>
        <p class="lead"><?php block_field('main-text'); ?></p>
        <?php if(block_value('button-text')) : ?>
        <p><a href="<?php block_field('button-url') ?>" class="btn btn-primary"><?php block_field('button-text'); ?></a></p>
        <?php endif; ?>
      </div>
      <div class="col-md-6">
        <div class="hero-block-img">
          <?php $images->get_image_by_id(block_value('side-image') , 'large', 'img-fluid'); ?>
        </div>
      </div>
    </div>
  </div>
  <div class="mouse-icon"><?= $mouse_icon ?></div>
  <div class="hero-background-image"><?= $hero_background ?></div>
</section>
