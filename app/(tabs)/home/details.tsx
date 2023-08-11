import { View, Text, Image, TouchableOpacity, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import Animated, { FadeInDown, FadeInLeft, FadeInRight, FadeInUp } from 'react-native-reanimated'
import { AntDesign } from '@expo/vector-icons';

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

const GigDetail = () => {
    return (
        <View className='h-full'>
            <TouchableOpacity activeOpacity={0.9} onPress={() => router.back()} className='absolute top-10 left-6 z-20 w-10 h-10 items-center justify-center bg-black rounded-full'>
                <Ionicons name='chevron-back' size={24} color={"#ffff"} />
            </TouchableOpacity>
            <Animated.Image sharedTransitionTag="img" source={{ uri: carouselData[0].image }} className='w-full h-2/5' />
            <ScrollView className='mb-20'>
                <View className='p-4 pt-8'>
                    <View className='flex flex-row border-b border-b-gray-300 pb-6 ' >
                        <View>
                            <Animated.Text entering={FadeInLeft.duration(400).delay(400)} className="text-[30px] text-gray-700 font-bold my-auto">Sid</Animated.Text>
                            <Animated.Text entering={FadeInLeft.duration(400).delay(400)} className='text-gray-600 text-[14px]'>Rating: 4.6 <AntDesign name="star" size={18} color="#FA9A35" /></Animated.Text>
                        </View>
                        <Animated.Image entering={FadeInRight.duration(400).delay(300)} source={require('../../../assets/images/sheldon.jpeg')} className='rounded-full w-12 h-12 object-cover ml-auto' />
                    </View>

                </View>
                <View className='px-4 '>
                    <View className='flex flex-row pb-6 ' >
                        <View>
                            <Animated.Text entering={FadeInLeft.duration(400).delay(400)} className="text-[16px] text-gray-700 font-bold">Description</Animated.Text>
                            <Animated.Text entering={FadeInLeft.duration(400).delay(400)} className='text-gray-600 text-[12px] py-2 text-justify'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor urna nunc id cursus metus aliquam eleifend. Viverra nibh cras pulvinar mattis nunc. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Condimentum id venenatis a condimentum vitae. Quis hendrerit dolor magna eget est lorem. Diam maecenas sed enim ut sem viverra aliquet.
                            </Animated.Text>
                        </View>
                    </View>
                </View>

                <View className='px-4 '>
                    <View className='flex flex-col pb-6 ' >
                        <View className=''>
                            <Animated.Text entering={FadeInLeft.duration(400).delay(400)} className="text-[16px] text-gray-700 font-bold">Reviews</Animated.Text>
                        </View>
                        <View className="flex flex-row bg-gray-300 p-4 rounded-xl h-36 my-3">
                            <Image source={require('../../../assets/images/sheldon.jpeg')} className='rounded-full w-9 h-9 object-cover' />
                            <View className=' flex flex-col px-3 w-full'>
                                <Text className='text-gray-800 text-[16px]'>Sid</Text>
                                <View className='flex flex-row'>
                                    <Text className='text-gray-700 text-[12px] my-auto'>Rating:

                                    </Text>
                                    <View className='flex flex-row  my-auto'>
                                        <AntDesign name="star" size={14} color="#FA9A35" />
                                        <AntDesign name="star" size={14} color="#FA9A35" />
                                        <AntDesign name="star" size={14} color="#FA9A35" />
                                        <AntDesign name="star" size={14} color="#FA9A35" />
                                    </View>
                                </View>
                                <View className='pr-8'>
                                <Animated.Text entering={FadeInLeft.duration(400).delay(400)} className='text-gray-600 text-[12px] py-2 text-justify'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor urna nunc id cursus metus aliquam eleifend. 
                                </Animated.Text>
                                </View>
                            </View>

                        </View>
                        <View className="flex flex-row bg-gray-300 p-4 rounded-xl h-36 my-3">
                            <Image source={require('../../../assets/images/sheldon.jpeg')} className='rounded-full w-9 h-9 object-cover' />
                            <View className=' flex flex-col px-3 w-full'>
                                <Text className='text-gray-800 text-[16px]'>Sid</Text>
                                <View className='flex flex-row'>
                                    <Text className='text-gray-700 text-[12px] my-auto'>Rating:

                                    </Text>
                                    <View className='flex flex-row  my-auto'>
                                        <AntDesign name="star" size={14} color="#FA9A35" />
                                        <AntDesign name="star" size={14} color="#FA9A35" />
                                        <AntDesign name="star" size={14} color="#FA9A35" />
                                        <AntDesign name="star" size={14} color="#FA9A35" />
                                    </View>
                                </View>
                                <View className='pr-8'>
                                <Animated.Text entering={FadeInLeft.duration(400).delay(400)} className='text-gray-600 text-[12px] py-2 text-justify'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor urna nunc id cursus metus aliquam eleifend. 
                                </Animated.Text>
                                </View>
                            </View>

                        </View>
                    </View>
                </View>
            </ScrollView>

            <View className='absolute bottom-0 w-full pb-6' >
                <Animated.View entering={FadeInDown.duration(400).delay(400)} className='mx-auto w-11/12 bg-green-700 px-2 py-3 rounded-full flex flex-row'>
                    <View className='ml-6'>
                        <Animated.Text className="text-[16px] text-white font-bold my-auto">Rs. 50</Animated.Text>
                        <Animated.Text className='text-white text-[11px] font-normal'>per class</Animated.Text>
                    </View>
                    <Pressable className='ml-auto my-auto' >
                        <View className='bg-white py-3 px-10 rounded-full'>
                            <Text>Join</Text>
                        </View>
                    </Pressable>
                </Animated.View>
            </View>
        </View>
    )
}

export default GigDetail