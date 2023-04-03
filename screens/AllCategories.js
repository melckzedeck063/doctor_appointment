import { View, Text, useWindowDimensions, FlatList } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'

import image1 from '../assets/images/pexels-shvets-production-8413184.jpg';
import image2 from '../assets/images/pexels-alexander-zvir-9062164.jpg';
import image3 from '../assets/images/pexels-mix-and-match-studio-4227112.jpg';
import image4 from '../assets/images/pexels-thirdman-7659874.jpg';
// import categoryCard from '../components/categoryCard';

import { SafeAreaView } from 'react-native-safe-area-context'
import CategoryCard from '../components/CategoriesCard';

const categories =  [
    {name : "Heart diseases", image :image1, id : 1 },
    {name : "Kids diseases", image :image2, id : 2 },
    {name : "Bones Diseases", image :image3, id: 3 },
    {name : "Bites", image : image4 , id : 4},
    {name : "Fast food", image :image1, id: 5 },
    {name : "Womens diseases", image :image2, id : 6 },
]

const AllCategories = () => {

    const navigation =  useNavigation();
    const {width,height} =  useWindowDimensions()

    useLayoutEffect(() => 
    {
        navigation.setOptions({
            // headerShown : false,
            headerStyle : {
                backgroundColor : "#0891b2"
            },
            headerTintColor : "white"
        })
    })
    
  return (
    <View className="w-full h-full bg-white">
      <View style={{alignSelf : "center"}} className="my-4 border-b-2 border-slate-400 w-10/12">
        <Text className="text-lg text-center text-cyan-600" > All Categories </Text>
      </View>
      <View className="">
         <FlatList
          data={categories}
          numColumns={3} 
          renderItem={(itemData) => {
            return(
                <CategoryCard name={itemData.item.name} image={itemData.item.image}  />
            )
          }}
          keyExtractor={(item) =>item.id }
         />
      </View>
    </View>
  )
}

export default AllCategories