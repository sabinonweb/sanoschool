import { View, Text, Pressable } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Tabs } from 'expo-router'
import { AntDesign, EvilIcons, Feather, Ionicons } from '@expo/vector-icons'
import { Route } from '@react-navigation/native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

const tabData = [
  {
    name: "home",
    title: "Home",
    icon: "home"
  },
  {
    name: "chat",
    title: "Chat",
    icon: "message1"
  },
  {
    name: "search",
    title: "Search",
    icon: "search1"
  },
  {
    name: "order",
    title: "Orders",
    icon: "switcher"
  },
  {
    name: "profile",
    title: "Profile",
    icon: "user"
  },
]


const TabBar = (props: any) => {
  const viewRefs = useRef([]);
  const blockPositionX = useSharedValue(19)
  const blockPositionY = useSharedValue(30)
  const animateTab = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: blockPositionX.value }, { translateY: blockPositionY.value }]
    }
  })
  function onPressInTab(index: number, route: any) {
    const viewRef = viewRefs.current[index];
    if (viewRef) {
      viewRef.measure((x, y, width, height, pageX, pageY) => {
        blockPositionX.value = withTiming(x, { duration: 200 })
      });
    }
    props.navigation.navigate(route)

  }

  return (
    <View className='flex flex-row p-5 pb-10 pt-8 rounded-t-3xl absolute bottom-0 bg-primary' style={{
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    }} >
      <Animated.View style={[animateTab]} className='w-20 h-16 absolute bg-white rounded-full -z-10'></Animated.View>
      {props.state.routes.map((route: any, index: number) => {
        return (
          <Pressable
            ref={(ref) => (viewRefs.current[index] = ref)}
            onPressIn={() => onPressInTab(index, route)}
            key={index}
            className={props.state.index === index ? 'flex-1 items-center w-14 h-14 rounded-full justify-center' : 'flex-1 items-center w-14 h-14 justify-center '}
          >
            <AntDesign color={props.state.index === index ? '#46486B' : '#fff'} size={24} name={tabData[index].icon.toString()} />
          </Pressable>
        );
      })}
    </View>
  );
};
const Layout = () => {

  return (
    <SafeAreaProvider style={{backgroundColor:'#ffffff00'}}>
      <Tabs tabBar={(props) => <TabBar {...props} />} screenOptions={{ headerShown: false }}>
        {tabData.map((list, index) => {
          return (
            <Tabs.Screen key={index} name={list.name} options={{ title: list.name }} />
          )
        })}

      </Tabs>
    </SafeAreaProvider>
  )
}

export default Layout