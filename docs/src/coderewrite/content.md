# 各种手写

## 简单版双向数据绑定
``` html
<div id="app"> 
  <input type="text" id="txt">
  <p id="show-txt"></p>
</div>

<!-- 实现简单的数据绑定 -->
<script>
  var obj = {}
  Object.defineProperty(obj, 'txt', {
    get: function() {
      return obj;
    },
    set: function(newValue) {
      document.getElementById('txt').value = newValue;
      document.getElementById('show-txt').innerHTML = newValue;
    }
  })
  document.addEventListener('keyup', function(e) {
    obj.txt = e.target.value;
  })
</script>
```

## 实现链式调用
**链式调用的核心在于调用完方法将自身实例返回**
- 1
``` js
function Class(){
  console.log('初始化')
}

Class.prototype.method = function(params){
  console.log(params);
  return this
}

var c = new Class()
c.method(11).method(22).method(33).method(4)
```
- 2
``` js
let obj= {
  a: function(a) {
    console.log(a);
    return this;
  },
  b: function(b) {
    console.log(b);
    return this;
  }
}

obj.a().b()
```

- 3
```js
Number.prototype.add = function(){
  let _that = this;
  _that = [...arguments].reduce((prve, cur) => prve + cur, _that);

  return _that;
}

Number.prototype.minus = function(){
  let _that = this;
  _that = [...arguments].reduce((prve, cur) => prve - cur, _that);
  
  return _that;
}

Number.prototype.mul = function(){
  let _that = this;
  _that = [...arguments].reduce((prve, cur) => prve * cur, _that);
  
  return _that;
}

Number.prototype.devide = function(){
  let _that = this;
  _that = [...arguments].reduce((prve, cur) => prve / cur, _that);
  
  return _that;
}

var num = new Number()
var newNumber = num.add(1,2,34).minus(11,4324,42).mul(3,3).devide(2,3)

```
## JS数组reduce()方法详解及高级技巧

> reduce()方法可以搞定的东西，for循环，或者forEach方法有时候也可以搞定，那为啥要用reduce()？这个问题，之前我也想过，要说原因还真找不到，唯一能找到的是：通往成功的道路有很多，但是总有一条路是最捷径的，亦或许reduce()逼格更高...
- https://www.jianshu.com/p/e375ba1cfc47
- 1、语法
```js
arr.reduce(callback,[initialValue]);

callback （执行数组中每个值的函数，包含四个参数）

  1、previousValue （上一次调用回调返回的值，或者是提供的初始值（initialValue））
  2、currentValue （数组中当前被处理的元素）
  3、index （当前元素在数组中的索引）
  4、array （调用 reduce 的数组）

initialValue （作为第一次调用 callback 的第一个参数。）
```

- 2、实例解析 initialValue 参数
  
`结论：如果没有提供initialValue，reduce 会从索引1的地方开始执行 callback 方法，跳过第一个索引。如果提供initialValue，从索引0开始。`
```js
var arr = [1, 2, 3, 4];
var sum = arr.reduce(function(prev, cur, index, arr) {
  console.log(prev, cur, index);
  return prev + cur;
})
console.log(arr, sum);
```

- 3、 reduce的用法

**当然最简单的就是我们常用的数组求和，求乘积了。**
```js
var  arr = [1, 2, 3, 4];
var sum = arr.reduce((x,y)=>x+y)
var mul = arr.reduce((x,y)=>x*y)

console.log( sum ); //求和，10
console.log( mul ); //求乘积，24
```
- 4、reduce的高级用法
  
**1.计算数组中每个元素出现的次数**
```js
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

let nameNum = names.reduce((pre,cur)=>{
  if(cur in pre){
    pre[cur]++
  }else{
    pre[cur] = 1 
  }
  return pre
},{})
console.log(nameNum); //{Alice: 2, Bob: 1, Tiff: 1, Bruce: 1}
```

**2.数组去重**
```js
let arr = [1,2,3,4,4,1]
let newArr = arr.reduce((pre,cur)=>{
  if(!pre.includes(cur)){
    return pre.concat(cur)
  }else{
    return pre
  }
},[])
console.log(newArr);// [1, 2, 3, 4]
```

**3.将二维数组转化为一维**
```js
let arr = [[0, 1], [2, 3], [4, 5]]
let newArr = arr.reduce((pre,cur)=>{
  return pre.concat(cur)
},[])
console.log(newArr); // [0, 1, 2, 3, 4, 5]
```

**4.将二维数组转化为一维**
```js
let arr = [[0, 1], [2, 3], [4, 5]]
let newArr = arr.reduce((pre,cur)=>{
  return pre.concat(cur)
},[])
console.log(newArr); // [0, 1, 2, 3, 4, 5]
```