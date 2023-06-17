import { Feather, Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList, Platform, KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

import  {responsiveHeight, responsiveWidth, responsiveFontSize} from 'react-native-responsive-dimensions'
import { useDispatch, useSelector } from 'react-redux';
import { getMyChats, sendMessage } from '../store/actions/message_actions';

export default function MessageScreen() {
  const [message, setMessage] = useState('');
  const {params : {props}} =  useRoute();
  const dispatch =  useDispatch();
  const [reload,setReload] =  useState(0);

  setTimeout(() => {
    if(reload  <= 5){
      setReload(reload => reload + 1)
    }
  }, 1000);

  const messages =  useSelector(state => state.message);
  
  // console.log(messages.chats)


  useEffect(()  => {
     
    if(messages &&  messages.chats && reload < 4){
      dispatch( getMyChats(props.id) )
    }
  },[])

  const handleSendMessage = () => {
    if (message.trim() === '') {
      return;
    }

    const newMessage = {
      receiver : props.id,
      message: message.trim(),
    };
    
    dispatch( sendMessage(newMessage))

    dispatch( getMyChats(props.id) )
  };

  return (
      <KeyboardAwareScrollView style={{marginVertical : 5}}>
       <View style={{backgroundColor : 'white', height :  responsiveHeight(90)}} className="relative">
        <View className="flex-row space-x-4 justify-center border-b-2 border-cyan-700">
        <Text style={{fontSize  :  responsiveFontSize(2)}} className="text-center text-cyan-700 font-medium pt-1 pb-3" > To :  </Text>
          <Text style={{fontSize  :  responsiveFontSize(2)}} className="text-center text-cyan-700 font-bold pt-1.5 pb-3" > {props.name} {props.lname} </Text>
        </View>
        <View  style={{ width : responsiveWidth(94), alignSelf : 'center'}}>
          {
            messages?.chats?.data?.messages.length >=1?(
              <>
            <FlatList
               data={messages.chats.data.messages}
               renderItem={({ item }) => (
                <View key={item._id} style={item.sender === "648b7a972e783eb6979d16d8" ? styles.sender : styles.receiver}>
                  <Text style={item.sender === "648b7a972e783eb6979d16d8" ? styles.senderText : styles.receiverText}>
                    {item.message}
                  </Text>
                </View>
              )}
              
               />
              </>
            )
            : 
            <>
            <View  >
              <Text style={{fontSize : responsiveFontSize(2)}} className="text-center text-red-400 font-bold py-32" >No Messages</Text>
            </View>
            </>
          }
       </View>

 <KeyboardAvoidingView style={{alignSelf : 'center'}} className={`absolute bottom-3 ${Platform.select({ios : 'bottom-10'})}`}>
<View style={{alignSelf : 'center', width  : responsiveWidth(93.5)}} className="flex flex-row justify-between">
  <TextInput  className={`rounded-lg bg-slate-200 px-2 py-3 w-9/12 ${Platform.select({android : 'py-2'})}`}
  //   style={styles.input}
    placeholder="Type your message here"
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