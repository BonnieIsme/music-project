/* eslint-disable react/jsx-key */
/* eslint-disable import/first */
import { View,Icon,Text } from '@tarojs/components';
import { Component } from 'react';
import api from '@api/index'
import {getCacheData} from '../../utils/cache'
import Drawer from '@components/drawer';
import Taro from '@tarojs/taro';
import CircleItem from '@components/circleItem';
import HomeBanners from './components/banners';
import Recommand from './components/recommand';



import TopBar from '@components/topBar';
import './index.scss'


class FindPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      show:false,
      pageMsg:null,
      home_banners:[],
      circles:[],
      blockCodes:[], // 版块code
      blocks:{}, // 页面版块
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
       this.initFindPage();
       
    }
  }

  initFindPage = ()=>{
    // 获取发现首页信息
    let _this = this;
    api.getFindPage().then(res=>{
      console.log('最初res：',res.data.data)
      _this.setState({
        pageMsg:res.data.data,
        home_banners:res.data.data.blocks[0].extInfo.banners,
      })
      _this.initPageBlocks()
    })
    api.getFindCircle().then(res=>{
      _this.setState({
        circles:res.data.data
      })
      console.log('ddd',_this.state.circles);
    })
 
    console.log('初始化首页信息');

  }

  initPageBlocks = () =>{
    let temp = this.state.pageMsg
    for(let item of temp.blocks){
      // eslint-disable-next-line react/no-direct-mutation-state
      this.state.blocks[item.blockCode] = item
    }
    this.setState({
      blockCodes : Object.keys(this.state.blocks) || []
    })
  }

  showComp = (name,data) => {
    
    switch (name) {
      // 推荐歌单
      case "HOMEPAGE_BLOCK_PLAYLIST_RCMD":
        // console.log('hhhhhh',data);
        return <Recommand  data={data}></Recommand>
      
    
      default:
        break;
    }
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

  




  render() { 
    const {
      circles,
      blocks,
      blockCodes
    } = this.state
    console.log('qqq',blocks);

    return ( 
      <View className='container find'>
        <Drawer width='280px' show={this.state.show} onClose={this.handleLeft}></Drawer>
        <TopBar 
          handleLeft={this.handleLeft}
          handleRight={this.handleRight}
        >
          <View className='find-search' onClick={this.handleSearch}>
            <Icon className='iconfont icon-search' style={{fontSize:'16px',display:'flex',paddingRight:'10px'}}></Icon>
            <Text Text>大家都在听</Text>
            <Text style={{paddingLeft:'10px'}}>掏耳朵{this.state.show}</Text>
          </View>
        </TopBar>
        {/* 轮播图 */}
        <HomeBanners data={this.state.home_banners}></HomeBanners>

        <View className='circle-banner'>
          {circles && 
          circles.map(item=><CircleItem data={item}></CircleItem>)}
        </View>
        { 
          blockCodes  && 
          blockCodes.map(item=>{
            return this.showComp(item,blocks[item])
          })

        }
      
        
        

      </View>
        

     );
  }
}
 
export default FindPage;