# Javascript

## 严格模式
ES6 的模块自动采用严格模式，不管你有没有在模块头部加上"use strict";。

严格模式主要有以下限制。

>变量必须声明后再使用
函数的参数不能有同名属性，否则报错
不能使用with语句
不能对只读属性赋值，否则报错
不能使用前缀0表示八进制数，否则报错
不能删除不可删除的属性，否则报错
不能删除变量delete prop，会报错，只能删除属性delete global[prop]
eval不会在它的外层作用域引入变量
eval和arguments不能被重新赋值
arguments不会自动反映函数参数的变化
不能使用arguments.callee
不能使用arguments.caller
禁止this指向全局对象
不能使用fn.caller和fn.arguments获取函数调用的堆栈
增加了保留字（比如protected、static和interface）


## 题目收集

1. 连等
    ```javascript
    var a = {n: 1, x: 'hello' /* 这个x是我自己加的, 原例没有, 用来混淆 */},
        b = a; 	 
    a.x = a = {n: 2};  

    console.log(a.x);	// --> undefined  
    console.log(b.x);	// --> {n:2}
    ```

    1、在执行前，会先将a和a.x中的a的引用地址都取出来，此值他们都指向{n:1}
    2、在内存中创建一个新对象{n:2}
    3、执行a={n:2}，将a的引用从指向{n:1}改为指向新的{n:2}
    4、执行a.x=a，此时a已经指向了新对象，而a.x因为在执行前保留了原引用，所以a.x的a依然指向原先的{n:1}对象，所以给原对象新增一个属性x，内容为{n:2}也就是现在a
    5、语句执行结束，原对象由{n:1}变成{n:1,x:{n:2}}，而原对象因为无人再引用他，所以被GC回收，当前a指向新对象{n:2}
    6、所以就有了文章开头的运行结果，再执行a.x，自然就是undefined了


    http://www.jb51.net/article/75496.htm
    http://segmentfault.com/q/1010000002637728

2. 声明提前

    ```javascript
	var a = 10;  
	   
	function test() { 
	    
		alert(a);            // undefined    
		    
		var a = 100;         // 变量声明提前, 所以楼上的a是undefined
		   
		alert(this.a);       // 10    this == window
		    
		alert(a);            // 100   赋值过后a == 100
	}  

	test(); 
    ```


3.  数组扁平化

    ```javascript
    var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
        return a.concat(b);
    });
    // flattened is [0, 1, 2, 3, 4, 5]
    ```



## 自用代码

1.  使用rem

    ```javascript
    function RemFix(){
        var width = window.innderWidth || document.documentElement.clientWidth || document.body.clientWidth;
        width = 320 > width ? 320 : width;
        var fSize = 20 * ( width / 320 );
        fSize = fSize > 36 ? 36 : fSize;
        document.getElementsByTagName("html")[0].style.fontSize = fSize + "px";
    }
    ```




## js学习:

* #### 关于js的类型

    ```javascript
    var str = 'word', num = 1, bol = true, obj = {}, arr = [], fuc = function(){}, reg = /\w/,
        n = null, u = undefined,
        toStr = Object.prototype.toString;

    console.log(typeof str, typeof num, typeof bol, typeof obj, typeof arr, typeof fuc, typeof reg, typeof n, typeof u);
    // 				string 		number 		boolean 	object 		object 		function 	object 	   object 	undefined


    console.log(toStr.call(str), toStr.call(num), toStr.call(bol), toStr.call(obj), toStr.call(arr), toStr.call(fuc), toStr.call(reg), toStr.call(n), toStr.call(u));
    // [object String] [object Number] [object Boolean] [object Object] [object Array] [object Function] [object RegExp] [object Null] [object Undefined]
    ```




* #### 测试"类数组"的类型

    ```javascript
    var nodelist = document.querySelectorAll('p');


    function testArgs(nodelist){

        console.log( Array.isArray(arguments) ); // false
        console.log( toStr.call(arguments) ); 	 // [object Arguments]
        console.log( typeof arguments );		 // object

        console.log( Array.isArray(nodelist) );  // false
        console.log( toStr.call(nodelist) );  	 // [object NodeList]
        console.log( typeof nodelist );			 // object

    }

    testArgs(nodelist);
    ```


* #### 自定义事件

    ```javascript
    var dom = document.getElementById('a');
    dom.addEventListener('alert', function(){alert(233)}, false);

    // 创建
    var evt = document.createEvent("HTMLEvents");
    // 初始化
    evt.initEvent("alert", false, false);

    // 触发, 即弹出文字
    dom.dispatchEvent(evt);
    ```

