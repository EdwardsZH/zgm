# JS

## this、apply、call、bind
`this 的指向并不是在创建的时候就可以确定的,
在 ES5 中，其实 this 的指向，始终坚持一个
原理 this - 永远指向最后调用它的那个对象`
```js
// https://juejin.im/post/59bfe84351882531b730bac2
var name = "windowsName";
function a() {
  var name = "Cherry";

  console.log(this.name);          // windowsName

  console.log("inner:" + this);    // inner: Window
}
a();
console.log("outer:" + this)      // window

`2`
var name = "windowsName";
var a = {
  name: "Cherry",
  fn: function () {
    console.log(this.name);      // Cherry
  }
}
a.fn();

`3`
var name = "windowsName";

function fn() {
  var name = 'Cherry';
  innerFunction();
  function innerFunction() {
    console.log(this.name);      // windowsName
  }
}
fn()

  `4.`
var name = "windowsName";
var a = {
  name: null,
  // name: "Cherry",
  fn: function () {
    console.log(this.name);      // windowsName
  }
}

var f = a.fn;
f();

`5.`
var name = "windowsName";

function fn() {
  var name = 'Cherry';
  innerFunction();
  function innerFunction() {
    console.log(this.name);      // windowsName
  }
}

fn()

  // ------------------------------- 如何改变this的指向? ------------------------------------
  /* 
  * 1.使用 ES6 的箭头函数
  * 2.在函数内部使用 _this = this
  * 3.使用 apply、call、bind
  * 4.new 实例化一个对象 
  */

  `demo 7 `
var name = "windowsName";
var a = {
  name: "Cherry",
  func1: function () {
    console.log(this.name)
  },
  func2: function () {
    setTimeout(function () {
      this.func1()
    }, 100);
  }
};

a.func2()

// 在不使用箭头函数的情况下，是会报错的，因为最后调用 setTimeout 的对象是 window，但是在 window 中并没有 func1 函数。

`demo 8 箭头函数`

var name = "windowsName";

var a = {
  name: "Cherry",
  func1: function () {
    console.log(this.name)
  },
  func2: function () {
    setTimeout(() => {
      this.func1()
    }, 100);
  }
};
a.func2()     // Cherry


`demo 9在函数内部使用 _this = this`

var name = "windowsName";

var a = {
  name: "Cherry",

  func1: function () {
    console.log(this.name)
  },

  func2: function () {
    var _this = this;
    setTimeout(function () {
      _this.func1()
    }, 100);
  }

};

a.func2()


`使用 apply、call、bind`

`使用apply`
var a = {
  name : "Cherry",
  func1: function () {
    console.log(this.name)
  },
  func2: function () {
    setTimeout(  function () {
      this.func1()
    }.apply(a),100);
  }
};
a.func2() 

`使用 call`
var a = {
  name : "Cherry",
  func1: function () {
    console.log(this.name)
  },
  func2: function () {
    setTimeout(  function () {
      this.func1()
    }.call(a),100);
  }
};

a.func2()

`使用bind`
var a = {
  name : "Cherry",
  func1: function () {
    console.log(this.name)
  },
  func2: function () {
    setTimeout(  function () {
      this.func1()
    }.bind(a)(),100);
  }
};

a.func2()
```

`apply 和 call 的区别: 区别只是传入的参数不同。`
```js
/* 
所以 apply 和 call 的区别是: 
call 方法接受的  是若干个参数列表，
apply 接收的是  一个包含多个参数的数组。 
bind()方法创建一个新的函数, 当被调用时，将其this关键字设置为提供的值，在调用新函数时，在任何提供之前提供一个给定的参数序列。
bind 是创建一个新的函数，我们必须要手动去调用
*/
var a ={
  name : "Cherry",
  fn : function (a,b) {
    console.log( a + b)
  }
}

var b = a.fn;
b.bind(a,1,2)()

```

## 闭包是什么?
- 闭包有哪些表现形式?
``` js
  var a = 1;
  function foo(){
    var a = 2;
    function baz(){
        console.log(a);
    }
    bar(baz);
  }

  function bar(fn){
    // 这就是闭包
    fn();
  }
  
  foo();// 输出2，而不是1

  // ------- IIFE(立即执行函数表达式)创建闭包, 保存了全局作用域window和当前函数的作用域 ----------
  var a = 2;
  (function IIFE(){
    // 输出2
    console.log(a);
  })();
```

