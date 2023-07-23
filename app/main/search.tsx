import { View, SafeAreaView, TextInput, ScrollView, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const search = () => {
  const searchData = [
    {
      name: "Science",
      subText: "Newton and Einstein",
      id: 1,
      icon: "rocket-outline",
    },
    {
      name: "नेपाली ",
      subText: "नेपाली हाँमी रहुँला कहाँ(नेपालै नरहे)",
      id: 2,
      icon: "ribbon-outline",
    },
    {
      name: "Moral Science",
      subText: "Hustle, Respect, Morality",
      id: 3,
      icon: "people-circle-outline",
    },
    {
      name: "Compulsory Mathematics",
      subText: "Algebra and Geometry Simplified",
      id: 4,
      icon: "stats-chart-outline",
    },
    {
      name: "Optional Mathematics",
      subText: "No Si(g)n of Tan(sion)",
      id: 5,
      icon: "pie-chart-outline",
    },
    {
      name: "English",
      subText: "Language in the form of language",
      id: 6,
      icon: "text-outline",
    },
    {
      name: "HPEE",
      subText: "Health is wealth",
      id: 7,
      icon: "thermometer-outline",
    },
    {
      name: "Social Studies",
      subText: "Start with yourself",
      id: 8,
      icon: "walk-outline",
    },
  ]

  return (
    <SafeAreaView>
      <View className="flex-1 items-start">
        <TextInput className="flex-1 border-2 w-96 ml-5 mt-4 h-10 absolute text-center bg-slate-400 items-center justify-center"  style={{borderRadius:50}} placeholder="search">
        </TextInput>
        <View className="flex-1">
          {searchData.map((list, key) => 
              <View key={list.id}>
                <Text className="text-2xl font-bold">{list.name}</Text>
                <Ionicons name={list.icon} size={24}/>
              </View>
          )}
        </View>
      </View>
      <ScrollView></ScrollView>
    </SafeAreaView>
  );
};

export default search;
