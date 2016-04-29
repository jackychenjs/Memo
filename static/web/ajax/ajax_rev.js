;( function(window) {

	var emptyFuc = function() {},

		defaultOpts = {
			type: 'POST',
			url: '',
			async: true,
			dataType: 'JSON',
			success: emptyFuc,
			error: emptyFuc,
			complete: emptyFuc
		},

		Ajax = window.Ajax = function(opts) {

			if (this === window || this.Ajax) {
	            return constructor(opts);
	        }

		},

		constructor = function(opts) {
			var _ajax = new Ajax(opts), queue;

			_ajax.getQueue = function() {
				return queue;
			};

			_ajax.shiftQueue = function() {

			};

			return _ajax;
		},

		/*init = Ajax.prototype.init = function(opts) {

			this.options = extend(defaultOpts, opts || {});

			return this;
		},*/

		extend = function() {
			var options, target = arguments[0] || {},
	        	length = arguments.length, i = 1;

		    for (; i < length; i++) {
		        if ((options = arguments[i]) != null) {
		            for (name in options) {
		                target[name] = options[name];
		            }
		        }
		    }
		    return target;
		};

	Ajax.prototype = {

		send: function() {
			return Ajax.ajax.call(this, this.options);
		},

		queue: function(opts) {
			var temOpts = opts ? opts : this.options;
			opts = extend(defaultOpts, temOpts || {});
			//if(!checkOptions(opts)) return this;
			if(ajaxQueue.length === 0) {
				//options = opts;
				startRequest.call(this, opts);
			} else {
				ajaxQueue.push(opts);
			}
			return this;
		}
	};

	extend( Ajax, {

		post: function(url, data, success) {
            return new system.ajax().post(url, data, success);
        },

        get: function(url, data, success) {
            return new system.ajax().get(url, data, success);
        },

        getJSON: function(url, data, success) {
            return Ajax.getJSON(url, data, success);
        },

		ajax: function(opts) {
			
			return this;
		}
	});

	//init.prototype = Ajax.prototype;

})(typeof window !== "undefined" ? window : this);