- 如何解决下面的循环输出问题?
```js
for(var i = 1; i <= 5; i ++){
  setTimeout(function timer(){
    console.log(i)
  }, 0)
}
// 为什么会全部输出6？如何改进，让它输出1，2，3，4，5？
`因为setTimeout为宏任务，由于JS中单线程eventLoop机制，在主线程同步任务执行完后才去执行宏任务，
因此循环结束后setTimeout中的回调才依次执行，但输出i的时候当前作用域没有，往上一级再找，发现了i,
此时循环已经结束，i变成了6。因此会全部输出6。`


// 解决方法
`1、利用IIFE(立即执行函数表达式)当每次for循环时，把此时的i变量传递到定时器中`
for(var i = 1;i <= 5;i++){
  (function(j){
    setTimeout(function timer(){
      console.log(j)
    }, 0)
  })(i)
}

`2、给定时器传入第三个参数, 作为timer函数的第一个函数参数`
// 可选。 传给执行函数的其他参数（IE9 及其更早版本不支持该参数）。
for(var i=1;i<=5;i++){
  setTimeout(function timer(j){
    console.log(j)
  }, 0, i)
}

`3、使用ES6中的let`
for(let i = 1; i <= 5; i++){
  setTimeout(function timer(){
    console.log(i)
  },0)
}
```

## let 和 const 的区别
- var的变量会提升到window，但是let个const不会，let ，const会生成块作用域，同一作用域下let和const不能声明同名变量，而var可以
``` js
// 在全局作用域中，用 let 和 const 声明的全局变量并没有在全局对象中，只是一个块级作用域（Script）中
let a = 1;
const b = 2;
var c = 3;

console.log(window.aa); // undefined
console.log(window.bb); // undefined
console.log(window.c);  // 3


// 怎么获取？在定义变量的块级作用域中就能获取啊，既然不属于顶层对象，那就不加 window（global)。
console.log(a); // 1
console.log(b); // 2

// 暂时性死区 
console.log(a); //Uncaught ReferenceError: Cannot access 'a' before initialization
let a = 1;
```

## 原型链
- 在JavaScript中，每当定义一个函数数据类型(普通函数、类)时候，都会天生自带一个prototype属性，这个属性指向函数的原型对象。
当函数经过new调用时，这个函数就成为了构造函数，
返回一个全新的实例对象，这个实例对象有一个__proto__属性，指向构造函数的原型对象。
```js

function Foo(){}
let a = new Foo()

a.x= 'qq';

Foo.prototype.x=1;
Foo.prototype.y=2;
console.log(a.x)
console.log(a.y)
```

## 继承
- ### JS如何实现继承？

`第一种: 借助call`
``` js
  function Parent1(){
    this.name = 'parent1';
  }
  function Child1(){
    Parent1.call(this);
    this.type = 'child1'
  }
  console.log(new Child1);
// 这样写的时候子类虽然能够拿到父类的属性值，但是问题是父类原型对象中一旦存在方法那么子类无法继承。
// 那么引出下面的方法。
```

`第二种: 借助原型链`
```js
  function Parent2() {
    this.name = 'parent2';
    this.play = [1, 2, 3]
  }
  function Child2() {
    this.type = 'child2';
  }
  Child2.prototype = new Parent2();

  console.log(new Child2());
// 复制代码看似没有问题，父类的方法和属性都能够访问，但实际上有一个潜在的不足。举个例子：
  var s1 = new Child2();
  var s2 = new Child2();
  s1.play.push(4);
  console.log(s1.play, s2.play);

// 明明我只改变了s1的play属性，为什么s2也跟着变了呢？很简单，因为两个实例使用的是同一个原型对象。
```


## typeof 和 instanceof的区别
```js
  typeof 'dd' // "string"
  typeof [1,32,3] // // "object"
  typeof 1 // "number"
  typeof {} // "object"
  typeof null // "object"
  typeof undefined // undefined
  typeof true  // "boolean"
  typeof Symbol // "function"
  typeof Symbol() // "symbol"
```
 
## 介绍一下js的执行上下文？
```
执行上下文的3 种类型；
1.全局执行上下文，浏览器的全局对象就是 window， this 指向这个全局对象；
2.函数执行上下文：存在多个，只有在函数被调用的时候才会被创建，每次调用函数都会创建一个新的执行上下文；
3.eavl 函数 运行在 eval 函数中 的  代码；

```
> 执行栈 https://muyiy.cn/blog/1/1.1.html#%E6%89%A7%E8%A1%8C%E6%A0%88
  执行栈也叫调用栈，具有后进先出的结构， 用于存储在代码执行期间创建的所有执行上下文；
  首页运行 js 代码，会创建一个全局执行的上下文并 push 到当前的执行栈里面。 每次发生函数调用，
  引擎都会为本函数创建一个新的函数执行上下文并 push 到当前指向栈的栈顶。
 


