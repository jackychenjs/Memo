;(function(w){
	Fx && (Fx.Transition = function(options){
		

	})


	/*Fx && (Fx.Transitions = function(options){
			var self = this,
				opts = Core.extend({
					dom: '',
					fps: 30,
					duration: 3000
				}, options || {});
			var element = document.getElementById(opts.dom);
			if(!element) return false;

			function getNow(){
				this.nowX = element.offsetLeft;
				this.nowY = element.offsetTop;
				return {
					x: this.nowX,
					y: this.nowY
				}
			}

			function doMove(){
				// self.timerId = setInterval(function(){
				// 	element.style.left = nowX + perFrapX * fraps + 'px';
				// 	element.style.top = nowY + perFrapY * fraps + 'px';
				// 	++fraps > allFraps ? self.pause() : '';
				// }, perFrapTime);
			}

			this.moveTo = function(pow){
				var destinationX = pow.x,
					destinationY = pow.y,
					now = getNow(),
					nowX = now.x,
					nowY = now.y,
					distanceX = destinationX - nowX,
					distanceY = destinationY - nowY,
					allFraps = opts.fps * opts.duration / 1000,
					perFrapX = distanceX / allFraps,
					perFrapY = distanceY / allFraps,
					perFrapTime = opts.duration/opts.fps/(opts.duration/1000),
					fraps = 1;
				self.timerId = setInterval(function(){
					element.style.left = nowX + perFrapX * fraps + 'px';
					element.style.top = nowY + perFrapY * fraps + 'px';
					++fraps > allFraps ? self.pause() : '';
				}, perFrapTime);
			}

			this.setDefault = function(){
				
			}

			this._resume = function(timerId){
				// self.timerId = setInterval(function(){

				// 	element.style.left = nowX + perFrapX * fraps + 'px';
				// 	element.style.top = nowY + perFrapY * fraps + 'px';
				// 	++fraps > allFraps ? self.pause() : '';
				// }, perFrapTime);
			}
	}) && (Fx.Transitions.prototype = Fx.prototype);*/
})(window);
