import {
  Text,
  View,
  SafeAreaView,
  Image,
  Switch,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const SellerModeOff = ({ handleSwitch, switchClicked }) => {
  const meroData = [
    {
      name: "Get Inspired",
      icon: "sunny-outline",
      id: 1,
      arrow: "chevron-forward-outline",
    },
    {
      name: "Saved lists",
      icon: "heart-outline",
      id: 2,
      arrow: "chevron-forward-outline",
    },
    {
      name: "My Interests",
      icon: "file-tray-full-outline",
      id: 3,
      arrow: "chevron-forward-outline",
    },
    {
      name: "Invite friends",
      icon: "paper-plane-outline",
      id: 4,
      arrow: "chevron-forward-outline",
    },
  ];

  const settingsData = [
    {
      name: "Preferences",
      icon: "print-outline",
      id: 4,
      arrow: "chevron-forward-outline",
    },
    {
      name: "Account",
      icon: "albums-outline",
      id: 5,
      arrow: "chevron-forward-outline",
    },
  ];

  const resourcesData = [
    {
      name: "Support",
      icon: "link-outline",
      id: 6,
      arrow: "chevron-forward-outline",
    },
    {
      name: "Community and legal",
      icon: "help-circle-outline",
      id: 7,
      arrow: "chevron-forward-outline",
    },
    {
      name: "Become a Teacher",
      icon: "pencil-outline",
      id: 8,
      arrow: "chevron-forward-outline",
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="flex flex:0.8 items-start justify-start bg-orange-800 py-4">
        <Ionicons
          name="notifications-outline"
          size={32}
          className="absolute"
          style={{ right: 10, marginTop: 50, position: "absolute" }}
          color="white"
        />
        <Image
          source={require("../../assets/images/sheldon.jpeg")}
          style={{
            borderRadius: 100,
          }}
          className="w-16 h-16 ml-4 mt-28"
        />
        <Text
          style={{
            marginLeft: 90,
            bottom: 50,
          }}
          className="text-lg text-blue-100 self-baseline font-bold"
        >
          Sheldon
        </Text>
      </View>
      <View style={{ flex: 2, backgroundColor: "#e1f4fa" }}>
        <View
          style={{
            borderWidth: 0.1,
            backgroundColor: "#e1f4fa",
            borderRadius: 10,
            marginTop: -25,
            shadowOpacity: 1,
            shadowRadius: 5,
            width: 400,
          }}
          className="items-center flex-col justify-center self-center py-1 px-5"
        >
          <Text className="text-sm font-bold self-start top-4">
            Become a Teacher
          </Text>
          <Switch
             trackColor={{ false: "#f0bbbb", true: "#7dd3fc" }}
             thumbColor={switchClicked ? "#002244" : "#820303"}
            ios_backgroundColor="#f0bbbb"
            onChange={handleSwitch}
            value={switchClicked}
            className="self-end bottom-3"
          />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text className="text-xl left-5 font-bold mb-1 mt-6">
            Mero Pathshala
          </Text>

          {meroData.map((list, key) => {
            return (
              <View key={list.id}>
                <View className="justify-center items-start">
                  <Ionicons
                    name={list.icon}
                    size={32}
                    style={{ left: 20, top: 23 }}
                    className="self-center left-5 top-6"
                  />
                  <Text className="text-sm font-bold self-start bottom-2 left-16">
                    {list.name}
                  </Text>
                  <Ionicons
                    name={list.arrow}
                    size={24}
                    style={{
                      alignSelf: "flex-end",
                      right: 10,
                      bottom: 5,
                      opacity: 0.2,
                    }}
                  />
                </View>
              </View>
            );
          })}

          <Text className="text-xl font-bold ml-5 mt-1">Settings</Text>

          {settingsData.map((list, key) => {
            return (
              <View key={list.id}>
                <View className="justify-center items-center">
                  <Ionicons
                    name={list.icon}
                    size={32}
                    style={{ alignSelf: "flex-start", left: 20, top: 23 }}
                  />
                  <Text className="text-sm font-bold self-start bottom-1 left-16">
                    {list.name}
                  </Text>
                  <Ionicons
                    name={list.arrow}
                    size={24}
                    style={{
                      alignSelf: "flex-end",
                      right: 10,
                      bottom: 5,
                      opacity: 0.2,
                    }}
                  />
                </View>
              </View>
            );
          })}
          <Text className="text-xl left-5 font-bold mb-5 mt-1">
            Mero Pathshala
          </Text>

          {resourcesData.map((list, key) => {
            return (
              <View key={list.id}>
                <View className="justify-center items-center">
                  <Ionicons
                    name={list.icon}
                    size={32}
                    style={{ alignSelf: "flex-start", left: 20, top: 23 }}
                  />
                  <Text className="text-sm font-bold self-start bottom-2 left-16">
                    {list.name}
                  </Text>
                  <Ionicons
                    name={list.arrow}
                    size={24}
                    style={{
                      alignSelf: "flex-end",
                      right: 10,
                      bottom: 5,
                      opacity: 0.2,
                    }}
                  />
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SellerModeOff;
