import { View, Text, useWindowDimensions, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useForm, FormProvider, SubmitHandler, Controller } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'



const SIgnUpScreen = () => {

    const navigation = useNavigation();
    const { width, height } = useWindowDimensions();

    const { register, reset, control, handleSubmit, formState: { errors, isDirty, isValid } } = useForm({
        defaultValues :  {
          password : "",
          confirmPassword : "",
          username : "",
          firstName : "",
          lastName : "",
          telephone : ""
        },
          mode: 'all',
      })
      
      const onSubmit = data => {
          console.log(data);
        //   dispatch( signUpUser(data) )
          
      }

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
    <View className="bg-cyan-600">
      <KeyboardAwareScrollView >
    {/* <View > */}
      <ScrollView className='bg-cyan-600'>
        {/* <LinearGradient colors={['transparent', '#F54749']} className="h-full" > */}
        <View className={`w-full h-full bg-cyan-600 -mtt-10 ${Platform.select({ios : 'py-32 -mt-20', android : 'py-4'})}`}>
      <View style={{alignSelf : 'center'}} className="bg-slate-200 shadow-md rounded-lg px-4 py-5 w-10/12 my-3">
           <Text className={`text-2xl font-medium text-cyan-600 text-center ${Platform.select({android : 'text-xl'})}`} >Sign Up</Text>
      <View className="my-2">
       <Text className={`text-lg text-cyan-600 ${Platform.select({android : 'text-sm'})}`} >FirstName</Text>
        <Controller
        control={control}
        rules={{
         required: {value : true, message : "Firstname is required"},
        //  minLength : {value : 3,  message : "Requires atleast three characters"}
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput  className={`rounded-md bg-gray-200 text-cyan-600 px-4 py-2.5 ${Platform.select({android : 'py-1.5'})} ${errors.firstName? 'border-2 border-red-400' : 'border-2 border-slate-300'}`}
          placeholder="Enter firstName"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="firstName"
      />
      {  errors.firstName && <Text className="text-red-400" > {errors.firstName.message} </Text>}
      </View>
      <View className="my-2">
      <Text className={`text-lg text-cyan-600 ${Platform.select({android : 'text-sm'})}`} >LastName</Text>
    <Controller
        control={control}
        rules={{
          required: {value : true, message : "Lastname is required"},
          minLength : {value : 3,  message : "Requires atleast three characters"}
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput  className={`rounded-md bg-gray-200 text-cyan-600 px-4 py-2.5 ${Platform.select({android : 'py-1.5'})} ${errors.lastName? 'border-2 border-red-400' : 'border-2 border-slate-300'}`}
          placeholder="Enter lastName"
            onBlur={onBlur} 
            onChangeText={onChange}
            value={value}
          />
        )}
        name="lastName"
      />
      {  errors.lastName && <Text className="text-red-400" > {errors.lastName.message} </Text>}
      </View>
      <View className="my-2">
      <Text className={`text-lg text-cyan-600 ${Platform.select({android : 'text-sm'})}`} >Username</Text>
     <Controller
        control={control}
        rules={{
          required: "Username is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address'
          }
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput  className={`rounded-md bg-gray-200 text-cyan-600 px-4 py-2.5 ${Platform.select({android : 'py-1.5'})} ${errors.username? 'border-2 border-red-400' : 'border-2 border-slate-300'}`}
          placeholder="Enter username or email"
            onBlur={onBlur}
            autoCapitalize = {false}
            onChangeText={onChange}
            value={value}border-2 border-slate-300
          />
        )}
        name="username"
      />
      {  errors.username && <Text className="text-red-400" > {errors.username.message} </Text>}
      </View>
                  <View className="my-2">
                  <Text className={`text-lg text-cyan-600 ${Platform.select({android : 'text-sm'})}`} >Telephone  (255) </Text>
                  <Controller
        control={control}
        rules={{
         required: "Telephone is  required",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput  className={`rounded-md bg-gray-200 text-cyan-600 px-4 py-2.5 ${Platform.select({android : 'py-1.5'})} ${errors.telephone? 'border-2 border-red-400' : 'border-2 border-slate-300'}`}
          placeholder="Enter telephone"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}border-2 border-slate-300
          />
        )}
        name="telephone"
      />
      {  errors.telephone && <Text className="text-red-400" > {errors.telephone.message} </Text>}
            </View>
      <View className="my-2">
       <Text className={`text-lg text-cyan-600 ${Platform.select({android : 'text-sm'})}`} >Password</Text>
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
          <TextInput  className={`rounded-md bg-gray-200 text-cyan-600 px-4 py-2.5 ${Platform.select({android : 'py-1.5'})} ${errors.password? 'border-2 border-red-400' : 'border-2 border-slate-300'}`}
          placeholder="Enter password"
            onBlur={onBlur}
            autoCapitalize={false}
            secureTextEntry= {true}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />
      {errors.password && <Text className="text-red-400"> {errors.password.message} </Text>}
                  </View>
                  <View className="my-2">
                  <Text className={`text-lg text-cyan-600 ${Platform.select({android : 'text-sm'})}`} >Confirm Password</Text>
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
          <TextInput  className={`rounded-md bg-gray-200 text-cyan-600 px-4 py-2.5 ${Platform.select({android : 'py-1.5'})} ${errors.confirmPassword? 'border-2 border-red-400' : 'border-2 border-slate-300'}`}
          placeholder="Confirm Password"
            onBlur={onBlur}
            autoCapitalize={false}
            secureTextEntry= {true}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="confirmPassword"
      />
      {errors.confirmPassword && <Text className="text-red-400"> {errors.confirmPassword.message} </Text>}
                  </View>
                  <View>
             <TouchableOpacity className="bg-cyan-600 rounded-md px-2 py-1 my-3"
               onPress={handleSubmit(onSubmit)}
             >
                <Text className={`text-2xl font-medium text-white text-center ${Platform.select({android : 'text-lg'})}`}>Submit</Text>
             </TouchableOpacity>
        </View>
            <View className="mt-1" >
            {/* <Text className="font-medium text-red-400 text-center" >Don't have an account ? </Text> */}
             <TouchableOpacity className="rounded-md px-2 py-1 hover:text-sky-300"
             onPress={() => navigation.navigate('Login') }
             >
                <Text className="text-xl font-medium text-cyan-600 text-center" >Sign In</Text>
             </TouchableOpacity>
            </View>
         </View> 
        </View>
          {/* </LinearGradient> */}
       </ScrollView>
        
    {/* </View> */}
        </KeyboardAwareScrollView>
    </View>
  )
}

export default SIgnUpScreen