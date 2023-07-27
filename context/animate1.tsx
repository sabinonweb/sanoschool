import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import Animated,{ useSharedValue,  useAnimatedStyle, withTiming } from 'react-native-reanimated'


const search = () => {
  
  const valueAnimation = useSharedValue(0.5);
  const handelOnPress = () => {
    valueAnimation: valueAnimation.value
  }
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(valueAnimation.value,{ duration: 300})
    }
  })

  return (
  <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center'}}>
  <Animated.View style={[{borderWidth: 2, width:80, height: 80}, animatedStyle]}/>
  <Button title='Change' onPress={handelOnPress}/>
  </SafeAreaView>
  )
}

export default search