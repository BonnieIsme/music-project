/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-key */

import { Component } from 'react';
import { View,Swiper,SwiperItem } from '@tarojs/components';
import './index.scss'

class HomeBanners extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      current:0,
      banners:[]
     }
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
    const { data } = this.props
    return ( 
      <View className='home-swiper'>
        <Swiper 
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          autoplay
          onChange={this.handleChangeCurrent}
        >
          {data && data.length > 0 &&
            data.map(item=>{
              return <SwiperItem>
                <View className='swiper-item'>
                  <View className='banner-img' style={{backgroundImage:`url(${item.pic})`}} onClick={this.handleImgClick} data-data={item}>
                    {/* <Image src={item.pic}></Image> */}
                  </View>
                  <View className='type-title' style={{backgroundColor:item.titleColor === 'red' ? '#d81e06' : '#1296db'}}>{item.typeTitle}</View>
                </View>
              </SwiperItem>
            })
          }
        </Swiper>
        <View className='swiper-indicator'>
          { data && data.length > 1 && 
            data.map((item,index)=>{
              return <View className='swiper-dot' key={index} style={{backgroundColor:index == this.state.current ? '#FFF' : '#ECECEA'}}></View>
            })}
        </View>
      </View>
     );
  }
}
 
export default HomeBanners;