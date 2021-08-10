// 判断是否是 tabbar 页面
import Taro from '@tarojs/taro'

export function isTabbarPage() {
  let pages = Taro.getCurrentPages()
  if (!pages || !pages[pages.length-1]) {
    return true
  }

  let currentPage = pages[pages.length - 1]
  if (currentPage.indexOf('package') === -1) {
    return true
  }else{
    return false
  }
}

