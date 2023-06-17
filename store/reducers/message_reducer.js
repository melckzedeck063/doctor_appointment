import { createSlice } from "@reduxjs/toolkit";
import { getMyChats, getMyMessages, sendMessage } from "../actions/message_actions";


const messageSlice = createSlice({
    name:  'message',
    initialState :  {
        messages : [],
        current_message  :  null,
        new_message : null,
        chats : [],
        status :  '',
        error  :  null
    },

    reducers : {
        new_current_ : (state, action) => {
            state.current_message.push(action.payload)
        },
        all_disease :  (state,action) => {
            state.current_message =  action.payload
        },
        current_disease : (state, action) => {
             state.current_message.push(action.payload)
        }
    },
    extraReducers( builder){
        builder
        .addCase(sendMessage.pending, (state,action) => {
            state.status="Loading"
        })
        .addCase(sendMessage.fulfilled, (state,action) => {
            state.status  ="succesfull",
            state.new_message  =  action.payload
        })
        .addCase(sendMessage.rejected, (state,action) =>  {
            state.status="Failed",
            state.error  = action.error.message
        })
        .addCase(getMyMessages.pending, (state,action) => {
            state.status="Loading"
        })
        .addCase(getMyMessages.fulfilled, (state,action) => {
            state.status  ="succesfull",
            state.messages  =  action.payload
        })
        .addCase(getMyMessages.rejected, (state,action) =>  {
            state.status="Failed",
            state.error  = action.error.message
        })
        .addCase(getMyChats.pending, (state,action) => {
            state.status="Loading"
        })
        .addCase(getMyChats.fulfilled, (state,action) => {
            state.status  ="succesfull",
            state.chats  =  action.payload
        })
        .addCase(getMyChats.rejected, (state,action) =>  {
            state.status="Failed",
            state.error  = action.error.message
        })
    }

})

export const {new_current_, all_disease,current_disease}  =  messageSlice.actions;

export default messageSlice.reducer

