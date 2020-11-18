# 三种基础数据结构

## 栈( stack)、堆 (heap )、队列(queue)。

### 栈( stack)
- 场景1: 栈是一种数据结构，它表达的是数据的一种存取方式，这是一种理论基础。
- 场景2: 栈可用来规定代码的执行顺序，在 JavaScript 中叫作函数调用栈( call stack )，它是根据栈数据结构理论而实现的一种实践。
- 总结为先进后出，后进先出 ( LIFO , Last In, First Out )。 
![](//app-test.h5.ihaozhuo.com/zgm/images/311597287563_.pic_hd.jpg)

### 堆 (heap )
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

### 队列(queue)
> 队列是一种先进先出的（FIFO）的数据结构。 正如排队过安检一样，排在队伍前面 的人一定是最先过安检的人 。

![](//app-test.h5.ihaozhuo.com/zgm/images/291597287250_.pic.jpg)

