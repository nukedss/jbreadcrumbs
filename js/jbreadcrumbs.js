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
							crumbClicked: function(crumb){}
						}, options);
		
		var priv={
				addCrumb: function(sender, crumb){
					if(sender.find("#bc"+crumb).length <= 0){
						sender.append("<a id='bc"+crumb+"' class='breadCrumb' href='#' crumb='"+crumb+"'>"+crumb+"</a>");
						
						sender.find("#bc"+fc).click(function(){
							settings.crumbClicked.apply(sender, [crumb]);
						});
					}
				}
		},
		methods={
			firstChar: function(){
				var $this = $(this);
				
				$this.empty();
				
				for(var n;n<settings.data.length;n++){
					if(settings.data[n][settings.crumb] != null){
						priv.addCrumb($this, settings.data[n][settings.crumb][0].toUpperCase());
					}
				}
			},
			wholeWord: function(){
				var $this = $(this);
				
				$this.empty();
				
				for(var n;n<settings.data.length;n++){
					if(settings.data[n][settings.crumb] != null){
						priv.addCrumb($this, settings.data[n][settings.crumb]);
					}
				}
			}
		};
		
		return $(this).each(function(){
			if(typeof options === "object"){
				if(methods[settings.mode] && $.isArray(settings.data) && settings.crumb != null){
					methods[settings.mode].apply(this, []);
				}
			}
		});
	};
})(jQuery);