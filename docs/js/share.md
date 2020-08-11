# 优健康内部分享

## yjk.share(Object) :tada:

### 入参Object

| 名称         |   类型   | 是否必填 |                                 描述                                 |          默认值           | 最低版本 |
| ------------ | :------: | :------: | :------------------------------------------------------------------: | :-----------------------: | :------: |
| description  |  String  |    是    |                     描述内容，限制长度不超过64;                      |             -             |    -     |
| image        |  String  |    是    |                                                                      |             -             |    -     |
| title        |  String  |    是    |                     消息标题，限制长度不超过32;                      |             -             |    -     |
| url          |  String  |    是    |                              分享的链接                              |             -             |    -     |
| platformType |  String  |    否    | 分享的平台类型 'WeChat', 'WechatMoments', 'QQ', 'QQSpace', 'Weibo'， | 不传参时,默认展示分享面板 |    -     |
| success      | Function |    否    |                          调用成功的回调函数                          |             -             |    -     |
| fail         | Function |    否    |                          调用失败的回调函数                          |             -             |    -     |
| complete     | Function |    否    |              调用结束的回调函数, 调用成功、失败都会执行                |             -             |    -     |

### success 返回值

| 名称 | 类型  | 必须  | 描述  |
| ---- | :---: | :---: | :---: |
|  -   |   -   |   -   |   -   |

### fail 返回值

| 名称      |  类型  | 必须  |   描述   |
| --------- | :----: | :---: | :------: |
| errorMsg  | String |  是   | 错误描述 |
| errorCode | Number |  是   |  错误码  |


- **类型推断**：

- **类型注释**：

### 代码示例

```js
yjk.share({
  title: '微信用户分享-分享标题',
  description: '微信用户分享 - description',
  image: 'http://k.zol-img.com.cn/sjbbs/7692/a7691515_s.jpg',
  url: 'https://nervjs.github.io/taro/docs/components/media/image.html',
  platformType: 'WeChat',
  success: () => {
    console.log('微信用户分享,客户端已收到通知');
  },
  fail: res => console.log(res)
});
```






