import { View } from '@tarojs/components';
import React, { Component } from 'react';
import { getFindPage } from '../../api/find';
import {getCacheData,setCacheData} from '../../utils/cache'
import Taro from '@tarojs/taro';

class FindPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  
  componentDidMount(){
    let userInfo = getCacheData('userInfo');
    if (!userInfo) {
      Taro.showToast({
        title:'请先登录',
        icon:'error',
      }).then(()=>{
        Taro.reLaunch({
          url:'/packageLogin/pages/login/authorize/index'
        })
      })
    }else{
      // 若有用户信息
      this.initFindPage()

    }
  }

  initFindPage = ()=>{
    // 获取发现首页信息
    // getFindPage()
    console.log('初始化首页信息');

  }

  render() { 
    return ( 
      <View>hello</View>
     );
  }
}
 
export default FindPage;