;(function(window){

    var _w = window, _d = _w.document, Lizard = _w.Lizard;

    var targetUrl = {
        beta: 'http://pay.beta.hexie.com/pt/pageTrace.do',
        prod: 'http://pay.hexie.com/pt/pageTrace.do',
        web: 'http://wxapp.hexie.com/pt/pageTrace.do'
    }

    function extend() {
        var options,
			target = arguments[0] || {},
		 	i = 1,
			length = arguments.length;

		for (; i < length; i++) {
			if ((options = arguments[i]) != null) {
				for (var name in options) {
					target[name] = options[name];
				}
			}
		}
		return target;
    }

    function parseParam(param) {
        var _arr = []
        for(var i in param) {
            _arr.push(i + '=' + encodeURIComponent(param[i]))
        }
        return _arr.join('&');
    }

    function createImageRequest(url, callback) {
        var img = new Image(1, 1)
        img.onload = function() {
            if(typeof callbak === 'function') callback();
        }
        img.src = url;
    }

    function createXhr() {
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true; // 跨域携带cookie
        return xhr;
    }

    // 当前时间戳
    function now() {
        return new Date().getTime();
    }

    // current url
    function getCurl() {
        return location.href;
    }
    
    // reffer
    function getReferrer() {
        return document.referrer;
    }

    // 鼠标位置
    function getMousePosition() {
        return []
    }

    // 经纬度
    function getLatIng() {
        return ''
    }

    // 设备信息
    function getDeviceInfo() {
        return screen.availWidth + 'x' + screen.availHeight;
    }

    var PT = function(){
        this.params = {};
    }

    PT.prototype.add = function(key, value) {
        if(value != null) this.params[key] = value;
    }

    PT.prototype.send = function(obj, callback) {
        var url = this.getTargetUrl();
        var img = new Image();
        if(typeof callback === 'function' ) {
            img.onload = callback;
        }
        img.src = url + '?' + parseParam(this.getParams(obj));
    }

    PT.prototype.getParams = function(obj) {
        var params = {
            an: '',
            _t: now(),
            pid: '',
            ref: getReferrer(), 
            curl: getCurl(),
            sc: '',
            aid: ''
        }
        return extend(params, obj);
    }

    PT.prototype.getTargetUrl = function() {
        var self = this, url;
        switch(Lizard.envType.toLowerCase()) {
            case 'fat':
            case 'uat':
                url = targetUrl['beta']
                break;
            case 'prd':
                url = targetUrl['web']
                break;
            default:
        }
        return url;
    }

    var pt = new PT();

    window.__pt = pt;

})(window)