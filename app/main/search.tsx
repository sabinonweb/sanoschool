import {
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  Text,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
const searchData = [
  {
    name: "Science",
    subText: "Newton and Einstein",
    icon: "rocket",
  },
  {
    name: "नेपाली ",
    subText: "नेपाली हाँमी रहुँला कहाँ(नेपालै नरहे)",
    icon: "ribbon",
  },
  {
    name: "Moral Science",
    subText: "Hustle, Respect, Morality",
    icon: "people-circle",
  },
  {
    name: "C. Mathematics",
    subText: "Make Pythagoras proud",
    icon: "stats-chart",
  },
  {
    name: "Opt. Mathematics",
    subText: "No Si(g)n of Tan(sion)",
    icon: "pie-chart",
  },
  {
    name: "English",
    subText: "Language simplified",
    icon: "text",
  },
  {
    name: "HPEE",
    subText: "Health is wealth",
    icon: "thermometer",
  },
  {
    name: "Social Studies",
    subText: "Start with yourself",
    icon: "walk",
  },
  {
    name: "Science",
    subText: "Newton and Einstein",
    icon: "rocket",
  },
  {
    name: "नेपाली ",
    subText: "नेपाली हाँमी रहुँला कहाँ(नेपालै नरहे)",
    icon: "ribbon",
  },
  {
    name: "Moral Science",
    subText: "Hustle, Respect, Morality",
    icon: "people-circle",
  },
  {
    name: "C. Mathematics",
    subText: "Make Pythagoras proud",
    icon: "stats-chart",
  },
  {
    name: "Opt. Mathematics",
    subText: "No Si(g)n of Tan(sion)",
    icon: "pie-chart",
  },
  {
    name: "English",
    subText: "Language simplified",
    icon: "text",
  },
  {
    name: "HPEE",
    subText: "Health is wealth",
    icon: "thermometer",
  },
  {
    name: "Social Studies",
    subText: "Start with yourself",
    icon: "walk",
  },
];
const search = () => {
  return (
    <SafeAreaView className="flex-1 flex flex-col">
      <View className="px-4">
        <TextInput
          className="border-2 p-4 w-full text-center bg-slate-200 rounded-full"
          placeholder="Search"
        ></TextInput>
      </View>
      <ScrollView className=" flex-1 px-4">
        <View className="flex flex-row flex-wrap">
          {searchData.map((list: any, key: number) => (
            <View
              key={key}
              className=" h-44 w-1/2 p-2"
            >
              <View
                key={key}
                className="p-3 bg-primary h-full w-full rounded-xl justify-center items-center  shadow-2xl"
              >
                <Text className="text-lg font-semibold text-slate-100">{list.name}</Text>
                <Text className="text-sm text-slate-50">{list.subText}</Text>
                <Ionicons name={list.icon} size={40} color='#f2d29d' />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default search;
