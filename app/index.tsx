import { View, Text } from 'react-native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import React from 'react'
import Login from './auth/login'
import Continue from './auth/continue'


const Page = () => {
  const [loaded] = useFonts({
    'VarelaRound': require("../assets/fonts/VarelaRound.ttf")
  })
  if (!loaded) {
    return null
  }
  return (
    <Continue/>
  )
}

export default Page