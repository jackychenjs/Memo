## 使用rem

```javascript
function RemFix(){
    var width = window.innderWidth || document.documentElement.clientWidth || document.body.clientWidth;
    width = 320 > width ? 320 : width;
    var fSize = 20 * ( width / 320 );
    fSize = fSize > 36 ? 36 : fSize;
    document.getElementsByTagName("html")[0].style.fontSize = fSize + "px";
}
```

## 网易云api

``` js
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