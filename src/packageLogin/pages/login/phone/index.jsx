import React, { Component } from 'react';
import { View,Form, Icon,Input, Button,Text } from '@tarojs/components';
import './index.scss'
import api from '@api/index'
import { setCacheData } from '@utils/cache';
import { checkNumber } from '@utils/common';
import Taro from '@tarojs/taro';

class PhoneLogin extends Component {
  constructor(props) {
    super(props);
    this.state = { 
     }
  }


  handleSubmit = (e)=>{
    const phone = e.detail.value.phone;
    const password = e.detail.value.password;
    // console.log('submit',phone,password);
    if (checkNumber(phone) && password.length >= 6) {

    api.loginByPhone({phone,password}).then(res=>{
      // console.log(res.data);
      // console.log(res.data.token);
      // 登录成功，缓存数据，并跳转页面
      setCacheData('token',res.data.token)
      setCacheData('account',res.data.account)
      setCacheData('bindings',res.data.bindings)
      setCacheData('cookies',res.data.cookie)
      setCacheData('loginType',res.data.loginType)
      setCacheData('userInfo',res.data.profile)

      Taro.showToast({
        title:'登录成功',
        icon:'success',
        duration:2000,
        success:()=>{
          Taro.reLaunch({url:'/pages/find/index'})
        }
      })
    }).catch(err=>{
      Taro.showToast({
        title:'登录失败',
        icon:'error'
      })
      console.log(err);
    })
      
    }else{
      Taro.showToast({
        title:'账号或密码有误',
        icon:'error'
      })
    }


  }

  render() { 
    return ( 
      <View className='phone-login'>

        <Form  className='login-form' onSubmit={this.handleSubmit}>
          
          <View className='input-box'>
            <Icon className='iconfont icon-phone' size='16'></Icon>
            <Input 
            type='text' 
            name='phone' 
            className='input-content'
            value='' 
            // maxlength='11'
            placeholder='客官的手机号码是？'
            placeholderStyle='color:rgb(168, 166, 166)'
              // confirmType='next'
            focus={true}
            ></Input>
          </View>

          <View className='input-box'>
            <Icon className='iconfont icon-password' size='16'></Icon>
            <Input 
            type='text' 
            name='password' 
            password={true}
            className='input-content'
            value='' 
            placeholder='客官的密码是？'
            placeholderStyle='color:rgb(168, 166, 166)'
              // confirmType='send'
            ></Input>
          </View>

          <View className='bottom-tips'>
            <Text>忘记密码？</Text>
            <Text>去注册吧！</Text>
          </View>

          <View className='btn-groups'>
            <Button formType='reset' className='reset-btn'>重置</Button>
            <Button formType='submit' className='login-submit-btn'>登录</Button>
          </View>
           
          
        </Form>
      </View>
     );
  }
}
 
export default PhoneLogin;