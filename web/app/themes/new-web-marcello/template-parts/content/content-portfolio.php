<?php
$categories = new \NewWebMarcello\Frontend\Categories;
$images = new \NewWebMarcello\Frontend\Images; 
// get portfolio metadata
$small_horizontal_line = file_get_contents( get_template_directory() . "/dist/images/small-horizontal-line.svg");
$portfolio_logo = get_post_meta( get_the_ID(), 'portfolio_fields_portfolio-logo', true );
$portfolio_image_1 = get_post_meta( get_the_ID(), 'portfolio_fields_image-1', true );
$portfolio_image_2 = get_post_meta( get_the_ID(), 'portfolio_fields_image-2', true );
$portfolio_image_3 = get_post_meta( get_the_ID(), 'portfolio_fields_image-3', true );
$portfolio_image_4 = get_post_meta( get_the_ID(), 'portfolio_fields_image-4', true );
?>
<article id="portfolio-<?php the_ID(); ?>" <?php post_class(); ?>>

	<div class="container-lg mb-5 portfolio-entry-content">
		<div class="row align-items-center">
			<div class="col-md-5">
				<h6 class="portfolio-categories mb-3"><?php $categories->getCategoryList(get_the_ID(), '', ' - ', 'topics') ?></h6>
				<?php the_content(); ?>
				<div class="portfolio-logo my-5 text-center"><?php $images->get_image_by_url($portfolio_logo, 'medium', 'img-pluid'); ?></div>
			</div>
			<div class="col-md-7">
				<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
					<div class="carousel-inner text-center">
						<?php if( $portfolio_image_1 ) : ?>
							<div class="carousel-item active">
								<?php $images->get_image_by_url($portfolio_image_1 , 'large', 'portfolio-carousel-img'); ?>
							</div>
						<?php endif; ?>
						<?php if( $portfolio_image_2 ) : ?>
							<div class="carousel-item">
								<?php $images->get_image_by_url($portfolio_image_2 , 'large', 'portfolio-carousel-img'); ?>
							</div>
						<?php endif; ?>
						<?php if( $portfolio_image_3 ) : ?>
							<div class="carousel-item">
								<?php $images->get_image_by_url($portfolio_image_3 , 'large', 'portfolio-carousel-img'); ?>
							</div>
						<?php endif; ?>
						<?php if( $portfolio_image_4 ) : ?>
							<div class="carousel-item">
								<?php $images->get_image_by_url($portfolio_image_4 , 'large', 'portfolio-carousel-img'); ?>
							</div>
						<?php endif; ?>
					</div>
					<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="sr-only">Previous</span>
					</a>
					<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="sr-only">Next</span>
					</a>
				</div>
			</div>
		</div>
	</div>

</article><!-- #post-<?php the_ID(); ?> -->
