import { Text, SafeAreaView, Pressable, View, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Svg, { Path } from 'react-native-svg'
import { useRouter } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { EmailInput, PasswordInput, SubmitButton } from '../../../components/login/LoginComponents'
import AnimatedIcon from '../../../components/login/AnimatedIcon'
import { FontAwesome5 } from '@expo/vector-icons';
const Signup = () => {
    const [email, setEmail] = useState<string>('')
    const [emailError, setEmailError] = useState<boolean>(false)
    const [passwordError, setPasswordError] = useState<boolean>(false)
    const [password, setPassword] = useState<string>('')
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
    function onSubmit(email: string, password: string) {
        if (email != 'sid') {
            setEmailError(true)
        }
        if (password != 'sid') {
            setPasswordError(true)
        }
    }
    return (
        <SafeAreaView className='flex-1 flex flex-col bg-secondary'>

            <Animated.View style={[animatedStyle]} className='flex-1'>
                <Pressable className='px-6 w-20 ' onPress={() => router.back()}>
                    <Ionicons name="chevron-back" size={32} color="#46486B" />
                </Pressable>
                <AnimatedIcon />
                <View className='flex-1 '>
                    <View className='my-auto'>
                        <View className='px-6 py-6'>
                            <Text className='text-5xl font-bold text-primary'>Create Account</Text>
                        </View>
                        <View className='p-5 py-3'>
                            <EmailInput value={email} setValue={setEmail} error={emailError} setError={setEmailError} />
                        </View>
                        <View className='p-5 py-3'>
                            <PasswordInput value={password} setValue={setPassword} error={passwordError} setError={setPasswordError} />
                        </View>
                        <View className='p-5 mt-4'>
                            <SubmitButton label={"Create Account"} action={() => { onSubmit(email, password) }} />
                        </View>
                       
                        <View className='flex flex-row mt-16 mx-auto space-x-3'>
                            <View className=''>
                                <Pressable className='bg-fourth p-4 rounded-xl'>
                                    <Ionicons name='logo-google' color={'white'} size={20} />
                                </Pressable>
                            </View>
                            <View className=''>
                                <Pressable className='bg-fourth p-4 rounded-xl'>
                                    <FontAwesome5 name='facebook' color={'white'} size={20} />
                                </Pressable>
                            </View>
                            <View className=''>
                                <Pressable className='bg-fourth p-4 rounded-xl'>
                                    <Ionicons name='logo-twitter' color={'white'} size={20} />
                                </Pressable>
                            </View>

                        </View>
                    </View>
                </View>




                <View className=' mt-auto border-t border-t-gray-200 py-5 mx-14'>
                    <Text className='text-center text-primary'> Already have an account? </Text>
                </View>

            </Animated.View>
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


export default Signup