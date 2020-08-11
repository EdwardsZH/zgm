# 体检相关

## 预约首页

### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
|   -     |          -          |   -  |     -    |  -    |    -   |

### 代码示例
```js
openBespeakHome()
```

## 预约详情
### openBespeakDetail(type, vid, seqNo , comeFrom = 'H5')
### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
|   type     |          预约类型          |   String  |     是    |  无    |   bigClient,mall    |
|   vid     |           预约id            |   String  |     是    |  无    |       |
|   seqNo     |         seqNo          |   Number  |     否    |  无    |       |
|   comeFrom     |          来源         |   String  |     否    |  -    |    H5   |

### 代码示例
```js
//全国
openBespeakDetail('mall','730', 20200340)

//大客户
openBespeakDetail('bigClient','730', 11)
```

## 跳转预约信息确认页
### openApplyInfoCommit(params = {})
### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
|   goodsId     |          商品id          |   String  |     否    |  无    |    -   |
|   serverNumber     |           serverNumber            |   String  |     是    |  无    |  -     |
|   doctorName     |         医生姓名          |   String  |     是    |  无    |   -    |
|   doctorId     |          医生id         |   Number  |     是    |  -    |    -   |

### 代码示例
```js
  openApplyInfoCommit({ 
    goodsId: '11', serverNumber: '11', doctorName: '测试', doctorId: 19
  })
```

## 跳转高级定制填写基本信息

### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
|   questionnaireStr     |          questionnaireStr          |   String  |     -    |  -    |    -   |

### 代码示例
```js
openVipPhysicalCustom('')
```

## 跳转体检定制页

### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
|   -     |          -          |   -  |     -    |  -    |    -   |

### 代码示例
```js
openExamCustom()
```