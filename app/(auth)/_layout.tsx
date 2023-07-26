import { Stack } from "expo-router"

const AuthLayout=()=>{
    return (
        <Stack screenOptions={{headerShown:false}}>
            <Stack.Screen name="login"/>
            <Stack.Screen name="continue"/>
        </Stack>
    )
}
export default AuthLayout