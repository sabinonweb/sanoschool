import { View, Text, Button, SafeAreaView } from 'react-native'
import React from 'react'
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated'

const search = () => {

  const valShare = useSharedValue(100);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(valShare.value , {
        duration: 200, easing:Easing.bezier(1, 2, 1, 0.5)
      })
    }
  })

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
    <Animated.View style={[{borderWidth:0.1, height:60, width:60, backgroundColor:"steelblue", marginBottom:20, borderRadius:20}, animatedStyle]}/>
    <Button title='Press' onPress={() => valShare.value = Math.random()}/>
  </View>
  )
}

export default search