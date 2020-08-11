# 资讯

## 资讯详情

### openNewsDetail = (newsId, comeFrom='H5')
### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| newsId     |     newsId                     |  String  |    是    |  -    |    -   |
| comeFrom     |     埋点参数                    |  String  |    否    |   H5    |    -   |


### 代码示例

```js
this.yjk.jumper.openNewsDetail('33','H5')
``` 


## 资讯搜索页
### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| isAutoSearch     |     是否开启自动搜索           |  Bool  |    否    |  -    |    -   |
| searchName       |     搜索参数                  |  String  |    否    |   -    |    -   |


### 代码示例

```js
this.yjk.jumper.openNativePage('newsSearch',{
  isAutoSearch: true,
  searchName: '牙结石'
})
``` 

## 视频详情页
### IOS入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| videoIdIOS     |     videoId           |  String  |    是    |  -    |    -   |
| comeFrom     |     埋点参数                    |  String  |    否    |   H5    |    -   |

### 安卓入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| videoIdLong     |     videoId                |  Number  |    是    |  -    |    -   |
| comeFrom     |     埋点参数                    |  String  |    否    |   H5    |    -   |


### 代码示例

```js
this.yjk.jumper.openNativePage('videoDetail',{
  videoIdLong: 33,
  videoIdIOS: '33',
  comeFrom: 'H5'
})
``` 

## 课程详情页
### IOS入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| healthCourseID     |     courseId           |  String  |    是    |  -    |    -   |

### 安卓入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| courseIdLong     |     courseId                |  Number  |    是    |  -    |    -   |


### 代码示例

```js
this.yjk.jumper.openNativePage('courseDetail',{
  courseIdLong: 33,
  healthCourseID: '33'
})
``` 

## 视频直播回放
### IOS入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| videoLiveIdIOS     |     videoLiveId           |  Number  |    是    |  -    |    -   |
| comeFromIOS     |     埋点参数                    |  String  |    否    |   -    |    -   |

### 安卓入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| videoLiveIdLong     |     videoLiveId        |  Number  |    是    |  -    |    -   |
| fromAD     |     埋点参数                    |  Number  |    是    |   -    |    500   |


### 代码示例

```js
this.yjk.jumper.openNativePage('liveVideoPlayback', {
  comeFromIOS: 'H5',
  videoLiveIdIOS: 101,
  videoLiveIdLong: 101,
  fromAD: 500
})
```