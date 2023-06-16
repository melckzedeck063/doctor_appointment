import { View, Text, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native'
import React from 'react'

import {FontAwesome, Ionicons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { IMAGE_URL } from '../store/URL'
import { responsiveFontSize } from 'react-native-responsive-dimensions'

const ProductCard = (props) => {
  const navigation =  useNavigation();

  // console.log(props.image)

  return (
    <View style={style.card} className="bg-slate-700 mx-1.5 my-1.5 relative rounded-lg">
      <TouchableOpacity 
       onPress={() => navigation.navigate('Doctor', {
        props
       }) }
      >
        <Image source={{uri  :  `${IMAGE_URL}/${props.image}`}} className="h-64 w-full rounded-lg"  />
      <View style={{alignSelf : 'center'}} className="bg-cyan-600 absolute w-11/12 rounded-lg -pt-1 bottom-0" >
            <View className="mtt-1 px-1">
                <View className={`pyy-1`}>
                   <Text style={{fontSize : responsiveFontSize(1.9)}} className={`text-white font-bold capitalize mb-1 ${Platform.select({android : 'text-sm'})}`} > {props.name} {props.lname} </Text>
                    <Text className={`text-sm -mt-1 ml-1 text-white`}>Medicine Specialist</Text>
                </View>

             <View className={`py-1 px-1 -mt-1`}>
              <Text className={`text-white font-bold text-lg -mt-0.5 ${Platform.select({android : 'text-xs'})}`} >Experience </Text>
              <Text className={`font-medium -mt-1 text-sm text-white`} > {props.experience} </Text>
             </View>
            </View>
            
      </View>
      </TouchableOpacity>
    </View>
  )
}

export default ProductCard

const style = StyleSheet.create({
    card: {
      flex  : 1,
      elevation : 4,
      backgroundColor: 'white',
      shadowColor: 'black',
      shadowOffset :{width : 0, height : 2} ,
      shadowOpacity: 0.25,
      shadowRadius : 8,
      width  : '90%'
     }
  })