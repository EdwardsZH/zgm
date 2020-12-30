# 资深前端知识体系文档

## **学而不思则罔,思而不学则殆!**

##
Q:  小程序的技术架构和方案、小程序的出现主要解决什么问题？

A:  包含小程序容器、渲染引擎和 JavaScript 引擎。
    UI 层运行在 WebView 中，而逻辑层运行在独立的 JS 引擎中。
    解决降低获客成本、打通跨端；

##      
Q:  view 层、js 层分别在哪里、怎么通信 ?
A:  业务逻辑的 JS 在独立的 JavaScript 引擎（ServiceWorker）中，
    每个页面的 view 和 css 运行在各自独立的 webview 里面，
    页面之间是通过函数 navigateTo 进行页面的切换；
    JS 层和 view 层通过消息服务 MessageChannel 进行通信
    
##  
Q:  Taro 和其他小程序框架的横向对比，如何选型，Taro、uni-app、kbone、WePY、mpvue，Taro 的一些好用的点和不好用的点，聊下想法
A:  一些特性不支持，不过随着 Taro 的升级也在解决；
    Taro 本身的限制；对 React 的语法支持有限，比如不能使用 Array#map 之外的方法操作 JSX 数组

##  
Q:  React 代码转成小程序代码的原理
A:  编译器修改和运行时修改，同时配合 babel 做编译、转译

##  
Q:  Babel 的转换过程，比如把 JSX 的 map 转成 wxml
A:  oddNumbers.map(number => <Text onClick={this.handleClick}>{number}</Text>)生成的数据结构是
    {
        type: 'element',
        tagName: 'text',
        attributes: [
            { bindtap: 'handleClick' },
            { 'wx:for': '{{oddNumbers}}' },
            { 'wx:for-item': 'number' }
        ],
        children: [
            { type: 'text', content: '{{number}}' }
        ]
    }再根据这个结构转成 wxml 就好了

##  
Q:  真实数据和缓存的竞争如何处理，第一次如何处理，第二次有更新如何处理
A: 

##  
Q:  npm 版本号 ^ ~ 的区别
A:  脱字符(^)来限定所安装模块的主版本号

    ^1.2.1  代表的更新版本范围为 >=1.2.1 && < 2.0.0，即 1.x

    ^0.2.1  代表的更新版本范围为 >=0.2.1 && < 0.3.0，即 0.2.x

    ^0.0.2  代表的更新版本范围为 0.0.2（相当于锁定为了0.0.2版本），即 0.0.2

    波浪号(~)是限定模块的次要版本

    ~1.5.1允许安装版本号大于1.5.1但小于1.6.0版本的模块，即 1.5.x

    ~0.5.1允许安装版本号为0.6.0，即0.5.x

##  
Q:  怎么发 beta 版本
A:  npm publish --tag beta

##  
Q: 埋点数据上报的方案
A: ajax 请求，img，script 标签上报；

##  
Q: 图片方案的原理和优势
A: img 天然支持跨域，跨域友好， 不占用 ajax 请求， 执行无阻塞；

##  
Q: 考虑工作机会 的优先级（公司，团队，技术，薪资）

Q: 面对压力的一般怎么应对，之前的工作绩效，团队的定位和排名


## 必会题
``` js
1.  闭包是指有权访问另外一个函数作用域中的变量的函数

2.  作用域

3.  原型链

4.  变量提升

5.  函数参数值传递

6.  this 指向问题

7.  函数提升以及优先级问题

8.  new 操作符做了什么？

9.  用 ES5 实现一个继承（有哪些方式）

10.  0.2+0.1不等于0.3问题（浮点数精度）

11. 堆、栈、队列是什么？都有什么区别？有什么应用？
：栈的结构就是后进先出**（LIFO）**，
：堆数据结构是一种树状结构。它的存取数据的方式与书架和书非常相似。我们只需要知道书的名字就可以直接取出书了，并不需要把上面的书取出来。JSON格式的数据中，我们存储的key-value可以是无序的，因为顺序的不同并不影响我们的使用，我们只需要关心书的名字
：队列：

12. 深拷贝、浅拷贝问题（immutable是怎么实现的？）

13. typed array 问题

14. es6 箭头函数问题

15. let 会提升吗？声明、初始化、赋值等概念。什么是暂时性死区？

16. 什么是 iterator？for of 用过吗？

17. call、apply、bind 区别，bind 怎么实现的？

18. caller、callee 了解吗？什么时候会用到？建议用吗？

19. es6 其他特性用过吗？（Class、Map、Set、Decorator 等分别考察）

20. promise 实现原理（怎么实现取消？怎么实现 promise all、race 等？）

21. async await 知识点（await 的作用，async 返回的是什么）

22. generator 又是什么？

23. v8 线程模型、event loop（async、promise、nextTick、setTimeout、setImmediate 经典问题变着花样考）

24. 进程和线程是什么？有什么区别？

25. v8 垃圾回收机制

26. 输入 URL，浏览器的执行过程又是怎么样的？（浏览器解析方式、顺序，async、defer等）

27. 了解前端模块化吗？有几种规范？（commonjs 和 es module 都是怎么实现的？有啥区别？）

// ## 用相对路径啊，比如当前文档是***.md 静态文件 在上一层的static/images 文件夹中， 那么在****.md 写入 ![An image](../static/images/baner.png)，也可用网络图片哦，括号内 换成你的网络图片
```