import { View, Text, Image,TouchableOpacity, ScrollView, Platform } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useWindowDimensions } from 'react-native';
import {Ionicons, FontAwesome} from '@expo/vector-icons'

const AppointmentDetails = () => {
    const  navigation =  useNavigation();
    const  {height, width} =  useWindowDimensions();
    const [monday, setMonday]  =  useState(false);
    const [wednesday, setWednesday]  =  useState(false);
    const [friday, setFriday]  =  useState(false);
    const [saturday, setSaturday]  =  useState(false);

    const [nineAm, setNineAm] = useState(false);
    const [fourPm, setFourPm] = useState(false);
    const [sixPm, setSixPm] = useState(false);


    const {params : {props}} =  useRoute();


    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown : true,
            headerStyle : {
                backgroundColor : "#0891b2"
            },
            headerTintColor : "white"
        })
    })

    const chooseMonday =  () => {
        setMonday(true);
        setWednesday(false);
        setFriday(false);
        setSaturday(false);
    }

    const chooseWednesday = () => {
        setWednesday(true)
        setMonday(false);
        setFriday(false);
        setSaturday(false);
    }

    const chooseFriday = () => {
        setFriday(true)
        setMonday(false);
        setWednesday(false);
        setSaturday(false);
    }

    const chooseSaturday = () => {
        setSaturday(true)
        setMonday(false);
        setWednesday(false);
        setFriday(false);
    }

    const chooseNine = () =>{
        setNineAm(true);
        setFourPm(false);
        setSixPm(false);
    }

    const chooseFour = () =>{
        setFourPm(true);
        setNineAm(false);
        setSixPm(false);
    }
    const chooseSix = () =>{
        setSixPm(true);
        setNineAm(false);
        setFourPm(false);
    }

  return (
    <ScrollView className={``}>
      {/* <Text className={`text-cyan-600 text-center text-xl py-4`}>AppointmentDetails</Text> */}

      <View className="relative">
        <Image style={{height : height/3.5}} source={props.image} className="w-full" />
        <View className='absolute inset-0 bg-black/30' ></View>
      </View>

      <View className="flex flexx-row justify-between py-2 my-1 px-4">
        <View>
            <Text className={`font-bold capitalize text-slate-500 text-xl ${Platform.select({android : 'text-lg'})}`}>{props.name}</Text>
            <Text className={`text-slate-500 font-medium py-1 ${Platform.select({android : 'text-xs'})}`}>Medicine Specialist</Text>
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
        <Text className={`font-mediumm capitalize text-slate-500 pxx-1 ${Platform.select({android : 'text-xs'})}`}> 
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quam suscipit veniam ut doloremque quas, reprehenderit commodi deserunt 
         perferendis ducimus ullam fuga sequi optio laboriosam quaerat ipsum asperiores eius nemo.
        </Text>
     </View>

     <View className={`flex-row flex justify-between mx-4 my-2`}>
        <View className={``}>
            <Text className={`text-slate-500 text-sm`}>Patients</Text>
            <Text className={`text-slate-600 font-bold text-lg`}> 1.02K+ </Text>
        </View>

        <View className={``}>
            <Text className={`text-slate-500 text-sm`}>Experience</Text>
            <Text className={`text-slate-600 font-bold text-lg`}> 5 Years </Text>
        </View>

        <View className={``}>
            <Text className={`text-slate-500 text-sm`}>Reviews</Text>
            <Text className={`text-slate-600 font-bold text-lg`}> 2.00K+ </Text>
        </View>
     </View>


        <View className={``}>
            <Text className={`text-lg  text-slate-500 font-bold px-2 my-1.5`}> Working Hours </Text>
            <View className={`flex flex-row justify-between mx-4`}>
                <TouchableOpacity className={`bg-white border-slate-300 border-2 rounded-lg py-3 px-2 ${nineAm? 'bg-cyan-600' : ''}`} 
                   onPress={chooseNine}
                >
                    <Text className={`text-slate-600 font-bold ${nineAm ? 'text-white' : ''}`} > 09:00 AM </Text>
                </TouchableOpacity>
                <TouchableOpacity className={`bg-white border-slate-300 border-2 rounded-lg py-3 px-2 ${fourPm? 'bg-cyan-600' : ''}`} 
                   onPress={chooseFour}
                >
                    <Text className={`text-slate-600 font-bold ${fourPm ? 'text-white' : ''}`} > 04:00 PM </Text>
                </TouchableOpacity>
                <TouchableOpacity className={`bg-white border-slate-300 border-2 rounded-lg py-3 px-2 ${sixPm? 'bg-cyan-600' : ''}`} 
                   onPress={chooseSix}
                >
                    <Text className={`text-slate-600 font-bold ${sixPm ? 'text-white' : ''}`} > 06:00 PM </Text>
                </TouchableOpacity>
            </View>
        </View>

        <View className={``}>
            <Text className={`text-lg text-slate-500 font-bold px-2 my-2`}> Schedules </Text>
            <View className={`flex flex-row justify-between mx-4`}>
                <TouchableOpacity className={`bg-white  border-2 border-slate-300 rounded-lg py-3 px-2 ${monday? 'bg-cyan-600' : ''}`} 
                   onPress={chooseMonday}
                >
                    <Text className={`text-slate-600 ${Platform.select({android :  "text-xs"})} font-bold ${monday? 'text-white' : ''}`} > MONDAY </Text>
                </TouchableOpacity>
                <TouchableOpacity className={`bg-white  border-2 border-slate-300 rounded-lg py-3 px-2 ${wednesday? 'bg-cyan-600' : ''}`} 
                   onPress={chooseWednesday}
                >
                    <Text className={`text-slate-600 ${Platform.select({android :  "text-xs"})} font-bold ${wednesday? 'text-white' : ''}`} > WEDNESDAY </Text>
                </TouchableOpacity>
                <TouchableOpacity className={`bg-white  border-2 border-slate-300 rounded-lg py-3 px-2 ${friday? 'bg-cyan-600' : ''}`} 
                   onPress={chooseFriday}
                >
                    <Text className={`text-slate-600 ${Platform.select({android :  "text-xs"})} font-bold ${friday? 'text-white' : ''}`} > FRIDAY </Text>
                </TouchableOpacity>
                <TouchableOpacity className={`bg-white  border-2 border-slate-300 rounded-lg py-3 px-2 ${saturday? 'bg-cyan-600' : ''}`} 
                   onPress={chooseSaturday}
                >
                    <Text className={`text-slate-600 ${Platform.select({android :  "text-xs"})} font-bold ${saturday? 'text-white' : ''}`} > SATURDAY </Text>
                </TouchableOpacity>
            </View>
        </View>

        <TouchableOpacity style={{alignSelf : 'center'}} className="bg-cyan-600 rounded-lg w-10/12 h-12 px-4 pt-1 my-6">
         <Text className={`font-bold text-white text-center mt-1 text-lg ${Platform.select({android : 'text-sm'})}`}>Reschedule</Text>
      </TouchableOpacity>

    </ScrollView>
  )
}

export default AppointmentDetails