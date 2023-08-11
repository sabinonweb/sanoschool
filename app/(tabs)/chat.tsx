import { View, Text, Pressable, ScrollView, Image, TouchableOpacity } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import chat from '../../components/login/message'

const carouselData = [
  {
    "image": "https://www.lifewire.com/thmb/pe-HqOKptr9JMz-ILbvCTnbF8BQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/The10BestEducationalWebsitesforTakingOnlineCoursesin2021-final-a1b955b29f624dfc84645c86f33d6c3b.jpg",
    "category": "Robin",
    "study_topic": "Ecology",
    "time_ago_uploaded": "2 hours ago",
    "message": 'Hi How are you doing sjdlfkjds sdkjlkdsjf dskfjldskf dskfjlsdkjflksd sdjflkjsdflks sdkfjsldkfjsdlf sdfkjsdklfjdslfsdf lksfjlsdkfjsdf sdkflsdkfjsdlf sdfnkjsfl'

  },
  {
    "image": "https://www.usnews.com/object/image/0000016e-6547-d289-a37f-7f47c2e80001/191113-happyyoungemployee-stock.jpg?update-time=1573657273197&size=responsive640",
    "category": "James",
    "study_topic": "Architecture",
    "time_ago_uploaded": "1 day ago",
    "message": 'Hi How are you doing sjdlfkjds sdkjlkdsjf dskfjldskf dskfjlsdkjflksd sdjflkjsdflks sdkfjsldkfjsdlf sdfkjsdklfjdslfsdf lksfjlsdkfjsdf sdkflsdkfjsdlf sdfnkjsfl'

  },
  {
    "image": "https://cdn2.hubspot.net/hubfs/53/best-online-courses.jpg",
    "category": "Alan",
    "study_topic": "Painting",
    "time_ago_uploaded": "3 weeks ago",
    "message": 'Hi How are you doing sjdlfkjds sdkjlkdsjf dskfjldskf dskfjlsdkjflksd sdjflkjsdflks sdkfjsldkfjsdlf sdfkjsdklfjdslfsdf lksfjlsdkfjsdf sdkflsdkfjsdlf sdfnkjsfl'

  },
  {
    "image": "https://i0.wp.com/www.al-fanarmedia.org/wp-content/uploads/2020/04/1-1.jpg?fit=1000%2C667&ssl=1",
    "category": "Adam",
    "study_topic": "Culinary Arts",
    "time_ago_uploaded": "2 months ago",
    "message": 'Hi How are you doing sjdlfkjds sdkjlkdsjf dskfjldskf dskfjlsdkjflksd sdjflkjsdflks sdkfjsldkfjsdlf sdfkjsdklfjdslfsdf lksfjlsdkfjsdf sdkflsdkfjsdlf sdfnkjsfl'

  },
  {
    "image": "https://cdn-wordpress-info.futurelearn.com/wp-content/uploads/FL365_Free_Certs_Blog_Header.png",
    "category": "Curt",
    "study_topic": "Culinary Arts",
    "time_ago_uploaded": "2 months ago",
    "message": 'Hi How are you doing sjdlfkjds sdkjlkdsjf dskfjldskf dskfjlsdkjflksd sdjflkjsdflks sdkfjsldkfjsdlf sdfkjsdklfjdslfsdf lksfjlsdkfjsdf sdkflsdkfjsdlf sdfnkjsfl'
  },
  {
    "image": "https://www.lifewire.com/thmb/pe-HqOKptr9JMz-ILbvCTnbF8BQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/The10BestEducationalWebsitesforTakingOnlineCoursesin2021-final-a1b955b29f624dfc84645c86f33d6c3b.jpg",
    "category": "Robin",
    "study_topic": "Ecology",
    "time_ago_uploaded": "2 hours ago",
    "message": 'Hi How are you doing sjdlfkjds sdkjlkdsjf dskfjldskf dskfjlsdkjflksd sdjflkjsdflks sdkfjsldkfjsdlf sdfkjsdklfjdslfsdf lksfjlsdkfjsdf sdkflsdkfjsdlf sdfnkjsfl'

  },
  {
    "image": "https://www.usnews.com/object/image/0000016e-6547-d289-a37f-7f47c2e80001/191113-happyyoungemployee-stock.jpg?update-time=1573657273197&size=responsive640",
    "category": "James",
    "study_topic": "Architecture",
    "time_ago_uploaded": "1 day ago",
    "message": 'Hi How are you doing sjdlfkjds sdkjlkdsjf dskfjldskf dskfjlsdkjflksd sdjflkjsdflks sdkfjsldkfjsdlf sdfkjsdklfjdslfsdf lksfjlsdkfjsdf sdkflsdkfjsdlf sdfnkjsfl'

  },
  {
    "image": "https://cdn2.hubspot.net/hubfs/53/best-online-courses.jpg",
    "category": "Alan",
    "study_topic": "Painting",
    "time_ago_uploaded": "3 weeks ago",
    "message": 'Hi How are you doing sjdlfkjds sdkjlkdsjf dskfjldskf dskfjlsdkjflksd sdjflkjsdflks sdkfjsldkfjsdlf sdfkjsdklfjdslfsdf lksfjlsdkfjsdf sdkflsdkfjsdlf sdfnkjsfl'

  },
  {
    "image": "https://i0.wp.com/www.al-fanarmedia.org/wp-content/uploads/2020/04/1-1.jpg?fit=1000%2C667&ssl=1",
    "category": "Adam",
    "study_topic": "Culinary Arts",
    "time_ago_uploaded": "2 months ago",
    "message": 'Hi How are you doing sjdlfkjds sdkjlkdsjf dskfjldskf dskfjlsdkjflksd sdjflkjsdflks sdkfjsldkfjsdlf sdfkjsdklfjdslfsdf lksfjlsdkfjsdf sdkflsdkfjsdlf sdfnkjsfl'

  },
  {
    "image": "https://cdn-wordpress-info.futurelearn.com/wp-content/uploads/FL365_Free_Certs_Blog_Header.png",
    "category": "Curt",
    "study_topic": "Culinary Arts",
    "time_ago_uploaded": "2 months ago",
    "message": 'Hi How are you doing sjdlfkjds sdkjlkdsjf dskfjldskf dskfjlsdkjflksd sdjflkjsdflks sdkfjsldkfjsdlf sdfkjsdklfjdslfsdf lksfjlsdkfjsdf sdkflsdkfjsdlf sdfnkjsfl'
  }
]
const message = () => {
  return (
    <SafeAreaView style={{paddingBottom:-50}} className='flex-1 bg-secondary flex flex-col'>

      <View className='flex flex-col py-4 border-b-2 border-b-gray-200'>
        <View className='flex flex-row justify-center pb-1'>
          <Text className='text-2xl font-bold mx-4 mb-5 my-auto text-primary'>Inbox</Text>
          <Pressable className='ml-auto my-auto'>
            <Text className='text-sm font-bold mx-4 mb-5 text-green-600 my-auto'>See All</Text>
          </Pressable>
        </View>
      </View>
      <View className='flex-1 bg'>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} className='flex flex-col flex-1 bg'>
          {carouselData.map((list: any, index: number) => {
            return (
              <View key={index} className='w-full px-4 py-4 border-b border-b-gray-200 flex flex-row overflow-hidden'>
                <Image source={{ uri: list.image }} className='w-16 h-16 rounded-full' resizeMode='cover' />
                <View className='flex-1 flex flex-col px-8 overflow-hidden'>
                  <Text className='text-base font-medium'>{list.category}</Text>
                  <Text numberOfLines={1} style={{ fontSize: 12 }} className=' overflow-ellipsis font-light'>{list.message}</Text>
                  <Text numberOfLines={1} style={{ fontSize: 10 }} className=' italic overflow-ellipsis font-light mt-2'>{list.time_ago_uploaded}</Text>
                </View>
              </View>
            )
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default message