* #### 编码

    > JavaScript中有三个可以对字符串编码的函数，分别是： escape,encodeURI,encodeURIComponent，相应3个解码函数：unescape,decodeURI,decodeURIComponent 。

	下面简单介绍一下它们的区别

	1. escape()函数

        定义和用法 
        escape() 函数可对字符串进行编码，这样就可以在所有的计算机上读取该字符串。

        语法 
        escape(string)

        参数  描述  
        string  必需。要被转义或编码的字符串。 

        返回值 
        已编码的 string 的副本。其中某些字符被替换成了十六进制的转义序列。

        说明 
        该方法不会对 ASCII 字母和数字进行编码，也不会对下面这些 ASCII 标点符号进行编码： - _ . ! ~ * ' ( ) 。其他所有的字符都会被转义序列替换。

	2. encodeURI()函数 
        定义和用法 
        encodeURI() 函数可把字符串作为 URI 进行编码。

        语法 
        encodeURI(URIstring)

        参数  描述  
        URIstring  必需。一个字符串，含有 URI 或其他要编码的文本。 

        返回值 
        URIstring 的副本，其中的某些字符将被十六进制的转义序列进行替换。

        说明 
        该方法不会对 ASCII 字母和数字进行编码，也不会对这些 ASCII 标点符号进行编码： - _ . ! ~ * ' ( ) 。

        该方法的目的是对 URI 进行完整的编码，因此对以下在 URI 中具有特殊含义的 ASCII 标点符号，encodeURI() 函数是不会进行转义的：;/?:@&=+$,#

	 


	3. encodeURIComponent() 函数

        定义和用法 
        encodeURIComponent() 函数可把字符串作为 URI 组件进行编码。

        语法 
        encodeURIComponent(URIstring)

        参数  描述  
        URIstring  必需。一个字符串，含有 URI 组件或其他要编码的文本。 

        返回值 
        URIstring 的副本，其中的某些字符将被十六进制的转义序列进行替换。

        说明 
        该方法不会对 ASCII 字母和数字进行编码，也不会对这些 ASCII 标点符号进行编码： - _ . ! ~ * ' ( ) 。

        其他字符（比如 ：;/?:@&=+$,# 这些用于分隔 URI 组件的标点符号），都是由一个或多个十六进制的转义序列替换的。

        提示和注释 
        提示：请注意 encodeURIComponent() 函数 与 encodeURI() 函数的区别之处，前者假定它的参数是 URI 的一部分（比如协议、主机名、路径或查询字符串）。因此 encodeURIComponent() 函数将转义用于分隔 URI 各个部分的标点符号。

	 

	4. 总结：

	    通过对三个函数的分析，我们可以知道：escape()除了 ASCII 字母、数字和特定的符号外，对传进来的字符串全部进行转义编码，因此如果想对URL编码，最好不要使用此方法。而encodeURI() 用于编码整个URI,因为URI中的合法字符都不会被编码转换。encodeURIComponent方法在编码单个URIComponent（指请求参 数）应当是最常用的，它可以讲参数中的中文、特殊字符进行转义，而不会影响整个URL。

	 

	5. 示例：

        1. escape()

            ```javascript

            document.write(escape("http://www.w3school.com.cn/") + "<br />")

            document.write(escape("?!=()#%&"))

            ```
            输出：

            ```
            http%3A//www.w3school.com.cn

            %3F%21%3D%28%29%23%25%26
            ```

        2. encodeURI()

            ```javascript

            document.write(encodeURI("http://www.w3school.com.cn/")+ "<br />")

            document.write(encodeURI("http://www.w3school.com.cn/My first/"))

            document.write(encodeURI(",/?:@&=+$#"))

            ```
            输出：

            ```
            http://www.w3school.com.cn/

            http://www.w3school.com.cn/My%20first/

            ,/?:@&=+$#
            ```

            对整个URL进行编码，而URL的特定标识符不会被转码。

        3. encodeURIComponent()

            例1：

            ```javascript

            document.write(encodeURIComponent("http://www.w3school.com.cn/"))

            document.write("<br />")

            document.write(encodeURIComponent("http://www.w3school.com.cn/p 1/"))

            document.write("<br />")

            document.write(encodeURIComponent(",/?:@&=+$#"))

            ```
            输出：

            ```
            http%3A%2F%2Fwww.w3school.com.cn 
            http%3A%2F%2Fwww.w3school.com.cn%2Fp%201%2F 
            %2C%2F%3F%3A%40%26%3D%2B%24%23
            ```
            例2：
            ```javascript
            document.write('<a href="http://passport.baidu.com/?logout&aid=7&u='+encodeURIComponent("http://cang.baidu.com/bruce42")+'">退出</a>');
            ```

            对URL中的参数进行编码，因为参数也是一个URL，如果不编码会影响整个URL的跳转。


