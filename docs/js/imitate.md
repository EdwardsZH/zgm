# js各种模拟实现

## 手写 instanceof

- **注意的点**：

- **难点**：

### 代码示例

```js
  function instance_of(L, R) {//L 表示左表达式，R 表示右表达式
      var O = R.prototype;// 取 R 的显示原型
      L = L.__proto__;// 取 L 的隐式原型
      while (true) { 
          // Object.prototype.__proto__ === null
          if (L === null) 
            return false; 
          if (O === L)// 这里重点：当 O 严格等于 L 时，返回 true 
            return true; 
          L = L.__proto__; 
      } 
  }
 
  // 测试
  function C(){} 
  function D(){} 
  
  var o = new C();
  
  instance_of(o, C); // true
  instance_of(o, D); // false
```





## 获取图片信息

### yjk.getImageInfo(Object) 
获取图片详细信息

### 入参Object

| 名称     |   类型   | 是否必填 |                                 描述                                 | 默认值 | 最低版本 |
| -------- | :------: | :------: | :------------------------------------------------------------------: | :----: | :------: |
| src      |  String  |    是    | 图片的路径，可以是相对路径、临时文件路径、存储文件路径、网络图片路径 |   -    |    -     |
| success  | Function |    否    |                          调用成功的回调函数                          |   -    |    -     |
| fail     | Function |    否    |                          调用失败的回调函数                          |   -    |    -     |
| complete | Function |    否    |              调用结束的回调函数, 调用成功、失败都会执行              |   -    |    -     |


### success 返回值

| 名称        |  类型  |             描述             |
| ----------- | :----: | :--------------------------: |
| width       | Number |      图片宽度（单位px）      |
| height      | Number |      图片高度（单位px）      |
| path        | String |         图片本地路径         |
| orientation | String | 返回图片的方向，有效值见下表 |
| type        | String |        返回图片的格式        |

### orientation 参数说明

| 枚举值         |        说明         |
| -------------- | :-----------------: |
| up             |        默认         |
| down           |      180度旋转      |
| left           |   逆时针旋转90度    |
| right          |   顺时针旋转90度    |
| up-mirrored    |  同up，但水平翻转   |
| down-mirrored  | 同down，但水平翻转  |
| left-mirrored  | 同left，但垂直翻转  |
| right-mirrored | 同right，但垂直翻转 |


### fail 返回值

| 名称      |  类型  | 必须  |   描述   |
| --------- | :----: | :---: | :------: |
| errorMsg  | String |  是   | 错误描述 |
| errorCode | Number |  是   |  错误码  |


- **类型推断**：

- **类型注释**：

### 代码示例

```js
yjk.getImageInfo({
  src: 'http://img3.a0bi.com/upload/ttq/20160817/1471440100833.jpg',
  success: res => {
    console.log('成功', res)
  },
  fail: res => {
    console.log('失败', res)
  },
  complete: res => {
    console.log('完成', res)
  },
});
```




## 压缩图片

### yjk.compressImage(Object)

### 入参Object

| 名称           |   类型   | 是否必填 |                           描述                            | 默认值 | 最低版本 |
| -------------- | :------: | :------: | :-------------------------------------------------------: | :----: | :------: |
| apFilePaths    | Function |    是    |                   要压缩的图片地址数组                    |   -    |    -     |
| comporessLevel |  String  |    否    | 压缩级别，支持0~4的证书，默认4.详见[compressLevel表 说明] |   -    |    -     |
| success        | Function |    否    |                    调用成功的回调函数                     |   -    |    -     |
| fail           | Function |    否    |                    调用失败的回调函数                     |   -    |    -     |
| complete       | Function |    否    |       调用结束的回调函数（调用成功、失败都会执行）        |   -    |    -     |


### success 返回值

| 名称        |     类型     |       描述       |
| ----------- | :----------: | :--------------: |
| apFilePaths | String/Array | 压缩后的路径数组 |

### compressLevel 表

| compressLevel |     说明     |
| :-----------: | :----------: |
|       0       |    低质量    |
|       1       |   中等之类   |
|       2       |    高质量    |
|       3       |    不压缩    |
|       4       | 根据网络适应 |


- **类型推断**：

- **类型注释**：

### 代码示例

```js
yjk.compressImage({
  apFilePaths: ['http://img3.a0bi.com/upload/ttq/20160817/1471440100833.jpg', 'http://dingyue.nosdn.127.net/5GCNIaFCnA=dhagK=C19SCZk2H4GXkqjAE8AQdLXqoAnS1534475648310.jpg'],
  compressLevel: 2,
  success: res => {
    console.log('成功', res)
  },
  fail: res => {
    console.log('失败', res)
  },
  complete: res => {
    console.log('完成', res)
  },
});
```






## 图片保存到本地相册

### yjk.saveImage(Object)

### 入参Object

| 名称     |   类型   | 是否必填 |                     描述                     | 默认值 | 最低版本 |
| -------- | :------: | :------: | :------------------------------------------: | :----: | :------: |
| url      |  String  |    是    |             要保存的图片url链接              |   -    |    -     |
| success  | Function |    否    |              调用成功的回调函数              |   -    |    -     |
| fail     | Function |    否    |              调用失败的回调函数              |   -    |    -     |
| complete | Function |    否    | 调用结束的回调函数（调用成功、失败都会执行） |   -    |    -     |


### success 返回值

| 名称 | 类型  | 必须  | 描述  |
| ---- | :---: | :---: | :---: |
| -    |   -   |   -   |   -   |

### fail 返回值

| 名称      |  类型  | 必须  |   描述   |
| --------- | :----: | :---: | :------: |
| errorMsg  | String |  是   | 错误描述 |
| errorCode | Number |  是   |  错误码  |

### 错误码描述

| 名称  |             描述             |
| ----- | :--------------------------: |
| 13002 |   参数无效，没有传url参数    |
| 13003 | 没有开启相册权限（ios only） |
| 13004 |         获取图片失败         |
| 13005 |   保存图片过程中的其他错误   |


- **类型推断**：

- **类型注释**：

### 代码示例

```js
yjk.saveImage({
  url: 'http://img3.a0bi.com/upload/ttq/20160817/1471440100833.jpg',
  success: res => {
    console.log('成功', res)
  },
  fail: res => {
    console.log('失败', res)
  },
  complete: res => {
    console.log('完成', res)
  },
});
```






