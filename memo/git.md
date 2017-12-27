## git 生成公钥，私钥

在git命令行中，输入命令： cd ~/.ssh，来检测是否生成过key,没有生成过key，会有相关信息提示；然后输入命令：

```bash
$ ssh-keygen -t rsa -C “邮箱地址”
```

按下回车键；然后根据返回的信息，找到.ssh目录下的两个文件；

#### 生成ssh key

```bash
ssh-keygen -t rsa -C “jacky_cjs@163.com”
```

#### 在github上添加SSH key
在github上点击“setting”，找到添加SSH key的菜单，然后新增SSH key；把文件id_rsa.pub  里面的内容全部复制到 key编辑框中，保存完毕；

在git命令行输入：
```bash
ssh  -T git@github.com
```
这里会要求你输入SSH key密码，如果刚才生成SSH key时未输入密码，密码就为空；
然后看到信息：ERROR: Hi 用户名! You’ve successfully authenticated；说明配置成功；

再次查看github密钥
登陆到github上查看刚刚输入的SSH key，现在图标的颜色变为绿色，说明密钥配置有效；现在可以在git命令行上进行git操作了；

***

## git config autocrlf

	[git] warning: LF will be replaced by CRLF | fatal: CRLF would be replaced by LF

遇到这两个错误，是因为Git的换行符检查功能。

	core.safecrlf

Git提供了一个换行符检查功能（core.safecrlf），可以在提交时检查文件是否混用了不同风格的换行符。这个功能的选项如下：

>false - 不做任何检查
>warn - 在提交时检查并警告
>true - 在提交时检查，如果发现混用则拒绝提交

**建议使用最严格的 true 选项。**

假如你正在Windows上写程序，又或者你正在和其他人合作，他们在Windows上编程，而你却在其他系统上，在这些情况下，你可能会遇到行尾结束符问题。这是因为Windows使用回车和换行两个字符来结束一行，而Mac和Linux只使用换行一个字符。虽然这是小问题，但它会极大地扰乱跨平台协作。

* Git可以在你提交时自动地把行结束符CRLF转换成LF，而在签出代码时把LF转换成CRLF。用core.autocrlf来打开此项功能，如果是在Windows系统上，把它设置成true，这样当签出代码时，LF会被转换成CRLF：
  `$ git config --global core.autocrlf true`

* Linux或Mac系统使用LF作为行结束符，因此你不想 Git 在签出文件时进行自动的转换；当一个以CRLF为行结束符的文件不小心被引入时你肯定想进行修正，把core.autocrlf设置成input来告诉 Git 在提交时把CRLF转换成LF，签出时不转换：
  `$ git config --global core.autocrlf input`
  这样会在Windows系统上的签出文件中保留CRLF，会在Mac和Linux系统上，包括仓库中保留LF。

* 如果你是Windows程序员，且正在开发仅运行在Windows上的项目，可以设置false取消此功能，把回车符记录在库中：
  `$ git config --global core.autocrlf false`

***

## git config longpaths

`git config --global core.longpaths true` 设置长文件名

***

## git命令之git stash apply和 pop 的区别

先说git stash：
git stash 命令可以将在当前分支修改的内容放到缓存区中，并会自动建立一个缓存的list集合，方便管理。
如果想将修改的内容重新释放出来，git stash apply 和 git stash pop 都可以达到这个目的。
但是两者有什么区别呢。
刚才说过，git stash 可以形成list 集合。通过git stash list 可以看到list下的suoy
使用git stash apply @{x} ，可以将编号x的缓存释放出来，但是该缓存还存在于list中
> **而 git stash apply，会将当前分支的最后一次缓存的内容释放出来，但是刚才的记录还存在list中**
> **而 git stash pop，也会将当前分支的最后一次缓存的内容释放出来，但是刚才的记录不存在list中**

## git 删除远程分支

```git
git branch -r -d origin/branch-name
git push origin :branch-name