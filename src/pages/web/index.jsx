import { Component } from 'react';
import { WebView,View} from '@tarojs/components';

class Web extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    console.log('web index');
    return ( 
      <View>
        <WebView src='https://www.baidu.com/'></WebView>
      </View>
     );
  }
}
 
export default Web;