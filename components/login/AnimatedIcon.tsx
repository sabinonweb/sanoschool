import { Pressable } from 'react-native'
import React, { useEffect } from 'react'
import Svg, { Path } from 'react-native-svg'

import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
const AnimatedIcon = () => {

    const rotateIcon = useSharedValue(0)

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
        setTimeout(() => {
            rotateIcon.value = withTiming(rotateIcon.value + 360, { duration: 900 })
        }, 1000)
    }, [])

    return (

        <Pressable className='self-center' onPress={() => { rotateIcon.value = withTiming(rotateIcon.value + 360, { duration: 1000 }) }}>
            <Animated.View style={[animatedIcon]} className='items-center my-4'>
                <Icon />
            </Animated.View>
        </Pressable>

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


export default AnimatedIcon