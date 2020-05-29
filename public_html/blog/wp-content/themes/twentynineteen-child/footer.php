<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Nineteen
 * @since 1.0.0
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer">
		<?php get_template_part( 'template-parts/footer/footer', 'widgets' ); ?>
		<div class="site-info">
			
			
			<?php
			if ( function_exists( 'the_privacy_policy_link' ) ) {
				the_privacy_policy_link( '', '<span role="separator" aria-hidden="true"></span>' );
			}
			?>
			<?php if ( has_nav_menu( 'footer' ) ) : ?>
				<nav class="footer-navigation" aria-label="<?php esc_attr_e( 'Footer Menu', 'twentynineteen' ); ?>">
					<?php
					wp_nav_menu(
						array(
							'theme_location' => 'footer',
							'menu_class'     => 'footer-menu',
							'depth'          => 1,
						)
					);
					?>
				</nav><!-- .footer-navigation -->
			<?php endif; ?>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
    <div class="section flex-col" id="l-contact">
    <div id="contact-wrap">
        <div class="contact-info">inf<!--nobots-->o@<!--nobots-->doly<!--nobots-->a.con<!--nobots-->sulti<!--nobots-->ng</div>
        <div class="contact-info">+<!--nobots-->3<!--nobots-->50 2<!--nobots-->0<!--nobots-->00 8<!--nobots-->0<!--nobots-->52</div>
        <div class="contact-info"><p>Suite 230</p>
            <p>Regus Offices</p>
            <p>World Trade Center</p>
            <p>1st Floor, Unit 6, 1.02 Bayside Road</p>
            <p>GX11 1AA</p>
            <p>Gibraltar</p>
        </div>
        <div id="follow-us-wrap">
            <a href="https://twitter.com/dolyaconsulting" target="_blank" rel="noopener noreferrer">
                <img class="follow-button" src="/images/twitter-icon-turquoise.png">
            </a>
            <a href="https://www.linkedin.com/company/dolyaconsulting?trk=public_profile_topcard_current_company" target="_blank" rel="noopener noreferrer">
                <img class="follow-button" src="/images/linkedin-icon-turquoise.png">
            </a>
        </div>
        <div id="terms-wrap" class="flex-row">
            <div id="privacy"><a href="http://dolya.consulting/privacy.html" target="_blank" rel="noopener noreferrer">Privacy Policy</a></div> |
            
            <div id="terms"><a href="http://dolya.consulting/terms.html" target="_blank" rel="noopener noreferrer">Terms of Use</a></div>
        </div>
    </div>
    <div id="copyright">©2020 Dolya Limited (trading as Dolya Consulting) | Registered in Gibraltar No. 119231 | All rights reserved</div>
</div>
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
