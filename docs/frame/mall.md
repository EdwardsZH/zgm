# 商城模块

## 打开商城首页

### openMallHome()
### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
|   -     |          -          |   -  |     -    |  -    |    -   |


### 代码示例

```js
openMallHome()

``` 

## 跳转商品详情
如果改h5页面在微信小程序环境使用，必须要加载wx的jssdk 

### openGoodsDetail(params)
### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| goodsId     |     商品id                      |  String  |    是    |   -    |    -   |
| trackId     |     埋点标识                     |  String  |    否    |   H5   |    -   |
| channel     |     渠道来源 - 短信分享埋点用       |  String  |    否    |   -    |    -   |
| code        |     分销码映射 - 用于分销          |  String  |    否    |   -    |    -   |

### 代码示例

```js
// 根据当前app的环境传goodId
  openGoodsDetail({
    goodsId: '1567394084520',
    trackId: 'H5', //来源
    channel: 'yjk', //渠道
    code: '' //分销推广码的映射
  })
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
openMallCategoryGoodsList('1476151839258') 
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
  openMainCategoryList('1490585334052', '父母保健')
}
``` 

## 跳转到购物车列表
### openShopCartList()
### 代码示例

```js
openShopCartList()
```

## 组合优惠列表
### openGroupGoodsList(goodsId)
### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| goodsId     |     goodsId           |  String  |    是    |  -    |    -   |


### 代码示例

```js
openGroupGoodsList('1544687360612')
```

## 打开我的订单列表
### openMyOrderList()
### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| -     |     -           |  -  |    -    |  -    |    -   |


### 代码示例

```js
openMyOrderList()
```