## 介绍一下js变量的存放？
  **首先我们应该知道内存中有栈和堆，那么变量应该存放在哪里呢，堆？栈**？
-  (1)、基本类型 --> 保存在栈内存中，因为这些类型在内存中分别占有固定大小的空间，通过按值来访问。
  基本类型一共有6种：Undefined、Null、Boolean、Number 、String和Symbol;

-  (2)、引用类型 --> 保存在堆内存中，因为这种值的大小不固定，因此不能把它们保存到栈内存中，
  但内存地址大小的固定的，因此保存在堆内存中，在栈内存中存放的只是该对象的访问地址。
  当查询引用类型的变量时， 先从栈中读取内存地址， 然后再通过地址找到堆中的值。对于这种，我们把它叫做按引用访问。
  在计算机的数据结构中，栈比堆的运算速度快，
  
  ``` js
    var a = 20;
    var b = a;
    b = 30; // 这时a的值是20？
    `a、b都是基本类型，它们的值是存储在栈中的，
     a、b分别有各自独立的栈空间，所以修改了b的值以后，a的值并不会发生变化。`
  ```

  ``` js
    var a = { name: '前端开发' }
    var b = a;
    b.name = '进阶'; // 这时a.name的值是 '进阶', 实际指向的是同一个对象.
    `a、b都是引用类型，栈内存中存放地址指向堆内存中的对象，引用类型的复制会为新的变量自动分配一个新的值保存在变量对象中，
     但只是引用类型的一个地址指针而已，实际指向的是同一个对象，所以修改b.name的值后，相应的a.name也就发生了改变。`
  ```

   ``` js
    var a = { name: '前端开发' }
    var b = a;
    a = null; // 这时b的值是多少  { name: '前端开发' }
    `首先要说明的是null是基本类型，a = null之后只是把a存储在栈内存中地址改变成了基本类型null，
     并不会影响堆内存中的对象，所以b的值不受影响。`

  ```

  ```js
    var a = {n: 1};
    var b = a;
    a.x = a = {n: 2}; 
    // Exp1 = Exp2 = Exp3 = Exp4
    // Ref1 = (Ref2 = (Ref3 = Value4))
    // 先从左到右解析各个引用，然后计算最右侧的表达式的值，最后把值从右到左赋给各个引用。

    a.x 	// 这时 a.x 的值是多少   // a {n: 2}
    b.x 	// 这时 b.x 的值是多少   // b {n: 1, x: {n: 2}}
    https://segmentfault.com/a/1190000004224719
    https://segmentfault.com/a/1190000018711603?utm_source=tag-newest
  ```

## 介绍一下内存空间管理?
  **JavaScript的内存生命周期是**
```
  (1)、分配你所需要的内存;
  (2)、使用分配到的内存（读、写）;
  (3)、不需要时将其释放、归还;
  JavaScript有自动垃圾收集机制，最常用的是通过标记清除的算法来找到哪些对象是不再继续使用的，
  使用a = null其实仅仅只是做了一个释放引用的操作，让 a 原本对应的值失去引用，脱离执行环境，
  这个值会在下一次垃圾收集器执行操作时被找到并释放。

```

**内存的回收?**
```
  JavaScript有自动垃圾收集机制，垃圾收集器会每隔一段时间就执行一次释放操作，找出那些不再继续使用的值，然后释放其占用的内存。
  局部变量和全局变量的销毁？
    1.局部变量：局部作用域中，当函数执行完毕，局部变量也就没有存在的必要了，
    因此垃圾收集器很容易做出判断并回收。
    2.全局变量：全局变量什么时候需要自动释放内存空间则很难判断，
    所以在开发中尽量避免使用全局变量。

  以Google的V8引擎为例，V8引擎中所有的JS对象都是通过 堆 来进行内存分配的
    初始分配：当声明变量并赋值时，V8引擎就会在堆内存中分配给这个变量。
    继续申请：当已申请的内存不足以存储这个变量时，V8引擎就会继续申请内存，直到堆的大小达到了V8引擎的内存上限为止。
  
  V8引擎对堆内存中的JS对象进行分代管理
    新生代：存活周期较短的JS对象，如临时变量、字符串等。
    老生代：经过多次垃圾回收仍然存活，存活周期较长的对象，如主控制器、服务器对象等。

```

