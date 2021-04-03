<?php
/*
 * If the current post is protected by a password and
 * the visitor has not yet entered the password,
 * return early without loading the comments.
 */
if ( post_password_required() ) {
	return;
}

$comment_count = get_comments_number();
?>

<div id="comments" class="comments-area py-4 bg-light <?php echo get_option( 'show_avatars' ) ? 'show-avatars' : ''; ?>">

	<?php
	if ( have_comments() ) :
		;
		?>
		<h2 class="comments-title mb-4 post-container-width">
			<?php if ( '1' === $comment_count ) : ?>
				<?php esc_html_e( '1 comment', 'new_web_marcello' ); ?>
			<?php else : ?>
				<?php
				printf(
					/* translators: %s: comment count number. */
					esc_html( _nx( '%s comment', '%s comments', $comment_count, 'Comments title', 'new_web_marcello' ) ),
					esc_html( number_format_i18n( $comment_count ) )
				);
				?>
			<?php endif; ?>
		</h2><!-- .comments-title -->

		<div class="post-container-width mb-4">
			<ol class="comment-list">
				<?php
				wp_list_comments(
					array(
						'avatar_size' => 45,
						'style'       => 'ul',
						'short_ping'  => true,
						'walker'  => new Comment_Walker()
					)
				);
				?>
			</ol><!-- .comment-list -->
		</div>

		<?php
		the_comments_pagination(
			array(
				/* translators: There is a space after page. */
				'before_page_number' => esc_html__( 'Page ', 'new_web_marcello' ),
				'mid_size'           => 0,
				'prev_text'          => sprintf(
					'%s <span class="nav-prev-text">%s</span>',
					is_rtl() ? '<<' : '>>',
					esc_html__( 'Older comments', 'new_web_marcello' )
				),
				'next_text'          => sprintf(
					'<span class="nav-next-text">%s</span> %s',
					esc_html__( 'Newer comments', 'new_web_marcello' ),
					is_rtl() ? '<<' : '>>'
				),
			)
		);
		?>

		<?php if ( ! comments_open() ) : ?>
			<p class="no-comments post-container-width"><?php esc_html_e( 'Comments are closed.', 'new_web_marcello' ); ?></p>
		<?php endif; ?>
	<?php endif; ?>

	<?php
	comment_form(
		array(
			'logged_in_as'       => null,
			'class_container'    => 'comment-respond post-container-width',
			'title_reply'        => esc_html__( 'Leave a comment', 'new_web_marcello' ),
			'title_reply_before' => '<h2 id="reply-title" class="comment-reply-title text-center">',
			'title_reply_after'  => '</h2>',
			'class_submit'       => 'submit btn btn-primary'
		)
	);
	?>

</div><!-- #comments -->
