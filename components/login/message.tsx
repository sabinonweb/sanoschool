import { Ionicons } from "@expo/vector-icons";
import React, { useState, useCallback, useEffect } from "react";
import { View, Image, Text } from "react-native";
import {
  Bubble,
  Composer,
  GiftedChat,
  Send,
  InputToolbar,
} from "react-native-gifted-chat";

const chat = () => {
  const [messages, setMessages] = useState<Array<any>>([]);

  useEffect(
    () =>
      setMessages([
        {
          _id: 1,
          text: "Hello developer",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "Sheldon Cooper",
            avatar: require("../../assets/images/sheldon.jpeg"),
          },
          sent: true,
        },
        {
          _id: 2,
          text: "Hello",
          createdAt: new Date(),
          user: {
            _id: 1,
            name: "Random",
            avatar: require("../../assets/images/sheldon.jpeg"),
          },
          sent: true,
        },
        {
          _id: 1,
          text: "How are you doing",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "Sheldon",
            avatar: require("../../assets/images/sheldon.jpeg"),
          },
          sent: true,
        },
      ]),
    []
  );

  const onSend = useCallback((messages) => {
    setMessages((prevMessages) => GiftedChat.append(prevMessages, messages));
  }, []);

  const renderBubble = (props) => {
    //{...props} passes relevant props only to bubble
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: { backgroundColor: "silver" },
          right: { backgroundColor: "#003d62" },
        }}
      />
    );
  };

  const renderSend = (props) => {
    return (
      <Send {...props} containerStyle={{ alignItems: "center" }}>
        <View>
          <Ionicons name="send" size={24} style={{marginBottom:20, marginRight:20,}}/>
        </View>
      </Send>
    );
  };

  const renderComposer = (props) => {
    return (
      <View className="flex-1 justify-center items-center flex">
        <Composer
          {...props}
          placeholder="Send a Message"
          textInputStyle={{
            borderWidth: 0.1,
            borderRadius: 30,
            backgroundColor: "#ebeced",
            minHeight: 50,
            marginTop: 90,
            width: "80%",
            // paddingTop:17,
            paddingLeft:20
          }}
        />
       
      </View>
    );
  };

  const renderInputToolbar = (props) => {
    return (
      <View className="flex flex-1 flex-row items-center justify-center">
        <InputToolbar
          {...props}
          containerStyle={{
            flex: 1,
            backgroundColor: "aquablue",
            width: "100%",
            alignSelf: "center",
            height: 90,
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,
            borderRightWidth: 0.18,
            borderLeftWidth: 0.18,
            borderColor: "grey",
            alignItems:"center",
            justifyContent:'center'
          }}
        />
      </View>
    );
  };

  return (
    <View className="flex flex-1 bg-primary">
      <View className="flex-1 bg-primary justify-start items-center flex-row">
        <Image
          source={require("../../assets/images/sheldon.jpeg")}
          className="rounded-full w-14 h-14 ml-4 self-center"
        />
        <Text className="text-xl font-semibold self-center mb-3 ml-3 text-gray-400">
          Sabin
        </Text>
        <Text className="w-1/2 right-12 text-gray-300 mt-7">online</Text>
        <Ionicons />
      </View>
      <View
        style={{ flex: 7, borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className="bg-white"
      >
        <GiftedChat
          messages={messages}
          onSend={(messages) => onSend(messages)}
          user={{
            _id: 1,
          }}
          renderBubble={(props) => renderBubble(props)}
          alwaysShowSend
          renderSend={renderSend}
          renderComposer={renderComposer}
          renderInputToolbar={renderInputToolbar}
          messagesContainerStyle={{
            paddingBottom: 50,
            backgroundColor: "aquablue",
          }}
        />
      </View>
    </View>
  );
};

export default chat;
