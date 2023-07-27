import { Stack } from "expo-router"

const AuthLayout=()=>{
    return (
        <Stack screenOptions={{headerShown:false}}>
            <Stack.Screen name="login"/>
            <Stack.Screen name="continue"/>
            <Stack.Screen name="enterotp"/>
            <Stack.Screen name="reset"/>
            <Stack.Screen name="resetpassword"/>
            <Stack.Screen name="signup"/>
        </Stack>
    )
}
export default AuthLayout