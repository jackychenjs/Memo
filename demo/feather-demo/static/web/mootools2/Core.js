;(function(){
	this.JackyTools = {
		version: '0.1-test',
		build: 'jacky',
		time: '2016/02/01'
	};

	var Function = this.Function;

	Function.prototype.overloadSetter = function(usePlural){
		var self = this;
		//console.log("Function.prototype.overloadSetter", this);
		return function(a, b){
			//console.log("Function.prototype.overloadSetter a b", a,b)
			/*if (a == null) return this;
			if (usePlural || typeof a != 'string'){
				for (var k in a) self.call(this, k, a[k]);
				//<ltIE8>
				//forEachObjectEnumberableKey(a, self, this);
				//</ltIE8>
			} else {
				self.call(this, a, b);
			}*/
			//console.log("Function.prototype.overloadSetter return", this);
			return this;
		};
	};

	/*Function.prototype.extend = function(key, value){
		console.log("Function.prototype.extend", key, value, this);
		this[key] = value;
	}.overloadSetter();

	Function.prototype.implement = function(key, value){
		console.log("Function.prototype.implement", key, value, this);
		this.prototype[key] = value;
	}.overloadSetter();*/

	var Type = this.Type = function(name, object){
		if (name) {

		}

		if (object == null) return null;


		console.log("Type", this);
		/*object.extend(this);
		object.$constructor = Type;
		object.prototype.$constructor = object;*/

		return object;
	}



})();