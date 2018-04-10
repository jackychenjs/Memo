## 命令

## 配置

- ### npmrc
  [参考 -> 官方文档](https://www.npmjs.com.cn/files/npmrc/)

- ### package-lock.json
  [参考 -> 知乎](https://www.zhihu.com/question/264560841)

  1. npm 5.0.x 版本，不管package.json怎么变，npm i 时都会根据lock文件下载package-lock.json file not updated after package.json file is changed · Issue #16866 · npm/npm这个 issue 控诉了这个问题，明明手动改了package.json，为啥不给我升级包！然后就导致了5.1.0的问题...
  &nbsp;&nbsp;
  2. 5.1.0版本后 npm install 会无视lock文件 去下载最新的npm然后有人提了这个issue why is package-lock being ignored? · Issue #17979 · npm/npm控诉这个问题，最后演变成5.4.2版本后的规则。
  &nbsp;&nbsp;
  3. 5.4.2版本后 why is package-lock being ignored? · Issue #17979 · npm/npm大致意思是，如果改了package.json，且package.json和lock文件不同，那么执行`npm i`时npm会根据package中的版本号以及语义含义去下载最新的包，并更新至lock。
  
- ### package.json
  [参考 -> 阮一峰](http://javascript.ruanyifeng.com/nodejs/packagejson.html)
  - ##### 版本号
    > **指定版本**：比如1.2.2，遵循“大版本.次要版本.小版本”的格式规定，安装时只安装指定版本。

    > **波浪号（tilde）+指定版本**：比如~1.2.2，表示安装1.2.x的最新版本（不低于1.2.2），但是不安装1.3.x，也就是说安装时不改变大版本号和次要版本号。

    > **插入号（caret）+指定版本**：比如ˆ1.2.2，表示安装1.x.x的最新版本（不低于1.2.2），但是不安装2.x.x，也就是说安装时不改变大版本号。需要注意的是，如果大版本号为0，则插入号的行为与波浪号相同，这是因为此时处于开发阶段，即使是次要版本号变动，也可能带来程序的不兼容。

    > **latest**：安装最新版本