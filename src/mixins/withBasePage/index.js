/* eslint-disable import/no-duplicates */
/* eslint-disable no-shadow */

import {View} from '@tarojs/components'
import { useState } from 'react';

// 高阶组件 HOC

function Index(props) {
  // let [name,setName] = useState(prop.name)
  const {name} = props
  return (
    <View>my name is : {name}</View>
  )
  
}

// -强化 props
// desc：承接上层props，混入自己的props

// --有状态
// function classHOC(WrapComponent) {
//   return class Index extends Component {
//     constructor(props) {
//       super(props);
//       this.state = { 
//         name:'bonnie'
//        }
//     }
//     render() { 
//       return ( 
//         <WrapComponent {...this.state} {...this.props}></WrapComponent>
//        );
//     }
//   }
// }

// --无状态
function classHOC(WrapComponent) {
  return function Index (props) {
    // console.log('props',props);
    // eslint-disable-next-line no-unused-vars
    const [state,setState]  = useState({name:'sean'})
    return <WrapComponent {...state} {...props}></WrapComponent>
  }
  
}

export const NewIndex = classHOC(Index)

// -控制渲染
// --动态渲染 在外层控制当前组件是否渲染，这种情况应用于，权限隔离，懒加载，延时加载 等
// 进阶，实现一个懒加载功能的 HOC，可以实现组件的分片渲染，不至于一次渲染大量组件造成白屏效果





