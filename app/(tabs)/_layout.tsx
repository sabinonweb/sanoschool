import { View, Pressable, Dimensions, ImageBackground, Text } from "react-native";
import React, { useRef, useState } from "react";
import { Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
} from "react-native-reanimated";

const screenWidth = Dimensions.get('window')
const tabData = [
    {
        name: "home",
        title: "Home",
        icon: "home",
    },
    {
        name: "chat",
        title: "Chat",
        icon: "message1",
    },
    {
        name: "search",
        title: "Search",
        icon: "search1",
    },


    {
        name: "order",
        title: "Orders",
        icon: "switcher",
    },

    {
        name: "profile",
        title: "Profile",
        icon: "user",
    },
];

const TabBar = (props: any) => {
    const section = screenWidth.width / tabData.length
    const viewRefs = useRef([]);
    const blockPositionX = useSharedValue(0);
    const blockPositionY = useSharedValue(0);


    function onPressInTab(index: number, route: any) {
        blockPositionY.value = withTiming(-20, { duration: 0 })
        blockPositionX.value = withTiming(index, { duration: 300 })
        props.navigation.navigate(route);
        blockPositionY.value = withTiming(3, { duration: 300 })

    }
    const animatedBackground = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: section * blockPositionX.value }]
        }
    })
    const animatedTab = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: -blockPositionY.value }]
        }
    })

    return (
        <View className="flex flex-row pb-6 bottom-0 bg-primary h-20">
            <Animated.View style={[animatedBackground]} className="bg-secondary absolute">
                <ImageBackground style={{ height: 110, width: section }} source={require('../../assets/images/Exclude.png')}>
                </ImageBackground>
            </Animated.View>

            {props.state.routes.map((route: any, index: number) => {
                return (
                    <Animated.View
                        style={props.state.index === index && animatedTab}
                        className="flex-1 h-full">
                        <Pressable
                            ref={(ref) => (viewRefs.current[index] = ref)}
                            onPressIn={() => onPressInTab(index, route)}
                            key={index}
                            className={
                                props.state.index === index
                                    ? "items-center rounded-full justify-center relative bottom-6 bg-primary w-12 h-12 mx-auto"
                                    : "items-center my-auto h-full"
                            }
                        >
                            <AntDesign
                                color={props.state.index === index ? "#fff" : "#fff"}
                                size={16}
                                style={{ marginTop: 'auto', marginBottom: 'auto' }}
                                name={tabData[index].icon.toString()}
                            />
                        </Pressable>
                    </Animated.View>
                );
            })}
        </View>
    );
};
const Layout = () => {
    return (
        <Tabs
            tabBar={(props) => <TabBar {...props} />}
            screenOptions={{ headerShown: false }}
        >
            {tabData.map((list, index) => {
                return (
                    <Tabs.Screen
                        key={index}
                        name={list.name}
                        options={{ title: list.name }}
                    />
                );
            })}
        </Tabs>
    );
};
/*
<Pressable
                            ref={(ref) => (viewRefs.current[index] = ref)}
                            onPressIn={() => onPressInTab(index, route)}
                            key={index}
                            style={{ height: 50, width: 50 }}
                            className={
                                props.state.index === index ?
                                    " items-center justify-center bg-transparent w-20 h-20 bg-white" :
                                    " items-center rounded-full justify-center w-20 h-20 border-b-3 border-b-primary"
                            }
                        >
                            <AntDesign
                                color={props.state.index === index ?
                                    "#000" : "#fff"}
                                size={14}
                                name={tabData[index].icon.toString()}
                            />
                        </Pressable>*/
export default Layout;