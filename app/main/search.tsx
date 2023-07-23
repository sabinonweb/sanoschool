import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Interest from '../../components/login/Interest'
import Subjects from '../../components/login/Subjects'

const search = () => {
  const tabData = [
  
    {
      name: "Subjectss",
      title: "Subjects",
    },
    {
      name: "Home",
      title: "Home",
    },
  ]
  return (
   <Tabs>
    <Tabs.Screen
    name='Interest'
    options={{
      href:{
        pathname:'../../components/login/Subjects'
      }
    }}
    />
   </Tabs>
  )
}

export default search
