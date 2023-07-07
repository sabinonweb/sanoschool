import { View, Text, LogBox } from 'react-native'
import { useFonts } from 'expo-font'
import { Stack, useRouter } from 'expo-router'
import React from 'react'
import Login from './auth/login'
import Continue from './auth/continue'
import Layout from './main/_layout'
import { SafeAreaProvider } from 'react-native-safe-area-context'


const Page = () => {
  LogBox.ignoreAllLogs()
  const router=useRouter()
  const [loaded] = useFonts({
    'VarelaRound': require("../assets/fonts/VarelaRound.ttf")
  })
  if (!loaded) {
    return null
  }else{
    router.replace('/main')
  }
  return (
    <>
     
    </>
  )
}

export default Page