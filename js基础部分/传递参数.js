// ECMAScript 中所有函数的参数都是按值传递的。也就是说，把函数外部的值复制给函数内部的参数，就和把值从一个变量复制到另一个变量一样。基本类型值的传递如同基本类型变量的复制一样，而 引用类型值的传递，则如同引用类型变量的复制一样

function setName(obj) {
    obj.name = "Nicholas";
}
var person = new Object();
setName(person);
alert(person.name);    //"Nicholas"


function setName(obj) { 
    obj.name = "Nicholas"; 
    obj = new Object(); 
    obj.name = "Greg";
}
var person = new Object();
setName(person);
alert(person.name);    //"Nicholas"

// 这说明 即使在函数内部修改了参数的值，但原始的引用仍然保持未变。实际上，当在函数内部重写 obj 时，这 个变量引用的就是一个局部对象了。而这个局部对象会在函数执行完毕后立即被销毁。

var theThing = null;
var replaceThing = function () {
  var originalThing = theThing;
  var unused = function () {
    if (originalThing) // 对于 'originalThing'的引用
      console.log("hi");
  };
  theThing = {
    longStr: new Array(1000000).join('*'),
    someMethod: function () {
      console.log("message");
    }
  };
};
setInterval(replaceThing, 1000);