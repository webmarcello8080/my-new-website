<section class="skill-bars-block p-3 bg-light <?php block_field('className'); ?>">
   <div class="skill-bars-wrapper">
      <?php if(block_value('bar-name-1')) : ?>
         <div class="skill-single-bar">
            <div class="d-flex justify-content-between mb-2">
               <div class="skill-single-bar-title"><?php block_field('bar-name-1'); ?></div>
               <div class="skill-single-bar-progress"><?php block_field('bar-percentage-1'); ?>%</div>
            </div>
            <div class="single-bar-progress mb-3">
               <div class="single-bar" data-percent="<?php block_field('bar-percentage-1'); ?>"></div>
            </div>
         </div>
      <?php endif; ?>
      <?php if(block_value('bar-name-2')) : ?>
         <div class="skill-single-bar">
            <div class="d-flex justify-content-between mb-2">
               <div class="skill-single-bar-title"><?php block_field('bar-name-2'); ?></div>
               <div class="skill-single-bar-progress"><?php block_field('bar-percentage-2'); ?>%</div>
            </div>
            <div class="single-bar-progress mb-3">
               <div class="single-bar" data-percent="<?php block_field('bar-percentage-2'); ?>"></div>
            </div>
         </div>
      <?php endif; ?>
      <?php if(block_value('bar-name-3')) : ?>
         <div class="skill-single-bar">
            <div class="d-flex justify-content-between mb-2">
               <div class="skill-single-bar-title"><?php block_field('bar-name-3'); ?></div>
               <div class="skill-single-bar-progress"><?php block_field('bar-percentage-3'); ?>%</div>
            </div>
            <div class="single-bar-progress mb-3">
               <div class="single-bar" data-percent="<?php block_field('bar-percentage-3'); ?>"></div>
            </div>
         </div>
      <?php endif; ?>
      <?php if(block_value('bar-name-4')) : ?>
         <div class="skill-single-bar">
            <div class="d-flex justify-content-between mb-2">
               <div class="skill-single-bar-title"><?php block_field('bar-name-4'); ?></div>
               <div class="skill-single-bar-progress"><?php block_field('bar-percentage-4'); ?>%</div>
            </div>
            <div class="single-bar-progress mb-3">
               <div class="single-bar" data-percent="<?php block_field('bar-percentage-4'); ?>"></div>
            </div>
         </div>
      <?php endif; ?>
      <?php if(block_value('bar-name-5')) : ?>
         <div class="skill-single-bar">
            <div class="d-flex justify-content-between mb-2">
               <div class="skill-single-bar-title"><?php block_field('bar-name-5'); ?></div>
               <div class="skill-single-bar-progress"><?php block_field('bar-percentage-5'); ?>%</div>
            </div>
            <div class="single-bar-progress mb-3">
               <div class="single-bar" data-percent="<?php block_field('bar-percentage-5'); ?>"></div>
            </div>
         </div>
      <?php endif; ?>
      <?php if(block_value('bar-name-6')) : ?>
         <div class="skill-single-bar">
            <div class="d-flex justify-content-between mb-2">
               <div class="skill-single-bar-title"><?php block_field('bar-name-6'); ?></div>
               <div class="skill-single-bar-progress"><?php block_field('bar-percentage-6'); ?>%</div>
            </div>
            <div class="single-bar-progress mb-3">
               <div class="single-bar" data-percent="<?php block_field('bar-percentage-6'); ?>"></div>
            </div>
         </div>
      <?php endif; ?>
   </div>
</section>