import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, useRootNavigationState, useSegments } from "expo-router";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext()

function useProtectedRoute(user: Object) {
    const segments = useSegments()
    const navigationState = useRootNavigationState();
    useEffect(() => {
        if (!navigationState?.key) return;
        const inAuthGroup = segments[0] === '(auth)'
        if (!user &&
            !inAuthGroup
        ) {
            router.replace('/continue')
        } else if (user && inAuthGroup) {
            router.replace('/home')
        }
    }, [user, segments, navigationState])
}


export const AuthProvider = ({ children }: any) => {
    const [user, setAuth] = useState(null)
    useEffect(() => {
        checkAsync()
    }, [])
    async function checkAsync() {
        let state = await AsyncStorage.getItem('loggedIn')
        if (state !== null) {
            let val = JSON.parse(state)
            if (val) {
                setAuth({})
            } else {
                setAuth(null)
            }
        } else {
            setAuth(null)
        }
    }
    useProtectedRoute(user)
    return (
        <AuthContext.Provider value={{
            signIn: async () => { setAuth({}); await AsyncStorage.setItem('loggedIn', JSON.stringify(true)) },
            signOut: async () => { setAuth(null); await AsyncStorage.setItem('loggedIn', JSON.stringify(false)) },
            user
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}

