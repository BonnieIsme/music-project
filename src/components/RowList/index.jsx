import React, { Component } from 'react';
import { View } from '@tarojs/components';
import './index.scss'

export default function RowList(props) {
  const {
    children
  } = props

  const handleLeft = ()=>{
    const { handleLeft } = props
    if (handleLeft) {
      handleLeft()
    }
  }

  const handleRight = () => {
    const {handleRight} = props
    if (handleRight) {
      handleRight()
    }
  }

  return (
    <View className='list'>
      <View className="list-top">
        <View className='left' onClick={handleLeft}>
          {children[0]}
        </View>
        <View className='right' onClick={handleRight}>
          {children[1]}
        </View>
      </View>
      {children[2]}
    </View>
  )
}
