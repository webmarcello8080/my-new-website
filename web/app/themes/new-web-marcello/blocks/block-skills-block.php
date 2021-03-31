<?php
// get background images
$smallest_square_background = file_get_contents( get_template_directory() . "/dist/images/smallest-square-background.svg");
$mid_square_background = file_get_contents( get_template_directory() . "/dist/images/mid-square-background.svg");
// get logos
$php_logo = file_get_contents( get_template_directory() . "/dist/images/logos/php-logo.svg");
$wordpress_logo = file_get_contents( get_template_directory() . "/dist/images/logos/wordpress-logo.svg");
$sass_logo = file_get_contents( get_template_directory() . "/dist/images/logos/sass-logo.svg");
$drupal_logo = file_get_contents( get_template_directory() . "/dist/images/logos/drupal-logo.svg");
$jquery_logo = file_get_contents( get_template_directory() . "/dist/images/logos/jquery-logo.svg");
$gulp_logo = file_get_contents( get_template_directory() . "/dist/images/logos/gulp-logo.svg");
$git_logo = file_get_contents( get_template_directory() . "/dist/images/logos/git-logo.svg");
?>
<section class="skills-block <?php block_field('className'); ?>">
  <div class="container-xl py-5 skills-wrapper">
    <div class="row py-5 align-items-center">
      <div class="col-md-4 skills-body">
         <h6><?php block_field('top-title'); ?></h6>
         <h2><?php block_field('block-title'); ?></h2>
         <p><?php block_field('block-body'); ?></p>
         <p><a href="<?php block_field('button-url'); ?>" class="btn btn-primary btn-large">Explore more</a></p>
      </div>
      <div class="col-md-8 skills-img-wrapper">
        <div class="php-logo"><?= $php_logo ?></div>
        <div class="wordpress-logo"><?= $wordpress_logo ?></div>
        <div class="sass-logo"><?= $sass_logo ?></div>
        <div class="drupal-logo"><?= $drupal_logo ?></div>
        <div class="jquery-logo"><?= $jquery_logo ?></div>
        <div class="gulp-logo"><?= $gulp_logo ?></div>
        <div class="git-logo"><?= $git_logo ?></div>
      </div>
    </div>
  </div>
  <div class="mid-square-background img-fluid"><?= $mid_square_background ?></div>
  <div class="smallest-square-background"><?= $smallest_square_background ?></div>
</section>
