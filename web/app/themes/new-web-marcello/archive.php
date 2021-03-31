<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since 1.0.0
 */

get_header();

$description = get_the_archive_description();
?>
<div class="container-xl categpry-wrapper">
	
	<?php if ( have_posts() ) : ?>

		<div class="row mt-5">

			<?php while ( have_posts() ) : ?>
				<?php the_post(); ?>
				<?php get_template_part( 'template-parts/loop/blog' ); ?>
			<?php endwhile; ?>

			<?php wp_reset_postdata(); ?>

		</div>

		<?php the_posts_pagination( 
					array( 
						'screen_reader_text' => ' ', 
						'mid_size' => 2,
						'prev_text' => '&#x300a',
						'next_text' => '&#x300b'
					) 
				);
		?>
		
	<?php else : ?>
		<p><?php __('No Posts', 'new_web_marcello'); ?></p>
	<?php endif; ?>

</div>

<?php get_footer(); ?>