## 垃圾回收算法；
```
引用计数（现代浏览器不再使用）

引用计数算法定义“内存不再使用”的标准很简单，就是看一个对象是否有指向它的引用。如果没有其他对象指向它了，说明该对象已经不再需要了。
引用计数有一个致命的问题，那就是循环引用； 相互引用依然存在，因此这部分内存不会被回收。所以现代浏览器不再使用这个算法。

标记清除（常用）
标记清除算法将“不再使用的对象”定义为“无法到达的对象”。
```

## 内存泄漏识别方法？

**使用Node提供的 process.memoryUsage 方法。**
```js
  console.log(process.memoryUsage());
  // 输出 
  { 
    rss: 27709440,		// resident set size，所有内存占用，包括指令区和堆栈
    heapTotal: 5685248,   // "堆"占用的内存，包括用到的和没用到的
    heapUsed: 3449392,	// 用到的堆的部分
    external: 8772 		// V8 引擎内部的 C++ 对象占用的内存
  }
```


## 内存空间

- 因为 JavaScript有垃圾自动回收机制，所以对于前端开发人员来说，内存空间并不是一个经 常被提及的概念，很容易被大家忽视。

## 基本数据类型和引用数据类型
- 最新的 ECMAScript标准号定义了 7种数据类型，其中包括**六种基础数据类型**与一种**引用数据类型**（object）
- 基本数据类型包括 

| 类型            | 值                    |                
| -------------- | :------:              | 
| Boolean        | 只有两个值  : true与false |
| Null           | 只有一个值  : null       |
| Undefined      | 只有一个值  : undefined  |
| Number         | 所有的数字               |  
| String         | 所有的字符串              |  
| Symbol         | 符号类型 var sym = Symbol(‘testsymbol’) |

> 函数运行时，会创建一个执行环境，这个执行环境叫作执行上下文( Execution Context)。 在执行上下文中，会创建一个叫作变量对象的特殊对象。基本数据类型往往都纯在变量对象里面

**变量对象也存在于堆内存中，但是由于变量对象有特殊智能，因此在理解时，建议将其与堆内存空间分开**

## WeakMap
ES6 新出的两种数据结构：WeakSet 和 WeakMap，
表示这是弱引用，它们对于值的引用都是不计入垃圾回收机制的。

## 四种常见的js 内存泄露
- 1、意外的全局变量
  > 解决方法：
    在 JavaScript 文件头部加上 'use strict'，使用严格模式避免意外的全局变量，此时上例中的this指向undefined。
    如果必须使用全局变量存储大量数据时，确保用完以后把它设置为 null 或者重新定义。
- 2.被遗忘的计时器或回调函数
- 3.闭包





## 队列(queue)
> 队列是一种先进先出的（FIFO）的数据结构。 正如排队过安检一样，排在队伍前面 的人一定是最先过安检的人 。

![](//app-test.h5.ihaozhuo.com/zgm/images/291597287250_.pic.jpg)



## 栈( stack)、堆 (heap )、队列(queue)。

## 栈( stack)
- 场景1: 栈是一种数据结构，它表达的是数据的一种存取方式，这是一种理论基础。
- 场景2: 栈可用来规定代码的执行顺序，在 JavaScript 中叫作函数调用栈( call stack )，它是根据栈数据结构理论而实现的一种实践。
- 总结为先进后出，后进先出 ( LIFO , Last In, First Out )。 
![](//app-test.h5.ihaozhuo.com/zgm/images/311597287563_.pic_hd.jpg)

## 堆 (heap )
> 堆数据结构通常是一种树状结构。它的存取方式与在书架中取书的方式非常相似。 
> 书虽然整齐地摆放在书架上，但是只要知道 书的名字，在书架中找到它之后就可以很方便地取出，我们甚至不用关心书的存放顺序。

![](//app-test.h5.ihaozhuo.com/zgm/images/301597287457_.pic_hd.jpg)
```js
  var heap = {
    a: 10,
    b: 20,
    c: {
      m: 100,
      n: 110
    }
  }
  // 当我们想要访问 a 时，只需通过 heap.a 来访问即可，而不用关心 a、 b、 c 的具体顺序 。
```

## 队列(queue)
> 队列是一种先进先出的（FIFO）的数据结构。 正如排队过安检一样，排在队伍前面 的人一定是最先过安检的人 。

![](//app-test.h5.ihaozhuo.com/zgm/images/291597287250_.pic.jpg)

# 前端面试复习导图
## this、apply、call、bind


宏任务是浏览器的队列维护，微任务是引擎的队列在维护

node 中间件的 原理是什么？
js的this是动态的， 不像java 那种 this 指向 类自身

