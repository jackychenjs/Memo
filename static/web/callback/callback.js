require.async(['common:ui/jquery'], function($){
	/*$('.J_test').on('click', function(){
		var $this = $(this);
		iAmCallback(function(){
			console.log($this);
		})
	});

	function iAmCallback(callback){
		callback();
	}*/

	var fuc = {
		bindEvent: function(){
			var self = this;
			$('.J_test').on('click', function(){
				var $this = $(this);
				self.iAmCallback(function(){
					console.log($this);
				})
			});
		},

		iAmCallback: function(callback){
			callback();
		}
	}
	fuc.bindEvent();
})