import { View,Image } from '@tarojs/components';
import './index.scss'


function Item(props) {
  const { data } = props

  const handleClick = () => {
    console.log('点击了圆',data.name);
  }

  return (
    <View className='circle-box' onClick={handleClick}>
      <View className='circle-img'>
        <Image src={data.iconUrl}></Image>
      </View>
      <View className='circle-text'>{data.name}</View>
    </View>
  )
}

export default Item