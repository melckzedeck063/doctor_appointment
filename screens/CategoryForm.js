import { View, Text, KeyboardAvoidingView,Button, ScrollView,Image, TouchableOpacity, TextInput, Platform } from 'react-native'
import React, { useState, useCallback, useLayoutEffect }  from 'react'

import  { useForm, Controller } from 'react-hook-form'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

import * as ImagePicker from 'expo-image-picker';
import { Ionicons}  from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
// import {makeNewProduct } from '../store/reduxStore/actions/product_actions';
import { useDispatch } from 'react-redux';

import { SafeAreaView } from 'react-native-safe-area-context';

import  {responsiveHeight,responsiveWidth} from 'react-native-responsive-dimensions';
import { useWindowDimensions } from 'react-native';
import { BASE_URL } from '../store/URL';
import { registerDisease } from '../store/actions/category_actions';


const CategoryForm = () => {
    
  const [image, setImage] =   useState(null);
  const [imageData, setImageData] =  useState("")
  const dispatch =  useDispatch();


 

    const { register, handleSubmit, reset, control, formState : {errors} } =  useForm({
        defaultValues  : {
            diseaseName : '',
            description : '',
        },
        mode : 'all'
    });
    const navigation =  useNavigation();

   
    const {width, height}  =  useWindowDimensions()

   


    const pickImage = async () => {
      // No permissions request is necessary for launching the image 
      try{
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      // console.log(result);
  
      if (!result.canceled) {
        setImageData(result.data)
        setImage(result)
        let selectedAsset = result.assets[0]; // Assuming you want to upload the first selected asset
        let localUri = selectedAsset.uri;
        let filename = localUri.split('/').pop()
        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `image/${match[1]}` : `image`;
        let formData = new FormData();
        formData.append('photo', { uri: localUri, name: filename, type });
        let options = {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
          },
        };
  
        // const response =  
                         
        return fetch(`${BASE_URL}/posts/upload_photo`, options)
        .then((response) => response.json())
        .then( (data) => {
          console.log(data)
          setImageData(data.data) 

          const uploadedImageUrl = data.url;
          console.log('Uploaded Image URL:', uploadedImageUrl);
      })
                    
      }
    } catch(e) {
      console.log(e, "error");
    }
    };


    const onSubmit = data => {
      data.photo = imageData
      // console.log(data)
      
      dispatch( registerDisease(data) )

      reset()
    }

    useLayoutEffect(() => {
      navigation.setOptions({
          headerShown : true
      })
     })

  return (
    <>
        {/* <SafeAreaView className={`${Platform.select({ios : '-mt-20', android:'mt-4'})}`} /> */}
          <ScrollView >
      <KeyboardAwareScrollView>
            <View style={{height : responsiveHeight(96)}} className ={`${height >= 850 ? 'my-6' : height >= 700 ? 'my-2' : 'mt-0'}`}>
                <View className="relative">
                    <View className="mb-1">
                      <Text   className="text-center font-bold text-lg text-slate-700" >
                        Register Disease
                      </Text>
                    </View>
     <View style={{alignSelf : 'center'}} className={`bg-white shadow-md rounded-lg px-4 py-3 w-10/12 my-20 ${height <=  700 ? 'py-2' :  ''} `}>
           {/* <Text className="text-2xl font-medium text-red-400 text-center" >Sign Up</Text> */}
      {/* <Text className={`text-xl text-center font-medium text-slate-800 my-1 -mt-1 ${Platform.select({android :  'text-lg'})}`} > product</Text> */}
      
      <View className="my-2">
       <Text className={`text-xl text-slate-600 ${Platform.select({android : 'text-sm'})}`} >Disease  Name</Text>
        <Controller
        control={control}
        rules={{
            required: {value : true, message : "product name is required"},
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput  className={`rounded-md bg-slate-100 px-4 py-2.5 ${Platform.select({android : 'py-1.5'})} border-2 ${errors.diseaseNameName? 'border-red-500' :  'border-slate-300'}`}
          placeholder="Enter disease name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="diseaseName"
      />
      </View>

      <View className="my-4">
      <Text className={`text-xl text-slate-600 ${Platform.select({android : 'text-sm'})}`} >Upload Photo</Text>
      <View  className="px-2 bg-slate-100">
         <Button className="text-red-50 text-2xl"  title="Pick an image" onPress={pickImage} />
         {image && <Image className="rounded-full" source={{ uri: image.uri }} style={{ width: 160, height: 160, alignSelf : 'center' }} />}
      </View>
      </View>

    
      
      {/* {  errors.username && <Text className="text-red-400" > {errors.username.message} </Text>} */}

                  <View className="my-2">
                  <Text className={`text-xl text-slate-600 ${Platform.select({android : 'text-sm'})}`} >Price</Text>
                  <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput  className={`rounded-md bg-slate-100 px-4 py-2.5 ${Platform.select({android  :'py-1.5'})} ${errors.description ? 'border-2  border-red-500' : 'border-2 border-slate-300'}`}
          placeholder="Enter description"
            onBlur={onBlur}
            multiline={true}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="description"
      />
            </View>
     
                  <View>
             <TouchableOpacity className="bg-cyan-600 rounded-md px-2 py-1 my-3"
               onPress={handleSubmit(onSubmit)}
             >
                <Text className="text-2xl font-medium text-white text-center" >Submit</Text>
             </TouchableOpacity>
        </View>
         </View> 
                </View>
            </View>
      </KeyboardAwareScrollView>
          </ScrollView>
    </>
  )
}

export default CategoryForm