# Node

## 说一下时间循环机制(node, 浏览器)
### **1. 为什么会有 Event Loop**
- js的任务分为`同步`和`异步`,他们的处理方式各自相同,同步任务是直接放在主线程上一次执行.
-  
-  
  > 

## node 性能如何进行监控及优化?
### **1. 监控分类


## node 性能如何进行跨域通信?
### **1. 监控分类

## node 不支持的 es6 语法?
### **通过攻击检查不支持的 es6 语法, 安装 es-checker 检查
- 解决办法是通过 bable 将 es6 代码装换为 node 支持的语法

## Redis 为什么这么高效，使用的场景是什么？
```
1、完全基于内存，大多数请求都是内存操作，非常快速； 
2、数据结构简单，操作简单； 
3、采用单线程，避免了不必要的上下文切换和竞争条件，不存在多进程或者多线程的切换，不用考虑锁带来的性能消耗； 
4、使用多路 I/O复用模型，非阻塞 IO;
```

## 用过Kafka 的话说下 Kafka优缺点有哪些？
```
•Kafka 是一个高吞吐量的消息队列。基本的组件有生产者，消费者，node 节点，生产者负责生产消息，
将消息发送到指定的 topic 或者 partition 当中。

​•每个 partition 可以有多个分区副本，并且存放在不同的 broker 节点上，保证数据的安全。
partiton 的底层是根据 segment 段存放的一系列日志文件，文件里面存放的具体的消息内容，每条消息都有一个唯一的 offset 偏移量，
并且是按照磁盘顺序存放的。由于磁盘是顺序读写，所以 kafka 可以有很高的吞吐量。磁盘的顺序读写比随机读写的性能高很多。

•每个消费者都属于一个消费者组，可以消费指定 topic 下的数据。
```