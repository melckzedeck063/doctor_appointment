import { View, Text, Image, useWindowDimensions, TouchableOpacity, ScrollView, Platform, FlatList } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import {FontAwesome, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons'
import {useResponsiveHeight, useResponsiveWidth, useResponsiveFontSize} from 'react-native-responsive-dimensions'

import image1 from '../assets/images/pexels-shvets-production-8413184.jpg';
import image2 from '../assets/images/pexels-alexander-zvir-9062164.jpg';
import image3 from '../assets/images/pexels-mix-and-match-studio-4227112.jpg';
import image4 from '../assets/images/pexels-thirdman-7659874.jpg';
import ProductCard from '../components/ProductCard'

const categories =  [
    {name : "Heart diseases", image :image1, id : 1 },
    {name : "Kids diseases", image :image2, id : 2 },
    {name : "Bones Diseases", image :image3, id: 3 },
    {name : "Bites", image : image4 , id : 4},
    {name : "Fast food", image :image1, id: 5 },
    {name : "Womens diseases", image :image2, id : 6 },
  ]

const DiseaseScreen = () => {

    const navigation =  useNavigation();
    const {params : {props}} =  useRoute();
    const {width, height} =  useWindowDimensions();

    // console.log(props);

    useLayoutEffect(() => {
        navigation.setOptions({
        //    headerShown : false
        })
    })

  return (
    <>
     {/* <ScrollView   > */}
     <View className="bg-slate-200 h-full">
     <View className="relative">
        <Image style={{height : height/3}} source={props.image} className="w-full" />
        <View className='absolute inset-0 bg-black/60' ></View>
        <View className="absolute bottom-2 px-2">
            {/* <Text className={`font-bold my-1.5 text-2xl capitalize text-cyan-600 ${Platform.select({android : 'text-xl'})}`}>{props.name}</Text> */}
        </View>
      </View>

      {/* <View className="flex flex-row justify-between py-2 my-2 px-4">
        <View>
            <Text className={`font-bold capitalize text-white text-xl ${Platform.select({android : 'text-lg'})}`}>{props.name}</Text>
            <Text className={`text-white font-medium py-1 ${Platform.select({android : 'text-xs'})}`}>Product category</Text>
        </View>
        <View>
            <Text className={`text-white font-bold text-2xl py-2 ${Platform.select({android : 'text-xl'})}`}> 4000 Tshs</Text>
        </View>
      </View> */}

     {/* <View className="mb-3 p-2">
       <Text className={`font-bold capitalize text-white px-1.5 text-xl ${Platform.select({android : 'text-lg'})}`}>Ingredients</Text>
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
        <Text className={`font-bold capitalize text-cyan-600 text-xl py-2 ${Platform.select({android : 'text-lg'})}`}>{props.name}</Text>
        <Text className={`font-mediumm capitalize text-cyann-600 px-2 ${Platform.select({android : 'text-xs'})}`}> 
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quam suscipit veniam ut doloremque quas, reprehenderit commodi deserunt 
         perferendis ducimus ullam fuga sequi optio laboriosam quaerat ipsum asperiores eius nemo.
        </Text>
     </View>

     <View className={``}>

     </View>

      <View style={{height : height/2.6 }} className={`w-full px-2.5 ${Platform.select({android : 'mt-2'})}`} >
        <View className="flex-row justify-between" >
          <View>
             <Text className={`text-cyan-600 font-bold text-lg px-2 py-1.5 ${Platform.select({android : 'text-sm'})}`} >Specialists</Text>
          </View>
           <TouchableOpacity
            onPress={() =>  navigation.navigate('AllCategories')}
           > 
           <Text className={`text-amber-500 text-lg mr-1 ${Platform.select({android : 'text-sm mr-2'})}`}  > See All </Text>  
           </TouchableOpacity>
        </View>
        
         <FlatList 
          data={categories}
          horizontal = {false}
          showsHorizontalScrollIndicator ={false}
          numColumns={2}
          contentContainerStyle = {{
            paddingHorizontal : 1,
            paddingVertical : 5
          }}
          renderItem={(itemData) => {
            return (
               <ProductCard name={itemData.item.name} image={itemData.item.image}  />
            )
          }}
          keyExtractor={(item) => item.id}
         />
      </View>

     </View>
     {/* </ScrollView> */}
    </>
  )
}

export default DiseaseScreen