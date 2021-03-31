<?php
$wordpress_logo = file_get_contents( get_template_directory() . "/dist/images/wordpress-logo.svg");
?>
<section class="skills-block <?php block_field('className'); ?>">
  <div class="container-xl py-5 skills-wrapper">
    <div class="row">
      <div class="col-md-5 skills-body">
         <h6><?php block_field('top-title'); ?></h6>
         <h2><?php block_field('block-title'); ?></h2>
         <p><?php block_field('block-body'); ?></p>
         <p><a href="<?php block_field('button-url'); ?>" class="btn btn-primary btn-large">Explore more</a></p>
      </div>
      <div class="col-md-7 skills-img-wrapper">
         <?= $wordpress_logo ?>
      </div>
    </div>
  </div>
</section>
