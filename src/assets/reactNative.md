# react-native 基础总结

### Dimensions
```javascript
const {width,height} = Dimensions.get('window') 
// 尽管尺寸信息立即就可用，但它可能会在将来被修改（譬如设备的方向改变），
// 所以基于这些常量的渲染逻辑和样式应当每次 render 之后都调用此函数，而不是将对应的值保存下来。
```
### DeviceEventEmitter
```javascript
import { DeviceEventEmitter } from 'react-native';

componentDidMount() {
  DeviceEventEmitter.addListener('keyboardWillShow', (e: Event) => {
    // handle event.
  });
}
componentWillUnmount() {
  // When you want to stop listening to new events, simply call .remove() on the subscription
  this.subscription.remove();
}

import { DeviceEventEmitter } from 'react-native';
startEmit() {
    //准备值，发监听
    const message = '监听';
    DeviceEventEmitter.emit('通知名称', message);
}
```
### TouchableOpacity
-用于使视图正确响应触摸的包装器。按下时，包裹视图的不透明度会降低，使其变暗。

-通过将子项包装在Animated.View中来控制不透明度，Animated.View将添加到视图层次结构中。请注意，这可能会影响布局。