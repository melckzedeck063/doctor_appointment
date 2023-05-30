import { Feather, Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList, Platform, KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

import  {responsiveHeight, responsiveWidth, responsiveFontSize} from 'react-native-responsive-dimensions'

export default function ChatScreen() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([
    { id: 1, sender: true, message: 'Hey, how are you?' },
    { id: 2, sender: false, message: 'I am doing well, thanks for asking!' },
    { id: 3, sender: true, message: 'That is good to hear. What have you been up to?' },
    { id: 4, sender: false, message: 'Not much, just been working on some projects. How about you?' },
  ]);

  const handleSendMessage = () => {
    if (message.trim() === '') {
      return;
    }

    const newMessage = {
      id: chat.length + 1,
      sender: true,
      message: message.trim(),
    };

    setChat([...chat, newMessage]);
    setMessage('');
  };

  return (
      <KeyboardAwareScrollView style={{marginVertical : 5}}>
       <View style={{backgroundColor : 'white', height :  responsiveHeight(90)}} className="relative">

        <View  style={{ width : responsiveWidth(94), alignSelf : 'center'}}>
          <FlatList
             data={chat}
             renderItem={(itemData) => {
                 return (
                     <View key={itemData.item.id} style={itemData.item.sender ? styles.sender : styles.receiver}>
                     <Text style={itemData.item.sender ? styles.senderText : styles.receiverText}>{itemData.item.message}</Text>
                   </View>
                 )
             }}
             keyExtractor={(item) =>item.id}
             />
       </View>

 <KeyboardAvoidingView style={{alignSelf : 'center'}} className={`absolute bottom-3 ${Platform.select({ios : 'bottom-10'})}`}>
<View style={{alignSelf : 'center', width  : responsiveWidth(93.5)}} className="flex flex-row justify-between">
  <TextInput  className={`rounded-lg bg-slate-200 px-2 py-3 w-9/12 ${Platform.select({android : 'py-2'})}`}
  //   style={styles.input}
    placeholder="Type your message here"
    multiline  = {true}
    value={message}
    onChangeText={(text) => setMessage(text)}
  />
  <TouchableOpacity className="bg-cyan-600 px-2 py-1 space-x-2 flex flex-row rounded-lg" onPress={handleSendMessage}>
      <Text className={`mt-1.5`}>
        <Ionicons name='send' size={18} color="white" />
      </Text>
    <Text style={styles.sendButtonText} className={`text-sm mt-1.5`}>Send</Text>
  </TouchableOpacity>
</View>
{/* <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} />
<KeyboardAvoidingView behavior={Platform.OS === 'android' ? 'padding' : 'height'} /> */}
 </KeyboardAvoidingView>
</View>
</KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  chat: {
    flex: 1,
    paddingBottom: 20,
  },
  sender: {
    alignSelf: 'flex-end',
    backgroundColor: '#0891b2',
    borderRadius: 20,
    padding: 10,
    marginVertical: 5,
    maxWidth: '80%',
  },
  receiver: {
    alignSelf: 'flex-start',
    backgroundColor: '#f9f6ee',
    borderRadius: 20,
    padding: 10,
    marginVertical: 5,
    maxWidth: '80%',
  },
  senderText: {
    color: '#fff',
    fontSize: responsiveFontSize(1.5),
  },
  receiverText: {
    color: '#333',
    fontSize: responsiveFontSize(1.5) ,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0EAD6',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  input: {
    flex: 1,
    height: 40,
    marginRight: 10,
    backgroundColor : '#FFF'
  },
  sendButton: {
    backgroundColor: '#2E8B57',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});