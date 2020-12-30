# 工程化

## webpack做过的那些优化, 开发效率, 和打包策略方面的
### **1. 优化 webpack的构建速度**
- 使用高版本的 webpack(webpack 4)
- 开启多线程/多实例构建: HapppyPack, thread-loader;(https://www.webpackjs.com/loaders/thread-loader/)
- 缩小打包作用域:
  > exclude/include(确定 loader 规则范围)
  resolve.modules 指明第三方模块的绝对路径,(减少不必要的查找)
  noParse对完全不需要解析的库进行忽略
  合理使用 alias

- 使用缓存提升二次构建速度
  > babel-loader 开启缓存
  使用 cache-laoder

- DLL 
 > 使用 dllPlugin进行分包,使用 dllReferencePlugin(牵引链接)对 manifest.json 引用,让一些基本不动的代码先打包成静态资源, 避免反复编译浪费时间;

- 优化代码打包 体积
  >压缩代码
  提取页面公共资源
  1.使用 html-webpack-externals-plugin, 将基础包通过 cdn 引入, 不打包 bundle 中;
  2.基础包分离: 将一些基础库放在 cdn,   比如 vue 和 vue-route 不打包;
  3.图片压缩  配置 iamge-webpack-loader

## 前端框架的设计模式的含义以及原理(MVVM, MVC 和 MVP)

## 如何实现 webpack 的持久化缓存
- 服务端设置 HTTP 缓存头(cache-control)
- 打包依赖和运行时到不同的 chunk,
- 延时加载 使用 import()方式,按需加载
- 保障 hash 值稳定:编译和文件内容的更改不要影响到其他文件的 hash 计算,可以使用 hashedModuleldsPlugin基于文件路径解决

## 开发环境的热更新优化
  **其实就是优化开发环境的打包时间**
- 1. 使用工具分析 speed-measure-webpack-plugin 可以测量各个插件和 loader 的使用时间
- 2. 关闭文件名的 hash 功能
- 3. 关闭压缩功能
- 4. 如果必须使用 source-map, 改选择 eval 或者 eval-cheap-source-map 速度更快
- 5. 使用多线程
- 6. 开始缓存 : 如 cache-loader and-source-webpack-plugin等

## JS 压缩,合并,打包的实现原理
**压缩原理**
- 1. 去掉注释
- 2. 去掉换行符,空格
- 3. 规范变量名,函数名, 压缩变量名 的长度, 减少代码文件体积

**打包原理**
> 模块化打包,一般会有一个入口文件,从入口文件代码中根据出现的 import 或者 require 解析推断出这个文件所依赖的资源模块,然后去分包解析每个依赖,最终形成整个项目的所有用到文件
> 自己的依赖关系树,


## import {button} from 'antd', 打包的时候只打包 button, 分模块加载, 是怎么做到的 
**实现原理** 使用babel-plugin-import是一款babel插件,在编译过程中将import的写法自动转换成按需引入的方式.
- 1. 安装插件
- 2. 通过.babelrc配置文件或者 babel-loader 模块编程引入
```js
{
  'plugin':[
    ['import', {
      "libraryName": "antd",
      "libraryDirectory": "es",
      "style": "css" // `style: true` 会加载 less 文件
    }]
  ]
}

// 相当于
import button from 'antd/es/button'
import 'antd/es/button/style/css'
```
