# 其他

## 临时广告位banner

### openActivityBanner(item = {})
### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| item     |     之前请求banner的每一个item                  |  Object  |    是    |   {}    |    -   |

### 代码示例

```js
let item = {
  contentType: 2,
  content: 'https://www.baidu.com/'
}
this.yjk.jumper.openActivityBanner(item)
``` 

## 打开IM咨询工具

### openDoctorConsultList(comeFrom='H5')
### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| comeFrom     |     埋点参数                  |  String  |    否    |   H5    |    -   |

### 代码示例

```js
this.yjk.jumper.openDoctorConsultList();
``` 