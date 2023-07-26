import { Text, SafeAreaView, Pressable, View, Alert, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { PasswordInput, SubmitButton } from '../../components/login/LoginComponents'
import AnimatedIcon from '../../components/login/AnimatedIcon'
import { ScrollView } from 'react-native-gesture-handler';
const Login = () => {
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
        router.push('/login')
        if (email != 'sid') {
            setEmailError(true)
        }
        if (password != 'sid') {
            setPasswordError(true)
        }
    }
    return (
        <KeyboardAvoidingView className='flex-1 h-screen ' behavior='height'>

            <SafeAreaView className='flex-1 flex flex-col bg-secondary'>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

                    <Animated.View style={[animatedStyle]} className='h-full flex flex-col'>
                        <Pressable className='px-6 w-20 ' onPress={() => router.back('/login')}>
                            <Ionicons name="chevron-back" size={32} color="#46486B" />
                        </Pressable>
                        <AnimatedIcon />
                        <View className='flex-1 pt-20'>
                            <View className=''>
                                <View className='px-6 py-6'>
                                    <Text className='text-5xl font-bold text-primary'>New Password</Text>
                                </View>
                                <View className='p-5 py-1'>
                                    <PasswordInput label='Password' value={password} setValue={setPassword} error={passwordError} setError={setPasswordError} />

                                </View>
                                <View className='p-5 py-1'>
                                    <PasswordInput label='Re-Enter Password' value={password} setValue={setPassword} error={passwordError} setError={setPasswordError} />
                                </View>
                                <View className='p-5 mt-4'>
                                    <SubmitButton label={"Change Password"} action={() => { onSubmit(email, password) }} />
                                </View>

                            </View>
                        </View>
                    </Animated.View>
                </ScrollView>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

export default Login