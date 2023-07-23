import { View, SafeAreaView, TextInput, ScrollView, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
const searchData = [
  {
    name: "Science",
    subText: "Newton and Einstein",
    icon: "rocket-outline",
  },
  {
    name: "नेपाली ",
    subText: "नेपाली हाँमी रहुँला कहाँ(नेपालै नरहे)",
    icon: "ribbon-outline",
  },
  {
    name: "Moral Science",
    subText: "Hustle, Respect, Morality",
    icon: "people-circle-outline",
  },
  {
    name: "Compulsory Mathematics",
    subText: "Algebra and Geometry Simplified",
    icon: "stats-chart-outline",
  },
  {
    name: "Optional Mathematics",
    subText: "No Si(g)n of Tan(sion)",
    icon: "pie-chart-outline",
  },
  {
    name: "English",
    subText: "Language in the form of language",
    icon: "text-outline",
  },
  {
    name: "HPEE",
    subText: "Health is wealth",
    icon: "thermometer-outline",
  },
  {
    name: "Social Studies",
    subText: "Start with yourself",
    icon: "walk-outline",
  },
]
const search = () => {
  

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 px-4">
        <TextInput className="border-2 p-4 w-full text-center bg-slate-400 rounded-full" placeholder="Searches">
        </TextInput>
        <View className="flex-1 flex flex-col">
          {searchData.map((list: any, key: number) => (
            <View className="bg-gray-300" key={key}>
              <Text className="text-2xl font-bold">{list.name}</Text>
              <Ionicons name={list.icon} size={24} />
            </View>
          )
          )}
        </View>
      </View>
      <ScrollView></ScrollView>
    </SafeAreaView>
  );
};

export default search;
