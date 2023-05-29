import React from 'react';
import { View, Text, FlatList } from 'react-native';
import ChatCard from '../components/chatCard';

const MessageListScreen = () => {
  const messages = [
    {
      id: 1,
      sender: 'John',
      message: 'Hey, how are you?',
      timestamp: '10:30 AM',
    },
    {
      id: 2,
      sender: 'Jane',
      message: 'I\'m doing great, thanks!',
      timestamp: '10:35 AM',
    },
    {
        id: 3,
        sender: 'John',
        message: 'Hey, how are you?',
        timestamp: '10:30 AM',
      },
      {
        id: 4,
        sender: 'Jane',
        message: 'I\'m doing great, thanks!',
        timestamp: '10:35 AM',
      },
      {
        id: 5,
        sender: 'John',
        message: 'Hey, how are you?',
        timestamp: '10:30 AM',
      },
      {
        id: 6,
        sender: 'Jane',
        message: 'I\'m doing great, thanks!',
        timestamp: '10:35 AM',
      },
      {
        id: 7,
        sender: 'John',
        message: 'Hey, how are you?',
        timestamp: '10:30 AM',
      },
      {
        id: 8,
        sender: 'Jane',
        message: 'I\'m doing great, thanks!',
        timestamp: '10:35 AM',
      },
      {
        id: 9,
        sender: 'John',
        message: 'Hey, how are you?',
        timestamp: '10:30 AM',
      },
      {
        id: 10,
        sender: 'Jane',
        message: 'I\'m doing great, thanks!',
        timestamp: '10:35 AM',
      },
    // Add more messages here
  ];

  return (
    <View className={`flex-1 bg-white`}>
      <View className={`flex-1 p-4`}>
        {
            messages ? (
                <>
                <FlatList  
                 data={messages}
                 showsVerticalScrollIndicator ={false}
                 contentContainerStyle = {{
                    paddingVertical : 5
                  }}
                 renderItem={(itemData) => {
                    return(
                        <>
                        <ChatCard message={itemData.item.message} time={itemData.item.timestamp}  id={itemData.item.id} sender={itemData.item.sender}  />
                        </>
                    )
                 }}
                />
                </>
            )
            :  
            <></>
        }
      </View>
    </View>
  );
};

export default MessageListScreen;
