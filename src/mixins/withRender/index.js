/* eslint-disable import/no-duplicates */
/* eslint-disable no-shadow */
import  { Component } from 'react';
import {useState,useEffect} from 'react';
import {View} from '@tarojs/components'

// HOC 组件分片渲染，用于分片渲染页面————————消除白屏效果
let hasFirstRender = false;
let renderQueue = []

// 控制组件渲染——其实就是控制组件显示
const changeRenter = () => {
  let render = renderQueue.shift()
  if(!render) return;
  setTimeout(() => {
    render()
  }, 300);
}

export function renderHOC(WrapComponent) {
  return function Index(props) {
    let [isRender,setRender] = useState(false)

    useEffect(()=>{
      renderQueue.push(()=>{
        setRender(true)
      })
      if (!hasFirstRender) {
        hasFirstRender = true
        changeRenter()
      }
    })

    return isRender ? <WrapComponent changeRenter={changeRenter} {...props}></WrapComponent> : <View className='lazy-box'>等会儿</View>

  }
}

// 业务组件
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentDidMount(){
    const {changeRenter, name} = this.props
    changeRenter()
    console.log(`${name} 渲染`);
  }

  render() { 
    
    return ( 
      <View className='test'>test {this.props.name}</View>
     );
  }
}

export const Item = renderHOC(Index)