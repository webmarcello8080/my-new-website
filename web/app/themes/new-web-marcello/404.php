<?php get_header(); ?>

	<?php get_template_part( 'template-parts/header/home-header' ); ?>

	<div class="error-404 not-found container-lg">
		<div class="entry-content text-center">
			<h1 class="title-404 mb-5">404</h1>
			<h5 class="mb-3"><?php esc_html_e( 'It looks like nothing was found at this location. Maybe try a search?', 'new_web_marcello' ); ?></h5>
			<?php get_search_form(); ?>
			<h6 class="mt-3"><a href="<?= home_url(); ?>"><?php esc_html_e( 'Or back to Home', 'new_web_marcello' ); ?></a></h6>
		</div><!-- .page-content -->
	</div><!-- .error-404 -->

<?php get_footer();
