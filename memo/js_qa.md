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

## 执行顺序
```js
console.log('script start');

setTimeout(function() {
  console.log('setTimeout');
}, 0);

new Promise((resolve) => {
    console.log('Promise')
    resolve()
}).then(function() {
  console.log('promise1');
}).then(function() {
  console.log('promise2');
});

console.log('script end');
// script start => Promise => script end => promise1 => promise2 => setTimeout
```


不同的任务源会被分配到不同的 Task 队列中，任务源可以分为 微任务（microtask） 和 宏任务（macrotask）。在 ES6 规范中，microtask 称为 jobs，macrotask 称为 task。

以上代码虽然 setTimeout 写在 Promise 之前，但是因为 Promise 属于微任务而 setTimeout 属于宏任务，所以会有以上的打印。
微任务包括 process.nextTick ，promise ，Object.observe ，MutationObserver
宏任务包括 script ， setTimeout ，setInterval ，setImmediate ，I/O ，UI rendering
很多人有个误区，认为微任务快于宏任务，其实是错误的。因为宏任务中包括了 script ，浏览器会先执行一个宏任务，接下来有异步代码的话就先执行微任务。

所以正确的一次 Event loop 顺序是这样的

1. 执行同步代码，这属于宏任务
2. 执行栈为空，查询是否有微任务需要执行
3. 执行所有微任务
4. 必要的话渲染 UI
5. 然后开始下一轮 Event loop，执行宏任务中的异步代码

通过上述的  Event loop 顺序可知，如果宏任务中的异步代码有大量的计算并且需要操作 DOM 的话，为了更快的 界面响应，我们可以把操作 DOM 放入微任务中。





## try-catch 顺序
```js
function test() {
  try {
    console.log(1);
    return 'from_try';
  } catch (e) {
    // TODO
  } finally {
    console.log(2);
  }
}

console.log(test()); // 1 2 from_try
```
等等，难道不应该是 1 > from_try > 2的顺序吗？
抱歉啊，是这样的，在try和catch的代码块中，如果碰到return语句，那么在return之前，会先执行finally中的内容，所以2会比from_try优先输出。

```js
function test() {
  try {
    console.log(1);
    return 'from_try';
  } catch (e) {
    // TODO
  } finally {
    console.log(2);
    return 'from_finally';
  }
}

console.log(test()); // 1 2 from_finally
```
买噶的，我的from_try怎么不见了？
抱歉，按照上一条的规则，finally是会优先执行的，所以如果finally里有return语句，那么就真的return了。

```js
function test() {
  try {
    console.log(1);
    throw new Error('throw');
  } catch (e) {
    console.log(e.message);
    return 'from_catch';
  } finally {
    console.log(2);
  }
}

console.log(test()); // 1 throw 2 from_catch
```
看来，try和catch的return都需要先经过finally。