(function(w){
	var Core = w.Core = {
		extend: function(opt_default, opt_user){
			var opt = opt_default;
			if(opt_user){
				for(var i in opt){
					/*if(opt.hasOwnProperty(i)){
						if(opt_user[i]){
							opt_default[i] = opt_user[i];
						}
					}*/
					opt.hasOwnProperty(i) && opt_user[i] && (opt_default[i] = opt_user[i]);
				}
			}
			return opt;
		}
	};
})(window);