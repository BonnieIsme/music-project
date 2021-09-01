import React, { Component } from 'react';
import  ReactDOM  from 'react-dom';
import { View } from '@tarojs/components';
import PropTypes from 'prop-types'  // 类型检测工具
import './index.scss'
import { useState } from 'react';
import { useEffect } from 'react';


/**
 * Drawer 抽屉组件
 * @param {visible} bool 抽屉是否可见
 * @param {closable} bool 是否显示右上角的关闭按钮
 * @param {destroyOnClose} bool 关闭时销毁里面的子元素
 * @param {getContainer} HTMLElement 指定 Drawer 挂载的 HTML 节点, false 为挂载在当前 dom
 * @param {maskClosable} bool 点击蒙层是否允许关闭抽屉
 * @param {mask} bool 是否展示遮罩
 * @param {drawerStyle} object 用来设置抽屉弹出层样式
 * @param {width} number|string 弹出层宽度
 * @param {zIndex} number 弹出层层级
 * @param {placement} string 抽屉方向
 * @param {onClose} string 点击关闭时的回调
 */

 Drawer.propTypes = {
  visible: PropTypes.bool,
  closable: PropTypes.bool, 
  destroyOnClose: PropTypes.bool, 
  getContainer: PropTypes.element, 
  maskClosable: PropTypes.bool, 
  mask: PropTypes.bool, 
  drawerStyle: PropTypes.object, 
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  zIndex: PropTypes.number,
  placement: PropTypes.string, 
  onClose: PropTypes.func
}

export default function Drawer(props) {
  const {
    show = false,
    closable = false,
    destroyOnClose, // 清除组件缓存，常用场景：输入文本，当抽屉内容是文本时就很有用
    getContainer = document.body,
    maskClosable = true,
    mask = true,
    drawerStyle,
    width,
    zIndex = '10',
    placement = 'left',
    onClose,
    children
  } = props

  // let [visible,setVisible] = useState(props.show)
  // let [isDesChild,setIsDesChild] = useState(false) // 是否要销毁子组件

  const handleClose = () => {
    onClose && onClose()
  }

  const node = (
    <View className='drawer-wrapper'
          style={{
            width:'100vw',
            zIndex:zIndex,
            position:'absolute',
            left:show ? '0' :'-100vw'
            
          }}>
      { !!mask && show && <View className="drawer-mask" onClick={maskClosable ? handleClose : null}></View> }
      <View className="drawer-content" style={{...drawerStyle,width: width, [placement]:show?'0':`-${width}`,padding: show ? '12px' : '0'}}>
        { children}
        { !!closable && 
          <View className='close-btn' onClick={handleClose}>X</View>
        }
      </View>
    </View>
  )

  return  node
}