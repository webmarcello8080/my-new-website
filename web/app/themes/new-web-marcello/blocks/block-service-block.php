<?php
// background images
$big_square_background = file_get_contents( get_template_directory() . "/dist/images/big-square-background.svg");
$small_square_background = file_get_contents( get_template_directory() . "/dist/images/small-square-background.svg");
// icon images
$small_horizontal_line = file_get_contents( get_template_directory() . "/dist/images/small-horizontal-line.svg");
$website_service_icon = file_get_contents( get_template_directory() . "/dist/images/icons/website-service-icon.svg");
$plugin_service_icon = file_get_contents( get_template_directory() . "/dist/images/icons/plugin-service-icon.svg");
$application_service_icon = file_get_contents( get_template_directory() . "/dist/images/icons/application-service-icon.svg");
// get theme options
$new_web_marcello_theme_options = get_option( 'new_web_marcello_theme_option_name' );
$standard_button_text_0 = $new_web_marcello_theme_options['standard_button_text_0'];
?>
<section class="service-block py-5 text-center bg-light <?php block_field('className'); ?>">
   <div class="container-xl service-wrapper">
      <h2><?php block_field('block-title'); ?></h2>
      <p class="lead"><?php block_field('block-description'); ?></p>
      <div class="row mt-5">
         <div class="col-md-4 service">
            <div class="card pb-4 border-0 rounded-lg">
               <div class="card-img-top service-img">
                  <?= $website_service_icon ?>
               </div>
               <div class="card-body service-body">
                  <h5 class="card-title service-title mb-1"><?php block_field('service-title-1'); ?></h5>
                  <?= $small_horizontal_line ?>
                  <p class="card-text service-text mt-3"><?php block_field('service-body-1'); ?></p>
                  <a href="<?php block_field('service-url-1'); ?>" class="btn btn-primary service-btn"><?= esc_attr($standard_button_text_0) ?></a>
               </div>
            </div>
         </div>
         <div class="col-md-4 service">
            <div class="card pb-4 border-0 rounded-lg">
               <div class="card-img-top service-img">
                  <?= $plugin_service_icon ?>
               </div>
               <div class="card-body service-body">
                  <h5 class="card-title service-title mb-1"><?php block_field('service-title-2'); ?></h5>
                  <?= $small_horizontal_line ?>
                  <p class="card-text service-text mt-3"><?php block_field('service-body-2'); ?></p>
                  <a href="<?php block_field('service-url-2'); ?>" class="btn btn-primary service-btn"><?= esc_attr($standard_button_text_0) ?></a>
               </div>
            </div>
         </div>
         <div class="col-md-4 service">
            <div class="card pb-4 border-0 rounded-lg">
               <div class="card-img-top service-img">
                  <?= $application_service_icon ?>
               </div>
               <div class="card-body service-body">
                  <h5 class="card-title service-title mb-1"><?php block_field('service-title-3'); ?></h5>
                  <?= $small_horizontal_line ?>
                  <p class="card-text service-text mt-3"><?php block_field('service-body-3'); ?></p>
                  <a href="<?php block_field('service-url-3'); ?>" class="btn btn-primary service-btn"><?= esc_attr($standard_button_text_0) ?></a>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="big-square-background img-fluid"><?= $big_square_background ?></div>
   <div class="small-square-background"><?= $small_square_background ?></div>
</section>
