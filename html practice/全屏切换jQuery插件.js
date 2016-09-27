(function($){
	var privateFun=function(){
		}
	var PageSwitch=(function(){
		function PageSwitch(element,options){
			this.settins=$.extend(true,$.fn.PageSwitch.defualt,options||{});
			this,element=element;
			this.init();
			}
			PageSwitch.prototype={
				init:function(){
					}
				}
				return PageSwitch;		
		})();
	$.fn.PageSwitch=function(options){
		return this.each(function(){
			var me= $(this),
			 	instance=me.data("PageSwitch");
				if(!instance){instance=new PageSwitch(me,options);
				me.data("PageSwitch",instance);
				}
				if($.type(options)==="string") return instance[options]();
				$("div").pageSwitch("init")
			});
		}	
		$.fn.PageSwitch.defualt={
			selections:".sections",
			section:".section",
			page:"pages",
			active:".active",
			},
			index:0,
			easing:"easy",
			duration:500,
			loop:false,
			pagination:true,
			keyboard:true,
			direction:"vertical",
			callback:""
	}
	$(function(){
		$("[data-Page]").PageSwitch();
		})
	)(jQuery)