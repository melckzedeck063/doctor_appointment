import { View, Text , StyleSheet, Image, TouchableOpacity, Platform} from 'react-native'
import React from 'react'
import { useWindowDimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const ServiceCard = (props) => {

    const {height, width} =  useWindowDimensions();
    const navigation =  useNavigation();

  return (
    <TouchableOpacity className="mx-1.5" 
    onPress={() => navigation.navigate('Disease', {
        props
      }) }
    >
      <View  className="bg-cyan-600 p-2 rounded-lg">
        <Image source={props.image} className="h-24 w-28 overflow-hidden"  />
      </View>
      <Text style={{fontSize : responsiveFontSize(1.6)}} className={`text-slate-700 font-medium capitalize ${Platform.select({android : 'text-sm'})}`} > {props.name} </Text>
    </TouchableOpacity>
  )
}

export default ServiceCard

const style = StyleSheet.create({
    card: {
      flex  : 1,
      elevation : 4,
      backgroundColor: 'white',
      shadowColor: 'black',
      shadowOffset :{width : 0, height : 2} ,
      shadowOpacity: 0.25,
      shadowRadius : 8,
      width  : '90%',
      height  : '3%'
     }
  })