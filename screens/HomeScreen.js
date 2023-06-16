import { View, Text, TouchableOpacity, useWindowDimensions,TextInput, StyleSheet, ScrollView, FlatList, Platform ,TouchableWithoutFeedback} from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import {Controller, useForm} from 'react-hook-form'
import { Ionicons, FontAwesome, FontAwesome5, Entypo, MaterialCommunityIcons, MaterialIcons }  from '@expo/vector-icons'
import {responsiveHeight, responsiveWidth, responsiveFontSize} from 'react-native-responsive-dimensions'

import image1 from '../assets/images/pexels-shvets-production-8413184.jpg';
import image2 from '../assets/images/pexels-alexander-zvir-9062164.jpg';
import image3 from '../assets/images/pexels-mix-and-match-studio-4227112.jpg';
import image4 from '../assets/images/pexels-thirdman-7659874.jpg';
import image from '../assets/images/pexels-thirdman-7659874.jpg'
// import categoryCard from '../components/categoryCard';
// import CategoryCard from '../components/categoryCard';
import ProductCard from '../components/ProductCard';
import { SafeAreaView } from 'react-native-safe-area-context'
import CategoryCard from '../components/CategoriesCard'
import NavigationDrawer from '../components/NavigationDrawer'
import { useDispatch, useSelector } from 'react-redux'
import { getAllDiseases } from '../store/actions/category_actions'
import CategorySkeleton from '../components/categorySkeleton'

const categories =  [
  {name : "Heart diseases", image :image1, id : 1 },
  {name : "Kids diseases", image :image2, id : 2 },
  {name : "Bones Diseases", image :image3, id: 3 },
  {name : "Consultation", image : image4 , id : 4},
  {name : "Medicines", image :image1, id: 5 },
  {name : "Womens diseases", image :image2, id : 6 },
]

const doctors =  [
    {name : "James Cotton", image :image1, id : 1 },
  {name : "Joshua Francis", image :image2, id : 2 },
  {name : "Hamilton Partey", image :image3, id: 3 },
  {name : "Whitney Humphrey", image : image4 , id : 4},
  {name : "Miranda Johnson", image :image1, id: 5 },
  {name : "Ezekiel Michael", image :image1, id : 6 },
]

const HomeScreen = () => {
    
    const navigation =  useNavigation();
    const {height, width} =  useWindowDimensions()
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const dispatch  =  useDispatch();
    const [reload,setReload] =  useState(0);

    const diseases = useSelector(state => state.disease);

    // console.log(diseases.diseases);

    const handleOutsidePress = (event) => {
      setIsDrawerOpen(false);
      // console.log('clicked')
    };
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
    <TouchableWithoutFeedback  
      onPress={handleOutsidePress} 
    >
    <View style={{ height : height, width : width}} className={`bg-cyan-600 text-white relative pxx-1`}>
      <SafeAreaView className="bg-teal" />
      <View style={{height : responsiveHeight(32)}} className={`px-4 -mt-8 ${height<=500?Platform.select({android : 'mt-4'}) :height>700?Platform.select({android : 'mt-8'}) :Platform.select({android : 'mt-8'})}`} >
        <View className="flex-row justify-between ">
        <View className="" >
           <Text style={{fontSize: responsiveFontSize(2)}} className={`font-bold text-white`}>Hello! John Doe</Text>
           <Text style={{fontSize: responsiveFontSize(1.5)}} className={`text-white py-1 font-medium`} >How are you today?</Text>
        </View>
        
        {/* <Text className={`text-white font-bold text-lg -mt-1`}>  Teleconsultation </Text> */}
        <View className="" >
            <TouchableOpacity className="rounded-lg bg-whitee h-8  w-8" 
              onPress={() => setIsDrawerOpen(!isDrawerOpen)}
            >
                <Text>
                    {Platform.select({ios :  <MaterialIcons name='dashboard' size={32}  color="white"  />})}
                    {Platform.select({android:  <MaterialIcons name='dashboard' size={24}  color="white"  />})}
                </Text>
            </TouchableOpacity>
        </View>
        </View>

        <View className="mt-5">
          <View>
          <View style={{alignSelf : 'center'}} className="w-11/12 flex-row space-x-3 py-1.5 rounded-md bg-gray-200"> 
          <Text className={`mt-1 ml-1`}>
              <Ionicons name='search' size={24} color="grey" />      
          </Text>
      <Controller
        control={control}
        rules={{
          required: {value : true, message :  "Password is required"},
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput  className={` text-lg text-cyan-700 px-4 h-8 pb-2 bborder-2 border-green-500 ${Platform.select({android : 'py-1.5'})}`}
          placeholder="Search doctor or Service"
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
      <View>
      </View>
        <View   className="">
          {
            diseases?.diseases?.data?.data.length >= 1?(
              <>
            <FlatList className="mt-4"
             data={diseases.diseases.data.data}
             horizontal = {true}
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
        </View>
      </View>

      <View className={`bg-white  rounded-t-3xl mt-4 ${height > 780 ?Platform.select({ios : '-mt-2'}) : ''} w-full`}>
      

      <View style={{height  : responsiveHeight(49)}} className={` mb-1.5 mt-1 ${height> 750? 'mt-2' : 'mt-1'} ${height > 700 ?Platform.select({android : 'mt-1'}) : ''}`} >
        <View style={style.container} className="mt-3">
         <View className="flex-row justify-between -mt-1 mx-1" >
          <View>
             <Text className={`text-slate-700 font-bold text-lg px-2 py-1.5 ${Platform.select({android : 'text-sm'})}`} > Popular Doctors </Text>
          </View>
           <TouchableOpacity 
            onPress={() =>  navigation.navigate('AllDoctors')}
           > 
           <Text className={`text-cyan-600 text-lg mr-2 ${Platform.select({android : 'text-sm mr-4'})}`} > See All </Text>  
           </TouchableOpacity> 
          </View>
          <FlatList className="borderd-2 border-gray-200 rounded pr-3 pl-1" 
           numColumns={2}
           data={doctors}
           showsVerticalScrollIndicator = {false}
           renderItem={(itemData) => {
            return (
              <ProductCard name={itemData.item.name} image={itemData.item.image}  />
            )
           }}
          />
        </View>
      </View>
      </View>
      <View  style={[style.drawer, isDrawerOpen ? { right: 0 } : { right: -250 }]} className="bg-slatee-700 -ml-1 relative">

          <NavigationDrawer />
      </View>
    </View>
    </TouchableWithoutFeedback>
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
    // height: responsiveHeight(53), // 50% of window height
    width: responsiveWidth(100), // 50% of window width
    backgroundColor : "white"
  },
  sampleText: {
    fontSize: responsiveFontSize(2) // 2% of total window size
  },
  drawer: {
    position: "absolute",
    right: -280,
    top: 0,
    bottom: 0,
    width: responsiveWidth(60),
    height : responsiveHeight(100),
    backgroundColor :  '#008494',
    padding: 20,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  drawerContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width: 300,
  },
})