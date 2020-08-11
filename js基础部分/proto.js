// ----------------------- 继承的几种方式 -----------------------------

function Animal() {
    this.value = 'animal';
}

Animal.prototype.run = function() {
    return this.value + ' is runing';
}

function Cat() {}

// 这里是关键，创建 Animal 的实例，并将该实例赋值给 Cat.prototype
// 相当于 Cat.prototype.__proto__ = Animal.prototype
Cat.prototype = new Animal(); 

var cat = new Cat();
cat.value = 'cat'; // 创建 instance 的自身属性 value

console.log(cat.run(), cat.value, cat.__proto__); // cat is runing