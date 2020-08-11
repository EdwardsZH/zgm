# 资讯

## 资讯详情

### openNewsDetail(newsId, comeFrom='H5')
### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| newsId     |     newsId                     |  String  |    是    |  -    |    -   |
| comeFrom     |     埋点参数                    |  String  |    否    |   H5    |    -   |


### 代码示例

```js
openNewsDetail('227208','H5')
``` 

## 检前百科

### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
|   informationId     |          informationId         |   Number  |     是    |  -    |    -   |


### 代码示例
```js
openDiseasesDetailsAll('227208')
```


## 资讯搜索页
### openNewsSearch(searchName, isAutoSearch=true)
### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| searchName       |     搜索参数                  |  String  |    否    |   -    |    -   |
| isAutoSearch     |     是否开启自动搜索           |  Bool  |    否    |  -    |    -   |


### 代码示例

```js
openNewsSearch('牙结石', true)
``` 

## 视频详情页
### openVideoDetail(videoId, comeFrom='H5')
### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| videoId     |     videoId           |  Number  |    是    |  -    |    -   |
| comeFrom     |     埋点参数                    |  String  |    否    |   H5    |    -   |


### 代码示例

```js
openVideoDetail(33,'H5')
``` 

## 课程详情页
### openCourseDetail(courseId, comeFrom='H5')
### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| courseId     |     courseId           |  Number  |    是    |  -    |    -   |
| comeFrom     |     埋点参数                    |  String  |    否    |   H5    |    -   |


### 代码示例

```js
openCourseDetail(33)
``` 


## 视频直播
### openVideoLive(videoLiveId, comeFrom='H5')
### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| videoLiveId     |     videoLiveId           |  Number  |    是    |  -    |    -   |
| comeFrom     |     埋点参数                    |  String  |    否    |   H5    |    -   |


### 代码示例

```js
openVideoLive(161, 'H5')
``` 

## 视频直播回放
### openLiveVideoPlayback(videoLiveId, comeFrom='H5')
### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| videoLiveId     |     videoLiveId           |  Number  |    是    |  -    |    -   |
| comeFrom     |     埋点参数                    |  String  |    否    |   H5    |    -   |



### 代码示例

```js
openLiveVideoPlayback(154,'H5')
```