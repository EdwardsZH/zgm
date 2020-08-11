# 设备相关

## 拨打电话

### yjk.makePhoneCall(Object) 

### 入参Object

| 名称   |   类型   | 是否必填  |          描述          | 默认值 | 最低版本 |
| ------ | :------: | :------: | :-------------------: | :----: | :------: |
| number |  String  |    是    |        电话号码        |   -    |    -     |


- **类型推断**：

- **类型注释**：

### 代码示例

```js
yjk.makePhoneCall({ number: '95888' });
```


## 获取当前位置

### yjk.getLocation(Object)

检查登录是否过期，用户通过yjk.getAuth登录有时效性 

### 入参Object

| 名称            |   类型   | 是否必填 |                    描述                    | 默认值 | 最低版本 |
| --------------- | :------: | :------: | :--------------------------------------: | :----: | :------: |
| success         | Function |    否    |             调用成功的回调函数             |   -    |    -     |
| fail            | Function |    否    |             调用失败的回调函数             |   -    |    -     |
| complete        | Function |    否    | 调用结束的回调函数（调用成功、失败都会执行） |   -    |    -     |


### success 返回值

| 名称 | 类型  | 必须  | 描述  |
| ---- | :---: | :---: | :---: |
|   -  |   -   |   -   |   -   |

### fail 返回值

| 名称      |  类型  | 必须  |   描述   |
| --------- | :----: | :---: | :------: |
| errorMsg  | String |  是   | 错误描述 |
| errorCode | Number |  是   |  错误码  |


- **类型推断**：

- **类型注释**：

### 代码示例

```js
yjk.getLocation({
  success: res => {
    console.log(res);
  },
  fail: res => console.log(res)
});
```



## 获取剪切板内容

### yjk.getClipboard(Object)
获取剪切板内容 

### 入参Object

| 名称            |   类型   | 是否必填 |                    描述                    | 默认值 | 最低版本 |
| --------------- | :------: | :------: | :--------------------------------------: | :----: | :------: |
| success         | Function |    否    |             调用成功的回调函数             |   -    |    -     |
| fail            | Function |    否    |             调用失败的回调函数             |   -    |    -     |
| complete        | Function |    否    | 调用结束的回调函数（调用成功、失败都会执行） |   -    |    -     |


### success 返回值

| 名称 | 类型   |    描述    |
| ---- | :----: | :-------: |
| text | String | 剪切板数据 |

### fail 返回值

| 名称      |  类型  | 必须   |   描述   |
| --------- | :----: | :---: | :-----: |
| errorMsg  | String |  是   | 错误描述 |
| errorCode | Number |  是   |  错误码  |


- **类型推断**：

- **类型注释**：

### 代码示例

```js
yjk.getClipboard({
  success: ({ text }) => {
    console.log(text);
  },
});
```



## 设置剪切板内容

### yjk.setClipboard(Object)
设置剪切板内容 

### 入参Object

| 名称            |   类型   | 是否必填  |                    描述                    | 默认值 | 最低版本 |
| --------------- | :------: | :------: | :---------------------------------------: | :----: | :------: |
| text            |  String  |    是    |        描述内容，限制长度不超过64;          |   -    |    -     |
| success         | Function |    否    |             调用成功的回调函数              |   -    |    -     |
| fail            | Function |    否    |             调用失败的回调函数              |   -    |    -     |
| complete        | Function |    否    | 调用结束的回调函数（调用成功、失败都会执行）  |   -    |    -     |


### success 返回值

| 名称 |  类型   | 描述  |
| ---- | :----: | :---: |
| text | String | 剪切板数据 |

### fail 返回值

| 名称      |  类型  | 必须  |   描述   |
| --------- | :----: | :---: | :------: |
| errorMsg  | String |  是   | 错误描述 |
| errorCode | Number |  是   |  错误码  |


- **类型推断**：

- **类型注释**：

### 代码示例

```js
yjk.setClipboard({
  text,
  success: () => {
    console.log('设置成功');
  }
})
```


## 获取屏幕亮度

### yjk.getScreenBrightness(Object)
设置屏幕亮度 

### 入参Object

| 名称            |   类型   | 是否必填  |                    描述                   | 默认值 |  最低版本 |
| --------------- | :------: | :------: | :--------------------------------------: | :----: | :------: |
| success         | Function |    否    |             调用成功的回调函数             |   -    |    -     |
| fail            | Function |    否    |             调用失败的回调函数             |   -    |    -     |
| complete        | Function |    否    | 调用结束的回调函数（调用成功、失败都会执行） |   -    |    -     |


### success 返回值

| 名称  |  类型   |                描述                 |
| ----- | :----: | :---------------------------------: |
| value | Number | 屏幕亮度值，范围 0 ~ 1，0 最暗，1 最亮 |

### fail 返回值

| 名称      |  类型  | 必须  |   描述   |
| --------- | :----: | :---: | :-----: |
| errorMsg  | String |  是   | 错误描述 |
| errorCode | Number |  是   |  错误码  |


