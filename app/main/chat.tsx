import { Ionicons } from "@expo/vector-icons";
import React, { useState, useCallback, useEffect } from "react";
import { View } from "react-native";
import { Bubble, Composer, GiftedChat, Send } from "react-native-gifted-chat";

const search = () => {
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
            avatar: require('../../assets/images/sheldon.jpeg'),
          },
          sent: true,
        }, 
        {
          _id: 2,
          text: "Hello developer",
          createdAt: new Date(),
          user: {
            _id: 1,
            name: "Sheldon",
            avatar: require('../../assets/images/sheldon.jpeg'),
          },
          sent: true,
          received: true,
          pending: true
        },  
      ]),
    []
  );

  const onSend = useCallback((messages) => {
    setMessages((prevMessages) => GiftedChat.append(prevMessages, messages))
  } , [])

  const renderBubble = (props) => {//{...props} passes relevant props only to bubble
    return(
    <Bubble 
    {...props}
    wrapperStyle={{
      left: {backgroundColor:'silver'},
      right: {backgroundColor:'#003d62'}
    }}
    />)
  }

  const renderSend = (props) => {
  return (
    <Send {...props}> 
      <View>
        <Ionicons name="send" size={24} style={{marginBottom:10, backgroundColor:'red'}}/>
      </View>
    </Send>
  )}

  const renderComposer = (props) => {
    return (
      <Composer
      {...props}
      placeholder="Send a Message"
      textInputStyle ={{
        color:'red',
        borderWidth:2,
        padding:10,
        width:'100%',
        borderRadius:50
      }}
      />
    )
  }

  return(
  <GiftedChat
    messages ={messages}
    onSend={(messages) => onSend(messages)}
    user={{
      _id: 1,
    }}
    renderBubble={(props) => renderBubble(props)}
    alwaysShowSend
    renderSend={renderSend}
    renderComposer={renderComposer}
  />
  )
};

export default search;
