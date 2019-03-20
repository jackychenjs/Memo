(function(){

    /**
  
    @example
  
        <!-- beacon.start -->
        (function(){
            window._ba_utm_init = function(GA){
               var w = window || GA;
               w['_ba_utm_l'] = 'aaa';
               w['_ba_utm_s'] = '1';
               w['_ba_utm_ex'] = {
                  a : 'xx' ,
                  b : 'xx' ,
                  c : 'xx' 
               };
            };
            //-- load ga script
            var s = document.createElement('script');
            s.src = 'http://bc.hexie.com/js/ga.min.js';
            var head = document.getElementsByTagName('head');
            if(head&&head[0]) { head[0].appendChild(s); }
        })();
        <!-- beacon.end -->
  
        参数：
        location - beacon需要的location，若没设置，则固定为e
        _ba_utm_l = 'aaa';    
  
        s - 当前页面在Beacon系统中ID
        _ba_utm_s = '1';
  
        该参数是init的回调，可以将配置加入其中
        _ba_utm_init = function(GA){}
  
        ext - 统计扩展参数
        var _ba_utm_ex = {
        a : 'xx' ,
        b : 'xx' ,
        c : 'xx' 
        };
  */
    var GA = function(){ 
      this.param = {};
    };
  
    GA.prototype.cookie = function( key , value , options ){
  
      if (arguments.length > 1 && String(value) !== "[object Object]") {
        options = options || {};
  
        if (value === null || value === undefined) {
          options.expires = -1;
        }
  
        if (typeof options.expires === 'number') {
          var days = options.expires, t = options.expires = new Date();
          t.setDate(t.getDate() + days);
        }
  
        value = String(value);
  
        return (document.cookie = [
                encodeURIComponent(key), '=',
                options.raw ? value : encodeURIComponent(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path ? '; path=' + options.path : '; path=/',
                options.domain ? '; domain=' + options.domain : '',
                options.secure ? '; secure' : ''
        ].join(''));
      }
  
      // key and possibly options given, get cookie...
      options = value || {};
      var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
      return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null; 
  
    };
  
    GA.prototype.add = function(key,value){ 
      if ( value != null ) {
        this.param[key] = value;
      }
    };
  
    GA.prototype.getHashString = function(key){
      var uri = window.location.hash.toString();
      var re = new RegExp("" +key+ "=([^&?]*)", "ig");
      return ((uri.match(re))?decodeURIComponent((uri.match(re)[0].substr(key.length+1))):"");
    }
  
    GA.prototype.getQueryString = function(key){
      var uri = window.location.search.toString();
      var re = new RegExp("" +key+ "=([^&?]*)", "ig");
      return ((uri.match(re))?decodeURIComponent((uri.match(re)[0].substr(key.length+1))):"");
    }
  
    GA.prototype.send = function(){
      var l = this.get_location();    
      var img = new Image();
      img.src = "http://bc.hexie.com/" + l + "?" + this._collect_params();
    };
  
      GA.prototype._collect_params = function(){
        var s = [];
        var p = this.param;
        for( var k in p ) {
          s.push( k + '=' + encodeURIComponent(p[k]) );
        }    
        return s.join('&');
      };
  
      GA.prototype.getDomain = function( _domain ){
        return (_domain||"").replace(/^.+\.(.+?\..+)$/,'$1');
      }
  
      GA.prototype.get_location = function(){
        if ( window['_ba_utm_l'] ) {
          return window['_ba_utm_l'];
        } else {
          return 'e';
        }
      };
  
      if(window["QNRGA"]){
        window["QNR_GA"] = GA;
      } else {
        window["QNRGA"] = GA;     
      }
  
      //------------------
  
      var ga = new GA(); 
  
      var inited = false;
  
      function init(){
  
        if( inited ) { return; }         
        inited = true;
  
        //站内外监测cookie
        var _domain = ga.getDomain( document.domain );
        var in_track = ga.getHashString("in_track") || ga.getQueryString("in_track");
        var ex_track = ga.getHashString("ex_track") || ga.getQueryString("ex_track");	     
        if( in_track ) {  ga.cookie('QN5',in_track,{ domain : _domain });  }
        if( ex_track ) {  ga.cookie('QN6',ex_track,{ domain : _domain });  }
  
        var cb = window['_ba_utm_init'];
        if( cb && typeof cb == 'function' ) {
          try{
            cb.apply( ga , [GA] );
          }catch(e){}
        }
  
        //版本号，当前0.1
        ga.add('utmwv','0.1');
        //当前唯一ID号，防止GIF被缓存
        ga.add('t',Math.random());
        //屏幕分辨率
        ga.add('utmsr', screen.availWidth + "*" + screen.availHeight );
        //当前页的reference
        ga.add('utmr', document.referrer || "-1" );
        //当前页面的URI
        ga.add('utmp', window.location.href.toString() );
        //访问域名
        ga.add('utmhn', window.location.host.toString() );
        //当前页面在Beacon系统中ID
  
        ga.add('s', window['_ba_utm_s'] || null );
        //统计扩展参数
        if ( window['_ba_utm_ex'] ) {
          var ex = window['_ba_utm_ex'];
          for ( var key in ex ) {
            ga.add( key , ex[key] );
          }
        }
  
        if( window['_ba_utm_s'] ){
          ga.send();
          ga.sended = true;
        }
  
      };
  
      GA.init = init;
  
      var _TCNT = 0;
  
      setTimeout(function() {
   
        if( window['_ba_utm_init'] || window['_ba_utm_s'] ) {
          init();
        } else {
          _TCNT++;
          if (_TCNT < 50) // break after five seconds
            setTimeout(arguments.callee, 100);
        }
      }, 100);
  
  })();
  