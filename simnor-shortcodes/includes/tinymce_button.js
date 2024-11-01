(function(){

	tinymce.create('tinymce.plugins.simnor_shortcodes', {
	
		/* Create button */
		createControl : function(id, controlManager) {
			if (id == 'simnor_shortcodes_button') {
				var button = controlManager.createButton('simnor_shortcodes_button', {
					title : 'Simnor Shortcodes',
					image : '../wp-content/plugins/simnor-shortcodes/images/toolbar-icon.png',
					onclick : function() {
						/* Show the popup */
						var width = jQuery(window).width(), H = jQuery(window).height(), W = ( 720 < width ) ? 720 : width;
						W = W - 80;
						H = H - 84;
						tb_show( 'Simnor Shortcodes', '#TB_inline?width=' + W + '&height=' + H + '&inlineId=simnor-shortcodes-form' );
					}
				});
				return button;
			}
			return null;
		}
	});
	
	/* Register Plugin */
	tinymce.PluginManager.add('simnor_shortcodes', tinymce.plugins.simnor_shortcodes);
	
	jQuery(function(){
		/* The form */
		var form = jQuery('<style type="text/css">\
#TB_ajaxContent { padding: 0 0 30px 0; width: 100%!important; overflow: hidden; }\
.simnor-shortcodes-form { display: block; overflow: hidden; height: 100%; position: relative; font-family: Helvetica, Arial; color: #333; font-size: 12px; text-align: left; background: #FFF; }\
.simnor-shortcodes-form a { text-decoration: none; }\
.simnor-shortcodes-form .simnor-shortcodes-form-top { overflow: auto; height: 100%; position: relative; padding: 0 0 0 120px; margin: 0 0 0 0; }\
.simnor-shortcodes-form .simnor-shortcodes-form-types { position: absolute; top: 0px; left: 0px; width: 120px; height: 100%; min-height: 100%; background: #f9f9f9; border-right: 1px solid #EEE; }\
.simnor-shortcodes-form .simnor-shortcodes-form-types .simnor-shortcodes-form-title { display: block; padding: 14px 20px 14px 40px; position: relative; font-size: 12px; line-height: 14px; color: #333; border-bottom: 1px solid #EEE; }\
.simnor-shortcodes-form .simnor-shortcodes-form-types .simnor-shortcodes-form-title img { position: absolute; top: 13px; left: 12px; } \
.simnor-shortcodes-form .simnor-shortcodes-form-types ul { list-style: none; margin: 0px; padding: 0px; }\
.simnor-shortcodes-form .simnor-shortcodes-form-types ul li { display: block; border-bottom: 1px solid #EEE; margin: 0px; }\
.simnor-shortcodes-form .simnor-shortcodes-form-types ul li.active { width: 121px; font-weight: bold; }\
.simnor-shortcodes-form .simnor-shortcodes-form-types ul li a { display: block; padding: 14px 20px; font-size: 12px; color: #333; }\
.simnor-shortcodes-form .simnor-shortcodes-form-types ul li.active a,  .simnor-shortcodes-form .simnor-shortcodes-form-types ul li a:hover { background: #FFF; }\
.simnor-shortcodes-form .simnor-shortcodes-form-tabs { background: #FFF; padding: 20px 20px 70px 20px; overflow: hidden; }\
.simnor-shortcodes-form .simnor-shortcodes-form-tab { display: none; }\
.simnor-shortcodes-form .simnor-shortcodes-form-tabs h2 { display: block; padding: 0 10px 10px 10px; line-height: normal; font-size: 18px; margin: 0 0 10px 0; border-bottom: 1px solid #EEE; }\
.simnor-shortcodes-form .simnor-shortcodes-form-fields { overflow: auto; }\
.simnor-shortcodes-form .simnor-shortcodes-form-tabs table { width: 100%; border: none; font-size: 12px; text-align: left; }\
.simnor-shortcodes-form .simnor-shortcodes-form-tabs table th,  .simnor-shortcodes-form .simnor-shortcodes-form-tabs table td { padding: 14px 10px 14px 0; border-bottom: 1px solid #EEE; vertical-align: top; }\
.simnor-shortcodes-form .simnor-shortcodes-form-tabs table th { font-weight: normal; text-align: left; width: 120px; }\
.simnor-shortcodes-form .simnor-shortcodes-form-tabs table th label { padding: 5px 0 0 10px; display: block; }\
.simnor-shortcodes-form .simnor-shortcodes-form-tabs table td input, .simnor-shortcodes-form .simnor-shortcodes-form-tabs table td textarea { border: 1px solid #DDD; padding: 4px 8px; font-family: Helvetica; font-size: 12px; color: #888; width: 80%; }\
.simnor-shortcodes-form .simnor-shortcodes-form-tabs table td textarea { height: 100px; }\
.simnor-shortcodes-form .simnor-shortcodes-form-tabs table td textarea:disabled { background: #EEE; }\
.simnor-shortcodes-form .simnor-shortcodes-form-tabs table td input:focus, .simnor-shortcodes-form .simnor-shortcodes-form-tabs table td textarea:focus { border-color: #999; color: #333; box-shadow: inset 1px 1px 4px #EEE; outline: none; }\
.simnor-shortcodes-form .simnor-shortcodes-form-tabs table td span { display: block; padding: 5px 0; color: #999; }\
.simnor-shortcodes-form .simnor-shortcodes-submit { clear: both; height: 70px; position: absolute; bottom: 0px; left: 0px; width: 100%; background: #EEE; border-top: 1px solid #DDD; }\
.simnor-shortcodes-form .simnor-shortcodes-submit .button-primary { position: absolute; right: 20px; top: 20px; }\
.simnor-shortcodes-form .column-structures { display: block; padding: 0 0 0 10px; }\
.simnor-shortcodes-form .column-structures a { display: block; width: 100px; height: 40px; float: left; margin: 0 10px 20px 0; }\
.simnor-shortcodes-form .column-structures a span { float:left; position: relative; display: block; height: 40px; overflow: hidden; }\
.simnor-shortcodes-form .column-structures a i { background: #EEE; position: absolute; left: -2px; top: 0px; display: block; height: 40px; line-height: 40px; font-size: 14px; text-align: center; width: 100%; }\
.simnor-shortcodes-form .column-structures a:hover i, .simnor-shortcodes-form .column-structures a.active i { background: #999; color: #FFF; }\
.simnor-shortcodes-form .column-structures label { margin: 0 0 14px 0; display: block; font-size: 14px; }\
.simnor-shortcodes-form .clearfix { clear: both; }\
#simnor-shortcodes-form-tab_tabs td label { display: block; padding: 5px 0 10px 0; color: #999; }\
#simnor-shortcodes-form-tab_tabs input { margin: 0 0 10px 0; }\
</style>\
		<div id="simnor-shortcodes-form"><div class="simnor-shortcodes-form">\
		<div class="simnor-shortcodes-form-top">\
		<div class="simnor-shortcodes-form-types">\
			<span class="simnor-shortcodes-form-title"><img src="../wp-content/plugins/simnor-shortcodes/images/toolbar-icon.png" alt="" />Simnor Shortcodes</span>\
			<ul>\
				<li class="simnor-shortcodes-form-type-button active" type="button"><a href="#">Button</a></li>\
				<li class="simnor-shortcodes-form-type-columns" type="columns"><a href="#">Columns</a></li>\
				<li class="simnor-shortcodes-form-type-media" type="media"><a href="#">Media</a></li>\
				<li class="simnor-shortcodes-form-type-accordion" type="accordion"><a href="#">Accordion</a></li>\
				<li class="simnor-shortcodes-form-type-tabs" type="tabs"><a href="#">Tabs</a></li>\
				<li class="simnor-shortcodes-form-type-map" type="map"><a href="#">Google Map</a></li>\
			</ul>\
		</div><!-- end types -->\
		<div class="simnor-shortcodes-form-tabs">\
<!-- BUTTON -->\
			<div class="simnor-shortcodes-form-tab" id="simnor-shortcodes-form-tab_button" style="display:block">\
				<h2>Add Button</h2>\
				<div class="simnor-shortcodes-form-fields">\
				<table cellpadding="0" cellspacing="0">\
					<tr>\
						<th><label>URL</label></th>\
						<td><input type="text" value="" fieldname="url" /></td>\
					</tr>\
					<tr>\
						<th><label>Label</label></th>\
						<td><input type="text" value="" fieldname="label" /></td>\
					</tr>\
					<tr>\
						<th><label>Colour</label></th>\
						<td>\
							<select fieldname="colour">\
								<option value="red">Red</option>\
								<option value="blue">Blue</option>\
								<option value="green">Green</option>\
								<option value="light-gray">Light Gray</option>\
								<option value="dark-gray">Dark Gray</option>\
								<option value="orange">Orange</option>\
								<option value="purple">Purple</option>\
							</select>\
							<span>or add a hex value</span>\
							<input type="text" class="simnor-shortcodes-button_colour_custom" fieldname="colour_custom" value="" />\
						</td>\
					</tr>\
					<tr>\
						<th><label>Size</label></th>\
						<td>\
							<select fieldname="size">\
								<option value="small">Small</option>\
								<option value="medium" selected="selected">Medium</option>\
								<option value="large">Large</option>\
							</select>\
						</td>\
					</tr>\
					<tr>\
						<th><label>Edge</label></th>\
						<td>\
							<select fieldname="edge">\
								<option value="straight">Straight</option>\
								<option value="rounded">Rounded</option>\
							</select>\
						</td>\
					</tr>\
					<tr>\
						<th><label>Link to open in</label></th>\
						<td>\
							<select fieldname="target">\
								<option value="_self">Current Tab/Window</option>\
								<option value="_blank">New Tab/Window</option>\
							</select>\
						</td>\
					</tr>\
				</table>\
				</div>\
			</div><!-- end tab -->\
<!-- COLUMNS -->\
			<div class="simnor-shortcodes-form-tab" id="simnor-shortcodes-form-tab_columns">\
				<h2>Add Columns</h2>\
				<div class="simnor-shortcodes-form-fields">\
				<table cellpadding="0" cellspacing="0">\
					<tr>\
						<td colspan="2">\
							<div class="column-structures">\
							<label>Choose a column structure</label>\
<a href="#" class="active" split="50|50"><span style="width:50%"><i>&frac12;</i></span><span style="width:50%"><i>&frac12;</i></span></a>\
<div class="clearfix"></div>\
<a href="#" split="33|33|33"><span style="width:33%"><i>&frac13;</i></span><span style="width:33%"><i>&frac13;</i></span><span style="width:33%"><i>&frac13;</i></span></a>\
<a href="#" split="67|33"><span style="width:67%"><i>&frac23;</i></span><span style="width:33%"><i>&frac13;</i></span></a>\
<a href="#" split="33|67"><span style="width:33%"><i>&frac13;</i></span><span style="width:67%"><i>&frac23;</i></span></a>\
<div class="clearfix"></div>\
<a href="#" split="25|25|25|25"><span style="width:25%"><i>&frac14;</i></span><span style="width:25%"><i>&frac14;</i></span><span style="width:25%"><i>&frac14;</i></span><span style="width:25%"><i>&frac14;</i></span></a>\
<a href="#" split="50|25|25"><span style="width:50%"><i>&frac12;</i></span><span style="width:25%"><i>&frac14;</i></span><span style="width:25%"><i>&frac14;</i></span></a>\
<a href="#" split="25|25|50"><span style="width:25%"><i>&frac14;</i></span><span style="width:25%"><i>&frac14;</i></span><span style="width:50%"><i>&frac12;</i></span></a>\
<a href="#" split="25|50|25"><span style="width:25%"><i>&frac14;</i></span><span style="width:50%"><i>&frac12;</i></span><span style="width:25%"><i>&frac14;</i></span></a>\
							<input style="display:none" type="text" fieldname="structure" value="50|50" />\
							</div>\
						</td>\
					</tr>\
					<tr>\
						<th><label>Column 1</label></th>\
						<td><textarea fieldname="col"></textarea></td>\
					</tr>\
					<tr>\
						<th><label>Column 2</label></th>\
						<td><textarea fieldname="col"></textarea></td>\
					</tr>\
					<tr>\
						<th><label>Column 3</label></th>\
						<td><textarea fieldname="col" disabled="disabled"></textarea></td>\
					</tr>\
					<tr>\
						<th><label>Column 4</label></th>\
						<td><textarea fieldname="col" disabled="disabled"></textarea></td>\
					</tr>\
				</table>\
				</div>\
			</div><!-- end tab -->\
<!-- MEDIA -->\
			<div class="simnor-shortcodes-form-tab" id="simnor-shortcodes-form-tab_media">\
				<h2>Add Media</h2>\
				<div class="simnor-shortcodes-form-fields">\
				<table cellpadding="0" cellspacing="0">\
					<tr>\
						<th><label>Type</label></th>\
						<td>\
							<select fieldname="type">\
								<option value="youtube">YouTube</option>\
								<option value="vimeo">Vimeo</option>\
							</select>\
						</td>\
					</tr>\
					<tr>\
						<th><label>URL or ID</label></th>\
						<td><input type="text" value="" fieldname="url" /></td>\
					</tr>\
					<tr>\
						<th><label>Width</label></th>\
						<td><input type="text" value="100%" fieldname="width" /></td>\
					</tr>\
					<tr>\
						<th><label>Height</label></th>\
						<td><input type="text" value="400" fieldname="height" /></td>\
					</tr>\
				</table>\
				</div>\
			</div><!-- end tab -->\
<!-- ACCORDION -->\
			<div class="simnor-shortcodes-form-tab" id="simnor-shortcodes-form-tab_accordion">\
				<h2>Add Accordion</h2>\
				<div class="simnor-shortcodes-form-fields">\
				<table cellpadding="0" cellspacing="0">\
					<tr>\
						<th><label>Heading</label></th>\
						<td><input type="text" value="" fieldname="heading" /></td>\
					</tr>\
					<tr>\
						<th><label>Text</label></th>\
						<td><textarea fieldname="text"></textarea></td>\
					</tr>\
					<tr>\
						<th><label>On page load...</label></th>\
						<td>\
							<select fieldname="onload">\
								<option value="closed">Show Closed</option>\
								<option value="open">Show Open</option>\
							</select>\
						</td>\
					</tr>\
				</table>\
				</div>\
			</div><!-- end tab -->\
<!-- TABS -->\
			<div class="simnor-shortcodes-form-tab" id="simnor-shortcodes-form-tab_tabs">\
				<h2>Add Tabs</h2>\
				<div class="simnor-shortcodes-form-fields">\
				<table cellpadding="0" cellspacing="0">\
					<tr>\
						<th><label>Tab 1</label></th>\
						<td><label>Label</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea></td>\
					</tr>\
					<tr>\
						<th><label>Tab 2</label></th>\
						<td><label>Label</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea></td>\
					</tr>\
					<tr>\
						<th><label>Tab 3</label></th>\
						<td><label>Label</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea></td>\
					</tr>\
					<tr>\
						<th><label>Tab 4</label></th>\
						<td><label>Label</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea></td>\
					</tr>\
					<tr>\
						<th><label>Tab 5</label></th>\
						<td><label>Label</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea></td>\
					</tr>\
					<tr>\
						<th><label>Tab 6</label></th>\
						<td><label>Label</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea></td>\
					</tr>\
					<tr>\
						<th><label>Tab 7</label></th>\
						<td><label>Label</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea></td>\
					</tr>\
					<tr>\
						<th><label>Tab 8</label></th>\
						<td><label>Label</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea></td>\
					</tr>\
					<tr>\
						<th><label>Tab 9</label></th>\
						<td><label>Label</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea></td>\
					</tr>\
					<tr>\
						<th><label>Tab 10</label></th>\
						<td><label>Label</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea></td>\
					</tr>\
				</table>\
				</div>\
			</div><!-- end tab -->\
<!-- MAP -->\
			<div class="simnor-shortcodes-form-tab" id="simnor-shortcodes-form-tab_map">\
				<h2>Add Google Map</h2>\
				<div class="simnor-shortcodes-form-fields">\
				<table cellpadding="0" cellspacing="0">\
					<tr>\
						<td colspan="2">To get the latitude and longitude values for a location, go to <a style="color:blue" href="http://www.getlatlon.com/" target="_blank">www.getlatlon.com</a> and add the address/zip code etc. to the "Place name" field, click the "Zoom to place" button and you should see the latitude/longitude appear underneath the map.</td>\
					</tr>\
					<tr>\
						<th><label>Latitude</label></th>\
						<td><input type="text" value="" fieldname="latitude" /></td>\
					</tr>\
					<tr>\
						<th><label>Longitude</label></th>\
						<td><input type="text" value="" fieldname="longitude" /></td>\
					</tr>\
					<tr>\
						<th><label>Width</label></th>\
						<td><input type="text" value="100%" fieldname="width" /></td>\
					</tr>\
					<tr>\
						<th><label>Height</label></th>\
						<td><input type="text" value="400" fieldname="height" /></td>\
					</tr>\
					<tr>\
						<th><label>Zoom</label></th>\
						<td><input type="text" value="16" fieldname="zoom" /></td>\
					</tr>\
					<tr>\
						<th><label>Info Window Text</label></th>\
						<td><textarea fieldname="infowindow_text"></textarea></td>\
					</tr>\
				</table>\
				</div>\
			</div><!-- end tab -->\
\
		</div></div>\
		<div class="simnor-shortcodes-submit">\
			<input style="display:none" id="simnor-shortcodes-form-type" value="button" />\
			<textarea style="display:none" id="simnor-shortcodes-form-code-to-add"></textarea>\
			<input type="button" id="simnor_shortcodes-submit" class="button-primary" value="Insert Shortcode" name="submit" />\
		</div>\
	</div></div>');
		
		form.appendTo('body').hide();
		
		/* Change tab */
		var simnor_shortcode_type = "button";
		var simnor_shortcode_code = "";
		form.find('.simnor-shortcodes-form-types ul li a').click(function(){
			simnor_shortcode_type = jQuery(this).parent('li').attr('type');
			jQuery('input#simnor-shortcodes-form-type').val(simnor_shortcode_type);
			jQuery('.simnor-shortcodes-form-tab').hide();
			jQuery('#simnor-shortcodes-form-tab_'+simnor_shortcode_type).show();
			jQuery('.simnor-shortcodes-form-types .active').removeClass('active');
			jQuery(this).parent('li').addClass('active');
			jQuery('.simnor-shortcodes-form .simnor-shortcodes-form-types').css({"height":jQuery('.simnor-shortcodes-form-tabs').outerHeight()});
			return false;
		});
		
		/* Choose Column Structure */
		var num_of_columns = 2;
		jQuery('.column-structures a').click(function() {
			jQuery('.column-structures a').removeClass('active');
			jQuery(this).addClass('active');
			jQuery('.column-structures input').val(jQuery(this).attr('split'));
			num_of_columns = jQuery(this).attr('split');
			num_of_columns = num_of_columns.split('|');
			num_of_columns = num_of_columns.length;
			
			jQuery('#simnor-shortcodes-form-tab_columns textarea').attr({'disabled':'disabled'});
			var i = -1;
			while(i < (num_of_columns - 1)) {
				i++;
				jQuery('#simnor-shortcodes-form-tab_columns textarea').eq(i).removeAttr('disabled');
			}
			
			return false;
		});
		
		/* On submit click */
		form.find('#simnor_shortcodes-submit').click(function(){
		
			/* Create shortcode */
			simnor_shortcode_code = '';
			
			if(simnor_shortcode_type == "columns") {
				
				/* Columns shortcode */
			
				simnor_shortcode_code = simnor_shortcode_code + '[simnor_' + simnor_shortcode_type + ' ';
				
				jQuery('#simnor-shortcodes-form-tab_' + simnor_shortcode_type + ' input, #simnor-shortcodes-form-tab_' + simnor_shortcode_type + ' select').each(function() {
					
					if(jQuery(this).attr('fieldname') != "" || jQuery(this).attr('fieldname') != undefined) {
						simnor_shortcode_code = simnor_shortcode_code + ' ' + jQuery(this).attr('fieldname') + '="' + jQuery(this).val() + '"';
					}
					
				});
				simnor_shortcode_code = simnor_shortcode_code + ']';
				
					/* the actual cols */
					var col_counter = 0;
					var col_class = 'a';
					jQuery('#simnor-shortcodes-form-tab_' + simnor_shortcode_type + ' textarea').each(function() {
					
						if(jQuery(this).attr('disabled') == "disabled") { } else {
							
							col_counter++;
							if(col_counter == 1) { col_class = "a"; }
							if(col_counter == 2) { col_class = "b"; }
							if(col_counter == 3) { col_class = "c"; }
							if(col_counter == 4) { col_class = "d"; }
							simnor_shortcode_code = simnor_shortcode_code + '[simnor_col position="'+col_class+'"]' + jQuery(this).val() + '[/simnor_col]';
							
						}
					
					});
				
				
				simnor_shortcode_code = simnor_shortcode_code + '[/simnor_' + simnor_shortcode_type + ']';
				
				
			} else if(simnor_shortcode_type == "tabs") {
				
				/* Tabs shortcode */
			
				simnor_shortcode_code = simnor_shortcode_code + '[simnor_' + simnor_shortcode_type + ']';
				
					/* the actual tabs */
					jQuery('#simnor-shortcodes-form-tab_' + simnor_shortcode_type + ' input').each(function() {
					
						if(jQuery(this).val() != "") { 
													
							simnor_shortcode_code = simnor_shortcode_code + '[simnor_tab label="' + jQuery(this).val() + '"]' + jQuery(this).parent('td').find('textarea').val() + '[/simnor_tab]';
							
						}
					
					});
				
				
				simnor_shortcode_code = simnor_shortcode_code + '[/simnor_' + simnor_shortcode_type + ']';
				
				
			} else {
				
				/* Basic shortcodes */
			
				simnor_shortcode_code = simnor_shortcode_code + '[simnor_' + simnor_shortcode_type + ' ';
				
				jQuery('#simnor-shortcodes-form-tab_' + simnor_shortcode_type + ' input, #simnor-shortcodes-form-tab_' + simnor_shortcode_type + ' select, #simnor-shortcodes-form-tab_' + simnor_shortcode_type + ' textarea').each(function() {
					
					if(jQuery(this).attr('fieldname') != "" || jQuery(this).attr('fieldname') != undefined) {
						simnor_shortcode_code = simnor_shortcode_code + ' ' + jQuery(this).attr('fieldname') + '="' + jQuery(this).val() + '"';
					}
					
				});
				simnor_shortcode_code = simnor_shortcode_code + ']';
				
			}
				
			/* Insert shortcode */
			tinyMCE.activeEditor.execCommand('mceInsertContent', 0, simnor_shortcode_code);
			tb_remove();
			
			return false;
			
		});
	});
})()