# 开放接口

## 获取报告详情

### yjk.fetchReportDetail(Object) :tada:
通过报告id获取报告详情

### 入参Object

| 名称            |   类型   | 是否必填  |                    描述                   | 默认值 |  最低版本 |
| --------------- | :------: | :------: | :--------------------------------------: | :----: | :------: |
| healthArchiveId |  String  |    是    |                   报告id                  |   -    |    -     |
| success         | Function |    否    |             调用成功的回调函数             |   -    |    -     |
| fail            | Function |    否    |             调用失败的回调函数             |   -    |    -     |
| complete        | Function |    否    |  调用结束的回调函数, 调用成功、失败都会执行  |   -    |    -     |


### success 返回值

| 名称 | 类型  | 必须  |  描述  |
| ---- | :---: | :---: | :---: |
|   -  |   -   |   -   |   -   |

### fail 返回值

| 名称      |  类型  | 必须  |   描述   |
| --------- | :----: | :---: | :-----: |
| errorMsg  | String |  是   | 错误描述 |
| errorCode | Number |  是   |  错误码  |


- **类型推断**：

- **类型注释**：

### 代码示例

```js
yjk.fetchReportDetail({
  healthArchiveId: '1111',
  success: res => {
    console.log('获取返回值', res);
  },
  fail: res => console.log(res)
});
```

## 调起支付

### yjk.requestPayment(Object) :tada:
调起优健康支付

### 入参Object

| 名称         |   类型   | 是否必填  |                                 描述                                |          默认值           | 最低版本 |
| ------------ | :------: | :------: | :----------------------------------------------------------------: | :-----------------------: | :------: |
| success      | Function |    否    |                          调用成功的回调函数                          |             -             |    -     |
| fail         | Function |    否    |                          调用失败的回调函数                          |             -             |    -     |
| complete     | Function |    否    |              调用结束的回调函数（调用成功、失败都会执行）              |             -             |    -     |


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
```




## 发起请求

### yjk.request(Object)
发起 HTTPS 网络请求

### 入参Object

| 名称         |             类型            | 是否必填 |                                      描述                                       | 默认值  | 最低版本 |
| ------------ | :-------------------------: | :-----: | :----------------------------------------------------------------------------: | :-------| :------: |
| url          |           String            |   是    |                               开发者服务器接口地址                               |    -    |    -     |
| data         |  String/Object/ArrayBuffer  |   否    |                                  	请求的参数                                    |    -    |    -     |
| dataType     |           String            |   否    |                            	返回的数据格式(此行待定)                             |   json  |    -     |
| responseType |           String            |   否    |                            	响应的数据类型(此行待定)                             |   text  |    -     |
| header       |           String            |   否    | 设置请求的 header，header 中不能设置 Referer。content-type 默认为 application/json |    -    |    -     |
| method       |           String            |   否    |                                  HTTP 请求方法                                   |    -    |    -     |
| success      |          Function           |   否    |                                调用成功的回调函数                                 |    -    |    -     |
| fail         |          Function           |   否    |                                调用失败的回调函数                                 |    -    |    -     |
| complete     |          Function           |   否    |                    调用结束的回调函数（调用成功、失败都会执行）                     |    -    |    -     |


### object.dataType 的合法值

|  值  |                          说明                           |
| ---- | :----------------------------------------------------: |
| json | 返回的数据为 JSON，返回后会对返回的数据进行一次 JSON.parse |
| 其他 |               不对返回的内容进行 JSON.parse              |

### success 回调函数返回值

|     名称     |           类型            |                 必须                   | 描述  |
| ------------ | :-----------------------: | :-----------------------------------: | :---: |
|     data     | String/Object/ArrayBuffer |         开发者服务器返回的数据          |   -   |
|  statusCode  |          Number           | 	    开发者服务器返回的 HTTP 状态码     |   -   |
|    header    |          Object           | 开发者服务器返回的 HTTP Response Header |   -   |

### 错误码（参考支付宝）

| 名称 |         类型         |
| --- | :-------------------: |
| 11  |       无权跨域        |
| 12  |       网络出错        |
| 13  |         超时          |
| 14  |       解码失败        |
| 19  |       HTTP错误        |
| 20  | 请求已被停止/服务端限流 |

#### data 参数说明
最终发送给服务器的数据是 String 类型，如果传入的 data 不是 String 类型，会被转换成String。转换规则如下：

- 对于 GET 方法的数据，会将数据转换成 query string（encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...）
- 对于 POST 方法且 header['content-type'] 为 application/json 的数据，会对数据进行 JSON 序列化
- 对于 POST 方法且 header['content-type'] 为 application/x-www-form-urlencoded 的数据，会将数据转换成 query string （encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...）

### 代码示例

```js
```






## 获取基础库版本号

### yjk.SDKVersion(Object)

### 入参Object

| 名称         |   类型   | 是否必填 |                                 描述                                 |          默认值           | 最低版本 |
| ------------ | :------: | :------: | :------------------------------------------------------------------: | :-----------------------: | :------: |
| complete     | Function |    否    |              调用结束的回调函数（调用成功、失败都会执行）              |             -             |    -     |
| description  |  String  |    是    |                     描述内容，限制长度不超过64;                      |             -             |    -     |
| fail         | Function |    否    |                          调用失败的回调函数                          |             -             |    -     |
| image        |  String  |    是    |                                                                      |             -             |    -     |
| platformType |  String  |    否    | 分享的平台类型 'WeChat', 'WechatMoments', 'QQ', 'QQSpace', 'Weibo'， | 不传参时,默认展示分享面板 |    -     |
| success      | Function |    否    |                          调用成功的回调函数                          |             -             |    -     |
| title        |  String  |    是    |                     消息标题，限制长度不超过32;                      |             -             |    -     |
| url          |  String  |    是    |                              分享的链接                              |             -             |    -     |


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
```



