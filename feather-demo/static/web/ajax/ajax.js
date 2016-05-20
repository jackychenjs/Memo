;( function(window) {

	var emptyFuc = function() {};	

	function extend() {

		var options, target = arguments[0] || {}, length = arguments.length, i = 1;

		for (; i < length; i++) {
			if ((options = arguments[i]) != null) {
				for (name in options) {
					target[name] = options[name];
				}
			}
		}
		return target;
	}

	var Ajax = window.Ajax = ( function() {

		var defaultOpts = {
				type: 'POST',
				url: '',
				async: true,
				dataType: 'JSON',
				success: emptyFuc,
				error: emptyFuc,
				complete: emptyFuc
			},

			init = function(opts) {
				var options = this.options = extend(defaultOpts, opts || {}), ajaxQueue = [];

				this.getQueue = function() {
					return ajaxQueue;
				};

				this.shiftQueue = function() {
					return ajaxQueue.shift();
				};

				this.pushQueue = function(opts) {
					ajaxQueue.push(opts);
					return ajaxQueue;
				}
			},

			bindEvent = function(xhr, opts) {
				//var opts = this.options || options,
				var	self = this, 
					dataType = opts.dataType.toLowerCase(), 
					responseType = dataType === 'xml' ? 'responseXML' : 'responseText';					

				xhr.onreadystatechange = function() {
				  	if (xhr.readyState == 4) {
				  		var data = xhr[responseType];

						try {
							if(dataType === 'json') {
								data = JSON.parse(data);
							} else if(dataType === 'script') {
								eval(data);
							}
						} 
						catch(e) {
							//throw new Error('dataType convert error');
							alert(e.message);
						}

				  		if(xhr.status == 200) {
				  			opts.success.call(opts, data);
				  		} else {
				  			opts.error.call(opts, data);
					    }
			  			opts.complete.call(opts, data);
			  			//alert('Here is the Queue');
				    	queueRequest.call(self);
				    } 
			    };
			},

			checkOptions = function(opts) {
				//var opts = opts || options;

				if(!opts.url) {
					alert('ajax need a url!');
					return false;
				}

				if(opts.success && typeof opts.success !== 'function' || 
					opts.error && typeof opts.error !== 'function' ||
					opts.complete && typeof opts.complete !== 'function') {
					alert('callback should be a function!');
					return false;
				}

				if(opts.type === 'jsonp' && !opts.callback) {
					alert('jsonp need a callbak');
					return false;
				}

				return true;
			},

			newRequest = function() {
				var xhr;

				if (window.XMLHttpRequest){
					//IE7+, Firefox, Chrome, Opera, Safari
			  		xhr = new XMLHttpRequest();
			  	}else{
					//IE6, IE5
			  		xhr = new ActiveXObject("Microsoft.XMLHTTP");
			  	}
			  	return xhr;
			},

			sendRequest = function(xhr, opts) {
				//var opts = this.options || options;
				xhr.open(opts.type, opts.url, opts.async);
				xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");  
				xhr.send(opts.data);
			},

			queueRequest = function() {
				if(this.getQueue && this.getQueue().length > 0) {
					options = extend(defaultOpts, this.shiftQueue());
					this.startRequest();
				}
			},

			startJsonp = function(opts) {
				var script = document.createElement('script'),
					callback = opts.callback;

				script.src = options.url + '?callback=' + callback;
				document.head.appendChild(script);
			},

			startRequest = function(opts) {
				//if(!checkOptions()) return;
				if(opts.dataType.toLowerCase() === 'jsonp') {
					startJsonp.call(this, opts);
				} else {
					var xhr = newRequest();
					bindEvent.call(this, xhr, opts);
				    sendRequest.call(this, xhr, opts);
				}
			};

		extend( init, {

			ajax: function(opts) {
				opts = extend(defaultOpts, opts);
				startRequest.call(this, opts);
				return this;
			},

			post: function(url, data, success, dataType) {
				return this.ajax({
					type: 'POST',
					url: url,
					data: data,
					dataType: dataType,
					success: success
				});
			},

			get: function(url, data, success, dataType) {
				return this.ajax({
					type: 'GET',
					url: url,
					data: data,
					dataType: dataType,
					success: success
				});
			},

			getJSON: function(url, data, success) {
				return this.ajax({
					type: 'GET',
					url: url,
					data: data,
					dataType: 'JSON',
					success: success
				});
			},

			getScript: function(url, data, success) {
				return this.ajax({
					type: 'GET',
					url: url,
					data: data,
					dataType: 'SCRIPT',
					success: success
				});
			}
		});

		init.prototype = {

			start: function() {
				startRequest.call(this, this.options);
				return this;
			},

			queue: function(opts) {
				var temOpts = opts ? opts : this.options;
				opts = extend(defaultOpts, temOpts || {});
				//if(!checkOptions(opts)) return this;
				if(this.getQueue().length === 0) {
					//options = opts;
					startRequest.call(this, opts);
				} else {
					this.pushQueue(opts);
				}
				return this;
			}

		};

		return init;

	} )();


	Ajax.Form = ( function() {

		var init = function(opts) {

				var options = this.options = extend({
					formId: '',
					type: 'POST',
					url: '',
					dataType: 'JSON',
					success: function() {}
				}, opts || {});

				this.form = document.getElementById(opts.formId);

			};

		init.prototype.serialize = init.serialize = function(formId) {
			var result = [],
		    	serArr = this.serializeArray(formId), length = serArr.length, i = 0;
	    	for(; i < length; i++) {
	    		var field = serArr[i];
	    		result.push(encodeURIComponent(field.name) + '=' + encodeURIComponent(field.value));
	    	}
		    return result.join('&');
		};

		init.prototype.serializeObject = init.serializeObject = function(formId) {
			var result = {},
		    	serArr = this.serializeArray(formId), length = serArr.length, i = 0;
	    	for(; i < length; i++) {
	    		var field = serArr[i];
	    		result[encodeURIComponent(field.name)] = encodeURIComponent(field.value);
	    	}
		    return result;
		};

		init.prototype.serializeArray = init.serializeArray = function(formId) {
			var result = [],
				form = this.form || document.getElementById(formId);
			if(form) {
				var elements = form.elements, length = elements.length, i = 0;
				for(; i < length; i++) {
					var field = elements[i],
						type = field.type,
						name = field.name;
					if (name && field.nodeName.toLowerCase() != 'fieldset' &&
				        !field.disabled && type != 'submit' && type != 'reset' && type != 'button' && type != 'file' &&
				        ((type != 'radio' && type != 'checkbox') || field.checked)) {

			        	var value = field.value;
						result.push({ name: name, value: value });
				    }
				}
			}
			return result;
		};

		init.prototype.send = function() {
			var options = this.options,
				url = options.url, type = options.type, dataType = options.dataType, success = options.success,
				data = this.serialize();
			return Ajax.ajax({
				url: url,
				type: type,
				data: data,
				dataType: dataType,
				success: success
			});
		};

		return init;

	} )();

	//Ajax.Form.prototype.prototype = Ajax.prototype;


	/*Ajax.Periodical = ( function() {
		var options,

			init = function(opts) {
				options = this.options = extend({
					type: 'POST',
					url: '',
					async: true,
					dataType: 'JSON',
					interval: 3000,
					timeout: 3000,
					success: function() {},
					error: function() {},
					complete: function() {}
				}, opts || {});

			};

		return init;

	} )();

	Ajax.Periodical.prototype = Ajax.prototype;*/


})(typeof window !== "undefined" ? window : this);