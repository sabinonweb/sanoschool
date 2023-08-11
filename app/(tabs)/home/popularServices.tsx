import { View, Text, SafeAreaView, Image, Dimensions, Pressable, TextInput, ScrollView, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import { PanGestureHandler } from 'react-native-gesture-handler'
import { Link, router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

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

const PopularServices = () => {
    return (
        <SafeAreaView className='flex-1 bg-secondary flex flex-col h-full'>

            <ScrollView showsVerticalScrollIndicator={false} className='h-full'>
                <View className='flex-1 flex flex-col py-2 h-full'>
                    <View className='flex flex-row justify-center pb-6 px-2'>
                        <TouchableOpacity activeOpacity={0.9} onPress={() => router.back()} className=' w-10 h-10 items-center justify-center rounded-full'>
                            <Ionicons name='chevron-back' size={24} color={"#000"} />
                        </TouchableOpacity>
                        <Text className='text-2xl font-bold mx-4 mb-8 my-auto mr-auto'>Popular Services</Text>
                    </View>
                    <View className=' px-4 mb-1'>
                        <TextInput className='p-4 rounded-xl border border-gray-300 text-gray-600' placeholder='Search Courses' />
                    </View>


                    <View className='my-3 h-full '>
                        <ScrollView showsHorizontalScrollIndicator={false} className='h-full'>

                            <Pressable className='w-1/2' onPress={() => router.push('/home/details')}>
                                <View className='w-full px-4'>
                                    <Image source={{ uri: carouselData[0].image }} className='w-full h-32 rounded-t-xl' resizeMode='cover' />

                                    <View className='bg-gray-200 w-full rounded-b-xl flex flex-col'>
                                        <View className="flex flex-row p-3">
                                            <Image source={require('../../../assets/images/sheldon.jpeg')} className='rounded-full w-8 h-8 object-cover my-auto' />
                                            <View className=' flex flex-col px-3'>
                                                <Text className='text-gray-800 text-[16px]'>Sid</Text>
                                                <Text className='text-gray-600 text-[12px]'>Rating: 4.6</Text>
                                            </View>
                                        </View>
                                        <View className=' flex flex-row mt-2 bg-green-600 px-2 py-3 rounded-b-xl items-center'>
                                            <Text className='text-gray-100 text-[14px] my-auto'>Rs.</Text>
                                            <Text className='text-gray-100 text-[18px]'>150</Text>
                                        </View>
                                    </View>
                                </View>
                            </Pressable>


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
                        <Animated.View key={index} style={getBoxStyle(index)} className={index == slider.value / width ? 'w-3 h-3 rounded-full bg-primary mx-1' : 'w-3 h-3 rounded-full bg-gray-400 mx-1'}></Animated.View>
                    )
                })}
            </View>
        </View>
    )
}


export default PopularServices