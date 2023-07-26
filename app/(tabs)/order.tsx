import { View, Text, SafeAreaView, Image, Dimensions, Pressable, TextInput, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import Svg, { Path } from 'react-native-svg'
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useDerivedValue, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import { PanGestureHandler } from 'react-native-gesture-handler'

const { width } = Dimensions.get('window')

const carouselData = [
  {
    "image": "https://www.lifewire.com/thmb/pe-HqOKptr9JMz-ILbvCTnbF8BQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/The10BestEducationalWebsitesforTakingOnlineCoursesin2021-final-a1b955b29f624dfc84645c86f33d6c3b.jpg",
    "category": "Nature",
    "study_topic": "Ecology",
    "time_ago_uploaded": "2 hours ago"
  },
  {
    "image": "https://www.usnews.com/object/image/0000016e-6547-d289-a37f-7f47c2e80001/191113-happyyoungemployee-stock.jpg?update-time=1573657273197&size=responsive640",
    "category": "Travel",
    "study_topic": "Architecture",
    "time_ago_uploaded": "1 day ago"
  },
  {
    "image": "https://cdn2.hubspot.net/hubfs/53/best-online-courses.jpg",
    "category": "Art",
    "study_topic": "Painting",
    "time_ago_uploaded": "3 weeks ago"
  },
  {
    "image": "https://i0.wp.com/www.al-fanarmedia.org/wp-content/uploads/2020/04/1-1.jpg?fit=1000%2C667&ssl=1",
    "category": "Food",
    "study_topic": "Culinary Arts",
    "time_ago_uploaded": "2 months ago"
  },
  {
    "image": "https://cdn-wordpress-info.futurelearn.com/wp-content/uploads/FL365_Free_Certs_Blog_Header.png",
    "category": "Food",
    "study_topic": "Culinary Arts",
    "time_ago_uploaded": "2 months ago"
  }
]

const order = () => {
  return (
    <SafeAreaView className='flex-1 bg-secondary flex flex-col'>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className='flex-1 flex flex-col py-4'>
          <View className='flex flex-row justify-center pt-4 pb-2 px-2'>
            <Text className='text-2xl font-bold mx-4 mb-5 my-auto'>Class History</Text>
            <Pressable className='ml-auto my-auto'>
              <Text className='text-sm font-bold mx-4 mb-5 text-green-600 my-auto'>See All</Text>
            </Pressable>
          </View>

          <View className='my-1 px-3 bg-gray-200 pt-3'>
            <ScrollView showsHorizontalScrollIndicator={false}>
              {carouselData.map((list, index) => {
                return (
                  <View key={index} className='w-full bg-white my-1 rounded-md flex flex-col px-1'>
                    <View className='flex flex-row py-4 px-3'>
                      <View className=''>
                        <Image source={{ uri: list.image }} className='h-20 w-28 object-cover rounded-md' />
                      </View>
                      <View className='flex-1 px-3'>
                        <Text className='text-left font-normal text-gray-600 text-base'>Rs. 150</Text>
                        <Text className='text-gray-800 text-[12px] text-justify font-light mt-2' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>

                      </View>
                    </View>
                    <View className='flex flex-row border-b-2 border-gray-200 pb-3 px-3'>
                      <View className=''>
                        <Image source={require('../../assets/images/sheldon.jpeg')} className='h-7 w-7 object-cover rounded-full' />
                      </View>
                      <View className='flex-1 px-3 justify-center'>
                        <Text className='text-left font-normal text-gray-500 text-[12px]'>Sid Ghimire</Text>
                      </View>
                      <View className=' items-center justify-center ml-auto bg-green-400 rounded-full'>
                        <Text className='text-center text-[11px] px-4 text-green-900 font-bold'>Completed</Text>
                      </View>
                    </View>
                    <View className='flex flex-row py-4 px-3'>

                      <View className='flex-1 px-1 justify-center'>
                        <Text className='text-left text-gray-500 text-[12px] font-bold'>Jan 20, 2023</Text>
                      </View>
                      <View className=' items-center justify-center ml-auto bg-green-400 rounded-full'>
                      </View>
                    </View>
                  </View>
                )
              })}
            </ScrollView>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const Carousel = () => {
  const slider = useSharedValue(0)
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: -slider.value }]
    }
  })
  const getBoxStyle = (index: number) => {
    return useAnimatedStyle(() => {
      return {
        backgroundColor: slider.value / width === index ? '#46486B' : '#afafaf',
        width: slider.value / width === index ? withSpring(30) : 14
      };
    });
  };

  const onGestureEvent = useAnimatedGestureHandler({
    onEnd: (event) => {
      if (event.translationX < -100) {
        const val = Math.round(width) + slider.value
        if ((carouselData.length - 1) * width >= val) {
          slider.value = withTiming(val, { duration: 500 })
        }
      }
      if (event.translationX > 100) {
        const val = -Math.round(width) + slider.value
        if (val >= 0) {
          slider.value = withTiming(val, { duration: 500 })
        }
      }
    }
  })

  return (
    <View >
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={[animatedStyle]} className='flex flex-row'>
          {carouselData.map((list, index) => {
            return (
              <View key={index} className='w-full px-4'>
                <Image source={{ uri: list.image }} className='w-full h-52 rounded-xl' resizeMode='cover' />
              </View>
            )
          })}
        </Animated.View>
      </PanGestureHandler>
      <View className='flex flex-row mx-auto my-3'>
        {carouselData.map((list, index) => {
          return (
            <>
              <Animated.View key={index} style={getBoxStyle(index)} className={index == slider.value / width ? 'w-3 h-3 rounded-full bg-primary mx-1' : 'w-3 h-3 rounded-full bg-gray-400 mx-1'}></Animated.View>
            </>
          )
        })}
      </View>
    </View>
  )
}


function Icon() {
  return (
    <Svg
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 143 143"
    >
      <Path
        fill="#333665"
        d="M1.086 83.916a71.5 71.5 0 1151.668 56.583L71.5 71.5 1.086 83.916z"
      ></Path>
    </Svg>
  );
}
export default order