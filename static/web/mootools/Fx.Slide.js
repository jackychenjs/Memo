;(function(w){
	Fx && (Fx.Slide = function(element, options){
			var element = document.id(element),
				mode = options.mode;
	
			function start(method){
				setInterval(function(){
					
				}, options.duration);
			}
	
			this.slideIn = function(){
				start('slideIn');
			};
			this.slideOut = function(){
				start('slideOut');
			};
			this.toggle = function(){
				start('toggle');
			};
			this.hide = function(){
				start('hide');
			};
			this.show = function(){
				start('show');
			};
	}) && Fx.Slide.prototype = Fx.prototype;
})(window);
