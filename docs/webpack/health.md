# 健康问答

## 健康问答向医生提问

### submitQuestion(params)
### IOS入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
|   vcTypeIntIOS     |          问题类型          |   Number  |     是    |  -    |    -   |
|   expertIdIOS     |          医生id            |   String  |     1type是必填    |  -    |    -   |
|   comeFrom         |          埋点             |   String  |     否    |  -    |    -   |

### 安卓入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
|   doctorIdLong     |     医生id,有是私人问题，无是公开问题          |   Number  |     否    |  -    |    -   |
|   comeFrom         |          埋点             |   String  |     否    |  -    |    -   |

### success 返回值

| 名称 | 描述  | 类型  | 必须  |
| ---- | :---: | :---: | :---: |
| -    |   -    |    -   |   -   |

### 代码示例

```js
// 健康问答提问
submitQuestion() {
  this.yjk.jumper.submitQuestion({
    vcTypeIntIOS: 1,// 0:公开问题，1：私有问题
    expertIdIOS: '33', 
    comeFrom: '1',
    doctorIdLong: 33,
    success: (res) => {
      console.log('success') 
    },
    fail: (res) =>{
      console.log('失败', res)
    }
  })
},
``` 

## 健康问答首页

### 代码示例

```js
this.yjk.jumper.openNativePage('healthQuestionHome',{
  comefrom: 'H5'
})
```

## 健康提醒

### IOS入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
|   targetAudioIdIOS     |          健康提醒id          |   String  |     是    |  -    |    -   |

### 安卓入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
|   startPlayVidLong     |          健康提醒id          |   Number  |     是    |  -    |    -   |
|   fromAD     |          埋点类型           |   Number  |     是    |  -    |    6   |
### 代码示例

```js
this.yjk.jumper.openNativePage('healthRemind',{
  startPlayVidLong: 123,
  fromAD: 6,
  targetAudioIdIOS: '123'
})
```

## 报告解读

### IOS入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
|   healthArchiveIdIOS     |          healthArchiveId          |   String  |     是    |  -    |    -   |
|   iosSpecialIOS     |          ios特殊处理          |   Number  |     是    |  -    |    1   |

### 安卓入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
|   healthArchiveIdLong     |          healthArchiveId           |   Number  |     是    |  -    |    -   |

### 代码示例
```js
this.yjk.jumper.openNativePage('telInterpretation',{
  healthArchiveIdIOS: this.healthArchiveId,
  iosSpecialIOS:1,
  healthArchiveIdLong: Number(this.healthArchiveId),
  needToProgress1AD: true
})
```


## 跳转到科室 | 跳转到异常指标

### IOS入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
|   dspType     |         dspType         |   Number  |     是    |  -    |    1   |
|   doctorListType     |          跳转类型         |   String  |     是    |  -    |    KS,YCZB   |
|   doctorListRequestKeyWordsIOS     |         关键字          |   String  |     是    |  -    |    1   |

### 安卓入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
|   dspType     |         dspType         |   Number  |     是    |  -    |    1   |
|   doctorListType     |          跳转类型         |   String  |     是    |  -    |    KS,YCZB   |
|   departmentAD     |         KS必填：科室名称          |   String  |     是    |  -    |    -   |
|   exceptionAD     |        YCZB必填：异常指标名称          |   String  |     是    |  -    |    -   |
|   fromH5AD         |         是否H5          |   Bool  |     是    |  -    |    true   |

### 代码示例
```js
//跳转到科室
openDepartment('KS','妇产科')

//跳转到异常指标
openDepartment('YCZB','测试')

openDepartment(type, name){
this.yjk.jumper.openNativePage('doctorDepartment',{
  dspType:1,
  doctorListType: type,
  doctorListRequestKeyWordsIOS: name,
  departmentAD: type == 'KS' ? name : undefined,
  exceptionAD: type == 'YCZB' ? name : undefined,
  fromH5AD: true
});
},
```

## 跳转到医生主页，邀请医生
### openDoctorDetail(doctorId,comeFrom='H5')
### IOS入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
|   doctorIdIOS     |          医生id          |   String  |     是    |  -    |    -   |

### 安卓入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
|   doctorIdLong     |          医生id          |   Number  |     是    |  -    |    -   |

### 代码示例
```js
this.yjk.jumper.openNativePage('inviteFamilyDoctor',{
  doctorIdLong: 33, //安卓加AD后缀
  doctorIdIOS: '33'
})
```

## 跳转医生列表

### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
|   -     |          -          |   -  |     -    |  -    |    -   |

### 代码示例
```js
this.yjk.jumper.openNativePage('myFamilyDoctor')
```

## 选异常找医生

### IOS入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
|   iosSpecialIOS     |          特殊处理          |   Number  |     是    |  -    |    1   |

### 安卓入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
|   androidSpecialAD     |          特殊处理           |   Number  |     是    |  -    |    1   |

### 代码示例
```js
this.yjk.jumper.openNativePage('findDoctorByReport',{
  androidSpecialAD: 1, //特殊处理
  iosSpecialIOS: 1
})
```


## 检前百科

### IOS入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
|   informationId     |          informationId         |   String  |     是    |  -    |    -   |
|   iosSpecialIOS     |          特殊处理          |   Number  |     是    |  -    |    1   |

### 安卓入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
|   informationId     |          informationId         |   String  |     是    |  -    |    -   |
|   fromAD     |          特殊处理           |   Number  |     是    |  -    |    14   |

### 代码示例
```js
this.yjk.jumper.openNativePage('diseasesDetailsAll',{
  informationId: '11',
  iosSpecialIOS: 1,
  fromAD: 14
})
```

## 专病讲堂

### IOS入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
|   comeFrom     |          来源         |   String  |     是    |  -    |    H5   |

### 安卓入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
|   from     |          来源         |   String  |     是    |  -    |    H5   |

### 代码示例
```js
this.yjk.jumper.openNativePage('diseaseVideo',{
  from: 'H5',
  comeFrom:'H5'
});
```

## 预约首页

### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
|   -     |          -          |   -  |     -    |  -    |    -   |

### 代码示例
```js
this.yjk.jumper.openNativePage('bespeakHome')
```

## 预约详情

### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
|   type     |          预约类型          |   String  |     是    |  无    |   bigClient,mall    |
|   vid     |           预约id            |   String  |     是    |  无    |       |
|   seqNo     |         seqNo          |   Number  |     否    |  无    |       |

### 代码示例
```js
//全国
this.jumper.openBespeakDetail('mall','test', 11)

//大客户
this.jumper.openBespeakDetail('bigClient','test', 11)
```
