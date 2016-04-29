;(function(w){
	var Fx = w.Fx = function(options){
		var self = this,
			opts = this.opts = Core.extend({
				fps: '',
				duration: '',
				transition: ''
			}, options || {});
			
		this._event = null;

		this.initialize = function(){

		};
	};

	Fx.prototype = {
		start: function(){
			
		},

		cancel: function(){

		},

		pause: function(){

		},

		resume: function(){
			
		}
	}
})(window);


