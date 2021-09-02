import React, { Component } from 'react';
import { View,Icon,Text } from '@tarojs/components';
import './index.scss'
export default function IconText(props) {
  const { 
    icon,
    iconColor = '#fff',
    iconSize = '18px',
    iconStyle,
    text,
    textColor = '#fff',
    textSize = '12px',
    textStyle,
    boxStyle,
    left = true
  } = props

  return (
    <View className="text-box" style={boxStyle}>
      { left &&
        <Icon 
        className={`iconfont text-icon ${icon}`}
        style={{fontSize:iconSize,color:iconColor, ...iconStyle}}
        ></Icon>
      }
      <Text className='text' style={{color:textColor,fontSize:textSize,lineHeight:textSize ,...textStyle}}>{text}</Text>
      { !left &&
        <Icon 
        className={`iconfont text-icon ${icon}`}
        style={{fontSize:iconSize,color:iconColor, ...iconStyle}}
        ></Icon>
      }
    </View>
  )
  
}