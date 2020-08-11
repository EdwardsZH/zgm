# 其他

## 临时广告位banner

### openActivityBanner(item = {})
### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| item     |     传入/basic/activity/list接口返回的数组单个元素     |  Object  |    是    |   {}    |    -   |

item详情见[获取弹窗/Banner列表](http://192.168.1.185:8090/pages/viewpage.action?pageId=34079398)
### 代码示例

```js
  let item = {
    contentType: 2,
    content: 'https://www.baidu.com/'
  }
  openActivityBanner(item)
``` 

## 打开IM咨询工具

### openDoctorConsultList(comeFrom='H5')
### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| -     |     -                  |  -  |    -    |   -    |    -   |

### 代码示例

```js
openDoctorConsultList()
``` 