# 通用方法

## 外部跳转APP内H5页面

### openAppH5(url)
### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| url     |     h5页面url,该方法重新打开一个web页面 |  String  |    是    |   -    |    -   |

### success 返回值

| 名称 | 描述  | 类型  | 必须  |
| ---- | :---: | :---: | :---: |
| -    |   -    |    -   |   -   |

### 代码示例

```js
openAppH5() {
  const url = `${WEB}native/2019/jtys/index.html#/goods`
  yjk.jumper.openAppH5(url);
}
``` 


## 特殊Action跳转方法，不区分平台

### openActionPage(action, params = {})
### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| action     |     具体跳转事件                      |  Number  |    否    |   openNative    |    -   |
| params     |     跳转需要的具体参数对象                     |  Number  |    否    |   -    |    -   |

### success 返回值

| 名称 | 描述  | 类型  | 必须  |
| ---- | :---: | :---: | :---: |
| -    |   -    |    -   |   -   |

### 代码示例

```js
openActionPage(yjkActionName, {
  test: 1,
}) //yjkActionName为约定的事件

``` 

## 跳转到 APP 指定页面 无参数 

### openNativeYjkPage(iosPageName, androidPageName)
### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| iosPageName     |     对应ios页面                      |  String  |    否    |   -    |    -   |
| androidPageName     |     对应安卓页面                  |  String  |    否    |   -    |    -   |

### success 返回值

| 名称 | 描述  | 类型  | 必须  |
| ---- | :---: | :---: | :---: |
| -    |   -    |    -   |   -   |

### 代码示例

```js
openNativeYjkPage('UPlusCenterVC','view.memberCenter.UplusCenterActivity')  

``` 



