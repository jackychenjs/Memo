# Tools

## vscode中的vue文件中emmet进行tab键不起作用
设置方法:

文件-首选项-设置
```json
"emmet.triggerExpansionOnTab": true,
"emmet.includeLanguages": {
	"vue-html": "html",
	"vue": "html"
}
```

## sublime text 3 安装package control

```
import urllib.request,os; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); open(os.path.join(ipp, pf), 'wb').write(urllib.request.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ','%20')).read())
```

## Tomcat

在Linux系统下，重启Tomcat使用命令操作的！

```shell
首先，进入Tomcat下的bin目录

cd /usr/local/tomcat/bin
使用Tomcat关闭命令

./shutdown.sh
查看Tomcat是否以关闭

ps -ef|grep java
如果显示以下相似信息，说明Tomcat还没有关闭

复制代码
root      7010     1  0 Apr19 ?        00:30:13 /usr/local/java/bin/java -Djava.util.logging.config.file=/usr/local/tomcat/conf/logging.properties -Djava.awt.headless=true -Dfile.encoding=UTF-8 -server -Xms1024m -Xmx1024m -XX:NewSize=256m -XX:MaxNewSize=256m -XX:PermSize=256m -XX:MaxPermSize=256m -XX:+DisableExplicitGC -Djava.util.logging.manager=org.apache.juli.ClassLoaderLogManager -Djava.endorsed.dirs=/usr/local/tomcat/endorsed -classpath /usr/local/tomcat/bin/bootstrap.jar -Dcatalina.base=/usr/local/tomcat -Dcatalina.home=/usr/local/tomcat -Djava.io.tmpdir=/usr/local/tomcat/temp org.apache.catalina.startup.Bootstrap start
复制代码
*如果你想直接干掉Tomcat，你可以使用kill命令，直接杀死Tomcat进程

	kill -9 7010
然后继续查看Tomcat是否关闭

	ps -ef|grep java
如果出现以下信息，则表示Tomcat已经关闭

root      7010     1  0 Apr19 ?        00:30:30 [java] <defunct>
最后，启动Tomcat

	./startup.sh 
注意：使用root用户登录Linux系统；正确进入Tomcat目录；在确定Tomcat关闭之后再启动Tomcat，否则会报端口被占用异常。
```