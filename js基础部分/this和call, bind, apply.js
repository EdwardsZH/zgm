// https://juejin.im/post/59bfe84351882531b730bac2
`this 的指向并不是在创建的时候就可以确定的,
在 ES5 中，其实 this 的指向，始终坚持一个
原理：${this - 永远指向最后调用它的那个对象}`

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

`apply 和 call 的区别: 区别只是传入的参数不同。`
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

`函数调用的方法一共有 4 种: `

`
作为一个函数调用:
函数作为方法调用:
使用构造函数调用函数:
作为函数方法调用函数（call、apply）: 
`

