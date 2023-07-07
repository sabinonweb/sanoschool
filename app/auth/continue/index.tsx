import { Text, Pressable, View } from 'react-native'
import React, { useEffect } from 'react'
import Lottie from 'lottie-react-native'
import Svg, { Path } from 'react-native-svg'
import { useRouter, Stack } from 'expo-router'
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import { SafeAreaView } from 'react-native-safe-area-context'
const Continue = () => {
    const router = useRouter()
    const opacityButton = useSharedValue(0)
    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: withTiming(opacityButton.value, { duration: 1000 })
        }
    })
    useEffect(() => {
        opacityButton.value = 1
    }, [])

    return (
        <SafeAreaView className='flex-1 flex flex-col bg-secondary '>
            <Animated.View style={[animatedStyle]} className='flex-1'>
                <Stack.Screen
                    options={{
                        title: "Welcome",
                    }}
                />
                <View className='items-center my-4'>
                    <Icon />
                </View>
                <View className='flex-1 justify-center items-center'>
                    <View className=' w-10/12 h-1/2 flex-1' >
                        <Lottie source={require('../../../assets/animations/login/study2.json')} speed={1.5} autoPlay loop />
                    </View>
                    <View  className='h-44'>
                        <Text className=' font-primary text-2xl text-center text-primary mx-10' >
                            Fastest Growing Learning Platform
                        </Text>
                    </View>
                    <View className='mb-10'>
                        <Pressable onPress={() => {
                            opacityButton.value = 0;
                            setTimeout(() => {
                                router.push('/auth/login')
                            }, 400)
                        }} className=' p-5 rounded-full bg-primary mt-auto px-14' >
                            <Text className='text-center text-font1 font-light tracking-widest text-md' >Get Started</Text>
                        </Pressable>
                    </View>
                </View>
            </Animated.View>
        </SafeAreaView>
    )
}
function Icon() {
    return (
        <Svg
            width="60"
            height="60"
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


export default Continue