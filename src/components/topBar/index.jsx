import { Component } from 'react';
import { View, Icon } from '@tarojs/components';
import './index.scss'

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
     }
  }

  handleLeft = (e) => {
    let left = this.props.handleLeft
    if (left) {
      left(e)
    }else{
      console.log('no left handler');
    }
  }

  handleCenter = (e) => {
    let center = this.props.handlecenter
    if (center) {
      center(e)
    }else{
      console.log('no center handler');
    }
  }

  handleRight = (e) => {
    let right = this.props.handleright
    if (right) {
      right(e)
    }else{
      console.log('no right handler');
    }
  }


  render() { 
    return (  
      <View className='top-bar'>
        <View onClick={this.handleLeft}>
          <Icon className='iconfont icon-menu' style={{fontSize:'24px'}}></Icon>
        </View>
        {this.props.children}
        <View onClick={this.handleRight}>
          <Icon className='iconfont icon-find-micro' style={{fontSize:'24px'}}></Icon>
        </View>
        
      </View>

    );
  }
}
 
export default TopBar;