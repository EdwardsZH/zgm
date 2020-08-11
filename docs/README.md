# 资深前端知识体系文档

[h5调用原生方法一览表链接](http://wiki.yjk.cn/pages/viewpage.action?pageId=60686579)

## 安装及使用

### 使用 yarn 安装

- 安装
```
$ yarn add yjk-jssdk@latest -D --registry=http://192.168.1.216:8081/nexus/content/repositories/npm-internal/
```

- 使用
```js
// 依赖原生方法调用
import YjkJSSDK from 'yjk-jssdk';
const config = { 
    debug: false // 是否开启debug模式,默认不开启
}

const yjk = new YjkJSSDK(config);
Vue.prototype.yjk = yjk;
window.yjk = yjk
```

### tools方法使用
```js
import { setDebugger } from 'yjk-jssdk/dist/tools';
setDebugger('v'); //正式环境打开debugger
```

### 代码示例

```js
// sdk方法使用
this.yjk.getCityCode({
    success: (res) =>{
        console.log('成功', res.cityCode)
        this.cityCode = res.cityCode || '000000'
        this.requestDetail()
    }
});

//  jump方法使用
this.yjk.jumper.openGoodsDetail(goodsId);
```

## 目录

文档主要分为下面几个方面:

- ### Tools

    js工具

- ### Native

    js原生交互方法

- ### Jump

    js跳转原生


