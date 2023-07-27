import { View, Text, Button, SafeAreaView } from 'react-native'
import Animated, { useAnimatedStyle } from 'react-native-reanimated'
import React from 'react'
import { useSharedValue } from 'react-native-reanimated'

const search = () => {

  const toBeVal = useSharedValue(0)

  const scrollHander = ((event) => {
    toBeVal.value = event.offset.y
  })

  const animatedVal = useAnimatedStyle(() => {
  return {
    transform : [
      {
        translateY: toBeVal.value
      }
    ]
  }});

  const translationY = useSharedValue(0);
  return (
    <SafeAreaView style={{flex:1}}>
      <Animated.View style={[{borderWidth: 1, padding:100}, animatedVal]}>
        <Animated.ScrollView onSCroll ={scrollHander}>
          <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus corporis magni repudiandae ex voluptatum eius ab sapiente voluptas quis, dolores facilis fugit, itaque aut est enim! Excepturi dolore ut delectus.</Text>
        </Animated.ScrollView>
      </Animated.View>
    </SafeAreaView>
  )
  
}

export default search;


