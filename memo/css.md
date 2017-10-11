# Css

## 基础写法

#### 定义一个icon-font

```css
@font-face {

    font-family: 字体名称;

    src: 服务器上字体文件的路径;
}

@font-face {
    font-family: "iconfont";
    src: url('iconfont.eot'); /* IE9*/
    src: url('iconfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('iconfont.woff') format('woff'), /* chrome、firefox */
            url('iconfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
            url('iconfont.svg#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
```


#### 定义一个key-frames ( 关键帧 )

```css
@key-frames changecolor {

    from { background:red; }

    to { background:green; }
}

animation-name: changecolor /*( 动画的名称 );*/

                /*-webkit- -moz- 前缀*/

animation-duration: /*动画播放时间;*/

animation-timing-function: /*动画播放方式;*/

animation-delay: /*等待时间;*/

animation-iteration-count: /*播放次数;*/

animation-direction: alternate /*( 动画播放方向 ) ;*/

animation-play-state: running, paused /*( 播放/暂停 );*/

animation-fill-mode: /*设置时间外属性;*/
```

#### flex兼容写法

```css
.flex {
    display: -webkit-box;  /*老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
    display: -moz-box;  /*老版本语法: Firefox (buggy) */
    display: -ms-flexbox;  /*混合版本语法: IE 10 */
    display: -webkit-flex;  /*新版本语法: Chrome 21+ */
    display: flex;  /*新版本语法: Opera 12.1, Firefox 22+*/

    flex-grow: 1;
    -webkit-box-flex: 1.0;
    -moz-flex-grow: 1;
    -webkit-flex-grow: 1;
}
```


## Css样式收集
* #### Animate.css 网站标题 渐变色字体动画效果

    ```css
    .site__title {
        color: #f35626;
        background-image: -webkit-linear-gradient(92deg,#f35626,#feab3a);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-animation: hue 60s infinite linear;
    }

    @-webkit-keyframes hue {
        from {
            -webkit-filter: hue-rotate(0deg);
        }
        to {
            -webkit-filter: hue-rotate(-360deg);
        }
    }
    ```


* #### webkit滚动条样式

    ```css
    ::-webkit-scrollbar {
        width: 7px;
        background-color: #f0f0f0;
    }
    ::-webkit-scrollbar-button:start:decrement, ::-webkit-scrollbar-button:end:increment{
        width:0;height:0; 
    }   
    ::-webkit-scrollbar-thumb{
        background:#d0d0d0;
    }  
    ::-webkit-scrollbar-thumb:hover{
        background:#aaaaab;
    }
    ```


* #### Kendo UI 的button 样式
    ```css
    .k-button {
        display: inline-block;
        margin: 0;
        padding: 10px 14px;
        font-family: inherit;
        line-height: 1.72em;
        text-align: center;
        cursor: pointer;
        text-decoration: none;

        font-size: 100%;
        font-family: inherit;
        border-style: solid;
        border-width: 1px;
        -webkit-appearance: none;

        color: #444;
        border-color: #fafafa;
        background-color: #fafafa;


        -webkit-box-shadow: 0 2px 6px rgba(0,0,0,0.2),0 2px 3px rgba(0,0,0,0.05);
        box-shadow: 0 2px 6px rgba(0,0,0,0.2),0 2px 3px rgba(0,0,0,0.05);

        border-radius: 2px;
    }

    .k-primary {
        color: #fff;
        border-color: #3f51b5;
        background-image: none;
        background-position: 50% 50%;
        background-color: #3f51b5;
        -webkit-box-shadow: none;
        box-shadow: none;

        &:hover {
            color: #fff;
            border-color: #5c6bc0;
            background-color: #5c6bc0;
        };
    }
    ```