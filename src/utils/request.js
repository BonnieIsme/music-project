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
  let host = judgeAndGetHosts().api[env];
  console.log('prefix host',host);
  let result_url = host + url
  console.log('last_url',result_url);
  return result_url;
}

function bindRequest({url,data,header,method}) {
  url = mappingUrl(url);

  if (data.method) {
    method = data.method
    delete data.method
  }

  let token = getCacheData('token')
  if (token) {
    header = {...header,token}
  }

  const params = {url,data,header,method}
  return params
}

export function get({url,data,header}) {
  // TODO:判断网络情况 是否网络连接，超时情况等
  let params = bindRequest({url,data,header,method:'get'})
  
  return new Promise((resolve,reject)=>{
    Taro.request(params)
    .then(res=>{
    // TODO:用户权限验证
    // 收到响应后判断状态码
    console.log('请求成功',res);
    resolve(res)
    })
    .catch(err=>reject(err))
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