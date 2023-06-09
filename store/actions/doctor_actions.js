
import axios from "axios";
import *  as SecureStore from 'expo-secure-store';

import { BASE_URL } from "../URL";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.headers.post['Content-Type'] = 'application/json';

const DOCTOR_API = axios.create({ baseURL: `${BASE_URL}/doctor` });
DOCTOR_API.interceptors.request.use(async(req) => {
    const storage = await  SecureStore.getItemAsync('token');
    const authToken =  JSON.parse(storage)
    
    if (authToken !== null || authToken !== undefined) {
        // console.log(storage)
        req.headers.authorization = `Bearer bearer ${authToken.token}`
    }
// console.log(req)
    return req
})

export const  registerDoctor = createAsyncThunk('new/doctor', async(values) => {
    try{
        console.log("function called")
        const response  =  await DOCTOR_API.post('/new_doctor', {
            checkNo : values.checkNo,
            photo : values.photo,
            licenseNo :   values.licenseNo,
            working_station : values.working_station,
            experience : values.experience,
            bibliography : values.bibliography,
            category  : values.category
        })

        console.log(response.data);
        return response.data;
    }
    catch(error){
        console.log(error);
        return error.response
    }
})

export const  getAllDoctors  =  createAsyncThunk('all/doctors', async() => {
    try{
        const response =    await DOCTOR_API.get('/doctors');

        // console.log(response.data)
        return response.data
    }
    catch(error){
        console.log(error);
        return error.message
    }
    
})

export const getCategoryDoctors  = createAsyncThunk('category/doctors', async(id) => {
    try{
        const response =    await DOCTOR_API.get(`/category_doctors/${id}`);

        // console.log(response.data)
        return response.data
    }
    catch(error){
        console.log(error);
        return error.message
    }
    
})