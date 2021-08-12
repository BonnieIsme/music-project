import React, { Component } from 'react';
import {View,Image} from '@tarojs/components'
import './index.scss'


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <View className='login-page'>
        <Image 
        src="../../../../assets/images/cloud-logo.png"
        style={{
          width:'40vw',
          height:'40vw'
        }}
        ></Image>
        <View className='login-box'>
          <View className='login-btn' onClick={()=>wx.navigateTo({url:'/packageLogin/pages/login/phone/index'})}>
          手机登录
        </View>
        <View className='login-btn' onClick={()=>wx.navigateTo({url:'/packageLogin/pages/login/email/index'})}>
          邮箱登录
        </View>
        </View>
        


      </View>

     );
  }
}
 
export default Login;