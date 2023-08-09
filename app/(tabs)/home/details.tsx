import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import Animated from 'react-native-reanimated'

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
        </View>
    )
}

export default GigDetail