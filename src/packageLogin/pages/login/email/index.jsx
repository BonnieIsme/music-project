import React, { Component } from 'react';
import { View,Form, Icon,Input, Button,Text } from '@tarojs/components';
import './index.scss'

class EmailLogin extends Component {
  constructor(props) {
    super(props);
    this.state = { 
     }
  }


  handleSubmit = (e)=>{
    console.log('submit',e.detail);
  }

  render() { 
    return ( 
      <View className='email-login'>

        <Form  className='login-form' onSubmit={this.handleSubmit}>
          
          <View className='input-box'>
            <Icon className='iconfont icon-email' size='16'></Icon>
            <Input 
            type='text' 
            name='email' 
            className='input-content'
            value='' 
            placeholder='客官的电子邮箱是？'
            placeholderStyle='color:rgb(168, 166, 166)'
              // confirmType='next'
            focus={true}
            ></Input>
          </View>

          <View className='input-box'>
            <Icon className='iconfont icon-password' size='16'></Icon>
            <Input 
            type='safe-password' 
            name='password' 
            className='input-content'
            value='' 
            placeholder='客官的密码是？'
            placeholderStyle='color:rgb(168, 166, 166)'
              // confirmType='send'
            focus={true}
            ></Input>
          </View>

          <View className='bottom-tips'>
            <Text>忘记密码？</Text>
            <Text>去注册吧！</Text>
          </View>

          <View className='btn-groups'>
            <Button formType='submit' className='login-submit-btn'>登录</Button>
            <Button formType='reset' className='reset-btn'>重置</Button>
          </View>
           
          
        </Form>
      </View>
     );
  }
}
 
export default EmailLogin;