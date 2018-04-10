## 连等

``` js
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

## 声明提前

``` js
var a = 10;  
  
function test() { 
    
  alert(a);            // undefined    
      
  var a = 100;         // 变量声明提前, 所以楼上的a是undefined
    
  alert(this.a);       // 10    this == window
      
  alert(a);            // 100   赋值过后a == 100
}  

test(); 
```

## 数组扁平化

``` js
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
    return a.concat(b);
});
// flattened is [0, 1, 2, 3, 4, 5]
```

