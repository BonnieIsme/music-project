import React, { Component } from 'react';
import { View } from '@tarojs/components';
import IconText from '@components/IconText';
import './index.scss'

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = { 

     }
  }
  render() { 
    const {
      text,
      icon,
      textStyle,
      iconStyle,
      boxStyle,
      iconLeft,
      imageUrl,
      description
    } = this.props
    return ( 
      <View className="square-box">
        <View className="square-img" style={{backgroundImage:`url(${imageUrl})`}}>
          <IconText boxStyle={{position:'absolute',top:'0',right:'0',...boxStyle}} text={text} icon={icon} textStyle={textStyle} iconStyle={iconStyle} left={iconLeft}></IconText>
        </View>
        <View className="square-text">{description}</View>
      </View>
     );
  }
}
 
export default Item;