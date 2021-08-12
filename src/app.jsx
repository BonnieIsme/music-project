import React, { Component } from 'react';
import { Provider } from 'react-redux'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components';



import './app.scss'


// const store = configStore()

class App extends Component {
  componentDidMount () {
    
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  config = {
    pages: [
      'pages/find/index',
      'pages/cloud/index',
      'pages/custom/index',
      'pages/profile/index',
      'pages/sing/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '云音乐',
      navigationBarTextStyle: 'black'
    },
    tabBar:{
      list:[
        {
          'iconPath':'assets/icons/tabBar/find.png',
          'selectedIconPath':'assets/icons/tabBar/find-active.png',
          pagePath:'pages/find/index',
          text:'发现'
        },
        {
          'iconPath':'assets/icons/tabBar/custom.png',
          'selectedIconPath':'assets/icons/tabBar/custom-active.png',
          pagePath:'pages/custom/index',
          text:'播客'
        },
        {
          'iconPath':'assets/icons/tabBar/profile.png',
          'selectedIconPath':'assets/icons/tabBar/profile-active.png',
          pagePath:'pages/profile/index',
          text:'我的'
        },
        {
          'iconPath':'assets/icons/tabBar/sing.png',
          'selectedIconPath':'assets/icons/tabBar/sing-active.png',
          pagePath:'pages/sing/index',
          text:'k歌'
        },
        {
          'iconPath':'assets/icons/tabBar/cloud.png',
          'selectedIconPath':'assets/icons/tabBar/cloud-active.png',
          pagePath:'pages/cloud/index',
          text:'云村'
        }
      ],
      'color': '#bfbfbf',
      'selectedColor':'#d81e06',
      'borderStyle':'white',
      'backgroundColor':'#fff'
    },
    subPackages:[
      {
        root:'packageLogin',
        pages:['pages/login/authorize/index','pages/login/phone/index','pages/login/email/index']
      }
    ]
  }

  // 设置实时日志
  globalData = {
    logger : Taro.getRealtimeLogManager()
  }
  
  isTabbarPage = ()=> {
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

  

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      // <Provider store={store}>
      <View>
        {this.props.children}
      </View>
        
      // </Provider>
    )
  }
}

export default App