- **类型推断**：

- **类型注释**：

### 代码示例

```js
yjk.getScreenBrightness({
  success: ({ value }) => {
    console.log(value);
  },
});
```


## 扫码

### yjk.scanCode(Object)
调起优健康扫码界面进行扫码

### 入参Object

| 名称            |   类型   |  是否必填 |                                            描述                                            | 默认值 | 最低版本 |
| --------------- | :------: | :------: | :----------------------------------------------------------------------------------------: | :----: | :----: |
| type            |  String  |    否    |        扫码样式(默认 qr)：1. qr,扫码框样式为二维码扫码框；2. bar，扫码样式为条形码扫码框         |   -    |    -   |
| hideAlbum       |  Boolean |    否    | 是否隐藏相册（不允许从相册选择图片），只能从相机扫码 (iOS只有当 type=‘qr’的时候才支持从相册选取。) |   -    |    -   |
| success         | Function |    否    |                                      调用成功的回调函数                                      |   -    |    -   |
| fail            | Function |    否    |                                      调用失败的回调函数                                      |   -    |    -   |
| complete        | Function |    否    |                          调用结束的回调函数（调用成功、失败都会执行）                          |   -    |    -    |


### success 返回值

| 名称 | 类型  | 必须  | 描述  |
| ---- | :---: | :---: | :---: |
|   -  |   -   |   -   |   -   |

### fail 返回值

| 名称      |  类型  | 必须  |   描述   |
| --------- | :----: | :---: | :------: |
| errorMsg  | String |  是   | 错误描述 |
| errorCode | Number |  是   |  错误码  |


- **类型推断**：

- **类型注释**：

### 代码示例

```js
yjk.scanCode({
  type: 'qr', // 二维码为'qr' | 条形码为 'bar'
  hideAlbum: false,  // 是否隐藏相册（隐藏后不允许从相册选择二维码图片），只能从相机扫码 ture | false
  success: res => console.log(res),
  fail: res => console.log(res)
});
```


## 网络状态

### yjk.getNetworkType(Object object)
获取当前网络状态

### 入参Object

| 名称            |   类型   | 是否必填 |                    描述                    | 默认值 | 最低版本 |
| --------------- | :------: | :------: | :----------------------------------------: | :----: | :------: |
| success         | Function |    否    |             调用成功的回调函数             |   -    |    -     |
| fail            | Function |    否    |             调用失败的回调函数             |   -    |    -     |
| complete        | Function |    否    | 调用结束的回调函数（调用成功、失败都会执行） |   -    |    -     |


### success 返回值

| 名称        |  类型   | 必须  |  描述   |
| ----------- | :----: | :---: | :-----: |
| networkType | String |  是   | 网络类型 |

### networkType 和法制

|  值    |   说明   |
| ------ | :------: |
| wifi   | wifi网络 |
|   2g   |  2g网络  |
|   3g   |  3g网络  |
|   4g   |  4g网络  |
| unkown |   未知   |
|  none  |  无网络  |


- **类型推断**：

- **类型注释**：

### 代码示例

```js
yjk.getNetworkType({
  success: res => {
    const networkType = res.networkType
    console.log(networkType);
  }
})
```


## 系统信息

### yjk.getSystemInfo(Object object)
获取系统信息

### 入参Object

| 名称            |   类型   | 是否必填 |                    描述                    | 默认值 | 最低版本 |
| --------------- | :------: | :------: | :----------------------------------------: | :----: | :------: |
| success         | Function |    否    |             调用成功的回调函数             |   -    |    -     |
| fail            | Function |    否    |             调用失败的回调函数             |   -    |    -     |
| complete        | Function |    否    | 调用结束的回调函数（调用成功、失败都会执行） |   -    |    -     |


### success 返回值

|         名称        | 类型    | 必须  |        描述        | 最低版本 |
| ------------------- | :----: | :---: | :----------------: | :------: |
|        brand        | String |   -   |      手机品牌       |    -    |
|        model        | String |   -   |       设备型号      |    -    |
|     screenWidth     | Number |   -   |   屏幕宽度，单位px   |    -    |
|    screenHeight     | Number |   -   |   屏幕高度，单位px   |    -    |
|     windowWidth     | Number |   -   |      窗口宽度       |    -    |
|    windowHeight     | Number |   -   |      窗口高度       |    -    |
|   statusBarHeight   | Number |   -   | 状态栏的高度，单位px |    -    |
|       version       | String |   -   |    优健康版本号      |    -    |
|       system        | String |   -   |    操作系统及版本    |    -    |
|      platform       | String |   -   | 系统名：Android、iOS |    -    |

### fail 返回值

| 名称      |  类型  | 必须  |   描述   |
| --------- | :----: | :---: | :------: |
| errorMsg  | String |  是   | 错误描述 |
| errorCode | Number |  是   |  错误码  |


- **类型推断**：

- **类型注释**：

### 代码示例

```js
yjk.getSystemInfo({
  success: res => {
    console.log(res);
  },
  fail: res => console.log(res)
});
```
