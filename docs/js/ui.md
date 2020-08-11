# 界面相关功能

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

## 定制导航栏样式 
### customNavigationBar

### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| title    |           导航栏标题          |  String  |    否    |   -    |    -   |
| leftBarButtonItems |        左边的按钮        |  Array    |   是    |   ['back']    |    -   |
| rightBarButtonItem |        右边的按钮        |  Array    |   是    |   []    |    -   |
| success     |            成功之后的回调         |  function  |    否    |   -    |    -   |
| fail        |            失败之后的回调         |  function  |    否    |   -    |    -   |

### success 返回值
| 名称 | 描述  | 类型  | 必须  |
| ---- | :---: | :---: | :---: |
|  -   |   -    |    -   |   -   |

### 代码示例

```js
this.yjk.customNavigationBar({
  title: '导航栏标题',  //导航栏标题
  leftBarButtonItems: ['back'],  // 左边 默认:['back'] 可选参数 back(返回箭头)
  rightBarButtonItem: ['close'],  // 右边 默认:['close'] 可选参数 close（关闭按钮）
  success: (res) =>{
    console.log('成功', res)
    this.toast(res);
  },
  fail: (res) =>{
    console.log('失败', res)
  },
  complete: (res) =>{
    console.log('完成', res)
  },
});
``` 

## 将WebView左上角返回替换成 X
### setWebViewBackCloseType

对应以前的setWebViewBackType

### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| isShowCloseType  |          左上角是否显示关闭按钮  |  Bool  |    是    |   -    |    -   |
| success     |            成功之后的回调         |  function  |    否    |   -    |    -   |
| fail        |            失败之后的回调         |  function  |    否    |   -    |    -   |

### success 返回值
| 名称 | 描述  | 类型  | 必须  |
| ---- | :---: | :---: | :---: |
|  -   |   -    |    -   |   -   |

### 代码示例

```js
this.yjk.setWebViewBackCloseType({
  isShowCloseType: true, //一般设置为true,因为默认不是这个样式所以无需设置
  success: (res) => {
    console.log('success',res.loginState)
  },
  fail: (res) =>{
    console.log('失败', res)
  }
})
``` 

## 设置分享按钮是否显示，自定义title文字
### setNavigationBar
 

### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| title   |                 顶部标题文字         |  String  |    否    |   -    |    -   |
| isShowShareBtn  |    右上角是否显示分享按钮  |  String  |    否    |   -    |    "false"   |
| success     |            成功之后的回调         |  function  |    否    |   -    |    -   |
| fail        |            失败之后的回调         |  function  |    否    |   -    |    -   |

### success 返回值
| 名称 | 描述  | 类型  | 必须  |
| ---- | :---: | :---: | :---: |
|  -   |   -    |    -   |   -   |

### 代码示例

```js
this.yjk.setNavigationBar({
  title: "xxxx",  //空就不显示、非空显示
  isShowShareBtn: "false",//除了字符串"false"不显示，其他全部显示分享按钮
  success: () => {
    console.log('success')
  },
  fail: (res) =>{
    console.log('失败', res)
  }
})
``` 

## 关闭当前h5页面 
### closeWebViewVC


### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| success     |            成功之后的回调         |  function  |    否    |   -    |    -   |
| fail        |            失败之后的回调         |  function  |    否    |   -    |    -   |

### success 返回值
| 名称 | 描述  | 类型  | 必须  |
| ---- | :---: | :---: | :---: |
|  -   |   -    |    -   |   -   |

### 代码示例

```js
this.yjk.closeWebViewVC({
  success: (res) =>{
    console.log('成功', res)
    this.toast(res);
  },
  fail: (res) =>{
    console.log('失败', res)
  },
  complete: (res) =>{
    console.log('完成', res)
  },
});
``` 