import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import Animated,{ useSharedValue, useAnimatedStyle, withSpring, Easing } from 'react-native-reanimated'
  
const search = () => {

  const animatedValue = useSharedValue(0);

  const useAnimate = useAnimatedStyle(() => {
    return {
      transform: [{translateX: animatedValue.value}]
    }
})

  return (
    <SafeAreaView style={[{flex:1, justifyContent:'center', alignItems:"center"}]}>
      <Animated.View style={[{borderWidth: 2, borderRadius:10, height: 80, width:80, } , useAnimate]}>
        <Text>Animate</Text>
      </Animated.View>
        <Button title='Move' onPress={() => withSpring(animatedValue.value=Math.random() * 255, {
          duration: 20000,
        })} />
    </SafeAreaView>
  )
}

export default search