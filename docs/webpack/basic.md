# 通用方法

## H5打开App页面通用方法

### openNativePage(pageName, params = {}, action = 'openNative')
### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| pageName     |     map表中页面名称                      |  Number  |    是    |   -    |    -   |
| params     |     跳转需要的具体参数对象                     |  Number  |    否    |   -    |    -   |
| action     |     具体跳转事件                      |  Number  |    否    |   openNative    |    -   |

### success 返回值

| 名称 | 描述  | 类型  | 必须  |
| ---- | :---: | :---: | :---: |
| -    |   -    |    -   |   -   |

### 代码示例

```js
this.yjk.jumper.openNativePage('telInterpretation',{
  healthArchiveIdIOS: this.healthArchiveId,
  iosSpecialIOS:1,
  healthArchiveIdLong: Number(this.healthArchiveId),
  needToProgress1AD: true
})

//各种类型两端传参示例
this.yjk.jumper.openNativePage('orderDetail',{
  testAD: 111, //安卓需要Number类型shang
  orderNoLong: 1222, //安卓加AD后缀
  comeFrom: 'H5', //两端都需要相同字段相同类型
  orderMainNoIOS: '1222' //ios加IOS后缀
})
``` 


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

