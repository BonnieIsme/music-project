/**
 * 封装api
 */
import Taro from '@tarojs/taro'
import { getCacheData, setCacheData } from "./cache";
import { env } from '../config/env.json';


const hosts = require('../data/hosts.json')

function judgeAndGetHosts() {
  let _hosts = hosts
  if (getCacheData('hosts')) {
    _hosts = getCacheData('hosts')
  }
  return _hosts
}

// 映射 url，将域名添加在开头
function mappingUrl(url) {
  let host = judgeAndGetHosts().api[env]['test-api'];
  console.log('prefix host',host);
  console.log('url',url);
  let result_url = host +''+ url
  console.log('last_url',result_url);
  return result_url;
}

function bindRequest({url,data,header}) {
  // console.log('method',method);
  url = mappingUrl(url);

  let token = getCacheData('token')
  if (token) {
    header = {...header,token}
  }

  const params = {url,data,header}
  return params
}

export function get(params) {
  // TODO:判断网络情况 是否网络连接，超时情况等
  let url = params.url;
  let data = params.data;
  let header = params.header
  let _params = bindRequest({url,data,header})
  // console.log('params',_params);
  
  return new Promise((resolve,reject)=>{
    Taro.request({..._params,method:'GET'})
    .then(res=>{
    // TODO:用户权限验证
    // 收到响应后判断状态码
    if (res.statusCode === 200) {
      // 用户已登录
      resolve(res)
      console.log('请求成功',res);
      
    }else if (res.statusCode === 401) {
      // 用户未登录
      Taro.showToast({
        title:'客官请先登录',
        icon:'warning',
        success:()=>{
           Taro.relaunchTo({url:'/packageLogin/pages/login/authorize/index'})
        }
      })
    }else{
      // 出错
      reject(res);
    }
    })
    .catch(err=>{
      console.log('出错了',err);
      reject(err)
    })
  })
}

export function post({url,data,header}) {
  let params = bindRequest({url,data,header,method:'post'});
  Taro.request(params)
  .then(res=>{
    console.log('success',res)
  },err=>{
    console.log('error',err);
  })
}