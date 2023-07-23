import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Switch,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import SellerModeOff from "../../components/login/SellerMode";

const Profile = () => {
  const sellerData = [
    {
      name: "My Profile",
      icon: "person-circle-outline",
      id: 1,
      arrow: "chevron-forward-outline",
    },
    {
      name: "Earnings",
      icon: "cash-outline",
      id: 2,
      arrow: "chevron-forward-outline",
    },
    {
      name: "Share Gigs",
      icon: "share-outline",
      id: 3,
      arrow: "chevron-forward-outline",
    },
    {
      name: "Manage Gigs",
      icon: "card-outline",
      id: 4,
      arrow: "chevron-forward-outline",
    },
    {
      name: "Availability",
      icon: "hourglass-outline",
      id: 5,
      arrow: "chevron-forward-outline",
    },
    {
      name: "Invite friends",
      icon: "paper-plane-outline",
      id: 6,
      arrow: "chevron-forward-outline",
    },
    {
      name: "Custom Offer Templates",
      icon: "briefcase-outline",
      id: 7,
      arrow: "chevron-forward-outline",
    },
  ];

  const [switchClicked, setSwitchClicked] = useState(false);
  const handleSwitch = () => {
    setSwitchClicked((prevState) => !prevState);
  };

  return !switchClicked ? (
    <SellerModeOff
      handleSwitch={handleSwitch}
      switchClicked={switchClicked}
    ></SellerModeOff>
  ) : (
    //SellerModeOn
    <SafeAreaView style={{ flex: 1 }}>
      <View className="flex flex:0.8 items-start justify-start bg-sky-950">
        <Ionicons
          name="notifications-outline"
          size={32}
          style={{ right: 10, marginTop: 50, position: "absolute" }}
          color="white"
        />
        <Image
          source={require("../../assets/images/sheldon.jpeg")}
          style={{
            borderRadius: 100,
          }}
          className="w-16 h-16 mt-32 ml-4"
        />
        <Text
          style={{ marginLeft: 90, bottom: 50 }}
          className="text-lg text-blue-100 self-baseline font-bold"
        >
          Sheldon
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: "white",
            alignSelf: "baseline",
            marginLeft: 90,
            bottom: 50,
          }}
        >
          Personal balance:
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>$0</Text>
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
            Become a Student
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
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <Text className="text-xl left-5 font-bold mb-1 mt-6">Selling</Text>

          {sellerData.map((list, key) => {
            return (
              <View key={list.id} style={{}}>
                <View className="justify-center items-start">
                  <Ionicons
                    name={list.icon}
                    size={24}
                    style={{ left: 20, top: 23 }}
                    className="self-center left-5 top-6"
                  />
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
                  <Text className="text-sm font-bold self-start bottom-6 left-16">
                    {list.name}
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
