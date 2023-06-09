
import axios from "axios";
import *  as SecureStore from 'expo-secure-store';

import { BASE_URL } from "../URL";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.headers.post['Content-Type'] = 'application/json';

const CATEGORY_API = axios.create({ baseURL: `${BASE_URL}/disease` });
CATEGORY_API.interceptors.request.use(async(req) => {
    const storage = await  SecureStore.getItemAsync('token');
    const authToken =  JSON.parse(storage)
    
    if (authToken !== null || authToken !== undefined) {
        // console.log(storage)
        req.headers.authorization = `Bearer bearer ${authToken.token}`
    }
// console.log(req)
    return req
})

export const  registerDisease = createAsyncThunk('new/disease', async(values) => {
    try{
        console.log("function called")
        const response  =  await CATEGORY_API.post('/new_disease', {
            diseaseName : values.diseaseName,
            photo : values.photo
        })

        console.log(response.data);
        return response.data;
    }
    catch(error){
        console.log(error);
        return error.response
    }
})

export const  getAllDiseases  =  createAsyncThunk('all/disease', async() => {
    try{
        const response =    await CATEGORY_API.get('/diseases');

        // console.log(response.data)
        return response.data
    }
    catch(error){
        console.log(error);
        return error.message
    }
    
})