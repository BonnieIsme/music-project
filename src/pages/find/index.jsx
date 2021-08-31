import { View,Icon,Text } from '@tarojs/components';
import React, { Component } from 'react';
import { getFindPage } from '../../api/find';
import {getCacheData,setCacheData} from '../../utils/cache'
import Taro from '@tarojs/taro';
import TopBar from '@components/topBar';
import './index.scss'

class FindPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      show:false
     }
  }
  
  componentDidMount(){
    if (!getCacheData('userInfo')) {
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

  handleSearch = ()=>{
    console.log('跳转到搜索列表');
  }

  handleRight = () => {
    console.log('处理右边');
  }

  render() { 



    return ( 
      <View className="container find">
        <TopBar handleRight={this.handleRight}>
          <View className='find-search' onClick={this.handleSearch}>
            <Icon className='iconfont icon-search' style={{fontSize:'16px',display:'flex',paddingRight:'10px'}}></Icon>
            <Text Text>大家都在听</Text>
            <Text style={{paddingLeft:'10px'}}>掏耳朵</Text>
          </View>
        </TopBar>
      </View>
     );
  }
}
 
export default FindPage;