import { createSlice } from "@reduxjs/toolkit";
import { getAllDiseases, registerDisease } from "../actions/category_actions";
import { getAllDoctors, getCategoryDoctors, registerDoctor } from "../actions/doctor_actions";


const doctorSlice = createSlice({
    name:  'doctor',
    initialState :  {
        all_doctors : [],
        category_doctors   :[],
        new_doctor : null,
        current_doctor  :  null,
        status :  '',
        error  :  null
    },

    reducers : {
        new_current : (state, action) => {
            state.new_doctor.push(action.payload)
        },
        all_doctors :  (state,action) => {
            state.doctors =  action.payload
        },
        current_doctor : (state, action) => {
             state.current_disease.push(action.payload)
        }
    },
    extraReducers( builder){
        builder
        .addCase(registerDoctor.pending, (state,action) => {
            state.status="Loading"
        })
        .addCase(registerDoctor.fulfilled, (state,action) => {
            state.status  ="succesfull",
            state.new_doctor  =  action.payload
        })
        .addCase(registerDoctor.rejected, (state,action) =>  {
            state.status="Failed",
            state.error  = action.error.message
        })
        .addCase(getAllDoctors.pending, (state,action) => {
            state.status="Loading"
        })
        .addCase(getAllDoctors.fulfilled, (state,action) => {
            state.status  ="succesfull",
            state.all_doctors  =  action.payload
        })
        .addCase(getAllDoctors.rejected, (state,action) =>  {
            state.status="Failed",
            state.error  = action.error.message
        })
        .addCase(getCategoryDoctors.pending, (state,action) => {
            state.status="Loading"
        })
        .addCase(getCategoryDoctors.fulfilled, (state,action) => {
            state.status  ="succesfull",
            state.category_doctors  =  action.payload
        })
        .addCase(getCategoryDoctors.rejected, (state,action) =>  {
            state.status="Failed",
            state.error  = action.error.message
        })
    }

})

export const {new_doctor, all_doctors,current_doctor}  =  doctorSlice.actions;

export default doctorSlice.reducer

