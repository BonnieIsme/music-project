import { View } from '@tarojs/components';
import './index.scss'

export default function RowList(props) {
  const {
    children
  } = props

  const handleLeft = ()=>{
    // eslint-disable-next-line no-shadow
    const { handleLeft } = props
    if (handleLeft) {
      handleLeft()
    }
  }

  const handleRight = () => {
    // eslint-disable-next-line no-shadow
    const {handleRight} = props
    if (handleRight) {
      handleRight()
    }
  }

  return (
    <View className='list'>
      <View className='list-top'>
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
