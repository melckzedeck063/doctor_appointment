import {configureStore} from '@reduxjs/toolkit' ;

import user_reducer from './reducers/user_reducer';
import disease  from './reducers/disease_reducer'

export const store  =  configureStore({
    reducer :  {
         user_reducer,
         disease
    }
})