import { View, Text, useWindowDimensions, FlatList } from 'react-native'
import React, {useLayoutEffect, useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native'

import image1 from '../assets/images/pexels-shvets-production-8413184.jpg';
import image2 from '../assets/images/pexels-alexander-zvir-9062164.jpg';
import image3 from '../assets/images/pexels-mix-and-match-studio-4227112.jpg';
import image4 from '../assets/images/pexels-thirdman-7659874.jpg';
// import categoryCard from '../components/categoryCard';

import { SafeAreaView } from 'react-native-safe-area-context'
import ServiceCard from '../components/serviceCard';
import { useDispatch,useSelector } from 'react-redux';
import CategoryCard from '../components/CategoriesCard';
import CategorySkeleton from '../components/categorySkeleton';
import { getAllDiseases } from '../store/actions/category_actions';

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
    const dispatch  =  useDispatch();
    const [reload,setReload] =  useState(0);

    const diseases = useSelector(state => state.disease);

    setTimeout(() => {
      if(reload <=5 ){
       setReload(reload => reload +1);
      }
    }, 1000);   
   
   
    useEffect(()  =>  {
     if(diseases && diseases.diseases && reload < 4){
       dispatch( getAllDiseases() )
     }
    })

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
    <View className="w-full h-full bg-cyan-700">
      <View style={{alignSelf : "center"}} className="my-4 border-b-2 border-slate-400 w-10/12">
        <Text className="text-lg text-center text-cyan-600" > All Categories </Text>
      </View>
      <View className="mx-3">
      {
            diseases?.diseases?.data?.data.length >= 1?(
              <>
            <FlatList className="mt-4"
             data={diseases.diseases.data.data}
             numColumns={3}
             showsHorizontalScrollIndicator ={false}
             contentContainerStyle = {{
               paddingHorizontal : 1,
               paddingVertical : 5
             }}
             renderItem={(itemData) => {
               return (
                  <CategoryCard name={itemData.item.diseaseName} image={itemData.item.photo} id={itemData.item._id} />
               )
             }}
             keyExtractor={(item) => item._id}
            />
              </>
            )
            :
            <>
             <View className="flex flex-row justify-between mt-4">
               <CategorySkeleton />
               <CategorySkeleton />
               <CategorySkeleton />
             </View>
            </>
          }
      </View>
    </View>
  )
}

export default AllCategories