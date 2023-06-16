import { createSlice } from "@reduxjs/toolkit";
import { getAllDiseases, registerDisease } from "../actions/category_actions";


const diseaseSlice = createSlice({
    name:  'disease',
    initialState :  {
        diseases : [],
        current_disease  :  null,
        status :  '',
        error  :  null
    },

    reducers : {
        new_current_ : (state, action) => {
            state.current_disease.push(action.payload)
        },
        all_disease :  (state,action) => {
            state.diseases =  action.payload
        },
        current_disease : (state, action) => {
             state.current_disease.push(action.payload)
        }
    },
    extraReducers( builder){
        builder
        .addCase(registerDisease.pending, (state,action) => {
            state.status="Loading"
        })
        .addCase(registerDisease.fulfilled, (state,action) => {
            state.status  ="succesfull",
            state.current_disease  =  action.payload
        })
        .addCase(registerDisease.rejected, (state,action) =>  {
            state.status="Failed",
            state.error  = action.error.message
        })
        .addCase(getAllDiseases.pending, (state,action) => {
            state.status="Loading"
        })
        .addCase(getAllDiseases.fulfilled, (state,action) => {
            state.status  ="succesfull",
            state.diseases  =  action.payload
        })
        .addCase(getAllDiseases.rejected, (state,action) =>  {
            state.status="Failed",
            state.error  = action.error.message
        })
    }

})

export const {new_current_, all_disease,current_disease}  =  diseaseSlice.actions;

export default diseaseSlice.reducer

