import { LogBox } from 'react-native'
import { useFonts } from 'expo-font'
import { useRouter } from 'expo-router'
import React from 'react'

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