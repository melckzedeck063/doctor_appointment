import { View, Text, Image, useWindowDimensions, TouchableOpacity, ScrollView, Platform } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import {AntDesign, FontAwesome, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons'
import {useResponsiveHeight, useResponsiveWidth, useResponsiveFontSize, responsiveFontSize} from 'react-native-responsive-dimensions'
import { IMAGE_URL } from '../store/URL'

const DoctorScreen = () => {

    const navigation =  useNavigation();
    const {params : {props}} =  useRoute();
    const {width, height} =  useWindowDimensions();

    console.log(props);

    useLayoutEffect(() => {
        navigation.setOptions({
        //    headerShown : false
        })
    })

  return (
    <>
     <ScrollView style={{backgroundColor : '#fff'}}  className="bg-slate-800 h-full">
     <View >
     <View className="relative">
        <Image style={{height : height/2.2}} source={{uri : `${IMAGE_URL}/${props.image}`}} className="w-full" />
        <View className='absolute inset-0 bg-black/30' ></View>
        {/* <View className="absolute bottom-2 px-2">
            <Text className={`font-bold my-1.5 text-2xl capitalize text-white ${Platform.select({android : 'text-xl'})}`}>{props.name}</Text>
            <View className="flex flex-row justify-between bg-orange-500 p-0.5 rounded-lg">
                <TouchableOpacity className="bg-slatee-700 rounded-full h-10 w-10 mt-1">
                    <Text className="text-center font-bold -ml-0.5 -mt-0.5">
                        {Platform.select({ios : <FontAwesome name='minus-circle' size={42} color="white" /> })}
                        {Platform.select({android : <FontAwesome name='minus-circle' size={32} color="white" /> })}
                          </Text>
                </TouchableOpacity>
                <Text className={`font-bold text-white text-3xl px-2 py-1 ${Platform.select({android : 'text-2xl'})}`}> 2 </Text>
                <TouchableOpacity className={`bg-slatee-700 rounded-full h-10 w-10 mt-1`}>
                    {Platform.select({ios : <Text className="text-center font-bold -ml-0.5 -mt-0.5"> <Ionicons name='ios-add-circle' size={42} color="white" /> </Text> })}
                    {Platform.select({android : <Text className="text-center font-bold -ml-0.5 -mt-0.5"> <Ionicons name='ios-add-circle' size={32} color="white" /> </Text> })}
                    
                </TouchableOpacity>
            </View>
        </View> */}
      </View>

      <View className="flex flexx-row justify-between py-2 my-2 px-4">
        <View>
            <View className="flex flex-row justify-between">
                <View>
                    <Text className={`font-bold capitalize text-slate-500 text-xl ${Platform.select({android : 'text-lg'})}`}>{props.name} {props.lname} </Text>
                    <Text className={`text-slate-500 font-medium py-1 ${Platform.select({android : 'text-xs'})}`}>Medicine Specialist</Text>
                </View>
                <View>
                     <TouchableOpacity className="bg-cyan-600 px-4 py-2 rounded-lg flex-row flex space-x-4" 
                       onPress={() => navigation.navigate('Message') }
                     >
                        <Text  className={``}>
                            <AntDesign name='message1' size={24}  color='white' />
                        </Text>
                        <Text className={`text-white font-medium text-lg ${Platform.select({android : 'text-sm'})}`} >Message</Text>
                     </TouchableOpacity>
                </View>
            </View>
            <View className={`flex flex-row space-x-1 -ml-2`}>
                   <Text className="text-center font-bold -ml-1"> <Ionicons name='location' size={24} color="teal"/> </Text>
                <View>
                   <Text className={`text-slate-500 mt-1  font-medium`} >The Benjamin Mkapa Hospital </Text>
                </View>
            </View>
        </View>
        
      </View>

     {/* <View className="mb-3 p-2">
       <Text className={`font-bold capitalize text-slate-500 px-1.5 text-xl ${Platform.select({android : 'text-lg'})}`}>Ingredients</Text>
       <View className="bg-slate-700 rounded-lg shadow-lg felx flex-row justify-between m-3 py-1 px-2">
        <View className="bg-slate-600 rounded-2xl w-10 h-10">
            <Text className="text-center font-bold mt-1"> <MaterialCommunityIcons name='fruit-watermelon' size={32} color="orange" /> </Text>
        </View>
        <View className="bg-slate-600 rounded-2xl w-10 h-10">
            <Text className="text-center mt-1 font-bold"><MaterialCommunityIcons name='fruit-grapes' size={32} color="red" /></Text>
        </View>
        <View className="bg-slate-600 rounded-2xl w-10 h-10">
            <Text className="text-center mt-1 font-bold"><MaterialCommunityIcons name='fruit-pineapple' size={32} color="gold" /></Text>
        </View>
        <View className="bg-slate-600 rounded-2xl w-10 h-10">
            <Text className="text-center mt-1 font-bold"><MaterialCommunityIcons name='fruit-citrus' size={32} color="orange" /></Text>
        </View>
       </View>
     </View> */}

     <View className="mx-2 px-2 mb-3">
        <Text className={`font-bold capitalize my-2 text-slate-500 text-xl ${Platform.select({android : 'text-lg'})}`}>Bibliography</Text>
        <Text className={`font-mediumm capitalize text-slate-500 pxx-1 ${Platform.select({android : 'text-xs'})}`}> {props.bibliography} </Text>
     </View>

     <View className={`flex-row flex justify-between mx-4 my-2`}>
        <View className={``}>
            <View className="flex flex-row space-x-3">
             <Text className="text-center font-bold -ml-1"> <Ionicons name='location' size={24} color="teal"/> </Text>
            <Text style={{fontSize : responsiveFontSize(2)}} className={`text-slate-500 text-sm`}>Location</Text>
            </View>
            <Text className={`text-slate-600 font-bold text-lg`}> The Benjamin Mkapa  Hospital </Text>
        </View>

        <View className={``}>
            <Text style={{fontSize : responsiveFontSize(2)}} className={`text-slate-500 text-sm`}>Experience</Text>
            <Text className={`text-slate-600 font-bold text-lg`}> {props.experience} </Text>
        </View>

        {/* <View className={``}>
            <Text className={`text-slate-500 text-sm`}>Reviews</Text>
            <Text className={`text-slate-600 font-bold text-lg`}> 2.00K+ </Text>
        </View> */}
     </View>


        {/* <View className={``}>
            <Text className={`text-lg  text-slate-700 font-bold px-2 my-1.5`}> Working Hours </Text>
            <View className={`flex flex-row justify-between mx-4`}>
                <TouchableOpacity className={`bg-cyan-600 rounded-lg py-3 px-2`} >
                    <Text className={`text-white font-bold`} > 09:00 AM </Text>
                </TouchableOpacity>
                <TouchableOpacity className={`bg-cyan-600 rounded-lg py-3 px-2`} >
                    <Text className={`text-white font-bold`} > 04:00 PM </Text>
                </TouchableOpacity>
                <TouchableOpacity className={`bg-cyan-600 rounded-lg py-3 px-2`} >
                    <Text className={`text-white font-bold`} > 06:00 PM </Text>
                </TouchableOpacity>
            </View>
        </View>

        <View className={``}>
            <Text className={`text-lg  text-slate-700 font-bold px-2 my-1.5`}> Schedules </Text>
            <View className={`flex flex-row justify-between mx-4`}>
                <TouchableOpacity className={`bg-cyan-600 rounded-lg py-3 px-2`} >
                    <Text className={`text-white font-bold`} > 09:00 AM </Text>
                </TouchableOpacity>
                <TouchableOpacity className={`bg-cyan-600 rounded-lg py-3 px-2`} >
                    <Text className={`text-white font-bold`} > 04:00 PM </Text>
                </TouchableOpacity>
                <TouchableOpacity className={`bg-cyan-600 rounded-lg py-3 px-2`} >
                    <Text className={`text-white font-bold`} > 06:00 PM </Text>
                </TouchableOpacity>
            </View>
        </View> */}

      <TouchableOpacity style={{alignSelf : 'center'}} className="bg-cyan-600 rounded-lg w-10/12 h-12 px-4 pt-1 my-6"
        onPress={() => navigation.navigate('Checkout')}
      >
         <Text className={`font-bold text-white text-center mt-1 text-lg ${Platform.select({android : 'text-sm'})}`}>Book  an Appointment</Text>
      </TouchableOpacity>

     

     </View>
     </ScrollView>
    </>
  )
}

export default DoctorScreen