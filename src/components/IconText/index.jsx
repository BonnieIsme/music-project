import { View,Icon } from '@tarojs/components';
import { useState } from 'react';
import './index.scss'

export default function IconText(props) {
  const { 
    icon,
    text,
    left = true,
    type = 'whiteMiddle'
  } = props

  // eslint-disable-next-line no-unused-vars
  const [btnTypes, setBtnTypes] = useState({
    'whiteMiddle': {
      textStyle: {
        textColor: '#000',
        textSize: '12px'
      },
      iconStyle: {
        iconColor: '#000',
        iconSize: '12px'
      },
      boxStyle: {
        backgroundColor:'#fff'
      }
      
    },
    'opacityTiny': {
      textStyle: {
        textColor: '#fff',
        textSize: '10px'
      },
      iconStyle: {
        iconColor: '#fff',
        iconSize: '10px'
      },
      boxStyle: {
        backgroundColor: 'rgba($color: #fff, $alpha: 0.8)',
        opacity: '0.8',
        border: 'none'
      }
    }
  })

  return (
    <View className='text-box' style={{...btnTypes[type].boxStyle}}>
      { left &&
        <Icon 
          className={`iconfont text-icon ${icon}`}
          style={{...btnTypes[type].iconStyle}}
        ></Icon>
      }
      <View className='text' style={{...btnTypes[type].textStyle}}>{text}</View>
      { !left &&
        <Icon 
          className={`iconfont text-icon ${icon}`}
          style={{...btnTypes[type].iconStyle}}
        ></Icon>
      }
    </View>
  )
  
}