# 基础功能

## 外部调用app统一方法
### callMethod(method, options)


### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| method     |     调用方法名                    |  String  |    是    |   -    |    -   |
| options     |     调用方法对应的参数             |  Object  |    是    |   -    |    -   |

options字段入参：
| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| success     |            成功之后的回调         |  function  |    否    |   -    |    -   |
| fail        |            失败之后的回调         |  function  |    否    |   -    |    -   |
| complete    |            完成之后的回调         |  function  |    否    |   -    |    -   |
| 其他        |            其他每个方法不同的参数   |  Any       |    否    |   -    |    -   |
### success 返回值

| 名称 | 描述  | 类型  | 必须  |
| ---- | :---: | :---: | :---: |
|  -    |   每个方法不同返回值    |    Any   |   -   |

### 代码示例

```js
callCommonMethod() {
  this.yjk.callMethod('getUserAuth',{
    sourceType: 3,
    success: (res) =>{
      console.log('成功', res);
    },
    fail: (res) =>{
      this.toast(res);
      console.log('失败', res)
    },
    complete: (res) =>{
      this.toast(res);
      console.log('完成', res)
    },
  });
},
``` 


## 选择收货地址
### chooseAddress 



### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| success     |            成功之后的回调         |  function  |    否    |   -    |    -   |
| fail        |            失败之后的回调         |  function  |    否    |   -    |    -   |
| complete    |            完成之后的回调         |  function  |    否    |   -    |    -   |

### success 返回值

| 名称 | 描述  | 类型  | 必须  |
| ---- | :---: | :---: | :---: |
|  -    |   包括所需字段的地址info    |    Object   |   -   |

### 代码示例

```js
//获取收货地址
getAddress() {
  this.yjk.chooseAddress({
    success: (res) =>{
      console.log('成功', res)
    },
    fail: (res) =>{
      console.log('失败', res)
    },
    complete: (res) =>{
      console.log('完成', res)
    },
  });
}
``` 


## 获取用户信息 
### getUserInfo 


### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| success     |            成功之后的回调         |  function  |    否    |   -    |    -   |
| fail        |            失败之后的回调         |  function  |    否    |   -    |    -   |
| complete    |            完成之后的回调         |  function  |    否    |   -    |    -   |

### success 返回值

| 名称 | 描述  | 类型  | 必须  |
| ---- | :---: | :---: | :---: |
|  userinfo    |   包括所需字段的userinfo    |    Object   |   -   |

### 代码示例

```js
//获取用户信息
getUserInfo() {
  this.yjk.getUserInfo({
    success: (res) =>{
      this.toast(res);
      console.log('成功', res);
    },
    fail: (res) =>{
      this.toast(res);
      console.log('失败', res)
    },
    complete: (res) =>{
      this.toast(res);
      console.log('完成', res)
    },
  });
},
``` 

## 获取用户授权 
### getUserAuth 


### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| sourceType     |         请求授权的type         |  Number  |    是    |   -    |    -   |
| success     |            成功之后的回调         |  function  |    否    |   -    |    -   |
| fail        |            失败之后的回调         |  function  |    否    |   -    |    -   |
| complete    |            完成之后的回调         |  function  |    否    |   -    |    -   |

### success 返回值

| 名称 | 描述  | 类型  | 必须  |
| ---- | :---: | :---: | :---: |
|  -    |   -   |    -   |   -   |

### 代码示例

```js
//获取用户授权
this.yjk.callMethod('getUserAuth',{
  sourceType: 3,
  success: (res) =>{
    console.log('成功', res);
  },
  fail: (res) =>{
    this.toast(res);
    console.log('失败', res)
  },
  complete: (res) =>{
    this.toast(res);
    console.log('完成', res)
  },
});
``` 

## 跳转微信小程序, 可携带参数
### jumpWXMiniProgram 


### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| userName     |         小程序原始ID            |  String  |    是    |   -    |    -   |
| path         |         小程序落地页 页面路径?相关参数 |  String  |    是    |   -    |    -   |
| success     |            成功之后的回调         |  function  |    否    |   -    |    -   |
| fail        |            失败之后的回调         |  function  |    否    |   -    |    -   |
| complete    |            完成之后的回调         |  function  |    否    |   -    |    -   |

### success 返回值

| 名称 | 描述  | 类型  | 必须  |
| ---- | :---: | :---: | :---: |
|  -    |   -   |    -   |   -   |

### 代码示例

```js
this.yjk.jumpWXMiniProgram({
  userName: 'gh_9cb297ac60f5',  // 小程序原始ID
  path: '/pages/goods-detail/goods-detail?goodsId=1551336093735&goodsName=入职升级女性专属',// 小程序落地页面路径?相关参数
  success: (res) =>{
    console.log('成功', res)
  },
  fail: (res) =>{
    console.log('失败', res)
  },
  complete: (res) =>{
    console.log('完成', res)
  },
});
``` 


## 微信一次性订阅消息
### sendWXSubscribe 


### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| scene     |        订阅类型 1、萌主妈咪订阅消息           |  Number  |    是    |   -    |    -   |
| success     |            成功之后的回调         |  function  |    否    |   -    |    -   |
| fail        |            失败之后的回调         |  function  |    否    |   -    |    -   |
| complete    |            完成之后的回调         |  function  |    否    |   -    |    -   |

### success 返回值

| 名称 | 描述  | 类型  | 必须  |
| ---- | :---: | :---: | :---: |
|  -    |   -   |    -   |   -   |

### 代码示例

```js
this.yjk.sendWXSubscribe({
  scene: 1,  // 场景值(number) 1、萌主妈咪订阅消息
  success: (res) =>{
    console.log('成功', res)
  },
  fail: (res) =>{
    console.log('失败', res)
  },
  complete: (res) =>{
    console.log('完成', res)
  },
});
``` 

## 获取微信授权
对应以前的`toEmpower`
### getWeixinAuth 


### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| success     |            成功之后的回调         |  function  |    否    |   -    |    -   |
| fail        |            失败之后的回调         |  function  |    否    |   -    |    -   |
| complete    |            完成之后的回调         |  function  |    否    |   -    |    -   |

### success 返回值

| 名称 | 描述  | 类型  | 必须  |
| ---- | :---: | :---: | :---: |
|  -    |   微信那边拿到的userinfo   |    Object   |   -   |

### 代码示例

```js
this.yjk.getWeixinAuth({
  success: (res) =>{
    console.log('成功', res);
  },
  fail: (res) =>{
    this.toast(res);
    console.log('失败', res)
  },
  complete: (res) =>{
    this.toast(res);
    console.log('完成', res)
  },
});
``` 