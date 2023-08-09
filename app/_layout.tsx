import { Slot, Stack } from 'expo-router'
import { AuthProvider } from '../context/AuthContext'

const StackLayout = () => {
    return (
        <AuthProvider>
            <Stack screenOptions={{headerShown:false}}>
                <Stack.Screen name='auth'/>
                <Stack.Screen name='tabs'/>
                <Stack.Screen name='stack' options={{animation: 'fade'}}/>
            </Stack>
        </AuthProvider>
    )
}

export default StackLayout