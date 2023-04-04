import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const AppointmenntComponent = (props) => {

    const navigation =   useNavigation();

    // console.log(props)

  return (
    <TouchableOpacity style={style.card} className={`w-full bgg-white rounded-lg mt-1 p-1 my-2`}
      onPress={() => navigation.navigate('AppointmentDetails', {props}) }
    >
        <View className={`border-b border-slate-400  px-2 flex flex-row justify-between my-2 pb-2`}>
            <View className={``}>
                <Text className={`text-slate-700 my-1 `} >Date</Text>
                <Text className={`text-slate-800 font-medium text-lg ${Platform.select({android  : 'text-sm'})}`}>4 April 2023 </Text>
            </View>
            <View className={``}>
                <Text className={`text-slate-700 my-1 `} > Time </Text>
                <Text className={`text-slate-800 font-medium text-lg ${Platform.select({android  : 'text-sm'})}`}> 10:30 Am </Text>
            </View>
            <View className={``}>
                <Text className={`text-slate-700 my-1 `} >Doctor </Text>
                <Text className={`text-slate-800 font-medium text-lg ${Platform.select({android  : 'text-sm'})}`}> {props.name} </Text>
            </View>
        </View>
        <View  className={``}>
            <View className={`flex flex-row justify-between my-2`}>
                <View className={``}>
                     <Text className={`text-slate-700 my-1 `} > Type of Appointment </Text>
                     <Text className={`text-slate-800 font-medium text-lg ${Platform.select({android  : 'text-sm'})}`}> Medicine Specialist </Text>
                </View>
                <View className={``}>
                     <Text className={`text-slate-700 my-1 `} >Hospital </Text>
                     <Text className={`text-slate-800 font-medium text-lg ${Platform.select({android  : 'text-sm'})}`}>BMH  </Text>
                </View>
                <View className={``}>
                     <Text className={`text-slate-700 my-1 `} >Status </Text>
                     <Text className={`text-amber-500 font-medium text-lg ${Platform.select({android  : 'text-sm'})}`}>Pending </Text>
                </View>
            </View>
        </View>

    </TouchableOpacity>
  )
}

export default AppointmenntComponent

const style = StyleSheet.create({
    card: {
    //   flex  : 1,
      elevation : 4,
      backgroundColor: 'white',
      shadowColor: 'black',
      shadowOffset :{width : 0, height : 2},
      shadowOpacity: 0.25,
      shadowRadius : 8,
      width  : '95%',
      alignSelf : 'center',
     }
  })