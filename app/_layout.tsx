import { Slot } from 'expo-router'
import { AuthProvider } from '../context/AuthContext'

const StackLayout = () => {
    return (
        <AuthProvider>
            <Slot />
        </AuthProvider>
    )
}

export default StackLayout