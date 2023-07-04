import { Text, SafeAreaView, Pressable, View } from 'react-native'
import React, { useEffect } from 'react'
import Lottie from 'lottie-react-native'
import Svg, { Path } from 'react-native-svg'
import { useRouter, Stack } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
const Login = () => {
    const router = useRouter()
    const opacityButton = useSharedValue(0)
    const rotateIcon = useSharedValue(0)
    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: withTiming(opacityButton.value, { duration: 1000 })
        }
    })
    const animatedIcon = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    rotateZ: rotateIcon.value + 'deg'
                }
            ]
        }
    })
    useEffect(() => {
        opacityButton.value = 1
    }, [])
    return (
        <SafeAreaView className='flex-1 flex flex-col bg-secondary '>
            <View className='absolute top-10 left-2'>
                <Animated.View style={[animatedStyle]}>
                    <Pressable className='p-4' onPress={() => router.back()}>
                        <Ionicons name="chevron-back" size={32} color="#46486B" />
                    </Pressable>
                </Animated.View>
            </View>
            <Pressable className='self-center' onPress={() => {rotateIcon.value=withTiming(rotateIcon.value+360,{duration:1000})}}>
                <Animated.View style={[animatedStyle, animatedIcon]} className='items-center my-4'>
                    <Icon />
                </Animated.View>
            </Pressable>
            <Text>THing</Text>
        </SafeAreaView>
    )
}
function Icon() {
    return (
        <Svg
            width="80"
            height="80"
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


export default Login