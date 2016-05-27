;(function(window) {

	var DOC = window.document,
		toString = Object.prototype.toString,
		strArray = "[object Array]",
		strFunction = "[object Function]",
		strObject = "[object Object]",
		trimExpr = /^(\s|\u00A0)+|(\s|\u00A0)+$/g; //  简单版: /(^\s*)|(\s*$)/g    jquery版: /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
		
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

		each: function(callback) {
			return aQuery.each(this, callback);
		},

		append: function() {

		},
		prepend: function() {

		},
		appendTo: function() {

		},
		
		parent: function() {
			return dir.call(this, "parentNode", 0, selector);
		},
		parents: function() {
			
		},
		parentsUntil: function() {
			
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
				for (var name in options) {
					target[name] = options[name];
				}
			}
		}
		return target;
	};

	aQuery.extend({

		each: function(obj, callback){
			var value,
				i = 0,
				length = obj.length,
				isArray = isArray( obj );

			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.apply( obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.apply( obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			}

			return obj;
		},

		isArray: function(obj){
			return toString.call(obj) === strArray;  // strArray = "[object Array]",
		},

		isFunction: function(obj, type) {
			return toString.call(obj) === strFunction;  // strFunction = "[object Function]"
		},

		isObject: function(obj){
			return typeof obj == "object" && toString.call(obj) === strObject;  // strObject = "[object Object]"
		},

		trim: function(str){
			if(String.prototype.trim) {
				return str.trim();
			}
			return str.replace(trimExpr, "");
		},

		/* Demo for myself */
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

	function dir(elem, dir, until){
		var arr = [];
		
		
		return arr;
	}

	aQuery.fn.extend({
		/*setName: function(myName) {
			this.myName = myName;
			return this;
		},
		getName: function() {
			console.log(this.myName);
			return this;
		}*/
	});

	window.$$ = window.aQuery = aQuery;

})(typeof window !== "undefined" ? window : this);


