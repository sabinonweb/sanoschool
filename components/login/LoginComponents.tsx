import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import Animated, { useAnimatedStyle, useSharedValue, withSequence, withTiming } from 'react-native-reanimated';

interface ChangeValueProps {
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>;
    error: boolean,
    setError: React.Dispatch<React.SetStateAction<boolean>>
    label:string
}
interface SubmitButtonProps {
    action: () => void,
    label:string
}

export const EmailInput = (State: ChangeValueProps) => {
    const viewScale = useSharedValue(1)
    const animatedView = useAnimatedStyle(() => {
        return {
            transform: [{ scale: viewScale.value }]
        }
    })
    useEffect(() => {
        if (State.error == true) {
            viewScale.value = withSequence(withTiming(1.05, { duration: 50 }), withTiming(1, { duration: 50 }))
        }
    }, [State.error])
    return (
        <Animated.View className=' rounded-xl flex flex-row ' style={[{ backgroundColor: '#DED4E0' }, animatedView]}>
            <TextInput autoCapitalize='none' value={State.value} onChangeText={(txt) => { State.setError(false); State.setValue(txt) }} className={State.error ? 'p-4 py-6 rounded-xl border border-red-500 flex-1' : ' p-4 py-6 rounded-xl border border-secondary flex-1'} placeholder={State.label} placeholderTextColor={'#7a7c99'} />
        </Animated.View>
    )
}

export const PasswordInput = (State: ChangeValueProps) => {
    const [visible, setVisible] = useState<boolean>(false)
    function toggleVisible() {
        setVisible(!visible)
    }
    const viewScale = useSharedValue(1)
    const animatedView = useAnimatedStyle(() => {
        return {
            transform: [{ scale: viewScale.value }]
        }
    })
    useEffect(() => {
        if (State.error == true) {
            viewScale.value = withSequence(withTiming(1.05, { duration: 50 }), withTiming(1, { duration: 50 }))
        }
    }, [State.error])
    return (
        <Animated.View className={State.error ? ' rounded-xl border border-red-500 flex flex-row' : 'rounded-xl border border-secondary flex flex-row'} style={[{ backgroundColor: '#DED4E0' }, animatedView]}>
            <TextInput autoCapitalize='none' maxLength={32} value={State.value} onChangeText={(txt) => { State.setError(false);State.setValue(txt) }} className=' p-4 py-6 rounded-xl flex-1' placeholder={State.label} secureTextEntry={visible} placeholderTextColor={'#7a7c99'} />
            <Pressable onPress={toggleVisible} className='justify-center px-5'>
                <Ionicons name={visible ? 'eye' : 'eye-off'} size={20} color={'#46486B'} />
            </Pressable>

        </Animated.View>
    )
}

export const SubmitButton = (State: SubmitButtonProps) => {
    return (
        <Pressable onPress={State.action} className='p-4 py-6 rounded-xl bg-primary'>
            <Text className='text-center text-white font-medium'>{State.label}</Text>
        </Pressable>

    )
}

