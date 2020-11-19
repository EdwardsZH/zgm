(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{375:function(a,t,n){"use strict";n.r(t);var e=n(42),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"资深前端知识体系文档"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#资深前端知识体系文档"}},[a._v("#")]),a._v(" 资深前端知识体系文档")]),a._v(" "),n("h2",{attrs:{id:"学而不思则罔-思而不学则殆"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#学而不思则罔-思而不学则殆"}},[a._v("#")]),a._v(" "),n("strong",[a._v("学而不思则罔,思而不学则殆!")])]),a._v(" "),n("h2",{attrs:{id:""}},[n("a",{staticClass:"header-anchor",attrs:{href:"#"}},[a._v("#")])]),a._v(" "),n("p",[a._v("Q:  小程序的技术架构和方案、小程序的出现主要解决什么问题？")]),a._v(" "),n("p",[a._v("A:  包含小程序容器、渲染引擎和 JavaScript 引擎。\nUI 层运行在 WebView 中，而逻辑层运行在独立的 JS 引擎中。\n解决降低获客成本、打通跨端；")]),a._v(" "),n("h2",{attrs:{id:"-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#-2"}},[a._v("#")])]),a._v(" "),n("p",[a._v("Q:  view 层、js 层分别在哪里、怎么通信 ?\nA:  业务逻辑的 JS 在独立的 JavaScript 引擎（ServiceWorker）中，\n每个页面的 view 和 css 运行在各自独立的 webview 里面，\n页面之间是通过函数 navigateTo 进行页面的切换；\nJS 层和 view 层通过消息服务 MessageChannel 进行通信")]),a._v(" "),n("h2",{attrs:{id:"-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#-3"}},[a._v("#")])]),a._v(" "),n("p",[a._v("Q:  Taro 和其他小程序框架的横向对比，如何选型，Taro、uni-app、kbone、WePY、mpvue，Taro 的一些好用的点和不好用的点，聊下想法\nA:  一些特性不支持，不过随着 Taro 的升级也在解决；\nTaro 本身的限制；对 React 的语法支持有限，比如不能使用 Array#map 之外的方法操作 JSX 数组")]),a._v(" "),n("h2",{attrs:{id:"-4"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#-4"}},[a._v("#")])]),a._v(" "),n("p",[a._v("Q:  React 代码转成小程序代码的原理\nA:  编译器修改和运行时修改，同时配合 babel 做编译、转译")]),a._v(" "),n("h2",{attrs:{id:"-5"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#-5"}},[a._v("#")])]),a._v(" "),n("p",[a._v("Q:  Babel 的转换过程，比如把 JSX 的 map 转成 wxml\nA:  oddNumbers.map(number => "),n("Text",{attrs:{onClick:"{this.handleClick}"}},[a._v("{number}")]),a._v(")生成的数据结构是\n{\ntype: 'element',\ntagName: 'text',\nattributes: [\n{ bindtap: 'handleClick' },\n{ 'wx:for': '"+a._s(a.oddNumbers)+"' },\n{ 'wx:for-item': 'number' }\n],\nchildren: [\n{ type: 'text', content: '"+a._s(a.number)+"' }\n]\n}再根据这个结构转成 wxml 就好了")]),a._v(" "),n("h2",{attrs:{id:"-6"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#-6"}},[a._v("#")])]),a._v(" "),n("p",[a._v("Q:  真实数据和缓存的竞争如何处理，第一次如何处理，第二次有更新如何处理\nA:")]),a._v(" "),n("h2",{attrs:{id:"-7"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#-7"}},[a._v("#")])]),a._v(" "),n("p",[a._v("Q:  npm 版本号 ^ ~ 的区别\nA:  脱字符(^)来限定所安装模块的主版本号")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("^1.2.1  代表的更新版本范围为 >=1.2.1 && < 2.0.0，即 1.x\n\n^0.2.1  代表的更新版本范围为 >=0.2.1 && < 0.3.0，即 0.2.x\n\n^0.0.2  代表的更新版本范围为 0.0.2（相当于锁定为了0.0.2版本），即 0.0.2\n\n波浪号(~)是限定模块的次要版本\n\n~1.5.1允许安装版本号大于1.5.1但小于1.6.0版本的模块，即 1.5.x\n\n~0.5.1允许安装版本号为0.6.0，即0.5.x\n")])])]),n("h2",{attrs:{id:"-8"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#-8"}},[a._v("#")])]),a._v(" "),n("p",[a._v("Q:  怎么发 beta 版本\nA:  npm publish --tag beta")]),a._v(" "),n("h2",{attrs:{id:"-9"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#-9"}},[a._v("#")])]),a._v(" "),n("p",[a._v("Q: 埋点数据上报的方案\nA: ajax 请求，img，script 标签上报；")]),a._v(" "),n("h2",{attrs:{id:"-10"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#-10"}},[a._v("#")])]),a._v(" "),n("p",[a._v("Q: 图片方案的原理和优势\nA: img 天然支持跨域，跨域友好， 不占用 ajax 请求， 执行无阻塞；")]),a._v(" "),n("h2",{attrs:{id:"-11"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#-11"}},[a._v("#")])]),a._v(" "),n("p",[a._v("Q: 考虑工作机会 的优先级（公司，团队，技术，薪资）")]),a._v(" "),n("p",[a._v("Q: 面对压力的一般怎么应对，之前的工作绩效，团队的定位和排名")]),a._v(" "),n("h2",{attrs:{id:"必会题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#必会题"}},[a._v("#")]),a._v(" 必会题")]),a._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[a._v("1.  闭包是指有权访问另外一个函数作用域中的变量的函数\n\n2.  作用域\n\n3.  原型链\n\n4.  变量提升\n\n5.  函数参数值传递\n\n6.  this 指向问题\n\n7.  函数提升以及优先级问题\n\n8.  new 操作符做了什么？\n\n9.  用 ES5 实现一个继承（有哪些方式）\n\n10.  0.2+0.1不等于0.3问题（浮点数精度）\n\n11. 堆、栈、队列是什么？都有什么区别？有什么应用？\n：栈的结构就是后进先出**（LIFO）**，\n：堆数据结构是一种树状结构。它的存取数据的方式与书架和书非常相似。我们只需要知道书的名字就可以直接取出书了，并不需要把上面的书取出来。JSON格式的数据中，我们存储的key-value可以是无序的，因为顺序的不同并不影响我们的使用，我们只需要关心书的名字\n：队列：\n\n12. 深拷贝、浅拷贝问题（immutable是怎么实现的？）\n\n13. typed array 问题\n\n14. es6 箭头函数问题\n\n15. let 会提升吗？声明、初始化、赋值等概念。什么是暂时性死区？\n\n16. 什么是 iterator？for of 用过吗？\n\n17. call、apply、bind 区别，bind 怎么实现的？\n\n18. caller、callee 了解吗？什么时候会用到？建议用吗？\n\n19. es6 其他特性用过吗？（Class、Map、Set、Decorator 等分别考察）\n\n20. promise 实现原理（怎么实现取消？怎么实现 promise all、race 等？）\n\n21. async await 知识点（await 的作用，async 返回的是什么）\n\n22. generator 又是什么？\n\n23. v8 线程模型、event loop（async、promise、nextTick、setTimeout、setImmediate 经典问题变着花样考）\n\n24. 进程和线程是什么？有什么区别？\n\n25. v8 垃圾回收机制\n\n26. 输入 URL，浏览器的执行过程又是怎么样的？（浏览器解析方式、顺序，async、defer等）\n\n27. 了解前端模块化吗？有几种规范？（commonjs 和 es module 都是怎么实现的？有啥区别？）\n\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);