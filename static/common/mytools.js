;(function(win, doc, undefined) {

	var Jackyjs = function(selector) {
		return new Jackyjs.fn.init(selector);
	};

	Jackyjs.fn = Jackyjs.prototype = {
		init: function(selector) {
			this.selector = selector;
			return this;
		}
	};

	Jackyjs.extend = Jackyjs.fn.extend = function() {
		var options,  copy,
			target = arguments[0] || {},
			i = 1,
			length = arguments.length;

		//只有一个参数，就是对jQuery自身的扩展处理
		//extend,fn.extend
		if(i === length){
			target = this;//调用的上下文对象jQuery/或者实例
			i--;
		}

		for (; i < length; i++) {
			//从i开始取参数,不为空开始遍历
			if ((options = arguments[i]) != null) {
				for (name in options) {
					copy = options[name];
					//覆盖拷贝
					target[name] = copy;
				}
			}
		}

		return target;
	};

	Jackyjs.extend({
		removeAllImgs : function() {
			var imgs = document.querySelectorAll('img');
			for(var i = 0; i < imgs.length; i++ ) {
				var img = imgs[i];
				if(img.remove) {
					img.remove();
				}else {
					imgs[i].parentNode.removeChild(img);
				}
			}
		}
	})

	Jackyjs.prototype.init.prototype = Jackyjs.prototype;

	window.Jackyjs = Jackyjs;

})(typeof window !== "undefined" ? window : this, document);


