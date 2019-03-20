;(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return (root.__pt = factory());
        });

    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();

    } else {
        root.__pt = factory();

    }
}(this, function () {

    var _w = window, _d = _w.document, Lizard = _w.Lizard;

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
        return document.URL;
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
        return window.screen.height + 'x' + window.screen.width
    }

    var pageTrace = {

        targetUrl: {
            beta: 'http://pay.beta.hexie.com/pt/pageTrace.do',
            prod: 'http://pay.hexie.com/pt/pageTrace.do',
            web: 'http://wxapp.hexie.com/pt/pageTrace.do'
        },

        // 显示传递参数列表
        args: {
            an: '', // appName应用的名字
            _t: '', // 前端请求时间戳
            pid: '', // pageId
            ref: '', // 从哪个页面跳转到这个页面
            curl: '', // 当前页面的url
            sc: '', // 页面请求的http code 当前页面请求的返回的httpcode
            di: '', // device info，设备信息，传递设备相关信息，格式：Json。
            latlng: '', // 纬度、经度数据，如果有则传，没有不传，格式lat,lng
            mp: '', // mouse position：鼠标位置，相对左上角的像素，格式[(x,y),(x,y),...]可以一次传多个。
            /**
             * actionId，操作类型。
             * 0：页面加载，页面加载完成之后调用的类型，用于计算PV、UV（默认类型） 
             * 1：页面离开事件，关闭tab、window或者点击上面的链接或者跳出当前页面。 
             * 2：异常汇报，将交易的原来的那一套报警，统一集中到这里。（jserror）  
             * 3：表示点击，那么必须要有对应的点击Id，用于标识点击，可以是链接的点击，也可以是button的点击
             * 4：表示输入，比如在文本框里面输入对应的信息。
             * 5: ajax监控； 
             * 6: 性能监控 
             * 7：页面停留时间 ( 扩展字段里 ctx.st 为页面停留时间)
             * 8：页面渲染时间
             * 9：异常点击行为
             */
            aid: '',
            /**
             * 该字段是操作上下文信息，json格式，用url编码后放到ctx参数里面，推荐只有一层的json，可以不填。
             * action-type:按钮名称
    
                page: 当前页面
    
                from: 渠道、来源
    
                uid: 用户id ,当无法从cookie里获取userName时,会依该uid做uv计算.
    
                (hexie体系外的埋点请求 比如CEQ, 需要给该字段赋值)
                stack:堆栈信息，如果是错误类型。 
                oid：如果是针对特定元素的操作，需要指定操作对象的id。 
                orderno：如果涉及到订单，那么需要将订单号数据输出。 
                val：如果是输入值，可以将输入值给出。 
                err：如果输入或者点击发生业务错误，将错误结果贴出来。
             */
            ctx: {}
        },

        init: function() {
            this.setAppName();
            this.setDevice();
        },

        settings: function() {

        },

        send: function(obj) {
            var xhr = createXhr(),
                params = this.getParams(obj),
                urlParams = parseParam(params),
                url = this.getTargetUrl();

            xhr.open('POST', url + '?' + urlParams);
            xhr.send(JSON.stringify({params}))
        },
        
        /**
         * 拓展必传字段
         * @param {*} obj 
         */
        getParams: function(obj) {
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
        },

        getTargetUrl: function() {
            var self = this, url;
            switch(Lizard.envType.toLowerCase()) {
                case 'fat':
                case 'uat':
                    url = self.targetUrl['beta']
                    break;
                case 'prd':
                    url = self.targetUrl['prod']
                    break;
                default:
            }
            return url;
        },

        getStandingTime: function() {
            
        },

        setAppName: function() {

        },

        setDevice: function() {

        },
        
        bindLoad: function(){
            document.addEventListener('load', function(){
                this.send({
                    aid: 0
                })
            }, true);
        },

        bindUnload: function() {
            document.addEventListener('beforeunload', function(){
                this.send({
                    aid: 1
                })

                this.send({
                    aid: 7,
                    ctx: {
                        st: this.getStandingTime()
                    }
                })
            }, true);
        },

        bindClick: function() {
            document.addEventListener('click', function(e){
                var target = e.target,
                    _ctx = e.target.getAttribute('pt');
                if(_ctx) {
                    this.send({
                        aid: 3,
                        ctx: extend({
                            "page": '',
                            "action-type": target.className,
                            "from": '',
                            "uid": ''
                        }, _ctx)
                    });
                }
            }, true);
        },

        bindInput: function() {
            document.addEventListener('input', function(e){
                var target = e.target,
                    _ctx = e.target.getAttribute('pt');
                if(_ctx) {
                    this.send({
                        aid: 4,
                        ctx: extend({
                            "page": '',
                            "action-type": target.className,
                            "from": '',
                            "uid": ''
                        }, _ctx)
                    });
                }
            }, true);
        },

        bindChange: function() {
            document.addEventListener('change', function(e){
                var target = e.target,
                    _ctx = e.target.getAttribute('pt');
                if(_ctx) {
                    this.send({
                        aid: 4,
                        ctx: extend({
                            "page": '',
                            "action-type": target.className,
                            "from": '',
                            "uid": ''
                        }, _ctx)
                    });
                }
            }, true);
        }
    }

    pageTrace.init();

    return {
        send: pageTrace.send,
        settings: pageTrace.settings
    };
}));