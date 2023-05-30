import { View, Text,TouchableOpacity,Image, StyleSheet } from 'react-native'
import React from 'react'
import image1 from '../assets/images/pexels-shvets-production-8413184.jpg';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';

export default function ChatCard(props) {

    const navigation =   useNavigation();
  return (
    <TouchableOpacity style={style.card} className='my-1 rounded-lg' 
       onPress={() => navigation.navigate('ChatScreen')}
    >
      <View className={`mb-4`}>
      <View className={`flex-row items-center mb-1 px-1`}>
        <View className="mt-2">
            <Image source={image1} className={`w-12 h-12 rounded-full mr-4`} />
        </View>
            <View className={`flex-1 mt-2`}>
              <Text style={{fontSize : responsiveFontSize(2.3)}} className={`font-medium mb-1`}>{props.sender}</Text>
              <Text style={{fontSize : responsiveFontSize(1.6)}}  className={`text-gray-500 mt-1`}>{props.message}</Text>
            </View>
            <Text className={`text-gray-500 text-sm`}>{props.time}</Text>
          </View>
          </View>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
    card: {
      flex  : 1,
      elevation : 4,
      backgroundColor: 'white',
      shadowColor: 'black',
      shadowOffset :{width : 0, height : 2} ,
      shadowOpacity: 0.25,
      shadowRadius : 4,
      width  : '99%',
      alignSelf :  'center'
     }
  })