import { View, Text } from 'react-native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import React from 'react'
import Login from './auth/login'
import Continue from './auth/continue'
import Layout from './main/_layout'


const Page = () => {
  const [loaded] = useFonts({
    'VarelaRound': require("../assets/fonts/VarelaRound.ttf")
  })
  if (!loaded) {
    return null
  }
  return (
    <Login/>
  )
}

export default Page