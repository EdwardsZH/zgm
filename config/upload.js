const axios = require('axios');
const md5   = require('md5');
const fs    = require('fs');
const path  = require('path');
const chalk = require('chalk');
const OSS   = require('ali-oss');
let filePathRoot = path.resolve(__dirname, '../dist'); 
const BUILD_ENV = process.env.BUILD;
const fileList     = [];
const ENV = ['yjk-app-html-test-ali', 'http://app-test.h5.ihaozhuo.com/', 'jssdk'];
const bucket     = ENV[0];
const region     = 'oss-cn-shanghai';
let remotePath = `zgm`;                    // 远程cos文件名
const H5_APP_ID  = '79a20b38-61cc-45bb-bd2b-2f4a8156e5ec';  // webapp(外部h5页)  
const fileDir    = { prefix: remotePath };                  // 云端 需要查询的文件目录
const isBuildDocs = BUILD_ENV === 'build-docs';
let proUrl

if (isBuildDocs) {
  remotePath = `${remotePath}/docs`;
  filePathRoot = path.resolve(__dirname, '../docs/dist'); 
  proUrl  = ENV[1] + remotePath + '/index.html';            // 项目预览: 线上地址
  ENV[2] = '资深前端文档'
}

// 给字母排序
function objKeySort(obj) {
  if (obj == undefined || typeof (obj) === 'string' || typeof (obj) === 'number') {
    return obj;

  } else if (obj && !obj.length && (typeof obj === 'object')) {
    const newkey = Object.keys(obj).sort();
    const newObj = {};

    for (let i = 0; i < newkey.length; i++) {
      newObj[newkey[i]] = objKeySort(obj[newkey[i]]);
    }

    return newObj;

  } else {
    const newObj = [];

    for (let i = 0; i < obj.length; i++) {
      newObj[i] = objKeySort(obj[i]);
    }
    
    return newObj;
  }
}

// H5自己的签名方法
function getH5Sign(params) {
  let msgOrigin = objKeySort(params);
  let sign = md5(JSON.stringify(msgOrigin) + H5_APP_ID);
  return sign
}

// 递归取出 ./dist 文件夹下所有文件的路径
function readDirSync(filePath) {
  const filePaths = fs.readdirSync(filePath);

  filePaths.forEach((item) => {
    const cur_path = `${filePath}/${item}`;
    const info = fs.statSync(cur_path);

    if (info.isDirectory()) {
      readDirSync(cur_path);
    } else {
      fileList.push(cur_path);
    }

  });
}

readDirSync(filePathRoot);

function uploadFile(ossClient) {
  const lastFile  = fileList[fileList.length - 1];

  for (let index = 0; index < fileList.length; index += 1) {
    const file = fileList[index];
    const upLoadUrl = remotePath + file.split('dist')[1];

    // 提交文件到oss，只要有路径，没有文件夹会自动创建
    ossClient.put(upLoadUrl, file).then((result) => {
      if (result.res.statusCode === 200) { 

        if (isBuildDocs) {
          if (file === lastFile) console.log(`${chalk.blueBright(ENV[2])}: 上传成功! \n${ENV[2]}地址: \n${chalk.greenBright(proUrl)}\n`);  
        } else {
          console.log(`\n${chalk.greenBright(ENV[1] + upLoadUrl)}  -> 上传成功` );       
        }       
                 
      } else {
        console.log(file + chalk.red(' : 上传失败')); 
      }
    }).catch(e => {
      console.log('上传失败,请查看日志: ', chalk.red(e));
    })
  }
}

// 先获取需要删除的文件
function getFileList(ossClient) {
   ossClient.list(fileDir).then(result => {
    let objects = result.objects || [];

    if (result.res.statusCode === 200 && objects.length) {
      objects.forEach(obj => ossClient.delete(obj.name));
      
      uploadFile(ossClient)
    } else {
      // 如果请求失败,或者获取的目录为空,也把项目传上去.
      uploadFile(ossClient)
    }
  })
}

let params = { appId: 103, appVersion: '6.1.1' };
params.sign = getH5Sign(params);

axios({
  method: 'post',
  url: 'https://restapi.ihaozhuo.com/basic/getUploadToken',
  data: JSON.stringify(params),
  headers: { 'Content-Type': 'text/plain' }
}).then(response => {
  if (response.status >= 200 && response.status < 300) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
}).then(response => {
  if (response.code == 200) {
    const { accessKeyId, accessKeySecret, securityToken } = response.data;
    const ossClient = new OSS({ bucket, region, accessKeyId, accessKeySecret, stsToken: securityToken });

    // getFileList(ossClient) //删除原文件夹上传
    uploadFile(ossClient)
  } else {
    throw new Error(response.msg);
  }
}).catch(err => {
  throw err;
});