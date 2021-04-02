<?php
$small_horizontal_line = file_get_contents( get_template_directory() . "/dist/images/small-horizontal-line.svg");
?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<?php if(has_post_thumbnail()) : ?>
			<div class="container-lg mb-5">
				<?php the_post_thumbnail('full', ['class' => 'post-img']); ?>
			</div>
	<?php endif; ?>

	<div class="post-entry-content">
	   <h2 class="post-description text-center mb-2"><?= get_post_meta(get_the_ID(), 'H2_text', TRUE); ?></h2>
		<div class="small-horizontal-line text-center mb-5"><?= $small_horizontal_line ?></div>
		<?php

		the_content();

		wp_link_pages(
			array(
				'before'   => '<nav class="page-links" aria-label="' . esc_attr__( 'Page', 'new_web_marcello' ) . '">',
				'after'    => '</nav>',
				/* translators: %: page number. */
				'pagelink' => esc_html__( 'Page %', 'new_web_marcello' ),
			)
		);
		?>
	</div><!-- .entry-content -->

</article><!-- #post-<?php the_ID(); ?> -->
