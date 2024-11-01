jQuery(function() {
	
	/* Accordion */
	jQuery('.simnor-shortcode-accordion-active').each(function() {
		jQuery(this).find('.simnor-shortcode-accordion-content').show();
	});
	jQuery('.simnor-shortcode-accordion h3').click(function() {
		jQuery(this).parent('.simnor-shortcode-accordion').find('.simnor-shortcode-accordion-content').slideToggle();
		jQuery(this).parent('.simnor-shortcode-accordion').toggleClass('simnor-shortcode-accordion-active');
	});
	
	
	/* Tabs */
	jQuery('.simnor-shortcode-tabs').each(function() {
		
		jQuery(this).prepend('<div class="simnor-shortcode-tab-buttons"></div>');
		jQuery(this).find('.simnor-shortcode-tabpane').each(function() {
			
			jQuery(this).parent('.simnor-shortcode-tabs').find('.simnor-shortcode-tab-buttons').append('<a href="#">'+jQuery(this).find('.simnor-shortcode-tab-label').text()+'</a>');
			jQuery(this).find('.simnor-shortcode-tab-label').remove();
			
		});
		
		jQuery(this).find('.simnor-shortcode-tab-buttons').find('a:first').addClass('active');
		jQuery(this).find('.simnor-shortcode-tabpane').hide();
		jQuery(this).find('.simnor-shortcode-tabpane:first').show();
		
	});
	
	var tab_to_show = 0;
	jQuery('.simnor-shortcode-tab-buttons a').live("click", function() {
		tab_to_show = jQuery(this).parent('.simnor-shortcode-tab-buttons').find('a').index(jQuery(this));
		jQuery(this).parent('.simnor-shortcode-tab-buttons').parent('.simnor-shortcode-tabs').find('.simnor-shortcode-tabpane').hide();
		jQuery(this).parent('.simnor-shortcode-tab-buttons').parent('.simnor-shortcode-tabs').find('.simnor-shortcode-tabpane').eq(tab_to_show).show();
		jQuery(this).parent('.simnor-shortcode-tab-buttons').find('a').removeClass('active');
		jQuery(this).parent('.simnor-shortcode-tab-buttons').find('a').eq(tab_to_show).addClass('active');
		return false;
	});
	
});