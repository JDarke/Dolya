

<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage Twenty_Nineteen
 * @since 1.0.0
 */

get_header();
get_template_part( 'template-parts/hero/hero', 'splash' );

?>
    <!--<div class="section-title-wrap" id="blog-title-wrap">
        <div id="title-blog" class="section-title">BLOG</div>
    </div>-->
    
    
	<section id="primary" class="content-area">
	    <div class="blog-main-actions-wrap flex-row">
	    <h3 class="latest-title">Latest insights</h2>
	    <section id="search-2" class="widget widget_search flex-row" style="border: 0px solid red;">
                <h3 class="latest-title"></h2>
                <form role="search" method="get" class="search-form flex-row" action="http://dolya.ltd/blog/">
                    <label>
                        <span class="screen-reader-text">Search for:</span>
                        <input type="search" class="search-field" placeholder="Search &hellip;" value="" name="s"/>
                    </label>
                    <input type="submit" class="search-submit" value="Search"/>
                </form>
            </section>
        </div>
		<main id="main" class="site-main">

		<?php
		if ( have_posts() ) {

			// Load posts loop.
			while ( have_posts() ) {
				the_post();
				get_template_part( 'template-parts/content/content', 'excerpt' );
			}

			// Previous/next page navigation.
			twentynineteen_the_posts_navigation();

		} else {

			// If no content, include the "No posts found" template.
			get_template_part( 'template-parts/content/content', 'none' );

		}
		?>

		</main><!-- .site-main -->
	</section><!-- .content-area -->

<?php
get_footer();?>
