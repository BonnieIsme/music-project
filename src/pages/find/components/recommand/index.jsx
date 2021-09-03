/* eslint-disable react/jsx-key */
import RowList from '@components/RowList';
import IconText from '@components/IconText';
import { Component } from 'react';
import { View } from '@tarojs/components';
import { formatNumber } from '@utils/common';
import './index.scss'

class Recommand extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const { data } = this.props
    console.log('recommand---data',data);

    const subTitle = data.uiElement && data.uiElement.subTitle.title || ""
    const button = data.uiElement && data.uiElement.button.text || {}

    // console.log('sss',subTitle,button);

    return ( 
      <RowList>
        <View>{subTitle}</View>
        <View>
          <IconText
            left={false}
            icon='icon-right'
            text={button}
            textStyle={{
              color: '#000',
              fontSize:'12px'
            }}
            iconStyle={{
              color: '#000',
              fontSize:'12px'
            }}
            boxStyle={{ backgroundColor: '#fff', border: '1px solid #bfbfbf', padding: '2px 4px' }}
          ></IconText>
        </View>
        <View className='list-content'>
          {
            data.creatives &&
            data.creatives.map((item)=>{
              return  <View className='square-box'>
                <View className='square-img' style={{backgroundImage:`url(${item.uiElement.image.imageUrl})`}}>
                  <IconText
                    boxStyle={{ position: 'absolute', top: '0', right: '0', padding: '5px',width:'45px' }}
                    text={formatNumber(item.resources[0].resourceExtInfo.playCount)}
                    icon='icon-play-outline'
                    textStyle={{
                      fontSize:'10px',
                      lineHeight: '10px',
                      color:'#fff'
                    }}
                    iconStyle={{
                      fontSize: '10px',
                      color:'#fff'
                    }}
                  ></IconText>
                </View>
                <View className='square-text'>{item.uiElement.mainTitle.title}</View>
              </View>
            })
          }
        </View>
      </RowList>
     );
  }
}
 
export default Recommand;