import { View, Text, Image, useWindowDimensions, TouchableOpacity, ScrollView, Platform, FlatList } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import {FontAwesome, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons'
import {useResponsiveHeight, useResponsiveWidth, useResponsiveFontSize} from 'react-native-responsive-dimensions'

import ProductCard from '../components/ProductCard'
import { IMAGE_URL } from '../store/URL'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryDoctors } from '../store/actions/doctor_actions'
import ProductSkeleton from '../components/productSkeleton'


const DiseaseScreen = () => {

    const navigation =  useNavigation();
    const {params : {props}} =  useRoute();
    const {width, height} =  useWindowDimensions();
    const [reload,setReload] = useState(0);
    const dispatch =  useDispatch();


    setTimeout(() => {
      if(reload <= 5){
        setReload(reload => reload + 1)
      }
    }, 1000);

    const doctors =  useSelector(state =>state.doctor);
    // console.log(doctors.category_doctors);

    // console.log(props);

  useEffect(()  => {
    if(doctors && doctors.category_doctors && reload <4){
      dispatch( getCategoryDoctors(props.id) )
    }
  })

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
        <Image style={{height : height/3}} source={{uri  : `${IMAGE_URL}/${props.image}`}} className="w-full" />
        <View className='absolute inset-0 bg-black/60' ></View>
        <View className="absolute bottom-2 px-2">
            {/* <Text className={`font-bold my-1.5 text-2xl capitalize text-cyan-600 ${Platform.select({android : 'text-xl'})}`}>{props.name}</Text> */}
        </View>
      </View>

     <View className="mx-2 px-2 mb-3">
        <Text className={`font-bold capitalize text-cyan-600 mt-1 text-xl py-2 ${Platform.select({android : 'text-lg'})}`}>{props.name}</Text>
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
          
        </View>
        <View>
          {
            doctors?.category_doctors?.data?.doctors.length >= 1?(
              <>
            <FlatList 
             data={doctors.category_doctors.data.doctors}
             horizontal = {false}
             showsHorizontalScrollIndicator ={false}
             numColumns={2}
             contentContainerStyle = {{
               paddingHorizontal : 1,
               paddingVertical : 5
             }}
             renderItem={(itemData) => {
               return (
                <ProductCard name={itemData.item.account.firstName} telephone={itemData.item.account.telephone} bibliography={itemData.item.bibliography} lname={itemData.item.account.lastName} id={itemData.item._id} image={itemData.item.photo} station={itemData.item.working_station}  experience={itemData.item.experience}  />
               )
             }}
             keyExtractor={(item) => item.id}
            />
              </>
            )
            :
            <>
            <View className="flex flex-row justify-between mx-1">
              <ProductSkeleton />
              <ProductSkeleton />
            </View>
            </>
          }
        </View>
      </View>

     </View>
     {/* </ScrollView> */}
    </>
  )
}

export default DiseaseScreen