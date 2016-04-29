;(function(window) {

	var DOC = window.document,
		

	var aQuery = function(selector) {
	    return new aQuery.fn.init(selector);
	};

	aQuery.fn = aQuery.prototype = {
	    name: 'Jacky',
		init: function(selector) {
			this.selector = selector;
			sizzle(this, selector);
			return this;
		},
		constructor: aQuery,
		append: function(){

		},
		prepend: function(){

		},
		appendTo: function(){

		}
	};
	
	var sizzle =  function(newA, selector){
		var domlist = document.querySelectorAll(selector);
		Array.prototype.push.apply(newA, domlist);
		return newA;
	};

	aQuery.fn.init.prototype = aQuery.fn;

	aQuery.extend = aQuery.fn.extend = function() {
		var options,
			target = arguments[0] || {},
		 	i = 1,
			length = arguments.length;

		//只有一个参数，就是对jQuery自身的扩展处理
		//extend,fn.extend
		if (i === length) {
			target = this; //调用的上下文对象jQuery/或者实例
			i--;
		}
		for (; i < length; i++) {
			if ((options = arguments[i]) != null) {
				for (name in options) {
					target[name] = options[name];
				}
			}
		}
		return target;
	};

	aQuery.extend({
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
	});

	aQuery.fn.extend({
		setName: function(myName) {
			this.myName = myName;
			return this;
		},
		getName: function() {
			console.log(this.myName);
			return this;
		}
	});


	window.$$ = window.aQuery = aQuery;

})(typeof window !== "undefined" ? window : this);


