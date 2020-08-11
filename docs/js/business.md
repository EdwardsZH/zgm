# 业务功能

## 获取验签的方法 
### getAppSignString 
返回的response是键值对拼接字符串,对应以前的getAppSign

### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| params      |     需要传给客户端加密的键值对组合   |  Object    |    否    |   {}    |    -   |
| success     |            成功之后的回调         |  function  |    否    |   -    |    -   |
| fail        |            失败之后的回调         |  function  |    否    |   -    |    -   |
| complete    |            完成之后的回调         |  function  |    否    |   -    |    -   |

### success 返回值
| 名称 | 描述  | 类型  | 必须  |
| ---- | :---: | :---: | :---: |
|  signString   |   返回不包括原参数值的键值对拼接字符串    |    String   |   -   |

### 代码示例

```js
//sign=%@&appId=%@&token=%@&appVersion=%@ （sign是params加上默认参数验签得到是sign）
this.yjk.getAppSignString({
  params:{
    test: 111,
    array: [1,2,3,4],
  },
  success: (res) => {
    console.log('success',res.signString)
  },
  fail: (res) =>{
    console.log('失败', res)
  }
})
``` 


## 获取登录状态，注意假如未登录会强制进入登录界面
### getLoginState


### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| success     |            成功之后的回调         |  function  |    否    |   -    |    -   |
| fail        |            失败之后的回调         |  function  |    否    |   -    |    -   |

### success 返回值
| 名称 | 描述  | 类型  | 必须  |
| ---- | :---: | :---: | :---: |
|  loginState   |   当前用户是否登录    |    Bool   |   -   |

### 代码示例

```js
this.yjk.getLoginState({
  success: (res) => {
    console.log('success',res.loginState)
  },
  fail: (res) =>{
    console.log('失败', res)
  }
})
``` 


## 获取客户端已登录的用户id
### getUserId


### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| success     |            成功之后的回调         |  function  |    否    |   -    |    -   |
| fail        |            失败之后的回调         |  function  |    否    |   -    |    -   |

### success 返回值
| 名称 | 描述  | 类型  | 必须  |
| ---- | :---: | :---: | :---: |
|  userId   |   已登录的用户id    |    String   |   -   |

### 代码示例

```js
this.yjk.getUserId({
  success: (res) => {
    console.log('success',res.userId)
  },
  fail: (res) =>{
    console.log('失败', res)
  }
})
``` 

## 调用显示客户端预约时间选择弹窗 
### chooseBespeakTime
对应以前的setWebViewBackType

### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| dateList     |           可预约时间十足        |  Array['yyyy-MM-dd']  |    是    |   -    |    -   |
| success     |            成功之后的回调         |  function  |    否    |   -    |    -   |
| fail        |            失败之后的回调         |  function  |    否    |   -    |    -   |

### success 返回值
| 名称 | 描述  | 类型  | 必须  |
| ---- | :---: | :---: | :---: |
|  chooseTime   |   用户选择的时间    |    String   |   -   |

### 代码示例

```js
this.yjk.chooseBespeakTime({
  dateList: ['2019-12-09','2019-12-16','2019-12-23'], //就要这个格式
  success: (res) => {
    console.log('success',res.chooseTime) //2020-03-10 14:00
  },
  fail: (res) =>{
    console.log('失败', res)
  }
})
``` 


## 调起客户端支付 
### payOrder
-此接口需要生成订单拿到主订单号才可以调用
对应以前的callNativePayOrder

### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| orderMainNo  |           支付主订单号          |  String  |    是    |   -    |    -   |
| comeFrom     |           来源页面           |  String    |    否    |   -    |    XX落地页   |
| resultDealType|      h5处理支付完成逻辑，原生不处理  |  String    |    否    |   -    |    h5   |
| success     |            成功之后的回调         |  function  |    否    |   -    |    -   |
| fail        |            失败之后的回调         |  function  |    否    |   -    |    -   |

### success 返回值
| 名称 | 描述  | 类型  | 必须  |
| ---- | :---: | :---: | :---: |
|  paySuccess   |   true    |    Bool   |   -   |

### 代码示例

```js
this.yjk.payOrder({
  orderMainNo: '401579155236086160', 
  success: (res) => {
    console.log('success',res.paySuccess) 
  },
  fail: (res) =>{
    console.log('支付失败', res)
  }
})
``` 

## 通知客户端刷新 
### noticeNative

对应以前的sendNoticeToAPP
- 原 type=1 对应：page：MyCircuseeVC action：stateChanged
- 原 type=2 对应：page：MyCollectionListVC action：stateChanged
- 原 type=4 对应：page：OrderDetailVC action：refresh


### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| page    |           要刷新哪个页面           |  String  |    是    |   -    |    -   |
| action     |           通知动作             |  String    |   是    |   -    |    refresh,stateChanged   |
| success     |            成功之后的回调         |  function  |    否    |   -    |    -   |
| fail        |            失败之后的回调         |  function  |    否    |   -    |    -   |

### success 返回值
| 名称 | 描述  | 类型  | 必须  |
| ---- | :---: | :---: | :---: |
|  -   |   -    |    -   |   -   |

### 代码示例

```js
this.yjk.noticeNative({
  page: 'XXXX',
  action: 'refresh', 
  success: (res) => {
    console.log('success') 
  },
  fail: (res) =>{
    console.log('支付失败', res)
  }
})
``` 
