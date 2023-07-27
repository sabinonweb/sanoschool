import { View, Text, Button } from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

const search = () => {

  const value = useSharedValue(0)

  const animateStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(value.value * 255)
        }
      ]
    }
  })

  const customAnimateStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(value.value * 255 , {
            damping: 5,
            stiffness:15
          })
        }
      ]
    }
  })

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Animated.View style={[{borderWidth:0.1, height:60, width:60, backgroundColor:"steelblue", marginBottom:20, borderRadius:20}, animateStyle]}/>
      <Animated.View style={[{borderWidth:0.1, height:60, width:60, backgroundColor:"steelblue", borderRadius:20}, customAnimateStyle]}/>
      <Button title='Press' onPress={() => value.value = Math.random()}/>
    </View>
  )
}

export default search