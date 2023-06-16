import { View, Text , StyleSheet, Image, TouchableOpacity, Platform} from 'react-native'
import React from 'react'
import { useWindowDimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { IMAGE_URL } from '../store/URL';

const DiseaseCard = (props) => {

    const {height, width} =  useWindowDimensions();
    const navigation =  useNavigation();

  return (
    <TouchableOpacity className="mx-1.5" 
    onPress={() => navigation.navigate('NewDoctor', {
        props
      }) }
    >
      <View  className="bg-whitee-200 p-2 rounded-full">
        <Image source={{uri  : `${IMAGE_URL}/${props.image}`}} className="h-24 w-24 p-0.5 rounded-full"  />
      </View>
      <Text style={{fontSize : responsiveFontSize(1.6)}} className={`text-white font-medium capitalize pt-1 -ml-1.5 ${Platform.select({android : 'text-sm'})}`} > {props.name} </Text>
    </TouchableOpacity>
  )
}

export default DiseaseCard

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