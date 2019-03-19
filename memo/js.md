## 严格模式
ES6 的模块自动采用严格模式，不管你有没有在模块头部加上"use strict";。

严格模式主要有以下限制。
```
变量必须声明后再使用
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
```
## JS类型

``` js
var str = 'word', num = 1, bol = true, obj = {}, arr = [], fuc = function(){}, reg = /\w/,
    n = null, u = undefined,
    toStr = Object.prototype.toString;

console.log(typeof str, typeof num, typeof bol, typeof obj, typeof arr, typeof fuc, typeof reg, typeof n, typeof u);
// 				string 		number 		boolean 	object 		object 		function 	object 	   object 	undefined


console.log(toStr.call(str), toStr.call(num), toStr.call(bol), toStr.call(obj), toStr.call(arr), toStr.call(fuc), toStr.call(reg), toStr.call(n), toStr.call(u));
// [object String] [object Number] [object Boolean] [object Object] [object Array] [object Function] [object RegExp] [object Null] [object Undefined]
```

## 测试"类数组"的类型

``` js {.line-numbers}
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

## 自定义事件

``` js {.line-numbers}
var dom = document.getElementById('a');
dom.addEventListener('alert', function(){alert(233)}, false);

// 创建
var evt = document.createEvent("HTMLEvents");
// 初始化
evt.initEvent("alert", false, false);

// 触发, 即弹出文字
dom.dispatchEvent(evt);
```

## 编码

> JavaScript中有三个可以对字符串编码的函数，分别是： 
> escape, encodeURI ,encodeURIComponent，
> 相应3个解码函数：unescape, decodeURI, decodeURIComponent 。 

下面简单介绍一下它们的区别

1. **escape()函数**
``` js
定义和用法 
escape() 函数可对字符串进行编码，这样就可以在所有的计算机上读取该字符串。

语法 
escape(string)

参数  描述  
string  必需。要被转义或编码的字符串。 

返回值 
已编码的 string 的副本。其中某些字符被替换成了十六进制的转义序列。

说明 
该方法不会对 ASCII 字母和数字进行编码，
也不会对下面这些 ASCII 标点符号进行编码： - _ . ! ~ * ' ( ) 。其他所有的字符都会被转义序列替换。
```

2. **encodeURI()函数**
``` js
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
```

3. **encodeURIComponent() 函数**
``` js
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
```

4. **总结：**
``` js
通过对三个函数的分析，我们可以知道：

escape()除了 ASCII 字母、数字和特定的符号外，对传进来的字符串全部进行转义编码，因此如果想对URL编码，最好不要使用此方法。

encodeURI() 用于编码整个URI,因为URI中的合法字符都不会被编码转换。

encodeURIComponent()在编码单个URIComponent（指请求参 数）应当是最常用的，它可以讲参数中的中文、特殊字符进行转义，而不会影响整个URL。
```

5. **示例：**

  - escape()

      ```javascript {}

      document.write(escape("http://www.w3school.com.cn/") + "<br />")

      document.write(escape("?!=()#%&"))

      ```
      输出：

      ```
      http%3A//www.w3school.com.cn

      %3F%21%3D%28%29%23%25%26
      ```

  - encodeURI()

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

  - encodeURIComponent()

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


## nodetype


节点类型					| 描述										|	子节点
:- | :- | :- 
1	Element			|		一个元素			|							Element, Text, Comment, ProcessingInstruction, CDATASection, Entity参考手册
2	Attr		|			一个属性				|						Text, Entity参考手册
3	Text		|			一个元素的文本内容 或属性		|				None
4	CDATASection	|		一个文档的CDATA部分（文本将 不会被解析器解析）|	None
5	Entity参考手册	|		实体引用					|					Element, ProcessingInstruction, Comment, Text, CDATASection, Entity参考手册
6	Entity		|			一个实体					|					Element, ProcessingInstruction, Comment, Text, CDATASection, Entity参考手册
7	ProcessingInstruction	|一个处理指令			|						None
8	Comment			|		一个注释							|			None
9	Document		|		整个文档（DOM树的根节点）			|			Element, ProcessingInstruction, Comment, DocumentType
10	DocumentType	|		为文档实体提供接口				|				None
11	DocumentFragment	|	表示邻接节点和它们的子树。	|					Element, ProcessingInstruction, Comment, Text, CDATASection, Entity参考手册
12	Notation		|		代表一个符号在DTD中的声明			|			None



节点类型		|			nodeName 返回值		|	nodeValue 返回值
:- | :- | :-
1	Element			|		元素名		|			null
2	Attr			|		属性名		|			属性值
3	Text		|			#text			|		节点内容
4	CDATASection	|		#cdata-section	|		节点内容
5	Entity 参考手册	|		实体参考名		|		null
6	Entity			|		实体名		|			null
7	ProcessingInstruction|	target		|			节点的内容
8	Comment			|		#comment		|		注释文本
9	Document		|		#document		|		null
10	DocumentType	|		doctype name	|		null
11 	DocumentFragment	|	#document fragment	|	null
12	Notation	|			符号名称		|		null


节点类型 - 静态变量名
Node类型	|Named Constant
:- | :- | :-
1	|ELEMENT_NODE
2	|ATTRIBUTE_NODE
3	|TEXT_NODE
4	|CDATA_SECTION_NODE
5	|ENTITY_REFERENCE_NODE
6	|ENTITY_NODE
7	|PROCESSING_INSTRUCTION_NODE
8	|COMMENT_NODE
9	|DOCUMENT_NODE
10	|DOCUMENT_TYPE_NODE
11	|DOCUMENT_FRAGMENT_NODE
12	|NOTATION_NODE


## 知识点
1.使用Array做为StringBuffer，代替字符串拼接的操作。然后使用Array中的join方式处理要比直接进行字符串拼接效率要高。


## 设计模式

