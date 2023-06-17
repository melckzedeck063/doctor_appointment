
import axios from "axios";
import *  as SecureStore from 'expo-secure-store';

import { BASE_URL } from "../URL";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.headers.post['Content-Type'] = 'application/json';

const MESSAGE_API = axios.create({ baseURL: `${BASE_URL}/message` });
MESSAGE_API.interceptors.request.use(async(req) => {
    const storage = await  SecureStore.getItemAsync('token');
    const authToken =  JSON.parse(storage)
    
    if (authToken !== null || authToken !== undefined) {
        // console.log(storage)
        req.headers.authorization = `Bearer bearer ${authToken.token}`
    }
// console.log(req)
    return req
})

export const  sendMessage = createAsyncThunk('new/MESSAGE', async(values) => {
    try{
        console.log("function called")
        const response  =  await MESSAGE_API.post('/new_message', {
            message : values.message,
            receiver : values.receiver
        })

        console.log(response.data);
        return response.data;
    }
    catch(error){
        console.log(error);
        return error.response
    }
})

export const  getMyMessages  =  createAsyncThunk('all/message', async() => {
    try{
        const response =    await MESSAGE_API.get('/my_messages');

        // console.log(response.data)
        return response.data
    }
    catch(error){
        console.log(error);
        return error.message
    }
    
})

export const getMyChats = createAsyncThunk('chats/message', async(id) => {
    console.log("function called");
    try{
        const response =    await MESSAGE_API.get(`/my_chats/${id}`);

        console.log(response.data)
        return response.data
    }
    catch(error){
        console.log(error);
        return error.message
    }
    
})

