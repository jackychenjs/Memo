;(function(){
	/*var Class = this.Class = function(params){

		var newClass = function(){
			var value = (this.initialize) ? this.initialize.apply(this, arguments) : this;
			return value;
		};

		newClass.prototype[] =

		return newClass;
	};*/
	var Class = this.Class = new Type('Class', function(params){

		console.log("Class", this);

		var newClass = function(){
			console.log('newClass', this);
			var value = (this.initialize) ? this.initialize.apply(this, arguments) : this;
			return value;
		}.extend(this).implement(params);

		return newClass;
	});
})();