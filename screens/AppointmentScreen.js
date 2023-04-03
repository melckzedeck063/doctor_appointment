import { View, Text, FlatList } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AppointmenntComponent from '../components/AppointmenntComponent';
import  {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions'

import image1 from '../assets/images/pexels-shvets-production-8413184.jpg';
import image2 from '../assets/images/pexels-alexander-zvir-9062164.jpg';
import image3 from '../assets/images/pexels-mix-and-match-studio-4227112.jpg';
import image4 from '../assets/images/pexels-thirdman-7659874.jpg';
import image from '../assets/images/pexels-thirdman-7659874.jpg'

const doctors =  [
    {name : "James Cotton", image :image1, id : 1 },
  {name : "Joshua Francis", image :image2, id : 2 },
  {name : "Hamilton Partey", image :image3, id: 3 },
  {name : "Whitney Humphrey", image : image4 , id : 4},
  {name : "Miranda Johnson", image :image1, id: 5 },
  {name : "Ezekiel Michael", image :image2, id : 6 },
]

const AppointmentScreen = () => {

    const  navigation =  useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle : {
                backgroundColor : "#0891b2"
            },
            headerTintColor : "white"
        }) 
    })


  return (
    <View className={``}>
      <Text className={`text-center text-cyan-600 font-bold text-xl py-2`}>My Appointments</Text>

      <View style={{height : responsiveHeight(75)}}  className={``}>

      <FlatList
         data={doctors}
         showsVerticalScrollIndicator={false}
         renderItem={(itemData) =>{
            return (
                <AppointmenntComponent name={itemData.item.name}   />
            )
         }}
         keyExtractor={(item) => item.id}
      />

      </View>
    </View>
  )
}

export default AppointmentScreen