import { View, Text, SafeAreaView, Switch, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { isEnabled } from 'react-native/Libraries/Performance/Systrace'

const Setting = () => {

  const sellerData = [
    {
      id: 1,
      name: 'My Profile',
      image: 'https://example.com/image1.jpg',
      arrow: '➡️',
    },
    {
      id: 2,
      name: 'Earnings',
      image: 'https://example.com/image2.jpg',
      arrow: '➡️',
    },
    {
      id: 3,
      name: 'Share Gigs',
      image: 'https://example.com/image3.jpg',
      arrow: '➡️',
    },
    {
      id: 4,
      name: 'Manage Gigs',
      image: 'https://example.com/image4.jpg',
      arrow: '➡️',
    },
    {
      id: 5,
      name: 'Availability',
      image: 'https://example.com/image5.jpg',
      arrow: '➡️',
    },
    {
      id: 6,
      name: 'Invite Frienda',
      image: 'https://example.com/image6.jpg',
      arrow: '➡️',
    },
    {
      id: 7,
      name: 'Offer Templates',
      image: 'https://example.com/image7.jpg',
      arrow: '➡️',
    },
  ]

  const [isEnabled, setIsEnabled] = useState(false);
  const handleSwitch = () => {
    setIsEnabled((prevValue) => !prevValue)
  }

  return (
    <SafeAreaView className='flex-1'> 
    <View>
        <View className='flex-0.5 bg-slate-800 px-20 py-20 justify-center' >
          <Ionicons 
          className='flex-1'name='notifications-outline'size={30} color='white'/>
        {/* <View className='flex-1'> */}
          <View className='flex-2 flex-col bg-white w-200'>
          <Switch 
          trackColor={{false:'#e34444', true:'#7fc9aa'}}
          thumbColor={isEnabled ? '#019164' : "#b50505"}
          ios_backgroundColor='#FABCDE'
          value={isEnabled}
          onValueChange={handleSwitch}
          style={{transform: [{scaleX:0.8}, {scaleY:.8}]}}
          />
        {/* </View> */}
      </View>
      </View>
      <View className='flex-1'>
        <ScrollView className='grow-1'>
          <View className='flex-1'><Text className='text-3xl'>Selling</Text></View>
        </ScrollView>
      </View>
      </View>
    </SafeAreaView>
  )
}

export default Setting