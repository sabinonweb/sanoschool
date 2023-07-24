import {
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  Text,
  Modal,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
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
  const [searchClicked, setSearchClicked] = useState(false);
  const pressHandler = () => {
    setSearchClicked(!searchClicked);
  };

  const pressHandlerClose = () => {
    setSearchClicked(false)
  }

  return (
    <SafeAreaView className="flex-1 flex flex-col">
      <View className= "px-4 mb-7">
        <TouchableOpacity
          onPress={pressHandler}
          className='p-4 rounded-xl border border-gray-300 text-gray-600'
          activeOpacity={0.95}
        >
          <TextInput
            className="text-center"
            style={{ alignSelf: "center" }}
            placeholder="Search"
          ></TextInput>
        </TouchableOpacity>
      </View>

      {searchClicked && (
        <SafeAreaView className="flex flex-1">
          <Modal animationType="slide" visible={searchClicked}>
            <View className="flex-1">
              <View className="flex self-center border-2 p-2 mt-16 w-11/12 text-center bg-slate-200 rounded-3xl justify-start items-center flex-row">
              <TouchableOpacity onPress={pressHandlerClose} activeOpacity={0.95}>
                  <AntDesign name="closecircle" size={20}/>
                  </TouchableOpacity>
                <TextInput
                  className="left-2"
                  placeholder="Search"
                ></TextInput>
                
              </View>
              <Image source={require("../../assets/images/white.webp")} />
            </View> 
          </Modal>
        </SafeAreaView>
      )}

      <ScrollView className=" flex-1 px-4" showsVerticalScrollIndicator={false}>
        <View className="flex-row flex-wrap">
          {searchData.map((list: any, key: number) => (
            <View key={key} className=" h-44 w-1/2 p-2">
              <View
                key={key}
                className="p-3 bg-primary h-full w-full rounded-xl justify-center items-center  shadow-2xl"
              >
                <Text className="text-lg font-semibold text-slate-100">
                  {list.name}
                </Text>
                <Text className="text-sm text-slate-50">{list.subText}</Text>
                <Ionicons name={list.icon} size={40} color="#f2d29d" />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default search;
