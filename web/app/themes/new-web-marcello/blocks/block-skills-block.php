<?php
// get background images
$smallest_square_background = file_get_contents( get_template_directory() . "/dist/images/smallest-square-background.svg");
$mid_square_background = file_get_contents( get_template_directory() . "/dist/images/mid-square-background.svg");
$world_map_background = get_template_directory_uri() . "/dist/images/world-map-background.svg";
// get logos
$php_logo = file_get_contents( get_template_directory() . "/dist/images/logos/php-logo.svg");
$wordpress_logo = file_get_contents( get_template_directory() . "/dist/images/logos/wordpress-logo.svg");
$sass_logo = file_get_contents( get_template_directory() . "/dist/images/logos/sass-logo.svg");
$drupal_logo = file_get_contents( get_template_directory() . "/dist/images/logos/drupal-logo.svg");
$jquery_logo = file_get_contents( get_template_directory() . "/dist/images/logos/jquery-logo.svg");
$gulp_logo = file_get_contents( get_template_directory() . "/dist/images/logos/gulp-logo.svg");
$git_logo = file_get_contents( get_template_directory() . "/dist/images/logos/git-logo.svg");
// get theme options
$new_web_marcello_theme_options = get_option( 'new_web_marcello_theme_option_name' );
$standard_button_text_0 = $new_web_marcello_theme_options['standard_button_text_0'];
?>
<section class="skills-block <?php block_field('className'); ?>">
  <div class="container-xl py-5 skills-wrapper">
    <div class="row py-5 align-items-center">
      <div class="col-lg-4 skills-body">
        <h6><?php block_field('top-title'); ?></h6>
        <h2><?php block_field('block-title'); ?></h2>
        <p class="lead"><?php block_field('block-body'); ?></p>
        <?php if(block_value('button-url')): ?>
          <p><a href="<?php block_field('button-url'); ?>" class="btn btn-primary"><?= esc_attr($standard_button_text_0) ?></a></p>
        <?php endif; ?>
      </div>
      <div class="col-lg-8 skills-img-wrapper" style="background-image:url(<?= $world_map_background ?>)">
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
