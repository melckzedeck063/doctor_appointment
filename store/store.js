import {configureStore} from '@reduxjs/toolkit' ;

import user_reducer from './reducers/user_reducer';
import disease  from './reducers/disease_reducer'
import doctor from './reducers/doctor_reducer';
import message from './reducers/message_reducer';

export const store  =  configureStore({
    reducer :  {
         user_reducer,
         disease,
         doctor,
         message
    }
})