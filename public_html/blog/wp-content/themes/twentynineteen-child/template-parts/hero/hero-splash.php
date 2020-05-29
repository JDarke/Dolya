<?php
/**
 * Displays the hero splash
 *
 */
    ?><div class="splash-wrap">
	            <div class="splash-logo-frame">
	                <div id="hero-logo-wrap"> 
                         <img id="hero-logo" class="resp" src="https://i.ibb.co/3YVpQZ3/Dolya-Logo-Transparent.png" alt="Dolya-Logo-Transparent" border="0" role="button" onclick="">
                    </div>
                </div>
            <div class="hero-wrap">
    <?php
    $args = array(
        'post_type' => 'post',
        'posts_per_page' => 3,
        'orderby' => 'rand',
    );
    $query = new WP_Query( $args );
    
    while( $query->have_posts() ) {
	    $query->the_post();
	    $url = wp_get_attachment_url( get_post_thumbnail_id($post->ID), 'thumbnail' );
	    echo   '<div class="blog-main-splash" style="background-image: url(' . $url . ')">
	                 <div class="splash-overlay">
                     </div>
                     <div class="blog-main-splash-text" >
                        <p>FEATURED ARTICLE</p>
                         <h2>' . get_the_title() . '</h2>
                         
                        ' . get_the_author() . '  -  ' . get_the_date() . '
                     </div>
                
                </div>';
    }
    
    // Restore original Post Data
    wp_reset_postdata();
    
?>
</div>
</div>
<?php

?>