* #### nodetype

    ```
    节点类型					描述											子节点

    1	Element					一个元素										Element, Text, Comment, ProcessingInstruction, CDATASection, Entity参考手册
    2	Attr					一个属性										Text, Entity参考手册
    3	Text					一个元素的文本内容 或属性						None
    4	CDATASection			一个文档的CDATA部分（文本将 不会被解析器解析）	None
    5	Entity参考手册			实体引用										Element, ProcessingInstruction, Comment, Text, CDATASection, Entity参考手册
    6	Entity					一个实体										Element, ProcessingInstruction, Comment, Text, CDATASection, Entity参考手册
    7	ProcessingInstruction	一个处理指令									None
    8	Comment					一个注释										None
    9	Document				整个文档（DOM树的根节点）						Element, ProcessingInstruction, Comment, DocumentType
    10	DocumentType			为文档实体提供接口								None
    11	DocumentFragment		表示邻接节点和它们的子树。						Element, ProcessingInstruction, Comment, Text, CDATASection, Entity参考手册
    12	Notation				代表一个符号在DTD中的声明						None



    节点类型					nodeName 返回值			nodeValue 返回值

    1	Element					元素名					null
    2	Attr					属性名					属性值
    3	Text					#text					节点内容
    4	CDATASection			#cdata-section			节点内容
    5	Entity 参考手册			实体参考名				null
    6	Entity					实体名					null
    7	ProcessingInstruction	target					节点的内容
    8	Comment					#comment				注释文本
    9	Document				#document				null
    10	DocumentType			doctype name			null
    11 	DocumentFragment		#document fragment		null
    12	Notation				符号名称				null

    
    节点类型 - 静态变量名
    Node类型	Named Constant

    1	ELEMENT_NODE
    2	ATTRIBUTE_NODE
    3	TEXT_NODE
    4	CDATA_SECTION_NODE
    5	ENTITY_REFERENCE_NODE
    6	ENTITY_NODE
    7	PROCESSING_INSTRUCTION_NODE
    8	COMMENT_NODE
    9	DOCUMENT_NODE
    10	DOCUMENT_TYPE_NODE
    11	DOCUMENT_FRAGMENT_NODE
    12	NOTATION_NODE
    ```




* #### 网易云api

    ```javascript
    /**
    * 使用方法：
    * 
    * 1、打开 http://music.163.com/
    * 2、右键检查(审查元素)
    * 3、点击 console
    * 4、复制并粘贴本代码
    * 5、回车运行 
    */

    (function(songID){
        var musicSearch_API = 'http://music.163.com/api/search/pc',   		// ?s=" + songname + "&type=1"   ( POST )
            musicInfo_API = 'http://music.163.com/api/song/detail/',      	// ?id=" + songid + "&ids=%5B" + songid + "%5D";
            musicLyric_API = 'http://music.163.com/api/song/lyric',			// ?os=pc&lv=-1&kv=-1&tv=-1&id=' + songid
            artistAlbum_API = 'http://music.163.com/api/artist/albums/',	// + artistid + "?limit=" + limit;
            albumInfo_API = 'http://music.163.com/api/album/',				// + albumid
            playlistInfo_API = 'http://music.163.com/api/playlist/detail',  // ?id=" + playlistid
            mvInfo_API = 'http://music.163.com/api/mv/detail'				// ?id=" + mvid + "&type=mp4"


        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://music.163.com/api/song/lyric?lv=-1&tv=-1&id=' + songID, true);
        xhr.send();
        xhr.onload = function() {
            var data = JSON.parse(xhr.responseText);

            var lrcSplitReg = /\[.*/g;

            var lrc = data.lrc.lyric.match(lrcSplitReg),
                tlrc = data.tlyric.lyric.match(lrcSplitReg);

            var newLrc = [];

            lrc.map(function(cur, index){
                var combineLrc = cur;

                var curLrcSplit = cur.match(/(\[.*\])(.*)/),
                    curLrcTime = curLrcSplit[1],
                    curLrc = curLrcSplit[2];

                var i = 0, len = tlrc.length;
                for(; i < len; i++){
                    var curTLrcSplit = tlrc[i].match(/(\[.*\])(.*)/),
                        curTLrcTime = curTLrcSplit[1],
                        curTLrc = curTLrcSplit[2];
                    if(curLrcTime == curTLrcTime){
                        combineLrc += '  ' + curTLrc;
                    } else if(curLrcTime < curTLrcTime){
                        break;
                    }
                }
                newLrc.push(combineLrc);
            });

            //console.log(newLrc);
            window.open('', "_blank", '').document.write(newLrc.join('<br>'));
        };
    }('409872504')); // 歌曲 ID



    /*var lrc = data.lrc.lyric.match(/\[\d+:\d+\.\d+[^\[]+/g);
    var tLrc = data.tlyric.lyric.match(/\[\d+:\d+\.\d+[^\[]+/g);
    var newLrc = [];

    lrc.map(function(cur) {
        var arr = cur.match(/(\[[^\[]+\])([\u4e00-\u9fa5_a-zA-Z0-9\s]+)/), 
            word = arr[0];
            console.log(arr);

        for(var i = 0, len = tLrc.length; i < len; i++){
            var tcur = tLrc[i],
                tarr = tcur.match(/(\[[^\[]+\])([\u4e00-\u9fa5_a-zA-Z0-9\s]+)/);
            console.log(tarr);
            if(arr[1] == tarr[1]){
                word += tarr[2];
                break;
            } else if(arr[1] < tarr[1]) {
                continue;
            } else {
                break;
            }
        }
        newLrc.push(word);
    });*/
    //window.open('', "_blank", '').document.write(newLrc.join('<br>'));
    ```

