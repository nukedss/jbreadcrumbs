/**
 * jValidator JQuery plugin for validating form inputs
 * 
 * Creates a horizontal list of bread crumbs that will allow you to navigate a large set of data.
 * 
 * 
 * @method crumbClicked This method is bound to the click event on the crumbs that are generated.
 * 						When specifying this method, you will take in a single parameter. This
 * 						parameter is the crumb that has been clicked.
 * 
 * @author John Gleason <nukedsoftware@gmail.com>
 * 
 * @since 18 Oct 2012
 * 
 * {@link https://github.com/nukedss/jbreadcrumbs.js}
 * {@link http://www.nukedss.com}
 */
(function($){
	$.fn.breadCrumbs=function(options){
		var settings = $.extend( {  
							mode: 'firstChar', 
							debug: false, 
							crumb: undefined,
							data: undefined,
							crumbClicked: function(crumb){},
							linkStyle:[
							           "margin-left:10px",
							           "margin-right:10px",
							           "display:inline-block",
							           "text-decoration:none"
							]
						}, options);
		
		var priv={
				/**
				 * Adds a new Crumb to the selected element
				 * 
				 * @param sender The html element to add the crumb to.
				 * @param crumb The crumb text value to add to the sender.
				 */
				addCrumb: function(sender, crumb){
					if(sender.find("#bc"+crumb).length <= 0){
						sender.append("<a id='bc"+crumb+"' class='breadCrumb' href='#' crumb='"+crumb+"' style='"+settings.linkStyle.join(";")+"'>"+crumb+"</a>");
						
						sender.find("#bc"+crumb).click(function(){
							settings.crumbClicked.apply(sender, [crumb]);
						});
					}
				}
		},
		methods={
			/**
			 * Extracts the first character, capitalizes it and adds it as a new crumb.
			 */
			firstChar: function(){
				var $this = $(this);
								
				$this.empty();
				
				for(var n=0;n<settings.data.length;n++){
					if(settings.data[n][settings.crumb] != null){
						priv.addCrumb($this, settings.data[n][settings.crumb][0].toUpperCase());
					}
				}
			},
			/**
			 * Adds the whole word given by settings.crumb as a crumb to the select item(s)
			 */
			wholeWord: function(){
				var $this = $(this);
				
				$this.empty();
				
				for(var n=0;n<settings.data.length;n++){
					if(settings.data[n][settings.crumb] != null){
						priv.addCrumb($this, settings.data[n][settings.crumb]);
					}
				}
			}
		};
		
		return $(this).each(function(){
			if(typeof options === "object"){
				if(methods[settings.mode] && $.isArray(settings.data) && settings.crumb != null){
					
					$(this).data(settings);
					
					if(!$.isArray(settings.linkStyle))
						settings.linkStyle = $.makeArray(settings.linkStyle);
					
					methods[settings.mode].apply(this, []);
				}
			}
		});
	};
})(jQuery);