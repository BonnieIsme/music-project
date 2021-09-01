import {get} from '@utils/request'


export default {
  // 获取首页页面数据
  getFindPage(data) {
    return get({url:'/homepage/block/page',data})
  },

  // 获取首页圆形图标
  getFindCircle() {
    return get({url:'/homepage/dragon/ball'})
  }
}