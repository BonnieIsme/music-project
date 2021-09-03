import { useMemo } from "react";


// 定制节流渲染，定制，即传入变量
// For: 组件的某个属性值发生改变，组件才重新渲染
export function ThrottleHOC(rule) {
  // eslint-disable-next-line no-shadow
  return function (Component) {
    return function (props) {
      let dep = rule(props)
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const RenderElement = useMemo(()=><Component {...props}></Component>,[ dep ])
      return RenderElement
    }
  }
}














// // 节流渲染
// function ThrottleHOC(Component) {
//   return function Index(props) {
//     const {num} = props;
//     const RenderElement = useMemo(()=><Component {...props}></Component>,[num])
//     return RenderElement
//   }
// }

// // class Index extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {  }
// //   }
// //   render() { 
// //     return ( 
// //       <View>props: {this.props}</View>
// //     );
// //   }
// // }

// function Index(props) {
//   console.log(`当前组件是否渲染`,props)
//   return (
//     <View>test</View>
//   )
// }

// let NewIndex = ThrottleHOC(Index)

// export function TestItems() {
//   let [num,setNum] = useState(0)
//   let [num1,setNum1] = useState(0)
//   return (
//     <View>
//      <NewIndex num={num} num1={num1}></NewIndex>
//      <Button onClick={()=>setNum(num+1)}>num+1</Button>
//      <Button onClick={()=>setNum1(num1+1)}>num1+1</Button>
//     </View>


//   )
// }
 
// 定制渲染 就是多了个变量
// function ThrottleHOC(rule) {
//   return function (Component) {
//     return function (props) {
//       let dep = rule(props)
//       const RenderElement = useMemo(()=><Component {...props}></Component>,[dep])
//       return RenderElement
//     }
//   }
// }

 
// @ThrottleHOC((props)=>props['num'])
// class NewIndex extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {  }
//   }
//   render() { 
//     console.log('props',this.props);
//     return ( 
//       <View>test</View>
//      );
//   }
// }
 
// export function TestItems(props) {
//   let [num,setNum] = useState(0)
//   let [num1,setNum1] = useState(0)
 
//   return (
//     <View>
//       <NewIndex num={num} num1={num1}></NewIndex>
//       <Button onClick={()=>setNum(num+1)}>num</Button>
//       <Button onClick={()=>setNum1(num1+1)}>num1</Button>
//     </View>
//   )
  
// }