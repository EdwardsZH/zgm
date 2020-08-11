// JS如何实现继承？
`第一种: 借助call`
  function Parent1(){
    this.name = 'parent1';
  }
  function Child1(){
    Parent1.call(this);
    this.type = 'child1'
  }
  console.log(new Child1);
`这样写的时候子类虽然能够拿到父类的属性值，
但是问题是父类原型对象中一旦存在方法那么子类无法继承。
那么引出下面的方法。`

`第二种: 借助原型链`
  function Parent2() {
    this.name = 'parent2';
    this.play = [1, 2, 3]
  }
  function Child2() {
    this.type = 'child2';
  }
  Child2.prototype = new Parent2();

  console.log(new Child2());
`复制代码看似没有问题，父类的方法和属性都能够访问，但实际上有一个潜在的不足。举个例子：`
  var s1 = new Child2();
  var s2 = new Child2();
  s1.play.push(4);
  console.log(s1.play, s2.play);

`明明我只改变了s1的play属性，为什么s2也跟着变了呢？很简单，${因为两个实例使用的是同一个原型对象}。`

