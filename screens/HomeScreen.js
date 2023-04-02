import { View, Text, TouchableOpacity, useWindowDimensions,TextInput, StyleSheet, ScrollView, FlatList, Platform } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import {Controller, useForm} from 'react-hook-form'
import { Ionicons, FontAwesome, FontAwesome5, Entypo, MaterialCommunityIcons }  from '@expo/vector-icons'
import {responsiveHeight, responsiveWidth, responsiveFontSize} from 'react-native-responsive-dimensions'


import image1 from '../assets/images/pexels-shvets-production-8413184.jpg';
import image2 from '../assets/images/pexels-alexander-zvir-9062164.jpg';
import image3 from '../assets/images/pexels-mix-and-match-studio-4227112.jpg';
import image4 from '../assets/images/pexels-thirdman-7659874.jpg';
// import categoryCard from '../components/categoryCard';
// import CategoryCard from '../components/categoryCard';
import ProductCard from '../components/ProductCard';
import { SafeAreaView } from 'react-native-safe-area-context'

const categories =  [
  {name : "Heart diseases", image :image1, id : 1 },
  {name : "Kids diseases", image :image2, id : 2 },
  {name : "Bones Diseases", image :image3, id: 3 },
  {name : "Bites", image : image4 , id : 4},
  {name : "Fast food", image :image1, id: 5 },
  {name : "Womens diseases", image :image2, id : 6 },
]

const HomeScreen = () => {
    
    const navigation =  useNavigation();
    const {height, width} =  useWindowDimensions()

    // console.log(height);
   

    useLayoutEffect(() => 
    {
        navigation.setOptions({
            headerShown : false,
            headerStyle : {
                backgroundColor : "black"
            },
            headerTintColor : "white"
        })
    })

    const { register, reset, control, handleSubmit, formState: { errors, isDirty, isValid } } =  useForm();
 
   


  return (
    <>
      {/* <SafeAreaView className="" /> */}
    <View style={{ height : height, width : width}} className={`bg-slate-100 text-white relative px-1`}>
      <View style={{height : responsiveHeight(2.8)}} className={`flex-row justify-between px-4 mt-16 ${height<=500?Platform.select({android : 'mt-8'}) :height>700?Platform.select({android : 'mt-14'}) :Platform.select({android : 'mt-8'})}`} >
        <View className="" >
            <TouchableOpacity className="rounded-lg bg-whitee h-8  w-8" >
                <Text>
                    <FontAwesome name='navicon' size={32}  color="teal"  />
                </Text>
            </TouchableOpacity>
        </View>
        <View className="" >
        <TouchableOpacity className="rounded-lg bg-whitee h-8  w-8" >
                <Text>
                <Ionicons name="notifications-sharp" size={32} color="teal" />
                </Text>
        </TouchableOpacity>
        </View>
      </View>

      <View style={{alignSelf : 'center', height : responsiveHeight(5)}} className="my-8 flex-row space-x-6 justify-between w-full px-3" >
      <View className="w-10/12">       
      <Controller
        control={control}
        rules={{
          required: {value : true, message :  "Password is required"},
          pattern: {
            value: /^([a-zA-Z0-9]{8,16})$/,
            message: 'Must contain atleast 8 characters'
          }
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput  className={`rounded-md bg-gray-400 text-lg text-white px-4 h-10 py-1  'border-2 border-green-500 ${Platform.select({android : 'py-1.5'})}`}
          placeholder="Search"
            onBlur={onBlur}
            paddingVertical={1}
            autoCapitalize={false}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="search"
      />
      </View>
      <TouchableOpacity className="" >
        <Text className="" > 
        <MaterialCommunityIcons name="sort" size={42} color="teal" />
         </Text>
      </TouchableOpacity>
      </View>
      {/* <View style={{height : responsiveHeight(27) }} className={`w-full ${Platform.select({android : 'mt-2'})}`} >
        <View className="flex-row justify-between" >
          <View>
             <Text className={`text-cyan-600 font-bold text-lg px-2 py-1.5 ${Platform.select({android : 'text-sm'})}`} >Categories</Text>
          </View>
           <TouchableOpacity
            onPress={() =>  navigation.navigate('AllCategories')}
           > 
           <Text className={`text-amber-500 text-lg mr-1 ${Platform.select({android : 'text-sm mr-2'})}`}  > See All </Text>  
           </TouchableOpacity>
        </View>
        
         <FlatList 
          data={categories}
          horizontal = {true}
          showsHorizontalScrollIndicator ={false}
          contentContainerStyle = {{
            paddingHorizontal : 1,
            paddingVertical : 5
          }}
          renderItem={(itemData) => {
            return (
               <CategoryCard name={itemData.item.name} image={itemData.item.image}  />
            )
          }}
          keyExtractor={(item) => item.id}
         />
      </View> */}

      <View className={` mb-1.5 ${height> 750? 'mt-2' : 'mt-1'} ${height > 700 ?Platform.select({android : '-mt-8'}) : ''}`} >
        <View style={style.container} className="">
         <View className="flex-row justify-between" >
          <View>
             <Text className={`text-cyan-600 font-bold text-lg px-2 py-1.5 ${Platform.select({android : 'text-sm'})}`} > Popular Diseases </Text>
          </View>
           {/* <TouchableOpacity 
            onPress={() =>  navigation.navigate('AllProducts')}
           > 
           <Text className={`text-amber-500 text-lg mr-1 ${Platform.select({android : 'text-sm mr-3'})}`} > See All </Text>  
           </TouchableOpacity>  */}
          </View>
          <FlatList className="borderd-2 border-gray-200 rounded pr-3 pl-1" 
           numColumns={2}
           data={categories}
           renderItem={(itemData) => {
            return (
              <ProductCard name={itemData.item.name} image={itemData.item.image}  />
            )
           }}
          />
        </View>
      </View>
    </View>
    </>
  )
}

export default HomeScreen

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
   },
   container: {
    height: responsiveHeight(74), // 50% of window height
    width: responsiveWidth(100), // 50% of window width
  },
  sampleText: {
    fontSize: responsiveFontSize(2) // 2% of total window size
  }
})