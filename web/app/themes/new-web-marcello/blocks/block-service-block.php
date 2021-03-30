<?php
$small_horizontal_line = file_get_contents( get_template_directory() . "/dist/images/small-horizontal-line.svg");
$website_service_icon = file_get_contents( get_template_directory() . "/dist/images/website-service-icon.svg");
$plugin_service_icon = file_get_contents( get_template_directory() . "/dist/images/plugin-service-icon.svg");
$application_service_icon = file_get_contents( get_template_directory() . "/dist/images/application-service-icon.svg");
?>
<section class="service-block py-5 text-center bg-light <?php block_field('className'); ?>">
   <div class="container-xl">
      <h2><?php block_field('block-title'); ?></h2>
      <p><?php block_field('block-description'); ?></p>
      <div class="row mt-4 service-wrapper">
         <div class="col-md-4 px-2 service">
            <div class="card pb-4 border-0 rounded-lg">
               <div class="card-img-top service-img">
                  <?= $website_service_icon ?>
               </div>
               <div class="card-body service-body">
                  <h5 class="card-title service-title mb-1"><?php block_field('service-title-1'); ?></h5>
                  <?= $small_horizontal_line ?>
                  <p class="card-text service-text mt-3"><?php block_field('service-body-1'); ?></p>
                  <a href="<?php block_field('service-url-1'); ?>" class="btn btn-primary service-btn">Explore more</a>
               </div>
            </div>
         </div>
         <div class="col-md-4 px-2 service">
            <div class="card pb-4 border-0 rounded-lg">
               <div class="card-img-top service-img">
                  <?= $plugin_service_icon ?>
               </div>
               <div class="card-body service-body">
                  <h5 class="card-title service-title mb-1"><?php block_field('service-title-2'); ?></h5>
                  <?= $small_horizontal_line ?>
                  <p class="card-text service-text mt-3"><?php block_field('service-body-2'); ?></p>
                  <a href="<?php block_field('service-url-2'); ?>" class="btn btn-primary service-btn">Explore more</a>
               </div>
            </div>
         </div>
         <div class="col-md-4 px-2 service">
            <div class="card pb-4 border-0 rounded-lg">
               <div class="card-img-top service-img">
                  <?= $application_service_icon ?>
               </div>
               <div class="card-body service-body">
                  <h5 class="card-title service-title mb-1"><?php block_field('service-title-3'); ?></h5>
                  <?= $small_horizontal_line ?>
                  <p class="card-text service-text mt-3"><?php block_field('service-body-3'); ?></p>
                  <a href="<?php block_field('service-url-3'); ?>" class="btn btn-primary service-btn">Explore more</a>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
