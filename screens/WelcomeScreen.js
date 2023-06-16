import { View, Text, ImageBackground, TouchableOpacity, Platform } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import image1 from '../assets/images/pexels-thirdman-7659874.jpg';
import {LinearGradient} from 'expo-linear-gradient'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const WelcomeScreen = () => {
    const  navigation =  useNavigation();
    const {height, width} = useNavigation();

    useLayoutEffect(()  => {
        navigation.setOptions({
            headerShown  :  false
        })
    })

  return (
      <LinearGradient colors={['#3498DB', 'transparent']} className="bg-slate-100 w-full h-full" style={{flex : 1}}>
          <View className={`h-full`}>
        <ImageBackground  resizeMode='cover'
           source={image1}
           style={{
            flex: 1,
            justifyContent: 'center'
          }}
          imageStyle={{ opacity : 0.9}}
        >
            <View className="absolute inset-0 bg-slate-700 opacity-0"></View>

            <View className={`relative`}>
              <View className={`py-4 h-64 bg-slate-700 shadow-md px-2 rounded-xl absolute ${height < 450 ? 'top-6' : 'top-8'} ${width < 380 ? '11/12' : '10/12'}`}  style={{alignSelf : 'center', backgroundColor : '#fff'}}>
                 <View style={{alignSelf : 'center'}}  className={`w-10/12 px-2`}>
                    <Text  className={`text-sky-600 font-bold text-xl text-center py-4`}> Find Your Doctor </Text>
                    <Text className={`px-1 font-medium  ${Platform.select({android : 'text-xs'})}`} >  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam beatae perspiciatis rem a animi mollitia tempore excepturi, voluptas est qui provident exercitationem expedita recusandae</Text>

                    <TouchableOpacity
                       onPress={() => navigation.navigate('Login') }
                    style={{alignSelf : 'center'}} className={`bg-sky-500 px-4 py-2 rounded-lg w-6/12 my-4`}>
                        <Text style={{fontSize : responsiveFontSize(2)}} className={`font-bold text-center text-white`}> Let's Start </Text>
                    </TouchableOpacity>
                 </View>
            </View>
            </View>

        </ImageBackground>
    </View>
    </LinearGradient>

  )
}

export default WelcomeScreen