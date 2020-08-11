# 原生调起h5功能

## JS注册给原生调用的函数
### registerJSHandler(callback)

要用到的界面需要单独调用
- 此方法要在app调用js方法之前注册该方法

### 入参

| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| callback    |            原生调用的js执行的具体函数             |  function  |    是    |   -    |    -   |

callback函数入参：
| 名称     |                描述                |   类型   | 是否必填 | 默认值 | 可选值 |
| --------| :--------------------------------: | :------: | :------: | :----: | :------: |
| data     |        原生调用js方法时传给js的参数       |  Object  |    否    |   -    |    -   |
| responseCallback |     为客户端注册给js调用的回调函数，js去执行完方法去调用         |  function  |    否    |   -    |    -   |

### responseCallback给原生的参数
| 名称 | 描述  | 类型  | 必须  |
| ---- | :---: | :---: | :---: |
| success     |            执行成功之后的回调         |  function  |    否    |   -    |    -   |
| fail        |            失败之后的回调         |  function  |    否    |   -    |    -   |

### success的返回值
| 名称 | 描述  | 类型  | 必须  |
| ---- | :---: | :---: | :---: |
|  -     |  具体每个函数返回的不一样     |  Object  |    否    |   -    |    -   |

### fail的返回值
| 名称 | 描述  | 类型  | 必须  |
| ---- | :---: | :---: | :---: |
|  errorMsg     |  错误描述    |  String  |    否    |   -    |    -   |
|  errorCode     |  错误码    |  Numver  |    否    |   -    |    -   |


### 代码示例

```js
   /* 回调给客户端参数示例如下：
   *  {
   *      'success':{ //参数1
   *          'key':'value' //参数1
   *      },
   *      'fail':{
   *          'errorMsg':'出错啦' //错误描述
   *          'errorCode': 10086 //错误码（找时间要确定一下）
   *      },  
   *  }
   */
  
this.yjk.registerJSHandler((data,responseCallBack) => {
  console.log('我是客户端传过来的参数',data)
  if(data && data.method == 'hasContent') {
    responseCallBack && responseCallBack({ //执行完之后给客户端的回调
      success: {
        'result': 1
      }
    })
  }
});
``` 
