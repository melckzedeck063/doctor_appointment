import { View, Text, useWindowDimensions, FlatList } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {responsiveHeight, responsiveWidth, responsiveFontSize} from 'react-native-responsive-dimensions'

import image1 from '../assets/images/pexels-shvets-production-8413184.jpg';
import image2 from '../assets/images/pexels-alexander-zvir-9062164.jpg';
import image3 from '../assets/images/pexels-mix-and-match-studio-4227112.jpg';
import image4 from '../assets/images/pexels-thirdman-7659874.jpg';
import image6 from '../assets/images/pexels-jeff-denlea-3714743.jpg';
// import image7 from '../assets/images/pexels-thirdman-5327871.jpeg';
import ProductCard from '../components/ProductCard';

const doctors =  [
    {name : "James Cotton", image :image1, id : 1 },
  {name : "Joshua Francis", image :image2, id : 2 },
  {name : "Hamilton Partey", image :image3, id: 3 },
  {name : "Whitney Humphrey", image : image4 , id : 4},
  {name : "Miranda Johnson", image :image1, id: 5 },
  {name : "Ezekiel Michael", image :image2, id : 6 },
  {name : "Agness Daniel", image : image6, id:7}
]

const AllDoctors = () => {

    const navigation =  useNavigation();
    const {width, height} =  useWindowDimensions();


    useLayoutEffect (() => {
        navigation.setOptions({
            headerStyle : {
                backgroundColor : "#0891b2"
            },
            headerTintColor : "white"
        })
    })

    return (


    <View style={{width : width, height : height, marginBottom : 10}} className="bg-white mb-6">
        <View style={{alignSelf : 'center'}} className="border-slate-400 border-b-2 w-10/12" >           
            <Text className="text-lg text-cyan-600 text-center font-bold py-2" ></Text>
        </View>
        <View style={{height  :responsiveHeight(85)}} className="my-1 mb-10">
            {doctors && doctors.length > 1 ?
          <>
          <FlatList 
           data={doctors}
           numColumns={2}
           style={{
            padding : 3,
            marginBottom : 12,
           }}
           renderItem = {(itemData) => {
            return (
                <ProductCard name={itemData.item.name} image={itemData.item.image}  />
            )
           }}
           keyExtractor={(item) => item.id}
          />
          </>
           :  null    
        }
        </View>
    </View>
  )
}

export default AllDoctors