import React from 'react'
import { LogBox } from 'react-native';
import { useFonts } from 'expo-font';


const index = () => {
    LogBox.ignoreAllLogs()
    const [loaded] = useFonts({
        'VarelaRound': require("../assets/fonts/VarelaRound.ttf")
    })
    if (!loaded) {
        return null
    }
    return (
        <></>
    );


}

export default index