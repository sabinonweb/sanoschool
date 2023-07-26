import { View, Pressable } from "react-native";
import React, { useRef } from "react";
import { Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";

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
    const viewRefs = useRef([]);
    const blockPositionX = useSharedValue(20);
    const blockPositionY = useSharedValue(14);
    const animateTab = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: blockPositionX.value },
                { translateY: blockPositionY.value },
            ],
        };
    });
    function onPressInTab(index: number, route: any) {
        const viewRef = viewRefs.current[index];
        if (viewRef) {
            viewRef.measure((x, y, width, height, pageX, pageY) => {
                blockPositionX.value = withTiming(x + 10, { duration: 200 });
            });
        }
        props.navigation.navigate(route);
    }

    const isChatScreen = props.state.routes[props.state.index].name === "message";

    if (isChatScreen) {
        return null;
    }


    return (
        <View
            className="flex flex-row p-3 pb-6 bottom-0 bg-primary"
            style={{
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
            }}
        >
            <Animated.View
                style={[animateTab, { height: 40, width: 60 }]}
                className=" absolute bg-white rounded-full -z-10"
            ></Animated.View>
            {props.state.routes.map((route: any, index: number) => {
                return (
                    <Pressable
                        ref={(ref) => (viewRefs.current[index] = ref)}
                        onPressIn={() => onPressInTab(index, route)}
                        key={index}
                        style={{ height: 40, width: 60 }}
                        className={
                            props.state.index === index
                                ? "flex-1 items-center rounded-full justify-center"
                                : "flex-1 items-center justify-center "
                        }
                    >
                        <AntDesign
                            color={props.state.index === index ? "#46486B" : "#fff"}
                            size={20}
                            name={tabData[index].icon.toString()}
                        />
                    </Pressable>
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

export default Layout;