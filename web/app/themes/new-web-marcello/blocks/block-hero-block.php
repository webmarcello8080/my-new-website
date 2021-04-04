<?php
$mouse_icon = file_get_contents( get_template_directory() . "/dist/images/icons/mouse-icon.svg");
$hero_background = file_get_contents( get_template_directory() . "/dist/images/hero-background.svg");
?>
<section class="hero-block vh-100 d-flex align-items-center <?php block_field('className'); ?>">
  <div class="container-xl">
    <div class="row">
      <div class="col-md-6">
        <h1><?php block_field('header-text'); ?></h1>
        <p class="lead"><?php block_field('main-text'); ?></p>
        <?php if(block_value('button-text')) : ?>
        <p><a href="<?php block_field('button-url') ?>" class="btn btn-primary"><?php block_field('button-text'); ?></a></p>
        <?php endif; ?>
      </div>
    </div>
  </div>
  <div class="mouse-icon"><?= $mouse_icon ?></div>
  <div class="hero-background-image"><?= $hero_background ?></div>
</section>
