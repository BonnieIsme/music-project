import { View,Icon,Text,Swiper,SwiperItem,Image } from '@tarojs/components';
import React, { Component } from 'react';
import api from '@api/index'
import {getCacheData,setCacheData} from '../../utils/cache'
import Drawer from '@components/drawer';
import Taro from '@tarojs/taro';


import TopBar from '@components/topBar';
import './index.scss'

class FindPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      show:false,
      pageMsg:{},
      home_banners:[],
      current:0 ,// 当前轮播index,
      circles:[]
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
    let _this = this;
    api.getFindPage().then(res=>{
      console.log('find-page',res.data.data.blocks[0].extInfo.banners);
      _this.setState({
        pageMsg:res.data.data,
        home_banners:res.data.data.blocks[0].extInfo.banners
      })
    })
    api.getFindCircle().then(res=>{
    
      _this.setState({
        circles:res.data.data
      })
    })
 
    console.log('初始化首页信息');

  }

  handleLeft = () =>{
    this.setState((preState)=>{
      return {
        show:!preState.show
      }
    })
    console.log('show-drawer',this.state.show);
  }

  handleSearch = ()=>{
    console.log('跳转到搜索列表');
  }

  handleRight = () => {
    console.log('处理右边');
  }

  handleImgClick = (e) => {
    console.log('点击轮播图片',e.currentTarget.dataset);
  }

  handleChangeCurrent = (e) => {
    e.stopPropagation()
    this.setState({
      current:e.detail.current
    })
  }


  render() { 
    const {
      home_banners,
      current,
      circles
    } = this.state

    return ( 
      <View className="container find">
        <Drawer width='280px' show={this.state.show} onClose={this.handleLeft}></Drawer>
        <TopBar 
        handleLeft={this.handleLeft}
        handleRight={this.handleRight}>
          <View className='find-search' onClick={this.handleSearch}>
            <Icon className='iconfont icon-search' style={{fontSize:'16px',display:'flex',paddingRight:'10px'}}></Icon>
            <Text Text>大家都在听</Text>
            <Text style={{paddingLeft:'10px'}}>掏耳朵{this.state.show}</Text>
          </View>
        </TopBar>
        {/* 轮播图 */}
        <Swiper 
        className='home-swiper'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular
        autoplay
        onChange={this.handleChangeCurrent}
        >
          {home_banners &&
            home_banners.map(item=>{
              return <SwiperItem>
                <View className="swiper-item">
                  <View className="banner-img" style={{backgroundImage:`url(${item.pic})`}} onClick={this.handleImgClick} data-data={item}></View>
                  <View className="type-title" style={{backgroundColor:item.titleColor === 'red' ? '#d81e06' : '#1296db'}}>{item.typeTitle}</View>
                </View>
              </SwiperItem>
            })
          }
        </Swiper>
        <View className="swiper-indicator">
          { home_banners && home_banners.length > 1 && 
            home_banners.map((item,index)=>{
              return <View className="swiper-dot" key={index} style={{backgroundColor:index == current ? '#FFF' : '#ECECEA'}}></View>
            })}
        </View>
        {/* 圆形按钮列表 */}
        
      </View>
        

     );
  }
}
 
export default FindPage;