#Html

## IE版本判断

```html
<!-- 
    [if !IE]
    [if lt IE 5.5]
    [if lte IE 6]
    [if gt IE 5]
    [if gte IE 7]
    [if !(IE 7)]
    [if (gt IE 5)&(lt IE 7)]
    [if (IE 6)|(IE 7)]
-->


<!--[if lt IE 9]>

    加载CSS1

<!--[else]>

    加载CSS2

<![endif]-->
```



## HTML Meta中添加X-UA-Compatible和IE=Edge，chrome=1有什么作用


这是一个，文档兼容模式的定义。
Edge 模式告诉 IE 以最高级模式渲染文档，也就是任何 IE 版本都以当前版本所支持的最高级标准模式渲染，避免版本升级造成的影响。简单的说，就是什么版本 IE 就用什么版本的标准模式渲染

`<meta http-equiv="X-UA-Compatible" content="IE=edge">`

使用以下代码强制 IE 使用 Chrome Frame 渲染
`<meta http-equiv="X-UA-Compatible" content="chrome=1">`

提示 IE 用户安装 Google Frame
Google 官方提供了对 Google Frame 插件安装情况的检测，这里直接调用方法即可，如果检测到 IE 并未安装 Google Frame，则弹出对话框提示安装。

`<script src="http://ajax.googleapis.com/ajax/libs/chrome-frame/1/CFInstall.min.js"></script><script>CFInstall.check();</script>`

最佳的兼容模式方案，结合考虑以上两种：
`<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">`