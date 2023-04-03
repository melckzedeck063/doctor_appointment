import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

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
      <Text className={`text-center text-cyan-600 font-bold text-xl py-6`}>AppointmentScreen</Text>
    </View>
  )
}

export default AppointmentScreen