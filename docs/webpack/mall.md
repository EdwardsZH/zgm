# 商城模块

## 打开商城首页

### openMallHome()
### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
|   -     |          -          |   -  |     -    |  -    |    -   |


### 代码示例

```js
this.yjk.jumper.openMallHome();
``` 

## 跳转商品详情
如果跳转微信小程序必须要加载wx的jssdk 

### openGoodsDetail(goodsId,trackId='H5',channel='')
### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| goodsId     |     商品id                      |  String  |    是    |   -    |    -   |
| trackId     |     埋点标识                     |  String  |    否    |   H5   |    -   |
| channel     |     渠道来源 - 短信分享埋点用       |  String  |    否    |   -    |    -   |


### 代码示例

```js
// 根据当前app的环境传goodId
this.yjk.jumper.openGoodsDetail('1567394084520')
``` 

## 跳转到一/二级类目

对应以前的jumpToMallCategoryGoodsList || goToMallSubCategoryGoodsList
### openMallCategoryGoodsList(mainId, subId, subName)
### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| mainId     |     主id                      |  String  |    是    |   -    |    -   |
| subId     |     subId                     |  String  |    否    |   H5   |    -   |
| subName     |     次name                  |  String  |    否    |   -    |    -   |


### 代码示例

```js
//跳转到体检套餐列表
this.yjk.jumper.openMallCategoryGoodsList('1476151839258')
``` 

## 跳转到一级类目

### openMainCategoryList(mainId, mainName)
### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| mainId     |     主id                      |  String  |    是    |   -    |    -   |
| mainName     |     主name                  |  String  |    否    |   -    |    -   |

### 代码示例

```js
// 跳转至一级类目页
openMainCategoryGoodsList(){
  this.yjk.jumper.openMainCategoryList('1490585334052', '父母保健')
}
``` 

## 跳转到购物车列表
### 代码示例

```js
this.yjk.jumper.openNativePage('shopCartList',{
  fromStrAD: 'H5'
})
```

## 组合优惠列表
### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| goodsId     |     goodsId           |  String  |    是    |  -    |    -   |


### 代码示例

```js
this.yjk.jumper.openNativePage('groupGoodsList',{
  goodsId: '1544687360612'
})
```