## 获取收货地址

### yjk.chooseAddress(Object object)
获取用户收货地址。调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址。

### 入参Object

| 名称            |   类型   | 是否必填  |                    描述                   | 默认值 | 最低版本  |
| --------------- | :------: | :------: | :--------------------------------------: | :----: | :------: |
| success         | Function |    否    |             调用成功的回调函数             |   -    |    -     |
| fail            | Function |    否    |             调用失败的回调函数             |   -    |    -     |
| complete        | Function |    否    | 调用结束的回调函数（调用成功、失败都会执行） |   -    |    -     |


### success 返回值

|     名称     | 类型  |          描述          |
| ------------ | :---: | :-------------------: |
|   userName   | String |      收货人姓名       |
| provinceName | String |          省          |
|   cityName   | String |          市          |
|  countyName  | String |          区          |
|  detailInfo  | String |    详细收货地址信息   |
|  telNumber   | String |    收货人手机号码     |

### fail 返回值

| 名称      |  类型  | 必须   |   描述   |
| --------- | :----: | :---: | :------: |
| errorMsg  | String |  是   | 错误描述 |
| errorCode | Number |  是   |  错误码  |

| 错误码 |         描述         |
| ----- | :-------------------: |
| 12001 |    获取用户信息失败    |

- **类型推断**：

- **类型注释**：

### 代码示例

```js
yjk.chooseAddress({
  success: res => console.log(res),
  fail: res => console.log(res)
});
```




## 获取用户信息

### yjk.getUserInfo(Object)

用户登录后可获取用户信息，在用户未授权过的情况下调用此接口，将不再出现授权弹窗，会直接进入 fail 回调。在用户已授权的情况下调用此接口，可成功获取用户信息。

### 入参Object

| 名称            |   类型   | 是否必填 |                    描述                    | 默认值 | 最低版本  |
| --------------- | :------: | :------: | :--------------------------------------: | :----: | :------: |
| success         | Function |    否    |             调用成功的回调函数             |   -    |    -     |
| fail            | Function |    否    |             调用失败的回调函数             |   -    |    -     |
| complete        | Function |    否    | 调用结束的回调函数（调用成功、失败都会执行） |   -    |    -     |


### success 返回值

|   名称    |  类型  | 必须    |         描述          |
| --------- | :---: | :-----: | :------------------: |
| userInfo  | Object |   是   |          -           |
| nickName  | String |   是   |         昵称          |
| avatarUrl | String |   否   |         头像          |
|  gender   | Number |   是   | 1：男；0：女；-1：未知 |

### fail 返回值

| 名称      |  类型  | 必须  |   描述   |
| --------- | :----: | :---: | :------: |
| errorMsg  | String |  是   | 错误描述 |
| errorCode | Number |  是   |  错误码  |


- **类型推断**：

- **类型注释**：

### 代码示例

```js
// 必须是在用户已经授权的情况下调用
yjk.getUserInfo({
  success: res => console.log(res),
  fail: res => console.log(res)
});
```



## 检查登录是否过期

### yjk.checkSession(Object)
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
| --------- | :----: | :--: | :------: |
| errorMsg  | String |  是   | 错误描述 |
| errorCode | Number |  是   |  错误码  |


- **类型推断**：

- **类型注释**：

### 代码示例

```js
```



## 优健康登录

### yjk.getLogin(Object)  

### 入参Object

| 名称            |   类型   | 是否必填 |                    描述                    | 默认值 | 最低版本  |
| --------------- | :------: | :------: | :--------------------------------------: | :----: | :------: |
| success         | Function |    否    |             调用成功的回调函数             |   -    |    -     |
| fail            | Function |    否    |             调用失败的回调函数             |   -    |    -     |
| complete        | Function |    否    | 调用结束的回调函数（调用成功、失败都会执行） |   -    |    -     |


### success 返回值

|   名称   |  类型  |  必须  |  描述  |
| -------- | :----: | :---: | :----: |
| authCode | String |   是   | 授权码 |

### fail 返回值

| 名称      |  类型  | 必须  |   描述   |
| --------- | :----: | :---: | :-----: |
| errorMsg  | String |  是   | 错误描述 |
| errorCode | Number |  是   |  错误码  |


- **类型推断**：

- **类型注释**：

### 代码示例

```js
```