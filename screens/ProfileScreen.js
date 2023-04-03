import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const ProfileScreen = () => {
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
      <Text className={`text-center text-cyan-600 text-xl py-6`}>ProfileScreen</Text>
    </View>
  )
}

export default ProfileScreen