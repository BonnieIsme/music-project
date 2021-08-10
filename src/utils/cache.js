/**
 * 封装缓存
 */

import Taro from '@tarojs/taro'


/**
 * 获取缓存中的数据
 * @param {*} key 
 * @returns 
 */
export function getCacheData(key) {
  return Taro.getStorageSync(key)
}

/**
 * 设置缓存数据
 * @param {*} key 
 * @param {*} val 
 */
export function setCacheData(key,val) {
  Taro.setStorageSync(key,val)
}

export function deleteCacheData(key) {
  Taro.removeStorageSync(key)
}

export function clearCacheData() {
  Taro.clearStorageSync()
}

export function hasCacheData(key) {
  return !! Taro.getStorageSync(key)
}

/**
 * 批量删除关键字中含key的缓存数据
 * @param {*} key 
 */
export function batchDelCacheData(key) {
  try {
    let cacheData = Taro.getStorageSync()
    cacheData.keys.forEach(item=>{
    if (item.includes(key)) {
      Taro.removeStorageSync(key)
    }
  })
  } catch (error) {
    console.log('you have an error',error);
    
  }
}

/**
 * 设置自动过期数据
 * @param {*} expiredAt 0为没过期
 */
export function setAutoExpiredCache({key,val,expiredAt=0}) {
  Taro.setStorageSync(key,{
    val,
    expiredAt
  })
  
}

/**
 * 获取自动过期数据
 * @param {*} key 
 */
export function getAutoExpiredCache(key) {
  let data = Taro.getStorageSync(key)
  if (data.expiredAt > new Date().now() || data.expiredAt === 0) {
    // 没有过期
    return data
  }else{
    Taro.removeStorageSync(key)
    return undefined
  }
  
}