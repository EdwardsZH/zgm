// https://www.cnblogs.com/wangfupeng1988/p/3987563.html

`在JavaScript中，每当定义一个函数数据类型(普通函数、类)时候，都会天生自带一个prototype属性，这个属性指向函数的原型对象。
当函数经过new调用时，这个函数就成为了构造函数，
返回一个全新的实例对象，这个实例对象有一个__proto__属性，指向构造函数的原型对象。
`
function Foo(){}
let a = new Foo()

a.x= 'qq';

Foo.prototype.x=1;
Foo.prototype.y=2;
console.log(a.x)
console.log(a.y)


