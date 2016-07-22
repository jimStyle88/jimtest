;(function($){
	$.fn.extend({
		//选项卡插件
		tabs: function(options){
			options = $.extend({
				tabMenu: ".tab-menu",
				tabCont: ".tab-cont",
				event: "click",
				classname: "selected",
				callback:null
			}, options);
			var self = $(this),
				menus = self.find(options.tabMenu).children(),
				conts = self.find(options.tabCont).children();
			menus.first().addClass(options.classname);
			conts.hide().first().show();
			menus.on(options.event, function(){
				var index = $(this).index();
				$(this).addClass(options.classname).siblings().removeClass(options.classname);
				conts.eq(index).show().siblings().hide();
				if(options.callback)
				{
					options.callback(this);
				}
			});
		}
	});
})(jQuery);